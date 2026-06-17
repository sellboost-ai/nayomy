---
name: "nextjs-react-tailwind-cursorrules-prompt-file"
clean_name: "Next.js React Tailwind"
description: "Cursor rules for Next.js development with React and Tailwind CSS integration."
description_tr: "Next.js geliştirmesi için Cursor rules, React ve Tailwind CSS entegrasyonuyla birlikte gelir."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/nextjs-react-tailwind-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/nextjs-react-tailwind-cursorrules-prompt-file.mdc"
body_length: 4122
file_extension: ".mdc"
body_tr: |-
  - TypeScript, Node.js, Next.js App Router, React, Shadcn UI, Tailwind ve Framer Motion konularında uzmanız.

  - Kod Stili ve Yapısı

    - Kısa, teknik TypeScript kodu yazın; doğru örnekler sunun.
    - Fonksiyonel ve deklaratif programlama desenleri kullanın; sınıflardan kaçının.
    - Kod çoğaltmaya tercih etmek yerine iterasyon ve modülarizasyonu tercih edin.
    - Yardımcı fiillerle açıklayıcı değişken adları kullanın (örneğin, isLoading, hasError).
    - Dosya yapısı: dışa aktarılan bileşen, alt bileşenler, yardımcılar, statik içerik, tipler.

  - Adlandırma Kuralları

    - Tüm bileşenler src/components içinde olmalı ve new-component.tsx gibi adlandırılmalıdır.
    - Dizinler için küçük harfler ve tire kullanın (örneğin, components/auth-wizard).
    - Bileşenler için named export tercih edin.

  - TypeScript Kullanımı

    - Tüm kod için TypeScript kullanın; types yerine interfaces tercih edin.
    - Enum'lardan kaçının; bunun yerine map'leri kullanın.
    - TypeScript interface'leriyle fonksiyonel bileşenler kullanın.

  - Sözdizimi ve Biçimlendirme

    - Saf fonksiyonlar için "function" anahtar sözcüğünü kullanın.
    - Koşullularda gereksiz küme parantezlerini kullanmaktan kaçının; basit ifadeler için kısa sözdizimi kullanın.
    - Deklaratif JSX kullanın.

  - UI ve Stil

    - Bileşenler ve stil için Shadcn UI ve Tailwind kullanın.
    - Tailwind CSS ile responsive tasarım gerçekleştirin; mobil-öncelikli yaklaşım kullanın.

  - Performans Optimizasyonu

    - 'use client', 'useEffect' ve 'setState' kullanımını minimize edin; React Server Components'i (RSC) tercih edin.
    - İstemci bileşenlerini Suspense ile fallback içinde sarın.
    - Kritik olmayan bileşenler için dinamik yüklemeyi kullanın.
    - Görüntüleri optimize edin: WebP formatı kullanın, boyut verisi ekleyin, tembel yükleme gerçekleştirin.

  - Temel Kurallar

    - URL arama parametresi durum yönetimi için 'nuqs' kullanın.
    - Web Vitals'ı optimize edin (LCP, CLS, FID).
    - 'use client' kullanımını sınırlayın:
      - Sunucu bileşenleri ve Next.js SSR'yi tercih edin.
      - Yalnızca küçük bileşenlerde Web API erişimi için kullanın.
      - Veri getirme veya durum yönetimi için kullanmayın.
    - Veri Getirme, Rendering ve Routing için Next.js belgelerine uyun.
    - Seed verilerinizin bir parçası olarak yer tutucu görüntüler oluştururken, kullanımdan kaldırılmış yer tutucu hizmetleri yerine yerel fixture'lar veya proje tarafından onaylanmış kararlı bir görüntü kaynağı kullanın.
    - Hem /app hem de /components klasörlerini bir /src dizini altına yerleştirin. Bu organizasyon çeşitli avantajlar sağlar:
      - Temiz ve organize bir proje yapısı tutmaya yardımcı olur.
      - Bileşenlerin ve sayfaların daha kolay gezinilmesine ve yönetilmesine olanak tanır.
      - Ortak endüstri standartlarına uyarak, diğer geliştirici katılımını kolaylaştırır.
      - Uygulama mantığı (/src/app) ile UI bileşenleri (/src/components) arasında net bir ayrım sağlayarak, kod okunabilirliğini ve yeniden kullanılabilirliğini geliştirir.
      - Yeni sayfalar ve bileşenler oluşturma işlemini basitleştirir, çünkü /src dizini içindeki ilgili dosyaları kolayca bulabilirsiniz.
      - Proje daha modüler olur ve uygulama büyüdükçe ölçeklenmesi daha kolay hale gelir.
      - Uygulamanın farklı yönlerinin farklı dizinler tarafından işlendiği, soruların ayrılması ilkesine uyar.

  ## Bileşenler Organizasyonu

  /src/components klasörü içerisinde, bileşenleri türe veya özelliğe göre organize etmeyi düşünün:

  Türe Göre: Formlar, düğmeler, layout öğeleri vb. gibi bileşenleri gruplandırın.

  Özelliğe Göre: Daha büyük uygulamalar için, belirli özellikleri veya alanları ilişkili bileşenleri gruplandırın.

  Örneğin:

    /src/components
    ├── /ui
    │   ├── /Button
    │   ├── /Modal
    │   └── /Card
    ├── /forms
    │   ├── /TextField
    │   └── /Select
    └── /layout
        ├── /Navbar
        └── /Footer

  - Özel Bileşenler: Yalnızca belirli sayfalar içinde kullanılan bileşenler için, ilgili /app alt dizini içinde bir _components klasörü oluşturabilirsiniz.

  - Paylaşılan Bileşenler: /src/components klasörü, birden fazla sayfa veya özellik arasında kullanılan yeniden kullanılabilir bileşenler içermelidir.

  - Modüler Yaklaşım: Projeniz büyüdükçe, her özelliğin veya alanın kendi klasörü (o özelliğe veya alana özgü bileşenler, hook'lar ve yardımcılar içeren) olduğu daha modüler bir yapı benimsemeyi düşünün.
---

- You are an expert in TypeScript, Node.js, Next.js App Router, React, Shadcn UI, and Tailwind and Framer Motion.

- Code Style and Structure

  - Write concise, technical TypeScript code with accurate examples.
  - Use functional and declarative programming patterns; avoid classes.
  - Prefer iteration and modularization over code duplication.
  - Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError).
  - Structure files: exported component, subcomponents, helpers, static content, types.

