---
name: "serpapi/serpapi-mcp"
description: "SerpApi MCP Server for Google and other search engine results. Provides multi-engine search across Google, Bing, Yahoo, DuckDuckGo, YouTube, eBay, and more with real-time weather data, stock market information, and flexible JSON response modes."
description_tr: "SerpApi MCP Server ile Google ve diğer arama motorlarından sonuç alın. Google, Bing, Yahoo, DuckDuckGo, YouTube, eBay ve daha fazlasında multi-engine arama yapabilir, gerçek zamanlı hava durumu verisi ve borsa bilgilerine erişebilir, esnek JSON response modlarıyla çalışabilirsiniz."
category: "Search & Data Extraction"
repo: "serpapi/serpapi-mcp"
stars: 140
url: "https://github.com/serpapi/serpapi-mcp"
body_length: 5362
license: "MIT"
language: "Python"
homepage: "https://serpapi.com/"
body_tr: |-
  #  SerpApi MCP Server

  [SerpApi](https://serpapi.com) ile entegre olan, kapsamlı arama motoru sonuçları ve veri çıkarımı sağlayan bir Model Context Protocol (MCP) sunucu uygulaması.

  [![Python 3.13+](https://img.shields.io/badge/python-3.13+-blue.svg)](https://www.python.org/downloads/)
  [![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
  [![VS Code'de Yükle](https://img.shields.io/badge/Install%20in-VS%20Code-blue?logo=visualstudiocode)](https://insiders.vscode.dev/redirect/mcp/install?name=serpapi-mcp&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmcp.serpapi.com%2FYOUR_SERPAPI_API_KEY%2Fmcp%22%7D)
  [![Cursor'de Yükle](https://img.shields.io/badge/Install%20in-Cursor-blue?logo=cursor)](cursor://anysphere.cursor-deeplink/mcp/install?name=serpapi-mcp&config=eyJ0eXBlIjoiaHR0cCIsInVybCI6Imh0dHBzOi8vbWNwLnNlcnBhcGkuY29tL1lPVVJfU0VSUEFQSV9BUElfS0VZL21jcCJ9)

  ## Özellikler

  - **Çoklu Arama Motoru**: Google, Bing, Yahoo, DuckDuckGo, YouTube, eBay ve [daha fazlası](https://serpapi.com/search-engine-apis)
  - **Motor Kaynakları**: MCP kaynakları aracılığıyla motor başına parametre şemaları (bkz. Search Tool)
  - **Gerçek Zamanlı Hava Durumu Verileri**: Arama sorguları aracılığıyla konum tabanlı hava durumu ve tahminler
  - **Borsa Verileri**: Arama entegrasyonu aracılığıyla şirket finansmanları ve pazar verileri
  - **Dinamik Sonuç İşleme**: Farklı sonuç türlerini otomatik olarak algılar ve biçimlendirir
  - **Esnek Yanıt Modları**: Tam veya kompakt JSON yanıtları
  - **JSON Yanıtları**: Tam veya kompakt modlar ile yapılandırılmış JSON çıktısı

  ## Hızlı Başlangıç

  SerpApi MCP Server, [mcp.serpapi.com](https://mcp.serpapi.com) adresinde barındırılan bir hizmet olarak mevcuttur. Buna bağlanmak için bir API anahtarı sağlamanız gerekir. API anahtarınızı [SerpApi panonuzdan](https://serpapi.com/dashboard) bulabilirsiniz.

  Claude Desktop'ı barındırılan sunucuyu kullanacak şekilde yapılandırabilirsiniz:

  ```json
  {
    "mcpServers": {
      "serpapi": {
        "type": "http",
        "url": "https://mcp.serpapi.com/YOUR_SERPAPI_API_KEY/mcp"
      }
    }
  }
  ```

  ### Kendi Sunucunuzu Barındırma
  ```bash
  git clone https://github.com/serpapi/serpapi-mcp.git
  cd serpapi-mcp
  uv sync && uv run src/server.py
  ```

  Claude Desktop'ı yapılandırın:
  ```json
  {
    "mcpServers": {
      "serpapi": {
        "type": "http",
        "url": "http://localhost:8000/YOUR_SERPAPI_API_KEY/mcp"
      }
    }
  }
  ```

  API anahtarınızı alın: [serpapi.com/manage-api-key](https://serpapi.com/manage-api-key)

  ## Kimlik Doğrulama

  İki yöntem desteklenmektedir:
  - **Yol tabanlı**: `/YOUR_API_KEY/mcp` (önerilir)
  - **Header tabanlı**: `Authorization: Bearer YOUR_API_KEY`

  **Örnekler:**
  ```bash
  # Yol tabanlı
  curl "https://mcp.serpapi.com/your_key/mcp" -d '...'

  # Header tabanlı  
  curl "https://mcp.serpapi.com/mcp" -H "Authorization: Bearer your_key" -d '...'
  ```

  ## Search Tool

  MCP sunucusunun tüm SerpApi motorlarını ve sonuç türlerini destekleyen bir ana Search Tool'u vardır. Tüm kullanılabilir parametreleri [SerpApi API referansından](https://serpapi.com/search-api) bulabilirsiniz.
  Motor parametre şemaları ayrıca MCP kaynakları olarak sunulur: `serpapi://engines` (index) ve `serpapi://engines/<engine>`.

  Sağlayabileceğiniz parametreler her API motoru için özeldir. Aşağıda bazı örnek parametreler verilmiştir:

  - `params.q` (gerekli): Arama sorgusu
  - `params.engine`: Arama motoru (varsayılan: "google_light") 
  - `params.location`: Coğrafi filtre
  - `mode`: Yanıt modu - "complete" (varsayılan) veya "compact"
  - ...diğer parametreleri [SerpApi API referansından](https://serpapi.com/search-api) görün

  **Örnekler:**

  ```json
  {"name": "search", "arguments": {"params": {"q": "coffee shops", "location": "Austin, TX"}}}
  {"name": "search", "arguments": {"params": {"q": "weather in London"}}}
  {"name": "search", "arguments": {"params": {"q": "AAPL stock"}}}
  {"name": "search", "arguments": {"params": {"q": "news"}, "mode": "compact"}}
  {"name": "search", "arguments": {"params": {"q": "detailed search"}, "mode": "complete"}}
  ```

  **Desteklenen Motorlar:** Google, Bing, Yahoo, DuckDuckGo, YouTube, eBay ve daha fazlası (bkz. `serpapi://engines`).

  **Sonuç Türleri:** Cevap kutuları, organik sonuçlar, haberler, resimler, alışveriş - otomatik olarak algılanır ve biçimlendirilir.

  ## Geliştirme

  ```bash
  # Yerel geliştirme
  uv sync && uv run src/server.py

  # Docker
  docker build -t serpapi-mcp . && docker run -p 8000:8000 serpapi-mcp

  # Motor kaynaklarını yeniden oluştur (Playground scrape)
  python build-engines.py

  # MCP Inspector ile test etme
  npx @modelcontextprotocol/inspector
  # Yapılandır: URL mcp.serpapi.com/YOUR_KEY/mcp, Transport "Streamable HTTP transport"
  ```

  ## Sorun Giderme

  - **"Missing API key"**: Anahtarı URL yoluna `/{YOUR_KEY}/mcp` veya header'a `Bearer YOUR_KEY` ekleyin
  - **"Invalid key"**: [serpapi.com/dashboard](https://serpapi.com/dashboard) adresinde doğrulayın  
  - **"Rate limit exceeded"**: Bekleyin veya SerpApi planınızı yükseltin
  - **"No results"**: Farklı bir sorgu veya motor deneyin

  ## Katkıda Bulunma

  1. Deposu fork edin
  2. Özellik dalınızı oluşturun: `git checkout -b feature/amazing-feature`
  3. Bağımlılıkları yükleyin: `uv install`
  4. Değişiklikleri yapın
  5. Değişiklikleri commit edin: `git commit -m 'Add amazing feature'`
  6. Dala push edin: `git push origin feature/amazing-feature`
  7. Bir Pull Request açın

  ## Lisans

  MIT Lisansı - ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.
---

#  SerpApi MCP Server

A Model Context Protocol (MCP) server implementation that integrates with [SerpApi](https://serpapi.com) for comprehensive search engine results and data extraction.

[![Python 3.13+](https://img.shields.io/badge/python-3.13+-blue.svg)](https://www.python.org/downloads/)
[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Install in VS Code](https://img.shields.io/badge/Install%20in-VS%20Code-blue?logo=visualstudiocode)](https://insiders.vscode.dev/redirect/mcp/install?name=serpapi-mcp&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmcp.serpapi.com%2FYOUR_SERPAPI_API_KEY%2Fmcp%22%7D)
[![Install in Cursor](https://img.shields.io/badge/Install%20in-Cursor-blue?logo=cursor)](cursor://anysphere.cursor-deeplink/mcp/install?name=serpapi-mcp&config=eyJ0eXBlIjoiaHR0cCIsInVybCI6Imh0dHBzOi8vbWNwLnNlcnBhcGkuY29tL1lPVVJfU0VSUEFQSV9BUElfS0VZL21jcCJ9)

## Features

- **Multi-Engine Search**: Google, Bing, Yahoo, DuckDuckGo, YouTube, eBay, and [more](https://serpapi.com/search-engine-apis)
- **Engine Resources**: Per-engine parameter schemas available via MCP resources (see Search Tool)
- **Real-time Weather Data**: Location-based weather with forecasts via search queries
- **Stock Market Data**: Company financials and market data through search integration
- **Dynamic Result Processing**: Automatically detects and formats different result types
- **Flexible Response Modes**: Complete or compact JSON responses
- **JSON Responses**: Structured JSON output with complete or compact modes

## Quick Start

SerpApi MCP Server is available as a hosted service at [mcp.serpapi.com](https://mcp.serpapi.com). In order to connect to it, you need to provide an API key. You can find your API key on your [SerpApi dashboard](https://serpapi.com/dashboard).

You can configure Claude Desktop to use the hosted server:

```json
{
  "mcpServers": {
    "serpapi": {
      "type": "http",
      "url": "https://mcp.serpapi.com/YOUR_SERPAPI_API_KEY/mcp"
    }
  }
}
```

### Self-Hosting
```bash
git clone https://github.com/serpapi/serpapi-mcp.git
cd serpapi-mcp
uv sync && uv run src/server.py
```

Configure Claude Desktop:
```json
{
  "mcpServers": {
    "serpapi": {
      "type": "http",
      "url": "http://localhost:8000/YOUR_SERPAPI_API_KEY/mcp"
    }
  }
}
```

Get your API key: [serpapi.com/manage-api-key](https://serpapi.com/manage-api-key)

## Authentication

Two methods are supported:
- **Path-based**: `/YOUR_API_KEY/mcp` (recommended)
- **Header-based**: `Authorization: Bearer YOUR_API_KEY`

**Examples:**
```bash
# Path-based
curl "https://mcp.serpapi.com/your_key/mcp" -d '...'

# Header-based  
curl "https://mcp.serpapi.com/mcp" -H "Authorization: Bearer your_key" -d '...'
```

## Search Tool

The MCP server has one main Search Tool that supports all SerpApi engines and result types. You can find all available parameters on the [SerpApi API reference](https://serpapi.com/search-api).
Engine parameter schemas are also exposed as MCP resources: `serpapi://engines` (index) and `serpapi://engines/<engine>`.

The parameters you can provide are specific for each API engine. Some sample parameters are provided below:

- `params.q` (required): Search query
- `params.engine`: Search engine (default: "google_light") 
- `params.location`: Geographic filter
- `mode`: Response mode - "complete" (default) or "compact"
- ...see other parameters on the [SerpApi API reference](https://serpapi.com/search-api)

**Examples:**

```json
{"name": "search", "arguments": {"params": {"q": "coffee shops", "location": "Austin, TX"}}}
{"name": "search", "arguments": {"params": {"q": "weather in London"}}}
{"name": "search", "arguments": {"params": {"q": "AAPL stock"}}}
{"name": "search", "arguments": {"params": {"q": "news"}, "mode": "compact"}}
{"name": "search", "arguments": {"params": {"q": "detailed search"}, "mode": "complete"}}
```

**Supported Engines:** Google, Bing, Yahoo, DuckDuckGo, YouTube, eBay, and more (see `serpapi://engines`).

**Result Types:** Answer boxes, organic results, news, images, shopping - automatically detected and formatted.

## Development

```bash
# Local development
uv sync && uv run src/server.py

# Docker
docker build -t serpapi-mcp . && docker run -p 8000:8000 serpapi-mcp

# Regenerate engine resources (Playground scrape)
python build-engines.py

# Testing with MCP Inspector
npx @modelcontextprotocol/inspector
# Configure: URL mcp.serpapi.com/YOUR_KEY/mcp, Transport "Streamable HTTP transport"
```

## Troubleshooting

- **"Missing API key"**: Include key in URL path `/{YOUR_KEY}/mcp` or header `Bearer YOUR_KEY`
- **"Invalid key"**: Verify at [serpapi.com/dashboard](https://serpapi.com/dashboard)  
- **"Rate limit exceeded"**: Wait or upgrade your SerpApi plan
- **"No results"**: Try different query or engine

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Install dependencies: `uv install`
4. Make your changes
5. Commit changes: `git commit -m 'Add amazing feature'`
6. Push to branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) file for details.
