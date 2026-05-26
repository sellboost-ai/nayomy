---
name: "aivoov-automation"
description_en: "Automate Aivoov tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Aivoov görevlerini Rube MCP (Composio) ile otomatikleştirin. Her zaman geçerli şemaları bulmak için önce tools'ları arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 61753
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/aivoov-automation/SKILL.md"
path: "composio-skills/aivoov-automation/SKILL.md"
is_collection: false
body_length: 2738
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Rube MCP ile Aivoov Otomasyonu

  Composio'nun Aivoov toolkit'i aracılığıyla Rube MCP üzerinden Aivoov işlemlerini otomatikleştirin.

  **Toolkit dokümanları**: [composio.dev/toolkits/aivoov](https://composio.dev/toolkits/aivoov)

  ## Ön Koşullar

  - Rube MCP bağlı olmalı (`RUBE_SEARCH_TOOLS` kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla `aivoov` toolkit'i ile aktif Aivoov bağlantısı
  - Geçerli tool schema'larını almak için her zaman `RUBE_SEARCH_TOOLS` çağrısını yapın

  ## Kurulum

  **Rube MCP'yi edinin**: `https://rube.app/mcp` adresini MCP sunucusu olarak istemci konfigürasyonunuza ekleyin. API anahtarına gerek yok — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt verdiğini doğrulayarak Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `aivoov` toolkit'i ile `RUBE_MANAGE_CONNECTIONS` çağrısını yapın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth linkini izleyin
  4. Herhangi bir workflow'u çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Tool Keşfi

  Workflow'ları çalıştırmadan önce her zaman kullanılabilir tool'ları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Aivoov operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, kullanılabilir tool slug'ları, input schema'larını, önerilen yürütme planlarını ve bilinen sorunları döndürür.

  ## Temel Workflow Deseni

  ### Adım 1: Kullanılabilir Tool'ları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Aivoov task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Edin

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["aivoov"]
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

  - **Her zaman önce arama yapın**: Tool schema'ları değişir. `RUBE_SEARCH_TOOLS` çağrısı yapmadan hiçbir zaman tool slug'larını veya argümanları hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Tool'ları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS`'ın ACTIVE durumunu gösterdiğini doğrulayın
  - **Schema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarına her zaman `memory` parametresini ekleyin, boş olsa bile (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Pagination**: Yanıtları pagination token'ları için kontrol edin ve tamamlanana kadar getirmeye devam edin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-------|----------|
  | Tool'ları bul | `RUBE_SEARCH_TOOLS` ile Aivoov'a özgü use case |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` ile `aivoov` toolkit'i |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` ile keşfedilen tool slug'ları |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` ile `run_composio_tool()` |
  | Tam schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Aivoov Automation via Rube MCP

Automate Aivoov operations through Composio's Aivoov toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/aivoov](https://composio.dev/toolkits/aivoov)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Aivoov connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `aivoov`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `aivoov`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Aivoov operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Aivoov task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["aivoov"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Aivoov-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `aivoov` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
