---
name: "nextjs-tanstack-query-cursorrules-prompt-file"
clean_name: "Next.js Tanstack Query"
description: "Cursor rules for Next.js App Router with TanStack Query v5, covering the HydrationBoundary pattern, Server Actions as mutations, and optimistic updates."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/nextjs-tanstack-query-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/nextjs-tanstack-query-cursorrules-prompt-file.mdc"
body_length: 7727
file_extension: ".mdc"
body_tr: |-
  Next.js (App Router), TanStack Query v5, TypeScript ve server bileşenlerini client-side veri getirme ile birleştirme konusunda uzman Türkçe tercüme:

  # Next.js App Router + TanStack Query v5 Kılavuzu

  ## Mimari Felsefesi
  - Server Bileşenleri verileri doğrudan getirir (orada TanStack Query'ye ihtiyaç yok)
  - TanStack Query, etkileşimli, gerçek zamanlı veya kullanıcı tarafından tetiklenen veri için Client Bileşenlerinde kullanılır
  - İlk sayfa verileri için React Server Components kullanın; mutasyonlar, polling ve iyimser güncellemeler için TanStack Query kullanın
  - İlk yüklemede client waterfalllarını önlemek için Query cache'ini sunucudan hidrate edin

  ## Hidrasyon ile Provider Kurulumu
  ```tsx
  // src/providers/query-provider.tsx
  'use client'
  import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
  import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
  import { useState } from 'react'

  export function QueryProvider({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(
      () =>
        new QueryClient({
          defaultOptions: {
            queries: {
              staleTime: 60 * 1000,
              retry: (count, error: any) => error?.status !== 404 && count < 2,
            },
          },
        }),
    )

    return (
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    )
  }

  // src/app/layout.tsx
  import { QueryProvider } from '@/providers/query-provider'

  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html>
        <body>
          <QueryProvider>{children}</QueryProvider>
        </body>
      </html>
    )
  }
  ```

  ## Hidrasyon Deseni (Server → Client Cache)
  - Server Bileşenlerinde ön-getirme yapın, durumu dehidrate edin, client'te rehidrate edin
  - Bu, ilk render'da client-side yükleme durumlarını ortadan kaldırır
  ```tsx
  // src/app/posts/page.tsx (Server Component)
  import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
  import { postsQueryOptions } from '@/queries/posts'
  import { PostsList } from './_components/posts-list'

  export default async function PostsPage() {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(postsQueryOptions())

    return (
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PostsList />
      </HydrationBoundary>
    )
  }

  // src/app/posts/_components/posts-list.tsx
  'use client'
  import { useQuery } from '@tanstack/react-query'
  import { postsQueryOptions } from '@/queries/posts'

  export function PostsList() {
    // Önceden doldurulmuş cache'den okur — yükleme spinner'ı yok
    const { data: posts } = useQuery(postsQueryOptions())
    return <ul>{posts?.map(p => <li key={p.id}>{p.title}</li>)}</ul>
  }
  ```

  ## Query Tanımlamaları
  ```ts
  // src/queries/posts.ts
  import { queryOptions } from '@tanstack/react-query'

  export const postKeys = {
    all: ['posts'] as const,
    lists: () => [...postKeys.all, 'list'] as const,
    list: (filters?: PostFilters) => [...postKeys.lists(), { filters }] as const,
    details: () => [...postKeys.all, 'detail'] as const,
    detail: (id: string) => [...postKeys.details(), id] as const,
  }

  export const postsQueryOptions = (filters?: PostFilters) =>
    queryOptions({
      queryKey: postKeys.list(filters),
      queryFn: () => fetch(`/api/posts`).then(r => r.json()),
    })

  export const postDetailQueryOptions = (id: string) =>
    queryOptions({
      queryKey: postKeys.detail(id),
      queryFn: () => fetch(`/api/posts/${id}`).then(r => r.json()),
      staleTime: 1000 * 60 * 5,
    })
  ```

  ## Server Actions + Mutasyonlar
  - TanStack Query mutasyonlarında `mutationFn` olarak Next.js Server Actions kullanın
  - Bu, iyimser güncelleme/geri alma yetenekleriyle beraber type-safe server mutasyonları verir
  ```tsx
  // src/app/posts/actions.ts
  'use server'
  import { revalidatePath } from 'next/cache'

  export async function createPost(data: { title: string; body: string }) {
    const post = await db.post.create({ data })
    revalidatePath('/posts')
    return post
  }

  // src/app/posts/_components/create-post-form.tsx
  'use client'
  import { useMutation, useQueryClient } from '@tanstack/react-query'
  import { createPost } from '../actions'
  import { postKeys } from '@/queries/posts'

  export function CreatePostForm() {
    const queryClient = useQueryClient()
    const mutation = useMutation({
      mutationFn: createPost,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: postKeys.lists() })
      },
    })

    return (
      <button
        onClick={() => mutation.mutate({ title: 'New Post', body: '...' })}
        disabled={mutation.isPending}
      >
        {mutation.isPending ? 'Creating...' : 'Create Post'}
      </button>
    )
  }
  ```

  ## Server Actions ile İyimser Güncellemeler
  ```tsx
  const mutation = useMutation({
    mutationFn: updatePost,
    onMutate: async (updated) => {
      await queryClient.cancelQueries({ queryKey: postKeys.detail(updated.id) })
      const previous = queryClient.getQueryData(postKeys.detail(updated.id))
      queryClient.setQueryData(postKeys.detail(updated.id), (old: Post) => ({ ...old, ...updated }))
      return { previous }
    },
    onError: (_, updated, ctx) => {
      queryClient.setQueryData(postKeys.detail(updated.id), ctx?.previous)
    },
    onSettled: (_, __, updated) => {
      queryClient.invalidateQueries({ queryKey: postKeys.detail(updated.id) })
    },
  })
  ```

  ## Server Bileşenleri vs TanStack Query Ne Zaman Kullanılır
  | Server Bileşenleri Kullanın | TanStack Query Kullanın |
  |---|---|
  | Statik veya nadiren değişen veriler | Gerçek zamanlı veya sık güncellenen veriler |
  | SEO açısından kritik ilk içerik | Kullanıcı etkileşimleri (formlar, geçişler) |
  | Client'te yeniden getirmeye ihtiyaç yok | İyimser güncellemeler gerekli |
  | Veriler bileşenler arasında paylaşılmaz | Veriler birçok bileşen arasında paylaşılır |
  | Yükleme durumları istenmez | Detaylı yükleme/hata UI'ı gerekli |

  ## Route Handlers (API Routes) Query Hedefleri Olarak
  - TanStack Query fetcher'ları için `src/app/api/` route handler'larını API katmanı olarak kullanın
  - Route handler'ları ince tutun — sadece girdi parse/doğrula ve servis katmanını çağır
  ```ts
  // src/app/api/posts/route.ts
  import { NextResponse } from 'next/server'

  export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const posts = await getPosts({ category: searchParams.get('category') })
    return NextResponse.json(posts)
  }
  ```

  ## Sonsuz Queries (Pagination / Sonsuz Kaydırma)
  ```tsx
  'use client'
  import { useInfiniteQuery } from '@tanstack/react-query'

  export function InfinitePosts() {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
      queryKey: postKeys.lists(),
      queryFn: ({ pageParam }) =>
        fetch(`/api/posts?cursor=${pageParam ?? ''}`).then(r => r.json()),
      initialPageParam: undefined as string | undefined,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    })

    const posts = data?.pages.flatMap(p => p.items) ?? []

    return (
      <div>
        {posts.map(post => <PostCard key={post.id} post={post} />)}
        <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </button>
      </div>
    )
  }
  ```

  ## Temel Kurallar
  - Server tarafında istek başına bir `QueryClient` oluşturun (Server Bileşenlerinin içinde)
  - Browser oturumu başına bir `QueryClient` oluşturun (provider'daki `useState` aracılığıyla)
  - Server tarafından ön-getirilen verileri client bileşenlere geçirirken her zaman `HydrationBoundary` kullanın
  - Client Bileşenlerin içinde asla doğrudan `fetch` çağırmayın — her zaman `queryFn` üzerinden gidin
  - TanStack Query hook'ları kullanan tüm bileşenleri `'use client'` ile işaretleyin
---

You are an expert in Next.js (App Router), TanStack Query v5, TypeScript, and combining server components with client-side data fetching.

# Next.js App Router + TanStack Query v5 Guidelines

## Architecture Philosophy
- Server Components fetch data directly (no TanStack Query needed there)
- TanStack Query lives in Client Components for interactive, real-time, or user-triggered data
- Use React Server Components for initial page data; TanStack Query for mutations, polling, and optimistic updates
- Hydrate the Query cache from server to avoid client waterfalls on first load

## Provider Setup with Hydration
```tsx
// src/providers/query-provider.tsx
'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            retry: (count, error: any) => error?.status !== 404 && count < 2,
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

// src/app/layout.tsx
import { QueryProvider } from '@/providers/query-provider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
```

## Hydration Pattern (Server → Client Cache)
- Prefetch in Server Components, dehydrate state, rehydrate in client
- This eliminates client-side loading states on first render
```tsx
// src/app/posts/page.tsx (Server Component)
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { postsQueryOptions } from '@/queries/posts'
import { PostsList } from './_components/posts-list'

export default async function PostsPage() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(postsQueryOptions())

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostsList />
    </HydrationBoundary>
  )
}

// src/app/posts/_components/posts-list.tsx
'use client'
import { useQuery } from '@tanstack/react-query'
import { postsQueryOptions } from '@/queries/posts'

export function PostsList() {
  // Reads from pre-populated cache — no loading spinner
  const { data: posts } = useQuery(postsQueryOptions())
  return <ul>{posts?.map(p => <li key={p.id}>{p.title}</li>)}</ul>
}
```

## Query Definitions
```ts
// src/queries/posts.ts
import { queryOptions } from '@tanstack/react-query'

export const postKeys = {
  all: ['posts'] as const,
  lists: () => [...postKeys.all, 'list'] as const,
  list: (filters?: PostFilters) => [...postKeys.lists(), { filters }] as const,
  details: () => [...postKeys.all, 'detail'] as const,
  detail: (id: string) => [...postKeys.details(), id] as const,
}

export const postsQueryOptions = (filters?: PostFilters) =>
  queryOptions({
    queryKey: postKeys.list(filters),
    queryFn: () => fetch(`/api/posts`).then(r => r.json()),
  })

export const postDetailQueryOptions = (id: string) =>
  queryOptions({
    queryKey: postKeys.detail(id),
    queryFn: () => fetch(`/api/posts/${id}`).then(r => r.json()),
    staleTime: 1000 * 60 * 5,
  })
```

## Server Actions + Mutations
- Use Next.js Server Actions as the `mutationFn` in TanStack Query mutations
- This gives you type-safe server mutations WITH optimistic update/rollback capabilities
```tsx
// src/app/posts/actions.ts
'use server'
import { revalidatePath } from 'next/cache'

export async function createPost(data: { title: string; body: string }) {
  const post = await db.post.create({ data })
  revalidatePath('/posts')
  return post
}

// src/app/posts/_components/create-post-form.tsx
'use client'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createPost } from '../actions'
import { postKeys } from '@/queries/posts'

export function CreatePostForm() {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postKeys.lists() })
    },
  })

  return (
    <button
      onClick={() => mutation.mutate({ title: 'New Post', body: '...' })}
      disabled={mutation.isPending}
    >
      {mutation.isPending ? 'Creating...' : 'Create Post'}
    </button>
  )
}
```

## Optimistic Updates with Server Actions
```tsx
const mutation = useMutation({
  mutationFn: updatePost,
  onMutate: async (updated) => {
    await queryClient.cancelQueries({ queryKey: postKeys.detail(updated.id) })
    const previous = queryClient.getQueryData(postKeys.detail(updated.id))
    queryClient.setQueryData(postKeys.detail(updated.id), (old: Post) => ({ ...old, ...updated }))
    return { previous }
  },
  onError: (_, updated, ctx) => {
    queryClient.setQueryData(postKeys.detail(updated.id), ctx?.previous)
  },
  onSettled: (_, __, updated) => {
    queryClient.invalidateQueries({ queryKey: postKeys.detail(updated.id) })
  },
})
```

## When to Use Server Components vs TanStack Query
| Use Server Components When | Use TanStack Query When |
|---|---|
| Static or rarely-changing data | Real-time or frequently-updated data |
| SEO-critical initial content | User interactions (forms, toggles) |
| No need to refetch on client | Optimistic updates needed |
| Data is not shared across components | Data is shared across many components |
| No loading states desired | Fine-grained loading/error UI needed |

## Route Handlers (API Routes) as Query Targets
- Use `src/app/api/` route handlers as the API layer for TanStack Query fetchers
- Keep route handlers thin — just parse/validate input and call service layer
```ts
// src/app/api/posts/route.ts
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const posts = await getPosts({ category: searchParams.get('category') })
  return NextResponse.json(posts)
}
```

## Infinite Queries (Pagination / Infinite Scroll)
```tsx
'use client'
import { useInfiniteQuery } from '@tanstack/react-query'

export function InfinitePosts() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: postKeys.lists(),
    queryFn: ({ pageParam }) =>
      fetch(`/api/posts?cursor=${pageParam ?? ''}`).then(r => r.json()),
    initialPageParam: undefined as string | undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  })

  const posts = data?.pages.flatMap(p => p.items) ?? []

  return (
    <div>
      {posts.map(post => <PostCard key={post.id} post={post} />)}
      <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
        {isFetchingNextPage ? 'Loading...' : 'Load More'}
      </button>
    </div>
  )
}
```

## Key Rules
- Create one `QueryClient` per request on the server side (inside Server Components)
- Create one `QueryClient` per browser session on the client (via `useState` in provider)
- Always use `HydrationBoundary` when passing server-prefetched data to client components
- Never call `fetch` inside Client Components directly — always go through `queryFn`
- Mark all components that use TanStack Query hooks with `'use client'`
