---
name: "board-deck-builder"
description_en: "Assembles comprehensive board and investor update decks by pulling perspectives from all C-suite roles. Use when preparing board meetings, investor updates, quarterly business reviews, or fundraising narratives. Covers structure, narrative framework, bad news delivery, and common mistakes."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/board-deck-builder/SKILL.md"
path: ".gemini/skills/board-deck-builder/SKILL.md"
is_collection: false
body_length: 6857
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Board Deck Builder

  Bir hikaye anlatan board deck'ler oluşturun — sadece veri göstermeyin. Her bölümün sahibi, bir anlatısı ve bir "neden önemli" vardır.

  ## Anahtar Sözcükler
  board deck, yatırımcı güncellemesi, board toplantısı, board paketi, yatırımcı ilişkileri, üç aylık inceleme, board sunumu, fundraising deck'i, yatırımcı deck'i, board anlatısı, QBR, üç aylık işletme incelemesi

  ## Hızlı Başlangıç

  ```
  /board-deck [quarterly|monthly|fundraising] [stage: seed|seriesA|seriesB]
  ```

  Mevcut metrikler sağlayın. Builder boşlukları açık yer tutucularla doldurur — asla sayı uydurulmaz.

  ## Deck Yapısı (Standart Sıra)

  Her bölüm şu şekilde ilerler: **Başlık → Veri → Anlatı → İstek/Sonraki Adım**

  ### 1. Executive Summary (CEO)
  **3 cümle. Daha fazla değil.**
  - Cümle 1: İşletmenin durumu (nerede olduğumuz)
  - Cümle 2: Bu dönemde olan en büyük şey
  - Cümle 3: Sonraki çeyreğe nereye gideceğimiz

  *Kötü:* "İyi bir çeyrek geçirdik ve tüm alanlarda pek çok ilerleme yaptık."
  *İyi:* "Q3'ü $2.4M ARR'de kapattık (+22% QoQ), en büyük kurumsal sözleşmeyi imzaladık ve Q4'e 14 aylık runway ile girdik. Mid-market'e stratejik kayış işe yarıyor — ACV %40 arttı ve satış döngüsü 3 hafta kısaldı. Q4 önceliği: $3M Series A'yı kapat ve $2.8M ARR'ye ulaş."

  ### 2. Key Metrics Dashboard (COO)
  **Maksimum 6-8 metrik. Tablo kullanın.**

  | Metrik | Bu Dönem | Geçen Dönem | Hedef | Durum |
  |--------|----------|-------------|--------|--------|
  | ARR | $2.4M | $1.97M | $2.3M | ✅ |
  | MoM büyüme | 8.1% | 7.2% | 7.5% | ✅ |
  | Burn multiple | 1.8x | 2.1x | <2x | ✅ |
  | NRR | 112% | 108% | >110% | ✅ |
  | CAC payback | 11 ay | 14 ay | <12 ay | ✅ |
  | Headcount | 24 | 21 | 25 | 🟡 |

  Board'un gerçekten takip ettiği metrikleri seçin. Önemsiz olmadığını söyledikleri her şeyi değiştirin.

  ### 3. Financial Update (CFO)
  - P&L özeti: Revenue, COGS, Gross margin, OpEx, Net burn
  - Cash pozisyonu ve runway (aylar)
  - Burn multiple trendi (3 çeyrek görüntüsü)
  - Plana göre fark (ne farklıydı ve neden)
  - Sonraki çeyrek için tahmin güncellemesi

  **Her farka bir cümle.** Board'lar "revenue hedefin altında kaldı" açıklaması olmadan nefret eder. Nedenini söyleyin.

  ### 4. Revenue & Pipeline (CRO)
  - ARR waterfall: başlangıç → yeni → expansion → churn → son
  - NRR ve logo churn oranları
  - Pipeline aşamaya göre (sayı değil $)
  - Tahmin: güven seviyesi ile sonraki çeyrek
  - Top 3 deal: ad/miktar/kapanış tarihi/risk

  **Tahmin güven seviyesi olmalıdır.** "$2.8M bekleniyorum" zayıftır. "Yüksek güven $2.6M, iki geç aşama deal kapalı olursa $2.9M'ye kadar potansiyel" yararlıdır.

  ### 5. Product Update (CPO)
  - Bu çeyrek sevk edilen: 3-5 bullet, her biri için kullanıcı etkisi
  - Sonraki çeyrek sevk edilen: hedef tarihler ile 3-5 bullet
  - PMF signali: NPS trendi, DAU/MAU oranı, feature adoption
  - Müşteri araştırmasından bir temel öğrenme

  **Feature listesi yok.** Yalnızca kullanıcı etkisinin kanıtı olan featureler.

  ### 6. Growth & Marketing (CMO)
  - Kanala göre CAC (tablo)
  - Kanala göre pipeline katkısı ($)
  - Stage'e ilgili brand/awareness metrikleri (traffic, share of voice)
  - Neyin işe yaradığı, neyin kesildiği, neyin test edildiği

  ### 7. Engineering & Technical (CTO)
  - Delivery velocity trendi (son 4 çeyrek)
  - Tech debt oranı ve planı
  - Infrastructure: uptime, olaylar, maliyet trendi
  - Security posture (bir satır, beklemede olan her şeyi işaretle)

  **Bu bölümü kısa tutun; önemli bir sorun yoksa.** Board'lar sprint detaylarına ihtiyaç duymaz.

  ### 8. Team & People (CHRO)
  - Headcount: gerçek vs plan
  - Hiring: offer out, pipeline, time-to-fill trendi
  - Attrition: pişman edici vs pişman etmeyen
  - Engagement: son anket skoru, trend
  - Bu çeyrekten temel işe alımlar, açık temel roller

  ### 9. Risk & Security (CISO)
  - Security posture: kritik kontrollerin durumu
  - Compliance: devam eden sertifikasyonlar, son tarihler
  - Bu çeyrekten olaylar (varsa): etki, çözüm, önleme
  - Top 3 risk ve azaltma durumu

  ### 10. Strategic Outlook (CEO)
  - Sonraki çeyrek öncelikleri: 3-5 öğe, sıralanmış
  - Board'dan gerekli olan önemli kararlar
  - İstekler: bütçe, tanıştırmalar, tavsiye, oylar

  **"istekler" slide'ı en önemli olanıdır.** Spesifik olun. "Series B şirketlerindeki CFO'larla 3 sıcak tanışmaya istiyoruz" "herhangi bir yardım takdir edilecektir" tarafından daha iyidir.

  ### 11. Appendix
  - Detaylı finansal model
  - Tam pipeline veri
  - Cohort retention grafikleri
  - Müşteri case study'leri
  - Detaylı headcount dökümü

  ---

  ## Narrative Framework

  Board'lar çeyrek başına 10+ deck görür. Sizin bir akış hattı olması gerekir.

  **4-Bölümlü Yapı:**
  1. **Olacağını söylediğimiz yer** (geçen çeyreğin hedefleri)
  2. **Gerçekten nerede olduğumuz** (dürüst değerlendirme)
  3. **Boşluğun neden var olduğu** (bahaneler değil, fark başına bir neden)
  4. **Bununla ilgili ne yapıyoruz** (spesifik, tarihli eylemler)

  Bu iyi haberler VE kötü haberler için işe yarar. Gerçekliği kabul ettiği için güvenilirdir.

  **Açılış çerçevesi:** En önemli şey ile başlayın — board slide 3'te anahtarı bilmeli, slide 30'da değil.

  ---

  ## Kötü Haberleri Vermek

  Asla gizlemeyin. Board'lar sonunda öğrenir. Geç öğrenmek daha kötüdür.

  **Framework:**
  1. **Açıkça belirt** — "Q3 ARR hedefini $300K (12% boşluk) ile kaçırdık"
  2. **Sebebine sahip ol** — "Birincil etken kurumsal segmentin beklenenden uzun satış döngüsü idi"
  3. **Anladığını göster** — "8 kaybettiğimiz/durmuş deal analiz ettik; pattern X"
  4. **Düzeltmeyi sun** — "3 değişiklik yaptık: [spesifik, tarihli değişiklikler]"
  5. **Tahmini güncelle** — "Revize Q4 hedefi $2.6M; işte bottom-up build"

  **Ne yapmamalısınız:**
  - Kötü haberi hafifletmek için iyi haberle başlamayın — board'lar ve çerçevelemeye güvenmez
  - Sahiplenme olmadan açıklamayın — "pazar koşulları" sebep değil, bağlam
  - Veri olmadan düzeltme sunmayın
  - Varsayımlarını göstermeden revize tahmin sunmayın

  ---

  ## Genel Board Deck Hataları

  | Hata | Çözüm |
  |---------|--------|
  | Çok fazla slide (>25) | Acımasızca kesin — odada açıklamıyorsan slide yanlış |
  | Hedefsiz metrikler | Her metriğin hedefi ve durumu olmalı |
  | Hiçbir anlatı | Board'ları kendi sonuçlarına çizmesi gereken veri hikayesiz |
  | Kötü haberi gizlemek | Bunu öncü yer, sahiplen, onarır |
  | Muğlak istekler | Yalnızca spesifik, işlem yapılabilir, kişi atanmış istekler |
  | Fark açıklaması yok | Hedeften her boşluğun tek cümle sebebi vardır |
  | Eski appendix | Appendix yalnızca güncelleyse kullanışlı |
  | Okuyucu için tasarımlamak, oda için değil | Deck'ler sunulur — sesli söylenebilir |

  ---

  ## Cadence Notları

  **Üç aylık (standart):** Tam deck, tüm bölümler, 20-30 slide. 48 saat öncesinde gönderilmiş.
  **Aylık (erken aşama için):** Özet — metrik panosu, finansal, pipeline, üst riskler. 8-12 slide.
  **Fundraising:** Market/vision ile açılır, istek ile kapatılır. Sequoia formatı için `references/deck-frameworks.md` bölümüne bakın.

  ## Referanslar
  - `references/deck-frameworks.md` — SaaS board pack formatı, Sequoia yapısı, yatırımcı özelleştirmesi
  - `templates/board-deck-template.md` — tam board deck'ler için doldurun şablonu
