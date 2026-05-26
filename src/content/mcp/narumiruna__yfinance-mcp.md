---
name: "narumiruna/yfinance-mcp"
description: "An MCP server that uses yfinance to obtain information from Yahoo Finance."
description_tr: "Yahoo Finance'ten veri almak için yfinance kullanan bir MCP sunucusu."
category: "Finance & Fintech"
repo: "narumiruna/yfinance-mcp"
stars: 144
url: "https://github.com/narumiruna/yfinance-mcp"
body_length: 11422
license: "MIT"
language: "Python"
body_tr: |-
  # Yahoo Finance MCP Server

  [![PyPI version](https://img.shields.io/pypi/v/yfmcp)](https://pypi.org/project/yfmcp/)
  [![Python](https://img.shields.io/pypi/pyversions/yfmcp.svg)](https://pypi.org/project/yfmcp/)
  [![CI](https://github.com/narumiruna/yfinance-mcp/actions/workflows/python.yml/badge.svg)](https://github.com/narumiruna/yfinance-mcp/actions/workflows/python.yml)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) sunucusu, yapay zeka asistanlarına [yfinance](https://github.com/ranaroussi/yfinance) aracılığıyla Yahoo Finance verilerine erişim sağlar. Hisse senedi bilgilerini, finansal haberleri, sektör sıralamalarını sorgulayın ve profesyonel finansal grafikler oluşturun — tümü AI sohbetinizden.

  <a href="https://glama.ai/mcp/servers/@narumiruna/yfinance-mcp">
    
  </a>

  ## Özellikler

  - **Hisse Senedi Verileri** — Şirket bilgileri, finansallar, değerleme metrikleri, temettüler ve ticari veriler
  - **Finansal Tablolar** — Gelir tablosu ve bilanço, geçmiş verilerle (EBIT, Yatırım Sermayesi, vb.)
  - **Finansal Haberler** — Herhangi bir ticker için son haberler ve basın açıklamaları
  - **Arama** — Yahoo Finance'de hisse senedi, ETF ve haberleri bulun
  - **Sektör Sıralamaları** — Sektöre göre en iyi ETF'ler, yatırım fonları, şirketler, büyüme liderleri ve en iyi performans gösterenler
  - **Fiyat Geçmişi** — Geçmiş OHLCV verileri markdown tabloları veya profesyonel grafikler olarak
  - **Grafik Oluşturma** — Mum, VWAP ve hacim profili grafikleri WebP görselleri olarak döndürülür
  - **Opsiyon Verileri** — Opsiyon zincirleri çağrı ve satım işlemleri, kullanım fiyatları, IV ve son kullanma tarihleri ile
  - **Sahiplik Verileri** — Büyük hissedarlar, kurumsal yatırımcılar, yatırım fonu sahipleri ve içeriden transfer işlemleri

  ## Araçlar

  ### `yfinance_get_ticker_info`

  Şirket bilgileri, finansallar, ticari metrikleri ve yönetim verilerini içeren kapsamlı hisse senedi verilerini alın.

  | Parametre | Tür | Gerekli | Açıklama |
  |-----------|------|---------|----------|
  | `symbol` | string | Evet | Hisse senedi ticker sembolü (örn. `AAPL`, `GOOGL`, `MSFT`) |

  **Döner:** Şirket detayları, fiyat verileri, değerleme metrikleri, ticari bilgiler, temettüler, finansallar ve performans göstergeleri içeren JSON nesnesi.

  ### `yfinance_get_ticker_news`

  Belirli bir hisse senedi için son haberler ve basın açıklamalarını alın.

  | Parametre | Tür | Gerekli | Açıklama |
  |-----------|------|---------|----------|
  | `symbol` | string | Evet | Hisse senedi ticker sembolü |

  **Döner:** Başlık, özet, yayın tarihi, sağlayıcı, URL ve küçük resim içeren haber öğelerinin JSON dizisi.

  ### `yfinance_search`

  Yahoo Finance'de hisse senedi, ETF ve haber makaleleri arayın.

  | Parametre | Tür | Gerekli | Açıklama |
  |-----------|------|---------|----------|
  | `query` | string | Evet | Arama sorgusu — şirket adı, ticker sembolü veya anahtar kelimeler |
  | `search_type` | string | Evet | `"all"` (fiyatlar + haberler), `"quotes"` (sadece hisse senetleri/ETF'ler) veya `"news"` (sadece makaleler) |

  **Döner:** `search_type`'a bağlı olarak eşleşen fiyatlar ve/veya haber sonuçları.

  ### `yfinance_get_top`

  Bir pazar sektörü içinde en iyi sıralanan finansal varlıkları alın.

  | Parametre | Tür | Gerekli | Açıklama |
  |-----------|------|---------|----------|
  | `sector` | string | Evet | Pazar sektörü (aşağıdaki [desteklenen sektörlere](#desteklenen-sektörler) bakın) |
  | `top_type` | string | Evet | `"top_etfs"`, `"top_mutual_funds"`, `"top_companies"`, `"top_growth_companies"` veya `"top_performing_companies"` |
  | `top_n` | number | Hayır | Döndürülecek sonuç sayısı (varsayılan: `10`, maksimum: `100`) |

  **Döner:** İlgili metrikleri içeren en iyi varlıkların JSON dizisi.

  #### Desteklenen Sektörler

  `Basic Materials`, `Communication Services`, `Consumer Cyclical`, `Consumer Defensive`, `Energy`, `Financial Services`, `Healthcare`, `Industrials`, `Real Estate`, `Technology`, `Utilities`

  ### `yfinance_get_price_history`

  Geçmiş fiyat verilerini alın ve isteğe bağlı olarak teknik analiz grafikleri oluşturun.

  | Parametre | Tür | Gerekli | Açıklama |
  |-----------|------|---------|----------|
  | `symbol` | string | Evet | Hisse senedi ticker sembolü |
  | `period` | string | Hayır | Zaman aralığı — `1d`, `5d`, `1mo`, `3mo`, `6mo`, `1y`, `2y`, `5y`, `10y`, `ytd`, `max` (varsayılan: `1mo`) |
  | `interval` | string | Hayır | Veri ayrıntı düzeyi — `1m`, `2m`, `5m`, `15m`, `30m`, `60m`, `90m`, `1h`, `1d`, `5d`, `1wk`, `1mo`, `3mo` (varsayılan: `1d`) |
  | `chart_type` | string | Hayır | Oluşturulacak grafik (tablo verisi için atla) |
  | `prepost` | boolean | Hayır | Mevcut olduğunda pazar öncesi ve pazar sonrası verilerini dahil et (varsayılan: `false`; `period="1d"`, `interval="1m"` gibi gün içi isteklerle kullanışlıdır) |

  **Grafik türleri:**

  | Değer | Açıklama |
  |-------|----------|
  | `"price_volume"` | Hacim çubukları ile mum grafikleri |
  | `"vwap"` | Volume Weighted Average Price overlay'i ile fiyat grafikleri |
  | `"volume_profile"` | Fiyat düzeyine göre hacim dağılımı ile mum grafikleri |

  **Döner:**
  - `chart_type` olmadan: Tarih, Açılış, En Yüksek, En Düşük, Kapanış, Hacim, Temettüler ve Hisse Bölümleri sütunları içeren Markdown tablosu.
  - `chart_type` ile: Verimli token kullanımı için Base64 kodlanmış WebP görüntü.

  ### `yfinance_get_financials`

  Finansal tablolar (gelir tablosu, bilanço ve nakit akışı) geçmiş verilerle alın.

  | Parametre | Tür | Gerekli | Açıklama |
  |-----------|------|---------|----------|
  | `symbol` | string | Evet | Hisse senedi ticker sembolü |
  | `frequency` | string | Hayır | `"annual"` (yıllık), `"quarterly"` (üç aylık) veya `"ttm"` (son on iki ay). Varsayılan: `"annual"` |

  **Döner:** Her raporlama döneminin gelir tablosu, bilanço ve nakit akışı verilerini içeren JSON nesnesi.

  - **Gelir Tablosu alanları**: EBIT, Net Gelir, Vergi Karşılığı, Vergi Öncesi Gelir, Faiz Gideri, Toplam Gelir, İşletme Geliri, EBITDA, Normalleştirilmiş Gelir
  - **Bilanço alanları**: Hissedarların Özkaynağı, Toplam Borç, Nakit ve Nakit Eşdeğerleri, Yatırım Sermayesi, Net Borç, Toplam Varlıklar, Toplam Yükümlülükler Net Azınlık Payı, Net Maddi Varlıklar, Maddi Kitap Değeri
  - **Nakit Akışı alanları**: İşletme Nakit Akışı, Serbest Nakit Akışı, Sermaye Harcaması, Devam Eden Operasyonlardan Net Gelir, Amortisman ve Itfa Payı, Çalışma Sermayesindeki Değişim, Ödenen Temettüler

  ### `yfinance_get_holders`

  Büyük hissedarlar, kurumsal hissedarlar, yatırım fonu sahipleri ve içeriden kişi verilerini alın.

  | Parametre | Tür | Gerekli | Açıklama |
  |-----------|------|---------|----------|
  | `symbol` | string | Evet | Hisse senedi ticker sembolü (örn. `AAPL`, `MSFT`) |
  | `max_rows` | number | Hayır | Her hissedar bölümü için döndürülen maksimum satırlar. Varsayılan: `10`. Tüm satırları döndürmek için `0` kullanın |

  **Döner:** Aşağıdakileri içeren JSON nesnesi:
  - **`major_holders`** — Toplanmış dağılım; her satırın bir `index` etiketi vardır (örn. `insidersPercentHeld`, `institutionsPercentHeld`, `institutionsFloatPercentHeld`, `institutionsCount`) ve bir `Value`
  - **`institutional_holders`** — Kurumsal yatırımcılar; kayıtlar tipik olarak `Date Reported`, `Holder`, `Shares`, `Value`, `pctChange`, `pctHeld` gibi alanları içerir
  - **`mutualfund_holders`** — Yatırım fonu sahipleri; kayıtlar kurumsal hissedarlarla benzer alanları içerir
  - **`insider_transactions`** — Son içeriden işlemler; kayıtlar tipik olarak `Shares`, `Value`, `Insider`, `Position`, `Transaction`, `Start Date`, `Ownership` gibi alanları içerir
  - **`insider_purchases`** — Altı ay özeti; her satır bir kategoriyi (Satın Almalar, Satışlar, Net Hisseler, vb.) tanımlar; kayıtlar tipik olarak `Insider Purchases Last 6m`, `Shares`, `Trans` gibi alanları içerir
  - **`insider_roster`** — Bilinen içeriden kişiler; kayıtlar tipik olarak `Name`, `Position`, `Shares Owned Directly`, `Most Recent Transaction`, `Latest Transaction Date` gibi alanları içerir
  - **`_metadata`** — Satır limiti metaveri `max_rows` ve bölüm başına `total_rows`, `returned_rows` ve `truncated` ile

  Hissedar bölümleri yanıtları kısa tutmak için varsayılan olarak 10 satırla sınırlıdır. Tam hissedar veri kümelerine ihtiyacınız olduğunda `max_rows: 0` geçirin. Hissedar ile ilgili veri kümeleri için alan adları `yfinance` tarafından sağlanır ve ticker'a, veri kullanılabilirliğine ve `yfinance` sürümüne göre değişebilir.

  ### `yfinance_get_option_dates`

  Bir hisse senedi için mevcut opsiyon son kullanma tarihlerini alın.

  | Parametre | Tür | Gerekli | Açıklama |
  |-----------|------|---------|----------|
  | `symbol` | string | Evet | Hisse senedi ticker sembolü (örn. `AAPL`, `MSFT`) |

  **Döner:** YYYY-MM-DD formatında son kullanma tarihlerinin JSON dizisi.

  ### `yfinance_get_option_chain`

  Bir hisse senedi için opsiyon zinciri verilerini (çağrı ve satış işlemleri) mevcut kullanım fiyatları ile alın.

  | Parametre | Tür | Gerekli | Açıklama |
  |-----------|------|---------|----------|
  | `symbol` | string | Evet | Hisse senedi ticker sembolü |
  | `expiration_date` | string | Hayır | YYYY-MM-DD formatında opsiyon son kullanma tarihi. Tüm tarihleri almak için atla. |
  | `option_type` | string | Hayır | `"calls"`, `"puts"` veya `"all"` (varsayılan: `"all"`) |

  **Döner:** Son kullanma tarihine göre anahtarlanmış JSON nesnesi; çağrı ve/veya satış işlemleri verilerini içerir:
  - `contractSymbol`: Opsiyon kontratı tanımlayıcısı
  - `strike`: Kullanım fiyatı
  - `lastPrice`: Son işlem gören fiyat
  - `bid`/`ask`: Alış ve satış fiyatları
  - `volume`: İşlem hacmi
  - `openInterest`: Açık faiz
  - `impliedVolatility`: IV
  - `inTheMoney`: Opsiyon ITM'de olup olmadığı
  - `contractSize`: Kontrat boyutu (REGULAR)
  - `currency`: Para birimi (USD)

  ## Kullanım

  ### uv aracılığıyla (önerilen)

  1. [uv'yi kurun](https://docs.astral.sh/uv/getting-started/installation/)
  2. MCP istemci yapılandırmanıza aşağıdakini ekleyin:

  ```json
  {
    "mcpServers": {
      "yfmcp": {
        "command": "uvx",
        "args": ["yfmcp@latest"]
      }
    }
  }
  ```

  ### Docker aracılığıyla

  ```json
  {
    "mcpServers": {
      "yfmcp": {
        "command": "docker",
        "args": ["run", "-i", "--rm", "narumi/yfinance-mcp"]
      }
    }
  }
  ```

  ### Kaynaktan

  1. Depoyu klonlayın ve bağımlılıkları kurun:

  ```bash
  git clone https://github.com/narumiruna/yfinance-mcp.git
  cd yfinance-mcp
  uv sync
  ```

  2. MCP istemci yapılandırmanıza aşağıdakini ekleyin:

  ```json
  {
    "mcpServers": {
      "yfmcp": {
        "command": "uv",
        "args": [
          "run",
          "--directory",
          "/path/to/yfinance-mcp",
          "yfmcp"
        ]
      }
    }
  }
  ```

  `/path/to/yfinance-mcp` yerine klonlanmış deponuzun gerçek yolunu yazın.

  ### Codex CLI ile Test Etme

  Bu depo `.codex/config.toml` içerir; bu, `uv run yfmcp` kullanan yerel `yfmcp` MCP sunucusunu Codex CLI için kaydeder. Depoyu klonladıktan ve `uv sync` çalıştırdıktan sonra, depo kökünden Codex CLI'yi açın ve aşağıdaki gibi istekleri deneyin:

  ```text
  Show VOO ticker info
  Show VOO price history for the last 5 days
  Find the ticker symbol for Toyota
  Get AAPL option expiration dates
  ```

  ## Geliştirme

  ### Ön Gereklilikler

  - Python ≥ 3.12
  - [uv](https://docs.astral.sh/uv/) paket yöneticisi

  ### Kurulum

  ```bash
  uv sync --extra dev
  ```

  ### Lint & Format

  ```bash
  uv run ruff check .
  uv run ruff format .
  ```

  ### Tür Kontrolü

  ```bash
  uv run ty check src tests
  ```

  ### Test

  ```bash
  uv run pytest -v -s --cov=src tests
  ```

  ## Demo Chatbot

  Demo chatbot'u ayrılmış deposunda gözleyin: [yfinance-mcp-demo](https://github.com/narumiruna/yfinance-mcp-demo)

  ## Katkıda Bulunanlar

  <a href="https://github.com/narumiruna/yfinance-mcp/graphs/contributors">
    
  </a>

  [contrib.rocks](https://contrib.rocks) ile yapılmıştır.

  ## Lisans

  Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.
---

# Yahoo Finance MCP Server

[![PyPI version](https://img.shields.io/pypi/v/yfmcp)](https://pypi.org/project/yfmcp/)
[![Python](https://img.shields.io/pypi/pyversions/yfmcp.svg)](https://pypi.org/project/yfmcp/)
[![CI](https://github.com/narumiruna/yfinance-mcp/actions/workflows/python.yml/badge.svg)](https://github.com/narumiruna/yfinance-mcp/actions/workflows/python.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server that provides AI assistants with access to Yahoo Finance data via [yfinance](https://github.com/ranaroussi/yfinance). Query stock information, financial news, sector rankings, and generate professional financial charts — all from your AI chat.

<a href="https://glama.ai/mcp/servers/@narumiruna/yfinance-mcp">
  
</a>

## Features

- **Stock Data** — Company info, financials, valuation metrics, dividends, and trading data
- **Financial Statements** — Income statement and balance sheet with historical data (EBIT, Invested Capital, etc.)
- **Financial News** — Recent news articles and press releases for any ticker
- **Search** — Find stocks, ETFs, and news across Yahoo Finance
- **Sector Rankings** — Top ETFs, mutual funds, companies, growth leaders, and top performers by sector
- **Price History** — Historical OHLCV data as markdown tables or professional charts
- **Chart Generation** — Candlestick, VWAP, and volume profile charts returned as WebP images
- **Options Data** — Option chains with calls, puts, strike prices, IV, and expiration dates
- **Ownership Data** — Major holders, institutional investors, mutual fund holders, and insider transactions

## Tools

### `yfinance_get_ticker_info`

Retrieve comprehensive stock data including company info, financials, trading metrics, and governance data.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `symbol` | string | Yes | Stock ticker symbol (e.g. `AAPL`, `GOOGL`, `MSFT`) |

**Returns:** JSON object with company details, price data, valuation metrics, trading info, dividends, financials, and performance indicators.

### `yfinance_get_ticker_news`

Fetch recent news articles and press releases for a specific stock.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `symbol` | string | Yes | Stock ticker symbol |

**Returns:** JSON array of news items with title, summary, publication date, provider, URL, and thumbnail.

### `yfinance_search`

Search Yahoo Finance for stocks, ETFs, and news articles.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `query` | string | Yes | Search query — company name, ticker symbol, or keywords |
| `search_type` | string | Yes | `"all"` (quotes + news), `"quotes"` (stocks/ETFs only), or `"news"` (articles only) |

**Returns:** Matching quotes and/or news results depending on `search_type`.

### `yfinance_get_top`

Get top-ranked financial entities within a market sector.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sector` | string | Yes | Market sector (see [supported sectors](#supported-sectors) below) |
| `top_type` | string | Yes | `"top_etfs"`, `"top_mutual_funds"`, `"top_companies"`, `"top_growth_companies"`, or `"top_performing_companies"` |
| `top_n` | number | No | Number of results to return (default: `10`, max: `100`) |

**Returns:** JSON array of top entities with relevant metrics.

#### Supported Sectors

`Basic Materials`, `Communication Services`, `Consumer Cyclical`, `Consumer Defensive`, `Energy`, `Financial Services`, `Healthcare`, `Industrials`, `Real Estate`, `Technology`, `Utilities`

### `yfinance_get_price_history`

Fetch historical price data and optionally generate technical analysis charts.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `symbol` | string | Yes | Stock ticker symbol |
| `period` | string | No | Time range — `1d`, `5d`, `1mo`, `3mo`, `6mo`, `1y`, `2y`, `5y`, `10y`, `ytd`, `max` (default: `1mo`) |
| `interval` | string | No | Data granularity — `1m`, `2m`, `5m`, `15m`, `30m`, `60m`, `90m`, `1h`, `1d`, `5d`, `1wk`, `1mo`, `3mo` (default: `1d`) |
| `chart_type` | string | No | Chart to generate (omit for tabular data) |
| `prepost` | boolean | No | Include pre-market and post-market data when available (default: `false`; useful with intraday requests like `period="1d"`, `interval="1m"`) |

**Chart types:**

| Value | Description |
|-------|-------------|
| `"price_volume"` | Candlestick chart with volume bars |
| `"vwap"` | Price chart with Volume Weighted Average Price overlay |
| `"volume_profile"` | Candlestick chart with volume distribution by price level |

**Returns:**
- Without `chart_type`: Markdown table with Date, Open, High, Low, Close, Volume, Dividends, and Stock Splits columns.
- With `chart_type`: Base64-encoded WebP image for efficient token usage.

### `yfinance_get_financials`

Fetch financial statements (income statement, balance sheet, and cash flow) with historical data.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `symbol` | string | Yes | Stock ticker symbol |
| `frequency` | string | No | `"annual"` (yearly), `"quarterly"` (quarterly), or `"ttm"` (trailing twelve months). Default: `"annual"` |

**Returns:** JSON object with income statement, balance sheet, and cash flow data for each reporting period.

- **Income Statement fields**: EBIT, Net Income, Tax Provision, Pretax Income, Interest Expense, Total Revenue, Operating Income, EBITDA, Normalized Income
- **Balance Sheet fields**: Stockholders Equity, Total Debt, Cash And Cash Equivalents, Invested Capital, Net Debt, Total Assets, Total Liabilities Net Minority Interest, Net Tangible Assets, Tangible Book Value
- **Cash Flow fields**: Operating Cash Flow, Free Cash Flow, Capital Expenditure, Net Income From Continuing Operations, Depreciation And Amortization, Change In Working Capital, Cash Dividends Paid

### `yfinance_get_holders`

Fetch major holders, institutional holders, mutual fund holders, and insider data.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `symbol` | string | Yes | Stock ticker symbol (e.g. `AAPL`, `MSFT`) |
| `max_rows` | number | No | Maximum rows returned per holder section. Default: `10`. Use `0` to return all rows |

**Returns:** JSON object with:
- **`major_holders`** — Aggregated breakdown where each row has an `index` label (e.g. `insidersPercentHeld`, `institutionsPercentHeld`, `institutionsFloatPercentHeld`, `institutionsCount`) and a `Value`
- **`institutional_holders`** — Institutional investors; records typically include fields such as `Date Reported`, `Holder`, `Shares`, `Value`, `pctChange`, `pctHeld`
- **`mutualfund_holders`** — Mutual fund holders; records typically include fields similar to institutional holders
- **`insider_transactions`** — Recent insider trades; records typically include fields such as `Shares`, `Value`, `Insider`, `Position`, `Transaction`, `Start Date`, `Ownership`
- **`insider_purchases`** — Six-month summary where each row describes a category (Purchases, Sales, Net Shares, etc.); records typically include fields such as `Insider Purchases Last 6m`, `Shares`, `Trans`
- **`insider_roster`** — Known insiders; records typically include fields such as `Name`, `Position`, `Shares Owned Directly`, `Most Recent Transaction`, `Latest Transaction Date`
- **`_metadata`** — Row limit metadata with `max_rows` and per-section `total_rows`, `returned_rows`, and `truncated`

Holder sections are limited to 10 rows by default to keep responses concise. Pass `max_rows: 0` when you need the complete holder datasets. Field names for holder-related datasets are provided by `yfinance` and may vary by ticker, data availability, and `yfinance` version.

### `yfinance_get_option_dates`

Fetch available option expiration dates for a stock.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `symbol` | string | Yes | Stock ticker symbol (e.g. `AAPL`, `MSFT`) |

**Returns:** JSON array of expiration dates in YYYY-MM-DD format.

### `yfinance_get_option_chain`

Fetch option chain data (calls and puts) for a stock with available strike prices.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `symbol` | string | Yes | Stock ticker symbol |
| `expiration_date` | string | No | Option expiration date in YYYY-MM-DD format. Omit to fetch all dates. |
| `option_type` | string | No | `"calls"`, `"puts"`, or `"all"` (default: `"all"`) |

**Returns:** JSON object keyed by expiration date, with calls and/or puts data including:
- `contractSymbol`: Option contract identifier
- `strike`: Strike price
- `lastPrice`: Last traded price
- `bid`/`ask`: Bid and ask prices
- `volume`: Trading volume
- `openInterest`: Open interest
- `impliedVolatility`: IV
- `inTheMoney`: Whether option is ITM
- `contractSize`: Contract size (REGULAR)
- `currency`: Currency (USD)

## Usage

### Via uv (recommended)

1. [Install uv](https://docs.astral.sh/uv/getting-started/installation/)
2. Add the following to your MCP client configuration:

```json
{
  "mcpServers": {
    "yfmcp": {
      "command": "uvx",
      "args": ["yfmcp@latest"]
    }
  }
}
```

### Via Docker

```json
{
  "mcpServers": {
    "yfmcp": {
      "command": "docker",
      "args": ["run", "-i", "--rm", "narumi/yfinance-mcp"]
    }
  }
}
```

### From Source

1. Clone the repository and install dependencies:

```bash
git clone https://github.com/narumiruna/yfinance-mcp.git
cd yfinance-mcp
uv sync
```

2. Add the following to your MCP client configuration:

```json
{
  "mcpServers": {
    "yfmcp": {
      "command": "uv",
      "args": [
        "run",
        "--directory",
        "/path/to/yfinance-mcp",
        "yfmcp"
      ]
    }
  }
}
```

Replace `/path/to/yfinance-mcp` with the actual path to your cloned repository.

### Testing with Codex CLI

This repository includes `.codex/config.toml`, which registers the local `yfmcp` MCP server for Codex CLI using `uv run yfmcp`. After cloning the repository and running `uv sync`, open Codex CLI from the repository root and try prompts such as:

```text
Show VOO ticker info
Show VOO price history for the last 5 days
Find the ticker symbol for Toyota
Get AAPL option expiration dates
```

## Development

### Prerequisites

- Python ≥ 3.12
- [uv](https://docs.astral.sh/uv/) package manager

### Setup

```bash
uv sync --extra dev
```

### Lint & Format

```bash
uv run ruff check .
uv run ruff format .
```

### Type Check

```bash
uv run ty check src tests
```

### Test

```bash
uv run pytest -v -s --cov=src tests
```

## Demo Chatbot

See the demo chatbot in its dedicated repository: [yfinance-mcp-demo](https://github.com/narumiruna/yfinance-mcp-demo)

## Contributors

<a href="https://github.com/narumiruna/yfinance-mcp/graphs/contributors">
  
</a>

Made with [contrib.rocks](https://contrib.rocks).

## License

This project is licensed under the [MIT License](LICENSE).
