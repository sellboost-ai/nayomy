---
name: "chaos-engineering"
description_en: "Use when planning, running, or learning from chaos engineering experiments. Triggers on \"chaos experiment\", \"fault injection\", \"gameday\", \"resilience test\", \"blast radius\", \"steady state\", \"abort criteria\", \"Chaos Toolkit\", \"Chaos Mesh\", \"Litmus\", \"Gremlin\", \"AWS FIS\", or any deliberate failure-injection question. Ships experiment designer, blast-radius calculator, and postmortem generator (all st"
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/chaos-engineering/SKILL.md"
path: ".gemini/skills/chaos-engineering/SKILL.md"
is_collection: false
body_length: 9632
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Kaos Mühendisliği

  Üretim sistemlerindeki gerçek zayıflıkları ortaya çıkaran deneyler tasarlayın — bunları kesintiye dönüştürmeden. Çoğu "kaos mühendisliği" girişimi sabit durum ölçümünü atlar, durdurma kriteri tanımlamaz ve patlama yarıçapı sınırı koymaz. Bu beceri, kaos deneylerini güvenli ve yararlı kılan disiplini uygular.

  ## Kullanım zamanı

  - Kaos deneyimi planlama (ne kıracağız, nerede, ne zaman, nasıl durduracağız)
  - Deneyimi çalıştırmadan önce patlama yarıçapını hesaplama
  - Mevcut deneyim planını güvenlik açısından inceleme
  - Kaos aracı seçme (Chaos Toolkit / Chaos Mesh / Litmus / Gremlin / AWS FIS)
  - Kaos deneyimi postmortem yazma
  - Game Day alıştırması yürütme

  ## Kullanmama zamanı

  - Genel olay yanıtı (kullanın `incident-response`)
  - Tehdit avcılığı / red-team (kullanın `red-team`, `threat-detection`)
  - Performans yük testi (farklı amaç — kaos kapasite değil, başarısızlık modları hakkındadır)
  - Üretim hata ayıklaması (kaos zayıflıkları proaktif olarak keşfeder, gerçek olaydan sonra değil)

  ## Temel ilke: durdurma kriteri olmayan kaos bir kesintiye eşittir

  Kaos Mühendisliğinin 4 İlkesi (Netflix, 2016):

  1. **Sabit durum davranışı etrafında bir hipotez oluşturun.** "Ne kırılır?" değil, "X geçerlidir; Y hatası altında hala geçerli olur mu?" diye sorun.
  2. **Gerçek dünyada olayları değiştirin.** Gerçekçi arızalar enjekte edin: düğümleri öldürün, ağları yavaşlatın, önbelleği kaybettirin, bağımlılıkları kısıtlayın.
  3. **Deneyimleri üretimde çalıştırın.** Staging hiçbir zaman aynı başarısızlık modlarına sahip değildir. Küçükten başlayın.
  4. **Deneyimleri sürekli çalıştıracak şekilde otomatikleştirin.** Tek seferlik kaos bir basın açıklamasıdır; sürekli kaos mühendislistir.

  Beşinci ekleyin: **Durdurma kriterlerini önceden tanımlayın.** Durdurma kritereri olmayan kaos deneyimi başka bir adla bir kesintiye eşittir.

  ## Hızlı başlangıç

  ```bash
  SKILL=engineering/chaos-engineering/skills/chaos-engineering

  # 1. Deneyim tasarla
  python "$SKILL/scripts/experiment_designer.py" --target "checkout-svc" --hypothesis "p99 latency stays <500ms" --attack latency --duration-min 15

  # 2. Patlama yarıçapını hesapla
  python "$SKILL/scripts/blast_radius_calculator.py" --traffic-share 0.05 --user-pop 1000000 --duration-min 15

  # 3. Deneyimden sonra postmortem oluştur
  python "$SKILL/scripts/experiment_postmortem.py" --plan experiment.json --result-log results.txt
  ```

  ## 3 Python aracı

  Hepsi stdlib-only. `--help` ile çalıştırın.

  ### `experiment_designer.py`

  Girdilerden yapılandırılmış deneyim planı oluşturur. Gerekli bölümleri (hipotez, sabit durum metriği, patlama yarıçapı, durdurma kriterleri, geri alma) uygular.

  ```bash
  python scripts/experiment_designer.py \
    --target "checkout-svc" \
    --hypothesis "p99 latency stays <500ms when payment-svc is slow" \
    --attack latency \
    --magnitude "+200ms" \
    --duration-min 15 \
    --blast-radius "5% of US traffic" \
    --abort-if "p99 > 1000ms OR error_rate > baseline + 1pp"
  ```

  Çıktı: hipotez, sabit durum, saldırı, büyüklük, süre, patlama yarıçapı, durdurma kriterleri, geri alma prosedürü, izleme panoları ve öğrenme sorusu içeren markdown plan.

  ### `blast_radius_calculator.py`

  Planlanan deneyimin patlama yarıçapını hesaplar. Trafik payı + kullanıcı popülasyonu + süre verildiğinde, beklenen etkilenen kullanıcıları, beklenen hata bütçesi tüketimini ve risk puanını hesaplar.

  ```bash
  python scripts/blast_radius_calculator.py \
    --traffic-share 0.05 \
    --user-pop 1000000 \
    --duration-min 15 \
    --baseline-availability 0.999 \
    --expected-impact-availability 0.95
  ```

  Çıktı:
  - Beklenen etkilenen kullanıcılar
  - Tüketilen hata bütçesi (hata bütçesi dakikaları cinsinden)
  - Risk puanı: GREEN / YELLOW / RED
  - Tavsiye: PROCEED / REDUCE / ABORT

  GREEN = <%1 hata bütçesi; YELLOW = %1-10; RED = >%10.

  ### `experiment_postmortem.py`

  Deneyim planı + sonuçlarından yapılandırılmış postmortem üretir. Yaygın postmortem başarısızlık modlarını yakalar: kaydedilen öğrenme yok, takip eylemi yok, suçlayıcı dil.

  ```bash
  python scripts/experiment_postmortem.py --plan experiment.json --result-log results.txt
  ```

  Çıktı: özet, hipotez (doğrulandı mı/çürütüldü mü?), öğrendiklerimiz, bizi şaşırtanlar, sahibi olan takip eylemleri ve sonraki deneyim bağlantısı içeren markdown.

  ## 7 saldırı türü (taksonomi)

  Farklı saldırılar farklı zayıflıkları ortaya çıkarır. Tam ayrıntı için `references/attack_taxonomy.md` dosyasına bakın.

  | Saldırı | Neyi test eder | Araçlar |
  |---|---|---|
  | **Gecikme** | Zaman aşımları, yeniden denemeler, devre kesiciler | tc, Chaos Mesh `NetworkChaos` |
  | **Hata** | Hata işleme, geri dönüş yolları | Chaos Mesh `HTTPChaos`, Toxiproxy |
  | **Kaynak** (CPU, hafıza, disk) | Doygunluk işleme, otomatik ölçekleme | Chaos Mesh `StressChaos`, stress-ng |
  | **Ağ bölünmesi** | Bölünmüş beyin, fikir birliği, yük devretme | Chaos Mesh `NetworkChaos` partition |
  | **Bağımlılık hatası** | Zarifce degradasyon, geri dönüş | Service mesh fault injection |
  | **Zaman** | Saat eğriltmesi, NTP sorunları | libfaketime, Chaos Mesh `TimeChaos` |
  | **Altyapı** (örnek öldür) | Otomatik kurtarma, yük devretme | AWS FIS, Chaos Monkey |

  Hipoteze uyan saldırıyı seçin. "X yavaşsa ne olur?" → gecikme. "X ağ bağlantısını kaybetse ne olur?" → bölünme.

  ## Araçlama seçici

  | Araç | En iyi kullanım | Fiyatlandırma | Stack |
  |---|---|---|---|
  | **Chaos Toolkit** | Hafif, dil-agnostik, JSON deneyimleri | OSS | Herhangi biri |
  | **Chaos Mesh** | Kubernetes-native, zengin CRD'ler, içi-küme | OSS | Kubernetes |
  | **Litmus** | Kubernetes, Argo-entegre, geniş kütüphane | OSS + Enterprise | Kubernetes |
  | **Gremlin** | Kurumsal SaaS, multi-bulut, denetim | Ödemeliİ | Herhangi biri |
  | **AWS FIS** | AWS-native, IAM-entegre, EC2/ECS/EKS | Ödemeliİ (AWS) | AWS |
  | **Özel** | Niş ihtiyaçlar, tek-bulut, düşük bütçe | Yok | Herhangi biri |

  Karar kuralları:
  - k8s-only stack + OSS → Chaos Mesh veya Litmus (Litmus daha geniş deneyim kütüphanesine sahip)
  - Multi-bulut + OSS → Chaos Toolkit
  - AWS-ağırlıklı + basit ihtiyaçlar → AWS FIS
  - Kurumsal + denetim/uyum → Gremlin

  Ödünleşmeler için `references/tooling_landscape.md` dosyasına bakın.

  ## İş akışları

  ### İş Akışı 1: Tek bir deneyim tasarlayın ve çalıştırın

  ```
  1. Hipotez belirtin: "[Hata] olduğunda, sabit durum metriği X, Y içinde kalır."
  2. Sabit durum metriğini tanımlayın — deneyimden ÖNCESİ ölçülebilir olmalıdır.
  3. blast_radius_calculator.py çalıştırın — devam etmeden önce GREEN olduğunu doğrulayın.
  4. Planı üretmek için experiment_designer.py çalıştırın.
  5. Planın eş incelemesini alın; durdurma kriterlerinin somut olduğunu doğrulayın.
  6. #incidents (veya başka bir kanal) içinde on-call ekibini bilgilendirin.
  7. Deneyimi izleme açık olduğu şekilde çalıştırın.
  8. Durdurma kriterleri karşılanırsa, hemen durdurun; ne olduğunu kaydedin.
  9. Öğrenmeleri yakalamak için experiment_postmortem.py çalıştırın.
  10. Takip eylemlerini dosyalayın; sonraki deneyime bağlantı verin.
  ```

  ### İş Akışı 2: Game Day alıştırması

  ```
  1. Senaryo seçin (örn., "birincil veritabanı yük devretme").
  2. Çalışmaya devam etmesi gereken tüm bağımlı hizmetleri tanımlayın.
  3. Her katmanı kapsayan çok deneyimli plan oluşturun.
  4. Paydaşlar ile zamanla; on-call kapsamı gerekli.
  5. Senaryoyu yöneten bir kolaylaştırıcı ile çalıştırın.
  6. Gözlemleri gerçekleştikçe paylaşılan belgede yakalayın.
  7. Tüm gözlemleri kapsayan tek birleştirilmiş postmortem.
  8. Sahibi olan takip eylemlerini yönetim panosunda izleyin.
  ```

  ### İş Akışı 3: Sürekli kaos (game days → günlük)

  ```
  1. Başlangıç: haftalık Game Day staging'de.
  2. Şuna geç: haftalık Game Day üretimde sınırlı patlama yarıçapı ile.
  3. Olgunlaş: zamanlanmış deneyimler aracılığıyla sürekli kaos (Litmus kaos takvimi, Gremlin senaryoları).
  4. Dağıtıma bağlayın: her prod dağıtımı temel kaos taraması tetikler.
  5. İzle: hafta başına deneyimler, keşfedilen zayıflıklar, MTTR trendi.
  ```

  ## Diğer beceriler ile bileşim

  Bu beceri, bu kütüphanedeki iki diğer beceri ile açık şekilde bileşim yapır:

  | Beceri | Bileşim |
  |---|---|
  | `feature-flags-architect` | Orada tanımlanan kill switch'ler buradaki durdurma tetikleyicileridir |
  | `kubernetes-operator` | Operatörler yaygın kaos hedefleridir (hatası altında uyumunu test et) |
  | `incident-response` | Tırmanılan kaos deneyimleri olaylar haline gelir |

  ## Anti-paternler

  - **Hipotez yok** — "şeyleri kıralım" sabotajdır, mühendislik değildir
  - **Sabit durum metriği yok** — temel olmadan, X'in kırılıp kırılmadığını söyleyemezsiniz
  - **Patlama yarıçapı sınırı yok** — sınırsız tam-prod deneyimi = kesinti
  - **Durdurma kriterleri yok** — yukarıya bakın; bu zorunludur
  - **On-call kapsamı yok** — izlemesiz kaos, izlenmeyen üretimdir
  - **Sadece staging'de kaos** — staging asla prod başarısızlık modlarına sahip değildir
  - **Dev'de kaos** — işe yaramaz; dev'in prod'dan farklı başarısızlık modları vardır
  - **Tek seferlik kaos** — tek deneyim bir basın açıklamasıdır; öğrenme tekrarı gerektirir
  - **Suçlayıcı postmortem** — suçu değil, nedenleri kaydedin; takımlar aksi halde kaos çalıştırmayı bırakır

  ## Referanslar

  - `references/chaos_principles.md` — 4 ilke, tarih, ne zaman başlanacağı
  - `references/experiment_design.md` — hipotez yapısı, sabit durum metrikleri, durdurma kriterleri
  - `references/attack_taxonomy.md` — örnekler ve araçlar içeren 7 saldırı türü
  - `references/tooling_landscape.md` — Chaos Toolkit / Mesh / Litmus / Gremlin / FIS / DIY

  ## Slash komutu

  `/chaos-experiment` — 3 aracı da çalıştıran etkileşimli deneyim tasarım sihirbazı.

  ## Varlık şablonları

  - `assets/experiment_template.md` — doldur-boşluğu planı şablonu
  - `assets/postmortem_template.md` — yapılandırılmış postmortem şablonu

  ## Doğrulanabilir başarı

  Bu beceriyi kullanan bir takım şunu başarmalıdır:

  - Tüm kaos deneyimlerinin %100'ü yazılı hipotez, durdurma kriterleri ve patlama yarıçapı hesaplamasına sahip olmalıdır
  - Herhangi bir deneyimin patlama yarıçapı asla hata bütçesinin %10'unu aşmamalıdır
  - Kaos deneyimleri arasında ortalama süre <14 gün (tek seferlik değil, sürekli)
  - Her deneyim ≥1 gönderilen takip eylemi üretir
  - Sonraki 90 gün içinde hiçbir kaos deneyimi müşteri etkili olayına tırmanmaz
