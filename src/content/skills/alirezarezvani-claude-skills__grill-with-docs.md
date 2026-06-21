---
name: "grill-with-docs"
description_en: "Docs-anchored grilling session — challenges a plan against the project's existing language (CONTEXT.md) and recorded decisions (docs/adr/), and updates those files inline as terminology and decisions crystallise. Use when user wants to stress-test a plan against documented domain language, or mentions \"grill with docs\"."
description_tr: "Dokümantasyon odaklı inceleme oturumu — planı projenin mevcut dil tanımlarına (CONTEXT.md) ve kaydedilen kararlarına (docs/adr/) karşı test eder, terminoloji ve kararlar netleştikçe bu dosyaları inline olarak günceller. Kullanıcı planı dokümante edilen domain diline karşı test etmek istediğinde veya \"docs ile grill et\" dediğinde kullanın."
category: "Document"
repo: "alirezarezvani/claude-skills"
stars: 18642
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/grill-with-docs/SKILL.md"
path: ".gemini/skills/grill-with-docs/SKILL.md"
is_collection: false
body_length: 6458
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Belgeleme ile Sorgula
  
  > [Matt Pocock'ın grill-with-docs](https://github.com/mattpocock/skills/tree/main/skills/engineering/grill-with-docs) projesinden türetilmiştir (MIT, © 2026 Matt Pocock). Matt'in mülakat disiplini + belgeler tarafından çıpalaşan sorgulama kuralları MIT altında aynen korunmuştur. Bu repodaki eklentiler: 3 stdlib doğrulayıcısı (CONTEXT.md linter, ADR scanner, glossary↔code tutarlılık kontrolü), her biri 7+ yetkili kaynağa atıfta bulunan 3 derinlemesine referans, `cs-grill-with-docs` ajanı, `/cs:grill-with-docs` komutu. Bkz. aşağıdaki [Sarmalayıcı eklentiler](#sarmalayıcı-eklentiler).
  
  <what-to-do>
  
  Bu planın her yönü hakkında yoğun bir şekilde beni sorgula, ta ki ortak bir anlayışa ulaşana kadar. Tasarım ağacının her dalını adım adım gez, kararlar arasındaki bağımlılıkları birbir adım adım çöz. Her soru için, önerilen cevabını ver.
  
  Soruları birer birer sor, her soruda devam etmeden önce geribildirim bekle.
  
  Eğer bir soru kod tabanı keşfedilerek cevaplanabiliyorsa, bunun yerine kod tabanını keşfet.
  
  </what-to-do>
  
  <supporting-info>
  
  ## Etki alanı farkındalığı
  
  Kod tabanı keşfi sırasında, mevcut belgeleri de ara:
  
  ### Dosya yapısı
  
  Çoğu repoda tek bir context vardır:
  
  ```
  /
  ├── CONTEXT.md
  ├── docs/
  │   └── adr/
  │       ├── 0001-event-sourced-orders.md
  │       └── 0002-postgres-for-write-model.md
  └── src/
  ```
  
  Kök dizinde bir `CONTEXT-MAP.md` varsa, repoda birden fazla context vardır. Harita, her birinin nerede yaşadığını gösterir:
  
  ```
  /
  ├── CONTEXT-MAP.md
  ├── docs/
  │   └── adr/                          ← sistem genelinde kararlar
  ├── src/
  │   ├── ordering/
  │   │   ├── CONTEXT.md
  │   │   └── docs/adr/                 ← context'e özgü kararlar
  │   └── billing/
  │       ├── CONTEXT.md
  │       └── docs/adr/
  ```
  
  Dosyaları tembel yarat — sadece yazacak birşey olduğunda. Eğer `CONTEXT.md` yoksa, ilk terim çözüldüğünde yarat. Eğer `docs/adr/` yoksa, ilk ADR gerektiğinde yarat.
  
  ## Oturum sırasında
  
  ### Glossary'ye karşı sorgula
  
  Kullanıcı `CONTEXT.md` içindeki mevcut dille çakışan bir terim kullandığında, bunu hemen fark et. "Glossary'niz 'cancellation'u X olarak tanımlar, ancak siz Y anlamına geliyormuş gibi görünüyorsunuz — hangisi doğru?"
  
  ### Belirsiz dili keskinleştir
  
  Kullanıcı belirsiz veya aşırı yüklü terimler kullandığında, kesin bir kanonik terim öner. "Siz 'account' diyorsunuz — Customer mi yoksa User mi demek istiyorsunuz? Bunlar farklı şeyler."
  
  ### Somut senaryoları tartış
  
  Alan ilişkileri tartışılırken, bunları belirli senaryolarla test et. Kenar durumları araştıran ve kullanıcıyı kavramlar arasındaki sınırlar hakkında kesin olmaya zorlayan senaryolar icat et.
  
  ### Kodla çapraz referans
  
  Kullanıcı bir şeyin nasıl çalıştığını söylediğinde, kodun buna uyup uymadığını kontrol et. Çelişki bulursan, bunu ortaya çıkar: "Kodunuz tüm Order'ları iptal eder, ancak siz az önce kısmi iptali mümkün olduğunu söylediniz — hangisi doğru?"
  
  ### CONTEXT.md'yi satır içinde güncelle
  
  Bir terim çözüldüğünde, hemen orada `CONTEXT.md`'yi güncelle. Bunları toplamayın — çıktığında yakala. [CONTEXT-FORMAT.md](./CONTEXT-FORMAT.md) içindeki formatı kullan.
  
  `CONTEXT.md` uygulama ayrıntılarından tamamen arınmış olmalıdır. `CONTEXT.md`'yi bir spec, taslak pad veya uygulama kararları deposu olarak değerlendirme. Sadece bir glossary'dir.
  
  ### ADR'leri tutumlu sun
  
  Yalnızca üçünün hepsi doğru olduğunda ADR oluşturmayı öner:
  
  1. **Tersine çevirmesi zor** — fikrinizi sonra değiştirmenin maliyeti anlamlıdır
  2. **Context olmadan şaşırtıcı** — gelecekteki bir okuyucu "neden bu şekilde yaptılar?" diye merak edecektir
  3. **Gerçek bir ödünleşimin sonucu** — gerçek alternatifler vardı ve belirli nedenlerle birini seçtiniz
  
  Üçünden herhangi biri eksikse, ADR'yi atla. [ADR-FORMAT.md](./ADR-FORMAT.md) içindeki formatı kullan.
  
  </supporting-info>
  
  ## Sarmalayıcı Eklentiler
  
  Aşağıdaki eklentiler Matt'in upstream skill'inin **parçası değildir**. Upstream kurallarını, mülakat döngüsüyle doğal olarak eşleşen belirleyici, stdlib-only doğrulayıcılara operasyonelleştirirler.
  
  ### İş Akışı (sarmalayıcı araçlarla)
  
  1. **Ön kontrol (ilk sorudan önce):**
     - Eğer `CONTEXT.md` varsa `scripts/context_md_linter.py CONTEXT.md` çalıştır — glossary'nin iyi biçimlendirilmiş olduğunu sorgulamadan önce onayla.
     - Eğer `docs/adr/` varsa `scripts/adr_scanner.py docs/adr/` çalıştır — numaralandırma boşluklarını, hatalı biçimlendirilmiş ADR'leri, durum-frontmatter tutarsızlıklarını ortaya çıkar.
     - `scripts/glossary_code_consistency.py --context CONTEXT.md --code src/` çalıştır — tanımlanan ama kullanılmayan terimleri (ölü glossary) ve kod-sadece ortak isimleri işaretler. Bu işaretleri başlangıç sorgulama soruları olarak kullan.
  
  2. **Oturum sırasında (Matt'in kuralları uygulanır):**
     - Tur başına bir soru, derinlik-birinci olarak yürü.
     - Bir terim keskinleştirildiğinde: `CONTEXT.md`'yi hemen düzenle; düzenleme yapısal ise `context_md_linter.py`'i yeniden çalıştır.
     - Bir ADR gerektiğinde: `docs/adr/` altında yaz; numaralandırmayı doğrulamak için `adr_scanner.py`'i yeniden çalıştır.
  
  3. **Kapanış:**
     - Son `glossary_code_consistency.py` çalıştırması hiçbir yeni yetim terimin tanıtılmadığını doğrulamak için.
     - Özetle: eklenen/iyileştirilen terimler, yazılan ADR'ler, tartışılan senaryolar, açık maddeler.
  
  ### Araçlar (stdlib-only)
  
  | Araç | Tek satırlık rol |
  |---|---|
  | `scripts/context_md_linter.py` | `CONTEXT.md`'yi CONTEXT-FORMAT.md yapısına karşı doğrula. Kural başına PASS/WARN/FAIL. |
  | `scripts/adr_scanner.py` | `docs/adr/` içinde yürü, `NNNN-slug.md` deseni, numaralandırma bütünlüğü, gövde tamlığını kontrol et. |
  | `scripts/glossary_code_consistency.py` | `CONTEXT.md` içindeki kalın terimleri kod tabanı kullanımına karşı çapraz referans al. Ölü glossary + kod-sadece ortak isimleri işaretle. |
  
  ### Referanslar (her kuralın arkasında alıntılar)
  
  - [`references/ubiquitous_language.md`](references/ubiquitous_language.md) — neden bir glossary kaynak kontrolde olmalı (Evans, Vernon, Khononov, Wlaschin, Brandolini, Avram & Marinescu, Fowler)
  - [`references/adr_practice.md`](references/adr_practice.md) — ADR ne zaman işine yarar (Nygard, Tyree & Akerman, Zimmermann Y-statements, MADR, ThoughtWorks Radar, adr-tools, Backstage)
  - [`references/context_md_as_artifact.md`](references/context_md_as_artifact.md) — CONTEXT.md yaşayan bir yapı olarak (Khononov dil kayması, Kernighan adlandırma, BoundedContext bliki, Confluent veri sözleşmeleri, Brandolini EventStorming glossary)
  
  ### Yardımcı
  
  - Agent: `cs-grill-with-docs` (bkz. `../../agents/cs-grill-with-docs.md`)
  - Command: `/cs:grill-with-docs` (bkz. `../../commands/cs-grill-with-docs.md`)
  
  ---
  
  **Sürüm:** 1.0.0
  **Türetilmiş:** Matt Pocock'ın grill-with-docs (MIT) + bu repoya ait sarmalayıcı
---

# Grill with Docs

> Derived from [Matt Pocock's grill-with-docs](https://github.com/mattpocock/skills/tree/main/skills/engineering/grill-with-docs) (MIT, © 2026 Matt Pocock). Matt's interview discipline + docs-anchored grilling rules preserved verbatim under MIT. Additions in this repo: 3 stdlib validators (CONTEXT.md linter, ADR scanner, glossary↔code consistency check), 3 in-depth references each citing 7+ authoritative sources, `cs-grill-with-docs` agent, `/cs:grill-with-docs` command. See [Wrapper additions](#wrapper-additions) below.

<what-to-do>

Interview me relentlessly about every aspect of this plan until we reach a shared understanding. Walk down each branch of the design tree, resolving dependencies between decisions one-by-one. For each question, provide your recommended answer.

Ask the questions one at a time, waiting for feedback on each question before continuing.

If a question can be answered by exploring the codebase, explore the codebase instead.

</what-to-do>

<supporting-info>

## Domain awareness

During codebase exploration, also look for existing documentation:

### File structure

Most repos have a single context:

```
/
├── CONTEXT.md
├── docs/
│   └── adr/
│       ├── 0001-event-sourced-orders.md
│       └── 0002-postgres-for-write-model.md
└── src/
```

If a `CONTEXT-MAP.md` exists at the root, the repo has multiple contexts. The map points to where each one lives:

```
/
├── CONTEXT-MAP.md
├── docs/
│   └── adr/                          ← system-wide decisions
├── src/
│   ├── ordering/
│   │   ├── CONTEXT.md
│   │   └── docs/adr/                 ← context-specific decisions
│   └── billing/
│       ├── CONTEXT.md
│       └── docs/adr/
```

Create files lazily — only when you have something to write. If no `CONTEXT.md` exists, create one when the first term is resolved. If no `docs/adr/` exists, create it when the first ADR is needed.

## During the session

### Challenge against the glossary

When the user uses a term that conflicts with the existing language in `CONTEXT.md`, call it out immediately. "Your glossary defines 'cancellation' as X, but you seem to mean Y — which is it?"

### Sharpen fuzzy language

When the user uses vague or overloaded terms, propose a precise canonical term. "You're saying 'account' — do you mean the Customer or the User? Those are different things."

### Discuss concrete scenarios

When domain relationships are being discussed, stress-test them with specific scenarios. Invent scenarios that probe edge cases and force the user to be precise about the boundaries between concepts.

### Cross-reference with code

When the user states how something works, check whether the code agrees. If you find a contradiction, surface it: "Your code cancels entire Orders, but you just said partial cancellation is possible — which is right?"

### Update CONTEXT.md inline

When a term is resolved, update `CONTEXT.md` right there. Don't batch these up — capture them as they happen. Use the format in [CONTEXT-FORMAT.md](./CONTEXT-FORMAT.md).

`CONTEXT.md` should be totally devoid of implementation details. Do not treat `CONTEXT.md` as a spec, a scratch pad, or a repository for implementation decisions. It is a glossary and nothing else.

### Offer ADRs sparingly

Only offer to create an ADR when all three are true:

1. **Hard to reverse** — the cost of changing your mind later is meaningful
2. **Surprising without context** — a future reader will wonder "why did they do it this way?"
3. **The result of a real trade-off** — there were genuine alternatives and you picked one for specific reasons

If any of the three is missing, skip the ADR. Use the format in [ADR-FORMAT.md](./ADR-FORMAT.md).

</supporting-info>

## Wrapper Additions

The additions below are **not** part of Matt's upstream skill. They operationalize the upstream's rules into deterministic, stdlib-only validators that pair naturally with the interview loop.

### Workflow (with wrapper tools)

1. **Pre-flight (before the first question):**
   - Run `scripts/context_md_linter.py CONTEXT.md` if a `CONTEXT.md` exists — confirms the glossary is well-formed before grilling against it.
   - Run `scripts/adr_scanner.py docs/adr/` if `docs/adr/` exists — surfaces numbering gaps, malformed ADRs, status-frontmatter inconsistencies.
   - Run `scripts/glossary_code_consistency.py --context CONTEXT.md --code src/` — flags defined-but-unused terms (dead glossary) and code-only common nouns that may need definitions. Use these flags as opening grill questions.

2. **During the session (Matt's rules apply):**
   - One question per turn, walking depth-first.
   - When a term is sharpened: edit `CONTEXT.md` immediately; re-run `context_md_linter.py` if the edit is structural.
   - When an ADR is warranted: write it under `docs/adr/`; re-run `adr_scanner.py` to confirm numbering.

3. **Closing:**
   - Final `glossary_code_consistency.py` run to confirm no new orphan terms were introduced.
   - Summarize: terms added/refined, ADRs written, scenarios discussed, open items.

### Tools (stdlib-only)

| Tool | One-line role |
|---|---|
| `scripts/context_md_linter.py` | Validate `CONTEXT.md` against the CONTEXT-FORMAT.md structure. PASS/WARN/FAIL per rule. |
| `scripts/adr_scanner.py` | Walk `docs/adr/`, check `NNNN-slug.md` pattern, numbering integrity, body completeness. |
| `scripts/glossary_code_consistency.py` | Cross-reference bold terms in `CONTEXT.md` against codebase usage. Flag dead glossary + code-only common nouns. |

### References (citations behind each rule)

- [`references/ubiquitous_language.md`](references/ubiquitous_language.md) — why a glossary belongs in source control (Evans, Vernon, Khononov, Wlaschin, Brandolini, Avram & Marinescu, Fowler)
- [`references/adr_practice.md`](references/adr_practice.md) — when an ADR earns its keep (Nygard, Tyree & Akerman, Zimmermann Y-statements, MADR, ThoughtWorks Radar, adr-tools, Backstage)
- [`references/context_md_as_artifact.md`](references/context_md_as_artifact.md) — CONTEXT.md as living artifact (Khononov on language drift, Kernighan on naming, BoundedContext bliki, Confluent on data contracts, Brandolini on EventStorming glossary)

### Companion

- Agent: `cs-grill-with-docs` (see `../../agents/cs-grill-with-docs.md`)
- Command: `/cs:grill-with-docs` (see `../../commands/cs-grill-with-docs.md`)

---

**Version:** 1.0.0
**Derived:** Matt Pocock's grill-with-docs (MIT) + this repo's wrapper
