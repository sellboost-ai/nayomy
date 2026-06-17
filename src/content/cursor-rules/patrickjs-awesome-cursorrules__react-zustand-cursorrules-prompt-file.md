---
name: "react-zustand-cursorrules-prompt-file"
clean_name: "React Zustand"
description: "React and TypeScript state management guidance for Zustand stores, selectors, middleware, persistence, and testing."
description_tr: "Zustand store'ları, selector'lar, middleware, persistence ve testing için React ve TypeScript state management rehberi."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/react-zustand-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react-zustand-cursorrules-prompt-file.mdc"
body_length: 5441
file_extension: ".mdc"
body_tr: |-
  # React + Zustand Rehberi

  ## Durum Sahipliği
  - Geçici UI durumunu `useState` veya `useReducer` ile en yakın componente bırakın.
  - URL durumunu paylaşılabilir filtreler, sayfalandırma, sekmeler ve arama parametreleri için kullanın.
  - Zustand'ı yalnızca ilgisiz componentler arasında gerçekten paylaşılan client durumu için kullanın.
  - Server durumu için TanStack Query, SWR, RTK Query veya mevcut projenin data katmanını kullanın.
  - Getirilen server verisini bir Zustand store'a kopyalamayın; ancak belgelenmiş bir çevrimdışı veya draft düzenleme gereksinimi varsa istisna yapın.

  ## Store Tasarımı
  - Her store'u durum artı adlandırılmış actionlar olarak modelleyin; component kodunun kötüye kullanabileceği adsız setter'ları açığa çıkarmayın.
  - Store'ları küçük ve alan odaklı tutun: auth oturumu görünüm durumu, komut paleti durumu, sepet draft durumu, editor durumu vb.
  - Büyük store'ları yazılı slice'lara bölün, ardından middleware'i yalnızca composed store sınırında uygulayın.
  - Türetilen değerleri selector'lar veya küçük saf yardımcılar olarak tutun; durumda cache'lenmeleri gerekmediği sürece.
  - Varsayılan olarak serializable veri depolayın; DOM node'ları, promise'ler, socket'ler ve timer'ları store durumunun dışında tutun.

  ```ts
  import { create } from 'zustand'

  interface SidebarState {
    isOpen: boolean
    activePanelId: string | null
  }

  interface SidebarActions {
    openPanel: (panelId: string) => void
    close: () => void
    toggle: () => void
  }

  type SidebarStore = SidebarState & SidebarActions

  export const useSidebarStore = create<SidebarStore>()((set) => ({
    isOpen: false,
    activePanelId: null,
    openPanel: (panelId) => set({ isOpen: true, activePanelId: panelId }),
    close: () => set({ isOpen: false, activePanelId: null }),
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  }))
  ```

  ## Component Kullanımı
  - En küçük olası slice'a abone olun: `useStore((state) => state.value)`.
  - Component'te selector olmadan bir store hook çağırmayın; component gerçekten her alana ihtiyaç duymadığı sürece.
  - Action'ları ayrı olarak seçin veya bunları gruplandırırken sığ selector kullanın.
  - Birden fazla değer döndüren object veya tuple selector'lar için `useShallow` kullanın.
  - Selector'ları saf ve ucuz tutun; pahalı türetimler gerekirse bunları memoize edilmiş yardımcılara taşıyın.

  ```tsx
  import { useShallow } from 'zustand/react/shallow'
  import { useSidebarStore } from '@/stores/sidebar-store'

  export function SidebarToggle() {
    const { isOpen, toggle } = useSidebarStore(
      useShallow((state) => ({
        isOpen: state.isOpen,
        toggle: state.toggle,
      })),
    )

    return (
      <button type="button" aria-expanded={isOpen} onClick={toggle}>
        Toggle sidebar
      </button>
    )
  }
  ```

  ## TypeScript
  - Paylaşılan store'lar için açık durum ve action arayüzlerini tanımlayın.
  - `any` kullanmayın; `unknown` artı narrowing kullanın dış veriler için.
  - Action payload'larını ve dönüş değerlerini, async action'ları da içerek yazın.
  - Birkaç gevşek ilişkili boolean yerine karmaşık lokal durum için discriminated union'lar tercih edin.
  - Test'ler, utility'ler veya vanilla store factory'leri ihtiyaç duyduğunda store durum türlerini dışa aktarın.

  ## Güncellemeler ve Middleware
  - Sonraki değer mevcut duruma bağlı olduğunda fonksiyonel `set((state) => nextState)` kullanın.
  - İç içe durumu değişmez şekilde işleyin; `immer` middleware'i yalnızca iç içe güncellemeleri önemli ölçüde basitleştirdiğinde kurun ve kullanın.
  - `persist`'i yalnızca yeniden yüklemelerde hayatta kalması gereken durum için kullanın.
  - Herhangi bir şeyi basit tercihlerin ötesinde tutarken `partialize`, `version` ve `migrate` kullanın.
  - Gizli dizileri, erişim token'larını, yenileme token'larını, ham kişisel verileri veya uzun ömürlü yetkilendirme durumunu browser depolamasında saklamayın.
  - Karmaşık akışlar için geliştirmede `devtools` kullanın ve önemli action'lara açık isimler verin.
  - React olmayan abonelikler için `subscribeWithSelector` kullanın; bu subscriptionlar ince taneli güncellemeler gerektirdiğinde.

  ## Async Action'lar
  - Async store action'ları client'a özel workflow'ları, optimistic draft'ları veya lokal cihaz API'lerini koordine edebilir.
  - Durum açıkça client'a ait olmadığı sürece HTTP getirmeyi projenin server-state katmanında tutun.
  - Async client workflow'larını `idle`, `pending`, `success` ve `error` gibi açık durum'larla temsil edin.
  - Yeniden denerken veya bir workflow'u kapatırken hata durumunu kasıtlı olarak sıfırlayın.

  ## SSR ve React Server Components
  - React Server Components'ten browser'a özel store'ları okumayın veya değiştirmeyin.
  - SSR framework'lerinde, durum sunucuda başlatılması gerektiğinde istek başına vanilla store'lar oluşturun.
  - Persisted store'ları, storage'a dayalı değerleri işlemeden önce hydration uyuşmazlıklarına karşı koruyun.
  - Store modüllerini middleware yapılandırması dışında doğrudan `window`, `document` ve storage erişiminden uzak tutun.

  ## Test Etme
  - Mümkün olduğunda React'i render etmeden store action'larını doğrudan test edin.
  - Test'ler arasında store'ları ilk durumları ile sıfırlayın.
  - Selector'ları ve action'ları component davranışından ayrı olarak kontrol edin.
  - Test'ler için server-state kütüphanelerini mock edin; getirilen verileri Zustand aracılığıyla yönlendirmeyin.

  ## Anti-Paternler
  - Tüm uygulama için tek bir global store oluşturmayın.
  - Birden fazla uzak component aynı draft'ı düzenlemediği sürece form input durumunu Zustand'a koymayın.
  - Immer middleware olmadan iç içe objeleri doğrudan değiştirmeyin.
  - Zustand'ı event bus olarak kullanmayın; explicit callback'leri, service'leri veya kapsamlı store'u tercih edin.
  - Proje zaten bu pattern'ı kullanmıyorsa Redux tarzı reducer'lar, action constant'ları veya dispatch wrapper'ları tanıtmayın.
