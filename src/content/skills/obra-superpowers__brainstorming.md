---
name: "brainstorming"
description_en: "You MUST use this before any creative work - creating features, building components, adding functionality, or modifying behavior. Explores user intent, requirements and design before implementation."
description_tr: "Herhangi bir yaratıcı çalışmaya başlamadan önce bunu mutlaka kullanın - feature oluştururken, component inşa ederken, functionality eklerken veya davranış değiştirirken. Kullanıcı niyetini, gereksinimleri ve tasarımı implementation öncesinde araştırır."
category: "Design"
repo: "obra/superpowers"
stars: 230300
url: "https://github.com/obra/superpowers/blob/HEAD/skills/brainstorming/SKILL.md"
path: "skills/brainstorming/SKILL.md"
is_collection: false
body_length: 10149
has_scripts: true
has_references: false
has_examples: false
related_files: ["spec-document-reviewer-prompt.md", "visual-companion.md"]
body_tr: |-
  # Fikirleri Tasarımlara Dönüştürme
  
  Fikirlerinizi doğal işbirlikçi diyalog aracılığıyla tam gelişmiş tasarım ve spesifikasyonlara dönüştürmeye yardımcı olun.
  
  Mevcut proje bağlamını anlamakla başlayın, ardından fikri iyileştirmek için birer birer sorular sorun. Ne inşa ettiğinizi anladığınızda, tasarımı sunun ve kullanıcı onayını alın.
  
  <HARD-GATE>
  Tasarımı sunup kullanıcı tarafından onaylanana kadar HİÇBİR uygulama becerisi kullanmayın, kod yazmayın, proje oluşturmayın veya uygulama eylemi almayın. Bu, algılanan basitliğine bakılmaksızın HER proje için geçerlidir.
  </HARD-GATE>
  
  ## Anti-Pattern: "Bu Tasarım İçin Çok Basit"
  
  Her proje bu süreci takip eder. Bir yapılacaklar listesi, tek işlevli bir araç, bir config değişikliği — hepsi. "Basit" projeler, incelenmemiş varsayımların en fazla israf yaptığı yerlerdir. Tasarım kısa olabilir (gerçekten basit projeler için birkaç cümle), ama bunu MUTLAKA sunmalı ve onay almalısınız.
  
  ## Kontrol Listesi
  
  Bu öğelerin her biri için bir görev oluşturmalı ve bunları sırasıyla tamamlamalısınız:
  
  1. **Proje bağlamını keşfedin** — dosyaları, dokümanları, son commitleri kontrol edin
  2. **Görsel yardımcıyı tam zamanında sunun** — başlangıçta değil. Bir soru görsel olarak anlatıldığından daha net gösterilecekse, o zaman sunun (kendi mesajında); onay verildiğinde tarayıcı sekmesi sizin için açılır. Hiçbir görsel soru ortaya çıkmazsa, asla sunmayın. Aşağıda Görsel Yardımcı bölümüne bakın.
  3. **Açıklayıcı soruları sorun** — birer birer, amaç/kısıtlamalar/başarı kriterlerini anlayın
  4. **2-3 yaklaşım önerin** — trade-offlar ve tavsiyenizle
  5. **Tasarımı sunun** — karmaşıklığına göre bölümlendirilmiş, her bölümden sonra kullanıcı onayı alın
  6. **Tasarım dokümanı yazın** — `docs/superpowers/specs/YYYY-MM-DD-<konu>-design.md` dosyasına kaydedin ve commit edin
  7. **Spec öz incelemesi** — yer tutucu, çelişki, belirsizlik, kapsam için hızlı satır içi kontrol (aşağıya bakın)
  8. **Kullanıcı yazılı speci inceler** — devam etmeden önce spec dosyasını incelemesini isteyebilir
  9. **Uygulamaya geçiş** — writing-plans becerisini çağırarak uygulama planı oluşturun
  
  ## Süreç Akışı
  
  ```dot
  digraph brainstorming {
      "Proje bağlamını keşfedin" [shape=box];
      "Açıklayıcı soruları sorun" [shape=box];
      "2-3 yaklaşım önerin" [shape=box];
      "Tasarım bölümlerini sunun" [shape=box];
      "Kullanıcı tasarımı onaylıyor?" [shape=diamond];
      "Tasarım dokümanı yazın" [shape=box];
      "Spec öz incelemesi\n(satır içi düzelt)" [shape=box];
      "Kullanıcı speci inceliyor?" [shape=diamond];
      "writing-plans becerisini çağırın" [shape=doublecircle];
  
      "Proje bağlamını keşfedin" -> "Açıklayıcı soruları sorun";
      "Açıklayıcı soruları sorun" -> "2-3 yaklaşım önerin";
      "2-3 yaklaşım önerin" -> "Tasarım bölümlerini sunun";
      "Tasarım bölümlerini sunun" -> "Kullanıcı tasarımı onaylıyor?";
      "Kullanıcı tasarımı onaylıyor?" -> "Tasarım bölümlerini sunun" [label="hayır, revize et"];
      "Kullanıcı tasarımı onaylıyor?" -> "Tasarım dokümanı yazın" [label="evet"];
      "Tasarım dokümanı yazın" -> "Spec öz incelemesi\n(satır içi düzelt)";
      "Spec öz incelemesi\n(satır içi düzelt)" -> "Kullanıcı speci inceliyor?";
      "Kullanıcı speci inceliyor?" -> "Tasarım dokümanı yazın" [label="değişiklik istendi"];
      "Kullanıcı speci inceliyor?" -> "writing-plans becerisini çağırın" [label="onaylandı"];
  }
  ```
  
  **Terminal durumu writing-plans'ı çağırmaktır.** frontend-design, mcp-builder veya başka bir uygulama becerisini çağırmayın. Brainstorming'den sonra çağıracağınız TEK beceri writing-plans'tır.
  
  ## Süreç
  
  **Fikri anlama:**
  
  - Önce mevcut proje durumunu kontrol edin (dosyalar, dokümanlar, son commitler)
  - Ayrıntılı sorular sormadan önce, kapsamı değerlendirin: eğer istek birden fazla bağımsız alt sistemi tanımlıyorsa (örneğin, "sohbet, dosya depolama, ödeme ve analitik içeren bir platform oluştur"), bunu hemen işaretleyin. Önce ayrıştırılması gereken bir proje için detayları iyileştirmeyle vakit harcamayın.
  - Proje tek bir spec için çok büyükse, kullanıcıya alt projelere ayrıştırılmasında yardımcı olun: bağımsız parçalar nelerdir, nasıl ilişkilidir, hangi sırayla oluşturulmalıdır? Ardından ilk alt projeyi normal tasarım akışından geçirin. Her alt proje kendi spec → plan → uygulama döngüsüne sahiptir.
  - Uygun şekilde kapsamlı projeler için, fikri iyileştirmek için birer birer sorular sorun
  - Mümkün olduğunda çoktan seçmeli soruları tercih edin, ama açık uçlu da sorun
  - İleti başına yalnızca bir soru — bir konu daha fazla keşif gerektiriyorsa, birden fazla soruya bölün
  - Odaklanın: amaç, kısıtlamalar, başarı kriterleri
  
  **Yaklaşımları keşfetme:**
  
  - Trade-offlarla birlikte 2-3 farklı yaklaşım önerin
  - Seçenekleri, tavsiyeniz ve sebeplendinize ilişkin açıklamalarla samimi bir şekilde sunun
  - Tavsiyeli seçenekle başlayın ve neden olduğunu açıklayın
  
  **Tasarımı sunma:**
  
  - Ne inşa ettiğinizi anladığınıza inanıyorsanız, tasarımı sunun
  - Her bölümü karmaşıklığına göre ölçekleyin: basit ise birkaç cümle, nüanslı ise 200-300 kelimeye kadar
  - Her bölümden sonra sorun, şimdiye kadar doğru görünüyor mu
  - Kapsar: mimari, bileşenler, veri akışı, hata işleme, test
  - Bir şey mantıklı gelmezse açıklığa kavuşturmaya hazır olun
  
  **İzolasyon ve açıklık için tasarım:**
  
  - Sistemi, her biri bir açık amaca sahip olan, iyi tanımlanmış arabirimler aracılığıyla iletişim kuran ve bağımsız olarak anlaşılabilen ve test edilebilen daha küçük birimlere bölün
  - Her birim için şu soruları cevaplayabilmelisiniz: ne yapar, nasıl kullanırsınız, neye bağlıdır?
  - Birinin iç işleyişini okumadan bir birimin ne yaptığını anlayabilir mi? Tüketicileri bozmadan içişleyişi değiştirebilir misiniz? Değilse, sınırlara çalışma gerekir.
  - Daha küçük, iyi sınırlandırılmış birimler, sizin için çalışmayı da kolaylaştırır — bir kez bağlamda tutabileceğiniz kod hakkında daha iyi düşünürsünüz ve dosyalar odaklanmışken düzenlemeler daha güvenilirdir. Bir dosya büyüdüğünde, bu genellikle çok fazla şey yaptığının bir sinyalidir.
  
  **Mevcut kod tabanlarında çalışma:**
  
  - Değişiklik önermeden önce mevcut yapıyı keşfedin. Mevcut desenleri takip edin.
  - Mevcut kodun bu çalışmayı etkileyen sorunları varsa (örneğin, çok büyümüş bir dosya, belirsiz sınırlar, karmaşık sorumluluklar), tasarımın bir parçası olarak hedefli iyileştirmeleri dahil edin — iyi bir geliştirici içinde çalıştığı kodu nasıl iyileştirirse.
  - İlgisiz refactoring önermeyin. Mevcut amacı hizmet etmeye odaklanın.
  
  ## Tasarımdan Sonra
  
  **Dokümantasyon:**
  
  - Doğrulanmış tasarımı (spec) `docs/superpowers/specs/YYYY-MM-DD-<konu>-design.md` dosyasına yazın
    - (Spec konumu için kullanıcı tercihleri bu varsayılanı geçersiz kılar)
  - Mevcut ise elements-of-style:writing-clearly-and-concisely becerisini kullanın
  - Tasarım dokümanını git'e commit edin
  
  **Spec Öz Incelemesi:**
  Spec dokümanını yazdıktan sonra taze gözlerle bakın:
  
  1. **Yer tutucu taraması:** Herhangi bir "TBD", "TODO", eksik bölüm veya belirsiz gereksinim? Düzeltin.
  2. **İç tutarlılık:** Bölümler birbirleriyle çelişiyor mu? Mimari, özellik açıklamalarıyla eşleşiyor mu?
  3. **Kapsam kontrolü:** Bu, tek bir uygulama planı için yeterince odaklanmış mı, yoksa ayrıştırılması gerekir mi?
  4. **Belirsizlik kontrolü:** Herhangi bir gereksinim iki farklı şekilde yorumlanabilir mi? Öyleyse birini seçin ve açık yapın.
  
  Sorunları satır içi düzeltin. Yeniden incelemeye gerek yoktur — düzeltin ve ilerleyin.
  
  **Kullanıcı İnceleme Kapısı:**
  Spec inceleme döngüsü geçtikten sonra, devam etmeden önce yazılı speci incelemesini isteyebilir:
  
  > "Spec yazılmış ve `<yol>` dosyasına commit edilmiştir. Lütfen inceleyiniz ve uygulama planını yazmaya başlamadan önce değişiklik isteyip istemediğinizi bize bildirin."
  
  Kullanıcının yanıtını bekleyin. Değişiklik isterse, yapın ve spec inceleme döngüsünü yeniden çalıştırın. Kullanıcı onayladığında devam edin.
  
  **Uygulama:**
  
  - writing-plans becerisini çağırarak detaylı bir uygulama planı oluşturun
  - Başka bir beceri çağırmayın. writing-plans sonraki adımdır.
  
  ## Temel İlkeler
  
  - **Birer birer soru** — Birden fazla soruyla boğmayın
  - **Çoktan seçmeli tercih** — Açık uçludan daha kolay cevaplamak
  - **YAGNI acımasızca uygulanır** — Tüm tasarımlardan gereksiz özellikleri kaldırın
  - **Alternatifleri keşfedin** — Her zaman yerleşmeden önce 2-3 yaklaşım önerin
  - **Artımlı doğrulama** — Tasarımı sunun, devam etmeden onay alın
  - **Esnek olun** — Bir şey mantıklı gelmezse geri döne ve açıklığa kavuşturun
  
  ## Görsel Yardımcı
  
  Brainstorming sırasında mockupları, diyagramları ve görsel seçenekleri göstermek için tarayıcı tabanlı bir yardımcı. Bir mod olarak değil araç olarak kullanılabilir. Yardımcıyı kabul etmek, görsel işleme fayda sağlayan sorular için mevcut olduğu anlamına gelir; bu, HER sorunun tarayıcıdan geçtiği anlamına gelmez.
  
  **Yardımcıyı sunma (tam zamanında):** Baştan sunmayın. Bir soru görsel olarak anlatıldığından daha net gösterilecekse beklemeye devam edin — gerçek mockup / mizanpaj / diyagram sorusu, yalnızca UI *konusu* değil. İlk kez olduğunda, o zaman kendi mesajında sunun:
  > "Bu sonraki kısım göstermeyle daha kolay olabilir — tarayıcı sekmesinde ilerledikçe mockuplar, diyagramlar ve karşılaştırmalar hazırlayabilirim. Hala yenidir ve token açısından yoğun olabilir. İsteseler mi? Sizin için açarım."
  
  **Bu teklif KENDİ MESAJI OLMALI.** Yalnızca teklif — açıklayıcı soru, özet veya başka içerik yok. Kullanıcının yanıtını bekleyin. Kabul ederse sunucuyu `--open` ile başlatın, böylece tarayıcıları ilk ekrana otomatik olarak açılır. Reddettiği takdirde, metne devam edin ve yeniden sunmayın, kullanıcı ortaya atana kadar.
  
  **Soru başına karar:** Kullanıcı kabul ettikten sonra bile, HER SORU için tarayıcı veya terminali kullanıp kullanmayacağınıza karar verin. Test: **Kullanıcı bunu okuduğundan daha iyi görsel olarak anlardı mı?**
  
  - **Tarayıcıyı kullanın** — görsel olan içerik için mockuplar, tel çerçeveler, mizanpaj karşılaştırmaları, mimari diyagramlar, yan yana görsel tasarımlar
  - **Terminali kullanın** — metin olan içerik için gereksinimler soruları, kavramsal seçimler, trade-off listeleri, A/B/C/D metin seçenekleri, kapsam kararları
  
  Bir UI konusuna ilişkin bir soru otomatik olarak görsel soru değildir. "Bu bağlamda kişilik ne demek?" konseptüel bir sorudur — terminali kullanın. "Hangi sihirbaz mizanpajı daha iyi çalışır?" görsel bir sorudur — tarayıcıyı kullanın.
  
  Eğer yardımcıya ikna edilirlerse, devam etmeden önce ayrıntılı rehberi okuyun:
  `skills/brainstorming/visual-companion.md`
