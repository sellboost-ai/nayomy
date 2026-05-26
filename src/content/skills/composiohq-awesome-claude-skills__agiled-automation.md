---
name: "agiled-automation"
description_en: "Automate Agiled tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Rube MCP (Composio) ile Agiled görevlerini otomatikleştirin. Her zaman güncel şemaları için önce tools içinde arama yapın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 61753
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/agiled-automation/SKILL.md"
path: "composio-skills/agiled-automation/SKILL.md"
is_collection: false
body_length: 2738
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Rube MCP Aracılığıyla Agiled Otomasyonu

  Composio'nun Agiled toolkit'ini Rube MCP aracılığıyla kullanarak Agiled işlemlerini otomatikleştirin.

  **Toolkit dokümanları**: [composio.dev/toolkits/agiled](https://composio.dev/toolkits/agiled)

  ## Ön Koşullar

  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir durumda)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Agiled bağlantısı (toolkit: `agiled`)
  - Mevcut tool şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın

  ## Kurulum

  **Rube MCP'yi alın**: MCP sunucu yapılandırmanıza `https://rube.app/mcp` ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt verdiğini doğrulayarak Rube MCP'nin kullanılabilir olduğunu kontrol edin
  2. `RUBE_MANAGE_CONNECTIONS`'ı toolkit `agiled` ile çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için dönen auth linkini takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Tool Discovery

  Workflow'ları çalıştırmadan önce her zaman kullanılabilir tool'ları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Agiled operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, kullanılabilir tool slug'ları, input şemalarını, önerilen execution planlarını ve bilinen sorunları döndürür.

  ## Temel Workflow Deseni

  ### Adım 1: Kullanılabilir Tool'ları Keşfet

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Agiled task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Et

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["agiled"]
  session_id: "your_session_id"
  ```

  ### Adım 3: Tool'ları Çalıştır

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

  - **Her zaman önce ara**: Tool şemaları değişir. `RUBE_SEARCH_TOOLS`'ı çağırmadan tool slug'ları veya parametreleri asla hardcode etmeyin
  - **Bağlantıyı kontrol et**: Tool'ları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS`'ın ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarına her zaman `memory` ekleyin, boş bile olsa (`{}`)
  - **Session yeniden kullanımı**: Workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Pagination**: Yanıtlarda pagination token'larını kontrol edin ve tamamlanana kadar getirmeye devam edin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-------|----------|
  | Tool bul | `RUBE_SEARCH_TOOLS`'u Agiled'e özgü use case ile çağır |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS`'ı toolkit `agiled` ile çağır |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL`'u keşfedilen tool slug'ları ile çalıştır |
  | Toplu işlem | `RUBE_REMOTE_WORKBENCH`'i `run_composio_tool()` ile çalıştır |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS`'ı `schemaRef` olan tool'lar için çalıştır |

  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Agiled Automation via Rube MCP

Automate Agiled operations through Composio's Agiled toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/agiled](https://composio.dev/toolkits/agiled)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Agiled connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `agiled`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `agiled`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Agiled operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Agiled task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["agiled"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Agiled-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `agiled` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
