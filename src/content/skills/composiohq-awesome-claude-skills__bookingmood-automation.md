---
name: "bookingmood-automation"
description_en: "Automate Bookingmood tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Bookingmood görevlerini Rube MCP (Composio) aracılığıyla otomatikleştirin. Her zaman güncel şemalar için önce araçları arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 65377
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/bookingmood-automation/SKILL.md"
path: "composio-skills/bookingmood-automation/SKILL.md"
is_collection: false
body_length: 2803
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Bookingmood Otomasyon Rube MCP aracılığıyla
  
  Composio'nun Bookingmood toolkit'ini Rube MCP aracılığıyla kullanarak Bookingmood operasyonlarını otomatikleştirin.
  
  **Toolkit dokümantasyonu**: [composio.dev/toolkits/bookingmood](https://composio.dev/toolkits/bookingmood)
  
  ## Ön Koşullar
  
  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS mevcut)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Bookingmood bağlantısı ve `bookingmood` toolkit'i
  - Mevcut tool şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın
  
  ## Kurulum
  
  **Rube MCP Alın**: MCP sunucu konfigürasyonunuzda `https://rube.app/mcp` adresini bir MCP sunucusu olarak ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.
  
  1. `RUBE_SEARCH_TOOLS` yanıt vererek Rube MCP'nin mevcut olduğunu doğrulayın
  2. `bookingmood` toolkit'i ile `RUBE_MANAGE_CONNECTIONS` çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen yetkilendirme bağlantısını izleyin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın
  
  ## Tool Keşfi
  
  Workflow'ları çalıştırmadan önce her zaman mevcut tool'ları keşfedin:
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Bookingmood operations", known_fields: ""}]
  session: {generate_id: true}
  ```
  
  Bu, mevcut tool slug'larını, input şemalarını, önerilen execution planlarını ve bilinen sorunları döndürür.
  
  ## Temel Workflow Şablonu
  
  ### Adım 1: Mevcut Tool'ları Keşfedin
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Bookingmood task"}]
  session: {id: "existing_session_id"}
  ```
  
  ### Adım 2: Bağlantıyı Kontrol Edin
  
  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["bookingmood"]
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
  
  - **Her zaman önce arama yapın**: Tool şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan asla tool slug'larını veya argümanlarını hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Tool'ları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS`'ın ACTIVE statusunu gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory` parametresini ekleyin, boş olsa bile (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Pagination**: Yanıtlarda pagination token'larını kontrol edin ve tamamlanana kadar fetching'i devam ettirin
  
  ## Hızlı Referans
  
  | İşlem | Yaklaşım |
  |-----------|----------|
  | Tool'ları bul | `RUBE_SEARCH_TOOLS` ile Bookingmood'a özgü use case |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` ile `bookingmood` toolkit'i |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` ile keşfedilen tool slug'larıyla |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` ile `run_composio_tool()` |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` ile `schemaRef` olan tool'lar için |
  
  ---
  *Powered by [Composio](https://composio.dev)*
---

# Bookingmood Automation via Rube MCP

Automate Bookingmood operations through Composio's Bookingmood toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/bookingmood](https://composio.dev/toolkits/bookingmood)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Bookingmood connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `bookingmood`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `bookingmood`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Bookingmood operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Bookingmood task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["bookingmood"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Bookingmood-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `bookingmood` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
