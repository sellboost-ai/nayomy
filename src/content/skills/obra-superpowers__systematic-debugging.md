---
name: "systematic-debugging"
description_en: "Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes"
description_tr: "Herhangi bir hata, test başarısızlığı veya beklenmeyen davranışla karşılaştığınızda, çözüm önerisi sunmadan önce kullanın."
category: "Development"
repo: "obra/superpowers"
stars: 230380
url: "https://github.com/obra/superpowers/blob/HEAD/skills/systematic-debugging/SKILL.md"
path: "skills/systematic-debugging/SKILL.md"
is_collection: false
body_length: 9719
has_scripts: false
has_references: false
has_examples: false
related_files: ["CREATION-LOG.md", "condition-based-waiting-example.ts", "condition-based-waiting.md", "defense-in-depth.md", "find-polluter.sh", "root-cause-tracing.md", "test-academic.md", "test-pressure-1.md", "test-pressure-2.md", "test-pressure-3.md"]
body_tr: |-
  # Sistematik Hata Ayıklama
  
  ## Genel Bakış
  
  Rastgele düzeltmeler zaman harcatır ve yeni hatalar yaratır. Hızlı yamalar temel sorunları gizler.
  
  **Temel ilke:** Düzeltme denememeden ÖNCE her zaman kök nedeni bulun. Semptom düzeltmeleri başarısızlıktır.
  
  **Bu işlemin harf anlamını ihlal etmek, hata ayıklamanın ruhunu ihlal etmektir.**
  
  ## Demir Kanun
  
  ```
  KÖK NEDEN ARAŞTIRMASI YAPILMADAN HİÇBİR DÜZELTME YOK
  ```
  
  Eğer Aşama 1'i tamamlamadıysanız, düzeltme öneremezsiniz.
  
  ## Ne Zaman Kullanılır
  
  Herhangi bir teknik sorun için kullanın:
  - Test başarısızlıkları
  - Üretim ortamındaki hatalar
  - Beklenmedik davranış
  - Performans sorunları
  - Derleme hataları
  - Entegrasyon sorunları
  
  **ÖZELLIKLE bu durumlarda kullanın:**
  - Zaman baskısı altında (acil durumlar tahmini çekici hale getirir)
  - "Sadece bir hızlı düzeltme" bariz görünüyor
  - Zaten birden fazla düzeltme denediniz
  - Önceki düzeltme işe yaramadı
  - Sorunu tam olarak anlamıyorsunuz
  
  **Atlamayın çünkü:**
  - Sorun basit görünüyor (basit hataların da kök nedenleri vardır)
  - Acelelisiniz (acele rework'u garantiler)
  - Yönetici hemen düzeltilmesini istiyor (sistematik yaklaşım rastgele denemekten daha hızlıdır)
  
  ## Dört Aşama
  
  Her aşamayı tamamlamanız gerekir, sonra bir sonrakine geçin.
  
  ### Aşama 1: Kök Neden Araştırması
  
  **Herhangi bir düzeltme denememeden ÖNCE:**
  
  1. **Hata Mesajlarını Dikkatlice Okuyun**
     - Hataları veya uyarıları atlamayın
     - Genellikle tam çözümü içerirler
     - Stack trace'leri tamamen okuyun
     - Satır numaralarını, dosya yollarını, hata kodlarını not edin
  
  2. **Tutarlı Şekilde Yeniden Üretin**
     - Bunu güvenilir şekilde tetikleyebiliyor musunuz?
     - Tam adımlar nelerdir?
     - Her seferinde mi gerçekleşiyor?
     - Eğer yeniden üretilemiyorsa → daha fazla veri toplayın, tahminde bulunmayın
  
  3. **Son Değişiklikleri Kontrol Edin**
     - Bunu açıklayabilecek ne değişti?
     - Git diff, son commit'ler
     - Yeni bağımlılıklar, config değişiklikleri
     - Çevresel farklılıklar
  
  4. **Multi-Bileşen Sistemlerde Kanıt Toplayın**
  
     **Sistem birden fazla bileşene sahip olduğunda (CI → derleme → imzalama, API → servis → veritabanı):**
  
     **Düzeltme önermeden önce, tanısal enstrümantasyon ekleyin:**
     ```
     Her bileşen sınırı için:
       - Bileşene giren verileri kaydet
       - Bileşenden çıkan verileri kaydet
       - Ortam/config yayılmasını doğrula
       - Her katmandaki durumu kontrol et
  
     NEREDE kırıldığını gösteren kanıt toplamak için bir kez çalıştır
     SONRA kırılan bileşeni belirlemek için kanıtı analiz et
     SONRA o spesifik bileşeni araştır
     ```
  
     **Örnek (çok katmanlı sistem):**
     ```bash
     # Katman 1: Workflow
     echo "=== Workflow'da mevcut olan Secrets: ==="
     echo "IDENTITY: ${IDENTITY:+SET}${IDENTITY:-UNSET}"
  
     # Katman 2: Build script
     echo "=== Build script'teki env vars: ==="
     env | grep IDENTITY || echo "IDENTITY ortamda yok"
  
     # Katman 3: İmzalama script
     echo "=== Keychain durumu: ==="
     security list-keychains
     security find-identity -v
  
     # Katman 4: Gerçek imzalama
     codesign --sign "$IDENTITY" --verbose=4 "$APP"
     ```
  
     **Bu ortaya çıkarır:** Hangi katman başarısız olur (secrets → workflow ✓, workflow → build ✗)
  
  5. **Veri Akışını İzleyin**
  
     **Hata call stack'in derininde olduğunda:**
  
     Bu dizindeki `root-cause-tracing.md` dosyasına bakın, komple geri doğru izleme tekniği için.
  
     **Hızlı versiyon:**
     - Kötü değer nereden kaynaklanıyor?
     - Bunu kötü değerle kim çağırdı?
     - Kaynağı bulana kadar izlemeye devam edin
     - Semptomda değil, kaynakta düzelt
  
  ### Aşama 2: Model Analizi
  
  **Düzeltmeden önce deseni bulun:**
  
  1. **Çalışan Örnekleri Bulun**
     - Aynı kod tabanında benzer çalışan kodu bulun
     - Kırılan şeye benzer ne çalışıyor?
  
  2. **Referanslara Karşı Karşılaştırın**
     - Eğer pattern uyguluyorsanız, referans implementasyonu TAMAMEN okuyun
     - Okumanız yapmayın - her satırı okuyun
     - Uygulamadan önce deseni tamamen anlayın
  
  3. **Farklılıkları Belirleyin**
     - Çalışan ile kırılan arasında ne fark var?
     - Her farkı listeleyin, ne kadar küçük olursa olsun
     - "Bu önemli olamaz" diye varsaymayın
  
  4. **Bağımlılıkları Anlayın**
     - Bunun neye ihtiyacı var?
     - Ne ayarları, config, ortam?
     - Ne varsayımları yapıyor?
  
  ### Aşama 3: Hipotez ve Test
  
  **Bilimsel yöntem:**
  
  1. **Tek Hipotez Oluşturun**
     - Açıkça belirtin: "X'in kök neden olduğunu düşünüyorum çünkü Y"
     - Yazın
     - Net olun, muğlak değil
  
  2. **Minimal Test Edin**
     - Hipotezi test etmek için EN KÜÇÜK değişikliği yapın
     - Bir seferde bir değişken
     - Birden fazla şeyi aynı anda düzeltmeyin
  
  3. **Devam Etmeden Doğrulayın**
     - Işe yaradı mı? Evet → Aşama 4
     - Işe yaramadı mı? YENİ hipotez oluşturun
     - Üstüne daha fazla düzeltme eklemeyin
  
  4. **Bilmediğinizde**
     - "X'i anlamıyorum" deyin
     - Biliyormuş gibi davranmayın
     - Yardım isteyin
     - Daha fazla araştırın
  
  ### Aşama 4: Uygulama
  
  **Semptomda değil, kök nedeni düzelt:**
  
  1. **Başarısız Test Vakası Oluşturun**
     - En basit olası yeniden üretim
     - Mümkünse otomatik test
     - Çerçeve yoksa tek seferlik test script
     - Düzeltmeden ÖNCE olmalı
     - Uygun başarısız testler yazması için `superpowers:test-driven-development` yeteneğini kullanın
  
  2. **Tek Düzeltme Uygulayın**
     - Belirlenen kök nedeni adresleme
     - BİR seferde bir değişiklik
     - "Zaten burada iken" iyileştirmeleri yok
     - Paketlenmiş refactoring yok
  
  3. **Düzeltmeyi Doğrulayın**
     - Test şimdi geçiyor mu?
     - Başka test kırılmadı mı?
     - Sorun gerçekten çözüldü mü?
  
  4. **Eğer Düzeltme Işe Yaramazsa**
     - DUR
     - Kaç düzeltme denediniz?
     - Eğer < 3: Aşama 1'e dönün, yeni bilgilerle yeniden analiz edin
     - **Eğer ≥ 3: DUR ve mimarisini sorgulaşturun (aşağıda adım 5)**
     - 4. Düzeltmeyi mimarı tartışmadan denemeyin
  
  5. **Eğer 3+ Düzeltme Başarısız Olduysa: Mimarisini Sorgulaştır**
  
     **Mimari sorun gösteren model:**
     - Her düzeltme farklı yerde paylaşılan state/bağlantı/sorun ortaya çıkarır
     - Düzeltmeler uygulama için "masif refactoring" gerektiriyor
     - Her düzeltme başka yerlerde yeni semptomlar yaratıyor
  
     **DURUN ve temelleri sorgulaşturun:**
     - Bu model temelde sağlam mı?
     - "Saf ataletlerle mi devam ediyoruz"?
     - Semptom düzeltmeye devam etmek yerine mimarisini refactor etmeliyiz mi?
  
     **Daha fazla düzeltme denemesinden önce insan ortağınızla tartışın**
  
     Bu başarısız bir hipotez DEĞİL - bu yanlış bir mimaridir.
  
  ## Kırmızı Bayraklar - DURUN ve İşlemi Takip Edin
  
  Kendinizi şöyle düşünürken yakalarsanız:
  - "Şimdilik hızlı düzeltme, sonra araştır"
  - "Sadece X'i değiştirmeyi deneyelim ve görelim"
  - "Birden fazla değişiklik ekle, testleri çalıştır"
  - "Testi atla, manuel olarak doğrulayacağım"
  - "Muhtemelen X'tir, bunu düzeltelim"
  - "Tamamen anlamıyorum ama bu işe yarayabilir"
  - "Model X der ama ben onu farklı şekilde adapte edeceğim"
  - "İşte ana sorunlar: [araştırma olmadan düzeltmeler listesi]"
  - Veri akışını izlemeden çözümler önerme
  - **"Bir daha daha düzeltme denemesi" (zaten 2+ denediğinizde)**
  - **Her düzeltme farklı yerde yeni sorun ortaya çıkartıyor**
  
  **Bunların TÜMü şu anlama gelir: DURUN. Aşama 1'e dönün.**
  
  **Eğer 3+ düzeltme başarısız olduysa:** Mimarisini sorgulaştır (bkz. Aşama 4.5)
  
  ## İnsan Ortağınızın Yanlış Yaptığınızın Sinyalleri
  
  **Bu yeniden yönlendirmeleri izleyin:**
  - "Bu olmuyor mu?" - Doğrulamadan varsaydınız
  - "Bize ... gösterecek mi?" - Kanıt toplaması gerekiyordu
  - "Tahmin etmeyi durdur" - Anlamadan düzeltme öneriyorsunuz
  - "Ultra-think bunu" - Sadece semptomları değil, temelleri sorgulaştır
  - "Sıkışmış mıyız?" (mutsuz) - Yaklaşımınız işe yaramıyor
  
  **Bunları gördüğünüzde:** DURUN. Aşama 1'e dönün.
  
  ## Yaygın İtirazlar
  
  | Bahane | Gerçeklik |
  |--------|-----------|
  | "Sorun basit, işleme ihtiyaç yok" | Basit sorunların da kök nedenleri vardır. İşlem basit hatalar için hızlıdır. |
  | "Acil durum, işlem için zaman yok" | Sistematik hata ayıklama tahmin-ve-kontrol karmaşasından DAHA HIZLIDIR. |
  | "Önce bunu deneyelim, sonra araştıralım" | İlk düzeltme deseni belirler. Baştan itibaren doğru yapın. |
  | "Test başladıktan sonra yazarım" | Test edilmemiş düzeltmeler kalmaz. Test önce bunu kanıtlar. |
  | "Birden fazla düzeltme aynı anda zaman kazandırır" | Hangi düzeltmenin işe yaradığı belirlenemez. Yeni hatalar yaratır. |
  | "Referans çok uzun, deseni adapte edeceğim" | Kısmi anlayış garantili hatadır. Tamamen okuyun. |
  | "Sorunu görüyorum, düzeltelim" | Semptom görmek ≠ kök nedeni anlamak. |
  | "Bir daha daha düzeltme denemesi" (2+ başarısızlıktan sonra) | 3+ başarısızlık = mimari sorun. Yeniden deneyin, tekrar düzeltmeyin. |
  
  ## Hızlı Referans
  
  | Aşama | Anahtar Faaliyetler | Başarı Kriterleri |
  |-------|-------------------|-------------------|
  | **1. Kök Neden** | Hataları oku, yeniden üret, değişiklikleri kontrol et, kanıt topla | NE ve NEDEN'i anla |
  | **2. Model** | Çalışan örnekleri bul, karşılaştır | Farklılıkları belirle |
  | **3. Hipotez** | Teori oluştur, minimal test et | Onaylandı veya yeni hipotez |
  | **4. Uygulama** | Test oluştur, düzelt, doğrula | Hata çözüldü, testler geçiyor |
  
  ## İşlem "Kök Neden Yok" Ortaya Çıkardığında
  
  Sistematik araştırma sorunun gerçekten çevresel, zamanlama-bağımlı veya dış olduğunu ortaya çıkarırsa:
  
  1. İşlemi tamamladınız
  2. Araştırdığınız şeyleri belgelendirin
  3. Uygun işleme uygulayın (yeniden dene, timeout, hata mesajı)
  4. Gelecekteki araştırma için izleme/logging ekleyin
  
  **Ama:** "Kök neden yok" durumlarının %95'i eksik araştırmadır.
  
  ## Destekleyici Teknikler
  
  Bu teknikler sistematik hata ayıklamanın parçası ve bu dizinde mevcuttur:
  
  - **`root-cause-tracing.md`** - Hataları call stack'ten geri izleyerek orijinal tetikleyiciyi bulun
  - **`defense-in-depth.md`** - Kök neden bulunduktan sonra birden fazla katmanda doğrulama ekleyin
  - **`condition-based-waiting.md`** - Keyfi timeout'ları condition polling ile değiştirin
  
  **İlgili yetkinlikler:**
  - **superpowers:test-driven-development** - Başarısız test vakası oluşturmak için (Aşama 4, Adım 1)
  - **superpowers:verification-before-completion** - Başarı iddia etmeden önce düzeltmeyi doğrulayın
  
  ## Gerçek Dünya Etkisi
  
  Hata ayıklama oturumlarından:
  - Sistematik yaklaşım: 15-30 dakika düzeltmek
  - Rastgele düzeltmeler yaklaşımı: 2-3 saat karmaşa
  - İlk kez düzeltme oranı: %95'e karşı %40
  - Tanıtılan yeni hatalar: Neredeyse sıfır'a karşı yaygın
---

# Systematic Debugging

## Overview

Random fixes waste time and create new bugs. Quick patches mask underlying issues.

**Core principle:** ALWAYS find root cause before attempting fixes. Symptom fixes are failure.

**Violating the letter of this process is violating the spirit of debugging.**

## The Iron Law

```
NO FIXES WITHOUT ROOT CAUSE INVESTIGATION FIRST
```

If you haven't completed Phase 1, you cannot propose fixes.

## When to Use

Use for ANY technical issue:
- Test failures
- Bugs in production
- Unexpected behavior
- Performance problems
- Build failures
- Integration issues

**Use this ESPECIALLY when:**
- Under time pressure (emergencies make guessing tempting)
- "Just one quick fix" seems obvious
- You've already tried multiple fixes
- Previous fix didn't work
- You don't fully understand the issue

**Don't skip when:**
- Issue seems simple (simple bugs have root causes too)
- You're in a hurry (rushing guarantees rework)
- Manager wants it fixed NOW (systematic is faster than thrashing)

## The Four Phases

You MUST complete each phase before proceeding to the next.

### Phase 1: Root Cause Investigation

**BEFORE attempting ANY fix:**

1. **Read Error Messages Carefully**
   - Don't skip past errors or warnings
   - They often contain the exact solution
   - Read stack traces completely
   - Note line numbers, file paths, error codes

2. **Reproduce Consistently**
   - Can you trigger it reliably?
   - What are the exact steps?
   - Does it happen every time?
   - If not reproducible → gather more data, don't guess

3. **Check Recent Changes**
   - What changed that could cause this?
   - Git diff, recent commits
   - New dependencies, config changes
   - Environmental differences

4. **Gather Evidence in Multi-Component Systems**

   **WHEN system has multiple components (CI → build → signing, API → service → database):**

   **BEFORE proposing fixes, add diagnostic instrumentation:**
   ```
   For EACH component boundary:
     - Log what data enters component
     - Log what data exits component
     - Verify environment/config propagation
     - Check state at each layer

   Run once to gather evidence showing WHERE it breaks
   THEN analyze evidence to identify failing component
   THEN investigate that specific component
   ```

   **Example (multi-layer system):**
   ```bash
   # Layer 1: Workflow
   echo "=== Secrets available in workflow: ==="
   echo "IDENTITY: ${IDENTITY:+SET}${IDENTITY:-UNSET}"

   # Layer 2: Build script
   echo "=== Env vars in build script: ==="
   env | grep IDENTITY || echo "IDENTITY not in environment"

   # Layer 3: Signing script
   echo "=== Keychain state: ==="
   security list-keychains
   security find-identity -v

   # Layer 4: Actual signing
   codesign --sign "$IDENTITY" --verbose=4 "$APP"
   ```

   **This reveals:** Which layer fails (secrets → workflow ✓, workflow → build ✗)

5. **Trace Data Flow**

   **WHEN error is deep in call stack:**

   See `root-cause-tracing.md` in this directory for the complete backward tracing technique.

   **Quick version:**
   - Where does bad value originate?
   - What called this with bad value?
   - Keep tracing up until you find the source
   - Fix at source, not at symptom

### Phase 2: Pattern Analysis

**Find the pattern before fixing:**

1. **Find Working Examples**
   - Locate similar working code in same codebase
   - What works that's similar to what's broken?

2. **Compare Against References**
   - If implementing pattern, read reference implementation COMPLETELY
   - Don't skim - read every line
   - Understand the pattern fully before applying

3. **Identify Differences**
   - What's different between working and broken?
   - List every difference, however small
   - Don't assume "that can't matter"

4. **Understand Dependencies**
   - What other components does this need?
   - What settings, config, environment?
   - What assumptions does it make?

### Phase 3: Hypothesis and Testing

**Scientific method:**

1. **Form Single Hypothesis**
   - State clearly: "I think X is the root cause because Y"
   - Write it down
   - Be specific, not vague

2. **Test Minimally**
   - Make the SMALLEST possible change to test hypothesis
   - One variable at a time
   - Don't fix multiple things at once

3. **Verify Before Continuing**
   - Did it work? Yes → Phase 4
   - Didn't work? Form NEW hypothesis
   - DON'T add more fixes on top

4. **When You Don't Know**
   - Say "I don't understand X"
   - Don't pretend to know
   - Ask for help
   - Research more

### Phase 4: Implementation

**Fix the root cause, not the symptom:**

1. **Create Failing Test Case**
   - Simplest possible reproduction
   - Automated test if possible
   - One-off test script if no framework
   - MUST have before fixing
   - Use the `superpowers:test-driven-development` skill for writing proper failing tests

2. **Implement Single Fix**
   - Address the root cause identified
   - ONE change at a time
   - No "while I'm here" improvements
   - No bundled refactoring

3. **Verify Fix**
   - Test passes now?
   - No other tests broken?
   - Issue actually resolved?

4. **If Fix Doesn't Work**
   - STOP
   - Count: How many fixes have you tried?
   - If < 3: Return to Phase 1, re-analyze with new information
   - **If ≥ 3: STOP and question the architecture (step 5 below)**
   - DON'T attempt Fix #4 without architectural discussion

5. **If 3+ Fixes Failed: Question Architecture**

   **Pattern indicating architectural problem:**
   - Each fix reveals new shared state/coupling/problem in different place
   - Fixes require "massive refactoring" to implement
   - Each fix creates new symptoms elsewhere

   **STOP and question fundamentals:**
   - Is this pattern fundamentally sound?
   - Are we "sticking with it through sheer inertia"?
   - Should we refactor architecture vs. continue fixing symptoms?

   **Discuss with your human partner before attempting more fixes**

   This is NOT a failed hypothesis - this is a wrong architecture.

## Red Flags - STOP and Follow Process

If you catch yourself thinking:
- "Quick fix for now, investigate later"
- "Just try changing X and see if it works"
- "Add multiple changes, run tests"
- "Skip the test, I'll manually verify"
- "It's probably X, let me fix that"
- "I don't fully understand but this might work"
- "Pattern says X but I'll adapt it differently"
- "Here are the main problems: [lists fixes without investigation]"
- Proposing solutions before tracing data flow
- **"One more fix attempt" (when already tried 2+)**
- **Each fix reveals new problem in different place**

**ALL of these mean: STOP. Return to Phase 1.**

**If 3+ fixes failed:** Question the architecture (see Phase 4.5)

## your human partner's Signals You're Doing It Wrong

**Watch for these redirections:**
- "Is that not happening?" - You assumed without verifying
- "Will it show us...?" - You should have added evidence gathering
- "Stop guessing" - You're proposing fixes without understanding
- "Ultra-think this" - Question fundamentals, not just symptoms
- "We're stuck?" (frustrated) - Your approach isn't working

**When you see these:** STOP. Return to Phase 1.

## Common Rationalizations

| Excuse | Reality |
|--------|---------|
| "Issue is simple, don't need process" | Simple issues have root causes too. Process is fast for simple bugs. |
| "Emergency, no time for process" | Systematic debugging is FASTER than guess-and-check thrashing. |
| "Just try this first, then investigate" | First fix sets the pattern. Do it right from the start. |
| "I'll write test after confirming fix works" | Untested fixes don't stick. Test first proves it. |
| "Multiple fixes at once saves time" | Can't isolate what worked. Causes new bugs. |
| "Reference too long, I'll adapt the pattern" | Partial understanding guarantees bugs. Read it completely. |
| "I see the problem, let me fix it" | Seeing symptoms ≠ understanding root cause. |
| "One more fix attempt" (after 2+ failures) | 3+ failures = architectural problem. Question pattern, don't fix again. |

## Quick Reference

| Phase | Key Activities | Success Criteria |
|-------|---------------|------------------|
| **1. Root Cause** | Read errors, reproduce, check changes, gather evidence | Understand WHAT and WHY |
| **2. Pattern** | Find working examples, compare | Identify differences |
| **3. Hypothesis** | Form theory, test minimally | Confirmed or new hypothesis |
| **4. Implementation** | Create test, fix, verify | Bug resolved, tests pass |

## When Process Reveals "No Root Cause"

If systematic investigation reveals issue is truly environmental, timing-dependent, or external:

1. You've completed the process
2. Document what you investigated
3. Implement appropriate handling (retry, timeout, error message)
4. Add monitoring/logging for future investigation

**But:** 95% of "no root cause" cases are incomplete investigation.

## Supporting Techniques

These techniques are part of systematic debugging and available in this directory:

- **`root-cause-tracing.md`** - Trace bugs backward through call stack to find original trigger
- **`defense-in-depth.md`** - Add validation at multiple layers after finding root cause
- **`condition-based-waiting.md`** - Replace arbitrary timeouts with condition polling

**Related skills:**
- **superpowers:test-driven-development** - For creating failing test case (Phase 4, Step 1)
- **superpowers:verification-before-completion** - Verify fix worked before claiming success

## Real-World Impact

From debugging sessions:
- Systematic approach: 15-30 minutes to fix
- Random fixes approach: 2-3 hours of thrashing
- First-time fix rate: 95% vs 40%
- New bugs introduced: Near zero vs common
