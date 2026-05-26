---
name: "cr7258/elasticsearch-mcp-server"
description: "MCP Server implementation that provides Elasticsearch interaction"
description_tr: "Elasticsearch ile etkileşim sağlayan MCP Server uygulaması"
category: "Databases"
repo: "cr7258/elasticsearch-mcp-server"
stars: 280
url: "https://github.com/cr7258/elasticsearch-mcp-server"
body_length: 15184
license: "Apache-2.0"
language: "Python"
body_tr: |-
  # Elasticsearch/OpenSearch MCP Sunucusu

  [![MseeP.ai Security Assessment Badge](https://mseep.net/pr/cr7258-elasticsearch-mcp-server-badge.png)](https://mseep.ai/app/cr7258-elasticsearch-mcp-server)

  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/cr7258/elasticsearch-mcp-server)](https://archestra.ai/mcp-catalog/cr7258__elasticsearch-mcp-server)

  ## Genel Bakış

  Elasticsearch ve OpenSearch ile etkileşim sağlayan bir Model Context Protocol (MCP) sunucu implementasyonu. Bu sunucu, bir dizi araç aracılığıyla belgeleri arama, indexleri analiz etme ve kümeri yönetme işlemlerini sağlar.

  <a href="https://glama.ai/mcp/servers/b3po3delex"></a>

  ## Demo

  https://github.com/user-attachments/assets/f7409e31-fac4-4321-9c94-b0ff2ea7ff15

  ## Özellikler

  ### Genel İşlemler

  - `general_api_request`: Genel HTTP API isteği gerçekleştirin. Dedicated bir aracı olmayan herhangi bir Elasticsearch/OpenSearch API'si için bu aracı kullanın.

  ### Index İşlemleri

  - `list_indices`: Tüm indexleri listeleyin.
  - `get_index`: Bir veya daha fazla index hakkında bilgi döndürür (mappings, settings, aliases).
  - `create_index`: Yeni bir index oluşturun.
  - `delete_index`: Bir index silin.
  - `create_data_stream`: Yeni bir data stream oluşturun (eşleşen index template gerektirir).
  - `get_data_stream`: Bir veya daha fazla data stream hakkında bilgi alın.
  - `delete_data_stream`: Bir veya daha fazla data stream ve bunların backing indexlerini silin.

  ### Doküman İşlemleri

  - `search_documents`: Belgeleri arayın.
  - `index_document`: Index'te bir dokümanı oluşturun veya güncelleyin.
  - `get_document`: ID'ye göre bir doküman alın.
  - `delete_document`: ID'ye göre bir dokümanı silin.
  - `delete_by_query`: Sağlanan sorguya eşleşen dokümanları silin.

  ### Küme İşlemleri

  - `get_cluster_health`: Kümenin sağlığı hakkında temel bilgiler döndürür.
  - `get_cluster_stats`: Küme istatistiklerinin yüksek düzey genel görünümünü döndürür.

  ### Alias İşlemleri

  - `list_aliases`: Tüm aliasları listeleyin.
  - `get_alias`: Belirli bir index için alias bilgisini alın.
  - `put_alias`: Belirli bir index için bir alias oluşturun veya güncelleyin.
  - `delete_alias`: Belirli bir index için bir alias silin.

  ### Analyzer İşlemleri

  - `analyze_text`: Belirtilen bir analyzer veya custom analysis chain kullanarak metni analiz edin. Arama sorgularında hata ayıklama ve metnin nasıl tokenize edildiğini anlamak için faydalıdır.

  ## Ortam Değişkenlerini Yapılandırın

  MCP sunucusu aşağıdaki ortam değişkenlerini destekler:

  ### Temel Kimlik Doğrulama (Kullanıcı Adı/Şifre)
  - `ELASTICSEARCH_USERNAME`: Temel kimlik doğrulama için kullanıcı adı
  - `ELASTICSEARCH_PASSWORD`: Temel kimlik doğrulama için şifre
  - `OPENSEARCH_USERNAME`: OpenSearch temel kimlik doğrulaması için kullanıcı adı
  - `OPENSEARCH_PASSWORD`: OpenSearch temel kimlik doğrulaması için şifre

  ### API Anahtarı Kimlik Doğrulaması (Yalnızca Elasticsearch) - Önerilen
  - `ELASTICSEARCH_API_KEY`: [Elasticsearch](https://www.elastic.co/docs/deploy-manage/api-keys/elasticsearch-api-keys) veya [Elastic Cloud](https://www.elastic.co/docs/deploy-manage/api-keys/elastic-cloud-api-keys) Kimlik Doğrulaması için API anahtarı.

  ### Bağlantı Ayarları
  - `ELASTICSEARCH_HOSTS` / `OPENSEARCH_HOSTS`: Virgülle ayrılmış host listesi (varsayılan: `https://localhost:9200`)
  - `ELASTICSEARCH_CLUSTERS` / `OPENSEARCH_CLUSTERS`: Named cluster konfigürasyonları için inline JSON nesnesi. Ayarlandığında, araçlar isteğe bağlı `cluster` parametresiyle belirli bir kümeler hedefleyebilir.
  - `ELASTICSEARCH_CLUSTERS_FILE` / `OPENSEARCH_CLUSTERS_FILE`: clusters nesnesi ile bir JSON dosyasına giden yol. Konfigürasyon başka bir JSON dosyasının içine gömüldüğünde (örn. MCP istemci config) önerilir çünkü JSON-in-JSON kaçışından kaçınır. Her iki set olduğunda inline değişkenden önceliklidir.
  - `DEFAULT_CLUSTER`: Multi-cluster konfigürasyonu ayarlandığında ve bir araç çağrısı `cluster` parametresini atladığında kullanılacak varsayılan küme adı (varsayılan olarak yapılandırılan ilk küme).
  - `VERIFY_CERTS`: SSL sertifikalarını doğrulayıp doğrulamayacağını belirtir (varsayılan: `false`)
  - `REQUEST_TIMEOUT`: Request timeout süresi (saniye cinsinden) (isteğe bağlı, ayarlanmadıysa istemci varsayılanını kullanır)

  ### Çoklu Küme Konfigürasyonu

  Varsayılan olarak, sunucu `ELASTICSEARCH_HOSTS`, `ELASTICSEARCH_USERNAME`, `ELASTICSEARCH_PASSWORD` ve `ELASTICSEARCH_API_KEY`'den tek bir Elasticsearch kümesini, veya `OPENSEARCH_HOSTS`, `OPENSEARCH_USERNAME` ve `OPENSEARCH_PASSWORD`'den tek bir OpenSearch kümesini kullanır. Çoklu named kümeler yapılandırmak için `ELASTICSEARCH_CLUSTERS` (veya `OPENSEARCH_CLUSTERS`) değişkenini MCP sunucu konfigürasyonu içinde bir JSON nesnesi olarak ayarlayın. Değer başka bir JSON dosyasına gömülü bir JSON dizesi olduğundan, iç tırnak işaretlerinin kaçırılması gerekir:

  ```json
  {
    "mcpServers": {
      "elasticsearch-mcp-server": {
        "command": "uvx",
        "args": [
          "elasticsearch-mcp-server"
        ],
        "env": {
          "ELASTICSEARCH_CLUSTERS": "{\"prod\": {\"hosts\": [\"https://prod-es:9200\"], \"api_key\": \"<PROD_API_KEY>\", \"verify_certs\": true}, \"staging\": {\"hosts\": [\"https://staging-es:9200\"], \"username\": \"elastic\", \"password\": \"<STAGING_PASSWORD>\"}}",
          "DEFAULT_CLUSTER": "prod"
        }
      }
    }
  }
  ```

  Daha iyi okunabilirlik için, `ELASTICSEARCH_CLUSTERS_FILE` (veya `OPENSEARCH_CLUSTERS_FILE`) değişkenini bunun yerine bağımsız bir JSON dosyasına işaret ettirin. Değer sadece bir yol olduğundan JSON-in-JSON kaçışından kaçınır:

  ```json
  {
    "mcpServers": {
      "elasticsearch-mcp-server": {
        "command": "uvx",
        "args": [
          "elasticsearch-mcp-server"
        ],
        "env": {
          "ELASTICSEARCH_CLUSTERS_FILE": "/etc/mcp/es-clusters.json",
          "DEFAULT_CLUSTER": "prod"
        }
      }
    }
  }
  ```

  `/etc/mcp/es-clusters.json`:

  ```json
  {
    "prod": {
      "hosts": ["https://prod-es:9200"],
      "api_key": "<PROD_API_KEY>",
      "verify_certs": true
    },
    "staging": {
      "hosts": ["https://staging-es:9200"],
      "username": "elastic",
      "password": "<STAGING_PASSWORD>"
    }
  }
  ```

  Her araç isteğe bağlı bir `cluster` parametresini kabul eder. Atlanırsa, sunucu `DEFAULT_CLUSTER` değerini kullanır. `DEFAULT_CLUSTER` ayarlanmadığında, JSON nesnesindeki ilk küme varsayılan olarak kullanılır. Belirli bir kümeler hedef alan bir araç çağrısı şuna benzer:

  ```json
  {
    "cluster": "staging",
    "index": "logs-*",
    "body": {
      "query": {
        "match_all": {}
      }
    }
  }
  ```

  ### MCP Sunucusu Kimlik Doğrulaması (Yalnızca HTTP Transports)

  MCP sunucusunu HTTP tabanlı transportlarla (SSE veya Streamable HTTP) çalıştırırken, sunucuyu yetkisiz erişimden korumak için Bearer token kimlik doğrulamasını etkinleştirebilirsiniz.

  - `MCP_API_KEY`: MCP sunucusu kimlik doğrulaması için API anahtarı. İstemciler `Authorization: Bearer <MCP_API_KEY>` header'ını içermelidir.

  **Önemli Güvenlik Notları:**
  - Kimlik doğrulama **yalnızca** HTTP transportları (`sse`, `streamable-http`) için **geçerlidir**. `stdio` transport yerel process iletişimi kullanır ve kimlik doğrulama gerektirmez.
  - `MCP_API_KEY` **ayarlanmadıysa**, MCP sunucusu **kimlik doğrulama olmadan** erişilebilir olacaktır. Bu, sunucuyu ağ üzerinden gösterirken bir güvenlik riski oluşturur.
  - HTTP transportları ile production dağıtımları için **her zaman `MCP_API_KEY` ayarlayın**.

  ```bash
  # Güvenli bir API anahtarı oluşturun (openssl kullanarak örnek)
  export MCP_API_KEY=$(openssl rand -base64 32)

  # Veya custom bir API anahtarı ayarlayın
  export MCP_API_KEY="your-secure-api-key-here"
  ```

  ### Yüksek Riskli İşlemleri Devre Dışı Bırakın

  - `DISABLE_HIGH_RISK_OPERATIONS`: Tüm write işlemlerini devre dışı bırakmak için `true` olarak ayarlayın (varsayılan: `false`)
  - `DISABLE_OPERATIONS`: Devre dışı bırakılacak belirli işlemlerin virgülle ayrılmış listesi (isteğe bağlı, ayarlanmadıysa varsayılan write işlemleri listesini kullanır)

  `DISABLE_HIGH_RISK_OPERATIONS` true olarak ayarlandığında, write işlemleri gerçekleştiren tüm MCP araçları MCP istemcisinden tamamen gizlenir. Bu modda, aşağıdaki MCP araçları varsayılan olarak devre dışı bırakılır.

  - **Index İşlemleri:**
    - `create_index`
    - `delete_index`
    
  - **Doküman İşlemleri:**
    - `index_document`
    - `delete_document`
    - `delete_by_query`
    
  - **Data Stream İşlemleri:**
    - `create_data_stream`
    - `delete_data_stream`
    
  - **Alias İşlemleri:**
    - `put_alias`
    - `delete_alias`
    
  - **Genel API İşlemleri:**
    - `general_api_request`

  İsteğe bağlı olarak, `DISABLE_OPERATIONS` ortam değişkeninde devre dışı bırakılacak işlemlerin virgülle ayrılmış listesini belirtebilirsiniz.

  ```bash
  # Yüksek Riskli İşlemleri Devre Dışı Bırakın
  export DISABLE_HIGH_RISK_OPERATIONS=true
  # Yalnızca belirli işlemleri devre dışı bırakın
  export DISABLE_OPERATIONS="delete_index,delete_document,delete_by_query"
  ```

  ## Elasticsearch/OpenSearch Kümesini Başlatın

  Docker Compose kullanarak Elasticsearch/OpenSearch kümesini başlatın:

  ```bash
  # Elasticsearch için
  docker-compose -f docker-compose-elasticsearch.yml up -d

  # OpenSearch için
  docker-compose -f docker-compose-opensearch.yml up -d
  ```

  Varsayılan Elasticsearch kullanıcı adı `elastic` ve şifre `test123`'dir. Varsayılan OpenSearch kullanıcı adı `admin` ve şifre `admin`'dir.

  Kibana/OpenSearch Dashboards'a http://localhost:5601'den erişebilirsiniz.

  ## Stdio

  ### Seçenek 1: uvx Kullanma

  `uvx` kullanmak paketi PyPI'den otomatik olarak yükleyecektir, yerel olarak depoyu klonlamaya gerek yoktur. Aşağıdaki konfigürasyonu `claude_desktop_config.json` config dosyasına ekleyin.

  ```json
  // Elasticsearch kullanıcı adı/şifre ile
  {
    "mcpServers": {
      "elasticsearch-mcp-server": {
        "command": "uvx",
        "args": [
          "elasticsearch-mcp-server"
        ],
        "env": {
          "ELASTICSEARCH_HOSTS": "https://localhost:9200",
          "ELASTICSEARCH_USERNAME": "elastic",
          "ELASTICSEARCH_PASSWORD": "test123"
        }
      }
    }
  }

  // Elasticsearch API anahtarı ile
  {
    "mcpServers": {
      "elasticsearch-mcp-server": {
        "command": "uvx",
        "args": [
          "elasticsearch-mcp-server"
        ],
        "env": {
          "ELASTICSEARCH_HOSTS": "https://localhost:9200",
          "ELASTICSEARCH_API_KEY": "<YOUR_ELASTICSEARCH_API_KEY>"
        }
      }
    }
  }

  // OpenSearch için
  {
    "mcpServers": {
      "opensearch-mcp-server": {
        "command": "uvx",
        "args": [
          "opensearch-mcp-server"
        ],
        "env": {
          "OPENSEARCH_HOSTS": "https://localhost:9200",
          "OPENSEARCH_USERNAME": "admin",
          "OPENSEARCH_PASSWORD": "admin"
        }
      }
    }
  }
  ```

  ### Seçenek 2: Yerel geliştirme ile uv Kullanma

  `uv` kullanmak depoyu yerel olarak klonlamayı ve kaynak koda giden yolu belirtmeyi gerektirir. Aşağıdaki konfigürasyonu Claude Desktop'ın config dosyası `claude_desktop_config.json`'a ekleyin.

  ```json
  // Elasticsearch kullanıcı adı/şifre ile
  {
    "mcpServers": {
      "elasticsearch-mcp-server": {
        "command": "uv",
        "args": [
          "--directory",
          "path/to/elasticsearch-mcp-server",
          "run",
          "elasticsearch-mcp-server"
        ],
        "env": {
          "ELASTICSEARCH_HOSTS": "https://localhost:9200",
          "ELASTICSEARCH_USERNAME": "elastic",
          "ELASTICSEARCH_PASSWORD": "test123"
        }
      }
    }
  }

  // Elasticsearch API anahtarı ile
  {
    "mcpServers": {
      "elasticsearch-mcp-server": {
        "command": "uv",
        "args": [
          "--directory",
          "path/to/elasticsearch-mcp-server",
          "run",
          "elasticsearch-mcp-server"
        ],
        "env": {
          "ELASTICSEARCH_HOSTS": "https://localhost:9200",
          "ELASTICSEARCH_API_KEY": "<YOUR_ELASTICSEARCH_API_KEY>"
        }
      }
    }
  }

  // OpenSearch için
  {
    "mcpServers": {
      "opensearch-mcp-server": {
        "command": "uv",
        "args": [
          "--directory",
          "path/to/elasticsearch-mcp-server",
          "run",
          "opensearch-mcp-server"
        ],
        "env": {
          "OPENSEARCH_HOSTS": "https://localhost:9200",
          "OPENSEARCH_USERNAME": "admin",
          "OPENSEARCH_PASSWORD": "admin"
        }
      }
    }
  }
  ```

  ## SSE

  ### Seçenek 1: uvx Kullanma

  ```bash
  # Ortam değişkenlerini dışa aktarın (kullanıcı adı/şifre ile)
  export ELASTICSEARCH_HOSTS="https://localhost:9200"
  export ELASTICSEARCH_USERNAME="elastic"
  export ELASTICSEARCH_PASSWORD="test123"

  # VEYA ortam değişkenlerini dışa aktarın (API anahtarı ile)
  export ELASTICSEARCH_HOSTS="https://localhost:9200"
  export ELASTICSEARCH_API_KEY="<YOUR_ELASTICSEARCH_API_KEY>"

  # Varsayılan olarak, SSE MCP sunucusu http://127.0.0.1:8000/sse üzerinde hizmet verecektir
  uvx elasticsearch-mcp-server --transport sse

  # Host, port ve path değerleri --host, --port ve --path seçenekleri kullanılarak belirtilebilir
  uvx elasticsearch-mcp-server --transport sse --host 0.0.0.0 --port 8000 --path /sse
  ```

  ### Seçenek 2: uv Kullanma

  ```bash
  # Varsayılan olarak, SSE MCP sunucusu http://127.0.0.1:8000/sse üzerinde hizmet verecektir
  uv run src/server.py elasticsearch-mcp-server --transport sse

  # Host, port ve path değerleri --host, --port ve --path seçenekleri kullanılarak belirtilebilir
  uv run src/server.py elasticsearch-mcp-server --transport sse --host 0.0.0.0 --port 8000 --path /sse
  ```

  ## Streamable HTTP

  ### Seçenek 1: uvx Kullanma

  ```bash
  # Ortam değişkenlerini dışa aktarın (kullanıcı adı/şifre ile)
  export ELASTICSEARCH_HOSTS="https://localhost:9200"
  export ELASTICSEARCH_USERNAME="elastic"
  export ELASTICSEARCH_PASSWORD="test123"

  # VEYA ortam değişkenlerini dışa aktarın (API anahtarı ile)
  export ELASTICSEARCH_HOSTS="https://localhost:9200"
  export ELASTICSEARCH_API_KEY="<YOUR_ELASTICSEARCH_API_KEY>"

  # Varsayılan olarak, Streamable HTTP MCP sunucusu http://127.0.0.1:8000/mcp üzerinde hizmet verecektir
  uvx elasticsearch-mcp-server --transport streamable-http

  # Host, port ve path değerleri --host, --port ve --path seçenekleri kullanılarak belirtilebilir
  uvx elasticsearch-mcp-server --transport streamable-http --host 0.0.0.0 --port 8000 --path /mcp
  ```

  ### Seçenek 2: uv Kullanma

  ```bash
  # Varsayılan olarak, Streamable HTTP MCP sunucusu http://127.0.0.1:8000/mcp üzerinde hizmet verecektir
  uv run src/server.py elasticsearch-mcp-server --transport streamable-http

  # Host, port ve path değerleri --host, --port ve --path seçenekleri kullanılarak belirtilebilir
  uv run src/server.py elasticsearch-mcp-server --transport streamable-http --host 0.0.0.0 --port 8000 --path /mcp
  ```

  ## Uyumluluk

  MCP sunucusu Elasticsearch 7.x, 8.x ve 9.x ile uyumludur. Varsayılan olarak, Elasticsearch 8.x istemcisini (suffix olmadan) kullanır.

  | MCP Sunucusu | Elasticsearch |
  | --- | --- |
  | elasticsearch-mcp-server-es7 | Elasticsearch 7.x |
  | elasticsearch-mcp-server | Elasticsearch 8.x |
  | elasticsearch-mcp-server-es9 | Elasticsearch 9.x |
  | opensearch-mcp-server | OpenSearch 1.x, 2.x, 3.x |

  Elasticsearch 7.x istemcisini kullanmak için `elasticsearch-mcp-server-es7` varyantını çalıştırın. Elasticsearch 9.x için `elasticsearch-mcp-server-es9` varyantını kullanın. Örneğin:

  ```bash
  uvx elasticsearch-mcp-server-es7
  ```

  Farklı Elasticsearch varyantlarını (örn. 7.x veya 9.x) yerel olarak çalıştırmak istiyorsanız, `pyproject.toml`'deki `elasticsearch` dependency sürümünü güncellemeniz yeterlidir, ardından sunucuyu şu şekilde başlatın:

  ```bash
  uv run src/server.py elasticsearch-mcp-server
  ```

  ## Kubernetes Dağıtımı

  Docker imajı `ghcr.io/cr7258/elasticsearch-mcp-server` adresine yayımlanmıştır ve Helm chart'ı `oci://ghcr.io/cr7258/charts/elasticsearch-mcp-server` repository'sinde bir OCI artifact olarak kullanılabilir.

  Tam kurulum talimatları, konfigürasyon referansı ve kullanım örnekleri için **[Helm chart README](helm/elasticsearch-mcp-server/README.md)** başvurunuz.

  ## Lisans

  Bu proje Apache License Version 2.0 altında lisanslanmıştır - ayrıntılar için [LICENSE](LICENSE) dosyasına bakınız.
---

# Elasticsearch/OpenSearch MCP Server

[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/cr7258-elasticsearch-mcp-server-badge.png)](https://mseep.ai/app/cr7258-elasticsearch-mcp-server)

[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/cr7258/elasticsearch-mcp-server)](https://archestra.ai/mcp-catalog/cr7258__elasticsearch-mcp-server)

## Overview

A Model Context Protocol (MCP) server implementation that provides Elasticsearch and OpenSearch interaction. This server enables searching documents, analyzing indices, and managing cluster through a set of tools.

<a href="https://glama.ai/mcp/servers/b3po3delex"></a>

## Demo

https://github.com/user-attachments/assets/f7409e31-fac4-4321-9c94-b0ff2ea7ff15

## Features

### General Operations

- `general_api_request`: Perform a general HTTP API request. Use this tool for any Elasticsearch/OpenSearch API that does not have a dedicated tool.

### Index Operations

- `list_indices`: List all indices.
- `get_index`: Returns information (mappings, settings, aliases) about one or more indices.
- `create_index`: Create a new index.
- `delete_index`: Delete an index.
- `create_data_stream`: Create a new data stream (requires matching index template).
- `get_data_stream`: Get information about one or more data streams.
- `delete_data_stream`: Delete one or more data streams and their backing indices.

### Document Operations

- `search_documents`: Search for documents.
- `index_document`: Creates or updates a document in the index.
- `get_document`: Get a document by ID.
- `delete_document`: Delete a document by ID.
- `delete_by_query`: Deletes documents matching the provided query.

### Cluster Operations

- `get_cluster_health`: Returns basic information about the health of the cluster.
- `get_cluster_stats`: Returns high-level overview of cluster statistics.

### Alias Operations

- `list_aliases`: List all aliases.
- `get_alias`: Get alias information for a specific index.
- `put_alias`: Create or update an alias for a specific index.
- `delete_alias`: Delete an alias for a specific index.

### Analyzer Operations

- `analyze_text`: Analyze text using a specified analyzer or custom analysis chain. Useful for debugging search queries and understanding how text is tokenized.

## Configure Environment Variables

The MCP server supports the following environment variables:

### Basic Authentication (Username/Password)
- `ELASTICSEARCH_USERNAME`: Username for basic authentication
- `ELASTICSEARCH_PASSWORD`: Password for basic authentication
- `OPENSEARCH_USERNAME`: Username for OpenSearch basic authentication
- `OPENSEARCH_PASSWORD`: Password for OpenSearch basic authentication

### API Key Authentication (Elasticsearch only) - Recommended
- `ELASTICSEARCH_API_KEY`: API key for [Elasticsearch](https://www.elastic.co/docs/deploy-manage/api-keys/elasticsearch-api-keys) or [Elastic Cloud](https://www.elastic.co/docs/deploy-manage/api-keys/elastic-cloud-api-keys) Authentication.

### Connection Settings
- `ELASTICSEARCH_HOSTS` / `OPENSEARCH_HOSTS`: Comma-separated list of hosts (default: `https://localhost:9200`)
- `ELASTICSEARCH_CLUSTERS` / `OPENSEARCH_CLUSTERS`: Inline JSON object for named cluster configurations. When set, tools can target a specific cluster with the optional `cluster` parameter.
- `ELASTICSEARCH_CLUSTERS_FILE` / `OPENSEARCH_CLUSTERS_FILE`: Path to a JSON file with the clusters object. Recommended when the configuration is embedded inside another JSON file (e.g. the MCP client config) because it avoids JSON-in-JSON escaping. Takes precedence over the inline variable when both are set.
- `DEFAULT_CLUSTER`: Default cluster name to use when multi-cluster configuration is set and a tool call omits `cluster` (defaults to the first configured cluster).
- `VERIFY_CERTS`: Whether to verify SSL certificates (default: `false`)
- `REQUEST_TIMEOUT`: Request timeout in seconds (optional, uses client default if not set)

### Multiple Cluster Configuration

By default, the server uses a single Elasticsearch cluster from `ELASTICSEARCH_HOSTS`, `ELASTICSEARCH_USERNAME`, `ELASTICSEARCH_PASSWORD`, and `ELASTICSEARCH_API_KEY`, or a single OpenSearch cluster from `OPENSEARCH_HOSTS`, `OPENSEARCH_USERNAME`, and `OPENSEARCH_PASSWORD`. To configure multiple named clusters, set `ELASTICSEARCH_CLUSTERS` (or `OPENSEARCH_CLUSTERS`) to a JSON object inside the MCP server configuration. Because the value is a JSON string embedded in another JSON file, the inner quotes need to be escaped:

```json
{
  "mcpServers": {
    "elasticsearch-mcp-server": {
      "command": "uvx",
      "args": [
        "elasticsearch-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_CLUSTERS": "{\"prod\": {\"hosts\": [\"https://prod-es:9200\"], \"api_key\": \"<PROD_API_KEY>\", \"verify_certs\": true}, \"staging\": {\"hosts\": [\"https://staging-es:9200\"], \"username\": \"elastic\", \"password\": \"<STAGING_PASSWORD>\"}}",
        "DEFAULT_CLUSTER": "prod"
      }
    }
  }
}
```

For better readability, point `ELASTICSEARCH_CLUSTERS_FILE` (or `OPENSEARCH_CLUSTERS_FILE`) at a standalone JSON file instead. The value is just a path so it avoids the JSON-in-JSON escaping:

```json
{
  "mcpServers": {
    "elasticsearch-mcp-server": {
      "command": "uvx",
      "args": [
        "elasticsearch-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_CLUSTERS_FILE": "/etc/mcp/es-clusters.json",
        "DEFAULT_CLUSTER": "prod"
      }
    }
  }
}
```

`/etc/mcp/es-clusters.json`:

```json
{
  "prod": {
    "hosts": ["https://prod-es:9200"],
    "api_key": "<PROD_API_KEY>",
    "verify_certs": true
  },
  "staging": {
    "hosts": ["https://staging-es:9200"],
    "username": "elastic",
    "password": "<STAGING_PASSWORD>"
  }
}
```

Every tool accepts an optional `cluster` parameter. If omitted, the server uses `DEFAULT_CLUSTER`. When `DEFAULT_CLUSTER` is not set, the first cluster in the JSON object is used as the default. A tool call targeting a specific cluster looks like:

```json
{
  "cluster": "staging",
  "index": "logs-*",
  "body": {
    "query": {
      "match_all": {}
    }
  }
}
```

### MCP Server Authentication (HTTP Transports Only)

When running the MCP server with HTTP-based transports (SSE or Streamable HTTP), you can enable Bearer token authentication to protect the server from unauthorized access.

- `MCP_API_KEY`: API key for MCP server authentication. Clients must include `Authorization: Bearer <MCP_API_KEY>` header.

**Important Security Notes:**
- Authentication is **only applicable** for HTTP transports (`sse`, `streamable-http`). The `stdio` transport uses local process communication and doesn't require authentication.
- If `MCP_API_KEY` is **not set**, the MCP server will be accessible **without authentication**. This is a security risk when exposing the server over a network.
- For production deployments with HTTP transports, **always set `MCP_API_KEY`**.

```bash
# Generate a secure API key (example using openssl)
export MCP_API_KEY=$(openssl rand -base64 32)

# Or set a custom API key
export MCP_API_KEY="your-secure-api-key-here"
```

### Disable High-Risk Operations

- `DISABLE_HIGH_RISK_OPERATIONS`: Set to `true` to disable all write operations (default: `false`)
- `DISABLE_OPERATIONS`: Comma-separated list of specific operations to disable (optional, uses default write operations list if not set)

When `DISABLE_HIGH_RISK_OPERATIONS` is set to true, all MCP tools that perform write operations are completely hidden from the MCP client. In this mode, the following MCP tools are disabled by default.

- **Index Operations:**
  - `create_index`
  - `delete_index`
  
- **Document Operations:**
  - `index_document`
  - `delete_document`
  - `delete_by_query`
  
- **Data Stream Operations:**
  - `create_data_stream`
  - `delete_data_stream`
  
- **Alias Operations:**
  - `put_alias`
  - `delete_alias`
  
- **General API Operations:**
  - `general_api_request`

Optionally, you can specify a comma-separated list of operations to disable in the `DISABLE_OPERATIONS` environment variable.

```bash
# Disable High-Risk Operations
export DISABLE_HIGH_RISK_OPERATIONS=true
# Disable specific operations only
export DISABLE_OPERATIONS="delete_index,delete_document,delete_by_query"
```

## Start Elasticsearch/OpenSearch Cluster

Start the Elasticsearch/OpenSearch cluster using Docker Compose:

```bash
# For Elasticsearch
docker-compose -f docker-compose-elasticsearch.yml up -d

# For OpenSearch
docker-compose -f docker-compose-opensearch.yml up -d
```

The default Elasticsearch username is `elastic` and password is `test123`. The default OpenSearch username is `admin` and password is `admin`.

You can access Kibana/OpenSearch Dashboards from http://localhost:5601.

## Stdio

### Option 1: Using uvx

Using `uvx` will automatically install the package from PyPI, no need to clone the repository locally. Add the following configuration to 's config file `claude_desktop_config.json`.

```json
// For Elasticsearch with username/password
{
  "mcpServers": {
    "elasticsearch-mcp-server": {
      "command": "uvx",
      "args": [
        "elasticsearch-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_HOSTS": "https://localhost:9200",
        "ELASTICSEARCH_USERNAME": "elastic",
        "ELASTICSEARCH_PASSWORD": "test123"
      }
    }
  }
}

// For Elasticsearch with API key
{
  "mcpServers": {
    "elasticsearch-mcp-server": {
      "command": "uvx",
      "args": [
        "elasticsearch-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_HOSTS": "https://localhost:9200",
        "ELASTICSEARCH_API_KEY": "<YOUR_ELASTICSEARCH_API_KEY>"
      }
    }
  }
}

// For OpenSearch
{
  "mcpServers": {
    "opensearch-mcp-server": {
      "command": "uvx",
      "args": [
        "opensearch-mcp-server"
      ],
      "env": {
        "OPENSEARCH_HOSTS": "https://localhost:9200",
        "OPENSEARCH_USERNAME": "admin",
        "OPENSEARCH_PASSWORD": "admin"
      }
    }
  }
}
```

### Option 2: Using uv with local development

Using `uv` requires cloning the repository locally and specifying the path to the source code. Add the following configuration to Claude Desktop's config file `claude_desktop_config.json`.

```json
// For Elasticsearch with username/password
{
  "mcpServers": {
    "elasticsearch-mcp-server": {
      "command": "uv",
      "args": [
        "--directory",
        "path/to/elasticsearch-mcp-server",
        "run",
        "elasticsearch-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_HOSTS": "https://localhost:9200",
        "ELASTICSEARCH_USERNAME": "elastic",
        "ELASTICSEARCH_PASSWORD": "test123"
      }
    }
  }
}

// For Elasticsearch with API key
{
  "mcpServers": {
    "elasticsearch-mcp-server": {
      "command": "uv",
      "args": [
        "--directory",
        "path/to/elasticsearch-mcp-server",
        "run",
        "elasticsearch-mcp-server"
      ],
      "env": {
        "ELASTICSEARCH_HOSTS": "https://localhost:9200",
        "ELASTICSEARCH_API_KEY": "<YOUR_ELASTICSEARCH_API_KEY>"
      }
    }
  }
}

// For OpenSearch
{
  "mcpServers": {
    "opensearch-mcp-server": {
      "command": "uv",
      "args": [
        "--directory",
        "path/to/elasticsearch-mcp-server",
        "run",
        "opensearch-mcp-server"
      ],
      "env": {
        "OPENSEARCH_HOSTS": "https://localhost:9200",
        "OPENSEARCH_USERNAME": "admin",
        "OPENSEARCH_PASSWORD": "admin"
      }
    }
  }
}
```

## SSE

### Option 1: Using uvx

```bash
# export environment variables (with username/password)
export ELASTICSEARCH_HOSTS="https://localhost:9200"
export ELASTICSEARCH_USERNAME="elastic"
export ELASTICSEARCH_PASSWORD="test123"

# OR export environment variables (with API key)
export ELASTICSEARCH_HOSTS="https://localhost:9200"
export ELASTICSEARCH_API_KEY="<YOUR_ELASTICSEARCH_API_KEY>"

# By default, the SSE MCP server will serve on http://127.0.0.1:8000/sse
uvx elasticsearch-mcp-server --transport sse

# The host, port, and path can be specified using the --host, --port, and --path options
uvx elasticsearch-mcp-server --transport sse --host 0.0.0.0 --port 8000 --path /sse
```

### Option 2: Using uv

```bash
# By default, the SSE MCP server will serve on http://127.0.0.1:8000/sse
uv run src/server.py elasticsearch-mcp-server --transport sse

# The host, port, and path can be specified using the --host, --port, and --path options
uv run src/server.py elasticsearch-mcp-server --transport sse --host 0.0.0.0 --port 8000 --path /sse
```

## Streamable HTTP

### Option 1: Using uvx

```bash
# export environment variables (with username/password)
export ELASTICSEARCH_HOSTS="https://localhost:9200"
export ELASTICSEARCH_USERNAME="elastic"
export ELASTICSEARCH_PASSWORD="test123"

# OR export environment variables (with API key)
export ELASTICSEARCH_HOSTS="https://localhost:9200"
export ELASTICSEARCH_API_KEY="<YOUR_ELASTICSEARCH_API_KEY>"

# By default, the Streamable HTTP MCP server will serve on http://127.0.0.1:8000/mcp
uvx elasticsearch-mcp-server --transport streamable-http

# The host, port, and path can be specified using the --host, --port, and --path options
uvx elasticsearch-mcp-server --transport streamable-http --host 0.0.0.0 --port 8000 --path /mcp
```

### Option 2: Using uv

```bash
# By default, the Streamable HTTP MCP server will serve on http://127.0.0.1:8000/mcp
uv run src/server.py elasticsearch-mcp-server --transport streamable-http

# The host, port, and path can be specified using the --host, --port, and --path options
uv run src/server.py elasticsearch-mcp-server --transport streamable-http --host 0.0.0.0 --port 8000 --path /mcp
```

## Compatibility

The MCP server is compatible with Elasticsearch 7.x, 8.x, and 9.x. By default, it uses the Elasticsearch 8.x client (without a suffix).

| MCP Server | Elasticsearch |
| --- | --- |
| elasticsearch-mcp-server-es7 | Elasticsearch 7.x |
| elasticsearch-mcp-server | Elasticsearch 8.x |
| elasticsearch-mcp-server-es9 | Elasticsearch 9.x |
| opensearch-mcp-server | OpenSearch 1.x, 2.x, 3.x |

 To use the Elasticsearch 7.x client, run the `elasticsearch-mcp-server-es7` variant. For Elasticsearch 9.x, use `elasticsearch-mcp-server-es9`. For example:

```bash
uvx elasticsearch-mcp-server-es7
```

If you want to run different Elasticsearch variants (e.g., 7.x or 9.x) locally, simply update the `elasticsearch` dependency version in `pyproject.toml`, then start the server with:

```bash
uv run src/server.py elasticsearch-mcp-server
```

## Kubernetes Deployment

The Docker image is published to `ghcr.io/cr7258/elasticsearch-mcp-server` and the Helm chart is available as an OCI artifact at `oci://ghcr.io/cr7258/charts/elasticsearch-mcp-server` repository.

For full installation instructions, configuration reference, and usage examples see the **[Helm chart README](helm/elasticsearch-mcp-server/README.md)**.

## License

This project is licensed under the Apache License Version 2.0 - see the [LICENSE](LICENSE) file for details.
