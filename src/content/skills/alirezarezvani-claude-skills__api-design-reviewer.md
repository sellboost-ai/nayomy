---
name: "api-design-reviewer"
description_en: "Comprehensive REST API design review with automated linting, breaking-change detection, and design scorecards. Catches inconsistent conventions, missing versioning, and design smells before APIs ship. Use when reviewing a PR that adds or changes API endpoints, auditing an existing API for v2 migration, or establishing API standards for a team."
description_tr: "REST API tasarımlarını otomatik linting, breaking-change tespiti ve tasarım skorkarttarı ile kapsamlı şekilde gözden geçirin. Tutarsız kuralları, eksik versiyonlamayı ve tasarım sorunlarını API'ler yayına çıkmadan yakalayın. API endpoint'i ekleyen veya değiştiren PR'ları incelemek, mevcut bir API'yi v2 migrasyonu için denetlemek veya takımınız için API standartları belirlemek için kullanın."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/api-design-reviewer/SKILL.md"
path: ".gemini/skills/api-design-reviewer/SKILL.md"
is_collection: false
body_length: 11888
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # API Tasarım İncelemeci

  **Tier:** POWERFUL  
  **Kategori:** Mühendislik / Mimari  
  **Bakım Sorumlusu:** Claude Skills Team  

  ## Genel Bakış

  API Tasarım İncelemeci becerisi, API tasarımlarının kapsamlı analiz ve incelemesini sağlar; REST kurallarına, en iyi uygulamalara ve endüstri standartlarına odaklanır. Bu beceri, mühendislik ekiplerine otomatik linting, breaking change tespiti ve tasarım skorkarti aracılığıyla tutarlı, bakım yapılabilir ve iyi tasarlanmış API'ler oluşturmalarına yardımcı olur.

  ## Temel Yetenekler

  ### 1. API Linting ve Convention Analizi
  - **Resource Adlandırma Kuralları**: Kaynaklar için kebab-case, alanlar için camelCase zorunlu kılar
  - **HTTP Method Kullanımı**: GET, POST, PUT, PATCH, DELETE'in doğru kullanımını valide eder
  - **URL Yapısı**: Endpoint desenlerini tutarlılık ve RESTful tasarım açısından analiz eder
  - **Status Code Uyumluluğu**: Uygun HTTP status kodlarının kullanıldığından emin olur
  - **Error Response Formatları**: Tutarlı error response yapılarını valide eder
  - **Dokümantasyon Kapsamı**: Eksik açıklamalar ve dokümantasyon boşluklarını kontrol eder

  ### 2. Breaking Change Tespiti
  - **Endpoint Kaldırılması**: Kaldırılan veya deprecated endpoint'leri tespit eder
  - **Response Shape Değişiklikleri**: Response yapılarındaki değişiklikleri tanımlar
  - **Field Kaldırılması**: API response'larında kaldırılan veya yeniden adlandırılan alanları izler
  - **Type Değişiklikleri**: Client'ları kırabilen field type değişikliklerini yakalar
  - **Required Field Eklenmesi**: Mevcut entegrasyonları kırabilen yeni required alanları işaretler
  - **Status Code Değişiklikleri**: Beklenen status kodlarındaki değişiklikleri tespit eder

  ### 3. API Tasarım Puanlaması ve Değerlendirmesi
  - **Consistency Analizi** (%30): Adlandırma kurallarını, response desenlerini ve yapısal tutarlılığı değerlendirir
  - **Dokümantasyon Kalitesi** (%20): API dokümantasyonunun tamlığını ve netliğini değerlendirir
  - **Security İmplementasyonu** (%20): Authentication, authorization ve security header'larını inceler
  - **Usability Tasarımı** (%15): Kullanım kolaylığını, keşfedilebilirliği ve geliştirici deneyimini analiz eder
  - **Performance Desenleri** (%15): Caching, pagination ve efficiency desenlerini değerlendirir

  ## REST Tasarım Prensipleri

  ### Resource Adlandırma Kuralları
  ```
  ✅ İyi Örnekler:
  - /api/v1/users
  - /api/v1/user-profiles
  - /api/v1/orders/123/line-items

  ❌ Kötü Örnekler:
  - /api/v1/getUsers
  - /api/v1/user_profiles
  - /api/v1/orders/123/lineItems
  ```

  ### HTTP Method Kullanımı
  - **GET**: Kaynakları al (safe, idempotent)
  - **POST**: Yeni kaynaklar oluştur (non-idempotent)
  - **PUT**: Tüm kaynakları değiştir (idempotent)
  - **PATCH**: Kısmi kaynak güncellemeleri (zorunlu değil idempotent)
  - **DELETE**: Kaynakları sil (idempotent)

  ### URL Yapısı En İyi Uygulamaları
  ```
  Collection Resources: /api/v1/users
  Individual Resources: /api/v1/users/123
  Nested Resources: /api/v1/users/123/orders
  Actions: /api/v1/users/123/activate (POST)
  Filtering: /api/v1/users?status=active&role=admin
  ```

  ## Versioning Stratejileri

  ### 1. URL Versioning (Önerilen)
  ```
  /api/v1/users
  /api/v2/users
  ```
  **Avantajları**: Net, açık, yönlendirmesi kolay  
  **Dezavantajları**: URL çoğalması, caching karmaşıklığı

  ### 2. Header Versioning
  ```
  GET /api/users
  Accept: application/vnd.api+json;version=1
  ```
  **Avantajları**: Temiz URL'ler, content negotiation  
  **Dezavantajları**: Daha az görünür, manuel test zor

  ### 3. Media Type Versioning
  ```
  GET /api/users
  Accept: application/vnd.myapi.v1+json
  ```
  **Avantajları**: RESTful, multiple representations'ı destekler  
  **Dezavantajları**: Karmaşık, uygulanması zor

  ### 4. Query Parameter Versioning
  ```
  /api/users?version=1
  ```
  **Avantajları**: Uygulanması basit  
  **Dezavantajları**: RESTful değil, yoksayılabilir

  ## Pagination Desenleri

  ### Offset-Based Pagination
  ```json
  {
    "data": [...],
    "pagination": {
      "offset": 20,
      "limit": 10,
      "total": 150,
      "hasMore": true
    }
  }
  ```

  ### Cursor-Based Pagination
  ```json
  {
    "data": [...],
    "pagination": {
      "nextCursor": "eyJpZCI6MTIzfQ==",
      "hasMore": true
    }
  }
  ```

  ### Page-Based Pagination
  ```json
  {
    "data": [...],
    "pagination": {
      "page": 3,
      "pageSize": 10,
      "totalPages": 15,
      "totalItems": 150
    }
  }
  ```

  ## Error Response Formatları

  ### Standart Error Yapısı
  ```json
  {
    "error": {
      "code": "VALIDATION_ERROR",
      "message": "The request contains invalid parameters",
      "details": [
        {
          "field": "email",
          "code": "INVALID_FORMAT",
          "message": "Email address is not valid"
        }
      ],
      "requestId": "req-123456",
      "timestamp": "2024-02-16T13:00:00Z"
    }
  }
  ```

  ### HTTP Status Code Kullanımı
  - **400 Bad Request**: Geçersiz request syntax veya parametreler
  - **401 Unauthorized**: Authentication gerekli
  - **403 Forbidden**: Erişim reddedildi (authenticated fakat authorized değil)
  - **404 Not Found**: Kaynak bulunamadı
  - **409 Conflict**: Kaynak çatışması (duplicate, version mismatch)
  - **422 Unprocessable Entity**: Geçerli syntax fakat semantic hatalar
  - **429 Too Many Requests**: Rate limit aşıldı
  - **500 Internal Server Error**: Beklenmeyen server hatası

  ## Authentication ve Authorization Desenleri

  ### Bearer Token Authentication
  ```
  Authorization: Bearer <token>
  ```

  ### API Key Authentication
  ```
  X-API-Key: <api-key>
  Authorization: Api-Key <api-key>
  ```

  ### OAuth 2.0 Flow
  ```
  Authorization: Bearer <oauth-access-token>
  ```

  ### Role-Based Access Control (RBAC)
  ```json
  {
    "user": {
      "id": "123",
      "roles": ["admin", "editor"],
      "permissions": ["read:users", "write:orders"]
    }
  }
  ```

  ## Rate Limiting İmplementasyonu

  ### Headers
  ```
  X-RateLimit-Limit: 1000
  X-RateLimit-Remaining: 999
  X-RateLimit-Reset: 1640995200
  ```

  ### Limit Aşıldığında Response
  ```json
  {
    "error": {
      "code": "RATE_LIMIT_EXCEEDED",
      "message": "Too many requests",
      "retryAfter": 3600
    }
  }
  ```

  ## HATEOAS (Hypermedia as the Engine of Application State)

  ### Örnek İmplementasyon
  ```json
  {
    "id": "123",
    "name": "John Doe",
    "email": "john@example.com",
    "_links": {
      "self": { "href": "/api/v1/users/123" },
      "orders": { "href": "/api/v1/users/123/orders" },
      "profile": { "href": "/api/v1/users/123/profile" },
      "deactivate": { 
        "href": "/api/v1/users/123/deactivate",
        "method": "POST"
      }
    }
  }
  ```

  ## Idempotency

  ### Idempotent Methods
  - **GET**: Her zaman safe ve idempotent
  - **PUT**: Idempotent olmalıdır (tüm kaynağı değiştir)
  - **DELETE**: Idempotent olmalıdır (aynı sonuç)
  - **PATCH**: Idempotent olabilir veya olmayabilir

  ### Idempotency Keys
  ```
  POST /api/v1/payments
  Idempotency-Key: 123e4567-e89b-12d3-a456-426614174000
  ```

  ## Backward Compatibility Yönergeleri

  ### Güvenli Değişiklikler (Non-Breaking)
  - Request'lere optional alanlar eklemek
  - Response'lara alanlar eklemek
  - Yeni endpoint'ler eklemek
  - Required alanları optional yapmak
  - Yeni enum değerleri eklemek (graceful handling ile)

  ### Breaking Değişiklikler (Version Bump Gereklidir)
  - Response'lardan alanları kaldırmak
  - Optional alanları required yapmak
  - Field type'larını değiştirmek
  - Endpoint'leri kaldırmak
  - URL yapılarını değiştirmek
  - Error response formatlarını değiştirmek

  ## OpenAPI/Swagger Validation

  ### Gerekli Bileşenler
  - **API Information**: Başlık, açıklama, versiyon
  - **Server Information**: Base URL'ler ve açıklamalar
  - **Path Definitions**: Tüm endpoint'ler ve method'lar
  - **Parameter Definitions**: Query, path, header parametreleri
  - **Request/Response Schemas**: Tam data modelleri
  - **Security Definitions**: Authentication şemaları
  - **Error Responses**: Standart error formatları

  ### En İyi Uygulamalar
  - Tutarlı adlandırma kuralları kullanmak
  - Tüm bileşenler için detaylı açıklamalar sağlamak
  - Karmaşık objeler için örnekler eklemek
  - Reusable component'ler ve schema'lar tanımlamak
  - OpenAPI specification'a karşı valide etmek

  ## Performance Hususları

  ### Caching Stratejileri
  ```
  Cache-Control: public, max-age=3600
  ETag: "123456789"
  Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT
  ```

  ### Verimli Data Transfer
  - Uygun HTTP method'larını kullanmak
  - Field selection'ı uygulamak (`?fields=id,name,email`)
  - Compression'ı desteklemek (gzip)
  - Verimli pagination uygulamak
  - Conditional request'ler için ETag'ları kullanmak

  ### Resource Optimizasyonu
  - N+1 query'lerinden kaçınmak
  - Batch operations uygulamak
  - Heavy operations için async processing kullanmak
  - Partial updates'i desteklemek (PATCH)

  ## Security En İyi Uygulamaları

  ### Input Validation
  - Tüm input parametrelerini valide etmek
  - User data'sını sanitize etmek
  - Parameterized query'leri kullanmak
  - Request size limit'lerini uygulamak

  ### Authentication Security
  - Her yerde HTTPS kullanmak
  - Güvenli token storage uygulamak
  - Token expiration ve refresh'i desteklemek
  - Güçlü authentication mekanizmaları kullanmak

  ### Authorization Kontrolleri
  - Principle of least privilege uygulamak
  - Resource-based permissions kullanmak
  - Fine-grained access control'ü desteklemek
  - Access pattern'lerini audit etmek

  ## Tools ve Scripts

  ### api_linter.py
  API specification'larını REST convention'ları ve en iyi uygulamalar açısından analiz eder.

  **Özellikler:**
  - OpenAPI/Swagger spec validation
  - Adlandırma convention kontrolleri
  - HTTP method kullanımı validation
  - Error format tutarlılığı
  - Dokümantasyon tamlığı analizi

  ### breaking_change_detector.py
  API specification versiyonlarını karşılaştırarak breaking change'leri tanımlar.

  **Özellikler:**
  - Endpoint karşılaştırması
  - Schema change tespiti
  - Field removal/modification izlemesi
  - Migration guide oluşturma
  - Impact severity değerlendirmesi

  ### api_scorecard.py
  API tasarım kalitesinin kapsamlı puanlamasını sağlar.

  **Özellikler:**
  - Multi-dimensional scoring
  - Detaylı improvement tavsiyeler
  - Letter grade değerlendirmesi (A-F)
  - Benchmark karşılaştırmaları
  - Progress tracking

  ## Integration Örnekleri

  ### CI/CD Integration
  ```yaml
  - name: "api-linting"
    run: python scripts/api_linter.py openapi.json

  - name: "breaking-change-detection"
    run: python scripts/breaking_change_detector.py openapi-v1.json openapi-v2.json

  - name: "api-scorecard"
    run: python scripts/api_scorecard.py openapi.json
  ```

  ### Pre-commit Hooks
  ```bash
  #!/bin/bash
  python engineering/api-design-reviewer/scripts/api_linter.py api/openapi.json
  if [ $? -ne 0 ]; then
    echo "API linting failed. Please fix the issues before committing."
    exit 1
  fi
  ```

  ## En İyi Uygulamalar Özeti

  1. **Tutarlılık Önce**: Adlandırma, response formatları ve desenlerde tutarlılığı korumak
  2. **Dokümantasyon**: Kapsamlı, güncel API dokümantasyonu sağlamak
  3. **Versioning**: Clear versioning stratejileri ile evolution'u planlamak
  4. **Error Handling**: Tutarlı, bilgilendirici error response'lar uygulamak
  5. **Security**: API'nin her katmanında security inşa etmek
  6. **Performance**: Baştan itibaren scale ve efficiency için tasarlamak
  7. **Backward Compatibility**: Breaking change'leri minimize etmek ve migration path'leri sağlamak
  8. **Testing**: Contract testing dahil kapsamlı testing uygulamak
  9. **Monitoring**: API kullanımı ve performance'ı için observability eklemek
  10. **Developer Experience**: Kullanım kolaylığını ve net dokümantasyonu önceliklendirmek

  ## Kaçınılması Gereken Yaygın Anti-Patterns

  1. **Verb-based URL'ler**: Action'lar için değil, kaynaklar için noun'lar kullanmak
  2. **Inconsistent Response Formatları**: Standart response yapılarını korumak
  3. **Over-nesting**: Derin nested resource hierarchy'lerinden kaçınmak
  4. **HTTP Status Code'ları Göz Ardı Etmek**: Farklı senaryolar için uygun status code'lar kullanmak
  5. **Kötü Error Message'lar**: Actionable, spesifik error bilgisi sağlamak
  6. **Eksik Pagination**: List endpoint'lerine her zaman pagination eklemek
  7. **Versioning Stratejisi Olmamak**: Baştan itibaren API evolution'u planlamak
  8. **Internal Structure'ı Expose Etmek**: API'leri internal convenience'ı değil, external consumption için tasarlamak
  9. **Eksik Rate Limiting**: API'nizi abuse ve overload'dan korumak
  10. **Yetersiz Testing**: Error case'ler ve edge condition'lar dahil tüm yönleri test etmek

  ## Sonuç

  API Tasarım İncelemeci becerisi, yüksek kaliteli REST API'ler inşa etmek, incelemek ve bakım yapmak için kapsamlı bir framework sağlar. Bu yönergeleri takip ederek ve sağlanan tool'ları kullanarak, geliştirme ekipleri tutarlı, iyi dokümante edilmiş, güvenli ve bakım yapılabilir API'ler oluşturabilir.

  Linting, breaking change detection ve scoring tool'larının düzenli kullanımı, sürekli improvement'ı sağlar ve geliştirme lifecycle'ı boyunca API kalitesinin korunmasına yardımcı olur.
