---
name: "competitive-intel"
description_en: "Systematic competitor tracking that feeds CMO positioning, CRO battlecards, and CPO roadmap decisions. Use when analyzing competitors, building sales battlecards, tracking market moves, positioning against alternatives, or when user mentions competitive intelligence, competitive analysis, competitor research, battlecards, win/loss, or market positioning."
description_tr: "Rakip izlemeyi sistematikleştirin ve CMO konumlandırması, CRO battlecard'ları ve CPO roadmap kararlarını yönlendirin. Rakipleri analiz ederken, satış battlecard'ları oluştururken, pazar hareketlerini takip ederken, alternatifler karşısında konumlanırken ya da rekabetçi istihbarat, rakip analizi, battlecard'lar, win/loss ve pazar konumlandırması konularında kullanın."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18317
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/competitive-intel/SKILL.md"
path: ".gemini/skills/competitive-intel/SKILL.md"
is_collection: false
body_length: 7657
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Rekabetçi İstihbarat
  
  Sistematik rakip takibi. Takıntı değil — gerçek kararları yönlendiren istihbarat.
  
  ## Anahtar Kelimeler
  rekabetçi istihbarat, rakip analizi, battlecard, kazanma/kayıp analizi, rekabetçi konumlandırma, rekabetçi takibi, pazar istihbaratı, rakip araştırması, SWOT, rekabetçi harita, özellik boşluğu analizi, rekabetçi strateji
  
  ## Hızlı Başlangıç
  
  İhtiyaç duyduğunuz çıktı için doğal dilde sorun:
  
  > "Rekabetçi ortamımızı haritalandır" — doğrudan, dolaylı ve gelecekteki rakipler
  > "[Rakip] için bir battlecard oluştur" — satış için hazır battlecard
  > "Kazanma/kayıp analizi yap" — son kazanma ve kayıplar sebepleriyle
  > "[Rakip] son zamanlarda ne yaptı?" — rakip güncelleme takibi
  > "Bir rekabetçi konumlandırma haritası oluştur" — 2x2 konumlandırma haritası
  
  ## Çerçeve: 5 Katmanlı İstihbarat Sistemi
  
  ### Katman 1: Rakip Tanımlaması
  
  **Doğrudan rakipler:** Aynı ICP, aynı sorun, karşılaştırılabilir çözüm, benzer fiyat noktası.
  **Dolaylı rakipler:** Aynı bütçe, farklı çözüm (buna "hiçbir şey yapmamak" ve "kendi içinde geliştirmek" dahil).
  **Gelecekteki rakipler:** İyi finanse edilen startup'lar bitişik alanda; belirtilen roadmap örtüşmesi olan büyük yerleşik oyuncular.
  
  **2x2 Tehdit Matrisi:**
  
  | | Aynı ICP | Farklı ICP |
  |---|---|---|
  | **Aynı sorun** | Doğrudan tehdit | Bitişik (izle) |
  | **Farklı sorun** | Yer değiştirme riski | Şimdilik yoksay |
  
  Bunu üç ayda bir güncelleyin. Hangi şirketler kadranlarda hareket etti?
  
  ### Katman 2: Takip Boyutları
  
  Rakip başına bu 8 boyutu takip edin:
  
  | Boyut | Kaynaklar | Sıklık |
  |-----------|---------|---------|
  | **Ürün hamleleri** | Changelog, G2/Capterra yorumları, Twitter/LinkedIn | Aylık |
  | **Fiyatlandırma değişiklikleri** | Fiyatlandırma sayfası, satış çağrı istihbaratı, müşteri geri bildirimi | Tetikleme |
  | **Finansman** | Crunchbase, TechCrunch, LinkedIn | Tetikleme |
  | **İşe alım sinyalleri** | LinkedIn iş ilanları, Indeed | Aylık |
  | **Ortaklıklar** | Basın bültenleri, ortak pazarlama | Tetikleme |
  | **Müşteri kazanımları** | Vaka çalışmaları, inceleme siteleri, LinkedIn | Aylık |
  | **Müşteri kayıpları** | Kazanma/kayıp görüşmeleri, iptal edilen hesaplar | Devam eden |
  | **Mesajlaşma değişiklikleri** | Ana sayfa, reklamlar (Facebook/Google Ad Library) | Üç ayda bir |
  
  ### Katman 3: Analiz Çerçeveleri
  
  **Rakip Başına SWOT:**
  - Güçlü Yönler: Ne iyi yapıyorlar? Nerede kazanıyorlar?
  - Zayıf Yönler: Nerede kaybediyorlar? Müşteriler ne hakkında şikayet ediyor?
  - Fırsatlar: Seni tehdit edecek ne yapabilirler?
  - Tehditler: Onların varoluşsal riski nedir?
  
  **Rekabetçi Konumlandırma Haritası (2 eksen):**
  Alıcılarınız için önemli olan eksenleri seçin:
  - Yaygın: Fiyat vs Özellik Derinliği; Kurumsal hazır vs KOBİ hazır; Uygulanması kolay vs Yapılandırılabilir
  - SENİN farklılaşmanı net olarak gösteren eksenleri seç
  
  **Özellik Boşluğu Analizi:**
  | Özellik | Sen | Rakip A | Rakip B | Boşluk durumu |
  |---------|-----|-------------|-------------|------------|
  | [Özellik] | ✅ | ✅ | ❌ | Senin avantajın |
  | [Özellik] | ❌ | ✅ | ✅ | Boşluk — roadmap? |
  | [Özellik] | ✅ | ❌ | ❌ | Hendek |
  | [Özellik] | ❌ | ❌ | ✅ | Sadece Rakip B |
  
  ### Katman 4: Çıktı Formatları
  
  **Satış Için (CRO):** Battlecard'ler — rakip başına bir sayfa, arama öncesi hazırlık için tasarlanmış.
  Bkz. `templates/battlecard-template.md`
  
  **Pazarlama Için (CMO):** Konumlandırma güncellemesi — mesajlaşma değişiklikleri, yeni farklılaştırıcılar, durdurmak veya yapmaya başlamak için iddialar.
  
  **Ürün Için (CPO):** Özellik boşluğu özeti — müşterilerin sahip olmadığımız şey istediği, rakiplerin gönderdiği şey, yeniden öncelik verilecek şey.
  
  **CEO/Yönetim Kurulu Için:** Aylık rekabetçi özeti — 1 sayfa: kim hareket etti, ne anlama geldiği, önerilen yanıtlar.
  
  ### Katman 5: İstihbarat Temposu
  
  **Aylık (planlı):**
  - Tüm Katman 1 rakipleri gözden geçir (doğrudan tehditler, ilk 3)
  - Battlecard'ları yeni istihbaratla güncelle
  - Liderliğe 1 sayfalık özeti yayınla
  
  **Tetikleme (olay tabanlı):**
  - Rakip finansman alırsa → 48 saat içinde etkileri değerlendir
  - Rakip önemli özellik başlatırsa → ürün + satış yanıtı 1 hafta içinde
  - Rakip önemli müşteri işe alırsa → kazanma/kayıp görüşmesi 2 hafta içinde
  - Rakip fiyatlandırmayı değiştirirse → 1 hafta içinde analiz et ve yanıt ver
  
  **Üç ayda bir:**
  - Tam rekabetçi ortam incelemesi
  - Konumlandırma haritasını güncelle
  - ICP rekabetçi tehdit değerlendirmesini yenile
  - Takip listesinden şirket ekle/kaldır
  
  ---
  
  ## Kazanma/Kayıp Analizi
  
  Bu sahip olduğun en yüksek sinyal rekabetçi verisidir. Çoğu şirket bunu çok nadir yapıyor.
  
  **Ne zaman görüşme yapılmalı:**
  - Her kayıp anlaşma >50K ACV
  - Her iptal >6 ay müşteri süresi
  - Her rekabetçi kazanım (neden öğren — düşündüğün şey olmayabilir)
  
  **Kimin yürütüyü yapacağı:**
  - Anlaşmada çalışan AE DEĞİL (çok yakın, potansiyel müşteri samimi olmayacak)
  - Müşteri başarısı, ürün ekibi veya harici araştırmacı
  
  **Soru yapısı:**
  1. "Değerlendirme sürecinizi anlatın"
  2. "Başka kimi düşünüyordunuz?"
  3. "Kararınızda ilk 3 ölçüt neydi?"
  4. "[Ürünümüz] nerelerde yetersiz kaldı?"
  5. "Belirleyici faktör neydi?"
  6. "Ne sizin kararınızı değiştirirdi?"
  
  **Bulguları aylık olarak topla:**
  - Kazanma sebepleri (sıklığa göre sıralı)
  - Kayıp sebepleri (sıklığa göre sıralı)
  - Rakip kazanma oranları (rakip başına, segment başına)
  - Zaman içinde desenler
  
  ---
  
  ## Denge: Takıntı Olmadan İstihbarat
  
  **Rakipleri aşırı takip ettiğinin işaretleri:**
  - Roadmap kararları öncelikli olarak "onlar az önce X gönderdiler" tarafından yönlendirilir
  - Rakipler finansman aldığında ekip morali düşer
  - Onların kontrol listesiyle eşleştirmek için inanmadığın özellikleri gönderiyorsun
  - Fiyatlandırma tartışmaları her zaman "pekala, onlar X talep ediyor" ile başlar
  
  **Az takip ettiğinin işaretleri:**
  - AE'lerin aramalarda şaşırması
  - Potansiyel müşteriler rakipler hakkında ekibinden daha çok biliyor
  - Müşteriler sana söyleyene kadar önemli bir ürün lansmanı kaçırdın
  - Pazar hamleleri göz önüne alındığında konumlandıran 12+ ayda değişmedi
  
  **Doğru duruş:**
  - Rakipleri onlara karşı kazanmak için yeterince iyi tanı
  - Onların seni yönetmesine izin verme
  - Senin roadmap'in müşteri sorunları tarafından yönetiliyor, rekabetçi boşluklarla bilgilendirilmiş
  
  ---
  
  ## İstihbaratı Dağıtma
  
  | Kitle | Format | Sıklık | Sahibi |
  |----------|--------|---------|-------|
  | AE'ler + SDR'ler | CRM'de güncellenen battlecard'lar | Aylık + tetikleme | CRO |
  | Ürün | Özellik boşluğu analizi | Üç ayda bir | CPO |
  | Pazarlama | Konumlandırma özeti | Üç ayda bir | CMO |
  | Liderlik | 1 sayfalık rekabetçi özeti | Aylık | CEO/COO |
  | Yönetim Kurulu | Rekabetçi ortam slaydı | Üç ayda bir | CEO |
  
  **Tek gerçek kaynağı:** Tüm rekabetçi istihbarat bir yerde yaşıyor (Notion, Confluence, Salesforce). Slack'e özel dağıtımından kaçın — kaybolur.
  
  ---
  
  ## Rekabetçi İstihbaratta Kırmızı Bayraklar
  
  | Sinyal | Ne anlama geldiği |
  |--------|---------------|
  | Rakibin kazanma oranı >%50 senin temel segmentinde | Satış sorunu değil, temel konumlandırma sorunu |
  | 5+ anlaşmadan aynı itiraz: "rakip X'e sahip" | Gerçek, sadece görünüm değil, özellik boşluğu |
  | Rakip etki alanında 10 mühendis işe aldı | Büyük ürün yatırımı yaklaşıyor |
  | Rakip >20 milyon dolar yükseltip seni hedef alıyor | Onlar seni sert rekabet etmek için 12 aylık pist |
  | Potansiyel müşteriler seni rakip kararını haklı çıkarmak için değerlendiriyor | Sen "kontrol kutusu" — algıyı düzelt veya segment |
  
  ## C-Seviyesi Rolleriyle Entegrasyon
  
  | İstihbarat Tipi | Gönderir | Çıktı Formatı |
  |------------------|----------|---------------|
  | Ürün hamleleri | CPO | Roadmap girdisi, özellik boşluğu analizi |
  | Fiyatlandırma değişiklikleri | CRO, CFO | Fiyatlandırma yanıtı önerileri |
  | Finansman turlari | CEO, CFO | Stratejik konumlandırma güncellemesi |
  | İşe alım sinyalleri | CHRO, CTO | Yetenek pazar istihbaratı |
  | Müşteri kazanımları/kayıpları | CRO, CMO | Battlecard güncellemeleri, konumlandırma değişiklikleri |
  | Pazarlama kampanyaları | CMO | Karşı konumlandırma, kanal istihbaratı |
  
  ## Referanslar
  - `references/ci-playbook.md` — OSINT kaynakları, kazanma/kayıp çerçevesi, konumlandırma haritası oluşturma
  - `templates/battlecard-template.md` — satış battlecard şablonu
