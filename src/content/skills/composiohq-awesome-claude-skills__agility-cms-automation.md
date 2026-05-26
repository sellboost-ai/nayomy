---
name: "agility-cms-automation"
description_en: "Automate Agility CMS tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Rube MCP (Composio) aracılığıyla Agility CMS görevlerini otomatikleştirin. Güncel şemalar için her zaman önce tools'u araştırın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 61753
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/agility-cms-automation/SKILL.md"
path: "composio-skills/agility-cms-automation/SKILL.md"
is_collection: false
body_length: 2803
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Agility CMS Otomasyonu Rube MCP ile

  Composio'nun Agility CMS araç seti aracılığıyla Rube MCP ile Agility CMS işlemlerini otomatikleştirin.

  **Araç seti belgeleri**: [composio.dev/toolkits/agility_cms](https://composio.dev/toolkits/agility_cms)

  ## Ön Koşullar

  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS mevcut olmalıdır)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Agility CMS bağlantısı `agility_cms` araç seti ile
  - Geçerli tool şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın

  ## Kurulum

  **Rube MCP'yi Alın**: İstemci yapılandırmanıza MCP sunucusu olarak `https://rube.app/mcp` ekleyin. API anahtarına gerek yok — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt vererek Rube MCP'nin mevcut olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS` çağırın `agility_cms` araç seti ile
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth linkini takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Tool Keşfi

  Workflowları çalıştırmadan önce her zaman mevcut toolları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Agility CMS operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, mevcut tool slug'larını, input şemalarını, önerilen execution planlarını ve bilinen sorunları döndürür.

  ## Çekirdek Workflow Deseni

  ### Adım 1: Mevcut Toolları Keşfet

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Agility CMS task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Et

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["agility_cms"]
  session_id: "your_session_id"
  ```

  ### Adım 3: Toolları Çalıştır

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

  - **Her zaman önce ara**: Tool şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan tool slug'larını veya argümanları asla hardcode etmeyin
  - **Bağlantıyı kontrol et**: Toolları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory`yi ekleyin, boş olsa bile (`{}`)
  - **Session yeniden kullanım**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflowlar için yeni olanlar oluşturun
  - **Pagination**: Yanıtlar için pagination token'larını kontrol edin ve tamamlanana kadar getirmeye devam edin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-----------|----------|
  | Tool bulma | `RUBE_SEARCH_TOOLS` ile Agility CMS'e özel use case |
  | Bağlanma | `RUBE_MANAGE_CONNECTIONS` ile `agility_cms` araç seti |
  | Çalıştırma | `RUBE_MULTI_EXECUTE_TOOL` ile keşfedilen tool slug'ları |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` ile `run_composio_tool()` |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` (schemaRef ile toollar için) |

  ---
  *Powered by [Composio](https://composio.dev)*
---

# Agility CMS Automation via Rube MCP

Automate Agility CMS operations through Composio's Agility CMS toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/agility_cms](https://composio.dev/toolkits/agility_cms)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Agility CMS connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `agility_cms`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `agility_cms`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Agility CMS operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Agility CMS task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["agility_cms"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Agility CMS-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `agility_cms` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