---

# Board Deck Builder

Build board decks that tell a story — not just show data. Every section has an owner, a narrative, and a "so what."

## Keywords
board deck, investor update, board meeting, board pack, investor relations, quarterly review, board presentation, fundraising deck, investor deck, board narrative, QBR, quarterly business review

## Quick Start

```
/board-deck [quarterly|monthly|fundraising] [stage: seed|seriesA|seriesB]
```

Provide available metrics. The builder fills gaps with explicit placeholders — never invents numbers.

## Deck Structure (Standard Order)

Every section follows: **Headline → Data → Narrative → Ask/Next**

### 1. Executive Summary (CEO)
**3 sentences. No more.**
- Sentence 1: State of the business (where we are)
- Sentence 2: Biggest thing that happened this period
- Sentence 3: Where we're going next quarter

*Bad:* "We had a good quarter with lots of progress across all areas."
*Good:* "We closed Q3 at $2.4M ARR (+22% QoQ), signed our largest enterprise contract, and enter Q4 with 14-month runway. The strategic shift to mid-market is working — ACV up 40% and sales cycle down 3 weeks. Q4 priority: close the $3M Series A and hit $2.8M ARR."

### 2. Key Metrics Dashboard (COO)
**6-8 metrics max. Use a table.**

| Metric | This Period | Last Period | Target | Status |
|--------|-------------|-------------|--------|--------|
| ARR | $2.4M | $1.97M | $2.3M | ✅ |
| MoM growth | 8.1% | 7.2% | 7.5% | ✅ |
| Burn multiple | 1.8x | 2.1x | <2x | ✅ |
| NRR | 112% | 108% | >110% | ✅ |
| CAC payback | 11 months | 14 months | <12 months | ✅ |
| Headcount | 24 | 21 | 25 | 🟡 |

