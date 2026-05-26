---
name: "hiromitsusasaki/raindrop-io-mcp-server"
description: "An integration that allows LLMs to interact with Raindrop.io bookmarks using the Model Context Protocol (MCP)."
description_tr: "Raindrop.io yer imlerinizle etkileşim kurmak için LLM'lerin Model Context Protocol (MCP) kullanmasını sağlayan bir entegrasyon."
category: "Other Tools and Integrations"
repo: "hiromitsusasaki/raindrop-io-mcp-server"
stars: 72
url: "https://github.com/hiromitsusasaki/raindrop-io-mcp-server"
body_length: 2918
language: "TypeScript"
body_tr: |-
  # Raindrop.io MCP Server
  [![smithery badge](https://smithery.ai/badge/@hiromitsusasaki/raindrop-io-mcp-server)](https://smithery.ai/server/@hiromitsusasaki/raindrop-io-mcp-server)

  LLM'lerin Model Context Protocol (MCP) kullanarak Raindrop.io yer imlerini ile etkileşim kurmasını sağlayan bir entegrasyon.

  <a href="https://glama.ai/mcp/servers/@hiromitsusasaki/raindrop-io-mcp-server">
    
  </a>

  ## Özellikler

  - Yer imi oluşturma
  - Yer imleri arama
  - Etiketlere göre filtreleme

  ## Gereksinimler

  - Node.js 16 veya daha yüksek sürüm
  - Raindrop.io hesabı ve API token'ı

  ## Kurulum

  ### Smithery Aracılığıyla Kurulum

  Raindrop.io Entegrasyonunu Claude Desktop'a otomatik olarak [Smithery](https://smithery.ai/server/@hiromitsusasaki/raindrop-io-mcp-server) üzerinden kurmak için:

  ```bash
  npx -y @smithery/cli install @hiromitsusasaki/raindrop-io-mcp-server --client claude
  ```

  ### Manuel Kurulum

  1. Repository'i klonlayın:
  ```bash
  git clone https://github.com/hiromitsusasaki/raindrop-io-mcp-server
  cd raindrop-io-mcp-server
  ```

  2. Bağımlılıkları yükleyin:
  ```bash
  npm install
  ```

  3. Ortam değişkenlerini ayarlayın:
  - Bir `.env` dosyası oluşturun ve Raindrop.io API token'ınızı ayarlayın
  ```
  RAINDROP_TOKEN=your_access_token_here
  ```

  4. Build edin:
  ```bash
  npm run build
  ```

  ## Claude for Desktop ile Kullanım

  1. Claude for Desktop yapılandırma dosyasını açın:
  - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
  - Windows: `%APPDATA%\Claude\claude_desktop_config.json`

  2. Aşağıdaki yapılandırmayı ekleyin:
  ```json
  {
    "mcpServers": {
      "raindrop": {
        "command": "node",
        "args": ["PATH_TO_BUILD/index.js"],
        "env": {
          "RAINDROP_TOKEN": "your_access_token_here"
        }
      }
    }
  }
  ```

  3. Claude for Desktop'ı yeniden başlatın

  ## Mevcut Araçlar

  ### create-bookmark
  Yeni bir yer imi oluşturur.

  **Parametreler:**
  - `url`: Yer imine eklenecek URL (gerekli)
  - `title`: Yer imi başlığı (isteğe bağlı)
  - `tags`: Etiket dizisi (isteğe bağlı)
  - `collection`: Koleksiyon ID'si (isteğe bağlı)

  ### search-bookmarks
  Yer imleri içinde arama yapar.

  **Parametreler:**
  - `query`: Arama sorgusu (gerekli)
  - `tags`: Filtrelemek için etiket dizisi (isteğe bağlı)

  ## Geliştirme

  ```bash
  # Geliştirme için build et
  npm run build

  # Server'ı başlat
  npm start
  ```

  ## Güvenlik Notları

  - API token'larını her zaman ortam değişkenleri kullanarak yönetin
  - Claude for Desktop yapılandırma dosyaları için uygun izinler ayarlayın
  - Gereksiz dosya erişimini kısıtlayın

  ## Açık Kaynak

  Bu, herkesin kullanıp katkıda bulunabileceği açık kaynak bir MCP server'ıdır. Proje MIT Lisansı altında yayınlanmıştır.

  ## Katkıda Bulunma

  Katkılar memnuniyetle karşılanır! Bu projeyi geliştirmelerine yardımcı olmak için sorunlar, özellik istekleri veya pull request'ler göndermekten çekinmeyin.

  ## İlgili Bağlantılar

  - [Model Context Protocol](https://modelcontextprotocol.io/)
  - [Raindrop.io API Belgeleri](https://developer.raindrop.io/)
---

# Raindrop.io MCP Server
[![smithery badge](https://smithery.ai/badge/@hiromitsusasaki/raindrop-io-mcp-server)](https://smithery.ai/server/@hiromitsusasaki/raindrop-io-mcp-server)

An integration that allows LLMs to interact with Raindrop.io bookmarks using the Model Context Protocol (MCP).

<a href="https://glama.ai/mcp/servers/@hiromitsusasaki/raindrop-io-mcp-server">
  
</a>

## Features

- Create bookmarks
- Search bookmarks
- Filter by tags

## Requirements

- Node.js 16 or higher
- Raindrop.io account and API token

## Setup

### Installing via Smithery

To install Raindrop.io Integration for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@hiromitsusasaki/raindrop-io-mcp-server):

```bash
npx -y @smithery/cli install @hiromitsusasaki/raindrop-io-mcp-server --client claude
```

### Manual Installation

1. Clone the repository:
```bash
git clone https://github.com/hiromitsusasaki/raindrop-io-mcp-server
cd raindrop-io-mcp-server
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
- Create a `.env` file and set your Raindrop.io API token
```
RAINDROP_TOKEN=your_access_token_here
```

4. Build:
```bash
npm run build
```

## Using with Claude for Desktop

1. Open Claude for Desktop configuration file:
- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`

2. Add the following configuration:
```json
{
  "mcpServers": {
    "raindrop": {
      "command": "node",
      "args": ["PATH_TO_BUILD/index.js"],
      "env": {
        "RAINDROP_TOKEN": "your_access_token_here"
      }
    }
  }
}
```

3. Restart Claude for Desktop

## Available Tools

### create-bookmark
Creates a new bookmark.

**Parameters:**
- `url`: URL to bookmark (required)
- `title`: Title for the bookmark (optional)
- `tags`: Array of tags (optional)
- `collection`: Collection ID (optional)

### search-bookmarks
Searches through bookmarks.

**Parameters:**
- `query`: Search query (required)
- `tags`: Array of tags to filter by (optional)

## Development

```bash
# Build for development
npm run build

# Start server
npm start
```

## Security Notes

- Always manage API tokens using environment variables
- Set appropriate permissions for Claude for Desktop configuration files
- Restrict unnecessary file access

## Open Source

This is an open source MCP server that anyone can use and contribute to. The project is released under the MIT License.

## Contributing

Contributions are welcome! Feel free to submit issues, feature requests, or pull requests to help improve this project.

## Related Links

- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Raindrop.io API Documentation](https://developer.raindrop.io/)
