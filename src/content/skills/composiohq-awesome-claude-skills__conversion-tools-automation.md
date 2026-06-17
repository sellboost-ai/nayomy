---
name: "conversion-tools-automation"
description_en: "Automate Conversion Tools tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Rube MCP (Composio) aracılığıyla Conversion Tools görevlerini otomatikleştirin. Her zaman güncel şemaları için araçları önce arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 64852
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/conversion-tools-automation/SKILL.md"
path: "composio-skills/conversion-tools-automation/SKILL.md"
is_collection: false
body_length: 2868
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Dönüştürme Araçları Otomasyonu via Rube MCP

  Composio'nun Dönüştürme Araçları toolkit'i aracılığıyla Rube MCP üzerinden Dönüştürme Araçları işlemlerini otomatikleştirin.

  **Toolkit dokümantasyonu**: [composio.dev/toolkits/conversion_tools](https://composio.dev/toolkits/conversion_tools)

  ## Ön Koşullar

  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla `conversion_tools` toolkit'i ile aktif bir Dönüştürme Araçları bağlantısı
  - Geçerli tool schema'larını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın

  ## Kurulum

  **Rube MCP'yi Edinin**: `https://rube.app/mcp` adresini istemci konfigürasyonunuzda MCP sunucusu olarak ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt vererek Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS` öğesini `conversion_tools` toolkit'i ile çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen yetkilendirme bağlantısını takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Tool Keşfi

  Workflow'ları çalıştırmadan önce kullanılabilir tool'ları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Conversion Tools operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, kullanılabilir tool slug'ları, input schema'ları, önerilen execution plan'ları ve bilinen sorunları döndürür.

  ## Temel Workflow Deseni

  ### Adım 1: Kullanılabilir Tool'ları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Conversion Tools task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Edin

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["conversion_tools"]
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

  - **Her zaman önce arayın**: Tool schema'ları değişir. `RUBE_SEARCH_TOOLS` çağırmadan tool slug'ları veya argümanları asla sabit kodlamayın
  - **Bağlantıyı kontrol edin**: Tool'ları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` öğesinin ACTIVE durumunu gösterdiğini doğrulayın
  - **Schema uygunluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarına her zaman `memory` dahil edin, boş olsa bile (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Pagination**: Yanıtlarda pagination token'ları kontrol edin ve tamamlanana kadar getirmeyi devam ettirin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-----------|----------|
  | Tool'ları bul | `RUBE_SEARCH_TOOLS` ile Dönüştürme Araçları'na özgü use case |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` ile `conversion_tools` toolkit'i |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` ile keşfedilmiş tool slug'ları |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` ile `run_composio_tool()` |
  | Tam schema | `RUBE_GET_TOOL_SCHEMAS` ile `schemaRef` olan tool'lar için |

  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Conversion Tools Automation via Rube MCP

Automate Conversion Tools operations through Composio's Conversion Tools toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/conversion_tools](https://composio.dev/toolkits/conversion_tools)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Conversion Tools connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `conversion_tools`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `conversion_tools`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Conversion Tools operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Conversion Tools task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["conversion_tools"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Conversion Tools-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `conversion_tools` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
