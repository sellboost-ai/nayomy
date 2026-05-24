#!/usr/bin/env node
/**
 * fetch-skills.js
 * GitHub'da bulunan Claude/Agent skill'lerini tarar, skills.json üretir.
 *
 * Stratejiler:
 *  1. Bilinen "büyük koleksiyon" repolarını recursive tarar
 *  2. GitHub Code Search ile SKILL.md filename'ini arar
 *  3. Her SKILL.md'nin YAML frontmatter'ından name + description çeker
 *  4. Repo yıldız sayısını ekler
 *  5. Kategori atar (heuristic)
 *
 * Kullanım:
 *   GITHUB_TOKEN=ghp_xxx node scripts/fetch-skills.js
 *
 * Çıktı: ../skills.json
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = path.join(__dirname, "..", "skills.json");

const TOKEN = process.env.GITHUB_TOKEN;
if (!TOKEN) {
  console.error("❌ GITHUB_TOKEN environment variable is required");
  process.exit(1);
}

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "nayomy-skill-crawler",
};

// ============================================================================
// CONFIG
// ============================================================================

// Bilinen büyük skill koleksiyonu repoları
const SEED_REPOS = [
  "anthropics/skills",
  "ComposioHQ/awesome-claude-skills",
  "alirezarezvani/claude-skills",
  "travisvn/awesome-claude-skills",
  "abubakarsiddik31/claude-skills-collection",
  "smartnews/claude-skills",
  "Wirasm/worktree-manager-skill",
  "theodo-group/debug-that",
  "hienlh/claude-skill-slack-api",
  "atopile/atopile",
];

// Tek bir repo için maksimum kaç skill alınacak (spam'i önler)
const MAX_SKILLS_PER_REPO = 60;

// "Manuel öne çıkanlar" — koleksiyon repolarını da kart olarak göster
const COLLECTION_CARDS = [
  {
    name: "anthropics/skills",
    repo: "anthropics/skills",
    path: "",
    category: "Collection",
    description_en: "Anthropic's official skills repository. Production-grade skills, all Apache 2.0 licensed. Powers Claude's built-in document capabilities.",
    description_tr: "Anthropic'in resmi skill repository'si. Prodüksiyon kalitesinde skill'ler, Apache 2.0 lisanslı.",
    is_collection: true,
  },
  {
    name: "ComposioHQ/awesome-claude-skills",
    repo: "ComposioHQ/awesome-claude-skills",
    path: "",
    category: "Collection",
    description_en: "Mega collection of skills. Mostly API integration skills for services like Slack, GitHub, Jira, Salesforce.",
    description_tr: "Mega skill koleksiyonu. Slack, GitHub, Jira, Salesforce gibi servislere API entegrasyonları.",
    is_collection: true,
  },
  {
    name: "alirezarezvani/claude-skills",
    repo: "alirezarezvani/claude-skills",
    path: "",
    category: "Collection",
    description_en: "Hundreds of skills: engineering, marketing, product, compliance, C-level advisory, finance. Works with Claude Code + Codex + Gemini CLI.",
    description_tr: "Yüzlerce skill: engineering, marketing, product, compliance. Claude Code + Codex + Gemini CLI ile uyumlu.",
    is_collection: true,
  },
];

// Kategori tahmin etmek için anahtar kelimeler
const CATEGORY_KEYWORDS = {
  Document: ["pdf", "docx", "xlsx", "pptx", "spreadsheet", "word", "excel", "powerpoint", "doc", "csv"],
  Design: ["design", "frontend", "ui", "ux", "css", "tailwind", "canvas", "art", "color", "theme", "brand", "gif", "visual", "poster", "graphic"],
  Development: ["code", "debug", "test", "build", "deploy", "git", "lint", "refactor", "lsp", "compile", "framework", "api", "sdk", "cli", "dev"],
  Business: ["report", "comms", "communication", "email", "newsletter", "marketing", "sales", "analysis", "compliance", "legal", "finance"],
  Integration: ["slack", "github", "jira", "salesforce", "notion", "linear", "asana", "discord", "telegram", "webhook"],
  Meta: ["skill-creator", "skill creator", "meta", "scaffold", "template generator"],
};

function guessCategory(name, description) {
  const text = (name + " " + (description || "")).toLowerCase();
  for (const [cat, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some((kw) => text.includes(kw))) return cat;
  }
  return "Development";
}

// ============================================================================
// GITHUB API HELPERS
// ============================================================================

async function gh(endpoint) {
  const url = endpoint.startsWith("http") ? endpoint : `https://api.github.com${endpoint}`;
  const res = await fetch(url, { headers });
  if (!res.ok) {
    if (res.status === 403) {
      const remaining = res.headers.get("x-ratelimit-remaining");
      console.warn(`⚠️  Rate limited (remaining: ${remaining}). Sleeping 60s...`);
      await sleep(60000);
      return gh(endpoint);
    }
    if (res.status === 404) return null;
    throw new Error(`GitHub API ${res.status}: ${url}`);
  }
  return res.json();
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// ============================================================================
// SKILL DISCOVERY
// ============================================================================

async function getRepoStars(repo) {
  const data = await gh(`/repos/${repo}`);
  return data?.stargazers_count ?? 0;
}

async function getRepoTree(repo) {
  // HEAD'in default branch'ini al
  const repoData = await gh(`/repos/${repo}`);
  if (!repoData) return [];
  const defaultBranch = repoData.default_branch;
  const tree = await gh(`/repos/${repo}/git/trees/${defaultBranch}?recursive=1`);
  if (!tree?.tree) return [];
  // Bir SKILL.md hem büyük hem küçük olabilir
  return tree.tree.filter((f) =>
    f.type === "blob" && /(^|\/)skill\.md$/i.test(f.path)
  );
}

async function getSkillMd(repo, filePath) {
  const data = await gh(`/repos/${repo}/contents/${encodeURIComponent(filePath)}`);
  if (!data?.content) return null;
  return Buffer.from(data.content, "base64").toString("utf-8");
}

function parseFrontmatter(text) {
  if (!text.startsWith("---")) return null;
  const end = text.indexOf("\n---", 3);
  if (end < 0) return null;
  const body = text.slice(3, end).trim();
  const result = {};
  let currentKey = null;
  let currentValue = "";
  for (const line of body.split("\n")) {
    // çok satırlı değer devam ediyor mu?
    if (line.match(/^\s/) && currentKey) {
      currentValue += " " + line.trim();
      continue;
    }
    if (currentKey) {
      result[currentKey] = currentValue.trim().replace(/^["']|["']$/g, "");
      currentKey = null;
      currentValue = "";
    }
    const m = line.match(/^(\w[\w-]*)\s*:\s*(.*)$/);
    if (m) {
      currentKey = m[1];
      currentValue = m[2];
    }
  }
  if (currentKey) {
    result[currentKey] = currentValue.trim().replace(/^["']|["']$/g, "");
  }
  return result;
}

// ============================================================================
// MAIN CRAWL
// ============================================================================

async function crawlRepo(repo) {
  console.log(`📦 ${repo}`);
  const stars = await getRepoStars(repo);
  const files = await getRepoTree(repo);
  console.log(`   ${files.length} SKILL.md files found, ${stars} stars`);

  const skills = [];
  // En fazla MAX_SKILLS_PER_REPO al
  const limited = files.slice(0, MAX_SKILLS_PER_REPO);

  for (const file of limited) {
    try {
      const md = await getSkillMd(repo, file.path);
      if (!md) continue;
      const fm = parseFrontmatter(md);
      if (!fm?.name || !fm?.description) continue;

      const name = fm.name.trim();
      // Çok uzun açıklamayı kes (300 char)
      const desc = fm.description.trim().slice(0, 400);

      skills.push({
        name,
        category: guessCategory(name, desc),
        description_en: desc,
        description_tr: "", // TR çevirisi ayrı bir aşamada doldurulabilir
        repo,
        stars,
        path: file.path,
        url: `https://github.com/${repo}/blob/HEAD/${file.path}`,
      });
    } catch (e) {
      console.warn(`   ⚠️  ${file.path}: ${e.message}`);
    }
    // Rate-limit-friendly
    await sleep(150);
  }

  return skills;
}

async function main() {
  console.log("🚀 Nayomy skill crawler started\n");
  const startTime = Date.now();

  const allSkills = [];

  // 1. Koleksiyon kartlarını ekle
  for (const card of COLLECTION_CARDS) {
    const stars = await getRepoStars(card.repo);
    allSkills.push({
      ...card,
      stars,
      url: `https://github.com/${card.repo}`,
    });
  }

  // 2. Seed reposunu tara
  for (const repo of SEED_REPOS) {
    try {
      const skills = await crawlRepo(repo);
      allSkills.push(...skills);
    } catch (e) {
      console.error(`❌ ${repo}: ${e.message}`);
    }
  }

  // 3. Tekilleştir (aynı name + repo kombinasyonu tekrar etmesin)
  const seen = new Set();
  const unique = allSkills.filter((s) => {
    const key = `${s.repo}::${s.name}::${s.path || ""}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // 4. Yıldıza göre sırala
  unique.sort((a, b) => (b.stars || 0) - (a.stars || 0));

  // 5. JSON yaz
  const output = {
    generated_at: new Date().toISOString(),
    total: unique.length,
    repos: [...new Set(unique.map((s) => s.repo))].length,
    skills: unique,
  };

  await fs.writeFile(OUTPUT_PATH, JSON.stringify(output, null, 2));

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n✅ Done in ${elapsed}s`);
  console.log(`   ${output.total} skills from ${output.repos} repos`);
  console.log(`   Written to ${OUTPUT_PATH}`);
}

main().catch((e) => {
  console.error("💥 Crawler failed:", e);
  process.exit(1);
});
