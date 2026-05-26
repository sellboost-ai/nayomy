---
name: "pi22by7/In-Memoria"
description: "Persistent intelligence infrastructure for agentic development that gives AI coding assistants cumulative memory and pattern learning. Hybrid TypeScript/Rust implementation with local-first storage using SQLite + SurrealDB for semantic analysis and incremental codebase understanding."
description_tr: "Agentic geliştirme için kalıcı zeka altyapısı, AI kodlama asistanlarına kümülatif hafıza ve desen öğrenmesi sağlar. TypeScript/Rust hibrit implementasyonu, SQLite + SurrealDB ile local-first depolama, semantik analiz ve artımlı kod tabanı anlayışı sunar."
category: "Knowledge & Memory"
repo: "pi22by7/In-Memoria"
stars: 168
url: "https://github.com/pi22by7/In-Memoria"
body_length: 20547
license: "MIT"
language: "Rust"
body_tr: |-
  # In Memoria

  [![npm version](https://img.shields.io/npm/v/in-memoria.svg)](https://www.npmjs.com/package/in-memoria)
  [![npm downloads](https://img.shields.io/npm/dm/in-memoria.svg)](https://www.npmjs.com/package/in-memoria)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Discord](https://img.shields.io/discord/1431193342200516630?color=7289da&label=Discord&logo=discord&logoColor=white)](https://discord.gg/6mGsM4qkYm)

  **AI kod yazma asistanlarına gerçekten devam eden bir hafıza verin.**

  ## Hızlı Demo

  [![asciicast](https://asciinema.org/a/ZyD2bAZs1cURnqoFc3VHXemJx.svg)](https://asciinema.org/a/ZyD2bAZs1cURnqoFc3VHXemJx)

  _In Memoria'nın aksiyonda görünüşü: kod tabanını öğrenme, anlık bağlam sağlama ve özellikleri dosyalara yönlendirme._

  ---

  ## Sorun: Oturum Hafızası Kaybı

  Biliyorsunuz. Claude, Copilot veya Cursor'u kod tabanınıza yardımcı olmak için başlatırsınız. Mimarinizi açıklarsınız. Desenlerinizi tanımlarsınız. Kurallarınızı belirtirsiniz. AI bunu anlar, size yardım eder ve her şey mükemmel olur.

  Sonra pencereyi kapatırsınız.

  Sonraki oturum? Tamamen hafıza kaybı. Aynı mimari kararları tekrar açıklıyorsunuz. Aynı adlandırma kurallarını. Aynı "hayır, burada sınıflar kullanmıyoruz, fonksiyonel composition kullanıyoruz" cümlesini on beşinci kez.

  **Her AI kod yazma oturumu sıfırdan başlar.**

  Bu sadece sinir bozucu değil, verimsizdir. Bu araçlar her etkileşimde kod tabanınızı yeniden analiz eder, token ve zaman harcar. Sizin stilinize uymayan genel öneriler verirler. Son sefer ne işe yaradığını, ne reddettiğinizi veya neden reddettiğinizi hatırlamazlar.

  ## Çözüm: Kalıcı İstihbarat

  In Memoria, gerçek kod tabanınızdan öğrenen ve oturumlar arasında hatırlayan bir MCP sunucusudur. Kod tabanınız hakkında kalıcı istihbarat (desenler, mimari, kurallar, kararlar) oluşturur; AI asistanları bunu Model Context Protocol aracılığıyla sorgulayabilir.

  Bunu, AI pair programmer'ınıza oturumu yeniden başlattığınız her seferde silinen bir not defteri vermek gibi düşünün.

  **Mevcut sürüm: 0.6.0** - [Neler değişti](CHANGELOG.md)

  ### Ne Yapar

  - **Desenlerinizi öğrenir** - Adlandırma kurallarını, mimari seçimlerini ve yapısal tercihlerinizi anlamak için kodunuzu analiz eder
  - **Anlık proje bağlamı** - Tech stack, giriş noktaları ve mimariyi <200 token'da sağlar (yeniden analiz gerekmez)
  - **Akıllı dosya yönlendirmesi** - "Şifre sıfırlama ekle" gibi belirsiz istekleri doğrudan ilgili dosyalara yönlendirir
  - **Anlamsal arama** - Kodu sadece anahtar kelimelerle değil, anlam ile bulur
  - **Çalışma hafızası** - Mevcut görevleri ve mimari kararları oturumlar arasında takip eder
  - **Desen tahmini** - Geçmişinize dayanarak benzer sorunları nasıl çözeceğinizi önerir

  ### Örnek İş Akışı

  ```bash
  # İlk kez: Kod tabanınızı öğren
  npx in-memoria learn ./my-project

  # MCP sunucusunu başlat
  npx in-memoria server

  # Şimdi Claude/Copilot'ta:
  Siz: "Şifre sıfırlama işlevi ekle"
  AI: *In Memoria'yı sorgular*
      "src/auth/login.ts'deki auth desenlerinize dayanarak, yerleşik
       JWT middleware desenini kullanacağım ve Result<T>
       hata işleme kuralınızı izleyeceğim..."

  # Sonraki oturum (günler sonra):
  Siz: "Şifre sıfırlama kodunu nereye koyduk?"
  AI: *In Memoria'yı sorgular*
      "src/auth/password-reset.ts'de, geçen oturumumuzda
       oluşturduğumuz deseni izleyerek..."
  ```

  Tekrar açıklama yok. Genel öneriler yok. Sadece sürekli, bağlamdan haberdar yardım.

  ## Hızlı Başlangıç

  ### Kurulum

  ```bash
  # Küresel olarak yükle
  npm install -g in-memoria

  # Veya doğrudan npx ile kullan
  npx in-memoria --help
  ```

  ### AI Aracınıza Bağlanın

  **Claude Desktop** - Config dosyasına ekleyin (`~/Library/Application Support/Claude/claude_desktop_config.json`):

  ```json
  {
    "mcpServers": {
      "in-memoria": {
        "command": "npx",
        "args": ["in-memoria", "server"]
      }
    }
  }
  ```

  **Claude Code CLI**:

  ```bash
  claude mcp add in-memoria -- npx in-memoria server
  ```

  **GitHub Copilot** - [GitHub Copilot Entegrasyonu](#github-copilot-entegrasyon) bölümüne bakın

  ### Kod Tabanınızı Öğrenin

  ```bash
  # Projenizi analiz edin ve öğrenin
  npx in-memoria learn ./my-project

  # Veya AI ajanlarının otomatik olarak öğrenmesini tetiklemesine izin verin
  # (Sunucuyu başlatın ve auto_learn_if_needed'ın işini yapmasını izleyin)
  npx in-memoria server
  ```

  ## Nasıl Çalışır

  In Memoria, Rust + TypeScript ile yapılmıştır ve AI araçlarını kalıcı kod tabanı istihbaratına bağlamak için Model Context Protocol kullanır.

  ### Mimari

  ```
  ┌─────────────────────┐    MCP     ┌──────────────────────┐    napi-rs    ┌─────────────────────┐
  │  AI Aracı (Claude)  │◄──────────►│  TypeScript Server   │◄─────────────►│   Rust Çekirdeği    │
  └─────────────────────┘            └──────────┬───────────┘               │  • AST Ayrıştırıcı  │
                                                │                           │  • Desen Öğrenici   │
                                                │                           │  • Anlamsal Motor   │
                                                ▼                           │  • Blueprint Sistemi│
                                     ┌──────────────────────┐               └─────────────────────┘
                                     │ SQLite (kalıcı)      │
                                     │ SurrealDB (hafızada) │
                                     └──────────────────────┘
  ```

  ### Temel Bileşenler

  **Rust Katmanı** - Hızlı, yerel işleme:

  - 12 dil için Tree-sitter AST ayrıştırma (TypeScript, JavaScript, Python, PHP, Rust, Go, Java, C/C++, C#, Svelte, SQL)
  - Blueprint analizcisi (proje yapısını, giriş noktalarını, mimari desenleri tespit eder)
  - Desen öğrenici (kodlama stilinizin istatistiksel analizi)
  - Anlamsal motor (kod ilişkilerini ve kavramlarını anlar)

  **TypeScript Katmanı** - MCP sunucusu ve orkestrasyonu:

  - AI asistanları için 13 uzmanlaşmış araç (4 kategoride organize edilmiş)
  - Yapılandırılmış veriler için SQLite, kalıcı vektör embedleri için SurrealDB ve SurrealKV
  - Artımlı güncellemeler için dosya izlemesi
  - Özellikleri dosyalara eşleyen akıllı yönlendirme

  **Depolama** - Yerel-ilk:

  - Her şey makinenizde kalır
  - Desenler ve meta veriler için SQLite
  - Kalıcı vektör embedleri için SurrealDB ve SurrealKV arka ucu
  - Embedler için yerel transformers.js (Xenova/all-MiniLM-L6-v2)

  ### Farkı Oluşturan Nedir

  Bu sadece bir başka RAG sistemi veya statik kural motoru değildir:

  - **Gerçek koddan öğrenir** - Manuel tanımlı kurallar değil, gerçek kod tabanınızdan istatistiksel desenler
  - **Yaklaşımınızı tahmin eder** - Daha önce benzer sorunları nasıl çözdüğünüze dayanarak
  - **Token verimli** - Yanıtlar LLM bağlamı kullanımını en aza indirmek için optimize edilmiş (<200 token proje bağlamı için)
  - **Dosyalara yönlendirir** - "Login ekle" → otomatik olarak `src/auth/login.ts` önerir
  - **Bağlamı hatırlar** - Çalışma oturumlarını, görevleri ve mimari kararları takip eder
  - **Multi-mod arama** - Anlamsal (anlam), metin (anahtar kelime) veya desen tabanlı

  ## v0.5.x'te Yenilikler

  Son zamanlarda uygulama yol haritasının 1-4 Fazlarını tamamladık:

  ### 🗺️ Proje Blueprintleri (Faz 1)

  Tam öğrenme olmadan anlık proje bağlamı. Bir kod tabanı hakkında sorun ve 200 token'ın altında tech stack, giriş noktaları, anahtar dizinler ve mimariyi alın.

  ### 💼 Çalışma Bağlamı Sistemi (Faz 2)

  AI ajanları artık çalışma oturumlarını takip edebilir, görev listelerini koruyabilir ve mimari kararları kaydedebilir. Tam olarak kaldığınız yerden işe devam edin.

  ### 🧭 Akıllı Dosya Yönlendirmesi (Faz 3)

  10 kategori arasında özellik-dosya eşleştirmesi (auth, API, veritabanı, UI, vb.). "Şifre sıfırlama ekle" gibi belirsiz istekler otomatik olarak belirli dosyalara yönlendirilir.

  ### ⚡ Düzgün İlerleme Takibi (v0.5.3)

  Artık konsolda berbat spam yok. İlerleme çubukları 500ms tutarlı yenileme hızıyla yerinde güncellenir.

  ## AI Asistanları için MCP Araçları

  In Memoria, AI asistanlarının MCP aracılığıyla çağırabileceği **13 uzmanlaşmış araç** sağlar. 4 kategoride organize edilmiştir (Faz 4 sonrasında redundant araçları birleştiren 16'dan düşürülmüş):

  ### 🎯 Temel Analiz (2 araç)

  - `analyze_codebase` - Dosya/dizinleri kavramlar, desenler, karmaşıklık ile analiz edin (Faz 4: artık hem dosyaları hem dizinleri işler)
  - `search_codebase` - Multi-mod arama (anlamsal/metin/desen)

  ### 🧠 İstihbarat (7 araç)

  - `learn_codebase_intelligence` - Desenler ve mimariyi çıkarmak için derin öğrenme
  - `get_project_blueprint` - Anlık proje bağlamı tech stack ve giriş noktaları ile ⭐ (Faz 4: öğrenme durumunu içerir)
  - `get_semantic_insights` - Öğrenilen kavramlar ve ilişkileri sorgulayın
  - `get_pattern_recommendations` - Tutarlılık için ilgili dosyalarla desenleri alın
  - `predict_coding_approach` - Dosya yönlendirmesi ile uygulama rehberlenmesi ⭐
  - `get_developer_profile` - Kodlama stiline ve çalışma bağlamına erişin
  - `contribute_insights` - Mimari kararları kaydedin

  ### 🤖 Otomasyon (1 araç)

  - `auto_learn_if_needed` - Bayatlık tespiti ile akıllı otomatik öğrenme ⭐ (Faz 4: hızlı kurulum işlevselliğini içerir)

  ### 📊 İzleme (3 araç)

  - `get_system_status` - Sağlık kontrolü
  - `get_intelligence_metrics` - Öğrenilen desenler üzerinde analitikler
  - `get_performance_status` - Performans tanılaması

  **Faz 4 Konsolidasyonu**: Üç araç daha iyi AX (ajan deneyimi haha) için mevcut araçlara birleştirildi:

  - ~~get_file_content~~ → `analyze_codebase` içine birleştirildi
  - ~~get_learning_status~~ → `get_project_blueprint` içine birleştirildi
  - ~~quick_setup~~ → `auto_learn_if_needed` içine birleştirildi

  > **AI ajanları için**: Tam araç referansı, kullanım desenleri ve karar ağaçları için [`AGENT.md`](AGENT.md) bölümüne bakın.

  ## GitHub Copilot Entegrasyonu

  In Memoria, özel talimatlar ve sohbet modları aracılığıyla GitHub Copilot ile çalışır.

  ### Kurulum

  Bu depo şunları içerir:

  - `.github/copilot-instructions.md` - Copilot için otomatik rehberlik
  - `.github/agents/` - Üç uzmanlaşmış ajan:
    - 🔍 **inmemoria-explorer** - Akıllı kod tabanı gezintisi
    - 🚀 **inmemoria-feature** - Desen ile özellik uygulaması
    - 🔎 **inmemoria-review** - Tutarlılık kontrolü ile kod incelemesi

  ## GitHub Copilot Entegrasyonu (VS Code)

  In Memoria, **GitHub Copilot Chat** ile **MCP + Özel Ajanlar** (eski adı *Chat Modları*) kullanılarak entegre olur.
  Bu ajanlar Copilot'un **Ajan modu**'nda çalışırken In Memoria'nın kalıcı istihbaratını sorgulamasını sağlar.

  > ⚠️ **Önemli**: Copilot yalnızca sohbet **Ajan** modunda (Ask veya Edit değil) olduğunda MCP araçlarını çağırır.

  ### Gereksinimler

  * **VS Code 1.106+**
  * **GitHub Copilot Chat** etkin
  * In Memoria MCP sunucusu yapılandırılmış ve çalışıyor

  ---

  ### MCP Sunucu Kurulumu (Gerekli)

  Çalışma alanında aşağıdaki dosyayı oluşturun veya düzenleyin:

  **`.vscode/mcp.json`**

  ```json
  {
    "servers": {
      "in-memoria": {
        "command": "npx",
        "args": ["in-memoria", "server"]
      }
    }
  }
  ```

  Bu dosyayı VS Code'da açın ve istendiğinde **Başlat**'ı tıklayın veya manuel olarak başlatın.

  ---

  ### Copilot Talimatları (Otomatik)

  Bu depo şunları içerir:

  * **`.github/copilot-instructions.md`**

  VS Code otomatik olarak bu dosyayı yükler ve Copilot Chat'e rehberlik uygular.
  Ek kurulum gerekmez.

  ---

  ### Özel Ajanlar (eski adı "Chat Modları")

  Bu depo Copilot için **üç Özel Ajan** sağlar:

  | Ajan                      | Amaç                                          |
  | ------------------------- | --------------------------------------------- |
  | 🔍 **inmemoria-explorer** | Akıllı kod tabanı gezintisi                   |
  | 🚀 **inmemoria-feature**  | Öğrenilen desenleri kullanarak özellik uygulaması |
  | 🔎 **inmemoria-review**   | Tutarlılık & desen tabanlı kod incelemesi   |

  #### Ajan Dosyası Konumu

  > ⚠️ VS Code *Chat Modları*'nı **Özel Ajanlar** olarak yeniden adlandırdı

  Mevcut VS Code sürümleriyle uyumluluğu sağlamak için:

  1. Klasörü oluşturun:

     ```
     .github/agents/
     ```
  2. Dosyaları şuradan taşıyın veya kopyalayın:

     ```
     .github/chatmodes/
     ```

     şuraya:

     ```
     .github/agents/
     ```
  3. Her dosyayı yeniden adlandırın:

     ```
     *.chatmode.md → *.agent.md
     ```

  Örnek:

  ```
  inmemoria-feature.chatmode.md → inmemoria-feature.agent.md
  ```

  ---

  ### VS Code'da Ajanları Kullanma

  1. **Copilot Chat**'i açın
  2. Açılır menüden özel ajanı seçin (örn. inmemoria-featurename).

  Ajanlar görünmüyorsa:

  * Pencereyi yeniden yükleyin
  * Dosyaların `.github/agents/` içinde olduğundan emin olun

  ---

  ### Örnek Kullanım

  ```text
  Kimlik doğrulama mantığı nerede?
  ```

  → Copilot In Memoria'nın anlamsal indeksini sorgular

  ```text
  Şifre sıfırlama işlevi ekle
  ```

  → Copilot şunları alır:

  * dosya yönlendirmesi
  * mimari desenler
  * önceki auth kararları

  ```text
  Bu kodu tutarlılık açısından incele
  ```

  → Copilot öğrenilen kurallarla karşılaştırır

  ---

  ### Yaygın Tuzaklar

  * ❌ **Ask/Edit modu** kullanma → MCP araçları yok sayılır
  * ❌ MCP sunucusu çalışmıyor
  * ❌ Ajan dosyaları yalnızca `.github/chatmodes/` içinde kalması
  * ❌ VS Code sürümü < 1.106

  ---

  ### VS Code Terminolojisi Hakkında Notlar

  | Eski Ad                           | Mevcut Ad                      |
  | --------------------------------- | ------------------------------- |
  | Chat Modları                      | Özel Ajanlar                   |
  | `Chat: Configure Chat Modes…`     | `Chat: Configure Custom Agents` |
  | `.github/chatmodes/`              | `.github/agents/`               |

  VS Code hala eski dosyaları tanır, ancak **`.github/agents/*.agent.md` ileriye dönük önerilen format**dır.

  ## Dil Desteği

  Tree-sitter aracılığıyla yerel AST ayrıştırma:

  - TypeScript & JavaScript (JSX/TSX dahil)
  - Python
  - PHP
  - Rust
  - Go
  - Java
  - C & C++
  - C#
  - Svelte
  - SQL

  Build yapıtları (`node_modules/`, `dist/`, `.next/`, vb.) otomatik olarak filtrelenir.

  ## Durum: Devam Etmekte Olan İş

  **Açıkça söylemek gerekirse**: In Memoria erken aşama yazılımdır. Çalışır, ancak mükemmel değildir.

  ### İyi Çalışan Kısımlar

  - ✅ Gerçek kod tabanlarından desen öğrenme
  - ✅ Kavramlar arasında anlamsal arama
  - ✅ Proje blueprint'i üretimi
  - ✅ Claude Desktop/Code ile MCP entegrasyonu
  - ✅ Çapraz platform desteği (Linux, macOS, Windows)
  - ✅ Token verimli yanıtlar

  ### Bilinen Sınırlamalar

  - ⚠️ Büyük kod tabanları (100k+ dosya) ilk analizde yavaş olabilir
  - ⚠️ Desen doğruluğu kod tabanı tutarlılığı ile artar
  - ⚠️ Bazı dillerin tree-sitter desteği diğerlerinden daha iyidir
  - ⚠️ Dokümantasyon daha kapsamlı olabilir

  ### Yardımınıza İhtiyacımız Var

  Bu, AI destekli geliştirme için açık kaynaklı altyapıdır. Şu anda [@pi22by7](https://github.com/pi22by7) tarafından solo bir proje, ancak katkılar sadece hoş karşılanmakla kalmaz, gereklidir.

  **Kod katkılamadan önce**, lütfen:

  - [GitHub Projects board](https://github.com/pi22by7/in-memoria/projects) neyin planlandığını görmek için kontrol edin
  - Fikirlerinizi tartışmak için [Discord](https://discord.gg/6mGsM4qkYm) katılın (@pi_22by7)
  - Özellik/düzeltme tartışmak için [bir issue açın](https://github.com/pi22by7/in-memoria/issues)
  - Daha büyük katkılar için bana [talk@pi22by7.me](mailto:talk@pi22by7.me) adresinden e-posta gönderin

  **Katkı yapmanın yolları**:

  - 🐛 **Hataları bildirin** - Bir şeyler kırık mı? [Issue açın](https://github.com/pi22by7/in-memoria/issues)
  - 💡 **Özellik önerin** - Fikirleriniz var mı? [Discord](https://discord.gg/6mGsM4qkYm)'da veya [GitHub Discussions](https://github.com/pi22by7/in-memoria/discussions)'ta tartışın
  - 🔧 **PR gönderin** - Kod katkıları her zaman takdir edilir (önce tartışın!)
  - 📖 **Dokümentasyonu iyileştirin** - Bunu anlamayı daha kolay hale getirmede yardımcı olun
  - 🧪 **Kod tabanınızda test edin** - Deneyin ve bize neyin kırıldığını söyleyin
  - 💬 **Topluluğa katılın** - Gerçek zamanlı tartışmalar için [Discord](https://discord.gg/6mGsM4qkYm)

  Geliştirme kurulumu ve yönergeler için [CONTRIBUTING.md](CONTRIBUTING.md) bölümüne bakın.

  ## Teknik Karşılaştırma

  **GitHub Copilot'un hafızasına karşı**:

  - Copilot: Temel gerçek depolama, desen öğrenme yok
  - In Memoria: Anlamsal analiz + desen öğrenme + mimari istihbarat + çalışma bağlamı

  **Cursor'un kurallarına karşı**:

  - Cursor: Statik kurallar, manuel tanımlı
  - In Memoria: Gerçek koddan dinamik öğrenme + akıllı dosya yönlendirmesi + proje blueprintleri

  **Özel RAG'e karşı**:

  - RAG: İlgili kod parçacıklarını alır
  - In Memoria: Desenleri anlar + yaklaşımları tahmin eder + dosyalara yönlendirir + çalışma bağlamını takip eder

  ## Takım Kullanımı

  In Memoria hem bireysel geliştiriciler hem de takımlar için çalışır:

  **Bireysel**:

  - Kişisel kodlama stilinizi öğrenir
  - Yaptığınız mimari kararları hatırlar
  - Bağlamdan haberdar öneriler sağlar

  **Takım**:

  - `.in-memoria.db` dosyalarını dağıtmak için öğrenilen desenleri paylaşın
  - Öğrenilmiş kod tabanı istihbaratı ile yeni geliştiricileri hızla oyunun içine sokun
  - Takım genelinde tutarlı AI önerileri sağlayın

  ## Kaynaktan Derleyin

  ```bash
  git clone https://github.com/pi22by7/in-memoria
  cd in-memoria
  npm install
  npm run build
  ```

  **Gereksinimler**:

  - Node.js 18+
  - Rust 1.70+ (kaynaktan derleme için)
  - En az 2GB RAM

  **Geliştirme**:

  ```bash
  npm run dev          # Geliştirme modunda başlat
  npm test            # Test paketini çalıştır (%98.3 geçiş oranı)
  npm run build:rust  # Rust bileşenlerini derle
  ```

  **Kalite metrikleri**:

  - 118/120 birim testi geçiyor (%98.3)
  - 23/23 MCP entegrasyon testi geçiyor (%100)
  - Rust kodunda sıfır clippy uyarısı
  - Doğrulanan sıfır bellek sızıntısı

  ## SSS

  **S: Bu AI kod yazma asistanımın yerini alır mı?**
  C: Hayır, onu geliştiriyor. In Memoria, Claude, Copilot ve Cursor gibi araçların daha iyi öneriler vermek için kullanabileceği hafıza ve bağlam sağlar.

  **S: Hangi veriler toplandı?**
  C: Her şey yerel kalır. Hiçbir telemetri, hiçbir eve arama yok. Kodunuz asla makinenizi terk etmez. Tüm embedler transformers.js modelleri kullanarak yerel olarak üretilir.

  **S: Desen öğrenme ne kadar doğru?**
  C: Kod tabanı boyutu ve tutarlılığı ile artar. Oluşturulmuş desenlere sahip projeler küçük veya tutarsız kod tabanlarından daha iyi sonuçlar alır. Sistem sıklık ve tekrarlama yoluyla öğrenir.

  **S: Performans etkisi ne kadar?**
  C: Minimal. İlk öğrenme zaman alır (kod tabanı boyutuna orantılı), ancak sonraki sorgular hızlıdır. Dosya izlemesi artımlı güncellemeleri sağlar. Akıllı filtreleme build yapıtlarını otomatik olarak atlar.

  **S: Analiz başarısız olursa veya garip sonuçlar verirse?**
  C: Ayrıntılarla [bir issue açın](https://github.com/pi22by7/in-memoria/issues). Yerleşik zaman aşımları ve devre kesiciler çoğu uç durumu işler, ancak gerçek dünyadaki kod tabanları dağınıktır ve iyileştirmek için geri bildiriminize ihtiyacımız vardır.

  **S: Bunu üretimde kullanabilir miyim?**
  C: _Yapabilirsiniz_, ancak bunun v0.5.x olduğunu hatırlayın. Düzgün olmayan kenarlar olmasını bekleyin. Kapsamlı test edin. Sorunları bildirin. İstikrara doğru ilerliyoruz ancak henüz oraya varmadık.

  **S: Neden Rust + TypeScript?**
  C: Performans kritik AST ayrıştırma ve desen analizi için Rust. MCP sunucusu ve orkestrasyonu için TypeScript. Her ikisinin de en iyisi: hızlı çekirdek, esnek entegrasyon katmanı.

  **S: Diğer AI araçları hakkında ne (Claude/Copilot değil)?**
  C: MCP'yi destekleyen herhangi bir araç In Memoria'y
---

# In Memoria

[![npm version](https://img.shields.io/npm/v/in-memoria.svg)](https://www.npmjs.com/package/in-memoria)
[![npm downloads](https://img.shields.io/npm/dm/in-memoria.svg)](https://www.npmjs.com/package/in-memoria)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Discord](https://img.shields.io/discord/1431193342200516630?color=7289da&label=Discord&logo=discord&logoColor=white)](https://discord.gg/6mGsM4qkYm)

**Giving AI coding assistants a memory that actually persists.**

## Quick Demo

[![asciicast](https://asciinema.org/a/ZyD2bAZs1cURnqoFc3VHXemJx.svg)](https://asciinema.org/a/ZyD2bAZs1cURnqoFc3VHXemJx)

_Watch In Memoria in action: learning a codebase, providing instant context, and routing features to files._

---

## The Problem: Session Amnesia

You know the drill. You fire up Claude, Copilot, or Cursor to help with your codebase. You explain your architecture. You describe your patterns. You outline your conventions. The AI gets it, helps you out, and everything's great.

Then you close the window.

Next session? Complete amnesia. You're explaining the same architectural decisions again. The same naming conventions. The same "no, we don't use classes here, we use functional composition" for the fifteenth time.

**Every AI coding session starts from scratch.**

This isn't just annoying, it's inefficient. These tools re-analyze your codebase on every interaction, burning tokens and time. They give generic suggestions that don't match your style. They have no memory of what worked last time, what you rejected, or why.

## The Solution: Persistent Intelligence

In Memoria is an MCP server that learns from your actual codebase and remembers across sessions. It builds persistent intelligence about your code (patterns, architecture, conventions, decisions) that AI assistants can query through the Model Context Protocol.

Think of it as giving your AI pair programmer a notepad that doesn't get wiped clean every time you restart the session.

**Current version: 0.6.0** - [See what's changed](CHANGELOG.md)

### What It Does

- **Learns your patterns** - Analyzes your code to understand naming conventions, architectural choices, and structural preferences
- **Instant project context** - Provides tech stack, entry points, and architecture in <200 tokens (no re-analysis needed)
- **Smart file routing** - Routes vague requests like "add password reset" directly to relevant files
- **Semantic search** - Finds code by meaning, not just keywords
- **Work memory** - Tracks current tasks and architectural decisions across sessions
- **Pattern prediction** - Suggests how you'd solve similar problems based on your history

### Example Workflow

```bash
# First time: Learn your codebase
npx in-memoria learn ./my-project

# Start the MCP server
npx in-memoria server

# Now in Claude/Copilot:
You: "Add password reset functionality"
AI: *queries In Memoria*
    "Based on your auth patterns in src/auth/login.ts, I'll use your
     established JWT middleware pattern and follow your Result<T>
     error handling convention..."

# Next session (days later):
You: "Where did we put the password reset code?"
AI: *queries In Memoria*
    "In src/auth/password-reset.ts, following the pattern we
     established in our last session..."
```

No re-explaining. No generic suggestions. Just continuous, context-aware assistance.

## Quick Start

### Installation

```bash
# Install globally
npm install -g in-memoria

# Or use directly with npx
npx in-memoria --help
```

### Connect to Your AI Tool

**Claude Desktop** - Add to your config (`~/Library/Application Support/Claude/claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "in-memoria": {
      "command": "npx",
      "args": ["in-memoria", "server"]
    }
  }
}
```

**Claude Code CLI**:

```bash
claude mcp add in-memoria -- npx in-memoria server
```

**GitHub Copilot** - See [Copilot Integration](#github-copilot-integration) section below

### Learn Your Codebase

```bash
# Analyze and learn from your project
npx in-memoria learn ./my-project

# Or let AI agents trigger learning automatically
# (Just start the server and let auto_learn_if_needed handle it)
npx in-memoria server
```

## How It Works

In Memoria is built on Rust + TypeScript, using the Model Context Protocol to connect AI tools to persistent codebase intelligence.

### Architecture

```
┌─────────────────────┐    MCP     ┌──────────────────────┐    napi-rs    ┌─────────────────────┐
│  AI Tool (Claude)   │◄──────────►│  TypeScript Server   │◄─────────────►│   Rust Core         │
└─────────────────────┘            └──────────┬───────────┘               │  • AST Parser       │
                                              │                           │  • Pattern Learner  │
                                              │                           │  • Semantic Engine  │
                                              ▼                           │  • Blueprint System │
                                   ┌──────────────────────┐               └─────────────────────┘
                                   │ SQLite (persistent)  │
                                   │ SurrealDB (in-mem)   │
                                   └──────────────────────┘
```

### The Core Components

**Rust Layer** - Fast, native processing:

- Tree-sitter AST parsing for 12 languages (TypeScript, JavaScript, Python, PHP, Rust, Go, Java, C/C++, C#, Svelte, SQL)
- Blueprint analyzer (detects project structure, entry points, architecture patterns)
- Pattern learner (statistical analysis of your coding style)
- Semantic engine (understands code relationships and concepts)

**TypeScript Layer** - MCP server and orchestration:

- 13 specialized tools for AI assistants (organized into 4 categories)
- SQLite for structured data, SurrealDB with SurrealKV for persistent vector embeddings
- File watching for incremental updates
- Smart routing that maps features to files

**Storage** - Local-first:

- Everything stays on your machine
- SQLite for patterns and metadata
- SurrealDB with SurrealKV backend for persistent vector embeddings
- Local transformers.js for embeddings (Xenova/all-MiniLM-L6-v2)

### What Makes It Different

This isn't just another RAG system or static rules engine:

- **Learns from actual code** - Not manually-defined rules, but statistical patterns from your real codebase
- **Predicts your approach** - Based on how you've solved similar problems before
- **Token efficient** - Responses optimized to minimize LLM context usage (<200 tokens for project context)
- **Routes to files** - "Add login" → automatically suggests `src/auth/login.ts`
- **Remembers context** - Tracks work sessions, tasks, and architectural decisions
- **Multi-mode search** - Semantic (meaning), text (keywords), or pattern-based

## What's New in v0.5.x

We recently completed Phases 1-4 of the implementation roadmap:

### 🗺️ Project Blueprints (Phase 1)

Instant project context without full learning. Ask about a codebase and get tech stack, entry points, key directories, and architecture all in under 200 tokens.

### 💼 Work Context System (Phase 2)

AI agents can now track work sessions, maintain task lists, and record architectural decisions. Resume work exactly where you left off.

### 🧭 Smart File Routing (Phase 3)

Feature-to-file mapping across 10 categories (auth, API, database, UI, etc.). Vague requests like "add password reset" get routed to specific files automatically.

### ⚡ Smooth Progress Tracking (v0.5.3)

No more janky console spam. Progress bars update in-place with consistent 500ms refresh rates.

## MCP Tools for AI Assistants

In Memoria provides **13 specialized tools** that AI assistants can call via MCP. They're organized into 4 categories (down from 16 after Phase 4 consolidation merged redundant tools):

### 🎯 Core Analysis (2 tools)

- `analyze_codebase` - Analyze files/directories with concepts, patterns, complexity (Phase 4: now handles both files and directories)
- `search_codebase` - Multi-mode search (semantic/text/pattern)

### 🧠 Intelligence (7 tools)

- `learn_codebase_intelligence` - Deep learning to extract patterns and architecture
- `get_project_blueprint` - Instant project context with tech stack and entry points ⭐ (Phase 4: includes learning status)
- `get_semantic_insights` - Query learned concepts and relationships
- `get_pattern_recommendations` - Get patterns with related files for consistency
- `predict_coding_approach` - Implementation guidance with file routing ⭐
- `get_developer_profile` - Access coding style and work context
- `contribute_insights` - Record architectural decisions

### 🤖 Automation (1 tool)

- `auto_learn_if_needed` - Smart auto-learning with staleness detection ⭐ (Phase 4: includes quick setup functionality)

### 📊 Monitoring (3 tools)

- `get_system_status` - Health check
- `get_intelligence_metrics` - Analytics on learned patterns
- `get_performance_status` - Performance diagnostics

**Phase 4 Consolidation**: Three tools were merged into existing tools for better AX (agent experience haha):

- ~~get_file_content~~ → merged into `analyze_codebase`
- ~~get_learning_status~~ → merged into `get_project_blueprint`
- ~~quick_setup~~ → merged into `auto_learn_if_needed`

> **For AI agents**: See [`AGENT.md`](AGENT.md) for complete tool reference with usage patterns and decision trees.

## GitHub Copilot Integration

In Memoria works with GitHub Copilot through custom instructions and chat modes.

### Setup

This repository includes:

- `.github/copilot-instructions.md` - Automatic guidance for Copilot
- `.github/chatmodes/` - Three specialized chat modes:
  - 🔍 **inmemoria-explorer** - Intelligent codebase navigation
  - 🚀 **inmemoria-feature** - Feature implementation with patterns
  - 🔎 **inmemoria-review** - Code review with consistency checking

## GitHub Copilot Integration (VS Code)

In Memoria integrates with **GitHub Copilot Chat** using **MCP + Custom Agents** (formerly called *Chat Modes*).
These agents allow Copilot to query In Memoria’s persistent intelligence when working in **Agent mode**.

> ⚠️ **Important**: Copilot will only call MCP tools when the chat is in **Agent** mode (not Ask or Edit).

### Requirements

* **VS Code 1.106+**
* **GitHub Copilot Chat** enabled
* In Memoria MCP server configured and running

---

### MCP Server Setup (Required)

Create or edit the following file in your workspace:

**`.vscode/mcp.json`**

```json
{
  "servers": {
    "in-memoria": {
      "command": "npx",
      "args": ["in-memoria", "server"]
    }
  }
}
```

Open this file in VS Code and click **Start** when prompted, or start it manually.

---

### Copilot Instructions (Automatic)

This repository includes:

* **`.github/copilot-instructions.md`**

VS Code automatically loads this file and applies guidance to Copilot Chat.
No additional setup is required.

---

### Custom Agents (formerly “Chat Modes”)

This repository provides **three Custom Agents** for Copilot:

| Agent                     | Purpose                                       |
| ------------------------- | --------------------------------------------- |
| 🔍 **inmemoria-explorer** | Intelligent codebase navigation               |
| 🚀 **inmemoria-feature**  | Feature implementation using learned patterns |
| 🔎 **inmemoria-review**   | Consistency & pattern-based code review       |

#### Agent File Location

> ⚠️ VS Code has renamed *Chat Modes* → **Custom Agents**

To ensure compatibility with current VS Code versions:

1. Create the folder:

   ```
   .github/agents/
   ```
2. Move or copy files from:

   ```
   .github/chatmodes/
   ```

   into:

   ```
   .github/agents/
   ```
3. Rename each file:

   ```
   *.chatmode.md → *.agent.md
   ```

Example:

```
inmemoria-feature.chatmode.md → inmemoria-feature.agent.md
```

---

### Using Agents in VS Code

1. Open **Copilot Chat**
2. Select the custom agent (e.g., inmemoria-featurename) directly from the dropdown.

If agents do not appear:

* Reload the window
* Ensure files are in `.github/agents/`

---

### Example Usage

```text
Where is the authentication logic?
```

→ Copilot queries In Memoria’s semantic index

```text
Add password reset functionality
```

→ Copilot retrieves:

* file routing
* architectural patterns
* prior auth decisions

```text
Review this code for consistency
```

→ Copilot compares against learned conventions

---

### Common Pitfalls

* ❌ Using **Ask/Edit mode** → MCP tools are ignored
* ❌ MCP server not running
* ❌ Agent files left in `.github/chatmodes/` only
* ❌ VS Code version < 1.106

---

### Notes on VS Code Terminology

| Old Name                      | Current Name                    |
| ----------------------------- | ------------------------------- |
| Chat Modes                    | Custom Agents                   |
| `Chat: Configure Chat Modes…` | `Chat: Configure Custom Agents` |
| `.github/chatmodes/`          | `.github/agents/`               |

VS Code still recognizes legacy files, but **`.github/agents/*.agent.md` is the recommended format going forward**.

## Language Support

Native AST parsing via tree-sitter for:

- TypeScript & JavaScript (including JSX/TSX)
- Python
- PHP
- Rust
- Go
- Java
- C & C++
- C#
- Svelte
- SQL

Build artifacts (`node_modules/`, `dist/`, `.next/`, etc.) are automatically filtered out.

## Status: Work in Progress

**Let's be honest**: In Memoria is early-stage software. It works, but it's not perfect.

### What Works Well

- ✅ Pattern learning from real codebases
- ✅ Semantic search across concepts
- ✅ Project blueprint generation
- ✅ MCP integration with Claude Desktop/Code
- ✅ Cross-platform support (Linux, macOS, Windows)
- ✅ Token-efficient responses

### Known Limitations

- ⚠️ Large codebases (100k+ files) can be slow on first analysis
- ⚠️ Pattern accuracy improves with codebase consistency
- ⚠️ Some languages have better tree-sitter support than others
- ⚠️ Documentation could be more comprehensive

### We Need Your Help

This is open-source infrastructure for AI-assisted development. Currently a solo project by [@pi22by7](https://github.com/pi22by7), but contributions are not just welcome, they're essential.

**Before contributing code**, please:

- Check the [GitHub Projects board](https://github.com/pi22by7/in-memoria/projects) to see what's planned
- Join [Discord](https://discord.gg/6mGsM4qkYm) to discuss your ideas (@pi_22by7)
- [Open an issue](https://github.com/pi22by7/in-memoria/issues) to discuss the feature/fix
- Email me at [talk@pi22by7.me](mailto:talk@pi22by7.me) for larger contributions

**Ways to contribute**:

- 🐛 **Report bugs** - Found something broken? [Open an issue](https://github.com/pi22by7/in-memoria/issues)
- 💡 **Suggest features** - Have ideas? Discuss on [Discord](https://discord.gg/6mGsM4qkYm) or [GitHub Discussions](https://github.com/pi22by7/in-memoria/discussions)
- 🔧 **Submit PRs** - Code contributions are always appreciated (discuss first!)
- 📖 **Improve docs** - Help make this easier to understand
- 🧪 **Test on your codebase** - Try it out and tell us what breaks
- 💬 **Join the community** - [Discord](https://discord.gg/6mGsM4qkYm) for real-time discussions

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup and guidelines.

## Technical Comparison

**vs GitHub Copilot's memory**:

- Copilot: Basic fact storage, no pattern learning
- In Memoria: Semantic analysis + pattern learning + architectural intelligence + work context

**vs Cursor's rules**:

- Cursor: Static rules, manually defined
- In Memoria: Dynamic learning from actual code + smart file routing + project blueprints

**vs Custom RAG**:

- RAG: Retrieves relevant code snippets
- In Memoria: Understands patterns + predicts approaches + routes to files + tracks work context

## Team Usage

In Memoria works for both individual developers and teams:

**Individual**:

- Learns your personal coding style
- Remembers architectural decisions you've made
- Provides context-aware suggestions

**Team**:

- Share `.in-memoria.db` files to distribute learned patterns
- Onboard new developers with pre-learned codebase intelligence
- Ensure consistent AI suggestions across the team

## Build from Source

```bash
git clone https://github.com/pi22by7/in-memoria
cd in-memoria
npm install
npm run build
```

**Requirements**:

- Node.js 18+
- Rust 1.70+ (for building from source)
- 2GB RAM minimum

**Development**:

```bash
npm run dev          # Start in development mode
npm test            # Run test suite (98.3% pass rate)
npm run build:rust  # Build Rust components
```

**Quality metrics**:

- 118/120 unit tests passing (98.3%)
- 23/23 MCP integration tests passing (100%)
- Zero clippy warnings in Rust code
- Zero memory leaks verified

## FAQ

**Q: Does this replace my AI coding assistant?**
A: No, it enhances them. In Memoria provides the memory and context that tools like Claude, Copilot, and Cursor can use to give better suggestions.

**Q: What data is collected?**
A: Everything stays local. No telemetry, no phone-home. Your code never leaves your machine. All embeddings are generated locally using transformers.js models.

**Q: How accurate is pattern learning?**
A: It improves with codebase size and consistency. Projects with established patterns see better results than small or inconsistent codebases. The system learns from frequency and repetition.

**Q: What's the performance impact?**
A: Minimal. Initial learning takes time (proportional to codebase size), but subsequent queries are fast. File watching enables incremental updates. Smart filtering skips build artifacts automatically.

**Q: What if analysis fails or produces weird results?**
A: [Open an issue](https://github.com/pi22by7/in-memoria/issues) with details. Built-in timeouts and circuit breakers handle most edge cases, but real-world codebases are messy and we need your feedback to improve.

**Q: Can I use this in production?**
A: You _can_, but remember this is v0.5.x. Expect rough edges. Test thoroughly. Report issues. We're working toward stability but aren't there yet.

**Q: Why Rust + TypeScript?**
A: Rust for performance-critical AST parsing and pattern analysis. TypeScript for MCP server and orchestration. Best of both worlds: fast core, flexible integration layer.

**Q: What about other AI tools (not Claude/Copilot)?**
A: Any tool supporting MCP can use In Memoria. We've tested with Claude Desktop, Claude Code, and GitHub Copilot. Others should work but may need configuration.

## Roadmap

We're following a phased approach:

- ✅ **Phase 1**: Project Blueprint System (v0.5.0)
- ✅ **Phase 2**: Work Context & Session Memory (v0.5.0)
- ✅ **Phase 3**: Smart File Routing (v0.5.0)
- ✅ **Phase 4**: Tool Consolidation (v0.5.0)
- 🚧 **Phase 5**: Enhanced Vector Search & Embeddings
- 📋 **Phase 6**: Multi-project Intelligence
- 📋 **Phase 7**: Collaboration Features

See [GitHub Projects](https://github.com/pi22by7/in-memoria/projects) for detailed tracking.

## Community & Support

**Project maintained by**: [@pi22by7](https://github.com/pi22by7)

- 💬 **Discord**: [discord.gg/6mGsM4qkYm](https://discord.gg/6mGsM4qkYm) - Join the community, ask questions, discuss improvements (ping @pi_22by7)
- 📧 **Email**: [talk@pi22by7.me](mailto:talk@pi22by7.me) - For private inquiries or larger contribution discussions
- 🐛 **Issues**: [GitHub Issues](https://github.com/pi22by7/in-memoria/issues) - Report bugs and request features
- 💡 **Discussions**: [GitHub Discussions](https://github.com/pi22by7/in-memoria/discussions) - General discussions and Q&A
- 📖 **Documentation**: See [AGENT.md](AGENT.md) for AI agent instructions
- 🤝 **Contributing**: Check [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines

**Before contributing**: Please discuss your ideas on Discord, via email, or in an issue before starting work on significant features. This helps ensure alignment with project direction and avoids duplicate efforts.

## License

MIT - see [LICENSE](LICENSE)

Built with ❤️ by [@pi22by7](https://github.com/pi22by7) for the AI-assisted development community.

---

**Try it**: `npx in-memoria server`

**Latest release**: [v0.6.0](CHANGELOG.md) - Smooth progress tracking and Phase 1-4 complete

_In memoria: in memory. Because your AI assistant should remember._

**Questions? Ideas?** Join us on [Discord](https://discord.gg/6mGsM4qkYm) or reach out at [talk@pi22by7.me](mailto:talk@pi22by7.me)
