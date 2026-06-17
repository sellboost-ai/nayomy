---
name: "test-driven-development"
description_en: "Use when implementing any feature or bugfix, before writing implementation code"
description_tr: "Herhangi bir feature ya da bugfix uygulamaya başlamadan önce kullanın."
category: "Development"
repo: "obra/superpowers"
stars: 229812
url: "https://github.com/obra/superpowers/blob/HEAD/skills/test-driven-development/SKILL.md"
path: "skills/test-driven-development/SKILL.md"
is_collection: false
body_length: 9751
has_scripts: false
has_references: false
has_examples: false
related_files: ["testing-anti-patterns.md"]
body_tr: |-
  # Test-Driven Development (TDD)

  ## Genel Bakış

  Önce testi yazın. Başarısız olduğunu görün. Minimal kod yazarak geçirin.

  **Temel ilke:** Testi başarısız olduğunu görmediyseniz, doğru şeyi test edip etmediğinizi bilemezsiniz.

  **Kuralların harfini ihlal etmek, ruhunu ihlal etmektir.**

  ## Ne Zaman Kullanılır

  **Her Zaman:**
  - Yeni özellikler
  - Hata düzeltmeleri
  - Refactoring
  - Davranış değişiklikleri

  **İstisnalar (insan ortağınıza sorun):**
  - Kısa ömürlü prototipler
  - Üretilen kod
  - Yapılandırma dosyaları

  "Sadece bu kez TDD'yi atla" diye düşünüyor musunuz? Durun. Bu rasyonalizasyondur.

  ## Demir Yasa

  ```
  BAŞARIŞIZ BİR TEST OLMADAN ÜRETİM KODU YAZMA
  ```

  Testen önce kod yazıldı mı? Sil. Baştan başla.

  **Hiçbir istisna:**
  - "Referans olarak" tutma
  - Testleri yazarken "uyarla"
  - Ona bakma
  - Sil demek sil demektir

  Testlerden temiz başla. Nokta.

  ## Kırmızı-Yeşil-Refactor

  ```dot
  digraph tdd_cycle {
      rankdir=LR;
      red [label="RED\nBaşarısız test yaz", shape=box, style=filled, fillcolor="#ffcccc"];
      verify_red [label="Başarısızlığı\ndoğrula", shape=diamond];
      green [label="GREEN\nMinimal kod", shape=box, style=filled, fillcolor="#ccffcc"];
      verify_green [label="Başarısını doğrula\nHepsi yeşil", shape=diamond];
      refactor [label="REFACTOR\nTemizle", shape=box, style=filled, fillcolor="#ccccff"];
      next [label="Sonraki", shape=ellipse];

      red -> verify_red;
      verify_red -> green [label="evet"];
      verify_red -> red [label="yanlış\nbaşarısızlık"];
      green -> verify_green;
      verify_green -> refactor [label="evet"];
      verify_green -> green [label="hayır"];
      refactor -> verify_green [label="yeşil\nkalmak"];
      verify_green -> next;
      next -> red;
  }
  ```

  ### RED - Başarısız Test Yazın

  Ne olması gerektiğini gösteren minimal bir test yazın.

  <Good>
  ```typescript
  test('retries failed operations 3 times', async () => {
    let attempts = 0;
    const operation = () => {
      attempts++;
      if (attempts < 3) throw new Error('fail');
      return 'success';
    };

    const result = await retryOperation(operation);

    expect(result).toBe('success');
    expect(attempts).toBe(3);
  });
  ```
  Açık ad, gerçek davranış, bir şey
  </Good>

  <Bad>
  ```typescript
  test('retry works', async () => {
    const mock = jest.fn()
      .mockRejectedValueOnce(new Error())
      .mockRejectedValueOnce(new Error())
      .mockResolvedValueOnce('success');
    await retryOperation(mock);
    expect(mock).toHaveBeenCalledTimes(3);
  });
  ```
  Belirsiz ad, mock'u test eder, kodu değil
  </Bad>

  **Gereksinimler:**
  - Bir davranış
  - Açık ad
  - Gerçek kod (mocks kaçınılmaz değilse)

  ### RED'i Doğrula - Başarısızlığını Görün

  **ZORUNLU. Hiçbir zaman atlamayın.**

  ```bash
  npm test path/to/test.test.ts
  ```

  Doğrulayın:
  - Test başarısız (hata değil)
  - Başarısızlık mesajı beklenen
  - Özellik eksik olduğu için başarısız (yazım hatası değil)

  **Test geçti mi?** Var olan davranışı test ediyorsunuz. Testi düzeltin.

  **Test hata verdi mi?** Hatayı düzeltin, doğru başarısızlığa kadar yeniden çalıştırın.

  ### GREEN - Minimal Kod

  Testi geçmek için en basit kodu yazın.

  <Good>
  ```typescript
  async function retryOperation<T>(fn: () => Promise<T>): Promise<T> {
    for (let i = 0; i < 3; i++) {
      try {
        return await fn();
      } catch (e) {
        if (i === 2) throw e;
      }
    }
    throw new Error('unreachable');
  }
  ```
  Sadece geçmek için yeterli
  </Good>

  <Bad>
  ```typescript
  async function retryOperation<T>(
    fn: () => Promise<T>,
    options?: {
      maxRetries?: number;
      backoff?: 'linear' | 'exponential';
      onRetry?: (attempt: number) => void;
    }
  ): Promise<T> {
    // YAGNI
  }
  ```
  Aşırı mühendislik
  </Bad>

  Özellik eklemeyin, diğer kodu refactor etmeyin veya testin ötesine "iyileştirme" yapmayın.

  ### GREEN'i Doğrula - Başarısını Görün

  **ZORUNLU.**

  ```bash
  npm test path/to/test.test.ts
  ```

  Doğrulayın:
  - Test geçti
  - Diğer testler hala geçti
  - Çıktı temiz (hata, uyarı yok)

  **Test başarısız mı?** Kodu düzeltin, testi değil.

  **Diğer testler başarısız mı?** Şimdi düzeltin.

  ### REFACTOR - Temizleyin

  Sadece green'den sonra:
  - Tekrarı kaldırın
  - Adları iyileştirin
  - Yardımcılar çıkarın

  Testleri yeşil tutun. Davranış eklemeyin.

  ### Tekrarla

  Sonraki özellik için sonraki başarısız test.

  ## İyi Testler

  | Kalite | İyi | Kötü |
  |--------|-----|------|
  | **Minimal** | Bir şey. Adında "ve" var mı? Ayırın. | `test('validates email and domain and whitespace')` |
  | **Açık** | Ad davranışı açıklar | `test('test1')` |
  | **Niyeti göster** | İstenilen API'yi gösterir | Kodun ne yapması gerektiğini gizler |

  ## Sıra Neden Önemlidir

  **"Çalıştığını doğrulamak için sonra testleri yazarım"**

  Koddan sonra yazılan testler hemen geçer. Hemen geçmek hiçbir şey kanıtlamaz:
  - Yanlış şeyi test edebilir
  - Davranışı değil, uygulamayı test edebilir
  - Unuttuğunuz kenar durumları kaçırabilir
  - Testi başarısız olduğunu hiç görmediniz

  Testin önce yazılması, testi başarısız görmesi ile gerçekten bir şeyi test ettiğini kanıtlarsınız.

  **"Zaten tüm kenar durumları manuel olarak test ettim"**

  Manuel test geçicidir. Her şeyi test ettiğinizi düşünürsünüz ama:
  - Ne test ettiğinizin kaydı yok
  - Kod değiştiğinde yeniden çalıştıramazsınız
  - Basınç altında durumları unutmak kolay
  - "Benim denediğimde çalıştı" ≠ kapsamlı

  Otoomatik testler sistematiktir. Her seferinde aynı şekilde çalışırlar.

  **"X saat çalışma silmek israftır"**

  Gömülü maliyet safsatası. Zaman zaten geçti. Şimdi seçiminiz:
  - Sil ve TDD ile yeniden yaz (X daha saat, yüksek güven)
  - Tut ve sonra testler ekle (30 dakika, düşük güven, muhtemel hatalar)

  "İsraf" güvenilmez kodu tutmaktır. Gerçek testler olmayan çalışan kod teknik borçtur.

  **"TDD dogmatik, pragmatik olmak uyarlamayı demektir"**

  TDD pragmatiktir:
  - Hataları commit'ten önce bulur (hata ayıklama sonrası daha hızlı)
  - Regresyonları engeller (testler kırılmayı anında yakalar)
  - Davranışı belgeler (testler kodu nasıl kullanacağınızı gösterir)
  - Refactoring'i etkinleştirir (özgürce değiştirir, testler kırılmayı yakalar)

  "Pragmatik" kısayollar = üretimde hata ayıklama = daha yavaş.

  **"Sonra testler aynı hedeflere ulaşır - ruh içinde, ritüel değil"**

  Hayır. Sonra testler "bu ne yapar?" sorusunu cevaplar. Önce testler "bu ne yapmalı?" sorusunu cevaplar.

  Sonra testler uygulamanız tarafından önyargılı. Yaptığınız şeyi test edersiniz, gerekli olanı değil. Hatırlanan kenar durumlarını, keşfedilenleri değil doğrularsınız.

  Testler-önce kenar durumu keşfini uygulama öncesinde zorlar. Testler-sonra hatırlattığınız her şeyi doğrular (doğru olmadınız).

  30 dakika sonra test ≠ TDD. Kapsam elde edersiniz, testlerin çalıştığını kanıtlamayı kaybedersiniz.

  ## Yaygın Rasyonalizasyonlar

  | Bahane | Gerçek |
  |--------|--------|
  | "Çok basit test etmek için" | Basit kod kırılır. Test 30 saniye sürer. |
  | "Sonra test ederim" | Testler hemen geçmek hiçbir şey kanıtlamaz. |
  | "Sonra testler aynı hedeflere ulaşır" | Testler-sonra = "bu ne yapar?" Testler-önce = "bu ne yapmalı?" |
  | "Zaten manuel test ettim" | Geçici ≠ sistematik. Kayıt yok, yeniden çalıştıramazsınız. |
  | "X saat silmek israftır" | Gömülü maliyet safsatası. Doğrulanmamış kodu tutmak teknik borçtur. |
  | "Referans olarak tut, testleri önce yaz" | Bunu uyarlayacaksınız. Bu testleri sonra yazmaktır. Sil demek sil demektir. |
  | "Önce keşfetmem lazım" | Tamam. Keşfi at, TDD ile başla. |
  | "Test zor = tasarım net değil" | Teste dinle. Test zor = kullanmak zor. |
  | "TDD beni yavaşlatacak" | TDD hata ayıklamadan hızlıdır. Pragmatik = testler-önce. |
  | "Manuel test daha hızlı" | Manuel kenar durumları kanıtlamaz. Her değişikliği yeniden test edeceksiniz. |
  | "Var olan kodun testleri yok" | Bunu iyileştiriyorsunuz. Var olan kod için testler ekleyin. |

  ## Kırmızı Bayraklar - DUR ve Baştan Başla

  - Testten önce kod
  - Uygulamadan sonra test
  - Test hemen geçti
  - Testin neden başarısız olduğunu açıklayamazsınız
  - Testler "daha sonra" eklendi
  - "Sadece bu kez" rasyonallaştırma
  - "Zaten manuel olarak test ettim"
  - "Sonra testler aynı amaca hizmet eder"
  - "Ruh hakkında, ritüel değil"
  - "Referans olarak tut" veya "var olan kodu uyarla"
  - "Zaten X saat harcadı, silmek israftır"
  - "TDD dogmatik, ben pragmatik davranıyorum"
  - "Bu farklı çünkü..."

  **Tümü şu anlama gelir: Kodu silin. TDD ile baştan başlayın.**

  ## Örnek: Hata Düzeltme

  **Hata:** Boş email kabul edildi

  **RED**
  ```typescript
  test('rejects empty email', async () => {
    const result = await submitForm({ email: '' });
    expect(result.error).toBe('Email required');
  });
  ```

  **RED'i Doğrula**
  ```bash
  $ npm test
  FAIL: expected 'Email required', got undefined
  ```

  **GREEN**
  ```typescript
  function submitForm(data: FormData) {
    if (!data.email?.trim()) {
      return { error: 'Email required' };
    }
    // ...
  }
  ```

  **GREEN'i Doğrula**
  ```bash
  $ npm test
  PASS
  ```

  **REFACTOR**
  Gerekirse birden çok alan için validation çıkarın.

  ## Doğrulama Kontrol Listesi

  İş tamamlandı olarak işaretlemeden önce:

  - [ ] Her yeni function/method'un bir testi var
  - [ ] Uygulamadan önce her testi başarısız görmüş
  - [ ] Her test beklenen nedenden başarısız oldu (özellik eksik, yazım hatası değil)
  - [ ] Her testi geçmek için minimal kod yazdı
  - [ ] Tüm testler geçti
  - [ ] Çıktı temiz (hata, uyarı yok)
  - [ ] Testler gerçek kod kullan (mocks kaçınılmaz ise)
  - [ ] Kenar durumlar ve hatalar kapsanmış

  Tüm kutuları işaretleyemedi misiniz? TDD'yi atladınız. Baştan başlayın.

  ## Takıldığında

  | Problem | Çözüm |
  |---------|-------|
  | Test etme hakkında bilmiyorum | Umut edilen API'yi yazın. Assertion'ı önce yazın. İnsan ortağınıza sorun. |
  | Test çok karışık | Tasarım çok karışık. Arayüzü basitleştirin. |
  | Her şeyi mock etmek gerekir | Kod çok kuplajlı. Bağımlılık injection kullanın. |
  | Test kurulumu çok büyük | Yardımcılar çıkarın. Hala karışık? Tasarımı basitleştirin. |

  ## Hata Ayıklama Entegrasyonu

  Hata bulundu mu? Bunu yeniden oluşturan başarısız test yazın. TDD döngüsünü izleyin. Test düzeltmeyi kanıtlar ve regresyonu engeller.

  Hiçbir zaman testleri olmadan hataları düzeltmeyin.

  ## Test Anti-Desenleri

  Mock'lar veya test yardımcıları eklerken, yaygın tuzakları önlemek için [testing-anti-patterns.md](testing-anti-patterns.md) oku:
  - Mock davranışını gerçek davranış yerine test etmek
  - Üretim sınıflarına test yalnızca yöntemleri eklemek
  - Bağımlılıkları anlamadan mock'lamak

  ## Son Kural

  ```
  Üretim kodu → test var ve önce başarısız oldu
  Aksi takdirde → TDD değil
  ```

  İnsan ortağınızın izni olmadan hiçbir istisna.
