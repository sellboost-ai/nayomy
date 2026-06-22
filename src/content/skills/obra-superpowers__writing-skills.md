---
name: "writing-skills"
description_en: "Use when creating new skills, editing existing skills, or verifying skills work before deployment"
description_tr: "Yeni beceriler oluştururken, mevcut becerileri düzenlerken veya dağıtımdan önce becerileri doğrularken kullanın."
category: "Development"
repo: "obra/superpowers"
stars: 235495
url: "https://github.com/obra/superpowers/blob/HEAD/skills/writing-skills/SKILL.md"
path: "skills/writing-skills/SKILL.md"
is_collection: false
body_length: 26606
has_scripts: false
has_references: false
has_examples: true
related_files: ["anthropic-best-practices.md", "persuasion-principles.md", "render-graphs.js", "testing-skills-with-subagents.md"]
body_tr: |-
  # Yazma Becerileri
  
  ## Genel Bakış
  
  **Yazma becerisi, Test-Driven Development'ın süreç belgelerine uygulanmasıdır.**
  
  **Kişisel beceriler, runtime'ınızın skills dizininde yaşar** — yolunuzu bulmak için [claude-code-tools.md](../using-superpowers/references/claude-code-tools.md), [codex-tools.md](../using-superpowers/references/codex-tools.md), [copilot-tools.md](../using-superpowers/references/copilot-tools.md) veya [gemini-tools.md](../using-superpowers/references/gemini-tools.md) dosyalarına bakın. Codex, Copilot CLI ve Gemini CLI, `~/.agents/skills/` klasörünü çapraz-runtime takma adı olarak da tanıyor.
  
  Test senaryoları yazarsınız (subagentlarla baskı senaryoları), başarısız olmalarını izlersiniz (temel davranış), beceri yazarsınız (belgeleme), testlerin geçmesini izlersiniz (agentlar uyuyor) ve refactor edersiniz (açıkları kapatırsınız).
  
  **Temel ilke:** Bir agentin beceri olmadan başarısız olmasını izlemediyseniz, becerinin doğru şeyi öğretip öğretmediğini bilemezsiniz.
  
  **GEREKLI ARKA PLAN:** Bu beceriyi kullanmadan önce superpowers:test-driven-development'ı ANLAMALIsınız. O beceri temel RED-GREEN-REFACTOR döngüsünü tanımlar. Bu beceri TDD'yi belgelemeye uyarlar.
  
  **Resmi rehberlik:** Anthropic'in resmi beceri yazma en iyi uygulamaları için, anthropic-best-practices.md dosyasına bakın. Bu belge, bu beceriye odaklanan TDD yaklaşımını tamamlayan ek kalıplar ve yönergeler sağlar.
  
  ## Beceri Nedir?
  
  **Beceri**, kanıtlanmış teknikler, kalıplar veya araçlar için bir referans kılavuzudur. Beceriler, gelecekteki agentlerin etkili yaklaşımları bulmasına ve uygulamasına yardımcı olur.
  
  **Beceriler şunlardır:** Yeniden kullanılabilir teknikler, kalıplar, araçlar, referans kılavuzları
  
  **Beceriler DEĞILDIR:** Bir sorunu bir kez nasıl çözdüğünüze dair anlatılar
  
  ## TDD Beceriler İçin Haritalama
  
  | TDD Konsepti | Beceri Oluşturma |
  |-------------|----------------|
  | **Test senaryosu** | Subagentla baskı senaryosu |
  | **Production kodu** | Beceri belgesi (SKILL.md) |
  | **Test başarısız (RED)** | Beceri olmadan agent kuralı ihlal eder (temel) |
  | **Test başarılı (GREEN)** | Beceri mevcut olduğunda agent uyuyor |
  | **Refactor** | Uyumu korurken açıkları kapatın |
  | **Test'i önce yazın** | Beceri yazmadan ÖNCE temel senaryoyu çalıştırın |
  | **Başarısız olmasını izleyin** | Agent'ın tam olarak hangi haklı gösterişleri kullandığını belgelendirin |
  | **Minimal kod** | Beceriyi sadece o belirli ihlalları ele alan şekilde yazın |
  | **Başarılı olmasını izleyin** | Agent'ın şimdi uyduğunu doğrulayın |
  | **Refactor döngüsü** | Yeni haklı gösterişleri bul → kapat → yeniden doğrula |
  
  Tüm beceri oluşturma süreci RED-GREEN-REFACTOR'u takip eder.
  
  ## Beceri Ne Zaman Oluşturulur
  
  **Şu zaman oluşturun:**
  - Teknik size sezgisel olarak açık değildi
  - Bunu projeler arasında tekrar referans alırdınız
  - Kalıp geniş ölçüde uygulanır (projeye özgü değil)
  - Diğerleri fayda sağlardı
  
  **Şu durumlarda oluşturmayın:**
  - Tek seferlik çözümler
  - Başka yerlerde iyi belgelenmiş standart uygulamalar
  - Projeye özgü kurallar (bunları talimatlar dosyanıza koyun)
  - Mekanik kısıtlamalar (regex/doğrulama ile uygulanabilirse, otomatikleştirin — belgelemeyi yargı çağrıları için saklayın)
  
  ## Beceri Türleri
  
  ### Teknik
  İzlenecek adımlarla somut yöntem (condition-based-waiting, root-cause-tracing)
  
  ### Kalıp
  Sorunları düşünme şekli (flatten-with-flags, test-invariants)
  
  ### Referans
  API dokümanları, syntax kılavuzları, araç belgeleri (office docs)
  
  ## Dizin Yapısı
  
  ```
  skills/
    skill-name/
      SKILL.md              # Ana referans (gerekli)
      supporting-file.*     # Yalnızca gerekiyorsa
  ```
  
  **Düz namespace** - tüm beceriler bir aranabilir namespace'de
  
  **Ayrı dosyalar için:**
  1. **Ağır referans** (100+ satır) - API dokümanları, kapsamlı syntax
  2. **Yeniden kullanılabilir araçlar** - Betikler, yardımcı programlar, şablonlar
  
  **Satır içinde tutun:**
  - İlkeler ve konseptler
  - Kod kalıpları (< 50 satır)
  - Diğer her şey
  
  ## SKILL.md Yapısı
  
  **Frontmatter (YAML):**
  - İki gerekli alan: `name` ve `description` (tüm desteklenen alanlar için [agentskills.io/specification](https://agentskills.io/specification) bakın)
  - Maksimum 1024 karakter toplam
  - `name`: Sadece harfler, rakamlar ve tire kullanın (parantez, özel karakterler yok)
  - `description`: Üçüncü kişi, SADECE ne zaman kullanılacağını açıklar (NE yaptığını değil)
    - Tetikleme koşullarına odaklanmak için "Use when..." ile başlayın
    - Belirli semptomları, durumları ve bağlamları ekleyin
    - **BİR ZAMAN becerinin sürecini veya iş akışını özetlemeyin** (SDO bölümü nedenini açıklar)
    - Mümkünse 500 karakterin altında tutun
  
  ```markdown
  ---
  name: Skill-Name-With-Hyphens
  description: Use when [specific triggering conditions and symptoms]
  ---
  
  # Skill Name
  
  ## Overview
  Bu nedir? Temel ilke 1-2 cümlede.
  
  ## When to Use
  [Karar belirgin değilse küçük satır içi akış şeması]
  
  Semptomlar ve kullanım durumlarıyla madde listesi
  Ne zaman kullanmayın
  
  ## Core Pattern (teknikler/kalıplar için)
  Önce/sonra kod karşılaştırması
  
  ## Quick Reference
  Tarama için tablo veya madde işaretleri
  
  ## Implementation
  Basit kalıplar için satır içi kod
  Ağır referans veya yeniden kullanılabilir araçlar için dosyaya bağlantı
  
  ## Common Mistakes
  Neler yanlış gider + düzeltmeler
  
  ## Real-World Impact (isteğe bağlı)
  Somut sonuçlar
  ```
  
  ## Beceri Keşif Optimizasyonu (SDO)
  
  **Keşif için kritik:** Gelecekteki agentlerin becerilerinizi BULMASI gerekir
  
  ### 1. Zengin Tanım Alanı
  
  **Amaç:** Agentiniz, belirli bir görev için hangi becerileri yükleyeceğine karar vermek üzere tanımı okur. Cevapla: "Bu beceriyi şu anda mı okumalıyım?"
  
  **Format:** Tetikleme koşullarına odaklanmak için "Use when..." ile başlayın
  
  **KRITIK: Tanım = Ne Zaman Kullanılır, Beceri Ne Yapar DEĞİL**
  
  Açıklama SADECE tetikleme koşullarını açıklamalıdır. Becerinin sürecini veya iş akışını tanımda ÖZET HALINE GETİRMEYİN.
  
  **Neden bu önemli:** Testing, bir tanım becerinin iş akışını özetlediğinde, agentın tanımı takip edebileceğini (tam beceri içeriğini okuması yerine) ortaya çıkardı. "Görevler arasında kod gözden geçirmeli görevleri yürütme" diyen bir tanım, akış şemasında açıkça iki gözden geçirme gösterilse de (spec uyumluluğu sonra kod kalitesi), agentın BİR gözden geçirme yapmasına neden oldu.
  
  Tanım sadece "Geçerli oturumda bağımsız görevlerle uygulama planlarını yürütürken kullan" (iş akışı özeti yok) olarak değiştirildiğinde, agent doğru şekilde akış şemasını okudu ve iki aşamalı gözden geçirme sürecini takip etti.
  
  **Tuzak:** İş akışını özetleyen açıklamalar, agentlerin atacağı kısayollar oluşturur. Beceri gövdesi, agentlerin atladığı belgelendirme haline gelir.
  
  ```yaml
  # ❌ KÖTÜ: İş akışını özetler - agentlar bunu okumak yerine takip edebilir
  description: Use when executing plans - dispatches subagent per task with code review between tasks
  
  # ❌ KÖTÜ: Çok fazla süreç detayı
  description: Use for TDD - write test first, watch it fail, write minimal code, refactor
  
  # ✅ İYİ: Sadece tetikleme koşulları, iş akışı özeti yok
  description: Use when executing implementation plans with independent tasks in the current session
  
  # ✅ İYİ: Sadece tetikleme koşulları
  description: Use when implementing any feature or bugfix, before writing implementation code
  ```
  
  **İçerik:**
  - Somut tetikleyiciler, semptomlar ve bu becerinin uygulandığını işaret eden durumlar kullanın
  - *Sorunu* açıklayın (yarış koşulları, tutarsız davranış), *dile özgü semptomları değil* (setTimeout, sleep)
  - Tetikleyicileri teknoloji-agnostik tutun, beceri kendisi teknoloji-spesifik olmadıkça
  - Beceri teknoloji-spesifikse, bunu tetikleyicide açık hale getirin
  - Üçüncü kişi yazın (sistem istemiyine enjekte edilmiş)
  - **BİR ZAMAN becerinin sürecini veya iş akışını özetlemeyin**
  
  ```yaml
  # ❌ KÖTÜ: Çok soyut, muğlak, ne zaman kullanılacağını içermiyor
  description: For async testing
  
  # ❌ KÖTÜ: Birinci kişi
  description: I can help you with async tests when they're flaky
  
  # ❌ KÖTÜ: Teknolojiyi adlandırır ama beceri buna özgü değil
  description: Use when tests use setTimeout/sleep and are flaky
  
  # ✅ İYİ: "Use when" ile başlar, sorunu açıklar, iş akışı yok
  description: Use when tests have race conditions, timing dependencies, or pass/fail inconsistently
  
  # ✅ İYİ: Teknoloji-spesifik beceri açık tetikleyiciyle
  description: Use when using React Router and handling authentication redirects
  ```
  
  ### 2. Anahtar Kelime Kapsama
  
  Agentın arayabileceği sözcükleri kullanın:
  - Hata iletileri: "Hook timed out", "ENOTEMPTY", "race condition"
  - Semptomlar: "flaky", "hanging", "zombie", "pollution"
  - Eşanlamlar: "timeout/hang/freeze", "cleanup/teardown/afterEach"
  - Araçlar: Gerçek komutlar, kütüphane adları, dosya türleri
  
  ### 3. Açıklayıcı Adlandırma
  
  **Aktif ses, fiil-önce kullanın:**
  - ✅ `creating-skills` değil `skill-creation`
  - ✅ `condition-based-waiting` değil `async-test-helpers`
  
  ### 4. Token Verimliliği (Kritik)
  
  **Sorun:** getting-started ve sık referans alınan beceriler HER konuşmaya yüklenir. Her token sayılır.
  
  **Hedef sözcük sayıları:**
  - getting-started iş akışları: <150 sözcük her biri
  - Sık yüklenen beceriler: <200 sözcük toplam
  - Diğer beceriler: <500 sözcük (yine de kısa olun)
  
  **Teknikler:**
  
  **Ayrıntıları araç yardımına taşıyın:**
  ```bash
  # ❌ KÖTÜ: Tüm bayrakları SKILL.md'de belgelendir
  search-conversations supports --text, --both, --after DATE, --before DATE, --limit N
  
  # ✅ İYİ: --help'i referans alın
  search-conversations supports multiple modes and filters. Run --help for details.
  ```
  
  **Çapraz referansları kullanın:**
  ```markdown
  # ❌ KÖTÜ: İş akışı detaylarını tekrarla
  When searching, dispatch subagent with template...
  [20 satır tekrarlanmış talimatlar]
  
  # ✅ İYİ: Diğer beceriyi referans alın
  Always use subagents (50-100x context savings). REQUIRED: Use [other-skill-name] for workflow.
  ```
  
  **Örnekleri sıkıştırın:**
  ```markdown
  # ❌ KÖTÜ: Ayrıntılı örnek (42 sözcük)
  your human partner: "How did we handle authentication errors in React Router before?"
  You: I'll search past conversations for React Router authentication patterns.
  [Dispatch subagent with search query: "React Router authentication error handling 401"]
  
  # ✅ İYİ: Minimal örnek (20 sözcük)
  Partner: "How did we handle auth errors in React Router?"
  You: Searching...
  [Dispatch subagent → synthesis]
  ```
  
  **Fazlalığı ortadan kaldırın:**
  - Çapraz referans alınan beceriler yapılanları tekrarlamayın
  - Komuttan açık olan şeyi açıklamayın
  - Aynı kalıptan birden fazla örnek eklemeyin
  
  **Doğrulama:**
  ```bash
  wc -w skills/path/SKILL.md
  # getting-started iş akışları: <150 hedefle
  # Diğer sık yüklenen: <200 toplam hedefle
  ```
  
  **Ne yaptığınız veya temel fikir ile adlandırın:**
  - ✅ `condition-based-waiting` > `async-test-helpers`
  - ✅ `using-skills` değil `skill-usage`
  - ✅ `flatten-with-flags` > `data-structure-refactoring`
  - ✅ `root-cause-tracing` > `debugging-techniques`
  
  **Gerundler (-ing) süreçler için iyi çalışır:**
  - `creating-skills`, `testing-skills`, `debugging-with-logs`
  - Etkin, aldığınız eylemi tanımlar
  
  ### 5. Diğer Beceriler Arasında Çapraz Referans
  
  **Diğer beceriler referans alan belgeleme yazarken:**
  
  Beceri adını yalnızca, açık gereklilik işaretçileriyle kullanın:
  - ✅ İyi: `**REQUIRED SUB-SKILL:** Use superpowers:test-driven-development`
  - ✅ İyi: `**REQUIRED BACKGROUND:** You MUST understand superpowers:systematic-debugging`
  - ❌ Kötü: `See skills/testing/test-driven-development` (gerekli olup olmadığı belirsiz)
  - ❌ Kötü: `@skills/testing/test-driven-development/SKILL.md` (zorla yükler, bağlamı tüketir)
  
  **Neden @ bağlantıları yok:** `@` sözdizimi dosyaları hemen yükler, ihtiyaç duyulmadan önce 200k+ bağlamı tüketir.
  
  ## Akış Şeması Kullanımı
  
  ```dot
  digraph when_flowchart {
      "Need to show information?" [shape=diamond];
      "Decision where I might go wrong?" [shape=diamond];
      "Use markdown" [shape=box];
      "Small inline flowchart" [shape=box];
  
      "Need to show information?" -> "Decision where I might go wrong?" [label="yes"];
      "Decision where I might go wrong?" -> "Small inline flowchart" [label="yes"];
      "Decision where I might go wrong?" -> "Use markdown" [label="no"];
  }
  ```
  
  **Akış şemaları SADECE şunlar için kullanın:**
  - Belirgin olmayan karar noktaları
  - Erken durdurabildiğiniz süreç döngüleri
  - "A vs B'yi ne zaman kullanın" kararları
  
  **Akış şemaları ASLA şunlar için kullanmayın:**
  - Referans malzemesi → Tablolar, listeler
  - Kod örnekleri → Markdown blokları
  - Doğrusal talimatlar → Numaralı listeler
  - Anlamlandırılmış etiketler olmayan etiketler (step1, helper2)
  
  Bu dizindeki `graphviz-conventions.dot` dosyasına graphviz stil kuralları için bakın.
  
  **İnsan ortağınız için görselleştirme:** Bir becerinin akış şemalarını SVG'ye işlemek için bu dizindeki `render-graphs.js` dosyasını kullanın:
  ```bash
  ./render-graphs.js ../some-skill           # Her diyagram ayrı
  ./render-graphs.js ../some-skill --combine # Tüm diyagramlar bir SVG'de
  ```
  
  ## Kod Örnekleri
  
  **Bir mükemmel örnek, birçok ortadörtü örneğinden daha iyi**
  
  En ilgili dili seçin:
  - Testing teknikler → TypeScript/JavaScript
  - Sistem debugging → Shell/Python
  - Veri işleme → Python
  
  **İyi örnek:**
  - Tamamen ve çalıştırılabilir
  - Neden açıklayan iyi yorum
  - Gerçek senaryodan
  - Kalıbı açıkça gösterir
  - Uyarlamaya hazır (genel şablon değil)
  
  **Şunları yapmayın:**
  - 5+ dilde uygula
  - Doldurmak-kendilik boş şablonlar oluştur
  - Uydurma örnekler yaz
  
  Portlama konusunda iyi olduğunuz için - bir harika örnek yeterli.
  
  ## Dosya Organizasyonu
  
  ### Bağımsız Beceri
  ```
  defense-in-depth/
    SKILL.md    # Her şey satır içi
  ```
  Ne zaman: Tüm içerik uyduğunda, ağır referansa ihtiyaç yokken
  
  ### Yeniden Kullanılabilir Araçla Beceri
  ```
  condition-based-waiting/
    SKILL.md    # Genel bakış + kalıplar
    example.ts  # Uyarlanacak çalışan yardımcı programlar
  ```
  Ne zaman: Araç yeniden kullanılabilir kod olduğunda, sadece anlatı değilken
  
  ### Ağır Referansla Beceri
  ```
  pptx/
    SKILL.md       # Genel bakış + iş akışları
    pptxgenjs.md   # 600 satır API referansı
    ooxml.md       # 500 satır XML yapısı
    scripts/       # Çalıştırılabilir araçlar
  ```
  Ne zaman: Referans malzemesi satır içi için çok büyükken
  
  ## Demir Kural (TDD ile Aynı)
  
  ```
  BAŞARILI BİR TEST OLMADAN BECERİ YOK
  ```
  
  Bu YENİ beceriler ve MEVCUT beceriler için DÜZENLEMELERİ için geçerli.
  
  Beceriyi testing olmadan yazın? Silin. Baştan başlayın.
  Beceriyi test olmadan düzenleyin? Aynı ihlal.
  
  **İstisnalar yok:**
  - "Basit eklemeler" için değil
  - "Sadece bir bölüm ekleme" için değil
  - "Belgelendirme güncellemeleri" için değil
  - Test edilmemiş değişiklikleri "referans" olarak tutmayın
  - Testleri çalıştırırken "uyarlamayın"
  - Sil, sil demektir
  
  **GEREKLI ARKA PLAN:** superpowers:test-driven-development becerisi bunun neden önemli olduğunu açıklar. Aynı ilkeler belgelendirmeye de uygulanır.
  
  ## Tüm Beceri Türlerini Testing
  
  Farklı beceri türleri farklı test yaklaşımları gerektirir:
  
  ### Disiplin Uygulayan Beceriler (kurallar/gereklilikler)
  
  **Örnekler:** TDD, verification-before-completion, designing-before-coding
  
  **Test edin:**
  - Akademik sorular: Kuralları anlıyorlar mı?
  - Baskı senaryoları: Baskı altında uyuyor mu?
  - Birden fazla baskı birleştirilmiş: zaman + batık maliyet + yorgunluk
  - Haklı gösterişleri tanımla ve açık karşıtlar ekle
  
  **Başarı kriterleri:** Agent maksimum baskı altında kural takip eder
  
  ### Teknik Beceriler (nasıl yapılır rehberleri)
  
  **Örnekler:** condition-based-waiting, root-cause-tracing, defensive-programming
  
  **Test edin:**
  - Uygulama senaryoları: Tekniği doğru uygulaybilir mi?
  - Varyasyon senaryoları: Kenar durumları ele alıyor mu?
  - Eksik bilgi testleri: Talimatlar boşluk var mı?
  
  **Başarı kriterleri:** Agent tekniği başarıyla yeni senaryoya uygular
  
  ### Kalıp Beceriler (zihinsel modeller)
  
  **Örnekler:** reducing-complexity, information-hiding konseptleri
  
  **Test edin:**
  - Tanıma senaryoları: Kalıp ne zaman uygulanır tanırlar mı?
  - Uygulama senaryoları: Zihinsel modeli kullanabilir mi?
  - Karşı-örnekler: Ne zaman KULLANMAYACAKLARını biliyorlar mı?
  
  **Başarı kriterleri:** Agent doğru şekilde ne zaman/nasıl uygulanacağını tanımlar
  
  ### Referans Beceriler (belgelendirme/API'ler)
  
  **Örnekler:** API belgelendirmesi, komut referansları, kütüphane kılavuzları
  
  **Test edin:**
  - Alma senaryoları: Doğru bilgiyi bulabilir mi?
  - Uygulama senaryoları: Bulduğunu doğru uygulaybilir mi?
  - Boşluk testing: Yaygın kullanım durumları kapsanıyor mu?
  
  **Başarı kriterleri:** Agent referans bilgisini bulur ve doğru uygulanır
  
  ## Testing'i Atlama İçin Yaygın Haklı Gösterişler
  
  | Mazeret | Gerçek |
  |--------|--------|
  | "Beceri açıkça anlaşılır" | Size açık ≠ diğer agentlara açık. Test et. |
  | "Sadece bir referans" | Referanslar boşluk ve belirsiz bölümlere sahip olabilir. Almayı test et. |
  | "Testing aşırı" | Test edilmemiş beceriler sorunlu olur. Her zaman. 15 dakika testing saatleri tasarrufu sağlar. |
  | "Sorunlar ortaya çıkarsa test ederim" | Sorunlar = agentlar beceri kullanamaz. KULLANMADAN ÖNCE test et. |
  | "Çok sıkıcı test etmek" | Testing yapmak, production'da kötü beceriyi debug etmekten daha az sıkıcı. |
  | "Bunun iyi olduğundan eminiz" | Aşırı güven sorunları garantiler. Yine de test et. |
  | "Akademik gözden geçirme yeterli" | Okuma ≠ kullanma. Uygulama senaryoları test et. |
  | "Test etmeye zaman yok" | Test edilmemiş beceriyi dağıt = daha sonra düzeltmek için zaman israf. |
  
  **Tüm bunlar şu anlama gelir: Dağıtmadan önce test et. İstisnalar yok.**
  
  ## Hatayı Forma Eşle
  
  Rehberlik yazmadan önce, temel hatayı sınıflandırın. Bir başarısızlık türünü mermilemek olan form, ölçülebilir şekilde başka bir türde geri tepmez.
  
  | Temel başarısızlık | Doğru form | Yanlış form |
  |---|---|---|
  | Baskı altında bir kuralı atlar/ihlal eder (daha iyi bilir, yine de yapar) | Yasaklama + haklı gösterişler tablosu + kırmızı bayraklar (aşağıdaki Bulletproofing bakın) | Yumuşak rehberlik ("tercih et...", "düşün...") |
  | Uyuyor ama çıktı yanlış şekildedir (şişkin istem, gömülü karar, tekrarlanan spec) | Pozitif tarif veya anlaşma: çıktının NE OLDUĞUNU açıklayın — parçaları, sırayla | Yasaklama listesi ("tekrarlama", "hiçbir zaman anlatma") |
  | Zaten ürettikleri şeyden gerekli bir öğeyi atlar | Yapısal: GEREKLI alan veya doldurdukları şablondaki yuvası | Şablon yakınında düzyazı hatırlatıcılar |
  | Davranış bir koşula bağlı olmalı | "Eğer kısa özet varsa, referans al" gözlenebilir bir yükleme ("koşul varsa...") | Koşulsuz kural + istisna cümleleri |
  
  **Yasaklamalar neden şekillendirme sorunlarıyla geri tepmez:** rekabet eden bir teşvik altında ("istemi kendine yetecek yap"), agentlar "X yapma" ile görüşür. dispatch-prompt rehberliğine ilişkin head-to-head sözcük testlerinde, yasaklama kolu açıkça istenmemiş içeriğin daha fazlasını üretti (tam ayrılmış dağılımlar) ve hiçbir rehberlik kontrol bile elden daha kötü eğilim gösterdi — kendi durumunuzda mikro-test'i varsaymayın, ama varsayılan olarak yasaklamaya asla uzanmayın. Tarif çıktıyı yapısına göre yapıştırır: belirtilen şekille eşleşir veya eşleşmez.
  
  **Seçtiğiniz hangi form olursa olsun kurallar:**
  - **Nüans cümleleri yok.** "Önemli olmadıkça X yapma" görüşü yeniden açar — kazanan tarife tek bir nüans cümlesi eklenmesi, tutarlıdan gürültülüye düşürdü aynı sözcük testlerinde. Gerçek istisnayı gözlenebilir bir yüklemeyle şartlı olarak ifade edin.
  - **İstisna cümleleri kapsam değildir.** "Bu sınır kod blokları için geçerli değildir" hala kod bloklarını bastırır. Çıktının bir parçası muaf olmalıysa, kural buna ulaşamayacak şekilde yeniden yapılandırın.
  
  ## Becerileri Haklı Gösterişlere Karşı Bulletproofing
  
  Disiplini uygulayan beceriler (TDD gibi) haklı gösterilişlere karşı direnç gerektirir. Agentlar zekidir ve baskı altında açıklar bulacaklar.
  
  **Kapsam:** Bu araç takımı disiplin başarısızlıkları içindir — bir kuralı bilen ve baskı altında atlayan bir agent. Yanlış şekilde çıktı veya atlanmış öğeler için, yasaklama tabanlı bulletproofing geri tepmez; yerine Match the Form to the Failure'daki formları kullanın.
  
  **Psikoloji notu:** Neden ikna teknikleri çalıştığını anlamak, bunları sistematik olarak uygulamanıza yardımcı olur. İkna ilkeleri hakkında araştırma temeli (Cialdini, 2021; Meincke et al., 2025) için persuasion-principles.md bakın; otorite, bağlılık, kıtlık, sosyal kanıt ve birlik ilkeleri.
  
  ### Her Açığı Açıkça Kapatın
  
  Kuralı belirtmeyin - belirli workaround'ları yasaklayın:
  
  <Bad>
  ```markdown
  Test önce kod yaz? Sil.
  ```
  </Bad>
  
  <Good>
  ```markdown
  Test önce kod yaz? Sil. Baştan başla.
  
  **İstisnalar yok:**
  - "Referans" olarak tutma
  - Testleri yazarken "uyarlama"
  - Buna bakma
  - Sil, sil demektir
  ```
  </Good>
  
  ### "Ruh vs Harf" Argümanlarını Ele Alın
  
  Temel ilkeyi erken ekleyin:
  
  ```markdown
  **Kuralların harfini ihlal etmek, kuralların ruhunu ihlal etmektir.**
  ```
  
  Bu, tüm "Ruhunu takip ediyorum" haklı gösterişler sınıfını kesintiye uğratır.
  
  ### Haklı Gösterişler Tablosu Oluştur
  
  Temel testingden haklı gösterilişleri yakala (Testing bölümü altında bakın). Her mazeret agentler yapsa tabloya gider:
  
  ```markdown
  | Mazeret | Gerçek |
  |--------|--------|
  | "Çok basit test etmek için" | Basit kod kırılır. Test 30 saniye alır. |
  | "Sonra test ederim" | Sonra testler = "bunu ne yapıyor?" Önce testler = "bunu ne yapmalı?" |
  | "Sonra testler aynı hedeflere ulaşır" | Sonra testler = "bu ne yapar?" Önce testler = "ne yapmalı?" |
  ```
  
  ### Kırmızı Bayraklar Listesi Oluştur
  
  Agentlerin haklı gösterişlerini kendi kendine kontrol ederken durmasını kolaylaştırın:
  
  ```markdown
  ## Red Flags - STOP and Start Over
  
  - Test önce kod
  - "Zaten elle test ettim"
  - "Sonra testler aynı amaca ulaşır"
  - "Bu ruh hakkında değil ritual"
  - "Bu farklı çünkü..."
  
  **Tüm bunlar şu anlama gelir: Kodu sil. TDD ile baştan başla.**
  ```
  
  ### SDO'yu İhlal Semptomları İçin Güncelleyin
  
  Açıklamaya ekle: kuralı İHLAL ETMEK ÜZERESİYKEN semptomlar:
  
  ```yaml
  description: use when implementing any feature or bugfix, before writing implementation code
  ```
  
  ## Beceriler İçin RED-GREEN-REFACTOR
  
  TDD döngüsünü takip edin:
  
  ### RED: Başarısız Test Yaz (Temel)
  
  Beceri OLMADAN subagentla baskı senaryosu çalıştırın. Tam davranışı belgelendirin:
  - Ne seçimler yaptı?
  - Hangi haklı gösterişleri kullandı (kelimesiyle)?
  - Hangi baskılar ihlalleri tetikledi?
  
  Bu "testin başarısız olmasını izle" — beceriyi yazmadan ÖNCE agentlerin doğal olarak ne yaptığını görmelisiniz.
  
  ### GREEN: Minimal Beceri Yaz
  
  Beceriyi bu belirli haklı gösterişleri ele alan şekilde yazın. Varsayımsal durumlar için ekstra içerik eklemeyin.
  
  Beceri İLE aynı senaryoları çalıştırın. Agent şimdi uymalı.
  
  ### REFACTOR: Açıkları Kapatın
  
  Agent yeni haklı gösterişi buldu? Açık karşıt ekle. Bulletproof olana kadar yeniden test et.
  
  ### Tam Senaryoları Önce Sözcük İçinde Mikro-Test Et
  
  Tam baskı-senaryo çalıştırmaları son kapıdır, ancak yineleme başına yavaş ve pahalıdır. Sözcüğün kendisini ilk önce mikro-testlerle doğrulayın:
  
  1. **Çağrı başına bir yeni-bağlam örneği** — ham API çağrısı, veya tek-vuruşlama subagent API erişiminiz yoksa. Sistem istemi = rehberliğin yaşayacağı gerçekçi bağlam (tecrit halinde değil, tam beceri veya istem şablonu); kullanıcı iletisi = başarısızlığı baştan çıkaran görev.
  2. **Her zaman bir no-rehberlik kontrol ekle.** Kontrol başarısızlığı sergilemediyse, düzeltecek bir şey yoktur — dur, rehberlik yazmayın.
  3. **Varyant başına 5+ tekrar.** Tek örnekler yalan söyler.
  4. **Her işaretlenmiş eşleşmeyi elle oku.** Programlı olarak skorla isterseniz, ama şablon yankıları ve alıntı karşıtlar, hitler gibi davranırlar; sadece otomatik sayılar hem başarısızlığı hem başarıyı abartır.
  5. **Varyans bir metrik.** Rehberlik indiğinde, tekrarlar aynı şekle birleşir. Beş tekrar arasında beş farklı yorum, sözcüğün bağlayıcı olmadığı anlamına gelir — bağlamı sıkılaştırın kelimeler eklemeden önce.
  
  Mikro-testler sözcüğü doğrula; disiplin becerileri için tam baskı senaryoları yerine koymaz.
  
  **Testing metodolojisi:** Tam testing metodolojisi için [testing-skills-with-subagents.md](testing-skills-with-subagents.md) dosyasına bakın:
  - Baskı senaryoları nasıl yazılır
  - Baskı türleri (zaman, batık maliyet, otorite, yorgunluk)
  - Sistematik olarak açıkları tıkama
  - Meta-testing teknikleri
  
  ## Anti-Kalıplar
  
  ### ❌ Anlatı Örneği
  "Seans 2025-10-03'te, boş projectDir'in neden olduğunu bulduk..."
  **Neden kötü:** Çok spesifik, yeniden kullanılamaz
  
  ### ❌ Çok-Dil Sulandırması
  example-js.js, example-py.py, example-go.go
  **Neden kötü:** Ortadörtü kalite, bakım yükü
  
  ### ❌ Akış Şemalarında Kod
  ```dot
  step1 [label="import fs"];
  step2 [label="read file"];
  ```
  **Neden kötü:** Kopyalaşalamaz, okumak zor
  
  ### ❌ Genel Etiketler
  helper1, helper2, step3, pattern4
  **Neden kötü:** Etiketler anlamlandırılmış anlama sahip olmalı
  
  ## STOP: Sonraki Beceriye Geçmeden Önce
  
  **HERHANGİ beceri yazdıktan sonra, dağıtım sürecini tamamlamak için DURMALSINIZ.**
  
  **YAPMAYIN:**
  - Birden fazla beceriyi her birini test etmeden toplu olarak oluştur
  - Geçerli beceri doğrulanmadan sonraki beceriye geç
  - "Toplu islem daha etkili" olduğu için testing'i atla
  
  **Aşağıdaki dağıtım kontrol listesi HER BECERİ için ZORUNLUDUR.**
  
  Test edilmemiş becerileri dağıtmak = test edilmemiş kod dağıtmak. Kalite standartlarının ihlali.
  
  ## Beceri Oluşturma Kontrol Listesi (TDD Uyarlanmış)
  
  **ÖNEMLİ: Aşağıdaki kontrol listesi ÖĞESİ her biri için bir todo oluşturun.**
  
  **RED Fazı - Başarısız Test Yaz:**
  - [ ] Baskı senaryoları oluştur (disiplin beceriler için 3+ birleştirilmiş baskı)
  - [ ] Senaryoları beceri OLMADAN çalıştır - temel davranışı kelimesiyle belgelendir
  - [ ] Haklı gösterişler/başarısızlıklar içinde kalıpları tanımla
  
  **GREEN Fazı - Minimal Beceri Yaz:**
  - [ ] Ad sadece harfler, rakamlar, tire kullanır (parantez/özel karakterler yok)
  - [ ] Gerekli `name` ve `description` alanlarıyla YAML frontmatter (maksimum 1024 karakter; [spec](https://agentskills.io/specification) bak)
  - [ ] Açıklama "Use when..." ile başlar ve spesifik tetikleyiciler/semptomlar içerir
  - [ ] Açıklama üçüncü kişide yazılı
  - [ ] Anahtar kelimeler arama için (hatalar, semptomlar, araçlar)
  - [ ] Temel ilkesiyle net genel bakış
  - [ ] RED'de tanımlanan spesifik temel başarısızlıkları ele al
  - [ ] Rehberlik formu başarısızlık türüyle eşleş (Form'u Başarısızlığa Eşle bakın)
  - [ ] Davranış-şekillendirme rehberliği için: sözcük mikro-test'i no-rehberlik kontrol karşısında (5+ tekrar, elle okunan her işaretlenmiş eşleşme) — saf referans beceriler için N/A
  - [ ] Kod satır içi VEYA ayrı dosyaya bağlantı
  - [ ] Bir harika örnek (çok-dil değil)
  - [ ] Beceri İLE senaryoları çalıştır - agentlarin şimdi uyduğunu doğrula
  
  **REFACTOR Fazı - Açıkları Kapatın:**
  - [ ] Testing'den YENİ haklı gösterişleri tanımla
  - [ ] Açık karşıtlar ekle (disiplin becerisi ise)
  - [ ] Tüm test yinelemeleri yapıdan haklı gösterişler tablosu oluştur
  - [ ] Kırmızı bayraklar listesi oluştur
  - [ ] Bulletproof olana kadar yeniden test et
  
  **Kalite Kontrolleri:**
  - [ ] Küçük akış şeması sadece karar belirgin değilse
  - [ ] Hızlı referans tablosu
  - [ ] Yaygın hatalar bölümü
  - [ ] Anlatı hikayeleri yok
  - [ ] Destekleyici dosyalar sadece araçlar veya ağır referans için
  
  **Dağıtım:**
  - [ ] Beceriyi git'e ve çatalına commit et (yapılandırılmışsa)
  - [ ] PR aracılığıyla geri katkıyı düşün (geniş kullanışlı ise)
  
  ## Keşif İş Akışı
  
  Gelecekteki agentler becerilerinizi nasıl bulur:
  
  1. **Sorunla karşılaşır** ("testler flakydir")
  2. **Becerileri arar** (açıklamaları grep eder, kategorilere bakar)
  3. **BECERİ bulur** (açıklama eşleşir)
  4. **Genel bakışı tarar** (bu uygun mu?)
  5. **Kalıpları okur** (hızlı referans tablosu)
  6. **Örneği yükler** (sadece uygulama sırasında)
  
  **Bu akışı optimize edin** - aranabilir terimleri erken ve sık kullanın.
  
  ## Sonuç
  
  **Becerileri oluşturmak, süreç belgelendirmesi İÇİN TDD'YE AYIRDIR.**
  
  Aynı Demir Kural: Başarısız test olmadan beceri yok.
  Aynı döngü: RED (temel) → GREEN (beceri yaz) → REFACTOR (açıkları kapat).
  Aynı faydalar: Daha iyi kalite, daha az sürprizler, bulletproof sonuçlar.
  
  TDD'yi kod için takip ederseniz, becerileri takip edin. Belgelendirmeye uygulanmış aynı disiplindir.
---

# Writing Skills

## Overview

**Writing skills IS Test-Driven Development applied to process documentation.**

**Personal skills live in your runtime's skills directory** — see [claude-code-tools.md](../using-superpowers/references/claude-code-tools.md), [codex-tools.md](../using-superpowers/references/codex-tools.md), [copilot-tools.md](../using-superpowers/references/copilot-tools.md), or [gemini-tools.md](../using-superpowers/references/gemini-tools.md) for the path on your runtime. Codex, Copilot CLI, and Gemini CLI all also recognize `~/.agents/skills/` as a cross-runtime alias.

You write test cases (pressure scenarios with subagents), watch them fail (baseline behavior), write the skill (documentation), watch tests pass (agents comply), and refactor (close loopholes).

**Core principle:** If you didn't watch an agent fail without the skill, you don't know if the skill teaches the right thing.

**REQUIRED BACKGROUND:** You MUST understand superpowers:test-driven-development before using this skill. That skill defines the fundamental RED-GREEN-REFACTOR cycle. This skill adapts TDD to documentation.

**Official guidance:** For Anthropic's official skill authoring best practices, see anthropic-best-practices.md. This document provides additional patterns and guidelines that complement the TDD-focused approach in this skill.

## What is a Skill?

A **skill** is a reference guide for proven techniques, patterns, or tools. Skills help future agents find and apply effective approaches.

**Skills are:** Reusable techniques, patterns, tools, reference guides

**Skills are NOT:** Narratives about how you solved a problem once

## TDD Mapping for Skills

| TDD Concept | Skill Creation |
|-------------|----------------|
| **Test case** | Pressure scenario with subagent |
| **Production code** | Skill document (SKILL.md) |
| **Test fails (RED)** | Agent violates rule without skill (baseline) |
| **Test passes (GREEN)** | Agent complies with skill present |
| **Refactor** | Close loopholes while maintaining compliance |
| **Write test first** | Run baseline scenario BEFORE writing skill |
| **Watch it fail** | Document exact rationalizations agent uses |
| **Minimal code** | Write skill addressing those specific violations |
| **Watch it pass** | Verify agent now complies |
| **Refactor cycle** | Find new rationalizations → plug → re-verify |

The entire skill creation process follows RED-GREEN-REFACTOR.

## When to Create a Skill

**Create when:**
- Technique wasn't intuitively obvious to you
- You'd reference this again across projects
- Pattern applies broadly (not project-specific)
- Others would benefit

**Don't create for:**
- One-off solutions
- Standard practices well-documented elsewhere
- Project-specific conventions (put in your instructions file)
- Mechanical constraints (if it's enforceable with regex/validation, automate it—save documentation for judgment calls)

## Skill Types

### Technique
Concrete method with steps to follow (condition-based-waiting, root-cause-tracing)

### Pattern
Way of thinking about problems (flatten-with-flags, test-invariants)

### Reference
API docs, syntax guides, tool documentation (office docs)

## Directory Structure


```
skills/
  skill-name/
    SKILL.md              # Main reference (required)
    supporting-file.*     # Only if needed
```

**Flat namespace** - all skills in one searchable namespace

**Separate files for:**
1. **Heavy reference** (100+ lines) - API docs, comprehensive syntax
2. **Reusable tools** - Scripts, utilities, templates

**Keep inline:**
- Principles and concepts
- Code patterns (< 50 lines)
- Everything else

## SKILL.md Structure

**Frontmatter (YAML):**
- Two required fields: `name` and `description` (see [agentskills.io/specification](https://agentskills.io/specification) for all supported fields)
- Max 1024 characters total
- `name`: Use letters, numbers, and hyphens only (no parentheses, special chars)
- `description`: Third-person, describes ONLY when to use (NOT what it does)
  - Start with "Use when..." to focus on triggering conditions
  - Include specific symptoms, situations, and contexts
  - **NEVER summarize the skill's process or workflow** (see SDO section for why)
  - Keep under 500 characters if possible

```markdown
---
name: Skill-Name-With-Hyphens
description: Use when [specific triggering conditions and symptoms]
---

# Skill Name

## Overview
What is this? Core principle in 1-2 sentences.

## When to Use
[Small inline flowchart IF decision non-obvious]

Bullet list with SYMPTOMS and use cases
When NOT to use

## Core Pattern (for techniques/patterns)
Before/after code comparison

## Quick Reference
Table or bullets for scanning common operations

## Implementation
Inline code for simple patterns
Link to file for heavy reference or reusable tools

## Common Mistakes
What goes wrong + fixes

## Real-World Impact (optional)
Concrete results
```


## Skill Discovery Optimization (SDO)

**Critical for discovery:** Future agents need to FIND your skill

### 1. Rich Description Field

**Purpose:** Your agent reads the description to decide which skills to load for a given task. Make it answer: "Should I read this skill right now?"

**Format:** Start with "Use when..." to focus on triggering conditions

**CRITICAL: Description = When to Use, NOT What the Skill Does**

The description should ONLY describe triggering conditions. Do NOT summarize the skill's process or workflow in the description.

**Why this matters:** Testing revealed that when a description summarizes the skill's workflow, an agent may follow the description instead of reading the full skill content. A description saying "code review between tasks" caused an agent to do ONE review, even though the skill's flowchart clearly showed TWO reviews (spec compliance then code quality).

When the description was changed to just "Use when executing implementation plans with independent tasks" (no workflow summary), the agent correctly read the flowchart and followed the two-stage review process.

**The trap:** Descriptions that summarize workflow create a shortcut agents will take. The skill body becomes documentation agents skip.

```yaml
# ❌ BAD: Summarizes workflow - agents may follow this instead of reading skill
description: Use when executing plans - dispatches subagent per task with code review between tasks

# ❌ BAD: Too much process detail
description: Use for TDD - write test first, watch it fail, write minimal code, refactor

# ✅ GOOD: Just triggering conditions, no workflow summary
description: Use when executing implementation plans with independent tasks in the current session

# ✅ GOOD: Triggering conditions only
description: Use when implementing any feature or bugfix, before writing implementation code
```

**Content:**
- Use concrete triggers, symptoms, and situations that signal this skill applies
- Describe the *problem* (race conditions, inconsistent behavior) not *language-specific symptoms* (setTimeout, sleep)
- Keep triggers technology-agnostic unless the skill itself is technology-specific
- If skill is technology-specific, make that explicit in the trigger
- Write in third person (injected into system prompt)
- **NEVER summarize the skill's process or workflow**

```yaml
# ❌ BAD: Too abstract, vague, doesn't include when to use
description: For async testing

# ❌ BAD: First person
description: I can help you with async tests when they're flaky

# ❌ BAD: Mentions technology but skill isn't specific to it
description: Use when tests use setTimeout/sleep and are flaky

# ✅ GOOD: Starts with "Use when", describes problem, no workflow
description: Use when tests have race conditions, timing dependencies, or pass/fail inconsistently

# ✅ GOOD: Technology-specific skill with explicit trigger
description: Use when using React Router and handling authentication redirects
```

### 2. Keyword Coverage

Use words an agent would search for:
- Error messages: "Hook timed out", "ENOTEMPTY", "race condition"
- Symptoms: "flaky", "hanging", "zombie", "pollution"
- Synonyms: "timeout/hang/freeze", "cleanup/teardown/afterEach"
- Tools: Actual commands, library names, file types

### 3. Descriptive Naming

**Use active voice, verb-first:**
- ✅ `creating-skills` not `skill-creation`
- ✅ `condition-based-waiting` not `async-test-helpers`

### 4. Token Efficiency (Critical)

**Problem:** getting-started and frequently-referenced skills load into EVERY conversation. Every token counts.

**Target word counts:**
- getting-started workflows: <150 words each
- Frequently-loaded skills: <200 words total
- Other skills: <500 words (still be concise)

**Techniques:**

**Move details to tool help:**
```bash
# ❌ BAD: Document all flags in SKILL.md
search-conversations supports --text, --both, --after DATE, --before DATE, --limit N

# ✅ GOOD: Reference --help
search-conversations supports multiple modes and filters. Run --help for details.
```

**Use cross-references:**
```markdown
# ❌ BAD: Repeat workflow details
When searching, dispatch subagent with template...
[20 lines of repeated instructions]

# ✅ GOOD: Reference other skill
Always use subagents (50-100x context savings). REQUIRED: Use [other-skill-name] for workflow.
```

**Compress examples:**
```markdown
# ❌ BAD: Verbose example (42 words)
your human partner: "How did we handle authentication errors in React Router before?"
You: I'll search past conversations for React Router authentication patterns.
[Dispatch subagent with search query: "React Router authentication error handling 401"]

# ✅ GOOD: Minimal example (20 words)
Partner: "How did we handle auth errors in React Router?"
You: Searching...
[Dispatch subagent → synthesis]
```

**Eliminate redundancy:**
- Don't repeat what's in cross-referenced skills
- Don't explain what's obvious from command
- Don't include multiple examples of same pattern

**Verification:**
```bash
wc -w skills/path/SKILL.md
# getting-started workflows: aim for <150 each
# Other frequently-loaded: aim for <200 total
```

**Name by what you DO or core insight:**
- ✅ `condition-based-waiting` > `async-test-helpers`
- ✅ `using-skills` not `skill-usage`
- ✅ `flatten-with-flags` > `data-structure-refactoring`
- ✅ `root-cause-tracing` > `debugging-techniques`

**Gerunds (-ing) work well for processes:**
- `creating-skills`, `testing-skills`, `debugging-with-logs`
- Active, describes the action you're taking

### 5. Cross-Referencing Other Skills

**When writing documentation that references other skills:**

Use skill name only, with explicit requirement markers:
- ✅ Good: `**REQUIRED SUB-SKILL:** Use superpowers:test-driven-development`
- ✅ Good: `**REQUIRED BACKGROUND:** You MUST understand superpowers:systematic-debugging`
- ❌ Bad: `See skills/testing/test-driven-development` (unclear if required)
- ❌ Bad: `@skills/testing/test-driven-development/SKILL.md` (force-loads, burns context)

**Why no @ links:** `@` syntax force-loads files immediately, consuming 200k+ context before you need them.

## Flowchart Usage

```dot
digraph when_flowchart {
    "Need to show information?" [shape=diamond];
    "Decision where I might go wrong?" [shape=diamond];
    "Use markdown" [shape=box];
    "Small inline flowchart" [shape=box];

    "Need to show information?" -> "Decision where I might go wrong?" [label="yes"];
    "Decision where I might go wrong?" -> "Small inline flowchart" [label="yes"];
    "Decision where I might go wrong?" -> "Use markdown" [label="no"];
}
```

**Use flowcharts ONLY for:**
- Non-obvious decision points
- Process loops where you might stop too early
- "When to use A vs B" decisions

**Never use flowcharts for:**
- Reference material → Tables, lists
- Code examples → Markdown blocks
- Linear instructions → Numbered lists
- Labels without semantic meaning (step1, helper2)

See `graphviz-conventions.dot` in this directory for graphviz style rules.

**Visualizing for your human partner:** Use `render-graphs.js` in this directory to render a skill's flowcharts to SVG:
```bash
./render-graphs.js ../some-skill           # Each diagram separately
./render-graphs.js ../some-skill --combine # All diagrams in one SVG
```

## Code Examples

**One excellent example beats many mediocre ones**

Choose most relevant language:
- Testing techniques → TypeScript/JavaScript
- System debugging → Shell/Python
- Data processing → Python

**Good example:**
- Complete and runnable
- Well-commented explaining WHY
- From real scenario
- Shows pattern clearly
- Ready to adapt (not generic template)

**Don't:**
- Implement in 5+ languages
- Create fill-in-the-blank templates
- Write contrived examples

You're good at porting - one great example is enough.

## File Organization

### Self-Contained Skill
```
defense-in-depth/
  SKILL.md    # Everything inline
```
When: All content fits, no heavy reference needed

### Skill with Reusable Tool
```
condition-based-waiting/
  SKILL.md    # Overview + patterns
  example.ts  # Working helpers to adapt
```
When: Tool is reusable code, not just narrative

### Skill with Heavy Reference
```
pptx/
  SKILL.md       # Overview + workflows
  pptxgenjs.md   # 600 lines API reference
  ooxml.md       # 500 lines XML structure
  scripts/       # Executable tools
```
When: Reference material too large for inline

## The Iron Law (Same as TDD)

```
NO SKILL WITHOUT A FAILING TEST FIRST
```

This applies to NEW skills AND EDITS to existing skills.

Write skill before testing? Delete it. Start over.
Edit skill without testing? Same violation.

**No exceptions:**
- Not for "simple additions"
- Not for "just adding a section"
- Not for "documentation updates"
- Don't keep untested changes as "reference"
- Don't "adapt" while running tests
- Delete means delete

**REQUIRED BACKGROUND:** The superpowers:test-driven-development skill explains why this matters. Same principles apply to documentation.

## Testing All Skill Types

Different skill types need different test approaches:

### Discipline-Enforcing Skills (rules/requirements)

**Examples:** TDD, verification-before-completion, designing-before-coding

**Test with:**
- Academic questions: Do they understand the rules?
- Pressure scenarios: Do they comply under stress?
- Multiple pressures combined: time + sunk cost + exhaustion
- Identify rationalizations and add explicit counters

**Success criteria:** Agent follows rule under maximum pressure

### Technique Skills (how-to guides)

**Examples:** condition-based-waiting, root-cause-tracing, defensive-programming

**Test with:**
- Application scenarios: Can they apply the technique correctly?
- Variation scenarios: Do they handle edge cases?
- Missing information tests: Do instructions have gaps?

**Success criteria:** Agent successfully applies technique to new scenario

### Pattern Skills (mental models)

**Examples:** reducing-complexity, information-hiding concepts

**Test with:**
- Recognition scenarios: Do they recognize when pattern applies?
- Application scenarios: Can they use the mental model?
- Counter-examples: Do they know when NOT to apply?

**Success criteria:** Agent correctly identifies when/how to apply pattern

### Reference Skills (documentation/APIs)

**Examples:** API documentation, command references, library guides

**Test with:**
- Retrieval scenarios: Can they find the right information?
- Application scenarios: Can they use what they found correctly?
- Gap testing: Are common use cases covered?

**Success criteria:** Agent finds and correctly applies reference information

## Common Rationalizations for Skipping Testing

| Excuse | Reality |
|--------|---------|
| "Skill is obviously clear" | Clear to you ≠ clear to other agents. Test it. |
| "It's just a reference" | References can have gaps, unclear sections. Test retrieval. |
| "Testing is overkill" | Untested skills have issues. Always. 15 min testing saves hours. |
| "I'll test if problems emerge" | Problems = agents can't use skill. Test BEFORE deploying. |
| "Too tedious to test" | Testing is less tedious than debugging bad skill in production. |
| "I'm confident it's good" | Overconfidence guarantees issues. Test anyway. |
| "Academic review is enough" | Reading ≠ using. Test application scenarios. |
| "No time to test" | Deploying untested skill wastes more time fixing it later. |

**All of these mean: Test before deploying. No exceptions.**

## Match the Form to the Failure

Before writing guidance, classify the baseline failure. The form that bulletproofs one failure type measurably backfires on another.

| Baseline failure | Right form | Wrong form |
|---|---|---|
| Skips/violates a rule under pressure (knows better, does it anyway) | Prohibition + rationalization table + red flags (see Bulletproofing below) | Soft guidance ("prefer...", "consider...") |
| Complies, but output has the wrong shape (bloated prompt, buried verdict, restated spec) | Positive recipe or contract: state what the output IS — its parts, in order | Prohibition list ("don't restate", "never narrate") |
| Omits a required element from something they already produce | Structural: REQUIRED field or slot in the template they fill in | Prose reminders near the template |
| Behavior should depend on a condition | Conditional keyed to an observable predicate ("if the brief exists, reference it") | Unconditional rule + exemption clauses |

**Why prohibitions backfire on shaping problems:** under a competing incentive ("make the prompt self-contained"), agents negotiate with "don't X". In head-to-head wording tests on dispatch-prompt guidance, the prohibition arm produced clearly more of the unwanted content than the recipe arm (fully separated distributions), and trended worse than even the no-guidance control — micro-test your own case rather than assuming, but never reach for the prohibition by default. A recipe leaves nothing to negotiate: the output matches the stated shape or it doesn't.

**Rules for whichever form you pick:**
- **No nuance clauses.** "Don't X unless it matters" reopens the negotiation — appending a single nuance clause to a winning recipe degraded it from consistent to noisy in the same wording tests. Express a real exception as its own conditional on an observable predicate.
- **Exemption clauses don't scope.** "This limit doesn't apply to code blocks" still suppresses code blocks. If part of the output must be exempt, restructure so the rule can't reach it.

## Bulletproofing Skills Against Rationalization

Skills that enforce discipline (like TDD) need to resist rationalization. Agents are smart and will find loopholes when under pressure.

**Scope:** this toolkit is for discipline failures — an agent that knows the rule and skips it under pressure. For wrong-shaped output or omitted elements, prohibition-based bulletproofing backfires; use the forms in Match the Form to the Failure instead.

**Psychology note:** Understanding WHY persuasion techniques work helps you apply them systematically. See persuasion-principles.md for research foundation (Cialdini, 2021; Meincke et al., 2025) on authority, commitment, scarcity, social proof, and unity principles.

### Close Every Loophole Explicitly

Don't just state the rule - forbid specific workarounds:

<Bad>
```markdown
Write code before test? Delete it.
```
</Bad>

<Good>
```markdown
Write code before test? Delete it. Start over.

**No exceptions:**
- Don't keep it as "reference"
- Don't "adapt" it while writing tests
- Don't look at it
- Delete means delete
```
</Good>

### Address "Spirit vs Letter" Arguments

Add foundational principle early:

```markdown
**Violating the letter of the rules is violating the spirit of the rules.**
```

This cuts off entire class of "I'm following the spirit" rationalizations.

### Build Rationalization Table

Capture rationalizations from baseline testing (see Testing section below). Every excuse agents make goes in the table:

```markdown
| Excuse | Reality |
|--------|---------|
| "Too simple to test" | Simple code breaks. Test takes 30 seconds. |
| "I'll test after" | Tests passing immediately prove nothing. |
| "Tests after achieve same goals" | Tests-after = "what does this do?" Tests-first = "what should this do?" |
```

### Create Red Flags List

Make it easy for agents to self-check when rationalizing:

```markdown
## Red Flags - STOP and Start Over

- Code before test
- "I already manually tested it"
- "Tests after achieve the same purpose"
- "It's about spirit not ritual"
- "This is different because..."

**All of these mean: Delete code. Start over with TDD.**
```

### Update SDO for Violation Symptoms

Add to description: symptoms of when you're ABOUT to violate the rule:

```yaml
description: use when implementing any feature or bugfix, before writing implementation code
```

## RED-GREEN-REFACTOR for Skills

Follow the TDD cycle:

### RED: Write Failing Test (Baseline)

Run pressure scenario with subagent WITHOUT the skill. Document exact behavior:
- What choices did they make?
- What rationalizations did they use (verbatim)?
- Which pressures triggered violations?

This is "watch the test fail" - you must see what agents naturally do before writing the skill.

### GREEN: Write Minimal Skill

Write skill that addresses those specific rationalizations. Don't add extra content for hypothetical cases.

Run same scenarios WITH skill. Agent should now comply.

### REFACTOR: Close Loopholes

Agent found new rationalization? Add explicit counter. Re-test until bulletproof.

### Micro-Test Wording Before Full Scenarios

Full pressure-scenario runs are the final gate, but they are slow and expensive per iteration. Verify the wording itself first with micro-tests:

1. **One fresh-context sample per call** — a raw API call, or a single-shot subagent if you don't have API access. System prompt = the realistic context the guidance will live in (the full skill or prompt template, not the guidance in isolation); user message = a task that tempts the failure.
2. **Always include a no-guidance control.** If the control doesn't exhibit the failure, there is nothing to fix — stop, don't author the guidance.
3. **5+ reps per variant.** Single samples lie.
4. **Manually read every flagged match.** Score programmatically if you like, but template echoes and quoted counter-examples masquerade as hits; automated counts alone overstate both failure and success.
5. **Variance is a metric.** When guidance lands, reps converge on the same shape. Five different interpretations across five reps means the wording isn't binding — tighten the form before adding words.

Micro-tests verify wording; they do not replace pressure scenarios for discipline skills.

**Testing methodology:** See [testing-skills-with-subagents.md](testing-skills-with-subagents.md) for the complete testing methodology:
- How to write pressure scenarios
- Pressure types (time, sunk cost, authority, exhaustion)
- Plugging holes systematically
- Meta-testing techniques

## Anti-Patterns

### ❌ Narrative Example
"In session 2025-10-03, we found empty projectDir caused..."
**Why bad:** Too specific, not reusable

### ❌ Multi-Language Dilution
example-js.js, example-py.py, example-go.go
**Why bad:** Mediocre quality, maintenance burden

### ❌ Code in Flowcharts
```dot
step1 [label="import fs"];
step2 [label="read file"];
```
**Why bad:** Can't copy-paste, hard to read

### ❌ Generic Labels
helper1, helper2, step3, pattern4
**Why bad:** Labels should have semantic meaning

## STOP: Before Moving to Next Skill

**After writing ANY skill, you MUST STOP and complete the deployment process.**

**Do NOT:**
- Create multiple skills in batch without testing each
- Move to next skill before current one is verified
- Skip testing because "batching is more efficient"

**The deployment checklist below is MANDATORY for EACH skill.**

Deploying untested skills = deploying untested code. It's a violation of quality standards.

## Skill Creation Checklist (TDD Adapted)

**IMPORTANT: Create a todo for EACH checklist item below.**

**RED Phase - Write Failing Test:**
- [ ] Create pressure scenarios (3+ combined pressures for discipline skills)
- [ ] Run scenarios WITHOUT skill - document baseline behavior verbatim
- [ ] Identify patterns in rationalizations/failures

**GREEN Phase - Write Minimal Skill:**
- [ ] Name uses only letters, numbers, hyphens (no parentheses/special chars)
- [ ] YAML frontmatter with required `name` and `description` fields (max 1024 chars; see [spec](https://agentskills.io/specification))
- [ ] Description starts with "Use when..." and includes specific triggers/symptoms
- [ ] Description written in third person
- [ ] Keywords throughout for search (errors, symptoms, tools)
- [ ] Clear overview with core principle
- [ ] Address specific baseline failures identified in RED
- [ ] Guidance form matches the failure type (see Match the Form to the Failure)
- [ ] For behavior-shaping guidance: wording micro-tested against a no-guidance control (5+ reps, every flagged match read manually) — N/A for pure reference skills
- [ ] Code inline OR link to separate file
- [ ] One excellent example (not multi-language)
- [ ] Run scenarios WITH skill - verify agents now comply

**REFACTOR Phase - Close Loopholes:**
- [ ] Identify NEW rationalizations from testing
- [ ] Add explicit counters (if discipline skill)
- [ ] Build rationalization table from all test iterations
- [ ] Create red flags list
- [ ] Re-test until bulletproof

**Quality Checks:**
- [ ] Small flowchart only if decision non-obvious
- [ ] Quick reference table
- [ ] Common mistakes section
- [ ] No narrative storytelling
- [ ] Supporting files only for tools or heavy reference

**Deployment:**
- [ ] Commit skill to git and push to your fork (if configured)
- [ ] Consider contributing back via PR (if broadly useful)

## Discovery Workflow

How future agents find your skill:

1. **Encounters problem** ("tests are flaky")
2. **Searches skills** (greps descriptions, browses categories)
3. **Finds SKILL** (description matches)
4. **Scans overview** (is this relevant?)
5. **Reads patterns** (quick reference table)
6. **Loads example** (only when implementing)

**Optimize for this flow** - put searchable terms early and often.

## The Bottom Line

**Creating skills IS TDD for process documentation.**

Same Iron Law: No skill without failing test first.
Same cycle: RED (baseline) → GREEN (write skill) → REFACTOR (close loopholes).
Same benefits: Better quality, fewer surprises, bulletproof results.

If you follow TDD for code, follow it for skills. It's the same discipline applied to documentation.
