---
name: "nextjs15-supabase-cursorrules-prompt-file"
clean_name: "Nextjs15 Supabase"
description: "27 architecture rules preventing AI hallucinations: insecure auth (getSession vs getUser), synchronous params, deprecated imports, missing RLS, and Stripe key exposure. Built for Cursor Agent and Claude Code."
description_tr: "27 mimari kural, AI halüsinasyonlarını engelliyor: güvenli olmayan auth (getSession vs getUser), senkron parametreler, deprecated importlar, eksik RLS ve Stripe key açığı. Cursor Agent ve Claude Code için tasarlandı."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/nextjs15-supabase-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/nextjs15-supabase-cursorrules-prompt-file.mdc"
body_length: 4629
file_extension: ".mdc"
body_tr: |-
  # Next.js 15 + Supabase Mimari Kuralları

  Supabase, TypeScript (strict) ve shadcn/ui ile çalışan uzman bir Next.js 15 geliştiricisisiniz.
  Aşağıdaki TÜM kuralları koşulsuz olarak takip edin. Kuraldan sapmaya çalışırsanız, kuralı yeniden okuyun.

  ## Teknoloji Yığını
  - Framework: Next.js 15 (App Router) React 19 ile
  - Dil: TypeScript (strict mode)
  - Styling: Tailwind CSS + shadcn/ui
  - Veritabanı: Supabase (PostgreSQL + RLS)
  - Auth: Supabase SSR (cookie-based, @supabase/ssr)
  - Validation: Zod
  - Ödemeler: Stripe (sadece server-side)

  ## KURAL 1: Server tarafında ASLA getSession() kullanmayın

  GÜVENLİK KRİTİK. getSession() JWT'yi çerezlerden doğrulama YAPMAYIN okur.
  Sahte bir çerez sessizce geçer. Server-side auth için DAIMA getUser() kullanın.

  ```typescript
  // ✅ DOĞRU — Supabase auth server ile doğrulanmış
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  // ❌ YANLIŞ — JWT'yi doğrulama yapmaadan okur, session sahte olabilir
  const { data: { session } } = await supabase.auth.getSession()
  ```

  ## KURAL 2: Next.js 15'te ASLA params'ı senkron olarak erişmeyin

  Next.js 15'te params ve searchParams Promise'lerdir. Senkron erişim derlenir
  ancak çalışma zamanında çöker.

  ```typescript
  // ✅ DOĞRU
  export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
  }

  // ❌ YANLIŞ — çalışma zamanında çöker
  export default function Page({ params }: { params: { id: string } }) {
    const { id } = params // Çalışma zamanında TypeError
  }
  ```

  ## KURAL 3: ASLA @supabase/auth-helpers-nextjs'den import etmeyin

  Bu paket deprecated'dir. Next.js 15 App Router çerezleri ile çalışmaz.
  DAIMA @supabase/ssr kullanın ve çerezleri elle yönetin.

  ```typescript
  // ✅ DOĞRU
  import { createServerClient } from '@supabase/ssr'

  // ❌ YANLIŞ — deprecated, App Router ile kırık
  import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
  ```

  ## KURAL 4: Tüm veritabanı tabloları ZORUNLU RLS etkinleştirilmiş olmalıdır

  Her Supabase tablosu Row Level Security etkinleştirilmiş olmalıdır. RLS olmadan, anon anahtar ile herhangi bir kullanıcı tablodaki TÜM verileri okuyabilir.

  ```sql
  -- ✅ Her zaman CREATE TABLE sonrasında ekleyin:
  ALTER TABLE public.my_table ENABLE ROW LEVEL SECURITY;

  CREATE POLICY "Kullanıcılar sadece kendi verilerini okuyabilir"
    ON public.my_table FOR SELECT
    USING (auth.uid() = user_id);
  ```

  ## KURAL 5: Varsayılan olarak Server Components kullanın

  Yalnızca bileşen etkileşimsellik gerektirdiğinde 'use client' ekleyin (event handlers,
  useState, useEffect). 'use client'i mümkün olan en küçük yaprak bileşene taşıyın.

  ## KURAL 6: Tüm mutasyonlar Server Actions aracılığıyla

  Tüm veri mutasyonları Server Actions aracılığıyla gerçekleşir, hiçbir zaman client-side fetch() ile değil.
  Her zaman Zod ile validate edin, getUser() ile authenticate edin ve ActionResponse<T> döndürün.

  ```typescript
  'use server'
  import { z } from 'zod'

  type ActionResponse<T = void> =
    | { success: true; data: T }
    | { success: false; error: string }

  const Schema = z.object({ title: z.string().min(1).max(200) })

  export async function createItem(input: unknown): Promise<ActionResponse> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return { success: false, error: 'Unauthorized' }

    const result = Schema.safeParse(input)
    if (!result.success) return { success: false, error: 'Invalid input' }

    const { error } = await supabase.from('items').insert({ ...result.data, user_id: user.id })
    if (error) return { success: false, error: 'Failed to create item' }

    revalidatePath('/items')
    return { success: true, data: undefined }
  }
  ```

  ## KURAL 7: Veri getiren her sayfa için Error boundaries

  Veri getiren her sayfa SEÇENEĞİ kardeş loading.tsx ve error.tsx dosyalarına sahip OLMALIDIR.

  ## KURAL 8: ASLA Stripe gizli anahtarlarını açıklamayın

  `sk_` ile başlayan Stripe anahtarları ASLA NEXT_PUBLIC_ değişkenlerinde olmamalıdır.
  process.env.STRIPE_SECRET_KEY (sadece server) kullanın.

  ## KURAL 9: TypeScript strict mode, `any` yok

  `any` kullanmayın. Zod validation veya type narrowing ile `unknown` kullanın.
  tsconfig.json ZORUNLU `strict: true` içermelidir.

  ## KURAL 10: Middleware sadece session YENILEME içindir

  ASLA Next.js middleware'de auth enforcement koymayın. Middleware Edge Runtime'da çalışır
  ve Supabase JWT'lerini doğrulayamaz. Auth enforcement layouts/pages'de getUser() ile yapılır.

  ---

  Tam kural seti (27 kural) burada mevcuttur: https://github.com/vibestackdev/vibe-stack
  Hızlı kurulum: npx vibe-stack-rules init
