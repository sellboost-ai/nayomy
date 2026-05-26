---
name: "competitive-ads-extractor"
description_en: "Extracts and analyzes competitors' ads from ad libraries (Facebook, LinkedIn, etc.) to understand what messaging, problems, and creative approaches are working. Helps inspire and improve your own ad campaigns."
description_tr: "Reklamcıların kütüphanelerinden (Facebook, LinkedIn vb.) rakiplerin reklamlarını çıkartarak analiz eder ve hangi mesajlaşma, problem çözümleri ve yaratıcı yaklaşımların başarılı olduğunu anlamanıza yardımcı olur. Kendi reklam kampanyalarınızı geliştirmek için ilham ve fikir sunur."
category: "Development"
repo: "ComposioHQ/awesome-claude-skills"
stars: 61753
url: "https://github.com/ComposioHQ/awesome-claude-skills/blob/HEAD/competitive-ads-extractor/SKILL.md"
path: "competitive-ads-extractor/SKILL.md"
is_collection: false
body_length: 7576
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Rekabet Halindeki Reklamlar Çıkarıcısı

  Bu beceri, rakiplerinizin reklam kütüphanelerinden reklamlarını çıkarır ve neyin işe yaradığını analiz eder—vurguladıkları sorunlar, hedefledikleri kullanım durumları ve rezonan olan kopya/yaratıcı içerik.

  ## Bu Beceriyi Ne Zaman Kullanacaksınız

  - Rakip reklam stratejilerini araştırma
  - Kendi reklamlarınız için ilham bulma
  - Pazar konumlandırmasını anlama
  - Başarılı reklam kalıplarını belirleme
  - İşe yarayan mesajlaşmayı analiz etme
  - Yeni kullanım durumları veya ağrı noktaları keşfetme
  - Kanıtlanmış kavramlarla reklam kampanyaları planlama

  ## Bu Beceri Ne Yapar

  1. **Reklamları Çıkarır**: Facebook Ad Library, LinkedIn vb. kaynaklardan reklamları kazır.
  2. **Ekran Görüntüleri Yakalar**: Tüm reklamların görsel kopyalarını kaydeder
  3. **Mesajlaşmayı Analiz Eder**: Sorunları, kullanım durumlarını ve değer önerilerini belirler
  4. **Reklamları Kategorize Eder**: Tema, hedef kitle veya formata göre gruplandırır
  5. **Kalıpları Belirler**: Yaygın başarılı yaklaşımları bulur
  6. **İçgörüler Sağlar**: Belirli reklamların neden iyi performans gösterebileceğini açıklar

  ## Nasıl Kullanacaksınız

  ### Temel Çıkarma

  ```
  [Rakip Adı]'nın Facebook Ad Library'deki tüm güncel reklamlarını çıkar
  ```

  ```
  [Şirket]'tan reklamları kaz ve mesajlaşmalarını analiz et
  ```

  ### Spesifik Analiz

  ```
  [Rakip]'ten [spesifik sorun] hakkındaki mesajlaşmaya odaklanarak
  tüm reklamları al. Hangi ağrı noktalarını vurguluyorlar?
  ```

  ### Rekabet Seti

  ```
  Bu 5 rakipten reklamları çıkar: [liste]. 
  Yaklaşımlarını karşılaştır ve neyin işe yaradığını söyle.
  ```

  ### Spesifik Platform

  ```
  [Rakip]'ten LinkedIn reklamlarını al ve onların 
  B2B konumlandırma stratejisini analiz et
  ```

  ## Örnek

  **Kullanıcı**: "Notion'ın Facebook Ad Library'deki reklamlarını çıkar ve onların için neyin işe yaradığını söyle."

  **İşlem**:
  ```
  Facebook Ad Library'ye erişiliyor...
  Arama: Notion
  Bulunan: 23 aktif reklam

  Ekran görüntüleri çıkarılıyor...
  [████████████████████] 100%

  Kaydedildi: competitor-ads/notion/
  - ad-001-collaboration.png
  - ad-002-productivity.png
  - ad-003-templates.png
  ...

  Mesajlaşma analiz ediliyor...
  ```

  **Çıktı**:
  ```
  # Notion Reklam Analizi

  ## Genel Bakış
  - Toplam Reklam: 23 aktif
  - Birincil Temalar: Verimlilik (%35), İşbirliği (%30), 
    Şablonlar (%20), AI Özellikleri (%15)
  - Reklam Formatları: Statik görüntüler (%60), Video (%40)
  - CTA Desenleri: "Ücretsiz dene", "Başla"

  ## Vurguladıkları Temel Sorunlar

  1. **Dağınık Bilgiler** (8 reklam)
     Kopya: "10 farklı araç arasında geçişi durdur"
     Neden işe yaradığı: Birçok ekibin karşılaştığı doğrudan ağrı noktası

  2. **Toplantı Aşırılığı** (5 reklam)
     Kopya: "Gereksiz toplantıları asenkron güncellemelerle değiştir"
     Neden işe yaradığı: COVID sonrası uzaktan çalışma ağrı noktası

  3. **Kayıp Belgeler** (4 reklam)
     Kopya: "Bir daha 'bu döküman nerede?' diye sorma"
     Neden işe yaradığı: Evrensel işyeri hayal kırıklığı

  ## Başarılı Yaratıcı Kalıpları

  ### Kalıp 1: Önce/Sonra Bölünmesi
  - Kaotik araç ortamı → Temiz Notion çalışma alanı
  - 6 yüksek performanslı reklamda kullanıldı
  - Görsel metafor hemen anlaşılır

  ### Kalıp 2: Özellik Vitrin
  - Gerçek ürün kullanımının GIF'i
  - 5 saniyede belirli özellik gösterir
  - Yeni özellikler için kullanıldı (AI, şablonlar)

  ### Kalıp 3: Sosyal Kanıt
  - "20M kullanıcıya katıl" mesajlaşması
  - Müşteri logoları
  - Kurumsal hedef kitleyi hedefleyen 4 reklamda kullanıldı

  ## İşe Yarayan Kopya

  En İyi Başlıklar:
  1. "Ekibinizin bilgisi, sonunda tek bir yerde"
     → Fayda odaklı, ağrı noktasını doğrudan ele alır
     
  2. "Hepsi bir arada çalışma alanı"
     → Açık konumlandırma, geniş çekicilik
     
  3. "Gerçekten çalışmanıza yardımcı olan AI"
     → AI şüpheciliğini ele alır, pratik açı

  En İyi Gövde Kopya Desenleri:
  - Kısa cümleler (10 kelimeden az)
  - Özellikleri değil sonuçlara odaklan
  - Spesifik numaralar içer ("Toplantıları %50 azalt")

  ## Hedef Kitle Konumlandırması İçgörüleri

  Reklam varyasyonlarına dayanarak:
  - Startup kurucuları: Kişisel verimlilik açısı
  - Takım liderleri: İşbirliği ve hizalama
  - Kurumsal: Güvenlik ve uyum bahisleri
  - Öğrenciler: Ücretsiz plan, şablonlar, organizasyon

  ## Reklamlarınız İçin Öneriler

  1. **"Araç çokluk" ağrı noktasını test et**
     → Reklam frekansına dayanarak güçlü rezonans

  2. **Soyut görseller yerine ürün ekran görüntüleri kullan**
     → Tüm en iyi reklamları gerçek UI gösterir

  3. **Çözümü değil sorunu vurgula**
     → "X'ten bıktın mı?" "Y Tanıtılıyor" çok daha iyi performans gösterir

  4. **Kopyayı 100 karakterin altında tut**
     → En kısa reklamları en sık görünen gibi görünüyor

  5. **Önce/sonra görsel formatlarını test et**
     → Yaratıcı içeriklerinde kanıtlanmış kalıp

  ## Kaydedilen Dosyalar
  - Tüm reklamlar: ~/competitor-ads/notion/
  - Analiz: ~/competitor-ads/notion/analysis.md
  - En iyi performanslılar: ~/competitor-ads/notion/top-10/
  ```

  **İlhamı alındığı kaynak:** Sumant Subrahmanya'nın Lenny's Newsletter'dan kullanım durumu

  ## Neler Öğrenebilirsiniz

  ### Mesajlaşma Analizi
  - Hangi sorunları vurguluyorlar
  - Rekabete karşı nasıl konumlandırırlar
  - Rezonan olan değer önerileri
  - Hedef kitle segmentleri

  ### Yaratıcı Kalıpları
  - İşe yarayan görsel stilller
  - Video vs. statik görüntü performansı
  - Renk şemaları ve marka kullanımı
  - Düzen desenleri

  ### Kopya Formülleri
  - Başlık yapıları
  - Call-to-action desenleri
  - Uzunluk ve ton
  - Duygusal tetikleyiciler

  ### Kampanya Stratejisi
  - Mevsimsel kampanyalar
  - Ürün lansmanı yaklaşımları
  - Özellik duyurusu taktikleri
  - Retargeting desenleri

  ## En İyi Uygulamalar

  ### Yasal ve Etik
  ✓ Yalnızca araştırma ve ilham için kullan
  ✓ Reklamları doğrudan kopyalama
  ✓ Fikri mülkiyete saygı göster
  ✓ Orijinal yaratıcı içerik oluşturmak için içgörüler kullan
  ✗ Kopya veya tasarımları çalma

  ### Analiz İpuçları
  1. **Kalıpları arayın**: Hangi temalar tekrarlanır?
  2. **Zamanla izleyin**: Evrim görmek için aylık reklamları kaydet
  3. **Hipotezleri test et**: Başarılı desenleri marka için uyarla
  4. **Hedef kitleye göre segmente et**: Farklı hedefler için farklı mesajlar
  5. **Platformları karşılaştır**: LinkedIn vs Facebook mesajlaşması farklılık gösterir

  ## Gelişmiş Özellikler

  ### Trend İzleme
  ```
  [Rakip]'in Q1 vs Q2 reklamlarını karşılaştır. 
  Mesajlaşma nasıl değişti?
  ```

  ### Çoklu Rakip Analizi
  ```
  [Şirket A], [Şirket B], [Şirket C]'den reklamları çıkar. 
  Ortak kalıpları nelerdir? Farkları nelerdir?
  ```

  ### Endüstri Kriterleri
  ```
  En iyi 10 proje yönetim aracı arasında reklam kalıplarını göster. 
  Tümü hangi sorunlara odaklanır?
  ```

  ### Format Analizi
  ```
  [Rakip]'ten video reklamları vs statik görüntü reklamlarını analiz et. 
  Hangisi daha fazla katılım alır? (veri varsa)
  ```

  ## Yaygın İş Akışları

  ### Reklam Kampanyası Planlama
  1. Rakip reklamlarını çıkar
  2. Başarılı kalıpları belirle
  3. Mesajlaşmadaki boşlukları not et
  4. Benzersiz açılar için beyin fırtınası yap
  5. Test reklam varyasyonları taslağını oluştur

  ### Konumlandırma Araştırması
  1. 5 rakipten reklamları al
  2. Konumlandırmalarını haritala
  3. Hizmet vermeyen açıları bul
  4. Farklılaştırılmış mesajlaşma geliştir
  5. Yaklaşımlarına karşı test et

  ### Yaratıcı İlham
  1. Reklamları temaya göre çıkar
  2. Görsel kalıpları analiz et
  3. Renk ve düzen eğilimlerini not et
  4. Başarılı desenleri uyarla
  5. Orijinal varyasyonlar oluştur

  ## Başarı İpuçları

  1. **Düzenli İzleme**: Değişiklikleri görmek için aylık kontrol et
  2. **Geniş Araştırma**: Komşu rakipleri de araştır
  3. **Her Şeyi Kaydet**: Referans kütüphanesi oluştur
  4. **İçgörüleri Test Et**: Kendi deneylerini çalıştır
  5. **Performansı İzle**: İlham verilen kavramları A/B test et
  6. **Orijinal Kal**: Kopya değil ilham için kullan
  7. **Çoklu Platformlar**: Facebook, LinkedIn, TikTok vb. karşılaştır

  ## Çıktı Formatları

  - **Ekran Görüntüleri**: Tüm reklamlar görüntü olarak kaydedilir
  - **Analiz Raporu**: İçgörülerin Markdown özeti
  - **Elektronik Tablo**: Reklam kopyası, CTA'lar, temalar içeren CSV
  - **Sunum**: En iyi performanslıların görsel paketi
  - **Kalıp Kütüphanesi**: Yaklaşıma göre kategorize edilmiş

  ## İlgili Kullanım Durumları

  - Kampanyalarınız için daha iyi reklam kopyası yazma
  - Pazar konumlandırmasını anlama
  - Mesajlaşmanızda içerik boşluklarını bulma
  - Ürününüz için yeni kullanım durumları keşfetme
  - Ürün pazarlama stratejisini planlama
  - Sosyal medya içeriğinden ilham alma
