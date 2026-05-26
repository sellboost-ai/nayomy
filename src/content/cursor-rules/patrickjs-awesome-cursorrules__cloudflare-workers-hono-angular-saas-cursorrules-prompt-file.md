---
name: "cloudflare-workers-hono-angular-saas-cursorrules-prompt-file"
clean_name: "Cloudflare Workers Hono Angular Saas"
description: "Cursor rules for full-stack SaaS applications on Cloudflare Workers with Hono APIs, Angular frontends, typed RPC, D1/Neon, and production observability."
description_tr: "Cloudflare Workers üzerinde Hono API'ları, Angular frontend'leri, typed RPC, D1/Neon ve production observability ile full-stack SaaS uygulamaları için Cursor rules."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/cloudflare-workers-hono-angular-saas-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/cloudflare-workers-hono-angular-saas-cursorrules-prompt-file.mdc"
body_length: 4544
file_extension: ".mdc"
body_tr: |-
  # Cloudflare Workers + Hono + Angular SaaS

  Cloudflare Workers üzerinde tam yığın SaaS, Hono API, Angular frontend ve kurumsal entegrasyonlarla.

  ## Stack
  CF Workers+Hono v4.12+ | Angular 21+Ionic 8+PrimeNG 21 | D1/Neon | Drizzle v1 | Zod | Clerk Core 3 | Stripe | Inngest v4 | Resend | Bun 1.3 | Playwright v1.59+ | Vitest | ESLint+Prettier | PostHog | Sentry

  ## TypeScript
  - Strict mode, asla `any` (yerine `unknown`), `interface` tercih et (`type` yerine)
  - `readonly` tekrar atanmadığında, `undefined` tercih et (`null` yerine)
  - Zod doğrulama kaynağı olarak
  - ESLint flat config (`eslint.config.ts`) + typescript-eslint + Prettier

  ## Hono API
  - RPC tip çıkarımı için satır içi handler'lar (asla ayrı controller dosyaları)
  - Method zinciri: `app.use().get().post()` türleri korur
  - `hc<AppType>(BASE_URL)` tipli client için
  - `@hono/zod-validator` TÜM request body'lerde
  - `app.onError()` + `app.notFound()` merkezi
  - Büyük uygulamalar: `app.route('/path', subApp)`
  - Hata zarfı: `{ error: string, code?: string, details?: unknown }`
  - `createFactory<{ Bindings: Env }>()` yeniden kullanılabilir middleware zincirleri için
  - `GET /health` şunu döner: `{ status, version, timestamp }`

  ## Angular
  - Sadece standalone (NgModules yok), Angular 21 varsayılan olarak zoneless
  - Signals stabil: `signal()`, `computed()`, `effect()`, `linkedSignal()`, `resource()`
  - `HttpResource` veri alımı için
  - Kontrol akışı: `@if`/`@for`/`@switch`/`@defer` (değil `*ngIf`/`*ngFor`)
  - kebab-case dosyalar, dosya başına bir component, `providedIn: 'root'`
  - UI componentleri için PrimeNG

  ## Drizzle v1
  - D1 için `sqliteTable`, çoğul snake_case tablolar
  - `$inferSelect`/`$inferInsert` türler için
  - `createInsertSchema`/`createSelectSchema` (`drizzle-orm/zod`'dan)
  - Batch API (değil `BEGIN` — D1 işlemleri desteklemez)
  - Tekrarlanan sorgular için hazırlanmış deyimler

  ## CF Workers
  - CPU limiti: 10ms ücretsiz / 30s ücretli
  - `ctx.waitUntil()` yanıt sonrası async işler için
  - `ctx.passThroughOnException()` zarif bozulma için
  - Bindinglar `Env` interface'i üzerinden tiplendirilir
  - D1 küresel okuma replikasyonu gecikme azaltması için
  - Yerel CI/CD için Workers Builds (dal başına önizleme URL'leri)

  ## Inngest v4 (Arka Plan İşleri)
  - `eventType('name', { schema: z.object({...}) })` olay başına (v4 kırıcı değişiklik)
  - `inngest/cloudflare` adapter + `inngest.setEnvVars(c.env)` Workers için
  - Adım fonksiyonları: `step.run()`, `step.sleep()`, `step.waitForEvent()`, `step.sendEvent()`
  - `step.ai.infer()` çıkarımı boşaltır (bekleme sırasında sıfır hesaplama)
  - `step.realtime.publish()` dayanıklı pub/sub için
  - Her adım idempotent, bağımsız olarak yeniden denenmiş

  ## Test (TDD)
  - Başarısız test ÖNCE, sonra uygula
  - E2E için Playwright: 6 kırılma noktası (375, 390, 768, 1024, 1280, 1920)
  - Birim testler için Vitest
  - Sleep yok — `waitFor`/`toBeVisible()` kullan
  - Seçiciler: `data-testid` > role > metin
  - axe-core 0 ihlal
  - Üretim testi için `PROD_URL` env değişkeni

  ## Güvenlik (OWASP Top 10:2025)
  - Zorunlu: HSTS, CSP (nonce tabanlı strict), X-Content-Type-Options, X-Frame-Options
  - Zorunlu: Referrer-Policy, Permissions-Policy, COOP, COEP, CORP
  - Kaldır: X-XSS-Protection, Expect-CT, Server, X-Powered-By
  - Tüm formlarda Turnstile, tüm girdilerde Zod doğrulaması
  - Stripe webhook'ları: imzayı doğrula, KV üzerinden çoklayı kaldır

  ## Auth (Clerk)
  - Request başına JWT doğrulama (session store yok)
  - Webhook sync: Clerk → D1 kullanıcı verisi için
  - RBAC: Kurumsal kapsamlı için Clerk org rolleri, uygulama seviyesi için D1
  - Route katmanları: public → auth-only → role-gated → owner-only

  ## Kalite
  - Lighthouse: a11y ≥95, perf ≥75
  - WCAG 2.2 AA uyumluluğu
  - LCP ≤2.5s, CLS ≤0.1, INP ≤200ms
  - JS ≤200KB gz, CSS ≤50KB gz
  - Fonksiyonlar ≤50 satır, döngüsel karmaşıklık ≤10

  ## Deploy
  ```bash
  npx wrangler deploy && curl -sX POST \
    "https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/purge_cache" \
    -H "Authorization: Bearer ${CF_API_TOKEN}" \
    -H "Content-Type: application/json" \
    -d '{"purge_everything":true}'
  ```

  ## Hono Worker Başlangıç
  ```typescript
  import { Hono } from 'hono';
  import { secureHeaders } from 'hono/secure-headers';
  import { cors } from 'hono/cors';

  interface Env {
    DB: D1Database;
    KV: KVNamespace;
    AI: Ai;
    TURNSTILE_SECRET: string;
  }

  const app = new Hono<{ Bindings: Env }>();
  app.use('*', secureHeaders());
  app.use('/api/*', cors({ origin: ['https://yourdomain.com'] }));
  app.get('/health', (c) => c.json({ status: 'ok', timestamp: new Date().toISOString() }));
  export default app;
  ```
---

# Cloudflare Workers + Hono + Angular SaaS

Full-stack SaaS on Cloudflare Workers with Hono API, Angular frontend, and enterprise integrations.

## Stack
CF Workers+Hono v4.12+ | Angular 21+Ionic 8+PrimeNG 21 | D1/Neon | Drizzle v1 | Zod | Clerk Core 3 | Stripe | Inngest v4 | Resend | Bun 1.3 | Playwright v1.59+ | Vitest | ESLint+Prettier | PostHog | Sentry

## TypeScript
- Strict mode, never `any` (use `unknown`), prefer `interface` over `type`
- `readonly` when not reassigned, `undefined` over `null`
- Zod as source of truth for validation
- ESLint flat config (`eslint.config.ts`) + typescript-eslint + Prettier

## Hono API
- Inline handlers for RPC type inference (never separate controller files)
- Method chaining: `app.use().get().post()` preserves types
- `hc<AppType>(BASE_URL)` for typed client
- `@hono/zod-validator` on ALL request bodies
- `app.onError()` + `app.notFound()` centralized
- Split large apps: `app.route('/path', subApp)`
- Error envelope: `{ error: string, code?: string, details?: unknown }`
- `createFactory<{ Bindings: Env }>()` for reusable middleware chains
- `GET /health` returns `{ status, version, timestamp }`

## Angular
- Standalone only (no NgModules), Angular 21 zoneless by default
- Signals stable: `signal()`, `computed()`, `effect()`, `linkedSignal()`, `resource()`
- `HttpResource` for data fetching
- Control flow: `@if`/`@for`/`@switch`/`@defer` (not `*ngIf`/`*ngFor`)
- kebab-case files, one component per file, `providedIn: 'root'`
- PrimeNG for UI components

## Drizzle v1
- `sqliteTable` for D1, plural snake_case tables
- `$inferSelect`/`$inferInsert` for types
- `createInsertSchema`/`createSelectSchema` from `drizzle-orm/zod`
- Batch API (not `BEGIN` — D1 doesn't support transactions)
- Prepared statements for repeated queries

## CF Workers
- CPU limit: 10ms free / 30s paid
- `ctx.waitUntil()` for async post-response work
- `ctx.passThroughOnException()` for graceful degradation
- Bindings typed via `Env` interface
- D1 global read replication for latency reduction
- Workers Builds for native CI/CD (preview URLs per branch)

## Inngest v4 (Background Jobs)
- `eventType('name', { schema: z.object({...}) })` per-event (v4 breaking)
- `inngest/cloudflare` adapter + `inngest.setEnvVars(c.env)` for Workers
- Step functions: `step.run()`, `step.sleep()`, `step.waitForEvent()`, `step.sendEvent()`
- `step.ai.infer()` offloads inference (zero compute during wait)
- `step.realtime.publish()` for durable pub/sub
- Each step idempotent, retried independently

## Testing (TDD)
- Failing test FIRST, then implement
- Playwright for E2E: 6 breakpoints (375, 390, 768, 1024, 1280, 1920)
- Vitest for unit tests
- No sleeps — use `waitFor`/`toBeVisible()`
- Selectors: `data-testid` > role > text
- axe-core 0 violations
- `PROD_URL` env var for production testing

## Security (OWASP Top 10:2025)
- Must: HSTS, CSP (nonce-based strict), X-Content-Type-Options, X-Frame-Options
- Must: Referrer-Policy, Permissions-Policy, COOP, COEP, CORP
- Remove: X-XSS-Protection, Expect-CT, Server, X-Powered-By
- Turnstile on all forms, Zod validation on all inputs
- Stripe webhooks: verify signature, deduplicate via KV

## Auth (Clerk)
- JWT verified per-request (no session store)
- Webhook sync: Clerk → D1 for user data
- RBAC: Clerk org roles for org-scoped, D1 for app-level
- Route layers: public → auth-only → role-gated → owner-only

## Quality
- Lighthouse: a11y ≥95, perf ≥75
- WCAG 2.2 AA compliance
- LCP ≤2.5s, CLS ≤0.1, INP ≤200ms
- JS ≤200KB gz, CSS ≤50KB gz
- Functions ≤50 lines, cyclomatic complexity ≤10

## Deploy
```bash
npx wrangler deploy && curl -sX POST \
  "https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/purge_cache" \
  -H "Authorization: Bearer ${CF_API_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"purge_everything":true}'
```

## Hono Worker Starter
```typescript
import { Hono } from 'hono';
import { secureHeaders } from 'hono/secure-headers';
import { cors } from 'hono/cors';

interface Env {
  DB: D1Database;
  KV: KVNamespace;
  AI: Ai;
  TURNSTILE_SECRET: string;
}

const app = new Hono<{ Bindings: Env }>();
app.use('*', secureHeaders());
app.use('/api/*', cors({ origin: ['https://yourdomain.com'] }));
app.get('/health', (c) => c.json({ status: 'ok', timestamp: new Date().toISOString() }));
export default app;
```
