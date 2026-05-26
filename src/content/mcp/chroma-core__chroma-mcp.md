---
name: "chroma-core/chroma-mcp"
description: "Chroma MCP server to access local and cloud Chroma instances for retrieval capabilities"
category: "Databases"
repo: "chroma-core/chroma-mcp"
stars: 550
url: "https://github.com/chroma-core/chroma-mcp"
body_length: 8049
license: "Apache-2.0"
language: "Python"
body_tr: |-
  <p align="center">
    <a href="https://trychroma.com"></a>
  </p>

  <p align="center">
      <b>Chroma - açık kaynaklı embedding veritabanı</b>. <br />
      Python veya JavaScript LLM uygulamalarını bellek ile oluşturmanın en hızlı yolu!
  </p>

  <p align="center">
    <a href="https://discord.gg/MMeYNTmh3x" target="_blank">
        
    </a> |
    <a href="https://github.com/chroma-core/chroma/blob/master/LICENSE" target="_blank">
        
    </a> |
    <a href="https://docs.trychroma.com/" target="_blank">
        Dokümantasyon
    </a> |
    <a href="https://www.trychroma.com/" target="_blank">
        Ana Sayfa
    </a>
  </p>

  # Chroma MCP Server

  [![smithery badge](https://smithery.ai/badge/@chroma-core/chroma-mcp)](https://smithery.ai/server/@chroma-core/chroma-mcp)

  [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction), LLM uygulamaları ile dış veri kaynakları veya araçlar arasında sorunsuz entegrasyon için tasarlanmış açık bir protokoldür ve LLM'lere ihtiyaç duydukları context'i sorunsuzca sağlamak için standartlaştırılmış bir çerçeve sunar.

  Bu server, Chroma tarafından desteklenen veri alma yetenekleri sağlayarak, AI modellerinin üretilen veriler ve kullanıcı girdileri üzerinde koleksiyonlar oluşturmasını ve bu verileri vector arama, tam metin arama, metadata filtreleme ve daha fazlasını kullanarak almasını sağlar.

  Bu, Chroma'ya olan erişiminizi kendi kendine barındırmak için bir MCP sunucusudur. Eğer [Package Search](https://www.trychroma.com/package-search) arıyorsanız, depoyu [burada](https://github.com/chroma-core/package-search) bulabilirsiniz.

  ## Özellikler

  - **Esnek Client Türleri**
    - Ephemeral (bellek içi) test ve geliştirme için
    - Dosya tabanlı depolama için Persistent
    - Kendi kendine barındırılan Chroma örnekleri için HTTP client
    - Chroma Cloud entegrasyonu için Cloud client (api.trychroma.com'a otomatik olarak bağlanır)

  - **Koleksiyon Yönetimi**
    - Koleksiyon oluşturma, değiştirme ve silme
    - Pagination desteği ile tüm koleksiyonları listeleme
    - Koleksiyon bilgisi ve istatistiklerini alma
    - Optimize edilmiş vector arama için HNSW parametrelerini yapılandırma
    - Koleksiyon oluşturulurken embedding fonksiyonlarını seçme

  - **Belge İşlemleri**
    - İsteğe bağlı metadata ve özel ID'lerle belge ekleme
    - Semantik arama kullanarak belge sorgulama
    - Metadata ve belge içeriği kullanarak ileri filtreleme
    - Belgeleri ID'ye veya filtrelere göre alma
    - Tam metin arama yetenekleri

  ### Desteklenen Araçlar

  - `chroma_list_collections` - Pagination desteği ile tüm koleksiyonları listeleme
  - `chroma_create_collection` - İsteğe bağlı HNSW yapılandırması ile yeni koleksiyon oluşturma
  - `chroma_peek_collection` - Bir koleksiyondaki belgelerin örneğini görüntüleme
  - `chroma_get_collection_info` - Bir koleksiyon hakkında ayrıntılı bilgi alma
  - `chroma_get_collection_count` - Bir koleksiyondaki belge sayısını alma
  - `chroma_modify_collection` - Bir koleksiyonun adını veya metadata'sını güncelleme
  - `chroma_delete_collection` - Koleksiyon silme
  - `chroma_add_documents` - İsteğe bağlı metadata ve özel ID'lerle belge ekleme
  - `chroma_query_documents` - İleri filtreleme ile semantik arama kullanarak belge sorgulama
  - `chroma_get_documents` - Pagination ile belgeleri ID'ye veya filtrelere göre alma
  - `chroma_update_documents` - Mevcut belgelerin içeriğini, metadata'sını veya embedding'lerini güncelleme
  - `chroma_delete_documents` - Bir koleksiyondan belirli belgeleri silme

  ### Embedding Fonksiyonları
  Chroma MCP şu embedding fonksiyonlarını destekler: `default`, `cohere`, `openai`, `jina`, `voyageai` ve `roboflow`.

  Embedding fonksiyonları, bir koleksiyonun seçilen embedding fonksiyonunu kalıcı olarak depolayan Chroma koleksiyon yapılandırmasını kullanır. Koleksiyon yapılandırması kullanılarak koleksiyon oluşturulduktan sonra, gelecekteki sorgular ve eklemeler için alma işleminde, aynı embedding fonksiyonu kullanılır ve embedding fonksiyonunu yeniden belirtmeye gerek kalmaz. Embedding fonksiyonu kalıcılığı Chroma v1.0.0'da eklendi; dolayısıyla <=0.6.3 versiyonunu kullanarak koleksiyon oluşturduysanız, bu özellik desteklenmez.

  Harici API'ler kullanan embedding fonksiyonlarına erişirken, lütfen [Embedding Function Environment Variables](#embedding-function-environment-variables) bölümünde bulunan doğru biçime sahip API anahtarı için ortam değişkenini eklediğinizden emin olun.

  ## Claude Desktop ile Kullanım

  1. Ephemeral client eklemek için, `claude_desktop_config.json` dosyanıza aşağıdaki satırları ekleyin:

  ```json
  "chroma": {
      "command": "uvx",
      "args": [
          "chroma-mcp"
      ]
  }
  ```

  2. Persistent client eklemek için, `claude_desktop_config.json` dosyanıza aşağıdaki satırları ekleyin:

  ```json
  "chroma": {
      "command": "uvx",
      "args": [
          "chroma-mcp",
          "--client-type",
          "persistent",
          "--data-dir",
          "/full/path/to/your/data/directory"
      ]
  }
  ```

  Bu, belirtilen veri dizinini kullanacak olan persistent client'i oluşturacaktır.

  3. Chroma Cloud'a bağlanmak için, `claude_desktop_config.json` dosyanıza aşağıdaki satırları ekleyin:

  ```json
  "chroma": {
      "command": "uvx",
      "args": [
          "chroma-mcp",
          "--client-type",
          "cloud",
          "--tenant",
          "your-tenant-id",
          "--database",
          "your-database-name",
          "--api-key",
          "your-api-key"
      ]
  }
  ```

  Bu, SSL kullanarak api.trychroma.com'a otomatik olarak bağlanan bir cloud client oluşturacaktır.

  **Not:** Bağımsız cihazlarda API anahtarlarını argümanlara eklemek sorun değildir, ancak güvenlik için, `args` listesi içinde `--dotenv-path` argümanını kullanarak ortam yapılandırma dosyanız için özel bir yol belirtebilirsiniz. Örneğin: `"args": ["chroma-mcp", "--dotenv-path", "/custom/path/.env"]`.

  4. [Kendi bulut sağlayıcınızda kendi kendine barındırılan bir Chroma örneğine](https://docs.trychroma.com/production/deployment) bağlanmak için, `claude_desktop_config.json` dosyanıza aşağıdaki satırları ekleyin:

  ```json
  "chroma": {
      "command": "uvx",
      "args": [
        "chroma-mcp", 
        "--client-type", 
        "http", 
        "--host", 
        "your-host", 
        "--port", 
        "your-port", 
        "--custom-auth-credentials",
        "your-custom-auth-credentials",
        "--ssl",
        "true"
      ]
  }
  ```

  Bu, kendi kendine barındırılan Chroma örneğinize bağlanan bir HTTP client oluşturacaktır.

  ### Demolar

  [Chroma MCP Dokümantasyon](https://docs.trychroma.com/integrations/frameworks/anthropic-mcp#using-chroma-with-claude) bölümünde paylaşılan bilgi tabanları ve context pencerelerine bellek ekleme gibi referans kullanımlarını bulabilirsiniz.

  ### Ortam Değişkenlerini Kullanma

  Client'i yapılandırmak için ortam değişkenlerini de kullanabilirsiniz. Server, `--dotenv-path` tarafından belirtilen yolda (varsayılan olarak çalışan dizinde `.chroma_env`) bulunan `.env` dosyasından veya sistem ortam değişkenlerinden değişkenleri otomatik olarak yükleyecektir. Komut satırı argümanları ortam değişkenlerinden önceliklidir.

  ```bash
  # Ortak değişkenler
  export CHROMA_CLIENT_TYPE="http"  # or "cloud", "persistent", "ephemeral"

  # Persistent client için
  export CHROMA_DATA_DIR="/full/path/to/your/data/directory"

  # Cloud client için (Chroma Cloud)
  export CHROMA_TENANT="your-tenant-id"
  export CHROMA_DATABASE="your-database-name"
  export CHROMA_API_KEY="your-api-key"

  # HTTP client için (kendi kendine barındırılan)
  export CHROMA_HOST="your-host"
  export CHROMA_PORT="your-port"
  export CHROMA_CUSTOM_AUTH_CREDENTIALS="your-custom-auth-credentials"
  export CHROMA_SSL="true"

  # İsteğe bağlı: .env dosyasının yolunu belirtme (varsayılan olarak .chroma_env)
  export CHROMA_DOTENV_PATH="/path/to/your/.env" 
  ```

  #### Embedding Function Ortam Değişkenleri
  API anahtarına erişen harici embedding fonksiyonlarını kullanırken, `CHROMA_<>_API_KEY="<key>"` adlandırma kuralını izleyin.
  Dolayısıyla bir Cohere API anahtarı ayarlamak için, `CHROMA_COHERE_API_KEY=""` ortam değişkenini ayarlayın. Bunu bir .env dosyasına eklemenizi ve güvenli bir şekilde saklama için `CHROMA_DOTENV_PATH` ortam değişkenini veya `--dotenv-path` bayrağını kullanmanızı tavsiye ederiz.
---

<p align="center">
  <a href="https://trychroma.com"></a>
</p>

<p align="center">
    <b>Chroma - the open-source embedding database</b>. <br />
    The fastest way to build Python or JavaScript LLM apps with memory!
</p>

<p align="center">
  <a href="https://discord.gg/MMeYNTmh3x" target="_blank">
      
  </a> |
  <a href="https://github.com/chroma-core/chroma/blob/master/LICENSE" target="_blank">
      
  </a> |
  <a href="https://docs.trychroma.com/" target="_blank">
      Docs
  </a> |
  <a href="https://www.trychroma.com/" target="_blank">
      Homepage
  </a>
</p>

# Chroma MCP Server

[![smithery badge](https://smithery.ai/badge/@chroma-core/chroma-mcp)](https://smithery.ai/server/@chroma-core/chroma-mcp)

[The Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) is an open protocol designed for effortless integration between LLM applications and external data sources or tools, offering a standardized framework to seamlessly provide LLMs with the context they require.

This server provides data retrieval capabilities powered by Chroma, enabling AI models to create collections over generated data and user inputs, and retrieve that data using vector search, full text search, metadata filtering, and more.

This is a MCP server for self-hosting your access to Chroma. If you are looking for [Package Search](https://www.trychroma.com/package-search) you can find the repository for that [here](https://github.com/chroma-core/package-search).

## Features

- **Flexible Client Types**
  - Ephemeral (in-memory) for testing and development
  - Persistent for file-based storage
  - HTTP client for self-hosted Chroma instances
  - Cloud client for Chroma Cloud integration (automatically connects to api.trychroma.com)

- **Collection Management**
  - Create, modify, and delete collections
  - List all collections with pagination support
  - Get collection information and statistics
  - Configure HNSW parameters for optimized vector search
  - Select embedding functions when creating collections

- **Document Operations**
  - Add documents with optional metadata and custom IDs
  - Query documents using semantic search
  - Advanced filtering using metadata and document content
  - Retrieve documents by IDs or filters
  - Full text search capabilities

### Supported Tools

- `chroma_list_collections` - List all collections with pagination support
- `chroma_create_collection` - Create a new collection with optional HNSW configuration
- `chroma_peek_collection` - View a sample of documents in a collection
- `chroma_get_collection_info` - Get detailed information about a collection
- `chroma_get_collection_count` - Get the number of documents in a collection
- `chroma_modify_collection` - Update a collection's name or metadata
- `chroma_delete_collection` - Delete a collection
- `chroma_add_documents` - Add documents with optional metadata and custom IDs
- `chroma_query_documents` - Query documents using semantic search with advanced filtering
- `chroma_get_documents` - Retrieve documents by IDs or filters with pagination
- `chroma_update_documents` - Update existing documents' content, metadata, or embeddings
- `chroma_delete_documents` - Delete specific documents from a collection

### Embedding Functions
Chroma MCP supports several embedding functions: `default`, `cohere`, `openai`, `jina`, `voyageai`, and `roboflow`.

The embedding functions utilize Chroma's collection configuration, which persists the selected embedding function of a collection for retrieval. Once a collection is created using the collection configuration, on retrieval for future queries and inserts, the same embedding function will be used, without needing to specify the embedding function again. Embedding function persistance was added in v1.0.0 of Chroma, so if you created a collection using version <=0.6.3, this feature is not supported.

When accessing embedding functions that utilize external APIs, please be sure to add the environment variable for the API key with the correct format, found in [Embedding Function Environment Variables](#embedding-function-environment-variables)

## Usage with Claude Desktop

1. To add an ephemeral client, add the following to your `claude_desktop_config.json` file:

```json
"chroma": {
    "command": "uvx",
    "args": [
        "chroma-mcp"
    ]
}
```

2. To add a persistent client, add the following to your `claude_desktop_config.json` file:

```json
"chroma": {
    "command": "uvx",
    "args": [
        "chroma-mcp",
        "--client-type",
        "persistent",
        "--data-dir",
        "/full/path/to/your/data/directory"
    ]
}
```

This will create a persistent client that will use the data directory specified.

3. To connect to Chroma Cloud, add the following to your `claude_desktop_config.json` file:

```json
"chroma": {
    "command": "uvx",
    "args": [
        "chroma-mcp",
        "--client-type",
        "cloud",
        "--tenant",
        "your-tenant-id",
        "--database",
        "your-database-name",
        "--api-key",
        "your-api-key"
    ]
}
```

This will create a cloud client that automatically connects to api.trychroma.com using SSL.

**Note:** Adding API keys in arguments is fine on local devices, but for safety, you can also specify a custom path for your environment configuration file using the `--dotenv-path` argument within the `args` list, for example: `"args": ["chroma-mcp", "--dotenv-path", "/custom/path/.env"]`.

4. To connect to a [self-hosted Chroma instance on your own cloud provider](https://docs.trychroma.com/
production/deployment), add the following to your `claude_desktop_config.json` file:

```json
"chroma": {
    "command": "uvx",
    "args": [
      "chroma-mcp", 
      "--client-type", 
      "http", 
      "--host", 
      "your-host", 
      "--port", 
      "your-port", 
      "--custom-auth-credentials",
      "your-custom-auth-credentials",
      "--ssl",
      "true"
    ]
}
```

This will create an HTTP client that connects to your self-hosted Chroma instance.

### Demos

Find reference usages, such as shared knowledge bases & adding memory to context windows in the [Chroma MCP Docs](https://docs.trychroma.com/integrations/frameworks/anthropic-mcp#using-chroma-with-claude)

### Using Environment Variables

You can also use environment variables to configure the client. The server will automatically load variables from a `.env` file located at the path specified by `--dotenv-path` (defaults to `.chroma_env` in the working directory) or from system environment variables. Command-line arguments take precedence over environment variables.

```bash
# Common variables
export CHROMA_CLIENT_TYPE="http"  # or "cloud", "persistent", "ephemeral"

# For persistent client
export CHROMA_DATA_DIR="/full/path/to/your/data/directory"

# For cloud client (Chroma Cloud)
export CHROMA_TENANT="your-tenant-id"
export CHROMA_DATABASE="your-database-name"
export CHROMA_API_KEY="your-api-key"

# For HTTP client (self-hosted)
export CHROMA_HOST="your-host"
export CHROMA_PORT="your-port"
export CHROMA_CUSTOM_AUTH_CREDENTIALS="your-custom-auth-credentials"
export CHROMA_SSL="true"

# Optional: Specify path to .env file (defaults to .chroma_env)
export CHROMA_DOTENV_PATH="/path/to/your/.env" 
```

#### Embedding Function Environment Variables
When using external embedding functions that access an API key, follow the naming convention
`CHROMA_<>_API_KEY="<key>"`.
So to set a Cohere API key, set the environment variable `CHROMA_COHERE_API_KEY=""`. We recommend adding this to a .env file somewhere and using the `CHROMA_DOTENV_PATH` environment variable or `--dotenv-path` flag to set that location for safekeeping.
