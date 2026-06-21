---
name: "composio-automation"
description_en: "Automate Composio tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Composio görevlerini Ruby MCP (Composio) aracılığıyla otomatikleştirin. Her zaman güncel şemaları için önce toolları arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 65377
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/composio-automation/SKILL.md"
path: "composio-skills/composio-automation/SKILL.md"
is_collection: false
body_length: 2764
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Composio Otomasyonu Rube MCP Aracılığıyla
  
  Composio toolkit'i aracılığıyla Rube MCP üzerinden Composio operasyonlarını otomatikleştirin.
  
  **Toolkit dokümantasyonu**: [composio.dev/toolkits/composio](https://composio.dev/toolkits/composio)
  
  ## Ön Koşullar
  
  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Composio bağlantısı ve `composio` toolkit'i
  - Geçerli tool şemalarını almak için daima `RUBE_SEARCH_TOOLS` çağırın
  
  ## Kurulum
  
  **Rube MCP'yi Alın**: `https://rube.app/mcp` adresini client konfigürasyonunuzda bir MCP server'ı olarak ekleyin. API anahtarına gerek yok — sadece endpoint'i ekleyin ve çalışır.
  
  1. `RUBE_SEARCH_TOOLS` yanıt vererek Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS`'ı `composio` toolkit'i ile çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth linkini izleyin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın
  
  ## Tool Keşfi
  
  Workflow'ları çalıştırmadan önce daima kullanılabilir tool'ları keşfedin:
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Composio operations", known_fields: ""}]
  session: {generate_id: true}
  ```
  
  Bu, kullanılabilir tool slug'ları, input şemalarını, önerilen execution planlarını ve bilinen sorunları döndürür.
  
  ## Temel Workflow Deseni
  
  ### Adım 1: Kullanılabilir Tool'ları Keşfedin
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Composio task"}]
  session: {id: "existing_session_id"}
  ```
  
  ### Adım 2: Bağlantıyı Kontrol Edin
  
  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["composio"]
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
  
  - **Daima önce arama yapın**: Tool şemaları değişebilir. `RUBE_SEARCH_TOOLS` çağırmadan hiçbir zaman tool slug'ları veya argümanlarını sabitlemeyin
  - **Bağlantıyı kontrol edin**: Tool'ları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS`'ın ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uyumu**: Arama sonuçlarından kesin alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında daima `memory` ekleyin, boş olsa bile (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Pagination**: Yanıtlarda pagination token'ları kontrol edin ve tamamlanana kadar getirmeye devam edin
  
  ## Hızlı Başvuru
  
  | İşlem | Yaklaşım |
  |-----------|----------|
  | Tool'ları bulun | `RUBE_SEARCH_TOOLS` Composio'ya özgü use case ile |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` `composio` toolkit'i ile |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` keşfedilen tool slug'ları ile |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` `run_composio_tool()` ile |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` `schemaRef` içeren tool'lar için |
  
  ---
  *Powered by [Composio](https://composio.dev)*
---

# Composio Automation via Rube MCP

Automate Composio operations through Composio's Composio toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/composio](https://composio.dev/toolkits/composio)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Composio connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `composio`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `composio`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Composio operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Composio task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["composio"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Composio-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `composio` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
