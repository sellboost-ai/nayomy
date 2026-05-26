---
name: "mem0ai/mem0-mcp"
description: "A Model Context Protocol server for Mem0 that helps manage coding preferences and patterns, providing tools for storing, retrieving and semantically handling code implementations, best practices and technical documentation in IDEs like Cursor and Windsurf"
description_tr: "Mem0 için bir Model Context Protocol sunucusu olup, Cursor ve Windsurf gibi IDE'lerde kod implementasyonları, best practices ve teknik dokumentasyonları depolamak, sorgulamak ve semantik olarak yönetmek için araçlar sunarak kodlama tercihlerini ve desenlerini yönetmeye yardımcı olur."
category: "Knowledge & Memory"
repo: "mem0ai/mem0-mcp"
stars: 653
url: "https://github.com/mem0ai/mem0-mcp"
body_length: 6908
license: "Apache-2.0"
language: "Python"
body_tr: |-
  > [!CAUTION]
  > ## Bu proje arşivlenmiştir
  >
  > **mem0-mcp-server** artık aktif olarak bakımı yapılmamaktadır ve bu depo şu anda bir halk arşividir.
  >
  > 640+ yıldız, 140+ fork ve bu projeyi şekillendirmesine yardımcı olan tüm katkıda bulunanlara teşekkür ederiz. Sizin desteğiniz ve geri bildiriminiz bize çok şey ifade etti.
  >
  > **Mem0 MCP arıyor musunuz?** Artık resmi bir bulut barındırılan MCP sunucusu sunuyoruz. Başlamak için [doğrulamayı](https://docs.mem0.ai/platform/mem0-mcp) kontrol edin.
  >
  > **Tüm ana istemcilerde hızlı yükleme:**
  > ```bash
  > npx mcp-add \
  >   --name mem0-mcp \
  >   --type http \
  >   --url "https://mcp.mem0.ai/mcp" \
  >   --clients "claude,claude code,cursor,windsurf,vscode,opencode"
  > ```

  # Mem0 MCP Server

  [![PyPI version](https://img.shields.io/pypi/v/mem0-mcp-server.svg)](https://pypi.org/project/mem0-mcp-server/) [![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE) [![smithery badge](https://smithery.ai/badge/@mem0ai/mem0-memory-mcp)](https://smithery.ai/server/@mem0ai/mem0-memory-mcp)

  `mem0-mcp-server`, resmi [Mem0](https://mem0.ai) Memory API'sini bir Model Context Protocol (MCP) sunucusu olarak sarar, böylece herhangi bir MCP uyumlu istemci (Claude Desktop, Cursor, custom ajanlar) uzun vadeli anıları ekleyebilir, arayabilir, güncelleyebilir ve silebilir.

  ## Araçlar

  Sunucu, LLM'inize aşağıdaki araçları gösterir:

  | Araç                  | Açıklama                                                                                    |
  | --------------------- | ------------------------------------------------------------------------------------------- |
  | `add_memory`          | Metin veya konuşma geçmişini (veya açık message nesnelerini) bir kullanıcı/ajan için kaydet. |
  | `search_memories`     | Mevcut anılar arasında anlam temelli arama (filtreler + sınır desteklenir).                  |
  | `get_memories`        | Yapılandırılmış filtreler ve sayfalandırma ile anıları listele.                             |
  | `get_memory`          | `memory_id`'sine göre bir anıyı al.                                                         |
  | `update_memory`       | Kullanıcı `memory_id`'yi onayladıktan sonra bir anının metnini üzerine yaz.                 |
  | `delete_memory`       | `memory_id`'sine göre tek bir anıyı sil.                                                    |
  | `delete_all_memories` | Onaylanmış kapsamdaki tüm anıları toplu olarak sil (kullanıcı/ajan/uygulama/çalıştırma).    |
  | `delete_entities`     | Bir kullanıcı/ajan/uygulama/çalıştırma varlığını (ve onun anılarını) sil.                   |
  | `list_entities`       | Mem0'da depolanan kullanıcıları/ajanları/uygulamaları/çalıştırmaları numaralandır.          |

  Tüm yanıtlar, doğrudan Mem0 API'sinden döndürülen JSON dizgeleridir.

  ## Kullanım Seçenekleri

  Mem0 MCP Server'ı kullanmanın üç yolu vardır:

  1. **Python Paketi** - Herhangi bir MCP istemcisi ile `uvx` kullanarak yerel olarak yükle ve çalıştır
  2. **Docker** - `/mcp` HTTP endpoint'i oluşturan konteynerleştirilmiş dağıtım
  3. **Smithery** - Yönetilen dağıtımlar için uzaktan barındırılan hizmet

  ## Hızlı Başlangıç

  ### Yükleme

  ```bash
  uv pip install mem0-mcp-server
  ```

  Veya pip ile:

  ```bash
  pip install mem0-mcp-server
  ```

  ### İstemci Yapılandırması

  MCP istemcinize bu yapılandırmayı ekleyin:

  ```json
  {
    "mcpServers": {
      "mem0": {
        "command": "uvx",
        "args": ["mem0-mcp-server"],
        "env": {
          "MEM0_API_KEY": "m0-...",
          "MEM0_DEFAULT_USER_ID": "your-handle"
        }
      }
    }
  }
  ```

  ### Python Ajanı ile Test Edin

  <details>
  <summary><strong>Genişletmek için tıklayın: Python Ajanı ile Test Edin</strong></summary>

  Sunucuyu hemen test etmek için dahil edilen Pydantic AI ajanını kullanın:

  ```bash
  # Paketi yükle
  pip install mem0-mcp-server
  # Veya uv ile
  uv pip install mem0-mcp-server

  # API anahtarlarını ayarla
  export MEM0_API_KEY="m0-..."
  export OPENAI_API_KEY="sk-openai-..."

  # Klonla ve ajan ile test et
  git clone https://github.com/mem0ai/mem0-mcp.git
  cd mem0-mcp-server
  python example/pydantic_ai_repl.py
  ```

  **Farklı sunucu yapılandırmalarını kullanma:**

  ```bash
  # Docker konteynerini kullan
  export MEM0_MCP_CONFIG_PATH=example/docker-config.json
  export MEM0_MCP_CONFIG_SERVER=mem0-docker
  python example/pydantic_ai_repl.py

  # Smithery uzak sunucusunu kullan
  export MEM0_MCP_CONFIG_PATH=example/config-smithery.json
  export MEM0_MCP_CONFIG_SERVER=mem0-memory-mcp
  python example/pydantic_ai_repl.py
  ```

  </details>

  ## Neler Yapabilirsiniz

  Mem0 MCP sunucusu AI uygulamalarınız için güçlü bellek yeteneklerini etkinleştirir:

  - Fındık ve kabuklı deniz ürünlerine alerjim olduğunu hatırla - Belleğe yeni sağlık bilgisi ekle
  - Bu deneme parametrelerini sakla: 200 katılımcı, çift kör, plasebo kontrollü çalışma - Araştırma verilerini kaydet
  - Diyet tercihlerim hakkında ne biliyorsun? - Tüm gıda ile ilgili anıları ara ve al
  - Proje durumumu güncelle: mobil uygulama şimdi %80 tamamlandı - Mevcut anıyı yeni bilgi ile değiştir
  - 2023'ten tüm anıları sil, yeni bir başlangıç yapmalıyım - Eski anıları toplu olarak kaldır
  - Phoenix projesi hakkında sakladığım her şeyi göster - Belirli bir konu için tüm anıları listele

  ## Yapılandırma

  ### Ortam Değişkenleri

  - `MEM0_API_KEY` (gerekli) – Mem0 platformu API anahtarı.
  - `MEM0_DEFAULT_USER_ID` (isteğe bağlı) – filtreler ve yazma isteklerine enjekte edilen varsayılan `user_id` (`mem0-mcp` olarak varsayılan).
  - `MEM0_ENABLE_GRAPH_DEFAULT` (isteğe bağlı) – Varsayılan olarak grafik anılarını etkinleştir (`false` olarak varsayılan).
  - `MEM0_MCP_AGENT_MODEL` (isteğe bağlı) – Paketlenmiş ajan örneği için varsayılan LLM (`openai:gpt-4o-mini` olarak varsayılan).

  ## Gelişmiş Kurulum

  <details>
  <summary><strong>Genişletmek için tıklayın: Docker, Smithery ve Geliştirme</strong></summary>

  ### Docker Dağıtımı

  Docker ile çalıştırmak için:

  1. Görüntüyü oluştur:

     ```bash
     docker build -t mem0-mcp-server .
     ```

  2. Konteyner çalıştır:

     ```bash
     docker run --rm -d \
       --name mem0-mcp \
       -e MEM0_API_KEY=m0-... \
       -p 8080:8081 \
       mem0-mcp-server
     ```

  3. Konteyner izle:

     ```bash
     # Günlükleri görüntüle
     docker logs -f mem0-mcp

     # Durumu kontrol et
     docker ps
     ```

  ### Smithery Uzak Sunucusuyla Çalıştırma

  Smithery tarafından barındırılan bir sunucuya bağlanmak için:

  1. MCP sunucusunu yükle (Smithery bağımlılıkları artık paketlenmiştir):

     ```bash
     pip install mem0-mcp-server
     ```

  2. MCP istemcisini Smithery ile yapılandır:
     ```json
     {
       "mcpServers": {
         "mem0-memory-mcp": {
           "command": "npx",
           "args": [
             "-y",
             "@smithery/cli@latest",
             "run",
             "@mem0ai/mem0-memory-mcp",
             "--key",
             "your-smithery-key",
             "--profile",
             "your-profile-name"
           ],
           "env": {
             "MEM0_API_KEY": "m0-..."
           }
         }
       }
     }
     ```

  ### Geliştirme Kurulumu

  Kaynaktan klonla ve çalıştır:

  ```bash
  git clone https://github.com/mem0ai/mem0-mcp.git
  cd mem0-mcp-server
  pip install -e ".[dev]"

  # Yerel olarak çalıştır
  mem0-mcp-server

  # Veya uv ile
  uv sync
  uv run mem0-mcp-server
  ```

  </details>

  ## Lisans

  [Apache Lisansı 2.0](https://github.com/mem0ai/mem0-mcp/blob/main/LICENSE)
---

> [!CAUTION]
> ## This project has been archived
>
> **mem0-mcp-server** is no longer actively maintained and this repository is now a public archive.
>
> Thank you to the 640+ stargazers, 140+ forkers, and every contributor who helped shape this project. Your support and feedback meant the world to us.
>
> **Looking for Mem0 MCP?** We now offer an official cloud-hosted MCP server. Check out the [docs](https://docs.mem0.ai/platform/mem0-mcp) to get started.
>
> **Quick install across all major clients:**
> ```bash
> npx mcp-add \
>   --name mem0-mcp \
>   --type http \
>   --url "https://mcp.mem0.ai/mcp" \
>   --clients "claude,claude code,cursor,windsurf,vscode,opencode"
> ```

# Mem0 MCP Server

[![PyPI version](https://img.shields.io/pypi/v/mem0-mcp-server.svg)](https://pypi.org/project/mem0-mcp-server/) [![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE) [![smithery badge](https://smithery.ai/badge/@mem0ai/mem0-memory-mcp)](https://smithery.ai/server/@mem0ai/mem0-memory-mcp)

`mem0-mcp-server` wraps the official [Mem0](https://mem0.ai) Memory API as a Model Context Protocol (MCP) server so any MCP-compatible client (Claude Desktop, Cursor, custom agents) can add, search, update, and delete long-term memories.

## Tools

The server exposes the following tools to your LLM:

| Tool                  | Description                                                                       |
| --------------------- | --------------------------------------------------------------------------------- |
| `add_memory`          | Save text or conversation history (or explicit message objects) for a user/agent. |
| `search_memories`     | Semantic search across existing memories (filters + limit supported).             |
| `get_memories`        | List memories with structured filters and pagination.                             |
| `get_memory`          | Retrieve one memory by its `memory_id`.                                           |
| `update_memory`       | Overwrite a memory's text once the user confirms the `memory_id`.                 |
| `delete_memory`       | Delete a single memory by `memory_id`.                                            |
| `delete_all_memories` | Bulk delete all memories in the confirmed scope (user/agent/app/run).             |
| `delete_entities`     | Delete a user/agent/app/run entity (and its memories).                            |
| `list_entities`       | Enumerate users/agents/apps/runs stored in Mem0.                                  |

All responses are JSON strings returned directly from the Mem0 API.

## Usage Options

There are three ways to use the Mem0 MCP Server:

1. **Python Package** - Install and run locally using `uvx` with any MCP client
2. **Docker** - Containerized deployment that creates an `/mcp` HTTP endpoint
3. **Smithery** - Remote hosted service for managed deployments

## Quick Start

### Installation

```bash
uv pip install mem0-mcp-server
```

Or with pip:

```bash
pip install mem0-mcp-server
```

### Client Configuration

Add this configuration to your MCP client:

```json
{
  "mcpServers": {
    "mem0": {
      "command": "uvx",
      "args": ["mem0-mcp-server"],
      "env": {
        "MEM0_API_KEY": "m0-...",
        "MEM0_DEFAULT_USER_ID": "your-handle"
      }
    }
  }
}
```

### Test with the Python Agent

<details>
<summary><strong>Click to expand: Test with the Python Agent</strong></summary>

To test the server immediately, use the included Pydantic AI agent:

```bash
# Install the package
pip install mem0-mcp-server
# Or with uv
uv pip install mem0-mcp-server

# Set your API keys
export MEM0_API_KEY="m0-..."
export OPENAI_API_KEY="sk-openai-..."

# Clone and test with the agent
git clone https://github.com/mem0ai/mem0-mcp.git
cd mem0-mcp-server
python example/pydantic_ai_repl.py
```

**Using different server configurations:**

```bash
# Use with Docker container
export MEM0_MCP_CONFIG_PATH=example/docker-config.json
export MEM0_MCP_CONFIG_SERVER=mem0-docker
python example/pydantic_ai_repl.py

# Use with Smithery remote server
export MEM0_MCP_CONFIG_PATH=example/config-smithery.json
export MEM0_MCP_CONFIG_SERVER=mem0-memory-mcp
python example/pydantic_ai_repl.py
```

</details>

## What You Can Do

The Mem0 MCP server enables powerful memory capabilities for your AI applications:

- Remember that I'm allergic to peanuts and shellfish - Add new health information to memory
- Store these trial parameters: 200 participants, double-blind, placebo-controlled study - Save research data
- What do you know about my dietary preferences? - Search and retrieve all food-related memories
- Update my project status: the mobile app is now 80% complete - Modify existing memory with new info
- Delete all memories from 2023, I need a fresh start - Bulk remove outdated memories
- Show me everything I've saved about the Phoenix project - List all memories for a specific topic

## Configuration

### Environment Variables

- `MEM0_API_KEY` (required) – Mem0 platform API key.
- `MEM0_DEFAULT_USER_ID` (optional) – default `user_id` injected into filters and write requests (defaults to `mem0-mcp`).
- `MEM0_ENABLE_GRAPH_DEFAULT` (optional) – Enable graph memories by default (defaults to `false`).
- `MEM0_MCP_AGENT_MODEL` (optional) – default LLM for the bundled agent example (defaults to `openai:gpt-4o-mini`).

## Advanced Setup

<details>
<summary><strong>Click to expand: Docker, Smithery, and Development</strong></summary>

### Docker Deployment

To run with Docker:

1. Build the image:

   ```bash
   docker build -t mem0-mcp-server .
   ```

2. Run the container:

   ```bash
   docker run --rm -d \
     --name mem0-mcp \
     -e MEM0_API_KEY=m0-... \
     -p 8080:8081 \
     mem0-mcp-server
   ```

3. Monitor the container:

   ```bash
   # View logs
   docker logs -f mem0-mcp

   # Check status
   docker ps
   ```

### Running with Smithery Remote Server

To connect to a Smithery-hosted server:

1. Install the MCP server (Smithery dependencies are now bundled):

   ```bash
   pip install mem0-mcp-server
   ```

2. Configure MCP client with Smithery:
   ```json
   {
     "mcpServers": {
       "mem0-memory-mcp": {
         "command": "npx",
         "args": [
           "-y",
           "@smithery/cli@latest",
           "run",
           "@mem0ai/mem0-memory-mcp",
           "--key",
           "your-smithery-key",
           "--profile",
           "your-profile-name"
         ],
         "env": {
           "MEM0_API_KEY": "m0-..."
         }
       }
     }
   }
   ```

### Development Setup

Clone and run from source:

```bash
git clone https://github.com/mem0ai/mem0-mcp.git
cd mem0-mcp-server
pip install -e ".[dev]"

# Run locally
mem0-mcp-server

# Or with uv
uv sync
uv run mem0-mcp-server
```

</details>

## License

[Apache License 2.0](https://github.com/mem0ai/mem0-mcp/blob/main/LICENSE)
