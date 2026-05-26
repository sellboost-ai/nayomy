---
name: "kiliczsh/mcp-mongo-server"
description: "A Model Context Protocol Server for MongoDB"
description_tr: "MongoDB için bir Model Context Protocol Server'ı"
category: "Databases"
repo: "kiliczsh/mcp-mongo-server"
stars: 279
url: "https://github.com/kiliczsh/mcp-mongo-server"
body_length: 2244
license: "MIT"
language: "TypeScript"
homepage: "https://www.npmjs.com/package/mcp-mongo-server"
body_tr: |-
  # MCP MongoDB Server
  ---

  ![NPM Version](https://img.shields.io/npm/v/mcp-mongo-server)
  ![NPM Downloads](https://img.shields.io/npm/dm/mcp-mongo-server)
  ![NPM License](https://img.shields.io/npm/l/mcp-mongo-server)
  [![smithery badge](https://smithery.ai/badge/mcp-mongo-server)](https://smithery.ai/server/mcp-mongo-server)
  [![Verified on MseeP](https://mseep.ai/badge.svg)](https://mseep.ai/app/e274a3dd-7fe6-4440-8c43-043bae668251)

  LLM'lerin MongoDB veritabanlarıyla etkileşim kurmasını sağlayan bir Model Context Protocol sunucusu. Bu sunucu, koleksiyon şemalarını inceleme ve MongoDB işlemlerini standartlaştırılmış bir arayüz üzerinden yürütme yeteneklerini sağlar.

  ## Demo

  [![MCP MongoDB Server Demo | Claude Desktop](https://img.youtube.com/vi/FI-oE_voCpA/0.jpg)](https://www.youtube.com/watch?v=FI-oE_voCpA)

  ## Temel Özellikler

  - **Akıllı ObjectId İşleme** - String'ten ObjectId'ye dönüştürme için yapılandırılabilir auto/none/force modları
  - **Salt Okunur Modu** - Yazma işlemlerine karşı koruma, ikincil okuma tercihini kullanır
  - **Şema Çıkarımı** - Belge örneklerinden otomatik koleksiyon şema tespiti
  - **Query ve Agregasyon** - İsteğe bağlı açıklama planları ile tam MongoDB query ve agregasyon pipeline desteği
  - **Yazma İşlemleri** - Insert, update ve index oluşturma (salt okunur mod devre dışı olduğunda)
  - **Koleksiyon Otomatik Tamamlamalar** - LLM entegrasyonu için koleksiyon adlarının otomatik tamamlanması

  ## Kurulum

  ```bash
  npx -y mcp-mongo-server mongodb://localhost:27017/database
  ```

  ## Kullanım

  ```bash
  # MongoDB URI ile sunucuyu başlat
  npx -y mcp-mongo-server mongodb://muhammed:kilic@localhost:27017/database

  # Salt okunur modda bağlan
  npx -y mcp-mongo-server mongodb://muhammed:kilic@localhost:27017/database --read-only
  ```

  ### Ortam Değişkenleri

  | Değişken | Açıklama |
  |----------|----------|
  | `MCP_MONGODB_URI` | MongoDB bağlantı URI'si |
  | `MCP_MONGODB_READONLY` | Salt okunur modu etkinleştir (`"true"`) |

  ## Dokümantasyon

  - [Entegrasyon Rehberi](docs/integration.md) - Claude Desktop, Windsurf, Cursor, Docker
  - [Mevcut Araçlar](docs/tools.md) - Query, agregasyon, güncelleme, insert ve daha fazlası
  - [Geliştirme](docs/development.md) - Kurulum, scriptler ve hata ayıklama
  - [Katkı Sağlama](CONTRIBUTING.md)

  ## Lisans

  MIT - ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.
---

# MCP MongoDB Server
---

![NPM Version](https://img.shields.io/npm/v/mcp-mongo-server)
![NPM Downloads](https://img.shields.io/npm/dm/mcp-mongo-server)
![NPM License](https://img.shields.io/npm/l/mcp-mongo-server)
[![smithery badge](https://smithery.ai/badge/mcp-mongo-server)](https://smithery.ai/server/mcp-mongo-server)
[![Verified on MseeP](https://mseep.ai/badge.svg)](https://mseep.ai/app/e274a3dd-7fe6-4440-8c43-043bae668251)

A Model Context Protocol server that enables LLMs to interact with MongoDB databases. This server provides capabilities for inspecting collection schemas and executing MongoDB operations through a standardized interface.

## Demo

[![MCP MongoDB Server Demo | Claude Desktop](https://img.youtube.com/vi/FI-oE_voCpA/0.jpg)](https://www.youtube.com/watch?v=FI-oE_voCpA)

## Key Features

- **Smart ObjectId Handling** - Configurable auto/none/force modes for string-to-ObjectId conversion
- **Read-Only Mode** - Protection against write operations, uses secondary read preference
- **Schema Inference** - Automatic collection schema detection from document samples
- **Query & Aggregation** - Full MongoDB query and aggregation pipeline support with optional explain plans
- **Write Operations** - Insert, update, and index creation (when not in read-only mode)
- **Collection Completions** - Auto-complete collection names for LLM integration

## Installation

```bash
npx -y mcp-mongo-server mongodb://localhost:27017/database
```

## Usage

```bash
# Start server with MongoDB URI
npx -y mcp-mongo-server mongodb://muhammed:kilic@localhost:27017/database

# Connect in read-only mode
npx -y mcp-mongo-server mongodb://muhammed:kilic@localhost:27017/database --read-only
```

### Environment Variables

| Variable | Description |
|----------|-------------|
| `MCP_MONGODB_URI` | MongoDB connection URI |
| `MCP_MONGODB_READONLY` | Enable read-only mode (`"true"`) |

## Documentation

- [Integration Guide](docs/integration.md) - Claude Desktop, Windsurf, Cursor, Docker
- [Available Tools](docs/tools.md) - Query, aggregate, update, insert, and more
- [Development](docs/development.md) - Setup, scripts, and debugging
- [Contributing](CONTRIBUTING.md)

## License

MIT - see [LICENSE](LICENSE) for details.
