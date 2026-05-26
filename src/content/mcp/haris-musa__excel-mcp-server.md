---
name: "haris-musa/excel-mcp-server"
description: "An Excel manipulation server providing workbook creation, data operations, formatting, and advanced features (charts, pivot tables, formulae)."
description_tr: "Excel dosyaları oluşturma, veri işleme, biçimlendirme ve grafikler, pivot tablolar, formüller gibi ileri özellikleri sunan bir sunucu."
category: "Developer Tools"
repo: "haris-musa/excel-mcp-server"
stars: 3869
url: "https://github.com/haris-musa/excel-mcp-server"
body_length: 4195
license: "MIT"
language: "Python"
homepage: "https://excelmcpserver.com"
body_tr: |-
  <p align="center">
    
  </p>

  [![PyPI version](https://img.shields.io/pypi/v/excel-mcp-server.svg)](https://pypi.org/project/excel-mcp-server/)
  [![Total Downloads](https://static.pepy.tech/badge/excel-mcp-server)](https://pepy.tech/project/excel-mcp-server)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![smithery badge](https://smithery.ai/badge/@haris-musa/excel-mcp-server)](https://smithery.ai/server/@haris-musa/excel-mcp-server)
  [![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/install-mcp?name=excel-mcp-server&config=eyJjb21tYW5kIjoidXZ4IGV4Y2VsLW1jcC1zZXJ2ZXIgc3RkaW8ifQ%3D%3D)

  Microsoft Excel'in yüklü olmasına gerek kalmadan Excel dosyalarını değiştirmenizi sağlayan bir Model Context Protocol (MCP) sunucusu. AI aracınızla Excel çalışma kitaplarını oluşturun, okuyun ve değiştirin.

  ## Özellikler

  - 📊 **Excel İşlemleri**: Çalışma kitapları ve çalışma sayfaları oluşturun, okuyun, güncelleyin
  - 📈 **Veri İşleme**: Formüller, biçimlendirme, grafikler, pivot tablolar ve Excel tabloları
  - 🔍 **Veri Doğrulama**: Aralıklar, formüller ve veri bütünlüğü için yerleşik doğrulama
  - 🎨 **Biçimlendirme**: Font stilizasyonu, renkler, kenarlıklar, hizalama ve koşullu biçimlendirme
  - 📋 **Tablo İşlemleri**: Özel stil ile Excel tabloları oluşturun ve yönetin
  - 📊 **Grafik Oluşturma**: Çeşitli grafik türleri oluşturun (çizgi, sütun, pasta, dağılım vb.)
  - 🔄 **Pivot Tablolar**: Veri analizi için dinamik pivot tablolar oluşturun
  - 🔧 **Sayfa Yönetimi**: Çalışma sayfalarını kolayca kopyalayın, yeniden adlandırın, silin
  - 🔌 **Üçlü taşıma desteği**: stdio, SSE (kullanımdan kaldırılmış) ve streamable HTTP
  - 🌐 **Uzak & Yerel**: Hem yerel olarak hem de uzak hizmet olarak çalışır

  ## Kullanım

  Sunucu üç taşıma yöntemini destekler:

  ### 1. Stdio Taşıması (yerel kullanım için)

  ```bash
  uvx excel-mcp-server stdio
  ```

  ```json
  {
     "mcpServers": {
        "excel": {
           "command": "uvx",
           "args": ["excel-mcp-server", "stdio"]
        }
     }
  }
  ```

  ### 2. SSE Taşıması (Server-Sent Events - Kullanımdan Kaldırılmış)

  ```bash
  uvx excel-mcp-server sse
  ```

  **SSE taşıması bağlantısı**:
  ```json
  {
     "mcpServers": {
        "excel": {
           "url": "http://localhost:8000/sse",
        }
     }
  }
  ```

  ### 3. Streamable HTTP Taşıması (Uzak bağlantılar için Önerilir)

  ```bash
  uvx excel-mcp-server streamable-http
  ```

  **Streamable HTTP taşıması bağlantısı**:
  ```json
  {
     "mcpServers": {
        "excel": {
           "url": "http://localhost:8000/mcp",
        }
     }
  }
  ```

  ## Ortam Değişkenleri & Dosya Yolu Yönetimi

  ### SSE ve Streamable HTTP Taşımaları

  **SSE veya Streamable HTTP protokolleri** ile sunucuyu çalıştırırken, sunucu tarafında **`EXCEL_FILES_PATH` ortam değişkenini ayarlamanız gerekir**. Bu değişken sunucuya Excel dosyalarını nerede okuyup yazacağını söyler.
  - Ayarlanmamışsa, varsayılan olarak `./excel_files` değerine dönüştürülür.
  - Bu taşımalar ile tool `filepath` değerleri bu dizine **göre bağıl** olmalıdır (örneğin `reports/q1.xlsx`); mutlak yollar ve dizin dolaşımı reddedilir.

  Sunucunun dinlediği portu kontrol etmek için `FASTMCP_PORT` ortam değişkenini de ayarlayabilirsiniz (ayarlanmamışsa varsayılan değer `8017`'dir).
  - Örnek (Windows PowerShell):
    ```powershell
    $env:EXCEL_FILES_PATH="E:\MyExcelFiles"
    $env:FASTMCP_PORT="8007"
    uvx excel-mcp-server streamable-http
    ```
  - Örnek (Linux/macOS):
    ```bash
    EXCEL_FILES_PATH=/path/to/excel_files FASTMCP_PORT=8007 uvx excel-mcp-server streamable-http
    ```

  ### Stdio Taşıması

  **stdio protokolünü** kullanırken, dosya yolu her tool çağrısı ile sağlandığı için sunucu tarafında `EXCEL_FILES_PATH` ayarlamanız **gerekmez**. Sunucu her işlem için istemci tarafından gönderilen yolu kullanır.

  ## Kullanılabilir Araçlar

  Sunucu, Excel işleme için kapsamlı bir araç seti sağlar. Tüm kullanılabilir araçların tam belgeleri için [TOOLS.md](TOOLS.md) dosyasına bakın.

  ## Star Tarihi

  [![Star History Chart](https://api.star-history.com/svg?repos=haris-musa/excel-mcp-server&type=Date)](https://www.star-history.com/#haris-musa/excel-mcp-server&Date)

  ## Lisans

  MIT Lisansı - ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.
---

<p align="center">
  
</p>

[![PyPI version](https://img.shields.io/pypi/v/excel-mcp-server.svg)](https://pypi.org/project/excel-mcp-server/)
[![Total Downloads](https://static.pepy.tech/badge/excel-mcp-server)](https://pepy.tech/project/excel-mcp-server)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![smithery badge](https://smithery.ai/badge/@haris-musa/excel-mcp-server)](https://smithery.ai/server/@haris-musa/excel-mcp-server)
[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/install-mcp?name=excel-mcp-server&config=eyJjb21tYW5kIjoidXZ4IGV4Y2VsLW1jcC1zZXJ2ZXIgc3RkaW8ifQ%3D%3D)

A Model Context Protocol (MCP) server that lets you manipulate Excel files without needing Microsoft Excel installed. Create, read, and modify Excel workbooks with your AI agent.

## Features

- 📊 **Excel Operations**: Create, read, update workbooks and worksheets
- 📈 **Data Manipulation**: Formulas, formatting, charts, pivot tables, and Excel tables
- 🔍 **Data Validation**: Built-in validation for ranges, formulas, and data integrity
- 🎨 **Formatting**: Font styling, colors, borders, alignment, and conditional formatting
- 📋 **Table Operations**: Create and manage Excel tables with custom styling
- 📊 **Chart Creation**: Generate various chart types (line, bar, pie, scatter, etc.)
- 🔄 **Pivot Tables**: Create dynamic pivot tables for data analysis
- 🔧 **Sheet Management**: Copy, rename, delete worksheets with ease
- 🔌 **Triple transport support**: stdio, SSE (deprecated), and streamable HTTP
- 🌐 **Remote & Local**: Works both locally and as a remote service

## Usage

The server supports three transport methods:

### 1. Stdio Transport (for local use)

```bash
uvx excel-mcp-server stdio
```

```json
{
   "mcpServers": {
      "excel": {
         "command": "uvx",
         "args": ["excel-mcp-server", "stdio"]
      }
   }
}
```

### 2. SSE Transport (Server-Sent Events - Deprecated)

```bash
uvx excel-mcp-server sse
```

**SSE transport connection**:
```json
{
   "mcpServers": {
      "excel": {
         "url": "http://localhost:8000/sse",
      }
   }
}
```

### 3. Streamable HTTP Transport (Recommended for remote connections)

```bash
uvx excel-mcp-server streamable-http
```

**Streamable HTTP transport connection**:
```json
{
   "mcpServers": {
      "excel": {
         "url": "http://localhost:8000/mcp",
      }
   }
}
```

## Environment Variables & File Path Handling

### SSE and Streamable HTTP Transports

When running the server with the **SSE or Streamable HTTP protocols**, you **must set the `EXCEL_FILES_PATH` environment variable on the server side**. This variable tells the server where to read and write Excel files.
- If not set, it defaults to `./excel_files`.
- With these transports, tool `filepath` values must be **relative** to that directory (e.g. `reports/q1.xlsx`); absolute paths and directory traversal are rejected.

You can also set the `FASTMCP_PORT` environment variable to control the port the server listens on (default is `8017` if not set).
- Example (Windows PowerShell):
  ```powershell
  $env:EXCEL_FILES_PATH="E:\MyExcelFiles"
  $env:FASTMCP_PORT="8007"
  uvx excel-mcp-server streamable-http
  ```
- Example (Linux/macOS):
  ```bash
  EXCEL_FILES_PATH=/path/to/excel_files FASTMCP_PORT=8007 uvx excel-mcp-server streamable-http
  ```

### Stdio Transport

When using the **stdio protocol**, the file path is provided with each tool call, so you do **not** need to set `EXCEL_FILES_PATH` on the server. The server will use the path sent by the client for each operation.

## Available Tools

The server provides a comprehensive set of Excel manipulation tools. See [TOOLS.md](TOOLS.md) for complete documentation of all available tools.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=haris-musa/excel-mcp-server&type=Date)](https://www.star-history.com/#haris-musa/excel-mcp-server&Date)

## License

MIT License - see [LICENSE](LICENSE) for details.
