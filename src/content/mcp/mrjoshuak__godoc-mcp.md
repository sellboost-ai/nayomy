---
name: "mrjoshuak/godoc-mcp"
description: "Token-efficient Go documentation server that provides AI assistants with smart access to package docs and types without reading entire source files"
description_tr: "Go paketlerinin dokümantasyonuna ve type bilgilerine token-verimli şekilde erişim sağlayan, AI asistanlarının tüm kaynak dosyaları okumadan akıllı bir şekilde yararlanabileceği dokumentasyon sunucusu."
category: "Other Tools and Integrations"
repo: "mrjoshuak/godoc-mcp"
stars: 119
url: "https://github.com/mrjoshuak/godoc-mcp"
body_length: 8250
license: "MIT"
language: "Go"
homepage: "https://github.com/mrjoshuak"
body_tr: |-
  # godoc-mcp

  [![Go Report Card](https://goreportcard.com/badge/github.com/mrjoshuak/godoc-mcp)](https://goreportcard.com/report/github.com/mrjoshuak/godoc-mcp)
  [![Go Reference](https://pkg.go.dev/badge/github.com/mrjoshuak/godoc-mcp.svg)](https://pkg.go.dev/github.com/mrjoshuak/godoc-mcp)
  [![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

  ## Genel Bakış

  `godoc-mcp`, Go belgelerine verimli bir şekilde erişim sağlayan bir Model Context Protocol (MCP) sunucusudur. LLM'lerin tüm kaynak dosyalarını okumaya gerek kalmadan paket belgelerine doğrudan erişim sağlayarak Go projelerini anlamalarına yardımcı olur. `godoc-mcp`, Go paketlerini anlamak ve kullanmak için gereken token sayısını önemli ölçüde azaltarak LLM'leri kullanarak Go'da geliştirme performansını büyük ölçüde iyileştirebilir.

  ## Başlarken

  ```bash
  go install github.com/mrjoshuak/godoc-mcp@latest
  ```

  ## Neden godoc-mcp Kullanmalısınız?

  Bir cümleyle: **`godoc-mcp`, LLM'lerin Go projelerini anlaması için daha token verimli bir yol sağlar.**

  Geleneksel dosya okuma yaklaşımları, LLM'lerin tek bir paketi anlamak için genellikle birçok dosyayı işlemesini gerektirir. `godoc-mcp` birkaç avantaj sağlar:

  1. **Token Verimliliği**: Yalnızca temel belgeleri döndürerek token kullanımını önemli ölçüde azaltır
  2. **Yapılandırılmış Bilgi**: Resmi paket belgelerini tutarlı ve iyi yapılandırılmış bir formatta sağlar
  3. **Proje Navigasyonu**: Proje yapılarının akıllı işlenmesi LLM'lerin çok paketli projeleri anlamasına yardımcı olur
  4. **Entegrasyona Hazır**: Diğer MCP sunucularıyla çalışarak hem üst düzey hem de detaylı kod analizi sağlar
  5. **Performans**: Caching ve optimize edilmiş token kullanımı `godoc-mcp`'yi Go geliştirme için hızlı ve verimli bir araç haline getirir
  6. **Yerel**: Belgelere erişmek için internet bağlantısı gerektirmez

  `godoc-mcp` ile bir LLM, tüm kaynak dosyalarını okumak zorunda kalmadan tam olarak ihtiyaç duyduğu bilgiyi alabilir. LLM'nin alabileceği farklı ayrıntı seviyeleri aşağıda verilmiştir.

  - Bir dışa aktarılan sembol için belge
  - Bir sembol için tam kaynak kodu
  - Tüm dışa aktarılan sembollerin listesi (özlü belge)
  - Dışa aktarılmayan semboller dahil tüm sembollerin listesi
  - Bir paket için tam belge
  - Bir paket için tüm kaynak kodu

  Bu, `godoc-mcp`'yi Go geliştirici LLM'leri kullanan kişiler için gerekli bir araç haline getirir; çünkü LLM'lerin önceden herhangi bir programlama dilinde mümkün olandan önemli ölçüde daha fazla ve daha detaylı olarak bağlamı anlamalarını sağlar.

  ## Özellikler

  Sunucu aşağıdakileri yapacaktır:
  1. Go dosyaları içeren dizinler için: Paket belgelerini döndür
  2. Go dosyaları olmayan dizinler için: Alt dizinlerdeki kullanılabilir Go paketlerini listele
  3. Import yolları için: Standart kütüphane veya üçüncü taraf paket belgelerini döndür

  - **Verimli Belge Erişimi**: Minimal token kullanımıyla resmi Go belgelerini alır
  - **Akıllı Paket Keşfi**: Go dosyaları olmayan bir dizine işaret edildiğinde, alt dizinlerdeki kullanılabilir Go paketlerini listeler
  - **Esnek Yol Desteği**:
    - Yerel dosya yolları (örneğin, "/full/path/to/mypackage")
    - Import yolları (örneğin, "io", "github.com/user/repo")
  - **Otomatik Module Bağlamı**:
    - Gerektiğinde geçici Go projeleri oluşturur
    - Harici paketler için modül bağlamını otomatik olarak kurar
    - Herhangi bir paket belgesi için manuel modül kurulumu gerekmez
    - Geçici projelerin temizlenmesini işler
  - **Module Farkında**: Çalışma dizini bağlamı aracılığıyla üçüncü taraf paketlerin belgelerine destek verir (yani çalışma dizininden `go doc` komutunu çalıştıracaktır)
  - **Performans Optimize Edilmiş**:
    - Yerleşik response caching
    - Odaklanmış belge alma aracılığıyla verimli token kullanımı
    - Response boyutları hakkında metadata
    - Standart kütüphane vs harici paketlerin akıllı işlenmesi

  ### Örnekler

  Kodlama görevleri sırasında belge sağlamanın yanı sıra, `godoc-mcp` Go projelerini ve paketlerini keşfetmek için de kullanılabilir. İşte genel prompt vermek için bazı örnekler:

  #### Proje Anlayışı

  "Bir Go projesine /path/to/some/project adresinden bakıyorum. Hangi paketleri içeriyor ve ne işe yaradıklarını söyler misin?"

  #### Paket Arayüzü Anlayışı

  "io paketi hangi arayüzleri sağlıyor? Özellikle okumaya ilişkin herhangi bir şey arıyorum."

  #### Uygulama Rehberliği

  "io.Reader arayüzünü uygulamam gerekiyor. Belgelerini ve bilmem gereken ilgili türleri göster."

  #### API Kullanımı

  "Lütfen /path/to/some/project içindeki Resource türünün belgelerini göster. Bunu nasıl oluşturacağını ve kullanacağını anlamam gerekiyor."

  #### Kütüphane Keşfi

  "Ben /path/to/some/project içindeyim ve github.com/gorilla/mux kullanıyor. Router türünün belgelerini göster."

  #### Metot Keşfi

  "http.Request türü üzerinde hangi metotlar mevcut? Standart kütüphane HTTP işleyicileriyle çalışıyorum."

  #### Odaklanmış Öğrenme

  "/path/to/project/server paketindeki Server türünü nasıl yapılandıracağınızı açıklayın."

  #### Paket Taraması

  "Yeni bir Go proje dizinindeyim ve birden fazla paket görüyorum. Her birinin ne yaptığını gösterebilir misin?"

  ## Kullanım

  ### Transport Seçenekleri

  godoc-mcp üç transport modunu destekler:

  - **stdio** (varsayılan): Standart giriş/çıkış, Claude Desktop gibi yerel MCP istemcileri için
  - **sse**: HTTP üzerinden Server-Sent Events, web tabanlı MCP istemcileri için
  - **http**: Streamable HTTP, MCP spesifikasyonunun önerilen HTTP transport'u

  ```bash
  # Varsayılan stdio modu
  godoc-mcp

  # Port 8080'de SSE modu
  godoc-mcp --transport sse --addr :8080

  # Streamable HTTP modu
  godoc-mcp --transport http --addr :9090
  ```

  ### Docker

  ```bash
  docker pull ghcr.io/mrjoshuak/godoc-mcp:latest
  ```

  [Docker MCP Gateway](https://docs.docker.com/ai/mcp-catalog-and-toolkit/mcp-gateway/) ile kullanım için MCP yapılandırmanıza ekleyin:

  ```json
  {
    "mcpServers": {
      "godoc": {
        "command": "docker",
        "args": ["run", "-i", "--rm", "ghcr.io/mrjoshuak/godoc-mcp:latest"]
      }
    }
  }
  ```

  Yerel proje belgelerine erişmek için proje dizininizi mount edin ve `working_dir` parametresi olarak `/workspace` kullanın:

  ```json
  {
    "mcpServers": {
      "godoc": {
        "command": "docker",
        "args": ["run", "-i", "--rm", "-v", "/path/to/project:/workspace", "ghcr.io/mrjoshuak/godoc-mcp:latest"]
      }
    }
  }
  ```

  Docker üzerinden SSE transport ile çalıştırmak için:

  ```bash
  docker run --rm -p 8080:8080 ghcr.io/mrjoshuak/godoc-mcp:latest --transport sse --addr :8080
  ```

  ### Claude Code

  ```bash
  claude mcp add godoc-mcp -- godoc-mcp
  ```

  ### Claude Desktop

  Claude masaüstü uygulamasına eklemek için MCP yapılandırmanızı düzenleyin:

  ```json
  {
    "mcpServers": {
      "godoc": {
        "command": "godoc-mcp"
      }
    }
  }
  ```

  `go doc` Go kurulumunuzu bulamazsa, ortam değişkenleri ekleyin:

  ```json
  {
    "mcpServers": {
      "godoc": {
        "command": "godoc-mcp",
        "env": {
          "GOPATH": "/path/to/go",
          "GOMODCACHE": "/path/to/go/pkg/mod"
        }
      }
    }
  }
  ```

  ### Araçlar

  godoc-mcp iki araç sağlar:

  #### `get_doc`

  Go paketi, türü, fonksiyonu veya metodu için belge alır.

  - `path` (gerekli): Paket import yolu (örneğin, `io`, `github.com/user/repo`) veya yerel dosya yolu
  - `target` (isteğe bağlı): Belgelendirilecek spesifik sembol (fonksiyon, tür, vb.)
  - `cmd_flags` (isteğe bağlı): Ek go doc bayrakları (izin verilen: `-all`, `-src`, `-u`, `-short`, `-c`)
  - `working_dir` (isteğe bağlı): Module bağlamı için çalışma dizini (göreceli yollar için gerekli)
  - `page` (isteğe bağlı): Sayfalı sonuçlar için sayfa numarası (varsayılan: 1)
  - `page_size` (isteğe bağlı): Sayfa başına satırlar, 100-5000 (varsayılan: 1000)

  #### `list_packages`

  Go paket yolu altındaki tüm alt paketleri listele. Doğru import yollarını tahmin etmek yerine keşfetmek için bunu kullanın.

  - `path` (gerekli): Kök paket import yolu (örneğin, `net`, `github.com/user/repo`)
  - `working_dir` (isteğe bağlı): Module bağlamı için çalışma dizini (göreceli yollar için gerekli)

  ## Sorun Giderme

  - Yerel yollar için, Go kaynak dosyaları içerdiğinden veya Go paketlerini içeren dizinleri gösterdiğinden emin olun
  - Module ile ilgili hatalar görürseniz, MCP sunucusu yapılandırmanızda GOPATH ve GOMODCACHE ortam değişkenlerinin doğru şekilde ayarlandığından emin olun
  - Sunucu, harici paketler için module bağlamını otomatik olarak işler, ancak özel durumlar için gerekirse yine de belirli bir working_dir sağlayabilirsiniz

  ## Lisans

  Bu proje MIT Lisansı altında lisanslanmıştır - ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.
---

# godoc-mcp

[![Go Report Card](https://goreportcard.com/badge/github.com/mrjoshuak/godoc-mcp)](https://goreportcard.com/report/github.com/mrjoshuak/godoc-mcp)
[![Go Reference](https://pkg.go.dev/badge/github.com/mrjoshuak/godoc-mcp.svg)](https://pkg.go.dev/github.com/mrjoshuak/godoc-mcp)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Overview

`godoc-mcp` is a Model Context Protocol (MCP) server that provides efficient access to Go documentation. It helps LLMs understand Go projects by providing direct access to package documentation without needing to read entire source files. `godoc-mcp` can vastly improve the performance of using LLMs to develop in Go by substantially reducing the number of tokens needed to understand and make use of Go packages.

## Getting Started

```bash
go install github.com/mrjoshuak/godoc-mcp@latest
```

## Why Use godoc-mcp?

In a sentence: **`godoc-mcp` provides a more token efficient way for LLMs to understand Go projects.**

Traditional file-reading approaches require LLMs to process entire source files often many files to understand a single package. `godoc-mcp` provides several advantages:

1. **Token Efficiency**: Returns only the essential documentation, reducing token usage significantly
2. **Structured Information**: Provides official package documentation in a consistent, well-structured format
3. **Project Navigation**: Smart handling of project structures helps LLMs understand multi-package projects
4. **Integration Ready**: Works alongside other MCP servers, enabling both high-level and detailed code analysis
5. **Performance**: Caching and optimized token usage make `godoc-mcp` a fast and efficient tool for Go development
6. **Local**: Does not require an internet connection to access documentation

With `godoc-mcp`, a LLM can get precisely the information it needs without having to read entire source files. Here are the different levels of detail that an LLM can get.

- Documentation for one exported symbol
- The complete source for one symbol
- A list of all exported symbols (the concise documentation)
- A list of all symbols including unexported symbols
- The full documentation for a package
- The entire source for a package

This makes `godoc-mcp` an essential tool for Go developers using LLMs by enabling LLMs to understand significantly more, and in more detail, about the context than previously possible in any programming language.

## Features

The server will:
1. For directories with Go files: Return package documentation
2. For directories without Go files: List available Go packages in subdirectories
3. For import paths: Return standard library or third-party package documentation

- **Efficient Documentation Access**: Retrieves official Go documentation with minimal token usage
- **Smart Package Discovery**: When pointed at a directory without Go files, lists available Go packages in subdirectories
- **Flexible Path Support**:
  - Local file paths (e.g., "/full/path/to/mypackage")
  - Import paths (e.g., "io", "github.com/user/repo")
- **Automatic Module Context**:
  - Creates temporary Go projects when needed
  - Automatically sets up module context for external packages
  - No manual module setup required for any package documentation
  - Handles cleanup of temporary projects
- **Module-Aware**: Supports documentation for third-party packages through working directory context (i.e. it will run `go doc` from the working directory)
- **Performance Optimized**:
  - Built-in response caching
  - Efficient token usage through focused documentation retrieval
  - Metadata about response sizes
  - Smart handling of standard library vs external packages

### Examples

In addition to providing documentation while working on coding tasks. `godoc-mcp` can also be used to explore Go projects and packages. Here are some examples for general prompting:

#### Project Understanding

"I'm looking at a Go project at /path/to/some/project. What packages does it contain and what do they do?"

#### Package Interface Understanding

"What interfaces does the io package provide? I'm particularly interested in anything related to reading."

#### Implementation Guidance

"I need to implement the io.Reader interface. Show me its documentation and any related types I should know about."

#### API Usage

"Show me the documentation for the Resource type in the /path/to/some/project. I need to understand how to create and use it."

#### Library Exploration

"I'm in /path/to/some/project which uses github.com/gorilla/mux. Show me the documentation for the Router type."

#### Method Discovery

"What methods are available on the http.Request type? I'm working with standard library HTTP handlers."

#### Focused Learning

"Explain how to configure the Server type in the /path/to/project/server package."

#### Package Browsing

"I'm in a new Go project directory and see multiple packages. Can you show me what each one does?"

## Usage

### Transport Options

godoc-mcp supports three transport modes:

- **stdio** (default): Standard input/output, for local MCP clients like Claude Desktop
- **sse**: Server-Sent Events over HTTP, for web-based MCP clients
- **http**: Streamable HTTP, the MCP specification's recommended HTTP transport

```bash
# Default stdio mode
godoc-mcp

# SSE mode on port 8080
godoc-mcp --transport sse --addr :8080

# Streamable HTTP mode
godoc-mcp --transport http --addr :9090
```

### Docker

```bash
docker pull ghcr.io/mrjoshuak/godoc-mcp:latest
```

For use with [Docker MCP Gateway](https://docs.docker.com/ai/mcp-catalog-and-toolkit/mcp-gateway/), add to your MCP configuration:

```json
{
  "mcpServers": {
    "godoc": {
      "command": "docker",
      "args": ["run", "-i", "--rm", "ghcr.io/mrjoshuak/godoc-mcp:latest"]
    }
  }
}
```

To access local project documentation, mount your project directory and use `/workspace` as the `working_dir` parameter:

```json
{
  "mcpServers": {
    "godoc": {
      "command": "docker",
      "args": ["run", "-i", "--rm", "-v", "/path/to/project:/workspace", "ghcr.io/mrjoshuak/godoc-mcp:latest"]
    }
  }
}
```

To run with SSE transport via Docker:

```bash
docker run --rm -p 8080:8080 ghcr.io/mrjoshuak/godoc-mcp:latest --transport sse --addr :8080
```

### Claude Code

```bash
claude mcp add godoc-mcp -- godoc-mcp
```

### Claude Desktop

To add to the Claude desktop app, edit your MCP config:

```json
{
  "mcpServers": {
    "godoc": {
      "command": "godoc-mcp"
    }
  }
}
```

If `go doc` can't find your Go installation, add environment variables:

```json
{
  "mcpServers": {
    "godoc": {
      "command": "godoc-mcp",
      "env": {
        "GOPATH": "/path/to/go",
        "GOMODCACHE": "/path/to/go/pkg/mod"
      }
    }
  }
}
```

### Tools

godoc-mcp provides two tools:

#### `get_doc`

Get documentation for a Go package, type, function, or method.

- `path` (required): Package import path (e.g., `io`, `github.com/user/repo`) or local file path
- `target` (optional): Specific symbol to document (function, type, etc.)
- `cmd_flags` (optional): Additional go doc flags (allowed: `-all`, `-src`, `-u`, `-short`, `-c`)
- `working_dir` (optional): Working directory for module context (required for relative paths)
- `page` (optional): Page number for paginated results (default: 1)
- `page_size` (optional): Lines per page, 100-5000 (default: 1000)

#### `list_packages`

List all sub-packages under a Go package path. Use this to discover the correct import paths for sub-packages instead of guessing.

- `path` (required): Root package import path (e.g., `net`, `github.com/user/repo`)
- `working_dir` (optional): Working directory for module context (required for relative paths)

## Troubleshooting

- For local paths, ensure they contain Go source files or point to directories containing Go packages
- If you see module-related errors, ensure GOPATH and GOMODCACHE environment variables are set correctly in your MCP server configuration
- The server automatically handles module context for external packages, but you can still provide a specific working_dir if needed for special cases

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
