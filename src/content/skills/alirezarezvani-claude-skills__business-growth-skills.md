---
name: "business-growth-skills"
description_en: "4 business growth agent skills and plugins for Claude Code, Codex, Gemini CLI, Cursor, OpenClaw. Customer success (health scoring, churn), sales engineer (RFP), revenue operations (pipeline, GTM), contract & proposal writer. Python tools (stdlib-only)."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/business-growth-skills/SKILL.md"
path: ".gemini/skills/business-growth-skills/SKILL.md"
is_collection: false
body_length: 1098
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

# Business & Growth Skills

4 production-ready skills for customer success, sales, and revenue operations.

## Quick Start

### Claude Code
```
/read business-growth/customer-success-manager/SKILL.md
```

### Codex CLI
```bash
npx agent-skills-cli add alirezarezvani/claude-skills/business-growth
```

## Skills Overview

| Skill | Folder | Focus |
|-------|--------|-------|
| Customer Success Manager | `customer-success-manager/` | Health scoring, churn prediction, expansion |
| Sales Engineer | `sales-engineer/` | RFP analysis, competitive matrices, PoC planning |
| Revenue Operations | `revenue-operations/` | Pipeline analysis, forecast accuracy, GTM metrics |
| Contract & Proposal Writer | `contract-and-proposal-writer/` | Proposal generation, contract templates |

## Python Tools

9 scripts, all stdlib-only:

```bash
python3 customer-success-manager/scripts/health_score_calculator.py --help
python3 revenue-operations/scripts/pipeline_analyzer.py --help
```

## Rules

- Load only the specific skill SKILL.md you need
- Use Python tools for scoring and metrics, not manual estimates
