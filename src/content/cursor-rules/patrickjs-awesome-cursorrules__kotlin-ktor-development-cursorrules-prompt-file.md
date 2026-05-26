---
name: "kotlin-ktor-development-cursorrules-prompt-file"
clean_name: "Kotlin Ktor Development"
description: "Cursor rules for Kotlin development with Ktor integration."
description_tr: "Kotlin geliştirmesi için Cursor kuralları ve Ktor entegrasyonu."
category: "Mobile"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/kotlin-ktor-development-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/kotlin-ktor-development-cursorrules-prompt-file.mdc"
body_length: 9189
file_extension: ".mdc"
body_tr: |-
  ## Geliştirici Talimatı: bu dosyayı .cursorrules olarak kaydedin ve proje kök dizinine yerleştirin

  ## Temel Prensipler
  - **SOLID**, **DRY**, **KISS**, ve **YAGNI** prensiplerini izleyin
  - **OWASP** güvenlik en iyi uygulamalarına uyun
  - Görevleri en küçük birliklere bölün ve sorunları adım adım çözün

  ## Teknoloji Stack'i
  - **Framework**: Kotlin Ktor with Kotlin 2.1.20+
  - **JDK**: 21 (LTS)
  - **Build**: Gradle with Kotlin DSL
  - **Dependencies**: Ktor Server Core/Netty, kotlinx.serialization, Exposed, HikariCP, kotlin-logging, Koin, Kotest

  ## Uygulama Yapısı (Feature-Tabanlı)
  - **Teknik katmanlar değil, iş özellikleri tarafından organize edin**
  - Her özellik, tüm ilgili bileşenlerle birlikte kendi başına kalır
  - Modülerliği, yeniden kullanılabilirliği ve daha iyi ekip işbirliğini destekler
  - Kod tabanının gezinmesini ve bakımını kolaylaştırır
  - Farklı özelliklere paralel geliştirmeyi etkinleştirir
  ```
  src/main/kotlin/com/company/app/
  ├── common/              # Shared utilities, extensions
  ├── config/              # Application configuration, DI
  └── features/
      ├── auth/            # Feature directory
      │   ├── models/
      │   ├── repositories/
      │   ├── services/
      │   └── routes/
      └── users/           # Another feature
          ├── ...
  ```

  Test yapısı feature-tabanlı organizasyonu yansıtır:
  ```
  src/test/kotlin/com/company/app/
  ├── common/
  └── features/
      ├── auth/
      │   ├── models/
      │   ├── repositories/
      │   ├── services/
      │   └── routes/
      └── users/
          ├── ...
  ```

  ## Uygulama Mantığı Tasarımı
  1. Route handlers: Yalnızca istekleri/yanıtları yönetin
  2. Services: İş mantığını içerir, repository'leri çağırır
  3. Repositories: Veritabanı işlemlerini yönetin
  4. Entity classes: Veritabanı modelleri için veri sınıfları
  5. DTOs: Katmanlar arasında veri aktarımı

  ## Entity'ler & Veri Sınıfları
  - Uygun doğrulama ile Kotlin veri sınıflarını kullanın
  - Exposed ORM kullanırken Table nesnelerini tanımlayın
  - ID'ler için UUID veya otomatik artan tamsayıları kullanın

  ## Repository Pattern
  ```kotlin
  interface UserRepository {
      suspend fun findById(id: UUID): UserDTO?
      suspend fun create(user: CreateUserRequest): UserDTO
      suspend fun update(id: UUID, user: UpdateUserRequest): UserDTO?
      suspend fun delete(id: UUID): Boolean
  }

  class UserRepositoryImpl : UserRepository {
      override suspend fun findById(id: UUID): UserDTO? = withContext(Dispatchers.IO) {
          transaction {
              Users.select { Users.id eq id }
                  .mapNotNull { it.toUserDTO() }
                  .singleOrNull()
          }
      }
      // Other implementations...
  }
  ```

  ## Service Katmanı
  ```kotlin
  interface UserService {
      suspend fun getUserById(id: UUID): UserDTO
      suspend fun createUser(request: CreateUserRequest): UserDTO
      suspend fun updateUser(id: UUID, request: UpdateUserRequest): UserDTO
      suspend fun deleteUser(id: UUID)
  }

  class UserServiceImpl(
      private val userRepository: UserRepository
  ) : UserService {
      override suspend fun getUserById(id: UUID): UserDTO {
          return userRepository.findById(id) ?: throw ResourceNotFoundException("User", id.toString())
      }
      // Other implementations...
  }
  ```

  ## Route Handlers
  ```kotlin
  fun Application.configureUserRoutes(userService: UserService) {
      routing {
          route("/api/users") {
              get("/{id}") {
                  val id = call.parameters["id"]?.let { UUID.fromString(it) }
                      ?: throw ValidationException("Invalid ID format")
                  val user = userService.getUserById(id)
                  call.respond(ApiResponse("SUCCESS", "User retrieved", user))
              }
              // Other routes...
          }
      }
  }
  ```

  ## Hata Yönetimi
  ```kotlin
  open class ApplicationException(
      message: String,
      val statusCode: HttpStatusCode = HttpStatusCode.InternalServerError
  ) : RuntimeException(message)

  class ResourceNotFoundException(resource: String, id: String) :
      ApplicationException("$resource with ID $id not found", HttpStatusCode.NotFound)

  fun Application.configureExceptions() {
      install(StatusPages) {
          exception<ResourceNotFoundException> { call, cause ->
              call.respond(cause.statusCode, ApiResponse("ERROR", cause.message ?: "Resource not found"))
          }
          exception<Throwable> { call, cause ->
              call.respond(HttpStatusCode.InternalServerError, ApiResponse("ERROR", "An internal error occurred"))
          }
      }
  }
  ```

  ## Test Stratejileri ve Kapsam Gereksinimleri

  ### Test Kapsamı Gereksinimleri
  - **Minimum kapsam**: %80 genel kod kapsama alanı gereklidir
  - **Kritik bileşenler**: Repository'ler, servisler ve doğrulama için %90+ kapsama
  - **Tüm kenar durumlarını test edin**: Boş koleksiyonlar, null değerleri, sınır koşulları
  - **Başarısızlık yollarını test edin**: İstisna yönetimi, doğrulama hataları, zaman aşımları
  - **Tüm public API'ler**: Entegrasyon testlerine sahip olmalıdır
  - **Performans-kritik yollar**: Kıyaslama testlerine sahip olmalıdır

  ### Kotest ile Unit Testing
  ```kotlin
  class UserServiceTest : DescribeSpec({
      describe("UserService") {
          val mockRepository = mockk<UserRepository>()
          val userService = UserServiceImpl(mockRepository)

          it("should return user when exists") {
              val userId = UUID.randomUUID()
              val user = UserDTO(userId.toString(), "Test User", "test@example.com")
              coEvery { mockRepository.findById(userId) } returns user

              val result = runBlocking { userService.getUserById(userId) }

              result shouldBe user
          }

          it("should throw exception when user not found") {
              val userId = UUID.randomUUID()
              coEvery { mockRepository.findById(userId) } returns null

              shouldThrow<ResourceNotFoundException> {
                  runBlocking { userService.getUserById(userId) }
              }
          }
      }
  })
  ```

  ## Ktor 3.x ile Route Testing
  ```kotlin
  class UserRoutesTest : FunSpec({
      test("GET /api/users/{id} returns 200 when user exists") {
          val mockService = mockk<UserService>()
          val userId = UUID.randomUUID()
          val user = UserDTO(userId.toString(), "Test User", "test@example.com")

          coEvery { mockService.getUserById(userId) } returns user

          testApplication {
              application {
                  configureRouting()
                  configureDI { single { mockService } }
              }

              client.get("/api/users/$userId").apply {
                  status shouldBe HttpStatusCode.OK
                  bodyAsText().let {
                      Json.decodeFromString<ApiResponse<UserDTO>>(it)
                  }.data shouldBe user
              }
          }
      }
  })
  ```

  ## Test Edilebilir Kod İçin Temel Prensipler
  1. **Tek Sorumluluk**: Her yöntem bir şeyi iyi yapmalıdır
  2. **Saf Fonksiyonlar**: Aynı girdi her zaman aynı çıktıyı üretir
  3. **Bağımlılık Enjeksiyonu**: Test edilebilir bileşenler için constructor enjeksiyonu
  4. **Net Sınırlar**: İyi tanımlanmış girdi ve çıktılar
  5. **Küçük Yöntemler**: Karmaşık mantığı test edilebilir yardımcı fonksiyonlara ayıklayın

  ## Konfigürasyon Yönetimi
  ```kotlin
  // Type-safe configuration
  interface AppConfig {
      val database: DatabaseConfig
      val security: SecurityConfig
  }

  data class DatabaseConfig(
      val driver: String,
      val url: String,
      val user: String,
      val password: String
  )

  // Access in application
  fun Application.configureDI() {
      val appConfig = HoconAppConfig(environment.config)

      install(Koin) {
          modules(module {
              single<AppConfig> { appConfig }
              single { appConfig.database }
          })
      }
  }
  ```

  ## Güvenlik En İyi Uygulamaları
  ```kotlin
  fun Application.configureSecurity() {
      install(Authentication) {
          jwt("auth-jwt") {
              // JWT configuration
          }
      }

      install(DefaultHeaders) {
          header(HttpHeaders.XContentTypeOptions, "nosniff")
          header(HttpHeaders.XFrameOptions, "DENY")
          header(HttpHeaders.ContentSecurityPolicy, "default-src 'self'")
          header("Strict-Transport-Security", "max-age=31536000; includeSubDomains")
      }
  }
  ```

  ## Sağlık Kontrolleri & İzleme
  ```kotlin
  fun Application.configureMonitoring() {
      val startTime = System.currentTimeMillis()

      routing {
          get("/health") {
              call.respond(mapOf("status" to "UP", "uptime" to "${(System.currentTimeMillis() - startTime) / 1000}s"))
          }

          get("/metrics") {
              call.respond(prometheusRegistry.scrape())
          }
      }

      install(MicrometerMetrics) {
          registry = PrometheusMeterRegistry(PrometheusConfig.DEFAULT)
          meterBinders = listOf(
              JvmMemoryMetrics(),
              JvmGcMetrics(),
              ProcessorMetrics(),
              JvmThreadMetrics()
          )
      }
  }
  ```

  ## Performans İyileştirme
  - **JVM Ayarları**: `-XX:+UseG1GC -XX:MaxGCPauseMillis=100 -XX:MaxRAMPercentage=75.0`
  - **Bağlantı Havuzu**: İş yüküne bağlı uygun boyutlandırma ile HikariCP'yi yapılandırın
  - **Caching**: Sık erişilen veriler için bellek içi caching için Caffeine kullanın
  - **Coroutines**: Asenkron işleme için yapılandırılmış eşzamanlılık kullanın
  - **Veritabanı Sorguları**: Uygun indexleme, batch işlemleri, sayfalandırma ile optimize edin
