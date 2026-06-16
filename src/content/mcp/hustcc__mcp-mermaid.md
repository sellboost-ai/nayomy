---
name: "hustcc/mcp-mermaid"
description: "Generate mermaid diagram and chart with AI MCP dynamically."
category: "Customer Data Platforms"
repo: "hustcc/mcp-mermaid"
stars: 567
url: "https://github.com/hustcc/mcp-mermaid"
body_length: 5631
license: "MIT"
language: "TypeScript"
homepage: "https://github.com/hustcc/mcp-mermaid"
body_tr: |-
  #  MCP Mermaid ![](https://badge.mcpx.dev?type=server 'MCP Server')  [![build](https://github.com/hustcc/mcp-mermaid/actions/workflows/build.yml/badge.svg)](https://github.com/hustcc/mcp-mermaid/actions/workflows/build.yml) [![npm Version](https://img.shields.io/npm/v/mcp-mermaid.svg)](https://www.npmjs.com/package/mcp-mermaid) [![smithery badge](https://smithery.ai/badge/@hustcc/mcp-mermaid)](https://smithery.ai/server/@hustcc/mcp-mermaid) [![npm License](https://img.shields.io/npm/l/mcp-mermaid.svg)](https://www.npmjs.com/package/mcp-mermaid) [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/hustcc/mcp-mermaid)](https://archestra.ai/mcp-catalog/hustcc__mcp-mermaid)

  AI MCP ile [mermaid](https://mermaid.js.org/) diyagramı ve grafiği dinamik olarak oluşturun. Ayrıca şunları kullanabilirsiniz:

  -  [mcp-server-chart](https://github.com/antvis/mcp-server-chart) grafik, chart ve harita oluşturmak için.
  -  [Infographic](https://github.com/antvis/Infographic) infografik oluşturmak için, örneğin `Timeline`, `Comparison`, `List`, `Process` ve benzeri.
  - 🖼️ [figure.ling.pub/gallery](https://figure.ling.pub/gallery) mcp-mermaid ve diğer araçlarla oluşturulan AI tarafından üretilen diyagramları ve figürleri incelemek ve paylaşmak için.


  ## ✨ Özellikler

  - `Mermaid` ın tüm özelliklerini ve söz dizimini tam olarak destekler.
  - `backgroundColor` ve `theme` yapılandırmasını destekler, büyük AI modellerinin zengin stil konfigürasyonları çıkartmasını sağlar.

  - `base64`, `svg`, `mermaid`, `file` ve uzak dostu `svg_url`, `png_url` formatlarına dışa aktarımı destekler. `Mermaid` için doğrulama ile modelin çok turlu doğru söz dizimi ve grafik çıkartmasını kolaylaştırır. PNG diyagramları diske otomatik olarak kaydetmek için `outputType: "file"` kullanın veya herkese açık mermaid.ink bağlantıları aracılığıyla diyagramları paylaşmak için URL modlarını kullanın.





  ## 🤖 Kullanım

  `Desktop APP` ile kullanmak için, Claude, VSCode, Cline, Cherry Studio gibi uygulamalar, aşağıdaki MCP server konfigürasyonunu ekleyin. Mac sisteminde:

  ```json
  {
    "mcpServers": {
      "mcp-mermaid": {
        "command": "npx",
        "args": [
          "-y",
          "mcp-mermaid"
        ]
      }
    }
  }
  ```

  Windows sisteminde:

  ```json
  {
    "mcpServers": {
      "mcp-mermaid": {
        "command": "cmd",
        "args": [
          "/c",
          "npx",
          "-y",
          "mcp-mermaid"
        ]
      }
    }
  }
  ```

  Ayrıca, aliyun, modelscope, glama.ai, smithery.ai veya HTTP, SSE Protocol ile diğerlerinde kullanabilirsiniz.

  **Erişim Noktaları:**
  - SSE: `http://localhost:3033/sse`
  - Streamable: `http://localhost:1122/mcp`

  **Mevcut Docker Etiketleri:**
  - `susuperli/mcp-mermaid:latest` - En son kararlı sürüm
  - [Docker Hub](https://hub.docker.com/repository/docker/susuperli/mcp-mermaid/tags) adresinden tüm mevcut etiketleri görüntüleyin


  ## 🚰 SSE veya Streamable taşıma ile Çalıştırma

  ### Seçenek 1: Global Kurulum

  Paketi global olarak kurun:

  ```bash
  npm install -g mcp-mermaid
  ```

  Sunucuyu tercih ettiğiniz taşıma seçeneğiyle çalıştırın:

  ```bash
  # SSE taşıması için (varsayılan endpoint: /sse)
  mcp-mermaid -t sse

  # Streamable taşıması özel endpoint ile
  mcp-mermaid -t streamable
  ```

  ### Seçenek 2: Yerel Geliştirme

  Kaynak kodla lokal çalışıyorsanız:

  ```bash
  # Klonlama ve kurulum
  git clone https://github.com/hustcc/mcp-mermaid.git
  cd mcp-mermaid
  npm install
  npm run build

  # npm scriptleriyle çalıştırma
  npm run start:sse        # 3033 portunda SSE taşıması
  npm run start:streamable # 1122 portunda Streamable taşıması
  ```

  ### Erişim Noktaları

  Sunucuya şu adresten erişebilirsiniz:

  - SSE taşıması: `http://localhost:3033/sse`
  - Streamable taşıması: `http://localhost:1122/mcp` (lokal) veya `http://localhost:3033/mcp` (global)

  ## 🎮 CLI Seçenekleri

  MCP sunucusunu çalıştırırken aşağıdaki CLI seçeneklerini de kullanabilirsiniz. CLI'yi `-h` ile çalıştırarak komut seçeneklerini görüntüleyin.

  ```plain
  MCP Mermaid CLI

  Options:
    --transport, -t  Taşıma protokolünü belirtin: "stdio", "sse" veya "streamable" (varsayılan: "stdio")
    --port, -p       SSE veya streamable taşıması için portu belirtin (varsayılan: 3033)
    --endpoint, -e   Taşıma için endpoint belirtin:
                      - SSE için: varsayılan "/sse" dir
                      - Streamable için: varsayılan "/mcp" dir
    --help, -h       Bu yardım mesajını göster
  ```

  ## 🔨 Geliştirme

  Bağımlılıkları kurun:

  ```bash
  npm install
  ```

  Sunucuyu derleyin:

  ```bash
  npm run build
  ```

  ### MCP sunucusunu başlatın

  **MCP Inspector ile (hata ayıklama için):**

  ```bash
  npm run start
  ```

  **Farklı taşıma protokolleriyle:**

  ```bash
  # SSE taşıması (Server-Sent Events)
  npm run start:sse

  # Streamable HTTP taşıması
  npm run start:streamable
  ```

  **Doğrudan node komutları:**

  ```bash
  # 3033 portunda SSE taşıması
  node build/index.js --transport sse --port 3033

  # 1122 portunda Streamable HTTP taşıması
  node build/index.js --transport streamable --port 1122

  # STDIO taşıması (MCP client entegrasyonu için)
  node build/index.js --transport stdio
  ```

  ## 🐳 Docker Kullanımı

  MCP Mermaid'i Docker ile çalıştırın:

  ```bash
  # Image'i çekin
  docker pull susuperli/mcp-mermaid:latest

  # SSE taşıması ile çalıştırın (varsayılan)
  docker run -p 3033:3033 susuperli/mcp-mermaid:latest --transport sse

  # Streamable taşıması ile çalıştırın
  docker run -p 1122:1122 susuperli/mcp-mermaid:latest --transport streamable --port 1122
  ```

  ## 📄 Lisans

  MIT@[hustcc](https://github.com/hustcc).
---

#  MCP Mermaid ![](https://badge.mcpx.dev?type=server 'MCP Server')  [![build](https://github.com/hustcc/mcp-mermaid/actions/workflows/build.yml/badge.svg)](https://github.com/hustcc/mcp-mermaid/actions/workflows/build.yml) [![npm Version](https://img.shields.io/npm/v/mcp-mermaid.svg)](https://www.npmjs.com/package/mcp-mermaid) [![smithery badge](https://smithery.ai/badge/@hustcc/mcp-mermaid)](https://smithery.ai/server/@hustcc/mcp-mermaid) [![npm License](https://img.shields.io/npm/l/mcp-mermaid.svg)](https://www.npmjs.com/package/mcp-mermaid) [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/hustcc/mcp-mermaid)](https://archestra.ai/mcp-catalog/hustcc__mcp-mermaid)

Generate  [mermaid](https://mermaid.js.org/) diagram and chart with AI MCP dynamically. Also you can use:

-  [mcp-server-chart](https://github.com/antvis/mcp-server-chart) to generate chart, graph, map.
-  [Infographic](https://github.com/antvis/Infographic) to generate infographic, such as `Timeline`, `Comparison`, `List`, `Process` and so on.
- 🖼️ [figure.ling.pub/gallery](https://figure.ling.pub/gallery) to browse and share AI-generated diagrams and figures created with mcp-mermaid and other tools.


## ✨ Features

- Fully support all features and syntax of `Mermaid`.
- Support configuration of `backgroundColor` and `theme`, enabling large AI models to output rich style configurations.

- Support exporting to `base64`, `svg`, `mermaid`, `file`, and remote-friendly `svg_url`, `png_url` formats, with validation for `Mermaid` to facilitate the model's multi-round output of correct syntax and graphics. Use `outputType: "file"` to automatically save PNG diagrams to disk for AI agents, or the URL modes to share diagrams through public mermaid.ink links.





## 🤖 Usage

To use with `Desktop APP`, such as Claude, VSCode, Cline, Cherry Studio, and so on, add the  MCP server config below. On Mac system:

```json
{
  "mcpServers": {
    "mcp-mermaid": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-mermaid"
      ]
    }
  }
}
```

On Window system:

```json
{
  "mcpServers": {
    "mcp-mermaid": {
      "command": "cmd",
      "args": [
        "/c",
        "npx",
        "-y",
        "mcp-mermaid"
      ]
    }
  }
}
```

Also, you can use it on aliyun, modelscope, glama.ai, smithery.ai or others with HTTP, SSE Protocol.

**Access Points:**
- SSE: `http://localhost:3033/sse`
- Streamable: `http://localhost:1122/mcp`

**Available Docker Tags:**
- `susuperli/mcp-mermaid:latest` - Latest stable version
- View all available tags at [Docker Hub](https://hub.docker.com/repository/docker/susuperli/mcp-mermaid/tags)


## 🚰 Run with SSE or Streamable transport

### Option 1: Global Installation

Install the package globally:

```bash
npm install -g mcp-mermaid
```

Run the server with your preferred transport option:

```bash
# For SSE transport (default endpoint: /sse)
mcp-mermaid -t sse

# For Streamable transport with custom endpoint
mcp-mermaid -t streamable
```

### Option 2: Local Development

If you're working with the source code locally:

```bash
# Clone and setup
git clone https://github.com/hustcc/mcp-mermaid.git
cd mcp-mermaid
npm install
npm run build

# Run with npm scripts
npm run start:sse        # SSE transport on port 3033
npm run start:streamable # Streamable transport on port 1122
```

### Access Points

Then you can access the server at:

- SSE transport: `http://localhost:3033/sse`
- Streamable transport: `http://localhost:1122/mcp` (local) or `http://localhost:3033/mcp` (global)

## 🎮 CLI Options

You can also use the following CLI options when running the MCP server. Command options by run cli with `-h`.

```plain
MCP Mermaid CLI

Options:
  --transport, -t  Specify the transport protocol: "stdio", "sse", or "streamable" (default: "stdio")
  --port, -p       Specify the port for SSE or streamable transport (default: 3033)
  --endpoint, -e   Specify the endpoint for the transport:
                    - For SSE: default is "/sse"
                    - For streamable: default is "/mcp"
  --help, -h       Show this help message
```

## 🔨 Development

Install dependencies:

```bash
npm install
```

Build the server:

```bash
npm run build
```

### Start the MCP server

**Using MCP Inspector (for debugging):**

```bash
npm run start
```

**Using different transport protocols:**

```bash
# SSE transport (Server-Sent Events)
npm run start:sse

# Streamable HTTP transport
npm run start:streamable
```

**Direct node commands:**

```bash
# SSE transport on port 3033
node build/index.js --transport sse --port 3033

# Streamable HTTP transport on port 1122
node build/index.js --transport streamable --port 1122

# STDIO transport (for MCP client integration)
node build/index.js --transport stdio
```

## 🐳 Docker Usage

Run MCP Mermaid with Docker:

```bash
# Pull the image
docker pull susuperli/mcp-mermaid:latest

# Run with SSE transport (default)
docker run -p 3033:3033 susuperli/mcp-mermaid:latest --transport sse

# Run with streamable transport
docker run -p 1122:1122 susuperli/mcp-mermaid:latest --transport streamable --port 1122
```

## 📄 License

MIT@[hustcc](https://github.com/hustcc).
