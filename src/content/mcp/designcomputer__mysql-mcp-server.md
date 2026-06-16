---
name: "designcomputer/mysql_mcp_server"
description: "MySQL database integration with configurable access controls, schema inspection, and comprehensive security guidelines"
category: "Databases"
repo: "designcomputer/mysql_mcp_server"
stars: 1302
url: "https://github.com/designcomputer/mysql_mcp_server"
body_length: 11045
license: "MIT"
language: "Python"
homepage: "https://designcomputer.com"
body_tr: |-
  ![Tests](https://github.com/designcomputer/mysql_mcp_server/actions/workflows/test.yml/badge.svg)
  ![PyPI - Downloads](https://img.shields.io/pypi/dm/mysql-mcp-server)
  [![smithery badge](https://smithery.ai/badge/mysql-mcp-server)](https://smithery.ai/server/mysql-mcp-server)
  [![MseeP.ai Security Assessment Badge](https://mseep.net/mseep-audited.png)](https://mseep.ai/app/designcomputer-mysql-mcp-server)
  # MySQL MCP Server
  MySQL veritabanlarıyla güvenli etkileşim sağlayan bir Model Context Protocol (MCP) uygulaması. Bu sunucu bileşeni, AI uygulamaları (host/istemciler) ve MySQL veritabanları arasında iletişimi kolaylaştırarak, veritabanı keşfini ve analizini kontrollü bir arayüz aracılığıyla daha güvenli ve yapılandırılmış hale getirir.
  
  > **Not**: MySQL MCP Server, bağımsız bir sunucu olarak kullanılmak için tasarlanmamıştır. Bunun yerine, AI uygulamaları ve MySQL veritabanları arasında bir iletişim protokolü uygulaması olarak kullanılır.
  
  ## Özellikler
  - Mevcut MySQL tablolarını kaynak olarak listeleme
  - Tablo içeriklerini okuma
  - Uygun hata işleme ile SQL sorguları yürütme
  - Ortam değişkenleri aracılığıyla güvenli veritabanı erişimi
  - Kapsamlı günlükleme
  
  ## Kurulum
  ### Manuel Kurulum
  ```bash
  pip install mysql-mcp-server
  ```
  
  ### Smithery Üzerinden Kurulum
  MySQL MCP Server'ı Claude Desktop için otomatik olarak [Smithery](https://smithery.ai/server/mysql-mcp-server) üzerinden kurmak için:
  ```bash
  npx -y @smithery/cli install mysql-mcp-server --client claude
  ```
  
  ## Yapılandırma
  Aşağıdaki ortam değişkenlerini ayarlayın:
  ```bash
  MYSQL_HOST=localhost     # Veritabanı sunucusu
  MYSQL_PORT=3306         # İsteğe bağlı: Veritabanı portu (belirtilmezse varsayılan olarak 3306)
  MYSQL_USER=your_username
  MYSQL_PASSWORD=your_password
  MYSQL_DATABASE=your_database
  ```
  
  ## Kullanım
  ### Claude Desktop ile
  Bunu `claude_desktop_config.json` dosyanıza ekleyin:
  ```json
  {
    "mcpServers": {
      "mysql": {
        "command": "uv",
        "args": [
          "--directory",
          "path/to/mysql_mcp_server",
          "run",
          "mysql_mcp_server"
        ],
        "env": {
          "MYSQL_HOST": "localhost",
          "MYSQL_PORT": "3306",
          "MYSQL_USER": "your_username",
          "MYSQL_PASSWORD": "your_password",
          "MYSQL_DATABASE": "your_database"
        }
      }
    }
  }
  ```
  
  ### Visual Studio Code ile
  Bunu `mcp.json` dosyanıza ekleyin:
  ```json
  {
    "servers": {
        "mysql": {
              "type": "stdio",
              "command": "uvx",
              "args": [
                  "--from",
                  "mysql-mcp-server",
                  "mysql_mcp_server"
              ],
        "env": {
          "MYSQL_HOST": "localhost",
          "MYSQL_PORT": "3306",
          "MYSQL_USER": "your_username",
          "MYSQL_PASSWORD": "your_password",
          "MYSQL_DATABASE": "your_database"
        }
      }
    }
  }
  ```
  Not: Bunun çalışması için uv yüklemeniz gerekecek
  
  ### MCP Inspector ile Hata Ayıklama
  MySQL MCP Server bağımsız olarak çalıştırılmak veya doğrudan Python ile komut satırından çalıştırılmak için tasarlanmamış olsa da, hata ayıklamak için MCP Inspector'ı kullanabilirsiniz.
  
  MCP Inspector, MCP uygulamanızı test etmek ve hata ayıklamak için uygun bir yol sağlar:
  
  ```bash
  # Bağımlılıkları yükleyin
  pip install -r requirements.txt
  # Hata ayıklama için MCP Inspector'ı kullanın (doğrudan Python ile çalıştırmayın)
  ```
  
  MySQL MCP Server, Claude Desktop gibi AI uygulamalarıyla entegre edilmek üzere tasarlanmıştır ve bağımsız bir Python programı olarak doğrudan çalıştırılmamalıdır.
  
  ## Geliştirme
  ```bash
  # Repository'yi klonlayın
  git clone https://github.com/designcomputer/mysql_mcp_server.git
  cd mysql_mcp_server
  # Sanal ortam oluşturun
  python -m venv venv
  source venv/bin/activate  # Windows'ta `venv\Scripts\activate`
  # Geliştirme bağımlılıklarını yükleyin
  pip install -r requirements-dev.txt
  # Testleri çalıştırın
  pytest
  ```
  
  ## Güvenlik Değerlendirmeleri
  - Ortam değişkenlerini veya kimlik bilgilerini asla commit etmeyin
  - Minimum gerekli izinlere sahip bir veritabanı kullanıcısı kullanın
  - Üretim kullanımı için sorgu beyaz listesini uygulamayı düşünün
  - Tüm veritabanı işlemlerini izleyin ve günlüğe kaydedin
  
  ## Güvenlik En İyi Uygulamaları
  Bu MCP uygulaması çalışmak için veritabanı erişimi gerektirir. Güvenlik için:
  1. **Minimum izinlere sahip bir MySQL kullanıcısı oluşturun**
  2. **Root kimlik bilgilerini veya yönetici hesaplarını asla kullanmayın**
  3. **Veritabanı erişimini** yalnızca gerekli işlemlerle sınırlayın
  4. **Günlüklemeyi etkinleştirin** denetim amaçları için
  5. **Veritabanı erişiminin düzenli güvenlik incelemeleri** yapın
  
  Aşağıdakiler hakkında ayrıntılı talimatlar için [MySQL Güvenlik Yapılandırma Kılavuzu](https://github.com/designcomputer/mysql_mcp_server/blob/main/SECURITY.md) bölümüne bakın:
  - Kısıtlı bir MySQL kullanıcısı oluşturma
  - Uygun izinleri ayarlama
  - Veritabanı erişimini izleme
  - Güvenlik en iyi uygulamaları
  
  ⚠️ ÖNEMLİ: Veritabanı erişimini yapılandırırken her zaman en az yetki ilkesini takip edin.
  
  ## Lisans
  MIT Lisansı - ayrıntılar için LICENSE dosyasına bakın.
  
  ## Katkıda Bulunma
  1. Repository'yi fork edin
  2. Özellik dalınızı oluşturun (`git checkout -b feature/amazing-feature`)
  3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
  4. Dala push edin (`git push origin feature/amazing-feature`)
  5. Bir Pull Request açın
---

[![Tests](https://github.com/designcomputer/mysql_mcp_server/actions/workflows/test.yml/badge.svg)](https://github.com/designcomputer/mysql_mcp_server/actions)
[![PyPI - Downloads](https://img.shields.io/pypi/dm/mysql-mcp-server)](https://pypi.org/project/mysql-mcp-server/)
[![AgentAudit Safe](https://img.shields.io/badge/AgentAudit-safe-brightgreen)](https://www.agentaudit.dev/packages/mysql-mcp-server)
# MySQL MCP Server
A Model Context Protocol (MCP) implementation that enables secure interaction with MySQL databases. This server component facilitates communication between AI applications (hosts/clients) and MySQL databases, making database exploration and analysis safer and more structured through a controlled interface.

> **Note**: MySQL MCP Server supports both standard input/output (STDIO) and Streamable HTTP (SSE) transport modes. The SSE mode is recommended for remote/self-hosted deployments.

## Deployment options
- **Hosted** — [Fronteir AI](https://fronteir.ai/mcp/designcomputer-mysql-mcp-server) runs the server for you; no local setup required.
- **Local** — [Smithery](https://smithery.ai/server/designcomputer/mysql-mcp-server) installs and runs the server on your own machine.

## Features
- List available MySQL tables as resources
- Read table contents
- Execute SQL queries with proper error handling
- **Multi-database mode** (Optional `MYSQL_DATABASE`)
- **SSE/HTTP transport support** (`MCP_TRANSPORT=sse`)
- **SSH Tunneling support**
- **Comprehensive schema information**
- **Table data sampling**
- Secure database access through environment variables
- Comprehensive logging

## Installation
### Manual Installation
```bash
pip install mysql-mcp-server
```

### Installing via Smithery
To install MySQL MCP Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/designcomputer/mysql-mcp-server):
```bash
npx -y @smithery/cli install designcomputer/mysql-mcp-server --client claude
```

### Installing via Claude Code CLI
```bash
claude mcp add --transport stdio designcomputer-mysql_mcp_server uvx mysql_mcp_server
```

## Configuration
Set the following environment variables:
```bash
MYSQL_HOST=localhost     # Database host
MYSQL_PORT=3306         # Optional: Database port (defaults to 3306 if not specified)
MYSQL_USER=your_username
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=your_database # Optional: Omit for multi-database mode

# Advanced Configuration
MYSQL_SSL_MODE=DISABLED  # DISABLED, REQUIRED, VERIFY_CA, VERIFY_IDENTITY
MYSQL_CONNECT_TIMEOUT=10 # Timeout in seconds

# Connection behaviour (Optional)
MYSQL_SQL_MODE=TRADITIONAL           # SQL mode applied to the connection (default: TRADITIONAL)

# Compatibility (Optional)
MYSQL_CHARSET=utf8mb4
MYSQL_COLLATION=utf8mb4_unicode_ci
MYSQL_AUTH_PLUGIN=       # e.g., mysql_native_password for older MySQL versions
MYSQL_USE_PURE=false     # Force the pure-Python connector (default: false)
MYSQL_RAISE_ON_WARNINGS=false        # Raise on SQL warnings (default: false)

# SSE Transport (Optional)
MCP_TRANSPORT=stdio      # stdio or sse
MCP_SSE_HOST=0.0.0.0     # Listen on all interfaces (required for Docker/hosting)
PORT=8000                # HTTP port (fallback for MCP_SSE_PORT)

# SSH Tunneling (Optional)
MYSQL_SSH_ENABLE=false   # Set to true to enable
MYSQL_SSH_HOST=          # SSH jump host
MYSQL_SSH_PORT=22        # SSH port
MYSQL_SSH_USER=          # SSH username
MYSQL_SSH_KEY_PATH=      # Path to SSH private key
MYSQL_SSH_REMOTE_HOST=localhost # Host from the perspective of the jump host
MYSQL_SSH_REMOTE_PORT=3306
MYSQL_LOCAL_PORT=3330
```

### `.env` file loading

On startup the server automatically loads a `.env` file via `python-dotenv`, so for local use you can simply:

```bash
cp .env.example .env   # then edit with your credentials
```

The file is read from the **process working directory** (and parent directories), which works when you run the server yourself from the project folder.

> ⚠️ **Claude Code / Claude Desktop:** these hosts launch the server from their own working directory, so the project's `.env` will **not** be found and you'll see `Missing required database configuration`. Put your `MYSQL_*` values in the `env` block of the MCP config (shown in the Usage section below) rather than relying on `.env`.

### Multi-Database Mode
When `MYSQL_DATABASE` is not set, the server operates in multi-database mode:
- `list_resources` returns all user databases (system databases are filtered out)
- Use fully qualified table names like `mydb.mytable` in SQL queries
- **Note:** Only single SQL statements are supported. Multi-statement queries (e.g., `USE db; SELECT ...`) are not supported.

## Available Tools

### `execute_sql`
Executes any standard SQL query.
- **Arguments:** `query` (string)
- **Features:** Supports `SELECT`, `SHOW`, `DESCRIBE`, and DML (`INSERT`, `UPDATE`, `DELETE`). DML operations are marked with a destructive hint.
- **Limitation:** Single statements only. Multi-statement queries are not supported.
- **Cross-database:** Use `database.table` notation to query any database regardless of the `MYSQL_DATABASE` setting.

### `get_schema_info`
Provides detailed metadata about database structures.
- **Arguments:** `table_name` (optional string)
- **Output:** Column names, types, nullability, default values, and comments.
- **Cross-database:** Pass `database.table` to query a table outside `MYSQL_DATABASE`; bare names use the configured database.
- **Identifier rules:** Names must contain only alphanumeric characters, underscores, and `$` (dots are allowed as a separator between database and table names).

### `get_table_sample`
Fetches a representative sample of data.
- **Arguments:** `table_name` (string), `limit` (optional integer, max 20)
- **Use Case:** Quickly understand data formats and content without fetching large result sets.
- **Cross-database:** Pass `database.table` to sample a table outside `MYSQL_DATABASE`; bare names use the configured database.
- **Identifier rules:** Names must contain only alphanumeric characters, underscores, and `$` (dots are allowed as a separator between database and table names).

## Available Prompts

In addition to tools, the server exposes **MCP prompts** — guided, multi-step workflows that a client can launch on demand. In Claude Code they appear as slash commands (`/mcp__<server>__<prompt>`); in Claude Desktop they appear in the prompts (`+`) menu.

| Prompt | Arguments | Description |
| --- | --- | --- |
| `explore_database` | *(none)* | Systematically explore the database: discover available tables, inspect their schemas, sample the data, and summarize what's there. |
| `analyze_table` | `table_name` *(required)* | Deep-dive into a specific table: retrieve its schema, sample its data, and suggest useful queries. Accepts `database.table` notation for cross-database lookups. |

**Example (Claude Code):**
```
/mcp__mysql__explore_database
/mcp__mysql__analyze_table customers
```

Both prompts orchestrate the existing `get_schema_info` and `get_table_sample` tools; `explore_database` also uses resource listing to enumerate tables.

## Usage
### With Claude Desktop
Add this to your `claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "mysql": {
      "command": "uv",
      "args": [
        "--directory",
        "path/to/mysql_mcp_server",
        "run",
        "mysql_mcp_server"
      ],
      "env": {
        "MYSQL_HOST": "localhost",
        "MYSQL_PORT": "3306",
        "MYSQL_USER": "your_username",
        "MYSQL_PASSWORD": "your_password",
        "MYSQL_DATABASE": "your_database"
      }
    }
  }
}
```

For more detailed examples and agent-specific guidance, see [MCP_USECASES.md](MCP_USECASES.md).

### With Visual Studio Code
Add this to your `mcp.json`:
```json
{
  "mcpServers": {
    "mysql": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "--from",
        "mysql-mcp-server",
        "mysql_mcp_server"
      ],
      "env": {
        "MYSQL_HOST": "localhost",
        "MYSQL_PORT": "3306",
        "MYSQL_USER": "your_username",
        "MYSQL_PASSWORD": "your_password",
        "MYSQL_DATABASE": "your_database"
      }
    }
  }
}
```
Note: Will need to install uv for this to work

### Debugging with MCP Inspector
While MySQL MCP Server isn't intended to be run standalone or directly from the command line with Python, you can use the MCP Inspector to debug it.

The MCP Inspector provides a convenient way to test and debug your MCP implementation:

```bash
# Install dependencies
pip install -r requirements.txt
# Use the MCP Inspector for debugging (do not run directly with Python)
```

The MySQL MCP Server is designed to be integrated with AI applications like Claude Desktop and should not be run directly as a standalone Python program.

## Development
```bash
# Clone the repository
git clone https://github.com/designcomputer/mysql_mcp_server.git
cd mysql_mcp_server
# Create virtual environment
python -m venv venv
source venv/bin/activate  # or `venv\Scripts\activate` on Windows
# Install development dependencies
pip install -r requirements-dev.txt
# Copy the example config and edit with your credentials
cp .env.example .env
# Edit .env with your MySQL connection details
# Run tests
pytest
```

## Security Considerations
- **Identifier Validation:** Table and database names passed to `get_schema_info` and `get_table_sample` are validated against a strict whitelist (alphanumeric, underscore, and `$` only; a single dot is allowed as a `database.table` separator). Other special characters are rejected to prevent SQL injection.
- **Encrypted Access:** Full support for SSL/TLS and SSH Tunneling for secure remote connections.
- **Log Privacy:** Passwords and SSH private keys are automatically masked in server logs.
- **Least Privilege:** Always use a dedicated MySQL user with minimal required permissions.

See [SECURITY.md](SECURITY.md) for a comprehensive guide on securing your deployment.

## Security Best Practices
This MCP implementation requires database access to function. For security:
1. **Create a dedicated MySQL user** with minimal permissions
2. **Never use root credentials** or administrative accounts
3. **Restrict database access** to only necessary operations
4. **Enable logging** for audit purposes
5. **Regular security reviews** of database access

See [MySQL Security Configuration Guide](https://github.com/designcomputer/mysql_mcp_server/blob/main/SECURITY.md) for detailed instructions on:
- Creating a restricted MySQL user
- Setting appropriate permissions
- Monitoring database access
- Security best practices

⚠️ IMPORTANT: Always follow the principle of least privilege when configuring database access.

## License
MIT License - see LICENSE file for details.

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
