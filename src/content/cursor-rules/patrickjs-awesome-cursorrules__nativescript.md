---
name: "nativescript"
clean_name: "Nativescript"
description: "NativeScript best practices and patterns for mobile applications"
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/nativescript.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/nativescript.mdc"
body_length: 3225
file_extension: ".mdc"
body_tr: |-
  # NativeScript En İyi Uygulamaları

  ## Kod Stili ve Yapısı
  - Kodu bakımı kolaylaştırmak için modüler componentler ve servisler kullanarak organize edin.
  - Platform'a özel dosyaları (`.ios.ts`, `.android.ts`) kod 20 satırdan fazla platform'a özel kod içerdiğinde kullanın.
  - Özel native kod oluştururken, platform'a özel kodu organize ve tek bir import ile kolay erişilebilir tutmak için `custom-native/index.ios.ts`, `custom-native/index.android.ts`, `custom-native/common.ts`, `custom-native/index.d.ts` gibi bir klasör yapısı kullanın. `custom-native` yerine özel kodun adını yazın.
    
  ## Adlandırma Kuralları
  - Platform'a özel değişkenlere `ios` veya `android` öneki ekleyin (örneğin, `iosButtonStyle`).
  - Özel componentleri ve stilleri açıklayıcı şekilde adlandırın (`primaryButtonStyle`, `userProfileView`).
   
  ## Kullanım
  - Native sınıfları genişletirken gerektiğinde `@NativeClass()` kullanın
  - iOS için, native sınıfları genişletirken, bir delegate gerekli veya kullanılıyorsa özel delegeleri bildirmek için her zaman `static ObjCProtocols = [AnyUIKitDelegate];` kullanın.
  - iOS için, garbage collection'ı önlemek üzere her zaman özel delegate örneklerini tutun. Örneğin, `let delegate = MyCustomDelegate.new() as MyCustomDelegate` ve sınıf kapsamında korunduğundan emin olun.
  - Tree-shaking ile koşullu platform kodu için `__ANDROID__` ve `__APPLE__` tercih edin.
  - Bellek sızıntılarını önlemek için tüm zamanlayıcıları (`setTimeout`, `setInterval`) izleyin ve temizleyin.

  ## UI ve Stil
  - Tutarlı stil için `"@nativescript/tailwind": "^2.1.0"` ile birlikte `"tailwindcss": "~3.4.0"` ile her zaman TailwindCSS'i CSS Framework olarak kullanın.
  - Platform'a özel stil için ios: ve android: stil varyantlarını ekleyin, `addVariant('android', '.ns-android &')`, `addVariant('ios', '.ns-ios &');`
  - `darkMode: ['class', '.ns-dark']`
  - Esnek ve duyarlı düzenler için `GridLayout` veya `StackLayout` kullanın. Karmaşık düzenler için GridLayout kullanımına daha fazla önem verin, ancak basit, doğrusal düzenlemeler için StackLayout kullanın.
  - Gizlendiğinde düzeni etkilememesi gereken öğeler için `visibility: 'hidden'` kullanın.
   
  ## Performans Optimizasyonu
  - Düzen konteynırlarını derin şekilde iç içe yerleştirmekten kaçının, bunun yerine karmaşık düzenleri kurmak için `GridLayout`'u akıllıca kullanın.
  - Render edilme yükünü en aza indirmek için runtime sırasında görsel ağacı doğrudan manipüle etmekten kaçının.
  - Bellek ve uygulama boyutunu azaltmak için TinyPNG gibi sıkıştırma araçlarını kullanarak görüntüleri optimize edin.
  - `App_Resources` veya `package.json` içindeki dosyaları değiştirdikten sonra projeyi temizleyin (`ns clean`).
   
  ## Temel Kurallar
  - Kodu tekrarlamaktan kaçınmak için componentleri ve stilleri yeniden kullanın.
  - `ListView` ve `RadListView` içinde koşullu düzenler için şablon seçicileri (`itemTemplateSelector`) kullanın.
  - UI bağlamalarında veya metodlarda yoğun hesaplamaları en aza indirin.
  - Yalnızca düz xml bağlamaları kullanıyorsanız, durum değişikliklerini verimli şekilde yansıtmak için `Observable` veya `ObservableArray` özelliklerini kullanın.
  - Angular, React, Solid, Svelte veya Vue kullanırken, optimal performans için her zaman ilgili state management, lifecycle hook'ları, rendering optimizasyonlarını ve reaktif bağlamaları kullanın.
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