---

## Instruction to developer: save this file as .cursorrules and place it on the root project directory

## Core Principles
- Follow **SOLID**, **DRY**, **KISS**, and **YAGNI** principles
- Adhere to **OWASP** security best practices
- Break tasks into smallest units and solve problems step-by-step

## Technology Stack
- **Framework**: Kotlin Ktor with Kotlin 2.1.20+
- **JDK**: 21 (LTS)
- **Build**: Gradle with Kotlin DSL
- **Dependencies**: Ktor Server Core/Netty, kotlinx.serialization, Exposed, HikariCP, kotlin-logging, Koin, Kotest

## Application Structure (Feature-Based)
- **Organize by business features, not technical layers**
- Each feature is self-contained with all related components
- Promotes modularity, reusability, and better team collaboration
- Makes codebase easier to navigate and maintain
- Enables parallel development on different features
```
src/main/kotlin/com/company/app/
├── common/              # Shared utilities, extensions
├── config/              # Application configuration, DI
└── features/
    ├── auth/            # Feature directory
    │   ├── models/
    │   ├── repositories/
    │   ├── services/
    │   └── routes/
    └── users/           # Another feature
        ├── ...
```

Test structure mirrors the feature-based organization:
```
src/test/kotlin/com/company/app/
├── common/
└── features/
    ├── auth/
    │   ├── models/
    │   ├── repositories/
    │   ├── services/
    │   └── routes/
    └── users/
        ├── ...
```

