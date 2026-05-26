---
name: "integromat/make-mcp-server"
description: "Turn your Make scenarios into callable tools for AI assistants."
description_tr: "Make senaryolarınızı AI asistanları için çağrılabilir araçlara dönüştürün."
category: "Other Tools and Integrations"
repo: "integromat/make-mcp-server"
stars: 158
url: "https://github.com/integromat/make-mcp-server"
body_length: 1994
license: "MIT"
language: "TypeScript"
body_tr: |-
  # Make MCP Server (eski sürüm)

  **Make MCP Server'ın modern, bulut tabanlı yeni bir sürümü artık kullanılabilir. Çoğu kullanım durumu için [bu yeni sürümü](https://developers.make.com/mcp-server) kullanmanızı öneririz.**

  AI asistanlarının Make senaryolarını araç olarak kullanabilmesini sağlayan bir Model Context Protocol sunucusu. Bu entegrasyon, AI sistemlerinin Make otomasyon iş akışlarınızı tetiklemesine ve bunlarla etkileşim kurmasına olanak tanır.

  ## Nasıl Çalışır

  MCP sunucusu:

  -   Make hesabınıza bağlanır ve "On-Demand" planlanması yapılandırılmış tüm senaryoları tanımlar
  -   Her senaryo için giriş parametrelerini ayrıştırır ve çözer, AI asistanlarına anlamlı parametre açıklamaları sağlar
  -   AI asistanlarının uygun parametrelerle senaryoları çağırmasına izin verir
  -   Senaryo çıktısını yapılandırılmış JSON olarak döndürerek AI asistanlarının sonuçları doğru şekilde yorumlamasını sağlar

  ## Faydaları

  -   Make senaryolarınızı AI asistanları için çağrılabilir araçlara dönüştürün
  -   Karmaşık otomasyon mantığını Make'de tutarken işlevselliği AI sistemlerine sunun
  -   AI asistanlarınız ile mevcut otomasyon iş akışlarınız arasında çift yönlü iletişim oluşturun

  ## Claude Desktop ile Kullanım

  ### Ön Koşullar

  -   NodeJS
  -   MCP Client (Claude Desktop App gibi)
  -   `scenarios:read` ve `scenarios:run` scope'larına sahip Make API Key

  ### Kurulum

  Bu sunucuyu Claude Desktop uygulaması ile kullanmak için `claude_desktop_config.json` dosyanızın "mcpServers" bölümüne aşağıdaki yapılandırmayı ekleyin:

  ```json
  {
      "mcpServers": {
          "make": {
              "command": "npx",
              "args": ["-y", "@makehq/mcp-server"],
              "env": {
                  "MAKE_API_KEY": "<your-api-key>",
                  "MAKE_ZONE": "<your-zone>",
                  "MAKE_TEAM": "<your-team-id>"
              }
          }
      }
  }
  ```

  -   `MAKE_API_KEY` - Make profilinizde bir API anahtarı oluşturabilirsiniz.
  -   `MAKE_ZONE` - Kuruluşunuzun barındırıldığı bölge (örneğin `eu2.make.com`).
  -   `MAKE_TEAM` - Team sayfasının URL'sinde kimliği bulabilirsiniz.
---

# Make MCP Server (legacy)

**A modern, cloud-based version of the Make MCP Server is now available. For most use cases, we recommend using [this new version](https://developers.make.com/mcp-server).**

A Model Context Protocol server that enables Make scenarios to be utilized as tools by AI assistants. This integration allows AI systems to trigger and interact with your Make automation workflows.

## How It Works

The MCP server:

-   Connects to your Make account and identifies all scenarios configured with "On-Demand" scheduling
-   Parses and resolves input parameters for each scenario, providing AI assistants with meaningful parameter descriptions
-   Allows AI assistants to invoke scenarios with appropriate parameters
-   Returns scenario output as structured JSON, enabling AI assistants to properly interpret the results

## Benefits

-   Turn your Make scenarios into callable tools for AI assistants
-   Maintain complex automation logic in Make while exposing functionality to AI systems
-   Create bidirectional communication between your AI assistants and your existing automation workflows

## Usage with Claude Desktop

### Prerequisites

-   NodeJS
-   MCP Client (like Claude Desktop App)
-   Make API Key with `scenarios:read` and `scenarios:run` scopes

### Installation

To use this server with the Claude Desktop app, add the following configuration to the "mcpServers" section of your `claude_desktop_config.json`:

```json
{
    "mcpServers": {
        "make": {
            "command": "npx",
            "args": ["-y", "@makehq/mcp-server"],
            "env": {
                "MAKE_API_KEY": "<your-api-key>",
                "MAKE_ZONE": "<your-zone>",
                "MAKE_TEAM": "<your-team-id>"
            }
        }
    }
}
```

-   `MAKE_API_KEY` - You can generate an API key in your Make profile.
-   `MAKE_ZONE` - The zone your organization is hosted in (e.g., `eu2.make.com`).
-   `MAKE_TEAM` - You can find the ID in the URL of the Team page.