---

# Brainstorming Ideas Into Designs

Help turn ideas into fully formed designs and specs through natural collaborative dialogue.

Start by understanding the current project context, then ask questions one at a time to refine the idea. Once you understand what you're building, present the design and get user approval.

<HARD-GATE>
Do NOT invoke any implementation skill, write any code, scaffold any project, or take any implementation action until you have presented a design and the user has approved it. This applies to EVERY project regardless of perceived simplicity.
</HARD-GATE>

## Anti-Pattern: "This Is Too Simple To Need A Design"

Every project goes through this process. A todo list, a single-function utility, a config change — all of them. "Simple" projects are where unexamined assumptions cause the most wasted work. The design can be short (a few sentences for truly simple projects), but you MUST present it and get approval.

## Checklist

You MUST create a task for each of these items and complete them in order:

1. **Explore project context** — check files, docs, recent commits
2. **Offer the visual companion just-in-time** — NOT upfront. The first time a question would genuinely be clearer shown than described, offer it then (its own message); on approval its browser tab opens for you. If no visual question ever arises, never offer it. See the Visual Companion section below.
3. **Ask clarifying questions** — one at a time, understand purpose/constraints/success criteria
4. **Propose 2-3 approaches** — with trade-offs and your recommendation
5. **Present design** — in sections scaled to their complexity, get user approval after each section
6. **Write design doc** — save to `docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md` and commit
7. **Spec self-review** — quick inline check for placeholders, contradictions, ambiguity, scope (see below)
8. **User reviews written spec** — ask user to review the spec file before proceeding
9. **Transition to implementation** — invoke writing-plans skill to create implementation plan

