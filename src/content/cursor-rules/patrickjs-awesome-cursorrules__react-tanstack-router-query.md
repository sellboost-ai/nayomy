---
name: "react-tanstack-router-query"
clean_name: "React Tanstack Router Query"
description: "React SPA with TanStack Router v1 + TanStack Query v5 — the definitive pattern for zero-loading-spinner routing, type-safe URLs, and cache-first data"
description_tr: "React SPA uygulamaları için TanStack Router v1 ve TanStack Query v5 ile yüksek performanslı routing, type-safe URL'ler ve cache-first veri yönetimi sunan standart çözüm."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/react-tanstack-router-query.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react-tanstack-router-query.mdc"
body_length: 3647
file_extension: ".mdc"
body_tr: |-
  React, TanStack Router v1, TanStack Query v5, TypeScript ve Vite konusunda uzmanız.

  ## Mimari
  - TanStack Router: yönlendirme, URL state'i, navigasyon
  - TanStack Query: server state'i, caching, mutasyonlar
  - Loader = köprü: render'dan önce Query cache'ine önceden yükler → route verileri için sıfır yükleme spinner'ı
  - Bileşenler saf UI'dır: Query cache'inden okur, mutasyonları tetikler

  ## Kurulum
  ```ts
  // src/lib/queryClient.ts
  export const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 60_000 } },
  })

  // src/lib/router.ts
  export const router = createRouter({
    routeTree,
    context: { queryClient },
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
  })

  declare module '@tanstack/react-router' {
    interface Register { router: typeof router }
  }

  // src/main.tsx
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} context={{ queryClient }} />
  </QueryClientProvider>
  ```

  ## Query Tanımları
  ```ts
  // src/queries/posts.ts
  export const postKeys = {
    all: ['posts'] as const,
    detail: (id: string) => [...postKeys.all, 'detail', id] as const,
    list: (f?: PostFilters) => [...postKeys.all, 'list', f] as const,
  }

  export const postQueryOptions = (id: string) =>
    queryOptions({ queryKey: postKeys.detail(id), queryFn: () => fetchPost(id) })

  export const postsQueryOptions = (filters?: PostFilters) =>
    queryOptions({ queryKey: postKeys.list(filters), queryFn: () => fetchPosts(filters) })
  ```

  ## Loader + Bileşen (sıfır yükleme state'i)
  ```tsx
  export const Route = createFileRoute('/posts/$postId')({
    loader: ({ context: { queryClient }, params }) =>
      queryClient.ensureQueryData(postQueryOptions(params.postId)),
    component: PostDetail,
  })

  function PostDetail() {
    const { postId } = Route.useParams()
    const { data: post } = useQuery(postQueryOptions(postId))  // her zaman loader'dan cache'de
    return <h1>{post!.title}</h1>
  }
  ```

  ## Arama Parametreleri → Query Key
  ```tsx
  const searchSchema = z.object({ page: z.number().default(1), q: z.string().optional() })

  export const Route = createFileRoute('/posts/')({
    validateSearch: searchSchema,
    loader: ({ context: { queryClient }, location: { search } }) =>
      queryClient.ensureQueryData(postsQueryOptions(search)),
    component: PostsList,
  })

  function PostsList() {
    const search = Route.useSearch()
    const { data } = useQuery(postsQueryOptions(search))
    // ...
  }
  ```

  ## Mutasyonlar
  ```tsx
  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      queryClient.setQueryData(postKeys.detail(newPost.id), newPost)  // cache'i ısıt
      queryClient.invalidateQueries({ queryKey: postKeys.list() })
      navigate({ to: '/posts/$postId', params: { postId: newPost.id } })  // anlık — spinner yok
    },
  })
  ```

  ## Üzerine Gelme Prefetch'i
  ```tsx
  <Link
    to="/posts/$postId"
    params={{ postId: post.id }}
    onMouseEnter={() => queryClient.prefetchQuery(postQueryOptions(post.id))}
  >
    {post.title}
  </Link>
  ```

  ## Ana Kurallar
  - Her zaman `queryOptions`'ı bileşenlerin dışında tanımla — asla `useQuery()` içinde inline olarak yapma
  - Veri getirme için `useEffect` kullanma — loader veya `useQuery` kullan
  - Arama parametreleri filtre/sayfalama state'i için tek gerçek kaynaktır
  - Mutasyondan sonra: anlık UI geri bildirimi için `setQueryData` + `invalidateQueries`
  - `declare module '@tanstack/react-router'` router kaydı tam type safety için gereklidir
