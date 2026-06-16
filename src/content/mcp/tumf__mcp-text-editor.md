---
name: "tumf/mcp-text-editor"
description: "A line-oriented text file editor. Optimized for LLM tools with efficient partial file access to minimize token usage."
category: "Developer Tools"
repo: "tumf/mcp-text-editor"
stars: 191
url: "https://github.com/tumf/mcp-text-editor"
body_length: 11868
license: "MIT"
language: "Python"
body_tr: |-
  # MCP Text Editor Server

  [![codecov](https://codecov.io/gh/tumf/mcp-text-editor/branch/main/graph/badge.svg?token=52D51U0ZUR)](https://codecov.io/gh/tumf/mcp-text-editor)
  [![smithery badge](https://smithery.ai/badge/mcp-text-editor)](https://smithery.ai/server/mcp-text-editor)
  [![Glama MCP Server](https://glama.ai/mcp/servers/k44dnvso10/badge)](https://glama.ai/mcp/servers/k44dnvso10)

  Model Context Protocol (MCP) sunucusu, standardlaştırılmış bir API üzerinden satır odaklı metin dosyası düzenleme yetenekleri sağlar. LLM araçları için optimize edilmiş, token kullanımını en aza indirmek için verimli kısmi dosya erişimi.

  ## Claude.app Kullanıcıları için Hızlı Başlangıç

  Bu editörü Claude.app ile kullanmak için aşağıdaki konfigürasyonu eklemeniz gerekmektedir:

  ```shell
  code ~/Library/Application\ Support/Claude/claude_desktop_config.json
  ```

  ```json
  {
    "mcpServers": {
      "text-editor": {
        "command": "uvx",
        "args": [
          "mcp-text-editor"
        ]
      }
    }
  }
  ```

  ## Genel Bakış

  MCP Text Editor Server, istemci-sunucu mimarisinde güvenli ve verimli satır tabanlı metin dosyası işlemlerini kolaylaştırmak için tasarlanmıştır. Model Context Protocol'ü uygular, güçlü çakışma algılama ve çözümü ile güvenilir dosya düzenlemesi sağlar. Satır odaklı yaklaşım, senkronize dosya erişimi gerektiren uygulamalar için ideal hale getiriyor; örneğin işbirlikçi düzenleme araçları, otomatik metin işleme sistemleri veya birden fazla işlemin metin dosyalarını güvenli bir şekilde değiştirmesi gereken her senaryo. Kısmi dosya erişim yeteneği, LLM tabanlı araçlar için özellikle değerlidir çünkü yalnızca gerekli dosya bölümlerini yükleyerek token tüketimini azaltmaya yardımcı olur.

  ### Ana Faydalar

  - Satır tabanlı düzenleme işlemleri
  - Satır aralığı belirtimlerinde token-verimli kısmi dosya erişimi
  - LLM araç entegrasyonu için optimize edilmiş
  - Hash tabanlı doğrulama ile güvenli eşzamanlı düzenleme
  - Atomik çok dosyalı işlemler
  - Özel hata türleri ile sağlam hata işleme
  - Kapsamlı kodlama desteği (utf-8, shift_jis, latin1, vb.)

  ## Özellikler

  - Satır odaklı metin dosyası düzenleme ve okuma
  - LLM uygulamalarında token kullanımını en aza indirmek için akıllı kısmi dosya erişimi
  - Satır aralığı belirtimi ile metin dosyası içeriğini al
  - Tek bir işlemde birden fazla dosyadan birden fazla aralık oku
  - Satır numarası kaymalarını doğru şekilde işleyen satır tabanlı patch uygulaması
  - Çakışma algılama ile metin dosyası içeriğini düzenle
  - Esnek karakter kodlama desteği (utf-8, shift_jis, latin1, vb.)
  - Birden fazla dosya operasyonları desteği
  - Hash tabanlı doğrulama ile eşzamanlı düzenlemelerin düzgün işlenmesi
  - Büyük dosyaların bellek-verimli işlenmesi

  ## Gereksinimler

  - Python 3.11 veya daha yükseği
  - POSIX uyumlu işletim sistemi (Linux, macOS, vb.) veya Windows
  - Metin dosyası işlemleri için yeterli disk alanı
  - Okuma/yazma işlemleri için dosya sistemi izinleri

  1. Python 3.11+ yükleyin

  ```bash
  pyenv install 3.11.6
  pyenv local 3.11.6
  ```

  2. uv (önerilen) veya pip yükleyin

  ```bash
  curl -LsSf https://astral.sh/uv/install.sh | sh
  ```

  3. Sanal ortam oluşturun ve bağımlılıkları yükleyin

  ```bash
  uv venv
  source .venv/bin/activate  # Windows'ta: .venv\Scripts\activate
  uv pip install -e ".[dev]"
  ```

  ## Gereksinimler

  - Python 3.13+
  - POSIX uyumlu işletim sistemi (Linux, macOS, vb.) veya Windows
  - Okuma/yazma işlemleri için dosya sistemi izinleri

  ## Kurulum

  ### uvx ile Çalıştırın

  ```bash
  uvx mcp-text-editor
  ```

  ### Smithery Üzerinden Kurulum

  Text Editor Server'ı Claude Desktop'a [Smithery](https://smithery.ai/server/mcp-text-editor) üzerinden otomatik olarak kurmak için:

  ```bash
  npx -y @smithery/cli install mcp-text-editor --client claude
  ```

  ### Manuel Kurulum

  1. Python 3.13+ yükleyin

  ```bash
  pyenv install 3.13.0
  pyenv local 3.13.0
  ```

  2. uv (önerilen) veya pip yükleyin

  ```bash
  curl -LsSf https://astral.sh/uv/install.sh | sh
  ```

  3. Sanal ortam oluşturun ve bağımlılıkları yükleyin

  ```bash
  uv venv
  source .venv/bin/activate  # Windows'ta: .venv\Scripts\activate
  uv pip install -e ".[dev]"
  ```

  ## Kullanım

  Sunucuyu başlatın:

  ```bash
  python -m mcp_text_editor
  ```

  ### MCP Tools

  Sunucu, metin dosyası manipülasyonu için birkaç araç sağlar:

  #### get_text_file_contents

  Bir veya daha fazla metin dosyasının içeriğini satır aralığı belirtimi ile alın.

  **Tek Aralık İsteği:**

  ```json
  {
    "file_path": "path/to/file.txt",
    "line_start": 1,
    "line_end": 10,
    "encoding": "utf-8"  // İsteğe bağlı, varsayılan utf-8
  }
  ```

  **Birden Fazla Aralık İsteği:**

  ```json
  {
    "files": [
      {
        "file_path": "file1.txt",
        "ranges": [
          {"start": 1, "end": 10},
          {"start": 20, "end": 30}
        ],
        "encoding": "shift_jis"  // İsteğe bağlı, varsayılan utf-8
      },
      {
        "file_path": "file2.txt",
        "ranges": [
          {"start": 5, "end": 15}
        ]
      }
    ]
  }
  ```

  Parametreler:
  - `file_path`: Metin dosyasının yolu
  - `line_start`/`start`: Başlanacak satır numarası (1 tabanlı)
  - `line_end`/`end`: Bitecek satır numarası (kapsayıcı, dosyanın sonu için null)
  - `encoding`: Dosya kodlaması (varsayılan: "utf-8"). Metin dosyasının kodlamasını belirtin (örneğin, "shift_jis", "latin1")

  **Tek Aralık Yanıtı:**

  ```json
  {
    "contents": "Dosya içeriği",
    "line_start": 1,
    "line_end": 10,
    "hash": "sha256-hash-of-contents",
    "file_lines": 50,
    "file_size": 1024
  }
  ```

  **Birden Fazla Aralık Yanıtı:**

  ```json
  {
    "file1.txt": [
      {
        "content": "Satırlar 1-10 içeriği",
        "start": 1,
        "end": 10,
        "hash": "sha256-hash-1",
        "total_lines": 50,
        "content_size": 512
      },
      {
        "content": "Satırlar 20-30 içeriği",
        "start": 20,
        "end": 30,
        "hash": "sha256-hash-2",
        "total_lines": 50,
        "content_size": 512
      }
    ],
    "file2.txt": [
      {
        "content": "Satırlar 5-15 içeriği",
        "start": 5,
        "end": 15,
        "hash": "sha256-hash-3",
        "total_lines": 30,
        "content_size": 256
      }
    ]
  }
  ```

  #### patch_text_file_contents

  Sağlam hata işleme ve çakışma algılama ile metin dosyalarına patch'ler uygulayın. Tek bir işlemde birden fazla dosyayı düzenlemeyi destekler.

  **İstek Formatı:**

  ```json
  {
    "files": [
      {
        "file_path": "file1.txt",
        "hash": "sha256-hash-from-get-contents",
        "encoding": "utf-8",  // İsteğe bağlı, varsayılan utf-8
        "patches": [
          {
            "start": 5,
            "end": 8,
            "range_hash": "sha256-hash-of-content-being-replaced",
            "contents": "Satırlar 5-8 için yeni içerik\n"
          },
          {
            "start": 15,
            "end": null,  // null, dosyanın sonunu ifade eder
            "range_hash": "sha256-hash-of-content-being-replaced",
            "contents": "Eklenecek içerik\n"
          }
        ]
      }
    ]
  }
  ```

  Önemli Notlar:
  1. Düzenlemeden önce her zaman get_text_file_contents kullanarak mevcut hash ve range_hash'ı alın
  2. Patch'ler satır numarası kaymalarını doğru şekilde işlemek için aşağıdan yukarıya uygulanır
  3. Patch'ler aynı dosya içinde çakışmamalıdır
  4. Satır numaraları 1 tabanlıdır
  5. `end: null` dosyanın sonuna içerik eklemek için kullanılabilir
  6. Dosya kodlaması, get_text_file_contents içinde kullanılan kodlamaya uymalıdır

  **Başarılı Yanıt:**

  ```json
  {
    "file1.txt": {
      "result": "ok",
      "hash": "sha256-hash-of-new-contents"
    }
  }
  ```

  **İpuçlarını İçeren Hata Yanıtı:**

  ```json
  {
    "file1.txt": {
      "result": "error",
      "reason": "Content hash mismatch",
      "suggestion": "get",  // get_text_file_contents kullanmayı önerir
      "hint": "Lütfen mevcut içerik ve hash'ları almak için önce get_text_file_contents'i çalıştırın"
    }
  }
  ```

      "result": "error",
      "reason": "Content hash mismatch - file was modified",
      "hash": "current-hash",
      "content": "Current file content"

    }
  }

  ```

  ### Yaygın Kullanım Deseni

  1. Mevcut içeriği ve hash'ı alın:

  ```python
  contents = await get_text_file_contents({
      "files": [
          {
              "file_path": "file.txt",
              "ranges": [{"start": 1, "end": null}]  # Tüm dosyayı oku
          }
      ]
  })
  ```

  2. Dosya içeriğini düzenleyin:

  ```python
  result = await edit_text_file_contents({
      "files": [
          {
              "path": "file.txt",
              "hash": contents["file.txt"][0]["hash"],
              "encoding": "utf-8",  // İsteğe bağlı, varsayılan "utf-8"
              "patches": [
                  {
                      "line_start": 5,
                      "line_end": 8,
                      "contents": "Yeni içerik\n"
                  }
              ]
          }
      ]
  })
  ```

  3. Çakışmaları işleyin:

  ```python
  if result["file.txt"]["result"] == "error":
      if "hash mismatch" in result["file.txt"]["reason"]:
          # Dosya başka bir işlem tarafından değiştirildi
          # Yeni içerik alın ve tekrar deneyin
          pass
  ```

  ### Hata İşleme

  Sunucu çeşitli hata durumlarını işler:
  - Dosya bulunamadı
  - İzin hataları
  - Hash uyuşmazlıkları (eşzamanlı düzenleme algılama)
  - Geçersiz patch aralıkları
  - Çakışan patch'ler
  - Kodlama hataları (dosya belirtilen kodlamaya çözülemezse)
  - Satır numarası sınırı dışında

  ## Güvenlik Önerileri

  - Dosya Yolu Doğrulaması: Sunucu, dizin geçiş saldırılarını önlemek için tüm dosya yollarını doğrular
  - Erişim Kontrolü: Yetkili dizinlere erişimi kısıtlamak için uygun dosya sistemi izinleri ayarlanmalıdır
  - Hash Doğrulaması: Tüm dosya değişiklikleri, yarış koşullarını önlemek için SHA-256 hash'ları kullanılarak doğrulanır
  - Giriş Sanitasyonu: Tüm kullanıcı girdileri düzgün şekilde temizlenir ve doğrulanır
  - Hata İşleme: Hassas bilgiler hata mesajlarında açığa çıkarılmaz

  ## Sorun Giderme

  ### Yaygın Sorunlar

  1. İzin Reddedildi
     - Dosya ve dizin izinlerini kontrol edin
     - Sunucu işleminin gerekli okuma/yazma erişimi olduğundan emin olun

  2. Hash Uyuşmazlığı ve Range Hash Hataları
     - Dosya başka bir işlem tarafından değiştirildi
     - Değiştirilen içerik değişti
     - Yeni hash'ları almak için get_text_file_contents çalıştırın

  3. Kodlama Sorunları
     - Dosya kodlamasının belirtilen kodlamaya uyduğunu doğrulayın
     - Yeni dosyalar için utf-8 kullanın
     - Dosyalardaki BOM işaretlerini kontrol edin

  4. Bağlantı Sorunları
     - Sunucunun çalıştığını ve erişilebilir olduğunu doğrulayın
     - Ağ yapılandırması ve güvenlik duvarı ayarlarını kontrol edin

  5. Performans Sorunları
     - Büyük dosyalar için daha küçük satır aralıkları kullanmayı düşünün
     - Sistem kaynaklarını (bellek, disk alanı) izleyin
     - Dosya türü için uygun kodlama kullanın

  ## Geliştirme

  ### Kurulum

  1. Repository'yi klonlayın
  2. Python sanal ortamı oluşturun ve etkinleştirin
  3. Geliştirme bağımlılıklarını yükleyin: `uv pip install -e ".[dev]"`
  4. Testleri çalıştırın: `make all`

  ### Kod Kalitesi Araçları

  - Ruff linting için
  - Black kod formatlaması için
  - isort import sıralaması için
  - mypy tip kontrolü için
  - pytest-cov test kapsamı için

  ### Test Etme

  Testler `tests` dizininde bulunur ve pytest ile çalıştırılabilir:

  ```bash
  # Tüm testleri çalıştır
  pytest

  # Kapsam raporu ile testleri çalıştır
  pytest --cov=mcp_text_editor --cov-report=term-missing

  # Belirli test dosyasını çalıştır
  pytest tests/test_text_editor.py -v
  ```

  Mevcut test kapsamı: 90%

  ### Proje Yapısı

  ```
  mcp-text-editor/
  ├── mcp_text_editor/
  │   ├── __init__.py
  │   ├── __main__.py      # Giriş noktası
  │   ├── models.py        # Veri modelleri
  │   ├── server.py        # MCP Sunucu uygulaması
  │   ├── service.py       # Çekirdek hizmet mantığı
  │   └── text_editor.py   # Metin editörü işlevselliği
  ├── tests/               # Test dosyaları
  └── pyproject.toml       # Proje yapılandırması
  ```

  ## Lisans

  MIT

  ## Katkı

  1. Repository'yi fork edin
  2. Bir özellik dalı oluşturun
  3. Değişikliklerinizi yapın
  4. Testleri ve kod kalitesi kontrollerini çalıştırın
  5. Pull request gönderin

  ### Tip İpuçları

  Bu proje, kodun tamamında Python tip ipuçlarını kullanır. Lütfen herhangi bir katkının bunu koruduğundan emin olun.

  ### Hata İşleme

  Tüm hata durumları uygun şekilde işlenmelidir ve anlamlı hata mesajları döndürmelidir. Sunucu, geçersiz giriş veya dosya işlemleri nedeniyle hiçbir zaman çökmemelidir.

  ### Test Etme

  Yeni özellikler uygun testleri içermelidir. Mevcut test kapsamını korumaya veya geliştirmeye çalışın.

  ### Kod Stili

  Tüm kod Black ile formatlanmalı ve Ruff linting'ini geçmelidir. İmport sıralaması isort tarafından işlenmelidir.
---

# MCP Text Editor Server

[![codecov](https://codecov.io/gh/tumf/mcp-text-editor/branch/main/graph/badge.svg?token=52D51U0ZUR)](https://codecov.io/gh/tumf/mcp-text-editor)
[![smithery badge](https://smithery.ai/badge/mcp-text-editor)](https://smithery.ai/server/mcp-text-editor)
[![Glama MCP Server](https://glama.ai/mcp/servers/k44dnvso10/badge)](https://glama.ai/mcp/servers/k44dnvso10)

A Model Context Protocol (MCP) server that provides line-oriented text file editing capabilities through a standardized API. Optimized for LLM tools with efficient partial file access to minimize token usage.

## Quick Start for Claude.app Users

To use this editor with Claude.app, add the following configuration to your prompt:

```shell
code ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

```json
{
  "mcpServers": {
    "text-editor": {
      "command": "uvx",
      "args": [
        "mcp-text-editor"
      ]
    }
  }
}
```

## Overview

MCP Text Editor Server is designed to facilitate safe and efficient line-based text file operations in a client-server architecture. It implements the Model Context Protocol, ensuring reliable file editing with robust conflict detection and resolution. The line-oriented approach makes it ideal for applications requiring synchronized file access, such as collaborative editing tools, automated text processing systems, or any scenario where multiple processes need to modify text files safely. The partial file access capability is particularly valuable for LLM-based tools, as it helps reduce token consumption by loading only the necessary portions of files.

### Key Benefits

- Line-based editing operations
- Token-efficient partial file access with line-range specifications
- Optimized for LLM tool integration
- Safe concurrent editing with hash-based validation
- Atomic multi-file operations
- Robust error handling with custom error types
- Comprehensive encoding support (utf-8, shift_jis, latin1, etc.)

## Features

- Line-oriented text file editing and reading
- Smart partial file access to minimize token usage in LLM applications
- Get text file contents with line range specification
- Read multiple ranges from multiple files in a single operation
- Line-based patch application with correct handling of line number shifts
- Edit text file contents with conflict detection
- Flexible character encoding support (utf-8, shift_jis, latin1, etc.)
- Support for multiple file operations
- Proper handling of concurrent edits with hash-based validation
- Memory-efficient processing of large files

## Requirements

- Python 3.11 or higher
- POSIX-compliant operating system (Linux, macOS, etc.) or Windows
- Sufficient disk space for text file operations
- File system permissions for read/write operations

1. Install Python 3.11+

```bash
pyenv install 3.11.6
pyenv local 3.11.6
```

2. Install uv (recommended) or pip

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

3. Create virtual environment and install dependencies

```bash
uv venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
uv pip install -e ".[dev]"
```

## Requirements

- Python 3.13+
- POSIX-compliant operating system (Linux, macOS, etc.) or Windows
- File system permissions for read/write operations

## Installation

### Run via uvx

```bash
uvx mcp-text-editor
```

### Installing via Smithery

To install Text Editor Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/mcp-text-editor):

```bash
npx -y @smithery/cli install mcp-text-editor --client claude
```

### Manual Installation

1. Install Python 3.13+

```bash
pyenv install 3.13.0
pyenv local 3.13.0
```

2. Install uv (recommended) or pip

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

3. Create virtual environment and install dependencies

```bash
uv venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
uv pip install -e ".[dev]"
```

## Usage

Start the server:

```bash
python -m mcp_text_editor
```

### MCP Tools

The server provides several tools for text file manipulation:

#### get_text_file_contents

Get the contents of one or more text files with line range specification.

**Single Range Request:**

```json
{
  "file_path": "path/to/file.txt",
  "line_start": 1,
  "line_end": 10,
  "encoding": "utf-8"  // Optional, defaults to utf-8
}
```

**Multiple Ranges Request:**

```json
{
  "files": [
    {
      "file_path": "file1.txt",
      "ranges": [
        {"start": 1, "end": 10},
        {"start": 20, "end": 30}
      ],
      "encoding": "shift_jis"  // Optional, defaults to utf-8
    },
    {
      "file_path": "file2.txt",
      "ranges": [
        {"start": 5, "end": 15}
      ]
    }
  ]
}
```

Parameters:
- `file_path`: Path to the text file
- `line_start`/`start`: Line number to start from (1-based)
- `line_end`/`end`: Line number to end at (inclusive, null for end of file)
- `encoding`: File encoding (default: "utf-8"). Specify the encoding of the text file (e.g., "shift_jis", "latin1")

**Single Range Response:**

```json
{
  "contents": "File contents",
  "line_start": 1,
  "line_end": 10,
  "hash": "sha256-hash-of-contents",
  "file_lines": 50,
  "file_size": 1024
}
```

**Multiple Ranges Response:**

```json
{
  "file1.txt": [
    {
      "content": "Lines 1-10 content",
      "start": 1,
      "end": 10,
      "hash": "sha256-hash-1",
      "total_lines": 50,
      "content_size": 512
    },
    {
      "content": "Lines 20-30 content",
      "start": 20,
      "end": 30,
      "hash": "sha256-hash-2",
      "total_lines": 50,
      "content_size": 512
    }
  ],
  "file2.txt": [
    {
      "content": "Lines 5-15 content",
      "start": 5,
      "end": 15,
      "hash": "sha256-hash-3",
      "total_lines": 30,
      "content_size": 256
    }
  ]
}
```

#### patch_text_file_contents

Apply patches to text files with robust error handling and conflict detection. Supports editing multiple files in a single operation.

**Request Format:**

```json
{
  "files": [
    {
      "file_path": "file1.txt",
      "hash": "sha256-hash-from-get-contents",
      "encoding": "utf-8",  // Optional, defaults to utf-8
      "patches": [
        {
          "start": 5,
          "end": 8,
          "range_hash": "sha256-hash-of-content-being-replaced",
          "contents": "New content for lines 5-8\n"
        },
        {
          "start": 15,
          "end": null,  // null means end of file
          "range_hash": "sha256-hash-of-content-being-replaced",
          "contents": "Content to append\n"
        }
      ]
    }
  ]
}
```

Important Notes:
1. Always get the current hash and range_hash using get_text_file_contents before editing
2. Patches are applied from bottom to top to handle line number shifts correctly
3. Patches must not overlap within the same file
4. Line numbers are 1-based
5. `end: null` can be used to append content to the end of file
6. File encoding must match the encoding used in get_text_file_contents

**Success Response:**

```json
{
  "file1.txt": {
    "result": "ok",
    "hash": "sha256-hash-of-new-contents"
  }
}
```

**Error Response with Hints:**

```json
{
  "file1.txt": {
    "result": "error",
    "reason": "Content hash mismatch",
    "suggestion": "get",  // Suggests using get_text_file_contents
    "hint": "Please run get_text_file_contents first to get current content and hashes"
  }
}
```

    "result": "error",
    "reason": "Content hash mismatch - file was modified",
    "hash": "current-hash",
    "content": "Current file content"

  }
}

```

### Common Usage Pattern

1. Get current content and hash:

```python
contents = await get_text_file_contents({
    "files": [
        {
            "file_path": "file.txt",
            "ranges": [{"start": 1, "end": null}]  # Read entire file
        }
    ]
})
```

2. Edit file content:

```python
result = await edit_text_file_contents({
    "files": [
        {
            "path": "file.txt",
            "hash": contents["file.txt"][0]["hash"],
            "encoding": "utf-8",  # Optional, defaults to "utf-8"
            "patches": [
                {
                    "line_start": 5,
                    "line_end": 8,
                    "contents": "New content\n"
                }
            ]
        }
    ]
})
```

3. Handle conflicts:

```python
if result["file.txt"]["result"] == "error":
    if "hash mismatch" in result["file.txt"]["reason"]:
        # File was modified by another process
        # Get new content and retry
        pass
```

### Error Handling

The server handles various error cases:
- File not found
- Permission errors
- Hash mismatches (concurrent edit detection)
- Invalid patch ranges
- Overlapping patches
- Encoding errors (when file cannot be decoded with specified encoding)
- Line number out of bounds

## Security Considerations

- File Path Validation: The server validates all file paths to prevent directory traversal attacks
- Access Control: Proper file system permissions should be set to restrict access to authorized directories
- Hash Validation: All file modifications are validated using SHA-256 hashes to prevent race conditions
- Input Sanitization: All user inputs are properly sanitized and validated
- Error Handling: Sensitive information is not exposed in error messages

## Troubleshooting

### Common Issues

1. Permission Denied
   - Check file and directory permissions
   - Ensure the server process has necessary read/write access

2. Hash Mismatch and Range Hash Errors
   - The file was modified by another process
   - Content being replaced has changed
   - Run get_text_file_contents to get fresh hashes

3. Encoding Issues
   - Verify file encoding matches the specified encoding
   - Use utf-8 for new files
   - Check for BOM markers in files

4. Connection Issues
   - Verify the server is running and accessible
   - Check network configuration and firewall settings

5. Performance Issues
   - Consider using smaller line ranges for large files
   - Monitor system resources (memory, disk space)
   - Use appropriate encoding for file type

## Development

### Setup

1. Clone the repository
2. Create and activate a Python virtual environment
3. Install development dependencies: `uv pip install -e ".[dev]"`
4. Run tests: `make all`

### Code Quality Tools

- Ruff for linting
- Black for code formatting
- isort for import sorting
- mypy for type checking
- pytest-cov for test coverage

### Testing

Tests are located in the `tests` directory and can be run with pytest:

```bash
# Run all tests
pytest

# Run tests with coverage report
pytest --cov=mcp_text_editor --cov-report=term-missing

# Run specific test file
pytest tests/test_text_editor.py -v
```

Current test coverage: 90%

### Project Structure

```
mcp-text-editor/
├── mcp_text_editor/
│   ├── __init__.py
│   ├── __main__.py      # Entry point
│   ├── models.py        # Data models
│   ├── server.py        # MCP Server implementation
│   ├── service.py       # Core service logic
│   └── text_editor.py   # Text editor functionality
├── tests/               # Test files
└── pyproject.toml       # Project configuration
```

## License

MIT

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and code quality checks
5. Submit a pull request

### Type Hints

This project uses Python type hints throughout the codebase. Please ensure any contributions maintain this.

### Error Handling

All error cases should be handled appropriately and return meaningful error messages. The server should never crash due to invalid input or file operations.

### Testing

New features should include appropriate tests. Try to maintain or improve the current test coverage.

### Code Style

All code should be formatted with Black and pass Ruff linting. Import sorting should be handled by isort.
