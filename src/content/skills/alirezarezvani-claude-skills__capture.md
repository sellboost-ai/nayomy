---
name: "capture"
description_en: "Captures and organizes chaotic brain dumps into a structured, actionable system with zero information loss. Use this skill whenever the user says 'capture this', 'brain dump', 'let me dump some ideas', 'I've got a bunch of thoughts', 'here's everything on my mind', 'idea dump', 'let me get this out of my head', 'I need to organize my thoughts', 'here's what I'm thinking', or any variation where so"
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/capture/SKILL.md"
path: ".gemini/skills/capture/SKILL.md"
is_collection: false
body_length: 9911
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Capture — Beyin Boşaltma Düzenleyicisi

  Yapılandırılmamış karışık düşünce, görev ve fikirlerin akışını sıfır bilgi kaybı ile temiz dört bölümlü eylem sistemi haline dönüştüren hızlı-aksiyona-geçit becerisi.

  ## Çağırma Tetikleri

  **Açık ifadeler** (bunlardan herhangi biri):
  - "beyin boşaltma"
  - "bunu kaydet"
  - "biraz fikir boşaltayım"
  - "bir sürü düşüncem var"
  - "aklımdaki her şey burada"
  - "fikir dökümü"
  - "bunu kafamdan çıkartayım"
  - "düşüncelerimi organize etmem gerekiyor"
  - "işte ne düşünüyorum"

  **Örtülü sinyaller** (ifade yok, ama niyet belli):
  - Kullanıcı uzun yapılandırılmamış karışık fikirler, görevler, planlar yapıştırır veya dikte eder
  - Bir mesajda organize edici çerçeve olmaksızın birden çok ilgisiz düşünce
  - 3+ ilgisiz konuyu kapsayan madde işaretli metin duvarı

  Örtülü bir tetik tespit ettiğinde, beceriyi çalıştırın. Önce "bunu organize etmemi ister misin?" diye sormayın — boşaltma kendisi TALEPtir.

  ## İşletim İlkeleri (Beş Tanenin Tamamı Her Zaman Geçerli)

  1. **Her şeyi yakala.** Sıfır kayıp. Önemsiz öğeler içeri girer; kullanıcı sonra ayıklar. Bir şey "önemsiz görünür" diye sessizce bırakmayın.
  2. **Sesi koru.** Kullanıcı "AI ile bir şeyler yapıl kuş" dediyse, bunu "Yenilikçi AI tabanlı çözümleri keşfedin" olarak yeniden ifade etmeyin. Enerjiyi ve casual tonu koru. `references/voice_preservation.md` adresine bakın somut anti-desenleri için.
  3. **Çıktı karmaşıklığını girdiye eşle.** 5 görevlik boşaltma dört detaylı bölüme zorlanmaz. `references/complexity_matching.md` ve aşağıdaki Sıkıştırılmış Çıktı Deseni'ne bakın.
  4. **Belirsizlik hakkında dürüst ol.** Bir şeyin ne anlama geldiğinden emin değilseniz, işaretle. Sessizce tahmin etmeyin.
  5. **Onay olmadan aksiyon yok.** ÖNEMLİ eylem yalnızca organizasyonun kendisidir. Section 4'teki her teklif kullanıcının açık seçimi beklemelidir.

  ## Sıkıştır-Beni Mid-Organizasyon Açıklayıcısı

  Capture tasarımı gereği hızlı-aksiyona-geçittir. **Ön alım yok.** Boşaltma yeterlidir — hemen organize etmeye başlayın.

  Sıkıştır-beni disiplini **tek bir mid-organizasyon açıklayıcı sorusu** olarak uygulanır, **yalnızca** boşaltmadaki bir öğe gerçekten *görev* ve *proje* arasında belirsiz olduğunda VE yanlış sınıflandırma çıktıyı anlamlı şekilde değiştireceği zaman sorulur:

  > **Hızlı açıklama — boşaltmadaki bir öğe her iki yöne de gidebilir. [X] tek adımlı bir görev mi yoksa çok adımlı bir proje mi?**
  >
  > *Neden soruyorum:* Sınırdaki bir öğede yanlış tahmin edersem ya bir projeyi görev olarak gömübilirim ya da bir projeyi yapısı gerekmeyen bir projeye şişirebilirim. Boşaltma başına bir soru bunu önler.

  **Durdurma koşulu:** Boşaltma başına maksimum 1 açıklayıcı soru. Cevaptan sonra (veya açıklama gerekmiyorsa), dört (veya sıkıştırılmış) bölümü teslim edin.

  Boşaltma belirsizse, açıklayıcıyı tamamen atla.

  **Anti-desen (bunu yapmayın):** başında 3 açıklayıcı soru sormak. Bu boşaltma-ve-organize akışını kırar ve capture'ı kullanışlı kılar.

  ## Bölüm 1: Projeler & Fikirler

  Doğal kümeleme varsa ilgili öğeleri temalı projeler halinde grup yaın. Bu bölüm ayrıca şunları tutar:
  - Bağımsız yaratıcı kıvılcımlar
  - Yarı oluşmuş konseptler
  - "Ya da" düşünceler
  - Gömülü kararlar (`Karar: X veya Y`) ve açık sorular (`S: ...`) — ayrı üst düzey kategoriye çıkarılmaz, ilgili projenin İÇİNDE tutulur

  **Proje başına biçim:**

  ```
  ### {Kullanıcının sesiyle proje adı}

  - {bileşen / alt-fikir}
  - {bileşen}
  - S: {bu projenin cevaplanması gereken açık soru}
  - Karar: {bu projenin gerektirdiği karar}
  ```

  Proje adı için kullanıcının sözcüklerini kullanın. Kullanıcı "ferretler için ai dating uygulaması" yazdıysa, bunu "AI Destekli Evcil Hayvan Yardımcı Platformu" olarak yeniden adlandırmayın.

  ## Bölüm 2: Görevler

  Düz, taranabilir, aksiyona yönelik. İçerir:
  - Açık todo'lar
  - `Karar: ...` olarak çerçevelenmiş kararlar
  - `Çöz: ...` olarak çerçevelenmiş açık sorular

  Bir görev Section 1'deki bir projeye aitse, bağlamak için sonuna `[Proje: X]` ekleyin — ama projenin bağlamını tekrarlamayın.

  **Biçim:**

  ```
  - {görev emir formda}  [Proje: X ilgiliyse]
  - Karar: {karar}  [Proje: X ilgiliyse]
  - Çöz: {açık soru}
  - ...
  ```

  ## Bölüm 3: Bağlantılar

  Becerinin değerini kazandığı yer — ve **uydurma yasaklanmıştır**.

  **İş akışı:**

  1. **Çalışma alanını envanter al** — Boşaltma anahtar sözcükleriyle eşleşen dosya adı desenleri için Glob, içerik eşleşmeleri için Grep, üst düzey dizin yapısını oku. Bunu belirleyici şekilde yapmak için `scripts/workspace_inventory.py` kullanın.
  2. **Boşaltma öğelerini mevcut içerikle eşle** — dökülen öğelerle ilgili dosyalar / klasörler, belgelerdeki önceki düşünceler, çakışan ilerlemedeki projeler.
  3. **Boşaltma içindeki bağımlılıkları yüzeyle** — birbirini etkileyen öğeler, temalar, sıralama sonuçları.
  4. **Erişilemezlik konusunda dürüst ol** — çalışma alanını inceleyemiyorsanız (dosya sistemi yok, MCP bağlı değil), açıkça söyleyin. Makul görünen bağlantıları uydurmayın.

  **Sert kural:** ASLA bağlantı uydurmayın. Yalnızca Glob/Grep/Okuma ile gerçekten bulduğunuz olanları yüzeyle. Gerçek bağlantı yoksa:

  > **Bağlantılar:** Bağlantı bulunamadı — çalışma alanı temiz.

  Çalışma alanı erişilemez ise:

  > **Bağlantılar:** Buradan erişilebilir çalışma alanı yok. Claude Code'dan çalıştırıyorsanız veya eklenen dosyaları olan bir projeniz varsa, bunu doldurabilirim. Bu çalışmanın nerede yaşadığını paylaşmak ister misiniz?

  Bağlam başına algılama taktikler kataloğu için `references/workspace_detection.md` adresine bakın.

  ## Bölüm 4: Nasıl Yardımcı Olabilirim

  **Soyut olasılıklar değil, somut teklifler.** Her teklif ne üretileceğini VE nereye gideceğini belirtir.

  | ✅ Doğru desen | ❌ Anti-desen |
  |---|---|
  | "Consensus MCP entegrasyonu desenleri araştırabilirim ve 3 seçenek verebilirim. Çıktı: `docs/consensus-options.md`." | "Entegrasyon yaklaşımlarına bakmanız iyi olabilir." |
  | "Q3 başlatma planını 1-sayfalık olarak hazırlayabilirim. Çıktı: sohbet yanıtı, sonra `docs/q3-launch.md` dosyalanması isterse." | "Belki Q3 planlaması hakkında düşün." |
  | "Mevcut desenden `src/users/` ile yeni auth modülünü iskele çekebilirim. Çıktı: `src/auth/` içinde 4 dosya." | "Kimlik doğrulama seçeneklerini keşfedebiliriz." |

  Yönerge sorusuyla bitirin:

  > **Bunlardan hangisine girişmeli?**

  ## Sıkıştırılmış Çıktı Deseni

  Boşaltma **5 veya daha az öğeye** ve öğeler **ilgisiz** ise (doğal kümeleme yok), 4 bölüm biçimini bırakın ve sıkıştırılmışı kullanın:

  ```
  ## Ne duydum

  - {öğe}
  - {öğe}
  - {öğe}
  - ...

  ## Nasıl yardımcı olabilirim

  - {somut teklif ne + nerede ile}
  - {somut teklif ne + nerede ile}

  Hangisine girişmeli?
  ```

  Tetik `complexity_estimator.py` tavsiyesi VEYA hiçbir küme olmadığında sizin yargınızdır. Her biçimin ne zaman uygulandığını gösteren örnekler için `references/complexity_matching.md` adresine bakın.

  ## Çalışma Alanı Algılama Stratejisi

  | Bağlam | Algılama yöntemi |
  |---|---|
  | Claude Code CLI | Boşaltma anahtar sözcükleriyle eşleşen dosyalar için Glob; içerik eşleşmeleri için Grep; üst düzey yapıyı okuyun. `scripts/workspace_inventory.py` kullanın. |
  | Proje ile Claude.ai | Tematik çakışma için proje bilgi dosyalarını kontrol edin. Dosya başlıklarını listeleyin; anahtar sözcük ile eşleşmeleri yüzeyle. |
  | Bağlı araçlar (Notion, Drive, vb.) | MCP mevcutsa MCP aracılığıyla arayın. |
  | Erişilebilir çalışma alanı yok | Sınırlamayı açıkça belirtin; kullanıcıya kurulumu sorun; UYDURMAYÍN. |

  ## Onay Kapısı

  Dört (veya sıkıştırılmış) bölüm teslim edildikten sonra:

  - **Kullanıcının açık seçimini bekleyin** başka bir şey yapmadan.
  - Kullanıcı spesifik bir teklif seçmeden "git" derse: onur verin, ama %100 emin olmadığınız öğeleri açıkça not edin ki düzeltelim.
  - Organizasyon kendisi tek otomatik eylemdir. Bölüm 4'teki her teklif yeşil ışığa ihtiyaç duyar.

  ## Hata Yönetimi

  | Durum | Davranış |
  |---|---|
  | Çalışma alanı erişilemez | Bunu belirtin; Section 3'ü atlayın veya "erişilebilir çalışma alanı yok" + kurulum hakkında sorun |
  | Boşaltma çok kısa (3-5 öğe) | Sıkıştırılmış çıktı kullanın; 4 bölümü zorlama |
  | Öğeler oldukça belirsiz | Çıktıda işaretle, 1 açıklayıcı sor (veya açıklayıcıyı atla ve belirsizliği teslimatta yüzeyle) |
  | Boşaltma hassas bilgi içeriyor | Kabul edin ama kullanıcı alıntıya gerek duymadan organizasyon isterse verbatim geri yazmayın |
  | Boşaltmada çakışan öğeler | Çakışmayı Section 1 veya 3'te açıkça yüzeyle (`Çakışma: X, A diyor, Y, B diyor`) |
  | Kullanıcı onay öncesinde "git" derse | Onur verin, ama emin olmadığınız öğeleri açıkça not edin |

  ## Araçlandırma

  | Komut Dosyası | Rol |
  |---|---|
  | `scripts/workspace_inventory.py` | Section 3 için Glob+Grep yardımcısı. `python workspace_inventory.py --root . --keywords "k1,k2"` anahtar sözcük + klasör yapısı ile eşleşmeleri döndürür. |
  | `scripts/dump_classifier.py` | Her boşaltma satırını regex ile `task` / `decision` / `question` / `idea` / `project-component` olarak sınıflandırır. Buluşsal — yargınızla geçersiz kılın. |
  | `scripts/complexity_estimator.py` | Öğeleri sayar, kümeleme sinyalini algılar, `format=full` veya `format=compressed` önerir. |

  ## Referanslar

  - `references/workspace_detection.md` — bağlam spesifik algılama taktikleri (CLI / web / MCP / erişilemez)
  - `references/voice_preservation.md` — şirket söylemesi anti-desenleri somut örnekler ile
  - `references/complexity_matching.md` — sıkıştırılmış vs tam çıktı, çalışan örnekler

  ## Reddedilecek Anti-Desenler

  - Gerçekten Glob/Grep doğrulanan olmayan çalışma alanı bağlantılarını uydurmak
  - "Önemsiz" olarak gösterilen öğeleri bırakmak — her şeyi yakala, kullanıcı ayıkla
  - Kullanıcının casual dilini şirket diliymiş gibi söylemek
  - Giriş küçük olduğunda 4 bölüm yapısını zorlama (5 basit görev buna ihtiyaç duymaz)
  - Section 4 tekliflerinde onay olmadan hareket etme
  - Kararları/soruları ayrı üst düzey kategoriye bölmek yerine ilgili proje içine gömme
  - Belirsiz Section 4 teklifleri ("düşünmeyi isteyebilirsiniz…")
  - Başında 3+ açıklayıcı soru sorma (hızlı-aksiyona-geçişi kırar)

  ---

  **Sürüm:** 1.0.0
  **Kaynak spek:** [`megaprompts/05-capture-megaprompt.md`](../../../../megaprompts/05-capture-megaprompt.md)
  **Derleme deseni:** Path B (doğrudan dönüştürme). Spec ile uygulama arasında kayma çıkarsa `/cs:grill-with-docs` ile yeniden sıkıştırın.
