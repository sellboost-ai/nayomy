---
name: "executing-plans"
description_en: "Use when you have a written implementation plan to execute in a separate session with review checkpoints"
description_tr: "Ayrı bir oturumda inceleme kontrol noktaları ile yürütülecek yazılı bir uygulama planınız olduğunda kullanın."
category: "Development"
repo: "obra/superpowers"
stars: 234469
url: "https://github.com/obra/superpowers/blob/HEAD/skills/executing-plans/SKILL.md"
path: "skills/executing-plans/SKILL.md"
is_collection: false
body_length: 2450
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Planları Yürütme
  
  ## Genel Bakış
  
  Planı yükle, eleştirel olarak gözden geçir, tüm görevleri gerçekleştir, tamamlandığında rapor et.
  
  **Başlangıçta Duyur:** "Planı uygulamak için executing-plans becerisini kullanıyorum."
  
  **Not:** İnsan ortağınıza Superpowers'ın subagent erişimi ile çok daha iyi çalıştığını söyleyin. Çalışmasının kalitesi, subagent desteğine sahip bir platformda çalıştırılması halinde önemli ölçüde daha yüksek olacaktır (Claude Code, Codex CLI, Codex App, Copilot CLI ve Gemini CLI hepsi uygun; `../using-superpowers/references/`'deki platform başına araç referanslarına bakın). Subagent'ler mevcutsa, bu beceri yerine superpowers:subagent-driven-development kullanın.
  
  ## Süreç
  
  ### Adım 1: Planı Yükle ve Gözden Geçir
  1. Plan dosyasını oku
  2. Eleştirel olarak gözden geçir - plan hakkında sorular veya endişeleri belirle
  3. Endişeler varsa: Başlamadan önce insan ortağınla ortaya çıkar
  4. Endişe yoksa: Plan öğeleri için yapılacaklar listesi oluştur ve devam et
  
  ### Adım 2: Görevleri Yürüt
  
  Her görev için:
  1. in_progress olarak işaretle
  2. Her adımı tam olarak takip et (plan küçük parçalara bölünmüştür)
  3. Belirtildiği şekilde doğrulamaları çalıştır
  4. Tamamlandı olarak işaretle
  
  ### Adım 3: Geliştirmeyi Tamamla
  
  Tüm görevler tamamlandıktan ve doğrulandıktan sonra:
  - Duyur: "Bu işi tamamlamak için finishing-a-development-branch becerisini kullanıyorum."
  - **GEREKLI ALT-BECERİ:** superpowers:finishing-a-development-branch kullanın
  - Testleri doğrulamak, seçenekler sunmak, seçimi yürütmek için bu beceriyi takip edin
  
  ## Ne Zaman Durup Yardım İste
  
  **ŞU ANDA YÜRÜTMEYI DURDUR:**
  - Bir engelle karşılaştığında (eksik bağımlılık, test başarısız, talimat belirsiz)
  - Plan başlamayı engelleyen kritik boşluklara sahip olduğunda
  - Bir talimatı anlamadığında
  - Doğrulama tekrar tekrar başarısız olduğunda
  
  **Tahmin etmek yerine açıklama isteyin.**
  
  ## Önceki Adımlara Ne Zaman Dönülür
  
  **Gözden Geçirmeye Dön (Adım 1):**
  - İnsan ortağı planı geri bildiriminize göre güncellediğinde
  - Temel yaklaşım yeniden düşünülmesi gerektiğinde
  
  **Engelleri zorlamayın** - durup isteyin.
  
  ## Hatırla
  - Önce planı eleştirel olarak gözden geçir
  - Plan adımlarını tam olarak takip et
  - Doğrulamaları atlamayın
  - Plan söylediğinde becerilere başvur
  - Engelleneğinde durup tahmin etmeyin
  - Açık kullanıcı onayı olmadan asla main/master branch'inde uygulamaya başlamayın
  
  ## Entegrasyon
  
  **Gerekli iş akışı becerileri:**
  - **superpowers:using-git-worktrees** - İzole edilmiş çalışma alanını sağlar (bir tane oluşturur veya mevcut olanı doğrular)
  - **superpowers:writing-plans** - Bu becerinin yürüttüğü planı oluşturur
  - **superpowers:finishing-a-development-branch** - Tüm görevlerden sonra geliştirmeyi tamamla
---

# Executing Plans

## Overview

Load plan, review critically, execute all tasks, report when complete.

**Announce at start:** "I'm using the executing-plans skill to implement this plan."

**Note:** Tell your human partner that Superpowers works much better with access to subagents. The quality of its work will be significantly higher if run on a platform with subagent support (Claude Code, Codex CLI, Codex App, Copilot CLI, and Gemini CLI all qualify; see the per-platform tool refs in `../using-superpowers/references/`). If subagents are available, use superpowers:subagent-driven-development instead of this skill.

## The Process

### Step 1: Load and Review Plan
1. Read plan file
2. Review critically - identify any questions or concerns about the plan
3. If concerns: Raise them with your human partner before starting
4. If no concerns: Create todos for the plan items and proceed

### Step 2: Execute Tasks

For each task:
1. Mark as in_progress
2. Follow each step exactly (plan has bite-sized steps)
3. Run verifications as specified
4. Mark as completed

### Step 3: Complete Development

After all tasks complete and verified:
- Announce: "I'm using the finishing-a-development-branch skill to complete this work."
- **REQUIRED SUB-SKILL:** Use superpowers:finishing-a-development-branch
- Follow that skill to verify tests, present options, execute choice

## When to Stop and Ask for Help

**STOP executing immediately when:**
- Hit a blocker (missing dependency, test fails, instruction unclear)
- Plan has critical gaps preventing starting
- You don't understand an instruction
- Verification fails repeatedly

**Ask for clarification rather than guessing.**

## When to Revisit Earlier Steps

**Return to Review (Step 1) when:**
- Partner updates the plan based on your feedback
- Fundamental approach needs rethinking

**Don't force through blockers** - stop and ask.

## Remember
- Review plan critically first
- Follow plan steps exactly
- Don't skip verifications
- Reference skills when plan says to
- Stop when blocked, don't guess
- Never start implementation on main/master branch without explicit user consent

## Integration

**Required workflow skills:**
- **superpowers:using-git-worktrees** - Ensures isolated workspace (creates one or verifies existing)
- **superpowers:writing-plans** - Creates the plan this skill executes
- **superpowers:finishing-a-development-branch** - Complete development after all tasks
