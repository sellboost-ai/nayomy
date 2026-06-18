---
name: "cpo-review"
description_en: "/cs:cpo-review <plan> — JTBD-driven interrogation of product roadmap, PMF signal, and portfolio focus. Use when committing a quarter's roadmap, deciding whether to kill a feature, or claiming PMF without a retention curve."
description_tr: "/cs:cpo-review <plan> — Ürün roadmap'inizi Jobs to be Done metodolojisiyle sorgulayan, PMF sinyallerini ve portföy odağınızı değerlendiren araç. Bir çeyreğin roadmap'ini onaylarken, bir özelliği kapatmayı düşünürken veya retention curve'ü olmadan PMF iddiasında bulunmak istediğinizde kullanın."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18402
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/cpo-review/SKILL.md"
path: ".gemini/skills/cpo-review/SKILL.md"
is_collection: false
body_length: 2860
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /cs:cpo-review — CPO Forcing Questions
  
  **Command:** `/cs:cpo-review <plan>`
  
  JTBD-odaklı builder yol haritasını yarıya indiriyor. Neyin sevk edileceğini ve neyin öldürüleceğini ortaya çıkarmak için altı soru.
  
  ## Ne Zaman Çalıştırılır
  
  - Üç aylık yol haritası taahhüdünden önce
  - Yeni bir ürün hattı başlatmadan önce
  - Bir sürüme 3'ten fazla özellik eklemeden önce
  - Retention sabit veya düşüşteyken
  - Ekip "bunu inşa etmeliyiz mi?" tartışıyorken
  
  ## Altı CPO Sorusu
  
  ### 1. JTBD
  **Bu özellik hangi işi yerine getirmek için kiralanıyor, kullanıcının sözlerine göre?**
  - "Onboarding'i iyileştir" değil. "Yeni bir ops yöneticisinin ilk anlaşmasını 7 gün içinde kapatmasına yardım et."
  - Job ≠ özellik. Hire ≠ try.
  
  ### 2. North Star Metric
  **Bu hangi kullanıcı davranışını hareket ettiriyor ve bu North Star'a nasıl bağlanıyor?**
  - Metrik leading, davranış-tabanlı ve value-correlated olmalı.
  - Özelliği North Star'a izleyemiyorsanız inşa etmeyin.
  
  ### 3. PMF Signal
  **Bu işi kiralayan kullanıcılar için retention eğrisi nasıl — sabit, azalan mı yoksa gülümseyen mi?**
  - Sabit veya gülümseyen = PMF signal. Azalan = PMF yok.
  - "Kullanıcılar anketlerde beğendi" bir sinyal değil.
  
  ### 4. RICE Score
  **Reach, Impact, Confidence, Effort — skor ne ve kuyrukta nerenin sırası?**
  ```bash
  python product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py
  ```
  
  ### 5. Opportunity Cost
  **Bu sevk edilirse ne kesiliyor? Spesifik initiative veya özelliği adlandır.**
  - Headcount ve zaman sıfır-toplam. Cut list odak listidir.
  
  ### 6. Kill Criteria
  **90 gün içinde bunun yanlış bir bahis olduğunu size ne söyleyen bir sinyal?**
  - Metriği ve eşiği yazılı olarak, başlatmadan önce tanımla.
  - Kill criterion tanımlayamazsan sorumlu bir şekilde sevk edemezsin.
  
  ## Workflow
  
  1. **Analizleri çalıştır:**
     ```bash
     python ../../../skills/cpo-advisor/scripts/pmf_scorer.py
     python ../../../skills/cpo-advisor/scripts/portfolio_analyzer.py
     ```
  2. **Altı soruyu yanıtla.**
  3. **Kararı uygula.**
  
  ## Output Format
  
  ```markdown
  # CPO Review: <feature/plan>
  **Date:** YYYY-MM-DD
  
  ## JTBD
  > <one sentence in user voice>
  
  ## North Star Link
  - Metric moved: <name>
  - Expected delta: <%>
  
  ## PMF Signal
  - Retention curve shape: flat / smiling / decaying
  - Cohort sample size: N
  
  ## Score
  - RICE: <number>
  - Rank in queue: #N of M
  
  ## Cut List
  - Cut: <initiative>
  - Reason: <why this matters more>
  
  ## Kill Criteria (90 days)
  - Metric: <name>
  - Threshold: <value>
  - Action if missed: <kill | iterate>
  
  ## Verdict
  🟢 SHIP | 🟡 SHARPEN | 🔴 KILL
  ```
  
  ## Routing
  
  - `/cs:cmo-review` — bu özelliği positioning destekliyor mu?
  - `/cs:execute` — 90 günlük planı inşa et
  - `/cs:post-mortem` — kill criteria tetiklenirse
  
  ## Related
  
  - Agent: [`cs-cpo-advisor`](../../agents/cs-cpo-advisor.md)
  - Skill: [`cpo-advisor`](../../../skills/cpo-advisor/SKILL.md)
  - Execution: `product-team/skills/product-manager-toolkit/`
  
  ---
  
  **Version:** 1.0.0