---

# API Design Reviewer

**Tier:** POWERFUL  
**Category:** Engineering / Architecture  
**Maintainer:** Claude Skills Team  

## Overview

The API Design Reviewer skill provides comprehensive analysis and review of API designs, focusing on REST conventions, best practices, and industry standards. This skill helps engineering teams build consistent, maintainable, and well-designed APIs through automated linting, breaking change detection, and design scorecards.

## Core Capabilities

### 1. API Linting and Convention Analysis
- **Resource Naming Conventions**: Enforces kebab-case for resources, camelCase for fields
- **HTTP Method Usage**: Validates proper use of GET, POST, PUT, PATCH, DELETE
- **URL Structure**: Analyzes endpoint patterns for consistency and RESTful design
- **Status Code Compliance**: Ensures appropriate HTTP status codes are used
- **Error Response Formats**: Validates consistent error response structures
- **Documentation Coverage**: Checks for missing descriptions and documentation gaps

### 2. Breaking Change Detection
- **Endpoint Removal**: Detects removed or deprecated endpoints
- **Response Shape Changes**: Identifies modifications to response structures
- **Field Removal**: Tracks removed or renamed fields in API responses
- **Type Changes**: Catches field type modifications that could break clients
- **Required Field Additions**: Flags new required fields that could break existing integrations
- **Status Code Changes**: Detects changes to expected status codes

