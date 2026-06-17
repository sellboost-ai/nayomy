---
name: "competitive-teardown"
description_en: "Analyzes competitor products and companies by synthesizing data from pricing pages, app store reviews, job postings, SEO signals, and social media into structured competitive intelligence. Produces feature comparison matrices scored across 12 dimensions, SWOT analyses, positioning maps, UX audits, pricing model breakdowns, action item roadmaps, and stakeholder presentation templates. Use when cond"
description_tr: "Fiyatlandırma sayfaları, uygulama mağazası yorumları, iş ilanları, SEO sinyalleri ve sosyal medya verilerini sentezleyerek rakip ürünleri ve şirketleri analiz eder. 12 boyutta puanlanan özellik karşılaştırma matrisleri, SWOT analizleri, konumlandırma haritaları, UX denemeleri, fiyatlandırma modeli detaylandırmaları, aksiyon planları ve paydaş sunum şablonları üretir."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18313
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/competitive-teardown/SKILL.md"
path: ".gemini/skills/competitive-teardown/SKILL.md"
is_collection: false
body_length: 7601
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Rekabetçi Analiz
  
  **Seviye:** GÜÇLÜ  
  **Kategori:** Ürün Ekibi  
  **Alan:** Rekabetçi İstihbarat, Ürün Stratejisi, Pazar Analizi
  
  ---
  
  ## Kullanım Zamanları
  
  - Bir ürün stratejisi veya yol haritası oturumundan önce
  - Bir rakip büyük bir özellik veya fiyatlandırma değişikliği başlattığında
  - Üç aylık rekabetçi inceleme
  - Savaş kartı verilerine ihtiyaç duyduğunuz bir satış sunumundan önce
  - Yeni bir pazar segmentine girdiğinizde
  
  ---
  
  ## Analiz İş Akışı
  
  Eksiksiz bir analiz üretmek için şu adımları sırasıyla izleyin:
  
  1. **Rakipleri tanımlayın** — Analiz etmek için 2–4 rakip listeleyin. Birincil odağın hangisi olduğunu onaylayın.
  2. **Veri toplayın** — Ham sinyalleri her rakip için en az 3 kaynaktan (web sitesi, incelemeler, iş ilanları, SEO, sosyal medya) toplamak için `references/data-collection-guide.md` kullanın.  
     _Doğrulama kontrol noktası: Devam etmeden önce fiyatlandırma verilerine, en az 20 incelemeye ve her rakip için iş ilanı sayılarına sahip olduğunuzu onaylayın._
  3. **Rubrik kullanarak puanlayın** — Aşağıdaki 12 boyutlu rubriği uygulayarak her rakip ve kendi ürününüz için sayısal bir puan kartı oluşturun.  
     _Doğrulama kontrol noktası: Her boyutun bir puanı ve en az bir destekleyici kanıt notu olmalıdır._
  4. **Çıktılar oluşturun** — `references/analysis-templates.md` içindeki şablonları doldurun (Özellik Matrisi, Fiyatlandırma Analizi, SWOT, Konumlandırma Haritası, UX Denetimi).
  5. **Eylem planı oluşturun** — Bulguları Eylem Öğeleri şablonuna çevirin (hızlı kazançlar / orta vadeli / stratejik).
  6. **Paydaşlar için hazırlayın** — 3–5. adımlardan elde edilen çıktıları kullanarak Paydaş Sunumunu birleştirin.
  
  ---
  
  ## Veri Toplama Rehberi
  
  > Her kaynak için tam çalıştırılabilir komut dosyaları `references/data-collection-guide.md` içindedir. Aşağıda nelerin yakalanacağının özeti vardır.
  
  ### 1. Web Sitesi Analizi
  
  Yakalanacak önemli şeyler:
  - Fiyatlandırma katmanları ve fiyat noktaları
  - Katman başına özellik listeleri
  - Birincil CTA ve mesajlaşma
  - Örnek çalışmalar / müşteri logoları (ICP sinyalleri)
  - Entegrasyon logoları
  - Güven sinyalleri (sertifikalar, uyum rozetleri)
  
  ### 2. Uygulama Mağazası İncelemeleri
  
  İnceleme duygu kategorileri:
  - **Övgü** → kullanıcıların sevdiği şeyler (savunun / güçlendirin)
  - **Özellik istekleri** → karşılanmamış ihtiyaçlar (fırsat boşlukları)
  - **Hatalar** → kalite sinyalleri
  - **UX şikayetleri** → onları yeneceğiniz sürtünme noktaları
  
  **Örnek Uygulama Mağazası sorgusu (iTunes Search API):**
  ```
  GET https://itunes.apple.com/search?term=<competitor_name>&entity=software&limit=1
  # trackId'yi çıkartın, sonra:
  GET https://itunes.apple.com/rss/customerreviews/id=<trackId>/sortBy=mostRecent/json?l=en&limit=50
  ```
  İnceleme metni için `entry[].content.label` ve yıldız derecelendirmesi için `entry[].im:rating.label` ayrıştırın.
  
  ### 3. İş İlanları (Ekip Büyüklüğü ve Teknoloji Yığını Sinyalleri)
  
  İş ilanlarından sinyaller:
  - **Mühendislik hacmi** → ölçeklendirme vs. konsolidasyonu
  - **Spesifik teknoloji anlatımları** → yığın (React/Vue, Postgres/Mongo, AWS/GCP)
  - **Satış/Müşteri Hizmetleri oranı** → ürün liderliğine karşı satış liderliği hareketi
  - **Veri/ML rolleri** → gelecekteki yapay zeka özellikleri
  - **Uyum rolleri** → düzenleyici genişleme
  
  ### 4. SEO Analizi
  
  Yakalanacak SEO sinyalleri:
  - En iyi 20 organik anahtar kelime (niyet: bilgisel / navigasyonel / ticari)
  - Alan Yetkilisi / arka bağlantı sayısı
  - Blog yayın sıklığı ve konuları
  - Hangi sayfaların sıralaması olduğu (ürün sayfaları vs. blog vs. dokümanlar)
  
  ### 5. Sosyal Medya Duyarlılığı
  
  Twitter/X API v2, Reddit veya LinkedIn aracılığıyla son anlatımları yakalayın. Yinelenen övgü, şikayetler ve özellik isteklerini arayın. API sorgu örnekleri için `references/data-collection-guide.md` bölümüne bakın.
  
  ---
  
  ## Puanlama Rubriği (12 Boyut, 1-5)
  
  | # | Boyut | 1 (Zayıf) | 3 (Orta) | 5 (Sınıf En İyi) |
  |---|-----------|----------|-------------|-------------------|
  | 1 | **Özellikler** | Sadece çekirdek, birçok boşluk | Güçlü kapsam | Kapsamlı + eşsiz |
  | 2 | **Fiyatlandırma** | Kafa karıştırıcı / fazla fiyatlandırılmış | Pazar oranı, net | Şeffaf, esnek, adil |
  | 3 | **UX** | Kafa karıştırıcı, yüksek sürtünme | İşlevsel | Hoş, minimum sürtünme |
  | 4 | **Performans** | Yavaş, güvenilmez | Kabul edilebilir | Hızlı, yüksek çalışma süresi |
  | 5 | **Dokümanlar** | Sınırlı, eski | Düzgün kapsam | Kapsamlı, aranabilir |
  | 6 | **Destek** | Yalnızca e-posta, yavaş | Sohbet + e-posta | 24/7, harika yanıt |
  | 7 | **Entegrasyonlar** | 0-5 entegrasyon | 6-25 | 26+ veya derin ekosistem |
  | 8 | **Güvenlik** | Hiç anlatılmayan | SOC2 iddiası | SOC2 Tip II, ISO 27001 |
  | 9 | **Ölçeklenebilirlik** | Kurumsal katman yok | Orta pazar hazır | Kurumsal seviye |
  | 10 | **Marka** | Genel, unutulmaz değil | Düzgün konumlandırma | Güçlü, farklılaştırılmış |
  | 11 | **Topluluk** | Yok | Forum / Slack | Aktif, canlı topluluk |
  | 12 | **İnovasyon** | Son yayınlar yok | Üç aylık | Sık, anlamlı |
  
  **Örnek tamamlanan satır** (Rakip: Acme Corp, Boyut 3 – UX):
  
  | Boyut | Acme Corp Puanı | Kanıt |
  |-----------|----------------|---------|
  | UX | 2 | Uygulama Mağazası incelemeleri "kafa karıştırıcı navigasyon"dan bahseder (38 belirtme); onboarding TTFV'den önce 7 adım gerektirir; onboarding sihirbazı yok; kaydolmada kredi kartı gerekli. |
  
  Bu deseni her rakip için tüm 12 boyuta uygulayın.
  
  ---
  
  ## Şablonlar
  
  > Tam şablon markdown `references/analysis-templates.md` içindedir. Aşağıda kısaltılmış referans vardır.
  
  ### Özellik Karşılaştırma Matrisi
  
  Satırlar: çekirdek özellikler, fiyatlandırma katmanları, platform yetenekleri (web, iOS, Android, API).  
  Sütunlar: ürününüz + 3 adede kadar rakip.  
  Her hücreyi 1–5 arasında puanlayın. Toplamı 60'tan çıkartın.  
  **Puan efsanesi:** 5=Sınıf en iyi, 4=Güçlü, 3=Orta, 2=Ortalamanın altında, 1=Zayıf/Eksik
  
  ### Fiyatlandırma Analizi
  
  Rakip başına yakalayın: model türü (kişi başı / kullanım tabanlı / sabit oran / ücretsiz), giriş/orta/kurumsal fiyat noktaları, ücretsiz deneme uzunluğu.  
  Özetleyin: fiyat lideri, değer lideri, premium konumlandırma, konumunuz ve 2–3 fiyatlandırma fırsat madde.
  
  ### SWOT Analizi
  
  Her rakip için: Güçlü Yönler, Zayıf Yönler, Bizim için Fırsatlar, Bize karşı Tehditler başına 3–5 madde. Her maddeyi bir veri sinyaline (inceleme alıntısı, iş ilanı sayısı, fiyatlandırma sayfası, vb.) bağlayın.
  
  ### Konumlandırma Haritası
  
  2x2 eksenler (örn., Basit ↔ Karmaşık / Düşük Değer ↔ Yüksek Değer). Her rakibi ve ürününüzü yerleştirin. Kabarcık boyutu = pazar payı veya finansman. ASCII ve düzenlenebilir sürümler için `references/analysis-templates.md` bölümüne bakın.
  
  ### UX Denetim Kontrol Listesi
  
  Onboarding: TTFV (dakika), aktivasyona kadar adımlar, kredi kartı gerekli, onboarding sihirbazı kalitesi.  
  Ana iş akışları: adımlar, sürtünme noktaları, karşılaştırmalı puan (sizinki vs. onlarınki).  
  Mobil: iOS/Android derecelendirmeler, özellik parity'si, en iyi şikayet ve övgü.  
  Navigasyon: genel arama, klavye kısayolları, uygulama içi yardım.
  
  ### Eylem Öğeleri
  
  | Ufuk | Çaba | Örnekler |
  |---------|--------|---------|
  | Hızlı kazançlar (0–4 hafta) | Düşük | İnceleme rozetleri ekleyin, karşılaştırma açılış sayfası yayımlayın |
  | Orta vadeli (1–3 ay) | Orta | Ücretsiz katman başlatın, onboarding TTFV'yi iyileştirin, en iyi istenen entegrasyonu ekleyin |
  | Stratejik (3–12 ay) | Yüksek | Yeni pazara girin, API v2'yi oluşturun, SOC2 Tip II'yi elde edin |
  
  ### Paydaş Sunumu (7 slayt)
  
  1. **Yönetici Özeti** — Tehdit seviyesi (DÜŞÜK/ORTA/YÜKSEK/KRİTİK), en iyi güçlü yön, en iyi fırsat, önerilen eylem
  2. **Pazar Konumu** — 2x2 konumlandırma haritası
  3. **Özellik Puan Kartı** — 12 boyutlu radar veya tablo, toplam puanlar
  4. **Fiyatlandırma Analizi** — Karşılaştırma tablosu + önemli bulgu
  5. **UX Vurgular** — Daha iyi yaptıkları (3 madde) vs. kazandığımız yerler (3 madde)
  6. **Müşteri Sesi** — En iyi 3 inceleme şikayeti (alıntı veya parafraze)
  7. **Bizim Eylem Planımız** — Hızlı kazançlar, orta vadeli, stratejik öncelikler; Ham veriler içeren ek
  
  ## İlişkili Beceriler
  
  - **Ürün Stratejisti** (`product-team/product-strategist/`) — Rekabetçi içgörüler OKR ve strateji planlamasını besler
  - **Açılış Sayfası Oluşturucu** (`product-team/landing-page-generator/`) — Rekabetçi konumlandırma açılış sayfası mesajlaşmasını bilgilendirir