---

# Competitive Ads Extractor

This skill extracts your competitors' ads from ad libraries and analyzes what's working—the problems they're highlighting, use cases they're targeting, and copy/creative that's resonating.

## When to Use This Skill

- Researching competitor ad strategies
- Finding inspiration for your own ads
- Understanding market positioning
- Identifying successful ad patterns
- Analyzing messaging that works
- Discovering new use cases or pain points
- Planning ad campaigns with proven concepts

## What This Skill Does

1. **Extracts Ads**: Scrapes ads from Facebook Ad Library, LinkedIn, etc.
2. **Captures Screenshots**: Saves visual copies of all ads
3. **Analyzes Messaging**: Identifies problems, use cases, and value props
4. **Categorizes Ads**: Groups by theme, audience, or format
5. **Identifies Patterns**: Finds common successful approaches
6. **Provides Insights**: Explains why certain ads likely perform well

## How to Use

### Basic Extraction

```
Extract all current ads from [Competitor Name] on Facebook Ad Library
```

```
Scrape ads from [Company] and analyze their messaging
```

### Specific Analysis

```
Get all ads from [Competitor] focusing on their messaging 
about [specific problem]. What pain points are they highlighting?
```

### Competitive Set

```
Extract ads from these 5 competitors: [list]. 
Compare their approaches and tell me what's working.
```

