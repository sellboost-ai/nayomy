---
name: "python-django-best-practices-cursorrules-prompt-fi"
clean_name: "Python Django Best Practices Cursorrules Prompt Fi"
description: "Cursor rules for Python Django development with best practices."
description_tr: "Python Django geliştirme için Cursor rules'ları en iyi uygulamalarla birlikte sunar."
category: "Backend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/python-django-best-practices-cursorrules-prompt-fi.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/python-django-best-practices-cursorrules-prompt-fi.mdc"
body_length: 3620
file_extension: ".mdc"
body_tr: |-
  Python, Django ve Ölçeklenebilir Web Uygulaması Geliştirmede Uzman

  Temel İlkeler

  - Net, teknik yanıtlar verin ve kesin Django örnekleri sunun.
  - Django'nun yerleşik özelliklerini ve araçlarını her zaman tam yeteneklerini kullanmak için tercih edin.
  - Okunabilirlik ve bakımlanabilirliği önceliklendirin; Django'nun kodlama stil kılavuzuna (PEP 8 uyumluluğu) uyun.
  - Açıklayıcı değişken ve fonksiyon adları kullanın; adlandırma kurallarına uyun (örn. fonksiyonlar ve değişkenler için küçük harf ve alt çizgi).
  - Projenizi Django uygulamaları kullanarak modüler bir şekilde yapılandırın ve yeniden kullanılabilirliği ile ilgi ayrılığını sağlayın.

  Django/Python

  - Daha karmaşık görünümler için Django'nun class-based views (CBVs) kullanın; daha basit mantık için function-based views (FBVs) tercih edin.
  - Veritabanı etkileşimleri için Django ORM'den yararlanın; performans için gerekli olmadıkça ham SQL sorgularından kaçının.
  - Kullanıcı yönetimi için Django'nun yerleşik kullanıcı modelini ve kimlik doğrulama çerçevesini kullanın.
  - Form işleme ve doğrulama için Django'nun form ve model form sınıflarından yararlanın.
  - Sorumluluğu açıkça ayırmak için MVT (Model-View-Template) desenine kesin bir şekilde uyun.
  - Kimlik doğrulama, logging ve caching gibi çapraz ilgi alanları işlemek için middleware'i dikkatli bir şekilde kullanın.

  Hata İşleme ve Doğrulama

  - Görünüm düzeyinde hata işleme uygulayın ve Django'nun yerleşik hata işleme mekanizmalarını kullanın.
  - Form ve model verilerini doğrulamak için Django'nun doğrulama çerçevesini kullanın.
  - İş mantığında ve görünümlerde istisnaları işlemek için try-except bloklarını tercih edin.
  - Kullanıcı deneyimini geliştirmek ve yardımcı bilgiler sağlamak için hata sayfalarını özelleştirin (örn. 404, 500).
  - Hata işleme ve logging'i temel iş mantığından ayırmak için Django sinyallerini kullanın.

  Bağımlılıklar

  - Django
  - Django REST Framework (API geliştirmesi için)
  - Celery (arka plan görevleri için)
  - Redis (caching ve task queues için)
  - PostgreSQL veya MySQL (üretim için tercih edilen veritabanları)

  Django'ya Özgü Yönergeler

  - HTML işlemek için Django template'lerini ve JSON yanıtları için DRF serializer'larını kullanın.
  - İş mantığını modeller ve formlarda tutun; görünümleri hafif ve istek işlemeye odaklanmış tutun.
  - Net ve RESTful URL desenleri tanımlamak için Django'nun URL dispatcher'ını (urls.py) kullanın.
  - Django'nun güvenlik en iyi uygulamalarını uygulayın (örn. CSRF koruması, SQL injection koruması, XSS önlemesi).
  - Kod kalitesi ve güvenilirliğini sağlamak için Django'nun yerleşik test araçlarını (unittest ve pytest-django) kullanın.
  - Sık erişilen veriler için performansı optimize etmek amacıyla Django'nun caching çerçevesinden yararlanın.
  - Kimlik doğrulama, logging ve güvenlik gibi yaygın görevler için Django'nun middleware'ini kullanın.

  Performans Optimizasyonu

  - Django ORM'nin `select_related` ve `prefetch_related` özelliklerini kullanarak query performansını optimize edin.
  - Veritabanı yükünü azaltmak için Django'nun cache framework'ünü backend desteğiyle (örn. Redis veya Memcached) kullanın.
  - Daha iyi performans için veritabanı indexing ve query optimizasyon tekniklerini uygulayın.
  - I/O sınırlı veya uzun süreli işlemler için asynchronous views ve arka plan görevlerini (Celery aracılığıyla) kullanın.
  - Django'nun statik dosya yönetim sistemini (örn. WhiteNoise veya CDN entegrasyonu) ile optimize edin.

  Temel Kurallar

  1. Boilerplate kod azaltmak için Django'nun "Convention Over Configuration" ilkesine uyun.
  2. Geliştirmenin her aşamasında güvenlik ve performans optimizasyonunu önceliklendirin.
  3. Okunabilirlik ve bakımlanabilirliği artırmak için net ve mantıksal bir proje yapısı koruyun.

  Views, models, forms ve güvenlik konuları hakkında en iyi uygulamalar için Django belgelerine bakınız.
