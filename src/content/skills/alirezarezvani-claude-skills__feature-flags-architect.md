---
name: "feature-flags-architect"
description_en: "Use when adding, retiring, or auditing feature flags. Triggers on \"add a flag\", \"ship behind a flag\", \"rollout plan\", \"kill switch\", \"stale flags\", \"flag debt\", \"LaunchDarkly\", \"GrowthBook\", \"Statsig\", \"Unleash\", \"Flipt\", or any progressive-delivery question. Ships flag debt scanner, rollout planner, and kill-switch auditor (all stdlib Python), 4 references on flag taxonomy + provider trade-offs +"
description_tr: "Feature flag yönetimi, emeklilik veya denetim işlemleri için kullanılır; \"flag ekle\", \"feature flag arkasında gönder\", \"rollout planı\", \"kill switch\", \"eski flaglar\", \"flag debt\" gibi komutlar veya LaunchDarkly, GrowthBook, Statsig, Unleash, Flipt gibi araçlarla ilgili sorularda tetiklenir. Flag debt scanner, rollout planner ve kill-switch auditor (stdlib Python) ile birlikte gelir; flag taxonomy, provider karşılaştırması ve progressive delivery stratejileri hakkında 4 referans içerir."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 18317
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/feature-flags-architect/SKILL.md"
path: ".gemini/skills/feature-flags-architect/SKILL.md"
is_collection: false
body_length: 8900
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Feature Flags Mimarı
  
  Feature flag'ler için uçtan uca disiplin: sınıflandırma, yayınlama, kademeli artış ve kullanımdan kaldırma. Çoğu takım flag'leri tek kullanımlık `if`-ifadeleri olarak ele alır; bu beceri onları ölçülebilir borç içeren kontrollü bir yaşam döngüsü olarak ele alır.
  
  ## Ne zaman kullanılır
  
  - Yeni bir flag eklemek ve bir yayın planına ihtiyaç duyduğunuzda
  - Bir kod tabanında eski veya sahipsiz flag'ler için denetim yaparken
  - Bir flag sağlayıcısı seçerken (LaunchDarkly vs GrowthBook vs Statsig vs Unleash vs Flipt vs kendi çözümü)
  - Riskli bir yayın için kill-switch yolu tasarlarken
  - Yayın dondurmasından önce flag borcunu temizlerken
  - Bir özelliğin flag'in arkasında yayınlanıp yayınlanmaması gerektiğini gözden geçirirken
  
  ## Temel ilke: flag'ler `if` değil, bir yaşam döngüsüdür
  
  ```
  request → design → ship → ramp → cleanup → archive
  ```
  
  Temizlemeyi atlayan flag'ler borç haline gelir: ölü dallar, eski varsayılanlar, test edilmeyen kod yolları, sınırsız etki alanı. Bu becerinin üç script'i yaşam döngüsünü zorlar.
  
  ## Hızlı başlangıç
  
  ```bash
  # 1. Depo'da flag borcunu denetle
  python scripts/flag_debt_scanner.py --repo . --max-age-days 90
  
  # 2. Yeni bir flag için kademeli yayın planla
  python scripts/rollout_planner.py --population 100000 --target-percent 100 --duration-days 14 --strategy ring
  
  # 3. Her flag'in belgelenmiş bir kill switch'i olduğunu doğrula
  python scripts/kill_switch_audit.py --repo . --flag-doc docs/feature-flags.md
  ```
  
  ## 4 flag tipi (taksonomi)
  
  Farklı flag türlerinin farklı yaşam süreleri ve sahipleri vardır. Yanlış sınıflandırma borç oluşturur.
  
  | Tip | Amaç | Tipik lifespan | Sahip | Temizleme tetikleyicisi |
  |---|---|---|---|---|
  | **Release** | Tamamlanmamış özelikleri üretimde gizle | günler–haftalar | Mühendislik | %100 yayın ulaşıldı |
  | **Experiment** | A/B test varyantları | haftalar | Ürün/Pazarlama | Test tamamlandı; kazanan seçildi |
  | **Operational** | Circuit breaker'lar, performans toggle'ları, kill switch'ler | aylar–yıllar | Mühendislik/SRE | Otoscaling/özellik kullanımdan kaldırma ile değiştirildi |
  | **Permission** | Kullanıcı/hesap/plan başına yetkilendirmeler | yıllar (kalıcı) | Ürün | Plan/rol kaldırıldı |
  
  Yalnızca Release ve Experiment flag'leri borç-tarayıcı izleme listesinde olmalıdır. Operational ve Permission flag'leri tasarım gereği uzun ömürlüdür. Karar ağacı için `references/flag_taxonomy.md` bölümüne bakınız.
  
  ## 3 Python aracı
  
  Hepsi sadece stdlib'i kullanır. `--help` ile çalıştırın.
  
  ### `flag_debt_scanner.py`
  
  `--max-age-days` parametresinden daha eski olan ve düşük kullanımı olan flag'leri bulur, temizleme adaylarını gösterir.
  
  ```bash
  python scripts/flag_debt_scanner.py --repo . --max-age-days 90 --format text
  python scripts/flag_debt_scanner.py --repo . --max-age-days 60 --format json > debt.json
  ```
  
  **Algılama sezgisi:**
  1. `--repo` için yaygın flag-çağrı modellerine uyan kod referanslarını yürütün:
     - `flag("...")`, `isFlagEnabled("...")`, `featureFlag("...")`, `getFlag("...")`
     - `client.variation("...", ...)`, `unleash.isEnabled("...")`, `growthbook.feature("...")`
  2. Her benzersiz flag tanımlayıcı için, onu tanıtan en eski commit'i bulun (`git log --diff-filter=A -S <name>`).
  3. Flag'i BORÇ olarak işaretleyin eğer `--max-age-days` dan daha uzun süre önce tanıtıldıysa VE ≤`--min-uses` yerlerde kullanıldıysa.
  
  Flag adı, gün cinsinden yaş, dosya referansları, önerilen eylem çıkar. JSON modu CI-dostu'dur.
  
  ### `rollout_planner.py`
  
  Nüfus boyutu, hedef yüzde, süre ve strateji'den aşamalı bir yayın programı oluşturur.
  
  ```bash
  python scripts/rollout_planner.py --population 100000 --target-percent 100 --duration-days 14 --strategy ring
  python scripts/rollout_planner.py --population 50000 --target-percent 25 --duration-days 7 --strategy linear
  python scripts/rollout_planner.py --population 1000000 --target-percent 100 --duration-days 30 --strategy log
  ```
  
  **Stratejiler:**
  - `ring`: %1 → %5 → %25 → %50 → %100, eşit aralıklı. Riskli yayınlar için varsayılan.
  - `linear`: günlük sabit oran. Orta risk için varsayılan.
  - `log`: erken hızlı, kuyruk yavaş. Güvenle düşük riskli yayınlar için varsayılan.
  - `cohort`: adlandırılmış kohort tarafından (internal → beta → free → paid → all).
  
  Her aşama için tarih, yüzde, beklenen kullanıcı sayısı, iptal kriterleri ve doğrulama adımı içeren markdown tablo çıkar.
  
  ### `kill_switch_audit.py`
  
  Koddaki keşfedilen flag'leri, her birinin yazılı bir kill switch yoluna sahip olduğunu doğrulamak için belgelemediklerine karşı çapraz referans verir.
  
  ```bash
  python scripts/kill_switch_audit.py --repo . --flag-doc docs/feature-flags.md
  python scripts/kill_switch_audit.py --repo . --flag-doc runbooks/flags.md --format json
  ```
  
  **Ne kontrol eder:**
  1. Her koddaki keşfedilen flag'in `--flag-doc` içinde bir girişi var
  2. Her giriş şunları bildirir: sahip, tip, kill-switch tetikleyicisi, izleme panosu
  3. Belgesi eksik olan flag'leri (FAIL) veya eksik alanları (WARN) rapor eder
  
  Herhangi bir yeni flag yayınlanmadan önce ön-birleştirme kapısı olarak kullanın.
  
  ## Sağlayıcı seçici (5 + DIY)
  
  | Sağlayıcı | En iyi | Fiyatlandırma modeli | Kilitlenme riski | OSS seçeneği |
  |---|---|---|---|---|
  | **LaunchDarkly** | Kurumsal, karmaşık hedefleme, denetim/uyum | MAU başına, pahalı | Yüksek | Hayır |
  | **GrowthBook** | Orta pazar, A/B test odaklı, OSS-dostu | MAU başına + OSS | Düşük | Evet (kendi sunucu) |
  | **Statsig** | Büyüme/ürün takımları, ileri deney | Ücretsiz tier + MAU başına | Orta | Hayır |
  | **Unleash** | OSS-öncelikli, kendi sunucu, geliştirici-dostu | OSS + Kurumsal | Düşük | Evet |
  | **Flipt** | Hafif, k8s-native, basit ihtiyaçlar | Yalnızca OSS | Yok | Evet |
  | **DIY** | <100 flag, hedefleme yok, tam kontrol | Yok | Yok | N/A |
  
  Karar kuralları:
  - <50 flag + hedefleme yok → config dosyası veya env vars ile DIY
  - Analitik + deney gerekir → Statsig veya GrowthBook
  - Uyum/SOC2 denetim günlükleri gerekli → LaunchDarkly
  - Kendi sunucu gerekli (veri yer bulunduğu / hava boşluğu) → Unleash veya Flipt
  - Detay için `references/provider_comparison.md` bölümüne bakınız.
  
  ## İş akışları
  
  ### İş akışı 1: Flag'in arkasında yeni bir özellik yayınla
  
  ```
  1. Sınıflandır: 4 flag türünden hangisi?
     → Release (mühendislik çalışması için en yaygın)
  2. Yayın planını tasarlamak için rollout_planner.py'yi çalıştır
  3. Kod yazmadan önce docs/feature-flags.md'ye flag girişi ekle:
     - ad, sahip, tip, kill-switch tetikleyicisi, dashboard URL
  4. Flag ile kodu yaz
  5. kill_switch_audit.py'yi çalıştır — birleştirmeden önce geçmeli
  6. %0'da yayınla; kill switch'in çalıştığını doğrula
  7. Yayın programını yürüt; iptal kriterleri karşılanırsa iptal et
  8. %100 için 7+ gün: flag'i kaldır, ölü dalı sil, doc girişini arşivle
  ```
  
  ### İş akışı 2: Üç aylık flag temizliği
  
  ```
  1. flag_debt_scanner.py --repo . --max-age-days 90 > debt.md çalıştır
  2. Her işaretlenen öğe için:
     a. %100'e ulaştığını doğrula (veya öldürüldü)
     b. Onu tanıtan issue/PR'yi bul; sahibi kaldırılmasını kabul et doğrula
     c. Ölü dalları sil; flag config'i kaldır
     d. kill_switch_audit.py'yi çalıştır — şimdi bir flag daha az göstermelidir
  3. CHANGELOG'u güncelle: "N eski flag kaldırıldı"
  ```
  
  ### İş akışı 3: Sağlayıcı seç
  
  ```
  1. Flag sayısını tahmin et (mevcut + 12 aylık projeksiyon)
  2. Gerekli özellikler:
     - Hedefleme kuralları (kullanıcı, hesap, coğrafi konum, %)?
     - A/B test + istatistik?
     - Denetim günlüğü / SOC2?
     - Kendi sunucu / veri yer bulunduğu?
  3. Fiyatlandırma bütçesi (MAU * MAU başına maliyet)
  4. provider_comparison.md karar ağacına bakın
  5. İmzalamadan önce 30 günlük kanıt kavramı oluştur
  ```
  
  ### İş akışı 4: Kill switch tasarla
  
  ```
  1. Arıza modlarını belirle:
     - Gecikme ani artışı (hangi eşik?)
     - Hata oranı ani artışı (hangi eşik?)
     - İşletme metriği gerileme (hangi eşik?)
  2. Her birini bir iptal'e bağla:
     - Manuel: dashboard bağlantısı + on-call playbook
     - Otomatik: uyarı eşiği flag'i %0'a geri döndürür
  3. Üretim yayınından ÖNCESİ kill switch'i hazırlama ortamında test et
  4. Flag-doc'da belge; kill_switch_audit.py'yi geçir
  ```
  
  ## Referanslar
  
  - `references/flag_taxonomy.md` — 4 tip, karar ağacı, sahiplik, lifespan
  - `references/provider_comparison.md` — LaunchDarkly / GrowthBook / Statsig / Unleash / Flipt / DIY değiş tokuşlar
  - `references/rollout_strategies.md` — ring / linear / log / cohort / geo, iptal kriterleri, izleme
  - `references/flag_lifecycle.md` — request → design → ship → ramp → cleanup → archive
  
  ## Slash komutu
  
  `/flag-cleanup` — Mevcut depo'da tam temizleme iş akışını çalıştır: borcu tara, kaldırma planı oluştur, kill switch'leri denetle.
  
  ## Varlık şablonları
  
  - `assets/flag_request_template.md` — yeni flag istekleri için doldurma formu (ad, sahip, tip, kill switch, yayın planı)
  
  ## Anti-kalıplar
  
  - **`if (FLAG_FOO)` 50 yerde kalıcı flag** — Permission flag'i olmalı, runtime config ile, Release flag değil
  - **Sahibi olmayan flag** — orijinal mühendis ayrıldığında, hiç kimse onu temizlemez
  - **Kill switch belgelenmeyen** — özellik kırıldığında, hiç kimse nasıl devre dışı bırakılacağını bilmez
  - **6 ay çalışan A/B test** — kazananı seç; süresiz çalıştırma borçtur
  - **Kozmetik değişiklikler için flag'ler** — flag ile değil, yayınla gönder
  
  ## Doğrulanabilir başarı
  
  Bu beceriyi kullanan bir takım şunları başarmalıdır:
  - Yeni flag'lerin %100'ü birleştirme zamanında `kill_switch_audit.py`'yi geçer
  - `flag_debt_scanner.py --max-age-days 90` depo genelinde ≤5 eski flag döndürür
  - Her flag'in belgelenmiş bir sahibi, tipi ve kill switch'i vardır
  - Release flag'i retire etme ortalama süresi: %100 yayından sonra <60 gün
