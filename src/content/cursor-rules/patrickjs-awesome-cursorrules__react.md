---
name: "react"
clean_name: "React"
description: "React best practices and patterns for modern web applications"
description_tr: "React uygulamalarında en iyi pratikler ve modern web geliştirme desenleri"
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/react.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react.mdc"
body_length: 2324
file_extension: ".mdc"
body_tr: |-
  # React En İyi Uygulamaları

  ## Component Yapısı
  - Functional componentları class componentlara tercih et
  - Componentları küçük ve odaklanmış tut
  - Yeniden kullanılabilir lojiği custom hookslara çıkar
  - Composition'ı inheritance'a tercih et
  - TypeScript ile uygun prop types uygula
  - Büyük componentları daha küçük, odaklanmış olanlar içine böl

  ## Hooks
  - Hooks Kurallarına uy
  - Yeniden kullanılabilir logic için custom hooks kullan
  - Hookları odaklanmış ve basit tut
  - useEffect'te uygun dependency array'leri kullan
  - Gerekli olduğunda useEffect'te cleanup uygula
  - Nested hooklardan kaçın

  ## State Management
  - Local component state için useState kullan
  - Karmaşık state lojiği için useReducer uygula
  - Shared state için Context API kullan
  - State'i kullanıldığı yere yakın tut
  - Uygun state management ile prop drilling'den kaçın
  - State management kütüphanelerini sadece gerekli olduğunda kullan

  ## Performance
  - Uygun memoization uygula (useMemo, useCallback)
  - Pahalı componentler için React.memo kullan
  - Gereksiz re-render'lardan kaçın
  - Uygun lazy loading uygula
  - Listelerde uygun key props'ları kullan
  - Render performance'ı profile et ve optimize et

  ## Formlar
  - Form inputları için controlled components kullan
  - Uygun form validasyonu uygula
  - Form submission state'lerini uygun şekilde yönet
  - Uygun loading ve error state'lerini göster
  - Karmaşık formlar için form kütüphanelerini kullan
  - Formlar için uygun accessibility uygula

  ## Error Handling
  - Error Boundaries uygula
  - Async hataları uygun şekilde yönet
  - Kullanıcı dostu error mesajları göster
  - Uygun fallback UI uygula
  - Hataları uygun şekilde logla
  - Edge case'leri zarif bir şekilde yönet

  ## Testing
  - Componentler için unit test yaz
  - Karmaşık flow'lar için integration testlerini uygula
  - React Testing Library kullan
  - Kullanıcı interaksiyonlarını test et
  - Error senaryolarını test et
  - Uygun mock data uygula

  ## Accessibility
  - Semantic HTML elementleri kullan
  - Uygun ARIA attribute'larını uygula
  - Keyboard navigasyonunu sağla
  - Screen reader'larla test et
  - Focus yönetimini yönet
  - Resimler için uygun alt text sağla

  ## Code Organization
  - İlgili componentları bir arada grupla
  - Uygun file naming convention'larını kullan
  - Uygun directory structure'ı uygula
  - Style'ları componentlere yakın tut
  - Uygun import/export'ları kullan
  - Karmaşık component lojiğini dokumente et
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
