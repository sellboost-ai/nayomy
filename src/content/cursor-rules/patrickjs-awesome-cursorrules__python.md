---
name: "python"
clean_name: "Python"
description: "Python best practices and patterns for modern software development with Flask and SQLite"
description_tr: "Flask ve SQLite ile modern yazılım geliştirme için Python en iyi uygulamaları ve tasarım desenleri."
category: "Languages"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/python.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/python.mdc"
body_length: 3393
file_extension: ".mdc"
body_tr: |-
  # Python En İyi Uygulamaları

  ## Proje Yapısı
  - src-layout kullanın `src/your_package_name/` ile
  - Testleri `tests/` dizinine `src/` ile paralel olarak yerleştirin
  - Konfigürasyonu `config/` dizininde veya ortam değişkenleri olarak saklayın
  - Bağımlılıkları `requirements.txt` veya `pyproject.toml` dosyasında tutun
  - Statik dosyaları `static/` dizininde saklayın
  - Jinja2 şablonları için `templates/` kullanın

  ## Kod Stili
  - Black kod formatlamasını takip edin
  - Import sıralamak için isort kullanın
  - PEP 8 adlandırma kurallarını takip edin:
    - Fonksiyonlar ve değişkenler için snake_case
    - Sınıflar için PascalCase
    - Sabitler için UPPER_CASE
  - Maksimum satır uzunluğu 88 karakter (Black varsayılanı)
  - Relatif importlar yerine mutlak importları kullanın

  ## Type Hints
  - Tüm fonksiyon parametreleri ve dönüş değerleri için type hints kullanın
  - Türleri `typing` modülünden içe aktarın
  - `Type | None` yerine `Optional[Type]` kullanın
  - Genel tipler için `TypeVar` kullanın
  - `types.py` dosyasında custom türler tanımlayın
  - Duck typing için `Protocol` kullanın

  ## Flask Yapısı
  - Flask factory pattern kullanın
  - Rotaları Blueprint'ler kullanarak organize edin
  - Veritabanı için Flask-SQLAlchemy kullanın
  - Uygun hata yöneticileri uygulayın
  - Kimlik doğrulama için Flask-Login kullanın
  - View'leri uygun şekilde ayrı bir yapıyla düzenleyin

  ## Veritabanı
  - SQLAlchemy ORM kullanın
  - Alembic ile veritabanı göçlerini uygulayın
  - Uygun bağlantı havuzu kullanın
  - Modelleri ayrı modüllerde tanımlayın
  - Uygun ilişkiler uygulayın
  - Uygun indeksleme stratejileri kullanın

  ## Kimlik Doğrulama
  - Oturum yönetimi için Flask-Login kullanın
  - Flask-OAuth kullanarak Google OAuth uygulayın
  - Şifreleri bcrypt ile hash yapın
  - Uygun oturum güvenliği kullanın
  - CSRF koruması uygulayın
  - Uygun rol tabanlı erişim kontrolü kullanın

  ## API Tasarımı
  - REST API'ler için Flask-RESTful kullanın
  - Uygun istek doğrulaması uygulayın
  - Uygun HTTP durum kodlarını kullanın
  - Hataları tutarlı şekilde işleyin
  - Uygun yanıt formatlarını kullanın
  - Uygun hız sınırlandırması uygulayın

  ## Test
  - Test etme için pytest kullanın
  - Tüm rotalar için testler yazın
  - Kapsam için pytest-cov kullanın
  - Uygun fixture'lar uygulayın
  - pytest-mock ile uygun mocking kullanın
  - Tüm hata senaryolarını test edin

  ## Güvenlik
  - Üretimde HTTPS kullanın
  - Uygun CORS uygulayın
  - Tüm kullanıcı girdilerini temizleyin
  - Uygun oturum konfigürasyonu kullanın
  - Uygun günlükleme uygulayın
  - OWASP yönergelerini takip edin

  ## Performans
  - Flask-Caching ile uygun önbellekleme kullanın
  - Veritabanı sorgu optimizasyonu uygulayın
  - Uygun bağlantı havuzu kullanın
  - Uygun sayfalandırma uygulayın
  - Ağır işlemler için arka plan görevleri kullanın
  - Uygulama performansını izleyin

  ## Hata Yönetimi
  - Custom exception sınıfları oluşturun
  - Uygun try-except blokları kullanın
  - Uygun günlükleme uygulayın
  - Uygun hata yanıtları döndürün
  - Sınır durumlarını uygun şekilde işleyin
  - Uygun hata mesajları kullanın

  ## Dokümantasyon
  - Google stili docstring'leri kullanın
  - Tüm genel API'leri dokümante edin
  - README.md dosyasını güncel tutun
  - Uygun satır içi yorumlar kullanın
  - API dokümantasyonu oluşturun
  - Ortam kurulumunu dokümante edin

  ## Geliştirme Akışı
  - Sanal ortamlar (venv) kullanın
  - Pre-commit hook'larını uygulayın
  - Uygun Git akışı kullanın
  - Anlamsal versiyonlamayı takip edin
  - Uygun CI/CD uygulamalarını kullanın
  - Uygun günlükleme uygulayın

  ## Bağımlılıklar
  - Bağımlılık sürümlerini sabitleyin
  - Üretim için requirements.txt kullanın
  - Geliştirme bağımlılıklarını ayırın
  - Uygun paket sürümleri kullanın
  - Bağımlılıkları düzenli olarak güncelleyin
  - Güvenlik açıkları için kontrol edin
