---
name: "verification-before-completion"
description_en: "Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evidence before assertions always"
category: "Design"
repo: "obra/superpowers"
stars: 230300
url: "https://github.com/obra/superpowers/blob/HEAD/skills/verification-before-completion/SKILL.md"
path: "skills/verification-before-completion/SKILL.md"
is_collection: false
body_length: 3863
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Tamamlamadan Önce Doğrulama
  
  ## Genel Bakış
  
  Doğrulama yapmadan çalışmanın tamamlandığını iddia etmek dürüstlük değil, verimlilikten değildir.
  
  **Temel ilke:** Daima kanıt, ardından iddia.
  
  **Bu kuralın metnine aykırı olmak, ruhuna aykırı olmaktır.**
  
  ## Demir Kanun
  
  ```
  TAZE DOĞRULAMA KANITI OLMADAN HİÇBİR TAMAMLANMA İDDİASI YOK
  ```
  
  Bu mesajdaki doğrulama komutunu çalıştırmadıysanız, başarılı olduğunu iddia edemezsiniz.
  
  ## Geçit Fonksiyonu
  
  ```
  Herhangi bir durum iddia etmeden veya memnuniyet ifade etmeden ÖNCE:
  
  1. TANIMLAMA: Hangi komut bu iddiayı kanıtlar?
  2. ÇALIŞTIRMA: TÜÜN komutunu çalıştırın (taze, eksiksiz)
  3. OKUMA: Tüm çıktı, çıkış kodu kontrol, hata sayısını say
  4. DOĞRULAMA: Çıktı iddiayı doğruluyor mu?
     - HAYIR: Gerçek durumu kanıtla birlikte belirt
     - EVET: İddiayı kanıtla birlikte belirt
  5. ANCAK SONRA: Hak talebinde bulun
  
  Herhangi bir adımı atlama = yalan söyleme, doğrulama yapmama
  ```
  
  ## Yaygın Başarısızlıklar
  
  | İddia | Gerekli | Yeterli Değil |
  |-------|---------|---------------|
  | Testler geçiyor | Test komut çıktısı: 0 hata | Önceki çalıştırma, "geçmesi gerekir" |
  | Linter temiz | Linter çıktısı: 0 hata | Kısmi kontrol, ekstrapol |
  | Build başarılı | Build komutu: çıkış 0 | Linter geçti, loglar iyi görünüyor |
  | Bug düzeltildi | Orijinal semptom testi: geçiyor | Kod değiştirildi, düzeltildi varsayıldı |
  | Regresyon testi çalışıyor | Kırmızı-yeşil döngüsü doğrulandı | Test bir kere geçiyor |
  | Agent tamamladı | VCS diff değişiklikleri gösteriyor | Agent "başarı" raporuyor |
  | Gereksinimler karşılandı | Satır satır kontrol listesi | Testler geçti |
  
  ## Kırmızı Bayraklar - DUR
  
  - "Gerekir", "muhtemelen", "gibi görünüyor" kullanımı
  - Doğrulama öncesi memnuniyeti ifade etme ("Harika!", "Mükemmel!", "Bitti!", vb.)
  - Doğrulama yapmadan commit/push/PR yapmak üzere
  - Agent başarı raporlarına güvenmek
  - Kısmi doğrulamaya dayanmak
  - "Sadece bu sefer" düşünmek
  - Yorgun olmak ve işi bitirmek istenmek
  - **Doğrulama çalıştırılmadan başarıyı ifade eden HERHANGI bir ifade**
  
  ## Rasyonalizasyon Önleme
  
  | Bahane | Gerçek |
  |--------|--------|
  | "Şu an çalışması gerekir" | DOĞRULAMAYI ÇALIŞTIR |
  | "Eminim" | Emin olma ≠ kanıt |
  | "Sadece bu sefer" | İstisna yok |
  | "Linter geçti" | Linter ≠ derleyici |
  | "Agent başarı dedi" | Bağımsız olarak doğrula |
  | "Yorgunum" | Yorgunluk ≠ bahane |
  | "Kısmi kontrol yeterli" | Kısmi hiçbir şeyi kanıtlamaz |
  | "Farklı kelimeler, kural uygulanmaz" | Ruh harften önce gelir |
  
  ## Anahtar Desenler
  
  **Testler:**
  ```
  ✅ [Test komutunu çalıştır] [Gör: 34/34 geçti] "Tüm testler geçiyor"
  ❌ "Şu an geçmesi gerekir" / "Doğru görünüyor"
  ```
  
  **Regresyon testleri (TDD Kırmızı-Yeşil):**
  ```
  ✅ Yaz → Çalıştır (geçti) → Düzeltmeyi geri al → Çalıştır (BAŞARISIZ OLMALI) → Geri yükle → Çalıştır (geçti)
  ❌ "Regresyon testi yazdım" (kırmızı-yeşil doğrulaması olmadan)
  ```
  
  **Build:**
  ```
  ✅ [Build çalıştır] [Gör: çıkış 0] "Build geçiyor"
  ❌ "Linter geçti" (linter derlemeyi kontrol etmez)
  ```
  
  **Gereksinimler:**
  ```
  ✅ Planı yeniden oku → Kontrol listesi oluştur → Her birini doğrula → Boşlukları veya tamamlamayı rapor et
  ❌ "Testler geçti, aşama tamamlandı"
  ```
  
  **Agent delegasyonu:**
  ```
  ✅ Agent başarı raporuyor → VCS diff kontrol → Değişiklikleri doğrula → Gerçek durumu rapor et
  ❌ Agent raporuna güven
  ```
  
  ## Neden Önemli?
  
  24 başarısızlık belleğinden:
  - İnsan ortağın "Sana inanmıyorum" dedi - güven kırıldı
  - Tanımlanmamış fonksiyonlar gönderildi - çöker
  - Eksik gereksinimler gönderildi - eksik özellikler
  - Yanlış tamamlamaya harcanan zaman → yeniden yönlendir → yeniden çalış
  - İhlal: "Dürüstlük temel bir değerdir. Yalan söylersen, yerine konursun."
  
  ## Ne Zaman Uygulanır
  
  **Şundan ÖNCE HER ZAMAN:**
  - HERHANGI bir başarı/tamamlanma iddiası varyasyonu
  - HERHANGI bir memnuniyet ifadesi
  - HERHANGI bir iş durumu hakkında olumlu ifade
  - Commit, PR oluşturma, görev tamamlama
  - Sonraki göreve geçme
  - Agentlara delegasyon
  
  **Kural şunlara uygulanır:**
  - Tam ifadeler
  - Parafrazar ve eşanlamlılar
  - Başarı imaları
  - HERHANGI bir tamamlanma/doğruluk öneren iletişim
  
  ## Özet
  
  **Doğrulama için kısayol yok.**
  
  Komutu çalıştır. Çıktıyı oku. SONRA sonucu iddia et.
  
  Bu müzakere edilemez.
