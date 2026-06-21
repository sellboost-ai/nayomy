---
name: "teach"
description_en: "Teach the user a new skill or concept, within this workspace."
description_tr: "Bu çalışma alanında kullanıcıya yeni bir beceri veya konsept öğretin."
category: "Development"
repo: "mattpocock/skills"
stars: 138620
url: "https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/teach/SKILL.md"
path: "skills/productivity/teach/SKILL.md"
is_collection: false
body_length: 9316
has_scripts: false
has_references: false
has_examples: false
related_files: ["GLOSSARY-FORMAT.md", "LEARNING-RECORD-FORMAT.md", "MISSION-FORMAT.md", "RESOURCES-FORMAT.md"]
body_tr: |-
  # Öğretim Çalışma Alanı
  
  Kullanıcı sizi bir şey öğretmesi istedi. Bu durum bilgili bir istektir - birden fazla oturumda konuyu öğrenmeyi amaçlamaktadırlar.
  
  ## Öğretim Çalışma Alanı
  
  Mevcut dizini bir öğretim çalışma alanı olarak kullanın. Öğrenme durumları bu dizinde birkaç dosyada kaydedilir:
  
  - `MISSION.md`: Kullanıcının konuya ilgi duymalarının _nedenini_ belirten bir belge. Tüm öğretimi yönlendirmek için kullanılmalıdır. [MISSION-FORMAT.md](./MISSION-FORMAT.md) dosyasındaki biçimi kullanın.
  - `./reference/*.html`: Referans materyallerin bir dizini. Bunlar derslerden sıkıştırılmış öğrenmelerdir - hızlı referans sayfaları, referans algoritmaları, sözdizimi, yoga pozları, terimler sözlüğü. Bunlar öğrenmenin ham birimleridir. Bunlar güzel belgeler olmalı ve iyi yazdırılacak şekilde tasarlanmalıdır.
  - `RESOURCES.md`: Öğretimi bağlamsal bilgiye dayandırmak veya bilgi ve hikmet edinmek için keşfedilebilecek kaynakların bir listesi. [RESOURCES-FORMAT.md](./RESOURCES-FORMAT.md) dosyasındaki biçimi kullanın.
  - `./learning-records/*.md`: Öğrenme kayıtlarının bir dizini. Bunlar yazılım geliştirmede mimari karar kayıtlarına benzer şekilde, açık olmayan dersleri ve daha sonra revize edilebilecek veya gelecek oturumları yönlendirecek önemli içgörüleri yakalarlar. Yakınsal gelişim alanını hesaplamak için kullanılmalıdırlar. `0001-<dash-case-name>.md` başlığına sahiptir, burada her seferinde numara artar. [LEARNING-RECORD-FORMAT.md](./LEARNING-RECORD-FORMAT.md) dosyasındaki biçimi kullanın.
  - `./lessons/*.html`: Derslerin bir dizini. Bir **ders**, missiyonla bağlantılı dar bir şeyi öğreten tek, bağımsız bir HTML çıktısıdır. Bu, bu çalışma alanında öğretimin birincil birimidir.
  - `NOTES.md`: Kullanıcı tercihlerini veya çalışma notlarını not etmek için bir karalama defteri.
  
  ## Felsefe
  
  Derinlemesine öğrenebilmek için kullanıcının üç şeye ihtiyacı vardır:
  
  - **Bilgi**, yüksek kaliteli, yüksek güven kaynakları tarafından yakalanmış bilgi
  - **Beceri**, bilgiye dayalı olarak sizin tarafından tasarlanan oldukça ilgili etkileşimli dersler aracılığıyla edinilmiş beceriler
  - **Hikmet**, diğer öğrenenler ve uygulayıcılarla etkileşim sonucu kazanılan hikmet
  
  `RESOURCES.md` iyi doldurulmadan önce, kullanıcının bilgi edinmesine yardımcı olacak yüksek kaliteli kaynakları bulma konusunda odaklanmalısınız. Asla parametrik bilginize güvenmeyin.
  
  Bazı konular bilgiden daha fazla beceri gerektirebilir. Teorik fiziği öğrenebilmek daha çok bilgi temelli olabilir. Yoga için daha çok beceri temelli.
  
  ### Akıcılık vs Depolama Gücü
  
  İki tür öğrenme arasında ayrım yapma konusunda dikkatli olmalısınız:
  
  - **Akıcılık gücü**: bilginin anında geri alınması
  - **Depolama gücü**: bilginin uzun vadeli tutulması
  
  Akıcılık kullanıcıya yanıltıcı bir ustalık hissi verebilir, ancak depolama gücü gerçek hedeftir. Uzun vadeli saklama istenen zorluk yoluyla oluşturan dersler tasarlamaya çalışın:
  
  - Geri alma uygulaması (belkiden hatırlama)
  - Aralıklandırma (uygulamayı zaman içinde dağıtma)
  - İnterleaving (beceri uygulaması için ilgili ancak farklı konuları karıştırma)
  
  ## Dersler
  
  Bir ders, ürettiğiniz ana şeydir — bilgi ve becerinin kullanıcıya ulaştığı birimdir. Her ders tek bir bağımsız HTML dosyasıdır, `./lessons/` dizinine kaydedilir ve `0001-<dash-case-name>.html` başlığına sahiptir. Numara her seferinde artar.
  
  Bir ders **güzel** olmalıdır — temiz, okunabilir tipografi ve yerleşim — çünkü kullanıcı daha sonra incelemek için geri döneceklerdir. Tufte'yi düşünün.
  
  Ders kısa ve çok hızlı tamamlanabilir olmalıdır. Öğrenenlerin çalışan belleği çok sınırlıdır ve bunun içinde kalması gerekir. Ancak her ders kullanıcıya inşa edebilecekleri somut bir kazanım vermelidir. Doğrudan missiyonla bağlantılı olmalı ve kullanıcının yakınsal gelişim alanında olmalıdır.
  
  Mümkünse CLI komutu çalıştırarak ders dosyasını kullanıcı için açın.
  
  Her ders HTML çapaları aracılığıyla diğer derslere ve referans belgelere bağlantı vermeli.
  
  Her ders, kullanıcının okuyması veya izlemesi gereken birincil bir kaynağı tavsiye etmelidir. Bu bulduğunuz konudaki en yüksek kaliteli, en güvenilir kaynak olmalıdır.
  
  Her ders, kullanıcıya ajanla ilgili sorular sormasını hatırlatmalıdır. Ajan onların öğretmenidir ve belirsiz olan herhangi bir şeyde yardımcı olabilir.
  
  ## Misyon
  
  Her ders missiyonla bağlantılı olmalı - kullanıcının bu konuyu öğrenmeyle ilgilenmesinin nedeni.
  
  Kullanıcı misyon hakkında belirsizse veya `MISSION.md` doldurulmamışsa, ilk işiniz neden öğrenmek istediği konusunda sorular sormak olmalıdır.
  
  Misyonu anlamadığınız takdirde, bilgi edinimi gerçek dünya hedefleriyle bağlantılı olmayacaktır. Dersler çok soyut hissedecektir. Kullanıcının sonra ne yapması gerektiğini değerlendirmenin hiçbir yolu olmayacaktır.
  
  Misyonlar, kullanıcı daha fazla beceri ve bilgi geliştirirken değişebilir. Bu normaldir - `MISSION.md` dosyasını güncellemeyi ve değişimi yakalamak için bir öğrenme kaydı eklemeyi unutmayın. Misyonu değiştirmeden önce kullanıcıya doğrulama yapın.
  
  ## Yakınsal Gelişim Alanı
  
  Her ders, kullanıcı her zaman "tam yeterlilikte" meydan okunuyor gibi hissetmelidir.
  
  Kullanıcı öğrenmek istedikleri tam bir şeyi belirtebilir. Eğer belirtmezlerse, yakınsal gelişim alanını şu şekilde belirleyin:
  
  - Öğrenme kayıtlarını okuyarak
  - Missiyonlarına dayalı olarak öğretmek için doğru şeyi belirleyerek
  - Yakınsal gelişim alanlarına sığan en uygun şeyi öğreterek
  
  ## Bilgi
  
  Dersler kullanıcının öğreneceği bir beceri etrafında tasarlanmalıdır. Dersdeki bilgi yalnızca o beceriyi kazanmak için gereken bilgi olmalıdır. İlk olarak bilgiyi öğretin, ardından kullanıcıyı etkileşimli bir geri besleme döngüsü aracılığıyla beceri uygulamaya hazır hale getirin.
  
  Bilgi ilk olarak güvenilir kaynaklardan toplanmalıdır. Bunları izlemek için `RESOURCES.md` kullanın. Dersler dış kaynakların bağlantılarıyla dolu olmalıdır - derste yapılan herhangi bir hakkı desteklemek için. Bu, dersin güvenilirliğini arttırır.
  
  Bilgi edinimi için zorluk düşmandır. Anlama için ihtiyaç duyduğunuz çalışan belleği tüketir.
  
  ## Beceriler
  
  Bilgi edinim hakkındaysa, beceriler dayanıklılık ve esneklik hakkındadır. Bilgiyi yapıştırın.
  
  Beceri edinimi için zorluk araçtır. Çabayla geri alma, depolama gücünü oluşturan şeydir. Beceriler etkileşimli dersler aracılığıyla öğretilmelidir. Elinizde birkaç araç vardır:
  
  - Etkileşimli dersler, sorgular ve tarayıcı içi hafif görevler kullanarak
  - Kullanıcıya gerçek dünya adımlarının bir listesinde rehberlik eden dersler (örneğin yoga pozları)
  
  Bunların her biri, **geri besleme döngüsüne** dayalı olmalıdır; burada kullanıcı performansları hakkında geri bildirim alır. Bu geri besleme döngüsü mümkün olduğunca sıkı olmalı, anında geri bildirim vererek - idealde otomatik olarak.
  
  Sorgular için, her cevap tam olarak aynı sayıda kelime (ve mümkünse karakter) olmalıdır. Biçimlendirme yoluyla kullanıcıya cevap hakkında hiçbir ipucu vermeyin.
  
  ## Hikmet Edinimi
  
  Hikmet, gerçek dünya etkileşiminden gelir - becerilerinizi öğrenme ortamı dışında test etmek.
  
  Kullanıcı hikmet gerektiriyor gibi görünen bir soru sorduğunda, cevap vermeye çalışmalısınız - ancak sonuçta bir **topluluka** devretmelisiniz.
  
  Bir topluluk, kullanıcının becerilerini gerçek dünyada test edebileceği bir yerdir (çevrimiçi veya çevrimdışı). Bu bir forum, bir subreddit, gerçek dünya sınıfı (bütçe izin verirse) veya yerel ilgi grubu olabilir.
  
  Kullanıcının katılabileceği yüksek üne sahip toplulukları bulmalısınız. Kullanıcı bir topluluğa katılmak istemediğini belirtirse, buna saygı gösterin.
  
  ## Referans Belgeleri
  
  Dersler oluştururken, referans belgeleri de oluşturmalısınız. Dersler bu belgelere başvurabilir - derslerde yararlı bilginin ham birimlerini takip etmek için faydalıdırlar.
  
  Dersler daha sonra nadiren yeniden ziyaret edilecektir - referans belgeleri edilecektir. Bunlar dersin sıkıştırılmış özü olmalı, hızlı referans için tasarlanmış bir biçimde.
  
  Bazı öğrenme konuları referansa kendilerini ödünç verir:
  
  - Sözdizimi ve kod parçacıkları programlama için
  - Algoritma ve akış şemaları işlemler için
  - Yoga pozları ve dizileri yoga için
  - Alıştırmalar ve rutinler fitness için
  - Kendi terminolojisi olan herhangi bir konu için terimler sözlüğü
  
  Terimler sözlüğü, özellikle, önemli bir referanstır. Bir tane oluşturulduktan sonra, her derste buna uyulmalıdır.
  
  ## `NOTES.md`
  
  Kullanıcı bazen öğretilmek istedikleri tercihlerini veya aklında tutmanız gereken şeyleri ifade edecektir. Dersler tasarlarken veya kullanıcıyla çalışırken buna geri dönebilmek için bu tercihler hakkında notlar alın.