---

# Feature Flags Architect

End-to-end discipline for feature flags: classify them, ship them, ramp them, and retire them. Most teams treat flags as throwaway `if`-statements; this skill treats them as a controlled lifecycle with measurable debt.

## When to use

- Adding a new flag and need a rollout plan
- Auditing a codebase for stale or orphaned flags
- Choosing a flag provider (LaunchDarkly vs GrowthBook vs Statsig vs Unleash vs Flipt vs build-your-own)
- Designing a kill-switch path for a risky launch
- Cleaning up flag debt before a release freeze
- Reviewing whether a feature should ship behind a flag at all

## Core principle: flags are a lifecycle, not an `if`

```
request → design → ship → ramp → cleanup → archive
```

Flags that skip cleanup become debt: dead branches, stale defaults, untested code paths, unbounded blast radius. The three scripts in this skill enforce the lifecycle.

## Quick start

```bash
# 1. Audit the repo for flag debt
python scripts/flag_debt_scanner.py --repo . --max-age-days 90

# 2. Plan a progressive rollout for a new flag
python scripts/rollout_planner.py --population 100000 --target-percent 100 --duration-days 14 --strategy ring

# 3. Verify every flag has a documented kill switch
python scripts/kill_switch_audit.py --repo . --flag-doc docs/feature-flags.md
```

