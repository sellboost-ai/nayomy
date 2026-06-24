#!/usr/bin/env node
/**
 * fetch-news.js
 * Günlük cron ile çalışır. 10 RSS kaynağından son 7 günün haberlerini çeker,
 * günde en fazla 3-5 en ilgili haberi Claude Sonnet ile zenginleştirir
 * (300-500 kelime gövde + kategori + iç link), news-pending.json'a taslak yazar.
 *
 * Kullanım:
 *   ANTHROPIC_API_KEY=sk-ant-xxx node scripts/fetch-news.js
 */

import Anthropic from '@anthropic-ai/sdk';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import Parser from 'rss-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PENDING_PATH = join(ROOT, 'news-pending.json');
const PUBLISHED_PATH = join(ROOT, 'news.json');

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('❌ ANTHROPIC_API_KEY environment variable gerekli');
  process.exit(1);
}

const client = new Anthropic();
const parser = new Parser({
  timeout: 20000,
  headers: { 'User-Agent': 'nayomy-news-crawler/1.0' },
});

const MAX_DRAFTS_PER_RUN = 5;

// 10 onaylı kaynak (tier belirtildi — seçimde öncelik için)
const SOURCES = [
  // Tier 1 — Resmi şirket blogları
  { name: 'Anthropic',         url: 'https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_anthropic.xml', tier: 1 },
  { name: 'OpenAI News',       url: 'https://openai.com/news/rss.xml', tier: 1 },
  { name: 'Google DeepMind',   url: 'https://deepmind.google/blog/rss.xml', tier: 1 },
  { name: 'Cursor Blog',       url: 'https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_cursor.xml', tier: 1 },
  { name: 'Hugging Face',      url: 'https://huggingface.co/blog/feed.xml', tier: 1 },
  { name: 'Mistral AI',        url: 'https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_mistral.xml', tier: 1 },
  { name: 'Claude Code',       url: 'https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md', tier: 1, isChangelog: true },
  // Tier 2 — Editorial / Aggregator
  { name: 'MarkTechPost',      url: 'https://www.marktechpost.com/feed/', tier: 2 },
  { name: 'TechCrunch AI',     url: 'https://techcrunch.com/category/artificial-intelligence/feed/', tier: 2 },
  { name: 'The Verge AI',      url: 'https://www.theverge.com/ai-artificial-intelligence/rss/index.xml', tier: 2 },
];

const MAX_AGE_DAYS = 7;
const cutoffDate = new Date(Date.now() - MAX_AGE_DAYS * 24 * 60 * 60 * 1000);

// ── Helpers ───────────────────────────────────────────────────────────────

