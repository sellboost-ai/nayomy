---
name: "Ahrefs Automation"
description_en: "Automate SEO research with Ahrefs -- analyze backlink profiles, research keywords, track domain metrics history, audit organic rankings, and perform batch URL analysis through the Composio Ahrefs integration."
description_tr: "Composio Ahrefs entegrasyonu ile SEO araştırmalarını otomatikleştirin -- backlink profillerini analiz edin, keyword araştırması yapın, domain metriklerinin geçmişini takip edin, organik sıralamalar için audit gerçekleştirin ve toplu URL analizi yapın."
category: "Document"
repo: "ComposioHQ/awesome-claude-skills"
stars: 61753
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/ahrefs-automation/SKILL.md"
path: "composio-skills/ahrefs-automation/SKILL.md"
is_collection: false
body_length: 7573
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Ahrefs Otomasyonu

  Claude Code'dan doğrudan **Ahrefs** SEO analitiklerini çalıştırın. Backlink profillerini analiz edin, anahtar kelimeleri araştırın, domain authority'yi zaman içinde izleyin, organik anahtar kelime sıralamalarını denetleyin ve terminalinizi terk etmeden birden fazla URL'yi toplu olarak analiz edin.

  **Toolkit dokümantasyonu:** [composio.dev/toolkits/ahrefs](https://composio.dev/toolkits/ahrefs)

  ---

  ## Kurulum

  1. Composio MCP sunucusunu konfigürasyonunuza ekleyin:
     ```
     https://rube.app/mcp
     ```
  2. İstendiğinde Ahrefs hesabınızı bağlayın. Agent bir authentication linki sağlayacaktır.
  3. Çoğu tool bir `target` (domain veya URL) ve bir `country` kodu (ISO 3166-1 alpha-2) gerektirir. Bazıları ayrıca `YYYY-MM-DD` formatında bir `date` gerektirir.

  ---

  ## Temel İş Akışları

  ### 1. Site Explorer Metrikleri

  Backlink sayıları, yönlendiren domain'ler, organik anahtar kelime sıralamaları ve trafik tahminleri dahil olmak üzere bir domain için kapsamlı SEO metrikleri alın.

  **Tool:** `AHREFS_RETRIEVE_SITE_EXPLORER_METRICS`

  Ana parametreler:
  - `target` (gerekli) -- analiz edilecek domain veya URL
  - `date` (gerekli) -- metrik tarihi `YYYY-MM-DD` formatında
  - `country` -- ISO ülke kodu (örn. `us`, `gb`, `de`)
  - `mode` -- kapsam: `exact`, `prefix`, `domain` veya `subdomains` (varsayılan)
  - `protocol` -- `both`, `http` veya `https`
  - `volume_mode` -- `monthly` veya `average`

  Örnek prompt: *"example.com için Ahrefs site metriklerini bugünün tarihi itibariyle US'de al"*

  ---

  ### 2. Tarihsel Metrikleri İzleme

  Trend analizi ve rekabetçi kıyaslama için bir domain'in SEO metriklerinin zaman içinde nasıl değiştiğini izleyin.

  **Tools:** `AHREFS_RETRIEVE_SITE_EXPLORER_METRICS_HISTORY`, `AHREFS_DOMAIN_RATING_HISTORY`

  Tam metrik geçmişi için:
  - `target` (gerekli) -- izlenecek domain
  - `date_from` (gerekli) -- başlangıç tarihi `YYYY-MM-DD` formatında
  - `date_to` -- bitiş tarihi
  - `history_grouping` -- `daily`, `weekly` veya `monthly` (varsayılan)
  - `select` -- `date,org_cost,org_traffic,paid_cost,paid_traffic` gibi sütunlar

  Domain Rating (DR) geçmişi için:
  - `target` (gerekli), `date_from` (gerekli), `date_to`, `history_grouping`

  Örnek prompt: *"example.com için son bir yıl boyunca aylık Domain Rating geçmişini göster"*

  ---

  ### 3. Backlink Analizi

  Kaynak URL'ler, anchor metni, link nitelikleri ve yönlendiren domain metrikleri dahil olmak üzere kapsamlı bir backlink listesi alın.

  **Tool:** `AHREFS_FETCH_ALL_BACKLINKS`

  Ana parametreler:
  - `target` (gerekli) -- domain veya URL
  - `select` (gerekli) -- virgülle ayrılmış sütunlar (örn. `url_from,url_to,anchor,domain_rating_source,first_seen_link`)
  - `limit` (varsayılan 1000) -- sonuç sayısı
  - `aggregation` -- `similar_links` (varsayılan), `1_per_domain` veya `all`
  - `mode` -- `exact`, `prefix`, `domain` veya `subdomains`
  - `history` -- `live`, `since:YYYY-MM-DD` veya `all_time`
  - `where` -- `is_dofollow`, `domain_rating_source`, `anchor` gibi sütunlarda zengin filtre ifadeleri

  Örnek prompt: *"example.com'a en iyi 100 dofollow backlink'i anchor metni ve yönlendiren DR ile al"*

  ---

  ### 4. Anahtar Kelime Araştırması

  Anahtar kelime genel bakış metriklerini alın ve içerik stratejisi için eşleşen anahtar kelime varyasyonlarını keşfedin.

  **Tools:** `AHREFS_EXPLORE_KEYWORDS_OVERVIEW`, `AHREFS_EXPLORE_MATCHING_TERMS_FOR_KEYWORDS`

  Anahtar kelime genel bakışı için:
  - `select` (gerekli) -- döndürülecek sütunlar (hacim, zorluk, CPC, vb.)
  - `country` (gerekli) -- ISO ülke kodu
  - `keywords` -- virgülle ayrılmış anahtar kelime listesi
  - `where` -- hacim, zorluk, intent vb. ile filtrele

  Eşleşen terimler için:
  - `select` (gerekli) ve `country` (gerekli)
  - `keywords` -- virgülle ayrılmış başlangıç anahtar kelimeleri
  - `match_mode` -- `terms` (herhangi bir sırada) veya `phrase` (tam sırada)
  - `terms` -- `all` veya `questions` (yalnızca soru formatı anahtar kelimeler)

  Örnek prompt: *"'project management' için anahtar kelime varyasyonlarını hacim ve zorluk ile US'de bul"*

  ---

  ### 5. Organik Anahtar Kelimeler Denetimi

  Bir domain'in organik aramada sıralandığı anahtar kelimeleri konum izleme ve tarihsel karşılaştırma ile görün.

  **Tool:** `AHREFS_RETRIEVE_ORGANIC_KEYWORDS`

  Ana parametreler:
  - `target` (gerekli) -- domain veya URL
  - `country` (gerekli) -- ISO ülke kodu
  - `date` (gerekli) -- `YYYY-MM-DD` formatında tarih
  - `select` -- döndürülecek sütunlar (anahtar kelime, pozisyon, hacim, trafik, URL, vb.)
  - `date_compared` -- önceki bir tarihe karşı karşılaştır
  - `where` -- `keyword`, `volume`, `best_position`, intent bayrakları vb. üzerinde zengin filtre ifadeleri
  - `limit` (varsayılan 1000), `order_by`

  Örnek prompt: *"example.com'un US'de ilk 10'da sıralandığı tüm organik anahtar kelimeleri göster"*

  ---

  ### 6. Toplu URL Analizi

  Rakipler veya site bölümleri arasında SEO metriklerini karşılaştırmak için aynı anda 100'e kadar URL veya domain'i analiz edin.

  **Tool:** `AHREFS_BATCH_URL_ANALYSIS`

  Ana parametreler:
  - `targets` (gerekli) -- `url`, `mode` (`exact`/`prefix`/`domain`/`subdomains`) ve `protocol` (`both`/`http`/`https`) içeren nesne dizisi
  - `select` (gerekli) -- sütun tanımlayıcılarının dizisi
  - `country` -- ISO ülke kodu
  - `output` -- `json` veya `php`

  Örnek prompt: *"competitor1.com, competitor2.com ve competitor3.com için SEO metriklerini karşılaştır"*

  ---

  ## Bilinen Tuzaklar

  - **Sütun seçimi gereklidir:** Çoğu Ahrefs tool'u, döndürülecek sütunları belirten bir `select` parametresi gerektirir. Bunu atlamak veya geçersiz sütun adları kullanmak hatalara neden olur. Her tool'un geçerli tanımlayıcıları için response şemasına bakın.
  - **Tarih formatı tutarlılığı:** Tarihler `YYYY-MM-DD` formatında olmalıdır. Bazı tarihsel endpoint'ler verileri tam tarih yerine `history_grouping` ile ayarlanan ayrıntı düzeyinde döndürür.
  - **API birim maliyetleri değişir:** Farklı sütunlar farklı birim miktarları tüketir. Şemada "(5 units)" veya "(10 units)" ile işaretlenen sütunlar daha pahalıdır. `traffic`, `refdomains_source` veya `difficulty` gibi pahalı sütunlar talep ederken API kullanımını izleyin.
  - **Toplu limit 100 target'tır:** `AHREFS_BATCH_URL_ANALYSIS` istek başına 100'e kadar target kabul eder. Daha büyük analizler için birden fazla batch'e bölün.
  - **Filtre ifadeleri karmaşıktır:** `where` parametresi standart SQL değil, Ahrefs'in filtre ifadesi sözdizimini kullanır. Desteklenen filtre türleri ve değer formatları için her tool'un şemasındaki sütun açıklamalarına bakın.
  - **Kullanım dışı offset parametresi:** `offset` parametresi 31 Mayıs 2024'te kullanım dışı bırakıldı. Cursor tabanlı pagination kullanın veya `limit`'i ayarlayın.
  - **Mode kapsamı önemli ölçüde etkiler:** `mode`'u `subdomains` (varsayılan) olarak ayarlamak tüm subdomainleri içerir; bu, `domain` veya `exact` ile karşılaştırıldığında sonuç sayısını dramatik şekilde artırabilir.

  ---

  ## Hızlı Referans

  | Tool Slug | Açıklama |
  |---|---|
  | `AHREFS_RETRIEVE_SITE_EXPLORER_METRICS` | Bir domain/URL için geçerli SEO metrikleri |
  | `AHREFS_RETRIEVE_SITE_EXPLORER_METRICS_HISTORY` | Zaman içinde tarihsel SEO metrikleri |
  | `AHREFS_DOMAIN_RATING_HISTORY` | Domain Rating (DR) geçmişi |
  | `AHREFS_FETCH_ALL_BACKLINKS` | Filtreleme ile kapsamlı backlink listesi |
  | `AHREFS_FETCH_SITE_EXPLORER_REFERRING_DOMAINS` | Yönlendiren domain'lerin listesi |
  | `AHREFS_GET_SITE_EXPLORER_COUNTRY_METRICS` | Ülke düzeyinde trafik dökümü |
  | `AHREFS_BATCH_URL_ANALYSIS` | 100'e kadar URL'nin toplu analizi |
  | `AHREFS_EXPLORE_KEYWORDS_OVERVIEW` | Anahtar kelime metrikleri genel bakışı |
  | `AHREFS_EXPLORE_MATCHING_TERMS_FOR_KEYWORDS` | Eşleşen anahtar kelime varyasyonları |
  | `AHREFS_EXPLORE_KEYWORD_VOLUME_BY_COUNTRY` | Ülkeler arasında anahtar kelime hacmi |
  | `AHREFS_RETRIEVE_ORGANIC_KEYWORDS` | Bir domain için organik anahtar kelime sıralamaları |
  | `AHREFS_RETRIEVE_SITE_EXPLORER_KEYWORDS_HISTORY` | Tarihsel anahtar kelime sıralaması verileri |
  | `AHREFS_RETRIEVE_TOP_PAGES_FROM_SITE_EXPLORER` | SEO metriklerine göre en iyi performans gösteren sayfalar |
  | `AHREFS_GET_SERP_OVERVIEW` | Belirli anahtar kelimeler için SERP genel bakışı |

  ---

  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Ahrefs Automation

Run **Ahrefs** SEO analytics directly from Claude Code. Analyze backlink profiles, research keywords, track domain authority over time, audit organic keyword rankings, and batch-analyze multiple URLs without leaving your terminal.

**Toolkit docs:** [composio.dev/toolkits/ahrefs](https://composio.dev/toolkits/ahrefs)

---

## Setup

1. Add the Composio MCP server to your configuration:
   ```
   https://rube.app/mcp
   ```
2. Connect your Ahrefs account when prompted. The agent will provide an authentication link.
3. Most tools require a `target` (domain or URL) and a `country` code (ISO 3166-1 alpha-2). Some also require a `date` in `YYYY-MM-DD` format.

---

## Core Workflows

### 1. Site Explorer Metrics

Retrieve comprehensive SEO metrics for a domain including backlink counts, referring domains, organic keyword rankings, and traffic estimates.

**Tool:** `AHREFS_RETRIEVE_SITE_EXPLORER_METRICS`

Key parameters:
- `target` (required) -- domain or URL to analyze
- `date` (required) -- metrics date in `YYYY-MM-DD` format
- `country` -- ISO country code (e.g., `us`, `gb`, `de`)
- `mode` -- scope: `exact`, `prefix`, `domain`, or `subdomains` (default)
- `protocol` -- `both`, `http`, or `https`
- `volume_mode` -- `monthly` or `average`

Example prompt: *"Get Ahrefs site metrics for example.com as of today in the US"*

---

### 2. Historical Metrics Tracking

Track how a domain's SEO metrics have changed over time for trend analysis and competitive benchmarking.

**Tools:** `AHREFS_RETRIEVE_SITE_EXPLORER_METRICS_HISTORY`, `AHREFS_DOMAIN_RATING_HISTORY`

For full metrics history:
- `target` (required) -- domain to track
- `date_from` (required) -- start date in `YYYY-MM-DD`
- `date_to` -- end date
- `history_grouping` -- `daily`, `weekly`, or `monthly` (default)
- `select` -- columns like `date,org_cost,org_traffic,paid_cost,paid_traffic`

For Domain Rating (DR) history:
- `target` (required), `date_from` (required), `date_to`, `history_grouping`

Example prompt: *"Show me the monthly Domain Rating history for example.com over the last year"*

---

### 3. Backlink Analysis

Retrieve a comprehensive list of backlinks including source URLs, anchor text, link attributes, and referring domain metrics.

**Tool:** `AHREFS_FETCH_ALL_BACKLINKS`

Key parameters:
- `target` (required) -- domain or URL
- `select` (required) -- comma-separated columns (e.g., `url_from,url_to,anchor,domain_rating_source,first_seen_link`)
- `limit` (default 1000) -- number of results
- `aggregation` -- `similar_links` (default), `1_per_domain`, or `all`
- `mode` -- `exact`, `prefix`, `domain`, or `subdomains`
- `history` -- `live`, `since:YYYY-MM-DD`, or `all_time`
- `where` -- rich filter expressions on columns like `is_dofollow`, `domain_rating_source`, `anchor`

Example prompt: *"Get the top 100 dofollow backlinks to example.com with anchor text and referring DR"*

---

### 4. Keyword Research

Get keyword overview metrics and discover matching keyword variations for content strategy.

**Tools:** `AHREFS_EXPLORE_KEYWORDS_OVERVIEW`, `AHREFS_EXPLORE_MATCHING_TERMS_FOR_KEYWORDS`

For keyword overview:
- `select` (required) -- columns to return (volume, difficulty, CPC, etc.)
- `country` (required) -- ISO country code
- `keywords` -- comma-separated keyword list
- `where` -- filter by volume, difficulty, intent, etc.

For matching terms:
- `select` (required) and `country` (required)
- `keywords` -- comma-separated seed keywords
- `match_mode` -- `terms` (any order) or `phrase` (exact order)
- `terms` -- `all` or `questions` (question-format keywords only)

Example prompt: *"Find keyword variations for 'project management' in the US with volume and difficulty"*

---

### 5. Organic Keywords Audit

See which keywords a domain ranks for in organic search, with position tracking and historical comparison.

**Tool:** `AHREFS_RETRIEVE_ORGANIC_KEYWORDS`

Key parameters:
- `target` (required) -- domain or URL
- `country` (required) -- ISO country code
- `date` (required) -- date in `YYYY-MM-DD`
- `select` -- columns to return (keyword, position, volume, traffic, URL, etc.)
- `date_compared` -- compare against a previous date
- `where` -- rich filter expressions on `keyword`, `volume`, `best_position`, intent flags, etc.
- `limit` (default 1000), `order_by`

Example prompt: *"Show all organic keywords where example.com ranks in the top 10 in the US"*

---

### 6. Batch URL Analysis

Analyze up to 100 URLs or domains simultaneously to compare SEO metrics across competitors or site sections.

**Tool:** `AHREFS_BATCH_URL_ANALYSIS`

Key parameters:
- `targets` (required) -- array of objects with `url`, `mode` (`exact`/`prefix`/`domain`/`subdomains`), and `protocol` (`both`/`http`/`https`)
- `select` (required) -- array of column identifiers
- `country` -- ISO country code
- `output` -- `json` or `php`

Example prompt: *"Compare SEO metrics for competitor1.com, competitor2.com, and competitor3.com"*

---

## Known Pitfalls

- **Column selection is required:** Most Ahrefs tools require a `select` parameter specifying which columns to return. Omitting it or using invalid column names will cause errors. Refer to each tool's response schema for valid identifiers.
- **Date format consistency:** Dates must be in `YYYY-MM-DD` format. Some historical endpoints return data at the granularity set by `history_grouping`, not by exact date.
- **API unit costs vary:** Different columns consume different unit amounts. Columns marked with "(5 units)" or "(10 units)" in the schema are more expensive. Monitor API usage when requesting expensive columns like `traffic`, `refdomains_source`, or `difficulty`.
- **Batch limit is 100 targets:** `AHREFS_BATCH_URL_ANALYSIS` accepts up to 100 targets per request. For larger analyses, split into multiple batches.
- **Filter expressions are complex:** The `where` parameter uses Ahrefs' filter expression syntax, not standard SQL. Consult the column descriptions in each tool's schema for supported filter types and value formats.
- **Deprecated offset parameter:** The `offset` parameter was deprecated on May 31, 2024. Use cursor-based pagination or adjust `limit` instead.
- **Mode affects scope significantly:** Setting `mode` to `subdomains` (the default) includes all subdomains, which can dramatically increase result counts compared to `domain` or `exact`.

---

## Quick Reference

| Tool Slug | Description |
|---|---|
| `AHREFS_RETRIEVE_SITE_EXPLORER_METRICS` | Current SEO metrics for a domain/URL |
| `AHREFS_RETRIEVE_SITE_EXPLORER_METRICS_HISTORY` | Historical SEO metrics over time |
| `AHREFS_DOMAIN_RATING_HISTORY` | Domain Rating (DR) history |
| `AHREFS_FETCH_ALL_BACKLINKS` | Comprehensive backlink list with filtering |
| `AHREFS_FETCH_SITE_EXPLORER_REFERRING_DOMAINS` | List of referring domains |
| `AHREFS_GET_SITE_EXPLORER_COUNTRY_METRICS` | Country-level traffic breakdown |
| `AHREFS_BATCH_URL_ANALYSIS` | Batch analysis of up to 100 URLs |
| `AHREFS_EXPLORE_KEYWORDS_OVERVIEW` | Keyword metrics overview |
| `AHREFS_EXPLORE_MATCHING_TERMS_FOR_KEYWORDS` | Matching keyword variations |
| `AHREFS_EXPLORE_KEYWORD_VOLUME_BY_COUNTRY` | Keyword volume across countries |
| `AHREFS_RETRIEVE_ORGANIC_KEYWORDS` | Organic keyword rankings for a domain |
| `AHREFS_RETRIEVE_SITE_EXPLORER_KEYWORDS_HISTORY` | Historical keyword ranking data |
| `AHREFS_RETRIEVE_TOP_PAGES_FROM_SITE_EXPLORER` | Top performing pages by SEO metrics |
| `AHREFS_GET_SERP_OVERVIEW` | SERP overview for specific keywords |

---

*Powered by [Composio](https://composio.dev)*
