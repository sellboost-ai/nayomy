---
name: "diagnose"
description_en: "Disciplined diagnosis loop for hard bugs and performance regressions. Reproduce → minimise → hypothesise → instrument → fix → regression-test. Use when user says \"diagnose this\" / \"debug this\", reports a bug, says something is broken/throwing/failing, or describes a performance regression."
description_tr: "Zor hatalar ve performans gerillemeleri için disiplinli bir tanı döngüsü. Yeniden oluştur → küçült → hipotez kur → araçlandır → düzelt → regresyon testi. Kullanıcı \"bunu tanı\" / \"bunu debug et\" dediğinde, bir hata bildirdiğinde, bir şeyin kırık/hata verdiğini söylediğinde veya performans gerilemeleri tanımladığında kullanılır."
category: "Development"
repo: "mattpocock/skills"
stars: 132588
url: "https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/diagnose/SKILL.md"
path: "skills/engineering/diagnose/SKILL.md"
is_collection: false
body_length: 6787
has_scripts: true
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Tanı Koy

  Zor hatalar için bir disiplin. Fazları yalnızca açıkça haklı olduğunda atlayın.

  Kod tabanını keşfederken, ilgili modüllerin net bir zihinsel modelini oluşturmak için projenin alan sözlüğünü kullanın ve dokunduğunuz alandaki ADR'leri kontrol edin.

  ## Faz 1 — Geri Bildirim Döngüsü Oluştur

  **Bu beceridir.** Diğer her şey mekanik. Hata için hızlı, deterministik, aracı tarafından çalıştırılabilir bir geçti/başarısız sinyal varsa, nedeni bulacaksın — biseksiyon, hipotez testi ve enstrümantasyon hepsi bu sinyali tüketiyor. Yoksa, kodlara ne kadar baksan fayda olmaz.

  Burada orantısız çaba harca. **Agresif ol. Yaratıcı ol. Vazgeçmeyi reddet.**

  ### Bir tane inşa etmenin yolları — kabaca bu sırada dene

  1. **Hata bulunan test** — unit, entegrasyon, e2e ne olursa hataya ulaşan seviye.
  2. **Curl / HTTP script** çalışan bir dev sunucusuna karşı.
  3. **CLI çağırma** fixture girdisi ile, stdout'u bilinen-iyi bir snapshot'a karşı diff'le.
  4. **Headless tarayıcı script** (Playwright / Puppeteer) — UI'ı yönlendir, DOM/console/ağa assert'le.
  5. **Yakalanan trace'i replay et.** Gerçek bir ağ isteği / payload / event log'u diske kaydet; bunu kod yolundan izole olarak replay et.
  6. **Throwaway harness.** Sistemi minimal bir alt kümesi ile başlat (bir servis, mock bağımlılıklar) ki hata kod yolunu tek bir function çağrısı ile kullanabilsin.
  7. **Property / fuzz loop.** Eğer hata "bazen yanlış çıktı" ise, 1000 rastgele girdi çalıştır ve başarısız olma modunu ara.
  8. **Biseksiyon harness.** Eğer hata iki bilinen durum arasında ortaya çıktıysa (commit, dataset, versiyon), "durum X'te boot et, kontrol et, tekrarla"yı otomatize et ki `git bisect run` yapabilsin.
  9. **Differential loop.** Aynı girdileri eski-versiyon vs yeni-versiyon (veya iki config) arasında çalıştır ve çıktıları diff'le.
  10. **HITL bash script.** Son çare. Eğer bir insan tıklamalıysa, _onları_ `scripts/hitl-loop.template.sh` ile yönlendir ki loop yine yapılandırılmış kalsın. Yakalanan çıktı sana geri besler.

  Doğru geri bildirim döngüsü inşa et, ve hata %90 tamir edilmiş.

  ### Döngünün kendisi üzerinde yinele

  Döngüyü bir ürün olarak ele al. _Bir_ döngün olduğunda, sor:

  - Daha hızlı yapabilir miyim? (Setup'ı cache'le, ilgisiz init'i atla, test kapsamını darallt.)
  - Sinyali daha keskin yapabilir miyim? (Spesifik semptomu assert'le, "çökmedimi" değil.)
  - Daha deterministik yapabilir miyim? (Zamanı pin'le, RNG'yi seed'le, dosya sistemini izole et, ağı dondur.)

  30 saniyelik hatalı bir döngü, döngüsüz olmaktan biraz daha iyidir. 2 saniyelik deterministik bir döngü hata ayıklama süper gücüdür.

  ### Belirleyici olmayan hatalar

  Hedef temiz bir repro değil ama daha **yüksek bir üreme oranı**. Tetikleyiciyi 100× döngüye tıkla, paralelleştir, stress ekle, zamanlamayı darallt, uyku enjekte et. %50 flake hata hata ayıklanabilir; %1 değil — oran hata ayıklanabilir olana kadar yüksel.

  ### Gerçekten bir döngü inşa edemediğinde

  Dur ve bunu açıkça söyle. Denediğin şeyleri listele. Kullanıcıdan iste: (a) onu reproduse eden ortama erişim, (b) yakalanan bir artifact (HAR dosyası, log dump, core dump, zaman damgası ile ekran kaydı), veya (c) geçici üretim enstrümantasyonu eklemeye izin. Bir döngü olmadan hipotez yapmaya **başlama**.

  Döngüye inanana kadar Faz 2'ye geçme.

  ## Faz 2 — Reproduse Et

  Döngüyü çalıştır. Hatanın ortaya çıkışını izle.

  Onayla:

  - [ ] Döngü **kullanıcının** tanımladığı başarısız modunu üretir — yakında olup başka hata değil. Yanlış hata = yanlış tamir.
  - [ ] Başarısızlık birden fazla çalışma arasında reproduse edilebilir (veya, belirleyici olmayan hatalar için, hata ayıklanabilecek kadar yüksek orana kadar reproduse edilebilir).
  - [ ] Spesifik semptom yakalandı (hata mesajı, yanlış çıktı, yavaş zaman) ki ilerideki fazlar tamiirin onu gerçekten adresle yapıp yapmadığını doğrulayabilsin.

  Hatayı reproduse edene kadar ileri gitme.

  ## Faz 3 — Hipotez Kur

  Herhangi birini test etmeden **3–5 sıralı hipotez** oluştur. Tek hipotez oluşturma ilk plausible fikre ankör yapar.

  Her hipotez **falsifiable** olmalı: onun yaptığı tahmini belirt.

  > Format: "Eğer <X> sebepse, o zaman <Y>'yi değiştirmek hatanın kaybolmasını sağlayacak / <Z>'yi değiştirmek onu daha kötü yapacak."

  Tahmini belirtemezsen, hipotez bir his — onu discard et veya keskinleştir.

  **Sıralı listeyi herhangi birini test etmeden kullanıcıya göster.** Onlar çoğu zaman #3'ü anında yeniden sıralayan domain bilgisi var ("az önce bir değişiklik deploy ettik"), veya zaten rule out ettiği hipotezleri bilirler. Ucuz checkpoint, büyük zaman tasarrufu. Buna engel olma — kullanıcı AFK ise kendi sıralamanla devam et.

  ## Faz 4 — Enstrüman

  Her probe Faz 3'teki spesifik bir tahmini haritalanmalı. **Bir zaman içinde bir değişkeni değiştir.**

  Tool tercih sırası:

  1. **Debugger / REPL inspeksiyonu** eğer ortam destekliyorsa. Bir breakpoint on log'a yenecek.
  2. **Hedeflenen loglar** hipotezleri ayıran sınırlarda.
  3. Asla "her şeyi log'la ve grep'le" yapma.

  **Her debug log'u** benzersiz bir prefix ile tag'le, mesela `[DEBUG-a4f2]`. Temizlik sonunda tek bir grep olur. Tag'siz loglar kalır; tag'li loglar ölür.

  **Perf branch.** Performans regressyonları için, loglar genellikle yanlıştır. Bunun yerine: baseline ölçüm kur (timing harness, `performance.now()`, profiler, query plan), sonra bisect'le. Önce ölç, sonra tamir et.

  ## Faz 5 — Tamir + Regression Testi

  Regression testini tamiirden **önce** yaz — ama yalnızca doğru bir **seam** varsa.

  Doğru seam, testin çağrı sitesinde oluştuğu şekliyle **gerçek hata deseni**ni kullanır. Eğer tek seam çok sığlıysa (bug birden fazla çağrı gerektirirken tek-çağrı testi, hatayı tetikleyen zinciri replicate edememiş unit testi), oradaki regression testi yanlış güven verir.

  **Doğru seam yoksa, bu bulgusu kendisidir.** Not et. Kod tabanı mimarisi hatanın kilitlenmesini engelliyordur. Bunu bir sonraki faza flag'le.

  Doğru seam varsa:

  1. Minimized repro'yu o seam'daki başarısız test'e çevir.
  2. Başarısız olduğunu izle.
  3. Tamiiri uygula.
  4. Geçtiğini izle.
  5. Orijinal (non-minimized) senaryoya karşı Faz 1 geri bildirim döngüsünü yeniden çalıştır.

  ## Faz 6 — Temizlik + Post-Mortem

  Bittiğini beyan etmeden önce gerekli:

  - [ ] Orijinal repro artık reproduse edilmiyor (Faz 1 döngüsünü yeniden çalıştır)
  - [ ] Regression testi geçiyor (veya seam yokluğu belgelenmiş)
  - [ ] Tüm `[DEBUG-...]` enstrümantasyonu kaldırılmış (`grep` prefix'le)
  - [ ] Throwaway prototipleri silmiş (veya açıkça işaretlenmiş debug lokasyonuna taşımış)
  - [ ] Doğru çıkan hipotez commit / PR mesajında belirtilmiş — ki sonraki debugger öğrensin

  **Sonra sor: bu hatayı ne önleyebilirdi?** Eğer cevap mimarideki değişiklikse (iyi test seam yok, karışık çağrı yapanlar, gizli coupling) specifics'lerle `/improve-codebase-architecture` skill'e devret. Tamiir öncesinde değil sonrasında tavsiye yap — başladığın zamandan daha fazla bilgiye sahipsin.
---

# Diagnose

A discipline for hard bugs. Skip phases only when explicitly justified.

When exploring the codebase, use the project's domain glossary to get a clear mental model of the relevant modules, and check ADRs in the area you're touching.

## Phase 1 — Build a feedback loop

**This is the skill.** Everything else is mechanical. If you have a fast, deterministic, agent-runnable pass/fail signal for the bug, you will find the cause — bisection, hypothesis-testing, and instrumentation all just consume that signal. If you don't have one, no amount of staring at code will save you.

Spend disproportionate effort here. **Be aggressive. Be creative. Refuse to give up.**

### Ways to construct one — try them in roughly this order

1. **Failing test** at whatever seam reaches the bug — unit, integration, e2e.
2. **Curl / HTTP script** against a running dev server.
3. **CLI invocation** with a fixture input, diffing stdout against a known-good snapshot.
4. **Headless browser script** (Playwright / Puppeteer) — drives the UI, asserts on DOM/console/network.
5. **Replay a captured trace.** Save a real network request / payload / event log to disk; replay it through the code path in isolation.
6. **Throwaway harness.** Spin up a minimal subset of the system (one service, mocked deps) that exercises the bug code path with a single function call.
7. **Property / fuzz loop.** If the bug is "sometimes wrong output", run 1000 random inputs and look for the failure mode.
8. **Bisection harness.** If the bug appeared between two known states (commit, dataset, version), automate "boot at state X, check, repeat" so you can `git bisect run` it.
9. **Differential loop.** Run the same input through old-version vs new-version (or two configs) and diff outputs.
10. **HITL bash script.** Last resort. If a human must click, drive _them_ with `scripts/hitl-loop.template.sh` so the loop is still structured. Captured output feeds back to you.

Build the right feedback loop, and the bug is 90% fixed.

### Iterate on the loop itself

Treat the loop as a product. Once you have _a_ loop, ask:

- Can I make it faster? (Cache setup, skip unrelated init, narrow the test scope.)
- Can I make the signal sharper? (Assert on the specific symptom, not "didn't crash".)
- Can I make it more deterministic? (Pin time, seed RNG, isolate filesystem, freeze network.)

A 30-second flaky loop is barely better than no loop. A 2-second deterministic loop is a debugging superpower.

### Non-deterministic bugs

The goal is not a clean repro but a **higher reproduction rate**. Loop the trigger 100×, parallelise, add stress, narrow timing windows, inject sleeps. A 50%-flake bug is debuggable; 1% is not — keep raising the rate until it's debuggable.

### When you genuinely cannot build a loop

Stop and say so explicitly. List what you tried. Ask the user for: (a) access to whatever environment reproduces it, (b) a captured artifact (HAR file, log dump, core dump, screen recording with timestamps), or (c) permission to add temporary production instrumentation. Do **not** proceed to hypothesise without a loop.

Do not proceed to Phase 2 until you have a loop you believe in.

## Phase 2 — Reproduce

Run the loop. Watch the bug appear.

Confirm:

- [ ] The loop produces the failure mode the **user** described — not a different failure that happens to be nearby. Wrong bug = wrong fix.
- [ ] The failure is reproducible across multiple runs (or, for non-deterministic bugs, reproducible at a high enough rate to debug against).
- [ ] You have captured the exact symptom (error message, wrong output, slow timing) so later phases can verify the fix actually addresses it.

Do not proceed until you reproduce the bug.

## Phase 3 — Hypothesise

Generate **3–5 ranked hypotheses** before testing any of them. Single-hypothesis generation anchors on the first plausible idea.

Each hypothesis must be **falsifiable**: state the prediction it makes.

> Format: "If <X> is the cause, then <changing Y> will make the bug disappear / <changing Z> will make it worse."

If you cannot state the prediction, the hypothesis is a vibe — discard or sharpen it.

**Show the ranked list to the user before testing.** They often have domain knowledge that re-ranks instantly ("we just deployed a change to #3"), or know hypotheses they've already ruled out. Cheap checkpoint, big time saver. Don't block on it — proceed with your ranking if the user is AFK.

## Phase 4 — Instrument

Each probe must map to a specific prediction from Phase 3. **Change one variable at a time.**

Tool preference:

1. **Debugger / REPL inspection** if the env supports it. One breakpoint beats ten logs.
2. **Targeted logs** at the boundaries that distinguish hypotheses.
3. Never "log everything and grep".

**Tag every debug log** with a unique prefix, e.g. `[DEBUG-a4f2]`. Cleanup at the end becomes a single grep. Untagged logs survive; tagged logs die.

**Perf branch.** For performance regressions, logs are usually wrong. Instead: establish a baseline measurement (timing harness, `performance.now()`, profiler, query plan), then bisect. Measure first, fix second.

## Phase 5 — Fix + regression test

Write the regression test **before the fix** — but only if there is a **correct seam** for it.

A correct seam is one where the test exercises the **real bug pattern** as it occurs at the call site. If the only available seam is too shallow (single-caller test when the bug needs multiple callers, unit test that can't replicate the chain that triggered the bug), a regression test there gives false confidence.

**If no correct seam exists, that itself is the finding.** Note it. The codebase architecture is preventing the bug from being locked down. Flag this for the next phase.

If a correct seam exists:

1. Turn the minimised repro into a failing test at that seam.
2. Watch it fail.
3. Apply the fix.
4. Watch it pass.
5. Re-run the Phase 1 feedback loop against the original (un-minimised) scenario.

## Phase 6 — Cleanup + post-mortem

Required before declaring done:

- [ ] Original repro no longer reproduces (re-run the Phase 1 loop)
- [ ] Regression test passes (or absence of seam is documented)
- [ ] All `[DEBUG-...]` instrumentation removed (`grep` the prefix)
- [ ] Throwaway prototypes deleted (or moved to a clearly-marked debug location)
- [ ] The hypothesis that turned out correct is stated in the commit / PR message — so the next debugger learns

**Then ask: what would have prevented this bug?** If the answer involves architectural change (no good test seam, tangled callers, hidden coupling) hand off to the `/improve-codebase-architecture` skill with the specifics. Make the recommendation **after** the fix is in, not before — you have more information now than when you started.
