---
name: "delano/postman-mcp-server"
description: "Interact with Postman API"
category: "Developer Tools"
repo: "delano/postman-mcp-server"
stars: 150
url: "https://github.com/delano/postman-mcp-server"
body_length: 10518
license: "MIT"
language: "TypeScript"
homepage: "https://www.postman.com/postman/postman-public-workspace/"
body_tr: |-
  # Postman MCP Server
  [![smithery badge](https://smithery.ai/badge/postman-api-server)](https://smithery.ai/server/postman-api-server)
  **Sürüm:** v0.2.0

  [Postman](https://www.postman.com/) API'sine erişim sağlayan bir MCP sunucusu. İşlevsellik [resmi OpenAPI belirtimi](https://www.postman.com/postman/postman-public-workspace/documentation/i2uqzpp/postman-api) temel alınarak oluşturulmuştur. Daha fazla bilgi için [Postman API belgelerine](https://www.postman.com/postman/postman-public-workspace/) bakın.

  Bu proje Anthropic tarafından yapılan Model Context Protocol (MCP) girişiminin bir parçasıdır. Daha fazla bilgi için [MCP GitHub deposunu](https://github.com/modelcontextprotocol) ve [Anthropic blog'undaki duyuruyu](https://www.anthropic.com/news/model-context-protocol) ziyaret edin.

  **[Kurulum talimatlarına atla](#kurulum)**


  ![postman-mcp-server - Cover Image](https://github.com/user-attachments/assets/e19d712f-ad97-4456-a414-d69b159a9ed2)


  > [!WARNING]
  > Bu proje şu anda etkin geliştirme aşamasındadır. Lütfen dikkatli kullanınız ve değişikliklere hazırlıklı olunuz.

  > [!NOTE]
  > Yapay Zeka tarafından üretilen kod. Cline v2.2.2 ile Claude 3.5 Sonnet (2024-10-22) kullanılmıştır. Komut dosyaları ve bu kodun nasıl oluşturulduğu hakkında ayrıntılar için docs/README.md dosyasına bakınız.

  <a href="https://glama.ai/mcp/servers/zoig549xfd"></a>

  ---

  * [Genel Bakış](#genel-bakış)
  * [Özellikler](#özellikler)
    * [Koleksiyonlar](#koleksiyonlar)
    * [Ortamlar](#ortamlar)
    * [API'ler](#apiler)
    * [Kimlik Doğrulama & Yetkilendirme](#kimlik-doğrulama--yetkilendirme)
    * [Ek Özellikler](#ek-özellikler)
  * [Kurulum](#kurulum)
    * [Ön Koşullar](#ön-koşullar)
    * [Adımlar](#adımlar)
  * [Kullanım](#kullanım)
    * [API Anahtarlarını Ayarlama](#api-anahtarlarını-ayarlama)
    * [Claude Desktop Kullanma](#claude-desktop-kullanma)
    * [Cline Kullanma](#cline-kullanma)
    * [Zed Kullanma](#zed-kullanma)
  * [Belgeler](#belgeler)
    * [Proje Genel Bakışı](#proje-genel-bakışı)
  * [Gerekçe](#gerekçe)
  * [Geliştirme](#geliştirme)
  * [Hata Ayıklama](#hata-ayıklama)
  * [Diğer MCP Sunucuları](#diğer-mcp-sunucuları)
  * [Lisans](#lisans)

  ## Genel Bakış

  Postman MCP Server, Postman API'si ile entegre olan ve Postman koleksiyonları, ortamları ve API'lerinin kapsamlı yönetimini sağlayan TypeScript tabanlı bir MCP sunucusudur.

  ## Özellikler

  ### Koleksiyonlar
  - **CRUD İşlemleri**: Postman koleksiyonlarını oluşturun, alın, güncelleyin ve silin.
  - **Klasör Yönetimi**: İstekleri koleksiyonlar içindeki klasörlerde düzenleyin.
  - **İstek Yönetimi**: Koleksiyonlar içinde istekleri ekleyin, güncelleyin ve silin.
  - **Yanıt Yönetimi**: İsteklerle ilişkili yanıtları yönetin.
  - **Sürüm Kontrolü**: Koleksiyonlar için dallandırma, birleştirme ve değişiklikleri çekme işlemleri yapın.
  - **Açıklamalar**: Koleksiyonlarda açıklamalar ekleyin ve yönetin.

  ### Ortamlar
  - **Ortamları Yönetin**: Farklı kurulumlar için ortamlar oluşturun ve alın.
  - **CRUD İşlemleri**: Ortamları oluşturma, güncelleme ve silme konusunda tam destek.

  ### API'ler
  - **API Yönetimi**: API'leri oluşturun, alın, güncelleyin ve silin.
  - **Şema Desteği**: Çok dosya desteğiyle API şemalarını yönetin.
  - **Etiketleme**: API'ler için etiketler ekleyin ve yönetin.
  - **Açıklamalar**: API'lerde açıklamalar ekleyin ve yönetin.

  ### Kimlik Doğrulama & Yetkilendirme
  - **API Anahtarı Kimlik Doğrulaması**: API anahtarlarını kullanarak güvenli erişim sağlayın.
  - **Rol Tabanlı Erişim Kontrolü**: Çalışma alanı ve koleksiyon düzeylerinde izinleri yönetin.
  - **Çalışma Alanı İzinleri**: Çalışma alanlarına özgü izinleri tanımlayın.

  ### Ek Özellikler
  - **Özel API Ağı**: Özel bir API ağı içindeki öğeleri ve klasörleri yönetin.
  - **Webhooks**: Özel yükler ile koleksiyonları tetiklemek için webhook'lar oluşturun.
  - **Kurumsal Özellikler**: Kurumsal ortamlar için gelişmiş rol kontrolleri ve SCIM desteği.

  ## Kurulum

  ### Smithery Aracılığıyla Kurulum

  Postman MCP Server'ı Claude Desktop'a [Smithery](https://smithery.ai/server/postman-api-server) aracılığıyla otomatik olarak yüklemek için:

  ```bash
  npx -y @smithery/cli install postman-api-server --client claude
  ```

  ### Ön Koşullar
  - [Node.js](https://nodejs.org/) yüklü olmalıdır.

  ### Adımlar

  1. **Depoyu klonlayın:**
      ```bash
      git clone https://github.com/delano/postman-api-server.git
      cd postman-api-server
      ```

  2. **Bağımlılıkları yükleyin:**
      ```bash
      pnpm install
      ```

  3. **Sunucuyu derleyin:**
      ```bash
      pnpm run build
      ```

  4. **Geliştirme modunda otomatik yeniden derleme ile çalıştırın:**
      ```bash
      pnpm run watch
      ```

  ## Kullanım

  ### API Anahtarlarını Ayarlama

  1. **API Anahtarınızı Oluşturun**
     - [Postman Hesap Ayarları](https://go.postman.co/settings/me/api-keys) sayfasını ziyaret edin
     - "Generate API Key" düğmesini tıklayın
     - Anahtarı güvenli bir şekilde saklayın - bir daha gösterilmeyecektir

  2. **API Anahtarını Yapılandırın**
     - Anahtarı ortamınıza `POSTMAN_API_KEY` olarak ekleyin
     - Claude Desktop veya Cline için, yapılandırma dosyanıza ekleyin (aşağıdaki yapılandırma örneklerine bakınız)
     - API anahtarlarını hiçbir zaman sürüm kontrolüne kaydetmeyin

  3. **Erişimi Doğrulayın**
     - API anahtarı, izniniz olan tüm Postman kaynaklarına erişim sağlar
     - Basit bir sorgu çalıştırarak erişimi test edin (örneğin, çalışma alanlarını listele)

  > [!NOTE]
  > [Postman API koleksiyonunu](https://www.postman.com/postman/postman-public-workspace/documentation/i2uqzpp/postman-api) doğrudan kullanıyorsanız, API anahtarınızı `postman-api-key` koleksiyon değişkeni olarak saklayın.

  ### Claude Desktop Kullanma

  Claude Desktop ile kullanmak için sunucu yapılandırmasını ekleyin:

  - **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
  - **Windows:** `%APPDATA%/Claude/claude_desktop_config.json`

  > [!IMPORTANT]
  > Bu sağlayıcıyı güncellerseniz, Claude input şemasından API değişikliklerini almak için yeniden başlatılmalıdır (yani MCP sunucusunun ToolDefinition öğeleri değiştiğinde). Bunun nedeni, Claude'un başlangıçta araç tanımlarını önbelleğe almasıdır.



  #### Örnek yapılandırma

  ```json
  {
    "mcpServers": {
      "postman": {
        "command": "node",
        "args": [
          "/path/to/postman-api-server/build/index.js"
        ],
        "env": {
          "POSTMAN_API_KEY": "CHANGEME"
        }
      }
    }
  }
  ```

  ### Cline Kullanma

  Yukarıdaki aynı örnek yapılandırmayı kullanarak, sunucu yapılandırmasını Cline MCP Sunucuları yapılandırmanıza ekleyin:




  #### Örnek yapılandırma

  _Yukarıdaki Claude ile aynı._

  ### Zed Kullanma

  Bunu çalışır hale getirmeye çalışıyorum. [Zed belgelerinden](https://zed.dev/docs/assistant/model-context-protocol) anlaşıldığına göre bir eklenti olması gerekiyor ([ayrıca bu issue #21455](https://github.com/zed-industries/zed/discussions/21455)).

  ---

  ## Belgeler

  Resmi [Postman API belgelerine](https://learning.postman.com/docs/developer/postman-api/intro-api/) [Postman Public Workspace](https://www.postman.com/postman/postman-public-workspace/) bölümünde ulaşabilirsiniz.

  ### Proje Genel Bakışı

  #### Postman API Referansları & Özetleri

  Bu proje, OpenAPI belirtimini TypeScript koduna dönüştürmek için Claude modelini ve Cline uzantısını kullanır, MCP sunucusu içinde tür güvenliğini ve entegrasyonu artırır.

  Bu GitHub projesi, Postman platformunu programlı şekilde kullanma konusunda ayrıntılı rehberlik sağlayan [API Referansları belgelerine](docs/api/references/README.md) sahiptir. Hem yerel geliştirme için Collection SDK'sini hem de bulut platformu entegrasyonu için Postman API'sini kapsar. Temel konular kimlik doğrulama mekanizmaları, hız sınırları ve çalışma alanları, koleksiyonlar, ortamlar, mock sunucuları, monitörler ve daha fazlasını kapsayan tüm API endpoint'lerinin ayrıntılı belgeleri içerir. Ayrıca rehber, sorunsuz API etkileşimlerini kolaylaştırmak için ön koşullar ve hızlı başlangıç talimatları sunmaktadır.

  `docs/api/summaries` dizini Postman API'nin kapsamlı Markdown özetlerini içerir. Bu belgeler API endpoint'lerini, istek/yanıt formatlarını ve MCP sunucusunun işlevselliğini doğrulamak ve sağlamak için gerekli olan uygulama ayrıntılarını ana hatlarıyla sunmaktadır. Belge yapısı ve uygulama stratejilerine genel bir bakış için [API Özetleri README](docs/api/summaries/README.md) dosyasına bakınız.

  #### OpenAPI Spec'i TypeScript Koduna Claude ile Dönüştürme



  #### MCP Sunucusunu Oluşturma

  MCP sunucu handler'larını uygulamaya ilişkin ayrıntılı belirtimler için [Handlers Belgelerine](src/handlers/README.md) bakınız. Bu, URI formatlarını, prompt gereksinimlerini ve kaynak yönetimi kalıplarını içerir. Bu rehber, Postman API işlevselliklerini MCP sunucusu içinde entegre etme ve geliştirme üzerinde çalışan geliştiriciler için çok önemlidir.


  ---

  ## Gerekçe

  Postman araçları için MCP sarıcısı, yapı ve güvenliğin çok önemli olduğu karmaşık, çok aşamalı işlemler için bir AI etkileşim katmanı olarak mantıklıdır. Ancak, doğrudan CLI veya API kullanımının yeterli olduğu basit işlemler için aşırı mühendislik yapılmış olabilir. MCP sarıcısı en çok şu durumlarda değer sağlar:

  1. **Karmaşık İşlemler**
  - Birden fazla koleksiyonu yönetme
  - Ortamları koordine etme
  - Kapsamlı raporlar oluşturma

  2. **Yapay Zeka Tarafından Yönetilen Otomasyon**
  - Otomatik test iş akışları
  - API belgeleri bakımı
  - Ortam yönetimi

  3. **Hataya Duyarlı İşlemler**
  - Kritik API testi
  - Üretim dağıtımları
  - Uyumluluk kontrolü

  Aşağıdaki durumlarda daha az değer sağlar:

  1. **Basit İşlemler**
  - Temel koleksiyon çalıştırmaları
  - Tekil API çağrıları
  - Hızlı ortam kontrolleri
  2. **Doğrudan CLI Kullanımı**
  - Geliştirici tarafından yönetilen işlemler
  - Yerel test
  - Hızlı yinelemeler


  ## Geliştirme

  Bağımlılıkları yükleyin:
  ```bash
  pnpm install
  ```

  Sunucuyu derleyin:
  ```bash
  pnpm run build
  ```

  Otomatik yeniden derleme ile geliştirme için:
  ```bash
  pnpm run watch
  ```

  ## Hata Ayıklama

  MCP sunucuları stdio üzerinden iletişim kurduğundan hata ayıklama zor olabilir. [MCP Inspector](https://github.com/modelcontextprotocol/inspector) kullanmanızı öneriyoruz, paket script'i olarak mevcuttur:

  ```bash
  pnpm run inspector
  ```

  [Belgeler](https://modelcontextprotocol.io/docs/tools/inspector)

  Inspector, tarayıcınızda hata ayıklama araçlarına erişmek için bir URL sağlayacaktır: http://localhost:5173. Bağlanmadan önce POSTMAN_API_KEY'i eklemeniz gerekir. Başlamak için "Tools" sayfasına gidin.

  ## Diğer MCP Sunucuları

  - [AppCypher tarafından Awesome MCP Servers](https://github.com/appcypher/awesome-mcp-servers)
  - [PunkPeye tarafından Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)

  ## Lisans

  Bu proje MIT Lisansı altında lisanslanmıştır. Ayrıntılar için [LICENSE](LICENSE) dosyasına bakınız.
---

# Postman MCP Server
[![smithery badge](https://smithery.ai/badge/postman-api-server)](https://smithery.ai/server/postman-api-server)
**Version:** v0.2.0

An MCP server that provides access to the [Postman](https://www.postman.com/) API. Functionality is based on the [official OpenAPI specification](https://www.postman.com/postman/postman-public-workspace/documentation/i2uqzpp/postman-api). For more information, see the [Postman API documentation](https://www.postman.com/postman-public-workspace/).

This project is part of the Model Context Protocol (MCP) initiative from Anthropic. For more information, visit the [MCP GitHub repository](https://github.com/modelcontextprotocol) and the announcement on the [Anthropic blog](https://www.anthropic.com/news/model-context-protocol).

**[Skip ahead to install instructions](#installation)**


![postman-mcp-server - Cover Image](https://github.com/user-attachments/assets/e19d712f-ad97-4456-a414-d69b159a9ed2)


> [!WARNING]
> This project is currently under active development. Please use with caution and expect breaking changes.

> [!NOTE]
> AI Generated Code. I used Cline v2.2.2 with Claude 3.5 Sonnet (2024-10-22). See docs/README.md for prompts and details about how this code was generated.

<a href="https://glama.ai/mcp/servers/zoig549xfd"></a>

---

* [Overview](#overview)
* [Features](#features)
  * [Collections](#collections)
  * [Environments](#environments)
  * [APIs](#apis)
  * [Authentication \& Authorization](#authentication--authorization)
  * [Additional Features](#additional-features)
* [Installation](#installation)
  * [Prerequisites](#prerequisites)
  * [Steps](#steps)
* [Usage](#usage)
  * [Setting up API Keys](#setting-up-api-keys)
  * [Using Claude Desktop](#using-claude-desktop)
  * [Using Cline](#using-cline)
  * [Using Zed](#using-zed)
* [Documentation](#documentation)
  * [Project Overview](#project-overview)
* [Rationale](#rationale)
* [Development](#development)
* [Debugging](#debugging)
* [Other MCP Servers](#other-mcp-servers)
* [License](#license)

## Overview

Postman MCP Server is a TypeScript-based MCP server that integrates with the Postman API, providing comprehensive management of Postman collections, environments, and APIs.

## Features

### Collections
- **CRUD Operations**: Create, retrieve, update, and delete Postman collections.
- **Folder Management**: Organize requests into folders within collections.
- **Request Management**: Add, update, and delete requests within collections.
- **Response Management**: Manage responses associated with requests.
- **Version Control**: Fork, merge, and pull changes for collections.
- **Comments**: Add and manage comments on collections.

### Environments
- **Manage Environments**: Create and retrieve environments for different setups.
- **CRUD Operations**: Full support for creating, updating, and deleting environments.

### APIs
- **API Management**: Create, retrieve, update, and delete APIs.
- **Schema Support**: Manage API schemas with multi-file support.
- **Tagging**: Add and manage tags for APIs.
- **Comments**: Add and manage comments on APIs.

### Authentication & Authorization
- **API Key Authentication**: Secure access using API keys.
- **Role-Based Access Control**: Manage permissions at workspace and collection levels.
- **Workspace Permissions**: Define permissions specific to workspaces.

### Additional Features
- **Private API Network**: Manage elements and folders within a private API network.
- **Webhooks**: Create webhooks to trigger collections with custom payloads.
- **Enterprise Features**: Advanced role controls and SCIM support for enterprise environments.

## Installation

### Installing via Smithery

To install Postman MCP Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/postman-api-server):

```bash
npx -y @smithery/cli install postman-api-server --client claude
```

### Prerequisites
- [Node.js](https://nodejs.org/) installed.

### Steps

1. **Clone the repository:**
    ```bash
    git clone https://github.com/delano/postman-api-server.git
    cd postman-api-server
    ```

2. **Install dependencies:**
    ```bash
    pnpm install
    ```

3. **Build the server:**
    ```bash
    pnpm run build
    ```

4. **Run in development mode with auto-rebuild:**
    ```bash
    pnpm run watch
    ```

## Usage

### Setting up API Keys

1. **Generate your API Key**
   - Visit [Postman Account Settings](https://go.postman.co/settings/me/api-keys)
   - Click "Generate API Key"
   - Save the key securely - it won't be shown again

2. **Configure the API Key**
   - Add the key to your environment as `POSTMAN_API_KEY`
   - For Claude Desktop or Cline, include it in your config file (see configuration examples below)
   - Never commit API keys to version control

3. **Verify Access**
   - The API key provides access to all Postman resources you have permissions for
   - Test access by running a simple query (e.g., list workspaces)

> [!NOTE]
> If you're using the [Postman API collection](https://www.postman.com/postman/postman-public-workspace/documentation/i2uqzpp/postman-api) directly, store your API key as a `postman-api-key` collection variable.

### Using Claude Desktop

To use with Claude Desktop, add the server config:

- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%/Claude/claude_desktop_config.json`

> [!IMPORTANT]
> If you're updating this provider, Claude must be restarted to pick up API changes from the input schema (i.e. When the MCP server's ToolDefinition elements have changed). This is because Claude caches the tool definitions when it starts up.



#### Example configuration

```json
{
  "mcpServers": {
    "postman": {
      "command": "node",
      "args": [
        "/path/to/postman-api-server/build/index.js"
      ],
      "env": {
        "POSTMAN_API_KEY": "CHANGEME"
      }
    }
  }
}
```

### Using Cline

Using the same example configuration, add the server config to your Cline MCP Servers configuration:




#### Example configuration

_Same as Claude above._

### Using Zed

I'm still trying to get this to work. From the [Zed docs](https://zed.dev/docs/assistant/model-context-protocol) it looks like it needs to be an extension ([also this issue #21455](https://github.com/zed-industries/zed/discussions/21455)).

---

## Documentation

The official [Postman API documentation](https://learning.postman.com/docs/developer/postman-api/intro-api/) is available in the [Postman Public Workspace](https://www.postman.com/postman/postman-public-workspace/).

### Project Overview

#### Postman API References & Summaries

This project leverages the Claude model and Cline extension to convert the OpenAPI specification into TypeScript code, enhancing type safety and integration within the MCP server.

This GitHub project includes [API References documentation](docs/api/references/README.md) that provides detailed guidance on utilizing the Postman platform programmatically. It covers both the Collection SDK for local development and the Postman API for cloud platform integration. Key topics include authentication mechanisms, rate limits, and in-depth documentation of all API endpoints, including workspaces, collections, environments, mock servers, monitors, and more. Additionally, the guide offers prerequisites and quick-start instructions to facilitate seamless API interactions.

The `docs/api/summaries` directory contains comprehensive Markdown summaries of the Postman API. These documents outline API endpoints, request/response formats, and implementation details essential for validating and ensuring the functionality of the MCP server. Refer to the [API Summaries README](docs/api/summaries/README.md) for an overview of the documentation structure and implementation strategies.

#### Converting OpenAPI Spec to TypeScript Code with Claude



#### Building the MCP Server

Refer to the [Handlers Documentation](src/handlers/README.md) for detailed specifications on implementing MCP server handlers. This includes URI formats, prompt requirements, and resource handling patterns. This guide is crucial for developers working on integrating and enhancing the Postman API functionalities within the MCP server.


---

## Rationale

The MCP wrapper for Postman tools makes sense primarily as an AI interaction layer for complex, multi-step operations where structure and safety are paramount. However, it may be overengineered for simple operations where direct CLI or API usage would suffice. The MCP wrapper provides most value when:

1. **Complex Operations**
- Managing multiple collections
- Coordinating environments
- Generating comprehensive reports

2. **AI-Driven Automation**
- Automated testing workflows
- API documentation maintenance
- Environment management

3. **Error-Sensitive Operations**
- Critical API testing
- Production deployments
- Compliance checking

It provides less value for:

1. **Simple Operations**
- Basic collection runs
- Single API calls
- Quick environment checks
2. **Direct CLI Usage**
- Developer-driven operations
- Local testing
- Quick iterations


## Development

Install dependencies:
```bash
pnpm install
```

Build the server:
```bash
pnpm run build
```

For development with auto-rebuild:
```bash
pnpm run watch
```

## Debugging

Since MCP servers communicate over stdio, debugging can be challenging. We recommend using the [MCP Inspector](https://github.com/modelcontextprotocol/inspector), available as a package script:

```bash
pnpm run inspector
```

[Docs](https://modelcontextprotocol.io/docs/tools/inspector)

The Inspector will provide a URL to access debugging tools in your browser: http://localhost:5173. You will need to add the POSTMAN_API_KEY before connecting. Navigate to "Tools" to get started.

## Other MCP Servers

- [Awesome MCP Servers by AppCypher](https://github.com/appcypher/awesome-mcp-servers)
- [Awesome MCP Servers by PunkPeye](https://github.com/punkpeye/awesome-mcp-servers)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
