---
name: "botsonic-automation"
description_en: "Automate Botsonic tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Rube MCP (Composio) aracılığıyla Botsonic görevlerini otomatikleştirin. İşlemi başlatmadan önce her zaman tools'da güncel schemaları kontrol edin."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 65377
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/botsonic-automation/SKILL.md"
path: "composio-skills/botsonic-automation/SKILL.md"
is_collection: false
body_length: 2764
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Botsonic Otomasyonu via Rube MCP
  
  Composio'nun Botsonic toolkit'i aracılığıyla Rube MCP ile Botsonic operasyonlarını otomatikleştirin.
  
  **Toolkit dokümantasyonu**: [composio.dev/toolkits/botsonic](https://composio.dev/toolkits/botsonic)
  
  ## Ön Koşullar
  
  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS mevcut)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Botsonic bağlantısı ve `botsonic` toolkit'i
  - Daima güncel tool schema'larını almak için önce `RUBE_SEARCH_TOOLS` çağırın
  
  ## Kurulum
  
  **Rube MCP'yi Alın**: MCP sunucunuz olarak `https://rube.app/mcp` ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.
  
  1. `RUBE_SEARCH_TOOLS` yanıt verdiğini doğrulayarak Rube MCP'nin mevcut olduğunu kontrol edin
  2. `RUBE_MANAGE_CONNECTIONS` çağırın ve toolkit parametresi olarak `botsonic` kullanın
  3. Bağlantı ACTIVE değilse, dönen auth linkini takip ederek kurulumu tamamlayın
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın
  
  ## Tool Keşfi
  
  Workflow'ları çalıştırmadan önce daima mevcut tool'ları keşfedin:
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Botsonic operations", known_fields: ""}]
  session: {generate_id: true}
  ```
  
  Bu, mevcut tool slug'ları, input schema'larını, önerilen execution plan'larını ve bilinen sorunları döndürür.
  
  ## Temel Workflow Deseni
  
  ### Adım 1: Mevcut Tool'ları Keşfedin
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Botsonic task"}]
  session: {id: "existing_session_id"}
  ```
  
  ### Adım 2: Bağlantıyı Kontrol Edin
  
  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["botsonic"]
  session_id: "your_session_id"
  ```
  
  ### Adım 3: Tool'ları Çalıştırın
  
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
  
  - **Daima önce arayın**: Tool schema'ları değişir. `RUBE_SEARCH_TOOLS` çağırmadan tool slug'ları veya argument'ları asla hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Tool'ları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` durumunun ACTIVE olduğunu doğrulayın
  - **Schema uygunluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında daima `memory` parametresini ekleyin, boş olsa bile (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yeni olanlar oluşturun
  - **Pagination**: Yanıtlarda pagination token'larını kontrol edin ve tamamlanana kadar devam ettirin
  
  ## Hızlı Referans
  
  | İşlem | Yaklaşım |
  |-----------|----------|
  | Tool bul | `RUBE_SEARCH_TOOLS` ile Botsonic'e özel use case |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` ile `botsonic` toolkit'i |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` ile keşfedilen tool slug'ları |
  | Toplu işlem | `RUBE_REMOTE_WORKBENCH` ile `run_composio_tool()` |
  | Tam schema | `RUBE_GET_TOOL_SCHEMAS` ile `schemaRef` parametresi |
  
  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Botsonic Automation via Rube MCP

Automate Botsonic operations through Composio's Botsonic toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/botsonic](https://composio.dev/toolkits/botsonic)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Botsonic connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `botsonic`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `botsonic`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Botsonic operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Botsonic task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["botsonic"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Botsonic-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `botsonic` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
