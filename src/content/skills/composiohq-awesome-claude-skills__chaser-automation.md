---
name: "chaser-automation"
description_en: "Automate Chaser tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Rube MCP (Composio) üzerinden Chaser görevlerini otomatikleştirin. Her zaman güncel schemaları için önce araçları arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 65377
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/chaser-automation/SKILL.md"
path: "composio-skills/chaser-automation/SKILL.md"
is_collection: false
body_length: 2738
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Rube MCP Aracılığıyla Chaser Otomasyonu
  
  Composio'nun Chaser toolkit'ini Rube MCP üzerinden kullanarak Chaser işlemlerini otomatikleştirin.
  
  **Toolkit dokümantasyonu**: [composio.dev/toolkits/chaser](https://composio.dev/toolkits/chaser)
  
  ## Ön Koşullar
  
  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Chaser bağlantısı ve `chaser` toolkit'i
  - Mevcut tool şemalarını almak için her zaman önce `RUBE_SEARCH_TOOLS` çağırın
  
  ## Kurulum
  
  **Rube MCP'yi Alın**: MCP sunucusu olarak `https://rube.app/mcp` adresini istemci yapılandırmanıza ekleyin. API anahtarı gerekmez — yalnızca endpoint'i ekleyin ve çalışmaya başlar.
  
  1. `RUBE_SEARCH_TOOLS` yanıt vererek Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS` çağırarak `chaser` toolkit'ini kullanın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen yetkilendirme bağlantısını takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın
  
  ## Tool Keşfi
  
  Workflow'ları çalıştırmadan önce her zaman kullanılabilir tool'ları keşfedin:
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Chaser operations", known_fields: ""}]
  session: {generate_id: true}
  ```
  
  Bu, kullanılabilir tool slug'ları, input şemalarını, önerilen çalıştırma planlarını ve bilinen sorunları döndürür.
  
  ## Temel Workflow Deseni
  
  ### Adım 1: Kullanılabilir Tool'ları Keşfedin
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Chaser task"}]
  session: {id: "existing_session_id"}
  ```
  
  ### Adım 2: Bağlantıyı Kontrol Edin
  
  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["chaser"]
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
  
  - **Her zaman önce arama yapın**: Tool şemaları değişebilir. `RUBE_SEARCH_TOOLS` çağırmadan tool slug'larını veya argümanlarını hiçbir zaman hard-code etmeyin
  - **Bağlantıyı kontrol edin**: Tool'ları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarına her zaman `memory` parametresi ekleyin, boş olsa da (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Sayfalandırma**: Yanıtları sayfalandırma token'ları için kontrol edin ve tamamlanana kadar getirmeye devam edin
  
  ## Hızlı Referans
  
  | İşlem | Yaklaşım |
  |-----------|----------|
  | Tool'ları bul | `RUBE_SEARCH_TOOLS` Chaser'a özgü use case ile |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` `chaser` toolkit'i ile |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` keşfedilen tool slug'ları ile |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` `run_composio_tool()` ile |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` `schemaRef` olan tool'lar için |
  
  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Chaser Automation via Rube MCP

Automate Chaser operations through Composio's Chaser toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/chaser](https://composio.dev/toolkits/chaser)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Chaser connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `chaser`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `chaser`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Chaser operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Chaser task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["chaser"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Chaser-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `chaser` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
