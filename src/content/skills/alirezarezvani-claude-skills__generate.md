---
name: "generate"
description_en: ">- Generate Playwright tests. Use when user says \"write tests\", \"generate tests\", \"add tests for\", \"test this component\", \"e2e test\", \"create test for\", \"test this page\", or \"test this feature\"."
description_tr: "Playwright testleri oluşturun. Kullanıcı \"test yaz\", \"test oluştur\", \"için test ekle\", \"bu component'i test et\", \"e2e test\", \"test oluştur\", \"bu sayfayı test et\" veya \"bu özelliği test et\" dediğinde kullanın."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 18642
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/generate/SKILL.md"
path: ".gemini/skills/generate/SKILL.md"
is_collection: false
body_length: 4280
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Playwright Testleri Oluştur
  
  Bir kullanıcı hikayesinden, URL'den, bileşen adından veya özellik açıklamasından production-ready Playwright testleri oluştur.
  
  ## Giriş
  
  `$ARGUMENTS` test edilecek şeyi içerir. Örnekler:
  - `"kullanıcı e-posta ve şifre ile giriş yapabilir"`
  - `"ödeme akışı"`
  - `"src/components/UserProfile.tsx"`
  - `"filtreleri olan arama sayfası"`
  
  ## Adımlar
  
  ### 1. Hedefi Anla
  
  `$ARGUMENTS` öğesini ayrıştırarak şunları belirle:
  - **Kullanıcı hikayesi**: Doğrulanacak davranışı çıkar
  - **Bileşen yolu**: Bileşen kaynak kodunu oku
  - **Sayfa/URL**: Rotayı ve öğelerini tanımla
  - **Özellik adı**: İlgili uygulama alanlarıyla eşleştir
  
  ### 2. Kod Tabanını Keşfet
  
  Bağlam toplamak için `Explore` alt ajanını kullan:
  
  - `playwright.config.ts` öğesinde `testDir`, `baseURL`, `projects` değerlerini oku
  - Desenler, fixture'lar ve kurallar için `testDir` içindeki mevcut testleri kontrol et
  - Bir bileşen yolu verilmişse, prop'ları, durumları ve etkileşimlerini anlamak için bileşeni oku
  - `pages/` içinde mevcut sayfa nesnelerini kontrol et
  - `fixtures/` içinde mevcut fixture'ları kontrol et
  - Auth kurulumunu kontrol et (`auth.setup.ts` veya `storageState` config)
  
  ### 3. Şablonları Seç
  
  Bu eklentideki `templates/` klasöründe eşleşen desenleri kontrol et:
  
  | Test ediyorsan... | Şablonu yükle |
  |---|---|
  | Giriş/auth akışı | `../pw/templates/auth/login.md` |
  | CRUD işlemleri | `templates/crud/` |
  | Ödeme/checkout | `templates/checkout/` |
  | Arama/filtre UI | `templates/search/` |
  | Form gönderimi | `templates/forms/` |
  | Dashboard/veri | `templates/dashboard/` |
  | Ayarlar sayfası | `templates/settings/` |
  | Onboarding akışı | `templates/onboarding/` |
  | API endpoint'leri | `templates/api/` |
  | Erişilebilirlik | `templates/accessibility/` |
  
  Şablonu spesifik uygulamaya uyarla — `{{placeholders}}` yerine gerçek seçiciler, URL'ler ve veriler koy.
  
  ### 4. Testi Oluştur
  
  Bu kurallara uy:
  
  **Yapı:**
  ```typescript
  import { test, expect } from '@playwright/test';
  // Proje custom fixture'lar kullanıyorsa import et
  
  test.describe('Özellik Adı', () => {
    // İlgili davranışları grupla
  
    test('şunu yapmalı: <beklenen davranış>', async ({ page }) => {
      // Arrange: navigate et, durumu hazırla
      // Act: kullanıcı eylemini gerçekleştir
      // Assert: sonucu doğrula
    });
  });
  ```
  
  **Locator önceliği** (çalışan ilkini kullan):
  1. `getByRole()` — düğmeler, linkler, başlıklar, form öğeleri
  2. `getByLabel()` — etiketli form alanları
  3. `getByText()` — etkileşimli olmayan metin içeriği
  4. `getByPlaceholder()` — yer tutucu metni olan girdiler
  5. `getByTestId()` — semantic seçenekler mevcut olmadığında
  
  **Assertions** — her zaman web-first:
  ```typescript
  // İYİ — otomatik yeniden deneme
  await expect(page.getByRole('heading')).toBeVisible();
  await expect(page.getByRole('alert')).toHaveText('Başarılı');
  
  // KÖTÜ — yeniden deneme yok
  const text = await page.textContent('.msg');
  expect(text).toBe('Başarılı');
  ```
  
  **Asla kullanma:**
  - `page.waitForTimeout()`
  - `page.$(selector)` veya `page.$$(selector)`
  - Mutlak gerekmedikçe bare CSS seçiciler
  - Locator'lar yapabileceği şeyler için `page.evaluate()`
  
  **Her zaman içer:**
  - Davranışı açıklayan tanımlayıcı test adları
  - Happy path'in yanı sıra hata/edge case testleri
  - Her Playwright çağrısı üzerinde uygun `await`
  - `baseURL`-relative navigation (`page.goto('/')` değil `page.goto('http://...')`)
  
  ### 5. Proje Kurallarıyla Eşleştir
  
  - Proje TypeScript kullanıyorsa → `.spec.ts` oluştur
  - Proje JavaScript kullanıyorsa → `require()` import'ları ile `.spec.js` oluştur
  - Proje sayfa nesneleri kullanıyorsa → inline locator'lar yerine bunları kullan
  - Proje custom fixture'lar varsa → import et ve kullan
  - Proje test veri dizini varsa → veri dosyaları orada oluştur
  
  ### 6. Destekleyici Dosyalar Oluştur (Gerekirse)
  
  - **Sayfa nesnesi**: Test bir sayfada 5+ benzersiz locator'a değerse, bir sayfa nesnesi oluştur
  - **Fixture**: Test ortak setup gerektiriyorsa (auth, veri), bir fixture oluştur veya genişlet
  - **Test verisi**: Test yapılandırılmış veri kullanıyorsa, `test-data/` içinde bir JSON dosyası oluştur
  
  ### 7. Doğrula
  
  Oluşturulan testi çalıştır:
  
  ```bash
  npx playwright test <oluşturulan-dosya> --reporter=list
  ```
  
  Başarısız olursa:
  1. Hatayı oku
  2. Testi düzelt (uygulamayı değil)
  3. Tekrar çalıştır
  4. Eğer uygulama problemi ise, kullanıcıya bildir
  
  ## Çıktı
  
  - Oluşturulan test dosyası(ları) ve yol
  - Oluşturulan destekleyici dosyalar (sayfa nesneleri, fixture'lar, veri)
  - Test çalıştırma sonucu
  - Kapsama notu: hangi davranışlar artık test edilmektedir
---

# Generate Playwright Tests

Generate production-ready Playwright tests from a user story, URL, component name, or feature description.

## Input

`$ARGUMENTS` contains what to test. Examples:
- `"user can log in with email and password"`
- `"the checkout flow"`
- `"src/components/UserProfile.tsx"`
- `"the search page with filters"`

## Steps

### 1. Understand the Target

Parse `$ARGUMENTS` to determine:
- **User story**: Extract the behavior to verify
- **Component path**: Read the component source code
- **Page/URL**: Identify the route and its elements
- **Feature name**: Map to relevant app areas

### 2. Explore the Codebase

Use the `Explore` subagent to gather context:

- Read `playwright.config.ts` for `testDir`, `baseURL`, `projects`
- Check existing tests in `testDir` for patterns, fixtures, and conventions
- If a component path is given, read the component to understand its props, states, and interactions
- Check for existing page objects in `pages/`
- Check for existing fixtures in `fixtures/`
- Check for auth setup (`auth.setup.ts` or `storageState` config)

### 3. Select Templates

Check `templates/` in this plugin for matching patterns:

| If testing... | Load template from |
|---|---|
| Login/auth flow | `../pw/templates/auth/login.md` |
| CRUD operations | `templates/crud/` |
| Checkout/payment | `templates/checkout/` |
| Search/filter UI | `templates/search/` |
| Form submission | `templates/forms/` |
| Dashboard/data | `templates/dashboard/` |
| Settings page | `templates/settings/` |
| Onboarding flow | `templates/onboarding/` |
| API endpoints | `templates/api/` |
| Accessibility | `templates/accessibility/` |

Adapt the template to the specific app — replace `{{placeholders}}` with actual selectors, URLs, and data.

### 4. Generate the Test

Follow these rules:

**Structure:**
```typescript
import { test, expect } from '@playwright/test';
// Import custom fixtures if the project uses them

test.describe('Feature Name', () => {
  // Group related behaviors

  test('should <expected behavior>', async ({ page }) => {
    // Arrange: navigate, set up state
    // Act: perform user action
    // Assert: verify outcome
  });
});
```

**Locator priority** (use the first that works):
1. `getByRole()` — buttons, links, headings, form elements
2. `getByLabel()` — form fields with labels
3. `getByText()` — non-interactive text content
4. `getByPlaceholder()` — inputs with placeholder text
5. `getByTestId()` — when semantic options aren't available

**Assertions** — always web-first:
```typescript
// GOOD — auto-retries
await expect(page.getByRole('heading')).toBeVisible();
await expect(page.getByRole('alert')).toHaveText('Success');

// BAD — no retry
const text = await page.textContent('.msg');
expect(text).toBe('Success');
```

**Never use:**
- `page.waitForTimeout()`
- `page.$(selector)` or `page.$$(selector)`
- Bare CSS selectors unless absolutely necessary
- `page.evaluate()` for things locators can do

**Always include:**
- Descriptive test names that explain the behavior
- Error/edge case tests alongside happy path
- Proper `await` on every Playwright call
- `baseURL`-relative navigation (`page.goto('/')` not `page.goto('http://...')`)

### 5. Match Project Conventions

- If project uses TypeScript → generate `.spec.ts`
- If project uses JavaScript → generate `.spec.js` with `require()` imports
- If project has page objects → use them instead of inline locators
- If project has custom fixtures → import and use them
- If project has a test data directory → create test data files there

### 6. Generate Supporting Files (If Needed)

- **Page object**: If the test touches 5+ unique locators on one page, create a page object
- **Fixture**: If the test needs shared setup (auth, data), create or extend a fixture
- **Test data**: If the test uses structured data, create a JSON file in `test-data/`

### 7. Verify

Run the generated test:

```bash
npx playwright test <generated-file> --reporter=list
```

If it fails:
1. Read the error
2. Fix the test (not the app)
3. Run again
4. If it's an app issue, report it to the user

## Output

- Generated test file(s) with path
- Any supporting files created (page objects, fixtures, data)
- Test run result
- Coverage note: what behaviors are now tested
