---
name: "react-tanstack-router-query-cursorrules-prompt-file"
clean_name: "React Tanstack Router Query"
description: "Cursor rules for React SPAs combining TanStack Router v1 and TanStack Query v5 for zero-loading-spinner routing and type-safe server state."
description_tr: "React SPA'ları için TanStack Router v1 ve TanStack Query v5'i birleştiren Cursor rules; yükleme göstergesi olmayan routing ve type-safe server state yönetimi sağlar."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/react-tanstack-router-query-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react-tanstack-router-query-cursorrules-prompt-file.mdc"
body_length: 8093
file_extension: ".mdc"
body_tr: |-
  # React + TanStack Router + TanStack Query Rehberi

  ## Mimari Genel Bakış
  - TanStack Router tüm routing, URL state ve navigasyonu yönetir
  - TanStack Query tüm server state, caching ve async veri yönetimini sağlar
  - React bileşenleri saf UI — Query cache'den okurlar ve mutation tetiklerler
  - Loaderlar Router ve Query arasında köprü görevi görür: render edilmeden önce Query cache'ine prefetch yaparlar
  - Bu, route-level veriler için loading spinner'ları ortadan kaldırır; Suspense component-level yüklemeyi yönetir

  ## Proje Yapısı
  ```
  src/
    routes/
      __root.tsx
      index.tsx
      posts/
        index.tsx
        $postId.tsx
    queries/            ← Query tanımlamaları (queryOptions fabrikaları)
      posts.ts
      users.ts
    api/                ← API client fonksiyonları (fetcher'lar)
      posts.ts
      users.ts
    lib/
      queryClient.ts
      router.ts
    main.tsx
  ```

  ## QueryClient + Router Kurulumu
  ```ts
  // src/lib/queryClient.ts
  import { QueryClient } from '@tanstack/react-query'

  export const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60,
        retry: (count, error: any) => error?.status !== 404 && count < 2,
      },
    },
  })
  ```

  ```tsx
  // src/lib/router.ts
  import { createRouter } from '@tanstack/react-router'
  import { routeTree } from '../routeTree.gen'
  import { queryClient } from './queryClient'

  export const router = createRouter({
    routeTree,
    context: { queryClient },
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
  })

  declare module '@tanstack/react-router' {
    interface Register {
      router: typeof router
    }
  }
  ```

  ```tsx
  // src/main.tsx
  import { RouterProvider } from '@tanstack/react-router'
  import { QueryClientProvider } from '@tanstack/react-query'
  import { router } from './lib/router'
  import { queryClient } from './lib/queryClient'

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} context={{ queryClient }} />
    </QueryClientProvider>
  )
  ```

  ## Query Tanımlamaları (queryOptions fabrikaları)
  - Query key, fetcher ve staleTime'ı bir yerde birleştirin
  - Router loaderları ve component hook'ları arasında paylaşın
  ```ts
  // src/queries/posts.ts
  import { queryOptions, infiniteQueryOptions } from '@tanstack/react-query'
  import { fetchPost, fetchPosts } from '../api/posts'

  export const postKeys = {
    all: ['posts'] as const,
    lists: () => [...postKeys.all, 'list'] as const,
    list: (filters?: PostFilters) => [...postKeys.lists(), filters] as const,
    details: () => [...postKeys.all, 'detail'] as const,
    detail: (id: string) => [...postKeys.details(), id] as const,
  }

  export const postDetailQueryOptions = (id: string) =>
    queryOptions({
      queryKey: postKeys.detail(id),
      queryFn: () => fetchPost(id),
      staleTime: 1000 * 60 * 5,
    })

  export const postsListQueryOptions = (filters?: PostFilters) =>
    queryOptions({
      queryKey: postKeys.list(filters),
      queryFn: () => fetchPosts(filters),
      staleTime: 1000 * 60,
    })
  ```

  ## Router Loader + Query Entegrasyonu
  - Loaderlar `queryClient.ensureQueryData` çağırırlar — cache'i doldururlar, spinner olmadan anında render ederler
  - Bileşenler daha sonra aynı seçeneklerle `useQuery` çağırırlar — cache'ten senkron olarak okurlar
  ```tsx
  // src/routes/posts/$postId.tsx
  import { createFileRoute } from '@tanstack/react-router'
  import { useQuery } from '@tanstack/react-query'
  import { postDetailQueryOptions } from '../../queries/posts'

  export const Route = createFileRoute('/posts/$postId')({
    loader: ({ context: { queryClient }, params }) =>
      queryClient.ensureQueryData(postDetailQueryOptions(params.postId)),

    errorComponent: ({ error }) => <ErrorMessage error={error} />,
    pendingComponent: PostSkeleton,
    component: PostDetail,
  })

  function PostDetail() {
    const { postId } = Route.useParams()
    // Veri loader'dan itibaren cache'te zaten var — yükleme state'i yok
    const { data: post } = useQuery(postDetailQueryOptions(postId))

    return <article><h1>{post!.title}</h1></article>
  }
  ```

  ## Search Params + Query Entegrasyonu
  - TanStack Router search params'ı filter/pagination state için gerçek kaynağı olarak kullanın
  - Search params'ı queryOptions'a geçirin, query key ve fetcher'ı yönlendirmek için
  ```tsx
  // src/routes/posts/index.tsx
  import { createFileRoute, Link } from '@tanstack/react-router'
  import { useQuery } from '@tanstack/react-query'
  import { z } from 'zod'
  import { postsListQueryOptions } from '../../queries/posts'

  const searchSchema = z.object({
    page: z.number().int().min(1).default(1),
    category: z.string().optional(),
  })

  export const Route = createFileRoute('/posts/')({
    validateSearch: searchSchema,
    loader: ({ context: { queryClient }, location: { search } }) =>
      queryClient.ensureQueryData(postsListQueryOptions(search)),
    component: PostsList,
  })

  function PostsList() {
    const search = Route.useSearch()
    const navigate = Route.useNavigate()
    const { data: posts } = useQuery(postsListQueryOptions(search))

    return (
      <div>
        {posts?.map(post => (
          <Link key={post.id} to="/posts/$postId" params={{ postId: post.id }}>
            {post.title}
          </Link>
        ))}
        <button onClick={() => navigate({ search: { ...search, page: search.page + 1 } })}>
          Sonraki Sayfa
        </button>
      </div>
    )
  }
  ```

  ## Mutation'lar
  ```tsx
  import { useMutation, useQueryClient } from '@tanstack/react-query'
  import { useNavigate } from '@tanstack/react-router'
  import { postKeys } from '../../queries/posts'

  function CreatePostForm() {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const mutation = useMutation({
      mutationFn: createPost,
      onSuccess: (newPost) => {
        // Detay cache'ini anında doldur
        queryClient.setQueryData(postKeys.detail(newPost.id), newPost)
        // Liste sorgularını invalidate et
        queryClient.invalidateQueries({ queryKey: postKeys.lists() })
        // Yeni posta git (yükleme yok — cache sıcak)
        navigate({ to: '/posts/$postId', params: { postId: newPost.id } })
      },
    })

    return (/* form JSX */)
  }
  ```

  ## Kimlik Doğrulama Deseni
  ```tsx
  // src/routes/__root.tsx
  import { createRootRouteWithContext } from '@tanstack/react-router'

  export interface RouterContext {
    queryClient: QueryClient
    auth: { isAuthenticated: boolean; user: User | null }
  }

  export const Route = createRootRouteWithContext<RouterContext>()({
    component: RootLayout,
  })

  // src/routes/_auth.tsx (korunan rotalar için yolsuz layout)
  export const Route = createFileRoute('/_auth')({
    beforeLoad: ({ context }) => {
      if (!context.auth.isAuthenticated) {
        throw redirect({ to: '/login', search: { redirect: location.pathname } })
      }
    },
  })
  ```

  ## Hover'da Prefetching
  ```tsx
  function PostCard({ post }: { post: Post }) {
    const queryClient = useQueryClient()
    return (
      <Link
        to="/posts/$postId"
        params={{ postId: post.id }}
        onMouseEnter={() => queryClient.prefetchQuery(postDetailQueryOptions(post.id))}
      >
        {post.title}
      </Link>
    )
  }
  ```

  ## DevTools (Yalnızca Geliştirme)
  ```tsx
  // __root.tsx içinde
  import { TanStackRouterDevtools } from '@tanstack/router-devtools'
  import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

  // Bileşen içinde
  {import.meta.env.DEV && (
    <>
      <TanStackRouterDevtools position="bottom-left" />
      <ReactQueryDevtools buttonPosition="bottom-right" />
    </>
  )}
  ```

  ## Ana Kurallar
  - Daima `queryOptions`'ı bileşenlerin dışında tanımlayın — `useQuery()` içinde inline olarak değil
  - Asla veri getirmek için `useEffect` kullanmayın — loaderları veya `useQuery` kullanın
  - Daima router context'ini type edin — `declare module '@tanstack/react-router'` kaydı gereklidir
  - Search params, URL tarafından yönlendirilen filter state için tek gerçek kaynaktır
  - Mutation'lar `setQueryData` + `invalidateQueries` yapmalı, sadece invalidate değil, anında UI geri bildirimi için
