---
name: "channel-economics"
description_en: "Use when reviewing or rebalancing direct vs. partner-led channel economics — computing fully-loaded cost-to-serve per channel, channel ROI with cash / LTV / marginal lenses, and optimal channel mix subject to constraints. For Head of Commercial, RevOps, and VP Sales doing quarterly channel review when pipeline is mixed (e.g., 60% direct + 40% partner-led) and nobody actually knows which channel ma"
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/channel-economics/SKILL.md"
path: ".gemini/skills/channel-economics/SKILL.md"
is_collection: false
body_length: 11982
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # channel-economics

  ## Amaç

  Ticari İşler Müdürü / RevOps / VP Satış'ın üç soruyu çeyreklik kanal incelemesinde yanıtlamasına yardımcı olun:

  1. **Her kanalı gerçekten hizmet etmek ne kadara mal oluyor, tam yükle?** (doğrudan personel, kanal yöneticisi atfı, ortak indirim, MDF, etkinleştirme süresi, destek yükü, tahsis edilen genel gider)
  2. **Her kanalın ROI'si üç perspektiften ne?** (nakit ROI yıl-1, LTV-ayarlanmış ROI, marjinal ROI — sonraki yatırım doları)
  3. **Stratejik kısıtlamalarımıza tabi optimal kanal karması ne?** (minimum doğrudan taban, maksimum ortak konsantrasyon tavanı, CAC değişimlerine duyarlılık)

  Skill, **kanal başına kararlar** (DOUBLE-DOWN / MAINTAIN / DEFUND / EXIT), **duyarlılık-test edilmiş bir karışım tavsiyesi** ve **azalan getiri dönüm noktası** yayınlar. Stratejiyi seçmez — insanlar yapar, rakamlar ilk kez dürüstçe yüklenmiş olarak.

  ## Ne zaman kullanılır

  - Çeyreklik kanal incelemesi: pipeline %60/40 veya %50/50 doğrudan vs ortak ve hangisinin kârlı olduğunu gerçekten bilmiyorsunuz
  - Kanal yöneticisi işe almayı düşünüyor — kanalın yüklü maliyet çubuğunu geçebilip geçemeyeceğini bilmeniz gerekiyor
  - Yönetim kurulundan ortak program ROI sorusu ("MDF'ye $X harcadık — ne aldık?")
  - Bir segmen bir kanala aşırı endeksli ve mix doğmasının diğerini engellediğinden şüpheleniyorsunuz
  - Yeni bir bölgeye genişlemeye hazırlanıyor ve doğrudan-önce vs ortak-önce kararı vermeniz gerekiyor
  - M&A incelemesi: hedef şirket "ortak-lider %70 brüt marjda" iddia ediyor — yüklendikten sonra doğrulamak gerekiyor

  **Şunlar için kullanmayın:**
  - Ortak katmanları tasarlamak, joint GTM motionunu, revshare bölüşümünü → `partnerships-architect`
  - SDR-to-AE yönlendirmesi, lead puanlama, MQL tanımları → `business-growth/revenue-operations`
  - Stratejik CRO kararları ("VP Satış işe almalı mıyız?", comp planı tasarımı) → `c-level-advisor/cro-advisor`
  - Çeyreklik kapanış, GAAP gelir muhasebesi, kanal-düzeyinde P&L tarihsel raporlama → `finance/financial-analysis`
  - Anlaşma başına indirim onayı → `deal-desk`
  - Fiyatlandırma modeli tasarımı → `pricing-strategist`

  ## İş Akışı

  ### Adım 1 — Kanal verilerini al

  `assets/channel_data_template.md` doldur (≈ 20 dk). Kanal başına yakalama: TTM anlaşma sayısı, TTM ARR, ortalama anlaşma boyutu, brüt marj %, CAC, satış-döngüsü günü, saklama oranı, genişleme oranı, ortak indirim %, tüm atfedilebilir maliyetler (SDR / AE / SE / kanal yöneticisi / CS / destek / pazarlama / ortak MDF / araç / genel gider tahsisi %).

  Şablon, ekiplerin en sık unuttuğu maliyetleri ortaya çıkarır: ortak etkinleştirme süresi, sertifikasyon yatırımı, kanal-çatışma çözümleme genel gideri, kanal-yöneticisi personel maliyeti.

  ### Adım 2 — Kanal başına hizmet etme maliyetini hesapla

  `scripts/cost_to_serve_calculator.py --input channel.json --output markdown` çalıştır.

  Çıktı: tam yüklenmiş hizmet etme maliyeti **anlaşma başına** AND **ARR'nin her doları başına**, doğrudan maliyetler tahsis edilen genel giderden ayrılmış, ve kanal-spesifik yükten sonra "gerçek brüt marj" satırı. Çift sayma bayraklarını ve gizli maliyetleri ortaya çıkarır.

  Kanal başına bir kez çalıştır. "Gerçek brüt marj" satırı, sonraki iki scriptin önemsediği girdilir.

  ### Adım 3 — Üç perspektiften kanal başına ROI'yi hesapla

  `scripts/channel_roi_analyzer.py --input roi.json --profile saas --output markdown` çalıştır.

  Çıktı: kanal başına, üç ROI numarası (Nakit yıl-1, LTV-ayarlanmış, Marjinal), azalan getiri dönüm noktası, ve bir kararı: DOUBLE-DOWN / MAINTAIN / DEFUND / EXIT.

  Karar mantığı deterministiktir ve raporda yüzeylenmiştir. İnsanlar geçersiz kılabilir; skill yapmaz.

  ### Adım 4 — Kısıtlamalar konusu kanal karışımını optimize et

  `scripts/channel_mix_optimizer.py --input mix.json --profile saas --output markdown` çalıştır.

  Çıktı: kısıtlamalara tabi etkili ARR'yi maksimize eden tavsiye edilen karışım (min doğrudan %, max ortak konsantrasyon), artı duyarlılık tablosu (doğrudan CAC %20 yükselirse ne olur? ortak indirim 5 puan genişletirse ne olur?).

  ### Adım 5 — Karar ver

  Üç raporu çeyreklik kanal incelemesine getir. Skill tavsiye eder; insan taahhüt eder.

  ## Scriptler

  - `scripts/cost_to_serve_calculator.py` — anlaşma başına tam yüklenmiş hizmet etme maliyeti AND $ ARR başına, gizli-maliyet ortaya çıkarması ile
  - `scripts/channel_roi_analyzer.py` — 3-perspektif ROI (Nakit / LTV / Marjinal) kararları ve azalan-getiri dönüm noktası ile
  - `scripts/channel_mix_optimizer.py` — kısıtlı karışım iyileştirici duyarlılık senaryoları ile

  Tüm scriptler: sadece stdlib. `--help`, `--sample`, `--input`, `--output` üçünde de çalışır. Endüstri ayarlaması `--profile {saas,api,enterprise-software,marketplace,hardware}` iki analizde.

  ## Referanslar

  - `references/channel_economics_canon.md` — Skok, Bessemer State of the Cloud, Tunguz, Pacific Crest / KeyBanc SaaS Survey, Ramanujam, Jay McBain (Canalys)
  - `references/cost_to_serve_canon.md` — Kaplan & Cooper (ABC), Horngren, Jeremy Hope, IBM CTS vaka incelemeleri, McKinsey, Gartner, BCG
  - `references/channel_anti_patterns.md` — Forrester, Tunguz, Hessling, HBR, SiriusDecisions, MIT Sloan, Gartner

  ## Varsayımlar

  - Kanal ekonomisi **ileriye dönük** bir sorudur. Tarihsel kanal P&L'si finans'ın işidir; bu skill bir karar için ileriye dönük ekonomi yükler.
  - "Kanal", tutarlı bir go-to-market motionunu ifade eder (doğrudan giden, ortak-lider, pazaryeri, satıcı, OEM). Bu pazarlama kaynağı anlamına gelmez.
  - Hizmet etme maliyeti, **dürüst genel gider tahsisini** gerektirir. Script, genel gider %'sinin kanallar arasında tutarlı olduğunu doğrular — tutarsız tahsisden yanlış ortak-marj yükselmesi #1 anti-patternidir.
  - LTV girdileri (saklama, genişleme) kanalı-başına, havuzlanmış değil. Ortak-kaynaklı müşteriler genellikle doğrudan-kaynaklı müşterilerden farklı şekilde saklanır — bu fark genellikle en büyük ekonomik değişken ve en çok göz ardı edilen değişkendir.
  - Endüstri profilleri (`--profile`) ölçütler için varsayılanları ayarlar (örn., SaaS doğrudan CAC geri ödeme hedefi ~12ay, kurumsal ~18ay) — sayılarınızı geçersiz kılmaz.
  - Bu bir karar-destek skilldir. Çıktı kararlar ve tavsiye edilen karışımdır, asla otomatik kaynak yeniden tahsisi değil.

  ## Anti-patternler

  - **"Etkilenen" anlaşmaları "kaynaklı" anlaşmalar olarak ele almak.** Zaten AE'nizin sahip olduğu bir anlaşmaya temas eden bir ortak, kanal-kaynaklı gelir değildir. Bunun ortak gelir olarak yüklenmesi ortak ROI'yi şişirir ve aynı anda doğrudan CAC'yi şişirir.
  - **Tutarsız genel gider tahsisi.** Doğrudan anlaşmalara %25 genel gider tahsisi ve ortak anlaşmalara %5 tahsisi çünkü "ortak genel gideri yönetir" yanlıştır. Ortak yöneticisi, ortak programı, MDF, sertifikasyon ve çatışma-çözümlemesi hepsi P&L'inizde yaşar.
  - **Etkinleştirme süresini maliyet olarak göz ardı etmek.** AE'nizin bir ortak ile birlikte satış yapmakla geçirdiği her saat, ortak kanalına yapılan doğrudan maliyettir — çoğu ekip bunu yüklemeyi unutur.
  - **ROI izlemesiz MDF.** ROI izlemesiz anlaşma yönetilen Market Development Funds, sadece bir ortak-indirim uzantısıdır. Skill, dönüş olmayan MDF'yi işaretler.
  - **Kanal-karışım doğması.** "Biz ortak-lider bir şirketiz" / "doğrudan satış yapmıyoruz" kârlı segmentleri engeller. Karışım matematik takip etmelidir, slogan değil.
  - **Saklama farkını göz ardı ederek kanal ROI'si hesaplamak.** Ortak-kaynaklı müşteriler doğrudan'dan 5 puan daha yüksek kayıp oranı varsa, bunu göz ardı etmek ortak LTV'yi %30-50 aşırı tahmin eder. Kanal başına saklama zorunlu girdildir.
  - **Kanal-yöneticisi personel maliyeti için maliyet atfı yok.** $4M ortak ARR'yi yöneten $200k kanal yöneticisi, $1k ARR başına $50 kanal-yöneticisi maliyetidir — karar için önemlidir.
  - **Bu skilli partnerships-architect ile karıştırmak.** Bu skill ortak programı tasarlar. Bu skill programın kendisini ödeyip ödemediğini söyler.

  ## Farklı olan

  - **commercial/partnerships-architect** — ortak katmanı tasarımı, joint GTM motion, revshare bölüşümü, ortak etkinleştirmesi. Ortak program *yapısı*, ortak program *ekonomisi* değil. Bu skill program yapısını giriş olarak tüketir ve ekonomik kararı yayınlar.
  - **business-growth/revenue-operations** — lead yönlendirmesi, SDR motion, MQL tanımı, pipeline işlemleri. RevOps huninin mekaniğini yönetir; bu skill kanal-düzeyinde ekonomik sonucu yükler.
  - **c-level-advisor/cro-advisor** — stratejik CRO yargısı: VP Satış işe alırken, comp plan felsefesi, bölge tasarımı, çok yıllı gelir stratejisi. CRO danışmanı kanal-ekonomisi çıktısını birçok giriş arasında bir tane olarak tüketir.
  - **finance/financial-analysis** — tarihsel kanal P&L'sini GAAP başına kapatma ve raporlama. Bu skill ileriye dönüktür karar desteği; finans tarihsel kayıttır. Farklı zaman ufku, farklı izleyici, farklı çıktı.
  - **commercial/deal-desk** — anlaşma başına indirim onayı. Günlük çalışır; bu skill çeyreklik çalışır.
  - **commercial/pricing-strategist** — fiyatlandırma modeli ve katmanı tasarımı. Fiyatlandırma girdilir; kanal ekonomisi o fiyatlandırma genelinde kanallar arasında ne olduğudur.

  ## Zorlama-soru kütüphanesi (Matt Pocock grill disiplini)

  `/cs:grill-commercial` veya orcestratör tarafından birer birer yürütüldü. Tavsiye edilen cevap + canon alıntı soru başına. Asla paketlenmiş.

  1. **"Kanal başına tam yüklenmiş hizmet etme maliyetiniz nedir — kanal-yöneticisi personel maliyeti, MDF, ortak etkinleştirme süresi ve genel gider tahsisi dahil?"**
     Tavsiye: dördünü de yükle. Çoğu ekip ortak indirimini yükler ama kanal-yöneticisi personelini ve etkinleştirme süresini unutur, ortak marjını %8-15 şişirir.
     Canon: Kaplan & Cooper (HBR 1988) — *Measure Costs Right: Make the Right Decisions*. Activity-Based Costing tam olarak kanal maliyetleri genel giderde gizlendiği ve marj karşılaştırmalarını çarpıttığı için icat edilmiştir.

  2. **"Doğrudan-kaynaklı ve ortak-kaynaklı müşteriler arasında saklama farkı nedir?"**
     Tavsiye: kanal ROI çalıştırmadan önce kanal başına saklama aletini kullan. Bir 5-puan saklama boşluğu LTV'yi %30-50 taşır.
     Canon: David Skok (*For Entrepreneurs* — SaaS Metrics 2.0). LTV = (ARPA × Brüt Marj) / Churn. Kanal-kör churn, yanlış kanal ROI'sinin en yaygın kaynağıdır.

  3. **"'Kanal-kaynaklı' pipeline'ınızın ne kadarını ekibiniz gerçekten başlattı?"**
     Tavsiye: AE zaten hesaba sahipse, kanal-kaynaklı değildir — kanal-etkilenmiştir. Etki ve kaynak farklı ekonomik satırlar.
     Canon: SiriusDecisions / Forrester kanal atfı araştırması — kaynak vs. etkiyi karıştırma, ortak ROI'sinin aşırı ifade edilmesinin endüstri çapında #1 nedenidir.

  4. **"Ortak programa vs. doğrudan satışa yatırılan sonraki doların marjinal ROI'si nedir?"**
     Tavsiye: her ikisinde de azalan-getiri eğrisini hesapla. Ortalama ROI, sonraki doların 0.3x kazanırken ortalamanın 2.1x kazandığı gerçeğini gizler.
     Canon: Tomasz Tunguz (*Tomasz Tunguz blog* — kanal CAC analizleri). Ortalama ROI bir kibir metriğidir; marjinal ROI yatırım kararlarını yönlendirir.

  5. **"Son 4 çeyrekte MDF-to-atfedilebilir-pipeline oranınız nedir?"**
     Tavsiye: < 5:1 (her $1 MDF 2 çeyrek içinde ≥ $5 atfedilebilir pipeline üretmelidir). Daha gevşek olan şey ortak-indirim tiyatrosu.
     Canon: Jay McBain (Canalys) — *State of the Channel* araştırması. Atfı disiplini olmayan MDF, kanalın en pahalı sübvansiyonudur.

  6. **"Kanal-karışım doğmanız kârlı bir segmenti engelliyormuş?"**
     Tavsiye: doğmayı açıkça ortaya çıkar ("biz ortak-lideriz", "SMB'de doğrudan satmıyoruz"). Karışım segment matematik takip etmelidir.
     Canon: MIT Sloan Management Review — *When Channel Conflict Means Growth*. Doğmatik tek-kanal stratejileri özellikle orta-pazarda TAM'ın %15-25'ini elden çıkarır.

  7. **"Hangi genel gider-tahsisi metodolojisini uyguluyorsunuz — ve doğrudan ve ortak arasında tutarlı mı?"**
     Tavsiye: aynı metodoloji, aynı payda, her iki kanal. Tutarsız tahsis, kanal-ekonomisi analizinin sessiz katilidir.
     Canon: Charles Horngren (*Cost Accounting: A Managerial Emphasis*) — tahsis tutarlılığı segmentler arası marj karşılaştırması için ön koşuldur. Onsuz, her sonuç kontamine edilmiştir.

  Derinlemesine yürü. 1-3'ü kilitle, sonra 4-7'yi aç. Tüm 7 cevaplandıktan sonra, sırasıyla `cost_to_serve_calculator.py` → `channel_roi_analyzer.py` → `channel_mix_optimizer.py` çağır.