## The 4 flag types (taxonomy)

Different flag types have different lifespans and ownership. Misclassifying creates debt.

| Type | Purpose | Typical lifespan | Owner | Cleanup trigger |
|---|---|---|---|---|
| **Release** | Hide unfinished features in production | days–weeks | Eng | 100% rollout reached |
| **Experiment** | A/B test variants | weeks | Product/Marketing | Test concluded; winner picked |
| **Operational** | Circuit breakers, perf toggles, kill switches | months–years | Eng/SRE | Replaced by autoscaling/feature retirement |
| **Permission** | Entitlements per user/account/plan | years (permanent) | Product | Plan/role removed |

Only Release and Experiment flags should be on a debt-scanner watchlist. Operational and Permission flags are by design long-lived. See `references/flag_taxonomy.md` for decision tree.

## The 3 Python tools

All three are stdlib-only. Run with `--help`.

### `flag_debt_scanner.py`

Finds flags older than `--max-age-days` with low usage, suggesting candidates for cleanup.

```bash
python scripts/flag_debt_scanner.py --repo . --max-age-days 90 --format text
python scripts/flag_debt_scanner.py --repo . --max-age-days 60 --format json > debt.json
```

**Detection heuristic:**
1. Walk `--repo` for code references matching common flag-call patterns:
   - `flag("...")`, `isFlagEnabled("...")`, `featureFlag("...")`, `getFlag("...")`
   - `client.variation("...", ...)`, `unleash.isEnabled("...")`, `growthbook.feature("...")`
