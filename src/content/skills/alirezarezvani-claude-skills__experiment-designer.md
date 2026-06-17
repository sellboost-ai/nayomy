---
name: "experiment-designer"
description_en: "Use when planning product experiments, writing testable hypotheses, estimating sample size, prioritizing tests, or interpreting A/B outcomes with practical statistical rigor."
description_tr: "Ürün deneylerini planlarken, test edilebilir hipotezler yazarken, örnek boyutunu tahmin ederken, testleri önceliklendirirken veya A/B test sonuçlarını pratik istatistiksel sağlam yöntemlerle yorumlarken kullanın."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18317
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/experiment-designer/SKILL.md"
path: ".gemini/skills/experiment-designer/SKILL.md"
is_collection: false
body_length: 2905
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Deney Tasarımcısı
  
  Açık hipotezler ve savunulabilir kararlarla ürün deneylerini tasarlayın, önceliklendirin ve değerlendirin.
  
  ## Ne Zaman Kullanılır
  
  Bu beceriyi şu durumlarda kullanın:
  - A/B ve çok değişkenli deney planlaması
  - Hipotez yazımı ve başarı kriterleri tanımlaması
  - Örnek boyutu ve minimum tespit edilebilir etki planlaması
  - ICE puanlaması ile deney önceliklendirmesi
  - Ürün kararları için istatistiksel çıktıları okuma
  
  ## Temel İş Akışı
  
  1. Hipotezi If/Then/Because formatında yazın
  - If we change `[intervention]`
  - Then `[metric]` will change by `[expected direction/magnitude]`
  - Because `[behavioral mechanism]`
  
  2. Testi çalıştırmadan önce metrikleri tanımlayın
  - Birincil metrik: tek karar metriği
  - Koruma metrikleri: kalite/risk koruması
  - İkincil metrikler: yalnızca teşhis amaçlı
  
  3. Örnek boyutunu tahmin edin
  - Temel dönüşüm oranı veya temel ortalama
  - Minimum tespit edilebilir etki (MDE)
  - Anlamlılık seviyesi (alpha) ve güç
  
  Kullanın:
  ```bash
  python3 scripts/sample_size_calculator.py --baseline-rate 0.12 --mde 0.02 --mde-type absolute
  ```
  
  4. Deneyleri ICE ile önceliklendirin
  - Impact: potansiyel kazanç
  - Confidence: kanıt kalitesi
  - Ease: maliyet/hız/karmaşıklık
  
  ICE Score = (Impact * Confidence * Ease) / 10
  
  5. Durdurma kurallarıyla başlatın
  - Önceden sabit örnek boyutu veya sabit süre seçin
  - Uygun yöntem olmadan tekrarlanan kontrollerden kaçının
  - Koruma metriklerini sürekli izleyin
  
  6. Sonuçları yorumlayın
  - İstatistiksel anlamlılık, işletme anlamlılığı değildir
  - Nokta tahmini + güven aralığını karar eşiğiyle karşılaştırın
  - Yenilik etkilerini ve segment heterojenliğini araştırın
  
  ## Hipotez Kalitesi Kontrol Listesi
  
  - [ ] Açık müdahale ve kitleyi içerir
  - [ ] Ölçülebilir metrik değişimini belirtir
  - [ ] Makul nedensellik sebebini açıklar
  - [ ] Beklenen minimum etkiyi içerir
  - [ ] Başarısızlık koşulunu tanımlar
  
  ## Yaygın Deney Hatalarından Kaçınma
  
  - Yanlış negatif sonuçlara yol açan yetersiz güçlü testler
  - İzolasyon olmadan çok sayıda eş zamanlı değişikliği çalıştırma
  - Test sırasında hedefleme veya uygulamayı değiştirme
  - Rastgele artışlarda erken durdurma
  - Örnek oranı uyuşmazlığını ve enstrümantasyon sapmasını göz ardı etme
  - P-value'dan etkisi büyüklüğü bağlamı olmadan başarı ilan etme
  
  ## İstatistiksel Yorumlama Koruma Mekanizmaları
  
  - p-value < alpha, boş hipoteze karşı kanıt gösterir, garantili doğru değildir.
  - Güven aralığı sıfırı/etkisiz durumu geçerse, yönlü iddia belirsizdir.
  - Geniş aralıklar, anlamlı olsa bile düşük kesinliği gösterir.
  - İşletme etkisine bağlı pratik anlamlılık eşiklerini kullanın.
  
  Bakınız:
  - `references/experiment-playbook.md`
  - `references/statistics-reference.md`
  
  ## Araçlar
  
  ### `scripts/sample_size_calculator.py`
  
  Gerekli örnek boyutunu (varyant başına ve toplam) şunlardan hesaplar:
  - temel oran
  - MDE (mutlak veya göreceli)
  - anlamlılık seviyesi (alpha)
  - istatistiksel güç
  
  Örnek:
  ```bash
  python3 scripts/sample_size_calculator.py \
    --baseline-rate 0.10 \
    --mde 0.015 \
    --mde-type absolute \
    --alpha 0.05 \
    --power 0.8
  ```
