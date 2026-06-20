---
name: "backendless-automation"
description_en: "Automate Backendless tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Rube MCP (Composio) aracılığıyla Backendless görevlerini otomatikleştirin. Her zaman güncel şemaları için ilk olarak tools'ı arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 65266
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/backendless-automation/SKILL.md"
path: "composio-skills/backendless-automation/SKILL.md"
is_collection: false
body_length: 2803
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Rube MCP ile Backendless Otomasyonu
  
  Composio'nun Backendless araç seti üzerinden Rube MCP ile Backendless işlemlerini otomatikleştirin.
  
  **Araç seti dökümanları**: [composio.dev/toolkits/backendless](https://composio.dev/toolkits/backendless)
  
  ## Ön Koşullar
  
  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla etkin Backendless bağlantısı ve `backendless` araç seti
  - Güncel araç şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın
  
  ## Kurulum
  
  **Rube MCP'yi alın**: MCP sunucu yapılandırmanızda `https://rube.app/mcp` adresini MCP sunucusu olarak ekleyin. API anahtarı gerekli değildir — uç noktayı eklemeniz yeterlidir, geri kalanı otomatik çalışır.
  
  1. `RUBE_SEARCH_TOOLS` yanıt vererek Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `backendless` araç seti ile `RUBE_MANAGE_CONNECTIONS` çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen yetkilendirme bağlantısını takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın
  
  ## Araç Keşfi
  
  İş akışlarını çalıştırmadan önce her zaman mevcut araçları keşfedin:
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Backendless işlemleri", known_fields: ""}]
  session: {generate_id: true}
  ```
  
  Bu, mevcut araç slug'larını, input şemalarını, önerilen yürütme planlarını ve bilinen tuzakları döndürür.
  
  ## Temel İş Akışı Deseni
  
  ### Adım 1: Mevcut Araçları Keşfet
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "sizin spesifik Backendless göreviniz"}]
  session: {id: "mevcut_session_id"}
  ```
  
  ### Adım 2: Bağlantıyı Kontrol Et
  
  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["backendless"]
  session_id: "sizin_session_id"
  ```
  
  ### Adım 3: Araçları Çalıştır
  
  ```
  RUBE_MULTI_EXECUTE_TOOL
  tools: [{
    tool_slug: "ARAMA_SONUCUNDAN_TOOL_SLUG",
    arguments: {/* arama sonuçlarından şema uyumlu argümanlar */}
  }]
  memory: {}
  session_id: "sizin_session_id"
  ```
  
  ## Bilinen Tuzaklar
  
  - **Her zaman önce ara**: Araç şemaları değişebilir. `RUBE_SEARCH_TOOLS` çağırmadan araç slug'larını veya argümanlarını asla hardcode etmeyin
  - **Bağlantıyı kontrol et**: Araçları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS`'in ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory` parametresini ekleyin, boş olsa da (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Pagination**: Yanıtları pagination token'ları açısından kontrol edin ve tamamlanana kadar almaya devam edin
  
  ## Hızlı Başvuru
  
  | İşlem | Yaklaşım |
  |-----------|----------|
  | Araçları bul | `RUBE_SEARCH_TOOLS` ile Backendless'e özgü use case |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` ile `backendless` araç seti |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` ile keşfedilmiş araç slug'ları |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` ile `run_composio_tool()` |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` ile `schemaRef` alanına sahip araçlar |
  
  ---
  *[Composio](https://composio.dev) tarafından sunulmaktadır*
---

# Backendless Automation via Rube MCP

Automate Backendless operations through Composio's Backendless toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/backendless](https://composio.dev/toolkits/backendless)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Backendless connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `backendless`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `backendless`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Backendless operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Backendless task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["backendless"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Backendless-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `backendless` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
