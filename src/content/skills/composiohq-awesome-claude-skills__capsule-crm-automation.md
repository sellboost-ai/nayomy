---
name: "Capsule CRM Automation"
description_en: "Automate Capsule CRM operations -- manage contacts (parties), run structured filter queries, track tasks and projects, log entries, and handle organizations -- using natural language through the Composio MCP integration."
description_tr: "Composio MCP entegrasyonu sayesinde doğal dil kullanarak Capsule CRM işlemlerini otomatikleştirin -- kişileri yönetin, yapılandırılmış filter sorgularını çalıştırın, görev ve projeleri takip edin, girişleri kaydedin ve organizasyonları yönetin."
category: "Design"
repo: "ComposioHQ/awesome-claude-skills"
stars: 64934
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/capsule-crm-automation/SKILL.md"
path: "composio-skills/capsule-crm-automation/SKILL.md"
is_collection: false
body_length: 7334
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Capsule CRM Automation
  
  Capsule CRM'inizi yönetin -- kişiler oluşturun ve güncelleyin, taraflar/fırsatlar/vakalar üzerinde güçlü filtre sorguları çalıştırın, görevleri ve projeleri takip edin, etkinlik girişlerine göz atın ve ekip ilişkilerini organize edin -- tümü doğal dil komutları aracılığıyla.
  
  **Toolkit dokümanları:** [composio.dev/toolkits/capsule_crm](https://composio.dev/toolkits/capsule_crm)
  
  ---
  
  ## Kurulum
  
  1. Composio MCP sunucusunu istemci yapılandırmanıza ekleyin:
     ```
     https://rube.app/mcp
     ```
  2. İstendiğinde Capsule CRM hesabınızı bağlayın (OAuth kimlik doğrulaması).
  3. CRM'inizi yönetmek için doğal dil komutları vermeye başlayın.
  
  ---
  
  ## Temel İş Akışları
  
  ### 1. Yapılandırılmış Filtre Sorguları Çalıştırın
  Tarafları, fırsatları veya vakaları (projeleri) birden fazla filtre koşulu, operatör ve sıralama ile sorgulayın.
  
  **Tool:** `CAPSULE_CRM_RUN_FILTER_QUERY`
  
  **Örnek istem:**
  > "Capsule CRM'de California'daki 'VIP' etiketi taşıyan tüm kişileri ad sırasına göre bul"
  
  **Anahtar parametreler:**
  - `entity` (gerekli) -- Biri: `parties`, `opportunities`, `kases`
  - `filter` (gerekli) -- Filtre nesnesi:
    - `conditions` -- Her biri şunları içeren koşul dizisi:
      - `field` -- Alan adı (örn. "name", "email", "state", "country", "tag", "owner", "jobTitle", "addedOn")
      - `operator` -- Biri: "is", "is not", "starts with", "ends with", "contains", "is greater than", "is less than", "is after", "is before", "is older than", "is within last", "is within next"
      - `value` -- Karşılaştırmak için değer
    - `orderBy` -- `field` ve `direction` ("ascending"/"descending") içeren sıralama nesneleri dizisi
  - `embed` -- Yanıta dahil edilecek ek veriler
  - `page` / `perPage` -- Sayfalandırma (sayfa başına max 100)
  
  **Önemli alan notları:**
  - Adres alanları (`city`, `state`, `country`, `zip`) en üst seviyede, "address" altında İÇ içe DEĞİL
  - Ülke ISO 3166-1 alpha-2 kodu olmalıdır (örn. "US", "GB", "CA")
  - Özel alanlar `custom:{fieldId}` formatını kullanır
  - Organizasyon alanları `org.` önekini kullanır (örn. `org.name`, `org.tag`)
  
  ---
  
  ### 2. Kişileri Listeleyin ve Yönetin (Taraflar)
  Değişiklik tarihine ve ilişkili veriye göre isteğe bağlı filtreleme ile tüm kişileri alın.
  
  **Tool:** `CAPSULE_CRM_LIST_PARTIES`
  
  **Örnek istem:**
  > "Ocak 2025'ten beri değiştirilmiş tüm Capsule CRM kişilerini etiketleri ve organizasyonları ile listele"
  
  **Anahtar parametreler:**
  - `since` -- Bu tarihten sonra değiştirilmiş kişileri filtrelemek için ISO8601 tarihi
  - `embed` -- Ek veriler: "tags", "fields", "organisation", "missingImportantFields"
  - `page` / `perPage` -- Sayfalandırma (sayfa başına max 100, varsayılan 50)
  
  ---
  
  ### 3. Yeni Kişi Oluşturun
  Emails, telefonlar, adresler, etiketler ve özel alanlar dahil tüm detaylarla Capsule CRM'inize kişi veya organizasyon ekleyin.
  
  **Tool:** `CAPSULE_CRM_CREATE_PARTY`
  
  **Örnek istem:**
  > "Capsule CRM'ye yeni kişi oluştur: John Smith, Acme Corp'ta Satış Müdürü, john@acme.com"
  
  **Anahtar parametreler:**
  - `type` (gerekli) -- "person" veya "organisation"
  - Kişiler için: `firstName`, `lastName`, `jobTitle`, `title`
  - Organizasyonlar için: `name`
  - `emailAddresses` -- `{address, type}` nesneleri dizisi
  - `phoneNumbers` -- `{number, type}` nesneleri dizisi
  - `addresses` -- `street`, `city`, `state`, `country`, `zip`, `type` (Home/Postal/Office/Billing/Shipping) içeren adres nesneleri dizisi
  - `organisation` -- Org'a `{id}` veya `{name}` ile bağlantı (bulunamazsa oluştur)
  - `tags` -- `{name}` veya `{id}` ile etiketler dizisi
  - `fields` -- `{definition, value}` ile özel alan değerleri
  - `websites` -- `{address, service, type}` nesneleri dizisi
  - `owner` -- Sahip kullanıcı `{id}` atayın
  
  ---
  
  ### 4. Mevcut Kişileri Güncelleyin
  Emails, telefonlar, etiketler ve özel alanlar ekleme/kaldırma dahil olmak üzere bir taraf kaydının herhangi bir yönünü değiştirin.
  
  **Tool:** `CAPSULE_CRM_UPDATE_PARTY`
  
  **Örnek istem:**
  > "Capsule CRM tarafı 11587'yi güncelleyin: iş e-postası john.new@acme.com ekleyin ve 'prospect' etiketini kaldırın"
  
  **Anahtar parametreler:**
  - `partyId` (gerekli) -- Güncellenecek tarafın tamsayı ID'si
  - `party` (gerekli) -- Güncellenecek alanları içeren nesne. Destekler:
    - Tüm oluşturma alanları (name, emails, phones, addresses, vb.)
    - Alt öğeleri kaldırmak için `_delete: true` (öğenin `id`'si gerekli)
    - Etiketler: `{name}` ile ekle veya `{id, _delete: true}` ile kaldır
  
  ---
  
  ### 5. Görevleri Takip Edin
  Duruma ve ilişkili veriye göre filtreleme ile görevleri listeleyin.
  
  **Tool:** `CAPSULE_CRM_LIST_TASKS`
  
  **Örnek istem:**
  > "Capsule CRM'de tüm açık görevleri ilişkili taraflar ve sahipleri ile göster"
  
  **Anahtar parametreler:**
  - `status` -- Duruma göre filtrele: "open", "completed", "pending" (dizi)
  - `embed` -- Ek veriler: "party", "opportunity", "kase", "owner", "nextTask"
  - `page` / `perPage` -- Sayfalandırma (sayfa başına max 100, varsayılan 50)
  
  ---
  
  ### 6. Projeleri ve Etkinlik Girişlerini Tarayın
  Notları, e-postaları ve tamamlanan görevleri içeren projeleri (vakaları) ve son etkinlik girişlerini listeleyin.
  
  **Tools:** `CAPSULE_CRM_LIST_PROJECTS`, `CAPSULE_CRM_LIST_ENTRIES_BY_DATE`
  
  **Örnek istem:**
  > "Capsule CRM'de tüm açık projeleri göster" / "Taraf detayları ile son etkinlik girişlerini göster"
  
  **Projeler için anahtar parametreler:**
  - `status` -- "OPEN" veya "CLOSED" ile filtrele
  - `search` -- Proje adları/açıklamaları için arama terimi
  - `since` -- Bu tarihten sonra değişiklikler için ISO8601 tarihi
  - `embed` -- "tags,fields,party,opportunity,missingImportantFields"
  
  **Girişler için anahtar parametreler:**
  - `embed` -- "party", "kase", "opportunity", "creator", "activityType"
  - `page` / `perPage` -- Sayfalandırma (sayfa başına max 100)
  
  ---
  
  ## Bilinen Sorunlar
  
  - **Adres alanları en üst seviyededir**: Filtrelerken `state`, `city`, `country`, `zip` doğrudan kullanın -- `address.state` veya iç içe sözdizimi DEĞİL.
  - **Ülke kodları ISO alpha-2**: "US", "GB", "CA" ile filtrele -- "United States" veya "United Kingdom" DEĞİL.
  - **Özel alanlar özel sözdizimi kullanır**: Filtre koşullarında özel alanları `custom:{fieldId}` olarak referans yapın. Org düzeyinde özel alanlar için `org.custom:{fieldId}` kullanın.
  - **Projeler API'de "kases" olarak adlandırılır**: UI'de "projects" olmasına rağmen, API entity türü `kases`'dir. Filtre sorgularında `kases` kullanın.
  - **Silme işlemleri öğe ID'leri gerektirir**: Bir tarafı alt öğeleri (emails, phones, tags) kaldırmak için güncellerken, öğenin `id`'sini `_delete: true` ile birlikte dahil etmelisiniz. Alt öğe ID'lerini almak için önce tarafı listeleyin.
  - **Sayfalandırma varsayılan olarak 50'dir**: Tüm list endpoint'leri sayfa başına 50 öğe ile varsayılan olarak max 100'dür. Tam veri alımı için her zaman sayfalandırma uygulayın.
  - **Embed değerleri entity'ye göre değişir**: Tüm embed seçenekleri tüm entity'ler için çalışmaz. Endpoint başına desteklenen embed değerleri için dokümantasyonu kontrol edin.
  
  ---
  
  ## Hızlı Referans
  
  | İşlem | Tool Slug | Gerekli Parametreler |
  |---|---|---|
  | Filtre sorgusu çalıştır | `CAPSULE_CRM_RUN_FILTER_QUERY` | `entity`, `filter` |
  | Kişileri listele | `CAPSULE_CRM_LIST_PARTIES` | Hiçbiri (isteğe bağlı filtreler) |
  | Kişi oluştur | `CAPSULE_CRM_CREATE_PARTY` | `type` |
  | Kişiyi güncelle | `CAPSULE_CRM_UPDATE_PARTY` | `partyId`, `party` |
  | Kişiyi sil | `CAPSULE_CRM_DELETE_PARTY` | `party_id` |
  | Görevleri listele | `CAPSULE_CRM_LIST_TASKS` | Hiçbiri (isteğe bağlı filtreler) |
  | Projeleri listele | `CAPSULE_CRM_LIST_PROJECTS` | Hiçbiri (isteğe bağlı filtreler) |
  | Etkinlik girişlerini listele | `CAPSULE_CRM_LIST_ENTRIES_BY_DATE` | Hiçbiri (isteğe bağlı filtreler) |
  | Org çalışanlarını listele | `CAPSULE_CRM_LIST_ORG_EMPLOYEES` | Organizasyon ID |
  | Silinmiş fırsatları listele | `CAPSULE_CRM_LIST_DELETED_OPPORTUNITIES` | `since` |
  
  ---
  
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Capsule CRM Automation

Manage your Capsule CRM -- create and update contacts, run powerful filter queries on parties/opportunities/cases, track tasks and projects, browse activity entries, and organize team relationships -- all through natural language commands.

**Toolkit docs:** [composio.dev/toolkits/capsule_crm](https://composio.dev/toolkits/capsule_crm)

---

## Setup

1. Add the Composio MCP server to your client configuration:
   ```
   https://rube.app/mcp
   ```
2. Connect your Capsule CRM account when prompted (OAuth authentication).
3. Start issuing natural language commands to manage your CRM.

---

## Core Workflows

### 1. Run Structured Filter Queries
Query parties, opportunities, or cases (projects) with multiple filter conditions, operators, and sorting.

**Tool:** `CAPSULE_CRM_RUN_FILTER_QUERY`

**Example prompt:**
> "Find all Capsule CRM contacts in California tagged as 'VIP' sorted by name"

**Key parameters:**
- `entity` (required) -- One of: `parties`, `opportunities`, `kases`
- `filter` (required) -- Filter object with:
  - `conditions` -- Array of conditions, each with:
    - `field` -- Field name (e.g., "name", "email", "state", "country", "tag", "owner", "jobTitle", "addedOn")
    - `operator` -- One of: "is", "is not", "starts with", "ends with", "contains", "is greater than", "is less than", "is after", "is before", "is older than", "is within last", "is within next"
    - `value` -- Value to compare against
  - `orderBy` -- Array of sort objects with `field` and `direction` ("ascending"/"descending")
- `embed` -- Additional data to include in response
- `page` / `perPage` -- Pagination (max 100 per page)

**Important field notes:**
- Address fields (`city`, `state`, `country`, `zip`) are top-level, NOT nested under "address"
- Country must be an ISO 3166-1 alpha-2 code (e.g., "US", "GB", "CA")
- Custom fields use `custom:{fieldId}` format
- Organization fields use `org.` prefix (e.g., `org.name`, `org.tag`)

---

### 2. List and Manage Contacts (Parties)
Retrieve all contacts with optional filtering by modification date and embedded related data.

**Tool:** `CAPSULE_CRM_LIST_PARTIES`

**Example prompt:**
> "List all Capsule CRM contacts modified since January 2025 with their tags and organizations"

**Key parameters:**
- `since` -- ISO8601 date to filter contacts changed after this date
- `embed` -- Additional data: "tags", "fields", "organisation", "missingImportantFields"
- `page` / `perPage` -- Pagination (max 100 per page, default 50)

---

### 3. Create New Contacts
Add people or organizations to your Capsule CRM with full details including emails, phones, addresses, tags, and custom fields.

**Tool:** `CAPSULE_CRM_CREATE_PARTY`

**Example prompt:**
> "Create a new person in Capsule CRM: John Smith, VP of Sales at Acme Corp, john@acme.com"

**Key parameters:**
- `type` (required) -- "person" or "organisation"
- For persons: `firstName`, `lastName`, `jobTitle`, `title`
- For organisations: `name`
- `emailAddresses` -- Array of `{address, type}` objects
- `phoneNumbers` -- Array of `{number, type}` objects
- `addresses` -- Array of address objects with `street`, `city`, `state`, `country`, `zip`, `type` (Home/Postal/Office/Billing/Shipping)
- `organisation` -- Link to org by `{id}` or `{name}` (creates if not found)
- `tags` -- Array of tags by `{name}` or `{id}`
- `fields` -- Custom field values with `{definition, value}`
- `websites` -- Array of `{address, service, type}` objects
- `owner` -- Assign owner user `{id}`

---

### 4. Update Existing Contacts
Modify any aspect of a party record including adding/removing emails, phones, tags, and custom fields.

**Tool:** `CAPSULE_CRM_UPDATE_PARTY`

**Example prompt:**
> "Update Capsule CRM party 11587: add a work email john.new@acme.com and remove tag 'prospect'"

**Key parameters:**
- `partyId` (required) -- Integer ID of the party to update
- `party` (required) -- Object with fields to update. Supports:
  - All creation fields (name, emails, phones, addresses, etc.)
  - `_delete: true` on sub-items to remove them (requires the item's `id`)
  - Tags: add by `{name}` or remove with `{id, _delete: true}`

---

### 5. Track Tasks
List tasks with filtering by status and embedded related data.

**Tool:** `CAPSULE_CRM_LIST_TASKS`

**Example prompt:**
> "Show all open tasks in Capsule CRM with their linked parties and owners"

**Key parameters:**
- `status` -- Filter by status: "open", "completed", "pending" (array)
- `embed` -- Additional data: "party", "opportunity", "kase", "owner", "nextTask"
- `page` / `perPage` -- Pagination (max 100 per page, default 50)

---

### 6. Browse Projects and Activity Entries
List projects (cases) and recent activity entries including notes, emails, and completed tasks.

**Tools:** `CAPSULE_CRM_LIST_PROJECTS`, `CAPSULE_CRM_LIST_ENTRIES_BY_DATE`

**Example prompt:**
> "Show all open projects in Capsule CRM" / "Show recent activity entries with party details"

**Key parameters for projects:**
- `status` -- Filter by "OPEN" or "CLOSED"
- `search` -- Search term for project names/descriptions
- `since` -- ISO8601 date for modifications after this date
- `embed` -- "tags,fields,party,opportunity,missingImportantFields"

**Key parameters for entries:**
- `embed` -- "party", "kase", "opportunity", "creator", "activityType"
- `page` / `perPage` -- Pagination (max 100 per page)

---

## Known Pitfalls

- **Address fields are top-level**: When filtering, use `state`, `city`, `country`, `zip` directly -- NOT `address.state` or nested syntax.
- **Country codes are ISO alpha-2**: Filter by "US", "GB", "CA" -- not "United States" or "United Kingdom".
- **Custom fields use special syntax**: Reference custom fields as `custom:{fieldId}` in filter conditions. For org-level custom fields, use `org.custom:{fieldId}`.
- **Projects are called "kases" in the API**: Despite being "projects" in the UI, the API entity type is `kases`. Use `kases` in filter queries.
- **Delete operations require item IDs**: When updating a party to remove sub-items (emails, phones, tags), you must include the item's `id` along with `_delete: true`. List the party first to get sub-item IDs.
- **Pagination defaults to 50**: All list endpoints default to 50 items per page with a max of 100. Always implement pagination for complete data retrieval.
- **Embed values vary by entity**: Not all embed options work for all entities. Check the documentation for supported embed values per endpoint.

---

## Quick Reference

| Action | Tool Slug | Required Params |
|---|---|---|
| Run filter query | `CAPSULE_CRM_RUN_FILTER_QUERY` | `entity`, `filter` |
| List contacts | `CAPSULE_CRM_LIST_PARTIES` | None (optional filters) |
| Create contact | `CAPSULE_CRM_CREATE_PARTY` | `type` |
| Update contact | `CAPSULE_CRM_UPDATE_PARTY` | `partyId`, `party` |
| Delete contact | `CAPSULE_CRM_DELETE_PARTY` | `party_id` |
| List tasks | `CAPSULE_CRM_LIST_TASKS` | None (optional filters) |
| List projects | `CAPSULE_CRM_LIST_PROJECTS` | None (optional filters) |
| List activity entries | `CAPSULE_CRM_LIST_ENTRIES_BY_DATE` | None (optional filters) |
| List org employees | `CAPSULE_CRM_LIST_ORG_EMPLOYEES` | Organisation ID |
| List deleted opportunities | `CAPSULE_CRM_LIST_DELETED_OPPORTUNITIES` | `since` |

---

*Powered by [Composio](https://composio.dev)*
