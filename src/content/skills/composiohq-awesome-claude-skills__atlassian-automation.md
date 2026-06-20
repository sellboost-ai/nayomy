---
name: "atlassian-automation"
description_en: "Automate Atlassian tasks via Rube MCP (Composio). Always search tools first for current schemas."
description_tr: "Atlassian görevlerini Rube MCP (Composio) ile otomatikleştirin. Güncel şemaları için her zaman tools'u önce arayın."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 65266
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/composio-skills/atlassian-automation/SKILL.md"
path: "composio-skills/atlassian-automation/SKILL.md"
is_collection: false
body_length: 2777
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Atlassian Automation via Rube MCP
  
  Composio'nun Atlassian araç takımı aracılığıyla Rube MCP üzerinden Atlassian işlemlerini otomatikleştirin.
  
  **Araç takımı dokümanları**: [composio.dev/toolkits/atlassian](https://composio.dev/toolkits/atlassian)
  
  ## Ön Koşullar
  
  - Rube MCP bağlı olmalıdır (RUBE_SEARCH_TOOLS kullanılabilir)
  - `RUBE_MANAGE_CONNECTIONS` üzerinden `atlassian` araç takımı ile aktif Atlassian bağlantısı
  - Mevcut araç şemalarını almak için her zaman `RUBE_SEARCH_TOOLS` çağrısı yapın
  
  ## Kurulum
  
  **Rube MCP'yi Alın**: İstemci yapılandırmanızda `https://rube.app/mcp` adresini bir MCP sunucusu olarak ekleyin. API anahtarı gerekmez — sadece endpoint'i ekleyin ve çalışır.
  
  1. `RUBE_SEARCH_TOOLS` yanıt vererek Rube MCP'nin kullanılabilir olduğunu doğrulayın
  2. `RUBE_MANAGE_CONNECTIONS` öğesini `atlassian` araç takımı ile çağırın
  3. Bağlantı ACTIVE değilse, kurulumu tamamlamak için döndürülen kimlik doğrulama bağlantısını izleyin
  4. Herhangi bir workflow çalıştırmadan önce bağlantı durumunun ACTIVE olduğunu doğrulayın
  
  ## Araç Keşfi
  
  Workflow'ları çalıştırmadan önce her zaman kullanılabilir araçları keşfedin:
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "Atlassian operations", known_fields: ""}]
  session: {generate_id: true}
  ```
  
  Bu, kullanılabilir araç slug'larını, input şemalarını, önerilen execution planlarını ve bilinen sorunları döndürür.
  
  ## Temel Workflow Deseni
  
  ### Adım 1: Kullanılabilir Araçları Keşfedin
  
  ```
  RUBE_SEARCH_TOOLS
  queries: [{use_case: "your specific Atlassian task"}]
  session: {id: "existing_session_id"}
  ```
  
  ### Adım 2: Bağlantıyı Kontrol Edin
  
  ```
  RUBE_MANAGE_CONNECTIONS
  toolkits: ["atlassian"]
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
  - **Bağlantıyı kontrol edin**: Araçları çalıştırmadan önce `RUBE_MANAGE_CONNECTIONS` öğesinin ACTIVE durumunu gösterdiğini doğrulayın
  - **Şema uyumluluğu**: Arama sonuçlarından tam alan adlarını ve türlerini kullanın
  - **Memory parametresi**: `RUBE_MULTI_EXECUTE_TOOL` çağrılarına her zaman `memory` parametresini ekleyin, boş olsa da (`{}`)
  - **Oturum yeniden kullanımı**: Bir workflow içinde oturum kimliklerini yeniden kullanın. Yeni workflow'lar için yenilerini oluşturun
  - **Sayfalandırma**: Yanıtlarda sayfalandırma token'larını kontrol edin ve tamamlanana kadar getirmeye devam edin
  
  ## Hızlı Referans
  
  | İşlem | Yaklaşım |
  |-----------|----------|
  | Araçları bul | `RUBE_SEARCH_TOOLS` Atlassian'a özel use case ile |
  | Bağlan | `RUBE_MANAGE_CONNECTIONS` araç takımı `atlassian` ile |
  | Çalıştır | `RUBE_MULTI_EXECUTE_TOOL` keşfedilmiş araç slug'ları ile |
  | Toplu işlemler | `RUBE_REMOTE_WORKBENCH` `run_composio_tool()` ile |
  | Tam şema | `RUBE_GET_TOOL_SCHEMAS` `schemaRef` içeren araçlar için |
  
  ---
  *[Composio](https://composio.dev) tarafından desteklenmektedir*
---

# Atlassian Automation via Rube MCP

Automate Atlassian operations through Composio's Atlassian toolkit via Rube MCP.

**Toolkit docs**: [composio.dev/toolkits/atlassian](https://composio.dev/toolkits/atlassian)

## Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Atlassian connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `atlassian`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `atlassian`
3. If connection is not ACTIVE, follow the returned auth link to complete setup
4. Confirm connection status shows ACTIVE before running any workflows

## Tool Discovery

Always discover available tools before executing workflows:

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "Atlassian operations", known_fields: ""}]
session: {generate_id: true}
```

This returns available tool slugs, input schemas, recommended execution plans, and known pitfalls.

## Core Workflow Pattern

### Step 1: Discover Available Tools

```
RUBE_SEARCH_TOOLS
queries: [{use_case: "your specific Atlassian task"}]
session: {id: "existing_session_id"}
```

### Step 2: Check Connection

```
RUBE_MANAGE_CONNECTIONS
toolkits: ["atlassian"]
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
| Find tools | `RUBE_SEARCH_TOOLS` with Atlassian-specific use case |
| Connect | `RUBE_MANAGE_CONNECTIONS` with toolkit `atlassian` |
| Execute | `RUBE_MULTI_EXECUTE_TOOL` with discovered tool slugs |
| Bulk ops | `RUBE_REMOTE_WORKBENCH` with `run_composio_tool()` |
| Full schema | `RUBE_GET_TOOL_SCHEMAS` for tools with `schemaRef` |

---
*Powered by [Composio](https://composio.dev)*