---

# channel-economics

## Purpose

Help Head of Commercial / RevOps / VP Sales answer three questions at the quarterly channel review:

1. **What does each channel actually cost to serve, fully loaded?** (direct headcount, channel manager attribution, partner discount, MDF, enablement time, support load, allocated overhead)
2. **What is the ROI of each channel under three lenses?** (cash ROI year-1, LTV-adjusted ROI, marginal ROI — next dollar of investment)
3. **What is the optimal channel mix subject to our strategic constraints?** (minimum direct floor, maximum partner concentration ceiling, sensitivity to CAC shifts)

The skill emits **per-channel verdicts** (DOUBLE-DOWN / MAINTAIN / DEFUND / EXIT), a **sensitivity-tested mix recommendation**, and **the diminishing-returns inflection point**. It does not pick the strategy — humans do, with the numbers loaded honestly for the first time.

## When to use

- Quarterly channel review: pipeline is 60/40 or 50/50 direct vs partner and you don't actually know which one is profitable
- Considering hiring a channel manager — need to know if the channel can clear the loaded-cost bar
- Partner program ROI question from the board ("we spent $X on MDF — what did we get?")
- A segment is over-indexed to one channel and you suspect mix dogma is blocking the other
- About to expand into a new region and need to decide direct-first vs partner-first
- M&A diligence: target company claims "partner-led at 70% gross margin" — need to validate after loading

