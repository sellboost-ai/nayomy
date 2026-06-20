---
name: "prototype"
description_en: "Build a throwaway prototype to flesh out a design — a runnable terminal app for state/business-logic questions, or several radically different UI variations toggleable from one route."
description_tr: "Tasarımı hayata geçirmeden önce atılabilir bir prototip oluşturun. İki branch arasında yönlendirme yapın — state/iş-logic sorularını cevaplamak için çalıştırılabilir bir terminal uygulaması veya tek bir route'dan toggle edilebilen birçok farklı UI varyasyonu. Kullanıcı prototip oluşturmak, bir data model veya state machine'i kontrol etmek, UI mockup'ı yapmak, tasarım seçeneklerini keşfetmek istediğinde veya \"bunu prototiple\", \"biraz oynayabilir miyim\" dediğinde kullanın."
category: "Design"
repo: "mattpocock/skills"
stars: 137186
url: "https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/prototype/SKILL.md"
path: "skills/engineering/prototype/SKILL.md"
is_collection: false
body_length: 2763
has_scripts: false
has_references: false
has_examples: false
related_files: ["LOGIC.md", "UI.md"]
body_tr: |-
  # Prototip
  
  Prototip, **bir soruya cevap veren atılacak koddur**. Soru şeklini belirler.
  
  ## Dalı seçin
  
  Hangi sorunun yanıtlandığını belirleyin — kullanıcının promptundan, çevreleyen koddan veya kullanıcıyla iletişim kurarak:
  
  - **"Bu logic / state modeli doğru hissettiriyor mu?"** → [LOGIC.md](LOGIC.md). Kağıt üzerinde akıl yürütülmesi zor olan durumlar arasında state machine'i iten küçük bir interaktif terminal app'i oluşturun.
  - **"Bu nasıl görünmeli?"** → [UI.md](UI.md). Tek bir route üzerinde radikal olarak farklı birkaç UI varyasyonu oluşturun; URL arama parametresi ve kayan alt bar aracılığıyla değiştirilebilir.
  
  İki dal çok farklı yapıtlar üretir — bunu yanlış yapmak tüm prototipinizi boşa harcar. Soru gerçekten belirsizse ve kullanıcıya ulaşılamıyorsa, çevreleyen kodla daha iyi eşleşen dalı seçin (backend modülü → logic; sayfa veya component → UI) ve prototipinizin başında varsayımı belirtin.
  
  ## Her iki dal için geçerli kurallar
  
  1. **Birinci günden itibaren atılabilir ve açıkça bu şekilde işaretli.** Prototip kodunu fiilen kullanılacağı yere yakın yerleştirin (prototip yaptığınız modül veya sayfanın yanında) — böylece context açık olur — ancak rahat bir şekilde okuyan birinin prototip olduğunu, üretim olmadığını görebilmesi için adlandırın. Throwaway UI route'ları için, proje zaten kullanan yönlendirme kuralına uyun; yeni bir üst düzey yapı icat etmeyin.
  2. **Çalıştırmak için bir komut.** Projenin mevcut task runner'ının desteklediği her şey — `pnpm <name>`, `python <path>`, `bun <path>`, vs. Kullanıcı bunu düşünmeden başlatabilmelidir.
  3. **Varsayılan olarak persistence yok.** State bellek içindedir. Persistence, prototipinin _kontrol ettiği_ şeydir, bağlı olması gereken bir şey değildir. Soru açıkça bir veritabanını içeriyorsa, bir scratch DB'ye veya "PROTOTYPE — beni sil" adıyla açık bir yerel dosyaya erişin.
  4. **Cilalaması atla.** Test yok, prototipinizin _çalışabilir_ olmasını sağlayan dışında hata işleme yok, abstraksiyon yok. Amaç, hızlı bir şekilde bir şeyler öğrenmek ve sonra silmektir.
  5. **State'i yüzeye çıkarın.** Her action'dan sonra (logic) veya her varyant değişiminde (UI), kullanıcının neyin değiştiğini görebilmesi için tam ilgili state'i yazdırın veya render edin.
  6. **Bittiğinde silin veya absorbe edin.** Prototip sorusunu yanıtladığında, ya silin ya da doğrulanmış kararı gerçek koda katın — repo'da çürümeye bırakmayın.
  
  ## Bittiğinde
  
  Bir prototipten tutmaya değer tek şey, _cevaptır_. Bunu kalıcı bir yerde yakalayın (commit mesajı, ADR, issue veya prototipinizin yanında bir `NOTES.md`) ve yanıt verdiği soru ile birlikte. Kullanıcı ise, bu yakalama hızlı bir konuşmadır; değilse, prototip silinmeden önce kararı doldurabilmeleri (veya sonraki geçişte siz) için placeholder bırakın.
---

# Prototype

A prototype is **throwaway code that answers a question**. The question decides the shape.

## Pick a branch

Identify which question is being answered — from the user's prompt, the surrounding code, or by asking if the user is around:

- **"Does this logic / state model feel right?"** → [LOGIC.md](LOGIC.md). Build a tiny interactive terminal app that pushes the state machine through cases that are hard to reason about on paper.
- **"What should this look like?"** → [UI.md](UI.md). Generate several radically different UI variations on a single route, switchable via a URL search param and a floating bottom bar.

The two branches produce very different artifacts — getting this wrong wastes the whole prototype. If the question is genuinely ambiguous and the user isn't reachable, default to whichever branch better matches the surrounding code (a backend module → logic; a page or component → UI) and state the assumption at the top of the prototype.

## Rules that apply to both

1. **Throwaway from day one, and clearly marked as such.** Locate the prototype code close to where it will actually be used (next to the module or page it's prototyping for) so context is obvious — but name it so a casual reader can see it's a prototype, not production. For throwaway UI routes, obey whatever routing convention the project already uses; don't invent a new top-level structure.
2. **One command to run.** Whatever the project's existing task runner supports — `pnpm <name>`, `python <path>`, `bun <path>`, etc. The user must be able to start it without thinking.
3. **No persistence by default.** State lives in memory. Persistence is the thing the prototype is _checking_, not something it should depend on. If the question explicitly involves a database, hit a scratch DB or a local file with a clear "PROTOTYPE — wipe me" name.
4. **Skip the polish.** No tests, no error handling beyond what makes the prototype _runnable_, no abstractions. The point is to learn something fast and then delete it.
5. **Surface the state.** After every action (logic) or on every variant switch (UI), print or render the full relevant state so the user can see what changed.
6. **Delete or absorb when done.** When the prototype has answered its question, either delete it or fold the validated decision into the real code — don't leave it rotting in the repo.

## When done

The _answer_ is the only thing worth keeping from a prototype. Capture it somewhere durable (commit message, ADR, issue, or a `NOTES.md` next to the prototype) along with the question it was answering. If the user is around, that capture is a quick conversation; if not, leave the placeholder so they (or you, on the next pass) can fill in the verdict before deleting the prototype.
