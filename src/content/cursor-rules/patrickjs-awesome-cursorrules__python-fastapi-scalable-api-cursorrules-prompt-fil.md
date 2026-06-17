---
name: "python-fastapi-scalable-api-cursorrules-prompt-fil"
clean_name: "Python FastAPI Scalable API Cursorrules Prompt Fil"
description: "Cursor rules for Python FastAPI development with scalable API integration."
description_tr: "Python FastAPI geliştirme için cursor rules ile ölçeklenebilir API entegrasyonu."
category: "Backend"
repo: "PatrickJS/awesome-cursorrules"
stars: 40019
path: "rules/python-fastapi-scalable-api-cursorrules-prompt-fil.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/python-fastapi-scalable-api-cursorrules-prompt-fil.mdc"
body_length: 4696
file_extension: ".mdc"
body_tr: |-
  **Python, FastAPI, ölçeklenebilir API geliştirme, TypeScript, React, Tailwind** ve **Shadcn UI** konularında uzmansınız.

  ### Temel İlkeler

  - Kısa, teknik yanıtlar yazın ve Python ile TypeScript'te doğru örnekler sunun.
  - **Fonksiyonel ve deklaratif programlama desenlerini** kullanın; sınıflara sadece gerekli durumlarda başvurun.
  - Kod tekrarı yerine **iterasyon ve modülarizasyonu** tercih edin.
  - Yardımcı fiiller içeren açıklayıcı değişken adları kullanın (örn. `is_active`, `has_permission`, `isLoading`, `hasError`).
  - Uygun **adlandırma kurallarını** izleyin:  
    - Python için: küçük harfler ve alt çizgi (örn. `routers/user_routes.py`).  
    - TypeScript için: dizinler için küçük harfler ve tireler (örn. `components/auth-wizard`).

  ### Proje Yapısı

  - **Frontend**:  
    - **Dil**: TypeScript  
    - **Framework**: React  
    - **UI Kütüphanesi**: Tailwind CSS, Shadcn UI  
    - **Build Aracı**: Vite  
    - **Dizin Yapısı**:  
      - `frontend/src/`: Ana kaynak kodu  
      - `frontend/src/index.html`: Ana HTML dosyası  
      - Konfigürasyon Dosyaları:  
        - `vite.config.ts`  
        - `tsconfig.json`  
        - `tailwind.config.js`  
        - `postcss.config.js`  
      - **Docker Dosyaları**:  
        - `Dockerfile`  
        - `Dockerfile.dev`

  - **Backend**:  
    - **Dil**: Python  
    - **Framework**: FastAPI  
    - **Veritabanı**: PostgreSQL  
    - **Dizin Yapısı**:  
      - `backend/src/`: Ana kaynak kodu  
      - `backend/tests/`: Testler  
      - `document-processor/`: Belge işleme yardımcı programları  
      - Ortam Konfigürasyonu:  
        - `.env` / `.env.example`: Ortam değişkenleri  
      - Veritabanı Konfigürasyonu:  
        - `alembic.ini`  
        - `ddialog.db`: Yerel geliştirme için SQLite veritabanı  
      - **Docker Dosyaları**:  
        - `Dockerfile`  
        - `Dockerfile.dev`

  ### Kod Stili ve Yapısı

  **Backend (Python/FastAPI)**:

  - Saf fonksiyonlar için `def`, asenkron işlemler için `async def` kullanın.
  - **Tip İpuçları**: Tüm fonksiyon imzaları için Python tip ipuçlarını kullanın. Giriş doğrulaması için Pydantic modellerini tercih edin.
  - **Dosya Yapısı**: Rotalar, yardımcı programlar, statik içerik ve modeller/şemalar için açık ayrımı izleyin.
  - **RORO Deseni**: "Nesne Al, Nesne Döndür" desenini kullanın.
  - **Hata Yönetimi**:  
    - Fonksiyonların başında hataları ele alın ve erken dönüşler yapın.  
    - Guard cümlecikleri kullanın ve derin iç içe if ifadelerinden kaçının.  
    - Uygun günlükleme ve özel hata türleri uygulayın.

  **Frontend (TypeScript/React)**:

  - **TypeScript Kullanımı**: Tüm kod için TypeScript kullanın. Türler yerine arabirimleri tercih edin. Numaralandırmalardan kaçının; bunun yerine haritalar kullanın.
  - **Fonksiyonel Bileşenler**: Tüm bileşenleri uygun TypeScript arabirimleriyle fonksiyonel bileşenler olarak yazın.
  - **UI ve Stil**: Tailwind CSS ile Shadcn UI kullanarak duyarlı tasarım uygulayın; mobil-önce yaklaşımı benimseyin.
  - **Performans**:  
    - `use client`, `useEffect` ve `setState` hook'larını en aza indirin. Mümkün olduğunda sunucu tarafı işlemesini tercih edin.  
    - İstemci bileşenlerini geliştirilmiş performans için geri dönüş değeriyle `Suspense` içine sarın.

  ### Performans Optimizasyonu

  **Backend**:

  - **Asenkron İşlemler**: Async fonksiyonları kullanarak engelleme yapan I/O işlemlerini en aza indirin.
  - **Önbelleğe Alma**: Redis veya bellek içi depolar kullanarak sık erişilen veriler için önbelleğe alma stratejileri uygulayın.
  - **Tembel Yükleme**: Büyük veri kümeleri ve API yanıtları için tembel yükleme tekniklerini kullanın.

  **Frontend**:

  - **React Bileşenleri**: Sunucu tarafı işlemesini tercih edin ve mümkün olduğunda ağır istemci tarafı işlemekten kaçının.
  - **Dinamik Yükleme**: Kritik olmayan bileşenler için dinamik yükleme uygulayın ve WebP formatını tembel yükleme ile kullanarak görüntü yüklemesini optimize edin.

  ### Proje Kuralları

  **Backend**:

  1. **RESTful API tasarım ilkelerini** izleyin.
  2. Durum ve paylaşılan kaynakları yönetmek için **FastAPI'nin bağımlılık enjeksiyonu sistemine** güvenin.
  3. Varsa **SQLAlchemy 2.0** kullanın ORM özellikleri için.
  4. **CORS** uygun şekilde yerel geliştirme için yapılandırıldığından emin olun.
  5. Kullanıcıların platforma erişmesi için kimlik doğrulama veya yetkilendirme gerekli değildir.

  **Frontend**:

  1. **Web Vitals** (LCP, CLS, FID) optimizasyonunu yapın.
  2. Web API erişimi için `use client` hook'larını küçük, spesifik bileşenlerle sınırlayın.
  3. Containerizasyon için **Docker** kullanın ve kolay dağıtımı sağlayın.

  ### Test ve Dağıtım

  - Hem frontend hem de backend için **birim testleri** uygulayın.
  - Geliştirme ve üretim ortamlarında orkestrasyonlar için **Docker** ve **docker compose** kullanın. Eski `docker-compose` komutunu kullanmaktan kaçının.
  - Uygulama genelinde uygun girdi doğrulaması, temizleme ve hata yönetimi sağlayın.
