---
name: "cro-review"
description_en: "/cs:cro-review <plan> — Pipeline-paranoid interrogation of revenue, win rate, NRR, and ramp time. Use when the forecast misses pipeline coverage, win rates drop, or before scaling the sales team."
description_tr: "/cs:cro-review <plan> — Revenue, win rate, NRR ve ramp time'ın derinlemesine analizi yapan pipeline kontrol aracı. Pipeline coverage hedefini kaçırdığınızda, win rate düştüğünde veya satış ekibini ölçeklendirmeden önce kullanın."
category: "Business"
repo: "alirezarezvani/claude-skills"
stars: 18642
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/cro-review/SKILL.md"
path: ".gemini/skills/cro-review/SKILL.md"
is_collection: false
body_length: 2803
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /cs:cro-review — CRO Zorlama Soruları
  
  **Komut:** `/cs:cro-review <plan>`
  
  Pipeline-paranoid operatör gelir varsayımlarını stres testine tabi tutar. Sonraki çeyreğin acısını bu çeyrekte ortaya çıkaran altı soru.
  
  ## Ne Zaman Çalıştırılır
  
  - Üç aylık gelir hedefine bağlanmadan önce
  - Satış stratejisini değiştirmeden önce (PLG ↔ sales-led, mid-market ↔ enterprise)
  - Bir grup temsilci işe almadan önce
  - Pipeline coverage 3x'in altına düştüğünde
  - NRR düşüş trendi gösterdiğinde
  
  ## Altı CRO Sorusu
  
  ### 1. Pipeline Coverage
  **Cari çeyrek için aşamaya göre pipeline coverage nedir?**
  - Inbound-ağır: 3x. Outbound-ağır: 4x. Her iki eşiğin altında = hemen harekete geç.
  - Sadece toplam değil, aşama ağırlıklı.
  
  ### 2. Win Rate Trendi
  **Bu çeyreğin win rate'i son 4 çeyreğe kıyasla ne? Ve leak noktası nerede?**
  - Aşamaya göre dönüşüm.
  - Tek bir aşama zayıflarsa, forecast yapmadan önce nedenini belirle.
  
  ### 3. NRR Ayrıştırması
  **Gross retention, contraction ve expansion ayrı ayrı ne?**
  - NRR tek başına churn'ü gizler.
  - 95% gross retention'a sahip 110% NRR, 80% olanla farklıdır.
  
  ### 4. Ramp Süresi
  **Son 4 işe alınanın ilk deal'e ve quota'ya kaç gün içinde ulaştığı?**
  - Ramp > 90 gün growth stage'de ise, hiring profili veya enablement bozuktur.
  - Forecast edilen işe almalar ramp'ı hesaba katmalı.
  
  ### 5. İndirim Disiplini
  **Bu çeyreğin medyan indirim ile son 4 çeyrek karşılaştırıldığında ne? Nerede kayıp oluyor?**
  - İndirim kayması, fiyatlandırma veya positioning zayıflığının öncü göstergesidir.
  - İndirimler onaylayan kademesine göre sınırlandırılmalı.
  
  ### 6. Pipeline Kaynak Karması
  **Pipeline'ın yüzde kaçı marketing-sourced, sales-sourced, partner-sourced?**
  - Bir kaynak > 80% ağırlıklı olursa, konsantrasyon riski vardır.
  - cs-cmo-advisor ile çapraz kontrol et.
  
  ## İş Akışı
  
  ```bash
  python ../../../skills/cro-advisor/scripts/revenue_forecast_model.py
  python ../../../skills/cro-advisor/scripts/churn_analyzer.py
  ```
  
  ## Çıktı Formatı
  
  ```markdown
  # CRO Review: <plan>
  **Tarih:** YYYY-MM-DD
  
  ## Pipeline
  - Coverage: X.Xx (hedef 3x+)
  - Win rate: X% (4Q trend: ↑ / → / ↓)
  - En çok leak olan aşama: <name>
  
  ## Retention
  - Gross retention: X%
  - NRR: X%
  - Expansion: X%
  - Contraction: X%
  
  ## Ramp
  - Geçen çeyrek yeni işe alınanlar: N
  - Medyan ilk deal'e kadar gün: X
  - Medyan quota'ya kadar gün: X
  
  ## İndirim
  - Bu çeyreğin medyan indirim: X%
  - 4Q öncesine kıyasla trend: <delta>
  
  ## Kaynak Karması
  - Marketing: X% | Sales: X% | Partner: X%
  
  ## Karar
  🟢 PLANA UYGUN | 🟡 AÇIK | 🔴 PIPELINE KRİZİ
  
  ## Sonraki Adımlar
  [3 somut aksiyon]
  ```
  
  ## Yönlendirme
  
  - `/cs:cfo-review` — bu nakit planını karşılıyor mu?
  - `/cs:cmo-review` — pipeline kaynak karması sağlıklı mı?
  - `/cs:execute` — GREEN ise üç aylık plan
  - `/cs:boardroom` — RED ise
  
  ## İlgili Kaynaklar
  
  - Agent: [`cs-cro-advisor`](../../agents/cs-cro-advisor.md)
  - Skill: [`cro-advisor`](../../../skills/cro-advisor/SKILL.md)
  - Execution: `../../../../business-growth/`
  
  ---
  
  **Sürüm:** 1.0.0
