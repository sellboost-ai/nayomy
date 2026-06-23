---
name: "requesting-code-review"
description_en: "Use when completing tasks, implementing major features, or before merging to verify work meets requirements"
description_tr: "Görevleri tamamlarken, büyük özellikleri hayata geçirirken veya merge etmeden önce çalışmanın gereksinimleri karşıladığını doğrulamak için kullanın."
category: "Design"
repo: "obra/superpowers"
stars: 235495
url: "https://github.com/obra/superpowers/blob/HEAD/skills/requesting-code-review/SKILL.md"
path: "skills/requesting-code-review/SKILL.md"
is_collection: false
body_length: 2664
has_scripts: false
has_references: false
has_examples: false
related_files: ["code-reviewer.md"]
body_tr: |-
  # Kod İncelemesi İsteğinde Bulunma
  
  Sorunların yayılmadan yakalanması için bir kod inceleyici subagent görevlendir. İnceleyici, oturum geçmişini değil, tam olarak hazırlanmış bir bağlam alır. Bu, inceleyicinin düşünce sürecini değil, çalışma ürününe odaklanmasını sağlar ve devam etmek için kendi bağlamını korursun.
  
  **Temel ilke:** Erken incele, sık incele.
  
  ## Ne Zaman İnceleme İstenir
  
  **Zorunlu:**
  - Subagent odaklı geliştirmede her görevden sonra
  - Ana özelliği tamamladıktan sonra
  - Main'e merge yapmadan önce
  
  **İsteğe bağlı ama değerli:**
  - Takılıp kaldığında (yeni perspektif)
  - Refactor'dan önce (baseline kontrolü)
  - Karmaşık hata düzeltildikten sonra
  
  ## Nasıl İstenir
  
  **1. Git SHAsını al:**
  ```bash
  BASE_SHA=$(git rev-parse HEAD~1)  # or origin/main
  HEAD_SHA=$(git rev-parse HEAD)
  ```
  
  **2. Kod inceleyici subagent'i görevlendir:**
  
  [code-reviewer.md](https://github.com/obra/superpowers/blob/HEAD/code-reviewer.md) adresindeki şablonu doldurarak bir `general-purpose` subagent görevlendir
  
  **Yer tutucu değişkenler:**
  - `{DESCRIPTION}` - Oluşturduğun şeyin kısa özeti
  - `{PLAN_OR_REQUIREMENTS}` - Ne yapması gerektiği
  - `{BASE_SHA}` - Başlangıç commit'i
  - `{HEAD_SHA}` - Son commit'i
  
  **3. Geri bildirimlere göre hareket et:**
  - Kritik sorunları hemen düzelt
  - Önemli sorunları devam etmeden önce düzelt
  - Küçük sorunları daha sonra not et
  - İnceleyici hatalıysa geri çekil (gerekçeyle)
  
  ## Örnek
  
  ```
  [Görev 2 tamamlandı: Doğrulama fonksiyonu ekleme]
  
  Sen: Devam etmeden önce kod incelemesi isteyeyim.
  
  BASE_SHA=$(git log --oneline | grep "Task 1" | head -1 | awk '{print $1}')
  HEAD_SHA=$(git rev-parse HEAD)
  
  [Kod inceleyici subagent'i görevlendir]
    DESCRIPTION: verifyIndex() ve repairIndex() eklendi, 4 sorun türü
    PLAN_OR_REQUIREMENTS: docs/superpowers/plans/deployment-plan.md'den Görev 2
    BASE_SHA: a7981ec
    HEAD_SHA: 3df7661
  
  [Subagent dönüş]:
    Güçlü yönler: Temiz mimari, gerçek testler
    Sorunlar:
      Önemli: İlerleme göstergeleri eksik
      Küçük: Raporlama aralığı için sihirli sayı (100)
    Değerlendirme: Devam etmeye hazır
  
  Sen: [İlerleme göstergelerini düzelt]
  [Görev 3'e devam et]
  ```
  
  ## İş Akışları ile Entegrasyon
  
  **Subagent Odaklı Geliştirme:**
  - HER görevden sonra incele
  - Sorunları birikmeden önce yakala
  - Sonraki göreve geçmeden önce düzelt
  
  **Planları Yürütme:**
  - Her görevden veya doğal kontrol noktalarından sonra incele
  - Geri bildirim al, uygula, devam et
  
  **Geçici Geliştirme:**
  - Merge'den önce incele
  - Takılıp kaldığında incele
  
  ## Kırmızı Bayraklar
  
  **Asla:**
  - "Basit olduğu için" incelemeyi atlama
  - Kritik sorunları göz ardı etme
  - Düzeltilmemiş Önemli sorunlarla devam etme
  - Geçerli teknik geri bildirimlere karşı çıkma
  
  **İnceleyici hatalıysa:**
  - Teknik gerekçeyle geri çek
  - Çalıştığını kanıtlayan kod/testler göster
  - Açıklama iste
  
  Şablonu şurada görüntüle: [code-reviewer.md](https://github.com/obra/superpowers/blob/HEAD/code-reviewer.md)
---

# Requesting Code Review

Dispatch a code reviewer subagent to catch issues before they cascade. The reviewer gets precisely crafted context for evaluation — never your session's history. This keeps the reviewer focused on the work product, not your thought process, and preserves your own context for continued work.

**Core principle:** Review early, review often.

## When to Request Review

**Mandatory:**
- After each task in subagent-driven development
- After completing major feature
- Before merge to main

**Optional but valuable:**
- When stuck (fresh perspective)
- Before refactoring (baseline check)
- After fixing complex bug

## How to Request

**1. Get git SHAs:**
```bash
BASE_SHA=$(git rev-parse HEAD~1)  # or origin/main
HEAD_SHA=$(git rev-parse HEAD)
```

**2. Dispatch code reviewer subagent:**

Dispatch a `general-purpose` subagent, filling the template at [code-reviewer.md](https://github.com/obra/superpowers/blob/HEAD/code-reviewer.md)

**Placeholders:**
- `{DESCRIPTION}` - Brief summary of what you built
- `{PLAN_OR_REQUIREMENTS}` - What it should do
- `{BASE_SHA}` - Starting commit
- `{HEAD_SHA}` - Ending commit

**3. Act on feedback:**
- Fix Critical issues immediately
- Fix Important issues before proceeding
- Note Minor issues for later
- Push back if reviewer is wrong (with reasoning)

## Example

```
[Just completed Task 2: Add verification function]

You: Let me request code review before proceeding.

BASE_SHA=$(git log --oneline | grep "Task 1" | head -1 | awk '{print $1}')
HEAD_SHA=$(git rev-parse HEAD)

[Dispatch code reviewer subagent]
  DESCRIPTION: Added verifyIndex() and repairIndex() with 4 issue types
  PLAN_OR_REQUIREMENTS: Task 2 from docs/superpowers/plans/deployment-plan.md
  BASE_SHA: a7981ec
  HEAD_SHA: 3df7661

[Subagent returns]:
  Strengths: Clean architecture, real tests
  Issues:
    Important: Missing progress indicators
    Minor: Magic number (100) for reporting interval
  Assessment: Ready to proceed

You: [Fix progress indicators]
[Continue to Task 3]
```

## Integration with Workflows

**Subagent-Driven Development:**
- Review after EACH task
- Catch issues before they compound
- Fix before moving to next task

**Executing Plans:**
- Review after each task or at natural checkpoints
- Get feedback, apply, continue

**Ad-Hoc Development:**
- Review before merge
- Review when stuck

## Red Flags

**Never:**
- Skip review because "it's simple"
- Ignore Critical issues
- Proceed with unfixed Important issues
- Argue with valid technical feedback

**If reviewer wrong:**
- Push back with technical reasoning
- Show code/tests that prove it works
- Request clarification

See template at: [code-reviewer.md](https://github.com/obra/superpowers/blob/HEAD/code-reviewer.md)
