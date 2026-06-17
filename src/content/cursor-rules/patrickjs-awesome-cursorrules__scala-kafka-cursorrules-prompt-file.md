---
name: "scala-kafka-cursorrules-prompt-file"
clean_name: "Scala Kafka"
description: "Cursor rules for Scala Kafka."
description_tr: "Scala Kafka için Cursor kuralları."
category: "Languages"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/scala-kafka-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/scala-kafka-cursorrules-prompt-file.mdc"
body_length: 4652
file_extension: ".mdc"
body_tr: |-
  # general-scala-clean-code.mdc

  - val/var bildirimleri mümkün olduğunca ilk kullanıma yakın yerleştirilmelidir.
  - İsim uzunluğu scope ile orantılı olmalıdır: 1-2 karakter sadece küçük lambda'lar içinde kullanılabilir.
  - İkiden daha derinlemesine for-comprehension'lar kullanmaktan kaçının; adımları yardımcı fonksiyonlara ayırın.
  - Tek bir kaynak dosyayı sorumluluğa göre bölün.
  - Uygun yerlerde *tail-rec* optimizasyonunu (`@tailrec`) kullanın.
  - *immutable* collection'ları tercih edin ve iterasyon sırasında mutation'dan kaçının.
  - Java interop'u zorla mutability gerektirdiğinde, .asScala kullanarak bunu pure bir façade'ı içinde sarmalayın ve fonksiyonel API'yi koruyun.
  - Bir şey nullable olduğunda, bunu Option'a sarmalayın ve fonksiyonel API'yi koruyun.
  - Herhangi bir method için cyclomatic complexity'yi 10'un altında tutun; IDE inspektionları uyarı vermelidir.

  # general-scala-development-practices.mdc

  # ========== GENEL İLKELER ==========
  - Tecrübeli bir Senior Scala Developer'sınız.
  - Her zaman SOLID, DRY, KISS ve YAGNI ilkelerine uyarsınız.
  - *pure* function'ları tercih edin; side-effect'leri minimize edin. Effect'ler gerekli olduğunda, bunları açık hale getirin (ör. scala.util.Try, Either veya benimsenmiş ise cats-effect IO/Task kullanarak).
  - *val*'ı *var*'ın yerine kullanın; collection'lar mutability kanıtlanmış ve güvenli olmadığı sürece immutable olmalıdır.
  - *null*'u Option, Either veya domain'e özgü bir ADT ile değiştirin.
  - Pattern matching'i exhaustive bir şekilde kullanın ve *default* case'i sadece gerçekten açık-uçlu olduğunda işleyin.
  - for-comprehension'ları, map/flatMap/fold'u ve higher-order function'ları imperative loop'ların yerine tercih edin.
  - *case class*'ları ve *sealed trait*'leri algebraic data type'lar için tercih edin.
  - Ortak logic'i private veya package-private yardımcılar içine çıkarın; uzun method'lardan (> 30 LOC) kaçının.
  - Davranış eklerken inheritance yerine extension method'ları veya type class'ları tercih edin.
  - Public API'ları küçük tutun, sadece module'ün sahip olduğu şeyleri açığa çıkarın.
  - Her görev'i en küçük composable pure function'lara ayırın, sonra bunları birleştirin.

  # ========== İSİMLENDİRME & SİNTAKS ==========
  - Class / object / trait isimleri UpperCamelCase isim'lerdir (ör. *NotificationStreamApp*).
  - Method'lar & val'lar lowerCamelCase fiil veya isim'lerdir (ör. *process*, *serde*, *productKey*).
  - Sabitler `SCREAMING_SNAKE_CASE` kullanır.
  - Java'nın static final üyeleri'ne benzer şekilde, eğer üye final, immutable ve bir package object'e veya object'e aitse, bir sabit olarak düşünülebilir.
  - Sembolik isimler (`|>`) sadece yaygın FP idiom'ları ile uyumlu olduğunda izin verilir.
  - Match expression'ları nested if/else chain'leri yerine `match`/`case` kullanır; basit iki-branch logic'i için `if … then … else …` expression'ları tercih edin.

  # ========== HATA İŞLEME & LOGGING ==========
  - En spesifik Exception'ı önce yakalayın; checked Java exception'ları bir ADT veya `Try`'ye dönüştürün.
  - Boş `catch` block'ları olmayan; *debug* veya *error* seviyesinde anlamlı bir mesaj ile log'layın.
  - Otomatik olarak resource'ları kapatmak için `scala.util.Using`'i (veya cats-effect `Resource`) kullanın.
  - "defensive" logging veya `println` kullanmaktan kaçının; *scala-logging* wrapper'ı ile SLF4J (Logback) kullanın.

  # ========== TEST ==========
  - ScalaTest'i **Given-When-Then** düzeni ile ve AnyFlatSpec kullanarak kullanın.
  - Kritik path'ler ve business invariant'lar üzerine odaklanın; boilerplate'ı aşırı test etmeyin.
  - Property-based test'ler (ScalaCheck) trivial olmayan invariant'ları olan pure function'lar için.
  - Integration test'lerini "integration" adlı bir subproject olarak ayarlayın ve integration test'lerini standart test'ler olarak işleyin.

  # ========== PERFORMANS & GÜVENLİK ==========
  - Kafka stream processing içinde blocking call'lar kullanmaktan kaçının; kaçınılmaz ise, bunu dedicated bir thread-pool'a yönlendirin.
  - Java collection'ları bir kez sınırda Scala eşdeğerlerine dönüştürün; hiçbir zaman ileri-geri döngüye girmeyin.
  - Büyük numeric literal'lar için underscore-separated digit'ler kullanın (ör. `val timeoutMs = 30_000`).

  # ========== MODERN SCALA 3 ÖZELLİKLERİ ==========
  - Java-style enum'lar yerine sonlu alternatifler için *Enum*'ları kullanın.
  - *opaque type*'ları embrace edin ve primitive wrapper'ların yanlışlıkla kullanılmasından kaçının.
  - Klasik implicit list'ler yerine type-class evidence'ı için *context parameter*'ları (`using`) kullanın, uygun olduğunda.
  - Desteklendiğinde `implicit` yerine `given`/`using` syntax'ini tercih edin.

  # ========== TEMIZ BUILD ==========
  - sbt build **scalafmt** kullanır; herhangi bir scalafmt ihlalini bir build error'u olarak değerlendirin.

  # kafka-development-practices.mdc

  - Tüm topic name'leri config value'lar (Typesafe Config veya pure-config).
  - Projede kullanılan JSON veya AVRO veya başka bir kütüphaneden Format veya Codec'i kullanın.
  - Streams logic'i `TopologyTestDriver` (unit-test) artı local Kafka'ya karşı bir integration test ile test edilmelidir.

  # linting-formatting.mdc

  - **scalafmt:** Google-inspired scalafmt konfigürasyonunu `maxColumn = 100` ile uygulayın.