---

# Verification Before Completion

## Overview

Claiming work is complete without verification is dishonesty, not efficiency.

**Core principle:** Evidence before claims, always.

**Violating the letter of this rule is violating the spirit of this rule.**

## The Iron Law

```
NO COMPLETION CLAIMS WITHOUT FRESH VERIFICATION EVIDENCE
```

If you haven't run the verification command in this message, you cannot claim it passes.

## The Gate Function

```
BEFORE claiming any status or expressing satisfaction:

1. IDENTIFY: What command proves this claim?
2. RUN: Execute the FULL command (fresh, complete)
3. READ: Full output, check exit code, count failures
4. VERIFY: Does output confirm the claim?
   - If NO: State actual status with evidence
   - If YES: State claim WITH evidence
5. ONLY THEN: Make the claim

Skip any step = lying, not verifying
```

## Common Failures

| Claim | Requires | Not Sufficient |
|-------|----------|----------------|
| Tests pass | Test command output: 0 failures | Previous run, "should pass" |
| Linter clean | Linter output: 0 errors | Partial check, extrapolation |
| Build succeeds | Build command: exit 0 | Linter passing, logs look good |
| Bug fixed | Test original symptom: passes | Code changed, assumed fixed |
| Regression test works | Red-green cycle verified | Test passes once |
| Agent completed | VCS diff shows changes | Agent reports "success" |
| Requirements met | Line-by-line checklist | Tests passing |

## Red Flags - STOP

- Using "should", "probably", "seems to"
- Expressing satisfaction before verification ("Great!", "Perfect!", "Done!", etc.)
- About to commit/push/PR without verification
- Trusting agent success reports
- Relying on partial verification
- Thinking "just this once"
- Tired and wanting work over
- **ANY wording implying success without having run verification**

## Rationalization Prevention

| Excuse | Reality |
|--------|---------|
| "Should work now" | RUN the verification |
| "I'm confident" | Confidence ≠ evidence |
| "Just this once" | No exceptions |
| "Linter passed" | Linter ≠ compiler |
| "Agent said success" | Verify independently |
| "I'm tired" | Exhaustion ≠ excuse |
| "Partial check is enough" | Partial proves nothing |
| "Different words so rule doesn't apply" | Spirit over letter |

## Key Patterns

**Tests:**
```
✅ [Run test command] [See: 34/34 pass] "All tests pass"
❌ "Should pass now" / "Looks correct"
```

**Regression tests (TDD Red-Green):**
```
✅ Write → Run (pass) → Revert fix → Run (MUST FAIL) → Restore → Run (pass)
❌ "I've written a regression test" (without red-green verification)
```

**Build:**
```
✅ [Run build] [See: exit 0] "Build passes"
❌ "Linter passed" (linter doesn't check compilation)
```

**Requirements:**
```
✅ Re-read plan → Create checklist → Verify each → Report gaps or completion
❌ "Tests pass, phase complete"
```

**Agent delegation:**
```
✅ Agent reports success → Check VCS diff → Verify changes → Report actual state
❌ Trust agent report
```

## Why This Matters

From 24 failure memories:
- your human partner said "I don't believe you" - trust broken
- Undefined functions shipped - would crash
- Missing requirements shipped - incomplete features
- Time wasted on false completion → redirect → rework
- Violates: "Honesty is a core value. If you lie, you'll be replaced."

## When To Apply

**ALWAYS before:**
- ANY variation of success/completion claims
- ANY expression of satisfaction
- ANY positive statement about work state
- Committing, PR creation, task completion
- Moving to next task
- Delegating to agents

**Rule applies to:**
- Exact phrases
- Paraphrases and synonyms
- Implications of success
- ANY communication suggesting completion/correctness

## The Bottom Line

**No shortcuts for verification.**

Run the command. Read the output. THEN claim the result.

This is non-negotiable.
