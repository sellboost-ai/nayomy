---
name: "TheRaLabs/legion-mcp"
description: "Universal database MCP server supporting multiple database types including PostgreSQL, Redshift, CockroachDB, MySQL, RDS MySQL, Microsoft SQL Server, BigQuery, Oracle DB, and SQLite."
description_tr: "Birden fazla veritabanı türünü destekleyen universal database MCP server'ı. PostgreSQL, Redshift, CockroachDB, MySQL, RDS MySQL, Microsoft SQL Server, BigQuery, Oracle DB ve SQLite ile uyumludur."
category: "Databases"
repo: "TheRaLabs/legion-mcp"
stars: 92
url: "https://github.com/TheRaLabs/legion-mcp"
body_length: 11744
license: "GPL-3.0"
language: "Python"
homepage: "https://thelegionai.com/"
body_tr: |-
  # Multi-Database MCP Server (Legion AI tarafından)

  Legion Query Runner ile veritabanlarındaki verilere erişmenize ve sorgu yapmanıza yardımcı olan, Model Context Protocol (MCP) Python SDK'sı entegrasyonlu bir sunucudur.

  # Start Generation Here
  Bu araç [Legion AI](https://thelegionai.com/) tarafından sağlanmaktadır. Tam özellikli ve tam güçlü yapay zeka veri analitik aracını kullanmak için lütfen siteyi ziyaret edin. Desteklemesini istediğiniz bir veritabanı varsa bize e-posta gönderin.
  # End Generation Here

  ## Veritabanı MCP Neden Seçilmeli

  Veritabanı MCP, diğer veritabanı erişim çözümlerinden birkaç zorlayıcı nedenle öne çıkmaktadır:

  - **Birleşik Çok Veritabanı Arayüzü**: PostgreSQL, MySQL, SQL Server ve diğer veritabanlarına tek bir tutarlı API üzerinden bağlanın - her veritabanı türü için farklı istemci kütüphaneleri öğrenmenize gerek yoktur.
  - **Yapay Zeka Hazır Entegrasyon**: Model Context Protocol (MCP) aracılığıyla yapay zeka asistanı etkileşimleri için özel olarak tasarlanmış, doğal dil veritabanı işlemlerini etkinleştirir.
  - **Sıfır Yapılandırma Şema Keşfi**: Veritabanı şemalarını manuel yapılandırma veya eşleme olmadan otomatik olarak keşfeder ve ortaya çıkarır.
  - **Veritabanı Agnostik Araçlar**: Temel veritabanı teknolojisine bakılmaksızın aynı araç seti ile tabloları bulun, şemaları keşfedin ve sorguları yürütün.
  - **Güvenli Kimlik Bilgisi Yönetimi**: Veritabanı kimlik doğrulama detaylarını güvenli bir şekilde işler, kimlik bilgilerini uygulama kodundan ayırır.
  - **Basit Dağıtım**: LangChain, FastAPI ve diğerleri gibi modern yapay zeka geliştirme ortamlarıyla minimal kurulum ile çalışır.
  - **Genişletilebilir Tasarım**: Belirli kullanım durumları için işlevselliği geliştirmek üzere kolayca özel araçlar ve istemler ekleyin.

  İster veritabanı erişimine ihtiyaç duyan yapay zeka ajanları oluşturuyor olun ister birden çok veritabanına birleşik bir arayüz istemiş olun, Veritabanı MCP geliştirme süresini ve karmaşıklığını önemli ölçüde azaltan akamçalı bir çözüm sağlar.

  ## Özellikler

  - Çok veritabanı desteği - aynı anda birden çok veritabanına bağlanın
  - Legion Query Runner aracılığıyla veritabanı erişimi
  - Yapay zeka asistanları için Model Context Protocol (MCP) desteği
  - Veritabanı işlemlerini MCP kaynakları, araçları ve istemler olarak ortaya çıkarın
  - Birden çok dağıtım seçeneği (bağımsız MCP sunucusu, FastAPI entegrasyonu)
  - Sorgu yürütme ve sonuç işleme
  - Ortam değişkenleri, komut satırı argümanları veya MCP ayarları JSON üzerinden esnek yapılandırma
  - Çok veritabanı kurulumları için kullanıcı tarafından yönlendirilen veritabanı seçimi

  ## Desteklenen Veritabanları

  | Veritabanı | DB_TYPE kodu |
  |----------|--------------|
  | PostgreSQL | pg |
  | Redshift | redshift |
  | CockroachDB | cockroach |
  | MySQL | mysql |
  | RDS MySQL | rds_mysql |
  | Microsoft SQL Server | mssql |
  | Big Query | bigquery |
  | Oracle DB | oracle |
  | SQLite | sqlite |

  Legion Query Runner kütüphanesini konektör olarak kullanıyoruz. Daha fazla bilgi için [api dokümanlarına](https://theralabs.github.io/legion-database/docs/category/query-runners) bakabilirsiniz.

  ## MCP Nedir?

  Model Context Protocol (MCP), yapay zeka uygulamalarında bağlamı korumanın bir spesifikasyonudur. Bu sunucu [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk)'sını kullanarak:

  - Veritabanı işlemlerini yapay zeka asistanları için araçlar olarak ortaya çıkarır
  - Veritabanı şemaları ve meta verilerini kaynaklar olarak sağlar
  - Veritabanı işlemleri için yararlı istemler oluşturur
  - Veritabanları ile durum bilgili etkileşimleri etkinleştirir

  ## Kurulum & Yapılandırma

  ### Gerekli Parametreler

  Tek veritabanı yapılandırması için:
  - **DB_TYPE**: Veritabanı türü kodu (yukarıdaki tabloya bakın)
  - **DB_CONFIG**: Veritabanı bağlantısı için JSON yapılandırma dizesi

  Çok veritabanı yapılandırması için:
  - **DB_CONFIGS**: Her biri içeren bir JSON dizisi:
    - **db_type**: Veritabanı türü kodu
    - **configuration**: Veritabanı bağlantı yapılandırması
    - **description**: Veritabanının okunabilir bir açıklaması

  Yapılandırma formatı veritabanı türüne göre değişir. Veritabanına özel yapılandırma detayları için [API dokümanlarına](https://theralabs.github.io/legion-database/docs/category/query-runners) bakın.

  ### Kurulum Yöntemleri

  #### Seçenek 1: UV Kullanma (Önerilen)

  [`uv`](https://docs.astral.sh/uv/) kullanırken, belirli bir kurulum gerekli değildir. *database-mcp*'yi doğrudan çalıştırmak için [`uvx`](https://docs.astral.sh/uv/guides/tools/) kullanacağız.

  **UV Yapılandırma Örneği (Tek Veritabanı):**

  ```json
  DB_TYPE ve DB_CONFIG'i bağlantı bilgileriniz ile değiştirin.
  {
      "mcpServers": {
        "database-mcp": {
          "command": "uvx",
          "args": [
            "database-mcp"
          ],
          "env": {
            "DB_TYPE": "pg",
            "DB_CONFIG": "{\"host\":\"localhost\",\"port\":5432,\"user\":\"user\",\"password\":\"pw\",\"dbname\":\"dbname\"}"
          },
          "disabled": true,
          "autoApprove": []
        }
      }
  }
  ```

  **UV Yapılandırma Örneği (Birden Çok Veritabanı):**

  ```json
  {
      "mcpServers": {
        "database-mcp": {
          "command": "uvx",
          "args": [
            "database-mcp"
          ],
          "env": {
            "DB_CONFIGS": "[{\"id\":\"pg_main\",\"db_type\":\"pg\",\"configuration\":{\"host\":\"localhost\",\"port\":5432,\"user\":\"user\",\"password\":\"pw\",\"dbname\":\"postgres\"},\"description\":\"PostgreSQL Database\"},{\"id\":\"mysql_data\",\"db_type\":\"mysql\",\"configuration\":{\"host\":\"localhost\",\"port\":3306,\"user\":\"root\",\"password\":\"pass\",\"database\":\"mysql\"},\"description\":\"MySQL Database\"}]"
          },
          "disabled": true,
          "autoApprove": []
        }
      }
  }
  ```

  #### Seçenek 2: PIP Kullanma

  pip üzerinden kurun:

  ```bash
  pip install database-mcp
  ```

  **PIP Yapılandırma Örneği (Tek Veritabanı):**

  ```json
  {
    "mcpServers": {
      "database": {
        "command": "python",
        "args": [
          "-m", "database_mcp", 
          "--repository", "path/to/git/repo"
        ],
        "env": {
          "DB_TYPE": "pg",
          "DB_CONFIG": "{\"host\":\"localhost\",\"port\":5432,\"user\":\"user\",\"password\":\"pw\",\"dbname\":\"dbname\"}"
        }
      }
    }
  }
  ```

  ## Sunucuyu Çalıştırma

  ### Üretim Modu

  ```bash
  python mcp_server.py
  ```

  ### Yapılandırma Yöntemleri

  #### Ortam Değişkenleri (Tek Veritabanı)

  ```bash
  export DB_TYPE="pg"  # veya mysql, postgresql, vb.
  export DB_CONFIG='{"host":"localhost","port":5432,"user":"username","password":"password","dbname":"database_name"}'
  uv run src/database_mcp/mcp_server.py
  ```

  #### Ortam Değişkenleri (Birden Çok Veritabanı)

  ```bash
  export DB_CONFIGS='[{"id":"pg_main","db_type":"pg","configuration":{"host":"localhost","port":5432,"user":"username","password":"password","dbname":"database_name"},"description":"PostgreSQL Database"},{"id":"mysql_users","db_type":"mysql","configuration":{"host":"localhost","port":3306,"user":"root","password":"pass","database":"mysql"},"description":"MySQL Database"}]'
  uv run src/database_mcp/mcp_server.py
  ```

  Bir ID belirtmezseniz, sistem otomatik olarak veritabanı türü ve açıklamasına göre bir tane oluşturacaktır:

  ```bash
  export DB_CONFIGS='[{"db_type":"pg","configuration":{"host":"localhost","port":5432,"user":"username","password":"password","dbname":"database_name"},"description":"PostgreSQL Database"},{"db_type":"mysql","configuration":{"host":"localhost","port":3306,"user":"root","password":"pass","database":"mysql"},"description":"MySQL Database"}]'
  # ID'ler "pg_postgres_0" ve "my_mysqldb_1" gibi şeyler olarak oluşturulacak
  uv run src/database_mcp/mcp_server.py
  ```

  #### Komut Satırı Argümanları (Tek Veritabanı)

  ```bash
  python mcp_server.py --db-type pg --db-config '{"host":"localhost","port":5432,"user":"username","password":"password","dbname":"database_name"}'
  ```

  #### Komut Satırı Argümanları (Birden Çok Veritabanı)

  ```bash
  python mcp_server.py --db-configs '[{"id":"pg_main","db_type":"pg","configuration":{"host":"localhost","port":5432,"user":"username","password":"password","dbname":"database_name"},"description":"PostgreSQL Database"},{"id":"mysql_users","db_type":"mysql","configuration":{"host":"localhost","port":3306,"user":"root","password":"pass","database":"mysql"},"description":"MySQL Database"}]'
  ```

  Her veritabanı için `id` alanını kullanarak özel ID'ler belirtebileceğinizi veya sistemin bunları veritabanı türü ve açıklamasına göre oluşturmasına izin verebileceğinizi unutmayın.

  ## Çok Veritabanı Desteği

  Birden çok veritabanına bağlanırken, her sorgu için hangi veritabanının kullanılacağını belirtmeniz gerekir:

  1. Mevcut veritabanlarını ID'leriyle görmek için `list_databases` aracını kullanın
  2. Veritabanlarının şema detaylarını görmek için `get_database_info` kullanın
  3. Tüm veritabanları arasında bir tablo bulmak için `find_table` kullanın
  4. `execute_query`, `get_table_columns` vb. araçlara `db_id` parametresini sağlayın

  Veritabanı bağlantıları dahili olarak `DbConfig` nesnelerinin bir sözlüğü olarak yönetilir ve her veritabanının benzersiz bir ID'si vardır. Şema bilgisi, her tablo adını ve sütun bilgisini içeren bir tablo nesneleri listesi olarak temsil edilir.

  `select_database` istemi kullanıcıları veritabanı seçim süreci aracılığıyla yönlendirir.

  ## Şema Temsili

  Veritabanı şemaları tablo nesnelerinin bir listesi olarak temsil edilir ve her tablo sütunları hakkında bilgi içerir:

  ```json
  [
    {
      "name": "users",
      "columns": [
        {"name": "id", "type": "integer"},
        {"name": "username", "type": "varchar"},
        {"name": "email", "type": "varchar"}
      ]
    },
    {
      "name": "orders",
      "columns": [
        {"name": "id", "type": "integer"},
        {"name": "user_id", "type": "integer"},
        {"name": "product_id", "type": "integer"},
        {"name": "quantity", "type": "integer"}
      ]
    }
  ]
  ```

  Bu temsil, tablo ve sütun bilgilerine programlı olarak erişmeyi kolay kılırken temiz bir hiyerarşik yapı tutar.

  ## Ortaya Çıkarılan MCP Yetenekleri

  ### Kaynaklar

  | Kaynak | Açıklama |
  |----------|-------------|
  | `resource://schema/{database_id}` | Bir veya tüm yapılandırılmış veritabanlarının şemalarını alın |

  ### Araçlar

  | Araç | Açıklama |
  |------|-------------|
  | `execute_query` | Bir SQL sorgusu yürütün ve sonuçları markdown tablosu olarak döndürün |
  | `execute_query_json` | Bir SQL sorgusu yürütün ve sonuçları JSON olarak döndürün |
  | `get_table_columns` | Belirli bir tablo için sütun adlarını alın |
  | `get_table_types` | Belirli bir tablo için sütun türlerini alın |
  | `get_query_history` | Son sorgu geçmişini alın |
  | `list_databases` | Tüm mevcut veritabanı bağlantılarını listeleyin |
  | `get_database_info` | Şema dahil olmak üzere bir veritabanı hakkında ayrıntılı bilgi alın |
  | `find_table` | Belirli bir tablonun hangi veritabanında olduğunu bulun |
  | `describe_table` | Sütun adları ve türleri dahil olmak üzere bir tablonun ayrıntılı açıklamasını alın |
  | `get_table_sample` | Bir tablodaki verinin bir örneğini alın |

  `execute_query`, `get_table_columns` vb. gibi tüm veritabanına özgü araçlar, hangi veritabanının kullanılacağını belirtmek için `db_id` parametresi gerektirir.

  ### İstemler

  | İstem | Açıklama |
  |--------|-------------|
  | `sql_query` | Veritabanına karşı bir SQL sorgusu oluşturun |
  | `explain_query` | Bir SQL sorgusunun ne yaptığını açıklayın |
  | `optimize_query` | Daha iyi performans için bir SQL sorgusunu optimize edin |
  | `select_database` | Kullanıcıya hangi veritabanını kullanacağını seçmesinde yardımcı olun |

  ## Geliştirme

  ### MCP Inspector Kullanma

  inspektörü başlatmak için bunu çalıştırın
  ```bash
  npx @modelcontextprotocol/inspector uv run src/database_mcp/mcp_server.py
  ```

  ardından komut giriş alanında şuna benzer bir şey ayarlayın
  ```
  run src/database_mcp/mcp_server.py --db-type pg --db-config '{"host":"localhost","port":5432,"user":"username","password":"password","dbname":"database_name"}'
  ```

  ### Test Etme

  ```bash
  uv pip install -e ".[dev]"
  pytest
  ```

  ### Yayımlama

  ```bash
  # Derleme yapılarını temizleyin
  rm -rf dist/ build/ 
  # Varsa .egg-info dizinlerini kaldırın
  find . -name "*.egg-info" -type d -exec rm -rf {} + 2>/dev/null || true
  # Paketi derleyin
  uv run python -m build
  # PyPI'ye yükleyin
  uv run python -m twine upload dist/*
  ```

  ## Lisans

  Bu depo GPL lisansı altında lisanslanmıştır
---

# Multi-Database MCP Server (by Legion AI)

A server that helps people access and query data in databases using the Legion Query Runner with integration of the Model Context Protocol (MCP) Python SDK.

# Start Generation Here
This tool is provided by [Legion AI](https://thelegionai.com/). To use the full-fledged and fully powered AI data analytics tool, please visit the site. Email us if there is one database you want us to support.
# End Generation Here

## Why Choose Database MCP

Database MCP stands out from other database access solutions for several compelling reasons:

- **Unified Multi-Database Interface**: Connect to PostgreSQL, MySQL, SQL Server, and other databases through a single consistent API - no need to learn different client libraries for each database type.
- **AI-Ready Integration**: Built specifically for AI assistant interactions through the Model Context Protocol (MCP), enabling natural language database operations.
- **Zero-Configuration Schema Discovery**: Automatically discovers and exposes database schemas without manual configuration or mapping.
- **Database-Agnostic Tools**: Find tables, explore schemas, and execute queries with the same set of tools regardless of the underlying database technology.
- **Secure Credential Management**: Handles database authentication details securely, separating credentials from application code.
- **Simple Deployment**: Works with modern AI development environments like LangChain, FastAPI, and others with minimal setup.
- **Extensible Design**: Easily add custom tools and prompts to enhance functionality for specific use cases.

Whether you're building AI agents that need database access or simply want a unified interface to multiple databases, Database MCP provides a streamlined solution that dramatically reduces development time and complexity.

## Features

- Multi-database support - connect to multiple databases simultaneously
- Database access via Legion Query Runner
- Model Context Protocol (MCP) support for AI assistants
- Expose database operations as MCP resources, tools, and prompts
- Multiple deployment options (standalone MCP server, FastAPI integration)
- Query execution and result handling
- Flexible configuration via environment variables, command-line arguments, or MCP settings JSON
- User-driven database selection for multi-database setups

## Supported Databases

| Database | DB_TYPE code |
|----------|--------------|
| PostgreSQL | pg |
| Redshift | redshift |
| CockroachDB | cockroach |
| MySQL | mysql |
| RDS MySQL | rds_mysql |
| Microsoft SQL Server | mssql |
| Big Query | bigquery |
| Oracle DB | oracle |
| SQLite | sqlite |

We use Legion Query Runner library as connectors. You can find more info on their [api doc](https://theralabs.github.io/legion-database/docs/category/query-runners).

## What is MCP?

The Model Context Protocol (MCP) is a specification for maintaining context in AI applications. This server uses the [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk) to:

- Expose database operations as tools for AI assistants
- Provide database schemas and metadata as resources
- Generate useful prompts for database operations
- Enable stateful interactions with databases

## Installation & Configuration

### Required Parameters

For single database configuration:
- **DB_TYPE**: The database type code (see table above)
- **DB_CONFIG**: A JSON configuration string for database connection

For multi-database configuration:
- **DB_CONFIGS**: A JSON array of database configurations, each containing:
  - **db_type**: The database type code
  - **configuration**: Database connection configuration
  - **description**: A human-readable description of the database

The configuration format varies by database type. See the [API documentation](https://theralabs.github.io/legion-database/docs/category/query-runners) for database-specific configuration details.

### Installation Methods

#### Option 1: Using UV (Recommended)

When using [`uv`](https://docs.astral.sh/uv/), no specific installation is needed. We will use [`uvx`](https://docs.astral.sh/uv/guides/tools/) to directly run *database-mcp*.

**UV Configuration Example (Single Database):**

```json
REPLACE DB_TYPE and DB_CONFIG with your connection info.
{
    "mcpServers": {
      "database-mcp": {
        "command": "uvx",
        "args": [
          "database-mcp"
        ],
        "env": {
          "DB_TYPE": "pg",
          "DB_CONFIG": "{\"host\":\"localhost\",\"port\":5432,\"user\":\"user\",\"password\":\"pw\",\"dbname\":\"dbname\"}"
        },
        "disabled": true,
        "autoApprove": []
      }
    }
}
```

**UV Configuration Example (Multiple Databases):**

```json
{
    "mcpServers": {
      "database-mcp": {
        "command": "uvx",
        "args": [
          "database-mcp"
        ],
        "env": {
          "DB_CONFIGS": "[{\"id\":\"pg_main\",\"db_type\":\"pg\",\"configuration\":{\"host\":\"localhost\",\"port\":5432,\"user\":\"user\",\"password\":\"pw\",\"dbname\":\"postgres\"},\"description\":\"PostgreSQL Database\"},{\"id\":\"mysql_data\",\"db_type\":\"mysql\",\"configuration\":{\"host\":\"localhost\",\"port\":3306,\"user\":\"root\",\"password\":\"pass\",\"database\":\"mysql\"},\"description\":\"MySQL Database\"}]"
        },
        "disabled": true,
        "autoApprove": []
      }
    }
}
```

#### Option 2: Using PIP

Install via pip:

```bash
pip install database-mcp
```

**PIP Configuration Example (Single Database):**

```json
{
  "mcpServers": {
    "database": {
      "command": "python",
      "args": [
        "-m", "database_mcp", 
        "--repository", "path/to/git/repo"
      ],
      "env": {
        "DB_TYPE": "pg",
        "DB_CONFIG": "{\"host\":\"localhost\",\"port\":5432,\"user\":\"user\",\"password\":\"pw\",\"dbname\":\"dbname\"}"
      }
    }
  }
}
```

## Running the Server

### Production Mode

```bash
python mcp_server.py
```

### Configuration Methods

#### Environment Variables (Single Database)

```bash
export DB_TYPE="pg"  # or mysql, postgresql, etc.
export DB_CONFIG='{"host":"localhost","port":5432,"user":"username","password":"password","dbname":"database_name"}'
uv run src/database_mcp/mcp_server.py
```

#### Environment Variables (Multiple Databases)

```bash
export DB_CONFIGS='[{"id":"pg_main","db_type":"pg","configuration":{"host":"localhost","port":5432,"user":"username","password":"password","dbname":"database_name"},"description":"PostgreSQL Database"},{"id":"mysql_users","db_type":"mysql","configuration":{"host":"localhost","port":3306,"user":"root","password":"pass","database":"mysql"},"description":"MySQL Database"}]'
uv run src/database_mcp/mcp_server.py
```

If you don't specify an ID, the system will generate one automatically based on the database type and description:

```bash
export DB_CONFIGS='[{"db_type":"pg","configuration":{"host":"localhost","port":5432,"user":"username","password":"password","dbname":"database_name"},"description":"PostgreSQL Database"},{"db_type":"mysql","configuration":{"host":"localhost","port":3306,"user":"root","password":"pass","database":"mysql"},"description":"MySQL Database"}]'
# IDs will be generated as something like "pg_postgres_0" and "my_mysqldb_1"
uv run src/database_mcp/mcp_server.py
```

#### Command Line Arguments (Single Database)

```bash
python mcp_server.py --db-type pg --db-config '{"host":"localhost","port":5432,"user":"username","password":"password","dbname":"database_name"}'
```

#### Command Line Arguments (Multiple Databases)

```bash
python mcp_server.py --db-configs '[{"id":"pg_main","db_type":"pg","configuration":{"host":"localhost","port":5432,"user":"username","password":"password","dbname":"database_name"},"description":"PostgreSQL Database"},{"id":"mysql_users","db_type":"mysql","configuration":{"host":"localhost","port":3306,"user":"root","password":"pass","database":"mysql"},"description":"MySQL Database"}]'
```

Note that you can specify custom IDs for each database using the `id` field, or let the system generate them based on database type and description.

## Multi-Database Support

When connecting to multiple databases, you need to specify which database to use for each query:

1. Use the `list_databases` tool to see available databases with their IDs
2. Use `get_database_info` to view schema details of databases
3. Use `find_table` to locate a table across all databases
4. Provide the `db_id` parameter to tools like `execute_query`, `get_table_columns`, etc.

Database connections are managed internally as a dictionary of `DbConfig` objects, with each database having a unique ID. Schema information is represented as a list of table objects, where each table contains its name and column information.

The `select_database` prompt guides users through the database selection process.

## Schema Representation

Database schemas are represented as a list of table objects, with each table containing information about its columns:

```json
[
  {
    "name": "users",
    "columns": [
      {"name": "id", "type": "integer"},
      {"name": "username", "type": "varchar"},
      {"name": "email", "type": "varchar"}
    ]
  },
  {
    "name": "orders",
    "columns": [
      {"name": "id", "type": "integer"},
      {"name": "user_id", "type": "integer"},
      {"name": "product_id", "type": "integer"},
      {"name": "quantity", "type": "integer"}
    ]
  }
]
```

This representation makes it easy to programmatically access table and column information while keeping a clean hierarchical structure.

## Exposed MCP Capabilities

### Resources

| Resource | Description |
|----------|-------------|
| `resource://schema/{database_id}` | Get the schemas for one or all configured databases |

### Tools

| Tool | Description |
|------|-------------|
| `execute_query` | Execute a SQL query and return results as a markdown table |
| `execute_query_json` | Execute a SQL query and return results as JSON |
| `get_table_columns` | Get column names for a specific table |
| `get_table_types` | Get column types for a specific table |
| `get_query_history` | Get the recent query history |
| `list_databases` | List all available database connections |
| `get_database_info` | Get detailed information about a database including schema |
| `find_table` | Find which database contains a specific table |
| `describe_table` | Get detailed description of a table including column names and types |
| `get_table_sample` | Get a sample of data from a table |

All database-specific tools (like `execute_query`, `get_table_columns`, etc.) require a `db_id` parameter to specify which database to use.

### Prompts

| Prompt | Description |
|--------|-------------|
| `sql_query` | Create an SQL query against the database |
| `explain_query` | Explain what a SQL query does |
| `optimize_query` | Optimize a SQL query for better performance |
| `select_database` | Help user select which database to use |

## Development

### Using MCP Inspector

run this to start the inspector
```bash
npx @modelcontextprotocol/inspector uv run src/database_mcp/mcp_server.py
```

then in the command input field, set something like
```
run src/database_mcp/mcp_server.py --db-type pg --db-config '{"host":"localhost","port":5432,"user":"username","password":"password","dbname":"database_name"}'
```

### Testing

```bash
uv pip install -e ".[dev]"
pytest
```

### Publishing

```bash
# Clean up build artifacts
rm -rf dist/ build/ 
# Remove any .egg-info directories if they exist
find . -name "*.egg-info" -type d -exec rm -rf {} + 2>/dev/null || true
# Build the package
uv run python -m build
# Upload to PyPI
uv run python -m twine upload dist/*
```

## License

This repository is licensed under GPL
