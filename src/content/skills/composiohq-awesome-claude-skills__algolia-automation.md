---
name: "algolia-automation"
description_en: "Automate Algolia tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Rube MCP (Composio) aracılığıyla Algolia görevlerini otomatikleştirin. Her zaman güncel şemaları için tools içinde arama yapın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 61753
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/algolia-automation/SKILL.md"
path: "composio-skills/algolia-automation/SKILL.md"
is_collection: false
body_length: 2751
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Algolia Otomasyonu Rube MCP ile

  Composio'nun Algolia araç seti ile Algolia operasyonlarını Rube MCP üzerinden otomatikleştirin.

  **Araç seti dokümantasyonu**: [composio.dev/toolkits/algolia](https://composio.dev/toolkits/algolia)

  ## Ön Koşullar

  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS mevcut)
  - `RUBE_MANAGE_CONNECTIONS` ile aktif Algolia bağlantısı (`algolia` araç seti)
  - Mevcut araç şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın

  ## Kurulum

  **Rube MCP'yi Alın**: MCP sunucu konfigürasyonunuza `https://rube.app/mcp` ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt vererek Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS` çağırarak `algolia` araç setini seçin
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen yetkilendirme bağlantısını takip edin
  4. Herhangi bir iş akışını çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Araç Bulma

  İş akışlarını yürütmeden önce her zaman kullanılabilir araçları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Algolia operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, kullanılabilir araç slug'larını, giriş şemalarını, önerilen yürütme planlarını ve bilinen sorunları döndürür.

  ## Temel İş Akışı Deseni

  ### Adım 1: Kullanılabilir Araçları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Algolia task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantı Kontrolü

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["algolia"]
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

  - **Her zaman önce arayın**: Araç şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan araç slug'larını veya argümanlarını asla sabit kodlamayın
  - **Bağlantı kontrolü**: Araçları yürütmeden önce `RUBE_MANAGE_CONNECTIONS` ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory`'i dahil edin, boş olsa bile (`{}`)
  - **Oturum yeniden kullanımı**: Bir iş akışı içinde oturum kimliklerini yeniden kullanın. Yeni iş akışları için yenilerini oluşturun
  - **Sayfalama**: Sayfalama token'ları için yanıtları kontrol edin ve tamamlanana kadar getirmeye devam edin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-------|----------|
  | Araçları bul | `RUBE_SEARCH_TOOLS` ile Algolia'ya özgü kullanım durumu |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` ile `algolia` araç seti |
  | Yürüt | `RUBE_MULTI_EXECUTE_TOOL` ile keşfedilen araç slug'ları |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` ile `run_composio_tool()` |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` ile `schemaRef` araçları için |

  ---
  *[Composio](https://composio.dev) tarafından desteklenir*
---

# Algolia Automation via Rube MCP

Automate Algolia operations through Composio's Algolia toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/algolia](https://composio.dev/toolkits/algolia)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Algolia connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `algolia`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `algolia`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Algolia operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Algolia task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["algolia"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Algolia-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `algolia` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