---

# Test-Driven Development (TDD)

## Overview

Write the test first. Watch it fail. Write minimal code to pass.

**Core principle:** If you didn't watch the test fail, you don't know if it tests the right thing.

**Violating the letter of the rules is violating the spirit of the rules.**

## When to Use

**Always:**
- New features
- Bug fixes
- Refactoring
- Behavior changes

**Exceptions (ask your human partner):**
- Throwaway prototypes
- Generated code
- Configuration files

Thinking "skip TDD just this once"? Stop. That's rationalization.

## The Iron Law

```
NO PRODUCTION CODE WITHOUT A FAILING TEST FIRST
```

Write code before the test? Delete it. Start over.

**No exceptions:**
- Don't keep it as "reference"
- Don't "adapt" it while writing tests
- Don't look at it
- Delete means delete

Implement fresh from tests. Period.

## Red-Green-Refactor

```dot
digraph tdd_cycle {
    rankdir=LR;
    red [label="RED\nWrite failing test", shape=box, style=filled, fillcolor="#ffcccc"];
    verify_red [label="Verify fails\ncorrectly", shape=diamond];
    green [label="GREEN\nMinimal code", shape=box, style=filled, fillcolor="#ccffcc"];
    verify_green [label="Verify passes\nAll green", shape=diamond];
    refactor [label="REFACTOR\nClean up", shape=box, style=filled, fillcolor="#ccccff"];
    next [label="Next", shape=ellipse];

    red -> verify_red;
    verify_red -> green [label="yes"];
    verify_red -> red [label="wrong\nfailure"];
    green -> verify_green;
    verify_green -> refactor [label="yes"];
    verify_green -> green [label="no"];
    refactor -> verify_green [label="stay\ngreen"];
    verify_green -> next;
    next -> red;
}
```

