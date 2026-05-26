---
name: "react-zustand-cursorrules-prompt-file"
clean_name: "React Zustand"
description: "React and TypeScript state management guidance for Zustand stores, selectors, middleware, persistence, and testing."
description_tr: "Zustand store'ları, selector'lar, middleware, persistence ve testing için React ve TypeScript state management rehberi."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/react-zustand-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react-zustand-cursorrules-prompt-file.mdc"
body_length: 5441
file_extension: ".mdc"
body_tr: |-
  React ve Zustand uzmanısınız.

  # React + Zustand Yönergeleri

  ## State Sahipliği
  - Kısa ömürlü UI state'ini en yakın component'te `useState` veya `useReducer` ile tutun.
  - URL state'ini paylaşılabilir filtreler, pagination, sekmeler ve arama parametreleri için kullanın.
  - Zustand'ı sadece ilişkisiz componentler arasında gerçekten paylaşılan client state için kullanın.
  - Server state için TanStack Query, SWR, RTK Query veya mevcut proje veri katmanını kullanın.
  - Belgelenmiş çevrimdışı veya taslak düzenleme gereksinimi olmadıkça, getirilen server verilerini asla Zustand store'una çoğaltmayın.

  ## Store Tasarımı
  - Her store'u state artı adlandırılmış action'lar olarak modelleyin; component kodunun kötüye kullanabileceği anonim setter'ları açığa çıkarmayın.
  - Store'ları küçük ve domain odaklı tutun: auth session view state, command palette state, cart draft state, editor state, vb.
  - Büyük store'ları yazılı slice'lara bölün, ardından middleware'i yalnızca composed store sınırında uygulayın.
  - Türetilmiş değerleri selector'lar veya küçük pure helper'lar olarak tutun; state'te cache edilmeleri gerekmedikçe.
  - Varsayılan olarak serialize edilebilir veri depolayın; DOM node'ları, promise'leri, socket'leri ve timer'ları store state dışında tutun.

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
  - Component'te bir selector olmadan store hook'u çağırmayın; eğer component gerçekten her field'a ihtiyaç duyuyorsa.
  - Action'ları ayrı olarak veya bunları gruplandırırken shallow selector aracılığıyla seçin.
  - Birden çok değer döndüren object veya tuple selector'ları için `useShallow` kullanın.
  - Selector'ları pure ve ucuz tutun; pahalı türetmeleri gerekirse memoized helper'lara taşıyın.

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
  - Action payload'larını ve return value'larını yazın; async action'ları da dahil edin.
  - Çok sayıda gevşek ilişkili boolean yerine karmaşık local status için discriminated union'ları tercih edin.
  - Test'ler, utility'ler veya vanilla store factory'leri ihtiyaç duyduğunda store state type'larını export edin.

  ## Update'ler ve Middleware
  - Sonraki değer mevcut state'e bağlı olduğunda functional `set((state) => nextState)` kullanın.
  - İç içe geçmiş state'i immutably olarak işleyin; `immer` middleware'i sadece iç içe geçmiş update'leri materyal olarak basitleştirdiğinde kurun ve kullanın.
  - `persist`'i sadece reload'lardan sonra da kalması gereken state için kullanın.
  - Önemsiz tercihlerin ötesinde herhangi bir şeyi persist ederken `partialize`, `version` ve `migrate` kullanın.
  - Secrets, access token'ları, refresh token'larını, raw PII'yi veya uzun ömürlü authorization state'ini asla browser storage'a persist etmeyin.
  - Karmaşık flow'lar için geliştirme sırasında `devtools`'u kullanın ve önemli action'lara açık isimler verin.
  - React olmayan subscription'lar için fine-grained update'lere ihtiyaç duyduğunda `subscribeWithSelector` kullanın.

  ## Async Action'lar
  - Async store action'ları client-only workflow'ları, optimistic taslakları veya local device API'lerini koordine edebilir.
  - HTTP getirmeyi proje'nin server-state katmanında tutun; state açıkça client'a ait olmadığı sürece.
  - Async client workflow'larını `idle`, `pending`, `success` ve `error` gibi açık statuslarla temsil edin.
  - Yeniden denerken veya workflow'u kapatırken error state'ini kasıtlı olarak sıfırlayın.

  ## SSR ve React Server Components
  - React Server Components'ten browser'a özgü store'ları okumayın veya değiştirmeyin.
  - SSR framework'lerinde, state'in sunucuda initialize edilmesi gerektiğinde per-request vanilla store'lar oluşturun.
  - Depolama tarafından desteklenen value'ları render etmeden önce persisted store'ları hydration mismatch'lerine karşı koruyun.
  - Store modüllerini middleware yapılandırması dışında doğrudan `window`, `document` ve storage erişiminden tutmaz halde tutun.

  ## Testing
  - Mümkün olduğunda React'i render etmeden store action'larını doğrudan test edin.
  - Test'ler arasında store'ları ilk state'leriyle sıfırlayın.
  - Selector'ları ve action'ları component davranışından ayrı olarak assert edin.
  - Test'ler için getirilen verileri Zustand'dan route etmek yerine server-state library'lerini mock edin.

  ## Anti-Patterler
  - Tüm uygulama için bir global store oluşturmayın.
  - Birden çok uzak component aynı taslağı düzenlemedikçe, form input state'ini Zustand'a koymayın.
  - Immer middleware olmadan iç içe geçmiş object'leri doğrudan değiştirmeyin.
  - Zustand'ı event bus olarak kullanmayın; explicit callback'ler, service'ler veya scoped store'u tercih edin.
  - Proje zaten o pattern'i kullanmadıkça Redux tarzı reducer'lar, action constant'ları veya dispatch wrapper'larını tanıtmayın.
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
