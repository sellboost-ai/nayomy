---
name: "runekaagaard/mcp-alchemy"
description: "Universal SQLAlchemy-based database integration supporting PostgreSQL, MySQL, MariaDB, SQLite, Oracle, MS SQL Server and many more databases. Features schema and relationship inspection, and large dataset analysis capabilities."
category: "Databases"
repo: "runekaagaard/mcp-alchemy"
stars: 404
url: "https://github.com/runekaagaard/mcp-alchemy"
body_length: 9387
license: "MPL-2.0"
language: "Python"
body_tr: |-
  # MCP Alchemy

  <a href="https://www.pulsemcp.com/servers/runekaagaard-alchemy"></a>

  **Durum: Harika çalışıyor ve bilinen herhangi bir hata olmaksızın günlük kullanımda.**

  **Durum2: Az önce paketi PyPI'ye ekledim ve kullanım talimatlarını güncelledi. Lütfen herhangi bir sorunu bildirin :)**

  Claude'u veritabanı uzmanınız olarak kullanın! MCP Alchemy, Claude Desktop'ı doğrudan veritabanlarınıza bağlayarak şunları yapmasını sağlar:

  - Veritabanı yapınızı keşfetmek ve anlamak konusunda yardımcı olmak
  - SQL sorguları yazmak ve doğrulamak konusunda yardımcı olmak
  - Tablolar arasındaki ilişkileri göstermek
  - Büyük veri setlerini analiz etmek ve raporlar oluşturmak
  - Claude Desktop, [claude-local-files](https://github.com/runekaagaard/claude-local-files) kullanarak çok büyük veri setleri için analiz ve yapıtlar oluşturabilir.

  PostgreSQL, MySQL, MariaDB, SQLite, Oracle, MS SQL Server, CrateDB, Vertica ve diğer birçok [SQLAlchemy uyumlu](https://docs.sqlalchemy.org/en/20/dialects/) veritabanları ile çalışır.

  ![MCP Alchemy'nin çalışması](https://raw.githubusercontent.com/runekaagaard/mcp-alchemy/refs/heads/main/screenshot.png)

  ## Kurulum

  uv'nin yüklü olduğundan emin olun:
  ```bash
  # Henüz yüklemediyseniz uv'yi yükleyin
  curl -LsSf https://astral.sh/uv/install.sh | sh
  ```

  ## Claude Desktop ile Kullanım

  `claude_desktop_config.json` dosyasına ekleyin. ``--with`` parametresinde uygun veritabanı sürücüsünü eklemeniz gerekir.

  _Not: Yeni bir sürüm yayımlandıktan sonra, yerel olarak önbelleğe alınan veritabanının silinmesi nedeniyle uv'nin bir sürüm oluşturma hatası yükseltmesine kadar 600 saniyeye kadar bir süre olabilir. MCP istemcisini bir kez daha yeniden başlatmak hatayı çözer._

  ### SQLite (Python'da yerleşik)
  ```json
  {
    "mcpServers": {
      "my_sqlite_db": {
        "command": "uvx",
        "args": ["--from", "mcp-alchemy==2025.8.15.91819",
                 "--refresh-package", "mcp-alchemy", "mcp-alchemy"],
        "env": {
          "DB_URL": "sqlite:////absolute/path/to/database.db"
        }
      }
    }
  }
  ```

  ### PostgreSQL
  ```json
  {
    "mcpServers": {
      "my_postgres_db": {
        "command": "uvx",
        "args": ["--from", "mcp-alchemy==2025.8.15.91819", "--with", "psycopg2-binary",
                 "--refresh-package", "mcp-alchemy", "mcp-alchemy"],
        "env": {
          "DB_URL": "postgresql://user:password@localhost/dbname"
        }
      }
    }
  }
  ```

  ### MySQL/MariaDB
  ```json
  {
    "mcpServers": {
      "my_mysql_db": {
        "command": "uvx",
        "args": ["--from", "mcp-alchemy==2025.8.15.91819", "--with", "pymysql",
                 "--refresh-package", "mcp-alchemy", "mcp-alchemy"],
        "env": {
          "DB_URL": "mysql+pymysql://user:password@localhost/dbname"
        }
      }
    }
  }
  ```

  ### Microsoft SQL Server
  ```json
  {
    "mcpServers": {
      "my_mssql_db": {
        "command": "uvx",
        "args": ["--from", "mcp-alchemy==2025.8.15.91819", "--with", "pymssql",
                 "--refresh-package", "mcp-alchemy", "mcp-alchemy"],
        "env": {
          "DB_URL": "mssql+pymssql://user:password@localhost/dbname"
        }
      }
    }
  }
  ```

  ### Oracle
  ```json
  {
    "mcpServers": {
      "my_oracle_db": {
        "command": "uvx",
        "args": ["--from", "mcp-alchemy==2025.8.15.91819", "--with", "oracledb",
                 "--refresh-package", "mcp-alchemy", "mcp-alchemy"],
        "env": {
          "DB_URL": "oracle+oracledb://user:password@localhost/dbname"
        }
      }
    }
  }
  ```

  ### CrateDB
  ```json
  {
    "mcpServers": {
      "my_cratedb": {
        "command": "uvx",
        "args": ["--from", "mcp-alchemy==2025.8.15.91819", "--with", "sqlalchemy-cratedb>=0.42.0.dev1",
                 "--refresh-package", "mcp-alchemy", "mcp-alchemy"],
        "env": {
          "DB_URL": "crate://user:password@localhost:4200/?schema=testdrive"
        }
      }
    }
  }
  ```
  CrateDB Cloud'a bağlanmak için şu gibi bir URL kullanın:
  `crate://user:password@example.aks1.westeurope.azure.cratedb.net:4200?ssl=true`.

  ### Vertica
  ```json
  {
    "mcpServers": {
      "my_vertica_db": {
        "command": "uvx",
        "args": ["--from", "mcp-alchemy==2025.8.15.91819", "--with", "vertica-python",
                 "--refresh-package", "mcp-alchemy", "mcp-alchemy"],
        "env": {
          "DB_URL": "vertica+vertica_python://user:password@localhost:5433/dbname",
          "DB_ENGINE_OPTIONS": "{\"connect_args\": {\"ssl\": false}}"
        }
      }
    }
  }
  ```

  ## Ortam Değişkenleri

  - `DB_URL`: SQLAlchemy [veritabanı URL'si](https://docs.sqlalchemy.org/en/20/core/engines.html#database-urls) (gerekli)
  - `CLAUDE_LOCAL_FILES_PATH`: Tam sonuç setleri için dizin (isteğe bağlı)
  - `EXECUTE_QUERY_MAX_CHARS`: Maksimum çıkış uzunluğu (isteğe bağlı, varsayılan 4000)
  - `DB_ENGINE_OPTIONS`: Ek SQLAlchemy engine seçeneklerini içeren JSON dizesi (isteğe bağlı)

  ## Bağlantı Havuzu

  MCP Alchemy, uzun süreli MCP sunucuları için optimize edilmiş bağlantı havuzu kullanır. Varsayılan ayarlar şunlardır:

  - `pool_pre_ping=True`: Veritabanı zaman aşımlarını ve ağ sorunlarını işlemek için bağlantıları kullanmadan önce test eder
  - `pool_size=1`: 1 kalıcı bağlantı tutar (MCP sunucuları genellikle aynı anda bir isteği işler)
  - `max_overflow=2`: Patlama kapasitesi için 2'ye kadar ek bağlantıya izin verir
  - `pool_recycle=3600`: 1 saatten daha eski bağlantıları yeniler (zaman aşımı sorunlarını önler)
  - `isolation_level='AUTOCOMMIT'`: Her sorgunun otomatik olarak işlendiğinden emin olur

  Bu varsayılanlar çoğu veritabanı için iyi çalışır, ancak `DB_ENGINE_OPTIONS` aracılığıyla geçersiz kılabilirsiniz:

  ```json
  {
    "DB_ENGINE_OPTIONS": "{\"pool_size\": 5, \"max_overflow\": 10, \"pool_recycle\": 1800}"
  }
  ```

  Agresif zaman aşımı ayarlarına sahip veritabanları (MySQL'in 8 saatlik varsayılanı gibi) için, `pool_pre_ping` ve `pool_recycle` kombinasyonu güvenilir bağlantılar sağlar.

  ## API

  ### Araçlar

  - **all_table_names**
    - Veritabanındaki tüm tablo adlarını döndür
    - Giriş gerekmez
    - Virgülle ayrılmış tablo listesini döndür
    ```
    users, orders, products, categories
    ```

  - **filter_table_names**
    - Bir alt dizeyle eşleşen tabloları bul
    - Giriş: `q` (string)
    - Eşleşen tablo adlarını döndür
    ```
    Giriş: "user"
    Döner: "users, user_roles, user_permissions"
    ```

  - **schema_definitions**
    - Belirtilen tablolar için ayrıntılı şemayı al
    - Giriş: `table_names` (string[])
    - Şunları içeren tablo tanımlarını döndür:
      - Sütun adları ve türleri
      - Birincil anahtarlar
      - Foreign key ilişkileri
      - Boş değer işaretleri
    ```
    users:
        id: INTEGER, primary key, autoincrement
        email: VARCHAR(255), nullable
        created_at: DATETIME
        
        İlişkiler:
          id -> orders.user_id
    ```

  - **execute_query**
    - SQL sorgusunu dikey çıkış formatıyla çalıştır
    - Girişler:
      - `query` (string): SQL sorgusu
      - `params` (object, isteğe bağlı): Sorgu parametreleri
    - Sonuçları temiz dikey formatta döndür:
    ```
    1. satır
    id: 123
    name: John Doe
    created_at: 2024-03-15T14:30:00
    email: NULL

    Sonuç: 1 satır
    ```
    - Özellikler:
      - Büyük sonuçların akıllı kesintiye uğraması
      - [claude-local-files](https://github.com/runekaagaard/claude-local-files) entegrasyonu aracılığıyla tam sonuç seti erişimi
      - Temiz NULL değeri görüntüleme
      - ISO biçimlendirilmiş tarihler
      - Açık satır ayrılması

  ## Claude Yerel Dosyaları

  [claude-local-files](https://github.com/runekaagaard/claude-local-files) yapılandırıldığında:

  - Claude'un bağlam penceresini aşan tam sonuç setlerine erişim
  - Ayrıntılı raporlar ve görselleştirmeler oluştur
  - Büyük veri setleri üzerinde derin analiz gerçekleştir
  - Sonuçları daha fazla işlem için dışa aktar

  Entegrasyon, `CLAUDE_LOCAL_FILES_PATH` ayarlandığında otomatik olarak etkinleşir.

  ## Geliştirme

  Önce github deposunu klonlayın, bağımlılıkları ve seçtiğiniz veritabanı sürücüsünü yükleyin:

  ```
  git clone git@github.com:runekaagaard/mcp-alchemy.git
  cd mcp-alchemy
  uv sync
  uv pip install psycopg2-binary
  ```

  Ardından bunu claude_desktop_config.json dosyasına ayarlayın:

  ```
  ...
  "command": "uv",
  "args": ["run", "--directory", "/path/to/mcp-alchemy", "-m", "mcp_alchemy.server", "main"],
  ...
  ```

  ## Diğer LLM Projelerim

  - **[MCP Redmine](https://github.com/runekaagaard/mcp-redmine)** - Claude Desktop'ın Redmine projelerinizi ve sorunlarını yönetmesine izin verin.
  - **[MCP Notmuch Sendmail](https://github.com/runekaagaard/mcp-notmuch-sendmail)** - notmuch kullanan Claude Desktop için e-posta asistanı.
  - **[Diffpilot](https://github.com/runekaagaard/diffpilot)** - Dosya gruplandırması ve etiketleme ile çok sütunlu git diff görüntüleyicisi.
  - **[Claude Local Files](https://github.com/runekaagaard/claude-local-files)** - Claude Desktop yapıtlarında yerel dosyalara erişim.

  ## MCP Dizin Listeleri

  MCP Alchemy aşağıdaki MCP dizin siteleri ve depolarında listelenmektedir:

  - [PulseMCP](https://www.pulsemcp.com/servers/runekaagaard-alchemy)
  - [Glama](https://glama.ai/mcp/servers/@runekaagaard/mcp-alchemy)
  - [MCP.so](https://mcp.so/server/mcp-alchemy)
  - [MCP Archive](https://mcp-archive.com/server/mcp-alchemy)
  - [Playbooks MCP](https://playbooks.com/mcp/runekaagaard-alchemy)
  - [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)

  ## Katkıda Bulunma

  Katkılar sıcak bir şekilde karşılanır! İster hata raporları, ister özellik istekleri, ister belgeleme iyileştirmeleri, ister kod katkıları olsun - tüm girdiler değerlidir. Şunları yapabilirsiniz:

  - Hataları bildirmek veya özellikler önermek için bir sorun açın
  - İyileştirmelerle birlikte pull request gönderin
  - Belgeleri geliştirin veya kullanım örneklerinizi paylaşın
  - Sorular sorun ve deneyimlerinizi paylaşın

  Amaç, Claude ile veritabanı etkileşimini daha da iyileştirmek ve sizin fikirleriniz ve katkılarınız bunu başarmaya yardımcı olur.

  ## Lisans

  Mozilla Kamu Lisansı Sürüm 2.0
---

# MCP Alchemy

<a href="https://www.pulsemcp.com/servers/runekaagaard-alchemy"></a>

**Status: Works great and is in daily use without any known bugs.**

**Status2: I just added the package to PyPI and updated the usage instructions. Please report any issues :)**

Let Claude be your database expert! MCP Alchemy connects Claude Desktop directly to your databases, allowing it to:

- Help you explore and understand your database structure
- Assist in writing and validating SQL queries
- Displays relationships between tables
- Analyze large datasets and create reports
- Claude Desktop Can analyse and create artifacts for very large datasets using [claude-local-files](https://github.com/runekaagaard/claude-local-files).

Works with PostgreSQL, MySQL, MariaDB, SQLite, Oracle, MS SQL Server, CrateDB, Vertica,
and a host of other [SQLAlchemy-compatible](https://docs.sqlalchemy.org/en/20/dialects/) databases.

![MCP Alchemy in action](https://raw.githubusercontent.com/runekaagaard/mcp-alchemy/refs/heads/main/screenshot.png)

## Installation

Ensure you have uv installed:
```bash
# Install uv if you haven't already
curl -LsSf https://astral.sh/uv/install.sh | sh
```

## Usage with Claude Desktop

Add to your `claude_desktop_config.json`. You need to add the appropriate database driver in the ``--with`` parameter.

_Note: After a new version release there might be a period of up to 600 seconds while the cache clears locally 
cached causing uv to raise a versioning error. Restarting the MCP client once again solves the error._

### SQLite (built into Python)
```json
{
  "mcpServers": {
    "my_sqlite_db": {
      "command": "uvx",
      "args": ["--from", "mcp-alchemy==2025.8.15.91819",
               "--refresh-package", "mcp-alchemy", "mcp-alchemy"],
      "env": {
        "DB_URL": "sqlite:////absolute/path/to/database.db"
      }
    }
  }
}
```

### PostgreSQL
```json
{
  "mcpServers": {
    "my_postgres_db": {
      "command": "uvx",
      "args": ["--from", "mcp-alchemy==2025.8.15.91819", "--with", "psycopg2-binary",
               "--refresh-package", "mcp-alchemy", "mcp-alchemy"],
      "env": {
        "DB_URL": "postgresql://user:password@localhost/dbname"
      }
    }
  }
}
```

### MySQL/MariaDB
```json
{
  "mcpServers": {
    "my_mysql_db": {
      "command": "uvx",
      "args": ["--from", "mcp-alchemy==2025.8.15.91819", "--with", "pymysql",
               "--refresh-package", "mcp-alchemy", "mcp-alchemy"],
      "env": {
        "DB_URL": "mysql+pymysql://user:password@localhost/dbname"
      }
    }
  }
}
```

### Microsoft SQL Server
```json
{
  "mcpServers": {
    "my_mssql_db": {
      "command": "uvx",
      "args": ["--from", "mcp-alchemy==2025.8.15.91819", "--with", "pymssql",
               "--refresh-package", "mcp-alchemy", "mcp-alchemy"],
      "env": {
        "DB_URL": "mssql+pymssql://user:password@localhost/dbname"
      }
    }
  }
}
```

### Oracle
```json
{
  "mcpServers": {
    "my_oracle_db": {
      "command": "uvx",
      "args": ["--from", "mcp-alchemy==2025.8.15.91819", "--with", "oracledb",
               "--refresh-package", "mcp-alchemy", "mcp-alchemy"],
      "env": {
        "DB_URL": "oracle+oracledb://user:password@localhost/dbname"
      }
    }
  }
}
```

### CrateDB
```json
{
  "mcpServers": {
    "my_cratedb": {
      "command": "uvx",
      "args": ["--from", "mcp-alchemy==2025.8.15.91819", "--with", "sqlalchemy-cratedb>=0.42.0.dev1",
               "--refresh-package", "mcp-alchemy", "mcp-alchemy"],
      "env": {
        "DB_URL": "crate://user:password@localhost:4200/?schema=testdrive"
      }
    }
  }
}
```
For connecting to CrateDB Cloud, use a URL like
`crate://user:password@example.aks1.westeurope.azure.cratedb.net:4200?ssl=true`.

### Vertica
```json
{
  "mcpServers": {
    "my_vertica_db": {
      "command": "uvx",
      "args": ["--from", "mcp-alchemy==2025.8.15.91819", "--with", "vertica-python",
               "--refresh-package", "mcp-alchemy", "mcp-alchemy"],
      "env": {
        "DB_URL": "vertica+vertica_python://user:password@localhost:5433/dbname",
        "DB_ENGINE_OPTIONS": "{\"connect_args\": {\"ssl\": false}}"
      }
    }
  }
}
```

## Environment Variables

- `DB_URL`: SQLAlchemy [database URL](https://docs.sqlalchemy.org/en/20/core/engines.html#database-urls) (required)
- `CLAUDE_LOCAL_FILES_PATH`: Directory for full result sets (optional)
- `EXECUTE_QUERY_MAX_CHARS`: Maximum output length (optional, default 4000)
- `DB_ENGINE_OPTIONS`: JSON string containing additional SQLAlchemy engine options (optional)

## Connection Pooling

MCP Alchemy uses connection pooling optimized for long-running MCP servers. The default settings are:

- `pool_pre_ping=True`: Tests connections before use to handle database timeouts and network issues
- `pool_size=1`: Maintains 1 persistent connection (MCP servers typically handle one request at a time)
- `max_overflow=2`: Allows up to 2 additional connections for burst capacity
- `pool_recycle=3600`: Refreshes connections older than 1 hour (prevents timeout issues)
- `isolation_level='AUTOCOMMIT'`: Ensures each query commits automatically

These defaults work well for most databases, but you can override them via `DB_ENGINE_OPTIONS`:

```json
{
  "DB_ENGINE_OPTIONS": "{\"pool_size\": 5, \"max_overflow\": 10, \"pool_recycle\": 1800}"
}
```

For databases with aggressive timeout settings (like MySQL's 8-hour default), the combination of `pool_pre_ping` and `pool_recycle` ensures reliable connections.

## API

### Tools

- **all_table_names**
  - Return all table names in the database
  - No input required
  - Returns comma-separated list of tables
  ```
  users, orders, products, categories
  ```

- **filter_table_names**
  - Find tables matching a substring
  - Input: `q` (string)
  - Returns matching table names
  ```
  Input: "user"
  Returns: "users, user_roles, user_permissions"
  ```

- **schema_definitions**
  - Get detailed schema for specified tables
  - Input: `table_names` (string[])
  - Returns table definitions including:
    - Column names and types
    - Primary keys
    - Foreign key relationships
    - Nullable flags
  ```
  users:
      id: INTEGER, primary key, autoincrement
      email: VARCHAR(255), nullable
      created_at: DATETIME
      
      Relationships:
        id -> orders.user_id
  ```

- **execute_query**
  - Execute SQL query with vertical output format
  - Inputs:
    - `query` (string): SQL query
    - `params` (object, optional): Query parameters
  - Returns results in clean vertical format:
  ```
  1. row
  id: 123
  name: John Doe
  created_at: 2024-03-15T14:30:00
  email: NULL

  Result: 1 rows
  ```
  - Features:
    - Smart truncation of large results
    - Full result set access via [claude-local-files](https://github.com/runekaagaard/claude-local-files) integration
    - Clean NULL value display
    - ISO formatted dates
    - Clear row separation

## Claude Local Files

When [claude-local-files](https://github.com/runekaagaard/claude-local-files) is configured:

- Access complete result sets beyond Claude's context window
- Generate detailed reports and visualizations
- Perform deep analysis on large datasets
- Export results for further processing

The integration automatically activates when `CLAUDE_LOCAL_FILES_PATH` is set.

## Developing

First clone the github repository, install the dependencies and your database driver(s) of choice:

```
git clone git@github.com:runekaagaard/mcp-alchemy.git
cd mcp-alchemy
uv sync
uv pip install psycopg2-binary
```

Then set this in claude_desktop_config.json:

```
...
"command": "uv",
"args": ["run", "--directory", "/path/to/mcp-alchemy", "-m", "mcp_alchemy.server", "main"],
...
```

## My Other LLM Projects

- **[MCP Redmine](https://github.com/runekaagaard/mcp-redmine)** - Let Claude Desktop manage your Redmine projects and issues.
- **[MCP Notmuch Sendmail](https://github.com/runekaagaard/mcp-notmuch-sendmail)** - Email assistant for Claude Desktop using notmuch.
- **[Diffpilot](https://github.com/runekaagaard/diffpilot)** - Multi-column git diff viewer with file grouping and tagging.
- **[Claude Local Files](https://github.com/runekaagaard/claude-local-files)** - Access local files in Claude Desktop artifacts.

## MCP Directory Listings

MCP Alchemy is listed in the following MCP directory sites and repositories:

- [PulseMCP](https://www.pulsemcp.com/servers/runekaagaard-alchemy)
- [Glama](https://glama.ai/mcp/servers/@runekaagaard/mcp-alchemy)
- [MCP.so](https://mcp.so/server/mcp-alchemy)
- [MCP Archive](https://mcp-archive.com/server/mcp-alchemy)
- [Playbooks MCP](https://playbooks.com/mcp/runekaagaard-alchemy)
- [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)

## Contributing

Contributions are warmly welcomed! Whether it's bug reports, feature requests, documentation improvements, or code contributions - all input is valuable. Feel free to:

- Open an issue to report bugs or suggest features
- Submit pull requests with improvements
- Enhance documentation or share your usage examples
- Ask questions and share your experiences

The goal is to make database interaction with Claude even better, and your insights and contributions help achieve that.

## License

Mozilla Public License Version 2.0
