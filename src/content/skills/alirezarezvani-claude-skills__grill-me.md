---
name: "grill-me"
description_en: "Interview the user relentlessly about a plan or design until reaching shared understanding, resolving each branch of the decision tree. Use when user wants to stress-test a plan, get grilled on their design, or mentions \"grill me\"."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18313
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/grill-me/SKILL.md"
path: ".gemini/skills/grill-me/SKILL.md"
is_collection: false
body_length: 2043
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Grill Me
  
  > [Matt Pocock's grill-me](https://github.com/mattpocock/skills/tree/main/skills/productivity/grill-me) projesinden türetilmiştir (MIT). Matt'in mülakatçılık disiplini aynen korunmuştur. Eklentiler: extraction + question + session tools + references + cs-* wrapper (bkz. [references/companion_tooling.md](references/companion_tooling.md)).
  
  Bu planın her yönü hakkında emiksiz sorgula, ta ki ortak bir anlayışa ulaşana kadar. Tasarım ağacının her dalını gez, kararlar arasındaki bağımlılıkları teker teker çöz. Her soru için önerilen cevabını sağla.
  
  Soruları bir seferde bir tanesini sor.
  
  Eğer bir soru codebase'i keşfederek cevaplanabiliyorsa, bunun yerine codebase'i keşfet.
  
  ## Kurallar (korunmuş + genişletilmiş)
  
  1. **Turda bir soru.** Asla birleştirme.
  2. **Her soruda önerilen cevabı sağla.** "Sence ne olmalı?" sorusuna varsayılan olarak dönmek tembelliktir.
  3. **Soru sormadan önce codebase'i keşfet.** Eğer `grep` / `Read` çözüyorsa, önce bunu yap. Bir turdan tasarruf et.
  4. **Ağacı derinliğine gez.** Yeni bir dal açmadan önce dalı bitir.
  5. **Bağımlılıkları takip et.** Eğer B kararı A kararına bağlıysa, A'yı önce sor.
  
  ## İş Akışı
  
  1. Kullanıcı bir plan veya tasarım (ya da yolu) sağlar.
  2. Dalları çıkarmak için `scripts/decision_tree_extractor.py` çalıştır.
  3. Tavsiyeler ile birlikte soru listesi üretmek için `scripts/question_generator.py` çalıştır.
  4. Bir oturum başlat: `scripts/grill_session_tracker.py --action start`.
  5. Ağacı gez, bir seferde bir soru, cevapları oturumda kaydet.
  6. Tüm dallar çözüldüğünde: "ortak anlayışa ulaşıldı" raporu + kilitli kararlar.
  
  ## Çıktı Deseni
  
  Soru turunu başına:
  
  ```
  Q[i]/[total]: [soru]
  Önerilen cevap: [senin kararın + 1 cümlelik gerekçe]
  
  (Veya: Codebase'i keşfettim ve [kanıt] buldum. Doğrulayacak mısın?)
  ```
  
  ## Araçlar
  
  Bkz. [references/companion_tooling.md](references/companion_tooling.md). Araçlar: extractor + generator + tracker. Agent: `cs-grill-master`. Komut: `/cs:grill-me`.
  
  ---
  
  **Sürüm:** 1.0.0
  **Türetildi:** Matt Pocock (MIT) + bu repo'nun wrapper'ı
---

# Grill Me

> Derived from [Matt Pocock's grill-me](https://github.com/mattpocock/skills/tree/main/skills/productivity/grill-me) (MIT). Matt's interview discipline preserved verbatim. Additions: extraction + question + session tools + references + cs-* wrapper (see [references/companion_tooling.md](references/companion_tooling.md)).

Interview me relentlessly about every aspect of this plan until we reach a shared understanding. Walk down each branch of the design tree, resolving dependencies between decisions one-by-one. For each question, provide your recommended answer.

Ask the questions one at a time.

If a question can be answered by exploring the codebase, explore the codebase instead.

## Rules (preserved + amplified)

1. **One question per turn.** Never bundle.
2. **Provide a recommended answer with each question.** Defaulting to "what do you think?" is lazy.
3. **Explore the codebase before asking.** If `grep` / `Read` resolves it, do that first. Saves a turn.
4. **Walk the tree depth-first.** Finish a branch before opening another.
5. **Track dependencies.** If decision B depends on decision A, ask A first.

## Workflow

1. User provides a plan or design (or path to one).
2. Run `scripts/decision_tree_extractor.py` to extract branches.
3. Run `scripts/question_generator.py` to produce the question list with recommendations.
4. Start a session: `scripts/grill_session_tracker.py --action start`.
5. Walk the tree, one question at a time, recording answers in the session.
6. When all branches resolved: report "shared understanding reached" + the locked-in decisions.

## Output Pattern

Per question turn:

```
Q[i]/[total]: [question]
Recommended answer: [your call + 1-sentence rationale]

(Or: I explored the codebase and found [evidence]. Confirm?)
```

## Tooling

See [references/companion_tooling.md](references/companion_tooling.md). Tools: extractor + generator + tracker. Agent: `cs-grill-master`. Command: `/cs:grill-me`.

---

**Version:** 1.0.0
**Derived:** Matt Pocock (MIT) + this repo's wrapper
