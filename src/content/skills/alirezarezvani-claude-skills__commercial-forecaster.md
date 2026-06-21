---
name: "commercial-forecaster"
description_en: "Use when building a quarterly bookings forecast, ARR projection, pipeline forecast, NRR projection, or commit/best-case/pipe-only board number — especially when the CRO needs to walk the board through funnel math + cohort ARR + per-stage conversion assumptions without the theatre of a single undefended number. Decomposes pipeline into commit, best-case, and pipe-only tiers; projects cohort-level N"
description_tr: "Üç aylık rezervasyon tahminlemesi, ARR projeksiyonu, pipeline tahmini, NRR projeksiyonu veya commit/best-case/pipe-only board numarası oluştururken kullanın — özellikle CRO'nun funnel math + cohort ARR + stage başına dönüşüm varsayımlarını savunmasız tek bir sayının tiyatrosu olmadan board'da anlatması gerektiğinde. Pipeline'ı commit, best-case ve pipe-only seviyelerine ayırır; cohort düzeyinde N projeksiyonu yapabilir."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18642
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/commercial-forecaster/SKILL.md"
path: ".gemini/skills/commercial-forecaster/SKILL.md"
is_collection: false
body_length: 10909
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # commercial-forecaster
  
  ## Amaç
  
  Ticari liderler için tahmin anında üç soruya yanıt vermek:
  
  1. **Commit / best-case / pipe-only rakamı nedir?** (Açıklanan varsayımlarla 3-kademeli bookings tahmini)
  2. **Hangi cohort'lar sızıyor ve konsolide NRR sızıntıyı mı gizliyor?** (cohort başına NRR/GRR projeksiyonu)
  3. **Hangi funnel aşamaları güvenilir, hangisi istatistiksel gürültü?** (aşama başına coefficient-of-variation güven bandı)
  
  Skill **üç tahmin rakamı + açık varsayım bloğu** önerir. CRO rakamı sunar, board varsayımları görür, tiyatro biter.
  
  ## Ne zaman kullanılır
  
  - Quarterly bookings tahmini board'a sunmak için
  - CFO'nun "commit nedir, best-case nedir, pipe-only nedir" soracağı QBR tahminini hazırlarken
  - Cohort retention verisini kullanarak sonraki 4-8 quarter için ARR projekte ederken
  - Konsolide NRR rakamının sızıntılı bir son cohort'u gizlediğinden şüphelenirken
  - Pipeline-coverage azalıyor ve hangi aşamaların hâlâ güvenilir olduğunu bilmek gerektiğinde
  - "Tek bir rakam" istendiğinde ve varsayımları ortaya çıkaran yapılandırılmış cevaba ihtiyaç duyduğunda
  
  **Şu durumlar için kullanmayın:**
  - Backward-looking finansal kapanış + raporlama → `finance/financial-analysis`
  - Stratejik finansal planlama (multi-year, scenario, fundraise) → `c-level-advisor/cfo-advisor`
  - "VP Sales kiralamak mı gerekir?" / territory tasarımı / comp plan → `c-level-advisor/cro-advisor`
  - Fiyatlandırma → sibling `pricing-strategist` (zaten belirli fiyatlardaki revenue'yu projekte eder)
  - Deal başına discount onayı → sibling `deal-desk`
  
  ## İş Akışı
  
  ### Adım 1 — Pipeline + cohort + geçmiş conversion verisi alımı
  
  `assets/forecast_intake_template.md` dosyasını doldurun (≈ 20 dk). Şunları içerir: opportunity listesi (stage/amount/close-date/age/last-activity); son 4Q ve 12Q'taki stage-to-stage conversion geçmişi; cohort başına ARR + quarterly retention + expansion verisi; 12 quarter'lık conversion geçmişine sahip funnel aşama adları.
  
  ### Adım 2 — 3-kademeli bookings tahminini çalıştırın
  
  ```
  scripts/bookings_forecaster.py --input intake.json --profile saas --output markdown
  ```
  
  Üç rakam çıktısı — **commit**, **best-case**, **pipe-only** — her biri uygulanan conversion rate'i, kullanılan veri penceresini (last-4Q vs. last-12Q weighted 70/30) ve time-to-close probability adjustment'ını içerir. Commit ile pipe-only arasındaki varyans pipeline-risk göstergesi olarak ortaya konur.
  
  **Varsayım bloğu zorunludur.** Onu kaldırırsan tahmin tiyatroya döner.
  
  ### Adım 3 — Cohort-level ARR'yi projekte et
  
  ```
  scripts/cohort_arr_projector.py --input intake.json --output markdown
  ```
  
  Cohort başına NRR + GRR'yi projeksiyon horizonu üzerinde hesaplar. NRR'si sürü ortalamasından düşüş gösteren herhangi bir cohort'u işaretler — bunlar konsolide rakam 2-3 quarter boyunca gizleyecek ve ardından topline'da ortaya çıkacak sızıntılı cohort'lardır.
  
  Çıktı konsolide NRR/GRR траектörü + cohort heatmap'i + sızıntılı cohort uyarısını içerir.
  
  ### Adım 4 — Aşama başına funnel güvenini puanla
  
  ```
  scripts/funnel_confidence_scorer.py --input intake.json --output markdown
  ```
  
  Aşama başına: ortalama conversion %, standart sapma, coefficient of variation (CoV = StDev / Mean), güven bandı (HIGH < 10%, MEDIUM 10-25%, LOW 25-50%, VERY LOW > 50%). Aşama başına tedavi önerir: extend-data-window, treat-as-soft-floor veya commit-quality.
  
  ### Adım 5 — Tahmin deck'ini hazırla
  
  3-kademeli bookings rakamı + cohort heatmap'i + funnel güvenini QBR / board deck'ine koy. **Varsayım bloğu rakamla aynı slide'a gider.** Slide tek bir rakam ve varsayım bloğu yoksa, slide tiyatrodur.
  
  ## Script'ler
  
  - `scripts/bookings_forecaster.py` — 3-kademeli bookings tahmini (commit / best-case / pipe-only) açıklanan conversion-rate + data-window + weighting bloğu ile
  - `scripts/cohort_arr_projector.py` — cohort başına NRR/GRR projeksiyonu horizon üzerinde, sızıntılı cohort uyarısı ile
  - `scripts/funnel_confidence_scorer.py` — aşama başına CoV-tabanlı güven bandları, tedavi önerisi ile
  
  Tüm script'ler: stdlib only. `--help` ve `--sample` üçünün tümünde çalışır.
  
  ## Kaynaklar
  
  - `references/saas_forecasting_canon.md` — Skok, Tunguz, OpenView, BVP, Pacific Crest/KeyBanc, ProfitWell, Patrick Campbell
  - `references/cohort_analysis_canon.md` — Andrew Chen (a16z), Brian Balfour, Skok, Ramanujam, OpenView, Lenny Rachitsky, Reforge
  - `references/forecast_anti_patterns.md` — McKinsey, Tunguz, OpenView, MIT Sloan, Bain, Forrester, Pacific Crest
  
  ## Varsayımlar
  
  - **Geçmiş conversion prior'dır, truth değildir.** Son 4Q %70 ağırlık, son 12Q %30 ağırlık. Blend rejim değişimini (son dönem yavaşlama) yakalar tek quarter'a overfitting yapmaz. Window + weighting her çıktıda yer alır.
  - **Varsayım bloğu olmayan tahmin tiyatrodur.** Bu skill'in sert kuralıdır. CLI varsayım blokunu çıkarmayı reddeder.
  - **Cohort ayrıştırması sızıntıyı konsolide rakam ortaya çıkmadan 2-3 quarter önce ortaya çıkarır.** Per-cohort breakdown olmadan NRR raporlamak sızıntıyı gizler.
  - **CoV (coefficient of variation) aşama güveni için doğru disiplindir.** Ortalama conversion %40 stdev %4 (CoV %10) olan aşama HIGH güvendir; ortalama %40 stdev %20 (CoV %50%) çok LOW'dur. Aynı ortalama çok farklı güvenilirliği maskeleyebilir.
  - **Industry profile prior'ları ayarlar, truth'ı değil.** Profile aşama-conversion rate'lerini endüstriye göre kaydırır; geçmiş veri'n override eder.
  - **Skill üç rakam ve varsayım bloku yayınlar.** CRO commit rakamını seçer, trade-off'u sahiplenir ve board'a varyansı anlatır.
  
  ## Anti-patternler
  
  - **Güven bandı olmayan tek-rakam tahmin.** Board "rakam"ı ister; disiplin üç rakamı adlandırılmış varsayımlarla sunmaktır. Bkz. `forecast_anti_patterns.md`.
  - **Son 12-quarter conversion'u kör kullanmak.** Son dönem yavaşlamasını gizler. Son 4Q ve 12Q üzerinde %70/30 blend bunu düzeltir.
  - **Cohort ayrıştırması olmadan NRR raporlamak.** Konsolide rakam düz olabilir iken son cohort %15 sızıntı yapabilir; sızıntı topline'da 2-3 quarter sonra ortaya çıkar. Her zaman ayrıştır.
  - **Best-case'i commit olarak kabul etmek.** CFO seni yer. Best-case < %50 time-to-close olasılığı olan weighted-stage opp'ler içerir; commit sadece commit-grade aşamaları içerir.
  - **Varsayım blokunu gizlemek.** Skill reddeder; manuel olarak kaldırırsan tiyatroyu senin sahibin.
  - **Sızıntılı cohort uyarısı yok.** `cohort_arr_projector.py` bir cohort'u işaretler ve sen deck'te flag'i bastırırsan, sızıntı sonraki quarter'ı sahibi olur.
  - **Late-stage opp age'i göz ardı etmek.** 180 gündür "verbal" olan bir deal commit değildir. Bookings forecaster kendi otomatik olarak stalled opp'leri downweight eder; elle re-up etme.
  - **Pipeline-coverage kontrolü yok.** Endüstri başparmak kuralı: forecast > pipeline ÷ 3 anti-pattern'dir. Tool oran ortaya koymaz; ona saygı duy.
  
  ## Farklı olan
  
  - **`finance/financial-analysis`** — backward-looking finansal kapanış, GAAP/IFRS raporlaması, variance vs. budget. commercial-forecaster forward-looking pipeline math'ıdır.
  - **`c-level-advisor/cfo-advisor`** — stratejik multi-year finansal planlama, fundraise senaryoları, runway. commercial-forecaster CFO'ya bir input'tur, strateji değildir.
  - **`c-level-advisor/cro-advisor`** — stratejik CRO yargısı: "VP Sales kiralamak mı gerekir?", territory tasarımı, comp plan, sales engineer ne zaman ekleyelim. commercial-forecaster CRO'nun kullandığı math'tir; cro-advisor CRO'nun uyguladığı yargıdır.
  - **sibling `pricing-strategist`** — fiyatı belirler (model + range). commercial-forecaster *bu fiyatlarda revenue'yu projekte eder*. Pricing önce gelir; tahmin sonra.
  - **sibling `deal-desk`** — deal başına puanlama + discount onayı routing. commercial-forecaster deal-desk'in günlük işlettiği pipeline'ı toplar.
  
  ## Zorla-soru kütüphanesi (Matt Pocock grill disiplini)
  
  `/cs:grill-commercial` tarafından veya orchestrator tarafından teker teker yürütülür. Tavsiye edilen cevap + canon citation soru başına. Asla paketlenmez.
  
  1. **"Ne conversion rate kullanıyorsun ve last-4Q mü yoksa last-12Q mü?"**
     Tavsiye: %70/30 blend (son 4Q %70 ağırlık, son 12Q %30 ağırlık). Sadece last-12Q son dönem yavaşlamasını gizler; sadece last-4Q tek kötü quarter'a overfitting yapar.
     Canon: Tomasz Tunguz (Theory Ventures) — tahmin çalışmaları single-window conversion tahminlerinin rejim değişimini ~3-quarter lag'de kaçırdığını gösterir.
  
  2. **"Pipeline coverage ratio'nun nedir ve commit'in pipeline ÷ 3'ün üstünde mi?"**
     Tavsiye: 3x coverage SaaS-endüstri tabanıdır; 3x altı commit'in yapısal olarak desteklenmedigi anlamına gelir.
     Canon: Pacific Crest / KeyBanc SaaS Survey — top-quartile SaaS şirketleri committed bookings'e karşı 3.0-4.5x pipeline coverage koruyor.
  
  3. **"Sadece konsolide değil cohort başına NRR gösterebilir misin?"**
     Tavsiye: hiçbir zaman konsolide NRR'yi per-cohort breakdown olmadan raporlama. Sızıntılı cohort'lar ortalamalarda gizlenir.
     Canon: Patrick Campbell (ProfitWell) + David Skok — cohort-driven retention ayrıştırması sızıntıları konsolide NRR hareket etmeden 2-3 quarter önce ortaya çıkarır.
  
  4. **"Son 12 quarter'da her aşamanın conversion rate'inin varyansı (CoV) nedir?"**
     Tavsiye: CoV < %10 → commit-grade; %10-25 → moderate; %25-50 → soft floor only; > %50 → bu aşamayı tahmin için kullanma.
     Canon: MIT Sloan tahmin araştırması / Hyndman & Athanasopoulos (*Forecasting: Principles and Practice*) — input serisindeki CoV tahmin doğruluğunu ortalamadan daha güvenilir şekilde öngörür.
  
  5. **"Her late-stage opp ne kadar süredir late-stage'de?"**
     Tavsiye: stage-age > 2x median stage-duration → stalled olarak kabul et, commit'ten çıkar, pipe-only'de tut.
     Canon: David Skok (*For Entrepreneurs*) — stage-age'ye göre stalled-opp tanımlanması top-decile SaaS pipeline'larında #1 tahmin hijyeni uygulamasıdır.
  
  6. **"Best-case tahmin'in pipe-only'nin %30'u içinde mi?"**
     Tavsiye: best-case < pipe-only'nin %50'si ise aşama-conversion varsayımlar'ın pesimisttir ve sandbagging yapıyorsun; best-case > pipe-only'nin %80'i ise hockey-sticking yapıyorsun.
     Canon: McKinsey tahmin bias araştırması + OpenView SaaS benchmark'leri — çoğu takım iki başarısızlık modundan birinde çalışır: sandbagging (commit << earnings) veya hockey-sticking (commit >> earnings).
  
  7. **"Board slide'daki rakama hangi varsayım bloğu eşlik ediyor?"**
     Tavsiye: board slide'da her tahmin rakamı (a) conversion rate'i, (b) data window'u, (c) weighting seçimini, (d) pipeline-coverage oranını adlandır. Varsayım bloğu yok = slide tiyatrodur.
     Canon: Bain & Company commercial-forecasting pratikleri + Forrester pipeline-coverage araştırması — açıklanmayan-varsayım tahmini açıklanan-varsayım tahmininden 2.3x daha yüksek variance'a sahiptir.
  
  Derinlikten ilerle. 1-3'ü kilitle, sonra 4-7'yi aç. 7'nin tümüne cevap verdikten sonra `bookings_forecaster.py` → `cohort_arr_projector.py` → `funnel_confidence_scorer.py` sırasıyla çağır.
---

# commercial-forecaster

## Purpose

Help Commercial leaders answer three questions at the forecast moment:

1. **What's the commit / best-case / pipe-only number?** (3-tier bookings forecast with disclosed assumptions)
2. **Which cohorts are leaking, and is the consolidated NRR hiding the leak?** (per-cohort NRR/GRR projection over horizon)
3. **Which funnel stages are reliable, and which are statistical noise?** (per-stage coefficient-of-variation confidence band)

The skill recommends **three forecast numbers + an explicit assumption block**. The CRO presents the number, the board sees the assumptions, the theatre dies.

## When to use

- Building the quarterly bookings forecast for the board
- Preparing the QBR forecast where the CFO will ask "what's the commit, what's the best-case, what's the pipe-only"
- Projecting ARR for next 4-8 quarters using cohort retention data
- Suspecting a consolidated NRR number is hiding a leaky recent cohort
- Pipeline-coverage is shrinking and you need to know which stages are still trustworthy
- You're being asked for a "single number" and you need the structured answer that surfaces the assumption

**Do not use for:**
- Backward-looking financial close + reporting → `finance/financial-analysis`
- Strategic financial planning (multi-year, scenario, fundraise) → `c-level-advisor/cfo-advisor`
- "Should we hire a VP Sales?" / territory design / comp plan → `c-level-advisor/cro-advisor`
- Setting prices → sibling `pricing-strategist` (projects revenue *at* prices already set)
- Per-deal discount approval → sibling `deal-desk`

## Workflow

### Step 1 — Intake pipeline + cohort + historical conversion data

Fill `assets/forecast_intake_template.md` (≈ 20 min). Captures: opportunity list with stage/amount/close-date/age/last-activity; historical stage-to-stage conversion across last 4Q and last 12Q; per-cohort ARR + per-quarter retention + expansion data; funnel stage names with 12-quarter conversion history.

### Step 2 — Run 3-tier bookings forecast

```
scripts/bookings_forecaster.py --input intake.json --profile saas --output markdown
```

Outputs three numbers — **commit**, **best-case**, **pipe-only** — each with the conversion rate applied, the data window used (last-4Q vs. last-12Q weighted 70/30), and the time-to-close probability adjustment. Surfaces variance between commit and pipe-only as the pipeline-risk indicator.

**The assumption block is non-optional.** If you remove it, the forecast becomes theatre.

### Step 3 — Project cohort-level ARR

```
scripts/cohort_arr_projector.py --input intake.json --output markdown
```

Computes per-cohort NRR + GRR over the projection horizon. Flags any cohort whose NRR is declining vs. the trailing-cohort average — these are the leaky cohorts that the consolidated number will hide for 2-3 quarters before the leak surfaces in the topline.

Output includes the consolidated NRR/GRR trajectory + the cohort heatmap + a leaky-cohort callout.

### Step 4 — Score per-stage funnel confidence

```
scripts/funnel_confidence_scorer.py --input intake.json --output markdown
```

Per stage: mean conversion %, standard deviation, coefficient of variation (CoV = StDev / Mean), confidence band (HIGH < 10%, MEDIUM 10-25%, LOW 25-50%, VERY LOW > 50%). Recommends treatment per stage: extend-data-window, treat-as-soft-floor, or commit-quality.

### Step 5 — Assemble the forecast deck

Take the 3-tier bookings number + cohort heatmap + funnel confidence into the QBR / board deck. **The assumption block goes on the slide with the number.** If the slide has a single number and no assumption block, the slide is theatre.

## Scripts

- `scripts/bookings_forecaster.py` — 3-tier bookings forecast (commit / best-case / pipe-only) with disclosed conversion-rate + data-window + weighting block
- `scripts/cohort_arr_projector.py` — per-cohort NRR/GRR projection over horizon with leaky-cohort callout
- `scripts/funnel_confidence_scorer.py` — per-stage CoV-based confidence bands with treatment recommendation

All scripts: stdlib only. `--help` and `--sample` work on all three.

## References

- `references/saas_forecasting_canon.md` — Skok, Tunguz, OpenView, BVP, Pacific Crest/KeyBanc, ProfitWell, Patrick Campbell
- `references/cohort_analysis_canon.md` — Andrew Chen (a16z), Brian Balfour, Skok, Ramanujam, OpenView, Lenny Rachitsky, Reforge
- `references/forecast_anti_patterns.md` — McKinsey, Tunguz, OpenView, MIT Sloan, Bain, Forrester, Pacific Crest

## Assumptions

- **Historical conversion is the prior, not the truth.** Last 4Q is weighted 70%, last 12Q is weighted 30%. The blend captures regime change (recent slowdown) without overfitting to a single bad quarter. Window + weighting are surfaced in every output.
- **A forecast without a disclosed assumption block is theatre.** This is the skill's hard rule. The CLI refuses to omit the assumption block.
- **Cohort decomposition reveals leaks 2-3 quarters before the consolidated number does.** Reporting NRR without per-cohort breakdown hides the leak.
- **CoV (coefficient of variation) is the right discipline for stage confidence.** A stage with mean conversion 40% and stdev 4% (CoV 10%) is HIGH confidence; mean 40% stdev 20% (CoV 50%) is VERY LOW. The same average masks very different reliability.
- **Industry profile tunes priors, not truth.** Profile shifts default stage-conversion rates by industry; your historical data overrides.
- **The skill emits three numbers and an assumption block.** The CRO picks the commit number, owns the trade-off, and walks the board through the variance.

## Anti-patterns

- **Single-number forecast with no confidence band.** The board asks for "the number"; the discipline is to present three with named assumptions. See `forecast_anti_patterns.md`.
- **Using last-12-quarter conversion blindly.** Hides recent slowdown. The 70/30 blend on last-4Q vs. last-12Q corrects this.
- **Reporting NRR without cohort decomposition.** The consolidated number can be flat while a recent cohort is leaking 15 pp; the leak surfaces in the topline 2-3 quarters later. Always decompose.
- **Treating best-case as commit.** The CFO will eat you. Best-case includes weighted-stage opps that have a < 50% time-to-close probability; commit only includes commit-grade stages.
- **Hiding the assumption block.** The skill refuses; if you remove it manually, you own the theatre.
- **No leaky-cohort callout.** If `cohort_arr_projector.py` flags a cohort and you suppress the flag in the deck, the leak owns you next quarter.
- **Ignoring late-stage opp age.** A "verbal" deal that's been verbal for 180 days is not a commit. The bookings forecaster downweights stalled opps automatically; do not re-up them by hand.
- **No pipeline-coverage check.** Industry rule of thumb: forecast > pipeline ÷ 3 is anti-pattern. The tool surfaces the ratio; respect it.

## Distinct from

- **`finance/financial-analysis`** — backward-looking financial close, GAAP/IFRS reporting, variance vs. budget. commercial-forecaster is forward-looking pipeline math.
- **`c-level-advisor/cfo-advisor`** — strategic multi-year financial planning, fundraise scenarios, runway. commercial-forecaster is one input to the CFO, not the strategy.
- **`c-level-advisor/cro-advisor`** — strategic CRO judgment: "do we hire a VP Sales?", territory design, comp plan, when to add a sales engineer. commercial-forecaster is the math the CRO uses; cro-advisor is the judgment the CRO applies.
- **sibling `pricing-strategist`** — sets the price (model + range). commercial-forecaster *projects revenue at those prices*. Pricing comes first; forecast comes after.
- **sibling `deal-desk`** — per-deal scoring + discount approval routing. commercial-forecaster aggregates the pipeline that deal-desk operates on day-by-day.

## Forcing-question library (Matt Pocock grill discipline)

Walked one at a time by `/cs:grill-commercial` or the orchestrator. Recommended answer + canon citation per question. Never bundled.

1. **"What conversion rate are you using, and is it last-4Q or last-12Q?"**
   Recommended: a 70/30 blend (last-4Q weighted 70%, last-12Q weighted 30%). Last-12Q alone hides recent slowdown; last-4Q alone overfits one bad quarter.
   Canon: Tomasz Tunguz (Theory Ventures) — forecasting studies show single-window conversion estimates miss regime change at ~3-quarter lag.

2. **"What's your pipeline coverage ratio, and is your commit above pipeline ÷ 3?"**
   Recommended: 3x coverage is the SaaS-industry floor; below 3x means your commit is structurally unsupported.
   Canon: Pacific Crest / KeyBanc SaaS Survey — top-quartile SaaS companies maintain 3.0-4.5x pipeline coverage against committed bookings.

3. **"Can you show me NRR by cohort, not just consolidated?"**
   Recommended: never report a consolidated NRR without the per-cohort breakdown. Leaky cohorts hide in averages.
   Canon: Patrick Campbell (ProfitWell) + David Skok — cohort-driven retention decomposition surfaces leaks 2-3 quarters before consolidated NRR moves.

4. **"What's the variance (CoV) on each stage's conversion rate over the last 12 quarters?"**
   Recommended: CoV < 10% → commit-grade; 10-25% → moderate; 25-50% → soft floor only; > 50% → do not use this stage for forecasting.
   Canon: MIT Sloan forecasting research / Hyndman & Athanasopoulos (*Forecasting: Principles and Practice*) — CoV on the input series predicts forecast accuracy more reliably than mean.

5. **"How long has each late-stage opp been in late-stage?"**
   Recommended: stage-age > 2x the median stage-duration → treat as stalled, exclude from commit, keep in pipe-only.
   Canon: David Skok (*For Entrepreneurs*) — stalled-opp identification by stage-age is the #1 forecast hygiene practice in top-decile SaaS pipelines.

6. **"Is your best-case forecast within 30% of your pipe-only?"**
   Recommended: if best-case is < 50% of pipe-only, your stage-conversion assumptions are pessimistic and you're sandbagging; if best-case > 80% of pipe-only, you're hockey-sticking.
   Canon: McKinsey research on forecast bias + OpenView SaaS benchmarks — most teams operate in one of two failure modes: sandbagging (commit << earnings) or hockey-sticking (commit >> earnings).

7. **"What assumption block accompanies the number on the board slide?"**
   Recommended: every forecast number on a board slide names (a) the conversion rate, (b) the data window, (c) the weighting choice, (d) the pipeline-coverage ratio. No assumption block = the slide is theatre.
   Canon: Bain & Company commercial-forecasting practice + Forrester pipeline-coverage research — undisclosed-assumption forecasts have 2.3x higher variance against actuals than disclosed-assumption forecasts.

Walk depth-first. Lock 1-3 before opening 4-7. After all 7 are answered, invoke `bookings_forecaster.py` → `cohort_arr_projector.py` → `funnel_confidence_scorer.py` in sequence.
