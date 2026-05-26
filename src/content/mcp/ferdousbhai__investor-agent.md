---
name: "ferdousbhai/investor-agent"
description: "Yahoo Finance integration to fetch stock market data including options recommendations"
description_tr: "Yahoo Finance entegrasyonu ile hisse senedi piyasası verilerine ve opsiyon önerilerine erişin."
category: "Finance & Fintech"
repo: "ferdousbhai/investor-agent"
stars: 329
url: "https://github.com/ferdousbhai/investor-agent"
body_length: 912
license: "MIT"
language: "TypeScript"
body_tr: |-
  # investor-agent

  Uzun vadeli yatırımcılar için finansal araştırma MCP sunucusu.

  ## Kurulum

  ```json
  {
    "mcpServers": {
      "investor-agent": {
        "command": "npx",
        "args": ["-y", "investor-agent"]
      }
    }
  }
  ```

  ## Araçlar

  | Araç | Açıklama |
  |------|----------|
  | `get_stock_info` | Hisse senedi temelleri — fiyat, finansal veriler, kazançlar, sahiplik, analist derecelendirmeleri, profil |
  | `historical_prices` | OHLCV fiyat geçmişi (varsayılan: 1 yıl haftalık, limit 100) |
  | `get_options` | Options kontratları açık faiza göre sıralanmış (varsayılan: tür başına top 25) |
  | `market_movers` | En çok kazanan, kaybeden veya en aktif hisse senetleri |
  | `earnings_calendar` | NASDAQ'dan yaklaşan kazanç raporları |
  | `fear_greed_index` | CNN borsa veya kripto Fear & Greed indeksi |
  | `technical_indicator` | SMA, EMA, RSI, MACD veya Bollinger Bands |

  ## Geliştirme

  ```bash
  pnpm install
  pnpm run test
  pnpm run typecheck
  ```

  ## Lisans

  MIT
---

# investor-agent

Financial research MCP server for long-term investors.

## Setup

```json
{
  "mcpServers": {
    "investor-agent": {
      "command": "npx",
      "args": ["-y", "investor-agent"]
    }
  }
}
```

## Tools

| Tool | Description |
|------|-------------|
| `get_stock_info` | Stock fundamentals — price, financials, earnings, ownership, analyst ratings, profile |
| `historical_prices` | OHLCV price history (default: 1 year weekly, limit 100) |
| `get_options` | Options contracts sorted by open interest (default: top 25 per type) |
| `market_movers` | Top gaining, losing, or most active stocks |
| `earnings_calendar` | Upcoming earnings reports from NASDAQ |
| `fear_greed_index` | CNN stock market or crypto Fear & Greed index |
| `technical_indicator` | SMA, EMA, RSI, MACD, or Bollinger Bands |

## Development

```bash
pnpm install
pnpm run test
pnpm run typecheck
```

## License

MIT