---

# Capture — Brain-Dump Organizer

A fast-to-action skill for transforming unstructured streams of mixed thoughts, tasks, and ideas into a clean four-section actionable system with zero information loss.

## Invocation Triggers

**Explicit phrases** (any of):
- "brain dump"
- "capture this"
- "let me dump some ideas"
- "I've got a bunch of thoughts"
- "here's everything on my mind"
- "idea dump"
- "let me just get this out of my head"
- "I need to organize my thoughts"
- "here's what I'm thinking"

**Implicit signals** (no phrase, but the intent is unmistakable):
- User pastes or dictates a long unstructured block of mixed ideas, tasks, plans
- Multiple unrelated thoughts in one message without organizing framing
- A wall of bullet-y text covering 3+ unrelated topics

When you detect an implicit trigger, run the skill. Do NOT ask "do you want me to organize this?" first — the dump itself IS the request.

## Operating Principles (All Five Apply Always)

1. **Capture everything.** Zero loss. Trivial items go in; the user prunes later. Never silently drop something because it "seemed unimportant".
2. **Preserve voice.** If the user said "build something crazy with AI", do NOT restate as "Explore innovative AI-driven solutions." Keep the energy and the casual register. See `references/voice_preservation.md` for concrete anti-patterns.
3. **Match output complexity to input.** A 5-task dump does NOT get forced into 4 elaborate sections. See `references/complexity_matching.md` and the Compressed Output Pattern below.
4. **Be honest about ambiguity.** If you're unsure what something means, flag it. Don't guess silently.
5. **No action without approval.** The ONLY immediate action is the organization itself. Every offer in Section 4 waits for the user's explicit pick.

