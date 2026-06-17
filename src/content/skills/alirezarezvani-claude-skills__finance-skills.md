---
name: "finance-skills"
description_en: "Router/index for the 2 finance skills bundled in this plugin: financial-analyst (ratio analysis, DCF valuation, budget variance, rolling forecasts) and saas-metrics-coach (ARR/MRR, churn, CAC/LTV, NRR, quick ratio). Use when a finance request doesn't obviously match one skill and you need to pick the right one (e.g., 'analyze these financials', 'how healthy are my SaaS metrics')."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18313
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/finance-skills/SKILL.md"
path: ".gemini/skills/finance-skills/SKILL.md"
is_collection: false
body_length: 1439
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Finance Skills — Router
  
  Bu plugin **2 finance skill** içerir (bu router, `finance/skills/` altındaki 3. klasördür). Her skill bağımsızdır.
  
  ## Routing tablosu
  
  | Request signals | Skill | Path |
  |---|---|---|
  | Oran analizi, DCF valuasyon, bütçe varyansı, driver-tabanlı tahminler | financial-analyst | `skills/financial-analyst/` |
  | ARR/MRR, churn, CAC/LTV, NRR, quick ratio, SaaS benchmark'ları | saas-metrics-coach | `skills/saas-metrics-coach/` |
  
  Her ikisi de eşleşirse (ör. "SaaS şirketimi değerle"), kullanıcıya statement-level analiz (financial-analyst) mi yoksa SaaS operating metrics (saas-metrics-coach) mi istediğini sorun.
  
  ## Hızlı başlangıç
  
  ```bash
  # Example: route a statement-analysis request
  cat finance/skills/financial-analyst/SKILL.md
  python3 finance/skills/financial-analyst/scripts/ratio_calculator.py --help
  
  # Or a SaaS metrics request
  python3 finance/skills/saas-metrics-coach/scripts/metrics_calculator.py --help
  ```
  
  ## İlgili (ayrı paket, bu bundle'da değil)
  
  - `finance/business-investment-advisor/` — investment thesis değerlendirmesi, ROI modeling (prompt-only skill, ayrı nested plugin)
  - Root komutları `/financial-health` ve `/saas-health` bu skill'lerin script'lerini sarmalamaktadır.
  
  ## Kurallar
  
  - Tam olarak bir skill'e route edin, ardından o skill'in workflow'unu takip edin. Bu router kendi araçlarını göndermiyor.
  - Financial output'ları her zaman kullanıcının kaynak verilerine karşı doğrulayın; output'lar analiz desteğidir, yatırım tavsiyesi değildir.
---

# Finance Skills — Router

This plugin bundles **2 finance skills** (this router is the 3rd folder under `finance/skills/`). Each skill is self-contained.

## Routing table

| Request signals | Skill | Path |
|---|---|---|
| Ratio analysis, DCF valuation, budget variance, driver-based forecasts | financial-analyst | `skills/financial-analyst/` |
| ARR/MRR, churn, CAC/LTV, NRR, quick ratio, SaaS benchmarks | saas-metrics-coach | `skills/saas-metrics-coach/` |

If both match (e.g., "value my SaaS company"), ask whether the user wants statement-level analysis (financial-analyst) or SaaS operating metrics (saas-metrics-coach).

## Quick start

```bash
# Example: route a statement-analysis request
cat finance/skills/financial-analyst/SKILL.md
python3 finance/skills/financial-analyst/scripts/ratio_calculator.py --help

# Or a SaaS metrics request
python3 finance/skills/saas-metrics-coach/scripts/metrics_calculator.py --help
```

## Related (packaged separately, not in this bundle)

- `finance/business-investment-advisor/` — investment thesis evaluation, ROI modeling (prompt-only skill, separate nested plugin)
- Root commands `/financial-health` and `/saas-health` wrap these skills' scripts.

## Rules

- Route to exactly one skill, then follow that skill's workflow. This router ships no tools of its own.
- Always validate financial outputs against the user's source data; outputs are analysis support, not investment advice.
