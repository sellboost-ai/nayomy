---
name: "gdpr-dsgvo-expert"
description_en: "GDPR and German DSGVO compliance automation. Scans codebases for privacy risks, generates DPIA documentation, tracks data subject rights requests with Art. 12(3) one-month deadlines. Use when running GDPR compliance assessments, privacy audits, data protection planning, DPIA generation, or data subject rights (DSAR) management (e.g., 'check this service for GDPR risks', 'track an access request de"
description_tr: "GDPR ve Alman DSGVO uyumluluk otomasyonu. Kod tabanlarını gizlilik riskleri açısından tarar, DPIA dokümantasyonu oluşturur, veri konu hakları taleplerini Art. 12(3) bir aylık son tarihlerle takip eder. GDPR uyumluluk değerlendirmeleri, gizlilik denetimleri, veri koruma planlaması, DPIA oluşturma veya veri konu hakları (DSAR) yönetimi sırasında kullanın."
category: "Document"
repo: "alirezarezvani/claude-skills"
stars: 18759
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/gdpr-dsgvo-expert/SKILL.md"
path: ".gemini/skills/gdpr-dsgvo-expert/SKILL.md"
is_collection: false
body_length: 7907
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # GDPR/DSGVO Uzmanı
  
  AB Genel Veri Koruma Yönetmeliği (GDPR) ve Alman Bundesdatenschutzgesetz (BDSG) uyumluluğu için araçlar ve rehberlik.
  
  ---
  
  ## İçindekiler
  
  - [Araçlar](#araçlar)
    - [GDPR Uyumluluk Kontrol Cihazı](#gdpr-uyumluluk-kontrol-cihazı)
    - [DPIA Oluşturucu](#dpia-oluşturucu)
    - [Veri Öznesinin Hakları İzleyicisi](#veri-öznesinin-hakları-izleyicisi)
  - [Referans Rehberleri](#referans-rehberleri)
  - [İş Akışları](#iş-akışları)
  
  ---
  
  ## Araçlar
  
  ### GDPR Uyumluluk Kontrol Cihazı
  
  Kişisel veri desenleri ve riskli kod uygulamaları dahil olmak üzere olası GDPR uyumluluk sorunları için kod tabanlarını tarar.
  
  ```bash
  # Proje dizinini tarama
  python scripts/gdpr_compliance_checker.py /path/to/project
  
  # CI/CD entegrasyonu için JSON çıktı
  python scripts/gdpr_compliance_checker.py . --json --output report.json
  ```
  
  **Algılar:**
  - Kişisel veri desenleri (email, telefon, IP adresleri)
  - Özel kategori veriler (sağlık, biyometrik, din)
  - Mali veriler (kredi kartları, IBAN)
  - Riskli kod desenleri:
    - Kişisel verilerin günlüğe kaydedilmesi
    - Eksik rıza mekanizmaları
    - Sınırsız veri saklama
    - Şifrelenmemiş hassas veriler
    - Devre dışı bırakılan silme işlevselliği
  
  **Çıktı:**
  - Uyumluluk puanı (0-100)
  - Risk kategorisi (kritik, yüksek, orta)
  - GDPR madde referansları ile önceliklendirilmiş öneriler
  
  ---
  
  ### DPIA Oluşturucu
  
  Madde 35 gereksinimlerine uygun Veri Koruma Etki Değerlendirmesi belgesi oluşturur.
  
  ```bash
  # Giriş şablonunu alma
  python scripts/dpia_generator.py --template > input.json
  
  # DPIA raporu oluşturma
  python scripts/dpia_generator.py --input input.json --output dpia_report.md
  ```
  
  **Özellikler:**
  - Otomatik DPIA eşik değerleme
  - İşleme özelliklerine dayalı risk tanımlaması
  - Hukuki dayanak gereksinimleri belgesi
  - Azaltma önerileri
  - Markdown rapor oluşturma
  
  **Değerlendirilen DPIA Tetikleyicileri:**
  - Sistematik izleme (Madde 35(3)(c))
  - Büyük ölçekli özel kategori veriler (Madde 35(3)(b))
  - Otomatik karar alma (Madde 35(3)(a))
  - EDPB tarafından onaylanan yüksek risk kriterleri (WP248 rev.01)
  
  ---
  
  ### Veri Öznesinin Hakları İzleyicisi
  
  GDPR Maddeler 15-22 kapsamında veri öznesinin hakları taleplerini yönetir.
  
  ```bash
  # Yeni talep ekleme
  python scripts/data_subject_rights_tracker.py add \
    --type access --subject "John Doe" --email "john@example.com"
  
  # Tüm talepleri listeleme
  python scripts/data_subject_rights_tracker.py list
  
  # Durumu güncelleme
  python scripts/data_subject_rights_tracker.py status --id DSR-202601-0001 --update verified
  
  # Uyumluluk raporu oluşturma
  python scripts/data_subject_rights_tracker.py report --output compliance.json
  
  # Yanıt şablonu oluşturma
  python scripts/data_subject_rights_tracker.py template --id DSR-202601-0001
  ```
  
  **Desteklenen Haklar:**
  
  | Hak | Madde | Son Tarih |
  |-------|---------|----------|
  | Erişim | Madde 15 | Bir ay (Madde 12(3)) |
  | Düzeltme | Madde 16 | Bir ay (Madde 12(3)) |
  | Silme | Madde 17 | Bir ay (Madde 12(3)) |
  | Kısıtlama | Madde 18 | Bir ay (Madde 12(3)) |
  | Taşınabilirlik | Madde 20 | Bir ay (Madde 12(3)) |
  | İtiraz | Madde 21 | Bir ay (Madde 12(3)) |
  | Otomatik kararlar | Madde 22 | Bir ay (Madde 12(3)) |
  
  **Özellikler:**
  - Son tarih izleme ve gecikme uyarıları
  - Kimlik doğrulama iş akışı
  - Yanıt şablonu oluşturma
  - Uyumluluk raporlaması
  
  ---
  
  ## Referans Rehberleri
  
  ### GDPR Uyumluluk Rehberi
  `references/gdpr_compliance_guide.md`
  
  Aşağıdakileri kapsayan kapsamlı uygulama rehberliği:
  - İşleme için yasal dayanaklar (Madde 6)
  - Özel kategori gereksinimleri (Madde 9)
  - Veri öznesinin hakları uygulaması
  - Hesap verebilirlik gereksinimleri (Madde 30)
  - Uluslararası transferler (Bölüm V)
  - İhlal bildirimi (Madde 33-34)
  
  ### Alman BDSG Gereksinimleri
  `references/german_bdsg_requirements.md`
  
  Alman spesifik gereksinimler dahil:
  - DPO atama eşiği (§ 38 BDSG - 20+ çalışan)
  - İstihdam veri işleme (§ 26 BDSG)
  - Video gözetleme kuralları (§ 4 BDSG)
  - Kredi puanlama gereksinimleri (§ 31 BDSG)
  - Eyalet veri koruma yasaları (Landesdatenschutzgesetze)
  - Çalışma konseyi ortak belirleme hakları
  
  ### DPIA Metodolojisi
  `references/dpia_methodology.md`
  
  Adım adım DPIA süreci:
  - Eşik değerleme kriterleri
  - EDPB tarafından onaylanan yüksek risk göstergeleri (WP248 rev.01)
  - Risk değerlendirme metodolojisi
  - Azaltma önlemi kategorileri
  - DPO ve denetim otoritesi danışması
  - Şablonlar ve kontrol listeleri
  
  ---
  
  ## İş Akışları
  
  ### İş Akışı 1: Yeni İşleme Faaliyeti Değerlendirmesi
  
  ```
  Adım 1: Kod tabanında uyumluluk kontrol cihazını çalıştırma
          → python scripts/gdpr_compliance_checker.py /path/to/code
  
  Adım 2: Bulguları ve uyumluluk puanını gözden geçirme
          → Kritik ve yüksek sorunları ele alma
  
  Adım 3: DPIA gerekli olup olmadığını belirleme
          → references/dpia_methodology.md eşik kriterlerini kontrol etme
  
  Adım 4: DPIA gerekli ise, değerlendirme oluşturma
          → python scripts/dpia_generator.py --template > input.json
          → İşleme ayrıntılarını doldurma
          → python scripts/dpia_generator.py --input input.json --output dpia.md
  
  Adım 5: İşleme faaliyetleri kayıtlarında belgeleme
  ```
  
  ### İş Akışı 2: Veri Öznesinin Talebini İşleme
  
  ```
  Adım 1: Talep izleyiciye kaydetme
          → python scripts/data_subject_rights_tracker.py add --type [type] ...
  
  Adım 2: Kimliği doğrulama (orantılı ölçüler)
          → python scripts/data_subject_rights_tracker.py status --id [ID] --update verified
  
  Adım 3: Sistemlerden veri toplaması
          → python scripts/data_subject_rights_tracker.py status --id [ID] --update in_progress
  
  Adım 4: Yanıt oluşturma
          → python scripts/data_subject_rights_tracker.py template --id [ID]
  
  Adım 5: Yanıtı gönderme ve tamamlama
          → python scripts/data_subject_rights_tracker.py status --id [ID] --update completed
  
  Adım 6: Uyumluluğu izleme
          → python scripts/data_subject_rights_tracker.py report
  ```
  
  ### İş Akışı 3: Alman BDSG Uyumluluk Kontrolü
  
  ```
  Adım 1: DPO'nun gerekli olup olmadığını belirleme
          → 20+ çalışan kişisel veriler otomatik olarak işleme
          → VEYA işleme DPIA gerektirir
          → VEYA iş veri transferi/pazar araştırması içerir
  
  Adım 2: Çalışanlar dahil edilmişse, § 26 BDSG'yi gözden geçirme
          → Çalışan verilerine yönelik yasal dayanağı belgeleme
          → Çalışma konseyi gereksinimlerini kontrol etme
  
  Adım 3: Video gözetleme varsa, § 4 BDSG'ye uyumluluk
          → İşaret yerleştirme
          → Gerekçeyi belgeleme
          → Saklama süresi sınırlandırma
  
  Adım 4: DPO'yu denetim otoritesine kaydetme
          → references/german_bdsg_requirements.md bölümünde otorite listesini görme
  ```
  
  ---
  
  ## Temel GDPR Kavramları
  
  ### Yasal Dayanaklar (Madde 6)
  
  - **Rıza**: Pazarlama, haber bültenleri, analitik (serbestçe verilmiş, özel, bilinçli olmalı)
  - **Sözleşme**: Sipariş yerine getirme, hizmet sunumu
  - **Yasal yükümlülük**: Vergi kayıtları, istihdam yasası
  - **Meşru menfaatler**: Sahtekarlık önleme, güvenlik (denge testi gerekli)
  
  ### Özel Kategori Veriler (Madde 9)
  
  Açık rıza veya Madde 9(2) istisnası gereklidir:
  - Sağlık verisi
  - Biyometrik veriler
  - Irk/etnik köken
  - Politik görüşler
  - Dini inanançlar
  - Sendika üyeliği
  - Genetik veriler
  - Cinsel yönelim
  
  ### Veri Öznesinin Hakları
  
  Tüm haklar alındıktan sonra **bir ay içinde** yerine getirilmelidir (Madde 12(3)). Son tarih takvim ayı üzerinden, 30 günlük olmayan bir şekilde çalışır ve karmaşık veya çok sayıda talep için **iki ek ay** uzatılabilir — veri öznesine ilk ay içinde uzatma hakkında bilgi verilmelidir (nedenler ile):
  - **Erişim**: Veri ve işleme bilgisinin kopyasını sağlama
  - **Düzeltme**: Hatalı verileri düzeltme
  - **Silme**: Verileri silme (yasal yükümlülükler için istisnalar)
  - **Kısıtlama**: Sorunlar çözüldüğü sürece işleme sınırlandırma
  - **Taşınabilirlik**: Verileri makine tarafından okunabilir formatta sağlama
  - **İtiraz**: Meşru menfaatlere dayalı işlemeyi durdurma
  
  ### Alman BDSG Eklentileri
  
  | Konu | BDSG Bölümü | Temel Gereklilik |
  |-------|--------------|-----------------|
  | DPO eşiği | § 38 | 20+ çalışan = zorunlu DPO |
  | İstihdam | § 26 | Detaylı çalışan veri kuralları |
  | Video | § 4 | İşaret ve orantılılık |
  | Puanlama | § 31 | Açıklanabilir algoritmalar |
---

# GDPR/DSGVO Expert

Tools and guidance for EU General Data Protection Regulation (GDPR) and German Bundesdatenschutzgesetz (BDSG) compliance.

---

## Table of Contents

- [Tools](#tools)
  - [GDPR Compliance Checker](#gdpr-compliance-checker)
  - [DPIA Generator](#dpia-generator)
  - [Data Subject Rights Tracker](#data-subject-rights-tracker)
- [Reference Guides](#reference-guides)
- [Workflows](#workflows)

---

## Tools

### GDPR Compliance Checker

Scans codebases for potential GDPR compliance issues including personal data patterns and risky code practices.

```bash
# Scan a project directory
python scripts/gdpr_compliance_checker.py /path/to/project

# JSON output for CI/CD integration
python scripts/gdpr_compliance_checker.py . --json --output report.json
```

**Detects:**
- Personal data patterns (email, phone, IP addresses)
- Special category data (health, biometric, religion)
- Financial data (credit cards, IBAN)
- Risky code patterns:
  - Logging personal data
  - Missing consent mechanisms
  - Indefinite data retention
  - Unencrypted sensitive data
  - Disabled deletion functionality

**Output:**
- Compliance score (0-100)
- Risk categorization (critical, high, medium)
- Prioritized recommendations with GDPR article references

---

### DPIA Generator

Generates Data Protection Impact Assessment documentation following Art. 35 requirements.

```bash
# Get input template
python scripts/dpia_generator.py --template > input.json

# Generate DPIA report
python scripts/dpia_generator.py --input input.json --output dpia_report.md
```

**Features:**
- Automatic DPIA threshold assessment
- Risk identification based on processing characteristics
- Legal basis requirements documentation
- Mitigation recommendations
- Markdown report generation

**DPIA Triggers Assessed:**
- Systematic monitoring (Art. 35(3)(c))
- Large-scale special category data (Art. 35(3)(b))
- Automated decision-making (Art. 35(3)(a))
- EDPB-endorsed high-risk criteria (WP248 rev.01)

---

### Data Subject Rights Tracker

Manages data subject rights requests under GDPR Articles 15-22.

```bash
# Add new request
python scripts/data_subject_rights_tracker.py add \
  --type access --subject "John Doe" --email "john@example.com"

# List all requests
python scripts/data_subject_rights_tracker.py list

# Update status
python scripts/data_subject_rights_tracker.py status --id DSR-202601-0001 --update verified

# Generate compliance report
python scripts/data_subject_rights_tracker.py report --output compliance.json

# Generate response template
python scripts/data_subject_rights_tracker.py template --id DSR-202601-0001
```

**Supported Rights:**

| Right | Article | Deadline |
|-------|---------|----------|
| Access | Art. 15 | One month (Art. 12(3)) |
| Rectification | Art. 16 | One month (Art. 12(3)) |
| Erasure | Art. 17 | One month (Art. 12(3)) |
| Restriction | Art. 18 | One month (Art. 12(3)) |
| Portability | Art. 20 | One month (Art. 12(3)) |
| Objection | Art. 21 | One month (Art. 12(3)) |
| Automated decisions | Art. 22 | One month (Art. 12(3)) |

**Features:**
- Deadline tracking with overdue alerts
- Identity verification workflow
- Response template generation
- Compliance reporting

---

## Reference Guides

### GDPR Compliance Guide
`references/gdpr_compliance_guide.md`

Comprehensive implementation guidance covering:
- Legal bases for processing (Art. 6)
- Special category requirements (Art. 9)
- Data subject rights implementation
- Accountability requirements (Art. 30)
- International transfers (Chapter V)
- Breach notification (Art. 33-34)

### German BDSG Requirements
`references/german_bdsg_requirements.md`

German-specific requirements including:
- DPO appointment threshold (§ 38 BDSG - 20+ employees)
- Employment data processing (§ 26 BDSG)
- Video surveillance rules (§ 4 BDSG)
- Credit scoring requirements (§ 31 BDSG)
- State data protection laws (Landesdatenschutzgesetze)
- Works council co-determination rights

### DPIA Methodology
`references/dpia_methodology.md`

Step-by-step DPIA process:
- Threshold assessment criteria
- EDPB-endorsed high-risk indicators (WP248 rev.01)
- Risk assessment methodology
- Mitigation measure categories
- DPO and supervisory authority consultation
- Templates and checklists

---

## Workflows

### Workflow 1: New Processing Activity Assessment

```
Step 1: Run compliance checker on codebase
        → python scripts/gdpr_compliance_checker.py /path/to/code

Step 2: Review findings and compliance score
        → Address critical and high issues

Step 3: Determine if DPIA required
        → Check references/dpia_methodology.md threshold criteria

Step 4: If DPIA required, generate assessment
        → python scripts/dpia_generator.py --template > input.json
        → Fill in processing details
        → python scripts/dpia_generator.py --input input.json --output dpia.md

Step 5: Document in records of processing activities
```

### Workflow 2: Data Subject Request Handling

```
Step 1: Log request in tracker
        → python scripts/data_subject_rights_tracker.py add --type [type] ...

Step 2: Verify identity (proportionate measures)
        → python scripts/data_subject_rights_tracker.py status --id [ID] --update verified

Step 3: Gather data from systems
        → python scripts/data_subject_rights_tracker.py status --id [ID] --update in_progress

Step 4: Generate response
        → python scripts/data_subject_rights_tracker.py template --id [ID]

Step 5: Send response and complete
        → python scripts/data_subject_rights_tracker.py status --id [ID] --update completed

Step 6: Monitor compliance
        → python scripts/data_subject_rights_tracker.py report
```

### Workflow 3: German BDSG Compliance Check

```
Step 1: Determine if DPO required
        → 20+ employees processing personal data automatically
        → OR processing requires DPIA
        → OR business involves data transfer/market research

Step 2: If employees involved, review § 26 BDSG
        → Document legal basis for employee data
        → Check works council requirements

Step 3: If video surveillance, comply with § 4 BDSG
        → Install signage
        → Document necessity
        → Limit retention

Step 4: Register DPO with supervisory authority
        → See references/german_bdsg_requirements.md for authority list
```

---

## Key GDPR Concepts

### Legal Bases (Art. 6)

- **Consent**: Marketing, newsletters, analytics (must be freely given, specific, informed)
- **Contract**: Order fulfillment, service delivery
- **Legal obligation**: Tax records, employment law
- **Legitimate interests**: Fraud prevention, security (requires balancing test)

### Special Category Data (Art. 9)

Requires explicit consent or Art. 9(2) exception:
- Health data
- Biometric data
- Racial/ethnic origin
- Political opinions
- Religious beliefs
- Trade union membership
- Genetic data
- Sexual orientation

### Data Subject Rights

All rights must be fulfilled within **one month of receipt** (Art. 12(3)). The deadline runs by calendar month, not 30 days, and may be extended by **two further months** for complex or numerous requests — the data subject must be informed of the extension (with reasons) within the first month:
- **Access**: Provide copy of data and processing information
- **Rectification**: Correct inaccurate data
- **Erasure**: Delete data (with exceptions for legal obligations)
- **Restriction**: Limit processing while issues are resolved
- **Portability**: Provide data in machine-readable format
- **Object**: Stop processing based on legitimate interests

### German BDSG Additions

| Topic | BDSG Section | Key Requirement |
|-------|--------------|-----------------|
| DPO threshold | § 38 | 20+ employees = mandatory DPO |
| Employment | § 26 | Detailed employee data rules |
| Video | § 4 | Signage and proportionality |
| Scoring | § 31 | Explainable algorithms |
