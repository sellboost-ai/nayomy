---
name: "capacity-planner"
description_en: "Use when an ops leader (Director of CX, Head of Support, VP Ops, Head of BizOps, Head of IT ops, Head of Finance ops) is sizing ops capacity, building a headcount plan, modeling utilization risk, planning Q3 capacity or annual support capacity, or designing CS coverage — and needs Erlang-C queueing math, P90 demand sizing, shrinkage-adjusted FTE, manager-trigger thresholds, and a quarterly hiring "
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/capacity-planner/SKILL.md"
path: ".gemini/skills/capacity-planner/SKILL.md"
is_collection: false
body_length: 10836
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # capacity-planner

  **Kuyruklu işleri yöneten ops ekipleri** için boyutlandırma aracı — Support, CX,
  Customer Success, BizOps, IT ops, Finance ops. Erlang-C kuyruk teorisi,
  Little's Law ve operational-leadership kanonuna (Fournier, Larson, Cleveland, Reinertsen)
  dayalı. Deterministik, stdlib-only, LLM çağrısı yok.

  ## Amaç

  15 → 35 kişi arasında bir ops liderisiniz ve 35 kişilik organizasyonun
  pik yükte gerçekten nasıl davranacağını hiç bilmiyorsunuz. Ya da %88 utilization'dadasınız
  ve SLA kaymaya başlamıştır. Ya da dört çeyrek içinde işe alım bütçesi
  onaylanmış ve mevcut ekibi tüketmeden bunu sıralamanız gerekiyor.
  Bu beceri bu soruları hissiyat değil, aritmetikle cevaplayır.

  Üç artefakt üretir:

  1. **Kapasite boyutlandırması** %70/%80/%90 utilization'da P50/P90/P99
     talebine karşı, her noktada P(SLA breach) ve SAFE/WATCH/AT_RISK/CRITICAL
     risk band'i ile.
  2. **Utilization sağlığı** kişi başına traffic-light seviyesi ve
     ekip kararı (HEALTHY/SQUEEZED/OVERLOADED/UNBALANCED) ile.
  3. **12 aylık çeyreklik işe alım planı** ramp eğrileri,
     ayrılma, QoQ talep büyümesi ve span-of-control manager tetikleyicilerini hesaba katarak.

  ## Ne zaman kullanılacağı

  - **Yıllık ops kapasite planlaması** (Ekim-Kasım, takip eden mali yıl için).
  - **Çeyreklik yeniden boyutlandırma** talep >%15 değiştiyse ya da
     ayrılma ani artışsa.
  - **Bütçe savunması** — CFO'ya headcount talebini haklı kılan matematik.
  - **Teşhis** ops ekibi SLA'yı kaçırdığında ve bunun bir boyutlandırma
     sorunu, bir proses sorunu mu yoksa bir병목sorunu mu olduğunu bilmeniz gerektiğinde.
  - **M&A / yeni segment lansmanı** modelleme — yeni ekip ya da
     birleştirilmiş org boyutlandırması.

  ## İş akışı

  1. **Talebi al**. P50/P90/P99 günlük ticket/case hacmini
     çalışma sisteminizden çek (Zendesk, Intercom, JSM, ServiceNow, Salesforce).
     Yalnızca ortalamaları varsa dur ve dağılımı çek. Tek nokta
     talep tahminleri ops'taki en pahalı anti-pattern'dir.
  2. **Throughput'u modelle**. `capacity_modeler.py`'yi talep,
     AHT, SLA hedefi, mevcut FTE ve shrinkage ile çalıştır. `--profile`'ı
     işleviniz için kullan (support / cx / bizops / finance-ops / it-ops).
     %80-utilization satırını oku — bu sizin boyutlandırma noktanızır.
  3. **Utilization riskini işaretle**. `utilization_analyzer.py`'yi
     mevcut ekibinizin gerçek utilization verilerine karşı çalıştır.
     >%85 sürekli olan herkes Reinertsen'e göre throughput-collapse riski'dir.
     Ekip genelinde >30 yüzde puan fark UNBALANCED demektir — işe almadan
     önce bunu düzelt.
  4. **İşe alımı sırala**. `hiring_sequencer.py`'yi mevcut FTE,
     hedef EOY, ramp zamanı, ayrılma ve büyüme ile çalıştır. Q1'de işe alımları
     ön yükle (%35), Q4'te (%15), ramp eğrileri uygula ve span of control
     7 IC/manager'ı geçtiğinde manager işe alımını tetikle.
  5. **Forcing-question kütüphanesinde yürü** (aşağıya bak). Birer soru.
     Ileri atlamayın. Planı teslim etmeden önce cevaplar yazılı olmalıdır.

  ## Scriptler

  - `scripts/capacity_modeler.py` — shrinkage ayarlaması ve P50/P90/P99
     breach olasılıkları ile Erlang-C boyutlandırması. Endüstri varsayılanları
     için `--profile`.
  - `scripts/utilization_analyzer.py` — kişi başına traffic-light +
     varyans algılama ile ekip seviyesi sağlık kararı.
  - `scripts/hiring_sequencer.py` — ramp, ayrılma, büyüme,
     quarter başına max-hires kısıtlaması ve manager-trigger lojik ile
     12 aylık çeyreklik plan.

  Üçü de `--input <path>` (JSON), `--output {markdown,json}`,
  `--sample` (yerleşik örnek) ve `--help`'i kabul eder. Stdlib only.

  ## Referanslar

  - `references/queueing_theory_canon.md` — Erlang, Little, Hopp &
    Spearman, Reinertsen, Kingman, Cleveland, ITIL, Armony vd. (8
    kaynak). Matematik.
  - `references/ops_workforce_planning_canon.md` — Fournier, Larson,
    Google SRE Workbook, Frei, Lawler, Bersin, Gartner, Grove (8
    kaynak). İnsan faktörleri.
  - `references/capacity_anti_patterns.md` — 11 adlandırılmış anti-pattern
    alıntılı kaynaklar, tool guards ve Lencioni + Goldratt + Christensen'in
    uyguladığı meta-disiplin ile. (8+ adlandırılmış kaynak.)

  ## Varlıklar

  - `assets/capacity_brief_template.md` — 20 dakikalık doldurma şablonu
     tüm üç tool için JSON iskeletleri ve output checklist ile.

  ## Varsayımlar

  Bu beceri şunları varsayar:

  - İş **kuyruklu** (tickets, cases, work items) — proje tarzı değil.
    Ekibinizin işi kuyruklu değilse, bu yanlış beceridir.
  - Talep bir çeyrek içinde **stationary-enough dağılıma** sahiptir.
    Adım-değişimler (yeni ürün lansmanı, M&A, düzenleyici değişim) quarter
    ortasında yeniden çalıştırmayı gerektirir.
  - P50/P90/P99'u hesaplamak için **en az 90 günlük tarihsel talep verisi**
    var. Yoksa, dağılımı önce sales/user-base tahmininizden oluşturun.
  - Hizmet bir kuyruk içinde **tek-sınıf**tır. Sınıf-spesifik SLA'larla
    sabit öncelik katmanlarınız varsa (P1/P2/P3), her birini
    ayrı kuyruk olarak modelleyin ve toplayın.
  - **Kanallar uyumlu olarak modellenmiştir.** Multi-channel ekipler
     yerleşik shrinkage premium ile uygun `--profile` kullanır.

  ## Anti-patternler

  Kaynakları ile tam taksonomi için `references/capacity_anti_patterns.md`'ye bakın. Top sekiz:

  1. Plan-to-100%-utilization (Reinertsen Principle 12)
  2. Treat-ramp-as-instant (Larson)
  3. Ignore-attrition-in-12-month-plan (Bersin)
  4. Hire-ICs-forever-with-no-manager-trigger (Fournier)
  5. Size-to-P50-demand-only (Cleveland)
  6. No-shrinkage-adjustment (Cleveland, SRE Workbook)
  7. Single-channel-model-for-multi-channel-work (Gartner, Kingman)
  8. No-surge-plan-for-P99-events (Hopp & Spearman, Reinertsen)

  ## Farklı olan

  - **`c-level-advisor/vpe-advisor`** DORA 4 metrikler, story points,
     deployment sıklığı ve cycle time병목을 via *engineering* throughput'u ölçer.
     Bu, kod sevk eden engineering ekipleri içindir. Bu beceri ticket/case
     yöneten ops ekipleri içindir. Farklı çalışma birimi, farklı matematik
     (Erlang-C vs. DORA), farklı병목 (queueing-blind staffing vs. WIP + lead time).
  - **`c-level-advisor/chro-advisor`** *stratejik* workforce
     planlaması yapar (1-5 yıl capability portfolyoları, talent supply, leadership
     succession). Bu beceri *operasyonel* 0-12 ay kapasite
     boyutlandırması talebe karşı yapar. Lawler'e göre: bunları karıştırmak
     sizi yanlış işlere işe alındırtır.
  - **`project-management/*`** projeler üzerinde delivery throughput'u takip eder
     (Jira velocity, sprint capacity). Bu beceri steady-state kuyruklu
     iş etrafında boyutlandırır.
  - **Kardeş `process-mapper`**병목*ı bulur*. Bu beceri *bilinen bir병목
     etrafında ekibi boyutlandırır*. İş sırası:
     process-mapper önce → capacity-planner sonra. Yanlış kısıtlama
     etrafında işe almak hireları boşa harcar.
  - **`business-growth/cs-coverage`** (varsa) Customer
     Success kapsamını ARR/CSM oranı ve segmente göre boyutlandırır. Bu beceri
     kuyruklu iş hacmini boyutlandırır (tickets, cases, escalations). CS ekibi
     hem relationship work hem de ticket queue yönetiyorsa, her ikisini çalıştırın.

  ## Forcing-question kütüphanesi (Matt Pocock grill disiplini)

  **Disiplin**: bunları birer birer yürü. Ileri atlamayın. Cevaplar yazılı olmalıdır.
  Birine cevap veremezseniz, bu sizin sonraki araştırmanızdır.

  ### Q1 — "Sizin병목nedir ve bunu ampirik olarak doğruladınız mı?"

  **Önerilen cevap**: kuyruk-zaman verilerini gösteren workflow'da adlandırılmış,
  ölçülmüş bir aşama iş nerede bekler. Hissiyat değil. "Escalations çok uzun sürüyor" değil.
  Gerçek ölçülmüş kuyruk.

  **Neden ilk soru**: Goldratt (*The Goal*, 1984) — her sistemin tam bir kez
  bağlayıcı kısıtlama vardır. Yanlış kısıtlama etrafında boyutlandırma
  hireları tamamen boşa harcar. Eğer병목bilmiyorsanız, bu beceriden ÖNCE
  `process-mapper`'ı çalıştırın.

  **Kanon**: Eli Goldratt, *The Goal* (1984); Reinertsen, *Principles of
  Product Development Flow* (2009).

  ### Q2 — "Hangi hizmet trade-off'unu kabul ediyorsunuz?"

  **Önerilen cevap**: yazılı, açık bir seçim — hızlı vs. empatik,
  geniş vs. derin, düşük maliyet vs. yüksek kalite. Frances Frei açık: dördünü de
  kazanamazsınız. Dördünü kazanmaya çalışan ekip sıfırı kazanır.

  **Neden önemli**: AHT, SLA ve shrinkage input'ları bu trade-off'un
  operasyonel ifadesidir. Anlaşmazsa (ör., AHT'yi "empati" için ayarlayıp
  SLA'yı "hız" için), plan içsel olarak tutarsızdır.

  **Kanon**: Frances Frei & Anne Morriss, *Uncommon Service* (HBR Press,
  2012).

  ### Q3 — "Talep P90'ınız nedir ve P99'a kadar boşluk nedir?"

  **Önerilen cevap**: son 90 günün verilerinden iki spesifik numara,
  her birinin takvim bağlamı ile (ör., "P90 normal Salı günleri 480 ticket/gündü;
  P99 Kasım release'inden sonraki gün 720 idi"). P50'ye boyutlandırılan ekip
  SLA'yı zamanın yarısında kaçırır. P99'a boyutlandırılan ekip %30-50 overstaffing yapar.
  P90 Cleveland'e göre doğru operating boyutlandırma noktasıdır.

  **Kanon**: Brad Cleveland, *Call Center Management on Fast Forward* (4.
  ed., 2019); A.K. Erlang, *The Theory of Probabilities and Telephone
  Conversations* (1909).

  ### Q4 — "Planlanmış utilization'da, P90'da ve P99'da P(SLA breach) nedir?"

  **Önerilen cevap**: iki olasılık, spesifik N, AHT ve SLA hedefin'iz ile
  Erlang-C'den hesaplanan (tahmin değil). P(breach at P90) > %10 ise
  boyutlandırma noktasında understaffing'desiniz. P(breach at P99) > %50 ise
  surge plan'ınız yoktur ve sonraki pik event CEO'ya görünür olacaktır.

  **Kanon**: Erlang (1909); Hopp & Spearman, *Factory Physics* (3. ed.,
  2008), VUT denklemi.

  ### Q5 — "Bu yıl göreceğiniz ayrılma için replacement hire'ları bütçelediniz mi?"

  **Önerilen cevap**: evet, spesifik bir sayı ile. %30 yıllık ayrılmada
  (Bersin BPO midpoint), 20-FTE ekip bu yıl ~6 kişi kaybeder. Eğer "net 5 ekle"
  planınız gerçekte "11 işe al" planıysa, recruiting hacmi çarpıcı şekilde
  değişir. Anti-pattern #3.

  **Kanon**: Bersin/Deloitte talent benchmarks (2015-2023); Edward Lawler,
  *Strategic Workforce Planning* (USC CEO, 2008).

  ### Q6 — "Span of control ne zaman manager hire'ını tetikler ve aday kim?"

  **Önerilen cevap**: spesifik quarter (`hiring_sequencer.py`'den)
  ve en az bir tanımlanan aday (iç lead ya da dış hire). 7 IC/manager'ın
  üzerinde, 1:1'ler düşer, feedback döngüleri kayar, ayrılma tırmanır.
  10'un üzerinde coverage krizisiniz var. Manager hire'ını 10'u geçmeden
  ÖNCE, sonra değil.

  **Kanon**: Camille Fournier, *The Manager's Path* (O'Reilly, 2017),
  ch. 5; Andy Grove, *High Output Management* (1983).

  ### Q7 — "P99 günü için surge planınız nedir?"

  **Önerilen cevap**: açık, belgelenmiş bir plan — overflow tier,
  BPO contracted capacity, on-call rotation, executive escalation tree,
  YA DA "P99 günlerde SLA'yı X dakikaya uzatıyoruz ve müşterileri proaktif
  olarak bildiriyoruz" diyen yazılı degradation contract'ı. Cevap "çözeriz"
  ise, P99 günü board'a görünür bir yangındır.

  **Kanon**: Hopp & Spearman, *Factory Physics* (2008); Reinertsen (2009)
  capacity-margin disiplini hakkında.

  ---

  **Bu yedisi sırayla yürü. Birer birer. Cevapları yazı ile. Sunduğunuz plan
  bu yedi soruya verdiğiniz cevaplar kadar savunulabilir.**
---

# capacity-planner

Sizing tool for **ops teams that handle queued work** — Support, CX,
Customer Success, BizOps, IT ops, Finance ops. Built on Erlang-C
queueing theory, Little's Law, and the operational-leadership canon
(Fournier, Larson, Cleveland, Reinertsen). Deterministic, stdlib-only,
no LLM calls.

## Purpose

You are an ops leader sized 15 → 35 with no idea how the 35-person org
will actually behave at peak load. Or you are at 88% utilization and
SLA is starting to slip. Or you have a hiring budget approved and need
to sequence it across four quarters without burning out the existing
team. This skill answers those questions with arithmetic, not vibes.

It produces three artifacts:

1. **Capacity sizing** at 70/80/90% utilization against P50/P90/P99
   demand, with P(SLA breach) at each point and a SAFE/WATCH/AT_RISK/CRITICAL
   risk band.
2. **Utilization health** at the per-member traffic-light level plus a
   team verdict (HEALTHY/SQUEEZED/OVERLOADED/UNBALANCED).
3. **12-month quarterly hiring plan** accounting for ramp curves,
   attrition, QoQ demand growth, and span-of-control manager triggers.

## When to use

- **Annual ops capacity planning** (October-November for the following
  fiscal year).
- **Quarterly re-sizing** if demand changed >15% or attrition spiked.
- **Pre-budget defense** — the math that justifies the headcount ask
  to your CFO.
- **Diagnostic** when an ops team is missing SLA and you need to know
  whether it's a sizing problem, a process problem, or a bottleneck
  problem.
- **M&A / new-segment launch** modeling — sizing a new team or
  combined org.

## Workflow

1. **Intake demand**. Pull P50/P90/P99 daily ticket/case volume from
   your work system (Zendesk, Intercom, JSM, ServiceNow, Salesforce).
   If you only have averages, stop and pull the distribution. Single-
   point demand estimates are the most expensive anti-pattern in ops.
2. **Model throughput**. Run `capacity_modeler.py` with your demand,
   AHT, SLA target, current FTE, and shrinkage. Use `--profile` for
   your function (support / cx / bizops / finance-ops / it-ops). Read
   the 80%-utilization row — that's your sizing point.
3. **Flag utilization risk**. Run `utilization_analyzer.py` against
   your current team's actual utilization data. Anyone >85% sustained
   is a throughput-collapse risk per Reinertsen. Spread >30 percentage
   points across team means UNBALANCED — fix that before hiring.
4. **Sequence hiring**. Run `hiring_sequencer.py` with current FTE,
   target EOY, ramp time, attrition, and growth. It will front-load
   hires (Q1 35%, Q4 15%), apply ramp curves, and trigger a manager
   hire when span of control crosses 7 ICs/manager.
5. **Walk the Forcing-question library** (see below). One question at
   a time. Do not skip ahead. Answers must be written down before
   you commit the plan.

## Scripts

- `scripts/capacity_modeler.py` — Erlang-C sizing with shrinkage
  adjustment and P50/P90/P99 breach probabilities. `--profile`
  for industry defaults.
- `scripts/utilization_analyzer.py` — per-member traffic-light +
  team-level health verdict with variance detection.
- `scripts/hiring_sequencer.py` — 12-month quarterly plan with ramp,
  attrition, growth, max-hires-per-quarter constraint, and
  manager-trigger logic.

All three accept `--input <path>` (JSON), `--output {markdown,json}`,
`--sample` (built-in example), and `--help`. Stdlib only.

## References

- `references/queueing_theory_canon.md` — Erlang, Little, Hopp &
  Spearman, Reinertsen, Kingman, Cleveland, ITIL, Armony et al. (8
  sources). The math.
- `references/ops_workforce_planning_canon.md` — Fournier, Larson,
  Google SRE Workbook, Frei, Lawler, Bersin, Gartner, Grove (8
  sources). The people factors.
- `references/capacity_anti_patterns.md` — 11 named anti-patterns
  with cited sources, tool guards, and the meta-discipline that
  Lencioni + Goldratt + Christensen impose. (8+ named sources.)

## Assets

- `assets/capacity_brief_template.md` — 20-minute fill-out template
  with JSON skeletons for all three tools and an output checklist.

## Assumptions

This skill assumes:

- Work is **queued** (tickets, cases, work items) — not project-style.
  If your team's work isn't queued, this is the wrong skill.
- Demand has a **stationary-enough distribution** within a quarter.
  Step-changes (new product launch, M&A, regulatory shift) require
  re-running mid-quarter.
- You have **at least 90 days of historical demand data** to compute
  P50/P90/P99. If not, generate the distribution from your sales /
  user-base forecast first.
- Service is **single-class** within a queue. If you have hard
  priority tiers (P1/P2/P3 with class-specific SLAs), model each as
  a separate queue and sum.
- **Channels are modeled coherently.** Multi-channel teams use the
  appropriate `--profile` with built-in shrinkage premium.

## Anti-patterns

See `references/capacity_anti_patterns.md` for the full taxonomy with
sources. Top eight:

1. Plan-to-100%-utilization (Reinertsen Principle 12)
2. Treat-ramp-as-instant (Larson)
3. Ignore-attrition-in-12-month-plan (Bersin)
4. Hire-ICs-forever-with-no-manager-trigger (Fournier)
5. Size-to-P50-demand-only (Cleveland)
6. No-shrinkage-adjustment (Cleveland, SRE Workbook)
7. Single-channel-model-for-multi-channel-work (Gartner, Kingman)
8. No-surge-plan-for-P99-events (Hopp & Spearman, Reinertsen)

## Distinct from

- **`c-level-advisor/vpe-advisor`** measures *engineering* throughput
  via DORA 4 metrics, story points, deployment frequency, and cycle
  time bottlenecks. It is for engineering teams shipping code. This
  skill is for ops teams handling tickets/cases. Different unit of
  work, different math (Erlang-C vs. DORA), different bottleneck
  (queueing-blind staffing vs. WIP + lead time).
- **`c-level-advisor/chro-advisor`** does *strategic* workforce
  planning (1-5 year capability portfolios, talent supply, leadership
  succession). This skill does *operational* 0-12 month capacity
  sizing against demand. Per Lawler: conflating them gets you hired
  into the wrong jobs.
- **`project-management/*`** tracks delivery throughput on projects
  (Jira velocity, sprint capacity). This skill sizes around steady-
  state queued work.
- **Sibling `process-mapper`** *finds* the bottleneck. This skill
  *sizes the team around* a known bottleneck. Order of operations:
  process-mapper first → capacity-planner second. Hiring around the
  wrong constraint wastes the hires.
- **`business-growth/cs-coverage`** (if it exists) sizes Customer
  Success coverage by ARR/CSM ratio and segment. This skill sizes by
  queued work volume (tickets, cases, escalations). For a CS team
  that handles both relationship work AND a ticket queue, run both.

## Forcing-question library (Matt Pocock grill discipline)

**Discipline**: walk these one at a time. Do not skip ahead. Answers must
be written down. If you can't answer one, that is your next investigation.

### Q1 — "What is your bottleneck, and have you confirmed it empirically?"

**Recommended answer**: a named, measured stage in the workflow with
queue-time data showing where work waits. Not a vibe. Not "escalations
take too long". An actual measured queue.

**Why it's the first question**: Goldratt (*The Goal*, 1984) — every
system has exactly one binding constraint at a time. Sizing around the
wrong constraint wastes hires entirely. If you do not know your
bottleneck, run `process-mapper` BEFORE this skill.

**Canon**: Eli Goldratt, *The Goal* (1984); Reinertsen, *Principles of
Product Development Flow* (2009).

### Q2 — "What service trade-off are you accepting?"

**Recommended answer**: a written, explicit choice — fast vs. empathetic,
broad vs. deep, low-cost vs. high-quality. Frances Frei is unambiguous:
you cannot win all four. The team that tries wins zero.

**Why it matters**: AHT, SLA, and shrinkage inputs are the operational
expression of this trade-off. If they don't agree (e.g., you set AHT for
"empathy" but SLA for "speed"), the plan is internally inconsistent.

**Canon**: Frances Frei & Anne Morriss, *Uncommon Service* (HBR Press,
2012).

### Q3 — "What's your demand P90, and what's the gap to your P99?"

**Recommended answer**: two specific numbers from the last 90 days of
data, with the calendar context of each (e.g., "P90 was 480 tickets/day
on normal Tuesdays; P99 was 720 on the day after the November release").
A team sized to P50 misses SLA half the time. A team sized to P99
overstaffs by 30-50%. P90 is the right operating sizing point per
Cleveland.

**Canon**: Brad Cleveland, *Call Center Management on Fast Forward* (4th
ed., 2019); A.K. Erlang, *The Theory of Probabilities and Telephone
Conversations* (1909).

### Q4 — "At your planned utilization, what is P(SLA breach) at P90 and at P99?"

**Recommended answer**: two probabilities, computed (not guessed) from
Erlang-C with your specific N, AHT, and SLA target. If P(breach at P90)
> 10% you are understaffed at the sizing point. If P(breach at P99) >
50% you have no surge plan and the next peak event will be visible to
the CEO.

**Canon**: Erlang (1909); Hopp & Spearman, *Factory Physics* (3rd ed.,
2008), VUT equation.

### Q5 — "Have you budgeted replacement hires for the attrition you'll see this year?"

**Recommended answer**: yes, with a specific number. At 30% annual
attrition (Bersin BPO midpoint), a 20-FTE team loses ~6 people this year.
If your "add 5 net" plan is actually a "hire 11" plan, the recruiting
volume changes drastically. Anti-pattern #3.

**Canon**: Bersin/Deloitte talent benchmarks (2015-2023); Edward Lawler,
*Strategic Workforce Planning* (USC CEO, 2008).

### Q6 — "When does span of control trigger a manager hire, and who is the candidate?"

**Recommended answer**: a specific quarter (from `hiring_sequencer.py`)
and at least one identified candidate (internal lead or external hire).
Past 7 ICs/manager, 1:1s degrade, feedback cycles slip, attrition
climbs. Past 10 you have a coverage crisis. Hire the manager BEFORE
crossing 10, not after.

**Canon**: Camille Fournier, *The Manager's Path* (O'Reilly, 2017),
ch. 5; Andy Grove, *High Output Management* (1983).

### Q7 — "What is your surge plan for the P99 day?"

**Recommended answer**: an explicit, documented plan — overflow tier,
BPO contracted capacity, on-call rotation, executive escalation tree,
OR a written degradation contract that says "on P99 days we extend SLA
to X minutes and notify customers proactively". If the answer is "we'll
figure it out", the P99 day is a fire visible to the board.

**Canon**: Hopp & Spearman, *Factory Physics* (2008); Reinertsen (2009)
on capacity-margin discipline.

---

**Walk these seven in order. One at a time. Write the answers down. The
plan you submit is only as defensible as your answers to these seven
questions.**