## Process Flow

```dot
digraph brainstorming {
    "Explore project context" [shape=box];
    "Ask clarifying questions" [shape=box];
    "Propose 2-3 approaches" [shape=box];
    "Present design sections" [shape=box];
    "User approves design?" [shape=diamond];
    "Write design doc" [shape=box];
    "Spec self-review\n(fix inline)" [shape=box];
    "User reviews spec?" [shape=diamond];
    "Invoke writing-plans skill" [shape=doublecircle];

    "Explore project context" -> "Ask clarifying questions";
    "Ask clarifying questions" -> "Propose 2-3 approaches";
    "Propose 2-3 approaches" -> "Present design sections";
    "Present design sections" -> "User approves design?";
    "User approves design?" -> "Present design sections" [label="no, revise"];
    "User approves design?" -> "Write design doc" [label="yes"];
    "Write design doc" -> "Spec self-review\n(fix inline)";
    "Spec self-review\n(fix inline)" -> "User reviews spec?";
    "User reviews spec?" -> "Write design doc" [label="changes requested"];
    "User reviews spec?" -> "Invoke writing-plans skill" [label="approved"];
}
```

**The terminal state is invoking writing-plans.** Do NOT invoke frontend-design, mcp-builder, or any other implementation skill. The ONLY skill you invoke after brainstorming is writing-plans.

