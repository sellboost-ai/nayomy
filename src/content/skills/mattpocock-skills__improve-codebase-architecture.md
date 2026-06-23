---
name: "improve-codebase-architecture"
description_en: "Scan a codebase for deepening opportunities, present them as a visual HTML report, then grill through whichever one you pick."
description_tr: "CONTEXT.md'deki domain language ve docs/adr/ içindeki kararlardan yararlanarak kodbase'de derinleştirme fırsatlarını bulun. Mimarisini geliştirmek, refaktoring fırsatlarını keşfetmek, sıkı bağlı modülleri birleştirmek veya kodbase'i daha test edilebilir ve AI-navigable hale getirmek istediğinizde kullanın."
category: "Design"
repo: "mattpocock/skills"
stars: 140637
url: "https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/improve-codebase-architecture/SKILL.md"
path: "skills/engineering/improve-codebase-architecture/SKILL.md"
is_collection: false
body_length: 5167
has_scripts: false
has_references: false
has_examples: false
related_files: ["HTML-REPORT.md"]
body_tr: |-
  # Kod Tabanı Mimarisini İyileştir
  
  Mimari friksiyon yüzeye çıkar ve **derinleştirme fırsatları** öner — sığ modülleri derin modüllere dönüştüren refaktorlar. Amaç, test edilebilirlik ve AI-navigasyonudur.
  
  ## Sözlük
  
  Bu terimleri her öneride tam olarak kullan. Tutarlı dil önemlidir — "component," "service," "API" veya "boundary" gibi başka terimlere kaymayın. Tam tanımlar [LANGUAGE.md](https://github.com/mattpocock/skills/blob/HEAD/LANGUAGE.md) içindedir.
  
  - **Modül** — bir arayüzü ve uygulaması olan herhangi bir şey (function, class, package, slice).
  - **Arayüz** — modülü kullanmak için bir çağıranın bilmesi gereken her şey: types, invariants, error modes, ordering, config. Sadece type signature değil.
  - **Uygulama** — içerideki kod.
  - **Derinlik** — arayüzde leverage: az bir arayüzün arkasında çok davranış. **Derin** = yüksek leverage. **Sığ** = arayüz uygulamaya neredeyse eşit derecede karmaşık.
  - **Seam** — bir arayüzün yaşadığı yer; yerinde düzenleme yapmadan davranış değiştirilebilecek bir yer. (Bunu kullan, "boundary" değil.)
  - **Adapter** — bir seam'de bir arayüzü tatmin eden somut bir şey.
  - **Leverage** — çağıranların derinlikten elde ettikleri şey.
  - **Lokality** — bakıcıların derinlikten elde ettikleri şey: değişiklik, hatalar, bilgi bir yerde toplanmış.
  
  Temel prensipler ([LANGUAGE.md](https://github.com/mattpocock/skills/blob/HEAD/LANGUAGE.md) içinde tam listeyi gör):
  
  - **Silme testi**: modülü silmeyi hayal et. Eğer karmaşıklık ortadan kalkarsa, pass-through'tu. Eğer karmaşıklık N çağıranı arasında yeniden ortaya çıkarsa, değerini kanıtlıyordu.
  - **Arayüz test yüzeyidir.**
  - **Bir adapter = varsayımsal seam. İki adapter = gerçek seam.**
  
  Bu beceri projenin domain modelinden _bilgi alır_. Domain dili iyi seamlere adlar verir; ADR'ler bu becerinin yeniden tartışmaması gereken kararları kaydeder.
  
  ## Süreç
  
  ### 1. Keşfet
  
  Önce projenin domain sözlüğünü ve dokunduğun alandaki ADR'leri oku.
  
  Sonra `subagent_type=Explore` ile Agent toolunu kullan ve kod tabanında yürü. Katı heuristikleri takip etme — organik olarak keşfet ve friksiyon yaşadığın yerleri not et:
  
  - Bir kavramı anlamak hangi yerlerde birçok küçük modül arasında zıplama gerektiriyor?
  - Modüller **sığ** olan yerleri nerede — arayüz uygulamaya neredeyse eşit derecede karmaşık?
  - Pure functionlar sadece test edilebilirlik için nerede çıkarılmış ama gerçek hatalar nasıl çağrıldıklarında gizlenmiş (yoksa **lokality**)?
  - Sıkı bağlı modüller seamleri boyunca nerede sızıyor?
  - Kod tabanının hangi parçaları test edilmemiş veya mevcut arayüzleri aracılığıyla test edilmesi zor?
  
  Sığ olduğundan şüphelendiğin herhangi bir şeye **silme testini** uygula: silmek karmaşıklığı konsantre eder mi, yoksa sadece taşır mı? Bir "evet, konsantre eder" istediğin sinyaldir.
  
  ### 2. Adayları HTML rapor olarak sun
  
  İşletim sistemi geçici dizinine kendini içeren bir HTML dosyası yaz, böylece hiçbir şey repo'ya inmez. Geçici dizini `$TMPDIR` den çöz, `%TEMP%` (Windows'ta) ile geri dön, ve `<tmpdir>/architecture-review-<timestamp>.html` ye yaz, böylece her çalıştırma yeni bir dosya alır. Kullanıcı için aç — Linux'ta `xdg-open <path>`, macOS'ta `open <path>`, Windows'ta `start <path>` — ve mutlak yolu söyle.
  
  Rapor layout ve styling için **Tailwind CDN aracılığıyla** ve bir grafik/akış/dizi güvenilir bir şekilde yapıyı ilettiğinde diyagramlar için **Mermaid CDN aracılığıyla** kullanır. Mermaid'i el yapımı CSS/SVG görselleriyle karıştır — ilişkiler grafik şeklinde olduğunda Mermaid'i (call graphs, dependencies, sequences) ve daha çok editoryal bir şey istediğinde el yapımı divs/SVG'yi (mass diagrams, cross-sections, collapse animations) kullan. Her adayın bir **before/after görselleştirmesi** vardır. Görsel ol.
  
  Her aday için, öncekiyle aynı şablon ama bir kart olarak render edilmiş:
  
  - **Dosyalar** — hangi dosyalar/modüller ilgili
  - **Problem** — mevcut mimarinin neden friksiyon yarattığı
  - **Çözüm** — derinleştirmenin ne değişeceğinin düz İngilizce açıklaması
  - **Faydalar** — lokality ve leverage açısından açıklanmış, ve testler nasıl iyileşecek
  - **Before / After diyagramı** — yan yana, el yapımı, sığlığı ve derinleştirmeyi gösteren
  - **Tavsiye gücü** — `Strong`, `Worth exploring`, `Speculative` den biri, badge olarak render edilmiş
  
  Raporu **En İyi Tavsiye** bölümüyle sonlandır: hangi adayı ilk olarak ele alacağın ve neden.
  
  **CONTEXT.md sözlüğünü domain için ve [LANGUAGE.md](https://github.com/mattpocock/skills/blob/HEAD/LANGUAGE.md) sözlüğünü mimari için kullan.** Eğer `CONTEXT.md` "Order" tanımlarsa, "Order intake modülü" hakkında konuş — "FooBarHandler" değil, ve "Order service" değil.
  
  **ADR çatışmaları**: eğer bir aday mevcut bir ADR'ye ters düşerse, sadece frikiyon ADR'yi yeniden açmayı garanti edecek kadar gerçek olduğunda yüzeye çıkar. Kart içinde net bir şekilde işaretle (örn. bir uyarı callout: _"ADR-0007 ile ters düşer — ama çünkü yeniden açmaya değer…"_). Bir ADR'nin yasakladığı her teorik refaktörü listeleme.
  
  Tam HTML iskeleti, diyagram desenleri ve styling rehberi için [HTML-REPORT.md](https://github.com/mattpocock/skills/blob/HEAD/HTML-REPORT.md) ye bak.
  
  Henüz arayüzler önerme. Dosya yazıldıktan sonra kullanıcıya sor: "Bunlardan hangisini keşfetmek istersiniz?"
  
  ### 3. Sorgulama döngüsü
  
  Kullanıcı bir aday seçtikten sonra, sorgulama konuşmasına dal. Tasarım ağacında onlarla yürü — kısıtlamalar, bağımlılıklar, derinleştirilen modülün şekli, seamde neler yaşıyor, hangi testler hayatta kalıyor.
  
  Kararlar kristalleştikçe yan etkiler satır içi olarak gerçekleşir:
  
  - **`CONTEXT.md` içinde olmayan bir kavramdan sonra derinleştirilen modülü adlandırıyorsun?** Terimi `CONTEXT.md` ye ekle — `/grill-with-docs` ile aynı disiplin ([CONTEXT-FORMAT.md](https://github.com/mattpocock/skills/blob/HEAD/grill-with-docs/CONTEXT-FORMAT.md) ye bak). Dosya yoksa lazy yaratın.
  - **Konuşma sırasında bulanık bir terimi mi keskinleştiriyorsun?** `CONTEXT.md` yi hemen orada güncelleyin.
  - **Kullanıcı adayı load-bearing bir sebeple mi reddediyor?** Bir ADR teklif et, şu şekilde çerçeveli: _"Bunu bir ADR olarak kaydetmemi ister misiniz ki gelecek mimari incelemeler tekrar önermesin?"_ Sadece sebep gelecek bir explorer tarafından aynı şeyi yeniden önermeyi önlemek için gerçekten gerekli olduğunda teklif et — efemeral sebepleri ("şu an değer") ve kendi kendini belleği olanları ("kendi kendini belleği") atla. [ADR-FORMAT.md](https://github.com/mattpocock/skills/blob/HEAD/grill-with-docs/ADR-FORMAT.md) ye bak.
  - **Derinleştirilen modül için alternatif arayüzleri keşfetmek ister misiniz?** [INTERFACE-DESIGN.md](https://github.com/mattpocock/skills/blob/HEAD/INTERFACE-DESIGN.md) ye bak.
---

# Improve Codebase Architecture

Surface architectural friction and propose **deepening opportunities** — refactors that turn shallow modules into deep ones. The aim is testability and AI-navigability.

This command is _informed_ by the project's domain model and built on a shared design vocabulary:

- Run the `/codebase-design` skill for the architecture vocabulary (**module**, **interface**, **depth**, **seam**, **adapter**, **leverage**, **locality**) and its principles (the deletion test, "the interface is the test surface", "one adapter = hypothetical seam, two = real"). Use these terms exactly in every suggestion — don't drift into "component," "service," "API," or "boundary."
- The domain language in `CONTEXT.md` gives names to good seams; ADRs in `docs/adr/` record decisions this command should not re-litigate.

## Process

### 1. Explore

Read the project's domain glossary (`CONTEXT.md`) and any ADRs in the area you're touching first.

Then use the Agent tool with `subagent_type=Explore` to walk the codebase. Don't follow rigid heuristics — explore organically and note where you experience friction:

- Where does understanding one concept require bouncing between many small modules?
- Where are modules **shallow** — interface nearly as complex as the implementation?
- Where have pure functions been extracted just for testability, but the real bugs hide in how they're called (no **locality**)?
- Where do tightly-coupled modules leak across their seams?
- Which parts of the codebase are untested, or hard to test through their current interface?

Apply the **deletion test** to anything you suspect is shallow: would deleting it concentrate complexity, or just move it? A "yes, concentrates" is the signal you want.

### 2. Present candidates as an HTML report

Write a self-contained HTML file to the OS temp directory so nothing lands in the repo. Resolve the temp dir from `$TMPDIR`, falling back to `/tmp` (or `%TEMP%` on Windows), and write to `<tmpdir>/architecture-review-<timestamp>.html` so each run gets a fresh file. Open it for the user — `xdg-open <path>` on Linux, `open <path>` on macOS, `start <path>` on Windows — and tell them the absolute path.

The report uses **Tailwind via CDN** for layout and styling, and **Mermaid via CDN** for diagrams where a graph/flow/sequence reliably communicates the structure. Mix Mermaid with hand-crafted CSS/SVG visuals — use Mermaid when relationships are graph-shaped (call graphs, dependencies, sequences), and hand-built divs/SVG when you want something more editorial (mass diagrams, cross-sections, collapse animations). Each candidate gets a **before/after visualisation**. Be visual.

For each candidate, render a card with:

- **Files** — which files/modules are involved
- **Problem** — why the current architecture is causing friction
- **Solution** — plain English description of what would change
- **Benefits** — explained in terms of locality and leverage, and how tests would improve
- **Before / After diagram** — side-by-side, custom-drawn, illustrating the shallowness and the deepening
- **Recommendation strength** — one of `Strong`, `Worth exploring`, `Speculative`, rendered as a badge

End the report with a **Top recommendation** section: which candidate you'd tackle first and why.

**Use CONTEXT.md vocabulary for the domain, and the `/codebase-design` vocabulary for the architecture.** If `CONTEXT.md` defines "Order," talk about "the Order intake module" — not "the FooBarHandler," and not "the Order service."

**ADR conflicts**: if a candidate contradicts an existing ADR, only surface it when the friction is real enough to warrant revisiting the ADR. Mark it clearly in the card (e.g. a warning callout: _"contradicts ADR-0007 — but worth reopening because…"_). Don't list every theoretical refactor an ADR forbids.

See [HTML-REPORT.md](https://github.com/mattpocock/skills/blob/HEAD/HTML-REPORT.md) for the full HTML scaffold, diagram patterns, and styling guidance.

Do NOT propose interfaces yet. After the file is written, ask the user: "Which of these would you like to explore?"

### 3. Grilling loop

Once the user picks a candidate, run the `/grilling` skill to walk the design tree with them — constraints, dependencies, the shape of the deepened module, what sits behind the seam, what tests survive.

Side effects happen inline as decisions crystallize — run the `/domain-modeling` skill to keep the domain model current as you go:

- **Naming a deepened module after a concept not in `CONTEXT.md`?** Add the term to `CONTEXT.md`. Create the file lazily if it doesn't exist.
- **Sharpening a fuzzy term during the conversation?** Update `CONTEXT.md` right there.
- **User rejects the candidate with a load-bearing reason?** Offer an ADR, framed as: _"Want me to record this as an ADR so future architecture reviews don't re-suggest it?"_ Only offer when the reason would actually be needed by a future explorer to avoid re-suggesting the same thing — skip ephemeral reasons ("not worth it right now") and self-evident ones.
- **Want to explore alternative interfaces for the deepened module?** Run the `/codebase-design` skill and use its design-it-twice parallel sub-agent pattern.
