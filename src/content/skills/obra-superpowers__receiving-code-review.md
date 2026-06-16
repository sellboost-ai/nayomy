---
name: "receiving-code-review"
description_en: "Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performative agreement or blind implementation"
category: "Design"
repo: "obra/superpowers"
stars: 229812
url: "https://github.com/obra/superpowers/blob/HEAD/skills/receiving-code-review/SKILL.md"
path: "skills/receiving-code-review/SKILL.md"
is_collection: false
body_length: 6058
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Kod İncelemesi Kabul Etme

  ## Genel Bakış

  Kod incelemesi teknik değerlendirme gerektirir, duygusal performans değil.

  **Temel ilke:** Uygulamadan önce doğrula. Varsaymadan önce sor. Teknik doğruluk sosyal rahatlıktan daha önemli.

  ## Yanıt Modeli

  ```
  KOD İNCELEMESİ FEEDBACKİ ALIRKEN:

  1. OKU: Tepki vermeden tam feedback'i oku
  2. ANLA: Gereksinimi kendi kelimelerin ile yeniden söyle (veya sor)
  3. DOĞRULA: Codebase gerçeğine karşı kontrol et
  4. DEĞERLENDİR: BU codebase için teknik olarak sağlam mı?
  5. YANIT VER: Teknik onay veya akılcı itiraz
  6. UYGULA: Bir defada bir öğe, her birini test et
  ```

  ## Yasaklanmış Yanıtlar

  **ASLA:**
  - "Kesinlikle haklısın!" (açık talimat dosyası ihlali)
  - "Harika bir nokta!" / "Mükemmel feedback!" (performatif)
  - "Şimdi uygulamaya başlayım" (doğrulamadan önce)

  **BUNUN YERİNE:**
  - Teknik gereksinimi yeniden söyle
  - Açıklayıcı sorular sor
  - Yanlışsa teknik gerekçelerle itiraz et
  - Çalışmaya başla (kelimeler > eylemler)

  ## Belirsiz Feedback Ele Alma

  ```
  EĞER herhangi bir öğe belirsizse:
    DUR - henüz hiçbir şey uygulama
    BELİRSİZ öğeler hakkında açıklama iste

  NEDEN: Öğeler ilişkili olabilir. Kısmi anlayış = yanlış uygulama.
  ```

  **Örnek:**
  ```
  insan partnerin: "1-6'yı düzelt"
  1,2,3,6'yı anlıyorsun. 4,5 belirsiz.

  ❌ YANLIŞ: 1,2,3,6'yı şimdi uygula, sonra 4,5 hakkında sor
  ✅ DOĞRU: "1,2,3,6 öğelerini anlıyorum. Devam etmeden 4 ve 5 hakkında açıklama gerekli."
  ```

  ## Kaynağa Özgü Ele Alma

  ### İnsan partnerin tarafından
  - **Güvenilir** - anladıktan sonra uygula
  - **Yine de sor** eğer kapsam belirsizse
  - **Performatif anlaşma yok**
  - **Eyleme geç** veya teknik onay

  ### Harici İncelemecilerden
  ```
  UYGULAMADAN ÖNCE:
    1. Kontrol et: BU codebase için teknik olarak doğru mu?
    2. Kontrol et: Mevcut işlevselliği kırar mı?
    3. Kontrol et: Mevcut uygulamanın nedeni nedir?
    4. Kontrol et: Tüm platformlar/versiyonlarda çalışır mı?
    5. Kontrol et: İncelemeci tam bağlamı anlıyor mu?

  EĞER öğeri yanlış görünüyorsa:
    Teknik gerekçelerle itiraz et

  EĞER kolayca doğrulamazsan:
    Söyle: "Bunu [X] olmadan doğrulayamıyorum. [Araştırma/sor/devam etmeli] miyim?"

  EĞER insan partnerin önceki kararlarıyla çatışıyorsa:
    Dur ve önce insan partnerin ile tartış
  ```

  **insan partnerin kuralı:** "Harici feedback - şüpheci ol, ama dikkatli kontrol et"

  ## "Profesyonel" Özellikler için YAGNI Kontrolü

  ```
  EĞER incelemeci "uygun şekilde uygulamak" önerisinde bulunuyorsa:
    codebase'de gerçek kullanımı grep et

    EĞER kullanılmamışsa: "Bu endpoint çağrılmıyor. Kaldırılsın mı (YAGNI)?"
    EĞER kullanılmışsa: O zaman uygun şekilde uygula
  ```

  **insan partnerin kuralı:** "Sen ve incelemeci ikisi de bana bağlısınız. Bu özelliğe ihtiyacımız yoksa eklemeyin."

  ## Uygulama Sırası

  ```
  ÇOKLU FEEDBACK ÖĞELERİ İÇİN:
    1. Belirsiz herhangi bir şeyi ÖNCE açıkla
    2. Sonra bu sırada uygula:
       - Engelleme sorunları (kırma, güvenlik)
       - Basit düzeltmeler (yazım, importlar)
       - Karmaşık düzeltmeler (refactoring, mantık)
    3. Her düzeltmeyi ayrı ayrı test et
    4. Regresyon olmadığını doğrula
  ```

  ## Ne Zaman İtiraz Et

  İtiraz et:
  - Öğeri mevcut işlevselliği kırarsa
  - İncelemeci tam bağlamdan yoksunsa
  - YAGNI'yi ihlal ediyorsa (kullanılmayan özellik)
  - Bu stack için teknik olarak yanlışsa
  - Eski/uyumluluk nedenleri varsa
  - İnsan partnerin mimarik kararlarıyla çatışıyorsa

  **Nasıl itiraz edilir:**
  - Teknik gerekçe kullan, savunmacılık değil
  - Spesifik sorular sor
  - Çalışan testlere/koda referans ver
  - İnsan partneri mimarik konularında dahil et

  **Açıkça itiraz etmekten rahatsızsan:** Gerginliği adlandır, sonra partnerin problem hakkında bilgilendir. Dürüstlüğünü takdir edecektir.

  ## Doğru Feedback'i Kabul Etme

  Feedback doğru olduğunda:
  ```
  ✅ "Düzeltildi. [Ne değiştiğinin kısa açıklaması]"
  ✅ "İyi yakaladın - [spesifik sorun]. [konum]'da düzeltildi."
  ✅ [Sadece düzelt ve kodda göster]

  ❌ "Kesinlikle haklısın!"
  ❌ "Harika nokta!"
  ❌ "Yakaladığın için teşekkürler!"
  ❌ "Teşekkür ederim [her şey]"
  ❌ HERHANGİ bir teşekkür ifadesi
  ```

  **Neden teşekkür yok:** Eylemler konuşur. Sadece düzelt. Kod kendisi feedback'i dinlediğini gösterir.

  **"Teşekkür" yazmak üzere yakalanırsan:** SİL. Bunun yerine düzeltmeyi belirt.

  ## İtirazını Zarif Şekilde Düzeltme

  İtiraz ettiysen ve yanılmışsan:
  ```
  ✅ "Haklıydın - [X]'i kontrol ettim ve [Y] yapıyor. Şimdi uyguluyorum."
  ✅ "Bunu doğruladım ve sen haklısın. İlk anlayışım yanlıştı çünkü [neden]. Düzeltiyorum."

  ❌ Uzun özür
  ❌ Neden itiraz ettiğini savunma
  ❌ Aşırı açıklama
  ```

  Düzeltmeyi olgusal şekilde belirt ve devam et.

  ## Yaygın Hatalar

  | Hata | Düzeltme |
  |------|----------|
  | Performatif anlaşma | Gereksinimi belirt veya eyleme geç |
  | Körlü uygulama | Önce codebase'e karşı doğrula |
  | Test olmadan topla | Bir defada bir, her birini test et |
  | İncelemecinin haklı olduğunu varsay | Şeyler kırarsa kontrol et |
  | İtirazdan kaçın | Teknik doğruluk > rahatlık |
  | Kısmi uygulama | Tüm öğeleri önce açıkla |
  | Doğrulayamazsan yine de devam et | Sınırlamayı belirt, yön iste |

  ## Gerçek Örnekler

  **Performatif Anlaşma (Kötü):**
  ```
  İncelemeci: "Eski kodu kaldır"
  ❌ "Kesinlikle haklısın! Onu kaldırayım..."
  ```

  **Teknik Doğrulama (İyi):**
  ```
  İncelemeci: "Eski kodu kaldır"
  ✅ "Kontrol ediyorum... derleme hedefi 10.15+, bu API 13+ gerekli. Geriye uyumluluk için eski gerekli. Mevcut impl yanlış bundle ID'ye sahip - kaldırsın mı yoksa 13 öncesi desteği düşürüm mü?"
  ```

  **YAGNI (İyi):**
  ```
  İncelemeci: "Veritabanı, tarih filtreleri, CSV dışa aktarma ile uygun metrik takibi uygula"
  ✅ "Codebase'i grep ettim - hiçbir şey bu endpoint'i çağırmıyor. Kaldırılsın mı (YAGNI)? Yoksa kaçırdığım bir kullanım var mı?"
  ```

  **Belirsiz Öğe (İyi):**
  ```
  insan partnerin: "1-6'yı düzelt"
  1,2,3,6'yı anlıyorsun. 4,5 belirsiz.
  ✅ "1,2,3,6'yı anlıyorum. Uygulamadan önce 4 ve 5 hakkında açıklama gerekli."
  ```

  ## GitHub Thread Yanıtları

  GitHub'da satır içi inceleme yorumlarına yanıt verirken, üst düzey PR yorumu olarak değil, yorum iş parçacığında yanıt ver (`gh api repos/{owner}/{repo}/pulls/{pr}/comments/{id}/replies`).

  ## Sonuç

  **Harici feedback = takip edilmesi gereken değil, değerlendirilmesi gereken öneriler.**

  Doğrula. Sorgula. Sonra uygula.

  Performatif anlaşma yok. Teknik titizlik her zaman.