**Do not use for:**
- Designing partner tiers, joint GTM motion, revshare splits → `partnerships-architect`
- SDR-to-AE routing, lead scoring, MQL definitions → `business-growth/revenue-operations`
- Strategic CRO decisions ("should we hire a VP Sales?", comp plan design) → `c-level-advisor/cro-advisor`
- Quarterly close, GAAP revenue recognition, channel-level P&L for historical reporting → `finance/financial-analysis`
- Per-deal discount approval → `deal-desk`
- Pricing model design → `pricing-strategist`

## Workflow

### Step 1 — Intake channel data

Fill `assets/channel_data_template.md` (≈ 20 min). Capture per channel: deal count TTM, ARR TTM, avg deal size, gross margin %, CAC, sales-cycle days, retention rate, expansion rate, partner discount %, all attributable costs (SDR / AE / SE / channel manager / CS / support / marketing / partner MDF / tooling / overhead allocation %).

The template surfaces the costs teams most often forget: partner enablement time, certification investment, channel-conflict resolution overhead, channel-manager headcount cost.

### Step 2 — Compute cost-to-serve per channel

Run `scripts/cost_to_serve_calculator.py --input channel.json --output markdown`.

Output: fully-loaded cost-to-serve **per deal** AND **per dollar of ARR**, with direct costs broken out from allocated overhead, and a "true gross margin" line after channel-specific load. Flags double-counting and surfaces hidden costs.

