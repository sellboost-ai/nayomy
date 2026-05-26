---
name: "longbridge/openapi"
description: "LongPort OpenAPI provides real-time stock market data, provides AI access analysis and trading capabilities through MCP."
category: "Finance & Fintech"
repo: "longbridge/openapi"
stars: 432
url: "https://github.com/longbridge/openapi"
body_length: 6378
license: "Apache-2.0"
language: "Rust"
homepage: "https://open.longbridge.com"
body_tr: |-
  # Longbridge OpenAPI SDK

  [![](https://img.shields.io/crates/v/longbridge.svg)](https://crates.io/crates/longbridge) [![Go project version](https://badge.fury.io/go/github.com%2Flongbridge%2Fopenapi-go.svg)](https://badge.fury.io/go/github.com%2Flongbridge%2Fopenapi-go) [![PyPI version](https://badge.fury.io/py/longbridge.svg)](https://badge.fury.io/py/longbridge) [![npm version](https://badge.fury.io/js/longbridge.svg)](https://badge.fury.io/js/longbridge) [![Maven Central](https://img.shields.io/maven-central/v/io.github.longbridge/openapi-sdk)](https://search.maven.org/artifact/io.github.longbridge/openapi-sdk)


  Longbridge OpenAPI, araştırma ve geliştirme yeteneklerine sahip yatırımcılar için programlı alım satım ve fiyat teklifi arayüzleri sağlar ve kendi yatırım stratejilerine dayalı ticaret veya fiyat teklifi stratejisi analiz araçları oluşturmalarına yardımcı olur. İşlevler aşağıdaki kategorilere ayrılır:

  - Trading - Siparişleri oluşturma, değiştirme, iptal etme, bugünün/geçmiş siparişleri ve işlem detaylarını sorgulama, vb.
  - Quotes - Gerçek zamanlı fiyat teklifleri, geçmiş fiyat tekliflerinin elde edilmesi, vb.
  - Portfolio - Hesap varlıklarının, pozisyonların, fonların gerçek zamanlı sorgulanması
  - Gerçek zamanlı abonelik - Gerçek zamanlı fiyat teklifleri ve sipariş durum değişiklikleri için push bildirimleri sağlar

  **Bu depo aşağıdaki ana bileşenleri içerir:**

  | İsim                        | Dokümantasyon                                                              | Açıklama                                       |
  |-----------------------------|-----------------------------------------------------------------------|---------------------------------------------------|
  | [Rust](rust/README.md)      | [Doc](https://longbridge.github.io/openapi/rust/longbridge/index.html) | Rust için Longbridge OpenAPI `(>= 1.89.0)`           |
  | [Python](python/README.md)  | [Doc](https://longbridge.github.io/openapi/python/index.html)        | Python 3 için Longbridge OpenAPI `(>= 3.8)`          |
  | [Node.js](nodejs/README.md) | [Doc](https://longbridge.github.io/openapi/nodejs/index.html)        | Node.js için Longbridge OpenAPI `(>= 10)`            |
  | [Java](java/README.md)      | [Doc](https://longbridge.github.io/openapi/java/index.html)          | Java için Longbridge OpenAPI `(>= 11)`               |
  | [C](c/README.md)            | [Doc](https://longbridge.github.io/openapi/c/index.html)             | C için Longbridge OpenAPI `(>= C99)`                 |
  | [C++](cpp/README.md)        | [Doc](https://longbridge.github.io/openapi/cpp/index.html)           | C++ için Longbridge OpenAPI `(>= C++17)`              |
  | Go                          |                                                                       | https://github.com/longbridge/openapi-go         |
  | [MCP](mcp/README.md)        |                                                                       | Longbridge OpenAPI için bir MCP sunucu uygulaması |


  ## Context Türleri

  | Context | Açıklama |
  |---------|-------------|
  | `QuoteContext` | Gerçek zamanlı fiyat teklifleri, mum grafikler, opsiyonlar, garantiler, izleme listeleri, push abonelikleri |
  | `TradeContext` | Siparişler, pozisyonlar, hesap bakiyesi, gerçekleştirmeler, nakit akışı |
  | `AssetContext` | Hesap özeti indirmesi |
  | `ContentContext` | Haberler, topluluk konuları |
  | `FundamentalContext` | Mali raporlar, analist değerlendirmeleri, temettüler, valüasyon, şirket özeti, hissedarlar |
  | `MarketContext` | Pazar durumu, aracı kurum holdingleri, A/H primi, ticaret istatistikleri, anomali uyarıları, endeks bileşenleri |
  | `CalendarContext` | Mali takvim (kazanç, temettüler, bölünmeler, halka arzlar, makro veriler, pazar kapanışları) |
  | `PortfolioContext` | Döviz kurları, portfolio kar/zarar analizi |
  | `AlertContext` | Fiyat uyarısı yönetimi (ekleme/etkinleştirme/devre dışı bırakma/silme) |
  | `DCAContext` | Ortalama maliyet düşürme planı yönetimi |
  | `SharelistContext` | Topluluk hisse listesi yönetimi |

  ## Hızlı Başlangıç

  Yukarıdaki tablodan bir dil SDK'sını seçin ve kurulum ile ilk isteği için README'sini takip edin. Tam referans dokümanlar: https://longbridge.github.io/openapi

  ## SDK Dokümantasyonu

  https://longbridge.github.io/openapi

  ## Sorun Giderme

  - Ortam değişkenleri etkili olmuyor
    - macOS/Linux: `export ...` yalnızca geçerli shell oturumunu etkiler.
    - Windows: `setx ...` etkili olması için yeni bir terminal/oturum açılması gerekir.
  - Kimlik doğrulama hataları (401/403)
    - `LONGBRIDGE_APP_KEY`, `LONGBRIDGE_APP_SECRET`, `LONGBRIDGE_ACCESS_TOKEN` değerlerinin doğru ve süresi dolmamış olduğunu doğrulayın.
    - OpenAPI uygulamanızın gerekli izinlere sahip olduğundan emin olun.
  - Ağ / bağlantı hataları
    - HTTPS/WSS için güvenlik duvarı/proxy kurallarını kontrol edin.
    - Özel bir endpoint kullanıyorsanız, `LONGBRIDGE_HTTP_URL`, `LONGBRIDGE_QUOTE_WS_URL`, `LONGBRIDGE_TRADE_WS_URL` değerlerini ayarlayın.
  - Fiyat teklifi aboneliği hemen çıkıyor
    - Süreci çalışır durumda tutun (event loop / sleep / blocking receive loop), aksi takdirde push olaylarını görmezsiniz.
  - Hata Ayıklama
    - `LONGBRIDGE_LOG_PATH` aracılığıyla logları etkinleştirin.
    - Fiyat teklifleri bağlanırsa ancak boş görünüyorsa, açılan fiyat teklifi paketlerini doğrulamak için `LONGBRIDGE_PRINT_QUOTE_PACKAGES=true` tutun.

  ## Minimal Doğrulama

  Ortamınız / kimlik bilgilerinizin doğru olup olmadığından emin değilseniz, yerleşik HTTP istemci örnekleriyle başlayın.

  - Python:

    ```bash
    python examples/python/http_client.py
    ```

  - Node.js:

    ```bash
    node examples/nodejs/http_client.js
    ```

  - Rust:

    ```bash
    cargo run --manifest-path examples/rust/Cargo.toml -p http_client
    ```

  - Java (örnek modülü dizininden):

    ```bash
    cd examples/java/http_client
    mvn -q -DskipTests package
    mvn -q -DskipTests exec:java
    ```

  - C/C++:
    - `examples/c/http_client/main.c` ve `examples/cpp/http_client/main.cpp` dosyalarındaki kaynakları kullanın.
    - Derleme talimatları toolchain'inize bağlıdır; ilgili dil SDK README'sine bakın.

  Beklenen sonuçlar:

  - Kimlik bilgileri geçerliyse ve ağ ulaşılabilirse, HTTP çağrısı JSON döndürür.
  - 401/403 döndürürse, `LONGBRIDGE_APP_KEY`, `LONGBRIDGE_APP_SECRET`, `LONGBRIDGE_ACCESS_TOKEN` değerlerinizi kontrol edin.
  - Zaman aşımına uğrarsa / bağlanamazsa, proxy/güvenlik duvarını ve endpoint ortam değişkenlerinizi kontrol edin.

  ## Kaynaklar

  - [Longbridge OpenAPI](https://open.longbridge.com/en/)
  - [Longbridge OpenAPI Dokümanları](https://open.longbridge.com/en/docs)

  ## Lisans

  Aşağıdakilerden herhangi biri kapsamında lisanslanmıştır

  * Apache License, Version 2.0, ([LICENSE-APACHE](./LICENSE-APACHE) veya http://www.apache.org/licenses/LICENSE-2.0)
  * MIT lisansı ([LICENSE-MIT](./LICENSE-MIT) veya http://opensource.org/licenses/MIT) seçiminize göre.
---

# Longbridge OpenAPI SDK

[![](https://img.shields.io/crates/v/longbridge.svg)](https://crates.io/crates/longbridge) [![Go project version](https://badge.fury.io/go/github.com%2Flongbridge%2Fopenapi-go.svg)](https://badge.fury.io/go/github.com%2Flongbridge%2Fopenapi-go) [![PyPI version](https://badge.fury.io/py/longbridge.svg)](https://badge.fury.io/py/longbridge) [![npm version](https://badge.fury.io/js/longbridge.svg)](https://badge.fury.io/js/longbridge) [![Maven Central](https://img.shields.io/maven-central/v/io.github.longbridge/openapi-sdk)](https://search.maven.org/artifact/io.github.longbridge/openapi-sdk)


Longbridge OpenAPI provides programmatic quote trading interfaces for investors with research and development capabilities and assists them to build trading or quote strategy analysis tools based on their own investment strategies. The functions fall into the following categories:

- Trading - Create, amend, cancel orders, query today’s/past orders and transaction details, etc.
- Quotes - Real-time quotes, acquisition of historical quotes, etc.
- Portfolio - Real-time query of the account assets, positions, funds
- Real-time subscription - Provides real-time quotes and push notifications for order status changes

**This repo contains the following main components:**

| Name                        | Document                                                              | Description                                       |
|-----------------------------|-----------------------------------------------------------------------|---------------------------------------------------|
| [Rust](rust/README.md)      | [Doc](https://longbridge.github.io/openapi/rust/longbridge/index.html) | Longbridge OpenAPI for Rust `(>= 1.89.0)`           |
| [Python](python/README.md)  | [Doc](https://longbridge.github.io/openapi/python/index.html)        | Longbridge OpenAPI for Python 3 `(>= 3.8)`          |
| [Node.js](nodejs/README.md) | [Doc](https://longbridge.github.io/openapi/nodejs/index.html)        | Longbridge OpenAPI for Node.js `(>= 10)`            |
| [Java](java/README.md)      | [Doc](https://longbridge.github.io/openapi/java/index.html)          | Longbridge OpenAPI for Java `(>= 11)`               |
| [C](c/README.md)            | [Doc](https://longbridge.github.io/openapi/c/index.html)             | Longbridge OpenAPI for C `(>= C99)`                 |
| [C++](cpp/README.md)        | [Doc](https://longbridge.github.io/openapi/cpp/index.html)           | Longbridge OpenAPI for C++`(>= C++17)`              |
| Go                          |                                                                       | https://github.com/longbridge/openapi-go         |
| [MCP](mcp/README.md)        |                                                                       | An MCP server implementation for Longbridge OpenAPI |


## Context Types

| Context | Description |
|---------|-------------|
| `QuoteContext` | Real-time quotes, candlesticks, options, warrants, watchlists, push subscriptions |
| `TradeContext` | Orders, positions, account balance, executions, cash flow |
| `AssetContext` | Account statement download |
| `ContentContext` | News, community topics |
| `FundamentalContext` | Financial reports, analyst ratings, dividends, valuation, company overview, shareholders |
| `MarketContext` | Market status, broker holdings, A/H premium, trade statistics, anomaly alerts, index constituents |
| `CalendarContext` | Financial calendar (earnings, dividends, splits, IPOs, macro data, market closures) |
| `PortfolioContext` | Exchange rates, portfolio P&L analysis |
| `AlertContext` | Price alert management (add/enable/disable/delete) |
| `DCAContext` | Dollar-cost averaging plan management |
| `SharelistContext` | Community sharelist management |

## Quickstart

Pick a language SDK from the table above and follow its README for install and first request. Full reference docs: https://longbridge.github.io/openapi

## SDK Documentation

https://longbridge.github.io/openapi

## Troubleshooting

- Environment variables not taking effect
  - macOS/Linux: `export ...` only affects the current shell session.
  - Windows: `setx ...` requires opening a new terminal/session to take effect.
- Authentication errors (401/403)
  - Verify `LONGBRIDGE_APP_KEY`, `LONGBRIDGE_APP_SECRET`, `LONGBRIDGE_ACCESS_TOKEN` are correct and not expired.
  - Ensure your OpenAPI app has the required permissions.
- Network / connection errors
  - Check firewall/proxy rules for HTTPS/WSS.
  - If you use a custom endpoint, set `LONGBRIDGE_HTTP_URL`, `LONGBRIDGE_QUOTE_WS_URL`, `LONGBRIDGE_TRADE_WS_URL`.
- Quote subscription exits immediately
  - Keep the process running (event loop / sleep / blocking receive loop), otherwise you will not see push events.
- Debugging
  - Enable logs via `LONGBRIDGE_LOG_PATH`.
  - If quotes connect but look empty, keep `LONGBRIDGE_PRINT_QUOTE_PACKAGES=true` to confirm opened quote packages.

## Minimal Verification

If you're not sure whether your environment / credentials are correct, start with the built-in HTTP client examples.

- Python:

  ```bash
  python examples/python/http_client.py
  ```

- Node.js:

  ```bash
  node examples/nodejs/http_client.js
  ```

- Rust:

  ```bash
  cargo run --manifest-path examples/rust/Cargo.toml -p http_client
  ```

- Java (from the example module directory):

  ```bash
  cd examples/java/http_client
  mvn -q -DskipTests package
  mvn -q -DskipTests exec:java
  ```

- C/C++:
  - Use the sources in `examples/c/http_client/main.c` and `examples/cpp/http_client/main.cpp`.
  - Build instructions depend on your toolchain; see the corresponding language SDK README.

Expected results:

- If credentials are valid and network is reachable, the HTTP call returns JSON.
- If it returns 401/403, check your `LONGBRIDGE_APP_KEY`, `LONGBRIDGE_APP_SECRET`, `LONGBRIDGE_ACCESS_TOKEN`.
- If it times out / cannot connect, check proxy/firewall and your endpoint env vars.

## Resources

- [Longbridge OpenAPI](https://open.longbridge.com/en/)
- [Longbridge OpenAPI Docs](https://open.longbridge.com/en/docs)

## License

Licensed under either of

* Apache License, Version 2.0,([LICENSE-APACHE](./LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
* MIT license ([LICENSE-MIT](./LICENSE-MIT) or http://opensource.org/licenses/MIT) at your option.
