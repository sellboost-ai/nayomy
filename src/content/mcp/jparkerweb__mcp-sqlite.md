---
name: "jparkerweb/mcp-sqlite"
description: "Model Context Protocol (MCP) server that provides comprehensive SQLite database interaction capabilities."
category: "Databases"
repo: "jparkerweb/mcp-sqlite"
stars: 107
url: "https://github.com/jparkerweb/mcp-sqlite"
body_length: 4963
license: "MIT"
language: "JavaScript"
homepage: "https://www.npmjs.com/package/mcp-sqlite"
body_tr: |-
  # 🐇 MCP SQLite Server
  Bu, kapsamlı SQLite veritabanı etkileşim yetenekleri sağlayan bir Model Context Protocol (MCP) sunucusudur.

  ![cursor-settings](https://raw.githubusercontent.com/jparkerweb/mcp-sqlite/refs/heads/main/.readme/mcp-sqlite.jpg)

  #### Tarafından sürdürülüyor
  <a href="https://www.equilllabs.com">
    
  </a>

  ## Özellikler
  - Tam CRUD işlemleri (Create, Read, Update, Delete)
  - Veritabanı keşfi ve introspection
  - Özel SQL sorgularını çalıştırma

  ## Kurulum

  IDE'nizin MCP Server ayarlarında komutu tanımlayın:

  örneğin `Cursor`:
  ```json
  {
      "mcpServers": {
          "MCP SQLite Server": {
              "command": "npx",
              "args": [
                  "-y",
                  "mcp-sqlite",
                  "<path-to-your-sqlite-database.db>"
              ]
          }
      }
  }
  ```

  örneğin `VSCode`:
  ```json
  {
      "servers": {
          "MCP SQLite Server": {
              "type": "stdio",
              "command": "npx",
              "args": [
                  "-y",
                  "mcp-sqlite",
                  "<path-to-your-sqlite-database.db>"
              ]
          }
      }
  }
  ```

  ![cursor-settings](https://raw.githubusercontent.com/jparkerweb/mcp-sqlite/refs/heads/main/.readme/cursor-mcp-settings.jpg)

  Veritabanı yolu bir argument olarak sağlanmalıdır.

  ## Kullanılabilir Tools

  ### Veritabanı Bilgileri

  #### db_info

  Bağlı veritabanı hakkında detaylı bilgi alın.

  Örnek:
  ```json
  {
    "method": "tools/call",
    "params": {
      "name": "db_info",
      "arguments": {}
    }
  }
  ```

  #### list_tables

  Veritabanındaki tüm tabloları listeleyin.

  Örnek:
  ```json
  {
    "method": "tools/call",
    "params": {
      "name": "list_tables",
      "arguments": {}
    }
  }
  ```

  #### get_table_schema

  Bir tablonun schema'sı hakkında detaylı bilgi alın.

  Parametreler:
  - `tableName` (string): Tablo adı

  Örnek:
  ```json
  {
    "method": "tools/call",
    "params": {
      "name": "get_table_schema",
      "arguments": {
        "tableName": "users"
      }
    }
  }
  ```

  ### CRUD İşlemleri

  #### create_record

  Bir tabloya yeni bir kayıt ekleyin.

  Parametreler:
  - `table` (string): Tablo adı
  - `data` (object): Kayıt verisi anahtar-değer çiftleri olarak

  Örnek:
  ```json
  {
    "method": "tools/call",
    "params": {
      "name": "create_record",
      "arguments": {
        "table": "users",
        "data": {
          "name": "John Doe",
          "email": "john@example.com",
          "age": 30
        }
      }
    }
  }
  ```

  #### read_records

  İsteğe bağlı filtreleme ile bir tablodan kayıtları sorgulayın.

  Parametreler:
  - `table` (string): Tablo adı
  - `conditions` (object, isteğe bağlı): Filtre koşulları anahtar-değer çiftleri olarak
  - `limit` (number, isteğe bağlı): Döndürülecek maksimum kayıt sayısı
  - `offset` (number, isteğe bağlı): Atlanacak kayıt sayısı

  Örnek:
  ```json
  {
    "method": "tools/call",
    "params": {
      "name": "read_records",
      "arguments": {
        "table": "users",
        "conditions": {
          "age": 30
        },
        "limit": 10,
        "offset": 0
      }
    }
  }
  ```

  #### update_records

  Belirtilen koşulları sağlayan bir tablodaki kayıtları güncelleyin.

  Parametreler:
  - `table` (string): Tablo adı
  - `data` (object): Yeni değerler anahtar-değer çiftleri olarak
  - `conditions` (object): Filtre koşulları anahtar-değer çiftleri olarak

  Örnek:
  ```json
  {
    "method": "tools/call",
    "params": {
      "name": "update_records",
      "arguments": {
        "table": "users",
        "data": {
          "email": "john.updated@example.com"
        },
        "conditions": {
          "id": 1
        }
      }
    }
  }
  ```

  #### delete_records

  Belirtilen koşulları sağlayan bir tablodaki kayıtları silin.

  Parametreler:
  - `table` (string): Tablo adı
  - `conditions` (object): Filtre koşulları anahtar-değer çiftleri olarak

  Örnek:
  ```json
  {
    "method": "tools/call",
    "params": {
      "name": "delete_records",
      "arguments": {
        "table": "users",
        "conditions": {
          "id": 1
        }
      }
    }
  }
  ```

  ### Özel Sorgular

  #### query

  Bağlı SQLite veritabanına karşı özel bir SQL sorgusu çalıştırın.

  Parametreler:
  - `sql` (string): Çalıştırılacak SQL sorgusu
  - `values` (array, isteğe bağlı): Sorguda kullanılacak parametre değerlerinin dizisi

  Örnek:
  ```json
  {
    "method": "tools/call",
    "params": {
      "name": "query",
      "arguments": {
        "sql": "SELECT * FROM users WHERE id = ?",
        "values": [1]
      }
    }
  }
  ```

  ## İle oluşturuldu

  - [Model Context Protocol SDK](https://github.com/modelcontextprotocol/typescript-sdk)
  - [sqlite3](https://github.com/TryGhost/node-sqlite3)

  ---

  ## Takdir
  Bu kütüphaneyi beğendiyseniz lütfen çalışmalarımı desteklemek için bana bir bahşiş göndermeyi düşünün 😀
  ### [🍵 buradan bahşiş gönder](https://ko-fi.com/jparkerweb)
---

# 🐇 MCP SQLite Server
This is a Model Context Protocol (MCP) server that provides comprehensive SQLite database interaction capabilities.

![cursor-settings](https://raw.githubusercontent.com/jparkerweb/mcp-sqlite/refs/heads/main/.readme/mcp-sqlite.jpg)

#### Maintained by
<a href="https://www.equilllabs.com">
  
</a>

## Features
- Complete CRUD operations (Create, Read, Update, Delete)
- Database exploration and introspection
- Execute custom SQL queries

## Setup

Define the command in your IDE's MCP Server settings:

e.g. `Cursor`:
```json
{
    "mcpServers": {
        "MCP SQLite Server": {
            "command": "npx",
            "args": [
                "-y",
                "mcp-sqlite",
                "<path-to-your-sqlite-database.db>"
            ]
        }
    }
}
```

e.g. `VSCode`:
```json
{
    "servers": {
        "MCP SQLite Server": {
            "type": "stdio",
            "command": "npx",
            "args": [
                "-y",
                "mcp-sqlite",
                "<path-to-your-sqlite-database.db>"
            ]
        }
    }
}
```

![cursor-settings](https://raw.githubusercontent.com/jparkerweb/mcp-sqlite/refs/heads/main/.readme/cursor-mcp-settings.jpg)

Your database path must be provided as an argument.

## Available Tools

### Database Information

#### db_info

Get detailed information about the connected database.

Example:
```json
{
  "method": "tools/call",
  "params": {
    "name": "db_info",
    "arguments": {}
  }
}
```

#### list_tables

List all tables in the database.

Example:
```json
{
  "method": "tools/call",
  "params": {
    "name": "list_tables",
    "arguments": {}
  }
}
```

#### get_table_schema

Get detailed information about a table's schema.

Parameters:
- `tableName` (string): Name of the table

Example:
```json
{
  "method": "tools/call",
  "params": {
    "name": "get_table_schema",
    "arguments": {
      "tableName": "users"
    }
  }
}
```

### CRUD Operations

#### create_record

Insert a new record into a table.

Parameters:
- `table` (string): Name of the table
- `data` (object): Record data as key-value pairs

Example:
```json
{
  "method": "tools/call",
  "params": {
    "name": "create_record",
    "arguments": {
      "table": "users",
      "data": {
        "name": "John Doe",
        "email": "john@example.com",
        "age": 30
      }
    }
  }
}
```

#### read_records

Query records from a table with optional filtering.

Parameters:
- `table` (string): Name of the table
- `conditions` (object, optional): Filter conditions as key-value pairs
- `limit` (number, optional): Maximum number of records to return
- `offset` (number, optional): Number of records to skip

Example:
```json
{
  "method": "tools/call",
  "params": {
    "name": "read_records",
    "arguments": {
      "table": "users",
      "conditions": {
        "age": 30
      },
      "limit": 10,
      "offset": 0
    }
  }
}
```

#### update_records

Update records in a table that match specified conditions.

Parameters:
- `table` (string): Name of the table
- `data` (object): New values as key-value pairs
- `conditions` (object): Filter conditions as key-value pairs

Example:
```json
{
  "method": "tools/call",
  "params": {
    "name": "update_records",
    "arguments": {
      "table": "users",
      "data": {
        "email": "john.updated@example.com"
      },
      "conditions": {
        "id": 1
      }
    }
  }
}
```

#### delete_records

Delete records from a table that match specified conditions.

Parameters:
- `table` (string): Name of the table
- `conditions` (object): Filter conditions as key-value pairs

Example:
```json
{
  "method": "tools/call",
  "params": {
    "name": "delete_records",
    "arguments": {
      "table": "users",
      "conditions": {
        "id": 1
      }
    }
  }
}
```

### Custom Queries

#### query

Execute a custom SQL query against the connected SQLite database.

Parameters:
- `sql` (string): The SQL query to execute
- `values` (array, optional): Array of parameter values to use in the query

Example:
```json
{
  "method": "tools/call",
  "params": {
    "name": "query",
    "arguments": {
      "sql": "SELECT * FROM users WHERE id = ?",
      "values": [1]
    }
  }
}
```

## Built with

- [Model Context Protocol SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [sqlite3](https://github.com/TryGhost/node-sqlite3)

---

## Appreciation
If you enjoy this library please consider sending me a tip to support my work 😀
### [🍵 tip me here](https://ko-fi.com/jparkerweb)
