---
name: "ergut/mcp-bigquery-server"
description: "Server implementation for Google BigQuery integration that enables direct BigQuery database access and querying capabilities"
category: "Databases"
repo: "ergut/mcp-bigquery-server"
stars: 140
url: "https://github.com/ergut/mcp-bigquery-server"
body_length: 12015
license: "MIT"
language: "TypeScript"
body_tr: |-
  # BigQuery MCP Server
  <div align="center">
    
  </div>

  ## Bu Nedir? 🤔

  Bu, LLM'lerinizin (Claude gibi) doğrudan BigQuery verilerinizle konuşmasını sağlayan bir sunucudur — **salt okunur, deponuzu değiştirme yeteneği yoktur**. Bunu, AI asistanınız ve veritabanınız arasında oturan ve güvenli ve verimli iletişim sağlayan dostça bir çevirmen olarak düşünün.

  ### Hızlı Örnek
  ```text
  Siz: "Geçen ay en iyi 10 müşterimiz kimdi?"
  Claude: *BigQuery veritabanını sorgular ve cevabı düz İngilizce olarak verir*
  ```

  Artık manuel SQL sorguları yazmanıza gerek yok - sadece verilerinizle doğal olarak sohbet edin!

  ## Nasıl Çalışır? 🛠️

  Bu sunucu, Model Context Protocol (MCP) kullanır; bu, yapay zeka-veritabanı iletişimi için evrensel bir çevirmen gibidir. MCP, Claude Desktop, Claude Code ve artan sayıda diğer yapay zeka istemcileri tarafından desteklenir.

  Yapmanız gereken şeyler:
  1. Kimlik doğrulamayı ayarlayın (aşağıya bakın)
  2. Proje ayrıntılarınızı MCP istemcinizin config dosyasına ekleyin
  3. BigQuery verilerinizle doğal olarak sohbet etmeye başlayın!

  ### Ne Yapabilir? 📊

  - **Tasarım gereği salt okunur** — yalnızca `SELECT` ifadeleri izin verilir. Her sorgu, yürütülmeden önce BigQuery'nin kendi dry-run planlayıcısı tarafından doğrulanır, bu nedenle `INSERT`, `UPDATE`, `DELETE`, `DROP`, `TRUNCATE`, `EXPORT DATA` ve `MERGE` hepsi reddedilir. AI ajanı deponuzu değiştiremez, nokta.
  - Basit İngilizce sorularla SQL sorguları çalıştırın
  - Veri setlerinizde tabloları ve materyalize edilmiş görünümleri erişin
  - Veri seti şemalarını kaynak türlerinin açık etiketlemesiyle (tablolar vs görünümler) keşfedin
  - Verileri yapılandırılabilir güvenli limitler içinde analiz edin (`config.json` veya `--maximum-bytes-billed` aracılığıyla ayarlayın)
  - **Hassas verileri koruyun** — PII, PHI, finansal veri ve sırları okumasını önlemek için alan seviyesi erişim kısıtlamaları tanımlayın. Ajan, bireysel kayıtları açığa çıkarmadan toplam işlevler veya `EXCEPT` cümlelerini kullanarak sorguları yeniden formüle etme hakkında açık rehberlik alır, bu nedenle faydalı kalır.
  - **Otomatik hassas alan keşfi** — tüm BigQuery veri ambarınızı hassas desenleriyle (adlar, e-postalar, SGK numaraları, tıbbi kayıtlar, API anahtarları, vb.) eşleşen sütunlar için otomatik olarak tarayın ve bunları kısıtlanmış listeye ekleyin. Yeni tablolar ve sütunlar her taramada otomatik olarak korunur — manuel bakım gerekmez.
  - **Tam yapılandırılabilir** — her şey `config.json` tarafından kontrol edilir. Kuruluşunuzun adlandırma kurallarına uyacak kendi algılama desenlerinizi ekleyin (ör. `%guardian_name%`, `%beneficiary%`), tarama sıklığını ayarlayın, faturalandırma limitlerini belirleyin ve tablo başına alan kısıtlamalarını tanımlayın. Tarayıcı, bir sonraki çalıştırmada özel desenlerinizi alır ve tüm veri setleri arasında eşleşen tüm sütunları otomatik olarak korur.

  ## Hangi Kurulum Sizin İçin Doğru?

  | | Basit Mod | Korumalı Mod |
  |---|---|---|
  | **Ne zaman kullanılır** | Kişisel projeler, hassas olmayan veriler | PHI, PII, finansal veriler, HIPAA düzenlenmiş ortamlar |
  | **Kurulum** | `npx` — yerel kurulum gerekmez | `npx` veya `config.json` ile yerel derleme |
  | **Alan kısıtlamaları** | Hiçbiri | Hassas sütunları engellemek için `preventedFields` tanımlayın |
  | **Otomatik tarayıcı** | Kullanılamaz | Tüm veri setleri arasında hassas sütunları otomatik olarak keşfeder |
  | **Kurulum** | Aşağıdaki [Hızlı Kurulum](#hızlı-kurulum) | Aşağıdaki [Korumalı Mod Kurulumu](#korumalı-mod-kurulumu) |

  **Hassas veriler için yerel dağıtımın neden önemli olduğu:** LLM çıkarımı bulutta gerçekleşir. Bir AI ajanı BigQuery'yi sorguladığında, sonuçlar işlenmek üzere LLM sağlayıcısının sunucularına (Anthropic, OpenAI, vb.) gönderilir — ağınızı terk ederler. BigQuery IAM, verilerinize *kimin ulaşabileceğini* kontrol eder; alan kısıtlamaları, AI ajanının *LLM yanıtlarına ne yüzeyleştireceğini* kontrol eder. Bunlar farklı koruma sınırlarıdır. `preventedFields` yapılandırması, PHI ve PII'nin ajanın bağımsız olarak kaç sorgu çalıştırdığından bağımsız olarak LLM konuşma bağlamına asla girmemesini sağlar.

  ## Hızlı Başlangıç 🚀

  ### Ön Koşullar
  - Node.js 14 veya daha yüksek
  - BigQuery etkinleştirilmiş Google Cloud projesi
  - Google Cloud CLI yüklü veya bir hizmet hesabı anahtar dosyası
  - Herhangi bir MCP uyumlu istemci (Claude Desktop, Claude Code, vb.)

  ### Hızlı Kurulum

  1. **Google Cloud ile kimlik doğrulaması yapın:**
     ```bash
     gcloud auth application-default login
     ```

  2. **MCP istemcinizin config dosyasına ekleyin** (ör. Claude Desktop için `claude_desktop_config.json`, Claude Code için `.mcp.json`):
     ```json
     {
       "mcpServers": {
         "bigquery": {
           "command": "npx",
           "args": [
             "-y",
             "@ergut/mcp-bigquery-server",
             "--project-id",
             "your-project-id"
           ]
         }
       }
     }
     ```

  3. **Sohbet etmeye başlayın!** MCP istemcinizi açın ve verileriniz hakkında sorular sorun.

  ### Korumalı Mod Kurulumu

  Alan seviyesi kısıtlamalarıyla hassas veriler için:

  1. **Google Cloud ile kimlik doğrulaması yapın** (bir yöntemi seçin):
     - Google Cloud CLI kullanarak (geliştirme için harika):
       ```bash
       gcloud auth application-default login
       ```
     - Hizmet hesabı kullanarak (üretim için önerilen):
       ```bash
       # Hizmet hesabı anahtar dosyanızı kaydedin ve --key-file parametresini kullanın
       # Hizmet hesabı anahtar dosyanızı güvenli tutmayı ve asla sürüm kontrolüne vermeyi unutmayın
       ```

  2. **MCP istemcinizin config dosyasına ekleyin** (ör. Claude Desktop için `claude_desktop_config.json`, Claude Code için `.mcp.json`):

     - Application Default Credentials ile:
       ```json
       {
         "mcpServers": {
           "bigquery": {
             "command": "npx",
             "args": [
               "-y",
               "@ergut/mcp-bigquery-server",
               "--project-id",
               "your-project-id",
               "--location",
               "us-central1",
               "--config-file",
               "/path/to/config.json"
             ]
           }
         }
       }
       ```

     - Hizmet hesabı anahtar dosyası ile:
       ```json
       {
         "mcpServers": {
           "bigquery": {
             "command": "npx",
             "args": [
               "-y",
               "@ergut/mcp-bigquery-server",
               "--project-id",
               "your-project-id",
               "--location",
               "us-central1",
               "--key-file",
               "/path/to/service-account-key.json",
               "--config-file",
               "/path/to/config.json"
             ]
           }
         }
       }
       ```


  3. **Sohbet etmeye başlayın!**
     MCP istemcinizi açın ve verileriniz hakkında sorular sormaya başlayın.

  ## Yapılandırma

  Sunucu, gelişmiş yapılandırma için opsiyonel bir `config.json` dosyasını destekler. Config dosyası olmadan (yani `--config-file` bayrağı olmadan), sunucu güvenli varsayılanlarla Basit Mod'da çalışır (1GB sorgu limiti, alan kısıtlaması yok). Korumayı etkinleştirmek için, sunucuyu başlatırken `--config-file /path/to/config.json` iletin.

  ### config.json Yapısı

  ```json
  {
    "maximumBytesBilled": "1000000000",
    "preventedFields": {
      "healthcare.patients": ["first_name", "last_name", "ssn", "date_of_birth", "email"],
      "billing.transactions": ["credit_card_number", "bank_account"]
    },
    "sensitiveFieldPatterns": [
      "%first_name%", "%last_name%", "%email%",
      "%ssn%", "%date_of_birth%", "%password%"
    ],
    "sensitiveFieldScanFrequencyDays": 1
  }
  ```

  | Ayar | Varsayılan | Açıklama |
  |---------|---------|-------------|
  | `maximumBytesBilled` | `"1000000000"` (1GB) | Sorgu başına maksimum faturalandırılan bayt |
  | `preventedFields` | `{}` | Kısıtlı alanların tablo-sütun eşlemesi |
  | `sensitiveFieldPatterns` | Yerleşik set | Otomatik keşif için SQL LIKE desenleri |
  | `sensitiveFieldScanFrequencyDays` | `1` | Otomatik taramalar arasında günler (devre dışı bırakmak için `0`) |

  ### Komut Satırı Argümanları

  - `--project-id`: (Gerekli) Google Cloud proje kimliğiniz
  - `--location`: (İsteğe bağlı) BigQuery konumu, varsayılan 'US'
  - `--key-file`: (İsteğe bağlı) Hizmet hesabı anahtar JSON dosyasının yolu
  - `--config-file`: (İsteğe bağlı) Yapılandırma dosyasının yolu. Atlanırsa, sunucu koruma olmadan Basit Mod'da çalışır — `./config.json` örtülü varsayılanı yoktur
  - `--maximum-bytes-billed`: (İsteğe bağlı) Sorgular için maksimum faturalandırılan baytları geçersiz kılın, config.json değerini geçersiz kılar

  Hizmet hesabı kullanma örneği:
  ```bash
  npx @ergut/mcp-bigquery-server --project-id your-project-id --location europe-west1 --key-file /path/to/key.json --config-file /path/to/config.json --maximum-bytes-billed 2000000000
  ```

  ## Hassas Verileri Koruma 🔒

  Veri ambarları genellikle oldukça hassas bilgiler içerir — hasta kayıtları, sosyal güvenlik numaraları, finansal veriler, kişisel iletişim ayrıntıları ve kimlik doğrulama sırları. Bir AI ajanı deponuzu sorgulamak için doğrudan erişime sahip olduğunda, **hassas sütunları okumasını önlemek için insanın müdahalesi yoktur**. Bir `SELECT * FROM patients` binlerce PII/PHI kaydını açığa çıkarabilir ve sonuçlar daha sonra işlenmek üzere LLM sağlayıcısına gönderilir — ağınızı terk ederler.

  Bu sunucu, yöneticilere bir AI ajanının hangi sütunlara erişebileceğinin üzerine ince taneli kontrol verir. `config.json`'da `preventedFields` tanımlarsınız ve sunucu bu sütunları LLM yanıtlarına yüzeyleştiren sorguları engeller. Otomatik bir tarayıcı **tüm** veri setleriniz arasında hassas sütunları keşfeder, bu nedenle kapsam deponuz büyüdükçe güncel kalır.

  > **Dürüst bir uyarı:** Alan kısıtlamaları, AI ajanları için işbirliğine dayalı koruma rayları — düşmanca saldırganlar tarafından karşı bir sabit SQL güvenlik duvarı değil. Tam tehdit modeli için [PROTECTION.md](PROTECTION.md#security-model-cooperative-guardrails-not-a-sql-firewall) bakın.

  Sunucu, `config.json`'da `protectionMode` aracılığıyla ayarlanan üç koruma modunu destekler:

  | Mod | Açıklama |
  |---|---|
  | `off` | Koruma yok — tüm tablolar ve alanlar erişilebilir (config dosyası sağlanmadığında varsayılan) |
  | `allowedTables` | Tablo beyaz listesi — yalnızca listelenen tablolar sorgulanabilir, onların içinde opsiyonel alan kısıtlamalarıyla |
  | `autoProtect` | Veri setlerinizi hassas sütunlar için tarar ve `preventedFields` zorunlu kılar |

  **Tam yapılandırma, örnekler, sorgu deseni referansı, tarayıcı kurulumu ve gerekli IAM izinleri için [PROTECTION.md](PROTECTION.md) bakın.**

  ## Yerel Derleme (İsteğe Bağlı) 🔧

  `npx` yerine yerel derleme çalıştırın — katkıda bulunmak, değişiklikleri test etmek veya sabitlenmiş bir sürüm çalıştırmak için kullanışlı. Hem Basit hem de Korumalı Mod'u destekler.

  ```bash
  # Klonlayın ve yükleyin
  git clone https://github.com/ergut/mcp-bigquery-server
  cd mcp-bigquery-server
  npm install

  # Derleyin
  npm run build
  ```

  Ardından MCP istemciniz config'ini yerel derlemeye işaret edin:

  ```json
  {
    "mcpServers": {
      "bigquery": {
        "command": "node",
        "args": [
          "/path/to/your/clone/mcp-bigquery-server/dist/index.js",
          "--project-id",
          "your-project-id",
          "--location",
          "us-central1"
        ]
      }
    }
  }
  ```

  Korumalı Mod için, `args` dizisine `"--config-file", "/path/to/config.json"` ekleyin (ve opsiyonel olarak hizmet hesabı kimlik doğrulaması için `"--key-file", "/path/to/service-account-key.json"`).

  ## Mevcut Sınırlamalar ⚠️

  - JSON yapılandırma örnekleri standart MCP sunucu formatını izler. Herhangi bir MCP uyumlu istemci (Claude Desktop, Claude Code, vb.) bunu kullanabilir — tam config dosyası konumu için istemcinizin belgelerine bakın
  - İşleme limitleri sorgu başına yapılandırılabilir (`config.json` veya `--maximum-bytes-billed` aracılığıyla ayarlayın)
  - Hem tablolar hem de görünümler desteklenirken, bazı karmaşık görünüm türlerinin sınırlamaları olabilir
  - Bir config.json dosyası isteğe bağlıdır; biri olmadan sunucu güvenli varsayılanları kullanır

  ## Destek & Kaynaklar 💬

  - 🐛 [Sorunları bildirin](https://github.com/ergut/mcp-bigquery-server/issues)
  - 💡 [Özellik istekleri](https://github.com/ergut/mcp-bigquery-server/issues)
  - 📖 [Belgeler](https://github.com/ergut/mcp-bigquery-server)

  ## Lisans 📝

  MIT Lisansı - Detaylar için [LICENSE](LICENSE) dosyasına bakın.

  ## Yazar ✍️

  Salih Ergüt

  ## Sponsorluk

  Bu proje gururla şu tarafından desteklenmektedir:

  <div align="center">
    <a href="https://www.oredata.com">
      
    </a>
  </div>

  ## Sürüm Tarihi 📋

  Güncellemeler ve sürüm tarihi için [CHANGELOG.md](CHANGELOG.md) bakın.
---

# BigQuery MCP Server
<div align="center">
  
</div>

## What is this? 🤔

This is a server that lets your LLMs (like Claude) talk directly to your BigQuery data — **read-only, with no ability to mutate your warehouse**. Think of it as a friendly translator that sits between your AI assistant and your database, making sure they can chat securely and efficiently.

### Quick Example
```text
You: "What were our top 10 customers last month?"
Claude: *queries your BigQuery database and gives you the answer in plain English*
```

No more writing SQL queries by hand - just chat naturally with your data!

## How Does It Work? 🛠️

This server uses the Model Context Protocol (MCP), which is like a universal translator for AI-database communication. MCP is supported by Claude Desktop, Claude Code, and a growing number of other AI clients.

Here's all you need to do:
1. Set up authentication (see below)
2. Add your project details to your MCP client's config file
3. Start chatting with your BigQuery data naturally!

### What Can It Do? 📊

- **Read-only by design** — only `SELECT` statements are allowed. Every query is validated by BigQuery's own dry-run planner before execution, so `INSERT`, `UPDATE`, `DELETE`, `DROP`, `TRUNCATE`, `EXPORT DATA`, and `MERGE` are all rejected. The AI agent cannot mutate your warehouse, period.
- Run SQL queries by just asking questions in plain English
- Access both tables and materialized views in your datasets
- Explore dataset schemas with clear labeling of resource types (tables vs views)
- Analyze data within configurable safe limits (set via `config.json` or `--maximum-bytes-billed`)
- **Protect sensitive data** — define field-level access restrictions to prevent AI agents from reading PII, PHI, financial data, and secrets. The agent receives clear guidance on how to reformulate queries using aggregates or `EXCEPT` clauses, so it remains useful without exposing individual records.
- **Auto-discover sensitive fields** — automatically scan your entire BigQuery data warehouse for columns matching sensitive patterns (names, emails, SSNs, medical records, API keys, etc.) and add them to the restricted list. New tables and columns are protected automatically on each scan — no manual maintenance required.
- **Fully configurable** — everything is driven by `config.json`. Add your own detection patterns to match your organization's naming conventions (e.g., `%guardian_name%`, `%beneficiary%`), adjust scan frequency, set billing limits, and define per-table field restrictions. The scanner picks up your custom patterns on the next run and automatically protects any matching columns across all datasets.

## Which Setup Is Right for You?

| | Simple Mode | Protected Mode |
|---|---|---|
| **Use when** | Personal projects, non-sensitive data | PHI, PII, financial data, HIPAA-regulated environments |
| **Install** | `npx` — no local setup needed | `npx` or local build with a `config.json` |
| **Field restrictions** | None | Define `preventedFields` to block sensitive columns |
| **Auto-scanner** | Not available | Discovers sensitive columns across all datasets automatically |
| **Setup** | [Quick Setup](#quick-setup) below | [Protected Mode Setup](#protected-mode-setup) below |

**Why local deployment matters for sensitive data:** LLM inference happens in the cloud. When an AI agent queries BigQuery, the results are sent to the LLM provider's servers (Anthropic, OpenAI, etc.) for processing — they leave your network. BigQuery IAM controls who can *reach* your data; field restrictions control what the *AI agent surfaces into LLM responses*. These are different protection boundaries. Configuring `preventedFields` ensures PHI and PII never enter the LLM conversation context, regardless of how many queries the agent runs autonomously.

## Quick Start 🚀

### Prerequisites
- Node.js 14 or higher
- Google Cloud project with BigQuery enabled
- Either Google Cloud CLI installed or a service account key file
- Any MCP-compatible client (Claude Desktop, Claude Code, etc.)

### Quick Setup

1. **Authenticate with Google Cloud:**
   ```bash
   gcloud auth application-default login
   ```

2. **Add to your MCP client's config** (e.g., `claude_desktop_config.json` for Claude Desktop, `.mcp.json` for Claude Code):
   ```json
   {
     "mcpServers": {
       "bigquery": {
         "command": "npx",
         "args": [
           "-y",
           "@ergut/mcp-bigquery-server",
           "--project-id",
           "your-project-id"
         ]
       }
     }
   }
   ```

3. **Start chatting!** Open your MCP client and ask questions about your data.

### Protected Mode Setup

For sensitive data with field-level restrictions:

1. **Authenticate with Google Cloud** (choose one method):
   - Using Google Cloud CLI (great for development):
     ```bash
     gcloud auth application-default login
     ```
   - Using a service account (recommended for production):
     ```bash
     # Save your service account key file and use --key-file parameter
     # Remember to keep your service account key file secure and never commit it to version control
     ```

2. **Add to your MCP client's config** (e.g., `claude_desktop_config.json` for Claude Desktop, `.mcp.json` for Claude Code):

   - With Application Default Credentials:
     ```json
     {
       "mcpServers": {
         "bigquery": {
           "command": "npx",
           "args": [
             "-y",
             "@ergut/mcp-bigquery-server",
             "--project-id",
             "your-project-id",
             "--location",
             "us-central1",
             "--config-file",
             "/path/to/config.json"
           ]
         }
       }
     }
     ```

   - With a service account key file:
     ```json
     {
       "mcpServers": {
         "bigquery": {
           "command": "npx",
           "args": [
             "-y",
             "@ergut/mcp-bigquery-server",
             "--project-id",
             "your-project-id",
             "--location",
             "us-central1",
             "--key-file",
             "/path/to/service-account-key.json",
             "--config-file",
             "/path/to/config.json"
           ]
         }
       }
     }
     ```


3. **Start chatting!**
   Open your MCP client and start asking questions about your data.

## Configuration

The server supports an optional `config.json` file for advanced configuration. Without a config file (i.e., no `--config-file` flag), the server runs in Simple Mode with safe defaults (1GB query limit, no field restrictions). To enable protection, pass `--config-file /path/to/config.json` when starting the server.

### config.json Structure

```json
{
  "maximumBytesBilled": "1000000000",
  "preventedFields": {
    "healthcare.patients": ["first_name", "last_name", "ssn", "date_of_birth", "email"],
    "billing.transactions": ["credit_card_number", "bank_account"]
  },
  "sensitiveFieldPatterns": [
    "%first_name%", "%last_name%", "%email%",
    "%ssn%", "%date_of_birth%", "%password%"
  ],
  "sensitiveFieldScanFrequencyDays": 1
}
```

| Setting | Default | Description |
|---------|---------|-------------|
| `maximumBytesBilled` | `"1000000000"` (1GB) | Maximum bytes billed per query |
| `preventedFields` | `{}` | Table-to-columns mapping of restricted fields |
| `sensitiveFieldPatterns` | Built-in set | SQL LIKE patterns for auto-discovery |
| `sensitiveFieldScanFrequencyDays` | `1` | Days between auto-scans (`0` to disable) |

### Command Line Arguments

- `--project-id`: (Required) Your Google Cloud project ID
- `--location`: (Optional) BigQuery location, defaults to 'US'
- `--key-file`: (Optional) Path to service account key JSON file
- `--config-file`: (Optional) Path to a configuration file. If omitted, the server runs in Simple Mode with no protection — there is no implicit default of `./config.json`
- `--maximum-bytes-billed`: (Optional) Override maximum bytes billed for queries, overrides config.json value

Example using service account:
```bash
npx @ergut/mcp-bigquery-server --project-id your-project-id --location europe-west1 --key-file /path/to/key.json --config-file /path/to/config.json --maximum-bytes-billed 2000000000
```

## Protecting Sensitive Data 🔒

Data warehouses often contain highly sensitive information — patient records, social security numbers, financial data, personal contact details, and authentication secrets. When an AI agent has direct access to query your warehouse, **there is no human in the loop to prevent it from reading sensitive columns**. A `SELECT * FROM patients` could expose thousands of PII/PHI records, and the results are then sent to the LLM provider for processing — they leave your network.

This server gives administrators fine-grained control over which columns an AI agent can access. You define `preventedFields` in `config.json` and the server blocks queries that would surface those columns into LLM responses. An automated scanner discovers sensitive columns across **all** your datasets, so coverage stays current as your warehouse grows.

> **Honest caveat:** Field restrictions are cooperative guardrails for AI agents — not a hard SQL firewall against adversarial attackers. See [PROTECTION.md](PROTECTION.md#security-model-cooperative-guardrails-not-a-sql-firewall) for the full threat model.

The server supports three protection modes, set via `protectionMode` in `config.json`:

| Mode | Description |
|---|---|
| `off` | No protection — all tables and fields accessible (default when no config file is provided) |
| `allowedTables` | Table allowlist — only listed tables can be queried, with optional field restrictions within them |
| `autoProtect` | Auto-scans your datasets for sensitive columns and enforces `preventedFields` |

**See [PROTECTION.md](PROTECTION.md)** for full configuration, examples, the query pattern reference, scanner setup, and required IAM permissions.

## Local Build (Optional) 🔧

Run a local build instead of `npx` — useful for contributing, testing changes, or running a pinned version. Supports both Simple and Protected Mode.

```bash
# Clone and install
git clone https://github.com/ergut/mcp-bigquery-server
cd mcp-bigquery-server
npm install

# Build
npm run build
```

Then point your MCP client config to the local build:

```json
{
  "mcpServers": {
    "bigquery": {
      "command": "node",
      "args": [
        "/path/to/your/clone/mcp-bigquery-server/dist/index.js",
        "--project-id",
        "your-project-id",
        "--location",
        "us-central1"
      ]
    }
  }
}
```

For Protected Mode, add `"--config-file", "/path/to/config.json"` to the `args` array (and optionally `"--key-file", "/path/to/service-account-key.json"` for service account auth).

## Current Limitations ⚠️

- The JSON configuration examples follow the standard MCP server format. Any MCP-compatible client (Claude Desktop, Claude Code, etc.) can use it — refer to your client's documentation for the exact config file location
- Processing limits are configurable per query (set in `config.json` or via `--maximum-bytes-billed`)
- While both tables and views are supported, some complex view types might have limitations
- A config.json file is optional; without one the server uses safe defaults

## Support & Resources 💬

- 🐛 [Report issues](https://github.com/ergut/mcp-bigquery-server/issues)
- 💡 [Feature requests](https://github.com/ergut/mcp-bigquery-server/issues)
- 📖 [Documentation](https://github.com/ergut/mcp-bigquery-server)

## License 📝

MIT License - See [LICENSE](LICENSE) file for details.

## Author ✍️

Salih Ergüt

## Sponsorship

This project is proudly sponsored by:

<div align="center">
  <a href="https://www.oredata.com">
    
  </a>
</div>

## Version History 📋

See [CHANGELOG.md](CHANGELOG.md) for updates and version history.