2. For each unique flag identifier, find the oldest commit that introduced it (`git log --diff-filter=A -S <name>`).
3. Flag as DEBT if introduced > `--max-age-days` ago AND used in ≤`--min-uses` places.

Outputs flag name, age in days, file references, suggested action. JSON mode is CI-friendly.

### `rollout_planner.py`

Generates a phased rollout schedule from population size, target percent, duration, and strategy.

```bash
python scripts/rollout_planner.py --population 100000 --target-percent 100 --duration-days 14 --strategy ring
python scripts/rollout_planner.py --population 50000 --target-percent 25 --duration-days 7 --strategy linear
python scripts/rollout_planner.py --population 1000000 --target-percent 100 --duration-days 30 --strategy log
```

**Strategies:**
- `ring`: 1% → 5% → 25% → 50% → 100%, evenly spaced. Default for risky launches.
- `linear`: constant rate per day. Default for medium-risk.
- `log`: rapid early, slow tail. Default for low-risk launches with confidence.
- `cohort`: by named cohort (internal → beta → free → paid → all).

Outputs a markdown table with date, percent, expected user count, abort criteria, and verification step per phase.

### `kill_switch_audit.py`

Cross-references code-discovered flags against documentation to verify each has a kill switch path written down.

```bash
python scripts/kill_switch_audit.py --repo . --flag-doc docs/feature-flags.md
python scripts/kill_switch_audit.py --repo . --flag-doc runbooks/flags.md --format json
```

