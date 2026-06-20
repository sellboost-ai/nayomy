---
name: "coverage"
description_en: ">- Analyze test coverage gaps. Use when user says \"test coverage\", \"what's not tested\", \"coverage gaps\", \"missing tests\", \"coverage report\", or \"what needs testing\"."
description_tr: "Test kapsamı boşluklarını analiz edin. \"test coverage\", \"hangisi test edilmemiş\", \"coverage boşlukları\", \"eksik testler\", \"coverage raporu\" veya \"neyin test edilmesi gerekiyor\" gibi ifadeler kullanıldığında kullanın."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 18572
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/coverage/SKILL.md"
path: ".gemini/skills/coverage/SKILL.md"
is_collection: false
body_length: 2463
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Test Kapsamı Boşluklarını Analiz Et
  
  Uygulamadaki tüm test edilebilir yüzeyleri haritalayın ve test edilenler ile eksik olanları belirleyin.
  
  ## Adımlar
  
  ### 1. Uygulama Yüzeyini Haritalayın
  
  `Explore` alt aracısını kullanarak kataloğu oluşturun:
  
  **Rotalar/Sayfalar:**
  - Rota tanımlarını tarayın (Next.js `app/`, React Router config, Vue Router, vb.)
  - Tüm kullanıcı yüzeyüne açık sayfaları yollarıyla listeleyin
  
  **Bileşenler:**
  - Etkileşimli bileşenleri tanımlayın (formlar, modallar, açılır menüler, tablolar)
  - Karmaşık durum mantığına sahip bileşenleri not alın
  
  **API Uç Noktaları:**
  - API rota dosyalarını veya arka uç denetleyicilerini tarayın
  - Tüm uç noktaları yöntemleriyle listeleyin
  
  **Kullanıcı Akışları:**
  - Kritik yolları tanımlayın: kimlik doğrulama, ödeme, başlangıç, temel özellikler
  - Çok adımlı iş akışlarını haritalayın
  
  ### 2. Mevcut Testleri Haritalayın
  
  Tüm `*.spec.ts` / `*.spec.js` dosyalarını tarayın:
  
  - Hangi sayfaların/rotaların kapsandığını çıkarın (`page.goto()` çağrılarına göre)
  - Hangi bileşenlerin test edildiğini çıkarın (konum kullanımına göre)
  - Hangi API uç noktalarının simüle edildiğini veya çağrıldığını çıkarın
  - Alan başına test sayısını sayın
  
  ### 3. Kapsama Matrisini Oluşturun
  
  ```
  ## Kapsama Matrisi
  
  | Alan | Rota | Testler | Durum |
  |---|---|---|---|
  | Auth | /login | 5 | ✅ Kapsanmış |
  | Auth | /register | 0 | ❌ Eksik |
  | Auth | /forgot-password | 0 | ❌ Eksik |
  | Dashboard | /dashboard | 3 | ⚠️ Kısmi (hata durumları yok) |
  | Settings | /settings | 0 | ❌ Eksik |
  | Checkout | /checkout | 8 | ✅ Kapsanmış |
  ```
  
  ### 4. Boşlukları Önceliklendirin
  
  Kapsanmayan alanları iş etkisine göre sıralayın:
  
  1. **Kritik** — kimlik doğrulama, ödeme, temel özellikler → önce test edin
  2. **Yüksek** — kullanıcı yüzeyüne açık CRUD, arama, navigasyon
  3. **Orta** — ayarlar, tercihler, uç durumlar
  4. **Düşük** — statik sayfalar, hakkında, şartlar
  
  ### 5. Test Planı Önerileri
  
  Her boşluk için önerilerde bulunun:
  - Gereken test sayısı
  - `templates/` klasöründen hangi şablonun kullanılacağı
  - Tahmini çaba (hızlı/orta/karmaşık)
  
  ```
  ## Önerilen Test Planı
  
  ### Öncelik 1: Kritik
  1. /register (4 test) — auth/registration şablonunu kullanın — hızlı
  2. /forgot-password (3 test) — auth/password-reset şablonunu kullanın — hızlı
  
  ### Öncelik 2: Yüksek
  3. /settings (4 test) — settings/ şablonlarını kullanın — orta
  4. Dashboard hata durumları (2 test) — dashboard/data-loading şablonunu kullanın — hızlı
  ```
  
  ### 6. Otomatik Üret (İsteğe Bağlı)
  
  Kullanıcıya sorun: "İlk N boşluk için testler üretilsin mi? [Evet/Hayır/Belirli olanları seç]"
  
  Evet ise, önerilen şablonla her boşluk için `/pw:generate` çağırın.
  
  ## Çıktı
  
  - Kapsama matrisi (tablo biçimi)
  - Kapsama yüzdesi tahmini
  - Çaba tahminleriyle önceliklendirilmiş boşluk listesi
  - Eksik testleri otomatik üretme seçeneği
---

# Analyze Test Coverage Gaps

Map all testable surfaces in the application and identify what's tested vs. what's missing.

## Steps

### 1. Map Application Surface

Use the `Explore` subagent to catalog:

**Routes/Pages:**
- Scan route definitions (Next.js `app/`, React Router config, Vue Router, etc.)
- List all user-facing pages with their paths

**Components:**
- Identify interactive components (forms, modals, dropdowns, tables)
- Note components with complex state logic

**API Endpoints:**
- Scan API route files or backend controllers
- List all endpoints with their methods

**User Flows:**
- Identify critical paths: auth, checkout, onboarding, core features
- Map multi-step workflows

### 2. Map Existing Tests

Scan all `*.spec.ts` / `*.spec.js` files:

- Extract which pages/routes are covered (by `page.goto()` calls)
- Extract which components are tested (by locator usage)
- Extract which API endpoints are mocked or hit
- Count tests per area

### 3. Generate Coverage Matrix

```
## Coverage Matrix

| Area | Route | Tests | Status |
|---|---|---|---|
| Auth | /login | 5 | ✅ Covered |
| Auth | /register | 0 | ❌ Missing |
| Auth | /forgot-password | 0 | ❌ Missing |
| Dashboard | /dashboard | 3 | ⚠️ Partial (no error states) |
| Settings | /settings | 0 | ❌ Missing |
| Checkout | /checkout | 8 | ✅ Covered |
```

### 4. Prioritize Gaps

Rank uncovered areas by business impact:

1. **Critical** — auth, payment, core features → test first
2. **High** — user-facing CRUD, search, navigation
3. **Medium** — settings, preferences, edge cases
4. **Low** — static pages, about, terms

### 5. Suggest Test Plan

For each gap, recommend:
- Number of tests needed
- Which template from `templates/` to use
- Estimated effort (quick/medium/complex)

```
## Recommended Test Plan

### Priority 1: Critical
1. /register (4 tests) — use auth/registration template — quick
2. /forgot-password (3 tests) — use auth/password-reset template — quick

### Priority 2: High
3. /settings (4 tests) — use settings/ templates — medium
4. Dashboard error states (2 tests) — use dashboard/data-loading template — quick
```

### 6. Auto-Generate (Optional)

Ask user: "Generate tests for the top N gaps? [Yes/No/Pick specific]"

If yes, invoke `/pw:generate` for each gap with the recommended template.

## Output

- Coverage matrix (table format)
- Coverage percentage estimate
- Prioritized gap list with effort estimates
- Option to auto-generate missing tests
