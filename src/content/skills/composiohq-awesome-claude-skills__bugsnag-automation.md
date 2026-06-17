---
name: "bugsnag-automation"
description_en: "Automate Bugsnag tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Rube MCP (Composio) ile Bugsnag görevlerini otomatikleştirin. Güncel şemaları bulmak için her zaman araçları önce arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 64852
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/bugsnag-automation/SKILL.md"
path: "composio-skills/bugsnag-automation/SKILL.md"
is_collection: false
body_length: 2751
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Bugsnag Otomasyonu via Rube MCP

  Composio'nun Bugsnag araç seti aracılığıyla Rube MCP üzerinden Bugsnag işlemlerini otomatikleştirin.

  **Araç seti dokümanları**: [composio.dev/toolkits/bugsnag](https://composio.dev/toolkits/bugsnag)

  ## Ön Koşullar

  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir olmalıdır)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla `bugsnag` araç seti ile aktif Bugsnag bağlantısı
  - Geçerli tool şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın

  ## Kurulum

  **Rube MCP Alın**: `https://rube.app/mcp` adresini istemci yapılandırmanıza MCP sunucusu olarak ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt vererek Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `bugsnag` araç seti ile `RUBE_MANAGE_CONNECTIONS` çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth bağlantısını takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Tool Keşfi

  Workflow'ları çalıştırmadan önce her zaman kullanılabilir araçları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Bugsnag operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, mevcut tool sluglarını, input şemalarını, önerilen execution planlarını ve bilinen sorunları döndürür.

  ## Temel Workflow Deseni

  ### Adım 1: Mevcut Araçları Keşfet

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Bugsnag task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Et

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["bugsnag"]
  session_id: "your_session_id"
  ```

  ### Adım 3: Araçları Çalıştır

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

  - **Her zaman önce ara**: Tool şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan tool sluglarını veya argümanlarını asla hardcode etmeyin
  - **Bağlantıyı kontrol et**: Araçları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS`'ın ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarındaki tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory` parametresini ekleyin, boş olsa bile (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Sayfalama**: Yanıtlarda sayfalama tokenlarını kontrol edin ve tam bitene kadar almaya devam edin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-----------|----------|
  | Araçları bul | Bugsnag'a özgü use case ile `RUBE_SEARCH_TOOLS` |
  | Bağlan | `bugsnag` araç seti ile `RUBE_MANAGE_CONNECTIONS` |
  | Çalıştır | Keşfedilen tool slugları ile `RUBE_MULTI_EXECUTE_TOOL` |
  | Toplu işlemler | `run_composio_tool()` ile `RUBE_REMOTE_WORKBENCH` |
  | Tam şema | `schemaRef` olan araçlar için `RUBE_GET_TOOL_SCHEMAS` |

  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Bugsnag Automation via Rube MCP

Automate Bugsnag operations through Composio's Bugsnag toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/bugsnag](https://composio.dev/toolkits/bugsnag)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Bugsnag connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `bugsnag`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `bugsnag`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Bugsnag operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Bugsnag task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["bugsnag"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Bugsnag-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `bugsnag` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