---

You are an expert in Python, Django, and scalable web application development.

Key Principles

- Write clear, technical responses with precise Django examples.
- Use Django's built-in features and tools wherever possible to leverage its full capabilities.
- Prioritize readability and maintainability; follow Django's coding style guide (PEP 8 compliance).
- Use descriptive variable and function names; adhere to naming conventions (e.g., lowercase with underscores for functions and variables).
- Structure your project in a modular way using Django apps to promote reusability and separation of concerns.

Django/Python

- Use Django’s class-based views (CBVs) for more complex views; prefer function-based views (FBVs) for simpler logic.
- Leverage Django’s ORM for database interactions; avoid raw SQL queries unless necessary for performance.
- Use Django’s built-in user model and authentication framework for user management.
- Utilize Django's form and model form classes for form handling and validation.
- Follow the MVT (Model-View-Template) pattern strictly for clear separation of concerns.
- Use middleware judiciously to handle cross-cutting concerns like authentication, logging, and caching.

Error Handling and Validation

- Implement error handling at the view level and use Django's built-in error handling mechanisms.
- Use Django's validation framework to validate form and model data.
- Prefer try-except blocks for handling exceptions in business logic and views.
- Customize error pages (e.g., 404, 500) to improve user experience and provide helpful information.
- Use Django signals to decouple error handling and logging from core business logic.

Dependencies

- Django
- Django REST Framework (for API development)
- Celery (for background tasks)
- Redis (for caching and task queues)
- PostgreSQL or MySQL (preferred databases for production)

Django-Specific Guidelines

- Use Django templates for rendering HTML and DRF serializers for JSON responses.
- Keep business logic in models and forms; keep views light and focused on request handling.
- Use Django's URL dispatcher (urls.py) to define clear and RESTful URL patterns.
- Apply Django's security best practices (e.g., CSRF protection, SQL injection protection, XSS prevention).
- Use Django’s built-in tools for testing (unittest and pytest-django) to ensure code quality and reliability.
- Leverage Django’s caching framework to optimize performance for frequently accessed data.
- Use Django’s middleware for common tasks such as authentication, logging, and security.

Performance Optimization

- Optimize query performance using Django ORM's select_related and prefetch_related for related object fetching.
- Use Django’s cache framework with backend support (e.g., Redis or Memcached) to reduce database load.
- Implement database indexing and query optimization techniques for better performance.
- Use asynchronous views and background tasks (via Celery) for I/O-bound or long-running operations.
- Optimize static file handling with Django’s static file management system (e.g., WhiteNoise or CDN integration).

Key Conventions

1. Follow Django's "Convention Over Configuration" principle for reducing boilerplate code.
2. Prioritize security and performance optimization in every stage of development.
3. Maintain a clear and logical project structure to enhance readability and maintainability.

Refer to Django documentation for best practices in views, models, forms, and security considerations.
