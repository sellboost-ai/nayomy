---
name: "challenge"
description_en: "Pre-mortem plan analysis. Imagine the plan failed 12 months from now and work backwards to find the weaknesses. Surfaces assumptions, dependencies, and execution risks before committing resources. Use when before significant resource commitment, before presenting to a board or investors, when feedback has been one-sidedly positive, or when there is pressure to move fast and figure it out later."
category: "Business"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/challenge/SKILL.md"
path: ".gemini/skills/challenge/SKILL.md"
is_collection: false
body_length: 6342
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /em:challenge — Pre-Mortem Plan Analizi

  **Komut:** `/em:challenge <plan>`

  Gerçeklik ortaya çıkarmadan önce herhangi bir plandaki zayıflıkları sistematik olarak bulur. Planı öldürmek için değil — gerçeklikle temasını sürdürmesini sağlamak için.

  ---

  ## Temel Fikir

  Çoğu plan tahmin edilebilir nedenlerden başarısız olur. Şans değil — yanlış varsayımlar. Aşırı tahmin edilen talep. Eksik tahmin edilen karmaşıklık. Kimsenin sorgulamadığı bağımlılıklar. Bir spreadsheet'te mantıklı görünen ama gerçek dünyada mantıksız zaman dilimleri.

  Pre-mortem tekniği: **şimdi 12 ay sonra olduğunu ve bu plan spektaküler bir şekilde başarısız olduğunu hayal et. Şimdi geriye doğru git. Neden?**

  Bu pesimizm değil. Çökmeyecek bir şey inşa etmenin yoludur.

  ---

  ## Ne Zaman Challenge Çalıştırılmalı

  - Bir plana önemli kaynaklar taahhüt etmeden önce
  - Yönetim kurulu veya yatırımcılara sunmadan önce
  - Planda yalnızca olumlu geri bildirim aldığını fark ettiğinde
  - Plan birden fazla dış bağımlılığın hizalanmasını gerektirdiğinde
  - Hızlı hareket etmeye ve "sonra çözeriz" demeye baskı olduğunda
  - Plana heyecan duyduğunda (heyecan daha sıkı inceleme sinyalidir)

  ---

  ## Challenge Framework

  ### Adım 1: Temel Varsayımları Çıkar
  Bir planı test edebilmek için önce onun doğru olduğunu varsaydığı her şeyi ortaya çıkarmanız gerekir.

  Planın her bölümü için sorun:
  - Bunun işlemesi için ne doğru olmalı?
  - Müşteri davranışı hakkında ne varsayıyoruz?
  - Rakip tepkisi hakkında ne varsayıyoruz?
  - Kendi yürütme yeteneğimiz hakkında ne varsayıyoruz?
  - Bu hangi dış faktörlere bağlıdır?

  **Yaygın varsayım kategorileri:**
  - **Pazar varsayımları** — boyut, büyüme oranı, müşteri ödeme istekliliği, satın alma döngüsü
  - **Yürütme varsayımları** — takım kapasitesi, hız, büyük işe alımlar gerekmez
  - **Müşteri varsayımları** — sorunu var, farkında, çözmek için ödeyecek
  - **Rekabet varsayımları** — mevcut oyuncular tepki vermez, yeni giriş yapan olmaz, moat devam eder
  - **Finansal varsayımlar** — burn rate, gelir zamanlaması, CAC, LTV oranları
  - **Bağımlılık varsayımları** — ortak teslim edecek, API değişmez, düzenlemeler kaymaz

  ### Adım 2: Her Varsayımı Değerlendir

  Çıkarılan her varsayım için iki boyuta göre puanlayın:

  **Güven seviyesi (bunun doğru olduğundan ne kadar emin olduğunuz):**
  - **Yüksek** — veriler, müşteri görüşmeleri, pazar araştırması ile doğrulanmış
  - **Orta** — doğru yöne doğru ama doğrulanmamış
  - **Düşük** — makul ama test edilmemiş
  - **Bilinmiyor** — basitçe bilmiyoruz

  **Yanlış olursa etki (bu varsayım başarısız olursa ne olur):**
  - **Kritik** — plan tamamen başarısız
  - **Yüksek** — büyük gecikme veya maliyet aşması
  - **Orta** — önemli yeniden çalışma gerekli
  - **Düşük** — yönetilebilir ayarlama

  ### Adım 3: Zayıflık Haritası Oluştur

  Düşük/Bilinmeyen güven × Kritik/Yüksek etki matrisi = en yüksek riskli varsayımlarınız.

  **Zayıflık = Düşük güven + Yüksek etki**

  Bunlar görmezden gelinecek problemler değil. Yaptığınız bahislerdir. Soru şu: bunları bilinçli mi yapıyorsunuz?

  ### Adım 4: Bağımlılık Zincirini Bul

  Çoğu plan herhangi bir varsayımın yanlış olması nedeniyle değil, birden fazla varsayımın aynı anda doğru olması gerektiğinden başarısız olur.

  Zinciri harita:
  - B varsayımı, A varsayımının ilk doğru olmasına bağlı mı?
  - İlk şey ters giderse, kaç tane aşağı akış şeyi kırar?
  - Kritik yol nedir? Neyin sıfır oyunakışı var?

  ### Adım 5: Tersinirliği Test Et

  Her kritik zayıflık için: bu varsayım 3. ayda yanlış çıkarsa ne yaparsınız?

  - Pivot yapabilir misiniz?
  - Kapsamı azaltabilir misiniz?
  - Para zaten harcandı mı?
  - Taahhütler zaten verildi mi?

  Ne kadar az geri döndürülebilir, taahhüt etmeden önce o kadar sıkı doğrulamanız gerekir.

  ---

  ## Çıktı Formatı

  **Challenge Raporu: [Plan Adı]**

  ```
  TEMEL VARSAYIMLAR (çıkarılmış)
  1. [Varsayım] — Güven: [Y/O/D/?] — Yanlış olursa Etki: [Kritik/Yüksek/Orta/Düşük]
  2. ...

  ZAYIFLIK HARİTASI
  Kritik riskler (devam etmeden önce hareket et):
  • [#N] [Varsayım] — NEDEN yanlış olabilir — NEYIN başarısız olacağı

  Yüksek riskler (ölçeklemeden önce doğrula):
  • ...

  BAĞIMLILLIK ZİNCİRİ
  [Varsayım A] → bağlıdır → [Varsayım B] → etkinleştirir → [Varsayım C]
  En zayıf halka: [X] — bu kırılırsa, [Y] ve [Z] de başarısız olur

  TERSİNİRLİK DEĞERLENDİRMESİ
  • Tersinir bahisler: [liste]
  • Geri döndürülemez taahhütler: [liste — aşırı dikkatli davran]

  ÖLDÜR DÜĞMELERI
  [30/60/90 gün]'de devam etmek vs öldürmek/pivot yapmak için ne doğru olmalıdır?
  • Devam et eğer: ...
  • Öldür/pivot yap eğer: ...

  SERTLEŞTIRME EYLEMLER
  1. [Devam etmeden önce yapılacak spesifik doğrulama]
  2. [Göz önünde bulundurulacak alternatif yaklaşım]
  3. [Plana inşa edilecek beklenmedik durum]
  ```

  ---

  ## Plan Türüne Göre Challenge Desenleri

  ### Ürün Yol Haritası
  - Müşterilerin ödeyeceği şeyi mi, yoksa söylediklerini mi inşa ediyoruz?
  - Hız tahmini gerçek takım kapasitesini hesaba katıyor mu (teorik değil)?
  - Çapa özelliği tahminin 3× katını alırsa ne olur?
  - Gereksinimler çatışırsa kararları kim alır?

  ### Pazara Gitme Planı
  - Gerçek ICP dönüşüm oranı nedir, umut edilen değil?
  - Kaç temas kapatmak için gereklidir ve bunun için satış kapasitesine sahip misiniz?
  - İlk 10 anlaşma 1 ay yerine 3 ayda alırsa ne olur?
  - "İniş ve genişleme" gerçek bir hareket mi yoksa bir umut mu?

  ### İşe Alma Planı
  - Anahtar işe alım bulmak 6 hafta değil 4 ayda alırsa ne olur?
  - Plan ayrılabilecek belirli kişileri tutmaya bağlı mı?
  - Plan ramp zamanını hesaba katıyor mu (genellikle tam verimlilik için 3-6 ay)?
  - Ücretler gelirleri 6 ay önceden alırsa burn etkisi nedir?

  ### Fon Yaratma Planı
  - Baş yatırımcı geçerse fallback'iniz ne?
  - 3 ayda değil 6 ayda alırsa zaman çizelgesini modellemeniz gerekti mi?
  - Tur düşük ucunda kapanırsa mevcut burn'da runaway nedir?
  - Hedef tutarın %50'sini kaldırırsanız ne varsayımlar kırılır?

  ---

  ## En Zor Sorular

  Bunlar insanların atladığı sorulardır:
  - "Temel durum değil, ayı durumu nedir?"
  - "Bu tam plan güvenmediğimiz bir takım tarafından yürütülseydi işe yarar mıydı?"
  - "Rahatsız edici olduğu için yüksek sesle söylemediklerimiz neler?"
  - "Kimin bu planı olduğundan daha iyi görünmesi için teşvikleri var?"
  - "Bu planın düşmanı ilk olarak neye saldıracak?"

  ---

  ## Teslimat

  `/em:challenge` çıktısı durdurma izni değil. Zayıflık haritasıdır. Şimdi bilinçli kararlar alabilirsiniz: riskli varsayımları doğrulayın, kritik olanları hedge edin, ya da yaptığınız bahisleri bilerek kabul edin.

  Bilinmeyen riskler tehlikelidir. Bilinen riskler yönetilebilirdir.
