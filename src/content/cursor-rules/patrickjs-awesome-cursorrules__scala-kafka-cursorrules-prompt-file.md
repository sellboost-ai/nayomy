---
name: "scala-kafka-cursorrules-prompt-file"
clean_name: "Scala Kafka"
description: "Cursor rules for Scala Kafka."
description_tr: "Scala Kafka için Cursor kuralları."
category: "Languages"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/scala-kafka-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/scala-kafka-cursorrules-prompt-file.mdc"
body_length: 4652
file_extension: ".mdc"
body_tr: |-
  # general-scala-clean-code.mdc

  - Val/var bildirimleri ilk kullanıma olabildiğince yakın yerleştirilmelidir.
  - İsim uzunluğu kapsam ile orantılı olmalıdır: 1-2 karaktere yalnızca küçük lambdaların içinde izin verilir.
  - İki seviyeden daha derin iç içe for-comprehension'lardan kaçının; adımları helper'lara ayırın.
  - Bir kaynak dosyasını sorumluluğa göre bölün.
  - Uygun yerlerde *tail-rec* optimizasyonu (`@tailrec`) kullanın.
  - *Immutable* koleksiyonları tercih edin ve iterasyon sırasında mutasyondan kaçının.
  - Java interop mutabiliteyi zorunlu kıldığında, `.asScala` kullanarak bunu pure bir facade içine sarın ve fonksiyonel API'yi koruyun.
  - Bir şey nullable olduğunda, bunu bir Option içine sarın ve fonksiyonel API'yi koruyun.
  - Herhangi bir method için döngüsel karmaşıklığı 10'un altında tutun; IDE inspeksiyonları uyarı vermelidir.

  # general-scala-development-practices.mdc

  # ========== GENEL İLKELER ==========
  - Deneyimli bir Senior Scala Geliştiricisiniz.
  - Her zaman SOLID, DRY, KISS ve YAGNI ilkelerine uyarsınız.
  - *Pure* fonksiyonları tercih edin; yan etkileri en aza indirin. Efektler gerekli olduğunda, bunları açık hale getirin (örn. scala.util.Try, Either veya benimsenmiş olduğu durumlarda cats-effect IO/Task kullanarak).
  - `var` yerine *val* kullanın; koleksiyonlar mutabiliteyi kanıtlanmış daha ucuz ve güvenli olmadıkça immutable olmalıdır.
  - *null* yerine Option, Either veya domain'e özgü bir ADT kullanın.
  - Pattern matching'i kapsamlı şekilde kullanın ve *default* case'i yalnızca gerçekten açık uçlu olduğunda işleyin.
  - Kesinlikle imperatif döngüler yerine for-comprehension'ları, map/flatMap/fold ve yüksek dereceli fonksiyonları tercih edin.
  - Cebirsel veri türleri için *case class'ları* ve *sealed trait'leri* tercih edin.
  - Ortak mantığı private veya package-private helper'lara çıkarın; uzun methodlardan kaçının (> 30 LOC).
  - Davranış eklerken kalıtım yerine extension method'ları veya type class'ları tercih edin.
  - Public API'leri küçük tutun, yalnızca modülün sahibi olduğu şeyi expose edin.
  - Her görevi bunları birbirine bağlamadan önce en küçük composable pure fonksiyonlara bölün.

  # ========== İSİMLENDİRME & SİNTAKS ==========
  - Sınıf / object / trait isimleri UpperCamelCase isimlerdir (örn. *NotificationStreamApp*).
  - Methodlar ve val'ler lowerCamelCase fiil veya isimlerdir (örn. *process*, *serde*, *productKey*).
  - Sabitler `SCREAMING_SNAKE_CASE` kullanır.
  - Java'nın static final member'larına benzer şekilde, member final, immutable ve bir package object'ine veya object'e aitse, bir sabit olarak kabul edilebilir.
  - Sembolik isimler (`|>`) *yalnızca* yaygın FP idiomlarıyla uyumlu olduğunda kullanılır.
  - Match ifadeleri iç içe if/else zincirleri yerine `match`/`case` kullanır; basit iki dallanma mantığı için `if … then … else …` ifadeleri tercih edin.

  # ========== HATA İŞLEME & LOGGING ==========
  - En spesifik Exception'ı ilk yakalayın; kontrol edilen Java exception'larını bir ADT veya `Try`'ye dönüştürün.
  - Boş `catch` blokları yok; *debug* veya *error* seviyesinde anlamlı bir mesajla logging yapın.
  - Otomatik olarak kaynakları kapatmak için `scala.util.Using` (veya cats-effect `Resource`) kullanın.
  - "Savunmacı" logging veya `println` kullanmaktan kaçının; SLF4J (Logback) ile *scala-logging* wrapper'ını kullanın.

  # ========== TEST ==========
  - ScalaTest'i **Given-When-Then** düzeniyle AnyFlatSpec kullanarak yapılandırın.
  - Kritik path'ler ve business invariant'larına odaklanın; boilerplate'i aşırı test etmeyin.
  - Önemsiz olmayan invariant'lı pure fonksiyonlar için property-based test'ler (ScalaCheck).
  - İntegrasyon testlerini "integration" adlı bir alt proje olarak ayarlayın ve entegrasyon testlerini standart test olarak işleyin.

  # ========== PERFORMANS & GÜVENLİK ==========
  - Kafka stream processing'in içinde blocking call'lardan kaçının; kaçınılmazsa bunu adanmış bir thread-pool'a offload edin.
  - Java koleksiyonlarını sınırda bir kez Scala eşdeğerlerine dönüştürün; asla ileri geri sekmeleyin.
  - Büyük sayısal literaller için alt çizgi ayrılmış rakamlar kullanın (örn. `val timeoutMs = 30_000`).

  # ========== MODERN SCALA 3 ÖZELLİKLERİ ==========
  - Java tarzı enum'lar yerine sonlu alternatifler için *Enum'ları* kullanın.
  - Primitive wrapper'ların tesadüfi yanlış kullanımından kaçınmak için *opaque type'ları* benimseyin.
  - Uygun olduğunda klasik implicit listesi yerine type-class evidence için *context parameter'ları* (`using`) kullanın.
  - Desteklendiği yerlerde `implicit` yerine `given`/`using` sözdizimini tercih edin.

  # ========== CLEAN BUILD ==========
  - Sbt build **scalafmt** kullanır; herhangi bir scalafmt ihlalini bir build hatası olarak işleyin.

  # kafka-development-practices.mdc

  - Tüm topic adları config değerleri (Typesafe Config veya pure-config).
  - Projede kullanılan JSON veya AVRO veya başka bir library'den Format veya Codec kullanın.
  - Streams mantığı `TopologyTestDriver` ile test edilmelidir (unit-test) artı yerel Kafka'ya karşı entegrasyon testi.

  # linting-formatting.mdc

  - **scalafmt:** Google'dan esinlenen scalafmt konfigürasyonunu `maxColumn = 100` ile zorunlu kılın.
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
