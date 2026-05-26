---
name: "webapp-testing"
description_en: "Toolkit for interacting with and testing local web applications using Playwright. Supports verifying frontend functionality, debugging UI behavior, capturing browser screenshots, and viewing browser logs."
description_tr: "Playwright kullanarak lokal web uygulamalarıyla etkileşimde bulunmak ve test etmek için araç seti. Frontend işlevlerini doğrulamak, UI davranışını debuglamak, tarayıcı ekran görüntüleri almak ve tarayıcı loglarını görüntülemek imkanı sunar."
category: "Design"
repo: "smartnews/claude-skills"
stars: 2
url: "https://github.com/smartnews/claude-skills/blob/HEAD/webapp-testing/SKILL.md"
path: "webapp-testing/SKILL.md"
is_collection: false
body_length: 3574
has_scripts: true
has_references: false
has_examples: true
related_files: []
body_tr: |-
  # Web Uygulaması Testi

  Yerel web uygulamalarını test etmek için native Python Playwright betikleri yazın.

  **Mevcut Yardımcı Betikler**:
  - `scripts/with_server.py` - Server yaşam döngüsünü yönetir (birden fazla sunucuyu destekler)

  **Her zaman betikleri `--help` ile çalıştırın** kullanımı görmek için. Kaynak kodunu okumayın, önce betiği çalıştırmayı deneyin ve özelleştirilmiş bir çözümün kesinlikle gerekli olduğunu bulana kadar. Bu betikler çok büyük olabilir ve konteks pencerenizi kirleterek boşa harcayabilir. Doğrudan black-box betikleri olarak çağrılmak için vardırlar, konteks pencerenize dahil edilmek için değil.

  ## Karar Ağacı: Yaklaşımınızı Seçme

  ```
  Kullanıcı görevi → Statik HTML mi?
      ├─ Evet → Seçicileri tanımlamak için HTML dosyasını doğrudan oku
      │         ├─ Başarılı → Seçicileri kullanan Playwright betiği yaz
      │         └─ Başarısız/Eksik → Dinamik olarak değerlendir (aşağıda)
      │
      └─ Hayır (dinamik webapp) → Server zaten çalışıyor mu?
          ├─ Hayır → Çalıştır: python scripts/with_server.py --help
          │          Ardından yardımcıyı kullan + basitleştirilmiş Playwright betiği yaz
          │
          └─ Evet → Keşif-sonra-işlem:
              1. Gezin ve networkidle bekleyin
              2. Ekran görüntüsü alın veya DOM'u inceleyin
              3. İşlenmiş durumdan seçicileri tanımlayın
              4. Keşfedilen seçicilerle işlemleri gerçekleştirin
  ```

  ## Örnek: with_server.py Kullanımı

  Sunucu başlatmak için önce `--help` çalıştırın, ardından yardımcıyı kullanın:

  **Tek sunucu:**
  ```bash
  python scripts/with_server.py --server "npm run dev" --port 5173 -- python your_automation.py
  ```

  **Birden fazla sunucu (ör. backend + frontend):**
  ```bash
  python scripts/with_server.py \
    --server "cd backend && python server.py" --port 3000 \
    --server "cd frontend && npm run dev" --port 5173 \
    -- python your_automation.py
  ```

  Bir otomasyon betiği oluşturmak için yalnızca Playwright mantığı ekleyin (sunucular otomatik olarak yönetilir):
  ```python
  from playwright.sync_api import sync_playwright

  with sync_playwright() as p:
      browser = p.chromium.launch(headless=True) # Her zaman chromium'u headless modda başlat
      page = browser.new_page()
      page.goto('http://localhost:5173') # Sunucu zaten çalışıyor ve hazır
      page.wait_for_load_state('networkidle') # KRİTİK: JS'in yürütülmesini bekle
      # ... otomasyon mantığınız
      browser.close()
  ```

  ## Keşif-Sonra-İşlem Deseni

  1. **İşlenmiş DOM'u inceleyin**:
     ```python
     page.screenshot(path='/tmp/inspect.png', full_page=True)
     content = page.content()
     page.locator('button').all()
     ```

  2. **İnceleme sonuçlarından seçicileri tanımlayın**

  3. **Keşfedilen seçicileri kullanarak işlemleri gerçekleştirin**

  ## Yaygın Hata

  ❌ **Yapma** - Dinamik uygulamalarda `networkidle` beklemeden DOM'u incele
  ✅ **Yap** - İncelemeden önce `page.wait_for_load_state('networkidle')` bekle

  ## En İyi Uygulamalar

  - **Paketlenmiş betikleri black box olarak kullanın** - Bir görev gerçekleştirmek için `scripts/` içinde mevcut olan betiklerin birinin yardımcı olup olamayacağını düşünün. Bu betikler konteks penceresini kirletmeden yaygın, karmaşık iş akışlarını güvenilir bir şekilde işler. Kullanımı görmek için `--help` kullanın, ardından doğrudan çağırın.
  - Synchronous betikler için `sync_playwright()` kullanın
  - İşini bitirdiğinde her zaman tarayıcıyı kapat
  - Açıklayıcı seçiciler kullanın: `text=`, `role=`, CSS seçicileri veya ID'ler
  - Uygun beklemeleri ekle: `page.wait_for_selector()` veya `page.wait_for_timeout()`

  ## Referans Dosyaları

  - **examples/** - Yaygın desenleri gösteren örnekler:
    - `element_discovery.py` - Sayfadaki düğmeleri, bağlantıları ve girdileri keşfetme
    - `static_html_automation.py` - Yerel HTML için file:// URL'lerini kullanma
    - `console_logging.py` - Otomasyon sırasında konsol günlüklerini yakalama
---

# Web Application Testing

To test local web applications, write native Python Playwright scripts.

**Helper Scripts Available**:
- `scripts/with_server.py` - Manages server lifecycle (supports multiple servers)

**Always run scripts with `--help` first** to see usage. DO NOT read the source until you try running the script first and find that a customized solution is abslutely necessary. These scripts can be very large and thus pollute your context window. They exist to be called directly as black-box scripts rather than ingested into your context window.

## Decision Tree: Choosing Your Approach

```
User task → Is it static HTML?
    ├─ Yes → Read HTML file directly to identify selectors
    │         ├─ Success → Write Playwright script using selectors
    │         └─ Fails/Incomplete → Treat as dynamic (below)
    │
    └─ No (dynamic webapp) → Is the server already running?
        ├─ No → Run: python scripts/with_server.py --help
        │        Then use the helper + write simplified Playwright script
        │
        └─ Yes → Reconnaissance-then-action:
            1. Navigate and wait for networkidle
            2. Take screenshot or inspect DOM
            3. Identify selectors from rendered state
            4. Execute actions with discovered selectors
```

## Example: Using with_server.py

To start a server, run `--help` first, then use the helper:

**Single server:**
```bash
python scripts/with_server.py --server "npm run dev" --port 5173 -- python your_automation.py
```

**Multiple servers (e.g., backend + frontend):**
```bash
python scripts/with_server.py \
  --server "cd backend && python server.py" --port 3000 \
  --server "cd frontend && npm run dev" --port 5173 \
  -- python your_automation.py
```

To create an automation script, include only Playwright logic (servers are managed automatically):
```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True) # Always launch chromium in headless mode
    page = browser.new_page()
    page.goto('http://localhost:5173') # Server already running and ready
    page.wait_for_load_state('networkidle') # CRITICAL: Wait for JS to execute
    # ... your automation logic
    browser.close()
```

## Reconnaissance-Then-Action Pattern

1. **Inspect rendered DOM**:
   ```python
   page.screenshot(path='/tmp/inspect.png', full_page=True)
   content = page.content()
   page.locator('button').all()
   ```

2. **Identify selectors** from inspection results

3. **Execute actions** using discovered selectors

## Common Pitfall

❌ **Don't** inspect the DOM before waiting for `networkidle` on dynamic apps
✅ **Do** wait for `page.wait_for_load_state('networkidle')` before inspection

## Best Practices

- **Use bundled scripts as black boxes** - To accomplish a task, consider whether one of the scripts available in `scripts/` can help. These scripts handle common, complex workflows reliably without cluttering the context window. Use `--help` to see usage, then invoke directly. 
- Use `sync_playwright()` for synchronous scripts
- Always close the browser when done
- Use descriptive selectors: `text=`, `role=`, CSS selectors, or IDs
- Add appropriate waits: `page.wait_for_selector()` or `page.wait_for_timeout()`

## Reference Files

- **examples/** - Examples showing common patterns:
  - `element_discovery.py` - Discovering buttons, links, and inputs on a page
  - `static_html_automation.py` - Using file:// URLs for local HTML
  - `console_logging.py` - Capturing console logs during automation