### Specific Platform

```
Get LinkedIn ads from [Competitor] and analyze their 
B2B positioning strategy
```

## Example

**User**: "Extract ads from Notion on Facebook Ad Library and tell me what messaging is working for them."

**Process**:
```
Accessing Facebook Ad Library...
Searching for: Notion
Found: 23 active ads

Extracting screenshots...
[████████████████████] 100%

Saved to: competitor-ads/notion/
- ad-001-collaboration.png
- ad-002-productivity.png
- ad-003-templates.png
...

Analyzing messaging...
```

**Output**:
```
# Notion Ad Analysis

## Overview
- Total Ads: 23 active
- Primary Themes: Productivity (35%), Collaboration (30%), 
  Templates (20%), AI Features (15%)
- Ad Formats: Static images (60%), Video (40%)
- CTA Patterns: "Try for free", "Get started"

## Key Problems They're Highlighting

1. **Scattered Information** (8 ads)
   Copy: "Stop switching between 10 different tools"
   Why it works: Direct pain point many teams face

2. **Meeting Overload** (5 ads)
   Copy: "Replace unnecessary meetings with async updates"
   Why it works: Post-COVID remote work pain point

3. **Lost Documentation** (4 ads)
   Copy: "Never ask 'where is that doc?' again"
   Why it works: Universal workplace frustration

## Successful Creative Patterns

### Pattern 1: Before/After Split
- Shows chaotic tool landscape → Clean Notion workspace
- Used in 6 high-performing ads
- Visual metaphor is immediately clear

### Pattern 2: Feature Showcase
- GIF of actual product usage
- Shows specific feature in 5 seconds
- Used for new features (AI, templates)

### Pattern 3: Social Proof
- "Join 20M users" messaging
- Customer logos
- Used in 4 ads targeting enterprise

## Copy That's Working

Best Headlines:
1. "Your team's knowledge, finally in one place"
   → Benefit-focused, addresses pain directly
   
2. "The all-in-one workspace"
   → Clear positioning, broad appeal
   
3. "AI that actually helps you work"
   → Addresses AI skepticism, practical angle

Best Body Copy Patterns:
- Short sentences (under 10 words)
- Focus on outcomes not features
- Include specific numbers ("Cut meetings by 50%")

## Audience Targeting Insights

Based on ad variations:
- Startup founders: Solo productivity angle
- Team leads: Collaboration and alignment
- Enterprise: Security and compliance mentions
- Students: Free plan, templates, organization

## Recommendations for Your Ads

1. **Test the "tool sprawl" pain point**
   → Strong resonance based on their ad frequency

2. **Use product screenshots over abstract visuals**
   → All their top ads show actual UI

3. **Lead with the problem, not the solution**
   → "Tired of X?" performs better than "Introducing Y"

4. **Keep copy under 100 characters**
   → Their shortest ads seem most frequent

5. **Test before/after visual formats**
   → Proven pattern in their creative

## Files Saved
- All ads: ~/competitor-ads/notion/
- Analysis: ~/competitor-ads/notion/analysis.md
- Best performers: ~/competitor-ads/notion/top-10/
```

