---
name: "mobile-next/mobile-mcp"
description: "MCP Server for Android/iOS application and device automation, development and app scraping. Simulator/Emulator/Physical devices like iPhone, Google Pixel, Samsung supported."
category: "Developer Tools"
repo: "mobile-next/mobile-mcp"
stars: 5033
url: "https://github.com/mobile-next/mobile-mcp"
body_length: 16916
license: "Apache-2.0"
language: "TypeScript"
homepage: "https://mobilenext.ai"
body_tr: |-
  # Mobile Next - iOS, Android, Simulator, Emulator ve Gerçek Cihazlar için MCP sunucusu | Mobil Geliştirme ve Otomasyon

  Bu bir [Model Context Protocol (MCP) sunucusudur](https://github.com/modelcontextprotocol) ve ölçeklenebilir mobil otomasyon, platform-agnostik bir arayüz aracılığıyla geliştirme sağlar, iOS veya Android bilgisi gerektirme ihtiyacını ortadan kaldırır. Bunu emülatörlerde, simulatörlerde ve gerçek cihazlarda (iOS ve Android) çalıştırabilirsiniz.
  Bu sunucu, Agentlerin ve LLM'lerin native iOS/Android uygulamaları ve cihazları erişilebilirlik snapshot'ları veya ekran görüntülerine dayalı koordinat tabanlı dokunuşlar aracılığıyla yapılandırılmış bir şekilde kullanmasını sağlar.

  <h4 align="center">
    <a href="https://github.com/mobile-next/mobile-mcp">
      
    </a>
    <a href="https://www.npmjs.com/package/@mobilenext/mobile-mcp">
      
    </a>
    <a href="https://github.com/mobile-next/mobile-mcp/releases">
      
    </a>
    <a href="https://insiders.vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%7B%22name%22%3A%22mobile-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40mobilenext%2Fmobile-mcp%40latest%22%5D%7D">
      
    </a>
    <a href="https://github.com/mobile-next/mobile-mcp/wiki">
      
    </a>
    <a href="https://mobilenexthq.com/join-slack">
      
    </a>
  </h4>


  https://github.com/user-attachments/assets/bb084777-beb3-4930-ae6f-8d3fe694ddde


  <p align="center">
      <a href="https://github.com/mobile-next/">
          
      </a>
  </p>

  ### 🚀 Mobile MCP Yol Haritası: Mobil Geleceğini İnşa Etmek

  Mobil otomasyon teknolojisini sürekli geliştirirken bizimle bu yolculuğa katılın!
  Yaklaşan özellikler, iyileştirmeler ve kilometre taşlarını görmek için ayrıntılı yol haritamızı kontrol edin. Geri bildiriminiz mobil otomasyonun geleceğini şekillendirmede priceless.

  👉 [Yol Haritasını Keşfedin](https://github.com/orgs/mobile-next/projects/3)


  ### Ana Kullanım Durumları

  Mobil otomasyon ölçeklendirmesine nasıl yardımcı oluyoruz:

  - 📲 Native uygulama otomasyonu (iOS ve Android) test etme veya veri giriş senaryoları için.
  - 📝 Simulatörleri/emülatörleri veya gerçek cihazları (iPhone, Samsung, Google Pixel vb.) manuel olarak kontrol etmeden script akışları ve form etkileşimleri.
  - 🧭 LLM tarafından yönetilen çok adımlı kullanıcı yolculuklarını otomatikleştirme.
  - 👆 Agent tabanlı frameworkler için genel amaçlı mobil uygulama etkileşimi.
  - 🤖 Mobil otomasyon kullanım durumları ve veri çıkarma için agent-to-agent iletişimi sağlama.

  ## Ana Özellikler

  - 🚀 **Hızlı ve hafif**: Çoğu etkileşim için native erişilebilirlik ağaçlarını veya a11y etiketleri olmadığında ekran görüntüsü tabanlı koordinatları kullanır.
  - 🤖 **LLM dostu**: Erişilebilirlik (Snapshot) modunda bilgisayar görüşü modeli gerekli değildir.
  - 🧿 **Görsel Algı**: Ekranda gerçekten ne oluşturulduğunu değerlendirip analiz eder ve sonraki eylemi belirler. Erişilebilirlik verisi veya view-hierarchy koordinatları kullanılamıyorsa, ekran görüntüsü tabanlı analize geri döner.
  - 📊 **Belirleyici tool uygulaması**: Mümkün olduğunda yapılandırılmış verilere güvenerek tamamen ekran görüntüsü tabanlı yaklaşımlarda bulunan belirsizliği azaltır.
  - 📺 **Yapılandırılmış verileri çıkarma**: Ekranda görünen herhangi bir şeyden yapılandırılmış verileri çıkarmanızı sağlar.

  ### 🎯 Platform Desteği

  | Platform | Destekli |
  |----------|:---------:|
  | iOS Gerçek Cihaz | ✅ |
  | iOS Simulatör | ✅ |
  | Android Gerçek Cihaz | ✅ |
  | Android Emülatör | ✅ |

  ## 🔧 Mevcut MCP Araçları

  <details>
  <summary>📱 <strong>Araç listesini görmek için tıklayın</strong> - Otomasyon ve geliştirme için Mobile MCP araçları listesi</summary>

  > Ayrıntılı uygulama ve parametre belirtimleri için bkz. [`src/server.ts`](src/server.ts)

  ### Cihaz Yönetimi
  - **`mobile_list_available_devices`** - Tüm mevcut cihazları listele (simulatörler, emülatörler ve gerçek cihazlar)
  - **`mobile_get_screen_size`** - Mobil cihazın ekran boyutunu piksel cinsinden al
  - **`mobile_get_orientation`** - Cihazın mevcut ekran yönünü al
  - **`mobile_set_orientation`** - Ekran yönünü değiştir (portrait/landscape)

  ### Uygulama Yönetimi
  - **`mobile_list_apps`** - Cihaza yüklü tüm uygulamaları listele
  - **`mobile_launch_app`** - Paket adını kullanarak bir uygulamayı başlat
  - **`mobile_terminate_app`** - Çalışan bir uygulamayı durdur ve sonlandır
  - **`mobile_install_app`** - Dosyadan bir uygulama yükle (.apk, .ipa, .app, .zip)
  - **`mobile_uninstall_app`** - Bundle ID veya paket adını kullanarak bir uygulamayı kaldır

  ### Ekran Etkileşimi
  - **`mobile_take_screenshot`** - Ekranda neler olduğunu anlamak için ekran görüntüsü al
  - **`mobile_save_screenshot`** - Ekran görüntüsünü bir dosyaya kaydet
  - **`mobile_list_elements_on_screen`** - UI öğelerini koordinatları ve özellikleriyle birlikte listele
  - **`mobile_click_on_screen_at_coordinates`** - Belirli x,y koordinatlarına tıkla
  - **`mobile_double_tap_on_screen`** - Belirli koordinatlarda çift tıkla
  - **`mobile_long_press_on_screen_at_coordinates`** - Belirli koordinatlarda uzun basış yap
  - **`mobile_swipe_on_screen`** - Herhangi bir yöne kaydır (yukarı, aşağı, sola, sağa)

  ### Girdi ve Navigasyon
  - **`mobile_type_keys`** - Odaklanmış öğelere metin yazı (isteğe bağlı gönder)
  - **`mobile_press_button`** - Cihaz düğmelerini basarak çalıştır (HOME, BACK, VOLUME_UP/DOWN, ENTER, vb.)
  - **`mobile_open_url`** - Cihaz tarayıcısında URL'leri aç

  ### Platform Desteği
  - **iOS**: Native erişilebilirlik ve WebDriverAgent aracılığıyla simulatörler ve gerçek cihazlar
  - **Android**: ADB ve UI Automator aracılığıyla emülatörler ve gerçek cihazlar
  - **Platformlar arası**: Unified API hem iOS hem de Android'de çalışır

  </details>

  ## 🏗️ Mobile MCP Mimarisi

  <p align="center">
      <a href="https://raw.githubusercontent.com/mobile-next/mobile-next-assets/refs/heads/main/mobile-mcp-arch-1.png">
          
      </a>
  </p>


  ## 📚 Wiki sayfası

  Setup, konfigürasyon ve hata ayıklama ile ilgili sorular için [wiki sayfamızda](https://github.com/mobile-next/mobile-mcp/wiki) daha fazla detay bulabilirsiniz.


  ## Kurulum ve Konfigürasyon

  **Standart konfigürasyon** çoğu araçta çalışır:

  ```json
  {
    "mcpServers": {
      "mobile-mcp": {
        "command": "npx",
        "args": ["-y", "@mobilenext/mobile-mcp@latest"]
      }
    }
  }
  ```

  <details>
  <summary>Amp</summary>

  Amp VS Code uzantısı ayarları ekranından veya `settings.json` dosyanızı güncelleyerek ekleyin:

  ```json
  "amp.mcpServers": {
    "mobile-mcp": {
      "command": "npx",
      "args": [
        "@mobilenext/mobile-mcp@latest"
      ]
    }
  }
  ```

  **Amp CLI:**

  Terminal'inizde aşağıdaki komutu çalıştırın:

  ```bash
  amp mcp add mobile-mcp -- npx @mobilenext/mobile-mcp@latest
  ```

  </details>

  <details>
  <summary>Cline</summary>

  Cline'ı kurmak için yukarıdaki json'u MCP ayarları dosyanıza ekleyin.

  [Wiki'de daha fazla bilgi](https://github.com/mobile-next/mobile-mcp/wiki/Cline)

  </details>

  <details>
  <summary>Claude Code</summary>

  Mobile MCP sunucusunu eklemek için Claude Code CLI'yi kullanın:

  ```bash
  claude mcp add mobile-mcp -- npx -y @mobilenext/mobile-mcp@latest
  ```
  </details>

  <details>
  <summary>Claude Desktop</summary>

  [MCP kurulum kılavuzunu](https://modelcontextprotocol.io/quickstart/user) takip edin, yukarıdaki json konfigürasyonunu kullanın.

  </details>

  <details>
  <summary>Codex</summary>

  Mobile MCP sunucusunu eklemek için Codex CLI'yi kullanın:

  ```bash
  codex mcp add mobile-mcp npx "@mobilenext/mobile-mcp@latest"
  ```

  Alternatif olarak, `~/.codex/config.toml` konfigürasyon dosyasını oluşturun veya düzenleyin ve ekleyin:

  ```toml
  [mcp_servers.mobile-mcp]
  command = "npx"
  args = ["@mobilenext/mobile-mcp@latest"]
  ```

  Daha fazla bilgi için Codex MCP belgelerine bakın.

  </details>

  <details>
  <summary>Copilot</summary>

  Mobile MCP sunucusunu etkileşimli olarak eklemek için Copilot CLI'yi kullanın:

  ```text
  /mcp add
  ```

  `~/.copilot/mcp-config.json` konfigürasyon dosyasını düzenleyebilir ve ekleyebilirsiniz:

  ```json
  {
    "mcpServers": {
      "mobile-mcp": {
        "type": "local",
        "command": "npx",
        "tools": [
          "*"
        ],
        "args": [
          "@mobilenext/mobile-mcp@latest"
        ]
      }
    }
  }
  ```

  Daha fazla bilgi için Copilot CLI belgelerine bakın.

  </details>

  <details>
  <summary>Cursor</summary>

  #### Kurulum için düğmeyi tıklayın:

  [](https://cursor.com/en/install-mcp?name=Mobile%20MCP&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBtb2JpbGVuZXh0L21vYmlsZS1tY3BAbGF0ZXN0Il19)

  #### Veya manuel olarak kurun:

  `Cursor Settings` -> `MCP` -> `Add new MCP Server` açın. İstediğiniz bir ad verin, `command` tipi ile `npx -y @mobilenext/mobile-mcp@latest` komutunu kullanın. Ayrıca `Edit` düğmesine tıklayarak konfigürasyonu doğrulayabilir veya komut gibi argümanları ekleyebilirsiniz.

  </details>

  <details>
  <summary>Gemini CLI</summary>

  Mobile MCP sunucusunu eklemek için Gemini CLI'yi kullanın:

  ```bash
  gemini mcp add mobile-mcp npx -y @mobilenext/mobile-mcp@latest
  ```

  </details>

  <details>
  <summary>Goose</summary>

  #### Kurulum için düğmeyi tıklayın:

  [![Goose'ta Kur](https://block.github.io/goose/img/extension-install-dark.svg)](https://block.github.io/goose/extension?cmd=npx&arg=-y&arg=%40mobilenext%2Fmobile-mcp%40latest&id=mobile-mcp&name=Mobile%20MCP&description=Mobile%20automation%20and%20development%20for%20iOS%2C%20Android%2C%20simulators%2C%20emulators%2C%20and%20real%20devices)

  #### Veya manuel olarak kurun:

  `Advanced settings` -> `Extensions` -> `Add custom extension` açın. İstediğiniz bir ad verin, `STDIO` tipi kullanın ve `command`'ı `npx -y @mobilenext/mobile-mcp@latest` olarak ayarlayın. "Add Extension"'a tıklayın.

  </details>

  <details>
  <summary>Kiro</summary>

  MCP Sunucuları [belgelerini](https://kiro.dev/docs/mcp/) takip edin. Örneğin `.kiro/settings/mcp.json` dosyasında:

  ```json
  {
    "mcpServers": {
      "mobile-mcp": {
        "command": "npx",
        "args": [
          "@mobilenext/mobile-mcp@latest"
        ]
      }
    }
  }
  ```

  </details>

  <details>
  <summary>opencode</summary>

  MCP Sunucuları belgelerini takip edin. Örneğin `~/.config/opencode/opencode.json` dosyasında:

  ```json
  {
    "$schema": "https://opencode.ai/config.json",
    "mcp": {
      "mobile-mcp": {
        "type": "local",
        "command": [
          "npx",
          "@mobilenext/mobile-mcp@latest"
        ],
        "enabled": true
      }
    }
  }
  ```

  </details>

  <details>
  <summary>Qodo Gen</summary>

  VSCode veya IntelliJ'de Qodo Gen sohbet panelini açın → Daha fazla araç bağlayın → + Yeni MCP ekleyin → Yukarıdaki standart konfigürasyonu yapıştırın.

  <code>Kaydet</code>'e tıklayın.

  </details>


  <details>
  <summary>Windsurf</summary>

  Windsurf ayarlarını açın, MCP sunucularına gidin ve `command` tipi kullanarak yeni bir sunucu ekleyin:

  ```bash
  npx @mobilenext/mobile-mcp@latest
  ```

  Veya yukarıda gösterildiği gibi standart konfigürasyonu ayarlarınızda `mcpServers` altına ekleyin.

  </details>


  [Wiki'de daha fazla bilgi](https://github.com/mobile-next/mobile-mcp/wiki)! 🚀

  ### SSE Sunucu Modu

  Varsayılan olarak, Mobile MCP stdio üzerinde çalışır. Bunun yerine bir SSE sunucusu başlatmak için `--listen` bayrağını kullanın:

  ```bash
  npx @mobilenext/mobile-mcp@latest --listen 3000
  ```

  Bu `localhost:3000`'a bağlanır. Belirli bir arayüze bağlanmak için:

  ```bash
  npx @mobilenext/mobile-mcp@latest --listen 0.0.0.0:3000
  ```

  Ardından MCP istemcinizi `http://<host>:3000/mcp`'ye bağlanacak şekilde yapılandırın.

  #### Yetkilendirme

  SSE sunucusunda Bearer token yetkilendirmesi gerekli kılmak için `MOBILEMCP_AUTH` ortam değişkenini ayarlayın:

  ```bash
  MOBILEMCP_AUTH=my-secret-token npx @mobilenext/mobile-mcp@latest --listen 3000
  ```

  Ayarlandığında, tüm istekler `Authorization: Bearer my-secret-token` başlığını içermelidir.

  ### 🛠️ Nasıl Kullanılır 📝

  MCP sunucusunu IDE/Client'inize ekledikten sonra, AI asistanınıza mevcut araçları kullanması için talimat verebilirsiniz.
  Örneğin, Cursor'ın agent modunda, aşağıdaki promptları kullanarak hızlı bir şekilde UI etkileşimlerini doğrulayabilir, test edebilir ve tekrarlayabilirsiniz, ekrandan bilgi okuyabilir, karmaşık iş akışlarını gerçekleştirebilirsiniz.
  Açıklayıcı ve net olun.

  ### ✨ Örnek Promptlar

  #### İş Akışları

  Tek bir promptta ayrıntılı iş akışları belirtebilir, iş mantığını doğrulayabilir, otomasyon kurabilirsiniz. Çılgınca gidebilirsiniz:

  **Bir video arayın, yorum yazın, beğenin ve paylaşın.**
  ```
  "Beginner Recipe for Tonkotsu Ramen" adlı videoyu Way of Ramen tarafından bulun, videoyu beğen düğmesine tıklayın, beğendikten sonra "bu lezizdi, gelecek Cuma yapacağım" yazarak bir yorum yazın, videoyu WhatsApp listenizde ilk iletişim kişisine paylaşın.
  ```

  **Başarılı bir adım sayacı uygulaması indirin, kaydolun, antrenmanı kurun ve uygulamayı 5 yıldız yapın**
  ```
  1000'den fazla yıldız puanı olan ücretsiz bir "Pomodoro" uygulaması bulun ve indirin. Uygulamayı başlatın, e-postamla kaydolun, kayıt sonrası pomodoro zamanlayıcısı nasıl başlatılacağını bulun. Pomodoro zamanlayıcısı başlatıldığında, app store'a geri gidin ve uygulamayı 5 yıldız verin ve uygulamanın ne kadar faydalı olduğunu anlatan bir yorum bırakın.
  ```

  **Substack'te arayın, oku, vurgula, yorum yaz ve bir makale kaydet**
  ```
  Substack web sitesini açın, "Latest trends in AI automation 2025" araması yapın, ilk makaleyi açın, "Emerging AI trends" başlığı altındaki bölümü vurgulayın ve makaleyi daha sonra gözden geçirilmek üzere okuma listesine kaydedin, rastgele bir paragraf özetini yorum olarak bırakın.
  ```

  **Bir antrenman sınıfı rezerv edin, zamanlayıcı kurun**
  ```
  ClassPass'ı açın, yarın sabah 2 mil içindeki yoga derslerini arayın, en yüksek puanlı sınıfı 7 AM'de rezerv edin, rezervasyonu onaylayın, telefondaki booked slotu için bir zamanlayıcı kurun
  ```

  **Yerel bir etkinlik bulun, takvim etkinliği kurun**
  ```
  Eventbrite'ı açın, bu hafta sonu "Austin, TX"'de gerçekleşecek yapay zeka startup toplantısı etkinlikleri arayın, en popüler olanı seçin, kaydolun ve etkinliğe evet ile RSVP verin, bir takvim etkinliğini hatırlatma olarak kurun.
  ```

  **Hava durumu tahmini kontrol edin ve WhatsApp/Telegram/Slack mesajı gönderin**
  ```
  Hava uygulamasını açın, "Berlin" için yarın hava durumu tahminini kontrol edin ve özeti WhatsApp/Telegram/Slack aracılığıyla "Lauren Trown" iletişim kişisine gönderin, yanıtlarına başparmak yukarı verin.
  ```

  - **Zoom'da bir toplantı planlayın ve davetiyeyi e-posta ile paylaşın**
  ```
  Zoom uygulamasını açın, yarın 10 AM'de "AI Hackathon" başlıklı bir toplantı planlayın, 1 saat süreli, davet bağlantısını kopyalayın ve Gmail üzerinden "team@example.com" kişilerine gönderin.
  ```
  [Daha fazla prompt örneği burada bulunabilir.](https://github.com/mobile-next/mobile-mcp/wiki/Prompt-Example-repo-list)

  ## Ön Koşullar

  MCP'yi agent'iniz ve mobil cihazlarınızla bağlamak için ihtiyaç duyacağınız şeyler:

  - [Xcode command line tools](https://developer.apple.com/xcode/resources/)
  - [Android Platform Tools](https://developer.android.com/tools/releases/platform-tools)
  - [node.js](https://nodejs.org/en/download/) v22+
  - [MCP](https://modelcontextprotocol.io/introduction) destekli foundation modelleri veya agentler, örneğin [Claude MCP](https://modelcontextprotocol.io/quickstart/server), [OpenAI Agent SDK](https://openai.github.io/openai-agents-python/mcp/), [Copilot Studio](https://www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/introducing-model-context-protocol-mcp-in-copilot-studio-simplified-integration-with-ai-apps-and-agents/)

  ### Simulatörler, Emülatörler ve Gerçek Cihazlar

  Başlatıldığında, Mobile MCP şunlara bağlanabilir:
  - macOS/Linux'taki iOS Simulatörleri
  - Linux/Windows/macOS'taki Android Emülatörleri
  - iOS veya Android gerçek cihazları (uygun platform araçları ve sürücüleri gerekir)

  Mobile Next Mobile MCP'yi çalıştırmadan önce mobil platform SDK'larınızın (Xcode, Android SDK) kurulu ve doğru şekilde yapılandırılmış olduğundan emin olun.

  ### Telemetri

  Mobile MCP, PostHog aracılığıyla anonim kullanım telemetrisi toplar. Bunu devre dışı bırakmak için `MOBILEMCP_DISABLE_TELEMETRY` ortam değişkenini ayarlayın:

  ```bash
  MOBILEMCP_DISABLE_TELEMETRY=1 npx @mobilenext/mobile-mcp@latest
  ```

  Json konfigürasyonları için:

  ```json
  {
    "mcpServers": {
      "mobile-mcp": {
        "command": "npx",
        "args": ["-y", "@mobilenext/mobile-mcp@latest"],
        "env": {
          "MOBILEMCP_DISABLE_TELEMETRY": "1"
        }
      }
    }
  }
  ```

  ### Simulatörler/Emülatörlerde "headless" modda çalıştırma

  Makinenize bağlı gerçek bir cihaz olmadığında, Mobile MCP'yi arka planda bir emülatör veya simulatör ile çalıştırabilirsiniz.

  Örneğin, Android'de:
  1. Bir emülatör başlatın (avdmanager / emulator komutu).
  2. Mobile MCP'yi istenen bayraklarla çalıştırın

  iOS'ta, Mobile MCP'yi o simulatör örneğiyle kullanmadan önce Xcode'u ve Simulator'ü çalıştırmanız gerekecek.
  - `xcrun simctl list`
  - `xcrun simctl boot "iPhone 16"`

  # Tüm Katkıda Bulunanları Teşekkür Ederiz ❤️

  ### Bu projeyi geliştirmeye yardımcı olan herkesi takdir ediyoruz.

    <a href = "https://github.com/mobile-next/mobile-mcp/graphs/contributors">
     
   </a>
---

# Mobile Next - MCP server for Mobile Development and Automation | iOS, Android, Simulator, Emulator, and Real Devices

This is a [Model Context Protocol (MCP) server](https://github.com/modelcontextprotocol) that enables scalable mobile automation, development through a platform-agnostic interface, eliminating the need for distinct iOS or Android knowledge. You can run it on emulators, simulators, and real devices (iOS and Android).
This server allows Agents and LLMs to interact with native iOS/Android applications and devices through structured accessibility snapshots or coordinate-based taps based on screenshots.

<h4 align="center">
  <a href="https://github.com/mobile-next/mobile-mcp">
    
  </a>
  <a href="https://www.npmjs.com/package/@mobilenext/mobile-mcp">
    
  </a>
  <a href="https://github.com/mobile-next/mobile-mcp/releases">
    
  </a>
  <a href="https://insiders.vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%7B%22name%22%3A%22mobile-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40mobilenext%2Fmobile-mcp%40latest%22%5D%7D">
    
  </a>
  <a href="https://github.com/mobile-next/mobile-mcp/wiki">
    
  </a>
  <a href="https://mobilenexthq.com/join-slack">
    
  </a>
</h4>


https://github.com/user-attachments/assets/bb084777-beb3-4930-ae6f-8d3fe694ddde


<p align="center">
    <a href="https://github.com/mobile-next/">
        
    </a>
</p>

### 🚀 Mobile MCP Roadmap: Building the Future of Mobile

Join us on our journey as we continuously enhance Mobile MCP!
Check out our detailed roadmap to see upcoming features, improvements, and milestones. Your feedback is invaluable in shaping the future of mobile automation.

👉 [Explore the Roadmap](https://github.com/orgs/mobile-next/projects/3)


### Main use cases

How we help to scale mobile automation:

- 📲 Native app automation (iOS and Android) for testing or data-entry scenarios.
- 📝 Scripted flows and form interactions without manually controlling simulators/emulators or real devices (iPhone, Samsung, Google Pixel etc)
- 🧭 Automating multi-step user journeys driven by an LLM
- 👆 General-purpose mobile application interaction for agent-based frameworks
- 🤖 Enables agent-to-agent communication for mobile automation usecases, data extraction

## Main Features

- 🚀 **Fast and lightweight**: Uses native accessibility trees for most interactions, or screenshot based coordinates where a11y labels are not available.
- 🤖 **LLM-friendly**: No computer vision model required in Accessibility (Snapshot).
- 🧿 **Visual Sense**: Evaluates and analyses what's actually rendered on screen to decide the next action. If accessibility data or view-hierarchy coordinates are unavailable, it falls back to screenshot-based analysis.
- 📊 **Deterministic tool application**: Reduces ambiguity found in purely screenshot-based approaches by relying on structured data whenever possible.
- 📺 **Extract structured data**: Enables you to extract structred data from anything visible on screen.

### 🎯 Platform Support

| Platform | Supported |
|----------|:---------:|
| iOS Real Device | ✅ |
| iOS Simulator | ✅ |
| Android Real Device | ✅ |
| Android Emulator | ✅ |

## 🔧 Available MCP Tools

<details>
<summary>📱 <strong>Click to expand tool list</strong> - List of Mobile MCP tools for automation and development</summary>

> For detailed implementation and parameter specifications, see [`src/server.ts`](src/server.ts)

### Device Management
- **`mobile_list_available_devices`** - List all available devices (simulators, emulators, and real devices)
- **`mobile_get_screen_size`** - Get the screen size of the mobile device in pixels
- **`mobile_get_orientation`** - Get the current screen orientation of the device
- **`mobile_set_orientation`** - Change the screen orientation (portrait/landscape)

### App Management
- **`mobile_list_apps`** - List all installed apps on the device
- **`mobile_launch_app`** - Launch an app using its package name
- **`mobile_terminate_app`** - Stop and terminate a running app
- **`mobile_install_app`** - Install an app from file (.apk, .ipa, .app, .zip)
- **`mobile_uninstall_app`** - Uninstall an app using bundle ID or package name

### Screen Interaction
- **`mobile_take_screenshot`** - Take a screenshot to understand what's on screen
- **`mobile_save_screenshot`** - Save a screenshot to a file
- **`mobile_list_elements_on_screen`** - List UI elements with their coordinates and properties
- **`mobile_click_on_screen_at_coordinates`** - Click at specific x,y coordinates
- **`mobile_double_tap_on_screen`** - Double-tap at specific coordinates
- **`mobile_long_press_on_screen_at_coordinates`** - Long press at specific coordinates
- **`mobile_swipe_on_screen`** - Swipe in any direction (up, down, left, right)

### Input & Navigation
- **`mobile_type_keys`** - Type text into focused elements with optional submit
- **`mobile_press_button`** - Press device buttons (HOME, BACK, VOLUME_UP/DOWN, ENTER, etc.)
- **`mobile_open_url`** - Open URLs in the device browser

### Platform Support
- **iOS**: Simulators and real devices via native accessibility and WebDriverAgent
- **Android**: Emulators and real devices via ADB and UI Automator
- **Cross-platform**: Unified API works across both iOS and Android

</details>

## 🏗️ Mobile MCP Architecture

<p align="center">
    <a href="https://raw.githubusercontent.com/mobile-next/mobile-next-assets/refs/heads/main/mobile-mcp-arch-1.png">
        
    </a>
</p>


## 📚 Wiki page

More details in our [wiki page](https://github.com/mobile-next/mobile-mcp/wiki) for setup, configuration and debugging related questions.


## Installation and configuration

**Standard config** works in most of the tools:

```json
{
  "mcpServers": {
    "mobile-mcp": {
      "command": "npx",
      "args": ["-y", "@mobilenext/mobile-mcp@latest"]
    }
  }
}
```

<details>
<summary>Amp</summary>

Add via the Amp VS Code extension settings screen or by updating your `settings.json` file:

```json
"amp.mcpServers": {
  "mobile-mcp": {
    "command": "npx",
    "args": [
      "@mobilenext/mobile-mcp@latest"
    ]
  }
}
```

**Amp CLI:**

Run the following command in your terminal:

```bash
amp mcp add mobile-mcp -- npx @mobilenext/mobile-mcp@latest
```

</details>

<details>
<summary>Cline</summary>

To setup Cline, just add the json above to your MCP settings file.

[More in our wiki](https://github.com/mobile-next/mobile-mcp/wiki/Cline)

</details>

<details>
<summary>Claude Code</summary>

Use the Claude Code CLI to add the Mobile MCP server:

```bash
claude mcp add mobile-mcp -- npx -y @mobilenext/mobile-mcp@latest
```
</details>

<details>
<summary>Claude Desktop</summary>

Follow the [MCP install guide](https://modelcontextprotocol.io/quickstart/user), use json configuration above.

</details>

<details>
<summary>Codex</summary>

Use the Codex CLI to add the Mobile MCP server:

```bash
codex mcp add mobile-mcp npx "@mobilenext/mobile-mcp@latest"
```

Alternatively, create or edit the configuration file `~/.codex/config.toml` and add:

```toml
[mcp_servers.mobile-mcp]
command = "npx"
args = ["@mobilenext/mobile-mcp@latest"]
```

For more information, see the Codex MCP documentation.

</details>

<details>
<summary>Copilot</summary>

Use the Copilot CLI to interactively add the Mobile MCP server:

```text
/mcp add
```

You can edit the configuration file `~/.copilot/mcp-config.json` and add:

```json
{
  "mcpServers": {
    "mobile-mcp": {
      "type": "local",
      "command": "npx",
      "tools": [
        "*"
      ],
      "args": [
        "@mobilenext/mobile-mcp@latest"
      ]
    }
  }
}
```

For more information, see the Copilot CLI documentation.

</details>

<details>
<summary>Cursor</summary>

#### Click the button to install:

[](https://cursor.com/en/install-mcp?name=Mobile%20MCP&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBtb2JpbGVuZXh0L21vYmlsZS1tY3BAbGF0ZXN0Il19)

#### Or install manually:

Go to `Cursor Settings` -> `MCP` -> `Add new MCP Server`. Name to your liking, use `command` type with the command `npx -y @mobilenext/mobile-mcp@latest`. You can also verify config or add command like arguments via clicking `Edit`.

</details>

<details>
<summary>Gemini CLI</summary>

Use the Gemini CLI to add the Mobile MCP server:

```bash
gemini mcp add mobile-mcp npx -y @mobilenext/mobile-mcp@latest
```

</details>

<details>
<summary>Goose</summary>

#### Click the button to install:

[![Install in Goose](https://block.github.io/goose/img/extension-install-dark.svg)](https://block.github.io/goose/extension?cmd=npx&arg=-y&arg=%40mobilenext%2Fmobile-mcp%40latest&id=mobile-mcp&name=Mobile%20MCP&description=Mobile%20automation%20and%20development%20for%20iOS%2C%20Android%2C%20simulators%2C%20emulators%2C%20and%20real%20devices)

#### Or install manually:

Go to `Advanced settings` -> `Extensions` -> `Add custom extension`. Name to your liking, use type `STDIO`, and set the `command` to `npx -y @mobilenext/mobile-mcp@latest`. Click "Add Extension".

</details>

<details>
<summary>Kiro</summary>

Follow the MCP Servers [documentation](https://kiro.dev/docs/mcp/). For example in `.kiro/settings/mcp.json`:

```json
{
  "mcpServers": {
    "mobile-mcp": {
      "command": "npx",
      "args": [
        "@mobilenext/mobile-mcp@latest"
      ]
    }
  }
}
```

</details>

<details>
<summary>opencode</summary>

Follow the MCP Servers documentation. For example in `~/.config/opencode/opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "mobile-mcp": {
      "type": "local",
      "command": [
        "npx",
        "@mobilenext/mobile-mcp@latest"
      ],
      "enabled": true
    }
  }
}
```

</details>

<details>
<summary>Qodo Gen</summary>

Open [Qodo Gen](https://docs.qodo.ai/qodo-documentation/qodo-gen) chat panel in VSCode or IntelliJ → Connect more tools → + Add new MCP → Paste the standard config above.

Click <code>Save</code>.

</details>


<details>
<summary>Windsurf</summary>

Open Windsurf settings, navigate to MCP servers, and add a new server using the `command` type with:

```bash
npx @mobilenext/mobile-mcp@latest
```

Or add the standard config under `mcpServers` in your settings as shown above.

</details>


[Read more in our wiki](https://github.com/mobile-next/mobile-mcp/wiki)! 🚀

### SSE Server Mode

By default, Mobile MCP runs over stdio. To start an SSE server instead, use the `--listen` flag:

```bash
npx @mobilenext/mobile-mcp@latest --listen 3000
```

This binds to `localhost:3000`. To bind to a specific interface:

```bash
npx @mobilenext/mobile-mcp@latest --listen 0.0.0.0:3000
```

Then configure your MCP client to connect to `http://<host>:3000/mcp`.

#### Authorization

To require Bearer token authorization on the SSE server, set the `MOBILEMCP_AUTH` environment variable:

```bash
MOBILEMCP_AUTH=my-secret-token npx @mobilenext/mobile-mcp@latest --listen 3000
```

When set, all requests must include the header `Authorization: Bearer my-secret-token`.

### 🛠️ How to Use 📝

After adding the MCP server to your IDE/Client, you can instruct your AI assistant to use the available tools.
For example, in Cursor's agent mode, you could use the prompts below to quickly validate, test and iterate on UI intereactions, read information from screen, go through complex workflows.
Be descriptive, straight to the point.

### ✨ Example Prompts

#### Workflows

You can specifiy detailed workflows in a single prompt, verify business logic, setup automations. You can go crazy:

**Search for a video, comment, like and share it.**
```
Find the video called " Beginner Recipe for Tonkotsu Ramen" by Way of
Ramen, click on like video, after liking write a comment " this was
delicious, will make it next Friday", share the video with the first
contact in your whatsapp list.
```

**Download a successful step counter app, register, setup workout and 5-star the app**
```
Find and Download a free "Pomodoro" app that has more than 1k stars.
Launch the app, register with my email, after registration find how to
start a pomodoro timer. When the pomodoro timer started, go back to the
app store and rate the app 5 stars, and leave a comment how useful the
app is.
```

**Search in Substack, read, highlight, comment and save an article**
```
Open Substack website, search for "Latest trends in AI automation 2025",
open the first article, highlight the section titled "Emerging AI trends",
and save article to reading list for later review, comment a random
paragraph summary.
```

**Reserve a workout class, set timer**
```
Open ClassPass, search for yoga classes tomorrow morning within 2 miles,
book the highest-rated class at 7 AM, confirm reservation,
setup a timer for the booked slot in the phone
```

**Find a local event, setup calendar event**
```
Open Eventbrite, search for AI startup meetup events happening this
weekend in "Austin, TX", select the most popular one, register and RSVP
yes to the event, setup a calendar event as a reminder.
```

**Check weather forecast and send a Whatsapp/Telegram/Slack message**
```
Open Weather app, check tomorrow's weather forecast for "Berlin", and
send the summary via Whatsapp/Telegram/Slack to contact "Lauren Trown",
thumbs up their response.
```

- **Schedule a meeting in Zoom and share invite via email**
```
Open Zoom app, schedule a meeting titled "AI Hackathon" for tomorrow at
10AM with a duration of 1 hour, copy the invitation link, and send it via
Gmail to contacts "team@example.com".
```
[More prompt examples can be found here.](https://github.com/mobile-next/mobile-mcp/wiki/Prompt-Example-repo-list)

## Prerequisites

What you will need to connect MCP with your agent and mobile devices:

- [Xcode command line tools](https://developer.apple.com/xcode/resources/)
- [Android Platform Tools](https://developer.android.com/tools/releases/platform-tools)
- [node.js](https://nodejs.org/en/download/) v22+
- [MCP](https://modelcontextprotocol.io/introduction) supported foundational models or agents, like [Claude MCP](https://modelcontextprotocol.io/quickstart/server), [OpenAI Agent SDK](https://openai.github.io/openai-agents-python/mcp/), [Copilot Studio](https://www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/introducing-model-context-protocol-mcp-in-copilot-studio-simplified-integration-with-ai-apps-and-agents/)

### Simulators, Emulators, and Real Devices

When launched, Mobile MCP can connect to:
- iOS Simulators on macOS/Linux
- Android Emulators on Linux/Windows/macOS
- iOS or Android real devices (requires proper platform tools and drivers)

Make sure you have your mobile platform SDKs (Xcode, Android SDK) installed and configured properly before running Mobile Next Mobile MCP.

### Telemetry

Mobile MCP collects anonymous usage telemetry via PostHog. To disable it, set the `MOBILEMCP_DISABLE_TELEMETRY` environment variable:

```bash
MOBILEMCP_DISABLE_TELEMETRY=1 npx @mobilenext/mobile-mcp@latest
```

For json configurations:

```json
{
  "mcpServers": {
    "mobile-mcp": {
      "command": "npx",
      "args": ["-y", "@mobilenext/mobile-mcp@latest"],
      "env": {
        "MOBILEMCP_DISABLE_TELEMETRY": "1"
      }
    }
  }
}
```

### Running in "headless" mode on Simulators/Emulators

When you do not have a real device connected to your machine, you can run Mobile MCP with an emulator or simulator in the background.

For example, on Android:
1. Start an emulator (avdmanager / emulator command).
2. Run Mobile MCP with the desired flags

On iOS, you'll need Xcode and to run the Simulator before using Mobile MCP with that simulator instance.
- `xcrun simctl list`
- `xcrun simctl boot "iPhone 16"`

# Thanks to all contributors ❤️

### We appreciate everyone who has helped improve this project.

  <a href = "https://github.com/mobile-next/mobile-mcp/graphs/contributors">
   
 </a>