---

You are an expert in React, TanStack Router v1, TanStack Query v5, TypeScript, Vite, and building fully type-safe single-page applications.

# React + TanStack Router + TanStack Query Guidelines

## Architecture Overview
- TanStack Router handles all routing, URL state, and navigation
- TanStack Query manages all server state, caching, and async data
- React components are pure UI — they read from Query cache and trigger mutations
- Loaders bridge Router and Query: they prefetch into the Query cache before render
- This eliminates loading spinners for route-level data; Suspense handles component-level loading

## Project Setup
```
src/
  routes/
    __root.tsx
    index.tsx
    posts/
      index.tsx
      $postId.tsx
  queries/            ← Query definitions (queryOptions factories)
    posts.ts
    users.ts
  api/                ← API client functions (fetchers)
    posts.ts
    users.ts
  lib/
    queryClient.ts
    router.ts
  main.tsx
```

## QueryClient + Router Setup
```ts
// src/lib/queryClient.ts
import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      retry: (count, error: any) => error?.status !== 404 && count < 2,
    },
  },
})
```

```tsx
// src/lib/router.ts
import { createRouter } from '@tanstack/react-router'
import { routeTree } from '../routeTree.gen'
import { queryClient } from './queryClient'

export const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
```

```tsx
// src/main.tsx
import { RouterProvider } from '@tanstack/react-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { router } from './lib/router'
import { queryClient } from './lib/queryClient'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} context={{ queryClient }} />
  </QueryClientProvider>
)
```

