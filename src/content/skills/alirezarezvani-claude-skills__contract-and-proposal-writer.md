---
name: "contract-and-proposal-writer"
description_en: "Generate professional, jurisdiction-aware business documents: freelance contracts, project proposals, SOWs, NDAs, and MSAs. Structured Markdown output with docx conversion instructions. Covers US (Delaware), EU (GDPR), UK, and DACH (German law) jurisdictions. Not a substitute for legal counsel — use as strong starting points. Use when drafting a freelance contract, preparing a client proposal, wri"
description_tr: "Profesyonel, yasal çerçeveye uygun işletme belgeleri oluşturun: freelance kontratları, proje teklifleri, SOW'lar, NDA'lar ve MSA'lar. Yapılandırılmış Markdown çıktısı ve docx dönüştürme talimatları sunulur. ABD (Delaware), AB (GDPR), İngiltere ve DACH (Alman hukuku) yetki alanlarını kapsar. Hukuki danışmanlık yerini tutmaz — güçlü başlangıç noktaları olarak kullanın."
category: "Document"
repo: "alirezarezvani/claude-skills"
stars: 18402
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/contract-and-proposal-writer/SKILL.md"
path: ".gemini/skills/contract-and-proposal-writer/SKILL.md"
is_collection: false
body_length: 13203
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Sözleşme ve Teklif Yazarı
  
  **Tier:** POWERFUL  
  **Category:** Business Growth  
  **Domain:** Legal Documents, Business Development, Client Relations
  
  ---
  
  ## Genel Bakış
  
  Profesyonel, yargı yetkisine uygun iş belgeleri oluşturun: freelance sözleşmeleri, proje teklifleri, SOW'lar, NDA'lar ve MSA'lar. Structurlandırılmış Markdown ile docx dönüştürme talimatlarını çıktı olarak verir. US (Delaware), EU (GDPR), UK ve DACH (Alman hukuku) yargı yetkilerine sahiptir.
  
  **Hukuki tavsiye yerine geçmez.** Bu şablonları güçlü başlangıç noktaları olarak kullanın; yüksek değerli veya karmaşık müşteriler için bir avukat ile gözden geçirin.
  
  ---
  
  ## Temel Yetenekler
  
  - Freelance geliştirme sözleşmeleri (sabit fiyat ve saatlik)
  - Zaman çizelgesi/bütçe dökümü ile proje teklifleri
  - İş Beyanları (SOW) - teslim edilebilirler matrisi ile
  - NDA'lar (karşılıklı ve tek yönlü)
  - Master Service Agreements (MSA)
  - Yargı yetkisine özel maddeler (US/EU/UK/DACH)
  - GDPR Veri İşleme Ekleri (EU/DACH)
  
  ---
  
  ## Anahtar Maddeler Referansı
  
  | Madde | Seçenekler |
  |--------|---------|
  | Ödeme koşulları | Net-30, kilometre taşı bazlı, aylık hizmet paketi |
  | IP sahipliği | Work-for-hire (US), devir (EU/UK), lisans geri |
  | Sorumluluk sınırı | 1x sözleşme değeri (standart), 3x (yüksek risk) |
  | Fesih | Neden ile (14 günlük düzeltme), kolaylık (30/60/90 günlük bildirim) |
  | Gizlilik | 2-5 yıl vadesi, ticari sırlar için kalıcı |
  | Garanti | "Olduğu gibi" feragatı, sınırlı 30/90 günlük düzeltme garantisi |
  | Uyuşmazlık çözümü | Hakem (AAA/ICC), mahkemeler (yetkiye özel) |
  
  ---
  
  ## Ne Zaman Kullanılacak
  
  - Yeni bir müşteri müşavirliği başlatırken ve hızlı bir sözleşmeye ihtiyacınız var
  - Müşteri fiyatlandırma ve zaman çizelgesi ile bir teklif istediğinde
  - MSA gerektiren ortaklık veya satıcı ilişkisi
  - NDA ile IP veya gizli bilgileri korumak
  - GDPR uyumlu veri maddeleri gerektiren EU/DACH projesi
  
  ---
  
  ## İş Akışı
  
  ### 1. Gereksinimleri Toplayın
  
  Kullanıcıya sorun:
  
      1. Belge türü? (contract / proposal / SOW / NDA / MSA)
      2. Yargı yetkisi? (US-Delaware / EU / UK / DACH)
      3. Müşteriler ilişkisi türü? (fixed-price / hourly / retainer)
      4. Taraflar? (adlar, roller, işletme adresleri)
      5. Kapsam özeti? (1-3 cümle)
      6. Toplam değer veya saatlik fiyat?
      7. Başlangıç tarihi / bitiş tarihi veya süre?
      8. Özel gereksinimler? (IP devri, white-label, alt yükleniciler)
  
  ### 2. Şablonu Seçin
  
  | Tür | Yargı Yetkisi | Şablon |
  |------|-------------|----------|
  | Dev sözleşmesi sabit | Herhangi | Şablon A |
  | Danışmanlık paketi | Herhangi | Şablon B |
  | SaaS ortaklığı | Herhangi | Şablon C |
  | NDA karşılıklı | US/EU/UK/DACH | NDA-M |
  | NDA tek yönlü | US/EU/UK/DACH | NDA-OW |
  | SOW | Herhangi | SOW base |
  
  ### 3. Oluştur ve Doldur
  
  Tüm [BRACKETED] yer tutucuları doldurun. Eksik verileri "REQUIRED" olarak işaretleyin.
  
  ### 4. DOCX'e Dönüştür
  
  ```bash
  # pandoc kurun
  brew install pandoc        # macOS
  apt install pandoc         # Ubuntu
  
  # Temel dönüştürme
  pandoc contract.md -o contract.docx \
    --reference-doc=reference.docx \
    -V geometry:margin=1in
  
  # Numaralandırılmış bölümler ile (yasal stil)
  pandoc contract.md -o contract.docx \
    --number-sections \
    -V documentclass=article \
    -V fontsize=11pt
  
  # Özel şirket şablonu ile
  pandoc contract.md -o contract.docx \
    --reference-doc=company-template.docx
  ```
  
  ---
  
  ## Yargı Yetkisi Notları
  
  ### US (Delaware)
  - Yönetici hukuku: Delaware Eyaleti
  - Work-for-hire doktrini geçerlidir (Copyright Act 101)
  - Hakem: AAA Commercial Rules
  - Rekabet etmeme: makul kapsam/süre ile uygulanabilir
  
  ### EU (GDPR)
  - Kişisel veri işlenmesi durumunda Veri İşleme Eki gerekli
  - IP devri, bazı üye ülkelerde ayrı yazılı belge gerektirir
  - Hakem: ICC veya yerel oda
  
  ### UK (post-Brexit)
  - İngiliz hukuku tarafından yönetilir
  - IP: Patents Act 1977 / CDPA 1988
  - Hakem: LCIA Rules
  - Veri: UK GDPR (post-Brexit eşdeğeri)
  
  ### DACH (Almanya / Avusturya / İsviçre)
  - BGB (Buergerliches Gesetzbuch) sözleşmeleri yönetir
  - Belirli maddeler için yazılı form gereksinimi (para 126 BGB)
  - IP: Yazar her zaman ahlaki hakları korur; Nutzungsrechte'yi açık şekilde devretmeli
  - Rekabet etmeme: maksimum 2 yıl, tazminat gerekli (para 74 HGB)
  - Yargı yetkisi: Alman mahkemeleri (Landgericht) veya DIS hakemi
  - DSGVO (GDPR uygulanması) kişisel veri işlemesi için zorunlu
  - Kuendigungsfristen: yasal bildirim dönemleri geçerli
  
  ---
  
  ## Şablon A: Web Dev Sabit Fiyat Sözleşmesi
  
  ```markdown
  # YAZILIM GELIŞTIRME SÖZLEŞMESİ
  
  **Yürürlük Tarihi:** [DATE]
  **Müşteri:** [CLIENT LEGAL NAME], [ADDRESS] ("Müşteri")
  **Geliştirici:** [YOUR LEGAL NAME / COMPANY], [ADDRESS] ("Geliştirici")
  
  ---
  
  ## 1. HİZMETLER
  
  Geliştirici, tasarlamayı, geliştirmeyi ve teslim etmeyi kabul eder:
  
  **Proje:** [PROJECT NAME]
  **Açıklama:** [1-3 cümle kapsam]
  
  **Teslim Edilebilirler:**
  - [Deliverable 1] [DATE] tarihinde teslim
  - [Deliverable 2] [DATE] tarihinde teslim
  - [Deliverable 3] [DATE] tarihinde teslim
  
  ## 2. ÖDEME
  
  **Toplam Ücret:** [CURRENCY] [AMOUNT]
  
  | Kilometre Taşı | Tutar | Vadesi |
  |-----------|--------|-----|
  | Sözleşme imzalama | 50% | İcra sırasında |
  | Beta teslimatı | 25% | [DATE] |
  | Son kabul | 25% | Kabul tarihinden itibaren 5 gün içinde |
  
  Geç ödemeler aylık %1,5 faiz tahakkuk ettir.
  Müşterinin teslim edilebilirleri kabul etmesi veya reddetmesi için [10] iş günü vardır.
  
  ## 3. FIKRI MÜLKİYET
  
  Tam ödeme alındıktan sonra, Geliştirici tüm hak, ünvan ve faiz işleri İş Ürünü'nde
  Müşteriye work for hire (US) / veya gelecekteki telif hakkının devri (EU/UK) olarak devreder.
  
  Geliştirici, teslimat sonrası [30] gün içinde Müşteri tarafından yazılı olarak gizlilik istenmedikçe
  portföyde İş Ürünü gösterme hakkını korur.
  
  Önceden var olan IP (araçlar, kitaplıklar, çerçeveler) Geliştirici'nin mülkiyeti olarak kalır.
  Geliştirici, İş Ürünü'ne gömülü olduğu şekilde önceden var olan IP'yi kullanma konusunda
  Müşteriye süresiz, telif hakkı ödemesiz lisans verir.
  
  ## 4. GİZLİLİK
  
  Her taraf, diğerinden aldığı kamuya açık olmayan tüm bilgileri gizli tutar.
  Bu yükümlülük fesihten sonra [3] yıl sürer.
  
  ## 5. GARANTİLER
  
  Geliştirici, İş Ürünü'nün teslimat sonrası [90] gün boyunca
  özelliklerine önemli ölçüde uygun olacağını garanti eder. Geliştirici bu dönem içinde
  maddi kusurları ücretsiz olarak düzeltecektir. BU AÇIKLAMALAR HARICINDE, İŞ ÜRÜNÜ "OLDUĞU GİBİ" SAĞLANıR.
  
  ## 6. SORUMLULUK
  
  Geliştirici'nin toplam sorumluluğu, bu Sözleşme altında ödenen toplam ücretleri aşmayacaktır.
  Hiçbir taraf dolaylı, arızi veya sonuçsal hasarlardan sorumlu değildir.
  
  ## 7. FESİH
  
  Neden ile: Bir taraf, diğeri önemli ölçüde ihlal etmesi ve yazılı bildirimden sonra
  [14] gün içinde düzeltilmemesi durumunda fesih edebilir.
  
  Kolaylık için: Müşteri [30] günlük yazılı bildirim ile fesih edebilir ve
  tamamlanan tüm çalışmalar artı kalan sözleşme değerinin [10%]'ı için ödeme yapabilir.
  
  ## 8. UYUŞMAZLIK ÇÖZÜMÜ
  
  US: AAA Commercial Rules altında bağlayıcı hakem, [CITY], Delaware hukuku.
  EU/DACH: ICC / DIS hakem, [CITY]. Alman / İngiliz hukuku.
  UK: LCIA Rules, Londra. İngiliz hukuku.
  
  ## 9. GENEL
  
  - Tam Sözleşme: Tüm önceki müzakereleri geçersiz kılar.
  - Değişiklikler: Her iki taraf tarafından imzalanmış yazılı olmalıdır.
  - Bağımsız Müteahhit: Geliştirici Müşteri'nin bir çalışanı değildir.
  
  ---
  
  MÜŞTERİ: _________________________ Tarih: _________
  [CLIENT NAME], [TITLE]
  
  GELİŞTİRİCİ: _________________________ Tarih: _________
  [YOUR NAME], [TITLE]
  ```
  
  ---
  
  ## Şablon B: Aylık Danışmanlık Paketi
  
  ```markdown
  # DANIŞMANLIK PAKETİ SÖZLEŞMESİ
  
  **Yürürlük Tarihi:** [DATE]
  **Müşteri:** [CLIENT LEGAL NAME] ("Müşteri")
  **Danışman:** [YOUR NAME / COMPANY] ("Danışman")
  
  ---
  
  ## 1. HİZMETLER
  
  Danışman [DOMAIN, ör: "CTO danışmanlık ve teknik mimari"] hizmetleri sağlar.
  
  **Aylık Saat:** Aya kadar [X] saat/ay
  **Aktarım:** Kullanılmayan saatler [yapılır / yapılmaz] aktarılır (maks [X] saat depolanır)
  **Fazla Oran:** Paketin aşan saat için [CURRENCY] [RATE]/saat
  
  ## 2. ÜCRETLER
  
  **Aylık Paket:** [CURRENCY] [AMOUNT], ayın 1'inde ödeneceği şekilde.
  **Ödeme Yöntemi:** Banka transferi / Stripe / SEPA doğrudan borçlandırma
  **Geç Ödeme:** [10] günlük inzibat döneminden sonra aylık %2 faiz.
  
  ## 3. SÜRE VE FESİH
  
  **İlk Dönem:** [DATE]'den başlayan [3] ay
  **Yenileme:** Taraflardan biri [30] günlük yazılı bildirim vermedikçe otomatik olarak aylık yenilenir.
  **Hemen fesih:** Önemli ihlal ve [7] günlük bildirimden sonra düzeltilmemesi durumunda.
  
  Fesihte, Danışman, devam eden tüm çalışmaları [5] iş günü içinde teslim eder.
  
  ## 4. FIKRI MÜLKİYET
  
  Bu Sözleşme altında oluşturulan iş ürünü [Müşteri / Danışman / ortaklaşa] aittir.
  Danışmanlık çıktısı (tavsiyeleri, analizler) tam ödeme ile Müşteri mülkiyetidir.
  
  ## 5. MÜNHASIRLIK
  
  [SEÇENEK A - Münhasır olmayan:]
  Bu Sözleşme münhasır değildir. Danışman diğer müşterilerle çalışabilir.
  
  [SEÇENEK B - Kısmi münhasırık:]
  Danışman, müşteri'nin doğrudan rakipleri ile sözleşme döneminde ve
  sonrası [90] gün boyunca çalışmayacaktır.
  
  ## 6. GİZLİLİK VE VERİ KORUMASI
  
  EU/DACH: Danışman kişisel veri işlerse Müşteri adına, taraflar
  Art. 28 GDPR'ye uygun Veri İşleme Sözleşmesi (DPA) yürütecektir.
  
  ## 7. SORUMLULUK
  
  Danışman'ın toplam sorumluluğu, talebi önceki [3] ayda ödenen ücretlerin [3x]'ü ile sınırlandırılır.
  
  ---
  
  Yukarıdaki gibi imzalar.
  ```
  
  ---
  
  ## Şablon C: SaaS Ortaklık Sözleşmesi
  
  ```markdown
  # SAAS ORTAKLIK SÖZLEŞMESİ
  
  **Yürürlük Tarihi:** [DATE]
  **Sağlayıcı:** [NAME], [ADDRESS]
  **Ortak:** [NAME], [ADDRESS]
  
  ---
  
  ## 1. AMAÇ
  
  Sağlayıcı, Ortak'a Sağlayıcı'nın [PRODUCT NAME] ("Yazılım") konusunda
  [satıcı / referans / white-label / entegrasyon] haklarını bu Sözleşmeye tabi olarak verir.
  
  ## 2. ORTAKLIK TÜRÜ
  
  [ ] Referans: Ortak müşteri gönderir; ilk yıl ARR'nin [X]'ini referans başına kazanır.
  [ ] Satıcı: Ortak lisansı yeniden satar; liste fiyatından [X]% indirim kazanır.
  [ ] White-label: Ortak Yazılım'ı yeniden markalandırır; aylık [AMOUNT] platform ücreti öder.
  [ ] Entegrasyon: Ortak Yazılım'ı API üzerinden entegre eder; şartlar Ek A'da.
  
  ## 3. GELİR PAYLAŞIMI
  
  | Tier | Aylık ARR Gönderilen | Komisyon |
  |------|---------------------|------------|
  | Bronze | < $10,000 | [X]% |
  | Silver | $10,000-$50,000 | [X]% |
  | Gold | > $50,000 | [X]% |
  
  Ödeme: Ay kapanışından sonra Net-30, minimum $[500] eşiği.
  
  ## 4. FIKRI MÜLKİYET
  
  Her taraf kendi ürünlerinde tüm IP'yi korur. Zımni lisans yok.
  Ortak, Sağlayıcı'nın Marka Yönergeleri başına Sağlayıcı markalarını kullanabilir (Ek B).
  
  ## 5. VERİ VE GİZLİLİK
  
  Her taraf kendi müşterileri için bağımsız veri kontrolörüdür.
  Müşterek işleme ayrı DPA gerektirir (Ek C - EU/DACH projeleri).
  
  ## 6. SÜRE
  
  İlk: [12] ay. Yıllık olarak, [90] günlük yazılı bildirim vermedikçe yenilenir.
  Neden ile Fesih: Önemli ihlal için [30] günlük düzeltme dönem.
  
  ## 7. SORUMLULUK SINIRLAMASI
  
  Her taraf'ın sorumluluğu, önceki [12] aydaki ödenen/alınan ücretlerin [1x]'i ile sınırlandırılır.
  Kendi ürünlerinden IP ihlali taleplerine karşı karşılıklı tazmin.
  
  ---
  
  İmzalar, ekler ve geçerli yargı yetkisine uygun hukuk.
  ```
  
  ---
  
  ## GDPR Veri İşleme Eki (EU/DACH Madde Bloğu)
  
  ```markdown
  ## VERİ İŞLEME EKİ (Art. 28 GDPR)
  
  Kontrolör: [CLIENT NAME]
  İşlemci: [CONTRACTOR NAME]
  
  ### Konu Madde
  İşlemci, temel Sözleşme altında hizmetler sağlamak amacı ile
  Kontrolör adına kişisel veri işler.
  
  ### Konu Olan Veri Sahipleri Kategorileri
  [ör: son kullanıcılar, çalışanlar, müşteriler]
  
  ### Kişisel Veri Kategorileri
  [ör: adlar, e-posta adresleri, kullanım verileri]
  
  ### İşleme Süresi
  Temel Sözleşme'nin süresi boyunca; fesihten sonra [30] gün içinde silinir.
  
  ### İşlemci Yükümlülükleri
  - Kişisel veriyi sadece Kontrolör'ün belgelenmiş talimatlarına göre işler
  - İşlemeye yetkili kişilerin gizlilik konusunda taahhüt vermesini sağlar
  - Art. 32 GDPR'ye uygun teknik ve organizasyonel önlemleri uygular
  - Kontrolör'ün veri sahipliği hak taleplerini destekler
  - Önceden yazılı izin olmadan alt işlemciyi kullanamaz
  - Fesihte tüm kişisel verileri siler veya geri döndürür
  
  ### Alt İşlemciler (Yürürlük Tarihi itibari ile geçerli)
  | Alt İşlemci | Konum | Amaç |
  |--------------|----------|---------|
  | [AWS / GCP / Azure] | [Region] | Bulut barındırması |
  | [Diğer] | [Konum] | [Amaç] |
  
  ### Sınırlar Ötesi Transferler
  Veri transferi EEA dışına: [ ] SCC'ler  [ ] Yeterlilik Kararı  [ ] BCR'ler
  ```
  
  ---
  
  ## Yaygın Tuzaklar
  
  1. **Eksik IP devir dili** - "work for hire" tek başına yeterli değildir EU'de; DACH'ta Nutzungsrechte'nin açık devri gerekli
  2. **Muğlak kabul kriterleri** - Her zaman "kabul" anlamını tanımlayın (yazılı imza, X gün reddedilme için)
  3. **Değişiklik siparişi süreci yok** - Kapsam sürüntüsü sabit fiyat projelerini öldürür; kapsam dışı çalışma için madde ekleyin
  4. **Yargı yetkisi uyumsuzluğu** - Sadece Almanya projesi için Delaware hukuku seçmek, icra sorunları yaratır
  5. **Eksik sorumluluk sınırı** - Sınır olmadan, bir hata sınırsız zararlar anlamına gelebilir
  6. **Sözlü değişiklikler** - Sözleşmeler sözlü olarak değiştirilmişse uygulanması zordur; her zaman yazılı değişiklik gereklidir
  
  ---
  
  ## En İyi Uygulamalar
  
  - $10K üzeri projeler için Net-30'ın yerine **kilometre taşı ödemeleri** kullanın - nakit akış riskini azaltır
  - EU/DACH için: DPA gerekli olup olmadığını her zaman kontrol edin (herhangi bir kişisel veri = evet)
  - DACH için: açıkça bir **Schriftformklausel** (yazılı form maddesi) ekleyin
  - 3 aydan daha uzun herhangi bir şey için bir **maçeri durumuna karşı** madde ekleyin
  - Paketler için: yanıt süresi SLA'larını tanımlayın (ör: 4s acil / 24s normal)
  - Şablonları sürüm kontrolüne alın; `git diff` ile değişiklikleri izleyin
  - Yılda bir gözden geçirin - hukuk değişir, özellikle GDPR uygulaması yorumları
  - NDA'lar için: her zaman gizli materyallerin fesihte geri döndürülmesi/imhası belirleyin
