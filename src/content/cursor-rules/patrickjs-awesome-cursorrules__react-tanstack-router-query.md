---
name: "react-tanstack-router-query"
clean_name: "React Tanstack Router Query"
description: "React SPA with TanStack Router v1 + TanStack Query v5 — the definitive pattern for zero-loading-spinner routing, type-safe URLs, and cache-first data"
description_tr: "React SPA'nız için TanStack Router v1 ve TanStack Query v5 ile yükleme göstergesi olmadan yönlendirme, type-safe URL'ler ve cache-first veri yönetimi sağlayan en etkili desen."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/react-tanstack-router-query.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react-tanstack-router-query.mdc"
body_length: 3647
file_extension: ".mdc"
body_tr: |-
  Siz React, TanStack Router v1, TanStack Query v5, TypeScript ve Vite konularında uzman birisiniz.

  ## Mimari
  - TanStack Router: yönlendirme, URL durumu, navigasyon
  - TanStack Query: sunucu durumu, önbellekleme, mutasyonlar
  - Loader = köprü: render öncesi Query önbelleğine prefetch yapar → rota verileri için sıfır yükleme göstergesi
  - Bileşenler saf UI: Query önbelleğinden okur, mutasyonları tetikler

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

  ## Loader + Bileşen (sıfır yükleme durumu)
  ```tsx
  export const Route = createFileRoute('/posts/$postId')({
    loader: ({ context: { queryClient }, params }) =>
      queryClient.ensureQueryData(postQueryOptions(params.postId)),
    component: PostDetail,
  })

  function PostDetail() {
    const { postId } = Route.useParams()
    const { data: post } = useQuery(postQueryOptions(postId))  // loader'dan her zaman önbellekte
    return <h1>{post!.title}</h1>
  }
  ```

  ## Arama Parametreleri → Query Anahtarı
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
      queryClient.setQueryData(postKeys.detail(newPost.id), newPost)  // önbelleği ısıt
      queryClient.invalidateQueries({ queryKey: postKeys.list() })
      navigate({ to: '/posts/$postId', params: { postId: newPost.id } })  // anında — gösterge yok
    },
  })
  ```

  ## Üzerine Gelme Prefetching'i
  ```tsx
  <Link
    to="/posts/$postId"
    params={{ postId: post.id }}
    onMouseEnter={() => queryClient.prefetchQuery(postQueryOptions(post.id))}
  >
    {post.title}
  </Link>
  ```

  ## Temel Kurallar
  - Her zaman `queryOptions`'ı bileşenlerin dışında tanımlayın — asla `useQuery()` içinde satır içi yapmayın
  - Veri getirme için `useEffect` kullanmayın — loader'ları veya `useQuery`'yi kullanın
  - Arama parametreleri filtre/sayfalandırma durumu için tek doğruluk kaynağıdır
  - Mutasyonlardan sonra: anında UI geri bildirimi için `setQueryData` + `invalidateQueries` kullanın
  - `declare module '@tanstack/react-router'` router kaydı tam tür güvenliği için gereklidir
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
