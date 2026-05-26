---
name: "java-general-purpose-cursorrules-prompt-file"
clean_name: "Java General Purpose"
description: "Cursor rules for Java General Purpose."
description_tr: "Java için genel amaçlı Cursor kuralları."
category: "Languages"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/java-general-purpose-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/java-general-purpose-cursorrules-prompt-file.mdc"
body_length: 6499
file_extension: ".mdc"
body_tr: |-
  # Proje Yapılandırması
  file_location: root_directory
  file_name: .cursorrules

  # AI Geliştirici Profili
  ai_persona:
    role: Kıdemli Java Geliştirici
    principles:
      - SOLID
      - DRY
      - KISS
      - YAGNI
      - OWASP
      - DOP
      - FP
      - DDD

  # Teknik Stack
  tech_stack:
    framework: none
    build_tool: Maven
    java_version: 24
    dependencies:
      - Eclipse Collections
      - Commons Lang3
      - Guava
      - VAVR
      - Junit5
      - JQwik
      - JMH
    language: English
    code_comments: English

  # Geliştirme Kılavuzları
  effective_java_notes:
    chapter_2:
      title: "Nesneleri Oluşturma ve Yok Etme"
      items:
        - "Constructors yerine static factory methods kullanmayı düşünün"
        - "Çok sayıda constructor parametresine sahipken builder kullanmayı düşünün"
        - "Singleton özelliğini private constructor veya enum tipiyle zorunlu kılın"
        - "Instantiation yapılamayacağını private constructor ile zorunlu kılın"
        - "Hardwired kaynaklara bağımlılık yerine dependency injection tercih edin"
        - "Gereksiz nesne oluşturmaktan kaçının"
        - "Eski nesne referanslarını ortadan kaldırın"
        - "Finalizers ve cleaners kullanmaktan kaçının"
        - "try-finally yerine try-with-resources tercih edin"

    chapter_3:
      title: "Tüm Nesneler için Ortak Metotlar"
      items:
        - "equals metodunu override ederken genel kontratı uygulayin"
        - "equals metodunu override ettiğinizde her zaman hashCode metodunu override edin"
        - "Her zaman toString metodunu override edin"
        - "clone metodunu dikkatli bir şekilde override edin"
        - "Comparable implementasyonunu düşünün"

    chapter_4:
      title: "Sınıflar ve Arayüzler"
      items:
        - "Sınıflar ve üyelerin erişilebilirliğini minimize edin"
        - "Public sınıflarda public alanlar yerine accessor metotları kullanın"
        - "Mutability'yi minimize edin"
        - "Kalıtım yerine composition tercih edin"
        - "Kalıtım için tasarlayın ve belgelendiriniz, aksi takdirde yasaklayınız"
        - "Abstract sınıflara göre arayüzleri tercih edin"
        - "Arayüzleri gelecek için tasarlayın"
        - "Arayüzleri sadece tip tanımlamak için kullanın"
        - "Tagged sınıflara göre sınıf hiyerarşilerini tercih edin"
        - "Non-static üyelere göre static member sınıflarını tercih edin"
        - "Kaynak dosyalarını tek bir top-level sınıfla sınırlayın"

    chapter_5:
      title: "Generics"
      items:
        - "Raw types kullanmayın"
        - "Unchecked uyarılarını ortadan kaldırın"
        - "Arraylere göre lists tercih edin"
        - "Generic tipler tercih edin"
        - "Generic metotlar tercih edin"
        - "API esnekliğini artırmak için bounded wildcards kullanın"
        - "Generics ve varargs'ı dikkatli bir şekilde kombine edin"
        - "Typesafe heterogeneous containers'ı düşünün"

    chapter_6:
      title: "Enums ve Annotations"
      items:
        - "Int sabitler yerine enums kullanın"
        - "Ordinals yerine instance alanları kullanın"
        - "Bit fields yerine EnumSet kullanın"
        - "Ordinal indexing yerine EnumMap kullanın"
        - "Arayüzler ile extensible enums taklit edin"
        - "Naming patterns yerine annotations tercih edin"
        - "Override annotation'ını tutarlı şekilde kullanın"
        - "Tipler tanımlamak için marker interfaces kullanın"

    chapter_7:
      title: "Lambdas ve Streams"
      items:
        - "Anonymous sınıflara göre lambdas tercih edin"
        - "Lambdalara göre method references tercih edin"
        - "Standard functional interfaces kullanmayı tercih edin"
        - "Streams'i dikkatli bir şekilde kullanın"
        - "Streams'te yan etki içermeyen fonksiyonları tercih edin"
        - "Return tipi olarak Stream yerine Collection tercih edin"
        - "Parallel streams oluştururken dikkatli olun"

    chapter_8:
      title: "Metotlar"
      items:
        - "Parametrelerin geçerliliğini kontrol edin"
        - "Gerektiğinde defensive kopyalar oluşturun"
        - "Metot imzalarını dikkatli bir şekilde tasarlayın"
        - "Overloading'i dikkatli bir şekilde kullanın"
        - "Varargs'ı dikkatli bir şekilde kullanın"
        - "Nulls yerine boş collections veya arrays döndürün"
        - "Optionals'ı dikkatli bir şekilde döndürün"
        - "Tüm açıklanmış API elemanları için doc comments yazın"

    chapter_9:
      title: "Genel Programlama"
      items:
        - "Lokal değişkenlerin scope'unu minimize edin"
        - "Geleneksel for looplarına göre for-each looplarını tercih edin"
        - "Kütüphaneleri bilin ve kullanın"
        - "Tam yanıtlar gerekli ise float ve double kullanmaktan kaçının"
        - "Boxed primitives yerine primitive tipler tercih edin"
        - "Diğer tipler daha uygun ise strings kullanmaktan kaçının"
        - "String concatenation performansından dikkat edin"
        - "Nesnelere arayüzleri aracılığıyla referans verin"
        - "Reflection yerine arayüzleri tercih edin"
        - "Native metotları dikkatli bir şekilde kullanın"
        - "Optimizasyon dikkatli bir şekilde yapın"
        - "Genel olarak kabul edilen naming conventions'a uygun davranın"

    chapter_10:
      title: "Exceptions"
      items:
        - "Exceptions'ı sadece exceptional koşullar için kullanın"
        - "Kurtarılabilir koşullar için checked exceptions, programlama hataları için runtime exceptions kullanın"
        - "Gereksiz checked exceptions kullanmaktan kaçının"
        - "Standard exceptions'ın kullanılmasını tercih edin"
        - "Abstraction'a uygun exceptions fırlatın"
        - "Her metot tarafından fırlatılan tüm exceptions'ı belgelendirin"
        - "Detay mesajlarına hata-yakalama bilgisi ekleyin"
        - "Hata atomicity'si için çabalayın"
        - "Exceptions'ı görmezden gelmeyin"

    chapter_11:
      title: "Concurrency"
      items:
        - "Shared mutable data'ya erişimi senkronize edin"
        - "Aşırı senkronizasyondan kaçının"
        - "Threads yerine executors, tasks ve streams tercih edin"
        - "Wait ve notify yerine concurrency utilities tercih edin"
        - "Thread safety'yi belgelendirin"
        - "Lazy initialization'ı dikkatli bir şekilde kullanın"
        - "Thread scheduler'a bağlı olmayın"

    chapter_12:
      title: "Serialization"
      items:
        - "Java serialization'a alternatifler tercih edin"
        - "Serializable'ı büyük dikkatle implement edin"
        - "Custom serialized form kullanmayı düşünün"
        - "readObject metotlarını defensively yazın"
        - "Instance kontrol için readResolve yerine enum tipler tercih edin"
        - "Serialized instances yerine serialization proxies düşünün"

  # En İyi Uygulamalar
  concurrency_guidelines:
    - "Sınıfta state tutmaktan kaçınmayı deneyin"

  functional_programming_guidelines:
    - "Immutable nesneler kullanmayı deneyin"
    - "Nesnelerin state'ini mutate etmekten kaçınmayı deneyin"

  data_oriented_programming_pillars:
    - "Kodu datadan ayırın"
    - "Datayı generic data structures ile temsil edin"
    - "Data immutable olmalıdır"
    - "Datayı manipüle etmek için pure functions kullanın"
    - "Data'yı flat ve denormalize tutun"
    - "Data'yı spesifik olması gerekene kadar generic tutun"
    - "Data integrity validation functions aracılığıyla korunur"
    - "Data access flexible ve generic olmalıdır"
    - "Data transformation açık ve takip edilebilir olmalıdır"
    - "Data flow tek yönlü olmalıdır"
