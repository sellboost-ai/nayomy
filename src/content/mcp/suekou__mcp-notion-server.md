---
name: "suekou/mcp-notion-server"
description: "Interacting with Notion API"
category: "Other Tools and Integrations"
repo: "suekou/mcp-notion-server"
stars: 892
url: "https://github.com/suekou/mcp-notion-server"
body_length: 5319
license: "MIT"
language: "TypeScript"
homepage: "https://www.npmjs.com/package/@suekou/mcp-notion-server"
body_tr: |-
  # Notion MCP Server

  Notion API için AI dostu MCP sunucusu. Ajanların Notion çalışma alanlarını bulmasına, okumasına, sorgulamasına ve güncellemesine yardımcı olurken yanıtları günlük AI iş akışları için yeterince kompakt tutar.

  Bu sunucu Notion API `2026-03-11` sürümünü hedefler ve mevcut veritabanı/veri kaynağı modelini kullanır. MCP araçlarını, istemlerini, kaynakları, yapılandırılmış araç sonuçlarını ve etkileşimli Notion iş akışları için isteğe bağlı MCP Apps'ı sunar.

  ## Öne Çıkanlar

  - `notion_find` ile arama ve hedef keşfi.
  - `notion_read_page` aracılığıyla kararlı blok kimliklerine sahip kompakt sayfa okuma.
  - `notion_inspect_data_source` ile veri kaynağı şeması inceleme.
  - Şema farkında veri kaynağı sorgulama ve basit değerlerle öğe oluşturma.
  - Paragraflar, başlıklar, listeler, yapılacaklar, alıntılar, belirtiler, kod blokları, ayırıcılar ve güvenli Markdown ekleme için basit sayfa düzenleme araçları.
  - Gelişmiş blok, sayfa, veritabanı, veri kaynağı, yorum ve kullanıcı işlemleri için ham Notion API araçları.
  - İsteğe bağlı MCP Apps: Veri Kaynağı Gezgini ve Sayfa Workbench'i.

  ## Hızlı Başlangıç

  Bu sunucuyu Claude Desktop gibi bir MCP ana bilgisayarına ekleyin:

  ```json
  {
    "mcpServers": {
      "notion": {
        "command": "npx",
        "args": ["-y", "@suekou/mcp-notion-server"],
        "env": {
          "NOTION_API_TOKEN": "your-integration-token"
        }
      }
    }
  }
  ```

  Yapılandırmayı kaydettikten sonra MCP ana bilgisayarınızı yeniden başlatın.

  ## Kurulum Kılavuzu

  ### 1. Notion entegrasyonu oluşturun

  [Notion entegrasyonları panosunu](https://www.notion.so/profile/integrations) açın, ardından yeni bir dahili entegrasyon oluşturun.

  ![Internal connections](https://raw.githubusercontent.com/suekou/mcp-notion-server/HEAD/docs/assets/setup/internal-connections.png)
  ![New connections](https://raw.githubusercontent.com/suekou/mcp-notion-server/HEAD/docs/assets/setup/new-connection.png)

  ### 2. Yetenekleri yapılandırın

  Yalnızca ihtiyacınız olan yetenekleri verin:

  - İçerik oku: arama, sayfa okuma, veri kaynağı alma ve sorgular için gerekli.
  - İçerik ekle: sayfalar/öğeler oluşturma ve blok ekleme için gerekli.
  - İçerik güncelle: sayfaları, blokları ve veri kaynağı şemalarını güncellemek için gerekli.
  - Yorum oku / Yorum ekle: yalnızca yorum araçları kullanırken gerekli.
  - Kullanıcı bilgileri: yalnızca kullanıcı arama araçları kullanırken gerekli.

  Kurulum sırasında tam işlevsellik için okuma, ekleme ve içeriği güncelleme yetkisini etkinleştirin. Yorum veya kullanıcı yeteneklerini yalnızca bu araçları kullanmayı planlıyorsanız ekleyin.

  ![Notion integration capabilities](https://raw.githubusercontent.com/suekou/mcp-notion-server/HEAD/docs/assets/setup/capabilities.png)

  ### 3. İçerik erişimi verin

  Entegrasyonunuzun **Content access** sekmesini açın, ardından MCP sunucusunun okumak veya düzenlemek istediği sayfaları veya veritabanlarını seçin.

  Hedef Notion sayfası veya veritabanından da erişim verebilirsiniz: `...` menüsünü açın, **Connections** seçeneğini seçin, ardından entegrasyonunuzu ekleyin.

  Notion yalnızca bir entegrasyonun kendisiyle paylaşılan sayfalar ve veritabanlarına erişmesine izin verir. Bir sayfaya eklenen bir bağlantı, o sayfanın alt öğelerine de erişebilir.

  ![Edit integration content access](https://raw.githubusercontent.com/suekou/mcp-notion-server/HEAD/docs/assets/setup/edit-connection.png)

  ### 4. Dahili entegrasyon tokenını kopyalayın

  Entegrasyon gizliliğini kopyalayın. Bu değer MCP ana bilgisayar yapılandırmanızda `NOTION_API_TOKEN` olur.

  ![Copy internal integration token](https://raw.githubusercontent.com/suekou/mcp-notion-server/HEAD/docs/assets/setup/access-token.png)

  ### 5. MCP ana bilgisayarınızı yapılandırın

  Cursor, Claude Desktop ve diğer MCP ana bilgisayarları için bu sunucu yapılandırmasını MCP ayarlarınıza ekleyin:

  ```json
  {
    "mcpServers": {
      "notion": {
        "command": "npx",
        "args": ["-y", "@suekou/mcp-notion-server"],
        "env": {
          "NOTION_API_TOKEN": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        }
      }
    }
  }
  ```

  Yerel olarak inşa edilmiş bir checkout için:

  ```json
  {
    "mcpServers": {
      "notion": {
        "command": "node",
        "args": ["/absolute/path/to/suekou-mcp-notion-server/build/index.js"],
        "env": {
          "NOTION_API_TOKEN": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        }
      }
    }
  }
  ```

  ## Önerilen İş Akışı

  1. Bir sayfayı veya veri kaynağını bulunması için `notion_find` kullanın.
  2. Sayfa bağlamı ve düzenlenebilir blok kimliklerinin için `notion_read_page` kullanın.
  3. Veri kaynağını sorgulamadan veya öğeler oluşturmadan önce `notion_inspect_data_source` kullanın.
  4. Yaygın veri kaynağı çalışmaları için `notion_query_data_source_by_values` ve `notion_create_data_source_item_from_values` kullanın.
  5. Normal sayfa düzenlemeleri için `notion_append_markdown`, `notion_append_content`, `notion_update_content` veya `notion_update_content_batch` kullanın.
  6. Basitleştirilmiş araçlar ihtiyacınız olan Notion API şeklini kapsamadığında yalnızca ham JSON araçlarına geri dönün.

  ## Geliştiriciler İçin

  Bu referanslar esas olarak geliştirme, özelleştirme ve gelişmiş MCP iş akışları içindir:

  - [Configuration](docs/configuration.md): ortam değişkenleri, komut satırı argümanları, MCP ana bilgisayar örnekleri, geliştirme komutları ve sorun giderme.
  - [Tools](docs/tools.md): iş akışı alanına göre gruplandırılmış eksiksiz araç referansı.
  - [Workflows](docs/workflows.md): pratik okuma, yazma, veri kaynağı, geçiş ve hata işleme rehberi.
  - [MCP Apps](docs/mcp-apps.md): etkileşimli Veri Kaynağı Gezgini ve Sayfa Workbench ayrıntıları.

  ## Geliştirme

  Bu proje Node.js 22 veya daha yeni ve pnpm kullanır.

  ```bash
  pnpm install --frozen-lockfile
  pnpm run build
  pnpm test
  ```

  Yerel geliştirme sırasında MCP inspektörünü kullanın:

  ```bash
  pnpm run inspector
  ```

  ## Lisans

  Bu MCP sunucusu MIT Lisansı altında lisanslanmıştır. Bu, MIT Lisansının şartlarına ve koşullarına tabi olarak yazılımı serbestçe kullanma, değiştirme ve dağıtma haqqınız olduğu anlamına gelir. Daha fazla ayrıntı için lütfen proje deposundaki LICENSE dosyasına bakın.
---

# Notion MCP Server

AI-friendly MCP server for the Notion API. It helps agents find, read, query, and update Notion workspaces while keeping responses compact enough for day-to-day AI workflows.

This server targets the Notion API `2026-03-11` and uses the current database/data source model. It exposes MCP tools, prompts, resources, structured tool results, and optional MCP Apps for interactive Notion workflows.

## Highlights

- Search and target discovery with `notion_find`.
- Compact page reading with stable block IDs via `notion_read_page`.
- Data source schema inspection with `notion_inspect_data_source`.
- Schema-aware data source querying and item creation with simple values.
- Simple page editing tools for paragraphs, headings, lists, todos, quotes, callouts, code blocks, dividers, and safe Markdown append.
- Raw Notion API tools for advanced block, page, database, data source, comment, and user operations.
- Optional MCP Apps: Data Source Explorer and Page Workbench.

## Quick Start

Add this server to an MCP host such as Claude Desktop:

```json
{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": ["-y", "@suekou/mcp-notion-server"],
      "env": {
        "NOTION_API_TOKEN": "your-integration-token"
      }
    }
  }
}
```

Restart your MCP host after saving the configuration.

## Setup Guide

### 1. Create a Notion integration

Open the [Notion integrations dashboard](https://www.notion.so/profile/integrations), then create a new internal integration.

![Internal connections](https://raw.githubusercontent.com/suekou/mcp-notion-server/HEAD/docs/assets/setup/internal-connections.png)
![New connections](https://raw.githubusercontent.com/suekou/mcp-notion-server/HEAD/docs/assets/setup/new-connection.png)

### 2. Configure capabilities

Grant only the capabilities you need:

- Read content: required for search, page reads, data source retrieval, and queries.
- Insert content: required for creating pages/items and appending blocks.
- Update content: required for updating pages, blocks, and data source schemas.
- Read comments / Insert comments: required only for comment tools.
- User information: required only when using user lookup tools.

For full functionality during setup, enable read, insert, and update content. Add comment or user capabilities only if you plan to use those tools.

![Notion integration capabilities](https://raw.githubusercontent.com/suekou/mcp-notion-server/HEAD/docs/assets/setup/capabilities.png)

### 3. Grant content access

Open the **Content access** tab for your integration, then select the pages or databases you want the MCP server to read or edit.

You can also grant access from the target Notion page or database: open the `...` menu, choose **Connections**, then add your integration.

Notion only lets an integration access pages and databases that have been shared with it. A connection added to a page can also access that page's children.

![Edit integration content access](https://raw.githubusercontent.com/suekou/mcp-notion-server/HEAD/docs/assets/setup/edit-connection.png)

### 4. Copy the internal integration token

Copy the integration secret. This value becomes `NOTION_API_TOKEN` in your MCP host config.

![Copy internal integration token](https://raw.githubusercontent.com/suekou/mcp-notion-server/HEAD/docs/assets/setup/access-token.png)

### 5. Configure your MCP host

For Cursor, Claude Desktop, and other MCP hosts, add this server config to your MCP settings:

```json
{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": ["-y", "@suekou/mcp-notion-server"],
      "env": {
        "NOTION_API_TOKEN": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
      }
    }
  }
}
```

For a locally built checkout:

```json
{
  "mcpServers": {
    "notion": {
      "command": "node",
      "args": ["/absolute/path/to/suekou-mcp-notion-server/build/index.js"],
      "env": {
        "NOTION_API_TOKEN": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
      }
    }
  }
}
```

## Recommended Workflow

1. Use `notion_find` to locate a page or data source.
2. Use `notion_read_page` for page context and editable block IDs.
3. Use `notion_inspect_data_source` before querying or creating data source items.
4. Use `notion_query_data_source_by_values` and `notion_create_data_source_item_from_values` for common data source work.
5. Use `notion_append_markdown`, `notion_append_content`, `notion_update_content`, or `notion_update_content_batch` for normal page edits.
6. Fall back to raw JSON tools only when the simplified tools do not cover the Notion API shape you need.

## For Developers

These references are mainly for development, customization, and advanced MCP workflows:

- [Configuration](docs/configuration.md): environment variables, command-line arguments, MCP host examples, development commands, and troubleshooting.
- [Tools](docs/tools.md): complete tool reference grouped by workflow area.
- [Workflows](docs/workflows.md): practical read, write, data source, migration, and error-handling guidance.
- [MCP Apps](docs/mcp-apps.md): interactive Data Source Explorer and Page Workbench details.

## Development

This project uses Node.js 22 or newer and pnpm.

```bash
pnpm install --frozen-lockfile
pnpm run build
pnpm test
```

Use the MCP inspector during local development:

```bash
pnpm run inspector
```

## License

This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