---

You are an expert in React, TypeScript, and Zustand state management.

# React + Zustand Guidelines

## State Ownership
- Keep ephemeral UI state in the nearest component with `useState` or `useReducer`.
- Use URL state for shareable filters, pagination, tabs, and search params.
- Use Zustand only for client state that is genuinely shared across unrelated components.
- Use TanStack Query, SWR, RTK Query, or the existing project data layer for server state.
- Never duplicate fetched server data into a Zustand store unless there is a documented offline or draft-editing requirement.

## Store Design
- Model each store as state plus named actions; avoid exposing anonymous setters for component code to misuse.
- Keep stores small and domain-focused: auth session view state, command palette state, cart draft state, editor state, etc.
- Split large stores into typed slices, then apply middleware only at the composed store boundary.
- Keep derived values as selectors or small pure helpers unless they must be cached in state.
- Store serializable data by default; keep DOM nodes, promises, sockets, and timers outside store state.

```ts
import { create } from 'zustand'

interface SidebarState {
  isOpen: boolean
  activePanelId: string | null
}

interface SidebarActions {
  openPanel: (panelId: string) => void
  close: () => void
  toggle: () => void
}

type SidebarStore = SidebarState & SidebarActions

export const useSidebarStore = create<SidebarStore>()((set) => ({
  isOpen: false,
  activePanelId: null,
  openPanel: (panelId) => set({ isOpen: true, activePanelId: panelId }),
  close: () => set({ isOpen: false, activePanelId: null }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))
```

