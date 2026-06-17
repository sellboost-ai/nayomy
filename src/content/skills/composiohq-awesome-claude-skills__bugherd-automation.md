---
name: "bugherd-automation"
description_en: "Automate Bugherd tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Bugherd görevlerini Rube MCP (Composio) aracılığıyla otomatikleştirin. Her zaman güncel şemaları bulmak için önce araçları arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 64919
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/bugherd-automation/SKILL.md"
path: "composio-skills/bugherd-automation/SKILL.md"
is_collection: false
body_length: 2751
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Bugherd Otomasyonu via Rube MCP
  
  Composio'nun Bugherd araç seti aracılığıyla Rube MCP üzerinden Bugherd operasyonlarını otomatikleştirin.
  
  **Araç seti dokümantasyonu**: [composio.dev/toolkits/bugherd](https://composio.dev/toolkits/bugherd)
  
  ## Ön Koşullar
  
  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS mevcut)
  - `RUBE_MANAGE_CONNECTIONS` aracılığıyla aktif Bugherd bağlantısı ve `bugherd` araç seti
  - Geçerli araç şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağrısını yapın
  
  ## Kurulum
  
  **Rube MCP'yi Alın**: `https://rube.app/mcp` adresini istemci yapılandırmanızda bir MCP sunucusu olarak ekleyin. API anahtarlarına gerek yok — sadece endpoint'i ekleyin ve çalışır.
  
  1. `RUBE_SEARCH_TOOLS` yanıt vererek Rube MCP'nin mevcut olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS` komutunu `bugherd` araç seti ile çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için dönen auth bağlantısını takip edin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın
  
  ## Araç Keşfi
  
  İş akışlarını yürütmeden önce mevcut araçları her zaman keşfedin:
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Bugherd operations", known_fields: ""}]
  session: {generate_id: true}
  ```
  
  Bu, mevcut araç sluglarını, input şemalarını, önerilen yürütme planlarını ve bilinen tuzakları döndürür.
  
  ## Temel İş Akışı Deseni
  
  ### Adım 1: Mevcut Araçları Keşfedin
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Bugherd task"}]
  session: {id: "existing_session_id"}
  ```
  
  ### Adım 2: Bağlantıyı Kontrol Edin
  
  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["bugherd"]
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
  
  ## Bilinen Tuzaklar
  
  - **Her zaman önce ara**: Araç şemaları değişebilir. `RUBE_SEARCH_TOOLS` çağrısı yapmadan araç sluglarını veya argümanlarını asla hardcode etmeyin
  - **Bağlantıyı kontrol edin**: Araçları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` komutunun ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarına her zaman `memory` ekleyin, boş olsa bile (`{}`)
  - **Session yeniden kullanımı**: Bir iş akışında session ID'lerini yeniden kullanın. Yeni iş akışları için yenilerini oluşturun
  - **Sayfalandırma**: Yanıtlardaki sayfalandırma tokenlarını kontrol edin ve tamamlanana kadar getirmeye devam edin
  
  ## Hızlı Referans
  
  | Operation | Yaklaşım |
  |-----------|----------|
  | Araçları bul | `RUBE_SEARCH_TOOLS` ile Bugherd'e özgü use case |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` ile `bugherd` araç seti |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` ile keşfedilen araç slugları |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` ile `run_composio_tool()` |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` ile `schemaRef` olan araçlar için |
  
  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Bugherd Automation via Rube MCP

Automate Bugherd operations through Composio's Bugherd toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/bugherd](https://composio.dev/toolkits/bugherd)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Bugherd connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `bugherd`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `bugherd`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Bugherd operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Bugherd task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["bugherd"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Bugherd-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `bugherd` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
