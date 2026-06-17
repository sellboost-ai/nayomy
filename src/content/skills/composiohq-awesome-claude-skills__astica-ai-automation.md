---
name: "astica-ai-automation"
description_en: "Automate Astica AI tasks via Rube MCP (Composio). Always search tools first for current schemas."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 64919
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/astica-ai-automation/SKILL.md"
path: "composio-skills/astica-ai-automation/SKILL.md"
is_collection: false
body_length: 2777
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Astica AI Otomasyon via Rube MCP
  
  Composio'nun Astica AI toolkit'i aracılığıyla Rube MCP üzerinden Astica AI operasyonlarını otomatikleştirin.
  
  **Toolkit dokümantasyonu**: [composio.dev/toolkits/astica_ai](https://composio.dev/toolkits/astica_ai)
  
  ## Ön Koşullar
  
  - Rube MCP bağlı olmalıdır (`RUBE_SEARCH_TOOLS` kullanılabilir olmalı)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla `astica_ai` toolkit'i ile aktif Astica AI bağlantısı
  - Her zaman mevcut tool şemalarını almak için `RUBE_SEARCH_TOOLS` çağırın
  
  ## Kurulum
  
  **Rube MCP Edinme**: İstemci yapılandırmanıza MCP sunucusu olarak `https://rube.app/mcp` ekleyin. API anahtarına ihtiyaç yok — sadece endpoint'i ekleyin ve çalışır.
  
  1. `RUBE_SEARCH_TOOLS` yanıt verip vermediğini kontrol ederek Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. Toolkit `astica_ai` ile `RUBE_MANAGE_CONNECTIONS` çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth linkini takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın
  
  ## Tool Discovery (Tool Keşfi)
  
  Workflow'ları çalıştırmadan önce her zaman mevcut tool'ları keşfedin:
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Astica AI operations", known_fields: ""}]
  session: {generate_id: true}
  ```
  
  Bu, mevcut tool slug'ları, input şemalarını, önerilen çalıştırma planlarını ve bilinen sorunları döndürür.
  
  ## Core Workflow Deseni
  
  ### Adım 1: Mevcut Tool'ları Keşfedin
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Astica AI task"}]
  session: {id: "existing_session_id"}
  ```
  
  ### Adım 2: Bağlantıyı Kontrol Edin
  
  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["astica_ai"]
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
  
  - **Her zaman önce arama yapın**: Tool şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan tool slug'ları veya argümanları asla hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Tool'ları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory` ekleyin, boş olsa bile (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Pagination**: Yanıtları pagination token'ları için kontrol edin ve tamamlanana kadar getirmeye devam edin
  
  ## Hızlı Referans
  
  | İşlem | Yaklaşım |
  |-----------|----------|
  | Tool bulma | `RUBE_SEARCH_TOOLS` Astica AI'a özgü use case ile |
  | Bağlantı | `RUBE_MANAGE_CONNECTIONS` toolkit `astica_ai` ile |
  | Çalıştırma | `RUBE_MULTI_EXECUTE_TOOL` keşfedilmiş tool slug'ları ile |
  | Toplu işlem | `RUBE_REMOTE_WORKBENCH` ve `run_composio_tool()` ile |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` `schemaRef` olan tool'lar için |
  
  ---
  *Powered by [Composio](https://composio.dev)*
---

# Astica AI Automation via Rube MCP

Automate Astica AI operations through Composio's Astica AI toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/astica_ai](https://composio.dev/toolkits/astica_ai)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Astica AI connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `astica_ai`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `astica_ai`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Astica AI operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Astica AI task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["astica_ai"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Astica AI-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `astica_ai` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
