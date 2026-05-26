---
name: "kukapay/crypto-indicators-mcp"
description: "An MCP server providing a range of cryptocurrency technical analysis indicators and strategie."
description_tr: "Çeşitli kripto para teknik analiz göstergeleri ve stratejileri sunan bir MCP server."
category: "Finance & Fintech"
repo: "kukapay/crypto-indicators-mcp"
stars: 123
url: "https://github.com/kukapay/crypto-indicators-mcp"
body_length: 9965
license: "MIT"
language: "JavaScript"
body_tr: |-
  # Crypto Indicators MCP Server

  Bir dizi kripto para teknik analiz göstergesi ve stratejisi sağlayan MCP sunucusu, AI ticaret ajanlarının pazar trendlerini verimli bir şekilde analiz etmesine ve sağlam nicel stratejiler geliştirmesine olanak tanır.

  Daha fazla kripto para ile ilgili MCP sunucuları için bkz. [Kukapay MCP servers](https://github.com/kukapay/kukapay-mcp-servers).

  [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
  ![Status](https://img.shields.io/badge/status-active-brightgreen.svg)

  ## Özellikler

  - **Teknik Göstergeler**: Trend, momentum, volatilite ve hacim kategorilerinde 50+ gösterge.
  - **Ticaret Stratejileri**: Sinyal çıktısı veren ilgili stratejiler: `-1` (SAT), `0` (BEKLE), `1` (AL).
  - **Esnek Veri Kaynağı**: Varsayılan olarak Binance'a ayarlanmış, herhangi bir `ccxt` destekli exchange'e yapılandırılabilir.
  - **Modüler Tasarım**: Göstergeler ve stratejiler kolay bakım için kategorize edilmiştir.

  ## Kurulum

  ### Ön Koşullar

  - [Node.js](https://nodejs.org/) (v18.x veya daha yüksek)
  - npm (v8.x veya daha yüksek)

  ### Adımlar

  1. **Depoyu Klonlayın**:
     ```bash
     git clone https://github.com/kukapay/crypto-indicators-mcp.git
     cd crypto-indicators-mcp
     ```

  2. **Bağımlılıkları Kurun**:
     ```bash
     npm install
     ```

  3. **MCP İstemcisini Yapılandırın**:
     Bu sunucuyu Claude Desktop gibi bir MCP istemcisiyle kullanmak için aşağıdakini yapılandırma dosyanıza (veya eşdeğerine) ekleyin:
     ```json
      {
        "mcpServers": {
          "crypto-indicators-mcp": {
            "command": "node",
            "args": ["path/to/crypto-indicators-mcp/index.js"],
            "env": {
              "EXCHANGE_NAME": "binance"
            }
          }
        }
      }   
      ```

  ## Kullanılabilir Araçlar

  ### Trend Göstergeleri
  - `calculate_absolute_price_oscillator`: Trend gücünü belirlemek için iki EMA arasındaki farkı ölçer (APO).
  - `calculate_aroon`: Yüksek/düşük fiyat uç noktalarını kullanarak trend değişikliklerini ve gücünü tanımlar (Aroon).
  - `calculate_balance_of_power`: Fiyat hareketine dayalı alış ve satış baskısını ölçer (BOP).
  - `calculate_chande_forecast_oscillator`: Geçmiş trendlere göre gelecek fiyat hareketlerini tahmin eder (CFO).
  - `calculate_commodity_channel_index`: Aşırı alım/satım koşullarını ve trend tersine dönüşlerini tespit eder (CCI).
  - `calculate_double_exponential_moving_average`: Trend tespiti için azaltılmış gecikme ile fiyat verilerini düzleştirir (DEMA).
  - `calculate_exponential_moving_average`: Trend analizi için son fiyatları daha ağırlıklı olarak değerlendirir (EMA).
  - `calculate_mass_index`: Aralık genişlemesini ölçerek olası tersine dönüşleri tanımlar (MI).
  - `calculate_moving_average_convergence_divergence`: EMA farklarıyla momentum ve trend yönünü izler (MACD).
  - `calculate_moving_max`: Dönem içindeki maksimum fiyatı hesaplar (MMAX).
  - `calculate_moving_min`: Dönem içindeki minimum fiyatı hesaplar (MMIN).
  - `calculate_moving_sum`: Dönem içindeki fiyatların toplamını hesaplar (MSUM).
  - `calculate_parabolic_sar`: Trend takibi için durdur ve tersine dön noktaları sağlar (PSAR).
  - `calculate_qstick`: Açılış-kapanış farklarına dayalı alış/satış baskısını ölçer (Qstick).
  - `calculate_kdj`: Trend analizi için stokastik ve momentum sinyallerini birleştirir (KDJ).
  - `calculate_rolling_moving_average`: Daha düzgün trend takibi için dönen EMA uygular (RMA).
  - `calculate_simple_moving_average`: Trendleri belirlemek için dönem içindeki fiyatları ortalaması (SMA).
  - `calculate_since_change`: Son önemli fiyat değişikliğinden bu yana geçen süreyi izler.
  - `calculate_triple_exponential_moving_average`: Trend netliği için DEMA'dan daha fazla gecikme azaltır (TEMA).
  - `calculate_triangular_moving_average`: Daha düzgün trendler için orta fiyatları daha ağırlıklı olarak değerlendirir (TRIMA).
  - `calculate_triple_exponential_average`: Üçlü düzleştirme ile momentum ölçer (TRIX).
  - `calculate_typical_price`: Dengeli trend görünümü için yüksek, düşük ve kapanış fiyatlarını ortalaması.
  - `calculate_volume_weighted_moving_average`: Trend gücü için hacmi hareketli ortalamalara dahil eder (VWMA).
  - `calculate_vortex`: Gerçek aralığı kullanarak trend yönü ve gücünü tanımlar (Vortex).

  ### Momentum Göstergeleri
  - `calculate_awesome_oscillator`: Orta hat çaprazlamalarını kullanarak pazar momentumunu ölçer (AO).
  - `calculate_chaikin_oscillator`: Birikme/dağılım momentumunu izler (CMO).
  - `calculate_ichimoku_cloud`: Destek, direnç ve momentumun kapsamlı bir görünümünü sağlar (Ichimoku).
  - `calculate_percentage_price_oscillator`: MACD'yi momentum için yüzde olarak normalleştirir (PPO).
  - `calculate_percentage_volume_oscillator`: EMA farklarıyla hacim momentumunu ölçer (PVO).
  - `calculate_price_rate_of_change`: Fiyat momentumunu yüzdesel değişim olarak izler (ROC).
  - `calculate_relative_strength_index`: Momentum aracılığıyla aşırı alım/satım koşullarını tanımlar (RSI).
  - `calculate_stochastic_oscillator`: Momentum sinyalleri için kapanış fiyatlarını aralıklarla karşılaştırır (STOCH).
  - `calculate_williams_r`: Momentum'u son yüksek-düşük aralıklarına göre ölçer (Williams %R).

  ### Volatilite Göstergeleri
  - `calculate_acceleration_bands`: Dinamik volatilite bantlarıyla fiyat hareketini çerçeveler (AB).
  - `calculate_average_true_range`: Fiyat aralıklarına dayalı pazar volatilitesini ölçer (ATR).
  - `calculate_bollinger_bands`: Volatilite tabanlı bantlarla fiyat hareketini kapsayan (BB).
  - `calculate_bollinger_bands_width`: Bant genişliği değişiklikleriyle volatiliteyi ölçer (BBW).
  - `calculate_chandelier_exit`: Volatiliteye dayalı takip eden stop-kayıpları ayarlar (CE).
  - `calculate_donchian_channel`: Yüksek/düşük fiyat kanallarıyla volatiliteyi izler (DC).
  - `calculate_keltner_channel`: Volatilite bantları için ATR ve EMA'yı birleştirir (KC).
  - `calculate_moving_standard_deviation`: Volatilite için fiyat sapmasını ölçer (MSTD).
  - `calculate_projection_oscillator`: Volatiliteyi öngörülen fiyatlara göre değerlendirir (PO).
  - `calculate_true_range`: Volatilite analizi için günlük fiyat aralığını hesaplar (TR).
  - `calculate_ulcer_index`: Aşağı yönlü volatiliteyi ve düşüşleri ölçer (UI).

  ### Hacim Göstergeleri
  - `calculate_accumulation_distribution`: Fiyat trendlerini doğrulamak için hacim akışını izler (AD).
  - `calculate_chaikin_money_flow`: Hacim ile alış/satış baskısını ölçer (CMF).
  - `calculate_ease_of_movement`: Hacim ile fiyatların ne kadar kolay hareket ettiğini değerlendirir (EMV).
  - `calculate_force_index`: Momentum gücü için fiyat ve hacmi birleştirir (FI).
  - `calculate_money_flow_index`: Fiyat-hacim ile aşırı alım/satımı tanımlar (MFI).
  - `calculate_negative_volume_index`: Daha düşük hacim günlerinde fiyat değişikliklerini izler (NVI).
  - `calculate_on_balance_volume`: Fiyat hareketlerini tahmin etmek için hacmi biriktirir (OBV).
  - `calculate_volume_price_trend`: Trend doğrulaması için hacim ve fiyatı birleştirir (VPT).
  - `calculate_volume_weighted_average_price`: Fiyatları hacim ile ağırlıklandırılmış olarak ortalaması (VWAP).

  ### Trend Stratejileri
  - `calculate_absolute_price_oscillator_strategy`: APO çaprazlamalarından alış/satış sinyalleri oluşturur (APO Stratejisi).
  - `calculate_aroon_strategy`: Aroon çaprazlamalarını kullanarak trend tersine dönüş sinyalleri (Aroon Stratejisi).
  - `calculate_balance_of_power_strategy`: BOP eşiklerine dayalı sinyaller yayınlar (BOP Stratejisi).
  - `calculate_chande_forecast_oscillator_strategy`: CFO sinyalleriyle tersine dönüşleri tahmin eder (CFO Stratejisi).
  - `calculate_kdj_strategy`: Trend tabanlı sinyallerle KDJ hatlarını birleştirir (KDJ Stratejisi).
  - `calculate_macd_strategy`: Ticaret sinyalleri için MACD çaprazlamalarını kullanır (MACD Stratejisi).
  - `calculate_parabolic_sar_strategy`: PSAR kaymalarıyla trend yönü sinyalleri (PSAR Stratejisi).
  - `calculate_typical_price_strategy`: Tipik fiyat trendlerinden sinyaller oluşturur.
  - `calculate_volume_weighted_moving_average_strategy`: VWMA çaprazlamalarına dayalı sinyaller yayınlar (VWMA Stratejisi).
  - `calculate_vortex_strategy`: Vortex çaprazlamalarıyla trend yönü sinyalleri (Vortex Stratejisi).

  ### Momentum Stratejileri
  - `calculate_momentum_strategy`: Momentum yönüne dayalı sinyaller yayınlar.
  - `calculate_awesome_oscillator_strategy`: AO çaprazlamalarıyla momentum kaymalarını sinyal eder (AO Stratejisi).
  - `calculate_ichimoku_cloud_strategy`: Ichimoku bulut konumlarından sinyaller oluşturur (Ichimoku Stratejisi).
  - `calculate_rsi2_strategy`: RSI eşikleriyle aşırı alım/satımı sinyal eder (RSI Stratejisi).
  - `calculate_stochastic_oscillator_strategy`: Sinyaller için stokastik çaprazlamalarını kullanır (STOCH Stratejisi).
  - `calculate_williams_r_strategy`: Williams %R ile momentum tersine dönüş sinyalleri (Williams %R Stratejisi).

  ### Volatilite Stratejileri
  - `calculate_acceleration_bands_strategy`: Hızlanma bantlarıyla kırılma sinyalleri (AB Stratejisi).
  - `calculate_bollinger_bands_strategy`: Bollinger Bant ihlallerinden sinyaller yayınlar (BB Stratejisi).
  - `calculate_projection_oscillator_strategy`: PO ile volatilite kaymaları sinyal eder (PO Stratejisi).

  ### Hacim Stratejileri
  - `calculate_chaikin_money_flow_strategy`: CMF ile hacim baskısını sinyal eder (CMF Stratejisi).
  - `calculate_ease_of_movement_strategy`: EMV trendlerine dayalı sinyaller yayınlar (EMV Stratejisi).
  - `calculate_force_index_strategy`: Kuvvet endeksi kaymalarıyla momentum sinyalleri (FI Stratejisi).
  - `calculate_money_flow_index_strategy`: MFI ile aşırı alım/satımı sinyal eder (MFI Stratejisi).
  - `calculate_negative_volume_index_strategy`: NVI değişiklikleriyle trendleri sinyal eder (NVI Stratejisi).
  - `calculate_volume_weighted_average_price_strategy`: VWAP çaprazlamalarından sinyaller yayınlar (VWAP Stratejisi).

  ## Kullanım Örnekleri

  ### Örnek 1: MACD Göstergesini Hesaplayın

  **Giriş (Doğal Dil İstemi)**:
  ```
  BTC/USDT için 1 saatlik zaman diliminde MACD'yi hızlı dönem 12, yavaş dönem 26, sinyal dönem 9 ve 100 veri noktası ile hesapla.
  ```

  **Çıkış**:
  ```
  {"macd": [...], "signal": [...], "histogram": [...]}
  ```

  ### Örnek 2: RSI Stratejisini Hesaplayın

  **Giriş (Doğal Dil İstemi)**:
  ```
  ETH/USDT için 4 saatlik zaman diliminde RSI strateji sinyallerini 14 dönem ve 50 veri noktasıyla ver.
  ```

  **Çıkış**:
  ```
  [-1, 0, 1, 0, ...]
  ```

  ## Lisans

  Bu proje MIT Lisansı altında lisanslanmıştır - ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.
---

# Crypto Indicators MCP Server

An MCP server providing a range of cryptocurrency technical analysis indicators and strategies, empowering AI trading agents to efficiently analyze market trends and develop robust quantitative strategies.

For more crypto-related MCP servers, see the [Kukapay MCP servers](https://github.com/kukapay/kukapay-mcp-servers).

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
![Status](https://img.shields.io/badge/status-active-brightgreen.svg)

## Features

- **Technical Indicators**: 50+ indicators across trend, momentum, volatility, and volume categories.
- **Trading Strategies**: Corresponding strategies outputting signals: `-1` (SELL), `0` (HOLD), `1` (BUY).
- **Flexible Data Source**: Defaults to Binance, configurable to any `ccxt`-supported exchange.
- **Modular Design**: Indicators and strategies are categorized for easy maintenance.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or higher)
- npm (v8.x or higher)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/kukapay/crypto-indicators-mcp.git
   cd crypto-indicators-mcp
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure MCP Client**:
   To use this server with an MCP client like Claude Desktop, add the following to your config file (or equivalent):
   ```json
    {
      "mcpServers": {
        "crypto-indicators-mcp": {
          "command": "node",
          "args": ["path/to/crypto-indicators-mcp/index.js"],
          "env": {
            "EXCHANGE_NAME": "binance"
          }
        }
      }
    }   
    ```

## Available Tools

### Trend Indicators
- `calculate_absolute_price_oscillator`: Measures the difference between two EMAs to identify trend strength (APO).
- `calculate_aroon`: Identifies trend changes and strength using high/low price extremes (Aroon).
- `calculate_balance_of_power`: Gauges buying vs. selling pressure based on price movement (BOP).
- `calculate_chande_forecast_oscillator`: Predicts future price movements relative to past trends (CFO).
- `calculate_commodity_channel_index`: Detects overbought/oversold conditions and trend reversals (CCI).
- `calculate_double_exponential_moving_average`: Smooths price data with reduced lag for trend detection (DEMA).
- `calculate_exponential_moving_average`: Weights recent prices more heavily for trend analysis (EMA).
- `calculate_mass_index`: Identifies potential reversals by measuring range expansion (MI).
- `calculate_moving_average_convergence_divergence`: Tracks momentum and trend direction via EMA differences (MACD).
- `calculate_moving_max`: Computes the maximum price over a rolling period (MMAX).
- `calculate_moving_min`: Computes the minimum price over a rolling period (MMIN).
- `calculate_moving_sum`: Calculates the sum of prices over a rolling period (MSUM).
- `calculate_parabolic_sar`: Provides stop-and-reverse points for trend following (PSAR).
- `calculate_qstick`: Measures buying/selling pressure based on open-close differences (Qstick).
- `calculate_kdj`: Combines stochastic and momentum signals for trend analysis (KDJ).
- `calculate_rolling_moving_average`: Applies a rolling EMA for smoother trend tracking (RMA).
- `calculate_simple_moving_average`: Averages prices over a period to identify trends (SMA).
- `calculate_since_change`: Tracks the time since the last significant price change.
- `calculate_triple_exponential_moving_average`: Reduces lag further than DEMA for trend clarity (TEMA).
- `calculate_triangular_moving_average`: Weights middle prices more for smoother trends (TRIMA).
- `calculate_triple_exponential_average`: Measures momentum with triple smoothing (TRIX).
- `calculate_typical_price`: Averages high, low, and close prices for a balanced trend view.
- `calculate_volume_weighted_moving_average`: Incorporates volume into moving averages for trend strength (VWMA).
- `calculate_vortex`: Identifies trend direction and strength using true range (Vortex).

### Momentum Indicators
- `calculate_awesome_oscillator`: Measures market momentum using midline crossovers (AO).
- `calculate_chaikin_oscillator`: Tracks accumulation/distribution momentum (CMO).
- `calculate_ichimoku_cloud`: Provides a comprehensive view of support, resistance, and momentum (Ichimoku).
- `calculate_percentage_price_oscillator`: Normalizes MACD as a percentage for momentum (PPO).
- `calculate_percentage_volume_oscillator`: Measures volume momentum via EMA differences (PVO).
- `calculate_price_rate_of_change`: Tracks price momentum as a percentage change (ROC).
- `calculate_relative_strength_index`: Identifies overbought/oversold conditions via momentum (RSI).
- `calculate_stochastic_oscillator`: Compares closing prices to ranges for momentum signals (STOCH).
- `calculate_williams_r`: Measures momentum relative to recent high-low ranges (Williams %R).

### Volatility Indicators
- `calculate_acceleration_bands`: Frames price action with dynamic volatility bands (AB).
- `calculate_average_true_range`: Measures market volatility based on price ranges (ATR).
- `calculate_bollinger_bands`: Encloses price action with volatility-based bands (BB).
- `calculate_bollinger_bands_width`: Quantifies volatility via band width changes (BBW).
- `calculate_chandelier_exit`: Sets trailing stop-losses based on volatility (CE).
- `calculate_donchian_channel`: Tracks volatility with high/low price channels (DC).
- `calculate_keltner_channel`: Combines ATR and EMA for volatility bands (KC).
- `calculate_moving_standard_deviation`: Measures price deviation for volatility (MSTD).
- `calculate_projection_oscillator`: Assesses volatility relative to projected prices (PO).
- `calculate_true_range`: Calculates daily price range for volatility analysis (TR).
- `calculate_ulcer_index`: Quantifies downside volatility and drawdowns (UI).

### Volume Indicators
- `calculate_accumulation_distribution`: Tracks volume flow to confirm price trends (AD).
- `calculate_chaikin_money_flow`: Measures buying/selling pressure with volume (CMF).
- `calculate_ease_of_movement`: Assesses how easily prices move with volume (EMV).
- `calculate_force_index`: Combines price and volume for momentum strength (FI).
- `calculate_money_flow_index`: Identifies overbought/oversold via price-volume (MFI).
- `calculate_negative_volume_index`: Tracks price changes on lower volume days (NVI).
- `calculate_on_balance_volume`: Accumulates volume to predict price movements (OBV).
- `calculate_volume_price_trend`: Combines volume and price for trend confirmation (VPT).
- `calculate_volume_weighted_average_price`: Averages prices weighted by volume (VWAP).

### Trend Strategies
- `calculate_absolute_price_oscillator_strategy`: Generates buy/sell signals from APO crossovers (APO Strategy).
- `calculate_aroon_strategy`: Signals trend reversals using Aroon crossovers (Aroon Strategy).
- `calculate_balance_of_power_strategy`: Issues signals based on BOP thresholds (BOP Strategy).
- `calculate_chande_forecast_oscillator_strategy`: Predicts reversals with CFO signals (CFO Strategy).
- `calculate_kdj_strategy`: Combines KDJ lines for trend-based signals (KDJ Strategy).
- `calculate_macd_strategy`: Uses MACD crossovers for trading signals (MACD Strategy).
- `calculate_parabolic_sar_strategy`: Signals trend direction with PSAR shifts (PSAR Strategy).
- `calculate_typical_price_strategy`: Generates signals from typical price trends.
- `calculate_volume_weighted_moving_average_strategy`: Issues signals based on VWMA crossovers (VWMA Strategy).
- `calculate_vortex_strategy`: Signals trend direction with Vortex crossovers (Vortex Strategy).

### Momentum Strategies
- `calculate_momentum_strategy`: Issues signals based on momentum direction.
- `calculate_awesome_oscillator_strategy`: Signals momentum shifts with AO crossovers (AO Strategy).
- `calculate_ichimoku_cloud_strategy`: Generates signals from Ichimoku cloud positions (Ichimoku Strategy).
- `calculate_rsi2_strategy`: Signals overbought/oversold with RSI thresholds (RSI Strategy).
- `calculate_stochastic_oscillator_strategy`: Uses stochastic crossovers for signals (STOCH Strategy).
- `calculate_williams_r_strategy`: Signals momentum reversals with Williams %R (Williams %R Strategy).

### Volatility Strategies
- `calculate_acceleration_bands_strategy`: Signals breakouts with acceleration bands (AB Strategy).
- `calculate_bollinger_bands_strategy`: Issues signals from Bollinger Band breaches (BB Strategy).
- `calculate_projection_oscillator_strategy`: Signals volatility shifts with PO (PO Strategy).

### Volume Strategies
- `calculate_chaikin_money_flow_strategy`: Signals volume pressure with CMF (CMF Strategy).
- `calculate_ease_of_movement_strategy`: Issues signals based on EMV trends (EMV Strategy).
- `calculate_force_index_strategy`: Signals momentum with force index shifts (FI Strategy).
- `calculate_money_flow_index_strategy`: Signals overbought/oversold with MFI (MFI Strategy).
- `calculate_negative_volume_index_strategy`: Signals trends with NVI changes (NVI Strategy).
- `calculate_volume_weighted_average_price_strategy`: Issues signals from VWAP crossovers (VWAP Strategy).

## Usage Examples

### Example 1: Calculate MACD Indicator

**Input (Natural Language Prompt)**:
```
Calculate the MACD for BTC/USDT on a 1-hour timeframe with fast period 12, slow period 26, signal period 9, and fetch 100 data points.
```

**Output**:
```
{"macd": [...], "signal": [...], "histogram": [...]}
```

### Example 2: Calculate RSI Strategy

**Input (Natural Language Prompt)**:
```
Give me the RSI strategy signals for ETH/USDT on a 4-hour timeframe with a period of 14 and 50 data points.
```

**Output**:
```
[-1, 0, 1, 0, ...]
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
