---
name: "tailwind-css-nextjs-guide-cursorrules-prompt-file"
clean_name: "Tailwind CSS Next.js Guide"
description: "Cursor rules for Tailwind CSS development with Next.js integration."
description_tr: "Cursor rules for Tailwind CSS development with Next.js integration.  ---  Next.js entegrasyonu ile Tailwind CSS geliştirmesi için Cursor rules."
category: "Frontend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/tailwind-css-nextjs-guide-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/tailwind-css-nextjs-guide-cursorrules-prompt-file.mdc"
body_length: 4566
file_extension: ".mdc"
body_tr: |-
  # Prompt Oluşturma Kuralları:

  - Bileşen gereksinimlerini detaylı şekilde analiz edin
  - Spesifik DaisyUI bileşen önerileri ekleyin
  - İstenilen Tailwind CSS sınıflarını belirtin
  - Gerekli TypeScript türlerini veya arayüzlerini belirtin
  - Responsive tasarım için talimatlar ekleyin
  - Uygulanabilir Next.js özelliklerini öneride bulunun
  - Gerekli state yönetimini veya hook'ları belirtin
  - Erişilebilirlik konularını düşünün
  - Gerekli ikon veya varlıkları belirtin
  - Hata işleme ve yükleme durumlarını öneride bulunun
  - Animasyonlar veya geçişler için talimatlar ekleyin (gerekirse)
  - Gerekli API entegrasyonlarını veya veri getirme işlemlerini belirtin
  - Geçerli olduğunda performans optimizasyonu tekniklerini belirtin
  - Bileşeni test etme talimatlarını ekleyin
  - Bileşen için dokümantasyon gereksinimlerini öneride bulunun

  # Genel Bileşen Oluşturma Yönergeleri:

  - Yeniden kullanılabilirlik ve modülerliği önceliklendirin
  - Tutarlı adlandırma kurallarını sağlayın
  - React en iyi uygulamalarını ve kalıplarını izleyin
  - Uygun prop doğrulaması uygulayın
  - Uluslararasılaştırma gereksinimlerini göz önünde bulundurun
  - Geçerli olduğunda SEO için optimize edin
  - Farklı tarayıcı ve cihazlarla uyumluluğu sağlayın

  # Genel Kurallar:

  - Kesin TypeScript'i etkinleştirin (tsconfig.json'da strict: true)
  - 'any' kullanmaktan kaçının, 'unknown' ile runtime kontrolleri tercih edin
  - İşlev girişlerini ve çıkışlarını açıkça yazın
  - Gelişmiş TypeScript özelliklerini kullanın (type guards, mapped types, conditional types)
  - Proje yapısını organize edin: components, pages, hooks, utils, styles, contracts, services
  - Kaygıları ayırın: presentational bileşenler, business logic, side effects
  - Kod formatlaması ve linting için Biome kullanın
  - Biome'u pre-commit hook olarak yapılandırın

  # Next.js Kuralları:

  - Dinamik rotalar için bracket notasyonunu kullanın ([id].tsx)
  - Rota parametrelerini doğrulayın ve sanitize edin
  - Düz, açıklayıcı rotaları tercih edin
  - Dinamik veri için getServerSideProps, statik veri için getStaticProps/getStaticPaths kullanın
  - Uygun yerlerde Incremental Static Regeneration (ISR) uygulayın
  - Optimize edilmiş görseller için next/image kullanın
  - Görüntü layout, priority, sizes ve srcSet özniteliklerini yapılandırın

  # TypeScript Kuralları:

  - tsconfig.json'da tüm strict mode seçeneklerini etkinleştirin
  - Tüm değişkenleri, parametreleri ve dönüş değerlerini açıkça yazın
  - Utility types, mapped types ve conditional types kullanın
  - Genişletilebilir nesne şekilleri için 'interface' tercih edin
  - Birleşimler, kesişimler ve primitive kompozisyonları için 'type' kullanın
  - Karmaşık türleri JSDoc ile belirtin
  - Belirsiz birleşim türlerinden kaçının, gerektiğinde discriminated unions kullanın

  # TailwindCSS ve DaisyUI Kuralları:

  - Stil vermek için TailwindCSS utility sınıflarını kullanın
  - Kesinlikle gerekmedikçe özel CSS'den kaçının
  - Utility sınıflarının tutarlı sırasını koruyun
  - Uyarlanabilir tasarımlar için Tailwind'in responsive variants'larını kullanın
  - Hızlı geliştirme için DaisyUI bileşenlerinden yararlanın
  - DaisyUI bileşenlerini yalnızca gerektiğinde özelleştirin
  - tailwind.config.js'de design tokens'ları tanımlayın ve kullanın

  # Starknet React Kuralları:

  - Blockchain bağlantı yönetimini merkezileştirin
  - Otomatik yeniden bağlanma ve hata işlemeyi uygulayın
  - İşlem durumu yönetimi için React hook'larını kullanın
  - Blockchain etkileşimleri için net UI geri bildirimi sağlayın
  - Blockchain işlemleri için kapsamlı hata işleme uygulayın

  # Cairo Kuralları:

  - Modüler ve sürdürülebilir kontrat yapıları tasarlayın
  - Gas verimliliği için optimize edin
  - Durum değişikliklerini ve depolama erişimini minimize edin
  - Tüm kontratları ve fonksiyonları detaylı şekilde belirtin
  - Karmaşık mantık ve uygulama seçimlerini açıklayın

  # Geliştirme Süreci:

  - Pull Request'ler aracılığıyla detaylı kod incelemesi yapın
  - Net PR açıklamalarını bağlam ve ekran görüntüleriyle ekleyin
  - Kapsamlı otomatik testleri uygulayın (unit, integration, e2e)
  - Yüksek kapsama sayılarından çok anlamlı testleri önceliklendirin
  - Commit mesajları için Conventional Commits kullanın (feat:, fix:, docs:, chore:)
  - Daha kolay inceleme ve hata ayıklama için küçük, kademeli commit'ler yapın

  # Biome Kuralları:

  - Kod formatlaması ve linting için Biome kullanın
  - Biome'u pre-commit hook olarak yapılandırın
  - Biome'un tavsiye edilen kurallarını izleyin
  - Biome yapılandırmasını biome.json'da gerektiği şekilde özelleştirin
  - Proje genelinde tutarlı kod stilini sağlayın
  - Commit etmeden önce Biome kontrolleri çalıştırın
  - Tüm Biome uyarılarını ve hatalarını hızlıca çözün
  - İmport ifadelerini temiz tutmak için Biome'un organize imports özelliğini kullanın
  - TypeScript için Biome'un gelişmiş linting yeteneklerinden yararlanın
  - Otomatik kontroller için Biome'u CI/CD pipeline'ınıza entegre edin
  - Biome'u en son stabil sürüme güncel tutun
  - Gerektiğinde belirli dosya veya dizinleri hariç tutmak için Biome'un ignore kalıplarını kullanın