### RED - Write Failing Test

Write one minimal test showing what should happen.

<Good>
```typescript
test('retries failed operations 3 times', async () => {
  let attempts = 0;
  const operation = () => {
    attempts++;
    if (attempts < 3) throw new Error('fail');
    return 'success';
  };

  const result = await retryOperation(operation);

  expect(result).toBe('success');
  expect(attempts).toBe(3);
});
```
Clear name, tests real behavior, one thing
</Good>

<Bad>
```typescript
test('retry works', async () => {
  const mock = jest.fn()
    .mockRejectedValueOnce(new Error())
    .mockRejectedValueOnce(new Error())
    .mockResolvedValueOnce('success');
  await retryOperation(mock);
  expect(mock).toHaveBeenCalledTimes(3);
});
```
Vague name, tests mock not code
</Bad>

**Requirements:**
- One behavior
- Clear name
- Real code (no mocks unless unavoidable)

### Verify RED - Watch It Fail

**MANDATORY. Never skip.**

```bash
npm test path/to/test.test.ts
```

Confirm:
- Test fails (not errors)
- Failure message is expected
- Fails because feature missing (not typos)

**Test passes?** You're testing existing behavior. Fix test.

**Test errors?** Fix error, re-run until it fails correctly.

### GREEN - Minimal Code

