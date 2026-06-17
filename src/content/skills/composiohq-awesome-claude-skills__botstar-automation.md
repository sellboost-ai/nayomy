---
name: "botstar-automation"
description_en: "Automate Botstar tasks via Rube MCP (Composio). Always search tools first for current schemas."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 64919
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/botstar-automation/SKILL.md"
path: "composio-skills/botstar-automation/SKILL.md"
is_collection: false
body_length: 2751
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Botstar Otomasyonu Rube MCP ile
  
  Composio'nun Botstar toolkit'i aracılığıyla Rube MCP kullanarak Botstar işlemlerini otomatikleştirin.
  
  **Toolkit dokümanları**: [composio.dev/toolkits/botstar](https://composio.dev/toolkits/botstar)
  
  ## Ön Koşullar
  
  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS mevcut)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Botstar bağlantısı ve `botstar` toolkit'i
  - Her zaman mevcut tool şemalarını almak için önce `RUBE_SEARCH_TOOLS` çağırın
  
  ## Kurulum
  
  **Rube MCP'yi Edinin**: `https://rube.app/mcp` adresini istemci konfigürasyonunuzda bir MCP server'ı olarak ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.
  
  1. `RUBE_SEARCH_TOOLS` yanıtını doğrulayarak Rube MCP'nin mevcut olduğunu kontrol edin
  2. `RUBE_MANAGE_CONNECTIONS` öğesini `botstar` toolkit'i ile çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen yetkilendirme bağlantısını takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın
  
  ## Tool Keşfi
  
  Workflow'ları çalıştırmadan önce her zaman mevcut tool'ları keşfedin:
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Botstar operations", known_fields: ""}]
  session: {generate_id: true}
  ```
  
  Bu, mevcut tool slug'ları, input şemaları, önerilen yürütme planları ve bilinen tuzakları döndürür.
  
  ## Temel Workflow Deseni
  
  ### Adım 1: Mevcut Tool'ları Keşfedin
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Botstar task"}]
  session: {id: "existing_session_id"}
  ```
  
  ### Adım 2: Bağlantıyı Kontrol Edin
  
  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["botstar"]
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
  
  - **Her zaman önce arayın**: Tool şemaları değişir. `RUBE_SEARCH_TOOLS` çağırılmadan tool slug'ları veya argümanları asla hardcode'lamayın
  - **Bağlantıyı kontrol edin**: Tool'ları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` öğesinin ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uygunluğu**: Arama sonuçlarından tam alan adları ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory` parametresini ekleyin, boş olsa bile (`{}`)
  - **Session tekrar kullanımı**: Bir workflow içinde session ID'lerini tekrar kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Pagination**: Yanıtlarda pagination token'larını kontrol edin ve eksiksiz olana kadar almaya devam edin
  
  ## Hızlı Referans
  
  | İşlem | Yaklaşım |
  |-----------|----------|
  | Tool'ları bul | `RUBE_SEARCH_TOOLS` ile Botstar'a özgü use case |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` ile `botstar` toolkit'i |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` ile keşfedilen tool slug'ları |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` ile `run_composio_tool()` |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` ile `schemaRef` olan tool'lar için |
  
  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Botstar Automation via Rube MCP

Automate Botstar operations through Composio's Botstar toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/botstar](https://composio.dev/toolkits/botstar)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Botstar connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `botstar`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `botstar`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Botstar operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Botstar task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["botstar"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Botstar-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `botstar` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
