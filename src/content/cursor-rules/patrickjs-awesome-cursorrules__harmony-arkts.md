---
name: "harmony-arkts"
clean_name: "Harmony Arkts"
description: "HarmonyOS ArkTS rules for components, state, resources, layout, lifecycle, and accessibility"
description_tr: "HarmonyOS ArkTS bileşenler, durum, kaynaklar, düzen, yaşam döngüsü ve erişilebilirlik için kurallar"
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/harmony-arkts.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/harmony-arkts.mdc"
body_length: 2201
file_extension: ".mdc"
body_tr: |-
  # HarmonyOS ArkTS Kuralları

  ## Bileşen Yapısı

  - Bileşen tanımları için `@Component` kullanın ve bileşen struct'ları için PascalCase yazın.
  - State deklarasyonlarını bileşenin başına yakın tutun.
  - Lifecycle hook'larını `build()` öncesine gruplandırın.
  - `build()` öğesini en sona yerleştirin ve UI composition'a odaklanmış tutun.
  - Karmaşık UI'ları daha küçük bileşenlere ayırın.

  ## State ve Veri Akışı

  - Bileşene ait state için `@State` kullanın.
  - Parent-to-child verisi için `@Prop` kullanın.
  - `@Link` yalnızca kasıtlı two-way binding için kullanın.
  - Türetilmiş değerleri state'i çoğaltmak yerine metodlar veya computed helper'lar içinde tutun.
  - Proje kurulu bir app-state pattern'ine sahip olmadığı sürece geniş global state'ten kaçının.

  ## Layout ve Styling

  - `Column`, `Row`, `Stack`, `List` ve diğer ArkUI primitivlerini kasıtlı olarak kullanın.
  - Layout özellikleri (width, height, alignment, layout weight gibi) görsel özelliklerin öncesinde gruplandırın.
  - Kenarlar farklı olduğunda margin ve padding için object notasyonu kullanın.
  - Logical pixelleri konsisten şekilde kullanın.
  - Relatif boyutlar için yüzde stringlerini kullanın.
  - Proje desteklediğinde yeniden kullanılabilir spacing, renkler ve tipografiyi resources'ta tutun.

  ## Events ve Lifecycle

  - Event handler'lar için arrow function'ları kullanın.
  - Event handler'ları kısa tutun ve karmaşık mantığı metodlara delegate edin.
  - Async hataları açık olarak ele alın ve uygun yerlerde kullanıcıya yönelik hataları gösterin.
  - Genuinely bileşen lifecycle'a bağlı olan setup ve teardown için lifecycle hook'larını kullanın.

  ## Kaynaklar ve Erişilebilirlik

  - App kaynakları için `$r()` kullanın.
  - Resource referanslarını konsisten şekilde gruplandırın.
  - İnteraktif öğeler için açıklayıcı label'lar ve focus handling ekleyin.
  - Renk kontrastını ve touch target boyutunu koruyun.
  - Temsili cihaz boyutları ve yönlendirmeler üzerinde test edin.

  ## Yaygın Hatalar

  - Business mantığını `build()` içine gömmeyin.
  - One-way prop'lar yeterli olduğunda two-way binding kullanmayın.
  - Resources'ta olması gereken tekrarlanan string'leri, renkleri ve boyutları hardcode etmeyin.
  - Production kodunda debug `console.log` çağrılarını bırakmayın.
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
