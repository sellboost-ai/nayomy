---
name: "kotlin-springboot-best-practices-cursorrules-prompt-file"
clean_name: "Kotlin Springboot Best Practices"
description: "Cursor rules for Kotlin Springboot Best Practices."
description_tr: "Kotlin Springboot en iyi uygulamaları için Cursor kuralları."
category: "Mobile"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/kotlin-springboot-best-practices-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/kotlin-springboot-best-practices-cursorrules-prompt-file.mdc"
body_length: 7205
file_extension: ".mdc"
body_tr: |-
  # Kotlin Coding Best Practices for Spring Boot Development

  ## Proje Yapısı ve Organizasyonu

  1.	Kaynak kodunuzu controller, service, repository ve model gibi açıkça tanımlanmış paketlere gruplayarak endişeleri ayırın ve bakımlanabilirliği artırın.
  2.	Dosya sisteminizi öyle düzenleyin ki her dizin Kotlin paket adını yansıtsın (örneğin com.myapp.users paketini src/main/kotlin/com/myapp/users altına yerleştirin).
  3.	Her Kotlin dosyasını içerdiği birincil sınıf veya konsept adına göre adlandırın böylece kod tabanında gezinmek ve anlamak daha kolay olur.
  4.	Utils.kt gibi muğlak dosya adlarından kaçının; bunun yerine dosyanın içeriğinin amacını yansıtan özlü ve anlamlı adlar kullanın.
  5.	Spring Boot uygulamanızın giriş noktasını root paketine yerleştirin ve alt paketleri katman veya özelliğe göre yapılandırarak Spring'in bileşenleri verimli bir şekilde taraması ve organize etmesine yardımcı olun.

  ## Kodlama Stili ve Kuralları

  1.	Sınıf ve nesne adları için PascalCase, fonksiyonlar ve değişkenler için camelCase ve sabitler için UPPER_SNAKE_CASE kullanarak Kotlin adlandırma kurallarına uyun ve okunabilirliği artırın.
  2.	Değişkenleri varsayılan olarak `val` kullanarak bildirin ve yalnızca mutasyon gerekli olduğunda `var` kullanın böylece daha güvenli ve öngörülebilir kod yazın.
      ```kotlin
      val maxConnections = 10    // immutable reference
      var currentUsers = 0       // mutable, try to avoid if possible
      ``` 
  3.	Değişkenlerin kapsamını gerçekten kullanıldıkları yere (fonksiyonlar veya daha küçük bloklar içinde) sınırlayarak yanlışlıkla yanlış kullanımı önleyin ve kodu takip etmeyi kolaylaştırın.
  4.	Kodunuzu tutarlı bir şekilde 4 boşluk girintisi, operatörler ve virgüller etrafında doğru boşluklandırma ve kısa, odaklanmış fonksiyonlar kullanarak biçimlendirin böylece netliği ve bakımlanabilirliği artırın.
  5.	Akıllıca tek satırlık çözümler yerine açık ve ifadeli kod yazın; karmaşık mantığı ara değişkenlere veya iyi adlandırılmış fonksiyonlara ayırarak okunabilirliği artırın.
  6.	Sınıfları, fonksiyonları ve değişkenleri tanımlayıcı bir şekilde adlandırarak amacı iletişim kurun ve '-Manager' veya '-Helper' gibi anlam katmayan muğlak son ekleri kullanmaktan kaçının.
  7.	Property getter ve setter'ları basit ve ağır mantıktan uzak tutun; karmaşık davranış gerekiyorsa bunu ayrı bir metoda taşıyarak property erişimini öngörülebilir tutun.

  ## İdiyomatik Kotlin Kullanımı

  1.	DTO'lar ve entity'ler tanımlamak için data class kullanın böylece boilerplate kod yazmadan `equals()` ve `copy()` gibi yararlı metotları otomatik olarak elde edin.
  2.	Aşırı yüklenmiş constructor'ları varsayılan ve adlandırılmış parametrelerle değiştirerek fonksiyon çağrılarını basitleştirin ve daha ifadeli hale getirin.
      ```kotlin
      // Kotlin – use default parameters
      fun createConnection(host: String, secure: Boolean = true) { … }

      createConnection("example.com")                      // uses default secure=true
      createConnection(host = "test.com", secure = false)  // named arg for clarity
      ``` 
  3.	Uzun `if-else` zincirlerinin yerine `when` ifadeleri kullanarak daha temiz, okunabilir koşullu mantık yazın ve her durumu açıkça ele alın.
  4.	Yardımcı sınıflar yerine extension function'lar oluşturarak mevcut tiplere yeniden kullanılabilir davranış eklemeyi daha doğal ve okunabilir bir şekilde yapın.
      ```kotlin
      fun String.capitalizeFirst(): String = replaceFirstChar { it.uppercaseChar() }

      println("kotlin".capitalizeFirst())  // prints "Kotlin"
      ```
  5.	Tekrarı azaltmak ve nesne konfigürasyonunu veya null-safe işlemleri açıkça ifade etmek için `apply`, `let`, `also`, `run` ve `with` gibi scope function'ları kullanın.
  6.	Değişkenleri yalnızca gerekli olduğunda nullable olarak bildirin ve safe-call operatörü (`?.`) ve Elvis operatörü (`?:`) kullanarak ele alın böylece runtime çökmelerini önleyin.
  7.	Null değeri assert etme (`!!`) kullanmaktan kaçının ve bunun yerine fallback değerler veya açık null kontrolleri sağlayarak daha güvenli ve öngörülebilir kod yazın.
  8.	Java API'lerinden gelen platform tiplerini hemen açık bir şekilde `String` veya `String?` olarak cast ederek ele alın böylece Kotlin kodunuzda null-ability belirsizliğinin yayılmasını önleyin.
  9.	Manuel döngüler yerine `filter`, `map` ve `forEach` gibi Kotlin'in fonksiyonel collection işlemlerini kullanarak özlü ve ifadeli veri dönüşümü mantığı yazın.
      ```kotlin
      // Imperative approach
      val activeUsers = mutableListOf<User>()
      for (user in users) {
          if (user.isActive) activeUsers.add(user)
      }

      // Idiomatic functional approach
      val activeUsers = users.filter { it.isActive }
      ``` 
  10.	Mantık açık olduğunda basit fonksiyonları tek ifade fonksiyonlara dönüştürerek gereksiz söz dizimini ortadan kaldırın ve kod kısalığını artırın.
      ```kotlin
      fun toDto(entity: User) = UserDto(name = entity.name, email = entity.email)
      ``` 
  11.	Birleştirme yerine string template'leri (`$var` veya `${expression}`) kullanarak string'ler oluşturun ve temiz çok satırlı metinler için üçlü tırnaklı string'ler kullanın.

  ## İmplementasyon Desenleri ve Tasarımı

  1.	Constructor parametreleri aracılığıyla bağımlılıkları `val` kullanarak inject edin böylece onları değişmez tutun ve Spring ile Kotlin idiomlarına uygun olun.
      ```kotlin
      @Service
      class OrderService(
          private val orderRepo: OrderRepository,
          private val notifier: Notifier
      ) {
          // ...
      }
      ``` 
  2.	Sınıfları varsayılan olarak `final` tutun ve Spring'in 'all-open' plugin'i proxy generation'ı ele almasına izin verin böylece open modifier'ı manuel olarak eklemeniz gerekmez.
  3.	Statik metotlar veya Java-style singleton'lar yerine gerçek singleton'lar veya durum içermeyen utility tutucular için Kotlin'in `object` bildirişini kullanın.
  4.	Derin kalıtım hiyerarşilerine güvenmek yerine küçük, odaklanmış sınıfları birleştirerek veya üst düzey fonksiyonları kullanarak composition'u tercih edin.
  5.	Bir tip sınırlı, kapalı bir varyant kümesine sahip olduğunda sealed class'lar tanımlayarak `when` ifadelerinde exhaustive işlemeyi zorunlu kılın ve tip güvenliğini artırın.
      ```kotlin
      sealed class Result<out T>
      data class Success<T>(val data: T): Result<T>()
      data class Error(val exception: Throwable): Result<Nothing>()
      ``` 
  6.	Sabit bir dizi model'lemek için enum class kullanarak mantık içerebilen magic string'ler veya raw değerler kullanmaktan kaçının.
  7.	"bulunamadı" veya "geçersiz girdi" gibi beklenen senaryolar için istisna atmak yerine nullable tipleri, sealed class'ları veya result wrapper'ları döndürün.
  8.	Stream'ler ve dosya handle'ları gibi kaynakları güvenli bir şekilde yönetmek ve kapatmak için `use` fonksiyonunu kullanın, bir istisna oluşsa bile kapalı olduğundan emin olun.
      ```kotlin
      FileInputStream("data.txt").use { stream ->
          // read from stream 
      } // stream is automatically closed here
      ``` 
  9.	Bileşenlerinizin görünürlüğünü mümkün olduğu kadar `private` veya `internal` kullanarak küçültün ve gerçekten gerekli olan şeyleri public olarak ifşa edin.
  10.	Callback hell'e düşmeden temiz, asynchronous backend kodu yazmak için suspend fonksiyonlar ve `launch` veya `async` gibi coroutine builder'larla Kotlin coroutines kullanın.
  11.	Özlü, ifadeli ve idiyomatik kod yazmak için `lazy`, `observable`, `infix` ve operator overloading gibi Kotlin standart kütüphanesi özelliklerinden yararlanın.
  12.	JPA gereksinimlerini karşılarken modellerinizi güvenli ve thread-friendly tutmak için `val` alanları ve Kotlin'in JPA plugin'ini kullanarak değişmez data class entity'leri kullanın.
  13.	Bağımlılık injection ve saf fonksiyonlar kullanarak iş mantığınız için unit test'ler yazarak test'i Spring'in kontekstinden bağımsız ve basit hale getirin.