### 3. API Design Scoring and Assessment
- **Consistency Analysis** (30%): Evaluates naming conventions, response patterns, and structural consistency
- **Documentation Quality** (20%): Assesses completeness and clarity of API documentation
- **Security Implementation** (20%): Reviews authentication, authorization, and security headers
- **Usability Design** (15%): Analyzes ease of use, discoverability, and developer experience
- **Performance Patterns** (15%): Evaluates caching, pagination, and efficiency patterns

## REST Design Principles

### Resource Naming Conventions
```
✅ Good Examples:
- /api/v1/users
- /api/v1/user-profiles
- /api/v1/orders/123/line-items

❌ Bad Examples:
- /api/v1/getUsers
- /api/v1/user_profiles
- /api/v1/orders/123/lineItems
```

### HTTP Method Usage
- **GET**: Retrieve resources (safe, idempotent)
- **POST**: Create new resources (not idempotent)
- **PUT**: Replace entire resources (idempotent)
- **PATCH**: Partial resource updates (not necessarily idempotent)
- **DELETE**: Remove resources (idempotent)

### URL Structure Best Practices
```
Collection Resources: /api/v1/users
Individual Resources: /api/v1/users/123
Nested Resources: /api/v1/users/123/orders
Actions: /api/v1/users/123/activate (POST)
Filtering: /api/v1/users?status=active&role=admin
```

