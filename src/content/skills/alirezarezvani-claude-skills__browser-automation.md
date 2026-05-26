---
name: "browser-automation"
description_en: "Use when the user asks to automate browser tasks, scrape websites, fill forms, capture screenshots, extract structured data from web pages, or build web automation workflows. NOT for testing — use playwright-pro for that."
description_tr: "Tarayıcı görevlerini otomatikleştirmek, web sayfalarını kazımak, formları doldurmak, ekran görüntüsü almak, web sayfalarından yapılandırılmış veri çıkarmak veya web otomasyon workflow'ları oluşturmak için kullanın. Test için değil — bunun için playwright-pro kullanın."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/browser-automation/SKILL.md"
path: ".gemini/skills/browser-automation/SKILL.md"
is_collection: false
body_length: 13486
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Browser Automation - POWERFUL

  ## Genel Bakış

  Browser Automation skill, Playwright kullanarak production-grade web automation iş akışları oluşturmak için kapsamlı araçlar ve bilgi sağlar. Bu skill veri çıkarma, form doldurma, ekran görüntüsü alma, oturum yönetimi ve ölçekte güvenilir browser automation için anti-detection desenlerini kapsar.

  **Bu skill ne zaman kullanılmalı:**
  - Web sitelerinden yapılandırılmış veri scraping (tablolar, listeler, arama sonuçları)
  - Multi-step browser iş akışlarını otomatikleştirme (login, form doldurma, dosya indirme)
  - Web sayfalarının ekran görüntüsü veya PDF'sini alma
  - SPA'lar ve JavaScript ağırlıklı sitelerden veri çıkarma
  - Tekrarlanabilir browser tabanlı veri pipeline'ları oluşturma

  **Bu skill ne zaman kullanılmamalı:**
  - Browser testleri veya E2E test süitleri yazma — bunun yerine **playwright-pro** kullanın
  - API endpoint'leri test etme — bunun yerine **api-test-suite-builder** kullanın
  - Load testing veya performance benchmarking — bunun yerine **performance-profiler** kullanın

  **Selenium veya Puppeteer yerine Playwright neden:**
  - **Yerleşik auto-wait** — çoğu işlem için açık `sleep()` veya `waitForElement()` gerekmez
  - **Tek API'den multi-browser** — Chromium, Firefox, WebKit sıfır config değişikliği ile
  - **Network interception** — reklamları engelle, yanıtları mock et, API çağrılarını native olarak yakala
  - **Browser contexts** — yeni browser instance'ları başlatmadan izole oturumlar
  - **Codegen** — `playwright codegen` eylemlerinizi kaydeder ve script'ler üretir
  - **Async-first** — yüksek throughput scraping için Python async/await

  ## Temel Yetkinlikler

  ### 1. Web Scraping Desenleri

  **Selector önceliği (en güvenilir olan ilk):**
  1. `data-testid`, `data-id` veya custom data attributes — tasarımlar arası stabil
  2. `#id` selector'ları — benzersiz ancak deploy'lar arasında değişebilir
  3. Semantic selector'lar: `article`, `nav`, `main`, `section` — CSS değişikliklerine dayanıklı
  4. Class tabanlı: `.product-card`, `.price` — oluşturulan classlar varsa kırılgan (ör. CSS modules)
  5. Konumsal: `nth-child()`, `nth-of-type()` — son çare, layout değişikliklerinde kırılır

  XPath'i yalnızca CSS ilişkiyi ifade edemediğinde kullanın (ör. ancestor traversal, metin tabanlı seçim).

  **Pagination stratejileri:** next-button, URL tabanlı (`?page=N`), infinite scroll, load-more butonu. Tam pagination handler'ları ve scroll desenleri için [data_extraction_recipes.md](references/data_extraction_recipes.md) dosyasına bakın.

  ### 2. Form Doldurma & Multi-Step İş Akışları

  Multi-step form'ları adım başına ayrık function'lara bölün. Her function alanları doldurur, "Next"/"Continue" öğesine tıklar ve bir sonraki adımın yüklenmesini bekler (URL değişikliği veya DOM elementi).

  Anahtar desenler: login flow'ları, multi-page form'lar, dosya yüklemeleri (drag-and-drop zone'lar dahil), native ve custom dropdown yönetimi. `fill()`, `select_option()`, `set_input_files()` ve `expect_file_chooser()` için tam API referansı [playwright_browser_api.md](references/playwright_browser_api.md) dosyasına bakın.

  ### 3. Ekran Görüntüsü & PDF Yakalama

  - **Tam sayfa:** `await page.screenshot(path="full.png", full_page=True)`
  - **Element:** `await page.locator("div.chart").screenshot(path="chart.png")`
  - **PDF (yalnızca Chromium):** `await page.pdf(path="out.pdf", format="A4", print_background=True)`
  - **Visual regression:** Bilinen durumlarda ekran görüntüsü alın, baselines'ları version control'de şu isimle saklayın: `{page}_{viewport}_{state}.png`

  Tam ekran görüntüsü/PDF seçenekleri için [playwright_browser_api.md](references/playwright_browser_api.md) dosyasına bakın.

  ### 4. Yapılandırılmış Veri Çıkarma

  Temel çıkarma desenleri:
  - **Tablolar JSON'a** — `<thead>` header'ları ve `<tbody>` satırlarını sözlüklere çıkarın
  - **Listeler array'lere** — Field-selector map kullanarak tekrar eden card element'lerini map'leyin (attribute'ler için `::attr()` destekler)
  - **İç içe/threaded veri** — yanıtları olan comments, kategori ağaçları için recursive çıkarma

  Tam çıkarma function'ları, fiyat parsing, veri temizleme utilities ve output format helper'ları (JSON, CSV, JSONL) için [data_extraction_recipes.md](references/data_extraction_recipes.md) dosyasına bakın.

  ### 5. Cookie & Oturum Yönetimi

  - **Cookie'leri kaydet/geri yükle:** `context.cookies()` ve `context.add_cookies()`
  - **Tam storage state** (cookies + localStorage): `context.storage_state(path="state.json")` kaydetmek için, `browser.new_context(storage_state="state.json")` geri yüklemek için

  **Best practice:** Login'den sonra state kaydedin, scraping oturumları arasında yeniden kullanın. Uzun bir job başlatmadan önce oturum geçerliliğini kontrol edin — protected bir sayfaya hafif bir istek yapın ve login'e yönlendirilmediğinizi doğrulayın. Cookie ve storage state API detayları için [playwright_browser_api.md](references/playwright_browser_api.md) dosyasına bakın.

  ### 6. Anti-Detection Desenleri

  Modern web siteleri automation'ı birden fazla vektör aracılığıyla algılarlar. Bunları öncelik sırasına göre uygulayın:

  1. **WebDriver flag kaldırma** — Init script aracılığıyla `navigator.webdriver = true` öğesini kaldırın (kritik)
  2. **Custom user agent** — Gerçek browser UA'ları arasında döndürün; asla varsayılan headless UA'sını kullanmayın
  3. **Realistic viewport** — 1920x1080 veya benzeri gerçek dünya boyutlarını ayarlayın (varsayılan 800x600 bir red flag'dir)
  4. **Request throttling** — İşlemler arasına `random.uniform()` delay'leri ekleyin
  5. **Proxy support** — Per-browser veya per-context proxy konfigürasyonu

  Navigator property hardening, WebGL/canvas fingerprint evasion, behavioral simulation (mouse movement, typing speed, scroll patterns), proxy rotation stratejileri ve detection self-test URL'leri için tam stealth stack [anti_detection_patterns.md](references/anti_detection_patterns.md) dosyasına bakın.

  ### 7. Dinamik İçerik Yönetimi

  - **SPA rendering:** Page load event'i değil, content selector'larını bekleyin (`wait_for_selector`)
  - **AJAX/Fetch bekleme:** Spesifik API çağrılarını intercept etmek ve beklemek için `page.expect_response("**/api/data*")` kullanın
  - **Shadow DOM:** Playwright open Shadow DOM'u `>>` operator'ü ile pierces'ler: `page.locator("custom-element >> .inner-class")`
  - **Lazy-loaded images:** Yüklemeyi tetiklemek için element'leri view'a scroll edin `scroll_into_view_if_needed()` ile

  Wait stratejileri, network interception ve Shadow DOM detayları için [playwright_browser_api.md](references/playwright_browser_api.md) dosyasına bakın.

  ### 8. Error Handling & Retry Logic

  - **Backoff ile retry:** Page interactions'ları exponential backoff ile retry logic'e sarmalayın (ör. 1s, 2s, 4s)
  - **Fallback selector'ları:** `TimeoutError`'da başarısız olmadan önce alternative selector'ları deneyin
  - **Error-state screenshot'ları:** Beklenmeyen hatalar için debugging açısından `page.screenshot(path="error-state.png")` alın
  - **Rate limit detection:** HTTP 429 yanıtlarını kontrol edin ve `Retry-After` header'larına saygı gösterin

  Tam exponential backoff implementation'ı ve rate limiter class'ını [anti_detection_patterns.md](references/anti_detection_patterns.md) dosyasına bakın.

  ## İş Akışları

  ### İş Akışı 1: Tek Sayfa Veri Çıkarma

  **Senaryo:** JavaScript render'ı yapılmış içeriğe sahip bir sayfadan product verisi çıkarın.

  **Adımlar:**
  1. Development sırasında browser'ı headed mode'da başlatın (`headless=False`), production için headless'a geçin
  2. URL'ye navigate edin ve content selector'ını bekleyin
  3. Field mapping ile `query_selector_all` kullanarak veri çıkarın
  4. Çıkarılan verileri doğrulayın (null'ları kontrol edin, beklenen type'ları)
  5. JSON olarak output verin

  ```python
  async def extract_single_page(url, selectors):
      async with async_playwright() as p:
          browser = await p.chromium.launch(headless=True)
          context = await browser.new_context(
              viewport={"width": 1920, "height": 1080},
              user_agent="Mozilla/5.0 ..."
          )
          page = await context.new_page()
          await page.goto(url, wait_until="networkidle")
          data = await extract_listings(page, selectors["container"], selectors["fields"])
          await browser.close()
      return data
  ```

  ### İş Akışı 2: Pagination ile Multi-Page Scraping

  **Senaryo:** 50+ sayfa arasında arama sonuçlarını scrape'leyin.

  **Adımlar:**
  1. Anti-detection ayarları ile browser başlatın
  2. İlk sayfaya navigate edin
  3. Geçerli sayfadan veri çıkarın
  4. "Next" butonu var mı ve enabled mı kontrol edin
  5. Next'e tıklayın, yeni içeriğin yüklenmesini bekleyin (sadece navigation değil)
  6. Sonraki sayfa yok veya max pages'e ulaşana kadar repeat edin
  7. Sonuçları unique key'le deduplicate edin
  8. Output'ı incremental olarak yazın (hepsini memoryde tutmayın)

  ```python
  async def scrape_paginated(base_url, selectors, max_pages=100):
      all_data = []
      async with async_playwright() as p:
          browser = await p.chromium.launch(headless=True)
          page = await (await browser.new_context()).new_page()
          await page.goto(base_url)

          for page_num in range(max_pages):
              items = await extract_listings(page, selectors["container"], selectors["fields"])
              all_data.extend(items)

              next_btn = page.locator(selectors["next_button"])
              if await next_btn.count() == 0 or await next_btn.is_disabled():
                  break

              await next_btn.click()
              await page.wait_for_selector(selectors["container"])
              await human_delay(800, 2000)

          await browser.close()
      return all_data
  ```

  ### İş Akışı 3: Authenticated Workflow Automation

  **Senaryo:** Bir portal'da login yapın, multi-step form'da navigate edin, bir report indirin.

  **Adımlar:**
  1. Mevcut oturum state dosyasını kontrol edin
  2. Oturum yoksa login yapın ve state kaydedin
  3. Kaydedilen oturumu kullanarak target sayfaya navigate edin
  4. Multi-step form'u sağlanan verilerle doldurun
  5. İndirmenin tetiklenmesini bekleyin
  6. İndirilen dosyayı target directory'ye kaydedin

  ```python
  async def authenticated_workflow(credentials, form_data, download_dir):
      async with async_playwright() as p:
          browser = await p.chromium.launch(headless=True)
          state_file = "session_state.json"

          # Restore or create session
          if os.path.exists(state_file):
              context = await browser.new_context(storage_state=state_file)
          else:
              context = await browser.new_context()
              page = await context.new_page()
              await login(page, credentials["url"], credentials["user"], credentials["pass"])
              await context.storage_state(path=state_file)

          page = await context.new_page()
          await page.goto(form_data["target_url"])

          # Fill form steps
          for step_fn in [fill_step_1, fill_step_2]:
              await step_fn(page, form_data)

          # Handle download
          async with page.expect_download() as dl_info:
              await page.click("button:has-text('Download Report')")
          download = await dl_info.value
          await download.save_as(os.path.join(download_dir, download.suggested_filename))

          await browser.close()
  ```

  ## Araçlar Referansı

  | Script | Amaç | Anahtar Flagler | Output |
  |--------|---------|-----------|--------|
  | `scraping_toolkit.py` | Playwright scraping script iskeletini oluştur | `--url`, `--selectors`, `--paginate`, `--output` | Python script veya JSON config |
  | `form_automation_builder.py` | Field spec'ten form-fill automation script'i oluştur | `--fields`, `--url`, `--output` | Python automation script |
  | `anti_detection_checker.py` | Bir Playwright script'i detection vektörleri için audit et | `--file`, `--verbose` | Risk raporu ve score |

  Tüm script'ler stdlib-only'dir. Tam kullanım için `python3 <script> --help` çalıştırın.

  ## Anti-Patterns

  ### Hardcoded Waits
  **Kötü:** Her işlemden önce `await page.wait_for_timeout(5000)`.
  **İyi:** `wait_for_selector`, `wait_for_url`, `expect_response` veya `wait_for_load_state` kullanın. Hardcoded wait'ler flaky ve yavaştır.

  ### Error Recovery Yok
  **Kötü:** İlk hatada crash'e giren linear script.
  **İyi:** Her page interaction'ı try/except'e sarmalayın. Error-state screenshot'ları alın. Exponential backoff ile retry implement edin.

  ### robots.txt'i Görmezden Gelmek
  **Kötü:** robots.txt directive'lerini kontrol etmeden scrape etme.
  **İyi:** Scrape'lemeden önce robots.txt dosyasını fetch'leyin ve parse'leyin. `Crawl-delay`'e saygı gösterin. Disallowed path'leri skip edin. Ölçekte çalıştırıyorsanız User-Agent'a bot isminizi ekleyin.

  ### Script'lerde Credentials Saklamak
  **Kötü:** Python dosyalarında username ve password hardcode'lama.
  **İyi:** Environment variable'ları, `.env` dosyaları (gitignored) veya secrets manager kullanın. Credentials'ları CLI argument'leri aracılığıyla geçin.

  ### Rate Limiting Yok
  **Kötü:** Bir site'ye saniyede 100 request ile vurmak.
  **İyi:** Request'ler arasına random delay'ler ekleyin (polite scraping için 1-3s). 429 yanıtlarını monitör edin. Exponential backoff implement edin.

  ### Selector Fragilty
  **Kötü:** Auto-generated class name'lere (`.css-1a2b3c`) veya deep nesting'e (`div > div > div > span:nth-child(3)`) güvenmek.
  **İyi:** Data attribute'leri, semantic HTML veya text-based locator'ları kullanın. Selector'ları browser DevTools'ta test edin.

  ### Browser Instance'larını Temizlememek
  **Kötü:** Browser'ları kapatmadan başlatmak, resource leak'lerine yol açmak.
  **İyi:** `try/finally` veya async context manager'larını kullanarak `browser.close()`'ın çağrıldığından emin olun.

  ### Production'da Headed Çalıştırmak
  **Kötü:** Production/CI'da `headless=False` kullanmak.
  **İyi:** Debugging için headed mode'da geliştirin, `headless=True` ile deploy edin. Toggle etmek için environment variable kullanın: `headless = os.environ.get("HEADLESS", "true") == "true"`.

  ## Çapraz Referanslar

  - **playwright-pro** — Browser testing skill. E2E testler, test assertions, test fixtures için kullanın. Browser Automation veri çıkarma ve workflow automation içindir, testing için değil.
  - **api-test-suite-builder** — Web sitesinin public API'si varsa, render'ı yapılmış sayfayı scrape'lemek yerine API'ye doğrudan hit edin. Daha hızlı, daha güvenilir, daha az tespit edilebilir.
  - **performance-profiler** — Automation script'leriniz yavaşsa, concurrency eklemeden önce bottleneck'leri profile'layın.
  - **env-secrets-manager** — Authenticated automation iş akışlarında kullanılan credentials'ları güvenli bir şekilde yönetmek için.
---

# Browser Automation - POWERFUL

## Overview

The Browser Automation skill provides comprehensive tools and knowledge for building production-grade web automation workflows using Playwright. This skill covers data extraction, form filling, screenshot capture, session management, and anti-detection patterns for reliable browser automation at scale.

**When to use this skill:**
- Scraping structured data from websites (tables, listings, search results)
- Automating multi-step browser workflows (login, fill forms, download files)
- Capturing screenshots or PDFs of web pages
- Extracting data from SPAs and JavaScript-heavy sites
- Building repeatable browser-based data pipelines

**When NOT to use this skill:**
- Writing browser tests or E2E test suites — use **playwright-pro** instead
- Testing API endpoints — use **api-test-suite-builder** instead
- Load testing or performance benchmarking — use **performance-profiler** instead

**Why Playwright over Selenium or Puppeteer:**
- **Auto-wait built in** — no explicit `sleep()` or `waitForElement()` needed for most actions
- **Multi-browser from one API** — Chromium, Firefox, WebKit with zero config changes
- **Network interception** — block ads, mock responses, capture API calls natively
- **Browser contexts** — isolated sessions without spinning up new browser instances
- **Codegen** — `playwright codegen` records your actions and generates scripts
- **Async-first** — Python async/await for high-throughput scraping

## Core Competencies

### 1. Web Scraping Patterns

**Selector priority (most to least reliable):**
1. `data-testid`, `data-id`, or custom data attributes — stable across redesigns
2. `#id` selectors — unique but may change between deploys
3. Semantic selectors: `article`, `nav`, `main`, `section` — resilient to CSS changes
4. Class-based: `.product-card`, `.price` — brittle if classes are generated (e.g., CSS modules)
5. Positional: `nth-child()`, `nth-of-type()` — last resort, breaks on layout changes

Use XPath only when CSS cannot express the relationship (e.g., ancestor traversal, text-based selection).

**Pagination strategies:** next-button, URL-based (`?page=N`), infinite scroll, load-more button. See [data_extraction_recipes.md](references/data_extraction_recipes.md) for complete pagination handlers and scroll patterns.

### 2. Form Filling & Multi-Step Workflows

Break multi-step forms into discrete functions per step. Each function fills fields, clicks "Next"/"Continue", and waits for the next step to load (URL change or DOM element).

Key patterns: login flows, multi-page forms, file uploads (including drag-and-drop zones), native and custom dropdown handling. See [playwright_browser_api.md](references/playwright_browser_api.md) for complete API reference on `fill()`, `select_option()`, `set_input_files()`, and `expect_file_chooser()`.

### 3. Screenshot & PDF Capture

- **Full page:** `await page.screenshot(path="full.png", full_page=True)`
- **Element:** `await page.locator("div.chart").screenshot(path="chart.png")`
- **PDF (Chromium only):** `await page.pdf(path="out.pdf", format="A4", print_background=True)`
- **Visual regression:** Take screenshots at known states, store baselines in version control with naming: `{page}_{viewport}_{state}.png`

See [playwright_browser_api.md](references/playwright_browser_api.md) for full screenshot/PDF options.

### 4. Structured Data Extraction

Core extraction patterns:
- **Tables to JSON** — Extract `<thead>` headers and `<tbody>` rows into dictionaries
- **Listings to arrays** — Map repeating card elements using a field-selector map (supports `::attr()` for attributes)
- **Nested/threaded data** — Recursive extraction for comments with replies, category trees

See [data_extraction_recipes.md](references/data_extraction_recipes.md) for complete extraction functions, price parsing, data cleaning utilities, and output format helpers (JSON, CSV, JSONL).

### 5. Cookie & Session Management

- **Save/restore cookies:** `context.cookies()` and `context.add_cookies()`
- **Full storage state** (cookies + localStorage): `context.storage_state(path="state.json")` to save, `browser.new_context(storage_state="state.json")` to restore

**Best practice:** Save state after login, reuse across scraping sessions. Check session validity before starting a long job — make a lightweight request to a protected page and verify you are not redirected to login. See [playwright_browser_api.md](references/playwright_browser_api.md) for cookie and storage state API details.

### 6. Anti-Detection Patterns

Modern websites detect automation through multiple vectors. Apply these in priority order:

1. **WebDriver flag removal** — Remove `navigator.webdriver = true` via init script (critical)
2. **Custom user agent** — Rotate through real browser UAs; never use the default headless UA
3. **Realistic viewport** — Set 1920x1080 or similar real-world dimensions (default 800x600 is a red flag)
4. **Request throttling** — Add `random.uniform()` delays between actions
5. **Proxy support** — Per-browser or per-context proxy configuration

See [anti_detection_patterns.md](references/anti_detection_patterns.md) for the complete stealth stack: navigator property hardening, WebGL/canvas fingerprint evasion, behavioral simulation (mouse movement, typing speed, scroll patterns), proxy rotation strategies, and detection self-test URLs.

### 7. Dynamic Content Handling

- **SPA rendering:** Wait for content selectors (`wait_for_selector`), not the page load event
- **AJAX/Fetch waiting:** Use `page.expect_response("**/api/data*")` to intercept and wait for specific API calls
- **Shadow DOM:** Playwright pierces open Shadow DOM with `>>` operator: `page.locator("custom-element >> .inner-class")`
- **Lazy-loaded images:** Scroll elements into view with `scroll_into_view_if_needed()` to trigger loading

See [playwright_browser_api.md](references/playwright_browser_api.md) for wait strategies, network interception, and Shadow DOM details.

### 8. Error Handling & Retry Logic

- **Retry with backoff:** Wrap page interactions in retry logic with exponential backoff (e.g., 1s, 2s, 4s)
- **Fallback selectors:** On `TimeoutError`, try alternative selectors before failing
- **Error-state screenshots:** Capture `page.screenshot(path="error-state.png")` on unexpected failures for debugging
- **Rate limit detection:** Check for HTTP 429 responses and respect `Retry-After` headers

See [anti_detection_patterns.md](references/anti_detection_patterns.md) for the complete exponential backoff implementation and rate limiter class.

## Workflows

### Workflow 1: Single-Page Data Extraction

**Scenario:** Extract product data from a single page with JavaScript-rendered content.

**Steps:**
1. Launch browser in headed mode during development (`headless=False`), switch to headless for production
2. Navigate to URL and wait for content selector
3. Extract data using `query_selector_all` with field mapping
4. Validate extracted data (check for nulls, expected types)
5. Output as JSON

```python
async def extract_single_page(url, selectors):
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            viewport={"width": 1920, "height": 1080},
            user_agent="Mozilla/5.0 ..."
        )
        page = await context.new_page()
        await page.goto(url, wait_until="networkidle")
        data = await extract_listings(page, selectors["container"], selectors["fields"])
        await browser.close()
    return data
```

### Workflow 2: Multi-Page Scraping with Pagination

**Scenario:** Scrape search results across 50+ pages.

**Steps:**
1. Launch browser with anti-detection settings
2. Navigate to first page
3. Extract data from current page
4. Check if "Next" button exists and is enabled
5. Click next, wait for new content to load (not just navigation)
6. Repeat until no next page or max pages reached
7. Deduplicate results by unique key
8. Write output incrementally (don't hold everything in memory)

```python
async def scrape_paginated(base_url, selectors, max_pages=100):
    all_data = []
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await (await browser.new_context()).new_page()
        await page.goto(base_url)

        for page_num in range(max_pages):
            items = await extract_listings(page, selectors["container"], selectors["fields"])
            all_data.extend(items)

            next_btn = page.locator(selectors["next_button"])
            if await next_btn.count() == 0 or await next_btn.is_disabled():
                break

            await next_btn.click()
            await page.wait_for_selector(selectors["container"])
            await human_delay(800, 2000)

        await browser.close()
    return all_data
```

### Workflow 3: Authenticated Workflow Automation

**Scenario:** Log into a portal, navigate a multi-step form, download a report.

**Steps:**
1. Check for existing session state file
2. If no session, perform login and save state
3. Navigate to target page using saved session
4. Fill multi-step form with provided data
5. Wait for download to trigger
6. Save downloaded file to target directory

```python
async def authenticated_workflow(credentials, form_data, download_dir):
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        state_file = "session_state.json"

        # Restore or create session
        if os.path.exists(state_file):
            context = await browser.new_context(storage_state=state_file)
        else:
            context = await browser.new_context()
            page = await context.new_page()
            await login(page, credentials["url"], credentials["user"], credentials["pass"])
            await context.storage_state(path=state_file)

        page = await context.new_page()
        await page.goto(form_data["target_url"])

        # Fill form steps
        for step_fn in [fill_step_1, fill_step_2]:
            await step_fn(page, form_data)

        # Handle download
        async with page.expect_download() as dl_info:
            await page.click("button:has-text('Download Report')")
        download = await dl_info.value
        await download.save_as(os.path.join(download_dir, download.suggested_filename))

        await browser.close()
```

## Tools Reference

| Script | Purpose | Key Flags | Output |
|--------|---------|-----------|--------|
| `scraping_toolkit.py` | Generate Playwright scraping script skeleton | `--url`, `--selectors`, `--paginate`, `--output` | Python script or JSON config |
| `form_automation_builder.py` | Generate form-fill automation script from field spec | `--fields`, `--url`, `--output` | Python automation script |
| `anti_detection_checker.py` | Audit a Playwright script for detection vectors | `--file`, `--verbose` | Risk report with score |

All scripts are stdlib-only. Run `python3 <script> --help` for full usage.

## Anti-Patterns

### Hardcoded Waits
**Bad:** `await page.wait_for_timeout(5000)` before every action.
**Good:** Use `wait_for_selector`, `wait_for_url`, `expect_response`, or `wait_for_load_state`. Hardcoded waits are flaky and slow.

### No Error Recovery
**Bad:** Linear script that crashes on first failure.
**Good:** Wrap each page interaction in try/except. Take error-state screenshots. Implement retry with exponential backoff.

### Ignoring robots.txt
**Bad:** Scraping without checking robots.txt directives.
**Good:** Fetch and parse robots.txt before scraping. Respect `Crawl-delay`. Skip disallowed paths. Add your bot name to User-Agent if running at scale.

### Storing Credentials in Scripts
**Bad:** Hardcoding usernames and passwords in Python files.
**Good:** Use environment variables, `.env` files (gitignored), or a secrets manager. Pass credentials via CLI arguments.

### No Rate Limiting
**Bad:** Hammering a site with 100 requests/second.
**Good:** Add random delays between requests (1-3s for polite scraping). Monitor for 429 responses. Implement exponential backoff.

### Selector Fragility
**Bad:** Relying on auto-generated class names (`.css-1a2b3c`) or deep nesting (`div > div > div > span:nth-child(3)`).
**Good:** Use data attributes, semantic HTML, or text-based locators. Test selectors in browser DevTools first.

### Not Cleaning Up Browser Instances
**Bad:** Launching browsers without closing them, leading to resource leaks.
**Good:** Always use `try/finally` or async context managers to ensure `browser.close()` is called.

### Running Headed in Production
**Bad:** Using `headless=False` in production/CI.
**Good:** Develop with headed mode for debugging, deploy with `headless=True`. Use environment variable to toggle: `headless = os.environ.get("HEADLESS", "true") == "true"`.

## Cross-References

- **playwright-pro** — Browser testing skill. Use for E2E tests, test assertions, test fixtures. Browser Automation is for data extraction and workflow automation, not testing.
- **api-test-suite-builder** — When the website has a public API, hit the API directly instead of scraping the rendered page. Faster, more reliable, less detectable.
- **performance-profiler** — If your automation scripts are slow, profile the bottlenecks before adding concurrency.
- **env-secrets-manager** — For securely managing credentials used in authenticated automation workflows.
