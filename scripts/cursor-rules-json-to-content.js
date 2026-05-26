/**
 * cursor-rules-json-to-content.js
 * Converts cursor-rules.json → src/content/cursor-rules/{slug}.md files.
 * Idempotent: clears the output directory before writing.
 *
 * Cursor rule bodies are plain text / code-like; we do NOT rewrite image
 * paths the way mcp-json-to-content.js does.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, unlinkSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const INPUT = join(ROOT, 'cursor-rules.json');
const OUTPUT_DIR = join(ROOT, 'src', 'content', 'cursor-rules');

// ── helpers ──────────────────────────────────────────────────

function ys(value) {
  const str = String(value ?? '');
  const escaped = str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\r?\n/g, '\\n')
    .replace(/\t/g, '\\t');
  return `"${escaped}"`;
}

function yn(value) {
  const n = Number(value ?? 0);
  return isNaN(n) ? 0 : n;
}

// Strip a leading YAML frontmatter block from rule bodies (common in .mdc files)
// so it doesn't accidentally render as a wonky HR + paragraph inside the page.
function stripLeadingFrontmatter(body) {
  return body.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');
}

// ── main ─────────────────────────────────────────────────────

if (!existsSync(INPUT)) {
  console.error(`❌ ${INPUT} not found — run fetch-cursor-rules.js first`);
  process.exit(1);
}

const { rules } = JSON.parse(readFileSync(INPUT, 'utf8'));

try {
  readdirSync(OUTPUT_DIR).forEach((f) => unlinkSync(join(OUTPUT_DIR, f)));
} catch (_) { /* dir may not exist yet */ }
mkdirSync(OUTPUT_DIR, { recursive: true });

let written = 0;
const seen = new Set();

for (const r of rules) {
  const slug = r.slug;
  if (!slug) { console.warn(`⚠  No slug for ${r.name}, skipping`); continue; }
  if (seen.has(slug)) { console.warn(`⚠  Duplicate slug skipped: ${slug}`); continue; }
  seen.add(slug);

  const lines = [
    '---',
    `name: ${ys(r.name)}`,
    `clean_name: ${ys(r.clean_name ?? r.name)}`,
    `description: ${ys(r.description ?? '')}`,
    `category: ${ys(r.category ?? 'Other')}`,
    `repo: ${ys(r.repo)}`,
    `stars: ${yn(r.stars)}`,
    `path: ${ys(r.path ?? '')}`,
    `url: ${ys(r.url ?? `https://github.com/${r.repo}`)}`,
    `body_length: ${yn(r.body_length)}`,
  ];

  if (r.file_extension) lines.push(`file_extension: ${ys(r.file_extension)}`);

  const body = stripLeadingFrontmatter((r.body ?? '').trim());
  lines.push('---', '', body, '');

  writeFileSync(join(OUTPUT_DIR, `${slug}.md`), lines.join('\n'), 'utf8');
  written++;
}

console.log(`✓ ${written} cursor rule files written to src/content/cursor-rules/`);
