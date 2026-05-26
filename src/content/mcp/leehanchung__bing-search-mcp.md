---
name: "leehanchung/bing-search-mcp"
description: "Web search capabilities using Microsoft Bing Search API"
description_tr: "Microsoft Bing Search API kullanarak web arama özellikleri"
category: "Search & Data Extraction"
repo: "leehanchung/bing-search-mcp"
stars: 79
url: "https://github.com/leehanchung/bing-search-mcp"
body_length: 2551
license: "MIT"
language: "Python"
body_tr: |-
  # Bing Search MCP Server

  Microsoft Bing Search API entegrasyonu için bir Model Context Protocol (MCP) sunucusu; AI asistanlarının web, haber ve görsel aramaları gerçekleştirmesini sağlar.

  [![smithery badge](https://smithery.ai/badge/@leehanchung/bing-search-mcp)](https://smithery.ai/server/@leehanchung/bing-search-mcp)

  ![Bing Search MCP Server](https://raw.githubusercontent.com/leehanchung/bing-search-mcp/HEAD/assets/mcp_server_bing.png)


  ## Özellikler

  - Genel bilgi için web araması
  - Güncel olaylar ve zamanında bilgi için haber araması
  - Görsel içerik için görsel araması
  - API kötüye kullanımını önlemek için hız sınırlaması
  - Kapsamlı hata işleme

  ## Gereksinimler

  - Python 3.10 veya daha yüksek
  - Microsoft Bing Search API anahtarı
  - MCP-uyumlu istemci (ör. Claude Desktop, Cursor)

  ## Kurulum

  1. Bu repository'yi klonlayın
  2. Bağımlılıkları yükleyin:
     ```
     uv venv
     source .venv/bin/activate  # Windows'ta: .venv\Scripts\activate
     uv pip install -e .
     ```

  ## Yapılandırma

  Gerekli ortam değişkenlerini ayarlayın:

  ```bash
  export BING_API_KEY="your-bing-api-key"
  export BING_API_URL="https://api.bing.microsoft.com/"  # İsteğe bağlı
  ```

  Windows için:
  ```cmd
  set BING_API_KEY=your-bing-api-key
  set BING_API_URL=https://api.bing.microsoft.com/
  ```

  ## Kullanım

  ### Sunucuyu çalıştırma

  ```
  uvx bing-search-mcp
  ```

  ### Claude for Desktop ile yapılandırma

  Claude Desktop yapılandırma dosyanıza (macOS'ta `~/Library/Application Support/Claude/claude_desktop_config.json` veya Windows'ta `%APPDATA%\Claude\claude_desktop_config.json`) aşağıdakileri ekleyin:

  ```json
  {
    "mcpServers": {
      "bing-search": {
        "command": "uvx",
        "args": [
          "/path/to/your/bing-search-mcp"
        ],
        "env": {
          "BING_API_KEY": "your-bing-api-key"
        }
      }
    }
  }
  ```
  ![Claude Code Bing Search MCP](https://raw.githubusercontent.com/leehanchung/bing-search-mcp/HEAD/assets/claude_bing_search.png)

  ## Kullanılabilir Araçlar

  ### 1. bing_web_search
  Bilgi, web siteleri ve içerik için genel web araması.

  ```python
  bing_web_search(query: str, count: int = 10, offset: int = 0, market: str = "en-US")
  ```

  ### 2. bing_news_search
  Haber makaleleri ve güncel olaylar için arama.

  ```python
  bing_news_search(query: str, count: int = 10, market: str = "en-US", freshness: str = "Day")
  ```

  ### 3. bing_image_search
  Görsel araması.

  ```python
  bing_image_search(query: str, count: int = 10, market: str = "en-US")
  ```

  ## Bing API Anahtarı Alma

  1. [Microsoft Azure Portal](https://portal.azure.com/) sayfasını ziyaret edin
  2. Azure hesabınıza giriş yapın veya yeni bir hesap oluşturun
  3. Yeni bir Bing Search kaynağı oluşturun
  4. Kaynağa gidin ve "Keys and Endpoint" bölümünde API anahtarınızı bulun

  ## Lisans

  [MIT License](LICENSE)
---

# Bing Search MCP Server

A Model Context Protocol (MCP) server for Microsoft Bing Search API integration, allowing AI assistants to perform web, news, and image searches.

[![smithery badge](https://smithery.ai/badge/@leehanchung/bing-search-mcp)](https://smithery.ai/server/@leehanchung/bing-search-mcp)

![Bing Search MCP Server](https://raw.githubusercontent.com/leehanchung/bing-search-mcp/HEAD/assets/mcp_server_bing.png)


## Features

- Web search for general information
- News search for recent events and timely information
- Image search for visual content
- Rate limiting to prevent API abuse
- Comprehensive error handling

## Requirements

- Python 3.10 or higher
- Microsoft Bing Search API key
- MCP-compatible client (e.g., Claude Desktop, Cursor)

## Installation

1. Clone this repository
2. Install dependencies:
   ```
   uv venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   uv pip install -e .
   ```

## Configuration

Set the required environment variables:

```bash
export BING_API_KEY="your-bing-api-key"
export BING_API_URL="https://api.bing.microsoft.com/"  # Optional
```

For Windows:
```cmd
set BING_API_KEY=your-bing-api-key
set BING_API_URL=https://api.bing.microsoft.com/
```

## Usage

### Running the server

```
uvx bing-search-mcp
```

### Configuring with Claude for Desktop

Add the following to your Claude Desktop configuration file (`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS or `%APPDATA%\Claude\claude_desktop_config.json` on Windows):

```json
{
  "mcpServers": {
    "bing-search": {
      "command": "uvx",
      "args": [
        "/path/to/your/bing-search-mcp"
      ],
      "env": {
        "BING_API_KEY": "your-bing-api-key"
      }
    }
  }
}
```
![Claude Code Bing Search MCP](https://raw.githubusercontent.com/leehanchung/bing-search-mcp/HEAD/assets/claude_bing_search.png)

## Available Tools

### 1. bing_web_search
General web search for information, websites, and content.

```python
bing_web_search(query: str, count: int = 10, offset: int = 0, market: str = "en-US")
```

### 2. bing_news_search
Search for news articles and current events.

```python
bing_news_search(query: str, count: int = 10, market: str = "en-US", freshness: str = "Day")
```

### 3. bing_image_search
Search for images.

```python
bing_image_search(query: str, count: int = 10, market: str = "en-US")
```

## Getting a Bing API Key

1. Visit [Microsoft Azure Portal](https://portal.azure.com/)
2. Create or sign in to your Azure account
3. Create a new Bing Search resource
4. Go to the resource and find your API key in the "Keys and Endpoint" section

## License

[MIT License](LICENSE)
