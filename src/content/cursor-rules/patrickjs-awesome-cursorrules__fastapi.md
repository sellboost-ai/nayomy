---
name: "fastapi"
clean_name: "FastAPI"
description: "FastAPI best practices and patterns for building modern Python web APIs"
description_tr: "FastAPI ile modern Python web API'leri geliştirmek için en iyi pratikler ve tasarım desenleri"
category: "Backend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/fastapi.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/fastapi.mdc"
body_length: 2153
file_extension: ".mdc"
body_tr: |-
  # FastAPI En İyi Uygulamaları

  ## Proje Yapısı
  - Uygun dizin yapısı kullanın
  - Uygun modül organizasyonu gerçekleştirin
  - Uygun bağımlılık enjeksiyonu kullanın
  - Rotaları domain'e göre organize edin
  - Uygun middleware gerçekleştirin
  - Uygun konfigürasyon yönetimi kullanın

  ## API Tasarımı
  - Uygun HTTP metodları kullanın
  - Uygun durum kodları gerçekleştirin
  - Uygun request/response modellerini kullanın
  - Uygun doğrulama gerçekleştirin
  - Uygun hata yönetimi kullanın
  - API'leri OpenAPI ile dokümante edin

  ## Modeller
  - Pydantic modellerini kullanın
  - Uygun doğrulama gerçekleştirin
  - Uygun tip ipuçları kullanın
  - Modelleri organize edin
  - Uygun kalıtımı kullanın
  - Uygun serileştirme gerçekleştirin

  ## Veritabanı
  - Uygun ORM kullanın (SQLAlchemy)
  - Uygun migrasyonları gerçekleştirin
  - Uygun bağlantı havuzu kullanın
  - Uygun işlemleri gerçekleştirin
  - Uygun sorgu optimizasyonu kullanın
  - Veritabanı hatalarını uygun şekilde yönetin

  ## Kimlik Doğrulama
  - Uygun JWT kimlik doğrulaması gerçekleştirin
  - Uygun şifre hashleme kullanın
  - Uygun rol tabanlı erişim kontrolü gerçekleştirin
  - Uygun oturum yönetimi kullanın
  - Uygun OAuth2 gerçekleştirin
  - Kimlik doğrulama hatalarını uygun şekilde yönetin

  ## Güvenlik
  - Uygun CORS gerçekleştirin
  - Uygun hız sınırlaması kullanın
  - Uygun giriş doğrulaması gerçekleştirin
  - Uygun güvenlik başlıklarını kullanın
  - Güvenlik hatalarını uygun şekilde yönetin
  - Uygun günlüğe kaydetme gerçekleştirin

  ## Performans
  - Uygun önbellekleme kullanın
  - Uygun asenkron işlemleri gerçekleştirin
  - Uygun arka plan görevlerini kullanın
  - Uygun bağlantı havuzu gerçekleştirin
  - Uygun sorgu optimizasyonu kullanın
  - Performans metriklerini izleyin

  ## Test Etme
  - Uygun birim testleri yazın
  - Uygun entegrasyon testlerini gerçekleştirin
  - Uygun test fixture'larını kullanın
  - Uygun mock işlemleri gerçekleştirin
  - Hata senaryolarını test edin
  - Uygun test kapsamı kullanın

  ## Dağıtım
  - Uygun Docker konfigürasyonu kullanın
  - Uygun CI/CD gerçekleştirin
  - Uygun ortam değişkenlerini kullanın
  - Uygun günlüğe kaydetme gerçekleştirin
  - Uygun izlemeyi kullanın
  - Dağıtım hatalarını uygun şekilde yönetin

  ## Dokümantasyon
  - Uygun docstring'ler kullanın
  - Uygun API dokümantasyonu gerçekleştirin
  - Uygun tip ipuçları kullanın
  - Dokümantasyonu güncel tutun
  - Hata senaryolarını dokümante edin
  - Uygun sürümleme kullanın
---

# FastAPI Best Practices

## Project Structure
- Use proper directory structure
- Implement proper module organization
- Use proper dependency injection
- Keep routes organized by domain
- Implement proper middleware
- Use proper configuration management

## API Design
- Use proper HTTP methods
- Implement proper status codes
- Use proper request/response models
- Implement proper validation
- Use proper error handling
- Document APIs with OpenAPI

## Models
- Use Pydantic models
- Implement proper validation
- Use proper type hints
- Keep models organized
- Use proper inheritance
- Implement proper serialization

## Database
- Use proper ORM (SQLAlchemy)
- Implement proper migrations
- Use proper connection pooling
- Implement proper transactions
- Use proper query optimization
- Handle database errors properly

## Authentication
- Implement proper JWT authentication
- Use proper password hashing
- Implement proper role-based access
- Use proper session management
- Implement proper OAuth2
- Handle authentication errors properly

## Security
- Implement proper CORS
- Use proper rate limiting
- Implement proper input validation
- Use proper security headers
- Handle security errors properly
- Implement proper logging

## Performance
- Use proper caching
- Implement proper async operations
- Use proper background tasks
- Implement proper connection pooling
- Use proper query optimization
- Monitor performance metrics

## Testing
- Write proper unit tests
- Implement proper integration tests
- Use proper test fixtures
- Implement proper mocking
- Test error scenarios
- Use proper test coverage

## Deployment
- Use proper Docker configuration
- Implement proper CI/CD
- Use proper environment variables
- Implement proper logging
- Use proper monitoring
- Handle deployment errors properly

## Documentation
- Use proper docstrings
- Implement proper API documentation
- Use proper type hints
- Keep documentation updated
- Document error scenarios
- Use proper versioning
