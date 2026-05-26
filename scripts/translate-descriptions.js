/**
 * Translates the short `description` / `description_en` frontmatter field on
 * every skill + mcp markdown file to Turkish, writing a sibling
 * `description_tr` field.
 *
 * Submits as a single Anthropic Message Batch using Haiku 4.5. Skips files
 * that already have description_tr, or whose source text is < 20 chars.
 */
import Anthropic from '@anthropic-ai/sdk';
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('Set ANTHROPIC_API_KEY first');
  process.exit(1);
}

const MODEL = 'claude-haiku-4-5-20251001';
const MAX_TOKENS = 500;
const MIN_LENGTH = 20;
const MAX_REQUESTS_PER_BATCH = 10000;

const client = new Anthropic();

const translationPrompt = (text) => `You are a professional translator. Translate the following English text to natural Turkish. This is a short product description for developer tools.

CRITICAL:
- Output ONLY the Turkish translation, no quotes, no preamble
- Keep technical terms in English when commonly used in Turkish dev community (API, function, endpoint, repo, README)
- Natural Turkish, not literal translation
- 1-3 sentences max, same length range as input

TEXT TO TRANSLATE:
${text}`;

function parseFile(path) {
  const raw = readFileSync(path, 'utf8');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return null;
  let frontmatter;
  try {
    frontmatter = yaml.load(match[1]) ?? {};
  } catch {
    return null;
  }
  return { frontmatter };
}

const dirs = [
  { dir: join(ROOT, 'src', 'content', 'skills'), prefix: 'skill', field: 'description_en' },
  { dir: join(ROOT, 'src', 'content', 'mcp'), prefix: 'mcp', field: 'description' },
  { dir: join(ROOT, 'src', 'content', 'cursor-rules'), prefix: 'cursor', field: 'description' },
];

const requests = [];
const customIdToPath = {};
let skippedHasTr = 0;
let skippedShort = 0;
let skippedBadFormat = 0;
let totalInputChars = 0;
let counter = 0;

for (const { dir, prefix, field } of dirs) {
  const files = readdirSync(dir).filter((f) => f.endsWith('.md'));
  for (const file of files) {
    const filePath = join(dir, file);
    const parsed = parseFile(filePath);
    if (!parsed) {
      skippedBadFormat++;
      continue;
    }
    if (parsed.frontmatter.description_tr) {
      skippedHasTr++;
      continue;
    }
    const src = parsed.frontmatter[field];
    if (!src || typeof src !== 'string' || src.trim().length < MIN_LENGTH) {
      skippedShort++;
      continue;
    }

    const prompt = translationPrompt(src.trim());
    totalInputChars += prompt.length;

    const customId = `${prefix}_${counter++}`;
    customIdToPath[customId] = filePath;

    requests.push({
      custom_id: customId,
      params: {
        model: MODEL,
        max_tokens: MAX_TOKENS,
        messages: [{ role: 'user', content: prompt }],
      },
    });
  }
}

console.log(`Collected ${requests.length} requests`);
console.log(`  Skipped (already has description_tr): ${skippedHasTr}`);
console.log(`  Skipped (source < ${MIN_LENGTH} chars / missing): ${skippedShort}`);
console.log(`  Skipped (bad frontmatter): ${skippedBadFormat}`);

if (requests.length === 0) {
  console.log('Nothing to translate.');
  process.exit(0);
}

if (requests.length > MAX_REQUESTS_PER_BATCH) {
  console.error(
    `Too many requests (${requests.length} > ${MAX_REQUESTS_PER_BATCH}). Split needed.`,
  );
  process.exit(1);
}

const batch = await client.messages.batches.create({ requests });

writeFileSync(join(__dirname, 'translate-desc-batch-id.txt'), batch.id);
writeFileSync(
  join(__dirname, 'translate-desc-batch-map.json'),
  JSON.stringify(customIdToPath, null, 2),
);

const inputTokensEstimate = Math.ceil(totalInputChars / 4);
const outputTokensEstimate = Math.ceil(inputTokensEstimate * 0.5); // short outputs
// Haiku 4.5: $1/M input, $5/M output. Batch = 50% off.
const inputCost = (inputTokensEstimate / 1_000_000) * 1 * 0.5;
const outputCost = (outputTokensEstimate / 1_000_000) * 5 * 0.5;

console.log('');
console.log(`Batch ID: ${batch.id}`);
console.log(`Requests submitted: ${requests.length}`);
console.log(`Estimated input tokens:  ~${inputTokensEstimate.toLocaleString()}`);
console.log(`Estimated output tokens: ~${outputTokensEstimate.toLocaleString()}`);
console.log(
  `Estimated cost (50% batch discount): ~$${(inputCost + outputCost).toFixed(3)}`,
);
console.log('Typical completion: minutes (short prompts).');
console.log('');
console.log('Next step: node scripts/translate-desc-fetch.js');
