---
name: "fastapi"
clean_name: "FastAPI"
description: "FastAPI best practices and patterns for building modern Python web APIs"
description_tr: "FastAPI ile modern Python web API'leri geliştirmek için en iyi uygulamalar ve desenler"
category: "Backend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/fastapi.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/fastapi.mdc"
body_length: 2153
file_extension: ".mdc"
body_tr: |-
  # FastAPI En İyi Uygulamaları

  ## Proje Yapısı
  - Uygun dizin yapısı kullanın
  - Uygun modül organizasyonu uygulayın
  - Uygun bağımlılık enjeksiyonu kullanın
  - Rotaları alan bazında organize edin
  - Uygun middleware uygulayın
  - Uygun konfigürasyon yönetimi kullanın

  ## API Tasarımı
  - Uygun HTTP metotları kullanın
  - Uygun durum kodları uygulayın
  - Uygun request/response modellerini kullanın
  - Uygun doğrulama uygulayın
  - Uygun hata yönetimi kullanın
  - API'leri OpenAPI ile belgelendirin

  ## Modeller
  - Pydantic modellerini kullanın
  - Uygun doğrulama uygulayın
  - Uygun type hint'lerini kullanın
  - Modelleri organize tutun
  - Uygun inheritance kullanın
  - Uygun serialization uygulayın

  ## Veritabanı
  - Uygun ORM kullanın (SQLAlchemy)
  - Uygun migration'lar uygulayın
  - Uygun connection pooling kullanın
  - Uygun transaction'lar uygulayın
  - Uygun sorgu optimizasyonu kullanın
  - Veritabanı hatalarını düzgün yönetin

  ## Kimlik Doğrulama
  - Uygun JWT kimlik doğrulaması uygulayın
  - Uygun şifre hashing'i kullanın
  - Uygun rol tabanlı erişim kontrolü uygulayın
  - Uygun oturum yönetimi kullanın
  - Uygun OAuth2 uygulayın
  - Kimlik doğrulama hatalarını düzgün yönetin

  ## Güvenlik
  - Uygun CORS uygulayın
  - Uygun rate limiting kullanın
  - Uygun input doğrulaması uygulayın
  - Uygun güvenlik başlıklarını kullanın
  - Güvenlik hatalarını düzgün yönetin
  - Uygun logging uygulayın

  ## Performans
  - Uygun caching kullanın
  - Uygun async işlemleri uygulayın
  - Uygun arka plan görevleri kullanın
  - Uygun connection pooling uygulayın
  - Uygun sorgu optimizasyonu kullanın
  - Performans metriklerini izleyin

  ## Test
  - Uygun unit test'leri yazın
  - Uygun entegrasyon test'lerini uygulayın
  - Uygun test fixture'larını kullanın
  - Uygun mock'lama uygulayın
  - Hata senaryolarını test edin
  - Uygun test kapsamını kullanın

  ## Dağıtım
  - Uygun Docker konfigürasyonu kullanın
  - Uygun CI/CD uygulayın
  - Uygun ortam değişkenlerini kullanın
  - Uygun logging uygulayın
  - Uygun monitoring kullanın
  - Dağıtım hatalarını düzgün yönetin

  ## Dokümantasyon
  - Uygun docstring'leri kullanın
  - Uygun API dokümantasyonu uygulayın
  - Uygun type hint'lerini kullanın
  - Dokümantasyonu güncel tutun
  - Hata senaryolarını belgelendirin
  - Uygun versiyonlamayı kullanın
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