function slugify(str) {
  // Turkish char replacement MUST come before toLowerCase:
  // İ (U+0130) doesn't reliably map to 'i' via JS toLowerCase in all envs.
  return String(str ?? '')
    .replace(/[çÇ]/g, 'c')
    .replace(/[ğĞ]/g, 'g')
    .replace(/[ıIİ]/g, 'i')   // ı(U+0131), I(U+0049), İ(U+0130)
    .replace(/[öÖ]/g, 'o')
    .replace(/[şŞ]/g, 's')
    .replace(/[üÜ]/g, 'u')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

function makeSkillSlug(repo, name) {
  const s = (v) => String(v ?? '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  return `${s(repo)}__${s(name)}`;
}

function loadExistingUrls() {
  const urls = new Set();
  for (const path of [PENDING_PATH, PUBLISHED_PATH]) {
    if (existsSync(path)) {
      try {
        const data = JSON.parse(readFileSync(path, 'utf8'));
        (data.items || []).forEach(item => urls.add(item.sourceUrl));
      } catch (e) {
        console.warn(`⚠  ${path} okunamadı: ${e.message}`);
      }
    }
  }
  return urls;
}

function loadExistingSlugs() {
  const slugs = new Set();
  for (const path of [PENDING_PATH, PUBLISHED_PATH]) {
    if (existsSync(path)) {
      try {
        const data = JSON.parse(readFileSync(path, 'utf8'));
        (data.items || []).forEach(item => { if (item.slug) slugs.add(item.slug); });
      } catch (_) {}
    }
  }
  return slugs;
}

function makeNewsSlug(title, usedSlugs) {
  const base = slugify(title);
  if (!usedSlugs.has(base)) return base;
  const suffix = Date.now().toString(36).slice(-4);
  return `${base}-${suffix}`;
}

// ── Catalog — sadece top kaydı Sonnet'e ver ───────────────────────────────

function buildCatalog() {
  const entries = [];
  const validPaths = new Set();

  try {
    const mcp = JSON.parse(readFileSync(join(ROOT, 'mcp.json'), 'utf8'));
    (mcp.servers || [])
      .sort((a, b) => (b.stars || 0) - (a.stars || 0))
      .slice(0, 60)
      .forEach(s => {
        const path = `/mcp/${s.slug}/`;
        entries.push(`${s.name} → ${path}`);
        validPaths.add(path);
      });
  } catch (e) { console.warn('⚠  mcp.json yüklenemedi:', e.message); }

  try {
    const sk = JSON.parse(readFileSync(join(ROOT, 'skills.json'), 'utf8'));
    (sk.skills || [])
      .sort((a, b) => (b.stars || 0) - (a.stars || 0))
      .slice(0, 60)
      .forEach(s => {
        const path = `/skill/${makeSkillSlug(s.repo, s.name)}/`;
        entries.push(`${s.name} → ${path}`);
        validPaths.add(path);
      });
  } catch (e) { console.warn('⚠  skills.json yüklenemedi:', e.message); }

  try {
    const cr = JSON.parse(readFileSync(join(ROOT, 'cursor-rules.json'), 'utf8'));
    (cr.rules || [])
      .sort((a, b) => (b.stars || 0) - (a.stars || 0))
      .slice(0, 40)
      .forEach(r => {
        const path = `/cursor-rules/${r.slug}/`;
        entries.push(`${r.clean_name || r.name} → ${path}`);
        validPaths.add(path);
      });
  } catch (e) { console.warn('⚠  cursor-rules.json yüklenemedi:', e.message); }

  return { catalogStr: entries.join('\n'), validPaths };
}

// ── Makale içeriğini çek (RSS snippet yetersizse) ─────────────────────────

async function fetchArticleText(url) {
  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(12000),
      headers: { 'User-Agent': 'nayomy-news-crawler/1.0', Accept: 'text/html' },
    });
    if (!res.ok) return '';
    const html = await res.text();
    const text = html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/\s{2,}/g, ' ')
      .trim();
    return text.slice(0, 6000);
  } catch (_) {
    return '';
  }
}

// ── Seçim: tier-1 önce, sonra pubDate'e göre top MAX_DRAFTS ──────────────

function selectTopItems(allItems) {
  return [...allItems]
    .sort((a, b) => {
      if (a.tier !== b.tier) return a.tier - b.tier;
      return new Date(b.pubDate) - new Date(a.pubDate);
    })
    .slice(0, MAX_DRAFTS_PER_RUN);
}

// ── Sonnet ile zengin taslak üret ────────────────────────────────────────

function buildPrompt(item, catalogStr) {
  return `You are a bilingual AI news editor for nayomy.com. Process the following news item and produce BOTH a Turkish and an English version in a single JSON response.

SOURCE: ${item.source}
ORIGINAL TITLE: ${item.title}
CONTENT:
${item.content.slice(0, 3000)}

─── TURKISH OUTPUT (fields: title, summary, body) ───
1. title: Original Turkish headline — rewritten, NOT a literal translation, max 70 chars
2. summary: 2-3 sentence Turkish summary for the list page
3. body: MANDATORY 400-500 Turkish words. Do NOT go below 400 — this is the most critical rule.

Turkish body structure (depth over padding):
Section 1 — News summary (2 paragraphs): what happened, who, when.
Section 2 — Technical/business detail (1-2 paragraphs): features, numbers, comparisons, context.
Section 3 — Perspective paragraph (MANDATORY, min 100 words, by category):
  * "urun" → "Türk geliştiriciler için ne anlama geliyor?" + concrete getting-started steps
  * "sirket" → "Bu hamle sektörde ne değiştirir?" + competitor dynamics + market impact
  * "trend" → "Türkiye bu eğilimde nerede duruyor?" + concrete opportunities/risks for Turkish ecosystem
Rule: Keep technical terms in English. No speculation. No hype ("devrim yarattı", "ezber bozdu").

─── ENGLISH OUTPUT (fields: title_en, summary_en, body_en) ───
1. title_en: Rewritten English headline (not the raw RSS title, not a back-translation from Turkish), max 80 chars
2. summary_en: 2-3 sentence English summary for the list page
3. body_en: MANDATORY minimum 300 English words. Write directly from the original source — NOT a translation of the Turkish body.

English body structure:
Section 1 — News summary (2 paragraphs): what happened, who, when.
Section 2 — Technical/business detail (1-2 paragraphs): features, numbers, comparisons, context.
Section 3 — Perspective paragraph (MANDATORY, min 80 words, by category):
  * "urun" → "What this means for developers globally" + concrete getting-started steps
  * "sirket" → "What this move changes in the industry" + competitor dynamics + market impact
  * "trend" → "Where the global AI ecosystem stands on this" + concrete opportunities/risks
Rule: Keep technical terms as-is. No speculation. No hype.

─── CLASSIFICATION & LINK ───
category: classify into exactly one:
  - "urun": new tool/model/feature/course launch
  - "sirket": company move/deal/hiring/investment
  - "trend": industry/policy/general trend

relatedLink: nayomy.com catalog below (name → /path/). Use the path ONLY if DIRECTLY relevant. Otherwise null.
NEVER invent a path not in the list. NEVER force a connection.

CATALOG (top entries by stars):
${catalogStr}

OUTPUT: ONLY valid JSON, no markdown fences, nothing else:
{
  "title": "Turkish headline",
  "summary": "Turkish 2-3 sentence summary",
  "body": "Turkish 400-500 word body",
  "title_en": "English headline",
  "summary_en": "English 2-3 sentence summary",
  "body_en": "English 300+ word body",
  "category": "urun|sirket|trend",
  "relatedLink": "/path/ or null"
}`;
}

