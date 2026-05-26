---
name: "api-test-suite-builder"
description_en: "Use when the user asks to generate API tests, create integration test suites, test REST endpoints, or build contract tests."
description_tr: "Kullanıcı API testleri oluşturmak, entegrasyon test süitleri kurmak, REST endpoint'lerini test etmek veya contract testler geliştirmek istediğinde kullanın."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/api-test-suite-builder/SKILL.md"
path: ".gemini/skills/api-test-suite-builder/SKILL.md"
is_collection: false
body_length: 6079
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # API Test Suite Builder

  **Tier:** POWERFUL
  **Category:** Engineering
  **Domain:** Testing / API Quality

  ---

  ## Genel Bakış

  API rotası tanımlarını çeşitli framework'ler arasında tarar (Next.js App Router, Express, FastAPI, Django REST) ve
  kimlik doğrulama, giriş doğrulaması, hata kodları, sayfalandırma, dosya
  yüklemeleri ve oran sınırlamasını kapsayan kapsamlı test paketlerini otomatik olarak oluşturur. Vitest+Supertest (Node) veya Pytest+httpx
  (Python) için çalıştırmaya hazır test dosyaları çıktı verir.

  ---

  ## Temel Yetenekler

  - **Route detection** — kaynak dosyaları tarayarak tüm API uç noktalarını çıkartma
  - **Auth coverage** — geçerli/geçersiz/süresi dolan tokenler, eksik auth başlığı
  - **Input validation** — eksik alanlar, yanlış türler, sınır değerleri, injection denemeleri
  - **Error code matrix** — her route için 400/401/403/404/422/500
  - **Pagination** — ilk/son/boş/aşırı boyutlu sayfalar
  - **File uploads** — geçerli, aşırı boyutlu, yanlış MIME tipi, boş
  - **Rate limiting** — burst algılama, kullanıcı başına vs global sınırlar

  ---

  ## Ne Zaman Kullanılır

  - Yeni API eklendi — uygulamayı yazmadan önce test iskeleti oluşturun (TDD)
  - Testsiz eski API — tarayın ve temel kapsamı oluşturun
  - API kontratı incelemesi — mevcut testler geçerli route tanımlarıyla eşleşiyor mu kontrol edin
  - Sürüm öncesi regresyon kontrolü — tüm rotaların en azından smoke testleri olduğundan emin olun
  - Güvenlik denetimi hazırlığı — adversarial input testleri oluşturun

  ---

  ## Route Detection

  ### Next.js App Router
  ```bash
  # Tüm route handler'ları bul
  find ./app/api -name "route.ts" -o -name "route.js" | sort

  # Her route dosyasından HTTP methodlarını çıkart
  grep -rn "export async function\|export function" app/api/**/route.ts | \
    grep -oE "(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)" | sort -u

  # Tam route haritası
  find ./app/api -name "route.ts" | while read f; do
    route=$(echo $f | sed 's|./app||' | sed 's|/route.ts||')
    methods=$(grep -oE "export (async )?function (GET|POST|PUT|PATCH|DELETE)" "$f" | \
      grep -oE "(GET|POST|PUT|PATCH|DELETE)")
    echo "$methods $route"
  done
  ```

  ### Express
  ```bash
  # Tüm router dosyalarını bul
  find ./src -name "*.ts" -o -name "*.js" | xargs grep -l "router\.\(get\|post\|put\|delete\|patch\)" 2>/dev/null

  # Satır numaralarıyla routeları çıkart
  grep -rn "router\.\(get\|post\|put\|delete\|patch\)\|app\.\(get\|post\|put\|delete\|patch\)" \
    src/ --include="*.ts" | grep -oE "(get|post|put|delete|patch)\(['\"][^'\"]*['\"]"

  # Route haritası oluştur
  grep -rn "router\.\|app\." src/ --include="*.ts" | \
    grep -oE "\.(get|post|put|delete|patch)\(['\"][^'\"]+['\"]" | \
    sed "s/\.\(.*\)('\(.*\)'/\U\1 \2/"
  ```

  ### FastAPI
  ```bash
  # Tüm route dekoratörlerini bul
  grep -rn "@app\.\|@router\." . --include="*.py" | \
    grep -E "@(app|router)\.(get|post|put|delete|patch)"

  # Path ve fonksiyon adıyla çıkart
  grep -rn "@\(app\|router\)\.\(get\|post\|put\|delete\|patch\)" . --include="*.py" | \
    grep -oE "@(app|router)\.(get|post|put|delete|patch)\(['\"][^'\"]*['\"]"
  ```

  ### Django REST Framework
  ```bash
  # urlpatterns çıkartma
  grep -rn "path\|re_path\|url(" . --include="*.py" | grep "urlpatterns" -A 50 | \
    grep -E "path\(['\"]" | grep -oE "['\"][^'\"]+['\"]" | head -40

  # ViewSet router kaydı
  grep -rn "router\.register\|DefaultRouter\|SimpleRouter" . --include="*.py"
  ```

  ---

  ## Test Oluşturma Desenleri

  ### Auth Test Matrisi

  Her kimlik doğrulama gerektiren uç nokta için oluşturun:

  | Test Durumu | Beklenen Durum |
  |-----------|----------------|
  | Authorization başlığı yok | 401 |
  | Geçersiz token formatı | 401 |
  | Geçerli token, yanlış kullanıcı rolü | 403 |
  | Süresi dolan JWT token | 401 |
  | Geçerli token, doğru rol | 2xx |
  | Silinen kullanıcıdan token | 401 |

  ### Giriş Doğrulama Matrisi

  Request body olan her POST/PUT/PATCH uç noktası için:

  | Test Durumu | Beklenen Durum |
  |-----------|----------------|
  | Boş body `{}` | 400 or 422 |
  | Eksik gerekli alanlar (teker teker) | 400 or 422 |
  | Yanlış tür (string yerine int bekleniyor) | 400 or 422 |
  | Sınır: min-1 değeri | 400 or 422 |
  | Sınır: min değeri | 2xx |
  | Sınır: max değeri | 2xx |
  | Sınır: max+1 değeri | 400 or 422 |
  | String alanında SQL injection | 400 or 200 (sanitized) |
  | String alanında XSS payload | 400 or 200 (sanitized) |
  | Gerekli alanlar için null değerler | 400 or 422 |

  ---

  ## Örnek Test Dosyaları
  → Detaylar için references/example-test-files.md dosyasına bakın

  ## Route Taramasından Test Oluşturma

  Bir codebase verildiğinde, bu işlemi izleyin:

  1. **Routeları tarayın** yukarıdaki tespit komutlarını kullanarak
  2. **Her route handler'ı okuyun** şunları anlamak için:
     - Beklenen request body şeması
     - Kimlik doğrulama gereksinimleri (middleware, dekoratörler)
     - Dönüş türleri ve durum kodları
     - İş kuralları (sahiplik, rol kontrolleri)
  3. **Test dosyası oluşturun** yukarıdaki desenleri kullanarak route grubu başına
  4. **Testleri açıklayıcı olarak adlandırın**: `"returns 401 when token is expired"` değil `"auth test 3"`
  5. **Factories/fixtures kullanın** test verileri için — hiçbir zaman ID'leri hardcode etmeyin
  6. **Response şeklini assert edin**, sadece durum kodum değil

  ---

  ## Yaygın Tuzaklar

  - **Sadece happy path'i test etmek** — hataların %80'i error path'lerde yaşar; önce onları test edin
  - **Hardcoded test veri ID'leri** — factories/fixtures kullanın; ID'ler ortamlar arasında değişir
  - **Testler arasında paylaşılan state** — her zaman afterEach/afterAll'da temizleyin
  - **Implementasyonu değil davranışı test etmek** — API'nin ne döndürdüğünü test edin, nasıl yaptığını değil
  - **Sınır testlerinin eksik olması** — off-by-one hataları sayfalandırma ve limitlerde çok yaygındır
  - **Token geçerlilik süresini test etmemek** — süresi dolan tokenler geçersiz olanlardan farklı davranır
  - **Content-Type'ı görmezden gelmek** — API'nin yanlış content type'ları reddettiğini test edin (json bekleniyor xml geldi)

  ---

  ## En İyi Uygulamalar

  1. Uç nokta başına bir describe bloğu — hataları izole ve okunabilir tutar
  2. Minimal veri seed'i — tüm DB'yi yüklemeyin; test sadece ihtiyaç duyduğu şeyi oluşturur
  3. Paylaşılan setup için `beforeAll` kullanın, cleanup için `afterAll` — pahalı işlemler için `beforeEach` değil
  4. Belirli hata mesajları/alanları assert edin, sadece durum kodları değil
  5. Hassas alanların (password, secret) asla response'ta olmadığını test edin
  6. Auth testleri için, "missing header" durumunu her zaman "invalid token"ten ayrı test edin
  7. Rate limit testlerini en son ekleyin — paralel olarak çalışırsa diğer test paketlerini etkileyebilir
