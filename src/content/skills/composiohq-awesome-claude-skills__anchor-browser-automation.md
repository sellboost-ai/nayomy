---
name: "anchor-browser-automation"
description_en: "Automate Anchor Browser tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Anchor Browser görevlerini Rube MCP (Composio) aracılığıyla otomatikleştirin. Her zaman güncel şemaları bulmak için araçları önce arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 61753
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/anchor-browser-automation/SKILL.md"
path: "composio-skills/anchor-browser-automation/SKILL.md"
is_collection: false
body_length: 2842
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Rube MCP aracılığıyla Anchor Browser Otomasyonu

  Composio'nun Anchor Browser araç seti aracılığıyla Rube MCP üzerinden Anchor Browser işlemlerini otomatikleştirin.

  **Araç seti dokümanları**: [composio.dev/toolkits/anchor_browser](https://composio.dev/toolkits/anchor_browser)

  ## Ön Koşullar

  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Anchor Browser bağlantısı (`anchor_browser` araç seti ile)
  - Güncel araç şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın

  ## Kurulum

  **Rube MCP Edinme**: `https://rube.app/mcp` adresini istemci yapılandırınızda bir MCP sunucusu olarak ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt verdiğini doğrulayarak Rube MCP'nin kullanılabilir olduğunu kontrol edin
  2. `anchor_browser` araç seti ile `RUBE_MANAGE_CONNECTIONS` çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen kimlik doğrulama bağlantısını takip edin
  4. Herhangi bir iş akışı çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Araç Keşfi

  İş akışlarını çalıştırmadan önce her zaman kullanılabilir araçları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Anchor Browser operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, kullanılabilir araç slug'larını, giriş şemalarını, önerilen yürütme planlarını ve bilinen sorunları döndürür.

  ## Temel İş Akışı Deseni

  ### Adım 1: Kullanılabilir Araçları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Anchor Browser task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Edin

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["anchor_browser"]
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

  ## Bilinen Sorunlar

  - **Her zaman ilk olarak arama yapın**: Araç şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan araç slug'larını veya argümanlarını asla hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Araçları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` durumunun ACTIVE olduğunu doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adları ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarına her zaman `memory` parametresini ekleyin, boş olsa bile (`{}`)
  - **Oturum yeniden kullanımı**: Bir iş akışı içinde oturum kimliklerini yeniden kullanın. Yeni iş akışları için yenilerini oluşturun
  - **Sayfalandırma**: Yanıtlarda sayfalandırma token'larını kontrol edin ve tamamlanana kadar getirmeye devam edin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-----------|----------|
  | Araçları bul | Anchor Browser'a özgü kullanım durumu ile `RUBE_SEARCH_TOOLS` |
  | Bağlan | `anchor_browser` araç seti ile `RUBE_MANAGE_CONNECTIONS` |
  | Yürüt | Keşfedilen araç slug'ları ile `RUBE_MULTI_EXECUTE_TOOL` |
  | Toplu işlemler | `run_composio_tool()` ile `RUBE_REMOTE_WORKBENCH` |
  | Tam şema | `schemaRef` ile araçlar için `RUBE_GET_TOOL_SCHEMAS` |

  ---
  *Powered by [Composio](https://composio.dev)*
---

# Anchor Browser Automation via Rube MCP

Automate Anchor Browser operations through Composio's Anchor Browser toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/anchor_browser](https://composio.dev/toolkits/anchor_browser)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Anchor Browser connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `anchor_browser`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `anchor_browser`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Anchor Browser operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Anchor Browser task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["anchor_browser"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Anchor Browser-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `anchor_browser` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
