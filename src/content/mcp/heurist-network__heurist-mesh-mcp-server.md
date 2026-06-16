---
name: "heurist-network/heurist-mesh-mcp-server"
description: "Access specialized web3 AI agents for blockchain analysis, smart contract security auditing, token metrics evaluation, and on-chain interactions through the Heurist Mesh network. Provides comprehensive tools for DeFi analysis, NFT valuation, and transaction monitoring across multiple blockchains"
category: "Finance & Fintech"
repo: "heurist-network/heurist-mesh-mcp-server"
stars: 64
url: "https://github.com/heurist-network/heurist-mesh-mcp-server"
body_length: 8064
license: "MIT"
language: "Python"
body_tr: |-
  # Heurist Mesh MCP Server

  ![mesh-2](https://github.com/user-attachments/assets/da67c0e6-0709-4f28-ab82-8abfc0c0734c)

  [Heurist Mesh](https://github.com/heurist-network/heurist-agent-framework/tree/main/mesh) API'lerine bağlanan bir Model Context Protocol (MCP) sunucusu - Web3 zekasına açılan kapınız.

  **[Heurist Mesh](https://mesh.heurist.ai)**, AI ajanları için beceri pazarıdır. Genel amaçlı AI modelleri Web3 hakkında uzmanlaşmış bilgiye sahip değildir ve sıklıkla doğru sonuçlar vermede başarısız olur. Heurist Mesh, kripto analitikleri konusunda uzman olan 30+ uzmanlaşmış AI ajanı sağlayarak, AI uygulamalarınıza ihtiyaç duyduğu Web3 uzmanlığını sunmaktadır.

  <a href="https://glama.ai/mcp/servers/@heurist-network/heurist-mesh-mcp-server">
    
  </a>

  ## Özellikler
  - **Web3 Zekasına Geçit**: MCP aracılığıyla 30+ uzmanlaşmış kripto analitik ajanına erişim
  - **AI için Optimize Edilmiş**: AI ajanları için optimize edilmiş giriş/çıkış formatları - daha az tool çağrısı, daha az token kullanımı
  - Hem SSE hem de stdio transport'larını destekler
  - Claude, Cursor, Claude Desktop ve diğer MCP uyumlu arayüzlerle çalışır
  - Birden fazla hizmete erişmek için tek bir API anahtarı kullanın (CoinGecko, DexScreener, Twitter analitikleri ve daha fazlası)

  ## 🔥 Yeni: Ajanlarınızı Özelleştirin ve İsteğe Bağlı Yönetilen MCP Sunucuları Oluşturun
  Kişiselleştirilmiş bir swarm oluşturmak için [Heurist Mesh Console](https://mesh.heurist.ai/console)'u kullanabilirsiniz!

  ## Barındırılan SSE Uç Noktası
  Barındırılan SSE uç noktası https://mesh.heurist.xyz/mcp/sse adresinde sağlanmaktadır. **Kimlik doğrulaması gereklidir** - bir [Heurist API anahtarına](https://dev-api-form.heurist.ai/) ihtiyacınız vardır (ücretsiz kredi için "claude" davet kodunu kullanın).

  API anahtarınızı şu şekilde sağlayın:
  - `X-HEURIST-API-KEY` header'ı (önerilir)
  - `Authorization: Bearer <your-api-key>` header'ı
  - `api_key` query parametresi

  Bu uç nokta, kapsamlı Web3 zekası için önerilen ajanlardan araçları içerir:

  | Ajan | Açıklama |
  |-------|-------------|
  | `TokenResolverAgent` | Adresi/sembolü/adı ile token bulun, normalleştirilmiş profiller ve en iyi DEX havuzlarını döndürün |
  | `TrendingTokenAgent` | GMGN, CoinGecko, Pump.fun, Dexscreener, Zora ve Twitter'dan trending token'ları toplayın |
  | `TwitterIntelligenceAgent` | Twitter/X zaman çizelgesi, tweet detayı ve akıllı arama |
  | `ExaSearchDigestAgent` | Özet LLM ile web araması |
  | `FundingRateAgent` | Binance funding oranları, açık pozisyon ve spot-vadeli işlem fırsatları |
  | `AIXBTProjectInfoAgent` | Trending proje bilgileri, temel analiz ve pazar özeti |
  | `ZerionWalletAnalysisAgent` | EVM cüzdan token ve NFT varlıkları analizi |

  Bu paylaşımlı bir sunucu olup performansı dengesiz olabilir. Üretim kullanımı için kendi sunucunuzu barındırmanızı veya adanmış sunucu oluşturmak için [Heurist Mesh Console](https://mesh.heurist.ai/console)'u kullanmanızı öneririz.

  Cursor doğrudan SSE sunucularına erişebilir. Claude Desktop kullanıcıları için, SSE sunucusuna bağlanmak üzere [mcp-proxy](https://github.com/sparfenyuk/mcp-proxy) kurulumunu öneririz.

  ## Ön Koşullar

  - Python 3.10 veya üzeri
  - UV paket yöneticisi (önerilir)
  - VEYA Docker
  - [Heurist API anahtarı alın](https://docs.heurist.ai/protocol-overview/credits) veya "claude" davet koduyla [ücretsiz API kredileri talep edin](https://dev-api-form.heurist.ai/)

  ## Kurulum
  ### UV Kullanarak (Önerilir)
  ```bash
  # Depoyu klonlayın
  git clone https://github.com/heurist-network/heurist-mesh-mcp-server.git
  cd heurist-mesh-mcp-server

  # Paketi yükleyin
  uv pip install -e .
  ```

  ### Docker Kullanarak
  ```bash
  # Depoyu klonlayın
  git clone https://github.com/heurist-network/heurist-mesh-mcp-server.git
  cd heurist-mesh-mcp-server

  # Docker image'ını oluşturun
  docker build -t mesh-tool-server .
  ```
  ## Kullanım
  ### Seçenek 1: Stdio Transport ile Çalıştırın (Claude Desktop için)
  #### UV Kullanarak
  Claude Desktop ile kullanmak için, `claude_desktop_config.json` dosyanıza şunları ekleyin:
  ```bash
  {
    "mcpServers": {
      "heurist-mesh-agent": {
        "command": "uv",
        "args": [
          "--directory",
          "/path/to/heurist-mesh-mcp-server/mesh_mcp_server",  // Bu yolu güncelleyin
          "run",
          "mesh-tool-server"
        ],
        "env": {
          "HEURIST_API_KEY": "your-api-key-here"  // Bu anahtarı güncelleyin
        }
      }
    }
  }
  ```
  #### Docker Kullanarak
  Alternatif olarak, Docker'ı Claude Desktop ile kullanabilirsiniz. `claude_desktop_config.json` dosyanıza şunları ekleyin:
  ```bash
  {
    "mcpServers": {
      "mesh-agent": {
        "command": "docker",
        "args": [
          "run",
          "--rm",
          "-i",
          "-e", "TRANSPORT=stdio",
          "-e", "HEURIST_API_KEY=your-api-key-here",  // Bu anahtarı güncelleyin
          "mesh-tool-server"
        ]
      }
    }
  }
  ```

  `/path/to/heurist-mesh-mcp-server` yerine deponun gerçek yolunu ve `your-api-key-here` yerine Heurist API anahtarınızı yazın.

  ### Seçenek 2: SSE Transport ile Çalıştırın (Cursor için)
  #### `.env` Dosyasında Ortam Değişkenlerini Ayarlama
  ```bash
  cp .env.example .env
  HEURIST_API_KEY=your-api-key-here
  ```
  #### UV Kullanarak:
  ```bash
  uv run mesh-tool-server --transport sse --port 8000
  ```
  #### Docker Kullanarak:
  ```bash
  docker run -p 8000:8000 -e PORT=8000 mesh-tool-server
  ```
  Ardından, Cursor'da MCP Sunucusu URL'sini ekleyin: **http://0.0.0.0:8000/sse**

  ## Kullanılabilir Araçlar
  Tüm 30+ kullanılabilir ajanları ve araçlarını görmek için https://mesh.heurist.ai/metadata.json veya https://mesh.heurist.ai/console adresini ziyaret edin.

  ## Önerilen Araçlar
  Önerilen ajanlarımızdan bu araçlar, çoğu Web3 zeka kullanım durumlarını kapsar:

  | Araç Adı | Açıklama | Ajan |
  |-----------|-------------|-------|
  | token_search | Adresi, sembolü, adı veya CoinGecko ID'si ile token bulun | TokenResolverAgent |
  | token_profile | Pazar verileri, sosyal medya ve en iyi havuzlarla kapsamlı token profili alın | TokenResolverAgent |
  | get_trending_tokens | Birden fazla kaynaktan toplanmış trending token'lar | TrendingTokenAgent |
  | get_market_summary | Tüm trending kaynaklar arasında AI tarafından oluşturulan pazar özeti | TrendingTokenAgent |
  | twitter_search | Kripto konuları için akıllı Twitter araması | TwitterIntelligenceAgent |
  | user_timeline | Twitter kullanıcısından son tweet'leri alın | TwitterIntelligenceAgent |
  | tweet_detail | Belirli bir tweet hakkında detaylı bilgi alın | TwitterIntelligenceAgent |
  | exa_web_search | AI özetleme ile web araması | ExaSearchDigestAgent |
  | exa_scrape_url | Web sayfası içeriğini scrape ve özetleyin | ExaSearchDigestAgent |
  | get_all_funding_rates | Binance vadeli işlem kontratları için tüm funding oranlarını alın | FundingRateAgent |
  | get_symbol_oi_and_funding | Belirli bir sembol için açık pozisyon ve funding alın | FundingRateAgent |
  | find_spot_futures_opportunities | Spot ve vadeli işlemler arasında arbitraj fırsatları bulun | FundingRateAgent |
  | search_projects | Temel analiz ile trending projeleri arayın | AIXBTProjectInfoAgent |
  | get_market_summary | AIXBT'den AI pazar özetini alın | AIXBTProjectInfoAgent |
  | fetch_wallet_tokens | EVM cüzdan token varlıklarını alın | ZerionWalletAnalysisAgent |
  | fetch_wallet_nfts | EVM cüzdan NFT varlıklarını alın | ZerionWalletAnalysisAgent |

  ## Desteklenen Ajanları Özelleştirme
  Sunucu, önceden tanımlanmış bir dizi önerilen ajan ile gelir. Hangi ajanların kullanılabilir olacağını değiştirmek için:
  1. `server.py` dosyasını açın ve `Config` sınıfını bulun.
  2. `DEFAULT_AGENTS` listesini düzenleyerek [Heurist Metadata](https://mesh.heurist.ai/metadata.json)'de listelenen ajanları ekleyin veya çıkarın
  ```python
  DEFAULT_AGENTS = [
      "TokenResolverAgent",        # Kapsamlı token araması
      "TrendingTokenAgent",        # Toplanmış trending token'lar
      "TwitterIntelligenceAgent",  # Twitter/X analitikleri
      "ExaSearchDigestAgent",      # Özetleme ile web araması
      "FundingRateAgent",          # Binance funding ve OI verileri
      "AIXBTProjectInfoAgent",     # Proje analizi
      "ZerionWalletAnalysisAgent", # Cüzdan varlıkları
      # Gerekli olduğu kadar daha fazla ajan ekleyin
  ]
  ```

  ## Lisans
  Bu MCP sunucusu MIT Lisansı altında lisanslanmıştır. Bu, MIT Lisansı'nın şartları ve koşullarına tabi olarak yazılımı serbestçe kullanma, değiştirme ve dağıtma hakkı verdiği anlamına gelir.
---

# Heurist Mesh MCP Server

![mesh-2](https://github.com/user-attachments/assets/da67c0e6-0709-4f28-ab82-8abfc0c0734c)

A Model Context Protocol (MCP) server that connects to [Heurist Mesh](https://github.com/heurist-network/heurist-agent-framework/tree/main/mesh) APIs - your gateway to Web3 intelligence.

**[Heurist Mesh](https://mesh.heurist.ai)** is the skills marketplace for AI agents. General-purpose AI models lack specialized knowledge about Web3 and often fail to deliver accurate results. Heurist Mesh provides 30+ specialized AI agents that are experts in crypto analytics, ready to give your AI applications the Web3 expertise they need.

<a href="https://glama.ai/mcp/servers/@heurist-network/heurist-mesh-mcp-server">
  
</a>

## Features
- **Gateway to Web3 Intelligence**: Access 30+ specialized crypto analytics agents via MCP
- **Optimized for AI**: Input/output formats optimized for AI agents - fewer tool calls, less token usage
- Supports both SSE and stdio transports
- Works with Claude, Cursor, Claude Desktop, and other MCP-compatible interfaces
- Use one API key to access multiple services (CoinGecko, DexScreener, Twitter analytics, and more)

## 🔥 Just In: Customize Your Agents and Create Managed MCP Servers On-Demand
You can use [Heurist Mesh Console](https://mesh.heurist.ai/console) to create SSE MCP Servers. Select your agents and compose a personalized swarm for your tasks!

## Hosted SSE Endpoint
We provide a hosted SSE endpoint at https://mesh.heurist.xyz/mcp/sse. **Authentication is required** - you need a [Heurist API key](https://dev-api-form.heurist.ai/) (use invite code "claude" for free credits).

Provide your API key via:
- `X-HEURIST-API-KEY` header (recommended)
- `Authorization: Bearer <your-api-key>` header
- `api_key` query parameter

This endpoint includes tools from recommended agents for comprehensive Web3 intelligence:

| Agent | Description |
|-------|-------------|
| `TokenResolverAgent` | Find tokens by address/symbol/name, return normalized profiles and top DEX pools |
| `TrendingTokenAgent` | Aggregates trending tokens from GMGN, CoinGecko, Pump.fun, Dexscreener, Zora and Twitter |
| `TwitterIntelligenceAgent` | Twitter/X timeline, tweet detail, and smart search |
| `ExaSearchDigestAgent` | Web search with concise LLM summarization |
| `FundingRateAgent` | Binance funding rates, open interest, and spot-futures opportunities |
| `AIXBTProjectInfoAgent` | Trending project info, fundamental analysis, and market summary |
| `ZerionWalletAnalysisAgent` | EVM wallet token and NFT holdings analysis |

This is a shared server and the performance may be unstable. For production use, we recommend self-hosting or using [Heurist Mesh Console](https://mesh.heurist.ai/console) to create dedicated servers.

Cursor can directly access SSE servers. For Claude Desktop users, we recommend installing [mcp-proxy](https://github.com/sparfenyuk/mcp-proxy) to connect to the SSE server.

## Prerequisites

- Python 3.10 or higher
- UV package manager (recommended)
- OR Docker
- [Get a Heurist API key](https://docs.heurist.ai/protocol-overview/credits) or you can [claim free API credits](https://dev-api-form.heurist.ai/) with invite code "claude"

## Installation
### Using UV (Recommended)
```bash
# Clone the repository
git clone https://github.com/heurist-network/heurist-mesh-mcp-server.git
cd heurist-mesh-mcp-server

# Install the package
uv pip install -e .
```

### Using Docker
```bash
# Clone the repository
git clone https://github.com/heurist-network/heurist-mesh-mcp-server.git
cd heurist-mesh-mcp-server

# Build the Docker image
docker build -t mesh-tool-server .
```
## Usage
### Option 1: Run with stdio Transport (for Claude Desktop)
#### Using UV
To use this with Claude Desktop, add the following to your `claude_desktop_config.json`:
```bash
{
  "mcpServers": {
    "heurist-mesh-agent": {
      "command": "uv",
      "args": [
        "--directory",
        "/path/to/heurist-mesh-mcp-server/mesh_mcp_server",  // Update this path
        "run",
        "mesh-tool-server"
      ],
      "env": {
        "HEURIST_API_KEY": "your-api-key-here"  // Update this key
      }
    }
  }
}
```
#### Using Docker
Alternatively, you can use Docker with Claude Desktop by adding this to your `claude_desktop_config.json`:
```bash
{
  "mcpServers": {
    "mesh-agent": {
      "command": "docker",
      "args": [
        "run",
        "--rm",
        "-i",
        "-e", "TRANSPORT=stdio",
        "-e", "HEURIST_API_KEY=your-api-key-here",  // Update this key
        "mesh-tool-server"
      ]
    }
  }
}
```

Replace `/path/to/heurist-mesh-mcp-server` with the actual path to the repository and `your-api-key-here` with your Heurist API key.

### Option 2: Run with SSE Transport (for Cursor)
#### Setting up Environment Variables in `.env`
```bash
cp .env.example .env
HEURIST_API_KEY=your-api-key-here
```
#### Using UV:
```bash
uv run mesh-tool-server --transport sse --port 8000
```
#### Using Docker:
```bash
docker run -p 8000:8000 -e PORT=8000 mesh-tool-server
```
Then, in Cursor, add the MCP Server URL: **http://0.0.0.0:8000/sse**

## Available Tools
Visit https://mesh.heurist.ai/metadata.json or https://mesh.heurist.ai/console to view all 30+ available agents and their tools.

## Recommended Tools
These tools from our recommended agents cover most Web3 intelligence use cases:

| Tool Name | Description | Agent |
|-----------|-------------|-------|
| token_search | Find tokens by address, symbol, name, or CoinGecko ID | TokenResolverAgent |
| token_profile | Get comprehensive token profile with market data, socials, and top pools | TokenResolverAgent |
| get_trending_tokens | Aggregated trending tokens from multiple sources | TrendingTokenAgent |
| get_market_summary | AI-generated market summary across all trending sources | TrendingTokenAgent |
| twitter_search | Smart Twitter search for crypto topics | TwitterIntelligenceAgent |
| user_timeline | Get recent tweets from a Twitter user | TwitterIntelligenceAgent |
| tweet_detail | Get detailed info about a specific tweet | TwitterIntelligenceAgent |
| exa_web_search | Web search with AI summarization | ExaSearchDigestAgent |
| exa_scrape_url | Scrape and summarize webpage content | ExaSearchDigestAgent |
| get_all_funding_rates | Get funding rates for all Binance perpetual contracts | FundingRateAgent |
| get_symbol_oi_and_funding | Get open interest and funding for a specific symbol | FundingRateAgent |
| find_spot_futures_opportunities | Find arbitrage opportunities between spot and futures | FundingRateAgent |
| search_projects | Search trending projects with fundamental analysis | AIXBTProjectInfoAgent |
| get_market_summary | Get AI market summary from AIXBT | AIXBTProjectInfoAgent |
| fetch_wallet_tokens | Get EVM wallet token holdings | ZerionWalletAnalysisAgent |
| fetch_wallet_nfts | Get EVM wallet NFT holdings | ZerionWalletAnalysisAgent |

## Customizing Supported Agents
The server comes with a default set of recommended agents. To modify which agents are available:
1. Open the `server.py` file and locate the `Config` class.
2. Edit the `DEFAULT_AGENTS` list to add or remove agents listed [at Heurist Metadata](https://mesh.heurist.ai/metadata.json)
```python
DEFAULT_AGENTS = [
    "TokenResolverAgent",        # Comprehensive token lookup
    "TrendingTokenAgent",        # Aggregated trending tokens
    "TwitterIntelligenceAgent",  # Twitter/X analytics
    "ExaSearchDigestAgent",      # Web search with summarization
    "FundingRateAgent",          # Binance funding & OI data
    "AIXBTProjectInfoAgent",     # Project analysis
    "ZerionWalletAnalysisAgent", # Wallet holdings
    # Add more agents as needed
]
```

## License
This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License.
