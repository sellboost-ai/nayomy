---
name: "kukapay/cryptopanic-mcp-server"
description: "Providing latest cryptocurrency news to AI agents, powered by CryptoPanic."
description_tr: "CryptoPanic tarafından desteklenen, AI ajanlarına en güncel kripto para haberleri sunmaktadır."
category: "Finance & Fintech"
repo: "kukapay/cryptopanic-mcp-server"
stars: 71
url: "https://github.com/kukapay/cryptopanic-mcp-server"
body_length: 1798
license: "MIT"
language: "Python"
body_tr: |-
  <a href="https://glama.ai/mcp/servers/dp6kztv7yx">
    
  </a>

  # cryptopanic-mcp-server

  AI ajanlarına en son kripto para haberleri sağlayın, [CryptoPanic](https://cryptopanic.com/) tarafından desteklenir.

  [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
  ![Status](https://img.shields.io/badge/status-active-brightgreen.svg)

  *[Kukapay News MCP](https://github.com/kukapay/kukapay-news-mcp)'i deneyin — API anahtarı gerekli değil, tam olarak AI tarafından açıklanmış*.

  ## Araçlar

  Server sadece bir araç uygular: 

  ```python
  get_crypto_news(kind: str = "news", num_pages: int = 1) -> str
  ```
  - `kind`: İçerik türü (news, media)
  - `num_pages`: Getirilecek sayfa sayısı (varsayılan: 1, maksimum: 10)

  Örnek Çıktı: 

  ```
  - Bitcoin Breaks $60k Resistance Amid ETF Optimism
  - Ethereum Layer 2 Solutions Gain Traction
  - New Crypto Regulations Proposed in EU
  - ...
  ```


  ## Yapılandırma

  - CryptoPanic API anahtarı ve API planı: [buradan](https://cryptopanic.com/developers/api/) alın
  - Yapılandırma dosyanıza bir server girişi ekleyin:

  ```
  "mcpServers": { 
    "cryptopanic-mcp-server": { 
      "command": "uv", 
      "args": [ 
        "--directory", 
        "/your/path/to/cryptopanic-mcp-server", 
        "run", 
        "main.py" 
      ], 
      "env": { 
        "CRYPTOPANIC_API_PLAN": "your_api_plan",
        "CRYPTOPANIC_API_KEY": "your_api_key" 
      } 
    } 
  }
  ```

  - `/your/path/to/cryptopanic-mcp-server` yerine gerçek kurulum yolunuzu yazın.
  - `CRYPTOPANIC_API_PLAN` ve `CRYPTOPANIC_API_KEY` yerine CryptoPanic'ten aldığınız API planınızı ve anahtarınızı yazın. 

  ## Lisans

  MIT Lisansı - `LICENSE` dosyasına bakın
---

<a href="https://glama.ai/mcp/servers/dp6kztv7yx">
  
</a>

# cryptopanic-mcp-server

Provide the latest cryptocurrency news to AI agents, powered by [CryptoPanic](https://cryptopanic.com/).

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
![Status](https://img.shields.io/badge/status-active-brightgreen.svg)

*Try [Kukapay News MCP](https://github.com/kukapay/kukapay-news-mcp) — no API key required, fully AI-annotated*.

## Tools

The server implements only one tool: 

```python
get_crypto_news(kind: str = "news", num_pages: int = 1) -> str
```
- `kind`: Content type (news, media)
- `num_pages`: Number of pages to fetch (default: 1, max: 10)

Example Output: 

```
- Bitcoin Breaks $60k Resistance Amid ETF Optimism
- Ethereum Layer 2 Solutions Gain Traction
- New Crypto Regulations Proposed in EU
- ...
```


## Configuration

- CryptoPanic API key & API plan: get one [here](https://cryptopanic.com/developers/api/)
- Add a server entry to your configuration file:

```
"mcpServers": { 
  "cryptopanic-mcp-server": { 
    "command": "uv", 
    "args": [ 
      "--directory", 
      "/your/path/to/cryptopanic-mcp-server", 
      "run", 
      "main.py" 
    ], 
    "env": { 
      "CRYPTOPANIC_API_PLAN": "your_api_plan",
      "CRYPTOPANIC_API_KEY": "your_api_key" 
    } 
  } 
}
```

- Replace `/your/path/to/cryptopanic-mcp-server` with your actual installation path.
- Replace `CRYPTOPANIC_API_PLAN` and `CRYPTOPANIC_API_KEY` with your API plan and key from CryptoPanic. 

## License

MIT License - see `LICENSE` file
