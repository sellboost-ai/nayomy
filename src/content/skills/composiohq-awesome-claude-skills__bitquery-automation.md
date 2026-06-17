---
name: "bitquery-automation"
description_en: "Automate Bitquery tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Rube MCP (Composio) aracılığıyla Bitquery görevlerini otomatikleştirin. Güncel şemaları bulmak için her zaman araçları önce arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 64852
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/bitquery-automation/SKILL.md"
path: "composio-skills/bitquery-automation/SKILL.md"
is_collection: false
body_length: 2764
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Bitquery Otomasyonu Rube MCP ile

  Bitquery işlemlerini Composio'nun Bitquery toolkit'i aracılığıyla Rube MCP ile otomatikleştirin.

  **Toolkit dokümantasyonu**: [composio.dev/toolkits/bitquery](https://composio.dev/toolkits/bitquery)

  ## Ön Koşullar

  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS mevcut)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Bitquery bağlantısı ve `bitquery` toolkit'i
  - Mevcut tool şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın

  ## Kurulum

  **Rube MCP'yi Alın**: MCP sunucu yapılandırmanıza `https://rube.app/mcp` ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS`'un yanıt verdiğini doğrulayarak Rube MCP'nin mevcut olduğunu onaylayın
  2. `RUBE_MANAGE_CONNECTIONS` ile `bitquery` toolkit'ini çağırın
  3. Bağlantı ACTIVE değilse, setup'ı tamamlamak için döndürülen auth linkini takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu onaylayın

  ## Tool Keşfi

  Workflow'ları çalıştırmadan önce her zaman mevcut tool'ları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Bitquery operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, mevcut tool slug'larını, input şemalarını, önerilen yürütme planlarını ve bilinen sorunları döndürür.

  ## Temel Workflow Deseni

  ### Adım 1: Mevcut Tool'ları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Bitquery task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Edin

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["bitquery"]
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

  - **Her zaman önce arayın**: Tool şemaları değişir. `RUBE_SEARCH_TOOLS`'u çağırmadan tool slug'larını veya argümanlarını asla hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Tool'ları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS`'in ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory` ekleyin, boş olsa bile (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Sayfalandırma**: Yanıtlarda sayfalandırma token'larını kontrol edin ve tümü bitene kadar alma işlemine devam edin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-----------|----------|
  | Tool bulma | `RUBE_SEARCH_TOOLS` ve Bitquery'ye özel use case |
  | Bağlantı | `RUBE_MANAGE_CONNECTIONS` ve `bitquery` toolkit'i |
  | Çalıştırma | `RUBE_MULTI_EXECUTE_TOOL` ve keşfedilen tool slug'ları |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` ve `run_composio_tool()` |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` ve `schemaRef` olan tool'lar |

  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Bitquery Automation via Rube MCP

Automate Bitquery operations through Composio's Bitquery toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/bitquery](https://composio.dev/toolkits/bitquery)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Bitquery connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `bitquery`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `bitquery`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Bitquery operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Bitquery task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["bitquery"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Bitquery-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `bitquery` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
