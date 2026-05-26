---
name: "nextjs-tanstack-query"
clean_name: "Next.js Tanstack Query"
description: "Next.js App Router combined with TanStack Query v5 — HydrationBoundary pattern, Server Actions as mutations, optimistic updates, and infinite scroll"
description_tr: "Next.js App Router ile TanStack Query v5'in birleşimi — HydrationBoundary pattern, Server Actions ile mutations, optimistic updates ve infinite scroll desteği."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/nextjs-tanstack-query.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/nextjs-tanstack-query.mdc"
body_length: 3533
file_extension: ".mdc"
body_tr: |-
  # Siz Next.js App Router, TanStack Query v5, TypeScript ve Server Components'i Client-side veri çekme ile birleştirmede uzmanısınız.

  ## Mimari
  - Server Components verileri doğrudan çeker — orada TanStack Query'ye ihtiyaç yoktur
  - TanStack Query, interaktif, gerçek zamanlı veya mutasyon odaklı veriler için Client Components'te yaşar
  - Query cache'ini sunucudan hidrate edin, ilk yüklemede client waterfalllarını önlemek için
  - İlk sayfa verileri için React Server Components kullanın; mutasyonlar + polling + optimistic UI için TanStack Query

  ## Provider Kurulumu
  ```tsx
  // providers/query-provider.tsx
  'use client'
  export function QueryProvider({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient({
      defaultOptions: { queries: { staleTime: 60 * 1000 } },
    }))
    return (
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    )
  }
  ```

  ## Server Prefetch + HydrationBoundary Deseni
  ```tsx
  // app/posts/page.tsx  (Server Component)
  export default async function PostsPage() {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(postsQueryOptions())
    return (
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PostsList />
      </HydrationBoundary>
    )
  }

  // app/posts/_components/posts-list.tsx  (Client Component)
  'use client'
  export function PostsList() {
    const { data: posts } = useQuery(postsQueryOptions())  // reads from pre-populated cache
    return <ul>{posts?.map(p => <li key={p.id}>{p.title}</li>)}</ul>
  }
  ```

  ## queryOptions Factory
  ```ts
  export const postsQueryOptions = (filters?: PostFilters) =>
    queryOptions({
      queryKey: ['posts', 'list', filters],
      queryFn: () => fetch('/api/posts').then(r => r.json()),
    })
  ```

  ## Server Actions'ları mutationFn olarak kullanma
  ```tsx
  // app/posts/actions.ts
  'use server'
  export async function createPost(data: { title: string; body: string }) {
    const post = await db.post.create({ data })
    revalidatePath('/posts')
    return post
  }

  // usage in Client Component
  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts', 'list'] }),
  })
  ```

  ## Optimist Güncellemeler
  ```tsx
  const mutation = useMutation({
    mutationFn: updatePost,
    onMutate: async (updated) => {
      await queryClient.cancelQueries({ queryKey: ['posts', 'detail', updated.id] })
      const previous = queryClient.getQueryData(['posts', 'detail', updated.id])
      queryClient.setQueryData(['posts', 'detail', updated.id], (old: Post) => ({ ...old, ...updated }))
      return { previous }
    },
    onError: (_, updated, ctx) => {
      queryClient.setQueryData(['posts', 'detail', updated.id], ctx?.previous)
    },
    onSettled: (_, __, updated) => {
      queryClient.invalidateQueries({ queryKey: ['posts', 'detail', updated.id] })
    },
  })
  ```

  ## Anahtar Kurallar
  - Server Components'te istek başına **yeni** bir `QueryClient` oluşturun — istekler arasında hiçbir zaman yeniden kullanmayın
  - Provider'da `useState` aracılığıyla tarayıcı oturumu başına **bir** `QueryClient` oluşturun
  - Sunucudan prefetch edilen alt ağaçları her zaman `HydrationBoundary` içine sarın
  - TanStack Query hook'larını kullanan tüm componentleri `'use client'` ile işaretleyin
  - Client Components'te hiçbir zaman `fetch`'i doğrudan çağırmayın — her zaman `queryFn` aracılığıyla gidin
---

You are an expert in Next.js App Router, TanStack Query v5, TypeScript, and combining server components with client-side data fetching.

## Architecture
- Server Components fetch data directly — no TanStack Query needed there
- TanStack Query lives in Client Components for interactive, real-time, or mutation-driven data
- Hydrate the Query cache from server to avoid client waterfalls on first load
- Use React Server Components for initial page data; TanStack Query for mutations + polling + optimistic UI

## Provider Setup
```tsx
// providers/query-provider.tsx
'use client'
export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: { queries: { staleTime: 60 * 1000 } },
  }))
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
```

## Server Prefetch + HydrationBoundary Pattern
```tsx
// app/posts/page.tsx  (Server Component)
export default async function PostsPage() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(postsQueryOptions())
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostsList />
    </HydrationBoundary>
  )
}

// app/posts/_components/posts-list.tsx  (Client Component)
'use client'
export function PostsList() {
  const { data: posts } = useQuery(postsQueryOptions())  // reads from pre-populated cache
  return <ul>{posts?.map(p => <li key={p.id}>{p.title}</li>)}</ul>
}
```

## queryOptions Factory
```ts
export const postsQueryOptions = (filters?: PostFilters) =>
  queryOptions({
    queryKey: ['posts', 'list', filters],
    queryFn: () => fetch('/api/posts').then(r => r.json()),
  })
```

## Server Actions as mutationFn
```tsx
// app/posts/actions.ts
'use server'
export async function createPost(data: { title: string; body: string }) {
  const post = await db.post.create({ data })
  revalidatePath('/posts')
  return post
}

// usage in Client Component
const mutation = useMutation({
  mutationFn: createPost,
  onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts', 'list'] }),
})
```

## Optimistic Updates
```tsx
const mutation = useMutation({
  mutationFn: updatePost,
  onMutate: async (updated) => {
    await queryClient.cancelQueries({ queryKey: ['posts', 'detail', updated.id] })
    const previous = queryClient.getQueryData(['posts', 'detail', updated.id])
    queryClient.setQueryData(['posts', 'detail', updated.id], (old: Post) => ({ ...old, ...updated }))
    return { previous }
  },
  onError: (_, updated, ctx) => {
    queryClient.setQueryData(['posts', 'detail', updated.id], ctx?.previous)
  },
  onSettled: (_, __, updated) => {
    queryClient.invalidateQueries({ queryKey: ['posts', 'detail', updated.id] })
  },
})
```

## Key Rules
- Create a **new** `QueryClient` per request in Server Components — never reuse across requests
- Create **one** `QueryClient` per browser session via `useState` in the provider
- Always wrap server-prefetched subtrees in `HydrationBoundary`
- Mark all components using TanStack Query hooks with `'use client'`
- Never call `fetch` directly in Client Components — always go through `queryFn`
