---
name: "full-page-screenshot"
description_en: "Use when the user asks to capture a full-page screenshot, long screenshot, or complete page capture of a web page. Handles SPA scroll containers, lazy-loaded images, and very tall pages via Chrome DevTools Protocol with zero external dependencies."
description_tr: "Kullanıcı bir web sayfasının tam sayfa ekran görüntüsü, uzun ekran görüntüsü veya tam sayfa yakalaması istediğinde kullanın. Chrome DevTools Protocol aracılığıyla SPA scroll containerlarını, lazy-loaded görselleri ve çok uzun sayfaları harici bağımlılık olmadan işler."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 18572
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/full-page-screenshot/SKILL.md"
path: ".gemini/skills/full-page-screenshot/SKILL.md"
is_collection: false
body_length: 5186
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Tam Sayfa Ekran Görüntüsü
  
  Chrome DevTools Protocol üzerinden herhangi bir web sayfasının tam sayfa ekran görüntüsünü alın. Kaydırma gerektiren kısımlar da dahil olmak üzere tüm içeriği içeren tek bir PNG dosyası üretir. Node.js 22+ ve uzaktan hata ayıklama etkinleştirilmiş Chrome dışında harici bağımlılık yok.
  
  ## Ön Koşullar
  
  - **Node.js 22+** (yerleşik `WebSocket` kullanır)
  - **Chrome/Chromium** uzaktan hata ayıklama etkinleştirilmiş
  
  Ortam hazırlığını kontrol edin:
  
  ```bash
  node "${SKILL_DIR}/scripts/full-page-screenshot.mjs" --check
  ```
  
  Chrome kontrolü başarısız olursa, kullanıcıya `chrome://inspect/#remote-debugging` açmasını ve **"Bu tarayıcı örneğinde uzaktan hata ayıklamaya izin ver"** seçeneğini etkinleştirmesini söyleyin.
  
  ## İş Akışı
  
  ### Seçenek A: Zaten açık olan bir sekmeyi ekran görüntüsü al (kimlik doğrulamalı sayfalar için önerilir)
  
  1. Kullanılabilir sekmeleri listeleyin:
  
  ```bash
  node "${SKILL_DIR}/scripts/full-page-screenshot.mjs" --list
  ```
  
  2. Hedefi başlık/URL ile tanımlayın, ardından yakala:
  
  ```bash
  node "${SKILL_DIR}/scripts/full-page-screenshot.mjs" <targetId> /tmp/screenshot.png --width 1200 --dpr 1
  ```
  
  ### Seçenek B: URL'den ekran görüntüsü al (arka plan sekmesi açar, yakalar, kapatır)
  
  ```bash
  node "${SKILL_DIR}/scripts/full-page-screenshot.mjs" --url "https://example.com" /tmp/screenshot.png --width 1200 --dpr 1 --wait 15000
  ```
  
  > **Not:** `--url` modu arka plan sekmesi oluşturur. Kimlik doğrulama gerektiren sayfalar (SSO, giriş duvarları) bunun yerine Seçenek A'yı kullanmalıdır.
  
  ### Parametreler
  
  | Parametre | Açıklama | Varsayılan |
  |-----------|----------|-----------|
  | `output` | Çıkış PNG dosya yolu | `/tmp/screenshot.png` |
  | `--width` | CSS piksel cinsinden görünüm alanı genişliği (makaleler: 1200, panolar: 1440-1920) | 1200 |
  | `--dpr` | Cihaz piksel oranı (2 = Retina, ancak 4x dosya boyutu) | 1 |
  | `--wait` | Sayfa yükleme zaman aşımı ms cinsinden (`--url` modu yalnızca) | 15000 |
  | `--css` | Yakalamanın öncesine enjekte edilecek özel CSS (ör. öğeleri gizle) | — |
  
  ### Çıktıyı Doğrulayın
  
  ```bash
  # macOS
  sips -g pixelWidth -g pixelHeight /tmp/screenshot.png
  
  # Linux
  file /tmp/screenshot.png
  ```
  
  ## Ana Yetenekler
  
  1. **SPA kaydırma konteyneri genişletimi** — `overflow-y: auto/scroll` konteynerlerini algılar, tembel yüklemeyi tetiklemek için bunlar arasında kaydırır, ardından taşma kısıtlamalarını (Tailwind `h-[calc(...)]` dahil) kaldırır böylece tüm içerik tek bir geçişte işlenir.
  
  2. **DOM kararlılığı tespiti** — `readyState=complete` sonrasında, DOM öğesi sayısı stabilize olana kadar izler. Bu, SPA çerçevelerinin dinamik içeriği bitirmesini sağlar.
  
  3. **Tembel yükleme tetikleme** — Görünüm alanını artımlı olarak kaydırarak `IntersectionObserver` geri çağrılarını ateşler, ardından tüm `<img>` öğelerinin yüklenmesini tamamlamasını bekler.
  
  4. **Çok uzun sayfalar için döşeli yakalama** — 16.000px'i aşan sayfalar 8.000px döşelerine bölünür ve Python PIL kullanılarak otomatik olarak birleştirilir. PIL kullanılabilir değilse, döşemeleri ayrı ayrı kaydetmeye geri döner.
  
  5. **Chrome'un otomatik keşfi** — Hata ayıklama portunu bulmak için `DevToolsActivePort` dosyasını okur. Portları 9222, 9229, 9333 araştırmaya geri döner.
  
  6. **CDP Proxy yedek** — CDP proxy'si tarayıcı WebSocket'i tuttuğunda, betik yakalama için proxy API uç noktalarına (`/eval`, `/screenshot`, `/scroll`) geri döner.
  
  ## Nasıl Çalışır
  
  ```
  1. Chrome hata ayıklama portunu keşfet
  2. WebSocket üzerinden bağlan (CDP)
  3. Hedefe iliştir / arka plan sekmesi oluştur
  4. Emulation domain aracılığıyla görünüm alanı genişliğini ayarla
  5. Bekle: readyState + DOM kararlılığı
  6. Kaydırma konteynerlerini algıla ve genişlet
  7. Sayfanın tamamında kaydır (tembel yüklemeyi tetikle)
  8. Resimlerin tamamlanmasını bekle
  9. Son içerik yüksekliğini ölç
  10. Page.captureScreenshot (veya döşeli yakalama)
  11. Döşemeleri birleştir (PIL varsa)
  12. Görünüm alanını geri yükle, ayır, temizle
  ```
  
  ## Kaçınılması Gereken Desenler
  
  | Yapma | Bunun yerine yap |
  |-------|------------------|
  | 10.000px'ten uzun sayfalar üzerinde `--dpr 2` kullan | Chrome bellek sorunlarını önlemek için `--dpr 1` kullan |
  | Kimlik doğrulamalı/SSO sayfalar için `--url` kullan | Kullanıcının oturum açtığı bir sekmede `--list` + targetId kullan |
  | SPA'lar için `--wait` değerini 5000'den düşük ayarla | SPA'lar verileri almak ve işlemek için zaman gerektirir; 10000-15000 kullan |
  | Önce `--check` kontrol etmeden yakala | Chrome hata ayıklamasının kullanılabilir olduğunu her zaman doğrula |
  | Tüm sayfalar için görünüm alanı genişliğini kodla | Makaleler için 1200, panolar/tablolar için 1440+ kullan |
  | Çıktı doğrulamasını atla | Yakalamanın ardından her zaman `sips` veya `file` komutu ile doğrula |
  
  ## Sorun Giderme
  
  | Belirti | Neden | Çözüm |
  |--------|-------|-------|
  | "Chrome hata ayıklama portu bulunamıyor" | Uzaktan hata ayıklama etkinleştirilmedi | `chrome://inspect/#remote-debugging` aç, etkinleştir |
  | "WebSocket bağlantı zaman aşımı" | CDP proxy'si bağlantıyı tutuyor | Betik otomatik olarak proxy API'ye geri döner |
  | Boş/beyaz ekran görüntüsü | Sayfa henüz yüklenmedi | `--wait` değerini artır |
  | Altta kesilmiş | Kaydırma konteyneri genişletilmedi | Betik bunu otomatik olarak işler; devam ederse sorun dosyala |
  | Bellek yetersiz | Çok uzun sayfa + yüksek DPR | `--dpr` değerini 1'e indirge ve/veya `--width` değerini azalt |
  | "PIL stitching için kullanılamaz" | Python Pillow yüklü değil | `pip3 install Pillow` ile kur veya ayrı döşeme dosyalarını kabul et |
  
  ## Çapraz Referanslar
  
  - [`engineering/browser-automation`](../browser-automation/SKILL.md) — CDP/Playwright üzerinden genel tarayıcı otomasyon desenleri
  - [`engineering/performance-profiler`](../performance-profiler/SKILL.md) — Görsel yakalamaları tamamlayabilecek performans analizi
