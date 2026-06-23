/**
 * mcp-json-to-content.js
 * Converts mcp.json → src/content/mcp/{slug}.md files.
 * Preserves existing Turkish translations (body_tr, description_tr).
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, unlinkSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const INPUT = join(ROOT, 'mcp.json');
const OUTPUT_DIR = join(ROOT, 'src', 'content', 'mcp');

// ── helpers ──────────────────────────────────────────────────────────

function rewriteImages(md, repo) {
  const rawBase = `https://raw.githubusercontent.com/${repo}/HEAD/`;
  return md
    .replace(/!\[([^\]]*)\]\((?!https?:\/\/|data:|#)([^)\s]+)(\s+"[^"]*")?\)/g,
      (_, alt, src, title) => {
        const clean = src.replace(/^\.\//, '').replace(/^\//, '');
        return `![${alt}](${rawBase}${clean}${title ?? ''})`;
      }
    )
    .replace(/<img\s[^>]*>/gi, '');
}

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

function extractTranslations(filePath) {
  if (!existsSync(filePath)) return {};
  try {
    const raw = readFileSync(filePath, 'utf8');
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match) return {};
    const fm = yaml.load(match[1]) ?? {};
    const result = {};
    if (fm.description_tr) result.description_tr = fm.description_tr;
    if (fm.body_tr) result.body_tr = fm.body_tr;
    return result;
  } catch (e) {
    console.warn(`⚠  Could not read translations from ${filePath}: ${e.message}`);
    return {};
  }
}

function yamlLiteralBlock(value) {
  if (!value) return '';
  const lines = String(value).split('\n').map(line => '  ' + line);
  return '|-\n' + lines.join('\n');
}

// ── main ─────────────────────────────────────────────────────────────

const { servers } = JSON.parse(readFileSync(INPUT, 'utf8'));

// Step 1: Read existing translations
const existingTranslations = {};
try {
  const existingFiles = readdirSync(OUTPUT_DIR);
  for (const file of existingFiles) {
    if (!file.endsWith('.md')) continue;
    const slug = file.replace(/\.md$/, '');
    const filePath = join(OUTPUT_DIR, file);
    const translations = extractTranslations(filePath);
    if (translations.description_tr || translations.body_tr) {
      existingTranslations[slug] = translations;
    }
  }
  console.log(`✓ Preserved ${Object.keys(existingTranslations).length} existing translations`);
} catch (_) {
  console.log(`No existing translations to preserve`);
}

// Step 2: Clear output dir
try {
  readdirSync(OUTPUT_DIR).forEach(f => unlinkSync(join(OUTPUT_DIR, f)));
} catch (_) { /* dir may not exist yet */ }
mkdirSync(OUTPUT_DIR, { recursive: true });

// Step 3: Write new content with preserved translations
let written = 0;
let restored = 0;
let skipped = 0;
const seen = new Set();

for (const s of servers) {
  if (!s.name || !s.repo) {
    console.warn(`⚠  Skipped (missing name/repo): ${JSON.stringify(s).slice(0, 150)}`);
    skipped++;
    continue;
  }

  const slug = s.slug;
  if (!slug || /^[-_]+$/.test(slug)) { console.warn(`⚠  Skipped (bad slug "${slug}"): ${s.name}`); skipped++; continue; }
  if (seen.has(slug)) { console.warn(`⚠  Duplicate slug skipped: ${slug}`); skipped++; continue; }
  seen.add(slug);

  const preserved = existingTranslations[slug] || {};
  const description_tr = s.description_tr || preserved.description_tr || '';
  const body_tr = preserved.body_tr || '';

  if (preserved.description_tr || preserved.body_tr) {
    restored++;
  }

  const lines = [
    '---',
    `name: ${ys(s.name)}`,
    `description: ${ys(s.description_en ?? '')}`,
  ];

  if (description_tr) {
    lines.push(`description_tr: ${ys(description_tr)}`);
  }

  lines.push(
    `category: ${ys(s.category ?? 'Other')}`,
    `repo: ${ys(s.repo)}`,
    `stars: ${yn(s.stars)}`,
    `url: ${ys(s.url ?? `https://github.com/${s.repo}`)}`,
    `body_length: ${yn(s.body_length)}`,
  );

  if (s.license)       lines.push(`license: ${ys(s.license)}`);
  if (s.language)      lines.push(`language: ${ys(s.language)}`);
  if (s.npm_id)        lines.push(`npm_id: ${ys(s.npm_id)}`);
  if (s.pypi_id)       lines.push(`pypi_id: ${ys(s.pypi_id)}`);
  if (s.docker_image)  lines.push(`docker_image: ${ys(s.docker_image)}`);
  if (s.homepage)      lines.push(`homepage: ${ys(s.homepage)}`);

  if (body_tr) {
    lines.push(`body_tr: ${yamlLiteralBlock(body_tr)}`);
  }

  const body = rewriteImages((s.body ?? '').trim(), s.repo);
  lines.push('---', '', body, '');

  writeFileSync(join(OUTPUT_DIR, `${slug}.md`), lines.join('\n'), 'utf8');
  written++;
}

console.log(`✓ ${written} yazıldı, ${skipped} atlandı`);
console.log(`✓ ${restored} files had translations restored`);