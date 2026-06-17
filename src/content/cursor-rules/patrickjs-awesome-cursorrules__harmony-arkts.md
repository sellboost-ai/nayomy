---
name: "harmony-arkts"
clean_name: "Harmony Arkts"
description: "HarmonyOS ArkTS rules for components, state, resources, layout, lifecycle, and accessibility"
description_tr: "HarmonyOS ArkTS bileşenleri, state yönetimi, kaynaklar, layout, yaşam döngüsü ve erişilebilirlik için kurallar"
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/harmony-arkts.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/harmony-arkts.mdc"
body_length: 2201
file_extension: ".mdc"
body_tr: |-
  # HarmonyOS ArkTS Kuralları

  ## Bileşen Yapısı

  - Bileşen tanımları için `@Component` kullanın ve bileşen struct'ları için PascalCase kullanın.
  - State deklarasyonlarını bileşenin üst kısmında tutun.
  - Lifecycle hook'larını `build()` öncesinde gruplandırın.
  - `build()` metodunu en sona yerleştirin ve UI composition'a odaklanmış tutun.
  - Karmaşık UI'ları daha küçük bileşenlere ayırın.

  ## State ve Veri Akışı

  - Bileşene ait state için `@State` kullanın.
  - Parent'tan child'a veri akışı için `@Prop` kullanın.
  - `@Link` sadece kasıtlı iki yönlü binding için kullanın.
  - Türetilmiş değerleri method'lar veya computed helper'lar içinde tutun, state'i kopyalamayın.
  - Projede yerleşik bir app-state pattern'ı olmadıkça geniş global state'den kaçının.

  ## Layout ve Styling

  - `Column`, `Row`, `Stack`, `List` ve diğer ArkUI primitive'lerini bilinçli olarak kullanın.
  - Layout özellikleri (width, height, alignment, layout weight) gibi özellikleri görsel özelliklerin öncesinde gruplandırın.
  - Kenarlar farklı olduğunda margin ve padding için object notation kullanın.
  - Logical pixel'ları tutarlı olarak kullanın.
  - Göreli boyutlar için percentage string'ler kullanın.
  - Proje desteklediğinde yeniden kullanılabilir spacing, color ve typography'yi resource'da tutun.

  ## Event'ler ve Lifecycle

  - Event handler'ları için arrow function'lar kullanın.
  - Event handler'ları kısa tutun ve kompleks logic'i method'lara devredin.
  - Async hataları açıkça ele alın ve kullanıcıya yönelik hataları uygun yerlerde gösterin.
  - Lifecycle hook'larını gerçekten component lifecycle'a bağlı olan setup ve teardown için kullanın.

  ## Kaynaklar ve Erişilebilirlik

  - App resource'ları için `$r()` kullanın.
  - Resource referanslarını tutarlı olarak gruplandırın.
  - Interactive element'lere descriptive label'lar ve focus handling ekleyin.
  - Color contrast ve touch target size'ını koruyun.
  - Temsili cihaz boyutları ve yönelimleri üzerinde test edin.

  ## Yaygın Hatalar

  - Business logic'i `build()` içinde gizlemeyin.
  - Tek yönlü prop'lar yeterli olduğunda iki yönlü binding kullanmayın.
  - Resource'da olması gereken tekrarlanan string'ler, color'lar ve dimension'ları hardcode etmeyin.
  - Production code'da debug `console.log` çağrılarını bırakmayın.
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