---

# Competitive Intelligence

Systematic competitor tracking. Not obsession — intelligence that drives real decisions.

## Keywords
competitive intelligence, competitor analysis, battlecard, win/loss analysis, competitive positioning, competitive tracking, market intelligence, competitor research, SWOT, competitive map, feature gap analysis, competitive strategy

## Quick Start

Ask in natural language for the deliverable you need:

> "Map our competitive landscape" — direct, indirect, and future competitors
> "Build a battlecard for [competitor]" — sales-ready battlecard
> "Run a win/loss analysis" — recent wins and losses by reason
> "What did [competitor] do recently?" — competitor update tracking
> "Build a competitive positioning map" — 2x2 positioning map

## Framework: 5-Layer Intelligence System

### Layer 1: Competitor Identification

**Direct competitors:** Same ICP, same problem, comparable solution, similar price point.
**Indirect competitors:** Same budget, different solution (including "do nothing" and "build in-house").
**Future competitors:** Well-funded startups in adjacent space; large incumbents with stated roadmap overlap.

**The 2x2 Threat Matrix:**

| | Same ICP | Different ICP |
|---|---|---|
| **Same problem** | Direct threat | Adjacent (watch) |
| **Different problem** | Displacement risk | Ignore for now |

Update this quarterly. Who's moved quadrants?

