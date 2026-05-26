---
name: "zcaceres/markdownify-mcp"
description: "An MCP server to convert almost any file or web content into Markdown"
description_tr: "MCP sunucusu ile neredeyse her dosya ve web içeriğini Markdown formatına dönüştürün."
category: "Data Science Tools"
repo: "zcaceres/markdownify-mcp"
stars: 2697
url: "https://github.com/zcaceres/markdownify-mcp"
body_length: 4397
license: "MIT"
language: "TypeScript"
body_tr: |-
  # Markdownify MCP Server

  ![markdownify mcp logo](https://raw.githubusercontent.com/zcaceres/markdownify-mcp/HEAD/logo.jpg)

  Markdownify, çeşitli dosya türlerini ve web içeriğini Markdown formatına dönüştüren bir Model Context Protocol (MCP) sunucusudur. PDF'leri, görselleri, ses dosyalarını, web sayfalarını ve daha fazlasını kolayca okunabilir ve paylaşılabilir Markdown metne dönüştürmek için bir araç seti sağlar.

  <a href="https://glama.ai/mcp/servers/bn5q4b0ett"></a>

  ## Özellikler

  - Birden fazla dosya türünü Markdown'a dönüştürün:
    - PDF
    - Görseller
    - Ses (transkripsiyon ile)
    - DOCX
    - XLSX
    - PPTX
  - Web içeriğini Markdown'a dönüştürün:
    - YouTube video transkriptleri
    - Bing arama sonuçları
    - Genel web sayfaları
  - Mevcut Markdown dosyalarını alın

  ## Başlangıç

  1. Bu depoyu klonlayın
  2. Bağımlılıkları kurun:
     ```
     bun install
     ```

     `preinstall` adımı `.venv` konumunda bir Python sanal ortamı oluşturur ve `markitdown[all]` yükler.

  3. Projeyi derleyin:
     ```
     bun run build
     ```
  4. Sunucuyu başlatın:
     ```
     bun start
     ```

  ## Geliştirme

  - TypeScript derleyicisini izleme modunda başlatmak için `bun run dev` kullanın
  - Sunucu davranışını özelleştirmek için `src/server.ts` dosyasını değiştirin
  - `src/tools.ts` dosyasında araçları ekleyin veya değiştirin

  ## Desktop Uygulaması ile Kullanım

  Bu sunucuyu bir desktop uygulaması ile entegre etmek için, uygulamanızın sunucu yapılandırmasına aşağıdakini ekleyin:

  ```js
  {
    "mcpServers": {
      "markdownify": {
        "command": "node",
        "args": [
          "{ABSOLUTE PATH TO FILE HERE}/dist/index.js"
        ]
      }
    }
  }
  ```

  ### Ortam değişkenleri

  Tüm yollar makul varsayılanlara ayarlanmıştır; varsayılanlar kurulum düzeninize uygun değilse yalnızca geçersiz kılın.

  | Değişken | Varsayılan | Amaç |
  |---|---|---|
  | `MARKITDOWN_PATH` | `<project>/.venv/bin/markitdown`, ardından `PATH` üzerinde `markitdown` | `markitdown` çalıştırılabiliri için mutlak yol. Bundled venv yerine markitdown'ı sistem genelinde kurduğunuzda bunu ayarlayın (örneğin `pipx install "markitdown[pdf]"`). |
  | `REPOMIX_PATH` | `<project>/node_modules/.bin/repomix`, ardından `PATH` üzerinde `repomix` | `git-repo-to-markdown` tarafından kullanılan `repomix` çalıştırılabiliri için mutlak yol. |
  | `MD_ALLOWED_PATHS` | ayarlanmamış (sınırsız) | Sunucunun okumaya izin verilen dizinlerin yol-sınırlayıcı ayrılmış listesi (POSIX'te `:`, Windows'ta `;`). Ayarlandığında, tüm dosya-giriş araçları (`pdf-to-markdown`, `get-markdown-file`, vb.) bu dizinlerin dışındaki yolları reddeder. |
  | `MD_SHARE_DIR` | ayarlanmamış | `MD_ALLOWED_PATHS` için kullanımdan kaldırılan takma ad (tek dizin). Geriye dönük uyumluluk için hala onurlandırılır. |

  ## Docker ile Kullanım

  Derleyin ve çalıştırın:
  ```sh
  docker build -t markdownify-mcp .
  docker run --rm -i \
    -v "$HOME/Documents:/data:ro" \
    -e MD_ALLOWED_PATHS=/data \
    markdownify-mcp
  ```

  Docker MCP kataloğu (`mcp/markdownify`) için notlar:
  - Sunucunun okumasını istediğiniz ana bilgisayar dizinlerini konteynere takın, ardından **konteyner** yollarını araçlara geçirin (örneğin `/data/foo.pdf`, `/Users/you/Documents/foo.pdf` değil).
  - `MD_ALLOWED_PATHS` öğesini takılı dizinlerin iki nokta üstü üste ayrılmış listesine ayarlayın, böylece sunucu bind mount ile eşleşen bir okuma sınırı uygular.
  - Yayınlanan Docker imajı yalnızca `markitdown[pdf]` yükler — ses transkripsiyon ve görsel OCR (`audio-to-markdown`, `image-to-markdown`) `[all]` ekstralarını gerektirir ve slim imajda başarısız olur. Tam özellik seti için yerel yüklemeyi (`bun install`) kullanın.

  ## Kullanılabilir Araçlar

  - `youtube-to-markdown`: YouTube videolarını Markdown'a dönüştürün
  - `pdf-to-markdown`: PDF dosyalarını Markdown'a dönüştürün
  - `bing-search-to-markdown`: Bing arama sonuçlarını Markdown'a dönüştürün
  - `webpage-to-markdown`: Web sayfalarını Markdown'a dönüştürün
  - `image-to-markdown`: Görselleri Markdown'a meta verilerle dönüştürün
  - `audio-to-markdown`: Ses dosyalarını Markdown'a transkripsiyon ile dönüştürün
  - `docx-to-markdown`: DOCX dosyalarını Markdown'a dönüştürün
  - `xlsx-to-markdown`: XLSX dosyalarını Markdown'a dönüştürün
  - `pptx-to-markdown`: PPTX dosyalarını Markdown'a dönüştürün
  - `get-markdown-file`: Mevcut bir Markdown dosyasını alın. Dosya uzantısı şu şekilde bitmelidir: *.md, *.markdown.

    İSTEĞE BAĞLI: Her dosya-giriş aracını bir dizin listesine sınırlamak için `MD_ALLOWED_PATHS` öğesini ayarlayın, örneğin `MD_ALLOWED_PATHS=/data/in:/data/out bun start`.

  ## Katkıda Bulunma

  Katkılar memnuniyetle karşılanır! Lütfen bir Pull Request göndermeyi çekinmeyin.

  ## Lisans

  Bu proje MIT Lisansı altında lisanslanmıştır - ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.
---

# Markdownify MCP Server

![markdownify mcp logo](https://raw.githubusercontent.com/zcaceres/markdownify-mcp/HEAD/logo.jpg)

Markdownify is a Model Context Protocol (MCP) server that converts various file types and web content to Markdown format. It provides a set of tools to transform PDFs, images, audio files, web pages, and more into easily readable and shareable Markdown text.

<a href="https://glama.ai/mcp/servers/bn5q4b0ett"></a>

## Features

- Convert multiple file types to Markdown:
  - PDF
  - Images
  - Audio (with transcription)
  - DOCX
  - XLSX
  - PPTX
- Convert web content to Markdown:
  - YouTube video transcripts
  - Bing search results
  - General web pages
- Retrieve existing Markdown files

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   bun install
   ```

   The `preinstall` step creates a Python virtual environment at `.venv` and installs `markitdown[all]`.

3. Build the project:
   ```
   bun run build
   ```
4. Start the server:
   ```
   bun start
   ```

## Development

- Use `bun run dev` to start the TypeScript compiler in watch mode
- Modify `src/server.ts` to customize server behavior
- Add or modify tools in `src/tools.ts`

## Usage with Desktop App

To integrate this server with a desktop app, add the following to your app's server configuration:

```js
{
  "mcpServers": {
    "markdownify": {
      "command": "node",
      "args": [
        "{ABSOLUTE PATH TO FILE HERE}/dist/index.js"
      ]
    }
  }
}
```

### Environment variables

All paths default to sensible values; override only when the defaults don't fit your install layout.

| Variable | Default | Purpose |
|---|---|---|
| `MARKITDOWN_PATH` | `<project>/.venv/bin/markitdown`, then `markitdown` on `PATH` | Absolute path to the `markitdown` executable. Set this when you've installed markitdown system-wide (e.g. `pipx install "markitdown[pdf]"`) instead of using the bundled venv. |
| `REPOMIX_PATH` | `<project>/node_modules/.bin/repomix`, then `repomix` on `PATH` | Absolute path to the `repomix` executable used by `git-repo-to-markdown`. |
| `MD_ALLOWED_PATHS` | unset (unrestricted) | Path-delimiter-separated list (`:` on POSIX, `;` on Windows) of directories the server is allowed to read. When set, all file-input tools (`pdf-to-markdown`, `get-markdown-file`, etc.) reject paths outside these directories. |
| `MD_SHARE_DIR` | unset | Deprecated alias for `MD_ALLOWED_PATHS` (single directory). Still honored for backward compatibility. |

## Usage with Docker

Build and run:
```sh
docker build -t markdownify-mcp .
docker run --rm -i \
  -v "$HOME/Documents:/data:ro" \
  -e MD_ALLOWED_PATHS=/data \
  markdownify-mcp
```

Notes for the Docker MCP catalog (`mcp/markdownify`):
- Mount any host directories you want the server to read into the container, then pass the **container** paths to the tools (e.g. `/data/foo.pdf`, not `/Users/you/Documents/foo.pdf`).
- Set `MD_ALLOWED_PATHS` to the colon-separated list of mounted directories so the server enforces a read boundary that matches the bind mount.
- The published Docker image installs `markitdown[pdf]` only — audio transcription and image OCR (`audio-to-markdown`, `image-to-markdown`) require the `[all]` extras and will fail in the slim image. Use the local install (`bun install`) for the full feature set.

## Available Tools

- `youtube-to-markdown`: Convert YouTube videos to Markdown
- `pdf-to-markdown`: Convert PDF files to Markdown
- `bing-search-to-markdown`: Convert Bing search results to Markdown
- `webpage-to-markdown`: Convert web pages to Markdown
- `image-to-markdown`: Convert images to Markdown with metadata
- `audio-to-markdown`: Convert audio files to Markdown with transcription
- `docx-to-markdown`: Convert DOCX files to Markdown
- `xlsx-to-markdown`: Convert XLSX files to Markdown
- `pptx-to-markdown`: Convert PPTX files to Markdown
- `get-markdown-file`: Retrieve an existing Markdown file. File extension must end with: *.md, *.markdown.

  OPTIONAL: set `MD_ALLOWED_PATHS` to restrict every file-input tool to a list of directories, e.g. `MD_ALLOWED_PATHS=/data/in:/data/out bun start`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