---

# Competitive Teardown

**Tier:** POWERFUL  
**Category:** Product Team  
**Domain:** Competitive Intelligence, Product Strategy, Market Analysis

---

## When to Use

- Before a product strategy or roadmap session
- When a competitor launches a major feature or pricing change
- Quarterly competitive review
- Before a sales pitch where you need battle card data
- When entering a new market segment

---

## Teardown Workflow

Follow these steps in sequence to produce a complete teardown:

1. **Define competitors** — List 2–4 competitors to analyze. Confirm which is the primary focus.
2. **Collect data** — Use `references/data-collection-guide.md` to gather raw signals from at least 3 sources per competitor (website, reviews, job postings, SEO, social).  
   _Validation checkpoint: Before proceeding, confirm you have pricing data, at least 20 reviews, and job posting counts for each competitor._
3. **Score using rubric** — Apply the 12-dimension rubric below to produce a numeric scorecard for each competitor and your own product.  
   _Validation checkpoint: Every dimension should have a score and at least one supporting evidence note._
4. **Generate outputs** — Populate the templates in `references/analysis-templates.md` (Feature Matrix, Pricing Analysis, SWOT, Positioning Map, UX Audit).
5. **Build action plan** — Translate findings into the Action Items template (quick wins / medium-term / strategic).
6. **Package for stakeholders** — Assemble the Stakeholder Presentation using outputs from steps 3–5.

