---
name: "hannesrudolph/imessage-query-fastmcp-mcp-server"
description: "An MCP server that provides safe access to your iMessage database through Model Context Protocol (MCP), enabling LLMs to query and analyze iMessage conversations with proper phone number validation and attachment handling"
description_tr: "iMessage veritabanınıza Model Context Protocol (MCP) üzerinden güvenli erişim sağlayan ve LLM'lerin telefon numarası doğrulaması ile ek dosya yönetimi yaparak iMessage konuşmalarını sorgulamasını ve analiz etmesini sağlayan bir MCP sunucusu."
category: "Communication"
repo: "hannesrudolph/imessage-query-fastmcp-mcp-server"
stars: 78
url: "https://github.com/hannesrudolph/imessage-query-fastmcp-mcp-server"
body_length: 3622
language: "Python"
body_tr: |-
  # iMessage Query MCP Server

  Model Context Protocol (MCP) aracılığıyla iMessage veritabanınıza güvenli erişim sağlayan bir MCP sunucusu. Bu sunucu FastMCP framework'ü ve imessagedb kütüphanesi ile kurulmuş olup, LLM'lerin uygun telefon numarası doğrulaması ve ek dosya işleme ile iMessage konuşmalarını sorgulamasını ve analiz etmesini sağlar.

  ## 📋 Sistem Gereksinimleri

  - macOS (iMessage veritabanı erişimi için gerekli)
  - Python 3.6+

  ## 📦 Bağımlılıklar

  Tüm gerekli bağımlılıkları yükleyin:

  ```bash
  # pip kullanarak
  pip install -r requirements.txt
  ```

  ### Gerekli Paketler
  - **fastmcp**: Model Context Protocol sunucuları oluşturmak için framework
  - **imessagedb**: macOS Messages veritabanına erişmek ve sorgulamak için Python kütüphanesi
  - **phonenumbers**: Uygun telefon numarası doğrulaması ve biçimlendirmesi için Google'ın telefon numarası işleme kütüphanesi

  Tüm bağımlılıklar kolay kurulum için `requirements.txt` dosyasında belirtilmiştir.

  ## 📑 İçindekiler
  - [Sistem Gereksinimleri](#-sistem-gereksinimleri)
  - [Bağımlılıklar](#-bağımlılıklar)
  - [MCP Araçları](#%EF%B8%8F-mcp-araçları)
  - [Başlangıç](#-başlangıç)
  - [Kurulum Seçenekleri](#-kurulum-seçenekleri)
    - [Claude Desktop](#seçenek-1-claude-desktop-için-kurulum)
    - [Cline VSCode Plugin](#seçenek-2-cline-vscode-plugin-için-kurulum)
  - [Güvenlik Özellikleri](#-güvenlik-özellikleri)
  - [Geliştirme Dokümantasyonu](#-geliştirme-dokümantasyonu)
  - [Ortam Değişkenleri](#%EF%B8%8F-ortam-değişkenleri)

  ## 🛠️ MCP Araçları

  Sunucu, LLM'lere aşağıdaki araçları sunar:

  ### get_chat_transcript
  Belirli bir telefon numarası için isteğe bağlı tarih filtrelemesi ile mesaj geçmişini alın. Şunları içerir:
  - Mesaj metni ve zaman damgaları
  - Ek dosya bilgileri (varsa)
  - Uygun telefon numarası doğrulaması
  - Tarih aralığı filtrelemesi

  ## 🚀 Başlangıç

  Depoyu klonlayın:

  ```bash
  git clone https://github.com/hannesrudolph/imessage-query-fastmcp-mcp-server.git
  cd imessage-query-fastmcp-mcp-server
  ```

  ## 📦 Kurulum Seçenekleri

  Bu MCP sunucusunu Claude Desktop veya Cline VSCode plugin'inde kurabilirsiniz. İhtiyaçlarınıza en uygun seçeneği seçin.

  ### Seçenek 1: Claude Desktop için Kurulum

  FastMCP kullanarak kurun:

  ```bash
  fastmcp install imessage-query-server.py --name "iMessage Query"
  ```

  ### Seçenek 2: Cline VSCode Plugin için Kurulum

  Bu sunucuyu [Cline VSCode plugin](http://cline.bot) ile kullanmak için:

  1. VSCode'da Cline plugin kenar çubuğundaki sunucu simgesine (☰) tıklayın
  2. "MCP Ayarlarını Düzenle" düğmesine (✎) tıklayın
  3. Ayarlar dosyasına aşağıdaki yapılandırmayı ekleyin:

  ```json
  {
    "imessage-query": {
      "command": "uv",
      "args": [
        "run",
        "--with",
        "fastmcp",
        "fastmcp",
        "run",
        "/path/to/repo/imessage-query-server.py"
      ]
    }
  }
  ```

  `/path/to/repo` yerine bu depoyu klonladığınız yolun tam yolunu yazın (örneğin, `/Users/username/Projects/imessage-query-fastmcp-mcp-server`)

  ## 🔒 Güvenlik Özellikleri

  - iMessage veritabanına salt okunur erişim
  - phonenumbers kütüphanesi kullanarak telefon numarası doğrulaması
  - Eksik dosya algılaması ile güvenli ek dosya işleme
  - Tarih aralığı doğrulaması
  - Temiz JSON yanıtları için ilerleme çıktısı bastırılması

  ## 📚 Geliştirme Dokümantasyonu

  Depo, geliştirme için dokümantasyon dosyaları içerir:

  - `dev_docs/imessagedb-documentation.txt`: iMessage veritabanı yapısı ve imessagedb kütüphanesinin özellikleri hakkında kapsamlı dokümantasyon içerir.

  Bu dokümantasyon, özellik geliştirme sırasında bağlam olarak hizmet eder ve geliştirmeye yardımcı olmak için LLM'ler ile kullanılabilir.

  ## ⚙️ Ortam Değişkenleri

  Sunucu iMessage veritabanını otomatik olarak varsayılan macOS konumunda bulduğu için hiçbir ortam değişkeni gerekli değildir.
---

# iMessage Query MCP Server

An MCP server that provides safe access to your iMessage database through Model Context Protocol (MCP). This server is built with the FastMCP framework and the imessagedb library, enabling LLMs to query and analyze iMessage conversations with proper phone number validation and attachment handling.

## 📋 System Requirements

- macOS (required for iMessage database access)
- Python 3.6+

## 📦 Dependencies

Install all required dependencies:

```bash
# Using pip
pip install -r requirements.txt
```

### Required Packages
- **fastmcp**: Framework for building Model Context Protocol servers
- **imessagedb**: Python library for accessing and querying the macOS Messages database
- **phonenumbers**: Google's phone number handling library for proper number validation and formatting

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

### get_chat_transcript
Retrieve message history for a specific phone number with optional date filtering. Includes:
- Message text and timestamps
- Attachment information (if any)
- Proper phone number validation
- Date range filtering

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/hannesrudolph/imessage-query-fastmcp-mcp-server.git
cd imessage-query-fastmcp-mcp-server
```

## 📦 Installation Options

You can install this MCP server in either Claude Desktop or the Cline VSCode plugin. Choose the option that best suits your needs.

### Option 1: Install for Claude Desktop

Install using FastMCP:

```bash
fastmcp install imessage-query-server.py --name "iMessage Query"
```

### Option 2: Install for Cline VSCode Plugin

To use this server with the [Cline VSCode plugin](http://cline.bot):

1. In VSCode, click the server icon (☰) in the Cline plugin sidebar
2. Click the "Edit MCP Settings" button (✎)
3. Add the following configuration to the settings file:

```json
{
  "imessage-query": {
    "command": "uv",
    "args": [
      "run",
      "--with",
      "fastmcp",
      "fastmcp",
      "run",
      "/path/to/repo/imessage-query-server.py"
    ]
  }
}
```

Replace `/path/to/repo` with the full path to where you cloned this repository (e.g., `/Users/username/Projects/imessage-query-fastmcp-mcp-server`)

## 🔒 Safety Features

- Read-only access to the iMessage database
- Phone number validation using the phonenumbers library
- Safe attachment handling with missing file detection
- Date range validation
- Progress output suppression for clean JSON responses

## 📚 Development Documentation

The repository includes documentation files for development:

- `dev_docs/imessagedb-documentation.txt`: Contains comprehensive documentation about the iMessage database structure and the imessagedb library's capabilities.

This documentation serves as context when developing features and can be used with LLMs to assist in development.

## ⚙️ Environment Variables

No environment variables are required as the server automatically locates the iMessage database in the default macOS location.
