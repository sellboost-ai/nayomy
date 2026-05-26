---
name: "jae-jae/fetcher-mcp"
description: "MCP server for fetching web page content using Playwright headless browser, supporting Javascript rendering and intelligent content extraction, and outputting Markdown or HTML format."
category: "Search & Data Extraction"
repo: "jae-jae/fetcher-mcp"
stars: 1053
url: "https://github.com/jae-jae/fetcher-mcp"
body_length: 9300
license: "MIT"
language: "TypeScript"
homepage: "https://1team.top"
body_tr: |-
  <div align="center">
    
  </div>

  [中文](https://www.readme-i18n.com/jae-jae/fetcher-mcp?lang=zh) |
  [Deutsch](https://www.readme-i18n.com/jae-jae/fetcher-mcp?lang=de) |
  [Español](https://www.readme-i18n.com/jae-jae/fetcher-mcp?lang=es) |
  [français](https://www.readme-i18n.com/jae-jae/fetcher-mcp?lang=fr) |
  [日本語](https://www.readme-i18n.com/jae-jae/fetcher-mcp?lang=ja) |
  [한국어](https://www.readme-i18n.com/jae-jae/fetcher-mcp?lang=ko) |
  [Português](https://www.readme-i18n.com/jae-jae/fetcher-mcp?lang=pt) |
  [Русский](https://www.readme-i18n.com/jae-jae/fetcher-mcp?lang=ru)

  # Fetcher MCP

  Playwright headless browser kullanarak web sayfası içeriğini getirmek için MCP sunucusu.

  > 🌟 **Tavsiye**: [OllaMan](https://ollaman.com/) - Powerful Ollama AI Model Manager.

  ## Avantajlar

  - **JavaScript Desteği**: Geleneksel web kazıyıcılarından farklı olarak, Fetcher MCP JavaScript'i çalıştırmak için Playwright kullanarak dinamik web içeriğini ve modern web uygulamalarını işleyebilir.

  - **Akıllı İçerik Çıkarma**: Yerleşik Readability algoritması web sayfalarından ana içeriği otomatik olarak çıkartarak reklamları, navigasyonu ve diğer gereksiz öğeleri kaldırır.

  - **Esnek Çıktı Formatı**: Hem HTML hem de Markdown çıktı formatlarını destekleyerek çeşitli uygulamalara entegrasyon kolaylaştırır.

  - **Paralel İşleme**: `fetch_urls` aracı birden fazla URL'nin eşzamanlı olarak getirilmesini sağlayarak toplu işlemler için verimliliği önemli ölçüde artırır.

  - **Kaynak Optimizasyonu**: Gereksiz kaynakları (görseller, stil sayfaları, yazı tipleri, medya) otomatik olarak engellemerek bant genişliği kullanımını azaltır ve performansı iyileştirir.

  - **Güçlü Hata Yönetimi**: Kapsamlı hata işleme ve günlüğe kaydetme, sorunlu web sayfalarla uğraşırken bile güvenilir işlemi sağlar.

  - **Yapılandırılabilir Parametreler**: Zaman aşımları, içerik çıkarma ve çıktı biçimlendirmesi üzerinde hassas kontrol sağlayarak farklı kullanım durumlarına uyum sağlar.

  ## Hızlı Başlangıç

  npx ile doğrudan çalıştırın:

  ```bash
  npx -y fetcher-mcp
  ```

  İlk kurulum - gerekli tarayıcıyı yüklemek için terminalinizde aşağıdaki komutu çalıştırın:

  ```bash
  npx playwright install chromium
  ```

  ### HTTP ve SSE Transport

  Hem Streamable HTTP endpoint hem de SSE endpoint hizmetlerini aynı anda başlatmak için `--transport=http` parametresini kullanın:

  ```bash
  npx -y fetcher-mcp --log --transport=http --host=0.0.0.0 --port=3000
  ```

  Başladıktan sonra sunucu aşağıdaki endpoint'leri sağlar:

  - `/mcp` - Streamable HTTP endpoint (modern MCP protokolü)
  - `/sse` - SSE endpoint (eski MCP protokolü)

  İstemciler gereksinimlerine göre bağlanacak yöntemi seçebilir.

  ### Debug Modu

  Hata ayıklamak için tarayıcı penceresini göstermek üzere `--debug` seçeneği ile çalıştırın:

  ```bash
  npx -y fetcher-mcp --debug
  ```

  ## MCP Yapılandırması

  Bu MCP sunucusunu Claude Desktop'ta yapılandırın:

  MacOS'ta: `~/Library/Application Support/Claude/claude_desktop_config.json`

  Windows'ta: `%APPDATA%/Claude/claude_desktop_config.json`

  ```json
  {
    "mcpServers": {
      "fetcher": {
        "command": "npx",
        "args": ["-y", "fetcher-mcp"]
      }
    }
  }
  ```

  ## Docker Dağıtımı

  ### Docker ile Çalıştırma

  ```bash
  docker run -p 3000:3000 ghcr.io/jae-jae/fetcher-mcp:latest
  ```

  ### Docker Compose ile Dağıtma

  `docker-compose.yml` dosyası oluşturun:

  ```yaml
  version: "3.8"

  services:
    fetcher-mcp:
      image: ghcr.io/jae-jae/fetcher-mcp:latest
      container_name: fetcher-mcp
      restart: unless-stopped
      ports:
        - "3000:3000"
      environment:
        - NODE_ENV=production
      # Linux ana bilgisayarlarda host ağ modunu kullanmak tarayıcı erişim verimliliğini artırabilir
      # network_mode: "host"
      volumes:
        # Playwright için belirli sistem yollarını paylaşmak gerekebilir
        - /tmp:/tmp
      # Sağlık kontrolü
      healthcheck:
        test: ["CMD", "wget", "--spider", "-q", "http://localhost:3000"]
        interval: 30s
        timeout: 10s
        retries: 3
  ```

  Ardından çalıştırın:

  ```bash
  docker-compose up -d
  ```

  ## Özellikler

  - `fetch_url` - Belirtilen URL'den web sayfası içeriğini alın

    - JavaScript'i ayrıştırmak için Playwright headless tarayıcısını kullanır
    - Ana içeriğin akıllı çıkarılmasını ve Markdown'a dönüştürülmesini destekler
    - Aşağıdaki parametreleri destekler:
      - `url`: Getirilenecek web sayfasının URL'si (gerekli parametre)
      - `timeout`: Sayfa yükleme zaman aşımı (milisaniye cinsinden), varsayılan 30000 (30 saniye)
      - `waitUntil`: Navigasyonun ne zaman tamamlandığını belirlemeye yarayan seçenek, seçenekler: 'load', 'domcontentloaded', 'networkidle', 'commit', varsayılan 'load'
      - `extractContent`: Ana içeriği akıllı bir şekilde çıkarıp çıkarılmayacağı, varsayılan true
      - `maxLength`: Döndürülen içeriğin maksimum uzunluğu (karakter cinsinden), varsayılan sınır yok
      - `returnHtml`: Markdown yerine HTML içeriğinin döndürülüp döndürülmeyeceği, varsayılan false
      - `waitForNavigation`: İlk sayfa yüklemesinden sonra ek navigasyonun beklenmesi gerekip gerekmediği (anti-bot doğrulaması olan siteler için yararlı), varsayılan false
      - `navigationTimeout`: Ek navigasyon bekleme maksimum süresi (milisaniye cinsinden), varsayılan 10000 (10 saniye)
      - `disableMedia`: Medya kaynaklarının (görseller, stil sayfaları, yazı tipleri, medya) devre dışı bırakılıp bırakılmayacağı, varsayılan true
      - `debug`: Hata ayıklama modunun etkinleştirilip etkinleştirilmeyeceği (tarayıcı penceresini gösterme), belirtilirse --debug komut satırı bayrağını geçersiz kılar

  - `fetch_urls` - Birden fazla URL'den toplu olarak web sayfası içeriğini paralel olarak alın
    - Geliştirilmiş performans için çok sekme paralel getirme kullanır
    - Web sayfaları arasında net ayrım ile birleştirilmiş sonuçları döndürür
    - Aşağıdaki parametreleri destekler:
      - `urls`: Getirilecek URL'lerin dizisi (gerekli parametre)
      - Diğer parametreler `fetch_url` ile aynıdır

  - `browser_install` - Playwright Chromium tarayıcı binary'sini otomatik olarak yükleyin

    - Kullanılamadığında gerekli Chromium tarayıcı binary'sini yükler
    - Tarayıcı kurulum hatası oluştuğunda otomatik olarak önerilir
    - Aşağıdaki parametreleri destekler:
      - `withDeps`: Chromium tarayıcısı için gerekli sistem bağımlılıklarını yükleyin, varsayılan false
      - `force`: Chromium zaten yüklü olsa bile kurulumu zorlayın, varsayılan false

  ## İpuçları

  ### Özel Web Sitesi Senaryolarıyla Başa Çıkma

  #### Anti-Crawler Mekanizmalarıyla Başa Çıkma

  - **Komple Yükleme Bekleme**: CAPTCHA, yönlendirmeler veya diğer doğrulama mekanizmaları kullanan web siteleri için istemde şunları ekleyin:

    ```
    Please wait for the page to fully load
    ```

    Bu `waitForNavigation: true` parametresini kullanacaktır.

  - **Zaman Aşımını Artırma**: Yavaş yüklenen web siteleri için:
    ```
    Please set the page loading timeout to 60 seconds
    ```
    Bu `timeout` ve `navigationTimeout` parametrelerini buna göre ayarlar.

  #### İçerik Alma Ayarlamaları

  - **Orijinal HTML Yapısını Koruma**: İçerik çıkarma başarısız olabileceği durumlarda:

    ```
    Please preserve the original HTML content
    ```

    `extractContent: false` ve `returnHtml: true` ayarını yapar.

  - **Komple Sayfa İçeriğini Getirme**: Çıkartılan içerik çok sınırlı olduğunda:

    ```
    Please fetch the complete webpage content instead of just the main content
    ```

    `extractContent: false` ayarını yapar.

  - **İçeriği HTML Olarak Döndürme**: Varsayılan Markdown yerine HTML formatı gerektiğinde:
    ```
    Please return the content in HTML format
    ```
    `returnHtml: true` ayarını yapar.

  ### Hata Ayıklama ve Kimlik Doğrulama

  #### Hata Ayıklama Modunu Etkinleştirme

  - **Dinamik Hata Ayıklama Aktivasyonu**: Belirli bir getirme işlemi sırasında tarayıcı penceresini göstermek için:
    ```
    Please enable debug mode for this fetch operation
    ```
    Sunucusuz `--debug` bayrağı ile başlatılmış olsa bile `debug: true` ayarını yapar.

  #### Kimlik Doğrulama İçin Özel Çerez Kullanma

  - **Manuel Oturum Açma**: Kendi kimlik bilgilerinizi kullanarak oturum açmak için:

    ```
    Please run in debug mode so I can manually log in to the website
    ```

    `debug: true` ayarını yapar veya `--debug` bayrağını kullanır, manual oturum açma için tarayıcı penceresini açık tutar.

  - **Hata Ayıklama Tarayıcısı ile Etkileşim**: Hata ayıklama modu etkinleştirildiğinde:

    1. Tarayıcı penceresi açık kalır
    2. Web sitesine kimlik bilgilerinizi kullanarak manuel olarak oturum açabilirsiniz
    3. Oturum açma tamamlandıktan sonra, içerik kimlik doğrulamalı oturumunuzla getirilecektir

  - **Belirli İstekler İçin Hata Ayıklamayı Etkinleştirme**: Sunucu zaten çalışıyor olsa bile, belirli bir istek için hata ayıklama modunu etkinleştirebilirsiniz:
    ```
    Please enable debug mode for this authentication step
    ```
    Yalnızca bu istek için `debug: true` ayarını yapar, manual oturum açma için tarayıcı penceresini açar.

  ## Geliştirme

  ### Bağımlılıkları Yükleyin

  ```bash
  npm install
  ```

  ### Playwright Tarayıcısını Yükleyin

  Playwright için gerekli tarayıcıları yükleyin:

  ```bash
  npm run install-browser
  ```

  ### Sunucuyu Oluşturun

  ```bash
  npm run build
  ```

  ## Hata Ayıklama

  Hata ayıklama için MCP Inspector kullanın:

  ```bash
  npm run inspector
  ```

  Hata ayıklama için görünür tarayıcı modunu da etkinleştirebilirsiniz:

  ```bash
  node build/index.js --debug
  ```

  ## İlgili Projeler

  - [g-search-mcp](https://github.com/jae-jae/g-search-mcp): Aynı anda birden fazla anahtar kelimeyle paralel arama yapılmasını sağlayan güçlü Google arama MCP sunucusu. Toplu arama işlemleri ve veri toplama için mükemmeldir.

  ## Lisans

  [MIT Lisansı](https://choosealicense.com/licenses/mit/) altında lisanslanmıştır.

  [![Powered by DartNode](https://dartnode.com/branding/DN-Open-Source-sm.png)](https://dartnode.com "Powered by DartNode - Free VPS for Open Source")
---

<div align="center">
  
</div>

[中文](https://www.readme-i18n.com/jae-jae/fetcher-mcp?lang=zh) |
[Deutsch](https://www.readme-i18n.com/jae-jae/fetcher-mcp?lang=de) |
[Español](https://www.readme-i18n.com/jae-jae/fetcher-mcp?lang=es) |
[français](https://www.readme-i18n.com/jae-jae/fetcher-mcp?lang=fr) |
[日本語](https://www.readme-i18n.com/jae-jae/fetcher-mcp?lang=ja) |
[한국어](https://www.readme-i18n.com/jae-jae/fetcher-mcp?lang=ko) |
[Português](https://www.readme-i18n.com/jae-jae/fetcher-mcp?lang=pt) |
[Русский](https://www.readme-i18n.com/jae-jae/fetcher-mcp?lang=ru)

# Fetcher MCP

MCP server for fetch web page content using Playwright headless browser.

> 🌟 **Recommended**: [OllaMan](https://ollaman.com/) - Powerful Ollama AI Model Manager.

## Advantages

- **JavaScript Support**: Unlike traditional web scrapers, Fetcher MCP uses Playwright to execute JavaScript, making it capable of handling dynamic web content and modern web applications.

- **Intelligent Content Extraction**: Built-in Readability algorithm automatically extracts the main content from web pages, removing ads, navigation, and other non-essential elements.

- **Flexible Output Format**: Supports both HTML and Markdown output formats, making it easy to integrate with various downstream applications.

- **Parallel Processing**: The `fetch_urls` tool enables concurrent fetching of multiple URLs, significantly improving efficiency for batch operations.

- **Resource Optimization**: Automatically blocks unnecessary resources (images, stylesheets, fonts, media) to reduce bandwidth usage and improve performance.

- **Robust Error Handling**: Comprehensive error handling and logging ensure reliable operation even when dealing with problematic web pages.

- **Configurable Parameters**: Fine-grained control over timeouts, content extraction, and output formatting to suit different use cases.

## Quick Start

Run directly with npx:

```bash
npx -y fetcher-mcp
```

First time setup - install the required browser by running the following command in your terminal:

```bash
npx playwright install chromium
```

### HTTP and SSE Transport

Use the `--transport=http` parameter to start both Streamable HTTP endpoint and SSE endpoint services simultaneously:

```bash
npx -y fetcher-mcp --log --transport=http --host=0.0.0.0 --port=3000
```

After startup, the server provides the following endpoints:

- `/mcp` - Streamable HTTP endpoint (modern MCP protocol)
- `/sse` - SSE endpoint (legacy MCP protocol)

Clients can choose which method to connect based on their needs.

### Debug Mode

Run with the `--debug` option to show the browser window for debugging:

```bash
npx -y fetcher-mcp --debug
```

## Configuration MCP

Configure this MCP server in Claude Desktop:

On MacOS: `~/Library/Application Support/Claude/claude_desktop_config.json`

On Windows: `%APPDATA%/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "fetcher": {
      "command": "npx",
      "args": ["-y", "fetcher-mcp"]
    }
  }
}
```

## Docker Deployment

### Running with Docker

```bash
docker run -p 3000:3000 ghcr.io/jae-jae/fetcher-mcp:latest
```

### Deploying with Docker Compose

Create a `docker-compose.yml` file:

```yaml
version: "3.8"

services:
  fetcher-mcp:
    image: ghcr.io/jae-jae/fetcher-mcp:latest
    container_name: fetcher-mcp
    restart: unless-stopped
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    # Using host network mode on Linux hosts can improve browser access efficiency
    # network_mode: "host"
    volumes:
      # For Playwright, may need to share certain system paths
      - /tmp:/tmp
    # Health check
    healthcheck:
      test: ["CMD", "wget", "--spider", "-q", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
```

Then run:

```bash
docker-compose up -d
```

## Features

- `fetch_url` - Retrieve web page content from a specified URL

  - Uses Playwright headless browser to parse JavaScript
  - Supports intelligent extraction of main content and conversion to Markdown
  - Supports the following parameters:
    - `url`: The URL of the web page to fetch (required parameter)
    - `timeout`: Page loading timeout in milliseconds, default is 30000 (30 seconds)
    - `waitUntil`: Specifies when navigation is considered complete, options: 'load', 'domcontentloaded', 'networkidle', 'commit', default is 'load'
    - `extractContent`: Whether to intelligently extract the main content, default is true
    - `maxLength`: Maximum length of returned content (in characters), default is no limit
    - `returnHtml`: Whether to return HTML content instead of Markdown, default is false
    - `waitForNavigation`: Whether to wait for additional navigation after initial page load (useful for sites with anti-bot verification), default is false
    - `navigationTimeout`: Maximum time to wait for additional navigation in milliseconds, default is 10000 (10 seconds)
    - `disableMedia`: Whether to disable media resources (images, stylesheets, fonts, media), default is true
    - `debug`: Whether to enable debug mode (showing browser window), overrides the --debug command line flag if specified

- `fetch_urls` - Batch retrieve web page content from multiple URLs in parallel
  - Uses multi-tab parallel fetching for improved performance
  - Returns combined results with clear separation between webpages
  - Supports the following parameters:
    - `urls`: Array of URLs to fetch (required parameter)
    - Other parameters are the same as `fetch_url`

- `browser_install` - Install Playwright Chromium browser binary automatically

  - Installs required Chromium browser binary when not available
  - Automatically suggested when browser installation errors occur
  - Supports the following parameters:
    - `withDeps`: Install system dependencies required by Chromium browser, default is false
    - `force`: Force installation even if Chromium is already installed, default is false

## Tips

### Handling Special Website Scenarios

#### Dealing with Anti-Crawler Mechanisms

- **Wait for Complete Loading**: For websites using CAPTCHA, redirects, or other verification mechanisms, include in your prompt:

  ```
  Please wait for the page to fully load
  ```

  This will use the `waitForNavigation: true` parameter.

- **Increase Timeout Duration**: For websites that load slowly:
  ```
  Please set the page loading timeout to 60 seconds
  ```
  This adjusts both `timeout` and `navigationTimeout` parameters accordingly.

#### Content Retrieval Adjustments

- **Preserve Original HTML Structure**: When content extraction might fail:

  ```
  Please preserve the original HTML content
  ```

  Sets `extractContent: false` and `returnHtml: true`.

- **Fetch Complete Page Content**: When extracted content is too limited:

  ```
  Please fetch the complete webpage content instead of just the main content
  ```

  Sets `extractContent: false`.

- **Return Content as HTML**: When HTML format is needed instead of default Markdown:
  ```
  Please return the content in HTML format
  ```
  Sets `returnHtml: true`.

### Debugging and Authentication

#### Enabling Debug Mode

- **Dynamic Debug Activation**: To display the browser window during a specific fetch operation:
  ```
  Please enable debug mode for this fetch operation
  ```
  This sets `debug: true` even if the server was started without the `--debug` flag.

#### Using Custom Cookies for Authentication

- **Manual Login**: To login using your own credentials:

  ```
  Please run in debug mode so I can manually log in to the website
  ```

  Sets `debug: true` or uses the `--debug` flag, keeping the browser window open for manual login.

- **Interacting with Debug Browser**: When debug mode is enabled:

  1. The browser window remains open
  2. You can manually log into the website using your credentials
  3. After login is complete, content will be fetched with your authenticated session

- **Enable Debug for Specific Requests**: Even if the server is already running, you can enable debug mode for a specific request:
  ```
  Please enable debug mode for this authentication step
  ```
  Sets `debug: true` for this specific request only, opening the browser window for manual login.

## Development

### Install Dependencies

```bash
npm install
```

### Install Playwright Browser

Install the browsers needed for Playwright:

```bash
npm run install-browser
```

### Build the Server

```bash
npm run build
```

## Debugging

Use MCP Inspector for debugging:

```bash
npm run inspector
```

You can also enable visible browser mode for debugging:

```bash
node build/index.js --debug
```

## Related Projects

- [g-search-mcp](https://github.com/jae-jae/g-search-mcp): A powerful MCP server for Google search that enables parallel searching with multiple keywords simultaneously. Perfect for batch search operations and data collection.

## License

Licensed under the [MIT License](https://choosealicense.com/licenses/mit/)

[![Powered by DartNode](https://dartnode.com/branding/DN-Open-Source-sm.png)](https://dartnode.com "Powered by DartNode - Free VPS for Open Source")