---

# Code Review Reception

## Overview

Code review requires technical evaluation, not emotional performance.

**Core principle:** Verify before implementing. Ask before assuming. Technical correctness over social comfort.

## The Response Pattern

```
WHEN receiving code review feedback:

1. READ: Complete feedback without reacting
2. UNDERSTAND: Restate requirement in own words (or ask)
3. VERIFY: Check against codebase reality
4. EVALUATE: Technically sound for THIS codebase?
5. RESPOND: Technical acknowledgment or reasoned pushback
6. IMPLEMENT: One item at a time, test each
```

## Forbidden Responses

**NEVER:**
- "You're absolutely right!" (explicit instruction-file violation)
- "Great point!" / "Excellent feedback!" (performative)
- "Let me implement that now" (before verification)

**INSTEAD:**
- Restate the technical requirement
- Ask clarifying questions
- Push back with technical reasoning if wrong
- Just start working (actions > words)

## Handling Unclear Feedback

```
IF any item is unclear:
  STOP - do not implement anything yet
  ASK for clarification on unclear items

WHY: Items may be related. Partial understanding = wrong implementation.
```

**Example:**
```
your human partner: "Fix 1-6"
You understand 1,2,3,6. Unclear on 4,5.

❌ WRONG: Implement 1,2,3,6 now, ask about 4,5 later
✅ RIGHT: "I understand items 1,2,3,6. Need clarification on 4 and 5 before proceeding."
```