---

## Data Collection Guide

> Full executable scripts for each source are in `references/data-collection-guide.md`. Summaries of what to capture are below.

### 1. Website Analysis

Key things to capture:
- Pricing tiers and price points
- Feature lists per tier
- Primary CTA and messaging
- Case studies / customer logos (signals ICP)
- Integration logos
- Trust signals (certifications, compliance badges)

### 2. App Store Reviews

Review sentiment categories:
- **Praise** → what users love (defend / strengthen these)
- **Feature requests** → unmet needs (opportunity gaps)
- **Bugs** → quality signals
- **UX complaints** → friction points you can beat them on

**Sample App Store query (iTunes Search API):**
```
GET https://itunes.apple.com/search?term=<competitor_name>&entity=software&limit=1
# Extract trackId, then:
GET https://itunes.apple.com/rss/customerreviews/id=<trackId>/sortBy=mostRecent/json?l=en&limit=50
```
Parse `entry[].content.label` for review text and `entry[].im:rating.label` for star rating.

### 3. Job Postings (Team Size & Tech Stack Signals)

Signals from job postings:
- **Engineering volume** → scaling vs. consolidating
- **Specific tech mentions** → stack (React/Vue, Postgres/Mongo, AWS/GCP)
- **Sales/CS ratio** → product-led vs. sales-led motion
- **Data/ML roles** → upcoming AI features
- **Compliance roles** → regulatory expansion

