---
name: "chief-ai-officer-advisor"
description_en: "Chief AI Officer advisory for startups: model build-vs-buy decisions (API vs fine-tune vs in-house), AI risk classification under EU AI Act + US state patchwork, AI cost economics (API-to-self-hosted breakeven), and AI team org evolution. Use when deciding whether to call an API or fine-tune, classifying AI use cases for regulatory risk, calculating when self-hosting pays off, sequencing AI hires,"
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/chief-ai-officer-advisor/SKILL.md"
path: ".gemini/skills/chief-ai-officer-advisor/SKILL.md"
is_collection: false
body_length: 13104
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Chief AI Officer Advisor

  Startup CAIO'ları ve CAIO'su olmayan kurucuların stratejik AI liderliği. **Dört karar, AI hype yok:**

  1. **API, fine-tune mu yoksa kendi sistemimizi mi kullanmalıyız?** — 3 yıllık TCO ile model al-veya-kur analizi
  2. **Bu AI use case düzenlemeler altında yüksek riskli mi ve nasıl yönetiriz?** — EU AI Act + NIST AI RMF + ABD eyalet karmaşası
  3. **API'den self-hosted'a ne zaman geçeriz ve ne kadar maliyeti olur?** — token ekonomisi ve kırılma noktası analizi
  4. **Sonraki AI pozisyonuna kim işe alırız?** — aşama-rol haritası (AI engineer ≠ ML engineer ≠ research scientist)

  Bu beceri taktik AI/ML mühendisliğini **kapsamaz**. RAG implementasyonu, agent tasarımı, prompt mühendisliği, eval altyapısı, model deployment veya cost optimizasyonu için bkz. `engineering/rag-architect/`, `engineering/agent-designer/`, `engineering/prompt-governance/`, `engineering/self-eval/`, `engineering/llm-cost-optimizer/`.

  ## Anahtar Kelimeler

  CAIO, chief AI officer, AI stratejisi, model seçimi, foundation model, fine-tuning, RLHF, DPO, LoRA, QLoRA, build vs buy, AI build-vs-buy, model risk tier, EU AI Act, AI Act Article 6, Article 9, Article 10, Annex III, prohibited AI, high-risk AI, NIST AI RMF, AI risk management framework, NYC Local Law 144, Colorado SB 21-169, Illinois HB 53, model card, eval set, eval harness, hallucination rate, jailbreak risk, prompt injection, AI red team, AI safety, alignment, model lifecycle, model registry, API-to-self-hosted breakeven, GPU economics, A100, H100, inference cost, fine-tuning cost, AI team, AI engineer, ML engineer, research scientist, MLOps, AI platform

  ## Hızlı Başlangıç

  ```bash
  # Karar A: API vs fine-tune vs build
  python scripts/model_buildvsbuy_calculator.py                          # gömülü müşteri-destek örneği
  python scripts/model_buildvsbuy_calculator.py path/to/use_case.json

  # Karar B: EU AI Act + ABD eyalet kanunları altında risk sınıflandırması
  python scripts/ai_risk_classifier.py                                   # gömülü işe alım-AI örneği
  python scripts/ai_risk_classifier.py path/to/use_case.json

  # Karar C: API vs self-hosted ekonomisi
  python scripts/ai_cost_economics.py                                    # gömülü 5M tokens/gün örneği
  python scripts/ai_cost_economics.py path/to/workload.json
  ```

  ## Temel Sorular (bunları ilk olarak sorun)

  - **Bu AI'nin iyi olması gereken şey nedir ve nasıl ölçersiniz?** (Eval set yoksa, deploy etmeyin.)
  - **Hallucination / hata oranı SLO'su nedir?** (Yoksa, "AI quality" vibes'dır.)
  - **Model yanlış olduğunda ne olur?** (Fallback davranışı, human-in-the-loop, etki alanı.)
  - **EU AI Act altında risk tier nedir ve uyum değerlendirmesi gerekli mi?** (Ürün lansman zaman çizelgesini belirler.)
  - **Aylık kaç token'da self-hosting API'yi yener?** (Frontier kalite için neredeyse hiçbir zaman 100M token/ay'ın altında değil.)
  - **AI engineer mi yoksa ML research scientist mi işe alıyoruz?** (Farklı işler; kurucular karıştırırlar.)

  ## Temel Sorumluluklar

  ### 1. Model Build-vs-Buy

  Karar "AI kullan mı yoksa kullanma mı" değildir — her use case için **API vs fine-tune vs in-house**'dur. Her yolun farklı bir TCO eğrisi, latency profili ve capability tavanı vardır.

  **Varsayılan yol: API (frontier model)**
  - Ne zaman kullanılır: frontier (Claude, GPT, Gemini) tarafından iyi sunulan, QPS < 100, latency bütçesi > 1s, maliyet < $50K/ay
  - Neden: frontier API'ler çoğu takımın in-house fine-tune yapabileceğinden 10-100x daha yeteneklidir
  - Başarısızlık modu: API rate limits ölçekte, vendor lock-in, model versiyonları arasında capability kayması

  **Daha küçük bir modeli fine-tune edin**
  - Ne zaman kullanılır: API'nin prompt'a sığmadığı alan-spesifik davranış (medikal kodlama, yasal redline), yüksek hacim API maliyetini azaltır, latency bütçesi < 500ms, belirli stil/format tutarlılığı gerekli
  - Yaklaşımlar: tam fine-tune (nadir), LoRA/QLoRA (yaygın), RLHF/DPO (alignment önemli olduğunda)
  - Başarısızlık modu: fine-tune edilmiş model 6-12 ay içinde frontier capability'nin gerisinde kalır; devam eden retraining maliyeti

  **Sıfırdan build / pre-train edin**
  - Ne zaman kullanılır: neredeyse hiçbir zaman. Siz bir foundation-model şirketsiniz VEYA benzersiz bir veri corpus'unuz, $50M+ funding'i ve 18+ ay sabırsızlığınız vardır.
  - Başarısızlık modu: ship ettiğinde frontier modeller yakalamış olur ve batık maliyetiniz kurtarılamaz

  **Çalıştırın** `model_buildvsbuy_calculator.py` 3 yıllık TCO ile use-case-spesifik tavsiye için. Tam karar ağacı için bkz. `references/model_buildvsbuy_strategy.md`.

  ### 2. AI Risk Sınıflandırması & Yönetim

  2026 sorusu her kurucu yüzleşiyor: **bu AI use case yüksek-risk düzenleyici yükümlülükleri tetikliyor mu?**

  **EU AI Act (2026'da yürürlükte) seviyeleri:**

  | Seviye | Örnekler | Yükümlülükler |
  |---|---|---|
  | **Yasak** | Sosyal puanlama, gerçek zamanlı biyometrik gözetim, manipülatif AI | EU'da deploy edilemez |
  | **Yüksek-risk** | İstihdam taraması, kredi puanlaması, eğitim erişimi, kritik altyapı, kanun yaptırımı, biyometrik kimlik | Uyum değerlendirmesi, kayıt, pazar sonrası izleme, şeffaflık, insan gözetimi |
  | **Sınırlı-risk** | Chatbotlar, deepfakeler, duygu tanıma | Şeffaflık: kullanıcı AI ile etkileşim halinde olduğunu bilmeli |
  | **Minimal-risk** | Tavsiye sistemleri, spam filtreleri, çoğu B2B SaaS içlikleri | Belirli yükümlülükler yoktur |

  **Çalıştırın** `ai_risk_classifier.py` use case'i sınıflandırmak ve gerekli kontrol listesini almak için.

  **ABD eyalet karmaşası (kapsamlı değil):**

  - NYC LL 144 — Otomasyonlu İstihdam Karar Araçları (AEDT'ler) yıllık bias audit + aday bildirimini gerektirir
  - Colorado AI Act / SB 21-169 — Tüketici kararlarında AI (kredi, sigorta, istihdam, konut)
  - Illinois HB 53 — Mülakatlar/işe almada AI
  - California SB 1001 — Bot açıklaması
  - Texas TCPA — Biyometrik tanımlayıcı yakalama
  - Federal NIST AI RMF — gönüllü; giderek daha fazla sözleşmelerde referans alınıyor

  **Endüstri-spesifik katmanlar:**

  - Sağlık: FDA AI/ML rehberi (2023), MDR (EU) tıbbi cihaz AI'ı için, tıbbi cihazlar için AI/ML etkin 510(k) yolu
  - Mali: NYDFS Reg 23, FTC Section 5, kredi kararları için ECOA
  - Sigorta: NAIC model bulletin, eyalet sigorta komiseri kuralları

  Tam düzenleyici ortam + yönetim programı kontrol listesi için bkz. `references/ai_risk_governance.md`.

  ### 3. AI Maliyet Ekonomisi

  **Kırılma noktası sorusu:** aylık kaç token'da self-hosted inference API maliyetlerini yener?

  **Anahtar bileşenler:**

  - **API maliyeti** — değişken, token başına. Frontier modeller 2026: Claude Sonnet 4.6 ~$3/$15 M token başına (input/output), GPT-4o ~$2.50/$10, Gemini 2.5 ~$1.25/$5
  - **Self-hosted maliyeti** — sabit (GPU commitment) + değişken (elektrik). H100 spot ~$2-5/saat, A100 spot ~$1-3/saat. Llama 3.1 70B / Qwen 2.5 72B: %70 kullanımdayken ~$0.50-2.00 M output token başına
  - **Self-hosting'in gizli maliyetleri** — on-call ops, monitoring, model güncellemeleri, scaling overhead, idle time cezası
  - **API'nin gizli maliyetleri** — rate limits çok-vendor failover gerektiriyor, vendor lock-in, versiyonlar arasında capability kayması, veri konutu

  **Tipik kırılma noktası (frontier-quality):** model boyutuna ve kabul edilebilir quality tradeoff'a bağlı olarak 100M–500M token/ay. Bunun altında API kazanır. Bunun üstünde hesap makinesiyi çalıştırın.

  **Çalıştırın** `ai_cost_economics.py` workload özelliğiyle kırılma noktası + GPU oranları ve model boyutu duyarlılığı için.

  Tam ekonomi modeli ve operasyonel hususlar için bkz. `references/ai_cost_economics.md`.

  ### 4. AI Takım Org Evrim

  **Yanlış soru:** "ML engineer mi yoksa research scientist mi işe alalım?"
  **Doğru soru:** "Sonraki AI capability'sini ship etmek için ne gerekiyor ve hangi rol bunu açıyor?"

  Aşama-rol haritası:

  | Aşama | İlk AI işe alımı | Sonra | Sonra |
  |---|---|---|---|
  | Pre-PMF | Kurucu + 1 ML-meraklı engineer prompt'larla oynayan | — | — |
  | Series A | **AI engineer** (applied, full-stack; prompts/evals/deployment sahipleri) | Evals/quality için ikinci AI engineer | — |
  | Series B | AI/ML platform engineer (inference, evals, observability) | Ürün güvenilirliği için üçüncü AI engineer | Model core IP ise data scientist |
  | Series C | AI Müdürü | ML research scientist (ancak model ÜRÜN ise) | AI safety / red team (müşteri-facing AI ise) |
  | Late-stage | Head of AI → CAIO | Birden fazla research scientist, platform takım, safety/red team | İş birimi başına federe AI leads |

  **Kritik farklar:**

  - **AI engineer** ≠ **ML engineer** ≠ **research scientist**
    - AI engineer: full-stack + prompts + evals + deployment. Çoğu startup buna ihtiyaç duyar, diğerlerine değil.
    - ML engineer: production deployment, monitoring, retraining altyapısı. Data engineer'dan sonra işe alın.
    - Research scientist: model muciti, yeni mimariler. Sadece Series C+ ve model core IP ise.

  **Merkezi vs gömülü AI:** AI merkezi başlar (bir takım) ve data takımından çok daha uzun kalır, çünkü yüzey alanı daha küçüktür. Ancak AI 4+ ürün yüzeyine deploy edildikten sonra gömün.

  Bkz. `references/ai_team_org_evolution.md`.

  ## İş Akışları

  ### İş Akışı 1: Model Seçim Kararı (1 saat)
  **Amaç:** Belirli bir use case'in API, fine-tune mu yoksa build'i kullanması gerekip gerekmediğine karar verin.

  ```bash
  # 1. use_case.json tanımlayın (hacim, latency, accuracy, takım boyutu, bütçe)
  python scripts/model_buildvsbuy_calculator.py use_case.json
  # 2. 3 yıllık TCO + breakeven'ı gözden geçirin
  # 3. cs-cfo-advisor ile bütçe taahhütünü çapraz kontrol edin
  # 4. cs-cto-advisor ile mühendislik kapasitesini çapraz kontrol edin (esp. fine-tune için)
  # 5. /cs:decide ile günlüğe kaydedin; multi-yıl vendor taahhütü üzerinde /cs:freeze 60'ı düşünün
  ```

  ### İş Akışı 2: AI Risk Sınıflandırması (2-4 saat)
  **Amaç:** EU AI Act + ABD eyalet kanunları altında use case'i sınıflandırın, gerekli kontrolleri belirleyin.

  ```bash
  # 1. use_case.json tanımlayın (etkilenen kararlar, kullanıcılar, coğrafya, sektor)
  python scripts/ai_risk_classifier.py use_case.json
  # 2. YÜKSEK-RİSK için: uyum değerlendirmesi + kayıt bütçeyi belirleyin
  # 3. SINIRLI-RİSK için: şeffaflık gerekliliklerini uygulayın
  # 4. cs-general-counsel-advisor ile kontratlar etkisini çapraz kontrol edin
  # 5. cs-ciso-advisor ile teknik güvenlemeleri çapraz kontrol edin
  # 6. /cs:decide ile günlüğe kaydedin
  ```

  ### İş Akışı 3: API-to-Self-Hosted Breakeven (1 gün)
  **Amaç:** API'den self-hosted inference'a taşındığında (ve taşındığında) kararını verin.

  ```bash
  # 1. workload.json oluşturun (token/gün, model boyutu, latency, quality toleransı)
  python scripts/ai_cost_economics.py workload.json
  # 2. Duyarlılık senaryoları çalıştırın (düşük/orta/yüksek GPU oranları)
  # 3. Taşıma maliyeti tahmin edin (mühendislik zamanı + risk)
  # 4. cs-cfo-advisor ile capex taahhütünü çapraz kontrol edin
  # 5. cs-cto-advisor ile platform hazırlığını çapraz kontrol edin
  # 6. /cs:decide ile günlüğe kaydedin; GPU taahhütü imzalanırsa /cs:freeze ile eşleştirin
  ```

  ### İş Akışı 4: AI Takım Yol Haritası (1 hafta)
  **Amaç:** Sonraki 18 ayın AI işe alımlarını ship etme yetenekleriyle hizala.

  1. Ürünün 12 ayda ihtiyaç duyduğu ilk 5 AI yeteneğini listele
  2. Her yeteneği onu ship eden role harita (bkz. `ai_team_org_evolution.md`)
  3. İşe alımları sırala (bir defada bir rol, sonraki öncesi ramp)
  4. cs-chro-advisor ile comp + leveling'i çapraz kontrol edin
  5. merkezi vs gömülü tetikleyiciyi belirleyin

  ## Çıktı Standartları

  ```
  **Bottom Line:** [bir cümle — karar ve gerekçe]
  **Karar:** [birden biri: model seçimi | risk sınıflandırması | ekonomisi | sonraki işe alım]
  **Kanıt:** [araçtan sayılar, sıfatlar değil]
  **Nasıl Hareket Edilir:** [3 somut sonraki adım]
  **Sizin Kararınız:** [sadece kurucu yapabilir]
  ```

  ## Bitişik Beceriler

  - `../chief-data-officer-advisor/` — Training data hakları, veri ürün stratejisi (model kararlarına doğrudan bağlı)
  - `../cto-advisor/` — Mimari kapasite, scaling uçurumları (esp. self-hosted inference için)
  - `../ciso-advisor/` — AI için tehdit modellemesi (prompt injection, jailbreak, training data poisoning)
  - `../general-counsel-advisor/` — AI sözleşmeleri (vendor sorumluluğu, output mülkiyeti, training-data lisanslama)
  - `../cfo-advisor/` — Build-vs-buy TCO math, multi-yıl vendor taahhütleri
  - `../chro-advisor/` — AI takım işe alımı + comp
  - `../../../engineering/rag-architect/` — Taktik RAG implementasyonu
  - `../../../engineering/agent-designer/` — Taktik agent mimarisi
  - `../../../engineering/prompt-governance/` — Taktik prompt yönetimi
  - `../../../engineering/self-eval/` — Taktik eval altyapısı
  - `../../../engineering/llm-cost-optimizer/` — Taktik inference cost optimizasyonu

  ## Referanslar

  - [model_buildvsbuy_strategy.md](references/model_buildvsbuy_strategy.md) — Tam karar ağacı + 3 yıllık TCO bileşenleri + her yolun ne zaman başarısız olduğu
  - [ai_risk_governance.md](references/ai_risk_governance.md) — EU AI Act + NIST AI RMF + ABD eyalet karmaşası + endüstri katmanları + yönetim programı
  - [ai_cost_economics.md](references/ai_cost_economics.md) — API fiyatlandırması 2026 + GPU kiralama ekonomisi + kullanım gerçeklikleri + taşıma maliyeti
  - [ai_team_org_evolution.md](references/ai_team_org_evolution.md) — Aşama-rol haritası + rol tanımları (AI engineer ≠ ML engineer ≠ scientist) + anti-pattern'ler

  ---

  **Versiyon:** 1.0.0
  **Durum:** Üretime Hazır
  **Sorumluluk Reddi:** AI düzenlemesi hızla evrimleşiyor. Bu beceri kararları ve tradeoff'ları 2026 itibariyle yüzeylese de, özellikle EU AI Act uyum değerlendirmeleri altında bağlayıcı uyum kararları için nitelikli AI hukuk müşaviri yerine geçemez.
---

# Chief AI Officer Advisor

Strategic AI leadership for startup CAIOs and founders without one. **Four decisions, no AI hype:**

1. **Should we use an API, fine-tune, or build our own?** — model build-vs-buy with 3-year TCO
2. **Is this AI use case high-risk under regulation, and how do we govern it?** — EU AI Act + NIST AI RMF + US state patchwork
3. **When do we switch from API to self-hosted, and at what cost?** — token economics with breakeven analysis
4. **What AI role do we hire next?** — stage-to-role map (AI engineer ≠ ML engineer ≠ research scientist)

This skill does **not** cover tactical AI/ML engineering. For RAG implementation, agent design, prompt engineering, eval infrastructure, model deployment, or cost optimization, see `engineering/rag-architect/`, `engineering/agent-designer/`, `engineering/prompt-governance/`, `engineering/self-eval/`, `engineering/llm-cost-optimizer/`.

## Keywords

CAIO, chief AI officer, AI strategy, model selection, foundation model, fine-tuning, RLHF, DPO, LoRA, QLoRA, build vs buy, AI build-vs-buy, model risk tier, EU AI Act, AI Act Article 6, Article 9, Article 10, Annex III, prohibited AI, high-risk AI, NIST AI RMF, AI risk management framework, NYC Local Law 144, Colorado SB 21-169, Illinois HB 53, model card, eval set, eval harness, hallucination rate, jailbreak risk, prompt injection, AI red team, AI safety, alignment, model lifecycle, model registry, API-to-self-hosted breakeven, GPU economics, A100, H100, inference cost, fine-tuning cost, AI team, AI engineer, ML engineer, research scientist, MLOps, AI platform

## Quick Start

```bash
# Decision A: API vs fine-tune vs build
python scripts/model_buildvsbuy_calculator.py                          # embedded customer-support sample
python scripts/model_buildvsbuy_calculator.py path/to/use_case.json

# Decision B: Risk classification under EU AI Act + US state laws
python scripts/ai_risk_classifier.py                                   # embedded hiring-AI sample
python scripts/ai_risk_classifier.py path/to/use_case.json

# Decision C: API vs self-hosted economics
python scripts/ai_cost_economics.py                                    # embedded 5M tokens/day sample
python scripts/ai_cost_economics.py path/to/workload.json
```

## Key Questions (ask these first)

- **What does this AI need to be good at, and how would you measure it?** (If no eval set, no ship.)
- **What's the SLO on hallucination / error rate?** (Without one, "AI quality" is a vibe.)
- **What happens when the model is wrong?** (Fallback behavior, human-in-the-loop, blast radius.)
- **What's the risk tier under EU AI Act, and is conformity assessment required?** (Determines product launch timeline.)
- **At what monthly token volume does self-hosting beat API?** (Almost never below 100M tokens/month at frontier quality.)
- **Are we hiring an AI engineer or an ML research scientist?** (Different jobs; founders confuse them.)

## Core Responsibilities

### 1. Model Build-vs-Buy

The decision is not "use AI or not" — it's **API vs fine-tune vs in-house** for each use case. Each path has a different TCO curve, latency profile, and capability ceiling.

**Default path: API (frontier model)**
- Use when: well-served by frontier (Claude, GPT, Gemini), QPS < 100, latency budget > 1s, cost < $50K/month
- Why: frontier APIs are 10-100x more capable than what most teams can fine-tune in-house
- Failure mode: API rate limits at scale, vendor lock-in, capability drift between model versions

**Fine-tune a smaller model**
- Use when: domain-specific behavior the API can't be prompted into (medical coding, legal redlining), high volume reducing API cost, latency budget < 500ms, specific style/format consistency required
- Approaches: full fine-tune (rare), LoRA/QLoRA (common), RLHF/DPO (when alignment matters)
- Failure mode: fine-tuned model lags frontier capability within 6-12 months; ongoing retraining cost

**Build from scratch / pre-train**
- Use when: almost never. You're a foundation-model company, OR you have a unique data corpus, $50M+ funding, and 18+ month patience.
- Failure mode: by the time you ship, frontier models have caught up and your sunk cost is unrecoverable

**Run** `model_buildvsbuy_calculator.py` for a use-case-specific recommendation with 3-year TCO. See `references/model_buildvsbuy_strategy.md` for full decision tree.

### 2. AI Risk Classification & Governance

The 2026 question every founder is facing: **does this AI use case trigger high-risk regulatory obligations?**

**EU AI Act (in force 2026) tiers:**

| Tier | Examples | Obligations |
|---|---|---|
| **Prohibited** | Social scoring, real-time biometric surveillance, manipulative AI | Cannot deploy in EU |
| **High-risk** | Employment screening, credit scoring, education access, critical infrastructure, law enforcement, biometric ID | Conformity assessment, registration, post-market monitoring, transparency, human oversight |
| **Limited-risk** | Chatbots, deepfakes, emotion recognition | Transparency: user must know they're interacting with AI |
| **Minimal-risk** | Recommendation systems, spam filters, most B2B SaaS internals | No specific obligations |

**Run** `ai_risk_classifier.py` to classify a use case and get the required-controls list.

**US state patchwork (non-exhaustive):**

- NYC LL 144 — Automated Employment Decision Tools (AEDTs) require annual bias audit + candidate notice
- Colorado AI Act / SB 21-169 — AI in consumer decisions (credit, insurance, employment, housing)
- Illinois HB 53 — AI in interview/hiring
- California SB 1001 — Bot disclosure
- Texas TCPA — Biometric identifier capture
- Federal NIST AI RMF — voluntary; increasingly referenced in contracts

**Industry-specific overlays:**

- Healthcare: FDA AI/ML guidance (2023), MDR (EU) for medical-device AI, 510(k) pathway for AI/ML-enabled medical devices
- Financial: NYDFS Reg 23, FTC Section 5, ECOA for credit decisions
- Insurance: NAIC model bulletin, state insurance commissioner rules

See `references/ai_risk_governance.md` for the full regulatory landscape + governance program checklist.

### 3. AI Cost Economics

**The breakeven question:** at what monthly token volume does self-hosted inference beat API costs?

**Key components:**

- **API cost** — variable, per-token. Frontier models 2026: Claude Sonnet 4.6 ~$3/$15 per M tokens (input/output), GPT-4o ~$2.50/$10, Gemini 2.5 ~$1.25/$5
- **Self-hosted cost** — fixed (GPU commitment) + variable (electricity). H100 spot ~$2-5/hour, A100 spot ~$1-3/hour. Llama 3.1 70B / Qwen 2.5 72B: ~$0.50-2.00 per million output tokens at 70% utilization
- **Hidden costs of self-hosting** — ops on-call, monitoring, model updates, scaling overhead, idle time penalty
- **Hidden costs of API** — rate limits requiring multi-vendor failover, vendor lock-in, capability drift between versions, data residency

**Typical breakeven (frontier-quality):** 100M–500M tokens/month, depending on model size and acceptable quality tradeoff. Below this, API wins. Above this, run the calculator.

**Run** `ai_cost_economics.py` with workload characteristics for a breakeven point + sensitivity to GPU rates and model size.

See `references/ai_cost_economics.md` for the full economics model and operational considerations.

### 4. AI Team Org Evolution

**The wrong question:** "Should we hire an ML engineer or a research scientist?"
**The right question:** "What's the next AI capability we need to ship, and what role unblocks that?"

Stage-to-role map:

| Stage | First AI hire | Then | Then |
|---|---|---|---|
| Pre-PMF | Founder + 1 ML-curious engineer playing with prompts | — | — |
| Series A | **AI engineer** (applied, full-stack; owns prompts/evals/deployment) | Second AI engineer for evals/quality | — |
| Series B | AI/ML platform engineer (inference, evals, observability) | Third AI engineer for production reliability | Data scientist if model is core IP |
| Series C | Manager of AI | ML research scientist (only if model IS the product) | AI safety / red team (if customer-facing AI) |
| Late-stage | Head of AI → CAIO | Multiple research scientists, platform team, safety/red team | Federated AI leads per business unit |

**Critical distinctions:**

- **AI engineer** ≠ **ML engineer** ≠ **research scientist**
  - AI engineer: full-stack + prompts + evals + deployment. Most startups need this, not the others.
  - ML engineer: production deployment, monitoring, retraining infrastructure. Hire after data engineer.
  - Research scientist: model invention, novel architectures. Only at Series C+ if model is core IP.

**Centralize-vs-embed for AI:** AI starts centralized (one team) and stays there longer than data team, because the surface area is smaller. Embed only when AI is being deployed in 4+ product surfaces.

See `references/ai_team_org_evolution.md`.

## Workflows

### Workflow 1: Model Selection Decision (1 hour)
**Goal:** Decide whether a specific use case should use API, fine-tune, or build.

```bash
# 1. Define use_case.json (volume, latency, accuracy, team size, budget)
python scripts/model_buildvsbuy_calculator.py use_case.json
# 2. Review 3-year TCO + breakeven
# 3. Cross-check with cs-cfo-advisor on budget commitment
# 4. Cross-check with cs-cto-advisor on engineering capacity (esp. for fine-tune)
# 5. Log via /cs:decide; consider /cs:freeze 60 on multi-year vendor commitment
```

### Workflow 2: AI Risk Classification (2-4 hours)
**Goal:** Classify a use case under EU AI Act + US state laws, identify required controls.

```bash
# 1. Define use_case.json (decisions affected, users, geography, sector)
python scripts/ai_risk_classifier.py use_case.json
# 2. For HIGH-RISK: budget conformity assessment + registration
# 3. For LIMITED-RISK: implement transparency requirements
# 4. Cross-check with cs-general-counsel-advisor on contractual implications
# 5. Cross-check with cs-ciso-advisor on technical safeguards
# 6. Log via /cs:decide
```

### Workflow 3: API-to-Self-Hosted Breakeven (1 day)
**Goal:** Decide when (and whether) to migrate from API to self-hosted inference.

```bash
# 1. Build workload.json (tokens/day, model size, latency, quality tolerance)
python scripts/ai_cost_economics.py workload.json
# 2. Run sensitivity scenarios (low/mid/high GPU rates)
# 3. Estimate migration cost (engineering time + risk)
# 4. Cross-check with cs-cfo-advisor on capex commitment
# 5. Cross-check with cs-cto-advisor on platform readiness
# 6. Log via /cs:decide; pair with /cs:freeze if signing GPU commitment
```

### Workflow 4: AI Team Roadmap (1 week)
**Goal:** Sequence next 18 months of AI hires aligned to capabilities to ship.

1. List top 5 AI capabilities the product needs in 12 months
2. Map each capability to the role that ships it (see `ai_team_org_evolution.md`)
3. Sequence hires (one role at a time, ramp before next)
4. Cross-check with cs-chro-advisor on comp + leveling
5. Identify the centralize-vs-embed trigger

## Output Standards

```
**Bottom Line:** [one sentence — decision and rationale]
**The Decision:** [one of: model selection | risk classification | economics | next hire]
**The Evidence:** [numbers from the tool, not adjectives]
**How to Act:** [3 concrete next steps]
**Your Decision:** [the call only the founder can make]
```

## Adjacent Skills

- `../chief-data-officer-advisor/` — Training data rights, data product strategy (chains directly to model decisions)
- `../cto-advisor/` — Architecture capacity, scaling cliffs (esp. for self-hosted inference)
- `../ciso-advisor/` — Threat modeling for AI (prompt injection, jailbreak, training data poisoning)
- `../general-counsel-advisor/` — AI contracts (vendor liability, output ownership, training-data licensing)
- `../cfo-advisor/` — Build-vs-buy TCO math, multi-year vendor commitments
- `../chro-advisor/` — AI team hiring + comp
- `../../../engineering/rag-architect/` — Tactical RAG implementation
- `../../../engineering/agent-designer/` — Tactical agent architecture
- `../../../engineering/prompt-governance/` — Tactical prompt management
- `../../../engineering/self-eval/` — Tactical eval infrastructure
- `../../../engineering/llm-cost-optimizer/` — Tactical inference cost optimization

## References

- [model_buildvsbuy_strategy.md](references/model_buildvsbuy_strategy.md) — Full decision tree + 3-year TCO components + when each path fails
- [ai_risk_governance.md](references/ai_risk_governance.md) — EU AI Act + NIST AI RMF + US state patchwork + industry overlays + governance program
- [ai_cost_economics.md](references/ai_cost_economics.md) — API pricing 2026 + GPU rental economics + utilization realities + migration cost
- [ai_team_org_evolution.md](references/ai_team_org_evolution.md) — Stage-to-role map + role definitions (AI engineer ≠ ML engineer ≠ scientist) + anti-patterns

---

**Version:** 1.0.0
**Status:** Production Ready
**Disclaimer:** AI regulation is evolving rapidly. This skill surfaces decisions and tradeoffs as of 2026 but cannot replace qualified AI counsel for binding compliance decisions, especially under EU AI Act conformity assessments.
