---
name: "clinical-research"
description_en: "Use when designing a prospective clinical study before submission — selecting and classifying endpoints (primary / key-secondary / exploratory, with surrogate-endpoint flagging), estimating sample size and power for two-arm designs (means / proportions / survival), or scoring a study plan for feasibility and a GO / GO-WITH-CONDITIONS / REDESIGN / NO-GO phase-gate decision. Every output is an ESTIM"
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18266
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/clinical-research/SKILL.md"
path: ".gemini/skills/clinical-research/SKILL.md"
is_collection: false
body_length: 9941
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # clinical-research

  Prospective clinical çalışma DESIGN: endpoints, örnek boyutu / güç, ve phase-gate uygulanabilirlik. Her çıktı, **belirtilen varsayımlarla bir tahmindir** ve **adı geçen bir insan sahibine** yönlendirilir. Bu beceri hiçbir zaman klinik tavsiye gerçeği olarak vermez ve hiçbir zaman bir biyoistatistikçi veya düzenleyici işler yerine geçmez.

  ## Amaç

  R&D klinik ekipleri, medical monitorlar ve biyoistatistik fonksiyonları *bir-hipotezimiz-var* ile *submission-için-hazır-bir-protokolümüz-var* arasındaki andaki anı yaşarlar. Bu beceri üç en zor tasarım kararını yapılandırır:

  Üç deterministik araç:

  1. `sample_size_estimator.py` — İki kollu **ortalamalar** (Cohen's d), **oranlar** (normal yaklaşım) ve **survival** (Schoenfeld events) için kapalı-form güç / örnek-boyutu. Dropout için şişirir. Bir "ESTIMATE — biyoistatistikçi ile doğrulayın" başlığı yazdırır.
  2. `endpoint_selector.py` — Aday endpointleri 5 ağırlıklı boyut (klinik alaka, ölçülebilirlik, düzenleyici kabul, değişime duyarlılık, yük) üzerinde puanlar ve her birini **PRIMARY / KEY-SECONDARY / EXPLORATORY** olarak sınıflandırır. Doğrulanmamış surrogate endpointleri cezalandırır.
  3. `phase_gate_scorer.py` — Bir çalışma planını recruitment uygulanabilirliği, endpoint hazırlığı, istatistiksel güç, operasyonel karmaşıklık ve bütçe uyumluluğu üzerinde 0-100 arasında puanlar; **GO / GO-WITH-CONDITIONS / REDESIGN / NO-GO** artı imzalaması gereken adı geçen sahipleri döndürür.

  ## Ne zaman kullanacaksınız

  Bu beceriyi şu durumlarda çağırın:

  - Bir primary endpoint seçiyorsunuz ve bunu surrogate-endpoint incelemesine karşı savunmanız gerekiyor.
  - Bir protokol özeti için savunulabilir bir ilk örnek-boyutu tahminine ihtiyacınız var.
  - Bir çalışma planı, phase-gate incelemesinden önce uygulanabilirlik okuması gerekiyor.
  - Uygun popülasyon ve siteler göz önüne alındığında planlanan kaydın uygulanabilir olup olmadığını test etmek istiyorsunuz.

  **Bu beceriyi ŞU DURUMLARDA KULLANMAYIN**: düzenleyici bir submission hazırlamak veya klinik değerlendirme raporu (bunun yerine `ra-qm-team` kullanın), hibe bulmak veya konumlandırmak (bunun yerine `research/grants` kullanın), canlı ürün A/B deneyi tasarlamak (bunun yerine `product-team/experiment-designer` kullanın) veya bir biyoistatistikçinin son örnek-boyutu gerekçesinin yerini almak.

  ## İş Akışı

  1. **Özeti taslaklandırın** — `assets/protocol_synopsis_template.md` dosyasını doldurun (amaçlar, tasarım, popülasyon, endpointler, istatistiksel plan yer tutucu, imzalaması gereken sahipler).
  2. **Endpointi seçin** — `endpoint_selector.py --input endpoints.json --profile {drug|device|biologic|diagnostic|digital-therapeutic}` komutunu çalıştırın. Sınıflandırma + surrogate bayraklarını okuyun. >1 primary ise, multiplicity kontrol planlayın.
  3. **Örnek boyutunu tahmin edin** — `sample_size_estimator.py --design {means|proportions|survival} ...` komutunu çalıştırın. Effect/difference/HR'ı yayınlanmış veya anchor-tabanlı bir kaynağa izleyin; dropout için şişirin.
  4. **Uygulanabilirliği puanlayın** — `phase_gate_scorer.py --input study.json --profile <same> --phase {1|2|3|4}` komutunu çalıştırın. Verdict + blockerlar + adı geçen sahipleri okuyun.
  5. **İmza için yönlendirin** — Özet + tahminleri gate paketine toplayın. Paket **bir tavsiyedir**; bir biyoistatistikçi, medical monitor ve düzenleyici sahibi imzalar.

  ## Scriptler

  | Script | Amaç | Profiller |
  |---|---|---|
  | `scripts/sample_size_estimator.py` | Ortalamalar, oranlar, survival için güç / örnek-boyutu | n/a (tasarım-driven) |
  | `scripts/endpoint_selector.py` | 5-boyutlu endpoint puanlaması + sınıflandırma + surrogate bayrağı | drug, device, biologic, diagnostic, digital-therapeutic |
  | `scripts/phase_gate_scorer.py` | Uygulanabilirlik 0-100 + GO/GO-WITH-CONDITIONS/REDESIGN/NO-GO + sahipler | drug, device, biologic, diagnostic, digital-therapeutic |

  Üçü de: stdlib-only, `--help`, `--sample`, `--output {human,json}`.

  ## Onboarding & özelleştirme

  Başlamadan **önce bir kez** onboarding anketini çalıştırın — varsayılanlarınızı ve adı geçen sahipleri yakalar, böylece bu becerinin her aracı önceden yapılandırılır. Özelleştirme konudur: cevaplar aslında araç davranışını değiştirir.

  ```bash
  python3 scripts/onboard.py            # interactive (also: --defaults, --set key=value, --reset)
  python3 scripts/onboard.py --show     # see the questions + current effective config
  ```

  Cevaplar `~/.config/research-ops/clinical-research.json` (global) veya `./.research-ops/clinical-research.json` (`--scope project`) dosyasında kaydedilir ve `config_loader.py` tarafından otomatik olarak okunur. Varsayılan geliştirme-alanı **profile**, varsayılan **alpha / power / dropout** ve çıktılarda yazdırılan adı geçen **biostatistician / medical monitor / regulatory owner** ayarlarını belirlerler. CLI bayrakları her zaman kaydedilen konfigürasyonu geçersiz kılar; `RESEARCH_OPS_NO_CONFIG=1` tamamen yoksayar.

  **Yedi soru:** geliştirme alanı · alpha · power · dropout · biyoistatistikçi · medical monitor · düzenleyici sahibi.

  ## autoresearch ile optimize edin (opt-in)

  Bu beceri, `engineering/autoresearch-agent` için **izole, opt-in** bir köprü ile birlikte gelir. Yalnızca "optimize" / "bir loop çalıştır" dediğinizde, bir autoresearch deneyi bu becerinin kendi uygulanabilirlik skoruna karşı iteratif olarak bir çalışma planını iyileştirir. `scripts/ar_evaluator.py` ground-truth değerlendiricidir; `feasibility_composite: <0-100>` yazdırır (daha yüksek daha iyidir).

  ```bash
  /ar:setup --domain custom --name trial-feasibility \
    --target study.json \
    --eval "python3 ar_evaluator.py --target study.json" \
    --metric feasibility_composite --direction higher
  /ar:loop custom/trial-feasibility
  ```

  İzole: sabit bağımlılık yok — autoresearch yalnızca talepte çalışır ve loop `study.json` düzenler, hiçbir zaman değerlendiriciyi (kilitli ground truth) değiştirmez.

  ## Referanslar

  - `references/study_design_canon.md` — ICH E8(R1) genel hususlar; ICH E9 + E9(R1) estimand eki; CONSORT 2010; SPIRIT 2013; FDA Multiple Endpoints kılavuzu (2022).
  - `references/endpoint_and_power.md` — Cohen *Statistical Power Analysis*; Schoenfeld (1983) survival örnek boyutu; FDA Surrogate Endpoint Tablosu / BEST sözlüğü; FDA PRO kılavuzu (2009); Chow, Shao & Wang *Sample Size Calculations in Clinical Research*.
  - `references/trial_operations.md` — ICH E6(R2/R3) GCP; TransCelerate risk-based monitoring; FDA RBM kılavuzu; CTTI recruitment en iyi uygulamaları; site-feasibility puanlaması literatürü.

  ## Varsayımlar

  - Örnek-boyutu formülleri yerleşik z-tablosu ile normal yaklaşımlar kullanır. Bunlar ilk-geçiş **tahminleridir**; bir biyoistatistikçi son gerekçeyi üretir (ve simülasyon, adaptif tasarımlar veya tam yöntemler kullanabilir).
  - Endpoint skoreri, `--profile` aracılığıyla geliştirme alanı başına *geleneksel* düzenleyici öncülleri uygular. Şirket- veya endikasyon-spesifik öncelik, öncülü geçersiz kılar.
  - Phase-gate skoreri, bir profil hasta başına maliyet karşılaştırması pişirir; varsayılanı geçersiz kılmak için gerçek bir bütçe geçin.
  - Doğrulanmamış bir surrogate, birincil bir endpointi bağlayamaz — scorer bunu bir ceza ile zorlar.

  ## Anti-paternler

  - **Bir güç tahminini gerçek olarak sunmak.** Her çıktı, imzalaması gereken adı geçen bir sahibi olan bir tahmindir.
  - **Bir kolaylık effect sizesi için güç vermek.** Effect, yönetebileceğiniz n için değil, yayınlanmış veya anchor-tabanlı MCID'ye izlenmelidir.
  - **Doğrulanmamış bir surrogate üzerinde primary'yi bağlamak.** Surrogate endpointler endikasyon için doğrulama kanıtı gerektirir.
  - **Multiplicity'i görmezden gelmek.** Birden fazla primary endpoint, önceden belirtilen alpha tahsisini gerektirir.
  - **Dropout şişirmesini atlamak.** Ham n çalışmayı küçültür; 1/(1 − dropout) ile şişirin.

  ## Farklı olan

  | Sibling / komşu | Kapsam | Fark |
  |---|---|---|
  | `ra-qm-team` | ISO 13485 QMS, ISO 14971 risk, EU MDR teknik docslar + klinik değerlendirme, FDA 510(k)/PMA/De Novo/QSR submission | Bu **submissiondır**; clinical-research **çalışmayı** önceden tasarlar |
  | `research/grants` | NIH fon keşfi + konumlandırma | Bu **fonu bulur**; bu **çalışmayı tasarlar** |
  | `product-team/experiment-designer` | Canlı ürün A/B hipotezi + örnek boyutu | Bu **ürün deneyi**dir; bu **klinik deneme**dir |
  | `research-finance` (sibling) | R&D program bütçesi + burn | Bu **programı finanse eder**; bu **çalışmayı** kapsamlandırır |

  ## Hızlı örnekler

  ```bash
  python3 scripts/sample_size_estimator.py --sample
  python3 scripts/sample_size_estimator.py --design proportions --p1 0.30 --p2 0.45 --dropout 0.15
  python3 scripts/endpoint_selector.py --sample
  python3 scripts/phase_gate_scorer.py --sample --output json
  ```

  Örnek, doğrulanmamış bir serum-sitokin surrogateı (primary olamaz) doğru şekilde bayraklandırır ve PASI-75'i PRIMARY endpoint olarak sıralar; phase-gate örneği, adı geçen sahibi zinciri içeren bir verdict döndürür.

  ## Forcing-question library (Matt Pocock grill disiplini)

  Birer birer `/cs:grill-research-ops` veya orchestrator tarafından yürütüldü. Soru başına önerilen cevap + canon alıntısı. Asla paketlenmiş değildir.

  1. **"Primary endpointiniz bir klinik sonuç mu yoksa surrogate — ve eğer surrogate ise, FDA'nın doğrulanan tablosunda var mı?"**
     Önerilen: clinical outcome, surrogate bu endikasyon için doğrulanmış olmadıkça.
     Canon: FDA Surrogate Endpoint Tablosu; BEST (Biomarkers, EndpointS, and other Tools) sözlüğü.

  2. **"Güç için minimal klinik olarak önemli fark nedir — ve bu sayı nereden geldi?"**
     Önerilen: yayınlanmış veya anchor-tabanlı MCID, alıntılanmış; hiçbir zaman kolaylık effect sizesi.
     Canon: ICH E9; Cohen *Statistical Power Analysis*.

  3. **"Hangi dropout oranını varsayıyorsunuz ve örnek boyutu bunun için şişirildi mi?"**
     Önerilen: n'yi 1/(1 − dropout) ile şişirin, haklı bir oran kullanarak.
     Canon: Chow, Shao & Wang; ICH E9(R1).

  4. **"Tek primary endpoint mi yoksa birden fazla — ve eğer birden fazla ise, multiplicity kontrol nedir?"**
     Önerilen: alpha tahsisini önceden belirtin (hiyerarşik / Bonferroni).
     Canon: FDA Multiple Endpoints kılavuzu (2022).

  5. **"Adı geçen biostatistician / medical monitor / regulatory owner bu özeti imzalayan kimdir?"**
     Önerilen: şimdi adını söyleyin — bu çıktı bir protokol değil, bir tavsiyedir.
     Canon: ICH E6(R2) GCP roller & sorumluluklar.

  Derinlik-önce yürüyün. 1-2 kilitlendi, ardından 3-5'i açın. Tümü yanıtlandıktan sonra, `endpoint_selector.py` → `sample_size_estimator.py` → `phase_gate_scorer.py` komutunu çağırın.
---

# clinical-research

Prospective clinical study DESIGN: endpoints, sample size / power, and phase-gate feasibility. Every output is an **estimate with stated assumptions** routed to a **named human owner**. This skill never gives clinical advice as fact and never substitutes for a biostatistician or regulatory affairs.

## Purpose

R&D clinical teams, medical monitors, and biostatistics functions live at the moment between *we-have-a-hypothesis* and *we-have-a-protocol-ready-for-submission*. This skill structures three of the hardest design decisions:

Three deterministic tools:

1. `sample_size_estimator.py` — Closed-form power / sample-size for two-arm **means** (Cohen's d), **proportions** (normal approximation), and **survival** (Schoenfeld events). Inflates for dropout. Prints an "ESTIMATE — confirm with a biostatistician" banner.
2. `endpoint_selector.py` — Scores candidate endpoints across 5 weighted dimensions (clinical relevance, measurability, regulatory acceptance, sensitivity-to-change, burden) and classifies each as **PRIMARY / KEY-SECONDARY / EXPLORATORY**. Penalizes unvalidated surrogate endpoints.
3. `phase_gate_scorer.py` — Scores a study plan 0-100 across recruitment feasibility, endpoint readiness, statistical power, operational complexity, and budget fit; returns **GO / GO-WITH-CONDITIONS / REDESIGN / NO-GO** plus the named owners who must sign.

## When to use

Invoke this skill when:

- You are choosing a primary endpoint and need to defend it against surrogate-endpoint scrutiny.
- You need a defensible first sample-size estimate for a protocol synopsis.
- A study plan needs a feasibility read before a phase-gate review.
- You are pressure-testing whether the planned enrollment is achievable given the eligible population and sites.

**Do NOT use this skill to**: prepare a regulatory submission or clinical evaluation report (use `ra-qm-team`), find or position a grant (use `research/grants`), design a live product A/B experiment (use `product-team/experiment-designer`), or replace a biostatistician's final sample-size justification.

## Workflow

1. **Draft the synopsis** — Fill `assets/protocol_synopsis_template.md` (objectives, design, population, endpoints, statistical plan placeholder, owners-to-sign).
2. **Select the endpoint** — Run `endpoint_selector.py --input endpoints.json --profile {drug|device|biologic|diagnostic|digital-therapeutic}`. Read the classification + surrogate flags. If >1 primary, plan multiplicity control.
3. **Estimate the sample size** — Run `sample_size_estimator.py --design {means|proportions|survival} ...`. Trace the effect/difference/HR to a published or anchor-based source; inflate for dropout.
4. **Score feasibility** — Run `phase_gate_scorer.py --input study.json --profile <same> --phase {1|2|3|4}`. Read the verdict + blockers + named owners.
5. **Route for sign-off** — Assemble the synopsis + estimates into the gate packet. The packet is **a recommendation**; a biostatistician, medical monitor, and regulatory owner sign.

## Scripts

| Script | Purpose | Profiles |
|---|---|---|
| `scripts/sample_size_estimator.py` | Power / sample-size for means, proportions, survival | n/a (design-driven) |
| `scripts/endpoint_selector.py` | 5-dimension endpoint scoring + classification + surrogate flag | drug, device, biologic, diagnostic, digital-therapeutic |
| `scripts/phase_gate_scorer.py` | Feasibility 0-100 + GO/GO-WITH-CONDITIONS/REDESIGN/NO-GO + owners | drug, device, biologic, diagnostic, digital-therapeutic |

All three: stdlib-only, `--help`, `--sample`, `--output {human,json}`.

## Onboarding & customization

Run the onboarding questionnaire **once before you start** — it captures your defaults and named owners so every tool in this skill is pre-configured. Customization is the point: the answers actually change tool behavior.

```bash
python3 scripts/onboard.py            # interactive (also: --defaults, --set key=value, --reset)
python3 scripts/onboard.py --show     # see the questions + current effective config
```

Answers are saved to `~/.config/research-ops/clinical-research.json` (global) or `./.research-ops/clinical-research.json` (`--scope project`) and are read automatically by `config_loader.py`. They set the default development-area **profile**, default **alpha / power / dropout**, and the named **biostatistician / medical monitor / regulatory owner** printed on outputs. CLI flags always override saved config; `RESEARCH_OPS_NO_CONFIG=1` ignores it entirely.

**The seven questions:** development area · alpha · power · dropout · biostatistician · medical monitor · regulatory owner.

## Optimize with autoresearch (opt-in)

This skill ships an **isolated, opt-in** bridge to `engineering/autoresearch-agent`. Only when you ask to "optimize" / "run a loop" does an autoresearch experiment iteratively improve a study plan against this skill's own feasibility score. `scripts/ar_evaluator.py` is the ground-truth evaluator; it prints `feasibility_composite: <0-100>` (higher is better).

```bash
/ar:setup --domain custom --name trial-feasibility \
  --target study.json \
  --eval "python3 ar_evaluator.py --target study.json" \
  --metric feasibility_composite --direction higher
/ar:loop custom/trial-feasibility
```

Isolated: no hard dependency — autoresearch runs only on demand, and the loop edits `study.json`, never the evaluator (locked ground truth).

## References

- `references/study_design_canon.md` — ICH E8(R1) general considerations; ICH E9 + E9(R1) estimand addendum; CONSORT 2010; SPIRIT 2013; FDA Multiple Endpoints guidance (2022).
- `references/endpoint_and_power.md` — Cohen *Statistical Power Analysis*; Schoenfeld (1983) survival sample size; FDA Surrogate Endpoint Table / BEST glossary; FDA PRO guidance (2009); Chow, Shao & Wang *Sample Size Calculations in Clinical Research*.
- `references/trial_operations.md` — ICH E6(R2/R3) GCP; TransCelerate risk-based monitoring; FDA RBM guidance; CTTI recruitment best practices; site-feasibility scoring literature.

## Assumptions

- Sample-size formulas use normal approximations with a built-in z-table. They are first-pass **estimates**; a biostatistician produces the final justification (and may use simulation, adaptive designs, or exact methods).
- The endpoint scorer applies *customary* regulatory priors per development area via `--profile`. Company- or indication-specific precedent overrides the prior.
- The phase-gate scorer bakes in a profile cost-per-patient benchmark; pass a real budget to override the default.
- An unvalidated surrogate cannot anchor a PRIMARY endpoint — the scorer enforces this with a penalty.

## Anti-patterns

- **Presenting a power estimate as fact.** Every output is an estimate with a named owner who must sign.
- **Powering for a convenience effect size.** The effect must trace to a published or anchor-based MCID, not to the n you can afford.
- **Anchoring a primary on an unvalidated surrogate.** Surrogate endpoints need validation evidence for the indication.
- **Ignoring multiplicity.** More than one primary endpoint requires pre-specified alpha allocation.
- **Skipping dropout inflation.** Raw n undersizes the study; inflate by 1/(1 − dropout).

## Distinct from

| Sibling / neighbor | Scope | Difference |
|---|---|---|
| `ra-qm-team` | ISO 13485 QMS, ISO 14971 risk, EU MDR tech docs + clinical evaluation, FDA 510(k)/PMA/De Novo/QSR submission | That is the **submission**; clinical-research designs the **study** beforehand |
| `research/grants` | NIH funding discovery + positioning | That **finds funding**; this **designs the trial** |
| `product-team/experiment-designer` | Live product A/B hypothesis + sample size | That is a **product experiment**; this is a **clinical trial** |
| `research-finance` (sibling) | R&D program budget + burn | That **funds** the program; this **scopes** the study |

## Quick examples

```bash
python3 scripts/sample_size_estimator.py --sample
python3 scripts/sample_size_estimator.py --design proportions --p1 0.30 --p2 0.45 --dropout 0.15
python3 scripts/endpoint_selector.py --sample
python3 scripts/phase_gate_scorer.py --sample --output json
```

The sample correctly flags an unvalidated serum-cytokine surrogate (cannot be primary) and ranks PASI-75 as the PRIMARY endpoint; the phase-gate sample returns a verdict with a named owner chain.

## Forcing-question library (Matt Pocock grill discipline)

Walked one at a time by `/cs:grill-research-ops` or the orchestrator. Recommended answer + canon citation per question. Never bundled.

1. **"Is your primary endpoint a clinical outcome or a surrogate — and if surrogate, is it on FDA's validated table?"**
   Recommended: clinical outcome unless the surrogate is validated for this indication.
   Canon: FDA Surrogate Endpoint Table; BEST (Biomarkers, EndpointS, and other Tools) glossary.

2. **"What's the minimal clinically important difference you're powering for — and where did that number come from?"**
   Recommended: a published or anchor-based MCID, cited; never a convenience effect size.
   Canon: ICH E9; Cohen *Statistical Power Analysis*.

3. **"What dropout rate are you assuming, and is the sample size inflated for it?"**
   Recommended: inflate n by 1/(1 − dropout) using a justified rate.
   Canon: Chow, Shao & Wang; ICH E9(R1).

4. **"Single primary endpoint or multiple — and if multiple, what's the multiplicity control?"**
   Recommended: pre-specify alpha allocation (hierarchical / Bonferroni).
   Canon: FDA Multiple Endpoints guidance (2022).

5. **"Who is the named biostatistician / medical monitor / regulatory owner signing this synopsis?"**
   Recommended: name them now — this output is a recommendation, not a protocol.
   Canon: ICH E6(R2) GCP roles & responsibilities.

Walk depth-first. Lock 1-2 before opening 3-5. After all are answered, invoke `endpoint_selector.py` → `sample_size_estimator.py` → `phase_gate_scorer.py`.