## Component Usage
- Subscribe to the smallest possible slice: `useStore((state) => state.value)`.
- Do not call a store hook without a selector in components unless the component truly needs every field.
- Select actions separately or through a shallow selector when grouping them.
- Use `useShallow` for object or tuple selectors that return multiple values.
- Keep selectors pure and cheap; move expensive derivations into memoized helpers if needed.

```tsx
import { useShallow } from 'zustand/react/shallow'
import { useSidebarStore } from '@/stores/sidebar-store'

export function SidebarToggle() {
  const { isOpen, toggle } = useSidebarStore(
    useShallow((state) => ({
      isOpen: state.isOpen,
      toggle: state.toggle,
    })),
  )

  return (
    <button type="button" aria-expanded={isOpen} onClick={toggle}>
      Toggle sidebar
    </button>
  )
}
```

## TypeScript
- Define explicit state and action interfaces for shared stores.
- Avoid `any`; use `unknown` plus narrowing for external data.
- Type action payloads and return values, including async actions.
- Prefer discriminated unions for complex local status instead of several loosely related booleans.
- Export store state types when tests, utilities, or vanilla store factories need them.

## Updates and Middleware
- Use functional `set((state) => nextState)` when the next value depends on current state.
- Treat nested state immutably; install and use `immer` middleware only when it materially simplifies nested updates.
- Use `persist` only for state that must survive reloads.
- Use `partialize`, `version`, and `migrate` when persisting anything beyond trivial preferences.
- Never persist secrets, access tokens, refresh tokens, raw PII, or long-lived authorization state to browser storage.
- Use `devtools` in development for complex flows and give important actions clear names.
- Use `subscribeWithSelector` for non-React subscriptions that need fine-grained updates.

## Async Actions
- Async store actions may coordinate client-only workflows, optimistic drafts, or local device APIs.
- Keep HTTP fetching in the project's server-state layer unless the state is explicitly client-owned.
- Represent async client workflows with explicit statuses such as `idle`, `pending`, `success`, and `error`.
- Reset error state deliberately when retrying or closing a workflow.

## SSR and React Server Components
- Do not read or mutate browser-only stores from React Server Components.
- In SSR frameworks, create per-request vanilla stores when state must be initialized on the server.
- Guard persisted stores against hydration mismatches before rendering storage-backed values.
- Keep store modules free of direct `window`, `document`, and storage access outside middleware configuration.

## Testing
- Test store actions directly without rendering React when possible.
- Reset stores between tests with their initial state.
- Assert selectors and actions separately from component behavior.
- Mock server-state libraries instead of routing fetched data through Zustand for tests.

## Anti-Patterns
- Do not create one global store for the entire application.
- Do not put form input state in Zustand unless multiple distant components edit the same draft.
- Do not mutate nested objects directly without Immer middleware.
- Do not use Zustand as an event bus; prefer explicit callbacks, services, or a scoped store.
- Do not introduce Redux-style reducers, action constants, or dispatch wrappers unless the project already uses that pattern.
