---
name: "active-campaign-automation"
description_en: "Automate ActiveCampaign tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "ActiveCampaign görevlerini Rube MCP (Composio) aracılığıyla otomatikleştirin. Her zaman mevcut şemaları için önce araçları arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 61753
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/active-campaign-automation/SKILL.md"
path: "composio-skills/active-campaign-automation/SKILL.md"
is_collection: false
body_length: 2848
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # ActiveCampaign Otomasyonu via Rube MCP

  Composio'nun ActiveCampaign araç seti aracılığıyla Rube MCP üzerinden ActiveCampaign işlemlerini otomatikleştirin.

  **Araç seti dokümentasyonu**: [composio.dev/toolkits/active_campaign](https://composio.dev/toolkits/active_campaign)

  ## Ön Koşullar

  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS mevcut)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla `active_campaign` araç seti ile etkin ActiveCampaign bağlantısı
  - Güncel araç şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın

  ## Kurulum

  **Rube MCP'yi Edinin**: İstemci konfigürasyonunda `https://rube.app/mcp` adresini MCP sunucusu olarak ekleyin. API anahtarına gerek yoktur — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt verdiğini doğrulayarak Rube MCP'nin mevcut olduğunu kontrol edin
  2. `active_campaign` araç seti ile `RUBE_MANAGE_CONNECTIONS` çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth linkini takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Araç Keşfi

  İş akışlarını çalıştırmadan önce her zaman mevcut araçları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "ActiveCampaign operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, mevcut araç slugları, input şemaları, önerilen yürütme planları ve bilinen sorunları döndürür.

  ## Temel İş Akışı Deseni

  ### Adım 1: Mevcut Araçları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific ActiveCampaign task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Edin

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["active_campaign"]
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

  - **Her zaman önce arayın**: Araç şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan araç sluglarını veya argümanlarını asla hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Araçları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` ACTIVE durumu gösterir mi diye kontrol edin
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory` ekleyin, boş olsa bile (`{}`)
  - **Oturum yeniden kullanımı**: Bir iş akışı içinde session ID'lerini yeniden kullanın. Yeni iş akışları için yeni olanlar oluşturun
  - **Pagination**: Yanıtlarda pagination tokenları kontrol edin ve tamamlanana kadar almaya devam edin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-----------|----------|
  | Araçları bul | `RUBE_SEARCH_TOOLS` ile ActiveCampaign'a özgü kullanım durumu |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` ile `active_campaign` araç seti |
  | Yürüt | `RUBE_MULTI_EXECUTE_TOOL` keşfedilen araç slugları ile |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` ile `run_composio_tool()` |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` `schemaRef` ile araçlar için |

  ---
  *Powered by [Composio](https://composio.dev)*
---

# ActiveCampaign Automation via Rube MCP

Automate ActiveCampaign operations through Composio's ActiveCampaign toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/active_campaign](https://composio.dev/toolkits/active_campaign)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active ActiveCampaign connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `active_campaign`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `active_campaign`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "ActiveCampaign operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific ActiveCampaign task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["active_campaign"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with ActiveCampaign-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `active_campaign` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