---

# Contract & Proposal Writer

**Tier:** POWERFUL  
**Category:** Business Growth  
**Domain:** Legal Documents, Business Development, Client Relations

---

## Overview

Generate professional, jurisdiction-aware business documents: freelance contracts, project proposals, SOWs, NDAs, and MSAs. Outputs structured Markdown with docx conversion instructions. Covers US (Delaware), EU (GDPR), UK, and DACH (German law) jurisdictions.

**Not a substitute for legal counsel.** Use these templates as strong starting points; review with an attorney for high-value or complex engagements.

---

## Core Capabilities

- Freelance development contracts (fixed-price & hourly)
- Project proposals with timeline/budget breakdown
- Statements of Work (SOW) with deliverables matrix
- NDAs (mutual & one-way)
- Master Service Agreements (MSA)
- Jurisdiction-specific clauses (US/EU/UK/DACH)
- GDPR Data Processing Addenda (EU/DACH)

---

## Key Clauses Reference

| Clause | Options |
|--------|---------|
| Payment terms | Net-30, milestone-based, monthly retainer |
| IP ownership | Work-for-hire (US), assignment (EU/UK), license-back |
| Liability cap | 1x contract value (standard), 3x (high-risk) |
| Termination | For cause (14-day cure), convenience (30/60/90-day notice) |
| Confidentiality | 2-5 year term, perpetual for trade secrets |
| Warranty | "As-is" disclaimer, limited 30/90-day fix warranty |
| Dispute resolution | Arbitration (AAA/ICC), courts (jurisdiction-specific) |