## Application Logic Design
1. Route handlers: Handle requests/responses only
2. Services: Contain business logic, call repositories
3. Repositories: Handle database operations
4. Entity classes: Data classes for database models
5. DTOs: Data transfer between layers

## Entities & Data Classes
- Use Kotlin data classes with proper validation
- Define Table objects when using Exposed ORM
- Use UUID or auto-incrementing integers for IDs

## Repository Pattern
```kotlin
interface UserRepository {
    suspend fun findById(id: UUID): UserDTO?
    suspend fun create(user: CreateUserRequest): UserDTO
    suspend fun update(id: UUID, user: UpdateUserRequest): UserDTO?
    suspend fun delete(id: UUID): Boolean
}

class UserRepositoryImpl : UserRepository {
    override suspend fun findById(id: UUID): UserDTO? = withContext(Dispatchers.IO) {
        transaction {
            Users.select { Users.id eq id }
                .mapNotNull { it.toUserDTO() }
                .singleOrNull()
        }
    }
    // Other implementations...
}
```

## Service Layer
```kotlin
interface UserService {
    suspend fun getUserById(id: UUID): UserDTO
    suspend fun createUser(request: CreateUserRequest): UserDTO
    suspend fun updateUser(id: UUID, request: UpdateUserRequest): UserDTO
    suspend fun deleteUser(id: UUID)
}

class UserServiceImpl(
    private val userRepository: UserRepository
) : UserService {
    override suspend fun getUserById(id: UUID): UserDTO {
        return userRepository.findById(id) ?: throw ResourceNotFoundException("User", id.toString())
    }
    // Other implementations...
}
```

