---
name: "browserbase/mcp-server-browserbase"
description: "Automate browser interactions in the cloud (e.g. web navigation, data extraction, form filling, and more)"
category: "Browser Automation"
repo: "browserbase/mcp-server-browserbase"
stars: 3357
url: "https://github.com/browserbase/mcp-server-browserbase"
body_length: 7707
license: "Apache-2.0"
language: "TypeScript"
homepage: "https://stagehand.dev"
body_tr: |-
  # Browserbase MCP Server

  ![cover](https://raw.githubusercontent.com/browserbase/mcp-server-browserbase/HEAD/assets/cover.png)

  [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction), LLM uygulamalarını dış veri kaynakları ve araçlarla sorunsuz bir şekilde entegre etmeyi sağlayan açık bir protokoldür. AI destekli bir IDE oluşturuyor, sohbet arayüzünü geliştiriyor veya özel AI iş akışları oluşturuyor olsanız da, MCP, LLM'leri ihtiyaç duydukları bağlam ile bağlamak için standartlaştırılmış bir yol sağlar.

  Bu sunucu, [Browserbase](https://www.browserbase.com/) ve [Stagehand](https://github.com/browserbase/stagehand) kullanarak bulut tarayıcı otomasyon yetenekleri sağlar. LLM'lerin web sayfalarıyla etkileşim kurmasını, bilgi çıkarmasını ve otomatik işlemler gerçekleştirmesini sağlar.

  Bu, [Browserbase barındırılan MCP sunucusu](https://mcp.browserbase.com/mcp) ile aynı araçlara ve işlevselliğe sahip kendi kendine barındırılabilir bir sürümüdür. **En kolay kurulum için barındırılan sürümü kullanmanızı öneriyoruz.**

  ## Araçlar

  Bu sunucu, [barındırılan Browserbase MCP sunucusu](https://docs.browserbase.com/integrations/mcp/introduction) ile eşleşen 6 aracı sunar:

  | Araç       | Açıklama                            | Giriş                      |
  | ---------- | ----------------------------------- | -------------------------- |
  | `start`    | Browserbase oturumu oluştur veya yeniden kullan   | _(none)_                   |
  | `end`      | Mevcut Browserbase oturumunu kapat   | _(none)_                   |
  | `navigate` | Bir URL'ye git                       | `{ url: string }`          |
  | `act`      | Sayfada bir işlem gerçekleştir           | `{ action: string }`       |
  | `observe`  | Sayfadaki işlem yapılabilir öğeleri gözlemle | `{ instruction: string }`  |
  | `extract`  | Sayfadan veri çıkart              | `{ instruction?: string }` |

  ## Kurulum Nasıl Yapılır

  Şu anda MCP sunucumuz için 2 transport'u destekliyoruz: STDIO ve SHTTP. Sunucuyu tam kapasitesiyle kullanmak için barındırılan MCP sunucumuzla SHTTP kullanmanızı öneriyoruz.

  ## SHTTP (Barındırılan MCP):

  `https://mcp.browserbase.com/mcp` adresindeki Browserbase barındırılan MCP sunucusunu kullanın. Bu, başlamak için en kolay yoldur -- sunucuyu barındırıyoruz ve Gemini için LLM maliyetlerini sağlıyoruz; bu, [Stagehand](https://www.stagehand.dev) içinde [en iyi performans gösteren model](https://www.stagehand.dev/evals)'dir.

  Tam kurulum talimatları için [Browserbase MCP belgelerine](https://docs.browserbase.com/integrations/mcp/introduction) bakın.

  Clientiniz SHTTP'yi destekliyorsa:

  ```json
  {
    "mcpServers": {
      "browserbase": {
        "type": "http",
        "url": "https://mcp.browserbase.com/mcp"
      }
    }
  }
  ```

  Clientiniz SHTTP'yi desteklemiyorsa:

  ```json
  {
    "mcpServers": {
      "browserbase": {
        "command": "npx",
        "args": ["mcp-remote", "https://mcp.browserbase.com/mcp"]
      }
    }
  }
  ```

  ## STDIO (Kendi Sunucusu):

  NPM'de barındırılan sunucumuzu kullanabilir veya bu repo'yu klonlayarak tamamen yerel olarak çalıştırabilirsiniz.

  > **Not:** Farklı bir model kullanmak istiyorsanız, args'a --modelName eklemeniz ve ilgili anahtarı bir arg olarak sağlamanız gerekir. Daha fazla bilgi aşağıda.

  ### NPM Üzerinden Çalıştırmak İçin (Önerilir)

  MCP Config JSON'unuza gidin ve Browserbase Server'ı ekleyin:

  ```json
  {
    "mcpServers": {
      "browserbase": {
        "command": "npx",
        "args": ["@browserbasehq/mcp"],
        "env": {
          "BROWSERBASE_API_KEY": "",
          "BROWSERBASE_PROJECT_ID": "",
          "GEMINI_API_KEY": ""
        }
      }
    }
  }
  ```

  Hepsi bu! MCP client'inizi yeniden yükleyin ve başlamaya hazırsınız.

  ### %100 Yerel Olarak Çalıştırmak İçin:

  #### Seçenek 1: Doğrudan Kurulum

  ```bash
  git clone https://github.com/browserbase/mcp-server-browserbase.git
  cd mcp-server-browserbase
  npm install && npm run build
  ```

  #### Seçenek 2: Docker

  ```bash
  git clone https://github.com/browserbase/mcp-server-browserbase.git
  cd mcp-server-browserbase
  docker build -t mcp-browserbase .
  ```

  Daha sonra MCP Config JSON'unuzda sunucuyu çalıştırın:

  #### Doğrudan Kurulum Kullanma

  ```json
  {
    "mcpServers": {
      "browserbase": {
        "command": "node",
        "args": ["/path/to/mcp-server-browserbase/cli.js"],
        "env": {
          "BROWSERBASE_API_KEY": "",
          "BROWSERBASE_PROJECT_ID": "",
          "GEMINI_API_KEY": ""
        }
      }
    }
  }
  ```

  #### Docker Kullanma

  ```json
  {
    "mcpServers": {
      "browserbase": {
        "command": "docker",
        "args": [
          "run",
          "--rm",
          "-i",
          "-e",
          "BROWSERBASE_API_KEY",
          "-e",
          "BROWSERBASE_PROJECT_ID",
          "-e",
          "GEMINI_API_KEY",
          "mcp-browserbase"
        ],
        "env": {
          "BROWSERBASE_API_KEY": "",
          "BROWSERBASE_PROJECT_ID": "",
          "GEMINI_API_KEY": ""
        }
      }
    }
  }
  ```

  ## Konfigürasyon

  Browserbase MCP sunucusu aşağıdaki komut satırı flag'lerini kabul eder:

  | Flag                       | Açıklama                                                                 |
  | -------------------------- | --------------------------------------------------------------------------- |
  | `--proxies`                | Oturum için Browserbase proxy'lerini etkinleştir                                  |
  | `--verified`               | Browserbase Verified Identity'yi etkinleştir (Yalnızca Scale Plan Kullanıcıları İçin)            |
  | `--advancedStealth`        | `--verified` için kullanımdan kaldırılmış diğer ad                                           |
  | `--keepAlive`              | Browserbase Keep Alive Session'ı etkinleştir                                       |
  | `--contextId <contextId>`  | Kullanılacak Browserbase Context ID'sini belirt                                     |
  | `--persist`                | Browserbase context'ini devam ettirip ettirmeyeceği (varsayılan: true)                  |
  | `--port <port>`            | HTTP/SHTTP transport'u için dinlenecek port                                  |
  | `--host <host>`            | Sunucunun bağlanacağı host (varsayılan: localhost, tüm arayüzler için 0.0.0.0) |
  | `--browserWidth <width>`   | Tarayıcı viewport genişliği (varsayılan: 1024)                                      |
  | `--browserHeight <height>` | Tarayıcı viewport yüksekliği (varsayılan: 768)                                      |
  | `--modelName <model>`      | Stagehand için kullanılacak model (varsayılan: google/gemini-2.5-flash-lite)      |
  | `--modelApiKey <key>`      | Özel model provider'ı için API anahtarı (özel modeller kullanırken gerekli)   |
  | `--experimental`           | Deneysel özellikleri etkinleştir (varsayılan: false)                               |

  Bu flag'ler doğrudan CLI'ya veya MCP konfigürasyon dosyanızda yapılandırılabilir.

  > **Not:** Bu flag'ler yalnızca kendi kendine barındırılan sunucu (npx @browserbasehq/mcp veya Docker) ile kullanılabilir.

  ### Model Konfigürasyonu

  Stagehand, varsayılan olarak Google'ın Gemini 2.5 Flash Lite modelini kullanır, ancak GPT-4o, Claude veya diğer provider'lar gibi diğer modelleri kullanmak için yapılandırabilirsiniz.

  **Önemli**: Herhangi bir özel model (varsayılan olmayan) kullanırken, `--modelApiKey` flag'ini kullanarak o model provider'ı için kendi API anahtarınızı sağlamanız gerekir.

  ```json
  {
    "mcpServers": {
      "browserbase": {
        "command": "npx",
        "args": [
          "@browserbasehq/mcp",
          "--modelName",
          "anthropic/claude-sonnet-4.5",
          "--modelApiKey",
          "your-anthropic-api-key"
        ],
        "env": {
          "BROWSERBASE_API_KEY": "",
          "BROWSERBASE_PROJECT_ID": ""
        }
      }
    }
  }
  ```

  _Not: Model, Stagehand'da desteklenmelidir. [Buradaki](https://docs.stagehand.dev/examples/custom_llms#supported-llms) belgeleri kontrol edin._

  ## Bağlantılar

  - [Browserbase MCP Belgeleri](https://docs.browserbase.com/integrations/mcp/introduction)
  - [MCP Belgeleri](https://modelcontextprotocol.io/docs)
  - [MCP Spesifikasyonu](https://spec.modelcontextprotocol.io/)
  - [Stagehand Belgeleri](https://docs.stagehand.dev/)

  ## Lisans

  Apache 2.0 Lisansı altında lisanslanmıştır.

  Copyright 2025 Browserbase, Inc.
---

# Browserbase MCP Server

![cover](https://raw.githubusercontent.com/browserbase/mcp-server-browserbase/HEAD/assets/cover.png)

[The Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) is an open protocol that enables seamless integration between LLM applications and external data sources and tools. Whether you're building an AI-powered IDE, enhancing a chat interface, or creating custom AI workflows, MCP provides a standardized way to connect LLMs with the context they need.

This server provides cloud browser automation capabilities using [Browserbase](https://www.browserbase.com/) and [Stagehand](https://github.com/browserbase/stagehand). It enables LLMs to interact with web pages, extract information, and perform automated actions.

This is a self-hostable version of the [Browserbase hosted MCP server](https://mcp.browserbase.com/mcp) with the same tools and functionality. **We recommend using the hosted version for the easiest setup.**

## Tools

This server exposes 6 tools that match the [hosted Browserbase MCP server](https://docs.browserbase.com/integrations/mcp/introduction):

| Tool       | Description                             | Input                      |
| ---------- | --------------------------------------- | -------------------------- |
| `start`    | Create or reuse a Browserbase session   | _(none)_                   |
| `end`      | Close the current Browserbase session   | _(none)_                   |
| `navigate` | Navigate to a URL                       | `{ url: string }`          |
| `act`      | Perform an action on the page           | `{ action: string }`       |
| `observe`  | Observe actionable elements on the page | `{ instruction: string }`  |
| `extract`  | Extract data from the page              | `{ instruction?: string }` |

## How to Setup

We currently support 2 transports for our MCP server, STDIO and SHTTP. We recommend you use SHTTP with our hosted MCP server to take advantage of the server at full capacity.

## SHTTP (Hosted MCP):

Use the Browserbase hosted MCP server at `https://mcp.browserbase.com/mcp`. This is the easiest way to get started -- we host the server and provide the LLM costs for Gemini, the [best performing model](https://www.stagehand.dev/evals) in [Stagehand](https://www.stagehand.dev).

For full setup instructions, see the [Browserbase MCP documentation](https://docs.browserbase.com/integrations/mcp/introduction).

If your client supports SHTTP:

```json
{
  "mcpServers": {
    "browserbase": {
      "type": "http",
      "url": "https://mcp.browserbase.com/mcp"
    }
  }
}
```

If your client doesn't support SHTTP:

```json
{
  "mcpServers": {
    "browserbase": {
      "command": "npx",
      "args": ["mcp-remote", "https://mcp.browserbase.com/mcp"]
    }
  }
}
```

## STDIO (Self-Hosted):

You can either use our server hosted on NPM or run it completely locally by cloning this repo.

> **Note:** If you want to use a different model you have to add --modelName to the args and provide that respective key as an arg. More info below.

### To run via NPM (Recommended)

Go into your MCP Config JSON and add the Browserbase Server:

```json
{
  "mcpServers": {
    "browserbase": {
      "command": "npx",
      "args": ["@browserbasehq/mcp"],
      "env": {
        "BROWSERBASE_API_KEY": "",
        "BROWSERBASE_PROJECT_ID": "",
        "GEMINI_API_KEY": ""
      }
    }
  }
}
```

That's it! Reload your MCP client and you're ready to go.

### To run 100% local:

#### Option 1: Direct installation

```bash
git clone https://github.com/browserbase/mcp-server-browserbase.git
cd mcp-server-browserbase
npm install && npm run build
```

#### Option 2: Docker

```bash
git clone https://github.com/browserbase/mcp-server-browserbase.git
cd mcp-server-browserbase
docker build -t mcp-browserbase .
```

Then in your MCP Config JSON run the server:

#### Using Direct Installation

```json
{
  "mcpServers": {
    "browserbase": {
      "command": "node",
      "args": ["/path/to/mcp-server-browserbase/cli.js"],
      "env": {
        "BROWSERBASE_API_KEY": "",
        "BROWSERBASE_PROJECT_ID": "",
        "GEMINI_API_KEY": ""
      }
    }
  }
}
```

#### Using Docker

```json
{
  "mcpServers": {
    "browserbase": {
      "command": "docker",
      "args": [
        "run",
        "--rm",
        "-i",
        "-e",
        "BROWSERBASE_API_KEY",
        "-e",
        "BROWSERBASE_PROJECT_ID",
        "-e",
        "GEMINI_API_KEY",
        "mcp-browserbase"
      ],
      "env": {
        "BROWSERBASE_API_KEY": "",
        "BROWSERBASE_PROJECT_ID": "",
        "GEMINI_API_KEY": ""
      }
    }
  }
}
```

## Configuration

The Browserbase MCP server accepts the following command-line flags:

| Flag                       | Description                                                                 |
| -------------------------- | --------------------------------------------------------------------------- |
| `--proxies`                | Enable Browserbase proxies for the session                                  |
| `--verified`               | Enable Browserbase Verified Identity (Only for Scale Plan Users)            |
| `--advancedStealth`        | Deprecated alias for `--verified`                                           |
| `--keepAlive`              | Enable Browserbase Keep Alive Session                                       |
| `--contextId <contextId>`  | Specify a Browserbase Context ID to use                                     |
| `--persist`                | Whether to persist the Browserbase context (default: true)                  |
| `--port <port>`            | Port to listen on for HTTP/SHTTP transport                                  |
| `--host <host>`            | Host to bind server to (default: localhost, use 0.0.0.0 for all interfaces) |
| `--browserWidth <width>`   | Browser viewport width (default: 1024)                                      |
| `--browserHeight <height>` | Browser viewport height (default: 768)                                      |
| `--modelName <model>`      | The model to use for Stagehand (default: google/gemini-2.5-flash-lite)      |
| `--modelApiKey <key>`      | API key for the custom model provider (required when using custom models)   |
| `--experimental`           | Enable experimental features (default: false)                               |

These flags can be passed directly to the CLI or configured in your MCP configuration file.

> **Note:** These flags can only be used with the self-hosted server (npx @browserbasehq/mcp or Docker).

### Model Configuration

Stagehand defaults to using Google's Gemini 2.5 Flash Lite model, but you can configure it to use other models like GPT-4o, Claude, or other providers.

**Important**: When using any custom model (non-default), you must provide your own API key for that model provider using the `--modelApiKey` flag.

```json
{
  "mcpServers": {
    "browserbase": {
      "command": "npx",
      "args": [
        "@browserbasehq/mcp",
        "--modelName",
        "anthropic/claude-sonnet-4.5",
        "--modelApiKey",
        "your-anthropic-api-key"
      ],
      "env": {
        "BROWSERBASE_API_KEY": "",
        "BROWSERBASE_PROJECT_ID": ""
      }
    }
  }
}
```

_Note: The model must be supported in Stagehand. Check out the docs [here](https://docs.stagehand.dev/examples/custom_llms#supported-llms)._

## Links

- [Browserbase MCP Documentation](https://docs.browserbase.com/integrations/mcp/introduction)
- [MCP Documentation](https://modelcontextprotocol.io/docs)
- [MCP Specification](https://spec.modelcontextprotocol.io/)
- [Stagehand Documentation](https://docs.stagehand.dev/)

## License

Licensed under the Apache 2.0 License.

Copyright 2025 Browserbase, Inc.
