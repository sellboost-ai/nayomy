---
name: "langfuse/mcp-server-langfuse"
description: "MCP server to access and manage LLM application prompts created with Langfuse) Prompt Management."
category: "Developer Tools"
repo: "langfuse/mcp-server-langfuse"
stars: 167
url: "https://github.com/langfuse/mcp-server-langfuse"
body_length: 3354
license: "MIT"
language: "TypeScript"
homepage: "https://langfuse.com"
body_tr: |-
  # Langfuse Prompt Management MCP Server

  [Model Context Protocol](https://github.com/modelcontextprotocol) (MCP) Server için [Langfuse Prompt Management](https://langfuse.com/docs/prompts/get-started). Bu server, Model Context Protocol aracılığıyla Langfuse promptlarınıza erişmenizi ve yönetmenizi sağlar.

  ## Demo

  Langfuse Prompts MCP'nin Claude Desktop'ta hızlı demosu (_açıklamalar için sesi açın_):

  https://github.com/user-attachments/assets/61da79af-07c2-4f69-b28c-ca7c6e606405

  ## Özellikler

  ### MCP Prompt

  Bu server, prompt keşfi ve alınması için [MCP Prompts spesifikasyonunu](https://modelcontextprotocol.io/docs/concepts/prompts) uygular.

  - `prompts/list`: Kullanılabilir tüm promptları listele

    - İsteğe bağlı cursor tabanlı pagination
    - Prompt adlarını ve gerekli argümanlarını döndürür, sınırlama: tüm argümanlar isteğe bağlı olarak kabul edilir ve Langfuse'de değişkenlerin spesifikasyonu olmadığı için açıklamalar dahil değildir
    - Birden fazla sayfa varsa pagination için sonraki cursor'u içerir

  - `prompts/get`: Belirli bir prompt'ı al

    - Langfuse promptlarını (text ve chat) MCP prompt objelerine dönüştürür
    - Sağlanan değişkenlerle prompt'u derler

  ### Tools

  Prompt yeteneğini desteklemeyen diğer MCP istemcileriyle uyumluluğu artırmak için, server ayrıca MCP Prompts işlevselliğini çoğaltan tool'lar da dışa aktarır.

  - `get-prompts`: Kullanılabilir promptları listele

    - Pagination için isteğe bağlı `cursor` parametresi
    - Prompt'ları ve argümanlarını içeren bir liste döndürür

  - `get-prompt`: Belirli bir prompt'ı al ve derle
    - Gerekli `name` parametresi: Alınacak prompt'un adı
    - İsteğe bağlı `arguments` parametresi: Prompt değişkenleriyle JSON objesi

  ## Geliştirme

  ```bash
  npm install

  # mevcut dosyayı derle
  npm run build

  # mcp inspector'da test et
  npx @modelcontextprotocol/inspector node ./build/index.js
  ```

  ## Kullanım

  ### Adım 1: Derle

  ```bash
  npm install
  npm run build
  ```

  ### Adım 2: Server'ı MCP server'larınıza ekleyin:

  #### Claude Desktop

  `claude_desktop_config.json` dosyasını düzenleyerek Claude for Desktop'ı yapılandırın

  ```json
  {
    "mcpServers": {
      "langfuse": {
        "command": "node",
        "args": ["<absolute-path>/build/index.js"],
        "env": {
          "LANGFUSE_PUBLIC_KEY": "your-public-key",
          "LANGFUSE_SECRET_KEY": "your-secret-key",
          "LANGFUSE_BASEURL": "https://cloud.langfuse.com"
        }
      }
    }
  }
  ```

  Ortam değişkenlerini gerçek Langfuse API anahtarlarınızla değiştirdiğinizden emin olun. Server şimdi Claude Desktop'ta kullanılabilir olacak.

  #### Cursor

  Cursor'a yeni server ekleyin:

  - Name: `Langfuse Prompts`
  - Type: `command`
  - Command:
    ```bash
    LANGFUSE_PUBLIC_KEY="your-public-key" LANGFUSE_SECRET_KEY="your-secret-key" LANGFUSE_BASEURL="https://cloud.langfuse.com" node absolute-path/build/index.js
    ```

  ## Sınırlamalar

  MCP Server bir çalışma aşamasında olup bazı sınırlamalara sahiptir:

  - Yalnızca Langfuse'de `production` etiketi olan promptlar döndürülür
  - Tüm argümanlar isteğe bağlı olarak kabul edilir ve Langfuse'de değişkenlerin spesifikasyonu olmadığı için açıklamalar dahil değildir
  - List işlemleri, argümanları çıkarmak için arka planda her prompt'u ayrı ayrı getirmeyi gerektirir, bu işe yarar ancak verimli değildir

  Katkılar memnuniyetle karşılanır! Herhangi bir öneriniz veya geri bildiriminiz varsa lütfen bir issue açın veya PR gönderin ([repo](https://github.com/langfuse/mcp-server-langfuse)).
---

# Langfuse Prompt Management MCP Server

[Model Context Protocol](https://github.com/modelcontextprotocol) (MCP) Server for [Langfuse Prompt Management](https://langfuse.com/docs/prompts/get-started). This server allows you to access and manage your Langfuse prompts through the Model Context Protocol.

## Demo

Quick demo of Langfuse Prompts MCP in Claude Desktop (_unmute for voice-over explanations_):

https://github.com/user-attachments/assets/61da79af-07c2-4f69-b28c-ca7c6e606405

## Features

### MCP Prompt

This server implements the [MCP Prompts specification](https://modelcontextprotocol.io/docs/concepts/prompts) for prompt discovery and retrieval.

- `prompts/list`: List all available prompts

  - Optional cursor-based pagination
  - Returns prompt names and their required arguments, limitation: all arguments are assumed to be optional and do not include descriptions as variables do not have specification in Langfuse
  - Includes next cursor for pagination if there's more than 1 page of prompts

- `prompts/get`: Get a specific prompt

  - Transforms Langfuse prompts (text and chat) into MCP prompt objects
  - Compiles prompt with provided variables

### Tools

To increase compatibility with other MCP clients that do not support the prompt capability, the server also exports tools that replicate the functionality of the MCP Prompts.

- `get-prompts`: List available prompts

  - Optional `cursor` parameter for pagination
  - Returns a list of prompts with their arguments

- `get-prompt`: Retrieve and compile a specific prompt
  - Required `name` parameter: Name of the prompt to retrieve
  - Optional `arguments` parameter: JSON object with prompt variables

## Development

```bash
npm install

# build current file
npm run build

# test in mcp inspector
npx @modelcontextprotocol/inspector node ./build/index.js
```

## Usage

### Step 1: Build

```bash
npm install
npm run build
```

### Step 2: Add the server to your MCP servers:

#### Claude Desktop

Configure Claude for Desktop by editing `claude_desktop_config.json`

```json
{
  "mcpServers": {
    "langfuse": {
      "command": "node",
      "args": ["<absolute-path>/build/index.js"],
      "env": {
        "LANGFUSE_PUBLIC_KEY": "your-public-key",
        "LANGFUSE_SECRET_KEY": "your-secret-key",
        "LANGFUSE_BASEURL": "https://cloud.langfuse.com"
      }
    }
  }
}
```

Make sure to replace the environment variables with your actual Langfuse API keys. The server will now be available to use in Claude Desktop.

#### Cursor

Add new server to Cursor:

- Name: `Langfuse Prompts`
- Type: `command`
- Command:
  ```bash
  LANGFUSE_PUBLIC_KEY="your-public-key" LANGFUSE_SECRET_KEY="your-secret-key" LANGFUSE_BASEURL="https://cloud.langfuse.com" node absolute-path/build/index.js
  ```

## Limitations

The MCP Server is a work in progress and has some limitations:

- Only prompts with a `production` label in Langfuse are returned
- All arguments are assumed to be optional and do not include descriptions as variables do not have specification in Langfuse
- List operations require fetching each prompt individually in the background to extract the arguments, this works but is not efficient

Contributions are welcome! Please open an issue or a PR ([repo](https://github.com/langfuse/mcp-server-langfuse)) if you have any suggestions or feedback.
