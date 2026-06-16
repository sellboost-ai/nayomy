---
name: "alttext-ai-automation"
description_en: "Automate Alttext AI tasks via Rube MCP (Composio). Always search tools first for current schemas."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 61753
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/alttext-ai-automation/SKILL.md"
path: "composio-skills/alttext-ai-automation/SKILL.md"
is_collection: false
body_length: 2790
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Alttext AI Otomasyon via Rube MCP

  Composio'nun Alttext AI toolkit'i aracılığıyla Rube MCP üzerinden Alttext AI operasyonlarını otomatikleştirin.

  **Toolkit dokümantasyonu**: [composio.dev/toolkits/alttext_ai](https://composio.dev/toolkits/alttext_ai)

  ## Ön Koşullar

  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` üzerinden aktif Alttext AI bağlantısı `alttext_ai` toolkit'i ile
  - Daima `RUBE_SEARCH_TOOLS` çağırarak mevcut tool şemalarını alın

  ## Kurulum

  **Rube MCP'yi Alın**: İstemci konfigürasyonunuza `https://rube.app/mcp` adresini MCP sunucusu olarak ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.

  1. `RUBE_SEARCH_TOOLS` yanıt vererek Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS` çağırın `alttext_ai` toolkit'i ile
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen auth linkini takip edin
  4. İş akışlarını çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın

  ## Tool Keşfi

  İş akışlarını yürütmeden önce daima mevcut toolları keşfedin:

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Alttext AI operations", known_fields: ""}]
  session: {generate_id: true}
  ```

  Bu, mevcut tool slug'ları, input şemalarını, önerilen yürütme planlarını ve bilinen sorunları döndürür.

  ## Temel İş Akışı Deseni

  ### Adım 1: Mevcut Toolları Keşfedin

  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Alttext AI task"}]
  session: {id: "existing_session_id"}
  ```

  ### Adım 2: Bağlantıyı Kontrol Edin

  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["alttext_ai"]
  session_id: "your_session_id"
  ```

  ### Adım 3: Toolları Yürütün

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

  - **Daima önce arayın**: Tool şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan tool slug'larını veya argümanlarını asla hardcoded'leyin
  - **Bağlantıyı kontrol edin**: Toolları yürütmeden önce `RUBE_MANAGE_CONNECTIONS` durumunun ACTIVE olduğunu doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında daima `memory` ekleyin, boş olsa da (`{}`)
  - **Session yeniden kullanımı**: İş akışı içinde session ID'lerini yeniden kullanın. Yeni iş akışları için yeni olanlar oluşturun
  - **Pagination**: Yanıtlara pagination tokenları için kontrol edin ve tamamlanana kadar getirmeye devam edin

  ## Hızlı Referans

  | İşlem | Yaklaşım |
  |-------|---------|
  | Tool bul | `RUBE_SEARCH_TOOLS` ile Alttext AI'a özel use case |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` ile `alttext_ai` toolkit'i |
  | Yürüt | `RUBE_MULTI_EXECUTE_TOOL` ile keşfedilen tool slug'ları |
  | Toplu işler | `RUBE_REMOTE_WORKBENCH` ile `run_composio_tool()` |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` için `schemaRef` içeren toollar |

  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Alttext AI Automation via Rube MCP

Automate Alttext AI operations through Composio's Alttext AI toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/alttext_ai](https://composio.dev/toolkits/alttext_ai)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Alttext AI connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `alttext_ai`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `alttext_ai`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Alttext AI operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Alttext AI task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["alttext_ai"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Alttext AI-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `alttext_ai` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