---

# /em:challenge — Pre-Mortem Plan Analysis

**Command:** `/em:challenge <plan>`

Systematically finds weaknesses in any plan before reality does. Not to kill the plan — to make it survive contact with reality.

---

## The Core Idea

Most plans fail for predictable reasons. Not bad luck — bad assumptions. Overestimated demand. Underestimated complexity. Dependencies nobody questioned. Timing that made sense in a spreadsheet but not in the real world.

The pre-mortem technique: **imagine it's 12 months from now and this plan failed spectacularly. Now work backwards. Why?**

That's not pessimism. It's how you build something that doesn't collapse.

---

## When to Run a Challenge

- Before committing significant resources to a plan
- Before presenting to the board or investors
- When you notice you're only hearing positive feedback about the plan
- When the plan requires multiple external dependencies to align
- When there's pressure to move fast and "figure it out later"
- When you feel excited about the plan (excitement is a signal to scrutinize harder)

---

## The Challenge Framework

### Step 1: Extract Core Assumptions
Before you can test a plan, you need to surface everything it assumes to be true.

For each section of the plan, ask:
- What has to be true for this to work?
- What are we assuming about customer behavior?
- What are we assuming about competitor response?
- What are we assuming about our own execution capability?
- What external factors does this depend on?

**Common assumption categories:**
- **Market assumptions** — size, growth rate, customer willingness to pay, buying cycle
- **Execution assumptions** — team capacity, velocity, no major hires needed
- **Customer assumptions** — they have the problem, they know they have it, they'll pay to solve it
- **Competitive assumptions** — incumbents won't respond, no new entrant, moat holds
- **Financial assumptions** — burn rate, revenue timing, CAC, LTV ratios
- **Dependency assumptions** — partner will deliver, API won't change, regulations won't shift

