---
name: "basin-automation"
description_en: "Automate Basin tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Basin görevlerini Rube MCP (Composio) aracılığıyla otomatikleştirin. Her zaman güncel şemaları kontrol etmek için önce araçları arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 65045
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/basin-automation/SKILL.md"
path: "composio-skills/basin-automation/SKILL.md"
is_collection: false
body_length: 2725
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Basin Otomasyonu Rube MCP ile
  
  Rube MCP aracılığıyla Composio'nun Basin araç seti ile Basin operasyonlarını otomatize edin.
  
  **Araç seti belgeleri**: [composio.dev/toolkits/basin](https://composio.dev/toolkits/basin)
  
  ## Ön Koşullar
  
  - Rube MCP bağlanmış olmalı (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` ile aktif Basin bağlantısı (toolkit `basin`)
  - Mevcut araç şemalarını almak için her zaman önce `RUBE_SEARCH_TOOLS` çağırın
  
  ## Kurulum
  
  **Rube MCP'yi Edinin**: MCP sunucusu olarak `https://rube.app/mcp` adresini istemci yapılandırmanıza ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.
  
  1. `RUBE_SEARCH_TOOLS` yanıt vererek Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS` çağırın (toolkit `basin`)
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için dönen yetkilendirme bağlantısını takip edin
  4. Herhangi bir iş akışı çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu onaylayın
  
  ## Araç Bulma
  
  İş akışları çalıştırmadan önce her zaman kullanılabilir araçları keşfedin:
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Basin operations", known_fields: ""}]
  session: {generate_id: true}
  ```
  
  Bu, kullanılabilir araç slug'larını, input şemalarını, önerilen yürütme planlarını ve bilinen tuzakları döndürür.
  
  ## Temel İş Akışı Deseni
  
  ### Adım 1: Kullanılabilir Araçları Keşfedin
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Basin task"}]
  session: {id: "existing_session_id"}
  ```
  
  ### Adım 2: Bağlantıyı Kontrol Edin
  
  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["basin"]
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
  
  - **Her zaman önce arayın**: Araç şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan araç slug'larını veya argümanlarını asla hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Araçları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` durumunun ACTIVE olduğunu doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory` parametresini ekleyin, boş olsa bile (`{}`)
  - **Oturumu yeniden kullanın**: Bir iş akışı içinde oturum kimliklerini yeniden kullanın. Yeni iş akışları için yenilerini oluşturun
  - **Pagination**: Pagination token'ları için yanıtları kontrol edin ve tam olana kadar almaya devam edin
  
  ## Hızlı Başvuru
  
  | İşlem | Yaklaşım |
  |-----------|----------|
  | Araçları bul | Basin'e özgü use case ile `RUBE_SEARCH_TOOLS` |
  | Bağlan | toolkit `basin` ile `RUBE_MANAGE_CONNECTIONS` |
  | Çalıştır | Keşfedilen araç slug'ları ile `RUBE_MULTI_EXECUTE_TOOL` |
  | Toplu işler | `run_composio_tool()` ile `RUBE_REMOTE_WORKBENCH` |
  | Tam şema | `schemaRef` olan araçlar için `RUBE_GET_TOOL_SCHEMAS` |
  
  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Basin Automation via Rube MCP

Automate Basin operations through Composio's Basin toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/basin](https://composio.dev/toolkits/basin)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Basin connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `basin`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `basin`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Basin operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Basin task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["basin"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Basin-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `basin` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
