---
name: "ivo-toby/contentful-mcp"
description: "Update, create, delete content, content-models and assets in your Contentful Space"
description_tr: "Contentful Space'inizde içerik, içerik modelleri ve assets güncelleyin, oluşturun ve silin."
category: "Other Tools and Integrations"
repo: "ivo-toby/contentful-mcp"
stars: 60
url: "https://github.com/ivo-toby/contentful-mcp"
body_length: 13228
license: "MIT"
language: "TypeScript"
body_tr: |-
  # Contentful MCP Server

  ## Uyarı

  Bu topluluk tarafından yönetilen bir sunucudur! Contentful resmi bir sunucu yayınlamıştır ve bunu [burada](https://github.com/contentful/contentful-mcp-server) bulabilirsiniz

  [![smithery badge](https://smithery.ai/badge/@ivotoby/contentful-management-mcp-server)](https://smithery.ai/server/@ivotoby/contentful-management-mcp-server)

  Contentful'un Content Management API'si ile entegre olan ve kapsamlı içerik yönetimi yetenekleri sağlayan bir MCP server uygulaması.

  - Lütfen dikkat edin \*; eğer kodu ilgilendirmiyorsa ve bu MCP'yi Claude Desktop'ta (veya MCP server'ları kullanabilen başka herhangi bir araçta) kullanmak istiyorsanız, bu repo'yu klonlamanıza gerek yoktur. Claude desktop'ta kurmak yeterlidir. Kurulum talimatları için "Claude Desktop ile Kullanım" bölümüne bakınız.

  <a href="https://glama.ai/mcp/servers/l2fxeaot4p"></a>

  ## Özellikler

  - **İçerik Yönetimi**: Girdiler ve varlıklar için tam CRUD işlemleri
  - **Yorum Yönetimi**: Girdilerde yorumlar oluşturun, alın ve yönetin; düz metin ve zengin metin formatları ile başlık konuşmaları desteği
  - **Alan Yönetimi**: Alanları ve ortamları oluşturun, güncelleyin ve yönetin
  - **İçerik Türleri**: İçerik türü tanımlarını yönetin
  - **Yerelleştirme**: Birden fazla dil desteği
  - **Yayın**: İçerik yayın akışını kontrol edin
  - **Toplu İşlemler**: Birden fazla girdi ve varlık arasında toplu yayın, yayından kaldırma ve doğrulama gerçekleştirin
  - **Akıllı Sayfalama**: Liste işlemleri bağlam penceresi taşmasını önlemek için istek başına maksimum 3 öğe döndürür; yerleşik sayfalama desteğiyle

  ## Sayfalama

  LLM'lerde bağlam penceresi taşmasını önlemek için, liste işlemleri (search_entries ve list_assets gibi) istek başına 3 öğeyle sınırlandırılmıştır. Her yanıt içerir:

  - Mevcut toplam öğe sayısı
  - Mevcut sayfa öğeleri (maks 3)
  - Kalan öğe sayısı
  - Sonraki sayfa için Skip değeri
  - LLM'yi daha fazla öğe almayı teklif etmeye yönlendiren mesaj

  Bu sayfalama sistemi, LLM'nin bağlam penceresi limitlerini korurken büyük veri setlerini verimli bir şekilde işlemesine olanak sağlar.

  ## Toplu İşlemler

  Toplu işlemler özelliği, birden fazla içerik öğesinin eşzamanlı yönetimini sağlar:

  - **Asenkron İşleme**: İşlemler asenkron olarak çalışır ve durum güncellemeleri sağlar
  - **Verimli İçerik Yönetimi**: Tek bir API çağrısında birden fazla girdi veya varlığı işleyin
  - **Durum İzleme**: Başarı ve başarısızlık sayılarıyla ilerlemeyi izleyin
  - **Kaynak Optimizasyonu**: API çağrılarını azaltın ve toplu işlemler için performansı artırın

  Bu toplu işlem araçları, içerik geçişleri, kitlesel güncellemeler veya toplu yayın iş akışları için idealdir.

  ## Araçlar

  ### Girdi Yönetimi

  - **search_entries**: Sorgu parametrelerini kullanarak girdileri arayın
  - **create_entry**: Yeni girdiler oluşturun
  - **get_entry**: Mevcut girdileri alın
  - **update_entry**: Girdi alanlarını güncelleyin
  - **delete_entry**: Girdileri silin
  - **publish_entry**: Girdileri yayınlayın
  - **unpublish_entry**: Girdilerin yayınını kaldırın

  ### Yorum Yönetimi

  - **get_comments**: Durum filtresiyle (aktif, çözüldü, tümü) bir girdinin yorumlarını alın
  - **create_comment**: Girdilerde yeni yorumlar oluşturun; düz metin ve zengin metin formatları desteğiyle. Mevcut yorumlara yanıt vermek için parent yorum ID'si sağlayarak başlık konuşmaları destekleyin
  - **get_single_comment**: ID'ye göre bir girdinin belirli bir yorumunu alın
  - **delete_comment**: Bir girdiden belirli bir yorumu silin
  - **update_comment**: Mevcut yorumları yeni body içeriği veya durum değişiklikleriyle güncelleyin

  #### Başlık Konuşmaları

  Yorumlar yapılandırılmış konuşmaları etkinleştirmek ve 512 karakterlik limiti aşmak için başlık işlevini destekler:

  - **Yorumlara Yanıt Verin**: Mevcut bir yoruma yanıt vermek için `create_comment`'de `parent` parametresini kullanın
  - **Başlık Konuşmaları**: Belirli yorumlara yanıt vererek konuşma ağaçları oluşturun
  - **Genişletilmiş Tartışmalar**: Başlık yanıtları oluşturarak 512 karakterlik limiti aşın ve daha uzun mesajları sürdürün
  - **Konuşma Bağlamı**: İlgili yorumları başlık içinde organize ederek tartışmalarda bağlam koruyun

  Örnek kullanım:

  1. Ana yorum oluşturun: `create_comment` ile `entryId`, `body` ve `status`
  2. Bu yoruma yanıt verin: `create_comment` ile `entryId`, `body`, `status` ve `parent` (yanıt verdiğiniz yorum ID'si)
  3. Başlığı devam ettirin: Başlığın herhangi bir yorumuna yanıt verin ve onun ID'sini `parent` olarak kullanın

  ### Toplu İşlemler

  - **bulk_publish**: Birden fazla girdiy ve varlığı tek bir işlemde yayınlayın. Varlık dizisini (girdiler ve varlıklar) kabul eder ve yayınlarını toplu olarak işler.
  - **bulk_unpublish**: Birden fazla girdiy ve varlığın yayınını tek bir işlemde kaldırın. bulk_publish'e benzer ancak içeriği delivery API'sinden kaldırır.
  - **bulk_validate**: Birden fazla girdiy içerik tutarlılığı, referansları ve gerekli alanlar açısından doğrulayın. İçeriği değiştirmeden doğrulama sonuçlarını döndürün.

  ### Varlık Yönetimi

  - **list_assets**: Varlıkları sayfalama ile listeleyin (sayfa başına 3 öğe)
  - **upload_asset**: Meta verilerle yeni varlıklar yükleyin
  - **get_asset**: Varlık ayrıntılarını ve bilgisini alın
  - **update_asset**: Varlık metaverilerini ve dosyalarını güncelleyin
  - **delete_asset**: Varlıkları alandan silin
  - **publish_asset**: Varlıkları delivery API'sine yayınlayın
  - **unpublish_asset**: Varlıkların yayınını delivery API'sinden kaldırın

  ### Alan & Ortam Yönetimi

  - **list_spaces**: Mevcut alanları listeleyin
  - **get_space**: Alan ayrıntılarını alın
  - **list_environments**: Bir alandaki ortamları listeleyin
  - **create_environment**: Yeni ortam oluşturun
  - **delete_environment**: Ortamı silin

  ### İçerik Türü Yönetimi

  - **list_content_types**: Mevcut içerik türlerini listeleyin
  - **get_content_type**: İçerik türü ayrıntılarını alın
  - **create_content_type**: Yeni içerik türü oluşturun
  - **update_content_type**: İçerik türünü güncelleyin
  - **delete_content_type**: İçerik türünü silin
  - **publish_content_type**: Bir içerik türünü yayınlayın

  ## Geliştirme Araçları

  ### MCP Inspector

  Proje, geliştirme ve hata ayıklamaya yardımcı olan bir MCP Inspector aracı içerir:

  - **İnceleme Modu**: `npm run inspect` çalıştırarak inspector'u başlatın, http://localhost:5173 adresine giderek inspector'u açabilirsiniz
  - **Watch Modu**: Dosyalar değiştiğinde inspector'u otomatik olarak yeniden başlatmak için `npm run inspect:watch` kullanın
  - **Görsel Arayüz**: Inspector, MCP araçlarını test etmek ve hata ayıklamak için web arayüzü sağlar
  - **Gerçek Zamanlı Test**: Araçları deneyin ve yanıtlarını anında görün
  - **Toplu İşlem Testi**: İlerleme ve sonuçlar hakkında görsel geri bildirimle toplu işlemleri test edin ve izleyin

  Proje ayrıca her değişiklikte MCP server'ı yeniden derleyip yükleyen `npm run dev` komutu içerir.

  ## Yapılandırma

  ### Ön Koşullar

  1. [Contentful](https://www.contentful.com/) adresinde bir Contentful hesabı oluşturun
  2. Hesap ayarlarınızdan bir Content Management API token'ı oluşturun

  ### Ortam Değişkenleri

  Bu değişkenler argüman olarak da ayarlanabilir

  - `CONTENTFUL_HOST` / `--host`: Contentful Management API Endpoint'i (varsayılan: https://api.contentful.com)
  - `CONTENTFUL_MANAGEMENT_ACCESS_TOKEN` / `--management-token`: Content Management API token'ınız
  - `ENABLE_HTTP_SERVER` / `--http`: HTTP/SSE modunu etkinleştirmek için "true" olarak ayarlayın
  - `HTTP_PORT` / `--port`: HTTP server'ı için port (varsayılan: 3000)
  - `HTTP_HOST` / `--http-host`: HTTP server'ı için host (varsayılan: localhost)
  - `DISABLE_AI_ACTIONS`: Başlangıçta AI Actions'u getirmeyi devre dışı bırakmak için "true" olarak ayarlayın (bu özelliğe erişiminiz yoksa yararlıdır)

  ### Alan ve Ortam Kapsamı

  LLM'nin yalnızca tanımlı alan/ortam ID'leri üzerinde işlemler yapmasını sağlamak için spaceId ve EnvironmentId'yi kapsamaya alabilirsiniz.
  Bu, belirli alanlar içinde çalışması gereken ajanları desteklemek için tasarlanmıştır. Hem `SPACE_ID` hem de `ENVIRONMENT_ID` ortam değişkenleri ayarlanırsa, araçlar bu değerlerin gerekli olduğunu bildirmez ve handler'lar CMA işlemleri yapmak için ortam değişkenlerini kullanır.
  Alan handler'larındaki araçlara da erişimi kaybedersiniz, çünkü bu araçlar alanlar arasında çalışır.
  `--space-id` ve `--environment-id` argümanlarını kullanarak `SPACE_ID` ve `ENVIRONMENT_ID`'yi de ekleyebilirsiniz

  #### App Identity Kullanımı

  Management token'ı sağlamak yerine, kimlik doğrulamasını işlemek için [App Identity](https://www.contentful.com/developers/docs/extensibility/app-framework/app-identity/) de kullanabilirsiniz. MCP server'ı çağırırken bir Contentful Uygulaması kurup yüklemeniz ve aşağıdaki parametreleri ayarlamanız gerekir:

  - `--app-id` = Apptoken sağlayan app Id
  - `--private-key` = Kullanıcı arayüzünde oluşturduğunuz ve `app_id` ile bağlı olan private key
  - `--space-id` = Uygulamanın kurulu olduğu spaceId
  - `--environment-id` = Uygulamanın kurulu olduğu environmentId (alan içinde)

  Bu değerlerle, MCP server'ı tanımlı alan/ortam-id'de içerik işlemler yapması için geçici bir AppToken isteyecektir. Bu, özellikle bu MCP server'ını MCP client'ı olarak hareket eden backend sistemlerde (sohbet ajanları gibi) kullanırken yararlıdır

  ### Claude Desktop ile Kullanım

  Bu MCP'yi kullanmak için bu repo'yu klonlamanıza gerek yoktur, `claude_desktop_config.json`'unuza basitçe ekleyebilirsiniz:

  `~/Library/Application Support/Claude/claude_desktop_config.json` dosyasını düzenleyin veya oluşturun
  ve aşağıdaki satırları ekleyin:

  ```json
  {
    "mcpServers": {
      "contentful": {
        "command": "npx",
        "args": ["-y", "@ivotoby/contentful-management-mcp-server"],
        "env": {
          "CONTENTFUL_MANAGEMENT_ACCESS_TOKEN": "<Your CMA token>"
        }
      }
    }
  }
  ```

  Eğer MCP Client'ınız ortam değişkenleri ayarlamayı desteklemiyorsa, yönetim token'ını şu şekilde bir argüman olarak da ayarlayabilirsiniz:

  ```json
  {
    "mcpServers": {
      "contentful": {
        "command": "npx",
        "args": [
          "-y",
          "@ivotoby/contentful-management-mcp-server",
          "--management-token",
          "<your token>",
          "--host",
          "http://api.contentful.com"
        ]
      }
    }
  }
  ```

  ### Smithery Üzerinden Kurulum

  Contentful Management Server'ı Claude Desktop'a otomatik olarak [Smithery](https://smithery.ai/server/@ivotoby/contentful-management-mcp-server) üzerinden kurmak için:

  ```bash
  npx -y @smithery/cli install @ivotoby/contentful-management-mcp-server --client claude
  ```

  ### Claude Desktop ile Geliştirme ve Kullanım

  Katkıda bulunmak ve Claude'un katkılarınızla ne yaptığını test etmek istiyorsanız;

  - `npm run dev` çalıştırın, bu her değişiklikte MCP server'ını yeniden derleyen watcher'ı başlatacaktır
  - `claude_desktop_config.json`'u projeye doğrudan referans gösterecek şekilde güncelleyin, örneğin;

  ```
  {
    "mcpServers": {
      "contentful": {
        "command": "node",
        "args": ["/Users/ivo/workspace/contentful-mcp/bin/mcp-server.js"],
        "env": {
          "CONTENTFUL_MANAGEMENT_ACCESS_TOKEN": "<Your CMA Token>"
        }
      }
    }
  }
  ```

  Bu, MCP server'daki herhangi bir değişikliği Claude ile doğrudan test etmenize olanak sağlar, ancak yeni araçlar/kaynaklar eklerseniz Claude Desktop'ı yeniden başlatmanız gerekir

  ## Taşıma Modları

  MCP server'ı iki taşıma modunu destekler:

  ### stdio Taşıması

  Varsayılan taşıma modu, iletişim için standart giriş/çıkış akışlarını kullanır. Bu, Claude Desktop gibi stdio taşımasını destekleyen MCP client'ları ile entegrasyon için idealdir.

  stdio modunu kullanmak için, server'ı `--http` bayrağı olmadan çalıştırın:

  ```bash
  npx -y contentful-mcp --management-token YOUR_TOKEN
  # veya alternatif olarak
  npx -y @ivotoby/contentful-management-mcp-server --management-token YOUR_TOKEN
  ```

  ### StreamableHTTP Taşıması

  Server'ı ayrıca MCP protokolünde tanımlanan StreamableHTTP taşımasını da destekler. Bu mod, web tabanlı entegrasyonlar için veya server'ı bağımsız bir hizmet olarak çalıştırırken yararlıdır.

  StreamableHTTP modunu kullanmak için `--http` bayrağıyla çalıştırın:

  ```bash
  npx -y contentful-mcp --management-token YOUR_TOKEN --http --port 3000
  # veya alternatif olarak
  npx -y @ivotoby/contentful-management-mcp-server --management-token YOUR_TOKEN --http --port 3000
  ```

  #### StreamableHTTP Ayrıntıları

  - Resmi MCP StreamableHTTP taşımasını kullanır
  - Standart MCP protokol işlemlerini destekler
  - Durum korumak için oturum yönetimini içerir
  - İnitialize/notify desenlerini uygun şekilde işler
  - Standart MCP client'ları ile uyumludur
  - Eski SSE taşımasının yerine modern yaklaşımı koyar

  Uygulama, standart MCP protokol belirtimini takip ederek, herhangi bir MCP client'ının özel işleme ihtiyacı olmadan server'a bağlanmasına olanak sağlar.

  ## Hata İşleme

  Server, aşağıdakiler için kapsamlı hata işleme uygular:

  - Kimlik doğrulama hataları
  - Hız sınırlaması
  - Geçersiz istekler
  - Ağ sorunları
  - API'ye özgü hatalar

  [![Verified on MseeP](https://mseep.ai/badge.svg)](https://mseep.ai/app/146d4235-bdb1-492e-b594-82fd27b77388)

  ## Lisans

  MIT License

  ## İnce Baskı

  Bu MCP Server, Claude'un (veya MCP kaynaklarını tüketebilen diğer ajanların) içerik, alanlar ve içerik modellerini güncellemesine ve silmesine olanak sağlar. Bu nedenle Claude'un Contentful alanlarınızla ne yapmasına izin verdiğinize dikkat edin!

  Bu MCP server, Contentful tarafından resmi olarak desteklenmemektedir (henüz değil)
---



# Contentful MCP Server

## Notice

This is a community driven server! Contentful has released an official server which you can find [here](https://github.com/contentful/contentful-mcp-server)

[![smithery badge](https://smithery.ai/badge/@ivotoby/contentful-management-mcp-server)](https://smithery.ai/server/@ivotoby/contentful-management-mcp-server)

An MCP server implementation that integrates with Contentful's Content Management API, providing comprehensive content management capabilities.

- Please note \*; if you are not interested in the code, and just want to use this MCP in
  Claude Desktop (or any other tool that is able to use MCP servers) you don't have to
  clone this repo, you can just set it up in Claude desktop, refer to the section
  "Usage with Claude Desktop" for instructions on how to install it.

<a href="https://glama.ai/mcp/servers/l2fxeaot4p"></a>

## Features

- **Content Management**: Full CRUD operations for entries and assets
- **Comment Management**: Create, retrieve, and manage comments on entries with support for both plain-text and rich-text formats, including threaded conversations
- **Space Management**: Create, update, and manage spaces and environments
- **Content Types**: Manage content type definitions
- **Localization**: Support for multiple locales
- **Publishing**: Control content publishing workflow
- **Bulk Operations**: Execute bulk publishing, unpublishing, and validation across multiple entries and assets
- **Smart Pagination**: List operations return maximum 3 items per request to prevent context window overflow, with built-in pagination support

## Pagination

To prevent context window overflow in LLMs, list operations (like search_entries and list_assets) are limited to 3 items per request. Each response includes:

- Total number of available items
- Current page of items (max 3)
- Number of remaining items
- Skip value for the next page
- Message prompting the LLM to offer retrieving more items

This pagination system allows the LLM to efficiently handle large datasets while maintaining context window limits.

## Bulk Operations

The bulk operations feature provides efficient management of multiple content items simultaneously:

- **Asynchronous Processing**: Operations run asynchronously and provide status updates
- **Efficient Content Management**: Process multiple entries or assets in a single API call
- **Status Tracking**: Monitor progress with success and failure counts
- **Resource Optimization**: Reduce API calls and improve performance for batch operations

These bulk operation tools are ideal for content migrations, mass updates, or batch publishing workflows.

## Tools

### Entry Management

- **search_entries**: Search for entries using query parameters
- **create_entry**: Create new entries
- **get_entry**: Retrieve existing entries
- **update_entry**: Update entry fields
- **delete_entry**: Remove entries
- **publish_entry**: Publish entries
- **unpublish_entry**: Unpublish entries

### Comment Management

- **get_comments**: Retrieve comments for an entry with filtering by status (active, resolved, all)
- **create_comment**: Create new comments on entries with support for both plain-text and rich-text formats. Supports threaded conversations by providing a parent comment ID to reply to existing comments
- **get_single_comment**: Retrieve a specific comment by its ID for an entry
- **delete_comment**: Delete a specific comment from an entry
- **update_comment**: Update existing comments with new body content or status changes

#### Threaded Comments

Comments support threading functionality to enable structured conversations and work around the 512-character limit:

- **Reply to Comments**: Use the `parent` parameter in `create_comment` to reply to an existing comment
- **Threaded Conversations**: Build conversation trees by replying to specific comments
- **Extended Discussions**: Work around the 512-character limit by creating threaded replies to continue longer messages
- **Conversation Context**: Maintain context in discussions by organizing related comments in threads

Example usage:

1. Create a main comment: `create_comment` with `entryId`, `body`, and `status`
2. Reply to that comment: `create_comment` with `entryId`, `body`, `status`, and `parent` (the ID of the comment you're replying to)
3. Continue the thread: Reply to any comment in the thread by using its ID as the `parent`

### Bulk Operations

- **bulk_publish**: Publish multiple entries and assets in a single operation. Accepts an array of entities (entries and assets) and processes their publication as a batch.
- **bulk_unpublish**: Unpublish multiple entries and assets in a single operation. Similar to bulk_publish but removes content from the delivery API.
- **bulk_validate**: Validate multiple entries for content consistency, references, and required fields. Returns validation results without modifying content.

### Asset Management

- **list_assets**: List assets with pagination (3 items per page)
- **upload_asset**: Upload new assets with metadata
- **get_asset**: Retrieve asset details and information
- **update_asset**: Update asset metadata and files
- **delete_asset**: Remove assets from space
- **publish_asset**: Publish assets to delivery API
- **unpublish_asset**: Unpublish assets from delivery API

### Space & Environment Management

- **list_spaces**: List available spaces
- **get_space**: Get space details
- **list_environments**: List environments in a space
- **create_environment**: Create new environment
- **delete_environment**: Remove environment

### Content Type Management

- **list_content_types**: List available content types
- **get_content_type**: Get content type details
- **create_content_type**: Create new content type
- **update_content_type**: Update content type
- **delete_content_type**: Remove content type
- **publish_content_type**: Publish a content type

## Development Tools

### MCP Inspector

The project includes an MCP Inspector tool that helps with development and debugging:

- **Inspect Mode**: Run `npm run inspect` to start the inspector, you can open the inspector by going to http://localhost:5173
- **Watch Mode**: Use `npm run inspect:watch` to automatically restart the inspector when files change
- **Visual Interface**: The inspector provides a web interface to test and debug MCP tools
- **Real-time Testing**: Try out tools and see their responses immediately
- **Bulk Operations Testing**: Test and monitor bulk operations with visual feedback on progress and results

The project also contains a `npm run dev` command which rebuilds and reloads the MCP server on every change.

## Configuration

### Prerequisites

1. Create a Contentful account at [Contentful](https://www.contentful.com/)
2. Generate a Content Management API token from your account settings

### Environment Variables

These variables can also be set as arguments

- `CONTENTFUL_HOST` / `--host`: Contentful Management API Endpoint (defaults to https://api.contentful.com)
- `CONTENTFUL_MANAGEMENT_ACCESS_TOKEN` / `--management-token`: Your Content Management API token
- `ENABLE_HTTP_SERVER` / `--http`: Set to "true" to enable HTTP/SSE mode
- `HTTP_PORT` / `--port`: Port for HTTP server (default: 3000)
- `HTTP_HOST` / `--http-host`: Host for HTTP server (default: localhost)
- `DISABLE_AI_ACTIONS`: Set to "true" to disable fetching AI Actions on startup (useful if you don't have access to this feature)

### Space and Environment Scoping

You can scope the spaceId and EnvironmentId to ensure the LLM will only do operations on the defined space/env ID's.
This is mainly to support agents that are to operate within specific spaces. If both `SPACE_ID` and `ENVIRONMENT_ID` env-vars are set
the tools will not report needing these values and the handlers will use the environment vars to do CMA operations.
You will also loose access to the tools in the space-handler, since these tools are across spaces.
You can also add the `SPACE_ID` and `ENVIRONMENT_ID` by using arguments `--space-id` and `--environment-id`

#### Using App Identity

Instead of providing a Management token you can also leverage [App Identity](https://www.contentful.com/developers/docs/extensibility/app-framework/app-identity/)
for handling authentication. You would have to setup and install a Contentful App and set the following parameters when calling the MCP-server:

- `--app-id` = the app Id which is providing the Apptoken
- `--private-key` = the private key you created in the user-interface with your app, tied to `app_id`
- `--space-id` = the spaceId in which the app is installed
- `--environment-id` = the environmentId (within the space) in which the app is installed.

With these values the MCP server will request a temporary AppToken to do content operation in the defined space/environment-id. This especially useful when using this MCP server in backend systems that act as MCP-client (like chat-agents)

### Usage with Claude Desktop

You do not need to clone this repo to use this MCP, you can simply add it to
your `claude_desktop_config.json`:

Add or edit `~/Library/Application Support/Claude/claude_desktop_config.json`
and add the following lines:

```json
{
  "mcpServers": {
    "contentful": {
      "command": "npx",
      "args": ["-y", "@ivotoby/contentful-management-mcp-server"],
      "env": {
        "CONTENTFUL_MANAGEMENT_ACCESS_TOKEN": "<Your CMA token>"
      }
    }
  }
}
```

If your MCPClient does not support setting environment variables you can also set the management token using an argument like this:

```json
{
  "mcpServers": {
    "contentful": {
      "command": "npx",
      "args": [
        "-y",
        "@ivotoby/contentful-management-mcp-server",
        "--management-token",
        "<your token>",
        "--host",
        "http://api.contentful.com"
      ]
    }
  }
}
```

### Installing via Smithery

To install Contentful Management Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@ivotoby/contentful-management-mcp-server):

```bash
npx -y @smithery/cli install @ivotoby/contentful-management-mcp-server --client claude
```

### Developing and using Claude desktop

If you want to contribute and test what Claude does with your contributions;

- run `npm run dev`, this will start the watcher that rebuilds the MCP server on every change
- update `claude_desktop_config.json` to reference the project directly, ie;

```
{
  "mcpServers": {
    "contentful": {
      "command": "node",
      "args": ["/Users/ivo/workspace/contentful-mcp/bin/mcp-server.js"],
      "env": {
        "CONTENTFUL_MANAGEMENT_ACCESS_TOKEN": "<Your CMA Token>"
      }
    }
  }
}
```

This will allow you to test any modification in the MCP server with Claude directly, however; if you add new tools/resources you will need to restart Claude Desktop

## Transport Modes

The MCP server supports two transport modes:

### stdio Transport

The default transport mode uses standard input/output streams for communication. This is ideal for integration with MCP clients that support stdio transport, like Claude Desktop.

To use stdio mode, simply run the server without the `--http` flag:

```bash
npx -y contentful-mcp --management-token YOUR_TOKEN
# or alternatively
npx -y @ivotoby/contentful-management-mcp-server --management-token YOUR_TOKEN
```

### StreamableHTTP Transport

The server also supports the StreamableHTTP transport as defined in the MCP protocol. This mode is useful for web-based integrations or when running the server as a standalone service.

To use StreamableHTTP mode, run with the `--http` flag:

```bash
npx -y contentful-mcp --management-token YOUR_TOKEN --http --port 3000
# or alternatively
npx -y @ivotoby/contentful-management-mcp-server --management-token YOUR_TOKEN --http --port 3000
```

#### StreamableHTTP Details

- Uses the official MCP StreamableHTTP transport
- Supports standard MCP protocol operations
- Includes session management for maintaining state
- Properly handles initialize/notify patterns
- Compatible with standard MCP clients
- Replaces the deprecated SSE transport with the modern approach

The implementation follows the standard MCP protocol specification, allowing any MCP client to connect to the server without special handling.

## Error Handling

The server implements comprehensive error handling for:

- Authentication failures
- Rate limiting
- Invalid requests
- Network issues
- API-specific errors

[![Verified on MseeP](https://mseep.ai/badge.svg)](https://mseep.ai/app/146d4235-bdb1-492e-b594-82fd27b77388)

## License

MIT License

## Fine print

This MCP Server enables Claude (or other agents that can consume MCP resources) to update, delete content, spaces and content-models. So be sure what you allow Claude to do with your Contentful spaces!

This MCP-server is not officially supported by Contentful (yet)