Write simplest code to pass the test.

<Good>
```typescript
async function retryOperation<T>(fn: () => Promise<T>): Promise<T> {
  for (let i = 0; i < 3; i++) {
    try {
      return await fn();
    } catch (e) {
      if (i === 2) throw e;
    }
  }
  throw new Error('unreachable');
}
```
Just enough to pass
</Good>

<Bad>
```typescript
async function retryOperation<T>(
  fn: () => Promise<T>,
  options?: {
    maxRetries?: number;
    backoff?: 'linear' | 'exponential';
    onRetry?: (attempt: number) => void;
  }
): Promise<T> {
  // YAGNI
}
```
Over-engineered
</Bad>

Don't add features, refactor other code, or "improve" beyond the test.

### Verify GREEN - Watch It Pass

**MANDATORY.**

```bash
npm test path/to/test.test.ts
```

Confirm:
- Test passes
- Other tests still pass
- Output pristine (no errors, warnings)

**Test fails?** Fix code, not test.

**Other tests fail?** Fix now.

### REFACTOR - Clean Up

After green only:
- Remove duplication
- Improve names
- Extract helpers

Keep tests green. Don't add behavior.

### Repeat

Next failing test for next feature.

## Good Tests

| Quality | Good | Bad |
|---------|------|-----|
| **Minimal** | One thing. "and" in name? Split it. | `test('validates email and domain and whitespace')` |
| **Clear** | Name describes behavior | `test('test1')` |
| **Shows intent** | Demonstrates desired API | Obscures what code should do |