## Grill-Me Mid-Organization Clarifier

Capture is fast-to-action by design. **No upfront intake.** The dump is enough — start organizing immediately.

The grill-me discipline applies as a **single mid-organization clarifying question**, asked **only when** one item in the dump is genuinely ambiguous between *task* and *project*, AND the misclassification would meaningfully change the output:

> **Quick clarification — one item in your dump could go either way. Is [X] a one-shot task or a multi-step project?**
>
> *Why I'm asking:* If I guess wrong on a borderline item I either bury a project as a task or inflate a task into a project that doesn't need the structure. One question per dump prevents that.

**Stop condition:** Max 1 clarifying question per dump. After the answer (or if no clarification was needed), deliver the four (or compressed) sections.

If the dump is unambiguous, skip the clarifier entirely.

**Anti-pattern (do not do this):** asking 3 clarifying questions up front. That breaks the dump-and-organize flow that makes capture useful.

## Section 1: Projects & Ideas

Cluster related items into themed projects when natural clustering exists. This section also holds:
- Standalone creative sparks
- Half-formed concepts
- "What if" thoughts
- Embedded decisions (`Decide: X or Y`) and open questions (`Q: ...`) — kept WITHIN the relevant project, NOT extracted into a separate top-level category

**Format per project:**

```
### {Project name in user's voice}

- {component / sub-idea}
- {component}
- Q: {open question this project needs answered}
- Decide: {decision this project requires}
```

