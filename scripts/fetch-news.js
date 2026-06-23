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
  return String(str ?? '')
    .toLowerCase()
    .replace(/[çÇ]/g, 'c').replace(/[ğĞ]/g, 'g').replace(/[ıİ]/g, 'i')
    .replace(/[öÖ]/g, 'o').replace(/[şŞ]/g, 's').replace(/[üÜ]/g, 'u')
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

async function generateDraft(item, catalogStr, validPaths) {
  const prompt = `Sen nayomy.com için Türkçe AI haber editörüsün. Aşağıdaki İngilizce haberi işle.

GÖREV:
1. Özgün Türkçe başlık yaz (RSS başlığının birebir çevirisi DEĞİL, yeniden yazılmış, max 70 karakter)
2. Kısa Türkçe özet: 2-3 cümle, liste sayfası için
3. 300-500 kelime Türkçe gövde yaz (aşağıdaki KATEGORI kuralına göre)
4. Haberi şu üç kategoriden birine sınıflandır:
   - "urun": yeni araç/model/özellik/kurs çıkışı
   - "sirket": şirket hamlesi/anlaşma/işe alım/yatırım
   - "trend": sektörel/politik/genel eğilim
5. Varsa ilgili nayomy katalog linki

GÖVDE KURALLARI:
- Teknik terimler İngilizce kalsın (API, Claude, MCP, GPT, vb.)
- Spekülasyon yok, sadece haberin söylediği şey
- "Sessizce yayınladı", "ezber bozdu" gibi abartı yok
- Kategori "urun" ise: "Bu Türk geliştirici/kullanıcı için ne anlama geliyor?" diye kısa bir paragraf ekle
- Kategori "sirket" ise: "Bu hamle neden önemli?" yorumu ekle
- Kategori "trend" ise: "Türkiye/Türk ekosistemi bu eğilimde nerede duruyor?" perspektifi ekle

İÇ LİNK KURALI (KRİTİK):
Aşağıda nayomy.com katalog listesi var (isim → /yol/). Haberle DOĞRUDAN ilgili bir kayıt varsa relatedLink'e o yolu koy. Yoksa null bırak.
ASLA zorla bağlantı kurma, ASLA listede olmayan bir yol uydurma.

KATALOG (top kayıtlar, yıldıza göre):
${catalogStr}

ÇIKTI: SADECE JSON, başka hiçbir şey yazma:
{
  "title": "Türkçe başlık",
  "summary": "2-3 cümle özet",
  "body": "300-500 kelime Türkçe gövde",
  "category": "urun|sirket|trend",
  "relatedLink": "/mcp/slug/ veya null"
}

KAYNAK: ${item.source}
ORİJİNAL BAŞLIK: ${item.title}
İÇERİK:
${item.content.slice(0, 3000)}`;

  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1500,
    messages: [{ role: 'user', content: prompt }],
  });

  const text = response.content[0].text.trim();
  const cleaned = text.replace(/```json\s*/g, '').replace(/```/g, '').trim();

  let parsed;
  try {
    parsed = JSON.parse(cleaned);
  } catch (e) {
    console.warn(`⚠  JSON parse hatası: ${cleaned.slice(0, 200)}`);
    return null;
  }

  // Kod tarafı doğrulama: relatedLink gerçekten katalogda var mı?
  if (parsed.relatedLink && !validPaths.has(parsed.relatedLink)) {
    console.warn(`⚠  relatedLink katalogda yok, null'a düşürüldü: ${parsed.relatedLink}`);
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

  // 4. Her haber için Sonnet ile zengin taslak üret
  console.log('\n🤖 Sonnet ile taslak üretimi başlıyor...\n');
  const drafts = [];
  const usedSlugs = new Set(existingSlugs);

  for (const item of selected) {
    process.stdout.write(`[${drafts.length + 1}/${selected.length}] ${item.source}: ${item.title.slice(0, 55)}... `);
    try {
      const result = await generateDraft(item, catalogStr, validPaths);
      if (!result) {
        console.log('❌');
        continue;
      }

      const slug = makeNewsSlug(result.title, usedSlugs);
      usedSlugs.add(slug);

      const id = `${slugify(item.source)}-${slug}-${Date.now()}`;
      drafts.push({
        id,
        slug,
        title: result.title,
        summary: result.summary,
        body: result.body,
        category: result.category,
        relatedLink: result.relatedLink ?? null,
        originalTitle: item.title,
        originalSummary: item.content.slice(0, 800),
        source: item.source,
        sourceUrl: item.link,
        pubDate: item.pubDate,
        fetchedAt: new Date().toISOString(),
        status: 'pending',
      });
      console.log(`✓ [${result.category}]${result.relatedLink ? ' 🔗' : ''}`);
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
