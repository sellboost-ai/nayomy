---
name: "Cloudinary Automation"
description_en: "Automate Cloudinary media management including folder organization, upload presets, asset lookup, transformations, and usage monitoring through natural language commands"
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 64919
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/cloudinary-automation/SKILL.md"
path: "composio-skills/cloudinary-automation/SKILL.md"
is_collection: false
body_length: 7896
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Cloudinary Otomasyonu
  
  Cloudinary medya yönetimi iş akışlarını otomatikleştirin -- klasörler oluşturun, yükleme ön ayarlarını yapılandırın, varlıkları arayın, dönüşümleri yönetin, klasörlerde arama yapın ve kullanımı izleyin -- hepsi doğal dil aracılığıyla.
  
  **Toolkit dokümentasyonu:** [composio.dev/toolkits/cloudinary](https://composio.dev/toolkits/cloudinary)
  
  ---
  
  ## Kurulum
  
  1. Rube MCP sunucusunu ortamınıza ekleyin: `https://rube.app/mcp`
  2. İstendiğinde Cloudinary hesabınızı bağlayın (Composio aracılığıyla API anahtarı doğrulaması)
  3. Cloudinary otomasyonu için doğal dil komutları vermeye başlayın
  
  ---
  
  ## Temel İş Akışları
  
  ### 1. Varlıkları Klasörlerle Düzenleyin
  
  Barındırılan görselleri, videoları ve ham dosyaları düzenlemek için klasör yapıları oluşturun.
  
  **Tool:** `CLOUDINARY_CREATE_FOLDER`
  
  Temel parametreler:
  - `folder` -- yeni varlık klasörünün tam yolu (gerekli), örneğin: `images/events/2023`
  
  Yardımcı araçlar:
  - `CLOUDINARY_SEARCH_FOLDERS` -- Lucene benzeri ifadeler kullanarak klasörleri ad, yol veya oluşturulma tarihine göre arayın
    - `expression` -- arama filtresi (örneğin: `name:sample AND path:events`)
    - `max_results` -- 1-500 sonuç (varsayılan 50)
    - `sort_by` -- sıralama nesneleri listesi (örneğin: `[{"created_at": "desc"}]`)
    - `next_cursor` -- sayfalama imleci
  - `CLOUDINARY_GET_RESOURCES_BY_ASSET_FOLDER` -- belirli bir klasör içindeki varlıkları listeleyin
  
  Örnek komut:
  > "Cloudinary'de 'marketing/campaigns/spring-2026' adlı bir klasör oluştur"
  
  ---
  
  ### 2. Yükleme Ön Ayarlarını Yapılandırın
  
  Hedef klasör, izin verilen formatlar, dönüşümler, etiketler ve üzerine yazma kuralları dahil olmak üzere merkezi yükleme davranışını tanımlayın.
  
  **Tool:** `CLOUDINARY_CREATE_UPLOAD_PRESET`
  
  Temel parametreler:
  - `name` -- ön ayar adı (atlanırsa otomatik olarak oluşturulur)
  - `folder` -- yüklenmeler için hedef klasör yolu (örneğin: `samples/`)
  - `allowed_formats` -- virgülle ayrılmış liste (örneğin: `jpg,png,webp`)
  - `tags` -- uygulanacak virgülle ayrılmış etiketler (örneğin: `marketing,thumbnail`)
  - `transformation` -- gelen dönüşüm (örneğin: `c_limit,w_500`)
  - `eager` -- yüklemede oluşturulacak eager dönüşümleri (örneğin: `c_fill,g_face,h_150,w_150`)
  - `unsigned` -- imzasız yüklemelere izin ver (`true`/`false`)
  - `overwrite` -- aynı public_id'ye sahip mevcut varlıkların üzerine yaz (`unsigned=true` olduğunda `true` olamaz)
  - `resource_type` -- `image`, `video` veya `raw` (varsayılan `image`)
  - `unique_filename` -- çarpışmaları önlemek için rastgele sonek ekle (varsayılan `true`)
  - `use_filename` -- orijinal dosya adını kullan (varsayılan `false`)
  - `moderation` -- moderasyon türü: `manual`, `webpurify`, `aws_rek`, vb.
  - `auto_tagging` -- AI otomatik etiketlemesi için 0.0-1.0 güven eşiği
  - `notification_url` -- yükleme bildirimleri için webhook URL'si
  
  Örnek komut:
  > "Yalnızca JPG ve PNG'ye izin veren, 'products/' klasöründe depolayan ve 0.7 güvenle otomatik etiketleyen 'product-images' adlı bir yükleme ön ayarı oluştur"
  
  ---
  
  ### 3. Varlık Ayrıntılarını Arayın
  
  Public ID'sine göre belirli bir varlığın tam ayrıntılarını alın; meta veriler, türetilmiş varlıklar ve ilgili kaynaklar dahil.
  
  **Tool:** `CLOUDINARY_GET_RESOURCE_BY_PUBLIC_ID`
  
  Temel parametreler:
  - `public_id` -- varlığın public ID'si (gerekli)
  - `resource_type` -- `image`, `video` veya `raw` (gerekli)
  - `type` -- teslim türü: `upload`, `private`, `authenticated`, `fetch`, vb. (gerekli)
  - `colors` -- renk histogramı ve baskın renkler dahil et
  - `faces` -- algılanan yüz koordinatları dahil et
  - `media_metadata` -- IPTC, XMP ve ayrıntılı meta veriler dahil et
  - `quality_analysis` -- kalite analizi puanları dahil et
  - `phash` -- benzerlik algılaması için algısal hash dahil et
  - `versions` -- yedeklenmiş sürümler dahil et
  - `related` -- ilgili varlıklar dahil et
  - `max_results` -- döndürülecek maksimum türetilmiş/ilgili varlıklar (1-500)
  
  Örnek komut:
  > "Renk analizi ve kalite puanları dahil olmak üzere 'products/hero-banner' görüntüsü için tam ayrıntıları al"
  
  ---
  
  ### 4. Dönüşümleri ve Türetilmiş Varlıkları Yönetin
  
  Mevcut dönüşümleri listeleyin, yüklenen varlıklara eager dönüşümleri uygulayın ve türetilmiş kaynakları temizleyin.
  
  **Araçlar:**
  - `CLOUDINARY_GET_TRANSFORMATIONS` -- tüm adlandırılmış ve adlandırılmamış dönüşümleri listeleyin
    - `max_results` -- 1-500 (varsayılan 10)
    - `next_cursor` -- sayfalama imleci
  - `CLOUDINARY_EXPLICIT_RESOURCE` -- mevcut bir varlığı güncelleyin: dönüşümleri ön oluşturun, meta verileri güncelleyin, yeni klasörlere taşıyın veya etiketleri değiştirin
    - `public_id` -- hedef varlık (gerekli)
    - `eager` -- ön oluşturulacak dönüşüm dizgileri listesi (örneğin: `["c_fill,w_300,h_200", "c_thumb,w_100,h_100,g_face"]`)
    - `eager_async` -- dönüşümleri asenkron olarak oluştur
    - `tags` -- mevcut etiketlerin yerine koymak
    - `asset_folder` -- varlığı yeni bir klasöre taşı
    - `display_name` -- görünen adı ayarla
    - `context` -- anahtar-değer meta verileri (örneğin: `{"alt": "Mountain view"}`)
    - `invalidate` -- CDN önbelleğini geçersiz kıl (1 saate kadar sürer)
  - `CLOUDINARY_DELETE_DERIVED_RESOURCES` -- belirli türetilmiş varlıkları ID'lerine göre silin (çağrı başına 100'e kadar)
  
  Örnek komut:
  > "'products/hero-banner' varlığı için 300x200 fill crop ve 100x100 yüz algılama küçük resmini ön oluştur"
  
  ---
  
  ### 5. Kullanımı ve Yapılandırmayı İzleyin
  
  Hesap düzeyinde kullanım limitlerini, ortam yapılandırmasını ve etiket envanterini kontrol edin.
  
  **Araçlar:**
  - `CLOUDINARY_GET_USAGE` -- depolama, bant genişliği, istekler ve kota limitlerini izleyin
  - `CLOUDINARY_GET_CONFIG` -- ortam yapılandırması ayrıntılarını getirin
    - `settings` -- `folder_mode` gibi yapılandırma ayarlarını içermesi için `true` olarak ayarlayın
  - `CLOUDINARY_GET_TAGS` -- bir kaynak türü için tüm etiketleri listeleyin
  
  Örnek komut:
  > "Cloudinary hesap kullanımımı ve kalan kotamı göster"
  
  ---
  
  ### 6. Webhook Tetikleyicilerini Ayarlayın
  
  Belirli Cloudinary olayları için webhook bildirimleri oluşturun.
  
  **Tool:** `CLOUDINARY_CREATE_TRIGGER`
  
  Yüklemeler tamamlandığında, dönüşümler bittiğinde veya diğer olaylar gerçekleştiğinde geri çağrılar almak için kullanın.
  
  Örnek komut:
  > "Yükleme olaylarında https://my-app.com/hook adresine bildirim gönderen bir webhook tetikleyicisi oluştur"
  
  ---
  
  ## Bilinen Sorunlar
  
  | Sorun | Ayrıntılar |
  |-------|-----------|
  | Klasör oluşturma eşgüçlülüğü | `CLOUDINARY_CREATE_FOLDER` yol zaten varsa hata verebilir veya hiçbir işlem yapmayabilir -- eşgüçlü klasör adlandırması tasarlayın |
  | Ön ayar-yükleme uyumu | `allowed_formats`, `folder` ve `unsigned` gibi yükleme ön ayarı seçenekleri gerçek yükleme yöntemiyle eşleşmeli yoksa yüklemeler reddedilecektir |
  | Katı varlık araması | `CLOUDINARY_GET_RESOURCE_BY_PUBLIC_ID` varlık var olsa bile `resource_type`, `type` veya `public_id` herhangi biri yanlışsa başarısız olur |
  | Klasör yolu hassasiyeti | `CLOUDINARY_GET_RESOURCES_BY_ASSET_FOLDER` yalnızca belirtilen tam klasördeki varlıkları listeler; yazım hataları boş sonuçlar döndürür |
  | Kota engelleme | `CLOUDINARY_GET_USAGE` hesap düzeyinde limitleri yansıtır -- kapları vurmak kullanım kontrol edilip giderilene kadar yüklemeleri sessizce engeller |
  | CDN geçersiz kılma gecikmesi | `CLOUDINARY_EXPLICIT_RESOURCE` üzerinde `invalidate=true` ayarlamak 1 saaya kadar yayılması için zaman alır |
  | İmzasız vs üzerine yazma çatışması | Yükleme ön ayarlarında `unsigned=true` olduğunda `overwrite=true` ayarlanamaz |
  
  ---
  
  ## Hızlı Referans
  
  | İşlem | Tool Slug | Temel Parametreler |
  |-------|-----------|-------------------|
  | Klasör oluştur | `CLOUDINARY_CREATE_FOLDER` | `folder` |
  | Klasörlerde ara | `CLOUDINARY_SEARCH_FOLDERS` | `expression`, `max_results` |
  | Klasör varlıklarını listele | `CLOUDINARY_GET_RESOURCES_BY_ASSET_FOLDER` | klasör yolu |
  | Yükleme ön ayarı oluştur | `CLOUDINARY_CREATE_UPLOAD_PRESET` | `name`, `folder`, `allowed_formats`, `tags` |
  | Varlık ayrıntılarını al | `CLOUDINARY_GET_RESOURCE_BY_PUBLIC_ID` | `public_id`, `resource_type`, `type` |
  | Dönüşümleri listele | `CLOUDINARY_GET_TRANSFORMATIONS` | `max_results`, `next_cursor` |
  | Varlığı güncelle/dönüştür | `CLOUDINARY_EXPLICIT_RESOURCE` | `public_id`, `eager`, `tags` |
  | Türetilmiş varlıkları sil | `CLOUDINARY_DELETE_DERIVED_RESOURCES` | `derived_resource_ids` |
  | Kullanımı al | `CLOUDINARY_GET_USAGE` | (yok) |
  | Yapılandırmayı al | `CLOUDINARY_GET_CONFIG` | `settings` |
  | Etiketleri listele | `CLOUDINARY_GET_TAGS` | resource_type |
  | Webhook oluştur | `CLOUDINARY_CREATE_TRIGGER` | olay türü, URL |
  
  ---
  
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Cloudinary Automation

