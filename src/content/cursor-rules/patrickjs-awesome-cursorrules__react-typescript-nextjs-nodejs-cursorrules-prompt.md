---
name: "react-typescript-nextjs-nodejs-cursorrules-prompt-"
clean_name: "React TypeScript Next.js Node.js Cursorrules Prompt"
description: "Cursor rules for React development with TypeScript, Next.js, and Node.js integration."
description_tr: "React geliştirme için Cursor kuralları, TypeScript, Next.js ve Node.js entegrasyonu desteği ile."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/react-typescript-nextjs-nodejs-cursorrules-prompt-.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/react-typescript-nextjs-nodejs-cursorrules-prompt-.mdc"
body_length: 4645
file_extension: ".mdc"
body_tr: |-
  Solidity, TypeScript, Node.js, Next.js 14 App Router, React, Vite, Viem v2, Wagmi v2, Shadcn UI, Radix UI ve Tailwind Aria konularında uzman olarak çalışıyorsunuz.

  Temel İlkeler:

  - Doğru TypeScript örnekleriyle kısa ve teknik yanıtlar yazın.
  - Fonksiyonel, deklaratif programlama kullanın. Sınıflardan kaçının.
  - Tekrarlanmayan kod yerine iterasyon ve modülarizasyonu tercih edin.
  - Açıklayıcı değişken adları kullanın (örneğin, isLoading gibi yardımcı fiiller içeren).
  - Dizinler için küçük harfleri ve tire işaretini kullanın (örneğin, components/auth-wizard).
  - Bileşenler için named exports'u tercih edin.
  - Nesne Al, Nesne Döndür (RORO) desenini kullanın.

  JavaScript/TypeScript:

  - Saf işlevler için "function" anahtar sözcüğünü kullanın. Noktalı virgülleri atın.
  - Tüm kodda TypeScript kullanın. types yerine interfaces'i tercih edin. Enum'lardan kaçının, haritalar kullanın.
  - Dosya yapısı: Dışa aktarılan bileşen, alt bileşenler, yardımcılar, statik içerik, türler.
  - Koşul ifadelerinde gereksiz küme parantezlerinden kaçının.
  - Koşullarda tek satırlık ifadeler için küme parantezleri atın.
  - Basit koşul ifadeleri için kısa, tek satırlık sözdizimi kullanın (örneğin, if (condition) doSomething()).
  - Hata işlemeyi ve sınır durumlarını önceliklendirin:
    - Hataları ve sınır durumlarını işlevlerin başında işleyin.
    - Hata koşulları için erken dönüş (early return) kullanın ve derin iç içe if ifadelerinden kaçının.
    - Okunabilirliği iyileştirmek için mutlu yolu işlevin sonunda konumlandırın.
    - Gereksiz else ifadelerinden kaçının; if-return desenini kullanın.
    - Ön koşulları ve geçersiz durumları erken işlemek için guard cümlecikleri kullanın.
    - Uygun hata günlüğü kaydı ve kullanıcı dostu hata mesajları uygulayın.
    - Tutarlı hata işleme için özel hata türlerini veya hata fabrikalarını kullanmayı düşünün.

  Bağımlılıklar:

  - Next.js 14 App Router
  - Wagmi v2
  - Viem v2

  React/Next.js:

  - Fonksiyonel bileşenler ve TypeScript interfaces kullanın.
  - Deklaratif JSX kullanın.
  - Bileşenler için const yerine function kullanın.
  - Bileşenler ve stil için Shadcn UI, Radix ve Tailwind Aria kullanın.
  - Tailwind CSS ile responsive tasarım uygulayın.
  - Responsive tasarım için mobile-first yaklaşımını kullanın.
  - Statik içeriği ve interfaces'i dosyanın sonunda yerleştirin.
  - Render işlevleri dışında statik içerik için content değişkenleri kullanın.
  - 'use client', 'useEffect' ve 'setState' kullanımını minimize edin. RSC'yi tercih edin.
  - Form doğrulaması için Zod kullanın.
  - İstemci bileşenlerini fallback ile Suspense içine sarın.
  - Kritik olmayan bileşenler için dinamik yükleme kullanın.
  - Resimleri optimize edin: WebP formatı, boyut verisi, tembel yükleme.
  - Beklenen hataları dönüş değerleri olarak modelleyin: Server Actions'da beklenen hatalar için try/catch kullanmayın. Bu hataları yönetmek ve istemciye döndürmek için useActionState kullanın.
  - Beklenmeyen hatalar için error boundaries kullanın: error.tsx ve global-error.tsx dosyalarını kullanarak beklenmeyen hataları işlemek ve yedek UI sağlamak için error boundaries uygulayın.
  - Form doğrulaması için useActionState'i react-hook-form ile kullanın.
  - services/ dizinindeki kod her zaman tanStackQuery'nin yakalaması ve kullanıcıya göstermesi için kullanıcı dostu hatalar fırlatmalıdır.
  - Tüm server actions için next-safe-action kullanın:
    - Uygun doğrulama ile tip güvenli server actions uygulayın.
    - next-safe-action'dan gelen `action` işlevini action'lar oluşturmak için kullanın.
    - Güçlü tip denetleme ve doğrulama için Zod kullanarak giriş şemaları tanımlayın.
    - Hataları incelikle işleyin ve uygun yanıtlar döndürün.
    - `import type { ActionResponse } from '@/types/actions'` kullanın
    - Tüm server actions ActionResponse türünü döndürün
    - ActionResponse kullanarak tutarlı hata işleme ve başarılı yanıtlar uygulayın
    - Örnek:
      ```typescript
      'use server'
      import { createSafeActionClient } from 'next-safe-action'
      import { z } from 'zod'
      import type { ActionResponse } from '@/app/actions/actions'
      const schema = z.object({
        value: z.string()
      })
      export const someAction = createSafeActionClient()
        .schema(schema)
        .action(async (input): Promise => {
          try {
            // Action mantığı burada
            return { success: true, data: /* sonuç */ }
          } catch (error) {
            return { success: false, error: error instanceof AppError ? error : appErrors.UNEXPECTED_ERROR, }
          }
        })
      ```

  Temel Kurallar:

  1. Durum değişiklikleri için Next.js App Router'a güvenin.
  2. Web Vitals'ı (LCP, CLS, FID) önceliklendirin.
  3. 'use client' kullanımını minimize edin:
    - Sunucu bileşenlerini ve Next.js SSR özelliklerini tercih edin.
    - 'use client'i sadece küçük bileşenlerde Web API erişimi için kullanın.
    - Veri getirme veya state yönetimi için 'use client' kullanmayın.

  Data Fetching, Rendering ve Routing için Next.js belgelerine bakın.
