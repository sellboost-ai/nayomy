---
name: "tumf/mcp-shell-server"
description: "A secure shell command execution server implementing the Model Context Protocol (MCP)"
description_tr: "Model Context Protocol (MCP) uygulayan güvenli shell komut yürütme sunucusu"
category: "Command Line"
repo: "tumf/mcp-shell-server"
stars: 175
url: "https://github.com/tumf/mcp-shell-server"
body_length: 6120
license: "MIT"
language: "Python"
body_tr: |-
  # MCP Shell Server

  [![codecov](https://codecov.io/gh/tumf/mcp-shell-server/branch/main/graph/badge.svg)](https://codecov.io/gh/tumf/mcp-shell-server)
  [![smithery badge](https://smithery.ai/badge/mcp-shell-server)](https://smithery.ai/server/mcp-shell-server)

  [![MseeP.ai Security Assessment Badge](https://mseep.net/pr/tumf-mcp-shell-server-badge.png)](https://mseep.ai/app/tumf-mcp-shell-server)

  Model Context Protocol (MCP) uygulayan güvenli bir shell command execution sunucusu. Bu sunucu, stdin girişi desteği ile beyaz listeye alınmış shell komutlarının uzaktan yürütülmesine izin verir.

  <a href="https://glama.ai/mcp/servers/rt2d4pbn22"></a>

  <a href="https://glama.ai/mcp/servers/rt2d4pbn22"></a>

  ## Özellikler

  * **Güvenli Command Yürütümü**: Yalnızca beyaz listeye alınmış komutlar yürütülebilir
  * **Standart Input Desteği**: Komutlara stdin aracılığıyla giriş aktarın
  * **Kapsamlı Çıktı**: stdout, stderr, çıkış durumu ve yürütme süresini döndürür
  * **Shell Operatör Güvenliği**: Shell operatörleri (;, &&, ||, |) sonrasındaki komutları doğrular
  * **Timeout Kontrolü**: Komutlar için maksimum yürütme süresini ayarlayın

  ## Claude.app'te MCP istemci ayarlanması

  ### Yayınlanmış sürüm

  ```shell
  code ~/Library/Application\ Support/Claude/claude_desktop_config.json
  ```

  ```json
  {
    "mcpServers": {
      "shell": {
        "command": "uvx",
        "args": [
          "mcp-shell-server"
        ],
        "env": {
          "ALLOW_COMMANDS": "ls,cat,pwd,grep,wc,touch,find"
        }
      },
    }
  }
  ```

  ### Yerel sürüm

  #### Konfigürasyon

  ```shell
  code ~/Library/Application\ Support/Claude/claude_desktop_config.json
  ```

  ```json
  {
    "mcpServers": {
      "shell": {
        "command": "uv",
        "args": [
          "--directory",
          ".",
          "run",
          "mcp-shell-server"
        ],
        "env": {
          "ALLOW_COMMANDS": "ls,cat,pwd,grep,wc,touch,find"
        }
      },
    }
  }
  ```

  #### Kurulum

  ### Smithery Aracılığıyla Kurulum

  Shell Server'ı Claude Desktop'a [Smithery](https://smithery.ai/server/mcp-shell-server) aracılığıyla otomatik olarak yüklemek için:

  ```bash
  npx -y @smithery/cli install mcp-shell-server --client claude
  ```

  ### Manuel Kurulum

  ### Smithery Aracılığıyla Kurulum

  Shell Server'ı Claude Desktop'a [Smithery](https://smithery.ai/server/mcp-shell-server) aracılığıyla otomatik olarak yüklemek için:

  ```bash
  npx -y @smithery/cli install mcp-shell-server --client claude
  ```

  ### Manuel Kurulum

  ```bash
  pip install mcp-shell-server
  ```

  ### Smithery Aracılığıyla Kurulum

  Shell Server'ı Claude Desktop'a [Smithery](https://smithery.ai/server/mcp-shell-server) aracılığıyla otomatik olarak yüklemek için:

  ```bash
  npx -y @smithery/cli install mcp-shell-server --client claude
  ```

  ## Kullanım

  ### Sunucuyu Başlatma

  ```bash
  ALLOW_COMMANDS="ls,cat,echo" uvx mcp-shell-server
  # Veya takma adı kullanarak
  ALLOWED_COMMANDS="ls,cat,echo" uvx mcp-shell-server
  ```

  `ALLOW_COMMANDS` (veya takma adı `ALLOWED_COMMANDS`) ortam değişkeni, hangi komutların yürütülmesine izin verileceğini belirtir. Komutlar virgülle ayrılabilir ve etrafında isteğe bağlı boşluklar bulunabilir.

  ALLOW_COMMANDS veya ALLOWED_COMMANDS için geçerli formatlar:

  ```bash
  ALLOW_COMMANDS="ls,cat,echo"          # Temel format
  ALLOWED_COMMANDS="ls ,echo, cat"      # Boşluklarla (takma ad kullanılarak)
  ALLOW_COMMANDS="ls,  cat  , echo"     # Çoklu boşluklarla
  ```

  ### İstek Formatı

  ```python
  # Temel command yürütümü
  {
      "command": ["ls", "-l", "/tmp"]
  }

  # Stdin girdisi ile command
  {
      "command": ["cat"],
      "stdin": "Hello, World!"
  }

  # Timeout ile command
  {
      "command": ["long-running-process"],
      "timeout": 30  # Saniye cinsinden maksimum yürütme süresi
  }

  # Çalışma dizini ve timeout ile command
  {
      "command": ["grep", "-r", "pattern"],
      "directory": "/path/to/search",
      "timeout": 60
  }
  ```

  ### Yanıt Formatı

  Başarılı yanıt:

  ```json
  {
      "stdout": "command output",
      "stderr": "",
      "status": 0,
      "execution_time": 0.123
  }
  ```

  Hata yanıtı:

  ```json
  {
      "error": "Command not allowed: rm",
      "status": 1,
      "stdout": "",
      "stderr": "Command not allowed: rm",
      "execution_time": 0
  }
  ```

  ## Güvenlik

  Sunucu, çeşitli güvenlik önlemleri uygular:

  1. **Command Beyaz Listesi**: Yalnızca açıkça izin verilen komutlar yürütülebilir
  2. **Shell Operatör Doğrulaması**: Shell operatörleri (;, &&, ||, |) sonrasındaki komutlar da beyaz listeye karşı doğrulanır
  3. **Shell Injection Yok**: Komutlar shell yorumlama olmaksızın doğrudan yürütülür

  ## Geliştirme

  ### Geliştirme Ortamını Ayarlama

  1. Repository'i klonlayın

  ```bash
  git clone https://github.com/yourusername/mcp-shell-server.git
  cd mcp-shell-server
  ```

  2. Test gereksinimleri dahil bağımlılıkları yükleyin

  ```bash
  pip install -e ".[test]"
  ```

  ### Testleri Çalıştırma

  ```bash
  pytest
  ```

  ## API Referansı

  ### İstek Parametreleri

  | Alan      | Tip        | Gerekli | Açıklama                                      |
  |-----------|------------|--------|-----------------------------------------------|
  | command   | string[]   | Evet   | Komut ve argümanları dizi elemanları olarak   |
  | stdin     | string     | Hayır  | Komuta aktarılacak giriş                     |
  | directory | string     | Hayır  | Command yürütümü için çalışma dizini         |
  | timeout   | integer    | Hayır  | Saniye cinsinden maksimum yürütme süresi      |

  ### Yanıt Alanları

  | Alan            | Tip     | Açıklama                                    |
  |-----------------|---------|---------------------------------------------|
  | stdout          | string  | Komuttan standart çıktı                    |
  | stderr          | string  | Komuttan standart hata çıktısı             |
  | status          | integer | Çıkış durumu kodu                          |
  | execution_time  | float   | Yürütme için geçen süre (saniye cinsinden) |
  | error           | string  | Hata mesajı (yalnızca başarısız olursa)    |

  ## Gereksinimler

  * Python 3.11 veya üstü
  * mcp>=1.1.0

  ## Lisans

  MIT Lisansı - Ayrıntılar için LICENSE dosyasına bakın
---

# MCP Shell Server

[![codecov](https://codecov.io/gh/tumf/mcp-shell-server/branch/main/graph/badge.svg)](https://codecov.io/gh/tumf/mcp-shell-server)
[![smithery badge](https://smithery.ai/badge/mcp-shell-server)](https://smithery.ai/server/mcp-shell-server)

[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/tumf-mcp-shell-server-badge.png)](https://mseep.ai/app/tumf-mcp-shell-server)

A secure shell command execution server implementing the Model Context Protocol (MCP). This server allows remote execution of whitelisted shell commands with support for stdin input.

<a href="https://glama.ai/mcp/servers/rt2d4pbn22"></a>

<a href="https://glama.ai/mcp/servers/rt2d4pbn22"></a>

## Features

* **Secure Command Execution**: Only whitelisted commands can be executed
* **Standard Input Support**: Pass input to commands via stdin
* **Comprehensive Output**: Returns stdout, stderr, exit status, and execution time
* **Shell Operator Safety**: Validates commands after shell operators (; , &&, ||, |)
* **Timeout Control**: Set maximum execution time for commands

## MCP client setting in your Claude.app

### Published version

```shell
code ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

```json
{
  "mcpServers": {
    "shell": {
      "command": "uvx",
      "args": [
        "mcp-shell-server"
      ],
      "env": {
        "ALLOW_COMMANDS": "ls,cat,pwd,grep,wc,touch,find"
      }
    },
  }
}
```

### Local version

#### Configuration

```shell
code ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

```json
{
  "mcpServers": {
    "shell": {
      "command": "uv",
      "args": [
        "--directory",
        ".",
        "run",
        "mcp-shell-server"
      ],
      "env": {
        "ALLOW_COMMANDS": "ls,cat,pwd,grep,wc,touch,find"
      }
    },
  }
}
```

#### Installation

### Installing via Smithery

To install Shell Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/mcp-shell-server):

```bash
npx -y @smithery/cli install mcp-shell-server --client claude
```

### Manual Installation

### Installing via Smithery

To install Shell Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/mcp-shell-server):

```bash
npx -y @smithery/cli install mcp-shell-server --client claude
```

### Manual Installation

```bash
pip install mcp-shell-server
```

### Installing via Smithery

To install Shell Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/mcp-shell-server):

```bash
npx -y @smithery/cli install mcp-shell-server --client claude
```

## Usage

### Starting the Server

```bash
ALLOW_COMMANDS="ls,cat,echo" uvx mcp-shell-server
# Or using the alias
ALLOWED_COMMANDS="ls,cat,echo" uvx mcp-shell-server
```

The `ALLOW_COMMANDS` (or its alias `ALLOWED_COMMANDS` ) environment variable specifies which commands are allowed to be executed. Commands can be separated by commas with optional spaces around them.

Valid formats for ALLOW_COMMANDS or ALLOWED_COMMANDS:

```bash
ALLOW_COMMANDS="ls,cat,echo"          # Basic format
ALLOWED_COMMANDS="ls ,echo, cat"      # With spaces (using alias)
ALLOW_COMMANDS="ls,  cat  , echo"     # Multiple spaces
```

### Request Format

```python
# Basic command execution
{
    "command": ["ls", "-l", "/tmp"]
}

# Command with stdin input
{
    "command": ["cat"],
    "stdin": "Hello, World!"
}

# Command with timeout
{
    "command": ["long-running-process"],
    "timeout": 30  # Maximum execution time in seconds
}

# Command with working directory and timeout
{
    "command": ["grep", "-r", "pattern"],
    "directory": "/path/to/search",
    "timeout": 60
}
```

### Response Format

Successful response:

```json
{
    "stdout": "command output",
    "stderr": "",
    "status": 0,
    "execution_time": 0.123
}
```

Error response:

```json
{
    "error": "Command not allowed: rm",
    "status": 1,
    "stdout": "",
    "stderr": "Command not allowed: rm",
    "execution_time": 0
}
```

## Security

The server implements several security measures:

1. **Command Whitelisting**: Only explicitly allowed commands can be executed
2. **Shell Operator Validation**: Commands after shell operators (;, &&, ||, |) are also validated against the whitelist
3. **No Shell Injection**: Commands are executed directly without shell interpretation

## Development

### Setting up Development Environment

1. Clone the repository

```bash
git clone https://github.com/yourusername/mcp-shell-server.git
cd mcp-shell-server
```

2. Install dependencies including test requirements

```bash
pip install -e ".[test]"
```

### Running Tests

```bash
pytest
```

## API Reference

### Request Arguments

| Field     | Type       | Required | Description                                   |
|-----------|------------|----------|-----------------------------------------------|
| command   | string[]   | Yes      | Command and its arguments as array elements   |
| stdin     | string     | No       | Input to be passed to the command            |
| directory | string     | No       | Working directory for command execution       |
| timeout   | integer    | No       | Maximum execution time in seconds             |

### Response Fields

| Field           | Type    | Description                                |
|----------------|---------|---------------------------------------------|
| stdout         | string  | Standard output from the command           |
| stderr         | string  | Standard error output from the command     |
| status         | integer | Exit status code                           |
| execution_time | float   | Time taken to execute (in seconds)         |
| error          | string  | Error message (only present if failed)     |

## Requirements

* Python 3.11 or higher
* mcp>=1.1.0

## License

MIT License - See LICENSE file for details