---

# API Test Suite Builder

**Tier:** POWERFUL
**Category:** Engineering
**Domain:** Testing / API Quality

---

## Overview

Scans API route definitions across frameworks (Next.js App Router, Express, FastAPI, Django REST) and
auto-generates comprehensive test suites covering auth, input validation, error codes, pagination, file
uploads, and rate limiting. Outputs ready-to-run test files for Vitest+Supertest (Node) or Pytest+httpx
(Python).

---

## Core Capabilities

- **Route detection** — scan source files to extract all API endpoints
- **Auth coverage** — valid/invalid/expired tokens, missing auth header
- **Input validation** — missing fields, wrong types, boundary values, injection attempts
- **Error code matrix** — 400/401/403/404/422/500 for each route
- **Pagination** — first/last/empty/oversized pages
- **File uploads** — valid, oversized, wrong MIME type, empty
- **Rate limiting** — burst detection, per-user vs global limits

---

## When to Use

- New API added — generate test scaffold before writing implementation (TDD)
- Legacy API with no tests — scan and generate baseline coverage
- API contract review — verify existing tests match current route definitions
- Pre-release regression check — ensure all routes have at least smoke tests
- Security audit prep — generate adversarial input tests

---

## Route Detection

### Next.js App Router
```bash
# Find all route handlers
find ./app/api -name "route.ts" -o -name "route.js" | sort

# Extract HTTP methods from each route file
grep -rn "export async function\|export function" app/api/**/route.ts | \
  grep -oE "(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)" | sort -u

# Full route map
find ./app/api -name "route.ts" | while read f; do
  route=$(echo $f | sed 's|./app||' | sed 's|/route.ts||')
  methods=$(grep -oE "export (async )?function (GET|POST|PUT|PATCH|DELETE)" "$f" | \
    grep -oE "(GET|POST|PUT|PATCH|DELETE)")
  echo "$methods $route"
done
```

