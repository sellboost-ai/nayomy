---
name: "agencyzoom-automation"
description_en: "Automate Agencyzoom tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Rube MCP (Composio) aracılığıyla Agencyzoom görevlerini otomatikleştirin. Her zaman en güncel şemaları için önce araçları arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 61753
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/agencyzoom-automation/SKILL.md"
path: "composio-skills/agencyzoom-automation/SKILL.md"
is_collection: false
body_length: 2790
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Agencyzoom Otomasyonu Rube MCP ile

  Composio'nun Agencyzoom araç seti aracılığıyla Rube MCP ile Agencyzoom operasyonlarını otomatikleştirin.

  **Araç seti belgeleri**: [composio.dev/toolkits/agencyzoom](https://composio.dev/toolkits/agencyzoom)

  ## Ön Koşullar

  - Rube MCP bağlı olmalı (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` ile aktif Agencyzoom bağlantısı ve `agencyzoom` araç seti
  - Mevcut araç şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın

  ## Kurulum

  **Rube MCP'yi Alın**: İstemci yapılandırmanızda MCP sunucusu olarak `https://rube.app/mcp` ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt vererek Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS`'ı `agencyzoom` araç seti ile çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth linkini izleyin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Araç Keşfi

  Workflow'ları yürütmeden önce her zaman mevcut araçları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Agencyzoom operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, mevcut araç slug'larını, input şemalarını, önerilen yürütme planlarını ve bilinen zorlukları döndürür.

  ## Temel Workflow Deseni

  ### Adım 1: Mevcut Araçları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Agencyzoom task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Edin

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["agencyzoom"]
  session_id: "your_session_id"
  ```

  ### Adım 3: Araçları Yürütün

  ```
  RUBE_MULTI_EXECUTE_TOOL
  tools: [{
    tool_slug: "TOOL_SLUG_FROM_SEARCH",
    arguments: {/* schema-compliant args from search results */}
  }]
  memory: {}
  session_id: "your_session_id"
  ```

  ## Bilinen Zorluklar

  - **Her zaman ilk önce arayın**: Araç şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan araç slug'larını veya argümanlarını asla hardcoded yapmayın
  - **Bağlantıyı kontrol edin**: Araçları yürütmeden önce `RUBE_MANAGE_CONNECTIONS`'ın ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uygunluğu**: Arama sonuçlarından tam alan adları ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarına her zaman `memory` ekleyin, boş olsa bile (`{}`)
  - **Session yeniden kullanımı**: Workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Sayfalandırma**: Yanıtlarda sayfalandırma token'ları kontrol edin ve tamamlanana kadar getirmeye devam edin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-----------|----------|
  | Araçları bul | Agencyzoom'a özel use case ile `RUBE_SEARCH_TOOLS` |
  | Bağlan | `agencyzoom` araç seti ile `RUBE_MANAGE_CONNECTIONS` |
  | Yürüt | Keşfedilen araç slug'ları ile `RUBE_MULTI_EXECUTE_TOOL` |
  | Toplu işlemler | `run_composio_tool()` ile `RUBE_REMOTE_WORKBENCH` |
  | Tam şema | `schemaRef` olan araçlar için `RUBE_GET_TOOL_SCHEMAS` |

  ---
  *Powered by [Composio](https://composio.dev)*
---

# Agencyzoom Automation via Rube MCP

Automate Agencyzoom operations through Composio's Agencyzoom toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/agencyzoom](https://composio.dev/toolkits/agencyzoom)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Agencyzoom connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `agencyzoom`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `agencyzoom`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Agencyzoom operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Agencyzoom task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["agencyzoom"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Agencyzoom-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `agencyzoom` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
