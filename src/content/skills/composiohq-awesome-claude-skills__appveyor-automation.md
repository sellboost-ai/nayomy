---
name: "appveyor-automation"
description_en: "Automate Appveyor tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Rube MCP (Composio) aracılığıyla Appveyor görevlerini otomatikleştirin. Her zaman güncel şemalar için önce araçları arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 64919
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/appveyor-automation/SKILL.md"
path: "composio-skills/appveyor-automation/SKILL.md"
is_collection: false
body_length: 2764
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Appveyor Otomasyonu via Rube MCP
  
  Appveyor işlemlerini Composio'nun Appveyor araç seti aracılığıyla Rube MCP üzerinden otomatikleştirin.
  
  **Araç seti dokümantasyonu**: [composio.dev/toolkits/appveyor](https://composio.dev/toolkits/appveyor)
  
  ## Ön Koşullar
  
  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Appveyor bağlantısı ve `appveyor` araç seti
  - Her zaman mevcut araç şemalarını almak için `RUBE_SEARCH_TOOLS` çağrısı yapın
  
  ## Kurulum
  
  **Rube MCP Alın**: `https://rube.app/mcp` öğesini istemci konfigürasyonunuzda bir MCP sunucusu olarak ekleyin. API anahtarına gerek yoktur — yalnızca endpoint'i ekleyin ve çalışır.
  
  1. `RUBE_SEARCH_TOOLS` yanıt verdiğini doğrulayarak Rube MCP'nin kullanılabilir olduğunu kontrol edin
  2. `appveyor` araç seti ile `RUBE_MANAGE_CONNECTIONS` çağrısı yapın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen kimlik doğrulama bağlantısını takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın
  
  ## Araç Keşfi
  
  Workflow'ları çalıştırmadan önce mevcut araçları her zaman keşfedin:
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Appveyor operations", known_fields: ""}]
  session: {generate_id: true}
  ```
  
  Bu, mevcut araç slug'larını, input şemalarını, önerilen yürütme planlarını ve bilinen sorunları döndürür.
  
  ## Ana Workflow Deseni
  
  ### Adım 1: Mevcut Araçları Keşfedin
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Appveyor task"}]
  session: {id: "existing_session_id"}
  ```
  
  ### Adım 2: Bağlantıyı Kontrol Edin
  
  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["appveyor"]
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
  
  ## Bilinen Sorunlar
  
  - **Her zaman önce arama yapın**: Araç şemaları değişir. `RUBE_SEARCH_TOOLS` çağrısı yapmadan araç slug'larını veya parametrelerini asla hardcode'lamayın
  - **Bağlantıyı kontrol edin**: Araçları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` öğesinin ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory` parametresini ekleyin, boş olsa bile (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yeni olanlar oluşturun
  - **Sayfalama**: Yanıtları sayfalama token'ları için kontrol edin ve tamamlanana kadar almaya devam edin
  
  ## Hızlı Referans
  
  | İşlem | Yöntem |
  |-----------|----------|
  | Araçları bul | Appveyor'a özel use case ile `RUBE_SEARCH_TOOLS` |
  | Bağlan | Toolkit `appveyor` ile `RUBE_MANAGE_CONNECTIONS` |
  | Çalıştır | Keşfedilen araç slug'ları ile `RUBE_MULTI_EXECUTE_TOOL` |
  | Toplu işlemler | `run_composio_tool()` ile `RUBE_REMOTE_WORKBENCH` |
  | Tam şema | `schemaRef` içeren araçlar için `RUBE_GET_TOOL_SCHEMAS` |
  
  ---
  *Powered by [Composio](https://composio.dev)*
---

# Appveyor Automation via Rube MCP

Automate Appveyor operations through Composio's Appveyor toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/appveyor](https://composio.dev/toolkits/appveyor)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Appveyor connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `appveyor`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `appveyor`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Appveyor operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Appveyor task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["appveyor"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Appveyor-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `appveyor` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
