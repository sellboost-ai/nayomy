---
name: "Govcraft/rust-docs-mcp-server"
description: "Provides up-to-date documentation context for a specific Rust crate to LLMs via an MCP tool, using semantic search (embeddings) and LLM summarization."
description_tr: "Belirli bir Rust crate'i için güncel dokümantasyon bağlamını MCP tool aracılığıyla LLM'lere sunar; semantic search (embeddings) ve LLM summarization kullanarak işlem yapar."
category: "Developer Tools"
repo: "Govcraft/rust-docs-mcp-server"
stars: 278
url: "https://github.com/Govcraft/rust-docs-mcp-server"
body_length: 14059
license: "MIT"
language: "Rust"
body_tr: |-
  # Rust Docs MCP Server

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ⭐ **Bu projeyi beğendiniz mi? Lütfen
  [depoyu yıldızlayın](https://github.com/Govcraft/rust-docs-mcp-server)
  GitHub'da desteğinizi göstermek ve güncellemeleri almak için!** ⭐

  ## Motivasyon

  Modern yapay zeka destekli kod editörleri (Cursor, Cline, Roo Code vb.) kod
  yapısını ve sözdizimini anlamada mükemmeldir, ancak hızla gelişen kütüphaneler
  ve framework'ler, özellikle de cratelar sık sık güncellenen Rust ekosisteminde
  oldukça zorlanabilirler. Eğitim verilerinin kesme tarihi, en son API'ler
  hakkında bilgi eksikliği anlamına gelebilir ve bu da yanlış veya eski kod
  önerileriyle sonuçlanır.

  Bu MCP sunucusu, belirli bir Rust crate'i için güncel, odaklanmış bir bilgi
  kaynağı sağlayarak bu sorunu çözer. Bu sunucunun bir örneğini bir crate için
  çalıştırarak (örn. `serde`, `tokio`, `reqwest`), LLM kod asistanınıza
  (`query_rust_docs`) o crate ile ilgili kod yazarken kullanabileceği bir araç
  sağlarsınız.

  Bu aracı kullanmak için talimatlandırıldığında, LLM crate'in API'si veya
  kullanımı hakkında spesifik sorular sorabilir ve doğrudan _mevcut_
  belgelerinden türetilmiş yanıtlar alabilir. Bu, oluşturulan kodun doğruluğunu
  ve alaka düzeyini önemli ölçüde artırır, manuel düzeltme ihtiyacını azaltır
  ve geliştirmeyi hızlandırır.

  Bu sunucunun birden fazla örneği eş zamanlı olarak çalıştırılabilir, bu da LLM
  asistanının bir kodlama oturumu sırasında birkaç farklı crate'in belgelerine
  erişmesine olanak tanır.

  Bu sunucu belirtilen bir Rust crate'i için belgeleri alır, içerik için
  gömülü vektörler oluşturur ve crate hakkında sorulara belgelendirme bağlamına
  dayalı olarak yanıt vermek için bir MCP aracı sağlar.

  ## Özellikler

  - **Hedeflenen Belgeler:** Sunucu örneği başına tek bir Rust crate'e odaklanır.
  - **Özellik Desteği:** Belgelendirme oluşturma için gerekli crate özelliklerini
    belirtmeye izin verir.
  - **Semantik Arama:** Belirli bir soru için en alakalı belgelendirme bölümlerini
    bulmak için OpenAI'nin `text-embedding-3-small` modelini kullanır.
  - **LLM Özetleme:** Alınan belgelendirme bağlamına dayalı olarak özlü yanıtlar
    oluşturmak için OpenAI'nin `gpt-4o-mini-2024-07-18` modelini kullanır.
  - **Önbelleğe Alma:** Oluşturulan belgelendirme içeriğini ve gömülü vektörleri
    kullanıcının XDG veri dizininde (`~/.local/share/rustdocs-mcp-server/` veya
    benzer) crate, sürüm _ve_ istenen özellikler temelinde önbelleğe alarak
    sonraki başlatmaları hızlandırır.
  - **MCP Entegrasyonu:** Stdio üzerinden standart bir MCP sunucusu olarak
    çalışır, araçlar ve kaynaklar sunar.

  ## Ön Koşullar

  - **OpenAI API Anahtarı:** Gömülü vektörler oluşturmak ve yanıtları özetlemek
    için gereklidir. Sunucu bu anahtarı `OPENAI_API_KEY` ortam değişkeninde
    bekler. (Sunucu ayrıca crate bağımlılıklarını indirmek ve OpenAI API'si ile
    iletişim kurmak için ağ erişimine ihtiyaç duyar).

  ## Kurulum

  Önerilen kurulum yöntemi, işletim sisteminiz için önceden derlenmiş ikili
  dosyasını
  [GitHub Releases sayfasından](https://github.com/Govcraft/rust-docs-mcp-server/releases)
  indirmektir.

  1. [Releases sayfasına](https://github.com/Govcraft/rust-docs-mcp-server/releases)
     gidin.
  2. Sisteminiz için uygun arşivi indirin (Windows için `.zip`, Linux/macOS için
     `.tar.gz`).
  3. `rustdocs_mcp_server` (veya `rustdocs_mcp_server.exe`) ikili dosyasını
     çıkarın.
  4. İkili dosyayı sisteminizin `PATH` ortam değişkenine dahil olan bir dizine
     yerleştirin (örn. `/usr/local/bin`, `~/bin`).

  ### Kaynaktan Derleme (Alternatif)

  Kaynaktan derlemek istiyorsanız, [Rust Toolchain](https://rustup.rs/) yüklü
  olması gerekir.

  1. **Depoyu klonlayın:**
     ```bash
     git clone https://github.com/Govcraft/rust-docs-mcp-server.git
     cd rust-docs-mcp-server
     ```
  2. **Sunucuyu derleyin:**
     ```bash
     cargo build --release
     ```

  ## Kullanım

  **Yeni Cratelar için Önemli Not:**

  Sunucuyu ilk kez bir crate ile kullanırken (veya yeni bir sürüm/özellik seti
  ile), belgeleri indirmesi ve gömülü vektörler oluşturması gerekir. Bu işlem,
  özellikle kapsamlı belgelendirmeye sahip cratelar için uzun sürebilir ve etkin
  internet bağlantısı ile OpenAI API anahtarı gerektirir.

  Yeni bir crate yapılandırmasını AI kod editörünüze (Roo Code, Cursor vb.)
  eklemeden _önce_ sunucuyu doğrudan komut satırından bir kez çalıştırmanız
  önerilir. Bu, ilk gömülü vektör oluşturmanın ve önbelleğe almanın tamamlanmasına
  olanak tanır. Sunucunun başlangıç mesajlarını gördüğünüzde (örn.
  "MCP Server listening on stdio"), onu kapatabilirsiniz (Ctrl+C). Sonraki
  başlatmalar, kod editörü tarafından başlatılanlar da dahil olmak üzere,
  önbelleğe alınan verileri kullanır ve çok daha hızlı başlar.

  ### Sunucuyu Çalıştırma

  Sunucu komut satırından başlatılır ve hedef crate için **Package ID
  Specification** gerektirir. Bu spesifikasyon Cargo tarafından kullanılan biçimi
  izler (örn. `crate_name`, `crate_name@version_req`). Tam spesifikasyon
  ayrıntıları için bkz. `man cargo-pkgid` veya
  [Cargo belgelendirmesi](https://doc.rust-lang.org/cargo/reference/pkgid-spec.html).

  İsteğe bağlı olarak, gerekli crate özelliklerini `-F` veya `--features`
  bayrağını kullanarak belirtebilirsiniz, arkasından virgülle ayrılmış özellik
  listesi. Bu, `cargo doc` başarılı olması için belirli özellikler etkinleştirilmesi
  gereken cratelar için gereklidir (örn. çalışma zamanı özelliği gerektiren
  `async-stripe` gibi).

  ```bash
  # API anahtarını ayarlayın (gerçek anahtarınızla değiştirin)
  export OPENAI_API_KEY="sk-..."

  # Örnek: serde'nin en son 1.x sürümü için sunucuyu çalıştırın
  rustdocs_mcp_server "serde@^1.0"

  # Örnek: reqwest'in belirli bir sürümü için sunucuyu çalıştırın
  rustdocs_mcp_server "reqwest@0.12.0"

  # Örnek: tokio'nun en son sürümü için sunucuyu çalıştırın
  rustdocs_mcp_server tokio

  # Örnek: async-stripe için sunucuyu çalıştırın, gerekli runtime özelliğini etkinleştirin
  rustdocs_mcp_server "async-stripe@0.40" -F runtime-tokio-hyper-rustls

  # Örnek: birden fazla özellik içeren başka bir crate için sunucuyu çalıştırın
  rustdocs_mcp_server "some-crate@1.2" --features feat1,feat2
  ```

  Belirli bir crate sürümü _ve özellik seti_ için ilk çalıştırmada, sunucu:

  1. `cargo doc` kullanarak crate belgelendirmesini indirir (belirtilen özellikler
     ile).
  2. HTML belgelendirmesini ayrıştırır.
  3. OpenAI API kullanarak belgelendirme içeriği için gömülü vektörler oluşturur
     (bu biraz zaman alabilir ve maliyete neden olabilir, ancak çoğu crate için
     genellikle sadece bir ABD dolarının kesirleri; test sırasında 5000'den fazla
     belgelendirme sayfasına sahip `async-stripe` gibi büyük bir crate bile gömülü
     vektör oluşturma için sadece 0,18 USD'ye mal olmuştur).
  4. Belgelendirme içeriğini ve gömülü vektörleri önbelleğe alır, böylece maliyet
     tekrar oluşmaz.
  5. MCP sunucusunu başlatır.

  Aynı crate sürümü _ve özellik seti_ için sonraki çalıştırmalar verileri
  önbellekten yükler, başlangıcı çok daha hızlı hale getirir.

  ### MCP Etkileşimi

  Sunucu, Model Context Protocol kullanarak standart giriş/çıkış (stdio) üzerinden
  iletişim kurar. Aşağıdakileri sunar:

  - **Araç: `query_rust_docs`**
    - **Açıklama:** Sunucunun başlatıldığı belirli Rust crate'i için belgelendirmeyi
      semantik arama ve LLM özetleme kullanarak sorgulayın.
    - **Giriş Şeması:**
      ```json
      {
        "type": "object",
        "properties": {
          "question": {
            "type": "string",
            "description": "Crate'in API'si veya kullanımı hakkındaki spesifik soru."
          }
        },
        "required": ["question"]
      }
      ```
    - **Çıkış:** Alakalı belgelendirme bağlamına dayalı olarak LLM tarafından
      oluşturulan yanıtı içeren metin yanıtı, `From <crate_name> docs:` ön eki
      ile.
    - **Örnek MCP Çağrısı:**
      ```json
      {
        "jsonrpc": "2.0",
        "method": "callTool",
        "params": {
          "tool_name": "query_rust_docs",
          "arguments": {
            "question": "reqwest ile basit bir GET isteği nasıl yapabilirim?"
          }
        },
        "id": 1
      }
      ```

  - **Kaynak: `crate://<crate_name>`**
    - **Açıklama:** Bu sunucu örneğinin yapılandırıldığı Rust crate'in adını sağlar.
    - **URI:** `crate://<crate_name>` (örn. `crate://serde`, `crate://reqwest`)
    - **İçerik:** Crate adını içeren düz metin.

  - **Günlüklendirme:** Sunucu bilgilendirici günlükleri (başlangıç iletileri, sorgu
    işleme adımları) MCP istemcisine `logging/message` bildirimleri aracılığıyla
    geri gönderir.

  ### Örnek İstemci Yapılandırması (Roo Code)

  Roo Code gibi MCP istemcilerini, her biri farklı bir crate'i hedefleyen bu
  sunucunun birden fazla örneğini çalıştıracak şekilde yapılandırabilirsiniz.
  Roo Code'un `mcp_settings.json` dosyası için `reqwest` ve `async-stripe` için
  sunucuları yapılandıran bir örnek kod parçası aşağıdadır (`async-stripe` için
  eklenen özellikler argümanını not edin):

  ```json
  {
    "mcpServers": {
      "rust-docs-reqwest": {
        "command": "/path/to/your/rustdocs_mcp_server",
        "args": [
          "reqwest@0.12"
        ],
        "env": {
          "OPENAI_API_KEY": "YOUR_OPENAI_API_KEY_HERE"
        },
        "disabled": false,
        "alwaysAllow": []
      },
      "rust-docs-async-stripe": {
        "command": "rustdocs_mcp_server",
        "args": [
          "async-stripe@0.40",
          "-F",
          " runtime-tokio-hyper-rustls"
        ],
        "env": {
          "OPENAI_API_KEY": "YOUR_OPENAI_API_KEY_HERE"
        },
        "disabled": false,
        "alwaysAllow": []
      }
    }
  }
  ```

  **Not:**

  - `/path/to/your/rustdocs_mcp_server` yerine sisteminizde derlenmiş ikili
    dosyasının gerçek yolunu yazın (PATH'te yoksa).
  - `YOUR_OPENAI_API_KEY_HERE` yerine gerçek OpenAI API anahtarınızı yazın.
  - Anahtarlar (`rust-docs-reqwest`, `rust-docs-async-stripe`) Roo Code içinde
    sunucu örneklerini tanımlamak için seçtiğiniz isteğe bağlı isimlerdir.

  ### Örnek İstemci Yapılandırması (Claude Desktop)

  Claude Desktop kullanıcıları için sunucuyu MCP ayarlarında yapılandırabilirsiniz.
  `serde` ve `async-stripe` için sunucuları yapılandıran bir örnek:

  ```json
  {
    "mcpServers": {
      "rust-docs-serde": {
        "command": "/path/to/your/rustdocs_mcp_server",
        "args": [
          "serde@^1.0"
        ]
      },
      "rust-docs-async-stripe-rt": {
        "command": "rustdocs_mcp_server",
        "args": [
          "async-stripe@0.40",
          "-F",
          "runtime-tokio-hyper-rustls"
        ]
      }
    }
  }
  ```

  **Not:**

  - `rustdocs_mcp_server` sistemin PATH'inde olduğundan emin olun veya tam yol
    sağlayın (örn. `/path/to/your/rustdocs_mcp_server`).
  - Anahtarlar (`rust-docs-serde`, `rust-docs-async-stripe-rt`) sunucu
    örneklerini tanımlamak için seçtiğiniz isteğe bağlı isimlerdir.
  - `OPENAI_API_KEY` ortam değişkenini Claude Desktop'ın erişebileceği yerde
    ayarlamayı unutmayın (bu sistem genelinde olabilir veya Claude Desktop'ı
    nasıl başlattığınıza bağlı olabilir). Claude Desktop'ın MCP yapılandırması
    Roo Code gibi sunucu başına ortam değişkenlerini doğrudan desteklemeyebilir.
  - Örnek `async-stripe` gibi belirli özellikler gerektiren cratelar için `-F`
    argümanını nasıl ekleyeceğini gösterir.

  ### Önbelleğe Alma

  - **Konum:** Önbelleğe alınan belgeler ve gömülü vektörler XDG veri
    dizininde depolanır, genellikle
    `~/.local/share/rustdocs-mcp-server/<crate_name>/<sanitized_version_req>/<features_hash>/embeddings.bin`
    altında. `sanitized_version_req` sürüm gereksiniminden türetilir ve
    `features_hash` başlangıçta istenen belirli özellikler kombinasyonunu temsil
    eden bir karmaşadır. Bu, farklı özellik setlerinin ayrı şekilde önbelleğe
    alınmasını sağlar.
  - **Format:** Veri `bincode` serileştirmesi kullanılarak önbelleğe alınır.
  - **Yeniden Oluşturma:** Önbellek dosyası eksikse, bozuksa veya dekodasyon
    yapılamıyorsa, sunucu belgeleri ve gömülü vektörleri otomatik olarak yeniden
    oluşturur.

  ## Nasıl Çalışır

  1. **Başlatma:** `clap` kullanarak komut satırından crate spesifikasyon ve
     isteğe bağlı özellikleri ayrıştırır.
  2. **Önbellek Kontrolü:** Belirli crate, sürüm gereksinimi ve özellik seti için
     önceden var olan önbellek dosyasını arar.
  3. **Belgelendirme Oluşturma (önbellek kaçırması durumunda):**
     - Hedef crate'e bağlı olan geçici bir Rust projesi oluşturur, belirtilen
       özellikleri `Cargo.toml`'de etkinleştirir.
     - Geçici dizinde HTML belgelendirmesini oluşturmak için `cargo` kütüphanesi
       API'sini kullanarak `cargo doc` çalıştırır.
     - `index.html` içeren alt dizini arayarak `target/doc` içinde doğru çıkış
       dizinini dinamik olarak konumlandırır.
  4. **İçerik Çıkarma (önbellek kaçırması durumunda):**
     - Konumlandırılan belgelendirme dizini içindeki HTML dosyalarında yürür.
     - Ana içerik alanından (`<section id="main-content">`) metin içeriğini
       çıkarmak için `scraper` crate'ini kullanarak her HTML dosyasını ayrıştırır.
  5. **Gömülü Vektör Oluşturma (önbellek kaçırması durumunda):**
     - `async-openai` crate'i ve `tiktoken-rs` kullanarak `text-embedding-3-small`
       modelini kullanarak her çıkarılan belge yığını için gömülü vektörler
       oluşturur.
     - İşlenen belirteç sayısına dayalı olarak tahmini maliyeti hesaplar.
  6. **Önbelleğe Alma (önbellek kaçırması durumunda):** Çıkarılan belge içeriğini
     ve karşılık gelen gömülü vektörleri `bincode` kullanarak önbellek dosyasına
     kaydeder (yol özellikler karmaşasını içerir).
  7. **Sunucu Başlatması:** `RustDocsServer`'ı yüklenen/oluşturulan belgeler ve
     gömülü vektörler ile başlatır.
  8. **MCP Sunumu:** Stdio üzerinde `rmcp` kullanarak MCP sunucusunu başlatır.
  9. **Sorgu İşleme (`query_rust_docs` aracı):**
     - Kullanıcının sorusu için bir gömülü vektör oluşturur.
     - Soru gömülü vektörü ile tüm önbelleğe alınan belge gömülü vektörleri arasında
       kosinüs benzerliğini hesaplar.
     - Yüksek benzerliğe sahip belge yığınını tanımlar.
     - Kullanıcının sorusu ve en iyi eşleşen belge yığınının içeriğini OpenAI API
       aracılığıyla `gpt-4o-mini-2024-07-18` modeline gönderir.
     - LLM soruyu _yalnızca_ sağlanan bağlama dayalı olarak cevaplamaya talimatlandırılır.
     - LLM'nin yanıtını MCP istemcisine döndürür.

  ## Lisans

  Bu proje MIT Lisansı altında lisanslanmıştır.

  Telif Hakkı (c) 2025 Govcraft

  ## Sponsor

  Govcraft tek kişilik bir işletmedir—kurumsal destek yok, yatırımcı yok, sadece
  ben faydalı araçlar yapıyorum. Bu proje size yardımcı olursa,
  [sponsorluk](https://github.com/sponsors/Govcraft) çalışmaların devam etmesini
  sağlar.

  [![GitHub'da Sponsor Olun](https://img.shields.io/badge/Sponsor-%E2%9D%A4-%23db61a2?logo=GitHub)](https://github.com/sponsors/Govcraft)
---

# Rust Docs MCP Server

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

⭐ **Like this project? Please
[star the repository](https://github.com/Govcraft/rust-docs-mcp-server) on
GitHub to show your support and stay updated!** ⭐

## Motivation

Modern AI-powered coding assistants (like Cursor, Cline, Roo Code, etc.) excel
at understanding code structure and syntax but often struggle with the specifics
of rapidly evolving libraries and frameworks, especially in ecosystems like Rust
where crates are updated frequently. Their training data cutoff means they may
lack knowledge of the latest APIs, leading to incorrect or outdated code
suggestions.

This MCP server addresses this challenge by providing a focused, up-to-date
knowledge source for a specific Rust crate. By running an instance of this
server for a crate (e.g., `serde`, `tokio`, `reqwest`), you give your LLM coding
assistant a tool (`query_rust_docs`) it can use _before_ writing code related to
that crate.

When instructed to use this tool, the LLM can ask specific questions about the
crate's API or usage and receive answers derived directly from the _current_
documentation. This significantly improves the accuracy and relevance of the
generated code, reducing the need for manual correction and speeding up
development.

Multiple instances of this server can be run concurrently, allowing the LLM
assistant to access documentation for several different crates during a coding
session.

This server fetches the documentation for a specified Rust crate, generates
embeddings for the content, and provides an MCP tool to answer questions about
the crate based on the documentation context.

## Features

- **Targeted Documentation:** Focuses on a single Rust crate per server
  instance.
- **Feature Support:** Allows specifying required crate features for
  documentation generation.
- **Semantic Search:** Uses OpenAI's `text-embedding-3-small` model to find the
  most relevant documentation sections for a given question.
- **LLM Summarization:** Leverages OpenAI's `gpt-4o-mini-2024-07-18` model to
  generate concise answers based _only_ on the retrieved documentation context.
- **Caching:** Caches generated documentation content and embeddings in the
  user's XDG data directory (`~/.local/share/rustdocs-mcp-server/` or similar)
  based on crate, version, _and_ requested features to speed up subsequent
  launches.
- **MCP Integration:** Runs as a standard MCP server over stdio, exposing tools
  and resources.

## Prerequisites

- **OpenAI API Key:** Needed for generating embeddings and summarizing answers.
  The server expects this key to be available in the `OPENAI_API_KEY`
  environment variable. (The server also requires network access to download
  crate dependencies and interact with the OpenAI API).

## Installation

The recommended way to install is to download the pre-compiled binary for your
operating system from the
[GitHub Releases page](https://github.com/Govcraft/rust-docs-mcp-server/releases).

1. Go to the
   [Releases page](https://github.com/Govcraft/rust-docs-mcp-server/releases).
2. Download the appropriate archive (`.zip` for Windows, `.tar.gz` for
   Linux/macOS) for your system.
3. Extract the `rustdocs_mcp_server` (or `rustdocs_mcp_server.exe`) binary.
4. Place the binary in a directory included in your system's `PATH` environment
   variable (e.g., `/usr/local/bin`, `~/bin`).

### Building from Source (Alternative)

If you prefer to build from source, you will need the
[Rust Toolchain](https://rustup.rs/) installed.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Govcraft/rust-docs-mcp-server.git
   cd rust-docs-mcp-server
   ```
2. **Build the server:**
   ```bash
   cargo build --release
   ```

## Usage

**Important Note for New Crates:**

When using the server with a crate for the first time (or with a new version/feature set), it needs to download the documentation and generate embeddings. This process can take some time, especially for crates with extensive documentation, and requires an active internet connection and OpenAI API key.

It is recommended to run the server once directly from your command line for any new crate configuration *before* adding it to your AI coding assistant (like Roo Code, Cursor, etc.). This allows the initial embedding generation and caching to complete. Once you see the server startup messages indicating it's ready (e.g., "MCP Server listening on stdio"), you can shut it down (Ctrl+C). Subsequent launches, including those initiated by your coding assistant, will use the cached data and start much faster.


### Running the Server

The server is launched from the command line and requires the **Package ID
Specification** for the target crate. This specification follows the format used
by Cargo (e.g., `crate_name`, `crate_name@version_req`). For the full
specification details, see `man cargo-pkgid` or the
[Cargo documentation](https://doc.rust-lang.org/cargo/reference/pkgid-spec.html).

Optionally, you can specify required crate features using the `-F` or
`--features` flag, followed by a comma-separated list of features. This is
necessary for crates that require specific features to be enabled for
`cargo doc` to succeed (e.g., crates requiring a runtime feature like
`async-stripe`).

```bash
# Set the API key (replace with your actual key)
export OPENAI_API_KEY="sk-..."

# Example: Run server for the latest 1.x version of serde
rustdocs_mcp_server "serde@^1.0"

# Example: Run server for a specific version of reqwest
rustdocs_mcp_server "reqwest@0.12.0"

# Example: Run server for the latest version of tokio
rustdocs_mcp_server tokio

# Example: Run server for async-stripe, enabling a required runtime feature
rustdocs_mcp_server "async-stripe@0.40" -F runtime-tokio-hyper-rustls

# Example: Run server for another crate with multiple features
rustdocs_mcp_server "some-crate@1.2" --features feat1,feat2
```

On the first run for a specific crate version _and feature set_, the server
will:

1. Download the crate documentation using `cargo doc` (with specified features).
2. Parse the HTML documentation.
3. Generate embeddings for the documentation content using the OpenAI API (this
   may take some time and incur costs, though typically only fractions of a US
   penny for most crates; even a large crate like `async-stripe` with over 5000
   documentation pages cost only $0.18 USD for embedding generation during
   testing).
4. Cache the documentation content and embeddings so that the cost isn't
   incurred again.
5. Start the MCP server.

Subsequent runs for the same crate version _and feature set_ will load the data
from the cache, making startup much faster.

### MCP Interaction

The server communicates using the Model Context Protocol over standard
input/output (stdio). It exposes the following:

- **Tool: `query_rust_docs`**
  - **Description:** Query documentation for the specific Rust crate the server
    was started for, using semantic search and LLM summarization.
  - **Input Schema:**
    ```json
    {
      "type": "object",
      "properties": {
        "question": {
          "type": "string",
          "description": "The specific question about the crate's API or usage."
        }
      },
      "required": ["question"]
    }
    ```
  - **Output:** A text response containing the answer generated by the LLM based
    on the relevant documentation context, prefixed with
    `From <crate_name> docs:`.
  - **Example MCP Call:**
    ```json
    {
      "jsonrpc": "2.0",
      "method": "callTool",
      "params": {
        "tool_name": "query_rust_docs",
        "arguments": {
          "question": "How do I make a simple GET request with reqwest?"
        }
      },
      "id": 1
    }
    ```

- **Resource: `crate://<crate_name>`**
  - **Description:** Provides the name of the Rust crate this server instance is
    configured for.
  - **URI:** `crate://<crate_name>` (e.g., `crate://serde`, `crate://reqwest`)
  - **Content:** Plain text containing the crate name.

- **Logging:** The server sends informational logs (startup messages, query
  processing steps) back to the MCP client via `logging/message` notifications.

### Example Client Configuration (Roo Code)

You can configure MCP clients like Roo Code to run multiple instances of this
server, each targeting a different crate. Here's an example snippet for Roo
Code's `mcp_settings.json` file, configuring servers for `reqwest` and
`async-stripe` (note the added features argument for `async-stripe`):

```json
{
  "mcpServers": {
    "rust-docs-reqwest": {
      "command": "/path/to/your/rustdocs_mcp_server",
      "args": [
        "reqwest@0.12"
      ],
      "env": {
        "OPENAI_API_KEY": "YOUR_OPENAI_API_KEY_HERE"
      },
      "disabled": false,
      "alwaysAllow": []
    },
    "rust-docs-async-stripe": {
      "command": "rustdocs_mcp_server",
      "args": [
        "async-stripe@0.40",
        "-F",
        " runtime-tokio-hyper-rustls"
      ],
      "env": {
        "OPENAI_API_KEY": "YOUR_OPENAI_API_KEY_HERE"
      },
      "disabled": false,
      "alwaysAllow": []
    }
  }
}
```

**Note:**

- Replace `/path/to/your/rustdocs_mcp_server` with the actual path to the
  compiled binary on your system if it isn't in your PATH.
- Replace `YOUR_OPENAI_API_KEY_HERE` with your actual OpenAI API key.
- The keys (`rust-docs-reqwest`, `rust-docs-async-stripe`) are arbitrary names
  you choose to identify the server instances within Roo Code.

### Example Client Configuration (Claude Desktop)

For Claude Desktop users, you can configure the server in the MCP settings.
Here's an example configuring servers for `serde` and `async-stripe`:

```json
{
  "mcpServers": {
    "rust-docs-serde": {
      "command": "/path/to/your/rustdocs_mcp_server",
      "args": [
        "serde@^1.0"
      ]
    },
    "rust-docs-async-stripe-rt": {
      "command": "rustdocs_mcp_server",
      "args": [
        "async-stripe@0.40",
        "-F",
        "runtime-tokio-hyper-rustls"
      ]
    }
  }
}
```

**Note:**

- Ensure `rustdocs_mcp_server` is in your system's PATH or provide the full path
  (e.g., `/path/to/your/rustdocs_mcp_server`).
- The keys (`rust-docs-serde`, `rust-docs-async-stripe-rt`) are arbitrary names
  you choose to identify the server instances.
- Remember to set the `OPENAI_API_KEY` environment variable where Claude Desktop
  can access it (this might be system-wide or via how you launch Claude
  Desktop). Claude Desktop's MCP configuration might not directly support
  setting environment variables per-server like Roo Code.
- The example shows how to add the `-F` argument for crates like `async-stripe`
  that require specific features.

### Caching

- **Location:** Cached documentation and embeddings are stored in the XDG data
  directory, typically under
  `~/.local/share/rustdocs-mcp-server/<crate_name>/<sanitized_version_req>/<features_hash>/embeddings.bin`.
  The `sanitized_version_req` is derived from the version requirement, and
  `features_hash` is a hash representing the specific combination of features
  requested at startup. This ensures different feature sets are cached
  separately.
- **Format:** Data is cached using `bincode` serialization.
- **Regeneration:** If the cache file is missing, corrupted, or cannot be
  decoded, the server will automatically regenerate the documentation and
  embeddings.

## How it Works

1. **Initialization:** Parses the crate specification and optional features from
   the command line using `clap`.
2. **Cache Check:** Looks for a pre-existing cache file for the specific crate,
   version requirement, and feature set.
3. **Documentation Generation (if cache miss):**
   - Creates a temporary Rust project depending only on the target crate,
     enabling the specified features in its `Cargo.toml`.
   - Runs `cargo doc` using the `cargo` library API to generate HTML
     documentation in the temporary directory.
   - Dynamically locates the correct output directory within `target/doc` by
     searching for the subdirectory containing `index.html`.
4. **Content Extraction (if cache miss):**
   - Walks the generated HTML files within the located documentation directory.
   - Uses the `scraper` crate to parse each HTML file and extract text content
     from the main content area (`<section id="main-content">`).
5. **Embedding Generation (if cache miss):**
   - Uses the `async-openai` crate and `tiktoken-rs` to generate embeddings for
     each extracted document chunk using the `text-embedding-3-small` model.
   - Calculates the estimated cost based on the number of tokens processed.
6. **Caching (if cache miss):** Saves the extracted document content and their
   corresponding embeddings to the cache file (path includes features hash)
   using `bincode`.
7. **Server Startup:** Initializes the `RustDocsServer` with the
   loaded/generated documents and embeddings.
8. **MCP Serving:** Starts the MCP server using `rmcp` over stdio.
9. **Query Handling (`query_rust_docs` tool):**
   - Generates an embedding for the user's question.
   - Calculates the cosine similarity between the question embedding and all
     cached document embeddings.
   - Identifies the document chunk with the highest similarity.
   - Sends the user's question and the content of the best-matching document
     chunk to the `gpt-4o-mini-2024-07-18` model via the OpenAI API.
   - The LLM is prompted to answer the question based _only_ on the provided
     context.
   - Returns the LLM's response to the MCP client.

## License

This project is licensed under the MIT License.

Copyright (c) 2025 Govcraft

## Sponsor

Govcraft is a one-person shop—no corporate backing, no investors, just me building useful tools. If this project helps you, [sponsoring](https://github.com/sponsors/Govcraft) keeps the work going.

[![Sponsor on GitHub](https://img.shields.io/badge/Sponsor-%E2%9D%A4-%23db61a2?logo=GitHub)](https://github.com/sponsors/Govcraft)