### Express
```bash
# Find all router files
find ./src -name "*.ts" -o -name "*.js" | xargs grep -l "router\.\(get\|post\|put\|delete\|patch\)" 2>/dev/null

# Extract routes with line numbers
grep -rn "router\.\(get\|post\|put\|delete\|patch\)\|app\.\(get\|post\|put\|delete\|patch\)" \
  src/ --include="*.ts" | grep -oE "(get|post|put|delete|patch)\(['\"][^'\"]*['\"]"

# Generate route map
grep -rn "router\.\|app\." src/ --include="*.ts" | \
  grep -oE "\.(get|post|put|delete|patch)\(['\"][^'\"]+['\"]" | \
  sed "s/\.\(.*\)('\(.*\)'/\U\1 \2/"
```

### FastAPI
```bash
# Find all route decorators
grep -rn "@app\.\|@router\." . --include="*.py" | \
  grep -E "@(app|router)\.(get|post|put|delete|patch)"

# Extract with path and function name
grep -rn "@\(app\|router\)\.\(get\|post\|put\|delete\|patch\)" . --include="*.py" | \
  grep -oE "@(app|router)\.(get|post|put|delete|patch)\(['\"][^'\"]*['\"]"
```

### Django REST Framework
```bash
# urlpatterns extraction
grep -rn "path\|re_path\|url(" . --include="*.py" | grep "urlpatterns" -A 50 | \
  grep -E "path\(['\"]" | grep -oE "['\"][^'\"]+['\"]" | head -40

# ViewSet router registration
grep -rn "router\.register\|DefaultRouter\|SimpleRouter" . --include="*.py"
```

---

## Test Generation Patterns

### Auth Test Matrix

For every authenticated endpoint, generate:

| Test Case | Expected Status |
|-----------|----------------|
| No Authorization header | 401 |
| Invalid token format | 401 |
| Valid token, wrong user role | 403 |
| Expired JWT token | 401 |
| Valid token, correct role | 2xx |
| Token from deleted user | 401 |

### Input Validation Matrix

For every POST/PUT/PATCH endpoint with a request body:

| Test Case | Expected Status |
|-----------|----------------|
| Empty body `{}` | 400 or 422 |
| Missing required fields (one at a time) | 400 or 422 |
| Wrong type (string where int expected) | 400 or 422 |
| Boundary: value at min-1 | 400 or 422 |
| Boundary: value at min | 2xx |
| Boundary: value at max | 2xx |
| Boundary: value at max+1 | 400 or 422 |
| SQL injection in string field | 400 or 200 (sanitized) |
| XSS payload in string field | 400 or 200 (sanitized) |
| Null values for required fields | 400 or 422 |

---

## Example Test Files
→ See references/example-test-files.md for details

## Generating Tests from Route Scan

When given a codebase, follow this process:

1. **Scan routes** using the detection commands above
2. **Read each route handler** to understand:
   - Expected request body schema
   - Auth requirements (middleware, decorators)
   - Return types and status codes
   - Business rules (ownership, role checks)
3. **Generate test file** per route group using the patterns above
4. **Name tests descriptively**: `"returns 401 when token is expired"` not `"auth test 3"`
5. **Use factories/fixtures** for test data — never hardcode IDs
6. **Assert response shape**, not just status code

---

## Common Pitfalls

- **Testing only happy paths** — 80% of bugs live in error paths; test those first
- **Hardcoded test data IDs** — use factories/fixtures; IDs change between environments
- **Shared state between tests** — always clean up in afterEach/afterAll
- **Testing implementation, not behavior** — test what the API returns, not how it does it
- **Missing boundary tests** — off-by-one errors are extremely common in pagination and limits
- **Not testing token expiry** — expired tokens behave differently from invalid ones
- **Ignoring Content-Type** — test that API rejects wrong content types (xml when json expected)

---

## Best Practices

1. One describe block per endpoint — keeps failures isolated and readable
2. Seed minimal data — don't load the entire DB; create only what the test needs
3. Use `beforeAll` for shared setup, `afterAll` for cleanup — not `beforeEach` for expensive ops
4. Assert specific error messages/fields, not just status codes
5. Test that sensitive fields (password, secret) are never in responses
6. For auth tests, always test the "missing header" case separately from "invalid token"
7. Add rate limit tests last — they can interfere with other test suites if run in parallel