---

# Python Best Practices

## Project Structure
- Use src-layout with `src/your_package_name/`
- Place tests in `tests/` directory parallel to `src/`
- Keep configuration in `config/` or as environment variables
- Store requirements in `requirements.txt` or `pyproject.toml`
- Place static files in `static/` directory
- Use `templates/` for Jinja2 templates

## Code Style
- Follow Black code formatting
- Use isort for import sorting
- Follow PEP 8 naming conventions:
  - snake_case for functions and variables
  - PascalCase for classes
  - UPPER_CASE for constants
- Maximum line length of 88 characters (Black default)
- Use absolute imports over relative imports

## Type Hints
- Use type hints for all function parameters and returns
- Import types from `typing` module
- Use `Optional[Type]` instead of `Type | None`
- Use `TypeVar` for generic types
- Define custom types in `types.py`
- Use `Protocol` for duck typing

## Flask Structure
- Use Flask factory pattern
- Organize routes using Blueprints
- Use Flask-SQLAlchemy for database
- Implement proper error handlers
- Use Flask-Login for authentication
- Structure views with proper separation of concerns

## Database
- Use SQLAlchemy ORM
- Implement database migrations with Alembic
- Use proper connection pooling
- Define models in separate modules
- Implement proper relationships
- Use proper indexing strategies

## Authentication
- Use Flask-Login for session management
- Implement Google OAuth using Flask-OAuth
- Hash passwords with bcrypt
- Use proper session security
- Implement CSRF protection
- Use proper role-based access control

## API Design
- Use Flask-RESTful for REST APIs
- Implement proper request validation
- Use proper HTTP status codes
- Handle errors consistently
- Use proper response formats
- Implement proper rate limiting

## Testing
- Use pytest for testing
- Write tests for all routes
- Use pytest-cov for coverage
- Implement proper fixtures
- Use proper mocking with pytest-mock
- Test all error scenarios

## Security
- Use HTTPS in production
- Implement proper CORS
- Sanitize all user inputs
- Use proper session configuration
- Implement proper logging
- Follow OWASP guidelines

## Performance
- Use proper caching with Flask-Caching
- Implement database query optimization
- Use proper connection pooling
- Implement proper pagination
- Use background tasks for heavy operations
- Monitor application performance

## Error Handling
- Create custom exception classes
- Use proper try-except blocks
- Implement proper logging
- Return proper error responses
- Handle edge cases properly
- Use proper error messages

## Documentation
- Use Google-style docstrings
- Document all public APIs
- Keep README.md updated
- Use proper inline comments
- Generate API documentation
- Document environment setup

## Development Workflow
- Use virtual environments (venv)
- Implement pre-commit hooks
- Use proper Git workflow
- Follow semantic versioning
- Use proper CI/CD practices
- Implement proper logging

## Dependencies
- Pin dependency versions
- Use requirements.txt for production
- Separate dev dependencies
- Use proper package versions
- Regularly update dependencies
- Check for security vulnerabilities
