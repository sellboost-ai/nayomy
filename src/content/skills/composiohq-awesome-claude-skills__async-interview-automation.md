---
name: "async-interview-automation"
description_en: "Automate Async Interview tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Rube MCP (Composio) ile Async Interview görevlerini otomatikleştirin. Her zaman güncel şemaları bulmak için önce araçları aratın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 64852
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/async-interview-automation/SKILL.md"
path: "composio-skills/async-interview-automation/SKILL.md"
is_collection: false
body_length: 2855
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Rube MCP Aracılığıyla Async Interview Otomasyonu

  Composio'nun Async Interview toolkit'ini Rube MCP aracılığıyla otomatikleştirin.

  **Toolkit dokümantasyonu**: [composio.dev/toolkits/async_interview](https://composio.dev/toolkits/async_interview)

  ## Ön Koşullar

  - Rube MCP bağlı olmalı (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Async Interview bağlantısı ve `async_interview` toolkit'i
  - Her zaman mevcut tool şemalarını almak için `RUBE_SEARCH_TOOLS` çağrısı yapın

  ## Kurulum

  **Rube MCP'yi Alın**: MCP sunucu konfigürasyonunuza `https://rube.app/mcp` ekleyin. API anahtarına gerek yok — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt verdiğini doğrulayarak Rube MCP'nin kullanılabilir olduğunu onaylayın
  2. `RUBE_MANAGE_CONNECTIONS` çağrısı yapın ve `async_interview` toolkit'ini belirtin
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth linkini takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu onaylayın

  ## Tool Bulma

  Workflow'ları çalıştırmadan önce her zaman kullanılabilir tool'ları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Async Interview operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, kullanılabilir tool slug'ları, input şemalarını, önerilen execution planlarını ve bilinen sorunları döndürür.

  ## Temel Workflow Deseni

  ### Adım 1: Mevcut Tool'ları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Async Interview task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Edin

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["async_interview"]
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

  - **Her zaman önce arayın**: Tool şemaları değişebilir. `RUBE_SEARCH_TOOLS` çağrısı yapmadan asla tool slug'ları veya argümanları hardcoded şekilde kodlamayın
  - **Bağlantıyı kontrol edin**: Tool'ları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS`'ın ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uyumu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory` ekleyin, boş olsa bile (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Pagination**: Yanıtlarda pagination token'larını kontrol edin ve tamamlanana kadar getirmeye devam edin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-----------|----------|
  | Tool bul | `RUBE_SEARCH_TOOLS` ile Async Interview'a özel use case |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` ve `async_interview` toolkit'i |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` ile keşfedilen tool slug'ları |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` ile `run_composio_tool()` |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` ve `schemaRef` olan tool'lar |

  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Async Interview Automation via Rube MCP

Automate Async Interview operations through Composio's Async Interview toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/async_interview](https://composio.dev/toolkits/async_interview)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Async Interview connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `async_interview`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `async_interview`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Async Interview operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Async Interview task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["async_interview"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Async Interview-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `async_interview` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
