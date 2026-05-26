---
name: "amazon-automation"
description_en: "Automate Amazon tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Amazon görevlerini Rube MCP (Composio) üzerinden otomatikleştirin. Her zaman güncel şemaları için araçları önce arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 61753
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/amazon-automation/SKILL.md"
path: "composio-skills/amazon-automation/SKILL.md"
is_collection: false
body_length: 2738
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Amazon Otomasyonu via Rube MCP

  Composio'nun Amazon araç seti aracılığıyla Rube MCP üzerinden Amazon operasyonlarını otomatikleştirin.

  **Araç seti dokümantasyonu**: [composio.dev/toolkits/amazon](https://composio.dev/toolkits/amazon)

  ## Ön Koşullar

  - Rube MCP bağlantılı olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla etkin Amazon bağlantısı ve `amazon` araç seti
  - Güncel araç şemalarını almak için her zaman önce `RUBE_SEARCH_TOOLS` çağırın

  ## Kurulum

  **Rube MCP'yi Alın**: İstemci yapılandırmanızda MCP server olarak `https://rube.app/mcp` ekleyin. API anahtarlarına gerek yoktur — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt verip vermediğini kontrol ederek Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS`'ı `amazon` araç seti ile çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth bağlantısını takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Araç Bulma

  Workflow'ları çalıştırmadan önce her zaman kullanılabilir araçları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Amazon operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, kullanılabilir araç slug'larını, input şemalarını, önerilen execution planlarını ve bilinen sorunları döndürür.

  ## Temel Workflow Deseni

  ### Adım 1: Kullanılabilir Araçları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Amazon task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Edin

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["amazon"]
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

  - **Her zaman önce arayın**: Araç şemaları değişebilir. `RUBE_SEARCH_TOOLS` çağırmadan araç slug'larını veya argümanlarını asla hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Araçları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS`'ın ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory` parametresini ekleyin, boş olsa bile (`{}`)
  - **Session yeniden kullanımı**: Bir workflow içinde session ID'lerini yeniden kullanın. Yeni workflow'lar için yeni olanlar oluşturun
  - **Pagination**: Yanıtları pagination token'ları için kontrol edin ve tümü alınana kadar getirmeye devam edin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-----------|----------|
  | Araçları bul | `RUBE_SEARCH_TOOLS` ile Amazon-spesifik kullanım senaryosu |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` ile `amazon` araç seti |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` ile keşfedilmiş araç slug'larını |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` ile `run_composio_tool()` |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` ile `schemaRef`'i olan araçlar için |

  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Amazon Automation via Rube MCP

Automate Amazon operations through Composio's Amazon toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/amazon](https://composio.dev/toolkits/amazon)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Amazon connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `amazon`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `amazon`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Amazon operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Amazon task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["amazon"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Amazon-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `amazon` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
