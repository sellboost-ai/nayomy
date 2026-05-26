import type { Lang } from '../i18n/utils';

const MAX_DESCRIPTION = 155;

export function truncate(s: string, max = MAX_DESCRIPTION): string {
  if (!s) return '';
  const trimmed = s.trim();
  if (trimmed.length <= max) return trimmed;
  return trimmed.slice(0, max - 1).trimEnd() + '…';
}

export function skillTitle(name: string, category: string, lang: Lang): string {
  if (lang === 'tr') return `${name} — Claude için ${category} skill'i · nayomy`;
  return `${name} — ${category} skill for Claude · nayomy`;
}

export function mcpTitle(name: string, category: string, lang: Lang): string {
  if (lang === 'tr') return `${name} — ${category} MCP sunucusu · nayomy`;
  return `${name} — ${category} MCP server · nayomy`;
}

/**
 * Builds a 150-160 char meta description by reserving room for the suffix and
 * truncating the source description if needed.
 */
export function seoDescription(description: string, repo: string, lang: Lang): string {
  const suffix = lang === 'tr'
    ? ` — Kaynak: ${repo}. Nayomy'de günlük güncelleme.`
    : ` — Source: ${repo}. Updated daily on nayomy.`;
  const room = MAX_DESCRIPTION - suffix.length;
  const desc = (description ?? '').trim();
  if (room <= 0) return truncate(desc);
  const head = desc.length > room ? desc.slice(0, room - 1).trimEnd() + '…' : desc;
  return head + suffix;
}

interface SoftwareAppLd {
  name: string;
  description: string;
  category: string;
  url: string;
  repo: string;
  stars: number;
  applicationCategory: string;
}

export function softwareApplicationJsonLd(input: SoftwareAppLd): Record<string, unknown> {
  const ld: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: input.name,
    description: input.description,
    applicationCategory: input.applicationCategory,
    operatingSystem: 'Cross-platform',
    url: input.url,
    author: {
      '@type': 'Organization',
      name: input.repo,
      url: `https://github.com/${input.repo}`,
    },
  };
  if (input.stars > 0) {
    ld.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: String(input.stars),
    };
  }
  return ld;
}
