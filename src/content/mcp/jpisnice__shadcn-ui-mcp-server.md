---
name: "Jpisnice/shadcn-ui-mcp-server"
description: "MCP server that gives AI assistants seamless access to shadcn/ui v4 components, blocks, demos, and metadata."
description_tr: "MCP sunucusu, AI asistanlarına shadcn/ui v4 bileşenleri, blokları, demoları ve metadatalarına sorunsuz erişim sağlar."
category: "Developer Tools"
repo: "Jpisnice/shadcn-ui-mcp-server"
stars: 2771
url: "https://github.com/Jpisnice/shadcn-ui-mcp-server"
body_length: 10559
license: "MIT"
language: "TypeScript"
body_tr: |-
  # Shadcn UI v4 MCP Server

  [![npm version](https://badge.fury.io/js/@jpisnice%2Fshadcn-ui-mcp-server.svg)](https://badge.fury.io/js/@jpisnice%2Fshadcn-ui-mcp-server)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/Jpisnice/shadcn-ui-mcp-server)](https://archestra.ai/mcp-catalog/jpisnice__shadcn-ui-mcp-server)

  > **🚀 shadcn/ui komponentlerini AI iş akışınıza entegre etmenin en hızlı yolu**

  Yapay zeka asistanlarına [shadcn/ui v4](https://ui.shadcn.com/) komponentleri, blokları, demoları ve metadatalarına kapsamlı erişim sağlayan bir Model Context Protocol (MCP) sunucusu. AI destekli geliştirme iş akışınız için React, Svelte, Vue ve React Native uygulamalarını sorunsuzca alın.

  ## ✨ Temel Özellikler

  - **🎯 Çoklu Framework Desteği** - React, Svelte, Vue ve React Native uygulamaları
  - **📦 Component Kaynak Kodu** - En son shadcn/ui v4 TypeScript kaynağı
  - **🎨 Component Demoları** - Örnek uygulamalar ve kullanım desenleri
  - **🏗️ Blocks Desteği** - Tam blok uygulamaları (panolar, takvimler, formlar)
  - **📋 Metadata Erişimi** - Bağımlılıklar, açıklamalar ve yapılandırma detayları
  - **🔍 Dizin Taraması** - Repository yapılarını keşfetme
  - **⚡ Akıllı Caching** - Rate limit yönetimiyle etkili GitHub API entegrasyonu
  - **🌐 SSE Transport** - Çok istemcili dağıtımlar için Server-Sent Events desteği
  - **🐳 Docker Ready** - Docker Compose ile üretime hazır konteynerizasyon

  ## 🚀 Hızlı Başlangıç

  ```bash
  # Temel kullanım (saatte 60 istek)
  npx @jpisnice/shadcn-ui-mcp-server

  # GitHub token ile (saatte 5000 istek) - Önerilen
  npx @jpisnice/shadcn-ui-mcp-server --github-api-key ghp_your_token_here

  # Framework değiştir
  npx @jpisnice/shadcn-ui-mcp-server --framework svelte
  npx @jpisnice/shadcn-ui-mcp-server --framework vue
  npx @jpisnice/shadcn-ui-mcp-server --framework react-native

  # Radix yerine Base UI kullan (yalnızca React)
  npx @jpisnice/shadcn-ui-mcp-server --ui-library base
  ```

  **🎯 GitHub tokeninizi 2 dakikada alın**: [docs/getting-started/github-token.md](docs/getting-started/github-token.md)

  ## 📦 Tek Tıkla Kurulum (Claude Desktop)

  Anında kurulum için `.mcpb` dosyasını indirip çift tıklayın:

  1. [Releases](https://github.com/Jpisnice/shadcn-ui-mcp-server/releases) sayfasından `shadcn-ui-mcp-server.mcpb` dosyasını indirin
  2. Dosyaya çift tıklayın - Claude Desktop otomatik olarak açılır
  3. GitHub tokeninizi girin (isteğe bağlı, daha yüksek rate limitler için)
  4. Kur'u tıklayın - araçlar hemen kullanılabilir hale gelir

  **Manuel kurulum:** Claude Desktop → Ayarlar → MCP → Sunucu Ekle → Gözat → `.mcpb` dosyasını seçin

  > **Referanslar:** [Anthropic Desktop Extensions](https://www.anthropic.com/engineering/desktop-extensions) | [MCPB Oluşturma](https://support.claude.com/en/articles/12922929-building-desktop-extensions-with-mcpb)

  ## 🌐 SSE Transport ve Docker Dağıtımı

  Çok istemcili destek ve ürün dağıtımları için sunucuyu **Server-Sent Events (SSE)** transport ile çalıştırın:

  ### SSE ile Hızlı Başlangıç
  ```bash
  # SSE modu (birden fazla eşzamanlı bağlantıyı destekler)
  node build/index.js --mode sse --port 7423

  # Docker Compose (üretime hazır)
  docker-compose up -d

  # Claude Code ile bağlan
  claude mcp add --scope user --transport sse shadcn-mcp-server http://localhost:7423/sse
  ```

  ### Transport Modları
  - **`stdio`** (varsayılan) - CLI kullanımı için standart giriş/çıkış
  - **`sse`** - HTTP tabanlı bağlantılar için Server-Sent Events
  - **`dual`** - Stdio ve SSE aynı anda

  ### Docker Örnekleri
  ```bash
  # Temel konteyner
  docker run -p 7423:7423 shadcn-ui-mcp-server

  # GitHub API token ile
  docker run -p 7423:7423 -e GITHUB_PERSONAL_ACCESS_TOKEN=ghp_your_token shadcn-ui-mcp-server

  # Docker Compose (önerilen)
  docker-compose up -d
  curl http://localhost:7423/health
  ```

  ### Ortam Değişkenleri
  - `MCP_TRANSPORT_MODE` - Transport modu (stdio|sse|dual)
  - `MCP_PORT` - SSE sunucu portu (varsayılan: 7423 - SHADCN on keypad!)
  - `MCP_HOST` - Ana bilgisayar bağlantısı (varsayılan: 0.0.0.0)
  - `MCP_CORS_ORIGINS` - CORS kaynakları (virgülle ayrılmış)
  - `GITHUB_PERSONAL_ACCESS_TOKEN` - GitHub API token
  - `UI_LIBRARY` - UI primitive kütüphanesi: `radix` (varsayılan) veya `base` (yalnızca React)

  ## 📚 Dokümantasyon

  | Bölüm | Açıklama |
  |-------|----------|
  | [🚀 Başlangıç](docs/getting-started/) | Kurulum, ayarlama ve ilk adımlar |
  | [⚙️ Yapılandırma](docs/configuration/) | Framework seçimi, tokenler ve seçenekler |
  | [🔌 Entegrasyon](docs/integration/) | Editör ve araç entegrasyonları |
  | [📖 Kullanım](docs/usage/) | Örnekler, öğreticiler ve kullanım senaryoları |
  | [🎨 Frameworkler](docs/frameworks/) | Framework özel dokümantasyon |
  | [🐛 Sorun Giderme](docs/troubleshooting/) | Yaygın sorunlar ve çözümler |
  | [🔧 API Referansı](docs/api/) | Araç referansı ve teknik detaylar |

  ## 🎨 Framework Desteği

  Bu MCP sunucusu dört popüler shadcn uygulamasını destekler:

  | Framework | Repository | Bakıcı | Açıklama |
  |-----------|------------|--------|----------|
  | **React** (varsayılan) | [shadcn/ui](https://ui.shadcn.com/) | [shadcn](https://github.com/shadcn) | shadcn/ui v4 React komponentleri |
  | **Svelte** | [shadcn-svelte](https://www.shadcn-svelte.com/) | [huntabyte](https://github.com/huntabyte) | shadcn-svelte Svelte komponentleri |
  | **Vue** | [shadcn-vue](https://www.shadcn-vue.com/) | [unovue](https://github.com/unovue) | shadcn-vue Vue komponentleri |
  | **React Native** | [react-native-reusables](https://github.com/founded-labs/react-native-reusables) | [Founded Labs](https://github.com/founded-labs) | react-native-reusables React Native komponentleri |

  ### UI Kütüphanesi (yalnızca React)

  shadcn/ui v4, React için iki primitive kütüphanesi destekler: **Radix UI** (varsayılan) ve **Base UI**.

  ```bash
  # Radix UI (varsayılan)
  npx @jpisnice/shadcn-ui-mcp-server --framework react --ui-library radix

  # Base UI
  npx @jpisnice/shadcn-ui-mcp-server --framework react --ui-library base

  # Veya ortam değişkeni aracılığıyla
  UI_LIBRARY=base npx @jpisnice/shadcn-ui-mcp-server
  ```

  Claude Desktop config örneği:
  ```json
  {
    "args": ["--framework", "react", "--ui-library", "base"]
  }
  ```

  ## 🛠️ Gerekli Kurulum

  ### 1. GitHub Token Alın (Önerilen)
  ```bash
  # Ziyaret edin: https://github.com/settings/tokens
  # Hiçbir kapsam gerekli olmadan token oluşturun
  export GITHUB_PERSONAL_ACCESS_TOKEN=ghp_your_token_here
  ```

  ### 2. Sunucuyu Çalıştırın
  ```bash
  # React (varsayılan)
  npx @jpisnice/shadcn-ui-mcp-server

  # Svelte
  npx @jpisnice/shadcn-ui-mcp-server --framework svelte

  # Vue
  npx @jpisnice/shadcn-ui-mcp-server --framework vue

  # React Native
  npx @jpisnice/shadcn-ui-mcp-server --framework react-native
  ```

  ### 3. Editörünüzle Entegre Edin
  - **Claude Code**: Aşağıdaki [Claude Code Entegrasyonu](#-claude-code-entegrasyonu) bölümüne bakın
  - **VS Code**: [docs/integration/vscode.md](docs/integration/vscode.md)
  - **Cursor**: [docs/integration/cursor.md](docs/integration/cursor.md)
  - **Claude Desktop**: [docs/integration/claude-desktop.md](docs/integration/claude-desktop.md)
  - **Continue.dev**: [docs/integration/continue.md](docs/integration/continue.md)

  ## 💻 Claude Code Entegrasyonu

  ### Hızlı Ekleme (CLI)

  ```bash
  # shadcn-ui MCP sunucusunu ekle
  claude mcp add shadcn -- bunx -y @jpisnice/shadcn-ui-mcp-server --github-api-key YOUR_TOKEN
  ```

  ### SSE Transport

  Ürün dağıtımları için SSE transport ile:

  ```bash
  # Sunucuyu SSE modunda başlat
  node build/index.js --mode sse --port 7423

  # Claude Code ile bağlan
  claude mcp add --scope user --transport sse shadcn-mcp-server http://localhost:7423/sse
  ```

  ### Framework Özel Komutlar

  Framework özel komutlar (React, Svelte, Vue, React Native) için [Claude Code Entegrasyon Rehberi](docs/integration/claude-code.md) sayfasına bakın.

  > **Referans:** [Claude Code MCP Dokümantasyonu](https://code.claude.com/docs/en/mcp)

  ## 🎯 Kullanım Senaryoları

  - **AI Destekli Geliştirme** - AI asistanlarının shadcn/ui ile UI'lar oluşturmasını sağlayın
  - **Çok İstemcili Dağıtımlar** - SSE transport birden fazla eşzamanlı bağlantıyı destekler
  - **Ürün Ortamları** - Sağlık kontrolleri ve izlemeyle Docker Compose hazır
  - **Component Keşfi** - Kullanılabilir komponentleri ve kullanımlarını keşfedin
  - **Çoklu Framework Öğrenme** - React, Svelte, Vue ve React Native uygulamalarını karşılaştırın
  - **Hızlı Prototipleme** - Panolar, formlar vb. için tam blok uygulamaları alın
  - **Kod Oluşturma** - Uygun bağımlılıklarla component kodu oluşturun

  ## 📦 Kurulum

  ```bash
  # Global kurulum (isteğe bağlı)
  npm install -g @jpisnice/shadcn-ui-mcp-server

  # Veya npx kullanın (önerilen)
  npx @jpisnice/shadcn-ui-mcp-server
  ```

  ## 🔨 Kaynaktan Derleme

  ### Ön Gereksinimler

  - Node.js >= 18.0.0
  - npm veya pnpm

  ### Derleme Adımları

  ```bash
  # Repository'yi klonlayın
  git clone https://github.com/Jpisnice/shadcn-ui-mcp-server.git
  cd shadcn-ui-mcp-server

  # Bağımlılıkları yükleyin
  npm install

  # Projeyi derleyin
  npm run build

  # Sunucuyu çalıştırın
  node build/index.js --github-api-key YOUR_TOKEN
  ```

  ### Yerel Olarak Çalıştırın

  ```bash
  # Derlendikten sonra seçenekler ile çalıştırın
  node build/index.js --github-api-key YOUR_TOKEN
  node build/index.js --framework svelte
  ```

  ### MCPB Paketi Oluşturma

  Proje, [MCPB specifikasyonuna](https://github.com/modelcontextprotocol/mcpb) uyan bir `manifest.json` içerir. `.mcpb` dosyası, sunucuyu, bağımlılıkları ve yapılandırmayı içeren bir ZIP arşividir.

  Ayrıntılı paketleme talimatları için [CONTRIBUTING.md](CONTRIBUTING.md) sayfasına bakın.

  > **Referans:** [MCPB ile Desktop Extensions Oluşturma](https://support.claude.com/en/articles/12922929-building-desktop-extensions-with-mcpb)

  ## 🔗 Hızlı Bağlantılar

  - 📖 [Tam Dokümantasyon](docs/)
  - 🚀 [Başlangıç Rehberi](docs/getting-started/)
  - 🌐 [SSE Transport ve Docker Rehberi](SSE_IMPLEMENTATION.md)
  - 🎨 [Framework Karşılaştırması](docs/frameworks/)
  - 🔧 [API Referansı](docs/api/)
  - 🐛 [Sorun Giderme](docs/troubleshooting/)
  - 💬 [İssues ve Tartışmalar](https://github.com/Jpisnice/shadcn-ui-mcp-server)

  ## 📄 Lisans

  MIT Lisansı - detaylar için [LICENSE](LICENSE) dosyasına bakın.

  ## 🙏 Teşekkürler

  - **[shadcn](https://github.com/shadcn)** - Harika React UI component kütüphanesi için
  - **[huntabyte](https://github.com/huntabyte)** - Mükemmel Svelte uygulaması için
  - **[unovue](https://github.com/unovue)** - Kapsamlı Vue uygulaması için
  - **[Founded Labs](https://github.com/founded-labs)** - React Native uygulaması için
  - **[Anthropic](https://anthropic.com)** - Model Context Protocol spesifikasyonu için

  ---

  **[Janardhan Polle](https://github.com/Jpisnice) tarafından ❤️ ile yapılmıştır**

  **Bu repo'yu yararlı bulursanız yıldız ⭐ verin!**
---

# Shadcn UI v4 MCP Server

[![npm version](https://badge.fury.io/js/@jpisnice%2Fshadcn-ui-mcp-server.svg)](https://badge.fury.io/js/@jpisnice%2Fshadcn-ui-mcp-server)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/Jpisnice/shadcn-ui-mcp-server)](https://archestra.ai/mcp-catalog/jpisnice__shadcn-ui-mcp-server)

> **🚀 The fastest way to integrate shadcn/ui components into your AI workflow**

A Model Context Protocol (MCP) server that provides AI assistants with comprehensive access to [shadcn/ui v4](https://ui.shadcn.com/) components, blocks, demos, and metadata. Seamlessly retrieve React, Svelte, Vue, and React Native implementations for your AI-powered development workflow.

## ✨ Key Features

- **🎯 Multi-Framework Support** - React, Svelte, Vue, and React Native implementations
- **📦 Component Source Code** - Latest shadcn/ui v4 TypeScript source
- **🎨 Component Demos** - Example implementations and usage patterns  
- **🏗️ Blocks Support** - Complete block implementations (dashboards, calendars, forms)
- **📋 Metadata Access** - Dependencies, descriptions, and configuration details
- **🔍 Directory Browsing** - Explore repository structures
- **⚡ Smart Caching** - Efficient GitHub API integration with rate limit handling
- **🌐 SSE Transport** - Server-Sent Events support for multi-client deployments
- **🐳 Docker Ready** - Production-ready containerization with Docker Compose

## 🚀 Quick Start

```bash
# Basic usage (60 requests/hour)
npx @jpisnice/shadcn-ui-mcp-server

# With GitHub token (5000 requests/hour) - Recommended
npx @jpisnice/shadcn-ui-mcp-server --github-api-key ghp_your_token_here

# Switch frameworks
npx @jpisnice/shadcn-ui-mcp-server --framework svelte
npx @jpisnice/shadcn-ui-mcp-server --framework vue
npx @jpisnice/shadcn-ui-mcp-server --framework react-native

# Use Base UI instead of Radix (React only)
npx @jpisnice/shadcn-ui-mcp-server --ui-library base
```

**🎯 Get your GitHub token in 2 minutes**: [docs/getting-started/github-token.md](docs/getting-started/github-token.md)

## 📦 One-Click Installation (Claude Desktop)

Download and double-click the `.mcpb` file for instant installation:

1. Download `shadcn-ui-mcp-server.mcpb` from [Releases](https://github.com/Jpisnice/shadcn-ui-mcp-server/releases)
2. Double-click the file - Claude Desktop opens automatically
3. Enter your GitHub token (optional, for higher rate limits)
4. Click Install - tools are available immediately

**Manual install:** Claude Desktop → Settings → MCP → Add Server → Browse → Select `.mcpb` file

> **References:** [Anthropic Desktop Extensions](https://www.anthropic.com/engineering/desktop-extensions) | [Building MCPB](https://support.claude.com/en/articles/12922929-building-desktop-extensions-with-mcpb)

## 🌐 SSE Transport & Docker Deployment

Run the server with **Server-Sent Events (SSE)** transport for multi-client support and production deployments:

### Quick Start with SSE
```bash
# SSE mode (supports multiple concurrent connections)
node build/index.js --mode sse --port 7423

# Docker Compose (production ready)
docker-compose up -d

# Connect with Claude Code
claude mcp add --scope user --transport sse shadcn-mcp-server http://localhost:7423/sse
```

### Transport Modes
- **`stdio`** (default) - Standard input/output for CLI usage
- **`sse`** - Server-Sent Events for HTTP-based connections
- **`dual`** - Both stdio and SSE simultaneously

### Docker Examples
```bash
# Basic container
docker run -p 7423:7423 shadcn-ui-mcp-server

# With GitHub API token
docker run -p 7423:7423 -e GITHUB_PERSONAL_ACCESS_TOKEN=ghp_your_token shadcn-ui-mcp-server

# Docker Compose (recommended)
docker-compose up -d
curl http://localhost:7423/health
```

### Environment Variables
- `MCP_TRANSPORT_MODE` - Transport mode (stdio|sse|dual)
- `MCP_PORT` - SSE server port (default: 7423 - SHADCN on keypad!)
- `MCP_HOST` - Host binding (default: 0.0.0.0)
- `MCP_CORS_ORIGINS` - CORS origins (comma-separated)
- `GITHUB_PERSONAL_ACCESS_TOKEN` - GitHub API token
- `UI_LIBRARY` - UI primitive library: `radix` (default) or `base` (React only)

## 📚 Documentation

| Section | Description |
|---------|-------------|
| [🚀 Getting Started](docs/getting-started/) | Installation, setup, and first steps |
| [⚙️ Configuration](docs/configuration/) | Framework selection, tokens, and options |
| [🔌 Integration](docs/integration/) | Editor and tool integrations |
| [📖 Usage](docs/usage/) | Examples, tutorials, and use cases |
| [🎨 Frameworks](docs/frameworks/) | Framework-specific documentation |
| [🐛 Troubleshooting](docs/troubleshooting/) | Common issues and solutions |
| [🔧 API Reference](docs/api/) | Tool reference and technical details |

## 🎨 Framework Support

This MCP server supports four popular shadcn implementations:

| Framework | Repository | Maintainer | Description |
|-----------|------------|------------|-------------|
| **React** (default) | [shadcn/ui](https://ui.shadcn.com/) | [shadcn](https://github.com/shadcn) | React components from shadcn/ui v4 |
| **Svelte** | [shadcn-svelte](https://www.shadcn-svelte.com/) | [huntabyte](https://github.com/huntabyte) | Svelte components from shadcn-svelte |
| **Vue** | [shadcn-vue](https://www.shadcn-vue.com/) | [unovue](https://github.com/unovue) | Vue components from shadcn-vue |
| **React Native** | [react-native-reusables](https://github.com/founded-labs/react-native-reusables) | [Founded Labs](https://github.com/founded-labs) | React Native components from react-native-reusables |

### UI Library (React only)

shadcn/ui v4 supports two primitive libraries for React: **Radix UI** (default) and **Base UI**.

```bash
# Radix UI (default)
npx @jpisnice/shadcn-ui-mcp-server --framework react --ui-library radix

# Base UI
npx @jpisnice/shadcn-ui-mcp-server --framework react --ui-library base

# Or via environment variable
UI_LIBRARY=base npx @jpisnice/shadcn-ui-mcp-server
```

Claude Desktop config example:
```json
{
  "args": ["--framework", "react", "--ui-library", "base"]
}
```

## 🛠️ Essential Setup

### 1. Get GitHub Token (Recommended)
```bash
# Visit: https://github.com/settings/tokens
# Generate token with no scopes needed
export GITHUB_PERSONAL_ACCESS_TOKEN=ghp_your_token_here
```

### 2. Run Server
```bash
# React (default)
npx @jpisnice/shadcn-ui-mcp-server

# Svelte
npx @jpisnice/shadcn-ui-mcp-server --framework svelte

# Vue  
npx @jpisnice/shadcn-ui-mcp-server --framework vue

# React Native
npx @jpisnice/shadcn-ui-mcp-server --framework react-native
```

### 3. Integrate with Your Editor
- **Claude Code**: See [Claude Code Integration](#-claude-code-integration) below
- **VS Code**: [docs/integration/vscode.md](docs/integration/vscode.md)
- **Cursor**: [docs/integration/cursor.md](docs/integration/cursor.md)
- **Claude Desktop**: [docs/integration/claude-desktop.md](docs/integration/claude-desktop.md)
- **Continue.dev**: [docs/integration/continue.md](docs/integration/continue.md)

## 💻 Claude Code Integration

### Quick Add (CLI)

```bash
# Add the shadcn-ui MCP server
claude mcp add shadcn -- bunx -y @jpisnice/shadcn-ui-mcp-server --github-api-key YOUR_TOKEN
```

### SSE Transport

For production deployments with SSE transport:

```bash
# Start server in SSE mode
node build/index.js --mode sse --port 7423

# Connect with Claude Code
claude mcp add --scope user --transport sse shadcn-mcp-server http://localhost:7423/sse
```

### Framework-Specific Commands

See [Claude Code Integration Guide](docs/integration/claude-code.md) for framework-specific commands (React, Svelte, Vue, React Native).

> **Reference:** [Claude Code MCP Documentation](https://code.claude.com/docs/en/mcp)

## 🎯 Use Cases

- **AI-Powered Development** - Let AI assistants build UIs with shadcn/ui
- **Multi-Client Deployments** - SSE transport supports multiple concurrent connections
- **Production Environments** - Docker Compose ready with health checks and monitoring
- **Component Discovery** - Explore available components and their usage
- **Multi-Framework Learning** - Compare React, Svelte, Vue, and React Native implementations
- **Rapid Prototyping** - Get complete block implementations for dashboards, forms, etc.
- **Code Generation** - Generate component code with proper dependencies

## 📦 Installation

```bash
# Global installation (optional)
npm install -g @jpisnice/shadcn-ui-mcp-server

# Or use npx (recommended)
npx @jpisnice/shadcn-ui-mcp-server
```

## 🔨 Building from Source

### Prerequisites

- Node.js >= 18.0.0
- npm or pnpm

### Build Steps

```bash
# Clone the repository
git clone https://github.com/Jpisnice/shadcn-ui-mcp-server.git
cd shadcn-ui-mcp-server

# Install dependencies
npm install

# Build the project
npm run build

# Run the server
node build/index.js --github-api-key YOUR_TOKEN
```

### Run Locally

```bash
# After building, run with options
node build/index.js --github-api-key YOUR_TOKEN
node build/index.js --framework svelte
```

### Building MCPB Package

The project includes a `manifest.json` following the [MCPB specification](https://github.com/modelcontextprotocol/mcpb). The `.mcpb` file is a ZIP archive containing the server, dependencies, and configuration.

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed packaging instructions.

> **Reference:** [Building Desktop Extensions with MCPB](https://support.claude.com/en/articles/12922929-building-desktop-extensions-with-mcpb)

## 🔗 Quick Links

- 📖 [Full Documentation](docs/)
- 🚀 [Getting Started Guide](docs/getting-started/)
- 🌐 [SSE Transport & Docker Guide](SSE_IMPLEMENTATION.md)
- 🎨 [Framework Comparison](docs/frameworks/)
- 🔧 [API Reference](docs/api/)
- 🐛 [Troubleshooting](docs/troubleshooting/)
- 💬 [Issues & Discussions](https://github.com/Jpisnice/shadcn-ui-mcp-server)

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- **[shadcn](https://github.com/shadcn)** - For the amazing React UI component library
- **[huntabyte](https://github.com/huntabyte)** - For the excellent Svelte implementation
- **[unovue](https://github.com/unovue)** - For the comprehensive Vue implementation
- **[Founded Labs](https://github.com/founded-labs)** - For the React Native implementation
- **[Anthropic](https://anthropic.com)** - For the Model Context Protocol specification

---

**Made with ❤️ by [Janardhan Polle](https://github.com/Jpisnice)**

**Star ⭐ this repo if you find it helpful!**
