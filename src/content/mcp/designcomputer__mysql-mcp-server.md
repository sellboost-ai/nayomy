---
name: "designcomputer/mysql_mcp_server"
description: "MySQL database integration with configurable access controls, schema inspection, and comprehensive security guidelines"
description_tr: "MySQL veritabanı entegrasyonu yapılandırılabilir erişim kontrolleri, schema inceleme ve kapsamlı güvenlik yönergeleri ile birlikte gelir."
category: "Databases"
repo: "designcomputer/mysql_mcp_server"
stars: 1263
url: "https://github.com/designcomputer/mysql_mcp_server"
body_length: 4997
license: "MIT"
language: "Python"
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

![Tests](https://github.com/designcomputer/mysql_mcp_server/actions/workflows/test.yml/badge.svg)
![PyPI - Downloads](https://img.shields.io/pypi/dm/mysql-mcp-server)
[![smithery badge](https://smithery.ai/badge/mysql-mcp-server)](https://smithery.ai/server/mysql-mcp-server)
[![MseeP.ai Security Assessment Badge](https://mseep.net/mseep-audited.png)](https://mseep.ai/app/designcomputer-mysql-mcp-server)
# MySQL MCP Server
A Model Context Protocol (MCP) implementation that enables secure interaction with MySQL databases. This server component facilitates communication between AI applications (hosts/clients) and MySQL databases, making database exploration and analysis safer and more structured through a controlled interface.

> **Note**: MySQL MCP Server is not designed to be used as a standalone server, but rather as a communication protocol implementation between AI applications and MySQL databases.

## Features
- List available MySQL tables as resources
- Read table contents
- Execute SQL queries with proper error handling
- Secure database access through environment variables
- Comprehensive logging

## Installation
### Manual Installation
```bash
pip install mysql-mcp-server
```

### Installing via Smithery
To install MySQL MCP Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/mysql-mcp-server):
```bash
npx -y @smithery/cli install mysql-mcp-server --client claude
```

## Configuration
Set the following environment variables:
```bash
MYSQL_HOST=localhost     # Database host
MYSQL_PORT=3306         # Optional: Database port (defaults to 3306 if not specified)
MYSQL_USER=your_username
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=your_database
```

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

### With Visual Studio Code
Add this to your `mcp.json`:
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
# Run tests
pytest
```

## Security Considerations
- Never commit environment variables or credentials
- Use a database user with minimal required permissions
- Consider implementing query whitelisting for production use
- Monitor and log all database operations

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