---

# Chaos Engineering

Design experiments that surface real weaknesses in production systems — without becoming outages. Most "chaos engineering" attempts skip steady-state measurement, define no abort criteria, and have no blast-radius bound. This skill enforces the discipline that makes chaos experiments safe and useful.

## When to use

- Planning a chaos experiment (what to break, where, when, how to abort)
- Calculating blast radius before running the experiment
- Reviewing an existing experiment plan for safety
- Choosing a chaos tool (Chaos Toolkit / Chaos Mesh / Litmus / Gremlin / AWS FIS)
- Writing a chaos experiment postmortem
- Running a Game Day exercise

## When NOT to use

- General incident response (use `incident-response`)
- Threat hunting / red-team (use `red-team`, `threat-detection`)
- Performance load testing (different goal — chaos is about failure modes, not capacity)
- Production debugging (chaos discovers weaknesses preemptively, not after-the-fact)

## Core principle: chaos without abort criteria is an outage

The 4 Principles of Chaos Engineering (Netflix, 2016):

1. **Build a hypothesis around steady-state behavior.** Not "what breaks?" but "X holds; will it still hold under fault Y?"
2. **Vary real-world events.** Inject realistic failures: kill nodes, slow networks, lose cache, throttle dependencies.
3. **Run experiments in production.** Staging never has the same failure modes. Start small.
4. **Automate experiments to run continuously.** One-off chaos is a press release; continuous chaos is engineering.