---

# Full Page Screenshot

Capture a full-page screenshot of any web page via Chrome DevTools Protocol. Produces a single PNG that includes all content — even portions that require scrolling. Zero external dependencies beyond Node.js 22+ and Chrome with remote debugging enabled.

## Prerequisites

- **Node.js 22+** (uses built-in `WebSocket`)
- **Chrome/Chromium** with remote debugging enabled

Check environment readiness:

```bash
node "${SKILL_DIR}/scripts/full-page-screenshot.mjs" --check
```

If Chrome check fails, instruct user to open `chrome://inspect/#remote-debugging` and enable **"Allow remote debugging for this browser instance"**.

## Workflow

### Option A: Screenshot an already-open tab (recommended for authenticated pages)

1. List available tabs:

```bash
node "${SKILL_DIR}/scripts/full-page-screenshot.mjs" --list
```

2. Identify the target by title/URL, then capture:

```bash
node "${SKILL_DIR}/scripts/full-page-screenshot.mjs" <targetId> /tmp/screenshot.png --width 1200 --dpr 1
```

### Option B: Screenshot a URL (opens a background tab, captures, closes)

```bash
node "${SKILL_DIR}/scripts/full-page-screenshot.mjs" --url "https://example.com" /tmp/screenshot.png --width 1200 --dpr 1 --wait 15000
```

