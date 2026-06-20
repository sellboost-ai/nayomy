---
name: "census-bureau-automation"
description_en: "Automate Census Bureau tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Census Bureau görevlerini Rube MCP (Composio) aracılığıyla otomatikleştirin. Her zaman mevcut şemaları kontrol etmek için önce araçları arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 65266
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/census-bureau-automation/SKILL.md"
path: "composio-skills/census-bureau-automation/SKILL.md"
is_collection: false
body_length: 2829
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Rube MCP ile Census Bureau Otomasyonu
  
  Composio'nun Census Bureau toolkit'ini Rube MCP aracılığıyla kullanarak Census Bureau işlemlerini otomatikleştirin.
  
  **Toolkit dokümantasyonu**: [composio.dev/toolkits/census_bureau](https://composio.dev/toolkits/census_bureau)
  
  ## Ön Koşullar
  
  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS mevcut)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Census Bureau bağlantısı (toolkit: `census_bureau`)
  - Geçerli tool şemalarını almak için her zaman önce `RUBE_SEARCH_TOOLS` çağırın
  
  ## Kurulum
  
  **Rube MCP'yi Alın**: İstemci yapılandırmanıza `https://rube.app/mcp` adresini bir MCP sunucusu olarak ekleyin. API anahtarlarına gerek yoktur — sadece endpoint'i ekleyin ve çalışır.
  
  1. `RUBE_SEARCH_TOOLS` yanıt verip vermediğini kontrol ederek Rube MCP'nin mevcut olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS` öğesini toolkit `census_bureau` ile çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen yetkilendirme bağlantısını takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın
  
  ## Tool Discovery
  
  Workflow'ları çalıştırmadan önce her zaman mevcut araçları keşfedin:
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Census Bureau operations", known_fields: ""}]
  session: {generate_id: true}
  ```
  
  Bu, mevcut tool slug'larını, input şemalarını, önerilen execution planlarını ve bilinen sorunları döndürür.
  
  ## Temel Workflow Deseni
  
  ### Adım 1: Mevcut Araçları Keşfedin
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Census Bureau task"}]
  session: {id: "existing_session_id"}
  ```
  
  ### Adım 2: Bağlantıyı Kontrol Edin
  
  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["census_bureau"]
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
  
  - **Her zaman önce arama yapın**: Tool şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan asla tool slug'larını veya argümanlarını sabitlemeyin
  - **Bağlantıyı kontrol edin**: Araçları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` öğesinin ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory` ekleyin, boş olsa bile (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session kimliklerini yeniden kullanın. Yeni workflow'lar için yenileri oluşturun
  - **Pagination**: Yanıtlarda pagination tokenlerini kontrol edin ve tamamlanana kadar getirmeye devam edin
  
  ## Hızlı Referans
  
  | İşlem | Yaklaşım |
  |-----------|----------|
  | Araçları bul | `RUBE_SEARCH_TOOLS` Census Bureau'ya özel use case ile |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` toolkit `census_bureau` ile |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` keşfedilen tool slug'ları ile |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` `run_composio_tool()` ile |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` `schemaRef` içeren araçlar için |
  
  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Census Bureau Automation via Rube MCP

Automate Census Bureau operations through Composio's Census Bureau toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/census_bureau](https://composio.dev/toolkits/census_bureau)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Census Bureau connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `census_bureau`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `census_bureau`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Census Bureau operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Census Bureau task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["census_bureau"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Census Bureau-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `census_bureau` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
