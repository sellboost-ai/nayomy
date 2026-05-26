---
name: "cpp-programming-guidelines-cursorrules-prompt-file"
clean_name: "Cpp Programming Guidelines"
description: "Cursor rules for C++ development with programming guidelines integration."
description_tr: "C++ geliştirme için imleç kuralları ve programlama yönergeleri entegrasyonu."
category: "Languages"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/cpp-programming-guidelines-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/cpp-programming-guidelines-cursorrules-prompt-file.mdc"
body_length: 4930
file_extension: ".mdc"
body_tr: |-
  # C++ Programlama Yönergeleri

  ## Temel Prensipler

  - Tüm kod ve dokümantasyon için İngilizce kullanın.
  - Her zaman her değişkenin ve fonksiyonun türünü açıkça belirtin (parametreler ve dönüş değeri).
  - Gerekli türleri ve sınıfları oluşturun.
  - Genel sınıfları ve metotları belgelemek için Doxygen stil yorumlar kullanın.
  - Bir fonksiyonun içinde boş satırlar bırakmayın.
  - One-Definition Rule (ODR) kuralına uyun.

  ## Adlandırma Kuralları

  - Sınıflar ve yapılar için PascalCase kullanın.
  - Değişkenler, fonksiyonlar ve metotlar için camelCase kullanın.
  - Sabitler ve makrolar için ALL_CAPS kullanın.
  - Dosya ve dizin adları için snake_case kullanın.
  - Ortam değişkenleri için UPPERCASE kullanın.
  - Magic number kullanmaktan kaçının ve sabitleri tanımlayın.
  - Her fonksiyonu bir fiil ile başlatın.
  - Boolean değişkenleri için fiilleri kullanın. Örnek: isLoading, hasError, canDelete, vb.
  - Kısaltmalar yerine tam kelimeleri kullanın ve yazımı doğru olduğundan emin olun.
    - API, URL gibi standart kısaltmalar hariç.
    - Yaygın kısaltmalar hariç:
      - i, j, k döngüler için
      - err hatalar için
      - ctx bağlamlar için
      - req, res istek/yanıt parametreleri için

  ## Fonksiyonlar

  - Tek amacı olan kısa fonksiyonlar yazın. 20 talimatın altında.
  - Fonksiyonları bir fiil ve başka bir şey ile adlandırın.
  - Boolean döndürüyorsa, isX veya hasX, canX, vb. kullanın.
  - Hiçbir şey döndürmüyorsa (void), executeX veya saveX, vb. kullanın.
  - Blokları iç içe geçirmekten kaçının:
    - Erken kontroller ve dönüşler yaparak.
    - Utility fonksiyonlara çıkartarak.
  - Fonksiyon iç içe geçmesini önlemek için standart kütüphane algoritmalarını (std::for_each, std::transform, std::find, vb.) kullanın.
  - Basit işlemler için lambda fonksiyonları kullanın.
  - Basit olmayan işlemler için adlandırılmış fonksiyonlar kullanın.
  - Null veya nullptr kontrolü yerine varsayılan parametre değerlerini kullanın.
  - Fonksiyon parametrelerini structlar veya sınıfları kullanarak azaltın
    - Birden fazla parametre geçirmek için bir nesne kullanın.
    - Birden fazla sonuç döndürmek için bir nesne kullanın.
    - Giriş argümanları ve çıkışı için gerekli türleri bildirin.
  - Tek bir soyutlama seviyesi kullanın.

  ## Veri

  - İlkel türleri kötüye kullanmayın ve veriyi bileşik türlerde kapsülleyin.
  - Fonksiyonlarda veri doğrulamasından kaçının ve iç doğrulamaya sahip sınıflar kullanın.
  - Veri değişmezliğini tercih edin.
  - Değişmeyen veriler için const kullanın.
  - Derleme zamanı sabitleri için constexpr kullanın.
  - Muhtemelen null olan değerler için std::optional kullanın.

  ## Sınıflar

  - SOLID prensiplerine uyun.
  - Kalıtımdan ziyade bileşimi tercih edin.
  - Arabirimleri soyut sınıflar veya konseptler olarak bildirin.
  - Tek bir amacı olan küçük sınıflar yazın.
    - 200 talimatın altında.
    - 10 özel metottan az.
    - 10 özellikten az.
  - Kaynak yönetimi için Rule of Five (veya Rule of Zero) kullanın.
  - Üye değişkenlerini özel yapın ve gerekli yerlerde getter/setter sağlayın.
  - Üye fonksiyonları için const-correctness kullanın.

  ## İstisnalar

  - Beklemediğiniz hataları ele almak için istisnaları kullanın.
  - Bir istisnayı yakalarsa, bunun nedeni şu olmalıdır:
    - Beklenen bir sorunu çözmek.
    - Bağlam eklemek.
    - Aksi takdirde, genel bir işleyici kullanın.
  - Beklenen başarısızlıklar için std::optional, std::expected veya hata kodlarını kullanın.

  ## Bellek Yönetimi

  - Ham işaretçiler yerine akıllı işaretçileri (std::unique_ptr, std::shared_ptr) tercih edin.
  - RAII (Resource Acquisition Is Initialization) prensiplerini kullanın.
  - Uygun kaynak yönetimi ile bellek sızıntılarını önleyin.
  - C tarzı diziler yerine std::vector ve diğer standart konteynerleri kullanın.

  ## Test Etme

  - Testler için Arrange-Act-Assert kuralını izleyin.
  - Test değişkenlerini açık bir şekilde adlandırın.
  - Şu kuralı izleyin: inputX, mockX, actualX, expectedX, vb.
  - Her genel fonksiyon için birim testleri yazın.
  - Bağımlılıkları simüle etmek için test double'ları kullanın.
    - Yürütülmesi pahalı olmayan üçüncü taraf bağımlılıkları hariç.
  - Her modül için entegrasyon testleri yazın.
  - Given-When-Then kuralını izleyin.

  ## Proje Yapısı

  - Modüler mimari kullanın
  - Kodu mantıksal dizinlere düzenleyin:
    - include/ başlık dosyaları için
    - src/ kaynak dosyaları için
    - test/ test dosyaları için
    - lib/ kütüphaneler için
    - doc/ dokümantasyon için
  - CMake veya benzer bir derleme sistemi kullanın.
  - Arabirimi (.h) uygulamadan (.cpp) ayırın.
  - Kodu mantıksal olarak organize etmek için ad alanlarını kullanın.
  - Temel bileşenler için bir core ad alanı oluşturun.
  - Yardımcı fonksiyonlar için bir utils ad alanı oluşturun.

  ## Standart Kütüphane

  - Mümkün olduğunda C++ Standart Kütüphanesini kullanın.
  - C tarzı dizeler yerine std::string tercih edin.
  - Koleksiyonlar için std::vector, std::map, std::unordered_map, vb. kullanın.
  - Modern tür güvenliği için std::optional, std::variant, std::any kullanın.
  - Dosya işlemleri için std::filesystem kullanın.
  - Zaman ile ilgili işlemler için std::chrono kullanın.

  ## Eşzamanlılık

  - İş parçacığı güvenliği için std::thread, std::mutex, std::lock_guard kullanın.
  - İş parçacığı tabanlı paralelizmden ziyade görev tabanlı paralelizmi tercih edin.
  - Atomik işlemler için std::atomic kullanın.
  - Uygun senkronizasyon ile veri yarışlarından kaçının.
  - Gerekli olduğunda iş parçacığı güvenli veri yapılarını kullanın.
