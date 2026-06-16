---
name: "kopfrechner/gitlab-mr-mcp"
description: "Interact seamlessly with issues and merge requests of your GitLab projects."
category: "Version Control"
repo: "kopfrechner/gitlab-mr-mcp"
stars: 89
url: "https://github.com/kopfrechner/gitlab-mr-mcp"
body_length: 3720
license: "MIT"
language: "JavaScript"
body_tr: |-
  [![MseeP.ai Security Assessment Badge](https://mseep.net/pr/kopfrechner-gitlab-mr-mcp-badge.png)](https://mseep.ai/app/kopfrechner-gitlab-mr-mcp)

  [![GitHub stars](https://img.shields.io/github/stars/kopfrechner/gitlab-mr-mcp?style=flat)](https://github.com/kopfrechner/gitlab-mr-mcp/stargazers)
  [![License](https://img.shields.io/github/license/kopfrechner/gitlab-mr-mcp)](LICENSE)
  [![smithery badge](https://smithery.ai/badge/@kopfrechner/gitlab-mr-mcp)](https://smithery.ai/server/@kopfrechner/gitlab-mr-mcp)

  # 🚀 GitLab MR MCP

  GitLab merge request'leri ve issue'ları ile etkileşim kurmak için bir Model Context Protocol (MCP) sunucusu.

  ## 📌 Genel Bakış

  Bu proje, AI ajanlarının GitLab repository'leri ile etkileşim kurmasını sağlayan Model Context Protocol (MCP) kullanarak bir sunucu implementi eder. Aşağıdakiler için araçlar sağlar:

  - GitLab projelerini listeleme
  - Merge request detaylarını ve yorumlarını alma
  - Merge request diff'lerini alma
  - Merge request'lere yorum ekleme
  - Merge request diff'lerinde koddaki satıra özgü yorum ekleme
  - Issue detaylarını alma
  - Merge request başlığı ve açıklaması ayarlama

  ## 📦 Kurulum

  ### ⚡ Smithery Kullanarak

  Claude Desktop için GitLab MR MCP'yi Smithery aracılığıyla otomatik olarak kurmak için:

  ```bash
  npx -y @smithery/cli@latest install @kopfrechner/gitlab-mr-mcp --client claude --config '"{\"gitlabMrMcpToken\":\"YOUR_GITLAB_TOKEN\", \"gitlabMrMcpHost\": \"YOUR_GITLAB_HOST\"}"'
  ```

  ### 🛠️ Manuel Kurulum

  #### 🔧 Ön Koşullar

  - Node.js
  - API erişimi olan GitLab access token
  - GitLab project ID'si (veya ID'leri)

  #### 📖 Kurulum

  1. Bu repository'yi klonlayın
  2. Bağımlılıkları yükleyin:

  ```bash
  npm install
  ```

  3. MCP client konfigürasyonunuza aşağıdakileri ekleyin:
  ```json
  {
    "mcpServers": {
      "gitlab-mr-mcp": {
        "command": "node",
        "args": ["/path/to/gitlab-mr-mcp/index.js"],
        "env": {
          "MR_MCP_GITLAB_TOKEN": "your_gitlab_token",
          "MR_MCP_GITLAB_HOST": "your_gitlab_host"
        }
      }
    }
  }
  ```

  ## 🛠️ Mevcut Araçlar

  * `get_projects`
    Token'ınız ile erişilebilen GitLab projelerinin listesini alır.

  * `list_open_merge_requests`
    Belirtilen projede açık olan tüm merge request'leri listeler.

  * `get_merge_request_details`
    Belirli bir merge request hakkında detaylı bilgi alır.

  * `get_merge_request_comments`
    Belirli bir merge request'ten yorum alır, tartışma notlarını ve diff notlarını içerir.

  * `add_merge_request_comment`
    Bir merge request'e genel yorum ekler.

  * `add_merge_request_diff_comment`
    Bir merge request'teki dosyadaki belirli bir satıra yorum ekler.

  * `get_merge_request_diff`
    Bir merge request için diff'i alır.

  * `get_issue_details`
    Belirli bir issue hakkında detaylı bilgi alır.

  * `set_merge_request_title`
    Bir merge request'in başlığını ayarlar

  * `set_merge_request_description`
    Bir merge request'in açıklamasını ayarlar

  ## 🏗️ Geliştirme

  ### 🔍 Inspector Çalıştırma

  Ortam değişkenlerini ayarlayın:

  ```bash
  export MR_MCP_GITLAB_TOKEN=your_gitlab_token
  export MR_MCP_GITLAB_HOST=your_gitlab_host

  # `get_projects` aracının erişebileceği projeleri filtrelemek için isteğe bağlı ortam değişkenleri:
  # https://docs.gitlab.com/api/access_requests/#valid-access-levels
  export MR_MCP_MIN_ACCESS_LEVEL=min_access_level
  # Proje yolu veya adı ile eşleşmesi gereken arama terimi
  export MR_MCP_PROJECT_SEARCH_TERM=term 
  ```

  MCP client'leriyle kullanmak için şunu çalıştırabilirsiniz:

  ```bash
  npx -y @modelcontextprotocol/inspector npm start
  ```

  ## 🛠️ Sorun Giderme

  İzin sorunları (403 Forbidden) ile karşılaşırsanız, aşağıdakileri kontrol edin:

  1. GitLab token'ınızın uygun scope'lara sahip olması (api, read_api)
  2. Token kullanıcısının projelere erişim yetkisinin olması
  3. Project ID'lerinin doğru olması

  ## 📜 Lisans

  [MIT](LICENSE)

  ## 🤝 Katkıda Bulunma

  Katkılar hoşlanır! Lütfen bir Pull Request göndermekten çekinmeyin.
---

[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/kopfrechner-gitlab-mr-mcp-badge.png)](https://mseep.ai/app/kopfrechner-gitlab-mr-mcp)

[![GitHub stars](https://img.shields.io/github/stars/kopfrechner/gitlab-mr-mcp?style=flat)](https://github.com/kopfrechner/gitlab-mr-mcp/stargazers)
[![License](https://img.shields.io/github/license/kopfrechner/gitlab-mr-mcp)](LICENSE)
[![smithery badge](https://smithery.ai/badge/@kopfrechner/gitlab-mr-mcp)](https://smithery.ai/server/@kopfrechner/gitlab-mr-mcp)

# 🚀 GitLab MR MCP

A Model Context Protocol (MCP) server for interacting with GitLab merge requests and issues.

## 📌 Overview

This project implements a server using the Model Context Protocol (MCP) that allows AI agents to interact with GitLab repositories. It provides tools for:

- Listing available GitLab projects
- Fetching merge request details and comments
- Getting merge request diffs
- Adding comments to merge requests
- Adding line-specific comments to code in merge request diffs
- Fetching issue details
- Setting merge request title and description

## 📦 Installation

### ⚡ Using Smithery

To install GitLab MR MCP for Claude Desktop automatically via Smithery:

```bash
npx -y @smithery/cli@latest install @kopfrechner/gitlab-mr-mcp --client claude --config '"{\"gitlabMrMcpToken\":\"YOUR_GITLAB_TOKEN\", \"gitlabMrMcpHost\": \"YOUR_GITLAB_HOST\"}"'
```

### 🛠️ Manual Installation

#### 🔧 Prerequisites

- Node.js
- GitLab access token with API access
- GitLab project ID(s)

#### 📖 Setup

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

3. Add the following to your MCP client configuration:
```json
{
  "mcpServers": {
    "gitlab-mr-mcp": {
      "command": "node",
      "args": ["/path/to/gitlab-mr-mcp/index.js"],
      "env": {
        "MR_MCP_GITLAB_TOKEN": "your_gitlab_token",
        "MR_MCP_GITLAB_HOST": "your_gitlab_host"
      }
    }
  }
}
```

## 🛠️ Available Tools

* `get_projects`
  Gets a list of GitLab projects accessible with your token.

* `list_open_merge_requests`
  Lists all open merge requests in the specified project.

* `get_merge_request_details`
  Gets detailed information about a specific merge request.

* `get_merge_request_comments`
  Gets comments from a specific merge request, including discussion notes and diff notes.

* `add_merge_request_comment`
  Adds a general comment to a merge request.

* `add_merge_request_diff_comment`
  Adds a comment to a specific line in a file within a merge request.

* `get_merge_request_diff`
  Gets the diff for a merge request.

* `get_issue_details`
  Gets detailed information about a specific issue.

* `set_merge_request_title`
  Set the title of a merge request

* `set_merge_request_description`
  Set the description of a merge request

## 🏗️ Development

### 🔍 Running Inspector

Set up environment variables:

```bash
export MR_MCP_GITLAB_TOKEN=your_gitlab_token
export MR_MCP_GITLAB_HOST=your_gitlab_host

# Optional env vars to filter the projects the `get_projects` tool has access to:
# https://docs.gitlab.com/api/access_requests/#valid-access-levels
export MR_MCP_MIN_ACCESS_LEVEL=min_access_level
# Search term that should match the project path or name 
export MR_MCP_PROJECT_SEARCH_TERM=term 
```

For use with MCP clients, you can run:

```bash
npx -y @modelcontextprotocol/inspector npm start
```

## 🛠️ Troubleshooting

If you encounter permissions issues (403 Forbidden), check:

1. Your GitLab token has the proper scopes (api, read_api)
2. The token user has proper access to the projects
3. The project IDs are correct

## 📜 License

[MIT](LICENSE)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