## Versioning Strategies

### 1. URL Versioning (Recommended)
```
/api/v1/users
/api/v2/users
```
**Pros**: Clear, explicit, easy to route  
**Cons**: URL proliferation, caching complexity

### 2. Header Versioning
```
GET /api/users
Accept: application/vnd.api+json;version=1
```
**Pros**: Clean URLs, content negotiation  
**Cons**: Less visible, harder to test manually

### 3. Media Type Versioning
```
GET /api/users
Accept: application/vnd.myapi.v1+json
```
**Pros**: RESTful, supports multiple representations  
**Cons**: Complex, harder to implement

### 4. Query Parameter Versioning
```
/api/users?version=1
```
**Pros**: Simple to implement  
**Cons**: Not RESTful, can be ignored

## Pagination Patterns

### Offset-Based Pagination
```json
{
  "data": [...],
  "pagination": {
    "offset": 20,
    "limit": 10,
    "total": 150,
    "hasMore": true
  }
}
```

### Cursor-Based Pagination
```json
{
  "data": [...],
  "pagination": {
    "nextCursor": "eyJpZCI6MTIzfQ==",
    "hasMore": true
  }
}
```

### Page-Based Pagination
```json
{
  "data": [...],
  "pagination": {
    "page": 3,
    "pageSize": 10,
    "totalPages": 15,
    "totalItems": 150
  }
}
```