---

# C++ Programming Guidelines

## Basic Principles

- Use English for all code and documentation.
- Always declare the type of each variable and function (parameters and return value).
- Create necessary types and classes.
- Use Doxygen style comments to document public classes and methods.
- Don't leave blank lines within a function.
- Follow the one-definition rule (ODR).

## Nomenclature

- Use PascalCase for classes and structures.
- Use camelCase for variables, functions, and methods.
- Use ALL_CAPS for constants and macros.
- Use snake_case for file and directory names.
- Use UPPERCASE for environment variables.
- Avoid magic numbers and define constants.
- Start each function with a verb.
- Use verbs for boolean variables. Example: isLoading, hasError, canDelete, etc.
- Use complete words instead of abbreviations and ensure correct spelling.
  - Except for standard abbreviations like API, URL, etc.
  - Except for well-known abbreviations:
    - i, j, k for loops
    - err for errors
    - ctx for contexts
    - req, res for request/response parameters

## Functions

- Write short functions with a single purpose. Less than 20 instructions.
- Name functions with a verb and something else.
- If it returns a boolean, use isX or hasX, canX, etc.
- If it doesn't return anything (void), use executeX or saveX, etc.
- Avoid nesting blocks by:
  - Early checks and returns.
  - Extraction to utility functions.
