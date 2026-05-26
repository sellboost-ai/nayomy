#!/usr/bin/env node
/**
 * fetch-cursor-rules.js
 * Walks rules/ in PatrickJS/awesome-cursorrules, pulls each rule's
 * .cursorrules (or .mdc) + README, and produces cursor-rules.json.
 *
 * Usage:
 *   GITHUB_TOKEN=ghp_xxx node scripts/fetch-cursor-rules.js
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = path.join(__dirname, '..', 'cursor-rules.json');

const TOKEN = process.env.GITHUB_TOKEN;
if (!TOKEN) {
  console.error('❌ GITHUB_TOKEN environment variable is required');
  process.exit(1);
}

const SOURCE_REPO = 'PatrickJS/awesome-cursorrules';
const SOURCE_BRANCH = 'main';
const RULES_DIR = 'rules';
const MAX_RULES = 200;
const BODY_LIMIT = 80_000;

const HEADERS = {
  Authorization: `Bearer ${TOKEN}`,
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'User-Agent': 'nayomy-cursor-crawler',
};

// ── GitHub API helpers ──────────────────────────────────────────────────────

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

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

async function fetchRaw(repo, branch, p) {
  const url = `https://raw.githubusercontent.com/${repo}/${branch}/${p}`;
  const res = await fetch(url, { headers: { 'User-Agent': 'nayomy-cursor-crawler' } });
  if (!res.ok) return null;
  return res.text();
}

// ── String helpers ──────────────────────────────────────────────────────────

function slugify(str) {
  return String(str ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Title-case a folder name into a readable label, preserving tech acronyms.
const ACRONYMS = new Set([
  'js', 'ts', 'css', 'html', 'api', 'ai', 'ml', 'llm', 'sql', 'php', 'cli',
  'aws', 'gcp', 'cdk', 'ios', 'ui', 'ux', 'orm', 'mvc', 'mvvm', 'dom', 'dx',
  'ssr', 'csr', 'spa', 'pwa', 'cd', 'ci', 'tdd', 'bdd', 'cqrs', 'oop',
]);
const PROPER = {
  nextjs: 'Next.js',
  nuxt: 'Nuxt',
  nestjs: 'NestJS',
  vuejs: 'Vue.js',
  vue: 'Vue',
  reactjs: 'React',
  react: 'React',
  svelte: 'Svelte',
  sveltekit: 'SvelteKit',
  angular: 'Angular',
  astro: 'Astro',
  remix: 'Remix',
  tailwind: 'Tailwind',
  typescript: 'TypeScript',
  javascript: 'JavaScript',
  node: 'Node.js',
  nodejs: 'Node.js',
  deno: 'Deno',
  bun: 'Bun',
  python: 'Python',
  fastapi: 'FastAPI',
  django: 'Django',
  flask: 'Flask',
  rails: 'Rails',
  ruby: 'Ruby',
  php: 'PHP',
  laravel: 'Laravel',
  spring: 'Spring',
  java: 'Java',
  kotlin: 'Kotlin',
  swift: 'Swift',
  flutter: 'Flutter',
  dart: 'Dart',
  rust: 'Rust',
  go: 'Go',
  golang: 'Go',
  elixir: 'Elixir',
  phoenix: 'Phoenix',
  haskell: 'Haskell',
  unity: 'Unity',
  unreal: 'Unreal',
  godot: 'Godot',
  docker: 'Docker',
  kubernetes: 'Kubernetes',
  terraform: 'Terraform',
  postgres: 'PostgreSQL',
  postgresql: 'PostgreSQL',
  mongodb: 'MongoDB',
  redis: 'Redis',
  graphql: 'GraphQL',
  rest: 'REST',
  expo: 'Expo',
  electron: 'Electron',
  tauri: 'Tauri',
  solidity: 'Solidity',
  ethereum: 'Ethereum',
  langchain: 'LangChain',
  pytorch: 'PyTorch',
  tensorflow: 'TensorFlow',
  openai: 'OpenAI',
};

function cleanName(folder) {
  let s = folder
    .replace(/-cursorrules-?(prompt-?file)?$/i, '')
    .replace(/-cursor-?rules?$/i, '')
    .replace(/-mdc$/i, '')
    .trim();
  if (!s) s = folder;
  return s
    .split('-')
    .filter(Boolean)
    .map((w) => {
      const low = w.toLowerCase();
      if (PROPER[low]) return PROPER[low];
      if (ACRONYMS.has(low)) return low.toUpperCase();
      // Mixed alphanumeric like "v2", "3" → keep
      if (/^\d/.test(w)) return w;
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(' ');
}

// Heuristic category, more-specific first.
function inferCategory(folder) {
  const f = folder.toLowerCase();
  const has = (...needles) => needles.some((n) => f.includes(n));

  if (has('react-native', 'flutter', 'swift', 'kotlin', 'android', 'ios', 'expo', 'mobile')) return 'Mobile';
  if (has('next', 'nuxt', 'remix', 'astro', 'sveltekit', 'svelte', 'vue', 'react', 'angular', 'solid', 'qwik', 'tailwind', 'shadcn', 'frontend', '-ui-', '-css', 'html')) return 'Frontend';
  if (has('fastapi', 'django', 'flask', 'rails', 'phoenix', 'spring', 'nestjs', 'hono', 'express', 'koa', 'backend', '-api-', 'rest-api', 'graphql')) return 'Backend';
  if (has('langchain', 'llm', 'rag-', 'agent', 'openai', 'anthropic', 'pytorch', 'tensorflow', 'pandas', 'numpy', 'jupyter', 'ml-', 'machine-learning', 'ai-')) return 'AI/ML';
  if (has('unity', 'unreal', 'godot', 'gamedev', 'game-')) return 'Game Dev';
  if (has('docker', 'kubernetes', 'terraform', 'helm', 'aws-', '-aws', 'gcp', 'azure', 'devops', 'ci-cd', 'ansible', 'pulumi')) return 'DevOps';
  if (has('solidity', 'ethereum', 'web3', 'blockchain', 'foundry', 'hardhat')) return 'Web3';
  if (has('electron', 'tauri', 'desktop')) return 'Desktop';
  if (has('jest', 'playwright', 'cypress', 'vitest', 'testing', 'test-')) return 'Testing';
  if (has('postgres', 'mongodb', 'sql', 'database', 'prisma', 'drizzle', 'sqlite', 'mysql')) return 'Data';
  if (has('typescript', 'javascript', 'python', 'rust', 'golang', '-go-', 'cpp', 'c-plus-plus', 'java-', 'scala', 'elixir', 'haskell', 'ruby', 'php', 'lua', 'zig')) return 'Languages';
  if (has('chrome-extension', 'vscode', 'jetbrains', 'cli-', '-cli', 'devtool')) return 'Tools';
  return 'Other';
}

// Pull a usable description from a README. Falls back to the first non-noise paragraph.
function descriptionFromReadme(md) {
  if (!md) return '';
  const lines = md.split('\n');
  let inCode = false;
  const buf = [];
  for (const raw of lines) {
    const line = raw.trim();
    if (line.startsWith('```')) { inCode = !inCode; continue; }
    if (inCode) continue;
    if (!line) { if (buf.length) break; else continue; }
    if (line.startsWith('#') || line.startsWith('!') || line.startsWith('<') ||
        line.startsWith('[!') || /^\[.*\]\(.*\)$/.test(line) ||
        line.startsWith('---') || line.startsWith('===') || line.startsWith('|')) {
      if (buf.length) break;
      continue;
    }
    buf.push(line);
    if (buf.join(' ').length > 280) break;
  }
  return buf.join(' ').slice(0, 320).trim();
}

// Pull a short description from a .cursorrules / .mdc body — first commentish/prose chunk.
function descriptionFromRule(body) {
  if (!body) return '';
  // .mdc files may start with YAML frontmatter — try to grab "description:" first.
  const fmMatch = body.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (fmMatch) {
    const desc = fmMatch[1].match(/^description:\s*(.+)$/m);
    if (desc) return desc[1].replace(/^['"]|['"]$/g, '').trim().slice(0, 320);
  }
  // Otherwise take first non-empty meaningful line.
  for (const raw of body.split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith('#') || line.startsWith('//') || line.startsWith('---')) continue;
    return line.slice(0, 320);
  }
  return '';
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log('🚀 nayomy cursor-rules crawler started\n');
  const startTime = Date.now();

  // 1. Repo info (stars)
  const repoInfo = await gh(`/repos/${SOURCE_REPO}`);
  if (!repoInfo) throw new Error(`Cannot read repo ${SOURCE_REPO}`);
  const repoStars = repoInfo.stargazers_count ?? 0;
  console.log(`   Source: ${SOURCE_REPO} (${repoStars.toLocaleString()}★)`);

  // 2. List rules/ directory (current repo layout: flat .mdc files, no subfolders)
  const listing = await gh(`/repos/${SOURCE_REPO}/contents/${RULES_DIR}?ref=${SOURCE_BRANCH}`);
  if (!Array.isArray(listing)) throw new Error('rules/ directory listing failed');
  const files = listing.filter((e) => e.type === 'file' && (e.name.endsWith('.mdc') || e.name === '.cursorrules'));
  console.log(`   ${files.length} rule files found\n`);

  const limit = Math.min(files.length, MAX_RULES);
  console.log(`   Processing first ${limit} (MAX_RULES=${MAX_RULES})\n`);

  // 3. Fetch each rule body
  const rules = [];
  let skipped = 0;

  for (let i = 0; i < limit; i++) {
    const f = files[i];
    const fileName = f.name;
    const baseName = fileName.replace(/\.(mdc|cursorrules)$/i, '');
    process.stdout.write(`   [${i + 1}/${limit}] ${fileName} ... `);

    try {
      const ruleBody = await fetchRaw(SOURCE_REPO, SOURCE_BRANCH, `${RULES_DIR}/${fileName}`);
      await sleep(80);

      if (!ruleBody || ruleBody.trim().length < 20) { process.stdout.write('empty rule\n'); skipped++; continue; }

      const description = descriptionFromRule(ruleBody) || cleanName(baseName);

      const bodyTrimmed = ruleBody.length > BODY_LIMIT
        ? ruleBody.slice(0, BODY_LIMIT) + '\n\n[TRUNCATED — view full rule on GitHub]'
        : ruleBody;

      const slug = `patrickjs-awesome-cursorrules__${slugify(baseName)}`;
      const ext = path.extname(fileName) || '.cursorrules';

      rules.push({
        name: baseName,
        slug,
        clean_name: cleanName(baseName),
        description,
        category: inferCategory(baseName),
        repo: SOURCE_REPO,
        stars: repoStars,
        path: `${RULES_DIR}/${fileName}`,
        url: `https://github.com/${SOURCE_REPO}/blob/${SOURCE_BRANCH}/${RULES_DIR}/${fileName}`,
        file_extension: ext,
        body: bodyTrimmed,
        body_length: ruleBody.length,
      });

      process.stdout.write(`✓ (${Math.round(ruleBody.length / 1024)}KB, ${inferCategory(baseName)})\n`);
    } catch (e) {
      process.stdout.write(`⚠️  ${e.message}\n`);
      skipped++;
    }
  }

  // 4. Sort by clean_name alphabetically (stars are uniform from a single source repo)
  rules.sort((a, b) => a.clean_name.localeCompare(b.clean_name));

  // 5. Category stats
  const catStats = {};
  for (const r of rules) catStats[r.category] = (catStats[r.category] ?? 0) + 1;

  // 6. Write cursor-rules.json
  const output = {
    generated_at: new Date().toISOString(),
    source: SOURCE_REPO,
    total: rules.length,
    categories: catStats,
    rules,
  };

  await fs.writeFile(OUTPUT_PATH, JSON.stringify(output, null, 2));

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  const fileKB = Math.round(JSON.stringify(output).length / 1024);
  console.log(`\n✅ Done in ${elapsed}s`);
  console.log(`   ${rules.length} rules (${skipped} skipped)`);
  console.log(`   cursor-rules.json: ${fileKB} KB`);
  console.log(`\n   Top categories:`);
  Object.entries(catStats).sort((a, b) => b[1] - a[1]).slice(0, 8)
    .forEach(([cat, n]) => console.log(`     ${cat}: ${n}`));
}

main().catch((e) => {
  console.error('💥 Crawler failed:', e);
  process.exit(1);
});
