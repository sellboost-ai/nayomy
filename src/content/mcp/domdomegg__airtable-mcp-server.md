---
name: "domdomegg/airtable-mcp-server"
description: "Airtable database integration with schema inspection, read and write capabilities"
category: "Databases"
repo: "domdomegg/airtable-mcp-server"
stars: 444
url: "https://github.com/domdomegg/airtable-mcp-server"
body_length: 10473
license: "MIT"
language: "TypeScript"
homepage: "https://www.npmjs.com/package/airtable-mcp-server"
body_tr: |-
  # airtable-mcp-server

  Model Context Protocol sunucusu, Airtable veritabanlarına okuma ve yazma erişimi sağlar. Bu sunucu, LLM'lerin veritabanı şemalarını incelemesini, ardından kayıtları okumasını ve yazmasını sağlar.

  https://github.com/user-attachments/assets/c8285e76-d0ed-4018-94c7-20535db6c944

  ## Kurulum

  **Adım 1**: [Buraya tıklayarak bir Airtable kişisel erişim jetonu oluşturun](https://airtable.com/create/tokens/new). Ayrıntılar:
  - Ad: İstediğiniz herhangi bir ad, örneğin 'Airtable MCP Server Token'.
  - Kapsamlar: `schema.bases:read`, `data.records:read` ve isteğe bağlı olarak `schema.bases:write`, `data.records:write`, `data.recordComments:read` ve `data.recordComments:write`.
  - Erişim: Erişmek istediğiniz tabanlar. Emin değilseniz, 'Tüm kaynakları ekle' seçeneğini seçin.

  Jetonu bir kenara koyun, bir sonraki adımda ihtiyacınız olacak. `pat123.abc123` benzeri görünmelidir (ancak daha uzun).

  **Adım 2**: Tercih ettiğiniz istemci için aşağıdaki talimatları izleyin:

  - [Claude Desktop](#claude-desktop)
  - [Cursor](#cursor)
  - [Cline](#cline)

  ### Claude Desktop

  #### (Önerilir) Uzantılar tarayıcısı üzerinden

  1. Claude Desktop'ı açın ve Ayarlar → Uzantılar'a gidin
  2. 'Uzantılara gözat'ı tıklayın ve 'Airtable MCP Server'ı bulun
  3. 'Kur'ı tıklayın ve API anahtarınızı yapıştırın

  #### (İleri) Alternatif: Manuel .mcpb kurulumu üzerinden

  1. [GitHub Actions geçmişinde](https://github.com/domdomegg/airtable-mcp-server/actions/workflows/ci.yaml?query=branch%3Amaster) en son mcpb derlemesini bulun (en üstteki)
  2. 'Artifacts' bölümünde, `airtable-mcp-server-mcpb` dosyasını indirin
  3. `.zip` dosyasını `.mcpb` olarak yeniden adlandırın
  4. Claude Desktop ile açmak için `.mcpb` dosyasını çift tıklayın
  5. "Kur"ı tıklayın ve API anahtarınızla yapılandırın

  #### (İleri) Alternatif: JSON yapılandırması üzerinden

  1. [Node.js](https://nodejs.org/en/download) yükleyin
  2. Claude Desktop'ı açın ve Ayarlar → Geliştirici'ye gidin
  3. `claude_desktop_config.json` dosyanızı açmak için "Yapılandırmayı Düzenle'yi tıklayın
  4. Aşağıdaki yapılandırmayı "mcpServers" bölümüne ekleyin ve `pat123.abc123` yerine API anahtarınızı yazın:

  ```json
  {
    "mcpServers": {
      "airtable": {
        "command": "npx",
        "args": [
          "-y",
          "airtable-mcp-server"
        ],
        "env": {
          "AIRTABLE_API_KEY": "pat123.abc123",
        }
      }
    }
  }
  ```

  5. Dosyayı kaydedin ve Claude Desktop'ı yeniden başlatın

  ### Cursor

  #### (Önerilir) Tek tıklama kurulumu üzerinden

  1. [![MCP Sunucusunu Kur](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/install-mcp?name=airtable&config=JTdCJTIyY29tbWFuZCUyMiUzQSUyMm5weCUyMC15JTIwYWlydGFibGUtbWNwLXNlcnZlciUyMiUyQyUyMmVudiUyMiUzQSU3QiUyMkFJUlRBQkxFX0FQSV9LRVklMjIlM0ElMjJwYXQxMjMuYWJjMTIzJTIyJTdEJTdE) üzerine tıklayın
  2. API anahtarınızı eklemek için `mcp.json` dosyanızı düzenleyin

  #### (İleri) Alternatif: JSON yapılandırması üzerinden

  Global (`~/.cursor/mcp.json`) veya projeye özel (`.cursor/mcp.json`) bir yapılandırma dosyası oluşturun ve `pat123.abc123` yerine API anahtarınızı yazın:

  ```json
  {
    "mcpServers": {
      "airtable": {
        "command": "npx",
        "args": ["-y", "airtable-mcp-server"],
        "env": {
          "AIRTABLE_API_KEY": "pat123.abc123"
        }
      }
    }
  }
  ```

  ### Cline

  #### (Önerilir) Market üzerinden

  1. Cline uzantısında "MCP Servers" simgesini tıklayın
  2. "Airtable" araması yapın ve "Kur"ı tıklayın
  3. Sunucuyu kurmak için istemleri izleyin

  #### (İleri) Alternatif: JSON yapılandırması üzerinden

  1. Cline uzantısında "MCP Servers" simgesini tıklayın
  2. "Kurulu" sekmesine tıklayın, ardından en alttaki "MCP Sunucularını Yapılandır" düğmesini tıklayın
  3. Aşağıdaki yapılandırmayı "mcpServers" bölümüne ekleyin ve `pat123.abc123` yerine API anahtarınızı yazın:

  ```json
  {
    "mcpServers": {
      "airtable": {
        "type": "stdio",
        "command": "npx",
        "args": ["-y", "airtable-mcp-server"],
        "env": {
          "AIRTABLE_API_KEY": "pat123.abc123"
        }
      }
    }
  }
  ```

  ## Bileşenler

  ### Araçlar

  - **list_records**
    - Belirtilen bir Airtable tablosundan kayıtları listeler
    - Giriş parametreleri:
      - `baseId` (string, zorunlu): Airtable tabanının kimliği
      - `tableId` (string, zorunlu): Sorgulanacak tablonun kimliği
      - `maxRecords` (number, isteğe bağlı): Döndürülecek maksimum kayıt sayısı. Varsayılan 100.
      - `filterByFormula` (string, isteğe bağlı): Kayıtları filtrelemek için Airtable formülü

  - **search_records**
    - Belirli metni içeren kayıtları arar
    - Giriş parametreleri:
      - `baseId` (string, zorunlu): Airtable tabanının kimliği
      - `tableId` (string, zorunlu): Sorgulanacak tablonun kimliği
      - `searchTerm` (string, zorunlu): Kayıtlarda aranacak metin
      - `fieldIds` (array, isteğe bağlı): Aranacak belirli alan kimlikleri. Sağlanmazsa, tüm metin tabanlı alanlar aranır.
      - `maxRecords` (number, isteğe bağlı): Döndürülecek maksimum kayıt sayısı. Varsayılan 100.

  - **list_bases**
    - Erişilebilir tüm Airtable tabanlarını listeler
    - Giriş parametresi gerekli değil
    - Taban kimliğini, adını ve izin düzeyini döndürür

  - **list_tables**
    - Belirtilen bir tabandaki tüm tabloları listeler
    - Giriş parametreleri:
      - `baseId` (string, zorunlu): Airtable tabanının kimliği
      - `detailLevel` (string, isteğe bağlı): Tablolar hakkında alınacak ayrıntı düzeyi (`tableIdentifiersOnly`, `identifiersOnly` veya `full`)
    - Tablo kimliğini, adını, açıklamasını, alanları ve görünümleri (verilen `detailLevel`'e kadar) döndürür

  - **describe_table**
    - Belirtilen bir tablo hakkında ayrıntılı bilgi alır
    - Giriş parametreleri:
      - `baseId` (string, zorunlu): Airtable tabanının kimliği
      - `tableId` (string, zorunlu): Açıklanacak tablonun kimliği
      - `detailLevel` (string, isteğe bağlı): Tablo hakkında alınacak ayrıntı düzeyi (`tableIdentifiersOnly`, `identifiersOnly` veya `full`)
    - list_tables ile aynı biçimi döndürür, ancak tek bir tablo için
    - Tabanın tüm tablolar hakkında bilgi almadan belirli bir tablo hakkında ayrıntılar almak için kullanışlıdır

  - **get_record**
    - Kimliğe göre belirli bir kaydı alır
    - Giriş parametreleri:
      - `baseId` (string, zorunlu): Airtable tabanının kimliği
      - `tableId` (string, zorunlu): Tablonun kimliği
      - `recordId` (string, zorunlu): Alınacak kaydın kimliği

  - **create_record**
    - Bir tabloda yeni bir kayıt oluşturur
    - Giriş parametreleri:
      - `baseId` (string, zorunlu): Airtable tabanının kimliği
      - `tableId` (string, zorunlu): Tablonun kimliği
      - `fields` (object, zorunlu): Yeni kayıt için alanlar ve değerler

  - **update_records**
    - Bir tabloda bir veya daha fazla kaydı günceller
    - Giriş parametreleri:
      - `baseId` (string, zorunlu): Airtable tabanının kimliği
      - `tableId` (string, zorunlu): Tablonun kimliği
      - `records` (array, zorunlu): Kayıt kimliği ve güncellenecek alanları içeren nesnelerin dizisi

  - **delete_records**
    - Bir tablodan bir veya daha fazla kaydı siler
    - Giriş parametreleri:
      - `baseId` (string, zorunlu): Airtable tabanının kimliği
      - `tableId` (string, zorunlu): Tablonun kimliği
      - `recordIds` (array, zorunlu): Silinecek kayıt kimliklerinin dizisi

  - **create_table**
    - Bir tabanda yeni bir tablo oluşturur
    - Giriş parametreleri:
      - `baseId` (string, zorunlu): Airtable tabanının kimliği
      - `name` (string, zorunlu): Yeni tablonun adı
      - `description` (string, isteğe bağlı): Tablonun açıklaması
      - `fields` (array, zorunlu): Alan tanımlarının dizisi (ad, tür, açıklama, seçenekler)

  - **update_table**
    - Tablonun adını veya açıklamasını günceller
    - Giriş parametreleri:
      - `baseId` (string, zorunlu): Airtable tabanının kimliği
      - `tableId` (string, zorunlu): Tablonun kimliği
      - `name` (string, isteğe bağlı): Tablo için yeni ad
      - `description` (string, isteğe bağlı): Tablo için yeni açıklama

  - **create_field**
    - Bir tabloda yeni bir alan oluşturur
    - Giriş parametreleri:
      - `baseId` (string, zorunlu): Airtable tabanının kimliği
      - `tableId` (string, zorunlu): Tablonun kimliği
      - `name` (string, zorunlu): Yeni alanın adı
      - `type` (string, zorunlu): Alanın türü
      - `description` (string, isteğe bağlı): Alanın açıklaması
      - `options` (object, isteğe bağlı): Alana özel seçenekler

  - **update_field**
    - Alanın adını veya açıklamasını günceller
    - Giriş parametreleri:
      - `baseId` (string, zorunlu): Airtable tabanının kimliği
      - `tableId` (string, zorunlu): Tablonun kimliği
      - `fieldId` (string, zorunlu): Alanın kimliği
      - `name` (string, isteğe bağlı): Alan için yeni ad
      - `description` (string, isteğe bağlı): Alan için yeni açıklama

  - **create_comment**
    - Bir kaydın üzerine yorum oluşturur
    - Giriş parametreleri:
      - `baseId` (string, zorunlu): Airtable tabanının kimliği
      - `tableId` (string, zorunlu): Tablonun kimliği
      - `recordId` (string, zorunlu): Kaydın kimliği
      - `text` (string, zorunlu): Yorum metni
      - `parentCommentId` (string, isteğe bağlı): İş parçacıklı yanıtlar için üst yorum kimliği
    - Oluşturulan yorumu kimliği, yazarı, oluşturulma saati ve metni ile döndürür

  - **list_comments**
    - Bir kaydın üzerindeki yorumları listeler
    - Giriş parametreleri:
      - `baseId` (string, zorunlu): Airtable tabanının kimliği
      - `tableId` (string, zorunlu): Tablonun kimliği
      - `recordId` (string, zorunlu): Kaydın kimliği
      - `pageSize` (number, isteğe bağlı): Döndürülecek yorum sayısı (maks. 100, varsayılan 100)
      - `offset` (string, isteğe bağlı): Ek yorumları almak için pagination offseti
    - Yazarı, metni, zaman damgalarını, tepkileri ve bahsetmeleri içeren yorumlar dizisini döndürür
    - Yorumlar en yeniden en eski'ye doğru döndürülür

  ### HTTP Transport

  Sunucu uzak MCP istemcileri ile kullanmak için HTTP modunda da çalışabilir:

  ```bash
  MCP_TRANSPORT=http PORT=3000 npx airtable-mcp-server
  ```

  Bu, `http://localhost:3000/mcp` adresinde durumsuz bir HTTP sunucusu başlatır. Not: HTTP transport'un yerleşik kimlik doğrulaması yoktur - yalnızca ters proxy arkasında veya güvenli bir ortamda kullanın.

  ## Katkıda Bulunma

  GitHub'da pull requestlere açığız! Başlamak için:

  1. Git ve Node.js'yi yükleyin
  2. Depoyu klonlayın
  3. `npm install` ile bağımlılıkları yükleyin
  4. Testleri çalıştırmak için `npm run test` çalıştırın
  5. `npm run build` ile derleyin
    - [`src/index.ts`](./src/index.ts) dosyasını düzenledikten sonra otomatik olarak derlemek için `npm run build:watch` kullanabilirsiniz. Bu, kaydedin, Claude Desktop'ı yeniden yükleyin (Ctrl/Cmd+R ile) ve değişiklikler uygulanacak anlamına gelir.

  ## Sürümler

  Sürümler [semantic versioning spec](https://semver.org/) izler.

  Sürüm yayınlamak için:

  1. Sürümü yükseltmek için `npm version <major | minor | patch>` kullanın
  2. Etiketlerle göndermek için `git push --follow-tags` çalıştırın
  3. GitHub Actions'ın NPM kayıt defterine yayınlanmasını bekleyin.
---

# airtable-mcp-server

A Model Context Protocol server that provides read and write access to Airtable databases. This server enables LLMs to inspect database schemas, then read and write records.

https://github.com/user-attachments/assets/c8285e76-d0ed-4018-94c7-20535db6c944

## Installation

**Step 1**: [Create an Airtable personal access token by clicking here](https://airtable.com/create/tokens/new). Details:
- Name: Anything you want e.g. 'Airtable MCP Server Token'.
- Scopes: `schema.bases:read`, `data.records:read`, and optionally `schema.bases:write`, `data.records:write`, `data.recordComments:read`, and `data.recordComments:write`.
- Access: The bases you want to access. If you're not sure, select 'Add all resources'.

Keep the token handy, you'll need it in the next step. It should look something like `pat123.abc123` (but longer).

**Step 2**: Follow the instructions below for your preferred client:

- [Claude Desktop](#claude-desktop)
- [Cursor](#cursor)
- [Cline](#cline)

### Claude Desktop

#### (Recommended) Via the extensions browser

1. Open Claude Desktop and go to Settings → Extensions
2. Click 'Browse Extensions' and find 'Airtable MCP Server'
3. Click 'Install' and paste in your API key

#### (Advanced) Alternative: Via manual .mcpb installation

1. Find the latest mcpb build in [the GitHub Actions history](https://github.com/domdomegg/airtable-mcp-server/actions/workflows/ci.yaml?query=branch%3Amaster) (the top one)
2. In the 'Artifacts' section, download the `airtable-mcp-server-mcpb` file
3. Rename the `.zip` file to `.mcpb`
4. Double-click the `.mcpb` file to open with Claude Desktop
5. Click "Install" and configure with your API key

#### (Advanced) Alternative: Via JSON configuration

1. Install [Node.js](https://nodejs.org/en/download)
2. Open Claude Desktop and go to Settings → Developer
3. Click "Edit Config" to open your `claude_desktop_config.json` file
4. Add the following configuration to the "mcpServers" section, replacing `pat123.abc123` with your API key:

```json
{
  "mcpServers": {
    "airtable": {
      "command": "npx",
      "args": [
        "-y",
        "airtable-mcp-server"
      ],
      "env": {
        "AIRTABLE_API_KEY": "pat123.abc123",
      }
    }
  }
}
```

5. Save the file and restart Claude Desktop

### Cursor

#### (Recommended) Via one-click install

1. Click [![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/install-mcp?name=airtable&config=JTdCJTIyY29tbWFuZCUyMiUzQSUyMm5weCUyMC15JTIwYWlydGFibGUtbWNwLXNlcnZlciUyMiUyQyUyMmVudiUyMiUzQSU3QiUyMkFJUlRBQkxFX0FQSV9LRVklMjIlM0ElMjJwYXQxMjMuYWJjMTIzJTIyJTdEJTdE)
2. Edit your `mcp.json` file to insert your API key

#### (Advanced) Alternative: Via JSON configuration

Create either a global (`~/.cursor/mcp.json`) or project-specific (`.cursor/mcp.json`) configuration file, replacing `pat123.abc123` with your API key:

```json
{
  "mcpServers": {
    "airtable": {
      "command": "npx",
      "args": ["-y", "airtable-mcp-server"],
      "env": {
        "AIRTABLE_API_KEY": "pat123.abc123"
      }
    }
  }
}
```

### Cline

#### (Recommended) Via marketplace

1. Click the "MCP Servers" icon in the Cline extension
2. Search for "Airtable" and click "Install"
3. Follow the prompts to install the server

#### (Advanced) Alternative: Via JSON configuration

1. Click the "MCP Servers" icon in the Cline extension
2. Click on the "Installed" tab, then the "Configure MCP Servers" button at the bottom
3. Add the following configuration to the "mcpServers" section, replacing `pat123.abc123` with your API key:

```json
{
  "mcpServers": {
    "airtable": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "airtable-mcp-server"],
      "env": {
        "AIRTABLE_API_KEY": "pat123.abc123"
      }
    }
  }
}
```

## Components

### Tools

- **list_records**
  - Lists records from a specified Airtable table
  - Input parameters:
    - `baseId` (string, required): The ID of the Airtable base
    - `tableId` (string, required): The ID of the table to query
    - `maxRecords` (number, optional): Maximum number of records to return. Defaults to 100.
    - `filterByFormula` (string, optional): Airtable formula to filter records

- **search_records**
  - Search for records containing specific text
  - Input parameters:
    - `baseId` (string, required): The ID of the Airtable base
    - `tableId` (string, required): The ID of the table to query
    - `searchTerm` (string, required): Text to search for in records
    - `fieldIds` (array, optional): Specific field IDs to search in. If not provided, searches all text-based fields.
    - `maxRecords` (number, optional): Maximum number of records to return. Defaults to 100.

- **list_bases**
  - Lists all accessible Airtable bases
  - No input parameters required
  - Returns base ID, name, and permission level

- **list_tables**
  - Lists all tables in a specific base
  - Input parameters:
    - `baseId` (string, required): The ID of the Airtable base
    - `detailLevel` (string, optional): The amount of detail to get about the tables (`tableIdentifiersOnly`, `identifiersOnly`, or `full`)
  - Returns table ID, name, description, fields, and views (to the given `detailLevel`)

- **describe_table**
  - Gets detailed information about a specific table
  - Input parameters:
    - `baseId` (string, required): The ID of the Airtable base
    - `tableId` (string, required): The ID of the table to describe
    - `detailLevel` (string, optional): The amount of detail to get about the table (`tableIdentifiersOnly`, `identifiersOnly`, or `full`)
  - Returns the same format as list_tables but for a single table
  - Useful for getting details about a specific table without fetching information about all tables in the base

- **get_record**
  - Gets a specific record by ID
  - Input parameters:
    - `baseId` (string, required): The ID of the Airtable base
    - `tableId` (string, required): The ID of the table
    - `recordId` (string, required): The ID of the record to retrieve

- **create_record**
  - Creates a new record in a table
  - Input parameters:
    - `baseId` (string, required): The ID of the Airtable base
    - `tableId` (string, required): The ID of the table
    - `fields` (object, required): The fields and values for the new record

- **update_records**
  - Updates one or more records in a table
  - Input parameters:
    - `baseId` (string, required): The ID of the Airtable base
    - `tableId` (string, required): The ID of the table
    - `records` (array, required): Array of objects containing record ID and fields to update

- **delete_records**
  - Deletes one or more records from a table
  - Input parameters:
    - `baseId` (string, required): The ID of the Airtable base
    - `tableId` (string, required): The ID of the table
    - `recordIds` (array, required): Array of record IDs to delete

- **create_table**
  - Creates a new table in a base
  - Input parameters:
    - `baseId` (string, required): The ID of the Airtable base
    - `name` (string, required): Name of the new table
    - `description` (string, optional): Description of the table
    - `fields` (array, required): Array of field definitions (name, type, description, options)

- **update_table**
  - Updates a table's name or description
  - Input parameters:
    - `baseId` (string, required): The ID of the Airtable base
    - `tableId` (string, required): The ID of the table
    - `name` (string, optional): New name for the table
    - `description` (string, optional): New description for the table

- **create_field**
  - Creates a new field in a table
  - Input parameters:
    - `baseId` (string, required): The ID of the Airtable base
    - `tableId` (string, required): The ID of the table
    - `name` (string, required): Name of the new field
    - `type` (string, required): Type of the field
    - `description` (string, optional): Description of the field
    - `options` (object, optional): Field-specific options

- **update_field**
  - Updates a field's name or description
  - Input parameters:
    - `baseId` (string, required): The ID of the Airtable base
    - `tableId` (string, required): The ID of the table
    - `fieldId` (string, required): The ID of the field
    - `name` (string, optional): New name for the field
    - `description` (string, optional): New description for the field

- **create_comment**
  - Creates a comment on a record
  - Input parameters:
    - `baseId` (string, required): The ID of the Airtable base
    - `tableId` (string, required): The ID of the table
    - `recordId` (string, required): The ID of the record
    - `text` (string, required): The comment text
    - `parentCommentId` (string, optional): Parent comment ID for threaded replies
  - Returns the created comment with ID, author, creation time, and text

- **list_comments**
  - Lists comments on a record
  - Input parameters:
    - `baseId` (string, required): The ID of the Airtable base
    - `tableId` (string, required): The ID of the table
    - `recordId` (string, required): The ID of the record
    - `pageSize` (number, optional): Number of comments to return (max 100, default 100)
    - `offset` (string, optional): Pagination offset for retrieving additional comments
  - Returns comments array with author, text, timestamps, reactions, and mentions
  - Comments are returned from newest to oldest

### HTTP Transport

The server can also run in HTTP mode for use with remote MCP clients:

```bash
MCP_TRANSPORT=http PORT=3000 npx airtable-mcp-server
```

This starts a stateless HTTP server at `http://localhost:3000/mcp`. Note: HTTP transport has no built-in authentication - only use behind a reverse proxy or in a secured environment.

## Contributing

Pull requests are welcomed on GitHub! To get started:

1. Install Git and Node.js
2. Clone the repository
3. Install dependencies with `npm install`
4. Run `npm run test` to run tests
5. Build with `npm run build`
  - You can use `npm run build:watch` to automatically build after editing [`src/index.ts`](./src/index.ts). This means you can hit save, reload Claude Desktop (with Ctrl/Cmd+R), and the changes apply.

## Releases

Versions follow the [semantic versioning spec](https://semver.org/).

To release:

1. Use `npm version <major | minor | patch>` to bump the version
2. Run `git push --follow-tags` to push with tags
3. Wait for GitHub Actions to publish to the NPM registry.
