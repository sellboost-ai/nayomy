---
name: "takumi0706/google-calendar-mcp"
description: "An MCP server to interface with the Google Calendar API. Based on TypeScript."
category: "Workplace & Productivity"
repo: "takumi0706/google-calendar-mcp"
stars: 56
url: "https://github.com/takumi0706/google-calendar-mcp"
body_length: 15181
license: "MIT"
language: "TypeScript"
body_tr: |-
  # Google Calendar MCP Server
  ![Apr-15-2025 12-17-08](https://github.com/user-attachments/assets/8970351e-c90d-42e3-8609-b4dfe33f8615)


  > **🔔 VERSİYON GÜNCELLEME BİLDİRİMİ 🔔**  
  > Sürüm 1.0.5, hem `createEvent` hem de `updateEvent` araçlarında `recurrence` parametresi aracılığıyla tekrarlayan etkinlikler için destek ekler. Bu, oluşturulduktan sonra manuel olarak ayarlamak zorunda kalmadan doğrudan tekrarlayan etkinlikler oluşturmanızı ve değiştirmenizi sağlar.

  ![](https://badge.mcpx.dev?type=server 'MCP Server')
  ![Version](https://img.shields.io/badge/version-1.0.7-blue.svg)
  ![License](https://img.shields.io/badge/license-MIT-green.svg)

  [![日本語](https://img.shields.io/badge/日本語-クリック-青)](README.ja.md)
  [![English](https://img.shields.io/badge/English-Click-blue)](README.md)


  ## Proje Özeti

  Google Calendar MCP Server, Google Calendar ile Claude Desktop arasında entegrasyonu sağlayan bir MCP (Model Context Protocol) sunucu uygulamasıdır. Bu proje, Claude'un kullanıcının Google Takvimini etkileşime girmesini, doğal dil etkileşimi aracılığıyla takvim etkinliklerini görüntüleme, oluşturma, güncelleme ve silme yeteneğini sağlar.

  ### Temel Özellikler

  - **Google Calendar entegrasyonu**: Claude Desktop ile Google Calendar API arasında bir köprü sağlar
  - **MCP uygulaması**: AI asistan araç entegrasyonu için Model Context Protocol belirtimini takip eder
  - **OAuth2 kimlik doğrulaması**: Google API kimlik doğrulama akışını güvenli şekilde yönetir
  - **Etkinlik yönetimi**: Kapsamlı takvim etkinliği işlemlerini destekler (get, create, update, delete)
  - **Renk desteği**: colorId parametresini kullanarak etkinlik rengini ayarlama ve güncelleme yeteneği
  - **STDIO iletişimi**: Claude Desktop ile iletişim için standart input/output kullanır

  ## Teknik Mimari

  Bu proje şunları kullanır:

  - **TypeScript**: Tür-güvenli kod geliştirmesi için
  - **MCP SDK**: Claude Desktop ile entegrasyon için `@modelcontextprotocol/sdk` kullanır
  - **Google API**: Google Calendar API erişimi için `googleapis` kullanır
  - **Hono**: Kimlik doğrulama sunucusu için hafif ve hızlı web framework
  - **OAuth2 Sağlayıcıları**: PKCE etkinleştirilen OAuth2 akışı için `@hono/oauth-providers` kullanır
  - **Zod**: İstek/yanıt verisi için şema doğrulaması uygular
  - **Ortam tabanlı yapılandırma**: Yapılandırma yönetimi için dotenv kullanır
  - **AES-256-GCM**: Node.js crypto modülünü kullanarak token şifreleme için
  - **Open**: Kimlik doğrulama sırasında otomatik tarayıcı başlatma için
  - **Readline**: Sunucu ortamlarında manuel kimlik doğrulama girişi için
  - **Jest**: Birim testi ve kapsam alanı için
  - **GitHub Actions**: CI/CD için

  ## Ana Bileşenler

  1. **MCP Sunucusu**: Claude Desktop ile iletişimi işleyen temel sunucu uygulaması
  2. **Google Calendar Araçları**: Takvim işlemleri (alma, oluşturma, güncelleme, silme)
  3. **Kimlik Doğrulama İşleyicisi**: Google API ile OAuth2 akışı yönetimi
  4. **Şema Doğrulaması**: Tüm işlemlerde veri bütünlüğünü sağlama
  5. **Token Yöneticisi**: Kimlik doğrulama tokenlarının güvenli şekilde işlenmesi

  ## Kullanılabilir Araçlar

  Bu MCP sunucusu, Google Takvim ile etkileşim kurmak için aşağıdaki araçları sağlar:

  ### 1. getEvents

  Çeşitli filtreleme seçenekleri ile takvim etkinliklerini alır.

  **Parametreler:**
  - `calendarId` (isteğe bağlı): Takvim ID'si (atlanırsa, boş string, null veya undefined ise birincil takvimi kullanır)
  - `timeMin` (isteğe bağlı): Etkinlik alımı için başlangıç saati (ISO 8601 formatı, örneğin "2025-03-01T00:00:00Z"). Boş string, null veya undefined değerleri yoksayılır
  - `timeMax` (isteğe bağlı): Etkinlik alımı için bitiş saati (ISO 8601 formatı). Boş string, null veya undefined değerleri yoksayılır
  - `maxResults` (isteğe bağlı): Alınacak maksimum etkinlik sayısı (varsayılan: 10)
  - `orderBy` (isteğe bağlı): Sıralama düzeni ("startTime" veya "updated"). Boş string, null veya undefined ise "startTime" olarak varsayılan

  ### 2. createEvent

  Yeni bir takvim etkinliği oluşturur.

  **Parametreler:**
  - `calendarId` (isteğe bağlı): Takvim ID'si (atlanırsa birincil takvimi kullanır)
  - `event`: Aşağıdakileri içeren etkinlik ayrıntıları nesnesi:
    - `summary` (gerekli): Etkinlik başlığı
    - `description` (isteğe bağlı): Etkinlik açıklaması
    - `location` (isteğe bağlı): Etkinlik konumu
    - `start`: Aşağıdakileri içeren başlangıç saati nesnesi:
      - `dateTime` (isteğe bağlı): ISO 8601 formatı (örneğin, "2025-03-15T09:00:00+09:00")
      - `date` (isteğe bağlı): YYYY-MM-DD formatı tüm gün etkinlikleri için
      - `timeZone` (isteğe bağlı): Saat dilimi (örneğin, "Asia/Tokyo")
    - `end`: Bitiş saati nesnesi (başlangıç ile aynı format)
    - `attendees` (isteğe bağlı): Email ve isteğe bağlı displayName içeren katılımcı dizisi
    - `colorId` (isteğe bağlı): Etkinlik renk ID'si (1-11)
    - `recurrence` (isteğe bağlı): RFC5545 formatında tekrarlama kuralları dizisi (örneğin, ["RRULE:FREQ=WEEKLY;BYDAY=MO,WE,FR"])

  ### 3. updateEvent

  Mevcut bir takvim etkinliğini günceller. İşlev önce mevcut etkinlik verilerini alır ve güncelleme verileriyle birleştirir, güncelleme isteğine dahil olmayan alanları korur.

  **Parametreler:**
  - `calendarId` (isteğe bağlı): Takvim ID'si (atlanırsa birincil takvimi kullanır)
  - `eventId` (gerekli): Güncellenecek etkinliğin ID'si
  - `event`: Güncellenecek alanları içeren etkinlik ayrıntıları nesnesi (createEvent ile aynı yapı, tüm alanlar isteğe bağlı)
    - Yalnızca açıkça sağlanan alanlar güncellenecektir
    - Güncelleme isteğine dahil olmayan alanlar mevcut değerlerini koruyacaktır
    - Bu, veri kaybı olmadan kısmi güncellemelere izin verir
    - `recurrence` parametresi tekrarlayan etkinlik desenlerini değiştirmek için güncellenebilir

  ### 4. deleteEvent

  Bir takvim etkinliğini siler.

  **Parametreler:**
  - `calendarId` (isteğe bağlı): Takvim ID'si (atlanırsa birincil takvimi kullanır)
  - `eventId` (gerekli): Silinecek etkinliğin ID'si

  ### 5. authenticate

  Google Takvim ile yeniden kimlik doğrulaması yapar. Bu, Claude'u yeniden başlatmak zorunda kalmadan farklı Google hesapları arasında geçiş yapmak istediğinizde faydalıdır.

  **Parametreler:**
  - Hiçbiri

  ## Geliştirme Yönergeleri

  Yeni işlevler eklerken, kodu değiştirirken veya hataları düzeltirken, lütfen `npm version` komutu kullanarak her değişiklik için sürümü semantik olarak artırın.
  Ayrıca, kodunuzun açık olduğundan ve OOP gibi tüm gerekli kodlama kurallarını izlediğinden emin olun.
  Sürüm betiği sürüm güncellendiğinde otomatik olarak `npm install` çalıştıracak, ancak yine de gönderimden önce kodunuzu derleme, lint ve test etmelisiniz.

  ### Kod Yapısı

  - **src/**: Kaynak kod dizini
    - **auth/**: Kimlik doğrulama işleme
    - **config/**: Yapılandırma ayarları
    - **mcp/**: MCP sunucu uygulaması
    - **tools/**: Google Calendar araç uygulamaları
    - **utils/**: Yardımcı işlevler ve yardımcılar

  ### En İyi Uygulamalar

  - TypeScript en iyi uygulamalarına göre uygun yazım
  - Kapsamlı hata işleme sürdürülmesi
  - Uygun kimlik doğrulama akışı sağlanması
  - Bağımlılıkları güncel tutma
  - Tüm işlevler için açık dokümantasyon yazma
  - Güvenlik en iyi uygulamalarını uygulama
  - OAuth 2.1 kimlik doğrulama standartlarını izleme
  - Tüm input/output verisi için şema doğrulaması kullanma

  ### Test Etme

  - Temel işlevsellik için birim testler uygulama
  - Kimlik doğrulama akışını kapsamlı şekilde test etme
  - Takvim manipülasyonunu Google API'ye karşı doğrulama
  - Kapsam raporları ile testleri çalıştırma
  - Güvenlik testlerinin dahil olduğundan emin olma

  ## Dağıtım

  Bu paket npm'de `@takumi0706/google-calendar-mcp` olarak yayınlanmaktadır:

  ```bash
  npx @takumi0706/google-calendar-mcp@1.0.7
  ```

  ### Ön Koşullar

  1. Google Cloud Project oluşturun ve Google Calendar API'yi etkinleştirin
  2. Google Cloud Console'da OAuth2 kimlik bilgilerini yapılandırın
  3. Ortam değişkenlerini ayarlayın:

  ```bash
  # Google OAuth kimlik bilgileriniz ile bir .env dosyası oluşturun
  GOOGLE_CLIENT_ID=your_client_id
  GOOGLE_CLIENT_SECRET=your_client_secret
  GOOGLE_REDIRECT_URI=http://localhost:4153/oauth2callback
  # İsteğe bağlı: Token şifreleme anahtarı (sağlanmaz ise otomatik oluşturulur)
  TOKEN_ENCRYPTION_KEY=32-byte-hex-key
  # İsteğe bağlı: Auth sunucu portu ve hostı (varsayılan port: 4153, host: localhost)
  AUTH_PORT=4153
  AUTH_HOST=localhost
  # İsteğe bağlı: MCP sunucu portu ve hostı (varsayılan port: 3000, host: localhost)
  PORT=3000
  HOST=localhost
  # İsteğe bağlı: Manuel kimlik doğrulamayı etkinleştir (localhost erişilebilir olmadığında faydalı)
  USE_MANUAL_AUTH=true
  ```

  ### Claude Desktop Yapılandırması

  Sunucuyu `claude_desktop_config.json` dosyanıza ekleyin. Localhost'a erişilemeyen bir ortamda çalışıyorsanız, `USE_MANUAL_AUTH` ortam değişkenini "true" olarak ayarlayın.

  ```json
  {
    "mcpServers": {
      "google-calendar": {
        "command": "npx",
        "args": [
          "-y",
          "@takumi0706/google-calendar-mcp"
        ],
        "env": {
          "GOOGLE_CLIENT_ID": "your_client_id",
          "GOOGLE_CLIENT_SECRET": "your_client_secret",
          "GOOGLE_REDIRECT_URI": "http://localhost:4153/oauth2callback"
        }
      }
    }
  }
  ```

  ## Güvenlik Dikkat Noktaları

  - **OAuth tokenları** yalnızca bellekte saklanır (dosya tabanlı depolamada saklanmaz)
  - **Hassas kimlik bilgileri** ortam değişkenleri olarak sağlanmalıdır
  - **Token şifreleme** AES-256-GCM kullanarak güvenli depolama için
  - **PKCE uygulaması** açık code_verifier ve code_challenge oluşturma ile
  - **State parametresi doğrulaması** CSRF koruması için
  - **API endpoint koruması** için hız sınırlaması
  - **Zod şeması** ile input doğrulaması

  Daha fazla ayrıntı için bkz. [SECURITY.md](SECURITY.md).

  ## Bakım

  - Google Calendar API ile uyumluluğu korumak için düzenli güncellemeler
  - Sürüm güncellemeleri README.md'de belgelenmiştir

  ## Sorun Giderme

  Herhangi bir sorunla karşılaşırsanız:

  1. Google OAuth kimlik bilgilerinizin doğru şekilde yapılandırıldığından emin olun
  2. Google Calendar API erişimi için yeterli izinlere sahip olduğunuzu doğrulayın
  3. Claude Desktop yapılandırmanızın doğru olduğunu doğrulayın

  ### Yaygın Hatalar

  - **JSON Ayrıştırma Hataları**: `Unexpected non-whitespace character after JSON at position 4 (line 1 column 5)` gibi hatalar görürseniz, tipik olarak hatalı biçimlendirilmiş JSON-RPC iletileri nedeniyledir. Bu sorun sürüm 0.6.7 ve sonrasında düzeltilmiştir. Hala bu hataları yaşıyorsanız, lütfen en son sürüme güncelleyin.
  - **Kimlik Doğrulama Hataları**: Google OAuth kimlik bilgilerinizi doğrulayın
  - **Geçersiz state parametresi**: Yeniden kimlik doğrularken `Authentication failed: Invalid state parameter` hatası görürseniz, OAuth sunucu yaşam döngüsü yönetimini düzeltecek olan sürüm 1.0.3 veya sonrasına güncelleyin. Eski sürümlerde, bağlantı noktası 4153'ü kapatmanız ve uygulamayı yeniden başlatmanız gerekebilir.
  - **Bağlantı Hataları**: Sunucunun yalnızca bir örneğinin çalıştığından emin olun
  - **Bağlantı Kesme Sorunları**: Sunucunuzun özel TCP soketleri olmadan MCP mesajlarını düzgün şekilde işlediğinden emin olun
  - **Localhost'a erişilemiyor**: Uygulamayı localhost'a erişilemeyen bir ortamda çalıştırıyorsanız (uzak sunucu veya konteyner gibi), `USE_MANUAL_AUTH=true` ayarlayarak manuel kimlik doğrulamayı etkinleştirin. Bu, uygulamayı yetkilendirdikten sonra Google tarafından gösterilen yetkilendirme kodunu manuel olarak girmenize izin verir.
  - **MCP Parametre Doğrulama Hataları**: Boş string parametreleri ile -32602 hatası görürseniz, boş string, null ve undefined değerlerini düzgün şekilde işleyecek olan sürüm 1.0.7 veya sonrasına güncelleyin.

  ## Sürüm Geçmişi

  ### Sürüm 1.0.7 Değişiklikleri
  - MCP araçları için geliştirilmiş parametre doğrulaması, boş string, null ve undefined değerleri düzgün şekilde işlemek için
  - Boş string parametreleri getEvents aracına geçirildiğinde MCP hatasını -32602 düzeltti
  - preprocessArgs işlevini iyileştirildi, Zod şeması varsayılanlarının uygulanmasına izin vermek için boş değerleri atlayacak şekilde
  - Boş parametre işleme için kapsamlı test kapsamı eklendi

  ### Sürüm 1.0.6 Değişiklikleri
  - Bu google calendar mcp sunucusunda kapsam gerekmediğini düzeltti

  ### Sürüm 1.0.5 Değişiklikleri
  - Hem `createEvent` hem de `updateEvent` araçlarında `recurrence` parametresi aracılığıyla tekrarlayan etkinlikler için destek eklendi
  - Manuel kurulum olmadan doğrudan tekrarlayan etkinlikler oluşturma ve değiştirme olanağı sağlar

  ### Sürüm 1.0.4 Değişiklikleri
  - Sürüm numarası güncelleme ile bakım sürümü
  - Sürüm 1.0.3'ten işlevsel değişiklik yok
  - En son bağımlılıklarla uyumluluk sağlar

  ### Sürüm 1.0.3 Değişiklikleri
  - Claude'u yeniden başlatmadan yeniden kimlik doğrulaması için yeni `authenticate` aracı eklendi
  - Bir oturum sırasında farklı Google hesapları arasında geçiş yapma olanağı
  - Kimlik doğrulama işlevselliğini MCP arabirimi aracılığıyla sundu
  - Hesap değiştirmek için yeniden başlatma gereksinimini ortadan kaldırarak kullanıcı deneyimini geliştirdi
  - Localhost'a erişilemeyen ortamlar için manuel kimlik doğrulama seçeneği eklendi
  - Yetkilendirme kodlarını manuel olarak girme için readline arabirimi uygulandı
  - Manuel kimlik doğrulamayı etkinleştirmek için USE_MANUAL_AUTH ortam değişkeni eklendi
  - Zod bağımlılığı en son sürüme güncellendi (3.24.2)
  - En son zod özellikleri ile iyileştirilmiş şema doğrulaması
  - Geliştirilmiş kod kararlılığı ve güvenliği
  - Yeniden kimlik doğrulama sırasında "Geçersiz state parametresi" hatası düzeltildi
  - OAuth sunucusunu isteğe bağlı olarak başlatacak ve kimlik doğrulmadan sonra kapatacak şekilde değiştirildi
  - Bağlantı noktası çakışmalarını önlemek için geliştirilmiş sunucu yaşam döngüsü yönetimi
  - Kimlik doğrulama akışı için geliştirilmiş hata işleme

  ### Sürüm 1.0.2 Değişiklikleri
  - `updateEvent` işlevini, kısmi güncellemeler gerçekleştirirken mevcut etkinlik verilerini korumak üzere düzeltildi
  - Mevcut etkinlik verilerini güncellenmeden önce almak için `getEvent` işlevini eklendi
  - Veri kaybını önlemek için güncelleme verilerini mevcut verilerle birleştirmek üzere `updateEvent` değiştirildi
  - Güncelleme isteklerinde tüm alanları isteğe bağlı hale getirmek üzere şema doğrulaması güncellendi
  - `updateEvent` işlevi için geliştirilmiş dokümantasyon

  ### Sürüm 1.0.1 Değişiklikleri
  - Node.js v20.9.0+ ve 'open' paketi (v10+) ile uyumluluk sorunu düzeltildi
  - ESM-only 'open' paketi için statik import'u dinamik import'a değiştirildi
  - OAuth kimlik doğrulaması sırasında tarayıcı açma için geliştirilmiş hata işleme
  - Daha iyi bakım için geliştirilmiş kod yorumları

  ### Sürüm 1.0.0 Değişiklikleri
  - Üretime hazırlık olarak işaretleyen ana sürüm yayını
  - Bakımı iyileştirmek için kapsamlı kod yeniden faktörleme
  - Tüm mesaj ve yorumların uluslararasılaştırılması (Japonca'dan İngilizce'ye çeviri)
  - Geliştirilmiş kod tutarlılığı ve okunabilirliği
  - Daha iyi kullanıcı deneyimi için geliştirilmiş hata mesajları
  - Projenin mevcut durumunu yansıtacak şekilde güncellenen dokümantasyon
  - Kod tabanı genelinde standartlaştırılmış kodlama stili

  ### Sürüm 0.8.0 Değişiklikleri
  - Yenileme token sorunlarını işlemek için geliştirilmiş OAuth kimlik doğrulama akışı
  - Google'ı onay ekranını göstermeye ve yeni bir yenileme tokeni sağlamaya zorlamak için `prompt: 'consent'` parametresi eklendi
  - Yalnızca erişim tokeni varsa çalışmak üzere kimlik doğrulama akışı değiştirildi
  - Yenileme tokeni olmadığında veya yenileme tokeni geçersiz ise durumu işlemek için geliştirilmiş token yenileme mantığı
  - Token yönetimi iyileştirmesi için yenilenen erişim tokenlarını kaydetmek üzere token depolaması güncellendi
  - Token yenileme mantığında olası sonsuz döngü düzeltildi

  ## Kurulum

  ### Hızlı Başlangıç (Önerilir)

  Doğrudan npm'den kurun:

  ```bash
  npm install -g @takumi0706/google-calendar-mcp
  ```

  ### Manuel Kurulum

  Geliştirme veya özelleştirme için:

  ```bash
  # Deposu klonla
  git clone https://github.com/takumi0706/google-calendar-mcp.git
  cd google-calendar-mcp

  # Bağımlılıkları yükle
  npm install

  # Projeyi derle
  npm run build

  # Sunucuyu çalıştır
  npm start
  ```

  ## Üretim Dağıtımı

  Üretim kullanımı için sunucu geçerli Google OAuth kimlik bilgilerine ihtiyaç duyar. Sunucu uygun kimlik bilgileri olmadan başlayamaz ve güvenlik uyumluluğunu sağlar.

  ## Test Etme

  Testleri çalıştırmak için:

  ```bash
  # Tüm testleri çalıştır
  npm test

  # Kapsam raporu ile testleri çalıştır
  npm test -- --coverage
  ```

  ## Lisans

  MIT
---

# Google Calendar MCP Server
![Apr-15-2025 12-17-08](https://github.com/user-attachments/assets/8970351e-c90d-42e3-8609-b4dfe33f8615)


> **🔔 VERSION UPDATE NOTICE 🔔**  
> Version 1.0.5 adds support for recurring events through the `recurrence` parameter in both `createEvent` and `updateEvent` tools. This allows you to create and modify recurring events directly without having to set them up manually after creation.

![](https://badge.mcpx.dev?type=server 'MCP Server')
![Version](https://img.shields.io/badge/version-1.0.7-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

[![日本語](https://img.shields.io/badge/日本語-クリック-青)](README.ja.md)
[![English](https://img.shields.io/badge/English-Click-blue)](README.md)


## Project Overview

Google Calendar MCP Server is an MCP (Model Context Protocol) server implementation that enables integration between Google Calendar and Claude Desktop. This project enables Claude to interact with the user's Google Calendar, providing the ability to display, create, update, and delete calendar events through natural language interaction.

### Core Features

- **Google Calendar integration**: Provides a bridge between Claude Desktop and the Google Calendar API
- **MCP implementation**: Follows the Model Context Protocol specification for AI assistant tool integration
- **OAuth2 authentication**: Handles the Google API authentication flow securely
- **Event management**: Supports comprehensive calendar event operations (get, create, update, delete)
- **Color support**: Ability to set and update event colors using colorId parameter
- **STDIO transport**: Uses standard input/output for communication with Claude Desktop

## Technical Architecture

This project uses:

- **TypeScript**: For type-safe code development
- **MCP SDK**: Uses `@modelcontextprotocol/sdk` for integration with Claude Desktop
- **Google API**: Uses `googleapis` for Google Calendar API access
- **Hono**: Lightweight and fast web framework for the authentication server
- **OAuth2 Providers**: Uses `@hono/oauth-providers` for PKCE-enabled OAuth2 flow
- **Zod**: Implements schema validation for request/response data
- **Environment-based configuration**: Uses dotenv for configuration management
- **AES-256-GCM**: For token encryption using Node.js crypto module
- **Open**: For automatic browser launching during authentication
- **Readline**: For manual authentication input in server environments
- **Jest**: For unit testing and coverage
- **GitHub Actions**: For CI/CD

## Main Components

1. **MCP Server**: Core server implementation that handles communication with Claude Desktop
2. **Google Calendar Tools**: Calendar operations (retrieval, creation, update, deletion)
3. **Authentication Handler**: Management of OAuth2 flow with Google API
4. **Schema Validation**: Ensuring data integrity in all operations
5. **Token Manager**: Secure handling of authentication tokens

## Available Tools

This MCP server provides the following tools for interacting with Google Calendar:

### 1. getEvents

Retrieves calendar events with various filtering options.

**Parameters:**
- `calendarId` (optional): Calendar ID (uses primary calendar if omitted, empty string, null, or undefined)
- `timeMin` (optional): Start time for event retrieval (ISO 8601 format, e.g., "2025-03-01T00:00:00Z"). Empty strings, null, or undefined values are ignored
- `timeMax` (optional): End time for event retrieval (ISO 8601 format). Empty strings, null, or undefined values are ignored
- `maxResults` (optional): Maximum number of events to retrieve (default: 10)
- `orderBy` (optional): Sort order ("startTime" or "updated"). Defaults to "startTime" if empty string, null, or undefined

### 2. createEvent

Creates a new calendar event.

**Parameters:**
- `calendarId` (optional): Calendar ID (uses primary calendar if omitted)
- `event`: Event details object containing:
  - `summary` (required): Event title
  - `description` (optional): Event description
  - `location` (optional): Event location
  - `start`: Start time object with:
    - `dateTime` (optional): ISO 8601 format (e.g., "2025-03-15T09:00:00+09:00")
    - `date` (optional): YYYY-MM-DD format for all-day events
    - `timeZone` (optional): Time zone (e.g., "Asia/Tokyo")
  - `end`: End time object (same format as start)
  - `attendees` (optional): Array of attendees with email and optional displayName
  - `colorId` (optional): Event color ID (1-11)
  - `recurrence` (optional): Array of recurrence rules in RFC5545 format (e.g., ["RRULE:FREQ=WEEKLY;BYDAY=MO,WE,FR"])

### 3. updateEvent

Updates an existing calendar event. The function fetches the existing event data first and merges it with the update data, preserving fields that are not included in the update request.

**Parameters:**
- `calendarId` (optional): Calendar ID (uses primary calendar if omitted)
- `eventId` (required): ID of the event to update
- `event`: Event details object containing fields to update (same structure as createEvent, all fields optional)
  - Only fields that are explicitly provided will be updated
  - Fields not included in the update request will retain their existing values
  - This allows for partial updates without losing data
  - `recurrence` parameter can be updated to modify recurring event patterns

### 4. deleteEvent

Deletes a calendar event.

**Parameters:**
- `calendarId` (optional): Calendar ID (uses primary calendar if omitted)
- `eventId` (required): ID of the event to delete

### 5. authenticate

Re-authenticates with Google Calendar. This is useful when you want to switch between different Google accounts without having to restart Claude.

**Parameters:**
- None

## Development Guidelines

When adding new functions, modifying code, or fixing bugs, please semantically increase the version for each change using `npm version` command.
Also, please make sure that your coding is clear and follows all the necessary coding rules, such as OOP.
The version script will automatically run `npm install` when the version is updated, but you should still build, run lint, and test your code before submitting it.

### Code Structure

- **src/**: Source code directory
  - **auth/**: Authentication handling
  - **config/**: Configuration settings
  - **mcp/**: MCP server implementation
  - **tools/**: Google Calendar tool implementations
  - **utils/**: Utility functions and helpers

### Best Practices

- Proper typing according to TypeScript best practices
- Maintaining comprehensive error handling
- Ensure proper authentication flow
- Keep dependencies up to date
- Write clear documentation for all functions
- Implement security best practices
- Follow the OAuth 2.1 authentication standards
- Use schema validation for all input/output data

### Testing

- Implement unit tests for core functionality
- Thoroughly test authentication flow
- Verify calendar manipulation against Google API
- Run tests with coverage reports
- Ensure security tests are included

## Deployment

This package is published on npm as `@takumi0706/google-calendar-mcp`:

```bash
npx @takumi0706/google-calendar-mcp@1.0.7
```

### Prerequisites

1. Create a Google Cloud Project and enable the Google Calendar API
2. Configure OAuth2 credentials in the Google Cloud Console
3. Set up environment variables:

```bash
# Create a .env file with your Google OAuth credentials
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_REDIRECT_URI=http://localhost:4153/oauth2callback
# Optional: Token encryption key (auto-generated if not provided)
TOKEN_ENCRYPTION_KEY=32-byte-hex-key
# Optional: Auth server port and host (default port: 4153, host: localhost)
AUTH_PORT=4153
AUTH_HOST=localhost
# Optional: MCP server port and host (default port: 3000, host: localhost)
PORT=3000
HOST=localhost
# Optional: Enable manual authentication (useful when localhost is not accessible)
USE_MANUAL_AUTH=true
```

### Claude Desktop Configuration

Add the server to your `claude_desktop_config.json`. If you're running in an environment where localhost is not accessible, add the `USE_MANUAL_AUTH` environment variable set to "true".

```json
{
  "mcpServers": {
    "google-calendar": {
      "command": "npx",
      "args": [
        "-y",
        "@takumi0706/google-calendar-mcp"
      ],
      "env": {
        "GOOGLE_CLIENT_ID": "your_client_id",
        "GOOGLE_CLIENT_SECRET": "your_client_secret",
        "GOOGLE_REDIRECT_URI": "http://localhost:4153/oauth2callback"
      }
    }
  }
}
```

## Security Considerations

- **OAuth tokens** are stored in memory only (not stored in a file-based storage)
- **Sensitive credentials** must be provided as environment variables
- **Token encryption** using AES-256-GCM for secure storage
- **PKCE implementation** with explicit code_verifier and code_challenge generation
- **State parameter validation** for CSRF protection
- **Rate limiting** for API endpoint protection
- **Input validation** with Zod schema

For more details, see [SECURITY.md](SECURITY.md).

## Maintenance

- Regular updates to maintain compatibility with the Google Calendar API
- Version updates are documented in README.md

## Troubleshooting

If you encounter any issues:

1. Make sure your Google OAuth credentials are correctly configured
2. Ensure you have sufficient permissions for Google Calendar API access
3. Verify your Claude Desktop configuration is correct

### Common Errors

- **JSON Parsing Errors**: If you see errors like `Unexpected non-whitespace character after JSON at position 4 (line 1 column 5)`, it's typically due to malformed JSON-RPC messages. This issue has been fixed in version 0.6.7 and later. If you're still experiencing these errors, please update to the latest version.
- **Authentication Errors**: Verify your Google OAuth credentials
- **Invalid state parameter**: If you see `Authentication failed: Invalid state parameter` when re-authenticating, update to version 1.0.3 or later which fixes the OAuth server lifecycle management. In older versions, you may need to close port 4153 and restart the application.
- **Connection Errors**: Make sure only one instance of the server is running
- **Disconnection Issues**: Ensure your server is properly handling MCP messages without custom TCP sockets
- **Cannot access localhost**: If you're running the application in an environment where localhost is not accessible (like a remote server or container), enable manual authentication by setting `USE_MANUAL_AUTH=true`. This will allow you to manually enter the authorization code shown by Google after authorizing the application.
- **MCP Parameter Validation Errors**: If you see error -32602 with empty string parameters, update to version 1.0.7 or later which handles empty strings, null, and undefined values properly.

## Version History

### Version 1.0.7 Changes
- Enhanced parameter validation for MCP tools to properly handle empty strings, null, and undefined values
- Fixed MCP error -32602 when empty string parameters were passed to getEvents tool
- Improved preprocessArgs function to skip empty values, allowing Zod schema defaults to be applied correctly
- Added comprehensive test coverage for empty parameter handling

### Version 1.0.6 Changes
- Fixed the scope is not needed in this google calendar mcp server

### Version 1.0.5 Changes
- Added support for recurring events through the `recurrence` parameter in both `createEvent` and `updateEvent` tools
- Allows creation and modification of recurring events directly without manual setup

### Version 1.0.4 Changes
- Maintenance release with version number update
- No functional changes from version 1.0.3
- Ensures compatibility with the latest dependencies

### Version 1.0.3 Changes
- Added new `authenticate` tool to allow re-authentication without restarting Claude
- Made it possible to switch between different Google accounts during a session
- Exposed authentication functionality through the MCP interface
- Enhanced user experience by eliminating the need to restart for account switching
- Added manual authentication option for environments where localhost is not accessible
- Implemented readline interface for entering authorization codes manually
- Added USE_MANUAL_AUTH environment variable to enable manual authentication
- Updated zod dependency to the latest version (3.24.2)
- Improved schema validation with the latest zod features
- Enhanced code stability and security
- Fixed "Invalid state parameter" error during re-authentication
- Modified OAuth server to start on-demand and shut down after authentication
- Improved server lifecycle management to prevent port conflicts
- Enhanced error handling for authentication flow

### Version 1.0.2 Changes
- Fixed `updateEvent` function to preserve existing event data when performing partial updates
- Added `getEvent` function to fetch existing event data before updating
- Modified `updateEvent` to merge update data with existing data to prevent data loss
- Updated schema validation to make all fields optional in update requests
- Improved documentation for the `updateEvent` function

### Version 1.0.1 Changes
- Fixed compatibility issue with Node.js v20.9.0+ and the 'open' package (v10+)
- Replaced static import with dynamic import for the ESM-only 'open' package
- Improved error handling for browser opening during OAuth authentication
- Enhanced code comments for better maintainability

### Version 1.0.0 Changes
- Major version release marking production readiness
- Comprehensive code refactoring for improved maintainability
- Internationalization of all messages and comments (translated Japanese to English)
- Enhanced code consistency and readability
- Improved error messages for better user experience
- Updated documentation to reflect current state of the project
- Standardized coding style throughout the codebase

### Version 0.8.0 Changes
- Enhanced OAuth authentication flow to handle refresh token issues
- Added `prompt: 'consent'` parameter to force Google to show the consent screen and provide a new refresh token
- Modified authentication flow to work with just an access token if a refresh token is not available
- Improved token refresh logic to handle cases where there's no refresh token or if the refresh token is invalid
- Updated token storage to save refreshed access tokens for better token management
- Fixed potential infinite loop in token refresh logic

## Installation

### Quick Start (Recommended)

Install directly from npm:

```bash
npm install -g @takumi0706/google-calendar-mcp
```

### Manual Installation

For development or customization:

```bash
# Clone the repository
git clone https://github.com/takumi0706/google-calendar-mcp.git
cd google-calendar-mcp

# Install dependencies
npm install

# Build the project
npm run build

# Run the server
npm start
```

## Production Deployment

For production use, the server requires valid Google OAuth credentials. The server will fail to start without proper credentials, ensuring security compliance.

## Testing

To run the tests:

```bash
# Run all tests
npm test

# Run tests with coverage report
npm test -- --coverage
```

## License

MIT
