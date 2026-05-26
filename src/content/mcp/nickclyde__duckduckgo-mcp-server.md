---
name: "nickclyde/duckduckgo-mcp-server"
description: "Web search using DuckDuckGo"
description_tr: "DuckDuckGo ile web arama"
category: "Search & Data Extraction"
repo: "nickclyde/duckduckgo-mcp-server"
stars: 1186
url: "https://github.com/nickclyde/duckduckgo-mcp-server"
body_length: 9216
license: "MIT"
language: "Python"
body_tr: |-
  # DuckDuckGo Search MCP Server

  [![PyPI version](https://img.shields.io/pypi/v/duckduckgo-mcp-server)](https://pypi.org/project/duckduckgo-mcp-server/)
  [![PyPI downloads](https://img.shields.io/pypi/dm/duckduckgo-mcp-server)](https://pypi.org/project/duckduckgo-mcp-server/)
  [![Python versions](https://img.shields.io/pypi/pyversions/duckduckgo-mcp-server)](https://pypi.org/project/duckduckgo-mcp-server/)

  DuckDuckGo üzerinden web arama özellikleri sağlayan bir Model Context Protocol (MCP) sunucusu. İçerik getirme ve analiz için ek özellikler içerir.

  ## Hızlı Başlangıç

  ```bash
  uvx duckduckgo-mcp-server
  ```

  ## Özellikler

  - **Web Arama**: DuckDuckGo'da gelişmiş rate limiting ve sonuç formatlaması ile arama yapın
  - **İçerik Getirme**: Web sayfası içeriğini almak ve akıllı metin çıkarımı ile analiz edin
  - **Rate Limiting**: Arama ve içerik getirme için yerleşik rate limit koruması
  - **Hata Yönetimi**: Kapsamlı hata yönetimi ve loglama
  - **LLM Dostu Çıktı**: Büyük dil modelleri için özel olarak formatlanmış sonuçlar

  ## Kurulum

  PyPI'dan `uv` kullanarak kurulum yapın:

  ```bash
  uv pip install duckduckgo-mcp-server
  ```

  ## Kullanım

  ### Claude Desktop ile Çalıştırma

  1. [Claude Desktop](https://claude.ai/download) dosyasını indirin
  2. Claude Desktop yapılandırmanızı oluşturun veya düzenleyin:
     - macOS üzerinde: `~/Library/Application Support/Claude/claude_desktop_config.json`
     - Windows üzerinde: `%APPDATA%\Claude\claude_desktop_config.json`

  Aşağıdaki yapılandırmayı ekleyin:

  **Temel Yapılandırma (SafeSearch Olmadan, Varsayılan Bölge Olmadan):**
  ```json
  {
      "mcpServers": {
          "ddg-search": {
              "command": "uvx",
              "args": ["duckduckgo-mcp-server"]
          }
      }
  }
  ```

  **SafeSearch ve Bölge Yapılandırması İle:**
  ```json
  {
      "mcpServers": {
          "ddg-search": {
              "command": "uvx",
              "args": ["duckduckgo-mcp-server"],
              "env": {
                  "DDG_SAFE_SEARCH": "STRICT",
                  "DDG_REGION": "cn-zh"
              }
          }
      }
  }
  ```

  **Yapılandırma Seçenekleri:**
  - `DDG_SAFE_SEARCH`: SafeSearch filtreleme seviyesi (isteğe bağlı)
    - `STRICT`: Maksimum içerik filtrelemesi (kp=1)
    - `MODERATE`: Dengeli filtreleme (kp=-1, belirtilmezse varsayılan)
    - `OFF`: İçerik filtrelemesi yok (kp=-2)
  - `DDG_REGION`: Varsayılan bölge/dil kodu (isteğe bağlı, aşağıda örnekler)
    - `us-en`: Amerika Birleşik Devletleri (İngilizce)
    - `cn-zh`: Çin (Çince)
    - `jp-ja`: Japonya (Japonca)
    - `wt-wt`: Belirli bir bölge yok
    - DuckDuckGo'nun varsayılan davranışı için boş bırakın

  3. Claude Desktop'ı yeniden başlatın

  ### Claude Code ile Çalıştırma

  1. [Claude Code](https://github.com/anthropics/claude-code) dosyasını indirin
  2. [`uvenv`](https://github.com/robinvandernoord/uvenv) kurulu olduğundan ve `uvx` komutunun kullanılabilir olduğundan emin olun
  3. MCP sunucusunu ekleyin: `claude mcp add ddg-search uvx duckduckgo-mcp-server`

  ### SSE veya Streamable HTTP ile Çalıştırma

  Sunucu diğer MCP istemcileriyle kullanmak için alternatif taşımalar destekler:

  ```bash
  # SSE taşıması
  uvx duckduckgo-mcp-server --transport sse

  # Streamable HTTP taşıması
  uvx duckduckgo-mcp-server --transport streamable-http
  ```

  Varsayılan taşıma `stdio` olup, Claude Desktop ve Claude Code tarafından kullanılır.

  `sse` veya `streamable-http` ile çalıştırırken, `--host` ve `--port` bayraklarıyla varsayılan bağlama adresini (`127.0.0.1:8000`) geçersiz kılın:

  ```bash
  uvx duckduckgo-mcp-server --transport streamable-http --host 0.0.0.0 --port 7070
  ```

  ### Fetch Backend (bot algılamayı atlama)

  Bazı siteler, User-Agent ne olursa olsun varsayılan `httpx` istemcisini engeller — Cloudflare Bot Management ve benzer filtreler JA3/TLS handshake'ini başlıkları değil anahtarlar. İsteğe bağlı bir backend olan `curl` (`curl_cffi` aracılığıyla), gerçek bir Chrome tarayıcısının TLS handshake'ini taklit eder ve bu kontrolleri geçer.

  **Kurulum:**

  ```bash
  # Varsayılan kurulum (yalnızca httpx)
  uv pip install duckduckgo-mcp-server

  # İsteğe bağlı tarayıcı backend'i ile
  uv pip install "duckduckgo-mcp-server[browser]"
  ```

  **Backend seçenekleri:**

  | Değer  | Davranış                                                                                  | `[browser]` Gerekli |
  | ------ | ----------------------------------------------------------------------------------------- | ------------------- |
  | `httpx` | Hafif async HTTP. Varsayılan. Çoğu sitede çalışır.                                     | hayır               |
  | `curl` | `curl_cffi` ile Chrome 131 TLS taklit eder. TLS-fingerprint tabanlı filtreleri geçer.      | evet                |
  | `auto` | Önce `httpx` deneyen; 403 veya Cloudflare challenge yanıtında `curl` ile yeniden deneyen. | evet                |

  **Backend'i yapılandırmanın iki yolu:**

  1. **Sunucu genelinde varsayılan** `--fetch-backend` CLI bayrağı aracılığıyla (her `fetch_content` çağrısına uygulanır):

     ```bash
     # Varsayılan davranış — httpx kullanır
     uvx duckduckgo-mcp-server

     # Her fetch için curl'ü zorla ([browser] extra gerekli)
     uvx --with "duckduckgo-mcp-server[browser]" duckduckgo-mcp-server --fetch-backend curl

     # Önce httpx dene, 403 / Cloudflare challenge üzerinde curl'e geri düş
     uvx --with "duckduckgo-mcp-server[browser]" duckduckgo-mcp-server --fetch-backend auto
     ```

  2. **Çağrı başına geçersiz kılma** `fetch_content` aracındaki `backend` argümanı aracılığıyla (CLI varsayılanını o tek çağrı için geçersiz kılar). Araç input şemasında `backend` sunmaktadır, bu nedenle bir MCP istemcisi fetch başına `"httpx"`, `"curl"` veya `"auto"` seçebilir.

  `search` aracı her zaman `httpx` kullanır — DuckDuckGo'nun search endpoint'i taklit gerektirmez.

  Varsayılan `httpx` kalır, böylece taklit gerektirmeyenler ekstra dependency'nin ücretini ödemezler.

  ### Geliştirme

  Yerel geliştirme için:

  ```bash
  # Bağımlılıkları yükle
  uv sync

  # MCP Inspector ile çalıştır
  mcp dev src/duckduckgo_mcp_server/server.py

  # Claude Desktop ile test etmek için yerel olarak yükle
  mcp install src/duckduckgo_mcp_server/server.py

  # Tüm testleri çalıştır
  uv run python -m pytest src/duckduckgo_mcp_server/ -v

  # Yalnızca unit test'leri çalıştır
  uv run python -m pytest src/duckduckgo_mcp_server/test_server.py -v

  # Yalnızca e2e test'lerini çalıştır
  uv run python -m pytest src/duckduckgo_mcp_server/test_e2e.py -v
  ```

  ## Kullanılabilir Araçlar

  ### 1. Arama Aracı

  ```python
  async def search(query: str, max_results: int = 10, region: str = "") -> str
  ```

  DuckDuckGo'da web araması yapar ve formatlanmış sonuçları döndürür.

  **Parametreler:**
  - `query`: Arama sorgusu dizesi
  - `max_results`: Döndürülecek maksimum sonuç sayısı (varsayılan: 10)
  - `region`: (İsteğe bağlı) Varsayılan bölgeyi geçersiz kılmak için bölge/dil kodu. Yapılandırılmış varsayılan bölgeyi kullanmak için boş bırakın.

  **Bölge Kodu Örnekleri:**
  - `us-en`: Amerika Birleşik Devletleri (İngilizce)
  - `cn-zh`: Çin (Çince)
  - `jp-ja`: Japonya (Japonca)
  - `de-de`: Almanya (Almanca)
  - `fr-fr`: Fransa (Fransızca)
  - `wt-wt`: Belirli bir bölge yok

  **Döndürür:**
  Başlıklar, URL'ler ve özet içeren arama sonuçlarını içeren formatlanmış dize.

  **Örnek Kullanım:**
  - Varsayılan ayarlarla arama yapın: `search("python tutorial")`
  - Belirli bölge ile arama yapın: `search("latest news", region="jp-ja")` Japonca haberler için

  ### 2. İçerik Getirme Aracı

  ```python
  async def fetch_content(
      url: str,
      start_index: int = 0,
      max_length: int = 8000,
      backend: Optional[str] = None,
  ) -> str
  ```

  Bir web sayfasından içerik getirir ve analiz eder.

  **Parametreler:**
  - `url`: İçerik getirmek için web sayfası URL'si
  - `start_index`: Okumaya başlamak için karakter ofseti (sayfalandırma için)
  - `max_length`: Döndürülecek maksimum karakter sayısı
  - `backend`: Varsayılan fetch backend'ini geçersiz kılmak için isteğe bağlı çağrı başına (`"httpx"`, `"curl"` veya `"auto"`). Atlanırsa, sunucu başlangıcında `--fetch-backend` ile ayarlanan değeri kullanır.

  **Döndürür:**
  Web sayfasından temizlenmiş ve formatlanmış metin içeriği.

  ## Özelliklerin Ayrıntıları

  ### Rate Limiting

  - Arama: Dakikada 30 istek ile sınırlı
  - İçerik Getirme: Dakikada 20 istek ile sınırlı
  - Otomatik kuyruk yönetimi ve bekleme süreleri

  ### Sonuç İşleme

  - Reklamları ve ilgisiz içeriği kaldırır
  - DuckDuckGo yönlendirme URL'lerini temizler
  - Sonuçları optimal LLM tüketimi için formatlar
  - Uzun içeriği uygun şekilde keser

  ### İçerik Güvenliği

  - **SafeSearch Filtrelemesi**: Sunucu başlangıcında `DDG_SAFE_SEARCH` ortam değişkeni aracılığıyla yapılandırılır
    - Yöneticiler tarafından kontrol edilir, AI asistanlar tarafından değiştirilemez
    - Seçilen seviye temelinde uygunsuz içeriği filtreler
    - DuckDuckGo'nun resmi `kp` parametresini kullanır

  - **Bölge Yerelleştirmesi**:
    - Varsayılan bölge `DDG_REGION` ortam değişkeni aracılığıyla ayarlanır
    - AI asistanlar tarafından arama başına geçersiz kılınabilir
    - Belirli coğrafik bölgeler için sonuç ilgisini iyileştirir

  ### Hata Yönetimi

  - Kapsamlı hata yakalaması ve raporlaması
  - MCP bağlamı aracılığıyla ayrıntılı loglama
  - Rate limitler veya zaman aşımlarında sorunsuz bozunma

  ## Katkıda Bulunma

  İssues ve pull request'ler memnuniyetle karşılanır! Potansiyel iyileştirmeler için bazı alanlar:

  - Geliştirilmiş içerik analiz seçenekleri
  - Sık erişilen içerik için önbelleğe alma katmanı
  - Ek rate limiting stratejileri

  ## Lisans

  Bu proje MIT Lisansı altında lisanslanmıştır.

  ## Star Geçmişi

  [![Star History Chart](https://api.star-history.com/svg?repos=nickclyde/duckduckgo-mcp-server&type=Date)](https://star-history.com/#nickclyde/duckduckgo-mcp-server&Date)
---

# DuckDuckGo Search MCP Server

[![PyPI version](https://img.shields.io/pypi/v/duckduckgo-mcp-server)](https://pypi.org/project/duckduckgo-mcp-server/)
[![PyPI downloads](https://img.shields.io/pypi/dm/duckduckgo-mcp-server)](https://pypi.org/project/duckduckgo-mcp-server/)
[![Python versions](https://img.shields.io/pypi/pyversions/duckduckgo-mcp-server)](https://pypi.org/project/duckduckgo-mcp-server/)

A Model Context Protocol (MCP) server that provides web search capabilities through DuckDuckGo, with additional features for content fetching and parsing.

## Quick Start

```bash
uvx duckduckgo-mcp-server
```

## Features

- **Web Search**: Search DuckDuckGo with advanced rate limiting and result formatting
- **Content Fetching**: Retrieve and parse webpage content with intelligent text extraction
- **Rate Limiting**: Built-in protection against rate limits for both search and content fetching
- **Error Handling**: Comprehensive error handling and logging
- **LLM-Friendly Output**: Results formatted specifically for large language model consumption

## Installation

Install from PyPI using `uv`:

```bash
uv pip install duckduckgo-mcp-server
```

## Usage

### Running with Claude Desktop

1. Download [Claude Desktop](https://claude.ai/download)
2. Create or edit your Claude Desktop configuration:
   - On macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - On Windows: `%APPDATA%\Claude\claude_desktop_config.json`

Add the following configuration:

**Basic Configuration (No SafeSearch, No Default Region):**
```json
{
    "mcpServers": {
        "ddg-search": {
            "command": "uvx",
            "args": ["duckduckgo-mcp-server"]
        }
    }
}
```

**With SafeSearch and Region Configuration:**
```json
{
    "mcpServers": {
        "ddg-search": {
            "command": "uvx",
            "args": ["duckduckgo-mcp-server"],
            "env": {
                "DDG_SAFE_SEARCH": "STRICT",
                "DDG_REGION": "cn-zh"
            }
        }
    }
}
```

**Configuration Options:**
- `DDG_SAFE_SEARCH`: SafeSearch filtering level (optional)
  - `STRICT`: Maximum content filtering (kp=1)
  - `MODERATE`: Balanced filtering (kp=-1, default if not specified)
  - `OFF`: No content filtering (kp=-2)
- `DDG_REGION`: Default region/language code (optional, examples below)
  - `us-en`: United States (English)
  - `cn-zh`: China (Chinese)
  - `jp-ja`: Japan (Japanese)
  - `wt-wt`: No specific region
  - Leave empty for DuckDuckGo's default behavior

3. Restart Claude Desktop

### Running with Claude Code

1. Download [Claude Code](https://github.com/anthropics/claude-code)
2. Ensure [`uvenv`](https://github.com/robinvandernoord/uvenv) is installed and the `uvx` command is available
3. Add the MCP server: `claude mcp add ddg-search uvx duckduckgo-mcp-server`

### Running with SSE or Streamable HTTP

The server supports alternative transports for use with other MCP clients:

```bash
# SSE transport
uvx duckduckgo-mcp-server --transport sse

# Streamable HTTP transport
uvx duckduckgo-mcp-server --transport streamable-http
```

The default transport is `stdio`, which is used by Claude Desktop and Claude Code.

When running with `sse` or `streamable-http`, override the default bind address (`127.0.0.1:8000`) with the `--host` and `--port` flags:

```bash
uvx duckduckgo-mcp-server --transport streamable-http --host 0.0.0.0 --port 7070
```

### Fetch Backend (bypassing bot detection)

Some sites block the default `httpx` client because of its distinctive TLS fingerprint, regardless of User-Agent — Cloudflare Bot Management and similar filters key on the JA3/TLS handshake, not on headers. An opt-in backend, `curl` (implemented via `curl_cffi`), impersonates a real Chrome browser's TLS handshake and passes through those checks.

**Installation:**

```bash
# Default install (httpx only)
uv pip install duckduckgo-mcp-server

# With the optional browser backend
uv pip install "duckduckgo-mcp-server[browser]"
```

**Backend options:**

| Value  | Behavior                                                                                  | Needs `[browser]` |
| ------ | ----------------------------------------------------------------------------------------- | ----------------- |
| `httpx` | Lightweight async HTTP. Default. Works on most sites.                                     | no                |
| `curl` | Uses `curl_cffi` with Chrome 131 TLS impersonation. Passes TLS-fingerprint-based filters. | yes               |
| `auto` | Tries `httpx` first; on 403 or a Cloudflare challenge response, retries with `curl`.      | yes               |

**Two ways to configure the backend:**

1. **Server-wide default** via the `--fetch-backend` CLI flag (applies to every `fetch_content` call):

   ```bash
   # Default behavior — uses httpx
   uvx duckduckgo-mcp-server

   # Force curl for every fetch (requires the [browser] extra)
   uvx --with "duckduckgo-mcp-server[browser]" duckduckgo-mcp-server --fetch-backend curl

   # Try httpx first, fall back to curl on 403 / Cloudflare challenge
   uvx --with "duckduckgo-mcp-server[browser]" duckduckgo-mcp-server --fetch-backend auto
   ```

2. **Per-call override** via the `backend` argument on the `fetch_content` tool (overrides the CLI default for that single call). The tool exposes `backend` in its input schema, so an MCP client can choose `"httpx"`, `"curl"`, or `"auto"` on a fetch-by-fetch basis.

The `search` tool always uses `httpx` — DuckDuckGo's search endpoint doesn't require impersonation.

The default stays `httpx` so users who don't need the impersonation don't pay for the extra dependency.

### Development

For local development:

```bash
# Install dependencies
uv sync

# Run with the MCP Inspector
mcp dev src/duckduckgo_mcp_server/server.py

# Install locally for testing with Claude Desktop
mcp install src/duckduckgo_mcp_server/server.py

# Run all tests
uv run python -m pytest src/duckduckgo_mcp_server/ -v

# Run only unit tests
uv run python -m pytest src/duckduckgo_mcp_server/test_server.py -v

# Run only e2e tests
uv run python -m pytest src/duckduckgo_mcp_server/test_e2e.py -v
```

## Available Tools

### 1. Search Tool

```python
async def search(query: str, max_results: int = 10, region: str = "") -> str
```

Performs a web search on DuckDuckGo and returns formatted results.

**Parameters:**
- `query`: Search query string
- `max_results`: Maximum number of results to return (default: 10)
- `region`: (Optional) Region/language code to override the default. Leave empty to use the configured default region.

**Region Code Examples:**
- `us-en`: United States (English)
- `cn-zh`: China (Chinese)
- `jp-ja`: Japan (Japanese)
- `de-de`: Germany (German)
- `fr-fr`: France (French)
- `wt-wt`: No specific region

**Returns:**
Formatted string containing search results with titles, URLs, and snippets.

**Example Usage:**
- Search with default settings: `search("python tutorial")`
- Search with specific region: `search("latest news", region="jp-ja")` for Japanese news

### 2. Content Fetching Tool

```python
async def fetch_content(
    url: str,
    start_index: int = 0,
    max_length: int = 8000,
    backend: Optional[str] = None,
) -> str
```

Fetches and parses content from a webpage.

**Parameters:**
- `url`: The webpage URL to fetch content from
- `start_index`: Character offset to start reading from (for pagination)
- `max_length`: Maximum number of characters to return
- `backend`: Optional per-call override of the default fetch backend (`"httpx"`, `"curl"`, or `"auto"`). When omitted, uses whatever was set via `--fetch-backend` at server startup.

**Returns:**
Cleaned and formatted text content from the webpage.

## Features in Detail

### Rate Limiting

- Search: Limited to 30 requests per minute
- Content Fetching: Limited to 20 requests per minute
- Automatic queue management and wait times

### Result Processing

- Removes ads and irrelevant content
- Cleans up DuckDuckGo redirect URLs
- Formats results for optimal LLM consumption
- Truncates long content appropriately

### Content Safety

- **SafeSearch Filtering**: Configured at server startup via `DDG_SAFE_SEARCH` environment variable
  - Controlled by administrators, not modifiable by AI assistants
  - Filters inappropriate content based on the selected level
  - Uses DuckDuckGo's official `kp` parameter

- **Region Localization**:
  - Default region set via `DDG_REGION` environment variable
  - Can be overridden per search request by AI assistants
  - Improves result relevance for specific geographic regions

### Error Handling

- Comprehensive error catching and reporting
- Detailed logging through MCP context
- Graceful degradation on rate limits or timeouts

## Contributing

Issues and pull requests are welcome! Some areas for potential improvement:

- Enhanced content parsing options
- Caching layer for frequently accessed content
- Additional rate limiting strategies

## License

This project is licensed under the MIT License.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=nickclyde/duckduckgo-mcp-server&type=Date)](https://star-history.com/#nickclyde/duckduckgo-mcp-server&Date)
