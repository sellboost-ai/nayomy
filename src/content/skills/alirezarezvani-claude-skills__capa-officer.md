---
name: "capa-officer"
description_en: "CAPA system management for medical device QMS. Covers root cause analysis, corrective action planning, effectiveness verification, and CAPA metrics. Use for CAPA investigations, 5-Why analysis, fishbone diagrams, root cause determination, corrective action tracking, effectiveness verification, or CAPA program optimization."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/capa-officer/SKILL.md"
path: ".gemini/skills/capa-officer/SKILL.md"
is_collection: false
body_length: 14082
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # CAPA Müdürü

  Kalite Yönetim Sistemleri içinde Düzeltici ve Önleyici Faaliyet (CAPA) yönetimi, sistematik temel neden analizi, faaliyet uygulaması ve etkinlik doğrulamasına odaklanmıştır.

  ---

  ## İçindekiler

  - [CAPA Araştırması İş Akışı](#capa-araştırması-iş-akışı)
  - [Temel Neden Analizi](#temel-neden-analizi)
  - [Düzeltici Faaliyet Planlaması](#düzeltici-faaliyet-planlaması)
  - [Etkinlik Doğrulaması](#etkinlik-doğrulaması)
  - [CAPA Metrikleri ve Raporlama](#capa-metrikleri-ve-raporlama)
  - [Referans Dokümantasyon](#referans-dokümantasyon)
  - [Araçlar](#araçlar)

  ---

  ## CAPA Araştırması İş Akışı

  Başlangıçtan kapanışa kadar sistematik CAPA araştırması yürütün:

  1. Tetikleyici olayı objektif kanıtlarla belgeleyin
  2. Önem değerlendirmesi yapın ve CAPA gerekçesini belirleyin
  3. İlgili uzmanlıkla araştırma ekibi oluşturun
  4. Sistematik olarak veri ve kanıt toplayın
  5. Uygun RCA metodolojisini seçin ve uygulayın
  6. Destekleyici kanıtlarla temel nedenleri belirleyin
  7. Düzeltici ve önleyici faaliyetler geliştirin
  8. **Doğrulama:** Temel neden tüm semptomları açıklar; eğer ortadan kaldırılırsa, sorun tekrar ortaya çıkmazdı

  ### CAPA Gerekçesi Belirlenmesi

  | Tetikleyici Türü | CAPA Gerekli | Kriterler |
  |--------------|---------------|----------|
  | Müşteri şikayeti (güvenlik) | Evet | Hasta/kullanıcı güvenliğini içeren herhangi bir şikayet |
  | Müşteri şikayeti (kalite) | Değerlendir | Ağırlık ve frekansına göre |
  | İç denetim bulgusu (Büyük) | Evet | Sistematik hata veya öğenin yokluğu |
  | İç denetim bulgusu (Küçük) | Önerilir | İzole bir atlatma veya kısmi uygulama |
  | Uyumsuzluk (tekrarlayan) | Evet | Aynı uyumsuzluk türü 3+ kez oluşması |
  | Uyumsuzluk (izole) | Değerlendir | Ağırlık ve riske göre |
  | Harici denetim bulgusu | Evet | Tüm Büyük ve Küçük bulgular |
  | Trend analizi | Değerlendir | Trend önemine göre |

  ### Araştırma Ekibi Bileşimi

  | CAPA Ağırlığı | Gerekli Ekip Üyeleri |
  |---------------|----------------------|
  | Kritik | CAPA Müdürü, Süreç Sahibi, KA Müdürü, Konu Uzmanı, Yönetim Temsilcisi |
  | Büyük | CAPA Müdürü, Süreç Sahibi, Konu Uzmanı |
  | Küçük | CAPA Müdürü, Süreç Sahibi |

  ### Kanıt Toplama Kontrol Listesi

  - [ ] Sorun açıklaması spesifik detaylarla (ne, nerede, ne zaman, kim, ne kadar)
  - [ ] Soruna yol açan olayların zaman çizelgesi
  - [ ] İlgili kayıtlar ve dokümantasyon
  - [ ] İlgili personelle yapılan görüşme notları
  - [ ] Fotoğraflar veya fiziksel kanıt (varsa)
  - [ ] İlgili şikayetler, uyumsuzluklar veya önceki CAPA'lar
  - [ ] Süreç parametreleri ve spesifikasyonları

  ---

  ## Temel Neden Analizi

  Sorun karakteristiklerine göre uygun RCA metodolojisini seçin ve uygulayın.

  ### RCA Metodoloji Seçimi Karar Ağacı

  ```
  Sorun güvenlik açısından kritik mi veya sistem güvenilirliği içeriyor mu?
  ├── Evet → FAULT TREE ANALYSIS (HATA AĞACI ANALİZİ) KULLANıN
  └── Hayır → İnsan hatası şüpheli birincil neden mi?
      ├── Evet → HUMAN FACTORS ANALYSIS (İNSAN FAKTÖRLERİ ANALİZİ) KULLANıN
      └── Hayır → Kaç tane potansiyel katkı faktörü var?
          ├── 1-2 faktör (doğrusal nedensellik) → 5 WHY ANALYSIS (5 NEDEN ANALİZİ) KULLANıN
          ├── 3-6 faktör (karmaşık, sistematik) → FISHBONE DIAGRAM (BALIK KILÇIĞI DİYAGRAMI) KULLANıN
          └── Bilinmiyor/proaktif değerlendirme → FMEA KULLANıN
  ```

  ### 5 Neden Analizi

  Kullanın: Tek nedene sahip sorunlar doğrusal nedensellikle, net başarısızlık noktası ile süreç sapmaları.

  **Şablon:**

  ```
  SORUN: [Açık, spesifik açıklama]

  NEDEN 1: [Sorun] neden ortaya çıktı?
  ÇÜNKÜ: [Birinci seviye neden]
  KANIT: [Destekleyici veri]

  NEDEN 2: [Birinci seviye neden] neden ortaya çıktı?
  ÇÜNKÜ: [İkinci seviye neden]
  KANIT: [Destekleyici veri]

  NEDEN 3: [İkinci seviye neden] neden ortaya çıktı?
  ÇÜNKÜ: [Üçüncü seviye neden]
  KANIT: [Destekleyici veri]

  NEDEN 4: [Üçüncü seviye neden] neden ortaya çıktı?
  ÇÜNKÜ: [Dördüncü seviye neden]
  KANIT: [Destekleyici veri]

  NEDEN 5: [Dördüncü seviye neden] neden ortaya çıktı?
  ÇÜNKÜ: [Temel neden]
  KANIT: [Destekleyici veri]
  ```

  **Örnek - Kalibrasyonu Süresi Geçmiş:**

  ```
  SORUN: pH metre (EQ-042) kalibrasyonu 2 ay süresi geçmiş olarak bulundu

  NEDEN 1: Kalibrasyonun süresi neden geçmişti?
  ÇÜNKÜ: Ekipman kalibrasyon planına eklenmemişti
  KANIT: Kalibrasyon planı incelendi, EQ-042 listede yok

  NEDEN 2: Neden plana eklenmemişti?
  ÇÜNKÜ: Ekipman satın alındığında plan güncellenmedi
  KANIT: Satın alma tarihi 2023-06-15, plan tarihi 2023-01-01

  NEDEN 3: Neden plan güncellenme zamanında güncellenmedi?
  ÇÜNKÜ: Ekipman satın alma sırasında plan güncellenmesini gerektiren bir süreç yok
  KANIT: SOP-EQ-001 incelendi, böyle bir gereklilik yok

  NEDEN 4: Neden böyle bir gereklilik yok?
  ÇÜNKÜ: Prosedür ekipman izleme merkezileştirilmeden önce yazıldı
  KANIT: SOP son revizyon 2019, ekipman sistemi 2021'de uygulandı

  NEDEN 5: Neden prosedür güncellenmedi?
  ÇÜNKÜ: Periyodik inceleme orijinal prosedür oluşturulduktan sonra uygulanan yeni sistemlerle uyumluluğu değerlendirmedi
  KANIT: Yeni ekipman sistemi ile yapılan karşılaştırma belgelenmedi

  TEMEL NEDEN: Prosedür inceleme süreci, orijinal prosedür oluşturulduktan sonra 
  örgüt tarafından uygulanan sistemlerle uyumluluğu değerlendirememiştir.
  ```

  ### Balık Kılçığı Diyagramı Kategorileri (6M)

  | Kategori | Odak Alanları | Tipik Nedenler |
  |----------|-------------|----------------|
  | Man (İnsan) | Eğitim, yetkinlik, iş yükü | Yetenek eksikliği, yorgunluk, iletişim |
  | Machine (Ekipman) | Kalibrasyonu, bakımı, yaşı | Aşınma, arıza, yetersiz kapasite |
  | Method (Süreç) | Prosedürler, çalışma talimatları | Belirsiz adımlar, eksik kontrollar |
  | Material (Malzeme) | Spesifikasyonlar, tedarikçiler, depolama | Spec dışı, degradasyon, kontaminasyon |
  | Measurement (Ölçüm) | Kalibrasyon, metodlar, yorumlama | Enstrüman hatası, yanlış metod |
  | Mother Nature (Çevre) | Sıcaklık, nem, temizlik | Çevresel sapılmalar |

  Tam yöntem detayları ve şablonları için `references/rca-methodologies.md` dosyasına bakın.

  ### Temel Neden Doğrulaması

  Faaliyet planlamasına geçmeden önce temel nedeni doğrulayın:

  - [ ] Temel neden objektif kanıtlarla doğrulanabilir
  - [ ] Temel neden ortadan kaldırılırsa, sorun tekrar ortaya çıkmazdı
  - [ ] Temel neden organizasyon kontrolü altındadır
  - [ ] Temel neden gözlenen tüm semptomları açıklar
  - [ ] Diğer önemli nedenler ele alınmamış değildir

  ---

  ## Düzeltici Faaliyet Planlaması

  Belirlenen temel nedenleri ele alan etkin faaliyetler geliştirin:

  1. Acil çevreleme faaliyetlerini tanımlayın
  2. Temel nedeni hedefleyen düzeltici faaliyetler geliştirin
  3. Benzer süreçler için önleyici faaliyetleri tanımlayın
  4. Sorumlulukları ve kaynakları atayın
  5. Mil taşlarıyla zaman çizelgesi belirleyin
  6. Başarı kriterlerini ve doğrulama yöntemini tanımlayın
  7. CAPA faaliyet planında belgeleyin
  8. **Doğrulama:** Faaliyetler doğrudan temel nedeni ele alır; başarı kriterleri ölçülebilirdir

  ### Faaliyet Türleri

  | Tür | Amaç | Zaman Çizelgesi | Örnek |
  |------|---------|----------|---------|
  | Çevreleme | Acil etkiyi durdur | 24-72 saat | Etkilenen ürünü karantinaya al |
  | Düzeltme | Spesifik oluşumu düzelt | 1-2 hafta | Etkilenen öğeleri yeniden işle veya değiştir |
  | Düzeltici | Temel nedeni ortadan kaldır | 30-90 gün | Prosedürü revize et, kontroller ekle |
  | Önleyici | Diğer alanlarda önle | 60-120 gün | Çözümü benzer süreçlere genişlet |

  ### Faaliyet Plan Bileşenleri

  ```
  FAALIYET PLANI ŞABLONU

  CAPA Numarası: [CAPA-XXXX]
  Temel Neden: [Belirlenen temel neden]

  FALİYET 1: [Spesifik faaliyet açıklaması]
  - Tür: [ ] Çevreleme [ ] Düzeltme [ ] Düzeltici [ ] Önleyici
  - Sorumlu: [Ad, Unvan]
  - Tamamlanma Tarihi: [YYYY-MM-DD]
  - Kaynaklar: [Gerekli kaynaklar]
  - Başarı Kriterleri: [Ölçülebilir sonuç]
  - Doğrulama Yöntemi: [Başarı nasıl doğrulanacak]

  FALİYET 2: [Spesifik faaliyet açıklaması]
  ...

  UYGULAMA ZAMANÇİZELGESİ:
  Hafta 1: [Mil Taşı]
  Hafta 2: [Mil Taşı]
  Hafta 4: [Mil Taşı]
  Hafta 8: [Mil Taşı]

  ONAY:
  CAPA Sahibi: _____________ Tarih: _______
  Süreç Sahibi: _____________ Tarih: _______
  KA Müdürü: _____________ Tarih: _______
  ```

  ### Faaliyet Etkinlik Göstergeleri

  | Gösterge | Hedef | Uyarı İşareti |
  |-----------|--------|------------|
  | Faaliyet kapsamı | Temel nedeni tamamen ele al | Yalnızca semptomları tedavi et |
  | Spesifiklik | Ölçülebilir çıktılar | Muğlak taahhütler |
  | Zaman çizelgesi | Agresif ama ulaşılabilir | Tamamlanma tarihi yok veya gerçekçi olmayan |
  | Kaynaklar | Tanımlanmış ve ayrılan | Belirtilmemiş |
  | Sürdürülebilirlik | Kalıcı çözüm | Geçici çözüm |

  ---

  ## Etkinlik Doğrulaması

  Düzeltici faaliyetlerin amaçlanan sonuçları elde etip etmediğini doğrulayın:

  1. Yeterli uygulama dönemi bekleme (minimum 30-90 gün)
  2. Uygulama sonrası veriler toplayın
  3. Uygulama öncesi tabanla karşılaştırın
  4. Başarı kriterleri karşısında değerlendirin
  5. Doğrulama dönemi boyunca tekrarın olmadığını doğrulayın
  6. Doğrulama kanıtlarını belgeleyin
  7. CAPA etkinliğini belirleyin
  8. **Doğrulama:** Tüm kriterler objektif kanıtlarla karşılanır; tekrar gözlenmez

  ### Doğrulama Zaman Çizelgesi Yönergeleri

  | CAPA Ağırlığı | Bekleme Dönemi | Doğrulama Penceresi |
  |---------------|-------------|---------------------|
  | Kritik | 30 gün | Uygulamadan 30-90 gün sonra |
  | Büyük | 60 gün | Uygulamadan 60-180 gün sonra |
  | Küçük | 90 gün | Uygulamadan 90-365 gün sonra |

  ### Doğrulama Yöntemleri

  | Yöntem | Kullanım | Gerekli Kanıt |
  |--------|----------|----------------|
  | Veri trend analizi | Ölçülebilir sorunlar | Uygulama öncesi/sonrası karşılaştırması, trend grafikleri |
  | Süreç denetimi | Prosedür uyum sorunları | Denetim kontrol listesi, görüşme notları |
  | Kayıt incelemesi | Dokümantasyon sorunları | Örnek kayıtlar, uyum oranı |
  | Test/muayene | Ürün kalitesi sorunları | Test sonuçları, geçme/başarısızlık verileri |
  | Görüşme/gözlem | Eğitim sorunları | Görüşme notları, gözlem kayıtları |

  ### Etkinlik Belirlenmesi

  ```
  Doğrulama dönemi boyunca tekrar oluştu mu?
  ├── Evet → CAPA ETKİNSİZ (temel nedeni yeniden araştırın)
  └── Hayır → Tüm etkinlik kriterleri karşılandı mı?
      ├── Evet → CAPA ETKİNLİ (kapanışa geçin)
      └── Hayır → Boşluğun boyutu ne kadar?
          ├── Küçük boşluk → Doğrulamayı genişletin veya gerekçeyle kabul edin
          └── Önemli boşluk → CAPA ETKİNSİZ (faaliyetleri revize edin)
  ```

  Ayrıntılı prosedürler için `references/effectiveness-verification-guide.md` dosyasına bakın.

  ---

  ## CAPA Metrikleri ve Raporlama

  CAPA programı performansını anahtar göstergeler aracılığıyla izleyin.

  ### Anahtar Performans Göstergeleri

  | Metrik | Hedef | Hesaplama |
  |--------|--------|----------|
  | CAPA döngü süresi | <60 gün ortalaması | (Kapanış Tarihi - Açılış Tarihi) / CAPA Sayısı |
  | Süresi Geçmiş Oranı | <%10 | Süresi Geçmiş CAPA'lar / Toplam Açık CAPA'lar |
  | Birinci Kez Etkinlik | >%90 | İlk doğrulamada Etkin / Toplam Doğrulanan |
  | Tekrar Oranı | <%5 | Tekrarlayan Sorunlar / Toplam Kapatılan CAPA'lar |
  | Araştırma Kalitesi | %100 | Doğrulanan Temel Nedenler / Toplam CAPA'lar |

  ### Yaşlandırma Analizi Kategorileri

  | Yaş Kategorisi | Durum | Gerekli Faaliyet |
  |------------|--------|------------------|
  | 0-30 gün | Yolunda | İlerlemeyi izle |
  | 31-60 gün | İzleme | Gecikmeler için gözden geçir |
  | 61-90 gün | Uyarı | Yönetimi eskalate et |
  | >90 gün | Kritik | Yönetim müdahalesi gerekli |

  ### Yönetim İnceleme Girdileri

  Aylık CAPA durum raporu şunları içerir:
  - Ağırlık ve duruma göre Açık CAPA sayısı
  - Sahibiyle süresi geçmiş CAPA listesi
  - Döngü süresi trendleri
  - Etkinlik oranı trendleri
  - Kaynak analizi (şikayetler, denetimler, uyumsuzluklar)
  - İyileştirme önerileri

  ---

  ## Referans Dokümantasyon

  ### Temel Neden Analizi Metodolojileri

  `references/rca-methodologies.md` şunları içerir:

  - Metodoloji seçimi karar ağacı
  - 5 Neden analizi şablonu ve örneği
  - Balık kılçığı diyagramı kategorileri ve şablonu
  - Güvenlik açısından kritik sorunlar için Hata Ağacı Analizi
  - İnsan kaynaklı nedenler için İnsan Faktörleri Analizi
  - Proaktif risk değerlendirmesi için FMEA
  - Hibrit yaklaşım kılavuzu

  ### Etkinlik Doğrulama Kılavuzu

  `references/effectiveness-verification-guide.md` şunları içerir:

  - Doğrulama planlama gereksinimleri
  - Doğrulama yöntemi seçimi
  - Etkinlik kriterleri tanımı (SMART)
  - Ağırlığa göre kapanış gereksinimleri
  - Etkin olmayan CAPA süreci
  - Dokümantasyon şablonları

  ---

  ## Araçlar

  ### CAPA İzleyicisi

  ```bash
  # CAPA durum raporu oluştur
  python scripts/capa_tracker.py --capas capas.json

  # Manuel giriş için etkileşimli mod
  python scripts/capa_tracker.py --interactive

  # Entegrasyon için JSON çıktısı
  python scripts/capa_tracker.py --capas capas.json --output json

  # Örnek veri dosyası oluştur
  python scripts/capa_tracker.py --sample > sample_capas.json
  ```

  Hesaplar ve rapor eder:
  - Özet metrikler (açık, kapalı, süresi geçmiş, döngü süresi, etkinlik)
  - Durum dağılımı
  - Ağırlık ve kaynak analizi
  - Zaman dilimlerine göre yaşlandırma raporu
  - Süresi geçmiş CAPA listesi
  - Eylem planı önerileri

  ### Örnek CAPA Girdisi

  ```json
  {
    "capas": [
      {
        "capa_number": "CAPA-2024-001",
        "title": "pH metre için kalibrasyon süresi geçmiş",
        "description": "pH metre EQ-042 2 ay süresi geçmiş olarak bulundu",
        "source": "AUDIT",
        "severity": "MAJOR",
        "status": "VERIFICATION",
        "open_date": "2024-06-15",
        "target_date": "2024-08-15",
        "owner": "J. Smith",
        "root_cause": "Prosedür inceleme boşluğu",
        "corrective_action": "SOP-EQ-001 güncellendi"
      }
    ]
  }
  ```

  ---

  ## Yasal Gereklilikler

  ### ISO 13485:2016 Madde 8.5

  | Alt-madde | Gereklilik | Anahtar Faaliyetler |
  |------------|-------------|----------------|
  | 8.5.2 Düzeltici Faaliyet | Uyumsuzluğun nedenini ortadan kaldır | Uyumsuzluk incelemesi, neden belirleme, faaliyet değerlendirmesi, uygulama, etkinlik incelemesi |
  | 8.5.3 Önleyici Faaliyet | Potansiyel uyumsuzluğu ortadan kaldır | Trend analizi, neden belirleme, faaliyet değerlendirmesi, uygulama, etkinlik incelemesi |

  ### FDA 21 CFR 820.100

  Gerekli CAPA öğeleri:
  - Düzeltici ve önleyici faaliyet uygulamak için prosedürler
  - Kalite veri kaynaklarını analiz etme (şikayetler, uyumsuzluklar, denetimler, hizmet kayıtları)
  - Uyumsuzlukların nedenini araştırma
  - Tekrarının önlenmesi ve düzeltilmesi için gerekli faaliyetleri belirleme
  - Faaliyetlerin etkin olduğunu ve cihaza olumsuz etki yapmadığını doğrulama
  - Yönetim incelemesi için ilgili bilgileri sunma

  ### Yaygın FDA 483 Gözlemleri

  | Gözlem | Temel Neden Şablonu |
  |-------------|-------------------|
  | Tekrarlayan sorun için CAPA başlatılmadı | Trend analizi yapılmadı |
  | Yüzeysel temel neden analizi | Yetersiz araştırma eğitimi |
  | Etkinlik doğrulanmadı | Doğrulama prosedürü yok |
  | Faaliyetler temel nedeni ele almıyor | Semptom tedavisi vs. neden ortadan kaldırma |
---

# CAPA Officer

Corrective and Preventive Action (CAPA) management within Quality Management Systems, focusing on systematic root cause analysis, action implementation, and effectiveness verification.

---

## Table of Contents

- [CAPA Investigation Workflow](#capa-investigation-workflow)
- [Root Cause Analysis](#root-cause-analysis)
- [Corrective Action Planning](#corrective-action-planning)
- [Effectiveness Verification](#effectiveness-verification)
- [CAPA Metrics and Reporting](#capa-metrics-and-reporting)
- [Reference Documentation](#reference-documentation)
- [Tools](#tools)

---

## CAPA Investigation Workflow

Conduct systematic CAPA investigation from initiation through closure:

1. Document trigger event with objective evidence
2. Assess significance and determine CAPA necessity
3. Form investigation team with relevant expertise
4. Collect data and evidence systematically
5. Select and apply appropriate RCA methodology
6. Identify root cause(s) with supporting evidence
7. Develop corrective and preventive actions
8. **Validation:** Root cause explains all symptoms; if eliminated, problem would not recur

### CAPA Necessity Determination

| Trigger Type | CAPA Required | Criteria |
|--------------|---------------|----------|
| Customer complaint (safety) | Yes | Any complaint involving patient/user safety |
| Customer complaint (quality) | Evaluate | Based on severity and frequency |
| Internal audit finding (Major) | Yes | Systematic failure or absence of element |
| Internal audit finding (Minor) | Recommended | Isolated lapse or partial implementation |
| Nonconformance (recurring) | Yes | Same NC type occurring 3+ times |
| Nonconformance (isolated) | Evaluate | Based on severity and risk |
| External audit finding | Yes | All Major and Minor findings |
| Trend analysis | Evaluate | Based on trend significance |

### Investigation Team Composition

| CAPA Severity | Required Team Members |
|---------------|----------------------|
| Critical | CAPA Officer, Process Owner, QA Manager, Subject Matter Expert, Management Rep |
| Major | CAPA Officer, Process Owner, Subject Matter Expert |
| Minor | CAPA Officer, Process Owner |

### Evidence Collection Checklist

- [ ] Problem description with specific details (what, where, when, who, how much)
- [ ] Timeline of events leading to issue
- [ ] Relevant records and documentation
- [ ] Interview notes from involved personnel
- [ ] Photos or physical evidence (if applicable)
- [ ] Related complaints, NCs, or previous CAPAs
- [ ] Process parameters and specifications

---

## Root Cause Analysis

Select and apply appropriate RCA methodology based on problem characteristics.

### RCA Method Selection Decision Tree

```
Is the issue safety-critical or involves system reliability?
├── Yes → Use FAULT TREE ANALYSIS
└── No → Is human error the suspected primary cause?
    ├── Yes → Use HUMAN FACTORS ANALYSIS
    └── No → How many potential contributing factors?
        ├── 1-2 factors (linear causation) → Use 5 WHY ANALYSIS
        ├── 3-6 factors (complex, systemic) → Use FISHBONE DIAGRAM
        └── Unknown/proactive assessment → Use FMEA
```

### 5 Why Analysis

Use when: Single-cause issues with linear causation, process deviations with clear failure point.

**Template:**

```
PROBLEM: [Clear, specific statement]

WHY 1: Why did [problem] occur?
BECAUSE: [First-level cause]
EVIDENCE: [Supporting data]

WHY 2: Why did [first-level cause] occur?
BECAUSE: [Second-level cause]
EVIDENCE: [Supporting data]

WHY 3: Why did [second-level cause] occur?
BECAUSE: [Third-level cause]
EVIDENCE: [Supporting data]

WHY 4: Why did [third-level cause] occur?
BECAUSE: [Fourth-level cause]
EVIDENCE: [Supporting data]

WHY 5: Why did [fourth-level cause] occur?
BECAUSE: [Root cause]
EVIDENCE: [Supporting data]
```

**Example - Calibration Overdue:**

```
PROBLEM: pH meter (EQ-042) found 2 months overdue for calibration

WHY 1: Why was calibration overdue?
BECAUSE: Equipment was not on calibration schedule
EVIDENCE: Calibration schedule reviewed, EQ-042 not listed

WHY 2: Why was it not on the schedule?
BECAUSE: Schedule not updated when equipment was purchased
EVIDENCE: Purchase date 2023-06-15, schedule dated 2023-01-01

WHY 3: Why was the schedule not updated?
BECAUSE: No process requires schedule update at equipment purchase
EVIDENCE: SOP-EQ-001 reviewed, no such requirement

WHY 4: Why is there no such requirement?
BECAUSE: Procedure written before equipment tracking was centralized
EVIDENCE: SOP last revised 2019, equipment system implemented 2021

WHY 5: Why has procedure not been updated?
BECAUSE: Periodic review did not assess compatibility with new systems
EVIDENCE: No review against new equipment system documented

ROOT CAUSE: Procedure review process does not assess compatibility
with organizational systems implemented after original procedure creation.
```

### Fishbone Diagram Categories (6M)

| Category | Focus Areas | Typical Causes |
|----------|-------------|----------------|
| Man (People) | Training, competency, workload | Skill gaps, fatigue, communication |
| Machine (Equipment) | Calibration, maintenance, age | Wear, malfunction, inadequate capacity |
| Method (Process) | Procedures, work instructions | Unclear steps, missing controls |
| Material | Specifications, suppliers, storage | Out-of-spec, degradation, contamination |
| Measurement | Calibration, methods, interpretation | Instrument error, wrong method |
| Mother Nature | Temperature, humidity, cleanliness | Environmental excursions |

See `references/rca-methodologies.md` for complete method details and templates.

### Root Cause Validation

Before proceeding to action planning, validate root cause:

- [ ] Root cause can be verified with objective evidence
- [ ] If root cause is eliminated, problem would not recur
- [ ] Root cause is within organizational control
- [ ] Root cause explains all observed symptoms
- [ ] No other significant causes remain unaddressed

---

## Corrective Action Planning

Develop effective actions addressing identified root causes:

1. Define immediate containment actions
2. Develop corrective actions targeting root cause
3. Identify preventive actions for similar processes
4. Assign responsibilities and resources
5. Establish timeline with milestones
6. Define success criteria and verification method
7. Document in CAPA action plan
8. **Validation:** Actions directly address root cause; success criteria are measurable

### Action Types

| Type | Purpose | Timeline | Example |
|------|---------|----------|---------|
| Containment | Stop immediate impact | 24-72 hours | Quarantine affected product |
| Correction | Fix the specific occurrence | 1-2 weeks | Rework or replace affected items |
| Corrective | Eliminate root cause | 30-90 days | Revise procedure, add controls |
| Preventive | Prevent in other areas | 60-120 days | Extend solution to similar processes |

### Action Plan Components

```
ACTION PLAN TEMPLATE

CAPA Number: [CAPA-XXXX]
Root Cause: [Identified root cause]

ACTION 1: [Specific action description]
- Type: [ ] Containment [ ] Correction [ ] Corrective [ ] Preventive
- Responsible: [Name, Title]
- Due Date: [YYYY-MM-DD]
- Resources: [Required resources]
- Success Criteria: [Measurable outcome]
- Verification Method: [How success will be verified]

ACTION 2: [Specific action description]
...

IMPLEMENTATION TIMELINE:
Week 1: [Milestone]
Week 2: [Milestone]
Week 4: [Milestone]
Week 8: [Milestone]

APPROVAL:
CAPA Owner: _____________ Date: _______
Process Owner: _____________ Date: _______
QA Manager: _____________ Date: _______
```

### Action Effectiveness Indicators

| Indicator | Target | Red Flag |
|-----------|--------|----------|
| Action scope | Addresses root cause completely | Treats only symptoms |
| Specificity | Measurable deliverables | Vague commitments |
| Timeline | Aggressive but achievable | No due dates or unrealistic |
| Resources | Identified and allocated | Not specified |
| Sustainability | Permanent solution | Temporary fix |

---

## Effectiveness Verification

Verify corrective actions achieved intended results:

1. Allow adequate implementation period (minimum 30-90 days)
2. Collect post-implementation data
3. Compare to pre-implementation baseline
4. Evaluate against success criteria
5. Verify no recurrence during verification period
6. Document verification evidence
7. Determine CAPA effectiveness
8. **Validation:** All criteria met with objective evidence; no recurrence observed

### Verification Timeline Guidelines

| CAPA Severity | Wait Period | Verification Window |
|---------------|-------------|---------------------|
| Critical | 30 days | 30-90 days post-implementation |
| Major | 60 days | 60-180 days post-implementation |
| Minor | 90 days | 90-365 days post-implementation |

### Verification Methods

| Method | Use When | Evidence Required |
|--------|----------|-------------------|
| Data trend analysis | Quantifiable issues | Pre/post comparison, trend charts |
| Process audit | Procedure compliance issues | Audit checklist, interview notes |
| Record review | Documentation issues | Sample records, compliance rate |
| Testing/inspection | Product quality issues | Test results, pass/fail data |
| Interview/observation | Training issues | Interview notes, observation records |

### Effectiveness Determination

```
Did recurrence occur during verification period?
├── Yes → CAPA INEFFECTIVE (re-investigate root cause)
└── No → Were all effectiveness criteria met?
    ├── Yes → CAPA EFFECTIVE (proceed to closure)
    └── No → Extent of gap?
        ├── Minor gap → Extend verification or accept with justification
        └── Significant gap → CAPA INEFFECTIVE (revise actions)
```

See `references/effectiveness-verification-guide.md` for detailed procedures.

---

## CAPA Metrics and Reporting

Monitor CAPA program performance through key indicators.

### Key Performance Indicators

| Metric | Target | Calculation |
|--------|--------|-------------|
| CAPA cycle time | <60 days average | (Close Date - Open Date) / Number of CAPAs |
| Overdue rate | <10% | Overdue CAPAs / Total Open CAPAs |
| First-time effectiveness | >90% | Effective on first verification / Total verified |
| Recurrence rate | <5% | Recurred issues / Total closed CAPAs |
| Investigation quality | 100% root cause validated | Root causes validated / Total CAPAs |

### Aging Analysis Categories

| Age Bucket | Status | Action Required |
|------------|--------|-----------------|
| 0-30 days | On track | Monitor progress |
| 31-60 days | Monitor | Review for delays |
| 61-90 days | Warning | Escalate to management |
| >90 days | Critical | Management intervention required |

### Management Review Inputs

Monthly CAPA status report includes:
- Open CAPA count by severity and status
- Overdue CAPA list with owners
- Cycle time trends
- Effectiveness rate trends
- Source analysis (complaints, audits, NCs)
- Recommendations for improvement

---

## Reference Documentation

### Root Cause Analysis Methodologies

`references/rca-methodologies.md` contains:

- Method selection decision tree
- 5 Why analysis template and example
- Fishbone diagram categories and template
- Fault Tree Analysis for safety-critical issues
- Human Factors Analysis for people-related causes
- FMEA for proactive risk assessment
- Hybrid approach guidance

### Effectiveness Verification Guide

`references/effectiveness-verification-guide.md` contains:

- Verification planning requirements
- Verification method selection
- Effectiveness criteria definition (SMART)
- Closure requirements by severity
- Ineffective CAPA process
- Documentation templates

---

## Tools

### CAPA Tracker

```bash
# Generate CAPA status report
python scripts/capa_tracker.py --capas capas.json

# Interactive mode for manual entry
python scripts/capa_tracker.py --interactive

# JSON output for integration
python scripts/capa_tracker.py --capas capas.json --output json

# Generate sample data file
python scripts/capa_tracker.py --sample > sample_capas.json
```

Calculates and reports:
- Summary metrics (open, closed, overdue, cycle time, effectiveness)
- Status distribution
- Severity and source analysis
- Aging report by time bucket
- Overdue CAPA list
- Actionable recommendations

### Sample CAPA Input

```json
{
  "capas": [
    {
      "capa_number": "CAPA-2024-001",
      "title": "Calibration overdue for pH meter",
      "description": "pH meter EQ-042 found 2 months overdue",
      "source": "AUDIT",
      "severity": "MAJOR",
      "status": "VERIFICATION",
      "open_date": "2024-06-15",
      "target_date": "2024-08-15",
      "owner": "J. Smith",
      "root_cause": "Procedure review gap",
      "corrective_action": "Updated SOP-EQ-001"
    }
  ]
}
```

---

## Regulatory Requirements

### ISO 13485:2016 Clause 8.5

| Sub-clause | Requirement | Key Activities |
|------------|-------------|----------------|
| 8.5.2 Corrective Action | Eliminate cause of nonconformity | NC review, cause determination, action evaluation, implementation, effectiveness review |
| 8.5.3 Preventive Action | Eliminate potential nonconformity | Trend analysis, cause determination, action evaluation, implementation, effectiveness review |

### FDA 21 CFR 820.100

Required CAPA elements:
- Procedures for implementing corrective and preventive action
- Analyzing quality data sources (complaints, NCs, audits, service records)
- Investigating cause of nonconformities
- Identifying actions needed to correct and prevent recurrence
- Verifying actions are effective and do not adversely affect device
- Submitting relevant information for management review

### Common FDA 483 Observations

| Observation | Root Cause Pattern |
|-------------|-------------------|
| CAPA not initiated for recurring issue | Trend analysis not performed |
| Root cause analysis superficial | Inadequate investigation training |
| Effectiveness not verified | No verification procedure |
| Actions do not address root cause | Symptom treatment vs. cause elimination |