---

## When to Use

- Starting a new client engagement and need a contract fast
- Client asks for a proposal with pricing and timeline
- Partnership or vendor relationship requiring an MSA
- Protecting IP or confidential information with an NDA
- EU/DACH project requiring GDPR-compliant data clauses

---

## Workflow

### 1. Gather Requirements

Ask the user:

    1. Document type? (contract / proposal / SOW / NDA / MSA)
    2. Jurisdiction? (US-Delaware / EU / UK / DACH)
    3. Engagement type? (fixed-price / hourly / retainer)
    4. Parties? (names, roles, business addresses)
    5. Scope summary? (1-3 sentences)
    6. Total value or hourly rate?
    7. Start date / end date or duration?
    8. Special requirements? (IP assignment, white-label, subcontractors)

### 2. Select Template

| Type | Jurisdiction | Template |
|------|-------------|----------|
| Dev contract fixed | Any | Template A |
| Consulting retainer | Any | Template B |
| SaaS partnership | Any | Template C |
| NDA mutual | US/EU/UK/DACH | NDA-M |
| NDA one-way | US/EU/UK/DACH | NDA-OW |
| SOW | Any | SOW base |

### 3. Generate & Fill

Fill all [BRACKETED] placeholders. Flag missing data as "REQUIRED".

