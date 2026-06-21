---
name: "canny-automation"
description_en: "Automate Canny tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Canny görevlerini Rube MCP (Composio) aracılığıyla otomatikleştirin. Geçerli şemaları bulmak için her zaman önce araçları arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 65377
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/canny-automation/SKILL.md"
path: "composio-skills/canny-automation/SKILL.md"
is_collection: false
body_length: 2725
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Rube MCP aracılığıyla Canny Otomasyonu
  
  Composio'nun Canny toolkit'ini Rube MCP aracılığıyla kullanarak Canny işlemlerini otomatikleştirin.
  
  **Toolkit dokümantasyonu**: [composio.dev/toolkits/canny](https://composio.dev/toolkits/canny)
  
  ## Ön Koşullar
  
  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Canny bağlantısı ve `canny` toolkit'i
  - Geçerli tool şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın
  
  ## Kurulum
  
  **Rube MCP'yi Edinin**: MCP sunucusu olarak istemci konfigürasyonunuza `https://rube.app/mcp` ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.
  
  1. `RUBE_SEARCH_TOOLS` yanıt verip vermediğini kontrol ederek Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS` çağırın ve `canny` toolkit'ini belirtin
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth bağlantısını izleyin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu onaylayın
  
  ## Tool Keşfi
  
  Workflow'ları çalıştırmadan önce her zaman kullanılabilir tool'ları keşfedin:
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Canny operations", known_fields: ""}]
  session: {generate_id: true}
  ```
  
  Bu, kullanılabilir tool slug'ları, input şemaları, önerilen execution plan'ları ve bilinen tuzakları döndürür.
  
  ## Temel Workflow Deseni
  
  ### Adım 1: Kullanılabilir Tool'ları Keşfedin
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Canny task"}]
  session: {id: "existing_session_id"}
  ```
  
  ### Adım 2: Bağlantıyı Kontrol Edin
  
  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["canny"]
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
  
  ## Bilinen Tuzaklar
  
  - **Her zaman önce arayın**: Tool şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan tool slug'ları veya argümanları sabit kod olarak yazılamaz
  - **Bağlantıyı kontrol edin**: Tool'ları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory` ekleyin, boş (`{}`) olsa bile
  - **Session yeniden kullanımı**: Workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Pagination**: Yanıtları pagination token'ları açısından kontrol edin ve tamamlanana kadar fetching devam ettirin
  
  ## Hızlı Referans
  
  | İşlem | Yaklaşım |
  |-----------|----------|
  | Tool'ları bul | `RUBE_SEARCH_TOOLS` Canny'ye özgü use case ile |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` `canny` toolkit'i ile |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` keşfedilen tool slug'ları ile |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` `run_composio_tool()` ile |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` `schemaRef` olan tool'lar için |
  
  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Canny Automation via Rube MCP

Automate Canny operations through Composio's Canny toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/canny](https://composio.dev/toolkits/canny)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Canny connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `canny`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `canny`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Canny operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Canny task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["canny"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Canny-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `canny` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