function extractJson(text) {
  // Strip markdown fences (with or without language tag)
  let s = text.trim().replace(/^```[\w]*\s*/i, '').replace(/\s*```$/i, '').trim();
  // If there's still content before the first '{', drop it
  const start = s.indexOf('{');
  if (start > 0) s = s.slice(start);
  // Drop anything after the last '}'
  const end = s.lastIndexOf('}');
  if (end !== -1 && end < s.length - 1) s = s.slice(0, end + 1);
  return s;
}

async function callSonnet(prompt) {
  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 4500,
    messages: [{ role: 'user', content: prompt }],
  });
  return response.content[0].text;
}

async function generateDraft(item, catalogStr, validPaths) {
  const prompt = buildPrompt(item, catalogStr);

  let parsed = null;
  for (let attempt = 1; attempt <= 2; attempt++) {
    const text = await callSonnet(prompt);
    const cleaned = extractJson(text);
    try {
      parsed = JSON.parse(cleaned);
      break;
    } catch (e) {
      if (attempt === 1) {
        console.warn(`\n   ⚠  Deneme 1 JSON parse hatası, retry yapılıyor...`);
      } else {
        console.warn(`\n   ❌ Deneme 2 de başarısız. Ham çıktı: ${cleaned.slice(0, 300)}`);
      }
    }
  }
  if (!parsed) return null;

  // Kod tarafı doğrulama: relatedLink gerçekten katalogda var mı?
  if (parsed.relatedLink && !validPaths.has(parsed.relatedLink)) {
    console.warn(`\n   ⚠  relatedLink katalogda yok, null'a düşürüldü: ${parsed.relatedLink}`);
    parsed.relatedLink = null;
  }

  // category sadece üç geçerli değerden biri olabilir
  if (!['urun', 'sirket', 'trend'].includes(parsed.category)) {
    parsed.category = 'trend';
  }

  return parsed;
}

// ── Ana akış ─────────────────────────────────────────────────────────────