- Use standard library algorithms (std::for_each, std::transform, std::find, etc.) to avoid function nesting.
- Use lambda functions for simple operations.
- Use named functions for non-simple operations.
- Use default parameter values instead of checking for null or nullptr.
- Reduce function parameters using structs or classes
  - Use an object to pass multiple parameters.
  - Use an object to return multiple results.
  - Declare necessary types for input arguments and output.
- Use a single level of abstraction.

## Data

- Don't abuse primitive types and encapsulate data in composite types.
- Avoid data validations in functions and use classes with internal validation.
- Prefer immutability for data.
- Use const for data that doesn't change.
- Use constexpr for compile-time constants.
- Use std::optional for possibly null values.

## Classes

- Follow SOLID principles.
- Prefer composition over inheritance.
- Declare interfaces as abstract classes or concepts.
- Write small classes with a single purpose.
  - Less than 200 instructions.
  - Less than 10 public methods.
  - Less than 10 properties.
- Use the Rule of Five (or Rule of Zero) for resource management.
- Make member variables private and provide getters/setters where necessary.
- Use const-correctness for member functions.

## Exceptions

- Use exceptions to handle errors you don't expect.
- If you catch an exception, it should be to:
  - Fix an expected problem.
  - Add context.
  - Otherwise, use a global handler.
- Use std::optional, std::expected, or error codes for expected failures.

## Memory Management

- Prefer smart pointers (std::unique_ptr, std::shared_ptr) over raw pointers.
- Use RAII (Resource Acquisition Is Initialization) principles.
- Avoid memory leaks by proper resource management.
- Use std::vector and other standard containers instead of C-style arrays.

## Testing

- Follow the Arrange-Act-Assert convention for tests.
- Name test variables clearly.
- Follow the convention: inputX, mockX, actualX, expectedX, etc.
- Write unit tests for each public function.
- Use test doubles to simulate dependencies.
  - Except for third-party dependencies that are not expensive to execute.
- Write integration tests for each module.
- Follow the Given-When-Then convention.

## Project Structure

- Use modular architecture
- Organize code into logical directories:
  - include/ for header files
  - src/ for source files
  - test/ for test files
  - lib/ for libraries
  - doc/ for documentation
- Use CMake or similar build system.
- Separate interface (.h) from implementation (.cpp).
- Use namespaces to organize code logically.
- Create a core namespace for foundational components.
- Create a utils namespace for utility functions.

## Standard Library

- Use the C++ Standard Library whenever possible.
- Prefer std::string over C-style strings.
- Use std::vector, std::map, std::unordered_map, etc. for collections.
- Use std::optional, std::variant, std::any for modern type safety.
- Use std::filesystem for file operations.
- Use std::chrono for time-related operations.

## Concurrency

- Use std::thread, std::mutex, std::lock_guard for thread safety.
- Prefer task-based parallelism over thread-based parallelism.
- Use std::atomic for atomic operations.
- Avoid data races by proper synchronization.
- Use thread-safe data structures when necessary.
