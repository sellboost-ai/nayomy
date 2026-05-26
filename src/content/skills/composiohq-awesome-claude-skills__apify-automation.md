---
name: "Apify Automation"
description_en: "Automate web scraping and data extraction with Apify -- run Actors, manage datasets, create reusable tasks, and retrieve crawl results through the Composio Apify integration."
description_tr: "Apify ile web scraping ve veri çıkarmayı otomatikleştirin -- Composio Apify entegrasyonu aracılığıyla Actor'ları çalıştırın, dataset'leri yönetin, yeniden kullanılabilir task'lar oluşturun ve crawl sonuçlarını alın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 61753
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/apify-automation/SKILL.md"
path: "composio-skills/apify-automation/SKILL.md"
is_collection: false
body_length: 6572
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Apify Otomasyonu

  **Apify** web scraping Actors'ını çalıştırın ve veri setlerini Claude Code'dan doğrudan yönetin. Crawlers'ı senkron veya asenkron olarak çalıştırın, yapılandırılmış veriler alın, yeniden kullanılabilir görevler oluşturun ve terminalinizi terk etmeden çalıştırma günlüklerini inceleyin.

  **Toolkit dokümantasyonu:** [composio.dev/toolkits/apify](https://composio.dev/toolkits/apify)

  ---

  ## Kurulum

  1. Composio MCP sunucusunu konfigürasyonunuza ekleyin:
     ```
     https://rube.app/mcp
     ```
  2. İstendiğinde Apify hesabınızı bağlayın. Agent, bir kimlik doğrulama bağlantısı sağlayacaktır.
  3. [apify.com/store](https://apify.com/store) adresinde mevcut Actors'ları inceleyin. Her Actor'ün kendine özgü bir input şeması vardır -- çalıştırmadan önce her zaman Actor'ün dokümantasyonunu kontrol edin.

  ---

  ## Temel İş Akışları

  ### 1. Bir Actor'ü Senkron Olarak Çalıştırın ve Sonuçları Alın

  Bir Actor'ü çalıştırın ve veri set öğelerini hemen tek bir çağrıda alın. Hızlı scraping işleri için idealdir.

  **Tool:** `APIFY_RUN_ACTOR_SYNC_GET_DATASET_ITEMS`

  Temel parametreler:
  - `actorId` (gerekli) -- `username/actor-name` formatında Actor ID (örn., `compass/crawler-google-places`)
  - `input` -- Actor'ün şemasıyla eşleşen JSON input nesnesi. Her Actor'ün benzersiz alan adları vardır -- tam şema için [apify.com/store](https://apify.com/store) adresini kontrol edin.
  - `limit` -- döndürülecek en fazla öğe
  - `offset` -- sayfalandırma için öğeleri atla
  - `format` -- `json` (varsayılan), `csv`, `jsonl`, `html`, `xlsx`, `xml`
  - `timeout` -- çalıştırma zaman aşımı (saniye cinsinden)
  - `waitForFinish` -- maksimum bekleme süresi (0-300 saniye)
  - `fields` -- dahil edilecek alanların virgülle ayrılmış listesi
  - `omit` -- hariç tutulacak alanların virgülle ayrılmış listesi

  Örnek istem: *"Google Places scraper'ını 'New York'taki restoranlar' için çalıştırın ve ilk 50 sonucu döndürün"*

  ---

  ### 2. Bir Actor'ü Asenkron Olarak Çalıştırın

  Tamamlanmasını beklemeden bir Actor çalıştırması tetikleyin. Uzun süren scraping işleri için kullanın.

  **Tool:** `APIFY_RUN_ACTOR`

  Temel parametreler:
  - `actorId` (gerekli) -- Actor slug veya ID
  - `body` -- Actor için JSON input nesnesi
  - `memory` -- MB cinsinden bellek sınırı (2'nin kuvveti olmalı, minimum 128)
  - `timeout` -- çalıştırma zaman aşımı (saniye cinsinden)
  - `maxItems` -- döndürülen öğelerin üst sınırı
  - `build` -- spesifik build etiketi (örn., `latest`, `beta`)

  Çalıştırmanın `datasetId` adresini kullanarak sonuçları almak için `APIFY_GET_DATASET_ITEMS` ile devam edin.

  Örnek istem: *"Web scraper Actor'ünü example.com için 1024MB bellek ile asenkron olarak başlatın"*

  ---

  ### 3. Veri Set Öğelerini Alın

  Sayfalandırma, alan seçimi ve filtreleme ile belirli bir veri setinden veri alın.

  **Tool:** `APIFY_GET_DATASET_ITEMS`

  Temel parametreler:
  - `datasetId` (gerekli) -- veri seti tanımlayıcısı
  - `limit` (varsayılan/maks 1000) -- sayfa başına öğe sayısı
  - `offset` (varsayılan 0) -- sayfalandırma ofseti
  - `format` -- `json` (önerilir), `csv`, `xlsx`
  - `fields` -- yalnızca spesifik alanları dahil et
  - `omit` -- spesifik alanları hariç tut
  - `clean` -- Apify'a özgü meta verileri kaldır
  - `desc` -- ters sıra (en yeni ilk)

  Örnek istem: *"myDatasetId veri setinden ilk 500 öğeyi JSON formatında al"*

  ---

  ### 4. Actor Detaylarını İnceleyin

  Çalıştırmadan önce Actor meta verilerini, input şemasını ve konfigürasyonunu görüntüleyin.

  **Tool:** `APIFY_GET_ACTOR`

  Temel parametreler:
  - `actorId` (gerekli) -- `username/actor-name` formatında veya hex ID olarak Actor ID

  Örnek istem: *"apify/web-scraper Actor'ünün detaylarını ve input şemasını göster"*

  ---

  ### 5. Yeniden Kullanılabilir Görevler Oluşturun

  Yinelenen scraping işleri için önceden ayarlanmış inputlarla yeniden kullanılabilir Actor görevleri yapılandırın.

  **Tool:** `APIFY_CREATE_TASK`

  Bir görevi bir kez yapılandırın, ardından tutarlı input parametreleriyle tekrar tekrar tetikleyin. Planlı veya yinelenen veri toplama iş akışları için kullanışlıdır.

  Örnek istem: *"Google Search scraper'ı için varsayılan sorgu 'AI startups' ve ABD konumu ile bir Apify görevi oluşturun"*

  ---

  ### 6. Çalıştırmaları ve Veri Setlerini Yönetin

  Actor çalıştırmalarını listeleyin, veri setlerine göz atın ve izleme ile hata ayıklama için çalıştırma detaylarını inceleyin.

  **Tools:** `APIFY_GET_LIST_OF_RUNS`, `APIFY_DATASETS_GET`, `APIFY_DATASET_GET`, `APIFY_GET_LOG`

  Çalıştırmaları listelemek için:
  - Actor'e göre ve isteğe bağlı olarak duruma göre filtrele
  - Veri alımı için çalıştırma detaylarından `datasetId` al

  Veri seti yönetimi için:
  - `APIFY_DATASETS_GET` -- tüm veri setlerinizi sayfalandırma ile listele
  - `APIFY_DATASET_GET` -- belirli bir veri seti için meta veri al

  Hata ayıklama için:
  - `APIFY_GET_LOG` -- bir çalıştırma veya build için yürütme günlüklerini al

  Örnek istem: *"Web scraper Actor'ü için son 10 çalıştırmayı listeleyin ve en son olanın günlüklerini gösterin"*

  ---

  ## Bilinen Sorunlar

  - **Actor input şemaları çok değişkendir:** Her Actor'ün kendine özgü input alanları vardır. `queries` veya `search_terms` gibi genel alan adları reddedilecektir. Tam alan adları için her zaman [apify.com/store](https://apify.com/store) adresinde Actor'ün sayfasını kontrol edin (örn., Google Maps için `searchStringsArray`, web scrapers için `startUrls`).
  - **URL format gereksinimleri:** URL'lerde her zaman tam protokolü (`https://` veya `http://`) dahil edin. Birçok Actor, URL'leri bir `url` özelliğine sahip nesneler olarak gerektirir: `{"startUrls": [{"url": "https://example.com"}]}`.
  - **Veri seti sayfalandırma sınırı:** `APIFY_GET_DATASET_ITEMS` çağrı başına maksimum `limit` 1000'e sahiptir. Büyük veri setleri için tüm öğeleri toplamak amacıyla `offset` ile döngü oluşturun.
  - **Enum değerleri küçük harftir:** Çoğu Actor, küçük harf enum değerleri bekler (örn., `relevance` değil `RELEVANCE`, `all` değil `ALL`).
  - **Senkron zaman aşımı 5 dakikada:** `APIFY_RUN_ACTOR_SYNC_GET_DATASET_ITEMS` maksimum `waitForFinish` 300 saniyedir. Daha uzun çalıştırmalar için `APIFY_RUN_ACTOR` (asenkron) kullanın ve `APIFY_GET_DATASET_ITEMS` ile yoklayın.
  - **Veri hacmi maliyetleri:** Büyük veri setleri almak pahalı olabilir. Zaman aşımları veya bellek baskısını önlemek için orta seviye sınırları ve kademeli işlemeyi tercih edin.
  - **JSON format önerilir:** CSV/XLSX formatları mevcut olsa da, JSON otomatik işleme için en güvenilir olandır. Aşağı akış otomasyonu için CSV/XLSX'ten kaçının.

  ---

  ## Hızlı Başvuru

  | Tool Slug | Açıklama |
  |---|---|
  | `APIFY_RUN_ACTOR_SYNC_GET_DATASET_ITEMS` | Actor'ü senkron olarak çalıştırın ve sonuçları hemen alın |
  | `APIFY_RUN_ACTOR` | Actor'ü asenkron olarak çalıştırın (tetikle ve dön) |
  | `APIFY_RUN_ACTOR_SYNC` | Actor'ü senkron olarak çalıştırın, output kaydını döndürün |
  | `APIFY_GET_ACTOR` | Actor meta verilerini ve input şemasını al |
  | `APIFY_GET_DATASET_ITEMS` | Veri setinden öğeleri al (sayfalandırmalı) |
  | `APIFY_DATASET_GET` | Veri seti meta verilerini al (öğe sayısı vb.) |
  | `APIFY_DATASETS_GET` | Tüm kullanıcı veri setlerini listele |
  | `APIFY_CREATE_TASK` | Yeniden kullanılabilir bir Actor görevi oluştur |
  | `APIFY_GET_TASK_INPUT` | Bir görevin depolanmış inputunu incele |
  | `APIFY_GET_LIST_OF_RUNS` | Bir Actor için çalıştırmaları listele |
  | `APIFY_GET_LOG` | Bir çalıştırma için yürütme günlüklerini al |

  ---

  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Apify Automation

Run **Apify** web scraping Actors and manage datasets directly from Claude Code. Execute crawlers synchronously or asynchronously, retrieve structured data, create reusable tasks, and inspect run logs without leaving your terminal.

**Toolkit docs:** [composio.dev/toolkits/apify](https://composio.dev/toolkits/apify)

---

## Setup

1. Add the Composio MCP server to your configuration:
   ```
   https://rube.app/mcp
   ```
2. Connect your Apify account when prompted. The agent will provide an authentication link.
3. Browse available Actors at [apify.com/store](https://apify.com/store). Each Actor has its own unique input schema -- always check the Actor's documentation before running.

---

## Core Workflows

### 1. Run an Actor Synchronously and Get Results

Execute an Actor and immediately retrieve its dataset items in a single call. Best for quick scraping jobs.

**Tool:** `APIFY_RUN_ACTOR_SYNC_GET_DATASET_ITEMS`

Key parameters:
- `actorId` (required) -- Actor ID in format `username/actor-name` (e.g., `compass/crawler-google-places`)
- `input` -- JSON input object matching the Actor's schema. Each Actor has unique field names -- check [apify.com/store](https://apify.com/store) for the exact schema.
- `limit` -- max items to return
- `offset` -- skip items for pagination
- `format` -- `json` (default), `csv`, `jsonl`, `html`, `xlsx`, `xml`
- `timeout` -- run timeout in seconds
- `waitForFinish` -- max wait time (0-300 seconds)
- `fields` -- comma-separated list of fields to include
- `omit` -- comma-separated list of fields to exclude

Example prompt: *"Run the Google Places scraper for 'restaurants in New York' and return the first 50 results"*

---

### 2. Run an Actor Asynchronously

Trigger an Actor run without waiting for completion. Use for long-running scraping jobs.

**Tool:** `APIFY_RUN_ACTOR`

Key parameters:
- `actorId` (required) -- Actor slug or ID
- `body` -- JSON input object for the Actor
- `memory` -- memory limit in MB (must be power of 2, minimum 128)
- `timeout` -- run timeout in seconds
- `maxItems` -- cap on returned items
- `build` -- specific build tag (e.g., `latest`, `beta`)

Follow up with `APIFY_GET_DATASET_ITEMS` to retrieve results using the run's `datasetId`.

Example prompt: *"Start the web scraper Actor for example.com asynchronously with 1024MB memory"*

---

### 3. Retrieve Dataset Items

Fetch data from a specific dataset with pagination, field selection, and filtering.

**Tool:** `APIFY_GET_DATASET_ITEMS`

Key parameters:
- `datasetId` (required) -- dataset identifier
- `limit` (default/max 1000) -- items per page
- `offset` (default 0) -- pagination offset
- `format` -- `json` (recommended), `csv`, `xlsx`
- `fields` -- include only specific fields
- `omit` -- exclude specific fields
- `clean` -- remove Apify-specific metadata
- `desc` -- reverse order (newest first)

Example prompt: *"Get the first 500 items from dataset myDatasetId in JSON format"*

---

### 4. Inspect Actor Details

View Actor metadata, input schema, and configuration before running it.

**Tool:** `APIFY_GET_ACTOR`

Key parameters:
- `actorId` (required) -- Actor ID in format `username/actor-name` or hex ID

Example prompt: *"Show me the details and input schema for the apify/web-scraper Actor"*

---

### 5. Create Reusable Tasks

Configure reusable Actor tasks with preset inputs for recurring scraping jobs.

**Tool:** `APIFY_CREATE_TASK`

Configure a task once, then trigger it repeatedly with consistent input parameters. Useful for scheduled or recurring data collection workflows.

Example prompt: *"Create an Apify task for the Google Search scraper with default query 'AI startups' and US location"*

---

### 6. Manage Runs and Datasets

List Actor runs, browse datasets, and inspect run details for monitoring and debugging.

**Tools:** `APIFY_GET_LIST_OF_RUNS`, `APIFY_DATASETS_GET`, `APIFY_DATASET_GET`, `APIFY_GET_LOG`

For listing runs:
- Filter by Actor and optionally by status
- Get `datasetId` from run details for data retrieval

For dataset management:
- `APIFY_DATASETS_GET` -- list all your datasets with pagination
- `APIFY_DATASET_GET` -- get metadata for a specific dataset

For debugging:
- `APIFY_GET_LOG` -- retrieve execution logs for a run or build

Example prompt: *"List the last 10 runs for the web scraper Actor and show logs for the most recent one"*

---

## Known Pitfalls

- **Actor input schemas vary wildly:** Every Actor has its own unique input fields. Generic field names like `queries` or `search_terms` will be rejected. Always check the Actor's page on [apify.com/store](https://apify.com/store) for exact field names (e.g., `searchStringsArray` for Google Maps, `startUrls` for web scrapers).
- **URL format requirements:** Always include the full protocol (`https://` or `http://`) in URLs. Many Actors require URLs as objects with a `url` property: `{"startUrls": [{"url": "https://example.com"}]}`.
- **Dataset pagination cap:** `APIFY_GET_DATASET_ITEMS` has a max `limit` of 1000 per call. For large datasets, loop with `offset` to collect all items.
- **Enum values are lowercase:** Most Actors expect lowercase enum values (e.g., `relevance` not `RELEVANCE`, `all` not `ALL`).
- **Sync timeout at 5 minutes:** `APIFY_RUN_ACTOR_SYNC_GET_DATASET_ITEMS` has a maximum `waitForFinish` of 300 seconds. For longer runs, use `APIFY_RUN_ACTOR` (async) and poll with `APIFY_GET_DATASET_ITEMS`.
- **Data volume costs:** Large datasets can be expensive to fetch. Prefer moderate limits and incremental processing to avoid timeouts or memory pressure.
- **JSON format recommended:** While CSV/XLSX formats are available, JSON is the most reliable for automated processing. Avoid CSV/XLSX for downstream automation.

---

## Quick Reference

| Tool Slug | Description |
|---|---|
| `APIFY_RUN_ACTOR_SYNC_GET_DATASET_ITEMS` | Run Actor synchronously and get results immediately |
| `APIFY_RUN_ACTOR` | Run Actor asynchronously (trigger and return) |
| `APIFY_RUN_ACTOR_SYNC` | Run Actor synchronously, return output record |
| `APIFY_GET_ACTOR` | Get Actor metadata and input schema |
| `APIFY_GET_DATASET_ITEMS` | Retrieve items from a dataset (paginated) |
| `APIFY_DATASET_GET` | Get dataset metadata (item count, etc.) |
| `APIFY_DATASETS_GET` | List all user datasets |
| `APIFY_CREATE_TASK` | Create a reusable Actor task |
| `APIFY_GET_TASK_INPUT` | Inspect a task's stored input |
| `APIFY_GET_LIST_OF_RUNS` | List runs for an Actor |
| `APIFY_GET_LOG` | Get execution logs for a run |

---

*Powered by [Composio](https://composio.dev)*