Add a fifth: **Define abort criteria up front.** A chaos experiment with no abort criteria is an outage by another name.

## Quick start

```bash
SKILL=engineering/chaos-engineering/skills/chaos-engineering

# 1. Design an experiment
python "$SKILL/scripts/experiment_designer.py" --target "checkout-svc" --hypothesis "p99 latency stays <500ms" --attack latency --duration-min 15

# 2. Calculate blast radius
python "$SKILL/scripts/blast_radius_calculator.py" --traffic-share 0.05 --user-pop 1000000 --duration-min 15

# 3. Generate postmortem after the experiment
python "$SKILL/scripts/experiment_postmortem.py" --plan experiment.json --result-log results.txt
```

## The 3 Python tools

All stdlib-only. Run with `--help`.

### `experiment_designer.py`

Generates a structured experiment plan from inputs. Enforces the required sections (hypothesis, steady-state metric, blast radius, abort criteria, rollback).

```bash
python scripts/experiment_designer.py \
  --target "checkout-svc" \
  --hypothesis "p99 latency stays <500ms when payment-svc is slow" \
  --attack latency \
  --magnitude "+200ms" \
  --duration-min 15 \
  --blast-radius "5% of US traffic" \
  --abort-if "p99 > 1000ms OR error_rate > baseline + 1pp"
```