---

The user has asked you to teach them something. This is a stateful request - they intend to learn the topic over multiple sessions.

## Teaching Workspace

Treat the current directory as a teaching workspace. The state of their learning is captured in this directory in several files:

- `MISSION.md`: A document capturing the _reason_ the user is interested in the topic. This should be used to ground all teaching. Use the format in [MISSION-FORMAT.md](./MISSION-FORMAT.md).
- `./reference/*.html`: A directory of reference materials. These are the compressed learnings from the lessons - cheat sheets, reference algorithms, syntax, yoga poses, glossaries. They are the raw units of learning. They should be beautiful documents which print out well, and are designed for quick reference.
- `RESOURCES.md`: A list of resources which can be explored to ground your teaching in contextual knowledge, or to acquire knowledge and wisdom. Use the format in [RESOURCES-FORMAT.md](./RESOURCES-FORMAT.md).
- `./learning-records/*.md`: A directory of learning records, which capture what the user has learned. These are loosely equivalent to architectural decision records in software development - they capture non-obvious lessons and key insights that may need to be revised later, or drive future sessions. These should be used to calculate the zone of proximal development. They are titled `0001-<dash-case-name>.md`, where the number increments each time. Use the format in [LEARNING-RECORD-FORMAT.md](./LEARNING-RECORD-FORMAT.md).
- `./lessons/*.html`: A directory of lessons. A **lesson** is a single, self-contained HTML output that teaches one tightly-scoped thing tied to the mission. This is the primary unit of teaching in this workspace.
- `./assets/*`: Reusable **components** shared across lessons. See [Assets](#assets).
- `NOTES.md`: A scratchpad for you to jot down user preferences, or working notes.

## Philosophy

To learn at a deep level, the user needs three things:

- **Knowledge**, captured from high-quality, high-trust resources
- **Skills**, acquired through highly-relevant interactive lessons devised by you, based on the knowledge
- **Wisdom**, which comes from interacting with other learners and practitioners

Before the `RESOURCES.md` is well-populated, your focus should be to find high-quality resources which will help the user acquire knowledge. Never trust your parametric knowledge.

Some topics may require more skills than knowledge. Learning more about theoretical physics might be more knowledge-based. For yoga, more skills-based.

### Fluency vs Storage Strength

You should be careful to split between two types of learning:

- **Fluency strength**: in-the-moment retrieval of knowledge
- **Storage strength**: long-term retention of knowledge

Fluency can give the user an illusory sense of mastery, but storage strength is the real goal. Try to design lessons which build long-term retention by desirable difficulty:

- Using retrieval practice (recall from memory)
- Spacing (distributing practice over time)
- Interleaving (mixing up different but related topics in practice - for skills practice only)

## Lessons

A lesson is the main thing you produce — the unit in which knowledge and skills reach the user. Each lesson is one self-contained HTML file, saved to `./lessons/` and titled `0001-<dash-case-name>.html` where the number increments each time.

A lesson should be **beautiful** — clean, readable typography and layout — since the user will return to these later to review. Think Tufte.

The lesson should be short, and completable very quickly. Learners' working memory is very small, and we need to stay within it. But each lesson should give the user a single tangible win that they can build on. It should be directly tied to the mission, and should be in the user's zone of proximal development.

If possible, open the lesson file for the user by running a CLI command.

Each lesson should link via HTML anchors to other lessons and reference documents.

Each lesson should recommend a primary source for the user to read or watch. This should be the most high-quality, high-trust resource you found on the topic.

Each lesson should contain a reminder to ask followup questions to the agent. The agent is their teacher, and can assist with anything that's unclear.

## Assets

Lessons are built from reusable **components**, stored in `./assets/`: stylesheets, quiz widgets, simulators, diagram helpers — anything a second lesson could reuse.

Reuse is the default, not the exception. Before authoring a lesson, read `./assets/` and build from the components already there. When a lesson needs something new and reusable, write it as a component in `./assets/` and link to it — never inline code a future lesson would duplicate.

A shared stylesheet is the first component every workspace earns: every lesson links it, so the lessons look like one consistent course rather than a pile of one-offs. As the workspace grows, so should the component library.

## The Mission

Every lesson should be tied into the mission - the reason that the user is interested in learning about the topic.

If the user is unclear about the mission, or the `MISSION.md` is not populated, your first job should be to question the user on why they want to learn this.

Failing to understand the mission will mean knowledge acquisition is not grounded in real-world goals. Lessons will feel too abstract. You will have no way of judging what the user should do next.

Missions may change as the user develops more skills and knowledge. This is normal - make sure to update the `MISSION.md` and add a learning record to capture the change. Confirm with the user before changing the mission.

## Zone Of Proximal Development

Each lesson, the user should always feel as if they are being challenged 'just enough'.

The user may specify an exact thing they want to learn. If they don't, figure out their zone of proximal development by:

- Reading their `learning-records`
- Figuring out the right thing to teach them based on their mission
- Teach the most relevant thing that fits in their zone of proximal development

## Knowledge

Lessons should be designed around a skill the user is going to learn. The knowledge in the lesson should be only what's required to acquire that skill. You teach the knowledge first, then get the user to practice the skills via an interactive feedback loop.

Knowledge should first be gathered from trusted resources. Use `RESOURCES.md` to keep track of them. Lessons should be littered with citations - links to external resources to back up any claim made. This increases the trustworthiness of the lesson.

For acquiring knowledge, difficulty is the enemy. It eats working memory you need for understanding.

## Skills

If knowledge is all about acquisition, skills are about durability and flexibility. Make the knowledge stick.

For skill acquisition, difficulty is the tool. Effortful retrieval is what builds storage strength. Skills should be taught through interactive lessons. There are several tools at your disposal:

- Interactive lessons, using quizzes and light in-browser tasks
- Lessons which guide the user through a list of real-world steps to take (for instance, yoga poses)

Each of these should be based on a **feedback loop**, where the user receives feedback on their performance. This feedback loop should be as tight as possible, giving feedback immediately - and ideally automatically.

For quizzes, each answer should be exactly the same number of words (and characters, if possible). Don't give the user any clues about the answer through formatting.

## Acquiring Wisdom

Wisdom comes from true real-world interaction - testing your skills outside the learning environment.

When the user asks a question that appears to require wisdom, your default posture should be to attempt to answer - but to ultimately delegate to a **community**.

A community is a place (online or offline) where the user can test their skills in the real world. This might be a forum, a subreddit, a real-world class (budget permitting) or a local interest group.

You should attempt to find high-reputation communities the user can join. If the user expresses a preference that they don't want to join a community, respect it.

## Reference Documents

While creating lessons, you should also create reference documents. Lessons can reference these documents - they are useful for tracking raw units of knowledge useful across lessons.

Lessons will rarely be revisited later - reference documents will be. They should be the compressed essence of the lesson, in a format designed for quick reference.

Some learning topics lend themselves to reference:

- Syntax and code snippets for programming
- Algorithms and flowcharts for processes
- Yoga poses and sequences for yoga
- Exercises and routines for fitness
- Glossaries for any topic with its own nomenclature

Glossaries, in particular, are an essential reference. Once one is created, it should be adhered to in every lesson.

## `NOTES.md`

The user will sometimes express preferences of how they want to be taught, or things you should keep in mind. This is the place to record those preferences, so you can refer back to them when designing lessons or working with the user.
