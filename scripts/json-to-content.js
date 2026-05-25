/**
 * Converts skills.json → src/content/skills/[slug].md files.
 * Idempotent: clears the output directory before writing.
 *
 * Slug format: {repo-slug}__{name-slug}
 *   e.g. anthropics-skills__pdf, theodo-group-debug-that__debug-that
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, unlinkSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const INPUT = join(ROOT, 'skills.json');
const OUTPUT_DIR = join(ROOT, 'src', 'content', 'skills');

// ── helpers ──────────────────────────────────────────────────

function slugify(str) {
  return String(str ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function makeSlug(repo, name) {
  return `${slugify(repo)}__${slugify(name)}`;
}

// Serialize a value as a YAML double-quoted string.
function ys(value) {
  const str = String(value ?? '');
  const escaped = str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\r?\n/g, '\\n')
    .replace(/\t/g, '\\t');
  return `"${escaped}"`;
}

// ── main ─────────────────────────────────────────────────────

const { skills } = JSON.parse(readFileSync(INPUT, 'utf8'));

// Idempotent: clear output dir
try {
  readdirSync(OUTPUT_DIR).forEach(f => unlinkSync(join(OUTPUT_DIR, f)));
} catch (_) { /* dir may not exist yet */ }
mkdirSync(OUTPUT_DIR, { recursive: true });

let written = 0;
const seen = new Set();

for (const skill of skills) {
  const slug = makeSlug(skill.repo, skill.name);

  // Guard against duplicate slugs (shouldn't happen, but be safe)
  if (seen.has(slug)) {
    console.warn(`⚠  Duplicate slug skipped: ${slug}`);
    continue;
  }
  seen.add(slug);

  const lines = [
    '---',
    `name: ${ys(skill.name)}`,
    `description_en: ${ys(skill.description_en ?? '')}`,
  ];

  // Only emit description_tr when non-empty (schema marks it optional)
  if (skill.description_tr) {
    lines.push(`description_tr: ${ys(skill.description_tr)}`);
  }

  lines.push(
    `category: ${ys(skill.category ?? 'Other')}`,
    `repo: ${ys(skill.repo)}`,
    `stars: ${Number(skill.stars ?? 0)}`,
    `url: ${ys(skill.url ?? '')}`,
    `path: ${ys(skill.path ?? '')}`,
    `is_collection: ${skill.is_collection === true}`,
    '---',
    '',
    // Body: description_en as Markdown prose
    (skill.description_en ?? '').trim(),
    '',
  );

  writeFileSync(join(OUTPUT_DIR, `${slug}.md`), lines.join('\n'), 'utf8');
  written++;
}

console.log(`✓ ${written} skill files written to src/content/skills/`);