Outputs a markdown plan with: hypothesis, steady-state, attack, magnitude, duration, blast radius, abort criteria, rollback procedure, monitoring dashboards, and learning question.

### `blast_radius_calculator.py`

Computes the blast radius of a planned experiment. Given traffic share + user population + duration, calculates expected affected users, expected error budget burn, and a risk score.

```bash
python scripts/blast_radius_calculator.py \
  --traffic-share 0.05 \
  --user-pop 1000000 \
  --duration-min 15 \
  --baseline-availability 0.999 \
  --expected-impact-availability 0.95
```

Outputs:
- Expected affected users
- Error budget consumed (in minutes of error budget)
- Risk score: GREEN / YELLOW / RED
- Recommendation: PROCEED / REDUCE / ABORT

GREEN = <1% error budget; YELLOW = 1-10%; RED = >10%.

### `experiment_postmortem.py`

Produces a structured postmortem from an experiment plan + results. Catches the common postmortem failure modes: no learning recorded, no follow-up actions, blame-laden language.

```bash
python scripts/experiment_postmortem.py --plan experiment.json --result-log results.txt
```

Outputs markdown with: summary, hypothesis (was it confirmed/refuted?), what we learned, what surprised us, follow-up actions with owners, and link to next experiment.

## The 7 attack types (taxonomy)

