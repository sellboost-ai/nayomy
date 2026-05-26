---
name: "nguyenvanduocit/jira-mcp"
description: "A Go-based MCP connector for Jira that enables AI assistants like Claude to interact with Atlassian Jira. This tool provides a seamless interface for AI models to perform common Jira operations including issue management, sprint planning, and workflow transitions."
category: "Support & Service Management"
repo: "nguyenvanduocit/jira-mcp"
stars: 89
url: "https://github.com/nguyenvanduocit/jira-mcp"
body_length: 9121
license: "MIT"
language: "Go"
body_tr: |-
  ## Jira MCP

  Yılların gerçek yazılım geliştirme deneyiminden türetilen, kendine has bir Jira MCP sunucusu.

  Genel Jira entegrasyonlarından farklı olarak, bu MCP mühendislerin ve otomasyon QC ekiplerinin günlük iş akışlarından tasarlanmıştır. Gerçek geliştirme ihtiyaçları için hazırlanmış sofistike araçlar bulacaksınız—bir konuya bağlı tüm pull request'leri almak, karmaşık sprint geçişlerini yönetmek veya tüm iş akışınız genelinde geliştirme bilgilerini takip etmek gibi.

  Bu sadece bir API wrapper değildir. Profesyonellerin Jira'yı gerçekten nasıl kullandıklarının yansımasıdır: sprint'leri yönetmek, geliştirme işini takip etmek, release'leri koordine etmek ve ekipler arası görünürlüğü korumak. Her araç, modern yazılım geliştirmesinde ortaya çıkan gerçek sorunları çözmek için tasarlanmıştır.

  ## Kullanılabilir araçlar

  ### Issue Yönetimi
  - **jira_get_issue** - Durum, atanan kişi, açıklama, alt görevler ve kullanılabilir geçişler dahil olmak üzere belirli bir konunun ayrıntılı bilgilerini alır
  - **jira_create_issue** - Belirtilen ayrıntılarla yeni bir konu oluşturur (key, ID ve URL döndürür)
  - **jira_create_child_issue** - Ana konuya bağlı bir alt konu (sub-task) oluşturur
  - **jira_update_issue** - Mevcut bir konunun ayrıntılarını değiştirir (kısmi güncellemeleri destekler)
  - **jira_list_issue_types** - Bir projede tüm mevcut konu türlerini ID, ad ve açıklamaları ile listeler

  ### Arama
  - **jira_search_issue** - JQL (Jira Query Language) kullanarak özelleştirilebilir alanlar ve genişletme seçenekleri ile konuları arar

  ### Sprint Yönetimi
  - **jira_list_sprints** - Belirli bir board veya proje için tüm aktif ve gelecek sprint'leri listeler
  - **jira_get_sprint** - Belirtilen ID'ye göre sprint hakkında ayrıntılı bilgi alır
  - **jira_get_active_sprint** - Verilen board veya proje için şu anda aktif olan sprint'i alır
  - **jira_search_sprint_by_name** - Sprint'leri ad'a göre tam veya kısmi eşleştirme ile arar

  ### Durum & Geçişler
  - **jira_list_statuses** - Bir proje için tüm mevcut konu durumu ID'lerini ve adlarını alır
  - **jira_transition_issue** - Geçerli bir geçiş ID'si kullanarak bir konuyu iş akışında geçişine izin verir

  ### Yorumlar
  - **jira_add_comment** - Bir konuya yorum ekler (Atlassian Document Format kullanır)
  - **jira_get_comments** - Bir konudan tüm yorumları alır

  ### Worklogs
  - **jira_add_worklog** - Bir konuda harcanan zamanı takip etmek için worklog girdisi ekler

  ### Geçmiş & Denetim
  - **jira_get_issue_history** - Bir konunun tüm değişim geçmişini alır

  ### Konu İlişkileri
  - **jira_get_related_issues** - İlişkisi olan konuları alır (engeller, engellenir, ilişkilidir vb.)
  - **jira_link_issues** - İki konu arasında bir bağlantı oluşturur, aralarındaki ilişkiyi tanımlar

  ### Versiyon Yönetimi
  - **jira_get_version** - Belirli bir proje versiyonu hakkında ayrıntılı bilgi alır
  - **jira_list_project_versions** - Bir projede ayrıntıları ile tüm versiyonları listeler

  ### Geliştirme Bilgileri
  - **jira_get_development_information** - Geliştirme aracı entegrasyonları (GitHub, GitLab, Bitbucket) aracılığıyla bir konuya bağlı branch'ler, pull request'ler ve commit'leri alır

  ## Kurulum

  Bu istemi AI asistanınıza kopyalayın:

  ```
  Install the Jira MCP server (https://github.com/nguyenvanduocit/jira-mcp) for my Claude Desktop or Cursor IDE. Read the MCP documentation carefully and guide me through the installation step by step.
  ```

  AI asistanınız bu kurulumda yardımcı olamıyorsa, bu bir yanlış yapılandırma veya etkisiz bir AI aracı gösterir. Yetenekli bir AI asistanı sizi MCP kurulumunda adım adım rehberlik edebilmelidir.

  ## CLI Kullanımı

  MCP sunucusuna ek olarak, `jira-mcp` bağımsız bir CLI binary'si (`jira-cli`) ile gelir — MCP client'ı gerekmez.

  ### Kurulum

  ```bash
  just install-cli
  # veya
  go install github.com/nguyenvanduocit/jira-mcp/cmd/jira-cli@latest
  ```

  ### Hızlı Başlangıç

  ```bash
  export ATLASSIAN_HOST=your-instance.atlassian.net
  export ATLASSIAN_EMAIL=you@example.com
  export ATLASSIAN_TOKEN=your-api-token
  # veya
  jira-cli --env .env <command> [flags]
  ```

  ### Komutlar

  | Komut | Açıklama |
  |---------|-------------|
  | `get-issue` | Konu ayrıntılarını alır |
  | `search-issues` | JQL ile konuları arar |
  | `create-issue` | Yeni bir konu oluşturur |
  | `update-issue` | Mevcut bir konuyu günceller |
  | `add-comment` | Bir konuya yorum ekler |
  | `list-comments` | Bir konudaki yorumları listeler |
  | `get-transitions` | Kullanılabilir durum geçişlerini alır |
  | `transition-issue` | Konuyu yeni duruma geçişine izin verir |
  | `list-sprints` | Bir board için sprint'leri listeler |
  | `get-worklogs` | Bir konu için worklog'ları alır |
  | `add-worklog` | Bir konuda çalışma zamanını kaydeder |
  | `get-history` | Konu değişim geçmişini alır |

  ### Örnekler

  ```bash
  # Konu al
  jira-cli get-issue --issue-key PROJ-123

  # JQL ile ara
  jira-cli search-issues --jql "project = PROJ AND status = 'In Progress'" --max-results 20

  # Konu oluştur
  jira-cli create-issue --project PROJ --summary "Fix login bug" --type Bug

  # Konu geçişi yap
  jira-cli get-transitions --issue-key PROJ-123
  jira-cli transition-issue --issue-key PROJ-123 --transition-id 31

  # JSON çıktısı
  jira-cli search-issues --jql "assignee = currentUser()" --output json | jq '.[].key'
  ```

  ### Bayraklar

  Her komut şunları kabul eder:
  - `--env string` — `.env` dosyası yolu
  - `--output string` — Çıktı formatı: `text` (varsayılan) veya `json`

  ## Lisans
  MIT — `LICENSE` dosyasına bakın.

  ## AI İÇİN

  > BU BÖLÜM SADECE AI İÇİNDİR

  Bu kod tabanıyla çalışırken, proje yapısını anlamak için bu dosyaları okuyun:

  1. **CLAUDE.md** - Mimari, geliştirme komutları ve kodlama kurallarını içeren kapsamlı proje belgeleri
  2. **main.go** - MCP sunucusunun nasıl başlatıldığını ve araçların nasıl kaydedildiğini gösteren giriş noktası
  3. **services/jira_client.go** - Singleton Jira client'ı başlatması ve kimlik doğrulaması
  4. **tools/** - Tutarlı desenleri takip eden bireysel araç uygulamaları
  5. **docs/** - Detaylı belgeleme (yapı için aşağıya bakın)

  Anahtar kavramlar:
  - Bu, AI asistanlarını Jira'ya bağlayan Go tabanlı bir MCP sunucusudur
  - Her araç, yazılan input doğrulaması ile kayıt + işleyici deseni izler
  - Araçlar kategoriye göre organize edilir (konular, sprint'ler, yorumlar, worklogs vb.)
  - Tüm Jira işlemleri `github.com/ctreminiom/go-atlassian` client kütüphanesini kullanır
  - Geliştirme prensipleri `.specify/memory/constitution.md` dosyasında belgelenmiştir

  Değişiklik yapmadan önce gözden geçirin:
  - **CLAUDE.md** - mimari desenleri ve geliştirme komutları için
  - **.specify/memory/constitution.md** - yönetim prensipleri için

  ## Hızlı başlangıç

  ### 1) API token'ı alın
  `https://id.atlassian.com/manage-profile/security/api-tokens` adresinde bir tane oluşturun.

  ### 2) Cursor'a ekleyin
  Docker veya yerel binary (STDIO; port gerekmez) kullanın.

  #### Docker
  ```json
  {
    "mcpServers": {
      "jira": {
        "command": "docker",
        "args": [
          "run", "--rm", "-i",
          "-e", "ATLASSIAN_HOST=https://your-company.atlassian.net",
          "-e", "ATLASSIAN_EMAIL=your-email@company.com",
          "-e", "ATLASSIAN_TOKEN=your-api-token",
          "ghcr.io/nguyenvanduocit/jira-mcp:latest"
        ]
      }
    }
  }
  ```

  #### Binary
  ```json
  {
    "mcpServers": {
      "jira": {
        "command": "/usr/local/bin/jira-mcp",
        "env": {
          "ATLASSIAN_HOST": "https://your-company.atlassian.net",
          "ATLASSIAN_EMAIL": "your-email@company.com",
          "ATLASSIAN_TOKEN": "your-api-token"
        }
      }
    }
  }
  ```

  ### 3) Cursor'da deneyin
  - "Bana atanmış konuları göster"
  - "ABC için mevcut sprint'te neler var?"
  - "ABC'de bir bug oluştur: Safari'de giriş başarısız"

  ## Yapılandırma
  - **ATLASSIAN_HOST**: `https://your-company.atlassian.net`
  - **ATLASSIAN_EMAIL**: Atlassian e-postanız
  - **ATLASSIAN_TOKEN**: API token'ı

  İsteğe bağlı `.env` (yerel olarak çalıştırılırsa):
  ```bash
  ATLASSIAN_HOST=https://your-company.atlassian.net
  ATLASSIAN_EMAIL=your-email@company.com
  ATLASSIAN_TOKEN=your-api-token
  ```

  HTTP modu (isteğe bağlı, hata ayıklama için):
  ```bash
  jira-mcp -env .env -http_port 3000
  ```
  Cursor yapılandırması (HTTP modu):
  ```json
  { "mcpServers": { "jira": { "url": "http://localhost:3000/mcp" } } }
  ```

  ### Açığa çıkarılan araçları sınırlandırma (ENABLED_TOOLS)

  Varsayılan olarak her Jira aracı kaydedilir. Sadece bir alt kümesini açığa çıkarmak için—örneğin, bir AI aracısına Jira'nın salt okunur görünümünü vermek için—`ENABLED_TOOLS` ortam değişkenini virgülle ayrılmış araç adlarının bir izin listesine ayarlayın:

  ```bash
  ENABLED_TOOLS=jira_get_issue,jira_search_issue,jira_get_comments
  ```

  Kurallar:
  - Ayarlanmamış veya boş → tüm araçlar açığa çıkarılır (geriye uyumlu).
  - Adlar etrafındaki boşluklara göz yumulur.
  - Bilinmeyen adlar yok sayılır ancak başlangıçta kaydedilir, böylece yazım hataları ortaya çıkar.
  - Listelenmemiş adlar basitçe kaydedilmez, böylece MCP client'ı onları hiç görmez.

  Salt okunur aracı örneği (15 okumayı açığa çıkarır, tüm 8 mutasyonu yapan aracı engeller):

  ```bash
  ENABLED_TOOLS=jira_get_issue,jira_search_issue,jira_list_statuses,jira_get_comments,jira_get_issue_history,jira_get_related_issues,jira_list_sprints,jira_get_sprint,jira_get_active_sprint,jira_search_sprint_by_name,jira_get_version,jira_list_project_versions,jira_get_development_information,jira_download_attachment,jira_list_issue_types
  ```
  ## Kurulum

  ### Homebrew (macOS/Linux)

  ```bash
  brew install nguyenvanduocit/tap/jira-mcp
  ```
---

## Jira MCP

An opinionated Jira MCP server built from years of real-world software development experience.

Unlike generic Jira integrations, this MCP is crafted from the daily workflows of engineers and automation QC teams. You'll find sophisticated tools designed for actual development needs—like retrieving all pull requests linked to an issue, managing complex sprint transitions, or tracking development information across your entire workflow.

This isn't just another API wrapper. It's a reflection of how professionals actually use Jira: managing sprints, tracking development work, coordinating releases, and maintaining visibility across teams. Every tool is designed to solve real problems that arise in modern software development.

## Available tools

### Issue Management
- **jira_get_issue** - Retrieve detailed information about a specific issue including status, assignee, description, subtasks, and available transitions
- **jira_create_issue** - Create a new issue with specified details (returns key, ID, and URL)
- **jira_create_child_issue** - Create a child issue (sub-task) linked to a parent issue
- **jira_update_issue** - Modify an existing issue's details (supports partial updates)
- **jira_list_issue_types** - List all available issue types in a project with their IDs, names, and descriptions

### Search
- **jira_search_issue** - Search for issues using JQL (Jira Query Language) with customizable fields and expand options

### Sprint Management
- **jira_list_sprints** - List all active and future sprints for a specific board or project
- **jira_get_sprint** - Retrieve detailed information about a specific sprint by its ID
- **jira_get_active_sprint** - Get the currently active sprint for a given board or project
- **jira_search_sprint_by_name** - Search for sprints by name with exact or partial matching

### Status & Transitions
- **jira_list_statuses** - Retrieve all available issue status IDs and their names for a project
- **jira_transition_issue** - Transition an issue through its workflow using a valid transition ID

### Comments
- **jira_add_comment** - Add a comment to an issue (uses Atlassian Document Format)
- **jira_get_comments** - Retrieve all comments from an issue

### Worklogs
- **jira_add_worklog** - Add a worklog entry to track time spent on an issue

### History & Audit
- **jira_get_issue_history** - Retrieve the complete change history of an issue

### Issue Relationships
- **jira_get_related_issues** - Retrieve issues that have a relationship (blocks, is blocked by, relates to, etc.)
- **jira_link_issues** - Create a link between two issues, defining their relationship

### Version Management
- **jira_get_version** - Retrieve detailed information about a specific project version
- **jira_list_project_versions** - List all versions in a project with their details

### Development Information
- **jira_get_development_information** - Retrieve branches, pull requests, and commits linked to an issue via development tool integrations (GitHub, GitLab, Bitbucket)



## Installation

Copy this prompt to your AI assistant:

```
Install the Jira MCP server (https://github.com/nguyenvanduocit/jira-mcp) for my Claude Desktop or Cursor IDE. Read the MCP documentation carefully and guide me through the installation step by step.
```

If your AI assistant cannot help with this installation, it indicates either a misconfiguration or an ineffective AI tool. A capable AI assistant should be able to guide you through MCP installation.

## CLI Usage

In addition to the MCP server, `jira-mcp` ships a standalone CLI binary (`jira-cli`) for direct terminal use — no MCP client needed.

### Installation

```bash
just install-cli
# or
go install github.com/nguyenvanduocit/jira-mcp/cmd/jira-cli@latest
```

### Quick Start

```bash
export ATLASSIAN_HOST=your-instance.atlassian.net
export ATLASSIAN_EMAIL=you@example.com
export ATLASSIAN_TOKEN=your-api-token
# or
jira-cli --env .env <command> [flags]
```

### Commands

| Command | Description |
|---------|-------------|
| `get-issue` | Get issue details |
| `search-issues` | Search issues with JQL |
| `create-issue` | Create a new issue |
| `update-issue` | Update an existing issue |
| `add-comment` | Add a comment to an issue |
| `list-comments` | List comments on an issue |
| `get-transitions` | Get available status transitions |
| `transition-issue` | Transition issue to new status |
| `list-sprints` | List sprints for a board |
| `get-worklogs` | Get worklogs for an issue |
| `add-worklog` | Log work on an issue |
| `get-history` | Get issue change history |

### Examples

```bash
# Get an issue
jira-cli get-issue --issue-key PROJ-123

# Search with JQL
jira-cli search-issues --jql "project = PROJ AND status = 'In Progress'" --max-results 20

# Create an issue
jira-cli create-issue --project PROJ --summary "Fix login bug" --type Bug

# Transition issue
jira-cli get-transitions --issue-key PROJ-123
jira-cli transition-issue --issue-key PROJ-123 --transition-id 31

# JSON output
jira-cli search-issues --jql "assignee = currentUser()" --output json | jq '.[].key'
```

### Flags

Every command accepts:
- `--env string` — Path to `.env` file
- `--output string` — Output format: `text` (default) or `json`

## License
MIT — see `LICENSE`.

## FOR AI

> THIS SECTION IS FOR AI ONLY

When working with this codebase, read these files to understand the project structure:

1. **CLAUDE.md** - Comprehensive project documentation including architecture, development commands, and coding conventions
2. **main.go** - Entry point that shows how the MCP server is initialized and tools are registered
3. **services/jira_client.go** - Singleton Jira client initialization and authentication
4. **tools/** - Individual tool implementations following consistent patterns
5. **docs/** - Detailed documentation (see structure below)

Key concepts:
- This is a Go-based MCP server that connects AI assistants to Jira
- Each tool follows a registration + handler pattern with typed input validation
- Tools are organized by category (issues, sprints, comments, worklogs, etc.)
- All Jira operations use the `github.com/ctreminiom/go-atlassian` client library
- Development principles documented in `.specify/memory/constitution.md`

Before making changes, review:
- **CLAUDE.md** for architecture patterns and development commands
- **.specify/memory/constitution.md** for governance principles


## Quick start

### 1) Get an API token
Create one at `https://id.atlassian.com/manage-profile/security/api-tokens`.

### 2) Add to Cursor
Use Docker or a local binary (STDIO; no ports needed).

#### Docker
```json
{
  "mcpServers": {
    "jira": {
      "command": "docker",
      "args": [
        "run", "--rm", "-i",
        "-e", "ATLASSIAN_HOST=https://your-company.atlassian.net",
        "-e", "ATLASSIAN_EMAIL=your-email@company.com",
        "-e", "ATLASSIAN_TOKEN=your-api-token",
        "ghcr.io/nguyenvanduocit/jira-mcp:latest"
      ]
    }
  }
}
```

#### Binary
```json
{
  "mcpServers": {
    "jira": {
      "command": "/usr/local/bin/jira-mcp",
      "env": {
        "ATLASSIAN_HOST": "https://your-company.atlassian.net",
        "ATLASSIAN_EMAIL": "your-email@company.com",
        "ATLASSIAN_TOKEN": "your-api-token"
      }
    }
  }
}
```

### 3) Try it in Cursor
- “Show my issues assigned to me”
- “What’s in the current sprint for ABC?”
- “Create a bug in ABC: Login fails on Safari”

## Configuration
- **ATLASSIAN_HOST**: `https://your-company.atlassian.net`
- **ATLASSIAN_EMAIL**: your Atlassian email
- **ATLASSIAN_TOKEN**: API token

Optional `.env` (if running locally):
```bash
ATLASSIAN_HOST=https://your-company.atlassian.net
ATLASSIAN_EMAIL=your-email@company.com
ATLASSIAN_TOKEN=your-api-token
```

HTTP mode (optional, for debugging):
```bash
jira-mcp -env .env -http_port 3000
```
Cursor config (HTTP mode):
```json
{ "mcpServers": { "jira": { "url": "http://localhost:3000/mcp" } } }
```

### Limiting which tools are exposed (ENABLED_TOOLS)

By default every Jira tool is registered. To expose only a subset — for example, to hand an AI agent a read-only view of Jira — set the `ENABLED_TOOLS` environment variable to a comma-separated allowlist of tool names:

```bash
ENABLED_TOOLS=jira_get_issue,jira_search_issue,jira_get_comments
```

Rules:
- Unset or empty → all tools are exposed (backwards compatible).
- Whitespace around names is tolerated.
- Unknown names are ignored but logged at startup so typos surface immediately.
- Names that are not listed are simply not registered, so the MCP client never sees them.

Read-only agent example (exposes 15 reads, blocks all 8 mutating tools):

```bash
ENABLED_TOOLS=jira_get_issue,jira_search_issue,jira_list_statuses,jira_get_comments,jira_get_issue_history,jira_get_related_issues,jira_list_sprints,jira_get_sprint,jira_get_active_sprint,jira_search_sprint_by_name,jira_get_version,jira_list_project_versions,jira_get_development_information,jira_download_attachment,jira_list_issue_types
```
## Installation

### Homebrew (macOS/Linux)

```bash
brew install nguyenvanduocit/tap/jira-mcp
```
