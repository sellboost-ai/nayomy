---
name: "vivekVells/mcp-pandoc"
description: "MCP server for seamless document format conversion using Pandoc, supporting Markdown, HTML, PDF, DOCX (.docx), csv and more."
description_tr: "Pandoc kullanarak belgeler arasında sorunsuz format dönüşümü sağlayan MCP server'ı. Markdown, HTML, PDF, DOCX, CSV ve daha birçok formatı destekler."
category: "Developer Tools"
repo: "vivekVells/mcp-pandoc"
stars: 541
url: "https://github.com/vivekVells/mcp-pandoc"
body_length: 14153
license: "MIT"
language: "Python"
homepage: "https://pypi.org/project/mcp-pandoc"
body_tr: |-
  [![Downloads](https://img.shields.io/pypi/dm/mcp-pandoc.svg)](https://pypi.python.org/pypi/mcp-pandoc)
  [![CI](https://github.com/vivekVells/mcp-pandoc/actions/workflows/ci.yml/badge.svg)](https://github.com/vivekVells/mcp-pandoc/actions/workflows/ci.yml)
  <br />

  ![image](https://github.com/user-attachments/assets/10f18317-58e7-430e-9aec-b706b60fe2c6)

  <!-- [![Downloads](https://static.pepy.tech/badge/mcp-pandoc/month)](https://pepy.tech/project/mcp-pandoc) -->
  <!-- ![PyPI - Downloads](https://img.shields.io/pypi/dm/mcp-pandoc?style=social) -->

  <!--
  [![Downloads](https://img.shields.io/pypi/dm/mcp-pandoc.svg)](https://pypi.python.org/pypi/mcp-pandoc)
  [![CI](https://github.com/vivekVells/mcp-pandoc/actions/workflows/ci.yml/badge.svg)](https://github.com/vivekVells/mcp-pandoc/actions/workflows/ci.yml)
  <a href="https://smithery.ai/server/mcp-pandoc"></a> <a href="https://glama.ai/mcp/servers/xyzzgaj9bk"></a> 
  -->
  [![MseeP.ai Security Assessment Badge](https://mseep.net/pr/vivekvells-mcp-pandoc-badge.png)](https://mseep.ai/app/vivekvells-mcp-pandoc)
  <a href="https://glama.ai/mcp/servers/xyzzgaj9bk">

  # mcp-pandoc: Bir Belge Dönüştürme MCP Sunucusu

  > Resmi olarak [Model Context Protocol sunucuları](https://github.com/modelcontextprotocol/servers/blob/main/README.md) açık kaynak projesine dahil edilmiştir. 🎉

  ## Genel Bakış

  [pandoc](https://pandoc.org/index.html) kullanarak belge formatı dönüştürme için bir Model Context Protocol sunucusu. Bu sunucu, biçimlendirme ve yapıyı koruyarak içeriği farklı belge formatları arasında dönüştürmek için araçlar sağlar.

  mcp-pandoc'un şu anda erken geliştirme aşamasında olduğunu lütfen unutmayınız. PDF desteği geliştirme aşamasındadır ve sunucuyu geliştirmeye devam ettikçe işlevsellik ve kullanılabilir araçlar değişebilir ve genişleyebilir.

  Kredi: Bu proje, belge dönüştürme için [Pandoc Python paketini](https://pypi.org/project/pandoc/) kullanmakta ve bu projenin temelini oluşturmaktadır.

  ## 📋 Hızlı Referans

  **mcp-pandoc'ta yeni misiniz?** **[📖 CHEATSHEET.md](CHEATSHEET.md)** dosyasını kontrol edin

  - ⚡ Tüm formatlar için kopyala-yapıştır örnekleri
  - 🔄 Çift yönlü dönüştürme matrisi
  - 🎯 Yaygın iş akışları ve ipuçları
  - 🌟 Referans belge stil rehberi

  _Hızlı aramalar ve hızlı başlama için mükemmel!_

  ## Demo

  [![mcp-pandoc - v1: Seamless Document Format Conversion for Claude using MCP server](https://img.youtube.com/vi/vN3VOb0rygM/maxresdefault.jpg)](https://youtu.be/vN3VOb0rygM)

  > 🎥 [YouTube'da İzleyin](https://youtu.be/vN3VOb0rygM)

  <details>
  <summary>Ekran Görüntüleri</summary>




  </details>

  Daha fazlası yakında gelecek...

  ## Araçlar

  1. `convert-contents`
     - İçeriği desteklenen formatlar arasında dönüştürür
     - Girdiler:
       - `contents` (string): Dönüştürülecek kaynak içerik (input_file sağlanmadıysa gerekli)
       - `input_file` (string): Giriş dosyasının tam yolu (contents sağlanmadıysa gerekli)
       - `input_format` (string): İçeriğin kaynak formatı (varsayılan olarak markdown)
       - `output_format` (string): Hedef format (varsayılan olarak markdown)
       - `output_file` (string): Çıktı dosyası için tam yol (pdf, docx, rst, latex, epub formatları için gerekli)
       - `reference_doc` (string): Stil için kullanılacak referans belgenin yolu (docx çıktı formatı için desteklenmiştir)
       - `defaults_file` (string): Dönüştürme seçeneklerini içeren Pandoc varsayılanları dosyasının (YAML) yolu
       - `filters` (array): Dönüştürme sırasında uygulanacak Pandoc filtre yollarının listesi
     - Desteklenen giriş/çıktı formatları:
       - markdown
       - html
       - pdf
       - docx
       - rst
       - latex
       - epub
       - txt
       - ipynb
       - odt
     - Not: Gelişmiş formatlar (pdf, docx, rst, latex, epub) için bir output_file yolu gereklidir

  ### 🔧 Gelişmiş Özellikler

  #### Varsayılanlar Dosyaları (YAML Yapılandırması)

  Tutarlı biçimlendirme ile yeniden kullanılabilir dönüştürme şablonları oluşturmak için varsayılanlar dosyalarını kullanın:

  ```yaml
  # academic-paper.yaml
  from: markdown
  to: pdf
  number-sections: true
  toc: true
  metadata:
    title: "Academic Paper"
    author: "Research Team"
  ```

  Örnek kullanım: `"Convert paper.md to PDF using defaults academic-paper.yaml and save as paper.pdf"`

  #### Pandoc Filtreleri

  Geliştirilmiş işleme için özel filtreler uygulayın:

  Örnek kullanım: `"Convert docs.md to HTML with filters ['/path/to/mermaid-filter.py'] and save as docs.html"`

  > 💡 **Kapsamlı örnekler ve iş akışları için**, bkz. **[CHEATSHEET.md](CHEATSHEET.md)**

  ## 📊 Desteklenen Formatlar ve Dönüştürmeler

  ### Çift Yönlü Dönüştürme Matrisi

  | Kaynaktan\Hedef | MD  | HTML | TXT | DOCX | PDF | RST | LaTeX | EPUB | IPYNB | ODT |
  | --------------- | --- | ---- | --- | ---- | --- | --- | ----- | ---- | ----- | --- |
  | **Markdown**    | ✅  | ✅   | ✅  | ✅   | ✅  | ✅  | ✅    | ✅   | ✅    | ✅  |
  | **HTML**        | ✅  | ✅   | ✅  | ✅   | ✅  | ✅  | ✅    | ✅   | ✅    | ✅  |
  | **TXT**         | ✅  | ✅   | ✅  | ✅   | ✅  | ✅  | ✅    | ✅   | ✅    | ✅  |
  | **DOCX**        | ✅  | ✅   | ✅  | ✅   | ✅  | ✅  | ✅    | ✅   | ✅    | ✅  |
  | **RST**         | ✅  | ✅   | ✅  | ✅   | ✅  | ✅  | ✅    | ✅   | ✅    | ✅  |
  | **LaTeX**       | ✅  | ✅   | ✅  | ✅   | ✅  | ✅  | ✅    | ✅   | ✅    | ✅  |
  | **EPUB**        | ✅  | ✅   | ✅  | ✅   | ✅  | ✅  | ✅    | ✅   | ✅    | ✅  |
  | **IPYNB**       | ✅  | ✅   | ✅  | ✅   | ✅  | ✅  | ✅    | ✅   | ✅    | ✅  |
  | **ODT**         | ✅  | ✅   | ✅  | ✅   | ✅  | ✅  | ✅    | ✅   | ✅    | ✅  |

  ### PDF Desteği Hakkında Not

  Bu araç dönüştürmeler için `pandoc` kullanır ve yukarıdaki formatlardan PDF dosyaları oluşturmaya izin verir. Ancak bir PDF'den diğer formatlara dönüştürme desteklenmiyor. Bu nedenle PDF, **yalnızca çıktı** formatı olarak düşünülmelidir.

  ### Format Kategorileri

  | Kategori      | Formatlar                  | Gereksinimler                    |
  | ------------- | -------------------------- | -------------------------------- |
  | **Temel**     | MD, HTML, TXT, IPYNB, ODT  | Hiçbiri                          |
  | **Gelişmiş**  | DOCX, PDF, RST, LaTeX, EPUB| `output_file` yolu belirtilmeli |
  | **Stillenmiş**| DOCX referans belgesi      | Özel şablon desteği ⭐           |

  ### Format'a Göre Gereksinimler

  - **PDF (.pdf)** - TeX Live kurulumu gerekir
  - **DOCX (.docx)** - referans belgeler aracılığıyla özel stil desteği
  - **Diğerleri** - ek gereksinim yoktur

  Not: Gelişmiş formatlar için:

  1. Dosya adı ve uzantısı içeren tam dosya yolları gereklidir
  2. **PDF dönüştürme TeX Live kurulumunu gerektirir** (bkz. Kritik Gereksinimler bölümü -> macOS için: `brew install texlive`)
  3. Çıktı yolu belirtilmediğinde:
     - Temel formatlar: Sohbette dönüştürülmüş içeriği görüntüler
     - Gelişmiş formatlar: Sistem geçici dizinine kaydedebilir (Unix sistemlerde /tmp/)

  ## Kullanım ve Yapılandırma

  **NOT: Aşağıdaki "Kritik Gereksinimler" altında belirtilen gerekli paketleri kurduğunuzdan emin olun.**

  Yayınlanmış olanı kullanmak için

  ```bash
  {
    "mcpServers": {
      "mcp-pandoc": {
        "command": "uvx",
        "args": ["mcp-pandoc"]
      }
    }
  }
  ```

  **💡 Hızlı Başlama**: Kopyala-yapıştır örnekleri ve yaygın iş akışları için **[CHEATSHEET.md](CHEATSHEET.md)** dosyasını görün.

  ### ⚠️ Önemli Notlar

  #### Kritik Gereksinimler

  1. **Pandoc Kurulumu**

  - **Gerekli**: `pandoc` yükleyin - çekirdek belge dönüştürme motorunun
  - Kurulum:

    ```bash
    # macOS
    brew install pandoc

    # Ubuntu/Debian
    sudo apt-get install pandoc

    # Windows
    # İndirme bağlantısı: https://pandoc.org/installing.html
    ```

  - **Doğrula**: `pandoc --version`

  2. **UV paket kurulumu**

  - **Gerekli**: `uv` paketini yükleyin (`uvx` komutu dahil)
  - Kurulum:

    ```bash
    # macOS
    brew install uv

    # Windows/Linux
    pip install uv
    ```

  - **Doğrula**: `uvx --version`

  3. **PDF Dönüştürme Ön Koşulları:** Yalnızca pdf dönüştürme ve kaydetme gerekiyorsa gerekli

  - PDF dönüştürmesini denemeden önce TeX Live yüklü olmalıdır
  - Kurulum komutları:

    ```bash
    # Ubuntu/Debian
    sudo apt-get install texlive-xetex

    # macOS
    brew install texlive

    # Windows
    # MiKTeX veya TeX Live yükleyin:
    # https://miktex.org/ veya https://tug.org/texlive/
    ```

  4. **Dosya Yolu Gereksinimleri**

  - Dosyaları kaydederken veya dönüştürürken, dosya adı ve uzantısı dahil tam dosya yolları belirtmelisiniz
  - Araç otomatik olarak dosya adları veya uzantıları oluşturmaz

  #### Örnekler

  ✅ Doğru Kullanım:

  ```bash
  # İçeriği PDF'ye dönüştürme
  "Convert this text to PDF and save as /path/to/document.pdf"

  # Dosya formatları arasında dönüştürme
  "Convert /path/to/input.md to PDF and save as /path/to/output.pdf"

  # Referans belge şablonu kullanarak DOCX'e dönüştürme
  "Convert input.md to DOCX using template.docx as reference and save as output.docx"

  # Adım adım referans belge iş akışı
  "First create a reference document: pandoc -o custom-reference.docx --print-default-data-file reference.docx" veya zaten bir belgeniz varsa onu kullanın
  "Then convert with custom styling: Convert this text to DOCX using /path/to/custom-reference.docx as reference and save as /path/to/styled-output.docx"
  ```

  ❌ Yanlış Kullanım:

  ```bash
  # Dosya adı ve uzantısı eksik
  "Save this as PDF in /documents/"

  # Tam yol eksik
  "Convert this to PDF"

  # Uzantı eksik
  "Save as /documents/story"
  ```

  #### Yaygın Sorunlar ve Çözümler

  1. **PDF Dönüştürme Başarısız**

     - Hata: "xelatex not found"
     - Çözüm: İlk olarak TeX Live yükleyin (yukarıdaki kurulum komutlarını görün)

  2. **Dosya Dönüştürme Başarısız**

     - Hata: "Invalid file path"
     - Çözüm: Dosya adı ve uzantısı dahil tam yol sağlayın
     - Örnek: `/path/to/document.pdf` yerine sadece `/path/to/`

  3. **Format Dönüştürme Başarısız**

     - Hata: "Unsupported format"
     - Çözüm: Yalnızca desteklenen formatları kullanın:
       - Temel: txt, html, markdown
       - Gelişmiş: pdf, docx, rst, latex, epub

  4. **Referans Belge Sorunları**
     - Hata: "Reference document not found"
     - Çözüm: Referans belge yolunun var olduğundan ve erişilebilir olduğundan emin olun
     - Not: Referans belgeler yalnızca DOCX çıktı formatı ile çalışır
     - Nasıl oluşturulur: `pandoc -o reference.docx --print-default-data-file reference.docx`

  ## Hızlı Başlama

  <!-- Uncomment after smithery fix
  ### Install

  #### Option 1: Installing manually via claude_desktop_config.json config file
  -->

  ### claude_desktop_config.json config dosyası aracılığıyla manuel olarak yükleme

  - MacOS'ta: `open ~/Library/Application\ Support/Claude/claude_desktop_config.json`
  - Windows'ta: `%APPDATA%/Claude/claude_desktop_config.json`

  a) Yalnızca yerel geliştirme ve bu depoya katkı için

  <details>
    <summary>Geliştirme/Yayınlanmamış Sunucular Yapılandırması</summary>

  ℹ️ <DIRECTORY> yerine yerel olarak klonlanmış proje yolunuzu yazın

  ```bash
  "mcpServers": {
    "mcp-pandoc": {
      "command": "uv",
      "args": [
        "--directory",
        "<DIRECTORY>/mcp-pandoc",
        "run",
        "mcp-pandoc"
      ]
    }
  }
  ```

  </details>

  b) Yayınlanmış Sunucular Yapılandırması - Tüketiciler bu yapılandırmayı kullanmalıdır

  ```bash
  "mcpServers": {
    "mcp-pandoc": {
      "command": "uvx",
      "args": [
        "mcp-pandoc"
      ]
    }
  }
  ```

  <!-- Uncomment after smithery cli fix
  #### Option 2: To install Published Servers Configuration automatically via Smithery

  Run the following bash command to install **published** [mcp-pandoc pypi](https://pypi.org/project/mcp-pandoc) for Claude Desktop automatically via [Smithery](https://smithery.ai/server/mcp-pandoc):

  ```bash
  npx -y @smithery/cli install mcp-pandoc --client claude
  ```
  -->

  - Herhangi bir sorunla karşılaşırsanız, yerine doğrudan yukarıdaki "Yayınlanmış Sunucular Yapılandırması"'nı kullanın.

  **Not**: Yerel olarak yapılandırılan mcp-pandoc'u kullanmak için yukarıdaki "Geliştirme/Yayınlanmamış Sunucular Yapılandırması" adımını izleyin.

  ## Geliştirme

  ### Test Etme

  Kapsamlı test paketini çalıştırmak ve tüm desteklenen çift yönlü dönüştürmeleri doğrulamak için aşağıdaki komutu kullanın:

  ```bash
  uv run pytest tests/test_conversions.py
  ```

  Bu, geriye dönük uyumluluğu sağlar ve aracın temel işlevselliğini doğrular.

  ### Oluşturma ve Yayımlama

  Paketi dağıtım için hazırlamak için:

  1. Bağımlılıkları senkronize edin ve kilit dosyasını güncelleyin:

  ```bash
  uv sync
  ```

  2. Paket dağıtımları oluşturun:

  ```bash
  uv build
  ```

  Bu, `dist/` dizininde kaynak ve wheel dağıtımları oluşturacak.

  3. PyPI'de yayınlayın:

  ```bash
  uv publish
  ```

  Not: PyPI kimlik bilgilerini ortam değişkenleri veya komut bayrakları aracılığıyla ayarlamanız gerekir:

  - Token: `--token` veya `UV_PUBLISH_TOKEN`
  - Veya kullanıcı adı/şifre: `--username`/`UV_PUBLISH_USERNAME` ve `--password`/`UV_PUBLISH_PASSWORD`

  ### Hata Ayıklama

  MCP sunucuları stdio üzerinden çalıştığından hata ayıklama zor olabilir. En iyi hata ayıklama
  deneyimi için [MCP Inspector](https://github.com/modelcontextprotocol/inspector) kullanmanızı şiddetle tavsiye ederiz.

  MCP Inspector'ı [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) ile şu komutla başlatabilirsiniz:

  ```bash
  npx @modelcontextprotocol/inspector uv --directory /Users/vivekvells/Desktop/code/ai/mcp-pandoc run mcp-pandoc
  ```

  Başlattığında, Inspector hata ayıklamaya başlamak için tarayıcıda erişebileceğiniz bir URL görüntüleyecek.

  ---

  ## Katkıda Bulunma

  mcp-pandoc'u geliştirmek için katkılarınızı bekliyoruz! İşte katılabileceğiniz yollar:

  1. **Sorunları Bildirin**: Bir hata buldunuz mu veya bir özellik isteğiniz mi var? [GitHub Issues](https://github.com/vivekVells/mcp-pandoc/issues) sayfamızda bir sorun açın.
  2. **Pull Request'leri Gönderin**: Kod tabanını iyileştirin veya pull request oluşturarak yeni özellikler ekleyin.

  ---
---

[![Downloads](https://img.shields.io/pypi/dm/mcp-pandoc.svg)](https://pypi.python.org/pypi/mcp-pandoc)
[![CI](https://github.com/vivekVells/mcp-pandoc/actions/workflows/ci.yml/badge.svg)](https://github.com/vivekVells/mcp-pandoc/actions/workflows/ci.yml)
<br />

![image](https://github.com/user-attachments/assets/10f18317-58e7-430e-9aec-b706b60fe2c6)

<!-- [![Downloads](https://static.pepy.tech/badge/mcp-pandoc/month)](https://pepy.tech/project/mcp-pandoc) -->
<!-- ![PyPI - Downloads](https://img.shields.io/pypi/dm/mcp-pandoc?style=social) -->

<!--
[![Downloads](https://img.shields.io/pypi/dm/mcp-pandoc.svg)](https://pypi.python.org/pypi/mcp-pandoc)
[![CI](https://github.com/vivekVells/mcp-pandoc/actions/workflows/ci.yml/badge.svg)](https://github.com/vivekVells/mcp-pandoc/actions/workflows/ci.yml)
<a href="https://smithery.ai/server/mcp-pandoc"></a> <a href="https://glama.ai/mcp/servers/xyzzgaj9bk"></a> 
-->
[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/vivekvells-mcp-pandoc-badge.png)](https://mseep.ai/app/vivekvells-mcp-pandoc)
<a href="https://glama.ai/mcp/servers/xyzzgaj9bk">

# mcp-pandoc: A Document Conversion MCP Server

> Officially included in the [Model Context Protocol servers](https://github.com/modelcontextprotocol/servers/blob/main/README.md) open-source project. 🎉

## Overview

A Model Context Protocol server for document format conversion using [pandoc](https://pandoc.org/index.html). This server provides tools to transform content between different document formats while preserving formatting and structure.

Please note that mcp-pandoc is currently in early development. PDF support is under development, and the functionality and available tools are subject to change and expansion as we continue to improve the server.

Credit: This project uses the [Pandoc Python package](https://pypi.org/project/pandoc/) for document conversion, forming the foundation for this project.

## 📋 Quick Reference

**New to mcp-pandoc?** Check out **[📖 CHEATSHEET.md](CHEATSHEET.md)** for

- ⚡ Copy-paste examples for all formats
- 🔄 Bidirectional conversion matrix
- 🎯 Common workflows and pro tips
- 🌟 Reference document styling guide

_Perfect for quick lookups and getting started fast!_

## Demo

[![mcp-pandoc - v1: Seamless Document Format Conversion for Claude using MCP server](https://img.youtube.com/vi/vN3VOb0rygM/maxresdefault.jpg)](https://youtu.be/vN3VOb0rygM)

> 🎥 [Watch on YouTube](https://youtu.be/vN3VOb0rygM)

<details>
<summary>Screenshots</summary>






</details>

More to come...

## Tools

1. `convert-contents`
   - Transforms content between supported formats
   - Inputs:
     - `contents` (string): Source content to convert (required if input_file not provided)
     - `input_file` (string): Complete path to input file (required if contents not provided)
     - `input_format` (string): Source format of the content (defaults to markdown)
     - `output_format` (string): Target format (defaults to markdown)
     - `output_file` (string): Complete path for output file (required for pdf, docx, rst, latex, epub formats)
     - `reference_doc` (string): Path to a reference document to use for styling (supported for docx output format)
     - `defaults_file` (string): Path to a Pandoc defaults file (YAML) containing conversion options
     - `filters` (array): List of Pandoc filter paths to apply during conversion
   - Supported input/output formats:
     - markdown
     - html
     - pdf
     - docx
     - rst
     - latex
     - epub
     - txt
     - ipynb
     - odt
   - Note: For advanced formats (pdf, docx, rst, latex, epub), an output_file path is required

### 🔧 Advanced Features

#### Defaults Files (YAML Configuration)

Use defaults files to create reusable conversion templates with consistent formatting:

```yaml
# academic-paper.yaml
from: markdown
to: pdf
number-sections: true
toc: true
metadata:
  title: "Academic Paper"
  author: "Research Team"
```

Example usage: `"Convert paper.md to PDF using defaults academic-paper.yaml and save as paper.pdf"`

#### Pandoc Filters

Apply custom filters for enhanced processing:

Example usage: `"Convert docs.md to HTML with filters ['/path/to/mermaid-filter.py'] and save as docs.html"`

> 💡 **For comprehensive examples and workflows**, see **[CHEATSHEET.md](CHEATSHEET.md)**

## 📊 Supported Formats & Conversions

### Bidirectional Conversion Matrix

| From\To      | MD  | HTML | TXT | DOCX | PDF | RST | LaTeX | EPUB | IPYNB | ODT |
| ------------ | --- | ---- | --- | ---- | --- | --- | ----- | ---- | ----- | --- |
| **Markdown** | ✅  | ✅   | ✅  | ✅   | ✅  | ✅  | ✅    | ✅   | ✅    | ✅  |
| **HTML**     | ✅  | ✅   | ✅  | ✅   | ✅  | ✅  | ✅    | ✅   | ✅    | ✅  |
| **TXT**      | ✅  | ✅   | ✅  | ✅   | ✅  | ✅  | ✅    | ✅   | ✅    | ✅  |
| **DOCX**     | ✅  | ✅   | ✅  | ✅   | ✅  | ✅  | ✅    | ✅   | ✅    | ✅  |
| **RST**      | ✅  | ✅   | ✅  | ✅   | ✅  | ✅  | ✅    | ✅   | ✅    | ✅  |
| **LaTeX**    | ✅  | ✅   | ✅  | ✅   | ✅  | ✅  | ✅    | ✅   | ✅    | ✅  |
| **EPUB**     | ✅  | ✅   | ✅  | ✅   | ✅  | ✅  | ✅    | ✅   | ✅    | ✅  |
| **IPYNB**    | ✅  | ✅   | ✅  | ✅   | ✅  | ✅  | ✅    | ✅   | ✅    | ✅  |
| **ODT**      | ✅  | ✅   | ✅  | ✅   | ✅  | ✅  | ✅    | ✅   | ✅    | ✅  |

### A Note on PDF Support

This tool uses `pandoc` for conversions, which allows for generating PDF files from the formats listed above. However, converting _from_ a PDF to other formats is not supported. Therefore, PDF should be considered an **output-only** format.

### Format Categories

| Category     | Formats                     | Requirements                    |
| ------------ | --------------------------- | ------------------------------- |
| **Basic**    | MD, HTML, TXT, IPYNB, ODT   | None                            |
| **Advanced** | DOCX, PDF, RST, LaTeX, EPUB | Must specify `output_file` path |
| **Styled**   | DOCX with reference doc     | Custom template support ⭐      |

### Requirements by Format

- **PDF (.pdf)** - requires TeX Live installation
- **DOCX (.docx)** - supports custom styling via reference documents
- **All others** - no additional requirements

Note: For advanced formats:

1. Complete file paths with filename and extension are required
2. **PDF conversion requires TeX Live installation** (see Critical Requirements section -> For macOS: `brew install texlive`)
3. When no output path is specified:
   - Basic formats: Displays converted content in the chat
   - Advanced formats: May save in system temp directory (/tmp/ on Unix systems)

## Usage & configuration

**NOTE: Ensure to complete installing required packages mentioned below under "Critical Requirements".**

To use the published one

```bash
{
  "mcpServers": {
    "mcp-pandoc": {
      "command": "uvx",
      "args": ["mcp-pandoc"]
    }
  }
}
```

**💡 Quick Start**: See **[CHEATSHEET.md](CHEATSHEET.md)** for copy-paste examples and common workflows.

### ⚠️ Important Notes

#### Critical Requirements

1. **Pandoc Installation**

- **Required**: Install `pandoc` - the core document conversion engine
- Installation:

  ```bash
  # macOS
  brew install pandoc

  # Ubuntu/Debian
  sudo apt-get install pandoc

  # Windows
  # Download installer from: https://pandoc.org/installing.html
  ```

- **Verify**: `pandoc --version`

2. **UV package installation**

- **Required**: Install `uv` package (includes `uvx` command)
- Installation:

  ```bash
  # macOS
  brew install uv

  # Windows/Linux
  pip install uv
  ```

- **Verify**: `uvx --version`

3. **PDF Conversion Prerequisites:** Only needed if you need to convert & save pdf

- TeX Live must be installed before attempting PDF conversion
- Installation commands:

  ```bash
  # Ubuntu/Debian
  sudo apt-get install texlive-xetex

  # macOS
  brew install texlive

  # Windows
  # Install MiKTeX or TeX Live from:
  # https://miktex.org/ or https://tug.org/texlive/
  ```

4. **File Path Requirements**

- When saving or converting files, you MUST provide complete file paths including filename and extension
- The tool does not automatically generate filenames or extensions

#### Examples

✅ Correct Usage:

```bash
# Converting content to PDF
"Convert this text to PDF and save as /path/to/document.pdf"

# Converting between file formats
"Convert /path/to/input.md to PDF and save as /path/to/output.pdf"

# Converting to DOCX with a reference document template
"Convert input.md to DOCX using template.docx as reference and save as output.docx"

# Step-by-step reference document workflow
"First create a reference document: pandoc -o custom-reference.docx --print-default-data-file reference.docx" or if you already have one, use that
"Then convert with custom styling: Convert this text to DOCX using /path/to/custom-reference.docx as reference and save as /path/to/styled-output.docx"
```

❌ Incorrect Usage:

```bash
# Missing filename and extension
"Save this as PDF in /documents/"

# Missing complete path
"Convert this to PDF"

# Missing extension
"Save as /documents/story"
```

#### Common Issues and Solutions

1. **PDF Conversion Fails**

   - Error: "xelatex not found"
   - Solution: Install TeX Live first (see installation commands above)

2. **File Conversion Fails**

   - Error: "Invalid file path"
   - Solution: Provide complete path including filename and extension
   - Example: `/path/to/document.pdf` instead of just `/path/to/`

3. **Format Conversion Fails**

   - Error: "Unsupported format"
   - Solution: Use only supported formats:
     - Basic: txt, html, markdown
     - Advanced: pdf, docx, rst, latex, epub

4. **Reference Document Issues**
   - Error: "Reference document not found"
   - Solution: Ensure the reference document path exists and is accessible
   - Note: Reference documents only work with DOCX output format
   - How to create: `pandoc -o reference.docx --print-default-data-file reference.docx`

## Quickstart

<!-- Uncomment after smithery fix
### Install

#### Option 1: Installing manually via claude_desktop_config.json config file
-->

### Installing manually via claude_desktop_config.json config file

- On MacOS: `open ~/Library/Application\ Support/Claude/claude_desktop_config.json`
- On Windows: `%APPDATA%/Claude/claude_desktop_config.json`

a) Only for local development & contribution to this repo

<details>
  <summary>Development/Unpublished Servers Configuration</summary>

ℹ️ Replace <DIRECTORY> with your locally cloned project path

```bash
"mcpServers": {
  "mcp-pandoc": {
    "command": "uv",
    "args": [
      "--directory",
      "<DIRECTORY>/mcp-pandoc",
      "run",
      "mcp-pandoc"
    ]
  }
}
```

</details>

b) Published Servers Configuration - Consumers should use this config

```bash
"mcpServers": {
  "mcp-pandoc": {
    "command": "uvx",
    "args": [
      "mcp-pandoc"
    ]
  }
}
```

<!-- Uncomment after smithery cli fix
#### Option 2: To install Published Servers Configuration automatically via Smithery

Run the following bash command to install **published** [mcp-pandoc pypi](https://pypi.org/project/mcp-pandoc) for Claude Desktop automatically via [Smithery](https://smithery.ai/server/mcp-pandoc):

```bash
npx -y @smithery/cli install mcp-pandoc --client claude
```
-->

- If you face any issue, use the "Published Servers Configuration" above directly instead of this cli.

**Note**: To use locally configured mcp-pandoc, follow "Development/Unpublished Servers Configuration" step above.

## Development

### Testing

To run the comprehensive test suite and validate all supported bidirectional conversions, use the following command:

```bash
uv run pytest tests/test_conversions.py
```

This ensures backward compatibility and verifies the tool's core functionality.

### Building and Publishing

To prepare the package for distribution:

1. Sync dependencies and update lockfile:

```bash
uv sync
```

2. Build package distributions:

```bash
uv build
```

This will create source and wheel distributions in the `dist/` directory.

3. Publish to PyPI:

```bash
uv publish
```

Note: You'll need to set PyPI credentials via environment variables or command flags:

- Token: `--token` or `UV_PUBLISH_TOKEN`
- Or username/password: `--username`/`UV_PUBLISH_USERNAME` and `--password`/`UV_PUBLISH_PASSWORD`

### Debugging

Since MCP servers run over stdio, debugging can be challenging. For the best debugging
experience, we strongly recommend using the [MCP Inspector](https://github.com/modelcontextprotocol/inspector).

You can launch the MCP Inspector via [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) with this command:

```bash
npx @modelcontextprotocol/inspector uv --directory /Users/vivekvells/Desktop/code/ai/mcp-pandoc run mcp-pandoc
```

Upon launching, the Inspector will display a URL that you can access in your browser to begin debugging.

---

## Contributing

We welcome contributions to enhance mcp-pandoc! Here's how you can get involved:

1. **Report Issues**: Found a bug or have a feature request? Open an issue on our [GitHub Issues](https://github.com/vivekVells/mcp-pandoc/issues) page.
2. **Submit Pull Requests**: Improve the codebase or add features by creating a pull request.

---
