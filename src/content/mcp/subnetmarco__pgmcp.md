---
name: "subnetmarco/pgmcp"
description: "Natural language PostgreSQL queries with automatic streaming, read-only safety, and universal database compatibility."
category: "Databases"
repo: "subnetmarco/pgmcp"
stars: 529
url: "https://github.com/subnetmarco/pgmcp"
body_length: 9397
license: "NOASSERTION"
language: "Go"
body_tr: |-
  [![ci](https://github.com/subnetmarco/pgmcp/actions/workflows/ci.yml/badge.svg)](https://github.com/subnetmarco/pgmcp/actions/workflows/ci.yml)
  [![Go Report Card](https://goreportcard.com/badge/github.com/subnetmarco/pgmcp)](https://goreportcard.com/report/github.com/subnetmarco/pgmcp)
  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

  # PGMCP - PostgreSQL Model Context Protocol Server

  PGMCP, AI asistanlarını doğal dil sorgularıyla **herhangi bir PostgreSQL veritabanına** bağlar. Düz İngilizce sorular sorun ve otomatik streaming ve sağlam hata işleme ile yapılandırılmış SQL sonuçları alın.

  **Çalışır**: Cursor, Claude Desktop, VS Code uzantıları ve herhangi bir [MCP-uyumlu istemci](https://modelcontextprotocol.io/)

  ## Hızlı Başlangıç

  PGMCP, **mevcut PostgreSQL veritabanınıza** bağlanır ve doğal dil sorgularıyla AI asistanlarının erişebilmesi için bunu uygun hale getirir.

  ### Önkoşullar
  - PostgreSQL veritabanı (şemanız olan mevcut bir veritabanı)
  - OpenAI API anahtarı (isteğe bağlı, AI tarafından desteklenen SQL oluşturma için)

  ### Temel Kullanım

  ```bash
  # Ortam değişkenlerini ayarlayın
  export DATABASE_URL="postgres://user:password@localhost:5432/your-existing-db"
  export OPENAI_API_KEY="your-api-key"  # İsteğe bağlı

  # Sunucuyu çalıştırın (önceden derlenmiş ikili dosya kullanarak)
  ./pgmcp-server

  # Başka bir terminalde istemciyi test edin
  ./pgmcp-client -ask "What tables do I have?" -format table
  ./pgmcp-client -ask "Who is the customer that has placed the most orders?" -format table
  ./pgmcp-client -search "john" -format table
  ```

  Nasıl çalıştığı aşağıda gösterilmektedir:

  ```
  👤 Kullanıcı / AI Asistanı
           │
           │ "Who are the top customers?"
           ▼
  ┌─────────────────────────────────────────────────────────────┐
  │                    Herhangi bir MCP İstemci                 │
  │                                                             │
  │  PGMCP CLI  │  Cursor  │  Claude Desktop  │  VS Code  │ ... │
  │  JSON/CSV   │  Chat    │  AI Assistant    │  Editor   │     │
  └─────────────────────────────────────────────────────────────┘
           │
           │ Streamable HTTP / MCP Protocol
           ▼
  ┌─────────────────────────────────────────────────────────────┐
  │                    PGMCP Sunucusu                           │
  │                                                             │
  │  🔒 Güvenlik    🧠 AI Motoru      🌊 Streaming               │
  │  • Input Valid  • Schema Cache    • Auto-Pagination         │
  │  • Audit Log    • OpenAI API      • Memory Management       │
  │  • SQL Guard    • Error Recovery  • Connection Pool         │
  └─────────────────────────────────────────────────────────────┘
           │
           │ Salt Okunur SQL Sorguları
           ▼
  ┌─────────────────────────────────────────────────────────────┐
  │                PostgreSQL Veritabanınız                     │
  │                                                             │
  │  Herhangi bir Şema: E-Commerce, Analitik, CRM, vb.           │
  │  Tablolar • Views • İndeksler • İşlevler                    │
  └─────────────────────────────────────────────────────────────┘

  Dış AI Hizmetleri:
  OpenAI API • Anthropic • Yerel LLM'ler (Ollama, vb.)

  Temel Avantajlar:
  ✅ HERHANGİ bir PostgreSQL veritabanıyla çalışır (şema hakkında varsayım yok)
  ✅ Şema değişiklikleri gerekli değildir  
  ✅ Salt okunur erişim (%100 güvenli)
  ✅ Büyük sonuçlar için otomatik streaming
  ✅ Zeki sorgu anlama (tekil vs çoğul)
  ✅ Sağlam hata işleme (zarif AI hatası kurtarması)
  ✅ PostgreSQL büyük/küçük harf duyarlılığı desteği (karışık duruş tabloları)
  ✅ Üretim hazırlığı güvenliği ve performansı
  ✅ Evrensel veritabanı uyumluluğu
  ✅ Çoklu çıktı formatları (tablo, JSON, CSV)
  ✅ Tüm sütunlarda serbest metin araması
  ✅ Kimlik doğrulama desteği
  ✅ Kapsamlı test paketi
  ```

  ## Özellikler

  - **Doğal Dilden SQL'e**: Sorularınızı düz İngilizce sorun
  - **Otomatik Streaming**: Büyük sonuç kümelerini otomatik olarak işler  
  - **Güvenli Salt Okunur Erişim**: Herhangi bir yazma işlemini önler
  - **Metin Araması**: Tüm metin sütunlarında arama yapın
  - **Çoklu Çıktı Formatları**: Tablo, JSON ve CSV
  - **PostgreSQL Büyük/Küçük Harf Duyarlılığı**: Karışık duruş tablo adlarını doğru şekilde işler
  - **Evrensel Uyumluluk**: Herhangi bir PostgreSQL veritabanıyla çalışır

  ### Ortam Değişkenleri

  **Gerekli:**
  - `DATABASE_URL`: Mevcut veritabanınıza PostgreSQL bağlantı dizesi

  **İsteğe bağlı:**
  - `OPENAI_API_KEY`: AI tarafından desteklenen SQL oluşturma için OpenAI API anahtarı
  - `OPENAI_MODEL`: Kullanılacak model (varsayılan: "gpt-4o-mini")
  - `HTTP_ADDR`: Sunucu adresi (varsayılan: ":8080")
  - `HTTP_PATH`: MCP endpoint yolu (varsayılan: "/mcp")
  - `AUTH_BEARER`: Kimlik doğrulama için bearer token

  ## Kurulum

  ### Önceden Derlenmiş İkili Dosyaları İndirin

  1. [GitHub Yayınları](https://github.com/subnetmarco/pgmcp/releases) sayfasına gidin
  2. Platformunuz için ikili dosyayı indirin (Linux, macOS, Windows)
  3. Çıkartın ve çalıştırın:

  ```bash
  # macOS/Linux için örnek
  tar xzf pgmcp_*.tar.gz
  cd pgmcp_*
  ./pgmcp-server
  ```

  ### Alternatif Seçenekler

  ```bash
  # Homebrew (macOS/Linux) - İlk yayından sonra kullanılabilir
  brew tap subnetmarco/homebrew-tap
  brew install pgmcp

  # Kaynaktan derleyin
  go build -o pgmcp-server ./server
  go build -o pgmcp-client ./client
  ```

  ### Docker/Kubernetes

  ```bash
  # Docker
  docker run -e DATABASE_URL="postgres://user:pass@host:5432/db" \
    -p 8080:8080 ghcr.io/subnetmarco/pgmcp:latest

  # Kubernetes (tam manifestler için examples/ dizinine bakın)
  kubectl create secret generic pgmcp-secret \
    --from-literal=database-url="postgres://user:pass@host:5432/db"
  kubectl apply -f examples/k8s/
  ```

  #### Hızlı Başlangıç

  ```bash
  # Veritabanını ayarlayın (isteğe bağlı - herhangi bir mevcut PostgreSQL veritabanıyla çalışır)
  export DATABASE_URL="postgres://user:password@localhost:5432/mydb"
  psql $DATABASE_URL < schema.sql

  # Sunucuyu çalıştırın
  export OPENAI_API_KEY="your-api-key"
  ./pgmcp-server

  # İstemciyle test edin
  ./pgmcp-client -ask "Who is the user that places the most orders?" -format table
  ./pgmcp-client -ask "Show me the top 40 most reviewed items in the marketplace" -format table
  ```

  ### Ortam Değişkenleri

  **Gerekli:**
  - `DATABASE_URL`: PostgreSQL bağlantı dizesi

  **İsteğe bağlı:**
  - `OPENAI_API_KEY`: SQL oluşturma için OpenAI API anahtarı
  - `OPENAI_MODEL`: Kullanılacak model (varsayılan: "gpt-4o-mini")
  - `HTTP_ADDR`: Sunucu adresi (varsayılan: ":8080")
  - `HTTP_PATH`: MCP endpoint yolu (varsayılan: "/mcp")
  - `AUTH_BEARER`: Kimlik doğrulama için bearer token

  ## Kullanım Örnekleri

  ```bash
  # Doğal dilde sorular sorun
  ./pgmcp-client -ask "What are the top 5 customers?" -format table
  ./pgmcp-client -ask "How many orders were placed today?" -format json

  # Tüm metin alanlarında arama yapın
  ./pgmcp-client -search "john" -format table

  # Aynı anda birden çok soru
  ./pgmcp-client -ask "Show tables" -ask "Count users" -format table

  # Farklı çıktı formatları
  ./pgmcp-client -ask "Export all data" -format csv -max-rows 1000
  ```

  ## Örnek Veritabanı

  Proje iki şema içerir:
  - **`schema.sql`**: 5.000+ kayıtlı tam Amazon benzeri pazaryeri
  - **`schema_minimal.sql`**: Karışık duruş `"Categories"` tablosu ile minimal test şeması

  **Temel özellikler:**
  - **Karışık duruş tablo adları** (`"Categories"`) büyük/küçük harf duyarlılığını test etmek için
  - **Bileşik birincil anahtarlar** (`order_items`) AI varsayımlarını test etmek için
  - **Gerçekçi ilişkiler** ve veri türleri

  Kendi veritabanınızı kullanın:
  ```bash
  export DATABASE_URL="postgres://user:pass@host:5432/your_db"
  ./pgmcp-server
  ./pgmcp-client -ask "What tables do I have?"
  ```

  ## AI Hata İşleme

  AI yanlış SQL oluşturduğunda, PGMCP bunu zarif bir şekilde işler:

  ```json
  {
    "error": "Column not found in generated query",
    "suggestion": "Try rephrasing your question or ask about specific tables",
    "original_sql": "SELECT non_existent_column FROM table..."
  }
  ```

  Çökmek yerine sistem yararlı geri bildirim sağlar ve çalışmaya devam eder.

  ## MCP Entegrasyonu

  ### Cursor Entegrasyonu

  ```bash
  # Sunucuyu başlatın
  export DATABASE_URL="postgres://user:pass@localhost:5432/your_db"
  ./pgmcp-server
  ```

  Cursor ayarlarına ekleyin:
  ```json
  {
    "mcp.servers": {
      "pgmcp": {
        "transport": {
          "type": "http",
          "url": "http://localhost:8080/mcp"
        }
      }
    }
  }
  ```

  ### Claude Desktop Entegrasyonu

  `~/.config/claude-desktop/claude_desktop_config.json` düzenleyin:
  ```json
  {
    "mcpServers": {
      "pgmcp": {
        "transport": {
          "type": "http",
          "url": "http://localhost:8080/mcp"
        }
      }
    }
  }
  ```

  ## API Tools

  - **`ask`**: Doğal dil sorularından → otomatik streaming ile SQL sorgularına
  - **`search`**: Tüm veritabanı metin sütunlarında serbest metin araması  
  - **`stream`**: Pagination ile çok büyük sonuç kümeleri için gelişmiş streaming

  ## Güvenlik Özellikleri

  - **Salt Okunur Zorlama**: Yazma işlemlerini engeller (INSERT, UPDATE, DELETE, vb.)
  - **Sorgu Zaman Aşımları**: Uzun çalışan sorguları önler
  - **Giriş Doğrulaması**: Tüm kullanıcı girdisini sanitize eder ve doğrular
  - **İşlem Yalıtımı**: Tüm sorgular salt okunur işlemlerde çalışır

  ## Test Etme

  ```bash
  # Birim testleri
  go test ./server -v

  # Entegrasyon testleri (PostgreSQL gereklidir)
  go test ./server -tags=integration -v
  ```

  ## Lisans

  Apache 2.0 - Ayrıntılar için LICENSE dosyasına bakın.

  ## İlgili Projeler

  - [Model Context Protocol](https://modelcontextprotocol.io/) - Temel protokol spesifikasyonu
  - [MCP Go SDK](https://github.com/modelcontextprotocol/go-sdk) - MCP'nin Go uygulaması

  ---

  PGMCP, PostgreSQL veritabanınızı salt okunur erişim kontrolleriyle güvenliği koruyarak AI asistanlarına doğal dil aracılığıyla erişilebilir hale getirir.
---

[![ci](https://github.com/subnetmarco/pgmcp/actions/workflows/ci.yml/badge.svg)](https://github.com/subnetmarco/pgmcp/actions/workflows/ci.yml)
[![Go Report Card](https://goreportcard.com/badge/github.com/subnetmarco/pgmcp)](https://goreportcard.com/report/github.com/subnetmarco/pgmcp)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# PGMCP - PostgreSQL Model Context Protocol Server

PGMCP connects AI assistants to **any PostgreSQL database** through natural language queries. Ask questions in plain English and get structured SQL results with automatic streaming and robust error handling.

**Works with**: Cursor, Claude Desktop, VS Code extensions, and any [MCP-compatible client](https://modelcontextprotocol.io/)

## Quick Start

PGMCP connects to **your existing PostgreSQL database** and makes it accessible to AI assistants through natural language queries.

### Prerequisites
- PostgreSQL database (existing database with your schema)
- OpenAI API key (optional, for AI-powered SQL generation)

### Basic Usage

```bash
# Set up environment variables
export DATABASE_URL="postgres://user:password@localhost:5432/your-existing-db"
export OPENAI_API_KEY="your-api-key"  # Optional

# Run server (using pre-compiled binary)
./pgmcp-server

# Test with client in another terminal
./pgmcp-client -ask "What tables do I have?" -format table
./pgmcp-client -ask "Who is the customer that has placed the most orders?" -format table
./pgmcp-client -search "john" -format table
```

Here is how it works:

```
👤 User / AI Assistant
         │
         │ "Who are the top customers?"
         ▼
┌─────────────────────────────────────────────────────────────┐
│                    Any MCP Client                           │
│                                                             │
│  PGMCP CLI  │  Cursor  │  Claude Desktop  │  VS Code  │ ... │
│  JSON/CSV   │  Chat    │  AI Assistant    │  Editor   │     │
└─────────────────────────────────────────────────────────────┘
         │
         │ Streamable HTTP / MCP Protocol
         ▼
┌─────────────────────────────────────────────────────────────┐
│                    PGMCP Server                             │
│                                                             │
│  🔒 Security    🧠 AI Engine      🌊 Streaming               │
│  • Input Valid  • Schema Cache    • Auto-Pagination         │
│  • Audit Log    • OpenAI API      • Memory Management       │
│  • SQL Guard    • Error Recovery  • Connection Pool         │
└─────────────────────────────────────────────────────────────┘
         │
         │ Read-Only SQL Queries
         ▼
┌─────────────────────────────────────────────────────────────┐
│                Your PostgreSQL Database                     │
│                                                             │
│  Any Schema: E-commerce, Analytics, CRM, etc.               │
│  Tables • Views • Indexes • Functions                       │
└─────────────────────────────────────────────────────────────┘

External AI Services:
OpenAI API • Anthropic • Local LLMs (Ollama, etc.)

Key Benefits:
✅ Works with ANY PostgreSQL database (no assumptions about schema)
✅ No schema modifications required  
✅ Read-only access (100% safe)
✅ Automatic streaming for large results
✅ Intelligent query understanding (singular vs plural)
✅ Robust error handling (graceful AI failure recovery)
✅ PostgreSQL case sensitivity support (mixed-case tables)
✅ Production-ready security and performance
✅ Universal database compatibility
✅ Multiple output formats (table, JSON, CSV)
✅ Free-text search across all columns
✅ Authentication support
✅ Comprehensive testing suite
```

## Features

- **Natural Language to SQL**: Ask questions in plain English
- **Automatic Streaming**: Handles large result sets automatically  
- **Safe Read-Only Access**: Prevents any write operations
- **Text Search**: Search across all text columns
- **Multiple Output Formats**: Table, JSON, and CSV
- **PostgreSQL Case Sensitivity**: Handles mixed-case table names correctly
- **Universal Compatibility**: Works with any PostgreSQL database

### Environment Variables

**Required:**
- `DATABASE_URL`: PostgreSQL connection string to your existing database

**Optional:**
- `OPENAI_API_KEY`: OpenAI API key for AI-powered SQL generation
- `OPENAI_MODEL`: Model to use (default: "gpt-4o-mini")
- `HTTP_ADDR`: Server address (default: ":8080")
- `HTTP_PATH`: MCP endpoint path (default: "/mcp")
- `AUTH_BEARER`: Bearer token for authentication

## Installation

### Download Pre-compiled Binaries

1. Go to [GitHub Releases](https://github.com/subnetmarco/pgmcp/releases)
2. Download the binary for your platform (Linux, macOS, Windows)
3. Extract and run:

```bash
# Example for macOS/Linux
tar xzf pgmcp_*.tar.gz
cd pgmcp_*
./pgmcp-server
```

### Alternative Options

```bash
# Homebrew (macOS/Linux) - Available after first release
brew tap subnetmarco/homebrew-tap
brew install pgmcp

# Build from source
go build -o pgmcp-server ./server
go build -o pgmcp-client ./client
```

### Docker/Kubernetes

```bash
# Docker
docker run -e DATABASE_URL="postgres://user:pass@host:5432/db" \
  -p 8080:8080 ghcr.io/subnetmarco/pgmcp:latest

# Kubernetes (see examples/ directory for full manifests)
kubectl create secret generic pgmcp-secret \
  --from-literal=database-url="postgres://user:pass@host:5432/db"
kubectl apply -f examples/k8s/
```

#### Quick Start

```bash
# Set up database (optional - works with any existing PostgreSQL database)
export DATABASE_URL="postgres://user:password@localhost:5432/mydb"
psql $DATABASE_URL < schema.sql

# Run server
export OPENAI_API_KEY="your-api-key"
./pgmcp-server

# Test with client
./pgmcp-client -ask "Who is the user that places the most orders?" -format table
./pgmcp-client -ask "Show me the top 40 most reviewed items in the marketplace" -format table
```

### Environment Variables

**Required:**
- `DATABASE_URL`: PostgreSQL connection string

**Optional:**
- `OPENAI_API_KEY`: OpenAI API key for SQL generation
- `OPENAI_MODEL`: Model to use (default: "gpt-4o-mini")
- `HTTP_ADDR`: Server address (default: ":8080")
- `HTTP_PATH`: MCP endpoint path (default: "/mcp")
- `AUTH_BEARER`: Bearer token for authentication

## Usage Examples

```bash
# Ask questions in natural language
./pgmcp-client -ask "What are the top 5 customers?" -format table
./pgmcp-client -ask "How many orders were placed today?" -format json

# Search across all text fields
./pgmcp-client -search "john" -format table

# Multiple questions at once
./pgmcp-client -ask "Show tables" -ask "Count users" -format table

# Different output formats
./pgmcp-client -ask "Export all data" -format csv -max-rows 1000
```

## Example Database

The project includes two schemas:
- **`schema.sql`**: Full Amazon-like marketplace with 5,000+ records
- **`schema_minimal.sql`**: Minimal test schema with mixed-case `"Categories"` table

**Key features:**
- **Mixed-case table names** (`"Categories"`) for testing case sensitivity
- **Composite primary keys** (`order_items`) for testing AI assumptions
- **Realistic relationships** and data types

Use your own database:
```bash
export DATABASE_URL="postgres://user:pass@host:5432/your_db"
./pgmcp-server
./pgmcp-client -ask "What tables do I have?"
```

## AI Error Handling

When AI generates incorrect SQL, PGMCP handles it gracefully:

```json
{
  "error": "Column not found in generated query",
  "suggestion": "Try rephrasing your question or ask about specific tables",
  "original_sql": "SELECT non_existent_column FROM table..."
}
```

Instead of crashing, the system provides helpful feedback and continues operating.

## MCP Integration

### Cursor Integration

```bash
# Start server
export DATABASE_URL="postgres://user:pass@localhost:5432/your_db"
./pgmcp-server
```

Add to Cursor settings:
```json
{
  "mcp.servers": {
    "pgmcp": {
      "transport": {
        "type": "http",
        "url": "http://localhost:8080/mcp"
      }
    }
  }
}
```

### Claude Desktop Integration

Edit `~/.config/claude-desktop/claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "pgmcp": {
      "transport": {
        "type": "http",
        "url": "http://localhost:8080/mcp"
      }
    }
  }
}
```

## API Tools

- **`ask`**: Natural language questions → SQL queries with automatic streaming
- **`search`**: Free-text search across all database text columns  
- **`stream`**: Advanced streaming for very large result sets with pagination

## Safety Features

- **Read-Only Enforcement**: Blocks write operations (INSERT, UPDATE, DELETE, etc.)
- **Query Timeouts**: Prevents long-running queries
- **Input Validation**: Sanitizes and validates all user input
- **Transaction Isolation**: All queries run in read-only transactions

## Testing

```bash
# Unit tests
go test ./server -v

# Integration tests (requires PostgreSQL)
go test ./server -tags=integration -v
```

## License

Apache 2.0 - See LICENSE file for details.

## Related Projects

- [Model Context Protocol](https://modelcontextprotocol.io/) - The underlying protocol specification
- [MCP Go SDK](https://github.com/modelcontextprotocol/go-sdk) - Go implementation of MCP

---

PGMCP makes your PostgreSQL database accessible to AI assistants through natural language while maintaining security through read-only access controls.