## Source-Specific Handling

### From your human partner
- **Trusted** - implement after understanding
- **Still ask** if scope unclear
- **No performative agreement**
- **Skip to action** or technical acknowledgment

### From External Reviewers
```
BEFORE implementing:
  1. Check: Technically correct for THIS codebase?
  2. Check: Breaks existing functionality?
  3. Check: Reason for current implementation?
  4. Check: Works on all platforms/versions?
  5. Check: Does reviewer understand full context?

IF suggestion seems wrong:
  Push back with technical reasoning

IF can't easily verify:
  Say so: "I can't verify this without [X]. Should I [investigate/ask/proceed]?"

IF conflicts with your human partner's prior decisions:
  Stop and discuss with your human partner first
```

**your human partner's rule:** "External feedback - be skeptical, but check carefully"

## YAGNI Check for "Professional" Features

```
IF reviewer suggests "implementing properly":
  grep codebase for actual usage

  IF unused: "This endpoint isn't called. Remove it (YAGNI)?"
  IF used: Then implement properly
```

**your human partner's rule:** "You and reviewer both report to me. If we don't need this feature, don't add it."

## Implementation Order

```
FOR multi-item feedback:
  1. Clarify anything unclear FIRST
  2. Then implement in this order:
     - Blocking issues (breaks, security)
     - Simple fixes (typos, imports)
     - Complex fixes (refactoring, logic)
  3. Test each fix individually
  4. Verify no regressions
```

