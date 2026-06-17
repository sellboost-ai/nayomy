---
name: "commercial-skills"
description_en: "Use when reviewing, approving, or designing commercial motion — pricing models, deal review, discount approval, partnership economics, channel mix, commercial policy, RFP/RFI response, bookings forecast. Triggers on \"review this deal\", \"should we discount\", \"pricing model\", \"partner economics\", \"RFP response\", \"bookings forecast\", \"channel mix\". Forks context to route to one of seven Commercial su"
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18313
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/commercial-skills/SKILL.md"
path: ".gemini/skills/commercial-skills/SKILL.md"
is_collection: false
body_length: 8214
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Ticari — Domain Orchestrator
  
  Ticari surface, **anlaşma başına ekonomi ve paketleme** konusudur: şirketin fiyatlandırması, paketlemesi, onaylaması ve gelir tahmini nasıl yapıyor. Bu orchestrator bağlamını böler, sorgunuzu yedi alt-skill'den birine yönlendirir, ardından bir özet döndürür. Ağır giriş (RFP PDF'leri, pipeline export'ları, ortak anlaşmaları) bölünmüş bağlamda kalır.
  
  ## Çağırma zamanı
  
  | Belirti | Alt-skill |
  |---|---|
  | "Anlaşmaları fiyattan kaybediyoruz — fiyat düşürmeli mi yoksa yeniden paketlemeli mi?" | `pricing-strategist` |
  | "Bu Enterprise anlaşmada %40 indirim onaylayabilir miyiz?" | `deal-desk` |
  | "Bu distribütörle imza atmalı mıyız? Seviyesi ne?" | `partnerships-architect` |
  | "Ortak kanalımız gerçekten kârlı mı?" | `channel-economics` |
  | "Standart indirim matrisimiz nasıl görünmeli?" | `commercial-policy` |
  | "Bu 60 sayfalık RFP'ye yanıt vermeye yardım et" | `rfp-responder` |
  | "Mevcut dönüşümde Q4 bookings tahmini nedir?" | `commercial-forecaster` |
  
  ## Yönlendirme mantığı (deterministik)
  
  `business-operations-skills` ile aynı iki sinyal eşiği deseni. Tek sinyal → açıklayıcı soru. Karışık sinyaller → en yüksek güven önce, zincir ikinci sırada sonraki turda.
  
  ### Sinyal tablosu
  
  | Sinyal sınıfı | Anahtar kelimeler | Alt-skill |
  |---|---|---|
  | **PRICING** | pricing, price, packaging, tier, WTP, willingness to pay, Van Westendorp, value pricing | `pricing-strategist` |
  | **DEAL** | deal, discount, approval, margin, T&Cs, redline, exception, MSA | `deal-desk` |
  | **PARTNERSHIP** | partner, reseller, OEM, co-sell, joint GTM, revenue share, channel agreement | `partnerships-architect` |
  | **CHANNEL_ECON** | channel mix, cost to serve, channel ROI, direct vs partner, channel economics | `channel-economics` |
  | **POLICY** | commercial policy, discount matrix, T&C library, exception policy, deal framework | `commercial-policy` |
  | **RFP** | RFP, RFI, RFQ, proposal request, vendor questionnaire, security questionnaire | `rfp-responder` |
  | **FORECAST** | forecast, bookings, billings, ARR, NRR forecast, pipeline math, funnel projection | `commercial-forecaster` |
  
  ## İş akışı (Matt Pocock grill disiplini)
  
  Matt Pocock'un `grill-with-docs` deseninden türetilmiştir: **keşfet-sonra-sor, turda bir soru ve önerilen cevap, karar ağacını derinlik-önce yürü, bağımlılıkları izle, her zorluğu SaaS fiyatlandırması / deal desk kanonunda sabitle** (`references/`).
  
  ### Adım 1 — Sormadan önce keşfet
  
  Kullanıcının çalışma dizinini önce kontrol et:
  - Çalışma alanında zaten bir deal kaydı, fiyatlandırma karşılaştırma tablosu, RFP belgesi veya pipeline export'u var mı?
  - Sorgu zaten şeridi ayrıştırıyor mu? (ör. "bu 60 sayfalık RFP'yi gözden geçir" — bu `rfp-responder`, soru gerekmez)?
  - Şeridi çözen bir artifact dosya adı var mı? (`pipeline-Q4.csv` → forecast; `MSA-redline.docx` → deal)?
  
  Çalışma alanı şeridi çözerse, **sessizce yönlendir**.
  
  ### Adım 2 — Hâlâ belirsizse, önerilen cevapla BİR zorlama sorusu
  
  Matt'in kuralı: asla birleştirme. Her zaman öner.
  
  Desen:
  ```
  S1/1: [iki aday şeridi adlandıran kesin soru]
  Önerilen: [Şerit X, çünkü <sinyal-tablosu mantığı>]
  
  (Onayla, yoksa geçersiz kıl?)
  ```
  
  ### Adım 3 — Çok şeritli sorgular için karar ağacı yürüyüşü
  
  Sorgu meşru olarak iki şeridi geçiyorsa (ör. "bu RFP normalde vermediklerimiz bir indirim istiyor" = RFP + DEAL + belki POLICY), derinlik-önce yürü:
  
  1. En yüksek güven şeridi önce → bölünmüş bağlamda alt-skill çalıştır → özet
  2. Sor: "Şimdi [ikinci şerit] çalıştırsın mı? Önerilen: evet, çünkü [bağımlılık]."
  3. Zincirlemeden önce onayla.
  
  Asla sessizce zincirle.
  
  ### Adım 4 — Bölünmüş bağlamda alt-skill çağır
  
  Orijinal istemi + yapılandırılmış girdileri ilet (pipeline CSV, RFP belge yolu, fiyatlandırma karşılaştırma tablosu, MSA redline).
  
  ### Adım 5 — Alıntılanan kanon zorlama ile özet döndür
  
  ≤ 200 kelime: analiz edilmiş, en iyi 3 bulgu (kanon alıntısı ile sabitlenmiş), en iyi 3 sonraki adım (geçerli onaylayıcı adlandırılmış), artifact yolu ve **bir grill zorlaması** kullanıcı için. Örnekler:
  
  - "Deal scorecard'ınız indirimden sonra %38 margin gösteriyor. Skok'un For Entrepreneurs benchmark'i %70'den düşük brüt margin'li SaaS anlaşmalarının inceleme gerektirdiğini söylüyor. Doldurma maliyetini mü yoksa sadece COGS'yi mi modellediniz?"
  - "Paketlemenizde Better'de 14 özellik, Best'te 16 özellik var. Madhavan Ramanujam (Monetizing Innovation): net ayırıcı olmayan seviyeler müşterilerin %70'inin en ucuz olanı seçmesine neden olur. Yükseltmeyi zorlayan bir özellik nedir?"
  
  ## Zorlama-soru kütüphanesi (grill-with-docs deseni)
  
  Alt-skill çağırmadan önce kullanıcıyı şerit tanımlayan kararlar konusunda grill et. Turda bir tane, önerilen cevap, kanon alıntısı:
  
  - **PRICING şeridi**: "Model seçmeden önce: müşteriniz sonuçlar, koltuklar mı yoksa kullanım için mi ödeme yapıyor? Önerilen: sonuçlar (değer tabanlı) ölçülebilirlerse. Anti-desen (Ramanujam 2016 *Monetizing Innovation*): kullanıma değişken bir üründe koltuk tabanlı fiyatlandırma TAM'ınızı WTP'nin %20'sine sınırlar."
  - **DEAL şeridi**: "Onaylamadan önce: tam indirimde brüt margin nedir, **ve** gelecek çeyreğin pipeline'ı aynı koşullarda nasıl görünüyor? Önerilen: ikisini de modelleyin. Anti-desen (Tunguz benchmarkları): bir %40 emsal üç çeyreklik pipeline'ı yeniden şekillendiriyor."
  - **FORECAST şeridi**: "Tahmin etmeden önce: son 4 çeyrekten mi yoksa son 12 aydan mı aşama-dönüşüm oranları kullanıyorsunuz? Önerilen: son 4 ağırlıklı daha ağır. Anti-desen (Skok, OpenView): 12 ayı eşit ağırlıklandırma yakın yavaşlamayı gizler."
  - **PARTNERSHIP şeridi**: "İmza atmadan önce: ortak **bağımsız talebe** sahip mi, yoksa kendi pipeline'ımızı mı yeniden satıyor? Önerilen: bağımsız talep kanıtını ısrar et. Anti-desen (Forrester kanal araştırması): kendi pipeline'ınızdan kanal tarafından yönetilen anlaşmalar doğruydan daha pahalıya mal olur."
  
  Şerit tanımlayan karar kilitlenene kadar hiçbir alt-skill çalıştırma.
  
  ## Varsayımlar
  
  1. Kullanıcının ticari yetkisi VAR VEYA bunu yapan birinin analizi hazırlıyor.
  2. Kullanıcı **deterministik karar desteği** istiyor, son cevap değil — insan anlaşmayı onaylar, fiyatı belirler, ortağın imzasını atar.
  3. Girdiler kısmi olabilir — her alt-skill şablonlu dummy veriler taşır, kullanıcı kendi verilerini doldurmadan önce şekli görebilsin.
  
  ## Hedef değil
  
  - CRM, CPQ sistemi veya sözleşme deposu değildir.
  - Otomatik olarak anlaşmaları onaylamaz. Her çıktı **bir puan + tavsiye + insan-onaylayıcı yönlendirme**.
  - Oturumlar arasında anlaşma geçmişini depolamaz.
  
  ## Farklı olan
  
  - **`business-growth/sales-engineer`** — bu **teknik satış** (demolar, POC'ler). Ticari **anlaşmanın ekonomik şekli**dir.
  - **`business-growth/revenue-operations`** — bu **işlem** (lead yönlendirme, SDR hareketi). Ticari **anlaşma başına ekonomi + politika**dir.
  - **`business-growth/contract-and-proposal-writer`** — bu **yazı yazma** prose. Ticari **karar mantığı + yapılandırılmış yanıt**tır.
  - **`c-level-advisor/cro-advisor`** — bu stratejik CRO yargısı ("VP Sales'i ne zaman işe alalım?"). Ticari taktik ("bu indirimi onayla").
  - **`finance/financial-analysis`** — bu **kapalı + rapor**. Ticari **tahmin + anlaşma başına ekonomi**dir.
  
  ## Çıktı artifact'ları
  
  | Alt-skill | Artifact |
  |---|---|
  | pricing-strategist | `pricing_model.md` + `wtp_analysis.json` |
  | deal-desk | `deal_scorecard.md` + `discount_approval_routing.json` |
  | partnerships-architect | `partner_tier_assignment.md` + `revshare_model.json` |
  | channel-economics | `channel_mix_analysis.md` + `cost_to_serve.json` |
  | commercial-policy | `commercial_policy.md` (discount matrix + exception flow) |
  | rfp-responder | `rfp_response.md` + `winrate_estimate.json` |
  | commercial-forecaster | `forecast.md` + `pipeline_math.json` |
  
  ## Anti-desenler (yapma)
  
  - ❌ Belirli bir fiyat öner — **aralık + model** öner, kullanıcı sayıyı seçsin
  - ❌ Politikanın üzerindeki indirimler otomatik onay — her >X% indirim adlandırılmış insan onaylayıcıya yönlendirilsin
  - ❌ Kullanıcının doğrulayabileceği kanıt noktaları olmadan RFP yanıtı oluştur
  - ❌ **dönüşüm varsayımını** açıkça yüzeye çıkarmadan bookings tahmin et
  - ❌ "Tam olmak için" 7 alt-skill'in hepsini çalıştır — birini seç, özetleyin, gerekirse zincirleyin
  
  ## Referanslar
  
  - SaaS fiyatlandırması kanonu: Tomasz Tunguz, David Skok, Bessemer Venture Partners
  - Deal desk: SaaStr playbook'ları, Winning by Design
  - Path-B build deseni: `documentation/implementation/bizops-commercial-expansion-plan.md`
---

# Commercial — Domain Orchestrator

The Commercial surface is **per-deal economics and packaging**: how the company prices, packages, approves, and forecasts revenue. This orchestrator forks its context, routes your inquiry to one of seven sub-skills, then returns a digest. Heavy intake (RFP PDFs, pipeline exports, partner agreements) stays in the forked context.

## When to invoke

| Symptom | Sub-skill |
|---|---|
| "We're losing deals on price — should we drop prices or repackage?" | `pricing-strategist` |
| "Can we approve a 40% discount on this Enterprise deal?" | `deal-desk` |
| "Should we sign with this reseller? What's their tier?" | `partnerships-architect` |
| "Is our partner channel actually profitable?" | `channel-economics` |
| "What should our standard discount matrix look like?" | `commercial-policy` |
| "Help me respond to this 60-page RFP" | `rfp-responder` |
| "What's our Q4 bookings forecast at current conversion?" | `commercial-forecaster` |

## Routing logic (deterministic)

Same two-signal threshold pattern as `business-operations-skills`. Single-signal → clarifying question. Mixed signals → highest-confidence first, chain second in follow-up turn.

### Signal table

| Signal class | Keywords | Sub-skill |
|---|---|---|
| **PRICING** | pricing, price, packaging, tier, WTP, willingness to pay, Van Westendorp, value pricing | `pricing-strategist` |
| **DEAL** | deal, discount, approval, margin, T&Cs, redline, exception, MSA | `deal-desk` |
| **PARTNERSHIP** | partner, reseller, OEM, co-sell, joint GTM, revenue share, channel agreement | `partnerships-architect` |
| **CHANNEL_ECON** | channel mix, cost to serve, channel ROI, direct vs partner, channel economics | `channel-economics` |
| **POLICY** | commercial policy, discount matrix, T&C library, exception policy, deal framework | `commercial-policy` |
| **RFP** | RFP, RFI, RFQ, proposal request, vendor questionnaire, security questionnaire | `rfp-responder` |
| **FORECAST** | forecast, bookings, billings, ARR, NRR forecast, pipeline math, funnel projection | `commercial-forecaster` |

## Workflow (Matt Pocock grill discipline)

Derived from Matt Pocock's `grill-with-docs` pattern: **explore-then-ask, one question per turn with a recommended answer, walk the decision tree depth-first, track dependencies, anchor every challenge in the SaaS pricing / deal desk canon** (`references/`).

### Step 1 — Explore before asking

Check the user's working directory first:
- Is there a deal record, pricing comp table, RFP doc, or pipeline export already in the workspace?
- Does the inquiry already disambiguate the lane (e.g., "review this 60-page RFP" — that's `rfp-responder`, no question needed)?
- Is there an artifact filename that resolves the lane (`pipeline-Q4.csv` → forecast; `MSA-redline.docx` → deal)?

If the workspace resolves the lane, **route silently**.

### Step 2 — If still ambiguous, ONE forcing question with a recommended answer

Matt's rule: never bundle. Always recommend.

Pattern:
```
Q1/1: [precise question naming the two candidate lanes]
Recommended: [Lane X, because <signal-table rationale>]

(Confirm, or override?)
```

### Step 3 — Decision-tree walk for multi-lane inquiries

If the inquiry legitimately crosses two lanes (e.g., "this RFP wants a discount we don't normally give" = RFP + DEAL + maybe POLICY), walk depth-first:

1. Highest-confidence lane first → run sub-skill in forked context → digest
2. Ask: "Now run [second lane]? Recommended: yes, because [dependency]."
3. Confirm before chaining.

Never silently chain.

### Step 4 — Invoke sub-skill in forked context

Forward original prompt + structured inputs (pipeline CSV, RFP doc path, pricing comp table, MSA redline).

### Step 5 — Return digest with cited canon challenge

≤ 200 words: analyzed, top 3 findings (anchored to canon citation), top 3 next actions (named approver where applicable), artifact path, and **one grill challenge** for the user. Examples:

- "Your deal scorecard shows 38% margin after discount. Skok's For Entrepreneurs benchmark says SaaS deals < 70% gross margin pre-discount need scrutiny. Did you model fulfillment cost or just COGS?"
- "Your packaging has 14 features in Better and 16 in Best. Madhavan Ramanujam (Monetizing Innovation): tiers with no clear differentiator make 70% of customers pick the cheapest. What's the one feature that forces an upgrade?"

## Forcing-question library (grill-with-docs pattern)

Grill the user on lane-defining decisions before invoking the sub-skill. One per turn, recommended answer, canon citation:

- **PRICING lane**: "Before picking a model: is your customer paying for outcomes, seats, or usage? Recommended: outcomes (value-based) if you can measure them. Anti-pattern (Ramanujam 2016 *Monetizing Innovation*): seat-based pricing on a usage-variable product caps your TAM at 20% of WTP."
- **DEAL lane**: "Before approving: what's the gross margin at full discount, **and** what does next quarter's pipeline look like at the same terms? Recommended: model both. Anti-pattern (Tunguz benchmarks): one 40% precedent reshapes 3 quarters of pipeline."
- **FORECAST lane**: "Before forecasting: are you using stage-conversion rates from the last 4 quarters, or the last 12? Recommended: last 4 weighted heavier. Anti-pattern (Skok, OpenView): equal-weighting 12 months hides the recent slowdown."
- **PARTNERSHIP lane**: "Before signing: does the partner have **independent demand**, or are they reselling our pipeline? Recommended: insist on indep demand evidence. Anti-pattern (Forrester channel research): channel-led deals from your own pipeline cost more than direct."

Never run a sub-skill until the lane-defining decision is locked.

## Assumptions

1. User has commercial authority OR is preparing analysis for someone who does.
2. User wants **deterministic decision support**, not the final answer — the human approves the deal, sets the price, signs the partner.
3. Inputs may be partial — every sub-skill ships templated dummy data so the user can see the shape before filling in their own.

## Non-goals

- Not a CRM, CPQ system, or contract repository.
- Does not auto-approve deals. Every output is **a score + recommendation + human-approver routing**.
- Does not store deal history across sessions.

## Distinct from

- **`business-growth/sales-engineer`** — that's the **technical sale** (demos, POCs). Commercial is **economic shape** of the deal.
- **`business-growth/revenue-operations`** — that's **process** (lead routing, SDR motion). Commercial is **per-deal economics + policy**.
- **`business-growth/contract-and-proposal-writer`** — that's **authoring** prose. Commercial is **decision logic + structured response**.
- **`c-level-advisor/cro-advisor`** — that's strategic CRO judgment ("when do we hire VP Sales?"). Commercial is tactical ("approve this discount").
- **`finance/financial-analysis`** — that's **close + report**. Commercial is **forecast + per-deal economics**.

## Output artifacts

| Sub-skill | Artifact |
|---|---|
| pricing-strategist | `pricing_model.md` + `wtp_analysis.json` |
| deal-desk | `deal_scorecard.md` + `discount_approval_routing.json` |
| partnerships-architect | `partner_tier_assignment.md` + `revshare_model.json` |
| channel-economics | `channel_mix_analysis.md` + `cost_to_serve.json` |
| commercial-policy | `commercial_policy.md` (discount matrix + exception flow) |
| rfp-responder | `rfp_response.md` + `winrate_estimate.json` |
| commercial-forecaster | `forecast.md` + `pipeline_math.json` |

## Anti-patterns (do not)

- ❌ Recommend a specific price — recommend a **range + model**, user picks the number
- ❌ Auto-approve discounts above policy — every >X% discount routes to a named human approver
- ❌ Generate an RFP response without proof points the user can verify
- ❌ Forecast bookings without surfacing the **conversion assumption** explicitly
- ❌ Run all 7 sub-skills "to be thorough" — pick one, digest, chain if needed

## References

- SaaS pricing canon: Tomasz Tunguz, David Skok, Bessemer Venture Partners
- Deal desk: SaaStr playbooks, Winning by Design
- Path-B build pattern: `documentation/implementation/bizops-commercial-expansion-plan.md`
