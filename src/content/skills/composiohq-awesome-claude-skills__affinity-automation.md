---
name: "affinity-automation"
description_en: "Automate Affinity tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Rube MCP (Composio) ile Affinity görevlerini otomatikleştirin. Tool'ları kullanmadan önce her zaman mevcut şemaları kontrol edin."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 61753
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/affinity-automation/SKILL.md"
path: "composio-skills/affinity-automation/SKILL.md"
is_collection: false
body_length: 2764
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Affinity Otomasyonu Rube MCP aracılığıyla

  Composio'nun Affinity araç seti aracılığıyla Rube MCP üzerinden Affinity işlemlerini otomatikleştirin.

  **Araç seti dokümantasyonu**: [composio.dev/toolkits/affinity](https://composio.dev/toolkits/affinity)

  ## Ön Koşullar

  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Affinity bağlantısı (`affinity` araç seti ile)
  - Her zaman mevcut araç şemalarını almak için `RUBE_SEARCH_TOOLS` çağrısı yapın

  ## Kurulum

  **Rube MCP'yi Alın**: İstemci konfigürasyonunuzda MCP sunucusu olarak `https://rube.app/mcp` ekleyin. API anahtarına ihtiyaç yok — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt vererek Rube MCP'nin mevcut olduğunu doğrulayın
  2. `affinity` araç seti ile `RUBE_MANAGE_CONNECTIONS` çağrısı yapın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen yetkilendirme bağlantısını takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Araç Keşfi

  Workflow'ları çalıştırmadan önce her zaman mevcut araçları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Affinity operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, mevcut araç slug'larını, input şemalarını, önerilen yürütme planlarını ve bilinen tuzakları döndürür.

  ## Temel Workflow Deseni

  ### Adım 1: Mevcut Araçları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Affinity task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Edin

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["affinity"]
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

  - **Her zaman ilk olarak arama yapın**: Araç şemaları değişir. `RUBE_SEARCH_TOOLS` çağrısı yapmadan araç slug'larını veya argümanlarını asla hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Araçları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` durumunun ACTIVE olduğunu doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory` ekleyin, boş olsa bile (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Sayfalandırma**: Yanıtlarda sayfalandırma tokenlerini kontrol edin ve tamamlanana kadar almaya devam edin

  ## Hızlı Başvuru

  | İşlem | Yaklaşım |
  |-----------|----------|
  | Araçları bul | `RUBE_SEARCH_TOOLS` (Affinity'ye özgü kullanım durumu ile) |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` (`affinity` araç seti ile) |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` (keşfedilen araç slug'ları ile) |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` (`run_composio_tool()` ile) |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` (`schemaRef` olan araçlar için) |

  ---
  *[Composio](https://composio.dev) tarafından sunulmuştur*
---

# Affinity Automation via Rube MCP

Automate Affinity operations through Composio's Affinity toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/affinity](https://composio.dev/toolkits/affinity)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Affinity connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `affinity`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `affinity`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Affinity operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Affinity task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["affinity"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Affinity-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `affinity` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
