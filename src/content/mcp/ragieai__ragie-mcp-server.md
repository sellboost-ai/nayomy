---
name: "ragieai/ragie-mcp-server"
description: "Retrieve context from your Ragie (RAG) knowledge base connected to integrations like Google Drive, Notion, JIRA and more."
category: "Knowledge & Memory"
repo: "ragieai/ragie-mcp-server"
stars: 86
url: "https://github.com/ragieai/ragie-mcp-server"
body_length: 5137
license: "MIT"
language: "JavaScript"
body_tr: |-
  # ÖNEMLİ!

  *Bu proje artık gerekli değildir*. Ragie artık MCP'yi yerel olarak akışlı bir HTTP sunucusu olarak desteklemektedir. Dokümentasyonu burada görebilirsiniz: [https://docs.ragie.ai/docs/mcp-overview]

  Eğer şirketiniz içindeki kullanıcıların Claude veya ChatGPT gibi uygulamalarda bilgi tabanınıza erişebilmesini istiyorsanız, [MCP Bridge](https://www.ragie.ai/mcp-bridge) kullanmanız gerekebilir.

  ![image](https://github.com/user-attachments/assets/75e80f87-f39e-4f10-8c97-bbc848bbed82)


  # Ragie Model Context Protocol Sunucusu

  Ragie'nin bilgi tabanı alma özelliklerine erişim sağlayan bir Model Context Protocol (MCP) sunucusu.

  ## Açıklama

  Bu sunucu, AI modellerinin bir Ragie bilgi tabanından bilgi almalarını sağlamak için Model Context Protocol'ü uygular. Bilgi tabanını sorgulamak için kullanılan "retrieve" adlı tek bir aracı sunar.

  ## Ön Koşullar

  - Node.js >= 18
  - Bir Ragie API anahtarı

  ## Kurulum

  Sunucu aşağıdaki ortam değişkenini gerektirir:

  - `RAGIE_API_KEY` (gerekli): Ragie API kimlik doğrulama anahtarınız

  Sunucu başlayacak ve MCP protokol iletileri için stdio üzerinde dinleyecektir.

  Sunucuyu npx ile kurup çalıştırın:

  ```bash
  RAGIE_API_KEY=your_api_key npx @ragieai/mcp-server
  ```

  ### Komut Satırı Seçenekleri

  Sunucu aşağıdaki komut satırı seçeneklerini destekler:

  - `--description, -d <text>`: Varsayılan araç açıklamasını özel metinle değiştir
  - `--partition, -p <id>`: Sorgulanacak Ragie bölüm kimliğini belirt

  Örnekler:

  ```bash
  # Özel açıklama ile
  RAGIE_API_KEY=your_api_key npx @ragieai/mcp-server --description "Search the company knowledge base for information"

  # Bölüm belirtilerek
  RAGIE_API_KEY=your_api_key npx @ragieai/mcp-server --partition your_partition_id

  # Her iki seçeneği kullanarak
  RAGIE_API_KEY=your_api_key npx @ragieai/mcp-server --description "Search the company knowledge base" --partition your_partition_id
  ```

  ## Cursor Yapılandırması

  Bu MCP sunucusunu Cursor ile kullanmak için:

  ### Seçenek 1: Bir MCP yapılandırma dosyası oluştur

  1. `mcp.json` adlı bir dosya kaydet

  * **Bir projeye özgü araçlar için**, proje dizininizde bir `.cursor/mcp.json` dosyası oluşturun. Bu, MCP sunucularını yalnızca o belirli proje içinde kullanılabilir olarak tanımlamanızı sağlar.
  * **Tüm projelerinizde kullanmak istediğiniz araçlar için**, ev dizininizde bir `~/.cursor/mcp.json` dosyası oluşturun. Bu, MCP sunucularını tüm Cursor çalışma alanlarınızda erişilebilir hale getirir.

  Örnek `mcp.json`:
  ```json
  {
    "mcpServers": {
      "ragie": {
        "command": "npx",
        "args": [
          "-y",
          "@ragieai/mcp-server",
          "--partition",
          "optional_partition_id"
        ],
        "env": {
          "RAGIE_API_KEY": "your_api_key"
        }
      }
    }
  }
  ```

  ### Seçenek 2: Bir shell script kullan

  1. Sisteminizde `ragie-mcp.sh` adlı bir dosya kaydet:
  ```bash
  #!/usr/bin/env bash

  export RAGIE_API_KEY="your_api_key"

  npx -y @ragieai/mcp-server --partition optional_partition_id
  ```

  2. Dosyaya çalıştırma izni ver: `chmod +x ragie-mcp.sh`

  3. Cursor arayüzünde **Settings** -> **Cursor Settings** -> **MCP Servers** seçeneğine giderek MCP sunucusu script'ini ekle.

  `your_api_key` yerine gerçek Ragie API anahtarınızı koyun ve gerekirse bölüm kimliğini ayarlayın.


  ## Claude Desktop Yapılandırması

  Bu MCP sunucusunu Claude desktop ile kullanmak için:

  1. MCP config dosyası `claude_desktop_config.json` oluştur:

  * MacOS için: `~/Library/Application Support/Claude/claude_desktop_config.json` kullan
  * Windows için: `%APPDATA%/Claude/claude_desktop_config.json` kullan

  Örnek `claude_desktop_config.json`:
  ```json
  {
    "mcpServers": {
      "ragie": {
        "command": "npx",
        "args": [
          "-y",
          "@ragieai/mcp-server",
          "--partition",
          "optional_partition_id"
        ],
        "env": {
          "RAGIE_API_KEY": "your_api_key"
        }
      }
    }
  }
  ```

  `your_api_key` yerine gerçek Ragie API anahtarınızı koyun ve gerekirse bölüm kimliğini ayarlayın.

  2. Değişikliklerin etkili olması için Claude desktop'ı yeniden başlat.

  Ragie alma aracı artık Claude desktop sohbetlerinizde kullanılabilir olacak.

  ## Özellikler

  ### Retrieve Aracı

  Sunucu, bilgi tabanını aramak için kullanılabilen bir `retrieve` aracı sunar. Aşağıdaki parametreleri kabul eder:

  - `query` (string): İlgili bilgi bulmak için arama sorgusu
  - `topK` (number, isteğe bağlı, varsayılan: 8): Döndürülecek maksimum sonuç sayısı
  - `rerank` (boolean, isteğe bağlı, varsayılan: true): Yalnızca en ilgili bilgileri bulmaya çalışıp çalışmayacağı
  - `recencyBias` (boolean, isteğe bağlı, varsayılan: false): Sonuçları daha yeni bilgilere doğru tercih edip etmeyeceği

  Araç şunu döndürür:
  - Bilgi tabanından eşleşen metni içeren içerik parçalarının bir dizisi

  ## Geliştirme

  Bu proje TypeScript'te yazılmıştır ve aşağıdaki ana bağımlılıkları kullanır:
  - `@modelcontextprotocol/sdk`: MCP sunucusu uygulaması için
  - `ragie`: Ragie API ile etkileşim için
  - `zod`: Çalışma zamanı türü doğrulaması için

  ### Geliştirme kurulumu

  Sunucuyu geliştirme modunda çalıştırma:

  ```bash
  RAGIE_API_KEY=your_api_key npm run dev -- --partition optional_partition_id
  ```

  Projeyi derleme:

  ```bash
  npm run build
  ```

  ## Lisans

  MIT Lisansı - Ayrıntılar için LICENSE.txt dosyasına bakın.
---

# IMPORTANT!

*This project is no longer needed*.  Ragie now supports MCP natively as a streamable HTTP server.  See docs here: [https://docs.ragie.ai/docs/mcp-overview]

If you would like users within your company to be able to access you knowledge base in applications like Claude or ChatGPT, you may need [MCP Bridge](https://www.ragie.ai/mcp-bridge)

![image](https://github.com/user-attachments/assets/75e80f87-f39e-4f10-8c97-bbc848bbed82)


# Ragie Model Context Protocol Server

A Model Context Protocol (MCP) server that provides access to Ragie's knowledge base retrieval capabilities.

## Description

This server implements the Model Context Protocol to enable AI models to retrieve information from a Ragie knowledge base. It provides a single tool called "retrieve" that allows querying the knowledge base for relevant information.

## Prerequisites

- Node.js >= 18
- A Ragie API key

## Installation

The server requires the following environment variable:

- `RAGIE_API_KEY` (required): Your Ragie API authentication key

The server will start and listen on stdio for MCP protocol messages.

Install and run the server with npx:

```bash
RAGIE_API_KEY=your_api_key npx @ragieai/mcp-server
```

### Command Line Options

The server supports the following command line options:

- `--description, -d <text>`: Override the default tool description with custom text
- `--partition, -p <id>`: Specify the Ragie partition ID to query

Examples:

```bash
# With custom description
RAGIE_API_KEY=your_api_key npx @ragieai/mcp-server --description "Search the company knowledge base for information"

# With partition specified
RAGIE_API_KEY=your_api_key npx @ragieai/mcp-server --partition your_partition_id

# Using both options
RAGIE_API_KEY=your_api_key npx @ragieai/mcp-server --description "Search the company knowledge base" --partition your_partition_id
```

## Cursor Configuration

To use this MCP server with Cursor:

### Option 1: Create an MCP configuration file

1. Save a file called `mcp.json`

* **For tools specific to a project**, create a `.cursor/mcp.json` file in your project directory. This allows you to define MCP servers that are only available within that specific project.
* **For tools that you want to use across all projects**, create a `~/.cursor/mcp.json` file in your home directory. This makes MCP servers available in all your Cursor workspaces.

Example `mcp.json`:
```json
{
  "mcpServers": {
    "ragie": {
      "command": "npx",
      "args": [
        "-y",
        "@ragieai/mcp-server",
        "--partition",
        "optional_partition_id"
      ],
      "env": {
        "RAGIE_API_KEY": "your_api_key"
      }
    }
  }
}
```

### Option 2: Use a shell script

1. Save a file called `ragie-mcp.sh` on your system:
```bash
#!/usr/bin/env bash

export RAGIE_API_KEY="your_api_key"

npx -y @ragieai/mcp-server --partition optional_partition_id
```

2. Give the file execute permissions: `chmod +x ragie-mcp.sh`

3. Add the MCP server script by going to **Settings** -> **Cursor Settings** -> **MCP Servers** in the Cursor UI.

Replace `your_api_key` with your actual Ragie API key and optionally set the partition ID if needed.


## Claude Desktop Configuration

To use this MCP server with Claude desktop:

1. Create the MCP config file `claude_desktop_config.json`:

* For MacOS: Use `~/Library/Application Support/Claude/claude_desktop_config.json`
* For Windows: Use `%APPDATA%/Claude/claude_desktop_config.json`

Example `claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "ragie": {
      "command": "npx",
      "args": [
        "-y",
        "@ragieai/mcp-server",
        "--partition",
        "optional_partition_id"
      ],
      "env": {
        "RAGIE_API_KEY": "your_api_key"
      }
    }
  }
}
```

Replace `your_api_key` with your actual Ragie API key and optionally set the partition ID if needed.

2. Restart Claude desktop for the changes to take effect.

The Ragie retrieval tool will now be available in your Claude desktop conversations.

## Features

### Retrieve Tool

The server provides a `retrieve` tool that can be used to search the knowledge base. It accepts the following parameters:

- `query` (string): The search query to find relevant information
- `topK` (number, optional, default: 8): The maximum number of results to return
- `rerank` (boolean, optional, default: true): Whether to try and find only the most relevant information
- `recencyBias` (boolean, optional, default: false): Whether to favor results towards more recent information

The tool returns:
- An array of content chunks containing matching text from the knowledge base

## Development

This project is written in TypeScript and uses the following main dependencies:
- `@modelcontextprotocol/sdk`: For implementing the MCP server
- `ragie`: For interacting with the Ragie API
- `zod`: For runtime type validation

### Development setup

Running the server in dev mode:

```bash
RAGIE_API_KEY=your_api_key npm run dev -- --partition optional_partition_id
```

Building the project:

```bash
npm run build
```

## License

MIT License - See LICENSE.txt for details.
