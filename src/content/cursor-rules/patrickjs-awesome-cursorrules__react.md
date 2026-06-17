---
name: "react"
clean_name: "React"
description: "React best practices and patterns for modern web applications"
description_tr: "Modern web uygulamaları için React en iyi uygulamaları ve tasarım desenleri."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/react.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react.mdc"
body_length: 2324
file_extension: ".mdc"
body_tr: |-
  # React Best Practices

  ## Component Structure
  - Fonksiyonel componentleri class componentlere tercih edin
  - Componentleri küçük ve odaklanmış tutun
  - Yeniden kullanılabilir lojiği custom hook'lara çıkarın
  - Composition'ı inheritance yerine kullanın
  - TypeScript ile uygun prop types'ları implemente edin
  - Büyük componentleri daha küçük, odaklanmış olanlara bölen

  ## Hooks
  - Hooks'un Kurallarını takip edin
  - Yeniden kullanılabilir lojik için custom hook'lar kullanın
  - Hook'ları odaklanmış ve basit tutun
  - useEffect'te uygun dependency array'leri kullanın
  - Gerektiğinde useEffect'te cleanup implemente edin
  - İç içe hook'lardan kaçının

  ## State Management
  - Lokal component state için useState kullanın
  - Karmaşık state lojiği için useReducer implemente edin
  - Paylaşılan state için Context API kullanın
  - State'i kullanıldığı yere mümkün olduğunca yakın tutun
  - Uygun state management ile prop drilling'den kaçının
  - State management kütüphanelerini sadece gerekli olduğunda kullanın

  ## Performance
  - Uygun memoization'ı implemente edin (useMemo, useCallback)
  - Pahalı componentler için React.memo kullanın
  - Gereksiz re-render'lardan kaçının
  - Uygun lazy loading implemente edin
  - List'lerde uygun key prop'larını kullanın
  - Render performance'ını profile edip optimize edin

  ## Forms
  - Form input'ları için controlled component'ler kullanın
  - Uygun form validation implemente edin
  - Form submission state'lerini uygun şekilde yönetin
  - Uygun loading ve error state'lerini gösterin
  - Karmaşık formlar için form kütüphanelerini kullanın
  - Form'lar için uygun accessibility implemente edin

  ## Error Handling
  - Error Boundaries implemente edin
  - Async error'ları uygun şekilde yönetin
  - Kullanıcı dostu error mesajları gösterin
  - Uygun fallback UI implemente edin
  - Error'ları uygun şekilde log'layın
  - Edge case'leri zarifçe yönetin

  ## Testing
  - Component'ler için unit test'ler yazın
  - Karmaşık flow'lar için integration test'leri implemente edin
  - React Testing Library kullanın
  - Kullanıcı interactions'larını test edin
  - Error scenario'larını test edin
  - Uygun mock data implemente edin

  ## Accessibility
  - Semantic HTML element'leri kullanın
  - Uygun ARIA attributes'larını implemente edin
  - Keyboard navigation'ı sağlayın
  - Screen reader'lar ile test edin
  - Focus management'ı yönetin
  - Resimler için uygun alt text'leri sağlayın

  ## Code Organization
  - İlgili component'leri birlikte gruplandırın
  - Uygun file naming convention'larını kullanın
  - Uygun directory structure implemente edin
  - Style'ları component'lere yakın tutun
  - Uygun import/export'ları kullanın
  - Karmaşık component lojiğini document'leyin
---

# React Best Practices

## Component Structure
- Use functional components over class components
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use composition over inheritance
- Implement proper prop types with TypeScript
- Split large components into smaller, focused ones

## Hooks
- Follow the Rules of Hooks
- Use custom hooks for reusable logic
- Keep hooks focused and simple
- Use appropriate dependency arrays in useEffect
- Implement cleanup in useEffect when needed
- Avoid nested hooks

## State Management
- Use useState for local component state
- Implement useReducer for complex state logic
- Use Context API for shared state
- Keep state as close to where it's used as possible
- Avoid prop drilling through proper state management
- Use state management libraries only when necessary

## Performance
- Implement proper memoization (useMemo, useCallback)
- Use React.memo for expensive components
- Avoid unnecessary re-renders
- Implement proper lazy loading
- Use proper key props in lists
- Profile and optimize render performance

## Forms
- Use controlled components for form inputs
- Implement proper form validation
- Handle form submission states properly
- Show appropriate loading and error states
- Use form libraries for complex forms
- Implement proper accessibility for forms

## Error Handling
- Implement Error Boundaries
- Handle async errors properly
- Show user-friendly error messages
- Implement proper fallback UI
- Log errors appropriately
- Handle edge cases gracefully

## Testing
- Write unit tests for components
- Implement integration tests for complex flows
- Use React Testing Library
- Test user interactions
- Test error scenarios
- Implement proper mock data

## Accessibility
- Use semantic HTML elements
- Implement proper ARIA attributes
- Ensure keyboard navigation
- Test with screen readers
- Handle focus management
- Provide proper alt text for images

## Code Organization
- Group related components together
- Use proper file naming conventions
- Implement proper directory structure
- Keep styles close to components
- Use proper imports/exports
- Document complex component logic
