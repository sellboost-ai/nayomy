---
name: "lfnovo/content-core"
description: "Extract content from URLs, documents, videos, and audio files using intelligent auto-engine selection. Supports web pages, PDFs, Word docs, YouTube transcripts, and more with structured JSON responses."
description_tr: "URL'ler, belgeler, videolar ve ses dosyalarından içeriği akıllı motor seçimi ile çıkarın. Web sayfaları, PDF'ler, Word dokümanları, YouTube yazıları ve daha fazlasını destekler; yapılandırılmış JSON yanıtları verir."
category: "Search & Data Extraction"
repo: "lfnovo/content-core"
stars: 151
url: "https://github.com/lfnovo/content-core"
body_length: 8743
license: "MIT"
language: "Python"
body_tr: |-
  # Content Core

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![PyPI version](https://badge.fury.io/py/content-core.svg)](https://badge.fury.io/py/content-core)
  [![Downloads](https://pepy.tech/badge/content-core)](https://pepy.tech/project/content-core)
  [![Downloads](https://pepy.tech/badge/content-core/month)](https://pepy.tech/project/content-core)
  [![GitHub stars](https://img.shields.io/github/stars/lfnovo/content-core?style=social)](https://github.com/lfnovo/content-core)
  [![GitHub forks](https://img.shields.io/github/forks/lfnovo/content-core?style=social)](https://github.com/lfnovo/content-core)
  [![GitHub issues](https://img.shields.io/github/issues/lfnovo/content-core)](https://github.com/lfnovo/content-core/issues)
  [![Ruff](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/astral-sh/ruff/main/assets/badge/v2.json)](https://github.com/astral-sh/ruff)

  URL'ler, dosyalar ve metinden içeriği unified async Python API, CLI veya MCP sunucusu aracılığıyla çıkarın, işleyin ve özetleyin.

  ## Desteklenen Biçimler

  | Kategori | Biçimler |
  |----------|---------|
  | Web | URL'ler, HTML sayfaları, YouTube videoları, Reddit yazıları |
  | Belgeler | PDF, DOCX, PPTX, XLSX, EPUB, Markdown, düz metin |
  | Medya | MP3, WAV, M4A, FLAC, OGG (ses); MP4, AVI, MOV, MKV (video) |

  ## Hızlı Başlangıç

  ```bash
  pip install content-core
  ```

  ```python
  import content_core

  result = await content_core.extract_content(url="https://example.com")
  print(result.content)
  ```

  Veya kurulum olmadan:

  ```bash
  uvx content-core extract "https://example.com"
  ```

  ## CLI Kullanımı

  Content Core, çıkarma, özetleme ve MCP sunucusu için alt komutlarla birleştirilmiş bir `content-core` komutu sağlar.

  ### Çıkart

  ```bash
  # Bir URL'den
  content-core extract "https://example.com"

  # Bir dosyadan
  content-core extract document.pdf

  # JSON çıktısı ile
  content-core extract document.pdf --format json

  # Belirli bir engine ile
  content-core extract "https://example.com" --engine firecrawl

  # stdin'den
  echo "some text" | content-core extract
  ```

  ### Özetle

  ```bash
  # Metni özetle
  content-core summarize "Long article text here..."

  # Bağlam ile
  content-core summarize "Long text" --context "bullet points"

  # stdin'den
  cat article.txt | content-core summarize --context "explain to a child"
  ```

  ### MCP Sunucusu

  ```bash
  content-core mcp
  ```

  ### Yapılandırma

  ```bash
  # Kalıcı yapılandırma ayarla
  content-core config set llm_provider anthropic
  content-core config set llm_model claude-sonnet-4-20250514

  # Mevcut yapılandırmayı listele
  content-core config list

  # Bir yapılandırma değerini sil
  content-core config delete llm_provider
  ```

  Yapılandırma `~/.content-core/config.toml` dosyasında saklanır. Öncelik: komut bayrakları > ortam değişkenleri > yapılandırma dosyası > varsayılanlar.

  ### uvx ile Kurulum Olmadan

  Tüm komutlar `uvx` kullanılarak kurulum olmadan çalışır:

  ```bash
  uvx content-core extract "https://example.com"
  uvx content-core summarize "text" --context "one sentence"
  uvx content-core mcp
  ```

  ## Python API

  ### Çıkarma

  ```python
  import content_core

  # Bir URL'den
  result = await content_core.extract_content(url="https://example.com")

  # Bir dosyadan
  result = await content_core.extract_content(file_path="document.pdf")

  # Metinden
  result = await content_core.extract_content(content="some text")

  # Engine geçersiz kılması ile
  from content_core import ContentCoreConfig
  config = ContentCoreConfig(url_engine="firecrawl")
  result = await content_core.extract_content(url="https://example.com", config=config)
  ```

  ### Özetleme

  ```python
  import content_core

  summary = await content_core.summarize("long article text", context="bullet points")
  ```

  ### Yapılandırma

  ```python
  from content_core import ContentCoreConfig

  config = ContentCoreConfig(
      url_engine="firecrawl",
      document_engine="docling",
      audio_concurrency=5,
  )
  result = await content_core.extract_content(url="https://example.com", config=config)
  ```

  ## MCP Entegrasyonu

  Content Core, Claude Desktop ve diğer MCP uyumlu uygulamalarla kullanılmak üzere bir Model Context Protocol (MCP) sunucusu içerir.

  <a href="https://glama.ai/mcp/servers/@lfnovo/content-core">
    
  </a>

  `claude_desktop_config.json` dosyanıza ekleyin:

  ```json
  {
    "mcpServers": {
      "content-core": {
        "command": "uvx",
        "args": ["content-core", "mcp"],
        "env": {
          "OPENAI_API_KEY": "sk-..."
        }
      }
    }
  }
  ```

  MCP sunucusu iki tool'u açığa çıkarır: `extract_content` ve `summarize_content`. Her ikisi de düz metin döndürür.

  Ayrıntılı kurulum için [MCP belgelerine](docs/mcp.md) bakın.

  ## Claude Code Skill

  Content Core, yapay zeka aracılarına dış kaynaklardan içeriği çıkarmak için nasıl kullanacaklarını öğreten bir [`SKILL.md`](SKILL.md) dosyası içerir. Bunu Claude Code projenizde kullanılabilir hale getirmek için, beceri dizininize kopyalayın:

  ```bash
  # Skill'i indir
  curl -o .claude/skills/content-core/SKILL.md --create-dirs \
    https://raw.githubusercontent.com/lfnovo/content-core/main/SKILL.md
  ```

  Yüklendikten sonra Claude Code, URL'ler, belgeler ve medya dosyalarından içeriği çıkarmak için content-core'u kullanabilir — CLI (`uvx content-core`) veya yapılandırılmışsa MCP aracılığıyla.

  ## AI Sağlayıcıları

  Content Core, birden fazla LLM ve STT sağlayıcısını desteklemek için [Esperanto](https://github.com/lfnovo/esperanto)'yu kullanır. Sağlayıcıyı yapılandırmayı değiştirerek geçişin — kod değişiklikleri gerekli değil:

  ```bash
  # Özetleme için Anthropic'i kullan
  content-core config set llm_provider anthropic
  content-core config set llm_model claude-sonnet-4-20250514

  # Transkripsiyon için Groq'u kullan
  content-core config set stt_provider groq
  content-core config set stt_model whisper-large-v3
  ```

  Desteklenen sağlayıcılar OpenAI, Anthropic, Google, Groq, DeepSeek, Ollama ve daha fazlasını içerir. Tam liste için [Esperanto belgelerine](https://github.com/lfnovo/esperanto) bakın.

  ## Yapılandırma

  Content Core, pydantic-settings tarafından desteklenen `ContentCoreConfig` kullanır. Ayarlar öncelik sırasına göre çözümlenir: constructor argümanları > ortam değişkenleri (`CCORE_*`) > yapılandırma dosyası (`~/.content-core/config.toml`) > varsayılanlar.

  ### Ortam Değişkenleri

  | Değişken | Açıklama | Varsayılan |
  |----------|----------|-----------|
  | `CCORE_URL_ENGINE` | URL çıkarma engine'i (`auto`, `simple`, `firecrawl`, `jina`, `crawl4ai`) | `auto` |
  | `CCORE_DOCUMENT_ENGINE` | Belge çıkarma engine'i (`auto`, `simple`, `docling`) | `auto` |
  | `CCORE_AUDIO_CONCURRENCY` | Eşzamanlı ses transkripsiyonları (1-10) | `3` |
  | `CRAWL4AI_API_URL` | Crawl4AI Docker API URL'si (yerel tarayıcı modu için atlayın) | - |
  | `FIRECRAWL_API_URL` | Kendi kendine barındırılan örnekler için özel Firecrawl API URL'si | - |
  | `CCORE_FIRECRAWL_PROXY` | Firecrawl proxy modu (`auto`, `basic`, `stealth`) | `auto` |
  | `CCORE_FIRECRAWL_WAIT_FOR` | Çıkarmadan önce bekleme süresi ms cinsinden | `3000` |
  | `CCORE_LLM_PROVIDER` | Özetleme için LLM sağlayıcısı | - |
  | `CCORE_LLM_MODEL` | Özetleme için LLM modeli | - |
  | `CCORE_STT_PROVIDER` | Konuşmadan metne dönüştürme sağlayıcısı | - |
  | `CCORE_STT_MODEL` | Konuşmadan metne dönüştürme modeli | - |
  | `CCORE_STT_TIMEOUT` | Konuşmadan metne dönüştürme zaman aşımı saniye cinsinden | - |
  | `CCORE_YOUTUBE_LANGUAGES` | Tercih edilen YouTube transkript dilleri | - |

  Harici hizmetler için API anahtarları, standart ortam değişkenleri aracılığıyla ayarlanır (örneğin, `OPENAI_API_KEY`, `FIRECRAWL_API_KEY`, `JINA_API_KEY`).

  ### Proxy Yapılandırması

  Content Core, standart `HTTP_PROXY` / `HTTPS_PROXY` / `NO_PROXY` ortam değişkenlerini otomatik olarak okur. Ek yapılandırma gerekmez.

  ## İsteğe Bağlı Bağımlılıklar

  ```bash
  # Gelişmiş belge ayrıştırma için Docling (PDF, DOCX, PPTX, XLSX)
  pip install content-core[docling]

  # Yerel tarayıcı tabanlı URL çıkarma için Crawl4AI
  pip install content-core[crawl4ai]
  python -m playwright install --with-deps

  # LangChain tool sarmalayıcıları
  pip install content-core[langchain]

  # Tüm isteğe bağlı özellikler
  pip install content-core[docling,crawl4ai,langchain]
  ```

  ### LangChain ile Kullanma

  `langchain` extra'sı ile yüklendiğinde, Content Core LangChain uyumlu tool sarmalayıcılarını sağlar:

  ```python
  from content_core.tools import extract_content_tool, summarize_content_tool

  tools = [extract_content_tool, summarize_content_tool]
  ```

  ## Belgeler

  - [Kullanım Kılavuzu](docs/usage.md) -- Python API ayrıntıları, yapılandırma ve örnekler
  - [İşlemciler](docs/processors.md) -- Her biçim için içeriği çıkarma nasıl çalışır
  - [MCP Sunucusu](docs/mcp.md) -- Claude Desktop ve MCP entegrasyonu

  ## Geliştirme

  ```bash
  git clone https://github.com/lfnovo/content-core
  cd content-core

  uv sync --group dev

  # Testleri çalıştır
  make test

  # Linting
  make ruff
  ```

  ## Lisans

  Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.

  ## Katkı

  Katkılar hoş karşılanır! Ayrıntılar için lütfen [Katkı Kılavuzumuza](CONTRIBUTING.md) bakın.
---

# Content Core

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PyPI version](https://badge.fury.io/py/content-core.svg)](https://badge.fury.io/py/content-core)
[![Downloads](https://pepy.tech/badge/content-core)](https://pepy.tech/project/content-core)
[![Downloads](https://pepy.tech/badge/content-core/month)](https://pepy.tech/project/content-core)
[![GitHub stars](https://img.shields.io/github/stars/lfnovo/content-core?style=social)](https://github.com/lfnovo/content-core)
[![GitHub forks](https://img.shields.io/github/forks/lfnovo/content-core?style=social)](https://github.com/lfnovo/content-core)
[![GitHub issues](https://img.shields.io/github/issues/lfnovo/content-core)](https://github.com/lfnovo/content-core/issues)
[![Ruff](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/astral-sh/ruff/main/assets/badge/v2.json)](https://github.com/astral-sh/ruff)

Extract, process, and summarize content from URLs, files, and text through a unified async Python API, CLI, or MCP server.

## Supported Formats

| Category | Formats |
|----------|---------|
| Web | URLs, HTML pages, YouTube videos, Reddit posts |
| Documents | PDF, DOCX, PPTX, XLSX, EPUB, Markdown, plain text |
| Media | MP3, WAV, M4A, FLAC, OGG (audio); MP4, AVI, MOV, MKV (video) |

## Quick Start

```bash
pip install content-core
```

```python
import content_core

result = await content_core.extract_content(url="https://example.com")
print(result.content)
```

Or with zero install:

```bash
uvx content-core extract "https://example.com"
```

## CLI Usage

Content Core provides a unified `content-core` command with subcommands for extraction, summarization, and MCP server.

### Extract

```bash
# From a URL
content-core extract "https://example.com"

# From a file
content-core extract document.pdf

# With JSON output
content-core extract document.pdf --format json

# With a specific engine
content-core extract "https://example.com" --engine firecrawl

# From stdin
echo "some text" | content-core extract
```

### Summarize

```bash
# Summarize text
content-core summarize "Long article text here..."

# With context
content-core summarize "Long text" --context "bullet points"

# From stdin
cat article.txt | content-core summarize --context "explain to a child"
```

### MCP Server

```bash
content-core mcp
```

### Configuration

```bash
# Set persistent config
content-core config set llm_provider anthropic
content-core config set llm_model claude-sonnet-4-20250514

# List current config
content-core config list

# Delete a config value
content-core config delete llm_provider
```

Config is stored in `~/.content-core/config.toml`. Priority: command flags > env vars > config file > defaults.

### Zero-Install with uvx

All commands work without installation using `uvx`:

```bash
uvx content-core extract "https://example.com"
uvx content-core summarize "text" --context "one sentence"
uvx content-core mcp
```

## Python API

### Extraction

```python
import content_core

# From a URL
result = await content_core.extract_content(url="https://example.com")

# From a file
result = await content_core.extract_content(file_path="document.pdf")

# From text
result = await content_core.extract_content(content="some text")

# With engine override
from content_core import ContentCoreConfig
config = ContentCoreConfig(url_engine="firecrawl")
result = await content_core.extract_content(url="https://example.com", config=config)
```

### Summarization

```python
import content_core

summary = await content_core.summarize("long article text", context="bullet points")
```

### Configuration

```python
from content_core import ContentCoreConfig

config = ContentCoreConfig(
    url_engine="firecrawl",
    document_engine="docling",
    audio_concurrency=5,
)
result = await content_core.extract_content(url="https://example.com", config=config)
```

## MCP Integration

Content Core includes a Model Context Protocol (MCP) server for use with Claude Desktop and other MCP-compatible applications.

<a href="https://glama.ai/mcp/servers/@lfnovo/content-core">
  
</a>

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "content-core": {
      "command": "uvx",
      "args": ["content-core", "mcp"],
      "env": {
        "OPENAI_API_KEY": "sk-..."
      }
    }
  }
}
```

The MCP server exposes two tools: `extract_content` and `summarize_content`. Both return plain text.

For detailed setup, see the [MCP documentation](docs/mcp.md).

## Claude Code Skill

Content Core includes a [`SKILL.md`](SKILL.md) that teaches AI agents how to use it for extracting content from external sources. To make it available in your Claude Code project, copy it to your skills directory:

```bash
# Download the skill
curl -o .claude/skills/content-core/SKILL.md --create-dirs \
  https://raw.githubusercontent.com/lfnovo/content-core/main/SKILL.md
```

Once installed, Claude Code can use content-core to extract content from URLs, documents, and media files — either via CLI (`uvx content-core`) or MCP if configured.

## AI Providers

Content Core uses [Esperanto](https://github.com/lfnovo/esperanto) to support multiple LLM and STT providers. Switch providers by changing the config — no code changes needed:

```bash
# Use Anthropic for summarization
content-core config set llm_provider anthropic
content-core config set llm_model claude-sonnet-4-20250514

# Use Groq for transcription
content-core config set stt_provider groq
content-core config set stt_model whisper-large-v3
```

Supported providers include OpenAI, Anthropic, Google, Groq, DeepSeek, Ollama, and more. See the [Esperanto documentation](https://github.com/lfnovo/esperanto) for the full list.

## Configuration

Content Core uses `ContentCoreConfig` powered by pydantic-settings. Settings are resolved in priority order: constructor args > env vars (`CCORE_*`) > config file (`~/.content-core/config.toml`) > defaults.

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `CCORE_URL_ENGINE` | URL extraction engine (`auto`, `simple`, `firecrawl`, `jina`, `crawl4ai`) | `auto` |
| `CCORE_DOCUMENT_ENGINE` | Document extraction engine (`auto`, `simple`, `docling`) | `auto` |
| `CCORE_AUDIO_CONCURRENCY` | Concurrent audio transcriptions (1-10) | `3` |
| `CRAWL4AI_API_URL` | Crawl4AI Docker API URL (omit for local browser mode) | - |
| `FIRECRAWL_API_URL` | Custom Firecrawl API URL for self-hosted instances | - |
| `CCORE_FIRECRAWL_PROXY` | Firecrawl proxy mode (`auto`, `basic`, `stealth`) | `auto` |
| `CCORE_FIRECRAWL_WAIT_FOR` | Wait time in ms before extraction | `3000` |
| `CCORE_LLM_PROVIDER` | LLM provider for summarization | - |
| `CCORE_LLM_MODEL` | LLM model for summarization | - |
| `CCORE_STT_PROVIDER` | Speech-to-text provider | - |
| `CCORE_STT_MODEL` | Speech-to-text model | - |
| `CCORE_STT_TIMEOUT` | Speech-to-text timeout in seconds | - |
| `CCORE_YOUTUBE_LANGUAGES` | Preferred YouTube transcript languages | - |

API keys for external services are set via their standard environment variables (e.g., `OPENAI_API_KEY`, `FIRECRAWL_API_KEY`, `JINA_API_KEY`).

### Proxy Configuration

Content Core reads standard `HTTP_PROXY` / `HTTPS_PROXY` / `NO_PROXY` environment variables automatically. No additional configuration is needed.

## Optional Dependencies

```bash
# Docling for advanced document parsing (PDF, DOCX, PPTX, XLSX)
pip install content-core[docling]

# Crawl4AI for local browser-based URL extraction
pip install content-core[crawl4ai]
python -m playwright install --with-deps

# LangChain tool wrappers
pip install content-core[langchain]

# All optional features
pip install content-core[docling,crawl4ai,langchain]
```

### Using with LangChain

When installed with the `langchain` extra, Content Core provides LangChain-compatible tool wrappers:

```python
from content_core.tools import extract_content_tool, summarize_content_tool

tools = [extract_content_tool, summarize_content_tool]
```

## Documentation

- [Usage Guide](docs/usage.md) -- Python API details, configuration, and examples
- [Processors](docs/processors.md) -- How content extraction works for each format
- [MCP Server](docs/mcp.md) -- Claude Desktop and MCP integration

## Development

```bash
git clone https://github.com/lfnovo/content-core
cd content-core

uv sync --group dev

# Run tests
make test

# Lint
make ruff
```

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please see our [Contributing Guide](CONTRIBUTING.md) for details.
