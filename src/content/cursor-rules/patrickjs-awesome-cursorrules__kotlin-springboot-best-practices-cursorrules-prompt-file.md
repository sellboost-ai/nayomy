---
name: "kotlin-springboot-best-practices-cursorrules-prompt-file"
clean_name: "Kotlin Springboot Best Practices"
description: "Cursor rules for Kotlin Springboot Best Practices."
description_tr: "Kotlin Springboot en iyi uygulamaları için Cursor kuralları."
category: "Mobile"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/kotlin-springboot-best-practices-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/kotlin-springboot-best-practices-cursorrules-prompt-file.mdc"
body_length: 7205
file_extension: ".mdc"
body_tr: |-
  # Kotlin Coding Best Practices for Spring Boot Development

  ## Project Structure and Organization

  1.	Kaynak kodunuzu controller, service, repository ve model gibi açıkça tanımlanmış paketlere bölerek endişeleri ayırın ve bakımı iyileştirin.
  2.	Dosya sisteminizi düzenleyin, böylece her dizin Kotlin paket adını yansıtsın (örneğin com.myapp.users'ı src/main/kotlin/com/myapp/users altına koyun).
  3.	Her Kotlin dosyasını içerdiği birincil sınıf veya konseptin adına göre adlandırarak kod tabanını gezinmeyi ve anlamayı kolaylaştırın.
  4.	Utils.kt gibi belirsiz dosya adlarından kaçının; bunun yerine dosyanın içeriğinin amacını yansıtan kısa ve anlamlı adlar kullanın.
  5.	Spring Boot uygulamanızın entry point'ini kök pakete yerleştirin ve alt paketleri katmana veya özelliğe göre yapılandırarak Spring'in bileşenleri verimli bir şekilde taramasına ve organize etmesine yardımcı olun.

  ## Coding Style and Conventions

  1.	Sınıf ve nesne adları için PascalCase, fonksiyonlar ve değişkenler için camelCase ve sabitler için UPPER_SNAKE_CASE kullanarak Kotlin naming kurallarını takip edin ve okunabilirliği iyileştirin.
  2.	Değişkenleri varsayılan olarak `val` kullanarak bildirin ve yalnızca mutasyon gerekli olduğunda `var` kullanarak daha güvenli ve öngörülebilir kod yazın.
      ```kotlin
      val maxConnections = 10    // immutable reference
      var currentUsers = 0       // mutable, try to avoid if possible
      ``` 
  3.	Değişken kapsamını gerçekten kullanıldığı yere sınırlayın—fonksiyonlar içinde veya daha küçük bloklarda—kazara yanlış kullanımı önleyin ve kodu izlemeyi kolaylaştırın.
  4.	Kodunuzu 4 boşluk girintisi, operatörler ve virgüllerin etrafında uygun boşluk ve kısa, odaklanmış fonksiyonlar kullanarak tutarlı bir şekilde biçimlendirin.
  5.	Akıllı tek satırlar yerine açık ve anlaşılır kod yazın; karmaşık mantığı ara değişkenlere veya iyi adlandırılmış fonksiyonlara bölerek okunabilirliği iyileştirin.
  6.	Sınıfları, fonksiyonları ve değişkenleri açıklayıcı bir şekilde adlandırarak niyeti iletip '-Manager' veya '-Helper' gibi muğlak son eklerden kaçının.
  7.	Özellik getter ve setter'larını basit tutun ve ağır mantıktan uzak tutun; karmaşık davranış gerekiyorsa, özellik erişimini öngörülebilir tutmak için bunu ayrı bir metoda taşıyın.

  ## Idiomatic Kotlin Usage

  1.	DTO'ları ve entity'leri tanımlamak için `data class` kullanarak `equals()` ve `copy()` gibi kullanışlı metodları boilerplate kod yazmadan alın.
  2.	Aşırı yüklenmiş yapıcıları varsayılan ve adlandırılmış parametrelerle değiştirerek fonksiyon çağrılarını basitleştirin ve daha anlaşılır hale getirin.
      ```kotlin
      // Kotlin – use default parameters
      fun createConnection(host: String, secure: Boolean = true) { … }

      createConnection("example.com")                      // uses default secure=true
      createConnection(host = "test.com", secure = false)  // named arg for clarity
      ``` 
  3.	Uzun `if-else` zincirlerinin yerine `when` ifadelerini kullanarak daha temiz, okunması kolay koşullu mantık yazın ve her durumu açıkça işleyin.
  4.	Yardımcı sınıflar yerine extension function'lar oluşturarak mevcut tiplere yeniden kullanılabilir davranış ekleyin ve daha doğal ve okunabilir bir yolla yapın.
      ```kotlin
      fun String.capitalizeFirst(): String = replaceFirstChar { it.uppercaseChar() }

      println("kotlin".capitalizeFirst())  // prints "Kotlin"
      ```
  5.	`apply`, `let`, `also`, `run` ve `with` gibi scope function'ları kullanarak tekrarlamayı azaltın ve nesne yapılandırması veya null-safe operasyonları açıkça ifade edin.
  6.	Değişkenleri yalnızca gerekli olduğunda nullable olarak bildirin ve safe-call operatörü (`?.`) ve Elvis operatörü (`?:`) kullanarak onları işleyin ve runtime çökmelerini önleyin.
  7.	Not-null assertion (`!!`) kullanmaktan kaçının ve bunun yerine fallback değerleri veya açık null kontrolleri sağlayarak daha güvenli ve öngörülebilir kod yazın.
  8.	Java API'lerindeki platform türlerini hemen `String` veya `String?` değerine açıkça dönüştürerek işleyin ve Kotlin kodunuzda nullability belirsizliğinin yayılmasını önleyin.
  9.	Manuel döngüler yerine `filter`, `map` ve `forEach` gibi Kotlin'in fonksiyonel collection operasyonlarını kullanarak kısa ve anlaşılır veri dönüştürme mantığı yazın.
      ```kotlin
      // Imperative approach
      val activeUsers = mutableListOf<User>()
      for (user in users) {
          if (user.isActive) activeUsers.add(user)
      }

      // Idiomatic functional approach
      val activeUsers = users.filter { it.isActive }
      ``` 
  10.	Mantık açık olduğunda basit fonksiyonları tek-ifade fonksiyonlara dönüştürün, gereksiz sözdizimini ortadan kaldırın ve kod kısalığını iyileştirin.
      ```kotlin
      fun toDto(entity: User) = UserDto(name = entity.name, email = entity.email)
      ``` 
  11.	Birleştirme yerine string template'leri (`$var` veya `${expression}`) kullanarak string'ler oluşturun ve temiz çok satırlı metin için üçlü tırnaklı string'ler kullanın.

  ## Implementation Patterns and Design

  1.	`val` kullanarak constructor parametreleri aracılığıyla bağımlılıkları inject edin ve onları değişmez tutarak Spring ve Kotlin idiomları uyumlu hale getirin.
      ```kotlin
      @Service
      class OrderService(
          private val orderRepo: OrderRepository,
          private val notifier: Notifier
      ) {
          // ...
      }
      ``` 
  2.	Sınıfları varsayılan olarak `final` tutun ve Spring'in 'all-open' plugin'inin proxy generation'ı işlemesine izin vererek open modifier'ını manuel olarak eklemenize gerek kalmayacak.
  3.	True singleton'lar veya stateless utility holder'lar için static metodlar veya Java tarzı singleton'lar yerine Kotlin'in `object` bildirimi kullanın.
  4.	Derin kalıtım hiyerarşilerine güvenmek yerine küçük, odaklanmış sınıfları birleştirerek veya üst düzey fonksiyonları kullanarak composition'u tercih edin.
  5.	Bir tipteki sınırlı, kapalı bir değişken kümesine sahip olduğunuzda sealed class'ları tanımlayarak exhaustive handling'i zorunlu kılın ve `when` ifadelerindeki tip güvenliğini iyileştirin.
      ```kotlin
      sealed class Result<out T>
      data class Success<T>(val data: T): Result<T>()
      data class Error(val exception: Throwable): Result<Nothing>()
      ``` 
  6.	İş mantığında magic string'ler veya ham değerler kullanmaktan kaçınarak sabit kümeleri modellemek için `enum class` kullanın.
  7.	"not found" veya "invalid input" gibi beklenen senaryolar için istisnalar fırlatmak yerine nullable türler, sealed class'lar veya sonuç wrapper'ları döndürün.
  8.	Akış ve dosya handle'ları gibi kaynakları güvenli bir şekilde yönetmek ve kapatmak için `use` fonksiyonunu her zaman kullanın, bir istisna oluşsa bile kapatıldığından emin olun.
      ```kotlin
      FileInputStream("data.txt").use { stream ->
          // read from stream 
      } // stream is automatically closed here
      ``` 
  9.	Bileşenlerinizin görünürlüğünü `private` veya `internal` kullanarak minimize edin ve yalnızca gerçekten gerekli olanı public olarak ortaya koymak.
  10.	Callback hell'den kaçınarak temiz, asynchronous backend kodu yazmak için suspend function'ları ve `launch` ya da `async` gibi coroutine builder'larını içeren Kotlin coroutine'lerini kullanın.
  11.	Kotlin'in `lazy`, `observable`, `infix` ve operator overloading gibi standart kütüphane özelliklerinden yararlanarak kısa, anlaşılır ve idiyomatik kod yazın.
  12.	JPA gerekliliklerini karşılarken modellerinizi güvenli ve thread-friendly tutmak için `val` alanlarıyla değişmez data class entity'leri ve Kotlin'in JPA plugin'ini kullanın.
  13.	İş mantığınız için dependency injection ve pure function'ları kullanarak birim testleri yazın ve testi straightforward ve Spring'in context'inden bağımsız hale getirin.
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
