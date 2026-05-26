---
name: "TencentEdgeOne/edgeone-pages-mcp"
description: "An MCP service for deploying HTML content to EdgeOne Pages and obtaining a publicly accessible URL."
description_tr: "EdgeOne Pages'e HTML içeriği dağıtmak ve herkese açık bir URL almak için bir MCP servisi."
category: "Developer Tools"
repo: "TencentEdgeOne/edgeone-pages-mcp"
stars: 419
url: "https://github.com/TencentEdgeOne/edgeone-pages-mcp"
body_length: 4122
license: "MIT"
language: "TypeScript"
homepage: "https://edgeone.ai/products/pages"
body_tr: |-
  # EdgeOne Pages MCP

  HTML içeriğini, klasörleri veya tam yığın projeleri EdgeOne Pages'e dağıtmak ve herkese açık URL'ler elde etmek için bir MCP servisidir.

  <a href="https://glama.ai/mcp/servers/@TencentEdgeOne/edgeone-pages-mcp">
    
  </a>

  ## Demo

  ### HTML Dağıtma

  ![](https://cdnstatic.tencentcs.com/edgeone/pages/assets/U_GpJ-1746519327306.gif)

  ### Klasör Dağıtma

  ![](https://cdnstatic.tencentcs.com/edgeone/pages/assets/kR_Kk-1746519251292.gif)

  ## Gereksinimler

  - Node.js 18 veya üstü

  ## MCP Yapılandırması

  ### stdio MCP Server

  Tam özellikli MCP servisi; tam yığın projeleri dağıtmak için `deploy_folder` aracını destekler.

  ```jsonc
  // Tencent Cloud Uluslararası (Varsayılan)
  {
    "mcpServers": {
      "edgeone-pages-mcp-server": {
        "timeout": 600,
        "command": "npx",
        "args": ["edgeone-pages-mcp-fullstack@latest"]
      }
    }
  }

  // Tencent Cloud Çin
  {
    "mcpServers": {
      "edgeone-pages-mcp-server": {
        "timeout": 600,
        "command": "npx",
        "args": ["edgeone-pages-mcp-fullstack@latest", "--region", "china"]
      }
    }
  }
  ```

  Aşağıdaki MCP Server yakında kullanımdan kaldırılacaktır:

  `deploy_html` ve `deploy_folder_or_zip` araçlarını destekler.

  ```jsonc
  {
    "mcpServers": {
      "edgeone-pages-mcp-server": {
        "command": "npx",
        "args": ["edgeone-pages-mcp@latest"],
        "env": {
          // İsteğe bağlı.
          // Klasörleri veya zip dosyalarını EdgeOne Pages projelerine dağıtmanız gerekiyorsa,
          // EdgeOne Pages API token'ınızı sağlayın.
          // API token'ınızı nasıl elde edeceğiniz:
          // https://edgeone.ai/document/177158578324279296
          "EDGEONE_PAGES_API_TOKEN": "",
          // İsteğe bağlı. Yeni bir EdgeOne Pages projesi oluşturmak için boş bırakın.
          // Mevcut bir projeyi güncellemek için proje adı sağlayın.
          "EDGEONE_PAGES_PROJECT_NAME": ""
        }
      }
    }
  }
  ```

  ### Streaming HTTP MCP Server

  HTTP streaming'i destekleyen MCP istemcileri için; yalnızca `deploy_html` aracını destekler.

  ```json
  {
    "mcpServers": {
      "edgeone-pages-mcp-server": {
        "url": "https://mcp-on-edge.edgeone.site/mcp-server"
      }
    }
  }
  ```

  ## Araç Detayları

  ### deploy_html Aracı

  #### Mimari Tasarım

  ![EdgeOne Pages MCP Mimarisi](https://raw.githubusercontent.com/TencentEdgeOne/edgeone-pages-mcp/HEAD/assets/architecture.svg)

  Mimari diyagram `deploy_html` aracının tam iş akışını göstermektedir:

  1. Büyük Dil Modeli HTML içeriği üretir
  2. İçerik EdgeOne Pages MCP Server'a gönderilir
  3. MCP Server içeriği EdgeOne Pages Edge Functions'a dağıtır
  4. İçerik hızlı kenar erişimi için EdgeOne KV Store'da depolanır
  5. MCP Server halka açık bir URL döndürür
  6. Kullanıcılar dağıtılan içeriğe hızlı kenar teslimi ile tarayıcı aracılığıyla erişebilir

  #### Uygulama Detayları

  Bu araç, statik HTML içeriğini dağıtmak için EdgeOne Pages Functions ile entegre olur:

  1. **EdgeOne Pages Functions** - Kenarında JavaScript/TypeScript kodu çalıştırmayı destekleyen sunucusuz bir bilişim platformu

  2. **Temel Uygulama Özellikleri**:

     - HTML içeriğini kaydetmek ve sunmak için EdgeOne Pages KV depolamasını kullanır
     - Her dağıtım için otomatik olarak herkese açık URL'ler üretir
     - Kapsamlı API hata işleme ve geri bildirim sağlar

  3. **Nasıl Çalışır**:
     - MCP server, `deploy_html` aracı aracılığıyla HTML içeriğini alır
     - Temel URL'yi elde etmek için EdgeOne Pages API'ye bağlanır
     - EdgeOne Pages KV API'sini kullanarak HTML içeriğini dağıtır
     - Hemen erişilebilir bir halka açık URL döndürür

  Daha fazla bilgi için [EdgeOne Pages Functions belgelerine](https://edgeone.ai/document/162227908259442688) ve [EdgeOne Pages KV Depolama Rehberine](https://edgeone.ai/document/162227803822321664) bakın.

  Kaynak kod açık kaynaktır ve kendi kendine dağıtılabilir; özel etki alanı bağlamayı destekler: https://github.com/TencentEdgeOne/self-hosted-pages-mcp

  ### deploy_folder Aracı

  Bu araç EdgeOne Pages'e tam projelerin dağıtılmasını destekler:

  - Statik web sitesi projelerinin tam dağıtılmasını destekler
  - Tam yığın uygulamalarının dağıtılmasını destekler
  - Mevcut projeleri güncelleme veya yeni olanlar oluşturma seçeneği

  ## Lisans

  MIT
---

# EdgeOne Pages MCP

An MCP service for deploying HTML content, folders, or full-stack projects to EdgeOne Pages and obtaining publicly accessible URLs.

<a href="https://glama.ai/mcp/servers/@TencentEdgeOne/edgeone-pages-mcp">
  
</a>

## Demo

### Deploy HTML

![](https://cdnstatic.tencentcs.com/edgeone/pages/assets/U_GpJ-1746519327306.gif)

### Deploy Folder

![](https://cdnstatic.tencentcs.com/edgeone/pages/assets/kR_Kk-1746519251292.gif)

## Requirements

- Node.js 18 or higher

## MCP Configuration

### stdio MCP Server

Full-featured MCP service that supports the `deploy_folder` tool for deploying full-stack projects.

```jsonc
// Tencent Cloud International (Default)
{
  "mcpServers": {
    "edgeone-pages-mcp-server": {
      "timeout": 600,
      "command": "npx",
      "args": ["edgeone-pages-mcp-fullstack@latest"]
    }
  }
}

// Tencent Cloud China
{
  "mcpServers": {
    "edgeone-pages-mcp-server": {
      "timeout": 600,
      "command": "npx",
      "args": ["edgeone-pages-mcp-fullstack@latest", "--region", "china"]
    }
  }
}
```

The following MCP Server will be deprecated soon:

Supports both `deploy_html` and `deploy_folder_or_zip` tools.

```jsonc
{
  "mcpServers": {
    "edgeone-pages-mcp-server": {
      "command": "npx",
      "args": ["edgeone-pages-mcp@latest"],
      "env": {
        // Optional. 
        // If you need to deploy folders or zip files to 
        // EdgeOne Pages projects, provide your EdgeOne Pages API token.
        // How to obtain your API token: 
        // https://edgeone.ai/document/177158578324279296
        "EDGEONE_PAGES_API_TOKEN": "",
        // Optional. Leave empty to create a new EdgeOne Pages project.
        // Provide a project name to update an existing project.
        "EDGEONE_PAGES_PROJECT_NAME": ""
      }
    }
  }
}
```

### Streaming HTTP MCP Server

For MCP clients that support HTTP streaming, only supports the `deploy_html` tool.

```json
{
  "mcpServers": {
    "edgeone-pages-mcp-server": {
      "url": "https://mcp-on-edge.edgeone.site/mcp-server"
    }
  }
}
```

## Tool Details

### deploy_html Tool

#### Architecture Design

![EdgeOne Pages MCP Architecture](https://raw.githubusercontent.com/TencentEdgeOne/edgeone-pages-mcp/HEAD/assets/architecture.svg)

The architecture diagram shows the complete workflow of the `deploy_html` tool:

1. Large Language Model generates HTML content
2. Content is sent to the EdgeOne Pages MCP Server
3. MCP Server deploys the content to EdgeOne Pages Edge Functions
4. Content is stored in EdgeOne KV Store for fast edge access
5. MCP Server returns a publicly accessible URL
6. Users can access the deployed content via browser with fast edge delivery

#### Implementation Details

This tool integrates with EdgeOne Pages Functions to deploy static HTML content:

1. **EdgeOne Pages Functions** - A serverless computing platform that supports executing JavaScript/TypeScript code at the edge

2. **Core Implementation Features**:

   - Uses EdgeOne Pages KV storage to save and serve HTML content
   - Automatically generates publicly accessible URLs for each deployment
   - Provides comprehensive API error handling and feedback

3. **How It Works**:
   - MCP server receives HTML content through the `deploy_html` tool
   - Connects to EdgeOne Pages API to obtain the base URL
   - Deploys HTML content using the EdgeOne Pages KV API
   - Returns an immediately accessible public URL

For more information, refer to the [EdgeOne Pages Functions documentation](https://edgeone.ai/document/162227908259442688) and [EdgeOne Pages KV Storage Guide](https://edgeone.ai/document/162227803822321664).

The source code is open source and can be self-deployed with custom domain binding: https://github.com/TencentEdgeOne/self-hosted-pages-mcp

### deploy_folder Tool

This tool supports deploying complete projects to EdgeOne Pages:

- Supports full deployment of static website projects
- Supports deployment of full-stack applications
- Option to update existing projects or create new ones

## License

MIT
