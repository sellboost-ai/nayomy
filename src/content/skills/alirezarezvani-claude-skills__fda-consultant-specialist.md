---
name: "fda-consultant-specialist"
description_en: "FDA regulatory consultant for medical device companies. Provides 510(k)/PMA/De Novo pathway guidance, QMSR (21 CFR 820, which incorporates ISO 13485:2016 by reference since 2026-02-02; formerly QSR) compliance, HIPAA assessments, and device cybersecurity. Use when user mentions FDA submission, 510(k), PMA, De Novo, QMSR, QSR, ISO 13485 for FDA, premarket, predicate device, substantial equivalence,"
description_tr: "FDA düzenlemelerine uyum sağlayan tıbbi cihaz şirketleri için danışman. 510(k)/PMA/De Novo yol haritası rehberliği, QMSR (21 CFR 820, 2026-02-02 tarihinden itibaren ISO 13485:2016'yi referans alır; eski adıyla QSR) uygunluğu, HIPAA değerlendirmeleri ve cihaz siber güvenliği konularında destek sağlar. Kullanıcı FDA başvurusu, 510(k), PMA, De Novo, QMSR, QSR, ISO 13485, ön-pazar, predicate cihaz veya önemli denklik hakkında söz ettiğinde devreye girer."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18402
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/fda-consultant-specialist/SKILL.md"
path: ".gemini/skills/fda-consultant-specialist/SKILL.md"
is_collection: false
body_length: 11278
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # FDA Danışmanı Uzmanı
  
  Tıbbi cihaz üreticileri için FDA yasal danışmanlığı; gönderim yolları, Kalite Yönetim Sistemi Yönetmeliği (QMSR, 21 CFR Bölüm 820 — eski adıyla QSR), HIPAA uyumluluğu ve cihaz siber güvenliği gereksinimlerini kapsar.
  
  ## İçindekiler
  
  - [FDA Yolu Seçimi](#fda-yolu-seçimi)
  - [510(k) Gönderim Süreci](#510k-gönderim-süreci)
  - [QMSR Uyumluluğu (eski adıyla QSR)](#qmsr-uyumluluğu-eski-adıyla-qsr)
  - [Tıbbi Cihazlar için HIPAA](#tıbbi-cihazlar-için-hipaa)
  - [Cihaz Siber Güvenliği](#cihaz-siber-güvenliği)
  - [Kaynaklar](#kaynaklar)
  
  ---
  
  ## FDA Yolu Seçimi
  
  Cihaz sınıflandırması ve yordamcı (predicate) mevcudiyetine göre uygun FDA yasal yolunu belirleyin.
  
  ### Karar Alma Çerçevesi
  
  ```
  Yordamcı cihaz var mı?
  ├── EVET → Maddi eşdeğer mi?
  │   ├── EVET → 510(k) Yolu
  │   │   ├── Tasarım değişikliği yok → Kısaltılmış 510(k)
  │   │   ├── Yalnızca üretim → Özel 510(k)
  │   │   └── Tasarım/performans → Geleneksel 510(k)
  │   └── HAYIR → PMA veya De Novo
  └── HAYIR → Yeni cihaz mı?
      ├── Düşük-orta risk → De Novo
      └── Yüksek risk (Sınıf III) → PMA
  ```
  
  ### Yollar Karşılaştırması
  
  | Yol | Ne Zaman Kullanılır | Süre | Kullanıcı Ücreti (2024 Mali Yılı) |
  |-----|---------------------|------|-----------------------------------|
  | 510(k) Geleneksel | Yordamcı var, tasarım değişiklikleri | 90 gün | $21.760 (2024 Mali Yılı) |
  | 510(k) Özel | Yalnızca üretim değişiklikleri | 30 gün | $21.760 (2024 Mali Yılı) |
  | 510(k) Kısaltılmış | Rehber/standart uyumluluğu | 30 gün | $21.760 (2024 Mali Yılı) |
  | De Novo | Yeni, düşük-orta risk | 150 gün | $134.676 (2024 Mali Yılı) |
  | PMA | Sınıf III, yordamcı yok | 180+ gün | $425.000+ (2024 Mali Yılı) |
  
  > Kullanıcı ücretleri MDUFA altında yıllık olarak belirlenir. Bütçe planlama yapmadan önce fda.gov adresinde cari mali yıl ücretlerini doğrulayın (MDUFA kullanıcı ücreti tarifesi); küçük işletme oranları farklıdır.
  
  ### Gönderim Öncesi Strateji
  
  1. Ürün kodunu ve sınıflandırmasını belirleyin
  2. 510(k) veritabanında yordamcıları arayın
  3. Maddi eşdeğerlik uygulanabilirliğini değerlendirin
  4. FDA için Q-Sub sorularını hazırlayın
  5. Gerekirse Gönderim Öncesi toplantı planlayın
  
  **Referans:** Yol karar matrislerini ve gönderim gereksinimlerini görmek için [fda_submission_guide.md](references/fda_submission_guide.md) dosyasına bakınız.
  
  ---
  
  ## 510(k) Gönderim Süreci
  
  ### İş Akışı
  
  ```
  Aşama 1: Planlama
  ├── Adım 1: Yordamcı cihaz(ları) belirleyin
  ├── Adım 2: Hedeflenen kullanım ve teknolojiyi karşılaştırın
  ├── Adım 3: Test gereksinimlerini belirleyin
  └── Kontrol Noktası: Maddi eşdeğerlik argümanı uygulanabilir mi?
  
  Aşama 2: Hazırlık
  ├── Adım 4: Performans testini tamamlayın
  ├── Adım 5: Cihaz açıklamasını hazırlayın
  ├── Adım 6: Maddi eşdeğerlik karşılaştırmasını belgelendirin
  ├── Adım 7: Etiketlemeyi tamamlayın
  └── Kontrol Noktası: Tüm gerekli bölümler tamamlandı mı?
  
  Aşama 3: Gönderim
  ├── Adım 8: Gönderim paketini hazırlayın
  ├── Adım 9: eSTAR üzerinden gönderin
  ├── Adım 10: Kabul bildirimini takip edin
  └── Kontrol Noktası: Gönderim kabul edildi mi?
  
  Aşama 4: İnceleme
  ├── Adım 11: İnceleme durumunu izleyin
  ├── Adım 12: AI taleplerini yanıtlayın
  ├── Adım 13: Karar alın
  └── Doğrulama: Maddi eşdeğerlik mektubu alındı mı?
  ```
  
  ### Gerekli Bölümler (21 CFR 807.87)
  
  | Bölüm | İçerik |
  |-------|--------|
  | Ön Yazı | Gönderim türü, cihaz kimliği, iletişim bilgileri |
  | Form 3514 | CDRH ön-pazar incelemesi kapak sayfası |
  | Cihaz Açıklaması | Fiziksel açıklama, çalışma prensipleri |
  | Kullanım Göstergesi | Form 3881, hasta popülasyonu, kullanım ortamı |
  | Maddi Eşdeğerlik Karşılaştırması | Yordamcı ile yan yana karşılaştırma |
  | Performans Testleri | Bench, biyouyumluluk, elektriksel güvenlik |
  | Yazılım Belgelendirmesi | Risk seviyesi, tehdit analizi (IEC 62304) |
  | Etiketleme | Kullanım Talimatları, paket etiketleri, uyarılar |
  | 510(k) Özeti | Gönderimin halka açık özeti |
  
  ### Yaygın RTA Sorunları
  
  | Sorun | Önleme |
  |-------|--------|
  | Eksik kullanıcı ücreti | Gönderimden önce ödemeyi doğrulayın |
  | Eksik Form 3514 | Tüm alanları gözden geçirin, imza sağlayın |
  | Yordamcı tanımlanmadı | FDA veritabanında K-numarasını doğrulayın |
  | Yetersiz maddi eşdeğerlik karşılaştırması | Tüm teknolojik özellikleri ele alın |
  
  ---
  
  ## QMSR Uyumluluğu (eski adıyla QSR)
  
  Tıbbi cihaz üreticileri için Kalite Yönetim Sistemi Yönetmeliği (QMSR) gereksinimleri, 21 CFR Bölüm 820 altında.
  
  > **QMSR geçişi (2026-02-02 tarihinde yürürlüğe giriş):** FDA'nın QMSR nihai kuralı (89 FR 7496), 21 CFR Bölüm 820'yi **ISO 13485:2016 referansını içerecek** şekilde değiştirmiş ve eski QSR alt bölüm yapısını (820.20–820.198) kaldırmıştır. Bu alt bölüm numaraları **tarihseldir** ve artık CFR'de mevcut değildir; karşılık gelen gereksinimler şimdi ISO 13485:2016 maddelerinden ve tutulan/yeniden numaralandırılan 820.10 bölümlerinden (gereksinimler, ISO 13485 içerme dahil), 820.35 (kayıtlar) ve 820.45 (cihaz etiketleme ve paketleme kontrolleri) akışından gelmektedir. 21 CFR Bölümler 801, 803, 806 ve 830 değişmemiştir. Aşağıdaki eski QSR numaraları yalnızca tanıdık bir indeks olarak tutulur, her biri mevcut ISO 13485 maddesine eşlenir.
  
  ### Önemli Kalite Alt Sistemleri (eski QSR indeksi → mevcut ISO 13485:2016 maddesi)
  
  | Eski QSR Bölümü (tarihsel, 2026 öncesi) | Başlık | QMSR altında mevcut otorite | Odak Noktası |
  |----------------------------------------|--------|------------------------------|--------------|
  | 820.20 | Yönetim Sorumluluğu | ISO 13485 §5.1, 5.5, 5.6 | Kalite politikası, org yapısı, yönetim incelemesi |
  | 820.30 | Tasarım Kontrolleri | ISO 13485 §7.3 | Giriş, çıkış, inceleme, doğrulama, validasyon |
  | 820.40 | Belge Kontrolleri | ISO 13485 §4.2.4 | Onay, dağıtım, değişiklik kontrolü |
  | 820.50 | Satın Alma Kontrolleri | ISO 13485 §7.4 | Tedarikçi yeterliliği, satın alma verisi |
  | 820.70 | Üretim Kontrolleri | ISO 13485 §6.3, 6.4, 7.5 | Proses validasyonu, çevre kontrolleri |
  | 820.100 | CAPA | ISO 13485 §8.5.2, 8.5.3 | Temel neden analizi, düzeltici eylemler |
  | 820.181 | Cihaz Ana Kaydı | ISO 13485 §4.2.3 (tıbbi cihaz dosyası) + 21 CFR 820.35 | Spesifikasyonlar, prosedürler, kabul kriterleri |
  
  ### Tasarım Kontrolleri İş Akışı (ISO 13485 §7.3; eski QSR 820.30)
  
  ```
  Adım 1: Tasarım Girişi
  └── Kullanıcı ihtiyaçlarını, hedeflenen kullanımı, yasal gereksinimleri yakalayın
      Doğrulama: Girdiler gözden geçirilip onaylandı mı?
  
  Adım 2: Tasarım Çıkışı
  └── Spesifikasyonlar, çizimler, yazılım mimarisi oluşturun
      Doğrulama: Çıktılar girdilere izlenebilir mi?
  
  Adım 3: Tasarım İncelemesi
  └── Her faz kilometre taşında incelemeler gerçekleştirin
      Doğrulama: İnceleme kayıtları imzalanmış mı?
  
  Adım 4: Tasarım Doğrulaması
  └── Spesifikasyonlara karşı test gerçekleştirin
      Doğrulama: Tüm testler kabul kriterlerini geçti mi?
  
  Adım 5: Tasarım Validasyonu
  └── Cihazın gerçek kullanım koşullarında kullanıcı ihtiyaçlarını karşıladığını doğrulayın
      Doğrulama: Validasyon raporu onaylandı mı?
  
  Adım 6: Tasarım Transferi
  └── DMR tamamlı olarak üretime yayınlayın
      Doğrulama: Transfer kontrol listesi tamamlandı mı?
  ```
  
  ### CAPA Süreci (ISO 13485 §8.5.2/8.5.3; eski QSR 820.100)
  
  1. **Belirle**: Uyumsuzluğu veya potansiyel sorunu belgelendirin
  2. **Araştır**: Temel neden analizi gerçekleştirin (5 Neden, Balık Kılçığı)
  3. **Planla**: Düzeltici/önleyici eylemleri tanımlayın
  4. **Uygula**: Eylemleri yürütün, belgelendirmeyi güncelleyin
  5. **Doğrula**: Uygulamanın tamamlandığını doğrulayın
  6. **Etkinlik**: Tekrarlanmanın olmadığını izleyin (30-90 gün)
  7. **Kapat**: Yönetim onayı ve kapatma
  
  **Referans:** Tarihsel QSR yapısının tam QMSR/ISO 13485:2016 madde eşlemesi ile ilgili bilgiler için [qsr_compliance_requirements.md](references/qsr_compliance_requirements.md) dosyasına bakınız.
  
  ---
  
  ## Tıbbi Cihazlar için HIPAA
  
  Korunan Sağlık Bilgilerini (PHI) oluşturan, depolayan, ileten veya erişen cihazlar için HIPAA gereksinimleri.
  
  ### Uygulanabilirlik
  
  | Cihaz Türü | HIPAA Uygulanır |
  |-----------|-----------------|
  | Bağımsız teşhis cihazı (veri aktarımı yok) | Hayır |
  | Hasta verisi ileten bağlı cihaz | Evet |
  | EHR entegrasyonlu cihaz | Evet |
  | Hasta bilgisini depolayan SaMD | Evet |
  | Wellness uygulaması (tanı yok) | Yalnızca PHI depoluyorsa |
  
  ### Gerekli Koruma Önlemleri
  
  ```
  İdari (§164.308)
  ├── Güvenlik sorumlusunun ataması
  ├── Risk analizi ve yönetimi
  ├── İş gücü eğitimi
  ├── İncident yanıt prosedürleri
  └── İş ortağı anlaşmaları
  
  Fiziksel (§164.310)
  ├── Tesis erişim kontrolleri
  ├── İş istasyonu güvenliği
  └── Cihaz imha prosedürleri
  
  Teknik (§164.312)
  ├── Erişim kontrolleri (benzersiz kimlikler, otomatik çıkış)
  ├── Denetim kontrolleri (günlükleme)
  ├── Bütünlük kontrolleri (checksumlar, hash'ler)
  ├── Kimlik doğrulaması (MFA önerilir)
  └── Aktarım güvenliği (TLS 1.2+)
  ```
  
  ### Risk Değerlendirmesi Adımları
  
  1. ePHI işleyen tüm sistemleri envanterleyin
  2. Veri akışlarını belgelendirin (toplama, depolama, aktarım)
  3. Tehditleri ve güvenlik açıklarını belirleyin
  4. Olabilirlik ve etkisini değerlendirin
  5. Risk seviyelerini belirleyin
  6. Kontrolleri uygulayın
  7. Kalan riski belgelendirin
  
  **Referans:** Uygulama kontrol listeleri ve BAA şablonları için [hipaa_compliance_framework.md](references/hipaa_compliance_framework.md) dosyasına bakınız.
  
  ---
  
  ## Cihaz Siber Güvenliği
  
  Bağlı tıbbi cihazlar için FDA siber güvenliği gereksinimleri.
  
  ### Pazar Öncesi Gereksinimler
  
  | Eleman | Açıklama |
  |--------|----------|
  | Tehdit Modeli | STRIDE analizi, saldırı ağaçları, güven sınırları |
  | Güvenlik Kontrolleri | Kimlik doğrulaması, şifreleme, erişim kontrolü |
  | SBOM | Yazılım Malzeme Listesi (CycloneDX veya SPDX) |
  | Güvenlik Testleri | Penetrasyon testleri, güvenlik açığı taraması |
  | Güvenlik Açığı Planı | Açıklama süreci, yama yönetimi |
  
  ### Cihaz Katmanı Sınıflandırması
  
  **Katman 1 (Daha Yüksek Risk):**
  - Ağa/internete bağlanır
  - Siber güvenlik olayı hastalara zarar verebilir
  
  **Katman 2 (Standart Risk):**
  - Diğer tüm bağlı cihazlar
  
  ### Pazar Sonrası Yükümlülükleri
  
  1. NVD ve ICS-CERT'te güvenlik açıklarını izleyin
  2. Cihaz bileşenleri için uygulanabilirliği değerlendirin
  3. Yamalar geliştirin ve test edin
  4. Müşterilerle iletişim kurun
  5. Rehberliğe göre FDA'ya rapor edin
  
  ### Koordineli Güvenlik Açığı Açıklaması
  
  ```
  Araştırmacı Raporu
      ↓
  Onay (48 saat)
      ↓
  İlk Değerlendirme (5 gün)
      ↓
  Yama Geliştirme
      ↓
  Koordineli Halka Açık Açıklama
  ```
  
  **Referans:** SBOM format örnekleri ve tehdit modeli şablonları için [device_cybersecurity_guidance.md](references/device_cybersecurity_guidance.md) dosyasına bakınız.
  
  ---
  
  ## Kaynaklar
  
  ### scripts/
  
  | Script | Amaç |
  |--------|------|
  | `fda_submission_tracker.py` | 510(k)/PMA/De Novo gönderim kilometre taşlarını ve zaman çizelgelerini takip edin |
  | `qsr_compliance_checker.py` | KYS belgelendirmesini ISO 13485:2016'ya eşlenen eski QSR kontrol listesine karşı değerlendirin (QMSR) |
  | `hipaa_risk_assessment.py` | Tıbbi cihaz yazılımında HIPAA koruma önlemlerini değerlendirin |
  
  ### references/
  
  | Dosya | İçerik |
  |-------|--------|
  | `fda_submission_guide.md` | 510(k), De Novo, PMA gönderim gereksinimleri ve kontrol listeleri |
  | `qsr_compliance_requirements.md` | QMSR/ISO 13485:2016 eşlemesi, uygulama şablonları ile eski QSR yapısı |
  | `hipaa_compliance_framework.md` | HIPAA Güvenlik Kuralı koruma önlemleri ve BAA gereksinimleri |
  | `device_cybersecurity_guidance.md` | FDA siber güvenliği gereksinimleri, SBOM, tehdit modeli |
  | `fda_capa_requirements.md` | CAPA süreci, temel neden analizi, etkinlik doğrulaması |
  
  ### Kullanım Örnekleri
  
  ```bash
  # FDA gönderim durumunu takip edin
  python scripts/fda_submission_tracker.py /path/to/project --type 510k
  
  # KYS belgelendirmesini değerlendirin (eski QSR bölüm anahtarları, QMSR altında ISO 13485 ile eşlendi)
  python scripts/qsr_compliance_checker.py /path/to/project --section 820.30  # eski kontrol listesi anahtarı = ISO 13485 §7.3 (tasarım & geliştirme)
  
  # HIPAA risk değerlendirmesi çalıştırın
  python scripts/hipaa_risk_assessment.py /path/to/project --category technical
  ```
---

# FDA Consultant Specialist

FDA regulatory consulting for medical device manufacturers covering submission pathways, the Quality Management System Regulation (QMSR, 21 CFR Part 820 — formerly the QSR), HIPAA compliance, and device cybersecurity requirements.

## Table of Contents

- [FDA Pathway Selection](#fda-pathway-selection)
- [510(k) Submission Process](#510k-submission-process)
- [QMSR Compliance (formerly QSR)](#qmsr-compliance-formerly-qsr)
- [HIPAA for Medical Devices](#hipaa-for-medical-devices)
- [Device Cybersecurity](#device-cybersecurity)
- [Resources](#resources)

---

## FDA Pathway Selection

Determine the appropriate FDA regulatory pathway based on device classification and predicate availability.

### Decision Framework

```
Predicate device exists?
├── YES → Substantially equivalent?
│   ├── YES → 510(k) Pathway
│   │   ├── No design changes → Abbreviated 510(k)
│   │   ├── Manufacturing only → Special 510(k)
│   │   └── Design/performance → Traditional 510(k)
│   └── NO → PMA or De Novo
└── NO → Novel device?
    ├── Low-to-moderate risk → De Novo
    └── High risk (Class III) → PMA
```

### Pathway Comparison

| Pathway | When to Use | Timeline | User Fee (FY2024) |
|---------|-------------|----------|-------------------|
| 510(k) Traditional | Predicate exists, design changes | 90 days | $21,760 (FY2024) |
| 510(k) Special | Manufacturing changes only | 30 days | $21,760 (FY2024) |
| 510(k) Abbreviated | Guidance/standard conformance | 30 days | $21,760 (FY2024) |
| De Novo | Novel, low-moderate risk | 150 days | $134,676 (FY2024) |
| PMA | Class III, no predicate | 180+ days | $425,000+ (FY2024) |

> User fees are set annually under MDUFA. Verify current-fiscal-year fees at fda.gov (MDUFA user fee schedule) before budgeting; small-business rates differ.

### Pre-Submission Strategy

1. Identify product code and classification
2. Search 510(k) database for predicates
3. Assess substantial equivalence feasibility
4. Prepare Q-Sub questions for FDA
5. Schedule Pre-Sub meeting if needed

**Reference:** See [fda_submission_guide.md](references/fda_submission_guide.md) for pathway decision matrices and submission requirements.

---

## 510(k) Submission Process

### Workflow

```
Phase 1: Planning
├── Step 1: Identify predicate device(s)
├── Step 2: Compare intended use and technology
├── Step 3: Determine testing requirements
└── Checkpoint: SE argument feasible?

Phase 2: Preparation
├── Step 4: Complete performance testing
├── Step 5: Prepare device description
├── Step 6: Document SE comparison
├── Step 7: Finalize labeling
└── Checkpoint: All required sections complete?

Phase 3: Submission
├── Step 8: Assemble submission package
├── Step 9: Submit via eSTAR
├── Step 10: Track acknowledgment
└── Checkpoint: Submission accepted?

Phase 4: Review
├── Step 11: Monitor review status
├── Step 12: Respond to AI requests
├── Step 13: Receive decision
└── Verification: SE letter received?
```

### Required Sections (21 CFR 807.87)

| Section | Content |
|---------|---------|
| Cover Letter | Submission type, device ID, contact info |
| Form 3514 | CDRH premarket review cover sheet |
| Device Description | Physical description, principles of operation |
| Indications for Use | Form 3881, patient population, use environment |
| SE Comparison | Side-by-side comparison with predicate |
| Performance Testing | Bench, biocompatibility, electrical safety |
| Software Documentation | Level of concern, hazard analysis (IEC 62304) |
| Labeling | IFU, package labels, warnings |
| 510(k) Summary | Public summary of submission |

### Common RTA Issues

| Issue | Prevention |
|-------|------------|
| Missing user fee | Verify payment before submission |
| Incomplete Form 3514 | Review all fields, ensure signature |
| No predicate identified | Confirm K-number in FDA database |
| Inadequate SE comparison | Address all technological characteristics |

---

## QMSR Compliance (formerly QSR)

Quality Management System Regulation (QMSR) requirements for medical device manufacturers under 21 CFR Part 820.

> **QMSR transition (effective 2026-02-02):** FDA's QMSR final rule (89 FR 7496) amended 21 CFR Part 820 to incorporate **ISO 13485:2016 by reference** and removed the legacy QSR subsection structure (820.20–820.198). Those subsection numbers are **historical** and no longer exist in the CFR; the corresponding requirements now flow from ISO 13485:2016 clauses plus the retained/renumbered sections 820.10 (requirements, incl. the ISO 13485 incorporation), 820.35 (records), and 820.45 (device labeling and packaging controls). 21 CFR Parts 801, 803, 806, and 830 are unchanged. Legacy QSR numbers below are kept only as a familiar index, each mapped to its current ISO 13485 clause.

### Key Quality Subsystems (legacy QSR index → current ISO 13485:2016 clause)

| Legacy QSR Section (historical, pre-2026) | Title | Current authority under QMSR | Focus |
|-------------------------------------------|-------|------------------------------|-------|
| 820.20 | Management Responsibility | ISO 13485 §5.1, 5.5, 5.6 | Quality policy, org structure, management review |
| 820.30 | Design Controls | ISO 13485 §7.3 | Input, output, review, verification, validation |
| 820.40 | Document Controls | ISO 13485 §4.2.4 | Approval, distribution, change control |
| 820.50 | Purchasing Controls | ISO 13485 §7.4 | Supplier qualification, purchasing data |
| 820.70 | Production Controls | ISO 13485 §6.3, 6.4, 7.5 | Process validation, environmental controls |
| 820.100 | CAPA | ISO 13485 §8.5.2, 8.5.3 | Root cause analysis, corrective actions |
| 820.181 | Device Master Record | ISO 13485 §4.2.3 (medical device file) + 21 CFR 820.35 | Specifications, procedures, acceptance criteria |

### Design Controls Workflow (ISO 13485 §7.3; legacy QSR 820.30)

```
Step 1: Design Input
└── Capture user needs, intended use, regulatory requirements
    Verification: Inputs reviewed and approved?

Step 2: Design Output
└── Create specifications, drawings, software architecture
    Verification: Outputs traceable to inputs?

Step 3: Design Review
└── Conduct reviews at each phase milestone
    Verification: Review records with signatures?

Step 4: Design Verification
└── Perform testing against specifications
    Verification: All tests pass acceptance criteria?

Step 5: Design Validation
└── Confirm device meets user needs in actual use conditions
    Verification: Validation report approved?

Step 6: Design Transfer
└── Release to production with DMR complete
    Verification: Transfer checklist complete?
```

### CAPA Process (ISO 13485 §8.5.2/8.5.3; legacy QSR 820.100)

1. **Identify**: Document nonconformity or potential problem
2. **Investigate**: Perform root cause analysis (5 Whys, Fishbone)
3. **Plan**: Define corrective/preventive actions
4. **Implement**: Execute actions, update documentation
5. **Verify**: Confirm implementation complete
6. **Effectiveness**: Monitor for recurrence (30-90 days)
7. **Close**: Management approval and closure

**Reference:** See [qsr_compliance_requirements.md](references/qsr_compliance_requirements.md) for the historical QSR structure with full QMSR/ISO 13485:2016 clause mapping.

---

## HIPAA for Medical Devices

HIPAA requirements for devices that create, store, transmit, or access Protected Health Information (PHI).

### Applicability

| Device Type | HIPAA Applies |
|-------------|---------------|
| Standalone diagnostic (no data transmission) | No |
| Connected device transmitting patient data | Yes |
| Device with EHR integration | Yes |
| SaMD storing patient information | Yes |
| Wellness app (no diagnosis) | Only if stores PHI |

### Required Safeguards

```
Administrative (§164.308)
├── Security officer designation
├── Risk analysis and management
├── Workforce training
├── Incident response procedures
└── Business associate agreements

Physical (§164.310)
├── Facility access controls
├── Workstation security
└── Device disposal procedures

Technical (§164.312)
├── Access control (unique IDs, auto-logoff)
├── Audit controls (logging)
├── Integrity controls (checksums, hashes)
├── Authentication (MFA recommended)
└── Transmission security (TLS 1.2+)
```

### Risk Assessment Steps

1. Inventory all systems handling ePHI
2. Document data flows (collection, storage, transmission)
3. Identify threats and vulnerabilities
4. Assess likelihood and impact
5. Determine risk levels
6. Implement controls
7. Document residual risk

**Reference:** See [hipaa_compliance_framework.md](references/hipaa_compliance_framework.md) for implementation checklists and BAA templates.

---

## Device Cybersecurity

FDA cybersecurity requirements for connected medical devices.

### Premarket Requirements

| Element | Description |
|---------|-------------|
| Threat Model | STRIDE analysis, attack trees, trust boundaries |
| Security Controls | Authentication, encryption, access control |
| SBOM | Software Bill of Materials (CycloneDX or SPDX) |
| Security Testing | Penetration testing, vulnerability scanning |
| Vulnerability Plan | Disclosure process, patch management |

### Device Tier Classification

**Tier 1 (Higher Risk):**
- Connects to network/internet
- Cybersecurity incident could cause patient harm

**Tier 2 (Standard Risk):**
- All other connected devices

### Postmarket Obligations

1. Monitor NVD and ICS-CERT for vulnerabilities
2. Assess applicability to device components
3. Develop and test patches
4. Communicate with customers
5. Report to FDA per guidance

### Coordinated Vulnerability Disclosure

```
Researcher Report
    ↓
Acknowledgment (48 hours)
    ↓
Initial Assessment (5 days)
    ↓
Fix Development
    ↓
Coordinated Public Disclosure
```

**Reference:** See [device_cybersecurity_guidance.md](references/device_cybersecurity_guidance.md) for SBOM format examples and threat modeling templates.

---

## Resources

### scripts/

| Script | Purpose |
|--------|---------|
| `fda_submission_tracker.py` | Track 510(k)/PMA/De Novo submission milestones and timelines |
| `qsr_compliance_checker.py` | Assess QMS documentation against the legacy-QSR checklist mapped to ISO 13485:2016 (QMSR) |
| `hipaa_risk_assessment.py` | Evaluate HIPAA safeguards in medical device software |

### references/

| File | Content |
|------|---------|
| `fda_submission_guide.md` | 510(k), De Novo, PMA submission requirements and checklists |
| `qsr_compliance_requirements.md` | Historical QSR structure with QMSR/ISO 13485:2016 mapping, implementation templates |
| `hipaa_compliance_framework.md` | HIPAA Security Rule safeguards and BAA requirements |
| `device_cybersecurity_guidance.md` | FDA cybersecurity requirements, SBOM, threat modeling |
| `fda_capa_requirements.md` | CAPA process, root cause analysis, effectiveness verification |

### Usage Examples

```bash
# Track FDA submission status
python scripts/fda_submission_tracker.py /path/to/project --type 510k

# Assess QMS documentation (legacy QSR section keys, mapped to ISO 13485 under QMSR)
python scripts/qsr_compliance_checker.py /path/to/project --section 820.30  # legacy checklist key = ISO 13485 §7.3 (design & development)

# Run HIPAA risk assessment
python scripts/hipaa_risk_assessment.py /path/to/project --category technical
```