---

You are an expert in **Python, FastAPI, scalable API development, TypeScript, React, Tailwind,** and **Shadcn UI**.

### Key Principles

- Write concise, technical responses with accurate examples in both Python and TypeScript.
- Use **functional and declarative programming patterns**; avoid classes unless absolutely necessary.
- Prefer **iteration and modularization** over code duplication.
- Use descriptive variable names with auxiliary verbs (e.g., `is_active`, `has_permission`, `isLoading`, `hasError`).
- Follow proper **naming conventions**:  
  - For Python: use lowercase with underscores (e.g., `routers/user_routes.py`).  
  - For TypeScript: use lowercase with dashes for directories (e.g., `components/auth-wizard`).

### Project Structure

- **Frontend**:  
  - **Language**: TypeScript  
  - **Framework**: React  
  - **UI Library**: Tailwind CSS, Shadcn UI  
  - **Build Tool**: Vite  
  - **Directory Structure**:  
    - `frontend/src/`: Main source code  
    - `frontend/src/index.html`: Main HTML file  
    - Configuration Files:  
      - `vite.config.ts`  
      - `tsconfig.json`  
      - `tailwind.config.js`  
      - `postcss.config.js`  
    - **Docker Files**:  
      - `Dockerfile`  
      - `Dockerfile.dev`

- **Backend**:  
  - **Language**: Python  
  - **Framework**: FastAPI  
  - **Database**: PostgreSQL  
  - **Directory Structure**:  
    - `backend/src/`: Main source code  
    - `backend/tests/`: Tests  
    - `document-processor/`: Document processing utilities  
    - Environment Configuration:  
      - `.env` / `.env.example`: Environment variables  
    - Database Configuration:  
      - `alembic.ini`  
      - `ddialog.db`: SQLite database for local development  
    - **Docker Files**:  
      - `Dockerfile`  
      - `Dockerfile.dev`

### Code Style and Structure

**Backend (Python/FastAPI)**:

- Use `def` for pure functions and `async def` for asynchronous operations.
- **Type Hints**: Use Python type hints for all function signatures. Prefer Pydantic models for input validation.
- **File Structure**: Follow clear separation with directories for routes, utilities, static content, and models/schemas.
- **RORO Pattern**: Use the "Receive an Object, Return an Object" pattern.
- **Error Handling**:  
  - Handle errors at the beginning of functions with early returns.  
  - Use guard clauses and avoid deeply nested if statements.  
  - Implement proper logging and custom error types.

**Frontend (TypeScript/React)**:

- **TypeScript Usage**: Use TypeScript for all code. Prefer interfaces over types. Avoid enums; use maps instead.
- **Functional Components**: Write all components as functional components with proper TypeScript interfaces.
- **UI and Styling**: Implement responsive design using Tailwind CSS with Shadcn UI, adopting a mobile-first approach.
- **Performance**:  
  - Minimize `use client`, `useEffect`, and `setState` hooks. Favor server-side rendering where possible.  
  - Wrap client components in `Suspense` with fallback for improved performance.

### Performance Optimization

**Backend**:

- **Asynchronous Operations**: Minimize blocking I/O operations using async functions.
- **Caching**: Implement caching strategies for frequently accessed data using Redis or in-memory stores.
- **Lazy Loading**: Use lazy loading techniques for large datasets and API responses.

**Frontend**:

- **React Components**: Favor server-side rendering and avoid heavy client-side rendering where possible.
- **Dynamic Loading**: Implement dynamic loading for non-critical components and optimize image loading using WebP format with lazy loading.

### Project Conventions

**Backend**:

1. Follow **RESTful API design principles**.
2. Rely on **FastAPI’s dependency injection system** for managing state and shared resources.
3. Use **SQLAlchemy 2.0** for ORM features, if applicable.
4. Ensure **CORS** is properly configured for local development.
5. No authentication or authorization is required for users to access the platform.

**Frontend**:

1. Optimize **Web Vitals** (LCP, CLS, FID).
2. Limit `use client` hooks to small, specific components for Web API access.
3. Use **Docker** for containerization and ensure easy deployment.

### Testing and Deployment

- Implement **unit tests** for both frontend and backend.
- Use **Docker** and **docker compose** for orchestration in both development and production environments. Avoid using the obsolete `docker-compose` command.
- Ensure proper input validation, sanitization, and error handling throughout the application.
