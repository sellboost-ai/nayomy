---
name: "alchemy-automation"
description_en: "Automate Alchemy tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Rube MCP (Composio) aracılığıyla Alchemy görevlerini otomatikleştirin. Her zaman geçerli schemaları için önce toolları arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 61753
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/alchemy-automation/SKILL.md"
path: "composio-skills/alchemy-automation/SKILL.md"
is_collection: false
body_length: 2751
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Rube MCP aracılığıyla Alchemy Otomasyonu

  Composio'nun Alchemy araç seti üzerinden Rube MCP aracılığıyla Alchemy işlemlerini otomatikleştirin.

  **Araç seti dokümanları**: [composio.dev/toolkits/alchemy](https://composio.dev/toolkits/alchemy)

  ## Ön Koşullar

  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS mevcut)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Alchemy bağlantısı (`alchemy` araç seti ile)
  - Geçerli tool şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağrısını yapın

  ## Kurulum

  **Rube MCP'yi Alın**: İstemci konfigürasyonunuzda `https://rube.app/mcp` adresini bir MCP sunucusu olarak ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS`'un yanıt verdiğini doğrulayarak Rube MCP'nin kullanılabilir olduğunu kontrol edin
  2. `RUBE_MANAGE_CONNECTIONS`'ı `alchemy` araç seti ile çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth bağlantısını takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Tool Keşfi

  İş akışlarını çalıştırmadan önce her zaman mevcut toolları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Alchemy operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, mevcut tool slugları, input şemaları, önerilen yürütme planları ve bilinen sorunları döndürür.

  ## Temel İş Akışı Deseni

  ### Adım 1: Mevcut Toolları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Alchemy task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Edin

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["alchemy"]
  session_id: "your_session_id"
  ```

  ### Adım 3: Toolları Çalıştırın

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

  - **Her zaman önce ara**: Tool şemaları değişebilir. `RUBE_SEARCH_TOOLS` çağrısı yapılmadan tool slugları veya argümanları hiçbir zaman sabit kodlamayın
  - **Bağlantıyı kontrol edin**: Toolları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS`'ın ACTIVE durum gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarındaki tam alan adları ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory` parametresini dahil edin, boş olsa bile (`{}`)
  - **Session yeniden kullanımı**: Bir iş akışı içinde session ID'lerini yeniden kullanın. Yeni iş akışları için yenilerini oluşturun
  - **Sayfalandırma**: Yanıtlarda sayfalandırma tokenlarını kontrol edin ve tamamlanana kadar getirmeye devam edin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-----------|----------|
  | Toolları bul | `RUBE_SEARCH_TOOLS` ile Alchemy'ye özel use case |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` ile `alchemy` araç seti |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` ile keşfedilen tool slugları |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` ile `run_composio_tool()` |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` ile `schemaRef` sahip toollar için |

  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Alchemy Automation via Rube MCP

Automate Alchemy operations through Composio's Alchemy toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/alchemy](https://composio.dev/toolkits/alchemy)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Alchemy connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `alchemy`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `alchemy`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Alchemy operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Alchemy task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["alchemy"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Alchemy-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `alchemy` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
