---
name: "centralmind/gateway"
description: "MCP and MCP SSE Server that automatically generate API based on database schema and data. Supports PostgreSQL, Clickhouse, MySQL, Snowflake, BigQuery, Supabase"
category: "Databases"
repo: "centralmind/gateway"
stars: 532
url: "https://github.com/centralmind/gateway"
body_length: 12205
license: "Apache-2.0"
language: "Go"
homepage: "https://centralmind.ai"
body_tr: |-
  <div align="center">

  ![Build Binaries](https://github.com/centralmind/gateway/actions/workflows/build-binaries.yml/badge.svg) &nbsp; <a href="https://discord.gg/XFhaUG4F5x"></a> &nbsp;&nbsp;<a href="https://t.me/+TM3T1SikjzA4ZWVi"></a> &nbsp;&nbsp; <a href="https://docs.centralmind.ai"></a>&nbsp;&nbsp; <a href="https://cursor.com/install-mcp?name=CentralMind%20Database%20Gateway&config=eyJjb21tYW5kIjoiZG9ja2VyIHJ1biAtaSAtLXBsYXRmb3JtIGxpbnV4L2FtZDY0IGdoY3IuaW8vY2VudHJhbG1pbmQvZ2F0ZXdheTp2MC4yLjE4IC0tY29ubmVjdGlvbi1zdHJpbmcgcG9zdGdyZXNxbDovL215X3VzZXI6bXlfcGFzc0Bsb2NhbGhvc3Q6NTQzMi9teWRiIHN0YXJ0IHN0ZGlvIn0%3D"></a>


  </div>


  <h2 align="center">CentralMind Gateway: Dakikalar İçinde API veya MCP Sunucusu Oluşturun</h2>

  🚀 İnteraktif Demo burada kullanılabilir: https://centralmind.ai

  ## Centralmind/Gateway Nedir

  Veritabanınızı MCP veya OpenAPI 3.1 protokolleri aracılığıyla AI-Agent'e sunmanın basit yolu.

  ```bash
  docker run --platform linux/amd64 -p 9090:9090 \
    ghcr.io/centralmind/gateway:v0.2.18 start \
    --connection-string "postgres://db-user:db-password@db-host/db-name?sslmode=require"
  ```

  Bu sizin için bir API çalıştıracak:

  ```shell
  INFO Gateway server started successfully!         
  INFO MCP SSE server for AI agents is running at: http://localhost:9090/sse 
  INFO REST API with Swagger UI is available at: http://localhost:9090/ 
  ```

  Bunu AI Agent'inizde kullanabilirsiniz:

  ![mcp-raw-cursor-setup.png](https://raw.githubusercontent.com/centralmind/gateway/HEAD/assets/mcp-raw-cursor-setup.png)

  Gateway, AI için optimize edilmiş API oluşturur.


  ## Neden Centralmind/Gateway

  AI agent'leri ve LLM-destekli uygulamalar verilere hızlı ve güvenli erişim gerektirir. Yapılandırılmış verileriniz için otomatik olarak güvenli, LLM-optimize API'ler üreten bir API katmanı oluşturuyoruz.
  - MCP veya OpenAPI ile hızlı başlayın veya Doğrudan/Raw SQL API'lerini kullanın
  - GDPR, CPRA, SOC 2 ve diğer düzenlemelerle uyumluluğu sağlamak için KŞV'leri ve hassas verileri filtreleyip çıkarır
  - İzlenebilirlik ve denetim yeteneklerini ekleyerek, AI uygulamalarının kara kutu olmamasını ve güvenlik ekiplerinin kontrol sahibi kalmasını sağlar
  - AI workload'ları için optimize edilmiş: AI agent'lerinin API'leri anlamasına yardımcı olmak için geliştirilmiş metaveri ile Model Context Protocol (MCP) desteği sunar, dahili caching ve güvenlik özellikleriyle birlikte

  Geliştirme sırasında, bir LLM'nin veritabanınızdan veri oluşturması, ayarlaması veya sorgulaması gerektiğinde yararlı olabilir.
  Analiz senaryolarında, veritabanı veya veri ambarınızla sohbet etmenizi sağlar.
  Uzaktan function/tool çağrısı kullanarak veritabanınızdan veri ile AI agent'lerinizi zenginleştirin.

  ![demo](https://raw.githubusercontent.com/centralmind/gateway/HEAD/assets/demo.gif)

  ## Özellikler

  - ⚡ **Otomatik API Oluşturma** – Tablo şeması ve örnek verilere dayalı olarak LLM kullanarak API'leri otomatik olarak oluşturur
  - 🗄️ **Yapılandırılmış Veritabanı Desteği** – <a href="https://docs.centralmind.ai/connectors/postgres/">PostgreSQL</a>, <a href="https://docs.centralmind.ai/connectors/mysql/">MySQL</a>, <a href="https://docs.centralmind.ai/connectors/clickhouse/">ClickHouse</a>, <a href="https://docs.centralmind.ai/connectors/snowflake/">Snowflake</a>, <a href="https://docs.centralmind.ai/connectors/mssql/">MSSQL</a>, <a href="https://docs.centralmind.ai/connectors/bigquery/">BigQuery</a>, <a href="https://docs.centralmind.ai/connectors/oracle/">Oracle Database</a>, <a href="https://docs.centralmind.ai/connectors/sqlite/">SQLite</a>, <a href="https://docs.centralmind.ai/connectors/sqlite/">ElasticSearch</a> destekler
  - 🌍 **Çoklu Protocol Desteği** – SSE modu da dahil olmak üzere API'ler REST veya MCP Sunucusu olarak sağlar
  - 🔐 **Kimlik Doğrulama Seçenekleri** – <a href="https://docs.centralmind.ai/plugins/api_keys/">API anahtarları</a> ve <a href="https://docs.centralmind.ai/plugins/oauth/">OAuth</a> için yerleşik destek
  - 🔒 **KŞV Koruması** – KŞV ve hassas verileri redakte etmek için <a href="https://docs.centralmind.ai/plugins/pii_remover/">regex plugin</a> veya <a href="https://docs.centralmind.ai/plugins/presidio_anonymizer/">Microsoft Presidio plugin</a> uygular
  - 👀 **Kapsamlı Monitoring** – İstek takibi ve denetim günlükleri için <a href="https://docs.centralmind.ai/plugins/otel/">OpenTelemetry (OTel)</a> entegrasyonu
  - 📦 **Yerel ve Şirket İçi** – Yapılandırılabilir AI endpoint'leri ve modellerle <a href="https://docs.centralmind.ai/providers/local-models/">kendi barındırılan LLM'ler</a> için destek
  - 🤖 **Çoklu AI Provider Desteği** - [OpenAI](https://docs.centralmind.ai/providers/openai), [Anthropic](https://docs.centralmind.ai/providers/anthropic), [Amazon Bedrock](https://docs.centralmind.ai/providers/bedrock), [Google Gemini](https://docs.centralmind.ai/providers/gemini) & [Google VertexAI](https://docs.centralmind.ai/providers/anthropic-vertexai) desteği
  - ⚡ **Esnek Konfigürasyon** – YAML konfigürasyonu ve plugin sistemi aracılığıyla kolayca genişletilebilir
  - 📜 **API Dokümantasyonu** – Otomatik olarak oluşturulan Swagger dokümantasyonu ve OpenAPI 3.1.0 şartnamesi
  - 🔑 **Satır Seviyesi Güvenlik (RLS)** – <a href="https://docs.centralmind.ai/plugins/lua_rls/">Lua scriptleri</a> kullanarak ince taneli veri erişim kontrolü
  - 🏎️ **Performans Optimizasyonu** – Zaman tabanlı ve <a href="https://docs.centralmind.ai/plugins/lru_cache/">LRU caching</a> stratejilerini uygular

  ## Nasıl Çalışır

  <div align="center">

  ![img.png](https://raw.githubusercontent.com/centralmind/gateway/HEAD/assets/diagram.png)

  </div>

  ### 1. Bağlan ve Keşfet

  Gateway, PostgreSQL gibi yapılandırılmış veritabanlarına bağlanır ve şemayı otomatik olarak analiz eder ve şemanız temelinde optimize edilmiş bir API yapısı oluşturmak için örnek verileri örneklendir. LLM sadece API konfigürasyonu üretmek için keşif aşamasında kullanılır.
  Araç, güvenliği KŞV algılaması aracılığıyla sağlarken API konfigürasyonunu oluşturmak için [AI Providers](https://docs.centralmind.ai/providers) kullanır.

  ### 2. Dağıt

  Gateway, tek başına ikili dosyadan, docker'dan veya <a href="https://docs.centralmind.ai/example/k8s/">Kubernetes</a>'ten çeşitli dağıtım seçeneklerini destekler.
  Detaylı talimatlar için <a href="https://docs.centralmind.ai/docs/content/getting-started/launching-api/">başlatma rehberimize</a> bakın. Sistem, kolay özelleştirme için YAML konfigürasyonu ve plugin'lerini kullanır.

  ### 3. Kullan ve Entegre Et

  Yerleşik güvenlik özellikleriyle REST API'leri veya Model Context Protocol (MCP) aracılığıyla verilerinize erişin.
  Gateway, <a href="https://docs.centralmind.ai/docs/content/integration/langchain/">LangChain</a>,
  <a href="https://docs.centralmind.ai/docs/content/integration/chatgpt/">OpenAI</a> ve
  <a href="https://docs.centralmind.ai/docs/content/integration/claude-desktop/">Claude Desktop</a> gibi AI modelleri ve uygulamalarla function calling veya <a href="https://docs.centralmind.ai/docs/content/integration/cursor/">Cursor</a>'u MCP aracılığıyla sorunsuz bir şekilde entegre olur. Ayrıca <a href="https://docs.centralmind.ai/plugins/otel/">telemetri'yi</a> yerel veya uzak hedefe otel formatında ayarlayabilirsiniz.

  ## Dokümantasyon

  ### Başlarken

  - <a href="https://docs.centralmind.ai/docs/content/getting-started/quickstart/">Hızlı Başlangıç Rehberi</a>
  - <a href="https://docs.centralmind.ai/docs/content/getting-started/installation/">Kurulum Talimatları</a>
  - <a href="https://docs.centralmind.ai/docs/content/getting-started/generating-api/">API Oluşturma Rehberi</a>
  - <a href="https://docs.centralmind.ai/docs/content/getting-started/launching-api/">API Başlatma Rehberi</a>

  ### Ek Kaynaklar

  - <a href="https://docs.centralmind.ai/docs/content/integration/chatgpt/">ChatGPT Entegrasyonu Rehberi</a>
  - <a href="https://docs.centralmind.ai/connectors/">Veritabanı Bağlayıcı Dokümantasyonu</a>
  - <a href="https://docs.centralmind.ai/plugins/">Plugin Dokümantasyonu</a>

  ## Nasıl Derlenir

  ```shell
  # Havuzu klonla
  git clone https://github.com/centralmind/gateway.git

  # Proje dizinine git
  cd gateway

  # Bağımlılıkları yükle
  go mod download

  # Projeyi derle
  go build .
  ```

  ## API Oluşturma

  Gateway, API konfigürasyonunuzu oluşturmak için LLM modellerini kullanır. Şu adımları izleyin:


  Desteklenen AI provider'larımızdan birini seçin:
  - [OpenAI](https://docs.centralmind.ai/providers/openai) ve tüm OpenAI-uyumlu provider'lar
  - [Anthropic](https://docs.centralmind.ai/providers/anthropic)
  - [Amazon Bedrock](https://docs.centralmind.ai/providers/bedrock)
  - [Google Vertex AI (Anthropic)](https://docs.centralmind.ai/providers/anthropic-vertexai)
  - [Google Gemini](https://docs.centralmind.ai/providers/gemini)

  Google Gemini cömert bir **ücretsiz katman** sağlar. Google AI Studio'yu ziyaret ederek bir API anahtarı alabilirsiniz:

  - [Google AI Studio](https://aistudio.google.com/apikey)

  Oturum açtıktan sonra, AI Studio'nun API bölümünde bir API anahtarı oluşturabilirsiniz. Ücretsiz katman, geliştirme ve test amaçları için erişilebilir kılarak cömert aylık token tahsisi içerir.

  AI provider kimlik doğrulamasını yapılandırın. Google Gemini için bir API anahtarı ayarlayın.

  ```bash
  export GEMINI_API_KEY='yourkey'
  ```

  2. Keşif komutunu çalıştırın:

  ```shell
  ./gateway discover \
    --ai-provider gemini \
    --connection-string "postgresql://neondb_owner:MY_PASSWORD@MY_HOST.neon.tech/neondb?sslmode=require" \
    --prompt "Generate for me awesome readonly API"
  ```

  3. Oluşturma işleminin tadını çıkarın:

  ```shell
  INFO 🚀 API Discovery Process
  INFO Step 1: Read configs
  INFO ✅ Step 1 completed. Done.

  INFO Step 2: Discover data
  INFO Discovered Tables:
  INFO   - payment_dim: 3 columns, 39 rows
  INFO   - fact_table: 9 columns, 1000000 rows
  INFO ✅ Step 2 completed. Done.

  # Additional steps and output...

  INFO ✅ All steps completed. Done.

  INFO --- Execution Statistics ---
  INFO Total time taken: 1m10s
  INFO Tokens used: 16543 (Estimated cost: $0.0616)
  INFO Tables processed: 6
  INFO API methods created: 18
  INFO Total number of columns with PII data: 2
  ```

  4. `gateway.yaml` dosyasında oluşturulan konfigürasyonu gözden geçirin:

  ```yaml
  api:
    name: Awesome Readonly API
    description: ''
    version: '1.0'
  database:
    type: postgres
    connection: YOUR_CONNECTION_INFO
    tables:
      - name: payment_dim
        columns: # Table columns
        endpoints:
          - http_method: GET
            http_path: /some_path
            mcp_method: some_method
            summary: Some readable summary
            description: 'Some description'
            query: SQL Query with params
            params: # Query parameters
  ```

  ## API'yi Çalıştırma

  ### Yerel olarak çalıştır

  ```shell
  ./gateway start --config gateway.yaml
  ```

  ### Docker Compose

  ```shell
  docker compose -f ./example/simple/docker-compose.yml up
  ```

  ### MCP Protocol Entegrasyonu

  Gateway, Claude ve diğer araçlarla sorunsuz entegrasyon için MCP protokolünü uygular. Detaylı kurulum talimatları için <a href="https://docs.centralmind.ai/docs/content/integration/claude-desktop/">Claude entegrasyonu rehberimize</a> bakın.

  MCP Tool'u Claude Desktop'a eklemek için Claude'un konfigürasyonunu ayarlayın:

  ```json
  {
    "mcpServers": {
      "gateway": {
        "command": "PATH_TO_GATEWAY_BINARY",
        "args": ["start", "--config", "PATH_TO_GATEWAY_YAML_CONFIG", "mcp-stdio"]
      }
    }
  }
  ```

  ## Yol Haritası

  Her zaman değişikliğe tabi olur ve yol haritası yüksek oranda kullanıcı geri bildirimlerine bağlı olacaktır. Şu anda,
  aşağıdaki özellikleri planlıyoruz:

  #### Veritabanı ve Bağlantı
  - 🗄️ **Genişletilmiş Veritabanı Entegrasyonları** - Databricks, Redshift, S3 (Iceberg ve Parquet), Oracle DB, Microsoft SQL Server, Elasticsearch
  - 🔑 **SSH tunneling** - jumphost veya ssh bastion kullanarak bağlantıları tünelleyebilme kabiliyeti

  #### Geliştirilmiş İşlevsellik
  - 🔍 **Gelişmiş Sorgu Yetenekleri** - Karmaşık filtreleme söz dizimi ve parametre olarak Aggregation fonksiyonları
  - 🔐 **Geliştirilmiş MCP Güvenliği** - API anahtarı ve OAuth kimlik doğrulaması

  #### Platform İyileştirmeleri
  - 📦 **Şema Yönetimi** - Otomatik şema evrimi ve API versiyonlaması
  - 🚦 **Gelişmiş Trafik Yönetimi** - Akıllı rate limiting, İstek azaltma
  - ✍️ **Yazma İşlemleri Desteği** - Insert, Update işlemleri

  ## MCP Kayıtlarında Veritabanı Gateway  
  - https://mcpreview.com/mcp-servers/centralmind/gateway
  - https://mcp.so/server/gateway/centralmind
  - https://smithery.ai/server/@centralmind/gateway
  - https://www.pulsemcp.com/servers/centralmind-database-gateway
---

<div align="center">

![Build Binaries](https://github.com/centralmind/gateway/actions/workflows/build-binaries.yml/badge.svg) &nbsp; <a href="https://discord.gg/XFhaUG4F5x"></a> &nbsp;&nbsp;<a href="https://t.me/+TM3T1SikjzA4ZWVi"></a> &nbsp;&nbsp; <a href="https://docs.centralmind.ai"></a>&nbsp;&nbsp; <a href="https://cursor.com/install-mcp?name=CentralMind%20Database%20Gateway&config=eyJjb21tYW5kIjoiZG9ja2VyIHJ1biAtaSAtLXBsYXRmb3JtIGxpbnV4L2FtZDY0IGdoY3IuaW8vY2VudHJhbG1pbmQvZ2F0ZXdheTp2MC4yLjE4IC0tY29ubmVjdGlvbi1zdHJpbmcgcG9zdGdyZXNxbDovL215X3VzZXI6bXlfcGFzc0Bsb2NhbGhvc3Q6NTQzMi9teWRiIHN0YXJ0IHN0ZGlvIn0%3D"></a>


</div>


<h2 align="center">CentralMind Gateway: Create API or MCP Server in Minutes</h2>

🚀 Interactive Demo avialable here: https://centralmind.ai

## What is Centralmind/Gateway

Simple way to expose your database to AI-Agent via MCP or OpenAPI 3.1 protocols.

```bash
docker run --platform linux/amd64 -p 9090:9090 \
  ghcr.io/centralmind/gateway:v0.2.18 start \
  --connection-string "postgres://db-user:db-password@db-host/db-name?sslmode=require"
```

This will run for you an API:

```shell
INFO Gateway server started successfully!         
INFO MCP SSE server for AI agents is running at: http://localhost:9090/sse 
INFO REST API with Swagger UI is available at: http://localhost:9090/ 
```

Which you can use inside your AI Agent:

![mcp-raw-cursor-setup.png](https://raw.githubusercontent.com/centralmind/gateway/HEAD/assets/mcp-raw-cursor-setup.png)

Gateway will generate AI optimized API.


## Why Centralmind/Gateway

AI agents and LLM-powered applications need fast, secure access to data. We're building an API layer that automatically generates secure, LLM-optimized APIs for your structured data.
- Quickly start with MCP or OpenAPI, or use Direct/Raw SQL APIs
- Filters out PII and sensitive data to ensure compliance with GDPR, CPRA, SOC 2, and other regulations
- Adds traceability and auditing capabilities, ensuring AI applications aren't black boxes and allowing security teams to maintain control
- Optimized for AI workloads: supports the Model Context Protocol (MCP) with enhanced metadata to help AI agents understand APIs, along with built-in caching and security features

It can be useful during development, when an LLM needs to create, adjust, or query data from your database.
In analytical scenarios, it enables you to chat with your database or data warehouse.
Enrich your AI agents with data from your database using remote function/tool calling.

![demo](https://raw.githubusercontent.com/centralmind/gateway/HEAD/assets/demo.gif)

## Features

- ⚡ **Automatic API Generation** – Creates APIs automatically using LLM based on table schema and sampled data
- 🗄️ **Structured Database Support** – Supports <a href="https://docs.centralmind.ai/connectors/postgres/">PostgreSQL</a>, <a href="https://docs.centralmind.ai/connectors/mysql/">MySQL</a>, <a href="https://docs.centralmind.ai/connectors/clickhouse/">ClickHouse</a>, <a href="https://docs.centralmind.ai/connectors/snowflake/">Snowflake</a>, <a href="https://docs.centralmind.ai/connectors/mssql/">MSSQL</a>, <a href="https://docs.centralmind.ai/connectors/bigquery/">BigQuery</a>, <a href="https://docs.centralmind.ai/connectors/oracle/">Oracle Database</a>, <a href="https://docs.centralmind.ai/connectors/sqlite/">SQLite</a>, <a href="https://docs.centralmind.ai/connectors/sqlite/">ElasticSearch</a>
- 🌍 **Multiple Protocol Support** – Provides APIs as REST or MCP Server including SSE mode
- 🔐 **Authentication Options** – Built-in support for <a href="https://docs.centralmind.ai/plugins/api_keys/">API keys</a> and <a href="https://docs.centralmind.ai/plugins/oauth/">OAuth</a>
- 🔒 **PII Protection** – Implements <a href="https://docs.centralmind.ai/plugins/pii_remover/">regex plugin</a> or <a href="https://docs.centralmind.ai/plugins/presidio_anonymizer/">Microsoft Presidio plugin</a> for PII and sensitive data redaction
- 👀 **Comprehensive Monitoring** – Integration with <a href="https://docs.centralmind.ai/plugins/otel/">OpenTelemetry (OTel)</a> for request tracking and audit trails
- 📦 **Local & On-Premises** – Support for <a href="https://docs.centralmind.ai/providers/local-models/">self-hosted LLMs</a> through configurable AI endpoints and models
- 🤖 **Multiple AI Providers Support** - Support for [OpenAI](https://docs.centralmind.ai/providers/openai), [Anthropic](https://docs.centralmind.ai/providers/anthropic), [Amazon Bedrock](https://docs.centralmind.ai/providers/bedrock), [Google Gemini](https://docs.centralmind.ai/providers/gemini) & [Google VertexAI](https://docs.centralmind.ai/providers/anthropic-vertexai)
- ⚡ **Flexible Configuration** – Easily extensible via YAML configuration and plugin system
- 📜 **API Documentation** – Auto-generated Swagger documentation and OpenAPI 3.1.0 specification
- 🔑 **Row-Level Security (RLS)** – Fine-grained data access control using <a href="https://docs.centralmind.ai/plugins/lua_rls/">Lua scripts</a>
- 🏎️ **Performance Optimization** – Implements time-based and <a href="https://docs.centralmind.ai/plugins/lru_cache/">LRU caching</a> strategies

## How it Works

<div align="center">

![img.png](https://raw.githubusercontent.com/centralmind/gateway/HEAD/assets/diagram.png)

</div>

### 1. Connect & Discover

Gateway connects to your structured databases like PostgreSQL and automatically analyzes the schema and data samples
to generate an optimized API structure based on your prompt. LLM is used only on discovery stage to produce API configuration.
The tool uses [AI Providers](https://docs.centralmind.ai/providers) to generate the API configuration while ensuring security
through PII detection.

### 2. Deploy

Gateway supports multiple deployment options from standalone binary, docker or <a href="https://docs.centralmind.ai/example/k8s/">Kubernetes</a>.
Check our <a href="https://docs.centralmind.ai/docs/content/getting-started/launching-api/">launching guide</a> for detailed
instructions. The system uses YAML configuration and plugins for easy customization.

### 3. Use & Integrate

Access your data through REST APIs or Model Context Protocol (MCP) with built-in security features.
Gateway seamlessly integrates with AI models and applications like <a href="https://docs.centralmind.ai/docs/content/integration/langchain/">LangChain</a>,
<a href="https://docs.centralmind.ai/docs/content/integration/chatgpt/">OpenAI</a> and
<a href="https://docs.centralmind.ai/docs/content/integration/claude-desktop/">Claude Desktop</a> using function calling
or <a href="https://docs.centralmind.ai/docs/content/integration/cursor/">Cursor</a> through MCP. You can also <a href="https://docs.centralmind.ai/plugins/otel/">setup telemetry</a> to local or remote destination in otel format.

## Documentation

### Getting Started

- <a href="https://docs.centralmind.ai/docs/content/getting-started/quickstart/">Quickstart Guide</a>
- <a href="https://docs.centralmind.ai/docs/content/getting-started/installation/">Installation Instructions</a>
- <a href="https://docs.centralmind.ai/docs/content/getting-started/generating-api/">API Generation Guide</a>
- <a href="https://docs.centralmind.ai/docs/content/getting-started/launching-api/">API Launch Guide</a>

### Additional Resources

- <a href="https://docs.centralmind.ai/docs/content/integration/chatgpt/">ChatGPT Integration Guide</a>
- <a href="https://docs.centralmind.ai/connectors/">Database Connector Documentation</a>
- <a href="https://docs.centralmind.ai/plugins/">Plugin Documentation</a>

## How to Build

```shell
# Clone the repository
git clone https://github.com/centralmind/gateway.git

# Navigate to project directory
cd gateway

# Install dependencies
go mod download

# Build the project
go build .
```

## API Generation

Gateway uses LLM models to generate your API configuration. Follow these steps:


Choose one of our supported AI providers:
- [OpenAI](https://docs.centralmind.ai/providers/openai) and all OpenAI-compatible providers
- [Anthropic](https://docs.centralmind.ai/providers/anthropic)
- [Amazon Bedrock](https://docs.centralmind.ai/providers/bedrock)
- [Google Vertex AI (Anthropic)](https://docs.centralmind.ai/providers/anthropic-vertexai)
- [Google Gemini](https://docs.centralmind.ai/providers/gemini)

Google Gemini provides a generous **free tier**. You can obtain an API key by visiting Google AI Studio:

- [Google AI Studio](https://aistudio.google.com/apikey)

Once logged in, you can create an API key in the API section of AI Studio. The free tier includes a generous monthly token allocation, making it accessible for development and testing purposes.

Configure AI provider authorization. For Google Gemini, set an API key.

```bash
export GEMINI_API_KEY='yourkey'
```

2. Run the discovery command:

```shell
./gateway discover \
  --ai-provider gemini \
  --connection-string "postgresql://neondb_owner:MY_PASSWORD@MY_HOST.neon.tech/neondb?sslmode=require" \
  --prompt "Generate for me awesome readonly API"
```

3. Enjoy the generation process:

```shell
INFO 🚀 API Discovery Process
INFO Step 1: Read configs
INFO ✅ Step 1 completed. Done.

INFO Step 2: Discover data
INFO Discovered Tables:
INFO   - payment_dim: 3 columns, 39 rows
INFO   - fact_table: 9 columns, 1000000 rows
INFO ✅ Step 2 completed. Done.

# Additional steps and output...

INFO ✅ All steps completed. Done.

INFO --- Execution Statistics ---
INFO Total time taken: 1m10s
INFO Tokens used: 16543 (Estimated cost: $0.0616)
INFO Tables processed: 6
INFO API methods created: 18
INFO Total number of columns with PII data: 2
```

4. Review the generated configuration in `gateway.yaml`:

```yaml
api:
  name: Awesome Readonly API
  description: ''
  version: '1.0'
database:
  type: postgres
  connection: YOUR_CONNECTION_INFO
  tables:
    - name: payment_dim
      columns: # Table columns
      endpoints:
        - http_method: GET
          http_path: /some_path
          mcp_method: some_method
          summary: Some readable summary
          description: 'Some description'
          query: SQL Query with params
          params: # Query parameters
```

## Running the API

### Run locally

```shell
./gateway start --config gateway.yaml
```

### Docker Compose

```shell
docker compose -f ./example/simple/docker-compose.yml up
```

### MCP Protocol Integration

Gateway implements the MCP protocol for seamless integration with Claude and other tools. For detailed setup instructions, see our <a href="https://docs.centralmind.ai/docs/content/integration/claude-desktop/">Claude integration guide</a>.

To add MCP Tool to Claude Desktop just adjust Claude's config :

```json
{
  "mcpServers": {
    "gateway": {
      "command": "PATH_TO_GATEWAY_BINARY",
      "args": ["start", "--config", "PATH_TO_GATEWAY_YAML_CONFIG", "mcp-stdio"]
    }
  }
}
```

## Roadmap

It is always subject to change, and the roadmap will highly depend on user feedback. At this moment,
we are planning the following features:

#### Database and Connectivity
- 🗄️ **Extended Database Integrations** - Databricks, Redshift, S3 (Iceberg and Parquet), Oracle DB, Microsoft SQL Server, Elasticsearch
- 🔑 **SSH tunneling** - ability to use jumphost or ssh bastion to tunnel connections

#### Enhanced Functionality
- 🔍 **Advanced Query Capabilities** - Complex filtering syntax and Aggregation functions as parameters
- 🔐 **Enhanced MCP Security** - API key and OAuth authentication

#### Platform Improvements
- 📦 **Schema Management** - Automated schema evolution and API versioning
- 🚦 **Advanced Traffic Management** - Intelligent rate limiting, Request throttling
- ✍️ **Write Operations Support** - Insert, Update operations

## Database Gateway in MCP Registries  
- https://mcpreview.com/mcp-servers/centralmind/gateway
- https://mcp.so/server/gateway/centralmind
- https://smithery.ai/server/@centralmind/gateway
- https://www.pulsemcp.com/servers/centralmind-database-gateway
