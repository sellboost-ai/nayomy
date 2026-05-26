---
name: "Tiberriver256/mcp-server-azure-devops"
description: "Azure DevOps integration for repository management, work items, and pipelines."
description_tr: "Azure DevOps entegrasyonu ile repository yönetimi, work items ve pipeline'larınızı tek yerden kontrol edin."
category: "Version Control"
repo: "Tiberriver256/mcp-server-azure-devops"
stars: 369
url: "https://github.com/Tiberriver256/mcp-server-azure-devops"
body_length: 12833
license: "MIT"
language: "TypeScript"
body_tr: |-
  # Azure DevOps MCP Sunucusu

  Azure DevOps için bir Model Context Protocol (MCP) sunucu uygulaması. AI yardımcılarının standartlaştırılmış bir protokol aracılığıyla Azure DevOps API'leriyle etkileşime girmesini sağlar.

  ## Genel Bakış

  Bu sunucu Azure DevOps için [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) uygular ve Claude gibi AI yardımcılarının Azure DevOps kaynaklarıyla güvenli bir şekilde etkileşime girmesini sağlar. Sunucu, AI modelleri ile Azure DevOps API'leri arasında bir köprü görevi görerek şunlar için standartlaştırılmış bir yol sağlar:

  - Projelere, work item'lere, depolara ve daha fazlasına erişim ve yönetim
  - Work item'ler, şubeler ve pull request'ler oluşturma ve güncelleme
  - Doğal dil aracılığıyla yaygın DevOps iş akışlarını yürütme
  - Standartlaştırılmış kaynak URI'leri aracılığıyla depo içeriğine erişim
  - Azure DevOps kaynaklarıyla güvenli kimlik doğrulama ve etkileşim

  ## Sunucu Yapısı

  Sunucu, AI yardımcılarıyla iletişim kurmak için Model Context Protocol (MCP) etrafında yapılandırılmıştır. Azure DevOps kaynakları ile etkileşim için araçlar sağlar:

  - Projeler
  - Work Item'ler
  - Depolar
  - Pull Request'ler
  - Şubeler
  - Pipeline'lar

  ### Temel Bileşenler

  - **AzureDevOpsServer**: MCP sunucusunu başlatan ve araçları kaydeden ana sunucu sınıfı
  - **Feature Modülleri**: Özellik alanına göre organize edilmiş (work-items, projects, repositories, vb.)
  - **Request Handler'ları**: Her feature modülü request tanımlama ve işleme fonksiyonları sağlar
  - **Tool Handler'ları**: Her Azure DevOps işlemi için modüler fonksiyonlar
  - **Konfigürasyon**: Organizasyon URL'si, PAT vb. için ortam tabanlı konfigürasyon

  Sunucu, her feature alanı (work-items, projects, repositories gibi) kendi modülü içerisine kapsüllenen feature tabanlı bir mimariye sahiptir. Bu, kod tabanını daha bakımı yapılabilir ve yeni özelliklerle genişletilmesi daha kolay hale getirir.

  ## Başlangıç

  ### Ön Koşullar

  - Node.js (v16+)
  - npm veya yarn
  - Uygun erişime sahip Azure DevOps hesabı
  - Authentication kimlik bilgileri ([Authentication Guide](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/authentication.md) bölümüne bakınız):
    - Personal Access Token (PAT), veya
    - Azure Identity kimlik bilgileri, veya
    - Azure CLI login

  ### npm'den çalıştırma (npx)

  Eğer sadece **yayımlanmış** sunucu paketini çalıştırmak istiyorsanız, bu depoyu klonlamanız veya derleyemeniz **gerekmez**:

  ```bash
  npx -y @tiberriver256/mcp-server-azure-devops
  ```

  ### Yerel olarak çalıştırma (kaynaktan)

  Bu deponun bir checkout'ından:

  ```bash
  npm ci
  cp .env.example .env   # ardından değerleri düzenleyin
  npm run build
  npm start              # çalıştırır: node dist/index.js
  ```

  İteratif geliştirme için (otomatik yeniden yükleme):

  ```bash
  npm run dev            # ts-node-dev aracılığıyla src/index.ts'yi çalıştırır
  ```

  ### Claude Desktop/Cursor AI ile Kullanım

  Claude Desktop veya Cursor AI ile entegrasyon için aşağıdaki konfigürasyonlardan birini yapılandırma dosyanıza ekleyin.

  #### Azure Identity Authentication

  `az login` ile Azure CLI'ye giriş yaptığınızdan emin olun ve ardından aşağıdakileri ekleyin:

  ```json
  {
    "mcpServers": {
      "azureDevOps": {
        "command": "npx",
        "args": ["-y", "@tiberriver256/mcp-server-azure-devops"],
        "env": {
          "AZURE_DEVOPS_ORG_URL": "https://dev.azure.com/your-organization",
          "AZURE_DEVOPS_AUTH_METHOD": "azure-identity",
          "AZURE_DEVOPS_DEFAULT_PROJECT": "your-project-name"
        }
      }
    }
  }
  ```

  #### Personal Access Token (PAT) Authentication

  ```json
  {
    "mcpServers": {
      "azureDevOps": {
        "command": "npx",
        "args": ["-y", "@tiberriver256/mcp-server-azure-devops"],
        "env": {
          "AZURE_DEVOPS_ORG_URL": "https://dev.azure.com/your-organization",
          "AZURE_DEVOPS_AUTH_METHOD": "pat",
          "AZURE_DEVOPS_PAT": "<YOUR_PAT>",
          "AZURE_DEVOPS_DEFAULT_PROJECT": "your-project-name"
        }
      }
    }
  }
  ```

  Azure DevOps Server (on-prem) PAT authentication gerektirir. Örnek:

  ```json
  {
    "mcpServers": {
      "azureDevOps": {
        "command": "npx",
        "args": ["-y", "@tiberriver256/mcp-server-azure-devops"],
        "env": {
          "AZURE_DEVOPS_ORG_URL": "https://server:8080/tfs/DefaultCollection",
          "AZURE_DEVOPS_AUTH_METHOD": "pat",
          "AZURE_DEVOPS_PAT": "<YOUR_PAT>",
          "AZURE_DEVOPS_DEFAULT_PROJECT": "your-project-name"
        }
      }
    }
  }
  ```

  Detaylı konfigürasyon talimatları ve daha fazla authentication seçeneği için [Authentication Guide](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/authentication.md) bölümüne bakınız.

  ## Authentication Yöntemleri

  Bu sunucu Azure DevOps API'lerine bağlanmak için birden fazla authentication yöntemini destekler. Detaylı kurulum talimatları, konfigürasyon örnekleri ve sorun giderme ipuçları için [Authentication Guide](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/authentication.md) bölümüne bakınız.

  ### Desteklenen Authentication Yöntemleri

  1. **Personal Access Token (PAT)** - Basit token tabanlı authentication
  2. **Azure Identity (DefaultAzureCredential)** - Azure Identity SDK kullanarak esnek authentication
  3. **Azure CLI** - Azure CLI login'inizi kullanarak authentication

  Her authentication yöntemi için örnek konfigürasyon dosyaları [examples directory](https://github.com/tiberriver256/mcp-server-azure-devops/tree/main/docs/examples)'de mevcuttur.

  Azure DevOps Server (on-prem) sadece PAT authentication'ı destekler. Azure Identity ve Azure CLI, Azure DevOps Services için desteklenmiştir.

  ## Ortam Değişkenleri

  Tüm ortam değişkenlerinin ve açıklamalarının tam listesi için [Authentication Guide](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/authentication.md#configuration-reference) bölümüne bakınız.

  Önemli ortam değişkenleri:

  | Değişken                       | Açıklama                                                                        | Gerekli                     | Varsayılan       |
  | ------------------------------ | ------------------------------------------------------------------------------- | --------------------------- | ---------------- |
  | `AZURE_DEVOPS_AUTH_METHOD`     | Authentication yöntemi (`pat`, `azure-identity` veya `azure-cli`) - harf duyarsız | Hayır                       | `azure-identity` |
  | `AZURE_DEVOPS_ORG_URL`         | Azure DevOps organizasyonunuzun veya Server koleksiyonunun tam URL'si (örn. `https://server:8080/tfs/DefaultCollection`) | Evet                        | -                |
  | `AZURE_DEVOPS_PAT`             | Personal Access Token (PAT auth için)                                           | Sadece PAT auth ile         | -                |
  | `AZURE_DEVOPS_DEFAULT_PROJECT` | Hiçbiri belirtilmezse varsayılan proje                                          | Hayır                       | -                |
  | `AZURE_DEVOPS_API_VERSION`     | Kullanılacak API sürümü                                                         | Hayır                       | En Son          |
  | `AZURE_TENANT_ID`              | Azure AD tenant ID'si (service principals için)                                 | Sadece service principals ile | -                |
  | `AZURE_CLIENT_ID`              | Azure AD application ID'si (service principals için)                            | Sadece service principals ile | -                |
  | `AZURE_CLIENT_SECRET`          | Azure AD client secret'ı (service principals için)                              | Sadece service principals ile | -                |
  | `LOG_LEVEL`                    | Logging seviyesi (debug, info, warn, error)                                     | Hayır                       | info             |

  ## Authentication Sorun Giderme

  Her authentication yöntemi için detaylı sorun giderme bilgileri için [Authentication Guide](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/authentication.md#troubleshooting-authentication-issues) bölümüne bakınız.

  Yaygın sorunlar şunları içerir:

  - Geçersiz veya süresi dolmuş kimlik bilgileri
  - Yetersiz permissions
  - Ağ bağlantısı sorunları
  - Konfigürasyon hataları

  ## Authentication Uygulama Detayları

  Azure DevOps MCP sunucusunda authentication'ın nasıl uygulandığı hakkında teknik detaylar için [Authentication Guide](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/authentication.md) bölümüne ve `src/auth` dizinindeki kaynak koduna bakınız.

  ## Mevcut Araçlar

  Azure DevOps MCP sunucusu Azure DevOps kaynakları ile etkileşim için çeşitli araçlar sağlar. Her araç hakkında detaylı dokumentasyon için lütfen ilgili dokumentasyona bakınız.

  ### User Araçları

  - `get_me`: Kimliği doğrulanmış kullanıcının detaylarını alır (id, displayName, email) (Sadece Azure DevOps Services)

  ### Organization Araçları

  - `list_organizations`: Tüm erişilebilir organizasyonları listeler (Sadece Azure DevOps Services)

  ### Project Araçları

  - `list_projects`: Bir organizasyondaki tüm projeleri listeler
  - `get_project`: Belirli bir projenin detaylarını alır
  - `get_project_details`: Process, work item types ve teams dahil projenin kapsamlı detaylarını alır

  ### Repository Araçları

  - `list_repositories`: Bir projede tüm depoları listeler
  - `get_repository`: Belirli bir deponun detaylarını alır
  - `get_repository_details`: İstatistikler ve refs dahil depo hakkında detaylı bilgi alır
  - `get_file_content`: Bir depodan dosya veya dizinin içeriğini alır
  - `get_repository_tree`: Herhangi bir yol ve derinlikteki depo dosya ağacını listeler
  - `create_branch`: Mevcut birinden yeni bir şube oluşturur
  - `create_commit`: Birleştirilmiş diffs veya search/replace talimatları kullanarak bir şubeye birden fazla dosya değişikliğini işler

  ### Work Item Araçları

  - `get_work_item`: ID'ye göre work item'i alır
  - `create_work_item`: Yeni bir work item oluşturur
  - `update_work_item`: Mevcut bir work item'i günceller
  - `list_work_items`: Bir projede work item'leri listeler
  - `manage_work_item_link`: Work item'ler arasında link ekler, kaldırır veya günceller

  ### Search Araçları

  - `search_code`: Bir projede depolarda kod arar
  - `search_wiki`: Bir projede wiki sayfalarında içerik arar
  - `search_work_items`: Azure DevOps'de projeler arasında work item'ler arar

  ### Pipeline Araçları

  - `list_pipelines`: Bir projede pipeline'ları listeler
  - `get_pipeline`: Belirli bir pipeline'ın detaylarını alır
  - `list_pipeline_runs`: Bir pipeline için isteğe bağlı filtrelerle son çalıştırmaları listeler
  - `get_pipeline_run`: Detaylı çalıştırma bilgilerini ve artifact özetlerini alır
  - `download_pipeline_artifact`: Tek bir artifact dosyasını metin olarak indirir
  - `pipeline_timeline`: Bir çalıştırmanın stage ve job timeline'ını alır
  - `get_pipeline_log`: Ham veya JSON biçimlendirilmiş log içeriğini alır
  - `trigger_pipeline`: Özelleştirilebilir parametrelerle bir pipeline çalıştırmasını tetikler

  ### Wiki Araçları

  - `get_wikis`: Bir projede tüm wiki'leri listeler
  - `get_wiki_page`: Belirli bir wiki sayfasının içeriğini düz metin olarak alır

  ### Pull Request Araçları

  - [`create_pull_request`](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/tools/pull-requests.md#create_pull_request) - Yeni bir pull request oluşturur
  - [`get_pull_request`](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/tools/pull-requests.md#get_pull_request) - ID'ye göre pull request'i alır
  - [`list_pull_requests`](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/tools/pull-requests.md#list_pull_requests) - Bir depoda pull request'leri listeler
  - [`add_pull_request_comment`](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/tools/pull-requests.md#add_pull_request_comment) - Bir pull request'e yorum ekler
  - [`get_pull_request_comments`](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/tools/pull-requests.md#get_pull_request_comments) - Pull request'ten yorumları alır
  - [`update_pull_request`](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/tools/pull-requests.md#update_pull_request) - Mevcut bir pull request'i günceller (title, description, status, draft state, reviewers, work items)
  - [`get_pull_request_changes`](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/tools/pull-requests.md#get_pull_request_changes) - Pull request'teki değişiklikleri ve policy evaluation statusını listeler
  - [`get_pull_request_checks`](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/tools/pull-requests.md#get_pull_request_checks) - Status kontrolleri, policy evaluasyonları ve ilgili pipeline'ları özetler

  Tüm araçlar hakkında kapsamlı dokumentasyon için [Tools Documentation](https://github.com/tiberriver256/mcp-server-azure-devops/tree/main/docs/tools) bölümüne bakınız.

  ## Katkıda Bulunma

  Katkılar hoş geldinir! Katkı talimatları için lütfen [CONTRIBUTING.md](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/CONTRIBUTING.md) bölümüne bakınız.

  ## Star Tarihi

  [![Star History Chart](https://api.star-history.com/svg?repos=tiberriver256/mcp-server-azure-devops&type=Date)](https://www.star-history.com/#tiberriver256/mcp-server-azure-devops&Date)

  ## Lisans

  MIT
---

# Azure DevOps MCP Server

A Model Context Protocol (MCP) server implementation for Azure DevOps, allowing AI assistants to interact with Azure DevOps APIs through a standardized protocol.

## Overview

This server implements the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) for Azure DevOps, enabling AI assistants like Claude to interact with Azure DevOps resources securely. The server acts as a bridge between AI models and Azure DevOps APIs, providing a standardized way to:

- Access and manage projects, work items, repositories, and more
- Create and update work items, branches, and pull requests
- Execute common DevOps workflows through natural language
- Access repository content via standardized resource URIs
- Safely authenticate and interact with Azure DevOps resources

## Server Structure

The server is structured around the Model Context Protocol (MCP) for communicating with AI assistants. It provides tools for interacting with Azure DevOps resources including:

- Projects
- Work Items
- Repositories
- Pull Requests
- Branches
- Pipelines

### Core Components

- **AzureDevOpsServer**: Main server class that initializes the MCP server and registers tools
- **Feature Modules**: Organized by feature area (work-items, projects, repositories, etc.)
- **Request Handlers**: Each feature module provides request identification and handling functions
- **Tool Handlers**: Modular functions for each Azure DevOps operation
- **Configuration**: Environment-based configuration for organization URL, PAT, etc.

The server uses a feature-based architecture where each feature area (like work-items, projects, repositories) is encapsulated in its own module. This makes the codebase more maintainable and easier to extend with new features.

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Azure DevOps account with appropriate access
- Authentication credentials (see [Authentication Guide](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/authentication.md) for details):
  - Personal Access Token (PAT), or
  - Azure Identity credentials, or
  - Azure CLI login

### Running from npm (npx)

If you just want to run the **published** server package, you **do not** need to clone or build this repository:

```bash
npx -y @tiberriver256/mcp-server-azure-devops
```

### Running locally (from source)

From a checkout of this repository:

```bash
npm ci
cp .env.example .env   # then edit values
npm run build
npm start              # runs: node dist/index.js
```

For iterative development (auto-reload):

```bash
npm run dev            # runs src/index.ts via ts-node-dev
```

### Usage with Claude Desktop/Cursor AI

To integrate with Claude Desktop or Cursor AI, add one of the following configurations to your configuration file.

#### Azure Identity Authentication

Be sure you are logged in to Azure CLI with `az login` then add the following:

```json
{
  "mcpServers": {
    "azureDevOps": {
      "command": "npx",
      "args": ["-y", "@tiberriver256/mcp-server-azure-devops"],
      "env": {
        "AZURE_DEVOPS_ORG_URL": "https://dev.azure.com/your-organization",
        "AZURE_DEVOPS_AUTH_METHOD": "azure-identity",
        "AZURE_DEVOPS_DEFAULT_PROJECT": "your-project-name"
      }
    }
  }
}
```

#### Personal Access Token (PAT) Authentication

```json
{
  "mcpServers": {
    "azureDevOps": {
      "command": "npx",
      "args": ["-y", "@tiberriver256/mcp-server-azure-devops"],
      "env": {
        "AZURE_DEVOPS_ORG_URL": "https://dev.azure.com/your-organization",
        "AZURE_DEVOPS_AUTH_METHOD": "pat",
        "AZURE_DEVOPS_PAT": "<YOUR_PAT>",
        "AZURE_DEVOPS_DEFAULT_PROJECT": "your-project-name"
      }
    }
  }
}
```

Azure DevOps Server (on-prem) requires PAT authentication. Example:

```json
{
  "mcpServers": {
    "azureDevOps": {
      "command": "npx",
      "args": ["-y", "@tiberriver256/mcp-server-azure-devops"],
      "env": {
        "AZURE_DEVOPS_ORG_URL": "https://server:8080/tfs/DefaultCollection",
        "AZURE_DEVOPS_AUTH_METHOD": "pat",
        "AZURE_DEVOPS_PAT": "<YOUR_PAT>",
        "AZURE_DEVOPS_DEFAULT_PROJECT": "your-project-name"
      }
    }
  }
}
```

For detailed configuration instructions and more authentication options, see the [Authentication Guide](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/authentication.md).

## Authentication Methods

This server supports multiple authentication methods for connecting to Azure DevOps APIs. For detailed setup instructions, configuration examples, and troubleshooting tips, see the [Authentication Guide](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/authentication.md).

### Supported Authentication Methods

1. **Personal Access Token (PAT)** - Simple token-based authentication
2. **Azure Identity (DefaultAzureCredential)** - Flexible authentication using the Azure Identity SDK
3. **Azure CLI** - Authentication using your Azure CLI login

Example configuration files for each authentication method are available in the [examples directory](https://github.com/tiberriver256/mcp-server-azure-devops/tree/main/docs/examples).

Azure DevOps Server (on-prem) supports PAT authentication only. Azure Identity and Azure CLI are supported for Azure DevOps Services.

## Environment Variables

For a complete list of environment variables and their descriptions, see the [Authentication Guide](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/authentication.md#configuration-reference).

Key environment variables include:

| Variable                       | Description                                                                        | Required                     | Default          |
| ------------------------------ | ---------------------------------------------------------------------------------- | ---------------------------- | ---------------- |
| `AZURE_DEVOPS_AUTH_METHOD`     | Authentication method (`pat`, `azure-identity`, or `azure-cli`) - case-insensitive | No                           | `azure-identity` |
| `AZURE_DEVOPS_ORG_URL`         | Full URL to your Azure DevOps organization or Server collection (e.g., `https://server:8080/tfs/DefaultCollection`) | Yes                          | -                |
| `AZURE_DEVOPS_PAT`             | Personal Access Token (for PAT auth)                                               | Only with PAT auth           | -                |
| `AZURE_DEVOPS_DEFAULT_PROJECT` | Default project if none specified                                                  | No                           | -                |
| `AZURE_DEVOPS_API_VERSION`     | API version to use                                                                 | No                           | Latest           |
| `AZURE_TENANT_ID`              | Azure AD tenant ID (for service principals)                                        | Only with service principals | -                |
| `AZURE_CLIENT_ID`              | Azure AD application ID (for service principals)                                   | Only with service principals | -                |
| `AZURE_CLIENT_SECRET`          | Azure AD client secret (for service principals)                                    | Only with service principals | -                |
| `LOG_LEVEL`                    | Logging level (debug, info, warn, error)                                           | No                           | info             |

## Troubleshooting Authentication

For detailed troubleshooting information for each authentication method, see the [Authentication Guide](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/authentication.md#troubleshooting-authentication-issues).

Common issues include:

- Invalid or expired credentials
- Insufficient permissions
- Network connectivity problems
- Configuration errors

## Authentication Implementation Details

For technical details about how authentication is implemented in the Azure DevOps MCP server, see the [Authentication Guide](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/authentication.md) and the source code in the `src/auth` directory.

## Available Tools

The Azure DevOps MCP server provides a variety of tools for interacting with Azure DevOps resources. For detailed documentation on each tool, please refer to the corresponding documentation.

### User Tools

- `get_me`: Get details of the authenticated user (id, displayName, email) (Azure DevOps Services only)

### Organization Tools

- `list_organizations`: List all accessible organizations (Azure DevOps Services only)

### Project Tools

- `list_projects`: List all projects in an organization
- `get_project`: Get details of a specific project
- `get_project_details`: Get comprehensive details of a project including process, work item types, and teams

### Repository Tools

- `list_repositories`: List all repositories in a project
- `get_repository`: Get details of a specific repository
- `get_repository_details`: Get detailed information about a repository including statistics and refs
- `get_file_content`: Get content of a file or directory from a repository
- `get_repository_tree`: List a repository's file tree from any path and depth
- `create_branch`: Create a new branch from an existing one
- `create_commit`: Commit multiple file changes to a branch using unified diffs or search/replace instructions

### Work Item Tools

- `get_work_item`: Retrieve a work item by ID
- `create_work_item`: Create a new work item
- `update_work_item`: Update an existing work item
- `list_work_items`: List work items in a project
- `manage_work_item_link`: Add, remove, or update links between work items

### Search Tools

- `search_code`: Search for code across repositories in a project
- `search_wiki`: Search for content across wiki pages in a project
- `search_work_items`: Search for work items across projects in Azure DevOps

### Pipelines Tools

- `list_pipelines`: List pipelines in a project
- `get_pipeline`: Get details of a specific pipeline
- `list_pipeline_runs`: List recent runs for a pipeline with optional filters
- `get_pipeline_run`: Get detailed run information and artifact summaries
- `download_pipeline_artifact`: Download a single artifact file as text
- `pipeline_timeline`: Retrieve the stage and job timeline for a run
- `get_pipeline_log`: Retrieve raw or JSON-formatted log content
- `trigger_pipeline`: Trigger a pipeline run with customizable parameters

### Wiki Tools

- `get_wikis`: List all wikis in a project
- `get_wiki_page`: Get content of a specific wiki page as plain text

### Pull Request Tools

- [`create_pull_request`](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/tools/pull-requests.md#create_pull_request) - Create a new pull request
- [`get_pull_request`](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/tools/pull-requests.md#get_pull_request) - Get a pull request by ID
- [`list_pull_requests`](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/tools/pull-requests.md#list_pull_requests) - List pull requests in a repository
- [`add_pull_request_comment`](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/tools/pull-requests.md#add_pull_request_comment) - Add a comment to a pull request
- [`get_pull_request_comments`](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/tools/pull-requests.md#get_pull_request_comments) - Get comments from a pull request
- [`update_pull_request`](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/tools/pull-requests.md#update_pull_request) - Update an existing pull request (title, description, status, draft state, reviewers, work items)
- [`get_pull_request_changes`](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/tools/pull-requests.md#get_pull_request_changes) - List changes in a pull request and policy evaluation status
- [`get_pull_request_checks`](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/docs/tools/pull-requests.md#get_pull_request_checks) - Summarize status checks, policy evaluations, and their related pipelines

For comprehensive documentation on all tools, see the [Tools Documentation](https://github.com/tiberriver256/mcp-server-azure-devops/tree/main/docs/tools).

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](https://github.com/tiberriver256/mcp-server-azure-devops/blob/main/CONTRIBUTING.md) for contribution guidelines.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=tiberriver256/mcp-server-azure-devops&type=Date)](https://www.star-history.com/#tiberriver256/mcp-server-azure-devops&Date)

## License

MIT
