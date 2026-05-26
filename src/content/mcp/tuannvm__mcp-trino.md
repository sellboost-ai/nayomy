---
name: "tuannvm/mcp-trino"
description: "A Go implementation of a Model Context Protocol (MCP) server for Trino"
category: "Databases"
repo: "tuannvm/mcp-trino"
stars: 107
url: "https://github.com/tuannvm/mcp-trino"
body_length: 14776
license: "MIT"
language: "Go"
homepage: "https://docs.tuannvm.com/mcp-trino"
body_tr: |-
  # Go'da Trino MCP Sunucusu

  Trino için Go'da uygulanmış yüksek performanslı bir Model Context Protocol (MCP) sunucusu. Bu proje, AI asistanlarının Trino'nun dağıtılmış SQL sorgu motoruyla standardlaştırılmış MCP araçları aracılığıyla sorunsuz bir şekilde etkileşim kurmasını sağlar.

  [![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/tuannvm/mcp-trino/build.yml?branch=main&label=CI%2FCD&logo=github)](https://github.com/tuannvm/mcp-trino/actions/workflows/build.yml)
  [![Go Version](https://img.shields.io/github/go-mod/go-version/tuannvm/mcp-trino?logo=go)](https://github.com/tuannvm/mcp-trino/blob/main/go.mod)
  [![Trivy Scan](https://img.shields.io/github/actions/workflow/status/tuannvm/mcp-trino/build.yml?branch=main&label=Trivy%20Security%20Scan&logo=aquasec)](https://github.com/tuannvm/mcp-trino/actions/workflows/build.yml)
  [![SLSA 3](https://slsa.dev/images/gh-badge-level3.svg)](https://slsa.dev)
  [![Go Report Card](https://goreportcard.com/badge/github.com/tuannvm/mcp-trino)](https://goreportcard.com/report/github.com/tuannvm/mcp-trino)
  [![Go Reference](https://pkg.go.dev/badge/github.com/tuannvm/mcp-trino.svg)](https://pkg.go.dev/github.com/tuannvm/mcp-trino)
  [![Docker Image](https://img.shields.io/github/v/release/tuannvm/mcp-trino?sort=semver&label=GHCR&logo=docker)](https://github.com/tuannvm/mcp-trino/pkgs/container/mcp-trino)
  [![GitHub Release](https://img.shields.io/github/v/release/tuannvm/mcp-trino?sort=semver)](https://github.com/tuannvm/mcp-trino/releases/latest)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/tuannvm/mcp-trino)](https://archestra.ai/mcp-catalog/tuannvm__mcp-trino)

  ## Genel Bakış

  Bu proje, Trino için bir Model Context Protocol (MCP) sunucusu Go'da uygulamaktadır. AI asistanlarının Trino'nun dağıtılmış SQL sorgu motoruna standardlaştırılmış MCP araçları aracılığıyla erişmesini sağlar.

  Trino (eski adıyla PrestoSQL), büyük veri setleri üzerinde hızlı analitiği için tasarlanmış güçlü bir dağıtılmış SQL sorgu motorudur.

  ## Mimari

  ```mermaid
  graph TB
      subgraph "AI Clients"
          CC[Claude Code]
          CD[Claude Desktop]
          CR[Cursor]
          WS[Windsurf]
          CW[ChatWise]
      end
      
      subgraph "Authentication (Optional)"
          OP[OAuth Provider<br/>Okta/Google/Azure AD]
          JWT[JWT Tokens]
      end
      
      subgraph "MCP Server (mcp-trino)"
          HTTP[HTTP Transport<br/>/mcp endpoint]
          STDIO[STDIO Transport]
          AUTH[OAuth Middleware]
          TOOLS[MCP Tools<br/>• execute_query<br/>• list_catalogs<br/>• list_schemas<br/>• list_tables<br/>• get_table_schema<br/>• explain_query]
      end
      
      subgraph "Data Layer"
          TRINO[Trino Cluster<br/>Distributed SQL Engine]
          CATALOGS[Data Sources<br/>• PostgreSQL<br/>• MySQL<br/>• S3/Hive<br/>• BigQuery<br/>• MongoDB]
      end
      
      %% Connections
      CC -.->|OAuth Flow| OP
      OP -.->|JWT Token| JWT
      
      CC -->|HTTP + JWT| HTTP
      CD -->|STDIO| STDIO
      CR -->|HTTP + JWT| HTTP
      WS -->|STDIO| STDIO
      CW -->|HTTP + JWT| HTTP
      
      HTTP --> AUTH
      AUTH -->|Validated| TOOLS
      STDIO --> TOOLS
      
      TOOLS -->|SQL Queries| TRINO
      TRINO --> CATALOGS
      
      %% Styling
      classDef client fill:#e1f5fe
      classDef auth fill:#f3e5f5
      classDef server fill:#e8f5e8
      classDef data fill:#fff3e0
      
      class CC,CD,CR,WS,CW client
      class OP,JWT auth
      class HTTP,STDIO,AUTH,TOOLS server
      class TRINO,CATALOGS data
  ```

  **Ana Bileşenler:**

  - **AI İstemcileri**: Çeşitli MCP uyumlu uygulamalar
  - **Kimlik Doğrulama**: OAuth 2.0 isteğe bağlı OIDC sağlayıcılarla
  - **MCP Sunucusu**: Çift transport desteği olan Go tabanlı sunucu
  - **CLI Modu**: Doğrudan Trino erişimi için etkileşimli SQL kabuğu (psql benzeri)
  - **Veri Katmanı**: Birden fazla veri kaynağına bağlanan Trino kümesi

  ## Özellikler

  - ✅ **Çift Mod**: Hem MCP sunucusu HEMDE etkileşimli CLI olarak çalışır
    - **CLI Modu**: Doğrudan Trino erişimi için psql benzeri etkileşimli SQL kabuğu
    - **MCP Modu**: AI asistan entegrasyonu için tam MCP sunucusu
  - ✅ Go'da MCP sunucusu uygulaması
  - ✅ MCP araçları aracılığıyla Trino SQL sorgusu yürütme
  - ✅ Katalog, schema ve tablo keşfi
  - ✅ Docker konteyner desteği
  - ✅ STDIO ve HTTP transport desteği
  - ✅ [oauth-mcp-proxy](https://github.com/tuannvm/oauth-mcp-proxy) kütüphanesi aracılığıyla OAuth 2.1 kimlik doğrulaması
    - **4 Sağlayıcı**: HMAC, Okta, Google, Azure AD
    - **Native mod**: İstemci OAuth'u doğrudan işler (sunucu tarafında sıfır sır)
    - **Proxy mod**: Sunucu basit istemciler için OAuth akışını proxy'ler
    - **Üretime hazır**: Token caching, PKCE, derinlemesine güvenlik
    - **Yeniden kullanılabilir**: OAuth kütüphanesi herhangi bir Go MCP sunucusu için kullanılabilir
  - ✅ JWT kimlik doğrulamasıyla StreamableHTTP desteği (SSE'den yükseltildi)
  - ✅ SSE endpoint'leriyle geriye dönük uyumluluk
  - ✅ Cursor, Claude Desktop, Windsurf, ChatWise ve herhangi bir MCP uyumlu istemciyle uyumlu.
  - ✅ Kullanıcı Kimlik İzleme:
    - **Sorgu Atlaması** (otomatik): Sorguları `X-Trino-Client-Tags/Info` başlıkları aracılığıyla OAuth kullanıcısıyla etiketler
    - **Kullanıcı Kimliğine Bürünme** (opsiyonel): `X-Trino-User` başlığı aracılığıyla OAuth kullanıcısı olarak sorguları yürütür

  ## Kurulum & Hızlı Başlangıç

  **Kurun:**

  ```bash
  # Homebrew
  brew install tuannvm/mcp/mcp-trino

  # Veya tek satırlı (macOS/Linux)
  curl -fsSL https://raw.githubusercontent.com/tuannvm/mcp-trino/main/install.sh | bash
  ```

  **Çalıştırın (Yerel Geliştirme):**

  ```bash
  export TRINO_HOST=localhost TRINO_USER=trino
  mcp-trino
  ```

  OAuth ile üretime hazır dağıtım için [Dağıtım Rehberi](docs/deployment.md) ve [OAuth Mimarisi](docs/oauth.md) başlıklarına bakın.

  ## CLI Modu

  mcp-trino, `psql` veya Trino CLI'ya benzer şekilde etkileşimli CLI olarak kullanılabilir:

  ```bash
  # Etkileşimli REPL modu
  mcp-trino --interactive

  # Bir sorguyu doğrudan yürütün
  mcp-trino query "SELECT * FROM my_table LIMIT 10"

  # Katalogları, şemaları, tabloları listeleyin
  mcp-trino catalogs
  mcp-trino schemas my_catalog
  mcp-trino tables my_catalog my_schema

  # Bir tabloyu açıklayın
  mcp-trino describe my_catalog.my_schema.my_table

  # Bir sorguyu açıklayın
  mcp-trino explain "SELECT COUNT(*) FROM my_table"

  # Çıktı formatları
  mcp-trino --format json query "SELECT 1"
  mcp-trino --format csv query "SELECT 1"
  mcp-trino --format table query "SELECT 1"  # varsayılan
  ```

  ### Yerleşik Yardım

  Her komutun yapılandırılmış, LLM dostu yardım çıktısı vardır:

  ```bash
  # Tüm komutları, bayrakları, örnekleri ve ortam değişkenlerini gösteren ana yardım
  mcp-trino --help

  # Alt komuta özgü yardım
  mcp-trino query --help
  mcp-trino describe --help
  ```

  Yardım çıktısı Unix man-sayfası kurallarını takip eder: NAME, SYNOPSIS, DESCRIPTION, COMMANDS, FLAGS, EXAMPLES, ENVIRONMENT ve CONFIGURATION bölümleri.

  ### Çıkış Kodları

  | Kod | Anlam |
  |-----|--------|
  | 0 | Başarı |
  | 1 | Çalışma zamanı hatası (bağlantı başarısız, sorgu hatası, vb.) |
  | 2 | Kullanım hatası (bilinmeyen komut, geçersiz bayraklar, eksik argümanlar) |

  ### Adlandırılmış Profiller

  mcp-trino, Trino ortamları arasında kolay geçiş için adlandırılmış bağlantı profillerini destekler.

  **Yapılandırma Dosyası** — YAML (`~/.config/trino/config.yaml`) ve JSON (`~/.config/trino/config.json`) ikisini destekler:

  ```yaml
  # ~/.config/trino/config.yaml
  current: prod

  profiles:
    prod:
      host: trino.example.com
      port: 443
      user: prod_user
      password: prod_password
      catalog: hive
      schema: analytics
      ssl:
        enabled: true
        insecure: false

    dev:
      host: localhost
      port: 8080
      user: trino
      catalog: memory
      schema: default

    staging:
      host: staging-trino.example.com
      port: 443
      user: staging_user

  output:
    format: table
  ```

  Veya eşdeğer olarak JSON'da:

  ```json
  {
    "current": "prod",
    "profiles": {
      "prod": {
        "host": "trino.example.com",
        "port": 443,
        "user": "prod_user",
        "catalog": "hive",
        "ssl": { "enabled": true }
      },
      "dev": {
        "host": "localhost",
        "port": 8080,
        "user": "trino"
      }
    },
    "output": { "format": "table" }
  }
  ```

  Her iki dosya mevcut olduğunda, `config.json` önceliklidir. Yeni konfigurasyonlar varsayılan olarak JSON'dur.

  **Profil Yönetimi Komutları:**

  ```bash
  # Tüm profilleri listeleyin
  mcp-trino config profile list

  # Varsayılan profili ayarlayın
  mcp-trino config profile use prod

  # Profil ayrıntılarını gösterin
  mcp-trino config profile show staging

  # Belirli bir profil kullanın (yapılandırma dosyasını geçersiz kılar)
  mcp-trino --profile dev catalogs
  ```

  **Yapılandırma Önceliği** (en yüksekten en düşüğe):
  1. CLI bayrakları (`--host`, `--port`, vb.)
  2. `--profile` bayrağı
  3. `TRINO_PROFILE` ortam değişkeni
  4. Yapılandırma dosyasında `current` alanı
  5. `default` profil geri dönüşü
  6. Ortam değişkenleri (`TRINO_HOST`, vb.)

  **Ortam Değişkenleri** (en düşük öncelik - profiller ve bayraklar tarafından geçersiz kılınır):

  ```bash
  export TRINO_HOST=trino.example.com
  export TRINO_PORT=443
  export TRINO_USER=myuser
  export TRINO_PASSWORD=mypass
  export TRINO_CATALOG=hive
  export TRINO_SCHEMA=analytics
  export TRINO_SSL=true
  ```

  **Sır Yönetimi** (önerilen):

  Sırlar yalnızca ortam değişkenlerinden yüklenir. Başlangıç zamanında Unix piping aracılığıyla bir sırlar CLI kullanarak bunları enjekte edin — uygulama asla kasanıza dokunmaz:

  ```bash
  # 1Password CLI — .env dosyasında op:// referanslarını çözer
  op run --env-file=.env -- mcp-trino

  # Veya satır içi değişken başına
  TRINO_PASSWORD=$(op read 'op://Engineering/Trino/password') mcp-trino
  ```

  [docs/secrets.md](docs/secrets.md) dosyasına bakın 1Password, Vault ve Kubernetes desenleri için, ve güvenlik nüansları (shell geçmişi, işlem listesi ve ortam değişkeni sızıntısı) için.

  **REPL Meta-Komutları** (etkileşimli modda):
  - `\help` - Yardımı göster
  - `\quit`, `\exit`, `\q` - REPL'den çık
  - `\history` - Komut geçmişini göster
  - `\catalogs` - Tüm katalogları listele
  - `\schemas [catalog]` - Şemaları listele
  - `\tables [catalog schema]` - Tabloları listele
  - `\describe <table>` - Tabloyu açıkla
  - `\format <table|json|csv>` - Çıktı formatını değiştir

  ## Kullanım

  **Desteklenen İstemciler:** Claude Desktop, Claude Code, Cursor, Windsurf, ChatWise

  **Mevcut Araçlar:** `execute_query`, `list_catalogs`, `list_schemas`, `list_tables`, `get_table_schema`, `explain_query`

  İstemci entegrasyonu ve araç dokümantasyonu için [Entegrasyon Rehberi](docs/integrations.md) ve [Araçlar Referansı](docs/tools.md) başlıklarına bakın.

  ## Yapılandırma

  **Temel Değişkenler:** `TRINO_HOST`, `TRINO_USER`, `TRINO_SCHEME`, `MCP_TRANSPORT`, `OAUTH_PROVIDER`

  **Sır Yönetimi:** Sırları işlem ortamı aracılığıyla enjekte edin — `mcp-trino` bunları doğrudan okur. [docs/secrets.md](docs/secrets.md) dosyasına bakın 1Password, Vault ve Kubernetes tarifler için.

  ```bash
  # 1Password (biyometrik kapsama, disk yazıları sıfır)
  op run --env-file=.env -- mcp-trino

  # Vault (vault-agent veya CLI aracılığıyla)
  TRINO_PASSWORD=$(vault kv get -field=password secret/mcp-trino) mcp-trino

  # Kubernetes: Helm chart değerlerinde standart Secret → envFrom kullanın
  ```

  **OAuth Yapılandırması:**

  ```bash
  # Native mod (en güvenli - sunucu tarafında sıfır sır)
  export OAUTH_ENABLED=true OAUTH_MODE=native OAUTH_PROVIDER=okta
  export OIDC_ISSUER=https://company.okta.com OIDC_AUDIENCE=https://mcp-server.com

  # Proxy mod (merkezi kimlik bilgileri yönetimi)
  export OAUTH_MODE=proxy OIDC_CLIENT_ID=app-id OIDC_CLIENT_SECRET=secret
  export OAUTH_REDIRECT_URI=https://mcp-server.com/oauth/callback  # Sabit mod (yalnızca localhost)
  export OAUTH_REDIRECT_URI=https://app1.com/cb,https://app2.com/cb  # İzin listesi modu
  export JWT_SECRET=$(openssl rand -hex 32)  # Multi-pod dağıtımlar için gerekli
  ```

  **Performans Optimizasyonu:**

  ```bash
  # AI'ı yalnızca belirli şemaları odaklanmasını sağlayın (10-20x performans iyileşmesi)
  export TRINO_ALLOWED_SCHEMAS="hive.analytics,hive.marts,hive.reporting"
  ```

  **Kullanıcı Kimlik İzleme:**

  ```bash
  # Sorgu Atlaması OAuth etkinleştirildiğinde OTOMATİKTİR
  # Sorgular X-Trino-Client-Tags ve X-Trino-Client-Info başlıklarıyla etiketlenir

  # Tam kimlik bürünme için (Trino kullanıcı izinlerini zorunlu kılar):
  export TRINO_ENABLE_IMPERSONATION=true
  export TRINO_IMPERSONATION_FIELD=email  # Seçenekler: username, email, subject
  ```

  Tam yapılandırma için [Dağıtım Rehberi](docs/deployment.md), [OAuth Rehberi](docs/oauth.md), [İzin Listeleri Rehberi](docs/allowlists.md) ve [Kullanıcı Kimlik Rehberi](docs/impersonation.md) başlıklarına bakın.

  ## OAuth Uygulaması

  mcp-trino, [oauth-mcp-proxy](https://github.com/tuannvm/oauth-mcp-proxy) — Go MCP sunucuları için bağımsız OAuth 2.1 kütüphanesi kullanır.

  **Neden ayrı bir kütüphane?**
  - ✅ Herhangi bir Go MCP sunucusu arasında yeniden kullanılabilir
  - ✅ Bağımsız test ve sürüm yönetimi
  - ✅ Adanmış dokümantasyon ve örnekler
  - ✅ Topluluk tarafından yönetilen OAuth uygulaması

  **OAuth ayrıntıları için:**
  - [oauth-mcp-proxy Dokümantasyonu](https://github.com/tuannvm/oauth-mcp-proxy#readme) - Tam OAuth rehberi
  - [Sağlayıcı Kurulum Rehberleri](https://github.com/tuannvm/oauth-mcp-proxy/tree/main/docs/providers) - Okta, Google, Azure AD
  - [Güvenlik En İyi Uygulamaları](https://github.com/tuannvm/oauth-mcp-proxy/blob/main/docs/SECURITY.md) - Üretim güvenliği

  ## Katkıda Bulunma

  Katkılar memnuniyetle karşılanır! Lütfen bir Pull Request göndermekten çekinmeyin.

  ## Lisans

  Bu proje MIT Lisansı altında lisanslanmıştır - ayrıntılar için LICENSE dosyasına bakın.

  ## İlgili Projeler

  - **[oauth-mcp-proxy](https://github.com/tuannvm/oauth-mcp-proxy)** — mcp-trino tarafından kullanılan OAuth 2.1 kimlik doğrulama kütüphanesi (herhangi bir Go MCP sunucusu için yeniden kullanılabilir)

  ## CI/CD ve Yayınlar

  Bu proje, sürekli entegrasyon için GitHub Actions ve otomatik yayınlar için GoReleaser kullanır.

  ### Sürekli Entegrasyon Kontrolleri

  CI pipeline'ı, tüm PR'ler ve main branch'e yapılan commits üzerinde aşağıdaki kontrolleri gerçekleştirir:

  #### Kod Kalitesi

  - **Linting**: golangci-lint kullanarak ortak kod sorunları ve stil ihlallerini kontrol etme
  - **Go Module Doğrulaması**: go.mod ve go.sum'ın düzgün bir şekilde bakımından emin olma
  - **Biçimlendirme**: Kodun gofmt ile düzgün biçimlendirildiğini doğrulama

  #### Güvenlik

  - **Güvenlik Açığı Taraması**: Bağımlılıklarda bilinen güvenlik açıklarını kontrol etmek için govulncheck kullanma
  - **Bağımlılık Taraması**: Bağımlılıklarda güvenlik açıklarını taramak için Trivy kullanma (CRITICAL, HIGH ve MEDIUM)
  - **SBOM Oluşturma**: Bağımlılık takibi için Yazılım Malzeme Listesi oluşturma
  - **SLSA Kanıtı**: Tedarik zinciri güvenliği için doğrulanabilir derleme kanıtı oluşturma

  #### Test Etme

  - **Birim Testleri**: Yarışma algılaması ve kod kapsamı raporlamasıyla testleri çalıştırma
  - **Derleme Doğrulaması**: Kod tabanının başarıyla derlendiğinden emin olma

  #### CI/CD Güvenliği

  - **En Az Ayrıcalık**: İş akışları minimum gerekli izinlerle çalışır
  - **Sabitlenmiş Sürümler**: Tüm GitHub Actions tedarik zinciri saldırılarını önlemek için belirli sürümleri kullanır
  - **Bağımlılık Güncellemeleri**: Dependabot aracılığıyla otomatik bağımlılık güncellemeleri

  ### Yayın Süreci

  Değişiklikler main branch'e birleştirildiğinde:

  1. CI kontrolleri kod kalitesi ve güvenliği doğrulamak için çalıştırılır
  2. Başarılı olursa, yeni bir yayın otomatik olarak aşağıdakilerle oluşturulur:
     - Commit mesajlarına dayanan anlamsal versiyonlandırma
     - Birden fazla platform için ikili derlemeler
     - GitHub Container Registry'ye Docker görüntüsü yayınlama
     - SBOM ve kanıt attestation
---

# Trino MCP Server in Go

A high-performance Model Context Protocol (MCP) server for Trino implemented in Go. This project enables AI assistants to seamlessly interact with Trino's distributed SQL query engine through standardized MCP tools.

[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/tuannvm/mcp-trino/build.yml?branch=main&label=CI%2FCD&logo=github)](https://github.com/tuannvm/mcp-trino/actions/workflows/build.yml)
[![Go Version](https://img.shields.io/github/go-mod/go-version/tuannvm/mcp-trino?logo=go)](https://github.com/tuannvm/mcp-trino/blob/main/go.mod)
[![Trivy Scan](https://img.shields.io/github/actions/workflow/status/tuannvm/mcp-trino/build.yml?branch=main&label=Trivy%20Security%20Scan&logo=aquasec)](https://github.com/tuannvm/mcp-trino/actions/workflows/build.yml)
[![SLSA 3](https://slsa.dev/images/gh-badge-level3.svg)](https://slsa.dev)
[![Go Report Card](https://goreportcard.com/badge/github.com/tuannvm/mcp-trino)](https://goreportcard.com/report/github.com/tuannvm/mcp-trino)
[![Go Reference](https://pkg.go.dev/badge/github.com/tuannvm/mcp-trino.svg)](https://pkg.go.dev/github.com/tuannvm/mcp-trino)
[![Docker Image](https://img.shields.io/github/v/release/tuannvm/mcp-trino?sort=semver&label=GHCR&logo=docker)](https://github.com/tuannvm/mcp-trino/pkgs/container/mcp-trino)
[![GitHub Release](https://img.shields.io/github/v/release/tuannvm/mcp-trino?sort=semver)](https://github.com/tuannvm/mcp-trino/releases/latest)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/tuannvm/mcp-trino)](https://archestra.ai/mcp-catalog/tuannvm__mcp-trino)

## Overview

This project implements a Model Context Protocol (MCP) server for Trino in Go. It enables AI assistants to access Trino's distributed SQL query engine through standardized MCP tools.

Trino (formerly PrestoSQL) is a powerful distributed SQL query engine designed for fast analytics on large datasets.

## Architecture

```mermaid
graph TB
    subgraph "AI Clients"
        CC[Claude Code]
        CD[Claude Desktop]
        CR[Cursor]
        WS[Windsurf]
        CW[ChatWise]
    end
    
    subgraph "Authentication (Optional)"
        OP[OAuth Provider<br/>Okta/Google/Azure AD]
        JWT[JWT Tokens]
    end
    
    subgraph "MCP Server (mcp-trino)"
        HTTP[HTTP Transport<br/>/mcp endpoint]
        STDIO[STDIO Transport]
        AUTH[OAuth Middleware]
        TOOLS[MCP Tools<br/>• execute_query<br/>• list_catalogs<br/>• list_schemas<br/>• list_tables<br/>• get_table_schema<br/>• explain_query]
    end
    
    subgraph "Data Layer"
        TRINO[Trino Cluster<br/>Distributed SQL Engine]
        CATALOGS[Data Sources<br/>• PostgreSQL<br/>• MySQL<br/>• S3/Hive<br/>• BigQuery<br/>• MongoDB]
    end
    
    %% Connections
    CC -.->|OAuth Flow| OP
    OP -.->|JWT Token| JWT
    
    CC -->|HTTP + JWT| HTTP
    CD -->|STDIO| STDIO
    CR -->|HTTP + JWT| HTTP
    WS -->|STDIO| STDIO
    CW -->|HTTP + JWT| HTTP
    
    HTTP --> AUTH
    AUTH -->|Validated| TOOLS
    STDIO --> TOOLS
    
    TOOLS -->|SQL Queries| TRINO
    TRINO --> CATALOGS
    
    %% Styling
    classDef client fill:#e1f5fe
    classDef auth fill:#f3e5f5
    classDef server fill:#e8f5e8
    classDef data fill:#fff3e0
    
    class CC,CD,CR,WS,CW client
    class OP,JWT auth
    class HTTP,STDIO,AUTH,TOOLS server
    class TRINO,CATALOGS data
```

**Key Components:**

- **AI Clients**: Various MCP-compatible applications
- **Authentication**: Optional OAuth 2.0 with OIDC providers
- **MCP Server**: Go-based server with dual transport support
- **CLI Mode**: Interactive SQL shell for direct Trino access (psql-like)
- **Data Layer**: Trino cluster connecting to multiple data sources

## Features

- ✅ **Dual Mode**: Works as both MCP server AND interactive CLI
  - **CLI Mode**: psql-like interactive SQL shell for direct Trino access
  - **MCP Mode**: Full MCP server for AI assistant integration
- ✅ MCP server implementation in Go
- ✅ Trino SQL query execution through MCP tools
- ✅ Catalog, schema, and table discovery
- ✅ Docker container support
- ✅ Supports both STDIO and HTTP transports
- ✅ OAuth 2.1 authentication via [oauth-mcp-proxy](https://github.com/tuannvm/oauth-mcp-proxy) library
  - **4 Providers**: HMAC, Okta, Google, Azure AD
  - **Native mode**: Client handles OAuth directly (zero server-side secrets)
  - **Proxy mode**: Server proxies OAuth flow for simple clients
  - **Production-ready**: Token caching, PKCE, defense-in-depth security
  - **Reusable**: OAuth library available for any Go MCP server
- ✅ StreamableHTTP support with JWT authentication (upgraded from SSE)
- ✅ Backward compatibility with SSE endpoints
- ✅ Compatible with Cursor, Claude Desktop, Windsurf, ChatWise, and any MCP-compatible clients.
- ✅ User Identity Tracking:
  - **Query Attribution** (automatic): Tags queries with OAuth user via `X-Trino-Client-Tags/Info` headers
  - **User Impersonation** (opt-in): Execute queries as OAuth user via `X-Trino-User` header

## Installation & Quick Start

**Install:**

```bash
# Homebrew
brew install tuannvm/mcp/mcp-trino

# Or one-liner (macOS/Linux)
curl -fsSL https://raw.githubusercontent.com/tuannvm/mcp-trino/main/install.sh | bash
```

**Run (Local Development):**

```bash
export TRINO_HOST=localhost TRINO_USER=trino
mcp-trino
```

For production deployment with OAuth, see [Deployment Guide](docs/deployment.md) and [OAuth Architecture](docs/oauth.md).

## CLI Mode

mcp-trino can be used as an interactive CLI similar to `psql` or the Trino CLI:

```bash
# Interactive REPL mode
mcp-trino --interactive

# Execute a query directly
mcp-trino query "SELECT * FROM my_table LIMIT 10"

# List catalogs, schemas, tables
mcp-trino catalogs
mcp-trino schemas my_catalog
mcp-trino tables my_catalog my_schema

# Describe a table
mcp-trino describe my_catalog.my_schema.my_table

# Explain a query
mcp-trino explain "SELECT COUNT(*) FROM my_table"

# Output formats
mcp-trino --format json query "SELECT 1"
mcp-trino --format csv query "SELECT 1"
mcp-trino --format table query "SELECT 1"  # default
```

### Built-in Help

Every command has structured, LLM-friendly help output:

```bash
# Main help with all commands, flags, examples, and environment variables
mcp-trino --help

# Per-subcommand help
mcp-trino query --help
mcp-trino describe --help
```

Help output follows Unix man-page conventions with sections: NAME, SYNOPSIS, DESCRIPTION, COMMANDS, FLAGS, EXAMPLES, ENVIRONMENT, and CONFIGURATION.

### Exit Codes

| Code | Meaning |
|------|---------|
| 0 | Success |
| 1 | Runtime error (connection failed, query error, etc.) |
| 2 | Usage error (unknown command, invalid flags, missing arguments) |

### Named Profiles

mcp-trino supports named connection profiles for easy switching between Trino environments.

**Configuration File** — supports both YAML (`~/.config/trino/config.yaml`) and JSON (`~/.config/trino/config.json`):

```yaml
# ~/.config/trino/config.yaml
current: prod

profiles:
  prod:
    host: trino.example.com
    port: 443
    user: prod_user
    password: prod_password
    catalog: hive
    schema: analytics
    ssl:
      enabled: true
      insecure: false

  dev:
    host: localhost
    port: 8080
    user: trino
    catalog: memory
    schema: default

  staging:
    host: staging-trino.example.com
    port: 443
    user: staging_user

output:
  format: table
```

Or equivalently in JSON:

```json
{
  "current": "prod",
  "profiles": {
    "prod": {
      "host": "trino.example.com",
      "port": 443,
      "user": "prod_user",
      "catalog": "hive",
      "ssl": { "enabled": true }
    },
    "dev": {
      "host": "localhost",
      "port": 8080,
      "user": "trino"
    }
  },
  "output": { "format": "table" }
}
```

When both files exist, `config.json` takes precedence. New configs default to JSON.

**Profile Management Commands:**

```bash
# List all profiles
mcp-trino config profile list

# Set default profile
mcp-trino config profile use prod

# Show profile details
mcp-trino config profile show staging

# Use a specific profile (overrides config file)
mcp-trino --profile dev catalogs
```

**Configuration Precedence** (highest to lowest):
1. CLI flags (`--host`, `--port`, etc.)
2. `--profile` flag
3. `TRINO_PROFILE` environment variable
4. `current` field in config file
5. `default` profile fallback
6. Environment variables (`TRINO_HOST`, etc.)

**Environment Variables** (lowest priority - overridden by profiles and flags):

```bash
export TRINO_HOST=trino.example.com
export TRINO_PORT=443
export TRINO_USER=myuser
export TRINO_PASSWORD=mypass
export TRINO_CATALOG=hive
export TRINO_SCHEMA=analytics
export TRINO_SSL=true
```

**Secret Management** (recommended):

Secrets are loaded purely from environment variables. Use a secrets CLI to inject them via Unix piping at launch time — the app never touches your vault:

```bash
# 1Password CLI — resolves op:// references in an env file
op run --env-file=.env -- mcp-trino

# Or inline per-variable
TRINO_PASSWORD=$(op read 'op://Engineering/Trino/password') mcp-trino
```

See [docs/secrets.md](docs/secrets.md) for 1Password, Vault, and Kubernetes patterns, and for security nuances (shell-history, process-list, and env-var leakage).

**REPL Meta-Commands** (in interactive mode):
- `\help` - Show help
- `\quit`, `\exit`, `\q` - Exit REPL
- `\history` - Show command history
- `\catalogs` - List all catalogs
- `\schemas [catalog]` - List schemas
- `\tables [catalog schema]` - List tables
- `\describe <table>` - Describe table
- `\format <table|json|csv>` - Change output format

## Usage

**Supported Clients:** Claude Desktop, Claude Code, Cursor, Windsurf, ChatWise

**Available Tools:** `execute_query`, `list_catalogs`, `list_schemas`, `list_tables`, `get_table_schema`, `explain_query`

For client integration and tool documentation, see [Integration Guide](docs/integrations.md) and [Tools Reference](docs/tools.md).

## Configuration

**Key Variables:** `TRINO_HOST`, `TRINO_USER`, `TRINO_SCHEME`, `MCP_TRANSPORT`, `OAUTH_PROVIDER`

**Secret Management:** Inject secrets through the process environment — `mcp-trino` reads them directly. See [docs/secrets.md](docs/secrets.md) for 1Password, Vault, and Kubernetes recipes.

```bash
# 1Password (biometric-gated, zero disk writes)
op run --env-file=.env -- mcp-trino

# Vault (via vault-agent or CLI)
TRINO_PASSWORD=$(vault kv get -field=password secret/mcp-trino) mcp-trino

# Kubernetes: use standard Secret → envFrom in the Helm chart values
```

**OAuth Configuration:**

```bash
# Native mode (most secure - zero server-side secrets)
export OAUTH_ENABLED=true OAUTH_MODE=native OAUTH_PROVIDER=okta
export OIDC_ISSUER=https://company.okta.com OIDC_AUDIENCE=https://mcp-server.com

# Proxy mode (centralized credential management)
export OAUTH_MODE=proxy OIDC_CLIENT_ID=app-id OIDC_CLIENT_SECRET=secret
export OAUTH_REDIRECT_URI=https://mcp-server.com/oauth/callback  # Fixed mode (localhost-only)
export OAUTH_REDIRECT_URI=https://app1.com/cb,https://app2.com/cb  # Allowlist mode
export JWT_SECRET=$(openssl rand -hex 32)  # Required for multi-pod deployments
```

**Performance Optimization:**

```bash
# Focus AI on specific schemas only (10-20x performance improvement)
export TRINO_ALLOWED_SCHEMAS="hive.analytics,hive.marts,hive.reporting"
```

**User Identity Tracking:**

```bash
# Query Attribution is AUTOMATIC when OAuth is enabled
# Queries are tagged with X-Trino-Client-Tags and X-Trino-Client-Info headers

# For full impersonation (Trino enforces user permissions):
export TRINO_ENABLE_IMPERSONATION=true
export TRINO_IMPERSONATION_FIELD=email  # Options: username, email, subject
```

For complete configuration, see [Deployment Guide](docs/deployment.md), [OAuth Guide](docs/oauth.md), [Allowlists Guide](docs/allowlists.md), and [User Identity Guide](docs/impersonation.md).

## OAuth Implementation

mcp-trino uses [oauth-mcp-proxy](https://github.com/tuannvm/oauth-mcp-proxy) - a standalone OAuth 2.1 library for Go MCP servers.

**Why a separate library?**
- ✅ Reusable across any Go MCP server
- ✅ Independent testing and versioning
- ✅ Dedicated documentation and examples
- ✅ Community-maintained OAuth implementation

**For OAuth details:**
- [oauth-mcp-proxy Documentation](https://github.com/tuannvm/oauth-mcp-proxy#readme) - Complete OAuth guide
- [Provider Setup Guides](https://github.com/tuannvm/oauth-mcp-proxy/tree/main/docs/providers) - Okta, Google, Azure AD
- [Security Best Practices](https://github.com/tuannvm/oauth-mcp-proxy/blob/main/docs/SECURITY.md) - Production security

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Related Projects

- **[oauth-mcp-proxy](https://github.com/tuannvm/oauth-mcp-proxy)** - OAuth 2.1 authentication library used by mcp-trino (reusable for any Go MCP server)

## CI/CD and Releases

This project uses GitHub Actions for continuous integration and GoReleaser for automated releases.

### Continuous Integration Checks

Our CI pipeline performs the following checks on all PRs and commits to the main branch:

#### Code Quality

- **Linting**: Using golangci-lint to check for common code issues and style violations
- **Go Module Verification**: Ensuring go.mod and go.sum are properly maintained
- **Formatting**: Verifying code is properly formatted with gofmt

#### Security

- **Vulnerability Scanning**: Using govulncheck to check for known vulnerabilities in dependencies
- **Dependency Scanning**: Using Trivy to scan for vulnerabilities in dependencies (CRITICAL, HIGH, and MEDIUM)
- **SBOM Generation**: Creating a Software Bill of Materials for dependency tracking
- **SLSA Provenance**: Creating verifiable build provenance for supply chain security

#### Testing

- **Unit Tests**: Running tests with race detection and code coverage reporting
- **Build Verification**: Ensuring the codebase builds successfully

#### CI/CD Security

- **Least Privilege**: Workflows run with minimum required permissions
- **Pinned Versions**: All GitHub Actions use specific versions to prevent supply chain attacks
- **Dependency Updates**: Automated dependency updates via Dependabot

### Release Process

When changes are merged to the main branch:

1. CI checks are run to validate code quality and security
2. If successful, a new release is automatically created with:
   - Semantic versioning based on commit messages
   - Binary builds for multiple platforms
   - Docker image publishing to GitHub Container Registry
   - SBOM and provenance attestation
