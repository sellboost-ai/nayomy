---
name: "coassemble-automation"
description_en: "Automate Coassemble tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Rube MCP (Composio) aracılığıyla Coassemble görevlerini otomatikleştirin. Her zaman mevcut şemaları kontrol etmek için tool'ları önce araştırın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 65266
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/coassemble-automation/SKILL.md"
path: "composio-skills/coassemble-automation/SKILL.md"
is_collection: false
body_length: 2790
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Rube MCP Aracılığıyla Coassemble Otomasyonu
  
  Composio'nun Coassemble araç seti aracılığıyla Rube MCP ile Coassemble işlemlerini otomatikleştirin.
  
  **Araç seti dokümentasyonu**: [composio.dev/toolkits/coassemble](https://composio.dev/toolkits/coassemble)
  
  ## Ön Koşullar
  
  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS mevcut)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Coassemble bağlantısı ve `coassemble` araç seti
  - Mevcut araç şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın
  
  ## Kurulum
  
  **Rube MCP'yi edinin**: MCP sunucu konfigürasyonunuzda `https://rube.app/mcp` adresini bir MCP sunucusu olarak ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.
  
  1. `RUBE_SEARCH_TOOLS` yanıt verdiğini doğrulayarak Rube MCP'nin mevcut olduğunu kontrol edin
  2. `RUBE_MANAGE_CONNECTIONS` çağırın ve `coassemble` araç setini belirtin
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen yetkilendirme bağlantısını izleyin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın
  
  ## Araç Keşfi
  
  İş akışlarını yürütmeden önce her zaman mevcut araçları keşfedin:
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Coassemble operations", known_fields: ""}]
  session: {generate_id: true}
  ```
  
  Bu, mevcut araç slug'larını, input şemalarını, önerilen yürütme planlarını ve bilinen sorunları döndürür.
  
  ## Temel İş Akışı Deseni
  
  ### Adım 1: Mevcut Araçları Keşfedin
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Coassemble task"}]
  session: {id: "existing_session_id"}
  ```
  
  ### Adım 2: Bağlantıyı Kontrol Edin
  
  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["coassemble"]
  session_id: "your_session_id"
  ```
  
  ### Adım 3: Araçları Yürütün
  
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
  
  - **Her zaman önce arayın**: Araç şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan araç slug'larını veya argümanlarını asla hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Araçları yürütmeden önce `RUBE_MANAGE_CONNECTIONS` durumunun ACTIVE gösterdiğini doğrulayın
  - **Şema uygunluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarına her zaman `memory` parametresini ekleyin, boş olsa da (`{}`)
  - **Session yeniden kullanımı**: Bir iş akışı içinde session ID'lerini yeniden kullanın. Yeni iş akışları için yenilerini oluşturun
  - **Sayfalandırma**: Yanıtlarda sayfalandırma tokenlarını kontrol edin ve tamamlanana kadar getirmeye devam edin
  
  ## Hızlı Referans
  
  | İşlem | Yaklaşım |
  |-------|----------|
  | Araçları bul | `RUBE_SEARCH_TOOLS` ile Coassemble'a özgü use case |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` ile `coassemble` araç seti |
  | Yürüt | Keşfedilen araç slug'larıyla `RUBE_MULTI_EXECUTE_TOOL` |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` ile `run_composio_tool()` |
  | Tam şema | `schemaRef` içeren araçlar için `RUBE_GET_TOOL_SCHEMAS` |
  
  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Coassemble Automation via Rube MCP

Automate Coassemble operations through Composio's Coassemble toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/coassemble](https://composio.dev/toolkits/coassemble)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Coassemble connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `coassemble`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `coassemble`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Coassemble operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Coassemble task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["coassemble"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Coassemble-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `coassemble` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
