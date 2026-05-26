/**
 * Pulls results for the batch recorded in scripts/translate-batch-id.txt and
 * injects each translation back into the corresponding markdown file as a
 * `body_tr:` YAML literal block in the frontmatter.
 *
 * Safe to re-run: files already containing body_tr are not overwritten unless
 * the env var FORCE=1 is set.
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

const batchIdPath = join(__dirname, 'translate-batch-id.txt');
if (!existsSync(batchIdPath)) {
  console.error('translate-batch-id.txt not found — run translate-batch.js first');
  process.exit(1);
}
const BATCH_ID = readFileSync(batchIdPath, 'utf8').trim();

const client = new Anthropic();

const batch = await client.messages.batches.retrieve(BATCH_ID);
console.log(`Batch ${BATCH_ID}`);
console.log(`Status: ${batch.processing_status}`);
console.log(`Counts: ${JSON.stringify(batch.request_counts)}`);

if (batch.processing_status !== 'ended') {
  console.log('Batch not finished yet. Try again later.');
  process.exit(0);
}

const mapPath = join(__dirname, 'translate-batch-map.json');
if (!existsSync(mapPath)) {
  console.error('translate-batch-map.json not found — run translate-batch.js first');
  process.exit(1);
}
const customIdToPath = JSON.parse(readFileSync(mapPath, 'utf8'));

function toBlockScalar(text) {
  // YAML literal block scalar with trailing-newline strip indicator (|-).
  // Each non-empty line is indented by 2 spaces; empty lines stay empty.
  const lines = text.replace(/\r\n/g, '\n').split('\n');
  // Drop trailing empty lines so block scalar is tight.
  while (lines.length > 0 && lines[lines.length - 1] === '') lines.pop();
  return '|-\n' + lines.map((l) => (l === '' ? '' : '  ' + l)).join('\n');
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

  if (fm.body_tr && !FORCE) {
    skipped++;
    continue;
  }

  const newFrontmatter = frontmatterStr.replace(/\s+$/, '') +
    '\nbody_tr: ' + toBlockScalar(translation);

  const newRaw = `---\n${newFrontmatter}\n---\n${body}`;
  writeFileSync(filePath, newRaw);
  updated++;
}

console.log('');
console.log(`Updated: ${updated}`);
console.log(`Skipped (already had body_tr): ${skipped}`);
console.log(`Errors:  ${errors}`);
