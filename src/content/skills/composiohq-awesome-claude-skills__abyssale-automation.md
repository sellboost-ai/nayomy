---
name: "abyssale-automation"
description_en: "Automate Abyssale tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Rube MCP (Composio) ile Abyssale görevlerini otomatikleştirin. Her zaman güncel şemaları bulmak için önce tools'ü arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 61753
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/abyssale-automation/SKILL.md"
path: "composio-skills/abyssale-automation/SKILL.md"
is_collection: false
body_length: 2764
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Rube MCP Aracılığıyla Abyssale Otomasyonu

  Composio'nun Abyssale araç seti aracılığıyla Rube MCP üzerinden Abyssale operasyonlarını otomatikleştirin.

  **Araç seti dokümantasyonu**: [composio.dev/toolkits/abyssale](https://composio.dev/toolkits/abyssale)

  ## Ön Koşullar

  - Rube MCP bağlantılı olmalı (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Abyssale bağlantısı (`abyssale` araç seti ile)
  - Geçerli araç şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağrısını yapın

  ## Kurulum

  **Rube MCP Alın**: `https://rube.app/mcp` adresini istemci yapılandırmanızda MCP sunucusu olarak ekleyin. API anahtarı gerekli değildir — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt vererek Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS` çağrısını `abyssale` araç seti ile yapın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth linkini takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Araç Keşfi

  Workflow'ları çalıştırmadan önce her zaman kullanılabilir araçları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Abyssale operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, kullanılabilir araç slug'larını, input şemalarını, önerilen execution planlarını ve bilinen sorunları döndürür.

  ## Temel Workflow Deseni

  ### Adım 1: Kullanılabilir Araçları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Abyssale task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Edin

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["abyssale"]
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

  - **Her zaman önce arama yapın**: Araç şemaları değişebilir. `RUBE_SEARCH_TOOLS` çağrısı yapmadan araç slug'larını veya argümanlarını asla hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Araçları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` durumunun ACTIVE olduğunu doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory` parametresini ekleyin, boş olsa bile (`{}`)
  - **Oturum yeniden kullanımı**: Bir workflow içinde oturum ID'lerini yeniden kullanın. Yeni workflow'lar için yeni olanlar oluşturun
  - **Sayfalandırma**: Yanıtları sayfalandırma token'ları için kontrol edin ve tam olana kadar getirmeye devam edin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-----------|----------|
  | Araçları bul | `RUBE_SEARCH_TOOLS` ile Abyssale'ye özgü use case |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` ile `abyssale` araç seti |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` ile keşfedilen araç slug'ları |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` ile `run_composio_tool()` |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` ile `schemaRef` içeren araçlar |

  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Abyssale Automation via Rube MCP

Automate Abyssale operations through Composio's Abyssale toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/abyssale](https://composio.dev/toolkits/abyssale)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Abyssale connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `abyssale`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `abyssale`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Abyssale operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Abyssale task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["abyssale"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Abyssale-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `abyssale` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