Use the user's words for the project name. If the user wrote "ai dating app for ferrets", do NOT rename it to "AI-Powered Pet Companion Platform".

## Section 2: Tasks

Flat, scannable, action-oriented. Includes:
- Explicit todos
- Decisions framed as `Decide: ...`
- Open questions framed as `Resolve: ...`

If a task belongs to a project from Section 1, append `[Project: X]` to link it — but don't repeat the project's context.

**Format:**

```
- {task in imperative voice}  [Project: X if related]
- Decide: {decision}  [Project: X if related]
- Resolve: {open question}
- ...
```

## Section 3: Connections

This is where the skill earns its keep — and where **fabrication is forbidden**.

**Workflow:**

1. **Inventory the workspace** — Glob for filename patterns matching dump keywords, Grep for content matches, read the top-level directory structure. Use `scripts/workspace_inventory.py` to do this deterministically.
2. **Match dump items to existing content** — files / folders relating to dumped items, prior thinking in documents, in-progress projects with overlap.
3. **Surface dependencies within the dump** — items that affect each other, themes, ordering implications.
4. **Be honest about inaccessibility** — if you can't inspect the workspace (no filesystem available, MCP not connected), say so explicitly. Do NOT make up plausible-sounding connections.

**Hard rule:** NEVER fabricate connections. Only surface ones actually found by Glob/Grep/Read. If no real connections exist:

