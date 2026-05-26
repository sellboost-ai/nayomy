---
name: "pab1it0/prometheus-mcp-server"
description: "Query and analyze Prometheus, open-source monitoring system."
category: "Databases"
repo: "pab1it0/prometheus-mcp-server"
stars: 446
url: "https://github.com/pab1it0/prometheus-mcp-server"
body_length: 8749
license: "MIT"
language: "Python"
body_tr: |-
  # Prometheus MCP Server

  [![GitHub Container Registry](https://img.shields.io/badge/ghcr.io-pab1it0%2Fprometheus--mcp--server-blue?logo=docker)](https://github.com/users/pab1it0/packages/container/package/prometheus-mcp-server)
  [![Helm Chart](https://img.shields.io/badge/helm%20chart-ghcr.io-blue?logo=helm)](https://github.com/pab1it0/prometheus-mcp-server/pkgs/container/charts%2Fprometheus-mcp-server)
  [![GitHub Release](https://img.shields.io/github/v/release/pab1it0/prometheus-mcp-server)](https://github.com/pab1it0/prometheus-mcp-server/releases)
  [![Codecov](https://codecov.io/gh/pab1it0/prometheus-mcp-server/branch/main/graph/badge.svg)](https://codecov.io/gh/pab1it0/prometheus-mcp-server)
  ![Python](https://img.shields.io/badge/python-3.10%2B-blue)
  [![License](https://img.shields.io/github/license/pab1it0/prometheus-mcp-server)](https://github.com/pab1it0/prometheus-mcp-server/blob/main/LICENSE)

  AI asistanlarına Prometheus metriklerinizi sorgulama gücünü verin.

  Prometheus metriklerinize ve sorgularınıza standartlaştırılmış MCP arayüzleri aracılığıyla erişim sağlayan bir [Model Context Protocol][mcp] (MCP) sunucusu. AI asistanlarının PromQL sorguları çalıştırmasına ve metrik verilerinizi analiz etmesine olanak tanır.

  [mcp]: https://modelcontextprotocol.io

  ## Başlangıç

  ### Önkoşullar

  - Ortamınızdan erişilebilir Prometheus sunucusu
  - MCP uyumlu istemci (Claude Desktop, VS Code, Cursor, Windsurf, vb.)

  ### Kurulum Yöntemleri

  <details>
  <summary><b>Claude Desktop</b></summary>

  Claude Desktop yapılandırmanıza ekleyin:

  ```json
  {
    "mcpServers": {
      "prometheus": {
        "command": "docker",
        "args": [
          "run",
          "-i",
          "--rm",
          "-e",
          "PROMETHEUS_URL",
          "ghcr.io/pab1it0/prometheus-mcp-server:latest"
        ],
        "env": {
          "PROMETHEUS_URL": "<your-prometheus-url>"
        }
      }
    }
  }
  ```
  </details>

  <details>
  <summary><b>Claude Code</b></summary>

  Claude Code CLI aracılığıyla yükleyin:

  ```bash
  claude mcp add prometheus --env PROMETHEUS_URL=http://your-prometheus:9090 -- docker run -i --rm -e PROMETHEUS_URL ghcr.io/pab1it0/prometheus-mcp-server:latest
  ```
  </details>

  <details>
  <summary><b>VS Code / Cursor / Windsurf</b></summary>

  İlgili IDE'deki MCP ayarlarına ekleyin:

  ```json
  {
    "prometheus": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "PROMETHEUS_URL",
        "ghcr.io/pab1it0/prometheus-mcp-server:latest"
      ],
      "env": {
        "PROMETHEUS_URL": "<your-prometheus-url>"
      }
    }
  }
  ```
  </details>

  <details>
  <summary><b>Docker Desktop</b></summary>

  Prometheus MCP sunucusunu çalıştırmanın en kolay yolu Docker Desktop üzerindedir:

  <a href="https://hub.docker.com/open-desktop?url=https://open.docker.com/dashboard/mcp/servers/id/prometheus/config?enable=true">
    
  </a>

  1. **MCP Kataloğu Aracılığıyla**: [Docker Hub'da Prometheus MCP Server](https://hub.docker.com/mcp/server/prometheus/overview) sayfasını ziyaret edin ve yukarıdaki düğmeyi tıklayın

  2. **MCP Toolkit Aracılığıyla**: Docker Desktop'ın MCP Toolkit uzantısını kullanarak sunucuyu keşfedin ve yükleyin

  3. Ortam değişkenlerini kullanarak bağlantınızı yapılandırın (aşağıdaki Yapılandırma Seçeneklerine bakın)

  </details>

  <details>
  <summary><b>Manuel Docker Kurulumu</b></summary>

  Docker ile doğrudan çalıştırın:

  ```bash
  # Ortam değişkenleri ile
  docker run -i --rm \
    -e PROMETHEUS_URL="http://your-prometheus:9090" \
    ghcr.io/pab1it0/prometheus-mcp-server:latest

  # Kimlik doğrulaması ile
  docker run -i --rm \
    -e PROMETHEUS_URL="http://your-prometheus:9090" \
    -e PROMETHEUS_USERNAME="admin" \
    -e PROMETHEUS_PASSWORD="password" \
    ghcr.io/pab1it0/prometheus-mcp-server:latest
  ```
  </details>

  <details>
  <summary><b>Helm Chart (Kubernetes)</b></summary>

  OCI registry'deki Helm chart kullanarak Kubernetes'e dağıtın:

  ```bash
  helm install prometheus-mcp-server \
    oci://ghcr.io/pab1it0/charts/prometheus-mcp-server \
    --version 1.0.0 \
    --set prometheus.url="http://prometheus:9090"
  ```

  Kimlik doğrulaması ile:

  ```bash
  helm install prometheus-mcp-server \
    oci://ghcr.io/pab1it0/charts/prometheus-mcp-server \
    --version 1.0.0 \
    --set prometheus.url="http://prometheus:9090" \
    --set auth.username="admin" \
    --set auth.password="secret"
  ```

  Özel values dosyası ile:

  ```bash
  helm install prometheus-mcp-server \
    oci://ghcr.io/pab1it0/charts/prometheus-mcp-server \
    --version 1.0.0 \
    -f values.yaml
  ```

  Tüm kullanılabilir yapılandırma seçenekleri için [chart values](charts/prometheus-mcp-server/values.yaml) dosyasına bakın.
  </details>

  ### Yapılandırma Seçenekleri

  | Değişken | Açıklama | Gerekli |
  |----------|----------|---------|
  | `PROMETHEUS_URL` | Prometheus sunucunuzun URL'si | Evet |
  | `PROMETHEUS_URL_SSL_VERIFY` | SSL doğrulamasını devre dışı bırakmak için False olarak ayarlayın | Hayır |
  | `PROMETHEUS_DISABLE_LINKS` | Sorgu sonuçlarında Prometheus UI bağlantılarını devre dışı bırakmak için True olarak ayarlayın (context tokenlerini kaydeder) | Hayır |
  | `PROMETHEUS_REQUEST_TIMEOUT` | Asılı kalan istekleri önlemek için saniye cinsinden istek zaman aşımı (DDoS koruması) | Hayır (varsayılan: 30) |
  | `PROMETHEUS_USERNAME` | Temel kimlik doğrulama için kullanıcı adı | Hayır |
  | `PROMETHEUS_PASSWORD` | Temel kimlik doğrulama için şifre | Hayır |
  | `PROMETHEUS_TOKEN` | Kimlik doğrulama için Bearer token | Hayır |
  | `PROMETHEUS_CLIENT_CERT` | Karşılıklı TLS kimlik doğrulaması için istemci sertifikası dosyasının yolu | Hayır |
  | `PROMETHEUS_CLIENT_KEY` | Karşılıklı TLS kimlik doğrulaması için istemci private key dosyasının yolu | Hayır |
  | `REQUESTS_CA_BUNDLE` | Sunucunun TLS sertifikasını doğrulamak için CA bundle dosyasının yolu (standart `requests` library ortam değişkeni) | Hayır |
  | `ORG_ID` | Çok kiracılı kurulumlar için kuruluş ID'si | Hayır |
  | `PROMETHEUS_MCP_SERVER_TRANSPORT` | Transport modu (stdio, http, sse) | Hayır (varsayılan: stdio) |
  | `PROMETHEUS_MCP_BIND_HOST` | HTTP transport için host | Hayır (varsayılan: 127.0.0.1) |
  | `PROMETHEUS_MCP_BIND_PORT` | HTTP transport için port | Hayır (varsayılan: 8080) |
  | `PROMETHEUS_MCP_STATELESS_HTTP` | Çok replica desteği için stateless HTTP modunu etkinleştirin | Hayır (varsayılan: False) |
  | `PROMETHEUS_CUSTOM_HEADERS` | JSON string olarak özel headers | Hayır |
  | `TOOL_PREFIX` | Tüm tool adları için önek (örneğin, `staging` sonucu `staging_execute_query` ile verir). Cursor'da farklı ortamları hedefleyen birden fazla örnek çalıştırmak için kullanışlıdır | Hayır |

  ## Kullanılabilir Araçlar

  | Araç | Kategori | Açıklama |
  | --- | --- | --- |
  | `health_check` | Sistem | Konteyner izleme ve durum doğrulaması için health check endpoint'i |
  | `execute_query` | Query | Prometheus'a karşı PromQL anlık sorgusu çalıştırın |
  | `execute_range_query` | Query | Başlangıç saati, bitiş saati ve step aralığı ile PromQL range sorgusu çalıştırın |
  | `list_metrics` | Discovery | Pagination ve filtreleme desteği ile Prometheus'taki tüm kullanılabilir metrikleri listeleyin |
  | `get_metric_metadata` | Discovery | Bir metrik veya isteğe bağlı filtreleme ile toplu metadata alın |
  | `get_targets` | Discovery | Tüm scrape target'ları hakkında bilgi alın |

  Araçlar listesi yapılandırılabilir olduğundan, MCP istemcisine hangi araçları sunmak istediğinizi seçebilirsiniz. Bu, belirli işlevselliği kullanmıyorsanız veya context window'ı çok fazla kullanmak istemiyorsanız yararlıdır.

  ## Özellikler

  - Prometheus'a karşı PromQL sorguları çalıştırın
  - Metrikleri keşfet ve araştır
    - Kullanılabilir metrikleri listeleyin
    - Belirli metrikler için metadata alın
    - Metrik metadata'sında ad veya açıklamaya göre tek bir çağrıda arama yapın
    - Anlık sorgu sonuçlarını görüntüleyin
    - Farklı step aralıklarıyla range sorgu sonuçlarını görüntüleyin
  - Kimlik doğrulama desteği
    - Ortam değişkenlerinden temel auth
    - Ortam değişkenlerinden Bearer token auth
  - Docker konteynerizasyon desteği
  - AI asistanları için etkileşimli araçlar sağlayın

  ## Geliştirme

  Katkılar memnuniyetle karşılanır! Başlamak, kod standartları ve pull request süreci hakkında ayrıntılı bilgi için lütfen [Katkı Rehberi](CONTRIBUTING.md)'ne bakın.

  Bu proje bağımlılıkları yönetmek için [`uv`](https://github.com/astral-sh/uv) kullanır. Platformunuz için talimatları izleyerek `uv`'yi yükleyin:

  ```bash
  curl -LsSf https://astral.sh/uv/install.sh | sh
  ```

  Daha sonra sanal bir ortam oluşturabilir ve bağımlılıkları şu şekilde yükleyebilirsiniz:

  ```bash
  uv venv
  source .venv/bin/activate  # Unix/macOS üzerinde
  .venv\Scripts\activate     # Windows üzerinde
  uv pip install -e .
  ```

  ### Test

  Proje, işlevselliği sağlayan ve regressyonları önlemeye yardımcı olan kapsamlı bir test paketini içerir.

  Testleri pytest ile çalıştırın:

  ```bash
  # Geliştirme bağımlılıklarını yükleyin
  uv pip install -e ".[dev]"

  # Testleri çalıştırın
  pytest

  # Kapsam raporu ile çalıştırın
  pytest --cov=src --cov-report=term-missing
  ```

  Yeni özellikler eklerken, lütfen karşılık gelen testleri de ekleyin.

  ## Lisans

  MIT

  ---
---

# Prometheus MCP Server

[![GitHub Container Registry](https://img.shields.io/badge/ghcr.io-pab1it0%2Fprometheus--mcp--server-blue?logo=docker)](https://github.com/users/pab1it0/packages/container/package/prometheus-mcp-server)
[![Helm Chart](https://img.shields.io/badge/helm%20chart-ghcr.io-blue?logo=helm)](https://github.com/pab1it0/prometheus-mcp-server/pkgs/container/charts%2Fprometheus-mcp-server)
[![GitHub Release](https://img.shields.io/github/v/release/pab1it0/prometheus-mcp-server)](https://github.com/pab1it0/prometheus-mcp-server/releases)
[![Codecov](https://codecov.io/gh/pab1it0/prometheus-mcp-server/branch/main/graph/badge.svg)](https://codecov.io/gh/pab1it0/prometheus-mcp-server)
![Python](https://img.shields.io/badge/python-3.10%2B-blue)
[![License](https://img.shields.io/github/license/pab1it0/prometheus-mcp-server)](https://github.com/pab1it0/prometheus-mcp-server/blob/main/LICENSE)

Give AI assistants the power to query your Prometheus metrics.

A [Model Context Protocol][mcp] (MCP) server that provides access to your Prometheus metrics and queries through standardized MCP interfaces, allowing AI assistants to execute PromQL queries and analyze your metrics data.

[mcp]: https://modelcontextprotocol.io

## Getting Started

### Prerequisites

- Prometheus server accessible from your environment
- MCP-compatible client (Claude Desktop, VS Code, Cursor, Windsurf, etc.)

### Installation Methods

<details>
<summary><b>Claude Desktop</b></summary>

Add to your Claude Desktop configuration:

```json
{
  "mcpServers": {
    "prometheus": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e",
        "PROMETHEUS_URL",
        "ghcr.io/pab1it0/prometheus-mcp-server:latest"
      ],
      "env": {
        "PROMETHEUS_URL": "<your-prometheus-url>"
      }
    }
  }
}
```
</details>

<details>
<summary><b>Claude Code</b></summary>

Install via the Claude Code CLI:

```bash
claude mcp add prometheus --env PROMETHEUS_URL=http://your-prometheus:9090 -- docker run -i --rm -e PROMETHEUS_URL ghcr.io/pab1it0/prometheus-mcp-server:latest
```
</details>

<details>
<summary><b>VS Code / Cursor / Windsurf</b></summary>

Add to your MCP settings in the respective IDE:

```json
{
  "prometheus": {
    "command": "docker",
    "args": [
      "run",
      "-i",
      "--rm",
      "-e",
      "PROMETHEUS_URL",
      "ghcr.io/pab1it0/prometheus-mcp-server:latest"
    ],
    "env": {
      "PROMETHEUS_URL": "<your-prometheus-url>"
    }
  }
}
```
</details>

<details>
<summary><b>Docker Desktop</b></summary>

The easiest way to run the Prometheus MCP server is through Docker Desktop:

<a href="https://hub.docker.com/open-desktop?url=https://open.docker.com/dashboard/mcp/servers/id/prometheus/config?enable=true">
  
</a>

1. **Via MCP Catalog**: Visit the [Prometheus MCP Server on Docker Hub](https://hub.docker.com/mcp/server/prometheus/overview) and click the button above

2. **Via MCP Toolkit**: Use Docker Desktop's MCP Toolkit extension to discover and install the server

3. Configure your connection using environment variables (see Configuration Options below)

</details>

<details>
<summary><b>Manual Docker Setup</b></summary>

Run directly with Docker:

```bash
# With environment variables
docker run -i --rm \
  -e PROMETHEUS_URL="http://your-prometheus:9090" \
  ghcr.io/pab1it0/prometheus-mcp-server:latest

# With authentication
docker run -i --rm \
  -e PROMETHEUS_URL="http://your-prometheus:9090" \
  -e PROMETHEUS_USERNAME="admin" \
  -e PROMETHEUS_PASSWORD="password" \
  ghcr.io/pab1it0/prometheus-mcp-server:latest
```
</details>

<details>
<summary><b>Helm Chart (Kubernetes)</b></summary>

Deploy to Kubernetes using the Helm chart from the OCI registry:

```bash
helm install prometheus-mcp-server \
  oci://ghcr.io/pab1it0/charts/prometheus-mcp-server \
  --version 1.0.0 \
  --set prometheus.url="http://prometheus:9090"
```

With authentication:

```bash
helm install prometheus-mcp-server \
  oci://ghcr.io/pab1it0/charts/prometheus-mcp-server \
  --version 1.0.0 \
  --set prometheus.url="http://prometheus:9090" \
  --set auth.username="admin" \
  --set auth.password="secret"
```

With a custom values file:

```bash
helm install prometheus-mcp-server \
  oci://ghcr.io/pab1it0/charts/prometheus-mcp-server \
  --version 1.0.0 \
  -f values.yaml
```

See the [chart values](charts/prometheus-mcp-server/values.yaml) for all available configuration options.
</details>

### Configuration Options

| Variable | Description | Required |
|----------|-------------|----------|
| `PROMETHEUS_URL` | URL of your Prometheus server | Yes |
| `PROMETHEUS_URL_SSL_VERIFY` | Set to False to disable SSL verification | No |
| `PROMETHEUS_DISABLE_LINKS` | Set to True to disable Prometheus UI links in query results (saves context tokens) | No |
| `PROMETHEUS_REQUEST_TIMEOUT` | Request timeout in seconds to prevent hanging requests (DDoS protection) | No (default: 30) |
| `PROMETHEUS_USERNAME` | Username for basic authentication | No |
| `PROMETHEUS_PASSWORD` | Password for basic authentication | No |
| `PROMETHEUS_TOKEN` | Bearer token for authentication | No |
| `PROMETHEUS_CLIENT_CERT` | Path to client certificate file for mutual TLS authentication | No |
| `PROMETHEUS_CLIENT_KEY` | Path to client private key file for mutual TLS authentication | No |
| `REQUESTS_CA_BUNDLE` | Path to CA bundle file for verifying the server's TLS certificate (standard `requests` library env var) | No |
| `ORG_ID` | Organization ID for multi-tenant setups | No |
| `PROMETHEUS_MCP_SERVER_TRANSPORT` | Transport mode (stdio, http, sse) | No (default: stdio) |
| `PROMETHEUS_MCP_BIND_HOST` | Host for HTTP transport | No (default: 127.0.0.1) |
| `PROMETHEUS_MCP_BIND_PORT` | Port for HTTP transport | No (default: 8080) |
| `PROMETHEUS_MCP_STATELESS_HTTP` | Enable stateless HTTP mode for multi-replica support | No (default: False) |
| `PROMETHEUS_CUSTOM_HEADERS` | Custom headers as JSON string | No |
| `TOOL_PREFIX` | Prefix for all tool names (e.g., `staging` results in `staging_execute_query`). Useful for running multiple instances targeting different environments in Cursor | No |

## Available Tools

| Tool | Category | Description |
| --- | --- | --- |
| `health_check` | System | Health check endpoint for container monitoring and status verification |
| `execute_query` | Query | Execute a PromQL instant query against Prometheus |
| `execute_range_query` | Query | Execute a PromQL range query with start time, end time, and step interval |
| `list_metrics` | Discovery | List all available metrics in Prometheus with pagination and filtering support |
| `get_metric_metadata` | Discovery | Get metadata for one metric or bulk metadata with optional filtering |
| `get_targets` | Discovery | Get information about all scrape targets |

The list of tools is configurable, so you can choose which tools you want to make available to the MCP client. This is useful if you don't use certain functionality or if you don't want to take up too much of the context window.

## Features

- Execute PromQL queries against Prometheus
- Discover and explore metrics
  - List available metrics
  - Get metadata for specific metrics
  - Search metric metadata by name or description in a single call
  - View instant query results
  - View range query results with different step intervals
- Authentication support
  - Basic auth from environment variables
  - Bearer token auth from environment variables
- Docker containerization support
- Provide interactive tools for AI assistants

## Development

Contributions are welcome! Please see our [Contributing Guide](CONTRIBUTING.md) for detailed information on how to get started, coding standards, and the pull request process.

This project uses [`uv`](https://github.com/astral-sh/uv) to manage dependencies. Install `uv` following the instructions for your platform:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

You can then create a virtual environment and install the dependencies with:

```bash
uv venv
source .venv/bin/activate  # On Unix/macOS
.venv\Scripts\activate     # On Windows
uv pip install -e .
```

### Testing

The project includes a comprehensive test suite that ensures functionality and helps prevent regressions.

Run the tests with pytest:

```bash
# Install development dependencies
uv pip install -e ".[dev]"

# Run the tests
pytest

# Run with coverage report
pytest --cov=src --cov-report=term-missing
```

When adding new features, please also add corresponding tests.

## License

MIT

---
