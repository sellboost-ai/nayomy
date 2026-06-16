---
name: "jae-jae/g-search-mcp"
description: "A powerful MCP server for Google search that enables parallel searching with multiple keywords simultaneously."
category: "Search & Data Extraction"
repo: "jae-jae/g-search-mcp"
stars: 266
url: "https://github.com/jae-jae/g-search-mcp"
body_length: 5513
license: "MIT"
language: "TypeScript"
homepage: "https://1team.top"
body_tr: |-
  <div align="center">
    
  </div>

  # G-Search MCP

  Google araması için güçlü bir MCP sunucusu, birden fazla anahtar kelimeyle eş zamanlı araştırma yapılmasını sağlar.

  > Bu proje [google-search](https://github.com/web-agent-master/google-search) projesinden modifiye edilmiştir.

  > 🌟 **Önerilen**: [OllaMan](https://ollaman.com/) - Güçlü Ollama AI Model Yöneticisi.

  ## Avantajlar

  - **Paralel Arama**: Google'da birden fazla anahtar kelimeyle eş zamanlı arama yapılmasını destekleyerek arama verimliliğini artırır
  - **Tarayıcı Optimizasyonu**: Verimli paralel arama için tek bir tarayıcı örneğinde birden fazla sekme açar
  - **Otomatik Doğrulama İşleme**: CAPTCHA'yı akıllıca algılar ve gerektiğinde kullanıcı doğrulaması için görünür tarayıcı modunu etkinleştirir
  - **Kullanıcı Davranışı Simülasyonu**: Gerçek kullanıcı tarama desenlerini simüle ederek arama motorları tarafından algılanma olasılığını azaltır
  - **Yapılandırılmış Veriler**: Arama sonuçlarını kolay işlenme ve analiz için JSON formatında döndürür
  - **Yapılandırılabilir Parametreler**: Arama sonucu sınırları, zaman aşımı ayarları, dil ayarları vb. gibi çeşitli parametre konfigürasyonlarını destekler

  ## Hızlı Başlangıç

  npx ile doğrudan çalıştırın:

  ```bash
  npx -y g-search-mcp
  ```

  İlk kez kurulum - terminalde aşağıdaki komutu çalıştırarak gerekli tarayıcıyı yükleyin:

  ```bash
  npx playwright install chromium
  ```

  ### Debug Modu

  Debug modunda çalıştırmak için `--debug` seçeneğini kullanın (tarayıcı penceresini gösterir):

  ```bash
  npx -y g-search-mcp --debug
  ```

  ## MCP Yapılandırması

  Bu MCP sunucusunu Claude Desktop'ta yapılandırın:

  MacOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
  Windows: `%APPDATA%/Claude/claude_desktop_config.json`

  ```json
  {
    "mcpServers": {
      "g-search": {
        "command": "npx",
        "args": ["-y", "g-search-mcp"]
      }
    }
  }
  ```

  ## Özellikler

  - `search` - Birden fazla anahtar kelimeyle Google araması yapın ve sonuçları döndürün
    - Aramaları gerçekleştirmek için Playwright tarayıcısını kullanır
    - Aşağıdaki parametreleri destekler:
      - `queries`: Yürütülecek arama sorgularının dizisi (zorunlu parametre)
      - `limit`: Sorgu başına döndürülecek maksimum sonuç sayısı, varsayılan 10
      - `timeout`: Sayfa yükleme zaman aşımı milisaniye cinsinden, varsayılan 60000 (60 saniye)
      - `noSaveState`: Tarayıcı durumunu kaydetmekten kaçınılıp kaçınılmayacağı, varsayılan false
      - `locale`: Arama sonuçları için dil ayarı, varsayılan en-US
      - `debug`: Debug modunun etkinleştirilip etkinleştirilmeyeceği (tarayıcı penceresini gösterir), komut satırında --debug bayrağını geçersiz kılar

  **Örnek kullanım**:

  ```
  Google'da "machine learning" ve "artificial intelligence" aramak için search aracını kullanın
  ```

  **Örnek yanıt**:

  ```json
  {
    "searches": [
      {
        "query": "machine learning",
        "results": [
          {
            "title": "What is Machine Learning? | IBM",
            "link": "https://www.ibm.com/topics/machine-learning",
            "snippet": "Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy."
          },
          ...
        ]
      },
      {
        "query": "artificial intelligence",
        "results": [
          {
            "title": "What is Artificial Intelligence (AI)? | IBM",
            "link": "https://www.ibm.com/topics/artificial-intelligence",
            "snippet": "Artificial intelligence leverages computers and machines to mimic the problem-solving and decision-making capabilities of the human mind."
          },
          ...
        ]
      }
    ]
  }
  ```

  ## Kullanım İpuçları

  ### Özel Website Senaryolarını İşleme

  #### Arama Parametrelerini Ayarlama

  - **Arama Sonuç Miktarı**: Daha fazla arama sonucu için:

    ```
    Lütfen her anahtar kelime için ilk 20 arama sonucunu döndürün
    ```

    Bu, `limit: 20` parametresini ayarlayacaktır.

  - **Zaman Aşımını Artırma**: Yavaş yükleme durumlarında:
    ```
    Lütfen sayfa yükleme zaman aşımını 120 saniyeye ayarlayın
    ```
    Bu, `timeout` parametresini 120000 milisaniyeye ayarlayacaktır.

  #### Dil Ayarları Ayarlanması

  - **Arama Bölgesini Değiştirme**: Farklı bir dil ayarı belirtin:
    ```
    Lütfen arama için Çince dilini (zh-CN) kullanın
    ```
    Bu, `locale: "zh-CN"` parametresini ayarlayacaktır.

  ### Hata Ayıklama ve Sorun Giderme

  #### Debug Modunu Etkinleştirme

  - **Dinamik Debug Aktivasyonu**: Belirli bir arama işlemi sırasında tarayıcı penceresini göstermek için:
    ```
    Lütfen bu arama işlemi için debug modunu etkinleştirin
    ```
    Bu, sunucu `--debug` bayrağı olmadan başlatılmış olsa bile `debug: true` ayarını yapar.

  ## Kurulum

  ### Ön Koşullar

  - Node.js 18 veya daha yüksek
  - NPM veya Yarn

  ### Kaynaktan Yükle

  1. Depoyu klonlayın:

  ```bash
  git clone https://github.com/jae-jae/g-search-mcp.git
  cd g-search-mcp
  ```

  2. Bağımlılıkları yükleyin:

  ```bash
  npm install
  ```

  3. Playwright tarayıcısını yükleyin:

  ```bash
  npm run install-browser
  ```

  4. Sunucuyu derleyin:

  ```bash
  npm run build
  ```

  ## Geliştirme

  ### Otomatik Yeniden Derleme (Geliştirme Modu)

  ```bash
  npm run watch
  ```

  ### Hata Ayıklama için MCP Inspector Kullanma

  ```bash
  npm run inspector
  ```

  ## İlişkili Projeler

  - [fetcher-mcp](https://github.com/jae-jae/fetcher-mcp): Playwright headless tarayıcısını kullanarak web sayfası içeriği almak için güçlü bir MCP sunucusu. Akıllı içerik çıkarma, paralel işleme, kaynak optimizasyonu ve daha fazlasını sunarak web içeriği scraping için ideal bir araçtır.

  ## Lisans

  [MIT Lisansı](https://choosealicense.com/licenses/mit/) altında lisanslanmıştır
---

<div align="center">
  
</div>

# G-Search MCP

A powerful MCP server for Google search that enables parallel searching with multiple keywords simultaneously.

> This project is modified from [google-search](https://github.com/web-agent-master/google-search).

> 🌟 **Recommended**: [OllaMan](https://ollaman.com/) - Powerful Ollama AI Model Manager.

## Advantages

- **Parallel Searching**: Supports searching with multiple keywords on Google simultaneously, improving search efficiency
- **Browser Optimization**: Opens multiple tabs in a single browser instance for efficient parallel searching
- **Automatic Verification Handling**: Intelligently detects CAPTCHA and enables visible browser mode for user verification when needed
- **User Behavior Simulation**: Simulates real user browsing patterns to reduce the possibility of detection by search engines
- **Structured Data**: Returns structured search results in JSON format for easy processing and analysis
- **Configurable Parameters**: Supports various parameter configurations such as search result limits, timeout settings, locale settings, etc.

## Quick Start

Run directly with npx:

```bash
npx -y g-search-mcp
```

First time setup - install the required browser by running the following command in your terminal:

```bash
npx playwright install chromium
```

### Debug Mode

Use the `--debug` option to run in debug mode (showing browser window):

```bash
npx -y g-search-mcp --debug
```

## Configure MCP

Configure this MCP server in Claude Desktop:

MacOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
Windows: `%APPDATA%/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "g-search": {
      "command": "npx",
      "args": ["-y", "g-search-mcp"]
    }
  }
}
```

## Features

- `search` - Execute Google searches with multiple keywords and return results
  - Uses Playwright browser to perform searches
  - Supports the following parameters:
    - `queries`: Array of search queries to execute (required parameter)
    - `limit`: Maximum number of results to return per query, default is 10
    - `timeout`: Page loading timeout in milliseconds, default is 60000 (60 seconds)
    - `noSaveState`: Whether to avoid saving browser state, default is false
    - `locale`: Locale setting for search results, default is en-US
    - `debug`: Whether to enable debug mode (showing browser window), overrides the --debug flag in command line

**Example usage**:

```
Use the search tool to search for "machine learning" and "artificial intelligence" on Google
```

**Example response**:

```json
{
  "searches": [
    {
      "query": "machine learning",
      "results": [
        {
          "title": "What is Machine Learning? | IBM",
          "link": "https://www.ibm.com/topics/machine-learning",
          "snippet": "Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy."
        },
        ...
      ]
    },
    {
      "query": "artificial intelligence",
      "results": [
        {
          "title": "What is Artificial Intelligence (AI)? | IBM",
          "link": "https://www.ibm.com/topics/artificial-intelligence",
          "snippet": "Artificial intelligence leverages computers and machines to mimic the problem-solving and decision-making capabilities of the human mind."
        },
        ...
      ]
    }
  ]
}
```

## Usage Tips

### Handling Special Website Scenarios

#### Adjusting Search Parameters

- **Search Result Quantity**: For more search results:

  ```
  Please return the top 20 search results for each keyword
  ```

  This will set the `limit: 20` parameter.

- **Increase Timeout Duration**: For slow loading situations:
  ```
  Please set the page loading timeout to 120 seconds
  ```
  This will adjust the `timeout` parameter to 120000 milliseconds.

#### Locale Settings Adjustment

- **Change Search Region**: Specify a different locale setting:
  ```
  Please use Chinese locale (zh-CN) for searching
  ```
  This will set the `locale: "zh-CN"` parameter.

### Debugging and Troubleshooting

#### Enable Debug Mode

- **Dynamic Debug Activation**: To display the browser window during a specific search operation:
  ```
  Please enable debug mode for this search operation
  ```
  This sets `debug: true` even if the server was started without the `--debug` flag.

## Installation

### Prerequisites

- Node.js 18 or higher
- NPM or Yarn

### Install from Source

1. Clone the repository:

```bash
git clone https://github.com/jae-jae/g-search-mcp.git
cd g-search-mcp
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browser:

```bash
npm run install-browser
```

4. Build the server:

```bash
npm run build
```

## Development

### Auto Rebuild (Development Mode)

```bash
npm run watch
```

### Using MCP Inspector for Debugging

```bash
npm run inspector
```

## Related Projects

- [fetcher-mcp](https://github.com/jae-jae/fetcher-mcp): A powerful MCP server for fetching web page content using Playwright headless browser. Features intelligent content extraction, parallel processing, resource optimization, and more, making it an ideal tool for web content scraping.

## License

Licensed under the [MIT License](https://choosealicense.com/licenses/mit/)
