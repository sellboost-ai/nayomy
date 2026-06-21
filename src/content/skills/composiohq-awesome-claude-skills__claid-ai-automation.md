---
name: "claid-ai-automation"
description_en: "Automate Claid AI tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Rube MCP (Composio) aracılığıyla Claid AI görevlerini otomatikleştirin. Güncel şemaları için her zaman önce tools'da arama yapın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 65377
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/claid-ai-automation/SKILL.md"
path: "composio-skills/claid-ai-automation/SKILL.md"
is_collection: false
body_length: 2764
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Claid AI Automation via Rube MCP
  
  Rube MCP aracılığıyla Composio'nun Claid AI toolkit'ini kullanarak Claid AI işlemlerini otomatikleştirin.
  
  **Toolkit dokümanları**: [composio.dev/toolkits/claid_ai](https://composio.dev/toolkits/claid_ai)
  
  ## Ön Koşullar
  
  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla `claid_ai` toolkit'i ile aktif Claid AI bağlantısı
  - Mevcut tool schema'larını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın
  
  ## Kurulum
  
  **Rube MCP'yi Alın**: MCP sunucu yapılandırmasında `https://rube.app/mcp` ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.
  
  1. `RUBE_SEARCH_TOOLS` yanıt verdiğini doğrulayarak Rube MCP'nin kullanılabilir olduğunu kontrol edin
  2. `RUBE_MANAGE_CONNECTIONS` çağırın ve `claid_ai` toolkit'ini belirtin
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth bağlantısını takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın
  
  ## Tool Discovery
  
  Workflow'ları çalıştırmadan önce her zaman mevcut tool'ları keşfedin:
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Claid AI operations", known_fields: ""}]
  session: {generate_id: true}
  ```
  
  Bu, mevcut tool slug'ları, input schema'larını, önerilen execution planlarını ve bilinen sorunları döndürür.
  
  ## Temel Workflow Deseni
  
  ### Adım 1: Mevcut Tool'ları Keşfedin
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Claid AI task"}]
  session: {id: "existing_session_id"}
  ```
  
  ### Adım 2: Bağlantıyı Kontrol Edin
  
  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["claid_ai"]
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
  
  - **Her zaman önce ara**: Tool schema'ları değişebilir. `RUBE_SEARCH_TOOLS` çağırmadan tool slug'larını veya argümanlarını asla hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Tool'ları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` durumunun ACTIVE olduğunu doğrulayın
  - **Schema uyumluluğu**: Arama sonuçlarından tam alan adları ve türleri kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarına her zaman `memory` ekleyin, boş olsa bile (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Pagination**: Yanıtlarda pagination token'larını kontrol edin ve tamamlanana kadar almaya devam edin
  
  ## Hızlı Referans
  
  | İşlem | Yaklaşım |
  |-----------|----------|
  | Tool'ları bul | `RUBE_SEARCH_TOOLS` Claid AI'a özel use case ile |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` `claid_ai` toolkit'i ile |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` keşfedilmiş tool slug'ları ile |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` `run_composio_tool()` ile |
  | Tam schema | `RUBE_GET_TOOL_SCHEMAS` `schemaRef` olan tool'lar için |
  
  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Claid AI Automation via Rube MCP

Automate Claid AI operations through Composio's Claid AI toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/claid_ai](https://composio.dev/toolkits/claid_ai)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Claid AI connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `claid_ai`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `claid_ai`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Claid AI operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Claid AI task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["claid_ai"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Claid AI-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `claid_ai` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
