---
name: "Apollo Automation"
description_en: "Automate Apollo.io lead generation -- search organizations, discover contacts, enrich prospect data, manage contact stages, and build targeted outreach lists -- using natural language through the Composio MCP integration."
description_tr: "Apollo.io ile lead üretimini otomatikleştirin -- organizasyonları arayın, kişileri keşfedin, prospect verilerini zenginleştirin, kişi aşamalarını yönetin ve hedefli outreach listeleri oluşturun -- Composio MCP integrationı üzerinden doğal dili kullanarak."
category: "Design"
repo: "ComposioHQ/awesome-claude-skills"
stars: 65045
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/apollo-automation/SKILL.md"
path: "composio-skills/apollo-automation/SKILL.md"
is_collection: false
body_length: 6745
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Apollo Otomasyonu
  
  Apollo.io ile satış prospektinizi güçlendirin -- şirketleri arayın, karar alıcılarını keşfedin, kişi verilerini e-posta ve telefon numaralarıyla zenginleştirin ve satış hattı aşamalarını yönetin -- hepsi doğal dil komutlarıyla.
  
  **Toolkit belgeleri:** [composio.dev/toolkits/apollo](https://composio.dev/toolkits/apollo)
  
  ---
  
  ## Kurulum
  
  1. Composio MCP sunucusunu istemci yapılandırmanıza ekleyin:
     ```
     https://rube.app/mcp
     ```
  2. İstendiğinde Apollo.io hesabınızı bağlayın (API anahtar kimlik doğrulaması).
  3. Potansiyel müşteri arama ve lead zenginleştirmeye yönelik doğal dil komutları vermeye başlayın.
  
  ---
  
  ## Temel İş Akışları
  
  ### 1. Kuruluşları Arama
  Ad, konum, çalışan sayısı ve endüstri anahtar kelimeleri gibi filtreleri kullanarak hedef şirketleri bulun.
  
  **Tool:** `APOLLO_ORGANIZATION_SEARCH`
  
  **Örnek istem:**
  > "Apollo'da Teksas'ta 50-500 çalışanı olan SaaS şirketlerini bul"
  
  **Anahtar parametreler:**
  - `q_organization_name` -- Kısmi ad eşleşmesi (örn. "Apollo" matches "Apollo Inc.")
  - `organization_locations` -- Dahil edilecek merkez ofis konumları (örn. "texas", "tokyo")
  - `organization_not_locations` -- Hariç tutulacak merkez ofis konumları
  - `organization_num_employees_ranges` -- "min,max" formatında çalışan aralıkları (örn. "50,500")
  - `q_organization_keyword_tags` -- Endüstri anahtar kelimeleri (örn. "software", "healthcare")
  - `page` / `per_page` -- Sayfalandırma (sayfa başına max 100, max 500 sayfa)
  
  ---
  
  ### 2. Şirketlerdeki İnsanları Keşfedin
  Başlık, kıdem, konum ve şirket kriterlerine göre eşleşen insanları Apollo'nun kişi veritabanında arayın.
  
  **Tool:** `APOLLO_PEOPLE_SEARCH`
  
  **Örnek istem:**
  > "microsoft.com ve apollo.io'da Satış VP'lerini bul"
  
  **Anahtar parametreler:**
  - `person_titles` -- İş unvanları (örn. "VP of Sales", "CTO")
  - `person_seniorities` -- Kıdem seviyeleri (örn. "director", "vp", "senior")
  - `person_locations` -- İnsanların coğrafi konumları
  - `q_organization_domains` -- Şirket alan adları (örn. "apollo.io" -- "www." hariç tutun)
  - `organization_ids` -- Kuruluş Aramasından Apollo şirket kimlikleri
  - `contact_email_status` -- E-posta durumuna göre filtreleyin: "verified", "unverified", "likely to engage"
  - `page` / `per_page` -- Sayfalandırma (sayfa başına max 100)
  
  ---
  
  ### 3. Bireysel Kişileri Zenginleştirin
  Bir kişinin e-postası, LinkedIn URL'si veya adı + şirketi kullanarak kapsamlı veriler (e-posta, telefon, LinkedIn, şirket bilgisi) alın.
  
  **Tool:** `APOLLO_PEOPLE_ENRICHMENT`
  
  **Örnek istem:**
  > "Apollo.io'daki Tim Zheng'i Apollo'da zenginleştir"
  
  **Anahtar parametreler (en az bir tanımlayıcı gerekli):**
  - `email` -- Kişinin e-posta adresi
  - `linkedin_url` -- Tam LinkedIn profil URL'si
  - `first_name` + `last_name` + (`organization_name` veya `domain`) -- Ad tabanlı eşleştirme
  - `domain` -- Protokol olmayan basit ana bilgisayar adı (örn. "apollo.io", "https://apollo.io" değil)
  - `reveal_personal_emails` -- Kişisel e-postalar almak için true olarak ayarlayın (ekstra kredi kullanabilir)
  - `reveal_phone_number` -- Telefon numaraları için true olarak ayarlayın (webhook_url gerekli)
  
  ---
  
  ### 4. Toplu Olarak Potansiyel Müşterileri Zenginleştirin
  Verimli batch işleme için aynı anda 10'a kadar kişiyi zenginleştirin.
  
  **Tool:** `APOLLO_BULK_PEOPLE_ENRICHMENT`
  
  **Örnek istem:**
  > "Bu 5 lead'i Apollo verileriyle toplu olarak zenginleştir: [ad/e-posta listesi]"
  
  **Anahtar parametreler:**
  - `details` (gerekli) -- 1-10 kişi nesnesi dizisi, her biri `email`, `linkedin_url`, `first_name`, `last_name`, `domain`, `company_name` gibi tanımlayıcılarla
  - `reveal_personal_emails` -- Kişisel e-postalar dahil et (ekstra kredi)
  - `reveal_phone_number` -- Telefon numaraları dahil et (webhook_url gerekli)
  
  ---
  
  ### 5. Kişi Hattı Aşamalarını Yönetin
  Mevcut aşamaları listeleyin ve kişileri satış hattınızda ilerletin.
  
  **Tools:** `APOLLO_LIST_CONTACT_STAGES`, `APOLLO_UPDATE_CONTACT_STAGE`
  
  **Örnek istem:**
  > "X ve Y kişilerini Apollo'da 'Qualified' aşamasına taşı"
  
  **Aşamaları listeleme için anahtar parametreler:** Hiçbiri gerekli değildir.
  
  **Aşamayı güncelleme için anahtar parametreler:**
  - `contact_ids` (gerekli) -- Güncellenecek kişi kimlikleri dizisi
  - `contact_stage_id` (gerekli) -- Hedef aşama kimliği (Liste Kişi Aşamalarından)
  
  ---
  
  ### 6. Kaydedilmiş Kişileri Oluşturun ve Arayın
  Yeni kişi kayıtları oluşturun ve mevcut Apollo kişi veritabanınızda arayın.
  
  **Tools:** `APOLLO_CREATE_CONTACT`, `APOLLO_SEARCH_CONTACTS`
  
  **Örnek istem:**
  > "Apollo kişilerimde Stripe'daki herkesin arasında ara"
  
  **Arama için anahtar parametreler:**
  - Anahtar kelime arama, aşama kimliği filtrelemesi, sıralama seçenekleri
  - `page` / `per_page` -- Sayfalandırma
  
  **Oluşturma için anahtar parametreler:**
  - `first_name`, `last_name`, `email`, `organization_name`
  - `account_id` -- Bir kuruluşa bağlantı verin
  - `contact_stage_id` -- İlk satış aşaması
  
  ---
  
  ## Bilinen Tuzaklar
  
  - **Kuruluş alanları boş olabilir**: `APOLLO_ORGANIZATION_SEARCH` öğesinden bazı kuruluşlar eksik veya boş alan alanları döndürür. Alan adlarını doğrulamadan önce `APOLLO_ORGANIZATION_ENRICHMENT` kullanın.
  - **HTTP 403 yapılandırma sorunları anlamına gelir**: 403 yanıtı API anahtarı veya plan erişimi sorunlarını gösterir -- yeniden denemeyin. Önce kimlik bilgilerinizi veya planınızı düzeltin.
  - **İnsan araması obfüskat verileri döndürür**: `APOLLO_PEOPLE_SEARCH` tam iletişim bilgileri yerine `has_email`/`has_direct_phone` bayraklarını veya obfüskat alanları gösterebilir. Tam bilgi almak için `APOLLO_PEOPLE_ENRICHMENT` kullanın.
  - **Sayfalandırma sınırları katıdır**: İnsan araması `per_page` ile 100'e kadar ve max 500 sayfa destekler. Erkenden durduğunuzda sonuç setinin büyük bölümleri kaçırılabilir.
  - **Toplu zenginleştirme küçük batch sınırlarına sahiptir**: `APOLLO_BULK_PEOPLE_ENRICHMENT` çağrı başına yalnızca 10 öğe kabul eder. Tanımlayıcılar yetersiz olduğunda `status='success'` ile `missing_records > 0` döndürebilir -- bireysel kayıtları `APOLLO_PEOPLE_ENRICHMENT` ile yeniden deneyin.
  - **Otomatik deduplication yok**: `APOLLO_CREATE_CONTACT` çoğaltmaz. Önce `APOLLO_SEARCH_CONTACTS` ile mevcut kişileri kontrol edin.
  - **Alan adı formatı önemlidir**: Her zaman basit ana bilgisayar adları (örn. "apollo.io") kullanın, protokol önekleri ("https://") veya "www." önekeri olmadan.
  
  ---
  
  ## Hızlı Referans
  
  | İşlem | Tool Slug | Gerekli Parametreler |
  |---|---|---|
  | Kuruluşları ara | `APOLLO_ORGANIZATION_SEARCH` | Hiçbiri (isteğe bağlı filtreler) |
  | Kuruluşu zenginleştir | `APOLLO_ORGANIZATION_ENRICHMENT` | `domain` |
  | Kuruluşları toplu zenginleştir | `APOLLO_BULK_ORGANIZATION_ENRICHMENT` | `domains` |
  | İnsanları ara | `APOLLO_PEOPLE_SEARCH` | Hiçbiri (isteğe bağlı filtreler) |
  | İnsanı zenginleştir | `APOLLO_PEOPLE_ENRICHMENT` | Biri: `email`, `linkedin_url`, veya ad+şirket |
  | İnsanları toplu zenginleştir | `APOLLO_BULK_PEOPLE_ENRICHMENT` | `details` (1-10 kişi nesnesi) |
  | Kişi aşamalarını listele | `APOLLO_LIST_CONTACT_STAGES` | Hiçbiri |
  | Kişi aşamasını güncelle | `APOLLO_UPDATE_CONTACT_STAGE` | `contact_ids`, `contact_stage_id` |
  | Kişi oluştur | `APOLLO_CREATE_CONTACT` | Ad + tanımlayıcılar |
  | Kişileri ara | `APOLLO_SEARCH_CONTACTS` | Hiçbiri (isteğe bağlı filtreler) |
  
  ---
  
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Apollo Automation

Supercharge your sales prospecting with Apollo.io -- search companies, discover decision-makers, enrich contact data with emails and phone numbers, and manage your sales pipeline stages -- all through natural language commands.

**Toolkit docs:** [composio.dev/toolkits/apollo](https://composio.dev/toolkits/apollo)

---

## Setup

1. Add the Composio MCP server to your client configuration:
   ```
   https://rube.app/mcp
   ```
2. Connect your Apollo.io account when prompted (API key authentication).
3. Start issuing natural language commands to prospect and enrich leads.

---

## Core Workflows

### 1. Search Organizations
Find target companies using filters like name, location, employee count, and industry keywords.

**Tool:** `APOLLO_ORGANIZATION_SEARCH`

**Example prompt:**
> "Find SaaS companies in Texas with 50-500 employees on Apollo"

**Key parameters:**
- `q_organization_name` -- Partial name match (e.g., "Apollo" matches "Apollo Inc.")
- `organization_locations` -- HQ locations to include (e.g., "texas", "tokyo")
- `organization_not_locations` -- HQ locations to exclude
- `organization_num_employees_ranges` -- Employee ranges in "min,max" format (e.g., "50,500")
- `q_organization_keyword_tags` -- Industry keywords (e.g., "software", "healthcare")
- `page` / `per_page` -- Pagination (max 100 per page, max 500 pages)

---

### 2. Discover People at Companies
Search Apollo's contact database for people matching title, seniority, location, and company criteria.

**Tool:** `APOLLO_PEOPLE_SEARCH`

**Example prompt:**
> "Find VPs of Sales at microsoft.com and apollo.io"

**Key parameters:**
- `person_titles` -- Job titles (e.g., "VP of Sales", "CTO")
- `person_seniorities` -- Seniority levels (e.g., "director", "vp", "senior")
- `person_locations` -- Geographic locations of people
- `q_organization_domains` -- Company domains (e.g., "apollo.io" -- exclude "www.")
- `organization_ids` -- Apollo company IDs from Organization Search
- `contact_email_status` -- Filter by email status: "verified", "unverified", "likely to engage"
- `page` / `per_page` -- Pagination (max 100 per page)

---

### 3. Enrich Individual Contacts
Get comprehensive data (email, phone, LinkedIn, company info) for a single person using their email, LinkedIn URL, or name + company.

**Tool:** `APOLLO_PEOPLE_ENRICHMENT`

**Example prompt:**
> "Enrich Tim Zheng at Apollo.io on Apollo"

**Key parameters (at least one identifier required):**
- `email` -- Person's email address
- `linkedin_url` -- Full LinkedIn profile URL
- `first_name` + `last_name` + (`organization_name` or `domain`) -- Name-based matching
- `domain` -- Bare hostname without protocol (e.g., "apollo.io", not "https://apollo.io")
- `reveal_personal_emails` -- Set true to get personal emails (may use extra credits)
- `reveal_phone_number` -- Set true for phone numbers (requires `webhook_url`)

---

### 4. Bulk Enrich Prospects
Enrich up to 10 people simultaneously for efficient batch processing.

**Tool:** `APOLLO_BULK_PEOPLE_ENRICHMENT`

**Example prompt:**
> "Bulk enrich these 5 leads with their Apollo data: [list of names/emails]"

**Key parameters:**
- `details` (required) -- Array of 1-10 person objects, each with identifiers like `email`, `linkedin_url`, `first_name`, `last_name`, `domain`, `company_name`
- `reveal_personal_emails` -- Include personal emails (extra credits)
- `reveal_phone_number` -- Include phone numbers (requires `webhook_url`)

---

### 5. Manage Contact Pipeline Stages
List available stages and update contacts through your sales funnel.

**Tools:** `APOLLO_LIST_CONTACT_STAGES`, `APOLLO_UPDATE_CONTACT_STAGE`

**Example prompt:**
> "Move contacts X and Y to the 'Qualified' stage in Apollo"

**Key parameters for listing stages:** None required.

**Key parameters for updating stage:**
- `contact_ids` (required) -- Array of contact IDs to update
- `contact_stage_id` (required) -- Target stage ID (from List Contact Stages)

---

### 6. Create and Search Saved Contacts
Create new contact records and search your existing Apollo contact database.

**Tools:** `APOLLO_CREATE_CONTACT`, `APOLLO_SEARCH_CONTACTS`

**Example prompt:**
> "Search my Apollo contacts for anyone at Stripe"

**Key parameters for search:**
- Keyword search, stage ID filtering, sorting options
- `page` / `per_page` -- Pagination

**Key parameters for create:**
- `first_name`, `last_name`, `email`, `organization_name`
- `account_id` -- Link to an organization
- `contact_stage_id` -- Initial sales stage

---

## Known Pitfalls

- **Organization domains can be empty**: Some organizations from `APOLLO_ORGANIZATION_SEARCH` return missing or empty domain fields. Use `APOLLO_ORGANIZATION_ENRICHMENT` to validate domains before relying on them.
- **HTTP 403 means config issues**: A 403 response indicates API key or plan access problems -- do not retry. Fix your credentials or plan first.
- **People search returns obfuscated data**: `APOLLO_PEOPLE_SEARCH` may show `has_email`/`has_direct_phone` flags or obfuscated fields instead of full contact details. Use `APOLLO_PEOPLE_ENRICHMENT` to get complete information.
- **Pagination limits are strict**: People search supports `per_page` up to 100 and max 500 pages. Stopping early can miss large portions of the result set.
- **Bulk enrichment has small batch limits**: `APOLLO_BULK_PEOPLE_ENRICHMENT` accepts only 10 items per call. It can return `status='success'` with `missing_records > 0` when identifiers are insufficient -- retry individual records with `APOLLO_PEOPLE_ENRICHMENT`.
- **No automatic deduplication**: `APOLLO_CREATE_CONTACT` does not deduplicate. Check for existing contacts first with `APOLLO_SEARCH_CONTACTS`.
- **Domain format matters**: Always use bare hostnames (e.g., "apollo.io") without protocol prefixes ("https://") or "www." prefix.

---

## Quick Reference

| Action | Tool Slug | Required Params |
|---|---|---|
| Search organizations | `APOLLO_ORGANIZATION_SEARCH` | None (optional filters) |
| Enrich organization | `APOLLO_ORGANIZATION_ENRICHMENT` | `domain` |
| Bulk enrich orgs | `APOLLO_BULK_ORGANIZATION_ENRICHMENT` | `domains` |
| Search people | `APOLLO_PEOPLE_SEARCH` | None (optional filters) |
| Enrich person | `APOLLO_PEOPLE_ENRICHMENT` | One of: `email`, `linkedin_url`, or name+company |
| Bulk enrich people | `APOLLO_BULK_PEOPLE_ENRICHMENT` | `details` (1-10 person objects) |
| List contact stages | `APOLLO_LIST_CONTACT_STAGES` | None |
| Update contact stage | `APOLLO_UPDATE_CONTACT_STAGE` | `contact_ids`, `contact_stage_id` |
| Create contact | `APOLLO_CREATE_CONTACT` | Name + identifiers |
| Search contacts | `APOLLO_SEARCH_CONTACTS` | None (optional filters) |

---

*Powered by [Composio](https://composio.dev)*
