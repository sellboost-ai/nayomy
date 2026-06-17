---
name: "codebase-onboarding"
description_en: "Analyze a codebase and generate onboarding documentation for engineers, tech leads, and contractors. Fast fact-gathering and repeatable onboarding outputs. Use when onboarding a new engineer, writing architecture-overview docs for a new project, or producing tech-lead briefings for unfamiliar repos."
description_tr: "Bir codebase'i analiz ederek mühendisler, tech lead'ler ve contractor'lar için onboarding dokümantasyonu oluşturun. Hızlı bilgi toplama ve tekrarlanabilir çıktılar sağlar. Yeni mühendis katılımında, yeni proje için mimari dokümantasyonu yazarken veya bilinmeyen repo'lar hakkında tech lead briefing'i hazırlarken kullanın."
category: "Document"
repo: "alirezarezvani/claude-skills"
stars: 18266
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/codebase-onboarding/SKILL.md"
path: ".gemini/skills/codebase-onboarding/SKILL.md"
is_collection: false
body_length: 2252
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Kod Tabanı Katılım Süreci

  **Seviye:** POWERFUL  
  **Kategori:** Engineering  
  **Alan:** Documentation / Developer Experience

  ---

  ## Genel Bakış

  Bir kod tabanını analiz edin ve mühendisler, teknik liderler ve yükleniciler için katılım belgeleri oluşturun. Bu beceri hızlı bilgi toplama ve tekrarlanabilir katılım çıktıları için optimize edilmiştir.

  ## Temel Yetenekler

  - Repository sinyallerinden mimari ve stack keşfi
  - Yeni katkıda bulunanlar için anahtar dosya ve config envanteri
  - Yerel kurulum ve yaygın görev rehberi oluşturma
  - Kitleye uygun belgelendirme çerçevesi
  - Hata ayıklama ve katkı kontrol listesi iskeletlendirmesi

  ---

  ## Ne Zaman Kullanılır

  - Yeni bir takım üyesi veya yüklenicinin katılımı sırasında
  - Büyük refactoring işlemlerinden sonra eski proje docsunu yeniden oluştururken
  - İç devir belgelendirmesi hazırlarken
  - Hizmetler için standartlaştırılmış bir katılım paketi oluştururken

  ---

  ## Hızlı Başlangıç

  ```bash
  # 1) Kod tabanı bilgilerini toplayın
  python3 scripts/codebase_analyzer.py /path/to/repo

  # 2) Makine tarafından okunabilir çıktıyı dışa aktarın
  python3 scripts/codebase_analyzer.py /path/to/repo --json

  # 3) Katılım docsunu taslaklamak için şablonu kullanın
  # Bkz. references/onboarding-template.md
  ```

  ---

  ## Önerilen İş Akışı

  1. Hedef repository'ye karşı `scripts/codebase_analyzer.py` çalıştırın.
  2. Anahtar sinyalleri yakalayın: dosya sayıları, algılanan diller, config dosyaları, üst düzey yapı.
  3. `references/onboarding-template.md` dosyasındaki katılım şablonunu doldurun.
  4. Çıktı derinliğini kitleye göre ayarlayın:
     - Junior: kurulum + güvenli yönergeler
     - Senior: mimari + operasyonel endişeler
     - Yüklenici: sınırlı sahiplik + entegrasyon sınırları

  ---

  ## Katılım Belge Şablonu

  Detaylı şablon ve bölüm örnekleri şu yerlerde bulunur:
  - `references/onboarding-template.md`
  - `references/output-format-templates.md`

  ---

  ## Yaygın Tuzaklar

  - Temiz bir ortamda kurulum komutlarını doğrulamadan docs yazma
  - Mimari derinlemesine incelemelerini yüklenici odaklı docslar içine karıştırma
  - Sorun giderme ve doğrulama adımlarını atma
  - Katılım docsunun mevcut repo durumundan uzaklaşmasına izin verme

  ## En İyi Yöntemler

  1. Kurulum talimatlarını yürütülebilir ve zamana bağlı tutun.
  2. Anahtar mimari kararların "neden" ini belgeleyin.
  3. Docsları davranış değişiklikleriyle aynı PR'de güncelleyin.
  4. Katılım docslarını tek seferlik çıktılar değil, canlı operasyonel varlıklar olarak değerlendirin.
---

# Codebase Onboarding

**Tier:** POWERFUL  
**Category:** Engineering  
**Domain:** Documentation / Developer Experience

---

## Overview

Analyze a codebase and generate onboarding documentation for engineers, tech leads, and contractors. This skill is optimized for fast fact-gathering and repeatable onboarding outputs.

## Core Capabilities

- Architecture and stack discovery from repository signals
- Key file and config inventory for new contributors
- Local setup and common-task guidance generation
- Audience-aware documentation framing
- Debugging and contribution checklist scaffolding

---

## When to Use

- Onboarding a new team member or contractor
- Rebuilding stale project docs after large refactors
- Preparing internal handoff documentation
- Creating a standardized onboarding packet for services

---

## Quick Start

```bash
# 1) Gather codebase facts
python3 scripts/codebase_analyzer.py /path/to/repo

# 2) Export machine-readable output
python3 scripts/codebase_analyzer.py /path/to/repo --json

# 3) Use the template to draft onboarding docs
# See references/onboarding-template.md
```

---

## Recommended Workflow

1. Run `scripts/codebase_analyzer.py` against the target repository.
2. Capture key signals: file counts, detected languages, config files, top-level structure.
3. Fill the onboarding template in `references/onboarding-template.md`.
4. Tailor output depth by audience:
   - Junior: setup + guardrails
   - Senior: architecture + operational concerns
   - Contractor: scoped ownership + integration boundaries

---

## Onboarding Document Template

Detailed template and section examples live in:
- `references/onboarding-template.md`
- `references/output-format-templates.md`

---

## Common Pitfalls

- Writing docs without validating setup commands on a clean environment
- Mixing architecture deep-dives into contractor-oriented docs
- Omitting troubleshooting and verification steps
- Letting onboarding docs drift from current repo state

## Best Practices

1. Keep setup instructions executable and time-bounded.
2. Document the "why" for key architectural decisions.
3. Update docs in the same PR as behavior changes.
4. Treat onboarding docs as living operational assets, not one-time deliverables.
