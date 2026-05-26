---
name: "kagisearch/kagimcp"
description: "Official Kagi Search MCP Server"
description_tr: "Resmi Kagi Search MCP Sunucusu"
category: "Search & Data Extraction"
repo: "kagisearch/kagimcp"
stars: 393
url: "https://github.com/kagisearch/kagimcp"
body_length: 4366
license: "MIT"
language: "Python"
body_tr: |-
  # Kagi MCP Server

  [Kagi API](https://help.kagi.com/kagi/api/overview.html) tarafından desteklenen bir MCP sunucusu. MCP uyumlu istemcilere arama ve çıkarma araçlarını sunar.

  ## Araçlar

  - **`kagi_search_fetch`** - web, haber, video, podcast ve resim araması; isteğe bağlı sayfa çıkarımları, filtreler ve Kagi lens'leri ile.
  - **`kagi_extract`** - bir sayfanın tam içeriğini markdown olarak getir.

  > **Not:** Önceki `kagi_fastgpt` ve `kagi_summarizer` araçları kaldırılmıştır. Her ikisi de gelecek bir sürümde geri dönmesi planlanmaktadır.

  ## Gereksinimler

  - `KAGI_API_KEY` ortam değişkeninde bir Kagi API anahtarı.
  - Önerilen `uvx` kurulum yöntemi için [`uv`](https://docs.astral.sh/uv/).

  `uv` kurulumu:

  ```bash
  curl -LsSf https://astral.sh/uv/install.sh | sh
  ```

  Windows:

  ```powershell
  powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
  ```

  ## İstemci Kurulumu

  ### Codex CLI

  ```bash
  codex mcp add kagi --env KAGI_API_KEY=<YOUR_API_KEY_HERE> -- uvx kagimcp
  ```

  Codex, MCP yapılandırmasını `~/.codex/config.toml` adresine yazar.

  ### Claude Desktop

  Önce uv kurulumu yapın.

  MacOS/Linux:
  ```bash
  curl -LsSf https://astral.sh/uv/install.sh | sh
  ```

  Windows:
  ```
  powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
  ```

  Ardından Claude Desktop yapılandırmanızda (Ayarlar -> Geliştirici -> Yapılandırmayı Düzenle yoluyla bulunabilir):

  ```json
  {
    "mcpServers": {
      "kagi": {
        "command": "uvx",
        "args": ["kagimcp"],
        "env": {
          "KAGI_API_KEY": "YOUR_API_KEY_HERE"
        }
      }
    }
  }
  ```

  ### Claude Code

  ```bash
  claude mcp add kagi -e KAGI_API_KEY="YOUR_API_KEY_HERE" -- uvx kagimcp
  ```

  ### Smithery

  ```bash
  npx -y @smithery/cli install kagimcp --client claude
  ```

  ## Kullanım Örnekleri

  - Arama: `Who was Time's 2024 person of the year?`
  - Çıkarma: `extract the full content of https://en.wikipedia.org/wiki/Model_Context_Protocol`

  ## Yapılandırma

  Ortam değişkeni | Açıklama
  --- | ---
  `KAGI_API_KEY` | Gerekli Kagi API anahtarı.
  `FASTMCP_LOG_LEVEL` | Günlük seviyesi, örneğin `ERROR`.
  `KAGI_SEARCH_TIMEOUT` | Arama zaman aşımı (saniye cinsinden). Varsayılan değer: `10`.
  `KAGI_EXTRACT_TIMEOUT` | Çıkarma zaman aşımı (saniye cinsinden). Varsayılan değer: `30`.
  `KAGI_MAX_RETRIES` | İlk istekten sonra maksimum yeniden deneme sayısı. Varsayılan değer: `2`; yeniden denemeleri devre dışı bırakmak için `0` olarak ayarlayın.
  `KAGI_HIDDEN_PARAMS` | LLM ile karşı karşıya gelen şemadan gizlenecek arama parametreleri (virgülle ayrılmış).

  Gizlenebilir arama parametreleri:

  ```text
  workflow, extract_count, limit, include_domains, exclude_domains, time_relative, after, before, file_type, lens_id
  ```

  Örnek:

  ```bash
  KAGI_HIDDEN_PARAMS="extract_count,after,before,time_relative,include_domains,exclude_domains"
  ```

  ## Yerel Geliştirme

  ```bash
  git clone https://github.com/kagisearch/kagimcp.git
  cd kagimcp
  uv sync
  ```

  Yerel olarak stdio üzerinden çalıştırın:

  ```bash
  KAGI_API_KEY=<YOUR_API_KEY_HERE> uv run kagimcp
  ```

  Akışlı HTTP taşıması ile çalıştırın:

  ```bash
  KAGI_API_KEY=<YOUR_API_KEY_HERE> uv run kagimcp --http --host 0.0.0.0 --port 8000
  ```

  ## Kendi Sunucunuzda Barındırma

  HTTP modu çok kiracılıdır: her istek, sunucu genelinde ortam değişkeni yerine `Authorization: Bearer <key>` başlığı aracılığıyla API anahtarını sağlar, böylece bir örnek birden fazla kullanıcıya hizmet verebilir. Depo, PyPI'den sabitlenmiş bir `kagimcp` kuran ve HTTP modunda çalıştıran bir `Dockerfile` içerir. Kapsayıcı `$PORT` değerini dikkate alır, bu nedenle bunu enjekte eden herhangi bir platformda çalışır (Railway, Render, Cloud Run, Fly.io, vb.).

  Yerel olarak oluşturun ve çalıştırın:

  ```sh
  docker build -t kagimcp-hosted .
  docker run --rm -p 8000:8000 kagimcp-hosted
  ```

  Temel test:

  ```sh
  curl -sL http://127.0.0.1:8000/mcp -X POST \
    -H "authorization: Bearer $KAGI_API_KEY" \
    -H "content-type: application/json" \
    -H "accept: application/json, text/event-stream" \
    -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'
  ```

  Üretimde sürümü yükseltmek için, `Dockerfile` adresindeki sabiti düzenleyin ve yeniden dağıtın.

  ## Hata Ayıklama

  Yayınlanan paketi inceleyin:

  ```bash
  npx @modelcontextprotocol/inspector uvx kagimcp
  ```

  Yerel bir çıkışı inceleyin:

  ```bash
  npx @modelcontextprotocol/inspector uv --directory /ABSOLUTE/PATH/TO/kagimcp run kagimcp
  ```

  Inspector genellikle `http://localhost:5173` adresinde kullanılabilir.

  ## Ön Sürüm Yönergeleri

  Ön sürüm derlemesi kullanılıyorsa, aynı kurulum yönergeleri geçerlidir, ancak `uvx kagimcp` yerine `uvx --prerelease allow --from kagimcp==1.0.0rc2 kagimcp` kullanın (`1.0.0rc2` yerine yüklemek istediğiniz sürümü yazın).
---

# Kagi MCP Server

An MCP server backed by the [Kagi API](https://help.kagi.com/kagi/api/overview.html). It exposes search and extraction tools to MCP-compatible clients.

## Tools

- **`kagi_search_fetch`** - web, news, videos, podcasts, and image search with optional page extracts, filters, and Kagi lenses.
- **`kagi_extract`** - fetch a page's full content as markdown.

> **Note:** The previous `kagi_fastgpt` and `kagi_summarizer` tools have been removed. Both are planned to return in a future release.

## Requirements

- A Kagi API key in `KAGI_API_KEY`.
- [`uv`](https://docs.astral.sh/uv/) for the recommended `uvx` install path.

Install `uv`:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Windows:

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

## Client Setup

### Codex CLI

```bash
codex mcp add kagi --env KAGI_API_KEY=<YOUR_API_KEY_HERE> -- uvx kagimcp
```

Codex writes MCP configuration to `~/.codex/config.toml`.

### Claude Desktop

Install uv first.

MacOS/Linux:
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Windows:
```
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

Then in your Claude Desktop config (found through Settings -> Developer -> Edit Config):

```json
{
  "mcpServers": {
    "kagi": {
      "command": "uvx",
      "args": ["kagimcp"],
      "env": {
        "KAGI_API_KEY": "YOUR_API_KEY_HERE"
      }
    }
  }
}
```

### Claude Code

```bash
claude mcp add kagi -e KAGI_API_KEY="YOUR_API_KEY_HERE" -- uvx kagimcp
```

### Smithery

```bash
npx -y @smithery/cli install kagimcp --client claude
```

## Usage Examples

- Search: `Who was Time's 2024 person of the year?`
- Extract: `extract the full content of https://en.wikipedia.org/wiki/Model_Context_Protocol`

## Configuration

Environment variable | Description
--- | ---
`KAGI_API_KEY` | Required Kagi API key.
`FASTMCP_LOG_LEVEL` | Logging level, for example `ERROR`.
`KAGI_SEARCH_TIMEOUT` | Search timeout in seconds. Defaults to `10`.
`KAGI_EXTRACT_TIMEOUT` | Extract timeout in seconds. Defaults to `30`.
`KAGI_MAX_RETRIES` | Max retry attempts after the first request. Defaults to `2`; set `0` to disable retries.
`KAGI_HIDDEN_PARAMS` | Comma-separated search params to hide from the LLM-facing schema.

Hideable search params:

```text
workflow, extract_count, limit, include_domains, exclude_domains, time_relative, after, before, file_type, lens_id
```

Example:

```bash
KAGI_HIDDEN_PARAMS="extract_count,after,before,time_relative,include_domains,exclude_domains"
```

## Local Development

```bash
git clone https://github.com/kagisearch/kagimcp.git
cd kagimcp
uv sync
```

Run locally over stdio:

```bash
KAGI_API_KEY=<YOUR_API_KEY_HERE> uv run kagimcp
```

Run with streamable HTTP transport:

```bash
KAGI_API_KEY=<YOUR_API_KEY_HERE> uv run kagimcp --http --host 0.0.0.0 --port 8000
```

## Self-Hosting

HTTP mode is multi-tenant: each request supplies its API key via the
`Authorization: Bearer <key>` header instead of a server-wide env var, so one
instance can serve multiple users. The repo ships a `Dockerfile` that installs a pinned `kagimcp` from PyPI and
runs it in HTTP mode. The container respects `$PORT` so it works on any
platform that injects one (Railway, Render, Cloud Run, Fly.io, etc.).

Build and run locally:

```sh
docker build -t kagimcp-hosted .
docker run --rm -p 8000:8000 kagimcp-hosted
```

Smoke test:

```sh
curl -sL http://127.0.0.1:8000/mcp -X POST \
  -H "authorization: Bearer $KAGI_API_KEY" \
  -H "content-type: application/json" \
  -H "accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'
```

To bump the version in production, edit the pin in the `Dockerfile` and redeploy.

## Debugging

Inspect the published package:

```bash
npx @modelcontextprotocol/inspector uvx kagimcp
```

Inspect a local checkout:

```bash
npx @modelcontextprotocol/inspector uv --directory /ABSOLUTE/PATH/TO/kagimcp run kagimcp
```

The inspector is usually available at `http://localhost:5173`.

## Prerelease Instructions

If using a prerelease build, the same installation instructions apply, but use `uvx --prerelease allow --from kagimcp==1.0.0rc2 kagimcp` instead of `uvx kagimcp` (replace `1.0.0rc2` with whatever version you're wanting to install).