---

# /cs:cro-review — CRO Forcing Questions

**Command:** `/cs:cro-review <plan>`

The pipeline-paranoid operator pressure-tests revenue assumptions. Six questions that surface next-quarter pain this quarter.

## When to Run

- Before committing to a quarterly revenue target
- Before changing sales motion (PLG ↔ sales-led, mid-market ↔ enterprise)
- Before hiring a batch of reps
- When pipeline coverage drops below 3x
- When NRR is trending down

## The Six CRO Questions

### 1. Pipeline Coverage
**What is pipeline coverage for the current quarter, by stage?**
- Inbound-heavy: 3x. Outbound-heavy: 4x. Below either threshold = act now.
- Stage-weighted, not just total.

### 2. Win Rate Trajectory
**What's win rate this quarter vs the last 4 — and what's the leak point?**
- Stage-by-stage conversion.
- If a single stage softens, identify why before forecasting.

### 3. NRR Decomposition
**What's gross retention, contraction, and expansion separately?**
- NRR alone hides churn.
- A 110% NRR with 95% gross retention is different from 110% with 80%.

### 4. Ramp Time
**For the last 4 hires, how many days to first deal and to quota?**
- If ramp > 90 days at growth stage, hiring profile or enablement is broken.
- Forecasted hires must build in ramp.

### 5. Discount Discipline
**What's the median discount this quarter vs last 4? Where is it creeping?**
- Discount creep is the leading indicator of pricing or positioning weakness.
- Cap discounts by approver tier.

### 6. Pipeline Source Mix
**What % of pipeline is marketing-sourced, sales-sourced, partner-sourced?**
- If one source dominates > 80%, you have concentration risk.
- Cross-check with cs-cmo-advisor.

## Workflow

```bash
python ../../../skills/cro-advisor/scripts/revenue_forecast_model.py
python ../../../skills/cro-advisor/scripts/churn_analyzer.py
```

## Output Format

```markdown
# CRO Review: <plan>
**Date:** YYYY-MM-DD

## Pipeline
- Coverage: X.Xx (target 3x+)
- Win rate: X% (4Q trend: ↑ / → / ↓)
- Top leaking stage: <name>

## Retention
- Gross retention: X%
- NRR: X%
- Expansion: X%
- Contraction: X%

## Ramp
- New hires last quarter: N
- Median days to first deal: X
- Median days to quota: X

## Discount
- Median discount this quarter: X%
- Trend vs 4Q ago: <delta>

## Source Mix
- Marketing: X% | Sales: X% | Partner: X%

## Verdict
🟢 ON PLAN | 🟡 GAP | 🔴 PIPELINE CRISIS

## Next Steps
[3 concrete actions]
```

## Routing

- `/cs:cfo-review` — does this hit the cash plan?
- `/cs:cmo-review` — is pipeline source-mix healthy?
- `/cs:execute` — quarterly plan if GREEN
- `/cs:boardroom` — if RED

## Related

- Agent: [`cs-cro-advisor`](../../agents/cs-cro-advisor.md)
- Skill: [`cro-advisor`](../../../skills/cro-advisor/SKILL.md)
- Execution: `../../../../business-growth/`

---

**Version:** 1.0.0
