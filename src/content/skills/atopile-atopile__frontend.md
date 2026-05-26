---
name: "frontend"
description_en: "Frontend standards for atopile extension webviews: architecture, contracts, design system, and testing workflow."
description_tr: "Atopile extension webviews için frontend standartları: mimari, kontratlar, tasarım sistemi ve testing workflow'u."
category: "Design"
repo: "atopile/atopile"
stars: 3370
url: "https://github.com/atopile/atopile/blob/HEAD/.claude/skills/frontend/SKILL.md"
path: ".claude/skills/frontend/SKILL.md"
is_collection: false
body_length: 12910
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Frontend Becerisi

  Bu beceriyi, atopile'de frontend özelliklerini oluştururken veya değiştirirken kullanın.
  Varsayılan hedef, extension webview'leridir (`ui-server` + `vscode-atopile`).

  ## Hızlı Başlangıç

  Bağımlılık yüklemesi:

  ```bash
  cd src/ui-server
  bun install
  ```

  Frontend-only döngüsü (backend entegrasyonu olmadan):

  ```bash
  cd src/ui-server
  bun run dev
  bun run test
  bun run build
  ```

  Webview entegrasyonu döngüsü (backend + Vite):

  ```bash
  cd src/ui-server
  ./dev.sh
  ```

  Extension paketleme/yükleme döngüsü:

  ```bash
  ato dev compile && ato dev install cursor
  # veya
  ato dev compile && ato dev install vscode
  ```

  Komut referansı:

  - `bun install`: JS bağımlılıklarını yükleyin/senkronize edin.
  - `bun run dev`: yerel Vite dev sunucusunu başlatın (frontend-only iterasyon).
  - `bun run test`: yerel Vitest paketi bir kez çalıştırın.
  - `bun run build`: yerel `tsc && vite build` çalıştırın.
  - `./dev.sh`: tarayıcıda entegrasyon testi için backend + Vite çalıştırın.
  - `ato dev compile`: extension yapılarını derleyin (varsayılan hedef `all`).
  - `ato dev install cursor|vscode`: en son derlenmiş extension `.vsix` yükleyin.
  - `ato dev ui`: paylaşılan component kütüphanesi bileşenlerini gösteren bir web sayfası açın.

  ## İlgili Dosyalar

  ### Ana Extension Webview Uygulaması

  - Kök: `src/ui-server/src/`
  - Transport: `src/ui-server/src/api/`
  - Global state: `src/ui-server/src/store/`
  - Özellik hooks'ları: `src/ui-server/src/hooks/`
  - Özellik bileşenleri: `src/ui-server/src/components/`
  - Paylaşılan bileşenler: `src/ui-server/src/components/shared/`
  - Yardımcı fonksiyonlar: `src/ui-server/src/utils/`
  - Stiller/tokenlar: `src/ui-server/src/styles/`
  - Sözleşmeler: `src/ui-server/src/types/`
  - Testler: `src/ui-server/src/__tests__/`

  ### Extension Host Köprüsü

  - Kök: `src/vscode-atopile/src/`
  - IDE komutları/webview kablolama/host entegrasyonu için kullanın.
  - Çekirdek React UI mantığını bu katman dışında tutun.

  ### Özelleştirilmiş Bağımsız Uygulama Örneği

  - Kök: `src/atopile/visualizer/web/src/`
  - Compute/canvas/worker desenleri için referans olarak kullanın.

  ### Layout Editörü (Özelleştirilmiş)

  - Kök: `src/atopile/layout_server/frontend/src/`
  - Özelleştirilmiş layout editörü frontend'i; webview'ler için varsayılan mimari değildir.

  ## Bağımlılar (Çağrı Siteleri)

  - Extension webview'leri `src/ui-server`'dan oluşturulur ve `src/vscode-atopile` tarafından yüklenir.
  - `ato dev compile` ve `ato dev install` yaygın extension geliştirici döngüsüdür.
  - `src/atopile/visualizer/web` ayrı bir uygulamadır ve referans desenidir, varsayılan hedef değildir.

  ## Nasıl Çalışılır / Geliştirme / Test Edilir

  ### Tipik Değişim Yolları

  Değişiklikleri kapsam içinde ve tahmin edilebilir tutmak için bu desenleri kullanın.

  1. Yalnızca UI değişikliği (sözleşme değişiklikleri yok)

  - `components/`, `styles/`, küçük `hooks/` kullanımına dokunun
  - taşıma/store karmaşıklığından kaçının (gerekli olmadığı sürece)
  - tarayıcı-ilk akış + odaklanmış bileşen testleri aracılığıyla doğrulayın

  2. UI + state değişikliği

  - store alanları/aksiyonları/seçicileri ekleyin/ayarlayın
  - yük şekli değişmediği sürece taşımayı olduğu gibi tutun
  - store geçiş testleri ve UI etkileşim testleri ekleyin

  3. UI + sözleşme/taşıma değişikliği

  - önce Pydantic sözleşmelerini güncelleyin
  - TS türlerini yeniden oluşturun
  - `api/` eşlemesi + store state geçişleri + UI'ı güncelleyin
  - taşıma ve state testleri ekleyin, sonra tarayıcı akışı doğrulamasını yapın

  ### Mimari Standart

  Varsayılan mimari:

  - Backend: FastAPI (domain, API'lar, etkinlikler)
  - Frontend: React + Vite
  - Gerçek zamanlı: WebSocket-ilk taşıma

  Katman sınırları:

  - `api/`: HTTP + WS taşıması ve yük eşlemesi
  - `store/`: yazılı uygulama state'i, aksiyonları, seçicileri
  - `components/`: render/oluşturma
  - `utils/lib`: saf dönüşümler/mantık

  ### Sözleşme Standartı (Gerekli)

  Schema-ilk sözleşme iş akışı:

  1. Backend Pydantic modelini tanımlayın/değiştirin.
  2. Frontend TS schema/türlerini yeniden oluşturun.
  3. Oluşturulan türleri kullanan frontend taşıması/store/bileşenleri güncelleyin.
  4. Değişen sözleşme davranışı için testleri ekleyin/güncelleyin.

  Yapmayın:

  - oluşturulan türler varsa yinelenen el yazısı arayüzleri korumayın
  - yazılı sözleşmeler varken string tabanlı protokol yükleri kullanmayın

  ### Tek Akış Kuralı (Gerekli)

  Özellik başına bir kanonik kullanıcı akışı uygulayın.

  Fallback akış dalları eklemeyin.
  Bağımlılık/state kullanılamıyorsa, aynı akış bağlamında açık bir dur-state hatası gösterin.

  ### WebSocket Standartı

  WebSocket'i şunlar için kullanın:

  - etkileşimli state senkronizasyonu
  - aksiyon dispatch'i + aksiyon sonuçları
  - uzun süreli iş akışı güncellemeleri

  HTTP'yi şunlar için kullanın:

  - bootstrap okumaları
  - doğrudan idempotent okumaları
  - dosya/yapı alma

  Gerekli WS istemci davranışı:

  - sınırlandırılmış backoff ile yeniden bağlanın
  - store'da açık bağlı/bağlı olmayan state
  - bekleme isteği timeout/iptal yönetimi
  - yeniden bağlandıktan sonra resync

  Önerilen WS istemci davranışı:

  - WS bağlantısını `api/` modülünde merkezi hale getirin
  - ileti dekodlamayı/tür korumasını bileşenlerin dışında tutun
  - yeniden bağlanma ve ayrıştırma başarısızlıkları için minimal telemetri/günlüğe kaydet
  - yeniden bağlanırken eski async sonuçlara karşı korunun

  Örnek zarf şekli:

  ```ts
  type WsMessage =
    | { type: "state"; data: AppState }
    | { type: "event"; event: EventType; data: EventPayload }
    | {
        type: "action_result";
        action: string;
        requestId?: string;
        result: { success: boolean; error?: string };
      };
  ```

  ### Yeniden Kullanım Kuralları

  Yeni ilkel öğeler oluşturmadan önce:

  1. `src/ui-server/src/components/shared/` kontrol edin.
  2. `src/ui-server/src/utils/` içinde mevcut mantığı kontrol edin.
  3. Compute/canvas davranışı ekliyorsanız `src/atopile/visualizer/web/src/lib/` ve `src/atopile/visualizer/web/src/workers/` kontrol edin.
  4. Davranış IDE-host'a özgü ise, onu `src/vscode-atopile/src/` içinde tutun.

  Paylaşılan'a taşıyın:

  - 2+ özellik yüzeyi tarafından kullanılıyorsa, veya
  - tekrarlanan etkileşim semantiği çoğaltılırsa driftle olur.

  ## Paylaşılan Varlıklar Referansı

  ### Paylaşılan Bileşenler (ui-server)

  Eşdeğerler oluşturmadan önce `src/ui-server/src/components/shared/` içindeki bileşenleri yeniden kullanmayı tercih edin.
  Yeni bir bileşen gerekiyorsa, onu `src/ui-server/src/components/shared/` içinde oluşturun ve özellikte yeniden kullanın.
  Mümkünse, karmaşık bileşenleri mevcut paylaşılan bileşenlerden oluşturun.

  ### Paylaşılan Yardımcı Fonksiyonlar (ui-server)

  Bu yardımcıları genişletmeyi tercih edin:

  - `src/ui-server/src/utils/codeHighlight.tsx`
  - `src/ui-server/src/utils/nameValidation.ts`
  - `src/ui-server/src/utils/packageUtils.ts`
  - `src/ui-server/src/utils/searchUtils.ts`

  ### Özelleştirilmiş Yardımcı Referansı (visualizer)

  Yararlı bağımsız referans:

  - `src/atopile/visualizer/web/src/lib/exportUtils.ts`

  ## En İyi Uygulamalar

  ### Frontend Kod Kalitesi

  - Katı TS ve yazılı state geçişlerini koruyun.
  - Side effect'leri yaprak bileşenlerde değil taşıma/hooks'larda yalıtın.
  - Seçiciler kullanın, geniş tam-store abonelikleri değil.
  - Açık yükleme/hata/boş state'leri uygulayın.

  Yazılı API sınırı örneği:

  ```ts
  export async function fetchBuilds(
    projectRoot: string,
  ): Promise<BuildSummary[]> {
    const res = await fetch(
      `/api/builds?project_root=${encodeURIComponent(projectRoot)}`,
    );
    if (!res.ok) throw new APIError(res.status, "Failed to fetch builds");
    const data = (await res.json()) as { builds: BuildSummary[] };
    return data.builds;
  }
  ```

  ### Tasarım Sistemi

  Tüm yüzeylerde uygulayın:

  - host-native tipografi/renkler ilk olarak
  - marka aksanları yalnızca semantik olarak yararlı yerlerde
  - eksiksiz etkileşim state'leri (`default/hover/focus-visible/active/disabled/loading`)
  - tutarlı boşluk/satır yüksekliği/tipografi ritimleri
  - tokenleştirilmiş renkler/boşluk/yarıçap/z-index, ad-hoc semantik sabit kodlama yok

  Tokenleştirilmiş kontrol örneği:

  ```css
  .btn-default {
    background: var(--accent);
    color: var(--text-on-accent);
    border: 1px solid var(--accent);
    border-radius: var(--radius-md);
    padding: 0 var(--spacing-md);
  }
  .btn-default:hover:not(:disabled) {
    background: var(--accent-hover);
    border-color: var(--accent-hover);
  }
  .btn-default:focus-visible {
    outline: 2px solid var(--info);
    outline-offset: 1px;
  }
  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  ```

  ### Erişilebilirlik Temeli

  Gerekli:

  - klavye işlemi yapılabilir kontroller
  - deterministik odak sırası
  - ARIA yalnızca yerel semantik yetersiz olduğunda
  - görünür odak state'leri
  - açık/koyu modlarda okunabilir kontrast

  ### Performans Temeli

  Gerekli:

  - sıcak yollarda pahalı türetilmiş veri/callback'leri eşleştirin
  - drag/resize animasyon yolları için `requestAnimationFrame` kullanın
  - ağır layout/geometry/compute işini gerektiğinde worker'a taşıyın
  - aktif olay akışlarında WS güncelleme yönetimini verimli tutun

  Operasyonel kontroller:

  - yüksek frekanslı bileşenlerde tam-store abonelikleri önleyin
  - render döngülerinde kullanılan türetilmiş koleksiyonları eşleştirin
  - drag/scroll/güncelleme akışları sırasında kaçınılabilir setState zinciri olmadığını doğrulayın
  - uzun süreli dönüşümleri bileşen render gövdelerinin dışında tutun

  ## Uygulama Oyun Planları

  ### Oyun Planı A: Yeni Extension Webview Paneli (`ui-server`)

  1. Sözleşmeleri ekleyin/onaylayın

  - backend şekli değişirse: Pydantic'i güncelleyin + türleri yeniden oluşturun

  2. Taşıma eşlemesi ekleyin

  - `src/ui-server/src/api/` içinde veri/aksiyon yöntemleri uygulayın

  3. Store state/aksiyonları ekleyin

  - store'da minimal yeni alanlar/aksiyonlar ekleyin
  - bileşen kullanımı için seçicileri gösterin

  4. UI'ı oluşturun

  - `components/` içinde paneli oluşturun
  - mümkün olduğunda `components/shared/` ilkelleri yeniden kullanın

  5. Doğrulayın

  - testleri çalıştırın
  - tarayıcı-ilk akışını çalıştırın
  - ekran görüntüsü alın + ui günlüklerini inceleyin

  ### Oyun Planı B: Compute/Canvas-yoğun Özellik

  1. Çekirdek dönüşümleri `utils/` veya özelleştirilmiş `lib/` modülüne koyun.
  2. Ana-thread gecikmesi görünür olursa worker offload ekleyin.
  3. Render bileşenlerini ince ve eşleştirilmiş tutun.
  4. Etkileşim yumuşaklığını aktif güncellemeler altında doğrulayın.

  ### Oyun Planı C: Uzun Süreli İş Akışı UI'ı

  Bir kanonik akış kullanın:

  - tetikle
  - sürüyor
  - tamamlama veya aynı bağlamda hata

  Gerekli:

  - sürüyor state'i sırasında çakışan kontrolleri devre dışı bırakın
  - yazılı WS etkinlikleri aracılığıyla ilerleme güncellemeleri yayın
  - store'da deterministik terminal state sağlayın

  ## Ayrıntılı Test Notları

  ### Katman Başına Test Kapsamı

  1. Unit testler

  - saf utils/lib dönüşümleri

  2. Store testleri

  - aksiyon geçişleri ve türetilmiş seçici doğruluğu

  3. Taşıma testleri

  - API/WS eşlemesi, hata yönetimi, istek korelasyon davranışı

  4. UI testleri

  - kullanıcı etkileşimi + state rendering davranışı

  5. Tarayıcı otomasyon kontrolleri

  - anahtar akış etkileşimi + ekran görüntüsü + ui günlükleri

  ### WebSocket Özellik Test Senaryoları

  En azından test edin:

  - ilk bağlanma yolu
  - bağlantı kesilmiş state güncellemesi
  - yeniden bağlanma ve resync yolu
  - bekleme isteği timeout/iptal yolu

  Önerilen:

  - geç veya yinelenen olay toleransı
  - UI crash olmadan kötü biçimlendirilmiş ileti yönetimi

  ## Test Standartı

  Özellik başına minimum:

  1. Store/aksiyon testi
  2. API/taşıma testi
  3. UI etkileşim testi
  4. Hata/yükleme/boş-state testi

  Örnek matris (build sırası):

  - store: sıraya al + geçişleri tamamla
  - API: build start hatası -> yazılı API hatası
  - UI: iptal tıklaması iptal aksiyonunu dispatch eder
  - state: bağlantısı kesilmiş WS state'i görünür

  ### Tarayıcı-İlk Dev Viewer Akışı (Gerekli)

  Aracılar tarayıcı akışında önce kendi kendini test etmelidir:

  ```bash
  cd src/ui-server
  ./dev.sh
  ```

  Sonra:

  1. Etkileşim akışını tarayıcı webview sayfasında doğrulayın.
  2. Anahtar-state ekran görüntüleri alın.
  3. UI günlüklerini inceleyin.
  4. Sorunları düzeltin.
  5. Tarayıcı akışı temiz olduktan sonra kullanıcıdan extension host'ta test etmesini isteyin.

  İlgili sayfalar:

  - `http://127.0.0.1:5173/`
  - `http://127.0.0.1:5173/log-viewer.html`
  - `http://127.0.0.1:5173/migrate.html`
  - `http://127.0.0.1:5173/test-explorer.html`

  ### Puppeteer + Vite Ekran Görüntüsü API'ları

  Bu yerleşik dev uç noktalarını kullanın:

  ```bash
  curl -sS -X POST http://127.0.0.1:5173/api/screenshot \
    -H 'Content-Type: application/json' \
    -d '{"path":"/","name":"default","waitMs":1200}'
  ```

  ```bash
  curl -sS -X POST http://127.0.0.1:5173/api/screenshot \
    -H 'Content-Type: application/json' \
    -d '{"path":"/","name":"projects-expanded","uiActions":[{"type":"openSection","sectionId":"projects"}],"uiActionWaitMs":600}'
  ```

  ```bash
  curl -sS http://127.0.0.1:5173/api/ui-logs
  ```

  Otomasyon korkuluğu:

  - stabil seçiciler (`data-testid` veya semantik roller)
  - diffler için sabit viewport
  - keyfi uyku yerine hazırlık tabanlı bekleme tercih edilir
  - runtime hataları izin verilen listede olmadıkça hatalar olarak kabul edilir

  ## Yapılma Tanımı

  Bir özellik ancak tüm bunlar doğru olduğunda yapılmış olur:

  - [ ] bir kanonik akış uygulanır (fallback dalı yok)
  - [ ] sözleşme değişiklikleri Pydantic'te modellenir + oluşturulan TS tüketilir
  - [ ] WS davranışı doğrulanır (bağlanma/yeniden bağlanma/resync)
  - [ ] testler eklenir/güncellenir (store + taşıma + UI + state yönetimi)
  - [ ] tarayıcı-ilk dev viewer kontrolleri tamamlanır
  - [ ] tarayıcı doğrulaması yapıldıktan sonra kullanıcıdan extension host'ta test etmesi istenir
  - [ ] derle/test komutları dokunulan uygulama için geçer
  - [ ] bileşen/util yerleşimi repo yapısını ve yeniden kullanım kurallarını izler

  ## PR Kontrol Listesi (Kopyala/Yapıştır)

  ```md
  - [ ] Tek kanonik akış korunur (fallback yolu eklenmemiş)
  - [ ] API/WS değişiklikleri için Pydantic modelleri güncellenmiş
  - [ ] Oluşturulan TS schema/türleri yeniden oluşturulmuş ve işlenmiş
  - [ ] WS yeniden bağlanma/resync davranışı doğrulanmış
  - [ ] Tarayıcı dev viewer akışı doğrulanmış (`./dev.sh`)
  - [ ] Ekran görüntüleri + UI günlükleri gözden geçirilmiş (onaylanmamış runtime hatası yok)
  - [ ] Eklenen/güncellenen: store testi, taşıma testi, UI etkileşim testi
  - [ ] Tarayıcı kontrolleri yapıldıktan sonra kullanıcıdan extension host'ta test etmesi istenir
  ```
---

# Frontend Skill

Use this skill when building or modifying frontend features in atopile.
Default target is extension webviews (`ui-server` + `vscode-atopile`).

## Quick Start

Dependency install:

```bash
cd src/ui-server
bun install
```

Frontend-only loop (no backend integration):

```bash
cd src/ui-server
bun run dev
bun run test
bun run build
```

Webview integration loop (backend + Vite):

```bash
cd src/ui-server
./dev.sh
```

Extension package/install loop:

```bash
ato dev compile && ato dev install cursor
# or
ato dev compile && ato dev install vscode
```

Command reference:

- `bun install`: install/sync JS dependencies.
- `bun run dev`: start local Vite dev server (frontend-only iteration).
- `bun run test`: run local Vitest suite once.
- `bun run build`: run local `tsc && vite build`.
- `./dev.sh`: run backend + Vite for integration testing in browser.
- `ato dev compile`: build extension artifacts (default target `all`).
- `ato dev install cursor|vscode`: install latest built extension `.vsix`.
- `ato dev ui`: open a webpage for the user showing the shared component library components.

## Relevant Files

### Main Extension Webview App

- Root: `src/ui-server/src/`
- Transport: `src/ui-server/src/api/`
- Global state: `src/ui-server/src/store/`
- Feature hooks: `src/ui-server/src/hooks/`
- Feature components: `src/ui-server/src/components/`
- Shared components: `src/ui-server/src/components/shared/`
- Utilities: `src/ui-server/src/utils/`
- Styles/tokens: `src/ui-server/src/styles/`
- Contracts: `src/ui-server/src/types/`
- Tests: `src/ui-server/src/__tests__/`

### Extension Host Bridge

- Root: `src/vscode-atopile/src/`
- Use for IDE commands/webview wiring/host integration.
- Keep core React UI logic out of this layer.

### Specialized Standalone App Example

- Root: `src/atopile/visualizer/web/src/`
- Use as reference for compute/canvas/worker patterns.

### Layout Editor (Specialized)

- Root: `src/atopile/layout_server/frontend/src/`
- Specialized layout editor frontend; not default architecture for webviews.

## Dependants (Call Sites)

- Extension webviews are built from `src/ui-server` and loaded by `src/vscode-atopile`.
- `ato dev compile` and `ato dev install` are the common extension developer loop.
- `src/atopile/visualizer/web` is a separate app and reference pattern, not default target.

## How to Work With / Develop / Test

### Typical Change Paths

Use these patterns to keep changes scoped and predictable.

1. UI-only change (no contract changes)

- touch `components/`, `styles/`, small `hooks/` usage
- avoid transport/store churn unless required
- validate through browser-first flow + focused component tests

2. UI + state change

- add/adjust store fields/actions/selectors
- keep transport untouched if payload shape is unchanged
- add store transition tests and UI interaction tests

3. UI + contract/transport change

- update Pydantic contracts first
- regenerate TS types
- update `api/` mapping + store state transitions + UI
- add transport and state tests, then browser flow validation

### Architecture Standard

Default architecture:

- Backend: FastAPI (domain, APIs, events)
- Frontend: React + Vite
- Realtime: WebSocket-first transport

Layer boundaries:

- `api/`: HTTP + WS transport and payload mapping
- `store/`: typed app state, actions, selectors
- `components/`: rendering/composition
- `utils/lib`: pure transforms/logic

### Contract Standard (Required)

Schema-first contract workflow:

1. Define/modify backend Pydantic model.
2. Regenerate frontend TS schema/types.
3. Update frontend transport/store/components using generated types.
4. Add/update tests for changed contract behavior.

Do not:

- maintain duplicate handwritten interfaces if generated types exist
- use stringly-typed protocol payloads when typed contracts exist

### One-Flow Rule (Required)

Implement one canonical user flow per feature.

Do not introduce fallback flow branches.
If dependency/state is unavailable, surface a clear stop-state error in the same flow context.

### WebSocket Standard

Use WebSocket for:

- interactive state sync
- action dispatch + action results
- long-running workflow updates

Use HTTP for:

- bootstrap reads
- direct idempotent reads
- file/artifact retrieval

Required WS client behavior:

- reconnect with bounded backoff
- explicit connected/disconnected state in store
- pending request timeout/cancel handling
- post-reconnect resync

Recommended WS client behavior:

- centralize WS connection in `api/` module
- keep message decoding/type-guarding out of components
- record minimal telemetry/logging for reconnect and parse failures
- guard against stale async results when reconnecting

Example envelope shape:

```ts
type WsMessage =
  | { type: "state"; data: AppState }
  | { type: "event"; event: EventType; data: EventPayload }
  | {
      type: "action_result";
      action: string;
      requestId?: string;
      result: { success: boolean; error?: string };
    };
```

### Reuse Rules

Before creating new primitives:

1. Check `src/ui-server/src/components/shared/`.
2. Check `src/ui-server/src/utils/` for existing logic.
3. If adding compute/canvas behavior, check `src/atopile/visualizer/web/src/lib/` and `src/atopile/visualizer/web/src/workers/`.
4. If behavior is IDE-host specific, keep it in `src/vscode-atopile/src/`.

Promote to shared when:

- used by 2+ feature surfaces, or
- repeated interaction semantics would drift if duplicated.

## Shared Assets Reference

### Shared Components (ui-server)

Prefer reusing the components in `src/ui-server/src/components/shared/` before creating equivalents.
If a new component is needed, create it in `src/ui-server/src/components/shared/` and reuse it in the feature.
If possible, compose complex components from existing shared components.

### Shared Utilities (ui-server)

Prefer extending these utilities:

- `src/ui-server/src/utils/codeHighlight.tsx`
- `src/ui-server/src/utils/nameValidation.ts`
- `src/ui-server/src/utils/packageUtils.ts`
- `src/ui-server/src/utils/searchUtils.ts`

### Specialized Utility Reference (visualizer)

Useful standalone reference:

- `src/atopile/visualizer/web/src/lib/exportUtils.ts`

## Best Practices

### Frontend Code Quality

- Keep strict TS and typed state transitions.
- Isolate side effects in transport/hooks, not leaf components.
- Use selectors, not broad full-store subscriptions.
- Implement explicit loading/error/empty states.

Example typed API boundary:

```ts
export async function fetchBuilds(
  projectRoot: string,
): Promise<BuildSummary[]> {
  const res = await fetch(
    `/api/builds?project_root=${encodeURIComponent(projectRoot)}`,
  );
  if (!res.ok) throw new APIError(res.status, "Failed to fetch builds");
  const data = (await res.json()) as { builds: BuildSummary[] };
  return data.builds;
}
```

### Design System

Apply across all surfaces:

- host-native typography/colors first
- brand accents only where semantically useful
- complete interaction states (`default/hover/focus-visible/active/disabled/loading`)
- consistent spacing/row-height/typography rhythm
- tokenized colors/spacing/radius/z-index, no ad-hoc semantic hardcoding

Example tokenized control:

```css
.btn-default {
  background: var(--accent);
  color: var(--text-on-accent);
  border: 1px solid var(--accent);
  border-radius: var(--radius-md);
  padding: 0 var(--spacing-md);
}
.btn-default:hover:not(:disabled) {
  background: var(--accent-hover);
  border-color: var(--accent-hover);
}
.btn-default:focus-visible {
  outline: 2px solid var(--info);
  outline-offset: 1px;
}
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### Accessibility Baseline

Required:

- keyboard-operable controls
- deterministic focus order
- ARIA only where native semantics are insufficient
- visible focus states
- readable contrast in light/dark modes

### Performance Baseline

Required:

- memoize expensive derived data/callbacks in hot paths
- use `requestAnimationFrame` for drag/resize animation paths
- move heavy layout/geometry/compute work to workers where needed
- keep WS update handling efficient under active event streams

Operational checks:

- avoid full-store subscriptions in high-frequency components
- memoize derived collections used in render loops
- verify no avoidable setState chains during drag/scroll/update streams
- keep long-running transformations out of component render bodies

## Implementation Playbooks

### Playbook A: New Extension Webview Panel (`ui-server`)

1. Add/confirm contracts

- if backend shape changes: update Pydantic + regenerate types

2. Add transport mapping

- implement data/action methods in `src/ui-server/src/api/`

3. Add store state/actions

- add minimal new fields/actions in `store/`
- expose selectors for component use

4. Compose UI

- build panel in `components/`
- reuse `components/shared/` primitives where possible

5. Validate

- run tests
- run browser-first flow
- capture screenshot + inspect ui logs

### Playbook B: Compute/Canvas-heavy Feature

1. Put core transforms into `utils/` or specialized `lib/` module.
2. Add worker offload if main-thread latency becomes visible.
3. Keep render components thin and memoized.
4. Validate interaction smoothness under active updates.

### Playbook C: Long-running Workflow UI

Use one canonical flow:

- trigger
- in-progress
- completion or error in same context

Required:

- disable conflicting controls during in-progress state
- emit progress updates via typed WS events
- provide deterministic terminal state in store

## Detailed Testing Notes

### Testing Scope by Layer

1. Unit tests

- pure utils/lib transforms

2. Store tests

- action transitions and derived selector correctness

3. Transport tests

- API/WS mapping, error handling, request correlation behavior

4. UI tests

- user interaction + state rendering behavior

5. Browser automation checks

- key flow interaction + screenshot + ui logs

### WebSocket Feature Test Cases

At minimum test:

- initial connect path
- disconnect state update
- reconnect and resync path
- pending request timeout/cancel path

Recommended:

- late or duplicate event tolerance
- malformed message handling without UI crash

## Testing Standard

Minimum per feature:

1. Store/action test
2. API/transport test
3. UI interaction test
4. Error/loading/empty-state test

Example matrix (build queue):

- store: enqueue + complete transitions
- API: build start error -> typed API error
- UI: cancel click dispatches cancel action
- state: disconnected WS state is visible

### Browser-First Dev Viewer Flow (Required)

Agents should self-test in browser flow first:

```bash
cd src/ui-server
./dev.sh
```

Then:

1. Validate interaction flow in browser webview page.
2. Capture key-state screenshots.
3. Inspect UI logs.
4. Fix issues.
5. Ask user to test in extension host only after browser flow is clean.

Relevant pages:

- `http://127.0.0.1:5173/`
- `http://127.0.0.1:5173/log-viewer.html`
- `http://127.0.0.1:5173/migrate.html`
- `http://127.0.0.1:5173/test-explorer.html`

### Puppeteer + Vite Screenshot APIs

Use these built-in dev endpoints:

```bash
curl -sS -X POST http://127.0.0.1:5173/api/screenshot \
  -H 'Content-Type: application/json' \
  -d '{"path":"/","name":"default","waitMs":1200}'
```

```bash
curl -sS -X POST http://127.0.0.1:5173/api/screenshot \
  -H 'Content-Type: application/json' \
  -d '{"path":"/","name":"projects-expanded","uiActions":[{"type":"openSection","sectionId":"projects"}],"uiActionWaitMs":600}'
```

```bash
curl -sS http://127.0.0.1:5173/api/ui-logs
```

Automation guardrails:

- stable selectors (`data-testid` or semantic roles)
- fixed viewport for diffs
- readiness-based waits preferred over arbitrary sleep
- runtime errors treated as failures unless allowlisted

## Definition of Done

A feature is done only when all are true:

- [ ] one canonical flow implemented (no fallback branch)
- [ ] contract changes modeled in Pydantic + regenerated TS consumed
- [ ] WS behavior validated (connect/reconnect/resync)
- [ ] tests added/updated (store + transport + UI + state handling)
- [ ] browser-first dev viewer checks complete
- [ ] user asked to test extension host only after browser validation
- [ ] build/test commands pass for touched app
- [ ] component/util placement follows repo structure and reuse rules

## PR Checklist (Copy/Paste)

```md
- [ ] Single canonical flow preserved (no fallback path added)
- [ ] Pydantic models updated for API/WS changes
- [ ] Generated TS schema/types regenerated and committed
- [ ] WS reconnect/resync behavior verified
- [ ] Browser dev viewer flow validated (`./dev.sh`)
- [ ] Screenshots + UI logs reviewed (no unapproved runtime errors)
- [ ] Added/updated: store test, transport test, UI interaction test
- [ ] Asked user to test in extension host only after browser checks passed
```