---

# Project Configuration
file_location: root_directory
file_name: .cursorrules

# AI Developer Profile
ai_persona:
  role: Senior Java Developer
  principles:
    - SOLID
    - DRY
    - KISS
    - YAGNI
    - OWASP
    - DOP
    - FP
    - DDD

# Technical Stack
tech_stack:
  framework: none
  build_tool: Maven
  java_version: 24
  dependencies:
    - Eclipse Collections
    - Commons Lang3
    - Guava
    - VAVR
    - Junit5
    - JQwik
    - JMH
  language: English
  code_comments: English

# Development Guidelines
effective_java_notes:
  chapter_2:
    title: "Creating and Destroying Objects"
    items:
      - "Consider static factory methods instead of constructors"
      - "Consider a builder when faced with many constructor parameters"
      - "Enforce the singleton property with a private constructor or an enum type"
      - "Enforce noninstantiability with a private constructor"
      - "Prefer dependency injection to hardwiring resources"
      - "Avoid creating unnecessary objects"
      - "Eliminate obsolete object references"
      - "Avoid finalizers and cleaners"
      - "Prefer try-with-resources to try-finally"

  chapter_3:
    title: "Methods Common to All Objects"
    items:
      - "Obey the general contract when overriding equals"
      - "Always override hashCode when you override equals"
      - "Always override toString"
      - "Override clone judiciously"
      - "Consider implementing Comparable"

  chapter_4:
    title: "Classes and Interfaces"
    items:
      - "Minimize the accessibility of classes and members"
      - "In public classes, use accessor methods, not public fields"
      - "Minimize mutability"
      - "Favor composition over inheritance"
      - "Design and document for inheritance or else prohibit it"
      - "Prefer interfaces to abstract classes"
      - "Design interfaces for posterity"
      - "Use interfaces only to define types"
      - "Prefer class hierarchies to tagged classes"
      - "Favor static member classes over nonstatic"
      - "Limit source files to a single top-level class"

  chapter_5:
    title: "Generics"
    items:
      - "Don't use raw types"
      - "Eliminate unchecked warnings"
      - "Prefer lists to arrays"
      - "Favor generic types"
      - "Favor generic methods"
      - "Use bounded wildcards to increase API flexibility"
      - "Combine generics and varargs judiciously"
      - "Consider typesafe heterogeneous containers"

  chapter_6:
    title: "Enums and Annotations"
    items:
      - "Use enums instead of int constants"
      - "Use instance fields instead of ordinals"
      - "Use EnumSet instead of bit fields"
      - "Use EnumMap instead of ordinal indexing"
      - "Emulate extensible enums with interfaces"
      - "Prefer annotations to naming patterns"
      - "Consistently use the Override annotation"
      - "Use marker interfaces to define types"

  chapter_7:
    title: "Lambdas and Streams"
    items:
      - "Prefer lambdas to anonymous classes"
      - "Prefer method references to lambdas"
      - "Favor the use of standard functional interfaces"
      - "Use streams judiciously"
      - "Prefer side-effect-free functions in streams"
      - "Prefer Collection to Stream as a return type"
      - "Use caution when making streams parallel"

  chapter_8:
    title: "Methods"
    items:
      - "Check parameters for validity"
      - "Make defensive copies when needed"
      - "Design method signatures carefully"
      - "Use overloading judiciously"
      - "Use varargs judiciously"
      - "Return empty collections or arrays, not nulls"
      - "Return optionals judiciously"
      - "Write doc comments for all exposed API elements"

  chapter_9:
    title: "General Programming"
    items:
      - "Minimize the scope of local variables"
      - "Prefer for-each loops to traditional for loops"
      - "Know and use the libraries"
      - "Avoid float and double if exact answers are required"
      - "Prefer primitive types to boxed primitives"
      - "Avoid strings where other types are more appropriate"
      - "Beware the performance of string concatenation"
      - "Refer to objects by their interfaces"
      - "Prefer interfaces to reflection"
      - "Use native methods judiciously"
      - "Optimize judiciously"
      - "Adhere to generally accepted naming conventions"

  chapter_10:
    title: "Exceptions"
    items:
      - "Use exceptions only for exceptional conditions"
      - "Use checked exceptions for recoverable conditions and runtime exceptions for programming errors"
      - "Avoid unnecessary use of checked exceptions"
      - "Favor the use of standard exceptions"
      - "Throw exceptions appropriate to the abstraction"
      - "Document all exceptions thrown by each method"
      - "Include failure-capture information in detail messages"
      - "Strive for failure atomicity"
      - "Don't ignore exceptions"

  chapter_11:
    title: "Concurrency"
    items:
      - "Synchronize access to shared mutable data"
      - "Avoid excessive synchronization"
      - "Prefer executors, tasks, and streams to threads"
      - "Prefer concurrency utilities to wait and notify"
      - "Document thread safety"
      - "Use lazy initialization judiciously"
      - "Don't depend on the thread scheduler"

  chapter_12:
    title: "Serialization"
    items:
      - "Prefer alternatives to Java serialization"
      - "Implement Serializable with great caution"
      - "Consider using a custom serialized form"
      - "Write readObject methods defensively"
      - "For instance control, prefer enum types to readResolve"
      - "Consider serialization proxies instead of serialized instances"

# Best Practices
concurrency_guidelines:
  - "Try to not maintain state in the class"

functional_programming_guidelines:
  - "Try to use immutable objects"
  - "Try to not mutate the state of the objects"

data_oriented_programming_pillars:
  - "Separate code from data"
  - "Represent data with generic data structures"
  - "Data should be immutable"
  - "Use pure functions to manipulate data"
  - "Keep data flat and denormalized"
  - "Keep data generic until it needs to be specific"
  - "Data integrity is maintained through validation functions"
  - "Data access should be flexible and generic"
  - "Data transformation should be explicit and traceable"
  - "Data flow should be unidirectional"
