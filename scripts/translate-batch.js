/**
 * Builds an Anthropic Message Batches request that translates the body of
 * every skill + mcp markdown file to Turkish using Claude Haiku 4.5.
 *
 * Skips files that already have `body_tr` in their frontmatter, plus files
 * whose body is empty or under 200 chars.
 *
 * Writes the batch id to scripts/translate-batch-id.txt so translate-fetch.js
 * can pick it up.
 */
import Anthropic from '@anthropic-ai/sdk';
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('Set ANTHROPIC_API_KEY first');
  process.exit(1);
}

const MODEL = 'claude-haiku-4-5-20251001';
const MAX_TOKENS = 12000;
const MIN_BODY_LENGTH = 200;
const MAX_REQUESTS_PER_BATCH = 10000;

const client = new Anthropic();

const CURSOR_NOTE = `

NOTE: This may be a .cursorrules or .mdc file with mixed prose and code-like instructions. Translate ONLY the natural language prose (explanations, descriptions). Do NOT translate:
- Code blocks
- Variable names, function names (e.g., useEffect, useState)
- File paths, URLs
- Technical patterns like 'use TypeScript', '@/components/*'
- Inline backtick code (\`like this\`)
- Tag-like syntax (e.g., #role:, role:, system:, ROLE:, USER:)`;

const translationPrompt = (body, prefix) => `You are a professional technical translator. Translate the following English markdown content to Turkish.

CRITICAL RULES:
1. Preserve ALL markdown formatting exactly (#, ##, lists, code blocks, links, images)
2. DO NOT translate code blocks (anything between \`\`\` or \` \`)
3. DO NOT translate URLs in links — keep them exact
4. DO NOT translate image URLs or alt text in technical contexts
5. DO translate prose: paragraphs, headings, list items
6. Use natural Turkish that a developer would understand
7. Technical terms: keep English when commonly used in Turkish dev community (e.g., 'API', 'function', 'request', 'endpoint')
8. Output ONLY the translated markdown, no explanation, no preamble${prefix === 'cursor' ? CURSOR_NOTE : ''}

CONTENT TO TRANSLATE:

${body}`;

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
  return { frontmatter, body: match[2] };
}

const dirs = [
  { dir: join(ROOT, 'src', 'content', 'skills'), prefix: 'skill' },
  { dir: join(ROOT, 'src', 'content', 'mcp'), prefix: 'mcp' },
  { dir: join(ROOT, 'src', 'content', 'cursor-rules'), prefix: 'cursor' },
];

const requests = [];
const customIdToPath = {};
let skippedHasTr = 0;
let skippedShort = 0;
let skippedBadFormat = 0;
let totalInputChars = 0;
let counter = 0;

for (const { dir, prefix } of dirs) {
  const files = readdirSync(dir).filter((f) => f.endsWith('.md'));
  for (const file of files) {
    const filePath = join(dir, file);
    const parsed = parseFile(filePath);
    if (!parsed) {
      skippedBadFormat++;
      continue;
    }
    if (parsed.frontmatter.body_tr) {
      skippedHasTr++;
      continue;
    }
    if (!parsed.body || parsed.body.trim().length < MIN_BODY_LENGTH) {
      skippedShort++;
      continue;
    }

    const prompt = translationPrompt(parsed.body, prefix);
    totalInputChars += prompt.length;

    // custom_id has a 64-char API limit; using an index keeps it short.
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
console.log(`  Skipped (already translated): ${skippedHasTr}`);
console.log(`  Skipped (body < ${MIN_BODY_LENGTH} chars): ${skippedShort}`);
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

writeFileSync(join(__dirname, 'translate-batch-id.txt'), batch.id);
writeFileSync(
  join(__dirname, 'translate-batch-map.json'),
  JSON.stringify(customIdToPath, null, 2),
);

// Rough estimate: ~4 chars per token.
const inputTokensEstimate = Math.ceil(totalInputChars / 4);
const outputTokensEstimate = inputTokensEstimate; // assume similar size
// Haiku 4.5 list price: $1/M input, $5/M output. Batch = 50% off.
const inputCost = (inputTokensEstimate / 1_000_000) * 1 * 0.5;
const outputCost = (outputTokensEstimate / 1_000_000) * 5 * 0.5;

console.log('');
console.log(`Batch ID: ${batch.id}`);
console.log(`Requests submitted: ${requests.length}`);
console.log(`Estimated input tokens:  ~${inputTokensEstimate.toLocaleString()}`);
console.log(`Estimated output tokens: ~${outputTokensEstimate.toLocaleString()}`);
console.log(
  `Estimated cost (50% batch discount): ~$${(inputCost + outputCost).toFixed(2)}`,
);
console.log('Typical completion: minutes to a few hours (24h max).');
console.log('');
console.log('Next step: node scripts/translate-fetch.js');
