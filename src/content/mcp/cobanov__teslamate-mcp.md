---
name: "cobanov/teslamate-mcp"
description: "A Model Context Protocol (MCP) server that provides access to your TeslaMate database, allowing AI assistants to query Tesla vehicle data and analytics."
category: "Travel & Transportation"
repo: "cobanov/teslamate-mcp"
stars: 127
url: "https://github.com/cobanov/teslamate-mcp"
body_length: 7159
license: "MIT"
language: "Python"
body_tr: |-
  <div align="center">

  # TeslaMate MCP Server



  Bir [Model Context Protocol](https://modelcontextprotocol.io/) sunucusu; [TeslaMate](https://github.com/teslamate-org/teslamate) PostgreSQL veritabanınızı MCP-uyumlu AI istemcilerine (Claude Desktop, Cursor, vb.) stdio veya streamable HTTP üzerinden sunar.

  [![CI](https://github.com/cobanov/teslamate-mcp/actions/workflows/ci.yml/badge.svg)](https://github.com/cobanov/teslamate-mcp/actions/workflows/ci.yml)
  [![Release](https://img.shields.io/github/v/release/cobanov/teslamate-mcp?logo=github&sort=semver)](https://github.com/cobanov/teslamate-mcp/releases)
  [![GHCR](https://img.shields.io/badge/ghcr.io-cobanov%2Fteslamate--mcp-2496ED?logo=docker)](https://github.com/cobanov/teslamate-mcp/pkgs/container/teslamate-mcp)
  [![Python](https://img.shields.io/badge/python-3.11%20%7C%203.12%20%7C%203.13-blue?logo=python&logoColor=white)](https://www.python.org/downloads/)
  [![License](https://img.shields.io/github/license/cobanov/teslamate-mcp)](LICENSE)
  [![Ruff](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/astral-sh/ruff/main/assets/badge/v2.json)](https://github.com/astral-sh/ruff)
  [![Archestra Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/cobanov/teslamate-mcp)](https://archestra.ai/mcp-catalog/cobanov__teslamate-mcp)

  </div>

  ## Özellikler

  - **20 araç** — 18 önceden tanımlı analiz sorgusu (batarya, şarj, sürüş, verimlilik, konumlar) artı `run_sql` ve `get_database_schema`
  - **6 prompt** — batarya sağlığı, sürüş özeti, şarj davranışı, anomali avı, hava durumu verimliliği ve hızlı durum raporu için tek tıklamalı iş akışları
  - **2 kaynak** — `teslamate://queries` ve `teslamate://queries/{name}` araç çağırmadan katalog taraması için
  - **Sağlamlaştırılmış `run_sql`** — PostgreSQL `READ ONLY` işlemi içinde `statement_timeout`, `lock_timeout` ve otomatik satır sınırı ile çalışır
  - **Canlı şema introspeksiyon** — `get_database_schema` çalışma zamanında `information_schema` okur; depoya işlenmemiş eski JSON yok
  - **İki taşıma, bir ikili** — yerel istemciler için `teslamate-mcp stdio`, uzak için `teslamate-mcp http`
  - **Bearer-token kimlik doğrulaması** zamanlama-güvenli karşılaştırma ile; yaşamasını kontrol etmek için `/health` probu
  - **`Decimal → float` JSON serileştirmesi** — dil modelleri sayıları görmek için, dizeler değil

  ## Gereksinimler

  - TeslaMate zaten PostgreSQL'e karşı çalışıyor
  - Yerel kurulum için Python 3.11+ veya uzak dağıtım için Docker

  ## Kurulum

  ```bash
  git clone https://github.com/cobanov/teslamate-mcp.git
  cd teslamate-mcp
  cp env.example .env
  # .env dosyasını düzenleyin — en azından DATABASE_URL'yi ayarlayın
  uv sync
  ```

  ## CLI

  `teslamate-mcp` konsol betiğinin dört alt komutu vardır:

  ```bash
  teslamate-mcp stdio                          # yerel (Cursor / Claude Desktop)
  teslamate-mcp http [--host] [--port]         # uzak (HTTP / SSE)
  teslamate-mcp gen-token                      # AUTH_TOKEN değeri üret
  teslamate-mcp list-tools                     # tanı: kayıtlı araçları listele
  ```

  `python -m teslamate_mcp <alt-komut>` da çalışır.

  ## Yerel kullanım (stdio)

  MCP istemcinizi stdio sunucusunu başlatacak şekilde yapılandırın. Cursor veya Claude Desktop için örnek:

  ```json
  {
    "mcpServers": {
      "teslamate": {
        "command": "uv",
        "args": ["--directory", "/path/to/teslamate-mcp", "run", "teslamate-mcp", "stdio"]
      }
    }
  }
  ```

  ## Uzak kullanım (Docker)

  ```bash
  cp env.example .env
  # DATABASE_URL'yi ve ideal olarak AUTH_TOKEN'ı ayarlayın
  docker compose up -d
  ```

  MCP endpoint'i `http://localhost:8888/mcp` adresindedir ve yaşamasını kontrol etmek için bir probe `http://localhost:8888/health` adresinde sunulur.

  Önceden derlenmiş çok-mimarilı bir görüntü (`linux/amd64`, `linux/arm64`) her etiketlenmiş sürümde GHCR'ye yayınlanır:

  ```bash
  docker run --rm -e DATABASE_URL=... -p 8888:8888 ghcr.io/cobanov/teslamate-mcp:latest
  ```

  ## Yapılandırma

  Tüm ayarlar ortam değişkenlerinden okunur (`.env` desteklenir). Yalnızca `DATABASE_URL` gereklidir.

  | Değişken                | Varsayılan  | Notlar                                                      |
  |-------------------------|-------------|-------------------------------------------------------------|
  | `DATABASE_URL`          | _gerekli_   | `postgresql://user:pass@host:5432/teslamate`                |
  | `AUTH_TOKEN`            | _boş_       | HTTP endpoint'inde bearer kimlik doğrulamasını etkinleştirir |
  | `HOST`                  | `0.0.0.0`   | HTTP bağlama ana bilgisayarı                                |
  | `PORT`                  | `8888`      | HTTP bağlama portu                                          |
  | `POOL_MIN_SIZE`         | `1`         | psycopg havuzu alt sınırı                                   |
  | `POOL_MAX_SIZE`         | `10`        | psycopg havuzu üst sınırı                                   |
  | `QUERY_TIMEOUT_MS`      | `5000`      | `run_sql` için `statement_timeout`                          |
  | `CUSTOM_SQL_ROW_LIMIT`  | `1000`      | `run_sql` bir tane sağlamadığında enjekte edilen LIMIT       |
  | `LOG_LEVEL`             | `INFO`      | Standart Python günlük seviyesi                             |
  | `DEBUG`                 | `false`     | Starlette hata ayıklama modu (üretimde kapalı tutun)        |

  Bir bearer token oluşturun:

  ```bash
  uv run teslamate-mcp gen-token
  ```

  ## Mevcut araçlar

  ### Önceden tanımlı (18)

  **Araç:** `get_basic_car_information`, `get_current_car_status`, `get_software_update_history`

  **Batarya ve sağlık:** `get_battery_health_summary`, `get_battery_degradation_over_time`, `get_daily_battery_usage_patterns`, `get_tire_pressure_weekly_trends`

  **Sürüş:** `get_monthly_driving_summary`, `get_daily_driving_patterns`, `get_longest_drives_by_distance`, `get_total_distance_and_efficiency`, `get_drive_summary_per_day`

  **Verimlilik:** `get_efficiency_by_month_and_temperature`, `get_average_efficiency_by_temperature`, `get_unusual_power_consumption`

  **Şarj ve konum:** `get_charging_by_location`, `get_all_charging_sessions_summary`, `get_most_visited_locations`

  ### Özel (2)

  - `get_database_schema` — geçerli TeslaMate şeması (sütun başına bir satır)
  - `run_sql(query)` — özel bir `SELECT` veya `WITH … SELECT` yürütün

  ## Yeni bir sorgu ekleme

  1. `src/teslamate_mcp/queries/your_query.sql` dosyasına bir SELECT ekleyin.
  2. Kardeş `your_query.toml` dosyasını ekleyin:

     ```toml
     name = "get_your_data"
     description = "Bunun ne döndürdüğü."
     ```

  3. Sunucuyu yeniden başlatın. Kayıt otomatik olarak alır.

  ## Geliştirme

  ```bash
  uv sync                          # geliştirme bağımlılıklarıyla yükle
  uv run ruff check src tests      # lint
  uv run ruff format src tests     # biçimlendir
  uv run pytest                    # testler (Docker yok ise Docker tabanlı entegrasyon testleri atlanır)
  ```

  ## Lisans

  MIT — [LICENSE](LICENSE) dosyasına bakın.

  ## Öne çıkanlarda

  <a href="https://mseep.ai/app/cobanov-teslamate-mcp">
    
  </a>
  &nbsp;
  <a href="https://glama.ai/mcp/servers/@cobanov/teslamate-mcp">
    
  </a>
---

<div align="center">

# TeslaMate MCP Server



A [Model Context Protocol](https://modelcontextprotocol.io/) server that exposes your [TeslaMate](https://github.com/teslamate-org/teslamate) PostgreSQL database to MCP-aware AI clients (Claude Desktop, Cursor, etc.) over either stdio or streamable HTTP.

[![CI](https://github.com/cobanov/teslamate-mcp/actions/workflows/ci.yml/badge.svg)](https://github.com/cobanov/teslamate-mcp/actions/workflows/ci.yml)
[![Release](https://img.shields.io/github/v/release/cobanov/teslamate-mcp?logo=github&sort=semver)](https://github.com/cobanov/teslamate-mcp/releases)
[![GHCR](https://img.shields.io/badge/ghcr.io-cobanov%2Fteslamate--mcp-2496ED?logo=docker)](https://github.com/cobanov/teslamate-mcp/pkgs/container/teslamate-mcp)
[![Python](https://img.shields.io/badge/python-3.11%20%7C%203.12%20%7C%203.13-blue?logo=python&logoColor=white)](https://www.python.org/downloads/)
[![License](https://img.shields.io/github/license/cobanov/teslamate-mcp)](LICENSE)
[![Ruff](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/astral-sh/ruff/main/assets/badge/v2.json)](https://github.com/astral-sh/ruff)
[![Archestra Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/cobanov/teslamate-mcp)](https://archestra.ai/mcp-catalog/cobanov__teslamate-mcp)

</div>

## Features

- **20 tools** — 18 predefined analytics queries (battery, charging, driving, efficiency, locations) plus `run_sql` and `get_database_schema`
- **6 prompts** — one-click workflows for battery health, driving summary, charging behaviour, anomaly hunting, weather efficiency, and a quick status report
- **2 resources** — `teslamate://queries` and `teslamate://queries/{name}` for catalog browsing without invoking a tool
- **Hardened `run_sql`** — runs inside a PostgreSQL `READ ONLY` transaction with `statement_timeout`, `lock_timeout`, and an automatic row cap
- **Live schema introspection** — `get_database_schema` reads `information_schema` at runtime; no stale JSON checked into the repo
- **Two transports, one binary** — `teslamate-mcp stdio` for local clients, `teslamate-mcp http` for remote
- **Bearer-token auth** with timing-safe comparison; `/health` probe for liveness checks
- **`Decimal → float` JSON serialization** so language models see numbers, not strings

## Requirements

- TeslaMate already running against PostgreSQL
- Python 3.11+ for a local install, or Docker for a remote deployment

## Install

```bash
git clone https://github.com/cobanov/teslamate-mcp.git
cd teslamate-mcp
cp env.example .env
# Edit .env — at minimum, set DATABASE_URL
uv sync
```

## CLI

The `teslamate-mcp` console script has four subcommands:

```bash
teslamate-mcp stdio                          # local (Cursor / Claude Desktop)
teslamate-mcp http [--host] [--port]         # remote (HTTP / SSE)
teslamate-mcp gen-token                      # produce an AUTH_TOKEN value
teslamate-mcp list-tools                     # diagnostic: list registered tools
```

`python -m teslamate_mcp <subcommand>` works too.

## Local use (stdio)

Configure your MCP client to launch the stdio server. Example for Cursor or Claude Desktop:

```json
{
  "mcpServers": {
    "teslamate": {
      "command": "uv",
      "args": ["--directory", "/path/to/teslamate-mcp", "run", "teslamate-mcp", "stdio"]
    }
  }
}
```

## Remote use (Docker)

```bash
cp env.example .env
# Set DATABASE_URL and ideally AUTH_TOKEN
docker compose up -d
```

The MCP endpoint is at `http://localhost:8888/mcp` and a liveness probe is exposed at `http://localhost:8888/health`.

A prebuilt multi-arch image (`linux/amd64`, `linux/arm64`) is also published to GHCR on every tagged release:

```bash
docker run --rm -e DATABASE_URL=... -p 8888:8888 ghcr.io/cobanov/teslamate-mcp:latest
```

## Configuration

All settings are read from environment variables (`.env` supported). Only `DATABASE_URL` is required.

| Variable                | Default     | Notes                                                       |
|-------------------------|-------------|-------------------------------------------------------------|
| `DATABASE_URL`          | _required_  | `postgresql://user:pass@host:5432/teslamate`                |
| `AUTH_TOKEN`            | _empty_     | Enables bearer auth on the HTTP endpoint                    |
| `HOST`                  | `0.0.0.0`   | HTTP bind host                                              |
| `PORT`                  | `8888`      | HTTP bind port                                              |
| `POOL_MIN_SIZE`         | `1`         | psycopg pool floor                                          |
| `POOL_MAX_SIZE`         | `10`        | psycopg pool ceiling                                        |
| `QUERY_TIMEOUT_MS`      | `5000`      | `statement_timeout` for `run_sql`                           |
| `CUSTOM_SQL_ROW_LIMIT`  | `1000`      | LIMIT injected when `run_sql` doesn't supply one            |
| `LOG_LEVEL`             | `INFO`      | Standard Python log level                                   |
| `DEBUG`                 | `false`     | Starlette debug mode (keep off in production)               |

Generate a bearer token:

```bash
uv run teslamate-mcp gen-token
```

## Available tools

### Predefined (18)

**Vehicle:** `get_basic_car_information`, `get_current_car_status`, `get_software_update_history`

**Battery & health:** `get_battery_health_summary`, `get_battery_degradation_over_time`, `get_daily_battery_usage_patterns`, `get_tire_pressure_weekly_trends`

**Driving:** `get_monthly_driving_summary`, `get_daily_driving_patterns`, `get_longest_drives_by_distance`, `get_total_distance_and_efficiency`, `get_drive_summary_per_day`

**Efficiency:** `get_efficiency_by_month_and_temperature`, `get_average_efficiency_by_temperature`, `get_unusual_power_consumption`

**Charging & location:** `get_charging_by_location`, `get_all_charging_sessions_summary`, `get_most_visited_locations`

### Custom (2)

- `get_database_schema` — current TeslaMate schema (one row per column)
- `run_sql(query)` — execute a custom `SELECT` or `WITH … SELECT`

## Adding a new query

1. Drop a SELECT into `src/teslamate_mcp/queries/your_query.sql`.
2. Add a sibling `your_query.toml`:

   ```toml
   name = "get_your_data"
   description = "What this returns."
   ```

3. Restart the server. The registry picks it up automatically.

## Development

```bash
uv sync                          # install with dev deps
uv run ruff check src tests      # lint
uv run ruff format src tests     # format
uv run pytest                    # tests (Docker-backed integration tests skip if Docker is absent)
```

## License

MIT — see [LICENSE](LICENSE).

## Featured in

<a href="https://mseep.ai/app/cobanov-teslamate-mcp">
  
</a>
&nbsp;
<a href="https://glama.ai/mcp/servers/@cobanov/teslamate-mcp">
  
</a>