---

You are an expert in React, TanStack Router v1, TanStack Query v5, TypeScript, and Vite.

## Architecture
- TanStack Router: routing, URL state, navigation
- TanStack Query: server state, caching, mutations
- Loader = bridge: prefetches into Query cache before render → zero loading spinners for route data
- Components are pure UI: read from Query cache, trigger mutations

## Setup
```ts
// src/lib/queryClient.ts
export const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60_000 } },
})

// src/lib/router.ts
export const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
})

declare module '@tanstack/react-router' {
  interface Register { router: typeof router }
}

// src/main.tsx
<QueryClientProvider client={queryClient}>
  <RouterProvider router={router} context={{ queryClient }} />
</QueryClientProvider>
```

## Query Definitions
```ts
// src/queries/posts.ts
export const postKeys = {
  all: ['posts'] as const,
  detail: (id: string) => [...postKeys.all, 'detail', id] as const,
  list: (f?: PostFilters) => [...postKeys.all, 'list', f] as const,
}

export const postQueryOptions = (id: string) =>
  queryOptions({ queryKey: postKeys.detail(id), queryFn: () => fetchPost(id) })

export const postsQueryOptions = (filters?: PostFilters) =>
  queryOptions({ queryKey: postKeys.list(filters), queryFn: () => fetchPosts(filters) })
```

## Loader + Component (zero loading state)
```tsx
export const Route = createFileRoute('/posts/$postId')({
  loader: ({ context: { queryClient }, params }) =>
    queryClient.ensureQueryData(postQueryOptions(params.postId)),
  component: PostDetail,
})

function PostDetail() {
  const { postId } = Route.useParams()
  const { data: post } = useQuery(postQueryOptions(postId))  // always in cache from loader
  return <h1>{post!.title}</h1>
}
```

## Search Params → Query Key
```tsx
const searchSchema = z.object({ page: z.number().default(1), q: z.string().optional() })

export const Route = createFileRoute('/posts/')({
  validateSearch: searchSchema,
  loader: ({ context: { queryClient }, location: { search } }) =>
    queryClient.ensureQueryData(postsQueryOptions(search)),
  component: PostsList,
})

function PostsList() {
  const search = Route.useSearch()
  const { data } = useQuery(postsQueryOptions(search))
  // ...
}
```

## Mutations
```tsx
const mutation = useMutation({
  mutationFn: createPost,
  onSuccess: (newPost) => {
    queryClient.setQueryData(postKeys.detail(newPost.id), newPost)  // warm cache
    queryClient.invalidateQueries({ queryKey: postKeys.list() })
    navigate({ to: '/posts/$postId', params: { postId: newPost.id } })  // instant — no spinner
  },
})
```

## Hover Prefetching
```tsx
<Link
  to="/posts/$postId"
  params={{ postId: post.id }}
  onMouseEnter={() => queryClient.prefetchQuery(postQueryOptions(post.id))}
>
  {post.title}
</Link>
```

## Key Rules
- Always define `queryOptions` outside components — never inline inside `useQuery()`
- Never use `useEffect` for data fetching — use loaders or `useQuery`
- Search params are the single source of truth for filter/pagination state
- After mutations: `setQueryData` + `invalidateQueries` for instant UI feedback
- `declare module '@tanstack/react-router'` router registration is required for full type safety
