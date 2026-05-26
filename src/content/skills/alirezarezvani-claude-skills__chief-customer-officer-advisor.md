---
name: "chief-customer-officer-advisor"
description_en: "Chief Customer Officer advisory for startups: retention decomposition (gross retention vs NRR honesty, churn root-cause taxonomy), customer segmentation strategy (differential investment across tiers + ICP fit scoring), CS team coverage model (pooled vs named CSM thresholds + ratio math), and CS team org evolution (CS vs Support vs AM distinctions). Use when designing retention strategy, segmentin"
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/chief-customer-officer-advisor/SKILL.md"
path: ".gemini/skills/chief-customer-officer-advisor/SKILL.md"
is_collection: false
body_length: 10840
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Chief Customer Officer Advisor

  Startup CCO'ları ve yöneticiler için stratejik müşteri liderliği. **Dört karar, jenerik CS anketi yok:**

  1. **Retention mimarimiz nedir — ve gross retention vs NRR dürüst mü?** — gross retention, contraction, expansion + churn root-cause taksonomisine ayrıştırma
  2. **Müşterileri diferansiyel yatırım için nasıl segmente ederiz?** — tier tasarımı + ICP fit puanlaması + segment başına yatırım matematiği
  3. **CS ekibinin coverage modeli nedir — ve ne zaman pooled vs named geçeriz?** — coverage ratio hesaplayıcı + geçiş eşikleri
  4. **Sonra hangi CS rolünü işe alırız?** — stage-to-role haritası (CS ≠ Support ≠ AM ≠ Implementation)

  Bu beceri **taktiksel** CS uygulamasını kapsamaz. Health-score araçları, CRM iş akışları, NPS anket altyapısı veya onboarding otomasyonu için `business-growth/customer-success-management/` ve ilgili taktiksel becerilere bakın.

  ## Anahtar Kelimeler

  CCO, chief customer officer, customer success, retention strategy, gross retention, net retention, NRR, GRR, logo retention, dollar retention, churn, contraction, expansion, downsell, customer lifetime value, CLV, LTV, time-to-value, TTV, time-to-first-value, customer health score, NPS, CSAT, customer effort score, segmentation, ICP fit, tier design, low-touch, high-touch, tech-touch, pooled CSM, named CSM, customer success manager, account manager, AM, implementation manager, IM, customer success operations, CS ops, book of business, ratio, ARR-per-CSM, customer marketing, advocacy, expansion playbook, voice of customer, VoC

  ## Hızlı Başlangıç

  ```bash
  # Karar A: Retention'ı dürüstçe ayrıştırın
  python scripts/retention_decomposition_analyzer.py                          # gömülü B2B SaaS örneği
  python scripts/retention_decomposition_analyzer.py path/to/cohorts.json

  # Karar B: Müşteri segmentasyonu tasarlayın + diferansiyel yatırım
  python scripts/customer_segmentation_designer.py                            # gömülü 4-tier örneği
  python scripts/customer_segmentation_designer.py path/to/customers.json

  # Karar C: CS ekibi coverage modelini hesaplayın
  python scripts/cs_coverage_calculator.py                                    # gömülü 350-müşteri örneği
  python scripts/cs_coverage_calculator.py path/to/book.json
  ```

  ## Ana Sorular (bunları önce sorun)

  - **GROSS retention oranınız nedir?** (NRR değil — NRR churn'ü expansion'un arkasında gizler. Önce gross sorun.)
  - **Müşterilerin ayrılmasının #1 sebebi nedir?** (Adını koyamazsanız, churn'ü anlamıyorsunuz.)
  - **Segment başına ortanca time-to-value (TTV) nedir?** (Düşük tierde uzun TTV = misfit; yüksek tierde uzun TTV = onboarding bozuk.)
  - **Bugün hangi müşteriyi fırlatırdınız?** ("Hiçbiri" = segmentasyonunuz bozuk; bazı hesaplar kazandıklarından daha pahalıya mal olur.)
  - **ARR-per-CSM oranınız nedir ve model nedir — pooled mi named mi?** (Stage ve ACV doğru cevabı belirler.)
  - **CS, comp planınızda mı, ve Sales comp'undan farkı nedir?** (CS comp retention üzerinde; uyumsuzluk başarısızlığın öncü göstergesidir.)

  ## Temel Sorumluluklar

  ### 1. Retention Ayrıştırması

  **Tuzak:** "NRR'miz %115, retention harika."

  Gerçek: NRR = Gross Retention − Contraction + Expansion. %85 gross retention ile %115 NRR sızıntılı bir kovadır upsellerin arkasında gizlenen. %98 gross retention ile %115 NRR sağlıklı bir üründür.

  **Her çeyrek zorunlu ayrıştırma:**

  | Metrik | Ne ölçer | Sağlık eşiği (B2B SaaS) |
  |---|---|---|
  | **Gross Retention (GRR)** | Mevcut müşterilerden $ eksi churn + contraction | Growth aşamasında ≥ %90; scale'de ≥ %95 |
  | **Logo Retention** | Yenilenen müşterilerin % | Growth'da ≥ %85; scale'de ≥ %90 |
  | **Net Revenue Retention (NRR)** | GRR + expansion | Growth'da ≥ %110; scale'de ≥ %120 |
  | **Contraction** | Mevcut müşterilerden azalan seat/kullanım $ | Yılda < %5 |
  | **Expansion** | Mevcut müşterilerden artan $ | Sağlıklı durumda yılda %15-25 |

  **Çalıştırın** `retention_decomposition_analyzer.py` cohort verileriyle dürüst ayrıştırma + churn root-cause kategorileştirme için.

  7 kategorili churn taksonomisi + öncü gösterge oyun kitabı için `references/retention_decomposition.md`'ye bakın.

  ### 2. Müşteri Segmentasyonu

  **Tuzak:** "Her müşteri önemli."

  Gerçek: Müşteriler ICP fit × stratejik değer spektrumunda var. Onları aynı şekilde ele almak CS kapasitesini boşa harcattırır ve expansion fırsatını gözardı eder.

  **4-tier framework (B2B SaaS baseline):**

  | Tier | ARR aralığı | Coverage | Hesap başına/yıl yatırım |
  |---|---|---|---|
  | **Strategic** | Top %5, çoğunlukla $100K+ | Named CSM + executive sponsor | $20K-50K |
  | **Enterprise** | Sonraki %15-20, $20K-100K | Named CSM | $5K-15K |
  | **Mid-market** | Sonraki %30-40, $5K-20K | Pooled CSM + automation | $1K-3K |
  | **SMB / Long-tail** | Alt %40-50, <$5K | Tech-touch + self-serve | $50-500 |

  **Çalıştırın** `customer_segmentation_designer.py` segmentasyon tierleri + diferansiyel yatırım + ICP fit puanlaması tasarlamak için.

  ICP fit framework, tier geçiş tetikleyicileri ve kill list (yatırım zemininin altındaki müşteriler) için `references/customer_segmentation_strategy.md`'ye bakın.

  ### 3. CS Ekibi Coverage Modeli

  **Tuzak:** "Bir CSM'i X müşteri başına işe alın" tüm segmentlerde tek bir ratio ile.

  Gerçek: Coverage modeli segment, ACV ve kompleksiteğe bağlıdır. Pooled CSM düşük-touch için çalışır; named CSM stratejik hesaplar için gereklidir.

  **Coverage modelleri:**

  | Model | En iyi şekilde kullanılır | Ratio (ARR-per-CSM) | Trade-off'lar |
  |---|---|---|---|
  | **Tech-touch (insan yok)** | SMB, düşük ACV | $5M-15M+ | Otomasyon maliyeti; yüksek bahisli anlaşmaları kaydedememek |
  | **Pooled CSM** | Mid-market | $2M-5M | Düşük maliyet; daha az hesap intimiteliği |
  | **Named CSM** | Enterprise | $500K-2M | Daha yüksek maliyet; daha derin ilişkiler |
  | **Named CSM + exec sponsor** | Strategic | $300K-1M | En yüksek maliyet; top hesaplar için ayrılmış |

  **Çalıştırın** `cs_coverage_calculator.py` kitap özelikleriyle gerekli CSM headcount'ını ve geçiş eşiklerini belirlemek için.

  Ratio'lar, ramp eğrileri ve "manager ekleme ne zaman" tetikleyicisi için `references/cs_coverage_model.md`'ye bakın.

  ### 4. CS Ekibi Organizasyon Evrimi

  **Yanlış soru:** "Bir CSM mi yoksa Support engineer'ı mı işe alalım?"
  **Doğru soru:** "Sonraki müşteri sonucu hangi başarısız oluyoruz ve hangi rol bunu açıyor?"

  **Kritik farklar (founder'lar bunları karıştırır):**

  | Role | Sahibi | Sahibi DEĞİL |
  |---|---|---|
  | Customer Support | Reaktif issue çözümü (ticket sırası) | Yenileme, expansion, success sonuçları |
  | Customer Success Manager | Proaktif value realization + renewal + expansion lead | Günlük ticketler, implementation |
  | Account Manager | Commercial ilişki + expansion close | Günlük success, teknik derinlik |
  | Implementation Manager | Onboarding + go-live | Launch sonrası devam eden success |
  | CS Operations | Tooling, data, analytics, playbooks | Direkt müşteri ilişkileri |
  | Customer Marketing | Advocacy, case studies, referanslar | 1:1 müşteri ilişkileri |

  Stage-to-role haritası (seed → late-stage) + AM-vs-CSM split kararı için `references/cs_team_org_evolution.md`'ye bakın.

  ## İş Akışları

  ### İş Akışı 1: Quarterly Retention Review (4 saat)
  **Hedef:** Retention'ı dürüstçe ayrıştırın + top-3 churn driver'ını belirleyin.

  ```bash
  # 1. Cohort verisi çekin: son 8 çeyrekte closed/won
  python scripts/retention_decomposition_analyzer.py cohorts.json
  # 2. GRR / NRR / contraction / expansion'ı ayrı ayrı gözden geçirin
  # 3. GRR < %90 gösteren her cohort için: churn root cause'u belirleyin (7-kategori taksonomisi)
  # 4. cs-cro-advisor ile cross-check: expansion matematiği tutarlı mı?
  # 5. cs-cpo-advisor ile cross-check: ürün boşlukları churn'ü sürüyor mü?
  # 6. Output: top-3 leakage puan + 90-günlük azaltma planı
  ```

  ### İş Akışı 2: Müşteri Segmentasyonu Denetimi (1 gün)
  **Hedef:** Müşteri tabanını yeniden segmente edin + diferansiyel yatırımı sıfırlayın.

  ```bash
  # 1. ARR, tenure, ICP fit sinyalleriyle customers.json oluşturun
  python scripts/customer_segmentation_designer.py customers.json
  # 2. Segment migrationunu belirleyin (mid-market → enterprise upgradeler, downselleler)
  # 3. Kill list'i belirleyin (yatırım zemininin altındaki müşteriler)
  # 4. Output: yeni tier atama + investment-per-tier + sales review için kill list
  ```

  ### İş Akışı 3: CS Ekibi Boyutlandırması (1 hafta)
  **Hedef:** CS ekibini kitap bileşimine + coverage modeline hizalanmış boyutlandırın.

  ```bash
  # 1. Mevcut müşteri tabanı + planlanan acquisition ile book.json oluşturun
  python scripts/cs_coverage_calculator.py book.json
  # 2. Segment başına gerekli CSM headcount'ı hesaplayın
  # 3. Mevcut ekiple karşılaştırın; boşlukları belirleyin
  # 4. cs-chro-advisor ile cross-check comp + leveling'e
  # 5. cs-cfo-advisor ile cross-check maliyete
  # 6. Output: 12-aylık hiring plan + role sequence
  ```

  ### İş Akışı 4: CS Ekibi Yol Haritası (1 hafta)
  **Hedef:** Sonraki 18 ayın CS işe alımını müşteri sonuçlarına hizalanmış sıralayın.

  1. Şirketin başarısız olduğu top 5 müşteri sonucunu listeleyin
  2. Her sonucu açan role haritası çıkarın (CSM / AM / IM / Support / CS Ops)
  3. İşe alımları sıralayın; ön koşul sırasına uyun
  4. cs-chro-advisor ile cross-check yapın

  ## Çıktı Standartları

  ```
  **Bottom Line:** [bir cümle — karar ve mantık]
  **Karar:** [biri: retention | segmentation | coverage | next hire]
  **Kanıt:** [araçtan gelen sayılar, sıfattan değil]
  **Hareket Etme Şekli:** [3 somut sonraki adım]
  **Sizin Kararınız:** [sadece founder'ın yapabileceği çağrı]
  ```

  ## İlişkili Beceriler

  - `../cro-advisor/` — Revenue matematiği, NRR, expansion comp (CCO müşteri deneyimine sahip; CRO revenue matematiğine sahip; temiz bölünme)
  - `../cpo-advisor/` — Ürün stratejisi, JTBD (CCO ürün boşluklarını yüzeye çıkarır; CPO yol haritasına karar verir)
  - `../cmo-advisor/` — Müşteri pazarlaması, advocacy, referanslar
  - `../cfo-advisor/` — CS ekibi maliyeti, retention-impact-on-revenue matematiği
  - `../chro-advisor/` — CS ekibi işe alma + leveling
  - `../../../business-growth/` — Taktiksel CS uygulaması: health scores, CRM iş akışları, onboarding tooling

  ## Referanslar

  - [retention_decomposition.md](references/retention_decomposition.md) — GRR vs NRR dürüst matematik + 7-kategori churn taksonomisi + öncü gösterge oyun kitabı
  - [customer_segmentation_strategy.md](references/customer_segmentation_strategy.md) — 4-tier framework + ICP fit puanlaması + tier geçiş tetikleyicileri + kill list kriterleri
  - [cs_coverage_model.md](references/cs_coverage_model.md) — Coverage modeli kararı (tech-touch / pooled / named / named+exec) + ratio benchmark'leri + manager-tetikleyici
  - [cs_team_org_evolution.md](references/cs_team_org_evolution.md) — Stage-to-role haritası + 6-role tanımı tablosu (CSM ≠ Support ≠ AM ≠ IM ≠ CS Ops ≠ Customer Marketing) + AM-vs-CSM split kararı + anti-pattern'ler

  ---

  **Sürüm:** 1.0.0
  **Durum:** Production Ready
  **Sorumluluk Reddi:** Retention benchmark'leri ACV, segment ve industri tarafından önemli ölçüde değişiklik gösterir. Bu beceri B2B SaaS baseline rehberliği sağlar; consumer SaaS, marketplace'ler ve donanım tamamen farklı retention matematiğine sahiptir.
---

# Chief Customer Officer Advisor

Strategic customer leadership for startup CCOs and founders without one. **Four decisions, no generic CS survey:**

1. **What's our retention architecture — and is gross retention vs NRR honest?** — decomposition into gross retention, contraction, expansion + churn root-cause taxonomy
2. **How do we segment customers for differential investment?** — tier design + ICP fit scoring + investment-per-segment math
3. **What's the CS team's coverage model — and when do we go pooled vs named?** — coverage ratio calculator + transition thresholds
4. **What CS role do we hire next?** — stage-to-role map (CS ≠ Support ≠ AM ≠ Implementation)

This skill does **not** cover tactical CS implementation. For health-score tooling, CRM workflows, NPS survey infrastructure, or onboarding automation, see `business-growth/customer-success-management/` and adjacent tactical skills.

## Keywords

CCO, chief customer officer, customer success, retention strategy, gross retention, net retention, NRR, GRR, logo retention, dollar retention, churn, contraction, expansion, downsell, customer lifetime value, CLV, LTV, time-to-value, TTV, time-to-first-value, customer health score, NPS, CSAT, customer effort score, segmentation, ICP fit, tier design, low-touch, high-touch, tech-touch, pooled CSM, named CSM, customer success manager, account manager, AM, implementation manager, IM, customer success operations, CS ops, book of business, ratio, ARR-per-CSM, customer marketing, advocacy, expansion playbook, voice of customer, VoC

## Quick Start

```bash
# Decision A: Decompose retention honestly
python scripts/retention_decomposition_analyzer.py                          # embedded B2B SaaS sample
python scripts/retention_decomposition_analyzer.py path/to/cohorts.json

# Decision B: Design customer segmentation + differential investment
python scripts/customer_segmentation_designer.py                            # embedded 4-tier sample
python scripts/customer_segmentation_designer.py path/to/customers.json

# Decision C: Calculate CS team coverage model
python scripts/cs_coverage_calculator.py                                    # embedded 350-customer sample
python scripts/cs_coverage_calculator.py path/to/book.json
```

## Key Questions (ask these first)

- **What's your GROSS retention rate?** (Not NRR — NRR hides churn behind expansion. Ask gross first.)
- **What's the #1 reason customers leave?** (If you can't name it, you don't understand churn.)
- **What's the median time-to-value (TTV) by segment?** (Long TTV in low tier = misfit; long TTV in high tier = onboarding broken.)
- **Which customer would you fire today?** (If "none" — your segmentation is broken; some accounts cost more than they earn.)
- **What's your ARR-per-CSM ratio, and what's the model — pooled or named?** (Stage and ACV determine the right answer.)
- **Is CS in your comp plan, and how is it different from Sales comp?** (CS comp on retention; misalignment is a leading indicator of failure.)

## Core Responsibilities

### 1. Retention Decomposition

**The trap:** "Our NRR is 115%, retention is great."

The truth: NRR = Gross Retention − Contraction + Expansion. A 115% NRR with 85% gross retention is a leaky bucket masked by upsells. A 115% NRR with 98% gross retention is a healthy product.

**Mandatory decomposition every quarter:**

| Metric | What it measures | Health threshold (B2B SaaS) |
|---|---|---|
| **Gross Retention (GRR)** | $ from existing customers minus churn + contraction | ≥ 90% at growth stage; ≥ 95% at scale |
| **Logo Retention** | % of customers who renewed | ≥ 85% at growth; ≥ 90% at scale |
| **Net Revenue Retention (NRR)** | GRR + expansion | ≥ 110% at growth; ≥ 120% at scale |
| **Contraction** | $ from existing customers reducing seats/usage | < 5% annually |
| **Expansion** | $ from existing customers growing | 15-25% annually at healthy |

**Run** `retention_decomposition_analyzer.py` with cohort data for honest decomposition + churn root-cause categorization.

See `references/retention_decomposition.md` for the 7-category churn taxonomy + leading indicator playbook.

### 2. Customer Segmentation

**The trap:** "Every customer is important."

The reality: customers exist on a spectrum of ICP fit × strategic value. Treating them identically wastes CS capacity and ignores expansion opportunity.

**4-tier framework (B2B SaaS baseline):**

| Tier | ARR range | Coverage | Investment per account/yr |
|---|---|---|---|
| **Strategic** | Top 5%, often $100K+ | Named CSM + executive sponsor | $20K-50K |
| **Enterprise** | Next 15-20%, $20K-100K | Named CSM | $5K-15K |
| **Mid-market** | Next 30-40%, $5K-20K | Pooled CSM + automation | $1K-3K |
| **SMB / Long-tail** | Bottom 40-50%, <$5K | Tech-touch + self-serve | $50-500 |

**Run** `customer_segmentation_designer.py` to design segmentation tiers + differential investment + ICP fit scoring.

See `references/customer_segmentation_strategy.md` for ICP fit framework, tier transition triggers, and the kill list (customers below the investment floor).

### 3. CS Team Coverage Model

**The trap:** "Hire one CSM per X customers" with a single ratio across all segments.

The reality: coverage model depends on segment, ACV, and complexity. Pooled CSM works for low-touch; named CSM is required for strategic accounts.

**Coverage models:**

| Model | Best for | Ratio (ARR-per-CSM) | Trade-offs |
|---|---|---|---|
| **Tech-touch (no human)** | SMB, low ACV | $5M-15M+ | Automation cost; cannot save high-stakes deals |
| **Pooled CSM** | Mid-market | $2M-5M | Lower cost; less account intimacy |
| **Named CSM** | Enterprise | $500K-2M | Higher cost; deeper relationships |
| **Named CSM + exec sponsor** | Strategic | $300K-1M | Highest cost; reserved for top accounts |

**Run** `cs_coverage_calculator.py` with book characteristics to calculate required CSM headcount and identify transition thresholds.

See `references/cs_coverage_model.md` for ratios, ramp curves, and the "when to add a manager" trigger.

### 4. CS Team Org Evolution

**The wrong question:** "Should we hire a CSM or a Support engineer?"
**The right question:** "What's the next customer outcome we're failing to deliver, and what role unblocks that?"

**Critical distinctions (founders confuse these):**

| Role | Owns | Does NOT own |
|---|---|---|
| Customer Support | Reactive issue resolution (ticket queue) | Renewal, expansion, success outcomes |
| Customer Success Manager | Proactive value realization + renewal + expansion lead | Day-to-day tickets, implementation |
| Account Manager | Commercial relationship + expansion close | Day-to-day success, technical depth |
| Implementation Manager | Onboarding + go-live | Ongoing success after launch |
| CS Operations | Tooling, data, analytics, playbooks | Direct customer relationships |
| Customer Marketing | Advocacy, case studies, references | 1:1 customer relationships |

See `references/cs_team_org_evolution.md` for stage-to-role map (seed → late-stage) + the AM-vs-CSM split decision.

## Workflows

### Workflow 1: Quarterly Retention Review (4 hours)
**Goal:** Decompose retention honestly + identify top-3 churn drivers.

```bash
# 1. Pull cohort data: closed/won by quarter for last 8 quarters
python scripts/retention_decomposition_analyzer.py cohorts.json
# 2. Review GRR / NRR / contraction / expansion separately
# 3. For each cohort showing GRR < 90%: identify churn root cause (7-category taxonomy)
# 4. Cross-check with cs-cro-advisor: does the expansion math add up?
# 5. Cross-check with cs-cpo-advisor: are product gaps driving churn?
# 6. Output: top-3 leakage points + 90-day mitigation plan
```

### Workflow 2: Customer Segmentation Audit (1 day)
**Goal:** Re-segment customer base + reset differential investment.

```bash
# 1. Build customers.json with ARR, tenure, ICP fit signals
python scripts/customer_segmentation_designer.py customers.json
# 2. Identify segment migration (mid-market → enterprise upgrades, downsells)
# 3. Identify kill list (customers below investment floor)
# 4. Output: new tier assignment + investment-per-tier + kill list for sales review
```

### Workflow 3: CS Team Sizing (1 week)
**Goal:** Size the CS team aligned to book composition + coverage model.

```bash
# 1. Build book.json with current customer base + planned acquisition
python scripts/cs_coverage_calculator.py book.json
# 2. Calculate required CSM headcount by segment
# 3. Compare to current team; identify gaps
# 4. Cross-check with cs-chro-advisor on comp + leveling
# 5. Cross-check with cs-cfo-advisor on the cost
# 6. Output: 12-month hiring plan + role sequence
```

### Workflow 4: CS Team Roadmap (1 week)
**Goal:** Sequence next 18 months of CS hires aligned to customer outcomes.

1. List top 5 customer outcomes the company is failing to deliver
2. Map each outcome to the role that unblocks it (CSM / AM / IM / Support / CS Ops)
3. Sequence hires; respect prerequisite order
4. Cross-check with cs-chro-advisor

## Output Standards

```
**Bottom Line:** [one sentence — decision and rationale]
**The Decision:** [one of: retention | segmentation | coverage | next hire]
**The Evidence:** [numbers from the tool, not adjectives]
**How to Act:** [3 concrete next steps]
**Your Decision:** [the call only the founder can make]
```

## Adjacent Skills

- `../cro-advisor/` — Revenue math, NRR, expansion comp (CCO owns customer experience; CRO owns revenue math; clean split)
- `../cpo-advisor/` — Product strategy, JTBD (CCO surfaces product gaps; CPO decides roadmap)
- `../cmo-advisor/` — Customer marketing, advocacy, references
- `../cfo-advisor/` — CS team cost, retention-impact-on-revenue math
- `../chro-advisor/` — CS team hiring + leveling
- `../../../business-growth/` — Tactical CS execution: health scores, CRM workflows, onboarding tooling

## References

- [retention_decomposition.md](references/retention_decomposition.md) — GRR vs NRR honest math + 7-category churn taxonomy + leading indicator playbook
- [customer_segmentation_strategy.md](references/customer_segmentation_strategy.md) — 4-tier framework + ICP fit scoring + tier transition triggers + kill list criteria
- [cs_coverage_model.md](references/cs_coverage_model.md) — Coverage model decision (tech-touch / pooled / named / named+exec) + ratio benchmarks + manager-trigger
- [cs_team_org_evolution.md](references/cs_team_org_evolution.md) — Stage-to-role map + 6-role definition table (CSM ≠ Support ≠ AM ≠ IM ≠ CS Ops ≠ Customer Marketing) + AM-vs-CSM split decision + anti-patterns

---

**Version:** 1.0.0
**Status:** Production Ready
**Disclaimer:** Retention benchmarks vary significantly by ACV, segment, and industry. This skill provides B2B SaaS-baseline guidance; consumer SaaS, marketplaces, and hardware all have materially different retention math.
