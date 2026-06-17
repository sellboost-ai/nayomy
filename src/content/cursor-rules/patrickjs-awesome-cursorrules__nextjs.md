---
name: "nextjs"
clean_name: "Next.js"
description: "Next.js with TypeScript and Tailwind UI best practices"
description_tr: "Next.js, TypeScript ve Tailwind UI en iyi pratikleri"
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/nextjs.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/nextjs.mdc"
body_length: 1740
file_extension: ".mdc"
body_tr: |-
  # Next.js En İyi Uygulamaları

  ## Proje Yapısı
  - App Router dizin yapısını kullanın
  - Rota'ya özgü bileşenleri `app` dizinine yerleştirin
  - Paylaşılan bileşenleri `components` dizinine yerleştirin
  - Yardımcı fonksiyonları ve araçları `lib` dizinine yerleştirin
  - Dizinler için küçük harfle tire kullanan isimlendirme yapın (örn: `components/auth-wizard`)

  ## Bileşenler
  - Varsayılan olarak Server Components kullanın
  - İstemci bileşenlerini açıkça 'use client' ile işaretleyin
  - İstemci bileşenlerini Suspense ile sarmalayın ve fallback sağlayın
  - Kritik olmayan bileşenler için dinamik yüklemeyi kullanın
  - Uygun error boundaries uygulayın
  - Statik içerik ve arabirimlerini dosya sonuna yerleştirin

  ## Performans
  - Görüntüleri optimize edin: WebP formatı kullanın, veri boyutlandırması yapın, lazy loading kullanın
  - 'useEffect' ve 'setState' kullanımını minimize edin
  - Mümkün olduğunda Server Components (RSC) tercih edin
  - Kritik olmayan bileşenler için dinamik yüklemeyi kullanın
  - Uygun önbelleğe alma stratejileri uygulayın

  ## Veri Getirme
  - Mümkün olduğunda veri getirme için Server Components kullanın
  - Veri getirme için uygun hata işlemesi uygulayın
  - Uygun önbelleğe alma stratejileri kullanın
  - Yükleme ve hata durumlarını uygun şekilde işleyin

  ## Yönlendirme
  - App Router kurallarını kullanın
  - Rotalar için uygun yükleme ve hata durumlarını uygulayın
  - Dinamik rotaları uygun şekilde kullanın
  - Gerektiğinde parallel rotaları işleyin

  ## Formlar ve Doğrulama
  - Form doğrulaması için Zod kullanın
  - Sunucu tarafı doğrulamayı uygulayın
  - Form hatalarını uygun şekilde işleyin
  - Form gönderimi sırasında yükleme durumlarını gösterin

  ## Durum Yönetimi
  - İstemci tarafı durumunu minimize edin
  - React Context'i ölçülü şekilde kullanın
  - Mümkün olduğunda sunucu durumunu tercih edin
  - Uygun yükleme durumlarını uygulayın
---

# Next.js Best Practices

## Project Structure
- Use the App Router directory structure
- Place components in `app` directory for route-specific components
- Place shared components in `components` directory
- Place utilities and helpers in `lib` directory
- Use lowercase with dashes for directories (e.g., `components/auth-wizard`)

## Components
- Use Server Components by default
- Mark client components explicitly with 'use client'
- Wrap client components in Suspense with fallback
- Use dynamic loading for non-critical components
- Implement proper error boundaries
- Place static content and interfaces at file end

## Performance
- Optimize images: Use WebP format, size data, lazy loading
- Minimize use of 'useEffect' and 'setState'
- Favor Server Components (RSC) where possible
- Use dynamic loading for non-critical components
- Implement proper caching strategies

## Data Fetching
- Use Server Components for data fetching when possible
- Implement proper error handling for data fetching
- Use appropriate caching strategies
- Handle loading and error states appropriately

## Routing
- Use the App Router conventions
- Implement proper loading and error states for routes
- Use dynamic routes appropriately
- Handle parallel routes when needed

## Forms and Validation
- Use Zod for form validation
- Implement proper server-side validation
- Handle form errors appropriately
- Show loading states during form submission

## State Management
- Minimize client-side state
- Use React Context sparingly
- Prefer server state when possible
- Implement proper loading states
