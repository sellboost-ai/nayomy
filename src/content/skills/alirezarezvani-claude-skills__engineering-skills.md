---
name: "engineering-skills"
description_en: "Index of the engineering-team skills bundle for Claude Code, Codex, Gemini CLI, Cursor, OpenClaw, and 6 more tools. Architecture, frontend, backend, QA, DevOps, security, AI/ML, data engineering, Playwright, Stripe, AWS, MS365 (stdlib-only Python tools). Use when browsing or choosing among engineering-team role skills — load only the one specialist SKILL.md you need, never bulk-load the bundle."
description_tr: "Claude Code, Codex, Gemini CLI, Cursor, OpenClaw ve 6 araç daha için mühendislik ekibi beceri paketinin indeksi. Mimari, frontend, backend, QA, DevOps, güvenlik, AI/ML, veri mühendisliği, Playwright, Stripe, AWS, MS365 (stdlib-only Python araçları) içerir. Mühendislik ekibi rol becerilerini incelerken veya seçerken kullanın — yalnızca ihtiyacınız olan SKILL.md dosyasını yükleyin, hiçbir zaman tüm paketi toplu yüklemeyin."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18759
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/engineering-skills/SKILL.md"
path: ".gemini/skills/engineering-skills/SKILL.md"
is_collection: false
body_length: 2892
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Mühendislik Takımı Yetenekleri
  
  Temel mühendislik, güvenlik, AI/ML/Veri ve uzmanlaşmış araçlara organize edilmiş 32 üretime hazır mühendislik becerisi.
  
  ## Hızlı Başlangıç
  
  ### Claude Code
  ```
  /read engineering-team/skills/senior-fullstack/SKILL.md
  ```
  
  ### Codex CLI
  ```bash
  npx agent-skills-cli add alirezarezvani/claude-skills/engineering-team
  ```
  
  ## Yeteneklere Genel Bakış
  
  ### Temel Mühendislik (13 beceri)
  
  | Beceri | Klasör | Odak Noktası |
  |--------|--------|-------|
  | Senior Architect | `senior-architect/` | Sistem tasarımı, mimari patterns |
  | Senior Frontend | `senior-frontend/` | React, Next.js, TypeScript, Tailwind |
  | Senior Backend | `senior-backend/` | API tasarımı, veritabanı optimizasyonu |
  | Senior Fullstack | `senior-fullstack/` | Proje scaffold, kod kalitesi |
  | Senior QA | `senior-qa/` | Test oluşturma, kapsama analizi |
  | Senior DevOps | `senior-devops/` | CI/CD, infrastructure, containerlar |
  | Senior SecOps | `senior-secops/` | Güvenlik operasyonları, zafiyet yönetimi |
  | Code Reviewer | `code-reviewer/` | PR incelemesi, kod kalitesi analizi |
  | Senior Security | `senior-security/` | Tehdit modellemesi, STRIDE, penetrasyon testi |
  | AWS Solution Architect | `aws-solution-architect/` | Serverless, CloudFormation, maliyet optimizasyonu |
  | MS365 Tenant Manager | `ms365-tenant-manager/` | Microsoft 365 yönetimi |
  | TDD Guide | `tdd-guide/` | Test-driven development akışları |
  | Tech Stack Evaluator | `tech-stack-evaluator/` | Teknoloji karşılaştırması, TCO analizi |
  
  ### AI/ML/Veri (5 beceri)
  
  | Beceri | Klasör | Odak Noktası |
  |--------|--------|-------|
  | Senior Data Scientist | `senior-data-scientist/` | İstatistiksel modelleme, deneymentasyon |
  | Senior Data Engineer | `senior-data-engineer/` | Pipeline'lar, ETL, veri kalitesi |
  | Senior ML Engineer | `senior-ml-engineer/` | Model deployment, MLOps, LLM entegrasyonu |
  | Senior Prompt Engineer | `senior-prompt-engineer/` | Prompt optimizasyonu, RAG, ajanlar |
  | Senior Computer Vision | `senior-computer-vision/` | Nesne deteksiyonu, segmentasyon |
  
  ### Uzmanlaşmış Araçlar (5 beceri)
  
  | Beceri | Klasör | Odak Noktası |
  |--------|--------|-------|
  | Playwright Pro | `playwright-pro/` | E2E testing (9 alt-beceri) |
  | Self-Improving Agent | `self-improving-agent/` | Bellek kurasyonu (5 alt-beceri) |
  | Stripe Integration | `stripe-integration-expert/` | Ödeme entegrasyonu, webhook'lar |
  | Incident Commander | `incident-commander/` | Olay yanıt akışları |
  | Email Template Builder | `email-template-builder/` | HTML email oluşturma |
  
  ## Python Araçları
  
  30+ script, tümü stdlib-only. Doğrudan çalıştırın:
  
  ```bash
  python3 <skill>/scripts/<tool>.py --help
  ```
  
  pip install gerekmez. Script'ler demo modu için gömülü örnekler içerir.
  
  ## Kurallar
  
  - Yalnızca ihtiyacınız olan belirli SKILL.md dosyasını yükleyin — tüm 32'sini toplu yüklemeyin
  - Python araçlarını analiz ve scaffold için kullanın, manuel yargı için değil
  - Tool kullanım örnekleri ve akışları için CLAUDE.md dosyasını kontrol edin
