---
name: "api2pdf-automation"
description_en: "Automate Api2pdf tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Api2pdf görevlerini Rube MCP (Composio) aracılığıyla otomatikleştirin. Her zaman güncel şemaları kontrol etmek için önce araçları arayın."
category: "Document"
repo: "ComposioHQ/awesome-claude-skills"
stars: 61753
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/api2pdf-automation/SKILL.md"
path: "composio-skills/api2pdf-automation/SKILL.md"
is_collection: false
body_length: 2751
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Rube MCP Aracılığıyla Api2pdf Otomasyonu

  Composio'nun Api2pdf toolkit'i aracılığıyla Rube MCP üzerinden Api2pdf işlemlerini otomatikleştirin.

  **Toolkit dokümantasyonu**: [composio.dev/toolkits/api2pdf](https://composio.dev/toolkits/api2pdf)

  ## Ön Koşullar

  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Api2pdf bağlantısı ve `api2pdf` toolkit'i
  - Her zaman mevcut tool şemalarını almak için `RUBE_SEARCH_TOOLS` çağrısı yapın

  ## Kurulum

  **Rube MCP Edinin**: `https://rube.app/mcp` adresini istemci konfigürasyonunuzda MCP server olarak ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt verdiğini doğrulayarak Rube MCP'nin kullanılabilir olduğunu kontrol edin
  2. `RUBE_MANAGE_CONNECTIONS` çağrısı yapın ve toolkit olarak `api2pdf` belirtin
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth linkini takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Tool Discovery

  Workflow'ları çalıştırmadan önce her zaman mevcut tool'ları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Api2pdf operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, mevcut tool slug'ları, input şemaları, önerilen execution planları ve bilinen sorunları döndürür.

  ## Temel Workflow Deseni

  ### Adım 1: Mevcut Tool'ları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Api2pdf task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Edin

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["api2pdf"]
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

  - **Her zaman önce arama yapın**: Tool şemaları değişebilir. `RUBE_SEARCH_TOOLS` çağrısı yapmadan asla tool slug'ları veya argümanları hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Tool'ları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` ACTIVE durumunu gösteriyor mu kontrol edin
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adları ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarına her zaman `memory` parametresi ekleyin, boş olsa bile (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Sayfalama**: Yanıtlarda sayfalama token'ları olup olmadığını kontrol edin ve işlem tamamlanana kadar getirmeye devam edin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-----------|----------|
  | Tool'ları bulma | `RUBE_SEARCH_TOOLS` ile Api2pdf'e özgü use case |
  | Bağlanma | `RUBE_MANAGE_CONNECTIONS` ile toolkit olarak `api2pdf` |
  | Çalıştırma | `RUBE_MULTI_EXECUTE_TOOL` ile keşfedilen tool slug'ları |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` ile `run_composio_tool()` |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` ile `schemaRef` olan tool'lar için |

  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Api2pdf Automation via Rube MCP

Automate Api2pdf operations through Composio's Api2pdf toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/api2pdf](https://composio.dev/toolkits/api2pdf)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Api2pdf connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `api2pdf`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `api2pdf`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Api2pdf operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Api2pdf task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["api2pdf"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Api2pdf-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `api2pdf` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