---

# Kotlin Coding Best Practices for Spring Boot Development

## Project Structure and Organization

1.	Group your source code into clearly defined packages like controller, service, repository, and model to separate concerns and improve maintainability.
2.	Organize your file system so that each directory mirrors the Kotlin package name (e.g. put com.myapp.users under src/main/kotlin/com/myapp/users).
3.	Name each Kotlin file after the primary class or concept it contains to make the codebase easier to navigate and understand.
4.	Avoid vague file names like Utils.kt; instead, use concise and meaningful names that reflect the purpose of the file’s contents.
5.	Place your Spring Boot application entry point in the root package and structure sub-packages by layer or feature to help Spring scan and organize components efficiently.

## Coding Style and Conventions

1.	Use PascalCase for class and object names, camelCase for functions and variables, and UPPER_SNAKE_CASE for constants to follow Kotlin naming conventions and improve readability.
2.	Declare variables using `val` by default, and only use `var` when mutation is necessary to promote safer, more predictable code.
    ```kotlin
    val maxConnections = 10    // immutable reference
    var currentUsers = 0       // mutable, try to avoid if possible
    ``` 
3.	Limit the scope of variables to where they are actually used—inside functions or smaller blocks—to avoid accidental misuse and make code easier to follow.
4.	Format your code consistently using 4-space indentation, proper spacing around operators and commas, and short, focused functions to improve clarity and maintainability.
5.	Write clear and expressive code instead of clever one-liners; break complex logic into intermediate variables or well-named functions to improve readability.
6.	Name classes, functions, and variables descriptively to convey intent, and avoid vague suffixes like '-Manager' or '-Helper' that don’t add meaning.
7.	Keep property getters and setters simple and free of heavy logic; if complex behavior is needed, move it into a separate method to keep property access predictable.

