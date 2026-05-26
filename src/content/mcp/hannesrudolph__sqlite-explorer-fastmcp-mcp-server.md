---
name: "hannesrudolph/sqlite-explorer-fastmcp-mcp-server"
description: "An MCP server that provides safe, read-only access to SQLite databases through Model Context Protocol (MCP). This server is built with the FastMCP framework, which enables LLMs to explore and query SQLite databases with built-in safety features and query validation."
description_tr: "SQLite veritabanlarına Model Context Protocol (MCP) üzerinden güvenli, salt okunur erişim sağlayan bir MCP sunucusu. FastMCP framework ile geliştirilmiş olup, LLM'lerin SQLite veritabanlarını yerleşik güvenlik özellikleri ve query doğrulaması ile keşfedip sorgulamalarını sağlar."
category: "Databases"
repo: "hannesrudolph/sqlite-explorer-fastmcp-mcp-server"
stars: 105
url: "https://github.com/hannesrudolph/sqlite-explorer-fastmcp-mcp-server"
body_length: 4055
language: "Python"
body_tr: |-
  [![MseeP.ai Security Assessment Badge](https://mseep.net/pr/hannesrudolph-sqlite-explorer-fastmcp-mcp-server-badge.png)](https://mseep.ai/app/hannesrudolph-sqlite-explorer-fastmcp-mcp-server)

  # SQLite Explorer MCP Server

  MCP aracılığıyla SQLite veritabanlarına güvenli, salt okunur erişim sağlayan bir MCP sunucusu. Bu sunucu FastMCP framework'ü ile oluşturulmuş olup, LLM'lerin yerleşik güvenlik özellikleri ve sorgu doğrulaması ile SQLite veritabanlarını keşfetmesini ve sorgulamasını sağlar.

  ## 📋 Sistem Gereksinimleri

  - Python 3.6+
  - SQLite veritabanı dosyası (ortam değişkeni aracılığıyla belirtilen yol)

  ## 📦 Bağımlılıklar

  Tüm gerekli bağımlılıkları yükleyin:

  ```bash
  # pip kullanarak
  pip install -r requirements.txt
  ```

  ### Gerekli Paketler
  - **fastmcp**: Model Context Protocol sunucuları oluşturmak için framework

  Tüm bağımlılıklar kolay kurulum için `requirements.txt` dosyasında belirtilmiştir.

  ## 📑 İçindekiler
  - [Sistem Gereksinimleri](#-sistem-gereksinimleri)
  - [Bağımlılıklar](#-bağımlılıklar)
  - [MCP Araçları](#️-mcp-araçları)
  - [Başlangıç](#-başlangıç)
  - [Kurulum Seçenekleri](#-kurulum-seçenekleri)
    - [Claude Desktop](#seçenek-1-claude-desktop-için-kurulum)
    - [Cline VSCode Plugin](#seçenek-2-cline-vscode-plugin-için-kurulum)
  - [Güvenlik Özellikleri](#-güvenlik-özellikleri)
  - [Geliştirme Belgeleri](#-geliştirme-belgeleri)
  - [Ortam Değişkenleri](#️-ortam-değişkenleri)

  ## 🛠️ MCP Araçları

  Sunucu LLM'lere aşağıdaki araçları sunar:

  ### read_query
  Veritabanında yerleşik güvenlik doğrulamaları ile SELECT sorgusu çalıştırın. Özellikler:
  - Sorgu doğrulaması ve sanitizasyonu
  - Parameter binding desteği
  - Satır sınırı uygulaması
  - Sonuçlar sözlük olarak formatlandı

  ### list_tables 
  Veritabanındaki tüm kullanılabilir tabloları ve adlarını listeleyin.

  ### describe_table
  Belirli bir tablo için aşağıdakileri içeren ayrıntılı schema bilgilerini alın:
  - Sütun adları ve türleri
  - NULL kısıtlamaları
  - Varsayılan değerler
  - Primary key bilgisi

  ## 🚀 Başlangıç

  Depoyu klonlayın:

  ```bash
  git clone https://github.com/hannesrudolph/sqlite-explorer-fastmcp-mcp-server.git
  cd sqlite-explorer-fastmcp-mcp-server
  ```

  ## 📦 Kurulum Seçenekleri

  Bu MCP sunucusunu Claude Desktop veya Cline VSCode plugin'inde kurabilirsiniz. İhtiyaçlarınıza en uygun seçeneği belirleyin.

  ### Seçenek 1: Claude Desktop için Kurulum

  FastMCP kullanarak kurun:

  ```bash
  fastmcp install sqlite_explorer.py --name "SQLite Explorer" -e SQLITE_DB_PATH=/path/to/db
  ```

  `/path/to/db` kısmını SQLite veritabanı dosyanızın yolu ile değiştirin.

  ### Seçenek 2: Cline VSCode Plugin için Kurulum

  Bu sunucuyu [Cline VSCode plugin](http://cline.bot) ile kullanmak için:

  1. VSCode'da Cline plugin kenar çubuğundaki sunucu simgesine (☰) tıklayın
  2. "Edit MCP Settings" düğmesine (✎) tıklayın
  3. Ayarlar dosyasına aşağıdaki yapılandırmayı ekleyin:

  ```json
  {
    "sqlite-explorer": {
      "command": "uv",
      "args": [
        "run",
        "--with",
        "fastmcp",
        "--with",
        "uvicorn",
        "fastmcp",
        "run",
        "/path/to/repo/sqlite_explorer.py"
      ],
      "env": {
        "SQLITE_DB_PATH": "/path/to/your/database.db"
      }
    }
  }
  ```

  Aşağıdaki kısımları değiştirin:
  - `/path/to/repo` - Bu depoyu klonladığınız tam yol (örn. `/Users/username/Projects/sqlite-explorer-fastmcp-mcp-server`)
  - `/path/to/your/database.db` - SQLite veritabanı dosyanızın tam yolu

  ## 🔒 Güvenlik Özellikleri

  - SQLite veritabanlarına salt okunur erişim
  - Sorgu doğrulaması ve sanitizasyonu
  - Güvenli sorgu yürütmesi için parameter binding
  - Satır sınırı uygulaması
  - Temiz JSON yanıtları için ilerleme çıkışı bastırma

  ## 📚 Geliştirme Belgeleri

  Depo geliştirme için belge dosyaları içerir:

  - `mcp-documentation.txt`: MCP sunucusu implementasyonu ve FastMCP framework kullanımı hakkında kapsamlı belge içerir.

  Bu belge, özellik geliştirirken bağlam olarak görev yapar ve LLM'ler tarafından geliştirmede yardımcı olmak için kullanılabilir.

  ## ⚙️ Ortam Değişkenleri

  Aşağıdaki ortam değişkenleri ayarlanmalıdır:

  - `SQLITE_DB_PATH`: Keşfetmek istediğiniz SQLite veritabanı dosyasının tam yolu
---

[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/hannesrudolph-sqlite-explorer-fastmcp-mcp-server-badge.png)](https://mseep.ai/app/hannesrudolph-sqlite-explorer-fastmcp-mcp-server)

# SQLite Explorer MCP Server

An MCP server that provides safe, read-only access to SQLite databases through Model Context Protocol (MCP). This server is built with the FastMCP framework, which enables LLMs to explore and query SQLite databases with built-in safety features and query validation.

## 📋 System Requirements

- Python 3.6+
- SQLite database file (path specified via environment variable)

## 📦 Dependencies

Install all required dependencies:

```bash
# Using pip
pip install -r requirements.txt
```

### Required Packages
- **fastmcp**: Framework for building Model Context Protocol servers

All dependencies are specified in `requirements.txt` for easy installation.

## 📑 Table of Contents
- [System Requirements](#-system-requirements)
- [Dependencies](#-dependencies)
- [MCP Tools](#%EF%B8%8F-mcp-tools)
- [Getting Started](#-getting-started)
- [Installation Options](#-installation-options)
  - [Claude Desktop](#option-1-install-for-claude-desktop)
  - [Cline VSCode Plugin](#option-2-install-for-cline-vscode-plugin)
- [Safety Features](#-safety-features)
- [Development Documentation](#-development-documentation)
- [Environment Variables](#%EF%B8%8F-environment-variables)

## 🛠️ MCP Tools

The server exposes the following tools to LLMs:

### read_query
Execute a SELECT query on the database with built-in safety validations. Features:
- Query validation and sanitization
- Parameter binding support
- Row limit enforcement
- Results formatted as dictionaries

### list_tables 
List all available tables in the database with their names.

### describe_table
Get detailed schema information for a specific table, including:
- Column names and types
- NULL constraints
- Default values
- Primary key information

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/hannesrudolph/sqlite-explorer-fastmcp-mcp-server.git
cd sqlite-explorer-fastmcp-mcp-server
```

## 📦 Installation Options

You can install this MCP server in either Claude Desktop or the Cline VSCode plugin. Choose the option that best suits your needs.

### Option 1: Install for Claude Desktop

Install using FastMCP:

```bash
fastmcp install sqlite_explorer.py --name "SQLite Explorer" -e SQLITE_DB_PATH=/path/to/db
```

Replace `/path/to/db` with the path to your SQLite database file.

### Option 2: Install for Cline VSCode Plugin

To use this server with the [Cline VSCode plugin](http://cline.bot):

1. In VSCode, click the server icon (☰) in the Cline plugin sidebar
2. Click the "Edit MCP Settings" button (✎)
3. Add the following configuration to the settings file:

```json
{
  "sqlite-explorer": {
    "command": "uv",
    "args": [
      "run",
      "--with",
      "fastmcp",
      "--with",
      "uvicorn",
      "fastmcp",
      "run",
      "/path/to/repo/sqlite_explorer.py"
    ],
    "env": {
      "SQLITE_DB_PATH": "/path/to/your/database.db"
    }
  }
}
```

Replace:
- `/path/to/repo` with the full path to where you cloned this repository (e.g., `/Users/username/Projects/sqlite-explorer-fastmcp-mcp-server`)
- `/path/to/your/database.db` with the full path to your SQLite database file

## 🔒 Safety Features

- Read-only access to SQLite databases
- Query validation and sanitization
- Parameter binding for safe query execution
- Row limit enforcement
- Progress output suppression for clean JSON responses

## 📚 Development Documentation

The repository includes documentation files for development:

- `mcp-documentation.txt`: Contains comprehensive documentation about the MCP server implementation and FastMCP framework usage.

This documentation serves as context when developing features and can be used with LLMs to assist in development.

## ⚙️ Environment Variables

The following environment variables must be set:

- `SQLITE_DB_PATH`: Full path to the SQLite database file you want to explore
