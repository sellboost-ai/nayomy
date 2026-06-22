---
name: "financial-health"
description_en: "Run financial ratio analysis, DCF valuation, budget variance analysis, and rolling forecasts. Usage: /financial-health <ratios|dcf|budget|forecast> <data.json>"
description_tr: "Finansal oran analizi, DCF değerleme, bütçe varyans analizi ve rolling forecast'lar çalıştırın. Kullanım: /financial-health <ratios|dcf|budget|forecast> <data.json>"
category: "Business"
repo: "alirezarezvani/claude-skills"
stars: 18759
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/financial-health/SKILL.md"
path: ".gemini/skills/financial-health/SKILL.md"
is_collection: false
body_length: 1327
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /financial-health
  
  Mali tabloları analiz edin, değerleme modelleri oluşturun, bütçe sapmalarını değerlendirin ve tahminler oluşturun.
  
  ## Kullanım
  
  ```
  /financial-health ratios <financial_data.json> [--format json|text]
  /financial-health dcf <valuation_data.json> [--format json|text]
  /financial-health budget <budget_data.json> [--format json|text]
  /financial-health forecast <forecast_data.json> [--format json|text]
  ```
  
  ## Örnekler
  
  ```
  /financial-health ratios quarterly_financials.json --format json
  /financial-health dcf acme_valuation.json
  /financial-health budget q1_budget.json --format json
  /financial-health forecast revenue_history.json
  ```
  
  ## Scriptler
  - `finance/skills/financial-analyst/scripts/ratio_calculator.py` — Karlılık, likidite, kaldıraç, verimlilik, değerleme oranları
  - `finance/skills/financial-analyst/scripts/dcf_valuation.py` — DCF işletme ve öz sermaye değerlemesi, duyarlılık analizi
  - `finance/skills/financial-analyst/scripts/budget_variance_analyzer.py` — Fiili vs bütçe vs önceki yıl sapması analizi
  - `finance/skills/financial-analyst/scripts/forecast_builder.py` — Sürücü tabanlı gelir tahmini ve senaryo modelleme
  
  ## Beceri Referansı
  → `finance/skills/financial-analyst/SKILL.md`
  
  ## İlgili Komutlar
  - `/saas-health` — SaaS'a özgü metrikler (ARR, MRR, churn, CAC, LTV, Quick Ratio)
---

# /financial-health

Analyze financial statements, build valuation models, assess budget variances, and construct forecasts.

## Usage

```
/financial-health ratios <financial_data.json> [--format json|text]
/financial-health dcf <valuation_data.json> [--format json|text]
/financial-health budget <budget_data.json> [--format json|text]
/financial-health forecast <forecast_data.json> [--format json|text]
```

## Examples

```
/financial-health ratios quarterly_financials.json --format json
/financial-health dcf acme_valuation.json
/financial-health budget q1_budget.json --format json
/financial-health forecast revenue_history.json
```

## Scripts
- `finance/skills/financial-analyst/scripts/ratio_calculator.py` — Profitability, liquidity, leverage, efficiency, valuation ratios
- `finance/skills/financial-analyst/scripts/dcf_valuation.py` — DCF enterprise and equity valuation with sensitivity analysis
- `finance/skills/financial-analyst/scripts/budget_variance_analyzer.py` — Actual vs budget vs prior year variance analysis
- `finance/skills/financial-analyst/scripts/forecast_builder.py` — Driver-based revenue forecasting with scenario modeling

## Skill Reference
→ `finance/skills/financial-analyst/SKILL.md`

## Related Commands
- `/saas-health` — SaaS-specific metrics (ARR, MRR, churn, CAC, LTV, Quick Ratio)
