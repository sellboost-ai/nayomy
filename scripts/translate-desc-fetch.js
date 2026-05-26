/**
 * Pulls description-translation results and injects each one as a single-line
 * `description_tr:` field into the matching markdown file's frontmatter.
 *
 * Insertion location: directly under the existing description / description_en
 * field, to keep frontmatter readable. Falls back to appending at the end of
 * the frontmatter block if the source field isn't found.
 *
 * Re-runs are safe: files already containing description_tr are skipped
 * unless FORCE=1 is set.
 */
import Anthropic from '@anthropic-ai/sdk';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('Set ANTHROPIC_API_KEY first');
  process.exit(1);
}

const FORCE = process.env.FORCE === '1';

const batchIdPath = join(__dirname, 'translate-desc-batch-id.txt');
const mapPath = join(__dirname, 'translate-desc-batch-map.json');

if (!existsSync(batchIdPath) || !existsSync(mapPath)) {
  console.error('translate-desc-batch-id.txt or map.json missing — run translate-descriptions.js first');
  process.exit(1);
}

const BATCH_ID = readFileSync(batchIdPath, 'utf8').trim();
const customIdToPath = JSON.parse(readFileSync(mapPath, 'utf8'));

const client = new Anthropic();

const batch = await client.messages.batches.retrieve(BATCH_ID);
console.log(`Batch ${BATCH_ID}`);
console.log(`Status: ${batch.processing_status}`);
console.log(`Counts: ${JSON.stringify(batch.request_counts)}`);

if (batch.processing_status !== 'ended') {
  console.log('Batch not finished yet. Try again later.');
  process.exit(0);
}

// Escape a Turkish string for safe single-line YAML double-quoted style.
function yamlDoubleQuote(str) {
  const escaped = String(str)
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\r?\n/g, ' ') // collapse newlines — descriptions are 1-3 sentences
    .replace(/\t/g, ' ')
    .trim();
  return `"${escaped}"`;
}

let updated = 0;
let skipped = 0;
let errors = 0;

for await (const result of await client.messages.batches.results(BATCH_ID)) {
  const customId = result.custom_id;
  const filePath = customIdToPath[customId];
  if (!filePath) {
    console.warn(`No file for ${customId}`);
    errors++;
    continue;
  }

  if (result.result.type !== 'succeeded') {
    console.warn(`Failed: ${customId} — ${result.result.type}`);
    if (result.result.type === 'errored') {
      console.warn(`  ${JSON.stringify(result.result.error)}`);
    }
    errors++;
    continue;
  }

  const message = result.result.message;
  const translation = message.content
    .filter((block) => block.type === 'text')
    .map((block) => block.text)
    .join('')
    .trim();

  if (!translation) {
    console.warn(`Empty translation for ${customId}`);
    errors++;
    continue;
  }

  const raw = readFileSync(filePath, 'utf8');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    console.warn(`Bad frontmatter format: ${customId}`);
    errors++;
    continue;
  }

  const frontmatterStr = match[1];
  const body = match[2];

  let fm;
  try {
    fm = yaml.load(frontmatterStr) ?? {};
  } catch (e) {
    console.warn(`YAML parse failed: ${customId} — ${e.message}`);
    errors++;
    continue;
  }

  if (fm.description_tr && !FORCE) {
    skipped++;
    continue;
  }

  const newLine = `description_tr: ${yamlDoubleQuote(translation)}`;
  // Insert right after description_en (skills) or description (mcp).
  // Both fields live on a single line in the existing files.
  let newFrontmatter;
  const sourceFieldRe = /^(description(?:_en)?:[^\n]*)$/m;
  if (sourceFieldRe.test(frontmatterStr)) {
    newFrontmatter = frontmatterStr.replace(sourceFieldRe, `$1\n${newLine}`);
  } else {
    newFrontmatter = frontmatterStr.replace(/\s+$/, '') + '\n' + newLine;
  }

  const newRaw = `---\n${newFrontmatter}\n---\n${body}`;
  writeFileSync(filePath, newRaw);
  updated++;
}

console.log('');
console.log(`Updated: ${updated}`);
console.log(`Skipped (already had description_tr): ${skipped}`);
console.log(`Errors:  ${errors}`);