Run once per channel. The "true gross margin" line is the input the next two scripts care about.

### Step 3 — Compute ROI per channel under three lenses

Run `scripts/channel_roi_analyzer.py --input roi.json --profile saas --output markdown`.

Output: per channel, three ROI numbers (Cash year-1, LTV-adjusted, Marginal), the diminishing-returns inflection point, and a verdict: DOUBLE-DOWN / MAINTAIN / DEFUND / EXIT.

Verdict logic is deterministic and surfaced in the report. Humans can override; the skill won't.

### Step 4 — Optimize channel mix subject to constraints

Run `scripts/channel_mix_optimizer.py --input mix.json --profile saas --output markdown`.

Output: recommended mix that maximizes effective ARR subject to constraints (min direct %, max partner concentration), plus a sensitivity table (what if direct CAC rises 20%? what if partner discount widens 5 points?).

### Step 5 — Decide

Take the three reports into the quarterly channel review. The skill recommends; the human commits.

## Scripts

- `scripts/cost_to_serve_calculator.py` — fully-loaded cost-to-serve per deal AND per $ ARR, with hidden-cost surfacing
- `scripts/channel_roi_analyzer.py` — 3-lens ROI (Cash / LTV / Marginal) with verdicts and diminishing-returns inflection
- `scripts/channel_mix_optimizer.py` — constrained mix optimizer with sensitivity scenarios