**What it checks:**
1. Every code-discovered flag has an entry in `--flag-doc`
2. Each entry declares: owner, type, kill-switch trigger, monitoring dashboard
3. Reports flags missing documentation (FAIL) or missing fields (WARN)

Use as a pre-merge gate before any new flag ships.

## Provider chooser (5 + DIY)

| Provider | Best for | Pricing model | Lock-in risk | OSS option |
|---|---|---|---|---|
| **LaunchDarkly** | Enterprise, complex targeting, audit/compliance | Per-MAU, expensive | High | No |
| **GrowthBook** | Mid-market, A/B testing focused, OSS-friendly | Per-MAU + OSS | Low | Yes (self-host) |
| **Statsig** | Growth/product teams, advanced experimentation | Free tier + per-MAU | Medium | No |
| **Unleash** | OSS-first, self-hosted, dev-friendly | OSS + Enterprise | Low | Yes |
| **Flipt** | Lightweight, k8s-native, simple needs | OSS-only | None | Yes |
| **DIY** | <100 flags, no targeting, full control | None | None | N/A |

Decision rules:
- <50 flags + no targeting → DIY with config file or env vars
- Need analytics + experimentation → Statsig or GrowthBook
- Compliance/SOC2 audit logs required → LaunchDarkly
- Self-hosting required (data residency / air-gapped) → Unleash or Flipt
- See `references/provider_comparison.md` for detail.

