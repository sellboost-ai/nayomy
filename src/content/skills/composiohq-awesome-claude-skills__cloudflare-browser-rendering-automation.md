---
name: "cloudflare-browser-rendering-automation"
description_en: "Automate Cloudflare Browser Rendering tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Cloudflare Browser Rendering görevlerini Rube MCP (Composio) üzerinden otomatikleştirin. Her zaman güncel şemaları için ilk olarak tools içinde arama yapın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 64852
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/cloudflare-browser-rendering-automation/SKILL.md"
path: "composio-skills/cloudflare-browser-rendering-automation/SKILL.md"
is_collection: false
body_length: 3024
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Cloudflare Browser Rendering Otomasyonu via Rube MCP

  Composio'nun Cloudflare Browser Rendering araç kiti aracılığıyla Rube MCP üzerinden Cloudflare Browser Rendering işlemlerini otomatikleştirin.

  **Araç kiti dokümantasyonu**: [composio.dev/toolkits/cloudflare_browser_rendering](https://composio.dev/toolkits/cloudflare_browser_rendering)

  ## Ön Koşullar

  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS mevcut olmalı)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla `cloudflare_browser_rendering` araç kiti ile aktif Cloudflare Browser Rendering bağlantısı
  - Güncel tool şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın

  ## Kurulum

  **Rube MCP Alın**: `https://rube.app/mcp` adresini istemci yapılandırmanızda bir MCP sunucusu olarak ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt verdiğini onaylayarak Rube MCP'nin mevcut olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS` çağırın ve `cloudflare_browser_rendering` araç kitini belirtin
  3. Bağlantı ACTIVE değilse, döndürülen auth linkini takip ederek kurulumu tamamlayın
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu onaylayın

  ## Tool Keşfi

  Workflow'ları yürütmeden önce her zaman mevcut araçları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Cloudflare Browser Rendering operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, mevcut tool slug'ları, input şemaları, önerilen yürütme planları ve bilinen tuzakları döndürür.

  ## Temel Workflow Deseni

  ### Adım 1: Mevcut Araçları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Cloudflare Browser Rendering task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Edin

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["cloudflare_browser_rendering"]
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

  ## Bilinen Tuzaklar

  - **Her zaman önce araştırın**: Tool şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan tool slug'larını veya argümanları asla hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Araçları yürütmeden önce `RUBE_MANAGE_CONNECTIONS` ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarına her zaman `memory` parametresini dahil edin, boş olsa da (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Pagination**: Yanıtları pagination token'ları için kontrol edin ve tamamlanana kadar getirmeye devam edin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-----------|----------|
  | Araçları bul | Cloudflare Browser Rendering'e özgü use case ile `RUBE_SEARCH_TOOLS` |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` ile `cloudflare_browser_rendering` araç kiti |
  | Yürüt | Keşfedilen tool slug'ları ile `RUBE_MULTI_EXECUTE_TOOL` |
  | Toplu işlemler | `run_composio_tool()` ile `RUBE_REMOTE_WORKBENCH` |
  | Tam şema | `schemaRef` olan araçlar için `RUBE_GET_TOOL_SCHEMAS` |

  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Cloudflare Browser Rendering Automation via Rube MCP

Automate Cloudflare Browser Rendering operations through Composio's Cloudflare Browser Rendering toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/cloudflare_browser_rendering](https://composio.dev/toolkits/cloudflare_browser_rendering)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Cloudflare Browser Rendering connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `cloudflare_browser_rendering`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `cloudflare_browser_rendering`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Cloudflare Browser Rendering operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Cloudflare Browser Rendering task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["cloudflare_browser_rendering"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Cloudflare Browser Rendering-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `cloudflare_browser_rendering` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
