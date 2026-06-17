---
name: "cpp"
clean_name: "Cpp"
description: "Guide Cursor to write modern C++ and CMake code with clear structure, RAII, const-correctness, and safe error handling."
description_tr: "Guide Cursor, modern C++ ve CMake kodlarını açık yapı, RAII, const-correctness ve güvenli error handling ile yazmanız için yardımcı olur."
category: "Languages"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/cpp.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/cpp.mdc"
body_length: 5064
file_extension: ".mdc"
body_tr: |-
  # C++ Programlama Kılavuzu

  ## Temel Prensipler

  - Tüm kod ve dokümantasyon için İngilizce kullanın.
  - Her zaman her değişkenin ve fonksiyonun türünü belirtin (parametreler ve dönüş değeri).
  - Gerekli türleri ve sınıfları oluşturun.
  - Genel sınıfları ve metodları dokümante etmek için Doxygen stil yorumlar kullanın.
  - Bir fonksiyon içinde boş satırlar bırakmayın.
  - Tek Tanım Kuralını (ODR) takip edin.

  ## Adlandırma Kuralları

  - Sınıflar ve yapılar için PascalCase kullanın.
  - Değişkenler, fonksiyonlar ve metodlar için camelCase kullanın.
  - Sabitler ve makrolar için ALL_CAPS kullanın.
  - Dosya ve dizin adları için snake_case kullanın.
  - Ortam değişkenleri için UPPERCASE kullanın.
  - Sihirli sayılardan kaçının ve sabitleri tanımlayın.
  - Her fonksiyonu bir fiil ile başlatın.
  - Boolean değişkenler için fiil kullanın. Örnek: isLoading, hasError, canDelete, vb.
  - Kısaltmalar yerine tam kelimeleri kullanın ve yazımın doğru olduğundan emin olun.
    - API, URL vb. gibi standart kısaltmalar hariç.
    - İyi bilinen kısaltmalar hariç:
      - i, j, k döngüler için
      - err hatalar için
      - ctx bağlamlar için
      - req, res istek/yanıt parametreleri için

  ## Fonksiyonlar

  - Tek amacı olan kısa fonksiyonlar yazın. 20 yönergenin altında.
  - Fonksiyonları bir fiil ve başka bir şeyle adlandırın.
  - Boolean döndürürse isX veya hasX, canX vb. kullanın.
  - Hiçbir şey döndürmüyorsa (void), executeX veya saveX vb. kullanın.
  - Blok iç içe geçmesinden kaçının:
    - Erken kontroller ve dönüşler.
    - Yardımcı fonksiyonlara çıkarma.
  - Fonksiyon iç içe geçmesini önlemek için standart kütüphane algoritmalarını (std::for_each, std::transform, std::find, vb.) kullanın.
  - Basit işlemler için lambda fonksiyonlarını kullanın.
  - Basit olmayan işlemler için adlandırılmış fonksiyonları kullanın.
  - Null veya nullptr kontrolü yapmak yerine varsayılan parametre değerlerini kullanın.
  - Yapıları veya sınıfları kullanarak fonksiyon parametrelerini azaltın
    - Birden fazla parametreyi geçmek için bir nesne kullanın.
    - Birden fazla sonucu döndürmek için bir nesne kullanın.
    - Giriş argümanları ve çıkış için gerekli türleri bildirin.
  - Tek bir soyutlama seviyesi kullanın.

  ## Veri

  - İlkel türleri kötüye kullanmayın ve verileri bileşik türlerde kapsülleyin.
  - Fonksiyonlarda veri doğrulamalarından kaçının ve iç doğrulama ile sınıflar kullanın.
  - Veri değişmezliğini tercih edin.
  - Değişmeyen veri için `const` kullanın.
  - Derleme zamanı sabitleri için `constexpr` kullanın.
  - Muhtemelen null olan değerler için `std::optional` kullanın.

  ## Sınıflar

  - SOLID prensiplerine uyun.
  - Kalıtım yerine bileşimi tercih edin.
  - Arayüzleri soyut sınıflar veya konseptler olarak bildirin.
  - Tek amacı olan küçük sınıflar yazın.
    - 200 yönergenin altında.
    - 10'dan az genel metod.
    - 10'dan az özellik.
  - Kaynak yönetimi için Beşli Kural'ı (veya Sıfır Kuralı'nı) kullanın.
  - Üye değişkenleri özel yapın ve gerektiğinde getter/setter'lar sağlayın.
  - Üye fonksiyonlar için const-doğruluk kullanın.

  ## İstisnalar

  - Beklemeyen hataları işlemek için istisnalar kullanın.
  - Bir istisna yakalarsanız, amaç şunlardan biri olmalıdır:
    - Beklenen bir sorunu düzeltmek.
    - Bağlam eklemek.
    - Aksi takdirde, küresel bir işleyici kullanın.
  - Beklenen başarısızlıklar için `std::optional`, `std::expected` veya hata kodlarını kullanın.

  ## Bellek Yönetimi

  - Ham işaretçilere göre akıllı işaretçileri (`std::unique_ptr`, `std::shared_ptr`) tercih edin.
  - RAII (Kaynak Satın Alma Başlatmadır) prensiplerine uyun.
  - Düzgün kaynak yönetimi ile bellek sızıntılarından kaçının.
  - C-tarzı diziler yerine `std::vector` ve diğer standart kapsayıcıları kullanın.

  ## Test Etme

  - Testler için Arrange-Act-Assert kuralını izleyin.
  - Test değişkenlerini açıkça adlandırın.
  - Şu kuralı takip edin: inputX, mockX, actualX, expectedX, vb.
  - Her genel fonksiyon için birim testleri yazın.
  - Bağımlılıkları simüle etmek için test çiftlerini kullanın.
    - Yürütülmesi pahalı olmayan üçüncü taraf bağımlılıklar hariç.
  - Her modül için entegrasyon testleri yazın.
  - Given-When-Then kuralını izleyin.

  ## Proje Yapısı

  - Modüler mimarisini kullanın
  - Kodu mantıksal dizinlere organize edin:
    - include/ başlık dosyaları için
    - src/ kaynak dosyaları için
    - test/ test dosyaları için
    - lib/ kütüphaneler için
    - doc/ dokümantasyon için
  - CMake veya benzer bir derleme sistemi kullanın.
  - Arayüzü (.h) uygulamadan (.cpp) ayırın.
  - Kodu mantıksal olarak organize etmek için ad alanlarını kullanın.
  - Temel bileşenler için bir core ad alanı oluşturun.
  - Yardımcı fonksiyonlar için bir utils ad alanı oluşturun.

  ## Standart Kütüphane

  - Mümkün olduğunda C++ Standart Kütüphanesini kullanın.
  - C-tarzı diziler yerine `std::string` tercih edin.
  - Koleksiyonlar için `std::vector`, `std::map`, `std::unordered_map` vb. kullanın.
  - Moderne tip güvenliği için `std::optional`, `std::variant`, `std::any` kullanın.
  - Dosya işlemleri için `std::filesystem` kullanın.
  - Zamana ilişkin işlemler için `std::chrono` kullanın.

  ## Eşzamanlılık

  - İş parçacığı güvenliği için `std::thread`, `std::mutex`, `std::lock_guard` kullanın.
  - İş parçacığı tabanlı paralelizm yerine görev tabanlı paralelizmi tercih edin.
  - Atomik işlemler için `std::atomic` kullanın.
  - Düzgün senkronizasyon ile veri yarışlarından kaçının.
  - Gerektiğinde iş parçacığı güvenli veri yapılarını kullanın.
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
