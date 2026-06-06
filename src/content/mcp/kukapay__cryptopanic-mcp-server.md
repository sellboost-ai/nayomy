---
name: "kukapay/cryptopanic-mcp-server"
description: "Providing latest cryptocurrency news to AI agents, powered by CryptoPanic."
category: "Finance & Fintech"
repo: "kukapay/cryptopanic-mcp-server"
stars: 71
url: "https://github.com/kukapay/cryptopanic-mcp-server"
body_length: 1798
license: "MIT"
language: "Python"
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
