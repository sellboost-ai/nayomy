---
name: "react-router-v7"
clean_name: "React Router V7"
description: "React Router v7 rules for framework mode, data routers, loaders, actions, route modules, and progressive enhancement"
description_tr: "React Router v7 framework mode, data router'lar, loader'lar, action'lar, route modülleri ve progressive enhancement için kuralları belirler."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/react-router-v7.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react-router-v7.mdc"
body_length: 2284
file_extension: ".mdc"
body_tr: |-
  # React Router v7 Kuralları

  ## Route Modülleri

  - Route modüllerini route UI'ı, loader verileri, actions, metadata ve error boundaries'nin sınırı olarak kullanın.
  - Route modüllerini küçük tutun; paylaşılan UI'ı components'lere ve yeniden kullanılabilir veri erişimini services'lere taşıyın.
  - Proje framework modu için yapılandırıldığında dosya tabanlı routing'i tercih edin.
  - Paylaşılan layoutlar ve kademeli açılım için nested routes kullanın.
  - Kurtarılabilir route hatalarında route'a özel `ErrorBoundary` componentleri export edin.

  ## Veri Yükleme

  - Render'dan önce kullanılabilir olması gereken route verileri için loaders kullanın.
  - Loaders'ı deterministik ve yan etkisiz tutun.
  - Loader sınırında params ve search params'ı doğrulayın.
  - Yazılı verileri dönün ve components'lerde fetch logic'ini yinelemek yerine route hooks'ları aracılığıyla tüketin.
  - Deferred veya streaming patterns'ını yalnızca algılanan performansı iyileştirdiklerinde kullanın.

  ## Mutasyonlar

  - Route mutasyonları ve form gönderimleri için actions kullanın.
  - Kademeli geliştirme için `Form`, `useFetcher` ve `useSubmit`'i tercih edin.
  - Mutasyonlardan sonra etkilenen loader verilerini yeniden doğrulayın.
  - Doğrulama hatalarını jenerik istisnalar yerine yazılı action verileri olarak işleyin.
  - Server'a özel sırları ve ayrıcalıklı işlemleri client actions'larından uzak tutun.

  ## Navigasyon ve Durum

  - Paylaşılabilir durumu URL params veya search params'da saklayın.
  - Kısa ömürlü UI durumunu components'lere yerel tutun.
  - Optimistik veya yükleme UI'ı göstermek için pending navigation durumunu kullanın.
  - Route loaders'ına ait olan veriler için global durumdan kaçının.

  ## TypeScript ve Test Etme

  - Loader ve action dönüş değerlerini yazın.
  - Route loaders, actions, doğrulama hataları ve error boundaries'ler için testler ekleyin.
  - Kritik form ve navigasyon akışları için entegrasyon testleri kullanın.
  - Route-service sınırında network ve persistence'ı mock edin.

  ## Yaygın Hatalar

  - `useEffect`'te loader fetch'lerini yinelememeyin.
  - Loaders'da verileri mutate etmemeyin.
  - Route hatalarını tek bir jenerik app seviyesi catch-all'ın arkasına gizlemeyin.
  - Loader verileri korunduğunda auth kontrolleri yalnızca components'lere koymayın.
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
