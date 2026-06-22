---
name: "to-issues"
description_en: "Break a plan, spec, or PRD into independently-grabbable issues on the project issue tracker using tracer-bullet vertical slices."
description_tr: "Bir planı, speci veya PRD'yi tracer-bullet vertical slices kullanarak project issue tracker'ında bağımsız olarak alınabilir issue'lara bölebilirsiniz. Kullanıcı bir planı issue'lara dönüştürmek, implementation ticket'ları oluşturmak veya işi issue'lara ayırmak istediğinde kullanın."
category: "Development"
repo: "mattpocock/skills"
stars: 140637
url: "https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/to-issues/SKILL.md"
path: "skills/engineering/to-issues/SKILL.md"
is_collection: false
body_length: 3114
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # İçin Sorunlara Dönüştürme
  
  Bir planı dikey dilimler (tracer bullets) kullanarak bağımsız olarak ele alınabilir sorunlara ayırın.
  
  Issue tracker'ı ve triage etiket sözlüğü size sağlanmış olmalıdır — eğer değilse `/setup-matt-pocock-skills` komutunu çalıştırın.
  
  ## Süreç
  
  ### 1. Bağlamı toplayın
  
  Konuşma bağlamında zaten bulunan her şeyden başlayın. Kullanıcı bir issue referansı (issue numarası, URL veya dosya yolu) argüman olarak geçerse, issue tracker'dan alıp tam gövdesini ve yorumlarını okuyun.
  
  ### 2. Kod tabanını keşfedin (isteğe bağlı)
  
  Henüz kod tabanını keşfetmediyseniz, kodun mevcut durumunu anlamak için bunu yapın. Issue başlıkları ve açıklamaları projenin alan sözlüğü kelimelerini kullanmalı ve dokunduğunuz alandaki ADR'lere saygı göstermelidir.
  
  ### 3. Dikey dilimleri taslaklayın
  
  Planı **tracer bullet** sorunlarına ayırın. Her sorun, BİR katmanın yatay dilimi DEĞİL, TÜM entegrasyon katmanlarını uçtan uca kesen ince bir dikey dilimdir.
  
  Dilimler 'HITL' veya 'AFK' olabilir. HITL dilimleri mimari karar veya tasarım incelemesi gibi insan etkileşimi gerektirir. AFK dilimleri insan etkileşimi olmadan uygulanabilir ve birleştirilebilir. Mümkün olduğunda AFK'yi HITL'ye tercih edin.
  
  <vertical-slice-rules>
  - Her dilim her katmandan dar ama TAM bir yol sunar (schema, API, UI, testler)
  - Tamamlanmış bir dilim kendi başına gösterilebilir veya doğrulanabilir
  - Az sayıda kalın dilimden çok sayıda ince dilim tercih edin
  </vertical-slice-rules>
  
  ### 4. Kullanıcıya sorular sorun
  
  Önerilen dağılımı numaralandırılmış bir liste olarak sunun. Her dilim için gösterin:
  
  - **Başlık**: kısa açıklayıcı ad
  - **Tür**: HITL / AFK
  - **Bloklanıyor**: hangi diğer dilimlerin önce tamamlanması gerektiği (varsa)
  - **Kapsanan kullanıcı hikayeleri**: bu hangi kullanıcı hikayelerine hitap ediyor (kaynak materyalde varsa)
  
  Kullanıcıya sorun:
  
  - Ayrıntı düzeyi doğru hissediyor mu? (çok kaba / çok detaylı)
  - Bağımlılık ilişkileri doğru mu?
  - Herhangi bir dilim birleştirilmeli veya daha ileri bölünmeli mi?
  - Doğru dilimler HITL ve AFK olarak işaretlendi mi?
  
  Kullanıcı dağılımı onaylayıncaya kadar yineleyin.
  
  ### 5. Sorunları issue tracker'a yayınlayın
  
  Onaylanan her dilim için issue tracker'a yeni bir sorun yayınlayın. Aşağıdaki issue gövde şablonunu kullanın. Bu sorunlar AFK ajanları için hazır kabul edilir, bu nedenle aksi talimat verilmediği sürece doğru triage etiketiyle yayınlayın.
  
  Sorunları bağımlılık sırasına göre yayınlayın (blockerler önce) böylece "Bloklanıyor" alanında gerçek issue tanımlayıcılarına referans verebilirsiniz.
  
  <issue-template>
  ## Üst
  
  Issue tracker'daki üst sorunun bir referansı (kaynak mevcut bir sorunsa, aksi takdirde bu bölümü atlayın).
  
  ## Ne inşa edilecek
  
  Bu dikey dilimin özlü bir açıklaması. Katman-katman uygulamayı değil, uçtan uca davranışı açıklayın.
  
  Belirli dosya yollarından veya kod parçacıklarından kaçının — çabuk eski hale gelirler. İstisna: bir prototype hızlı bir şekilde çok gözden geçirilir (state machine, reducer, schema, type şekli) — inline edin ve kısaca bir prototype'tan geldiğini not edin. Karar açısından zengin olan kısımlarına kırpın — çalışan bir demo değil, sadece önemli kısımlar.
  
  ## Kabul kriterleri
  
  - [ ] Kriter 1
  - [ ] Kriter 2
  - [ ] Kriter 3
  
  ## Bloklanıyor
  
  - Engelleme talebine bir referans (varsa)
  
  Veya hiç blocker yoksa "Hiçbiri - hemen başlanabilir".
  
  </issue-template>
  
  Üst sorunları kapatmayın veya değiştirmeyin.
