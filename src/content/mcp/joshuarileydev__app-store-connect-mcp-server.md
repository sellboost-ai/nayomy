---
name: "JoshuaRileyDev/app-store-connect-mcp-server"
description: "An MCP server to communicate with the App Store Connect API for iOS Developers"
category: "Developer Tools"
repo: "JoshuaRileyDev/app-store-connect-mcp-server"
stars: 325
url: "https://github.com/JoshuaRileyDev/app-store-connect-mcp-server"
body_length: 19121
license: "MIT"
language: "TypeScript"
body_tr: |-
  # App Store Connect MCP Sunucusu

  Apple'ın App Store Connect API'si ile etkileşim kurmak için bir Model Context Protocol (MCP) sunucusu. Bu sunucu, App Store Connect'te uygulamaları, beta test kullanıcılarını, bundle ID'lerini, cihazları, uygulama meta verilerini ve yetenekleri yönetmek için araçlar sağlar.

  [![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/install-mcp?name=app-store-connect&config=JTdCJTIyY29tbWFuZCUyMiUzQSUyMm5weCUyMC15JTIwYXBwc3RvcmUtY29ubmVjdC1tY3Atc2VydmVyJTIyJTdE)

  ## Genel Bakış

  App Store Connect MCP Sunucusu, yapay zeka ile Apple'ın App Store Connect ekosistemi arasındaki boşluğu dolduran kapsamlı bir araçtır. Model Context Protocol (MCP) temelinde inşa edilen bu sunucu, geliştiricilerin App Store Connect verilerine doğrudan konuşma tabanlı yapay zeka aracılığıyla erişmesini sağlayarak uygulama yönetimini, beta testini ve analitiği daha erişilebilir hale getirir.

  **Ana Avantajlar:**
  - 🤖 **Yapay Zeka Destekli Uygulama Yönetimi**: iOS ve macOS uygulamalarınızı doğal dil ile yönetin
  - 📊 **Kapsamlı Analitik**: Ayrıntılı uygulama performansı, satış ve kullanıcı katılım verilerine erişin
  - 👥 **Kolaylaştırılmış Beta Testi**: Beta gruplarını ve test kullanıcılarını verimli bir şekilde yönetin
  - 🌍 **Yerelleştirme Yönetimi**: Uygulama açıklamalarını, anahtar kelimeleri ve meta verileri tüm diller arasında güncelleyin
  - 🔧 **Geliştirici Araçları Entegrasyonu**: Xcode proje şemalarını listeleyin ve geliştirme iş akışları ile entegre olun
  - 🔐 **Güvenli Kimlik Doğrulama**: Resmi App Store Connect API'si ile JWT kimlik doğrulaması kullanır
  - 🚀 **Gerçek Zamanlı Veriler**: Apple sistemlerinden doğrudan güncel bilgilere erişin

  **Bu Kimin İçin:**
  - App Store Connect'te uygulama yöneten iOS/macOS geliştiricileri
  - Beta test programlarını koordine eden geliştirme ekipleri
  - Uygulama performansını ve kullanıcı katılımını analiz eden ürün yöneticileri
  - Uygulama meta verileri ve yerelleştirmelerini yöneten pazarlama ekipleri
  - App Store iş akışlarını otomatikleştiren DevOps mühendisleri
  - Apple geliştirici deneyimini kolaylaştırmak isteyen herkes

  Bu sunucu, karmaşık App Store Connect işlemlerini basit konuşma komutlarına dönüştürür; ister uygulama analitiklerini kontrol edin, beta test kullanıcılarını yönetin, uygulama açıklamalarını güncelleyin ya da geliştirme hattınızı keşfedin.

  <a href="https://glama.ai/mcp/servers/z4j2smln34"></a>
  <a href="https://smithery.ai/server/appstore-connect-mcp-server" style="text-decoration: none;">
    
  </a>
  [![MseeP.ai Security Assessment Badge](https://mseep.net/pr/joshuarileydev-app-store-connect-mcp-server-badge.png)](https://mseep.ai/app/joshuarileydev-app-store-connect-mcp-server)

  ## Özellikler

  - **Uygulama Yönetimi**
    - Tüm uygulamaları listele
    - Ayrıntılı uygulama bilgisine ulaş
    - Uygulama meta verileri ve ilişkilerini görüntüle

  - **Beta Testi**
    - Beta gruplarını listele
    - Beta test kullanıcılarını listele
    - Gruplardan test kullanıcılarını ekle/çıkar
    - Beta test yapılandırmalarını yönet
    - Beta geri bildirimini ekran görüntüleri ve cihaz bilgileri ile görüntüle

  - **App Store Sürüm Yerelleştirmeleri** ✨ **YENİ**
    - Yayın planlaması ile yeni app store sürümleri oluştur
    - Bir uygulama için tüm app store sürümlerini listele
    - Bir uygulama sürümü için tüm yerelleştirmeleri listele
    - Belirli yerelleştirme ayrıntılarını al
    - Uygulama açıklamalarını, anahtar kelimeleri ve promosyon metnini güncelle
    - Pazarlama ve destek URL'lerini yönet
    - Sürümler için "Yenilikleri" metnini güncelle

  - **Bundle ID Yönetimi**
    - Bundle ID'lerini listele
    - Yeni bundle ID'leri oluştur
    - Bundle ID ayrıntılarını al
    - Yetenekleri etkinleştir/devre dışı bırak

  - **Cihaz Yönetimi**
    - Kayıtlı cihazları listele
    - Cihaz türü, platform, duruma göre filtrele
    - Cihaz ayrıntılarını görüntüle

  - **Kullanıcı Yönetimi**
    - Takım üyelerini listele
    - Kullanıcı rollerini ve izinlerini görüntüle
    - Kullanıcıları role ve erişime göre filtrele

  - **Analitik & Raporlar**
    - Uygulamalar için analitik rapor istekleri oluştur
    - App Store katılım, ticaret ve kullanım analitiklerini indir
    - Performans ve framework kullanım raporlarına erişin
    - Satış ve trend raporlarını indir (günlük, haftalık, aylık, yıllık)
    - Bölgeye göre finansal raporları indir

  - **Xcode Geliştirme Araçları**
    - Xcode projelerinde ve çalışma alanlarında mevcut şemaları listele
    - Geliştirme iş akışları ve CI/CD pipeline'ları ile entegre ol

  ## Kurulum

  ### Smithery Kullanarak

  App Store Connect Sunucusunu Claude Desktop için otomatik olarak yüklemek için:

  ```bash
  npx @smithery/cli install appstore-connect-mcp-server --client claude
  ```

  ### Manuel Kurulum

  ```bash
  npm install @joshuarileydev/app-store-connect-mcp-server
  ```

  ## Yapılandırma

  Claude Desktop yapılandırma dosyanıza aşağıdakini ekleyin:

  ### macOS
  ```bash
  ~/Library/Application Support/Claude/claude_desktop_config.json
  ```

  ### Windows
  ```bash
  %APPDATA%\Claude\claude_desktop_config.json
  ```

  ```json
  {
    "mcpServers": {
      "app-store-connect": {
        "command": "npx",
        "args": [
          "-y",
          "appstore-connect-mcp-server"
        ],
        "env": {
          "APP_STORE_CONNECT_KEY_ID": "YOUR_KEY_ID",
          "APP_STORE_CONNECT_ISSUER_ID": "YOUR_ISSUER_ID",
          "APP_STORE_CONNECT_P8_PATH": "/path/to/your/auth-key.p8",
          "APP_STORE_CONNECT_VENDOR_NUMBER": "YOUR_VENDOR_NUMBER_OPTIONAL"
        }
      }
    }
  }
  ```

  ## Kimlik Doğrulama

  ### Gerekli Yapılandırma
  1. [App Store Connect](https://appstoreconnect.apple.com/access/integrations/api) adresinden bir App Store Connect API Anahtarı oluşturun
  2. .p8 özel anahtar dosyasını indirin
  3. Anahtar Kimliğinizi ve İhraçcı Kimliğinizi not edin
  4. Yapılandırmanızda gerekli ortam değişkenlerini ayarlayın:
     - `APP_STORE_CONNECT_KEY_ID`: API Anahtar Kimliğiniz
     - `APP_STORE_CONNECT_ISSUER_ID`: İhraçcı Kimliğiniz  
     - `APP_STORE_CONNECT_P8_PATH`: .p8 özel anahtar dosyasının yolu

  ### Satış & Finansal Raporlar için İsteğe Bağlı Yapılandırma
  Satış ve finansal raporlama araçlarını etkinleştirmek için şu da gereklidir:
  - `APP_STORE_CONNECT_VENDOR_NUMBER`: App Store Connect'teki satıcı numaranız

  **Not**: Satış ve finansal rapor araçları (`download_sales_report`, `download_finance_report`) yalnızca satıcı numarası yapılandırılmışsa kullanılabilir. Satıcı numaranızı App Store Connect'te "Satış ve Trendler" veya "Ödemeler ve Finansal Raporlar" altında bulabilirsiniz.

  ## Tam Araç Referansı

  ### 📱 Uygulama Yönetimi Araçları

  #### `list_apps`
  App Store Connect'te bulunan tüm uygulamaların bir listesini alın.

  **Parametreler:**
  - `limit` (opsiyonel): Döndürülecek maksimum uygulama sayısı (varsayılan: 100, maksimum: 200)
  - `bundleId` (opsiyonel): Bundle tanımlayıcısına göre filtrele

  **Örnek:**
  ```
  "Tüm uygulamalarımı listele"
  "Bundle ID'si com.example.myapp olan uygulamaları göster"
  "İlk 50 uygulamayı al"
  ```

  #### `get_app_info`
  Belirli bir uygulama hakkında ayrıntılı bilgi alın.

  **Parametreler:**
  - `appId` (gerekli): Uygulamanın kimliği
  - `include` (opsiyonel): Dahil edilecek ilişkili kaynaklar (örn. appClips, appInfos, appStoreVersions, betaGroups, builds)

  **Örnek:**
  ```
  "Uygulama kimliği 123456789 için bilgi al"
  "Uygulama 123456789'u beta grupları ve derlemeler ile göster"
  "Uygulamam hakkında app store sürümleri dahil ayrıntılı bilgi al"
  ```

  ### 👥 Beta Testi Araçları

  #### `list_beta_groups`
  Tüm beta test gruplarını (iç ve dış) listeleyin.

  **Parametreler:**
  - `limit` (opsiyonel): Döndürülecek maksimum grup sayısı (varsayılan: 100, maksimum: 200)
  - `appId` (opsiyonel): Uygulama kimliğine göre filtrele

  **Örnek:**
  ```
  "Tüm beta gruplarını göster"
  "Uygulama 123456789 için beta gruplarını listele"
  "İlk 20 beta grubunu al"
  ```

  #### `list_group_testers`
  Belirli bir beta gruptaki test kullanıcılarını listeleyin.

  **Parametreler:**
  - `groupId` (gerekli): Beta grubunun kimliği
  - `limit` (opsiyonel): Döndürülecek maksimum test kullanıcı sayısı (varsayılan: 100, maksimum: 200)

  **Örnek:**
  ```
  "ABC123 grubundaki tüm test kullanıcılarını listele"
  "Beta grubu ABC123'teki ilk 50 test kullanıcısını göster"
  ```

  #### `add_tester_to_group`
  Beta grubuna yeni bir test kullanıcı ekleyin.

  **Parametreler:**
  - `groupId` (gerekli): Beta grubunun kimliği
  - `email` (gerekli): Test kullanıcısının e-posta adresi
  - `firstName` (opsiyonel): Test kullanıcısının adı
  - `lastName` (opsiyonel): Test kullanıcısının soyadı

  **Örnek:**
  ```
  "john@example.com adresini beta grubu ABC123'e ekle"
  "John Smith (john@example.com) adresini grubu ABC123'e ekle"
  ```

  #### `remove_tester_from_group`
  Test kullanıcısını beta gruptan çıkarın.

  **Parametreler:**
  - `groupId` (gerekli): Beta grubunun kimliği
  - `testerId` (gerekli): Test kullanıcısının kimliği

  **Örnek:**
  ```
  "Test kullanıcısı XYZ789'u grubu ABC123'ten çıkar"
  "Test kullanıcısı XYZ789'u beta grubundan sil"
  ```

  #### `list_beta_feedback_screenshots`
  Beta geri bildirim ekran görüntüsü gönderilerini listeleyin.

  **Parametreler:**
  - `appId` (opsiyonel): Uygulama kimliğine göre filtrele
  - `bundleId` (opsiyonel): Bundle tanımlayıcısına göre filtrele
  - `buildId` (opsiyonel): Derleme kimliğine göre filtrele
  - `limit` (opsiyonel): Maksimum sonuçlar (varsayılan: 100)
  - `includeBuilds` (opsiyonel): Derleme bilgilerini dahil et
  - `includeTesters` (opsiyonel): Test kullanıcı bilgilerini dahil et

  **Örnek:**
  ```
  "Uygulama 123456789 için beta geri bildirim ekran görüntülerini göster"
  "Bundle ID'si com.example.app için geri bildirim ekran görüntülerini listele"
  "Derleme XYZ için test kullanıcı bilgisi ile geri bildirim al"
  ```

  #### `get_beta_feedback_screenshot`
  Belirli bir beta geri bildirim ekran görüntüsü hakkında ayrıntılı bilgi alın.

  **Parametreler:**
  - `feedbackId` (gerekli): Geri bildirimin kimliği
  - `includeBuilds` (opsiyonel): Derleme bilgilerini dahil et
  - `includeTesters` (opsiyonel): Test kullanıcı bilgilerini dahil et
  - `downloadScreenshot` (opsiyonel): Ekran görüntüsü görüntüsünü indir (varsayılan: true)

  **Örnek:**
  ```
  "Geri bildirim ekran görüntüsü FEEDBACK123'ü al"
  "Test kullanıcı ayrıntıları ile geri bildirim FEEDBACK123'ü göster"
  "Geri bildirim FEEDBACK123'ten ekran görüntüsünü indir"
  ```

  ### 🌍 App Store Sürüm Yerelleştirme Araçları

  #### `create_app_store_version`
  Bir uygulama için yeni bir app store sürümü oluşturun.

  **Parametreler:**
  - `appId` (gerekli): Uygulamanın kimliği
  - `platform` (gerekli): Platform (IOS, MAC_OS, TV_OS, VISION_OS)
  - `versionString` (gerekli): X.Y veya X.Y.Z biçiminde sürüm dizesi (örn. '1.0' veya '1.0.0')
  - `copyright` (opsiyonel): Bu sürüm için telif hakkı metni
  - `releaseType` (opsiyonel): Uygulamanın nasıl yayınlanması gerektiği (MANUAL, AFTER_APPROVAL, SCHEDULED)
  - `earliestReleaseDate` (opsiyonel): ISO 8601 tarih dizesi (releaseType SCHEDULED olduğunda gerekli)
  - `buildId` (opsiyonel): Bu sürümle ilişkilendirilecek derlemenin kimliği

  **Örnek:**
  ```
  "Uygulama 123456789 için iOS sürümü 2.0.0 oluştur"
  "Uygulama 123456789 için manuel yayın ile macOS sürümü 1.5.0 oluştur"
  "Uygulama 123456789 için 2024-02-01 tarihinde yayınlanacak planlı iOS sürümü 2.1.0 oluştur"
  "Uygulama 123456789 için derleme BUILD456 ve telif hakkı '2024 My Company' ile sürüm 1.2.0 oluştur"
  ```

  #### `list_app_store_versions`
  Belirli bir uygulama için tüm app store sürümlerini alın.

  **Parametreler:**
  - `appId` (gerekli): Uygulamanın kimliği
  - `limit` (opsiyonel): Döndürülecek maksimum sürüm sayısı (varsayılan: 100, maksimum: 200)
  - `filter` (opsiyonel): Filtre seçenekleri
    - `platform`: Platforma göre filtrele (IOS, MAC_OS, TV_OS)
    - `versionString`: Sürüm dizesine göre filtrele (örn. '1.0.0')
    - `appStoreState`: Duruma göre filtrele (örn. READY_FOR_SALE, PREPARE_FOR_SUBMISSION)

  **Örnek:**
  ```
  "Uygulama 123456789 için tüm sürümleri listele"
  "Uygulama 123456789 için iOS sürümlerini göster"
  "Uygulama 123456789 için sürüm 2.0.0'ı bul"
  "Uygulama 123456789 için incelemede olan sürümleri listele"
  ```

  #### `list_app_store_version_localizations`
  Belirli bir app store sürümü için tüm yerelleştirmeleri alın.

  **Parametreler:**
  - `appStoreVersionId` (gerekli): App store sürümünün kimliği
  - `limit` (opsiyonel): Maksimum yerelleştirme sayısı (varsayılan: 100, maksimum: 200)

  **Örnek:**
  ```
  "Uygulama sürümü VERSION123 için tüm yerelleştirmeleri listele"
  "App store sürümü VERSION123 için dil sürümlerini göster"
  ```

  #### `get_app_store_version_localization`
  Belirli bir yerelleştirme hakkında ayrıntılı bilgi alın.

  **Parametreler:**
  - `localizationId` (gerekli): Yerelleştirmenin kimliği

  **Örnek:**
  ```
  "Yerelleştirme LOCALE123 ayrıntılarını al"
  "Fransızca yerelleştirme LOCALE123'ü göster"
  ```

  #### `update_app_store_version_localization`
  App store sürümü yerelleştirmesinde belirli bir alanı güncelleyin.

  **Parametreler:**
  - `localizationId` (gerekli): Yerelleştirmenin kimliği
  - `field` (gerekli): Güncellenecek alan (description, keywords, marketingUrl, promotionalText, supportUrl, whatsNew)
  - `value` (gerekli): Alan için yeni değer

  **Örnek:**
  ```
  "Yerelleştirme LOCALE123 için açıklamayı 'Şaşırtıcı yeni uygulama açıklaması' olarak güncelle"
  "LOCALE123 için anahtar kelimeleri 'üretkenlik, görevler, organize' olarak değiştir"
  "Yerelleştirme LOCALE123 için yenilikleri 'Hata düzeltmeleri ve performans iyileştirmeleri' olarak güncelle"
  ```

  ### 🔤 Bundle ID Yönetimi Araçları

  #### `create_bundle_id`
  Uygulama geliştirme için yeni bir bundle ID'yi kaydedin.

  **Parametreler:**
  - `identifier` (gerekli): Bundle ID'si dizesi (örn. 'com.example.app')
  - `name` (gerekli): Bundle ID'si için bir ad
  - `platform` (gerekli): Platform (IOS, MAC_OS, veya UNIVERSAL)
  - `seedId` (opsiyonel): Takımınızın seed ID'si

  **Örnek:**
  ```
  "iOS için 'My New App' adıyla com.mycompany.newapp bundle ID'sini oluştur"
  "'Example App' adıyla evrensel bundle ID'sini com.example.app olarak kaydet"
  ```

  #### `list_bundle_ids`
  Takımınıza kayıtlı bundle ID'lerini bulun ve listeleyin.

  **Parametreler:**
  - `limit` (opsiyonel): Maksimum sonuçlar (varsayılan: 100, maksimum: 200)
  - `sort` (opsiyonel): Sıralama düzeni (name, -name, platform, -platform, identifier, -identifier)
  - `filter` (opsiyonel): Tanımlayıcı, ad, platform veya seedId'ye göre filtrele
  - `include` (opsiyonel): İlişkili kaynakları dahil et (profiles, bundleIdCapabilities, app)

  **Örnek:**
  ```
  "Tüm bundle ID'lerini listele"
  "Ada göre sıralanmış iOS bundle ID'lerini göster"
  "'example' içeren bundle ID'lerini bul"
  ```

  #### `get_bundle_id_info`
  Belirli bir bundle ID hakkında ayrıntılı bilgi alın.

  **Parametreler:**
  - `bundleIdId` (gerekli): Bundle ID'sinin kimliği
  - `include` (opsiyonel): Dahil edilecek ilişkili kaynaklar
  - `fields` (opsiyonel): Dahil edilecek belirli alanlar

  **Örnek:**
  ```
  "Bundle ID BUNDLE123 için bilgi al"
  "Bundle ID BUNDLE123'ü yetenekleri ile göster"
  ```

  #### `enable_bundle_capability`
  Bir bundle ID için yetenek etkinleştirin.

  **Parametreler:**
  - `bundleIdId` (gerekli): Bundle ID'sinin kimliği
  - `capabilityType` (gerekli): Yetenek türü (örn. PUSH_NOTIFICATIONS, ICLOUD, GAME_CENTER)
  - `settings` (opsiyonel): Yetenek özel ayarları

  **Örnek:**
  ```
  "Bundle ID BUNDLE123 için push bildirimlerini etkinleştir"
  "Bundle BUNDLE123'e iCloud yeteneğini ekle"
  "Bundle ID BUNDLE123 için Game Center'ı etkinleştir"
  ```

  #### `disable_bundle_capability`
  Bir bundle ID için yetenek devre dışı bırakın.

  **Parametreler:**
  - `capabilityId` (gerekli): Devre dışı bırakılacak yeteneğin kimliği

  **Örnek:**
  ```
  "Yetenek CAP123'ü devre dışı bırak"
  "Yetenek CAP123'ü bundle ID'sinden kaldır"
  ```

  ### 📱 Cihaz Yönetimi Araçları

  #### `list_devices`
  Takımınıza kayıtlı tüm cihazların bir listesini alın.

  **Parametreler:**
  - `limit` (opsiyonel): Maksimum sonuçlar (varsayılan: 100, maksimum: 200)
  - `sort` (opsiyonel): Sıralama düzeni (name, platform, status, udid, deviceClass, model, addedDate)
  - `filter` (opsiyonel): Ad, platform, durum, udid veya deviceClass'a göre filtrele
  - `fields` (opsiyonel): Dahil edilecek belirli alanlar

  **Örnek:**
  ```
  "Tüm cihazları listele"
  "Etkinleştirilen iOS cihazlarını göster"
  "Adında 'John' içeren cihazları bul"
  "İPhone'ları ekleme tarihine göre sıralanmış şekilde listele"
  ```

  ### 👤 Kullanıcı Yönetimi Araçları

  #### `list_users`
  App Store Connect takımınızdaki tüm kullanıcıların bir listesini alın.

  **Parametreler:**
  - `limit` (opsiyonel): Maksimum sonuçlar (varsayılan: 100, maksimum: 200)
  - `sort` (opsiyonel): Sıralama düzeni (username, firstName, lastName, roles)
  - `filter` (opsiyonel): Kullanıcı adı veya rollere göre filtrele
  - `fields` (opsiyonel): Dahil edilecek belirli alanlar
  - `include` (opsiyonel): visibleApps ilişkisini dahil et

  **Örnek:**
  ```
  "Tüm takım üyelerini listele"
  "Yönetici rolüne sahip kullanıcıları göster"
  "Geliştiricileri soyadına göre sıralanmış şekilde bul"
  "Görünür uygulamaları ile birlikte kullanıcıları listele"
  ```

  ### 📊 Analitik & Raporlar Araçları

  #### `create_analytics_report_request`
  Bir uygulama için yeni bir analitik rapor isteği oluşturun.

  **Parametreler:**
  - `appId` (gerekli): Uygulama kimliği
  - `accessType` (gerekli): Analitik türü (ONGOING veya ONE_TIME_SNAPSHOT)
  - `frequency` (opsiyonel): Devam eden raporlar için rapor sıklığı (DAILY, WEEKLY, MONTHLY)
  - `startDate` (opsiyonel): Başlama tarihi (YYYY-MM-DD)
  - `endDate` (opsiyonel): Bitiş tarihi (YYYY-MM-DD)

  **Örnek:**
  ```
  "Uygulama 123456789 için günlük analitik raporu oluştur"
  "Uygulama 123456789 için 2024-01-01 ile 2024-01-31 tarihleri arasında tek seferlik anlık görüntü raporu oluştur"
  ```

  #### `list_analytics_reports`
  Bir istek için mevcut analitik raporlarını alın.

  **Parametreler:**
  - `reportRequestId` (gerekli): Rapor isteğinin kimliği
  - `limit` (opsiyonel): Maksimum sonuçlar (varsayılan: 100, maksimum: 200)
  - `filter` (opsiyonel): Kategori, ad veya tarihe göre filtrele

  **Örnek:**
  ```
  "İstek REQ123 için raporları listele"
  "İstek REQ123 için uygulama kullanım raporlarını göster"
  ```

  #### `list_analytics_report_segments`
  Belirli bir analitik rapor için segmentleri alın.

  **Parametreler:**
  - `reportId` (gerekli): Analitik raporunun kimliği
  - `limit` (opsiyonel): Maksimum sonuçlar (varsayılan: 100, maksimum: 200)

  **Örnek:**
  ```
  "Rapor REPORT123 için segmentleri listele"
  "Rapor REPORT123 için indirme URL'lerini al"
  ```

  #### `download_analytics_report_segment`
  Bir analitik rapor segmentinden veri indirin.

  **Parametreler:**
  - `url` (gerekli): Segment indirme URL'si

  **Örnek:**
  ```
  "https://api.appstoreconnect.apple.com/... adresinden veri indir"
  ```

  ### 💰 Satış & Finansal Raporlar Araçları (Satıcı Numarası Gerekli)

  #### `download_sales_report`
  Satış ve trend raporlarını indirin.

  **Parametreler:**
  - `frequency` (gerekli): Rapor sıklığı (DAILY, WEEKLY, MONTHLY, YEARLY)
  - `reportDate` (gerekli): Uygun biçimdeki tarih
  - `reportType` (gerekli): Rapor türü (SALES, SUBSCRIPTION, SUBSCRIPTION_EVENT, SUBSCRIBER, NEWSSTAND, PREORDER)
  - `reportSubType` (gerekli
---

# App Store Connect MCP Server

A Model Context Protocol (MCP) server for interacting with the App Store Connect API. This server provides tools for managing apps, beta testers, bundle IDs, devices, app metadata, and capabilities in App Store Connect.

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/install-mcp?name=app-store-connect&config=JTdCJTIyY29tbWFuZCUyMiUzQSUyMm5weCUyMC15JTIwYXBwc3RvcmUtY29ubmVjdC1tY3Atc2VydmVyJTIyJTdE)

## Overview

The App Store Connect MCP Server is a comprehensive tool that bridges the gap between AI and Apple's App Store Connect ecosystem. Built on the Model Context Protocol (MCP), this server enables developers to interact with their App Store Connect data directly through conversational AI, making app management, beta testing, and analytics more accessible than ever.

**Key Benefits:**
- 🤖 **AI-Powered App Management**: Use natural language to manage your iOS and macOS apps
- 📊 **Comprehensive Analytics**: Access detailed app performance, sales, and user engagement data
- 👥 **Streamlined Beta Testing**: Efficiently manage beta groups and testers
- 🌍 **Localization Management**: Update app descriptions, keywords, and metadata across all languages
- 🔧 **Developer Tools Integration**: List Xcode project schemes and integrate with development workflows
- 🔐 **Secure Authentication**: Uses official App Store Connect API with JWT authentication
- 🚀 **Real-time Data**: Access up-to-date information directly from Apple's systems

**Who This Is For:**
- iOS/macOS developers managing apps in App Store Connect
- Development teams coordinating beta testing programs
- Product managers analyzing app performance and user engagement
- Marketing teams managing app metadata and localizations
- DevOps engineers automating app store workflows
- Anyone looking to streamline their Apple developer experience

This server transforms complex App Store Connect operations into simple conversational commands, whether you're checking app analytics, managing beta testers, updating app descriptions, or exploring your development pipeline.

<a href="https://glama.ai/mcp/servers/z4j2smln34"></a>
<a href="https://smithery.ai/server/appstore-connect-mcp-server" style="text-decoration: none;">
  
</a>
[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/joshuarileydev-app-store-connect-mcp-server-badge.png)](https://mseep.ai/app/joshuarileydev-app-store-connect-mcp-server)

## Features

- **App Management**
  - List all apps
  - Get detailed app information
  - View app metadata and relationships

- **Beta Testing**
  - List beta groups
  - List beta testers
  - Add/remove testers from groups
  - Manage beta test configurations
  - View beta feedback with screenshots and device information

- **App Store Version Localizations** ✨ **NEW**
  - Create new app store versions with release scheduling
  - List all app store versions for an app
  - List all localizations for an app version
  - Get specific localization details
  - Update app descriptions, keywords, and promotional text
  - Manage marketing and support URLs
  - Update "What's New" text for releases

- **Bundle ID Management**
  - List bundle IDs
  - Create new bundle IDs
  - Get bundle ID details
  - Enable/disable capabilities

- **Device Management**
  - List registered devices
  - Filter by device type, platform, status
  - View device details

- **User Management**
  - List team members
  - View user roles and permissions
  - Filter users by role and access

- **Analytics & Reports**
  - Create analytics report requests for apps
  - Download App Store engagement, commerce, and usage analytics
  - Access performance and frameworks usage reports
  - Download sales and trends reports (daily, weekly, monthly, yearly)
  - Download finance reports by region

- **Xcode Development Tools**
  - List available schemes in Xcode projects and workspaces
  - Integrate with development workflows and CI/CD pipelines

## Installation

### Using Smithery

To install App Store Connect Server for Claude Desktop automatically:

```bash
npx @smithery/cli install appstore-connect-mcp-server --client claude
```

### Manual Installation

```bash
npm install @joshuarileydev/app-store-connect-mcp-server
```

## Configuration

Add the following to your Claude Desktop configuration file:

### macOS
```bash
~/Library/Application Support/Claude/claude_desktop_config.json
```

### Windows
```bash
%APPDATA%\Claude\claude_desktop_config.json
```

```json
{
  "mcpServers": {
    "app-store-connect": {
      "command": "npx",
      "args": [
        "-y",
        "appstore-connect-mcp-server"
      ],
      "env": {
        "APP_STORE_CONNECT_KEY_ID": "YOUR_KEY_ID",
        "APP_STORE_CONNECT_ISSUER_ID": "YOUR_ISSUER_ID",
        "APP_STORE_CONNECT_P8_PATH": "/path/to/your/auth-key.p8",
        "APP_STORE_CONNECT_VENDOR_NUMBER": "YOUR_VENDOR_NUMBER_OPTIONAL"
      }
    }
  }
}
```

## Authentication

### Required Configuration
1. Generate an App Store Connect API Key from [App Store Connect](https://appstoreconnect.apple.com/access/integrations/api)
2. Download the .p8 private key file
3. Note your Key ID and Issuer ID
4. Set the required environment variables in your configuration:
   - `APP_STORE_CONNECT_KEY_ID`: Your API Key ID
   - `APP_STORE_CONNECT_ISSUER_ID`: Your Issuer ID  
   - `APP_STORE_CONNECT_P8_PATH`: Path to your .p8 private key file

### Optional Configuration for Sales & Finance Reports
To enable sales and finance reporting tools, you'll also need:
- `APP_STORE_CONNECT_VENDOR_NUMBER`: Your vendor number from App Store Connect

**Note**: Sales and finance report tools (`download_sales_report`, `download_finance_report`) will only be available if the vendor number is configured. You can find your vendor number in App Store Connect under "Sales and Trends" or "Payments and Financial Reports".

## Complete Tool Reference

### 📱 App Management Tools

#### `list_apps`
Get a list of all apps in App Store Connect.

**Parameters:**
- `limit` (optional): Maximum number of apps to return (default: 100, max: 200)
- `bundleId` (optional): Filter by bundle identifier

**Example:**
```
"List all my apps"
"Show me apps with bundle ID com.example.myapp"
"Get the first 50 apps"
```

#### `get_app_info`
Get detailed information about a specific app.

**Parameters:**
- `appId` (required): The ID of the app
- `include` (optional): Related resources to include (e.g., appClips, appInfos, appStoreVersions, betaGroups, builds)

**Example:**
```
"Get info for app ID 123456789"
"Show me app 123456789 with beta groups and builds"
"Get detailed information about my app including app store versions"
```

### 👥 Beta Testing Tools

#### `list_beta_groups`
List all beta testing groups (internal and external).

**Parameters:**
- `limit` (optional): Maximum number of groups to return (default: 100, max: 200)
- `appId` (optional): Filter by app ID

**Example:**
```
"Show all beta groups"
"List beta groups for app 123456789"
"Get the first 20 beta groups"
```

#### `list_group_testers`
List testers in a specific beta group.

**Parameters:**
- `groupId` (required): The ID of the beta group
- `limit` (optional): Maximum number of testers to return (default: 100, max: 200)

**Example:**
```
"List all testers in group ABC123"
"Show me the first 50 testers in beta group ABC123"
```

#### `add_tester_to_group`
Add a new tester to a beta group.

**Parameters:**
- `groupId` (required): The ID of the beta group
- `email` (required): Email address of the tester
- `firstName` (optional): Tester's first name
- `lastName` (optional): Tester's last name

**Example:**
```
"Add john@example.com to beta group ABC123"
"Add John Smith (john@example.com) to group ABC123"
```

#### `remove_tester_from_group`
Remove a tester from a beta group.

**Parameters:**
- `groupId` (required): The ID of the beta group
- `testerId` (required): The ID of the tester

**Example:**
```
"Remove tester XYZ789 from group ABC123"
"Delete tester XYZ789 from beta group ABC123"
```

#### `list_beta_feedback_screenshots`
List beta feedback screenshot submissions.

**Parameters:**
- `appId` (optional): Filter by app ID
- `bundleId` (optional): Filter by bundle identifier
- `buildId` (optional): Filter by build ID
- `limit` (optional): Maximum results (default: 100)
- `includeBuilds` (optional): Include build information
- `includeTesters` (optional): Include tester information

**Example:**
```
"Show beta feedback screenshots for app 123456789"
"List feedback screenshots for bundle ID com.example.app"
"Get feedback with tester info for build XYZ"
```

#### `get_beta_feedback_screenshot`
Get detailed information about a specific beta feedback screenshot.

**Parameters:**
- `feedbackId` (required): The ID of the feedback
- `includeBuilds` (optional): Include build information
- `includeTesters` (optional): Include tester information
- `downloadScreenshot` (optional): Download the screenshot image (default: true)

**Example:**
```
"Get feedback screenshot FEEDBACK123"
"Show me feedback FEEDBACK123 with tester details"
"Download screenshot from feedback FEEDBACK123"
```

### 🌍 App Store Version Localization Tools

#### `create_app_store_version`
Create a new app store version for an app.

**Parameters:**
- `appId` (required): The ID of the app
- `platform` (required): The platform (IOS, MAC_OS, TV_OS, VISION_OS)
- `versionString` (required): Version string in format X.Y or X.Y.Z (e.g., '1.0' or '1.0.0')
- `copyright` (optional): Copyright text for this version
- `releaseType` (optional): How the app should be released (MANUAL, AFTER_APPROVAL, SCHEDULED)
- `earliestReleaseDate` (optional): ISO 8601 date string (required when releaseType is SCHEDULED)
- `buildId` (optional): ID of the build to associate with this version

**Example:**
```
"Create iOS version 2.0.0 for app 123456789"
"Create macOS version 1.5.0 for app 123456789 with manual release"
"Create scheduled iOS version 2.1.0 for app 123456789 releasing on 2024-02-01"
"Create version 1.2.0 for app 123456789 with build BUILD456 and copyright '2024 My Company'"
```

#### `list_app_store_versions`
Get all app store versions for a specific app.

**Parameters:**
- `appId` (required): The ID of the app
- `limit` (optional): Maximum number of versions to return (default: 100, max: 200)
- `filter` (optional): Filter options
  - `platform`: Filter by platform (IOS, MAC_OS, TV_OS)
  - `versionString`: Filter by version string (e.g., '1.0.0')
  - `appStoreState`: Filter by state (e.g., READY_FOR_SALE, PREPARE_FOR_SUBMISSION)

**Example:**
```
"List all versions for app 123456789"
"Show iOS versions for app 123456789"
"Find version 2.0.0 for app 123456789"
"List versions in review for app 123456789"
```

#### `list_app_store_version_localizations`
Get all localizations for a specific app store version.

**Parameters:**
- `appStoreVersionId` (required): The ID of the app store version
- `limit` (optional): Maximum number of localizations (default: 100, max: 200)

**Example:**
```
"List all localizations for app version VERSION123"
"Show me language versions for app store version VERSION123"
```

#### `get_app_store_version_localization`
Get detailed information about a specific localization.

**Parameters:**
- `localizationId` (required): The ID of the localization

**Example:**
```
"Get localization details for LOCALE123"
"Show me the French localization LOCALE123"
```

#### `update_app_store_version_localization`
Update a specific field in an app store version localization.

**Parameters:**
- `localizationId` (required): The ID of the localization
- `field` (required): Field to update (description, keywords, marketingUrl, promotionalText, supportUrl, whatsNew)
- `value` (required): New value for the field

**Example:**
```
"Update description for localization LOCALE123 to 'Amazing new app description'"
"Change keywords for LOCALE123 to 'productivity, tasks, organize'"
"Update what's new text for LOCALE123 to 'Bug fixes and performance improvements'"
```

### 🔤 Bundle ID Management Tools

#### `create_bundle_id`
Register a new bundle ID for app development.

**Parameters:**
- `identifier` (required): The bundle ID string (e.g., 'com.example.app')
- `name` (required): A name for the bundle ID
- `platform` (required): Platform (IOS, MAC_OS, or UNIVERSAL)
- `seedId` (optional): Your team's seed ID

**Example:**
```
"Create bundle ID com.mycompany.newapp for iOS named 'My New App'"
"Register universal bundle ID com.example.app called 'Example App'"
```

#### `list_bundle_ids`
Find and list bundle IDs registered to your team.

**Parameters:**
- `limit` (optional): Maximum results (default: 100, max: 200)
- `sort` (optional): Sort order (name, -name, platform, -platform, identifier, -identifier)
- `filter` (optional): Filter by identifier, name, platform, or seedId
- `include` (optional): Include related resources (profiles, bundleIdCapabilities, app)

**Example:**
```
"List all bundle IDs"
"Show iOS bundle IDs sorted by name"
"Find bundle IDs containing 'example'"
```

#### `get_bundle_id_info`
Get detailed information about a specific bundle ID.

**Parameters:**
- `bundleIdId` (required): The ID of the bundle ID
- `include` (optional): Related resources to include
- `fields` (optional): Specific fields to include

**Example:**
```
"Get info for bundle ID BUNDLE123"
"Show bundle ID BUNDLE123 with capabilities"
```

#### `enable_bundle_capability`
Enable a capability for a bundle ID.

**Parameters:**
- `bundleIdId` (required): The ID of the bundle ID
- `capabilityType` (required): Type of capability (e.g., PUSH_NOTIFICATIONS, ICLOUD, GAME_CENTER)
- `settings` (optional): Capability-specific settings

**Example:**
```
"Enable push notifications for bundle ID BUNDLE123"
"Add iCloud capability to bundle BUNDLE123"
"Enable Game Center for bundle ID BUNDLE123"
```

#### `disable_bundle_capability`
Disable a capability for a bundle ID.

**Parameters:**
- `capabilityId` (required): The ID of the capability to disable

**Example:**
```
"Disable capability CAP123"
"Remove capability CAP123 from bundle ID"
```

### 📱 Device Management Tools

#### `list_devices`
Get a list of all devices registered to your team.

**Parameters:**
- `limit` (optional): Maximum results (default: 100, max: 200)
- `sort` (optional): Sort order (name, platform, status, udid, deviceClass, model, addedDate)
- `filter` (optional): Filter by name, platform, status, udid, or deviceClass
- `fields` (optional): Specific fields to include

**Example:**
```
"List all devices"
"Show enabled iOS devices"
"Find devices with name containing 'John'"
"List iPhones sorted by date added"
```

### 👤 User Management Tools

#### `list_users`
Get a list of all users on your App Store Connect team.

**Parameters:**
- `limit` (optional): Maximum results (default: 100, max: 200)
- `sort` (optional): Sort order (username, firstName, lastName, roles)
- `filter` (optional): Filter by username or roles
- `fields` (optional): Specific fields to include
- `include` (optional): Include visibleApps relationship

**Example:**
```
"List all team members"
"Show users with admin role"
"Find developers sorted by last name"
"List users with their visible apps"
```

### 📊 Analytics & Reports Tools

#### `create_analytics_report_request`
Create a new analytics report request for an app.

**Parameters:**
- `appId` (required): The app ID
- `accessType` (required): Type of analytics (ONGOING or ONE_TIME_SNAPSHOT)
- `frequency` (optional): Report frequency for ongoing reports (DAILY, WEEKLY, MONTHLY)
- `startDate` (optional): Start date (YYYY-MM-DD)
- `endDate` (optional): End date (YYYY-MM-DD)

**Example:**
```
"Create daily analytics report for app 123456789"
"Generate one-time snapshot report for app 123456789 from 2024-01-01 to 2024-01-31"
```

#### `list_analytics_reports`
Get available analytics reports for a request.

**Parameters:**
- `reportRequestId` (required): The report request ID
- `limit` (optional): Maximum results (default: 100, max: 200)
- `filter` (optional): Filter by category, name, or date

**Example:**
```
"List reports for request REQ123"
"Show app usage reports for request REQ123"
```

#### `list_analytics_report_segments`
Get segments for a specific analytics report.

**Parameters:**
- `reportId` (required): The analytics report ID
- `limit` (optional): Maximum results (default: 100, max: 200)

**Example:**
```
"List segments for report REPORT123"
"Get download URLs for report REPORT123"
```

#### `download_analytics_report_segment`
Download data from an analytics report segment.

**Parameters:**
- `url` (required): The segment download URL

**Example:**
```
"Download data from https://api.appstoreconnect.apple.com/..."
```

### 💰 Sales & Finance Reports Tools (Requires Vendor Number)

#### `download_sales_report`
Download sales and trends reports.

**Parameters:**
- `frequency` (required): Report frequency (DAILY, WEEKLY, MONTHLY, YEARLY)
- `reportDate` (required): Date in appropriate format
- `reportType` (required): Type of report (SALES, SUBSCRIPTION, SUBSCRIPTION_EVENT, SUBSCRIBER, NEWSSTAND, PREORDER)
- `reportSubType` (required): SUMMARY or DETAILED
- `vendorNumber` (optional): Override default vendor number
- `version` (optional): Report version (default: 1_0)

**Example:**
```
"Download daily sales summary for 2024-01-15"
"Get monthly subscription detailed report for 2024-01"
"Download yearly sales summary for 2023"
```

#### `download_finance_report`
Download finance reports for a specific region.

**Parameters:**
- `reportDate` (required): Report date (YYYY-MM)
- `regionCode` (required): Region code (e.g., 'Z1' for worldwide)
- `vendorNumber` (optional): Override default vendor number

**Example:**
```
"Download finance report for January 2024 worldwide"
"Get finance report for 2024-01 region Z1"
```

### 🔧 Xcode Development Tools

#### `list_schemes`
List all available schemes in an Xcode project or workspace.

**Parameters:**
- `projectPath` (required): Path to .xcodeproj or .xcworkspace file

**Example:**
```
"List schemes in /Users/john/MyApp/MyApp.xcodeproj"
"Show available schemes for MyApp.xcworkspace"
```

## Error Handling

The server implements proper error handling for:
- Invalid authentication
- Missing required parameters
- API rate limits
- Network issues
- Invalid operations

## Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test

# Run type checking
npm run type-check
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Related Links
- [Model Context Protocol Documentation](https://modelcontextprotocol.io)
- [App Store Connect API Documentation](https://developer.apple.com/documentation/appstoreconnectapi)
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
