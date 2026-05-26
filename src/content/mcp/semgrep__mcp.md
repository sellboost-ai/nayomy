---
name: "semgrep/mcp"
description: "Allow AI agents to scan code for security vulnerabilites using Semgrep."
category: "Security"
repo: "semgrep/mcp"
stars: 669
url: "https://github.com/semgrep/mcp"
body_length: 19025
license: "MIT"
language: "Python"
homepage: "https://mcp.semgrep.ai"
body_tr: |-
  ## **⚠️ Semgrep MCP sunucusu bağımsız bir depodan [ana `semgrep` deposuna](https://github.com/semgrep/semgrep/tree/develop/cli/src/semgrep/mcp) taşınmıştır! ⚠️**
  **Bu depo kullanım dışı bırakılmıştır ve Semgrep MCP sunucusuna yönelik daha sonraki güncellemeler resmi `semgrep` binary'si aracılığıyla yapılacaktır.**

  <p align="center">
    <a href="https://semgrep.dev">
      <picture>
        <source media="(prefers-color-scheme: light)" srcset="images/semgrep-logo-light.svg">
        <source media="(prefers-color-scheme: dark)" srcset="images/semgrep-logo-dark.svg">
        
      </picture>
    </a>
  </p>
  <p align="center">
    <a href="https://semgrep.dev/docs/">
        
    </a>
    <a href="https://go.semgrep.dev/slack">
      
    </a>
    <a href="https://www.linkedin.com/company/semgrep/">
      
    </a>
    <a href="https://x.com/intent/follow?screen_name=semgrep">
      
    </a>
  </p>

  # Semgrep MCP Sunucusu
  [![Add MCP Server semgrep to LM Studio](https://files.lmstudio.ai/deeplink/mcp-install-light.svg)](https://lmstudio.ai/install-mcp?name=semgrep&config=eyJ1cmwiOiJodHRwczovL21jcC5zZW1ncmVwLmFpL21jcCIsImhlYWRlcnMiOnsiQXV0aG9yaXphdGlvbiI6IkJlYXJlciA8WU9VUl9IRl9UT0tFTj4ifX0%3D)
  [![Install in Cursor](https://img.shields.io/badge/Cursor-uv-0098FF?style=flat-square)](cursor://anysphere.cursor-deeplink/mcp/install?name=semgrep&config=eyJjb21tYW5kIjoidXZ4IiwiYXJncyI6WyJzZW1ncmVwLW1jcCJdfQ==)
  [![Install in VS Code UV](https://img.shields.io/badge/VS_Code-uv-0098FF?style=flat-square&logo=githubcopilot&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=semgrep&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22semgrep-mcp%22%5D%7D)
  [![Install in VS Code Docker](https://img.shields.io/badge/VS_Code-docker-0098FF?style=flat-square&logo=githubcopilot&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=semgrep&config=%7B%22command%22%3A%22docker%22%2C%22args%22%3A%5B%22run%22%2C%20%22-i%22%2C%20%22--rm%22%2C%20%22ghcr.io%2Fsemgrep%2Fmcp%22%2C%20%22-t%22%2C%20%22stdio%22%5D%7D)
  [![Install in VS Code semgrep.ai](https://img.shields.io/badge/VS_Code-semgrep.ai-0098FF?style=flat-square&logo=githubcopilot&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=semgrep.ai&config=%7B%22type%22%3A%20%22sse%22%2C%20%22url%22%3A%22https%3A%2F%2Fmcp.semgrep.ai%2Fsse%22%7D)
  [![PyPI](https://img.shields.io/pypi/v/semgrep-mcp?style=flat-square&color=blue&logo=python&logoColor=white)](https://pypi.org/project/semgrep-mcp/)
  [![Docker](https://img.shields.io/badge/docker-ghcr.io%2Fsemgrep%2Fmcp-0098FF?style=flat-square&logo=docker&logoColor=white)](https://ghcr.io/semgrep/mcp)
  [![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-uv-24bfa5?style=flat-square&logo=githubcopilot&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=semgrep&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22semgrep-mcp%22%5D%7D&quality=insiders)
  [![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-docker-24bfa5?style=flat-square&logo=githubcopilot&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=semgrep&config=%7B%22command%22%3A%22docker%22%2C%22args%22%3A%5B%22run%22%2C%20%22-i%22%2C%20%22--rm%22%2C%20%22ghcr.io%2Fsemgrep%2Fmcp%22%2C%20%22-t%22%2C%20%22stdio%22%5D%7D&quality=insiders)

  Kodu güvenlik açıkları için taramak üzere [Semgrep](https://semgrep.dev) kullanmak için bir Model Context Protocol (MCP) sunucusu. [Vibe coding](https://semgrep.dev/blog/2025/giving-appsec-a-seat-at-the-vibe-coding-table/) güvenliğini sağlayın! 😅

  [Model Context Protocol (MCP)](https://modelcontextprotocol.io/), LLM'ler, Agentlar ve Cursor, VS Code, Windsurf gibi IDE'ler veya MCP'yi destekleyen başka herhangi bir araç için, uzmanlaşmış yardım almak, bağlam elde etmek ve araçların gücünden yararlanmak amacıyla standartlaştırılmış bir API'dir. Semgrep, birçok [dili](https://semgrep.dev/docs/supported-languages) semantik olarak anlayan hızlı, deterministik bir statik analiz aracıdır ve 5.000'den fazla [kuralı](https://semgrep.dev/registry) içerir. 🛠️

  > [!NOTE]
  > Bu beta projesi aktif geliştirme altındadır. Geri bildiriminiz, hata raporlarınız, özellik istekleriniz ve kodunuz çok hoş gelecektir. `#mcp` [community Slack](https://go.semgrep.dev/slack) kanalına katılın!

  ## İçindekiler

  - [Semgrep MCP Sunucusu](#semgrep-mcp-sunucusu)
    - [İçindekiler](#içindekiler)
    - [Başlangıç](#başlangıç)
      - [Cursor](#cursor)
      - [ChatGPT](#chatgpt)
      - [Barındırılan Sunucu](#barındırılan-sunucu)
        - [Cursor](#cursor-1)
    - [Demo](#demo)
    - [API](#api)
      - [Araçlar](#araçlar)
        - [Kodu Tara](#kodu-tara)
        - [Kodu Anla](#kodu-anla)
        - [Bulut Platformu (giriş ve Semgrep token'ı gerekli)](#bulut-platformu-giriş-ve-semgrep-tokenı-gerekli)
        - [Meta](#meta)
      - [İstemler](#istemler)
      - [Kaynaklar](#kaynaklar)
    - [Kullanım](#kullanım)
      - [Standart Girdi/Çıktı (stdio)](#standart-girdişıktı-stdio)
        - [Python](#python)
        - [Docker](#docker)
      - [Akışlandırılabilir HTTP](#akışlandırılabilir-http)
        - [Python](#python-1)
        - [Docker](#docker-1)
      - [Sunucu tarafından gönderilen etkinlikler (SSE)](#sunucu-tarafından-gönderilen-etkinlikler-sse)
        - [Python](#python-2)
        - [Docker](#docker-2)
    - [Semgrep AppSec Platformu](#semgrep-appsec-platformu)
    - [Entegrasyonlar](#entegrasyonlar)
      - [Cursor IDE](#cursor-ide)
      - [VS Code / Copilot](#vs-code--copilot)
        - [Manuel Yapılandırma](#manuel-yapılandırma)
        - [Docker Kullanımı](#docker-kullanımı)
      - [Windsurf](#windsurf)
      - [Claude Desktop](#claude-desktop)
      - [Claude Code](#claude-code)
      - [OpenAI](#openai)
        - [Agents SDK](#agents-sdk)
      - [Özel istemciler](#özel-istemciler)
        - [Örnek Python SSE istemcisi](#örnek-python-sse-istemcisi)
    - [Katkı, Topluluk ve Kaynaktan Çalıştırma](#katkı-topluluk-ve-kaynaktan-çalıştırma)
      - [Benzer araçlar 🔍](#benzer-araçlar-)
      - [Topluluk projeleri 🌟](#topluluk-projeleri-)
      - [MCP sunucu kayıtları](#mcp-sunucu-kayıtları)

  ## Başlangıç

  [Python paketini](https://pypi.org/p/semgrep-mcp) [`uv`](https://docs.astral.sh/uv/guides/tools/) kullanarak CLI komutu olarak çalıştırın:

  ```bash
  uvx semgrep-mcp # daha fazla seçenek için --help bölümüne bakın
  ```

  Veya [Docker konteyner](https://ghcr.io/semgrep/mcp) olarak çalıştırın:

  ```bash
  docker run -i --rm ghcr.io/semgrep/mcp -t stdio
  ```

  ### Cursor

  Örnek [`mcp.json`](https://docs.cursor.com/context/model-context-protocol)

  ```json
  {
    "mcpServers": {
      "semgrep": {
        "command": "uvx",
        "args": ["semgrep-mcp"],
        "env": {
          "SEMGREP_APP_TOKEN": "<token>"
        }
      }
    }
  }

  ```

  Otomatik olarak kullanılması için [`.cursor/rules`](https://docs.cursor.com/context/rules-for-ai) öğesine bir talimat ekleyin:

  ```text
  Her zaman Semgrep kullanarak oluşturulan kodu güvenlik açıkları için tarayın
  ```

  ### ChatGPT

  1. **Connector Settings** sayfasına gidin ([doğrudan bağlantı](https://chatgpt.com/admin/ca#settings/ConnectorSettings?create-connector=true))
  1. Bağlantıyı `Semgrep` olarak **adlandırın**
  1. **MCP Server URL**'sini `https://mcp.semgrep.ai/sse` olarak ayarlayın
  1. **Authentication**'u `No authentication` olarak ayarlayın
  1. **I trust this application** (Bu uygulamaya güveniyorum) onay kutusunu işaretleyin
  1. **Create** (Oluştur) öğesine tıklayın

  [Resmi doçlar](https://platform.openai.com/docs/mcp)da daha fazla ayrıntı görebilirsiniz.


  ### Barındırılan Sunucu

  > [!WARNING]
  > [mcp.semgrep.ai](https://mcp.semgrep.ai) beklenmedik şekilde kırılabilecek deneysel bir sunucudur. Hızla yeni işlevsellik kazanacaktır.🚀

  #### Cursor

  1. Cursor Settings'i açmak için **Cmd + Shift + J** tuşlarına basın
  1. **MCP Tools**'u seçin
  1. **New MCP Server**'a tıklayın.
  1.

  ```json
  {
    "mcpServers": {
      "semgrep": {
        "type": "streamable-http",
        "url": "https://mcp.semgrep.ai/mcp"
      }
    }
  }
  ```

  ## Demo

  <a href="https://www.loom.com/share/8535d72e4cfc4e1eb1e03ea223a702df">  </a>

  ## API

  ### Araçlar

  LLM'lerin eylemleri gerçekleştirmesini, deterministik hesaplamalar yapmasını ve harici hizmetlerle etkileşime girmesini sağlayın.

  #### Kodu Tara

  - `security_check`: Kodu güvenlik açıkları için tarayın
  - `semgrep_scan`: Kod dosyalarını belirli bir config string'i ile güvenlik açıkları için tarayın
  - `semgrep_scan_with_custom_rule`: Kod dosyalarını özel bir Semgrep kuralı kullanarak tarayın

  #### Kodu Anla

  - `get_abstract_syntax_tree`: Kodun Abstract Syntax Tree (AST)'sini çıkara

  #### Bulut Platformu (giriş ve Semgrep token'ı gerekli)
  - `semgrep_findings`: Semgrep AppSec Platform API'sinden Semgrep bulgularını getirin

  #### Meta

  - `supported_languages`: Semgrep'in desteklediği dillerin listesini döndürün
  - `semgrep_rule_schema`: En son semgrep kuralı JSON Schema'sını getirin

  ### İstemler

  Yaygın LLM etkileşimlerini standartlaştırmak için yeniden kullanılabilir istemler.

  - `write_custom_semgrep_rule`: Semgrep kuralı yazmaya yardımcı olması için bir istem döndürün

  ### Kaynaklar

  Verileri ve içeriği LLM'lere gösterin

  - `semgrep://rule/schema`: JSON schema kullanarak Semgrep kuralı YAML sözdiziminin tanımı
  - `semgrep://rule/{rule_id}/yaml`: Semgrep registry'sinden tam Semgrep kuralı YAML formatında

  ## Kullanım

  Bu Python paketi PyPI'ye [semgrep-mcp](https://pypi.org/p/semgrep-mcp) olarak yayımlanır ve [pip](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/#install-a-package), [pipx](https://pipx.pypa.io/), [uv](https://docs.astral.sh/uv/), [poetry](https://python-poetry.org/) veya başka bir Python paket yöneticisi ile kurulup çalıştırılabilir.

  ```text
  $ pipx install semgrep-mcp
  $ semgrep-mcp --help

  Usage: semgrep-mcp [OPTIONS]

    MCP sunucusunun giriş noktası

    Hem stdio hem de sse taşımalarını destekler. Stdio için stdin'den okur
    ve stdout'a yazacaktır. SSE için, port 8000'de bir HTTP sunucusu başlatacaktır.

  Options:
    -v, --version                Sürümü göster ve çık.
    -t, --transport [stdio|sse]  Kullanılacak taşıma protokolü (stdio veya sse)
    -h, --help                   Bu yardım mesajını göster.
  ```

  ### Standart Girdi/Çıktı (stdio)

  Stdio taşıması, standart girdi ve çıktı akışları aracılığıyla iletişimi sağlar. Bu, yerel entegrasyonlar ve komut satırı araçları için özellikle kullanışlıdır. Daha fazla ayrıntı için [belirtilime](https://modelcontextprotocol.io/docs/concepts/transports#built-in-transport-types) bakın.

  #### Python

  ```bash
  semgrep-mcp
  ```

  Varsayılan olarak, Python paketi `stdio` modunda çalışacaktır. Standart girdi ve çıktı akışlarını kullandığı için, hiçbir çıktı olmadan aracın asılı kaldığı görülecektir, ancak bu beklenen bir davranıştır.

  #### Docker

  Bu sunucu Github's Container Registry'ye yayımlanır ([ghcr.io/semgrep/mcp](http://ghcr.io/semgrep/mcp))

  ```
  docker run -i --rm ghcr.io/semgrep/mcp -t stdio
  ```

  Varsayılan olarak, Docker konteyner `SSE` modundadır, bu nedenle görüntü adından sonra `-t stdio` eklemek ve stdio modunda çalıştırmak için `-i` ile çalıştırmak zorunda kalacaksınız.

  ### Akışlandırılabilir HTTP

  Akışlandırılabilir HTTP, HTTP POST istekleri aracılığıyla JSON RPC üzerinden akış yanıtlarını etkinleştirir. Daha fazla ayrıntı için [belirtilime](https://modelcontextprotocol.io/specification/draft/basic/transports#streamable-http) bakın.

  Varsayılan olarak, sunucu istemci bağlantıları için [127.0.0.1:8000/mcp](https://127.0.0.1/mcp) adresinde dinleme yapar. Bunlardan herhangi birini değiştirmek için [FASTMCP\_\*](https://github.com/modelcontextprotocol/python-sdk/blob/main/src/mcp/server/fastmcp/server.py#L78) ortam değişkenlerini ayarlayın. _Sunucu, istemcilerin bağlanabilmesi için çalışıyor olmalıdır._

  #### Python

  ```bash
  semgrep-mcp -t streamable-http
  ```

  Varsayılan olarak, Python paketi `stdio` modunda çalışacaktır, bu nedenle `-t streamable-http` eklemek zorunda kalacaksınız.

  #### Docker

  ```
  docker run -p 8000:0000 ghcr.io/semgrep/mcp
  ```


  ### Sunucu tarafından gönderilen etkinlikler (SSE)

  > [!WARNING]
  > MCP topluluğu bunu eski bir taşıma protokolü olarak değerlendirir ve gerçekten geriye dönük uyumluluk için tasarlanmıştır. [Akışlandırılabilir HTTP](#akışlandırılabilir-http) önerilen değiştirmedir.

  SSE taşıması, Server-Send Events ile sunucudan istemciye akışı sunucu-istemci ve istemci-sunucu iletişimi için etkinleştirir. Daha fazla ayrıntı için [belirtilime](https://modelcontextprotocol.io/docs/concepts/transports#server-sent-events-sse) bakın.

  Varsayılan olarak, sunucu istemci bağlantıları için [127.0.0.1:8000/sse](https://127.0.0.1/sse) adresinde dinleme yapar. Bunlardan herhangi birini değiştirmek için [FASTMCP\_\*](https://github.com/modelcontextprotocol/python-sdk/blob/main/src/mcp/server/fastmcp/server.py#L78) ortam değişkenlerini ayarlayın. _Sunucu, istemcilerin bağlanabilmesi için çalışıyor olmalıdır._

  #### Python

  ```bash
  semgrep-mcp -t sse
  ```

  Varsayılan olarak, Python paketi `stdio` modunda çalışacaktır, bu nedenle `-t sse` eklemek zorunda kalacaksınız.

  #### Docker

  ```
  docker run -p 8000:0000 ghcr.io/semgrep/mcp -t sse
  ```

  ## Semgrep AppSec Platformu

  İsteğe bağlı olarak, Semgrep AppSec Platformu'na bağlanmak için:

  1. [Giriş yapın](https://semgrep.dev/login/) veya kaydolun
  1. [Ayarlardan](https://semgrep.dev/orgs/-/settings/tokens/api) bir token oluşturun
  1. Token'ı ortam değişkenlerinize ekleyin:
     - CLI (`export SEMGREP_APP_TOKEN=<token>`)

     - Docker (`docker run -e SEMGREP_APP_TOKEN=<token>`)

     - MCP config JSON

  ```json
      "env": {
        "SEMGREP_APP_TOKEN": "<token>"
      }
  ```

  > [!TIP]
  > Gerekirse lütfen [destek için iletişime geçin](https://semgrep.dev/docs/support). ☎️

  ## Entegrasyonlar

  ### Cursor IDE

  Aşağıdaki JSON bloğunu global `~/.cursor/mcp.json` veya proje özgü `.cursor/mcp.json` yapılandırma dosyasına ekleyin:

  ```json
  {
    "mcpServers": {
      "semgrep": {
        "command": "uvx",
        "args": ["semgrep-mcp"]
      }
    }
  }
  ```

  ![cursor MCP settings](https://raw.githubusercontent.com/semgrep/mcp/HEAD/images/cursor.png)

  Daha fazla bilgi için [cursor doçlarına](https://docs.cursor.com/context/model-context-protocol) bakın.

  ### VS Code / Copilot

  Bu README'nin en üstündeki kurulum düğmelerine tıklayın en hızlı kurulum için.

  #### Manuel Yapılandırma

  VS Code'da Kullanıcı Ayarları (JSON) dosyanıza aşağıdaki JSON bloğunu ekleyin. Bunu `Ctrl + Shift + P` tuşlarına basarak ve `Preferences: Open User Settings (JSON)` yazarak yapabilirsiniz.

  ```json
  {
    "mcp": {
      "servers": {
        "semgrep": {
          "command": "uvx",
          "args": ["semgrep-mcp"]
        }
      }
    }
  }
  ```

  İsteğe bağlı olarak, çalışma alanınızda `.vscode/mcp.json` adlı bir dosyaya ekleyebilirsiniz:

  ```json
  {
    "servers": {
      "semgrep": {
        "command": "uvx",
          "args": ["semgrep-mcp"]
      }
    }
  }
  ```

  #### Docker Kullanımı

  ```json
  {
    "mcp": {
      "servers": {
        "semgrep": {
          "command": "docker",
          "args": [
            "run",
            "-i",
            "--rm",
            "ghcr.io/semgrep/mcp",
            "-t",
            "stdio"
          ]
        }
      }
    }
  }
  ```

  Daha fazla bilgi için [VS Code doçlarına](https://code.visualstudio.com/docs/copilot/chat/mcp-servers) bakın.

  ### Windsurf

  Aşağıdaki JSON bloğunu `~/.codeium/windsurf/mcp_config.json` dosyasına ekleyin:

  ```json
  {
    "mcpServers": {
      "semgrep": {
        "command": "uvx",
        "args": ["semgrep-mcp"]
      }
    }
  }
  ```

  Daha fazla bilgi için [Windsurf doçlarına](https://docs.windsurf.com/windsurf/mcp) bakın.

  ### Claude Desktop

  Bu sunucuyu özel bir kural yazmak için kullanan Claude Desktop'ı gösteren [kısa bir video](https://www.loom.com/share/f4440cbbb5a24149ac17cc7ddcd95cfa) bulunmaktadır.

  Aşağıdaki JSON bloğunu `claude_desktop_config.json` dosyasına ekleyin:

  ```json
  {
    "mcpServers": {
      "semgrep": {
        "command": "uvx",
        "args": ["semgrep-mcp"]
      }
    }
  }
  ```

  Daha fazla bilgi için [Anthropic doçlarına](https://docs.anthropic.com/en/docs/agents-and-tools/mcp) bakın.

  ### Claude Code

  ```bash
  claude mcp add semgrep uvx semgrep-mcp
  ```

  Daha fazla bilgi için [Claude Code doçlarına](https://docs.anthropic.com/en/docs/claude-code/tutorials#set-up-model-context-protocol-mcp) bakın.

  ### OpenAI

  Resmi doçlara bakın:
  - https://platform.openai.com/docs/mcp
  - https://platform.openai.com/docs/guides/tools-remote-mcp

  #### Agents SDK

  ```python
  async with MCPServerStdio(
      params={
          "command": "uvx",
          "args": ["semgrep-mcp"],
      }
  ) as server:
      tools = await server.list_tools()
  ```

  Daha fazla bilgi için [OpenAI Agents SDK doçlarına](https://openai.github.io/openai-agents-python/mcp/) bakın.

  ### Özel istemciler

  #### Örnek Python SSE istemcisi

  [examples/sse_client.py](examples/sse_client.py) içinde tam bir örnek görebilirsiniz

  ```python
  from mcp.client.session import ClientSession
  from mcp.client.sse import sse_client


  async def main():
      async with sse_client("http://localhost:8000/sse") as (read_stream, write_stream):
          async with ClientSession(read_stream, write_stream) as session:
              await session.initialize()
              results = await session.call_tool(
                  "semgrep_scan",
                  {
                      "code_files": [
                          {
                              "path": "hello_world.py",
                              "content": "def hello(): print('Hello, World!')",
                          }
                      ]
                  },
              )
              print(results)
  ```

  > [!TIP]
  > Bazı istemci kitaplıkları `URL`'yi istemiştir: [http://localhost:8000/sse](http://localhost:8000/sse)
  > ve diğerleri sadece `HOST`'u istemiştir: `localhost:8000`.
  > Sunucunun çalıştığını ve ağ sorunları olmadığını doğrulamak için web tarayıcısında `URL`'yi deneyin.

  Daha fazla bilgi için [resmi SDK doçlarına](https://modelcontextprotocol.io/clients#adding-mcp-support-to-your-application) bakın.

  ## Katkı, Topluluk ve Kaynaktan Çalıştırma

  > [!NOTE]
  > Geri bildiriminiz, hata raporlarınız, özellik istekleriniz ve kodunuz çok hoş gelecektir. `#mcp` [community Slack](https://go.semgrep.dev/slack) kanalına katılın!

  Daha fazla bilgi ve MCP sunucusunu kaynak koddan çalıştırmaya ilişkin ayrıntılar için [CONTRIBUTING.md](CONTRIBUTING.md) dosyasına bakın.

  ### Benzer araçlar 🔍

  - [semgrep-vscode](https://github.com/semgrep/semgrep-vscode) - Resmi VS Code uzantısı
  - [semgrep-intellij](https://github.com/semgrep/semgrep-intellij) - IntelliJ eklentisi

  ### Topluluk projeleri 🌟

  - [semgrep-rules](https://github.com/semgrep/semgrep-rules) - Resmi Semgrep kuralları koleksiyonu
  - [mcp-server-semgrep](https://github.com/Szowesgad/mcp-server-semgrep) - [Szowesgad](https://github.com/Szowesgad) ve [stefanskiasan](https://github.com/stefanskiasan) tarafından yazılan orijinal ilham

  ### MCP sunucu kayıtları

  - [Glama](https://glama.ai/mcp/servers/@semgrep/mcp)

  <a href="https://glama.ai/mcp/servers/@semgrep/mcp">
   
   </a>

  - [MCP.so](https://mcp.so/server/mcp/semgrep)

  ______________________________________________________________________

  [Semgrep Ekibi](https://semgrep.dev/about/) tarafından sevgiyle yapıldı ❤️
---

## **⚠️ The Semgrep MCP server has been moved from a standalone repo to the [main `semgrep` repository!](https://github.com/semgrep/semgrep/tree/develop/cli/src/semgrep/mcp) ⚠️**
**This repository has been deprecated, and further updates to the Semgrep MCP server will be made via the official `semgrep` binary.**

<p align="center">
  <a href="https://semgrep.dev">
    <picture>
      <source media="(prefers-color-scheme: light)" srcset="images/semgrep-logo-light.svg">
      <source media="(prefers-color-scheme: dark)" srcset="images/semgrep-logo-dark.svg">
      
    </picture>
  </a>
</p>
<p align="center">
  <a href="https://semgrep.dev/docs/">
      
  </a>
  <a href="https://go.semgrep.dev/slack">
    
  </a>
  <a href="https://www.linkedin.com/company/semgrep/">
    
  </a>
  <a href="https://x.com/intent/follow?screen_name=semgrep">
    
  </a>
</p>

# Semgrep MCP Server
[![Add MCP Server semgrep to LM Studio](https://files.lmstudio.ai/deeplink/mcp-install-light.svg)](https://lmstudio.ai/install-mcp?name=semgrep&config=eyJ1cmwiOiJodHRwczovL21jcC5zZW1ncmVwLmFpL21jcCIsImhlYWRlcnMiOnsiQXV0aG9yaXphdGlvbiI6IkJlYXJlciA8WU9VUl9IRl9UT0tFTj4ifX0%3D)
[![Install in Cursor](https://img.shields.io/badge/Cursor-uv-0098FF?style=flat-square)](cursor://anysphere.cursor-deeplink/mcp/install?name=semgrep&config=eyJjb21tYW5kIjoidXZ4IiwiYXJncyI6WyJzZW1ncmVwLW1jcCJdfQ==)
[![Install in VS Code UV](https://img.shields.io/badge/VS_Code-uv-0098FF?style=flat-square&logo=githubcopilot&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=semgrep&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22semgrep-mcp%22%5D%7D)
[![Install in VS Code Docker](https://img.shields.io/badge/VS_Code-docker-0098FF?style=flat-square&logo=githubcopilot&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=semgrep&config=%7B%22command%22%3A%22docker%22%2C%22args%22%3A%5B%22run%22%2C%20%22-i%22%2C%20%22--rm%22%2C%20%22ghcr.io%2Fsemgrep%2Fmcp%22%2C%20%22-t%22%2C%20%22stdio%22%5D%7D)
[![Install in VS Code semgrep.ai](https://img.shields.io/badge/VS_Code-semgrep.ai-0098FF?style=flat-square&logo=githubcopilot&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=semgrep.ai&config=%7B%22type%22%3A%20%22sse%22%2C%20%22url%22%3A%22https%3A%2F%2Fmcp.semgrep.ai%2Fsse%22%7D)
[![PyPI](https://img.shields.io/pypi/v/semgrep-mcp?style=flat-square&color=blue&logo=python&logoColor=white)](https://pypi.org/project/semgrep-mcp/)
[![Docker](https://img.shields.io/badge/docker-ghcr.io%2Fsemgrep%2Fmcp-0098FF?style=flat-square&logo=docker&logoColor=white)](https://ghcr.io/semgrep/mcp)
[![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-uv-24bfa5?style=flat-square&logo=githubcopilot&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=semgrep&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22semgrep-mcp%22%5D%7D&quality=insiders)
[![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-docker-24bfa5?style=flat-square&logo=githubcopilot&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=semgrep&config=%7B%22command%22%3A%22docker%22%2C%22args%22%3A%5B%22run%22%2C%20%22-i%22%2C%20%22--rm%22%2C%20%22ghcr.io%2Fsemgrep%2Fmcp%22%2C%20%22-t%22%2C%20%22stdio%22%5D%7D&quality=insiders)

A Model Context Protocol (MCP) server for using [Semgrep](https://semgrep.dev) to scan code for security vulnerabilities. Secure your [vibe coding](https://semgrep.dev/blog/2025/giving-appsec-a-seat-at-the-vibe-coding-table/)! 😅

[Model Context Protocol (MCP)](https://modelcontextprotocol.io/) is a standardized API for LLMs, Agents, and IDEs like Cursor, VS Code, Windsurf, or anything that supports MCP, to get specialized help, get context, and harness the power of tools. Semgrep is a fast, deterministic static analysis tool that semantically understands many [languages](https://semgrep.dev/docs/supported-languages) and comes with over [5,000 rules](https://semgrep.dev/registry). 🛠️

> [!NOTE]
> This beta project is under active development. We would love your feedback, bug reports, feature requests, and code. Join the `#mcp` [community Slack](https://go.semgrep.dev/slack) channel!

## Contents

- [Semgrep MCP Server](#semgrep-mcp-server)
  - [Contents](#contents)
  - [Getting started](#getting-started)
    - [Cursor](#cursor)
    - [ChatGPT](#chatgpt)
    - [Hosted Server](#hosted-server)
      - [Cursor](#cursor-1)
  - [Demo](#demo)
  - [API](#api)
    - [Tools](#tools)
      - [Scan Code](#scan-code)
      - [Understand Code](#understand-code)
      - [Cloud Platform (login and Semgrep token required)](#cloud-platform-login-and-semgrep-token-required)
      - [Meta](#meta)
    - [Prompts](#prompts)
    - [Resources](#resources)
  - [Usage](#usage)
    - [Standard Input/Output (stdio)](#standard-inputoutput-stdio)
      - [Python](#python)
      - [Docker](#docker)
    - [Streamable HTTP](#streamable-http)
      - [Python](#python-1)
      - [Docker](#docker-1)
    - [Server-sent events (SSE)](#server-sent-events-sse)
      - [Python](#python-2)
      - [Docker](#docker-2)
  - [Semgrep AppSec Platform](#semgrep-appsec-platform)
  - [Integrations](#integrations)
    - [Cursor IDE](#cursor-ide)
    - [VS Code / Copilot](#vs-code--copilot)
      - [Manual Configuration](#manual-configuration)
      - [Using Docker](#using-docker)
    - [Windsurf](#windsurf)
    - [Claude Desktop](#claude-desktop)
    - [Claude Code](#claude-code)
    - [OpenAI](#openai)
      - [Agents SDK](#agents-sdk)
    - [Custom clients](#custom-clients)
      - [Example Python SSE client](#example-python-sse-client)
  - [Contributing, community, and running from source](#contributing-community-and-running-from-source)
    - [Similar tools 🔍](#similar-tools-)
    - [Community projects 🌟](#community-projects-)
    - [MCP server registries](#mcp-server-registries)

## Getting started

Run the [Python package](https://pypi.org/p/semgrep-mcp) as a CLI command using [`uv`](https://docs.astral.sh/uv/guides/tools/):

```bash
uvx semgrep-mcp # see --help for more options
```

Or, run as a [Docker container](https://ghcr.io/semgrep/mcp):

```bash
docker run -i --rm ghcr.io/semgrep/mcp -t stdio
```

### Cursor

Example [`mcp.json`](https://docs.cursor.com/context/model-context-protocol)

```json
{
  "mcpServers": {
    "semgrep": {
      "command": "uvx",
      "args": ["semgrep-mcp"],
      "env": {
        "SEMGREP_APP_TOKEN": "<token>"
      }
    }
  }
}

```

Add an instruction to your [`.cursor/rules`](https://docs.cursor.com/context/rules-for-ai) to use automatically:

```text
Always scan code generated using Semgrep for security vulnerabilities
```

### ChatGPT

1. Go to the **Connector Settings** page ([direct link](https://chatgpt.com/admin/ca#settings/ConnectorSettings?create-connector=true))
1. **Name** the connection `Semgrep`
1. Set **MCP Server URL** to `https://mcp.semgrep.ai/sse`
1. Set **Authentication** to `No authentication`
1. Check the **I trust this application** checkbox
1. Click **Create**

See more details at the [official docs](https://platform.openai.com/docs/mcp).


### Hosted Server

> [!WARNING]
> [mcp.semgrep.ai](https://mcp.semgrep.ai) is an experimental server that may break unexpectedly. It will rapidly gain new functionality.🚀

#### Cursor

1. **Cmd + Shift + J** to open Cursor Settings
1. Select **MCP Tools**
1. Click **New MCP Server**.
1.

```json
{
  "mcpServers": {
    "semgrep": {
      "type": "streamable-http",
      "url": "https://mcp.semgrep.ai/mcp"
    }
  }
}
```

## Demo

<a href="https://www.loom.com/share/8535d72e4cfc4e1eb1e03ea223a702df">  </a>

## API

### Tools

Enable LLMs to perform actions, make deterministic computations, and interact with external services.

#### Scan Code

- `security_check`: Scan code for security vulnerabilities
- `semgrep_scan`: Scan code files for security vulnerabilities with a given config string
- `semgrep_scan_with_custom_rule`: Scan code files using a custom Semgrep rule

#### Understand Code

- `get_abstract_syntax_tree`: Output the Abstract Syntax Tree (AST) of code

#### Cloud Platform (login and Semgrep token required)
- `semgrep_findings`: Fetch Semgrep findings from the Semgrep AppSec Platform API

#### Meta

- `supported_languages`: Return the list of languages Semgrep supports
- `semgrep_rule_schema`: Fetches the latest semgrep rule JSON Schema

### Prompts

Reusable prompts to standardize common LLM interactions.

- `write_custom_semgrep_rule`: Return a prompt to help write a Semgrep rule

### Resources

Expose data and content to LLMs

- `semgrep://rule/schema`: Specification of the Semgrep rule YAML syntax using JSON schema
- `semgrep://rule/{rule_id}/yaml`: Full Semgrep rule in YAML format from the Semgrep registry

## Usage

This Python package is published to PyPI as [semgrep-mcp](https://pypi.org/p/semgrep-mcp) and can be installed and run with [pip](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/#install-a-package), [pipx](https://pipx.pypa.io/), [uv](https://docs.astral.sh/uv/), [poetry](https://python-poetry.org/), or any Python package manager.

```text
$ pipx install semgrep-mcp
$ semgrep-mcp --help

Usage: semgrep-mcp [OPTIONS]

  Entry point for the MCP server

  Supports both stdio and sse transports. For stdio, it will read from stdin
  and write to stdout. For sse, it will start an HTTP server on port 8000.

Options:
  -v, --version                Show version and exit.
  -t, --transport [stdio|sse]  Transport protocol to use (stdio or sse)
  -h, --help                   Show this message and exit.
```

### Standard Input/Output (stdio)

The stdio transport enables communication through standard input and output streams. This is particularly useful for local integrations and command-line tools. See the [spec](https://modelcontextprotocol.io/docs/concepts/transports#built-in-transport-types) for more details.

#### Python

```bash
semgrep-mcp
```

By default, the Python package will run in `stdio` mode. Because it's using the standard input and output streams, it will look like the tool is hanging without any output, but this is expected.

#### Docker

This server is published to Github's Container Registry ([ghcr.io/semgrep/mcp](http://ghcr.io/semgrep/mcp))

```
docker run -i --rm ghcr.io/semgrep/mcp -t stdio
```

By default, the Docker container is in `SSE` mode, so you will have to include `-t stdio` after the image name and run with `-i` to run in [interactive](https://docs.docker.com/reference/cli/docker/container/run/#interactive) mode.

### Streamable HTTP

Streamable HTTP enables streaming responses over JSON RPC via HTTP POST requests. See the [spec](https://modelcontextprotocol.io/specification/draft/basic/transports#streamable-http) for more details.

By default, the server listens on [127.0.0.1:8000/mcp](https://127.0.0.1/mcp) for client connections. To change any of this, set [FASTMCP\_\*](https://github.com/modelcontextprotocol/python-sdk/blob/main/src/mcp/server/fastmcp/server.py#L78) environment variables. _The server must be running for clients to connect to it._

#### Python

```bash
semgrep-mcp -t streamable-http
```

By default, the Python package will run in `stdio` mode, so you will have to include `-t streamable-http`.

#### Docker

```
docker run -p 8000:0000 ghcr.io/semgrep/mcp
```


### Server-sent events (SSE)

> [!WARNING]
> The MCP communiity considers this a legacy transport portcol and is really intended for backwards compatibility. [Streamable HTTP](#streamable-http) is the recommended replacement.

SSE transport enables server-to-client streaming with Server-Send Events for client-to-server and server-to-client communication. See the [spec](https://modelcontextprotocol.io/docs/concepts/transports#server-sent-events-sse) for more details.

By default, the server listens on [127.0.0.1:8000/sse](https://127.0.0.1/sse) for client connections. To change any of this, set [FASTMCP\_\*](https://github.com/modelcontextprotocol/python-sdk/blob/main/src/mcp/server/fastmcp/server.py#L78) environment variables. _The server must be running for clients to connect to it._

#### Python

```bash
semgrep-mcp -t sse
```

By default, the Python package will run in `stdio` mode, so you will have to include `-t sse`.

#### Docker

```
docker run -p 8000:0000 ghcr.io/semgrep/mcp -t sse
```

## Semgrep AppSec Platform

Optionally, to connect to Semgrep AppSec Platform:

1. [Login](https://semgrep.dev/login/) or sign up
1. Generate a token from [Settings](https://semgrep.dev/orgs/-/settings/tokens/api)
1. Add the token to your environment variables:
   - CLI (`export SEMGREP_APP_TOKEN=<token>`)

   - Docker (`docker run -e SEMGREP_APP_TOKEN=<token>`)

   - MCP config JSON

```json
    "env": {
      "SEMGREP_APP_TOKEN": "<token>"
    }
```

> [!TIP]
> Please [reach out for support](https://semgrep.dev/docs/support) if needed. ☎️

## Integrations

### Cursor IDE

Add the following JSON block to your `~/.cursor/mcp.json` global or `.cursor/mcp.json` project-specific configuration file:

```json
{
  "mcpServers": {
    "semgrep": {
      "command": "uvx",
      "args": ["semgrep-mcp"]
    }
  }
}
```

![cursor MCP settings](https://raw.githubusercontent.com/semgrep/mcp/HEAD/images/cursor.png)

See [cursor docs](https://docs.cursor.com/context/model-context-protocol) for more info.

### VS Code / Copilot

Click the install buttons at the top of this README for the quickest installation.

#### Manual Configuration

Add the following JSON block to your User Settings (JSON) file in VS Code. You can do this by pressing `Ctrl + Shift + P` and typing `Preferences: Open User Settings (JSON)`.

```json
{
  "mcp": {
    "servers": {
      "semgrep": {
        "command": "uvx",
        "args": ["semgrep-mcp"]
      }
    }
  }
}
```

Optionally, you can add it to a file called `.vscode/mcp.json` in your workspace:

```json
{
  "servers": {
    "semgrep": {
      "command": "uvx",
        "args": ["semgrep-mcp"]
    }
  }
}
```

#### Using Docker

```json
{
  "mcp": {
    "servers": {
      "semgrep": {
        "command": "docker",
        "args": [
          "run",
          "-i",
          "--rm",
          "ghcr.io/semgrep/mcp",
          "-t",
          "stdio"
        ]
      }
    }
  }
}
```

See [VS Code docs](https://code.visualstudio.com/docs/copilot/chat/mcp-servers) for more info.

### Windsurf

Add the following JSON block to your `~/.codeium/windsurf/mcp_config.json` file:

```json
{
  "mcpServers": {
    "semgrep": {
      "command": "uvx",
      "args": ["semgrep-mcp"]
    }
  }
}
```

See [Windsurf docs](https://docs.windsurf.com/windsurf/mcp) for more info.

### Claude Desktop

Here is a [short video](https://www.loom.com/share/f4440cbbb5a24149ac17cc7ddcd95cfa) showing Claude Desktop using this server to write a custom rule.

Add the following JSON block to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "semgrep": {
      "command": "uvx",
      "args": ["semgrep-mcp"]
    }
  }
}
```

See [Anthropic docs](https://docs.anthropic.com/en/docs/agents-and-tools/mcp) for more info.

### Claude Code

```bash
claude mcp add semgrep uvx semgrep-mcp
```

See [Claude Code docs](https://docs.anthropic.com/en/docs/claude-code/tutorials#set-up-model-context-protocol-mcp) for more info.

### OpenAI

See the offical docs:
- https://platform.openai.com/docs/mcp
- https://platform.openai.com/docs/guides/tools-remote-mcp

#### Agents SDK

```python
async with MCPServerStdio(
    params={
        "command": "uvx",
        "args": ["semgrep-mcp"],
    }
) as server:
    tools = await server.list_tools()
```

See [OpenAI Agents SDK docs](https://openai.github.io/openai-agents-python/mcp/) for more info.

### Custom clients

#### Example Python SSE client

See a full example in [examples/sse_client.py](examples/sse_client.py)

```python
from mcp.client.session import ClientSession
from mcp.client.sse import sse_client


async def main():
    async with sse_client("http://localhost:8000/sse") as (read_stream, write_stream):
        async with ClientSession(read_stream, write_stream) as session:
            await session.initialize()
            results = await session.call_tool(
                "semgrep_scan",
                {
                    "code_files": [
                        {
                            "path": "hello_world.py",
                            "content": "def hello(): print('Hello, World!')",
                        }
                    ]
                },
            )
            print(results)
```

> [!TIP]
> Some client libraries want the `URL`: [http://localhost:8000/sse](http://localhost:8000/sse)
> and others only want the `HOST`: `localhost:8000`.
> Try out the `URL` in a web browser to confirm the server is running, and there are no network issues.

See [official SDK docs](https://modelcontextprotocol.io/clients#adding-mcp-support-to-your-application) for more info.

## Contributing, community, and running from source

> [!NOTE]
> We love your feedback, bug reports, feature requests, and code. Join the `#mcp` [community Slack](https://go.semgrep.dev/slack) channel!

See [CONTRIBUTING.md](CONTRIBUTING.md) for more info and details on how to run from the MCP server from source code.

### Similar tools 🔍

- [semgrep-vscode](https://github.com/semgrep/semgrep-vscode) - Official VS Code extension
- [semgrep-intellij](https://github.com/semgrep/semgrep-intellij) - IntelliJ plugin

### Community projects 🌟

- [semgrep-rules](https://github.com/semgrep/semgrep-rules) - The official collection of Semgrep rules
- [mcp-server-semgrep](https://github.com/Szowesgad/mcp-server-semgrep) - Original inspiration written by [Szowesgad](https://github.com/Szowesgad) and [stefanskiasan](https://github.com/stefanskiasan)

### MCP server registries

- [Glama](https://glama.ai/mcp/servers/@semgrep/mcp)

<a href="https://glama.ai/mcp/servers/@semgrep/mcp">
 
 </a>

- [MCP.so](https://mcp.so/server/mcp/semgrep)

______________________________________________________________________

Made with ❤️ by the [Semgrep Team](https://semgrep.dev/about/)
