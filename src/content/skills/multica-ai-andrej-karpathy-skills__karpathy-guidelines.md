---
name: "karpathy-guidelines"
description_en: "Behavioral guidelines to reduce common LLM coding mistakes. Use when writing, reviewing, or refactoring code to avoid overcomplication, make surgical changes, surface assumptions, and define verifiable success criteria."
category: "Design"
repo: "multica-ai/andrej-karpathy-skills"
stars: 176850
url: "https://github.com/multica-ai/andrej-karpathy-skills/blob/HEAD/skills/karpathy-guidelines/SKILL.md"
path: "skills/karpathy-guidelines/SKILL.md"
is_collection: false
body_length: 2224
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Karpathy Yönergeleri

  LLM kodlama hatalarını azaltmak için tasarlanmış davranışsal yönergeler. [Andrej Karpathy'nin LLM kodlama tuzakları hakkındaki gözlemlerinden](https://x.com/karpathy/status/2015883857489522876) türetilmiştir.

  **Tradeoff:** Bu yönergeler hız yerine dikkat çekmeye yöneliktir. Basit görevler için kendi yargınızı kullanın.

  ## 1. Kodlamadan Önce Düşün

  **Varsayım yapma. Kafa karışıklığını gizleme. Tradeoff'ları ortaya çıkar.**

  Uygulamadan önce:
  - Varsayımlarınızı açıkça belirtin. Emin değilseniz, sorun.
  - Eğer birden fazla yorum varsa, hepsini sunun - sessizce seçim yapmayın.
  - Eğer daha basit bir yöntem varsa, söyleyin. Gerektiğinde karşı çıkın.
  - Eğer bir şey belirsizse, durun. Ne kafa karıştırıyor onu adlandırın. Sorun.

  ## 2. Basitlik Öncelikli

  **Sorunu çözen minimum kod. Hiçbir spekülasyon yok.**

  - Sorulan şeyin ötesinde özellik yok.
  - Tek kullanımlık kod için soyutlama yok.
  - İstenmeyen "esneklik" veya "yapılandırılabilirlik" yok.
  - İmkansız senaryolar için hata yönetimi yok.
  - Eğer 200 satır yazdıysanız ve 50 olabiliyorsa, yeniden yazın.

  Kendine sor: "Senior bir mühendis bunu aşırı karmaşık derdi mi?" Evetse, basitleştir.

  ## 3. Cerrahı Değişiklikler

  **Sadece gerekli olanı değiştir. Sadece kendi karışıklığını temizle.**

  Mevcut kodu düzenlerken:
  - Bitişik kodu, yorumları veya formatı "iyileştirme".
  - Bozuk olmayan şeyleri refactor etme.
  - Var olan stili eşleştir, hatta sen bunu farklı yapardın bile.
  - Eğer alakasız dead code fark edersen, bahset - silme.

  Değişikliklerin yetim oluşturması durumunda:
  - SENIN değişikliklerin yararsız hale getirdiği import/değişken/function'ları sil.
  - İstenmedikçe önceden var olan dead code'u silme.

  Test: Her değiştirilen satır doğrudan kullanıcı isteğine izlenebilir olmalı.

  ## 4. Hedef Odaklı Yürütme

  **Başarı kriterlerini tanımla. Doğrulanana kadar döngü yap.**

  Görevleri doğrulanabilir hedeflere dönüştür:
  - "Doğrulama ekle" → "Geçersiz girdiler için test yaz, sonra geç yap"
  - "Bug'ı düzelt" → "Yeniden ürettiğini test yaz, sonra geç yap"
  - "X'i refactor et" → "Test'lerin önce ve sonra geçtiğinden emin ol"

  Çok adımlı görevler için kısa bir plan belirt:
  ```
  1. [Adım] → doğrula: [kontrol]
  2. [Adım] → doğrula: [kontrol]
  3. [Adım] → doğrula: [kontrol]
  ```

  Güçlü başarı kriterleri bağımsız döngü yapmanı sağlar. Zayıf kriterler ("çalışır hale getir") sürekli açıklama gerektirir.
---

# Karpathy Guidelines

Behavioral guidelines to reduce common LLM coding mistakes, derived from [Andrej Karpathy's observations](https://x.com/karpathy/status/2015883857489522876) on LLM coding pitfalls.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.
