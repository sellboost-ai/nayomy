---
name: "grill-with-docs"
description_en: "Grilling session that challenges your plan against the existing domain model, sharpens terminology, and updates documentation (CONTEXT.md, ADRs) inline as decisions crystallise. Use when user wants to stress-test a plan against their project's language and documented decisions."
description_tr: "Mevcut domain model'inize karşı planınızı test eden, terminolojiyi keskinleştiren ve kararlar netleştikçe dokumentasyonu (CONTEXT.md, ADRs) anında güncelleyen grilling seansı. Planınızı projenizin dili ve belgelenmiş kararlarına karşı stress-test etmek istediğinizde kullanın."
category: "Document"
repo: "mattpocock/skills"
stars: 132588
url: "https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/grill-with-docs/SKILL.md"
path: "skills/engineering/grill-with-docs/SKILL.md"
is_collection: false
body_length: 3175
has_scripts: false
has_references: false
has_examples: false
related_files: ["ADR-FORMAT.md", "CONTEXT-FORMAT.md"]
body_tr: |-
  <what-to-do>

  Bu planın her yönü hakkında beni ısrarla sorgulamaya devam et, ta ki ortak bir anlayışa ulaşana kadar. Tasarım ağacının her dalını aşağıya doğru yürü, kararlar arasındaki bağımlılıkları tek tek çöz. Her soru için önerilen cevabını sağla.

  Soruları tek tek sor, her soruyla ilgili geri bildirim aldıktan sonra devam et.

  Bir soru kod tabanını keşfederek yanıtlanabiliyorsa, bunun yerine kod tabanını keşfet.

  </what-to-do>

  <supporting-info>

  ## Alan bilinciliği

  Kod tabanını keşfederken, mevcut belgeleri de ara:

  ### Dosya yapısı

  Çoğu repo'nun tek bir konteksti vardır:

  ```
  /
  ├── CONTEXT.md
  ├── docs/
  │   └── adr/
  │       ├── 0001-event-sourced-orders.md
  │       └── 0002-postgres-for-write-model.md
  └── src/
  ```

  Kök dizinde `CONTEXT-MAP.md` varsa, repo'nun birden fazla konteksti vardır. Harita, her birinin nerede olduğunu gösterir:

  ```
  /
  ├── CONTEXT-MAP.md
  ├── docs/
  │   └── adr/                          ← sistem çapında kararlar
  ├── src/
  │   ├── ordering/
  │   │   ├── CONTEXT.md
  │   │   └── docs/adr/                 ← kontekste özgü kararlar
  │   └── billing/
  │       ├── CONTEXT.md
  │       └── docs/adr/
  ```

  Dosyaları geç oluştur — yalnızca yazacak bir şeyiniz olduğunda. `CONTEXT.md` yoksa, ilk terim çözüldüğünde oluştur. `docs/adr/` yoksa, ilk ADR'ye ihtiyaç duyulduğunda oluştur.

  ## Oturum sırasında

  ### Sözlüğe karşı sorgulanması

  Kullanıcı `CONTEXT.md`'deki mevcut dilisle çatışan bir terim kullandığında, bunu hemen belirt. "Sözlüğünüz 'cancellation'ı X olarak tanımlıyor, ama sen Y demek gibi görünüyorsun — hangisi?"

  ### Belirsiz dili keskinleştir

  Kullanıcı belirsiz veya aşırı yüklenmiş terimler kullandığında, kesin bir kanonik terim öner. "Sen 'account' diyorsun — Customer mı yoksa User mı demek istiyorsun? Bunlar farklı şeyler."

  ### Somut senaryoları tartış

  Alan ilişkileri tartışılırken, belirli senaryolarla stres testini yaparak zorluk çıkar. Alan kavramları arasındaki sınırları açık hale getirmek için kenar durumları inceleyen senaryolar oluştur.

  ### Kod ile çapraz referans

  Kullanıcı bir şeyin nasıl çalıştığını söylediğinde, kodun bunu onayladığını kontrol et. Bir çelişki bulursan, bunu göster: "Kodun tüm Order'ları iptal ediyor, ama sen kısmi iptali mümkün olduğunu söyledin — hangisi doğru?"

  ### CONTEXT.md'i yerinde güncelle

  Bir terim çözüldüğünde, `CONTEXT.md`'i hemen orada güncelle. Bunları toplamayın — çözüldükçe yakala. [CONTEXT-FORMAT.md](./CONTEXT-FORMAT.md) dosyasındaki formatı kullan.

  `CONTEXT.md` uygulama detaylarından tamamen arınmış olmalıdır. `CONTEXT.md`'i bir spec, bir taslak defteri ya da uygulama kararları deposu olarak görme. Bu sadece bir sözlüktür ve başka bir şey değildir.

  ### ADR'leri nadiren sunma

  Yalnızca bu üçü de doğruyken ADR oluşturmayı öner:

  1. **Tersine çevrilmesi zor** — daha sonra fikrinizi değiştirmenin maliyeti anlamlıdır
  2. **Bağlam olmadan şaşırtıcı** — gelecekteki bir okuyucu "neden bunu bu şekilde yaptılar?" diye merak edecektir
  3. **Gerçek bir dengelenme sonucu** — gerçek alternatifler vardı ve belirli nedenlerle birini seçtin

  Üçünden biri eksikse, ADR'yi atla. [ADR-FORMAT.md](./ADR-FORMAT.md) dosyasındaki formatı kullan.

  </supporting-info>
---

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
