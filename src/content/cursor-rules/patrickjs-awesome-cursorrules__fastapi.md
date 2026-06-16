---
name: "fastapi"
clean_name: "FastAPI"
description: "FastAPI best practices and patterns for building modern Python web APIs"
category: "Backend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/fastapi.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/fastapi.mdc"
body_length: 2153
file_extension: ".mdc"
body_tr: |-
  # FastAPI En İyi Uygulamalar

  ## Proje Yapısı
  - Uygun dizin yapısı kullanın
  - Uygun modül organizasyonu gerçekleştirin
  - Uygun dependency injection gerçekleştirin
  - Route'ları domain'e göre organize edin
  - Uygun middleware gerçekleştirin
  - Uygun konfigürasyon yönetimi kullanın

  ## API Tasarımı
  - Uygun HTTP method'larını kullanın
  - Uygun status code'ları gerçekleştirin
  - Uygun request/response model'lerini kullanın
  - Uygun validasyon gerçekleştirin
  - Uygun hata yönetimi kullanın
  - API'leri OpenAPI ile dokümante edin

  ## Model'ler
  - Pydantic model'lerini kullanın
  - Uygun validasyon gerçekleştirin
  - Uygun type hint'leri kullanın
  - Model'leri organize tutun
  - Uygun inheritance kullanın
  - Uygun serialization gerçekleştirin

  ## Veritabanı
  - Uygun ORM kullanın (SQLAlchemy)
  - Uygun migration'lar gerçekleştirin
  - Uygun connection pooling kullanın
  - Uygun transaction'lar gerçekleştirin
  - Uygun query optimizasyonu kullanın
  - Veritabanı hatalarını uygun şekilde yönetin

  ## Kimlik Doğrulama
  - Uygun JWT authentication gerçekleştirin
  - Uygun password hashing kullanın
  - Uygun role-based access gerçekleştirin
  - Uygun session management kullanın
  - Uygun OAuth2 gerçekleştirin
  - Kimlik doğrulama hatalarını uygun şekilde yönetin

  ## Güvenlik
  - Uygun CORS gerçekleştirin
  - Uygun rate limiting kullanın
  - Uygun input validation gerçekleştirin
  - Uygun security header'ları kullanın
  - Güvenlik hatalarını uygun şekilde yönetin
  - Uygun logging gerçekleştirin

  ## Performans
  - Uygun caching kullanın
  - Uygun async operation'ları gerçekleştirin
  - Uygun background task'ları kullanın
  - Uygun connection pooling gerçekleştirin
  - Uygun query optimizasyonu kullanın
  - Performans metriklerini izleyin

  ## Test Etme
  - Uygun unit test'ler yazın
  - Uygun integration test'leri gerçekleştirin
  - Uygun test fixture'larını kullanın
  - Uygun mocking gerçekleştirin
  - Hata senaryolarını test edin
  - Uygun test coverage kullanın

  ## Dağıtım
  - Uygun Docker konfigürasyonu kullanın
  - Uygun CI/CD gerçekleştirin
  - Uygun environment variable'larını kullanın
  - Uygun logging gerçekleştirin
  - Uygun monitoring kullanın
  - Dağıtım hatalarını uygun şekilde yönetin

  ## Dokümantasyon
  - Uygun docstring'ler kullanın
  - Uygun API dokümantasyonu gerçekleştirin
  - Uygun type hint'leri kullanın
  - Dokümantasyonu güncel tutun
  - Hata senaryolarını dokümante edin
  - Uygun versioning kullanın
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
