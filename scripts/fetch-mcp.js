#!/usr/bin/env node
/**
 * fetch-mcp.js
 * Parses tolkonepiu/best-of-mcp-servers projects.yaml,
 * fetches READMEs from GitHub, and outputs mcp.json.
 *
 * Usage:
 *   GITHUB_TOKEN=ghp_xxx node scripts/fetch-mcp.js
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = path.join(__dirname, '..', 'mcp.json');

const TOKEN = process.env.GITHUB_TOKEN;
if (!TOKEN) {
  console.error('❌ GITHUB_TOKEN environment variable is required');
  process.exit(1);
}

const HEADERS = {
  Authorization: `Bearer ${TOKEN}`,
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'User-Agent': 'nayomy-mcp-crawler',
};

const YAML_URL =
  'https://raw.githubusercontent.com/tolkonepiu/best-of-mcp-servers/main/projects.yaml';
const MIN_STARS = 50;
const BODY_LIMIT = 100_000;

// ── GitHub API helpers ──────────────────────────────────────────────────────

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function gh(endpoint) {
  const url = endpoint.startsWith('http') ? endpoint : `https://api.github.com${endpoint}`;
  const res = await fetch(url, { headers: HEADERS });
  if (!res.ok) {
    if (res.status === 403) {
      const remaining = res.headers.get('x-ratelimit-remaining');
      console.warn(`⚠️  Rate limited (remaining: ${remaining}). Sleeping 60s...`);
      await sleep(60_000);
      return gh(endpoint);
    }
    if (res.status === 404) return null;
    throw new Error(`GitHub API ${res.status}: ${url}`);
  }
  return res.json();
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function slugify(str) {
  return String(str ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function makeSlug(repo) {
  const [owner, name] = repo.split('/');
  return `${slugify(owner)}__${slugify(name)}`;
}

// Extract first real paragraph from markdown (skip headings, badges, etc.)
function extractFirstParagraph(md) {
  if (!md) return '';
  const lines = md.split('\n');
  let inBlock = false;
  let paragraph = [];

  for (const raw of lines) {
    const line = raw.trim();
    if (line.startsWith('```')) { inBlock = !inBlock; continue; }
    if (inBlock) continue;
    if (!line || line.startsWith('#') || line.startsWith('!') ||
        line.startsWith('<') || line.startsWith('[!') ||
        /^\[.*\]\(.*\)$/.test(line) || line.startsWith('---') ||
        line.startsWith('===') || line.startsWith('|')) {
      if (paragraph.length) break;
      continue;
    }
    paragraph.push(line);
    if (paragraph.join(' ').length > 300) break;
  }

  return paragraph.join(' ').slice(0, 400);
}

async function fetchReadme(repo) {
  // Try common README filenames
  for (const name of ['README.md', 'readme.md', 'README.MD', 'README']) {
    const data = await gh(`/repos/${repo}/contents/${name}`);
    if (data?.content) {
      return Buffer.from(data.content, 'base64').toString('utf-8');
    }
  }
  return null;
}

async function fetchRepoInfo(repo) {
  return gh(`/repos/${repo}`);
}

// ── Category mapping (best-of-lists standard categories → clean titles) ────

function normalizeCategoryTitle(raw) {
  if (!raw) return 'Other';
  // Already a clean title from YAML, just capitalize nicely
  return raw
    .split(/[\s_-]+/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log('🚀 Nayomy MCP crawler started\n');
  const startTime = Date.now();

  // 1. Fetch and parse projects.yaml
  console.log('📥 Fetching projects.yaml...');
  const rawYaml = await fetch(YAML_URL).then(r => {
    if (!r.ok) throw new Error(`Failed to fetch YAML: ${r.status}`);
    return r.text();
  });

  const doc = yaml.load(rawYaml);

  // 2. Build category map: slug → title
  const catMap = {};
  const categoriesRaw = doc.categories ?? [];
  for (const c of categoriesRaw) {
    const slug = c.category ?? c.id ?? '';
    const title = c.title ?? normalizeCategoryTitle(slug);
    if (slug) catMap[slug] = title;
  }
  console.log(`   ${Object.keys(catMap).length} categories found`);

  // 3. Collect projects
  const projectsRaw = doc.projects ?? [];
  console.log(`   ${projectsRaw.length} total projects in YAML\n`);

  // Pre-filter: must have github_id and (if star_count present) >= MIN_STARS
  const candidates = projectsRaw.filter(p => {
    if (!p.github_id) return false;
    if (p.star_count != null && p.star_count < MIN_STARS) return false;
    return true;
  });
  console.log(`   ${candidates.length} candidates after pre-filter\n`);

  // 4. Process each candidate
  const servers = [];
  let fetched = 0;
  let skipped = 0;

  for (const p of candidates) {
    const repo = String(p.github_id).trim();
    if (!repo.includes('/')) { skipped++; continue; }

    process.stdout.write(`   [${fetched + skipped + 1}/${candidates.length}] ${repo} ... `);

    try {
      // Fetch repo info (stars, license, language, homepage)
      const repoInfo = await fetchRepoInfo(repo);
      await sleep(100);

      if (!repoInfo) { process.stdout.write('404\n'); skipped++; continue; }

      const stars = repoInfo.stargazers_count ?? p.star_count ?? 0;
      if (stars < MIN_STARS) { process.stdout.write(`skip (${stars}★)\n`); skipped++; continue; }

      // Fetch README
      const readmeMd = await fetchReadme(repo);
      await sleep(100);

      let body = readmeMd ?? '';
      const body_length = body.length;
      if (body.length > BODY_LIMIT) {
        body = body.slice(0, BODY_LIMIT) + '\n\n[TRUNCATED — view full content on GitHub]';
      }

      // Description: YAML → README first paragraph
      const yamlDesc = p.description ? String(p.description).trim() : '';
      const description_en = yamlDesc || extractFirstParagraph(body) || repoInfo.description || '';

      // Category: first category_label → map to title
      const firstCat = p.category ?? '';
      const category = catMap[firstCat] ?? normalizeCategoryTitle(firstCat) ?? 'Other';

      // License
      const license = p.license
        ?? repoInfo.license?.spdx_id
        ?? repoInfo.license?.name
        ?? null;

      // Language
      const language = repoInfo.language ?? null;

      // Package IDs
      const npm_id   = p.npm_id   ?? null;
      const pypi_id  = p.pypi_id  ?? null;
      const docker_image = p.dockerhub_id ?? p.docker_image ?? null;

      // Homepage
      const homepage = (p.homepage && p.homepage !== 'null')
        ? p.homepage
        : repoInfo.homepage || null;

      const server = {
        name: String(p.name ?? repo.split('/')[1]).trim(),
        slug: makeSlug(repo),
        description_en: description_en.slice(0, 400),
        category,
        repo,
        stars,
        license,
        language,
        npm_id,
        pypi_id,
        docker_image,
        homepage,
        url: `https://github.com/${repo}`,
        body,
        body_length,
      };

      servers.push(server);
      fetched++;
      process.stdout.write(`✓ (${stars}★, ${body_length > 0 ? Math.round(body_length / 1024) + 'KB' : 'no readme'})\n`);
    } catch (e) {
      process.stdout.write(`⚠️  ${e.message}\n`);
      skipped++;
    }
  }

  // 5. Sort by stars
  servers.sort((a, b) => b.stars - a.stars);

  // 6. Build category stats
  const catStats = {};
  for (const s of servers) {
    catStats[s.category] = (catStats[s.category] ?? 0) + 1;
  }

  // 7. Write mcp.json
  const output = {
    generated_at: new Date().toISOString(),
    total: servers.length,
    categories: catStats,
    servers,
  };

  await fs.writeFile(OUTPUT_PATH, JSON.stringify(output, null, 2));

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  const withBody = servers.filter(s => s.body_length > 0).length;
  const totalBodyChars = servers.reduce((acc, s) => acc + (s.body_length ?? 0), 0);
  const fileSizeKB = Math.round(JSON.stringify(output).length / 1024);
  const topCat = Object.entries(catStats).sort((a, b) => b[1] - a[1])[0];

  console.log(`\n✅ Done in ${elapsed}s`);
  console.log(`   ${servers.length} MCP servers (${skipped} skipped)`);
  console.log(`   ${withBody} with README content`);
  console.log(`   Total body: ${(totalBodyChars / 1000).toFixed(0)}k chars`);
  console.log(`   Largest category: "${topCat?.[0]}" (${topCat?.[1]} servers)`);
  console.log(`   mcp.json size: ~${fileSizeKB} KB`);
  console.log(`   Written to ${OUTPUT_PATH}`);
  console.log(`\n   Top 5 categories:`);
  Object.entries(catStats)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .forEach(([cat, count]) => console.log(`     ${cat}: ${count}`));
}

main().catch(e => {
  console.error('💥 Crawler failed:', e);
  process.exit(1);
});