### 4. Convert to DOCX

```bash
# Install pandoc
brew install pandoc        # macOS
apt install pandoc         # Ubuntu

# Basic conversion
pandoc contract.md -o contract.docx \
  --reference-doc=reference.docx \
  -V geometry:margin=1in

# With numbered sections (legal style)
pandoc contract.md -o contract.docx \
  --number-sections \
  -V documentclass=article \
  -V fontsize=11pt

# With custom company template
pandoc contract.md -o contract.docx \
  --reference-doc=company-template.docx
```

---

## Jurisdiction Notes

### US (Delaware)
- Governing law: State of Delaware
- Work-for-hire doctrine applies (Copyright Act 101)
- Arbitration: AAA Commercial Rules
- Non-compete: enforceable with reasonable scope/time

### EU (GDPR)
- Must include Data Processing Addendum if handling personal data
- IP assignment requires separate written deed in some member states
- Arbitration: ICC or local chamber

### UK (post-Brexit)
- Governed by English law
- IP: Patents Act 1977 / CDPA 1988
- Arbitration: LCIA Rules
- Data: UK GDPR (post-Brexit equivalent)

### DACH (Germany / Austria / Switzerland)
- BGB (Buergerliches Gesetzbuch) governs contracts
- Written form requirement for certain clauses (para 126 BGB)
- IP: Author always retains moral rights; must explicitly transfer Nutzungsrechte
- Non-competes: max 2 years, compensation required (para 74 HGB)
- Jurisdiction: German courts (Landgericht) or DIS arbitration
- DSGVO (GDPR implementation) mandatory for personal data processing
- Kuendigungsfristen: statutory notice periods apply

