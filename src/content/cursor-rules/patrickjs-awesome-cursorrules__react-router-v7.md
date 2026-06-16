---
name: "react-router-v7"
clean_name: "React Router V7"
description: "React Router v7 rules for framework mode, data routers, loaders, actions, route modules, and progressive enhancement"
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/react-router-v7.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react-router-v7.mdc"
body_length: 2284
file_extension: ".mdc"
body_tr: |-
  # React Router v7 Kuralları

  ## Route Modülleri

  - Route modüllerini route UI'ı, loader verisi, actionlar, metadata ve error boundary'leri için sınır olarak kullanın.
  - Route modüllerini küçük tutun; paylaşılan UI'ı componentlere ve yeniden kullanılabilir veri erişimini servislere taşıyın.
  - Proje framework modu için yapılandırıldığında dosya tabanlı routing'i tercih edin.
  - Paylaşılan layoutlar ve kademeli açılım için iç içe rotaları kullanın.
  - Kurtarılabilir route hatalarına karşı route'a özgü `ErrorBoundary` componentlerini export edin.

  ## Veri Yükleme

  - Render'dan önce kullanılabilir olması gereken route verisi için loader'ları kullanın.
  - Loader'ları deterministik ve yan etkisiz tutun.
  - Loader sınırında parametreleri ve arama parametrelerini doğrulayın.
  - Yazılı veriler döndürün ve componentlerde fetch mantığını tekrarlamak yerine route hook'ları aracılığıyla tüketin.
  - Deferred veya streaming desenlerini yalnızca algılanan performansı iyileştirdiğinde kullanın.

  ## Mutasyonlar

  - Route mutasyonları ve form gönderileri için action'ları kullanın.
  - Aşamalı geliştirme için `Form`, `useFetcher` ve `useSubmit`'i tercih edin.
  - Mutasyonlardan sonra etkilenen loader verilerini yeniden doğrulayın.
  - Doğrulama hatalarını genel istisnalar yerine yazılı action verisi olarak ele alın.
  - Sunucu tarafı sırlarını ve ayrıcalıklı işlemleri client actionlarından uzak tutun.

  ## Navigasyon ve Durum

  - Paylaşılabilir durumu URL parametreleri veya arama parametrelerinde saklayın.
  - Geçici UI durumunu componentlere yerel tutun.
  - İyimser veya yüklenen UI göstermek için bekleme navigasyon durumunu kullanın.
  - Route loader'larına ait veriler için global durum kullanmaktan kaçının.

  ## TypeScript ve Test Etme

  - Loader ve action dönüş değerlerini yazın.
  - Route loader'ları, actionlar, doğrulama hatalarını ve error boundary'leri için test'ler ekleyin.
  - Kritik form ve navigasyon akışları için entegrasyon testleri kullanın.
  - Route-service sınırında ağ ve kalıcılığı mock'layın.

  ## Yaygın Hatalar

  - `useEffect`'te loader fetch'lerini tekrarlamayın.
  - Loader'larda veri mutasyonu yapılmasın.
  - Route hatalarını tek bir genel uygulama seviyesi catch-all'nin arkasına gizlemeyin.
  - Auth kontrolleri yalnızca componentlere koymayın, loader verisi korunduğunda.
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
