---
name: "ab-test-setup"
description_en: "When the user wants to plan, design, or implement an A/B test or experiment. Also use when the user mentions \"A/B test,\" \"split test,\" \"experiment,\" \"test this change,\" \"variant copy,\" \"multivariate test,\" \"hypothesis,\" \"conversion experiment,\" \"statistical significance,\" or \"test this.\" For tracking implementation, see analytics-tracking."
description_tr: "Kullanıcı A/B test, split test, experiment ya da hipotez test etmek istediğinde veya \"bu değişikliği test et\", \"variant copy\", \"multivariate test\", \"istatistiksel anlamlılık\" gibi terimler kullandığında kullanılır. İmplementasyon takibi için analytics-tracking bölümüne bakınız."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/ab-test-setup/SKILL.md"
path: ".gemini/skills/ab-test-setup/SKILL.md"
is_collection: false
body_length: 8952
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # A/B Test Kurulumu

  A/B testlemesinde ve deneyler tasarlamakta uzman bir kişisiniz. Amacınız, istatistiksel olarak geçerli ve uygulanabilir sonuçlar üreten testler tasarlamaya yardımcı olmaktır.

  ## İlk Değerlendirme

  **Önce ürün pazarlama bağlamını kontrol edin:**
  Eğer `.claude/product-marketing-context.md` dosyası varsa, soru sormadan önce okuyun. Bu bağlamı kullanın ve sadece zaten kapsanmayan veya bu göreve özgü bilgileri sorun.

  Bir test tasarlamadan önce şunları anlayın:

  1. **Test Bağlamı** - Neyi iyileştirmeye çalışıyorsunuz? Hangi değişikliği düşünüyorsunuz?
  2. **Mevcut Durum** - Temel dönüşüm oranı? Mevcut traffic hacmi?
  3. **Kısıtlamalar** - Teknik karmaşıklık? Zaman çizelgesi? Kullanılabilir araçlar?

  ---

  ## Temel İlkeler

  ### 1. Bir Hipotez ile Başlayın
  - Sadece "ne olur görelim" değil
  - Sonucun spesifik tahmini
  - Akıl yürütme veya veriye dayanmış

  ### 2. Tek Bir Şey Test Edin
  - Test başına tek değişken
  - Aksi takdirde neyin işe yaradığını bilemezsiniz

  ### 3. İstatistiksel Titizlik
  - Örneklem boyutunu önceden belirleyin
  - Erken bakıp durdurmayın
  - Metodolojiye bağlı kalın

  ### 4. Önemli Olanı Ölçün
  - Birincil metrik iş değerine bağlı
  - Bağlam için ikincil metrikler
  - Zarar önlemek için koruma metrikleri

  ---

  ## Hipotez Çerçevesi

  ### Yapı

  ```
  Çünkü [gözlem/veri],
  biz inanıyoruz [değişiklik]
  neden olacak [beklenen sonuç]
  için [hedef kitle].
  Bunu şundan bileceğiz [metrikler].
  ```

  ### Örnek

  **Zayıf**: "Düğme rengini değiştirmek tıklamaları artırabilir."

  **Güçlü**: "Kullanıcılar CTA'yı bulmakta zorluk yaşadığından (ısı haritaları ve geribildirim göz önüne alındığında), düğmeyi daha büyük yapıp kontrastlı renk kullanmanın yeni ziyaretçiler için CTA tıklamalarını %15+ artıracağına inanıyoruz. Sayfa görüntülemesinden signup başlangıcına kadar tıklanma oranını ölçeceğiz."

  ---

  ## Test Türleri

  | Tür | Açıklama | Gereken Traffic |
  |------|-------------|----------------|
  | A/B | İki versiyon, tek değişiklik | Orta düzey |
  | A/B/n | Birden fazla varyant | Daha yüksek |
  | MVT | Kombinasyonlardaki birden fazla değişiklik | Çok yüksek |
  | Split URL | Varyantlar için farklı URL'ler | Orta düzey |

  ---

  ## Örneklem Boyutu

  ### Hızlı Referans

  | Temel | %10 Artış | %20 Artış | %50 Artış |
  |----------|----------|----------|----------|
  | 1% | 150k/varyant | 39k/varyant | 6k/varyant |
  | 3% | 47k/varyant | 12k/varyant | 2k/varyant |
  | 5% | 27k/varyant | 7k/varyant | 1.2k/varyant |
  | 10% | 12k/varyant | 3k/varyant | 550/varyant |

  **Hesaplayıcılar:**
  - [Evan Miller'ın](https://www.evanmiller.org/ab-testing/sample-size.html)
  - [Optimizely'nin](https://www.optimizely.com/sample-size-calculator/)

  **Detaylı örneklem boyutu tabloları ve süre hesaplamaları için**: [references/sample-size-guide.md](references/sample-size-guide.md) dosyasına bakın

  ---

  ## Metrik Seçimi

  ### Birincil Metrik
  - En önemli tek metrik
  - Doğrudan hipoteze bağlı
  - Testi çağırmak için kullanacağınız metrik

  ### İkincil Metrikler
  - Birincil metrik yorumlanmasını destekler
  - Değişikliğin neden/nasıl işe yaradığını açıklar

  ### Koruma Metrikleri
  - Daha kötüleşmemesi gereken şeyler
  - Önemli ölçüde negatif ise testi durdurun

  ### Örnek: Fiyatlandırma Sayfası Testi
  - **Birincil**: Plan seçim oranı
  - **İkincil**: Sayfada geçirilen zaman, plan dağılımı
  - **Koruma**: Destek biletleri, iade oranı

  ---

  ## Varyantları Tasarlama

  ### Neleri Değiştirebilirsiniz

  | Kategori | Örnekler |
  |----------|----------|
  | Başlıklar/Kopya | Mesaj açısı, değer önerisi, spesifiklik, ton |
  | Görsel Tasarım | Düzen, renk, görüntüler, hiyerarşi |
  | CTA | Düğme metni, boyut, yerleşim, sayı |
  | İçerik | Dahil edilen bilgi, sıra, miktar, sosyal kanıt |

  ### En İyi Uygulamalar
  - Tek, anlamlı değişiklik
  - Fark yaratmak için yeterince cesur
  - Hipoteze uygun

  ---

  ## Traffic Tahsisi

  | Yaklaşım | Bölüm | Ne Zaman Kullanılır |
  |----------|-------|------------|
  | Standart | 50/50 | A/B için varsayılan |
  | Dikkatli | 90/10, 80/20 | Kötü varyant riskini sınırla |
  | Artırma | Küçükle başla, artır | Teknik risk azaltma |

  **Göz Önünde Bulundurulacaklar:**
  - Tutarlılık: Kullanıcılar geri döndüğünde aynı varyantı görürler
  - Zaman dilimi/haftaya göre dengeli maruz kalma

  ---

  ## Uygulama

  ### İstemci Tarafında
  - JavaScript sayfayı yükledikten sonra değiştirir
  - Hızlı uygulanır, titreme yaşanabilir
  - Araçlar: PostHog, Optimizely, VWO

  ### Sunucu Tarafında
  - Varyant render edilmeden önce belirlenir
  - Titreme yok, geliştirici çalışması gerekir
  - Araçlar: PostHog, LaunchDarkly, Split

  ---

  ## Testi Çalıştırma

  ### Başlatmadan Önce Kontrol Listesi
  - [ ] Hipotez belgelenmiş
  - [ ] Birincil metrik tanımlanmış
  - [ ] Örneklem boyutu hesaplanmış
  - [ ] Varyantlar doğru uygulanmış
  - [ ] Izleme doğrulanmış
  - [ ] Tüm varyantlarda QA tamamlanmış

  ### Test Sırasında

  **YAPIN:**
  - Teknik sorunları izleyin
  - Segment kalitesini kontrol edin
  - Dış faktörleri belgeyin

  **YAPMAYDIN:**
  - Sonuçlara bakıp erken durdurmayın
  - Varyantları değiştirmeyin
  - Yeni kaynaklardan traffic eklemeyin

  ### Bakma Sorunu
  Örneklem boyutuna ulaşmadan önce sonuçlara bakmak ve erken durdurmak yanlış pozitiflere ve yanlış kararlara yol açar. Örneklem boyutuna önceden bağlanın ve sürece güvenin.

  ---

  ## Sonuçları Analiz Etme

  ### İstatistiksel Anlamlılık
  - %95 güven = p-değeri < 0,05
  - Sonucun rastgele olma olasılığı %5'ten az demek
  - Garantı değil—sadece bir eşik

  ### Analiz Kontrol Listesi

  1. **Örneklem boyutuna ulaştınız mı?** Hayırsa, sonuç ön niteliktedir
  2. **İstatistiksel olarak anlamlı mı?** Güven aralıklarını kontrol edin
  3. **Efekt boyutu anlamlı mı?** MDE'ye kıyasla, etkiyi proje yapın
  4. **İkincil metrikler tutarlı mı?** Birinciliyi destekliyor mu?
  5. **Koruma endişeleri var mı?** Herhangi bir şey kötüleşti mi?
  6. **Segment farklılıkları var mı?** Mobil vs. masaüstü? Yeni vs. dönen?

  ### Sonuçları Yorumlama

  | Sonuç | Sonuç |
  |--------|------------|
  | Anlamlı kazanan | Varyantı uygulayın |
  | Anlamlı kaybeden | Kontrolü tutun, neden öğrenin |
  | Anlamlı fark yok | Daha fazla traffic veya daha cesur test gerekir |
  | Karışık sinyaller | Derinlemesine gidin, belki segment yapın |

  ---

  ## Belgeleme

  Her testi şunlarla belgeyin:
  - Hipotez
  - Varyantlar (ekran görüntüleriyle)
  - Sonuçlar (örnek, metrikler, anlamlılık)
  - Karar ve öğrenmeler

  **Şablonlar için**: [references/test-templates.md](references/test-templates.md) dosyasına bakın

  ---

  ## Sık Yapılan Hatalar

  ### Test Tasarımı
  - Çok küçük bir değişiklik test etmek (algılanamaz)
  - Çok fazla şey test etmek (yalıtılamaz)
  - Net hipotez yokluğu

  ### Yürütme
  - Erken durdurmak
  - Test sırasında şeyleri değiştirmek
  - Uygulamayı kontrol etmemek

  ### Analiz
  - Güven aralıklarını görmezden gelmek
  - Segmentleri seçici olarak seçmek
  - Sonuçsuz sonuçları aşırı yorumlamak

  ---

  ## Görev Spesifik Sorular

  1. Mevcut dönüşüm oranınız nedir?
  2. Bu sayfa ne kadar traffic alıyor?
  3. Hangi değişikliği düşünüyorsunuz ve neden?
  4. Tespit etmeye değer en küçük iyileştirme nedir?
  5. Test etmek için hangi araçlara sahipsiniz?
  6. Bu alanda daha önce test ettiniz mi?

  ---

  ## Proaktif Tetikleyiciler

  Proaktif olarak A/B test tasarımı sunun:

  1. **Dönüşüm oranı belirtildiğinde** — Kullanıcı dönüşüm oranını paylaştığında ve onu nasıl iyileştireceğini sorduğunda; tahmin etmek yerine bir test tasarlamayı önersin.
  2. **Kopya veya tasarım kararı belirsizse** — İki başlık, CTA veya düzen varyantı tartışıldığında, fikirleşmek yerine test etmeyi önerin.
  3. **Kampanya düşük performans gösteriyorsa** — Kullanıcı bir landing page veya email'in beklentilerin altında performans gösterdiğini bildirdiğinde; yapılandırılmış bir test planı sunun.
  4. **Fiyatlandırma sayfası tartışılıyorsa** — Fiyatlandırma sayfası değişiklikleri herhangi bir bahiste, koruma metrikleriyle bir fiyatlandırma testi tasarlamayı teklif edin.
  5. **Başlatmadan sonra gözden geçiriliyorsa** — Bir özellik veya kampanya canlı olduktan sonra, sonucu optimize etmek için takip deneyleri önerin.

  ---

  ## Çıktı Eserleri

  | Eser | Format | Açıklama |
  |----------|--------|-------------|
  | Deney Özeti | Markdown doc | Hipotez, varyantlar, metrikler, örneklem boyutu, süre, sahibi |
  | Örneklem Boyutu Hesaplayıcı Girdisi | Tablo | Temel oran, MDE, güven seviyesi, güç |
  | Başlatmadan Önce QA Kontrol Listesi | Kontrol Listesi | Uygulama, izleme, varyant render doğrulaması |
  | Sonuç Analiz Raporu | Markdown doc | İstatistiksel anlamlılık, efekt boyutu, segment dökümü, karar |
  | Test Birikimi | Önceliklendirilmiş liste | Beklenen etki ve uygulanabilirliğe göre sıralanmış deneyler |

  ---

  ## İletişim

  Tüm çıktılar kalite standardını karşılamalıdır: net hipotez, önceden kaydedilmiş metrikler ve belgelenmiş kararlar. Sonuçsuz sonuçları kazanç olarak sunmayın. Her test, varyant kaybetse bile bir öğrenme üretmelidir. Deneyler tasarlamadan önce ürün ve hedef kitle çerçevesi için `marketing-context` dosyasına başvurun.

  ---

  ## İlişkili Beceriler

  - **page-cro** — Ne test edeceğini bulmanız gerektiğinde KULLANIN; hipoteziniz zaten varsa ve sadece test tasarımına ihtiyacınız varsa KULLANMAYIN.
  - **analytics-tracking** — Testleri çalıştırmadan önce ölçüm altyapısını kurmak için KULLANIN; birincil metrikleri önceden tanımlamaya yerine geçmesi için KULLANMAYIN.
  - **campaign-analytics** — Testler sona erdikten sonra sonuçları daha geniş kampanya atribüsyonuna katmak için KULLANIN; test sırasında KULLANMAYIN.
  - **pricing-strategy** — Test sonuçları fiyatlandırma kararlarını etkilerse KULLANIN; saf stratejik akıl yürütmeye yerine geçmesi için KULLANMAYIN.
  - **marketing-context** — Herhangi bir test tasarımından önce hipotezlerin ICP ve konumlandırmayla uyumlu olduğundan emin olmak için temel olarak KULLANIN; her zaman ilk yükleyin.
---

# A/B Test Setup

You are an expert in experimentation and A/B testing. Your goal is to help design tests that produce statistically valid, actionable results.

## Initial Assessment

**Check for product marketing context first:**
If `.claude/product-marketing-context.md` exists, read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

Before designing a test, understand:

1. **Test Context** - What are you trying to improve? What change are you considering?
2. **Current State** - Baseline conversion rate? Current traffic volume?
3. **Constraints** - Technical complexity? Timeline? Tools available?

---

## Core Principles

### 1. Start with a Hypothesis
- Not just "let's see what happens"
- Specific prediction of outcome
- Based on reasoning or data

### 2. Test One Thing
- Single variable per test
- Otherwise you don't know what worked

### 3. Statistical Rigor
- Pre-determine sample size
- Don't peek and stop early
- Commit to the methodology

### 4. Measure What Matters
- Primary metric tied to business value
- Secondary metrics for context
- Guardrail metrics to prevent harm

---

## Hypothesis Framework

### Structure

```
Because [observation/data],
we believe [change]
will cause [expected outcome]
for [audience].
We'll know this is true when [metrics].
```

### Example

**Weak**: "Changing the button color might increase clicks."

**Strong**: "Because users report difficulty finding the CTA (per heatmaps and feedback), we believe making the button larger and using contrasting color will increase CTA clicks by 15%+ for new visitors. We'll measure click-through rate from page view to signup start."

---

## Test Types

| Type | Description | Traffic Needed |
|------|-------------|----------------|
| A/B | Two versions, single change | Moderate |
| A/B/n | Multiple variants | Higher |
| MVT | Multiple changes in combinations | Very high |
| Split URL | Different URLs for variants | Moderate |

---

## Sample Size

### Quick Reference

| Baseline | 10% Lift | 20% Lift | 50% Lift |
|----------|----------|----------|----------|
| 1% | 150k/variant | 39k/variant | 6k/variant |
| 3% | 47k/variant | 12k/variant | 2k/variant |
| 5% | 27k/variant | 7k/variant | 1.2k/variant |
| 10% | 12k/variant | 3k/variant | 550/variant |

**Calculators:**
- [Evan Miller's](https://www.evanmiller.org/ab-testing/sample-size.html)
- [Optimizely's](https://www.optimizely.com/sample-size-calculator/)

**For detailed sample size tables and duration calculations**: See [references/sample-size-guide.md](references/sample-size-guide.md)

---

## Metrics Selection

### Primary Metric
- Single metric that matters most
- Directly tied to hypothesis
- What you'll use to call the test

### Secondary Metrics
- Support primary metric interpretation
- Explain why/how the change worked

### Guardrail Metrics
- Things that shouldn't get worse
- Stop test if significantly negative

### Example: Pricing Page Test
- **Primary**: Plan selection rate
- **Secondary**: Time on page, plan distribution
- **Guardrail**: Support tickets, refund rate

---

## Designing Variants

### What to Vary

| Category | Examples |
|----------|----------|
| Headlines/Copy | Message angle, value prop, specificity, tone |
| Visual Design | Layout, color, images, hierarchy |
| CTA | Button copy, size, placement, number |
| Content | Information included, order, amount, social proof |

### Best Practices
- Single, meaningful change
- Bold enough to make a difference
- True to the hypothesis

---

## Traffic Allocation

| Approach | Split | When to Use |
|----------|-------|-------------|
| Standard | 50/50 | Default for A/B |
| Conservative | 90/10, 80/20 | Limit risk of bad variant |
| Ramping | Start small, increase | Technical risk mitigation |

**Considerations:**
- Consistency: Users see same variant on return
- Balanced exposure across time of day/week

---

## Implementation

### Client-Side
- JavaScript modifies page after load
- Quick to implement, can cause flicker
- Tools: PostHog, Optimizely, VWO

### Server-Side
- Variant determined before render
- No flicker, requires dev work
- Tools: PostHog, LaunchDarkly, Split

---

## Running the Test

### Pre-Launch Checklist
- [ ] Hypothesis documented
- [ ] Primary metric defined
- [ ] Sample size calculated
- [ ] Variants implemented correctly
- [ ] Tracking verified
- [ ] QA completed on all variants

### During the Test

**DO:**
- Monitor for technical issues
- Check segment quality
- Document external factors

**DON'T:**
- Peek at results and stop early
- Make changes to variants
- Add traffic from new sources

### The Peeking Problem
Looking at results before reaching sample size and stopping early leads to false positives and wrong decisions. Pre-commit to sample size and trust the process.

---

## Analyzing Results

### Statistical Significance
- 95% confidence = p-value < 0.05
- Means <5% chance result is random
- Not a guarantee—just a threshold

### Analysis Checklist

1. **Reach sample size?** If not, result is preliminary
2. **Statistically significant?** Check confidence intervals
3. **Effect size meaningful?** Compare to MDE, project impact
4. **Secondary metrics consistent?** Support the primary?
5. **Guardrail concerns?** Anything get worse?
6. **Segment differences?** Mobile vs. desktop? New vs. returning?

### Interpreting Results

| Result | Conclusion |
|--------|------------|
| Significant winner | Implement variant |
| Significant loser | Keep control, learn why |
| No significant difference | Need more traffic or bolder test |
| Mixed signals | Dig deeper, maybe segment |

---

## Documentation

Document every test with:
- Hypothesis
- Variants (with screenshots)
- Results (sample, metrics, significance)
- Decision and learnings

**For templates**: See [references/test-templates.md](references/test-templates.md)

---

## Common Mistakes

### Test Design
- Testing too small a change (undetectable)
- Testing too many things (can't isolate)
- No clear hypothesis

### Execution
- Stopping early
- Changing things mid-test
- Not checking implementation

### Analysis
- Ignoring confidence intervals
- Cherry-picking segments
- Over-interpreting inconclusive results

---

## Task-Specific Questions

1. What's your current conversion rate?
2. How much traffic does this page get?
3. What change are you considering and why?
4. What's the smallest improvement worth detecting?
5. What tools do you have for testing?
6. Have you tested this area before?

---

## Proactive Triggers

Proactively offer A/B test design when:

1. **Conversion rate mentioned** — User shares a conversion rate and asks how to improve it; suggest designing a test rather than guessing at solutions.
2. **Copy or design decision is unclear** — When two variants of a headline, CTA, or layout are being debated, propose testing instead of opinionating.
3. **Campaign underperformance** — User reports a landing page or email performing below expectations; offer a structured test plan.
4. **Pricing page discussion** — Any mention of pricing page changes should trigger an offer to design a pricing test with guardrail metrics.
5. **Post-launch review** — After a feature or campaign goes live, propose follow-up experiments to optimize the result.

---

## Output Artifacts

| Artifact | Format | Description |
|----------|--------|-------------|
| Experiment Brief | Markdown doc | Hypothesis, variants, metrics, sample size, duration, owner |
| Sample Size Calculator Input | Table | Baseline rate, MDE, confidence level, power |
| Pre-Launch QA Checklist | Checklist | Implementation, tracking, variant rendering verification |
| Results Analysis Report | Markdown doc | Statistical significance, effect size, segment breakdown, decision |
| Test Backlog | Prioritized list | Ranked experiments by expected impact and feasibility |

---

## Communication

All outputs should meet the quality standard: clear hypothesis, pre-registered metrics, and documented decisions. Avoid presenting inconclusive results as wins. Every test should produce a learning, even if the variant loses. Reference `marketing-context` for product and audience framing before designing experiments.

---

## Related Skills

- **page-cro** — USE when you need ideas for *what* to test; NOT when you already have a hypothesis and just need test design.
- **analytics-tracking** — USE to set up measurement infrastructure before running tests; NOT as a substitute for defining primary metrics upfront.
- **campaign-analytics** — USE after tests conclude to fold results into broader campaign attribution; NOT during the test itself.
- **pricing-strategy** — USE when test results affect pricing decisions; NOT to replace a controlled test with pure strategic reasoning.
- **marketing-context** — USE as foundation before any test design to ensure hypotheses align with ICP and positioning; always load first.
