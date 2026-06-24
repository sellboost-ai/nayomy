#!/usr/bin/env node
/**
 * One-off script: backfill title_en, summary_en, body_en, slug_en
 * for the 5 published news items that were created before the bilingual pipeline.
 * TR fields are never touched.
 */

import Anthropic from '@anthropic-ai/sdk';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const NEWS_PATH = join(ROOT, 'news.json');

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('❌ ANTHROPIC_API_KEY gerekli');
  process.exit(1);
}

const client = new Anthropic();

function slugify(str) {
  return String(str ?? '')
    .replace(/[çÇ]/g, 'c').replace(/[ğĞ]/g, 'g').replace(/[ıIİ]/g, 'i')
    .replace(/[öÖ]/g, 'o').replace(/[şŞ]/g, 's').replace(/[üÜ]/g, 'u')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

function extractJson(text) {
  let s = text.trim().replace(/^```[\w]*\s*/i, '').replace(/\s*```$/i, '').trim();
  const start = s.indexOf('{');
  if (start > 0) s = s.slice(start);
  const end = s.lastIndexOf('}');
  if (end !== -1 && end < s.length - 1) s = s.slice(0, end + 1);
  return s;
}

function buildEnPrompt(item) {
  return `You are an English AI news editor for nayomy.com. Write original English editorial content for the following news item.

SOURCE: ${item.source}
ORIGINAL TITLE: ${item.originalTitle}
RAW ENGLISH CONTENT (may contain nav/UI noise — extract signal, ignore menus):
${item.originalSummary || '(no raw content)'}

TURKISH BODY (for reference — covers the same story, use as a guide to what was covered, do NOT translate):
${item.body || '(no Turkish body)'}

TASK: Write clean, original English news content. NOT a translation of the Turkish. Write from the original source material.

1. title_en: Rewritten English headline (not raw RSS title verbatim), max 80 chars, punchy
2. summary_en: 2-3 sentence English summary for the list page
3. body_en: MINIMUM 300 words. Original English editorial. Same story structure as the Turkish reference but written freshly in English.

Body structure:
Section 1 — What happened (2 paragraphs): who, what, when, announced where.
Section 2 — Technical/business detail (1-2 paragraphs): key numbers, features, comparisons.
Section 3 — Perspective (min 80 words): what this means for developers/industry globally. Category is "${item.category}":
  * "urun" → what this means for developers, concrete getting-started steps
  * "sirket" → what this move changes, competitor dynamics, market impact
  * "trend" → where the global AI ecosystem stands on this

Rules: No hype. No speculation. Technical terms in English as-is.

OUTPUT: ONLY valid JSON, no markdown fences:
{
  "title_en": "...",
  "summary_en": "...",
  "body_en": "..."
}`;
}

async function callSonnet(prompt) {
  const response = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 2500,
    messages: [{ role: 'user', content: prompt }],
  });
  return response.content[0].text;
}

async function main() {
  const data = JSON.parse(readFileSync(NEWS_PATH, 'utf8'));

  // Only items with a TR slug + TR body but no slug_en
  const targets = data.items.filter(i => i.slug && i.body && !i.slug_en);
  console.log(`\n🔄 ${targets.length} eski haber için EN içerik üretilecek\n`);

  const usedSlugs = new Set(data.items.map(i => i.slug_en).filter(Boolean));

  for (const item of targets) {
    process.stdout.write(`[${item.source}] ${item.originalTitle?.slice(0, 60)}... `);

    let parsed = null;
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const text = await callSonnet(buildEnPrompt(item));
        const cleaned = extractJson(text);
        parsed = JSON.parse(cleaned);
        break;
      } catch (e) {
        if (attempt === 1) process.stdout.write('retry... ');
        else console.log(`❌ parse failed: ${e.message}`);
      }
    }
    if (!parsed) continue;

    // Generate slug_en from title_en
    const slugBase = slugify(parsed.title_en || item.originalTitle);
    let slug_en = slugBase;
    if (usedSlugs.has(slug_en)) slug_en = `${slugBase}-${Date.now().toString(36).slice(-4)}`;
    usedSlugs.add(slug_en);

    const words = parsed.body_en?.split(/\s+/).length || 0;
    console.log(`✓ ${words}w | slug_en: ${slug_en}`);

    // Patch the item in-place — TR fields untouched
    Object.assign(item, {
      title_en: parsed.title_en,
      summary_en: parsed.summary_en,
      body_en: parsed.body_en,
      slug_en,
    });

    await new Promise(r => setTimeout(r, 400));
  }

  writeFileSync(NEWS_PATH, JSON.stringify(data, null, 2), 'utf8');
  console.log('\n✅ news.json güncellendi');
}

main().catch(e => { console.error('💥', e); process.exit(1); });
