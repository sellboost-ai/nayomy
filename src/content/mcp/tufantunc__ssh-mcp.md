---
name: "tufantunc/ssh-mcp"
description: "MCP server exposing SSH control for Linux and Windows servers via Model Context Protocol. Securely execute remote shell commands with password or SSH key authentication."
category: "Command Line"
repo: "tufantunc/ssh-mcp"
stars: 470
url: "https://github.com/tufantunc/ssh-mcp"
body_length: 7907
license: "MIT"
language: "TypeScript"
body_tr: |-
  # SSH MCP Sunucusu

  [![NPM Version](https://img.shields.io/npm/v/ssh-mcp)](https://www.npmjs.com/package/ssh-mcp)
  [![Downloads](https://img.shields.io/npm/dm/ssh-mcp)](https://www.npmjs.com/package/ssh-mcp)
  [![Node Version](https://img.shields.io/node/v/ssh-mcp)](https://nodejs.org/)
  [![License](https://img.shields.io/github/license/tufantunc/ssh-mcp)](./LICENSE)
  [![GitHub Stars](https://img.shields.io/github/stars/tufantunc/ssh-mcp?style=social)](https://github.com/tufantunc/ssh-mcp/stargazers)
  [![GitHub Forks](https://img.shields.io/github/forks/tufantunc/ssh-mcp?style=social)](https://github.com/tufantunc/ssh-mcp/forks)
  [![Build Status](https://github.com/tufantunc/ssh-mcp/actions/workflows/publish.yml/badge.svg)](https://github.com/tufantunc/ssh-mcp/actions)
  [![GitHub issues](https://img.shields.io/github/issues/tufantunc/ssh-mcp)](https://github.com/tufantunc/ssh-mcp/issues)

  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/tufantunc/ssh-mcp)](https://archestra.ai/mcp-catalog/tufantunc__ssh-mcp)

  **SSH MCP Sunucusu**, Linux ve Windows sistemleri için SSH kontrolünü açığa çıkaran ve LLM'lerin ile diğer MCP istemcilerinin SSH aracılığıyla shell komutlarını güvenli bir şekilde yürütmesini sağlayan yerel bir Model Context Protocol (MCP) sunucusudur.

  ## İçerik

  - [Hızlı Başlangıç](#hızlı-başlangıç)
  - [Özellikler](#özellikler)
  - [Kurulum](#kurulum)
  - [İstemci Kurulumu](#istemci-kurulumu)
  - [Test](#test)
  - [Sorumluluk Reddi](#sorumluluk-reddi)
  - [Destek](#destek)

  ## Hızlı Başlangıç

  - [Yükleyin](#kurulum) SSH MCP Sunucusu
  - [Yapılandırın](#configuration) SSH MCP Sunucusu
  - [Kurun](#istemci-kurulumu) MCP İstemcinizi (örn. Claude Desktop, Cursor, vb)
  - Doğal dil aracılığıyla Linux veya Windows sunucunuzda uzak shell komutlarını çalıştırın

  ## Özellikler

  - SSH yeteneklerini açığa çıkaran MCP uyumlu sunucu
  - Linux ve Windows sistemlerinde uzak shell komutlarını çalıştırma
  - Şifre veya SSH anahtarı aracılığıyla güvenli kimlik doğrulama
  - TypeScript ve resmi MCP SDK ile oluşturulmuş
  - **Yapılandırılabilir zaman aşımı koruması** otomatik işlem iptal edilmesi ile
  - **Zarif zaman aşımı işleme** - bağlantıları kapatmadan önce asılı kalmış işlemleri öldürmeyi dener

  ### Araçlar

  - `exec`: Uzak sunucuda shell komutu çalıştır
    - **Parametreler:**
      - `command` (gerekli): Uzak SSH sunucusunda çalıştırılacak shell komutu
      - `description` (opsiyonel): Bu komutun ne yapacağına dair isteğe bağlı açıklama (yorum olarak eklenir)
    - **Zaman Aşımı Yapılandırması:**

  - `sudo-exec`: Shell komutunu sudo yükseltme ile çalıştır
    - **Parametreler:**
      - `command` (gerekli): Sudo kullanarak root olarak çalıştırılacak shell komutu
      - `description` (opsiyonel): Bu komutun ne yapacağına dair isteğe bağlı açıklama (yorum olarak eklenir)
    - **Notlar:**
      - Şifreli sudo için `--sudoPassword` ayarlanması gerekir
      - Startup sırasında `--disableSudo` bayrağı geçilirse devre dışı bırakılabilir (sudo erişimi gerekli değilse veya mevcut değilse)
      - Kalıcı root erişimi için `--suPassword` kullanmayı düşünün (bu bir root shell oluşturur)
      - Sunucu `--disableSudo` ile başlatılırsa araç hiç kullanılamaz
    - **Zaman Aşımı Yapılandırması:**
      - Zaman aşımı `--timeout` komut satırı argümanı aracılığıyla yapılandırılır (milisaniye cinsinden)
      - Varsayılan zaman aşımı: 60000ms (1 dakika)
      - Bir komut zaman aşımına uğradığında, sunucu bağlantıyı kapatmadan önce çalışan işlemi otomatik olarak iptal etmeye çalışır
    - **Maksimum Komut Uzunluğu Yapılandırması:**
      - Maksimum komut karakterleri `--maxChars` aracılığıyla yapılandırılır
      - Varsayılan: `1000`
      - Sınır yok modu: `--maxChars=none` veya herhangi bir `<= 0` değeri ayarlayın (örn. `--maxChars=0`)

  ## Kurulum

  1. **Depoyu klonlayın:**
     ```bash
     git clone https://github.com/tufantunc/ssh-mcp.git
     cd ssh-mcp
     ```
  2. **Bağımlılıkları yükleyin:**
     ```bash
     npm install
     ```

  ## İstemci Kurulumu

  IDE'nizi veya Cursor, Windsurf, Claude Desktop gibi LLM'nizi bu MCP Sunucusunu kullanacak şekilde yapılandırabilirsiniz.

  **Gerekli Parametreler:**
  - `host`: Linux veya Windows sunucusunun Hostname'i veya IP'si
  - `user`: SSH kullanıcı adı

  **İsteğe Bağlı Parametreler:**
  - `port`: SSH portu (varsayılan: 22)
  - `password`: SSH şifresi (veya anahtar tabanlı kimlik doğrulama için `key` kullanın)
  - `key`: Özel SSH anahtarının yolu
  - `sudoPassword`: Sudo yükseltme şifresi (sudo ile komutlar çalıştırırken)
  - `suPassword`: Su yükseltme şifresi (kalıcı root shell gerektiğinde)
  - `timeout`: Komut yürütme zaman aşımı (milisaniye cinsinden) (varsayılan: 60000ms = 1 dakika)
  - `maxChars`: `command` girişi için izin verilen maksimum karakter (varsayılan: 1000). Sınırı devre dışı bırakmak için `none` veya `0` kullanın.
  - `disableSudo`: `sudo-exec` aracını tamamen devre dışı bırakmak için bayrak. Sudo erişimi gerekli olmadığında veya kullanılamadığında faydalıdır.


  ```commandline
  {
      "mcpServers": {
          "ssh-mcp": {
              "command": "npx",
              "args": [
                  "ssh-mcp",
                  "-y",
                  "--",
                  "--host=1.2.3.4",
                  "--port=22",
                  "--user=root",
                  "--password=pass",
                  "--key=path/to/key",
                  "--timeout=30000",
                  "--maxChars=none"
              ]
          }
      }
  }
  ```

  ### Claude Code

  Bu MCP sunucusunu Claude Code'a `claude mcp add` komutu kullanarak ekleyebilirsiniz. Bu, Claude Code için önerilen yöntemdir.

  **Temel Kurulum:**

  ```bash
  claude mcp add --transport stdio ssh-mcp -- npx -y ssh-mcp -- --host=YOUR_HOST --user=YOUR_USER --password=YOUR_PASSWORD
  ```

  **Kurulum Örnekleri:**

  **Şifre Kimlik Doğrulama ile:**
  ```bash
  claude mcp add --transport stdio ssh-mcp -- npx -y ssh-mcp -- --host=192.168.1.100 --port=22 --user=admin --password=your_password
  ```

  **SSH Anahtarı Kimlik Doğrulama ile:**
  ```bash
  claude mcp add --transport stdio ssh-mcp -- npx -y ssh-mcp -- --host=example.com --user=root --key=/path/to/private/key
  ```

  **Özel Zaman Aşımı ve Sınır Yok Karakter Modu ile:**
  ```bash
  claude mcp add --transport stdio ssh-mcp -- npx -y ssh-mcp -- --host=192.168.1.100 --user=admin --password=your_password --timeout=120000 --maxChars=none
  ```

  **Sudo ve Su Desteği ile:**
  ```bash
  claude mcp add --transport stdio ssh-mcp -- npx -y ssh-mcp -- --host=192.168.1.100 --user=admin --password=your_password --sudoPassword=sudo_pass --suPassword=root_pass
  ```

  **Kurulum Kapsamları:**

  Sunucu eklerken kapsamı belirtebilirsiniz:

  - **Yerel kapsam** (varsayılan): Geçerli projede kişisel kullanım için
    ```bash
    claude mcp add --transport stdio ssh-mcp --scope local -- npx -y ssh-mcp -- --host=YOUR_HOST --user=YOUR_USER --password=YOUR_PASSWORD
    ```

  - **Proje kapsamı**: Takımınızla `.mcp.json` dosyası aracılığıyla paylaşın
    ```bash
    claude mcp add --transport stdio ssh-mcp --scope project -- npx -y ssh-mcp -- --host=YOUR_HOST --user=YOUR_USER --password=YOUR_PASSWORD
    ```

  - **Kullanıcı kapsamı**: Tüm projelerinizde kullanılabilir
    ```bash
    claude mcp add --transport stdio ssh-mcp --scope user -- npx -y ssh-mcp -- --host=YOUR_HOST --user=YOUR_USER --password=YOUR_PASSWORD
    ```


  **Kurulumu Doğrulayın:**

  Sunucuyu ekledikten sonra Claude Code'u yeniden başlatın ve Cascade'den bir komut çalıştırmasını isteyin:
  ```
  "Can you run 'ls -la' on the remote server?"
  ```

  Claude Code'da MCP hakkında daha fazla bilgi için [resmi belgelere](https://docs.claude.com/en/docs/claude-code/mcp) bakın.

  ## Test

  Bu MCP Sunucusunun görsel hata ayıklaması için [MCP Inspector](https://modelcontextprotocol.io/docs/tools/inspector) kullanabilirsiniz.

  ```sh
  npm run inspect
  ```

  ## Sorumluluk Reddi

  SSH MCP Sunucusu [MIT Lisansı](./LICENSE) altında sağlanmaktadır. Kendi sorumluluğunuzda kullanın. Bu proje, herhangi bir SSH veya MCP sağlayıcısı tarafından bağlı değildir veya onaylanmamıştır.

  ## Katkıda Bulunma

  Katkılara açığız! Daha fazla bilgi için lütfen [Katkı Kılavuzumuza](./CONTRIBUTING.md) bakın.

  ## Davranış Kuralları

  Bu proje, herkes için hoş bir ortam sağlamak amacıyla [Davranış Kurallarına](./CODE_OF_CONDUCT.md) uyar.

  ## Destek

  SSH MCP Sunucusu'nun faydalı olduğunu düşünüyorsanız depoyu yıldızlamayı veya katkıda bulunmayı düşünün! Pull istekleri ve geri bildirimler hoş geldiniz.
---

# SSH MCP Server

[![NPM Version](https://img.shields.io/npm/v/ssh-mcp)](https://www.npmjs.com/package/ssh-mcp)
[![Downloads](https://img.shields.io/npm/dm/ssh-mcp)](https://www.npmjs.com/package/ssh-mcp)
[![Node Version](https://img.shields.io/node/v/ssh-mcp)](https://nodejs.org/)
[![License](https://img.shields.io/github/license/tufantunc/ssh-mcp)](./LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/tufantunc/ssh-mcp?style=social)](https://github.com/tufantunc/ssh-mcp/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/tufantunc/ssh-mcp?style=social)](https://github.com/tufantunc/ssh-mcp/forks)
[![Build Status](https://github.com/tufantunc/ssh-mcp/actions/workflows/publish.yml/badge.svg)](https://github.com/tufantunc/ssh-mcp/actions)
[![GitHub issues](https://img.shields.io/github/issues/tufantunc/ssh-mcp)](https://github.com/tufantunc/ssh-mcp/issues)

[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/tufantunc/ssh-mcp)](https://archestra.ai/mcp-catalog/tufantunc__ssh-mcp)

**SSH MCP Server** is a local Model Context Protocol (MCP) server that exposes SSH control for Linux and Windows systems, enabling LLMs and other MCP clients to execute shell commands securely via SSH.

## Contents

- [Quick Start](#quick-start)
- [Features](#features)
- [Installation](#installation)
- [Client Setup](#client-setup)
- [Testing](#testing)
- [Disclaimer](#disclaimer)
- [Support](#support)

## Quick Start

- [Install](#installation) SSH MCP Server
- [Configure](#configuration) SSH MCP Server
- [Set up](#client-setup) your MCP Client (e.g. Claude Desktop, Cursor, etc)
- Execute remote shell commands on your Linux or Windows server via natural language

## Features

- MCP-compliant server exposing SSH capabilities
- Execute shell commands on remote Linux and Windows systems
- Secure authentication via password or SSH key
- Built with TypeScript and the official MCP SDK
- **Configurable timeout protection** with automatic process abortion
- **Graceful timeout handling** - attempts to kill hanging processes before closing connections

### Tools

- `exec`: Execute a shell command on the remote server
  - **Parameters:**
    - `command` (required): Shell command to execute on the remote SSH server
    - `description` (optional): Optional description of what this command will do (appended as a comment)
  - **Timeout Configuration:**

- `sudo-exec`: Execute a shell command with sudo elevation
  - **Parameters:**
    - `command` (required): Shell command to execute as root using sudo
    - `description` (optional): Optional description of what this command will do (appended as a comment)
  - **Notes:**
    - Requires `--sudoPassword` to be set for password-protected sudo
    - Can be disabled by passing the `--disableSudo` flag at startup if sudo access is not needed or not available
    - For persistent root access, consider using `--suPassword` instead which establishes a root shell
    - Tool will not be available at all if server is started with `--disableSudo`
  - **Timeout Configuration:**
    - Timeout is configured via command line argument `--timeout` (in milliseconds)
    - Default timeout: 60000ms (1 minute)
    - When a command times out, the server automatically attempts to abort the running process before closing the connection
  - **Max Command Length Configuration:**
    - Max command characters are configured via `--maxChars`
    - Default: `1000`
    - No-limit mode: set `--maxChars=none` or any `<= 0` value (e.g. `--maxChars=0`)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tufantunc/ssh-mcp.git
   cd ssh-mcp
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

## Client Setup

You can configure your IDE or LLM like Cursor, Windsurf, Claude Desktop to use this MCP Server.

**Required Parameters:**
- `host`: Hostname or IP of the Linux or Windows server
- `user`: SSH username

**Optional Parameters:**
- `port`: SSH port (default: 22)
- `password`: SSH password (or use `key` for key-based auth)
- `key`: Path to private SSH key
- `sudoPassword`: Password for sudo elevation (when executing commands with sudo)
- `suPassword`: Password for su elevation (when you need a persistent root shell)
- `timeout`: Command execution timeout in milliseconds (default: 60000ms = 1 minute)
- `maxChars`: Maximum allowed characters for the `command` input (default: 1000). Use `none` or `0` to disable the limit.
- `disableSudo`: Flag to disable the `sudo-exec` tool completely. Useful when sudo access is not needed or not available.


```commandline
{
    "mcpServers": {
        "ssh-mcp": {
            "command": "npx",
            "args": [
                "ssh-mcp",
                "-y",
                "--",
                "--host=1.2.3.4",
                "--port=22",
                "--user=root",
                "--password=pass",
                "--key=path/to/key",
                "--timeout=30000",
                "--maxChars=none"
            ]
        }
    }
}
```

### Claude Code

You can add this MCP server to Claude Code using the `claude mcp add` command. This is the recommended method for Claude Code.

**Basic Installation:**

```bash
claude mcp add --transport stdio ssh-mcp -- npx -y ssh-mcp -- --host=YOUR_HOST --user=YOUR_USER --password=YOUR_PASSWORD
```

**Installation Examples:**

**With Password Authentication:**
```bash
claude mcp add --transport stdio ssh-mcp -- npx -y ssh-mcp -- --host=192.168.1.100 --port=22 --user=admin --password=your_password
```

**With SSH Key Authentication:**
```bash
claude mcp add --transport stdio ssh-mcp -- npx -y ssh-mcp -- --host=example.com --user=root --key=/path/to/private/key
```

**With Custom Timeout and No Character Limit:**
```bash
claude mcp add --transport stdio ssh-mcp -- npx -y ssh-mcp -- --host=192.168.1.100 --user=admin --password=your_password --timeout=120000 --maxChars=none
```

**With Sudo and Su Support:**
```bash
claude mcp add --transport stdio ssh-mcp -- npx -y ssh-mcp -- --host=192.168.1.100 --user=admin --password=your_password --sudoPassword=sudo_pass --suPassword=root_pass
```

**Installation Scopes:**

You can specify the scope when adding the server:

- **Local scope** (default): For personal use in the current project
  ```bash
  claude mcp add --transport stdio ssh-mcp --scope local -- npx -y ssh-mcp -- --host=YOUR_HOST --user=YOUR_USER --password=YOUR_PASSWORD
  ```

- **Project scope**: Share with your team via `.mcp.json` file
  ```bash
  claude mcp add --transport stdio ssh-mcp --scope project -- npx -y ssh-mcp -- --host=YOUR_HOST --user=YOUR_USER --password=YOUR_PASSWORD
  ```

- **User scope**: Available across all your projects
  ```bash
  claude mcp add --transport stdio ssh-mcp --scope user -- npx -y ssh-mcp -- --host=YOUR_HOST --user=YOUR_USER --password=YOUR_PASSWORD
  ```


**Verify Installation:**

After adding the server, restart Claude Code and ask Cascade to execute a command:
```
"Can you run 'ls -la' on the remote server?"
```

For more information about MCP in Claude Code, see the [official documentation](https://docs.claude.com/en/docs/claude-code/mcp).

## Testing

You can use the [MCP Inspector](https://modelcontextprotocol.io/docs/tools/inspector) for visual debugging of this MCP Server.

```sh
npm run inspect
```

## Disclaimer

SSH MCP Server is provided under the [MIT License](./LICENSE). Use at your own risk. This project is not affiliated with or endorsed by any SSH or MCP provider.

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](./CONTRIBUTING.md) for more information.

## Code of Conduct

This project follows a [Code of Conduct](./CODE_OF_CONDUCT.md) to ensure a welcoming environment for everyone.

## Support

If you find SSH MCP Server helpful, consider starring the repository or contributing! Pull requests and feedback are welcome.
