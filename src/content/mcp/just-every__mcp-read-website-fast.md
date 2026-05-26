---
name: "just-every/mcp-read-website-fast"
description: "Fast, token-efficient web content extraction for AI agents - converts websites to clean Markdown while preserving links. Features Mozilla Readability, smart caching, polite crawling with robots.txt support, and concurrent fetching."
description_tr: "AI ajanları için hızlı ve token-verimli web içeriği çıkarma - web sitelerini temiz Markdown formatına dönüştürür ve linkleri korur. Mozilla Readability, akıllı caching, robots.txt desteği ve eşzamanlı istekler gibi özellikleri içerir."
category: "Search & Data Extraction"
repo: "just-every/mcp-read-website-fast"
stars: 149
url: "https://github.com/just-every/mcp-read-website-fast"
body_length: 6614
license: "MIT"
language: "TypeScript"
homepage: "https://justevery.com"
body_tr: |-
  # @just-every/mcp-read-website-fast

  AI ajanları için hızlı, token-verimli web içeriği çıkarma - web sitelerini temiz Markdown'a dönüştürür.

  [![npm version](https://badge.fury.io/js/@just-every%2Fmcp-read-website-fast.svg)](https://www.npmjs.com/package/@just-every/mcp-read-website-fast)
  [![GitHub Actions](https://github.com/just-every/mcp-read-website-fast/workflows/Release/badge.svg)](https://github.com/just-every/mcp-read-website-fast/actions)

  <a href="https://glama.ai/mcp/servers/@just-every/mcp-read-website-fast">
    
  </a>

  ## Genel Bakış

  Mevcut MCP web tarayıcıları yavaş ve çok miktarda token tüketir. Bu, geliştirme sürecini duraklatır ve LLM'lerin tüm web sayfalarını ayrıştırması gerektiğinden eksik sonuçlar sağlar.

  Bu MCP paketi web sayfalarını yerel olarak alır, gürültüyü temizler ve bağlantıları koruyarak içeriği temiz Markdown'a dönüştürür. Claude Code, IDE'ler ve minimal token kullanımı olan LLM pipelines için tasarlanmıştır. Minimum bağımlılıkla siteleri yerel olarak tarayın.

  **Not:** Bu paket, temel tarama ve markdown dönüştürme işlevleri için [@just-every/crawl](https://www.npmjs.com/package/@just-every/crawl) kullanır.

  ## Özellikler

  - **Hızlı başlangıç**, optimal performans için lazy loading ile resmi MCP SDK'sı kullanarak
  - **İçerik çıkarma**, Mozilla Readability kullanarak (Firefox Reader View ile aynı)
  - **HTML'den Markdown'a** dönüştürme, Turndown + GFM desteği ile
  - **Akıllı önbellekleme**, SHA-256 hash URL'leri ile
  - **Nazik tarama**, robots.txt desteği ve hız sınırlandırması ile
  - **Eş zamanlı alma**, yapılandırılabilir derinlik taraması ile
  - **Stream-first tasarım**, düşük bellek kullanımı için
  - **Bağlantı koruması**, bilgi grafikleri için
  - **İsteğe bağlı parçalama**, aşağı akış işlenmesi için

  ## Kurulum

  ### Claude Code

  ```bash
  claude mcp add read-website-fast -s user -- npx -y @just-every/mcp-read-website-fast
  ```

  ### VS Code

  ```bash
  code --add-mcp '{"name":"read-website-fast","command":"npx","args":["-y","@just-every/mcp-read-website-fast"]}'
  ```

  ### Cursor

  ```bash
  cursor://anysphere.cursor-deeplink/mcp/install?name=read-website-fast&config=eyJyZWFkLXdlYnNpdGUtZmFzdCI6eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBqdXN0LWV2ZXJ5L21jcC1yZWFkLXdlYnNpdGUtZmFzdCJdfX0=
  ```

  ### JetBrains IDE'leri

  Ayarlar → Araçlar → AI Asistanı → Model Context Protocol (MCP) → Ekle

  "JSON Olarak" seçin ve yapıştırın:

  ```json
  {"command":"npx","args":["-y","@just-every/mcp-read-website-fast"]}
  ```

  Veya chat penceresinde /add yazın ve aynı JSON'u doldurun—her iki yol da server'ı tek adımda kurar. ￼

  ### Raw JSON (herhangi bir MCP client'inde çalışır)

  ```json
  {
    "mcpServers": {
      "read-website-fast": {
        "command": "npx",
        "args": ["-y", "@just-every/mcp-read-website-fast"]
      }
    }
  }
  ```

  Bunu client'inizin mcp.json dosyasına bırakın (örn. .vscode/mcp.json, ~/.cursor/mcp.json, veya Claude için .mcp.json).



  ## Özellikler

  - **Hızlı başlangıç**, optimal performans için lazy loading ile resmi MCP SDK'sı kullanarak
  - **İçerik çıkarma**, Mozilla Readability kullanarak (Firefox Reader View ile aynı)
  - **HTML'den Markdown'a** dönüştürme, Turndown + GFM desteği ile
  - **Akıllı önbellekleme**, SHA-256 hash URL'leri ile
  - **Nazik tarama**, robots.txt desteği ve hız sınırlandırması ile
  - **Eş zamanlı alma**, yapılandırılabilir derinlik taraması ile
  - **Stream-first tasarım**, düşük bellek kullanımı için
  - **Bağlantı koruması**, bilgi grafikleri için
  - **İsteğe bağlı parçalama**, aşağı akış işlenmesi için

  ### Mevcut Araçlar

  - `read_website` - Bir web sayfasını alır ve temiz markdown'a dönüştürür
    - Parametreler:
      - `url` (gerekli): Alınacak HTTP/HTTPS URL'si
      - `pages` (isteğe bağlı): Taranacak maksimum sayfa sayısı (varsayılan: 1, maksimum: 100)

  ### Mevcut Kaynaklar

  - `read-website-fast://status` - Önbellek istatistiklerini al
  - `read-website-fast://clear-cache` - Önbellek dizinini temizle

  ## Geliştirme Kullanımı

  ### Kurulum

  ```bash
  npm install
  npm run build
  ```

  ### Tek sayfa alımı
  ```bash
  npm run dev fetch https://example.com/article
  ```

  ### Derinlik ile tarama
  ```bash
  npm run dev fetch https://example.com --depth 2 --concurrency 5
  ```

  ### Çıktı formatları
  ```bash
  # Yalnız Markdown (varsayılan)
  npm run dev fetch https://example.com

  # Metadata ile JSON çıktısı
  npm run dev fetch https://example.com --output json

  # Hem URL hem de markdown
  npm run dev fetch https://example.com --output both
  ```

  ### CLI Seçenekleri

  - `-p, --pages <number>` - Taranacak maksimum sayfa sayısı (varsayılan: 1)
  - `-c, --concurrency <number>` - Maksimum eş zamanlı istekler (varsayılan: 3)
  - `--no-robots` - robots.txt'i yoksay
  - `--all-origins` - Cross-origin taramaya izin ver
  - `-u, --user-agent <string>` - Özel user agent
  - `--cache-dir <path>` - Önbellek dizini (varsayılan: .cache)
  - `-t, --timeout <ms>` - İstek zaman aşımı (varsayılan: 30000)
  - `-o, --output <format>` - Çıktı formatı: json, markdown, veya both (varsayılan: markdown)

  ### Önbelleği temizle
  ```bash
  npm run dev clear-cache
  ```

  ## Otomatik Yeniden Başlatma Özelliği

  MCP server, geliştirilmiş güvenilirlik için varsayılan olarak otomatik yeniden başlatma yeteneği içerir:

  - Server çöküp çökmediğinde otomatik olarak yeniden başlatır
  - İşlenmeyen istisnalar ve promise reddini işler
  - Üstel geri alma uygular (1 dakika içinde maksimum 10 deneme)
  - Tüm yeniden başlatma denemelerini günlüğe kaydeder
  - Kapatma sinyallerini (SIGINT, SIGTERM) zarif bir şekilde işler

  Otomatik yeniden başlatma olmadan geliştirme/hata ayıklama için:
  ```bash
  # Yeniden başlatma sarmalayıcısı olmadan doğrudan çalıştır
  npm run serve:dev
  ```

  ## Mimari

  ```
  mcp/
  ├── src/
  │   ├── crawler/        # URL alma, kuyruk yönetimi, robots.txt
  │   ├── parser/         # DOM ayrıştırma, Readability, Turndown dönüştürme
  │   ├── cache/          # SHA-256 anahtarlarıyla disk tabanlı önbellekleme
  │   ├── utils/          # Logger, chunker yardımcı programları
  │   ├── index.ts        # CLI giriş noktası
  │   ├── serve.ts        # MCP server giriş noktası
  │   └── serve-restart.ts # Otomatik yeniden başlatma sarmalayıcısı
  ```

  ## Geliştirme

  ```bash
  # Geliştirme modunda çalıştır
  npm run dev fetch https://example.com

  # Production için derle
  npm run build

  # Testleri çalıştır
  npm test

  # Tür kontrol
  npm run typecheck

  # Linting
  npm run lint
  ```

  ## Katkıda Bulunma

  Katkılar hoş karşılanır! Lütfen:

  1. Repository'yi fork edin
  2. Bir feature branch oluşturun
  3. Yeni işlevsellik için testler ekleyin
  4. Pull request gönderin

  ## Sorun Giderme

  ### Önbellek Sorunları
  ```bash
  npm run dev clear-cache
  ```

  ### Zaman Aşımı Hataları
  - `-t` bayrağı ile zaman aşımını artırın
  - Ağ bağlantısını kontrol edin
  - URL'nin erişilebilir olduğunu doğrulayın

  ### İçerik Çıkarılamadı
  - Bazı siteler otomatik erişimi engeller
  - `-u` bayrağı ile özel user agent deneyin
  - Sitenin JavaScript gerektirip gerektirmediğini kontrol edin (desteklenmez)

  ## Lisans

  MIT
---

# @just-every/mcp-read-website-fast

Fast, token-efficient web content extraction for AI agents - converts websites to clean Markdown.

[![npm version](https://badge.fury.io/js/@just-every%2Fmcp-read-website-fast.svg)](https://www.npmjs.com/package/@just-every/mcp-read-website-fast)
[![GitHub Actions](https://github.com/just-every/mcp-read-website-fast/workflows/Release/badge.svg)](https://github.com/just-every/mcp-read-website-fast/actions)

<a href="https://glama.ai/mcp/servers/@just-every/mcp-read-website-fast">
  
</a>

## Overview

Existing MCP web crawlers are slow and consume large quantities of tokens. This pauses the development process and provides incomplete results as LLMs need to parse whole web pages.

This MCP package fetches web pages locally, strips noise, and converts content to clean Markdown while preserving links. Designed for Claude Code, IDEs and LLM pipelines with minimal token footprint. Crawl sites locally with minimal dependencies.

**Note:** This package now uses [@just-every/crawl](https://www.npmjs.com/package/@just-every/crawl) for its core crawling and markdown conversion functionality.

## Features

- **Fast startup** using official MCP SDK with lazy loading for optimal performance
- **Content extraction** using Mozilla Readability (same as Firefox Reader View)
- **HTML to Markdown** conversion with Turndown + GFM support
- **Smart caching** with SHA-256 hashed URLs
- **Polite crawling** with robots.txt support and rate limiting
- **Concurrent fetching** with configurable depth crawling
- **Stream-first design** for low memory usage
- **Link preservation** for knowledge graphs
- **Optional chunking** for downstream processing

## Installation

### Claude Code

```bash
claude mcp add read-website-fast -s user -- npx -y @just-every/mcp-read-website-fast
```

### VS Code

```bash
code --add-mcp '{"name":"read-website-fast","command":"npx","args":["-y","@just-every/mcp-read-website-fast"]}'
```

### Cursor

```bash
cursor://anysphere.cursor-deeplink/mcp/install?name=read-website-fast&config=eyJyZWFkLXdlYnNpdGUtZmFzdCI6eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBqdXN0LWV2ZXJ5L21jcC1yZWFkLXdlYnNpdGUtZmFzdCJdfX0=
```

### JetBrains IDEs

Settings → Tools → AI Assistant → Model Context Protocol (MCP) → Add

Choose “As JSON” and paste:

```json
{"command":"npx","args":["-y","@just-every/mcp-read-website-fast"]}
```

Or, in the chat window, type /add and fill in the same JSON—both paths land the server in a single step. ￼

### Raw JSON (works in any MCP client)

```json
{
  "mcpServers": {
    "read-website-fast": {
      "command": "npx",
      "args": ["-y", "@just-every/mcp-read-website-fast"]
    }
  }
}
```

Drop this into your client’s mcp.json (e.g. .vscode/mcp.json, ~/.cursor/mcp.json, or .mcp.json for Claude).



## Features

- **Fast startup** using official MCP SDK with lazy loading for optimal performance
- **Content extraction** using Mozilla Readability (same as Firefox Reader View)
- **HTML to Markdown** conversion with Turndown + GFM support
- **Smart caching** with SHA-256 hashed URLs
- **Polite crawling** with robots.txt support and rate limiting
- **Concurrent fetching** with configurable depth crawling
- **Stream-first design** for low memory usage
- **Link preservation** for knowledge graphs
- **Optional chunking** for downstream processing

### Available Tools

- `read_website` - Fetches a webpage and converts it to clean markdown
  - Parameters:
    - `url` (required): The HTTP/HTTPS URL to fetch
    - `pages` (optional): Maximum number of pages to crawl (default: 1, max: 100)

### Available Resources

- `read-website-fast://status` - Get cache statistics
- `read-website-fast://clear-cache` - Clear the cache directory

## Development Usage

### Install

```bash
npm install
npm run build
```

### Single page fetch
```bash
npm run dev fetch https://example.com/article
```

### Crawl with depth
```bash
npm run dev fetch https://example.com --depth 2 --concurrency 5
```

### Output formats
```bash
# Markdown only (default)
npm run dev fetch https://example.com

# JSON output with metadata
npm run dev fetch https://example.com --output json

# Both URL and markdown
npm run dev fetch https://example.com --output both
```

### CLI Options

- `-p, --pages <number>` - Maximum number of pages to crawl (default: 1)
- `-c, --concurrency <number>` - Max concurrent requests (default: 3)
- `--no-robots` - Ignore robots.txt
- `--all-origins` - Allow cross-origin crawling
- `-u, --user-agent <string>` - Custom user agent
- `--cache-dir <path>` - Cache directory (default: .cache)
- `-t, --timeout <ms>` - Request timeout in milliseconds (default: 30000)
- `-o, --output <format>` - Output format: json, markdown, or both (default: markdown)

### Clear cache
```bash
npm run dev clear-cache
```

## Auto-Restart Feature

The MCP server includes automatic restart capability by default for improved reliability:

- Automatically restarts the server if it crashes
- Handles unhandled exceptions and promise rejections
- Implements exponential backoff (max 10 attempts in 1 minute)
- Logs all restart attempts for monitoring
- Gracefully handles shutdown signals (SIGINT, SIGTERM)

For development/debugging without auto-restart:
```bash
# Run directly without restart wrapper
npm run serve:dev
```

## Architecture

```
mcp/
├── src/
│   ├── crawler/        # URL fetching, queue management, robots.txt
│   ├── parser/         # DOM parsing, Readability, Turndown conversion
│   ├── cache/          # Disk-based caching with SHA-256 keys
│   ├── utils/          # Logger, chunker utilities
│   ├── index.ts        # CLI entry point
│   ├── serve.ts        # MCP server entry point
│   └── serve-restart.ts # Auto-restart wrapper
```

## Development

```bash
# Run in development mode
npm run dev fetch https://example.com

# Build for production
npm run build

# Run tests
npm test

# Type checking
npm run typecheck

# Linting
npm run lint
```

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Add tests for new functionality
4. Submit a pull request

## Troubleshooting

### Cache Issues
```bash
npm run dev clear-cache
```

### Timeout Errors
- Increase timeout with `-t` flag
- Check network connectivity
- Verify URL is accessible

### Content Not Extracted
- Some sites block automated access
- Try custom user agent with `-u` flag
- Check if site requires JavaScript (not supported)

## License

MIT
