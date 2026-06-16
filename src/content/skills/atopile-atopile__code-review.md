---
name: "code-review"
description_en: "LLM-focused code review process for this repo: what to check, how to ground feedback in invariants/tests, and how to verify changes efficiently (including test-report.json)."
category: "Development"
repo: "atopile/atopile"
stars: 3370
url: "https://github.com/atopile/atopile/blob/HEAD/.claude/skills/code-review/SKILL.md"
path: ".claude/skills/code-review/SKILL.md"
is_collection: false
body_length: 7323
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Kod İncelemesi Becerisi

  Bu beceri, bu depo içindeki otomasyonlu ve etkileşimli kod incelemeleri için kanonik rehberdir. LLM inceleyicileri (CI botları ve yerel ajanlar) için yazılmıştır.

  ## Hızlı Başlangıç

  - PR açıklamasını okuyun ve `.github/pull_request_template.md` ile eşleştiğinden emin olun.
  - Diff'i invaryanlar, doğruluk ve performans açısından kritik noktalar odağında gözden geçirin.
  - Komutları yerel olarak çalıştırabileceğiniz durumlarda hedefli doğrulamayı tercih edin:
    - `ato dev test --llm -k <area>` (hızlı filtre)
    - `ato dev compile` (Zig/bindings değiştiyse)
    - `ato dev flags` (davranış ConfigFlags'e bağlıysa)
  - Hata/regresyon özetlerinde HTML yerine `artifacts/test-report.json` tercih edin.

  ## Önceliklendirilecek Konular (Sırayla)

  1) **Doğruluk + invaryanlar**
     - Değiştirilen kodun koruması gereken invaryanları tanımlayın ve bunları uygulayan kodu kontrol edin.
     - Kodda veya testlerde bir invaryant bulamazsanız, bunu "eksik invaryant kapsamı" olarak işaretleyin.

  2) **Performans / ölçeklenebilirlik**
     - Bu dal hız ve bakım kolaylığını önceliklendirir; istemeden oluşan `O(n^2)` geçişleri, tekrarlanan grafik geçişlerini, aşırı ayırmaları veya hot path'lerdeki debug günlüğünü izleyin.
     - Zig/Python sınırı değişiklikleri özellikle hassastır (sahiplik, yaşam döngüsü, deinit).

  3) **Bakım kolaylığı**
     - Küçük, iyi adlandırılmış birimler ve net sınırları tercih edin (derleyici vs grafik vs çözücü vs kütüphane).
     - Repo zaten bu deseni kullanmıyorsa yeni "mini framework" eklemeyin.

  4) **Test kapsamı**
     - Davranış değiştiyse, bir test gerektirin (veya test edilememesi için güçlü bir neden).
     - Modülün yakınına hedefli testler tercih edin; gerekli olmadıkça geniş uçtan uca testlerden kaçının.

  ## Depoya Özgü İnceleme Noktaları

  - **Geliştirici iş akışı + raporlar**: `ato dev test --llm` `artifacts/test-report.json` ve `artifacts/test-report.llm.json` yazarken, isteğe bağlı olarak `artifacts/test-report.html` yazar (bkz. `test/runner/main.py`).
  - **ConfigFlags**: `ato dev flags` aracılığıyla envanter; el ile tutulan docslar yerine kod odaklı keşfi tercih edin.
  - **Grafik/fabll yeniden tasarımı**: gözden geçirdiğiniz alan için `AGENTS.md` ve ilgili `.claude/skills/*` doçlarına bakın.
  - **Çözücü invaryanları**: `src/faebryk/core/solver/README.md` + `src/faebryk/core/solver/symbolic/invariants.py`.

  ---

  ## PR İnceleme Çıktısı Biçimi

  CI inceleme yorumu yazarken, **tam olarak** bu yapıyı ve başka hiçbir şeyi üretin.
  Amaç, bir insanın saniyeler içinde bakabileceği minimal ve taranabilir bir özettir.

  İncelemenin tek bir güncellenmiş yorumda kalması için `gh pr comment --edit-last --create-if-none` kullanın.

  ### Şablon

  ```markdown
  ## <niyetin tek satırlık özeti>

  | Metrik | Puan |
  |--------|------|
  | **Etki** | X/10 |
  | **Test kapsamı** | X/10 |

  <details>
  <summary>🔴 Yüksek önem düzeyindeki sorunlar (N bulundu)</summary>

  ### 1. <kısa başlık>
  <details>
  <file:line — açıklama>
  </details>

  </details>
  ```

  ### Etki Puanlaması Nasıl Yapılır (0–10)

  Etki, bir insanın bu PR'ı manuel olarak gözden geçirmesi ne kadar önemli olduğunu ölçer.
  Düşünün: "bu PR'ı gözden geçirmeyeceğim olsaydı, en kötü ne olabilirdi?"

  | Puan | Anlam | Örnekler |
  |------|-------|----------|
  | 0–1 | No-op, yazım hatası düzeltme, yalnızca yorum, CI konfigürasyonu tweeti | Bir README'deki yazım hatasını düzeltme, versiyon pini yükseltme |
  | 2–3 | Düşük risk, kullanıcılar üzerinde davranışsal etkisi olmayan izole değişiklik | İç değişkeni yeniden adlandırma, günlük satırı ekleme |
  | 4–5 | Normal özellik veya hata düzeltmesi, sınırlı etki alanı | Yeni bir CLI bayrağı ekleme, ayrıştırıcı kenar durumunu düzeltme |
  | 6–7 | Paylaşılan altyapıya dokunma, genel API yüzeyini değiştirme veya birden fazla modülü etkileme | Derleyici geçişini yeniden düzenleme, grafik geçiş mantığını değiştirme |
  | 8–9 | Yüksek risk: API/ABI değişikliği, güvenliğe duyarlı, eşzamanlılık/yaşam döngüsü değişiklikleri, modül sınırları arasında büyük yeniden düzenleme | Zig↔Python sahiplik semantiğini değiştirme, çözücü kısıt yayılımını değiştirme |
  | 10 | Kritik: veri kaybı riski, kimlik doğrulama baypası veya hot path'te sessiz doğruluk regressyonu | Bağlayıcıda güvenlik kontrolünü kaldırma, deinit sırasını değiştirme |

  Emin değilseniz, **yukarı yuvarlayın** — aşırı işaretlemek bir şeyi kaçırmaktan daha ucuzdur.

  ### Test Kapsamı Puanlaması Nasıl Yapılır (0–10)

  Test kapsamı, değiştirilen davranışın mevcut veya yeni testler tarafından ne kadar iyi alıştırıldığını ölçer.
  Hem doğrudan test kapsamını HEM DE değiştirilen kodun geçişsel olarak test edilen bir hot path'te oturması durumunu göz önünde bulundurun.

  | Puan | Anlam | Örnekler |
  |------|-------|----------|
  | 0–1 | Hiçbir test bu kod yolunu doğrudan veya geçişsel olarak dokunmaz | Hiçbir test eklenmemiş yeni modül |
  | 2–3 | Bazı geçişsel kapsamlar ancak değiştirilen davranış için doğrudan testler yoktur | Test edilen koddan çağrılan yardımcı işlev, ancak belirli yeni dal alıştırılmamıştır |
  | 4–5 | Kısmi kapsamı: bazı durumlar test edilmiş, diğerleri değil | Yeni işlevin mutlu yolu testi vardır ancak kenar durum veya hata yolu testleri yoktur |
  | 6–7 | İyi kapsamı: çoğu dal alıştırılmıştır, veya değişiklik çok sayıda entegrasyon testinin geçtiği bir çok hot path'tedir | Grafik geçiş işlevini değiştirme (her derleme testi bunu alıştırır) |
  | 8–9 | Güçlü kapsamı: adanmış testler artı değiştirilen davranış için entegrasyon kapsamı | Adanmış testleri olan yeni çözücü kuralı VE mevcut uçtan uca derlemelerde çalışır |
  | 10 | Kapsamlı veya önemsiz derecede güvenli: değişiklik tamamen mekanikse, veya her dal test edilmişse | Değişkeni yeniden adlandırma (önemsiz derecede güvenli), veya %100 dal kapsamına sahip yeni işlev |

  Davranış değiştiği halde test eklenmemiş veya güncellenmediyse, geçişsel kapsamadan bağımsız olarak puan ≤5 olmalıdır.

  ### Yüksek Önem Düzeyinde Saymak Ne İçerir

  Yalnızca bu kategorilerdeki sorunları işaretleyin — diğer her şey PR yorumu için gürültüdür:

  - **Hatalar**: mantık hataları, kenar durumu, null/None referansı, use-after-free, yanlış dönüş değeri, yarış durumu
  - **Performans regressyonları**: O(n²) mümkünse O(n), hot loop'larda gereksiz ayırmalar, tekrarlanan grafik geçişleri, önceki kodun sahip olduğu önbelleği eksik
  - **API/ABI uyumluluğu kırmaları**: genel sembolü kaldırma veya yeniden adlandırma, aşağı akış kodunun bağlı olduğu işlev imzasını değiştirme, serileştirme biçimini göç olmadan değiştirme
  - **Kullanılabilirlik regressyonları**: mevcut bir iş akışını kırma, bir özelliği yeterlendirme olmadan kaldırma, varsayılan davranışı sessizce değiştirme
  - **Anlaşılması zor kod hakkında eksik doçlar**: değiştirilen kod açık değilse (karmaşık algoritma, ince invaryant, hileli yaşam döngüsü yönetimi) ve hiçbir açıklayan yorumu yoksa, bunu işaretleyin — ancak yalnızca gerçekten kafa karıştırıcı kod için, kendi kendini açıklayan değişiklikler için değil

  Sıfır sorun bulunursa, detaylar bloğunun içinde "Hiçbiri" yazın. Stil nitleri veya nice-to-have'lerle doldurmayın.

  ### Kurallar

  - Özet satırı ≤120 karakter olmalı ve PR'ın amacını/niyetini açıklamalıdır.
  - Her yüksek önem düzeyindeki sorun spesifik bir `file:line` referansı olmalı ve eylem alınabilir olmalıdır.
  - Stil nitleri, nice-to-have'leri veya düşük önem düzeyindeki önerileri PR yorumuna EKLEMEYIN.
  - Bütün yorumu mümkün olduğunca kısa tutun. Kısa olmak bir özelliktir.

  ---

  ## Etkileşimli İnceleme (CI Olmayan)

  Etkileşimli olarak gözden geçirirken (CI'da değil), daha konuşkan olabilirsiniz, ancak yine de her önemsiz olmayan iddianın temelini diff veya bir repo yoluna dayandırın (dosya + sembolü açıkça belirtin).

  Geri bildirimi şu şekilde ayırın:
  - **Düzeltilmesi gereken** (doğruluk/güvenlik/regresyon riskleri)
  - **Düzeltilmesi gereken** (bakım kolaylığı/perf iyileştirmeleri)
  - **Hoş olabilir** (stil/ergonomi)

  Eylem alınabilir önerileri tercih edin (ne değiştirecek + neden + nerede).
  Emin değilseniz, somut bir soru sorun ve belirsiz koda işaret edin.
---

# Code Review Skill

This skill is the canonical guidance for automated and interactive code reviews in this repo. It is written for LLM reviewers (CI bots and local agents).

## Quick Start

- Read the PR description and ensure it matches `.github/pull_request_template.md`.
- Review the diff focusing on invariants, correctness, and performance-sensitive hotspots.
- If you can run commands locally, prefer targeted verification:
  - `ato dev test --llm -k <area>` (fast filter)
  - `ato dev compile` (if Zig/bindings changed)
  - `ato dev flags` (if behavior depends on ConfigFlags)
- When summarizing failures/regressions, prefer `artifacts/test-report.json` over HTML.

## What to Prioritize (In Order)

1) **Correctness + invariants**
   - Identify the invariants the changed code is supposed to preserve and check the code that enforces them.
   - If you can't find an invariant in-code or in tests, flag it as "missing invariant coverage".

