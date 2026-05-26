---
name: "harmony-arkts"
clean_name: "Harmony Arkts"
description: "HarmonyOS ArkTS rules for components, state, resources, layout, lifecycle, and accessibility"
description_tr: "HarmonyOS ArkTS bileşenleri, state yönetimi, kaynaklar, layout, lifecycle ve erişilebilirlik için kurallar ve en iyi uygulamalar"
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/harmony-arkts.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/harmony-arkts.mdc"
body_length: 2201
file_extension: ".mdc"
body_tr: |-
  # HarmonyOS ArkTS Kuralları

  ## Bileşen Yapısı

  - Bileşen tanımları için `@Component` kullanın ve bileşen struct'ları için PascalCase adlandırması yapın.
  - State deklarasyonlarını bileşenin üst kısmına yakın tutun.
  - Lifecycle hook'larını `build()` öncesinde gruplandırın.
  - `build()` metodunu en sona yerleştirin ve UI composition'a odaklanmış tutun.
  - Karmaşık UI'ları daha küçük bileşenlere ayıklayın.

  ## State ve Veri Akışı

  - Bileşene ait state için `@State` kullanın.
  - Üst bileşenden alt bileşene veri için `@Prop` kullanın.
  - `@Link` yalnızca kasıtlı iki yönlü binding için kullanın.
  - Türetilmiş değerleri metod veya computed helper'larda tutun, state'i kopyalamayın.
  - Projenin kurulu bir app-state pattern'i olmadıkça geniş kapsamlı global state'ten kaçının.

  ## Layout ve Stil

  - `Column`, `Row`, `Stack`, `List` ve diğer ArkUI primitive'lerini bilinçli olarak kullanın.
  - Layout özelliklerini (width, height, alignment, layout weight gibi) visual özelliklerinden önce gruplandırın.
  - Kenarlar farklı olduğunda margin ve padding için object notation kullanın.
  - Mantıksal pixel'leri tutarlı bir şekilde kullanın.
  - Göreli boyutlar için yüzde stringlerini kullanın.
  - Proje bunu desteklediğinde tekrar kullanılabilir spacing, renk ve typography'i resource'larda tutun.

  ## Event'ler ve Lifecycle

  - Event handler'lar için arrow function'lar kullanın.
  - Event handler'ları kısa tutun ve karmaşık mantığı metod'lara devreden.
  - Async başarısızlıklarını açıkça yönetin ve uygun yerlerde kullanıcıya yönelik hataları gösterin.
  - Bileşen lifecycle'a gerçekten bağlı olan setup ve teardown işlemleri için lifecycle hook'larını kullanın.

  ## Kaynaklar ve Erişilebilirlik

  - Uygulama kaynakları için `$r()` kullanın.
  - Resource referanslarını tutarlı bir şekilde gruplandırın.
  - İnteraktif elemanlar için açıklayıcı label'lar ve focus handling ekleyin.
  - Renk kontrastını ve dokunma hedefi boyutunu koruyun.
  - Temsili cihaz boyutları ve yönelimlerinde test edin.

  ## Yaygın Hatalar

  - İş mantığını `build()` içinde gizlemeyin.
  - Tek yönlü prop'lar yeterli olduğunda iki yönlü binding kullanmayın.
  - Resource'lara ait tekrarlanan string'leri, renkleri ve boyutları hardcode etmeyin.
  - Üretim kodunda debug `console.log` çağrılarını bırakmayın.
---


# HarmonyOS ArkTS Rules

## Component Structure

- Use `@Component` for component definitions and PascalCase for component structs.
- Keep state declarations near the top of the component.
- Group lifecycle hooks before `build()`.
- Place `build()` last and keep it focused on UI composition.
- Extract complex UI into smaller components.

## State and Data Flow

- Use `@State` for component-owned state.
- Use `@Prop` for parent-to-child data.
- Use `@Link` only for intentional two-way binding.
- Keep derived values in methods or computed helpers rather than duplicating state.
- Avoid broad global state unless the project has an established app-state pattern.

## Layout and Styling

- Use `Column`, `Row`, `Stack`, `List`, and other ArkUI primitives intentionally.
- Keep layout properties such as width, height, alignment, and layout weight grouped before visual properties.
- Use object notation for margin and padding when sides differ.
- Use logical pixels consistently.
- Use percentage strings for relative sizes.
- Keep reusable spacing, colors, and typography in resources when the project supports it.

## Events and Lifecycle

- Use arrow functions for event handlers.
- Keep event handlers short and delegate complex logic to methods.
- Handle async failures explicitly and surface user-facing errors where appropriate.
- Use lifecycle hooks for setup and teardown that genuinely depends on component lifecycle.

## Resources and Accessibility

- Use `$r()` for app resources.
- Group resource references consistently.
- Add descriptive labels and focus handling for interactive elements.
- Maintain color contrast and touch target size.
- Test on representative device sizes and orientations.

## Common Mistakes

- Do not bury business logic in `build()`.
- Do not use two-way binding when one-way props are enough.
- Do not hardcode repeated strings, colors, and dimensions that belong in resources.
- Do not leave debug `console.log` calls in production code.