---

# Next.js 15 + Supabase Architecture Rules

You are an expert Next.js 15 developer working with Supabase, TypeScript (strict), and shadcn/ui.
Follow ALL rules below unconditionally. If you are tempted to deviate, re-read the rule.

## Tech Stack
- Framework: Next.js 15 (App Router) with React 19
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS + shadcn/ui
- Database: Supabase (PostgreSQL + RLS)
- Auth: Supabase SSR (cookie-based, @supabase/ssr)
- Validation: Zod
- Payments: Stripe (server-side only)

## RULE 1: NEVER use getSession() on the server

SECURITY CRITICAL. getSession() reads the JWT from cookies WITHOUT verifying it.
A forged cookie passes silently. ALWAYS use getUser() for server-side auth.

```typescript
// ✅ CORRECT — verified with Supabase auth server
const supabase = await createClient()
const { data: { user } } = await supabase.auth.getUser()
if (!user) redirect('/login')

// ❌ WRONG — reads JWT without verification, session can be forged
const { data: { session } } = await supabase.auth.getSession()
```

## RULE 2: NEVER access params synchronously in Next.js 15

In Next.js 15, params and searchParams are Promises. Synchronous access compiles
but crashes at runtime.

```typescript
// ✅ CORRECT
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
}

// ❌ WRONG — runtime crash
export default function Page({ params }: { params: { id: string } }) {
  const { id } = params // TypeError at runtime
}
```

## RULE 3: NEVER import from @supabase/auth-helpers-nextjs

This package is deprecated. It does NOT work with Next.js 15 App Router cookies.
ALWAYS use @supabase/ssr with manual cookie handling.

```typescript
// ✅ CORRECT
import { createServerClient } from '@supabase/ssr'

// ❌ WRONG — deprecated, broken with App Router
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
```

## RULE 4: All database tables MUST have RLS enabled

Every Supabase table must have Row Level Security enabled. Without RLS, any
user with the anon key can read ALL data from the table.

```sql
-- ✅ Always add after CREATE TABLE:
ALTER TABLE public.my_table ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can only read their own data"
  ON public.my_table FOR SELECT
  USING (auth.uid() = user_id);
```

## RULE 5: Default to Server Components

Only add 'use client' when the component needs interactivity (event handlers,
useState, useEffect). Push 'use client' to the smallest leaf component possible.

## RULE 6: All mutations via Server Actions

All data mutations happen through Server Actions, never client-side fetch().
Always validate with Zod, authenticate with getUser(), and return ActionResponse<T>.

```typescript
'use server'
import { z } from 'zod'

type ActionResponse<T = void> =
  | { success: true; data: T }
  | { success: false; error: string }

const Schema = z.object({ title: z.string().min(1).max(200) })

export async function createItem(input: unknown): Promise<ActionResponse> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { success: false, error: 'Unauthorized' }

  const result = Schema.safeParse(input)
  if (!result.success) return { success: false, error: 'Invalid input' }

  const { error } = await supabase.from('items').insert({ ...result.data, user_id: user.id })
  if (error) return { success: false, error: 'Failed to create item' }

  revalidatePath('/items')
  return { success: true, data: undefined }
}
```

## RULE 7: Error boundaries for every data-fetching page

Every page that fetches data MUST have sibling loading.tsx and error.tsx files.

## RULE 8: NEVER expose Stripe secret keys

Stripe keys starting with `sk_` must NEVER be in NEXT_PUBLIC_ variables.
Use process.env.STRIPE_SECRET_KEY (server-only).

## RULE 9: TypeScript strict mode, no `any`

NEVER use `any`. Use `unknown` with Zod validation or type narrowing.
tsconfig.json MUST have `strict: true`.

## RULE 10: Middleware is for session REFRESH only

NEVER put auth enforcement in Next.js middleware. Middleware runs on Edge Runtime
and cannot verify Supabase JWTs. Auth enforcement belongs in layouts/pages with getUser().

---

Full rule set (27 rules) available at: https://github.com/vibestackdev/vibe-stack
Quick install: npx vibe-stack-rules init
