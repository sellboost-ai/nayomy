---
name: "composio-search-automation"
description_en: "Automate Composio Search tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Composio Search görevlerini Rube MCP (Composio) aracılığıyla otomatikleştirin. Güncel şemaları için her zaman arama araçlarını önce kontrol edin."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 64852
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/composio-search-automation/SKILL.md"
path: "composio-skills/composio-search-automation/SKILL.md"
is_collection: false
body_length: 2855
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Composio Search Otomasyonu Rube MCP Aracılığıyla

  Composio Search işlemlerini Composio'nun Composio Search toolkit'i aracılığıyla Rube MCP ile otomatikleştirin.

  **Toolkit dokümanları**: [composio.dev/toolkits/composio_search](https://composio.dev/toolkits/composio_search)

  ## Ön Koşullar

  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Composio Search bağlantısı ve `composio_search` toolkit'i
  - Mevcut tool şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` öğesini çağırın

  ## Kurulum

  **Rube MCP'yi Alın**: `https://rube.app/mcp` adresini istemci konfigürasyonunuza MCP sunucusu olarak ekleyin. API anahtarı gerekmez — endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt vererek Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS` öğesini `composio_search` toolkit'i ile çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth linkini izleyin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Tool Keşfi

  Workflow'ları yürütmeden önce her zaman kullanılabilir tool'ları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Composio Search operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, kullanılabilir tool slug'ları, input şemaları, önerilen yürütme planlarını ve bilinen sorunları döndürür.

  ## Temel Workflow Deseni

  ### Adım 1: Kullanılabilir Tool'ları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Composio Search task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Edin

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["composio_search"]
  session_id: "your_session_id"
  ```

  ### Adım 3: Tool'ları Yürütün

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

  - **Her zaman önce ara**: Tool şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan asla tool slug'ları veya argümanları hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Tool'ları yürütmeden önce `RUBE_MANAGE_CONNECTIONS` öğesinin ACTIVE durumu gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarına her zaman `memory` parametresini ekleyin, boş olsa bile (`{}`)
  - **Session yeniden kullanımı**: Workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Sayfalandırma**: Yanıtları sayfalandırma token'ları açısından kontrol edin ve tamamlanana kadar getirmeye devam edin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-----------|----------|
  | Tool'ları bul | `RUBE_SEARCH_TOOLS` ile Composio Search-spesifik use case |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` ile `composio_search` toolkit'i |
  | Yürüt | `RUBE_MULTI_EXECUTE_TOOL` ile keşfedilen tool slug'ları |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` ile `run_composio_tool()` |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` `schemaRef` olan tool'lar için |

  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Composio Search Automation via Rube MCP

Automate Composio Search operations through Composio's Composio Search toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/composio_search](https://composio.dev/toolkits/composio_search)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Composio Search connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `composio_search`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `composio_search`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Composio Search operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Composio Search task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["composio_search"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Composio Search-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `composio_search` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