---

# general-scala-clean-code.mdc

- Declare vals/vars as close as possible to first use.
- Name length should be proportional to scope: 1-2 chars allowed only inside small lambdas.
- Avoid nested for-comprehensions deeper than two levels; factor out steps into helpers.
- Split a single source file by responsibility.
- Use *tail-rec* optimisation (`@tailrec`) where appropriate.
- Prefer *immutable* collections and avoid mutation during iteration.
- When interop with Java forces mutability, wrap it in a pure facade with the use of .asScala, to retain functional API.
- When something is nullable, wrap it into an Option, to retain functional API.
- Keep cyclomatic complexity below 10 for any method; IDE inspections should warn.

# general-scala-development-practices.mdc

# ========== GENERAL PRINCIPLES ==========
- You are an experienced Senior Scala Developer.
- You always adhere to SOLID, DRY, KISS and YAGNI principles.
- Prefer *pure* functions; minimise side-effects. Where effects are required, make them explicit (e.g. using scala.util.Try, Either, or cats-effect IO/Task if adopted).
- Use *val* over *var*; collections must be immutable unless mutability is proven cheaper & safe.
- Replace *null* with Option, Either or a domain-specific ADT.
- Use pattern matching exhaustively and handle the *default* case only when truly open-ended.
- Prefer for-comprehensions, map/flatMap/fold, and higher-order functions over imperative loops.
- Prefer *case classes* and *sealed traits* for algebraic data types.
- Extract common logic into private or package-private helpers; avoid long methods (> 30 LOC).
- Prefer extension methods or type classes over inheritance when adding behaviour.
- Keep public APIs small, surface only what the module owns.
- Break every task into the smallest composable pure functions before wiring them together.

# ========== NAMING & SYNTAX ==========
- Class / object / trait names are UpperCamelCase nouns (e.g. *NotificationStreamApp*).
- Methods & vals are lowerCamelCase verbs or nouns (e.g. *process*, *serde*, *productKey*).
- Constants use `SCREAMING_SNAKE_CASE`.
- Similar to Java’s static final members, if the member is final, immutable and it belongs to a package object or an object, it may be considered a constant.
- Symbolic names (`|>`) are allowed *only* when they align with widespread FP idioms.
- Match expressions use `match`/`case` over nested if/else chains; for simple two-branch logic prefer `if … then … else …` expressions.

# ========== ERROR HANDLING & LOGGING ==========
- Catch the most specific Exception first; convert checked Java exceptions to an ADT or `Try`.
- No empty `catch` blocks; log at *debug* or *error* level with a meaningful message.
- Leverage `scala.util.Using` (or cats-effect `Resource`) for auto-closing resources.
- Avoid “defensive” logging or `println`; use SLF4J (Logback) with the *scala-logging* wrapper.

# ========== TESTING ==========
- Use ScalaTest in a **Given-When-Then** layout with the use of AnyFlatSpec.
- Focus on critical paths and business invariants; do not over-test boilerplate.
- Property-based tests (ScalaCheck) for pure functions with non-trivial invariants.
- Set up integration tests as a subproject named “integration” and treat integration tests as standard tests

# ========== PERFORMANCE & SAFETY ==========
- Avoid blocking calls inside Kafka stream processing; if unavoidable, off-load to a dedicated thread-pool.
- Convert Java collections to Scala equivalents once at the boundary; never bounce back and forth.
- Use underscore-separated digits for large numeric literals (e.g. `val timeoutMs = 30_000`).

# ========== MODERN SCALA 3 FEATURES ==========
- Use *Enums* for finite alternatives instead of Java-style enums.
- Embrace *opaque types* to avoid accidental misuse of primitive wrappers.
- Use *context parameters* (`using`) for type-class evidence instead of classic implicit lists when convenient.
- Prefer `given`/`using` syntax over `implicit` where supported.

# ========== CLEAN BUILD ==========
- The sbt build uses **scalafmt** for formatting; treat any scalafmt violation as a build error.

# kafka-development-practices.mdc

- All topic names config values (Typesafe Config or pure-config).
- Use Format or Codec from the JSON or AVRO or another library that is being used in the project.
- Streams logic must be tested with `TopologyTestDriver` (unit-test) plus an integration test against local Kafka.

# linting-formatting.mdc

- **scalafmt:** Enforce Google-inspired scalafmt configuration with `maxColumn = 100`.
