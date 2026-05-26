---
name: "FradSer/mcp-server-apple-events"
description: "An MCP server for interacting with Apple Reminders on macOS"
description_tr: "macOS'ta Apple Reminders ile etkileşim kurmak için bir MCP server'ı"
category: "Browser Automation"
repo: "FradSer/mcp-server-apple-events"
stars: 122
url: "https://github.com/FradSer/mcp-server-apple-events"
body_length: 33267
license: "MIT"
language: "TypeScript"
body_tr: |-
  # Apple Events MCP Server ![Version 1.4.0](https://img.shields.io/badge/version-1.4.0-blue) ![License: MIT](https://img.shields.io/badge/license-MIT-green)

  [![X Follow](https://img.shields.io/twitter/follow/FradSer?style=social)](https://x.com/FradSer)

  English | [简体中文](README.zh-CN.md)

  macOS üzerinde Apple Reminders ve Calendar ile yerel entegrasyon sağlayan bir Model Context Protocol (MCP) sunucusu. Bu sunucu, Apple Reminders ve Calendar Events'lerle standartlaştırılmış bir arayüz aracılığıyla kapsamlı yönetim yetenekleri sunarak etkileşim kurmanızı sağlar.

  [![MseeP.ai Security Assessment Badge](https://mseep.net/pr/fradser-mcp-server-apple-events-badge.png)](https://mseep.ai/app/fradser-mcp-server-apple-events)

  > [!NOTE]
  > **Geleceğe bakış: [event](https://github.com/FradSer/event) — macOS'ta Apple Reminders ve Calendar için saf Swift CLI.**
  >
  > Scripting, otomasyon ve doğrudan terminal kullanımı için, artık bağımsız [`event`](https://github.com/FradSer/event) CLI'ı öneriyoruz. Bu sunucunun bugün kullandığı aynı EventKit tarafından desteklenen reminder/calendar/list/subtask/tag işlemlerini ortaya koyan ilk sınıf Markdown ve JSON çıktısı içerir. `mcp-server-apple-events`'in gelecek sürümleri, her iki proje de tek, iyi test edilmiş bir Swift uygulamasını paylaşabilmesi için, bundled `EventKitCLI` binary yerine `event` CLI'a bağlı olması planlıyor.

  ## Özellikler

  ### Temel İşlevsellik

  - **Liste Yönetimi**: Tüm reminders ve reminder listelerini gelişmiş filtreleme seçenekleriyle görüntüleyin
  - **Reminder İşlemleri**: Listeler arasında reminders için tam CRUD işlemleri (Create, Read, Update, Delete)
  - **Zengin İçerik Desteği**: Başlıklar, notlar, due tarihler, URL'ler ve tamamlanma durumu için tam destek
  - **Yerel macOS Entegrasyonu**: EventKit framework'ü kullanarak Apple Reminders ile doğrudan entegrasyon

  ### Geliştirilmiş Reminder Özellikleri (v1.3.0)

  - **Öncelik Desteği**: Reminder önceliğini (high/medium/low/none) görsel göstergelerle ayarlayın
  - **Tekrarlayan Reminders**: Esnek tekrarlama kurallarıyla (daily, weekly, monthly, yearly) yinelenen reminders oluşturun
  - **Konum Tabanlı Tetikleyiciler**: Bir konuma varış veya ayrılışta tetiklenen geofence reminders ayarlayın
  - **Etiketler/Eğiketler**: Reminders'ları özel etiketlerle düzenleyin ve listeler arasında kategorizelendirin ve filtreleyin
  - **Alt Görevler/Kontrol Listeleri**: Reminders'a ilerleme izlemeyle kontrol listesi öğeleri ekleyin

  ### Gelişmiş Özellikler

  - **Akıllı Organizasyon**: Otomatik kategorilendirme ve öncelik, due tarih, kategori veya tamamlanma durumuna göre akıllı filtreleme
  - **Güçlü Arama**: Tamamlanma durumu, due tarih aralığı, etiketler ve tam metin araması dahil çok ölçütlü filtreleme
  - **Toplu İşlemler**: Optimize edilmiş veri erişim desenleriyle birden fazla reminder'ın verimli işlenmesi
  - **İzin Yönetimi**: Gerekli macOS sistem izinlerinin otomatik doğrulanması ve istenmesi
  - **Esnek Tarih İşleme**: Birden fazla tarih biçimine (YYYY-MM-DD, ISO 8601) ve saat dilimi farkındalığına sahip destek
  - **Unicode Desteği**: Kapsamlı giriş doğrulaması ile tam uluslararası karakter desteği

  ### Teknik Üstünlük

  - **Temiz Mimarisi**: Bağımlılık enjeksiyonuyla Clean Architecture ilkelerine uyan 4 katmanlı mimari
  - **Tip Güvenliği**: Çalışma zamanı tür kontrolü için Zod şema doğrulaması ile tam TypeScript kapsamı
  - **Yüksek Performans**: Performans kritik Apple Reminders işlemleri için Swift derlenmiş binary'ler
  - **Sağlam Hata Yönetimi**: Ayrıntılı tanılama bilgileriyle tutarlı hata yanıtları
  - **Repository Deseni**: Standardize edilmiş CRUD işlemleriyle veri erişim soyutlaması
  - **Fonksiyonel Programlama**: Uygun olduğunda sabit veri yapılarıyla saf fonksiyonlar

  ## Ön Koşullar

  - **Node.js 20 veya üstü**
  - **macOS** (Apple Reminders entegrasyonu için gerekli)
  - **Xcode Command Line Tools** (Swift kodu derleme için gerekli)
  - **pnpm** (paket yönetimi için önerilir)

  ## macOS İzin Gereksinimleri (Sonoma 14+ / Sequoia 15)

  Apple, Reminders ve Calendar izinlerini _write-only_ ve _full-access_ kapsamlarına ayrıldı. Swift bridge, Claude'un erişimi onayladığında hem veri okuyup yazabilmesi için aşağıdaki gizlilik anahtarlarını bildirir:

  - `NSRemindersUsageDescription`
  - `NSRemindersFullAccessUsageDescription`
  - `NSRemindersWriteOnlyAccessUsageDescription`
  - `NSCalendarsUsageDescription`
  - `NSCalendarsFullAccessUsageDescription`
  - `NSCalendarsWriteOnlyAccessUsageDescription`

  CLI bir `notDetermined` yetkilendirme durumu algıladığında, `requestFullAccessToReminders` / `requestFullAccessToEvents` çağırır; bu da macOS'u doğru istemi göstermesini tetikler. OS izinleri takip etmeyi kaybederse, `./check-permissions.sh` çalıştırarak iletişim kutularını yeniden açın.

  Bir Claude araç çağrısı yine de bir izin hatasıyla karşılaşırsa, Node.js katmanı otomatik olarak minimal bir AppleScript (`osascript -e 'tell application "Reminders" …'`) çalıştırarak iletişim kutusunu görünür hale getirir ve ardından Swift CLI'ı bir kez yeniden dener.

  ### Takvim Okuma Hatalarını Giderme

  `Failed to read calendar events` görürseniz, Takvim'in **Full Calendar Access** olarak ayarlandığını doğrulayın:

  - `System Settings > Privacy & Security > Calendars` açın
  - Bu MCP sunucusunu başlatan uygulamayı bulun (örneğin Terminal veya Claude Desktop)
  - Erişimi **Full Calendar Access** olarak değiştirin

  `./check-permissions.sh` çalıştırabilirsiniz (artık Reminders ve Calendars erişimini doğrular).

  **Doğrulama komutu**

  ```bash
  pnpm test -- src/swift/Info.plist.test.ts
  ```

  Test paketi, binary'i göndermeden önce tüm gerekli kullanım açıklama dizelerinin mevcut olduğundan emin olur.

  ### macOS 26 (Tahoe) üzerinde `could not build module 'Foundation'` Sorunlarını Giderme

  `pnpm build` başarısız olursa `could not build module 'Foundation'` ile (veya `SDK is not supported by the compiler`), Swift araç zinciri macOS 26 SDK'sının gerektirdiğinden daha eski. macOS 26+ SDK, **Swift 6.3 veya daha yeni** gerektiren bir `Foundation.swiftinterface` ile gelir; ilk macOS 26 noktası sürümleriyle gelen Command Line Tools, Swift 6.2.x içerir ve bunu ayrıştıramaz. [issue #85](https://github.com/FradSer/mcp-server-apple-events/issues/85) bölümüne bakın.

  `pnpm build:swift` artık bu uyuşmazlığı tespit eder ve aynı çözümü yazdırır, ancak manuel olarak çarparsanız:

  1. App Store'dan Xcode 26.x yükleyin (Swift 6.3+ ile gelir) veya
  2. Command Line Tools'u Swift 6.3+ ile gelen bir sürüme güncelleyin:
     ```bash
     softwareupdate --list
     sudo softwareupdate -i "Command Line Tools for Xcode-<latest>"
     ```
  3. Her ikisi de yüklenirse, `xcode-select` işaretçisini tam Xcode'a ayarlayın:
     ```bash
     sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
     ```

  Şu şekilde doğrulayın:

  ```bash
  xcrun swiftc --version          # Apple Swift sürümü 6.3 veya daha yeni bildirilmeli
  xcrun --show-sdk-version        # macOS ana sürümünüzle eşleşmeli
  ```

  ## Hızlı Başlangıç

  Sunucuyu `npx` kullanarak doğrudan çalıştırabilirsiniz:

  ```bash
  npx mcp-server-apple-events
  ```

  ## Yapılandırma

  ### Cursor'u Yapılandırma

  1. Cursor'u açın
  2. Cursor ayarlarını açın
  3. Kenar çubuğunda "MCP" seçeneğini tıklayın
  4. "Add new global MCP server" tıklayın
  5. Sunucuyu aşağıdaki ayarlarla yapılandırın:

     ```json
     {
       "mcpServers": {
         "apple-reminders": {
           "command": "npx",
           "args": ["-y", "mcp-server-apple-events"]
         }
       }
     }
     ```

  ### ChatWise'ı Yapılandırma

  1. ChatWise'ı açın
  2. Ayarlar'a gidin
  3. Tools bölümüne gidin
  4. "+" düğmesine tıklayın
  5. Aracı aşağıdaki ayarlarla yapılandırın:
     - Type: `stdio`
     - ID: `apple-reminders`
     - Command: `mcp-server-apple-events`
     - Args: (boş bırakın)

  ### Claude Desktop'u Yapılandırma

  Apple Events MCP sunucusunu tanıması için Claude Desktop'u yapılandırmanız gerekir. Yapılandırmaya erişmenin iki yolu vardır:

  #### Seçenek 1: Claude Desktop Kullanıcı Arayüzü Aracılığıyla

  1. Claude Desktop uygulamasını açın
  2. Sol üst menü çubuğundan Developer Mode'u etkinleştirin
  3. Ayarlar'ı açın ve Developer Option'a gidin
  4. `claude_desktop_config.json` dosyasını açmak için Edit Config düğmesine tıklayın

  #### Seçenek 2: Doğrudan Dosya Erişimi

  macOS için:

  ```bash
  code ~/Library/Application\ Support/Claude/claude_desktop_config.json
  ```

  Windows için:

  ```bash
  code %APPDATA%\Claude\claude_desktop_config.json
  ```

  ### 2. Sunucu Yapılandırması Ekle

  `claude_desktop_config.json` dosyasına aşağıdaki yapılandırmayı ekleyin:

  **Seçenek A: npx Kullanma (önerilir)**

  ```json
  {
    "mcpServers": {
      "apple-reminders": {
        "command": "npx",
        "args": ["-y", "mcp-server-apple-events"]
      }
    }
  }
  ```

  **Seçenek B: Yerel derleme kullanma**

  Projeyi yerel olarak derlediyseniz, `dist/index.js` yoluna node kullanın:

  ```json
  {
    "mcpServers": {
      "apple-reminders": {
        "command": "node",
        "args": ["/absolute/path/to/mcp-server-apple-events/dist/index.js"]
      }
    }
  }
  ```

  Yerel MCP sunucuları bağlama hakkında daha fazla bilgi için [resmi MCP belgelerine](https://modelcontextprotocol.io/docs/develop/connect-local-servers) bakın.

  ### 3. Claude Desktop'u Yeniden Başlat

  Değişikliklerin etkili olması için:

  1. Claude Desktop'u tamamen kapatın (sadece pencereyi kapatmayın)
  2. Claude Desktop'u yeniden başlatın
  3. Apple Events sunucusunun bağlı olduğunu doğrulamak için araç simgesini arayın

  ## Kullanım Örnekleri

  Yapılandırıldıktan sonra, Claude'dan Apple Reminders'ınızla etkileşim kurmasını isteyebilirsiniz. İşte bazı örnek istemler:

  ### Reminders Oluşturma

  ```text
  "Buy groceries" reminderi yarın saat 17:00 için oluştur.
  "Call mom" reminderi ekle, not ekle "Ask about weekend plans".
  "Work" listemde "Submit report" reminderi yarları cuma günü için oluştur.
  URL ile reminder oluştur "Check this website: https://google.com".
  ```

  ### Reminder'ları Öncelik ile Oluşturma

  ```text
  "Finish quarterly report" reminderi cuma günü için yüksek öncelik ile oluştur.
  "Call client back" reminderi bugün için acil yüksek öncelik ile ekle.
  "Review documents" reminderi orta öncelik ile oluştur.
  ```

  ### Tekrarlayan Reminder'lar Oluşturma

  ```text
  Saat 9'da "Take medication" reminderi günlük oluştur.
  Pazartesi günü "Team standup meeting" reminderi haftalık ekle.
  "Pay rent" reminderi ayda bir 1'inde oluştur.
  15 Mart'ta vergi dosyası açmak için yıllık reminder ayarla.
  ```

  ### Konum Tabanlı Reminder'lar Oluşturma

  ```text
  Süpermarkete vardığımda "Buy milk" hatırlatması yap.
  Evime geldiğimde "Check mailbox" reminderi oluştur.
  Ofisten ayrılırken "Submit timesheet" reminderi ekle.
  ```

  ### Etiketlerle Reminder'lar Oluşturma

  ```text
  work ve urgent etiketleriyle "Review PR" reminderi oluştur.
  personal ve shopping etiketleriyle "Buy birthday gift" reminderi ekle.
  Etiketler ile reminder oluştur: project-alpha, backend, review.
  ```

  ### Alt Görevlerle Reminder'lar Oluşturma

  ```text
  Alt görevlerle "Grocery shopping" reminderi oluştur: milk, eggs, bread, butter.
  Kontrol listesi öğeleriyle "Pack for trip" reminderi ekle: passport, charger, clothes, toiletries.
  Alt görevlerle "Sprint planning" oluştur: review backlog, estimate stories, assign tasks.
  ```

  ### Alt Görevleri Yönetme

  ```text
  "Grocery shopping" reminderi için alt görevleri göster.
  "milk" alt görevini tamamlandı olarak işaretle.
  "cheese" alt görevi ekleme yapı reminderi için ekle.
  Packing listem reminderi'ndeki alt görevleri yeniden sırala.
  ```

  ### Reminders'ları Filtreleme

  ```text
  Tüm yüksek öncelikli reminders'ı göster.
  "work" etiketi ile etiketlenen reminders göster.
  Yalnızca tekrarlayan reminders göster.
  Konum tabanlı reminders bulunuz.
  Tamamlanmamış alt görevler içeren reminders göster.
  ```

  ### Reminder'ları Güncelle

  ```text
  "Buy groceries" reminderi başlığını "Buy organic groceries" olarak güncelle.
  "Call mom" reminderi bugün saat 18:00'e ayarla.
  "Submit report" reminderi güncelleyin ve tamamlandı olarak işaretleyin.
  "Buy groceries" reminderi notlarını "Don't forget milk and eggs" olarak değiştir.
  "Finish report" reminderi'nde önceliği yüksek olarak ayarla.
  "Review PR" reminderi'ne "urgent" etiketi ekle.
  ```

  ### Reminder'ları Yönet

  ```text
  Tüm reminders'ımı göster.
  "Shopping" listemden reminders'ı listele.
  Tamamlanmış reminders'ımı göster.
  ```

  ### Listelerle Çalışma

  ```text
  Tüm reminder listelerimi göster.
  "Work" listemden reminders göster.
  ```

  Sunucu şunları yapacaktır:

  - Doğal dil isteklerinizi işleyin
  - Apple'ın yerel Reminders uygulaması ile etkileşim kurun
  - Biçimlendirilmiş sonuçları Claude'a döndürün
  - macOS ile yerel entegrasyonunu koruyun

  ## Yapılandırılmış İstem Kitaplığı

  Sunucu, MCP `ListPrompts` ve `GetPrompt` uç noktaları aracılığıyla ortaya konan birleştirilmiş bir istem kaydıyla birlikte gelir. Her şablon, aşağı akış asistanlarının kırılgan serbest biçim örnekleri yerine öngörülebilir iskeleler alması için bir misyon, bağlam girdileri, numaralandırılmış süreç, kısıtlamalar, çıktı biçimi ve kalite çubuğu paylaşır.

  - **daily-task-organizer** — isteğe bağlı `today_focus` (bugün en çok başarmak istediğiniz şey) girdisi, öncelik işini kurtarma zamanıyla dengeleyen aynı gün yürütme planı oluşturur. Akıllı görev kümelemesi, odak bloğu planlama, otomatik reminder listesi organizasyonu ve birçok today due reminders sabit yuvaları ihtiyaç olduğunda takvim zaman bloklarını otomatik oluşturma destekler. Hızlı Kazanımlar, her reminder'ın due zaman damgasında biten "Focus Sprint — [Outcome]" 15 dakikalık tutmaları olur, Standard görevler aynı due zaman penceresine sabitlenen 30, 45 veya 60 dakikalık olaylara eşlenir.
  - **smart-reminder-creator** — isteğe bağlı `task_idea` (yapmak istediğiniz şeyin kısa açıklaması) en uygun şekilde planlanmış reminder yapısı oluşturur.
  - **reminder-review-assistant** — isteğe bağlı `review_focus` (örneğin gecikmeli veya liste adı) mevcut reminders'ı denetleyip optimize etmek için.
  - **weekly-planning-workflow** — isteğe bağlı `user_ideas` (bu hafta başarmak istediğiniz düşünceler ve fikirler) mevcut listelerle bağlantılı zaman bloklarıyla Pazartesi'den Pazar'a sıfırlamaya kılavuzluk eder.

  ### Tasarım kısıtlamaları ve doğrulama

  - İstemler kasıtlı olarak yerel Apple Reminders yetenekleriyle sınırlandırılmıştır (üçüncü taraf otomasyonları yok) ve geri alınamaz eylemleri taahhüt etmeden önce eksik bağlam istenir.
  - Paylaşılan biçimlendirme, çıktıları istemci uygulamalarında ekstra ayrıştırma yapıştırıcısı olmadan Markdown bölümleri veya tablolar olarak oluşturulabilir hale getirir.
  - İstem kopyasını değiştirdiğiniz her zaman meta veri, şema uyumluluğu ve anlatı montajını doğrulamak için `pnpm test -- src/server/prompts.test.ts` çalıştırın.

  ## Mevcut MCP Araçları

  Bu sunucu artık Apple Reminders ve Calendar alanlarını yansıtan hizmet kapsamlı MCP araçları ortaya koymaktadır. İşlenmek istediğiniz kaynakla eşleşen tanımlayıcıyı kullanın:

  ### Reminder Tasks Aracı

  **Araç Adı**: `reminders_tasks`

  Öncelik, alarmlar, tekrarlama kuralları, başlangıç/due/tamamlanma tarihleri, konum tetikleyicileri, etiketler ve alt görevler dahil olmak üzere tam CRUD desteğiyle bireysel reminder görevlerini yönetir.

  **Eylemler**: `read`, `create`, `update`, `delete`

  **Ana İşleyici Fonksiyonları**:

  - `handleReadReminders()` - Filtreleme seçenekleriyle reminders'ı oku
  - `handleCreateReminder()` - Yeni reminders oluştur
  - `handleUpdateReminder()` - Mevcut reminders'ı güncelle
  - `handleDeleteReminder()` - Reminders sil

  #### Eylem Parametreleri

  **Read Eylemi** (`action: "read"`):

  - `id` _(isteğe bağlı)_: Okumak için belirli reminder'ın benzersiz tanımlayıcısı
  - `filterList` _(isteğe bağlı)_: Gösterilecek reminder listesinin adı
  - `showCompleted` _(isteğe bağlı)_: Tamamlanmış reminders'ı dahil et (varsayılan: false)
  - `search` _(isteğe bağlı)_: Reminders'ı başlık veya içeriğe göre filtrelemek için arama terimi
  - `dueWithin` _(isteğe bağlı)_: Due tarih aralığına göre filtrele ("today", "tomorrow", "this-week", "overdue", "no-date")
  - `filterPriority` _(isteğe bağlı)_: Öncelik düzeyine göre filtrele ("high", "medium", "low", "none")
  - `filterRecurring` _(isteğe bağlı)_: Gerçek olduğunda yalnızca tekrarlayan reminders göster
  - `filterLocationBased` _(isteğe bağlı)_: Gerçek olduğunda yalnızca konum tabanlı reminders göster
  - `filterTags` _(isteğe bağlı)_: Etiketlere göre filtrele (reminder tüm belirtilen etiketlere sahip olmalı)

  **Create Eylemi** (`action: "create"`):

  - `title` _(gerekli)_: Reminder başlığı
  - `startDate` _(isteğe bağlı)_: 'YYYY-MM-DD' veya 'YYYY-MM-DD HH:mm:ss' biçiminde başlangıç tarihi
  - `dueDate` _(isteğe bağlı)_: 'YYYY-MM-DD' veya 'YYYY-MM-DD HH:mm:ss' biçiminde due tarih
  - `targetList` _(isteğe bağlı)_: Eklenecek reminder listesinin adı
  - `note` _(isteğe bağlı)_: Reminder'a eklenecek not metni
  - `url` _(isteğe bağlı)_: Reminder'la ilişkili URL
  - `location` _(isteğe bağlı)_: Konum metni (`EKCalendarItem.location`) (geofence tetikleyicisi değil)
  - `priority` _(isteğe bağlı)_: Öncelik düzeyi (0=none, 1=high, 5=medium, 9=low)
  - `alarms` _(isteğe bağlı)_: Alarm nesneleri dizisi (aşağıda Alarm Nesnesine bakın)
  - `recurrenceRules` _(isteğe bağlı)_: Tekrarlama kuralları dizisi (aşağıda Tekrarlama Kurallarına bakın)
  - `recurrence` _(isteğe bağlı)_: Eski tek tekrarlama kural nesnesi (bir öğeli `recurrenceRules` için kısayol)
  - `locationTrigger` _(isteğe bağlı)_: Konum tetikleyici nesnesi (aşağıda Konum Tetikleyicileri bölümüne bakın)
  - `tags` _(isteğe bağlı)_: Reminder'a eklenecek etiketler dizisi
  - `subtasks` _(isteğe bağlı)_: Reminder'la birlikte oluşturulacak alt görev başlıkları dizisi

  **Update Eylemi** (`action: "update"`):

  - `id` _(gerekli)_: Güncellenecek reminder'ın benzersiz tanımlayıcısı
  - `title` _(isteğe bağlı)_: Reminder için yeni başlık
  - `startDate` _(isteğe bağlı)_: Yeni başlangıç tarihi
  - `dueDate` _(isteğe bağlı)_: 'YYYY-MM-DD' veya 'YYYY-MM-DD HH:mm:ss' biçiminde yeni due tarih
  - `note` _(isteğe bağlı)_: Yeni not metni
  - `url` _(isteğe bağlı)_: Reminder'a eklenecek yeni URL
  - `location` _(isteğe bağlı)_: Yeni konum metni (temizlemek için boş dize olarak ayarla)
  - `completed` _(isteğe bağlı)_: Reminder'ı tamamlandı/tamamlanmadı olarak işaretle
  - `completionDate` _(isteğe bağlı)_: Açık tamamlanma tarihi/saati ayarla
  - `targetList` _(isteğe bağlı)_: Reminder'ı içeren listenin adı
  - `priority` _(isteğe bağlı)_: Yeni öncelik düzeyi (0=none, 1=high, 5=medium, 9=low)
  - `alarms` _(isteğe bağlı)_: Alarmları bu dizi ile değiştir
  - `clearAlarms` _(isteğe bağlı)_: Tüm alarmları kaldırmak için true olarak ayarla
  - `recurrenceRules` _(isteğe bağlı)_: Tekrarlama kurallarını bu dizi ile değiştir
  - `recurrence` _(isteğe bağlı)_: Eski tek tekrarlama kural (bir öğeli `recurrenceRules` için kısayol)
  - `clearRecurrence` _(isteğe bağlı)_: Tekrarlamayı kaldırmak için true olarak ayarla
  - `locationTrigger` _(isteğe bağlı)_: Yeni konum tetikleyici
  - `clearLocationTrigger` _(isteğe bağlı)_: Konum tetikleyicisini kaldırmak için true olarak ayarla
  - `tags` _(isteğe bağlı)_: Bu dizi ile tüm etiketleri değiştir
  - `addTags` _(isteğe bağlı)_: Eklenecek etiketler (mevcut olanlarla birleşir)
  - `removeTags` _(isteğe bağlı)_: Kaldırılacak etiketler

  **Delete Eylemi** (`action: "delete"`):

  - `id` _(gerekli)_: Silinecek reminder'ın benzersiz tanımlayıcısı

  #### Alarm Nesnesi

  ```json
  {
    "relativeOffset": -900,            // Saniyeler (due/start'a göreli); negatif = önce
    "absoluteDate": "2025-11-04T09:00:00+08:00", // Mutlak tetikleyici zamanı (isteğe bağlı)
    "locationTrigger": {               // Geofence tetikleyici (isteğe bağlı)
---

# Apple Events MCP Server ![Version 1.4.0](https://img.shields.io/badge/version-1.4.0-blue) ![License: MIT](https://img.shields.io/badge/license-MIT-green)

[![X Follow](https://img.shields.io/twitter/follow/FradSer?style=social)](https://x.com/FradSer)

English | [简体中文](README.zh-CN.md)

A Model Context Protocol (MCP) server that provides native integration with Apple Reminders and Calendar on macOS. This server allows you to interact with Apple Reminders and Calendar Events through a standardized interface with comprehensive management capabilities.

[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/fradser-mcp-server-apple-events-badge.png)](https://mseep.ai/app/fradser-mcp-server-apple-events)

> [!NOTE]
> **Looking ahead: [event](https://github.com/FradSer/event) — a pure Swift CLI for Apple Reminders and Calendar on macOS.**
>
> For scripting, automation, and direct terminal usage, we now recommend the standalone [`event`](https://github.com/FradSer/event) CLI. It exposes the same EventKit-backed reminder/calendar/list/subtask/tag operations this server uses today, with first-class Markdown and JSON output. Future versions of `mcp-server-apple-events` are planned to depend on the `event` CLI in place of the bundled `EventKitCLI` binary, so both projects can share a single, well-tested Swift implementation.

## Features

### Core Functionality

- **List Management**: View all reminders and reminder lists with advanced filtering options
- **Reminder Operations**: Full CRUD operations (Create, Read, Update, Delete) for reminders across lists
- **Rich Content Support**: Complete support for titles, notes, due dates, URLs, and completion status
- **Native macOS Integration**: Direct integration with Apple Reminders using EventKit framework

### Enhanced Reminder Features (v1.3.0)

- **Priority Support**: Set reminder priority (high/medium/low/none) with visual indicators
- **Recurring Reminders**: Create repeating reminders with flexible recurrence rules (daily, weekly, monthly, yearly)
- **Location-Based Triggers**: Set geofence reminders that trigger when arriving at or leaving a location
- **Tags/Labels**: Organize reminders with custom tags for cross-list categorization and filtering
- **Subtasks/Checklists**: Add checklist items to reminders with progress tracking

### Advanced Features

- **Smart Organization**: Automatic categorization and intelligent filtering by priority, due date, category, or completion status
- **Powerful Search**: Multi-criteria filtering including completion status, due date ranges, tags, and full-text search
- **Batch Operations**: Efficient handling of multiple reminders with optimized data access patterns
- **Permission Management**: Automatic validation and request for required macOS system permissions
- **Flexible Date Handling**: Support for multiple date formats (YYYY-MM-DD, ISO 8601) with timezone awareness
- **Unicode Support**: Full international character support with comprehensive input validation

### Technical Excellence

- **Clean Architecture**: 4-layer architecture following Clean Architecture principles with dependency injection
- **Type Safety**: Complete TypeScript coverage with Zod schema validation for runtime type checking
- **High Performance**: Swift-compiled binaries for performance-critical Apple Reminders operations
- **Robust Error Handling**: Consistent error responses with detailed diagnostic information
- **Repository Pattern**: Data access abstraction with standardized CRUD operations
- **Functional Programming**: Pure functions with immutable data structures where appropriate

## Prerequisites

- **Node.js 20 or later**
- **macOS** (required for Apple Reminders integration)
- **Xcode Command Line Tools** (required for compiling Swift code)
- **pnpm** (recommended for package management)

## macOS Permission Requirements (Sonoma 14+ / Sequoia 15)

Apple now separates Reminders and Calendar permissions into _write-only_ and _full-access_ scopes. The Swift bridge declares the following privacy keys so Claude can both read and write data when you approve access:

- `NSRemindersUsageDescription`
- `NSRemindersFullAccessUsageDescription`
- `NSRemindersWriteOnlyAccessUsageDescription`
- `NSCalendarsUsageDescription`
- `NSCalendarsFullAccessUsageDescription`
- `NSCalendarsWriteOnlyAccessUsageDescription`

When the CLI detects a `notDetermined` authorization status it calls `requestFullAccessToReminders` / `requestFullAccessToEvents`, which in turn triggers macOS to show the correct prompt. If the OS ever loses track of permissions, rerun `./check-permissions.sh` to re-open the dialogs.

If a Claude tool call still encounters a permission failure, the Node.js layer automatically runs a minimal AppleScript (`osascript -e 'tell application "Reminders" …'`) to surface the dialog and then retries the Swift CLI once.

### Troubleshooting Calendar Read Errors

If you see `Failed to read calendar events`, verify Calendar is set to **Full Calendar Access**:

- Open `System Settings > Privacy & Security > Calendars`
- Find the app that launches this MCP server (for example Terminal or Claude Desktop)
- Change access to **Full Calendar Access**

You can also re-run `./check-permissions.sh` (it now validates both Reminders and Calendars access).

**Verification command**

```bash
pnpm test -- src/swift/Info.plist.test.ts
```

The test suite ensures all required usage-description strings are present before shipping the binary.

### Troubleshooting `could not build module 'Foundation'` on macOS 26 (Tahoe)

If `pnpm build` fails with `could not build module 'Foundation'` (or `SDK is not supported by the compiler`), your Swift toolchain is older than the macOS 26 SDK requires. The macOS 26+ SDK ships a `Foundation.swiftinterface` that needs **Swift 6.3 or newer**; the Command Line Tools that shipped with the first macOS 26 point releases include Swift 6.2.x, which cannot parse it. See [issue #85](https://github.com/FradSer/mcp-server-apple-events/issues/85).

`pnpm build:swift` now detects this mismatch and prints the same remediation, but if you hit it manually:

1. Install Xcode 26.x from the App Store (ships Swift 6.3+), or
2. Update Command Line Tools to a version that ships Swift 6.3+:
   ```bash
   softwareupdate --list
   sudo softwareupdate -i "Command Line Tools for Xcode-<latest>"
   ```
3. If both are installed, point `xcode-select` at the full Xcode:
   ```bash
   sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
   ```

Verify with:

```bash
xcrun swiftc --version          # should report Apple Swift version 6.3 or newer
xcrun --show-sdk-version        # should match your macOS major version
```

## Quick Start

You can run the server directly using `npx`:

```bash
npx mcp-server-apple-events
```

## Configuration

### Configure Cursor

1. Open Cursor
2. Open Cursor settings
3. Click on "MCP" in the sidebar
4. Click "Add new global MCP server"
5. Configure the server with the following settings:

   ```json
   {
     "mcpServers": {
       "apple-reminders": {
         "command": "npx",
         "args": ["-y", "mcp-server-apple-events"]
       }
     }
   }
   ```

### Configure ChatWise

1. Open ChatWise
2. Go to Settings
3. Navigate to the Tools section
4. Click the "+" button
5. Configure the tool with the following settings:
   - Type: `stdio`
   - ID: `apple-reminders`
   - Command: `mcp-server-apple-events`
   - Args: (leave empty)

### Configure Claude Desktop

You need to configure Claude Desktop to recognize the Apple Events MCP server. There are two ways to access the configuration:

#### Option 1: Through Claude Desktop UI

1. Open Claude Desktop app
2. Enable Developer Mode from the top-left menu bar
3. Open Settings and navigate to the Developer Option
4. Click the Edit Config button to open `claude_desktop_config.json`

#### Option 2: Direct File Access

For macOS:

```bash
code ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

For Windows:

```bash
code %APPDATA%\Claude\claude_desktop_config.json
```

### 2. Add Server Configuration

Add the following configuration to your `claude_desktop_config.json`:

**Option A: Using npx (recommended)**

```json
{
  "mcpServers": {
    "apple-reminders": {
      "command": "npx",
      "args": ["-y", "mcp-server-apple-events"]
    }
  }
}
```

**Option B: Using local build**

If you have built the project locally, use node with the path to `dist/index.js`:

```json
{
  "mcpServers": {
    "apple-reminders": {
      "command": "node",
      "args": ["/absolute/path/to/mcp-server-apple-events/dist/index.js"]
    }
  }
}
```

For more information on connecting local MCP servers, see the
[official MCP documentation](https://modelcontextprotocol.io/docs/develop/connect-local-servers).

### 3. Restart Claude Desktop

For the changes to take effect:

1. Completely quit Claude Desktop (not just close the window)
2. Start Claude Desktop again
3. Look for the tool icon to verify the Apple Events server is connected

## Usage Examples

Once configured, you can ask Claude to interact with your Apple Reminders. Here are some example prompts:

### Creating Reminders

```text
Create a reminder to "Buy groceries" for tomorrow at 5 PM.
Add a reminder to "Call mom" with a note "Ask about weekend plans".
Create a reminder in my "Work" list to "Submit report" due next Friday.
Create a reminder with URL "Check this website: https://google.com".
```

### Creating Reminders with Priority

```text
Create a high priority reminder to "Finish quarterly report" due Friday.
Add an urgent high-priority reminder to "Call client back" for today.
Create a medium priority reminder to "Review documents".
```

### Creating Recurring Reminders

```text
Create a daily reminder to "Take medication" at 9 AM.
Add a weekly reminder every Monday to "Team standup meeting".
Create a monthly reminder on the 1st to "Pay rent".
Set up a yearly reminder on March 15 to "File taxes".
```

### Creating Location-Based Reminders

```text
Remind me to "Buy milk" when I arrive at the grocery store.
Create a reminder to "Check mailbox" when I get home.
Add a reminder to "Submit timesheet" when I leave the office.
```

### Creating Reminders with Tags

```text
Create a reminder "Review PR" with tags work and urgent.
Add a reminder "Buy birthday gift" tagged personal and shopping.
Create a reminder with tags: project-alpha, backend, review.
```

### Creating Reminders with Subtasks

```text
Create a reminder "Grocery shopping" with subtasks: milk, eggs, bread, butter.
Add a reminder "Pack for trip" with checklist items: passport, charger, clothes, toiletries.
Create "Sprint planning" with subtasks: review backlog, estimate stories, assign tasks.
```

### Managing Subtasks

```text
Show subtasks for my "Grocery shopping" reminder.
Mark the "milk" subtask as complete.
Add a new subtask "cheese" to my grocery list reminder.
Reorder the subtasks in my packing list.
```

### Filtering Reminders

```text
Show me all high priority reminders.
Show reminders tagged with "work".
Show recurring reminders only.
Find location-based reminders.
Show reminders with incomplete subtasks.
```

### Update Reminders

```text
Update the reminder "Buy groceries" with a new title "Buy organic groceries".
Update "Call mom" reminder to be due today at 6 PM.
Update the reminder "Submit report" and mark it as completed.
Change the notes on "Buy groceries" to "Don't forget milk and eggs".
Set priority to high on my "Finish report" reminder.
Add the tag "urgent" to my "Review PR" reminder.
```

### Managing Reminders

```text
Show me all my reminders.
List all reminders in my "Shopping" list.
Show my completed reminders.
```

### Working with Lists

```text
Show all my reminder lists.
Show reminders from my "Work" list.
```

The server will:

- Process your natural language requests
- Interact with Apple's native Reminders app
- Return formatted results to Claude
- Maintain native integration with macOS

## Structured Prompt Library

The server ships with a consolidated prompt registry exposed via the MCP `ListPrompts` and `GetPrompt` endpoints. Each template shares a mission, context inputs, numbered process, constraints, output format, and quality bar so downstream assistants receive predictable scaffolding instead of brittle free-form examples.

- **daily-task-organizer** — optional `today_focus` (what you most want to accomplish today) input produces a same-day execution blueprint that keeps priority work balanced with recovery time. Supports intelligent task clustering, focus block scheduling, automatic reminder list organization, and auto-creates calendar time blocks when many due-today reminders need fixed slots. Quick Win clusters become 15-minute "Focus Sprint — [Outcome]" holds that finish at each reminder's due timestamp, while Standard tasks map to 30-, 45-, or 60-minute events anchored to the same due-time window.
- **smart-reminder-creator** — optional `task_idea` (a short description of what you want to do) generates an optimally scheduled reminder structure.
- **reminder-review-assistant** — optional `review_focus` (e.g., overdue or a list name) to audit and optimize existing reminders.
- **weekly-planning-workflow** — optional `user_ideas` (your thoughts and ideas for what you want to accomplish this week) guides a Monday-through-Sunday reset with time blocks tied to existing lists.

### Design constraints and validation

- Prompts are intentionally constrained to native Apple Reminders capabilities (no third-party automations) and ask for missing context before committing to irreversible actions.
- Shared formatting keeps outputs renderable as Markdown sections or tables without extra parsing glue in client applications.
- Run `pnpm test -- src/server/prompts.test.ts` to assert metadata, schema compatibility, and narrative assembly each time you amend prompt copy.

## Available MCP Tools

This server now exposes service-scoped MCP tools that mirror Apple Reminders and Calendar domains. Use the identifier that matches the resource you want to manipulate:

### Reminder Tasks Tool

**Tool Name**: `reminders_tasks`

Manages individual reminder tasks with full CRUD support, including priority, alarms, recurrence rules, start/due/completion dates, location triggers, tags, and subtasks.

**Actions**: `read`, `create`, `update`, `delete`

**Main Handler Functions**:

- `handleReadReminders()` - Read reminders with filtering options
- `handleCreateReminder()` - Create new reminders
- `handleUpdateReminder()` - Update existing reminders
- `handleDeleteReminder()` - Delete reminders

#### Parameters by Action

**Read Action** (`action: "read"`):

- `id` _(optional)_: Unique identifier of a specific reminder to read
- `filterList` _(optional)_: Name of the reminder list to show
- `showCompleted` _(optional)_: Include completed reminders (default: false)
- `search` _(optional)_: Search term to filter reminders by title or content
- `dueWithin` _(optional)_: Filter by due date range ("today", "tomorrow", "this-week", "overdue", "no-date")
- `filterPriority` _(optional)_: Filter by priority level ("high", "medium", "low", "none")
- `filterRecurring` _(optional)_: Filter to only show recurring reminders when true
- `filterLocationBased` _(optional)_: Filter to only show location-based reminders when true
- `filterTags` _(optional)_: Filter by tags (reminders must have ALL specified tags)

**Create Action** (`action: "create"`):

- `title` _(required)_: Title of the reminder
- `startDate` _(optional)_: Start date in format 'YYYY-MM-DD' or 'YYYY-MM-DD HH:mm:ss'
- `dueDate` _(optional)_: Due date in format 'YYYY-MM-DD' or 'YYYY-MM-DD HH:mm:ss'
- `targetList` _(optional)_: Name of the reminders list to add to
- `note` _(optional)_: Note text to attach to the reminder
- `url` _(optional)_: URL to associate with the reminder
- `location` _(optional)_: Location text (`EKCalendarItem.location`) (not a geofence trigger)
- `priority` _(optional)_: Priority level (0=none, 1=high, 5=medium, 9=low)
- `alarms` _(optional)_: Array of alarm objects (see Alarm Object below)
- `recurrenceRules` _(optional)_: Array of recurrence rules (see Recurrence Rules below)
- `recurrence` _(optional)_: Legacy single recurrence rule object (shorthand for one-item `recurrenceRules`)
- `locationTrigger` _(optional)_: Location trigger object (see Location Triggers section below)
- `tags` _(optional)_: Array of tags to add to the reminder
- `subtasks` _(optional)_: Array of subtask titles to create with the reminder

**Update Action** (`action: "update"`):

- `id` _(required)_: Unique identifier of the reminder to update
- `title` _(optional)_: New title for the reminder
- `startDate` _(optional)_: New start date
- `dueDate` _(optional)_: New due date in format 'YYYY-MM-DD' or 'YYYY-MM-DD HH:mm:ss'
- `note` _(optional)_: New note text
- `url` _(optional)_: New URL to attach to the reminder
- `location` _(optional)_: New location text (set to empty string to clear)
- `completed` _(optional)_: Mark reminder as completed/uncompleted
- `completionDate` _(optional)_: Set an explicit completion date/time
- `targetList` _(optional)_: Name of the list containing the reminder
- `priority` _(optional)_: New priority level (0=none, 1=high, 5=medium, 9=low)
- `alarms` _(optional)_: Replace alarms with this array
- `clearAlarms` _(optional)_: Set to true to remove all alarms
- `recurrenceRules` _(optional)_: Replace recurrence rules with this array
- `recurrence` _(optional)_: Legacy single recurrence rule (shorthand for one-item `recurrenceRules`)
- `clearRecurrence` _(optional)_: Set to true to remove recurrence
- `locationTrigger` _(optional)_: New location trigger
- `clearLocationTrigger` _(optional)_: Set to true to remove location trigger
- `tags` _(optional)_: Replace all tags with this array
- `addTags` _(optional)_: Tags to add (merges with existing)
- `removeTags` _(optional)_: Tags to remove

**Delete Action** (`action: "delete"`):

- `id` _(required)_: Unique identifier of the reminder to delete

#### Alarm Object

```json
{
  "relativeOffset": -900,            // Seconds (relative to due/start); negative = before
  "absoluteDate": "2025-11-04T09:00:00+08:00", // Absolute trigger time (optional)
  "locationTrigger": {               // Geofence trigger (optional)
    "title": "Office",
    "latitude": 37.7749,
    "longitude": -122.4194,
    "radius": 100,
    "proximity": "enter"
  }
}
```

Each alarm must specify exactly **one** of `relativeOffset`, `absoluteDate`, or `locationTrigger`.

#### Recurrence Rule Object (for `recurrenceRules`)

```json
{
  "frequency": "daily" | "weekly" | "monthly" | "yearly",
  "interval": 1,           // Every N periods (default: 1)
  "endDate": "YYYY-MM-DD", // Optional end date
  "occurrenceCount": 10,   // Optional max occurrences
  "daysOfWeek": [1, 3, 5], // 1=Sunday, 7=Saturday (for weekly)
  "daysOfMonth": [1, 15],  // 1-31 (for monthly)
  "monthsOfYear": [3, 6]   // 1-12 (for yearly)
}
```

#### Location Trigger Object

```json
{
  "title": "Home", // Location name
  "latitude": 37.7749, // Latitude coordinate
  "longitude": -122.4194, // Longitude coordinate
  "radius": 100, // Geofence radius in meters (default: 100)
  "proximity": "enter" // "enter" or "leave"
}
```

#### Example Usage

```json
{
  "action": "create",
  "title": "Buy groceries",
  "dueDate": "2024-03-25 18:00:00",
  "targetList": "Shopping",
  "note": "Don't forget milk and eggs",
  "priority": 1,
  "tags": ["shopping", "errands"],
  "subtasks": ["Milk", "Eggs", "Bread"]
}
```

```json
{
  "action": "create",
  "title": "Team standup",
  "dueDate": "2024-03-25 09:00:00",
  "recurrence": {
    "frequency": "weekly",
    "interval": 1,
    "daysOfWeek": [2, 3, 4, 5, 6]
  }
}
```

```json
{
  "action": "create",
  "title": "Buy milk",
  "locationTrigger": {
    "title": "Grocery Store",
    "latitude": 37.7749,
    "longitude": -122.4194,
    "radius": 200,
    "proximity": "enter"
  }
}
```

```json
{
  "action": "read",
  "filterList": "Work",
  "showCompleted": false,
  "dueWithin": "today",
  "filterPriority": "high",
  "filterTags": ["urgent"]
}
```

```json
{
  "action": "delete",
  "id": "reminder-123"
}
```

### Reminder Subtasks Tool

**Tool Name**: `reminders_subtasks`

Manages subtasks/checklists within reminders. Subtasks are stored in the notes field using a human-readable format visible in the native Reminders app.

**Actions**: `read`, `create`, `update`, `delete`, `toggle`, `reorder`

**Main Handler Functions**:

- `handleReadSubtasks()` - List all subtasks for a reminder
- `handleCreateSubtask()` - Add a new subtask
- `handleUpdateSubtask()` - Modify a subtask
- `handleDeleteSubtask()` - Remove a subtask
- `handleToggleSubtask()` - Flip completion status
- `handleReorderSubtasks()` - Change subtask order

#### Parameters by Action

**Read Action** (`action: "read"`):

- `reminderId` _(required)_: Parent reminder ID

**Create Action** (`action: "create"`):

- `reminderId` _(required)_: Parent reminder ID
- `title` _(required)_: Subtask title

**Update Action** (`action: "update"`):

- `reminderId` _(required)_: Parent reminder ID
- `subtaskId` _(required)_: Subtask ID to update
- `title` _(optional)_: New title
- `completed` _(optional)_: New completion status

**Delete Action** (`action: "delete"`):

- `reminderId` _(required)_: Parent reminder ID
- `subtaskId` _(required)_: Subtask ID to delete

**Toggle Action** (`action: "toggle"`):

- `reminderId` _(required)_: Parent reminder ID
- `subtaskId` _(required)_: Subtask ID to toggle

**Reorder Action** (`action: "reorder"`):

- `reminderId` _(required)_: Parent reminder ID
- `order` _(required)_: Array of all subtask IDs in desired order

#### Example Usage

```json
{
  "action": "read",
  "reminderId": "reminder-123"
}
```

```json
{
  "action": "create",
  "reminderId": "reminder-123",
  "title": "Pick up dry cleaning"
}
```

```json
{
  "action": "toggle",
  "reminderId": "reminder-123",
  "subtaskId": "a1b2c3d4"
}
```

#### Subtask Storage Format

Subtasks are stored in the notes field with this human-readable format:

```text
User notes here...

---SUBTASKS---
[ ] {a1b2c3d4} First task
[x] {e5f6g7h8} Completed task
[ ] {i9j0k1l2} Another task
---END SUBTASKS---
```

This format ensures subtasks are visible in the native Reminders app while enabling programmatic access.

### Reminder Lists Tool

**Tool Name**: `reminders_lists`

Manages reminder lists - view existing lists or create new ones for organizing reminders.

**Actions**: `read`, `create`, `update`, `delete`

**Main Handler Functions**:

- `handleReadReminderLists()` - Read all reminder lists
- `handleCreateReminderList()` - Create new reminder lists
- `handleUpdateReminderList()` - Update existing reminder lists
- `handleDeleteReminderList()` - Delete reminder lists

#### Parameters by Action

**Read Action** (`action: "read"`):

- No additional parameters required

**Create Action** (`action: "create"`):

- `name` _(required)_: Name for new reminder list

**Update Action** (`action: "update"`):

- `name` _(required)_: Current name of the list to update
- `newName` _(required)_: New name for the reminder list

**Delete Action** (`action: "delete"`):

- `name` _(required)_: Name of the list to delete

#### Example Usage

```json
{
  "action": "create",
  "name": "Project Alpha"
}
```

### Calendar Events Tool

**Tool Name**: `calendar_events`

Handles EventKit calendar events (time blocks) with CRUD capabilities.

**Actions**: `read`, `create`, `update`, `delete`

**Main Handler Functions**:

- `handleReadCalendarEvents()` - Read events with optional filters
- `handleCreateCalendarEvent()` - Create calendar events
- `handleUpdateCalendarEvent()` - Update existing events
- `handleDeleteCalendarEvent()` - Delete calendar events

#### Parameters by Action

**Read Action** (`action: "read"`):

- `id` _(optional)_: Unique identifier of an event to read
- `filterCalendar` _(optional)_: Calendar name filter
- `search` _(optional)_: Keyword match against title, notes, or location
- `availability` _(optional)_: Filter by availability ("busy", "free", "tentative", "unavailable", "not-supported")
- `startDate` _(optional)_: Filter events starting on/after this date
- `endDate` _(optional)_: Filter events ending on/before this date

**Create Action** (`action: "create"`):

- `title` _(required)_: Event title
- `startDate` _(required)_: Start date/time
- `endDate` _(required)_: End date/time
- `targetCalendar` _(optional)_: Calendar name to create in
- `note`, `location`, `structuredLocation`, `url`, `isAllDay` _(optional)_: Additional metadata
- `availability` _(optional)_: Availability ("busy", "free", "tentative", "unavailable")
- `alarms` _(optional)_: Array of alarm objects (see Alarm Object above)
- `recurrenceRules` _(optional)_: Array of recurrence rules (see Recurrence Rule Object above)

**Update Action** (`action: "update"`):

- `id` _(required)_: Event identifier
- Other fields align with create parameters and are optional updates
- `clearAlarms` _(optional)_: Set to true to remove all alarms
- `clearRecurrence` _(optional)_: Set to true to remove all recurrence rules
- `span` _(optional)_: Scope for recurring event changes: `"this-event"` or `"future-events"`

**Delete Action** (`action: "delete"`):

- `id` _(required)_: Event identifier to remove
- `span` _(optional)_: Scope for recurring event deletes: `"this-event"` or `"future-events"`

### Calendar Collections Tool

**Tool Name**: `calendar_calendars`

Returns the available calendars from EventKit. This is useful before creating or updating events to confirm calendar identifiers.

**Actions**: `read`

**Main Handler Function**:

- `handleReadCalendars()` - List all calendars with IDs and titles

**Example Usage**

```json
{
  "action": "read"
}
```

**Example Response**

```json
{
  "content": [
    {
      "type": "text",
      "text": "### Calendars (Total: 3)\n- Work (ID: cal-1)\n- Personal (ID: cal-2)\n- Shared (ID: cal-3)"
    }
  ],
  "isError": false
}
```

#### Response Formats

**Success Response**:

```json
{
  "content": [
    {
      "type": "text",
      "text": "Successfully created reminder: Buy groceries"
    }
  ],
  "isError": false
}
```

**Reminder with Enhanced Features**:

When reading reminders, the output includes visual indicators for enhanced features:

- 🔄 - Recurring reminder
- 📍 - Location-based reminder
- 🏷️ - Has tags
- 📋 - Has subtasks

Example output:

```text
- [ ] Buy groceries 🏷️📋
  - List: Shopping
  - ID: reminder-123
  - Priority: high
  - Tags: #shopping #errands
  - Subtasks (1/3):
    - [x] Milk
    - [ ] Eggs
    - [ ] Bread
  - Due: 2024-03-25 18:00:00
```

**Note about URL fields**: The `url` field is fully supported by EventKit API. When you create or update a reminder with a URL parameter, the URL is stored in two places for maximum compatibility:

1. **EventKit URL field**: The URL is stored in the native `url` property (visible in Reminders app detail view via the "i" icon)
2. **Notes field**: The URL is also appended to the notes using a structured format for parsing

**Dual Storage Approach**:

- **URL field**: Stores a single URL for native Reminders app display
- **Notes field**: Stores URLs in a structured format for parsing and multiple URL support

```text
Reminder note content here...

URLs:
- https://example.com
- https://another-url.com
```

This ensures URLs are accessible both in the Reminders app UI and through the API/notes for parsing.

**URL Extraction**: You can extract URLs from reminder notes using regex:

```typescript
// Extract URLs from notes using regex
const urlsRegex = reminder.notes?.match(/https?:\/\/[^\s]+/g) || [];
```

**Benefits of Structured Format**:

- **Consistent parsing**: URLs are always in a predictable location
- **Multiple URL support**: Handle multiple URLs per reminder reliably
- **Clean separation**: Note content and URLs are clearly separated
- **Backward compatible**: Unstructured URLs still detected as fallback

**List Response**:

```json
{
  "reminders": [
    {
      "title": "Buy groceries",
      "list": "Shopping",
      "isCompleted": false,
      "dueDate": "2024-03-25 18:00:00",
      "priority": 1,
      "tags": ["shopping", "errands"],
      "subtasks": [
        { "id": "a1b2c3d4", "title": "Milk", "isCompleted": true },
        { "id": "e5f6g7h8", "title": "Eggs", "isCompleted": false }
      ],
      "subtaskProgress": { "completed": 1, "total": 2, "percentage": 50 },
      "notes": "Don't forget the organic options",
      "url": null
    }
  ],
  "total": 1,
  "filter": {
    "list": "Shopping",
    "showCompleted": false
  }
}
```

## Organization Strategies

The server provides intelligent reminder organization capabilities through four built-in strategies:

### Priority Strategy

Automatically categorizes reminders based on priority keywords:

- **High Priority**: Contains words like "urgent", "important", "critical", "asap"
- **Medium Priority**: Default category for standard reminders
- **Low Priority**: Contains words like "later", "someday", "eventually", "maybe"

### Due Date Strategy

Organizes reminders based on their due dates:

- **Overdue**: Past due dates
- **Today**: Due today
- **Tomorrow**: Due tomorrow
- **This Week**: Due within the current week
- **Next Week**: Due next week
- **Future**: Due beyond next week
- **No Date**: Reminders without due dates

### Category Strategy

Intelligently categorizes reminders by content analysis:

- **Work**: Business, meetings, projects, office, client related
- **Personal**: Home, family, friends, self-care related
- **Shopping**: Buy, store, purchase, groceries related
- **Health**: Doctor, exercise, medical, fitness, workout related
- **Finance**: Bills, payments, bank, budget related
- **Travel**: Trips, flights, hotels, vacation related
- **Education**: Study, learn, courses, books, research related
- **Uncategorized**: Doesn't match any specific category

### Completion Status Strategy

Simple binary organization:

- **Active**: Incomplete reminders
- **Completed**: Finished reminders

### Usage Examples

Organize all reminders by priority:

```text
Organize my reminders by priority
```

Categorize work-related reminders:

```text
Organize reminders from Work list by category
```

Sort overdue items:

```text
Organize overdue reminders by due date
```

## Tags System

Tags provide cross-list categorization for reminders. They are stored in the notes field using the `[#tag]` format, which keeps them human-readable in the native Reminders app.

### Tag Format

Tags are stored at the end of notes:

```text
User notes here...

[#work] [#urgent] [#project-alpha]
```

### Tag Rules

- Tags can contain letters, numbers, underscores, and hyphens
- Maximum 50 characters per tag
- Case-sensitive
- Filter by multiple tags uses AND logic (reminder must have ALL specified tags)

### Example Tag Operations

Create with tags:

```json
{
  "action": "create",
  "title": "Review code",
  "tags": ["work", "code-review", "urgent"]
}
```

Filter by tags:

```json
{
  "action": "read",
  "filterTags": ["work", "urgent"]
}
```

Update tags (add/remove):

```json
{
  "action": "update",
  "id": "reminder-123",
  "addTags": ["completed"],
  "removeTags": ["urgent"]
}
```

## Development

1. Install dependencies with pnpm (keeps the Swift bridge and TypeScript graph in sync):

```bash
pnpm install
```

1. Build the project (TypeScript and Swift binary) before invoking the CLI:

```bash
pnpm build
```

1. Run the full test suite to validate TypeScript, Swift bridge shims, and prompt templates:

```bash
pnpm test
```

1. Lint and format with Biome prior to committing:

```bash
pnpm exec biome check
```

### Launching from nested directories

The CLI entry point includes a project-root fallback, so you can start the server from nested paths (for example `dist/` or editor task runners) without losing access to the bundled Swift binary. The bootstrapper walks up to ten directories to find `package.json`; if you customise the folder layout, keep the manifest reachable within that depth to retain the guarantee.

### Available Scripts

- `pnpm build` - Build TypeScript and Swift binary (required before running)
- `pnpm build:swift` - Build the Swift binary only
- `pnpm test` - Run the Jest test suite
- `pnpm check` - Run Biome formatting and TypeScript type checking

### Dependencies

**Runtime Dependencies:**

- `@modelcontextprotocol/sdk ^1.29.0` - MCP protocol implementation
- `exit-on-epipe ^1.0.1` - Graceful process termination handling
- `zod ^4.4.3` - Runtime type validation

**Development Dependencies:**

- `typescript ^6.0.3` - TypeScript compiler
- `@types/node ^25.8.0` - Node.js type definitions
- `@types/jest ^30.0.0` - Jest type definitions
- `jest ^30.4.2` - Testing framework
- `@swc/core ^1.15.33` - SWC compiler
- `@swc/jest ^0.2.39` - SWC Jest transformer
- `@biomejs/biome 2.4.15` - Code formatting and linting

**Build Tools:**

- Swift binaries for native macOS integration
- TypeScript compilation for cross-platform compatibility

## License

MIT

## Contributing

Contributions welcome! Please read the contributing guidelines first.
