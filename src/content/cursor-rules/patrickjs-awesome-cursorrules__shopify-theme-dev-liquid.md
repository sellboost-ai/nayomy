---
name: "shopify-theme-dev-liquid"
clean_name: "Shopify Theme Dev Liquid"
description: "Best practices for Shopify theme development with Liquid, JavaScript, and CSS"
description_tr: "Shopify tema geliştirmede Liquid, JavaScript ve CSS ile en iyi uygulamalar"
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/shopify-theme-dev-liquid.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/shopify-theme-dev-liquid.mdc"
body_length: 3916
file_extension: ".mdc"
body_tr: |-
  # Shopify Tema Geliştirme En İyi Uygulamaları

  ## Proje Yapısı
  - Net bir **dizin yapısı** benimseyin, örneğin `sections`, `snippets`, `templates`, `assets`.
  - **Genel modülleri** (JavaScript işlevleri gibi) ayrı dosyalara organize edin.
  - **Liquid dosyalarını** kısa tutun ve tek sorumluluk ilkesine odaklanın, monolitik dosyalardan kaçının.
  - Şablonları ve bölümleri **sayfa veya işlevselliğe göre** organize edin.
  - Uygun **uluslararasılaştırma (i18n)** dosya yönetimi uygulayın.
  - Stil organizasyonu için **SCSS/CSS Modülleri** kullanın ve global kirliliğini önleyin.

  ## Liquid Şablonları
  - `include` yerine `render` etiketini tercih edin.
  - Döngüler içindeki **veritabanı sorgularını** sınırlayın, N+1 sorunlarından kaçının.
  - **Filtreleri** dikkatli kullanın, özellikle karmaşık hesaplama yapanları.
  - Gereksiz hesaplamaları azaltmak için Liquid'in **önbellek mekanizmalarından** yararlanın.
  - Karmaşık **mantık işleme** doğrudan Liquid'de yapmaktan kaçının; karmaşık mantığı JavaScript'e taşıyın.
  - Değişkenleri etkili bir şekilde tanımlamak ve yeniden kullanmak için `assign` ve `capture` kullanın.

  ## JavaScript Geliştirme
  - JS'yi modüler yapın, import ve export için **ES Modülleri** kullanın.
  - Modern JavaScript **en iyi uygulamalarını** takip edin, örneğin `const`/`let`, ok fonksiyonları vb.
  - Doğrudan **DOM manipülasyonundan** kaçının; olay delegasyonuna öncelik verin.
  - **JavaScript performansını** optimize edin, yeniden boyama ve yeniden akışları azaltın.
  - Paketleme ve kod optimizasyonu için **Webpack/Rollup** kullanmayı düşünün.
  - Net **yorumlar** ve **JSDoc** yazın.

  ## CSS/SCSS Stilizasyonu
  - **BEM, OOCSS veya Utility-First CSS** gibi adlandırma kurallarına uyun.
  - Render performansını iyileştirmek için **CSS seçicilerini** optimize edin.
  - Renkler ve yazı tipleri gibi tema konfigürasyonlarını yönetmek için **CSS değişkenleri** kullanın.
  - Cihazlar arasında tutarlı tema görünümünü sağlamak için **responsive tasarım** uygulayın.
  - Kullanılmayan stilleri kaldırarak **CSS dosya boyutunu** minimize edin.
  - **SCSS mixin'lerinden** ve **fonksiyonlarından** iyi yararlanın.

  ## Bölümler ve Bloklar
  - Yapılandırılabilir seçenekleri tanımlamak için Bölüm **Şemasından** yararlanın.
  - **Bölüm bağımsızlığını ve yeniden kullanılabilirliğini** koruyun.
  - Bölümler için net **ön ayarlar** sağlayın.
  - Bölüm esnekliğini artırmak için **Blokları** uygun şekilde kullanın.
  - Bölümlerin **Shopify Customizer'da** iyi bir kullanıcı deneyimi sağlamasını sağlayın.
  - Bölümler içinde içeriği hardcode etmekten kaçının; mümkün olan her yerde Şema konfigürasyonlarını kullanın.

  ## Performans Optimizasyonu
  - Shopify'ın CDN'sini ve `image_url` filtresini kullanarak **görüntü yüklemesini** optimize edin.
  - **JavaScript ve CSS dosyalarını** minify edin.
  - **Tarayıcı önbelleğinden** yararlanın.
  - **HTTP isteklerinin** sayısını azaltın.
  - **Lazy loading'i** düşünün.
  - Google Lighthouse ve Shopify Theme Check kullanarak **tema performansını** izleyin.

  ## Erişilebilirlik (A11y)
  - Tüm etkileşimli öğelerin **klavye erişimli** olduğundan emin olun.
  - Görüntüler için anlamlı **`alt` metni** sağlayın.
  - Doğru **HTML anlamsal etiketleri** kullanın.
  - **Renk kontrastını** göz önünde bulundurun.
  - Net **odak durumları** uygulayın.
  - Karmaşık bileşenlerin erişilebilirliğini artırmak için **ARIA niteliklerini** kullanın.

  ## Bakım ve Ölçeklenebilirlik
  - Net **kod yorumları** ve dokümantasyon yazın.
  - Kod tutarlılığını korumak için **adlandırma kurallarını** takip edin.
  - Tema işlevselliklerini düzenli olarak **test edin**.
  - Farklı **tarayıcılar ve cihazlar** arasında uyumluluğu sağlayın.
  - Gelecek **genişletilebilirliği** göz önünde bulundurun, sıkı bağlamlaşmaktan kaçının.
  - Yerel geliştirme ve dağıtım için **Shopify CLI** kullanın.

  ## Kalite ve Test
  - Statik kod analizi için **Shopify Theme Check** kullanın.
  - **Birim testleri** yazın (uygun olduğu yerlerde).
  - Kapsamlı **uçtan uca testler** yürütün.
  - Çeşitli ortamlarda test edin (yerel, geliştirme mağazası, üretim mağazası).
  - **Uyumluluk testine** odaklanın (tarayıcılar, cihazlar, Shopify sürümleri).
  - **Hata işleme** ve uç durumları test edin.
