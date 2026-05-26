---
name: "-2chat-automation"
description_en: "Automate 2chat tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Rube MCP (Composio) ile 2chat görevlerini otomatikleştirin. Güncel şemaları bulabilmek için her zaman önce araçları arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 61753
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/-2chat-automation/SKILL.md"
path: "composio-skills/-2chat-automation/SKILL.md"
is_collection: false
body_length: 2731
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Rube MCP aracılığıyla 2chat Otomasyonu

  Composio'nun 2chat araç seti aracılığıyla Rube MCP kullanarak 2chat işlemlerini otomatikleştirin.

  **Araç seti dokümantasyonu**: [composio.dev/toolkits/_2chat](https://composio.dev/toolkits/_2chat)

  ## Ön Koşullar

  - Rube MCP bağlanmış olmalı (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla `_2chat` araç seti ile aktif 2chat bağlantısı
  - Her zaman mevcut araç şemalarını almak için `RUBE_SEARCH_TOOLS` çağırın

  ## Kurulum

  **Rube MCP'yi Alın**: İstemci konfigürasyonunuzda `https://rube.app/mcp` adresini MCP sunucusu olarak ekleyin. API anahtarı gerekmez — yalnızca endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt veriyorsa Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `_2chat` araç seti ile `RUBE_MANAGE_CONNECTIONS` çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth bağlantısını izleyin
  4. Herhangi bir iş akışı çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Araç Keşfi

  İş akışlarını yürütmeden önce her zaman kullanılabilir araçları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "2chat operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, kullanılabilir araç slugları, input şemaları, önerilen yürütme planları ve bilinen sorunları döndürür.

  ## Temel İş Akışı Deseni

  ### Adım 1: Kullanılabilir Araçları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific 2chat task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Edin

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["_2chat"]
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

  - **Her zaman önce arayın**: Araç şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan araç slugları veya argümanları hiçbir zaman hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Araçları yürütmeden önce `RUBE_MANAGE_CONNECTIONS` durumunun ACTIVE olduğunu doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adları ve türleri kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory` parametresini ekleyin, boş olsa bile (`{}`)
  - **Oturum yeniden kullanımı**: Bir iş akışı içinde oturum kimliklerini yeniden kullanın. Yeni iş akışları için yenisini oluşturun
  - **Sayfalandırma**: Yanıtlarda sayfalandırma tokenları kontrol edin ve tam olana kadar getirmeye devam edin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-----------|----------|
  | Araçları bul | `RUBE_SEARCH_TOOLS` ile 2chat'e özgü kullanım durumu |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` ile `_2chat` araç seti |
  | Yürüt | `RUBE_MULTI_EXECUTE_TOOL` ile keşfedilen araç slugları |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` ile `run_composio_tool()` |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` ile `schemaRef` araçları |

  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# 2chat Automation via Rube MCP

Automate 2chat operations through Composio's 2chat toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/_2chat](https://composio.dev/toolkits/_2chat)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active 2chat connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `_2chat`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `_2chat`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "2chat operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific 2chat task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["_2chat"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with 2chat-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `_2chat` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
