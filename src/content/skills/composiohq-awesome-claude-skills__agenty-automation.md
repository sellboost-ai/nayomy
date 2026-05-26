---
name: "agenty-automation"
description_en: "Automate Agenty tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Agenty görevlerini Rube MCP (Composio) aracılığıyla otomatikleştirin. Mevcut şemaları bulmak için her zaman araçları önce arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 61753
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/agenty-automation/SKILL.md"
path: "composio-skills/agenty-automation/SKILL.md"
is_collection: false
body_length: 2738
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Agenty Otomasyonu Rube MCP Üzerinden

  Composio'nun Agenty araç takımı aracılığıyla Rube MCP üzerinden Agenty işlemlerini otomatikleştirin.

  **Araç takımı dokümantasyonu**: [composio.dev/toolkits/agenty](https://composio.dev/toolkits/agenty)

  ## Ön Koşullar

  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla etkin Agenty bağlantısı ve `agenty` araç takımı
  - Geçerli araç şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın

  ## Kurulum

  **Rube MCP'yi Alın**: `https://rube.app/mcp` adresini istemci yapılandırmanızda MCP sunucusu olarak ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt verdiğini doğrulayarak Rube MCP'nin kullanılabilir olduğunu kontrol edin
  2. `RUBE_MANAGE_CONNECTIONS` öğesini `agenty` araç takımı ile çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth bağlantısını takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Araç Keşfi

  Workflow'ları çalıştırmadan önce her zaman mevcut araçları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Agenty operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, mevcut araç slug'larını, giriş şemalarını, önerilen yürütme planlarını ve bilinen sorunları döndürür.

  ## Temel Workflow Deseni

  ### Adım 1: Mevcut Araçları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Agenty task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Edin

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["agenty"]
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

  - **Her zaman önce arayın**: Araç şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan araç slug'larını veya argümanlarını asla hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Araçları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` öğesinin ACTIVE durumu gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory` ekleyin, boş olsa da (`{}`)
  - **Oturum yeniden kullanımı**: Bir workflow içinde oturum kimliklerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Sayfalandırma**: Yanıtlarda sayfalandırma token'larını kontrol edin ve işlem tamamlanana kadar getirmeye devam edin

  ## Hızlı Başvuru

  | İşlem | Yaklaşım |
  |-----------|----------|
  | Araç bulma | Agenty'e özel use case ile `RUBE_SEARCH_TOOLS` |
  | Bağlantı | `RUBE_MANAGE_CONNECTIONS` ile `agenty` araç takımı |
  | Yürütme | Keşfedilen araç slug'ları ile `RUBE_MULTI_EXECUTE_TOOL` |
  | Toplu işlemler | `run_composio_tool()` ile `RUBE_REMOTE_WORKBENCH` |
  | Tam şema | `schemaRef` olan araçlar için `RUBE_GET_TOOL_SCHEMAS` |

  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Agenty Automation via Rube MCP

Automate Agenty operations through Composio's Agenty toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/agenty](https://composio.dev/toolkits/agenty)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Agenty connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `agenty`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `agenty`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Agenty operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Agenty task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["agenty"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Agenty-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `agenty` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
