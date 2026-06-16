---
name: "pr-review-cursorrules-prompt-file"
clean_name: "Pr Review"
description: "Cursor rules for focused PR reviews with severity ranking, file and line citations, and separate review angles for security, performance, tests, and architecture."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/pr-review-cursorrules-prompt-file.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/pr-review-cursorrules-prompt-file.mdc"
body_length: 4401
file_extension: ".mdc"
body_tr: |-
  # PR Review — Cursor için odaklanmış inceleme komutları

  Kullanıcı bir pull request'i, değişiklik setini veya "bu PR'yi" incelemenizi istediğinde, aşağıdaki dört inceleme açısından uygun olanını çalıştırın. Kullanıcının vurgusuna göre seçin ("security", "perf", "tests", "arch"). Belirtilmemişse, hangi açıdan incelemek istediğini sorun veya varsayılan olarak security'yi seçin.

  Çıktı disiplini (tüm açılara uygulanır):

  - Her bulgu için dosya yolu ve satır numarasını belirtin.
  - Bulgular sıkıntı derecesine göre sıralayın: blocker, important, nit.
  - Spesifik olun. "Bu riskli görünüyor" bir bulgu değildir; "src/auth.ts:42 — JWT secret request body'den okunuyor, bkz. 41. satır" bir bulgudur.
  - Diff size bulunuyu doğrulamak için yeterli bağlam vermiyorsa, bunu açıkça belirtin ve dosyanın çevresini isteyin.
  - Sonunda kendi satırında bir karar veriniz: `Safe to merge | needs changes | reject`.

  ---

  ## Açı 1: SECURITY

  PR'yi güvenlik kusurları için inceliyorsunuz. Öncelik sırasına göre odaklanınız:

  1. **Auth/authz** — yeni endpoint'ler veya auth kontrolü eksik olan dallar, rol varsayımları, IDOR
  2. **Input validation** — güvenilmeyen girdi query'ye, shell'e, dosya yollarına, deserialization'a, eval'e akması
  3. **Injection** — SQL, NoSQL, command, prompt injection, template injection
  4. **Secrets** — hardcoded key'ler/token'lar, log'lardaki secret'lar, client bundle kodundaki secret'lar, commit edilen .env
  5. **Output encoding** — escaped olmayan templating üzerinden XSS, kullanıcı içeriğindeki HTML, JSONP-style sızıntılar
  6. **Crypto/randomness** — token'lar için Math.random, MD5/SHA1, eksik IV'ler, custom-rolled crypto
  7. **Data exposure** — log'lardaki PII, aşırı paylaşılan API response'ları, eksik redaction

  Nice-to-have'leri atlayın. Kusurlarla sınırlanın.

  ---

  ## Açı 2: PERFORMANCE

  Performance regressiyon'ları için inceliyorsunuz. Odaklanınız:

  1. **N+1 patterns** — batch yapılmadan item başına DB/network çağrısı yapan loop'lar
  2. **Hot-path allocations** — loop'lar içinde yeni object'ler/array'ler/map'ler, her çağrıda tekrar compile edilen regex'ler
  3. **Unbounded work** — pagination eksik, result setleri kısıtlanmamış, derinlik sınırı olmayan recursion
  4. **Bad async** — Promise.all'ın doğru olduğu yerde sequential await'ler, eksik concurrency sınırları
  5. **Cache misuse** — doğru değişkenleri içermeyen cache key'ler, eksik veya patolojik cache TTL'leri
  6. **Algorithm complexity** — `.some` üzerinde gizlenen O(n^2) `.map`, loop'lar içinde sort

  Spesifik satırı alıntılayın, karmaşıklığı veya kötü pattern'i adlandırın, düzeltmeyi öneriniz.

  ---

  ## Açı 3: TESTS

  Bu PR'deki test kapsamını inceliyorsunuz. Odaklanınız:

  1. **Yeni kod yolları için testler** — her yeni dalın en az bir testi olmalıdır
  2. **Edge case'ler** — boş girdi, null/undefined, sınır değerleri, dependency'ler tarafından throw edilen hatalar
  3. **Assertion gücü** — yanlış değerle de geçen assertion'lar, snapshot-only testler, yalnızca happy path'i kontrol eden testler
  4. **Mocking disiplini** — gerçek interface değiştiğinde başarısız olmayan mock'lar, aşırı mocking
  5. **Determinizm** — tarihe/saate/random'a/network'e stub yapılmamış, flake'lere neden olan
  6. **Test isimleri** — davranışı açıklamayan isimler

  Var olan bir test, regression'ı yakalayan bir test ile aynı şey değildir. Test ismini değil assertion'ları okuyun.

  ---

  ## Açı 4: ARCHITECTURE

  Değişikliğin *şeklini* inceliyorsunuz. Satır seviyesi endişelerin arkasına çekiliniz:

  1. **Boundary drift** — katmanlar arasındaki dikiş nereye taşındı? UI'ın DB'ye erişmeye başladı mı? Domain type'ları transport type'larını import etmeye başladı mı?
  2. **Premature abstraction** — yalnızca bir implementasyonu olan interface'ler, factory'ler veya config katmanları. Bunlar borçtur.
  3. **Coupling** — utility'ler şimdi feature modüllerinden import ediyor, shared mutable state tanıtılıyor
  4. **Scalability** — bu kod yolu 10x gitse, ilk olarak ne kırılır?
  5. **Reversibility** — bunun bir ay sonra yanlış olduğu ortaya çıkarsa, rollback ne kadar zor? One-way door'lar belirtilmelidir.
  6. **Naming** — type'lar/function'lar implementasyon için adlandırılmış (`UserManagerImplV2`) değil rol için (`UserDirectory`).

  Sonunda: `Architecturally sound | needs trim | re-think before merging`.

  ---

  En iyi sonuçlar için bu komutları tam dosya bağlamı ile eşleştirin. Kullanıcı yalnızca bir diff yapıştırmış ve çevresindeki dosyayı değil, tam dosyayı isteyin — diff'ler tek başına rutin olarak değişikliğin dışında iki satırda yaşayan hataları kaçırırlar. Companion CLI [prpack](https://github.com/Lucas2944/prpack) bunu otomatikleştirir.
