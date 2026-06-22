---
name: "tdd"
description_en: "Test-driven development. Use when the user wants to build features or fix bugs test-first, mentions \"red-green-refactor\", or wants integration tests."
description_tr: "Test-driven development yaklaşımıyla kırmızı-yeşil-refactor döngüsünü uygulayın. Kullanıcı TDD ile özellik geliştirmek veya hata düzeltmek istediğinde, \"red-green-refactor\" metodundan bahsettiğinde, entegrasyon testleri veya test-first geliştirme talep ettiğinde kullanın."
category: "Design"
repo: "mattpocock/skills"
stars: 140637
url: "https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/tdd/SKILL.md"
path: "skills/engineering/tdd/SKILL.md"
is_collection: false
body_length: 4136
has_scripts: false
has_references: false
has_examples: false
related_files: ["mocking.md", "refactoring.md", "tests.md"]
body_tr: |-
  # Test-Driven Development
  
  ## Felsefe
  
  **Temel ilke**: Testler davranışı public interface'ler üzerinden doğrulamalı, implementasyon detaylarından değil. Kod tamamen değişebilir; testler değişmemeli.
  
  **İyi testler** entegrasyon tarzındadır: real kod yollarını public API'ler üzerinden çalıştırırlar. Sistemin _ne_ yaptığını, _nasıl_ yaptığını değil, anlatırlar. İyi bir test bir specification gibi okunur - "user geçerli cart ile checkout yapabilir" tam olarak hangi kabiliyetin var olduğunu söyler. Bu testler refactor'ları survive ederler çünkü iç yapıya umursamazlar.
  
  **Kötü testler** implementasyona bağlıdır. Internal collaborator'ları mock ederler, private method'ları test ederler, veya external araçlar üzerinden doğrularlar (örneğin interface'i kullanmak yerine doğrudan database sorgulama). Uyarı işareti: test refactor yaptığında kırılır ama davranış değişmemiş. Eğer internal bir function'ı rename ettiğinizde testler fail olursa, bu testler implementasyonu test ediyordu, davranışı değil.
  
  Örnekler için [tests.md](tests.md)'ye ve mocking yönergeleri için [mocking.md](mocking.md)'ye bak.
  
  ## Anti-Pattern: Horizontal Slices
  
  **YAPMAYINIZ tüm testleri önce yazıp, sonra tüm implementasyonu yazınız.** Bu "horizontal slicing" - RED'i "tüm testleri yaz" ve GREEN'i "tüm kodu yaz" olarak almak.
  
  Bu **çöp testler** üretir:
  
  - Toplu yazılan testler _hayal edilen_ davranışı test eder, _gerçek_ davranışı değil
  - Sonunda şeylerin _şekli_ni test edersiniz (data structure'lar, function signature'ları) user-facing davranıştan ziyade
  - Testler gerçek değişikliklere duyarsız hale gelir - davranış kırıldığında pass eder, davranış iyiyken fail eder
  - Headlight'larınızı aşarsınız, implementasyonu anlamadan test structure'a commit etmiş olursunuz
  
  **Doğru yaklaşım**: Tracer bullet'lar via vertical slices. Bir test → bir implementasyon → tekrarlayın. Her test önceki döngüden öğrendiklerinize cevap verir. Kodu az önce yazdığınız için, tam olarak hangi davranışın önemli olduğunu ve nasıl doğrulanacağını bilirsiniz.
  
  ```
  YANLIŞ (horizontal):
    RED:   test1, test2, test3, test4, test5
    GREEN: impl1, impl2, impl3, impl4, impl5
  
  DOĞRU (vertical):
    RED→GREEN: test1→impl1
    RED→GREEN: test2→impl2
    RED→GREEN: test3→impl3
    ...
  ```
  
  ## İş Akışı
  
  ### 1. Planlama
  
  Codebase'i keşfederken, proje'nin domain glossary'sini kullanın ki test isimleri ve interface vocabulary'si projenin diline uygun olsun, ve dokunduğunuz alandaki ADR'lere saygı gösterin.
  
  Herhangi bir kod yazmadan önce:
  
  - [ ] User ile ne interface değişikliklerinin gerekli olduğunu onaylayın
  - [ ] User ile hangi davranışları test edeceğinizi onaylayın (önceliklendir)
  - [ ] [Deep modules](deep-modules.md) için fırsatları belirleyin (küçük interface, derin implementasyon)
  - [ ] [Testability](interface-design.md) için interface'leri tasarlayın
  - [ ] Test edecek davranışları listeleyin (implementasyon adımlarını değil)
  - [ ] User onayını plana alın
  
  Sorun: "Public interface neye benzemeli? Hangi davranışlar test etmek için en önemli?"
  
  **Her şeyi test edemezsiniz.** User ile tam olarak hangi davranışların en önemli olduğunu onaylayın. Test çabasını kritik yollar ve karmaşık logic'e odaklayın, her olası edge case'e değil.
  
  ### 2. Tracer Bullet
  
  SİSTEM hakkında BİR şeyi doğrulayan BİR test yazın:
  
  ```
  RED:   İlk davranış için test yaz → test fail eder
  GREEN: Geçirmek için minimal kod yaz → test pass eder
  ```
  
  Bu sizin tracer bullet'ınız - yolun end-to-end çalıştığını kanıtlar.
  
  ### 3. İnkremental Loop
  
  Kalan her davranış için:
  
  ```
  RED:   Sonraki test yaz → fail eder
  GREEN: Geçirmek için minimal kod → pass eder
  ```
  
  Kurallar:
  
  - Bir test anda
  - Sadece mevcut testi geçirmek için yeterli kod
  - Gelecek testleri öngörmeyin
  - Testleri observable davranışa odaklı tutun
  
  ### 4. Refactor
  
  Tüm testler pass ettikten sonra, [refactor adaylarına](refactoring.md) bakın:
  
  - [ ] Duplication'ı extract edin
  - [ ] Module'ları derinleştirin (complexity'yi basit interface'lerin arkasına taşıyın)
  - [ ] SOLID ilkelerini doğal yerlere uygulayın
  - [ ] Yeni kodun existing kod hakkında neler ortaya çıkardığını düşünün
  - [ ] Her refactor adımından sonra testleri çalıştırın
  
  **RED iken asla refactor yapmayınız.** Önce GREEN'e ulaşın.
  
  ## Her Döngü İçin Checklist
  
  ```
  [ ] Test davranışı anlatır, implementasyonu değil
  [ ] Test sadece public interface kullanır
  [ ] Test internal refactor'ı survive ederdi
  [ ] Kod bu test için minimal
  [ ] Spekulatif feature eklenmedi
  ```
---

# Test-Driven Development

## Philosophy

**Core principle**: Tests should verify behavior through public interfaces, not implementation details. Code can change entirely; tests shouldn't.

**Good tests** are integration-style: they exercise real code paths through public APIs. They describe _what_ the system does, not _how_ it does it. A good test reads like a specification - "user can checkout with valid cart" tells you exactly what capability exists. These tests survive refactors because they don't care about internal structure.

**Bad tests** are coupled to implementation. They mock internal collaborators, test private methods, or verify through external means (like querying a database directly instead of using the interface). The warning sign: your test breaks when you refactor, but behavior hasn't changed. If you rename an internal function and tests fail, those tests were testing implementation, not behavior.

See [tests.md](tests.md) for examples and [mocking.md](mocking.md) for mocking guidelines.

## Anti-Pattern: Horizontal Slices

**DO NOT write all tests first, then all implementation.** This is "horizontal slicing" - treating RED as "write all tests" and GREEN as "write all code."

This produces **crap tests**:

- Tests written in bulk test _imagined_ behavior, not _actual_ behavior
- You end up testing the _shape_ of things (data structures, function signatures) rather than user-facing behavior
- Tests become insensitive to real changes - they pass when behavior breaks, fail when behavior is fine
- You outrun your headlights, committing to test structure before understanding the implementation

**Correct approach**: Vertical slices via tracer bullets. One test → one implementation → repeat. Each test responds to what you learned from the previous cycle. Because you just wrote the code, you know exactly what behavior matters and how to verify it.

```
WRONG (horizontal):
  RED:   test1, test2, test3, test4, test5
  GREEN: impl1, impl2, impl3, impl4, impl5

RIGHT (vertical):
  RED→GREEN: test1→impl1
  RED→GREEN: test2→impl2
  RED→GREEN: test3→impl3
  ...
```

## Workflow

### 1. Planning

When exploring the codebase, read `CONTEXT.md` (if it exists) so that test names and interface vocabulary match the project's domain language, and respect ADRs in the area you're touching.

Before writing any code:

- [ ] Confirm with user what interface changes are needed
- [ ] Confirm with user which behaviors to test (prioritize)
- [ ] Identify opportunities for deep modules (small interface, deep implementation) — run the `/codebase-design` skill for the vocabulary and the testability checks
- [ ] List the behaviors to test (not implementation steps)
- [ ] Get user approval on the plan

Ask: "What should the public interface look like? Which behaviors are most important to test?"

**You can't test everything.** Confirm with the user exactly which behaviors matter most. Focus testing effort on critical paths and complex logic, not every possible edge case.

### 2. Tracer Bullet

Write ONE test that confirms ONE thing about the system:

```
RED:   Write test for first behavior → test fails
GREEN: Write minimal code to pass → test passes
```

This is your tracer bullet - proves the path works end-to-end.

### 3. Incremental Loop

For each remaining behavior:

```
RED:   Write next test → fails
GREEN: Minimal code to pass → passes
```

Rules:

- One test at a time
- Only enough code to pass current test
- Don't anticipate future tests
- Keep tests focused on observable behavior

### 4. Refactor

After all tests pass, look for [refactor candidates](refactoring.md):

- [ ] Extract duplication
- [ ] Deepen modules (move complexity behind simple interfaces)
- [ ] Apply SOLID principles where natural
- [ ] Consider what new code reveals about existing code
- [ ] Run tests after each refactor step

**Never refactor while RED.** Get to GREEN first.

## Checklist Per Cycle

```
[ ] Test describes behavior, not implementation
[ ] Test uses public interface only
[ ] Test would survive internal refactor
[ ] Code is minimal for this test
[ ] No speculative features added
```
