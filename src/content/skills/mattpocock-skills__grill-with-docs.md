---
name: "grill-with-docs"
description_en: "A relentless interview to sharpen a plan or design, which also creates docs (ADR's and glossary) as we go."
description_tr: "Mevcut domain model'inize karşı planınızı test eden, terminolojiyi keskinleştiren ve kararlar netleştikçe dokumentasyonu (CONTEXT.md, ADRs) anında güncelleyen grilling seansı. Planınızı projenizin dili ve belgelenmiş kararlarına karşı stress-test etmek istediğinizde kullanın."
category: "Document"
repo: "mattpocock/skills"
stars: 137186
url: "https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/grill-with-docs/SKILL.md"
path: "skills/engineering/grill-with-docs/SKILL.md"
is_collection: false
body_length: 62
has_scripts: false
has_references: false
has_examples: false
related_files: []
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

Run a `/grilling` session, using the `/domain-modeling` skill.