Different attacks reveal different weaknesses. See `references/attack_taxonomy.md` for full detail.

| Attack | What it tests | Tooling |
|---|---|---|
| **Latency** | Timeouts, retries, circuit breakers | tc, Chaos Mesh `NetworkChaos` |
| **Error** | Error handling, fallback paths | Chaos Mesh `HTTPChaos`, Toxiproxy |
| **Resource** (CPU, memory, disk) | Saturation handling, autoscaling | Chaos Mesh `StressChaos`, stress-ng |
| **Network partition** | Split-brain, consensus, failover | Chaos Mesh `NetworkChaos` partition |
| **Dependency failure** | Graceful degradation, fallback | Service mesh fault injection |
| **Time** | Clock skew, NTP issues | libfaketime, Chaos Mesh `TimeChaos` |
| **Infrastructure** (kill instance) | Auto-recovery, failover | AWS FIS, Chaos Monkey |

Pick the attack that matches the hypothesis. "What happens if X is slow?" → latency. "What happens if X loses network?" → partition.

## Tooling chooser

| Tool | Best for | Pricing | Stack |
|---|---|---|---|
| **Chaos Toolkit** | Lightweight, language-agnostic, JSON experiments | OSS | Any |
| **Chaos Mesh** | Kubernetes-native, rich CRDs, in-cluster | OSS | Kubernetes |
| **Litmus** | Kubernetes, Argo-integrated, large library | OSS + Enterprise | Kubernetes |
| **Gremlin** | Enterprise SaaS, multi-cloud, audit | Paid | Any |
| **AWS FIS** | AWS-native, IAM-integrated, EC2/ECS/EKS | Paid (AWS) | AWS |
| **Custom** | Niche needs, single-cloud, low budget | None | Any |