Automate Cloudinary media management workflows -- create folders, configure upload presets, look up assets, manage transformations, search folders, and monitor usage -- all through natural language.

**Toolkit docs:** [composio.dev/toolkits/cloudinary](https://composio.dev/toolkits/cloudinary)

---

## Setup

1. Add the Rube MCP server to your environment: `https://rube.app/mcp`
2. Connect your Cloudinary account when prompted (API key auth via Composio)
3. Start issuing natural language commands for Cloudinary automation

---

## Core Workflows

### 1. Organize Assets with Folders

Create folder structures for organizing hosted images, videos, and raw files.

**Tool:** `CLOUDINARY_CREATE_FOLDER`

Key parameters:
- `folder` -- full path of the new asset folder (required), e.g., `images/events/2023`

Supporting tools:
- `CLOUDINARY_SEARCH_FOLDERS` -- search folders by name, path, or creation date using Lucene-like expressions
  - `expression` -- search filter (e.g., `name:sample AND path:events`)
  - `max_results` -- 1-500 results (default 50)
  - `sort_by` -- list of sort objects (e.g., `[{"created_at": "desc"}]`)
  - `next_cursor` -- pagination cursor
- `CLOUDINARY_GET_RESOURCES_BY_ASSET_FOLDER` -- list assets within a specific folder

Example prompt:
> "Create a folder called 'marketing/campaigns/spring-2026' in Cloudinary"

---

### 2. Configure Upload Presets

Define centralized upload behavior including target folder, allowed formats, transformations, tags, and overwrite rules.

**Tool:** `CLOUDINARY_CREATE_UPLOAD_PRESET`

Key parameters:
- `name` -- preset name (auto-generated if omitted)
- `folder` -- target folder path for uploads (e.g., `samples/`)
- `allowed_formats` -- comma-separated list (e.g., `jpg,png,webp`)
- `tags` -- comma-separated tags to apply (e.g., `marketing,thumbnail`)
- `transformation` -- incoming transformation (e.g., `c_limit,w_500`)
- `eager` -- eager transformations to generate on upload (e.g., `c_fill,g_face,h_150,w_150`)
- `unsigned` -- allow unsigned uploads (`true`/`false`)
- `overwrite` -- overwrite existing assets with same public_id (cannot be `true` when `unsigned=true`)
- `resource_type` -- `image`, `video`, or `raw` (default `image`)
- `unique_filename` -- append random suffix to avoid collisions (default `true`)
- `use_filename` -- use original filename (default `false`)
- `moderation` -- moderation type: `manual`, `webpurify`, `aws_rek`, etc.
- `auto_tagging` -- confidence threshold 0.0-1.0 for AI auto-tagging
- `notification_url` -- webhook URL for upload notifications

Example prompt:
> "Create an upload preset called 'product-images' that only allows JPG and PNG, stores in 'products/' folder, and auto-tags with 0.7 confidence"

---

### 3. Look Up Asset Details

Retrieve full details for a specific asset by its public ID, including metadata, derived assets, and related resources.

**Tool:** `CLOUDINARY_GET_RESOURCE_BY_PUBLIC_ID`

Key parameters:
- `public_id` -- the asset's public ID (required)
- `resource_type` -- `image`, `video`, or `raw` (required)
- `type` -- delivery type: `upload`, `private`, `authenticated`, `fetch`, etc. (required)
- `colors` -- include color histogram and predominant colors
- `faces` -- include detected face coordinates
- `media_metadata` -- include IPTC, XMP, and detailed metadata
- `quality_analysis` -- include quality analysis scores
- `phash` -- include perceptual hash for similarity detection
- `versions` -- include backed-up versions
- `related` -- include related assets
- `max_results` -- max derived/related assets to return (1-500)

Example prompt:
> "Get full details for the image 'products/hero-banner' including color analysis and quality scores"

---

### 4. Manage Transformations and Derived Assets

List existing transformations, apply eager transformations to uploaded assets, and clean up derived resources.

**Tools:**
- `CLOUDINARY_GET_TRANSFORMATIONS` -- list all named and unnamed transformations
  - `max_results` -- 1-500 (default 10)
  - `next_cursor` -- pagination cursor
- `CLOUDINARY_EXPLICIT_RESOURCE` -- update an existing asset: pre-generate transformations, update metadata, move to new folders, or modify tags
  - `public_id` -- target asset (required)
  - `eager` -- list of transformation strings to pre-generate (e.g., `["c_fill,w_300,h_200", "c_thumb,w_100,h_100,g_face"]`)
  - `eager_async` -- generate transformations asynchronously
  - `tags` -- replace existing tags
  - `asset_folder` -- move asset to a new folder
  - `display_name` -- set display name
  - `context` -- key-value metadata (e.g., `{"alt": "Mountain view"}`)
  - `invalidate` -- invalidate CDN cache (takes up to 1 hour)
- `CLOUDINARY_DELETE_DERIVED_RESOURCES` -- delete specific derived assets by IDs (up to 100 per call)

Example prompt:
> "Pre-generate a 300x200 fill crop and a 100x100 face-detection thumbnail for asset 'products/hero-banner'"

---

### 5. Monitor Usage and Configuration

Check account-level usage limits, environment configuration, and tag inventory.

**Tools:**
- `CLOUDINARY_GET_USAGE` -- monitor storage, bandwidth, requests, and quota limits
- `CLOUDINARY_GET_CONFIG` -- fetch environment config details
  - `settings` -- set to `true` to include configuration settings like `folder_mode`
- `CLOUDINARY_GET_TAGS` -- list all tags for a resource type

Example prompt:
> "Show me my Cloudinary account usage and remaining quota"

---

### 6. Set Up Webhook Triggers

Create webhook notifications for specific Cloudinary events.

**Tool:** `CLOUDINARY_CREATE_TRIGGER`

Use to receive callbacks when uploads complete, transformations finish, or other events occur.

Example prompt:
> "Create a webhook trigger that notifies https://my-app.com/hook on upload events"

---

## Known Pitfalls

| Pitfall | Details |
|---------|---------|
| Folder creation idempotency | `CLOUDINARY_CREATE_FOLDER` may error or no-op if the path already exists -- design idempotent folder naming |
| Preset-upload alignment | Upload preset options like `allowed_formats`, `folder`, and `unsigned` must match the actual upload method or uploads will be rejected |
| Strict asset lookup | `CLOUDINARY_GET_RESOURCE_BY_PUBLIC_ID` fails if any of `resource_type`, `type`, or `public_id` is incorrect, even when the asset exists |
| Folder path sensitivity | `CLOUDINARY_GET_RESOURCES_BY_ASSET_FOLDER` only lists assets in the exact folder specified; typos return empty results |
| Quota blocking | `CLOUDINARY_GET_USAGE` reflects account-level limits -- hitting caps silently blocks uploads until usage is checked and addressed |
| CDN invalidation delay | Setting `invalidate=true` on `CLOUDINARY_EXPLICIT_RESOURCE` takes up to 1 hour to propagate |
| Unsigned vs overwrite conflict | Cannot set `overwrite=true` when `unsigned=true` in upload presets |

---

## Quick Reference

| Action | Tool Slug | Key Params |
|--------|-----------|------------|
| Create folder | `CLOUDINARY_CREATE_FOLDER` | `folder` |
| Search folders | `CLOUDINARY_SEARCH_FOLDERS` | `expression`, `max_results` |
| List folder assets | `CLOUDINARY_GET_RESOURCES_BY_ASSET_FOLDER` | folder path |
| Create upload preset | `CLOUDINARY_CREATE_UPLOAD_PRESET` | `name`, `folder`, `allowed_formats`, `tags` |
| Get asset details | `CLOUDINARY_GET_RESOURCE_BY_PUBLIC_ID` | `public_id`, `resource_type`, `type` |
| List transformations | `CLOUDINARY_GET_TRANSFORMATIONS` | `max_results`, `next_cursor` |
| Update/transform asset | `CLOUDINARY_EXPLICIT_RESOURCE` | `public_id`, `eager`, `tags` |
| Delete derived assets | `CLOUDINARY_DELETE_DERIVED_RESOURCES` | `derived_resource_ids` |
| Get usage | `CLOUDINARY_GET_USAGE` | (none) |
| Get config | `CLOUDINARY_GET_CONFIG` | `settings` |
| List tags | `CLOUDINARY_GET_TAGS` | resource_type |
| Create webhook | `CLOUDINARY_CREATE_TRIGGER` | event type, URL |

---

*Powered by [Composio](https://composio.dev)*