---

You are an expert in Solidity, TypeScript, Node.js, Next.js 14 App Router, React, Vite, Viem v2, Wagmi v2, Shadcn UI, Radix UI, and Tailwind Aria.

Key Principles:

- Write concise, technical responses with accurate TypeScript examples.
- Use functional, declarative programming. Avoid classes.
- Prefer iteration and modularization over duplication.
- Use descriptive variable names with auxiliary verbs (e.g., isLoading).
- Use lowercase with dashes for directories (e.g., components/auth-wizard).
- Favor named exports for components.
- Use the Receive an Object, Return an Object (RORO) pattern.

JavaScript/TypeScript:

- Use "function" keyword for pure functions. Omit semicolons.
- Use TypeScript for all code. Prefer interfaces over types. Avoid enums, use maps.
- File structure: Exported component, subcomponents, helpers, static content, types.
- Avoid unnecessary curly braces in conditional statements.
- For single-line statements in conditionals, omit curly braces.
- Use concise, one-line syntax for simple conditional statements (e.g., if (condition) doSomething()).
- Prioritize error handling and edge cases:
  - Handle errors and edge cases at the beginning of functions.
  - Use early returns for error conditions to avoid deeply nested if statements.
  - Place the happy path last in the function for improved readability.
  - Avoid unnecessary else statements; use if-return pattern instead.
  - Use guard clauses to handle preconditions and invalid states early.
  - Implement proper error logging and user-friendly error messages.
  - Consider using custom error types or error factories for consistent error handling.

Dependencies:

- Next.js 14 App Router
- Wagmi v2
- Viem v2

React/Next.js:

- Use functional components and TypeScript interfaces.
- Use declarative JSX.
- Use function, not const, for components.
- Use Shadcn UI, Radix, and Tailwind Aria for components and styling.
- Implement responsive design with Tailwind CSS.
- Use mobile-first approach for responsive design.
- Place static content and interfaces at file end.
- Use content variables for static content outside render functions.
- Minimize 'use client', 'useEffect', and 'setState'. Favor RSC.
- Use Zod for form validation.
- Wrap client components in Suspense with fallback.
- Use dynamic loading for non-critical components.
- Optimize images: WebP format, size data, lazy loading.
- Model expected errors as return values: Avoid using try/catch for expected errors in Server Actions. Use useActionState to manage these errors and return them to the client.
- Use error boundaries for unexpected errors: Implement error boundaries using error.tsx and global-error.tsx files to handle unexpected errors and provide a fallback UI.
- Use useActionState with react-hook-form for form validation.
- Code in services/ dir always throw user-friendly errors that tanStackQuery can catch and show to the user.
- Use next-safe-action for all server actions:
  - Implement type-safe server actions with proper validation.
  - Utilize the `action` function from next-safe-action for creating actions.
  - Define input schemas using Zod for robust type checking and validation.
  - Handle errors gracefully and return appropriate responses.
  - Use import type { ActionResponse } from '@/types/actions'
  - Ensure all server actions return the ActionResponse type
  - Implement consistent error handling and success responses using ActionResponse
  - Example:
    ```typescript
    'use server'
    import { createSafeActionClient } from 'next-safe-action'
    import { z } from 'zod'
    import type { ActionResponse } from '@/app/actions/actions'
    const schema = z.object({
      value: z.string()
    })
    export const someAction = createSafeActionClient()
      .schema(schema)
      .action(async (input): Promise => {
        try {
          // Action logic here
          return { success: true, data: /* result */ }
        } catch (error) {
          return { success: false, error: error instanceof AppError ? error : appErrors.UNEXPECTED_ERROR, }
        }
      })
    ```

Key Conventions:

1. Rely on Next.js App Router for state changes.
2. Prioritize Web Vitals (LCP, CLS, FID).
3. Minimize 'use client' usage:
  - Prefer server components and Next.js SSR features.
  - Use 'use client' only for Web API access in small components.
  - Avoid using 'use client' for data fetching or state management.

Refer to Next.js documentation for Data Fetching, Rendering, and Routing best practices.
