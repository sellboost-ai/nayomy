---
name: "subagent-driven-development"
description_en: "Use when executing implementation plans with independent tasks in the current session"
description_tr: "Mevcut oturumda bağımsız görevlerle uygulama planlarını yürütürken kullanın"
category: "Development"
repo: "obra/superpowers"
stars: 233596
url: "https://github.com/obra/superpowers/blob/HEAD/skills/subagent-driven-development/SKILL.md"
path: "skills/subagent-driven-development/SKILL.md"
is_collection: false
body_length: 21397
has_scripts: true
has_references: false
has_examples: false
related_files: ["implementer-prompt.md", "task-reviewer-prompt.md"]
body_tr: |-
  # Alt Ajanla Yönlendirilen Geliştirme
  
  Planı, her görev için taze bir uygulayıcı alt ajanı göndererek, her birinden sonra bir görev incelemesi (spec uygunluğu + kod kalitesi) ve sonunda geniş bir dal incelemesi yaparak yürütün.
  
  **Alt ajanlar neden kullanılır:** Görevleri izole bağlamla uzmanlaşmış ajanlara devredersiniz. Talimatlarını ve bağlamını kesin bir şekilde hazırlayarak, onları odaklanmış ve görevde başarılı olmaları için sağlarsınız. Asla oturumunuzun bağlamını veya geçmişini devralmamalıdırlar — ihtiyaç duydukları şeyin tam olarak neresini inşa edeceğini belirtirsiniz. Bu aynı zamanda koordinasyon çalışması için kendi bağlamınızı koruyor.
  
  **Temel ilke:** Görev başına taze alt ajan + görev incelemesi (spec + kalite) + geniş final inceleme = yüksek kalite, hızlı iterasyon
  
  **Anlatı:** Araç çağrıları arasında en fazla bir kısa satır söyleyin — defter ve araç sonuçları kaydı taşır.
  
  **Sürekli yürütme:** Görevler arasında insan ortağınızla kontrol etmek için durmayın. Plandan tüm görevleri durmadan çalıştırın. Durmanız gereken tek nedenler: Çözemeyeceğiniz BLOCKED durumu, ilerlemeyi engelleyen gerçek belirsizlik veya tüm görevler tamamlandığında. "Devam etmeli miyim?" soruları ve ilerleme özetleri onların zamanını boşa harcar — sizi planı çalıştırması için istediler, öyleyse çalıştırın.
  
  ## Ne Zaman Kullanılır
  
  ```dot
  digraph when_to_use {
      "Have implementation plan?" [shape=diamond];
      "Tasks mostly independent?" [shape=diamond];
      "Stay in this session?" [shape=diamond];
      "subagent-driven-development" [shape=box];
      "executing-plans" [shape=box];
      "Manual execution or brainstorm first" [shape=box];
  
      "Have implementation plan?" -> "Tasks mostly independent?" [label="yes"];
      "Have implementation plan?" -> "Manual execution or brainstorm first" [label="no"];
      "Tasks mostly independent?" -> "Stay in this session?" [label="yes"];
      "Tasks mostly independent?" -> "Manual execution or brainstorm first" [label="no - tightly coupled"];
      "Stay in this session?" -> "subagent-driven-development" [label="yes"];
      "Stay in this session?" -> "executing-plans" [label="no - parallel session"];
  }
  ```
  
  **vs. Planları Yürütme (paralel oturum):**
  - Aynı oturum (bağlam anahtarlaması yok)
  - Görev başına taze alt ajan (bağlam kirlenmesi yok)
  - Her görevden sonra inceleme (spec uygunluğu + kod kalitesi), sonunda geniş inceleme
  - Daha hızlı iterasyon (görevler arasında insan döngüsü yok)
  
  ## İşlem
  
  ```dot
  digraph process {
      rankdir=TB;
  
      subgraph cluster_per_task {
          label="Per Task";
          "Dispatch implementer subagent (./implementer-prompt.md)" [shape=box];
          "Implementer subagent asks questions?" [shape=diamond];
          "Answer questions, provide context" [shape=box];
          "Implementer subagent implements, tests, commits, self-reviews" [shape=box];
          "Write diff file, dispatch task reviewer subagent (./task-reviewer-prompt.md)" [shape=box];
          "Task reviewer reports spec ✅ and quality approved?" [shape=diamond];
          "Dispatch fix subagent for Critical/Important findings" [shape=box];
          "Mark task complete in todo list and progress ledger" [shape=box];
      }
  
      "Read plan, note context and global constraints, create todos" [shape=box];
      "More tasks remain?" [shape=diamond];
      "Dispatch final code reviewer subagent (../requesting-code-review/code-reviewer.md)" [shape=box];
      "Use superpowers:finishing-a-development-branch" [shape=box style=filled fillcolor=lightgreen];
  
      "Read plan, note context and global constraints, create todos" -> "Dispatch implementer subagent (./implementer-prompt.md)";
      "Dispatch implementer subagent (./implementer-prompt.md)" -> "Implementer subagent asks questions?";
      "Implementer subagent asks questions?" -> "Answer questions, provide context" [label="yes"];
      "Answer questions, provide context" -> "Dispatch implementer subagent (./implementer-prompt.md)";
      "Implementer subagent asks questions?" -> "Implementer subagent implements, tests, commits, self-reviews" [label="no"];
      "Implementer subagent implements, tests, commits, self-reviews" -> "Write diff file, dispatch task reviewer subagent (./task-reviewer-prompt.md)";
      "Write diff file, dispatch task reviewer subagent (./task-reviewer-prompt.md)" -> "Task reviewer reports spec ✅ and quality approved?";
      "Task reviewer reports spec ✅ and quality approved?" -> "Dispatch fix subagent for Critical/Important findings" [label="no"];
      "Dispatch fix subagent for Critical/Important findings" -> "Write diff file, dispatch task reviewer subagent (./task-reviewer-prompt.md)" [label="re-review"];
      "Task reviewer reports spec ✅ and quality approved?" -> "Mark task complete in todo list and progress ledger" [label="yes"];
      "Mark task complete in todo list and progress ledger" -> "More tasks remain?";
      "More tasks remain?" -> "Dispatch implementer subagent (./implementer-prompt.md)" [label="yes"];
      "More tasks remain?" -> "Dispatch final code reviewer subagent (../requesting-code-review/code-reviewer.md)" [label="no"];
      "Dispatch final code reviewer subagent (../requesting-code-review/code-reviewer.md)" -> "Use superpowers:finishing-a-development-branch";
  }
  ```
  
  ## Uçuş Öncesi Plan İncelemesi
  
  1. Görevi göndermeden önce planı çelişkiler açısından bir kez tarayın:
  
  - birbirini çelişen veya planın Global Constraints'ini çelişen görevler
  - planın açıkça zorunlu kıldığı ancak inceleme rubriğinin kusur olarak ele aldığı herhangi bir şey (hiçbir şey iddia etmeyen bir test, bir logic bloğunun kelimesi kelimesine çoğaltılması)
  
  Bulduğunuz her şeyi insan ortağınıza, planı onu zorunlu kılan metin yanında, her birinin ne yönettiğini sorarak — yürütme başlamadan önce, bir soruda — sunun, plan ortasında keşif başına bir kesinti değil. Tarama temizse, yorum yapılmadan devam edin. İnceleme döngüsü, yalnızca uygulamadan ortaya çıkan çelişkiler için ağ olarak kalır.
  
  ## Model Seçimi
  
  Her rolü işleyebilen en az güçlü modeli kullanarak maliyeti ve hızı koruyun.
  
  **Mekanik uygulama görevleri** (izole fonksiyonlar, net specler, 1-2 dosya): hızlı, ucuz model kullanın. Plan iyi belirtilmişse çoğu uygulama görevi mekaniktir.
  
  **Entegrasyon ve yargı görevleri** (çok dosyalı koordinasyon, pattern matching, hata ayıklama): standart model kullanın.
  
  **Mimari ve tasarım görevleri**: mevcut en yetenekli modeli kullanın.
  Son dal incelemesi bunlardan biridir — oturum varsayılanında değil, mevcut en yetenekli modelde gönderin.
  
  **İnceleme görevleri**: diff'in boyutu, karmaşıklığı ve riski ölçeğinde aynı yargıya sahip modeli seçin. Küçük mekanik bir diff en yetenekli modele ihtiyaç duymaz; ince bir eşzamanlılık değişikliği yapar.
  
  **Bir alt ajanı gönderirken her zaman modeli açıkça belirtin.** Atlanmış model, oturumunuzun modelini devralır — çoğu zaman en yetenekli ve en pahalı — bu sessizce bu bölümü başarısız kılar.
  
  **Dönüş sayısı token fiyatından daha iyidir.** Duvar saati ve bağlam maliyeti alt ajanın kaç dönüş aldığıyla ölçeklenir ve en ucuz modeller rutin olarak çok adımlı iş için 2-3× dönüş alır — genel olarak daha fazla maliyete neden olur. İnceleyenler ve nesne açıklamalarından çalışan uygulayıcılar için bir taban olarak orta seviye model kullanın. Görevin plan metni yazılacak tam kodu içerdiğinde, uygulama transkripsiyon ve testtir: bu uygulayıcı için en ucuz seviyeyi kullanın. Tek dosya mekanik düzeltmeler de en ucuz seviyeyi alır.
  
  **Görev karmaşıklığı sinyalleri (uygulama görevleri):**
  - Tam spec'li 1-2 dosyaya dokunur → ucuz model
  - Entegrasyon endişeleriyle birden fazla dosyaya dokunur → standart model
  - Tasarım yargısı veya geniş codebase anlayışı gerektirir → en yetenekli model
  
  ## Uygulayıcı Durumunu Yönetme
  
  Uygulayıcı alt ajanları dört durumdan birini bildirirler. Her birini uygun şekilde işleyin:
  
  **DONE:** İnceleme paketini oluşturun (`scripts/review-package BASE HEAD`, bu becerinin dizininden — kaydetmiş olduğunuz commit öncesi BASE'i yazıyorsa benzersiz dosya yolunu yazdırır — asla `HEAD~1` değil, bu sessizce multi-commit görevinin dışında hepsini bırakır), sonra yazdırılan yolla görev inceleyiciyi gönderin.
  
  **DONE_WITH_CONCERNS:** Uygulayıcı işi tamamladı ama endişeler işaretledi. Devam etmeden önce endişeleri okuyun. Endişeler doğruluk veya kapsam hakkındaysa, gözden geçirmeden önce ele alın. Gözlemlerse (örneğin, "bu dosya büyülüyor"), not alın ve incelemesine devam edin.
  
  **NEEDS_CONTEXT:** Uygulayıcının sağlanmayan bilgileri var. Eksik bağlamı sağlayın ve yeniden gönderin.
  
  **BLOCKED:** Uygulayıcı görevi tamamlayamıyor. Engeli değerlendirin:
  1. Bağlam sorunu ise, daha fazla bağlam sağlayın ve aynı modelle yeniden gönderin
  2. Görev daha fazla mantık gerektirirse, daha yetenekli bir modelle yeniden gönderin
  3. Görev çok büyükse, daha küçük parçalara bölün
  4. Plan yanlışsa, insana bildirin
  
  **Asla** bir yükseltmeyi yok saymayın veya aynı modeli değişiklik yapılmadan yeniden denemeye zorlamamayın. Uygulayıcı takılı olduğunu söyledi, bir şeyler değişmeli.
  
  ## İnceleyici ⚠️ Öğelerini Yönetme
  
  Görev inceleyici, "⚠️ Diff'ten doğrulanamıyor" öğelerini bildirebilir — değiştirilmemiş kodda yaşayan veya görevler arasında yayılan gereksinimler. Bunlar incelemenin geri kalanını bloke etmez, ancak görevi tamamlanmış olarak işaretlemeden önce her birini kendiniz çözmelisiniz: planı ve inceleyicinin eksik olduğu görev arası bağlamı tutarsınız. Bir öğeyi gerçek bir boşluk olarak onayladıysanız, başarısız spec incelemesi olarak yapın — uygulayıcıya geri gönderin ve yeniden gözden geçirin.
  
  ## İnceleme Komutları Oluşturma
  
  Görev başına incelemeler görev kapsamı kapılarıdır. Geniş inceleme bir kez, son dal incelemesinde gerçekleşir. Bir inceleyici şablonunu doldururken:
  
  - Somut, görev özeline bir neden olmadan "tüm kullanımları kontrol et" veya "yararlı ise ırk testleri çalıştır" gibi açık uçlu direktifler eklemeyin
  - İnceleyici tarafından aynı kodda zaten çalıştırdığı testleri yeniden çalıştırmasını istemeyin — uygulayıcının raporu test kanıtını taşır
  - Bulguları inceleyici için önceden yargılamayın — asla bir inceleyiciyi belirli bir sorunu yok saymaya veya işaretlememesi için talimat vermeyin. Bir bulguyu yanlış pozitif olarak düşünürsünüz, inceleyiciyi yükseltmesine ve inceleme döngüsünde karar vermesine izin verin. Yazdığınız komut "işaretlemeyin", "X'i kusur olarak ele almayın", "en fazla Minor", "plan seçti" içeriyorsa — durun: önceden yargılıyorsunuz, genellikle kendinize bir inceleme döngüsü tasarrufu için.
  - Inceleyiciye verdiğiniz global-constraints bloğu, onun dikkat lensesidir. Planın Global Constraints bölümünden veya spesifikasyondan kelimesi kelimesine bağlayıcı gereksinimleri kopyalayın: tam değerler, tam formatlar ve bileşenler arasında belirtilen ilişkiler ("X ile aynı düzen", "Y ile eşleşir"). İnceleyici şablonu zaten işlem kurallarını (YAGNI, test hijyeni, inceleme yöntemi) taşır — constraints bloğu BU projenin specinin ne talep ettiğidir.
  - İnceleyiciye diff'i dosya olarak verin: bu becerinin `scripts/review-package BASE HEAD`'ini çalıştırın ve inceleyiciye yazdırdığı dosya yolunu verin (veya bash olmadan: `git log --oneline`, `git diff --stat` ve aralık için `git diff -U10`, benzersiz adlandırılmış bir dosyaya yönlendirilir). Çıktı asla kendi bağlamınıza girmez ve inceleyici commit listesini, stat özetini ve tam diffi bağlamla birlikte bir Read çağrısında görür. Uygulayıcıyı göndermeden önce kaydettiğiniz BASE'ı kullanın — multi-commit görevleri sessizce kesenler HEAD~1 değil.
  - Bir dispatch komutları bir görevi açıklar, oturumunun geçmişini değil. Önceki görev özetlerini ("1-3 Görevlerden sonra durum") sonraki dispatchers'e yapıştırmayın — gerçek oturumda dispatch 42k karakteri vurdu, bunun %99'u yapıştırılmış geçmişti. Taze bir alt ajan, görevine, dokunduğu arayüzlere ve global constraints'e ihtiyaç duyar. Başka hiçbir şey değil.
  - Critical ve Important bulguları için fix alt ajanları gönderin. Minor bulguları ilerleme defteriyle kaydettikten sonra, final dal incelemesine bu listeyi işaret edin, böylece hangisinin birleşmeden önce onarılması gerektiğini sınıflandırabilir. Kimse okumuyor bir roll-up, sessiz bir bertaraftur.
  - Plan-mandated etiketli bir bulgu — veya planın metinleri gereken ne ile çelişen herhangi bir bulgu — insanın kararıdır, herhangi bir plan çelişkisinden gibi: bulguyu ve plan metnini sunun, hangisinin yönettiğini sorun. Bulgu planı çünkü plana karşı koyamaz, ve plan çelişkisiz bir düzeltmeyi sorudan göndermez.
  - Son dal incelemesi de bir paket alır: `scripts/review-package MERGE_BASE HEAD` çalıştırın (MERGE_BASE = dalın başladığı commit, örneğin `git merge-base main HEAD`) ve yazdırılan yolu final inceleme dispatchına ekleyin, böylece final inceleyici git komutlarıyla yeniden türetmek yerine bir dosyayı okur.
  - Her fix dispatch, uygulayıcı sözleşmesini taşır: fix alt ajanı, değişikliği kapsayan testleri yeniden çalıştırır ve sonuçları bildirir. Dispatch'e kapsayan test dosyalarının adını verin — bir satır düzeltmesinin tüm pakete ihtiyacı yoktur. Re-dispatch'in gözden geçirmeden önce, fix raporunun kapsayan testleri, çalıştırılan komutu ve çıktıyı içerdiğini onaylayın; her üçü de mevcut olduğunda yeniden-gözden geçirmeyi gönderin.
  - Final dal incelemesi bulgular döndürürse, bulgular listesi tamamı ile ONE fix alt ajanı gönderin — bulgu başına bir fixer değil. Bulgu başına fixers her bağlamı yeniden oluşturur ve paketleri yeniden çalıştırır; gerçek oturumda final-inceleme fix dalgası tüm görevlerinden daha fazla maliyete çıktı.
  
  ## Dosya Handoff'ları
  
  Bir dispatch komutuna yapıştırdığınız her şey — ve bir alt ajan geri yazdırdığı her şey — oturum geri kalanında ikamet eder ve her sonraki turda yeniden okunur. Yapıtları dosya olarak el değiştirin:
  
  - **Görev özeti:** bir uygulayıcıyı göndermeden önce bu becerinin `scripts/task-brief PLAN_FILE N`'unu çalıştırın — görevin tam metnini benzersiz adlandırılmış bir dosyaya çıkarır ve yolu yazdırır. Briefin tek gereksinimler kaynağı kalması için dispatchi oluşturun. Dispatchınız şunları içermelidir: (1) bu görevin projede nereye sığdığına dair bir satır; (2) brief yolu, "bunu ilk oku — gereksinimlerindir, kelimesi kelimesine kullanacağınız tam değerleri" olarak tanıtılır; (3) briefin bilemeyeceği önceki görevlerden arayüzler ve kararlar; (4) briefte fark ettiğiniz belirsizliğin çözümü; (5) rapor dosyası yolu ve rapor sözleşmesi. Tam değerler (sayılar, magic string'ler, imzalar, test durumları) yalnızca brief'de görünür.
  - **Rapor dosyası:** uygulayıcının rapor dosyasını brief'in ardından adlandırın (brief `…/task-N-brief.md` → rapor `…/task-N-report.md`) ve dispatch komutuna koyun. Uygulayıcı orada tam raporu yazar ve yalnızca durum, commits, bir satırlık test özeti ve endişeleri döndürür.
  - **İnceleyici girişleri:** görev inceleyici üç yol alır — aynı brief dosyası, rapor dosyası ve inceleme paketi — artı görevi bağlayan global constraints.
  - Fix dispatches, fix raporunu (test sonuçlarıyla) aynı rapor dosyasına ekler ve kısa bir özet döndürür; yeniden incelemeler güncellenen dosyayı okur.
  
  ## Dayanıklı İlerleme
  
  Konuşma belleği sıkıştırmada hayatta kalmaz. Gerçek oturumlarında, yerlerini kaybeden denetçiler tamamlanmış görev dizilerini yeniden gönderdiler — gözlenen tek en pahalı hata. İlerlemeyi yalnızca yapılacaklar listesinde değil, defter dosyasında takip edin.
  
  - Beceri başında, bir defter olup olmadığını kontrol edin:
    `cat "$(git rev-parse --git-path sdd)/progress.md"`. Orada tamamlanmış olarak listelenen görevler DONE'dır — onları yeniden göndermez; işaretlenmeyen ilk görevde devam edin.
  - Görev incelemesi temiz geldiğinde, aynı iletiye bir satır deftera ekleyin:
    `Task N: complete (commits <base7>..<head7>, review clean)`.
  - Defter, kurtarma haritanız: adını verdiği commits, bağlamınız artık onları oluşturmayı hatırlamıyorken bile git'te var. Sıkıştırmadan sonra, defter ve `git log`'u kendi hatırlamanız üzerinde güvenin.
  
  ## Komut Şablonları
  
  - [implementer-prompt.md](implementer-prompt.md) - Uygulayıcı alt ajanı gönderin
  - [task-reviewer-prompt.md](task-reviewer-prompt.md) - Görev inceleyici alt ajanı gönderin (spec uygunluğu + kod kalitesi)
  - Son dal incelemesi: superpowers:requesting-code-review'nin [code-reviewer.md](../requesting-code-review/code-reviewer.md)'ını kullanın
  
  ## Örnek İş Akışı
  
  ```
  You: Alt Ajan Yönlendirilen Geliştirme kullanarak bu planı yürütüyorum.
  
  [Plan dosyasını bir kez okuyun: docs/superpowers/plans/feature-plan.md]
  [Tüm görevler için yapılacaklar oluşturun]
  
  Task 1: Hook kurulum betiği
  
  [Task 1 için task-brief çalıştırın; brief + rapor yolları + bağlamla uygulayıcıyı gönderin]
  
  Implementer: "Başlamadan önce - hook kullanıcı veya sistem düzeyinde kurulmalı mı?"
  
  You: "Kullanıcı düzeyi (~/.config/superpowers/hooks/)"
  
  Implementer: "Anladım. Şimdi uyguluyorum..."
  [Daha sonra] Implementer:
    - install-hook komutu uygulandı
    - Testler eklendi, 5/5 geçti
    - Kendi incelemesi: --force bayrağını kaçırdığımı buldum, ekledim
    - Commit yapıldı
  
  [review-package çalıştırın, yazdırılan yolla görev inceleyiciyi gönderin]
  Task reviewer: Spec ✅ - tüm gereksinimler karşılandı, fazlası yok.
    Güçlü taraflar: İyi test kapsamı, temiz. Sorunlar: Yok. Görev kalitesi: Onaylı.
  
  [Task 1'i tamamlanmış olarak işaretleyin]
  
  Task 2: Kurtarma modları
  
  [Task 2 için task-brief çalıştırın; brief + rapor yolları + bağlamla uygulayıcıyı gönderin]
  
  Implementer: [Sorular yok, ilerlemeye başlar]
  Implementer:
    - Doğrulama/onarım modları eklendi
    - 8/8 testler geçti
    - Kendi incelemesi: Hepsi iyi
    - Commit yapıldı
  
  [review-package çalıştırın, yazdırılan yolla görev inceleyiciyi gönderin]
  Task reviewer: Spec ❌:
    - Eksik: İlerleme raporlaması (spec diyor "her 100 öğede rapor et")
    - Extra: --json bayrağı eklendi (talep edilmedi)
    Issues (Important): Magic number (100)
  
  [Tüm bulgularla fix alt ajanı gönderin]
  Fixer: --json bayrağını kaldırdı, ilerleme raporlaması ekledi, PROGRESS_INTERVAL sabitini çıkarttı
  
  [Görev inceleyici yeniden inceliyor]
  Task reviewer: Spec ✅. Görev kalitesi: Onaylı.
  
  [Task 2'yi tamamlanmış olarak işaretleyin]
  
  ...
  
  [Tüm görevlerden sonra]
  [Final code-reviewer'ı gönderin]
  Final reviewer: Tüm gereksinimler karşılandı, birleştirmeye hazır
  
  Bitti!
  ```
  
  ## Avantajlar
  
  **vs. Manual yürütme:**
  - Alt ajanlar TDD'yi doğal olarak izler
  - Görev başına taze bağlam (karışıklık yok)
  - Paralel-safe (alt ajanlar müdahale etmez)
  - Alt ajan sorular sorabilir (çalışmadan önce VE sırasında)
  
  **vs. Planları Yürütme:**
  - Aynı oturum (handoff yok)
  - Sürekli ilerleme (bekleme yok)
  - İnceleme kontrol noktaları otomatik
  
  **Verimlilik kazanları:**
  - Denetçi tam olarak neye ihtiyaç olduğunun bağlamını seçer; toplu yapıtlar dosya olarak hareket eder, yapıştırılan metin değil
  - Alt ajan tam bilgi ile önceden alır
  - Sorular çalışmadan önce ortaya çıkar (sonra değil)
  
  **Kalite kapıları:**
  - Kendi incelemesi, handoff'dan önce sorunları yakalar
  - Görev incelemesi iki karar taşır: spec uygunluğu ve kod kalitesi
  - İnceleme döngüleri düzeltmelerin gerçekten çalıştığından emin olur
  - Spec uygunluğu fazlalık/eksiklik yapsını önler
  - Kod kalitesi uygulamanın iyi yapılandırılmış olduğunu sağlar
  
  **Maliyeti:**
  - Daha fazla alt ajan çağrıları (uygulayıcı + inceleyici görev başına)
  - Denetçi daha fazla hazırlık yapar (tüm görevleri çıkararak)
  - İnceleme döngüleri iterasyonlar ekler
  - Ama sorunları erken yakalar (daha sonra hata ayıklamaktan daha ucuz)
  
  ## Kırmızı Bayraklar
  
  **Asla:**
  - Ana/master dalında açık kullanıcı izni olmadan uygulamaya başlamayın
  - Görev incelemesini atlayın veya her iki kararı eksik olan bir raporu kabul edin (spec uygunluğu VE görev kalitesi ikisi de gerekli)
  - Onarılmamış sorunlarla ilerleyin
  - Paralel olarak birden fazla uygulama alt ajanı gönderin (çelişkiler)
  - Bir alt ajanı tüm plan dosyasını okumasını yaptırmayın (bunun yerine görev brief'ini — `scripts/task-brief` — verin)
  - Sahne ayarı bağlamını atlayın (alt ajan görevin nereye sığdığını anlamalı)
  - Alt ajan sorularını yok sayın (ilerlemelerine izin vermeden önce cevap verin)
  - Spec uygunluğu üzerinde "yakın yeterli" kabul edin (inceleyici spec sorunları buldu = bitmedi)
  - İnceleme döngülerini atlayın (inceleyici sorunlar buldu = uygulayıcı düzeltir = yeniden gözden geçir)
  - Uygulayıcı kendi incelemesinin gerçek incelemeyi yerini almasına izin verin (ikisi de gerekli)
  - Bir inceleyiciye bayrağı koyma, veya dispatch komutunda bir bulguyu önceden derecelendirme söyleyin ("en fazla Minor olarak ele alın") — planın örnek kodu bir başlangıç noktasıdır, zayıflıklarının seçildiğinin kanıtı değil
  - Diff dosyası olmayan bir görev inceleyiciyi gönderin — önce oluşturun (`scripts/review-package BASE HEAD`) ve dispatch komutunda yazdırılan yolu adlandırın
  - İnceleme açık Critical/Important sorunlar varken sonraki göreve geçin
  - İlerleme defteriyle tamamlanmış bir görevi yeniden gönderin — herhangi bir sıkıştırma veya özgeçişten sonra deftere (ve `git log`) kontrol edin
  
  **Alt ajan soru sorarsa:**
  - Açık ve eksiksiz cevap verin
  - Gerekirse ek bağlam sağlayın
  - Onları uygulamaya acele etmeyin
  
  **İnceleyici sorunlar bulursa:**
  - Uygulayıcı (aynı alt ajan) onları düzeltir
  - İnceleyici yeniden gözden geçirir
  - Onaylanana kadar tekrarlayın
  - Re-review'ü atlamayın
  
  **Alt ajan görevde başarısız olursa:**
  - Fix alt ajanını spesifik talimatlarla gönderin
  - El ile düzeltmeyi denemeyin (bağlam kirlenmesi)
  
  ## Entegrasyon
  
  **Gerekli iş akışı beceriler:**
  - **superpowers:using-git-worktrees** - İzole çalışma alanını sağlar (oluşturur veya mevcut olduğunu doğrular)
  - **superpowers:writing-plans** - Bu becerinin yürüttüğü planı oluşturur
  - **superpowers:requesting-code-review** - Final dal incelemesi için kod inceleme şablonu
  - **superpowers:finishing-a-development-branch** - Tüm görevlerden sonra geliştirmeyi tamamla
  
  **Alt ajanların kullanması gerekir:**
  - **superpowers:test-driven-development** - Alt ajanlar her görev için TDD'yi izler
  
  **Alternatif iş akışı:**
  - **superpowers:executing-plans** - Aynı oturum yürütmesi yerine paralel oturum için kullanın
---

# Subagent-Driven Development

Execute plan by dispatching a fresh implementer subagent per task, a task review (spec compliance + code quality) after each, and a broad whole-branch review at the end.

**Why subagents:** You delegate tasks to specialized agents with isolated context. By precisely crafting their instructions and context, you ensure they stay focused and succeed at their task. They should never inherit your session's context or history — you construct exactly what they need. This also preserves your own context for coordination work.

**Core principle:** Fresh subagent per task + task review (spec + quality) + broad final review = high quality, fast iteration

**Narration:** between tool calls, narrate at most one short line — the
ledger and the tool results carry the record.

**Continuous execution:** Do not pause to check in with your human partner between tasks. Execute all tasks from the plan without stopping. The only reasons to stop are: BLOCKED status you cannot resolve, ambiguity that genuinely prevents progress, or all tasks complete. "Should I continue?" prompts and progress summaries waste their time — they asked you to execute the plan, so execute it.

## When to Use

```dot
digraph when_to_use {
    "Have implementation plan?" [shape=diamond];
    "Tasks mostly independent?" [shape=diamond];
    "Stay in this session?" [shape=diamond];
    "subagent-driven-development" [shape=box];
    "executing-plans" [shape=box];
    "Manual execution or brainstorm first" [shape=box];

    "Have implementation plan?" -> "Tasks mostly independent?" [label="yes"];
    "Have implementation plan?" -> "Manual execution or brainstorm first" [label="no"];
    "Tasks mostly independent?" -> "Stay in this session?" [label="yes"];
    "Tasks mostly independent?" -> "Manual execution or brainstorm first" [label="no - tightly coupled"];
    "Stay in this session?" -> "subagent-driven-development" [label="yes"];
    "Stay in this session?" -> "executing-plans" [label="no - parallel session"];
}
```

**vs. Executing Plans (parallel session):**
- Same session (no context switch)
- Fresh subagent per task (no context pollution)
- Review after each task (spec compliance + code quality), broad review at the end
- Faster iteration (no human-in-loop between tasks)

## The Process

```dot
digraph process {
    rankdir=TB;

    subgraph cluster_per_task {
        label="Per Task";
        "Dispatch implementer subagent (./implementer-prompt.md)" [shape=box];
        "Implementer subagent asks questions?" [shape=diamond];
        "Answer questions, provide context" [shape=box];
        "Implementer subagent implements, tests, commits, self-reviews" [shape=box];
        "Write diff file, dispatch task reviewer subagent (./task-reviewer-prompt.md)" [shape=box];
        "Task reviewer reports spec ✅ and quality approved?" [shape=diamond];
        "Dispatch fix subagent for Critical/Important findings" [shape=box];
        "Mark task complete in todo list and progress ledger" [shape=box];
    }

    "Read plan, note context and global constraints, create todos" [shape=box];
    "More tasks remain?" [shape=diamond];
    "Dispatch final code reviewer subagent (../requesting-code-review/code-reviewer.md)" [shape=box];
    "Use superpowers:finishing-a-development-branch" [shape=box style=filled fillcolor=lightgreen];

    "Read plan, note context and global constraints, create todos" -> "Dispatch implementer subagent (./implementer-prompt.md)";
    "Dispatch implementer subagent (./implementer-prompt.md)" -> "Implementer subagent asks questions?";
    "Implementer subagent asks questions?" -> "Answer questions, provide context" [label="yes"];
    "Answer questions, provide context" -> "Dispatch implementer subagent (./implementer-prompt.md)";
    "Implementer subagent asks questions?" -> "Implementer subagent implements, tests, commits, self-reviews" [label="no"];
    "Implementer subagent implements, tests, commits, self-reviews" -> "Write diff file, dispatch task reviewer subagent (./task-reviewer-prompt.md)";
    "Write diff file, dispatch task reviewer subagent (./task-reviewer-prompt.md)" -> "Task reviewer reports spec ✅ and quality approved?";
    "Task reviewer reports spec ✅ and quality approved?" -> "Dispatch fix subagent for Critical/Important findings" [label="no"];
    "Dispatch fix subagent for Critical/Important findings" -> "Write diff file, dispatch task reviewer subagent (./task-reviewer-prompt.md)" [label="re-review"];
    "Task reviewer reports spec ✅ and quality approved?" -> "Mark task complete in todo list and progress ledger" [label="yes"];
    "Mark task complete in todo list and progress ledger" -> "More tasks remain?";
    "More tasks remain?" -> "Dispatch implementer subagent (./implementer-prompt.md)" [label="yes"];
    "More tasks remain?" -> "Dispatch final code reviewer subagent (../requesting-code-review/code-reviewer.md)" [label="no"];
    "Dispatch final code reviewer subagent (../requesting-code-review/code-reviewer.md)" -> "Use superpowers:finishing-a-development-branch";
}
```

## Pre-Flight Plan Review

Before dispatching Task 1, scan the plan once for conflicts:

- tasks that contradict each other or the plan's Global Constraints
- anything the plan explicitly mandates that the review rubric treats as a
  defect (a test that asserts nothing, verbatim duplication of a logic block)

Present everything you find to your human partner as one batched question —
each finding beside the plan text that mandates it, asking which governs —
before execution begins, not one interrupt per discovery mid-plan. If the
scan is clean, proceed without comment. The review loop remains the net for
conflicts that only emerge from implementation.

## Model Selection

Use the least powerful model that can handle each role to conserve cost and increase speed.

**Mechanical implementation tasks** (isolated functions, clear specs, 1-2 files): use a fast, cheap model. Most implementation tasks are mechanical when the plan is well-specified.

**Integration and judgment tasks** (multi-file coordination, pattern matching, debugging): use a standard model.

**Architecture and design tasks**: use the most capable available model.
The final whole-branch review is one of these — dispatch it on the most
capable available model, not the session default.

**Review tasks**: choose the model with the same judgment, scaled to the
diff's size, complexity, and risk. A small mechanical diff does not need the
most capable model; a subtle concurrency change does.

**Always specify the model explicitly when dispatching a subagent.** An
omitted model inherits your session's model — often the most capable and
most expensive — which silently defeats this section.

**Turn count beats token price.** Wall-clock and context cost scale with how
many turns a subagent takes, and the cheapest models routinely take 2-3× the
turns on multi-step work — costing more overall. Use a mid-tier model as the
floor for reviewers and for implementers working from prose descriptions.
When the task's plan text contains the complete code to write, the
implementation is transcription plus testing: use the cheapest tier for
that implementer. Single-file mechanical fixes also take the cheapest tier.

**Task complexity signals (implementation tasks):**
- Touches 1-2 files with a complete spec → cheap model
- Touches multiple files with integration concerns → standard model
- Requires design judgment or broad codebase understanding → most capable model

## Handling Implementer Status

Implementer subagents report one of four statuses. Handle each appropriately:

**DONE:** Generate the review package (`scripts/review-package BASE HEAD`, from this skill's directory — it prints the unique file path it wrote; BASE is the commit you recorded before dispatching the implementer — never `HEAD~1`, which silently drops all but the last commit of a multi-commit task), then dispatch the task reviewer with the printed path.

**DONE_WITH_CONCERNS:** The implementer completed the work but flagged doubts. Read the concerns before proceeding. If the concerns are about correctness or scope, address them before review. If they're observations (e.g., "this file is getting large"), note them and proceed to review.

**NEEDS_CONTEXT:** The implementer needs information that wasn't provided. Provide the missing context and re-dispatch.

**BLOCKED:** The implementer cannot complete the task. Assess the blocker:
1. If it's a context problem, provide more context and re-dispatch with the same model
2. If the task requires more reasoning, re-dispatch with a more capable model
3. If the task is too large, break it into smaller pieces
4. If the plan itself is wrong, escalate to the human

**Never** ignore an escalation or force the same model to retry without changes. If the implementer said it's stuck, something needs to change.

## Handling Reviewer ⚠️ Items

The task reviewer may report "⚠️ Cannot verify from diff" items — requirements
that live in unchanged code or span tasks. These do not block the rest of the
review, but you must resolve each one yourself before marking the task
complete: you hold the plan and cross-task context the reviewer
lacks. If you confirm an item is a real gap, treat it as a failed spec
review — send it back to the implementer and re-review.

## Constructing Reviewer Prompts

Per-task reviews are task-scoped gates. The broad review happens once, at the
final whole-branch review. When you fill a reviewer template:

- Do not add open-ended directives like "check all uses" or "run race tests
  if useful" without a concrete, task-specific reason
- Do not ask a reviewer to re-run tests the implementer already ran on the
  same code — the implementer's report carries the test evidence
- Do not pre-judge findings for the reviewer — never instruct a reviewer to
  ignore or not flag a specific issue. If you believe a finding would be a
  false positive, let the reviewer raise it and adjudicate it in the review
  loop. If the prompt you are writing contains "do not flag," "don't treat X
  as a defect," "at most Minor," or "the plan chose" — stop: you are
  pre-judging, usually to spare yourself a review loop.
- The global-constraints block you hand the reviewer is its attention
  lens. Copy the binding requirements verbatim from the plan's Global
  Constraints section or the spec: exact values, exact formats, and the
  stated relationships between components ("same layout as X", "matches
  Y"). The reviewer's template already carries the process rules (YAGNI,
  test hygiene, review method) — the constraints block is for what THIS
  project's spec demands.
- Hand the reviewer its diff as a file: run this skill's
  `scripts/review-package BASE HEAD` and pass the reviewer the file path
  it prints (or, without bash: `git log --oneline`, `git diff --stat`,
  and `git diff -U10` for the range, redirected to one uniquely named
  file). The output never enters your own context, and the reviewer sees
  the commit list, stat summary, and full diff with context in one Read
  call. Use the BASE you recorded before dispatching the implementer —
  never `HEAD~1`, which silently truncates multi-commit tasks.
- A dispatch prompt describes one task, not the session's history. Do not
  paste accumulated prior-task summaries ("state after Tasks 1-3") into
  later dispatches — a real session's dispatch hit 42k chars of which 99%
  was pasted history. A fresh subagent needs its task, the interfaces it
  touches, and the global constraints. Nothing else.
- Dispatch fix subagents for Critical and Important findings. Record Minor
  findings in the progress ledger as you go, and point the final
  whole-branch review at that list so it can triage which must be fixed
  before merge. A roll-up nobody reads is a silent discard.
- A finding labeled plan-mandated — or any finding that conflicts with
  what the plan's text requires — is the human's decision, like any plan
  contradiction: present the finding and the plan text, ask which governs.
  Do not dismiss the finding because the plan mandates it, and do not
  dispatch a fix that contradicts the plan without asking.
- The final whole-branch review gets a package too: run
  `scripts/review-package MERGE_BASE HEAD` (MERGE_BASE = the commit the
  branch started from, e.g. `git merge-base main HEAD`) and include the
  printed path in the final review dispatch, so the final reviewer reads
  one file instead of re-deriving the branch diff with git commands.
- Every fix dispatch carries the implementer contract: the fix subagent
  re-runs the tests covering its change and reports the results. Name the
  covering test files in the dispatch — a one-line fix does not need the
  whole suite. Before re-dispatching the reviewer, confirm the fix report
  contains the covering tests, the command run, and the output; dispatch
  the re-review once all three are present.
- If the final whole-branch review returns findings, dispatch ONE fix
  subagent with the complete findings list — not one fixer per finding.
  Per-finding fixers each rebuild context and re-run suites; a real
  session's final-review fix wave cost more than all its tasks combined.

## File Handoffs

Everything you paste into a dispatch prompt — and everything a subagent
prints back — stays resident in your context for the rest of the session
and is re-read on every later turn. Hand artifacts over as files:

- **Task brief:** before dispatching an implementer, run this skill's
  `scripts/task-brief PLAN_FILE N` — it extracts the task's full text to a
  uniquely named file and prints the path. Compose the dispatch so the
  brief stays the single source of requirements. Your dispatch should
  contain: (1) one line on where this task fits in the project; (2) the
  brief path, introduced as "read this first — it is your requirements,
  with the exact values to use verbatim"; (3) interfaces and decisions
  from earlier tasks that the brief cannot know; (4) your resolution of
  any ambiguity you noticed in the brief; (5) the report-file path and
  report contract. Exact values (numbers, magic strings, signatures, test
  cases) appear only in the brief.
- **Report file:** name the implementer's report file after the brief
  (brief `…/task-N-brief.md` → report `…/task-N-report.md`) and put it in
  the dispatch prompt. The implementer writes the full report there and
  returns only status, commits, a one-line test summary, and concerns.
- **Reviewer inputs:** the task reviewer gets three paths — the same brief
  file, the report file, and the review package — plus the global
  constraints that bind the task.
- Fix dispatches append their fix report (with test results) to the same
  report file and return a short summary; re-reviews read the updated file.

## Durable Progress

Conversation memory does not survive compaction. In real sessions,
controllers that lost their place have re-dispatched entire completed task
sequences — the single most expensive failure observed. Track progress in
a ledger file, not only in todos.

- At skill start, check for a ledger:
  `cat "$(git rev-parse --show-toplevel)/.superpowers/sdd/progress.md"`. Tasks listed there
  as complete are DONE — do not re-dispatch them; resume at the first task
  not marked complete.
- When a task's review comes back clean, append one line to the ledger in
  the same message as your other bookkeeping:
  `Task N: complete (commits <base7>..<head7>, review clean)`.
- The ledger is your recovery map: the commits it names exist in git even
  when your context no longer remembers creating them. After compaction,
  trust the ledger and `git log` over your own recollection.
- `git clean -fdx` will destroy the ledger (it's git-ignored scratch); if
  that happens, recover from `git log`.

## Prompt Templates

- [implementer-prompt.md](implementer-prompt.md) - Dispatch implementer subagent
- [task-reviewer-prompt.md](task-reviewer-prompt.md) - Dispatch task reviewer subagent (spec compliance + code quality)
- Final whole-branch review: use superpowers:requesting-code-review's [code-reviewer.md](../requesting-code-review/code-reviewer.md)

## Example Workflow

```
You: I'm using Subagent-Driven Development to execute this plan.

[Read plan file once: docs/superpowers/plans/feature-plan.md]
[Create todos for all tasks]

Task 1: Hook installation script

[Run task-brief for Task 1; dispatch implementer with brief + report paths + context]

Implementer: "Before I begin - should the hook be installed at user or system level?"

You: "User level (~/.config/superpowers/hooks/)"

Implementer: "Got it. Implementing now..."
[Later] Implementer:
  - Implemented install-hook command
  - Added tests, 5/5 passing
  - Self-review: Found I missed --force flag, added it
  - Committed

[Run review-package, dispatch task reviewer with the printed path]
Task reviewer: Spec ✅ - all requirements met, nothing extra.
  Strengths: Good test coverage, clean. Issues: None. Task quality: Approved.

[Mark Task 1 complete]

Task 2: Recovery modes

[Run task-brief for Task 2; dispatch implementer with brief + report paths + context]

Implementer: [No questions, proceeds]
Implementer:
  - Added verify/repair modes
  - 8/8 tests passing
  - Self-review: All good
  - Committed

[Run review-package, dispatch task reviewer with the printed path]
Task reviewer: Spec ❌:
  - Missing: Progress reporting (spec says "report every 100 items")
  - Extra: Added --json flag (not requested)
  Issues (Important): Magic number (100)

[Dispatch fix subagent with all findings]
Fixer: Removed --json flag, added progress reporting, extracted PROGRESS_INTERVAL constant

[Task reviewer reviews again]
Task reviewer: Spec ✅. Task quality: Approved.

[Mark Task 2 complete]

...

[After all tasks]
[Dispatch final code-reviewer]
Final reviewer: All requirements met, ready to merge

Done!
```

## Advantages

**vs. Manual execution:**
- Subagents follow TDD naturally
- Fresh context per task (no confusion)
- Parallel-safe (subagents don't interfere)
- Subagent can ask questions (before AND during work)

**vs. Executing Plans:**
- Same session (no handoff)
- Continuous progress (no waiting)
- Review checkpoints automatic

**Efficiency gains:**
- Controller curates exactly what context is needed; bulk artifacts move
  as files, not pasted text
- Subagent gets complete information upfront
- Questions surfaced before work begins (not after)

**Quality gates:**
- Self-review catches issues before handoff
- Task review carries two verdicts: spec compliance and code quality
- Review loops ensure fixes actually work
- Spec compliance prevents over/under-building
- Code quality ensures implementation is well-built

**Cost:**
- More subagent invocations (implementer + reviewer per task)
- Controller does more prep work (extracting all tasks upfront)
- Review loops add iterations
- But catches issues early (cheaper than debugging later)

## Red Flags

**Never:**
- Start implementation on main/master branch without explicit user consent
- Skip task review, or accept a report missing either verdict (spec compliance AND task quality are both required)
- Proceed with unfixed issues
- Dispatch multiple implementation subagents in parallel (conflicts)
- Make a subagent read the whole plan file (hand it its task brief —
  `scripts/task-brief` — instead)
- Skip scene-setting context (subagent needs to understand where task fits)
- Ignore subagent questions (answer before letting them proceed)
- Accept "close enough" on spec compliance (reviewer found spec issues = not done)
- Skip review loops (reviewer found issues = implementer fixes = review again)
- Let implementer self-review replace actual review (both are needed)
- Tell a reviewer what not to flag, or pre-rate a finding's severity in the
  dispatch prompt ("treat it as Minor at most") — the plan's example code is
  a starting point, not evidence that its weaknesses were chosen
- Dispatch a task reviewer without a diff file — generate it first
  (`scripts/review-package BASE HEAD`) and name the printed path in the
  prompt
- Move to next task while the review has open Critical/Important issues
- Re-dispatch a task the progress ledger already marks complete — check
  the ledger (and `git log`) after any compaction or resume

**If subagent asks questions:**
- Answer clearly and completely
- Provide additional context if needed
- Don't rush them into implementation

**If reviewer finds issues:**
- Implementer (same subagent) fixes them
- Reviewer reviews again
- Repeat until approved
- Don't skip the re-review

**If subagent fails task:**
- Dispatch fix subagent with specific instructions
- Don't try to fix manually (context pollution)

## Integration

**Required workflow skills:**
- **superpowers:using-git-worktrees** - Ensures isolated workspace (creates one or verifies existing)
- **superpowers:writing-plans** - Creates the plan this skill executes
- **superpowers:requesting-code-review** - Code review template for the final whole-branch review
- **superpowers:finishing-a-development-branch** - Complete development after all tasks

**Subagents should use:**
- **superpowers:test-driven-development** - Subagents follow TDD for each task

**Alternative workflow:**
- **superpowers:executing-plans** - Use for parallel session instead of same-session execution
