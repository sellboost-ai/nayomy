---
name: "react-router-v7"
clean_name: "React Router V7"
description: "React Router v7 rules for framework mode, data routers, loaders, actions, route modules, and progressive enhancement"
description_tr: "React Router v7, framework mode, data router'lar, loader'lar, action'lar, route module'ları ve progressive enhancement için kurallar belirler."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/react-router-v7.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react-router-v7.mdc"
body_length: 2284
file_extension: ".mdc"
body_tr: |-
  # React Router v7 Kuralları

  ## Route Modülleri

  - Route modüllerini route UI'ı, loader verisi, actions, metadata ve error boundaries için sınır olarak kullanın.
  - Route modüllerini küçük tutun; paylaşılan UI'ı components'e ve yeniden kullanılabilir veri erişimini services'e taşıyın.
  - Proje buna göre yapılandırıldığında framework modunda dosya tabanlı routing'i tercih edin.
  - Paylaşılan layoutlar ve progressive disclosure için nested routes kullanın.
  - Kurtarılabilir route başarısızlıkları için route'a özgü `ErrorBoundary` components'lerini export edin.

  ## Veri Yükleme

  - Render'dan önce mevcut olması gereken route verisi için loaders kullanın.
  - Loaders'ı deterministic tutun ve yan etkilerden arındırın.
  - Loader sınırında params ve search params'ı valide edin.
  - Yazılı veriler döndürün ve components'lerde fetch logikini kopyalamak yerine route hooks aracılığıyla tüketin.
  - Deferred veya streaming patternlerini yalnızca algılanan performansı iyileştirdiğinde kullanın.

  ## Mutasyonlar

  - Route mutasyonları ve form gönderimleri için actions kullanın.
  - Progressive enhancement için `Form`, `useFetcher` ve `useSubmit` tercih edin.
  - Mutasyonlardan sonra etkilenen loader verilerini yeniden valide edin.
  - Validation hatalarını generic exceptions yerine yazılı action verisi olarak işleyin.
  - Sunucu-yalnızca sırları ve ayrıcalıklı işlemleri client actions'dan uzak tutun.

  ## Navigation ve State

  - Paylaşılabilir state'i URL params veya search params'da saklayın.
  - Geçici UI state'ini components'e local tutun.
  - Optimistic veya loading UI göstermek için pending navigation state'ini kullanın.
  - Route loaders'a ait veriler için global state'ten kaçının.

  ## TypeScript ve Testing

  - Loader ve action dönüş değerlerini type edin.
  - Route loaders, actions, validation başarısızlıkları ve error boundaries için testler ekleyin.
  - Kritik form ve navigation akışları için integration testlerini kullanın.
  - Network ve persistence'ı route-service sınırında mock edin.

  ## Yaygın Hatalar

  - `useEffect`'te loader fetch'lerini kopyalamayın.
  - Loaders'da verilerine mutasyon uygulamayın.
  - Route hatalarını tek bir generic app-level catch-all'un arkasına gizlemeyin.
  - Auth kontrolleri yalnızca components'lere koymayın, loader verisi korunuyorsa.
---


# React Router v7 Rules

## Route Modules

- Use route modules as the boundary for route UI, loader data, actions, metadata, and error boundaries.
- Keep route modules small; move shared UI to components and reusable data access to services.
- Prefer file-based routing in framework mode when the project is configured for it.
- Use nested routes for shared layouts and progressive disclosure.
- Export route-specific `ErrorBoundary` components for recoverable route failures.

## Data Loading

- Use loaders for route data that should be available before render.
- Keep loaders deterministic and side-effect free.
- Validate params and search params at the loader boundary.
- Return typed data and consume it through route hooks rather than duplicating fetch logic in components.
- Use deferred or streaming patterns only when they improve perceived performance.

## Mutations

- Use actions for route mutations and form submissions.
- Prefer `Form`, `useFetcher`, and `useSubmit` for progressive enhancement.
- Revalidate affected loader data after mutations.
- Handle validation errors as typed action data instead of generic exceptions.
- Keep server-only secrets and privileged operations out of client actions.

## Navigation and State

- Store shareable state in URL params or search params.
- Keep ephemeral UI state local to components.
- Use pending navigation state to show optimistic or loading UI.
- Avoid global state for data that belongs to route loaders.

## TypeScript and Testing

- Type loader and action return values.
- Add tests for route loaders, actions, validation failures, and error boundaries.
- Use integration tests for critical form and navigation flows.
- Mock network and persistence at the route-service boundary.

## Common Mistakes

- Do not duplicate loader fetches in `useEffect`.
- Do not mutate data in loaders.
- Do not hide route errors behind a single generic app-level catch-all.
- Do not put auth checks only in components when loader data is protected.