---

# Shopify Theme Development Best Practices

## Project Structure
- Adopt a clear **directory structure**, e.g., `sections`, `snippets`, `templates`, `assets`.
- Organize **generic modules** (like JavaScript functionalities) into separate files.
- Keep **Liquid files** concise and focused on single responsibilities, avoiding monolithic files.
- Organize templates and sections by **page or functionality**.
- Implement proper **internationalization (i18n)** file management.
- Utilize **SCSS/CSS Modules** for style organization to prevent global pollution.

## Liquid Templating
- Prefer the `render` tag over `include`.
- Limit **database queries** within loops to avoid N+1 issues.
- Use **filters** judiciously, especially complex computational ones.
- Leverage Liquid's **caching mechanisms** to reduce redundant calculations.
- Avoid complex **logic handling** directly in Liquid; move intricate logic to JavaScript.
- Use `assign` and `capture` to define and reuse variables effectively.

## JavaScript Development
- Modularize JS, using **ES Modules** for imports and exports.
- Follow modern JavaScript **best practices**, such as `const`/`let`, arrow functions, etc.
- Avoid direct **DOM manipulation**; prioritize event delegation.
- Optimize **JavaScript performance** to reduce repaints and reflows.
- Consider using **Webpack/Rollup** for bundling and code optimization.
- Write clear **comments** and **JSDoc**.

## CSS/SCSS Styling
- Adhere to naming conventions like **BEM, OOCSS, or Utility-First CSS**.
- Optimize **CSS selectors** to improve rendering performance.
- Use **CSS variables** to manage theme configurations like colors and fonts.
- Implement **responsive design** to ensure consistent theme appearance across devices.
- Minimize **CSS file size** by removing unused styles.
- Make good use of **SCSS mixins** and **functions**.

## Sections and Blocks
- Utilize Section **Schema** to define configurable options.
- Maintain **section independence and reusability**.
- Provide clear **presets** for sections.
- Use **Blocks** appropriately to enhance section flexibility.
- Ensure sections provide a good user experience in the **Shopify Customizer**.
- Avoid hardcoding content within sections; use Schema configurations whenever possible.

## Performance Optimization
- Optimize **image loading** by using Shopify's CDN and the `image_url` filter.
- Minify **JavaScript and CSS files**.
- Leverage **browser caching**.
- Reduce the number of **HTTP requests**.
- Consider **lazy loading**.
- Monitor **theme performance** using Google Lighthouse and Shopify Theme Check.

## Accessibility (A11y)
- Ensure all interactive elements are **keyboard accessible**.
- Provide meaningful **`alt` text** for images.
- Use correct **HTML semantic tags**.
- Consider **color contrast**.
- Implement clear **focus states**.
- Use **ARIA attributes** to enhance the accessibility of complex components.

## Maintenance and Scalability
- Write clear **code comments** and documentation.
- Follow **naming conventions** to maintain code consistency.
- Regularly **test** theme functionalities.
- Ensure compatibility across different **browsers and devices**.
- Consider future **extensibility**, avoiding tight coupling.
- Use **Shopify CLI** for local development and deployment.

## Quality and Testing
- Use **Shopify Theme Check** for static code analysis.
- Write **unit tests** (where applicable).
- Conduct thorough **end-to-end testing**.
- Test in various environments (local, development store, production store).
- Focus on **compatibility testing** (browsers, devices, Shopify versions).
- Test **error handling** and edge cases.