---

# To Issues

Break a plan into independently-grabbable issues using vertical slices (tracer bullets).

The issue tracker and triage label vocabulary should have been provided to you — run `/setup-matt-pocock-skills` if not.

## Process

### 1. Gather context

Work from whatever is already in the conversation context. If the user passes an issue reference (issue number, URL, or path) as an argument, fetch it from the issue tracker and read its full body and comments.

### 2. Explore the codebase (optional)

If you have not already explored the codebase, do so to understand the current state of the code. Issue titles and descriptions should use the project's domain glossary vocabulary, and respect ADRs in the area you're touching.

Look for opportunities to prefactor the code to make the implementation easier. "Make the change easy, then make the easy change."

### 3. Draft vertical slices

Break the plan into **tracer bullet** issues. Each issue is a thin vertical slice that cuts through ALL integration layers end-to-end, NOT a horizontal slice of one layer.

<vertical-slice-rules>

- Each slice delivers a narrow but COMPLETE path through every layer (schema, API, UI, tests)
- A completed slice is demoable or verifiable on its own
- Any prefactoring should be done first

</vertical-slice-rules>

### 4. Quiz the user

Present the proposed breakdown as a numbered list. For each slice, show:

- **Title**: short descriptive name
- **Blocked by**: which other slices (if any) must complete first
- **User stories covered**: which user stories this addresses (if the source material has them)

Ask the user:

- Does the granularity feel right? (too coarse / too fine)
- Are the dependency relationships correct?
- Should any slices be merged or split further?

Iterate until the user approves the breakdown.

### 5. Publish the issues to the issue tracker

For each approved slice, publish a new issue to the issue tracker. Use the issue body template below. These issues are considered ready for AFK agents, so publish them with the correct triage label unless instructed otherwise.

Publish issues in dependency order (blockers first) so you can reference real issue identifiers in the "Blocked by" field.

<issue-template>
## Parent

A reference to the parent issue on the issue tracker (if the source was an existing issue, otherwise omit this section).

## What to build

A concise description of this vertical slice. Describe the end-to-end behavior, not layer-by-layer implementation.

Avoid specific file paths or code snippets — they go stale fast. Exception: if a prototype produced a snippet that encodes a decision more precisely than prose can (state machine, reducer, schema, type shape), inline it here and note briefly that it came from a prototype. Trim to the decision-rich parts — not a working demo, just the important bits.

## Acceptance criteria

- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Blocked by

- A reference to the blocking ticket (if any)

Or "None - can start immediately" if no blockers.

</issue-template>

Do NOT close or modify any parent issue.