---

# Experiment Designer

Design, prioritize, and evaluate product experiments with clear hypotheses and defensible decisions.

## When To Use

Use this skill for:
- A/B and multivariate experiment planning
- Hypothesis writing and success criteria definition
- Sample size and minimum detectable effect planning
- Experiment prioritization with ICE scoring
- Reading statistical output for product decisions

## Core Workflow

1. Write hypothesis in If/Then/Because format
- If we change `[intervention]`
- Then `[metric]` will change by `[expected direction/magnitude]`
- Because `[behavioral mechanism]`

2. Define metrics before running test
- Primary metric: single decision metric
- Guardrail metrics: quality/risk protection
- Secondary metrics: diagnostics only

3. Estimate sample size
- Baseline conversion or baseline mean
- Minimum detectable effect (MDE)
- Significance level (alpha) and power

Use:
```bash
python3 scripts/sample_size_calculator.py --baseline-rate 0.12 --mde 0.02 --mde-type absolute
```

4. Prioritize experiments with ICE
- Impact: potential upside
- Confidence: evidence quality
- Ease: cost/speed/complexity

ICE Score = (Impact * Confidence * Ease) / 10

5. Launch with stopping rules
- Decide fixed sample size or fixed duration in advance
- Avoid repeated peeking without proper method
- Monitor guardrails continuously

6. Interpret results
- Statistical significance is not business significance
- Compare point estimate + confidence interval to decision threshold
- Investigate novelty effects and segment heterogeneity

## Hypothesis Quality Checklist

- [ ] Contains explicit intervention and audience
- [ ] Specifies measurable metric change
- [ ] States plausible causal reason
- [ ] Includes expected minimum effect
- [ ] Defines failure condition

## Common Experiment Pitfalls

- Underpowered tests leading to false negatives
- Running too many simultaneous changes without isolation
- Changing targeting or implementation mid-test
- Stopping early on random spikes
- Ignoring sample ratio mismatch and instrumentation drift
- Declaring success from p-value without effect-size context

## Statistical Interpretation Guardrails

- p-value < alpha indicates evidence against null, not guaranteed truth.
- Confidence interval crossing zero/no-effect means uncertain directional claim.
- Wide intervals imply low precision even when significant.
- Use practical significance thresholds tied to business impact.

See:
- `references/experiment-playbook.md`
- `references/statistics-reference.md`

## Tooling

### `scripts/sample_size_calculator.py`

Computes required sample size (per variant and total) from:
- baseline rate
- MDE (absolute or relative)
- significance level (alpha)
- statistical power

Example:
```bash
python3 scripts/sample_size_calculator.py \
  --baseline-rate 0.10 \
  --mde 0.015 \
  --mde-type absolute \
  --alpha 0.05 \
  --power 0.8
```
