---
name: "Canner/wren-engine"
description: "The Semantic Engine for Model Context Protocol(MCP) Clients and AI Agents"
category: "Databases"
repo: "Canner/wren-engine"
stars: 660
url: "https://github.com/Canner/wren-engine"
body_length: 11385
license: "Apache-2.0"
language: "Java"
homepage: "https://github.com/Canner/WrenAI"
body_tr: |-
  # Wren Engine — Arşivlendi

  > **Bu depo [Canner/WrenAI](https://github.com/Canner/WrenAI) içindeki `core/` dizinine birleştirilmiş ve şu anda arşivlenmiştir (salt okunur).**
  >
  > Yeni konular ve PR'lar → [Canner/WrenAI](https://github.com/Canner/WrenAI/issues)
  > Tam geçiş detayları (yol eşleştirmesi, arşivlenen modüller, mantık) → [tartışma #1592](https://github.com/Canner/wren-engine/discussions/1592)

  ---

  <p align="center">
    <a href="https://getwren.ai">
      <picture>
        <source media="(prefers-color-scheme: light)" srcset="./misc/wrenai_logo.png">
        
      </picture>
      <h1 align="center">Wren Engine</h1>
    </a>
  </p>

  <p align="center">
    AI ajanları için açık context engine
  </p>

  <p align="center">
    <a aria-label="Bizi takip edin" href="https://x.com/getwrenai">
      
    </a>
    <a aria-label="Lisans" href="https://github.com/Canner/wren-engine/blob/main/LICENSE">
      
    </a>
    <a aria-label="GitHub'da toplulukta katılın" href="https://discord.gg/5DvshJqG8Z">
      
    </a>
    <a aria-label="Canner" href="https://cannerdata.com/">
      
    </a>
  </p>

  > Wren Engine, [Wren AI](https://github.com/Canner/WrenAI)'nin ardında yer alan açık temeldir: iş verileri için anlamsal, yönetilen, ajan tarafından kullanılmaya hazır bir context katmanı.

  https://github.com/user-attachments/assets/037f2317-d8e5-41f2-9563-1e0bce4ef50c

  ## Wren Engine Neden Gerekli

  AI ajanları zaten araçları çağırabiliyor, belgelere göz atabiliyor ve kod yazabiliyor. Hala mücadele ettikleri şey iş contextidir.

  Kurumsal veriler bir veri ambarındaki satırlardan ibaret değildir. Bunlar tanımlar, metrikler, ilişkiler, izinler, lineaj ve niyet içerir. PostgreSQL veya Snowflake'e bağlanabilen bir ajan, "net gelir", "aktif müşteri" veya "pipeline coverage"ın şirketinizde tam olarak ne anlama geldiğini bilmez.

  Bu sadece bizim tezimiz değil. [Your Data Agents Need Context](https://a16z.com/your-data-agents-need-context/) yazısında a16z, veri ajanlarının yalnızca connectivity ve SQL generation'a sahip olduklarında ancak iş tanımları, güvenilir context ve bir şirketin nasıl çalıştığını açıklayan operasyonel bilgiden yoksun olduğunda başarısız olduğunu savunuyor.

  <p align="center">
    
  </p>

  Wren Engine bu boşluğu doldurmak için var.

  AI ajanlarına üzerinde akıl yürütebilecekleri bir context engine sunuyor, böylece şunları yapabilirler:

  - ham tablolar yerine modelleri anlaması
  - SQL'i icat etmek yerine güvenilir metrikleri kullanması
  - joinleri tahmin etmek yerine ilişkileri takip etmesi
  - yönetişimi atlamak yerine ona saygı göstermesi
  - doğal dili doğru, açıklanabilir veri erişimine dönüştürmesi

  Bu, sonraki nesil ajan deneyimleri inşa eden takımlar için açık kaynaklı context engine'dir.

  ## Vizyon

  Gelecekteki AI'ın sadece tool calling olmadığına inanıyoruz. Ajanların iş gerçekliğinin paylaşılan bir anlayışı üzerinde akıl yürütebileceği, alabilmesi, planlayabileceği ve harekete geçebileceği context bakımından zengin sistemlerdir.

  Wren Engine bu geleceğe yönelik açık kaynaklı katkımızdır.

  <p align="center">
    
  </p>

  Wren AI'nin altında yer alan anlamsal ve yürütme temelidir ve tek bir ürünün ötesinde yararlı olacak şekilde tasarlanmıştır:

  - MCP sunucuları ve ajan iş akışlarında gömülü
  - modern veri ambarları, veritabanları ve dosya sistemlerine bağlı
  - MDL aracılığıyla iş anlamını modellemeye yeterince ifadesel
  - yönetilen kurumsal kullanım durumlarını destekleyecek kadar sağlam
  - topluluk tarafından genişletmeye, entegre etmeye ve geliştirmeye açık

  Wren AI tam vizyon ise, Wren Engine bu vizyonu birlikte çalışabilir hale getiren açık çekirdektir.

  ## Wren Engine Ne Yapar

  Wren Engine iş verilerini ajan tarafından kullanılabilen contexte dönüştürür.

  <p align="center">
    
  </p>

  Yüksek seviyede:

  1. İş alanınızı Wren'in anlamsal modeliyle ve MDL'siyle tanımlarsınız.
  2. Wren Engine ajanların ihtiyaç duyduğu contexti yakalar: modeller, metrikler, ilişkiler ve erişim kuralları.
  3. Niyet analiz eder ve temel veri kaynaklarında doğru sorgular planlar.
  4. MCP istemcileri ve AI ajanları bu contextle temiz bir arayüz aracılığıyla etkileşim kurar.
  5. Takımlar iş mantığı ve sistemler geliştikçe modeli refine etmeye devam eder.

  Bu, text-to-SQL'den context-aware veri ajanlarına doğru pratik açık kaynaklı yoldur.

  Bu, ajanınızın artık "Hangi ham tabloyu sorgulamalıyım?" diye sormaması anlamına gelir.

  "Bu görevi doğru cevaplamak için hangi iş kavramına, metriğe veya yönetilen context dilimme ihtiyacım var?" diye soruyor.

  ## Ajan Oluşturucuları İçin Tasarlandı

  Wren Engine, aşağıdaki gibi araçlarda ajan-native iş akışları oluşturan açık kaynaklı topluluk için özellikle yararlıdır:

  - OpenClaw
  - Claude Code
  - VS Code
  - Claude Desktop
  - Cline
  - Cursor

  Ortamınız MCP konuşabiliyorsa, HTTP API'lerini çağırabiliyorsa veya anlamsal bir servisi gömebiliyorsa, Wren Engine ajanınızın arkasındaki context katmanı olabilir.

  Aşağıdakiler gibi deneyimleri güçlendirmek için kullanın:

  - güvenilir iş tanımlarıyla doğal dil analitikleri
  - yönetilen kurumsal veriler arasında sorulara cevap verebilen AI asistanları
  - panolar, raporlar ve iş akışı kararları oluşturan ajanlar
  - gerçek iş contexti gerektiren, sadece schema dökümü değil, kod asistanları
  - anlamsal modellere dayandırılması gereken, ad hoc SQL yerine, iç AI araçları

  Bu, geliştirici odaklı ajan ortamlarında özellikle önemlidir; burada asistan kod tabanınızı anlayabilir ancak veri sorularını doğru cevaplamak için gerekli iş contexten hala yoksundur.

  ## Desteklenen Veri Kaynakları

  Wren Engine, veri ambarları, veritabanları ve dosya tabanlı kaynaklar da dahil olmak üzere modern veri yığınlarında çalışacak şekilde inşa edilmiştir.

  Mevcut açık kaynak desteği aşağıdakiler gibi bağlayıcıları içerir:

  - Amazon S3
  - Apache Spark
  - Apache Doris
  - Athena
  - BigQuery
  - ClickHouse
  - Databricks
  - DuckDB
  - Google Cloud Storage
  - Yerel dosyalar
  - MinIO
  - MySQL
  - Oracle
  - PostgreSQL
  - Redshift
  - SQL Server
  - Snowflake
  - Trino

  En son connection şemalarını ve yeteneklerini için proje belgelerindeki connector API doçlarına bakın.

  ## Başlangıç

  ### Wren Engine'i AI Ajanları Aracılığıyla Kullanın

  Wren Engine'i Claude Code veya diğer AI Ajanları'ndan kullanmak istiyorsanız, buradan başlayın:

  - [Kurulum](https://docs.getwren.ai/oss/engine/get_started/installation)
  - [Hızlı başlangıç: Wren Engine + Claude Code ile jaffle_shop'ta sohbet edin](https://docs.getwren.ai/oss/engine/get_started/quickstart)
  - [Wren AI proje yapısını anlama](https://docs.getwren.ai/oss/engine/guide/modeling/wren_project)

  MCP sunucusu şunları içerir:

  - connection ve MDL kurulumu için yerel Web UI
  - daha güvenli ajan kullanımı için salt okunur mod
  - manifest deployment ve doğrulama araçları
  - uzak schema keşfi için metadata araçları

  ### Kavramları öğrenin

  - [Context nedir?](https://docs.getwren.ai/oss/engine/concept/what_is_context)
  - [Modeling Definition Language (MDL) nedir?](https://docs.getwren.ai/oss/engine/concept/what_is_mdl)
  - [Wren Engine'in LLM'lerle Faydaları](https://docs.getwren.ai/oss/engine/concept/benefits_llm)
  - [Your Data Agents Need Context](https://a16z.com/your-data-agents-need-context/)
  - [Apache DataFusion ile AI Ajanları için Anlamsal SQL Destekleme](https://getwren.ai/post/powering-semantic-sql-for-ai-agents-with-apache-datafusion)

  ## Wren Engine vs. Diğer Veri Araçları

  İnsanlar genellikle Wren Engine'i DataHub gibi catalog servisleri, ham veritabanı MCP sunucuları, BI anlamsal araçları veya text-to-SQL ajanları ile karşılaştırır.

  Basit fark şudur:

  - bu araçlar genellikle bir ajanın veri bulmasına veya SQL oluşturmasına yardımcı olur
  - Wren Engine bir ajanın iş anlamını anlamasına ve context engine aracılığıyla doğru sorguyu üretmesine yardımcı olur

  | Araç türü | Ajan'a ne sağlar | Wren Engine'in Eklediği |
  | --- | --- | --- |
  | Veri catalog servisleri | Tablolar, sütunlar, lineaj, sahibi, açıklamalar | İş modelleri, metrikler, ilişkiler ve yönetilen query planlama |
  | Ham veritabanı veya schema erişimi | Şemalara ve SQL yürütmeye doğrudan erişim | Ham tablolar üzerine iş katmanı, böylece ajan niyet tahmin etmek zorunda kalmaz |
  | BI veya anlamsal araçlar | Analitik iş akışları için küratörlü metrikler ve varlıklar | Ajan iş akışları için tasarlanmış açık context katmanı |
  | Text-to-SQL ajanlar | Doğal dilden hızlı SQL oluşturma | Açık iş tanımlarında temellendirilmiş daha iyi doğruluk |

  Birçok takım her ikisini isteyecektir:

  - veri alanını envanterlemek ve belgelemek için catalog
  - veri haline agentti-ready context olarak çevirmek için Wren Engine

  Bunun neden önemli olduğu:

  - joinler ve metrikler tahmin edilmek yerine tanımlandığı için daha doğru cevaplar
  - her ajan aynı iş tanımlarını kullandığı için daha tutarlı cevaplar
  - yönetişim query planlama içinde taşınabildiği için daha güvenli veri erişimi
  - context engine içinde yaşadığı için prompt engineering daha az gerekli

  Wren olmadan, bir ajan verilerin nerede olduğunu bilse bile soruyu doğru cevaplamayı yine de bilmeyebilir.

  ## Depo Haritası

  Bu depo temel engine modüllerini içerir:

  | Modül | Ne yapar |
  | --- | --- |
  | [`wren-core`](./wren-core) | MDL analizi, planlama ve optimizasyon için Apache DataFusion tarafından desteklenen Rust context engine'i |
  | [`wren-core-base`](./wren-core-base) | Paylaşılan manifest ve modelleme türleri |
  | [`wren-core-py`](./wren-core-py) | Engine'i Python'a sunan PyO3 bağlamaları |
  | [`ibis-server`](./ibis-server/) | Query yürütme, doğrulama, metadata ve bağlayıcılar için FastAPI sunucusu |
  | [`mcp-server`](./mcp-server/) | AI ajanları ve MCP-uyumlu istemciler için MCP sunucusu |

  Destekleyici modüller `wren-core-legacy`, `example`, `mock-web-server` ve benchmark yardımcılarını içerir.

  ### Geliştirici giriş noktaları

  - [`wren-core/README.md`](./wren-core/README.md)
  - [`wren-core-py/README.md`](./wren-core-py/README.md)
  - [`ibis-server/README.md`](./ibis-server/README.md)
  - [`mcp-server/README.md`](./mcp-server/README.md)

  ## Yerel Geliştirme

  Yaygın iş akışları:

  ```bash
  # Rust context engine'i
  cd wren-core
  cargo check --all-targets

  # Python + connector sunucusu
  cd ibis-server
  just install
  just dev

  # MCP sunucusu
  cd mcp-server
  # uv tabanlı kurulum için modül README'sine bakın
  ```

  ## Proje Durumu

  Wren Engine açıkça etkin bir şekilde gelişiyor. Mevcut fokus, context engine, yürütme yolunu ve MCP entegrasyonunu gerçek dünya ajan iş akışları için güçlendirmektir.

  Ajanlarla bugün inşa ediyorsanız, katılmak için harika bir zamandır.

  ## Topluluk

  - [Discord topluluğumuza](https://discord.gg/5DvshJqG8Z) katılın
  - [GitHub issue](https://github.com/Canner/wren-engine/issues) açın
  - Daha geniş ürün vizyonunu görmek için [Wren AI](https://github.com/Canner/WrenAI) keşfedin
  - a16z'den pazar tezini okuyun: [Your Data Agents Need Context](https://a16z.com/your-data-agents-need-context/)

  Wren Engine, AI'ın daha iyi promptların değil daha iyi contextin ihtiyacı olduğuna inanan oluşturucular içindir.
---

# Wren Engine — Archived

> **This repository has been merged into [Canner/WrenAI](https://github.com/Canner/WrenAI) under the `core/` directory and is now archived (read-only).**
>
> New issues and PRs → [Canner/WrenAI](https://github.com/Canner/WrenAI/issues)
> Full migration details (path mapping, archived modules, rationale) → [discussion #1592](https://github.com/Canner/wren-engine/discussions/1592)

---

<p align="center">
  <a href="https://getwren.ai">
    <picture>
      <source media="(prefers-color-scheme: light)" srcset="./misc/wrenai_logo.png">
      
    </picture>
    <h1 align="center">Wren Engine</h1>
  </a>
</p>

<p align="center">
  The open context engine for AI agents
</p>

<p align="center">
  <a aria-label="Follow us" href="https://x.com/getwrenai">
    
  </a>
  <a aria-label="License" href="https://github.com/Canner/wren-engine/blob/main/LICENSE">
    
  </a>
  <a aria-label="Join the community on GitHub" href="https://discord.gg/5DvshJqG8Z">
    
  </a>
  <a aria-label="Canner" href="https://cannerdata.com/">
    
  </a>
</p>

> Wren Engine is the open foundation behind [Wren AI](https://github.com/Canner/WrenAI): a semantic, governed, agent-ready context layer for business data.

https://github.com/user-attachments/assets/037f2317-d8e5-41f2-9563-1e0bce4ef50c

## Why Wren Engine

AI agents can already call tools, browse docs, and write code. What they still struggle with is business context.

Enterprise data is not just rows in a warehouse. It is definitions, metrics, relationships, permissions, lineage, and intent. An agent that can connect to PostgreSQL or Snowflake still does not know what "net revenue", "active customer", or "pipeline coverage" actually mean in your company.

This is not just our thesis. In [Your Data Agents Need Context](https://a16z.com/your-data-agents-need-context/), a16z argues that data agents break down when they only have connectivity and SQL generation, but lack business definitions, source-of-truth context, and the operational knowledge that explains how a company actually runs.

<p align="center">
  
</p>

Wren Engine exists to solve that gap.

It gives AI agents a context engine they can reason over, so they can:

- understand models instead of raw tables
- use trusted metrics instead of inventing SQL
- follow relationships instead of guessing joins
- respect governance instead of bypassing it
- turn natural language into accurate, explainable data access

This is the open source context engine for teams building the next generation of agent experiences.

## The Vision

We believe the future of AI is not tool calling alone. It is context-rich systems where agents can reason, retrieve, plan, and act on top of a shared understanding of business reality.

Wren Engine is our open source contribution to that future.

<p align="center">
  
</p>

It is the semantic and execution foundation beneath Wren AI, and it is designed to be useful well beyond a single product:

- embedded in MCP servers and agent workflows
- connected to modern warehouses, databases, and file systems
- expressive enough to model business meaning through MDL
- robust enough to support governed enterprise use cases
- open enough for the community to extend, integrate, and build on

If Wren AI is the full vision, Wren Engine is the open core that makes that vision interoperable.

## What Wren Engine Does

Wren Engine turns business data into agent-usable context.

<p align="center">
  
</p>

At a high level:

1. You describe your business domain with Wren's semantic model and MDL.
2. Wren Engine captures the context agents need: models, metrics, relationships, and access rules.
3. It analyzes intent and plans correct queries across your underlying data sources.
4. MCP clients and AI agents interact with that context through a clean interface.
5. Teams keep refining the model as business logic and systems evolve.

This is the practical open source path from text-to-SQL toward context-aware data agents.

That means your agent is no longer asking, "Which raw table should I query?"

It is asking, "Which business concept, metric, or governed slice of context do I need to answer this task correctly?"

## Built For Agent Builders

Wren Engine is especially useful for the open source community building agent-native workflows in tools like:

- OpenClaw
- Claude Code
- VS Code
- Claude Desktop
- Cline
- Cursor

If your environment can speak MCP, call HTTP APIs, or embed a semantic service, Wren Engine can become the context layer behind your agent.

Use it to power experiences like:

- natural-language analytics with trusted business definitions
- AI copilots that can answer questions across governed enterprise data
- agents that generate dashboards, reports, and workflow decisions
- code assistants that need real business context, not just schema dumps
- internal AI tools that should be grounded in semantic models instead of ad hoc SQL

This is especially important in developer-facing agent environments, where the assistant may understand your codebase but still lacks the business context required to answer data questions correctly.

## Supported Data Sources

Wren Engine is built to work across modern data stacks, including warehouses, databases, and file-based sources.

Current open source support includes connectors such as:

- Amazon S3
- Apache Spark
- Apache Doris
- Athena
- BigQuery
- ClickHouse
- Databricks
- DuckDB
- Google Cloud Storage
- Local files
- MinIO
- MySQL
- Oracle
- PostgreSQL
- Redshift
- SQL Server
- Snowflake
- Trino

See the connector API docs in the project documentation for the latest connection schemas and capabilities.

## Get Started

### Use Wren Engine through AI Agents

If you want to use Wren Engine from a Claude Code or other AI Agents, start here:

- [Installation](https://docs.getwren.ai/oss/engine/get_started/installation)
- [Quick start: Chat with jaffle_shop using Wren Engine + Claude Code](https://docs.getwren.ai/oss/engine/get_started/quickstart)
- [Understanding Wren AI project structure](https://docs.getwren.ai/oss/engine/guide/modeling/wren_project)

The MCP server includes:

- a local Web UI for connection and MDL setup
- read-only mode for safer agent usage
- manifest deployment and validation tools
- metadata tools for remote schema discovery

### Learn the concepts

- [What is context?](https://docs.getwren.ai/oss/engine/concept/what_is_context)
- [What is Modeling Definition Language (MDL)?](https://docs.getwren.ai/oss/engine/concept/what_is_mdl)
- [Benefits of Wren Engine with LLMs](https://docs.getwren.ai/oss/engine/concept/benefits_llm)
- [Your Data Agents Need Context](https://a16z.com/your-data-agents-need-context/)
- [Powering Semantic SQL for AI Agents with Apache DataFusion](https://getwren.ai/post/powering-semantic-sql-for-ai-agents-with-apache-datafusion)



## Wren Engine vs. Other Data Tools

People often compare Wren Engine to catalog services like DataHub, raw database MCP servers, BI semantic tools, or text-to-SQL agents.

The simple difference is:

- those tools usually help an agent find data or generate SQL
- Wren Engine helps an agent understand business meaning and produce the right query through a context engine

| Tool type | What it gives the agent | What Wren Engine adds |
| --- | --- | --- |
| Data catalog services | Tables, columns, lineage, owners, descriptions | Business models, metrics, relationships, and governed query planning |
| Raw database or schema access | Direct access to schemas and SQL execution | A business layer above raw tables so the agent does not have to guess intent |
| BI or semantic tools | Curated metrics and entities for analytics workflows | An open context layer designed for MCP and agent workflows |
| Text-to-SQL agents | Fast SQL generation from natural language | Better accuracy by grounding generation in explicit business definitions |

Many teams will want both:

- a catalog to inventory and document the data estate
- Wren Engine to turn that data into agent-ready context

Why that matters:

- more accurate answers because joins and metrics are defined instead of guessed
- more consistent answers because every agent uses the same business definitions
- safer data access because governance can be carried into query planning
- less prompt engineering because the context lives in the engine, not in the prompt

Without Wren, an agent may know where the data is but still not know how to answer the question correctly.

## Repository Map

This repository contains the core engine modules:

| Module | What it does |
| --- | --- |
| [`wren-core`](./wren-core) | Rust context engine powered by Apache DataFusion for MDL analysis, planning, and optimization |
| [`wren-core-base`](./wren-core-base) | Shared manifest and modeling types |
| [`wren-core-py`](./wren-core-py) | PyO3 bindings that expose the engine to Python |
| [`ibis-server`](./ibis-server/) | FastAPI server for query execution, validation, metadata, and connectors |
| [`mcp-server`](./mcp-server/) | MCP server for AI agents and MCP-compatible clients |

Supporting modules include `wren-core-legacy`, `example`, `mock-web-server`, and benchmarking utilities.

### Developer entry points

- [`wren-core/README.md`](./wren-core/README.md)
- [`wren-core-py/README.md`](./wren-core-py/README.md)
- [`ibis-server/README.md`](./ibis-server/README.md)
- [`mcp-server/README.md`](./mcp-server/README.md)

## Local Development

Common workflows:

```bash
# Rust context engine
cd wren-core
cargo check --all-targets

# Python + connector server
cd ibis-server
just install
just dev

# MCP server
cd mcp-server
# see module README for uv-based setup
```

## Project Status

Wren Engine is actively evolving in the open. The current focus is to make the context engine, execution path, and MCP integration stronger for real-world agent workflows.

If you are building with agents today, this is a great time to get involved.

## Community

- Join our [Discord community](https://discord.gg/5DvshJqG8Z)
- Open a [GitHub issue](https://github.com/Canner/wren-engine/issues)
- Explore [Wren AI](https://github.com/Canner/WrenAI) to see the broader product vision
- Read the market thesis from a16z: [Your Data Agents Need Context](https://a16z.com/your-data-agents-need-context/)

Wren Engine is for builders who believe AI needs better context, not just better prompts.