## Idiomatic Kotlin Usage

1.	Use data class to define DTOs and entities so you get useful methods like `equals()` and `copy()` without writing boilerplate code.
2.	Replace overloaded constructors with default and named parameters to simplify function calls and make them more expressive.
    ```kotlin
    // Kotlin – use default parameters
    fun createConnection(host: String, secure: Boolean = true) { … }

    createConnection("example.com")                      // uses default secure=true
    createConnection(host = "test.com", secure = false)  // named arg for clarity
    ``` 
3.	Use `when` expressions instead of long `if-else` chains to write cleaner, more readable conditional logic that clearly handles each case.
4.	Create extension functions instead of utility classes to add reusable behavior to existing types in a more natural and readable way.
    ```kotlin
    fun String.capitalizeFirst(): String = replaceFirstChar { it.uppercaseChar() }

    println("kotlin".capitalizeFirst())  // prints "Kotlin"
    ```
5.	Use scope functions like `apply`, `let`, `also`, `run`, and `with` to reduce repetition and clearly express object configuration or null-safe operations.
6.	Declare variables as nullable only when necessary, and handle them using safe-call operators (`?.`) and the Elvis operator (`?:`) to avoid runtime crashes.
7.	Avoid using the not-null assertion (`!!`) and instead provide fallback values or explicit null checks to write safer and more predictable code.
8.	Handle platform types from Java APIs immediately by explicitly casting them to `String` or `String?` to avoid spreading nullability uncertainty in your Kotlin code.
9.	Use Kotlin’s functional collection operations like `filter`, `map`, and `forEach` instead of manual loops to write concise and expressive data transformation logic.
    ```kotlin
    // Imperative approach
    val activeUsers = mutableListOf<User>()
    for (user in users) {
        if (user.isActive) activeUsers.add(user)
    }

    // Idiomatic functional approach
    val activeUsers = users.filter { it.isActive }
    ``` 