---

# /cs:cpo-review — CPO Forcing Questions

**Command:** `/cs:cpo-review <plan>`

The JTBD-driven builder cuts the roadmap in half. Six questions to surface what to ship and what to kill.

## When to Run

- Before quarterly roadmap commitment
- Before launching a new product line
- Before adding > 3 features to a release
- When retention is flat or declining
- When the team is debating "should we build X?"

## The Six CPO Questions

### 1. JTBD
**What job is this feature hired to do, in the user's words?**
- Not "improve onboarding." "Help a new ops manager get their first deal closed within 7 days."
- Job ≠ feature. Hire ≠ try.

### 2. North Star Metric
**What user behavior does this move, and how does that ladder to the North Star?**
- The metric must be leading, behavior-based, and value-correlated.
- If you can't trace the feature to the North Star, don't build it.

### 3. PMF Signal
**What's the retention curve for users who hire this job — is it flat, decaying, or smiling?**
- Flat or smiling = PMF signal. Decaying = no PMF.
- "Users like it in surveys" is not a signal.

### 4. RICE Score
**Reach, Impact, Confidence, Effort — what's the score and where does this rank in the queue?**
```bash
python product-team/skills/product-manager-toolkit/scripts/rice_prioritizer.py
```

### 5. Opportunity Cost
**What gets cut if this ships? Name the specific initiative or feature.**
- Headcount and time are zero-sum. The cut list is the focus list.

### 6. Kill Criteria
**What signal would tell you in 90 days that this was the wrong bet?**
- Define the metric and threshold in writing, before launch.
- If you can't define a kill criterion, you can't ship responsibly.

## Workflow

1. **Run the analyses:**
   ```bash
   python ../../../skills/cpo-advisor/scripts/pmf_scorer.py
   python ../../../skills/cpo-advisor/scripts/portfolio_analyzer.py
   ```
2. **Answer the six questions.**
3. **Apply the verdict.**

## Output Format

```markdown
# CPO Review: <feature/plan>
**Date:** YYYY-MM-DD

## JTBD
> <one sentence in user voice>

## North Star Link
- Metric moved: <name>
- Expected delta: <%>

## PMF Signal
- Retention curve shape: flat / smiling / decaying
- Cohort sample size: N

## Score
- RICE: <number>
- Rank in queue: #N of M

## Cut List
- Cut: <initiative>
- Reason: <why this matters more>

## Kill Criteria (90 days)
- Metric: <name>
- Threshold: <value>
- Action if missed: <kill | iterate>

## Verdict
🟢 SHIP | 🟡 SHARPEN | 🔴 KILL
```

## Routing

- `/cs:cmo-review` — does the positioning support this feature?
- `/cs:execute` — build the 90-day plan
- `/cs:post-mortem` — if kill criteria triggered

## Related

- Agent: [`cs-cpo-advisor`](../../agents/cs-cpo-advisor.md)
- Skill: [`cpo-advisor`](../../../skills/cpo-advisor/SKILL.md)
- Execution: `product-team/skills/product-manager-toolkit/`

---

**Version:** 1.0.0
