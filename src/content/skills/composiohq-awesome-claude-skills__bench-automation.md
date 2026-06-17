---
name: "bench-automation"
description_en: "Automate Bench tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Rube MCP (Composio) aracılığıyla Bench görevlerini otomatikleştirin. Her zaman güncel schemaları için önce tools'da arama yapın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 64852
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/bench-automation/SKILL.md"
path: "composio-skills/bench-automation/SKILL.md"
is_collection: false
body_length: 2725
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Rube MCP ile Bench Otomasyonu

  Composio'nun Bench toolkit'i aracılığıyla Rube MCP üzerinden Bench işlemlerini otomatikleştirin.

  **Toolkit dokümantasyonu**: [composio.dev/toolkits/bench](https://composio.dev/toolkits/bench)

  ## Ön Koşullar

  - Rube MCP bağlı olmalı (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Bench bağlantısı ve `bench` toolkit'i
  - Mevcut tool şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın

  ## Kurulum

  **Rube MCP'yi Alın**: İstemci konfigürasyonunuzda `https://rube.app/mcp` adresini MCP sunucusu olarak ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt verip vermediğini kontrol ederek Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS` çağırın ve `bench` toolkit'ini belirtin
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth bağlantısını takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Tool Keşfi

  İş akışlarını çalıştırmadan önce her zaman kullanılabilir tool'ları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Bench operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, kullanılabilir tool slug'larını, input şemalarını, önerilen yürütme planlarını ve bilinen sorunları döndürür.

  ## Temel İş Akışı Deseni

  ### Adım 1: Kullanılabilir Tool'ları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Bench task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Edin

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["bench"]
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

  ## Bilinen Sorunlar

  - **Her zaman önce arayın**: Tool şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan asla tool slug'larını veya argümanları hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Tool'ları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` durumunun ACTIVE olduğunu doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adları ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarına her zaman `memory` parametresi ekleyin, boş olsa da (`{}`)
  - **Session yeniden kullanımı**: Bir iş akışı içinde session ID'lerini yeniden kullanın. Yeni iş akışları için yenilerini oluşturun
  - **Sayfalandırma**: Yanıtlarda sayfalandırma tokenlarını kontrol edin ve tam olana kadar getirmeye devam edin

  ## Hızlı Referans

  | İşlem | Yöntem |
  |-----------|----------|
  | Tool'ları bul | `RUBE_SEARCH_TOOLS` ile Bench'e özel use case |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` ile `bench` toolkit'i |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` ile keşfedilen tool slug'larını |
  | Toplu işler | `RUBE_REMOTE_WORKBENCH` ile `run_composio_tool()` |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` ile `schemaRef` içeren tool'lar |

  ---
  *[Composio](https://composio.dev) tarafından destekleniyor*
---

# Bench Automation via Rube MCP

Automate Bench operations through Composio's Bench toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/bench](https://composio.dev/toolkits/bench)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Bench connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `bench`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `bench`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Bench operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Bench task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["bench"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Bench-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `bench` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