Pick metrics the board actually tracks. Swap out anything they've said they don't care about.

### 3. Financial Update (CFO)
- P&L summary: Revenue, COGS, Gross margin, OpEx, Net burn
- Cash position and runway (months)
- Burn multiple trend (3-quarter view)
- Variance to plan (what was different and why)
- Forecast update for next quarter

**One sentence on each variance.** Boards hate "revenue was below target" with no explanation. Say why.

### 4. Revenue & Pipeline (CRO)
- ARR waterfall: starting → new → expansion → churn → ending
- NRR and logo churn rates
- Pipeline by stage (in $, not just count)
- Forecast: next quarter with confidence level
- Top 3 deals: name/amount/close date/risk

**The forecast must have a confidence level.** "We expect $2.8M" is weak. "High confidence $2.6M, upside to $2.9M if two late-stage deals close" is useful.

### 5. Product Update (CPO)
- Shipped this quarter: 3-5 bullets, user impact for each
- Shipping next quarter: 3-5 bullets with target dates
- PMF signal: NPS trend, DAU/MAU ratio, feature adoption
- One key learning from customer research

**No feature lists.** Only features with evidence of user impact.

### 6. Growth & Marketing (CMO)
- CAC by channel (table)
- Pipeline contribution by channel ($)
- Brand/awareness metrics relevant to stage (traffic, share of voice)
- What's working, what's being cut, what's being tested