---

## Template A: Web Dev Fixed-Price Contract

```markdown
# SOFTWARE DEVELOPMENT AGREEMENT

**Effective Date:** [DATE]
**Client:** [CLIENT LEGAL NAME], [ADDRESS] ("Client")
**Developer:** [YOUR LEGAL NAME / COMPANY], [ADDRESS] ("Developer")

---

## 1. SERVICES

Developer agrees to design, develop, and deliver:

**Project:** [PROJECT NAME]
**Description:** [1-3 sentence scope]

**Deliverables:**
- [Deliverable 1] due [DATE]
- [Deliverable 2] due [DATE]
- [Deliverable 3] due [DATE]

## 2. PAYMENT

**Total Fee:** [CURRENCY] [AMOUNT]

| Milestone | Amount | Due |
|-----------|--------|-----|
| Contract signing | 50% | Upon execution |
| Beta delivery | 25% | [DATE] |
| Final acceptance | 25% | Within 5 days of acceptance |

Late payments accrue interest at 1.5% per month.
Client has [10] business days to accept or reject deliverables in writing.

## 3. INTELLECTUAL PROPERTY

Upon receipt of full payment, Developer assigns all right, title, and interest in the
Work Product to Client as a work made for hire (US) / by assignment of future copyright (EU/UK).

Developer retains the right to display Work Product in portfolio unless Client
requests confidentiality in writing within [30] days of delivery.

Pre-existing IP (tools, libraries, frameworks) remains Developer's property.
Developer grants Client a perpetual, royalty-free license to use pre-existing IP
as embedded in the Work Product.

## 4. CONFIDENTIALITY

Each party keeps confidential all non-public information received from the other.
This obligation survives termination for [3] years.

## 5. WARRANTIES

Developer warrants Work Product will substantially conform to specifications for
[90] days post-delivery. Developer will fix material defects at no charge during
this period. EXCEPT AS STATED, WORK PRODUCT IS PROVIDED "AS IS."

## 6. LIABILITY

Developer's total liability shall not exceed total fees paid under this Agreement.
Neither party liable for indirect, incidental, or consequential damages.

## 7. TERMINATION

For Cause: Either party may terminate if the other materially breaches and fails
to cure within [14] days of written notice.

For Convenience: Client may terminate with [30] days written notice and pay for
all work completed plus [10%] of remaining contract value.

## 8. DISPUTE RESOLUTION

US: Binding arbitration under AAA Commercial Rules, [CITY], Delaware law.
EU/DACH: ICC / DIS arbitration, [CITY]. German / English law.
UK: LCIA Rules, London. English law.

## 9. GENERAL

- Entire Agreement: Supersedes all prior discussions.
- Amendments: Must be in writing, signed by both parties.
- Independent Contractor: Developer is not an employee of Client.

---

CLIENT: _________________________ Date: _________
[CLIENT NAME], [TITLE]

DEVELOPER: _________________________ Date: _________
[YOUR NAME], [TITLE]
```

