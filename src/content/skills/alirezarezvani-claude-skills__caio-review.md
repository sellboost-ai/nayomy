---
name: "caio-review"
description_en: "/cs:caio-review <plan> — Eval-demanding Chief AI Officer interrogation of any plan that involves AI: model selection, risk classification, cost economics, or AI hiring."
description_tr: "/cs:caio-review <plan> — AI içeren herhangi bir plan için (model seçimi, risk sınıflandırması, maliyet ekonomisi veya AI işe alımı) Eval-demanding Chief AI Officer tarafından yapılan sorgulamayı çalıştırır."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/caio-review/SKILL.md"
path: ".gemini/skills/caio-review/SKILL.md"
is_collection: false
body_length: 5531
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /cs:caio-review — CAIO Forcing Questions

  **Komut:** `/cs:caio-review <plan>`

  Değerlendirme gerektiren CAIO, yapay zeka içeren herhangi bir planı baskı testine tabi tutar. Herhangi bir yapay zeka özelliği yayımlanmadan, herhangi bir çok yıllık satıcı taahhüdü imzalanmadan veya herhangi bir yapay zeka takımı genişlemesinden önce altı soru.

  ## Ne Zaman Çalıştırılır

  - Yeni bir yapay zeka destekli özellik yayımlanmadan önce
  - Çok yıllı bir yapay zeka satıcı sözleşmesi imzalanmadan önce (API veya kendi barındırılan altyapı)
  - AB lansmanından önce herhangi bir yapay zeka özelliğinin
  - Büyük bir yapay zeka takımı işe alımından önce (özellikle ML mühendisi veya araştırma bilimci)
  - İnce ayar projesi taahhüdünden önce
  - Düzenlenmiş bir alanda yapay zekanın benimsenmesinden önce (istihdam, kredi, sağlık, eğitim, vb.)
  - Kurucu "AI" kelimesini "rekabet avantajı" veya "moat" kelimelerine yakın kullandığında

  ## Altı CAIO Sorusu

  ### 1. Bu yapay zekanın iyi olması gereken şey nedir ve bunu nasıl ölçersiniz?
  **Değerlendirme seti = gemi yok.** Herhangi bir yapay zeka özelliği dağıtılmadan önce, değerlendirme kriterlerini tanımlayın.
  - Minimum 50-100 temsili girdi
  - Beklenen çıktılar VEYA derecelendirme rubriği
  - Kenar durumları: belirsiz, adversarial, format-kenarı
  - "İyi" neye benzediğini yazamıyorsanız, özelliğiniz yok; sadece bir his var.

  ### 2. Halüsinasyon / hata oranı üzerindeki SLO nedir ve geri dönüş planı nedir?
  **Her yapay zeka özelliğinin bir arıza modu vardır. Buna hazırlık yapın.**
  - Nicelleştirilmiş SLO: "<5% halüsinasyon faktual sorgularda"
  - Algılama mekanizması: izleme, örnekleme, müşteri geri bildirimi döngüsü
  - Geri dönüş: insan-döngüde inceleme, daha düşük risk varsayılan yanıt, yanıtsız kalma
  - SLO ihlal edilirse etkilenen alan: kaç kullanıcı etkilenir, maliyet nedir?

  ### 3. AB Yapay Zeka Yasası altındaki risk seviyesi nedir ve uygunluk değerlendirmesi gerekli midir?
  **AB sakinleri etkileniyorsa VEYA alan düzenleniyorsa `ai_risk_classifier.py` çalıştırın.**
  - PROHIBITED → AB'de başlatılamaz; yeniden kapsam belirle
  - HIGH → uygunluk değerlendirmesi + AB DB kaydı + 10 Madde yükümlülükleri (3-12 ay, $50-200K)
  - LIMITED → şeffaflık yükümlülükleri (chatbot açıklaması, yapay zeka tarafından oluşturulan içerik işaretleme)
  - MINIMAL → belirli yükümlülük yok; NIST AI RMF gönüllü

  ### 4. API, ince ayar, mı yoksa inşa etme mi?
  **Spesifik kullanım durumu için `model_buildvsbuy_calculator.py` çalıştırın.**
  - B2B SaaS kullanım durumlarının %80'i: API
  - %15: ince ayar (alan özgü davranış + etiketli veri + ML takımı + yüksek hacim olduğunda)
  - <%1: sıfırdan inşa etme
  - Karar ekonomik başa baş noktasını VE pratik uygulanabilirliği (veri, takım, uyum) göz önünde bulundurmalıdır

  ### 5. Beklenen ölçekte 12 aylık maliyet yörüngesi nedir?
  **İş yükü için `ai_cost_economics.py` çalıştırın.**
  - API: değişken, doğrusal ölçeklenir
  - Kendi barındırılan: çoğunlukla sabit, başa baş genellikle 70B sınıfı için 1-10B token/ay
  - Kendi barındırılanın gizli maliyetleri: ops, izleme, model güncellemeleri, kapasite, failover, güvenlik
  - API'nin gizli maliyetleri: satıcı kilitlenmesi, yetenek kayması, hız sınırlaması, veri yerleşimi
  - Prompt önbelleğe alma en az takdir edilen kaldıraçtır; sağlayıcı desteğini kontrol edin

  ### 6. Hangi rol bunu açıyor — ve önkoşul işe almalarını yaptık mı?
  **Yapay zeka yeteneğini belirli bir role eşleyin. Kurucular yapay zeka mühendisi / ML mühendisi / araştırma bilimcisini karıştırır.**
  - Yapay zeka mühendisi: uygulamalı + tam yığın + istemler + değerlendirmeler + dağıtım (çoğu startup'ın buna ihtiyacı vardır)
  - ML mühendisi: ince ayar + yeniden eğitim altyapısı (yalnızca platform mühendisinden ve etiketli veriden sonra)
  - Araştırma bilimci: model icadı (yalnızca model ÜRÜN ise)
  - Araştırma bilimciyi ilk yapay zeka işe alımı olarak işe almayın — verimli olmak için altyapıya ihtiyaçları vardır

  ## İş Akışı

  ```bash
  # 1. Model seçimi kontrolü
  python ../../../skills/chief-ai-officer-advisor/scripts/model_buildvsbuy_calculator.py use_case.json

  # 2. Düzenleyici sınıflandırma
  python ../../../skills/chief-ai-officer-advisor/scripts/ai_risk_classifier.py use_case.json

  # 3. Maliyet projeksiyonu
  python ../../../skills/chief-ai-officer-advisor/scripts/ai_cost_economics.py workload.json
  ```

  ## Çıkış Biçimi

  ```markdown
  # CAIO Değerlendirmesi: <plan>
  **Tarih:** YYYY-MM-DD

  ## Alınan Karar
  [bir cümle — hangi CAIO kararı: model seçimi | risk sınıflandırması | ekonomi | sonraki işe alım]

  ## Değerlendirme Disiplini
  - Değerlendirme seti taahhüt edildi: evet/hayır
  - SLO tanımlandı: <metrik> < <eşik>
  - Geri dönüş davranışı: <bir satır>

  ## Model Seçimi (varsa)
  - Önerilen: API / FINE_TUNE / BUILD
  - 3 yıllık TCO: $X (seçilen yol) vs $Y (alternatifler)
  - Başa baş: <hacim>

  ## Risk Sınıflandırması (varsa)
  - AB Yapay Zeka Yasası seviyesi: PROHIBITED / HIGH / LIMITED / MINIMAL
  - Uygunluk değerlendirmesi gerekli: evet/hayır
  - ABD eyalet tetikleri: [list]
  - Gerekli kontroller açık: N

  ## Maliyet Ekonomisi (varsa)
  - Mevcut hacimde aylık maliyet: $X
  - Kendi barındırılan taşınmaya ilişkin başa baş: <hacim>
  - Varsa taşınma maliyeti: $X (3-6 ay)

  ## Org (varsa)
  - Sonraki işe alım: <role>
  - Neden bu, alternatif değil: <bir satır>
  - Ön koşul işe almalar yerinde: evet/hayır

  ## Karar
  🟢 SHIP | 🟡 SHARPEN | 🔴 BLOCK

  ## Sonraki Adımlar
  [3 somut eylem]
  ```

  ## Yönlendirme

  - `/cs:cdo-review` — herhangi bir eğitim verisi çıkarımı için
  - `/cs:gc-review` — yapay zeka satıcı sözleşmeleri, çıkış sorumluluğu, eğitim verisi lisanslama için
  - `/cs:ciso-review` — istem injection / jailbreak / eğitim verisi zehirlenmesi tehdit modeli için
  - `/cs:cfo-review` — çok yıllı satıcı veya GPU taahhüdü TCO için
  - `/cs:chro-review` — yapay zeka takımı işe almalarında (tazminat, merdiven, seviyelendirme)
  - `/cs:decide` — kararı günlüğe kaydet
  - `/cs:freeze 60` — çok yıllı yapay zeka taahhütlerine

  ## İlgili

  - Ajan: [`cs-caio-advisor`](../../agents/cs-caio-advisor.md)
  - Yetenek: [`chief-ai-officer-advisor`](../../../skills/chief-ai-officer-advisor/SKILL.md)
  - Bitişik: `../../../skills/chief-data-officer-advisor/` (eğitim verisi hakları, veri stratejisi)

  ---

  **Sürüm:** 1.0.0
---

# /cs:caio-review — CAIO Forcing Questions

**Command:** `/cs:caio-review <plan>`

The eval-demanding CAIO pressure-tests any plan that involves AI. Six questions before any AI feature ships, any multi-year vendor commitment, or any AI team expansion.

## When to Run

- Before shipping any new AI-powered feature
- Before signing a multi-year AI vendor contract (API or self-hosted infra)
- Before EU launch of any AI feature
- Before a major AI team hire (especially ML engineer or research scientist)
- Before a fine-tuning project commitment
- Before adopting AI in a regulated domain (employment, credit, healthcare, education, etc.)
- When the founder uses the word "AI" near "competitive advantage" or "moat"

## The Six CAIO Questions

### 1. What does this AI need to be good at, and how would you measure it?
**No eval set = no ship.** Before any AI feature deploys, define the eval criteria.
- 50-100 representative inputs minimum
- Expected outputs OR rubric for grading
- Edge cases: ambiguous, adversarial, format-edge
- If you can't write down what "good" looks like, you don't have a feature; you have a vibe.

### 2. What's the SLO on hallucination / error rate, and what's the fallback?
**Every AI feature has a failure mode. Plan for it.**
- Quantified SLO: "<5% hallucination on factual queries"
- Detection mechanism: monitoring, sampling, customer feedback loop
- Fallback: human-in-loop review, lower-risk default response, refuse-to-answer
- Blast radius if SLO breached: how many users affected, what is the cost?

### 3. What's the risk tier under EU AI Act, and is conformity assessment required?
**Run `ai_risk_classifier.py` if any EU residents are affected OR domain is regulated.**
- PROHIBITED → cannot launch in EU; re-scope
- HIGH → conformity assessment + EU DB registration + 10 Articles of obligations (3-12 months, $50-200K)
- LIMITED → transparency obligations (chatbot disclosure, AI-generated content marking)
- MINIMAL → no specific obligations; NIST AI RMF voluntary

### 4. API, fine-tune, or build?
**Run `model_buildvsbuy_calculator.py` for the specific use case.**
- 80% of B2B SaaS use cases: API
- 15%: fine-tune (when domain-specific behavior + labeled data + ML team + high volume)
- <1%: build from scratch
- Decision must consider economic breakeven AND practical feasibility (data, team, compliance)

### 5. What's the 12-month cost trajectory at expected scale?
**Run `ai_cost_economics.py` for the workload.**
- API: variable, scales linearly
- Self-hosted: mostly fixed, breakeven typically 1-10B tokens/month for 70B-class
- Hidden costs of self-hosted: ops, monitoring, model updates, capacity, failover, security
- Hidden costs of API: vendor lock-in, capability drift, rate limits, data residency
- Prompt caching is the most underrated lever; check provider support

### 6. What role unblocks this — and have we hired prerequisites first?
**Map AI capability to specific role. Founders confuse AI engineer / ML engineer / research scientist.**
- AI engineer: applied + full-stack + prompts + evals + deployment (most startups need this)
- ML engineer: fine-tuning + retraining infra (only after platform engineer + labeled data)
- Research scientist: model invention (only if model IS the product)
- Don't hire research scientist as first AI hire — they need infrastructure to be productive

## Workflow

```bash
# 1. Model selection check
python ../../../skills/chief-ai-officer-advisor/scripts/model_buildvsbuy_calculator.py use_case.json

# 2. Regulatory classification
python ../../../skills/chief-ai-officer-advisor/scripts/ai_risk_classifier.py use_case.json

# 3. Cost projection
python ../../../skills/chief-ai-officer-advisor/scripts/ai_cost_economics.py workload.json
```

## Output Format

```markdown
# CAIO Review: <plan>
**Date:** YYYY-MM-DD

## The Decision Being Made
[one sentence — which CAIO decision: model selection | risk classification | economics | next hire]

## Eval Discipline
- Eval set committed: yes/no
- SLO defined: <metric> < <threshold>
- Fallback behavior: <one line>

## Model Selection (if applicable)
- Recommended: API / FINE_TUNE / BUILD
- 3-year TCO: $X (chosen path) vs $Y (alternatives)
- Breakeven: <volume>

## Risk Classification (if applicable)
- EU AI Act tier: PROHIBITED / HIGH / LIMITED / MINIMAL
- Conformity assessment required: yes/no
- US state triggers: [list]
- Required controls open: N

## Cost Economics (if applicable)
- Monthly cost at current volume: $X
- Breakeven for self-hosted migration: <volume>
- Migration cost if applicable: $X (3-6 months)

## Org (if applicable)
- Next hire: <role>
- Why this, not the alternative: <one line>
- Prerequisite hires in place: yes/no

## Verdict
🟢 SHIP | 🟡 SHARPEN | 🔴 BLOCK

## Next Steps
[3 concrete actions]
```

## Routing

- `/cs:cdo-review` — for any training-data implications
- `/cs:gc-review` — for AI vendor contracts, output liability, training-data licensing
- `/cs:ciso-review` — for prompt injection / jailbreak / training-data poisoning threat model
- `/cs:cfo-review` — for multi-year vendor or GPU commitment TCO
- `/cs:chro-review` — for AI team hires (comp, ladder, leveling)
- `/cs:decide` — log the verdict
- `/cs:freeze 60` — on multi-year AI commitments

## Related

- Agent: [`cs-caio-advisor`](../../agents/cs-caio-advisor.md)
- Skill: [`chief-ai-officer-advisor`](../../../skills/chief-ai-officer-advisor/SKILL.md)
- Adjacent: `../../../skills/chief-data-officer-advisor/` (training data rights, data strategy)

---

**Version:** 1.0.0
