import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const first = url.pathname.split('/').filter(Boolean)[0];
  if (first && first in ui) return first as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (
      (ui[lang] as Record<string, string>)[key] ??
      (ui[defaultLang] as Record<string, string>)[key] ??
      key
    );
  };
}

/** Returns the language-agnostic route (always starts with /). */
export function getRouteFromUrl(url: URL): string {
  const lang = getLangFromUrl(url);
  if (lang === defaultLang) return url.pathname;
  return url.pathname.replace(new RegExp(`^/${lang}`), '') || '/';
}

/** Returns the URL for the same page in another language. */
export function getAlternateUrl(url: URL, targetLang: Lang): string {
  const p = url.pathname;

  // News list: /news ↔ /haberler (these don't follow the /tr/* convention)
  if (p === '/news' || p === '/news/') {
    return targetLang === 'tr' ? '/haberler' : '/news';
  }
  if (p === '/haberler' || p === '/haberler/') {
    return targetLang === 'en' ? '/news' : '/haberler';
  }

  // News detail: /news/[slug] ↔ /haberler/[slug]
  const newsDetail = p.match(/^\/news\/([^/]+)\/?$/);
  if (newsDetail) {
    const slug = newsDetail[1];
    return targetLang === 'tr' ? `/haberler/${slug}/` : `/news/${slug}/`;
  }
  const haberlerDetail = p.match(/^\/haberler\/([^/]+)\/?$/);
  if (haberlerDetail) {
    const slug = haberlerDetail[1];
    return targetLang === 'en' ? `/news/${slug}/` : `/haberler/${slug}/`;
  }

  const route = getRouteFromUrl(url);
  if (targetLang === defaultLang) return route;
  return `/${targetLang}${route === '/' ? '' : route}`;
}
