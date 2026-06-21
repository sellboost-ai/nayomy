---
name: "buildkite-automation"
description_en: "Automate Buildkite tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Rube MCP (Composio) aracılığıyla Buildkite görevlerini otomatikleştirin. Her zaman mevcut şemalar için önce araçları arayın."
category: "Design"
repo: "ComposioHQ/awesome-claude-skills"
stars: 65377
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/buildkite-automation/SKILL.md"
path: "composio-skills/buildkite-automation/SKILL.md"
is_collection: false
body_length: 2777
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Buildkite Otomasyonu via Rube MCP
  
  Rube MCP aracılığıyla Composio'nun Buildkite toolkit'ini kullanarak Buildkite operasyonlarını otomatikleştirin.
  
  **Toolkit dokümanları**: [composio.dev/toolkits/buildkite](https://composio.dev/toolkits/buildkite)
  
  ## Ön Koşullar
  
  - Rube MCP bağlı olmalı (RUBE_SEARCH_TOOLS kullanılabilir olmalı)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Buildkite bağlantısı (`buildkite` toolkit ile)
  - Güncel tool şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın
  
  ## Kurulum
  
  **Rube MCP'yi Alın**: İstemci konfigürasyonunda `https://rube.app/mcp` adresini MCP sunucusu olarak ekleyin. API anahtarına gerek yoktur — sadece endpoint'i ekleyin ve çalışır.
  
  1. `RUBE_SEARCH_TOOLS` yanıt verdiğini doğrulayarak Rube MCP'nin kullanılabilir olduğunu kontrol edin
  2. `RUBE_MANAGE_CONNECTIONS` çağırın (`buildkite` toolkit ile)
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen yetkilendirme bağlantısını takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın
  
  ## Tool Bulma
  
  Workflow'ları çalıştırmadan önce her zaman kullanılabilir tool'ları keşfedin:
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Buildkite operations", known_fields: ""}]
  session: {generate_id: true}
  ```
  
  Bu, mevcut tool slug'larını, input şemalarını, önerilen yürütme planlarını ve bilinen tuzakları döndürür.
  
  ## Temel Workflow Deseni
  
  ### Adım 1: Mevcut Tool'ları Keşfet
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Buildkite task"}]
  session: {id: "existing_session_id"}
  ```
  
  ### Adım 2: Bağlantıyı Kontrol Et
  
  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["buildkite"]
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
  
  ## Bilinen Tuzaklar
  
  - **Her zaman önce arayın**: Tool şemaları değişebilir. `RUBE_SEARCH_TOOLS` çağırmadan asla tool slug'larını veya argümanları kodlamayın
  - **Bağlantıyı kontrol edin**: Tool'ları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` durumunun ACTIVE olduğunu doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarına her zaman `memory` ekleyin, boş olsa da (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Pagination**: Yanıtlarda pagination token'ları arayın ve tamam olana kadar getirmeye devam edin
  
  ## Hızlı Referans
  
  | İşlem | Yaklaşım |
  |-----------|----------|
  | Tool bulma | `RUBE_SEARCH_TOOLS` (Buildkite'a özgü use case ile) |
  | Bağlantı | `RUBE_MANAGE_CONNECTIONS` (toolkit `buildkite` ile) |
  | Çalıştırma | `RUBE_MULTI_EXECUTE_TOOL` (keşfedilen tool slug'ları ile) |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` (`run_composio_tool()` ile) |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` (`schemaRef` olan tool'lar için) |
  
  ---
  *Powered by [Composio](https://composio.dev)*
---

# Buildkite Automation via Rube MCP

Automate Buildkite operations through Composio's Buildkite toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/buildkite](https://composio.dev/toolkits/buildkite)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Buildkite connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `buildkite`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `buildkite`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Buildkite operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Buildkite task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["buildkite"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Buildkite-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `buildkite` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