## The Process

**Understanding the idea:**

- Check out the current project state first (files, docs, recent commits)
- Before asking detailed questions, assess scope: if the request describes multiple independent subsystems (e.g., "build a platform with chat, file storage, billing, and analytics"), flag this immediately. Don't spend questions refining details of a project that needs to be decomposed first.
- If the project is too large for a single spec, help the user decompose into sub-projects: what are the independent pieces, how do they relate, what order should they be built? Then brainstorm the first sub-project through the normal design flow. Each sub-project gets its own spec → plan → implementation cycle.
- For appropriately-scoped projects, ask questions one at a time to refine the idea
- Prefer multiple choice questions when possible, but open-ended is fine too
- Only one question per message - if a topic needs more exploration, break it into multiple questions
- Focus on understanding: purpose, constraints, success criteria

**Exploring approaches:**

- Propose 2-3 different approaches with trade-offs
- Present options conversationally with your recommendation and reasoning
- Lead with your recommended option and explain why

**Presenting the design:**

- Once you believe you understand what you're building, present the design
- Scale each section to its complexity: a few sentences if straightforward, up to 200-300 words if nuanced
- Ask after each section whether it looks right so far
- Cover: architecture, components, data flow, error handling, testing
- Be ready to go back and clarify if something doesn't make sense