---

## Template B: Monthly Consulting Retainer

```markdown
# CONSULTING RETAINER AGREEMENT

**Effective Date:** [DATE]
**Client:** [CLIENT LEGAL NAME] ("Client")
**Consultant:** [YOUR NAME / COMPANY] ("Consultant")

---

## 1. SERVICES

Consultant provides [DOMAIN, e.g., "CTO advisory and technical architecture"] services.

**Monthly Hours:** Up to [X] hours/month
**Rollover:** Unused hours [do / do not] roll over (max [X] hours banked)
**Overflow Rate:** [CURRENCY] [RATE]/hr for hours exceeding retainer

## 2. FEES

**Monthly Retainer:** [CURRENCY] [AMOUNT], due on the 1st of each month.
**Payment Method:** Bank transfer / Stripe / SEPA direct debit
**Late Payment:** 2% monthly interest after [10]-day grace period.

## 3. TERM AND TERMINATION

**Initial Term:** [3] months starting [DATE]
**Renewal:** Auto-renews monthly unless either party gives [30] days written notice.
**Immediate termination:** For material breach uncured after [7] days notice.

On termination, Consultant delivers all work in progress within [5] business days.

## 4. INTELLECTUAL PROPERTY

Work product created under this Agreement belongs to [Client / Consultant / jointly].
Advisory output (recommendations, analyses) are Client property upon full payment.

## 5. EXCLUSIVITY

[OPTION A - Non-exclusive:]
This Agreement is non-exclusive. Consultant may work with other clients.

[OPTION B - Partial exclusivity:]
Consultant will not work with direct competitors of Client during the term
and [90] days thereafter.

## 6. CONFIDENTIALITY AND DATA PROTECTION

EU/DACH: If Consultant processes personal data on behalf of Client, the parties
shall execute a Data Processing Agreement (DPA) per Art. 28 GDPR.

## 7. LIABILITY

Consultant's aggregate liability is capped at [3x] the fees paid in the [3] months
preceding the claim.

---

Signatures as above.
```

