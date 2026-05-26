---
name: "VikashLoomba/MCP-Server-Playwright"
description: "A Model Context Protocol server that provides browser automation capabilities using Playwright"
description_tr: "Playwright kullanarak tarayıcı otomasyon yetenekleri sağlayan bir Model Context Protocol sunucusu"
category: "Browser Automation"
repo: "VikashLoomba/MCP-Server-Playwright"
stars: 294
url: "https://github.com/VikashLoomba/MCP-Server-Playwright"
body_length: 6301
license: "MIT"
language: "JavaScript"
body_tr: |-
  <h1 align="center">MCP Server Playwright</h1>
  <p align="center">
    <a href="https://www.automatalabs.io"></a>
  </p>
  <p align="center">
    <b>Playwright kullanarak tarayıcı otomasyon yetenekleri sağlayan bir Model Context Protocol sunucusu</b></br>
    <sub>LLM'lerin web sayfalarıyla etkileşime girmesini, ekran görüntüleri almasını ve gerçek bir tarayıcı ortamında JavaScript yürütmesini sağlayın</sub>
  </p>

  <p align="center">
    <a href="https://www.npmjs.com/package/@automatalabs/mcp-server-playwright"></a>
    <a href="https://npmcharts.com/compare/@automatalabs/mcp-server-playwright?minimal=true"></a>
    <a href="https://github.com/Automata-Labs-team/MCP-Server-Playwright/blob/main/LICENSE"></a>
    <a href="https://smithery.ai/server/@automatalabs/mcp-server-playwright"></a>
  </p>

  <a href="https://glama.ai/mcp/servers/9q4zck8po5"></a>

  ## İçindekiler

  - [Özellikler](#özellikler)
  - [Kurulum](#kurulum)
  - [Yapılandırma](#yapılandırma)
  - [Bileşenler](#bileşenler)
    - [Araçlar](#araçlar)
    - [Kaynaklar](#kaynaklar)
  - [Lisans](#lisans)

  ## Özellikler

  - 🌐 Tam tarayıcı otomasyon yetenekleri
  - 📸 Tüm sayfaların veya belirli öğelerin ekran görüntüsü
  - 🖱️ Kapsamlı web etkileşimi (gezinme, tıklama, form doldurma)
  - 📊 Console log izleme
  - 🔧 Tarayıcı bağlamında JavaScript yürütme

  ## Kurulum

  ### Smithery Aracılığıyla Kurulum

  MCP Server Playwright'ı [Smithery](https://smithery.ai/server/@automatalabs/mcp-server-playwright) aracılığıyla Claude Desktop için otomatik olarak yüklemek için:

  ```bash
  npx -y @smithery/cli install @automatalabs/mcp-server-playwright --client claude
  ```

  Paketi npx veya mcp-get kullanarak yükleyebilirsiniz:

  npx kullanarak:
  ```bash
  npx @automatalabs/mcp-server-playwright install
  ```
  Bu komut aşağıdakileri yapacaktır:
  1. İşletim sistemi uyumluluğunuzu kontrol eder (Windows/macOS)
  2. Claude yapılandırma dosyasını oluşturur veya günceller
  3. Playwright sunucusu entegrasyonunu yapılandırır

  Yapılandırma dosyası otomatik olarak şu konumda oluşturulacak/güncellenecektir:
  - Windows: `%APPDATA%\Claude\claude_desktop_config.json`
  - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`

  mcp-get kullanarak:
  ```bash
  npx @michaellatman/mcp-get@latest install @automatalabs/mcp-server-playwright
  ```

  ## Yapılandırma

  Kurulum işlemi, Claude config dosyanıza otomatik olarak aşağıdaki yapılandırmayı ekleyecektir:

  ```json
  {
    "mcpServers": {
      "playwright": {
        "command": "npx",
        "args": ["-y", "@automatalabs/mcp-server-playwright"]
      }
    }
  }
  ```
  ## Cursor ile Kullanım

  MCP Server Playwright'ı [Cursor](https://www.cursor.so/) ile de kullanabilirsiniz; bu, yapay zeka destekli bir kod editörüdür. Cursor'da MCP aracılığıyla tarayıcı otomasyonunu etkinleştirmek için:

  1. **Playwright tarayıcılarını yükleyin** (henüz yüklenmediyse):
      ```bash
      npx playwright install
      ```

  2. **Cursor için MCP Server Playwright'ı Smithery kullanarak yükleyin**:
      ```bash
      npx -y @smithery/cli install @automatalabs/mcp-server-playwright --client cursor
      ```

  3. **Yapılandırma dosyası kurulumu**:  
     Claude kullanmıyorsanız, yapılandırma dosyası (`claude_desktop_config.json`) otomatik olarak oluşturulmayabilir.  
     - Windows'ta, `%APPDATA%` içinde `Claude` adında bir klasör oluşturun (genellikle `C:\Users\<YourName>\AppData\Roaming\Claude`).
     - Bu klasörün içinde, aşağıdaki içerikle `claude_desktop_config.json` adında bir dosya oluşturun:
     
      ```json
      {
        "serverPort": 3456
      }
      ```

  4. **[Kurulum](#kurulum) bölümündeki kalan adımları izleyin** ve kurulumu tamamlayın.

  Artık MCP Server Playwright tarafından sağlanan tüm tarayıcı otomasyon araçlarını doğrudan Cursor'un AI özellikleri (web gezintisi, ekran görüntüsü alma ve JavaScript yürütme gibi) aracılığıyla kullanabilirsiniz.

  > **Not:** Node.js'nin yüklü olduğundan ve `npx`'in sistem PATH'inizde kullanılabilir olduğundan emin olun.

  ## Bileşenler

  ### Araçlar

  #### `browser_navigate`
  Tarayıcıda herhangi bir URL'ye gidin
  ```javascript
  {
    "url": "https://stealthbrowser.cloud"
  }
  ```

  #### `browser_screenshot`
  Tüm sayfanın veya belirli öğelerin ekran görüntülerini alın
  ```javascript
  {
    "name": "screenshot-name",     // required
    "selector": "#element-id",     // optional
    "fullPage": true              // optional, default: false
  }
  ```

  #### `browser_click`
  CSS seçicisini kullanarak sayfadaki öğeleri tıklayın
  ```javascript
  {
    "selector": "#button-id"
  }
  ```

  #### `browser_click_text`
  Metin içeriğine göre sayfadaki öğeleri tıklayın
  ```javascript
  {
    "text": "Click me"
  }
  ```

  #### `browser_hover`
  CSS seçicisini kullanarak sayfadaki öğelerin üzerinde gezinin
  ```javascript
  {
    "selector": "#menu-item"
  }
  ```

  #### `browser_hover_text`
  Metin içeriğine göre sayfadaki öğelerin üzerinde gezinin
  ```javascript
  {
    "text": "Hover me"
  }
  ```

  #### `browser_fill`
  Giriş alanlarını doldurun
  ```javascript
  {
    "selector": "#input-field",
    "value": "Hello World"
  }
  ```

  #### `browser_select`
  CSS seçicisini kullanarak SELECT öğesinde seçenek seçin
  ```javascript
  {
    "selector": "#dropdown",
    "value": "option-value"
  }
  ```

  #### `browser_select_text`
  Metin içeriğine göre SELECT öğesinde seçenek seçin
  ```javascript
  {
    "text": "Choose me",
    "value": "option-value"
  }
  ```

  #### `browser_evaluate`
  Tarayıcı konsolunda JavaScript yürütün
  ```javascript
  {
    "script": "document.title"
  }
  ```

  ### Kaynaklar

  1. **Console Logları** (`console://logs`)
     - Tarayıcı konsol çıktısına metin formatında erişin
     - Tarayıcıdan gelen tüm konsol mesajlarını içerir

  2. **Ekran Görüntüleri** (`screenshot://<n>`)
     - Alınan ekran görüntülerinin PNG görüntülerine erişin
     - Yakalama sırasında belirtilen adla referans verilir

  ## Lisans

  Bu proje MIT Lisansı altında lisanslanmıştır - ayrıntılar için [LICENSE](https://github.com/Automata-Labs-team/MCP-Server-Playwright/blob/main/LICENSE) dosyasına bakın.
---

<h1 align="center">MCP Server Playwright</h1>
<p align="center">
  <a href="https://www.automatalabs.io"></a>
</p>
<p align="center">
  <b>A Model Context Protocol server that provides browser automation capabilities using Playwright</b></br>
  <sub>Enable LLMs to interact with web pages, take screenshots, and execute JavaScript in a real browser environment</sub>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@automatalabs/mcp-server-playwright"></a>
  <a href="https://npmcharts.com/compare/@automatalabs/mcp-server-playwright?minimal=true"></a>
  <a href="https://github.com/Automata-Labs-team/MCP-Server-Playwright/blob/main/LICENSE"></a>
  <a href="https://smithery.ai/server/@automatalabs/mcp-server-playwright"></a>
</p>

<a href="https://glama.ai/mcp/servers/9q4zck8po5"></a>

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Components](#components)
  - [Tools](#tools)
  - [Resources](#resources)
- [License](#license)

## Features

- 🌐 Full browser automation capabilities
- 📸 Screenshot capture of entire pages or specific elements
- 🖱️ Comprehensive web interaction (navigation, clicking, form filling)
- 📊 Console log monitoring
- 🔧 JavaScript execution in browser context

## Installation

### Installing via Smithery

To install MCP Server Playwright for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@automatalabs/mcp-server-playwright):

```bash
npx -y @smithery/cli install @automatalabs/mcp-server-playwright --client claude
```

You can install the package using either npx or mcp-get:

Using npx:
```bash
npx @automatalabs/mcp-server-playwright install
```
This command will:
1. Check your operating system compatibility (Windows/macOS)
2. Create or update the Claude configuration file
3. Configure the Playwright server integration

The configuration file will be automatically created/updated at:
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`
- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`

Using mcp-get:
```bash
npx @michaellatman/mcp-get@latest install @automatalabs/mcp-server-playwright
```

## Configuration

The installation process will automatically add the following configuration to your Claude config file:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@automatalabs/mcp-server-playwright"]
    }
  }
}
```
## Using with Cursor

You can also use MCP Server Playwright with [Cursor](https://www.cursor.so/), an AI-powered code editor. To enable browser automation in Cursor via MCP:

1. **Install Playwright browsers** (if not already):
    ```bash
    npx playwright install
    ```

2. **Install MCP Server Playwright for Cursor** using Smithery:
    ```bash
    npx -y @smithery/cli install @automatalabs/mcp-server-playwright --client cursor
    ```

3. **Configuration file setup**:  
   If you do not use Claude, the configuration file (`claude_desktop_config.json`) may not be created automatically.  
   - On Windows, create a folder named `Claude` in `%APPDATA%` (usually `C:\Users\<YourName>\AppData\Roaming\Claude`).
   - Inside that folder, create a file named `claude_desktop_config.json` with the following content:
   
    ```json
    {
      "serverPort": 3456
    }
    ```

4. **Follow the remaining steps in the [Installation](#installation) section above** to complete the setup.

Now, you can use all the browser automation tools provided by MCP Server Playwright directly from Cursor’s AI features, such as web navigation, screenshot capture, and JavaScript execution.

> **Note:** Make sure you have Node.js installed and `npx` available in your system PATH.

## Components

### Tools

#### `browser_navigate`
Navigate to any URL in the browser
```javascript
{
  "url": "https://stealthbrowser.cloud"
}
```

#### `browser_screenshot`
Capture screenshots of the entire page or specific elements
```javascript
{
  "name": "screenshot-name",     // required
  "selector": "#element-id",     // optional
  "fullPage": true              // optional, default: false
}
```

#### `browser_click`
Click elements on the page using CSS selector
```javascript
{
  "selector": "#button-id"
}
```

#### `browser_click_text`
Click elements on the page by their text content
```javascript
{
  "text": "Click me"
}
```

#### `browser_hover`
Hover over elements on the page using CSS selector
```javascript
{
  "selector": "#menu-item"
}
```

#### `browser_hover_text`
Hover over elements on the page by their text content
```javascript
{
  "text": "Hover me"
}
```

#### `browser_fill`
Fill out input fields
```javascript
{
  "selector": "#input-field",
  "value": "Hello World"
}
```

#### `browser_select`
Select an option in a SELECT element using CSS selector
```javascript
{
  "selector": "#dropdown",
  "value": "option-value"
}
```

#### `browser_select_text`
Select an option in a SELECT element by its text content
```javascript
{
  "text": "Choose me",
  "value": "option-value"
}
```

#### `browser_evaluate`
Execute JavaScript in the browser console
```javascript
{
  "script": "document.title"
}
```

### Resources

1. **Console Logs** (`console://logs`)
   - Access browser console output in text format
   - Includes all console messages from the browser

2. **Screenshots** (`screenshot://<n>`)
   - Access PNG images of captured screenshots
   - Referenced by the name specified during capture

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Automata-Labs-team/MCP-Server-Playwright/blob/main/LICENSE) file for details.
