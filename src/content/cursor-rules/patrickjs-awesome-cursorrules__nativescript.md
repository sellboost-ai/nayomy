---
name: "nativescript"
clean_name: "Nativescript"
description: "NativeScript best practices and patterns for mobile applications"
description_tr: "NativeScript ile mobil uygulamalar geliştirirken kullanılması gereken en iyi uygulamalar ve tasarım desenleri."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/nativescript.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/nativescript.mdc"
body_length: 3225
file_extension: ".mdc"
body_tr: |-
  # NativeScript En İyi Uygulamaları

  ## Kod Stili ve Yapısı
  - Kodu modüler bileşenler ve servisler kullanarak düzenleyin ve bakımını kolaylaştırın.
  - Platform-spesifik dosyalar (`.ios.ts`, `.android.ts`) kullanın, kod 20 satırı aştığında.
  - Özel native kod oluştururken, `custom-native/index.ios.ts`, `custom-native/index.android.ts`, `custom-native/common.ts`, `custom-native/index.d.ts` gibi bir klasör yapısı kullanın. Bu, platform-spesifik kodu organize tutar ve başka yerlerde tek bir import ile `custom-native` yerine özel kodun adını yazarak kolayca içe aktarabilirsiniz.
    
  ## Adlandırma Kuralları
  - Platform-spesifik değişkenlerin önüne `ios` veya `android` ön eki ekleyin (örn. `iosButtonStyle`).
  - Özel bileşenleri ve stilleri açıklayıcı şekilde adlandırın (`primaryButtonStyle`, `userProfileView`).
   
  ## Kullanım
  - Native sınıfları genişletirken gerektiğinde `@NativeClass()` kullanın
  - iOS için, native sınıfları genişletirken, bir delegate gerekli veya kullanılıyorsa, `static ObjCProtocols = [AnyUIKitDelegate];` kullanarak özel delegate'leri bildirin.
  - iOS için, garbage collection'ı önlemek üzere özel delegate instance'larını her zaman saklayın. Örneğin, `let delegate = MyCustomDelegate.new() as MyCustomDelegate`, ve sınıf kapsamında tutulmasını sağlayın.
  - Şartlı platform kodu için tree-shaking ile `__ANDROID__` ve `__APPLE__` tercih edin.
  - Bellek sızıntılarını önlemek için tüm timer'ları (`setTimeout`, `setInterval`) takip edin ve temizleyin.

  ## UI ve Stil
  - Tutarlı stil için `"@nativescript/tailwind": "^2.1.0"` sürümü ile TailwindCSS'i her zaman CSS Framework olarak kullanın, `"tailwindcss": "~3.4.0"` ile eşleştirilmiş şekilde.
  - Platform-spesifik stil için ios: ve android: stil varyantları ekleyin, addVariant('android', '.ns-android &'), addVariant('ios', '.ns-ios &');
  - darkMode: ['class', '.ns-dark']
  - Esnek ve responsive düzenler için `GridLayout` veya `StackLayout` kullanın. Karmaşık düzenler için GridLayout kullanımına daha fazla ağırlık verin, ancak daha basit, doğrusal düzenlemeler için StackLayout kullanın.
  - Gizlendiğinde düzeni etkilememesi gereken öğeler için `visibility: 'hidden'` kullanın.
   
  ## Performans Optimizasyonu
  - Layout container'ları derin şekilde iç içe geçirmekten kaçının, bunun yerine `GridLayout`'u akıllıca kullanarak karmaşık düzenler oluşturun.
  - Runtime sırasında visual tree'nin doğrudan manipülasyonunu yaparak render overhead'ini en aza indirin.
  - Bellek ve uygulama boyutunu azaltmak için TinyPNG gibi sıkıştırma araçlarını kullanarak resimleri optimize edin.
  - `App_Resources` veya `package.json` dosyalarında değişiklik yaptıktan sonra projeyi temizleyin (`ns clean`).
   
  ## Temel Kurallar
  - Tekrarlamayı önlemek için bileşenleri ve stilleri yeniden kullanın.
  - `ListView` ve `RadListView` içinde koşullu düzenler için template seçicileri (`itemTemplateSelector`) kullanın.
  - UI bağlamalarında veya metodlarda ağır hesaplamaları en aza indirin.
  - Yalnızca düz xml bağlamalar kullanıyorsanız, state değişikliklerini verimli bir şekilde yansıtmak için `Observable` veya `ObservableArray` özelliklerini kullanın.
  - Angular, React, Solid, Svelte veya Vue kullanıyorsanız, en iyi performans için her zaman ilgili state management, lifecycle hook'ları, render optimizasyonlarını ve reactive binding'leri kullanın.
---

# NativeScript Best Practices

## Code Style and Structure
- Organize code using modular components and services for maintainability.
- Use platform-specific files (`.ios.ts`, `.android.ts`) when code exceeds 20 platform-specific lines.
- When creating custom native code, use a folder structure like `custom-native/index.ios.ts`, `custom-native/index.android.ts`, `custom-native/common.ts`, `custom-native/index.d.ts` to keep platform-specific code organized and easy to import with single import elsewhere, replacing `custom-native` with the name of the custom code.
  
## Naming Conventions
- Prefix platform-specific variables with `ios` or `android` (e.g., `iosButtonStyle`).
- Name custom components and styles descriptively (`primaryButtonStyle`, `userProfileView`).
 
## Usage
- Use `@NativeClass()` when extending native classes when needed
- For iOS, when extending native classes, always use `static ObjCProtocols = [AnyUIKitDelegate];` to declare custom delegates if a delegate is required or used.
- For iOS, always retain custom delegate instances to prevent garbage collection. For example, `let delegate = MyCustomDelegate.new() as MyCustomDelegate`, and ensure it is retained in the class scope.
- Favor `__ANDROID__` and `__APPLE__` for conditional platform code with tree-shaking.
- Track and clean up all timers (`setTimeout`, `setInterval`) to avoid memory leaks.

## UI and Styling
- Always TailwindCSS as the CSS Framework using `"@nativescript/tailwind": "^2.1.0"` for consistent styling paired with `"tailwindcss": "~3.4.0"`.
- Add ios: and android: style variants for platform-specific styling, addVariant('android', '.ns-android &'), addVariant('ios', '.ns-ios &');
- darkMode: ['class', '.ns-dark']
- Leverage `GridLayout` or `StackLayout` for flexible, responsive layouts. Place more emphasis on proper GridLayout usage for complex layouts but use StackLayout for simpler, linear arrangements.
- Use `visibility: 'hidden'` for elements that should not affect layout when hidden.
 
## Performance Optimization
- Try to avoid deeply nesting layout containers but instead use `GridLayout` wisely to setup complex layouts.
- Avoid direct manipulation of the visual tree during runtime to minimize rendering overhead.
- Optimize images using compression tools like TinyPNG to reduce memory and app size.
- Clean the project (`ns clean`) after modifying files in `App_Resources` or `package.json`.
 
## Key Conventions
- Reuse components and styles to avoid duplication.
- Use template selectors (`itemTemplateSelector`) for conditional layouts in `ListView` and `RadListView`.
- Minimize heavy computations in UI bindings or methods.
- Only if using plain xml bindings, use `Observable` or `ObservableArray` properties to reflect state changes efficiently.
- When using Angular, React, Solid, Svelte or Vue, always leverage their respective state management, lifecycle hooks, rendering optimizations and reactive bindings for optimal performance.
