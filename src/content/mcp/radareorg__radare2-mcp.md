---
name: "radareorg/radare2-mcp"
description: "MCP server for Radare2 disassembler. Provides AI with capability to disassemble and look into binaries for reverse engineering."
category: "Security"
repo: "radareorg/radare2-mcp"
stars: 237
url: "https://github.com/radareorg/radare2-mcp"
body_length: 7116
license: "MIT"
language: "C"
homepage: "https://github.com/dnakov/radare2-mcp"
body_tr: |-
  # Radare2 MCP Server

  [![ci](https://github.com/radareorg/radare2-mcp/actions/workflows/ci.yml/badge.svg)](https://github.com/radareorg/radare2-mcp/actions/workflows/ci.yml)
  [![radare2](https://img.shields.io/badge/radare2-6.1.2-green)](https://github.com/radareorg/radare2)



  **radare2**'yi OpenCode, Mai, VSCode, Claude, CLION gibi yapay zeka ajanlarıyla kullanmak için bir MCP sunucusu.

  ## Özellikler

  Bu uygulama aşağıdakileri sağlar:

  - 💻 Tamamen C dilinde yazılmış, native r2 API'lerini kullanıyor
  - 🧩 CLI'dan, r2 plugin'i olarak ve MCP sunucusu olarak çalışıyor
  - 🔍 radare2 ile sorunsuz binary analizi
  - 🔗 r2pipe aracılığıyla herhangi bir yerel veya uzak r2/iaito oturumuna bağlanma
  - 🔒 Salt okunur modu, sandbox kilidi ve tool kısıtlamasını destekliyor
  - 🔩 İnce taneli tool yapılandırması
  - 🔁 Doğrudan stdin/stdout iletişim modeli
  - 🌐 İsteğe bağlı `X-Session-ID` multiplexing ile HTTP MCP sunucu modu
  - 🛠️ r2 komutlarını veya r2js scriptlerini çalıştırmak için isteğe bağlı ham erişim

  ## Kurulum




  ### r2pm Kullanarak

  Paketi kurmak için en basit yol `r2pm` kullanmaktır:

  ```bash
  $ r2pm -Uci r2mcp
  ```

  `r2mcp` çalıştırılabilir dosyası, ev dizininizde r2pm'nin bindir'ine kopyalanacaktır. Ancak, bu ikili dosyanın doğrudan shell'den çalıştırılması amaçlanmamıştır; yalnızca tercih ettiğiniz dil modelinin MCP hizmet işleyicisi tarafından başlatıldığında çalışacaktır.

  ```bash
  $ r2pm -r r2mcp
  ```

  İşte genel mcpServer JSON yapılandırma dosyası:

  ```json
  {
    "mcpServers": {
      "radare2": {
        "command": "r2pm",
        "args": ["-r", "r2mcp"]
      }
    }
  }
  ```

  ### Codex

  Codex plugin'ini kurmak için aşağıdaki komutu çalıştırın:

  ```bash
  make codex-plugin-install
  ```

  Bu, ev dizininizde kişisel bir marketplace oluşturacak ve dist/codex-plugin içindeki dosyaları kopyalayacaktır.

  ### Docker Kullanarak

  Alternatif olarak, Docker imajını oluşturabilirsiniz:

  ```bash
  docker build -t r2mcp .
  ```

  Kullanmak üzere MCP istemci yapılandırma dosyanızı güncelleyin (aşağıya bakın):

  - `"command": "docker"`
  - `"args": ["run", "--rm", "-i", "-v", "/tmp/data:/data", "r2mcp"]`.

  ## Yapılandırma

  ### HTTP Sunucu Modu

  stdin/stdout kullanmak yerine r2mcp'yi HTTP MCP sunucusu olarak çalıştırmak için `-H <port>` kullanın:

  ```bash
  r2mcp -H 8765
  ```

  Oturum başına HTTP durumu `-X max[:idle_seconds]` ile etkinleştirilir ve `X-Session-ID` istek başlığı tarafından yönlendirilir:

  ```bash
  r2mcp -H 8765 -X 8:600
  ```

  HTTP bearer kimlik doğrulaması `-a <token>` ile etkinleştirilir. İstemciler her `GET` ve `POST` isteğinde `Authorization: Bearer <token>` göndermelidir:

  ```bash
  r2mcp -H 8765 -a my-secret-token
  ```

  Başlangıçta rastgele bir token oluşturmak için `-A` veya `-a random` kullanın. Oluşturulan token stderr'de bir kez yazdırılır:

  ```bash
  r2mcp -H 8765 -A
  ```

  Aynı token ayarı `R2MCP_AUTH_TOKEN` ile sağlanabilir; rastgele bir tane oluşturmak için `random` olarak ayarlayın.

  `-X`, radare2 ABI 91 veya daha yeni bir sürümü gerektirir çünkü eski radare2 başlıkları HTTP istek başlığı API'sini göstermez. Eski ABI'lerle, `-H` hala tek bir paylaşılan HTTP sunucusu olarak çalışır, ancak `-X` göz ardı edilir. Bearer kimlik doğrulaması da bu başlık API'sini gerektirir.

  ### r2 Core Plugin Modu

  r2 core plugin'i, mevcut bir radare2 oturumunda `r2mcp` komutunu ortaya çıkarır. HTTP modunu r2'den başlatmak, mevcut `RCore`'u yeniden kullanır, bu nedenle MCP araçları o oturumdaki zaten yüklenmiş dosya ve analiz durumunda çalışır:

  ```bash
  r2 -e r2mcp.port=8765 -c 'r2mcp start' /bin/ls
  ```

  Yararlı alt komutlar:

  - `r2mcp start` veya `r2mcp http` arka planda HTTP MCP sunucusunu başlatır.
  - `r2mcp stop`, `r2mcp restart` ve `r2mcp status` arka plan sunucusunu yönetir.
  - `r2mcp logs on|off` ve `r2mcp logs file <path>` plugin hata ayıklama günlüklerini kontrol eder.
  - `r2mcp approve on|off` ve `r2mcp approve url <url>` denetçi onaylarını kontrol eder.
  - `r2mcp yolo on|off` onayları devre dışı bırakır ve tehlikeli run araçlarını ortaya çıkarır.
  - `r2mcp config` `r2mcp.*` eval anahtarlarını listeler.

  Plugin, CLI tarafından ortaya çıkarılan aynı sunucu seçenekleri için eval anahtarlarını kaydeder:
  `r2mcp.port`, `r2mcp.log`, `r2mcp.logfile`, `r2mcp.auth`, `r2mcp.approve`, `r2mcp.svc`,
  `r2mcp.yolo`, `r2mcp.mini`, `r2mcp.permissive`, `r2mcp.run`,
  `r2mcp.readonly`, `r2mcp.ignore_analysis`, `r2mcp.prompts`,
  `r2mcp.prompts.dir`, `r2mcp.sandbox`, `r2mcp.sandbox.grain`,
  `r2mcp.content`, `r2mcp.enabled`, `r2mcp.disabled`,
  `r2mcp.session_tools`, `r2mcp.sessions`, `r2mcp.sessions.max`,
  `r2mcp.sessions.timeout`, `r2mcp.decompiler` ve `r2mcp.baseurl`.

  Plugin'i `-i` ile manuel olarak yüklerken, bu anahtarları plugin yüklendikten sonra ayarlayın, örneğin `-c 'e r2mcp.port=8765'` ile, çünkü radare2 erken `-e` seçeneklerini ad hoc plugin başlatılmasından önce işler.

  ### Claude Desktop Entegrasyonu

  Claude Desktop uygulamasında, Geliştirici ayarlarını açmak için `CMD + ,` tuşuna basın. Yapılandırma dosyasını düzenleyin ve aşağıda açıklandığı gibi JSON dosyasını düzenledikten sonra istemciyi yeniden başlatın:

  1. Claude Desktop yapılandırma dosyanızı bulun:

     - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
     - Windows: `%APPDATA%\Claude\claude_desktop_config.json`

  2. Yapılandırma dosyanıza aşağıdakini ekleyin:

  ```json
  {
    "mcpServers": {
      "radare2": {
        "command": "r2pm",
        "args": ["-r", "r2mcp"]
      }
    }
  }
  ```

  ## VS Code Entegrasyonu

  GitHub Copilot Chat'i Visual Studio Code'da r2mcp ile kullanmak için [bunu kullanıcı yapılandırmanıza ekleyerek](https://code.visualstudio.com/docs/copilot/chat/mcp-servers#_add-an-mcp-server-to-your-user-configuration) (diğer seçeneklere [buradan](https://code.visualstudio.com/docs/copilot/chat/mcp-servers#_add-an-mcp-server) bakın):

  1. `CMD + Shift + P` (macOS) veya `Ctrl + Shift + P` (Windows/Linux) ile Komut Paletini açın.
  2. `Copilot: Open User Configuration` öğesini arayın ve seçin (genellikle macOS'ta `~/Library/Application Support/Code/User/mcp.json` içinde bulunur).
  3. Yapılandırma dosyanıza aşağıdakini ekleyin:

  ```json
  {
    "servers": {
      "radare2": {
        "type": "stdio",
        "command": "r2pm",
        "args": ["-r", "r2mcp"]
      }
    },
    "inputs": []
  }
  ```

  ## Zed Entegrasyonu

  r2mcp'yi [yapılandırmanıza ekleyerek](https://zed.dev/docs/ai/mcp) Zed ile de kullanabilirsiniz:

  1. Komut paletini açın: `CMD + Shift + P` (macOS) veya `Ctrl + Shift + P` (Windows/Linux).
  2. `agent: open configuration` veya `settings` arayın.
  3. Sunucunuzu şu şekilde ekleyin:

  ```json
    "context_servers": {
      "r2-mcp-server": {
        "source": "custom",
        "command": "r2pm",
        "args": ["-r", "r2mcp"],
        "env": {}
      }
    }
  ```
  Not: Bunu kullanabilmek için Claude, Gemini vb. gibi başka bir LLM ajanına ihtiyacınız olacaktır.

  ## Geliştiriciler İçin

  ### Kaynaktan Derleme

  #### Linux/macOS

  Sunucuyu yerel olarak test etmek için make ile derleyip yükleyebilirsiniz:

  ```bash
  make install
  ```

  Bu, sunucuyu derleyecek ve `r2mcp` binary'sini macOS'ta `/usr/local/bin` içine yerleştirecektir.

  #### Windows

  Windows için, CI'da yapıldığı gibi meson ve ninja'yı kullanın:

  ```cmd
  meson b
  ninja -C b
  ```
---

# Radare2 MCP Server

[![ci](https://github.com/radareorg/radare2-mcp/actions/workflows/ci.yml/badge.svg)](https://github.com/radareorg/radare2-mcp/actions/workflows/ci.yml)
[![radare2](https://img.shields.io/badge/radare2-6.1.2-green)](https://github.com/radareorg/radare2)



An MCP server to use **radare2** with AI agents such as OpenCode, Mai, VSCode, Claude, CLION, ...

## Features

This implementation provides:

- 💻 Fully written in C using the native r2 APIs
- 🧩 Works from the CLI, as an r2 plugin and as an MCP server
- 🔍 Seamless binary analysis with radare2
- 🔗 Connect to any local or remote r2/iaito session via r2pipe
- 🔒 Supports readonly mode, sandbox lock and restrict tools
- 🔩 Fine grained tools configuration
- 🔁 Direct stdin/stdout communication model
- 🌐 HTTP MCP server mode with optional `X-Session-ID` multiplexing
- 🛠️ Optional raw access to run r2 commands or r2js scripts

## Installation




### Using r2pm

The simplest way to install the package is by using `r2pm`:

```bash
$ r2pm -Uci r2mcp
```

The `r2mcp` executable will be copied into r2pm's bindir in your home directory. However, this binary is not supposed to be executed directly from the shell; it will only work when launched by the MCP service handler of your language model of choice.

```bash
$ r2pm -r r2mcp
```

That's the common mcpServer JSON configuration file:

```json
{
  "mcpServers": {
    "radare2": {
      "command": "r2pm",
      "args": ["-r", "r2mcp"]
    }
  }
}
```

### Codex

To install the codex plugin just run the following command:

```bash
make codex-plugin-install
```

This will create a personal marketplace in your home and copy the files from dist/codex-plugin inside.

### Using Docker

Alternatively, you can build the Docker image:

```bash
docker build -t r2mcp .
```

Update your MCP client configuration file (see below) to use the Docker image to use:

- `"command": "docker"`
- `"args": ["run", "--rm", "-i", "-v", "/tmp/data:/data", "r2mcp"]`.

## Configuration

### HTTP Server Mode

Use `-H <port>` to run r2mcp as an HTTP MCP server instead of using
stdin/stdout:

```bash
r2mcp -H 8765
```

Per-session HTTP state is enabled with `-X max[:idle_seconds]` and routed by
the `X-Session-ID` request header:

```bash
r2mcp -H 8765 -X 8:600
```

HTTP bearer authentication is enabled with `-a <token>`. Clients must send
`Authorization: Bearer <token>` on every `GET` and `POST` request:

```bash
r2mcp -H 8765 -a my-secret-token
```

Use `-A` or `-a random` to generate a random token at startup. The generated
token is printed once on stderr:

```bash
r2mcp -H 8765 -A
```

The same token setting can be supplied with `R2MCP_AUTH_TOKEN`; set it to
`random` to generate one.

`-X` requires radare2 ABI 91 or newer because older radare2 headers do not
expose the HTTP request header API. With older ABIs, `-H` still works as a
single shared HTTP server, but `-X` is ignored. Bearer authentication also
requires this header API.

### r2 Core Plugin Mode

The r2 core plugin exposes the `r2mcp` command inside an existing radare2
session. Starting HTTP mode from r2 reuses the current `RCore`, so MCP tools
operate on the file and analysis state already loaded in that session:

```bash
r2 -e r2mcp.port=8765 -c 'r2mcp start' /bin/ls
```

Useful subcommands:

- `r2mcp start` or `r2mcp http` starts the HTTP MCP server in the background.
- `r2mcp stop`, `r2mcp restart`, and `r2mcp status` manage the background server.
- `r2mcp logs on|off` and `r2mcp logs file <path>` control plugin debug logs.
- `r2mcp approve on|off` and `r2mcp approve url <url>` control supervisor approvals.
- `r2mcp yolo on|off` disables approvals and exposes dangerous run tools.
- `r2mcp config` lists the `r2mcp.*` eval keys.

The plugin registers eval keys for the same server options exposed by the CLI:
`r2mcp.port`, `r2mcp.log`, `r2mcp.logfile`, `r2mcp.auth`, `r2mcp.approve`, `r2mcp.svc`,
`r2mcp.yolo`, `r2mcp.mini`, `r2mcp.permissive`, `r2mcp.run`,
`r2mcp.readonly`, `r2mcp.ignore_analysis`, `r2mcp.prompts`,
`r2mcp.prompts.dir`, `r2mcp.sandbox`, `r2mcp.sandbox.grain`,
`r2mcp.content`, `r2mcp.enabled`, `r2mcp.disabled`,
`r2mcp.session_tools`, `r2mcp.sessions`, `r2mcp.sessions.max`,
`r2mcp.sessions.timeout`, `r2mcp.decompiler`, and `r2mcp.baseurl`.

When loading the plugin manually with `-i`, set these keys after the plugin is
loaded, for example with `-c 'e r2mcp.port=8765'`, because radare2 processes
early `-e` options before ad hoc plugin initialization.

### Claude Desktop Integration

In the Claude Desktop app, press `CMD + ,` to open the Developer settings. Edit the configuration file and restart the client after editing the JSON file as explained below:

1. Locate your Claude Desktop configuration file:

   - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`

2. Add the following to your configuration file:

```json
{
  "mcpServers": {
    "radare2": {
      "command": "r2pm",
      "args": ["-r", "r2mcp"]
    }
  }
}
```

## VS Code Integration

To use r2mcp with GitHub Copilot Chat in Visual Studio Code by [adding it to your user configuration](https://code.visualstudio.com/docs/copilot/chat/mcp-servers#_add-an-mcp-server-to-your-user-configuration) (see other options [here](https://code.visualstudio.com/docs/copilot/chat/mcp-servers#_add-an-mcp-server)):

1. Open the Command Palette with `CMD + Shift + P` (macOS) or `Ctrl + Shift + P` (Windows/Linux).
2. Search for and select `Copilot: Open User Configuration` (typically found in `~/Library/Application Support/Code/User/mcp.json` in macOS).
3. Add the following to your configuration file:

```json
{
  "servers": {
    "radare2": {
      "type": "stdio",
      "command": "r2pm",
      "args": ["-r", "r2mcp"]
    }
  },
  "inputs": []
}
```

## Zed Integration

You can use r2mcp with Zed as well by [adding it to your configuration](https://zed.dev/docs/ai/mcp):

1. Open the command palette: `CMD + Shift + P` (macOS) or `Ctrl + Shift + P` (Windows/Linux). 
2. Search of `agent: open configuration` or search of `settings`.
3. Add your server as such:

```json
  "context_servers": {
    "r2-mcp-server": {
      "source": "custom",
      "command": "r2pm",
      "args": ["-r", "r2mcp"],
      "env": {}
    }
  }
```
Note: you will need another LLM agent, such as Claude, Gemini or else to be able to use it.

## For Developers

### Build from Source

#### Linux/macOS

To test the server locally, you can build and install it with make:

```bash
make install
```

This will compile the server and place the `r2mcp` binary in `/usr/local/bin` on macOS.

#### Windows

For Windows, just use meson and ninja like it's done in the CI:

```cmd
meson b
ninja -C b
```