10.	Convert simple functions into single-expression functions when the logic is clear, to eliminate unnecessary syntax and improve code brevity.
    ```kotlin
    fun toDto(entity: User) = UserDto(name = entity.name, email = entity.email)
    ``` 
11.	Build strings using string templates (`$var` or `${expression}`) instead of concatenation, and use triple-quoted strings for clean multi-line text.

## Implementation Patterns and Design

1.	Inject dependencies via constructor parameters using `val` to keep them immutable and to align with Spring and Kotlin idioms.
    ```kotlin
    @Service
    class OrderService(
        private val orderRepo: OrderRepository,
        private val notifier: Notifier
    ) {
        // ...
    }
    ``` 
2.	Keep classes `final` by default, and let Spring’s 'all-open' plugin handle proxy generation so you don’t need to manually add the open modifier.
3.	Use Kotlin’s `object` declaration for true singletons or stateless utility holders instead of static methods or Java-style singletons.
4.	Favor composition by combining small, focused classes or using higher-order functions instead of relying on deep inheritance hierarchies.
5.	Define sealed classes when a type has a limited, closed set of variants to enforce exhaustive handling and improve type safety in `when` expressions.
    ```kotlin
    sealed class Result<out T>
    data class Success<T>(val data: T): Result<T>()
    data class Error(val exception: Throwable): Result<Nothing>()
    ``` 
6.	Use enum class to model fixed sets of constants that may contain logic, avoiding magic strings or raw values in business logic.
7.	Return nullable types, sealed classes, or result wrappers instead of throwing exceptions for expected scenarios like “not found” or “invalid input”.
8.	Always `use` the use function to safely manage and close resources like streams and file handles, ensuring they are closed even if an exception occurs.
    ```kotlin
    FileInputStream("data.txt").use { stream ->
        // read from stream 
    } // stream is automatically closed here
    ``` 
9.	Minimize visibility of your components by using `private` or `internal` where possible, and only expose what’s truly necessary as public.
10.	Use Kotlin coroutines with suspend functions and coroutine builders like `launch` or `async` to write clean, asynchronous backend code without callback hell.
11.	Leverage Kotlin’s standard library features like `lazy`, `observable`, `infix`, and operator overloading to write concise, expressive, and idiomatic code.
12.	Use immutable data class entities with `val` fields and Kotlin’s JPA plugin to satisfy JPA requirements while keeping your models safe and thread-friendly.
13.	Write unit tests for your business logic using dependency injection and pure functions to make testing straightforward and independent from Spring’s context.