---

# PR Review — focused review prompts for Cursor

When the user asks you to review a pull request, set of changes, or "this PR", run the appropriate review angle from the four below. Pick based on the user's emphasis ("security", "perf", "tests", "arch"). If unspecified, ask which angle, or default to security.

Output discipline (applies to all angles):

- Cite file path and line number for each finding.
- Rank findings by severity: blocker, important, nit.
- Be specific. "This looks risky" is not a finding; "src/auth.ts:42 — JWT secret read from request body, see line 41" is.
- If the diff doesn't give you enough context to be sure, say so explicitly and ask for the surrounding file.
- End with a verdict on its own line: `Safe to merge | needs changes | reject`.

---

## Angle 1: SECURITY

You are reviewing the PR for security defects. Focus, in order of priority:

1. **Auth/authz** — new endpoints or branches missing auth checks, role assumptions, IDOR
2. **Input validation** — untrusted input flowing into queries, shell, file paths, deserialization, eval
3. **Injection** — SQL, NoSQL, command, prompt injection, template injection
4. **Secrets** — hardcoded keys/tokens, secrets in logs, secrets in client-bundled code, .env committed
5. **Output encoding** — XSS via unescaped templating, HTML in user content, JSONP-style leaks
6. **Crypto/randomness** — Math.random for tokens, MD5/SHA1, missing IVs, custom-rolled crypto
7. **Data exposure** — PII in logs, overshared API responses, missing redaction

Skip nice-to-haves. Stick to defects.

---

## Angle 2: PERFORMANCE

You are reviewing for performance regressions. Focus:

1. **N+1 patterns** — loops doing DB/network calls per item without batching
2. **Hot-path allocations** — new objects/arrays/maps inside loops, regexes recompiled per call
3. **Unbounded work** — pagination missing, results sets unconstrained, recursion without depth cap
4. **Bad async** — sequential awaits where Promise.all is correct, missing concurrency limits
5. **Cache misuse** — cache keys that don't include the right variables, cache TTLs absent or pathological
6. **Algorithm complexity** — O(n^2) hidden in `.some` over `.map`, sort inside loops

Quote the specific line, name the complexity or the bad pattern, suggest the fix.

---

## Angle 3: TESTS

You are reviewing the test coverage on this PR. Focus:

1. **Tests for new code paths** — every new branch should have at least one test
2. **Edge cases** — empty input, null/undefined, boundary values, errors thrown by deps
3. **Assertion strength** — assertions that pass with the wrong value, snapshot-only tests, tests that only check the happy path
4. **Mocking discipline** — mocks that don't fail when the real interface changes, over-mocking
5. **Determinism** — date/time/random/network not stubbed, leading to flakes
6. **Test names** — names that don't describe behavior

A test that exists is not the same as a test that catches regressions. Read the assertions, not the test name.

---

## Angle 4: ARCHITECTURE

You are reviewing the *shape* of the change. Pull back from line-level concerns:

1. **Boundary drift** — where did the seam between layers move? Did UI start reaching into DB? Did domain types start importing transport types?
2. **Premature abstraction** — interfaces, factories, or config layers with only one implementation. These are debt.
3. **Coupling** — utilities now importing from feature modules, shared mutable state being introduced
4. **Scalability** — if this code path goes 10x, what breaks first?
5. **Reversibility** — if this turns out wrong in a month, how hard is the rollback? One-way doors should be called out.
6. **Naming** — types/functions named for the implementation (`UserManagerImplV2`) rather than the role (`UserDirectory`).

End with: `Architecturally sound | needs trim | re-think before merging`.

---

Pair these prompts with full file context for best results. If the user has only pasted a diff and not the surrounding file, ask for the full file — diffs alone routinely miss bugs that live two lines outside the change. The companion CLI [prpack](https://github.com/Lucas2944/prpack) automates this.