2) **Performance / scalability**
   - This branch prioritizes speed and maintainability; watch for accidental `O(n^2)` walks, repeated graph traversals, excessive allocations, or debug logging in hot paths.
   - Zig/Python boundary changes are especially sensitive (ownership, lifetimes, deinit).

3) **Maintainability**
   - Prefer small, well-named units and clear boundaries (compiler vs graph vs solver vs library).
   - Avoid adding new "mini frameworks" unless the repo already uses that pattern.

4) **Test coverage**
   - If behavior changed, require a test (or a strong reason it can't be tested).
   - Prefer targeted tests near the module; avoid broad end-to-end tests unless necessary.

## Repo-Specific Review Anchors

- **Dev workflow + reports**: `ato dev test --llm` writes `artifacts/test-report.json` and `artifacts/test-report.llm.json`, and optionally `artifacts/test-report.html` (see `test/runner/main.py`).
- **ConfigFlags**: inventory via `ato dev flags`; prefer code-driven discovery over hand-maintained docs.
- **Graph/fabll redesign**: see `AGENTS.md` and the relevant `.claude/skills/*` docs for the area you're reviewing.
- **Solver invariants**: `src/faebryk/core/solver/README.md` + `src/faebryk/core/solver/symbolic/invariants.py`.

---

## PR Review Output Format

When writing a CI review comment, produce **exactly** this structure and nothing else.
The goal is a minimal, scannable summary a human can glance at in seconds.

Use `gh pr comment --edit-last --create-if-none` so the review stays in a single updated comment.

### Template

```markdown
## <one-line summary of intent>

| Metric | Score |
|--------|-------|
| **Impact** | X/10 |
| **Test coverage** | X/10 |

<details>
<summary>🔴 High-severity issues (N found)</summary>

### 1. <short title>
<details>
<file:line — description>
</details>

</details>
```

### How to Score Impact (0–10)

Impact measures how important it is for a human to manually review this PR.
Think: "if I skip reviewing this, what's the worst that could happen?"

| Score | Meaning | Examples |
|-------|---------|---------|
| 0–1 | No-op, typo fix, comment-only, CI config tweak | Fixing a typo in a README, bumping a version pin |
| 2–3 | Low-risk, isolated change with no behavioral effect on users | Renaming an internal variable, adding a log line |
| 4–5 | Normal feature or bugfix, limited blast radius | Adding a new CLI flag, fixing a parser edge case |
| 6–7 | Touches shared infrastructure, changes public API surface, or affects multiple modules | Refactoring a compiler pass, changing graph traversal logic |
| 8–9 | High-risk: breaking API/ABI change, security-sensitive, concurrency/lifetime changes, large refactor across module boundaries | Changing Zig↔Python ownership semantics, modifying solver constraint propagation |
| 10 | Critical: data loss risk, auth bypass, or silent correctness regression in a hot path | Removing a safety check in the linker, changing deinit order |

When in doubt, round **up** — it's cheaper to over-flag than to miss something.

### How to Score Test Coverage (0–10)

Test coverage measures how well the changed behavior is exercised by existing or new tests.
Consider both direct test coverage AND whether the changed code sits in a hot path that is transitively tested.

| Score | Meaning | Examples |
|-------|---------|---------|
| 0–1 | No tests touch this code path, directly or transitively | Brand-new module with no tests added |
| 2–3 | Some transitive coverage but no direct tests for the changed behavior | Helper function called from tested code, but the specific new branch isn't exercised |
| 4–5 | Partial coverage: some cases tested, others not | New function has a happy-path test but no edge-case or error-path tests |
| 6–7 | Good coverage: most branches exercised, or the change is in a very hot path that many integration tests traverse | Modifying a graph traversal function that every build test exercises |
| 8–9 | Strong coverage: direct unit tests plus integration coverage for the changed behavior | New solver rule with dedicated tests AND it runs in existing end-to-end builds |
| 10 | Exhaustive or trivially safe: change is purely mechanical, or every branch is tested | Renaming a variable (trivially safe), or new function with 100% branch coverage |

If behavior changed but no test was added or updated, the score should be ≤5 regardless of transitive coverage.

### What Counts as High-Severity

Only flag issues in these categories — everything else is noise for the PR comment:

- **Bugs**: logic errors, off-by-one, null/None dereference, use-after-free, wrong return value, race condition
- **Performance regressions**: O(n²) where O(n) is possible, unnecessary allocations in hot loops, repeated graph traversals, missing caching where prior code had it
- **API/ABI compatibility breaks**: removing or renaming a public symbol, changing a function signature that downstream code depends on, altering serialization format without migration
- **Usability regressions**: breaking an existing workflow, removing a feature without deprecation, changing default behavior silently
- **Missing docs on hard-to-understand code**: if the changed code is non-obvious (complex algorithm, subtle invariant, tricky lifetime management) and has no explaining comment, flag it — but only for genuinely confusing code, not for self-explanatory changes

If zero issues are found, write "None" inside the details block. Do NOT pad with style nits or nice-to-haves.

### Rules

- The summary line must be ≤120 chars and describe the PR's purpose/intent.
- Each high-severity issue must reference a specific `file:line` and be actionable.
- Do NOT include style nits, nice-to-haves, or low-severity suggestions in the PR comment.
- Keep the entire comment as short as possible. Brevity is a feature.

---

## Interactive Review (Non-CI)

When reviewing interactively (not in CI), you can be more conversational, but still ground every non-trivial claim in the diff or a repo path (be explicit about file + symbol).

Separate feedback into:
- **Must-fix** (correctness/security/regression risks)
- **Should-fix** (maintainability/perf improvements)
- **Nice-to-have** (style/ergonomics)

Prefer actionable suggestions (what to change + why + where).
If you're uncertain, ask a concrete question and point to the ambiguous code.