All scripts: stdlib only. `--help`, `--sample`, `--input`, `--output` work on all three. Industry tuning via `--profile {saas,api,enterprise-software,marketplace,hardware}` on the two analyzers.

## References

- `references/channel_economics_canon.md` — Skok, Bessemer State of the Cloud, Tunguz, Pacific Crest / KeyBanc SaaS Survey, Ramanujam, Jay McBain (Canalys)
- `references/cost_to_serve_canon.md` — Kaplan & Cooper (ABC), Horngren, Jeremy Hope, IBM CTS case studies, McKinsey, Gartner, BCG
- `references/channel_anti_patterns.md` — Forrester, Tunguz, Hessling, HBR, SiriusDecisions, MIT Sloan, Gartner

## Assumptions

- Channel economics is a **forward-looking** question. Historical channel P&L is finance's job; this skill loads forward economics for a decision.
- "Channel" means a coherent go-to-market motion (direct outbound, partner-led, marketplace, reseller, OEM). It does not mean a marketing source.
- Cost-to-serve requires **honest overhead allocation**. The script validates that overhead % is consistent across channels — false partner-margin lift from inconsistent allocation is the #1 anti-pattern.
- LTV inputs (retention, expansion) are per-channel, not pooled. Partner-sourced customers often retain differently than direct-sourced — this difference is usually the largest economic variable and the most ignored.
- Industry profiles (`--profile`) tune defaults for benchmarks (e.g., SaaS direct CAC payback target ~12mo, enterprise ~18mo) — they don't override your numbers.
- This is a decision-support skill. Output is verdicts and a recommended mix, never an automatic resource reallocation.

