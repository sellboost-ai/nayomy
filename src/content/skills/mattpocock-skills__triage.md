---
name: "triage"
description_en: "Move issues and external PRs through a state machine of triage roles — categorise, verify, grill if needed, and write agent-ready briefs."
description_tr: "Triage rollerine dayalı bir state machine ile sorunları yönetin. Kullanıcı yeni issue oluşturmak, issue'ları triajlamak, gelen hataları veya feature isteklerini incelemek, issue'ları AFK agent için hazırlamak veya issue workflow'unu yönetmek istediğinde kullanın."
category: "Development"
repo: "mattpocock/skills"
stars: 140637
url: "https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/triage/SKILL.md"
path: "skills/engineering/triage/SKILL.md"
is_collection: false
body_length: 6309
has_scripts: false
has_references: false
has_examples: false
related_files: ["AGENT-BRIEF.md", "OUT-OF-SCOPE.md"]
body_tr: |-
  # Ön Inceleme (Triage)
  
  Proje sorun takip sistemindeki sorunları küçük bir durum makinesi aracılığıyla ön inceleme rolleri içinde hareket ettirin.
  
  Ön inceleme sırasında sorun takip sistemine gönderilen her yorum veya sorun **mutlaka** şu uyarı ile başlamalıdır:
  
  ```
  > *Bu, ön inceleme sırasında yapay zeka tarafından oluşturulmuştur.*
  ```
  
  ## Referans dokümanlar
  
  - [AGENT-BRIEF.md](https://github.com/mattpocock/skills/blob/HEAD/AGENT-BRIEF.md) — dayanıklı agent özeti yazma
  - [OUT-OF-SCOPE.md](https://github.com/mattpocock/skills/blob/HEAD/OUT-OF-SCOPE.md) — `.out-of-scope/` bilgi tabanının nasıl çalıştığı
  
  ## Roller
  
  İki **kategori** rolü:
  
  - `bug` — bir şey bozuk
  - `enhancement` — yeni özellik veya iyileştirme
  
  Beş **durum** rolü:
  
  - `needs-triage` — bakıcı değerlendirmesi yapması gerekiyor
  - `needs-info` — bildirici daha fazla bilgi için bekleniyor
  - `ready-for-agent` — tam belirtilmiş, AFK agent için hazır
  - `ready-for-human` — insan uygulaması gerekiyor
  - `wontfix` — harekete geçilmeyecek
  
  Her ön inceleme yapılan sorun tam olarak bir kategori rolü ve bir durum rolüne sahip olmalıdır. Durum rolleri çakışırsa, bunu işaretleyin ve başka bir şey yapmadan önce bakıcıya sorun.
  
  Bunlar kanonik rol adlarıdır — sorun takip sisteminde kullanılan gerçek etiket dizeleri farklı olabilir. Eşleme size sağlanmış olmalıdır - `/setup-matt-pocock-skills` komutunu çalıştırın, değilse.
  
  Durum geçişleri: etiketlenmemiş bir sorun normalde önce `needs-triage` konumuna gider; oradan `needs-info`, `ready-for-agent`, `ready-for-human` veya `wontfix` konumlarına hareket eder. `needs-info` bildirici yanıt verdikten sonra `needs-triage` konumuna döner. Bakıcı herhangi bir zamanda geçersiz kılabilir — alışılmadık görünen geçişleri işaretleyin ve devam etmeden önce sorun.
  
  ## Çağırma
  
  Bakıcı `/triage` komutunu çağırır ve doğal dilde ne istediğini açıklar. İsteği yorumlayın ve harekete geçin. Örnekler:
  
  - "Dikkatimi gerektiren herhangi bir şeyi göster"
  - "Gelin #42'ye bakalım"
  - "#42'yi ready-for-agent konumuna taşı"
  - "Agentların alması için hazır olan nedir?"
  
  ## Dikkat gerektirenleri göster
  
  Sorun takip sistemini sorgulayın ve üç kategoriye en eski sırayla sunun:
  
  1. **Etiketlenmemiş** — hiç ön inceleme yapılmamış.
  2. **`needs-triage`** — değerlendirme devam ediyor.
  3. **`needs-info` ve son ön inceleme notlarından sonra bildirici aktivitesi olan** — yeniden değerlendirilmesi gerekiyor.
  
  Sayımları ve her sorun için bir satırlık özeti gösterin. Bakıcının seçmesini sağlayın.
  
  ## Belirli bir sorunu ön inceleme
  
  1. **Bağlamı toplayın.** Tam sorunun tamamını okuyun (gövde, yorumlar, etiketler, bildirici, tarihler). Çözülen soruları tekrar sormamak için önceki ön inceleme notlarını ayrıştırın. Projenin alan sözlüğünü kullanarak kod tabanını keşfedin, alanda bulunan ADR'leri göz önünde bulundurun. `.out-of-scope/*.md` dosyalarını okuyun ve bu soruna benzeyen önceki reddetmeleri ortaya çıkarın.
  
  2. **Tavsiye edin.** Bakıcıya kategori ve durum tavsiyenizi, akıl yürütme ile birlikte ve soruna uygun kısa bir kod tabanı özeti sağlayın. Yön için bekleyin.
  
  3. **Yeniden oluşturun (yalnızca hatalar).** Herhangi bir sorgulamadan önce, yeniden oluşturmayı deneyin: bildirici adımlarını okuyun, ilgili kodu takip edin, testleri veya komutları çalıştırın. Olanları bildirin — başarılı yeniden oluşturma kod yolu ile, başarısız yeniden oluşturma, veya yetersiz ayrıntı (güçlü `needs-info` sinyali). Doğrulanmış yeniden oluşturma çok daha güçlü bir agent özeti yapar.
  
  4. **Detaylı inceleme (gerekirse).** Sorunun ayrıntılandırılması gerekiyorsa, `/grill-with-docs` oturumu çalıştırın.
  
  5. **Sonucu uygulayın:**
     - `ready-for-agent` — agent özeti yorumu gönder ([AGENT-BRIEF.md](https://github.com/mattpocock/skills/blob/HEAD/AGENT-BRIEF.md)).
     - `ready-for-human` — agent özeti ile aynı yapı, ancak neden devredilemiyor olduğunu not et (yargı çağrıları, dış erişim, tasarım kararları, manuel test).
     - `needs-info` — ön inceleme notları gönder (şablon aşağıda).
     - `wontfix` (hata) — nezaket içinde açıklama, sonra kapat.
     - `wontfix` (iyileştirme) — `.out-of-scope/` dizinine yaz, bir yorumdan ona bağlantı ver, sonra kapat ([OUT-OF-SCOPE.md](https://github.com/mattpocock/skills/blob/HEAD/OUT-OF-SCOPE.md)).
     - `needs-triage` — rolü uygula. Kısmi ilerleme varsa opsiyonel yorum.
  
  ## Hızlı durum geçersiz kılma
  
  Bakıcı "#42'yi ready-for-agent konumuna taşı" derse, ona güvenin ve rolü doğrudan uygulayın. Ne yapacağınızı onaylayın (rol değişiklikleri, yorum, kapat), sonra harekete geçin. Detaylı incelemesini atlayın. Detaylı inceleme oturumu olmadan `ready-for-agent` konumuna taşınırsa, agent özeti yazmak isteyip istemediklerini sorun.
  
  ## Needs-info şablonu
  
  ```markdown
  ## Ön İnceleme Notları
  
  **Şu ana kadar öğrendiklerimiz:**
  
  - nokta 1
  - nokta 2
  
  **Sizden hala ihtiyacımız olan (@bildirici):**
  
  - soru 1
  - soru 2
  ```
  
  Detaylı inceleme sırasında çözülen her şeyi "şu ana kadar öğrendiklerimiz" altında toplayın, böylece çalışma kaybolmaz. Sorular spesifik ve işlem yapılabilir olmalıdır, "lütfen daha fazla bilgi sağla" gibi değildir.
  
  ## Önceki oturumu devam ettirme
  
  Sorunda önceki ön inceleme notları varsa, onları okuyun, bildirici'nin bekleyen sorulardan herhangi birine cevap verip vermediğini kontrol edin ve devam etmeden önce güncellenmiş bir resim sunun. Çözülen soruları tekrar sormayın.
---

# Triage

Move issues on the project issue tracker through a small state machine of triage roles.

If this repo treats external pull requests as a request surface (see the issue-tracker config), triage covers them too: **a PR is an issue with attached code** — same roles, same states, same machine, with a few deltas marked "for a PR" below. Resolve a bare `#42` to an issue or PR per the tracker config.

Every comment or issue posted to the issue tracker during triage **must** start with this disclaimer:

```
> *This was generated by AI during triage.*
```

## Reference docs

- [AGENT-BRIEF.md](https://github.com/mattpocock/skills/blob/HEAD/AGENT-BRIEF.md) — how to write durable agent briefs
- [OUT-OF-SCOPE.md](https://github.com/mattpocock/skills/blob/HEAD/OUT-OF-SCOPE.md) — how the `.out-of-scope/` knowledge base works

## Roles

Two **category** roles:

- `bug` — something is broken
- `enhancement` — new feature or improvement

Five **state** roles:

- `needs-triage` — maintainer needs to evaluate
- `needs-info` — waiting on reporter for more information
- `ready-for-agent` — fully specified, ready for an AFK agent
- `ready-for-human` — needs human implementation
- `wontfix` — will not be actioned

For a PR, the same states read against the attached code: `ready-for-agent` means a brief is attached and an agent should take the next step on the diff; `ready-for-human` means it's ready for a human to merge.

Every triaged issue should carry exactly one category role and one state role. If state roles conflict, flag it and ask the maintainer before doing anything else.

These are canonical role names — the actual label strings used in the issue tracker may differ. The mapping should have been provided to you - run `/setup-matt-pocock-skills` if not.

State transitions: an unlabeled issue normally goes to `needs-triage` first; from there it moves to `needs-info`, `ready-for-agent`, `ready-for-human`, or `wontfix`. `needs-info` returns to `needs-triage` once the reporter replies. The maintainer can override at any time — flag transitions that look unusual and ask before proceeding.

## Invocation

The maintainer invokes `/triage` and describes what they want in natural language. Interpret the request and act. Examples:

- "Show me anything that needs my attention"
- "Let's look at #42" (issue or PR)
- "Move #42 to ready-for-agent"
- "What's ready for agents to pick up?"

## Show what needs attention

Query the issue tracker and present three buckets, oldest first:

1. **Unlabeled** — never triaged.
2. **`needs-triage`** — evaluation in progress.
3. **`needs-info` with reporter activity since the last triage notes** — needs re-evaluation.

When PRs are in scope, include external PRs in these buckets and tag each line `[PR]` or `[issue]`. Discovery surfaces only *external* PRs (the tracker config defines who counts as external) — a collaborator's in-flight PR is not triage work. This filter is discovery-only; an explicitly named PR is always triaged regardless of author.

Show counts and a one-line summary per item. Let the maintainer pick.

## Triage a specific issue or PR

1. **Gather context.** Read the full issue or PR (body, comments, labels, author, dates; for a PR, the diff too). Parse any prior triage notes so you don't re-ask resolved questions. Explore the codebase using the project's domain glossary, respecting ADRs in the area. Run two checks against the codebase: (a) **redundancy** — search for an existing implementation of the requested behavior by domain concept (not just the request's wording), and report where you looked. If found, it's an already-implemented `wontfix` (step 5). (b) **prior rejection** — read `.out-of-scope/*.md` and surface any that resembles this request.

2. **Recommend.** Tell the maintainer your category and state recommendation with reasoning, plus a brief codebase summary relevant to the request — including whether it's already implemented. Wait for direction.

3. **Verify the claim.** Before any grilling, check that the claim holds up. For a bug, reproduce it from the reporter's steps. For a PR, confirm the diff does what it claims — check it out, run the relevant tests or commands. Report what happened: confirmed (with code path), failed, or insufficient detail (a strong `needs-info` signal). A confirmed verification makes a much stronger agent brief.

4. **Grill (if needed).** If the request needs fleshing out, run the `/grilling` and `/domain-modeling` skills together — grill it into shape one question at a time, sharpening domain terms and updating `CONTEXT.md`/ADRs inline as decisions land.

5. **Apply the outcome:**
   - `ready-for-agent` — post an agent brief comment ([AGENT-BRIEF.md](https://github.com/mattpocock/skills/blob/HEAD/AGENT-BRIEF.md)).
   - `ready-for-human` — same structure as an agent brief, but note why it can't be delegated (judgment calls, external access, design decisions, manual testing).
   - `needs-info` — post triage notes (template below).
   - `wontfix` — close, with the comment depending on *why*:
     - **Already implemented** — the change already exists in the codebase. Point to where it lives; do **not** write to `.out-of-scope/` (that KB is for *rejected* requests, not built ones).
     - **Rejected (bug)** — polite explanation, then close.
     - **Rejected (enhancement)** — write to `.out-of-scope/`, link to it from a comment, then close ([OUT-OF-SCOPE.md](https://github.com/mattpocock/skills/blob/HEAD/OUT-OF-SCOPE.md)).
   - `needs-triage` — apply the role. Optional comment if there's partial progress.

## Quick state override

If the maintainer says "move #42 to ready-for-agent", trust them and apply the role directly. Confirm what you're about to do (role changes, comment, close), then act. Skip grilling. If moving to `ready-for-agent` without a grilling session, ask whether they want to write an agent brief.

## Needs-info template

```markdown
## Triage Notes

**What we've established so far:**

- point 1
- point 2

**What we still need from you (@reporter):**

- question 1
- question 2
```

Capture everything resolved during grilling under "established so far" so the work isn't lost. Questions must be specific and actionable, not "please provide more info".

## Resuming a previous session

If prior triage notes exist on the issue or PR, read them, check whether the reporter has answered any outstanding questions, and present an updated picture before continuing. Don't re-ask resolved questions.