## Why Order Matters

**"I'll write tests after to verify it works"**

Tests written after code pass immediately. Passing immediately proves nothing:
- Might test wrong thing
- Might test implementation, not behavior
- Might miss edge cases you forgot
- You never saw it catch the bug

Test-first forces you to see the test fail, proving it actually tests something.

**"I already manually tested all the edge cases"**

Manual testing is ad-hoc. You think you tested everything but:
- No record of what you tested
- Can't re-run when code changes
- Easy to forget cases under pressure
- "It worked when I tried it" ≠ comprehensive

Automated tests are systematic. They run the same way every time.

**"Deleting X hours of work is wasteful"**

Sunk cost fallacy. The time is already gone. Your choice now:
- Delete and rewrite with TDD (X more hours, high confidence)
- Keep it and add tests after (30 min, low confidence, likely bugs)

The "waste" is keeping code you can't trust. Working code without real tests is technical debt.

**"TDD is dogmatic, being pragmatic means adapting"**

TDD IS pragmatic:
- Finds bugs before commit (faster than debugging after)
- Prevents regressions (tests catch breaks immediately)
- Documents behavior (tests show how to use code)
- Enables refactoring (change freely, tests catch breaks)

"Pragmatic" shortcuts = debugging in production = slower.

**"Tests after achieve the same goals - it's spirit not ritual"**

