---
name: "just-every/mcp-screenshot-website-fast"
description: "Fast screenshot capture tool optimized for Claude Vision API. Automatically tiles full pages into 1072x1072 chunks for optimal AI processing with configurable viewports and wait strategies for dynamic content."
category: "Search & Data Extraction"
repo: "just-every/mcp-screenshot-website-fast"
stars: 106
url: "https://github.com/just-every/mcp-screenshot-website-fast"
body_length: 10133
license: "MIT"
language: "JavaScript"
homepage: "https://justevery.com"
body_tr: |-
  # @just-every/mcp-screenshot-website-fast

  Web sayfalarının hızlı ve verimli ekran görüntüsü - CLI kodlama araçları için optimize edilmiş. Sayfaları otomatik olarak optimal işleme için 1072x1072 parçalara böler.

  <a href="https://glama.ai/mcp/servers/@just-every/mcp-screenshot-website-fast">
    
  </a>

  [![npm version](https://badge.fury.io/js/@just-every%2Fmcp-screenshot-website-fast.svg)](https://www.npmjs.com/package/@just-every/mcp-screenshot-website-fast)
  [![GitHub Actions](https://github.com/just-every/mcp-screenshot-website-fast/workflows/Release/badge.svg)](https://github.com/just-every/mcp-screenshot-website-fast/actions)

  ## Genel Bakış

  AI görüş iş akışları için özel olarak geliştirilmiş bu araç, Claude Vision API ve diğer AI modelleri tarafından optimal işleme için otomatik çözünürlük sınırlaması ve parçalama ile yüksek kaliteli ekran görüntüsü yakalar. Ekran görüntülerinin maksimum uyumluluk için 1072x1072 piksel (1.15 megapiksel) olarak mükemmel şekilde boyutlandırılmasını sağlar.

  ## Özellikler

  - 📸 **Hızlı ekran görüntüsü yakalaması** Puppeteer başsız tarayıcı kullanarak
  - 🎯 **Claude Vision optimize edilmiş** otomatik çözünürlük sınırlaması ile (optimal 1.15 megapiksel için 1072x1072)
  - 🔲 **Otomatik parçalama** - Tam sayfalar otomatik olarak 1072x1072 parçalara bölünür
  - 🎬 **Ekran kaydı yakalaması** - Yapılandırılabilir aralıklarla zaman içinde bir dizi ekran görüntüsü kaydeder
  - 🔄 **Her zaman taze içerik** - Önbelleğe alma yok, güncel ekran görüntüleri sağlar
  - 📱 **Yapılandırılabilir viewport'lar** duyarlı test için
  - ⏱️ **Bekleme stratejileri** dinamik içerik için (networkidle, özel gecikmeler)
  - 📄 **Tam sayfa yakalaması** varsayılan olarak tam sayfa ekran görüntüleri için
  - 🎥 **Animasyonlu WebP dışa aktarımı** - Ekran kayıtlarını yüksek kaliteli animasyonlu WebP dosyaları olarak kaydedin
  - 💉 **JavaScript enjeksiyonu** - Ekran kaydı yakalamadan önce özel JS çalıştırın
  - 📦 **Minimal bağımlılıklar** hızlı npm kurulumları için
  - 🔌 **MCP entegrasyonu** sorunsuz AI iş akışları için
  - 🪟 **Windows uyumlu başlatıcı** npm kurulu MCP kullanımı için
  - 🔋 **Kaynak verimli** - 60 saniye hareketsizlikten sonra otomatik tarayıcı temizliği
  - 🧹 **Bellek yönetimi** - Sayfalar sızıntıları önlemek için her ekran görüntüsünden sonra kapatılır

  ## Kurulum

  ### Claude Code

  ```bash
  claude mcp add screenshot-website-fast -s user -- npx -y @just-every/mcp-screenshot-website-fast
  ```

  ### VS Code

  ```bash
  code --add-mcp '{"name":"screenshot-website-fast","command":"npx","args":["-y","@just-every/mcp-screenshot-website-fast"]}'
  ```

  ### Cursor

  ```bash
  cursor://anysphere.cursor-deeplink/mcp/install?name=screenshot-website-fast&config=eyJzY3JlZW5zaG90LXdlYnNpdGUtZmFzdCI6eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBqdXN0LWV2ZXJ5L21jcC1zY3JlZW5zaG90LXdlYnNpdGUtZmFzdCJdfX0=
  ```

  ### JetBrains IDEs

  Settings → Tools → AI Assistant → Model Context Protocol (MCP) → Add

  "As JSON" seçeneğini seçin ve yapıştırın:

  ```json
  {"command":"npx","args":["-y","@just-every/mcp-screenshot-website-fast"]}
  ```

  ### Raw JSON (herhangi bir MCP istemcisinde çalışır)

  ```json
  {
    "mcpServers": {
      "screenshot-website-fast": {
        "command": "npx",
        "args": ["-y", "@just-every/mcp-screenshot-website-fast"]
      }
    }
  }
  ```

  Bunu istemcinizin mcp.json dosyasına bırakın (.vscode/mcp.json, ~/.cursor/mcp.json veya Claude için .mcp.json gibi).

  ## Ön Koşullar

  - Node.js 20.x veya üstü
  - npm veya npx
  - Chrome/Chromium (Puppeteer tarafından otomatik olarak indirilir)

  ## Hızlı Başlangıç

  ### MCP Server Kullanımı

  IDE'de yüklendikten sonra, aşağıdaki araçlar kullanılabilir:

  #### Kullanılabilir Araçlar

  - `take_screenshot` - Bir web sayfasının yüksek kaliteli ekran görüntüsünü yakalar
    - Parametreler:
      - `url` (gerekli): Yakalanacak HTTP/HTTPS URL'si
      - `width` (isteğe bağlı): Viewport genişliği piksel cinsinden (max 1072, varsayılan: 1072)
      - `height` (isteğe bağlı): Viewport yüksekliği piksel cinsinden (max 1072, varsayılan: 1072)
      - `fullPage` (isteğe bağlı): Parçalama ile tam sayfa ekran görüntüsü yakala (varsayılan: true)
      - `waitUntil` (isteğe bağlı): Olayı bekle: load, domcontentloaded, networkidle0, networkidle2 (varsayılan: domcontentloaded)
      - `waitFor` (isteğe bağlı): Ek bekleme süresi milisaniye cinsinden
      - `directory` (isteğe bağlı): Ekran görüntülerini kaydetmek için dizin - base64 görüntüleri yerine dosya yollarını döndürür

  - `capture_selector` - CSS seçicisi ile eşleşen belirli bir DOM öğesinin ekran görüntüsünü yakalar
    - Parametreler:
      - `url` (gerekli): Yakalanacak HTTP/HTTPS URL'si
      - `selector` (gerekli): Yakalanacak öğe için CSS seçicisi
      - `width` (isteğe bağlı): Viewport genişliği piksel cinsinden (max 1072, varsayılan: 1072)
      - `height` (isteğe bağlı): Viewport yüksekliği piksel cinsinden (max 1072, varsayılan: 1072)
      - `waitUntil` (isteğe bağlı): Olayı bekle: load, domcontentloaded, networkidle0, networkidle2 (varsayılan: domcontentloaded)
      - `waitForMS` (isteğe bağlı): Ek bekleme süresi milisaniye cinsinden
      - `selectorTimeoutMS` (isteğe bağlı): Başarısız olmadan önce seçiciyi görünene kadar beklemek için süre (varsayılan: 5000)

  #### Kullanım Örnekleri

  **Varsayılan kullanım (base64 görüntüleri döndürür):**
  ```
  take_screenshot(url="https://example.com")
  ```

  **Dizine kaydet (dosya yollarını döndürür):**
  ```
  take_screenshot(url="https://example.com", directory="/path/to/screenshots")
  ```

  **Belirli bir öğeyi yakala:**
  ```
  capture_selector(url="https://example.com", selector="#main")
  ```

  `directory` parametresi kullanılırken:
  - Ekran görüntüleri zaman damgası ile PNG dosyaları olarak kaydedilir
  - Base64 verisi yerine dosya yolları döndürülür
  - Parçalanmış ekran görüntüleri için her parça ayrı bir dosya olarak kaydedilir
  - Dizin mevcut değilse otomatik olarak oluşturulur

  ### take_screencast

  Ekran kaydı oluşturmak için zaman içinde bir dizi ekran görüntüsü yakalar. Yalnızca viewport'un üst parçasını (1072x1072) yakalar.

  #### Parametreler
  - `url` (gerekli): Yakalanacak URL
  - `duration` (isteğe bağlı): Toplam süre saniye cinsinden (varsayılan: 10)
  - `interval` (isteğe bağlı): Ekran görüntüleri arasındaki aralık saniye cinsinden (varsayılan: 2)
  - `jsEvaluate` (isteğe bağlı): Başlangıçta çalıştırılacak JavaScript kodu
  - `waitUntil` (isteğe bağlı): Bekleme stratejisi: 'load', 'domcontentloaded', 'networkidle0', 'networkidle2'
  - `waitForMS` (isteğe bağlı): Başlamadan önce ek bekleme süresi
  - `directory` (isteğe bağlı): Animasyonlu WebP olarak dizine kaydet (her 1 saniyede bir yakalar)

  #### Kullanım Örnekleri

  **Basit ekran kaydı (10 saniye boyunca 5 kare):**
  ```
  take_screencast(url="https://example.com")
  ```

  **Özel zamanlama:**
  ```
  take_screencast(url="https://example.com", duration=15, interval=3)
  ```

  **JavaScript yürütmesi ile:**
  ```
  take_screencast(
    url="https://example.com",
    jsEvaluate="document.body.style.backgroundColor = 'red';"
  )
  ```

  **Animasyonlu WebP olarak kaydet:**
  ```
  take_screencast(url="https://example.com", directory="/path/to/output")
  ```

  `directory` parametresi kullanılırken:
  - 1 saniyelik aralıklarla animasyonlu WebP oluşturulur
  - Bireysel kareler ayrıca PNG dosyaları olarak kaydedilir
  - Animasyon varsayılan olarak sonsuza kadar döngü yapar
  - WebP mükemmel kalite sağlar:
    - Tam renk desteği (256 renk sınırlaması yok)
    - Web animasyonları için verimli sıkıştırma
    - Gradyan arka planları ve düzgün animasyonlar için mükemmel
    - GIF ile karşılaştırıldığında daha iyi kalite ile daha küçük dosya boyutları

  ## Geliştirme Kullanımı

  ### Kurulum

  ```bash
  npm install
  npm run build
  ```

  ### Ekran görüntüsü yakala
  ```bash
  # Otomatik parçalama ile tam sayfa (varsayılan)
  npm run dev capture https://example.com -o screenshot.png

  # Yalnızca viewport ekran görüntüsü  
  npm run dev capture https://example.com --no-full-page -o screenshot.png

  # Belirli koşulları bekle
  npm run dev capture https://example.com --wait-until networkidle0 --wait-for 2000 -o screenshot.png
  ```

  ### CLI Seçenekleri

  - `-w, --width <pixels>` - Viewport genişliği (max 1072, varsayılan: 1072)
  - `-h, --height <pixels>` - Viewport yüksekliği (max 1072, varsayılan: 1072)
  - `--no-full-page` - Tam sayfa yakalamasını ve parçalamayı devre dışı bırak
  - `--wait-until <event>` - Olayı bekle: load, domcontentloaded, networkidle0, networkidle2
  - `--wait-for <ms>` - Ek bekleme süresi milisaniye cinsinden
  - `-o, --output <path>` - Çıktı dosyası yolu (parçalı çıktı için gerekli)

  ## Otomatik Yeniden Başlatma Özelliği

  MCP sunucusu geliştirilmiş güvenilirlik için varsayılan olarak otomatik yeniden başlatma yeteneğini içerir:

  - Sunucu kilitlenirse otomatik olarak yeniden başlatır
  - İşlenmeyen istisnalar ve reddedilen sözleşmeleri işler
  - Üstel geri tepme uygular (1 dakika içinde maksimum 10 deneme)
  - Tüm yeniden başlatma girişimlerini günlüğe kaydeder
  - Kapatma sinyallerini (SIGINT, SIGTERM) zarif şekilde işler

  Otomatik yeniden başlatma olmadan geliştirme/hata ayıklama için:
  ```bash
  # Yeniden başlatma sarmalayıcısı olmadan doğrudan çalıştır
  npm run serve:dev
  ```

  ## Mimari

  ```
  mcp-screenshot-website-fast/
  ├── src/
  │   ├── internal/       # Temel ekran görüntüsü yakalaması mantığı
  │   ├── utils/          # Günlükçü ve yardımcı programlar
  │   ├── index.ts        # CLI giriş noktası
  │   ├── serve.ts        # MCP sunucusu giriş noktası
  │   └── serve-restart.ts # Otomatik yeniden başlatma sarmalayıcısı
  ```

  ## Geliştirme

  ```bash
  # Geliştirme modunda çalıştır
  npm run dev capture https://example.com -o screenshot.png

  # Üretim için derle
  npm run build

  # Testleri çalıştır
  npm test

  # Tür denetimi
  npm run typecheck

  # Linting
  npm run lint
  ```

  ## Bu Araç Neden?

  AI görüş iş akışları için özel olarak geliştirilmiş:

  1. **Claude Vision API'si için optimize edilmiş** - Otomatik çözünürlük sınırlaması 1072x1072 piksel (1.15 megapiksel)
  2. **Otomatik parçalama** - Tam sayfalar AI işleme için mükemmel parçalara bölünür
  3. **Her zaman taze** - Önbelleğe alma yok, en son içeriği alırsınız
  4. **MCP yerel** - AI geliştirme araçları ile birinci sınıf entegrasyon
  5. **Basit API** - Ekran görüntüleri yakalamak için temiz, basit arayüz

  ## Katkıda Bulunma

  Katkılar memnuniyetle karşılanır! Lütfen:

  1. Depoyu fork edin
  2. Bir özellik şubesi oluşturun
  3. Yeni işlevsellik için testler ekleyin
  4. Bir pull request gönderin

  ## Sorun Giderme

  ### Puppeteer Sorunları
  - Chrome/Chromium'un indirilebileceğinden emin olun
  - Güvenlik duvarı ayarlarını kontrol edin
  - `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true` ayarlanmayı deneyin ve özel yürütülebilir sağlayın

  ### Ekran Görüntüsü Kalitesi
  - Viewport boyutlarını ayarlayın
  - Uygun bekleme stratejileri kullanın
  - Sitenin kimlik doğrulaması gerektirip gerektirmediğini kontrol edin

  ### Zaman Aşımı Hataları
  - `--wait-for` bayrağı ile bekleme süresini artırın
  - Farklı `--wait-until` stratejilerini deneyin
  - Sitenin erişilebilir olup olmadığını kontrol edin

  ## Lisans

  MIT
---

# @just-every/mcp-screenshot-website-fast

Fast, efficient screenshot capture of web pages - optimized for CLI coding tools. Automatically tiles full pages into 1072x1072 chunks for optimal processing.

<a href="https://glama.ai/mcp/servers/@just-every/mcp-screenshot-website-fast">
  
</a>

[![npm version](https://badge.fury.io/js/@just-every%2Fmcp-screenshot-website-fast.svg)](https://www.npmjs.com/package/@just-every/mcp-screenshot-website-fast)
[![GitHub Actions](https://github.com/just-every/mcp-screenshot-website-fast/workflows/Release/badge.svg)](https://github.com/just-every/mcp-screenshot-website-fast/actions)

## Overview

Built specifically for AI vision workflows, this tool captures high-quality screenshots with automatic resolution limiting and tiling for optimal processing by Claude Vision API and other AI models. It ensures screenshots are perfectly sized at 1072x1072 pixels (1.15 megapixels) for maximum compatibility.

## Features

- 📸 **Fast screenshot capture** using Puppeteer headless browser
- 🎯 **Claude Vision optimized** with automatic resolution limiting (1072x1072 for optimal 1.15 megapixels)
- 🔲 **Automatic tiling** - Full pages are automatically split into 1072x1072 tiles
- 🎬 **Screencast capture** - Record series of screenshots over time with configurable intervals
- 🔄 **Always fresh content** - No caching ensures up-to-date screenshots
- 📱 **Configurable viewports** for responsive testing
- ⏱️ **Wait strategies** for dynamic content (networkidle, custom delays)
- 📄 **Full page capture** by default for complete page screenshots
- 🎥 **Animated WebP export** - Save screencasts as high-quality animated WebP files
- 💉 **JavaScript injection** - Execute custom JS before screencast capture
- 📦 **Minimal dependencies** for fast npm installs
- 🔌 **MCP integration** for seamless AI workflows
- 🪟 **Windows-compatible launcher** for npm-installed MCP usage
- 🔋 **Resource efficient** - Automatic browser cleanup after 60 seconds of inactivity
- 🧹 **Memory management** - Pages are closed after each screenshot to prevent leaks

## Installation

### Claude Code

```bash
claude mcp add screenshot-website-fast -s user -- npx -y @just-every/mcp-screenshot-website-fast
```

### VS Code

```bash
code --add-mcp '{"name":"screenshot-website-fast","command":"npx","args":["-y","@just-every/mcp-screenshot-website-fast"]}'
```

### Cursor

```bash
cursor://anysphere.cursor-deeplink/mcp/install?name=screenshot-website-fast&config=eyJzY3JlZW5zaG90LXdlYnNpdGUtZmFzdCI6eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBqdXN0LWV2ZXJ5L21jcC1zY3JlZW5zaG90LXdlYnNpdGUtZmFzdCJdfX0=
```

### JetBrains IDEs

Settings → Tools → AI Assistant → Model Context Protocol (MCP) → Add

Choose "As JSON" and paste:

```json
{"command":"npx","args":["-y","@just-every/mcp-screenshot-website-fast"]}
```

### Raw JSON (works in any MCP client)

```json
{
  "mcpServers": {
    "screenshot-website-fast": {
      "command": "npx",
      "args": ["-y", "@just-every/mcp-screenshot-website-fast"]
    }
  }
}
```

Drop this into your client's mcp.json (e.g. .vscode/mcp.json, ~/.cursor/mcp.json, or .mcp.json for Claude).

## Prerequisites

- Node.js 20.x or higher
- npm or npx
- Chrome/Chromium (automatically downloaded by Puppeteer)

## Quick Start

### MCP Server Usage

Once installed in your IDE, the following tools are available:

#### Available Tools

- `take_screenshot` - Captures a high-quality screenshot of a webpage
  - Parameters:
    - `url` (required): The HTTP/HTTPS URL to capture
    - `width` (optional): Viewport width in pixels (max 1072, default: 1072)
    - `height` (optional): Viewport height in pixels (max 1072, default: 1072)
    - `fullPage` (optional): Capture full page screenshot with tiling (default: true)
    - `waitUntil` (optional): Wait until event: load, domcontentloaded, networkidle0, networkidle2 (default: domcontentloaded)
    - `waitFor` (optional): Additional wait time in milliseconds
    - `directory` (optional): Directory to save screenshots - returns file paths instead of base64 images

- `capture_selector` - Captures a screenshot of a specific DOM element matched by a CSS selector
  - Parameters:
    - `url` (required): The HTTP/HTTPS URL to capture
    - `selector` (required): CSS selector for the element to capture
    - `width` (optional): Viewport width in pixels (max 1072, default: 1072)
    - `height` (optional): Viewport height in pixels (max 1072, default: 1072)
    - `waitUntil` (optional): Wait until event: load, domcontentloaded, networkidle0, networkidle2 (default: domcontentloaded)
    - `waitForMS` (optional): Additional wait time in milliseconds
    - `selectorTimeoutMS` (optional): How long to wait for the selector to appear before failing (default: 5000)

#### Usage Examples

**Default usage (returns base64 images):**
```
take_screenshot(url="https://example.com")
```

**Save to directory (returns file paths):**
```
take_screenshot(url="https://example.com", directory="/path/to/screenshots")
```

**Capture a specific element:**
```
capture_selector(url="https://example.com", selector="#main")
```

When using the `directory` parameter:
- Screenshots are saved as PNG files with timestamps
- File paths are returned instead of base64 data
- For tiled screenshots, each tile is saved as a separate file
- Directory is created automatically if it doesn't exist

### take_screencast

Captures a series of screenshots over time to create a screencast. Only captures the top tile (1072x1072) of the viewport.

#### Parameters
- `url` (required): The URL to capture
- `duration` (optional): Total duration in seconds (default: 10)
- `interval` (optional): Interval between screenshots in seconds (default: 2)
- `jsEvaluate` (optional): JavaScript code to execute at the start
- `waitUntil` (optional): Wait strategy: 'load', 'domcontentloaded', 'networkidle0', 'networkidle2'
- `waitForMS` (optional): Additional wait time before starting
- `directory` (optional): Save as animated WebP to directory (captures every 1 second)

#### Usage Examples

**Basic screencast (5 frames over 10 seconds):**
```
take_screencast(url="https://example.com")
```

**Custom timing:**
```
take_screencast(url="https://example.com", duration=15, interval=3)
```

**With JavaScript execution:**
```
take_screencast(
  url="https://example.com",
  jsEvaluate="document.body.style.backgroundColor = 'red';"
)
```

**Save as animated WebP:**
```
take_screencast(url="https://example.com", directory="/path/to/output")
```

When using the `directory` parameter:
- An animated WebP is created with 1-second intervals
- Individual frames are also saved as PNG files
- The animation loops forever by default
- WebP provides excellent quality:
  - Full color support (no 256 color limitation)
  - Efficient compression for web animations
  - Perfect for gradient backgrounds and smooth animations
  - Smaller file sizes compared to GIF with better quality

## Development Usage

### Install

```bash
npm install
npm run build
```

### Capture screenshot
```bash
# Full page with automatic tiling (default)
npm run dev capture https://example.com -o screenshot.png

# Viewport-only screenshot  
npm run dev capture https://example.com --no-full-page -o screenshot.png

# Wait for specific conditions
npm run dev capture https://example.com --wait-until networkidle0 --wait-for 2000 -o screenshot.png
```

### CLI Options

- `-w, --width <pixels>` - Viewport width (max 1072, default: 1072)
- `-h, --height <pixels>` - Viewport height (max 1072, default: 1072)
- `--no-full-page` - Disable full page capture and tiling
- `--wait-until <event>` - Wait until event: load, domcontentloaded, networkidle0, networkidle2
- `--wait-for <ms>` - Additional wait time in milliseconds
- `-o, --output <path>` - Output file path (required for tiled output)

## Auto-Restart Feature

The MCP server includes automatic restart capability by default for improved reliability:

- Automatically restarts the server if it crashes
- Handles unhandled exceptions and promise rejections
- Implements exponential backoff (max 10 attempts in 1 minute)
- Logs all restart attempts for monitoring
- Gracefully handles shutdown signals (SIGINT, SIGTERM)

For development/debugging without auto-restart:
```bash
# Run directly without restart wrapper
npm run serve:dev
```

## Architecture

```
mcp-screenshot-website-fast/
├── src/
│   ├── internal/       # Core screenshot capture logic
│   ├── utils/          # Logger and utilities
│   ├── index.ts        # CLI entry point
│   ├── serve.ts        # MCP server entry point
│   └── serve-restart.ts # Auto-restart wrapper
```

## Development

```bash
# Run in development mode
npm run dev capture https://example.com -o screenshot.png

# Build for production
npm run build

# Run tests
npm test

# Type checking
npm run typecheck

# Linting
npm run lint
```

## Why This Tool?

Built specifically for AI vision workflows:

1. **Optimized for Claude Vision API** - Automatic resolution limiting to 1072x1072 pixels (1.15 megapixels)
2. **Automatic tiling** - Full pages split into perfect chunks for AI processing
3. **Always fresh** - No caching ensures you get the latest content
4. **MCP native** - First-class integration with AI development tools
5. **Simple API** - Clean, straightforward interface for capturing screenshots

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Add tests for new functionality
4. Submit a pull request

## Troubleshooting

### Puppeteer Issues
- Ensure Chrome/Chromium can be downloaded
- Check firewall settings
- Try setting `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true` and provide custom executable

### Screenshot Quality
- Adjust viewport dimensions
- Use appropriate wait strategies
- Check if site requires authentication

### Timeout Errors
- Increase wait time with `--wait-for` flag
- Use different `--wait-until` strategies
- Check if site is accessible

## License

MIT
