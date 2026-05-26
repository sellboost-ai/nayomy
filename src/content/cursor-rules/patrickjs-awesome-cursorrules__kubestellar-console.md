---
name: "kubestellar-console"
clean_name: "Kubestellar Console"
description: "KubeStellar Console — Multi-cluster Kubernetes dashboard development rules"
description_tr: "KubeStellar Console — Multi-cluster Kubernetes dashboard geliştirme kuralları"
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/kubestellar-console.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/kubestellar-console.mdc"
body_length: 2311
file_extension: ".mdc"
body_tr: |-
  # KubeStellar Console Geliştirme Kuralları

  ## Proje Yapısı
  - Frontend: React + TypeScript `/web/` dizininde
  - Backend: Go (Fiber v2) kök dizininde
  - Build: Her commit öncesi `cd web && npm run build && npm run lint` çalıştırın
  - Kartlar: Dashboard kart bileşenleri `web/src/components/cards/` dizininde
  - Hooks: Veri getirme hooks'ları `web/src/hooks/` dizininde

  ## Kart Geliştirme
  - Tüm veri getirme işlemleri `useCache`/`useCached*` hooks'ları üzerinden yapılmalıdır
  - Her zaman `isDemoData` ve `isRefreshing` değerlerini destructure edin ve `useCardLoadingState()` fonksiyonuna geçin
  - Yükleme sırasında hiçbir zaman demo veri kullanmayın: `isDemoFallback && !isLoading`
  - Hook sıralaması: `useCardLoadingState` `isDemoData` sağlayan hooks'lardan sonra gelmelidir

  ## Array Güvenliği
  - Undefined olabilecek değerler üzerinde ASLA `.join()`, `.map()`, `.filter()`, `.forEach()`, `for...of` çağırmayın
  - Her zaman koruma sağlayın: `(data || []).map(...)` veya `(data || []).join(', ')`

  ## Sihirli Sayı Yok
  - Sayısal literals adlandırılmış sabitler olmalıdır, açık yerel bağlamlardaki basit literals hariç (`0`, `1`, `-1`)
  - `lib/constants/` adresindeki sabitler kullanın (time.ts, network.ts, ui.ts)

  ## Stil Oluşturma
  - `cn()` utility'si ile classNames birleştirme için Tailwind CSS kullanın
  - Ham hex renkler kullanmayın — anlamsal Tailwind sınıfları kullanın (`text-foreground`, `bg-primary`, `bg-card`)
  - Durum renkleri: `text-green-400`/`bg-green-500/10` (başarı), `text-yellow-400`/`bg-yellow-500/10` (uyarı), `text-red-400`/`bg-red-500/10` (hata), `text-cyan-400`/`bg-cyan-500/10` (bilgi) — bunlar tasarım sisteminin anlamsal durum token'larına eşlenir ve izin verilen tek palet sınıflarıdır

  ## Uluslararasılaştırma
  - Tüm kullanıcıya yönelik stringler `react-i18next` adresinden `t()` kullanır
  - `web/src/locales/en/` JSON dosyalarında anahtarlar
  - UI metni için asla ham stringler kullanmayın

  ## Go Backend
  - Fiber v2 handlers: `func(c *fiber.Ctx) error`
  - Hatalar için `fiber.NewError(statusCode, message)` kullanın
  - Her zaman `make([]T, 0)` kullanın, `var x []T` değil (nil → JSON'da null olur)
  - Yapılandırılmış logging için `log/slog` kullanın
  - Çoklu küme sorguları goroutine'ler + sync.WaitGroup kullanır

  ## Küme Deduplicating
  - Kümeleri iterasyon yaparken her zaman `DeduplicatedClusters()` kullanın
  - Birden fazla kubeconfig context'i aynı fiziksel kümeyü gösterebilir
---

# KubeStellar Console Development Rules

## Project Structure
- Frontend: React + TypeScript in `/web/`
- Backend: Go (Fiber v2) in root directory
- Build: `cd web && npm run build && npm run lint` before every commit
- Cards: Dashboard card components in `web/src/components/cards/`
- Hooks: Data fetching hooks in `web/src/hooks/`

## Card Development
- All data fetching MUST go through `useCache`/`useCached*` hooks
- Always destructure and pass `isDemoData` and `isRefreshing` to `useCardLoadingState()`
- Never use demo data during loading: `isDemoFallback && !isLoading`
- Hook ordering: `useCardLoadingState` AFTER hooks providing `isDemoData`

## Array Safety
- NEVER call `.join()`, `.map()`, `.filter()`, `.forEach()`, `for...of` on values that might be undefined
- Always guard: `(data || []).map(...)` or `(data || []).join(', ')`

## No Magic Numbers
- Numeric literals should be named constants, except trivial literals (`0`, `1`, `-1`) in clear local contexts
- Use constants from `lib/constants/` (time.ts, network.ts, ui.ts)

## Styling
- Tailwind CSS with `cn()` utility for merging classNames
- Never use raw hex colors — use semantic Tailwind classes (`text-foreground`, `bg-primary`, `bg-card`)
- Status colors: `text-green-400`/`bg-green-500/10` (success), `text-yellow-400`/`bg-yellow-500/10` (warning), `text-red-400`/`bg-red-500/10` (error), `text-cyan-400`/`bg-cyan-500/10` (info) — these map to the design system's semantic status tokens and are the only permitted palette classes

## Internationalization
- All user-facing strings use `t()` from `react-i18next`
- Keys in `web/src/locales/en/` JSON files
- Never use raw strings for UI text

## Go Backend
- Fiber v2 handlers: `func(c *fiber.Ctx) error`
- Use `fiber.NewError(statusCode, message)` for errors
- Always `make([]T, 0)` not `var x []T` (nil → null in JSON)
- Use `log/slog` for structured logging
- Multi-cluster queries use goroutines + sync.WaitGroup

## Cluster Deduplication
- Always use `DeduplicatedClusters()` when iterating clusters
- Multiple kubeconfig contexts can point to same physical cluster
