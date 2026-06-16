---
name: "LucasHild/mcp-server-bigquery"
description: "BigQuery database integration with schema inspection and query capabilities"
category: "Databases"
repo: "LucasHild/mcp-server-bigquery"
stars: 126
url: "https://github.com/LucasHild/mcp-server-bigquery"
body_length: 4664
license: "MIT"
language: "Python"
body_tr: |-
  # BigQuery MCP sunucusu

  [![smithery badge](https://smithery.ai/badge/mcp-server-bigquery)](https://smithery.ai/server/mcp-server-bigquery)

  BigQuery'ye erişim sağlayan bir Model Context Protocol sunucusu. Bu sunucu, LLM'lerin veritabanı şemalarını incelemesine ve sorguları yürütmesine olanak tanır.

  ## Bileşenler

  ### Araçlar

  Sunucu bir araç uygular:

  - `execute-query`: BigQuery dilimi kullanarak bir SQL sorgusu yürütür
  - `list-tables`: BigQuery veritabanındaki tüm tabloları listeler
  - `describe-table`: Belirli bir tablonun şemasını açıklar

  ## Yapılandırma

  Sunucu, komut satırı argümanları veya ortam değişkenleri ile yapılandırılabilir.

  | Argüman      | Ortam Değişkeni      | Gerekli | Açıklama                                                                                                                                                                                                                                                                                                                                                    |
  | ------------ | -------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `--project`  | `BIGQUERY_PROJECT`   | Evet    | GCP proje kimliği.                                                                                                                                                                                                                                                                                                                                         |
  | `--location` | `BIGQUERY_LOCATION`  | Evet    | GCP konumu (ör. `europe-west9`).                                                                                                                                                                                                                                                                                                                          |
  | `--dataset`  | `BIGQUERY_DATASETS`  | Hayır   | Yalnızca belirli BigQuery veri setlerini dikkate alır. Argümanı tekrarlanarak (ör. `--dataset my_dataset_1 --dataset my_dataset_2`) veya ortam değişkeninde virgülle birleştirerek (ör. `BIGQUERY_DATASETS=my_dataset_1,my_dataset_2`) birden fazla veri seti belirtilebilir. Sağlanmazsa, projede bulunan tüm veri setleri dikkate alınır. |
  | `--key-file` | `BIGQUERY_KEY_FILE`  | Hayır   | BigQuery için bir hizmet hesabı anahtar dosyasının yolu. Sağlanmazsa, sunucu varsayılan kimlik bilgilerini kullanır.                                                                                                                                                                                                                                     |
  | `--timeout`  | `BIGQUERY_TIMEOUT`   | Hayır   | Bir sorgunun tamamlanmasını beklemek için maksimum süre (saniye cinsinden). Sağlanmazsa, sorgular belirsiz şekilde bekler.                                                                                                                                                                                                                                 |

  ## Kurulum

  ### Smithery ile Kurulum

  BigQuery Sunucusunu Claude Desktop'a [Smithery](https://smithery.ai/server/mcp-server-bigquery) üzerinden otomatik olarak yüklemek için:

  ```bash
  npx -y @smithery/cli install mcp-server-bigquery --client claude
  ```

  ### Claude Code

  ```bash
  claude mcp add bigquery --scope user --transport stdio -- uvx mcp-server-bigquery --project {PROJECT_ID} --location {{LOCATION}}
  ```

  ### Claude Desktop

  MacOS'ta: `~/Library/Application\ Support/Claude/claude_desktop_config.json`  
  Windows'ta: `%APPDATA%/Claude/claude_desktop_config.json`

  ```json
  {
    "mcpServers": {
      "bigquery": {
        "command": "uvx",
        "args": ["mcp-server-bigquery"],
        "env": {
          "BIGQUERY_PROJECT": "{{GCP_PROJECT_ID}}",
          "BIGQUERY_LOCATION": "{{GCP_LOCATION}}"
        }
      }
    }
  }
  ```

  ## Cursor

  1. Cursor Ayarları → MCP'yi açın
  2. Yeni genel MCP sunucusu ekle'ye tıklayın
  3. Aşağıdaki deseni izleyerek BigQuery MCP için bir giriş ekleyin:

  ```json
  {
    "mcpServers": {
      "bigquery": {
        "command": "uvx",
        "args": ["mcp-server-bigquery"],
        "env": {
          "BIGQUERY_PROJECT": "{{GCP_PROJECT_ID}}",
          "BIGQUERY_LOCATION": "{{GCP_LOCATION}}"
        }
      }
    }
  }
  ```
---

# BigQuery MCP server

[![smithery badge](https://smithery.ai/badge/mcp-server-bigquery)](https://smithery.ai/server/mcp-server-bigquery)

A Model Context Protocol server that provides access to BigQuery. This server enables LLMs to inspect database schemas and execute queries.

## Components

### Tools

The server implements one tool:

- `execute-query`: Executes a SQL query using BigQuery dialect
- `list-tables`: Lists all tables in the BigQuery database
- `describe-table`: Describes the schema of a specific table

## Configuration

The server can be configured either with command line arguments or environment variables.

| Argument     | Environment Variable | Required | Description                                                                                                                                                                                                                                                                                                                                                    |
| ------------ | -------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--project`  | `BIGQUERY_PROJECT`   | Yes      | The GCP project ID.                                                                                                                                                                                                                                                                                                                                            |
| `--location` | `BIGQUERY_LOCATION`  | Yes      | The GCP location (e.g. `europe-west9`).                                                                                                                                                                                                                                                                                                                        |
| `--dataset`  | `BIGQUERY_DATASETS`  | No       | Only take specific BigQuery datasets into consideration. Several datasets can be specified by repeating the argument (e.g. `--dataset my_dataset_1 --dataset my_dataset_2`) or by joining them with a comma in the environment variable (e.g. `BIGQUERY_DATASETS=my_dataset_1,my_dataset_2`). If not provided, all datasets in the project will be considered. |
| `--key-file` | `BIGQUERY_KEY_FILE`  | No       | Path to a service account key file for BigQuery. If not provided, the server will use the default credentials.                                                                                                                                                                                                                                                 |
| `--timeout`  | `BIGQUERY_TIMEOUT`   | No       | Maximum time in seconds to wait for a query to complete. If not provided, queries will wait indefinitely.                                                                                                                                                                                                                                                      |

## Installation

### Installing via Smithery

To install BigQuery Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/mcp-server-bigquery):

```bash
npx -y @smithery/cli install mcp-server-bigquery --client claude
```

### Claude Code

```bash
claude mcp add bigquery --scope user --transport stdio -- uvx mcp-server-bigquery --project {PROJECT_ID} --location {{LOCATION}}
```

### Claude Desktop

On MacOS: `~/Library/Application\ Support/Claude/claude_desktop_config.json`  
On Windows: `%APPDATA%/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "bigquery": {
      "command": "uvx",
      "args": ["mcp-server-bigquery"],
      "env": {
        "BIGQUERY_PROJECT": "{{GCP_PROJECT_ID}}",
        "BIGQUERY_LOCATION": "{{GCP_LOCATION}}"
      }
    }
  }
}
```

## Cursor

1. Open Cursor Settings → MCP
2. Click Add new global MCP server
3. Add an entry for the BigQuery MCP, following the pattern below:

```json
{
  "mcpServers": {
    "bigquery": {
      "command": "uvx",
      "args": ["mcp-server-bigquery"],
      "env": {
        "BIGQUERY_PROJECT": "{{GCP_PROJECT_ID}}",
        "BIGQUERY_LOCATION": "{{GCP_LOCATION}}"
      }
    }
  }
}
```
