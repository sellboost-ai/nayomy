---
name: "cloudpress-automation"
description_en: "Automate Cloudpress tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Rube MCP (Composio) aracılığıyla Cloudpress görevlerini otomatikleştirin. Güncel şemalar için her zaman araçlarda önce arama yapın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 64919
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/cloudpress-automation/SKILL.md"
path: "composio-skills/cloudpress-automation/SKILL.md"
is_collection: false
body_length: 2790
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Cloudpress Otomasyonu Rube MCP ile
  
  Composio'nun Cloudpress toolkit'i aracılığıyla Rube MCP üzerinden Cloudpress işlemlerini otomatikleştirin.
  
  **Toolkit dokümantasyonu**: [composio.dev/toolkits/cloudpress](https://composio.dev/toolkits/cloudpress)
  
  ## Ön Koşullar
  
  - Rube MCP bağlı olmalı (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` üzerinden etkin Cloudpress bağlantısı ve `cloudpress` toolkit'i
  - Her zaman mevcut tool şemalarını almak için `RUBE_SEARCH_TOOLS` çağırın
  
  ## Kurulum
  
  **Rube MCP'yi Edinin**: `https://rube.app/mcp` adresini istemci yapılandırmanızda bir MCP server'ı olarak ekleyin. API anahtarına gerek yok — sadece endpoint'i ekleyin ve çalışır.
  
  1. `RUBE_SEARCH_TOOLS` yanıt vererek Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS` çağırın ve `cloudpress` toolkit'ini belirtin
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için dönen auth linkini takip edin
  4. Workflow'ları çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın
  
  ## Tool Bulma
  
  Workflow'ları yürütmeden önce her zaman kullanılabilir tool'ları keşfedin:
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Cloudpress operations", known_fields: ""}]
  session: {generate_id: true}
  ```
  
  Bu, kullanılabilir tool slug'larını, input şemalarını, önerilen yürütme planlarını ve bilinen tuzakları döndürür.
  
  ## Temel Workflow Deseni
  
  ### Adım 1: Kullanılabilir Tool'ları Keşfet
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Cloudpress task"}]
  session: {id: "existing_session_id"}
  ```
  
  ### Adım 2: Bağlantıyı Kontrol Et
  
  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["cloudpress"]
  session_id: "your_session_id"
  ```
  
  ### Adım 3: Tool'ları Yürüt
  
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
  
  - **Her zaman önce ara**: Tool şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan tool slug'larını veya argümanlarını asla hardcode etmeyin
  - **Bağlantıyı kontrol et**: Tool'ları yürütmeden önce `RUBE_MANAGE_CONNECTIONS` durumunun ACTIVE olduğunu doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory` parametresini ekleyin, boş olsa da (`{}`)
  - **Session tekrar kullanımı**: Bir workflow içinde session ID'lerini tekrar kullanın. Yeni workflow'lar için yeni olanlar oluşturun
  - **Pagination**: Yanıtlarda pagination token'larını kontrol edin ve tamamlanana kadar getirmeye devam edin
  
  ## Hızlı Referans
  
  | İşlem | Yaklaşım |
  |-----------|----------|
  | Tool'ları bul | Cloudpress'e özgü use case ile `RUBE_SEARCH_TOOLS` |
  | Bağlan | `cloudpress` toolkit'i ile `RUBE_MANAGE_CONNECTIONS` |
  | Yürüt | Keşfedilen tool slug'ları ile `RUBE_MULTI_EXECUTE_TOOL` |
  | Toplu işlemler | `run_composio_tool()` ile `RUBE_REMOTE_WORKBENCH` |
  | Tam şema | `schemaRef` olan tool'lar için `RUBE_GET_TOOL_SCHEMAS` |
  
  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Cloudpress Automation via Rube MCP

Automate Cloudpress operations through Composio's Cloudpress toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/cloudpress](https://composio.dev/toolkits/cloudpress)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Cloudpress connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `cloudpress`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `cloudpress`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Cloudpress operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Cloudpress task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["cloudpress"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Cloudpress-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `cloudpress` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
