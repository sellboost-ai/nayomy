---
name: "scala-kafka-cursorrules-prompt-file"
clean_name: "Scala Kafka"
description: "Cursor rules for Scala Kafka."
description_tr: "Scala Kafka için Cursor kuralları."
category: "Languages"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/scala-kafka-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/scala-kafka-cursorrules-prompt-file.mdc"
body_length: 4652
file_extension: ".mdc"
body_tr: |-
  # general-scala-clean-code.mdc

  - Vals/vars'ı ilk kullanıma mümkün olduğunca yakın tanımlayın.
  - İsim uzunluğu scope'un boyutuyla orantılı olmalıdır: 1-2 karakterli isimler yalnızca küçük lambda'lar içinde kullanılabilir.
  - İkiden daha derin iç içe for-comprehension'lardan kaçının; adımları helper'lara ayırın.
  - Tek bir kaynak dosyasını sorumluluk bazında bölün.
  - Uygun yerlerde *tail-rec* optimizasyonunu (`@tailrec`) kullanın.
  - *İmmutable* koleksiyonları tercih edin ve iterasyon sırasında mutation'dan kaçının.
  - Java interop'unun mutation'u zorunlu kıldığında, fonksiyonel API'yi korumak için .asScala kullanarak bunu pure facade'ye sarın.
  - Bir şey nullable olduğunda, fonksiyonel API'yi korumak için bunu Option'a sarın.
  - Herhangi bir method için cyclomatic complexity'yi 10'un altında tutun; IDE inspections uyarı vermelidir.

  # general-scala-development-practices.mdc

  # ========== GENEL İLKELER ==========
  - Siz deneyimli bir Senior Scala Developer'sınız.
  - Her zaman SOLID, DRY, KISS ve YAGNI ilkelerine uyarsınız.
  - *Pure* function'ları tercih edin; side-effect'leri minimize edin. Effect'lerin gerekli olduğu durumlarda, bunları açık hale getirin (örneğin scala.util.Try, Either veya benimsenmiş ise cats-effect IO/Task kullanarak).
  - *var* yerine *val* kullanın; koleksiyonlar immutable olmalıdır, aksi takdirde mutation'un daha ucuz ve güvenli olduğu kanıtlanmışsa kullanılabilir.
  - *null* yerine Option, Either veya domain-specific ADT kullanın.
  - Pattern matching'i exhaustively kullanın ve *default* case'i yalnızca gerçekten açık uçlu olduğunda işleyin.
  - For-comprehension'lar, map/flatMap/fold ve higher-order function'ları imperative loop'lar yerine tercih edin.
  - Cebirsel veri türleri için *case class*'ları ve *sealed trait*'leri tercih edin.
  - Ortak logic'i private veya package-private helper'lara çıkarın; uzun method'lardan (> 30 LOC) kaçının.
  - Davranış eklerken inheritance yerine extension method'lar veya type class'ları tercih edin.
  - Public API'ları küçük tutun, yalnızca modülün sahip olduğu şeyleri expose edin.
  - Her task'ı birbirine bağlamadan önce en küçük composable pure function'lara ayırın.

  # ========== İSİMLENDİRME & SİNTAKS ==========
  - Class / object / trait isimleri UpperCamelCase isimler olmalıdır (örneğin *NotificationStreamApp*).
  - Method'lar ve val'lar lowerCamelCase fiiller veya isimler olmalıdır (örneğin *process*, *serde*, *productKey*).
  - Sabitler `SCREAMING_SNAKE_CASE` kullanır.
  - Java'nın static final member'larına benzer şekilde, eğer member final, immutable ve bir package object'e veya object'e aitse, sabit olarak kabul edilebilir.
  - Sembolik isimler (`|>`) *yalnızca* yaygın FP idiom'larıyla uyumlu olduğunda kullanılır.
  - Match expression'ları iç içe if/else chain'leri yerine `match`/`case` kullanır; basit two-branch logic için `if … then … else …` expression'larını tercih edin.

  # ========== HATA İŞLEME & LOGGİNG ==========
  - Spesifik Exception'ı ilk olarak yakala; checked Java exception'larını ADT veya `Try`'a çevir.
  - Boş `catch` block'lardan kaçının; *debug* veya *error* seviyesinde anlamlı bir mesajla loglayın.
  - Otomatik kapatma için `scala.util.Using` (veya cats-effect `Resource`) yararlanın.
  - "Defensive" loglama veya `println`'den kaçının; SLF4J (Logback) ile *scala-logging* wrapper'ını kullanın.

  # ========== TEST'LER ==========
  - ScalaTest'i **Given-When-Then** layoutı ile AnyFlatSpec kullanarak kullanın.
  - Kritik path'ler ve iş invariant'larına odaklanın; boilerplate'i over-test etmeyin.
  - Non-trivial invariant'lı pure function'lar için property-based test'ler (ScalaCheck) kullanın.
  - Integration test'leri "integration" adında bir subproject olarak ayarlayın ve integration test'lerini standard test'ler gibi işleyin

  # ========== PERFORMANS & GÜVENLİK ==========
  - Kafka stream işleme içinde blocking call'lardan kaçının; kaçınılmazsa, bunları dedicated thread-pool'a aktarın.
  - Java koleksiyonlarını sınır noktasında Scala eşdeğerlerine çevirin; asla ileri geri geçmeyin.
  - Büyük sayısal literaller için underscore-separated digit'leri kullanın (örneğin `val timeoutMs = 30_000`).

  # ========== MODERN SCALA 3 ÖZELLİKLERİ ==========
  - Java-style enum'lar yerine sonlu alternatifler için *Enum*'ları kullanın.
  - *Opaque type*'ları kucakla primitive wrapper'ların yanlışlıkla kötüye kullanılmasından kaçınmak için.
  - Uygun olduğunda classic implicit listeleri yerine type-class evidence için *context parameters* (`using`) kullanın.
  - Desteklendiğinde `implicit` yerine `given`/`using` söz dizimini tercih edin.

  # ========== TEMIZ BUILD ==========
  - sbt build **scalafmt** kullanır; herhangi bir scalafmt ihlalfını build hatasıymış gibi ele alın.

  # kafka-development-practices.mdc

  - Tüm topic adlarını config değerleri (Typesafe Config veya pure-config).
  - Projede kullanılan JSON, AVRO veya başka bir library'den Format veya Codec kullanın.
  - Streams logic'i `TopologyTestDriver` (unit-test) artı local Kafka'ya karşı integration test ile test edin.

  # linting-formatting.mdc

  - **scalafmt:** Google-esinlenmiş scalafmt yapılandırmasını `maxColumn = 100` ile zorunlu tutun.
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