No. Tests-after answer "What does this do?" Tests-first answer "What should this do?"

Tests-after are biased by your implementation. You test what you built, not what's required. You verify remembered edge cases, not discovered ones.

Tests-first force edge case discovery before implementing. Tests-after verify you remembered everything (you didn't).

30 minutes of tests after ≠ TDD. You get coverage, lose proof tests work.

## Common Rationalizations

| Excuse | Reality |
|--------|---------|
| "Too simple to test" | Simple code breaks. Test takes 30 seconds. |
| "I'll test after" | Tests passing immediately prove nothing. |
| "Tests after achieve same goals" | Tests-after = "what does this do?" Tests-first = "what should this do?" |
| "Already manually tested" | Ad-hoc ≠ systematic. No record, can't re-run. |
| "Deleting X hours is wasteful" | Sunk cost fallacy. Keeping unverified code is technical debt. |
| "Keep as reference, write tests first" | You'll adapt it. That's testing after. Delete means delete. |
| "Need to explore first" | Fine. Throw away exploration, start with TDD. |
| "Test hard = design unclear" | Listen to test. Hard to test = hard to use. |
| "TDD will slow me down" | TDD faster than debugging. Pragmatic = test-first. |
| "Manual test faster" | Manual doesn't prove edge cases. You'll re-test every change. |
| "Existing code has no tests" | You're improving it. Add tests for existing code. |

## Red Flags - STOP and Start Over

- Code before test
- Test after implementation
- Test passes immediately
- Can't explain why test failed
- Tests added "later"
- Rationalizing "just this once"
- "I already manually tested it"
- "Tests after achieve the same purpose"
- "It's about spirit not ritual"
- "Keep as reference" or "adapt existing code"
- "Already spent X hours, deleting is wasteful"
- "TDD is dogmatic, I'm being pragmatic"
- "This is different because..."

**All of these mean: Delete code. Start over with TDD.**

## Example: Bug Fix

**Bug:** Empty email accepted

**RED**
```typescript
test('rejects empty email', async () => {
  const result = await submitForm({ email: '' });
  expect(result.error).toBe('Email required');
});
```

**Verify RED**
```bash
$ npm test
FAIL: expected 'Email required', got undefined
```

**GREEN**
```typescript
function submitForm(data: FormData) {
  if (!data.email?.trim()) {
    return { error: 'Email required' };
  }
  // ...
}
```

**Verify GREEN**
```bash
$ npm test
PASS
```

**REFACTOR**
Extract validation for multiple fields if needed.

## Verification Checklist

Before marking work complete:

- [ ] Every new function/method has a test
- [ ] Watched each test fail before implementing
- [ ] Each test failed for expected reason (feature missing, not typo)
- [ ] Wrote minimal code to pass each test
- [ ] All tests pass
- [ ] Output pristine (no errors, warnings)
- [ ] Tests use real code (mocks only if unavoidable)
- [ ] Edge cases and errors covered

Can't check all boxes? You skipped TDD. Start over.

## When Stuck

| Problem | Solution |
|---------|----------|
| Don't know how to test | Write wished-for API. Write assertion first. Ask your human partner. |
| Test too complicated | Design too complicated. Simplify interface. |
| Must mock everything | Code too coupled. Use dependency injection. |
| Test setup huge | Extract helpers. Still complex? Simplify design. |

## Debugging Integration

Bug found? Write failing test reproducing it. Follow TDD cycle. Test proves fix and prevents regression.

Never fix bugs without a test.

## Testing Anti-Patterns

When adding mocks or test utilities, read [testing-anti-patterns.md](testing-anti-patterns.md) to avoid common pitfalls:
- Testing mock behavior instead of real behavior
- Adding test-only methods to production classes
- Mocking without understanding dependencies

## Final Rule

```
Production code → test exists and failed first
Otherwise → not TDD
```

No exceptions without your human partner's permission.