## Error Response Formats

### Standard Error Structure
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request contains invalid parameters",
    "details": [
      {
        "field": "email",
        "code": "INVALID_FORMAT",
        "message": "Email address is not valid"
      }
    ],
    "requestId": "req-123456",
    "timestamp": "2024-02-16T13:00:00Z"
  }
}
```

### HTTP Status Code Usage
- **400 Bad Request**: Invalid request syntax or parameters
- **401 Unauthorized**: Authentication required
- **403 Forbidden**: Access denied (authenticated but not authorized)
- **404 Not Found**: Resource not found
- **409 Conflict**: Resource conflict (duplicate, version mismatch)
- **422 Unprocessable Entity**: Valid syntax but semantic errors
- **429 Too Many Requests**: Rate limit exceeded
- **500 Internal Server Error**: Unexpected server error

## Authentication and Authorization Patterns

### Bearer Token Authentication
```
Authorization: Bearer <token>
```

### API Key Authentication
```
X-API-Key: <api-key>
Authorization: Api-Key <api-key>
```

### OAuth 2.0 Flow
```
Authorization: Bearer <oauth-access-token>
```

### Role-Based Access Control (RBAC)
```json
{
  "user": {
    "id": "123",
    "roles": ["admin", "editor"],
    "permissions": ["read:users", "write:orders"]
  }
}
```

## Rate Limiting Implementation

### Headers
```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
```

### Response on Limit Exceeded
```json
{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests",
    "retryAfter": 3600
  }
}
```

## HATEOAS (Hypermedia as the Engine of Application State)

### Example Implementation
```json
{
  "id": "123",
  "name": "John Doe",
  "email": "john@example.com",
  "_links": {
    "self": { "href": "/api/v1/users/123" },
    "orders": { "href": "/api/v1/users/123/orders" },
    "profile": { "href": "/api/v1/users/123/profile" },
    "deactivate": { 
      "href": "/api/v1/users/123/deactivate",
      "method": "POST"
    }
  }
}
```

## Idempotency

### Idempotent Methods
- **GET**: Always safe and idempotent
- **PUT**: Should be idempotent (replace entire resource)
- **DELETE**: Should be idempotent (same result)
- **PATCH**: May or may not be idempotent

### Idempotency Keys
```
POST /api/v1/payments
Idempotency-Key: 123e4567-e89b-12d3-a456-426614174000
```

## Backward Compatibility Guidelines

### Safe Changes (Non-Breaking)
- Adding optional fields to requests
- Adding fields to responses
- Adding new endpoints
- Making required fields optional
- Adding new enum values (with graceful handling)

### Breaking Changes (Require Version Bump)
- Removing fields from responses
- Making optional fields required
- Changing field types
- Removing endpoints
- Changing URL structures
- Modifying error response formats

## OpenAPI/Swagger Validation

### Required Components
- **API Information**: Title, description, version
- **Server Information**: Base URLs and descriptions
- **Path Definitions**: All endpoints with methods
- **Parameter Definitions**: Query, path, header parameters
- **Request/Response Schemas**: Complete data models
- **Security Definitions**: Authentication schemes
- **Error Responses**: Standard error formats

### Best Practices
- Use consistent naming conventions
- Provide detailed descriptions for all components
- Include examples for complex objects
- Define reusable components and schemas
- Validate against OpenAPI specification

## Performance Considerations

### Caching Strategies
```
Cache-Control: public, max-age=3600
ETag: "123456789"
Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT
```

### Efficient Data Transfer
- Use appropriate HTTP methods
- Implement field selection (`?fields=id,name,email`)
- Support compression (gzip)
- Implement efficient pagination
- Use ETags for conditional requests

### Resource Optimization
- Avoid N+1 queries
- Implement batch operations
- Use async processing for heavy operations
- Support partial updates (PATCH)

## Security Best Practices

### Input Validation
- Validate all input parameters
- Sanitize user data
- Use parameterized queries
- Implement request size limits

### Authentication Security
- Use HTTPS everywhere
- Implement secure token storage
- Support token expiration and refresh
- Use strong authentication mechanisms

### Authorization Controls
- Implement principle of least privilege
- Use resource-based permissions
- Support fine-grained access control
- Audit access patterns

## Tools and Scripts

### api_linter.py
Analyzes API specifications for compliance with REST conventions and best practices.

**Features:**
- OpenAPI/Swagger spec validation
- Naming convention checks
- HTTP method usage validation
- Error format consistency
- Documentation completeness analysis

### breaking_change_detector.py
Compares API specification versions to identify breaking changes.

**Features:**
- Endpoint comparison
- Schema change detection
- Field removal/modification tracking
- Migration guide generation
- Impact severity assessment

### api_scorecard.py
Provides comprehensive scoring of API design quality.

**Features:**
- Multi-dimensional scoring
- Detailed improvement recommendations
- Letter grade assessment (A-F)
- Benchmark comparisons
- Progress tracking

## Integration Examples

### CI/CD Integration
```yaml
- name: "api-linting"
  run: python scripts/api_linter.py openapi.json

