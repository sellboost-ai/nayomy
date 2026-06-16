---
name: "hellokaton/unsplash-mcp-server"
description: "A MCP server for Unsplash image search."
category: "Search & Data Extraction"
repo: "hellokaton/unsplash-mcp-server"
stars: 219
url: "https://github.com/hellokaton/unsplash-mcp-server"
body_length: 3856
license: "MIT"
language: "Python"
body_tr: |-
  [![MseeP.ai Security Assessment Badge](https://mseep.net/pr/hellokaton-unsplash-mcp-server-badge.png)](https://mseep.ai/app/hellokaton-unsplash-mcp-server)

  # Unsplash MCP Server

  English | [简体中文](README_zh.md)

  > Unsplash görüntü entegrasyonu ve arama özelliklerinin sorunsuz şekilde kullanılması için basit bir MCP server'ı.

  [![Python 3.9+](https://img.shields.io/badge/python-3.9+-blue.svg)](https://www.python.org/downloads/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/hellokaton/unsplash-mcp-server)](https://archestra.ai/mcp-catalog/hellokaton__unsplash-mcp-server)
  [![smithery badge](https://smithery.ai/badge/@hellokaton/unsplash-mcp-server)](https://smithery.ai/server/@hellokaton/unsplash-mcp-server)

  ## 📋 Genel Bakış

  Unsplash MCP Server, zengin ve yüksek kaliteli görüntüleri aramak için kullanılır. Unsplash işlevselliğini kendi uygulamalarına entegre etmek isteyen geliştiriciler için idealdir.

  ## ✨ Özellikler

  - **Gelişmiş Görüntü Arama**: Unsplash'in geniş fotoğraf kütüphanesinde aşağıdakiler için filtrelerle arama yapın:
    - Anahtar kelime uygunluğu
    - Renk şemaları
    - Oryantasyon seçenekleri
    - Özel sıralama ve sayfalandırma

  ## 🔑 Unsplash Access Key Alma

  Bu server'ı kurmadan önce, bir Unsplash API Access Key almanız gerekecek:

  1. [Unsplash](https://unsplash.com/developers) adresinde geliştirici hesabı oluşturun
  2. Yeni bir uygulama kaydedin
  3. Access Key'i uygulama detayları sayfasından alın
  4. Bu key'i aşağıdaki konfigürasyon adımlarında kullanın

  Daha fazla bilgi için [resmi Unsplash API dokümantasyonuna](https://unsplash.com/documentation) bakın.

  ## 🚀 Kurulum

  Unsplash Image Integration Server'ı Claude Desktop için [Smithery](https://smithery.ai/server/@hellokaton/unsplash-mcp-server) aracılığıyla otomatik olarak kurmak için:

  ### IDE Kurulumu

  **Cursor IDE**

  ```bash
  npx -y @smithery/cli@latest install @hellokaton/unsplash-mcp-server --client cursor --key 7558c683-****-****
  ```

  **Windsurf**

  ```bash
  npx -y @smithery/cli@latest install @hellokaton/unsplash-mcp-server --client windsurf --key 7558c683-****-****
  ```

  **Cline**

  ```bash
  npx -y @smithery/cli@latest install @hellokaton/unsplash-mcp-server --client cline --key 7558c683-****-****
  ```

  ### Manuel Kurulum

  ```bash
  # Repository'yi klonlayın
  git clone https://github.com/hellokaton/unsplash-mcp-server.git

  # Proje dizinine gidin
  cd unsplash-mcp-server

  # Sanal ortam oluşturun
  uv venv

  # Bağımlılıkları yükleyin
  uv pip install .
  ```

  **Cursor Editor Entegrasyonu**

  Aşağıdaki konfigürasyonu Cursor editor'ınızın `settings.json` dosyasına ekleyin:

  ⚠️ **Not:** Lütfen aşağıdaki konfigürasyonu gerçek kurulumunuza göre ayarlayın:

  - Eğer `uv` sistem PATH'inizde yoksa, mutlak yolu kullanın (örn. `/path/to/uv`)
  - `./server.py` server script'inizin gerçek konumuna değiştirilmelidir (mutlak yol veya workspace'e göre relative yol kullanılabilir)

  ```json
  {
    "mcpServers": {
      "unsplash": {
        "command": "uv",
        "args": ["run", "--with", "fastmcp", "fastmcp", "run", "./server.py"],
        "env": {
          "UNSPLASH_ACCESS_KEY": "${YOUR_ACCESS_KEY}"
        }
      }
    }
  }
  ```

  ### Cursor'da Kullanım



  ## 🛠️ Mevcut Araçlar

  ### Fotoğraf Arama

  ```json
  {
    "tool": "search_photos",
    "query": "mountain",
    "per_page": 5,
    "orientation": "landscape"
  }
  ```

  ## 🔄 Diğer Uygulamalar

  - Golang: [unsplash-mcp-server](https://github.com/douglarek/unsplash-mcp-server)
  - Java: [unsplash-mcp-server](https://github.com/JavaProgrammerLB/unsplash-mcp-server)

  ## 📄 Lisans

  [MIT License](LICENSE)

  ## 📬 İletişim

  - [Twitter/X](https://x.com/hellokaton)
  - [GitHub Issues](https://github.com/hellokaton/unsplash-mcp-server/issues)
---

[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/hellokaton-unsplash-mcp-server-badge.png)](https://mseep.ai/app/hellokaton-unsplash-mcp-server)

# Unsplash MCP Server

English | [简体中文](README_zh.md)

> A simple MCP server for seamless Unsplash image integration and search capabilities.

[![Python 3.9+](https://img.shields.io/badge/python-3.9+-blue.svg)](https://www.python.org/downloads/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/hellokaton/unsplash-mcp-server)](https://archestra.ai/mcp-catalog/hellokaton__unsplash-mcp-server)
[![smithery badge](https://smithery.ai/badge/@hellokaton/unsplash-mcp-server)](https://smithery.ai/server/@hellokaton/unsplash-mcp-server)

## 📋 Overview

Unsplash MCP Server is used for searching rich, high-quality images. It's ideal for developers who want to integrate Unsplash functionality into their own applications.

## ✨ Features

- **Advanced Image Search**: Search Unsplash's extensive photo library with filters for:
  - Keyword relevance
  - Color schemes
  - Orientation options
  - Custom sorting and pagination

## 🔑 Obtaining Unsplash Access Key

Before installing this server, you'll need to obtain an Unsplash API Access Key:

1. Create a developer account at [Unsplash](https://unsplash.com/developers)
2. Register a new application
3. Get your Access Key from the application details page
4. Use this key in the configuration steps below

For more details, refer to the [official Unsplash API documentation](https://unsplash.com/documentation).

## 🚀 Installation

To install Unsplash Image Integration Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@hellokaton/unsplash-mcp-server):

### IDE Setup

**Cursor IDE**

```bash
npx -y @smithery/cli@latest install @hellokaton/unsplash-mcp-server --client cursor --key 7558c683-****-****
```

**Windsurf**

```bash
npx -y @smithery/cli@latest install @hellokaton/unsplash-mcp-server --client windsurf --key 7558c683-****-****
```

**Cline**

```bash
npx -y @smithery/cli@latest install @hellokaton/unsplash-mcp-server --client cline --key 7558c683-****-****
```

### Manual Installation

```bash
# Clone the repository
git clone https://github.com/hellokaton/unsplash-mcp-server.git

# Navigate to project directory
cd unsplash-mcp-server

# Create virtual environment
uv venv

# Install dependencies
uv pip install .
```

**Cursor Editor Integration**

Add the following configuration to your Cursor editor's `settings.json`:

⚠️ **Note:** Please adjust the following configuration according to your actual installation:

- If `uv` is not in your system PATH, use an absolute path (e.g., `/path/to/uv`)
- `./server.py` should be modified to the actual location of your server script (can use absolute path or path relative to workspace)



```json
{
  "mcpServers": {
    "unsplash": {
      "command": "uv",
      "args": ["run", "--with", "fastmcp", "fastmcp", "run", "./server.py"],
      "env": {
        "UNSPLASH_ACCESS_KEY": "${YOUR_ACCESS_KEY}"
      }
    }
  }
}
```

### Using in Cursor



## 🛠️ Available Tools

### Search Photos

```json
{
  "tool": "search_photos",
  "query": "mountain",
  "per_page": 5,
  "orientation": "landscape"
}
```

## 🔄 Other Implementations

- Golang: [unsplash-mcp-server](https://github.com/douglarek/unsplash-mcp-server)
- Java: [unsplash-mcp-server](https://github.com/JavaProgrammerLB/unsplash-mcp-server)

## 📄 License

[MIT License](LICENSE)

## 📬 Contact

- [Twitter/X](https://x.com/hellokaton)
- [GitHub Issues](https://github.com/hellokaton/unsplash-mcp-server/issues)
