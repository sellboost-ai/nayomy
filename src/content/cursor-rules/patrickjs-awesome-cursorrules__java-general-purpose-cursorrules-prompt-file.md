---
name: "java-general-purpose-cursorrules-prompt-file"
clean_name: "Java General Purpose"
description: "Cursor rules for Java General Purpose."
description_tr: "Java Genel Amaçlı Cursor Kuralları."
category: "Languages"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
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

  # Geliştirme Yönergeleri
  effective_java_notes:
    chapter_2:
      title: "Nesneleri Oluşturma ve Yok Etme"
      items:
        - "Yapılandırıcılar yerine static factory methodlarını kullanmayı düşünün"
        - "Çok sayıda yapılandırıcı parametresine sahip olduğunuzda builder'ı kullanmayı düşünün"
        - "Singleton özelliğini private bir yapılandırıcı veya enum türü ile zorunlu kılın"
        - "Non-instantiable özelliğini private bir yapılandırıcı ile zorunlu kılın"
        - "Hardwired kaynaklar yerine dependency injection'ı tercih edin"
        - "Gereksiz nesneler oluşturmaktan kaçının"
        - "Eski nesne referanslarını ortadan kaldırın"
        - "Finalizer'lar ve cleaner'lardan kaçının"
        - "try-finally yerine try-with-resources'ı tercih edin"

    chapter_3:
      title: "Tüm Nesnelere Ortak Methodlar"
      items:
        - "equals'ı geçersiz kılarken genel kontrata uyun"
        - "equals'ı geçersiz kıldığınızda her zaman hashCode'u da geçersiz kılın"
        - "Her zaman toString'i geçersiz kılın"
        - "clone'u dikkatli bir şekilde geçersiz kılın"
        - "Comparable uygulamayı düşünün"

    chapter_4:
      title: "Sınıflar ve Arayüzler"
      items:
        - "Sınıfların ve üyelerin erişilebilirliğini en aza indirin"
        - "Public sınıflarda public alanlar yerine accessor methodlarını kullanın"
        - "Değişebilirliği en aza indirin"
        - "Kalıtım yerine bileşimi tercih edin"
        - "Kalıtım için tasarlayın ve dokümante edin veya bunu yasaklayın"
        - "Soyut sınıflar yerine arayüzleri tercih edin"
        - "Arayüzleri gelecek için tasarlayın"
        - "Arayüzleri yalnızca türleri tanımlamak için kullanın"
        - "Etiketli sınıflar yerine sınıf hiyerarşilerini tercih edin"
        - "Non-static üye sınıflar yerine static üye sınıfları tercih edin"
        - "Kaynak dosyalarını tek bir top-level sınıfla sınırlayın"

    chapter_5:
      title: "Generics"
      items:
        - "Raw type'ları kullanmayın"
        - "İşaretlenmemiş uyarıları ortadan kaldırın"
        - "Array'lar yerine list'leri tercih edin"
        - "Generic türleri tercih edin"
        - "Generic method'ları tercih edin"
        - "API esnekliğini arttırmak için bounded wildcard'ları kullanın"
        - "Generics ve varargs'ı dikkatli bir şekilde birleştirin"
        - "Typesafe heterogeneous container'ları düşünün"

    chapter_6:
      title: "Enum'lar ve Annotation'lar"
      items:
        - "Int sabitleri yerine enum'ları kullanın"
        - "Ordinal'lar yerine instance alanlarını kullanın"
        - "Bit alanları yerine EnumSet'i kullanın"
        - "Ordinal indexleme yerine EnumMap'i kullanın"
        - "Extensible enum'ları arayüzlerle emüle edin"
        - "Adlandırma şablonları yerine annotation'ları tercih edin"
        - "Override annotation'ını tutarlı bir şekilde kullanın"
        - "Türleri tanımlamak için marker interface'leri kullanın"

    chapter_7:
      title: "Lambda'lar ve Stream'ler"
      items:
        - "Anonim sınıflar yerine lambda'ları tercih edin"
        - "Lambda'lar yerine method reference'ları tercih edin"
        - "Standard functional interface'lerin kullanımını tercih edin"
        - "Stream'leri dikkatli bir şekilde kullanın"
        - "Stream'lerde yan etki olmayan function'ları tercih edin"
        - "Stream yerine Collection'ı dönüş türü olarak tercih edin"
        - "Parallel stream'ler oluştururken dikkatli olun"

    chapter_8:
      title: "Methodlar"
      items:
        - "Parametrelerin geçerliliğini kontrol edin"
        - "Gerektiğinde defensive kopya oluşturun"
        - "Method signature'ları dikkatli bir şekilde tasarlayın"
        - "Overloading'i dikkatli bir şekilde kullanın"
        - "Varargs'ı dikkatli bir şekilde kullanın"
        - "Null yerine boş collection'lar veya array'ler döndürün"
        - "Optional'ları dikkatli bir şekilde döndürün"
        - "Tüm açık API elemanları için doc comment'ler yazın"

    chapter_9:
      title: "Genel Programlama"
      items:
        - "Lokal değişkenlerin kapsamını en aza indirin"
        - "Geleneksel for loop'lar yerine for-each loop'larını tercih edin"
        - "Kütüphaneleri bilin ve kullanın"
        - "Tam cevaplar gerekiyorsa float ve double'dan kaçının"
        - "Boxed primitive'ler yerine primitive türleri tercih edin"
        - "Diğer türler daha uygun olduğunda string'lerden kaçının"
        - "String birleştirmesinin performansına dikkat edin"
        - "Nesnelere arayüzleri üzerinden başvurun"
        - "Reflection yerine arayüzleri tercih edin"
        - "Native method'ları dikkatli bir şekilde kullanın"
        - "Optimize etmeyi dikkatli bir şekilde yapın"
        - "Genel olarak kabul edilen adlandırma kurallarına uyun"

    chapter_10:
      title: "Exception'lar"
      items:
        - "Exception'ları yalnızca olağandışı durumlar için kullanın"
        - "Kurtarılabilir durumlar için checked exception'ları, programlama hataları için runtime exception'ları kullanın"
        - "Gereksiz checked exception kullanımından kaçının"
        - "Standard exception'ların kullanımını tercih edin"
        - "Uygun exception'ları fırlatın"
        - "Her method tarafından fırlatılan tüm exception'ları dokümante edin"
        - "Detail message'lere hata-yakalama bilgisini dahil edin"
        - "Hata atomikliğine çabalayın"
        - "Exception'ları görmezden gelmeyin"

    chapter_11:
      title: "Eşzamanlılık"
      items:
        - "Paylaşılan mutable veriye erişimi senkronize edin"
        - "Aşırı senkronizasyondan kaçının"
        - "Thread'ler yerine executor'ları, task'ları ve stream'leri tercih edin"
        - "Wait ve notify yerine concurrency utility'lerini tercih edin"
        - "Thread güvenliğini dokümante edin"
        - "Lazy initialization'ı dikkatli bir şekilde kullanın"
        - "Thread scheduler'a bağımlı olmayın"

    chapter_12:
      title: "Serialization"
      items:
        - "Java serialization'a alternatifler tercih edin"
        - "Serializable'ı büyük dikkatle uygulayın"
        - "Custom serialized form kullanmayı düşünün"
        - "readObject method'larını defensif bir şekilde yazın"
        - "Instance kontrol için readResolve yerine enum türlerini tercih edin"
        - "Serialized instance'lar yerine serialization proxy'lerini düşünün"

  # En İyi Uygulamalar
  concurrency_guidelines:
    - "Sınıfta state tutmamaya çalışın"

  functional_programming_guidelines:
    - "Immutable nesneler kullanmaya çalışın"
    - "Nesnelerin state'ini mutate etmemeye çalışın"

  data_oriented_programming_pillars:
    - "Kodu veriden ayırın"
    - "Veriyi generic veri yapılarıyla temsil edin"
    - "Veri immutable olmalıdır"
    - "Veriyi manipüle etmek için pure function'ları kullanın"
    - "Veriyi flat ve denormalize tutun"
    - "Veriyi spesifik olmaya ihtiyaç duyuncaya kadar generic tutun"
    - "Veri bütünlüğü validation function'ları aracılığıyla korunur"
    - "Veri erişimi esnek ve generic olmalıdır"
    - "Veri transformasyonu açık ve izlenebilir olmalıdır"
    - "Veri akışı tek yönlü olmalıdır"
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
