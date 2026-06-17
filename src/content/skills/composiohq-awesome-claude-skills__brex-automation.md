---
name: "brex-automation"
description_en: "Automate Brex tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Rube MCP (Composio) aracılığıyla Brex görevlerini otomatikleştirin. Tools'u her zaman güncel şemaları kontrol etmek için önce araştırın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 64852
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/brex-automation/SKILL.md"
path: "composio-skills/brex-automation/SKILL.md"
is_collection: false
body_length: 2712
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Brex Otomasyonu via Rube MCP

  Composio'nun Brex toolkit'i aracılığıyla Rube MCP ile Brex işlemlerini otomatikleştirin.

  **Toolkit dokümentasyonu**: [composio.dev/toolkits/brex](https://composio.dev/toolkits/brex)

  ## Ön Koşullar

  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS mevcut)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Brex bağlantısı (toolkit `brex`)
  - Geçerli tool şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağırın

  ## Kurulum

  **Rube MCP'yi Alın**: `https://rube.app/mcp` adresini istemci konfigürasyonunuza MCP sunucusu olarak ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt verdiğini doğrulayarak Rube MCP'nin kullanılabilir olduğunu kontrol edin
  2. `RUBE_MANAGE_CONNECTIONS` öğesini `brex` toolkit'i ile çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth linkini takip edin
  4. İş akışlarını çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Tool Discovery

  İş akışlarını çalıştırmadan önce her zaman kullanılabilir tool'ları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Brex operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, kullanılabilir tool slug'ları, input şemalarını, önerilen yürütme planlarını ve bilinen tuzakları döndürür.

  ## Temel İş Akışı Deseni

  ### Adım 1: Kullanılabilir Tool'ları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Brex task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Edin

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["brex"]
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

  - **Her zaman önce arayın**: Tool şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan hiçbir zaman tool slug'ları veya argümanları hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Tool'ları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` öğesinin ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory` ekleyin, boş olsa bile (`{}`)
  - **Oturum yeniden kullanımı**: Bir iş akışı içinde oturum kimliklerini yeniden kullanın. Yeni iş akışları için yenilerini oluşturun
  - **Pagination**: Yanıtlardaki pagination token'ları kontrol edin ve tamamlanana kadar getirmeyi devam ettirin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-----------|----------|
  | Tool'ları bulun | Brex'e özgü use case ile `RUBE_SEARCH_TOOLS` |
  | Bağlantı kurun | `brex` toolkit'i ile `RUBE_MANAGE_CONNECTIONS` |
  | Çalıştırın | Keşfedilen tool slug'ları ile `RUBE_MULTI_EXECUTE_TOOL` |
  | Toplu işlemler | `run_composio_tool()` ile `RUBE_REMOTE_WORKBENCH` |
  | Tam şema | `schemaRef` ile tool'lar için `RUBE_GET_TOOL_SCHEMAS` |

  ---
  *Powered by [Composio](https://composio.dev)*
---

# Brex Automation via Rube MCP

Automate Brex operations through Composio's Brex toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/brex](https://composio.dev/toolkits/brex)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Brex connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `brex`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `brex`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Brex operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Brex task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["brex"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Brex-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `brex` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
