---
name: "engineering-advanced-skills"
description_en: "Index of 37 advanced engineering agent skills for Claude Code, Codex, Gemini CLI, Cursor, OpenClaw. Use when browsing or choosing among the POWERFUL-tier engineering skills: agent design, RAG, MCP servers, CI/CD, database design, observability, security auditing, changelog/release automation, reliability (SLO/chaos/flags/operators), platform ops."
description_tr: "Claude Code, Codex, Gemini CLI, Cursor ve OpenClaw için 37 ileri seviye mühendislik agent becerisi indeksi. Agent tasarımı, RAG, MCP servers, CI/CD, veritabanı tasarımı, observability, security auditing, changelog/release automation, reliability (SLO/chaos/flags/operators) ve platform ops gibi POWERFUL-tier mühendislik becerilerini keşfederken kullanın."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18642
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/engineering-advanced-skills/SKILL.md"
path: ".gemini/skills/engineering-advanced-skills/SKILL.md"
is_collection: false
body_length: 3672
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Mühendislik İleri Beceriler (POWERFUL Seviyesi)
  
  Karmaşık mimari, otomasyon, güvenilirlik ve platform operasyonları için 37 ileri mühendislik becerisi.
  
  ## Hızlı Başlangıç
  
  ### Claude Code
  ```
  /read engineering/skills/agent-designer/SKILL.md
  ```
  
  ### Codex CLI
  ```bash
  npx agent-skills-cli add alirezarezvani/claude-skills/engineering
  ```
  
  ## Beceriler Özeti
  
  | Beceri | Klasör | Odak |
  |-------|--------|------|
  | Agent Designer | `agent-designer/` | Multi-agent mimarisi: plan, schema-generate, evaluate |
  | Agent Workflow Designer | `agent-workflow-designer/` | Workflow orchestration iskeletleri |
  | API Design Reviewer | `api-design-reviewer/` | REST/GraphQL linting, breaking changes |
  | API Test Suite Builder | `api-test-suite-builder/` | API test generation |
  | Browser Automation | `browser-automation/` | Playwright/Selenium otomasyon desenleri |
  | Changelog Generator | `changelog-generator/` | Changelog'lar, semantic version bump'ları, hotfix/rollback disiplini |
  | Chaos Engineering | `chaos-engineering/` | Deney tasarımı, blast-radius, postmortem'ler |
  | CI/CD Pipeline Builder | `ci-cd-pipeline-builder/` | Pipeline generation |
  | Codebase Onboarding | `codebase-onboarding/` | Yeni developer onboarding rehberleri |
  | Database Designer | `database-designer/` | Schema analizi, index optimizasyonu, migration'lar |
  | Database Schema Designer | `database-schema-designer/` | ERD, normalizasyon |
  | Dependency Auditor | `dependency-auditor/` | Dependency güvenlik taraması |
  | Env Secrets Manager | `env-secrets-manager/` | Secrets rotation, vault |
  | Feature Flags Architect | `feature-flags-architect/` | Flag borcu, rollout planları, kill switch'ler |
  | Focused Fix | `focused-fix/` | Sistematik feature/module onarımı |
  | Full Page Screenshot | `full-page-screenshot/` | Full-page capture tooling |
  | Git Worktree Manager | `git-worktree-manager/` | Paralel branch workflow'ları |
  | Interview System Designer | `interview-system-designer/` | İşe alım pipeline tasarımı |
  | Kubernetes Operator | `kubernetes-operator/` | CRD validation, reconcile linting |
  | MCP Server Builder | `mcp-server-builder/` | MCP tool creation |
  | Migration Architect | `migration-architect/` | Sistem migration planlaması |
  | Monorepo Navigator | `monorepo-navigator/` | Monorepo tooling |
  | Observability Designer | `observability-designer/` | Dashboard'lar, alert noise (SLO'lar → slo-architect) |
  | Performance Profiler | `performance-profiler/` | CPU, memory, load profiling |
  | PR Review Expert | `pr-review-expert/` | Pull request analizi |
  | RAG Architect | `rag-architect/` | RAG tasarımı, chunking, retrieval evaluation |
  | Runbook Generator | `runbook-generator/` | Operasyonel runbook'lar |
  | Secrets Vault Manager | `secrets-vault-manager/` | Vault desenleri, HCL |
  | Self-Eval | `self-eval/` | Dürüst iş kalitesi puanlaması |
  | Ship Gate | `ship-gate/` | Pre-production audit (89 kontrol) |
  | Skill Security Auditor | `skill-security-auditor/` | Skill güvenlik açığı taraması |
  | Skill Tester | `skill-tester/` | Skill kalite değerlendirmesi |
  | SLO Architect | `slo-architect/` | SLO/SLI tasarımı, error budget'lar, burn-rate alert'ler |
  | Spec-Driven Workflow | `spec-driven-workflow/` | Spec-first development gate'leri |
  | SQL Database Assistant | `sql-database-assistant/` | Query optimizasyonu, 4 dialect |
  | TC Tracker | `tc-tracker/` | Task context lifecycle + handoff'lar |
  | Tech Debt Tracker | `tech-debt-tracker/` | Debt taraması → öncelik → dashboard |
  
  Not: Release yönetimi `changelog-generator/` içine birleştirildi (version bumper + hotfix/rollback prosedürleri artık orada bulunmaktadır).
  
  ## Kurallar
  
  - Yalnızca ihtiyacınız olan spesifik SKILL.md dosyasını yükleyin
  - Bunlar ileri becerilerdir — gerektiğinde engineering-team/ core becerilerine kombinasyon ile bakın
