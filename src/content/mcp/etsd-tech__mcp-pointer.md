---
name: "etsd-tech/mcp-pointer"
description: "Visual DOM element selector for agentic coding tools. Chrome extension + MCP server bridge for Claude Code, Cursor, Windsurf etc. Option+Click to capture elements."
description_tr: "Agentic kodlama araçları için görsel DOM element seçici. Claude Code, Cursor, Windsurf vb. için Chrome extension + MCP server köprüsü. Option+Click ile elementleri yakala."
category: "Developer Tools"
repo: "etsd-tech/mcp-pointer"
stars: 578
url: "https://github.com/etsd-tech/mcp-pointer"
body_length: 8486
license: "MIT"
language: "TypeScript"
body_tr: |-
  [![CI](https://github.com/etsd-tech/mcp-pointer/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/etsd-tech/mcp-pointer/actions/workflows/ci.yml)
  [![Release](https://github.com/etsd-tech/mcp-pointer/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/etsd-tech/mcp-pointer/actions/workflows/release.yml)
  [![npm version](https://img.shields.io/npm/v/@mcp-pointer/server?label=Server)](https://www.npmjs.com/package/@mcp-pointer/server)
  [![Chrome Extension](https://img.shields.io/github/package-json/v/etsd-tech/mcp-pointer?filename=packages%2Fchrome-extension%2Fpackage.json&label=Chrome-Extension)](https://github.com/etsd-tech/mcp-pointer/releases)
  [![License: MIT](https://img.shields.io/github/license/etsd-tech/mcp-pointer?label=License)](https://github.com/etsd-tech/mcp-pointer/blob/main/LICENSE)

  # 👆 MCP Pointer

  **MCP aracılığıyla agentic kodlama araçları için tarayıcı DOM öğelerine işaret edin!**

  MCP Pointer, bir MCP Server'ı ve Chrome Extension'ı birleştiren *yerel* bir araçtır:

  1. **🖥️ MCP Server** (Node.js paketi) - Model Context Protocol aracılığıyla tarayıcı ile AI araçları arasında köprü kurar
  2. **🌐 Chrome Extension** - `Option+Click` kullanarak tarayıcıda DOM öğesi seçimlerini yakalar

  Extension, tarayıcıda DOM öğelerini görsel olarak seçmenize ve MCP Server'ı bu **metinsel bağlamı** Claude Code, Cursor ve Windsurf gibi agentic kodlama araçlarına standartlaştırılmış MCP araçları aracılığıyla sunmanıza olanak tanır.

  ## ✨ Özellikler

  - 🎯 **`Option+Click` Seçimi** - Basitçe `Option` tuşunu (Windows'ta Alt) basılı tutun ve herhangi bir öğeye tıklayın
  - 📋 **Eksiksiz Öğe Verileri** - Metin içeriği, CSS sınıfları, HTML öznitelikleri, konumlandırma ve stil
  - 💡 **Dinamik Bağlam Kontrolü** - Yalnızca görünür metni isteyin, metni tamamen bastırın veya MCP çağrısı başına CSS detayını yok → tam hesaplanmış stil olarak ayarlayın
  - ⚛️ **React Bileşen Algılama** - Fiber aracılığıyla bileşen adları ve kaynak dosyaları (deneysel)
  - 🔗 **WebSocket Bağlantısı** - Tarayıcı ve AI araçları arasında gerçek zamanlı iletişim
  - 🤖 **MCP Uyumlu** - Claude Code ve diğer MCP etkinleştirilmiş AI araçlarıyla çalışır

  ## 🎬 Kullanım örneği (video)

  https://github.com/user-attachments/assets/98c4adf6-1f05-4c9b-be41-0416ab784e2c

  MCP Pointer'ı işlemde görün: Tarayıcınızdaki herhangi bir öğeye `Option+Click` yapın, ardından agentic kodlama aracınızdan bunu sorgulatın (bu örnekte Claude Code). AI, CSS özellikleri, url, seçici ve daha fazlasını içeren seçili DOM öğesi hakkında eksiksiz metinsel bağlam alır.

  ## 🚀 Başlangıç

  ### 1. Chrome Extension'ı Yükleyin

  **🎉 Artık Chrome Web Store'da mevcut!**

  [![Chrome Web Store'dan Yükle](https://img.shields.io/badge/Chrome_Web_Store-Install-blue?style=for-the-badge&logo=google-chrome)](https://chromewebstore.google.com/detail/mcp-pointer/jfhgaembhafbffidedhpkmnaajdfeiok)

  Chrome Web Store'dan yüklemek için yukarıdaki bağlantıya tıklayın.

  <details>
  <summary>Alternatif: Manuel Yükleme</summary>

  **Seçenek A: Yayınlardan İndirin**

  1. [GitHub Yayınları](https://github.com/etsd-tech/mcp-pointer/releases) sayfasına gidin
  2. En son yayından `mcp-pointer-chrome-extension.zip` dosyasını indirin
  3. Zip dosyasını bilgisayarınızda bir klasöre açın
  4. Chrome → Ayarlar → Uzantılar → Geliştirici modu (AÇIN)
  5. "Paketlenmemiş dosyayı yükle" ve ayıklanan klasörü seçin
  6. MCP Pointer extension'ı uzantılar listenizde görünmelidir
  7. **Web sayfalarını yenileyin** extension'ı etkinleştirmek için

  **Seçenek B: Kaynaktan Derleyin**

  1. Bu depoyu klonlayın
  2. [CONTRIBUTING.md](./CONTRIBUTING.md) içindeki derleme talimatlarını izleyin
  3. Chrome → Ayarlar → Uzantılar → Geliştirici modu (AÇIN)
  4. "Paketlenmemiş dosyayı yükle" ve `packages/chrome-extension/dist/` klasörünü seçin
  5. **Web sayfalarını yenileyin** extension'ı etkinleştirmek için

  </details>

  ### 2. MCP Server'ı Yapılandırın

  AI aracınız için tek komutlu kurulum:

  ```bash
  npx -y @mcp-pointer/server config claude  # veya cursor, windsurf ve diğerleri - aşağıya bakın
  ```

  <details>
  <summary>Diğer AI Araçları ve Seçenekler</summary>

  ```bash
  # Diğer AI araçları için
  npx -y @mcp-pointer/server config cursor     # Otomatik kurulum için Cursor deeplink'ini açar
  npx -y @mcp-pointer/server config windsurf   # Windsurf yapılandırma dosyasını otomatik günceller
  npx -y @mcp-pointer/server config manual     # Diğer araçlar için manuel yapılandırmayı gösterir
  ```

  > **İsteğe Bağlı:** `npm install -g @mcp-pointer/server` ile genel olarak yükleyebilir ve `npx -y @mcp-pointer/server` yerine `mcp-pointer` kullanabilirsiniz

  </details>

  Yapılandırmadan sonra, MCP bağlantısını yüklemek için **kodlama aracınızı yeniden başlatın**.

  > **🔄 Zaten MCP Pointer kullanıyor musunuz?** Otomatik güncellenebilen yapılandırmaya güncelleme yapmak için yapılandırma komutunu yeniden çalıştırın:
  > ```bash
  > npx -y @mcp-pointer/server config <your-tool>  # Her zaman en yeni sürümü kullanacak şekilde yeniden yapılandırır
  > ```

  ### 3. Kullanmaya Başlayın

  1. **Herhangi bir web sayfasına gidin**
  2. **`Option+Click`** herhangi bir öğeyi seçmek için
  3. **AI'ınızdan** hedeflenen öğeyi analiz etmesini isteyin!

  AI aracınız `npx -y @mcp-pointer/server@latest start` komutu kullanarak gerektiğinde MCP sunucusunu otomatik olarak başlatacaktır.

  **Mevcut MCP Aracı:**
  - `get-pointed-element` – Şu anda işaret edilen DOM öğesi hakkında metinsel bilgi döndürür. İsteğe bağlı parametreler:
    - `textDetail`: `0 | 1 | 2` (varsayılan `2`) ne kadar metin ekleneceğini kontrol eder (`0 = yok`, `1 = yalnızca görünür metin`, `2 = görünür + gizli`).
    - `cssLevel`: `0 | 1 | 2 | 3` (varsayılan `1`) stil detayını kontrol eder, hiç CSS'den (0) tam hesaplanmış stil'e (3) kadar.

  ## 🎯 Nasıl Çalışır

  1. **Öğe Seçimi**: İçerik script `Option+Click` olaylarını yakalar
  2. **Veri Çıkarma**: Öğe yapısını, CSS'i ve framework bilgisini analiz eder
  3. **WebSocket Aktarımı**: Verileri 7007 portundaki MCP sunucusuna gönderir
  4. **MCP Protokolü**: Verileri MCP araçları aracılığıyla AI araçlarına sunmaya açar
  5. **AI Analizi**: Asistan artık öğeyi görebilir ve analiz edebilir!

  ## 🎨 Çıkarılan Öğe Verileri

  - **Temel Bilgi**: Etiket adı, ID, sınıflar, metin içeriği
  - **CSS Özellikleri**: Görüntü, konum, renkler, boyutlar
  - **Bileşen Bilgisi**: React bileşen adları ve kaynak dosyaları (deneysel)
  - **Öznitelikler**: Tüm HTML öznitelikleri
  - **Konum**: Kesin koordinatlar ve boyutlar
  - **Kaynak İpuçları**: Dosya yolları ve bileşen kaynakları

  ## 🔍 Framework Desteği

  - ⚛️ **React** - Fiber aracılığıyla bileşen adları ve kaynak dosyaları (deneysel)
  - 📦 **Genel HTML/CSS/JS** - Herhangi bir web içeriği için tam destek
  - 🔮 **Planlı** - Vue bileşen algılama (PR'lar değerlidir)

  ## 🌐 Tarayıcı Desteği

  - ✅ **Chrome** - Tam destek (test edilmiş)
  - 🟡 **Chromium tabanlı tarayıcılar** - Çalışmalı (Edge, Brave, Arc - yerleşik extension'ı manuel yükleyin)

  ## 🐛 Sorun Giderme

  ### Extension Bağlanmıyor

  1. MCP sunucusunun çalıştığından emin olun: `npx -y @mcp-pointer/server@latest start`
  2. WebSocket hataları için tarayıcı konsolunu kontrol edin
  3. 7007 portunun güvenlik duvarı tarafından bloke edilmediğini doğrulayın

  ### MCP Araçları Mevcut Değil

  1. Yükledikten sonra AI asistanınızı yeniden başlatın
  2. MCP yapılandırmasını kontrol edin: `mcp-pointer config <your-tool>`
  3. Sunucunun çalıştığını doğrulayın: `npx -y @mcp-pointer/server@latest start`

  ### Öğeler Vurgulanmıyor

  1. Bazı sayfalar içerik scriptlerini bloke eder (chrome://, vb.)
  2. Sayfayı yenilemeyi deneyin
  3. Hedeflemenin etkinleştirilip etkinleştirilmediğini kontrol edin (extension simgesini tıklayın)

  ## 🚀 Yol Haritası

  ### 1. **Dinamik Bağlam Kontrolü**
     - Tam ham bağlam sunucuya aktarıldı
     - LLM yapılandırılabilir detay seviyeleri (yalnızca görünür metin, tüm metin, CSS seviyeleri)
     - Kademeli iyileştirme seçenekleri / token'a duyarlı veri getirme

  ### 2. **Görsel İçerik Desteği** (çoklu modlu LLM'ler için)
     - Görüntüler için Base64 kodlaması (img etiketleri)
     - Seçili öğelerin ekran görüntüsü
     - Doğrudan görsel içerik alımı için ayrı MCP aracı

  ### 3. **Geliştirilmiş Framework Desteği**
     - Vue.js bileşen algılama
     - Daha iyi React desteği (React 19 `_debugSource` kaldırdı, dev derlemelerinde kaynak eşlemesini etkiledi)

  ### 4. **Çoklu Seçim**
     - Birden fazla DOM öğesi seçme yeteneği
     - https://github.com/etsd-tech/mcp-pointer/pull/9

  ## 📝 Lisans

  MIT Lisansı - ayrıntılar için LICENSE dosyasına bakın

  ## 🤝 Katkı Yapma

  Katkıları memnuniyetle karşılıyoruz! Lütfen geliştirme kurulumu ve yönergeleri için [CONTRIBUTING.md](./CONTRIBUTING.md) rehberimize bakın.

  ---

  *[Click-to-Component](https://github.com/ericclemmons/click-to-component) gibi araçlardan ilham alınmıştır ve bileşen geliştirme iş akışları için tasarlanmıştır.*

  ---

  **AI destekli web geliştirme için ❤️ ile yapılmıştır**

  *Artık AI'ınız `Option+Click` ile işaret ettiğiniz herhangi bir öğeyi analiz edebilir! 👆*
---



[![CI](https://github.com/etsd-tech/mcp-pointer/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/etsd-tech/mcp-pointer/actions/workflows/ci.yml)
[![Release](https://github.com/etsd-tech/mcp-pointer/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/etsd-tech/mcp-pointer/actions/workflows/release.yml)
[![npm version](https://img.shields.io/npm/v/@mcp-pointer/server?label=Server)](https://www.npmjs.com/package/@mcp-pointer/server)
[![Chrome Extension](https://img.shields.io/github/package-json/v/etsd-tech/mcp-pointer?filename=packages%2Fchrome-extension%2Fpackage.json&label=Chrome-Extension)](https://github.com/etsd-tech/mcp-pointer/releases)
[![License: MIT](https://img.shields.io/github/license/etsd-tech/mcp-pointer?label=License)](https://github.com/etsd-tech/mcp-pointer/blob/main/LICENSE)

# 👆 MCP Pointer

**Point to browser DOM elements for agentic coding tools via MCP!**

MCP Pointer is a *local* tool combining an MCP Server with a Chrome Extension:

1. **🖥️ MCP Server** (Node.js package) - Bridges between the browser and AI tools via the Model Context Protocol
2. **🌐 Chrome Extension** - Captures DOM element selections in the browser using `Option+Click`

The extension lets you visually select DOM elements in the browser, and the MCP server makes this **textual context** available to agentic coding tools like Claude Code, Cursor, and Windsurf through standardized MCP tools.

## ✨ Features

- 🎯 **`Option+Click` Selection** - Simply hold `Option` (Alt on Windows) and click any element
- 📋 **Complete Element Data** - Text content, CSS classes, HTML attributes, positioning, and styling
- 💡 **Dynamic Context Control** - Request visible-only text, suppress text entirely, or dial CSS detail from none → full computed styles per MCP call
- ⚛️ **React Component Detection** - Component names and source files via Fiber (experimental)
- 🔗 **WebSocket Connection** - Real-time communication between browser and AI tools
- 🤖 **MCP Compatible** - Works with Claude Code and other MCP-enabled AI tools

## 🎬 Usage example (video)

https://github.com/user-attachments/assets/98c4adf6-1f05-4c9b-be41-0416ab784e2c

See MCP Pointer in action: `Option+Click` any element in your browser, then ask your agentic coding tool about it (in this example, Claude Code). The AI gets complete textual context about the selected DOM element including CSS properties, url, selector, and more.

## 🚀 Getting Started

### 1. Install Chrome Extension

**🎉 Now available on Chrome Web Store!**

[![Install from Chrome Web Store](https://img.shields.io/badge/Chrome_Web_Store-Install-blue?style=for-the-badge&logo=google-chrome)](https://chromewebstore.google.com/detail/mcp-pointer/jfhgaembhafbffidedhpkmnaajdfeiok)

Simply click the link above to install from the Chrome Web Store.

<details>
<summary>Alternative: Manual Installation</summary>

**Option A: Download from Releases**

1. Go to [GitHub Releases](https://github.com/etsd-tech/mcp-pointer/releases)
2. Download `mcp-pointer-chrome-extension.zip` from the latest release
3. Extract the zip file to a folder on your computer
4. Open Chrome → Settings → Extensions → Developer mode (toggle ON)
5. Click "Load unpacked" and select the extracted folder
6. The MCP Pointer extension should appear in your extensions list
7. **Reload web pages** to activate the extension

**Option B: Build from Source**

1. Clone this repository
2. Follow the build instructions in [CONTRIBUTING.md](./CONTRIBUTING.md)
3. Open Chrome → Settings → Extensions → Developer mode (toggle ON)
4. Click "Load unpacked" and select the `packages/chrome-extension/dist/` folder
5. **Reload web pages** to activate the extension

</details>

### 2. Configure MCP Server

One command setup for your AI tool:

```bash
npx -y @mcp-pointer/server config claude  # or cursor, windsurf, and others - see below
```

<details>
<summary>Other AI Tools & Options</summary>

```bash
# For other AI tools
npx -y @mcp-pointer/server config cursor     # Opens Cursor deeplink for automatic installation
npx -y @mcp-pointer/server config windsurf   # Automatically updates Windsurf config file
npx -y @mcp-pointer/server config manual     # Shows manual configuration for other tools
```

> **Optional:** You can install globally with `npm install -g @mcp-pointer/server` to use `mcp-pointer` instead of `npx -y @mcp-pointer/server`

</details>

After configuration, **restart your coding tool** to load the MCP connection.

> **🔄 Already using MCP Pointer?** Run the config command again to update to auto-updating configuration:
> ```bash
> npx -y @mcp-pointer/server config <your-tool>  # Reconfigures to always use latest version
> ```

### 3. Start Using

1. **Navigate to any webpage** 
2. **`Option+Click`** any element to select it
3. **Ask your AI** to analyze the targeted element!

Your AI tool will automatically start the MCP server when needed using the `npx -y @mcp-pointer/server@latest start` command.

**Available MCP Tool:**
- `get-pointed-element` – Returns textual information about the currently pointed DOM element. Optional arguments:
  - `textDetail`: `0 | 1 | 2` (default `2`) controls how much text to include (`0 = none`, `1 = visible text only`, `2 = visible + hidden`).
  - `cssLevel`: `0 | 1 | 2 | 3` (default `1`) controls styling detail, from no CSS (0) up to full computed styles (3).

## 🎯 How It Works

1. **Element Selection**: Content script captures `Option+Click` events
2. **Data Extraction**: Analyzes element structure, CSS, and framework info
3. **WebSocket Transport**: Sends data to MCP server on port 7007
4. **MCP Protocol**: Makes data available to AI tools via MCP tools
5. **AI Analysis**: Your assistant can now see and analyze the element!

## 🎨 Element Data Extracted

- **Basic Info**: Tag name, ID, classes, text content
- **CSS Properties**: Display, position, colors, dimensions
- **Component Info**: React component names and source files (experimental)  
- **Attributes**: All HTML attributes
- **Position**: Exact coordinates and dimensions
- **Source Hints**: File paths and component origins

## 🔍 Framework Support

- ⚛️ **React** - Component names and source files via Fiber (experimental)
- 📦 **Generic HTML/CSS/JS** - Full support for any web content
- 🔮 **Planned** - Vue component detection (PRs appreciated)

## 🌐 Browser Support

- ✅ **Chrome** - Full support (tested)
- 🟡 **Chromium-based browsers** - Should work (Edge, Brave, Arc - load built extension manually)

## 🐛 Troubleshooting

### Extension Not Connecting

1. Make sure MCP server is running: `npx -y @mcp-pointer/server@latest start`
2. Check browser console for WebSocket errors
3. Verify port 7007 is not blocked by firewall

### MCP Tools Not Available

1. Restart your AI assistant after installing
2. Check MCP configuration: `mcp-pointer config <your-tool>`  
3. Verify server is running: `npx -y @mcp-pointer/server@latest start`

### Elements Not Highlighting

1. Some pages block content scripts (chrome://, etc.)
2. Try refreshing the page
3. Check if targeting is enabled (click extension icon)

## 🚀 Roadmap

### 1. **Dynamic Context Control**
   - Full raw context transferred to server
   - LLM-configurable detail levels (visible text only, all text, CSS levels)
   - Progressive refinement options / token-conscious data fetching

### 2. **Visual Content Support** (for multimodal LLMs)
   - Base64 encoding for images (img tags)
   - Screenshot capture of selected elements
   - Separate MCP tool for direct visual content retrieval

### 3. **Enhanced Framework Support**
   - Vue.js component detection
   - Better React support (React 19 removed `_debugSource`, affecting source mapping in dev builds)

### 4. **Multi Select**
   - Having the ability to select multiple DOM elements
   - https://github.com/etsd-tech/mcp-pointer/pull/9

## 📝 License

MIT License - see LICENSE file for details

## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](./CONTRIBUTING.md) guide for development setup and guidelines.

---

*Inspired by tools like [Click-to-Component](https://github.com/ericclemmons/click-to-component) for component development workflows.*

---

**Made with ❤️ for AI-powered web development**

*Now your AI can analyze any element you point at with `Option+Click`! 👆*
