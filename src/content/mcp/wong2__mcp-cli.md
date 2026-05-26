---
name: "wong2/mcp-cli"
description: "CLI tool for testing MCP servers"
category: "Other Tools and Integrations"
repo: "wong2/mcp-cli"
stars: 435
url: "https://github.com/wong2/mcp-cli"
body_length: 1976
license: "GPL-3.0"
language: "JavaScript"
body_tr: |-
  # mcp-cli

  Model Context Protocol için bir CLI inspector'ı

  https://github.com/user-attachments/assets/4cd113e9-f097-4c9d-b391-045c5f213183

  ## Özellikler

  - Çeşitli kaynaklardan MCP sunucularını çalıştırma
  - Tools, Resources, Prompts listeleme
  - Tools çağırma, Resources okuma, Prompts okuma
  - SSE ve Streamable HTTP sunucuları için OAuth desteği

  ## Kullanım

  ### Argüman olmadan çalıştırma

  ```bash
  npx @wong2/mcp-cli
  ```

  Bu, Claude Desktop'ın config dosyasını kullanacaktır.

  ### Config dosyası ile çalıştırma

  ```bash
  npx @wong2/mcp-cli -c config.json
  ```

  Config dosyası, Claude Desktop config dosyası ile aynı formata sahiptir.

  ### NPM'den sunucuları çalıştırma

  ```bash
  npx @wong2/mcp-cli npx <package-name> <args>
  ```

  ### Lokal olarak geliştirilen sunucuyu çalıştırma

  ```bash
  npx @wong2/mcp-cli node path/to/server/index.js args...
  ```

  ### Streamable HTTP üzerinden çalışan sunucuya bağlanma

  ```bash
  npx @wong2/mcp-cli --url http://localhost:8000/mcp
  ```

  ### SSE üzerinden çalışan sunucuya bağlanma

  ```bash
  npx @wong2/mcp-cli --sse http://localhost:8000/sse
  ```

  ### Etkileşimli olmayan mod

  Etkileşimli istemler olmadan belirli bir tool, resource veya prompt çalıştırma:

  ```bash
  npx @wong2/mcp-cli [--config config.json] <command> <server-name>:<target> [--args '{}']
  ```

  Örnekler:

  ```bash
  # Argüman olmadan tool çağırma
  npx @wong2/mcp-cli -c config.json call-tool filesystem:list_files

  # Argümanlar ile tool çağırma
  npx @wong2/mcp-cli -c config.json call-tool filesystem:read_file --args '{"path": "package.json"}'

  # Resource okuma
  npx @wong2/mcp-cli -c config.json read-resource filesystem:file://system/etc/hosts

  # Prompt kullanma
  npx @wong2/mcp-cli -c config.json get-prompt filesystem:create_summary --args '{"text": "Hello world"}'
  ```

  Bu mod, tüm etkileşimli istemleri atladığı ve belirtilen primitive'i doğrudan yürütttüğü için scripting ve otomasyon için kullanışlıdır.

  ### Depolanan verileri temizleme (OAuth token'ları, vb.)

  ```bash
  npx @wong2/mcp-cli purge
  ```

  ## İlgili

  - [mcpservers.org](https://mcpservers.org) - Seçilmiş MCP sunucularının listesi
---

# mcp-cli

A CLI inspector for the Model Context Protocol

https://github.com/user-attachments/assets/4cd113e9-f097-4c9d-b391-045c5f213183

## Features

- Run MCP servers from various sources
- List Tools, Resources, Prompts
- Call Tools, Read Resources, Read Prompts
- OAuth support for SSE and Streamable HTTP servers

## Usage

### Run without arguments

```bash
npx @wong2/mcp-cli
```

This will use the config file of Claude Desktop.

### Run with a config file

```bash
npx @wong2/mcp-cli -c config.json
```

The config file has the same format as the Claude Desktop config file.

### Run servers from NPM

```bash
npx @wong2/mcp-cli npx <package-name> <args>
```

### Run locally developed server

```bash
npx @wong2/mcp-cli node path/to/server/index.js args...
```

### Connect to a running server over Streamable HTTP

```bash
npx @wong2/mcp-cli --url http://localhost:8000/mcp
```

### Connect to a running server over SSE

```bash
npx @wong2/mcp-cli --sse http://localhost:8000/sse
```

### Non-interactive mode

Run a specific tool, resource, or prompt without interactive prompts:

```bash
npx @wong2/mcp-cli [--config config.json] <command> <server-name>:<target> [--args '{}']
```

Examples:

```bash
# Call a tool without arguments
npx @wong2/mcp-cli -c config.json call-tool filesystem:list_files

# Call a tool with arguments
npx @wong2/mcp-cli -c config.json call-tool filesystem:read_file --args '{"path": "package.json"}'

# Read a resource
npx @wong2/mcp-cli -c config.json read-resource filesystem:file://system/etc/hosts

# Use a prompt
npx @wong2/mcp-cli -c config.json get-prompt filesystem:create_summary --args '{"text": "Hello world"}'
```

This mode is useful for scripting and automation, as it bypasses all interactive prompts and executes the specified primitive directly.

### Purge stored data (OAuth tokens, etc.)

```bash
npx @wong2/mcp-cli purge
```

## Related

- [mcpservers.org](https://mcpservers.org) - A curated list of MCP servers