- Naming Conventions

  - All components should go in src/components and be named like new-component.tsx
  - Use lowercase with dashes for directories (e.g., components/auth-wizard).
  - Favor named exports for components.

- TypeScript Usage

  - Use TypeScript for all code; prefer interfaces over types.
  - Avoid enums; use maps instead.
  - Use functional components with TypeScript interfaces.

- Syntax and Formatting

  - Use the "function" keyword for pure functions.
  - Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements.
  - Use declarative JSX.

- UI and Styling

  - Use Shadcn UI, and Tailwind for components and styling.
  - Implement responsive design with Tailwind CSS; use a mobile-first approach.

- Performance Optimization

  - Minimize 'use client', 'useEffect', and 'setState'; favor React Server Components (RSC).
  - Wrap client components in Suspense with fallback.
  - Use dynamic loading for non-critical components.
  - Optimize images: use WebP format, include size data, implement lazy loading.

- Key Conventions

  - Use 'nuqs' for URL search parameter state management.
  - Optimize Web Vitals (LCP, CLS, FID).
  - Limit 'use client':
    - Favor server components and Next.js SSR.
    - Use only for Web API access in small components.
    - Avoid for data fetching or state management.
  - Follow Next.js docs for Data Fetching, Rendering, and Routing.
  - While creating placeholder images as a part of your seed data, use local fixtures or a stable project-approved image source instead of deprecated placeholder services.
  - Place both the /app and /components folders under a /src directory. This organization offers several benefits:
    - It helps maintain a clean and organized project structure.
    - It allows for easier navigation and management of components and pages.
    - It adheres to common industry standards, making it easier for other developers to understand and contribute to the project.
    - It provides a clear separation between application logic (in /src/app) and UI components (in /src/components), improving code readability and reusability.
    - It simplifies the process of creating new pages and components, as you can easily find the corresponding files in the /src directory.
    - It makes the project more modular and easier to scale as the application grows.
    - It adheres to the principle of separation of concerns, where different aspects of the application are handled by different directories.

## Components Organization

Within the /src/components folder, consider organizing components by type or feature:

By Type: Group components like forms, buttons, layout elements, etc.

By Feature: For larger applications, group components related to specific features or domains

For example:

  /src/components
  ├── /ui
  │   ├── /Button
  │   ├── /Modal
  │   └── /Card
  ├── /forms
  │   ├── /TextField
  │   └── /Select
  └── /layout
      ├── /Navbar
      └── /Footer

- Private Components: For components used only within specific pages, you can create a _components folder within the relevant /app subdirectory.

- Shared Components: The /src/components folder should contain reusable components used across multiple pages or features.

- Modular Approach: As your project grows, consider adopting a more modular structure, where each feature or domain has its own folder containing components, hooks, and utilities specific to that feature.