**Inspired by:** Sumant Subrahmanya's use case from Lenny's Newsletter

## What You Can Learn

### Messaging Analysis
- What problems they emphasize
- How they position against competition
- Value propositions that resonate
- Target audience segments

### Creative Patterns
- Visual styles that work
- Video vs. static image performance
- Color schemes and branding
- Layout patterns

### Copy Formulas
- Headline structures
- Call-to-action patterns
- Length and tone
- Emotional triggers

### Campaign Strategy
- Seasonal campaigns
- Product launch approaches
- Feature announcement tactics
- Retargeting patterns

## Best Practices

### Legal & Ethical
✓ Only use for research and inspiration
✓ Don't copy ads directly
✓ Respect intellectual property
✓ Use insights to inform original creative
✗ Don't plagiarize copy or steal designs

### Analysis Tips
1. **Look for patterns**: What themes repeat?
2. **Track over time**: Save ads monthly to see evolution
3. **Test hypotheses**: Adapt successful patterns for your brand
4. **Segment by audience**: Different messages for different targets
5. **Compare platforms**: LinkedIn vs Facebook messaging differs

## Advanced Features

### Trend Tracking
```
Compare [Competitor]'s ads from Q1 vs Q2. 
What messaging has changed?
```

### Multi-Competitor Analysis
```
Extract ads from [Company A], [Company B], [Company C]. 
What are the common patterns? Where do they differ?
```

