---
name: "battlenet-automation"
description_en: "Automate Battlenet tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Rube MCP (Composio) ile Battlenet görevlerini otomatikleştirin. Güncel schemaları için her zaman önce tools'u araştırın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 65377
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/battlenet-automation/SKILL.md"
path: "composio-skills/battlenet-automation/SKILL.md"
is_collection: false
body_length: 2777
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Battlenet Otomasyonu Rube MCP ile
  
  Composio'nun Battlenet toolkit'i aracılığıyla Rube MCP üzerinden Battlenet işlemlerini otomatikleştirin.
  
  **Toolkit dokümantasyonu**: [composio.dev/toolkits/battlenet](https://composio.dev/toolkits/battlenet)
  
  ## Ön Koşullar
  
  - Rube MCP bağlanmış olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Battlenet bağlantısı ve `battlenet` toolkit'i
  - Daima mevcut araç şemalarını almak için `RUBE_SEARCH_TOOLS` çağrısı yapın
  
  ## Kurulum
  
  **Rube MCP'yi edinin**: MCP sunucusu olarak istemci yapılandırmanızda `https://rube.app/mcp` ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.
  
  1. `RUBE_SEARCH_TOOLS` yanıtının geldiğini doğrulayarak Rube MCP'nin kullanılabilir olduğunu kontrol edin
  2. `RUBE_MANAGE_CONNECTIONS` çağrısını `battlenet` toolkit'i ile yapın
  3. Eğer bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth linkini izleyin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın
  
  ## Araç Keşfi
  
  Workflow'ları yürütmeden önce daima mevcut araçları keşfedin:
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Battlenet operations", known_fields: ""}]
  session: {generate_id: true}
  ```
  
  Bu, mevcut araç slug'larını, input şemalarını, önerilen yürütme planlarını ve bilinen sorunları döndürür.
  
  ## Temel Workflow Deseni
  
  ### Adım 1: Mevcut Araçları Keşfet
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Battlenet task"}]
  session: {id: "existing_session_id"}
  ```
  
  ### Adım 2: Bağlantıyı Kontrol Et
  
  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["battlenet"]
  session_id: "your_session_id"
  ```
  
  ### Adım 3: Araçları Yürüt
  
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
  
  - **Daima önce arayın**: Araç şemaları değişir. `RUBE_SEARCH_TOOLS` çağrısı yapmadan araç slug'larını veya argümanlarını asla hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Araçları yürütmeden önce `RUBE_MANAGE_CONNECTIONS` durumunun ACTIVE gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında daima `memory` parametresini ekleyin, boş olsa bile (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Pagination**: Pagination token'ları için yanıtları kontrol edin ve tamamlanıncaya kadar getirmeye devam edin
  
  ## Hızlı Referans
  
  | İşlem | Yaklaşım |
  |-------|----------|
  | Araçları bul | `RUBE_SEARCH_TOOLS` ile Battlenet'e özgü use case |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` ile `battlenet` toolkit'i |
  | Yürüt | `RUBE_MULTI_EXECUTE_TOOL` ile keşfedilmiş araç slug'ları |
  | Toplu işlem | `RUBE_REMOTE_WORKBENCH` ile `run_composio_tool()` |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` ile `schemaRef` araçları için |
  
  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Battlenet Automation via Rube MCP

Automate Battlenet operations through Composio's Battlenet toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/battlenet](https://composio.dev/toolkits/battlenet)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Battlenet connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `battlenet`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `battlenet`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Battlenet operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Battlenet task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["battlenet"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Battlenet-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `battlenet` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
