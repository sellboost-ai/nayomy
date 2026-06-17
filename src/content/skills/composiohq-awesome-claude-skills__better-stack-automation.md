---
name: "better-stack-automation"
description_en: "Automate Better Stack tasks via Rube MCP (Composio). Always search tools first for current schemas."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 64919
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/better-stack-automation/SKILL.md"
path: "composio-skills/better-stack-automation/SKILL.md"
is_collection: false
body_length: 2816
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Rube MCP Aracılığıyla Better Stack Otomasyonu
  
  Composio'nun Better Stack toolkit'ini Rube MCP aracılığıyla kullanarak Better Stack işlemlerini otomatikleştirin.
  
  **Toolkit dokümantasyonu**: [composio.dev/toolkits/better_stack](https://composio.dev/toolkits/better_stack)
  
  ## Ön Koşullar
  
  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir durumda)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Better Stack bağlantısı (`better_stack` toolkit'i ile)
  - Geçerli araç şemalarını almak için her zaman önce `RUBE_SEARCH_TOOLS` çağırın
  
  ## Kurulum
  
  **Rube MCP'yi Edinin**: MCP sunucusu olarak `https://rube.app/mcp` adresini istemci konfigürasyonunuza ekleyin. API anahtarına gerek yoktur — sadece endpoint'i ekleyin ve çalışır.
  
  1. `RUBE_SEARCH_TOOLS` yanıt verip vermediğini kontrol ederek Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS`'ı `better_stack` toolkit'i ile çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth linkini takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın
  
  ## Araç Keşfi
  
  Workflow'ları çalıştırmadan önce her zaman mevcut araçları keşfedin:
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Better Stack operations", known_fields: ""}]
  session: {generate_id: true}
  ```
  
  Bu, mevcut araç slug'larını, input şemalarını, önerilen execution plan'larını ve bilinen sorunları döndürür.
  
  ## Temel Workflow Deseni
  
  ### Adım 1: Mevcut Araçları Keşfedin
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Better Stack task"}]
  session: {id: "existing_session_id"}
  ```
  
  ### Adım 2: Bağlantıyı Kontrol Edin
  
  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["better_stack"]
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
  
  - **Her zaman önce arayın**: Araç şemaları değişebilir. `RUBE_SEARCH_TOOLS` çağrısı yapmadan araç slug'larını veya argümanlarını asla hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Araçları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS`'ın ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uygunluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarına her zaman `memory` ekleyin, boş olsa da (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenisini oluşturun
  - **Pagination**: Yanıtlarda pagination token'larını kontrol edin ve tamamlanana kadar almaya devam edin
  
  ## Hızlı Referans
  
  | İşlem | Yaklaşım |
  |-----------|----------|
  | Araçları bul | `RUBE_SEARCH_TOOLS` (Better Stack'e özel use case ile) |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` (`better_stack` toolkit'i ile) |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` (keşfedilmiş araç slug'ları ile) |
  | Toplu işlem | `RUBE_REMOTE_WORKBENCH` (`run_composio_tool()` ile) |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` (`schemaRef` olan araçlar için) |
  
  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Better Stack Automation via Rube MCP

Automate Better Stack operations through Composio's Better Stack toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/better_stack](https://composio.dev/toolkits/better_stack)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Better Stack connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `better_stack`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `better_stack`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Better Stack operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Better Stack task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["better_stack"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Better Stack-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `better_stack` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
