---
name: "anthropic-administrator-automation"
description_en: "Automate Anthropic Admin tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Anthropic Admin görevlerini Rube MCP (Composio) aracılığıyla otomatikleştirin. Her zaman mevcut schemaları kontrol etmek için önce araçları arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 61753
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/anthropic-administrator-automation/SKILL.md"
path: "composio-skills/anthropic-administrator-automation/SKILL.md"
is_collection: false
body_length: 2903
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Anthropic Admin Otomasyonu via Rube MCP

  Composio'nun Anthropic Admin toolkit'ini Rube MCP aracılığıyla kullanarak Anthropic Admin operasyonlarını otomatikleştirin.

  **Toolkit docs**: [composio.dev/toolkits/anthropic_administrator](https://composio.dev/toolkits/anthropic_administrator)

  ## Ön Koşullar

  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Anthropic Admin bağlantısı ve `anthropic_administrator` toolkit'i
  - Mevcut tool şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın

  ## Kurulum

  **Rube MCP'yi edinin**: İstemci yapılandırmanızda `https://rube.app/mcp` adresini bir MCP server'ı olarak ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt verdiğini kontrol ederek Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS` öğesini `anthropic_administrator` toolkit'i ile çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth linkini takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Tool Discovery

  Workflow'ları yürütmeden önce her zaman mevcut tool'ları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Anthropic Admin operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, mevcut tool slug'larını, input şemalarını, önerilen execution plan'larını ve bilinen sorunları döndürür.

  ## Temel Workflow Deseni

  ### Adım 1: Mevcut Tool'ları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Anthropic Admin task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Edin

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["anthropic_administrator"]
  session_id: "your_session_id"
  ```

  ### Adım 3: Tool'ları Yürütün

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

  - **Her zaman önce search yapın**: Tool şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan hiçbir zaman tool slug'larını veya argümanlarını hardcode'lamayın
  - **Bağlantıyı kontrol edin**: Tool'ları yürütmeden önce `RUBE_MANAGE_CONNECTIONS` öğesinin ACTIVE durumunu gösterdiğini doğrulayın
  - **Schema uyumu**: Search sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarına her zaman `memory` ekleyin, boş olsa bile (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Pagination**: Pagination token'ları için response'ları kontrol edin ve tamamlanana kadar fetch etmeye devam edin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-----------|----------|
  | Tool bulma | `RUBE_SEARCH_TOOLS` (Anthropic Admin'e özel use case ile) |
  | Bağlantı | `RUBE_MANAGE_CONNECTIONS` (`anthropic_administrator` toolkit ile) |
  | Yürütme | `RUBE_MULTI_EXECUTE_TOOL` (keşfedilen tool slug'ları ile) |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` (`run_composio_tool()` ile) |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` (`schemaRef`'i olan tool'lar için) |

  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Anthropic Admin Automation via Rube MCP

Automate Anthropic Admin operations through Composio's Anthropic Admin toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/anthropic_administrator](https://composio.dev/toolkits/anthropic_administrator)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Anthropic Admin connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `anthropic_administrator`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `anthropic_administrator`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Anthropic Admin operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Anthropic Admin task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["anthropic_administrator"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Anthropic Admin-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `anthropic_administrator` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