## Route Handlers
```kotlin
fun Application.configureUserRoutes(userService: UserService) {
    routing {
        route("/api/users") {
            get("/{id}") {
                val id = call.parameters["id"]?.let { UUID.fromString(it) }
                    ?: throw ValidationException("Invalid ID format")
                val user = userService.getUserById(id)
                call.respond(ApiResponse("SUCCESS", "User retrieved", user))
            }
            // Other routes...
        }
    }
}
```

## Error Handling
```kotlin
open class ApplicationException(
    message: String,
    val statusCode: HttpStatusCode = HttpStatusCode.InternalServerError
) : RuntimeException(message)

class ResourceNotFoundException(resource: String, id: String) :
    ApplicationException("$resource with ID $id not found", HttpStatusCode.NotFound)

fun Application.configureExceptions() {
    install(StatusPages) {
        exception<ResourceNotFoundException> { call, cause ->
            call.respond(cause.statusCode, ApiResponse("ERROR", cause.message ?: "Resource not found"))
        }
        exception<Throwable> { call, cause ->
            call.respond(HttpStatusCode.InternalServerError, ApiResponse("ERROR", "An internal error occurred"))
        }
    }
}
```

## Testing Strategies and Coverage Requirements

### Test Coverage Requirements
- **Minimum coverage**: 80% overall code coverage required
- **Critical components**: 90%+ coverage for repositories, services, and validation
- **Test all edge cases**: Empty collections, null values, boundary conditions
- **Test failure paths**: Exception handling, validation errors, timeouts
- **All public APIs**: Must have integration tests
- **Performance-critical paths**: Must have benchmarking tests