Decision rules:
- k8s-only stack + OSS → Chaos Mesh or Litmus (Litmus has bigger experiment library)
- Multi-cloud + OSS → Chaos Toolkit
- AWS-heavy + simple needs → AWS FIS
- Enterprise + audit/compliance → Gremlin

See `references/tooling_landscape.md` for trade-offs.

## Workflows

### Workflow 1: Design and run a single experiment

```
1. State a hypothesis: "When [fault], steady-state metric X stays within Y."
2. Identify the steady-state metric — must be measurable BEFORE the experiment.
3. Run blast_radius_calculator.py — confirm GREEN before proceeding.
4. Run experiment_designer.py to produce the plan.
5. Get a peer review of the plan; confirm abort criteria are concrete.
6. Notify the on-call team in #incidents (or whatever channel).
7. Run the experiment with monitoring open.
8. If abort criteria are hit, abort immediately; record what happened.
9. Run experiment_postmortem.py to capture learnings.
10. File follow-up actions; link to next experiment.
```

### Workflow 2: Game Day exercise

```
1. Pick a scenario (e.g., "primary database fails over").
2. Identify all dependent services that should keep working.
3. Build a multi-experiment plan covering each layer.
4. Schedule with stakeholders; on-call coverage required.
5. Run with a facilitator who manages the scenario.
6. Capture observations in a shared doc as they happen.
7. Single combined postmortem covering all observations.
8. Track follow-up actions in a board with owners.
```

### Workflow 3: Continuous chaos (game days → daily)

```
1. Start: weekly Game Day in staging.
2. Move to: weekly Game Day in production with limited blast radius.
3. Mature to: continuous chaos via scheduled experiments (Litmus chaos schedule, Gremlin scenarios).
4. Wire to deployment: every prod deploy triggers a baseline chaos sweep.
5. Track: experiments per week, weaknesses discovered, MTTR trend.
```

## Composition with other skills

This skill explicitly composes with two others in this library:

| Skill | Composition |
|---|---|
| `feature-flags-architect` | Kill switches defined there are the abort triggers here |
| `kubernetes-operator` | Operators are common chaos targets (test reconcile under fault) |
| `incident-response` | Chaos experiments that escalate become incidents |

## Anti-patterns

- **No hypothesis** — "let's break things" is sabotage, not engineering
- **No steady-state metric** — without a baseline, you can't tell if X broke
- **No blast radius bound** — full-prod experiment without limits = outage
- **No abort criteria** — see above; this is mandatory
- **No on-call coverage** — chaos without monitoring is unmonitored production
- **Chaos in staging only** — staging never has prod failure modes
- **Chaos in dev** — useless; dev has different failure modes from prod
- **One-off chaos** — single experiment is a press release; learning requires recurrence
- **Blame-laden postmortem** — record causes, not blame; teams stop running chaos otherwise

## References

- `references/chaos_principles.md` — the 4 principles, history, when to start
- `references/experiment_design.md` — hypothesis structure, steady-state metrics, abort criteria
- `references/attack_taxonomy.md` — 7 attack types with examples and tooling
- `references/tooling_landscape.md` — Chaos Toolkit / Mesh / Litmus / Gremlin / FIS / DIY

## Slash command

`/chaos-experiment` — interactive experiment design wizard that runs all 3 tools.

## Asset templates

- `assets/experiment_template.md` — fill-in plan template
- `assets/postmortem_template.md` — structured postmortem template

## Verifiable success

A team using this skill should achieve:

- 100% of chaos experiments have a written hypothesis, abort criteria, and blast-radius calculation
- Blast radius for any single experiment never exceeds 10% of error budget
- Mean time between chaos experiments <14 days (continuous, not one-off)
- Each experiment produces ≥1 follow-up action that gets shipped
- No chaos experiment escalates to a customer-impacting incident in trailing 90 days
