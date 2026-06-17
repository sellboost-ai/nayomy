---
name: "flutter-development-guidelines-cursorrules-prompt-file"
clean_name: "Flutter Development Guidelines"
description: "Cursor rules for Flutter development with MVVM architecture, Riverpod state management, Material widgets, and Dart style guidelines."
description_tr: "Flutter geliştirmesi için Cursor kuralları; MVVM mimarisi, Riverpod state management, Material widget'ları ve Dart stil rehberleri içerir."
category: "Mobile"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/flutter-development-guidelines-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/flutter-development-guidelines-cursorrules-prompt-file.mdc"
body_length: 2424
file_extension: ".mdc"
body_tr: |-
  ### Kod stili ve yapısı
  - Özlü ve verimli kaynak kod yazın.
  - Okunması ve bakımı kolay kaynak kod yazmaya çalışın ve doğru örnekler sağlayın.
  - Kod tekrarından kaçının: widget'ları ve function'ları yeniden kullanılabilir bileşenlere modülleştirin.
  - Açıklayıcı değişken adları kullanın: `isLoading`, `hasError` gibi yardımcı fiillerle adlar kullanın.

  ### /lib altında dizin yapısı.
  - /lib/models/: veri modelleri ve tür tanımları (Models)
  - /lib/viewmodels/: durum yönetimi ve iş mantığı (ViewModel)
  - /lib/views/widgets/: yeniden kullanılabilir widget'lar (View)
  - /lib/views/screens/: ekran başına widget'lar (View)
  - /lib/services/: API çağrıları ve veri erişimi için service sınıfları
  - /lib/utils/: yardımcı function'lar ve sabitler

  ### Adlandırma kuralları
  - Dizinler ve dosyalar: snakeCase kullanın (ör. auth_wizard.dart).
  - UpperCamelCase: sınıf adları/enumlar/typedef'ler/tür parametreleri vb. için kullanın.
  - lowerCamelCase: değişkenler/function'lar/sınıf üyeleri (özellikler, metodlar) vb. için kullanın.
  - lowercase_with_underscores (snakeCase): dosyalar/dizinler/paketler/kütüphaneler vb. için kullanın.

  ### İmport.
  - Dart ile başlayan import'ları önce yerleştirin (import öneki için lowercase_with_underscores kullanın).
  - Sonra, üçüncü taraf paketleri import edin (package:).
  - Son olarak, proje içinde göreli yolları ve dosyaları import edin.

  ### Dart kullanımı.
  - Tür güvenliğinden yararlanın: tüm kodda statik yazıları kullanın ve mümkün olduğunca tür çıkarımından faydalanın.

  ### UI ve stil.
  - Material widget'larını kullanın.
  - Tema'yı birleştirin: tutarlı stiller uygulamak için ThemeData kullanın.

  ### Performans optimizasyonu.
  - Durum gerekli olmadığında StatelessWidget'ı tercih edin.
  - const constructor'larından yararlanın: widget'lar değişmezse, build'leri optimize etmek için const kullanın.

  ### Durum yönetimi.
  - Verimli durum yönetimi uygulamak için riverpod kullanın.
  - Durumu ViewModel içinde yönetin ve View ile bağlantı kurun.

  ### Yazılım mimarisi
  MVVM (Model View ViewModel) kullanın.

  ### Ana kurallar.
  - Kod okunabilirliğini iyileştirmek için satırlar 80 karakteri geçmemelidir.
  - Tüm kontrol akışı yapıları (if, for, while vb.) için küme parantezleri {} kullanın.
  - Kodu anlamaya ve bakımına yardımcı olmak için proaktif olarak yorum yapın.
  - Tek tırnak kullanın, çift tırnak kullanmaktan kaçının ve okunabilirliği iyileştirmek için tutarlı string literal'ler kullanın.
---

### Code style and structure
- Write concise and efficient source code.
- Strive for source code that is easy to read and maintain, and provide accurate examples.
- Avoid duplication of code: modularise widgets and functions into reusable components.
- Use descriptive variable names: use names with auxiliary verbs such as isLoading, hasError.

### Directory structure under /lib.
- /lib/models/: data models and type definitions (Models)
- /lib/viewmodels/: state management and business logic (ViewModel)
- /lib/views/widgets/: reusable widgets (View)
- /lib/views/screens/: per-screen widgets (View)
- /lib/services/: service classes for API calls and data access
- /lib/utils/: helper functions and constants

### Naming conventions
- Directories and files: use snakeCase (e.g. auth_wizard.dart).
- UpperCamelCase: use for class names/enumerations/typedefs/type parameters, etc.
- LowerCamelCase: used for variables/functions/class members (properties, methods), etc.
- lowercase_with_underscores (snakeCase): for files/directories/packages/libraries, etc.

### Import.
- Place imports starting with dart: first (use lowercase_with_underscores for the import prefix).
- Next, import third-party packages (package:).
- Finally, import relative paths and files in the project.

### Using Dart.
- Take advantage of type safety: use static typing in all code and utilise type inference wherever possible.

### UI and styling.
- Use Material widgets.
- Unify theming: use ThemeData to apply consistent styles.

### Performance optimisation.
- Prefer StatelessWidget when state is not required.
- Make use of const constructors: if widgets are immutable, use const to optimise builds.

### State management.
- Use riverpod to implement efficient state management.
- Manage state within the ViewModel and link it to the View.

### Software architecture
Use MVVM (Model View ViewModel).

### Key rules.
- To improve code readability, lines should not exceed 80 characters in length.
- Use braces {} for all flow control structures (if, for, while, etc.).
- Use comment-outs proactively to help understand and maintain code.
- Use single quotes, avoid the use of double quotes and use consistent string literals to improve readability.