---

## Template C: SaaS Partnership Agreement

```markdown
# SAAS PARTNERSHIP AGREEMENT

**Effective Date:** [DATE]
**Provider:** [NAME], [ADDRESS]
**Partner:** [NAME], [ADDRESS]

---

## 1. PURPOSE

Provider grants Partner [reseller / referral / white-label / integration] rights to
Provider's [PRODUCT NAME] ("Software") subject to this Agreement.

## 2. PARTNERSHIP TYPE

[ ] Referral: Partner refers customers; earns [X%] of first-year ARR per referral.
[ ] Reseller: Partner resells licenses; earns [X%] discount off list price.
[ ] White-label: Partner rebrands Software; pays [AMOUNT]/month platform fee.
[ ] Integration: Partner integrates Software via API; terms in Exhibit A.

## 3. REVENUE SHARE

| Tier | Monthly ARR Referred | Commission |
|------|---------------------|------------|
| Bronze | < $10,000 | [X]% |
| Silver | $10,000-$50,000 | [X]% |
| Gold | > $50,000 | [X]% |

Payout: Net-30 after month close, minimum $[500] threshold.

## 4. INTELLECTUAL PROPERTY

Each party retains all IP in its own products. No implied licenses.
Partner may use Provider's marks per Provider's Brand Guidelines (Exhibit B).

## 5. DATA AND PRIVACY

Each party is an independent data controller for its own customers.
Joint processing requires a separate DPA (Exhibit C - EU/DACH projects).

## 6. TERM

Initial: [12] months. Renews annually unless [90]-day written notice given.
Termination for Cause: [30]-day cure period for material breach.

## 7. LIMITATION OF LIABILITY

Each party's liability capped at [1x] fees paid/received in prior [12] months.
Mutual indemnification for IP infringement claims from own products.

---

Signatures, exhibits, and governing law per applicable jurisdiction.
```

