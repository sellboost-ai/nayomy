/**
 * Converts skills.json → src/content/skills/[slug].md files.
 * Preserves existing Turkish translations (body_tr, description_tr).
 *
 * Slug format: {repo-slug}__{name-slug}
 *   e.g. anthropics-skills__pdf, theodo-group-debug-that__debug-that
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, unlinkSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const INPUT = join(ROOT, 'skills.json');
const OUTPUT_DIR = join(ROOT, 'src', 'content', 'skills');

// ── helpers ──────────────────────────────────────────────────────────

function slugify(str) {
  return String(str ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function makeSlug(repo, name) {
  return `${slugify(repo)}__${slugify(name)}`;
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

function ya(arr) {
  if (!arr || arr.length === 0) return '[]';
  return '[' + arr.map(ys).join(', ') + ']';
}

// Extract existing Turkish translations from a markdown file's frontmatter
// using js-yaml (safer than custom regex).
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

// Serialize a multi-line string as a YAML literal block scalar.
function yamlLiteralBlock(value) {
  if (!value) return '';
  const lines = String(value).split('\n').map(line => '  ' + line);
  return '|-\n' + lines.join('\n');
}

// ── main ─────────────────────────────────────────────────────────────

const { skills } = JSON.parse(readFileSync(INPUT, 'utf8'));

// Step 1: Read existing translations BEFORE clearing the directory
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
  console.log(`No existing translations to preserve (dir may not exist yet)`);
}

// Step 2: Clear output dir
try {
  readdirSync(OUTPUT_DIR).forEach(f => unlinkSync(join(OUTPUT_DIR, f)));
} catch (_) { /* dir may not exist yet */ }
mkdirSync(OUTPUT_DIR, { recursive: true });

// Step 3: Write new content, merging in preserved translations
let written = 0;
let restored = 0;
const seen = new Set();

for (const skill of skills) {
  const slug = makeSlug(skill.repo, skill.name);

  if (seen.has(slug)) {
    console.warn(`⚠  Duplicate slug skipped: ${slug}`);
    continue;
  }
  seen.add(slug);

  // Merge in existing translations if available
  const preserved = existingTranslations[slug] || {};
  const description_tr = skill.description_tr || preserved.description_tr || '';
  const body_tr = preserved.body_tr || '';

  if (preserved.description_tr || preserved.body_tr) {
    restored++;
  }

  const lines = [
    '---',
    `name: ${ys(skill.name)}`,
    `description_en: ${ys(skill.description_en ?? '')}`,
  ];

  if (description_tr) {
    lines.push(`description_tr: ${ys(description_tr)}`);
  }

  lines.push(
    `category: ${ys(skill.category ?? 'Other')}`,
    `repo: ${ys(skill.repo)}`,
    `stars: ${Number(skill.stars ?? 0)}`,
    `url: ${ys(skill.url ?? '')}`,
    `path: ${ys(skill.path ?? '')}`,
    `is_collection: ${skill.is_collection === true}`,
    `body_length: ${Number(skill.body_length ?? 0)}`,
    `has_scripts: ${skill.has_scripts === true}`,
    `has_references: ${skill.has_references === true}`,
    `has_examples: ${skill.has_examples === true}`,
    `related_files: ${ya(skill.related_files)}`,
  );

  if (body_tr) {
    lines.push(`body_tr: ${yamlLiteralBlock(body_tr)}`);
  }

  lines.push(
    '---',
    '',
    (skill.body ?? '').trim(),
    '',
  );

  writeFileSync(join(OUTPUT_DIR, `${slug}.md`), lines.join('\n'), 'utf8');
  written++;
}

console.log(`✓ ${written} skill files written to src/content/skills/`);
console.log(`✓ ${restored} files had translations restored`);