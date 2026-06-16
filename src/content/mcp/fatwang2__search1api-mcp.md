---
name: "fatwang2/search1api-mcp"
description: "Search via search1api (requires paid API key)"
category: "Search & Data Extraction"
repo: "fatwang2/search1api-mcp"
stars: 172
url: "https://github.com/fatwang2/search1api-mcp"
body_length: 4732
license: "MIT"
language: "TypeScript"
body_tr: |-
  # Search1API MCP Server

  [中文文档](./README_zh.md)

  [Search1API](https://www.search1api.com/?utm_source=mcp) için resmi MCP sunucusu — web araması, haberler, crawling ve daha fazlası tek bir API'de.

  ## API Anahtarınızı Alın

  1. [Search1API](https://www.search1api.com/?utm_source=mcp) adresinde kayıt olun
  2. Dashboard'dan API anahtarınızı alın

  ## Hızlı Başlangıç (Uzak MCP)

  Kurulum gerekli değildir. MCP istemcinizi uzak URL ve API anahtarınız ile yapılandırmanız yeterlidir.

  ### Kimlik Doğrulama

  İki yöntem desteklenir — istemcinizin desteklediği herhangi birini kullanın:

  | Yöntem | Format |
  |--------|--------|
  | Authorization Header | `Authorization: Bearer YOUR_SEARCH1API_KEY` |
  | URL Query Parameter | `https://mcp.search1api.com/mcp?apiKey=YOUR_SEARCH1API_KEY` |

  ### Claude Desktop

  ```json
  {
    "mcpServers": {
      "search1api": {
        "url": "https://mcp.search1api.com/mcp",
        "headers": {
          "Authorization": "Bearer YOUR_SEARCH1API_KEY"
        }
      }
    }
  }
  ```

  ### Claude.ai (Web)

  Settings > Connectors > Add custom connector:

  ```
  https://mcp.search1api.com/mcp?apiKey=YOUR_SEARCH1API_KEY
  ```

  ### Cursor

  ```json
  {
    "mcpServers": {
      "search1api": {
        "url": "https://mcp.search1api.com/mcp",
        "headers": {
          "Authorization": "Bearer YOUR_SEARCH1API_KEY"
        }
      }
    }
  }
  ```

  ### VS Code

  ```json
  {
    "servers": {
      "search1api": {
        "type": "http",
        "url": "https://mcp.search1api.com/mcp",
        "headers": {
          "Authorization": "Bearer YOUR_SEARCH1API_KEY"
        }
      }
    }
  }
  ```

  ### Claude Code

  ```bash
  claude mcp add --transport http search1api https://mcp.search1api.com/mcp \
    --header "Authorization: Bearer YOUR_SEARCH1API_KEY"
  ```

  ### Windsurf

  ```json
  {
    "mcpServers": {
      "search1api": {
        "serverUrl": "https://mcp.search1api.com/mcp?apiKey=YOUR_SEARCH1API_KEY"
      }
    }
  }
  ```

  ## Agent Skill

  Agent Skill [search1api-cli](https://github.com/fatwang2/search1api-cli) adresine taşınmıştır. Şu komutla yükleyin:

  ```bash
  npm install -g search1api-cli
  npx skills add fatwang2/search1api-cli
  ```

  ## Yerel Mod (stdio)

  Sunucuyu yerel olarak çalıştırmayı tercih ederseniz, npx kullanın — klonlama gerekli değildir:

  ```json
  {
    "mcpServers": {
      "search1api": {
        "command": "npx",
        "args": ["-y", "search1api-mcp"],
        "env": {
          "SEARCH1API_KEY": "YOUR_SEARCH1API_KEY"
        }
      }
    }
  }
  ```

  ## Araçlar

  ### search
  Search1API kullanarak web'de arama yapın.

  | Parametre | Gerekli | Varsayılan | Açıklama |
  |-----------|---------|------------|----------|
  | `query` | Evet | - | Arama sorgusu |
  | `max_results` | Hayır | 10 | Sonuç sayısı |
  | `search_service` | Hayır | google | google, bing, duckduckgo, yahoo, x, reddit, github, youtube, arxiv, wechat, bilibili, imdb, wikipedia |
  | `crawl_results` | Hayır | 0 | Tam içerik için crawl edilecek sonuç sayısı |
  | `include_sites` | Hayır | [] | Dahil edilecek siteler |
  | `exclude_sites` | Hayır | [] | Hariç tutulacak siteler |
  | `time_range` | Hayır | - | day, month, year |

  ### news
  Haber makalelerinde arama yapın.

  | Parametre | Gerekli | Varsayılan | Açıklama |
  |-----------|---------|------------|----------|
  | `query` | Evet | - | Arama sorgusu |
  | `max_results` | Hayır | 10 | Sonuç sayısı |
  | `search_service` | Hayır | bing | google, bing, duckduckgo, yahoo, hackernews |
  | `crawl_results` | Hayır | 0 | Tam içerik için crawl edilecek sonuç sayısı |
  | `include_sites` | Hayır | [] | Dahil edilecek siteler |
  | `exclude_sites` | Hayır | [] | Hariç tutulacak siteler |
  | `time_range` | Hayır | - | day, month, year |

  ### crawl
  Bir URL'den içerik çıkartın.

  | Parametre | Gerekli | Açıklama |
  |-----------|---------|----------|
  | `url` | Evet | Crawl edilecek URL |

  ### sitemap
  Bir URL'den tüm ilgili bağlantıları alın.

  | Parametre | Gerekli | Açıklama |
  |-----------|---------|----------|
  | `url` | Evet | Sitemap alınacak URL |

  ### reasoning
  DeepSeek R1 ile derin düşünme ve karmaşık problem çözme.

  | Parametre | Gerekli | Açıklama |
  |-----------|---------|----------|
  | `content` | Evet | Soru veya problem |

  ### trending
  Popüler platformlardan trend olan konuları alın.

  | Parametre | Gerekli | Varsayılan | Açıklama |
  |-----------|---------|------------|----------|
  | `search_service` | Evet | - | github, hackernews |
  | `max_results` | Hayır | 10 | Öğe sayısı |

  ## Sürüm Geçmişi

  - v0.3.0: Streamable HTTP üzerinden uzak MCP desteği; oturum başına API anahtar kimlik doğrulaması
  - v0.2.0: LibreChat entegrasyonu için fallback `.env` desteği
  - v0.1.8: X (Twitter) ve Reddit arama servisleri
  - v0.1.7: GitHub ve Hacker News için trending aracı
  - v0.1.6: Wikipedia arama servisi
  - v0.1.5: Yeni arama parametreleri ve servisleri (arxiv, wechat, bilibili, imdb)
  - v0.1.4: DeepSeek R1 ile reasoning aracı
  - v0.1.3: Haber araması
  - v0.1.2: Sitemap
  - v0.1.1: Web crawling
  - v0.1.0: İlk sürüm

  ## Lisans

  MIT
---

# Search1API MCP Server

[中文文档](./README_zh.md)

The official MCP server for [Search1API](https://www.search1api.com/?utm_source=mcp) — web search, news, crawling, and more in one API.

## Get Your API Key

1. Register at [Search1API](https://www.search1api.com/?utm_source=mcp)
2. Get your API key from the dashboard

## Quick Start (Remote MCP)

No installation required. Just configure your MCP client with the remote URL and your API key.

### Authentication

Two methods are supported — use whichever your client supports:

| Method | Format |
|--------|--------|
| Authorization Header | `Authorization: Bearer YOUR_SEARCH1API_KEY` |
| URL Query Parameter | `https://mcp.search1api.com/mcp?apiKey=YOUR_SEARCH1API_KEY` |

### Claude Desktop

```json
{
  "mcpServers": {
    "search1api": {
      "url": "https://mcp.search1api.com/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_SEARCH1API_KEY"
      }
    }
  }
}
```

### Claude.ai (Web)

Settings > Connectors > Add custom connector:

```
https://mcp.search1api.com/mcp?apiKey=YOUR_SEARCH1API_KEY
```

### Cursor

```json
{
  "mcpServers": {
    "search1api": {
      "url": "https://mcp.search1api.com/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_SEARCH1API_KEY"
      }
    }
  }
}
```

### VS Code

```json
{
  "servers": {
    "search1api": {
      "type": "http",
      "url": "https://mcp.search1api.com/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_SEARCH1API_KEY"
      }
    }
  }
}
```

### Claude Code

```bash
claude mcp add --transport http search1api https://mcp.search1api.com/mcp \
  --header "Authorization: Bearer YOUR_SEARCH1API_KEY"
```

### Windsurf

```json
{
  "mcpServers": {
    "search1api": {
      "serverUrl": "https://mcp.search1api.com/mcp?apiKey=YOUR_SEARCH1API_KEY"
    }
  }
}
```

## Agent Skill

The Agent Skill has moved to [search1api-cli](https://github.com/fatwang2/search1api-cli). Install it with:

```bash
npm install -g search1api-cli
npx skills add fatwang2/search1api-cli
```

## Local Mode (stdio)

If you prefer to run the server locally, use npx — no cloning required:

```json
{
  "mcpServers": {
    "search1api": {
      "command": "npx",
      "args": ["-y", "search1api-mcp"],
      "env": {
        "SEARCH1API_KEY": "YOUR_SEARCH1API_KEY"
      }
    }
  }
}
```

## Tools

### search
Search the web using Search1API.

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| `query` | Yes | - | Search query |
| `max_results` | No | 10 | Number of results |
| `search_service` | No | google | google, bing, duckduckgo, yahoo, x, reddit, github, youtube, arxiv, wechat, bilibili, imdb, wikipedia |
| `crawl_results` | No | 0 | Number of results to crawl for full content |
| `include_sites` | No | [] | Sites to include |
| `exclude_sites` | No | [] | Sites to exclude |
| `time_range` | No | - | day, month, year |

### news
Search for news articles.

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| `query` | Yes | - | Search query |
| `max_results` | No | 10 | Number of results |
| `search_service` | No | bing | google, bing, duckduckgo, yahoo, hackernews |
| `crawl_results` | No | 0 | Number of results to crawl for full content |
| `include_sites` | No | [] | Sites to include |
| `exclude_sites` | No | [] | Sites to exclude |
| `time_range` | No | - | day, month, year |

### crawl
Extract content from a URL.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `url` | Yes | URL to crawl |

### sitemap
Get all related links from a URL.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `url` | Yes | URL to get sitemap |

### reasoning
Deep thinking and complex problem solving with DeepSeek R1.

| Parameter | Required | Description |
|-----------|----------|-------------|
| `content` | Yes | The question or problem |

### trending
Get trending topics from popular platforms.

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| `search_service` | Yes | - | github, hackernews |
| `max_results` | No | 10 | Number of items |

## Version History

- v0.3.0: Remote MCP support via Streamable HTTP; per-session API key authentication
- v0.2.0: Fallback `.env` support for LibreChat integration
- v0.1.8: X (Twitter) and Reddit search services
- v0.1.7: Trending tool for GitHub and Hacker News
- v0.1.6: Wikipedia search service
- v0.1.5: New search parameters and services (arxiv, wechat, bilibili, imdb)
- v0.1.4: Reasoning tool with DeepSeek R1
- v0.1.3: News search
- v0.1.2: Sitemap
- v0.1.1: Web crawling
- v0.1.0: Initial release

## License

MIT