### 4. SEO Analysis

SEO signals to capture:
- Top 20 organic keywords (intent: informational / navigational / commercial)
- Domain Authority / backlink count
- Blog publishing cadence and topics
- Which pages rank (product pages vs. blog vs. docs)

### 5. Social Media Sentiment

Capture recent mentions via Twitter/X API v2, Reddit, or LinkedIn. Look for recurring praise, complaints, and feature requests. See `references/data-collection-guide.md` for API query examples.

---

## Scoring Rubric (12 Dimensions, 1-5)

| # | Dimension | 1 (Weak) | 3 (Average) | 5 (Best-in-class) |
|---|-----------|----------|-------------|-------------------|
| 1 | **Features** | Core only, many gaps | Solid coverage | Comprehensive + unique |
| 2 | **Pricing** | Confusing / overpriced | Market-rate, clear | Transparent, flexible, fair |
| 3 | **UX** | Confusing, high friction | Functional | Delightful, minimal friction |
| 4 | **Performance** | Slow, unreliable | Acceptable | Fast, high uptime |
| 5 | **Docs** | Sparse, outdated | Decent coverage | Comprehensive, searchable |
| 6 | **Support** | Email only, slow | Chat + email | 24/7, great response |
| 7 | **Integrations** | 0-5 integrations | 6-25 | 26+ or deep ecosystem |
| 8 | **Security** | No mentions | SOC2 claimed | SOC2 Type II, ISO 27001 |
| 9 | **Scalability** | No enterprise tier | Mid-market ready | Enterprise-grade |
| 10 | **Brand** | Generic, unmemorable | Decent positioning | Strong, differentiated |
| 11 | **Community** | None | Forum / Slack | Active, vibrant community |
| 12 | **Innovation** | No recent releases | Quarterly | Frequent, meaningful |

