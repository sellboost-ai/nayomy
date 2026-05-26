/**
 * mcp-json-to-content.js
 * Converts mcp.json → src/content/mcp/{slug}.md files.
 * Idempotent: clears the output directory before writing.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, unlinkSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const INPUT = join(ROOT, 'mcp.json');
const OUTPUT_DIR = join(ROOT, 'src', 'content', 'mcp');

// ── helpers ──────────────────────────────────────────────────

// Rewrite relative image paths in markdown to absolute GitHub raw URLs.
// Strips <img> HTML tags (too complex to safely rewrite).
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

function yn(value) {
  const n = Number(value ?? 0);
  return isNaN(n) ? 0 : n;
}

// ── main ─────────────────────────────────────────────────────

const { servers } = JSON.parse(readFileSync(INPUT, 'utf8'));

// Idempotent: clear output dir
try {
  readdirSync(OUTPUT_DIR).forEach(f => unlinkSync(join(OUTPUT_DIR, f)));
} catch (_) { /* dir may not exist yet */ }
mkdirSync(OUTPUT_DIR, { recursive: true });

let written = 0;
const seen = new Set();

for (const s of servers) {
  const slug = s.slug;
  if (!slug) { console.warn(`⚠  No slug for ${s.name}, skipping`); continue; }
  if (seen.has(slug)) { console.warn(`⚠  Duplicate slug skipped: ${slug}`); continue; }
  seen.add(slug);

  const lines = [
    '---',
    `name: ${ys(s.name)}`,
    `description: ${ys(s.description_en ?? '')}`,
    `category: ${ys(s.category ?? 'Other')}`,
    `repo: ${ys(s.repo)}`,
    `stars: ${yn(s.stars)}`,
    `url: ${ys(s.url ?? `https://github.com/${s.repo}`)}`,
    `body_length: ${yn(s.body_length)}`,
  ];

  if (s.license)       lines.push(`license: ${ys(s.license)}`);
  if (s.language)      lines.push(`language: ${ys(s.language)}`);
  if (s.npm_id)        lines.push(`npm_id: ${ys(s.npm_id)}`);
  if (s.pypi_id)       lines.push(`pypi_id: ${ys(s.pypi_id)}`);
  if (s.docker_image)  lines.push(`docker_image: ${ys(s.docker_image)}`);
  if (s.homepage)      lines.push(`homepage: ${ys(s.homepage)}`);

  const body = rewriteImages((s.body ?? '').trim(), s.repo);
  lines.push('---', '', body, '');

  writeFileSync(join(OUTPUT_DIR, `${slug}.md`), lines.join('\n'), 'utf8');
  written++;
}

console.log(`✓ ${written} MCP server files written to src/content/mcp/`);
