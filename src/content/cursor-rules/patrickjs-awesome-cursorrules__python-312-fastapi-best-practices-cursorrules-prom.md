---
name: "python-312-fastapi-best-practices-cursorrules-prom"
clean_name: "Python 312 FastAPI Best Practices Cursorrules Prom"
description: "Cursor rules for Python FastAPI development with best practices."
description_tr: "Python FastAPI geliştirme için en iyi uygulamaları içeren cursor rules."
category: "Backend"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/python-312-fastapi-best-practices-cursorrules-prom.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/python-312-fastapi-best-practices-cursorrules-prom.mdc"
body_length: 1579
file_extension: ".mdc"
body_tr: |-
  İzlemeniz gereken bazı en iyi uygulamalar ve kurallar:

  - Python 3.12 kullanırsınız
  - Framework'ler:
    - pydantic
    - fastapi
    - sqlalchemy
  - Bağımlılık yönetimi için poetry kullanırsınız
  - Veritabanı migrationları için alembic kullanırsınız
  - Kullanıcı yönetimi için fastapi-users kullanırsınız
  - Kimlik doğrulama için fastapi-jwt-auth kullanırsınız
  - E-posta gönderimi için fastapi-mail kullanırsınız
  - Caching için fastapi-cache kullanırsınız
  - Rate limiting için fastapi-limiter kullanırsınız
  - Pagination için fastapi-pagination kullanırsınız

  1. **Anlamlı İsimler Kullanın**: Değişken, fonksiyon ve sınıf isimleri için açıklayıcı adlar seçin.
  2. **PEP 8'i Takip Edin**: Biçimlendirme için Python Enhancement Proposal 8 stil kılavuzuna uyun.
  3. **Docstring Kullanın**: Fonksiyonlar ve sınıflar için docstring'lerle amaçlarını açıklayın.
  4. **Basit Tutun**: Basit ve anlaşılır kod yazın; gereksiz karmaşıklıktan kaçının.
  5. **List Comprehension Kullanın**: Geleneksel döngüler yerine list comprehension'ı tercih edin.
  6. **İstisnai Durumları Ele Alın**: İstisnai durumları zarif bir şekilde işlemek için try-except bloklarını kullanın.
  7. **Sanal Ortamlar Kullanın**: Proje bağımlılıklarını sanal ortamlar kullanarak izole edin (örn. `venv`).
  8. **Test Yazın**: Kod güvenilirliğini sağlamak için unit testler uygulayın.
  9. **Type Hints Kullanın**: Daha iyi kod anlaşılırlığı ve type checking için type hints'i kullanın.
  10. **Global Değişkenlerden Kaçının**: Yan etkileri azaltmak için global değişken kullanımını sınırlayın.

  Bu kurallar, temiz, verimli ve bakımı kolay Python kodu yazmanıza yardımcı olacaktır.
---

Here are some best practices and rules you must follow:

- You use Python 3.12
- Frameworks:
  - pydantic
  - fastapi
  - sqlalchemy
- You use poetry for dependency management
- You use alembic for database migrations
- You use fastapi-users for user management
- You use fastapi-jwt-auth for authentication
- You use fastapi-mail for email sending
- You use fastapi-cache for caching
- You use fastapi-limiter for rate limiting
- You use fastapi-pagination for pagination

1. **Use Meaningful Names**: Choose descriptive variable, function, and class names.
2. **Follow PEP 8**: Adhere to the Python Enhancement Proposal 8 style guide for formatting.
3. **Use Docstrings**: Document functions and classes with docstrings to explain their purpose.
4. **Keep It Simple**: Write simple and clear code; avoid unnecessary complexity.
5. **Use List Comprehensions**: Prefer list comprehensions for creating lists over traditional loops when appropriate.
6. **Handle Exceptions**: Use try-except blocks to handle exceptions gracefully.
7. **Use Virtual Environments**: Isolate project dependencies using virtual environments (e.g., `venv`).
8. **Write Tests**: Implement unit tests to ensure code reliability.
9. **Use Type Hints**: Utilize type hints for better code clarity and type checking.
10. **Avoid Global Variables**: Limit the use of global variables to reduce side effects.

These rules will help you write clean, efficient, and maintainable Python code.
