---
name: "karpathy-guidelines"
description_en: "Behavioral guidelines to reduce common LLM coding mistakes. Use when writing, reviewing, or refactoring code to avoid overcomplication, make surgical changes, surface assumptions, and define verifiable success criteria."
category: "Design"
repo: "forrestchang/andrej-karpathy-skills"
stars: 177207
url: "https://github.com/forrestchang/andrej-karpathy-skills/blob/HEAD/skills/karpathy-guidelines/SKILL.md"
path: "skills/karpathy-guidelines/SKILL.md"
is_collection: false
body_length: 2224
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Karpathy Yönergeleri
  
  LLM kodlama hatalarını azaltmak için tasarlanan davranışsal yönergeler, [Andrej Karpathy'nin LLM kodlama tuzaklarına ilişkin gözlemlerinden](https://x.com/karpathy/status/2015883857489522876) türetilmiştir.
  
  **Değiş Tokuş:** Bu yönergeler hız yerine ihtiyatlılığa eğilim gösterir. Önemsiz görevler için yargı kullanın.
  
  ## 1. Kodlamadan Önce Düşünün
  
  **Varsayım yapmayın. Kafanızı karıştırmayı gizlemeyin. Uzlaşmaları ortaya çıkarın.**
  
  Uygulamadan önce:
  - Varsayımlarınızı açıkça belirtin. Emin değilseniz sorun.
  - Birden fazla yorum varsa, bunları sunun - sessizce seçim yapmayın.
  - Daha basit bir yaklaşım varsa, bunu söyleyin. Gerekli olduğunda karşı çıkın.
  - Bir şey belirsizse dur. Neyin kafa karıştırıcı olduğunu adlandır. Sor.
  
  ## 2. Önce Basitlik
  
  **Sorunu çözen minimum kod. Hiçbir spekülasyon yok.**
  
  - İstenmeyenlerin ötesinde hiçbir özellik.
  - Tek kullanımlık kod için abstraksiyon yok.
  - İstenmeyen "esneklik" veya "yapılandırılabilirlik" yok.
  - İmkansız senaryolar için hata işleme yok.
  - 200 satır yazarsanız ve 50 olabilirse, yeniden yazın.
  
  Kendinize sorun: "Kıdemli bir mühendis bunu aşırı karmaşık dese mi?" Evet ise, basitleştirin.
  
  ## 3. Cerrahî Değişiklikler
  
  **Sadece gerekli olanları değiştir. Sadece kendi karışıklığını temizle.**
  
  Mevcut kodu düzenlerken:
  - Bitişik kodu, yorumları veya biçimlendirmeyi "iyileştirmeyin".
  - Kırılmamış şeyleri yeniden düzenlemeyiniz.
  - Mevcut stille eşleş, farklı yaparsanız bile.
  - İlişkisiz ölü kod fark ederseniz, söyleyin - silmeyin.
  
  Değişiklikleriniz yetim oluşturduğunda:
  - SENİZ değişiklikleri kullanılmayan imports/variables/functions'ları kaldırın.
  - Önceden varolan ölü kodu sorulmadıkça kaldırmayın.
  
  Test: Her değiştirilmiş satır doğrudan kullanıcı talebine izlenebilir olmalıdır.
  
  ## 4. Hedef Odaklı Yürütme
  
  **Başarı kriterlerini tanımlayın. Doğrulanana kadar döngü yapın.**
  
  Görevleri doğrulanabilir hedeflere dönüştürün:
  - "Doğrulama ekle" → "Geçersiz girdiler için testler yazın, ardından bunları geçirin"
  - "Hatayı düzelt" → "Bunu yeniden üreten bir test yazın, ardından bunu geçirin"
  - "X'i yeniden düzenle" → "Testlerin önce ve sonra geçtiğinden emin olun"
  
  Çok adımlı görevler için kısa bir plan belirtin:
  ```
  1. [Adım] → doğrula: [kontrol]
  2. [Adım] → doğrula: [kontrol]
  3. [Adım] → doğrula: [kontrol]
  ```
  
  Güçlü başarı kriterleri bağımsız döngü yapmanıza izin verir. Zayıf kriterler ("çalışmasını sağla") sürekli açıklama gerektiriyor.
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