> **Connections:** No connections found — workspace inventory clean.

If the workspace is inaccessible:

> **Connections:** No workspace accessible from here. If you're running this from Claude Code or have a project with files attached, I can fill this in. Want to share where this work lives?

See `references/workspace_detection.md` for the per-context detection-tactic catalog.

## Section 4: How I Can Help

**Concrete offers, not abstract possibilities.** Every offer specifies what would be produced AND where it would go.

| ✅ Right pattern | ❌ Anti-pattern |
|---|---|
| "I can research Consensus MCP integration patterns and give you 3 options. Output: `docs/consensus-options.md`." | "You might want to look into integration approaches." |
| "I can draft the Q3 launch plan as a 1-pager. Output: chat reply, then `docs/q3-launch.md` if you want it filed." | "Maybe think about Q3 planning." |
| "I can scaffold the new auth module with the existing pattern from `src/users/`. Output: 4 files in `src/auth/`." | "We could explore auth options." |

End with the directive question:

> **Which of these should I tackle?**

## Compressed Output Pattern

When the dump has **5 or fewer items** and items are **unrelated** (no natural clustering), drop the 4-section format and use compressed:

```
## What I heard

- {item}
- {item}
- {item}
- ...

## How I can help

- {concrete offer with what + where}
- {concrete offer with what + where}

Which should I tackle?
```