---

# Engineering Team Skills

32 production-ready engineering skills organized into core engineering, security, AI/ML/Data, and specialized tools.

## Quick Start

### Claude Code
```
/read engineering-team/skills/senior-fullstack/SKILL.md
```

### Codex CLI
```bash
npx agent-skills-cli add alirezarezvani/claude-skills/engineering-team
```

## Skills Overview

### Core Engineering (13 skills)

| Skill | Folder | Focus |
|-------|--------|-------|
| Senior Architect | `senior-architect/` | System design, architecture patterns |
| Senior Frontend | `senior-frontend/` | React, Next.js, TypeScript, Tailwind |
| Senior Backend | `senior-backend/` | API design, database optimization |
| Senior Fullstack | `senior-fullstack/` | Project scaffolding, code quality |
| Senior QA | `senior-qa/` | Test generation, coverage analysis |
| Senior DevOps | `senior-devops/` | CI/CD, infrastructure, containers |
| Senior SecOps | `senior-secops/` | Security operations, vulnerability management |
| Code Reviewer | `code-reviewer/` | PR review, code quality analysis |
| Senior Security | `senior-security/` | Threat modeling, STRIDE, penetration testing |
| AWS Solution Architect | `aws-solution-architect/` | Serverless, CloudFormation, cost optimization |
| MS365 Tenant Manager | `ms365-tenant-manager/` | Microsoft 365 administration |
| TDD Guide | `tdd-guide/` | Test-driven development workflows |
| Tech Stack Evaluator | `tech-stack-evaluator/` | Technology comparison, TCO analysis |

### AI/ML/Data (5 skills)

| Skill | Folder | Focus |
|-------|--------|-------|
| Senior Data Scientist | `senior-data-scientist/` | Statistical modeling, experimentation |
| Senior Data Engineer | `senior-data-engineer/` | Pipelines, ETL, data quality |
| Senior ML Engineer | `senior-ml-engineer/` | Model deployment, MLOps, LLM integration |
| Senior Prompt Engineer | `senior-prompt-engineer/` | Prompt optimization, RAG, agents |
| Senior Computer Vision | `senior-computer-vision/` | Object detection, segmentation |

### Specialized Tools (5 skills)

| Skill | Folder | Focus |
|-------|--------|-------|
| Playwright Pro | `playwright-pro/` | E2E testing (9 sub-skills) |
| Self-Improving Agent | `self-improving-agent/` | Memory curation (5 sub-skills) |
| Stripe Integration | `stripe-integration-expert/` | Payment integration, webhooks |
| Incident Commander | `incident-commander/` | Incident response workflows |
| Email Template Builder | `email-template-builder/` | HTML email generation |

## Python Tools

30+ scripts, all stdlib-only. Run directly:

```bash
python3 <skill>/scripts/<tool>.py --help
```

No pip install needed. Scripts include embedded samples for demo mode.

## Rules

- Load only the specific skill SKILL.md you need — don't bulk-load all 32
- Use Python tools for analysis and scaffolding, not manual judgment
- Check CLAUDE.md for tool usage examples and workflows