### 7. Engineering & Technical (CTO)
- Delivery velocity trend (last 4 quarters)
- Tech debt ratio and plan
- Infrastructure: uptime, incidents, cost trend
- Security posture (one line, flag anything pending)

**Keep this short unless there's a material issue.** Boards don't need sprint details.

### 8. Team & People (CHRO)
- Headcount: actual vs plan
- Hiring: offers out, pipeline, time-to-fill trend
- Attrition: regrettable vs non-regrettable
- Engagement: last survey score, trend
- Key hires this quarter, key open roles

### 9. Risk & Security (CISO)
- Security posture: status of critical controls
- Compliance: certifications in progress, deadlines
- Incidents this quarter (if any): impact, resolution, prevention
- Top 3 risks and mitigation status

### 10. Strategic Outlook (CEO)
- Next quarter priorities: 3-5 items, ranked
- Key decisions needed from the board
- Asks: budget, introductions, advice, votes

**The "asks" slide is the most important.** Be specific. "We'd like 3 warm introductions to CFOs at Series B companies" beats "any help would be appreciated."

### 11. Appendix
- Detailed financial model
- Full pipeline data
- Cohort retention charts
- Customer case studies
- Detailed headcount breakdown

---

## Narrative Framework

Boards see 10+ decks per quarter. Yours needs a through-line.

**The 4-Act Structure:**
1. **Where we said we'd be** (last quarter's targets)
2. **Where we actually are** (honest assessment)
3. **Why the gap exists** (one cause per variance, not excuses)
4. **What we're doing about it** (specific, dated actions)

This works for good news AND bad news. It's credible because it acknowledges reality.

**Opening frame:** Start with the one thing that matters most — the board should know the key message by slide 3, not slide 30.

---

## Delivering Bad News

Never bury it. Boards find out eventually. Finding out late makes it worse.

**Framework:**
1. **State it plainly** — "We missed Q3 ARR target by $300K (12% gap)"
2. **Own the cause** — "Primary driver was longer-than-expected sales cycle in enterprise segment"
3. **Show you understand it** — "We analyzed 8 lost/stalled deals; the pattern is X"
4. **Present the fix** — "We've made 3 changes: [specific, dated changes]"
5. **Update the forecast** — "Revised Q4 target is $2.6M; here's the bottom-up build"

**What NOT to do:**
- Don't lead with good news to soften bad news — boards notice and distrust the framing
- Don't explain without owning — "market conditions" is not a cause, it's a context
- Don't present a fix without data behind it
- Don't show a revised forecast without showing your assumptions

---

## Common Board Deck Mistakes

| Mistake | Fix |
|---------|-----|
| Too many slides (>25) | Cut ruthlessly — if you can't explain it in the room, the slide is wrong |
| Metrics without targets | Every metric needs a target and a status |
| No narrative | Data without story forces boards to draw their own conclusions |
| Burying bad news | Lead with it, own it, fix it |
| Vague asks | Specific, actionable, person-assigned asks only |
| No variance explanation | Every gap from target needs one-sentence cause |
| Stale appendix | Appendix is only useful if it's current |
| Designing for the reader, not the room | Decks are presented — they must work spoken aloud |

---

## Cadence Notes

**Quarterly (standard):** Full deck, all sections, 20-30 slides. Sent 48 hours in advance.
**Monthly (for early-stage):** Condensed — metrics dashboard, financials, pipeline, top risks. 8-12 slides.
**Fundraising:** Opens with market/vision, closes with ask. See `references/deck-frameworks.md` for Sequoia format.

## References
- `references/deck-frameworks.md` — SaaS board pack format, Sequoia structure, investor tailoring
- `templates/board-deck-template.md` — fill-in template for complete board decks