The trigger is the `complexity_estimator.py` recommendation OR your judgment when no clusters exist. See `references/complexity_matching.md` for worked examples of when each format applies.

## Workspace Detection Strategy

| Context | Detection method |
|---|---|
| Claude Code CLI | Glob for files matching dump keywords; Grep for content matches; read top-level structure. Use `scripts/workspace_inventory.py`. |
| Claude.ai with project | Check project knowledge files for thematic overlap. List file titles; surface matches by keyword. |
| Connected tools (Notion, Drive, etc.) | Search via MCP if available. |
| No accessible workspace | State the limitation explicitly; ask user about their setup; do NOT fabricate. |

## Approval Gate

After the four (or compressed) sections are delivered:

- **Wait for the user's explicit pick** before doing anything else.
- If the user says "go" without picking a specific offer: honor it, but explicitly note any items you weren't 100% sure about so they can correct.
- The organization itself is the only auto-action. Every Section 4 offer requires green light.

## Error Handling

| Situation | Behavior |
|---|---|
| Workspace inaccessible | State this; skip Section 3 or surface "no workspace accessible" + ask about setup |
| Dump is very short (3-5 items) | Use compressed output; don't force 4 sections |
| Items are highly ambiguous | Flag in output, ask up to 1 clarifier (or skip clarifier and surface ambiguity in delivery) |
| Dump contains sensitive info | Acknowledge but don't echo verbatim if user asks for organization without quoting |
| Conflicting items in the dump | Surface the conflict in Section 1 or 3 explicitly (`Conflict: X says A, Y says B`) |
| User says "go" before approval | Honor it, but explicitly note items you weren't sure about |

## Tooling

| Script | Role |
|---|---|
| `scripts/workspace_inventory.py` | Glob+Grep helper for Section 3. `python workspace_inventory.py --root . --keywords "k1,k2"` returns matches by keyword + folder structure. |
| `scripts/dump_classifier.py` | Regex-classifies each dump line into `task` / `decision` / `question` / `idea` / `project-component`. Heuristic — override with judgment. |
| `scripts/complexity_estimator.py` | Counts items, detects clustering signal, recommends `format=full` or `format=compressed`. |

## References

- `references/workspace_detection.md` — context-specific detection tactics (CLI / web / MCP / inaccessible)
- `references/voice_preservation.md` — corporate-speak anti-patterns with concrete examples
- `references/complexity_matching.md` — compressed vs full output, worked examples

## Anti-Patterns To Reject

- Fabricating workspace connections that weren't actually Glob/Grep-verified
- Dropping items deemed "trivial" — capture everything, let the user prune
- Corporate-ifying the user's casual language
- Forcing 4-section structure when input is small (5 simple tasks doesn't need it)
- Acting on Section-4 offers immediately without approval
- Splitting decisions/questions into a separate top-level category instead of embedding them in the relevant project
- Vague Section-4 offers ("you might want to consider…")
- Asking 3+ clarifying questions up front (breaks fast-to-action)

---

**Version:** 1.0.0
**Source spec:** [`megaprompts/05-capture-megaprompt.md`](../../../../megaprompts/05-capture-megaprompt.md)
**Build pattern:** Path B (direct conversion). Re-grill with `/cs:grill-with-docs` if drift between spec and implementation surfaces.