async function main() {
  console.log('📰 Nayomy haber tarayıcı başladı\n');
  const startTime = Date.now();

  const existingUrls = loadExistingUrls();
  const existingSlugs = loadExistingSlugs();
  console.log(`✓ ${existingUrls.size} mevcut URL yüklendi (atlanacak)\n`);

  // 1. Tüm kaynakları tara
  const allItems = [];
  for (const source of SOURCES) {
    try {
      console.log(`📡 ${source.name}...`);
      if (source.isChangelog) {
        console.log('   (atlandı: changelog tipi)');
        continue;
      }
      const feed = await parser.parseURL(source.url);
      let newCount = 0;
      for (const item of feed.items || []) {
        const pubDate = item.isoDate ? new Date(item.isoDate) : (item.pubDate ? new Date(item.pubDate) : null);
        if (!pubDate || pubDate < cutoffDate) continue;
        if (existingUrls.has(item.link)) continue;

        allItems.push({
          source: source.name,
          tier: source.tier,
          title: item.title,
          link: item.link,
          pubDate: pubDate.toISOString(),
          content: (item.contentSnippet || item.content || item.summary || '').slice(0, 5000),
        });
        newCount++;
      }
      console.log(`   ${newCount} yeni haber`);
    } catch (e) {
      console.warn(`⚠  ${source.name}: ${e.message}`);
    }
  }

  console.log(`\n📊 Toplam ${allItems.length} yeni haber bulundu`);
  if (allItems.length === 0) {
    console.log('Yeni haber yok, çıkılıyor.');
    return;
  }

  // 2. Top 3-5 seç (tier-1 önce, sonra pubDate)
  const selected = selectTopItems(allItems);
  console.log(`\n🎯 ${selected.length} haber seçildi (max ${MAX_DRAFTS_PER_RUN}):`);
  selected.forEach((item, i) => console.log(`   ${i + 1}. [${item.source}] ${item.title.slice(0, 60)}`));

  // 3. Katalog yükle
  console.log('\n📚 Katalog yükleniyor...');
  const { catalogStr, validPaths } = buildCatalog();
  console.log(`   ${validPaths.size} katalog kaydı yüklendi`);

  // 3b. Snippet kısa olan haberler için makale içeriğini çek
  console.log('\n🔍 Kısa snippet\'ler için makale içeriği çekiliyor...');
  for (const item of selected) {
    if (item.content.length < 800 && item.link) {
      const fetched = await fetchArticleText(item.link);
      if (fetched.length > item.content.length) {
        item.content = fetched;
        process.stdout.write(`   ↳ ${item.source} (${fetched.length} char)\n`);
      }
    }
  }

  // 4. Her haber için Sonnet ile zengin taslak üret
  console.log('\n🤖 Sonnet ile taslak üretimi başlıyor...\n');
  const drafts = [];
  const usedSlugs = new Set(existingSlugs);
  let loopIdx = 0;

  for (const item of selected) {
    loopIdx++;
    process.stdout.write(`[${loopIdx}/${selected.length}] ${item.source}: ${item.title.slice(0, 55)}... `);
    try {
      const result = await generateDraft(item, catalogStr, validPaths);
      if (!result) {
        console.log('❌');
        continue;
      }

      const slug = makeNewsSlug(result.title, usedSlugs);
      usedSlugs.add(slug);
      // slug_en: use title_en if Sonnet produced one, otherwise fall back to originalTitle
      const enSlugBase = result.title_en || item.title;
      const slug_en = makeNewsSlug(enSlugBase, usedSlugs);
      usedSlugs.add(slug_en);

      const id = `${slugify(item.source)}-${slug}-${Date.now()}`;
      drafts.push({
        id,
        slug,
        slug_en,
        title: result.title,
        summary: result.summary,
        body: result.body,
        title_en: result.title_en || item.title,
        summary_en: result.summary_en || '',
        body_en: result.body_en || '',
        category: result.category,
        relatedLink: result.relatedLink ?? null,
        originalTitle: item.title,
        source: item.source,
        sourceUrl: item.link,
        pubDate: item.pubDate,
        fetchedAt: new Date().toISOString(),
        status: 'pending',
      });
      const enWords = result.body_en ? result.body_en.split(/\s+/).length : 0;
      const trWords = result.body ? result.body.split(/\s+/).length : 0;
      console.log(`✓ [${result.category}] TR:${trWords}w EN:${enWords}w${result.relatedLink ? ' 🔗' : ''}`);
    } catch (e) {
      console.log(`❌ ${e.message}`);
    }
    await new Promise(r => setTimeout(r, 300));
  }

  // 5. Mevcut pending ile birleştir
  let existing = { items: [] };
  if (existsSync(PENDING_PATH)) {
    try {
      existing = JSON.parse(readFileSync(PENDING_PATH, 'utf8'));
    } catch (_) {
      console.warn('⚠  Mevcut pending dosyası bozuk, sıfırdan yazılıyor');
    }
  }

  const merged = {
    updatedAt: new Date().toISOString(),
    items: [...drafts, ...(existing.items || [])],
  };
  writeFileSync(PENDING_PATH, JSON.stringify(merged, null, 2), 'utf8');

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n✅ Tamamlandı: ${elapsed}s`);
  console.log(`   ${drafts.length} yeni taslak oluşturuldu`);
  console.log(`   ${merged.items.length} toplam taslak (onay bekliyor)`);
}

main().catch(e => {
  console.error('💥 Hata:', e);
  process.exit(1);
});
