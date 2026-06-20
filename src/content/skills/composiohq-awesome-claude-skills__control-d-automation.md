---
name: "control-d-automation"
description_en: "Automate Control D tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Control D görevlerini Rube MCP (Composio) aracılığıyla otomatikleştirin. Her zaman güncel şemaları için önce tools içinde arama yapın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 65266
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/control-d-automation/SKILL.md"
path: "composio-skills/control-d-automation/SKILL.md"
is_collection: false
body_length: 2777
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Rube MCP ile Control D Otomasyonu
  
  Composio'nun Control D araç seti aracılığıyla Rube MCP üzerinden Control D işlemlerini otomatikleştirin.
  
  **Araç seti dokümantasyonu**: [composio.dev/toolkits/control_d](https://composio.dev/toolkits/control_d)
  
  ## Ön Koşullar
  
  - Rube MCP bağlı olmalı (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla control_d araç seti ile aktif Control D bağlantısı
  - Her zaman mevcut araç şemalarını almak için `RUBE_SEARCH_TOOLS` ilk olarak çağırın
  
  ## Kurulum
  
  **Rube MCP'yi alın**: İstemci yapılandırmanıza `https://rube.app/mcp` adresini MCP sunucusu olarak ekleyin. API anahtarı gerekli değil — sadece endpoint'i ekleyin ve çalışır.
  
  1. `RUBE_SEARCH_TOOLS` yanıt vererek Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS` öğesini control_d araç seti ile çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen kimlik doğrulama bağlantısını takip edin
  4. Herhangi bir iş akışını çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın
  
  ## Araç Keşfi
  
  İş akışlarını çalıştırmadan önce her zaman mevcut araçları keşfedin:
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Control D operations", known_fields: ""}]
  session: {generate_id: true}
  ```
  
  Bu, mevcut araç slug'larını, input şemalarını, önerilen yürütme planlarını ve bilinen sorunları döndürür.
  
  ## Temel İş Akışı Deseni
  
  ### Adım 1: Mevcut Araçları Keşfedin
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Control D task"}]
  session: {id: "existing_session_id"}
  ```
  
  ### Adım 2: Bağlantıyı Kontrol Edin
  
  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["control_d"]
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
  
  - **Her zaman ilk olarak arama yapın**: Araç şemaları değişir. `RUBE_SEARCH_TOOLS` çağırmadan araç slug'larını veya argümanlarını asla sabit kodlamayın
  - **Bağlantıyı kontrol edin**: Araçları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` öğesinin ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarında her zaman `memory` ekleyin, boş olsa bile (`{}`)
  - **Oturum yeniden kullanımı**: Bir iş akışı içinde oturum kimliklerini yeniden kullanın. Yeni iş akışları için yenilerini oluşturun
  - **Sayfalandırma**: Yanıtları sayfalandırma token'ları için kontrol edin ve tamamlanana kadar getirmeye devam edin
  
  ## Hızlı Başvuru
  
  | İşlem | Yaklaşım |
  |-------|----------|
  | Araçları bul | Control D'ye özel use case ile `RUBE_SEARCH_TOOLS` |
  | Bağlan | `control_d` araç seti ile `RUBE_MANAGE_CONNECTIONS` |
  | Yürüt | Keşfedilmiş araç slug'ları ile `RUBE_MULTI_EXECUTE_TOOL` |
  | Toplu işlemler | `run_composio_tool()` ile `RUBE_REMOTE_WORKBENCH` |
  | Tam şema | `schemaRef` olan araçlar için `RUBE_GET_TOOL_SCHEMAS` |
  
  ---
  *[Composio](https://composio.dev) tarafından desteklenir*
---

# Control D Automation via Rube MCP

Automate Control D operations through Composio's Control D toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/control_d](https://composio.dev/toolkits/control_d)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Control D connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `control_d`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `control_d`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Control D operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Control D task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["control_d"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Control D-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `control_d` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