## Workflows

### Workflow 1: Ship a new feature behind a flag

```
1. Classify: which of the 4 flag types?
   → Release (most common for engineering work)
2. Run rollout_planner.py to design the ramp
3. Add flag entry to docs/feature-flags.md BEFORE writing code:
   - name, owner, type, kill-switch trigger, dashboard URL
4. Write the code with the flag
5. Run kill_switch_audit.py — must pass before merge
6. Deploy at 0%; verify kill switch works
7. Execute rollout schedule; abort if abort criteria met
8. At 100% for 7+ days: remove flag, delete dead branch, archive doc entry
```

### Workflow 2: Quarterly flag cleanup

```
1. Run flag_debt_scanner.py --repo . --max-age-days 90 > debt.md
2. For each flagged item:
   a. Confirm it reached 100% (or was killed)
   b. Find the issue/PR that introduced it; verify owner agrees to remove
   c. Delete dead branches; remove flag config
   d. Run kill_switch_audit.py — should now show one fewer flag
3. Update CHANGELOG: "Removed N stale flags"
```

### Workflow 3: Choose a provider

```
1. Estimate flag count (current + 12-month projection)
2. Required features:
   - Targeting rules (user, account, geo, %)?
   - A/B testing + stats?
   - Audit log / SOC2?
   - Self-hosting / data residency?
3. Pricing budget (MAU * cost-per-MAU)
4. See provider_comparison.md decision tree
5. Build a 30-day proof-of-concept before signing
```

### Workflow 4: Design a kill switch

```
1. Identify the failure modes:
   - Latency spike (which threshold?)
   - Error rate spike (which threshold?)
   - Business metric regression (which threshold?)
2. Wire each to an abort:
   - Manual: dashboard link + on-call playbook
   - Automated: alert threshold flips flag back to 0%
3. Test the kill switch in staging BEFORE production rollout
4. Document in flag-doc; pass kill_switch_audit.py
```

## References

- `references/flag_taxonomy.md` — 4 types, decision tree, ownership, lifespan
- `references/provider_comparison.md` — LaunchDarkly / GrowthBook / Statsig / Unleash / Flipt / DIY trade-offs
- `references/rollout_strategies.md` — ring / linear / log / cohort / geo, abort criteria, monitoring
- `references/flag_lifecycle.md` — request → design → ship → ramp → cleanup → archive

## Slash command

`/flag-cleanup` — Run the full cleanup workflow on the current repo: scan for debt, generate a removal plan, audit kill switches.

## Asset templates

- `assets/flag_request_template.md` — fill-in form for new flag requests (name, owner, type, kill switch, rollout plan)

## Anti-patterns

- **Permanent flag with `if (FLAG_FOO)` 50 places** — should be a Permission flag with a runtime config, not a Release flag
- **Flag with no owner** — when the original engineer leaves, no one cleans it up
- **No kill switch documented** — when the feature breaks, no one knows how to disable it
- **A/B test that ran 6 months** — pick a winner; running indefinitely is debt
- **Flags as feature toggles for cosmetic changes** — ship via deploy, not flag

## Verifiable success

A team using this skill should achieve:
- 100% of new flags pass `kill_switch_audit.py` at merge time
- `flag_debt_scanner.py --max-age-days 90` returns ≤5 stale flags repo-wide
- Every flag has a documented owner, type, and kill switch
- Mean time to retire a Release flag: <60 days from 100% rollout