- name: "breaking-change-detection"
  run: python scripts/breaking_change_detector.py openapi-v1.json openapi-v2.json

- name: "api-scorecard"
  run: python scripts/api_scorecard.py openapi.json
```

### Pre-commit Hooks
```bash
#!/bin/bash
python engineering/api-design-reviewer/scripts/api_linter.py api/openapi.json
if [ $? -ne 0 ]; then
  echo "API linting failed. Please fix the issues before committing."
  exit 1
fi
```

## Best Practices Summary

1. **Consistency First**: Maintain consistent naming, response formats, and patterns
2. **Documentation**: Provide comprehensive, up-to-date API documentation
3. **Versioning**: Plan for evolution with clear versioning strategies
4. **Error Handling**: Implement consistent, informative error responses
5. **Security**: Build security into every layer of the API
6. **Performance**: Design for scale and efficiency from the start
7. **Backward Compatibility**: Minimize breaking changes and provide migration paths
8. **Testing**: Implement comprehensive testing including contract testing
9. **Monitoring**: Add observability for API usage and performance
10. **Developer Experience**: Prioritize ease of use and clear documentation

## Common Anti-Patterns to Avoid

1. **Verb-based URLs**: Use nouns for resources, not actions
2. **Inconsistent Response Formats**: Maintain standard response structures
3. **Over-nesting**: Avoid deeply nested resource hierarchies
4. **Ignoring HTTP Status Codes**: Use appropriate status codes for different scenarios
5. **Poor Error Messages**: Provide actionable, specific error information
6. **Missing Pagination**: Always paginate list endpoints
7. **No Versioning Strategy**: Plan for API evolution from day one
8. **Exposing Internal Structure**: Design APIs for external consumption, not internal convenience
9. **Missing Rate Limiting**: Protect your API from abuse and overload
10. **Inadequate Testing**: Test all aspects including error cases and edge conditions

## Conclusion

The API Design Reviewer skill provides a comprehensive framework for building, reviewing, and maintaining high-quality REST APIs. By following these guidelines and using the provided tools, development teams can create APIs that are consistent, well-documented, secure, and maintainable.

Regular use of the linting, breaking change detection, and scoring tools ensures continuous improvement and helps maintain API quality throughout the development lifecycle.
