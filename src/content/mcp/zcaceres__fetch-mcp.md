---
name: "zcaceres/fetch-mcp"
description: "An MCP server to flexibly fetch JSON, text, and HTML data"
category: "Developer Tools"
repo: "zcaceres/fetch-mcp"
stars: 764
url: "https://github.com/zcaceres/fetch-mcp"
body_length: 4562
license: "MIT"
language: "TypeScript"
body_tr: |-
  # Fetch MCP Server

  ![fetch mcp logo](https://raw.githubusercontent.com/zcaceres/fetch-mcp/HEAD/logo.jpg)

  [![npm version](https://img.shields.io/npm/v/mcp-fetch-server.svg)](https://www.npmjs.com/package/mcp-fetch-server)

  Web içeriğini birden çok formatta getirmek için bir MCP sunucusu — HTML, JSON, düz metin, Markdown, okunabilir makale içeriği ve YouTube transkriptleri.

  <a href="https://glama.ai/mcp/servers/nu09wf23ao">
    
  </a>

  ## Araçlar

  Tüm araçlar aşağıdaki ortak parametreleri kabul eder:

  | Parametre | Tür | Gerekli | Açıklama |
  |-----------|-----|---------|----------|
  | `url` | string | Evet | Getirilecek URL |
  | `headers` | object | Hayır | İstekte eklenecek özel başlıklar |
  | `max_length` | number | Hayır | Döndürülecek maksimum karakter (varsayılan: 5000) |
  | `start_index` | number | Hayır | Bu karakter indeksinden başla (varsayılan: 0) |
  | `proxy` | string | Hayır | Proxy URL'si (örn. `http://proxy:8080`) |

  - **fetch_html** — Bir web sitesini getir ve ham HTML içeriğini döndür.

  - **fetch_markdown** — Bir web sitesini getir ve içeriğini Markdown'a dönüştürerek döndür.

  - **fetch_txt** — Bir web sitesini getir ve HTML etiketleri, scriptler ve stiller kaldırılmış düz metni döndür.

  - **fetch_json** — Bir URL'yi getir ve JSON yanıtını döndür.

  - **fetch_readable** — Bir web sitesini getir ve ana makale içeriğini [Mozilla Readability](https://github.com/mozilla/readability) kullanarak çıkar, Markdown olarak döndür. Navigasyon, reklamlar ve boilerplate'i kaldırır. Makaleler ve blog yazıları için idealdi.

  - **fetch_youtube_transcript** — Bir YouTube videosunun başlıklarını/transkriptini getir. Varsa `yt-dlp` kullanır, aksi takdirde sayfadan doğrudan çıkarır. Alt yazı dilini seçmek için ek `lang` parametresini kabul eder (varsayılan: `"en"`).

  ## Kurulum

  ### MCP sunucusu olarak

  MCP istemci yapılandırmanıza ekleyin:

  ```json
  {
    "mcpServers": {
      "fetch": {
        "command": "npx",
        "args": ["mcp-fetch-server"]
      }
    }
  }
  ```

  ### CLI olarak

  ```bash
  npx mcp-fetch <command> <url> [flags]
  ```

  Veya global olarak yükleyin:

  ```bash
  npm install -g mcp-fetch-server
  mcp-fetch <command> <url> [flags]
  ```

  ## CLI Kullanımı

  ```
  mcp-fetch <command> <url> [flags]
  ```

  ### Komutlar

  | Komut | Açıklama |
  |-------|----------|
  | `html` | Bir URL'yi getir ve ham HTML döndür |
  | `markdown` | Bir URL'yi getir ve Markdown döndür |
  | `readable` | Bir URL'yi getir ve makale içeriğini Markdown olarak döndür (Readability aracılığıyla) |
  | `txt` | Bir URL'yi getir ve düz metin döndür |
  | `json` | Bir URL'yi getir ve JSON döndür |
  | `youtube` | Bir YouTube videosunun transkriptini getir |

  ### Bayraklar

  | Bayrak | Açıklama |
  |--------|----------|
  | `--max-length <N>` | Döndürülecek maksimum karakter |
  | `--start-index <N>` | Bu karakter indeksinden başla |
  | `--proxy <URL>` | Proxy URL'si |
  | `--lang <code>` | YouTube transkriptleri için dil kodu (varsayılan: `en`) |
  | `--help` | Yardım mesajını göster |
  | `--version` | Sürümü göster |

  ### Örnekler

  ```bash
  # Bir sayfayı markdown olarak getir
  mcp-fetch markdown https://example.com

  # Boilerplate olmadan makale içeriğini çıkar
  mcp-fetch readable https://example.com/blog/post

  # YouTube transkriptini İspanyolca olarak al
  mcp-fetch youtube https://www.youtube.com/watch?v=dQw4w9WgXcQ --lang es

  # Uzunluk sınırıyla getir
  mcp-fetch html https://example.com --max-length 10000

  # Proxy aracılığıyla getir
  mcp-fetch json https://api.example.com/data --proxy http://proxy:8080
  ```

  ## Ortam Değişkenleri

  | Değişken | Açıklama |
  |----------|----------|
  | `DEFAULT_LIMIT` | Yanıtlar için varsayılan karakter sınırı (varsayılan: `5000`, sınır yok için `0` olarak ayarla) |
  | `MAX_RESPONSE_BYTES` | Maksimum response gövdesi boyutu bayt cinsinden (varsayılan: `10485760` / 10 MB) |

  Özel sınırla örnek:

  ```json
  {
    "mcpServers": {
      "fetch": {
        "command": "npx",
        "args": ["mcp-fetch-server"],
        "env": {
          "DEFAULT_LIMIT": "50000"
        }
      }
    }
  }
  ```

  ## Özellikler

  - Web içeriğini HTML, JSON, düz metin veya Markdown olarak getir
  - Mozilla Readability ile makale içeriğini çıkar (reklamları, navigasyonu, boilerplate'i kaldırır)
  - YouTube video transkriptlerini çıkar (`yt-dlp` aracılığıyla veya doğrudan çıkarma)
  - Güvenlik duvarının arkasındaki istekler için proxy desteği
  - `max_length` ve `start_index` ile sayfalandırma
  - Özel istek başlıkları
  - SSRF koruması (özel/localhost adreslerini ve DNS yeniden bağlamayı engeller)
  - Bellek tükenmesini önlemek için response boyutu sınırları

  ## Geliştirme

  ```bash
  bun install
  bun run dev     # watch modunda başla
  bun test        # testleri çalıştır
  bun run build   # production için derle
  ```

  ## Lisans

  Bu proje MIT Lisansı altında lisanslanmıştır.
---

# Fetch MCP Server

![fetch mcp logo](https://raw.githubusercontent.com/zcaceres/fetch-mcp/HEAD/logo.jpg)

[![npm version](https://img.shields.io/npm/v/mcp-fetch-server.svg)](https://www.npmjs.com/package/mcp-fetch-server)

An MCP server for fetching web content in multiple formats — HTML, JSON, plain text, Markdown, readable article content, and YouTube transcripts.

<a href="https://glama.ai/mcp/servers/nu09wf23ao">
  
</a>

## Tools

All tools accept the following common parameters:

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | URL to fetch |
| `headers` | object | No | Custom headers to include in the request |
| `max_length` | number | No | Maximum characters to return (default: 5000) |
| `start_index` | number | No | Start from this character index (default: 0) |
| `proxy` | string | No | Proxy URL (e.g. `http://proxy:8080`) |

- **fetch_html** — Fetch a website and return its raw HTML content.

- **fetch_markdown** — Fetch a website and return its content converted to Markdown.

- **fetch_txt** — Fetch a website and return plain text with HTML tags, scripts, and styles removed.

- **fetch_json** — Fetch a URL and return the JSON response.

- **fetch_readable** — Fetch a website and extract the main article content using [Mozilla Readability](https://github.com/mozilla/readability), returned as Markdown. Strips navigation, ads, and boilerplate. Ideal for articles and blog posts.

- **fetch_youtube_transcript** — Fetch a YouTube video's captions/transcript. Uses `yt-dlp` if available, otherwise extracts directly from the page. Accepts an additional `lang` parameter (default: `"en"`) to select the caption language.

## Installation

### As an MCP server

Add to your MCP client configuration:

```json
{
  "mcpServers": {
    "fetch": {
      "command": "npx",
      "args": ["mcp-fetch-server"]
    }
  }
}
```

### As a CLI

```bash
npx mcp-fetch <command> <url> [flags]
```

Or install globally:

```bash
npm install -g mcp-fetch-server
mcp-fetch <command> <url> [flags]
```

## CLI Usage

```
mcp-fetch <command> <url> [flags]
```

### Commands

| Command | Description |
|---------|-------------|
| `html` | Fetch a URL and return raw HTML |
| `markdown` | Fetch a URL and return Markdown |
| `readable` | Fetch a URL and return article content as Markdown (via Readability) |
| `txt` | Fetch a URL and return plain text |
| `json` | Fetch a URL and return JSON |
| `youtube` | Fetch a YouTube video transcript |

### Flags

| Flag | Description |
|------|-------------|
| `--max-length <N>` | Maximum characters to return |
| `--start-index <N>` | Start from this character index |
| `--proxy <URL>` | Proxy URL |
| `--lang <code>` | Language code for YouTube transcripts (default: `en`) |
| `--help` | Show help message |
| `--version` | Show version |

### Examples

```bash
# Fetch a page as markdown
mcp-fetch markdown https://example.com

# Extract article content without boilerplate
mcp-fetch readable https://example.com/blog/post

# Get a YouTube transcript in Spanish
mcp-fetch youtube https://www.youtube.com/watch?v=dQw4w9WgXcQ --lang es

# Fetch with a length limit
mcp-fetch html https://example.com --max-length 10000

# Fetch through a proxy
mcp-fetch json https://api.example.com/data --proxy http://proxy:8080
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DEFAULT_LIMIT` | Default character limit for responses (default: `5000`, set to `0` for no limit) |
| `MAX_RESPONSE_BYTES` | Maximum response body size in bytes (default: `10485760` / 10 MB) |

Example with a custom limit:

```json
{
  "mcpServers": {
    "fetch": {
      "command": "npx",
      "args": ["mcp-fetch-server"],
      "env": {
        "DEFAULT_LIMIT": "50000"
      }
    }
  }
}
```

## Features

- Fetch web content as HTML, JSON, plain text, or Markdown
- Extract article content with Mozilla Readability (strips ads, nav, boilerplate)
- Extract YouTube video transcripts (via `yt-dlp` or direct extraction)
- Proxy support for requests behind firewalls
- Pagination with `max_length` and `start_index`
- Custom request headers
- SSRF protection (blocks private/localhost addresses and DNS rebinding)
- Response size limits to prevent memory exhaustion

## Development

```bash
bun install
bun run dev     # start with watch mode
bun test        # run tests
bun run build   # build for production
```

## License

This project is licensed under the MIT License.