## Anti-patterns

- **Treating "influenced" deals as "sourced" deals.** A partner that touched a deal your AE already had is not channel-sourced revenue. Loading this as partner revenue inflates partner ROI and inflates direct CAC simultaneously.
- **Inconsistent overhead allocation.** Allocating 25% overhead to direct deals and 5% to partner deals because "the partner handles the overhead" is false. The partner manager, partner program, MDF, certification, and conflict-resolution all live in your P&L.
- **Ignoring enablement time as a cost.** Every hour your AE spends co-selling with a partner is a direct cost charged to the partner channel — most teams forget to load it.
- **MDF without ROI tracking.** Market Development Funds disbursed without an attributable pipeline ROI are just a partner-discount extension. The skill flags MDF with no return.
- **Channel-mix dogma.** "We're a partner-first company" / "we don't sell direct" blocks profitable segments. Mix should follow the math, not the slogan.
- **Computing channel ROI without retention differential.** If partner-sourced customers churn 5 points higher than direct, ignoring it overstates partner LTV by 30-50%. Per-channel retention is mandatory input.
- **No cost-attribution for channel-manager headcount.** A $200k channel manager managing $4M of partner ARR is $50 of channel-manager cost per $1k ARR — material to the verdict.
- **Confusing this skill with partnerships-architect.** That skill designs the partner program. This skill tells you whether the program pays for itself.

## Distinct from

