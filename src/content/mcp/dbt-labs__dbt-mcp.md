---
name: "dbt-labs/dbt-mcp"
description: "Official MCP server for dbt (data build tool) providing integration with dbt Core/Cloud CLI, project metadata discovery, model information, and semantic layer querying capabilities."
category: "Data Platforms"
repo: "dbt-labs/dbt-mcp"
stars: 568
url: "https://github.com/dbt-labs/dbt-mcp"
body_length: 7803
license: "Apache-2.0"
language: "Python"
body_tr: |-
  # dbt MCP Server
  [![OpenSSF Best Practices](https://www.bestpractices.dev/projects/11137/badge)](https://www.bestpractices.dev/projects/11137)

  Bu MCP (Model Context Protocol) sunucusu dbt ile etkileşim kurmak için çeşitli araçlar sağlar. Bu MCP sunucusunu, AI ajanlarına dbt Core, dbt Fusion ve dbt Platform'daki projenizin bağlamını sağlamak için kullanabilirsiniz.

  Daha fazla bilgi edinmek için [buradaki](https://docs.getdbt.com/docs/dbt-ai/about-mcp) belgelerimizi okuyun. [Bu](https://docs.getdbt.com/blog/introducing-dbt-mcp-server) blog yazısı dbt MCP sunucusu ile neler mümkün olduğu hakkında daha fazla detay sağlar.

  ## Deneysel MCP Bundle

  Her sürümle birlikte deneysel bir Model Context Protocol Bundle (`dbt-mcp.mcpb`) yayınlıyoruz; böylece MCPB tarafından desteklenen istemciler bu sunucuyu ek kurulum olmadan içe aktarabilir. Bundle'ı en son sürüm varlıklarından indirin ve Anthropic'in [`mcpb` CLI](https://github.com/modelcontextprotocol/mcpb) belgelerini izleyerek yükleyin veya inceleyin.

  ## Geri Bildirim

  Yorumlarınız veya sorularınız varsa, bir GitHub Issue oluşturun veya [community Slack](https://www.getdbt.com/community/join-the-community) kanalımızda `#tools-dbt-mcp` kanalına katılın.


  ## Mimari

  dbt MCP sunucusu mimarisi, ajanınızın çeşitli araçlara bağlanmasını sağlar.

  ![dbt MCP sunucusunun mimari diyagramı](https://raw.githubusercontent.com/dbt-labs/dbt-mcp/refs/heads/main/docs/d2.png)

  ## Araçlar

  ### SQL

  dbt Platform altyapısında SQL yürütmek ve oluşturmak için araçlar.
  - `execute_sql`: dbt Platform altyapısında Semantic Layer desteğiyle SQL yürütür.
  - `text_to_sql`: Proje bağlamını kullanarak doğal dilden SQL oluşturur.

  ### Semantic Layer

  dbt Semantic Layer hakkında daha fazla bilgi edinmek için [buraya](https://docs.getdbt.com/docs/use-dbt-semantic-layer/dbt-sl) tıklayın.
  - `get_dimensions`: Belirtilen metrikler için boyutları alır.
  - `get_entities`: Belirtilen metrikler için varlıkları alır.
  - `get_metrics_compiled_sql`: Sorguyu yürütmeden metrikler için derlenmiş SQL'i döndürür.
  - `list_metrics`: Tanımlanmış tüm metrikleri alır.
  - `list_saved_queries`: Kaydedilmiş tüm sorguları alır.
  - `query_metrics`: Filtreleme ve gruplama seçenekleriyle metrik sorgularını yürütür.

  ### Discovery

  dbt Discovery API hakkında daha fazla bilgi edinmek için [buraya](https://docs.getdbt.com/docs/dbt-cloud-apis/discovery-api) tıklayın.
  - `get_all_macros`: Makroları alır; pakete göre filtreleme veya yalnızca paket adlarını döndürme seçeneği.
  - `get_all_models`: Tüm modellerin adını ve açıklamasını alır.
  - `get_all_sources`: Tüm kaynakları tazelik durumuyla alır; kaynak adına göre filtreleme seçeneği.
  - `get_exposure_details`: Sahibi, ebeveynleri ve tazelik durumunu içeren exposure ayrıntılarını alır.
  - `get_exposures`: Tüm exposure'ları alır (aşağı akış panoları, uygulamalar veya analizler).
  - `get_lineage`: Tam soy ağacı grafiğini (öncüller ve halefleri) tür ve derinlik filtrelemesiyle alır.
  - `get_macro_details`: Belirli bir makro için ayrıntıları alır.
  - `get_mart_models`: Tüm mart modellerini alır.
  - `get_model_children`: Bir modelin aşağı akış bağımlılarını alır.
  - `get_model_details`: Derlenmiş SQL, sütunlar ve şema içeren model ayrıntılarını alır.
  - `get_model_health`: Sağlık sinyallerini alır: çalışma durumu, test sonuçları ve yukarı akış kaynağı tazeliği.
  - `get_model_parents`: Bir modelin yukarı akış bağımlılıklarını alır.
  - `get_model_performance`: Bir model için yürütme geçmişini alır; test sonuçlarını dahil etme seçeneği.
  - `get_related_models`: Semantik aramayı kullanarak benzer modelleri bulur.
  - `get_seed_details`: Belirli bir seed için ayrıntıları alır.
  - `get_semantic_model_details`: Belirli bir semantic model için ayrıntıları alır.
  - `get_snapshot_details`: Belirli bir snapshot için ayrıntıları alır.
  - `get_source_details`: Sütunlar ve tazelik içeren kaynak ayrıntılarını alır.
  - `get_test_details`: Belirli bir test için ayrıntıları alır.
  - `search`: [Alpha] dbt projesi genelinde kaynakları arar (genel olarak kullanılamaz).

  ### dbt CLI

  İstemcinizin MCP araçları aracılığıyla dbt komutlarını kullanabilmesine izin vermek, veri modellerinizi, kaynaklarınızı ve warehouse nesnelerinizi değiştirebilir. Yalnızca istemciye güveniyorsanız ve potansiyel etkiyi anladıysanız devam edin.
  - `build`: DAG sırasında modelleri, testleri, snapshot'ları ve seed'leri yürütür.
  - `clone`: Belirtilen durumdan seçilen düğümleri hedef şema(lara) klonlar.
  - `compile`: Modellerden/testlerden/analizlerden yürütülebilir SQL oluşturur; Jinja mantığını doğrulamak için faydalıdır.
  - `docs`: dbt projesi için belgelendirme oluşturur.
  - `get_lineage_dev`: Yerel manifest.json'dan tür ve derinlik filtrelemesiyle soy ağacını alır.
  - `get_node_details_dev`: Yerel manifest.json'dan düğüm ayrıntılarını alır (modeller, seed'ler, snapshot'lar, kaynaklar).
  - `list`: dbt projesindeki kaynakları türe göre seçici desteğiyle listeler.
  - `parse`: Proje dosyalarını sözdizimi doğruluğu için ayrıştırır ve doğrular.
  - `run`: Modelleri yürütür ve bunları veritabanında materyalize eder.
  - `show`: Veritabanına karşı SQL yürütür ve sonuçları döndürür.
  - `test`: Veri ve model bütünlüğünü doğrulamak için testleri çalıştırır.

  ### Admin API

  dbt Administrative API hakkında daha fazla bilgi edinmek için [buraya](https://docs.getdbt.com/docs/dbt-cloud-apis/admin-cloud-api) tıklayın.
  - `cancel_job_run`: Çalışan bir işi iptal eder.
  - `get_job_details`: Tetikleyiciler, zamanlama ve dbt komutları dahil iş yapılandırmasını alır.
  - `get_job_run_details`: Durumu, zamanlamayı, adımları ve yapıları içeren çalışma ayrıntılarını alır.
  - `get_job_run_error`: İş çalışması için hata ve/veya uyarı ayrıntılarını alır; uyarıları dahil etme veya yalnızca uyarıları gösterme seçeneği.
  - `list_job_run_artifacts`: Bir iş çalışmasından kullanılabilir yapıları listeler.
  - `list_jobs`: dbt Platform hesabındaki işleri listeler; projeye veya ortama göre filtreleme seçeneği.
  - `list_jobs_runs`: İş çalışmalarını listeler; işe, duruma göre filtreleme veya alan sırasına göre sıralama seçeneği.
  - `list_projects`: dbt Platform hesabındaki tüm projeleri listeler.
  - `retry_job_run`: Başarısız bir iş çalışmasını yeniden dener.
  - `trigger_job_run`: Bir iş çalışmasını tetikler; git dalını, şemayı veya diğer ayarları geçersiz kılma seçeneği.

  ### dbt Codegen

  Bu araçlar, dbt proje dosyaları için yapı kodu oluşturmayı otomatikleştirmeye yardımcı olur.
  - `generate_model_yaml`: Sütunlarla model YAML'ı oluşturur; yukarı akış açıklamalarını devralma seçeneği.
  - `generate_source`: Veritabanı şemalarını inceleyerek kaynak YAML'ı oluşturur; sütunları dahil etme seçeneği.
  - `generate_staging_model`: Bir kaynak tablosundan hazırlık modeli SQL'i oluşturur.

  ### dbt LSP

  Fusion motoru aracılığıyla gelişmiş SQL derlemesi ve sütun düzeyinde soy analizi için araçlar.
  - `fusion.compile_sql`: dbt Platform üzerinden proje bağlamında SQL'i derler.
  - `fusion.get_column_lineage`: dbt Platform üzerinden sütun düzeyinde soy ağacını izler.
  - `get_column_lineage`: Yerel olarak sütun düzeyinde soy ağacını izler (dbt Labs VSCE aracılığıyla dbt-lsp gerektirir).

  ### Product Docs

  docs.getdbt.com adresindeki resmi dbt belgelerinde arama yapmak ve içerik getirmek için araçlar.
  - `get_product_doc_pages`: Yol veya URL'ye göre bir veya daha fazla docs.getdbt.com sayfasının tam Markdown içeriğini getirir.
  - `search_product_docs`: docs.getdbt.com'da bir sorguyla eşleşen sayfaları arar; başlıkları, URL'leri ve açıklamalarını alaka sırasına göre döndürür. Tam içeriği getirmek için get_product_doc_pages kullanın.

  ### MCP Server Metadata

  Bu araçlar, MCP sunucusunun kendisi hakkında bilgiler sağlar.
  - `get_mcp_server_branch`: Çalışan dbt MCP sunucusunun mevcut git dalını döndürür.
  - `get_mcp_server_version`: dbt MCP sunucusunun mevcut sürümünü döndürür.


  ## Örnekler

  Genellikle dbt MCP sunucusunu Claude veya Cursor gibi bir ajan ürününe bağlayacaksınız. Ancak kendi ajanınızı oluşturmakla ilgileniyorsanız, başlamak için [örnekler dizinini](https://github.com/dbt-labs/dbt-mcp/tree/main/examples) kontrol edin.

  ## Bağımlılıklar

  Bağımlılıklar belirli sürümlere sabitlenmiş ve otomatik olarak güncellenmez. Yalnızca güvenlikle ilgili bağımlılık güncellemeleri otomatikleştirilmiş pull request'ler aracılığıyla sunulur.

  ## Katkı

  Nasıl katılacağınız hakkında talimatlar için `CONTRIBUTING.md` dosyasını okuyun!
---

# dbt MCP Server
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/11137/badge)](https://www.bestpractices.dev/projects/11137)

This MCP (Model Context Protocol) server provides various tools to interact with dbt. You can use this MCP server to provide AI agents with context of your project in dbt Core, dbt Fusion, and dbt Platform.

Read our documentation [here](https://docs.getdbt.com/docs/dbt-ai/about-mcp) to learn more. [This](https://docs.getdbt.com/blog/introducing-dbt-mcp-server) blog post provides more details for what is possible with the dbt MCP server.

## Experimental MCP Bundle

We publish an experimental Model Context Protocol Bundle (`dbt-mcp.mcpb`) with each release so that MCPB-aware clients can import this server without additional setup. Download the bundle from the latest release assets and follow Anthropic's [`mcpb` CLI](https://github.com/modelcontextprotocol/mcpb) docs to install or inspect it.

## Feedback

If you have comments or questions, create a GitHub Issue or join us in [the community Slack](https://www.getdbt.com/community/join-the-community) in the `#tools-dbt-mcp` channel.


## Architecture

The dbt MCP server architecture allows for your agent to connect to a variety of tools.

![architecture diagram of the dbt MCP server](https://raw.githubusercontent.com/dbt-labs/dbt-mcp/refs/heads/main/docs/d2.png)

## Tools

### SQL

Tools for executing and generating SQL on dbt Platform infrastructure.
- `execute_sql`: Executes SQL on dbt Platform infrastructure with Semantic Layer support.
- `text_to_sql`: Generates SQL from natural language using project context.

### Semantic Layer

To learn more about the dbt Semantic Layer, click [here](https://docs.getdbt.com/docs/use-dbt-semantic-layer/dbt-sl).
- `get_dimensions`: Gets dimensions for specified metrics.
- `get_entities`: Gets entities for specified metrics.
- `get_metrics_compiled_sql`: Returns compiled SQL for metrics without executing the query.
- `list_metrics`: Retrieves all defined metrics.
- `list_saved_queries`: Retrieves all saved queries.
- `query_metrics`: Executes metric queries with filtering and grouping options.

### Discovery

To learn more about the dbt Discovery API, click [here](https://docs.getdbt.com/docs/dbt-cloud-apis/discovery-api).
- `get_all_macros`: Retrieves macros; option to filter by package or return package names only.
- `get_all_models`: Retrieves name and description of all models.
- `get_all_sources`: Gets all sources with freshness status; option to filter by source name.
- `get_exposure_details`: Gets exposure details including owner, parents, and freshness status.
- `get_exposures`: Gets all exposures (downstream dashboards, apps, or analyses).
- `get_lineage`: Gets full lineage graph (ancestors and descendants) with type and depth filtering.
- `get_macro_details`: Gets details for a specific macro.
- `get_mart_models`: Retrieves all mart models.
- `get_model_children`: Gets downstream dependents of a model.
- `get_model_details`: Gets model details including compiled SQL, columns, and schema.
- `get_model_health`: Gets health signals: run status, test results, and upstream source freshness.
- `get_model_parents`: Gets upstream dependencies of a model.
- `get_model_performance`: Gets execution history for a model; option to include test results.
- `get_related_models`: Finds similar models using semantic search.
- `get_seed_details`: Gets details for a specific seed.
- `get_semantic_model_details`: Gets details for a specific semantic model.
- `get_snapshot_details`: Gets details for a specific snapshot.
- `get_source_details`: Gets source details including columns and freshness.
- `get_test_details`: Gets details for a specific test.
- `search`: [Alpha] Searches for resources across the dbt project (not generally available).

### dbt CLI

Allowing your client to utilize dbt commands through the MCP tooling could modify your data models, sources, and warehouse objects. Proceed only if you trust the client and understand the potential impact.
- `build`: Executes models, tests, snapshots, and seeds in DAG order.
- `clone`: Clones selected nodes from the specified state to the target schema(s).
- `compile`: Generates executable SQL from models/tests/analyses; useful for validating Jinja logic.
- `docs`: Generates documentation for the dbt project.
- `get_lineage_dev`: Retrieves lineage from local manifest.json with type and depth filtering.
- `get_node_details_dev`: Retrieves node details from local manifest.json (models, seeds, snapshots, sources).
- `list`: Lists resources in the dbt project by type with selector support.
- `parse`: Parses and validates project files for syntax correctness.
- `run`: Executes models to materialize them in the database.
- `show`: Executes SQL against the database and returns results.
- `test`: Runs tests to validate data and model integrity.

### Admin API

To learn more about the dbt Administrative API, click [here](https://docs.getdbt.com/docs/dbt-cloud-apis/admin-cloud-api).
- `cancel_job_run`: Cancels a running job.
- `get_job_details`: Gets job configuration including triggers, schedule, and dbt commands.
- `get_job_run_details`: Gets run details including status, timing, steps, and artifacts.
- `get_job_run_error`: Gets error and/or warning details for a job run; option to include or show warnings only.
- `list_job_run_artifacts`: Lists available artifacts from a job run.
- `list_jobs`: Lists jobs in a dbt Platform account; option to filter by project or environment.
- `list_jobs_runs`: Lists job runs; option to filter by job, status, or order by field.
- `list_projects`: Lists all projects in the dbt Platform account.
- `retry_job_run`: Retries a failed job run.
- `trigger_job_run`: Triggers a job run; option to override git branch, schema, or other settings.

### dbt Codegen

These tools help automate boilerplate code generation for dbt project files.
- `generate_model_yaml`: Generates model YAML with columns; option to inherit upstream descriptions.
- `generate_source`: Generates source YAML by introspecting database schemas; option to include columns.
- `generate_staging_model`: Generates staging model SQL from a source table.

### dbt LSP

A set of tools that leverage the Fusion engine for advanced SQL compilation and column-level lineage analysis.
- `fusion.compile_sql`: Compiles SQL in project context via dbt Platform.
- `fusion.get_column_lineage`: Traces column-level lineage via dbt Platform.
- `get_column_lineage`: Traces column-level lineage locally (requires dbt-lsp via dbt Labs VSCE).

### Product Docs

Tools for searching and fetching content from the official dbt documentation at docs.getdbt.com.
- `get_product_doc_pages`: Fetches the full Markdown content of one or more docs.getdbt.com pages by path or URL.
- `search_product_docs`: Searches docs.getdbt.com for pages matching a query; returns titles, URLs, and descriptions ranked by relevance. Use get_product_doc_pages to fetch full content.

### MCP Server Metadata

These tools provide information about the MCP server itself.
- `get_mcp_server_branch`: Returns the current git branch of the running dbt MCP server.
- `get_mcp_server_version`: Returns the current version of the dbt MCP server.


## Examples

Commonly, you will connect the dbt MCP server to an agent product like Claude or Cursor. However, if you are interested in creating your own agent, check out [the examples directory](https://github.com/dbt-labs/dbt-mcp/tree/main/examples) for how to get started.

## Dependencies

Dependencies are pinned to specific versions and are not updated automatically. Only security-related dependency updates are submitted via automated pull requests.

## Contributing

Read `CONTRIBUTING.md` for instructions on how to get involved!
