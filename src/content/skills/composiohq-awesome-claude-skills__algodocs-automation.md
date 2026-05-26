---
name: "algodocs-automation"
description_en: "Automate Algodocs tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Algodocs görevlerini Rube MCP (Composio) aracılığıyla otomatikleştirin. Her zaman mevcut şemaları kontrol etmek için önce araçları arayın."
category: "Document"
repo: "ComposioHQ/awesome-claude-skills"
stars: 61753
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/algodocs-automation/SKILL.md"
path: "composio-skills/algodocs-automation/SKILL.md"
is_collection: false
body_length: 2764
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Algodocs Otomasyon via Rube MCP

  Composio'nun Algodocs toolkit'i aracılığıyla Rube MCP üzerinden Algodocs işlemlerini otomatikleştirin.

  **Toolkit dokümentasyonu**: [composio.dev/toolkits/algodocs](https://composio.dev/toolkits/algodocs)

  ## Ön Koşullar

  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Algodocs bağlantısı ve `algodocs` toolkit'i
  - Güncel tool şemalarını almak için her zaman önce `RUBE_SEARCH_TOOLS` çağırın

  ## Kurulum

  **Rube MCP'yi alın**: MCP sunucunuzu yapılandırırken `https://rube.app/mcp` adresini MCP server'ı olarak ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt vererek Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS`'ı `algodocs` toolkit'i ile çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth linkini takip edin
  4. Workflow'ları çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Tool Keşfi

  Workflow'ları çalıştırmadan önce her zaman kullanılabilir tool'ları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Algodocs operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, kullanılabilir tool slug'larını, input şemalarını, önerilen yürütme planlarını ve bilinen tuzakları döndürür.

  ## Temel Workflow Deseni

  ### Adım 1: Kullanılabilir Tool'ları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Algodocs task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Edin

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["algodocs"]
  session_id: "your_session_id"
  ```

  ### Adım 3: Tool'ları Çalıştırın

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

  - **Her zaman önce arama yapın**: Tool şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan tool slug'larını veya argümanları asla kodlamayın
  - **Bağlantıyı kontrol edin**: Tool'ları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS`'ın ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uyumu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarına her zaman `memory` ekleyin, boş olsa bile (`{}`)
  - **Oturum yeniden kullanımı**: Bir workflow içinde oturum kimliklerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Sayfalandırma**: Yanıtlarda sayfalandırma token'larını kontrol edin ve tamamlanana kadar getirmeye devam edin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-------|---------|
  | Tool'ları bulun | `RUBE_SEARCH_TOOLS` Algodocs'a özgü use case ile |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` ve `algodocs` toolkit'i ile |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` ve keşfedilen tool slug'ları ile |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` ve `run_composio_tool()` ile |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` ve `schemaRef` olan tool'lar için |

  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Algodocs Automation via Rube MCP

Automate Algodocs operations through Composio's Algodocs toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/algodocs](https://composio.dev/toolkits/algodocs)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Algodocs connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `algodocs`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `algodocs`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Algodocs operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Algodocs task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["algodocs"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Algodocs-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `algodocs` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