### Layer 2: Tracking Dimensions

Track these 8 dimensions per competitor:

| Dimension | Sources | Cadence |
|-----------|---------|---------|
| **Product moves** | Changelog, G2/Capterra reviews, Twitter/LinkedIn | Monthly |
| **Pricing changes** | Pricing page, sales call intel, customer feedback | Triggered |
| **Funding** | Crunchbase, TechCrunch, LinkedIn | Triggered |
| **Hiring signals** | LinkedIn job postings, Indeed | Monthly |
| **Partnerships** | Press releases, co-marketing | Triggered |
| **Customer wins** | Case studies, review sites, LinkedIn | Monthly |
| **Customer losses** | Win/loss interviews, churned accounts | Ongoing |
| **Messaging shifts** | Homepage, ads (Facebook/Google Ad Library) | Quarterly |

### Layer 3: Analysis Frameworks

**SWOT per Competitor:**
- Strengths: What do they do well? Where do they win?
- Weaknesses: Where do they lose? What do customers complain about?
- Opportunities: What could they do that would threaten you?
- Threats: What's their existential risk?

**Competitive Positioning Map (2 axis):**
Choose axes that matter for your buyers:
- Common: Price vs Feature Depth; Enterprise-ready vs SMB-ready; Easy to implement vs Configurable
- Pick axes that show YOUR differentiation clearly