**Example completed row** (Competitor: Acme Corp, Dimension 3 – UX):

| Dimension | Acme Corp Score | Evidence |
|-----------|----------------|---------|
| UX | 2 | App Store reviews cite "confusing navigation" (38 mentions); onboarding requires 7 steps before TTFV; no onboarding wizard; CC required at signup. |

Apply this pattern to all 12 dimensions for each competitor.

---

## Templates

> Full template markdown is in `references/analysis-templates.md`. Abbreviated reference below.

### Feature Comparison Matrix

Rows: core features, pricing tiers, platform capabilities (web, iOS, Android, API).  
Columns: your product + up to 3 competitors.  
Score each cell 1–5. Sum to get total out of 60.  
**Score legend:** 5=Best-in-class, 4=Strong, 3=Average, 2=Below average, 1=Weak/Missing

### Pricing Analysis

Capture per competitor: model type (per-seat / usage-based / flat rate / freemium), entry/mid/enterprise price points, free trial length.  
Summarize: price leader, value leader, premium positioning, your position, and 2–3 pricing opportunity bullets.

### SWOT Analysis

For each competitor: 3–5 bullets per quadrant (Strengths, Weaknesses, Opportunities for us, Threats to us). Anchor every bullet to a data signal (review quote, job posting count, pricing page, etc.).

### Positioning Map

2x2 axes (e.g., Simple ↔ Complex / Low Value ↔ High Value). Place each competitor and your product. Bubble size = market share or funding. See `references/analysis-templates.md` for ASCII and editable versions.

### UX Audit Checklist

Onboarding: TTFV (minutes), steps to activation, CC-required, onboarding wizard quality.  
Key workflows: steps, friction points, comparative score (yours vs. theirs).  
Mobile: iOS/Android ratings, feature parity, top complaint and praise.  
Navigation: global search, keyboard shortcuts, in-app help.

### Action Items

| Horizon | Effort | Examples |
|---------|--------|---------|
| Quick wins (0–4 wks) | Low | Add review badges, publish comparison landing page |
| Medium-term (1–3 mo) | Moderate | Launch free tier, improve onboarding TTFV, add top-requested integration |
| Strategic (3–12 mo) | High | Enter new market, build API v2, achieve SOC2 Type II |

### Stakeholder Presentation (7 slides)

1. **Executive Summary** — Threat level (LOW/MEDIUM/HIGH/CRITICAL), top strength, top opportunity, recommended action
2. **Market Position** — 2x2 positioning map
3. **Feature Scorecard** — 12-dimension radar or table, total scores
4. **Pricing Analysis** — Comparison table + key insight
5. **UX Highlights** — What they do better (3 bullets) vs. where we win (3 bullets)
6. **Voice of Customer** — Top 3 review complaints (quoted or paraphrased)
7. **Our Action Plan** — Quick wins, medium-term, strategic priorities; Appendix with raw data

## Related Skills

- **Product Strategist** (`product-team/product-strategist/`) — Competitive insights feed OKR and strategy planning
- **Landing Page Generator** (`product-team/landing-page-generator/`) — Competitive positioning informs landing page messaging