## Query Definitions (queryOptions factories)
- Co-locate query key, fetcher, and staleTime in one place
- Share between Router loaders and component hooks
```ts
// src/queries/posts.ts
import { queryOptions, infiniteQueryOptions } from '@tanstack/react-query'
import { fetchPost, fetchPosts } from '../api/posts'

export const postKeys = {
  all: ['posts'] as const,
  lists: () => [...postKeys.all, 'list'] as const,
  list: (filters?: PostFilters) => [...postKeys.lists(), filters] as const,
  details: () => [...postKeys.all, 'detail'] as const,
  detail: (id: string) => [...postKeys.details(), id] as const,
}

export const postDetailQueryOptions = (id: string) =>
  queryOptions({
    queryKey: postKeys.detail(id),
    queryFn: () => fetchPost(id),
    staleTime: 1000 * 60 * 5,
  })

export const postsListQueryOptions = (filters?: PostFilters) =>
  queryOptions({
    queryKey: postKeys.list(filters),
    queryFn: () => fetchPosts(filters),
    staleTime: 1000 * 60,
  })
```

## Router Loader + Query Integration
- Loaders call `queryClient.ensureQueryData` — populates cache, renders immediately without spinner
- Components then call `useQuery` with the same options — reads from cache synchronously
```tsx
// src/routes/posts/$postId.tsx
import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { postDetailQueryOptions } from '../../queries/posts'

export const Route = createFileRoute('/posts/$postId')({
  loader: ({ context: { queryClient }, params }) =>
    queryClient.ensureQueryData(postDetailQueryOptions(params.postId)),

  errorComponent: ({ error }) => <ErrorMessage error={error} />,
  pendingComponent: PostSkeleton,
  component: PostDetail,
})

function PostDetail() {
  const { postId } = Route.useParams()
  // data is already in cache from loader — no loading state
  const { data: post } = useQuery(postDetailQueryOptions(postId))

  return <article><h1>{post!.title}</h1></article>
}
```

