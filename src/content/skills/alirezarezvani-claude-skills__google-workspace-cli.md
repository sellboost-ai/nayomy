---
name: "google-workspace-cli"
description_en: "Google Workspace administration via the gws CLI (github.com/googleworkspace/cli). Install, authenticate, and automate Gmail, Drive, Sheets, Calendar, Docs, Chat, and Tasks. Run security audits and use local recipe templates and persona bundles. Use for Google Workspace admin, gws CLI setup, Gmail automation, Drive management, or Calendar scheduling."
description_tr: "gws CLI (github.com/googleworkspace/cli) ile Google Workspace yönetimini otomatikleştirin. Gmail, Drive, Sheets, Calendar, Docs, Chat ve Tasks'ı kurulum, kimlik doğrulama ve otomasyon ile yönetin; güvenlik denetimi çalıştırın ve yerel recipe şablonları ile persona bundle'ları kullanın. Google Workspace admin, gws CLI kurulumu, Gmail otomasyonu, Drive yönetimi ve Calendar planlama için ideal."
category: "Document"
repo: "alirezarezvani/claude-skills"
stars: 18642
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/google-workspace-cli/SKILL.md"
path: ".gemini/skills/google-workspace-cli/SKILL.md"
is_collection: false
body_length: 11632
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Google Workspace CLI
  
  Google Workspace yönetimi için uzman rehberlik ve otomasyon, açık kaynaklı `gws` CLI kullanarak ([github.com/googleworkspace/cli](https://github.com/googleworkspace/cli), Apache-2.0). CLI, komut yüzeyini Google Discovery Service'den dinamik olarak oluşturur, bu nedenle desteklenen tüm Workspace API'lerini artı `+` önekli yardımcı komutları kapsar. Bu skill, yerel Python araçları ekler (doctor, auth guide, recipe catalog, security audit, output analyzer).
  
  > **Betikleme öncesi doğrulayın:** `gws`, Google'ın API discovery belgelerinden çalışma zamanında komutlar oluşturur ve CLI v1.0 öncesidir. Otomasyona koymadan önce bir komutun tam yüzeyini daima `gws --help`, `gws <service> --help` veya `gws schema <service>.<resource>.<method>` ile doğrulayın. Bu skill'deki *(verify)* ile işaretli komutlar, `gws <service> <resource> <method>` deseninin açıklayıcı örnekleridir ve yüklü sürümünüze karşı kontrol edilmelidir.
  
  ---
  
  ## Hızlı Başlangıç
  
  ### Kurulumu Kontrol Edin
  
  ```bash
  # gws'nin kurulu ve kimlik doğrulandığını doğrulayın
  python3 scripts/gws_doctor.py
  ```
  
  ### Email Gönder
  
  ```bash
  gws gmail +send --to "team@company.com" \
    --subject "Weekly Update" --body "Here's this week's summary..."
  ```
  
  ### Drive Dosyalarını Listele
  
  ```bash
  gws drive files list --params '{"pageSize": 20}' | python3 scripts/output_analyzer.py --select "name,mimeType,modifiedTime" --format table
  ```
  
  ---
  
  ## Kurulum
  
  ### npm (önerilen; Node.js 18+ gerekli)
  
  ```bash
  npm install -g @googleworkspace/cli
  gws --version
  ```
  
  ### Homebrew (macOS/Linux)
  
  ```bash
  brew install googleworkspace-cli
  ```
  
  ### Cargo (kaynaktan)
  
  ```bash
  cargo install --git https://github.com/googleworkspace/cli --locked
  gws --version
  ```
  
  ### Önceden Derlenmiş İkili Dosyalar
  
  [github.com/googleworkspace/cli/releases](https://github.com/googleworkspace/cli/releases) adresinden macOS, Linux veya Windows için indirin. Nix kullanıcıları: `nix run github:googleworkspace/cli`.
  
  ### Kurulumu Doğrulayın
  
  ```bash
  python3 scripts/gws_doctor.py
  # Kontrol eder: PATH, version, auth status, service connectivity
  ```
  
  ---
  
  ## Kimlik Doğrulama
  
  ### OAuth Kurulumu (İnteraktif)
  
  ```bash
  # Adım 1: Google Cloud projesi ve OAuth kimlik bilgileri oluşturun
  python3 scripts/auth_setup_guide.py --guide oauth
  
  # Adım 2: İnteraktif auth kurulumunu çalıştırın (mevcutsa gcloud kullanır)
  gws auth setup
  
  # Adım 3: Giriş yapın, yalnızca ihtiyacınız olan scopes'ı isteyerek
  gws auth login -s drive,gmail,sheets
  ```
  
  ### Headless/CI
  
  ```bash
  # Kurulum talimatları oluşturun
  python3 scripts/auth_setup_guide.py --guide service-account
  
  # İnteraktif bir makineden kimlik bilgilerini dışa aktarın, ardından CLI'yi bunlara yönlendirin
  gws auth export --unmasked > credentials.json
  export GOOGLE_WORKSPACE_CLI_CREDENTIALS_FILE=/path/to/credentials.json
  ```
  
  ### Ortam Değişkenleri
  
  ```bash
  # .env şablonu oluşturun
  python3 scripts/auth_setup_guide.py --generate-env
  ```
  
  | Değişken | Amaç |
  |----------|------|
  | `GOOGLE_WORKSPACE_CLI_CLIENT_ID` | OAuth client ID |
  | `GOOGLE_WORKSPACE_CLI_CLIENT_SECRET` | OAuth client secret |
  | `GOOGLE_WORKSPACE_CLI_CREDENTIALS_FILE` | Dışa aktarılan credentials JSON yolu |
  | `GOOGLE_WORKSPACE_CLI_TOKEN` | Önceden alınan OAuth token |
  | `GOOGLE_WORKSPACE_CLI_CONFIG_DIR` | Varsayılan config konumunu geçersiz kıl |
  | `GOOGLE_WORKSPACE_CLI_LOG` | Debug logging'i etkinleştir |
  
  ### Kimlik Doğrulamayı Doğrulayın
  
  ```bash
  python3 scripts/auth_setup_guide.py --validate --json
  # Her service endpoint'i test eder
  ```
  
  ---
  
  ## İş Akışı 1: Gmail Otomasyonu
  
  **Amaç:** Email işlemlerini otomatikleştir — gönder, ara, etiketle ve filtre yönetimi.
  
  ### Gönder, Yanıtla, İlet (yardımcı komutlar)
  
  ```bash
  # Yeni bir email gönder
  gws gmail +send --to "client@example.com" \
    --subject "Proposal" --body "Please find attached..."
  
  # Bir mesaja yanıtla (otomatik threading); tam flagları kontrol etmek için: gws gmail +reply --help
  gws gmail +reply ...
  
  # Bir mesajı ilet; tam flagları kontrol etmek için: gws gmail +forward --help
  gws gmail +forward ...
  
  # Okunmamış inbox özeti
  gws gmail +triage
  ```
  
  ### Ara ve İncele (discovery komutları)
  
  Discovery komutları `gws <service> <resource> <method>` şeklini izler ve request parametrelerini
  JSON aracılığıyla `--params` (query/path parametreleri) ve `--json` (request body) olarak alır.
  Herhangi bir method'un tam şemasını önce inceleyin:
  
  ```bash
  # messages.list ne kabul eder? (verify)
  gws schema gmail.users.messages.list
  
  # Email ara (yukarıdaki şemaya karşı doğrulayın)
  gws gmail users messages list --params '{"userId": "me", "q": "from:client@example.com after:2025/01/01"}' \
    | python3 scripts/output_analyzer.py --count
  
  # Etiketleri listele (verify)
  gws gmail users labels list --params '{"userId": "me"}'
  ```
  
  ### Toplu İşlemler
  
  `--dry-run` ile önce önizlemeyi yapın, ve `--page-all` ile sayfalanmayı yapın (sayfa başına bir JSON satırı):
  
  ```bash
  # 30 günden eski okunmuş emailleri arşivlemek için önizleme yap, ardından çalıştır (method şemasını önce doğrulayın)
  gws gmail users messages list --params '{"userId": "me", "q": "is:read older_than:30d"}' --page-all \
    | python3 scripts/output_analyzer.py --select "id" --format json
  # Ardından ids'leri gmail users messages modify'e aktar (bkz: gws schema gmail.users.messages.modify)
  ```
  
  ---
  
  ## İş Akışı 2: Drive & Sheets
  
  **Amaç:** Dosyaları yönet, spreadsheet'ler oluştur, paylaşımı yapılandır ve verileri dışa aktar.
  
  ### Dosya İşlemleri
  
  ```bash
  # Dosyaları listele
  gws drive files list --params '{"pageSize": 50}' \
    | python3 scripts/output_analyzer.py --select "name,mimeType,size" --format table
  
  # Bir dosya yükle (yardımcı)
  gws drive +upload ./report.pdf --name "Q1 Report"
  
  # Bir Google Sheet oluştur
  gws sheets spreadsheets create --json '{"properties": {"title": "Budget 2026"}}'
  
  # İndir/dışa aktar — method'u önce inceleyin (verify)
  gws schema drive.files.export
  ```
  
  ### Paylaşım (şemaları önce doğrulayın)
  
  ```bash
  # Permissions API yüzeyini inceleyin
  gws schema drive.permissions.create
  
  # Kullanıcı ile paylaş (şemaya karşı doğrulayın)
  gws drive permissions create --params '{"fileId": "<FILE_ID>"}' \
    --json '{"type": "user", "role": "writer", "emailAddress": "colleague@company.com"}'
  
  # Kimin erişimi olduğunu listele (verify)
  gws drive permissions list --params '{"fileId": "<FILE_ID>"}'
  ```
  
  ### Sheets Verileri
  
  ```bash
  # Değerleri oku (yardımcı); tam flagları kontrol etmek için: gws sheets +read --help
  gws sheets +read ...
  
  # Bir satır ekle (yardımcı); tam flagları kontrol etmek için: gws sheets +append --help
  gws sheets +append ...
  
  # Veya discovery method'larını kullanın (verify):
  gws schema sheets.spreadsheets.values.update
  gws sheets spreadsheets values get --params '{"spreadsheetId": "<SHEET_ID>", "range": "Sheet1!A1:D10"}'
  ```
  
  ---
  
  ## İş Akışı 3: Takvim & Toplantılar
  
  **Amaç:** Event'leri programla, boş zamanları bul ve standup raporları oluştur.
  
  ### Event Yönetimi
  
  ```bash
  # Bir event oluştur (yardımcı); tam flagları kontrol etmek için: gws calendar +insert --help
  gws calendar +insert ...
  
  # Yaklaşan event'ler (yardımcı, timezone-aware)
  gws calendar +agenda
  
  # Veya discovery aracılığıyla (verify):
  gws schema calendar.events.insert
  gws calendar events list --params '{"calendarId": "primary", "maxResults": 10}'
  ```
  
  ### Boş Zamanı Bul
  
  ```bash
  # Free/busy via Calendar API (schema'yı önce doğrulayın)
  gws schema calendar.freebusy.query
  gws calendar freebusy query --json '{"timeMin": "...", "timeMax": "...", "items": [{"id": "alice@co.com"}]}'
  ```
  
  ### Standup Raporu (workflow yardımcıları)
  
  ```bash
  # Bugünün toplantıları + görevleri
  gws workflow +standup-report \
    | python3 scripts/output_analyzer.py --format table
  
  # Sonraki toplantı hazırlığı; tam flagları kontrol etmek için: gws workflow +meeting-prep --help
  gws workflow +meeting-prep
  ```
  
  ---
  
  ## İş Akışı 4: Güvenlik Denetimi
  
  **Amaç:** Google Workspace güvenlik yapılandırmasını denetle ve iyileştirme komutları oluştur.
  
  ### Tam Denetim Çalıştır
  
  ```bash
  # Tüm servisler arasında tam denetim
  python3 scripts/workspace_audit.py --json
  
  # Belirli servisleri denetle
  python3 scripts/workspace_audit.py --services gmail,drive,calendar
  
  # Demo modu (gws gerekli değil)
  python3 scripts/workspace_audit.py --demo
  ```
  
  ### Denetim Kontrolleri
  
  | Alan | Kontrol | Risk |
  |------|---------|------|
  | Drive | Harici paylaşım etkinleştirildi | Veri sızıntısı |
  | Gmail | Otomatik yönlendirme kuralları | Veri sızıntısı |
  | Gmail | DMARC/SPF/DKIM kayıtları | Email spoofing |
  | Calendar | Varsayılan paylaşım görünürlüğü | Bilgi sızıntısı |
  | OAuth | Üçüncü taraf uygulama izinleri | Yetkisiz erişim |
  | Admin | Süper admin sayısı | Ayrıcalık yükseltme |
  | Admin | 2-Adımlı doğrulama zorunlu | Hesap ele geçirme |
  
  ### İnceleyin ve İyileştirin
  
  ```bash
  # Bulguları gözden geçirin
  python3 scripts/workspace_audit.py --json | python3 scripts/output_analyzer.py \
    --filter "status=FAIL" --select "area,check,remediation"
  
  # İyileştirmeyi çalıştırın (örnek: önce mevcut Drive ayarlarını kontrol edin; verify)
  gws drive about get --params '{"fields": "*"}'
  # Denetim çıkışından iyileştirme komutlarını takip edin (her birini gws --help'e karşı doğrulayın)
  ```
  
  ---
  
  ## Python Araçları
  
  | Script | Amaç | Kullanım |
  |--------|------|---------|
  | `gws_doctor.py` | Uçuş öncesi tanılamalar | `python3 scripts/gws_doctor.py [--json] [--services gmail,drive]` |
  | `auth_setup_guide.py` | Rehberli auth kurulumu | `python3 scripts/auth_setup_guide.py --guide oauth` |
  | `gws_recipe_runner.py` | Recipe kataloğu & koşucu | `python3 scripts/gws_recipe_runner.py --list [--persona pm]` |
  | `workspace_audit.py` | Güvenlik/config denetimi | `python3 scripts/workspace_audit.py [--json] [--demo]` |
  | `output_analyzer.py` | JSON/NDJSON analizi | `gws ... --json \| python3 scripts/output_analyzer.py --count` |
  
  Tüm scriptler stdlib-only'dir, `--json` çıkışını destekler ve gömülü örnek veriler ile demo modunu içerir.
  
  ---
  
  ## En İyi Uygulamalar
  
  ### Güvenlik
  
  1. Minimal scopes ile OAuth kullanın — her iş akışının ihtiyacı olan şeyleri isteyebilirsiniz
  2. Token'ları sistem keyring'inde saklayın, hiçbir zaman düz metin dosyalarında saklamamalı
  3. Service account anahtarlarını her 90 günde döndürün
  4. Üçüncü taraf OAuth uygulama izinlerini üç ayda bir denetleyin
  5. Toplu yıkıcı işlemlerden önce `--dry-run` kullanın
  
  ### Otomasyon
  
  1. Tüm `gws` çıkışı yapılandırılmış JSON'dır — filtreleme ve toplama için `output_analyzer.py` aracılığıyla yönlendirin
  2. Ham komutları zincirlemek yerine çok adımlı işlemler için `gws workflow +*` yardımcılarını kullanın
  3. Yerel recipe kataloğunu (`gws_recipe_runner.py`) komut şablonları olarak kullanın, ardından her birini `gws --help`'e karşı doğrulayın
  4. `--page-all` sayfa başına bir JSON satırı (NDJSON) yayınlar, geniş sonuç setlerini akışla yapmak için
  5. Herhangi bir isteği çalıştırmadan önce önizlemek için `--dry-run` kullanın
  
  ### Performans
  
  1. API'nin `--params` içindeki `fields` parametresi aracılığıyla yalnızca gerekli alanları isteyin (payload boyutunu azaltır)
  2. Sonuçları sınırlamak için `--params` içinde `pageSize` kullanın
  3. `--page-all` yalnızca tam veri setlerine ihtiyacınız olduğunda kullanın; `--page-limit` / `--page-delay` ile ayarlayın
  4. Ham API çağrılarını zincirlemek yerine `+` yardımcılarını tercih edin (tek optimize edilmiş çağrılar)
  5. Sık erişilen verileri önbelleğe alın (örn. etiket ID'leri, klasör ID'leri) değişkenlerde
  
  ---
  
  ## Sınırlamalar
  
  | Kısıtlama | Etki |
  |-----------|------|
  | OAuth token'ları 1 saat sonra sona erer | Uzun çalışan scriptler için yeniden auth gerekli |
  | API rate limitler (per-user, per-service) | Toplu işlemler 429 hata ile karşılaşabilir |
  | Service başına scope gereksinimleri değişir | Auth sırasında doğru scope'ları istemelisiniz |
  | Pre-v1.0 CLI durumu | Sürümler arasında breaking changes mümkündür |
  | Google Cloud projesi gerekli | Ücretsizdir, ancak Cloud Console'da kurulum gerekir |
  | Admin API yönetici ayrıcalıkları gerektirir | Bazı denetim kontrolleri Workspace Admin rolü gerektirir |
  
  ### Service Başına Gerekli Scopes
  
  ```bash
  # Belirli servisler için scope'ları listele
  python3 scripts/auth_setup_guide.py --scopes gmail,drive,calendar,sheets
  ```
  
  | Service | Anahtar Scopes |
  |---------|----------------|
  | Gmail | `gmail.modify`, `gmail.send`, `gmail.labels` |
  | Drive | `drive.file`, `drive.metadata.readonly` |
  | Sheets | `spreadsheets` |
  | Calendar | `calendar`, `calendar.events` |
  | Admin | `admin.directory.user.readonly`, `admin.directory.group` |
  | Tasks | `tasks` |
---

# Google Workspace CLI

Expert guidance and automation for Google Workspace administration using the open-source `gws` CLI ([github.com/googleworkspace/cli](https://github.com/googleworkspace/cli), Apache-2.0). The CLI builds its command surface dynamically from Google's Discovery Service, so it covers every supported Workspace API plus `+`-prefixed helper commands. This skill adds local Python tools (doctor, auth guide, recipe catalog, security audit, output analyzer).

> **Verify before scripting:** `gws` generates commands at runtime from Google's API discovery documents, and the CLI is pre-v1.0. Always confirm a command's exact surface with `gws --help`, `gws <service> --help`, or `gws schema <service>.<resource>.<method>` before putting it in automation. Commands in this skill marked *(verify)* are illustrative of the `gws <service> <resource> <method>` pattern and must be checked against your installed version.

---

## Quick Start

### Check Installation

```bash
# Verify gws is installed and authenticated
python3 scripts/gws_doctor.py
```

### Send an Email

```bash
gws gmail +send --to "team@company.com" \
  --subject "Weekly Update" --body "Here's this week's summary..."
```

### List Drive Files

```bash
gws drive files list --params '{"pageSize": 20}' | python3 scripts/output_analyzer.py --select "name,mimeType,modifiedTime" --format table
```

---

## Installation

### npm (recommended; requires Node.js 18+)

```bash
npm install -g @googleworkspace/cli
gws --version
```

### Homebrew (macOS/Linux)

```bash
brew install googleworkspace-cli
```

### Cargo (from source)

```bash
cargo install --git https://github.com/googleworkspace/cli --locked
gws --version
```

### Pre-built Binaries

Download from [github.com/googleworkspace/cli/releases](https://github.com/googleworkspace/cli/releases) for macOS, Linux, or Windows. Nix users: `nix run github:googleworkspace/cli`.

### Verify Installation

```bash
python3 scripts/gws_doctor.py
# Checks: PATH, version, auth status, service connectivity
```

---

## Authentication

### OAuth Setup (Interactive)

```bash
# Step 1: Create Google Cloud project and OAuth credentials
python3 scripts/auth_setup_guide.py --guide oauth

# Step 2: Run interactive auth setup (uses gcloud if available)
gws auth setup

# Step 3: Log in, requesting only the scopes you need
gws auth login -s drive,gmail,sheets
```

### Headless/CI

```bash
# Generate setup instructions
python3 scripts/auth_setup_guide.py --guide service-account

# Export credentials from an interactive machine, then point the CLI at them
gws auth export --unmasked > credentials.json
export GOOGLE_WORKSPACE_CLI_CREDENTIALS_FILE=/path/to/credentials.json
```

### Environment Variables

```bash
# Generate .env template
python3 scripts/auth_setup_guide.py --generate-env
```

| Variable | Purpose |
|----------|---------|
| `GOOGLE_WORKSPACE_CLI_CLIENT_ID` | OAuth client ID |
| `GOOGLE_WORKSPACE_CLI_CLIENT_SECRET` | OAuth client secret |
| `GOOGLE_WORKSPACE_CLI_CREDENTIALS_FILE` | Path to exported credentials JSON |
| `GOOGLE_WORKSPACE_CLI_TOKEN` | Pre-obtained OAuth token |
| `GOOGLE_WORKSPACE_CLI_CONFIG_DIR` | Override default config location |
| `GOOGLE_WORKSPACE_CLI_LOG` | Enable debug logging |

### Validate Authentication

```bash
python3 scripts/auth_setup_guide.py --validate --json
# Tests each service endpoint
```

---

## Workflow 1: Gmail Automation

**Goal:** Automate email operations — send, search, label, and filter management.

### Send, Reply, Forward (helper commands)

```bash
# Send a new email
gws gmail +send --to "client@example.com" \
  --subject "Proposal" --body "Please find attached..."

# Reply to a message (auto-threading); check exact flags with: gws gmail +reply --help
gws gmail +reply ...

# Forward a message; check exact flags with: gws gmail +forward --help
gws gmail +forward ...

# Unread inbox summary
gws gmail +triage
```

### Search and Inspect (discovery commands)

Discovery commands follow `gws <service> <resource> <method>` and take request
parameters as JSON via `--params` (query/path params) and `--json` (request body).
Inspect any method's exact schema first:

```bash
# What does messages.list accept? (verify)
gws schema gmail.users.messages.list

# Search emails (verify against the schema above)
gws gmail users messages list --params '{"userId": "me", "q": "from:client@example.com after:2025/01/01"}' \
  | python3 scripts/output_analyzer.py --count

# List labels (verify)
gws gmail users labels list --params '{"userId": "me"}'
```

### Bulk Operations

Use `--dry-run` first, and `--page-all` to paginate (one JSON line per page):

```bash
# Preview, then archive read emails older than 30 days (verify method schema first)
gws gmail users messages list --params '{"userId": "me", "q": "is:read older_than:30d"}' --page-all \
  | python3 scripts/output_analyzer.py --select "id" --format json
# Then feed ids to gmail users messages modify (see: gws schema gmail.users.messages.modify)
```

---

## Workflow 2: Drive & Sheets

**Goal:** Manage files, create spreadsheets, configure sharing, and export data.

### File Operations

```bash
# List files
gws drive files list --params '{"pageSize": 50}' \
  | python3 scripts/output_analyzer.py --select "name,mimeType,size" --format table

# Upload a file (helper)
gws drive +upload ./report.pdf --name "Q1 Report"

# Create a Google Sheet
gws sheets spreadsheets create --json '{"properties": {"title": "Budget 2026"}}'

# Download/export — inspect the method first (verify)
gws schema drive.files.export
```

### Sharing (verify schemas first)

```bash
# Inspect the permissions API surface
gws schema drive.permissions.create

# Share with user (verify against schema)
gws drive permissions create --params '{"fileId": "<FILE_ID>"}' \
  --json '{"type": "user", "role": "writer", "emailAddress": "colleague@company.com"}'

# List who has access (verify)
gws drive permissions list --params '{"fileId": "<FILE_ID>"}'
```

### Sheets Data

```bash
# Read values (helper); check exact flags with: gws sheets +read --help
gws sheets +read ...

# Append a row (helper); check exact flags with: gws sheets +append --help
gws sheets +append ...

# Or use discovery methods (verify):
gws schema sheets.spreadsheets.values.update
gws sheets spreadsheets values get --params '{"spreadsheetId": "<SHEET_ID>", "range": "Sheet1!A1:D10"}'
```

---

## Workflow 3: Calendar & Meetings

**Goal:** Schedule events, find available times, and generate standup reports.

### Event Management

```bash
# Create an event (helper); check exact flags with: gws calendar +insert --help
gws calendar +insert ...

# Upcoming events (helper, timezone-aware)
gws calendar +agenda

# Or via discovery (verify):
gws schema calendar.events.insert
gws calendar events list --params '{"calendarId": "primary", "maxResults": 10}'
```

### Find Available Time

```bash
# Free/busy via the Calendar API (verify schema first)
gws schema calendar.freebusy.query
gws calendar freebusy query --json '{"timeMin": "...", "timeMax": "...", "items": [{"id": "alice@co.com"}]}'
```

### Standup Report (workflow helpers)

```bash
# Today's meetings + tasks
gws workflow +standup-report \
  | python3 scripts/output_analyzer.py --format table

# Next meeting prep; check exact flags with: gws workflow +meeting-prep --help
gws workflow +meeting-prep
```

---

## Workflow 4: Security Audit

**Goal:** Audit Google Workspace security configuration and generate remediation commands.

### Run Full Audit

```bash
# Full audit across all services
python3 scripts/workspace_audit.py --json

# Audit specific services
python3 scripts/workspace_audit.py --services gmail,drive,calendar

# Demo mode (no gws required)
python3 scripts/workspace_audit.py --demo
```

### Audit Checks

| Area | Check | Risk |
|------|-------|------|
| Drive | External sharing enabled | Data exfiltration |
| Gmail | Auto-forwarding rules | Data exfiltration |
| Gmail | DMARC/SPF/DKIM records | Email spoofing |
| Calendar | Default sharing visibility | Information leak |
| OAuth | Third-party app grants | Unauthorized access |
| Admin | Super admin count | Privilege escalation |
| Admin | 2-Step verification enforcement | Account takeover |

### Review and Remediate

```bash
# Review findings
python3 scripts/workspace_audit.py --json | python3 scripts/output_analyzer.py \
  --filter "status=FAIL" --select "area,check,remediation"

# Execute remediation (example: check current Drive settings first; verify)
gws drive about get --params '{"fields": "*"}'
# Follow remediation commands from audit output (verify each against gws --help)
```

---

## Python Tools

| Script | Purpose | Usage |
|--------|---------|-------|
| `gws_doctor.py` | Pre-flight diagnostics | `python3 scripts/gws_doctor.py [--json] [--services gmail,drive]` |
| `auth_setup_guide.py` | Guided auth setup | `python3 scripts/auth_setup_guide.py --guide oauth` |
| `gws_recipe_runner.py` | Recipe catalog & runner | `python3 scripts/gws_recipe_runner.py --list [--persona pm]` |
| `workspace_audit.py` | Security/config audit | `python3 scripts/workspace_audit.py [--json] [--demo]` |
| `output_analyzer.py` | JSON/NDJSON analysis | `gws ... --json \| python3 scripts/output_analyzer.py --count` |

All scripts are stdlib-only, support `--json` output, and include demo mode with embedded sample data.

---

## Best Practices

### Security

1. Use OAuth with minimal scopes — request only what each workflow needs
2. Store tokens in the system keyring, never in plain text files
3. Rotate service account keys every 90 days
4. Audit third-party OAuth app grants quarterly
5. Use `--dry-run` before bulk destructive operations

### Automation

1. All `gws` output is structured JSON — pipe it through `output_analyzer.py` for filtering and aggregation
2. Use `gws workflow +*` helpers for multi-step operations instead of chaining raw commands
3. Use the local recipe catalog (`gws_recipe_runner.py`) as command templates, then verify each against `gws --help`
4. `--page-all` emits one JSON line per page (NDJSON) for streaming large result sets
5. Use `--dry-run` to preview any request before executing it

### Performance

1. Request only needed fields via the API's `fields` parameter in `--params` (reduces payload size)
2. Use `pageSize` in `--params` to cap results when browsing
3. Use `--page-all` only when you need complete datasets; tune with `--page-limit` / `--page-delay`
4. Prefer `+` helpers (single optimized calls) over hand-chained API calls
5. Cache frequently accessed data (e.g., label IDs, folder IDs) in variables

---

## Limitations

| Constraint | Impact |
|------------|--------|
| OAuth tokens expire after 1 hour | Re-auth needed for long-running scripts |
| API rate limits (per-user, per-service) | Bulk operations may hit 429 errors |
| Scope requirements vary by service | Must request correct scopes during auth |
| Pre-v1.0 CLI status | Breaking changes possible between releases |
| Google Cloud project required | Free, but requires setup in Cloud Console |
| Admin API needs admin privileges | Some audit checks require Workspace Admin role |

### Required Scopes by Service

```bash
# List scopes for specific services
python3 scripts/auth_setup_guide.py --scopes gmail,drive,calendar,sheets
```

| Service | Key Scopes |
|---------|-----------|
| Gmail | `gmail.modify`, `gmail.send`, `gmail.labels` |
| Drive | `drive.file`, `drive.metadata.readonly` |
| Sheets | `spreadsheets` |
| Calendar | `calendar`, `calendar.events` |
| Admin | `admin.directory.user.readonly`, `admin.directory.group` |
| Tasks | `tasks` |
