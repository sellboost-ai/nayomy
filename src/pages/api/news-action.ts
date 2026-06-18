// API endpoint — admin panelden gelen yayınla/reddet aksiyonlarını işler
// GitHub Contents API kullanarak doğrudan repo'ya commit eder
import type { APIRoute } from 'astro';

export const prerender = false;

const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN || process.env.GITHUB_TOKEN;
const REPO_OWNER = import.meta.env.GITHUB_OWNER || process.env.GITHUB_OWNER || 'sellboost-ai';
const REPO_NAME = import.meta.env.GITHUB_REPO || process.env.GITHUB_REPO || 'nayomy';
const BRANCH = 'master';

// GitHub API helper
async function githubFetch(path: string, options: RequestInit = {}) {
  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/${path}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub API ${res.status}: ${text}`);
  }
  return res.json();
}

// Dosyayı oku (base64 decode dahil)
async function readJsonFromGitHub(path: string) {
  const data = await githubFetch(`contents/${path}?ref=${BRANCH}`);
  const content = Buffer.from(data.content, 'base64').toString('utf-8');
  return { json: JSON.parse(content), sha: data.sha };
}

// Dosyayı yaz (base64 encode dahil)
async function writeJsonToGitHub(path: string, json: any, sha: string, message: string) {
  const content = Buffer.from(JSON.stringify(json, null, 2), 'utf-8').toString('base64');
  return githubFetch(`contents/${path}`, {
    method: 'PUT',
    body: JSON.stringify({
      message,
      content,
      sha,
      branch: BRANCH,
    }),
  });
}

export const POST: APIRoute = async ({ request }) => {
  if (!GITHUB_TOKEN) {
    return new Response(JSON.stringify({ error: 'GITHUB_TOKEN tanımlı değil' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await request.json();
    const { action, id, title, summary } = body;

    if (!action || !id) {
      return new Response(JSON.stringify({ error: 'action ve id gerekli' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 1. Pending dosyasını oku
    const pending = await readJsonFromGitHub('news-pending.json');
    const item = pending.json.items.find((i: any) => i.id === id);

    if (!item) {
      return new Response(JSON.stringify({ error: 'Taslak bulunamadı' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (action === 'publish') {
      // 2a. Yayınla: news.json'a ekle, pending'den sil
      const published = await readJsonFromGitHub('news.json');
      const newItem = {
        ...item,
        title: title || item.title,
        summary: summary || item.summary,
        publishedAt: new Date().toISOString(),
        status: 'published',
      };
      published.json.items.unshift(newItem);
      published.json.updatedAt = new Date().toISOString();

      // Pending'den kaldır
      pending.json.items = pending.json.items.filter((i: any) => i.id !== id);
      pending.json.updatedAt = new Date().toISOString();

      // İki dosyayı da güncelle
      await writeJsonToGitHub('news.json', published.json, published.sha,
        `news: yayınla — ${newItem.title.slice(0, 60)}`);
      // 2. dosya için sha'yı yeniden alma gerek (çünkü ilk commit sha'yı değiştirdi)
      const pendingRefresh = await readJsonFromGitHub('news-pending.json');
      pendingRefresh.json.items = pendingRefresh.json.items.filter((i: any) => i.id !== id);
      pendingRefresh.json.updatedAt = new Date().toISOString();
      await writeJsonToGitHub('news-pending.json', pendingRefresh.json, pendingRefresh.sha,
        `news: pending'den kaldır — ${id}`);

      return new Response(JSON.stringify({ ok: true, published: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (action === 'reject') {
      // 2b. Reddet: pending'den sil (başka bir yere de kaydetmiyoruz, tekrar gelmesin diye sourceUrl zaten kontrol ediliyor)
      pending.json.items = pending.json.items.filter((i: any) => i.id !== id);
      pending.json.updatedAt = new Date().toISOString();

      await writeJsonToGitHub('news-pending.json', pending.json, pending.sha,
        `news: reddet — ${item.title.slice(0, 60)}`);

      return new Response(JSON.stringify({ ok: true, rejected: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ error: 'Geçersiz action' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (e: any) {
    console.error('API hatası:', e);
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
