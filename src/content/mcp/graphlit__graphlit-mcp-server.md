---
name: "graphlit/graphlit-mcp-server"
description: "Ingest anything from Slack, Discord, websites, Google Drive, Linear or GitHub into a Graphlit project - and then search and retrieve relevant knowledge within an MCP client like Cursor, Windsurf or Cline."
description_tr: "Slack, Discord, web siteleri, Google Drive, Linear veya GitHub'dan her türlü içeriği bir Graphlit projesine aktarın ve ardından Cursor, Windsurf veya Cline gibi MCP istemcileri içinde ilgili bilgileri arayıp alın."
category: "Knowledge & Memory"
repo: "graphlit/graphlit-mcp-server"
stars: 376
url: "https://github.com/graphlit/graphlit-mcp-server"
body_length: 11951
license: "MIT"
language: "TypeScript"
homepage: "https://www.graphlit.com"
body_tr: |-
  [![npm version](https://badge.fury.io/js/graphlit-mcp-server.svg)](https://badge.fury.io/js/graphlit-mcp-server)
  [![smithery badge](https://smithery.ai/badge/@graphlit/graphlit-mcp-server)](https://smithery.ai/server/@graphlit/graphlit-mcp-server)

  # Graphlit Platformu için Model Context Protocol (MCP) Sunucusu

  ## Genel Bakış

  Model Context Protocol (MCP) Sunucusu, MCP istemcileri ile Graphlit servisi arasında entegrasyonu sağlar. Bu belge kurulum sürecini açıklar ve istemciyi kullanmanın temel bir örneğini sunar.

  Slack, Discord, web siteleri, Google Drive, e-posta, Jira, Linear veya GitHub'dan herhangi bir şeyi Graphlit projesine alın - ve ardından Cursor, Windsurf, Goose veya Cline gibi bir MCP istemcisinde ilgili bilgileri arayın ve alın.

  Graphlit projeniz, tüm geliştirici ve ürün yönetimi araçlarınız arasında aranabilir ve RAG'a hazır bir bilgi tabanı olarak işlev görür.

  Belgeler (PDF, DOCX, PPTX, vb.) ve HTML web sayfaları alındığında Markdown'a dönüştürülecektir. Ses ve video dosyaları alındığında transkribe edilecektir.

  Web tarama ve web araması, Firecrawl, Exa vb. gibi diğer araçları ayrıca entegre etmeye gerek kalmadan MCP araçları olarak yerleşiktir.

  MCP Sunucusu kullanım durumları ve özellikleri hakkında daha fazla bilgiyi [blogumuzda](https://www.graphlit.com/blog/graphlit-mcp-server) okuyabilirsiniz.

  Goose MCP istemcisi ile Graphlit MCP Sunucusu'nu kullanma hakkında [YouTube videosunu](https://www.youtube.com/watch?v=Or-QqonvcAs&t=4s) izleyin.

  MCP Sunucusu kullanımı hakkında sorularınız varsa, [Discord](https://discord.gg/ygFmfjy3Qx) topluluğumuza katılın ve #mcp kanalına yazın.

  <a href="https://glama.ai/mcp/servers/fscrivteod">
    
  </a>

  ## Araçlar

  ### Alma

  - İçerik Sorgula
  - Koleksiyonları Sorgula
  - Feed'leri Sorgula
  - Konuşmaları Sorgula
  - İlgili Kaynakları Al
  - Benzer Resimleri Al
  - Resmi Görsel Olarak Tanımla

  ### RAG

  - LLM Konuşmasını İstemle

  ### Çıkarım

  - Metinden Yapılandırılmış JSON Çıkart

  ### Yayımlama

  - Ses Olarak Yayımla (ElevenLabs Audio)
  - Resim Olarak Yayımla (OpenAI Image Generation)

  ### Alım

  - Dosyalar
  - Web Sayfaları
  - Mesajlar
  - Gönderiler
  - E-postalar
  - Sorunlar
  - Metin
  - Bellek (Kısa Vadeli)

  ### Veri Bağlayıcıları

  - Microsoft Outlook e-postası
  - Google Mail
  - Notion
  - Reddit
  - Linear
  - Jira
  - GitHub Issues
  - Google Drive
  - OneDrive
  - SharePoint
  - Dropbox
  - Box
  - GitHub
  - Slack
  - Microsoft Teams
  - Discord
  - Twitter/X
  - Podcast'ler (RSS)

  ### Web

  - Web Taraması
  - Web Araması (Podcast Araması dahil)
  - Web Haritalama
  - Sayfanın Ekran Görüntüsü

  ### Bildirimler

  - Slack
  - E-posta
  - Webhook
  - Twitter/X

  ### İşlemler

  - Projeyi Yapılandır
  - Koleksiyon Oluştur
  - Koleksiyona İçerik Ekle
  - Koleksiyondan İçerik Sil
  - Koleksiyon(ları) Sil
  - Feed(leri) Sil
  - İçerik(leri) Sil
  - Konuşma(ları) Sil
  - Feed Tamamlandı mı?
  - İçerik Tamamlandı mı?

  ### Numaralandırmalar

  - Slack Kanallarını Listele
  - Microsoft Teams Ekiplerini Listele
  - Microsoft Teams Kanallarını Listele
  - SharePoint Kitaplıklarını Listele
  - SharePoint Klasörlerini Listele
  - Linear Projelerini Listele
  - Notion Veritabanlarını Listele
  - Notion Sayfalarını Listele
  - Dropbox Klasörlerini Listele
  - Box Klasörlerini Listele
  - Discord Guild'lerini Listele
  - Discord Kanallarını Listele
  - Google Takvimlerini Listele
  - Microsoft Takvimlerini Listele

  ## Kaynaklar

  - Proje
  - İçerik
  - Feed'ler
  - Koleksiyonlar (İçeriğin)
  - İş Akışları
  - Konuşmalar
  - Spesifikasyonlar

  ## Ön Koşullar

  Başlamadan önce aşağıdakilere sahip olduğunuzdan emin olun:

  - Sisteminizde Node.js yüklü (önerilen sürüm 18.x veya daha yüksek).
  - [Graphlit Platformu](https://portal.graphlit.dev)'nda API ayarları panosuna erişim izni olan etkin bir hesap.

  ## Yapılandırma

  Graphlit MCP Sunucusu, kimlik doğrulama ve yapılandırma için ayarlanacak ortam değişkenlerini destekler:

  - `GRAPHLIT_ENVIRONMENT_ID`: Ortam ID'niz.
  - `GRAPHLIT_ORGANIZATION_ID`: Kuruluş ID'niz.
  - `GRAPHLIT_JWT_SECRET`: JWT token'ını imzalamak için JWT secret'ınız.

  Bu değerleri [Graphlit Platformu](https://portal.graphlit.dev)'nun API ayarları panosunda bulabilirsiniz.

  ## Kurulum

  ### VS Code Aracılığıyla Kurulum

  Hızlı kurulum için aşağıdaki tek tıklama kurulum düğmelerinden birini kullanın:

  [![Install with NPX in VS Code](https://img.shields.io/badge/VS_Code-NPM-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=graphlit&inputs=%5B%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22organization_id%22%2C%22description%22%3A%22Graphlit%20Organization%20ID%22%2C%22password%22%3Atrue%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22environment_id%22%2C%22description%22%3A%22Graphlit%20Environment%20ID%22%2C%22password%22%3Atrue%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22jwt_secret%22%2C%22description%22%3A%22Graphlit%20JWT%20Secret%22%2C%22password%22%3Atrue%7D%5D&config=%7B%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22graphlit-mcp-server%22%5D%2C%22env%22%3A%7B%22GRAPHLIT_ORGANIZATION_ID%22%3A%22%24%7Binput%3Aorganization_id%7D%22%2C%22GRAPHLIT_ENVIRONMENT_ID%22%3A%22%24%7Binput%3Aenvironment_id%7D%22%2C%22GRAPHLIT_JWT_SECRET%22%3A%22%24%7Binput%3Ajwt_secret%7D%22%7D%7D) [![Install with NPX in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-NPM-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=graphlit&inputs=%5B%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22organization_id%22%2C%22description%22%3A%22Graphlit%20Organization%20ID%22%2C%22password%22%3Atrue%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22environment_id%22%2C%22description%22%3A%22Graphlit%20Environment%20ID%22%2C%22password%22%3Atrue%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22jwt_secret%22%2C%22description%22%3A%22Graphlit%20JWT%20Secret%22%2C%22password%22%3Atrue%7D%5D&config=%7B%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22graphlit-mcp-server%22%5D%2C%22env%22%3A%7B%22GRAPHLIT_ORGANIZATION_ID%22%3A%22%24%7Binput%3Aorganization_id%7D%22%2C%22GRAPHLIT_ENVIRONMENT_ID%22%3A%22%24%7Binput%3Aenvironment_id%7D%22%2C%22GRAPHLIT_JWT_SECRET%22%3A%22%24%7Binput%3Ajwt_secret%7D%22%7D%7D&quality=insiders)

  Manuel kurulum için aşağıdaki JSON bloğunu VS Code'daki User Settings (JSON) dosyanıza ekleyin. Bunu `Ctrl + Shift + P` tuşlarına basıp `Preferences: Open User Settings (JSON)` yazarak yapabilirsiniz.

  İsteğe bağlı olarak, çalışma alanınızda `.vscode/mcp.json` adlı bir dosyaya ekleyebilirsiniz. Bu, yapılandırmayı başkalarıyla paylaşmanıza olanak sağlayacaktır.

  > `.vscode/mcp.json` dosyasında `mcp` anahtarının gerekli olmadığını unutmayın.

  ```json
  {
    "mcp": {
      "inputs": [
        {
          "type": "promptString",
          "id": "organization_id",
          "description": "Graphlit Organization ID",
          "password": true
        },
        {
          "type": "promptString",
          "id": "environment_id",
          "description": "Graphlit Environment ID",
          "password": true
        },
        {
          "type": "promptString",
          "id": "jwt_secret",
          "description": "Graphlit JWT Secret",
          "password": true
        }
      ],
      "servers": {
        "graphlit": {
          "command": "npx",
          "args": ["-y", "graphlit-mcp-server"],
          "env": {
            "GRAPHLIT_ORGANIZATION_ID": "${input:organization_id}",
            "GRAPHLIT_ENVIRONMENT_ID": "${input:environment_id}",
            "GRAPHLIT_JWT_SECRET": "${input:jwt_secret}"
          }
        }
      }
    }
  }
  ```

  ### Windsurf Aracılığıyla Kurulum

  graphlit-mcp-server'ı Windsurf IDE uygulamasına kurmak için Cline NPX kullanmalıdır:

  ```bash
  npx -y graphlit-mcp-server
  ```

  mcp_config.json dosyanız şunun gibi yapılandırılmalıdır:

  ```
  {
      "mcpServers": {
          "graphlit-mcp-server": {
              "command": "npx",
              "args": [
                  "-y",
                  "graphlit-mcp-server"
              ],
              "env": {
                  "GRAPHLIT_ORGANIZATION_ID": "your-organization-id",
                  "GRAPHLIT_ENVIRONMENT_ID": "your-environment-id",
                  "GRAPHLIT_JWT_SECRET": "your-jwt-secret",
              }
          }
      }
  }
  ```

  ### Cline Aracılığıyla Kurulum

  graphlit-mcp-server'ı Cline IDE uygulamasına kurmak için Cline NPX kullanmalıdır:

  ```bash
  npx -y graphlit-mcp-server
  ```

  cline_mcp_settings.json dosyanız şunun gibi yapılandırılmalıdır:

  ```
  {
      "mcpServers": {
          "graphlit-mcp-server": {
              "command": "npx",
              "args": [
                  "-y",
                  "graphlit-mcp-server"
              ],
              "env": {
                  "GRAPHLIT_ORGANIZATION_ID": "your-organization-id",
                  "GRAPHLIT_ENVIRONMENT_ID": "your-environment-id",
                  "GRAPHLIT_JWT_SECRET": "your-jwt-secret",
              }
          }
      }
  }
  ```

  ### Cursor Aracılığıyla Kurulum

  graphlit-mcp-server'ı Cursor IDE uygulamasına kurmak için Cursor NPX kullanmalıdır:

  ```bash
  npx -y graphlit-mcp-server
  ```

  mcp.json dosyanız şunun gibi yapılandırılmalıdır:

  ```
  {
      "mcpServers": {
          "graphlit-mcp-server": {
              "command": "npx",
              "args": [
                  "-y",
                  "graphlit-mcp-server"
              ],
              "env": {
                  "GRAPHLIT_ORGANIZATION_ID": "your-organization-id",
                  "GRAPHLIT_ENVIRONMENT_ID": "your-environment-id",
                  "GRAPHLIT_JWT_SECRET": "your-jwt-secret",
              }
          }
      }
  }
  ```

  ### Smithery Aracılığıyla Kurulum

  graphlit-mcp-server'ı [Smithery](https://smithery.ai/server/@graphlit/graphlit-mcp-server) aracılığıyla Claude Desktop için otomatik olarak kurmak için:

  ```bash
  npx -y @smithery/cli install @graphlit/graphlit-mcp-server --client claude
  ```

  ### Manuel Kurulum

  Graphlit MCP Sunucusu'nu herhangi bir MCP istemci uygulamasında kullanmak için:

  ```
  {
      "mcpServers": {
          "graphlit-mcp-server": {
              "command": "npx",
              "args": [
                  "-y",
                  "graphlit-mcp-server"
              ],
              "env": {
                  "GRAPHLIT_ORGANIZATION_ID": "your-organization-id",
                  "GRAPHLIT_ENVIRONMENT_ID": "your-environment-id",
                  "GRAPHLIT_JWT_SECRET": "your-jwt-secret",
              }
          }
      }
  }
  ```

  İsteğe bağlı olarak, Slack, Google Email ve Notion gibi veri bağlayıcıları için kimlik bilgilerini yapılandırabilirsiniz.
  Yalnızca GRAPHLIT_ORGANIZATION_ID, GRAPHLIT_ENVIRONMENT_ID ve GRAPHLIT_JWT_SECRET gereklidir.

  ```
  {
      "mcpServers": {
          "graphlit-mcp-server": {
              "command": "npx",
              "args": [
                  "-y",
                  "graphlit-mcp-server"
              ],
              "env": {
                  "GRAPHLIT_ORGANIZATION_ID": "your-organization-id",
                  "GRAPHLIT_ENVIRONMENT_ID": "your-environment-id",
                  "GRAPHLIT_JWT_SECRET": "your-jwt-secret",
                  "SLACK_BOT_TOKEN": "your-slack-bot-token",
                  "DISCORD_BOT_TOKEN": "your-discord-bot-token",
                  "TWITTER_TOKEN": "your-twitter-token",
                  "GOOGLE_EMAIL_REFRESH_TOKEN": "your-google-refresh-token",
                  "GOOGLE_EMAIL_CLIENT_ID": "your-google-client-id",
                  "GOOGLE_EMAIL_CLIENT_SECRET": "your-google-client-secret",
                  "LINEAR_API_KEY": "your-linear-api-key",
                  "GITHUB_PERSONAL_ACCESS_TOKEN": "your-github-pat",
                  "JIRA_EMAIL": "your-jira-email",
                  "JIRA_TOKEN": "your-jira-token",
                  "NOTION_API_KEY": "your-notion-api-key"
              }
          }
      }
  }
  ```

  NOT: Windows'ta 'npx' çalıştırırken, npx'i komut isteminden açıkça çağırmanız gerekebilir.

  ```
  "command": "C:\\Windows\\System32\\cmd.exe /c npx"
  ```

  ## Destek

  Lütfen [Graphlit API Belgelerine](https://docs.graphlit.dev/) bakınız.

  Graphlit MCP Sunucusu hakkında destek için, lütfen [GitHub Issue](https://github.com/graphlit/graphlit-mcp-server/issues) gönderiniz.

  Graphlit Platformu hakkında daha fazla destek için, lütfen [Discord](https://discord.gg/ygFmfjy3Qx) topluluğumuza katılınız.
---

[![npm version](https://badge.fury.io/js/graphlit-mcp-server.svg)](https://badge.fury.io/js/graphlit-mcp-server)
[![smithery badge](https://smithery.ai/badge/@graphlit/graphlit-mcp-server)](https://smithery.ai/server/@graphlit/graphlit-mcp-server)

# Model Context Protocol (MCP) Server for Graphlit Platform

## Overview

The Model Context Protocol (MCP) Server enables integration between MCP clients and the Graphlit service. This document outlines the setup process and provides a basic example of using the client.

Ingest anything from Slack, Discord, websites, Google Drive, email, Jira, Linear or GitHub into a Graphlit project - and then search and retrieve relevant knowledge within an MCP client like Cursor, Windsurf, Goose or Cline.

Your Graphlit project acts as a searchable, and RAG-ready knowledge base across all your developer and product management tools.

Documents (PDF, DOCX, PPTX, etc.) and HTML web pages will be extracted to Markdown upon ingestion. Audio and video files will be transcribed upon ingestion.

Web crawling and web search are built-in as MCP tools, with no need to integrate other tools like Firecrawl, Exa, etc. separately.

You can read more about the MCP Server use cases and features on our [blog](https://www.graphlit.com/blog/graphlit-mcp-server).

Watch our latest [YouTube video](https://www.youtube.com/watch?v=Or-QqonvcAs&t=4s) on using the Graphlit MCP Server with the Goose MCP client.

For any questions on using the MCP Server, please join our [Discord](https://discord.gg/ygFmfjy3Qx) community and post on the #mcp channel.

<a href="https://glama.ai/mcp/servers/fscrivteod">
  
</a>

## Tools

### Retrieval

- Query Contents
- Query Collections
- Query Feeds
- Query Conversations
- Retrieve Relevant Sources
- Retrieve Similar Images
- Visually Describe Image

### RAG

- Prompt LLM Conversation

### Extraction

- Extract Structured JSON from Text

### Publishing

- Publish as Audio (ElevenLabs Audio)
- Publish as Image (OpenAI Image Generation)

### Ingestion

- Files
- Web Pages
- Messages
- Posts
- Emails
- Issues
- Text
- Memory (Short-Term)

### Data Connectors

- Microsoft Outlook email
- Google Mail
- Notion
- Reddit
- Linear
- Jira
- GitHub Issues
- Google Drive
- OneDrive
- SharePoint
- Dropbox
- Box
- GitHub
- Slack
- Microsoft Teams
- Discord
- Twitter/X
- Podcasts (RSS)

### Web

- Web Crawling
- Web Search (including Podcast Search)
- Web Mapping
- Screenshot Page

### Notifications

- Slack
- Email
- Webhook
- Twitter/X

### Operations

- Configure Project
- Create Collection
- Add Contents to Collection
- Remove Contents from Collection
- Delete Collection(s)
- Delete Feed(s)
- Delete Content(s)
- Delete Conversation(s)
- Is Feed Done?
- Is Content Done?

### Enumerations

- List Slack Channels
- List Microsoft Teams Teams
- List Microsoft Teams Channels
- List SharePoint Libraries
- List SharePoint Folders
- List Linear Projects
- List Notion Databases
- List Notion Pages
- List Dropbox Folders
- List Box Folders
- List Discord Guilds
- List Discord Channels
- List Google Calendars
- List Microsoft Calendars

## Resources

- Project
- Contents
- Feeds
- Collections (of Content)
- Workflows
- Conversations
- Specifications

## Prerequisites

Before you begin, ensure you have the following:

- Node.js installed on your system (recommended version 18.x or higher).
- An active account on the [Graphlit Platform](https://portal.graphlit.dev) with access to the API settings dashboard.

## Configuration

The Graphlit MCP Server supports environment variables to be set for authentication and configuration:

- `GRAPHLIT_ENVIRONMENT_ID`: Your environment ID.
- `GRAPHLIT_ORGANIZATION_ID`: Your organization ID.
- `GRAPHLIT_JWT_SECRET`: Your JWT secret for signing the JWT token.

You can find these values in the API settings dashboard on the [Graphlit Platform](https://portal.graphlit.dev).

## Installation

### Installing via VS Code

For quick installation, use one of the one-click install buttons below:

[![Install with NPX in VS Code](https://img.shields.io/badge/VS_Code-NPM-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=graphlit&inputs=%5B%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22organization_id%22%2C%22description%22%3A%22Graphlit%20Organization%20ID%22%2C%22password%22%3Atrue%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22environment_id%22%2C%22description%22%3A%22Graphlit%20Environment%20ID%22%2C%22password%22%3Atrue%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22jwt_secret%22%2C%22description%22%3A%22Graphlit%20JWT%20Secret%22%2C%22password%22%3Atrue%7D%5D&config=%7B%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22graphlit-mcp-server%22%5D%2C%22env%22%3A%7B%22GRAPHLIT_ORGANIZATION_ID%22%3A%22%24%7Binput%3Aorganization_id%7D%22%2C%22GRAPHLIT_ENVIRONMENT_ID%22%3A%22%24%7Binput%3Aenvironment_id%7D%22%2C%22GRAPHLIT_JWT_SECRET%22%3A%22%24%7Binput%3Ajwt_secret%7D%22%7D%7D) [![Install with NPX in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-NPM-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=graphlit&inputs=%5B%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22organization_id%22%2C%22description%22%3A%22Graphlit%20Organization%20ID%22%2C%22password%22%3Atrue%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22environment_id%22%2C%22description%22%3A%22Graphlit%20Environment%20ID%22%2C%22password%22%3Atrue%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22jwt_secret%22%2C%22description%22%3A%22Graphlit%20JWT%20Secret%22%2C%22password%22%3Atrue%7D%5D&config=%7B%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22graphlit-mcp-server%22%5D%2C%22env%22%3A%7B%22GRAPHLIT_ORGANIZATION_ID%22%3A%22%24%7Binput%3Aorganization_id%7D%22%2C%22GRAPHLIT_ENVIRONMENT_ID%22%3A%22%24%7Binput%3Aenvironment_id%7D%22%2C%22GRAPHLIT_JWT_SECRET%22%3A%22%24%7Binput%3Ajwt_secret%7D%22%7D%7D&quality=insiders)

For manual installation, add the following JSON block to your User Settings (JSON) file in VS Code. You can do this by pressing `Ctrl + Shift + P` and typing `Preferences: Open User Settings (JSON)`.

Optionally, you can add it to a file called `.vscode/mcp.json` in your workspace. This will allow you to share the configuration with others.

> Note that the `mcp` key is not needed in the `.vscode/mcp.json` file.

```json
{
  "mcp": {
    "inputs": [
      {
        "type": "promptString",
        "id": "organization_id",
        "description": "Graphlit Organization ID",
        "password": true
      },
      {
        "type": "promptString",
        "id": "environment_id",
        "description": "Graphlit Environment ID",
        "password": true
      },
      {
        "type": "promptString",
        "id": "jwt_secret",
        "description": "Graphlit JWT Secret",
        "password": true
      }
    ],
    "servers": {
      "graphlit": {
        "command": "npx",
        "args": ["-y", "graphlit-mcp-server"],
        "env": {
          "GRAPHLIT_ORGANIZATION_ID": "${input:organization_id}",
          "GRAPHLIT_ENVIRONMENT_ID": "${input:environment_id}",
          "GRAPHLIT_JWT_SECRET": "${input:jwt_secret}"
        }
      }
    }
  }
}
```

### Installing via Windsurf

To install graphlit-mcp-server in Windsurf IDE application, Cline should use NPX:

```bash
npx -y graphlit-mcp-server
```

Your mcp_config.json file should be configured similar to:

```
{
    "mcpServers": {
        "graphlit-mcp-server": {
            "command": "npx",
            "args": [
                "-y",
                "graphlit-mcp-server"
            ],
            "env": {
                "GRAPHLIT_ORGANIZATION_ID": "your-organization-id",
                "GRAPHLIT_ENVIRONMENT_ID": "your-environment-id",
                "GRAPHLIT_JWT_SECRET": "your-jwt-secret",
            }
        }
    }
}
```

### Installing via Cline

To install graphlit-mcp-server in Cline IDE application, Cline should use NPX:

```bash
npx -y graphlit-mcp-server
```

Your cline_mcp_settings.json file should be configured similar to:

```
{
    "mcpServers": {
        "graphlit-mcp-server": {
            "command": "npx",
            "args": [
                "-y",
                "graphlit-mcp-server"
            ],
            "env": {
                "GRAPHLIT_ORGANIZATION_ID": "your-organization-id",
                "GRAPHLIT_ENVIRONMENT_ID": "your-environment-id",
                "GRAPHLIT_JWT_SECRET": "your-jwt-secret",
            }
        }
    }
}
```

### Installing via Cursor

To install graphlit-mcp-server in Cursor IDE application, Cursor should use NPX:

```bash
npx -y graphlit-mcp-server
```

Your mcp.json file should be configured similar to:

```
{
    "mcpServers": {
        "graphlit-mcp-server": {
            "command": "npx",
            "args": [
                "-y",
                "graphlit-mcp-server"
            ],
            "env": {
                "GRAPHLIT_ORGANIZATION_ID": "your-organization-id",
                "GRAPHLIT_ENVIRONMENT_ID": "your-environment-id",
                "GRAPHLIT_JWT_SECRET": "your-jwt-secret",
            }
        }
    }
}
```

### Installing via Smithery

To install graphlit-mcp-server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@graphlit/graphlit-mcp-server):

```bash
npx -y @smithery/cli install @graphlit/graphlit-mcp-server --client claude
```

### Installing manually

To use the Graphlit MCP Server in any MCP client application, use:

```
{
    "mcpServers": {
        "graphlit-mcp-server": {
            "command": "npx",
            "args": [
                "-y",
                "graphlit-mcp-server"
            ],
            "env": {
                "GRAPHLIT_ORGANIZATION_ID": "your-organization-id",
                "GRAPHLIT_ENVIRONMENT_ID": "your-environment-id",
                "GRAPHLIT_JWT_SECRET": "your-jwt-secret",
            }
        }
    }
}
```

Optionally, you can configure the credentials for data connectors, such as Slack, Google Email and Notion.
Only GRAPHLIT_ORGANIZATION_ID, GRAPHLIT_ENVIRONMENT_ID and GRAPHLIT_JWT_SECRET are required.

```
{
    "mcpServers": {
        "graphlit-mcp-server": {
            "command": "npx",
            "args": [
                "-y",
                "graphlit-mcp-server"
            ],
            "env": {
                "GRAPHLIT_ORGANIZATION_ID": "your-organization-id",
                "GRAPHLIT_ENVIRONMENT_ID": "your-environment-id",
                "GRAPHLIT_JWT_SECRET": "your-jwt-secret",
                "SLACK_BOT_TOKEN": "your-slack-bot-token",
                "DISCORD_BOT_TOKEN": "your-discord-bot-token",
                "TWITTER_TOKEN": "your-twitter-token",
                "GOOGLE_EMAIL_REFRESH_TOKEN": "your-google-refresh-token",
                "GOOGLE_EMAIL_CLIENT_ID": "your-google-client-id",
                "GOOGLE_EMAIL_CLIENT_SECRET": "your-google-client-secret",
                "LINEAR_API_KEY": "your-linear-api-key",
                "GITHUB_PERSONAL_ACCESS_TOKEN": "your-github-pat",
                "JIRA_EMAIL": "your-jira-email",
                "JIRA_TOKEN": "your-jira-token",
                "NOTION_API_KEY": "your-notion-api-key"
            }
        }
    }
}
```

NOTE: when running 'npx' on Windows, you may need to explicitly call npx via the command prompt.

```
"command": "C:\\Windows\\System32\\cmd.exe /c npx"
```

## Support

Please refer to the [Graphlit API Documentation](https://docs.graphlit.dev/).

For support with the Graphlit MCP Server, please submit a [GitHub Issue](https://github.com/graphlit/graphlit-mcp-server/issues).

For further support with the Graphlit Platform, please join our [Discord](https://discord.gg/ygFmfjy3Qx) community.
