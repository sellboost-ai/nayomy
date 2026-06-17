---
name: "blackboard-automation"
description_en: "Automate Blackboard tasks via Rube MCP (Composio). Always search tools first for current schemas."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 64919
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/blackboard-automation/SKILL.md"
path: "composio-skills/blackboard-automation/SKILL.md"
is_collection: false
body_length: 2790
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Blackboard Otomasyonu via Rube MCP
  
  Composio'nun Blackboard toolkit'i aracılığıyla Rube MCP üzerinden Blackboard işlemlerini otomatikleştirin.
  
  **Toolkit dokümantasyonu**: [composio.dev/toolkits/blackboard](https://composio.dev/toolkits/blackboard)
  
  ## Ön Koşullar
  
  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Blackboard bağlantısı ve `blackboard` toolkit'i
  - Mevcut araç şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın
  
  ## Kurulum
  
  **Rube MCP'yi Edinin**: `https://rube.app/mcp` adresini istemci yapılandırmanızda bir MCP sunucusu olarak ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.
  
  1. `RUBE_SEARCH_TOOLS`'un yanıt verdiğini doğrulayarak Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS`'ı `blackboard` toolkit'i ile çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen kimlik doğrulama bağlantısını takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın
  
  ## Araç Bulma
  
  Workflow'ları çalıştırmadan önce her zaman kullanılabilir araçları keşfedin:
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Blackboard operations", known_fields: ""}]
  session: {generate_id: true}
  ```
  
  Bu, kullanılabilir araç slugları, input şemaları, önerilen execution planları ve bilinen tuzakları döndürür.
  
  ## Temel Workflow Deseni
  
  ### Adım 1: Kullanılabilir Araçları Keşfedin
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Blackboard task"}]
  session: {id: "existing_session_id"}
  ```
  
  ### Adım 2: Bağlantıyı Kontrol Edin
  
  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["blackboard"]
  session_id: "your_session_id"
  ```
  
  ### Adım 3: Araçları Çalıştırın
  
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
  
  - **Her zaman önce ara**: Araç şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan araç slugları veya argümanları hiçbir zaman hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Araçları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS`'ın ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarına her zaman `memory` ekleyin, boş olsa bile (`{}`)
  - **Session tekrar kullanımı**: Bir workflow içinde session ID'lerini tekrar kullanın. Yeni workflow'lar için yenisini oluşturun
  - **Sayfalandırma**: Yanıtları sayfalandırma token'ları için kontrol edin ve tam olana kadar getirmeye devam edin
  
  ## Hızlı Referans
  
  | İşlem | Yaklaşım |
  |-----------|----------|
  | Araçları bul | Blackboard'a özgü use case ile `RUBE_SEARCH_TOOLS` |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` ile `blackboard` toolkit'i |
  | Çalıştır | Keşfedilmiş araç slugları ile `RUBE_MULTI_EXECUTE_TOOL` |
  | Toplu işlemler | `run_composio_tool()` ile `RUBE_REMOTE_WORKBENCH` |
  | Tam şema | `schemaRef` olan araçlar için `RUBE_GET_TOOL_SCHEMAS` |
  
  ---
  *[Composio](https://composio.dev) tarafından güçlendirilmiştir*
---

# Blackboard Automation via Rube MCP

Automate Blackboard operations through Composio's Blackboard toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/blackboard](https://composio.dev/toolkits/blackboard)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Blackboard connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `blackboard`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `blackboard`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Blackboard operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Blackboard task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["blackboard"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Blackboard-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `blackboard` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