**Feature Gap Analysis:**
| Feature | You | Competitor A | Competitor B | Gap status |
|---------|-----|-------------|-------------|------------|
| [Feature] | ✅ | ✅ | ❌ | Your advantage |
| [Feature] | ❌ | ✅ | ✅ | Gap — roadmap? |
| [Feature] | ✅ | ❌ | ❌ | Moat |
| [Feature] | ❌ | ❌ | ✅ | Competitor B only |

### Layer 4: Output Formats

**For Sales (CRO):** Battlecards — one page per competitor, designed for pre-call prep.
See `templates/battlecard-template.md`

**For Marketing (CMO):** Positioning update — message shifts, new differentiators, claims to stop or start making.

**For Product (CPO):** Feature gap summary — what customers ask for that we don't have, what competitors ship, what to reprioritize.

**For CEO/Board:** Monthly competitive summary — 1-page: who moved, what it means, recommended responses.

### Layer 5: Intelligence Cadence

**Monthly (scheduled):**
- Review all tier-1 competitors (direct threats, top 3)
- Update battlecards with new intel
- Publish 1-page summary to leadership

**Triggered (event-based):**
- Competitor raises funding → assess implications within 48 hours
- Competitor launches major feature → product + sales response within 1 week
- Competitor poaches key customer → win/loss interview within 2 weeks
- Competitor changes pricing → analyze and respond within 1 week

