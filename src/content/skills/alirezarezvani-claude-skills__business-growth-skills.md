---
name: "business-growth-skills"
description_en: "Router/index for the 4 business & growth skills bundled in this plugin: customer-success-manager (health scoring, churn risk, expansion), sales-engineer (RFP analysis, competitive matrices, PoC planning), revenue-operations (pipeline, forecast accuracy, GTM efficiency), and contract-and-proposal-writer. Use when a growth/revenue request doesn't obviously match one skill and you need to pick the ri"
description_tr: "Bu plugin'de paket halinde sunulan 4 işletme ve büyüme becerisi için router/index: customer-success-manager (sağlık skorlaması, churn riski, genişleme), sales-engineer (RFP analizi, rekabet matrisleri, PoC planlama), revenue-operations (pipeline, tahmin doğruluğu, GTM verimliği) ve contract-and-proposal-writer. Bir büyüme/revenue isteği belirli bir beceriyle net şekilde eşleşmediğinde ve doğru seçimi yapmanız gerektiğinde kullanın."
category: "Business"
repo: "alirezarezvani/claude-skills"
stars: 18642
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/business-growth-skills/SKILL.md"
path: ".gemini/skills/business-growth-skills/SKILL.md"
is_collection: false
body_length: 1306
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # İşletme ve Büyüme Becerileri
  
  Müşteri başarısı, satış ve gelir operasyonları için 4 üretime hazır beceri.
  
  ## Hızlı Başlangıç
  
  ### Claude Code
  ```
  /read business-growth/customer-success-manager/SKILL.md
  ```
  
  ### Codex CLI
  ```bash
  npx agent-skills-cli add alirezarezvani/claude-skills/business-growth
  ```
  
  ## Beceriler Özeti
  
  | Beceri | Klasör | Odak Alanı |
  |-------|--------|-------|
  | Customer Success Manager | `customer-success-manager/` | Sağlık puanlaması, churn tahmini, genişleme |
  | Sales Engineer | `sales-engineer/` | RFP analizi, rekabet matrisleri, PoC planlama |
  | Revenue Operations | `revenue-operations/` | Pipeline analizi, tahmin doğruluğu, GTM metrikleri |
  | Contract & Proposal Writer | `contract-and-proposal-writer/` | Teklif oluşturma, sözleşme şablonları |
  
  ## Python Araçları
  
  9 script, tümü yalnızca stdlib:
  
  ```bash
  python3 customer-success-manager/scripts/health_score_calculator.py --help
  python3 revenue-operations/scripts/pipeline_analyzer.py --help
  ```
  
  ## Kurallar
  
  - Yalnızca ihtiyaç duyduğunuz belirli beceri SKILL.md dosyasını yükleyin
  - Puanlama ve metrikler için manuel tahminler yerine Python araçlarını kullanın
---

# Business & Growth Skills — Router

This plugin bundles **4 skills** (this router is the 5th folder under `business-growth/skills/`). Each skill is self-contained.

## Routing table

Match the request, then load `business-growth/skills/<skill>/SKILL.md`. If multiple rows match, ask one clarifying question first.

| Request signals | Skill | Path |
|---|---|---|
| Customer health scores, churn risk, expansion plays | customer-success-manager | `skills/customer-success-manager/` |
| RFP/RFI coverage, competitive positioning, PoC plans | sales-engineer | `skills/sales-engineer/` |
| Pipeline coverage, forecast accuracy (MAPE), GTM efficiency | revenue-operations | `skills/revenue-operations/` |
| Proposals, contracts, statements of work, DPAs | contract-and-proposal-writer | `skills/contract-and-proposal-writer/` |

## Quick start

```bash
# Example: route an account-health request
cat business-growth/skills/customer-success-manager/SKILL.md
python3 business-growth/skills/customer-success-manager/scripts/health_score_calculator.py --help
```

## Rules

- Route to exactly one skill, then follow that skill's workflow. This router ships no tools of its own.
- Use the skills' Python scorers for metrics, not manual estimates; deal/contract outputs are drafts for human legal/commercial review.
