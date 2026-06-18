---
name: "cloudconvert-automation"
description_en: "Automate Cloudconvert tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Cloudconvert görevlerini Rube MCP (Composio) üzerinden otomatikleştirin. Her zaman geçerli şemaları için önce araçları arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 65045
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/cloudconvert-automation/SKILL.md"
path: "composio-skills/cloudconvert-automation/SKILL.md"
is_collection: false
body_length: 2816
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Cloudconvert Otomasyonu Rube MCP Aracılığıyla
  
  Composio'nun Cloudconvert toolkit'ini Rube MCP aracılığıyla kullanarak Cloudconvert işlemlerini otomatikleştirin.
  
  **Toolkit dokümentasyonu**: [composio.dev/toolkits/cloudconvert](https://composio.dev/toolkits/cloudconvert)
  
  ## Ön Koşullar
  
  - Rube MCP bağlı olmalı (RUBE_SEARCH_TOOLS kullanılabilir olmalı)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Cloudconvert bağlantısı ve `cloudconvert` toolkit'i
  - Geçerli tool şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın
  
  ## Kurulum
  
  **Rube MCP'yi Alın**: `https://rube.app/mcp` adresini MCP sunucusu olarak istemci konfigürasyonunuza ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.
  
  1. `RUBE_SEARCH_TOOLS` yanıt verdiğini onaylayarak Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS` çağrısını `cloudconvert` toolkit'i ile yapın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen kimlik doğrulama bağlantısını takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu onaylayın
  
  ## Tool Keşfi
  
  İş akışlarını çalıştırmadan önce her zaman kullanılabilir tool'ları keşfedin:
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Cloudconvert operations", known_fields: ""}]
  session: {generate_id: true}
  ```
  
  Bu, kullanılabilir tool slug'ları, input şemaları, önerilen execution planlarını ve bilinen sorunları döndürür.
  
  ## Temel İş Akışı Deseni
  
  ### Adım 1: Kullanılabilir Tool'ları Keşfet
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Cloudconvert task"}]
  session: {id: "existing_session_id"}
  ```
  
  ### Adım 2: Bağlantı Kontrolü
  
  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["cloudconvert"]
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
  
  - **Her zaman önce arayın**: Tool şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan tool slug'larını veya argümanları asla hardcode etmeyin
  - **Bağlantı kontrolü**: Tool'ları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` durumunun ACTIVE olduğunu doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarına her zaman `memory` parametresini ekleyin, boş olsa bile (`{}`)
  - **Oturum yeniden kullanımı**: Bir iş akışı içinde oturum ID'lerini yeniden kullanın. Yeni iş akışları için yenilerini oluşturun
  - **Pagination**: Yanıtları pagination token'ları açısından kontrol edin ve tamamlanana kadar getirmeye devam edin
  
  ## Hızlı Referans
  
  | İşlem | Yaklaşım |
  |-----------|----------|
  | Tool bulma | Cloudconvert'e özgü use case ile `RUBE_SEARCH_TOOLS` |
  | Bağlanma | `RUBE_MANAGE_CONNECTIONS` ile `cloudconvert` toolkit'i |
  | Çalıştırma | Keşfedilen tool slug'ları ile `RUBE_MULTI_EXECUTE_TOOL` |
  | Toplu işlemler | `run_composio_tool()` ile `RUBE_REMOTE_WORKBENCH` |
  | Tam şema | `schemaRef` olan tool'lar için `RUBE_GET_TOOL_SCHEMAS` |
  
  ---
  *Powered by [Composio](https://composio.dev)*
---

# Cloudconvert Automation via Rube MCP

Automate Cloudconvert operations through Composio's Cloudconvert toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/cloudconvert](https://composio.dev/toolkits/cloudconvert)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Cloudconvert connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `cloudconvert`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `cloudconvert`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Cloudconvert operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Cloudconvert task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["cloudconvert"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Cloudconvert-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `cloudconvert` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
