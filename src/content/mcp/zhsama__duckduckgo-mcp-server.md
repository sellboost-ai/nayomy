---
name: "zhsama/duckduckgo-mcp-server"
description: "This is a TypeScript-based MCP server that provides DuckDuckGo search functionality."
description_tr: "TypeScript ile yazılmış, DuckDuckGo arama işlevselliği sunan bir MCP sunucusudur."
category: "Search & Data Extraction"
repo: "zhsama/duckduckgo-mcp-server"
stars: 77
url: "https://github.com/zhsama/duckduckgo-mcp-server"
body_length: 2406
license: "MIT"
language: "TypeScript"
body_tr: |-
  # duckduckgo-search MCP Server

  English | [中文](README_zh.md)

  DuckDuckGo Search için bir Model Context Protocol sunucusu

  TypeScript tabanlı bu MCP sunucusu, DuckDuckGo arama işlevselliğini sağlar. Temel MCP kavramlarını şunlar aracılığıyla gösterir:

  - DuckDuckGo Search entegrasyonu
  - Kullanımı kolay arama aracı arayüzü
  - Rate limiting ve hata yönetimi desteği

  <a href="https://glama.ai/mcp/servers/34fhy9xb9w">
    
  </a>

  ## Özellikler

  ### Arama Aracı

  - `duckduckgo_search` - DuckDuckGo API'sini kullanarak web araması yapın
    - Zorunlu parametre: `query` (arama sorgusu, maksimum 400 karakter)
    - İsteğe bağlı parametre: `count` (sonuç sayısı, 1-20, varsayılan 10)
    - İsteğe bağlı parametre: `safeSearch` (güvenlik seviyesi: strict/moderate/off, varsayılan moderate)
    - Biçimlendirilmiş Markdown arama sonuçları döndürür

  ### Rate Limitler

  - Saniyede maksimum 1 istek
  - Ayda maksimum 15000 istek

  ## Geliştirme

  ### Ön Gereksinimler

  - Node.js >= 18
  - pnpm >= 8.0.0

  ### Kurulum

  ```bash
  # Henüz kurulu değilse pnpm'i yükleyin
  npm install -g pnpm

  # Proje bağımlılıklarını yükleyin
  pnpm install
  ```

  ### Derleme ve Çalıştırma

  Sunucuyu derleyin:

  ```bash
  pnpm run build
  ```

  Otomatik yeniden derleme ile geliştirme için:

  ```bash
  pnpm run watch
  ```

  ## Claude Desktop'ta Kurulum

  Claude Desktop ile kullanmak için sunucu yapılandırmasını ekleyin:

  MacOS'ta: `~/Library/Application Support/Claude/claude_desktop_config.json`
  Windows'ta: `%APPDATA%/Claude/claude_desktop_config.json`

  ```json
  # online
  {
    "mcpServers": {
      "duckduckgo-search": {
          "command": "npx",
          "args": [
            "-y",
            "duckduckgo-mcp-server"
          ]
      }
    }
  }

  # local
  {
    "mcpServers": {
      "duckduckgo-search": {
        "command": "node",
        "args": [
          "/path/to/duckduckgo-search/build/index.js"
        ]
      }
    }
  }
  ```
  ![image](https://github.com/user-attachments/assets/6906e280-9dbb-4bb5-a537-d9e45e666084)
  ![image](https://github.com/user-attachments/assets/867a70ae-082f-45ab-a623-869bfd6c31eb)

  ### Hata Ayıklama

  MCP sunucuları stdio üzerinden iletişim kurduğundan, hata ayıklama zorlu olabilir. [MCP Inspector](https://github.com/modelcontextprotocol/inspector) kullanmanızı öneririz; bu, paket betiği olarak mevcuttur:

  ```bash
  pnpm run inspector
  ```

  Inspector, tarayıcınızda hata ayıklama araçlarına erişmek için bir URL sağlayacaktır.
---

# duckduckgo-search MCP Server

English | [中文](README_zh.md)

A Model Context Protocol server for DuckDuckGo Search

This is a TypeScript-based MCP server that provides DuckDuckGo search functionality. It demonstrates core MCP concepts through:

- Integration with DuckDuckGo Search
- Easy-to-use search tool interface
- Rate limiting and error handling support

<a href="https://glama.ai/mcp/servers/34fhy9xb9w">
  
</a>

## Features

### Search Tool

- `duckduckgo_search` - Perform web searches using DuckDuckGo API
  - Required parameter: `query` (search query, max 400 characters)
  - Optional parameter: `count` (number of results, 1-20, default 10)
  - Optional parameter: `safeSearch` (safety level: strict/moderate/off, default moderate)
  - Returns formatted Markdown search results

### Rate Limits

- Maximum 1 request per second
- Maximum 15000 requests per month

## Development

### Prerequisites

- Node.js >= 18
- pnpm >= 8.0.0

### Installation

```bash
# Install pnpm if not already installed
npm install -g pnpm

# Install project dependencies
pnpm install
```

### Build and Run

Build the server:

```bash
pnpm run build
```

For development with auto-rebuild:

```bash
pnpm run watch
```

## Setup in Claude Desktop

To use with Claude Desktop, add the server config:

On MacOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
On Windows: `%APPDATA%/Claude/claude_desktop_config.json`

```json
# online
{
  "mcpServers": {
    "duckduckgo-search": {
        "command": "npx",
        "args": [
          "-y",
          "duckduckgo-mcp-server"
        ]
    }
  }
}

# local
{
  "mcpServers": {
    "duckduckgo-search": {
      "command": "node",
      "args": [
        "/path/to/duckduckgo-search/build/index.js"
      ]
    }
  }
}
```
![image](https://github.com/user-attachments/assets/6906e280-9dbb-4bb5-a537-d9e45e666084)
![image](https://github.com/user-attachments/assets/867a70ae-082f-45ab-a623-869bfd6c31eb)

### Debugging

Since MCP servers communicate over stdio, debugging can be challenging. We recommend using the [MCP Inspector](https://github.com/modelcontextprotocol/inspector), which is available as a package script:

```bash
pnpm run inspector
```

The Inspector will provide a URL to access debugging tools in your browser.