### Step 2: Rate Each Assumption

For every assumption extracted, rate it on two dimensions:

**Confidence level (how sure are you this is true):**
- **High** — verified with data, customer conversations, market research
- **Medium** — directionally right but not validated
- **Low** — plausible but untested
- **Unknown** — we simply don't know

**Impact if wrong (what happens if this assumption fails):**
- **Critical** — plan fails entirely
- **High** — major delay or cost overrun
- **Medium** — significant rework required
- **Low** — manageable adjustment

### Step 3: Map Vulnerabilities

The matrix of Low/Unknown confidence × Critical/High impact = your highest-risk assumptions.

**Vulnerability = Low confidence + High impact**

These are not problems to ignore. They're the bets you're making. The question is: are you making them consciously?

### Step 4: Find the Dependency Chain

Many plans fail not because any single assumption is wrong, but because multiple assumptions have to be right simultaneously.

Map the chain:
- Does assumption B depend on assumption A being true first?
- If the first thing goes wrong, how many downstream things break?
- What's the critical path? What has zero slack?

### Step 5: Test the Reversibility

For each critical vulnerability: if this assumption turns out to be wrong at month 3, what do you do?

- Can you pivot?
- Can you cut scope?
- Is money already spent?
- Are commitments already made?

The less reversible, the more rigorously you need to validate before committing.

