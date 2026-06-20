---
name: "Coinbase Automation"
description_en: "Coinbase Automation: list and manage cryptocurrency wallets, accounts, and portfolio data via Coinbase CDP SDK"
description_tr: "Coinbase Automation: Coinbase CDP SDK aracılığıyla kripto para cüzdanlarını, hesaplarını ve portföy verilerini listeleyin ve yönetin."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 65266
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/coinbase-automation/SKILL.md"
path: "composio-skills/coinbase-automation/SKILL.md"
is_collection: false
body_length: 3151
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Coinbase Otomasyonu
  
  Coinbase işlemlerini otomatikleştirin; kripto para cüzdanlarını listeleme, cüzdan koleksiyonları arasında sayfalama ve portföy verilerini alma dahil.
  
  **Toolkit dokümantasyonu:** [composio.dev/toolkits/coinbase](https://composio.dev/toolkits/coinbase)
  
  ---
  
  ## Kurulum
  
  Bu skill, `https://rube.app/mcp` adresinde bağlı olan **Rube MCP sunucusu** gerektirir.
  
  Herhangi bir tool çalıştırmadan önce, `coinbase` toolkit için aktif bir bağlantının var olduğundan emin olun. Aktif bağlantı yoksa, `RUBE_MANAGE_CONNECTIONS` aracılığıyla bir bağlantı başlatın.
  
  ---
  
  ## Temel İş Akışları
  
  ### 1. Tüm Cüzdanları Listele
  
  Coinbase'den sayfalama desteğiyle tüm cüzdanları alın.
  
  **Tool:** `COINBASE_LIST_WALLETS`
  
  **Ana Parametreler:**
  - `limit` -- Sayfa başına sonuç (1--100, varsayılan: 25)
  - `order` -- Sıralama düzeni: `"asc"` (artan) veya `"desc"` (azalan, varsayılan)
  - `starting_after` -- İleri sayfalama için cursor: önceki sayfadaki son cüzdanın ID'si
  - `ending_before` -- Geri sayfalama için cursor: önceki sayfadaki ilk cüzdanın ID'si
  
  **Örnek (ilk sayfa):**
  ```
  Tool: COINBASE_LIST_WALLETS
  Arguments:
    limit: 50
    order: "desc"
  ```
  
  **Örnek (sonraki sayfa):**
  ```
  Tool: COINBASE_LIST_WALLETS
  Arguments:
    limit: 50
    order: "desc"
    starting_after: "wallet_abc123_last_id_from_prev_page"
  ```
  
  ---
  
  ### 2. Tüm Cüzdanlar Arasında Sayfalama
  
  Eksiksiz bir cüzdan envanterini almak için sayfalar arasında yineleme yapın.
  
  **Adımlar:**
  1. İstenilen `limit` ve `order` ile `COINBASE_LIST_WALLETS` çağırın
  2. Yanıt daha fazla sonuç içeriyorsa, döndürülen son cüzdanın ID'sini not alın
  3. `COINBASE_LIST_WALLETS` çağırın ve `starting_after` parametresini bu son cüzdan ID'sine ayarlayın
  4. Başka sonuç döndürülmeyene kadar tekrarlayın
  
  ---
  
  ### 3. Cüzdan Portföyünü Denetle
  
  Portföy analizi ve raporlama için cüzdan verilerini alın.
  
  **Adımlar:**
  1. Sayfa başına sonuçları maksimize etmek için `limit: 100` ile `COINBASE_LIST_WALLETS` çağırın
  2. Her sayfadaki cüzdan bakiyeleri ve metaverilerini toplayın
  3. Eksiksiz portföy görünümü için tüm sayfalar arasında verileri toplayın
  
  ---
  
  ### 4. Cüzdan Değişikliklerini İzle
  
  Yeni eklemeler veya değişiklikleri tespit etmek için periyodik olarak cüzdanları listeleyin.
  
  **Adımlar:**
  1. En yeni cüzdanları ilk olarak almak için `order: "desc"` ile `COINBASE_LIST_WALLETS` çağırın
  2. Yeni girişleri tanımlamak için daha önce depolanan cüzdan ID'leriyle karşılaştırın
  3. Sürekli izleme için periyodik denetimleri planlayın
  
  ---
  
  ## Bilinen Tuzaklar
  
  | Tuzak | Detay |
  |-------|-------|
  | **Sayfalama gerekli** | Cüzdan listeleri sayfalanmıştır. Cursor tabanlı sayfalamayı (`starting_after`/`ending_before`) kullanarak her zaman ek sayfaları kontrol edin. |
  | **Limit sınırları** | `limit` parametresi 1--100 aralığını kabul eder. Bu aralığın dışındaki değerler hatalara neden olur. Varsayılan 25'tir. |
  | **Cursor tabanlı sayfalama** | Sayfa numaraları yerine cüzdan ID'lerini cursor olarak kullanır. Sayfalar arasında gezinmek için her yanıttan son/ilk cüzdan ID'sini çıkarmalısınız. |
  | **CDP SDK kapsamı** | Bu tool, Coinbase CDP SDK'sını kullanır. Kullanılabilir işlemler, bağlantı kurulumu sırasında verilen API anahtarı izinlerine bağlıdır. |
  
  ---
  
  ## Hızlı Referans
  
  | Tool Slug | Açıklama |
  |-----------|----------|
  | `COINBASE_LIST_WALLETS` | Sayfalamaya sahip kripto para cüzdanlarını listele |
  
  ---
  
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Coinbase Automation

Automate Coinbase operations including listing cryptocurrency wallets, paginating through wallet collections, and retrieving portfolio data.

**Toolkit docs:** [composio.dev/toolkits/coinbase](https://composio.dev/toolkits/coinbase)

---

## Setup

This skill requires the **Rube MCP server** connected at `https://rube.app/mcp`.

Before executing any tools, ensure an active connection exists for the `coinbase` toolkit. If no connection is active, initiate one via `RUBE_MANAGE_CONNECTIONS`.

---

## Core Workflows

### 1. List All Wallets

Retrieve all wallets from Coinbase with pagination support.

**Tool:** `COINBASE_LIST_WALLETS`

**Key Parameters:**
- `limit` -- Results per page (1--100, default: 25)
- `order` -- Sort order: `"asc"` (ascending) or `"desc"` (descending, default)
- `starting_after` -- Cursor for forward pagination: ID of the last wallet from the previous page
- `ending_before` -- Cursor for backward pagination: ID of the first wallet from the previous page

**Example (first page):**
```
Tool: COINBASE_LIST_WALLETS
Arguments:
  limit: 50
  order: "desc"
```

**Example (next page):**
```
Tool: COINBASE_LIST_WALLETS
Arguments:
  limit: 50
  order: "desc"
  starting_after: "wallet_abc123_last_id_from_prev_page"
```

---

### 2. Paginate Through All Wallets

To retrieve a complete wallet inventory, iterate through pages.

**Steps:**
1. Call `COINBASE_LIST_WALLETS` with desired `limit` and `order`
2. If the response contains more results, note the ID of the last wallet returned
3. Call `COINBASE_LIST_WALLETS` again with `starting_after` set to that last wallet ID
4. Repeat until no more results are returned

---

### 3. Audit Wallet Portfolio

Retrieve wallet data for portfolio analysis and reporting.

**Steps:**
1. Call `COINBASE_LIST_WALLETS` with `limit: 100` to maximize per-page results
2. Collect wallet balances and metadata from each page
3. Aggregate data across all pages for a complete portfolio view

---

### 4. Monitor Wallet Changes

Periodically list wallets to detect new additions or changes.

**Steps:**
1. Call `COINBASE_LIST_WALLETS` with `order: "desc"` to get newest wallets first
2. Compare against previously stored wallet IDs to identify new entries
3. Schedule periodic checks for continuous monitoring

---

## Known Pitfalls

| Pitfall | Detail |
|---------|--------|
| **Pagination required** | Wallet lists are paginated. Always check for additional pages using cursor-based pagination (`starting_after`/`ending_before`). |
| **Limit bounds** | The `limit` parameter accepts 1--100. Values outside this range cause errors. Default is 25. |
| **Cursor-based pagination** | Uses wallet IDs as cursors, not page numbers. You must extract the last/first wallet ID from each response to navigate pages. |
| **CDP SDK scope** | This tool uses the Coinbase CDP SDK. Available operations depend on the API key permissions granted during connection setup. |

---

## Quick Reference

| Tool Slug | Description |
|-----------|-------------|
| `COINBASE_LIST_WALLETS` | List cryptocurrency wallets with pagination |

---

*Powered by [Composio](https://composio.dev)*