### Industry Benchmarks
```
Show me ad patterns across the top 10 project management 
tools. What problems do they all focus on?
```

### Format Analysis
```
Analyze video ads vs static image ads from [Competitor]. 
Which gets more engagement? (if data available)
```

## Common Workflows

### Ad Campaign Planning
1. Extract competitor ads
2. Identify successful patterns
3. Note gaps in their messaging
4. Brainstorm unique angles
5. Draft test ad variations

### Positioning Research
1. Get ads from 5 competitors
2. Map their positioning
3. Find underserved angles
4. Develop differentiated messaging
5. Test against their approaches

### Creative Inspiration
1. Extract ads by theme
2. Analyze visual patterns
3. Note color and layout trends
4. Adapt successful patterns
5. Create original variations

## Tips for Success

1. **Regular Monitoring**: Check monthly for changes
2. **Broad Research**: Look at adjacent competitors too
3. **Save Everything**: Build a reference library
4. **Test Insights**: Run your own experiments
5. **Track Performance**: A/B test inspired concepts
6. **Stay Original**: Use for inspiration, not copying
7. **Multiple Platforms**: Compare Facebook, LinkedIn, TikTok, etc.

## Output Formats

- **Screenshots**: All ads saved as images
- **Analysis Report**: Markdown summary of insights
- **Spreadsheet**: CSV with ad copy, CTAs, themes
- **Presentation**: Visual deck of top performers
- **Pattern Library**: Categorized by approach

## Related Use Cases

- Writing better ad copy for your campaigns
- Understanding market positioning
- Finding content gaps in your messaging
- Discovering new use cases for your product
- Planning product marketing strategy
- Inspiring social media content