---

## Output Format

**Challenge Report: [Plan Name]**

```
CORE ASSUMPTIONS (extracted)
1. [Assumption] — Confidence: [H/M/L/?] — Impact if wrong: [Critical/High/Medium/Low]
2. ...

VULNERABILITY MAP
Critical risks (act before proceeding):
• [#N] [Assumption] — WHY it might be wrong — WHAT breaks if it is

High risks (validate before scaling):
• ...

DEPENDENCY CHAIN
[Assumption A] → depends on → [Assumption B] → which enables → [Assumption C]
Weakest link: [X] — if this breaks, [Y] and [Z] also fail

REVERSIBILITY ASSESSMENT
• Reversible bets: [list]
• Irreversible commitments: [list — treat with extreme care]

KILL SWITCHES
What would have to be true at [30/60/90 days] to continue vs. kill/pivot?
• Continue if: ...
• Kill/pivot if: ...

HARDENING ACTIONS
1. [Specific validation to do before proceeding]
2. [Alternative approach to consider]
3. [Contingency to build into the plan]
```

---

## Challenge Patterns by Plan Type

### Product Roadmap
- Are we building what customers will pay for, or what they said they wanted?
- Does the velocity estimate account for real team capacity (not theoretical)?
- What happens if the anchor feature takes 3× longer than estimated?
- Who owns decisions when requirements conflict?

### Go-to-Market Plan
- What's the actual ICP conversion rate, not the hoped-for one?
- How many touches to close, and do you have the sales capacity for that?
- What happens if the first 10 deals take 3 months instead of 1?
- Is "land and expand" a real motion or a hope?

### Hiring Plan
- What happens if the key hire takes 4 months to find, not 6 weeks?
- Is the plan dependent on retaining specific people who might leave?
- Does the plan account for ramp time (usually 3–6 months before full productivity)?
- What's the burn impact if headcount leads revenue by 6 months?

### Fundraising Plan
- What's your fallback if the lead investor passes?
- Have you modeled the timeline if it takes 6 months, not 3?
- What's your runway at current burn if the round closes at the low end?
- What assumptions break if you raise 50% of the target amount?

---

## The Hardest Questions

These are the ones people skip:
- "What's the bear case, not the base case?"
- "If this exact plan was run by a team we don't trust, would it work?"
- "What are we not saying out loud because it's uncomfortable?"
- "Who has incentives to make this plan sound better than it is?"
- "What would an enemy of this plan attack first?"

---

## Deliverable

The output of `/em:challenge` is not permission to stop. It's a vulnerability map. Now you can make conscious decisions: validate the risky assumptions, hedge the critical ones, or accept the bets you're making knowingly.

Unknown risks are dangerous. Known risks are manageable.
