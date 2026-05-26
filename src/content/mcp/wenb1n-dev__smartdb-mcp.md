---
name: "wenb1n-dev/SmartDB_MCP"
description: "A universal database MCP server supporting simultaneous connections to multiple databases. It provides tools for database operations, health analysis, SQL optimization, and more. Compatible with mainstream databases including MySQL, PostgreSQL, SQL Server, MariaDB, Dameng, and Oracle. Supports Streamable HTTP, SSE, and STDIO; integrates OAuth 2.0; and is designed for easy customization and extensi"
category: "Databases"
repo: "wenb1n-dev/SmartDB_MCP"
stars: 82
url: "https://github.com/wenb1n-dev/SmartDB_MCP"
body_length: 12241
license: "MIT"
language: "Python"
body_tr: |-
  [![简体中文](https://img.shields.io/badge/简体中文-点击查看-orange)](README-zh.md)
  [![English](https://img.shields.io/badge/English-Click-yellow)](README.md)
  [![MseeP.ai Security Assessment Badge](https://mseep.net/mseep-audited.png)](https://mseep.ai/app/wenb1n-dev-smartdb-mcp)




  # SmartDB

  SmartDB, Model Context Protocol (MCP) sunucu arayüzünü uygulayan evrensel bir veritabanı ağ geçididir. Bu ağ geçidi, MCP uyumlu istemcilerin farklı veritabanlarına bağlanmasını ve keşfetmesini sağlar.

  Benzer ürünlerle karşılaştırıldığında, SmartDB yalnızca temel veritabanı bağlantısı ve keşif yetenekleri sağlamakla kalmaz, aynı zamanda OAuth 2.0 kimlik doğrulaması, sağlık kontrolleri, SQL optimizasyonu ve index sağlık tespiti gibi ileri özellikler ekleyerek veritabanı yönetimini ve bakımını daha güvenli ve akıllı hale getirir.




  ## Şu Anda Desteklenen Veritabanları
  | Veritabanı   | Destek | Açıklama              |
  |------------|--------|--------------------------|
  | MySQL      | √ | MySQL 5.6+, MariaDB 10+ destekler |
  | PostgreSQL | √ | PostgreSQL 9.6+, YMatrix destekler |
  | Oracle     | √ | Oracle 12+               |
  | SQL Server | √ | Microsoft SQL Server 2012+ |
  | Dameng     | √ | Dameng 8.0+              |

  ## Tool Listesi
  | Tool Adı | Açıklama                                                                                                                                                                                   |
  |-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | execute_sql | İzin yapılandırmasına göre ["SELECT", "SHOW", "DESCRIBE", "EXPLAIN", "INSERT", "UPDATE", "DELETE", "CREATE", "ALTER", "DROP", "TRUNCATE"] komutlarını çalıştırabilen SQL yürütme aracı |
  | get_db_health | Veritabanı sağlık durumunu (bağlantı durumu, işlem durumu, çalışma durumu, kilit tespiti) analiz eder ve profesyonel tanı raporları ve çözümler sunar                             |
  | get_table_desc | Tablo adlarına göre veritabanında tablo yapılarını arar, çok tablo sorgularını destekler                                                                                              |
  | get_table_index | Tablo adlarına göre veritabanında tablo indexlerini arar, çok tablo sorgularını destekler                                                                                                 |
  | get_table_name | Veritabanı tablo adı sorgu aracı. Veritabanındaki tüm tablo adlarını sorgulamak veya Çince tablo adlarına veya tablo açıklamalarına göre karşılık gelen tablo adlarını aramak için kullanılır                      |
  | get_db_version | Veritabanı sürüm sorgu aracı                                                                                                                                                                   |
  | sql_creator | Farklı veritabanı türlerine göre ilgili SQL sorgu ifadeleri oluşturan SQL sorgu oluşturma aracı                                                                                 |
  | sql_optimize | Yürütme planları, tablo yapısı bilgileri, tablo veri hacmi ve tablo indexlerine göre uzman optimizasyon önerileri sağlayan profesyonel bir SQL performans optimizasyon aracı   | 

  ## Kullanım

  ### Ortam Yapılandırma Dosyası Açıklaması
  ```bash
  # Veritabanı yapılandırma dosyası yolu
  DATABASE_CONFIG_FILE=/Volumes/SmartDB/src/config/database_config.json

  #========OAuth2========
  # OAuth2 client ID
  CLIENT_ID=smart_db_client_id
  # OAuth2 client secret
  CLIENT_SECRET=smart_db_client_secret
  # Access token sona erme süresi (dakika)
  ACCESS_TOKEN_EXPIRE_MINUTES=30
  # Refresh token sona erme süresi (gün)
  REFRESH_TOKEN_EXPIRE_DAYS=30
  # Token şifreleme anahtarı
  TOKEN_SECRET_KEY=smart_db_token_secret
  # Kullanıcı adı
  OAUTH_USER_NAME=admin
  # Şifre
  OAUTH_USER_PASSWORD=wenb1n
  ```
  Not: oauth yapılandırmasında client ID ve anahtarı ayarlarsanız, önceki kodda static/config dosyasındaki karşılık gelen yapılandırmayı da değiştirin

  ### Veritabanı Bağlantısı Yapılandırması Açıklaması
  ```json
  {
    "default": {
      "host": "192.168.xxx.xxx",
      "port": 3306,
      "user": "root",
      "password": "root",
      "database": "a_llm",
      "role": "readonly",
      "pool_size": 10,
      "max_overflow": 20,
      "pool_recycle": 3600,
      "pool_timeout": 30,
      "type": "mysql"
    },
    "postgresql": {
      "host": "192.168.xxx.xxx",
      "port": 5432,
      "user": "postgres",
      "password": "123456",
      "database": "postgres",
      "schema": "public",
      "role": "readonly",
      "pool_size": 5,
      "max_overflow": 10,
      "pool_recycle": 3600,
      "pool_timeout": 30,
      "type": "postgresql"
    },
    "oracle": {
      "host": "192.168.xxx.xxx",
      "port": 1521,
      "user": "U_ORACLE",
      "password": "123456",
      "database": "123456",
      "service_name": "ORCL",
      "role": "readonly",
      "pool_size": 5,
      "max_overflow": 10,
      "pool_recycle": 3600,
      "pool_timeout": 30,
      "type": "oracle"
    },
    "mssql": {
      "host": "192.168.xxx.xxx",
      "port": 1433,
      "user": "test",
      "password": "123456",
      "database": "TEST",
      "schema": "dbo",
      "role": "readonly",
      "pool_size": 5,
      "max_overflow": 10,
      "pool_recycle": 3600,
      "pool_timeout": 30,
      "type": "mssqlserver"
    }
  }
  ```

  * Veritabanı Bağlantısı Parametre Açıklaması

  Aşağıdaki tablo, veritabanı bağlantısı yapılandırma dosyasındaki her parametrenin anlamını ve kullanımını detaylı olarak açıklar:

  | Parametre | Zorunlu | Tür | Açıklama |
  |-----------|---------|------|-------------|
  | host | Evet | string | Veritabanı sunucusu adresi |
  | port | Evet | integer | Veritabanı sunucusu port numarası |
  | user | Evet | string | Veritabanı kullanıcı adı |
  | password | Evet | string | Veritabanı kullanıcı şifresi |
  | database | Evet | string | Bağlanılacak veritabanı adı |
  | role | Evet | string | Kullanıcı rolü, örneğin "readonly" salt okunur izinler için |
  | pool_size | Evet | integer | Bağlantı havuzu boyutu |
  | max_overflow | Evet | integer | Bağlantı havuzundaki maksimum taşma bağlantıları |
  | pool_recycle | Evet | integer | Bağlantı havuzu geri dönüştürme süresi (saniye) |
  | pool_timeout | Evet | integer | Bağlantı havuzu zaman aşımı süresi (saniye) |
  | type | Evet | string | Veritabanı türü, örneğin "mysql", "postgresql", "oracle", "mssqlserver" |

  * Belirli Veritabanları İçin Ek Parametreler

  | Parametre | Veritabanı Türü | Zorunlu | Tür | Açıklama |
  |-----------|---------------|---------|------|-------------|
  | schema | PostgreSQL, SQL Server | Hayır | string | Veritabanı şeması |
  | service_name | Oracle | Hayır | string | Oracle hizmet adı |

  * role izin kontrol yapılandırma öğeleri ve karşılık gelen veritabanı izinleri: readonly (salt okunur), read/write (okuma/yazma), administrator (yönetici)
  ```
      "readonly": ["SELECT", "SHOW", "DESCRIBE", "EXPLAIN"],  # salt okunur izin
      "writer": ["SELECT", "SHOW", "DESCRIBE", "EXPLAIN", "INSERT", "UPDATE", "DELETE"],  # okuma/yazma izni
      "admin": ["SELECT", "SHOW", "DESCRIBE", "EXPLAIN", "INSERT", "UPDATE", "DELETE", 
               "CREATE", "ALTER", "DROP", "TRUNCATE"]  # yönetici izni
  ```

  * Not

  "default" varsayılan veritabanı bağlantısı yapılandırmasıdır ve yapılandırılması gereklidir. Diğer veritabanı yapılandırmaları gerektiğinde eklenmelidir.

  ## pip yükleme ve yapılandırması

  ```bash
  pip install SmartDB-MCP

  Parametre açıklaması
  --mode: iletim modu ("stdio", "sse", "streamablehttp")
  --envfile ortam değişkeni dosyasının yolu
  --oauth oauth kimlik doğrulamasını etkinleştir (şu anda yalnızca "streamablehttp" modunda desteklenir)

  Başlat komutu:
   smartdb --envfile=/Volumes/config/.env --oauth=true


  ```

  ## Docker Başlatma

  ### Hızlı Başlangıç

  #### 1. Hizmet Oluştur ve Başlat

  ```bash
  # docker-compose kullanarak hizmet başlat
  docker-compose up -d

  # Hizmet durumunu kontrol et
  docker-compose ps

  # Günlükleri görüntüle
  docker-compose logs -f smartdb
  ```

  #### 2. Manuel Image Oluşturma

  ```bash
  # Image oluştur
  docker build -t smartdb-mcp:latest .

  # Container'ı çalıştır
  docker run -d \
    --name smartdb-mcp-server \
    -p 3000:3000 \
    -e DATABASE_CONFIG_FILE=/app/src/config/database_config.json \
    -e CLIENT_ID=smart_db_client_id \
    -e CLIENT_SECRET=smart_db_client_secret \
    -e TOKEN_SECRET_KEY=your_secret_key \
    -v $(pwd)/src/config:/app/src/config:ro \
    -v $(pwd)/logs:/app/logs \
    smartdb-mcp:latest
  ```

  ## Kod Başlatması

  ### Yerel Geliştirme Streamable Http Modu

  - uv kullanarak hizmet başlat

  MCP istemci araçlarınıza (cursor, cline vb.) aşağıdaki içeriği ekleyin.

  MCP JSON aşağıdaki gibidir:
  ```json
  {
    "mcpServers": {
      "smartdb": {
        "name": "smartdb",
        "type": "streamableHttp",
        "description": "",
        "isActive": true,
        "url": "http://localhost:3000/mcp/"
      }
    }
  }
  ```

  Başlat komutu:
  ```bash
  # Bağımlılıkları indir
  uv sync

  # Başlat
  uv run -m core.server

  # Özel env dosyası konumu
  uv run -m core.server --envfile /path/to/.env
  ```

  ### Yerel Geliştirme SSE Modu

  - uv kullanarak hizmet başlat

  MCP istemci araçlarınıza (cursor, cline vb.) aşağıdaki içeriği ekleyin.

  MCP JSON aşağıdaki gibidir:
  ```json
  {
    "mcpServers": {
      "smartdb": {
        "name": "smartdb",
        "description": "",
        "isActive": true,
        "url": "http://localhost:3000/sse"
      }
    }
  }
  ```

  Başlat komutu:
  ```bash
  # Bağımlılıkları indir
  uv sync

  # Başlat
  uv run -m core.server --mode sse

  # Özel env dosyası konumu
  uv run -m core.server --mode sse --envfile /path/to/.env
  ```

  ### Yerel Geliştirme STDIO Modu

  MCP istemci araçlarınıza (cursor, cline vb.) aşağıdaki içeriği ekleyin.

  MCP JSON aşağıdaki gibidir:
  ```json
  {
    "mcpServers": {
        "smartdb": {
            "name": "smartdb",
            "type": "stdio",
            "isActive": false,
            "registryUrl": "",
            "command": "uv",
            "args": [
              "--directory",
              "/Volumes/python/SmartDB/",
              "run",
              "-m",
              "core.server",
              "--mode",
              "stdio"
            ],
            "env": {
              "DATABASE_CONFIG_FILE": "/Volumes/database_config.json"
            }
        }
      }
    }
  }
  ```

  ## OAuth 2.0 Kimlik Doğrulama Desteği

  1. Kimlik doğrulama hizmetini başlat. Varsayılan olarak, yerleşik OAuth 2.0 şifre modu kimlik doğrulamasını kullanır. Env dosyasında kendi kimlik doğrulama hizmeti adresinizi değiştirebilirsiniz.
  ```bash
  uv run -m core.server --oauth=true
  ```

  2. Kimlik doğrulama hizmetine http://localhost:3000/login adresinden erişin. Varsayılan hesap ve şifre env dosyasında yapılandırılmıştır.



  3. Token'ı kopyalayın ve istek başlığına ekleyin, örneğin:



  ```json
  {
    "mcpServers": {
      "smartdb": {
        "name": "smartdb",
        "type": "streamableHttp",
        "description": "",
        "isActive": true,
        "url": "http://localhost:3000/mcp/",
        "headers": {
          "authorization": "bearer TOKEN_VALUE"
        }
      }
    }
  }
  ```

  ## Kullanım Örnekleri
  1. Varsayılan bağlantı havuzunun tablo verilerini sorgula


  2. Diğer bağlantı havuzunun tablo verilerini sorgula


  3. Diğer bağlantı havuzlarından ve diğer veritabanlarından tablo verilerini sorgula


  4. Veritabanı sağlık durumunu sorgula


  5. SQL Optimize et
---

[![简体中文](https://img.shields.io/badge/简体中文-点击查看-orange)](README-zh.md)
[![English](https://img.shields.io/badge/English-Click-yellow)](README.md)
[![MseeP.ai Security Assessment Badge](https://mseep.net/mseep-audited.png)](https://mseep.ai/app/wenb1n-dev-smartdb-mcp)




# SmartDB

SmartDB is a universal database gateway that implements the Model Context Protocol (MCP) server interface. This gateway allows MCP-compatible clients to connect and explore different databases.

Compared to similar products, SmartDB not only provides basic database connection and exploration capabilities but also adds advanced features such as OAuth 2.0 authentication , health checks, SQL optimization, and index health detection, making database management and maintenance more secure and intelligent.




## Currently Supported Databases
| Database   | Support | Description              |
|------------|---------|--------------------------|
| MySQL      | √ | Supports MySQL 5.6+, MariaDB 10+ |
| PostgreSQL | √ | Supports PostgreSQL 9.6+, YMatrix |
| Oracle     | √ | Oracle 12+               |
| SQL Server | √ | Microsoft SQL Server 2012+ |
| Dameng     | √ | Dameng 8.0+              |

## Tool List
| Tool Name | Description                                                                                                                                                                                   |
|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| execute_sql | SQL execution tool that can execute ["SELECT", "SHOW", "DESCRIBE", "EXPLAIN", "INSERT", "UPDATE", "DELETE", "CREATE", "ALTER", "DROP", "TRUNCATE"] commands based on permission configuration |
| get_db_health | Analyzes database health status (connection status, transaction status, running status, lock detection) and outputs professional diagnostic reports and solutions                             |
| get_table_desc | Searches for table structures in the database based on table names, supports multi-table queries                                                                                              |
| get_table_index | Searches for table indexes in the database based on table names, supports multi-table queries                                                                                                 |
| get_table_name | Database table name query tool. Used to query all table names in the database or search for corresponding table names based on Chinese table names or table descriptions                      |
| get_db_version | Database version query tool                                                                                                                                                                   |
| sql_creator | SQL query generation tool that generates corresponding SQL query statements based on different database types                                                                                 |
| sql_optimize | A professional SQL performance optimization tool that provides expert optimization suggestions based on execution plans, table structure information, table data volume, and table indexes.   | 

## Usage

### Environment Configuration File Description
```bash
# Database configuration file path
DATABASE_CONFIG_FILE=/Volumes/SmartDB/src/config/database_config.json

#========OAuth2========
# OAuth2 client ID
CLIENT_ID=smart_db_client_id
# OAuth2 client secret
CLIENT_SECRET=smart_db_client_secret
# Access token expiration time (minutes)
ACCESS_TOKEN_EXPIRE_MINUTES=30
# Refresh token expiration time (days)
REFRESH_TOKEN_EXPIRE_DAYS=30
# Token encryption key
TOKEN_SECRET_KEY=smart_db_token_secret
# Username
OAUTH_USER_NAME=admin
# Password
OAUTH_USER_PASSWORD=wenb1n
```
Note: If you adjust the client ID and key in the oauth configuration, please also modify the corresponding configuration in the static/config file in the previous code

### Database Connection Configuration Description
```json
{
  "default": {
    "host": "192.168.xxx.xxx",
    "port": 3306,
    "user": "root",
    "password": "root",
    "database": "a_llm",
    "role": "readonly",
    "pool_size": 10,
    "max_overflow": 20,
    "pool_recycle": 3600,
    "pool_timeout": 30,
    "type": "mysql"
  },
  "postgresql": {
    "host": "192.168.xxx.xxx",
    "port": 5432,
    "user": "postgres",
    "password": "123456",
    "database": "postgres",
    "schema": "public",
    "role": "readonly",
    "pool_size": 5,
    "max_overflow": 10,
    "pool_recycle": 3600,
    "pool_timeout": 30,
    "type": "postgresql"
  },
  "oracle": {
    "host": "192.168.xxx.xxx",
    "port": 1521,
    "user": "U_ORACLE",
    "password": "123456",
    "database": "123456",
    "service_name": "ORCL",
    "role": "readonly",
    "pool_size": 5,
    "max_overflow": 10,
    "pool_recycle": 3600,
    "pool_timeout": 30,
    "type": "oracle"
  },
  "mssql": {
    "host": "192.168.xxx.xxx",
    "port": 1433,
    "user": "test",
    "password": "123456",
    "database": "TEST",
    "schema": "dbo",
    "role": "readonly",
    "pool_size": 5,
    "max_overflow": 10,
    "pool_recycle": 3600,
    "pool_timeout": 30,
    "type": "mssqlserver"
  }
}
```

* Database Connection Parameter Description

The following table details the meaning and usage of each parameter in the database connection configuration file:

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| host | Yes | string | Database server address |
| port | Yes | integer | Database server port number |
| user | Yes | string | Database username |
| password | Yes | string | Database user password |
| database | Yes | string | Database name to connect to |
| role | Yes | string | User role, such as "readonly" for read-only permissions |
| pool_size | Yes | integer | Connection pool size |
| max_overflow | Yes | integer | Maximum overflow connections in connection pool |
| pool_recycle | Yes | integer | Connection pool recycle time (seconds) |
| pool_timeout | Yes | integer | Connection pool timeout time (seconds) |
| type | Yes | string | Database type, such as "mysql", "postgresql", "oracle", "mssqlserver" |

* Additional Parameters for Specific Databases

| Parameter | Database Type | Required | Type | Description |
|-----------|---------------|----------|------|-------------|
| schema | PostgreSQL, SQL Server | No | string | Database schema |
| service_name | Oracle | No | string | Oracle service name |

* role permission control configuration items and corresponding database permissions: readonly (readonly), read/write (writer), administrator (admin)
```
    "readonly": ["SELECT", "SHOW", "DESCRIBE", "EXPLAIN"],  # readonly permission
    "writer": ["SELECT", "SHOW", "DESCRIBE", "EXPLAIN", "INSERT", "UPDATE", "DELETE"],  # read/write permission
    "admin": ["SELECT", "SHOW", "DESCRIBE", "EXPLAIN", "INSERT", "UPDATE", "DELETE", 
             "CREATE", "ALTER", "DROP", "TRUNCATE"]  # administrator permission
```

* Note

"default" is the default database connection configuration and must be configured. Other database configurations should be added as needed.

## pip installation and configuration

```bash
pip install SmartDB-MCP

Parameter explanation
--mode: transmission mode ("stdio", "sse", "streamablehttp")
--envfile path of the environment variable file
--oauth enable oauth authentication (currently only supported in "streamablehttp" mode)

Start command:
 smartdb --envfile=/Volumes/config/.env --oauth=true


```

## Docker Startup

### Quick Start

#### 1. Build and Start Service

```bash
# Start service using docker-compose
docker-compose up -d

# Check service status
docker-compose ps

# View logs
docker-compose logs -f smartdb
```

#### 2. Manual Image Building

```bash
# Build image
docker build -t smartdb-mcp:latest .

# Run container
docker run -d \
  --name smartdb-mcp-server \
  -p 3000:3000 \
  -e DATABASE_CONFIG_FILE=/app/src/config/database_config.json \
  -e CLIENT_ID=smart_db_client_id \
  -e CLIENT_SECRET=smart_db_client_secret \
  -e TOKEN_SECRET_KEY=your_secret_key \
  -v $(pwd)/src/config:/app/src/config:ro \
  -v $(pwd)/logs:/app/logs \
  smartdb-mcp:latest
```

## Code Startup

### Local Development Streamable Http Mode

- Start service using uv

Add the following content to your MCP client tools, such as cursor, cline, etc.

MCP JSON as follows:
```json
{
  "mcpServers": {
    "smartdb": {
      "name": "smartdb",
      "type": "streamableHttp",
      "description": "",
      "isActive": true,
      "url": "http://localhost:3000/mcp/"
    }
  }
}
```

Start command:
```bash
# Download dependencies
uv sync

# Start
uv run -m core.server

# Custom env file location
uv run -m core.server --envfile /path/to/.env
```

### Local Development SSE Mode

- Start service using uv

Add the following content to your MCP client tools, such as cursor, cline, etc.

MCP JSON as follows:
```json
{
  "mcpServers": {
    "smartdb": {
      "name": "smartdb",
      "description": "",
      "isActive": true,
      "url": "http://localhost:3000/sse"
    }
  }
}
```

Start command:
```bash
# Download dependencies
uv sync

# Start
uv run -m core.server --mode sse

# Custom env file location
uv run -m core.server --mode sse --envfile /path/to/.env
```

### Local Development STDIO Mode

Add the following content to your MCP client tools, such as cursor, cline, etc.

MCP JSON as follows:
```json
{
  "mcpServers": {
      "smartdb": {
          "name": "smartdb",
          "type": "stdio",
          "isActive": false,
          "registryUrl": "",
          "command": "uv",
          "args": [
            "--directory",
            "/Volumes/python/SmartDB/",
            "run",
            "-m",
            "core.server",
            "--mode",
            "stdio"
          ],
          "env": {
            "DATABASE_CONFIG_FILE": "/Volumes/database_config.json"
          }
      }
    }
  }
}
```

## OAuth 2.0 Authentication Support

1. Start authentication service. By default, it uses the built-in OAuth 2.0 password mode authentication. You can modify your own authentication service address in the env file.
```bash
uv run -m core.server --oauth=true
```

2. Access the authentication service at http://localhost:3000/login. Default account and password are configured in the env file.



3. Copy the token and add it to the request header, for example:



```json
{
  "mcpServers": {
    "smartdb": {
      "name": "smartdb",
      "type": "streamableHttp",
      "description": "",
      "isActive": true,
      "url": "http://localhost:3000/mcp/",
      "headers": {
        "authorization": "bearer TOKEN_VALUE"
      }
    }
  }
}
```

## Usage Examples
1. Query the table data of the default connection pool


2. Query the table data of the others connection pool


3. Query data from tables in other connection pools and other databases


4. Query database health status


5. Sql Optimize

