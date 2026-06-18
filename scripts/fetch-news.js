#!/usr/bin/env node
/**
 * fetch-news.js
 * Günlük cron ile çalışır. 10 RSS kaynağından son 24 saatin haberlerini çeker,
 * Claude Haiku ile Türkçeye özetler, news-pending.json'a taslak olarak yazar.
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

// 10 onaylı kaynak
const SOURCES = [
  // Tier 1 — Resmi şirket blogları
  {
    name: 'Anthropic',
    url: 'https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_anthropic.xml',
    category: 'Anthropic',
  },
  {
    name: 'OpenAI News',
    url: 'https://openai.com/news/rss.xml',
    category: 'OpenAI',
  },
  {
    name: 'Google DeepMind',
    url: 'https://deepmind.google/blog/rss.xml',
    category: 'Google',
  },
  {
    name: 'Cursor Blog',
    url: 'https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_cursor.xml',
    category: 'Cursor',
  },
  {
    name: 'Hugging Face',
    url: 'https://huggingface.co/blog/feed.xml',
    category: 'Open Source',
  },
  {
    name: 'Mistral AI',
    url: 'https://raw.githubusercontent.com/Olshansk/rss-feeds/main/feeds/feed_mistral.xml',
    category: 'Mistral',
  },
  {
    name: 'Claude Code Changelog',
    url: 'https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md',
    category: 'Claude Code',
    isChangelog: true,
  },
  // Tier 2 — Editorial / Aggregator
  {
    name: 'MarkTechPost',
    url: 'https://www.marktechpost.com/feed/',
    category: 'Genel',
  },
  {
    name: 'TechCrunch AI',
    url: 'https://techcrunch.com/category/artificial-intelligence/feed/',
    category: 'Genel',
  },
  {
    name: 'The Verge AI',
    url: 'https://www.theverge.com/ai-artificial-intelligence/rss/index.xml',
    category: 'Genel',
  },
];

// Son 7 gün filtresi (cron günlük çalışsa bile gözden kaçanları yakala)
const MAX_AGE_DAYS = 7;
const cutoffDate = new Date(Date.now() - MAX_AGE_DAYS * 24 * 60 * 60 * 1000);

// Halihazırda gördüğümüz/yayınladığımız haberleri tekrar işleme
function loadExistingUrls() {
  const urls = new Set();
  for (const path of [PENDING_PATH, PUBLISHED_PATH]) {
    if (existsSync(path)) {
      try {
        const data = JSON.parse(readFileSync(path, 'utf8'));
        const items = data.items || [];
        items.forEach(item => urls.add(item.sourceUrl));
      } catch (e) {
        console.warn(`⚠  ${path} okunamadı: ${e.message}`);
      }
    }
  }
  return urls;
}

// Slug üretici
function slugify(str) {
  return String(str ?? '')
    .toLowerCase()
    .replace(/[çÇ]/g, 'c').replace(/[ğĞ]/g, 'g').replace(/[ıİ]/g, 'i')
    .replace(/[öÖ]/g, 'o').replace(/[şŞ]/g, 's').replace(/[üÜ]/g, 'u')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

// Türkçe özetleyici — Claude Haiku 4.5
async function translateAndSummarize(title, content, sourceName) {
  const prompt = `Sen profesyonel bir AI haber editörüsün. Aşağıdaki İngilizce haberi Türkçe'ye çevir ve kısa bir özet hazırla.

KURALLAR:
1. Başlık: Net, ilgi çekici, abartısız bir Türkçe başlık (maksimum 70 karakter)
2. Özet: 2-3 cümle, ne olduğunu net anlatan, abartısız Türkçe
3. Teknik terimler İngilizce kalsın (API, GPT, Claude, MCP, vb.)
4. Spekülasyon yok, sadece haberin söylediği şey
5. "Sessizce yayınladı", "tek hamleyle bitirdi" gibi abartı yok

ÇIKTI FORMATI (sadece JSON, başka hiçbir şey yazma):
{
  "title": "Türkçe başlık",
  "summary": "Türkçe 2-3 cümlelik özet"
}

KAYNAK: ${sourceName}
ORIJINAL BAŞLIK: ${title}
İÇERİK:
${content.slice(0, 3000)}`;

  const response = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 500,
    messages: [{ role: 'user', content: prompt }],
  });

  const text = response.content[0].text.trim();
  // JSON'u çıkar (kod blokları varsa temizle)
  const cleaned = text.replace(/```json|```/g, '').trim();
  try {
    return JSON.parse(cleaned);
  } catch (e) {
    console.warn(`⚠  JSON parse hatası: ${cleaned.slice(0, 200)}`);
    return null;
  }
}

// Ana akış
async function main() {
  console.log('📰 Nayomy haber tarayıcı başladı\n');
  const startTime = Date.now();

  const existingUrls = loadExistingUrls();
  console.log(`✓ ${existingUrls.size} mevcut haber URL'si yüklendi (atlanacak)\n`);

  // 1. Tüm kaynakları paralel tara
  const allItems = [];
  for (const source of SOURCES) {
    try {
      console.log(`📡 ${source.name}...`);
      if (source.isChangelog) {
        // Changelog tipi kaynak (Claude Code gibi) — şimdilik atla, yapı farklı
        console.log(`   (atlandı: changelog tipi henüz desteklenmiyor)`);
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
          category: source.category,
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

  // 2. Her birini Claude Haiku ile özetle
  console.log('\n🤖 Türkçe özetleme başlıyor...\n');
  const drafts = [];
  let processed = 0;
  for (const item of allItems) {
    processed++;
    process.stdout.write(`[${processed}/${allItems.length}] ${item.source}: ${item.title.slice(0, 60)}... `);
    try {
      const translated = await translateAndSummarize(item.title, item.content, item.source);
      if (!translated) {
        console.log('❌');
        continue;
      }
      const id = `${slugify(item.source)}-${slugify(translated.title)}-${Date.now()}`;
      drafts.push({
        id,
        title: translated.title,
        summary: translated.summary,
        originalTitle: item.title,
        source: item.source,
        category: item.category,
        sourceUrl: item.link,
        pubDate: item.pubDate,
        fetchedAt: new Date().toISOString(),
        status: 'pending',
      });
      console.log('✓');
    } catch (e) {
      console.log(`❌ ${e.message}`);
    }
    // Rate limit dostu
    await new Promise(r => setTimeout(r, 200));
  }

  // 3. Mevcut pending dosyasıyla birleştir
  let existing = { items: [] };
  if (existsSync(PENDING_PATH)) {
    try {
      existing = JSON.parse(readFileSync(PENDING_PATH, 'utf8'));
    } catch (e) {
      console.warn(`⚠  Mevcut pending dosyası bozuk, sıfırdan yazılıyor`);
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
  console.log(`   Yazıldı: ${PENDING_PATH}`);
}

main().catch(e => {
  console.error('💥 Hata:', e);
  process.exit(1);
});