---

## GDPR Data Processing Addendum (EU/DACH Clause Block)

```markdown
## DATA PROCESSING ADDENDUM (Art. 28 GDPR)

Controller: [CLIENT NAME]
Processor: [CONTRACTOR NAME]

### Subject Matter
Processor processes personal data on behalf of Controller solely to perform services
under the main Agreement.

### Categories of Data Subjects
[e.g., end users, employees, customers]

### Categories of Personal Data
[e.g., names, email addresses, usage data]

### Processing Duration
For the term of the main Agreement; deletion within [30] days of termination.

### Processor Obligations
- Process data only on Controller's documented instructions
- Ensure persons authorized to process have committed to confidentiality
- Implement technical and organizational measures per Art. 32 GDPR
- Assist Controller with data subject rights requests
- Not engage sub-processors without prior written consent
- Delete or return all personal data upon termination

### Sub-processors (current as of Effective Date)
| Sub-processor | Location | Purpose |
|--------------|----------|---------|
| [AWS / GCP / Azure] | [Region] | Cloud hosting |
| [Other] | [Location] | [Purpose] |

### Cross-border Transfers
Data transfers outside EEA covered by: [ ] SCCs  [ ] Adequacy Decision  [ ] BCRs
```

---

## Common Pitfalls

1. **Missing IP assignment language** - "work for hire" alone is insufficient in EU; need explicit assignment of Nutzungsrechte in DACH
2. **Vague acceptance criteria** - Always define what "accepted" means (written sign-off, X days to reject)
3. **No change order process** - Scope creep kills fixed-price projects; add a clause for out-of-scope work
4. **Jurisdiction mismatch** - Choosing Delaware law for a German-only project creates enforcement problems
5. **Missing limitation of liability** - Without a cap, one bug could mean unlimited damages
6. **Oral amendments** - Contracts modified verbally are hard to enforce; always require written amendments

---

## Best Practices

- Use **milestone payments** over net-30 for projects >$10K - reduces cash flow risk
- For EU/DACH: always check if a DPA is needed (any personal data = yes)
- For DACH: include a **Schriftformklausel** (written form clause) explicitly
- Add a **force majeure** clause for anything over 3 months
- For retainers: define response time SLAs (e.g., 4h urgent / 24h normal)
- Keep templates in version control; track changes with `git diff`
- Review annually - laws change, especially GDPR enforcement interpretations
- For NDAs: always specify the return/destruction of confidential materials on termination
