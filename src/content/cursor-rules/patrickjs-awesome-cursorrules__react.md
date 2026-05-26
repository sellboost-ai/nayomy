---
name: "react"
clean_name: "React"
description: "React best practices and patterns for modern web applications"
description_tr: "React için modern web uygulamalarında en iyi pratikler ve tasarım desenleri"
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/react.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react.mdc"
body_length: 2324
file_extension: ".mdc"
body_tr: |-
  # React Best Practices

  ## Component Yapısı
  - Functional components'ları class components'tan tercih edin
  - Component'ları küçük ve odaklı tutun
  - Yeniden kullanılabilir logic'i custom hooks'a çıkarın
  - Composition'ı inheritance'tan tercih edin
  - TypeScript ile uygun prop types'ını uygulayın
  - Büyük component'ları daha küçük, odaklı olanlar haline bölebilirsiniz

  ## Hooks
  - Hooks Kurallarına uyun
  - Yeniden kullanılabilir logic için custom hooks kullanın
  - Hooks'ları odaklı ve basit tutun
  - useEffect içinde uygun dependency arrays kullanın
  - Gerektiğinde useEffect'te cleanup uygulayın
  - Nested hooks'tan kaçının

  ## State Management
  - Yerel component state'i için useState kullanın
  - Kompleks state logic'i için useReducer uygulayın
  - Shared state için Context API kullanın
  - State'i kullanıldığı yere mümkün olduğunca yakın tutun
  - Uygun state management ile prop drilling'i önleyin
  - State management kütüphanelerini sadece gerekli olduğunda kullanın

  ## Performans
  - Uygun memoization'ı uygulayın (useMemo, useCallback)
  - Pahalı component'ler için React.memo kullanın
  - Gereksiz re-render'lerden kaçının
  - Uygun lazy loading'i uygulayın
  - Listlerde uygun key props'larını kullanın
  - Render performansını profile edin ve optimize edin

  ## Formlar
  - Form input'ları için controlled components kullanın
  - Uygun form validation'ı uygulayın
  - Form submission state'lerini uygun şekilde işleyin
  - Uygun loading ve error state'lerini gösterin
  - Kompleks formlar için form kütüphaneleri kullanın
  - Form'lar için uygun accessibility'yi uygulayın

  ## Error Handling
  - Error Boundaries'yi uygulayın
  - Async hataları uygun şekilde işleyin
  - Kullanıcı dostu error mesajları gösterin
  - Uygun fallback UI uygulayın
  - Hataları uygun şekilde loglayin
  - Edge case'leri zarif bir şekilde işleyin

  ## Testing
  - Component'ler için unit test'ler yazın
  - Kompleks flow'lar için integration test'lerini uygulayın
  - React Testing Library kullanın
  - Kullanıcı etkileşimlerini test edin
  - Error senaryolarını test edin
  - Uygun mock data'yı uygulayın

  ## Accessibility
  - Semantic HTML element'lerini kullanın
  - Uygun ARIA attribute'larını uygulayın
  - Keyboard navigation'ı sağlayın
  - Screen reader'larla test edin
  - Focus management'i işleyin
  - Image'lar için uygun alt text sağlayın

  ## Code Organization
  - İlişkili component'leri birlikte gruplayın
  - Uygun file naming convention'larını kullanın
  - Uygun directory structure'ı uygulayın
  - Style'ları component'lere yakın tutun
  - Uygun imports/exports kullanın
  - Kompleks component logic'ini dokümante edin
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
