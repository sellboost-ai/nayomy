---
name: "doggybee/mcp-server-ccxt"
description: "An MCP server for accessing real-time crypto market data and trading via 20+ exchanges using the CCXT library. Supports spot, futures, OHLCV, balances, orders, and more."
category: "Finance & Fintech"
repo: "doggybee/mcp-server-ccxt"
stars: 139
url: "https://github.com/doggybee/mcp-server-ccxt"
body_length: 10271
license: "MIT"
language: "TypeScript"
body_tr: |-
  # CCXT MCP Server



  ![Version](https://img.shields.io/badge/version-1.2.1-blue.svg)
  [![MCP Standard](https://img.shields.io/badge/MCP-Standard-green.svg)](https://www.modelcontextprotocol.org/)
  [![CCXT](https://img.shields.io/badge/CCXT-4.0.0-orange.svg)](https://github.com/ccxt/ccxt)
  [![smithery badge](https://smithery.ai/badge/@doggybee/mcp-server-ccxt)](https://smithery.ai/server/@doggybee/mcp-server-ccxt)

  MCP (Model Context Protocol) ve CCXT kullanarak yüksek performanslı kripto para borsası entegrasyonu.

  ## Özellikler

  - 🚀 **Borsa Desteği**: 20+ kripto para borsasına bağlanır
  - 🔃 **Pazar Türleri**: Spot, futures, swap piyasaları ve daha fazlasını destekler
  - 🔧 **Proxy Yapılandırması**: Borsalara proxy üzerinden erişim seçenekleri
  - 📊 **Hızlı & Güvenilir**: Optimize edilmiş caching ve rate limiting
  - 🌐 **MCP Standardı**: Claude ve GPT gibi LLM'ler ile MCP aracılığıyla uyumlu

  ## CCXT MCP Server Entegrasyon Mimarisi

  ![CCXT MCP Server Integration Architecture](https://raw.githubusercontent.com/doggybee/mcp-server-ccxt/HEAD/docs/images/mcp-integration.svg)

  CCXT MCP Server, Model Context Protocol aracılığıyla dil modellerini kripto para borsalarına bağlar. LLM'lerin birleştirilmiş bir API üzerinden gerçek zamanlı pazar verilerine erişmesini ve birden fazla borsa arasında işlem yapmasını sağlayan bir köprü görevi görür.

  Mimari şu bileşenleri içerir:
  - İstek gönderen LLM istemcileri (Claude ve diğer MCP uyumlu modeller)
  - İletişimi standartlaştıran Model Context Protocol (MCP)
  - İstekleri işleyen ve borsa etkileşimlerini yöneten CCXT MCP Server
  - Borsa API'lerine birleştirilmiş erişim sağlayan CCXT Library
  - Birden fazla kripto para borsasına bağlantılar

  ## CCXT MCP Server Kod Mimarisi

  ![CCXT MCP Server Code Architecture](https://raw.githubusercontent.com/doggybee/mcp-server-ccxt/HEAD/docs/images/code-architecture.svg)

  Server, daha iyi bakım ve genişletilebilirlik için üç ana modüle ayrılmıştır:

  - **Exchange**: Borsa örneklerini, kimlik bilgilerini ve sembol doğrulamasını yönetir
  - **Utils**: Caching, rate limiting ve logging işlevselliği sağlar
  - **Tools**: Borsa etkileşimi için MCP tools ve resources uygular

  ## Hızlı Başlangıç

  ### Smithery Üzerinden Kurulum

  [Smithery](https://smithery.ai/server/@doggybee/mcp-server-ccxt) aracılığıyla mcp-server-ccxt'i Claude Desktop'a otomatik olarak kurmak için:

  ```bash
  npx -y @smithery/cli install @doggybee/mcp-server-ccxt --client claude
  ```

  ### NPM Paketi (Önerilen)

  CCXT MCP Server'ı npm'den kurabilirsiniz:

  ```bash
  # Global olarak kur
  npm install -g @mcpfun/mcp-server-ccxt

  # Server'ı başlat
  mcp-server-ccxt
  ```

  Veya doğrudan çalıştırın:

  ```bash
  npx @mcpfun/mcp-server-ccxt
  ```

  ### Manuel Kurulum

  Alternatif olarak, repository'yi klonlayıp derleyebilirsiniz:

  ```bash
  # Repository'yi klonla
  git clone https://github.com/doggybee/mcp-server-ccxt.git
  cd mcp-server-ccxt

  # Bağımlılıkları yükle
  npm install

  # Server'ı derle
  npm run build

  # Server'ı başlat
  npm start
  ```

  ## Yapılandırma

  1. Bir ortam dosyası oluşturun
     ```bash
     cp .env.example .env
     ```

  2. `.env` dosyasını düzenleyerek API anahtarlarınızı ekleyin
     ```
     # Varsayılan borsa (opsiyonel)
     DEFAULT_EXCHANGE=binance
     
     # Varsayılan pazar türü (opsiyonel)
     DEFAULT_MARKET_TYPE=spot 
     
     # API kimlik bilgileri (opsiyonel)
     BINANCE_API_KEY=your_api_key
     BINANCE_SECRET=your_api_secret
     # Şifre gerektiren borsalar için (örn. KuCoin)
     KUCOIN_API_KEY=your_kucoin_api_key
     KUCOIN_SECRET=your_kucoin_secret
     KUCOIN_PASSPHRASE=your_kucoin_passphrase
     
     # Proxy yapılandırması (opsiyonel)
     USE_PROXY=false
     PROXY_URL=http://username:password@your-proxy-server:port
     # Legacy format (hala desteklenen ancak yukarıdaki entegre URL formatı önerilir)
     # PROXY_USERNAME=
     # PROXY_PASSWORD=
     ```

  ## Kullanım

  > **Not**: MCP iletişiminde herhangi bir sorunla karşılaşırsanız, çözümler için [Sorun Giderme Rehberi](docs/troubleshooting.md)'ne bakınız.

  ### Server'ı Çalıştırma

  Server'ı başlatın:

  ```bash
  # Global olarak npm ile kurulduysa
  mcp-server-ccxt

  # Manuel olarak kurulduysa
  npm start
  ```

  ### Claude for Desktop ile Kullanım

  1. Server'ı `claude_desktop_config.json` dosyanıza ekleyin:

  npm ile global olarak kurulduysa:
  ```json
  {
    "mcpServers": {
      "ccxt": {
        "command": "mcp-server-ccxt"
      }
    }
  }
  ```

  Manuel olarak kurulduysa:
  ```json
  {
    "mcpServers": {
      "ccxt": {
        "command": "node",
        "args": [
          "/path/to/mcp-server-ccxt/build/index.js"
        ]
      }
    }
  }
  ```

  2. Claude for Desktop'ı yeniden başlatın

  ### Başka Bir Projede Modül Olarak Kullanım

  Bu paketi kendi Node.js projelerinizde bir modül olarak da kullanabilirsiniz:

  ```javascript
  // CCXT MCP Server'ı içe aktar
  import '@mcpfun/mcp-server-ccxt';

  // Server, içe aktarıldığında otomatik olarak başlar
  // Ortam değişkenleri aracılığıyla yapılandırabilirsiniz
  ```

  ## Örnek Sorgular

  MCP server ile kullanabileceğiniz bazı örnek sorgular:

  - "Bitcoin'in Binance'deki güncel fiyatı nedir?"
  - "Coinbase'de ETH/USDT için emir defterini göster"
  - "Binance'de BTC/USDT için son 24 mum için 1 saatlik OHLCV verilerini al"
  - "SOL/USDT fiyatını farklı borsalar arasında karşılaştır"
  - "Binance'deki mevcut bakiyem nedir?" (API anahtarları gereklidir)
  - "Kraken'de 0.1 ETH için pazar alış emri ver" (API anahtarları gereklidir)

  ## Mevcut Tools

  ### Public API Tools

  - `list-exchanges`: Tüm kullanılabilir kripto para borsalarını listele
  - `get-ticker`: Bir ticaret çifti için güncel ticker bilgisini al
  - `batch-get-tickers`: Birden fazla ticaret çifti için ticker bilgisini bir seferde al
  - `get-orderbook` / `get-order-book`: Bir ticaret çifti için pazar emir defterini al
  - `get-ohlcv`: Bir ticaret çifti için OHLCV mum verilerini al
  - `get-trades`: Bir ticaret çifti için son işlemleri al
  - `get-markets`: Bir borsa için tüm kullanılabilir piyasaları al
  - `get-exchange-info`: Borsa bilgisi ve durumunu al
  - `get-leverage-tiers`: Futures kaldıraç seviyelerini al
  - `get-funding-rates`: Güncel finansman oranlarını al
  - `get-positions`: Açık pozisyon bilgisini al
  - `get-open-orders`: Tüm açık emirleri al
  - `get-order-history`: Emir geçmişini al

  ### Private API Tools (API anahtarları gereklidir)

  - `account-balance`: Bir kripto para borsasından hesap bakiyenizi al
  - `place-market-order`: Bir borsada pazar emri ver
  - `place-limit-order`: Bir borsada limit emri ver
  - `cancel-order`: Mevcut bir emri iptal et
  - `cancel-all-orders`: Tüm açık emirleri iptal et
  - `set-leverage`: Futures için kaldıraç belirle
  - `set-margin-mode`: Futures için margin modu ayarla
  - `place-futures-market-order`: Futures pazar emirleri ver
  - `place-futures-limit-order`: Futures limit emirleri ver
  - `transfer-funds`: Hesaplar arasında fon transfer et (örn. spot'tan futures'a)

  ### Yapılandırma & Utility Tools

  - `cache-stats`: CCXT cache istatistiklerini al
  - `clear-cache`: CCXT cache'i temizle
  - `set-log-level`: Log seviyesini ayarla
  - `get-proxy-config`: Proxy ayarlarını al
  - `set-proxy-config`: Proxy ayarlarını yapılandır
  - `set-market-type`: Varsayılan pazar türünü ayarla
  - `set-default-exchange`: Varsayılan borsayı değiştir
  - `system-info`: Sistem ve ortam bilgisini al

  ## Performans Optimizasyonları

  MCP-CCXT, yüksek performans sağlamak için çeşitli optimizasyonlar içerir:

  1. **LRU Caching Sistemi**:
     - Farklı veri türleri için farklı TTL'ler
     - Ticker verisi: 10 saniye
     - Emir defteri verisi: 5 saniye
     - Pazar verisi: 1 saat

  2. **Uyarlanabilir Rate Limiting**:
     - İstek oranlarını borsa yanıtlarına göre otomatik olarak ayarlar
     - Hatalar için exponential backoff uygular
     - Borsa başına eşzamanlı istekleri yönetir

  3. **Borsa Bağlantı Yönetimi**:
     - Borsa örneklerinin etkili başlatılması
     - Uygun hata işleme ve yeniden denemeler

  ## Güvenlik En İyi Uygulamaları

  ### API Anahtarı Güvenliği

  1. **Özel API Anahtarları Oluşturun**:
     - Farklı uygulamalar/amaçlar için ayrı API anahtarları oluşturun
     - API anahtarlarını farklı hizmetler veya uygulamalar arasında asla yeniden kullanmayın

  2. **API Anahtarı İzinlerini Sınırlandırın**:
     - Yalnızca ihtiyacınız olan izinleri etkinleştirin (örn. pazar verileri için salt okunur)
     - Yalnızca işlem işlevselliğine ihtiyaç duyarsanız para çekme izinlerini devre dışı bırakın
     - Bilinen IP'lere erişimi kısıtlamak için uygun olduğunda IP whitelist kullanın

  3. **Güvenli Depolama**:
     - API anahtarlarını asla sürüm kontrol sistemlerine commit etmeyin
     - API anahtarlarını ortam değişkenlerinde veya güvenli bir kasa içinde saklayın
     - `.gitignore` ile git'ten hariç tutulan `.env` dosyalarını kullanın

  ## Risk Sorumluluk Reddi

  Bu yazılım yalnızca bilgilendirme amacıyla sağlanmaktadır. Bu yazılımı kripto para borsalarıyla etkileşim kurmak için kullanmak önemli riskleri içerir:

  - **Mali Risk**: Kripto para ticareti kayıp riski içerir
  - **API Güvenliği**: API anahtarlarınızın uygun izin sınırlamaları olduğundan emin olun
  - **Yatırım Tavsiyesi Değildir**: Bu araç yatırım tavsiyesi sağlamaz
  - **Garanti Yok**: Yazılım, herhangi bir tür garanti olmaksızın "olduğu gibi" sağlanır

  ## Lisans

  Bu proje MIT Lisansı altında lisanslanmıştır - ayrıntılar için [LICENSE.txt](LICENSE.txt) dosyasına bakınız.

  ## Telif Hakkı ve Atıf

  Bu proje CCXT library'sini (https://github.com/ccxt/ccxt) kullanır:

  ```
  Copyright (c) 2016-2024 CCXT developers
  ```

  CCXT, MIT Lisansı altında yayınlanır ve lisans aşağıdaki gibidir:

  ```
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
  ```

  ---

  Sorunlar, özellik istekleri veya katkılar için lütfen [GitHub repository](https://github.com/doggybee/mcp-server-ccxt)'sine ziyaret edin.
---

# CCXT MCP Server



![Version](https://img.shields.io/badge/version-1.2.1-blue.svg)
[![MCP Standard](https://img.shields.io/badge/MCP-Standard-green.svg)](https://www.modelcontextprotocol.org/)
[![CCXT](https://img.shields.io/badge/CCXT-4.0.0-orange.svg)](https://github.com/ccxt/ccxt)
[![smithery badge](https://smithery.ai/badge/@doggybee/mcp-server-ccxt)](https://smithery.ai/server/@doggybee/mcp-server-ccxt)

High-performance cryptocurrency exchange integration using MCP (Model Context Protocol) and CCXT.

## Features

- 🚀 **Exchange Support**: Connects to 20+ cryptocurrency exchanges
- 🔃 **Market Types**: Supports spot, futures, swap markets and more
- 🔧 **Proxy Configuration**: Options for accessing exchanges through proxies
- 📊 **Fast & Reliable**: Optimized caching and rate limiting
- 🌐 **MCP Standard**: Compatible with LLMs like Claude and GPT via MCP

## CCXT MCP Server Integration Architecture

![CCXT MCP Server Integration Architecture](https://raw.githubusercontent.com/doggybee/mcp-server-ccxt/HEAD/docs/images/mcp-integration.svg)

The CCXT MCP Server connects language models to cryptocurrency exchanges through the Model Context Protocol. It serves as a bridge that allows LLMs to access real-time market data and execute trading operations across multiple exchanges through a unified API.

The architecture includes:
- LLM clients (Claude and other MCP-compatible models) that send requests
- The Model Context Protocol (MCP) that standardizes communication
- The CCXT MCP Server that processes requests and manages exchange interactions
- The CCXT Library that provides unified access to exchange APIs
- Connections to multiple cryptocurrency exchanges

## CCXT MCP Server Code Architecture

![CCXT MCP Server Code Architecture](https://raw.githubusercontent.com/doggybee/mcp-server-ccxt/HEAD/docs/images/code-architecture.svg)

The server is organized into three main modules for better maintainability and extensibility:

- **Exchange**: Manages exchange instances, credentials, and symbol validation
- **Utils**: Provides caching, rate limiting, and logging functionality 
- **Tools**: Implements MCP tools and resources for exchange interaction

## Quick Start

### Installing via Smithery

To install mcp-server-ccxt for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@doggybee/mcp-server-ccxt):

```bash
npx -y @smithery/cli install @doggybee/mcp-server-ccxt --client claude
```

### NPM Package (Recommended)

You can install CCXT MCP Server from npm:

```bash
# Install globally
npm install -g @mcpfun/mcp-server-ccxt

# Start the server
mcp-server-ccxt
```

Or run directly:

```bash
npx @mcpfun/mcp-server-ccxt
```

### Manual Installation

Alternatively, you can clone and build the repository:

```bash
# Clone the repository
git clone https://github.com/doggybee/mcp-server-ccxt.git
cd mcp-server-ccxt

# Install dependencies
npm install

# Build the server
npm run build

# Start the server
npm start
```

## Configuration

1. Create an environment file
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file to add your exchange API keys
   ```
   # Default exchange (optional)
   DEFAULT_EXCHANGE=binance
   
   # Default market type (optional)
   DEFAULT_MARKET_TYPE=spot 
   
   # API credentials (optional)
   BINANCE_API_KEY=your_api_key
   BINANCE_SECRET=your_api_secret
   # For exchanges requiring passphrase (e.g., KuCoin)
   KUCOIN_API_KEY=your_kucoin_api_key
   KUCOIN_SECRET=your_kucoin_secret
   KUCOIN_PASSPHRASE=your_kucoin_passphrase
   
   # Proxy configuration (optional)
   USE_PROXY=false
   PROXY_URL=http://username:password@your-proxy-server:port
   # Legacy format (still supported but recommended to use the integrated URL format above)
   # PROXY_USERNAME=
   # PROXY_PASSWORD=
   ```

## Usage

> **Note**: If you encounter any issues with MCP communication, please see the [Troubleshooting Guide](docs/troubleshooting.md) for solutions.

### Running the Server

Start the server:

```bash
# If installed globally via npm
mcp-server-ccxt

# If installed manually
npm start
```

### Using with Claude for Desktop

1. Add the server to your `claude_desktop_config.json`:

If installed via npm (globally):
```json
{
  "mcpServers": {
    "ccxt": {
      "command": "mcp-server-ccxt"
    }
  }
}
```

If installed manually:
```json
{
  "mcpServers": {
    "ccxt": {
      "command": "node",
      "args": [
        "/path/to/mcp-server-ccxt/build/index.js"
      ]
    }
  }
}
```

2. Restart Claude for Desktop

### Using as a Module in Another Project

You can also use this package as a module in your own Node.js projects:

```javascript
// Import the CCXT MCP Server
import '@mcpfun/mcp-server-ccxt';

// The server starts automatically when imported
// You can configure it through environment variables
```

## Example Queries

Here are some example queries you can use with the MCP server:

- "What's the current price of Bitcoin on Binance?"
- "Show me the order book for ETH/USDT on Coinbase"
- "Get the 1-hour OHLCV data for BTC/USDT on Binance for the last 24 candles"
- "Compare the price of SOL/USDT across different exchanges"
- "What's my current balance on Binance?" (requires API keys)
- "Place a market buy order for 0.1 ETH on Kraken" (requires API keys)

## Available Tools

### Public API Tools

- `list-exchanges`: List all available cryptocurrency exchanges
- `get-ticker`: Get current ticker information for a trading pair
- `batch-get-tickers`: Get ticker information for multiple trading pairs at once
- `get-orderbook` / `get-order-book`: Get market order book for a trading pair
- `get-ohlcv`: Get OHLCV candlestick data for a trading pair
- `get-trades`: Get recent trades for a trading pair
- `get-markets`: Get all available markets for an exchange
- `get-exchange-info`: Get exchange information and status
- `get-leverage-tiers`: Get futures leverage tiers
- `get-funding-rates`: Get current funding rates
- `get-positions`: Get open positions information
- `get-open-orders`: Get all open orders
- `get-order-history`: Get order history

### Private API Tools (requires API keys)

- `account-balance`: Get your account balance from a crypto exchange
- `place-market-order`: Place a market order on an exchange
- `place-limit-order`: Place a limit order on an exchange
- `cancel-order`: Cancel an existing order
- `cancel-all-orders`: Cancel all open orders
- `set-leverage`: Set leverage for futures
- `set-margin-mode`: Set margin mode for futures
- `place-futures-market-order`: Place futures market orders
- `place-futures-limit-order`: Place futures limit orders
- `transfer-funds`: Transfer funds between accounts (e.g., spot to futures)

### Configuration & Utility Tools

- `cache-stats`: Get CCXT cache statistics
- `clear-cache`: Clear CCXT cache
- `set-log-level`: Set logging level
- `get-proxy-config`: Get proxy settings
- `set-proxy-config`: Configure proxy settings
- `set-market-type`: Set default market type
- `set-default-exchange`: Change the default exchange
- `system-info`: Get system and environment information

## Performance Optimizations

MCP-CCXT includes several optimizations to ensure high performance:

1. **LRU Caching System**:
   - Different TTLs for different types of data
   - Ticker data: 10 seconds
   - Order book data: 5 seconds
   - Market data: 1 hour

2. **Adaptive Rate Limiting**:
   - Automatically adjusts request rates based on exchange responses
   - Implements exponential backoff for errors
   - Manages concurrent requests per exchange

3. **Exchange Connection Management**:
   - Efficient initialization of exchange instances
   - Proper error handling and retries

## Security Best Practices

### API Key Security

1. **Create Dedicated API Keys**:
   - Create separate API keys for different applications/purposes
   - Never reuse API keys across different services or applications

2. **Limit API Key Permissions**:
   - Enable only the permissions you need (e.g., read-only for market data)
   - Disable withdrawal permissions if you only need trading functionality
   - Use IP whitelisting when available to restrict access to known IPs

3. **Secure Storage**:
   - Never commit API keys to version control systems
   - Store API keys in environment variables or a secure vault
   - Use `.env` files that are excluded from git via `.gitignore`

## Risk Disclaimer

This software is provided for informational purposes only. Using this software to interact with cryptocurrency exchanges involves significant risks:

- **Financial Risk**: Cryptocurrency trading involves risk of loss
- **API Security**: Ensure your API keys have appropriate permission limits
- **No Investment Advice**: This tool does not provide investment advice
- **No Warranty**: The software is provided "as is" without warranty of any kind

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.

## Copyright and Attribution

This project uses the CCXT library (https://github.com/ccxt/ccxt), which is:

```
Copyright (c) 2016-2024 CCXT developers
```

CCXT is released under the MIT License, which is included below:

```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

For issues, feature requests, or contributions, please visit [the GitHub repository](https://github.com/doggybee/mcp-server-ccxt).
