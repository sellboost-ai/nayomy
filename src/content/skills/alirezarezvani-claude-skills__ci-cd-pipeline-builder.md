---
name: "ci-cd-pipeline-builder"
description_en: "Generate pragmatic CI/CD pipelines from detected project stack signals — fast baseline generation, repeatable checks, environment-aware deployment stages. Use when setting up CI for a new project, refactoring existing pipelines, or standardizing deployment workflows across multiple repos."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18313
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/ci-cd-pipeline-builder/SKILL.md"
path: ".gemini/skills/ci-cd-pipeline-builder/SKILL.md"
is_collection: false
body_length: 2878
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # CI/CD Pipeline Builder
  
  **Tier:** POWERFUL  
  **Category:** Engineering  
  **Domain:** DevOps / Automation
  
  ## Özet
  
  Bu skill'i, proje stack sinyallerinden pragmatik CI/CD pipeline'ları oluşturmak için kullanın — tahminden değil. Hızlı baseline oluşturma, tekrarlanabilir kontroller ve ortam-duyarlı deployment aşamalarına odaklanır.
  
  ## Temel Yetenekler
  
  - Repository dosyalarından dil/runtime/tooling algılama
  - CI aşamalarını önerilendirme (`lint`, `test`, `build`, `deploy`)
  - GitHub Actions veya GitLab CI starter pipeline'ları oluşturma
  - Algılanan stack'e dayalı caching ve matrix stratejisini dahil etme
  - Otomasyon için makine-tarafından okunabilir detection output yayınlama
  - Pipeline mantığını project lockfiles ve build komutlarıyla uyumlu tutma
  
  ## Ne Zaman Kullanılır
  
  - Yeni bir repository için CI bootstrap'i
  - Kırılgan kopyalanan pipeline dosyalarını değiştirme
  - GitHub Actions ile GitLab CI arasında geçiş yapma
  - Pipeline adımlarının gerçek stack'le eşleşip eşleşmediğini denetleme
  - Özel sertleştirmeden önce tekrarlanabilir baseline oluşturma
  
  ## Temel İş Akışları
  
  ### 1. Stack Algıla
  
  ```bash
  python3 scripts/stack_detector.py --repo . --format text
  python3 scripts/stack_detector.py --repo . --format json > detected-stack.json
  ```
  
  Çevrimdışı analiz payload'ları için stdin veya `--input` dosyası aracılığıyla giriş destekler.
  
  ### 2. Detection'dan Pipeline Oluştur
  
  ```bash
  python3 scripts/pipeline_generator.py \
    --input detected-stack.json \
    --platform github \
    --output .github/workflows/ci.yml \
    --format text
  ```
  
  Veya repo'dan doğrudan end-to-end:
  
  ```bash
  python3 scripts/pipeline_generator.py --repo . --platform gitlab --output .gitlab-ci.yml
  ```
  
  ### 3. Merge Öncesinde Doğrula
  
  1. Komutların projede var olduğunu doğrula (`test`, `lint`, `build`).
  2. Oluşturulan pipeline'ı mümkün olduğu yerde yerel olarak çalıştır.
  3. Gerekli secret'ları/env değişkenlerinin belgelendiğini kontrol et.
  4. Deploy işlerini korumalı branches/environments'lar tarafından kapılı tut.
  
  ### 4. Deployment Aşamalarını Güvenli Şekilde Ekle
  
  - CI-only ile başla (`lint/test/build`).
  - Açık ortam bağlamına sahip staging deploy ekle.
  - Manual gate/approval ile production deploy ekle.
  - Rollout/rollback komutlarını açık ve denetlenebilir tut.
  
  ## Script Arayüzleri
  
  - `python3 scripts/stack_detector.py --help`
    - Repository dosyalarından stack sinyallerini algılar
    - stdin/`--input` dosyasından optional JSON input okur
  - `python3 scripts/pipeline_generator.py --help`
    - Detection payload'undan GitHub/GitLab YAML oluşturur
    - stdout veya `--output`'a yazar
  
  ## Referanslar
  
  - [references/pipeline-design-notes.md](references/pipeline-design-notes.md) — yaygın tuzaklar, en iyi uygulamalar, detection heuristics, generation stratejisi, platform karar notları, merge öncesi doğrulama checklist'i ve ölçekleme rehberi
  - [references/github-actions-templates.md](references/github-actions-templates.md)
  - [references/gitlab-ci-templates.md](references/gitlab-ci-templates.md)
  - [references/deployment-gates.md](references/deployment-gates.md)
  - [README.md](README.md)
---

# CI/CD Pipeline Builder

**Tier:** POWERFUL  
**Category:** Engineering  
**Domain:** DevOps / Automation

## Overview

Use this skill to generate pragmatic CI/CD pipelines from detected project stack signals, not guesswork. It focuses on fast baseline generation, repeatable checks, and environment-aware deployment stages.

## Core Capabilities

- Detect language/runtime/tooling from repository files
- Recommend CI stages (`lint`, `test`, `build`, `deploy`)
- Generate GitHub Actions or GitLab CI starter pipelines
- Include caching and matrix strategy based on detected stack
- Emit machine-readable detection output for automation
- Keep pipeline logic aligned with project lockfiles and build commands

## When to Use

- Bootstrapping CI for a new repository
- Replacing brittle copied pipeline files
- Migrating between GitHub Actions and GitLab CI
- Auditing whether pipeline steps match actual stack
- Creating a reproducible baseline before custom hardening

## Key Workflows

### 1. Detect Stack

```bash
python3 scripts/stack_detector.py --repo . --format text
python3 scripts/stack_detector.py --repo . --format json > detected-stack.json
```

Supports input via stdin or `--input` file for offline analysis payloads.

### 2. Generate Pipeline From Detection

```bash
python3 scripts/pipeline_generator.py \
  --input detected-stack.json \
  --platform github \
  --output .github/workflows/ci.yml \
  --format text
```

Or end-to-end from repo directly:

```bash
python3 scripts/pipeline_generator.py --repo . --platform gitlab --output .gitlab-ci.yml
```

### 3. Validate Before Merge

1. Confirm commands exist in project (`test`, `lint`, `build`).
2. Run generated pipeline locally where possible.
3. Ensure required secrets/env vars are documented.
4. Keep deploy jobs gated by protected branches/environments.

### 4. Add Deployment Stages Safely

- Start with CI-only (`lint/test/build`).
- Add staging deploy with explicit environment context.
- Add production deploy with manual gate/approval.
- Keep rollout/rollback commands explicit and auditable.

## Script Interfaces

- `python3 scripts/stack_detector.py --help`
  - Detects stack signals from repository files
  - Reads optional JSON input from stdin/`--input`
- `python3 scripts/pipeline_generator.py --help`
  - Generates GitHub/GitLab YAML from detection payload
  - Writes to stdout or `--output`

## References

- [references/pipeline-design-notes.md](references/pipeline-design-notes.md) — common pitfalls, best practices, detection heuristics, generation strategy, platform decision notes, pre-merge validation checklist, and scaling guidance
- [references/github-actions-templates.md](references/github-actions-templates.md)
- [references/gitlab-ci-templates.md](references/gitlab-ci-templates.md)
- [references/deployment-gates.md](references/deployment-gates.md)
- [README.md](README.md)
