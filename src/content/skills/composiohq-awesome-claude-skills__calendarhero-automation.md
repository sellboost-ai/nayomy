---
name: "calendarhero-automation"
description_en: "Automate Calendarhero tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Composio'nun Rube MCP aracılığıyla Calendarhero görevlerini otomatikleştirin. Her zaman güncel şemaları kontrol etmek için tools'u önce arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 65377
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/calendarhero-automation/SKILL.md"
path: "composio-skills/calendarhero-automation/SKILL.md"
is_collection: false
body_length: 2816
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Calendarhero Otomasyonu Rube MCP üzerinden
  
  Composio'nun Calendarhero araç takımı aracılığıyla Rube MCP ile Calendarhero işlemlerini otomatikleştirin.
  
  **Araç takımı dokümantasyonu**: [composio.dev/toolkits/calendarhero](https://composio.dev/toolkits/calendarhero)
  
  ## Ön Koşullar
  
  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS mevcut)
  - `RUBE_MANAGE_CONNECTIONS` ile aktif Calendarhero bağlantısı, araç takımı `calendarhero` ile
  - Geçerli araç şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın
  
  ## Kurulum
  
  **Rube MCP'yi Alın**: İstemci konfigürasyonunuzda `https://rube.app/mcp` adresini bir MCP sunucusu olarak ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.
  
  1. `RUBE_SEARCH_TOOLS` yanıt verdiğini doğrulayarak Rube MCP'nin kullanılabilir olduğunu kontrol edin
  2. `RUBE_MANAGE_CONNECTIONS` çağırın, araç takımı `calendarhero` ile
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth linkini izleyin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın
  
  ## Araç Keşfi
  
  Workflow'ları çalıştırmadan önce her zaman mevcut araçları keşfedin:
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Calendarhero operations", known_fields: ""}]
  session: {generate_id: true}
  ```
  
  Bu, mevcut araç slugları, input şemaları, önerilen execution planları ve bilinen sorunları döndürür.
  
  ## Temel Workflow Deseni
  
  ### Adım 1: Mevcut Araçları Keşfedin
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Calendarhero task"}]
  session: {id: "existing_session_id"}
  ```
  
  ### Adım 2: Bağlantıyı Kontrol Edin
  
  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["calendarhero"]
  session_id: "your_session_id"
  ```
  
  ### Adım 3: Araçları Çalıştırın
  
  ```
  RUBE_MULTI_EXECUTE_TOOL
  tools: [{
    tool_slug: "TOOL_SLUG_FROM_SEARCH",
    arguments: {/* schema-compliant args from search results */}
  }]
  memory: {}
  session_id: "your_session_id"
  ```
  
  ## Bilinen Sorunlar
  
  - **Her zaman önce arayın**: Araç şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan araç slugları veya argümanlarını asla hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Araçları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` tarafından ACTIVE durumunu doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adları ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarına her zaman `memory` parametresini ekleyin, boş olsa da (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Pagination**: Sonuçlarda pagination tokenlarını kontrol edin ve tam olana kadar almaya devam edin
  
  ## Hızlı Referans
  
  | İşlem | Yaklaşım |
  |-----------|----------|
  | Araçları bul | `RUBE_SEARCH_TOOLS` ile Calendarhero'ya özel use case |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` ile araç takımı `calendarhero` |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` ile keşfedilen araç slugları |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` ile `run_composio_tool()` |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` için `schemaRef` olan araçlar |
  
  ---
  *[Composio](https://composio.dev) tarafından desteklenir*
---

# Calendarhero Automation via Rube MCP

Automate Calendarhero operations through Composio's Calendarhero toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/calendarhero](https://composio.dev/toolkits/calendarhero)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Calendarhero connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `calendarhero`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `calendarhero`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Calendarhero operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Calendarhero task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["calendarhero"]
session_id: "your_session_id"
```

### Step 3: Execute Tools

```
RUBE_MULTI_EXECUTE_TOOL
tools: [{
  tool_slug: "TOOL_SLUG_FROM_SEARCH",
  arguments: {/* schema-compliant args from search results */}
}]
memory: {}
session_id: "your_session_id"
```

## Known Pitfalls

- **Always search first**: Tool schemas change. Never hardcode tool slugs or arguments without calling `RUBE_SEARCH_TOOLS`
- **Check connection**: Verify `RUBE_MANAGE_CONNECTIONS` shows ACTIVE status before executing tools
- **Schema compliance**: Use exact field names and types from the search results
- **Memory parameter**: Always include `memory` in `RUBE_MULTI_EXECUTE_TOOL` calls, even if empty (`{}`)
- **Session reuse**: Reuse session IDs within a workflow. Generate new ones for new workflows
- **Pagination**: Check responses for pagination tokens and continue fetching until complete

## Quick Reference

| Operation | Approach |
|-----------|----------|
| Find tools | `RUBE_SEARCH_TOOLS` with Calendarhero-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `calendarhero` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
