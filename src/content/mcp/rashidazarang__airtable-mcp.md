---
name: "rashidazarang/airtable-mcp"
description: "Connect AI tools directly to Airtable. Query, create, update, and delete records using natural language. Features include base management, table operations, schema manipulation, record filtering, and data migration through a standardized MCP interface."
description_tr: "Airtable'ı doğrudan AI araçlarına bağlayın. Doğal dil kullanarak kayıtları sorgulayın, oluşturun, güncelleyin ve silin. Base yönetimi, tablo işlemleri, schema manipülasyonu, kayıt filtreleme ve standart MCP interface üzerinden veri migrasyonu gibi özellikleri içerir."
category: "Databases"
repo: "rashidazarang/airtable-mcp"
stars: 82
url: "https://github.com/rashidazarang/airtable-mcp"
body_length: 13052
license: "MIT"
language: "TypeScript"
homepage: "https://www.airtablemcp.com/"
body_tr: |-
  # Airtable MCP Sunucusu

  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/rashidazarang/airtable-mcp)](https://archestra.ai/mcp-catalog/rashidazarang__airtable-mcp)
  [![smithery badge](https://smithery.ai/badge/@rashidazarang/airtable-mcp)](https://smithery.ai/server/@rashidazarang/airtable-mcp)
  ![Airtable](https://img.shields.io/badge/Airtable-18BFFF?style=for-the-badge&logo=Airtable&logoColor=white)
  [![MCP](https://img.shields.io/badge/MCP-4.0.0-blue)](https://github.com/rashidazarang/airtable-mcp)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
  [![AI Agent](https://img.shields.io/badge/AI_Agent-Enhanced-purple)](https://github.com/rashidazarang/airtable-mcp)
  [![Security](https://img.shields.io/badge/Security-Enterprise-green)](https://github.com/rashidazarang/airtable-mcp)
  [![Protocol](https://img.shields.io/badge/Protocol-2024--11--05-success)](https://modelcontextprotocol.io/)

  Airtable için Model Context Protocol (MCP) sunucusu; tam CRUD işlemleri, schema yönetimi, kayıt yorumları, webhook'lar, toplu işlemler, yönetişim kontrolleri ve AI destekli analitikler sunar.

  **Sürüm 4.0.0** | MCP Protocol 2024-11-05 | [![npm](https://img.shields.io/npm/v/@rashidazarang/airtable-mcp)](https://www.npmjs.com/package/@rashidazarang/airtable-mcp)

  ---

  ## Hızlı Başlangıç (Claude Desktop)

  Kurulum gerekmiyor — bunu Claude Desktop yapılandırmanıza eklemeniz yeterli ve yeniden başlatın:

  **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
  **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

  ```json
  {
    "mcpServers": {
      "airtable": {
        "command": "npx",
        "args": ["-y", "@rashidazarang/airtable-mcp"],
        "env": {
          "AIRTABLE_TOKEN": "YOUR_AIRTABLE_TOKEN",
          "AIRTABLE_BASE_ID": "YOUR_BASE_ID"
        }
      }
    }
  }
  ```

  Bu kadar. `npx` sunucuyu otomatik olarak indirir ve çalıştırır. `git clone` yok, `npm install` yok.

  > **Token'ınızı alın** [airtable.com/create/tokens](https://airtable.com/create/tokens) adresinde — aşağıdaki [Token Kapsamları](#token-kapsamları) bölümünde listelenen tüm kapsamları verin. **Base ID'nizi alın** base'i görüntülerken URL'den: `https://airtable.com/[BASE_ID]/...` (veya atladığınız base'leri dinamik olarak keşfetmek için `list_bases` kullanın).

  ---

  ## Hızlı Başlangıç (Claude Code)

  ### Tek komutla kurulum

  ```bash
  curl -fsSL https://raw.githubusercontent.com/rashidazarang/airtable-mcp/main/setup.sh | bash
  ```

  Betik ön koşulları kontrol eder, Airtable token'ınızı ister ve MCP yapılandırmasını `~/.claude.json` dosyasına yazar. Claude Code'u yeniden başlatın (veya `/mcp` çalıştırın) bağlantı kurmak için.

  Token'ınızı doğrudan da geçirebilirsiniz:

  ```bash
  curl -fsSL https://raw.githubusercontent.com/rashidazarang/airtable-mcp/main/setup.sh | bash -s -- YOUR_AIRTABLE_TOKEN
  ```

  ### Manuel yapılandırma

  `~/.claude.json` dosyasında `mcpServers` altına ekleyin:

  ```json
  {
    "airtable": {
      "type": "stdio",
      "command": "/bin/bash",
      "args": ["-c", "cd /tmp && npx -y @rashidazarang/airtable-mcp"],
      "env": {
        "AIRTABLE_TOKEN": "YOUR_AIRTABLE_TOKEN"
      }
    }
  }
  ```

  > **Neden bash sarmalayıcısı?** `npx`, aynı paket adını içeren bir `package.json` içeren bir dizinden çalıştırıldığında binary'yi çözemez. `cd /tmp &&` öneki bu uç durumu önler.

  ---

  ## Genel Bakış

  Bu sunucu, Model Context Protocol aracılığıyla kapsamlı Airtable entegrasyonu sağlar ve Airtable verilerinizle doğal dil etkileşimlerini mümkün kılar. **42 araç** ve **10 AI prompt şablonu** içerir.

  ### Temel Özellikler

  - **Tam CRUD İşlemleri** — Filtreleme ve sayfalandırma ile kayıtları oluşturun, okuyun, güncelleyin ve silin
  - **Kayıt Yorumları** — Kayıtlar üzerinde yorumları listeleyin, oluşturun, güncelleyin ve silin
  - **Schema Yönetimi** — Tabloları, alanları ve görünümleri programlı olarak oluşturun ve değiştirin
  - **Toplu İşlemler** — İyileştirilmiş performans için işlem başına 10 kaydı işleyin
  - **Webhook Yönetimi** — Veri değişiklikleri için gerçek zamanlı bildirimler ayarlayın
  - **Yönetişim ve Uyum** — İzin listesi yönetişimi, PII maskeleme ve istisna izleme
  - **Kullanıcı Kimliği** — `whoami` aracıyla token kimliğini doğrulayın
  - **AI Analitikleri** — Tahmine dayalı analitik, doğal dil sorguları ve otomatik içgörüler için 10 prompt şablonu
  - **Çoklu Base Desteği** — Birden fazla base'i dinamik olarak keşfedin ve kullanın
  - **Tür Güvenliği** — Kapsamlı tür tanımlamalarıyla tam TypeScript desteği

  ---

  ## Ön Koşullar

  - Node.js 18 veya üstü
  - Personal Access Token'ı olan Airtable hesabı
  - Airtable Base ID'niz (isteğe bağlı — `list_bases` aracı aracılığıyla keşfedilebilir)

  ---

  ## Token Kapsamları

  [airtable.com/create/tokens](https://airtable.com/create/tokens) adresinde şu kapsamlarla Personal Access Token oluşturun:

  | Kapsam | Amaç |
  |--------|------|
  | `data.records:read` | Kayıtları okuyun |
  | `data.records:write` | Kayıtları oluşturun, güncelleyin, silin |
  | `data.recordComments:read` | Kayıt yorumlarını okuyun |
  | `data.recordComments:write` | Yorumları oluşturun, güncelleyin, silin |
  | `schema.bases:read` | Tablo şemalarını görüntüleyin |
  | `schema.bases:write` | Tabloları ve alanları oluşturun ve değiştirin |
  | `user.email:read` | Kullanıcı kimliğini okuyun (whoami) |
  | `webhook:manage` | Webhook'ları yönetin (isteğe bağlı) |

  ---

  ## Kullanım

  Yapılandırıldıktan sonra, Airtable verilerinizle doğal dil kullanarak etkileşime geçin:

  ### Temel İşlemler

  - "Tüm erişilebilir Airtable base'lerimi listele"
  - "Bana Projects tablosundaki tüm kayıtları göster"
  - "Önceliği 'Yüksek' ve bitiş tarihi yarın olan yeni bir görev oluştur"
  - "rec123 task ID'sinin durumunu 'Tamamlandı' olarak güncelleyin"
  - "Durumu 'Aktif' olan kayıtları arayın"

  ### Schema Yönetimi

  - "Bu base için tam şemayı göster"
  - "Name, Priority ve Due Date alanlarıyla 'Tasks' adlı yeni bir tablo oluştur"
  - "Projects tablosuna Status alanı ekle"

  ### Kayıt Yorumları

  - "rec123 kaydının tüm yorumlarını göster"
  - "Bu kaydına yorum ekle: 'İncelendi ve onaylandı'"
  - "Yorumumu 'Revizyon gerekli' olarak güncelleyin"

  ### Toplu İşlemler

  - "Tasks tablosunda aynı anda 5 yeni kayıt oluştur"
  - "Birden fazla kaydı yeni durum değerleriyle güncelleyin"
  - "Bu 3 kaydı tek bir işlemde silin"

  ### Webhook'lar

  - "Base'imdeki tüm etkin webhook'ları listele"
  - "Projects tablosundaki değişikliklere yönelik webhook oluştur"

  ---

  ## Mevcut Araçlar (42)

  ### Temel İşlemler (4 araç)

  | Araç | Açıklama |
  |------|----------|
  | `list_bases` | Tüm erişilebilir base'leri izinlerle birlikte listeleyin |
  | `describe` | Base veya tablo şemasını açıklayın (detay seviyelerini destekler) |
  | `query` | Filtreleme, sıralama ve sayfalandırmayla sorguyu çalıştırın |
  | `search_records` | Airtable formülleriyle gelişmiş arama |

  ### Kayıt CRUD (5 araç)

  | Araç | Açıklama |
  |------|----------|
  | `list_records` | Alan seçimi ve sayfalandırmayla kayıtları listeleyin |
  | `get_record` | Tek bir kaydı ID'ye göre alın |
  | `create` | Yeni kayıtlar oluşturun (dryRun fark incelemesi gerekir) |
  | `update` | Mevcut kayıtları güncelleyin (dryRun fark incelemesi gerekir) |
  | `delete_record` | Bir kaydı tablodan kaldırın |

  ### Upsert (2 araç)

  | Araç | Açıklama |
  |------|----------|
  | `upsert` | Merge alanlarına göre kayıtları güncelleyin veya oluşturun |
  | `batch_upsert_records` | Merge-on alanlarıyla toplu upsert |

  ### Schema Keşfi (4 araç)

  | Araç | Açıklama |
  |------|----------|
  | `list_tables` | Base'deki tüm tabloları şema bilgisiyle alın |
  | `get_base_schema` | Herhangi bir base için tam şemayı alın |
  | `list_field_types` | Mevcut alan türleri için başvuru kılavuzu |
  | `get_table_views` | Bir tablo için tüm görünümleri listeleyin |

  ### Tablo Yönetimi (3 araç)

  | Araç | Açıklama |
  |------|----------|
  | `create_table` | Özel alan tanımlamalarıyla tablolar oluşturun |
  | `update_table` | Tablo adlarını ve açıklamalarını değiştirin |
  | `delete_table` | Tabloları kaldırın (onay gerekir) |

  ### Alan Yönetimi (3 araç)

  | Araç | Açıklama |
  |------|----------|
  | `create_field` | Mevcut tablolara alanlar ekleyin |
  | `update_field` | Alan özelliklerini ve seçeneklerini değiştirin |
  | `delete_field` | Alanları kaldırın (onay gerekir) |

  ### Toplu İşlemler (3 araç)

  | Araç | Açıklama |
  |------|----------|
  | `batch_create_records` | Aynı anda 10 kaydı oluşturun |
  | `batch_update_records` | 10 kaydı aynı anda güncelleyin |
  | `batch_delete_records` | Bir işlemde 10 kaydı silin |

  ### Webhook Yönetimi (5 araç)

  | Araç | Açıklama |
  |------|----------|
  | `list_webhooks` | Yapılandırılmış tüm webhook'ları görüntüleyin |
  | `create_webhook` | Gerçek zamanlı bildirimler ayarlayın |
  | `delete_webhook` | Webhook yapılandırmalarını kaldırın |
  | `get_webhook_payloads` | Bildirim geçmişini alın |
  | `refresh_webhook` | Webhook süresini uzatın |

  ### Görünümler ve Ek Dosyalar (3 araç)

  | Araç | Açıklama |
  |------|----------|
  | `create_view` | Görünümler oluşturun (grid, form, calendar, vb.) |
  | `get_view_metadata` | Filtreleri içeren görünüm ayrıntılarını alın |
  | `upload_attachment` | URL'lerden dosyalar ekleyin |

  ### Base Yönetimi (3 araç)

  | Araç | Açıklama |
  |------|----------|
  | `create_base` | İlk yapıyla yeni base'ler oluşturun |
  | `list_collaborators` | İşbirlikçileri ve izinleri görüntüleyin |
  | `list_shares` | Paylaşılan görünümleri ve yapılandırmaları listeleyin |

  ### Kayıt Yorumları (4 araç)

  | Araç | Açıklama |
  |------|----------|
  | `list_comments` | Bir kayıttaki yorumları listeleyin |
  | `create_comment` | Bir kaydına yorum ekleyin |
  | `update_comment` | Mevcut bir yorumu düzenleyin |
  | `delete_comment` | Bir yorumu kaldırın |

  ### Kullanıcı Bilgisi (1 araç)

  | Araç | Açıklama |
  |------|----------|
  | `whoami` | Geçerli kullanıcı kimliğini ve kapsamlarını alın |

  ### Yönetişim ve Yönetim (2 araç)

  | Araç | Açıklama |
  |------|----------|
  | `list_governance` | Yönetişim izin listelerini ve PII maskeleme ilkelerini döndürün |
  | `list_exceptions` | Son istisnalar ve düzeltme önerilerini listeleyin |

  ---

  ## AI Zeka Paketi

  Gelişmiş analitikler için on AI prompt şablonu:

  | Prompt | Açıklama |
  |--------|----------|
  | `analyze_data` | Anomali tespiti içeren istatistiksel analiz |
  | `create_report` | Akıllı rapor oluşturma |
  | `data_insights` | İş zekası ve desen keşfi |
  | `optimize_workflow` | Otomasyon önerileri |
  | `smart_schema_design` | Veritabanı optimizasyonu önerileri |
  | `data_quality_audit` | Kalite değerlendirmesi ve düzeltme |
  | `predictive_analytics` | Tahminleme ve trend tahmini |
  | `natural_language_query` | Bağlam farkındalığıyla soruları işleyin |
  | `smart_data_transformation` | AI destekli veri işleme |
  | `automation_recommendations` | Maliyet-fayda analiziyle iş akışı optimizasyonu |

  ---

  ## Gelişmiş Yapılandırma

  ### Smithery Cloud

  ```json
  {
    "mcpServers": {
      "airtable": {
        "command": "npx",
        "args": [
          "@smithery/cli",
          "run",
          "@rashidazarang/airtable-mcp"
        ],
        "env": {
          "AIRTABLE_TOKEN": "YOUR_TOKEN",
          "AIRTABLE_BASE_ID": "YOUR_BASE_ID"
        }
      }
    }
  }
  ```

  ### Ortam Değişkenleri

  | Değişken | Gerekli | Açıklama |
  |----------|---------|----------|
  | `AIRTABLE_TOKEN` | Evet | Personal Access Token |
  | `AIRTABLE_BASE_ID` | Hayır | Varsayılan base ID'si (`list_bases` aracılığıyla keşfedilebilir) |
  | `LOG_LEVEL` | Hayır | Günlük düzeyi (varsayılan: `info`) |
  | `MCP_HTTP_PORT` | Hayır | Barındırılan dağıtımlar için HTTP aktarımını etkinleştirin |

  ---

  ## Geliştirme

  > **Kullanıcılar için gerekli değildir.** Depoyu yalnızca katkıda bulunmak veya sunucuyu değiştirmek istiyorsanız klonlayın. Son kullanıcılar yukarıdaki Hızlı Başlangıç bölümlerinde gösterildiği gibi `npx` kullanmalıdır.

  ```bash
  git clone https://github.com/rashidazarang/airtable-mcp.git
  cd airtable-mcp
  npm install
  npm run build
  ```

  ### Test Etme

  ```bash
  npm run test:types     # Tür kontrolü
  npm test               # Test paketini çalıştırın
  ```

  ### Proje Yapısı

  ```
  airtable-mcp/
  ├── src/typescript/          # TypeScript uygulaması
  │   ├── app/
  │   │   ├── tools/           # 42 araç uygulaması
  │   │   ├── prompts/         # 10 AI prompt kaydı
  │   │   ├── airtable-client.ts
  │   │   ├── governance.ts
  │   │   └── context.ts
  │   └── airtable-mcp-server.ts
  ├── dist/                    # Derlenmiş çıktı
  ├── docs/                    # Belgeler
  ├── types/                   # TypeScript tanımları
  └── bin/                     # CLI yürütülebilirleri
  ```

  ---

  ## Sorun Giderme

  **Bağlantı Sorunları**
  - MCP sunucusunun çalıştığını doğrulayın
  - MCP istemcinizi yeniden başlatın
  - Token'ınızın gerekli kapsamları aldığını kontrol edin

  **Geçersiz Token**
  - Personal Access Token'ınızın doğru olduğunu doğrulayın
  - Token'ınızın gerekli kapsamları aldığını onaylayın
  - Kimlik bilgilerinde fazla boşluk olup olmadığını kontrol edin

  **Base Bulunamadı**
  - Base ID'nizi kontrol edin
  - Token'ınızın base'e erişimi olduğunu doğrulayın
  - Erişilebilir base'leri keşfetmek için `list_bases` kullanın

  ---

  ## Belgeler

  - [Changelog](docs/CHANGELOG.md)
  - [Release Notes](docs/releases/)

  ---

  ## Katkıda Bulunma

  Katkılar hoş karşılanır. Lütfen büyük değişiklikleri tartışmak için önce bir sorun açın.

  ---

  ## Lisans

  MIT Lisansı — ayrıntılar için [LICENSE](LICENSE) dosyasını görüntüleyin.

  ---

  ## Destek

  - [GitHub Issues](https://github.com/rashidazarang/airtable-mcp/issues)
  - [GitHub Discussions](https://github.com/rashidazarang/airtable-mcp/discussions)
---

# Airtable MCP Server

[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/rashidazarang/airtable-mcp)](https://archestra.ai/mcp-catalog/rashidazarang__airtable-mcp)
[![smithery badge](https://smithery.ai/badge/@rashidazarang/airtable-mcp)](https://smithery.ai/server/@rashidazarang/airtable-mcp)
![Airtable](https://img.shields.io/badge/Airtable-18BFFF?style=for-the-badge&logo=Airtable&logoColor=white)
[![MCP](https://img.shields.io/badge/MCP-4.0.0-blue)](https://github.com/rashidazarang/airtable-mcp)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![AI Agent](https://img.shields.io/badge/AI_Agent-Enhanced-purple)](https://github.com/rashidazarang/airtable-mcp)
[![Security](https://img.shields.io/badge/Security-Enterprise-green)](https://github.com/rashidazarang/airtable-mcp)
[![Protocol](https://img.shields.io/badge/Protocol-2024--11--05-success)](https://modelcontextprotocol.io/)

A Model Context Protocol (MCP) server for Airtable with full CRUD operations, schema management, record comments, webhooks, batch operations, governance controls, and AI-powered analytics.

**Version 4.0.0** | MCP Protocol 2024-11-05 | [![npm](https://img.shields.io/npm/v/@rashidazarang/airtable-mcp)](https://www.npmjs.com/package/@rashidazarang/airtable-mcp)

---

## Quick Start (Claude Desktop)

No installation required — just add this to your Claude Desktop config and restart:

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "airtable": {
      "command": "npx",
      "args": ["-y", "@rashidazarang/airtable-mcp"],
      "env": {
        "AIRTABLE_TOKEN": "YOUR_AIRTABLE_TOKEN",
        "AIRTABLE_BASE_ID": "YOUR_BASE_ID"
      }
    }
  }
}
```

That's it. `npx` downloads and runs the server automatically. No `git clone`, no `npm install`.

> **Get your token** at [airtable.com/create/tokens](https://airtable.com/create/tokens) — grant all scopes listed under [Token Scopes](#token-scopes) below. **Get your Base ID** from the URL when viewing your base: `https://airtable.com/[BASE_ID]/...` (or omit it and use `list_bases` to discover bases dynamically).

---

## Quick Start (Claude Code)

### One-command install

```bash
curl -fsSL https://raw.githubusercontent.com/rashidazarang/airtable-mcp/main/setup.sh | bash
```

The script checks prerequisites, prompts for your Airtable token, and writes the MCP config to `~/.claude.json`. Restart Claude Code (or run `/mcp`) to connect.

You can also pass your token directly:

```bash
curl -fsSL https://raw.githubusercontent.com/rashidazarang/airtable-mcp/main/setup.sh | bash -s -- YOUR_AIRTABLE_TOKEN
```

### Manual config

Add to `~/.claude.json` under `mcpServers`:

```json
{
  "airtable": {
    "type": "stdio",
    "command": "/bin/bash",
    "args": ["-c", "cd /tmp && npx -y @rashidazarang/airtable-mcp"],
    "env": {
      "AIRTABLE_TOKEN": "YOUR_AIRTABLE_TOKEN"
    }
  }
}
```

> **Why the bash wrapper?** `npx` can fail to resolve the binary when run from a directory that contains a `package.json` with the same package name. The `cd /tmp &&` prefix avoids this edge case.

---

## Overview

This server provides comprehensive Airtable integration through the Model Context Protocol, enabling natural language interactions with your Airtable data. It includes **42 tools** covering every Airtable PAT scope and **10 AI prompt templates** for intelligent analytics.

### Key Features

- **Full CRUD Operations** — Create, read, update, and delete records with filtering and pagination
- **Record Comments** — List, create, update, and delete comments on records
- **Schema Management** — Create and modify tables, fields, and views programmatically
- **Batch Operations** — Process up to 10 records per operation for improved performance
- **Webhook Management** — Set up real-time notifications for data changes
- **Governance & Compliance** — Allow-list governance, PII masking, and exception tracking
- **User Identity** — Verify token identity with the `whoami` tool
- **AI Analytics** — 10 prompt templates for predictive analytics, natural language queries, and automated insights
- **Multi-Base Support** — Discover and work with multiple bases dynamically
- **Type Safety** — Full TypeScript support with comprehensive type definitions

---

## Prerequisites

- Node.js 18 or later
- An Airtable account with a Personal Access Token
- Your Airtable Base ID (optional — can be discovered via the `list_bases` tool)

---

## Token Scopes

Create a Personal Access Token at [airtable.com/create/tokens](https://airtable.com/create/tokens) with these scopes:

| Scope | Purpose |
|-------|---------|
| `data.records:read` | Read records |
| `data.records:write` | Create, update, delete records |
| `data.recordComments:read` | Read record comments |
| `data.recordComments:write` | Create, update, delete comments |
| `schema.bases:read` | View table schemas |
| `schema.bases:write` | Create and modify tables and fields |
| `user.email:read` | Read user identity (whoami) |
| `webhook:manage` | Manage webhooks (optional) |

---

## Usage

Once configured, interact with your Airtable data using natural language:

### Basic Operations

- "List all my accessible Airtable bases"
- "Show me all records in the Projects table"
- "Create a new task with priority 'High' and due date tomorrow"
- "Update the status of task ID rec123 to 'Completed'"
- "Search for records where Status equals 'Active'"

### Schema Management

- "Show me the complete schema for this base"
- "Create a new table called 'Tasks' with Name, Priority, and Due Date fields"
- "Add a Status field to the Projects table"

### Record Comments

- "Show me all comments on record rec123"
- "Add a comment to this record: 'Reviewed and approved'"
- "Update my comment to say 'Needs revision'"

### Batch Operations

- "Create 5 new records at once in the Tasks table"
- "Update multiple records with new status values"
- "Delete these 3 records in one operation"

### Webhooks

- "List all active webhooks in my base"
- "Create a webhook for changes to my Projects table"

---

## Available Tools (42)

### Core Operations (4 tools)

| Tool | Description |
|------|-------------|
| `list_bases` | List all accessible bases with permissions |
| `describe` | Describe base or table schema (supports detail levels) |
| `query` | Query records with filtering, sorting, and pagination |
| `search_records` | Advanced search with Airtable formulas |

### Record CRUD (5 tools)

| Tool | Description |
|------|-------------|
| `list_records` | List records with field selection and pagination |
| `get_record` | Retrieve a single record by ID |
| `create` | Create new records (requires dryRun diff review) |
| `update` | Update existing records (requires dryRun diff review) |
| `delete_record` | Remove a record from a table |

### Upsert (2 tools)

| Tool | Description |
|------|-------------|
| `upsert` | Update or create records based on merge fields |
| `batch_upsert_records` | Batch upsert with merge-on fields |

### Schema Discovery (4 tools)

| Tool | Description |
|------|-------------|
| `list_tables` | Get all tables in a base with schema info |
| `get_base_schema` | Get complete schema for any base |
| `list_field_types` | Reference guide for available field types |
| `get_table_views` | List all views for a table |

### Table Management (3 tools)

| Tool | Description |
|------|-------------|
| `create_table` | Create tables with custom field definitions |
| `update_table` | Modify table names and descriptions |
| `delete_table` | Remove tables (requires confirmation) |

### Field Management (3 tools)

| Tool | Description |
|------|-------------|
| `create_field` | Add fields to existing tables |
| `update_field` | Modify field properties and options |
| `delete_field` | Remove fields (requires confirmation) |

### Batch Operations (3 tools)

| Tool | Description |
|------|-------------|
| `batch_create_records` | Create up to 10 records at once |
| `batch_update_records` | Update up to 10 records simultaneously |
| `batch_delete_records` | Delete up to 10 records in one operation |

### Webhook Management (5 tools)

| Tool | Description |
|------|-------------|
| `list_webhooks` | View all configured webhooks |
| `create_webhook` | Set up real-time notifications |
| `delete_webhook` | Remove webhook configurations |
| `get_webhook_payloads` | Retrieve notification history |
| `refresh_webhook` | Extend webhook expiration |

### Views & Attachments (3 tools)

| Tool | Description |
|------|-------------|
| `create_view` | Create views (grid, form, calendar, etc.) |
| `get_view_metadata` | Get view details including filters |
| `upload_attachment` | Attach files from URLs |

### Base Management (3 tools)

| Tool | Description |
|------|-------------|
| `create_base` | Create new bases with initial structure |
| `list_collaborators` | View collaborators and permissions |
| `list_shares` | List shared views and configurations |

### Record Comments (4 tools)

| Tool | Description |
|------|-------------|
| `list_comments` | List comments on a record |
| `create_comment` | Add a comment to a record |
| `update_comment` | Edit an existing comment |
| `delete_comment` | Remove a comment |

### User Info (1 tool)

| Tool | Description |
|------|-------------|
| `whoami` | Get current user identity and scopes |

### Governance & Administration (2 tools)

| Tool | Description |
|------|-------------|
| `list_governance` | Return governance allow-lists and PII masking policies |
| `list_exceptions` | List recent exceptions and remediation proposals |

---

## AI Intelligence Suite

Ten AI prompt templates for advanced analytics:

| Prompt | Description |
|--------|-------------|
| `analyze_data` | Statistical analysis with anomaly detection |
| `create_report` | Intelligent report generation |
| `data_insights` | Business intelligence and pattern discovery |
| `optimize_workflow` | Automation recommendations |
| `smart_schema_design` | Database optimization suggestions |
| `data_quality_audit` | Quality assessment and remediation |
| `predictive_analytics` | Forecasting and trend prediction |
| `natural_language_query` | Process questions with context awareness |
| `smart_data_transformation` | AI-assisted data processing |
| `automation_recommendations` | Workflow optimization with cost-benefit analysis |

---

## Advanced Configuration

### Smithery Cloud

```json
{
  "mcpServers": {
    "airtable": {
      "command": "npx",
      "args": [
        "@smithery/cli",
        "run",
        "@rashidazarang/airtable-mcp"
      ],
      "env": {
        "AIRTABLE_TOKEN": "YOUR_TOKEN",
        "AIRTABLE_BASE_ID": "YOUR_BASE_ID"
      }
    }
  }
}
```

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `AIRTABLE_TOKEN` | Yes | Personal Access Token |
| `AIRTABLE_BASE_ID` | No | Default base ID (discoverable via `list_bases`) |
| `LOG_LEVEL` | No | Logging level (default: `info`) |
| `MCP_HTTP_PORT` | No | Enable HTTP transport for hosted deployments |

---

## Development

> **Not required for users.** Clone the repo only if you want to contribute or modify the server. End users should use `npx` as shown in the Quick Start sections above.

```bash
git clone https://github.com/rashidazarang/airtable-mcp.git
cd airtable-mcp
npm install
npm run build
```

### Testing

```bash
npm run test:types     # Type checking
npm test               # Run test suite
```

### Project Structure

```
airtable-mcp/
├── src/typescript/          # TypeScript implementation
│   ├── app/
│   │   ├── tools/           # 42 tool implementations
│   │   ├── prompts/         # 10 AI prompt registrations
│   │   ├── airtable-client.ts
│   │   ├── governance.ts
│   │   └── context.ts
│   └── airtable-mcp-server.ts
├── dist/                    # Compiled output
├── docs/                    # Documentation
├── types/                   # TypeScript definitions
└── bin/                     # CLI executables
```

---

## Troubleshooting

**Connection Issues**
- Verify the MCP server is running
- Restart your MCP client
- Check that your token has the required scopes

**Invalid Token**
- Verify your Personal Access Token is correct
- Confirm the token has the required scopes
- Check for extra whitespace in credentials

**Base Not Found**
- Confirm your Base ID is correct
- Verify your token has access to the base
- Use `list_bases` to discover accessible bases

---

## Documentation

- [Changelog](docs/CHANGELOG.md)
- [Release Notes](docs/releases/)

---

## Contributing

Contributions are welcome. Please open an issue first to discuss major changes.

---

## License

MIT License — see [LICENSE](LICENSE) for details.

---

## Support

- [GitHub Issues](https://github.com/rashidazarang/airtable-mcp/issues)
- [GitHub Discussions](https://github.com/rashidazarang/airtable-mcp/discussions)
