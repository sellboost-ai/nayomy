---
name: "aaronjmars/web3-research-mcp"
description: "Deep Research for crypto - free & fully local"
category: "Finance & Fintech"
repo: "aaronjmars/web3-research-mcp"
stars: 156
url: "https://github.com/aaronjmars/web3-research-mcp"
body_length: 6656
license: "MIT"
language: "TypeScript"
body_tr: |-
  # Web3 Research MCP
  [![smithery badge](https://smithery.ai/badge/@aaronjmars/web3-research-mcp)](https://smithery.ai/server/@aaronjmars/web3-research-mcp)

  Kripto için Derin Araştırma - ücretsiz ve tamamen lokal 🧠

  <a href="https://glama.ai/mcp/servers/@aaronjmars/web3-research-mcp">
    
  </a>

  ## 🚀 Önizleme

  ![Preview](https://i.imgur.com/b9WfMSk.png)
  ![Preview2](https://i.imgur.com/qjqvwmr.png)

  ## 🧠 Özellikler

  - **Kapsamlı Araştırma**: Herhangi bir kripto para token'ı hakkında detaylı bilgi toplayın
  - **Çok Kaynaklı Analiz**: CoinGecko, CoinMarketCap, DeFiLlama ve daha fazlası dahil olmak üzere birden fazla kaynakta araştırma yapın
  - **Yapılandırılmış Raporlama**: Teknik temel bilgiler, pazar verileri, sosyal sentiment ve daha fazlasını kapsayan detaylı raporlar oluşturun
  - **Kaynak Yönetimi**: Arama sonuçlarını ve içeriği referans için otomatik olarak saklayın
  - **Durum İzleme**: Araştırma ilerlemeşini farklı aşama ve bölümler aracılığıyla takip edin

  ## 📋 Gereksinimler

  - Node.js (v16 veya daha yüksek)

  ## 🔧 Kurulum ve Ayarlama

  ### Smithery Üzerinden Kurulum

  Web3-research-mcp'yi Claude Desktop'a [Smithery](https://smithery.ai/server/web3-research-mcp) aracılığıyla otomatik olarak kurmak için:

  ```bash
  npx -y @smithery/cli install web3-research-mcp --client claude
  ```

  ## 🔌 Claude Desktop ile Kullanım

  Claude Desktop config dosyanızı düzenleyin

  - Windows: %APPDATA%\Claude\claude_desktop_config.json
  - macOS: ~/Library/Application Support/Claude/claude_desktop_config.json

  Claude Desktop konfigürasyon dosyanıza bunu ekleyin:

  ```json
  {
    "mcpServers": {
      "web3-research-mcp": {
        "command": "npx",
        "args": ["-y", "web3-research-mcp@latest"]
      }
    }
  }
  ```

  Ardından Claude Desktop'ı yeniden başlatın

  ## 🔌 Cursor ile Kullanım

  Şuraya gidin: Settings -> Cursor Settings -> MCP -> Add new global MCP server
  Bunu Cursor ~/.cursor/mcp.json dosyasına yapıştırın. Daha fazla bilgi için Cursor MCP docs'a bakın.

  ```json
  {
    "mcpServers": {
      "web3-research-mcp": {
        "command": "npx",
        "args": ["-y", "web3-research-mcp@latest"]
      }
    }
  }
  ```

  Ardından Cursor'ı yeniden başlatın

  ## 🛠️ Tools

  ### create-research-plan

  Bir token için yapılandırılmış bir araştırma planı oluşturur.

  Parametreler:
  - tokenName: Token'ın tam adı
  - tokenTicker: Token'ın ticker sembolü

  ### search

  Web araması gerçekleştirir ve sonuçları döndürür.

  Parametreler:
  - query: Arama sorgusu
  - searchType: Arama türü (web, news, images, videos)

  ### research-with-keywords

  Belirli anahtar kelimelerle bir token'ı arar ve sonuçları kaydeder.

  Parametreler:
  - tokenName: Token'ın adı
  - tokenTicker: Ticker sembolü
  - keywords: Aranacak anahtar kelimeler dizisi

  ### update-status

  Bir araştırma bölümünün durumunu günceller.

  Parametreler:
  - section: Güncellenecek bölüm adı (örn. 'projectInfo', 'technicalFundamentals')
  - status: Bölümün yeni durumu (planned, in_progress, completed)

  ### fetch-content

  Bir URL'den içerik getirir ve onu bir kaynak olarak kaydeder.

  Parametreler:
  - url: İçerik getirilecek URL
  - format: Çıktı formatı (text, html, markdown, json)

  ### list-resources

  Kaydedilmiş tüm kullanılabilir kaynakları listeler.

  ### search-source

  Belirli bir kaynaktan bir token hakkında bilgi arar.

  Parametreler:
  - tokenName: Token'ın adı
  - tokenTicker: Ticker sembolü
  - source: Aranacak kaynak (örn. 'CoinGecko', 'DeFiLlama', 'News')

  ### coingecko-data

  CoinGecko public API'sinden doğrudan canlı pazar verilerini getirir — fiyat, pazar başkenti, 24s/7g/30g değişimleri, ATH/ATL, dolaşımdaki arz, zincirler arasında contract adresleri ve sosyal/dev bağlantıları. HTML scraping'in 403 sorunlarını ortadan kaldırır.

  Parametreler:
  - tokenName: Token'ın tam adı (örn. 'Bitcoin')
  - tokenTicker: Ticker sembolü (örn. 'BTC')

  API anahtarı gerekli değildir. Ücretsiz public tier'ı kullanır (~30 req/min).

  İsteğe bağlı: CoinGecko Pro API anahtarını kullanmak için ortam değişkeninde `COINGECKO_API_KEY` ayarlayın. Ayarlandığında, istekler `x-cg-pro-api-key` header'ı ile `https://pro-api.coingecko.com/api/v3`'e gönderilir. İstekler 15 saniye sonra timeout olur.

  ### coingecko-search

  CoinGecko'nun coin index'ini arar ve CoinGecko ID'leri ile aday eşleşmeleri döndürür. Ticker belirsiz olduğunda (örn. aynı sembolü olan birden fazla token) kullanışlıdır.

  Parametreler:
  - query: Arama sorgusu — ad, ticker veya contract adresi

  ### coingecko-tickers

  CoinGecko'dan bir token için aktif exchange listelerini getirir — hangi CEX'ler/DEX'ler çifti işlem görür, venue başına 24s USD hacmi, son fiyat, bid-ask spread, trust score ve işlem URL'si. 24s USD hacmine göre azalan sırada sıralanır; anormallikler ve eski printler filtrelenir. "Bu token gerçekten nerede işlem görüyor" sorusuna HTML scraping'i ortadan kaldırır.

  Parametreler:
  - tokenName: Token'ın tam adı (örn. 'Bitcoin')
  - tokenTicker: Ticker sembolü (örn. 'BTC')
  - limit: Döndürülecek en iyi venue sayısı (varsayılan 15, maksimum 50)

  API anahtarı gerekli değildir. Ücretsiz public tier'ı kullanır. İstekler 15 saniye sonra timeout olur.

  ### defillama-data

  DeFiLlama public API'sinden doğrudan protocol verilerini getirir — toplam TVL, chain başına TVL dökümü, ücretler (24s/7g/30g/all-time), token adresleri, fundraising turları ve bağlantılar. En yaygın DeFi-protocol araması için HTML scraping'i ortadan kaldırır.

  Parametreler:
  - tokenName: Tam protocol/token adı (örn. 'Uniswap')
  - tokenTicker: Ticker sembolü (örn. 'UNI')

  API anahtarı gerekli değildir. Ücretsiz public API'yi kullanır. İstekler 15 saniye sonra timeout olur. Protocol index, her çağrıda `/protocols`'u hammering yapmamak için proses başına 5 dakika cachelenir.

  ### defillama-search

  DeFiLlama'nın protocol index'ini arar ve slug'ları, TVL'leri ve kategorileri ile aday eşleşmeleri döndürür. Ticker belirsiz olduğunda (örn. benzer isimleri olan birden fazla protocol) kullanışlıdır.

  Parametreler:
  - query: Arama sorgusu — protocol adı, ticker veya slug

  ## 📝 Prompts

  ### token-research

  Bir kripto para token'ı üzerine kapsamlı araştırma başlatır.

  Parametreler:
  - tokenName: Kripto para token'ının tam adı
  - tokenTicker: Token'ın ticker sembolü (örn. BTC, ETH)

  ## 🧠 Nasıl Çalışır

  1. Araştırma başladığında, token'ın tüm yönlerini kapsayan yapılandırılmış bir plan oluşturulur
  2. Server, bilgi için birden fazla kaynakta aramalar gerçekleştirir
  3. Arama sonuçları referans alınabilecek kaynaklar olarak saklanır
  4. Araştırma, durum izleme ile farklı bölümlerde ilerler
  5. Token'ın tüm yönlerini kapsayan kapsamlı bir rapor oluşturulur

  ## ⚠️ Sınırlamalar

  - Bazı web siteleri web scraping'i engeller, bu nedenle doğrudan içerik getirme 403 hatalarıyla başarısız olabilir
  - Arama sonuçlarına bağlıdır ve bunlar her zaman kapsamlı olmayabilir
  - Arama işlemlerine rate limit'ler uygulanabilir

  ## 📄 Lisans

  Bu proje Apache License 2.0 altında lisanslanmıştır - detaylar için LICENSE dosyasına bakın.
---

# Web3 Research MCP
[![smithery badge](https://smithery.ai/badge/@aaronjmars/web3-research-mcp)](https://smithery.ai/server/@aaronjmars/web3-research-mcp)

Deep Research for crypto - free & fully local 🧠

<a href="https://glama.ai/mcp/servers/@aaronjmars/web3-research-mcp">
  
</a>

## 🚀 Preview

![Preview](https://i.imgur.com/b9WfMSk.png)
![Preview2](https://i.imgur.com/qjqvwmr.png)

## 🧠 Features

- **Comprehensive Research**: Gather detailed information about any cryptocurrency token
- **Multi-Source Analysis**: Research across multiple sources including CoinGecko, CoinMarketCap, DeFiLlama, and more
- **Structured Reporting**: Generate detailed reports covering technical fundamentals, market data, social sentiment, and more
- **Resource Management**: Automatically stores search results and content for reference
- **Status Tracking**: Track research progress through different stages and sections

## 📋 Requirements

- Node.js (v16 or higher)

## 🔧 Installation & Setup

### Installing via Smithery

To install web3-research-mcp for Claude Desktop automatically via [Smithery](https://smithery.ai/server/web3-research-mcp):

```bash
npx -y @smithery/cli install web3-research-mcp --client claude
```

## 🔌 Using with Claude Desktop

Edit your Claude Desktop config file

- Windows: %APPDATA%\Claude\claude_desktop_config.json
- macOS: ~/Library/Application Support/Claude/claude_desktop_config.json

Add this to your Claude Desktop configuration file:

```json
{
  "mcpServers": {
    "web3-research-mcp": {
      "command": "npx",
      "args": ["-y", "web3-research-mcp@latest"]
    }
  }
}
```

Then restart Claude Desktop

## 🔌 Using with Cursor

Go to: Settings -> Cursor Settings -> MCP -> Add new global MCP server
Paste this into your Cursor ~/.cursor/mcp.json file. See Cursor MCP docs for more info.

```json
{
  "mcpServers": {
    "web3-research-mcp": {
      "command": "npx",
      "args": ["-y", "web3-research-mcp@latest"]
    }
  }
}
```

Then restart Cursor

## 🛠️ Tools

### create-research-plan

Creates a structured research plan for a token.

Parameters:
- tokenName: Full name of the token
- tokenTicker: Ticker symbol of the token

### search

Performs a web search and returns the results.

Parameters:
- query: Search query
- searchType: Type of search (web, news, images, videos)

### research-with-keywords

Searches for a token with specific keywords and saves the results.

Parameters:
- tokenName: Name of the token
- tokenTicker: Ticker symbol
- keywords: Array of keywords to search for

### update-status

Updates the status of a research section.

Parameters:
- section: Section name to update (e.g., 'projectInfo', 'technicalFundamentals')
- status: New status for the section (planned, in_progress, completed)

### fetch-content

Fetches content from a URL and saves it as a resource.

Parameters:
- url: URL to fetch content from
- format: Output format (text, html, markdown, json)

### list-resources

Lists all available resources that have been saved.

### search-source

Searches for information about a token from a specific source.

Parameters:
- tokenName: Name of the token
- tokenTicker: Ticker symbol
- source: Source to search (e.g., 'CoinGecko', 'DeFiLlama', 'News')

### coingecko-data

Fetches live market data directly from the CoinGecko public API — price, market cap, 24h/7d/30d changes, ATH/ATL, circulating supply, contract addresses across chains, and social/dev links. Bypasses the 403 issues of HTML scraping.

Parameters:
- tokenName: Full name of the token (e.g., 'Bitcoin')
- tokenTicker: Ticker symbol (e.g., 'BTC')

No API key required. Uses the free public tier (~30 req/min).

Optional: set `COINGECKO_API_KEY` in the environment to use a CoinGecko Pro API key. When set, requests are sent to `https://pro-api.coingecko.com/api/v3` with the `x-cg-pro-api-key` header. Requests time out after 15s.

### coingecko-search

Searches CoinGecko's coin index and returns candidate matches with their CoinGecko IDs. Useful when the ticker is ambiguous (e.g., multiple tokens with the same symbol).

Parameters:
- query: Search query — name, ticker, or contract address

### coingecko-tickers

Fetches active exchange listings for a token from CoinGecko — which CEXs/DEXs trade the pair, per-venue 24h USD volume, last price, bid-ask spread, trust score, and trade URL. Sorted by 24h USD volume desc; anomalies and stale prints are filtered out. Bypasses HTML scraping for the "where does this token actually trade" question.

Parameters:
- tokenName: Full name of the token (e.g., 'Bitcoin')
- tokenTicker: Ticker symbol (e.g., 'BTC')
- limit: How many top venues to return (default 15, max 50)

No API key required. Uses the free public tier. Requests time out after 15s.

### defillama-data

Fetches protocol data directly from the DeFiLlama public API — total TVL, per-chain TVL breakdown, fees (24h/7d/30d/all-time), token addresses, fundraising rounds, and links. Bypasses HTML scraping for the most common DeFi-protocol lookup.

Parameters:
- tokenName: Full protocol/token name (e.g., 'Uniswap')
- tokenTicker: Ticker symbol (e.g., 'UNI')

No API key required. Uses the free public API. Requests time out after 15s. The protocol index is cached for 5 minutes per process to avoid hammering `/protocols` on every call.

### defillama-search

Searches DeFiLlama's protocol index and returns candidate matches with their slugs, TVL, and category. Useful when the ticker is ambiguous (e.g., multiple protocols with similar names).

Parameters:
- query: Search query — protocol name, ticker, or slug

## 📝 Prompts

### token-research

Initiates comprehensive research on a cryptocurrency token.

Parameters:
- tokenName: Full name of the cryptocurrency token
- tokenTicker: Ticker symbol of the token (e.g., BTC, ETH)

## 🧠 How It Works

1. When research begins, a structured plan is created covering all aspects of the token
2. The server performs searches across multiple sources for information
3. Search results are stored as resources that can be referenced
4. The research progresses through different sections, with status tracking
5. A comprehensive report is generated covering all aspects of the token

## ⚠️ Limitations

- Some websites block web scraping, so direct content fetching may fail with 403 errors
- Relies on search results which may not always be comprehensive
- Rate limits may apply to search operations

## 📄 License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.
