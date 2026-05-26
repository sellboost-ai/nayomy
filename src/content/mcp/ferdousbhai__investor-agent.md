---
name: "ferdousbhai/investor-agent"
description: "Yahoo Finance integration to fetch stock market data including options recommendations"
category: "Finance & Fintech"
repo: "ferdousbhai/investor-agent"
stars: 329
url: "https://github.com/ferdousbhai/investor-agent"
body_length: 912
license: "MIT"
language: "TypeScript"
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