**Quarterly:**
- Full competitive landscape review
- Update positioning map
- Refresh ICP competitive threat assessment
- Add/remove companies from tracking list

---

## Win/Loss Analysis

This is the highest-signal competitive data you have. Most companies do it too rarely.

**When to interview:**
- Every lost deal >$50K ACV
- Every churn >6 months tenure
- Every competitive win (learn why — it may not be what you think)

**Who conducts it:**
- NOT the AE who worked the deal (too close, prospect won't be candid)
- Customer success, product team, or external researcher

**Question structure:**
1. "Walk me through your evaluation process"
2. "Who else were you considering?"
3. "What were the top 3 criteria in your decision?"
4. "Where did [our product] fall short?"
5. "What was the deciding factor?"
6. "What would have changed your decision?"

**Aggregate findings monthly:**
- Win reasons (rank by frequency)
- Loss reasons (rank by frequency)
- Competitor win rates (by competitor, by segment)
- Patterns over time

---

## The Balance: Intelligence Without Obsession

**Signs you're over-tracking competitors:**
- Roadmap decisions are primarily driven by "they just shipped X"
- Team morale drops when competitors fundraise
- You're shipping features you don't believe in to match their checklist
- Pricing discussions always start with "well, they charge X"

**Signs you're under-tracking:**
- Your AEs get blindsided on calls
- Prospects know more about competitors than your team does
- You missed a major product launch until customers told you
- Your positioning hasn't changed in 12+ months despite market moves

**The right posture:**
- Know competitors well enough to win against them
- Don't let them set your agenda
- Your roadmap is led by customer problems, informed by competitive gaps

---

## Distributing Intelligence

| Audience | Format | Cadence | Owner |
|----------|--------|---------|-------|
| AEs + SDRs | Updated battlecards in CRM | Monthly + triggered | CRO |
| Product | Feature gap analysis | Quarterly | CPO |
| Marketing | Positioning brief | Quarterly | CMO |
| Leadership | 1-page competitive summary | Monthly | CEO/COO |
| Board | Competitive landscape slide | Quarterly | CEO |

**One source of truth:** All competitive intel lives in one place (Notion, Confluence, Salesforce). Avoid Slack-only distribution — it disappears.

---

## Red Flags in Competitive Intelligence

| Signal | What it means |
|--------|---------------|
| Competitor's win rate >50% in your core segment | Fundamental positioning problem, not sales problem |
| Same objection from 5+ deals: "competitor has X" | Feature gap that's real, not just optics |
| Competitor hired 10 engineers in your domain | Major product investment incoming |
| Competitor raised >$20M and targets your ICP | 12-month runway for them to compete hard |
| Prospects evaluate you to justify competitor decision | You're the "check box" — fix perception or segment |

## Integration with C-Suite Roles

| Intelligence Type | Feeds To | Output Format |
|------------------|----------|---------------|
| Product moves | CPO | Roadmap input, feature gap analysis |
| Pricing changes | CRO, CFO | Pricing response recommendations |
| Funding rounds | CEO, CFO | Strategic positioning update |
| Hiring signals | CHRO, CTO | Talent market intelligence |
| Customer wins/losses | CRO, CMO | Battlecard updates, positioning shifts |
| Marketing campaigns | CMO | Counter-positioning, channel intelligence |

## References
- `references/ci-playbook.md` — OSINT sources, win/loss framework, positioning map construction
- `templates/battlecard-template.md` — sales battlecard template