> **Note:** `--url` mode creates a background tab. Pages requiring authentication (SSO, login walls) should use Option A instead.

### Parameters

| Parameter | Description | Default |
|-----------|-------------|---------|
| `output` | Output PNG file path | `/tmp/screenshot.png` |
| `--width` | Viewport width in CSS pixels (articles: 1200, dashboards: 1440-1920) | 1200 |
| `--dpr` | Device pixel ratio (2 = Retina, but 4x file size) | 1 |
| `--wait` | Page load timeout in ms (`--url` mode only) | 15000 |
| `--css` | Custom CSS to inject before capture (e.g., hide elements) | — |

### Verify Output

```bash
# macOS
sips -g pixelWidth -g pixelHeight /tmp/screenshot.png

# Linux
file /tmp/screenshot.png
```

## Core Capabilities

1. **SPA scroll container expansion** — Detects `overflow-y: auto/scroll` containers, scrolls through them to trigger lazy-loading, then removes overflow constraints (including Tailwind `h-[calc(...)]`) so all content renders in a single pass.

2. **DOM stability detection** — After `readyState=complete`, monitors DOM element count until it stabilizes. This ensures SPA frameworks finish rendering dynamic content.

3. **Lazy-load triggering** — Scrolls the viewport incrementally to fire `IntersectionObserver` callbacks, then waits for all `<img>` elements to complete loading.

4. **Tiled capture for very tall pages** — Pages exceeding 16,000px are captured in 8,000px tiles and automatically stitched using Python PIL. Falls back to saving tiles separately if PIL is unavailable.

5. **Auto-discovery of Chrome** — Reads `DevToolsActivePort` file to find the debugging port. Falls back to probing ports 9222, 9229, 9333.

6. **CDP Proxy fallback** — When a CDP proxy holds the browser WebSocket, the script falls back to proxy API endpoints (`/eval`, `/screenshot`, `/scroll`) for capture.

## How It Works

```
1. Discover Chrome debugging port
2. Connect via WebSocket (CDP)
3. Attach to target / create background tab
4. Set viewport width via Emulation domain
5. Wait: readyState + DOM stability
6. Detect & expand scroll containers
7. Scroll through page (trigger lazy-load)
8. Wait for images to complete
9. Measure final content height
10. Page.captureScreenshot (or tiled capture)
11. Stitch tiles if needed (PIL)
12. Restore viewport, detach, clean up
```

## Anti-Patterns

| Do NOT | Do instead |
|--------|-----------|
| Use `--dpr 2` on pages > 10,000px tall | Use `--dpr 1` to avoid Chrome memory issues |
| Use `--url` for authenticated/SSO pages | Use `--list` + targetId on a tab where user is logged in |
| Set `--wait` below 5000 for SPAs | SPAs need time to fetch data and render; use 10000-15000 |
| Capture without checking `--check` first | Always verify Chrome debugging is available |
| Hardcode viewport widths for all pages | Use 1200 for articles, 1440+ for dashboards/tables |
| Skip output verification | Always verify with `sips` or `file` command after capture |

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| "Cannot find Chrome debugging port" | Remote debugging not enabled | Open `chrome://inspect/#remote-debugging`, enable it |
| "WebSocket connection timeout" | CDP proxy holding the connection | Script auto-falls back to proxy API |
| Blank/white screenshot | Page not loaded yet | Increase `--wait` value |
| Truncated at bottom | Scroll container not expanded | Script handles this automatically; file an issue if it persists |
| Out of memory | Very tall page + high DPR | Reduce `--dpr` to 1 and/or reduce `--width` |
| "PIL not available for stitching" | Python Pillow not installed | Install with `pip3 install Pillow` or accept separate tile files |

## Cross-References

- [`engineering/browser-automation`](../browser-automation/SKILL.md) — General browser automation patterns via CDP/Playwright
- [`engineering/performance-profiler`](../performance-profiler/SKILL.md) — Performance analysis that may complement visual captures
