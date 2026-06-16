---
name: "react-zustand-cursorrules-prompt-file"
clean_name: "React Zustand"
description: "React and TypeScript state management guidance for Zustand stores, selectors, middleware, persistence, and testing."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/react-zustand-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react-zustand-cursorrules-prompt-file.mdc"
body_length: 5441
file_extension: ".mdc"
body_tr: |-
  # React + Zustand Kılavuzu

  Siz React, TypeScript ve Zustand state management konularında uzman birisiniz.

  ## State Sahibi Olma
  - Geçici UI state'ini `useState` veya `useReducer` ile en yakın component'te tutun.
  - URL state'ini paylaşılabilir filtreler, pagination, sekmeler ve arama parametreleri için kullanın.
  - Zustand'ı yalnızca ilişkisiz componentler arasında gerçekten paylaşılan client state için kullanın.
  - Server state için TanStack Query, SWR, RTK Query veya projenin mevcut data katmanını kullanın.
  - Alınan server verilerini bir Zustand store'a kopyalamayın, sürece belgelenmiş çevrimdışı veya draft-düzenleme gereksinimi yoksa.

  ## Store Tasarımı
  - Her store'u state ve adlandırılmış action'lar olarak modelleyin; component kodunun yanlış kullanabileceği anonim setter'ları açığa çıkarmayın.
  - Store'ları küçük ve domain odaklı tutun: auth session view state, command palette state, cart draft state, editor state, vb.
  - Büyük store'ları yazılı slice'lara bölün, ardından middleware'i yalnızca oluşturulan store sınırında uygulayın.
  - Türetilmiş değerleri selector'lar veya küçük saf helper'lar olarak tutun, bunlar state'te önbelleğe alınması gerekmedikçe.
  - Varsayılan olarak serileştirilebilir veri depolayın; DOM node'ları, promise'ler, socket'ler ve timer'ları store state'inin dışında tutun.

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
  - Component'te selector olmadan store hook'u çağırmayın, sürece component gerçekten her alan'a ihtiyaç duymazsa.
  - Action'ları ayrı seçin veya gruplandırırken shallow selector'ı kullanın.
  - Birden çok değer döndüren object veya tuple selector'ları için `useShallow` kullanın.
  - Selector'ları saf ve ucuz tutun; pahalı türetmeleri gerekirse memoized helper'lara taşıyın.

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
  - Paylaşılan store'lar için açık state ve action interface'leri tanımlayın.
  - `any` kullanmayın; harici veriler için `unknown` artı narrowing kullanın.
  - Action payload'ları ve dönüş değerlerini yazın, async action'ları da dahil edin.
  - Birçok gevşek ilişkili boolean yerine karmaşık local status için ayırt edici union'lar tercih edin.
  - Store state type'larını, testler, utility'ler veya vanilla store factory'leri ihtiyaç duyduğunda export edin.

  ## Güncellemeler ve Middleware
  - Sonraki değer mevcut state'e bağlı olduğunda fonksiyonel `set((state) => nextState)` kullanın.
  - İç içe state'i değişmez şekilde ele alın; `immer` middleware'ini yalnızca iç içe güncellemeleri önemli ölçüde basitleştirdiğinde yükleyin ve kullanın.
  - `persist`'i yalnızca reload'lardan sonra hayatta kalması gereken state için kullanın.
  - Önemsiz tercihler ötesinde herhangi bir şeyi persist ederken `partialize`, `version` ve `migrate` kullanın.
  - Secret'ları, access token'ları, refresh token'ları, ham PII'yi veya uzun ömürlü yetkilendirme state'ini browser storage'a persist etmeyin.
  - Karmaşık flow'lar için development'ta `devtools` kullanın ve önemli action'lara açık isimler verin.
  - React dışı subscription'lar için `subscribeWithSelector` kullanın ve ince taneli güncellemelere ihtiyaç duyun.

  ## Async Action'lar
  - Async store action'ları client-only workflow'ları, optimistic draft'ları veya lokal device API'lerini koordine edebilir.
  - HTTP fetch işlemini projenin server-state katmanında tutun, sürece state açıkça client'a ait değilse.
  - Async client workflow'larını `idle`, `pending`, `success` ve `error` gibi açık status'larla temsil edin.
  - Yeniden deneme veya workflow kapatırken error state'ini kasıtlı olarak reset edin.

  ## SSR ve React Server Components
  - Browser-only store'ları React Server Components'ten okumayın veya değiştirmeyin.
  - SSR framework'lerinde, state'in server üzerinde başlatılması gerektiğinde per-request vanilla store'lar oluşturun.
  - Storage-backed değerleri render etmeden önce persisted store'ları hydration uyuşmazlıklarına karşı koruyun.
  - Store modüllerini `window`, `document` ve storage erişiminden middleware yapılandırması dışında tutun.

  ## Test
  - Mümkün olduğunda React render etmeden store action'larını doğrudan test edin.
  - Test'ler arasında store'ları başlangıç state'leriyle reset edin.
  - Selector'ları ve action'ları component davranışından ayrı olarak assert edin.
  - Test'ler için alınan veriyi Zustand üzerinden yönlendirmek yerine server-state library'lerini mock edin.

  ## Anti-Pattern'ler
  - Tüm uygulama için bir global store oluşturmayın.
  - Form giriş state'ini Zustand'a koymayın, sürece birden çok uzak component aynı draft'ı düzenlemezse.
  - Immer middleware olmadan iç içe nesneleri doğrudan değiştirmeyin.
  - Zustand'ı event bus olarak kullanmayın; bunun yerine açık callback'ler, service'ler veya scoped store tercih edin.
  - Redux tarzı reducer'lar, action constant'ları veya dispatch wrapper'ları tanıtmayın, sürece proje zaten bu pattern'ı kullanmıyorsa.
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