---

# Engineering Advanced Skills (POWERFUL Tier)

37 advanced engineering skills for complex architecture, automation, reliability, and platform operations.

## Quick Start

### Claude Code
```
/read engineering/skills/agent-designer/SKILL.md
```

### Codex CLI
```bash
npx agent-skills-cli add alirezarezvani/claude-skills/engineering
```

## Skills Overview

| Skill | Folder | Focus |
|-------|--------|-------|
| Agent Designer | `agent-designer/` | Multi-agent architecture: plan, schema-generate, evaluate |
| Agent Workflow Designer | `agent-workflow-designer/` | Workflow orchestration scaffolds |
| API Design Reviewer | `api-design-reviewer/` | REST/GraphQL linting, breaking changes |
| API Test Suite Builder | `api-test-suite-builder/` | API test generation |
| Browser Automation | `browser-automation/` | Playwright/Selenium automation patterns |
| Changelog Generator | `changelog-generator/` | Changelogs, semantic version bumps, hotfix/rollback discipline |
| Chaos Engineering | `chaos-engineering/` | Experiment design, blast-radius, postmortems |
| CI/CD Pipeline Builder | `ci-cd-pipeline-builder/` | Pipeline generation |
| Codebase Onboarding | `codebase-onboarding/` | New dev onboarding guides |
| Database Designer | `database-designer/` | Schema analysis, index optimization, migrations |
| Database Schema Designer | `database-schema-designer/` | ERD, normalization |
| Dependency Auditor | `dependency-auditor/` | Dependency security scanning |
| Env Secrets Manager | `env-secrets-manager/` | Secrets rotation, vault |
| Feature Flags Architect | `feature-flags-architect/` | Flag debt, rollout plans, kill switches |
| Focused Fix | `focused-fix/` | Systematic feature/module repair |
| Full Page Screenshot | `full-page-screenshot/` | Full-page capture tooling |
| Git Worktree Manager | `git-worktree-manager/` | Parallel branch workflows |
| Interview System Designer | `interview-system-designer/` | Hiring pipeline design |
| Kubernetes Operator | `kubernetes-operator/` | CRD validation, reconcile linting |
| MCP Server Builder | `mcp-server-builder/` | MCP tool creation |
| Migration Architect | `migration-architect/` | System migration planning |
| Monorepo Navigator | `monorepo-navigator/` | Monorepo tooling |
| Observability Designer | `observability-designer/` | Dashboards, alert noise (SLOs → slo-architect) |
| Performance Profiler | `performance-profiler/` | CPU, memory, load profiling |
| PR Review Expert | `pr-review-expert/` | Pull request analysis |
| RAG Architect | `rag-architect/` | RAG design, chunking, retrieval evaluation |
| Runbook Generator | `runbook-generator/` | Operational runbooks |
| Secrets Vault Manager | `secrets-vault-manager/` | Vault patterns, HCL |
| Self-Eval | `self-eval/` | Honest work-quality scoring |
| Ship Gate | `ship-gate/` | Pre-production audit (89 checks) |
| Skill Security Auditor | `skill-security-auditor/` | Skill vulnerability scanning |
| Skill Tester | `skill-tester/` | Skill quality evaluation |
| SLO Architect | `slo-architect/` | SLO/SLI design, error budgets, burn-rate alerts |
| Spec-Driven Workflow | `spec-driven-workflow/` | Spec-first development gates |
| SQL Database Assistant | `sql-database-assistant/` | Query optimization, 4 dialects |
| TC Tracker | `tc-tracker/` | Task context lifecycle + handoffs |
| Tech Debt Tracker | `tech-debt-tracker/` | Debt scan → prioritize → dashboard |

Note: release management merged into `changelog-generator/` (version bumper + hotfix/rollback procedures live there now).

## Rules

- Load only the specific skill SKILL.md you need
- These are advanced skills — combine with engineering-team/ core skills as needed
