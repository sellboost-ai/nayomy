---
name: "biegehydra/BifrostMCP"
description: "Connect to VSCode ide and use semantic tools like find_usages"
description_tr: "VSCode IDE'ye bağlanın ve find_usages gibi semantic araçlarını kullanın."
category: "Developer Tools"
repo: "biegehydra/BifrostMCP"
stars: 213
url: "https://github.com/biegehydra/BifrostMCP"
body_length: 9829
license: "AGPL-3.0"
language: "TypeScript"
body_tr: |-
  # Bifrost - VSCode Dev Tools MCP Server
  <a href="https://marketplace.visualstudio.com/items?itemName=ConnorHallman.bifrost-mcp">
    
  </a>

  Bu VS Code uzantısı, VSCode'un güçlü geliştirme araçlarını ve dil özelliklerini AI araçlarına sunan bir Model Context Protocol (MCP) sunucusu sağlar. MCP protokolünü destekleyen AI kod asistanları kullanırken gelişmiş kod navigasyonu, analizi ve manipülasyon yeteneklerini etkinleştirir.

  ![image](https://raw.githubusercontent.com/biegehydra/BifrostMCP/refs/heads/master/src/images/cursor.png)

  ## İçindekiler
  - [Özellikler](#özellikler)
  - [Kurulum/Kullanım](#kullanım)
  - [Çoklu Proje Desteği](#çoklu-proje-desteği)
  - [Mevcut Araçlar](#mevcut-araçlar)
  - [Mevcut Komutlar](#mevcut-komutlar)
  - [Sorun Giderme](#sorun-giderme)
  - [Katkıda Bulunma](#katkıda-bulunma)
  - [Hata Ayıklama](#hata-ayıklama)
  - [Lisans](#lisans)

  ## Özellikler

  - **Language Server Entegrasyonu**: Desteklenen herhangi bir dil için VSCode'un language server yeteneklerine erişin
  - **Kod Navigasyonu**: Referansları, tanımları, uygulamaları ve daha fazlasını bulun
  - **Symbol Arama**: Çalışma alanınızda semboller arayın
  - **Kod Analizi**: Semantic token'ları, belge sembollerini ve tür bilgilerini alın
  - **Akıllı Seçim**: Akıllı kod seçimi için semantic seçim aralıklarını kullanın
  - **Kod Aksiyonları**: Refactoring önerileri ve hızlı düzeltmelere erişin
  - **HTTP/SSE Sunucusu**: Dil özelliklerini MCP uyumlu bir HTTP sunucusu üzerinden açığa çıkarır
  - **AI Asistan Entegrasyonu**: MCP protokolünü destekleyen AI asistanlarla çalışmaya hazır

  ## Kullanım

  ### Kurulum

  1. [Uzantıyı](https://marketplace.visualstudio.com/items?itemName=ConnorHallman.bifrost-mcp) VS Code marketplace'ten yükleyin
  2. Geliştirme için ihtiyacınız olan dile özel uzantıları yükleyin
  3. Projenizi VS Code'da açın

  ### Yapılandırma

  Uzantı etkinleştirildiğinde otomatik olarak bir MCP sunucusu başlatır. Bir AI asistanını bu sunucuyu kullanacak şekilde yapılandırmak için:

  1. Sunucu varsayılan olarak port 8008'de çalışır (`bifrost.config.json` ile yapılandırılabilir)
  2. MCP uyumlu AI asistanınızı şu uç noktalara bağlanacak şekilde yapılandırın:
     - SSE uç noktası: `http://localhost:8008/sse`
     - Message uç noktası: `http://localhost:8008/message`

  ### LLM Kuralları
  .cursorrules dosyaları için daha iyi sonuçlar almak amacıyla örnek kurallar sağladım.

  [Örnek Cursor Kuralları](https://github.com/biegehydra/BifrostMCP/blob/master/ExampleCursorRules.md)

  [Örnek MDC Kuralları](https://github.com/biegehydra/BifrostMCP/blob/master/example.mdc)

  ### Cline Kurulumu
  - Adım 1. [Supergateway](https://github.com/supercorp-ai/supergateway) yükleyin
  - Adım 2. Cline'a config ekleyin
  - Adım 3. Kırmızı görünecek ama sorunsuz çalışıyor gibi görünüyor

  #### Windows Yapılandırması
  ```json
  {
    "mcpServers": {
      "Bifrost": {
        "command": "cmd",
        "args": [
          "/c",
          "npx",
          "-y",
          "supergateway",
          "--sse",
          "http://localhost:8008/sse"
        ],
        "disabled": false,
        "autoApprove": [],
        "timeout": 600
      }
    }
  }
  ```

  #### Mac/Linux Yapılandırması
  ```json
  {
    "mcpServers": {
      "Bifrost": {
        "command": "npx",
        "args": [
          "-y",
          "supergateway",
          "--sse",
          "http://localhost:8008/sse"
        ],
        "disabled": false,
        "autoApprove": [],
        "timeout": 600
      }
    }
  }
  ```

  ### Roo Code Kurulumu
  - Adım 1: SSE config'i global veya proje tabanlı MCP yapılandırmanıza ekleyin
  ```json
  {
    "mcpServers": {
      "Bifrost": {
        "url": "http://localhost:8008/sse"
      }
    }
  }
  ```

  ![Screenshot_78](https://github.com/user-attachments/assets/55588c9e-7f88-4830-b87f-184018873ca1)

  Cursor ile kurulum ve kullanım için bu videoyu izleyin

  #### YENİ CURSOR SÜRÜMLERI İÇİN BU KODU KULLANIN
  ```json
  {
    "mcpServers": {
      "Bifrost": {
        "url": "http://localhost:8008/sse"
      }
    }
  }
  ```

  ## Çoklu Proje Desteği

  Birden fazla proje ile çalışırken, her proje kendi dedicated MCP server uç noktasına ve portuna sahip olabilir. Bu, açık birden fazla VS Code pencereniz olduğunda veya dil sunucusu yeteneklerine ihtiyaç duyan birden fazla proje ile çalışırken kullanışlıdır.

  ### Proje Yapılandırması

  Proje kökünüzde bir `bifrost.config.json` dosyası oluşturun:

  ```json
  {
      "projectName": "MyProject",
      "description": "Projenizin açıklaması",
      "path": "/my-project",
      "port": 5642
  }
  ```

  Sunucu bu yapılandırmayı şu şekilde kullanır:
  - Projeye özgü uç noktalar oluşturur (örn. `http://localhost:5642/my-project/sse`)
  - AI asistanlarına proje bilgilerini sağlar
  - Her proje için dedicated port kullanır
  - Proje hizmetlerini diğer çalışan örneklerden izole eder

  ### Örnek Yapılandırmalar

  1. Backend API Projesi:
  ```json
  {
      "projectName": "BackendAPI",
      "description": "TypeScript ile Node.js REST API",
      "path": "/backend-api",
      "port": 5643
  }
  ```

  2. Frontend Web Uygulaması:
  ```json
  {
      "projectName": "FrontendApp",
      "description": "React frontend uygulaması",
      "path": "/frontend-app",
      "port": 5644
  }
  ```

  ### Port Yapılandırması

  Her proje birden fazla VS Code örneği çalışırken çatışmaları önlemek için kendi benzersiz portunu belirtmelidir:

  - `bifrost.config.json` içindeki `port` alanı sunucunun hangi portu kullanacağını belirler
  - Port belirtilmezse, geriye dönük uyumluluk için varsayılan olarak 8008'e ayarlanır
  - Farklı projelerin eş zamanlı çalışmasını sağlamak için farklı portlar seçin
  - Yapılandırılmış port zaten kullanımdaysa sunucu başlatılamaz ve şunlardan birini yapmanız gerekir:
    - Portu boşaltın
    - Yapılandırmada portu değiştirin
    - Bu portu kullanan diğer VS Code örneğini kapatın

  ### Projeye Özgü Uç Noktalara Bağlanma

  AI asistan yapılandırmanızı projeye özgü uç nokta ve portu kullanacak şekilde güncelleyin:

  ```json
  {
    "mcpServers": {
      "BackendAPI": {
        "url": "http://localhost:5643/backend-api/sse"
      },
      "FrontendApp": {
        "url": "http://localhost:5644/frontend-app/sse"
      }
    }
  }
  ```

  ### Geriye Dönük Uyumluluk

  `bifrost.config.json` mevcut değilse, sunucu varsayılan yapılandırmayı kullanır:
  - Port: 8008
  - SSE uç noktası: `http://localhost:8008/sse`
  - Message uç noktası: `http://localhost:8008/message`

  Bu, mevcut yapılandırmalar ve araçlarla uyumluluğu korur.

  ## Mevcut Araçlar

  Uzantı aşağıdakiler dahil olmak üzere birçok VSCode dil özelliğine erişim sağlar:

  * **find\_usages**: Tüm symbol referanslarını konumlandırın.
  * **go\_to\_definition**: Symbol tanımlarına anında atlayın.
  * **find\_implementations**: Interface'lerin/abstract metodların uygulamalarını keşfedin.
  * **get\_hover\_info**: Hover'da zengin symbol belgelerini alın.
  * **get\_document\_symbols**: Bir dosyadaki tüm sembolleri listeleyin.
  * **get\_completions**: Context farkında auto-complete'ler alın.
  * **get\_signature\_help**: Function parametresi ipuçları ve overload'lar.
  * **get\_rename\_locations**: Proje genelinde rename işlemi yapılacak yerlerin konumunu güvenle alın.
  * **rename**: Bir symbol üzerinde rename işlemi gerçekleştirin
  * **get\_code\_actions**: Hızlı düzeltmeler, refactorlar ve iyileştirmeler.
  * **get\_semantic\_tokens**: Gelişmiş highlight verisi.
  * **get\_call\_hierarchy**: Incoming/outgoing çağrı ilişkilerini görün.
  * **get\_type\_hierarchy**: Sınıf ve interface kalıtımını görselleştirin.
  * **get\_code\_lens**: İnline öngörüler (referanslar, testler, vb.).
  * **get\_selection\_range**: Kod blokları için akıllı seçim genişlemesi.
  * **get\_type\_definition**: Temel alınan tür tanımlarına atlayın.
  * **get\_declaration**: Symbol deklarasyonlarına gidin.
  * **get\_document\_highlights**: Bir simbolün tüm oluşumlarını vurgulayın.
  * **get\_workspace\_symbols**: Tüm çalışma alanınızda semboller arayın.

  ## Gereksinimler

  - Visual Studio Code sürümü 1.93.0 veya üstü
  - Çalışmak istediğiniz diller için uygun dil uzantıları (örn. C# dosyaları için C# uzantısı)

  ### Mevcut Komutlar

  - `Bifrost MCP: Start Server` - Port 8008'de MCP sunucusunu manuel olarak başlatın
  - `Bifrost MCP: Start Server on port` - MCP sunucusunu belirtilen portta manuel olarak başlatın
  - `Bifrost MCP: Stop Server` - Çalışan MCP sunucusunu durdurun
  - `Bifrost MCP: Open Debug Panel` - Mevcut araçları test etmek için debug panel'i açın

  ![image](https://raw.githubusercontent.com/biegehydra/BifrostMCP/refs/heads/master/src/images/commands.png)

  ## Star Geçmişi

  [![Star History Chart](https://api.star-history.com/svg?repos=biegehydra/BifrostMCP&type=Date)](https://star-history.com/#biegehydra/BifrostMCP&Date)

  ## Örnek Araç Kullanımı

  ### Referansları Bulma
  ```json
  {
    "name": "find_usages",
    "arguments": {
      "textDocument": {
        "uri": "file:///path/to/your/file"
      },
      "position": {
        "line": 10,
        "character": 15
      },
      "context": {
        "includeDeclaration": true
      }
    }
  }
  ```

  ### Çalışma Alanı Symbol Arama
  ```json
  {
    "name": "get_workspace_symbols",
    "arguments": {
      "query": "MyClass"
    }
  }
  ```

  ## Sorun Giderme

  Sorunlarla karşılaşırsanız:

  1. Projeniz için uygun dil uzantılarının yüklü olduğundan emin olun
  2. Projenizin VSCode'da doğru yüklendiğini kontrol edin
  3. Port 8008'in sisteminizde uygun olduğunu doğrulayın
  4. VSCode output panel'ini hata mesajları için kontrol edin

  ## Katkıda Bulunma
  Ek işlevsellik eklemek istiyorsanız işte [VSCode komutları](https://github.com/microsoft/vscode-docs/blob/main/api/references/commands.md?plain=1). Bence rename ve diğer birkaç şey hala gerekiyor.
  Lütfen [GitHub repository](https://github.com/biegehydra/csharplangmcpserver)'ye sorunlar veya pull request'ler göndermekten çekinmeyin.

  `vsce package`

  ## Hata Ayıklama
  `MCP: Open Debug Panel` komutunu kullanın
  ![image](https://raw.githubusercontent.com/biegehydra/BifrostMCP/refs/heads/master/src/images/debug_panel.png)

  ## Lisans

  Bu uzantı APGL-3.0 Lisansı altında lisanslanmıştır.
---

# Bifrost - VSCode Dev Tools MCP Server
<a href="https://marketplace.visualstudio.com/items?itemName=ConnorHallman.bifrost-mcp">
  
</a>

This VS Code extension provides a Model Context Protocol (MCP) server that exposes VSCode's powerful development tools and language features to AI tools. It enables advanced code navigation, analysis, and manipulation capabilities when using AI coding assistants that support the MCP protocol.

![image](https://raw.githubusercontent.com/biegehydra/BifrostMCP/refs/heads/master/src/images/cursor.png)

## Table of Contents
- [Features](#features)
- [Installation/Usage](#usage)
- [Multi-Project Support](#multiple-project-support)
- [Available Tools](#available-tools)
- [Available Commands](#available-commands)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Debugging](#debugging)
- [License](#license)

## Features

- **Language Server Integration**: Access VSCode's language server capabilities for any supported language
- **Code Navigation**: Find references, definitions, implementations, and more
- **Symbol Search**: Search for symbols across your workspace
- **Code Analysis**: Get semantic tokens, document symbols, and type information
- **Smart Selection**: Use semantic selection ranges for intelligent code selection
- **Code Actions**: Access refactoring suggestions and quick fixes
- **HTTP/SSE Server**: Exposes language features over an MCP-compatible HTTP server
- **AI Assistant Integration**: Ready to work with AI assistants that support the MCP protocol

## Usage

### Installation

1. Install [the extension](https://marketplace.visualstudio.com/items?itemName=ConnorHallman.bifrost-mcp) from the VS Code marketplace
2. Install any language-specific extensions you need for your development
3. Open your project in VS Code

### Configuration

The extension will automatically start an MCP server when activated. To configure an AI assistant to use this server:

1. The server runs on port 8008 by default (configurable with `bifrost.config.json`)
2. Configure your MCP-compatible AI assistant to connect to:
   - SSE endpoint: `http://localhost:8008/sse`
   - Message endpoint: `http://localhost:8008/message`

### LLM Rules
I have also provided sample rules that can be used in .cursorrules files for better results.

[Example Cursor Rules](https://github.com/biegehydra/BifrostMCP/blob/master/ExampleCursorRules.md)

[Example MDC Rules](https://github.com/biegehydra/BifrostMCP/blob/master/example.mdc)

### Cline Installation
- Step 1. Install [Supergateway](https://github.com/supercorp-ai/supergateway)
- Step 2. Add config to cline
- Step 3. It will show up red but seems to work fine

#### Windows Config
```json
{
  "mcpServers": {
    "Bifrost": {
      "command": "cmd",
      "args": [
        "/c",
        "npx",
        "-y",
        "supergateway",
        "--sse",
        "http://localhost:8008/sse"
      ],
      "disabled": false,
      "autoApprove": [],
      "timeout": 600
    }
  }
}
```

#### Mac/Linux Config
```json
{
  "mcpServers": {
    "Bifrost": {
      "command": "npx",
      "args": [
        "-y",
        "supergateway",
        "--sse",
        "http://localhost:8008/sse"
      ],
      "disabled": false,
      "autoApprove": [],
      "timeout": 600
    }
  }
}
```

### Roo Code Installation
- Step 1: Add the SSE config to your global or project-based MCP configuration
```json
{
  "mcpServers": {
    "Bifrost": {
      "url": "http://localhost:8008/sse"
    }
  }
}
```

![Screenshot_78](https://github.com/user-attachments/assets/55588c9e-7f88-4830-b87f-184018873ca1)

Follow this video to install and use with cursor

#### FOR NEW VERSIONS OF CURSOR, USE THIS CODE
```json
{
  "mcpServers": {
    "Bifrost": {
      "url": "http://localhost:8008/sse"
    }
  }
}
```

## Multiple Project Support

When working with multiple projects, each project can have its own dedicated MCP server endpoint and port. This is useful when you have multiple VS Code windows open or are working with multiple projects that need language server capabilities.

### Project Configuration

Create a `bifrost.config.json` file in your project root:

```json
{
    "projectName": "MyProject",
    "description": "Description of your project",
    "path": "/my-project",
    "port": 5642
}
```

The server will use this configuration to:
- Create project-specific endpoints (e.g., `http://localhost:5642/my-project/sse`)
- Provide project information to AI assistants
- Use a dedicated port for each project
- Isolate project services from other running instances

### Example Configurations

1. Backend API Project:
```json
{
    "projectName": "BackendAPI",
    "description": "Node.js REST API with TypeScript",
    "path": "/backend-api",
    "port": 5643
}
```

2. Frontend Web App:
```json
{
    "projectName": "FrontendApp",
    "description": "React frontend application",
    "path": "/frontend-app",
    "port": 5644
}
```

### Port Configuration

Each project should specify its own unique port to avoid conflicts when multiple VS Code instances are running:

- The `port` field in `bifrost.config.json` determines which port the server will use
- If no port is specified, it defaults to 8008 for backwards compatibility
- Choose different ports for different projects to ensure they can run simultaneously
- The server will fail to start if the configured port is already in use, requiring you to either:
  - Free up the port
  - Change the port in the config
  - Close the other VS Code instance using that port

### Connecting to Project-Specific Endpoints

Update your AI assistant configuration to use the project-specific endpoint and port:

```json
{
  "mcpServers": {
    "BackendAPI": {
      "url": "http://localhost:5643/backend-api/sse"
    },
    "FrontendApp": {
      "url": "http://localhost:5644/frontend-app/sse"
    }
  }
}
```

### Backwards Compatibility

If no `bifrost.config.json` is present, the server will use the default configuration:
- Port: 8008
- SSE endpoint: `http://localhost:8008/sse`
- Message endpoint: `http://localhost:8008/message`

This maintains compatibility with existing configurations and tools.

## Available Tools

The extension provides access to many VSCode language features including:

* **find\_usages**: Locate all symbol references.
* **go\_to\_definition**: Jump to symbol definitions instantly.
* **find\_implementations**: Discover implementations of interfaces/abstract methods.
* **get\_hover\_info**: Get rich symbol docs on hover.
* **get\_document\_symbols**: Outline all symbols in a file.
* **get\_completions**: Context-aware auto-completions.
* **get\_signature\_help**: Function parameter hints and overloads.
* **get\_rename\_locations**: Safely get location of places to perform a rename across the project.
* **rename**: Perform rename on a symbol
* **get\_code\_actions**: Quick fixes, refactors, and improvements.
* **get\_semantic\_tokens**: Enhanced highlighting data.
* **get\_call\_hierarchy**: See incoming/outgoing call relationships.
* **get\_type\_hierarchy**: Visualize class and interface inheritance.
* **get\_code\_lens**: Inline insights (references, tests, etc.).
* **get\_selection\_range**: Smart selection expansion for code blocks.
* **get\_type\_definition**: Jump to underlying type definitions.
* **get\_declaration**: Navigate to symbol declarations.
* **get\_document\_highlights**: Highlight all occurrences of a symbol.
* **get\_workspace\_symbols**: Search symbols across your entire workspace.

## Requirements

- Visual Studio Code version 1.93.0 or higher
- Appropriate language extensions for the languages you want to work with (e.g., C# extension for C# files)

### Available Commands

- `Bifrost MCP: Start Server` - Manually start the MCP server on port 8008
- `Bifrost MCP: Start Server on port` - Manually start the MCP server on specified port
- `Bifrost MCP: Stop Server` - Stop the running MCP server
- `Bifrost MCP: Open Debug Panel` - Open the debug panel to test available tools

![image](https://raw.githubusercontent.com/biegehydra/BifrostMCP/refs/heads/master/src/images/commands.png)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=biegehydra/BifrostMCP&type=Date)](https://star-history.com/#biegehydra/BifrostMCP&Date)

## Example Tool Usage

### Find References
```json
{
  "name": "find_usages",
  "arguments": {
    "textDocument": {
      "uri": "file:///path/to/your/file"
    },
    "position": {
      "line": 10,
      "character": 15
    },
    "context": {
      "includeDeclaration": true
    }
  }
}
```

### Workspace Symbol Search
```json
{
  "name": "get_workspace_symbols",
  "arguments": {
    "query": "MyClass"
  }
}
```

## Troubleshooting

If you encounter issues:

1. Ensure you have the appropriate language extensions installed for your project
2. Check that your project has loaded correctly in VSCode
3. Verify that port 8008 is available on your system
4. Check the VSCode output panel for any error messages

## Contributing
Here are [Vscodes commands](https://github.com/microsoft/vscode-docs/blob/main/api/references/commands.md?plain=1) if you want to add additional functionality go ahead. I think we still need rename and a few others.
Please feel free to submit issues or pull requests to the [GitHub repository](https://github.com/biegehydra/csharplangmcpserver).

`vsce package`

## Debugging
Use the `MCP: Open Debug Panel` command
![image](https://raw.githubusercontent.com/biegehydra/BifrostMCP/refs/heads/master/src/images/debug_panel.png)

## License

This extension is licensed under the APGL-3.0 License.
