import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = new URL(context.request.url);
  // 410 Gone for .md file paths — these are relative links from upstream READMEs
  // that were crawled before source was fixed. Not valid pages on this site.
  if (pathname.endsWith('.md') && !pathname.startsWith('/_astro/')) {
    return new Response(null, { status: 410 });
  }
  return next();
});
