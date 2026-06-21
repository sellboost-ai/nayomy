---
name: "Clockify Automation"
description_en: "Automate time tracking workflows in Clockify -- create and manage time entries, workspaces, and users through natural language commands."
description_tr: "Clockify'da zaman takibi iş akışlarını otomatikleştirin — doğal dil komutları aracılığıyla time entry'ler, workspace'ler ve kullanıcıları oluşturun ve yönetin."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 65377
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/clockify-automation/SKILL.md"
path: "composio-skills/clockify-automation/SKILL.md"
is_collection: false
body_length: 5242
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Clockify Otomasyonu
  
  Clockify zaman takibi işlemlerinizi doğrudan Claude Code'dan otomatikleştirin. Zaman girişleri kaydedin, geçmiş verileri sorgulayın, çalışma alanlarını yönetin ve takım aktivitesini denetleyin -- hepsi terminalinizi terk etmeden.
  
  **Toolkit dokümantasyonu:** [composio.dev/toolkits/clockify](https://composio.dev/toolkits/clockify)
  
  ---
  
  ## Kurulum
  
  1. Rube MCP sunucusunu Claude Code konfigürasyonunuza `https://rube.app/mcp` URL'si ile ekleyin
  2. İstendiğinde, sağlanan bağlantı üzerinden Clockify hesabınıza kimlik doğrulaması yapın
  3. Doğal dil ile zaman takibi iş akışlarınızı otomatikleştirmeye başlayın
  
  ---
  
  ## Ana İş Akışları
  
  ### 1. Zaman Girişleri Oluşturun
  
  Proje, görev ve etiket ilişkilendirmeleri ile birlikte çalışılan zamanı kaydedin, faturalama durumunu belirleyin.
  
  **Tool:** `CLOCKIFY_CREATE_TIME_ENTRY`
  
  ```
  Log 2 hours of work on project 64a687e2 in workspace 64a687e3 starting at 9am UTC today with description "API development"
  ```
  
  Önemli parametreler:
  - `workspaceId` (gerekli) -- girişin oluşturulacağı çalışma alanı
  - `start` (gerekli) -- ISO 8601 başlangıç zamanı (örn. `2026-02-11T09:00:00Z`)
  - `end` -- ISO 8601 bitiş zamanı; çalışan bir zamanlayıcı oluşturmak için atlayın
  - `projectId` -- bir projeyle ilişkilendirin
  - `taskId` -- bir görevle ilişkilendirin
  - `description` -- iş açıklaması (0-3000 karakter)
  - `tagIds` -- etiket ID'lerinin dizisi
  - `billable` -- girişin faturalı olup olmadığı
  - `customFieldValues` -- `customFieldId` ve `value` içeren özel alan girişlerinin dizisi
  
  ### 2. Zaman Girişlerini Sorgulayın
  
  Raporlama, denetim ve faturalandırma için geçmiş zaman girişlerini alın.
  
  **Tool:** `CLOCKIFY_GET_TIME_ENTRIES`
  
  ```
  Get all time entries for user abc123 in workspace xyz789 from January 2026
  ```
  
  Önemli parametreler:
  - `workspaceId` (gerekli) -- sorgulanacak çalışma alanı
  - `userId` (gerekli) -- girişleri alınacak kullanıcı
  - `start` / `end` -- ISO 8601 tarih aralığı filtreleri
  - `project` -- proje ID'sine göre filtrele
  - `task` -- görev ID'sine göre filtrele
  - `tags` -- virgülle ayrılmış etiket ID'leri
  - `description` -- metin filtresi (kısmi eşleşme)
  - `hydrated` -- sadece ID'ler yerine tam proje/görev/etiket nesneleri almak için `true` olarak ayarlayın
  - `in-progress` -- sadece çalışan zamanlayıcıyı döndürmek için `true` olarak ayarlayın
  - `page` / `page-size` -- sayfalandırma (sayfa başına varsayılan 50)
  
  ### 3. Zaman Girişlerini Silin
  
  Hatalı, yinelenen veya iptal edilmiş zaman girişlerini kaldırın.
  
  **Tool:** `CLOCKIFY_DELETE_TIME_ENTRY`
  
  ```
  Delete time entry 5b715448 from workspace 64a687e3
  ```
  
  - `workspaceId` ve `id` (zaman girişi ID'si) gerektirir
  - Hatalı içeri aktarımların veya çoğaltılmış girişlerin temizlenmesi için kullanın
  
  ### 4. Çalışma Alanlarını Yönetin
  
  Kimlik doğrulanmış kullanıcının ait olduğu tüm çalışma alanlarını listeleyin.
  
  **Tool:** `CLOCKIFY_GET_ALL_MY_WORKSPACES`
  
  ```
  Show me all my Clockify workspaces
  ```
  
  - İsteğe bağlı `roles` filtresi -- `["WORKSPACE_ADMIN", "OWNER"]` gibi rol dizisi
  - Girişleri oluşturmadan veya sorgulamadan önce çalışma alanı ID'lerini keşfetmek için kullanın
  
  ### 5. Kullanıcı Bilgileri
  
  Geçerli kullanıcı ayrıntılarını alın ve çalışma alanı üyelerini listeleyin.
  
  **Tools:** `CLOCKIFY_GET_CURRENTLY_LOGGED_IN_USER_INFO`, `CLOCKIFY_FIND_ALL_USERS_ON_WORKSPACE`
  
  ```
  Who am I logged in as? Then list all users in workspace 64a687e3
  ```
  
  - `CLOCKIFY_GET_CURRENTLY_LOGGED_IN_USER_INFO` kimlik doğrulanmış kullanıcının profilini döndürür (parametre gerekmez)
  - `CLOCKIFY_FIND_ALL_USERS_ON_WORKSPACE` `workspaceId` gerektirir; `name`, `email` filtreleri ve sayfalandırması (`page`, `page-size` maksimum 100) destekler
  
  ### 6. Çalışan Zamanlayıcı Yönetimi
  
  Oluştururken `end` parametresini atlayarak bir zamanlayıcı başlatın veya çalışan girişleri kontrol edin.
  
  **Tools:** `CLOCKIFY_CREATE_TIME_ENTRY`, `CLOCKIFY_GET_TIME_ENTRIES`
  
  ```
  Start a timer on project abc in workspace xyz with description "Working on bug fix"
  ```
  
  - Çalışan bir zamanlayıcı başlatmak için `end` olmadan oluşturun
  - `in-progress: true` ile `CLOCKIFY_GET_TIME_ENTRIES` kullanarak bir zamanlayıcının çalışıp çalışmadığını kontrol edin
  
  ---
  
  ## Bilinen Tuzaklar
  
  - **Çalışma alanı ve kullanıcı ID'leri gereklidir:** Çoğu Clockify aracı `workspaceId` ve `userId` gerektirir. Bu ID'leri çözmek için her zaman önce `CLOCKIFY_GET_ALL_MY_WORKSPACES` ve `CLOCKIFY_GET_CURRENTLY_LOGGED_IN_USER_INFO` komutlarını çalıştırın.
  - **ISO 8601 zaman damgaları:** Tüm zaman parametreleri saat dilimi ile ISO 8601 formatında olmalıdır (örn. `2026-02-11T09:00:00Z`). Saat dilimini atlamamak öngörülemeyen davranışlara neden olur.
  - **Çalışan zamanlayıcılar:** Aynı anda yalnızca bir zamanlayıcı çalışabilir. `end` olmayan yeni bir giriş oluşturmak, başka bir zamanlayıcı zaten etkinse başarısız olur. Önce mevcut zamanlayıcıyı durdurun.
  - **Sayfalandırma varsayılanları:** `CLOCKIFY_GET_TIME_ENTRIES` sayfa başına varsayılan olarak 50 girişle başlar. Tam dışarı aktarımlar için daha fazla sonuç döndürülene kadar sayfaları dolaşın.
  - **Etiket ID'leri çalışma alanı kapsamında:** Bir çalışma alanından gelen etiket ID'leri başka bir çalışma alanında kullanılamaz. Her zaman etiketleri hedef çalışma alanı bağlamında çözün.
  
  ---
  
  ## Hızlı Referans
  
  | Tool Slug | Açıklama |
  |---|---|
  | `CLOCKIFY_CREATE_TIME_ENTRY` | Zaman girişi oluşturun veya zamanlayıcı başlatın (`workspaceId`, `start` gerekli) |
  | `CLOCKIFY_GET_TIME_ENTRIES` | Zaman girişlerini filtrelerle listeleyin (`workspaceId`, `userId` gerekli) |
  | `CLOCKIFY_DELETE_TIME_ENTRY` | Zaman girişi silin (`workspaceId`, `id` gerekli) |
  | `CLOCKIFY_GET_ALL_MY_WORKSPACES` | Kimlik doğrulanmış kullanıcı için tüm çalışma alanlarını listeleyin |
  | `CLOCKIFY_GET_CURRENTLY_LOGGED_IN_USER_INFO` | Geçerli kullanıcı profil bilgisini alın |
  | `CLOCKIFY_FIND_ALL_USERS_ON_WORKSPACE` | Çalışma alanındaki tüm kullanıcıları listeleyin (`workspaceId` gerekli) |
  
  ---
  
  *Powered by [Composio](https://composio.dev)*
---

# Clockify Automation

Automate your Clockify time tracking operations directly from Claude Code. Log time entries, query historical data, manage workspaces, and audit team activity -- all without leaving your terminal.

**Toolkit docs:** [composio.dev/toolkits/clockify](https://composio.dev/toolkits/clockify)

---

## Setup

1. Add the Rube MCP server to your Claude Code config with URL: `https://rube.app/mcp`
2. When prompted, authenticate your Clockify account through the connection link provided
3. Start automating your time tracking workflows with natural language

---

## Core Workflows

### 1. Create Time Entries

Log time with project, task, and tag associations, plus billable status.

**Tool:** `CLOCKIFY_CREATE_TIME_ENTRY`

```
Log 2 hours of work on project 64a687e2 in workspace 64a687e3 starting at 9am UTC today with description "API development"
```

Key parameters:
- `workspaceId` (required) -- workspace where the entry is created
- `start` (required) -- ISO 8601 start time (e.g., `2026-02-11T09:00:00Z`)
- `end` -- ISO 8601 end time; omit to create a running timer
- `projectId` -- associate with a project
- `taskId` -- associate with a task
- `description` -- work description (0-3000 chars)
- `tagIds` -- array of tag IDs
- `billable` -- whether the entry is billable
- `customFieldValues` -- array of custom field entries with `customFieldId` and `value`

### 2. Query Time Entries

Retrieve historical time entries for reporting, auditing, and invoicing.

**Tool:** `CLOCKIFY_GET_TIME_ENTRIES`

```
Get all time entries for user abc123 in workspace xyz789 from January 2026
```

Key parameters:
- `workspaceId` (required) -- workspace to query
- `userId` (required) -- user whose entries to retrieve
- `start` / `end` -- ISO 8601 date range filters
- `project` -- filter by project ID
- `task` -- filter by task ID
- `tags` -- comma-separated tag IDs
- `description` -- text filter (partial match)
- `hydrated` -- set `true` to get full project/task/tag objects instead of just IDs
- `in-progress` -- set `true` to return only the running timer
- `page` / `page-size` -- pagination (default 50 per page)

### 3. Delete Time Entries

Remove erroneous, duplicate, or cancelled time entries.

**Tool:** `CLOCKIFY_DELETE_TIME_ENTRY`

```
Delete time entry 5b715448 from workspace 64a687e3
```

- Requires `workspaceId` and `id` (the time entry ID)
- Use for cleanup of bad imports or duplicates

### 4. Manage Workspaces

List all workspaces the authenticated user belongs to.

**Tool:** `CLOCKIFY_GET_ALL_MY_WORKSPACES`

```
Show me all my Clockify workspaces
```

- Optional `roles` filter -- array of roles like `["WORKSPACE_ADMIN", "OWNER"]`
- Use this to discover workspace IDs before creating or querying entries

### 5. User Information

Retrieve current user details and list workspace members.

**Tools:** `CLOCKIFY_GET_CURRENTLY_LOGGED_IN_USER_INFO`, `CLOCKIFY_FIND_ALL_USERS_ON_WORKSPACE`

```
Who am I logged in as? Then list all users in workspace 64a687e3
```

- `CLOCKIFY_GET_CURRENTLY_LOGGED_IN_USER_INFO` returns the authenticated user's profile (no parameters needed)
- `CLOCKIFY_FIND_ALL_USERS_ON_WORKSPACE` requires `workspaceId`; supports `name`, `email` filters and pagination (`page`, `page-size` max 100)

### 6. Running Timer Management

Start a timer by omitting `end` in create, or check for running entries.

**Tools:** `CLOCKIFY_CREATE_TIME_ENTRY`, `CLOCKIFY_GET_TIME_ENTRIES`

```
Start a timer on project abc in workspace xyz with description "Working on bug fix"
```

- Create without `end` to start a running timer
- Use `CLOCKIFY_GET_TIME_ENTRIES` with `in-progress: true` to check if a timer is running

---

## Known Pitfalls

- **Workspace and user IDs are required:** Most Clockify tools require both `workspaceId` and `userId`. Always call `CLOCKIFY_GET_ALL_MY_WORKSPACES` and `CLOCKIFY_GET_CURRENTLY_LOGGED_IN_USER_INFO` first to resolve these IDs.
- **ISO 8601 timestamps:** All time parameters must be in ISO 8601 format with timezone (e.g., `2026-02-11T09:00:00Z`). Omitting the timezone causes unpredictable behavior.
- **Running timers:** Only one timer can run at a time. Creating a new entry without `end` will fail if another timer is already active. Stop the existing timer first.
- **Pagination defaults:** `CLOCKIFY_GET_TIME_ENTRIES` defaults to 50 entries per page. For full exports, loop through pages until no more results are returned.
- **Tag IDs are workspace-scoped:** Tag IDs from one workspace cannot be used in another. Always resolve tags within the target workspace context.

---

## Quick Reference

| Tool Slug | Description |
|---|---|
| `CLOCKIFY_CREATE_TIME_ENTRY` | Create a time entry or start a timer (requires `workspaceId`, `start`) |
| `CLOCKIFY_GET_TIME_ENTRIES` | List time entries with filters (requires `workspaceId`, `userId`) |
| `CLOCKIFY_DELETE_TIME_ENTRY` | Delete a time entry (requires `workspaceId`, `id`) |
| `CLOCKIFY_GET_ALL_MY_WORKSPACES` | List all workspaces for the authenticated user |
| `CLOCKIFY_GET_CURRENTLY_LOGGED_IN_USER_INFO` | Get current user profile info |
| `CLOCKIFY_FIND_ALL_USERS_ON_WORKSPACE` | List all users in a workspace (requires `workspaceId`) |

---

*Powered by [Composio](https://composio.dev)*