---

Prompt Generation Rules:

- Analyze the component requirements thoroughly
- Include specific DaisyUI component suggestions
- Specify desired Tailwind CSS classes for styling
- Mention any required TypeScript types or interfaces
- Include instructions for responsive design
- Suggest appropriate Next.js features if applicable
- Specify any necessary state management or hooks
- Include accessibility considerations
- Mention any required icons or assets
- Suggest error handling and loading states
- Include instructions for animations or transitions if needed
- Specify any required API integrations or data fetching
- Mention performance optimization techniques if applicable
- Include instructions for testing the component
- Suggest documentation requirements for the component

General Component Creation Guidelines:

- Prioritize reusability and modularity
- Ensure consistent naming conventions
- Follow React best practices and patterns
- Implement proper prop validation
- Consider internationalization requirements
- Optimize for SEO when applicable
- Ensure compatibility with different browsers and devices

General Rules:

- Enable strict TypeScript (strict: true in tsconfig.json)
- Avoid 'any', prefer 'unknown' with runtime checks
- Explicitly type function inputs and outputs
- Use advanced TypeScript features (type guards, mapped types, conditional types)
- Organize project structure: components, pages, hooks, utils, styles, contracts, services
- Separate concerns: presentational components, business logic, side effects
- Use Biome for code formatting and linting
- Configure Biome as a pre-commit hook

Next.js Rules:

- Use dynamic routes with bracket notation ([id].tsx)
- Validate and sanitize route parameters
- Prefer flat, descriptive routes
- Use getServerSideProps for dynamic data, getStaticProps/getStaticPaths for static
- Implement Incremental Static Regeneration (ISR) where appropriate
- Use next/image for optimized images
- Configure image layout, priority, sizes, and srcSet attributes

TypeScript Rules:

- Enable all strict mode options in tsconfig.json
- Explicitly type all variables, parameters, and return values
- Use utility types, mapped types, and conditional types
- Prefer 'interface' for extendable object shapes
- Use 'type' for unions, intersections, and primitive compositions
- Document complex types with JSDoc
- Avoid ambiguous union types, use discriminated unions when necessary

TailwindCSS and DaisyUI Rules:

- Use TailwindCSS utility classes for styling
- Avoid custom CSS unless absolutely necessary
- Maintain consistent order of utility classes
- Use Tailwind's responsive variants for adaptive designs
- Leverage DaisyUI components for rapid development
- Customize DaisyUI components only when necessary
- Define and use design tokens in tailwind.config.js

Starknet React Rules:

- Centralize blockchain connection management
- Implement automatic reconnection and error handling
- Use React hooks for transaction status management
- Provide clear UI feedback for blockchain interactions
- Implement comprehensive error handling for blockchain operations

Cairo Rules:

- Design modular and maintainable contract structures
- Optimize for gas efficiency
- Minimize state changes and storage access
- Document all contracts and functions thoroughly
- Explain complex logic and implementation choices

Development Process:

- Conduct thorough code reviews via Pull Requests
- Include clear PR descriptions with context and screenshots
- Implement comprehensive automated testing (unit, integration, e2e)
- Prioritize meaningful tests over high coverage numbers
- Use Conventional Commits for commit messages (feat:, fix:, docs:, chore:)
- Make small, incremental commits for easier review and debugging

Biome Rules:

- Use Biome for code formatting and linting
- Configure Biome as a pre-commit hook
- Follow Biome's recommended rules
- Customize Biome configuration in biome.json as needed
- Ensure consistent code style across the project
- Run Biome checks before committing changes
- Address all Biome warnings and errors promptly
- Use Biome's organize imports feature to maintain clean import statements
- Leverage Biome's advanced linting capabilities for TypeScript
- Integrate Biome into the CI/CD pipeline for automated checks
- Keep Biome updated to the latest stable version
- Use Biome's ignore patterns to exclude specific files or directories when necessary
