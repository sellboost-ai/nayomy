---
name: "neo4j-contrib/mcp-neo4j"
description: "Model Context Protocol with Neo4j (Run queries, Knowledge Graph Memory, Manaage Neo4j Aura Instances)"
description_tr: "Neo4j ile Model Context Protocol (Sorguları çalıştırın, Bilgi Grafı Belleği, Neo4j Aura Örneklerini yönetin)"
category: "Databases"
repo: "neo4j-contrib/mcp-neo4j"
stars: 949
url: "https://github.com/neo4j-contrib/mcp-neo4j"
body_length: 4928
license: "MIT"
language: "Python"
homepage: "https://neo4j.com/developer/genai-ecosystem/model-context-protocol-mcp/"
body_tr: |-
  # Neo4j Labs MCP Sunucuları

  ## Neo4j Labs

  Bu MCP sunucuları [Neo4j Labs](https://neo4j.com/labs/) programının bir parçasıdır. 
  Neo4j Field GenAI ekibi tarafından geliştirilen ve bakımı yapılan bu sunucular, daha geniş geliştirici topluluğunun katkılarına açıktır. 
  Bu sunucular sık sık yeni ve deneysel özelliklerle güncellenmektedir, ancak Neo4j ürün ekibi tarafından desteklenmemektedir.

  **Aktif olarak geliştirilen ve bakımı yapılan sunucular olmakla birlikte, geriye uyumluluk ve kullanımdan kaldırma konularında hiçbir SLA veya garanti sağlamıyoruz.**

  Resmi Neo4j MCP sunucusunu arıyorsanız, [buradan](https://github.com/neo4j/mcp) bulabilirsiniz.

  ## Genel Bakış

  Model Context Protocol (MCP), büyük dil modelleri (LLM'ler) ile harici sistemler arasındaki context'i yönetmek için bir [standartlaştırılmış protokoldür](https://modelcontextprotocol.io/introduction).

  Bu sayede Claude Desktop'ı veya başka bir MCP Client'ı (VS Code, Cursor, Windsurf, Gemini CLI) kullanarak doğal dili ile Neo4j ve Aura hesabınızda işlemler yapabilirsiniz, örneğin:

  * Bu graph'ta neler var?
  * Sıklığa, toplam hacme ve ortalama hacme göre en çok satılan ürünlerden bir grafik oluştur
  * Instance'larımı listele
  * Aura Professional için 4GB'lık ve Graph Data Science etkinleştirilmiş mcp-test adında yeni bir instance oluştur
  * Bugün Andreas ve Oskar ile Neo4j MCP Servers üzerinde çalıştığım gerçeğini kaydet

  ## Sunucular

  ### `mcp-neo4j-cypher` - doğal dilden Cypher sorgularına

  [Benioku'da Ayrıntılar](./servers/mcp-neo4j-cypher/)

  Yapılandırılmış bir database'in schema'sını alın ve bu database'de oluşturulan read ve write Cypher sorgularını çalıştırın.

  **Gereksinim**: Schema incelemesi için Neo4j instance'ında [APOC plugin](https://neo4j.com/docs/apoc/current/installation/) kurulu ve etkinleştirilmiş olması gerekir.

  ### `mcp-neo4j-memory` - Neo4j'de depolanan bilgi grafı memory'si

  [Benioku'da Ayrıntılar](./servers/mcp-neo4j-memory/)

  Kişisel bilgi grafınızdan entity'leri ve relationship'leri yerel veya uzak bir Neo4j instance'ında depolayın ve alın.
  Farklı session'lar, conversation'lar ve client'lar arasında bu bilgilere erişin.

  ### `mcp-neo4j-cloud-aura-api` - Neo4j Aura bulut servisi yönetimi API'ı

  [Benioku'da Ayrıntılar](./servers/mcp-neo4j-cloud-aura-api//)

  [Neo4j Aura](https://console.neo4j.io) instance'larınızı AI asistan sohbet'inin rahatlığından doğrudan yönetin.

  Instance'lar oluşturun ve silin, instance'ları ada göre bulun, ölçeğini değiştirin ve özellik etkinleştirin.

  ### `mcp-neo4j-data-modeling` - etkileşimli graph veri modelleme ve görselleştirme

  [Benioku'da Ayrıntılar](./servers/mcp-neo4j-data-modeling/)

  Neo4j graph veri modellerini oluşturun, doğrulayın ve görselleştirin. Arrows.app'ten model import/export'u sağlar.

  ## Transport Modları

  Tüm sunucular birden fazla transport modunu destekler:

  - **STDIO** (varsayılan): Yerel araçlar ve Claude Desktop entegrasyonu için standart giriş/çıkış
  - **SSE**: Web tabanlı dağıtımlar için Server-Sent Events
  - **HTTP**: Modern web dağıtımları ve microservices için akışlı HTTP

  ### HTTP Transport Konfigürasyonu

  Bir sunucuyu HTTP modunda çalıştırmak için `--transport http` flag'ını kullanın:

  ```bash
  # Temel HTTP modu
  mcp-neo4j-cypher --transport http

  # Özel HTTP konfigürasyonu
  mcp-neo4j-cypher --transport http --host 127.0.0.1 --port 8080 --path /api/mcp/
  ```

  Environment variable'ları da desteklenmektedir:

  ```bash
  export NEO4J_TRANSPORT=http
  export NEO4J_MCP_SERVER_HOST=127.0.0.1
  export NEO4J_MCP_SERVER_PORT=8080
  export NEO4J_MCP_SERVER_PATH=/api/mcp/
  mcp-neo4j-cypher
  ```

  ## Bulut Dağıtımı

  Bu repository'deki tüm sunucular containerize edilmiş ve AWS ECS Fargate ve Azure Container Apps gibi bulut platformlarında dağıtım için hazırdır. Her sunucu HTTP transport modunu destekler; bu mod özellikle auto-scaling ve load balancing özelliklerine sahip ölçeklenebilir, production'a hazır dağıtımlar için tasarlanmıştır.

  📋 **[Tam Bulut Dağıtımı Kılavuzu →](README-Cloud.md)**

  Dağıtımı kılavuzu şunları kapsar:
  - **AWS ECS Fargate**: Auto-scaling ve Application Load Balancer ile adım adım dağıtım
  - **Azure Container Apps**: Yerleşik ölçekleme ve trafik yönetimine sahip sunucusuz konteyner dağıtımı
  - **Konfigürasyon En İyi Uygulamaları**: Güvenlik, izleme, kaynak önerileri ve sorun giderme
  - **Entegrasyon Örnekleri**: MCP client'larını bulut dağıtılan sunuculara bağlama

  ## Katkı Yapma

  Katkılar memnuniyetle karşılanır! Lütfen bir Pull Request göndermekten çekinmeyin.

  ## Blog Yazıları

  * [Geliştirici Tarafından Bilmesi Gereken Model Context Protocol (MCP) Hakkında Her Şey](https://neo4j.com/blog/developer/model-context-protocol/)
  * [Claude, Neo4j ile MCP Aracılığıyla Konuşuyor - Graph Database & Analytics](https://neo4j.com/blog/developer/claude-converses-neo4j-via-mcp/)
  * [Claude ve Neo4j ile Bilgi Grafı İnşa Etmek: Kod Yazılmayan MCP Yaklaşımı - Graph Database & Analytics](https://neo4j.com/blog/developer/knowledge-graphs-claude-neo4j-mcp/)
  * [Gemini CLI'de Neo4j Uzantısını Kullanmak](https://cloud.google.com/blog/topics/developers-practitioners/using-the-neo4j-extension-in-gemini-cli)

  ## Lisans

  MIT Lisansı
---

# Neo4j Labs MCP Servers

## Neo4j Labs

These MCP servers are a part of the [Neo4j Labs](https://neo4j.com/labs/) program. 
They are developed and maintained by the Neo4j Field GenAI team and welcome contributions from the larger developer community. 
These servers are frequently updated with new and experimental features, but are not supported by the Neo4j product team. 

**They are actively developed and maintained, but we don’t provide any SLAs or guarantees around backwards compatibility and deprecation.**

If you are looking for the official product Neo4j MCP server please find it [here](https://github.com/neo4j/mcp).

## Overview

Model Context Protocol (MCP) is a [standardized protocol](https://modelcontextprotocol.io/introduction) for managing context between large language models (LLMs) and external systems. 

This lets you use Claude Desktop, or any other MCP Client (VS Code, Cursor, Windsurf, Gemini CLI), to use natural language to accomplish things with Neo4j and your Aura account, e.g.:

* What is in this graph?
* Render a chart from the top products sold by frequency, total and average volume
* List my instances
* Create a new instance named mcp-test for Aura Professional with 4GB and Graph Data Science enabled
* Store the fact that I worked on the Neo4j MCP Servers today with Andreas and Oskar

## Servers

### `mcp-neo4j-cypher` - natural language to Cypher queries

[Details in Readme](./servers/mcp-neo4j-cypher/)

Get database schema for a configured database and execute generated read and write Cypher queries on that database.

**Requirement**: Requires the [APOC plugin](https://neo4j.com/docs/apoc/current/installation/) to be installed and enabled on the Neo4j instance for schema inspection.

### `mcp-neo4j-memory` - knowledge graph memory stored in Neo4j

[Details in Readme](./servers/mcp-neo4j-memory/)

Store and retrieve entities and relationships from your personal knowledge graph in a local or remote Neo4j instance.
Access that information over different sessions, conversations, clients.

### `mcp-neo4j-cloud-aura-api` - Neo4j Aura cloud service management API

[Details in Readme](./servers/mcp-neo4j-cloud-aura-api//)

Manage your [Neo4j Aura](https://console.neo4j.io) instances directly from the comfort of your AI assistant chat.

Create and destroy instances, find instances by name, scale them up and down and enable features.

### `mcp-neo4j-data-modeling` - interactive graph data modeling and visualization

[Details in Readme](./servers/mcp-neo4j-data-modeling/)

Create, validate, and visualize Neo4j graph data models. Allows for model import/export from Arrows.app.

## Transport Modes

All servers support multiple transport modes:

- **STDIO** (default): Standard input/output for local tools and Claude Desktop integration
- **SSE**: Server-Sent Events for web-based deployments
- **HTTP**: Streamable HTTP for modern web deployments and microservices

### HTTP Transport Configuration

To run a server in HTTP mode, use the `--transport http` flag:

```bash
# Basic HTTP mode
mcp-neo4j-cypher --transport http

# Custom HTTP configuration
mcp-neo4j-cypher --transport http --host 127.0.0.1 --port 8080 --path /api/mcp/
```

Environment variables are also supported:

```bash
export NEO4J_TRANSPORT=http
export NEO4J_MCP_SERVER_HOST=127.0.0.1
export NEO4J_MCP_SERVER_PORT=8080
export NEO4J_MCP_SERVER_PATH=/api/mcp/
mcp-neo4j-cypher
```

## Cloud Deployment

All servers in this repository are containerized and ready for cloud deployment on platforms like AWS ECS Fargate and Azure Container Apps. Each server supports HTTP transport mode specifically designed for scalable, production-ready deployments with auto-scaling and load balancing capabilities.

📋 **[Complete Cloud Deployment Guide →](README-Cloud.md)**

The deployment guide covers:
- **AWS ECS Fargate**: Step-by-step deployment with auto-scaling and Application Load Balancer
- **Azure Container Apps**: Serverless container deployment with built-in scaling and traffic management
- **Configuration Best Practices**: Security, monitoring, resource recommendations, and troubleshooting
- **Integration Examples**: Connecting MCP clients to cloud-deployed servers

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Blog Posts

* [Everything a Developer Needs to Know About the Model Context Protocol (MCP)](https://neo4j.com/blog/developer/model-context-protocol/)
* [Claude Converses With Neo4j Via MCP - Graph Database & Analytics](https://neo4j.com/blog/developer/claude-converses-neo4j-via-mcp/)
* [Building Knowledge Graphs With Claude and Neo4j: A No-Code MCP Approach - Graph Database & Analytics](https://neo4j.com/blog/developer/knowledge-graphs-claude-neo4j-mcp/)
* [Using the Neo4j Extension in Gemini CLI](https://cloud.google.com/blog/topics/developers-practitioners/using-the-neo4j-extension-in-gemini-cli)

## License

MIT License
