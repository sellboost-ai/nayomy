---
name: "api-bible-automation"
description_en: "Automate API Bible tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "API Bible görevlerini Rube MCP (Composio) aracılığıyla otomatikleştirin. Güncel şemalar için her zaman araçları önce arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 61753
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/api-bible-automation/SKILL.md"
path: "composio-skills/api-bible-automation/SKILL.md"
is_collection: false
body_length: 2777
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Rube MCP aracılığıyla API Bible Otomasyonu

  Composio'nun API Bible araç seti üzerinden Rube MCP aracılığıyla API Bible işlemlerini otomatikleştirin.

  **Araç seti dokümanları**: [composio.dev/toolkits/api_bible](https://composio.dev/toolkits/api_bible)

  ## Ön Koşullar

  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla `api_bible` araç seti ile aktif API Bible bağlantısı
  - Mevcut tool şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın

  ## Kurulum

  **Rube MCP'yi Edinin**: İstemci konfigürasyonunuzda `https://rube.app/mcp` adresini MCP sunucusu olarak ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt verdiğini doğrulayarak Rube MCP'nin kullanılabilir olduğunu kontrol edin
  2. `RUBE_MANAGE_CONNECTIONS` çağırın ve `api_bible` araç setini belirtin
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için dönen kimlik doğrulama bağlantısını takip edin
  4. Herhangi bir workflow'u çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Tool Discovery (Tool Keşfi)

  Workflow'ları yürütmeden önce her zaman mevcut tool'ları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "API Bible operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, mevcut tool slug'larını, input şemalarını, önerilen yürütme planlarını ve bilinen sorunları döndürür.

  ## Temel Workflow Deseni

  ### Adım 1: Mevcut Tool'ları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific API Bible task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Edin

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["api_bible"]
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

  - **Her zaman önce arama yapın**: Tool şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan asla tool slug'larını veya argümanlarını sabit kodlamayın
  - **Bağlantıyı kontrol edin**: Tool'ları yürütmeden önce `RUBE_MANAGE_CONNECTIONS` öğesinin ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarındaki tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarına her zaman `memory` parametresini ekleyin, boş olsa bile (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Pagination**: Yanıtlarda pagination token'larını kontrol edin ve tamamlanana kadar getirmeye devam edin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-----------|----------|
  | Tool'ları bul | API Bible'a özgü use case ile `RUBE_SEARCH_TOOLS` |
  | Bağlan | `api_bible` araç seti ile `RUBE_MANAGE_CONNECTIONS` |
  | Yürüt | Keşfedilen tool slug'ları ile `RUBE_MULTI_EXECUTE_TOOL` |
  | Toplu işlemler | `run_composio_tool()` ile `RUBE_REMOTE_WORKBENCH` |
  | Tam şema | `schemaRef` ile tool'lar için `RUBE_GET_TOOL_SCHEMAS` |

  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# API Bible Automation via Rube MCP

Automate API Bible operations through Composio's API Bible toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/api_bible](https://composio.dev/toolkits/api_bible)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active API Bible connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `api_bible`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `api_bible`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "API Bible operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific API Bible task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["api_bible"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with API Bible-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `api_bible` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