## When To Push Back

Push back when:
- Suggestion breaks existing functionality
- Reviewer lacks full context
- Violates YAGNI (unused feature)
- Technically incorrect for this stack
- Legacy/compatibility reasons exist
- Conflicts with your human partner's architectural decisions

**How to push back:**
- Use technical reasoning, not defensiveness
- Ask specific questions
- Reference working tests/code
- Involve your human partner if architectural

**If you're uncomfortable pushing back out loud:** Name that tension, then tell your partner about the issue you've seen. They'll appreciate your honesty.

## Acknowledging Correct Feedback

When feedback IS correct:
```
✅ "Fixed. [Brief description of what changed]"
✅ "Good catch - [specific issue]. Fixed in [location]."
✅ [Just fix it and show in the code]

❌ "You're absolutely right!"
❌ "Great point!"
❌ "Thanks for catching that!"
❌ "Thanks for [anything]"
❌ ANY gratitude expression
```

**Why no thanks:** Actions speak. Just fix it. The code itself shows you heard the feedback.

**If you catch yourself about to write "Thanks":** DELETE IT. State the fix instead.

## Gracefully Correcting Your Pushback

If you pushed back and were wrong:
```
✅ "You were right - I checked [X] and it does [Y]. Implementing now."
✅ "Verified this and you're correct. My initial understanding was wrong because [reason]. Fixing."

❌ Long apology
❌ Defending why you pushed back
❌ Over-explaining
```

State the correction factually and move on.

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Performative agreement | State requirement or just act |
| Blind implementation | Verify against codebase first |
| Batch without testing | One at a time, test each |
| Assuming reviewer is right | Check if breaks things |
| Avoiding pushback | Technical correctness > comfort |
| Partial implementation | Clarify all items first |
| Can't verify, proceed anyway | State limitation, ask for direction |

## Real Examples

**Performative Agreement (Bad):**
```
Reviewer: "Remove legacy code"
❌ "You're absolutely right! Let me remove that..."
```

**Technical Verification (Good):**
```
Reviewer: "Remove legacy code"
✅ "Checking... build target is 10.15+, this API needs 13+. Need legacy for backward compat. Current impl has wrong bundle ID - fix it or drop pre-13 support?"
```

**YAGNI (Good):**
```
Reviewer: "Implement proper metrics tracking with database, date filters, CSV export"
✅ "Grepped codebase - nothing calls this endpoint. Remove it (YAGNI)? Or is there usage I'm missing?"
```

**Unclear Item (Good):**
```
your human partner: "Fix items 1-6"
You understand 1,2,3,6. Unclear on 4,5.
✅ "Understand 1,2,3,6. Need clarification on 4 and 5 before implementing."
```

## GitHub Thread Replies

When replying to inline review comments on GitHub, reply in the comment thread (`gh api repos/{owner}/{repo}/pulls/{pr}/comments/{id}/replies`), not as a top-level PR comment.

## The Bottom Line

**External feedback = suggestions to evaluate, not orders to follow.**

Verify. Question. Then implement.

No performative agreement. Technical rigor always.