**Design for isolation and clarity:**

- Break the system into smaller units that each have one clear purpose, communicate through well-defined interfaces, and can be understood and tested independently
- For each unit, you should be able to answer: what does it do, how do you use it, and what does it depend on?
- Can someone understand what a unit does without reading its internals? Can you change the internals without breaking consumers? If not, the boundaries need work.
- Smaller, well-bounded units are also easier for you to work with - you reason better about code you can hold in context at once, and your edits are more reliable when files are focused. When a file grows large, that's often a signal that it's doing too much.

**Working in existing codebases:**

- Explore the current structure before proposing changes. Follow existing patterns.
- Where existing code has problems that affect the work (e.g., a file that's grown too large, unclear boundaries, tangled responsibilities), include targeted improvements as part of the design - the way a good developer improves code they're working in.
- Don't propose unrelated refactoring. Stay focused on what serves the current goal.

## After the Design

**Documentation:**

- Write the validated design (spec) to `docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md`
  - (User preferences for spec location override this default)
- Use elements-of-style:writing-clearly-and-concisely skill if available
- Commit the design document to git

**Spec Self-Review:**
After writing the spec document, look at it with fresh eyes:

1. **Placeholder scan:** Any "TBD", "TODO", incomplete sections, or vague requirements? Fix them.
2. **Internal consistency:** Do any sections contradict each other? Does the architecture match the feature descriptions?
3. **Scope check:** Is this focused enough for a single implementation plan, or does it need decomposition?
4. **Ambiguity check:** Could any requirement be interpreted two different ways? If so, pick one and make it explicit.

Fix any issues inline. No need to re-review — just fix and move on.

**User Review Gate:**
After the spec review loop passes, ask the user to review the written spec before proceeding:

> "Spec written and committed to `<path>`. Please review it and let me know if you want to make any changes before we start writing out the implementation plan."

Wait for the user's response. If they request changes, make them and re-run the spec review loop. Only proceed once the user approves.

**Implementation:**

- Invoke the writing-plans skill to create a detailed implementation plan
- Do NOT invoke any other skill. writing-plans is the next step.

## Key Principles

- **One question at a time** - Don't overwhelm with multiple questions
- **Multiple choice preferred** - Easier to answer than open-ended when possible
- **YAGNI ruthlessly** - Remove unnecessary features from all designs
- **Explore alternatives** - Always propose 2-3 approaches before settling
- **Incremental validation** - Present design, get approval before moving on
- **Be flexible** - Go back and clarify when something doesn't make sense

## Visual Companion

A browser-based companion for showing mockups, diagrams, and visual options during brainstorming. Available as a tool — not a mode. Accepting the companion means it's available for questions that benefit from visual treatment; it does NOT mean every question goes through the browser.

**Offering the companion (just-in-time):** Do NOT offer it upfront. Wait until a question would genuinely be clearer shown than told — a real mockup / layout / diagram question, not merely a UI *topic*. The first time that happens, offer it then, as its own message:
> "This next part might be easier if I show you — I can put together mockups, diagrams, and comparisons in a browser tab as we go. It's still new and can be token-intensive. Want me to? I'll open it for you."

**This offer MUST be its own message.** Only the offer — no clarifying question, summary, or other content. Wait for the user's response. If they accept, start the server with `--open` so their browser opens to the first screen automatically. If they decline, continue text-only and don't offer again unless they raise it.

**Per-question decision:** Even after the user accepts, decide FOR EACH QUESTION whether to use the browser or the terminal. The test: **would the user understand this better by seeing it than reading it?**

- **Use the browser** for content that IS visual — mockups, wireframes, layout comparisons, architecture diagrams, side-by-side visual designs
- **Use the terminal** for content that is text — requirements questions, conceptual choices, tradeoff lists, A/B/C/D text options, scope decisions

A question about a UI topic is not automatically a visual question. "What does personality mean in this context?" is a conceptual question — use the terminal. "Which wizard layout works better?" is a visual question — use the browser.

If they agree to the companion, read the detailed guide before proceeding:
`skills/brainstorming/visual-companion.md`
