---
name: "coinranking-automation"
description_en: "Automate Coinranking tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Coinranking görevlerini Rube MCP (Composio) üzerinden otomatikleştirin. Mevcut şemaları kontrol etmek için her zaman önce arama araçlarını kullanın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 64852
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/coinranking-automation/SKILL.md"
path: "composio-skills/coinranking-automation/SKILL.md"
is_collection: false
body_length: 2803
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Coinranking Otomasyonu Rube MCP ile

  Composio'nun Coinranking araç takımı aracılığıyla Rube MCP üzerinden Coinranking operasyonlarını otomatikleştirin.

  **Araç takımı dokümantasyonu**: [composio.dev/toolkits/coinranking](https://composio.dev/toolkits/coinranking)

  ## Ön Koşullar

  - Rube MCP bağlantılı olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Coinranking bağlantısı ve `coinranking` araç takımı
  - Her zaman mevcut araç şemalarını almak için `RUBE_SEARCH_TOOLS` çağırın

  ## Kurulum

  **Rube MCP'yi Alın**: İstemci konfigürasyonunuzda MCP sunucusu olarak `https://rube.app/mcp` ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt verip vermediğini kontrol ederek Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS` komutunu `coinranking` araç takımıyla çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth linkini takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Araç Keşfi

  İş akışları çalıştırmadan önce her zaman mevcut araçları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Coinranking operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, mevcut araç sluglarını, input şemalarını, önerilen execution planlarını ve bilinen sorunları döndürür.

  ## Temel İş Akışı Deseni

  ### Adım 1: Mevcut Araçları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Coinranking task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Edin

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["coinranking"]
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

  - **Her zaman önce arama yapın**: Araç şemaları değişebilir. `RUBE_SEARCH_TOOLS` çağrısı yapmadan araç sluglarını veya argümanlarını hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Araçları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` komutunun ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adları ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory` parametresini dahil edin, boş olsa bile (`{}`)
  - **Session yeniden kullanımı**: Bir iş akışı içinde session ID'lerini yeniden kullanın. Yeni iş akışları için yeni olanlar oluşturun
  - **Pagination**: Yanıtlarda pagination tokenlarını kontrol edin ve tamamlanana kadar getirmeye devam edin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-----------|----------|
  | Araçları bulun | `RUBE_SEARCH_TOOLS` Coinranking'e özgü use case ile |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` `coinranking` araç takımıyla |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` keşfedilen araç sluglarıyla |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` `run_composio_tool()` ile |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` `schemaRef` içeren araçlar için |

  ---
  *Powered by [Composio](https://composio.dev)*
---

# Coinranking Automation via Rube MCP

Automate Coinranking operations through Composio's Coinranking toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/coinranking](https://composio.dev/toolkits/coinranking)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Coinranking connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `coinranking`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `coinranking`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Coinranking operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Coinranking task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["coinranking"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Coinranking-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `coinranking` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
