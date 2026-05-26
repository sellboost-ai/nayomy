---
name: "sooperset/mcp-atlassian"
description: "MCP server for Atlassian products (Confluence and Jira). Supports Confluence Cloud, Jira Cloud, and Jira Server/Data Center. Provides comprehensive tools for searching, reading, creating, and managing content across Atlassian workspaces."
description_tr: "Atlassian ürünleri (Confluence ve Jira) için MCP sunucusu. Confluence Cloud, Jira Cloud ve Jira Server/Data Center'ı destekler. Atlassian çalışma alanlarında içerik arama, okuma, oluşturma ve yönetimi için kapsamlı araçlar sağlar."
category: "Support & Service Management"
repo: "sooperset/mcp-atlassian"
stars: 5268
url: "https://github.com/sooperset/mcp-atlassian"
body_length: 4521
license: "MIT"
language: "Python"
homepage: "https://mcp-atlassian.soomiles.com"
body_tr: |-
  # MCP Atlassian

  ![PyPI Version](https://img.shields.io/pypi/v/mcp-atlassian)
  ![PyPI - Downloads](https://img.shields.io/pypi/dm/mcp-atlassian)
  ![PePy - Total Downloads](https://static.pepy.tech/personalized-badge/mcp-atlassian?period=total&units=international_system&left_color=grey&right_color=blue&left_text=Total%20Downloads)
  [![Run Tests](https://github.com/sooperset/mcp-atlassian/actions/workflows/tests.yml/badge.svg)](https://github.com/sooperset/mcp-atlassian/actions/workflows/tests.yml)
  ![License](https://img.shields.io/github/license/sooperset/mcp-atlassian)
  [![Docs](https://img.shields.io/badge/docs-mintlify-blue)](https://mcp-atlassian.soomiles.com)

  Model Context Protocol (MCP) sunucusu Atlassian ürünleri için (Confluence ve Jira). Hem Cloud hem de Server/Data Center dağıtımlarını destekler.

  https://github.com/user-attachments/assets/35303504-14c6-4ae4-913b-7c25ea511c3e

  <details>
  <summary>Confluence Demo</summary>

  https://github.com/user-attachments/assets/7fe9c488-ad0c-4876-9b54-120b666bb785

  </details>

  ## Hızlı Başlangıç

  ### 1. API Token'ınızı Alın

  https://id.atlassian.com/manage-profile/security/api-tokens adresine gidip bir token oluşturun.

  > Server/Data Center için bunun yerine Personal Access Token kullanın. Bkz. [Authentication](https://mcp-atlassian.soomiles.com/docs/authentication).

  ### 2. IDE'nizi Yapılandırın

  Claude Desktop veya Cursor MCP yapılandırmanıza ekleyin:

  ```json
  {
    "mcpServers": {
      "mcp-atlassian": {
        "command": "uvx",
        "args": ["mcp-atlassian"],
        "env": {
          "JIRA_URL": "https://your-company.atlassian.net",
          "JIRA_USERNAME": "your.email@company.com",
          "JIRA_API_TOKEN": "your_api_token",
          "CONFLUENCE_URL": "https://your-company.atlassian.net/wiki",
          "CONFLUENCE_USERNAME": "your.email@company.com",
          "CONFLUENCE_API_TOKEN": "your_api_token"
        }
      }
    }
  }
  ```

  > **Server/Data Center kullanıcıları**: `JIRA_USERNAME` + `JIRA_API_TOKEN` yerine `JIRA_PERSONAL_TOKEN` kullanın. Ayrıntılar için [Authentication](https://mcp-atlassian.soomiles.com/docs/authentication) sayfasına bakın.

  ### 3. Kullanmaya Başlayın

  AI asistanınızdan şunları isteyin:
  - **"PROJ projesinde bana atanmış sorunları bul"**
  - **"Confluence'da onboarding dokümanlarını ara"**
  - **"Login sorunu için bir bug ticket oluştur"**
  - **"PROJ-123'ün durumunu Done olarak güncelle"**

  ## Dokumentasyon

  Tam dokumentasyon **[mcp-atlassian.soomiles.com](https://mcp-atlassian.soomiles.com)** adresinde mevcuttur.

  Dokumentasyon [llms.txt formatında](https://llmstxt.org/) da bulunmaktadır; LLM'ler bunu kolayca tüketebilir:
  - [`llms.txt`](https://mcp-atlassian.soomiles.com/llms.txt) — dokumentasyon site haritası
  - [`llms-full.txt`](https://mcp-atlassian.soomiles.com/llms-full.txt) — tam dokumentasyon

  | Konu | Açıklama |
  |------|----------|
  | [Installation](https://mcp-atlassian.soomiles.com/docs/installation) | uvx, Docker, pip, kaynaktan |
  | [Authentication](https://mcp-atlassian.soomiles.com/docs/authentication) | API token'ları, PAT, OAuth 2.0 |
  | [Configuration](https://mcp-atlassian.soomiles.com/docs/configuration) | IDE kurulumu, ortam değişkenleri |
  | [HTTP Transport](https://mcp-atlassian.soomiles.com/docs/http-transport) | SSE, streamable-http, çok kullanıcılı |
  | [Tools Reference](https://mcp-atlassian.soomiles.com/docs/tools-reference) | Tüm Jira ve Confluence araçları |
  | [Troubleshooting](https://mcp-atlassian.soomiles.com/docs/troubleshooting) | Yaygın sorunlar ve hata ayıklama |

  ## Uyumluluk

  | Ürün | Dağıtım | Destek |
  |------|--------|--------|
  | Confluence | Cloud | Tam destekleniyor |
  | Confluence | Server/Data Center | Destekleniyor (v6.0+) |
  | Jira | Cloud | Tam destekleniyor |
  | Jira | Server/Data Center | Destekleniyor (v8.14+) |

  ## Ana Araçlar

  | Jira | Confluence |
  |------|-----------|
  | `jira_search` - JQL ile ara | `confluence_search` - CQL ile ara |
  | `jira_get_issue` - Sorun detaylarını al | `confluence_get_page` - Sayfa içeriğini al |
  | `jira_create_issue` - Sorun oluştur | `confluence_create_page` - Sayfa oluştur |
  | `jira_update_issue` - Sorunları güncelle | `confluence_update_page` - Sayfaları güncelle |
  | `jira_transition_issue` - Durumu değiştir | `confluence_add_comment` - Yorum ekle |

  **Toplam 72 araç** — Tam liste için [Tools Reference](https://mcp-atlassian.soomiles.com/docs/tools-reference) sayfasına bakın.

  ## Güvenlik

  API token'larını asla paylaşmayın. `.env` dosyalarını güvende tutun. Bkz. [SECURITY.md](SECURITY.md).

  ## Katkı Sağlama

  Geliştirme kurulumu için [CONTRIBUTING.md](CONTRIBUTING.md) sayfasına bakın.

  ## Lisans

  MIT - Bkz. [LICENSE](LICENSE). Resmi Atlassian ürünü değildir.
---

# MCP Atlassian

![PyPI Version](https://img.shields.io/pypi/v/mcp-atlassian)
![PyPI - Downloads](https://img.shields.io/pypi/dm/mcp-atlassian)
![PePy - Total Downloads](https://static.pepy.tech/personalized-badge/mcp-atlassian?period=total&units=international_system&left_color=grey&right_color=blue&left_text=Total%20Downloads)
[![Run Tests](https://github.com/sooperset/mcp-atlassian/actions/workflows/tests.yml/badge.svg)](https://github.com/sooperset/mcp-atlassian/actions/workflows/tests.yml)
![License](https://img.shields.io/github/license/sooperset/mcp-atlassian)
[![Docs](https://img.shields.io/badge/docs-mintlify-blue)](https://mcp-atlassian.soomiles.com)

Model Context Protocol (MCP) server for Atlassian products (Confluence and Jira). Supports both Cloud and Server/Data Center deployments.

https://github.com/user-attachments/assets/35303504-14c6-4ae4-913b-7c25ea511c3e

<details>
<summary>Confluence Demo</summary>

https://github.com/user-attachments/assets/7fe9c488-ad0c-4876-9b54-120b666bb785

</details>

## Quick Start

### 1. Get Your API Token

Go to https://id.atlassian.com/manage-profile/security/api-tokens and create a token.

> For Server/Data Center, use a Personal Access Token instead. See [Authentication](https://mcp-atlassian.soomiles.com/docs/authentication).

### 2. Configure Your IDE

Add to your Claude Desktop or Cursor MCP configuration:

```json
{
  "mcpServers": {
    "mcp-atlassian": {
      "command": "uvx",
      "args": ["mcp-atlassian"],
      "env": {
        "JIRA_URL": "https://your-company.atlassian.net",
        "JIRA_USERNAME": "your.email@company.com",
        "JIRA_API_TOKEN": "your_api_token",
        "CONFLUENCE_URL": "https://your-company.atlassian.net/wiki",
        "CONFLUENCE_USERNAME": "your.email@company.com",
        "CONFLUENCE_API_TOKEN": "your_api_token"
      }
    }
  }
}
```

> **Server/Data Center users**: Use `JIRA_PERSONAL_TOKEN` instead of `JIRA_USERNAME` + `JIRA_API_TOKEN`. See [Authentication](https://mcp-atlassian.soomiles.com/docs/authentication) for details.

### 3. Start Using

Ask your AI assistant to:
- **"Find issues assigned to me in PROJ project"**
- **"Search Confluence for onboarding docs"**
- **"Create a bug ticket for the login issue"**
- **"Update the status of PROJ-123 to Done"**

## Documentation

Full documentation is available at **[mcp-atlassian.soomiles.com](https://mcp-atlassian.soomiles.com)**.

Documentation is also available in [llms.txt format](https://llmstxt.org/), which LLMs can consume easily:
- [`llms.txt`](https://mcp-atlassian.soomiles.com/llms.txt) — documentation sitemap
- [`llms-full.txt`](https://mcp-atlassian.soomiles.com/llms-full.txt) — complete documentation

| Topic | Description |
|-------|-------------|
| [Installation](https://mcp-atlassian.soomiles.com/docs/installation) | uvx, Docker, pip, from source |
| [Authentication](https://mcp-atlassian.soomiles.com/docs/authentication) | API tokens, PAT, OAuth 2.0 |
| [Configuration](https://mcp-atlassian.soomiles.com/docs/configuration) | IDE setup, environment variables |
| [HTTP Transport](https://mcp-atlassian.soomiles.com/docs/http-transport) | SSE, streamable-http, multi-user |
| [Tools Reference](https://mcp-atlassian.soomiles.com/docs/tools-reference) | All Jira & Confluence tools |
| [Troubleshooting](https://mcp-atlassian.soomiles.com/docs/troubleshooting) | Common issues & debugging |

## Compatibility

| Product | Deployment | Support |
|---------|------------|---------|
| Confluence | Cloud | Fully supported |
| Confluence | Server/Data Center | Supported (v6.0+) |
| Jira | Cloud | Fully supported |
| Jira | Server/Data Center | Supported (v8.14+) |

## Key Tools

| Jira | Confluence |
|------|------------|
| `jira_search` - Search with JQL | `confluence_search` - Search with CQL |
| `jira_get_issue` - Get issue details | `confluence_get_page` - Get page content |
| `jira_create_issue` - Create issues | `confluence_create_page` - Create pages |
| `jira_update_issue` - Update issues | `confluence_update_page` - Update pages |
| `jira_transition_issue` - Change status | `confluence_add_comment` - Add comments |

**72 tools total** — See [Tools Reference](https://mcp-atlassian.soomiles.com/docs/tools-reference) for the complete list.

## Security

Never share API tokens. Keep `.env` files secure. See [SECURITY.md](SECURITY.md).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup.

## License

MIT - See [LICENSE](LICENSE). Not an official Atlassian product.