- **commercial/partnerships-architect** — partner tier design, joint GTM motion, revshare splits, partner enablement. Partner program *structure*, not partner program *economics*. This skill consumes the program structure as input and emits the economic verdict.
- **business-growth/revenue-operations** — lead routing, SDR motion, MQL definition, pipeline operations. RevOps owns the funnel mechanics; this skill loads the channel-level economic outcome.
- **c-level-advisor/cro-advisor** — strategic CRO judgment: when to hire a VP Sales, comp plan philosophy, territory design, multi-year revenue strategy. CRO advisor consumes channel-economics output as one input among many.
- **finance/financial-analysis** — close-and-report on historical channel P&L per GAAP. This skill is forward-looking decision support; finance is historical record. Different time horizon, different audience, different output.
- **commercial/deal-desk** — per-deal discount approval. Operates daily; this skill operates quarterly.
- **commercial/pricing-strategist** — pricing model and tier design. Pricing is input; channel economics is what happens at that pricing across channels.

## Forcing-question library (Matt Pocock grill discipline)

Walked one at a time by `/cs:grill-commercial` or the orchestrator. Recommended answer + canon citation per question. Never bundled.

1. **"What's your fully-loaded cost-to-serve per channel — including channel-manager headcount, MDF, partner enablement time, and overhead allocation?"**
   Recommended: load all four. Most teams load partner discount but forget the channel-manager headcount and the enablement time, inflating partner margin by 8-15 points.
   Canon: Kaplan & Cooper (HBR 1988) — *Measure Costs Right: Make the Right Decisions*. Activity-Based Costing was invented precisely because channel costs hide in overhead and distort margin comparisons.

2. **"What is the retention differential between direct-sourced and partner-sourced customers?"**
   Recommended: instrument per-channel retention BEFORE running channel ROI. A 5-point retention gap moves LTV by 30-50%.
   Canon: David Skok (*For Entrepreneurs* — SaaS Metrics 2.0). LTV = (ARPA × Gross Margin) / Churn. Channel-blind churn is the most common source of false channel ROI.

3. **"What share of 'channel-sourced' pipeline did your team actually originate?"**
   Recommended: if your AE already had the account, it's not channel-sourced — it's channel-influenced. Influence and source are different economic lines.
   Canon: SiriusDecisions / Forrester channel attribution research — confused source vs. influence is the #1 reason partner ROI is overstated industry-wide.

4. **"What is the marginal ROI of the next dollar invested in partner program vs. direct sales?"**
   Recommended: compute the diminishing-returns curve on both. Average ROI hides the fact that the next dollar might earn 0.3x while the average earns 2.1x.
   Canon: Tomasz Tunguz (*Tomasz Tunguz blog* — channel CAC analyses). Average ROI is a vanity metric; marginal ROI drives investment decisions.

5. **"What's your MDF-to-attributable-pipeline ratio in the last 4 quarters?"**
   Recommended: < 5:1 (every $1 of MDF should generate ≥ $5 of attributable pipeline within 2 quarters). Anything looser is partner-discount theatre.
   Canon: Jay McBain (Canalys) — *State of the Channel* research. MDF without attribution discipline is the most expensive form of channel subsidy.

6. **"Is your channel-mix dogma blocking a profitable segment?"**
   Recommended: surface the dogma ("we're partner-first", "we don't sell direct in SMB") explicitly. Mix should follow the segment math.
   Canon: MIT Sloan Management Review — *When Channel Conflict Means Growth*. Dogmatic single-channel strategies forfeit 15-25% of TAM in mid-market specifically.

7. **"What overhead-allocation methodology are you applying — and is it consistent across direct and partner?"**
   Recommended: same methodology, same denominator, both channels. Inconsistent allocation is the silent killer of channel-economics analysis.
   Canon: Charles Horngren (*Cost Accounting: A Managerial Emphasis*) — allocation consistency is the precondition for cross-segment margin comparison. Without it, every conclusion is contaminated.

Walk depth-first. Lock 1-3 before opening 4-7. After all 7 are answered, invoke `cost_to_serve_calculator.py` → `channel_roi_analyzer.py` → `channel_mix_optimizer.py` in sequence.
