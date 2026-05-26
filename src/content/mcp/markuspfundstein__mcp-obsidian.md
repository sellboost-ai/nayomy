---
name: "MarkusPfundstein/mcp-obsidian"
description: "Interacting with Obsidian via REST API"
description_tr: "Obsidian ile REST API üzerinden etkileşim kurun"
category: "Other Tools and Integrations"
repo: "MarkusPfundstein/mcp-obsidian"
stars: 3778
url: "https://github.com/MarkusPfundstein/mcp-obsidian"
body_length: 4443
license: "MIT"
language: "Python"
body_tr: |-
  # Obsidian için MCP sunucusu

  Obsidian ile Local REST API community eklentisi aracılığıyla etkileşim kurmak için MCP sunucusu.

  <a href="https://glama.ai/mcp/servers/3wko1bhuek"></a>

  ## Bileşenler

  ### Araçlar

  Sunucu, Obsidian ile etkileşim kurmak için birden fazla aracı uygular:

  - list_files_in_vault: Obsidian kasanızın kök dizinindeki tüm dosya ve dizinleri listeler
  - list_files_in_dir: Belirli bir Obsidian dizinindeki tüm dosya ve dizinleri listeler
  - get_file_contents: Kasanızdaki tek bir dosyanın içeriğini döndürür
  - search: Kasadaki tüm dosyalarda belirtilen metni arayarak eşleşen belgeleri arar
  - patch_content: Mevcut bir nota bir başlık, blok referansı veya frontmatter alanına göre içerik ekler
  - append_content: Kasada yeni veya mevcut bir dosyaya içerik ekler
  - delete_file: Kasanızdan bir dosya veya dizin siler

  ### Örnek komutlar

  İlk olarak Claude'a Obsidian'ı kullanmasını talimat vermek iyi bir fikirdir. Daha sonra her zaman aracı çağıracaktır.

  Şu gibi komutlar kullanın:
  - Son mimari çağrı notunun içeriğini alın ve özetleyin
  - Azure CosmosDb'nin bahsedildiği tüm dosyaları arayın ve bana kısaca bunun bahsedildiği bağlamı açıklayın
  - Son toplantı notlarını özetleyin ve bunları yeni bir nota 'toplantı özeti.md' olarak koyun. E-posta gönderebilmem için bir giriş ekleyin.

  ## Konfigürasyon

  ### Obsidian REST API Anahtarı

  Obsidian REST API Anahtarı ile ortamı konfigüre etmenin iki yolu vardır.

  1. Sunucu konfigürasyonuna ekleyin (tercih edilen)

  ```json
  {
    "mcp-obsidian": {
      "command": "uvx",
      "args": [
        "mcp-obsidian"
      ],
      "env": {
        "OBSIDIAN_API_KEY": "<your_api_key_here>",
        "OBSIDIAN_HOST": "<your_obsidian_host>",
        "OBSIDIAN_PORT": "<your_obsidian_port>"
      }
    }
  }
  ```
  Bazen Claude, uv / uvx konumunu tespit etmekte sorun yaşayabilir. Bu durumda `which uvx` komutunu kullanarak tam yolu bulabilir ve yukarıdaki konfigürasyona yapıştırabilirsiniz.

  2. Çalışma dizininde aşağıdaki gerekli değişkenlerle `.env` dosyası oluşturun:

  ```
  OBSIDIAN_API_KEY=your_api_key_here
  OBSIDIAN_HOST=your_obsidian_host
  OBSIDIAN_PORT=your_obsidian_port
  ```

  Not:
  - API anahtarını Obsidian eklenti konfigürasyonunda bulabilirsiniz
  - Belirtilmemişse varsayılan port 27124'tür
  - Belirtilmemişse varsayılan host 127.0.0.1'dir

  ## Hızlı Başlangıç

  ### Kurulum

  #### Obsidian REST API

  Obsidian REST API community eklentisinin çalışıyor olması gerekir: https://github.com/coddingtonbear/obsidian-local-rest-api

  Ayarlardan yükleyin ve etkinleştirin ve api anahtarını kopyalayın.

  #### Claude Desktop

  MacOS'ta: `~/Library/Application\ Support/Claude/claude_desktop_config.json`

  Windows'ta: `%APPDATA%/Claude/claude_desktop_config.json`

  <details>
    <summary>Geliştirme/Yayınlanmamış Sunucuları Konfigürasyonu</summary>
    
  ```json
  {
    "mcpServers": {
      "mcp-obsidian": {
        "command": "uv",
        "args": [
          "--directory",
          "<dir_to>/mcp-obsidian",
          "run",
          "mcp-obsidian"
        ],
        "env": {
          "OBSIDIAN_API_KEY": "<your_api_key_here>",
          "OBSIDIAN_HOST": "<your_obsidian_host>",
          "OBSIDIAN_PORT": "<your_obsidian_port>"
        }
      }
    }
  }
  ```
  </details>

  <details>
    <summary>Yayınlanan Sunucuları Konfigürasyonu</summary>
    
  ```json
  {
    "mcpServers": {
      "mcp-obsidian": {
        "command": "uvx",
        "args": [
          "mcp-obsidian"
        ],
        "env": {
          "OBSIDIAN_API_KEY": "<YOUR_OBSIDIAN_API_KEY>",
          "OBSIDIAN_HOST": "<your_obsidian_host>",
          "OBSIDIAN_PORT": "<your_obsidian_port>"
        }
      }
    }
  }
  ```
  </details>

  ## Geliştirme

  ### Derleme

  Paketi dağıtım için hazırlamak için:

  1. Bağımlılıkları senkronize edin ve lock dosyasını güncelleyin:
  ```bash
  uv sync
  ```

  ### Hata Ayıklama

  MCP sunucuları stdio üzerinden çalıştığından, hata ayıklama zor olabilir. En iyi hata ayıklama
  deneyimi için [MCP Inspector](https://github.com/modelcontextprotocol/inspector) kullanmanızı şiddetle tavsiye ederiz.

  MCP Inspector'ı bu komut ile [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) üzerinden başlatabilirsiniz:

  ```bash
  npx @modelcontextprotocol/inspector uv --directory /path/to/mcp-obsidian run mcp-obsidian
  ```

  Başlatıldığında, Inspector hata ayıklamaya başlamak için tarayıcınızda erişebileceğiniz bir URL görüntüleyecektir.

  Ayrıca sunucu günlüklerini şu komut ile izleyebilirsiniz:

  ```bash
  tail -n 20 -f ~/Library/Logs/Claude/mcp-server-mcp-obsidian.log
  ```
---

# MCP server for Obsidian

MCP server to interact with Obsidian via the Local REST API community plugin.

<a href="https://glama.ai/mcp/servers/3wko1bhuek"></a>

## Components

### Tools

The server implements multiple tools to interact with Obsidian:

- list_files_in_vault: Lists all files and directories in the root directory of your Obsidian vault
- list_files_in_dir: Lists all files and directories in a specific Obsidian directory
- get_file_contents: Return the content of a single file in your vault.
- search: Search for documents matching a specified text query across all files in the vault
- patch_content: Insert content into an existing note relative to a heading, block reference, or frontmatter field.
- append_content: Append content to a new or existing file in the vault.
- delete_file: Delete a file or directory from your vault.

### Example prompts

Its good to first instruct Claude to use Obsidian. Then it will always call the tool.

The use prompts like this:
- Get the contents of the last architecture call note and summarize them
- Search for all files where Azure CosmosDb is mentioned and quickly explain to me the context in which it is mentioned
- Summarize the last meeting notes and put them into a new note 'summary meeting.md'. Add an introduction so that I can send it via email.

## Configuration

### Obsidian REST API Key

There are two ways to configure the environment with the Obsidian REST API Key. 

1. Add to server config (preferred)

```json
{
  "mcp-obsidian": {
    "command": "uvx",
    "args": [
      "mcp-obsidian"
    ],
    "env": {
      "OBSIDIAN_API_KEY": "<your_api_key_here>",
      "OBSIDIAN_HOST": "<your_obsidian_host>",
      "OBSIDIAN_PORT": "<your_obsidian_port>"
    }
  }
}
```
Sometimes Claude has issues detecting the location of uv / uvx. You can use `which uvx` to find and paste the full path in above config in such cases.

2. Create a `.env` file in the working directory with the following required variables:

```
OBSIDIAN_API_KEY=your_api_key_here
OBSIDIAN_HOST=your_obsidian_host
OBSIDIAN_PORT=your_obsidian_port
```

Note:
- You can find the API key in the Obsidian plugin config
- Default port is 27124 if not specified
- Default host is 127.0.0.1 if not specified

## Quickstart

### Install

#### Obsidian REST API

You need the Obsidian REST API community plugin running: https://github.com/coddingtonbear/obsidian-local-rest-api

Install and enable it in the settings and copy the api key.

#### Claude Desktop

On MacOS: `~/Library/Application\ Support/Claude/claude_desktop_config.json`

On Windows: `%APPDATA%/Claude/claude_desktop_config.json`

<details>
  <summary>Development/Unpublished Servers Configuration</summary>
  
```json
{
  "mcpServers": {
    "mcp-obsidian": {
      "command": "uv",
      "args": [
        "--directory",
        "<dir_to>/mcp-obsidian",
        "run",
        "mcp-obsidian"
      ],
      "env": {
        "OBSIDIAN_API_KEY": "<your_api_key_here>",
        "OBSIDIAN_HOST": "<your_obsidian_host>",
        "OBSIDIAN_PORT": "<your_obsidian_port>"
      }
    }
  }
}
```
</details>

<details>
  <summary>Published Servers Configuration</summary>
  
```json
{
  "mcpServers": {
    "mcp-obsidian": {
      "command": "uvx",
      "args": [
        "mcp-obsidian"
      ],
      "env": {
        "OBSIDIAN_API_KEY": "<YOUR_OBSIDIAN_API_KEY>",
        "OBSIDIAN_HOST": "<your_obsidian_host>",
        "OBSIDIAN_PORT": "<your_obsidian_port>"
      }
    }
  }
}
```
</details>

## Development

### Building

To prepare the package for distribution:

1. Sync dependencies and update lockfile:
```bash
uv sync
```

### Debugging

Since MCP servers run over stdio, debugging can be challenging. For the best debugging
experience, we strongly recommend using the [MCP Inspector](https://github.com/modelcontextprotocol/inspector).

You can launch the MCP Inspector via [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) with this command:

```bash
npx @modelcontextprotocol/inspector uv --directory /path/to/mcp-obsidian run mcp-obsidian
```

Upon launching, the Inspector will display a URL that you can access in your browser to begin debugging.

You can also watch the server logs with this command:

```bash
tail -n 20 -f ~/Library/Logs/Claude/mcp-server-mcp-obsidian.log
```