## Search Params + Query Integration
- Use TanStack Router search params as the source of truth for filter/pagination state
- Pass search params into queryOptions to drive query key and fetcher
```tsx
// src/routes/posts/index.tsx
import { createFileRoute, Link } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { z } from 'zod'
import { postsListQueryOptions } from '../../queries/posts'

const searchSchema = z.object({
  page: z.number().int().min(1).default(1),
  category: z.string().optional(),
})

export const Route = createFileRoute('/posts/')({
  validateSearch: searchSchema,
  loader: ({ context: { queryClient }, location: { search } }) =>
    queryClient.ensureQueryData(postsListQueryOptions(search)),
  component: PostsList,
})

function PostsList() {
  const search = Route.useSearch()
  const navigate = Route.useNavigate()
  const { data: posts } = useQuery(postsListQueryOptions(search))

  return (
    <div>
      {posts?.map(post => (
        <Link key={post.id} to="/posts/$postId" params={{ postId: post.id }}>
          {post.title}
        </Link>
      ))}
      <button onClick={() => navigate({ search: { ...search, page: search.page + 1 } })}>
        Next Page
      </button>
    </div>
  )
}
```

## Mutations
```tsx
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { postKeys } from '../../queries/posts'

function CreatePostForm() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      // Populate detail cache immediately
      queryClient.setQueryData(postKeys.detail(newPost.id), newPost)
      // Invalidate list queries
      queryClient.invalidateQueries({ queryKey: postKeys.lists() })
      // Navigate to new post (no loading — cache is warm)
      navigate({ to: '/posts/$postId', params: { postId: newPost.id } })
    },
  })

  return (/* form JSX */)
}
```

## Authentication Pattern
```tsx
// src/routes/__root.tsx
import { createRootRouteWithContext } from '@tanstack/react-router'

export interface RouterContext {
  queryClient: QueryClient
  auth: { isAuthenticated: boolean; user: User | null }
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
})

// src/routes/_auth.tsx (pathless layout for protected routes)
export const Route = createFileRoute('/_auth')({
  beforeLoad: ({ context }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({ to: '/login', search: { redirect: location.pathname } })
    }
  },
})
```

## Prefetching on Hover
```tsx
function PostCard({ post }: { post: Post }) {
  const queryClient = useQueryClient()
  return (
    <Link
      to="/posts/$postId"
      params={{ postId: post.id }}
      onMouseEnter={() => queryClient.prefetchQuery(postDetailQueryOptions(post.id))}
    >
      {post.title}
    </Link>
  )
}
```

## DevTools (Development Only)
```tsx
// In __root.tsx
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Inside component
{import.meta.env.DEV && (
  <>
    <TanStackRouterDevtools position="bottom-left" />
    <ReactQueryDevtools buttonPosition="bottom-right" />
  </>
)}
```

## Key Rules
- Always define `queryOptions` outside of components — not inline in `useQuery()`
- Never use `useEffect` to fetch data — use loaders or `useQuery`
- Always type router context — `declare module '@tanstack/react-router'` registration is required
- Search params are the only source of truth for URL-driven filter state
- Mutations should `setQueryData` + `invalidateQueries`, not just invalidate, for instant UI feedback
