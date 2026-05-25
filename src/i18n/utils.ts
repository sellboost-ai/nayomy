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
  const route = getRouteFromUrl(url);
  if (targetLang === defaultLang) return route;
  return `/${targetLang}${route === '/' ? '' : route}`;
}
