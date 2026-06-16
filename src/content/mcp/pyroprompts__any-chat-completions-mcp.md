---
name: "pyroprompts/any-chat-completions-mcp"
description: "Chat with any other OpenAI SDK Compatible Chat Completions API, like Perplexity, Groq, xAI and more"
category: "Other Tools and Integrations"
repo: "pyroprompts/any-chat-completions-mcp"
stars: 151
url: "https://github.com/pyroprompts/any-chat-completions-mcp"
body_length: 4971
license: "MIT"
language: "JavaScript"
body_tr: |-
  # any-chat-completions-mcp MCP Sunucusu


  Claude'u OpenAI SDK Uyumlu Herhangi Bir Chat Completion API ile Entegre Edin - OpenAI, Perplexity, Groq, xAI, PyroPrompts ve daha fazlası.

  Bu, Model Context Protocol Sunucusunu uygular. Daha fazla bilgi: [https://modelcontextprotocol.io](https://modelcontextprotocol.io)

  Bu, OpenAI SDK Uyumlu herhangi bir Chat Completions API'ye bir uygulama uygulayan TypeScript tabanlı bir MCP sunucusudur.

  Bir adet tool'u vardır: `chat`, bu bir soruyu yapılandırılmış bir AI Chat Sağlayıcısına iletir.


  <a href="https://glama.ai/mcp/servers/nuksdrfb55"></a>

  [![smithery badge](https://smithery.ai/badge/any-chat-completions-mcp-server)](https://smithery.ai/server/any-chat-completions-mcp-server)

  ## Geliştirme

  Bağımlılıkları yükleyin:
  ```bash
  npm install
  ```

  Sunucuyu derleyin:
  ```bash
  npm run build
  ```

  Otomatik yeniden derleme ile geliştirme için:
  ```bash
  npm run watch
  ```

  ## Kurulum

  OpenAI'yi Claude Desktop'a eklemek için sunucu yapılandırmasını ekleyin:

  MacOS'ta: `~/Library/Application Support/Claude/claude_desktop_config.json`

  Windows'ta: `%APPDATA%/Claude/claude_desktop_config.json`


  Claude Desktop yapılandırmanızda `npx` aracılığıyla şu şekilde kullanabilirsiniz:

  ```json
  {
    "mcpServers": {
      "chat-openai": {
        "command": "npx",
        "args": [
          "@pyroprompts/any-chat-completions-mcp"
        ],
        "env": {
          "AI_CHAT_KEY": "OPENAI_KEY",
          "AI_CHAT_NAME": "OpenAI",
          "AI_CHAT_MODEL": "gpt-4o",
          "AI_CHAT_BASE_URL": "https://api.openai.com/v1"
        }
      }
    }
  }
  ```


  Veya, depoyu klonlarsanız, Claude Desktop yapılandırmanızda şu şekilde derleyip kullanabilirsiniz:


  ```json

  {
    "mcpServers": {
      "chat-openai": {
        "command": "node",
        "args": [
          "/path/to/any-chat-completions-mcp/build/index.js"
        ],
        "env": {
          "AI_CHAT_KEY": "OPENAI_KEY",
          "AI_CHAT_NAME": "OpenAI",
          "AI_CHAT_MODEL": "gpt-4o",
          "AI_CHAT_BASE_URL": "https://api.openai.com/v1"
        }
      }
    }
  }
  ```

  Aynı MCP sunucusuna farklı env argümanları ile birden çok sağlayıcı ekleyebilirsiniz:

  ```json

  {
    "mcpServers": {
      "chat-pyroprompts": {
        "command": "node",
        "args": [
          "/path/to/any-chat-completions-mcp/build/index.js"
        ],
        "env": {
          "AI_CHAT_KEY": "PYROPROMPTS_KEY",
          "AI_CHAT_NAME": "PyroPrompts",
          "AI_CHAT_MODEL": "ash",
          "AI_CHAT_BASE_URL": "https://api.pyroprompts.com/openaiv1"
        }
      },
      "chat-perplexity": {
        "command": "node",
        "args": [
          "/path/to/any-chat-completions-mcp/build/index.js"
        ],
        "env": {
          "AI_CHAT_KEY": "PERPLEXITY_KEY",
          "AI_CHAT_NAME": "Perplexity",
          "AI_CHAT_MODEL": "sonar",
          "AI_CHAT_BASE_URL": "https://api.perplexity.ai"
        }
      },
      "chat-openai": {
        "command": "node",
        "args": [
          "/path/to/any-chat-completions-mcp/build/index.js"
        ],
        "env": {
          "AI_CHAT_KEY": "OPENAI_KEY",
          "AI_CHAT_NAME": "OpenAI",
          "AI_CHAT_MODEL": "gpt-4o",
          "AI_CHAT_BASE_URL": "https://api.openai.com/v1"
        }
      }
    }
  }
  ```

  Bu üç sağlayıcı ile Claude Desktop Ana Sayfasında her biri için bir tool göreceksiniz:

  ![Chat Tools ile Claude Desktop Ana Sayfası](https://raw.githubusercontent.com/pyroprompts/any-chat-completions-mcp/HEAD/img/claude_desktop_home.png)

  Ve ardından diğer LLM'lerle sohbet edebilirsiniz ve sohbette şu şekilde görünür:

  ![OpenAI ile Claude Sohbeti](https://raw.githubusercontent.com/pyroprompts/any-chat-completions-mcp/HEAD/img/claude_chat_openai.png)

  Veya [LibreChat](https://www.librechat.ai/) içinde şu şekilde yapılandırın:
  ```yaml
    chat-perplexity:
      type: stdio
      command: npx
      args:
        - -y
        - @pyroprompts/any-chat-completions-mcp
      env:
        AI_CHAT_KEY: "pplx-012345679"
        AI_CHAT_NAME: Perplexity
        AI_CHAT_MODEL: sonar
        AI_CHAT_BASE_URL: "https://api.perplexity.ai"
        PATH: '/usr/local/bin:/usr/bin:/bin'
  ````

  Ve LibreChat'te görünür:

  ![Perplexity Chat ile LibreChat](https://raw.githubusercontent.com/pyroprompts/any-chat-completions-mcp/HEAD/img/librechat.png)




  ### Smithery Aracılığıyla Kurulum

  OpenAI Uyumlu API Entegrasyonlarını Claude Desktop'a [Smithery](https://smithery.ai/server/any-chat-completions-mcp-server) aracılığıyla otomatik olarak yüklemek için:

  ```bash
  npx -y @smithery/cli install any-chat-completions-mcp-server --client claude
  ```

  ### Hata Ayıklama

  MCP sunucuları stdio üzerinden iletişim kurmadığından, hata ayıklama zor olabilir. [MCP Inspector](https://github.com/modelcontextprotocol/inspector) kullanmanızı öneririz; bu paket script'i olarak mevcuttur:

  ```bash
  npm run inspector
  ```

  Inspector, tarayıcınızda hata ayıklama araçlarına erişim için bir URL sağlayacaktır.

  ### Teşekkürler

  - Açıkçası MCP Spesifikasyonu ve Claude Desktop'a entegrasyonu için modelcontextprotocol ve Anthropic ekibine. [https://modelcontextprotocol.io/introduction](https://modelcontextprotocol.io/introduction)
  - Bu projeyi sponsorluğu için [PyroPrompts](https://pyroprompts.com?ref=github-any-chat-completions-mcp). Pyroprompts'ta 20 ücretsiz otomasyon kredisi için `CLAUDEANYCHAT` kodunu kullanın.
---

# any-chat-completions-mcp MCP Server


Integrate Claude with Any OpenAI SDK Compatible Chat Completion API - OpenAI, Perplexity, Groq, xAI, PyroPrompts and more.

This implements the Model Context Protocol Server. Learn more: [https://modelcontextprotocol.io](https://modelcontextprotocol.io)

This is a TypeScript-based MCP server that implements an implementation into any OpenAI SDK Compatible Chat Completions API.

It has one tool, `chat` which relays a question to a configured AI Chat Provider.


<a href="https://glama.ai/mcp/servers/nuksdrfb55"></a>

[![smithery badge](https://smithery.ai/badge/any-chat-completions-mcp-server)](https://smithery.ai/server/any-chat-completions-mcp-server)

## Development

Install dependencies:
```bash
npm install
```

Build the server:
```bash
npm run build
```

For development with auto-rebuild:
```bash
npm run watch
```

## Installation

To add OpenAI to Claude Desktop, add the server config:

On MacOS: `~/Library/Application Support/Claude/claude_desktop_config.json`

On Windows: `%APPDATA%/Claude/claude_desktop_config.json`


You can use it via `npx` in your Claude Desktop configuration like this:

```json
{
  "mcpServers": {
    "chat-openai": {
      "command": "npx",
      "args": [
        "@pyroprompts/any-chat-completions-mcp"
      ],
      "env": {
        "AI_CHAT_KEY": "OPENAI_KEY",
        "AI_CHAT_NAME": "OpenAI",
        "AI_CHAT_MODEL": "gpt-4o",
        "AI_CHAT_BASE_URL": "https://api.openai.com/v1"
      }
    }
  }
}
```


Or, if you clone the repo, you can build and use in your Claude Desktop configuration like this:


```json

{
  "mcpServers": {
    "chat-openai": {
      "command": "node",
      "args": [
        "/path/to/any-chat-completions-mcp/build/index.js"
      ],
      "env": {
        "AI_CHAT_KEY": "OPENAI_KEY",
        "AI_CHAT_NAME": "OpenAI",
        "AI_CHAT_MODEL": "gpt-4o",
        "AI_CHAT_BASE_URL": "https://api.openai.com/v1"
      }
    }
  }
}
```

You can add multiple providers by referencing the same MCP server multiple times, but with different env arguments:

```json

{
  "mcpServers": {
    "chat-pyroprompts": {
      "command": "node",
      "args": [
        "/path/to/any-chat-completions-mcp/build/index.js"
      ],
      "env": {
        "AI_CHAT_KEY": "PYROPROMPTS_KEY",
        "AI_CHAT_NAME": "PyroPrompts",
        "AI_CHAT_MODEL": "ash",
        "AI_CHAT_BASE_URL": "https://api.pyroprompts.com/openaiv1"
      }
    },
    "chat-perplexity": {
      "command": "node",
      "args": [
        "/path/to/any-chat-completions-mcp/build/index.js"
      ],
      "env": {
        "AI_CHAT_KEY": "PERPLEXITY_KEY",
        "AI_CHAT_NAME": "Perplexity",
        "AI_CHAT_MODEL": "sonar",
        "AI_CHAT_BASE_URL": "https://api.perplexity.ai"
      }
    },
    "chat-openai": {
      "command": "node",
      "args": [
        "/path/to/any-chat-completions-mcp/build/index.js"
      ],
      "env": {
        "AI_CHAT_KEY": "OPENAI_KEY",
        "AI_CHAT_NAME": "OpenAI",
        "AI_CHAT_MODEL": "gpt-4o",
        "AI_CHAT_BASE_URL": "https://api.openai.com/v1"
      }
    }
  }
}
```

With these three, you'll see a tool for each in the Claude Desktop Home:

![Claude Desktop Home with Chat Tools](https://raw.githubusercontent.com/pyroprompts/any-chat-completions-mcp/HEAD/img/claude_desktop_home.png)

And then you can chat with other LLMs and it shows in chat like this:

![Claude Chat with OpenAI](https://raw.githubusercontent.com/pyroprompts/any-chat-completions-mcp/HEAD/img/claude_chat_openai.png)

Or, configure in [LibreChat](https://www.librechat.ai/) like:
```yaml
  chat-perplexity:
    type: stdio
    command: npx
    args:
      - -y
      - @pyroprompts/any-chat-completions-mcp
    env:
      AI_CHAT_KEY: "pplx-012345679"
      AI_CHAT_NAME: Perplexity
      AI_CHAT_MODEL: sonar
      AI_CHAT_BASE_URL: "https://api.perplexity.ai"
      PATH: '/usr/local/bin:/usr/bin:/bin'
````

And it shows in LibreChat:

![LibreChat with Perplexity Chat](https://raw.githubusercontent.com/pyroprompts/any-chat-completions-mcp/HEAD/img/librechat.png)




### Installing via Smithery

To install Any OpenAI Compatible API Integrations for Claude Desktop automatically via [Smithery](https://smithery.ai/server/any-chat-completions-mcp-server):

```bash
npx -y @smithery/cli install any-chat-completions-mcp-server --client claude
```

### Debugging

Since MCP servers communicate over stdio, debugging can be challenging. We recommend using the [MCP Inspector](https://github.com/modelcontextprotocol/inspector), which is available as a package script:

```bash
npm run inspector
```

The Inspector will provide a URL to access debugging tools in your browser.

### Acknowledgements

- Obviously the modelcontextprotocol and Anthropic team for the MCP Specification and integration into Claude Desktop. [https://modelcontextprotocol.io/introduction](https://modelcontextprotocol.io/introduction)
- [PyroPrompts](https://pyroprompts.com?ref=github-any-chat-completions-mcp) for sponsoring this project. Use code `CLAUDEANYCHAT` for 20 free automation credits on Pyroprompts.
