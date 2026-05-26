---
name: "openbnb-org/mcp-server-airbnb"
description: "Provides tools to search Airbnb and get listing details."
description_tr: "Airbnb'de arama yapmak ve listing detaylarını almak için gerekli araçları sağlar."
category: "Travel & Transportation"
repo: "openbnb-org/mcp-server-airbnb"
stars: 460
url: "https://github.com/openbnb-org/mcp-server-airbnb"
body_length: 11531
license: "MIT"
language: "JavaScript"
homepage: "https://openbnb.ai/"
body_tr: |-
  [![downloads](https://img.shields.io/npm/dm/@openbnb/mcp-server-airbnb)](https://www.npmjs.com/package/@openbnb/mcp-server-airbnb)

  # Airbnb Arama & İlanları - MCP Bundle (MCPB)

  Gelişmiş filtreleme yetenekleri ve detaylı mülk bilgisi almak için kapsamlı bir MCP Bundle. Model Context Protocol (MCP) sunucusu olarak inşa edilmiş ve uyumlu AI uygulamalarla kolay kurulum ve kullanım için MCP Bundle (MCPB) formatında paketlenmiştir.

  ---

  ## 🚀 Yerel bir sunucu çalıştırmak istemiyorsunuz? [openbnb.ai](https://openbnb.ai/) deneyin

  > **👉 [openbnb.ai](https://openbnb.ai/) barındırılan bir MCP sunucusudur ve aynı sorunu çözer — Airbnb ilanlarını aramak — herhangi bir yerel kurulum olmadan.**

  Bu sunucuyu kendiniz kurmak ve çalıştırmakla uğraşmak istemiyorsanız, **[openbnb.ai](https://openbnb.ai/)** MCP istemcinizden doğrudan bağlanabileceğiniz ayrı, tamamen barındırılan bir alternatiftir. Bu açık kaynak sunucusunun sunduklarının ötesine geçer:

  - ✅ **Sıfır kurulum** — Node yok, `npx` yok, yapılandırma dosyası yok, yönetilecek güncellemeler yok
  - ✅ **Gelişmiş filtreler** — buradaki temel araçların ötesinde daha zengin arama kontrolleri
  - ✅ **MCP UI** — sadece düz metin değil, sonuçlara göz atmak için etkileşimli UI bileşenleri
  - ✅ **Yönetilen ve bakımlı** — sizin için çalışır durumda tutulur

  Kurulum talimatları ve MCP istemciniz için bağlantı ayrıntıları için **[openbnb.ai](https://openbnb.ai/)** adresine gidin.

  Açık kaynak sunucusunu kendi başınıza barındırmayı tercih ederseniz, okumaya devam edin.

  ---

  ## Özellikler

  ### 🔍 Gelişmiş Arama Yetenekleri
  - **Konum tabanlı arama** şehir, eyalet ve bölge desteğiyle
  - **Uluslararası konum desteği** istemci tarafı coğrafi kodlaması aracılığıyla, böylece ABD dışı sorgular (örneğin "Paris, France", "Copenhagen, Denmark") doğru şehirde sonuç döndürür
  - **Google Maps Place ID** entegrasyonu hassas konum hedeflemesi için
  - **Mülk türü filtreleme** tüm evler, özel odalar, paylaşılan odalar veya otel odaları için
  - **Tarih filtreleme** giriş ve çıkış tarihi desteğiyle
  - **Misafir yapılandırması** yetişkinler, çocuklar, bebekler ve evcil hayvanlar dahil
  - **Fiyat aralığı filtreleme** minimum ve maksimum fiyat kısıtlamalarıyla
  - **Sayfalandırma desteği** büyük sonuç kümeleri arasında gezinmek için

  ### 🏠 Detaylı Mülk Bilgileri
  - **Kapsamlı ilan detayları** olanaklar, politikalar ve önemli noktalar dahil
  - **Konum bilgileri** koordinatlar ve mahalle detayları ile
  - **Ev kuralları ve politikalar** bilinçli rezervasyon kararları için
  - **Mülk açıklamaları** ve temel özellikler
  - **Doğrudan bağlantılar** kolay rezervasyon için Airbnb ilanlarına

  ### 🛡️ Güvenlik & Uyumluluk
  - **Robots.txt uyumluluğu** test için yapılandırılabilir geçersiz kılma ile
  - **İstek zaman aşımı yönetimi** asılı istekleri önlemek için
  - **Gelişmiş hata işleme** ayrıntılı günlük kaydı ile
  - **Hız sınırlama farkındalığı** ve saygılı API kullanımı
  - **Güvenli yapılandırma** MCPB kullanıcı ayarları aracılığıyla

  ## Kurulum

  ### Claude Desktop İçin
  Bu uzantı bir MCP Bundle (`.mcpb`) dosyası olarak paketlenmiştir. Kurmak için:

  1. [En son sürümden](https://github.com/openbnb-org/mcp-server-airbnb/releases/latest) `.mcpb` dosyasını indirin
  2. Dosyayı açın — Claude Desktop bir kurulum iletişim kutusunu gösterecek
  3. Uzantı ayarlarını gerektiği gibi yapılandırın

  Robots.txt'i yok saymak için Claude Desktop ayarlarını açın, uzantıya gidin ve **Ignore robots.txt** değiştiricisini etkinleştirin.

  ### Cursor vb. İçin

  Başlamadan önce `npx` işinin çalışması için masaüstünüzde [Node.js](https://nodejs.org/) kurulu olduğundan emin olun.
  1. Şuna gidin: Cursor Settings > Tools & Integrations > New MCP Server

  2. Aşağıdakilerden birini `mcp.json` dosyanıza ekleyin:
      ```json
      {
        "mcpServers": {
          "airbnb": {
            "command": "npx",
            "args": [
              "-y",
              "@openbnb/mcp-server-airbnb"
            ]
          }
        }
      }
      ```

      Tüm istekler için robots.txt'i yok saymak üzere, `--ignore-robots-txt` args ile bu sürümü kullanın

      ```json
      {
        "mcpServers": {
          "airbnb": {
            "command": "npx",
            "args": [
              "-y",
              "@openbnb/mcp-server-airbnb",
              "--ignore-robots-txt"
            ]
          }
        }
      }
      ```
  3. Yeniden başlatın.


  ## Yapılandırma

  Uzantı aşağıdaki kullanıcı tarafından yapılandırılabilir seçenekleri sağlar:

  ### Robots.txt'i Yok Say
  - **Tür**: Boolean (kontrol kutusu)
  - **Varsayılan**: `false`
  - **Açıklama**: Airbnb'ye istekler yaparken robots.txt kısıtlamalarını atlayın
  - **Öneri**: Test amaçları dışında devre dışı bırakın

  ### Üçüncü taraf coğrafi kodlamayı devre dışı bırakın
  - **Tür**: Boolean (kontrol kutusu)
  - **Ortam değişkeni**: `DISABLE_GEOCODING`
  - **Varsayılan**: `false`
  - **Açıklama**: Photon/Nominatim coğrafi kodlaması adımını atlayın ve Airbnb'nin konum dizesini kendi başına çözmesine izin verin. Bunu etkinleştirmek PR öncesi davranışını geri yükler — her arama sadece `airbnb.com`'e gider, üçüncü taraf çağrısı yok.
  - **Öneri**: Sıfır üçüncü taraf giden trafiğine özellikle ihtiyaç duymazsanız devre dışı bırakın. Etkinleştirildikçe, ABD dışı aramalar yanlış sonuç döndürebilir. Bkz. [Harici Hizmetler](#harici-hizmetler).

  ## Araçlar

  ### `airbnb_search`

  Kapsamlı filtreleme seçenekleriyle Airbnb ilanlarını arayın.

  **Parametreler:**
  - `location` (gerekli): Aranacak konum (örn. "San Francisco, CA"). `placeId` olmadan sağlandığında, sunucu bu dizgiyi istemci tarafı coğrafi kodlaması aracılığıyla Photon/Nominatim'de kodlar — bkz. [Harici Hizmetler](#harici-hizmetler).
  - `placeId` (isteğe bağlı): Google Maps Place ID. `location`'ı geçersiz kılar ve istemci tarafı coğrafi kodlamayı tamamen atlar (üçüncü taraf çağrısı yok).
  - `checkin` (isteğe bağlı): YYYY-MM-DD formatında giriş tarihi
  - `checkout` (isteğe bağlı): YYYY-MM-DD formatında çıkış tarihi
  - `adults` (isteğe bağlı): Yetişkin sayısı (varsayılan: 1)
  - `children` (isteğe bağlı): Çocuk sayısı (varsayılan: 0)
  - `infants` (isteğe bağlı): Bebek sayısı (varsayılan: 0)
  - `pets` (isteğe bağlı): Evcil hayvan sayısı (varsayılan: 0)
  - `minPrice` (isteğe bağlı): Gece başına minimum fiyat
  - `maxPrice` (isteğe bağlı): Gece başına maksimum fiyat
  - `cursor` (isteğe bağlı): Sonuçlara göz atmak için sayfalandırma imleç
  - `propertyType` (isteğe bağlı): Mülk türüne göre filtrele — `entire_home`, `private_room`, `shared_room` veya `hotel_room`
  - `ignoreRobotsText` (isteğe bağlı): Bu istek için robots.txt'i geçersiz kılın

  **Döner:**
  - Mülk detayları, fiyatlandırma ve doğrudan bağlantılarla arama sonuçları
  - Ek sonuçlara göz atmak için sayfalandırma bilgileri
  - Referans için arama URL'si

  ### `airbnb_listing_details`

  Belirli bir Airbnb ilanı hakkında detaylı bilgi alın.

  **Parametreler:**
  - `id` (gerekli): Airbnb ilan ID'si
  - `checkin` (isteğe bağlı): YYYY-MM-DD formatında giriş tarihi
  - `checkout` (isteğe bağlı): YYYY-MM-DD formatında çıkış tarihi
  - `adults` (isteğe bağlı): Yetişkin sayısı (varsayılan: 1)
  - `children` (isteğe bağlı): Çocuk sayısı (varsayılan: 0)
  - `infants` (isteğe bağlı): Bebek sayısı (varsayılan: 0)
  - `pets` (isteğe bağlı): Evcil hayvan sayısı (varsayılan: 0)
  - `ignoreRobotsText` (isteğe bağlı): Bu istek için robots.txt'i geçersiz kılın

  **Döner:**
  - Detaylı mülk bilgileri şunları içerir:
    - Koordinatları olan konum detayları
    - Olanaklar ve tesisler
    - Ev kuralları ve politikalar
    - Mülk önemli noktaları ve açıklamaları
    - İlana doğrudan bağlantı

  ## Teknik Detaylar

  ### Mimari
  - **Runtime**: Node.js 18+
  - **Protocol**: Model Context Protocol (MCP) stdio taşıması aracılığıyla
  - **Format**: MCP Bundle (MCPB) v0.3
  - **Bağımlılıklar**: Güvenlik ve güvenilirlik için minimal harici bağımlılıklar

  ### Harici Hizmetler

  `airbnb.com`'a ek olarak sunucu, konum sorgularını doğru harita sınırlandırma kutularına çevirmek için iki üçüncü taraf hizmete coğrafi kodlaması istekleri yapar. Bu, birçok ABD dışı sorgu için yanlış sonuçlar üretim Airbnb'nin kendi sunucu tarafı coğrafyacısını atlatır (örneğin "Paris, France" Vendée'de iner; "Copenhagen, Denmark" Wisconsin'de iner).

  | Hizmet | Endpoint | Kullanım Amacı | Notlar |
  | --- | --- | --- | --- |
  | [Photon](https://photon.komoot.io/) | `photon.komoot.io` | Birincil coğrafyacı, `placeId` olmadan her arama üzerinde çağrılır | Komoot tarafından barındırılan özgür OSM tabanlı hizmet. Arama başına bir istek. |
  | [Nominatim](https://nominatim.openstreetmap.org/) | `nominatim.openstreetmap.org` | Geri dönüş coğrafyacısı, sadece Photon sınırlandırma kutusu döndürmediğinde çağrılır | [OSMF kullanım politikasına](https://operations.osmfoundation.org/policies/nominatim/) tabidir (maks ~1 req/sec). |

  Her arama, istekten sadece `location` dizgisini coğrafyacıya gönderir — başka istek alanı yok, IP coğrafyalandırması yok, izleme tanımlayıcıları yok. Konum dizgisi kendisi elbette kullanıcının yazdığı dizgiyle aynıdır.

  **Çıkış yapma:** coğrafyacıları atlamak için iki yol vardır:

  - **İstek başına:** açık bir `placeId` sağlayın. `placeId` mevcut olduğunda, sunucu Airbnb'nin kendi yer aramasını doğrudan üçüncü taraf çağrısı olmadan kullanır.
  - **Global olarak:** ortam değişkenini ayarlayın `DISABLE_GEOCODING=true`. Sunucu Photon/Nominatim'i tamamen atlayacak ve ham konum dizgisini Airbnb'ye geçirecektir. Bu, her arama için PR öncesi davranışını geri yükler ve sıfır üçüncü taraf giden trafiği garanti eder — Airbnb'nin kendi coğrafyacısının yanlış işlediği ABD dışı konumlar için kırılmış sonuçlar pahasına. Varsayılan olarak `false`'a ayarlanır.

  Bir coğrafyacı ulaşılamazsa veya hiç sonuç döndürmezse, sunucu konum dizgisini doğrudan Airbnb'ye göndermek için geri döner, tam olarak önceden yaptığı gibi — bu nedenle bir kesinti için en kötü durum, uluslararası aramaların önceki (kırılmış) davranışa düşmesidir, aramanın tamamen başarısız olması değil.

  ### Hata İşleme
  - Zaman damgalı kapsamlı hata günlüğü
  - Airbnb'nin sayfa yapısı değiştiğinde zarif bozulma
  - Ağ istekleri için zaman aşımı koruması
  - Sorun giderme için detaylı hata mesajları

  ### Güvenlik Önlemleri
  - Varsayılan olarak Robots.txt uyumluluğu
  - İstek zaman aşımı limitleri
  - Input doğrulaması ve sanitasyonu
  - Güvenli ortam değişkeni işleme
  - Duyarlı veri depolama yok

  ### Performans
  - Cheerio ile etkili HTML ayrıştırması
  - Uygun yerlerde istek önbelleği
  - Minimal bellek ayak izi
  - Hızlı başlangıç ve yanıt süreleri

  ## Uyumluluk

  - **Platformlar**: macOS, Windows, Linux
  - **Node.js**: 18.0.0 veya daha yüksek
  - **Claude Desktop**: 0.10.0 veya daha yüksek
  - **Diğer MCP istemcileri**: MCP destekleyen herhangi bir uygulamayla uyumlu

  ## Geliştirme

  ### Kaynaktan Derleme

  ```bash
  # Bağımlılıkları yükleyin
  npm install

  # Projeyi derleyin
  npm run build

  # Geliştirme sırasında değişiklikleri izleyin
  npm run watch
  ```

  ### Test

  Uzantı, MCP sunucusunu doğrudan çalıştırarak test edilebilir:

  ```bash
  # Robots.txt uyumluluğu ile çalıştırın (varsayılan)
  node dist/index.js

  # Robots.txt yok sayılarak çalıştırın (test için)
  node dist/index.js --ignore-robots-txt
  ```

  ## Yasal ve Etik Hususlar

  - **Airbnb Hizmet Şartlarına Saygı Gösterin**: Bu uzantı meşru araştırma ve rezervasyon yardımı içindir
  - **Robots.txt Uyumluluğu**: Uzantı varsayılan olarak robots.txt'e saygı gösterir
  - **Hız Sınırlama**: Airbnb sunucularını bunaltmamak için istek sıklığına dikkat edin
  - **Veri Kullanımı**: Sadece hukuki amaçlar için halka açık bilgileri çıkarın

  ## Destek

  - **Sorunlar**: [GitHub Issues](https://github.com/openbnb-org/mcp-server-airbnb/issues) üzerinde hataları ve özellik isteklerini bildirin
  - **Belgeler**: Depoda ek belgeler mevcuttur
  - **Topluluk**: MCP ve MCPB geliştirmesi hakkında tartışmalara katılın

  ## Lisans

  MIT Lisansı - detaylar için [LICENSE](LICENSE) dosyasına bakın.

  ## Katkıda Bulunma

  Katkılar hoşlanmaktadır! Katkı yönergelerini okuyun ve herhangi bir iyileştirme için pull request gönderin.

  ---

  **Not**: Bu uzantı Airbnb, Inc. ile bağlantılı değildir. Kullanıcıların halka açık Airbnb ilanlarını aramasına ve analiz etmesine yardımcı olmak için tasarlanmış bağımsız bir araçtır.
---

[![downloads](https://img.shields.io/npm/dm/@openbnb/mcp-server-airbnb)](https://www.npmjs.com/package/@openbnb/mcp-server-airbnb)

# Airbnb Search & Listings - MCP Bundle (MCPB)

A comprehensive MCP Bundle for searching Airbnb listings with advanced filtering capabilities and detailed property information retrieval. Built as a Model Context Protocol (MCP) server packaged in the MCP Bundle (MCPB) format for easy installation and use with compatible AI applications.

---

## 🚀 Prefer not to run a local server? Try [openbnb.ai](https://openbnb.ai/)

> **👉 [openbnb.ai](https://openbnb.ai/) is a hosted MCP server that solves the same problem — searching Airbnb listings — without any local setup.**

If you don't want to deal with installing and running this server yourself, **[openbnb.ai](https://openbnb.ai/)** is a separate, fully-hosted alternative you can connect to directly from your MCP client. It goes beyond what this open-source server offers:

- ✅ **Zero setup** — no Node, no `npx`, no config files, no updates to manage
- ✅ **Advanced filters** — richer search controls beyond the base tools here
- ✅ **MCP UI** — interactive UI components for browsing results, not just plain text
- ✅ **Managed & maintained** — kept running for you

Head to **[openbnb.ai](https://openbnb.ai/)** for setup instructions and the connection details for your MCP client.

If you'd rather self-host the open-source server, read on.

---

## Features

### 🔍 Advanced Search Capabilities
- **Location-based search** with support for cities, states, and regions
- **International location support** via client-side geocoding, so non-US queries (e.g. "Paris, France", "Copenhagen, Denmark") return results in the right city
- **Google Maps Place ID** integration for precise location targeting
- **Property type filtering** for entire homes, private rooms, shared rooms, or hotel rooms
- **Date filtering** with check-in and check-out date support
- **Guest configuration** including adults, children, infants, and pets
- **Price range filtering** with minimum and maximum price constraints
- **Pagination support** for browsing through large result sets

### 🏠 Detailed Property Information
- **Comprehensive listing details** including amenities, policies, and highlights
- **Location information** with coordinates and neighborhood details
- **House rules and policies** for informed booking decisions
- **Property descriptions** and key features
- **Direct links** to Airbnb listings for easy booking

### 🛡️ Security & Compliance
- **Robots.txt compliance** with configurable override for testing
- **Request timeout management** to prevent hanging requests
- **Enhanced error handling** with detailed logging
- **Rate limiting awareness** and respectful API usage
- **Secure configuration** through MCPB user settings

## Installation

### For Claude Desktop
This extension is packaged as an MCP Bundle (`.mcpb`) file. To install:

1. Download the `.mcpb` file from the [latest release](https://github.com/openbnb-org/mcp-server-airbnb/releases/latest)
2. Open the file — Claude Desktop will show an installation dialog
3. Configure the extension settings as needed

To ignore robots.txt, open Claude Desktop settings, navigate to the extension, and enable the **Ignore robots.txt** toggle.

### For Cursor, etc.

Before starting make sure [Node.js](https://nodejs.org/) is installed on your desktop for `npx` to work.
1. Go to: Cursor Settings > Tools & Integrations > New MCP Server

2. Add one the following to your `mcp.json`:
    ```json
    {
      "mcpServers": {
        "airbnb": {
          "command": "npx",
          "args": [
            "-y",
            "@openbnb/mcp-server-airbnb"
          ]
        }
      }
    }
    ```

    To ignore robots.txt for all requests, use this version with `--ignore-robots-txt` args

    ```json
    {
      "mcpServers": {
        "airbnb": {
          "command": "npx",
          "args": [
            "-y",
            "@openbnb/mcp-server-airbnb",
            "--ignore-robots-txt"
          ]
        }
      }
    }
    ```
3. Restart.


## Configuration

The extension provides the following user-configurable options:

### Ignore robots.txt
- **Type**: Boolean (checkbox)
- **Default**: `false`
- **Description**: Bypass robots.txt restrictions when making requests to Airbnb
- **Recommendation**: Keep disabled unless needed for testing purposes

### Disable third-party geocoding
- **Type**: Boolean (checkbox)
- **Environment variable**: `DISABLE_GEOCODING`
- **Default**: `false`
- **Description**: Skip the Photon/Nominatim geocoding step and let Airbnb resolve the location string on its own. Enabling this restores the pre-PR behavior — every search goes only to `airbnb.com`, no third-party calls.
- **Recommendation**: Keep disabled unless you specifically need zero third-party outbound traffic. With it enabled, non-US searches could return incorrect results. See [External Services](#external-services).

## Tools

### `airbnb_search`

Search for Airbnb listings with comprehensive filtering options.

**Parameters:**
- `location` (required): Location to search (e.g., "San Francisco, CA"). When supplied without `placeId`, the server geocodes this string client-side via Photon/Nominatim — see [External Services](#external-services).
- `placeId` (optional): Google Maps Place ID. Overrides `location` and skips client-side geocoding entirely (no third-party calls).
- `checkin` (optional): Check-in date in YYYY-MM-DD format
- `checkout` (optional): Check-out date in YYYY-MM-DD format
- `adults` (optional): Number of adults (default: 1)
- `children` (optional): Number of children (default: 0)
- `infants` (optional): Number of infants (default: 0)
- `pets` (optional): Number of pets (default: 0)
- `minPrice` (optional): Minimum price per night
- `maxPrice` (optional): Maximum price per night
- `cursor` (optional): Pagination cursor for browsing results
- `propertyType` (optional): Filter by property type — `entire_home`, `private_room`, `shared_room`, or `hotel_room`
- `ignoreRobotsText` (optional): Override robots.txt for this request

**Returns:**
- Search results with property details, pricing, and direct links
- Pagination information for browsing additional results
- Search URL for reference

### `airbnb_listing_details`

Get detailed information about a specific Airbnb listing.

**Parameters:**
- `id` (required): Airbnb listing ID
- `checkin` (optional): Check-in date in YYYY-MM-DD format
- `checkout` (optional): Check-out date in YYYY-MM-DD format
- `adults` (optional): Number of adults (default: 1)
- `children` (optional): Number of children (default: 0)
- `infants` (optional): Number of infants (default: 0)
- `pets` (optional): Number of pets (default: 0)
- `ignoreRobotsText` (optional): Override robots.txt for this request

**Returns:**
- Detailed property information including:
  - Location details with coordinates
  - Amenities and facilities
  - House rules and policies
  - Property highlights and descriptions
  - Direct link to the listing

## Technical Details

### Architecture
- **Runtime**: Node.js 18+
- **Protocol**: Model Context Protocol (MCP) via stdio transport
- **Format**: MCP Bundle (MCPB) v0.3
- **Dependencies**: Minimal external dependencies for security and reliability

### External Services

In addition to `airbnb.com`, the server makes geocoding requests to two third-party services to translate location queries into accurate map bounding boxes. This bypasses Airbnb's own server-side geocoder, which produces incorrect results for many non-US queries (e.g. "Paris, France" lands in Vendée; "Copenhagen, Denmark" lands in Wisconsin).

| Service | Endpoint | Used for | Notes |
| --- | --- | --- | --- |
| [Photon](https://photon.komoot.io/) | `photon.komoot.io` | Primary geocoder, called on every search without `placeId` | Free OSM-based service hosted by Komoot. One request per search. |
| [Nominatim](https://nominatim.openstreetmap.org/) | `nominatim.openstreetmap.org` | Fallback geocoder, called only when Photon does not return a bounding box | Subject to the [OSMF usage policy](https://operations.osmfoundation.org/policies/nominatim/) (max ~1 req/sec). |

Each search sends only the `location` string from the request to the geocoder — no other request fields, no IP geolocation, no tracking identifiers. The location string itself is, of course, the same string the user typed.

**Opting out:** there are two ways to skip the geocoders:

- **Per-request:** supply an explicit `placeId`. When `placeId` is present, the server uses Airbnb's own place lookup directly with no third-party calls.
- **Globally:** set the environment variable `DISABLE_GEOCODING=true`. The server will skip Photon/Nominatim entirely and pass the raw location string to Airbnb. This restores the pre-PR behavior for every search and guarantees zero third-party outbound traffic — at the cost of broken results for non-US locations that Airbnb's own geocoder mishandles. Defaults to `false`.

If a geocoder is unreachable or returns no result, the server falls back to sending the location string to Airbnb directly, exactly as it did before — so the worst case for an outage is that international searches degrade to the previous (broken) behavior, not that the search fails entirely.

### Error Handling
- Comprehensive error logging with timestamps
- Graceful degradation when Airbnb's page structure changes
- Timeout protection for network requests
- Detailed error messages for troubleshooting

### Security Measures
- Robots.txt compliance by default
- Request timeout limits
- Input validation and sanitization
- Secure environment variable handling
- No sensitive data storage

### Performance
- Efficient HTML parsing with Cheerio
- Request caching where appropriate
- Minimal memory footprint
- Fast startup and response times

## Compatibility

- **Platforms**: macOS, Windows, Linux
- **Node.js**: 18.0.0 or higher
- **Claude Desktop**: 0.10.0 or higher
- **Other MCP clients**: Compatible with any MCP-supporting application

## Development

### Building from Source

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Watch for changes during development
npm run watch
```

### Testing

The extension can be tested by running the MCP server directly:

```bash
# Run with robots.txt compliance (default)
node dist/index.js

# Run with robots.txt ignored (for testing)
node dist/index.js --ignore-robots-txt
```

## Legal and Ethical Considerations

- **Respect Airbnb's Terms of Service**: This extension is for legitimate research and booking assistance
- **Robots.txt Compliance**: The extension respects robots.txt by default
- **Rate Limiting**: Be mindful of request frequency to avoid overwhelming Airbnb's servers
- **Data Usage**: Only extract publicly available information for legitimate purposes

## Support

- **Issues**: Report bugs and feature requests on [GitHub Issues](https://github.com/openbnb-org/mcp-server-airbnb/issues)
- **Documentation**: Additional documentation available in the repository
- **Community**: Join discussions about MCP and MCPB development

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please read the contributing guidelines and submit pull requests for any improvements.

---

**Note**: This extension is not affiliated with Airbnb, Inc. It is an independent tool designed to help users search and analyze publicly available Airbnb listings.