### Unit Testing with Kotest
```kotlin
class UserServiceTest : DescribeSpec({
    describe("UserService") {
        val mockRepository = mockk<UserRepository>()
        val userService = UserServiceImpl(mockRepository)

        it("should return user when exists") {
            val userId = UUID.randomUUID()
            val user = UserDTO(userId.toString(), "Test User", "test@example.com")
            coEvery { mockRepository.findById(userId) } returns user

            val result = runBlocking { userService.getUserById(userId) }

            result shouldBe user
        }

        it("should throw exception when user not found") {
            val userId = UUID.randomUUID()
            coEvery { mockRepository.findById(userId) } returns null

            shouldThrow<ResourceNotFoundException> {
                runBlocking { userService.getUserById(userId) }
            }
        }
    }
})
```

## Route Testing with Ktor 3.x
```kotlin
class UserRoutesTest : FunSpec({
    test("GET /api/users/{id} returns 200 when user exists") {
        val mockService = mockk<UserService>()
        val userId = UUID.randomUUID()
        val user = UserDTO(userId.toString(), "Test User", "test@example.com")

        coEvery { mockService.getUserById(userId) } returns user

        testApplication {
            application {
                configureRouting()
                configureDI { single { mockService } }
            }

            client.get("/api/users/$userId").apply {
                status shouldBe HttpStatusCode.OK
                bodyAsText().let {
                    Json.decodeFromString<ApiResponse<UserDTO>>(it)
                }.data shouldBe user
            }
        }
    }
})
```

## Key Principles for Testable Code
1. **Single Responsibility**: Each method should do one thing well
2. **Pure Functions**: Same input always produces same output
3. **Dependency Injection**: Constructor injection for testable components
4. **Clear Boundaries**: Well-defined inputs and outputs
5. **Small Methods**: Extract complex logic into testable helper functions

## Configuration Management
```kotlin
// Type-safe configuration
interface AppConfig {
    val database: DatabaseConfig
    val security: SecurityConfig
}

data class DatabaseConfig(
    val driver: String,
    val url: String,
    val user: String,
    val password: String
)

// Access in application
fun Application.configureDI() {
    val appConfig = HoconAppConfig(environment.config)

    install(Koin) {
        modules(module {
            single<AppConfig> { appConfig }
            single { appConfig.database }
        })
    }
}
```

## Security Best Practices
```kotlin
fun Application.configureSecurity() {
    install(Authentication) {
        jwt("auth-jwt") {
            // JWT configuration
        }
    }

    install(DefaultHeaders) {
        header(HttpHeaders.XContentTypeOptions, "nosniff")
        header(HttpHeaders.XFrameOptions, "DENY")
        header(HttpHeaders.ContentSecurityPolicy, "default-src 'self'")
        header("Strict-Transport-Security", "max-age=31536000; includeSubDomains")
    }
}
```

## Health Checks & Monitoring
```kotlin
fun Application.configureMonitoring() {
    val startTime = System.currentTimeMillis()

    routing {
        get("/health") {
            call.respond(mapOf("status" to "UP", "uptime" to "${(System.currentTimeMillis() - startTime) / 1000}s"))
        }

        get("/metrics") {
            call.respond(prometheusRegistry.scrape())
        }
    }

    install(MicrometerMetrics) {
        registry = PrometheusMeterRegistry(PrometheusConfig.DEFAULT)
        meterBinders = listOf(
            JvmMemoryMetrics(),
            JvmGcMetrics(),
            ProcessorMetrics(),
            JvmThreadMetrics()
        )
    }
}
```

## Performance Tuning
- **JVM Settings**: `-XX:+UseG1GC -XX:MaxGCPauseMillis=100 -XX:MaxRAMPercentage=75.0`
- **Connection Pooling**: Configure HikariCP with proper sizing based on workload
- **Caching**: Use Caffeine for in-memory caching of frequently accessed data
- **Coroutines**: Use structured concurrency for asynchronous processing
- **Database Queries**: Optimize with proper indexing, batch operations, pagination
