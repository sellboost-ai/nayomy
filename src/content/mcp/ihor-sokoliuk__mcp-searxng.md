---
name: "ihor-sokoliuk/mcp-searxng"
description: "A Model Context Protocol Server for SearXNG"
category: "Search & Data Extraction"
repo: "ihor-sokoliuk/mcp-searxng"
stars: 814
url: "https://github.com/ihor-sokoliuk/mcp-searxng"
body_length: 6435
license: "MIT"
language: "TypeScript"
body_tr: |-
  # SearXNG MCP Server

  Bir [MCP server](https://modelcontextprotocol.org/introduction), [SearXNG](https://docs.searxng.org) API'sini entegre eder ve yapay zeka asistanlarına web arama yetenekleri sağlar.

  [![https://nodei.co/npm/mcp-searxng.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/mcp-searxng.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/mcp-searxng)

  [![https://badgen.net/docker/pulls/isokoliuk/mcp-searxng](https://badgen.net/docker/pulls/isokoliuk/mcp-searxng)](https://hub.docker.com/r/isokoliuk/mcp-searxng)

  <a href="https://glama.ai/mcp/servers/0j7jjyt7m9"></a>

  ## Hızlı Başlangıç

  MCP client yapılandırmanıza ekleyin (örneğin `claude_desktop_config.json`):

  ```json
  {
    "mcpServers": {
      "searxng": {
        "command": "npx",
        "args": ["-y", "mcp-searxng"],
        "env": {
          "SEARXNG_URL": "YOUR_SEARXNG_INSTANCE_URL"
        }
      }
    }
  }
  ```

  `YOUR_SEARXNG_INSTANCE_URL` yerine SearXNG örneğinizin URL'sini yazın (örneğin `https://search.example.com`).

  ## Özellikler

  - **Web Arama**: Genel sorgular, haberler, makaleler ve sayfalandırma.
  - **URL İçeriği Okuma**: Sayfalandırma, bölüm filtreleme ve başlık çıkarma ile geliştiş içerik çıkarma.
  - **Akıllı Önbellekleme**: URL içeriği TTL (Time-To-Live) ile önbelleğe alınır ve performansı iyileştirir, gereksiz istekleri azaltır.
  - **Sayfalandırma**: Hangi sonuç sayfasının alınacağını kontrol edin.
  - **Zaman Filtreleme**: Sonuçları zaman aralığına göre filtreleyin (gün, ay, yıl).
  - **Dil Seçimi**: Sonuçları tercih edilen dile göre filtreleyin.
  - **Güvenli Arama**: Arama sonuçları için içerik filtreleme seviyesini kontrol edin.

  ## Nasıl Çalışır

  `mcp-searxng` bağımsız bir MCP server'ıdır — yapay zeka asistanının web arama için bağlandığı ayrı bir Node.js işlemidir. Herhangi bir SearXNG örneğini HTTP JSON API'si aracılığıyla sorgular.

  > **SearXNG plugin'i değildir:** Bu proje, yerel SearXNG plugin'i olarak yüklenemez. `SEARXNG_URL` ayarlayarak mevcut herhangi bir SearXNG örneğine işaret edin.

  ```
  Yapay Zeka Asistanı (örneğin Claude)
          │  MCP protokolü
          ▼
    mcp-searxng  (bu proje — Node.js işlemi)
          │  HTTP JSON API  (SEARXNG_URL)
          ▼
    SearXNG örneği
  ```

  ## Araçlar

  - **searxng_web_search**
    - Sayfalandırma ile web araması yapın
    - Girdiler:
      - `query` (string): Arama sorgusu. Bu dize harici arama hizmetlerine iletilir.
      - `pageno` (number, isteğe bağlı): Arama sayfası numarası, 1'den başlar (varsayılan 1)
      - `time_range` (string, isteğe bağlı): Sonuçları zaman aralığına göre filtreleyin - biri: "day", "month", "year" (varsayılan: hiçbiri)
      - `language` (string, isteğe bağlı): Sonuçlar için dil kodu (örneğin, "en", "fr", "de") veya "all" (varsayılan: "all")
      - `safesearch` (number, isteğe bağlı): Güvenli arama filtresi seviyesi (0: Hiçbiri, 1: Orta, 2: Sıkı) (varsayılan: örnek ayarı)

  - **web_url_read**
    - Gelişmiş içerik çıkarma seçenekleri ile bir URL'den içerik okuyun ve markdown'a dönüştürün
    - Girdiler:
      - `url` (string): Getirip işlenecek URL
      - `startChar` (number, isteğe bağlı): İçerik çıkarma için başlangıç karakter konumu (varsayılan: 0)
      - `maxLength` (number, isteğe bağlı): Döndürülecek maksimum karakter sayısı
      - `section` (string, isteğe bağlı): Belirli bir başlık altında içerik çıkarın (başlık metnini arar)
      - `paragraphRange` (string, isteğe bağlı): Belirli paragraf aralıklarını döndürün (örneğin, '1-5', '3', '10-')
      - `readHeadings` (boolean, isteğe bağlı): Tam içerik yerine yalnızca başlıkların listesini döndürün

  ## Kurulum

  <details>
  <summary>NPM (global kurulum)</summary>

  ```bash
  npm install -g mcp-searxng
  ```

  ```json
  {
    "mcpServers": {
      "searxng": {
        "command": "mcp-searxng",
        "env": {
          "SEARXNG_URL": "YOUR_SEARXNG_INSTANCE_URL"
        }
      }
    }
  }
  ```

  </details>

  <details>
  <summary>Docker</summary>

  **Önceden oluşturulmuş görüntü:**

  ```bash
  docker pull isokoliuk/mcp-searxng:latest
  ```

  ```json
  {
    "mcpServers": {
      "searxng": {
        "command": "docker",
        "args": [
          "run", "-i", "--rm",
          "-e", "SEARXNG_URL",
          "isokoliuk/mcp-searxng:latest"
        ],
        "env": {
          "SEARXNG_URL": "YOUR_SEARXNG_INSTANCE_URL"
        }
      }
    }
  }
  ```

  Ek ortam değişkenleri iletmek için `args`'a `-e VAR_NAME` ekleyin ve değişkeni `env`'a ekleyin.

  **Yerel olarak derleyin:**

  ```bash
  docker build -t mcp-searxng:latest -f Dockerfile .
  ```

  Yukarıdaki aynı yapılandırmayı kullanın, `isokoliuk/mcp-searxng:latest` yerine `mcp-searxng:latest` yazın.

  </details>

  <details>
  <summary>Docker Compose</summary>

  `docker-compose.yml`:

  ```yaml
  services:
    mcp-searxng:
      image: isokoliuk/mcp-searxng:latest
      stdin_open: true
      environment:
        - SEARXNG_URL=YOUR_SEARXNG_INSTANCE_URL
        # Gerektiğinde isteğe bağlı değişkenler ekleyin — bkz. CONFIGURATION.md
  ```

  MCP client yapılandırması:

  ```json
  {
    "mcpServers": {
      "searxng": {
        "command": "docker-compose",
        "args": ["run", "--rm", "mcp-searxng"]
      }
    }
  }
  ```

  </details>

  <details>
  <summary>HTTP Taşıması</summary>

  Varsayılan olarak server STDIO kullanır. HTTP modunu etkinleştirmek için `MCP_HTTP_PORT` ayarlayın:

  ```json
  {
    "mcpServers": {
      "searxng-http": {
        "command": "mcp-searxng",
        "env": {
          "SEARXNG_URL": "YOUR_SEARXNG_INSTANCE_URL",
          "MCP_HTTP_PORT": "3000"
        }
      }
    }
  }
  ```

  **Uç noktalar:** `POST/GET/DELETE /mcp` (MCP protokolü), `GET /health` (sağlık kontrolü)

  **Bunu deneyin:**

  ```bash
  MCP_HTTP_PORT=3000 SEARXNG_URL=http://localhost:8080 mcp-searxng
  curl http://localhost:3000/health
  ```

  </details>

  ## Yapılandırma

  `SEARXNG_URL` ortam değişkenini SearXNG örneğiniz URL'sine ayarlayın. Diğer tüm değişkenler isteğe bağlıdır.

  Tam ortam değişkeni referansı: [CONFIGURATION.md](CONFIGURATION.md)

  ## Sorun Giderme

  ### SearXNG'den 403 Forbidden

  SearXNG örneğinizin muhtemelen JSON format devre dışıdır. `settings.yml` dosyasını düzenleyin (genellikle `/etc/searxng/settings.yml`):

  ```yaml
  search:
    formats:
      - html
      - json
  ```

  SearXNG'yi yeniden başlatın (`docker restart searxng`) ardından doğrulayın:

  ```bash
  curl 'http://localhost:8080/search?q=test&format=json'
  ```

  Bir JSON yanıtı almalısınız. Değilse, dosyanın doğru şekilde monte edildiğini ve YAML girintisinin geçerli olduğunu onaylayın.

  Ayrıca bkz: [SearXNG settings docs](https://docs.searxng.org/admin/settings/settings.html) · [tartışma](https://github.com/searxng/searxng/discussions/1789)

  ## Katkıda Bulunma

  Bkz. [CONTRIBUTING.md](CONTRIBUTING.md)

  ## Lisans

  MIT — ayrıntılar için [LICENSE](LICENSE) dosyasını inceleyin.
---

# SearXNG MCP Server

An [MCP server](https://modelcontextprotocol.io/introduction) that integrates the [SearXNG](https://docs.searxng.org) API, giving AI assistants web search capabilities.

[![https://nodei.co/npm/mcp-searxng.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/mcp-searxng.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/mcp-searxng)

[![https://badgen.net/docker/pulls/isokoliuk/mcp-searxng](https://badgen.net/docker/pulls/isokoliuk/mcp-searxng)](https://hub.docker.com/r/isokoliuk/mcp-searxng)

<a href="https://glama.ai/mcp/servers/0j7jjyt7m9"></a>

## Quick Start

Add to your MCP client configuration (e.g. `claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "searxng": {
      "command": "npx",
      "args": ["-y", "mcp-searxng"],
      "env": {
        "SEARXNG_URL": "YOUR_SEARXNG_INSTANCE_URL"
      }
    }
  }
}
```

Replace `YOUR_SEARXNG_INSTANCE_URL` with the URL of your SearXNG instance (e.g. `https://search.example.com`).

## Features

- **Web Search**: General queries, news, articles, with pagination.
- **URL Content Reading**: Advanced content extraction with pagination, section filtering, and heading extraction.
- **Intelligent Caching**: URL content is cached with TTL (Time-To-Live) to improve performance and reduce redundant requests.
- **Pagination**: Control which page of results to retrieve.
- **Time Filtering**: Filter results by time range (day, month, year).
- **Language Selection**: Filter results by preferred language.
- **Safe Search**: Control content filtering level for search results.

## How It Works

`mcp-searxng` is a standalone MCP server — a separate Node.js process that your AI assistant connects to for web search. It queries any SearXNG instance via its HTTP JSON API.

> **Not a SearXNG plugin:** This project cannot be installed as a native SearXNG plugin. Point it at any existing SearXNG instance by setting `SEARXNG_URL`.

```
AI Assistant (e.g. Claude)
        │  MCP protocol
        ▼
  mcp-searxng  (this project — Node.js process)
        │  HTTP JSON API  (SEARXNG_URL)
        ▼
  SearXNG instance
```

## Tools

- **searxng_web_search**
  - Execute web searches with pagination
  - Inputs:
    - `query` (string): The search query. This string is passed to external search services.
    - `pageno` (number, optional): Search page number, starts at 1 (default 1)
    - `time_range` (string, optional): Filter results by time range - one of: "day", "month", "year" (default: none)
    - `language` (string, optional): Language code for results (e.g., "en", "fr", "de") or "all" (default: "all")
    - `safesearch` (number, optional): Safe search filter level (0: None, 1: Moderate, 2: Strict) (default: instance setting)

- **web_url_read**
  - Read and convert the content from a URL to markdown with advanced content extraction options
  - Inputs:
    - `url` (string): The URL to fetch and process
    - `startChar` (number, optional): Starting character position for content extraction (default: 0)
    - `maxLength` (number, optional): Maximum number of characters to return
    - `section` (string, optional): Extract content under a specific heading (searches for heading text)
    - `paragraphRange` (string, optional): Return specific paragraph ranges (e.g., '1-5', '3', '10-')
    - `readHeadings` (boolean, optional): Return only a list of headings instead of full content

## Installation

<details>
<summary>NPM (global install)</summary>

```bash
npm install -g mcp-searxng
```

```json
{
  "mcpServers": {
    "searxng": {
      "command": "mcp-searxng",
      "env": {
        "SEARXNG_URL": "YOUR_SEARXNG_INSTANCE_URL"
      }
    }
  }
}
```

</details>

<details>
<summary>Docker</summary>

**Pre-built image:**

```bash
docker pull isokoliuk/mcp-searxng:latest
```

```json
{
  "mcpServers": {
    "searxng": {
      "command": "docker",
      "args": [
        "run", "-i", "--rm",
        "-e", "SEARXNG_URL",
        "isokoliuk/mcp-searxng:latest"
      ],
      "env": {
        "SEARXNG_URL": "YOUR_SEARXNG_INSTANCE_URL"
      }
    }
  }
}
```

To pass additional env vars, add `-e VAR_NAME` to `args` and the variable to `env`.

**Build locally:**

```bash
docker build -t mcp-searxng:latest -f Dockerfile .
```

Use the same config above, replacing `isokoliuk/mcp-searxng:latest` with `mcp-searxng:latest`.

</details>

<details>
<summary>Docker Compose</summary>

`docker-compose.yml`:

```yaml
services:
  mcp-searxng:
    image: isokoliuk/mcp-searxng:latest
    stdin_open: true
    environment:
      - SEARXNG_URL=YOUR_SEARXNG_INSTANCE_URL
      # Add optional variables as needed — see CONFIGURATION.md
```

MCP client config:

```json
{
  "mcpServers": {
    "searxng": {
      "command": "docker-compose",
      "args": ["run", "--rm", "mcp-searxng"]
    }
  }
}
```

</details>

<details>
<summary>HTTP Transport</summary>

By default the server uses STDIO. Set `MCP_HTTP_PORT` to enable HTTP mode:

```json
{
  "mcpServers": {
    "searxng-http": {
      "command": "mcp-searxng",
      "env": {
        "SEARXNG_URL": "YOUR_SEARXNG_INSTANCE_URL",
        "MCP_HTTP_PORT": "3000"
      }
    }
  }
}
```

**Endpoints:** `POST/GET/DELETE /mcp` (MCP protocol), `GET /health` (health check)

**Test it:**

```bash
MCP_HTTP_PORT=3000 SEARXNG_URL=http://localhost:8080 mcp-searxng
curl http://localhost:3000/health
```

</details>

## Configuration

Set `SEARXNG_URL` to your SearXNG instance URL. All other variables are optional.

Full environment variable reference: [CONFIGURATION.md](CONFIGURATION.md)

## Troubleshooting

### 403 Forbidden from SearXNG

Your SearXNG instance likely has JSON format disabled. Edit `settings.yml` (usually `/etc/searxng/settings.yml`):

```yaml
search:
  formats:
    - html
    - json
```

Restart SearXNG (`docker restart searxng`) then verify:

```bash
curl 'http://localhost:8080/search?q=test&format=json'
```

You should receive a JSON response. If not, confirm the file is correctly mounted and YAML indentation is valid.

See also: [SearXNG settings docs](https://docs.searxng.org/admin/settings/settings.html) · [discussion](https://github.com/searxng/searxng/discussions/1789)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

MIT — see [LICENSE](LICENSE) for details.
