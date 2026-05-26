---
name: "isaacwasserman/mcp-snowflake-server"
description: "Snowflake integration implementing read and (optional) write operations as well as insight tracking"
description_tr: "Snowflake entegrasyonu, okuma ve (isteğe bağlı) yazma işlemlerinin yanı sıra insight takibini sağlar."
category: "Databases"
repo: "isaacwasserman/mcp-snowflake-server"
stars: 183
url: "https://github.com/isaacwasserman/mcp-snowflake-server"
body_length: 7000
license: "GPL-3.0"
language: "Python"
body_tr: |-
  [![MseeP.ai Security Assessment Badge](https://mseep.net/pr/isaacwasserman-mcp-snowflake-server-badge.png)](https://mseep.ai/app/isaacwasserman-mcp-snowflake-server)

  # Snowflake MCP Server
  ---

  ## Genel Bakış

  Snowflake ile veritabanı etkileşimi sağlayan bir Model Context Protocol (MCP) sunucu uygulaması. Bu sunucu, SQL sorguları çalıştırmaya ve veri insights ile schema bağlamını kaynaklar olarak sunmaya olanak tanır.

  ---

  ## Bileşenler

  ### Kaynaklar

  - **`memo://insights`**  
    Bulunan veri insights'larını bir araya getiren sürekli güncellenen bir memo.  
    `append_insight` aracı aracılığıyla yeni insights eklendiğinde otomatik olarak güncellenir.

  - **`context://table/{table_name}`**  
    (Ön yükleme etkinleştirilirse) Sütunlar ve açıklamalar dahil olmak üzere tabloya özgü schema özetleri, bireysel kaynaklar olarak sunulur.

  ---

  ### Araçlar

  Sunucu aşağıdaki araçları sunar:

  #### Sorgu Araçları

  - **`read_query`**  
    Veritabanından veri okumak için `SELECT` sorguları yürütün.  
    **Giriş:**

    - `query` (string): Yürütülecek `SELECT` SQL sorgusu  
      **Döndürür:** Sorgu sonuçları nesne dizisi olarak

  - **`write_query`** (`--allow-write` ile etkinleştirilir)  
    `INSERT`, `UPDATE` veya `DELETE` sorguları yürütün.  
    **Giriş:**

    - `query` (string): SQL değişiklik sorgusu  
      **Döndürür:** Etkilenen satır sayısı veya onay

  - **`create_table`** (`--allow-write` ile etkinleştirilir)  
    Veritabanında yeni tablolar oluşturun.  
    **Giriş:**
    - `query` (string): `CREATE TABLE` SQL ifadesi  
      **Döndürür:** Tablo oluşturmanın onayı

  #### Schema Araçları

  - **`list_databases`**  
    Snowflake örneğindeki tüm veritabanlarını listeleyin.  
    **Döndürür:** Veritabanı adları dizisi

  - **`list_schemas`**  
    Belirli bir veritabanındaki tüm schemaları listeleyin.  
    **Giriş:**

    - `database` (string): Veritabanı adı  
      **Döndürür:** Schema adları dizisi

  - **`list_tables`**  
    Belirli bir veritabanı ve schemamdaki tüm tabloları listeleyin.  
    **Giriş:**

    - `database` (string): Veritabanı adı
    - `schema` (string): Schema adı  
      **Döndürür:** Tablo metaveri dizisi

  - **`describe_table`**  
    Belirli bir tablo için sütun bilgilerini görüntüleyin.  
    **Giriş:**
    - `table_name` (string): Tam nitelikli tablo adı (`database.schema.table`)  
      **Döndürür:** Adlar, türler, null kabiliyeti, varsayılanlar ve açıklamalar içeren sütun tanımları dizisi

  #### Analiz Araçları

  - **`append_insight`**  
    Memo kaynağına yeni veri insights ekleyin.  
    **Giriş:**
    - `insight` (string): Analizden keşfedilen veri insight'ı  
      **Döndürür:** Insight eklemenin onayı  
      **Etki:** `memo://insights` kaynağının güncellenmesini tetikler

  ---

  ## Claude Desktop ile Kullanım

  ### Smithery aracılığıyla Yükleme

  Snowflake Server'ı Claude Desktop için [Smithery](https://smithery.ai/server/mcp_snowflake_server) aracılığıyla otomatik olarak yüklemek için:

  ```bash
  npx -y @smithery/cli install mcp_snowflake_server --client claude
  ```

  ---

  ### UVX aracılığıyla Yükleme

  #### Geleneksel Yapılandırma (Bireysel Parametreler)

  ```json
  "mcpServers": {
    "snowflake_pip": {
      "command": "uvx",
      "args": [
        "--python=3.12",  // İsteğe bağlı: Python sürümü <=3.12 belirtin
        "mcp_snowflake_server",
        "--account", "your_account",
        "--warehouse", "your_warehouse",
        "--user", "your_user",
        "--password", "your_password",
        "--role", "your_role",
        "--database", "your_database",
        "--schema", "your_schema"
        // İsteğe bağlı: "--private_key_path", "your_private_key_absolute_path"
        // İsteğe bağlı: "--allow_write"
        // İsteğe bağlı: "--log_dir", "/absolute/path/to/logs"
        // İsteğe bağlı: "--log_level", "DEBUG"/"INFO"/"WARNING"/"ERROR"/"CRITICAL"
        // İsteğe bağlı: "--exclude_tools", "{tool_name}", ["{other_tool_name}"]
      ]
    }
  }
  ```

  #### TOML Yapılandırması (Önerilen)

  ```json
  "mcpServers": {
    "snowflake_production": {
      "command": "uvx",
      "args": [
        "--python=3.12",
        "mcp_snowflake_server",
        "--connections-file", "/path/to/snowflake_connections.toml",
        "--connection-name", "production"
        // İsteğe bağlı: "--allow_write"
        // İsteğe bağlı: "--log_dir", "/absolute/path/to/logs"
        // İsteğe bağlı: "--log_level", "DEBUG"/"INFO"/"WARNING"/"ERROR"/"CRITICAL"
        // İsteğe bağlı: "--exclude_tools", "{tool_name}", ["{other_tool_name}"]
      ]
    },
    "snowflake_staging": {
      "command": "uvx",
      "args": [
        "--python=3.12",
        "mcp_snowflake_server",
        "--connections-file", "/path/to/snowflake_connections.toml",
        "--connection-name", "staging"
      ]
    }
  }
  ```

  ---

  ### Yerel Olarak Yükleme

  1. [Claude AI Desktop Uygulaması](https://claude.ai/download)'nı yükleyin

  2. `uv` yükleyin:

  ```bash
  curl -LsSf https://astral.sh/uv/install.sh | sh
  ```

  3. Snowflake kimlik bilgileriniz ile bir `.env` dosyası oluşturun:

  ```bash
  SNOWFLAKE_USER="xxx@your_email.com"
  SNOWFLAKE_ACCOUNT="xxx"
  SNOWFLAKE_ROLE="xxx"
  SNOWFLAKE_DATABASE="xxx"
  SNOWFLAKE_SCHEMA="xxx"
  SNOWFLAKE_WAREHOUSE="xxx"
  SNOWFLAKE_PASSWORD="xxx"
  SNOWFLAKE_PASSWORD="xxx"
  SNOWFLAKE_PRIVATE_KEY_PATH=/absolute/path/key.p8
  # Alternatif olarak, dış tarayıcı kimlik doğrulamasını kullanın:
  # SNOWFLAKE_AUTHENTICATOR="externalbrowser"
  ```

  4. [İsteğe bağlı] Veritabanları, schemaları veya tabloları dışlama modelleri ayarlamak için `runtime_config.json` dosyasını değiştirin.

  5. Yerel olarak test edin:

  ```bash
  uv --directory /absolute/path/to/mcp_snowflake_server run mcp_snowflake_server
  ```

  6. Sunucuyu `claude_desktop_config.json` dosyasına ekleyin:

  #### Geleneksel Yapılandırma (Ortam Değişkenlerini Kullanma)

  ```json
  "mcpServers": {
    "snowflake_local": {
      "command": "/absolute/path/to/uv",
      "args": [
        "--python=3.12",  // İsteğe bağlı
        "--directory", "/absolute/path/to/mcp_snowflake_server",
        "run", "mcp_snowflake_server"
        // İsteğe bağlı: "--allow_write"
        // İsteğe bağlı: "--log_dir", "/absolute/path/to/logs"
        // İsteğe bağlı: "--log_level", "DEBUG"/"INFO"/"WARNING"/"ERROR"/"CRITICAL"
        // İsteğe bağlı: "--exclude_tools", "{tool_name}", ["{other_tool_name}"]
      ]
    }
  }
  ```

  #### TOML Yapılandırması (Önerilen)

  ```json
  "mcpServers": {
    "snowflake_local": {
      "command": "/absolute/path/to/uv",
      "args": [
        "--python=3.12",
        "--directory", "/absolute/path/to/mcp_snowflake_server",
        "run", "mcp_snowflake_server",
        "--connections-file", "/absolute/path/to/snowflake_connections.toml",
        "--connection-name", "development"
        // İsteğe bağlı: "--allow_write"
        // İsteğe bağlı: "--log_dir", "/absolute/path/to/logs"
        // İsteğe bağlı: "--log_level", "DEBUG"/"INFO"/"WARNING"/"ERROR"/"CRITICAL"
        // İsteğe bağlı: "--exclude_tools", "{tool_name}", ["{other_tool_name}"]
      ]
    }
  }
  ```

  ---

  ## Notlar

  - Varsayılan olarak, **yazma işlemleri devre dışıdır**. `--allow-write` ile açıkça etkinleştirin.
  - Sunucu, dışlama modelleri aracılığıyla belirli veritabanlarını, schemaları veya tabloları filtrelemeyı destekler.
  - Ön yükleme etkinleştirilirse sunucu ek tablo başına bağlam kaynakları sunar.
  - `append_insight` aracı `memo://insights` kaynağını dinamik olarak günceller.

  ---

  ## Lisans

  MIT
---

[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/isaacwasserman-mcp-snowflake-server-badge.png)](https://mseep.ai/app/isaacwasserman-mcp-snowflake-server)

# Snowflake MCP Server
---

## Overview

A Model Context Protocol (MCP) server implementation that provides database interaction with Snowflake. This server enables running SQL queries via tools and exposes data insights and schema context as resources.

---

## Components

### Resources

- **`memo://insights`**  
  A continuously updated memo aggregating discovered data insights.  
  Updated automatically when new insights are appended via the `append_insight` tool.

- **`context://table/{table_name}`**  
  (If prefetch enabled) Per-table schema summaries, including columns and comments, exposed as individual resources.

---

### Tools

The server exposes the following tools:

#### Query Tools

- **`read_query`**  
  Execute `SELECT` queries to read data from the database.  
  **Input:**

  - `query` (string): The `SELECT` SQL query to execute  
    **Returns:** Query results as array of objects

- **`write_query`** (enabled only with `--allow-write`)  
  Execute `INSERT`, `UPDATE`, or `DELETE` queries.  
  **Input:**

  - `query` (string): The SQL modification query  
    **Returns:** Number of affected rows or confirmation

- **`create_table`** (enabled only with `--allow-write`)  
  Create new tables in the database.  
  **Input:**
  - `query` (string): `CREATE TABLE` SQL statement  
    **Returns:** Confirmation of table creation

#### Schema Tools

- **`list_databases`**  
  List all databases in the Snowflake instance.  
  **Returns:** Array of database names

- **`list_schemas`**  
  List all schemas within a specific database.  
  **Input:**

  - `database` (string): Name of the database  
    **Returns:** Array of schema names

- **`list_tables`**  
  List all tables within a specific database and schema.  
  **Input:**

  - `database` (string): Name of the database
  - `schema` (string): Name of the schema  
    **Returns:** Array of table metadata

- **`describe_table`**  
  View column information for a specific table.  
  **Input:**
  - `table_name` (string): Fully qualified table name (`database.schema.table`)  
    **Returns:** Array of column definitions with names, types, nullability, defaults, and comments

#### Analysis Tools

- **`append_insight`**  
  Add new data insights to the memo resource.  
  **Input:**
  - `insight` (string): Data insight discovered from analysis  
    **Returns:** Confirmation of insight addition  
    **Effect:** Triggers update of `memo://insights` resource

---

## Usage with Claude Desktop

### Installing via Smithery

To install Snowflake Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/mcp_snowflake_server):

```bash
npx -y @smithery/cli install mcp_snowflake_server --client claude
```

---

### Installing via UVX

#### Traditional Configuration (Individual Parameters)

```json
"mcpServers": {
  "snowflake_pip": {
    "command": "uvx",
    "args": [
      "--python=3.12",  // Optional: specify Python version <=3.12
      "mcp_snowflake_server",
      "--account", "your_account",
      "--warehouse", "your_warehouse",
      "--user", "your_user",
      "--password", "your_password",
      "--role", "your_role",
      "--database", "your_database",
      "--schema", "your_schema"
      // Optionally: "--private_key_path", "your_private_key_absolute_path"
      // Optionally: "--allow_write"
      // Optionally: "--log_dir", "/absolute/path/to/logs"
      // Optionally: "--log_level", "DEBUG"/"INFO"/"WARNING"/"ERROR"/"CRITICAL"
      // Optionally: "--exclude_tools", "{tool_name}", ["{other_tool_name}"]
    ]
  }
}
```

#### TOML Configuration (Recommended)

```json
"mcpServers": {
  "snowflake_production": {
    "command": "uvx",
    "args": [
      "--python=3.12",
      "mcp_snowflake_server",
      "--connections-file", "/path/to/snowflake_connections.toml",
      "--connection-name", "production"
      // Optionally: "--allow_write"
      // Optionally: "--log_dir", "/absolute/path/to/logs"
      // Optionally: "--log_level", "DEBUG"/"INFO"/"WARNING"/"ERROR"/"CRITICAL"
      // Optionally: "--exclude_tools", "{tool_name}", ["{other_tool_name}"]
    ]
  },
  "snowflake_staging": {
    "command": "uvx",
    "args": [
      "--python=3.12",
      "mcp_snowflake_server",
      "--connections-file", "/path/to/snowflake_connections.toml",
      "--connection-name", "staging"
    ]
  }
}
```

---

### Installing Locally

1. Install [Claude AI Desktop App](https://claude.ai/download)

2. Install `uv`:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

3. Create a `.env` file with your Snowflake credentials:

```bash
SNOWFLAKE_USER="xxx@your_email.com"
SNOWFLAKE_ACCOUNT="xxx"
SNOWFLAKE_ROLE="xxx"
SNOWFLAKE_DATABASE="xxx"
SNOWFLAKE_SCHEMA="xxx"
SNOWFLAKE_WAREHOUSE="xxx"
SNOWFLAKE_PASSWORD="xxx"
SNOWFLAKE_PASSWORD="xxx"
SNOWFLAKE_PRIVATE_KEY_PATH=/absolute/path/key.p8
# Alternatively, use external browser authentication:
# SNOWFLAKE_AUTHENTICATOR="externalbrowser"
```

4. [Optional] Modify `runtime_config.json` to set exclusion patterns for databases, schemas, or tables.

5. Test locally:

```bash
uv --directory /absolute/path/to/mcp_snowflake_server run mcp_snowflake_server
```

6. Add the server to your `claude_desktop_config.json`:

#### Traditional Configuration (Using Environment Variables)

```json
"mcpServers": {
  "snowflake_local": {
    "command": "/absolute/path/to/uv",
    "args": [
      "--python=3.12",  // Optional
      "--directory", "/absolute/path/to/mcp_snowflake_server",
      "run", "mcp_snowflake_server"
      // Optionally: "--allow_write"
      // Optionally: "--log_dir", "/absolute/path/to/logs"
      // Optionally: "--log_level", "DEBUG"/"INFO"/"WARNING"/"ERROR"/"CRITICAL"
      // Optionally: "--exclude_tools", "{tool_name}", ["{other_tool_name}"]
    ]
  }
}
```

#### TOML Configuration (Recommended)

```json
"mcpServers": {
  "snowflake_local": {
    "command": "/absolute/path/to/uv",
    "args": [
      "--python=3.12",
      "--directory", "/absolute/path/to/mcp_snowflake_server",
      "run", "mcp_snowflake_server",
      "--connections-file", "/absolute/path/to/snowflake_connections.toml",
      "--connection-name", "development"
      // Optionally: "--allow_write"
      // Optionally: "--log_dir", "/absolute/path/to/logs"
      // Optionally: "--log_level", "DEBUG"/"INFO"/"WARNING"/"ERROR"/"CRITICAL"
      // Optionally: "--exclude_tools", "{tool_name}", ["{other_tool_name}"]
    ]
  }
}
```

---

## Notes

- By default, **write operations are disabled**. Enable them explicitly with `--allow-write`.
- The server supports filtering out specific databases, schemas, or tables via exclusion patterns.
- The server exposes additional per-table context resources if prefetching is enabled.
- The `append_insight` tool updates the `memo://insights` resource dynamically.

---

## License

MIT
