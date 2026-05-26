---
name: "tacticlaunch/mcp-linear"
description: "Integrates with Linear project management system"
description_tr: "Linear proje yönetim sistemi ile entegre çalışır"
category: "Other Tools and Integrations"
repo: "tacticlaunch/mcp-linear"
stars: 134
url: "https://github.com/tacticlaunch/mcp-linear"
body_length: 5124
license: "MIT"
language: "TypeScript"
body_tr: |-
  <p align="center">
    
  </p>

  # MCP Linear

  Linear GraphQL API için Model Context Protocol (MCP) sunucusu, gerçek proje yönetimi iş akışları için tasarlanmış — sadece basit issue CRUD'dan fazlası.

  ![MCP Linear](https://img.shields.io/badge/MCP-Linear-blue)
  [![npm version](https://img.shields.io/npm/v/@tacticlaunch/mcp-linear.svg)](https://www.npmjs.com/package/@tacticlaunch/mcp-linear)

  <a href="https://glama.ai/mcp/servers/@tacticlaunch/mcp-linear">
    
  </a>

  ## Özellikler

  MCP Linear, MCP protokolünü uygulayarak AI asistanları ve Linear'ı birbirine bağlar. Bunu kullanarak:

  - Issue'lar, projeleri, takımları, cycle'ları, milestone'ları, roadmap'leri ve dokümanları alabilirsiniz
  - Issue'lar oluşturup güncelleyebilir, durumunu değiştirebilir, atayabilir ve yorum yapabilirsiniz
  - Projeleri, proje güncellemelerini, milestone'ları, roadmap'leri, kaydedilen görünümleri ve favorileri yönetebilirsiniz
  - Şablonlar, custom field'lar, webhook'lar ve ekler ile çalışabilirsiniz
  - Bildirimleri, abonelikleri, oturumları, audit'leri ve entegrasyonları MCP'den çıkmadan okuyabilirsiniz
  - Ağır planlama oturumlarını çalıştırmadan önce rate-limit'i ve sunucu durumunu inceleyebilirsiniz

  Tam liste için [`TOOLS.md`](./TOOLS.md) dosyasına bakınız.

  ### MCP-native kaynaklar ve istemler

  Sunucu, tool'lara ek olarak MCP kaynakları ve istemlerini de ortaya koymaktadır:

  - Resources: `linear://viewer`, `linear://organization`, `linear://teams`, `linear://projects`, `linear://project/{id}`, `linear://project/{id}/issues`, `linear://project/{id}/documents`, `linear://issue/{id}`, `linear://document/{id}`, `linear://roadmap/{id}`, `linear://milestone/{id}`, `linear://rate-limit`
  - Prompts: `summarize-project-status`, `draft-project-update`, `triage-issue`, `summarize-document`

  ## Örnek istemler

  Bağlandıktan sonra şu gibi istemler kullanabilirsiniz:

  - "Bana tüm Linear issue'larımı göster"
  - "Frontend takımında 'Fix login bug' başlıklı yeni bir issue oluştur"
  - "FE-123 issue'sunun durumunu 'In Progress' olarak değiştir"
  - "BE-456 issue'sunu John Smith'e ata"
  - "Bu projede tüm açık issue'ları milestone ve cycle'a göre gruplandırarak göster"
  - "Mevcut Linear durumundan haftalık bir proje güncellemesi tasla"
  - "Bir projeyle ilgili en yeni dokümanları bul ve temel kararları özetle"

  ## Kurulum

  ### Linear API token'ınızı alma

  1. Linear hesabınıza [linear.app](https://linear.app) adresinde giriş yapın
  2. Kuruluş avatarınıza tıklayın (sol üst köşe)
  3. **Settings** seçeneğini seçin
  4. Sol kenar çubuğunda **Security & access** bölümüne gidin
  5. **Personal API Keys** altında **New API Key** öğesine tıklayın
  6. Anahtarınıza bir ad verin (örn. `MCP Linear Integration`)
  7. Oluşturulan API token'ı kopyalayın ve güvenli bir şekilde saklayın — bunu daha sonra göremeyeceksiniz

  ### [add-mcp](https://github.com/neondatabase/add-mcp) aracılığıyla kurulum (Önerilen)

  `add-mcp`, sunucuyu Claude Code, Cursor, Codex, VS Code, Claude Desktop ve diğer birçok MCP-uyumlu agent'a tek bir komutla kurar:

  ```bash
  npx add-mcp @tacticlaunch/mcp-linear --env LINEAR_API_TOKEN=YOUR_LINEAR_API_TOKEN
  ```

  Geçerli projeye yerine global olarak kurmak için `-g` parametresini ekleyin. Tam agent listesi ve parametreleri için [add-mcp docs](https://github.com/neondatabase/add-mcp) sayfasına bakın.

  ### Manuel konfigürasyon

  MCP ayarlar dosyanıza aşağıdakini ekleyin:

  ```json
  {
    "mcpServers": {
      "linear": {
        "command": "npx",
        "args": ["-y", "@tacticlaunch/mcp-linear"],
        "env": {
          "LINEAR_API_TOKEN": "<YOUR_TOKEN>"
        }
      }
    }
  }
  ```

  #### Client'a özgü konfigürasyon konumları

  - Cursor: `~/.cursor/mcp.json`
  - Claude Desktop: `~/Library/Application Support/Claude/claude_desktop_config.json`
  - Claude VSCode Extension: `~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`
  - GoMCP: `~/.config/gomcp/config.yaml`

  ### Manuel çalıştırma

  Ön koşullar:

  - Node.js (v18+)
  - NPM veya Yarn
  - Linear API token

  ```bash
  # Global olarak kur
  npm install -g @tacticlaunch/mcp-linear

  # Veya yerel olarak klon et ve kur
  git clone https://github.com/tacticlaunch/mcp-linear.git
  cd mcp-linear
  npm install
  npm link  # Paketi global olarak kullanılabilir hale getirir
  ```

  #### Sunucuyu çalıştırma

  Sunucuyu Linear API token'ınız ile çalıştırın:

  ```bash
  mcp-linear --token YOUR_LINEAR_API_TOKEN
  ```

  Veya token'ı ortam değişkeninizde ayarlayıp argüman olmadan çalıştırın:

  ```bash
  export LINEAR_API_TOKEN=YOUR_LINEAR_API_TOKEN
  mcp-linear
  ```

  ## Doğrulama

  Varsayılan doğrulama yolu:

  ```bash
  npm test
  npm run build
  ```

  `npm test`, Jest birim testleri ve resmi MCP SDK smoke testini oluşturulmuş stdio sunucusuna karşı çalıştırır; tool, resource ve prompt kaydını ile host-uyumlu şema yayımını kapsar.

  ## Geliştirme

  Yerel geliştirme ayrıntıları için [`DEVELOPMENT.md`](./DEVELOPMENT.md) dosyasına bakın.

  ## Linkler

  [tacticlaunch/cursor-memory-bank](https://github.com/tacticlaunch/cursor-memory-bank) — Cursor ile iş akışınızı geliştirmek isteyen bir geliştirici iseniz, bunu denemeyi düşünün.

  ## Lisans

  Bu proje MIT Lisansı altında lisanslanmıştır — ayrıntılar için [`LICENSE`](./LICENSE) dosyasına bakın.
---

<p align="center">
  
</p>

# MCP Linear

A Model Context Protocol (MCP) server for the Linear GraphQL API, built for real project-management workflows — not just basic issue CRUD.

![MCP Linear](https://img.shields.io/badge/MCP-Linear-blue)
[![npm version](https://img.shields.io/npm/v/@tacticlaunch/mcp-linear.svg)](https://www.npmjs.com/package/@tacticlaunch/mcp-linear)

<a href="https://glama.ai/mcp/servers/@tacticlaunch/mcp-linear">
  
</a>

## Features

MCP Linear bridges AI assistants and Linear by implementing the MCP protocol. With it you can:

- Retrieve issues, projects, teams, cycles, milestones, roadmaps, and documents
- Create and update issues, change status, assign, and comment
- Manage projects, project updates, milestones, roadmaps, saved views, and favorites
- Work with templates, custom fields, webhooks, and attachments
- Read notifications, subscriptions, sessions, audits, and integrations without leaving MCP
- Inspect rate-limit and server health before running heavy planning sessions

See [`TOOLS.md`](./TOOLS.md) for the full inventory.

### MCP-native resources and prompts

The server exposes MCP resources and prompts in addition to tools, including:

- Resources: `linear://viewer`, `linear://organization`, `linear://teams`, `linear://projects`, `linear://project/{id}`, `linear://project/{id}/issues`, `linear://project/{id}/documents`, `linear://issue/{id}`, `linear://document/{id}`, `linear://roadmap/{id}`, `linear://milestone/{id}`, `linear://rate-limit`
- Prompts: `summarize-project-status`, `draft-project-update`, `triage-issue`, `summarize-document`

## Example prompts

Once connected, you can use prompts like:

- "Show me all my Linear issues"
- "Create a new issue titled 'Fix login bug' in the Frontend team"
- "Change the status of issue FE-123 to 'In Progress'"
- "Assign issue BE-456 to John Smith"
- "Show all open issues in this project grouped by milestone and cycle"
- "Draft a weekly project update from the current Linear state"
- "Find the newest documents related to a project and summarize the key decisions"

## Installation

### Getting your Linear API token

1. Log in to your Linear account at [linear.app](https://linear.app)
2. Click on your organization avatar (top-left corner)
3. Select **Settings**
4. Navigate to **Security & access** in the left sidebar
5. Under **Personal API Keys** click **New API Key**
6. Give your key a name (e.g., `MCP Linear Integration`)
7. Copy the generated API token and store it securely — you won't be able to see it again

### Installing via [add-mcp](https://github.com/neondatabase/add-mcp) (Recommended)

`add-mcp` installs the server into Claude Code, Cursor, Codex, VS Code, Claude Desktop, and many other MCP-aware agents with a single command:

```bash
npx add-mcp @tacticlaunch/mcp-linear --env LINEAR_API_TOKEN=YOUR_LINEAR_API_TOKEN
```

Add `-g` to install globally instead of into the current project. See the [add-mcp docs](https://github.com/neondatabase/add-mcp) for the full agent list and flags.

### Manual configuration

Add the following to your MCP settings file:

```json
{
  "mcpServers": {
    "linear": {
      "command": "npx",
      "args": ["-y", "@tacticlaunch/mcp-linear"],
      "env": {
        "LINEAR_API_TOKEN": "<YOUR_TOKEN>"
      }
    }
  }
}
```

#### Client-specific configuration locations

- Cursor: `~/.cursor/mcp.json`
- Claude Desktop: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Claude VSCode Extension: `~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`
- GoMCP: `~/.config/gomcp/config.yaml`

### Manual run

Prerequisites:

- Node.js (v18+)
- NPM or Yarn
- Linear API token

```bash
# Install globally
npm install -g @tacticlaunch/mcp-linear

# Or clone and install locally
git clone https://github.com/tacticlaunch/mcp-linear.git
cd mcp-linear
npm install
npm link  # Makes the package available globally
```

#### Running the server

Run the server with your Linear API token:

```bash
mcp-linear --token YOUR_LINEAR_API_TOKEN
```

Or set the token in your environment and run without arguments:

```bash
export LINEAR_API_TOKEN=YOUR_LINEAR_API_TOKEN
mcp-linear
```

## Validation

The default validation path is:

```bash
npm test
npm run build
```

`npm test` runs Jest unit tests and an official MCP SDK smoke test against the built stdio server, covering tool, resource, and prompt registration plus host-compatible schema emission.

## Development

See [`DEVELOPMENT.md`](./DEVELOPMENT.md) for local development details.

## Links

[tacticlaunch/cursor-memory-bank](https://github.com/tacticlaunch/cursor-memory-bank) — If you are a developer seeking to enhance your workflow with Cursor, consider giving it a try.

## License

This project is licensed under the MIT License — see the [`LICENSE`](./LICENSE) file for details.
