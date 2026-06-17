---
name: "auth0-automation"
description_en: "Automate Auth0 tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Auth0 görevlerini Rube MCP (Composio) aracılığıyla otomatikleştirin. Her zaman güncel şemaları için önce araçları arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 64852
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/auth0-automation/SKILL.md"
path: "composio-skills/auth0-automation/SKILL.md"
is_collection: false
body_length: 2725
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Auth0 Otomasyonu via Rube MCP

  Rube MCP üzerinden Composio'nun Auth0 toolkit'ini kullanarak Auth0 operasyonlarını otomatikleştirin.

  **Toolkit dokümanları**: [composio.dev/toolkits/auth0](https://composio.dev/toolkits/auth0)

  ## Ön Koşullar

  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir olmalı)
  - `RUBE_MANAGE_CONNECTIONS` üzerinden aktif Auth0 bağlantısı (toolkit `auth0` ile)
  - Mevcut tool şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın

  ## Kurulum

  **Rube MCP'yi Alın**: İstemci yapılandırmanızda `https://rube.app/mcp` adresini MCP sunucusu olarak ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt vererek Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS` toolkit `auth0` ile çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth linkini takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Tool Keşfi

  Workflow'ları çalıştırmadan önce her zaman mevcut tool'ları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Auth0 operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, mevcut tool slug'ları, input şemalarını, önerilen yürütme planlarını ve bilinen sorunları döndürür.

  ## Temel Workflow Deseni

  ### Adım 1: Mevcut Tool'ları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Auth0 task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Edin

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["auth0"]
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

  - **Her zaman önce arayın**: Tool şemaları değişebilir. `RUBE_SEARCH_TOOLS` çağrısı yapmadan asla tool slug'larını veya argümanları sabit kodlamayın
  - **Bağlantıyı kontrol edin**: Tool'ları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` durumunun ACTIVE olduğunu doğrulayın
  - **Şema uyumu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory` ekleyin, boş olsa da (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenileri oluşturun
  - **Pagination**: Yanıtlarda pagination token'larını kontrol edin ve tamamlanana kadar getirmeye devam edin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-------|----------|
  | Tool'ları bul | `RUBE_SEARCH_TOOLS` Auth0'ya özgü use case ile |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` toolkit `auth0` ile |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` keşfedilen tool slug'ları ile |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` ile `run_composio_tool()` |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` `schemaRef` ile tool'lar için |

  ---
  *Powered by [Composio](https://composio.dev)*
---

# Auth0 Automation via Rube MCP

Automate Auth0 operations through Composio's Auth0 toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/auth0](https://composio.dev/toolkits/auth0)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Auth0 connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `auth0`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `auth0`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Auth0 operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Auth0 task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["auth0"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Auth0-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `auth0` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
