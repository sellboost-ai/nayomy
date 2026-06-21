---
name: "cats-automation"
description_en: "Automate Cats tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Rube MCP (Composio) aracılığıyla Cats görevlerini otomatikleştirin. Güncel şemaları bulmak için her zaman ilk olarak araçlarda arama yapın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 65377
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/cats-automation/SKILL.md"
path: "composio-skills/cats-automation/SKILL.md"
is_collection: false
body_length: 2712
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Rube MCP aracılığıyla Cats Otomasyonu
  
  Composio'nun Cats toolkit'ini Rube MCP aracılığıyla kullanarak Cats işlemlerini otomatikleştirin.
  
  **Toolkit dokümantasyonu**: [composio.dev/toolkits/cats](https://composio.dev/toolkits/cats)
  
  ## Ön Koşullar
  
  - Rube MCP bağlı olmalı (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Cats bağlantısı ve `cats` toolkit'i
  - Mevcut tool şemalarını almak için her zaman `RUBE_SEARCH_TOOLS`'u çağırın
  
  ## Kurulum
  
  **Rube MCP'yi Edinin**: MCP sunucusu yapılandırmanıza `https://rube.app/mcp` ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışacaktır.
  
  1. `RUBE_SEARCH_TOOLS`'un yanıt verip vermediğini kontrol ederek Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `cats` toolkit'i ile `RUBE_MANAGE_CONNECTIONS`'ı çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth linkini takip edin
  4. İş akışlarını çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu onaylayın
  
  ## Tool Keşfi
  
  İş akışlarını çalıştırmadan önce her zaman mevcut tool'ları keşfedin:
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Cats operations", known_fields: ""}]
  session: {generate_id: true}
  ```
  
  Bu, mevcut tool slug'ları, input şemalarını, önerilen yürütme planlarını ve bilinen sorunları döndürür.
  
  ## Temel İş Akışı Deseni
  
  ### Adım 1: Mevcut Tool'ları Keşfet
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Cats task"}]
  session: {id: "existing_session_id"}
  ```
  
  ### Adım 2: Bağlantıyı Kontrol Et
  
  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["cats"]
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
  
  ## Bilinen Sorunlar
  
  - **Her zaman önce ara**: Tool şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan asla tool slug'ları veya argümanları hardcode etmeyin
  - **Bağlantıyı kontrol et**: Tool'ları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS`'ın ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarına her zaman `memory` ekleyin, boş olsa bile (`{}`)
  - **Session yeniden kullanımı**: Bir iş akışında session ID'lerini yeniden kullanın. Yeni iş akışları için yenilerini oluşturun
  - **Pagination**: Yanıtları pagination token'ları için kontrol edin ve tamamlanana kadar getirmeye devam edin
  
  ## Hızlı Referans
  
  | İşlem | Yaklaşım |
  |-------|----------|
  | Tool'ları bul | `RUBE_SEARCH_TOOLS` ile Cats'e özgü use case |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` ile `cats` toolkit'i |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` ile keşfedilen tool slug'ları |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` ile `run_composio_tool()` |
  | Tam şema | `schemaRef` olan tool'lar için `RUBE_GET_TOOL_SCHEMAS` |
  
  ---
  *Powered by [Composio](https://composio.dev)*
---

# Cats Automation via Rube MCP

Automate Cats operations through Composio's Cats toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/cats](https://composio.dev/toolkits/cats)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Cats connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `cats`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `cats`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Cats operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Cats task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["cats"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Cats-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `cats` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
