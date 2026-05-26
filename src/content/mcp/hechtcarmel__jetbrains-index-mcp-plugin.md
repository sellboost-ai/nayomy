---
name: "hechtcarmel/jetbrains-index-mcp-plugin"
description: "A JetBrains IDE plugin that exposes an MCP server, enabling AI coding assistants to leverage the IDE's indexing and refactoring capabilities (rename, safe delete, find references, call hierarchy, type hierarchy, diagnostics and more)."
category: "Developer Tools"
repo: "hechtcarmel/jetbrains-index-mcp-plugin"
stars: 222
url: "https://github.com/hechtcarmel/jetbrains-index-mcp-plugin"
body_length: 21275
license: "MIT"
language: "Kotlin"
body_tr: |-
  # IDE Index MCP Sunucusu

  ![Build](https://github.com/hechtcarmel/jetbrains-index-mcp-plugin/workflows/Build/badge.svg)
  [![Version](https://img.shields.io/jetbrains/plugin/v/29174.svg)](https://plugins.jetbrains.com/plugin/29174-ide-index-mcp-server)
  [![Downloads](https://img.shields.io/jetbrains/plugin/d/29174.svg)](https://plugins.jetbrains.com/plugin/29174-ide-index-mcp-server)

  JetBrains IDE eklentisi olup bir **MCP (Model Context Protocol) sunucusu** sunar; Claude, Codex, Cursor ve Windsurf gibi yapay zeka kodlama asistanlarının IDE'nin güçlü indexleme ve refaktoring yeteneklerinden yararlanmasını sağlar.

  **Tamamen test edilmiş**: IntelliJ IDEA, PyCharm, WebStorm, GoLand, RustRover, Android Studio, PhpStorm
  **Çalışabilir** (test edilmemiş): RubyMine, CLion, DataGrip

  [!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/hechtcarmel)

  <!-- Plugin description -->
  **IDE Index MCP Sunucusu**, yapay zeka kodlama asistanlarına Model Context Protocol (MCP) üzerinden IDE'nin güçlü kod zeka özelliklerine erişim imkanı sağlar.

  ### Özellikler

  **Çok Dil Desteği**
  Gelişmiş araçlar mevcut eklentilere göre birden fazla dilde çalışır:
  - **Java & Kotlin** - IntelliJ IDEA, Android Studio
  - **Python** - PyCharm (tüm sürümler), Python eklentili IntelliJ
  - **JavaScript & TypeScript** - WebStorm, IntelliJ Ultimate, PhpStorm
  - **Go** - GoLand, Go eklentili IntelliJ IDEA Ultimate
  - **PHP** - PhpStorm, PHP eklentili IntelliJ Ultimate
  - **Rust** - RustRover, Rust eklentili IntelliJ IDEA Ultimate, CLion
  - **Markdown** - dosya yapısında başlık anahatları; Markdown eklentisini kullanan IDE'ler için

  **Evrensel Araçlar (Tüm Desteklenen JetBrains IDE'leri)**
  - **Referansları Bul** - Proje genelinde herhangi bir sembolün tüm kullanımlarını bulun
  - **Tanıma Git** - Sembol bildirimine gidin
  - **Kod Tanılama** - Hataları, uyarıları ve hızlı düzeltmeleri gösterir
  - **Index Durumu** - Kod zekasının hazır olup olmadığını kontrol edin
  - **Dosyaları Senkronize Et** - Harici dosya değişikliklerinden sonra VFS/PSI önbelleğini zorla senkronize edin
  - **Projeyi İnşa Et** - Yapılandırılmış hata/uyarı çıktısıyla IDE derlemesini tetikleyin (varsayılan olarak devre dışı)
  - **Sınıf Bul** - camelCase eşleştirmesi ile sınıf/arayüz adına göre hızlı arama
  - **Dosya Bul** - IDE'nin dosya indeksini kullanarak ada göre hızlı dosya araması
  - **Sembol Ara** - IntelliJ Go to Symbol eşleştirmesi ile ada göre kod sembollerini bulun (varsayılan olarak devre dışı)
  - **Metni Ara** - IDE'nin önceden oluşturulmuş kelime indeksini kullanarak metin araması
  - **Dosya Oku** - Yol veya nitelikli ada göre dosya içeriğini okuyun; kütüphane kaynaklarını da dahil (varsayılan olarak devre dışı)
  - **Dosyayı Aç** - Editörde dosya açın; isteğe bağlı gezinti (varsayılan olarak devre dışı)
  - **Aktif Dosyayı Al** - İmleç konumuyla birlikte şu anda etkin editör dosyasını alın (varsayılan olarak devre dışı)

  **Genişletilmiş Araçlar (Dile Duyarlı)**
  Bu araçlar yüklü dil eklentilerine göre etkinleşir:
  - **Tür Hiyerarşisi** - Sınıf kalıtım zincirlerini keşfedin
  - **Çağrı Hiyerarşisi** - Metot/fonksiyon çağrı ilişkilerini izleyin
  - **Uygulamaları Bul** - Arayüz/soyut uygulama keşfet
  - **Üst Metodları Bul** - Metot geçersiz kılma hiyerarşisinde gezinin
  - **Dosya Yapısı** - IDE'nin Yapı görünümü gibi hiyerarşik dosya yapısını görüntüleyin; PHP Yapı Görünümü ağaçlarını ve Markdown başlık anahatlarını dahil (varsayılan olarak devre dışı)

  **Refaktoring Araçları**
  - **Rename Refaktoring** - Otomatik ilişkili eleman yeniden adlandırması (getters/setters, geçersiz kılan metodlar) ile güvenli yeniden adlandırma - TÜM dillerde çalışır, tamamen headless
  - **Kodu Yeniden Biçimlendir** - Proje kod stilini kullanarak yeniden biçimlendir; import optimizasyonu (varsayılan olarak devre dışı)
  - **Güvenli Sil** - Kullanım kontrolü ile kodu kaldırın (sadece Java/Kotlin)
  - **Java'dan Kotlin'e Dönüştürme** - Intellij'in yerleşik dönüştürücüsünü kullanarak Java'yı Kotlin'e dönüştürün (sadece Java)

  ### Bu Eklentiyi Neden Kullanmalısınız?

  Basit metin tabanlı kod analizinin aksine, bu eklenti yapay zeka asistanlarına şunlara erişim imkanı verir:
  - IDE'nin AST ve indeksi aracılığıyla **gerçek anlamsal anlama**
  - Dosyalar ve modüller arasında çalışan **çapraz proje referans çözümlemesi**
  - Otomatik olarak dile özgü işleyicileri algılayan ve kullanan **çok dil desteği**
  - Otomatik referans güncellemeleri ve geri alma desteğiyle **güvenli refaktoring işlemleri**

  Yapay zeka destekli geliştirme iş akışları için ideal; doğruluk ve güvenliğin önemli olduğu yerler.
  <!-- Plugin description end -->

  ## İçindekiler

  - [Kurulum](#kurulum)
  - [Hızlı Başlangıç](#hızlı-başlangıç)
  - [Topluluk İntegrasyonları](#topluluk-integrasyonları)
  - [İstemci Yapılandırması](#istemci-yapılandırması)
  - [Kullanılabilir Araçlar](#kullanılabilir-araçlar)
  - [Çok Proje Desteği](#çok-proje-desteği)
  - [Araç Penceresi](#araç-penceresi)
  - [Hata Kodları](#hata-kodları)
  - [Gereksinimler](#gereksinimler)
  - [Katkıda Bulunma](#katkıda-bulunma)

  ## Kurulum

  ### IDE yerleşik eklenti sistemi kullanarak

  <kbd>Ayarlar/Tercihler</kbd> > <kbd>Eklentiler</kbd> > <kbd>Marketplace</kbd> > <kbd>"IDE Index MCP Server" arayın</kbd> > <kbd>Yükle</kbd>

  ### JetBrains Marketplace Kullanarak

  [JetBrains Marketplace](https://plugins.jetbrains.com/plugin/29174-ide-index-mcp-server) adresine gidin ve <kbd>Yükle...</kbd> düğmesini tıklayarak yükleyin.

  ### Manuel Kurulum

  [Son sürümü](https://plugins.jetbrains.com/plugin/29174-ide-index-mcp-server/versions) indirin ve manuel olarak yükleyin:
  <kbd>Ayarlar/Tercihler</kbd> > <kbd>Eklentiler</kbd> > <kbd>⚙️</kbd> > <kbd>Diskten eklenti yükle...</kbd>

  ## Hızlı Başlangıç

  1. **Eklentiyi yükleyin** ve JetBrains IDE'nizi yeniden başlatın
  2. **Bir proje açın** - MCP sunucusu IDE'ye özel varsayılanlarla otomatik olarak başlar:
     - IntelliJ IDEA: `intellij-index` port **29170** üzerinde
     - PyCharm: `pycharm-index` port **29172** üzerinde
     - WebStorm: `webstorm-index` port **29173** üzerinde
     - Diğer IDE'ler: Bkz. [IDE'ye Özel Varsayılanlar](#ide'ye-özel-varsayılanlar)
  3. **Yapay zeka asistanınızı yapılandırın** - "Kodlama Aracılarına Yükle" düğmesini (en kolay) veya manuel olarak kullanın
  4. **Araç penceresini kullanın** (alt panel: "Index MCP Sunucusu") konfigürasyonu kopyalamak veya komutları izlemek için
  5. **Portu değiştirin** (isteğe bağlı): Araç çubuğunda "Portu değiştir, araçları devre dışı bırak" veya <kbd>Ayarlar</kbd> > <kbd>Araçlar</kbd> > <kbd>Index MCP Sunucusu</kbd> kısmını tıklayın

  ### "Kodlama Aracılarına Yükle" Düğmesini Kullanma

  Yapay zeka asistanınızı yapılandırmanın en kolay yolu:
  1. "Index MCP Sunucusu" araç penceresini açın (alt panel)
  2. Araç çubuğunun sağ tarafındaki prominent **"Kodlama Aracılarına Yükle"** düğmesini tıklayın
  3. İki bölüm içeren bir açılır pencere görüntülenir:
     - **Şimdi Yükle** - Claude Code CLI ve Codex CLI için: Kurulum komutunu otomatik olarak çalıştırır
     - **Konfigürasyonu Kopyala** - Diğer istemciler için: JSON konfigürasyonunu panonuza kopyalar
  4. "Konfigürasyonu Kopyala" istemcileri için, konfigürasyonu uygun yapılandırma dosyasına yapıştırın

  ## Topluluk İntegrasyonları

  - [opencode-jetbrains-index](https://github.com/ineersa/opencode-jetbrains-index) - Bu eklentiyi kullanan OpenCode için üçüncü taraf entegrasyonu

  > **Sorumluluk Reddi**: Bu depo tarafımdan bakılmamaktadır. Entegrasyona özgü sorunlar ve destek için kendi issue tracker'ını kullanınız.

  ## İstemci Yapılandırması

  ### Claude Code (CLI)

  Araç penceresinde "Kodlama Aracılarına Yükle" düğmesini kullanın veya şu komutu çalıştırın (IDE'niz için adı ve portu ayarlayın):

  ```bash
  # IntelliJ IDEA
  claude mcp add --transport http --scope user intellij-index http://127.0.0.1:29170/index-mcp/streamable-http

  # PyCharm
  claude mcp add --transport http --scope user pycharm-index http://127.0.0.1:29172/index-mcp/streamable-http

  # WebStorm
  claude mcp add --transport http --scope user webstorm-index http://127.0.0.1:29173/index-mcp/streamable-http
  ```

  Seçenekler:
  - `--scope user` - Tüm projeler için genel olarak ekler
  - `--scope project` - Yalnızca geçerli projeye ekler

  Kaldırmak için: `claude mcp remove <server-name>` (örn. `claude mcp remove intellij-index`)

  ### Codex CLI

  Araç penceresinde "Kodlama Aracılarına Yükle" düğmesini kullanın veya şu komutu çalıştırın (IDE'niz için adı ve portu ayarlayın):

  ```bash
  # IntelliJ IDEA
  codex mcp add intellij-index --url http://127.0.0.1:29170/index-mcp/streamable-http

  # PyCharm
  codex mcp add pycharm-index --url http://127.0.0.1:29172/index-mcp/streamable-http

  # WebStorm
  codex mcp add webstorm-index --url http://127.0.0.1:29173/index-mcp/streamable-http
  ```

  Kaldırmak için: `codex mcp remove <server-name>` (örn. `codex mcp remove intellij-index`)

  ### Cursor

  Proje kökünüzde `.cursor/mcp.json` veya genel olarak `~/.cursor/mcp.json` dosyasına ekleyin (IDE'niz için adı ve portu ayarlayın):

  ```json
  {
    "mcpServers": {
      "intellij-index": {
        "url": "http://127.0.0.1:29170/index-mcp/streamable-http"
      }
    }
  }
  ```

  ### Windsurf

  `~/.codeium/windsurf/mcp_config.json` dosyasına ekleyin (IDE'niz için adı ve portu ayarlayın):

  ```json
  {
    "mcpServers": {
      "intellij-index": {
        "serverUrl": "http://127.0.0.1:29170/index-mcp/streamable-http"
      }
    }
  }
  ```

  ### VS Code (Jenerik MCP)

  ```json
  {
    "mcp.servers": {
      "intellij-index": {
        "url": "http://127.0.0.1:29170/index-mcp/streamable-http"
      }
    }
  }
  ```

  > **Not**: Sunucu adını ve portu IDE'nizin varsayılanları ile değiştirin. Aşağıda [IDE'ye Özel Varsayılanlar](#ide'ye-özel-varsayılanlar) kısmına bakınız.

  ### IDE'ye Özel Varsayılanlar

  Her JetBrains IDE'nin, çatışmalar olmadan aynı anda birden fazla IDE çalıştırabilmek için benzersiz bir varsayılan port ve sunucu adı vardır:

  | IDE | Sunucu Adı | Varsayılan Port |
  |-----|-----------|-----------------|
  | IntelliJ IDEA | `intellij-index` | 29170 |
  | Android Studio | `android-studio-index` | 29171 |
  | PyCharm | `pycharm-index` | 29172 |
  | WebStorm | `webstorm-index` | 29173 |
  | GoLand | `goland-index` | 29174 |
  | PhpStorm | `phpstorm-index` | 29175 |
  | RubyMine | `rubymine-index` | 29176 |
  | CLion | `clion-index` | 29177 |
  | RustRover | `rustrover-index` | 29178 |
  | DataGrip | `datagrip-index` | 29179 |

  > **İpucu**: Araç penceresindeki "Kodlama Aracılarına Yükle" düğmesini kullanın - IDE'niz için otomatik olarak doğru sunucu adını ve portunu kullanır.

  ## Kullanılabilir Araçlar

  Eklenti, kullanılabilirliğe göre düzenlenmiş **21 MCP aracı** sağlar. *(varsayılan olarak devre dışı)* işaretli araçlar <kbd>Ayarlar</kbd> > <kbd>Araçlar</kbd> > <kbd>Index MCP Sunucusu</kbd> kısmında etkinleştirilebilir.

  ### Evrensel Araçlar

  Bu araçlar tüm desteklenen JetBrains IDE'lerinde çalışır.

  | Araç | Açıklama |
  |------|---------|
  | `ide_find_references` | Tüm proje genelinde bir sembolün tüm referanslarını bulun |
  | `ide_find_definition` | Bir sembolün tanımı/bildirimi konumunu bulun |
  | `ide_find_class` | camelCase/substring/joker eşleştirmesi ile sınıf/arayüz ada göre arayın |
  | `ide_find_file` | IDE'nin dosya indeksini kullanarak ada göre dosya arayın |
  | `ide_find_symbol` | IntelliJ Go to Symbol eşleştirmesi ile ad göre sembol (sınıf, metot, alan, fonksiyon) arayın *(varsayılan olarak devre dışı)* |
  | `ide_search_text` | Bağlam filtrelemesiyle IDE'nin önceden oluşturulmuş kelime indeksini kullanarak metin araması |
  | `ide_diagnostics` | Açık dosyalar için taze editör tanılaması veya kapalı dosyalar için genel toplu tanılama ile dosya sorunlarını analiz edin; isteğe bağlı derleme/test sonuçları; niyetler en iyi çaba temelinde |
  | `ide_index_status` | IDE'nin dumb mode'da mı yoksa smart mode'da mı olduğunu kontrol edin |
  | `ide_sync_files` | IDE'nin sanal dosya sistemi ve PSI önbelleğini harici dosya değişiklikleriyle senkronize etmeyi zorla |
  | `ide_build_project` | Yapılandırılmış hatalarla IDE derleme sistemi (JPS, Gradle, Maven) kullanarak projeyi derleyin *(varsayılan olarak devre dışı)* |
  | `ide_read_file` | Yol veya nitelikli ada göre dosya içeriğini okuyun; kütüphane/jar kaynakları dahil *(varsayılan olarak devre dışı)* |
  | `ide_get_active_file` | İmleç konumuyla birlikte editördeki şu anda aktif dosya(ları) alın *(varsayılan olarak devre dışı)* |
  | `ide_open_file` | Editörde dosya açın; isteğe bağlı satır/sütun gezintisi *(varsayılan olarak devre dışı)* |
  | `ide_refactor_rename` | Bir sembolü yeniden adlandırın ve proje genelinde tüm referansları güncelleyin (tüm diller) |
  | `ide_move_file` | Dosyayı yeni bir dizine taşıyın; IDE anlamsal taşıma arka ucu sağladığında dile duyarlı referans/paket güncellemeleri uygulayın |
  | `ide_reformat_code` | Proje kod stilini kullanarak kodu yeniden biçimlendir; import optimizasyonu *(varsayılan olarak devre dışı)* |

  ### Genişletilmiş Araçlar (Dile Duyarlı)

  Bu araçlar mevcut dil eklentilerine göre etkinleşir:

  | Araç | Açıklama | Diller |
  |------|---------|--------|
  | `ide_type_hierarchy` | Tam tür hiyerarşisini (üst tipleri ve alt tipleri) alın | Java, Kotlin, Python, JS/TS, Go, PHP, Rust |
  | `ide_call_hierarchy` | Metot çağrısı ilişkilerini analiz edin (arayanlar veya çağrılanlar) | Java, Kotlin, Python, JS/TS, Go, PHP, Rust |
  | `ide_find_implementations` | Bir arayüz veya soyut metotun tüm uygulamalarını bulun | Java, Kotlin, Python, JS/TS, PHP, Rust |
  | `ide_find_super_methods` | Bir metodun geçersiz kıldığı/uyguladığı metodların tam kalıtım hiyerarşisini bulun | Java, Kotlin, Python, JS/TS, PHP |
  | `ide_file_structure` | Hiyerarşik dosya yapısını alın (IDE'nin Yapı görünümüne benzer) *(varsayılan olarak devre dışı)* | Java, Kotlin, Python, JS/TS, PHP, Markdown |

  PHP dosya yapısı desteği PHP eklentisi gerektirir ve PhpStorm veya PHP eklentisi etkin olan IntelliJ IDEA Ultimate'de mevcuttur.

  ### Java'ya Özel Refaktoring Araçları

  | Araç | Açıklama |
  |------|---------|
  | `ide_convert_java_to_kotlin` | IntelliJ'in yerleşik dönüştürücüsünü kullanarak Java dosyalarını Kotlin'e dönüştürün *(varsayılan olarak devre dışı, Java + Kotlin eklentileri gerekir)* |
  | `ide_refactor_safe_delete` | Bir elemanı güvenli şekilde silin; önce kullanımları kontrol edin (sadece Java/Kotlin) |

  > **Not**: Refaktoring araçları kaynak dosyaları değiştirir. Tüm değişiklikler <kbd>Ctrl/Cmd+Z</kbd> üzerinden geri almayı destekler.

  ### IDE'ye Göre Araç Kullanılabilirliği

  **Tamamen Test Edilmiş:**

  | IDE | Evrensel | Gezinti | Refaktoring |
  |-----|---------|---------|------------|
  | IntelliJ IDEA | ✓ 14 araç | ✓ 6 araç | ✓ rename + reformat + safe delete + Java→Kotlin |
  | Android Studio | ✓ 14 araç | ✓ 6 araç | ✓ rename + reformat + safe delete + Java→Kotlin |
  | PyCharm | ✓ 14 araç | ✓ 6 araç | ✓ rename + reformat |
  | WebStorm | ✓ 14 araç | ✓ 6 araç | ✓ rename + reformat |
  | GoLand | ✓ 14 araç | ✓ 4 araç | ✓ rename + reformat |
  | RustRover | ✓ 14 araç | ✓ 5 araç | ✓ rename + reformat |
  | PhpStorm | ✓ 14 araç | ✓ 6 araç | ✓ rename + reformat |

  **Çalışabilir (Test Edilmemiş):**

  | IDE | Evrensel | Gezinti | Refaktoring |
  |-----|---------|---------|------------|
  | RubyMine | ✓ 14 araç | ✓ 2 Markdown aracı | ✓ rename + reformat |
  | CLion | ✓ 14 araç | ✓ 2 Markdown aracı | ✓ rename + reformat |
  | DataGrip | ✓ 14 araç | ✓ 2 Markdown aracı | ✓ rename + reformat |

  > **Not**: Gezinti araçları dil eklentileri mevcut olduğunda etkinleşir. Markdown, yerleşik Markdown eklentisi etkinleştirildiğinde başlık araması ve dosya yapısı desteği ekler. Go ve Rust, dil semantiğinden dolayı `ide_find_super_methods` göstermez; Go `ide_find_implementations` göstermez. Rename ve reformat araçları tüm dillerde çalışır. `ide_convert_java_to_kotlin` yalnızca IntelliJ IDEA ve Android Studio'da mevcuttur, hem Java hem de Kotlin eklentilerini gerektirir ve varsayılan olarak devre dışıdır.

  Parametreler ve örnekler içeren ayrıntılı araç belgeleri için [USAGE.md](USAGE.md) dosyasına bakınız.

  ## Çok Proje Desteği

  Tek bir IDE penceresinde birden fazla proje açık olduğunda, `project_path` parametresiyle hangi projenin kullanılacağını belirtmelisiniz:

  ```json
  {
    "name": "ide_find_references",
    "arguments": {
      "project_path": "/Users/dev/myproject",
      "file": "src/Main.kt",
      "line": 10,
      "column": 5
    }
  }
  ```

  `project_path` atlanırsa:
  - **Tek proje açık**: Bu proje otomatik olarak kullanılır
  - **Birden fazla proje açık**: Kullanılabilir projeler listesiyle bir hata döndürülür

  ### Workspace Projeleri

  Eklenti, tek bir IDE penceresinin, ayrı içerik köklerine sahip modüller olarak birden fazla alt proje içeren **workspace projelerine** destek verir. `project_path` parametresi şunları kabul eder:

  - **Workspace kök** yolu
  - **Alt proje yolu** (modül içerik kökü)
  - Herhangi bir açık projenin **alt dizini**

  Bir hata oluştuğunda, yanıt `available_projects` döndürür. Varsayılan olarak bu, yapay zeka aracılarının geçerli modül içerik köklerini keşfetmesi için workspace alt projelerini içerir. Daha küçük hata yüklemeleri istiyorsanız, eklenti ayarlarında **Hata Yanıtlarında Proje Listesi** seçeneğini **Kompakt** olarak değiştirerek yalnızca üst düzey proje köklerini döndürün.

  ## Araç Penceresi

  Eklenti, şunları gösteren bir "Index MCP Sunucusu" araç penceresi (alt panel) ekler:

  - **Sunucu Durumu**: Sunucu URL'si ve portu ile çalıştırma göstergesi
  - **Proje Adı**: Şu anda etkin olan proje
  - **Komut Geçmişi**: Tüm MCP araç çağrılarının günlüğü:
    - Zaman damgası
    - Araç adı
    - Durum (Başarılı/Hata/Beklemede)
    - Parametreler ve sonuçlar (genişletilebilir)
    - Yürütme süresi

  ### Araç Penceresi İşlemleri

  | İşlem | Açıklama |
  |------|---------|
  | Yenile | Sunucu durumunu ve komut geçmişini yenile |
  | URL'yi Kopyala | MCP sunucu URL'sini panoya kopyala |
  | Geçmişi Temizle | Komut geçmişini temizle |
  | Geçmişi Dışa Aktar | Geçmişi JSON veya CSV dosyasına dışa aktar |
  | **Kodlama Aracılarına Yükle** | MCP sunucusunu yapay zeka asistanlarına yükle (sağ taraftaki prominent düğme) |

  ## Hata Kodları

  ### JSON-RPC Standart Hataları

  | Kod | Adı | Açıklama |
  |-----|-----|---------|
  | -32700 | Parse Error | JSON-RPC isteği ayrıştırılamadı |
  | -32600 | Invalid Request | Geçersiz JSON-RPC istek biçimi |
  | -32601 | Method Not Found | Bilinmeyen metot adı |
  | -32602 | Invalid Params | Geçersiz veya eksik parametreler |
  | -32603 | Internal Error | Beklenmeyen iç hata |

  ### Özel MCP Hataları

  | Kod | Adı | Açıklama |
  |-----|-----|---------|
  | -32001 | Index Not Ready | IDE dumb mode'dadır (indexleme devam ediyor) |
  | -32002 | File Not Found | Belirtilen dosya mevcut değil |
  | -32003 | Symbol Not Found | Belirtilen konumda sembol bulunamadı |
  | -32004 | Refactoring Conflict | Refaktoring tamamlanamıyor (örn. ad çakışması) |

  ## Ayarlar

  Eklentiyi <kbd>Ayarlar</kbd> > <kbd>Araçlar</kbd> > <kbd>Index MCP Sunuc
---

# IDE Index MCP Server

![Build](https://github.com/hechtcarmel/jetbrains-index-mcp-plugin/workflows/Build/badge.svg)
[![Version](https://img.shields.io/jetbrains/plugin/v/29174.svg)](https://plugins.jetbrains.com/plugin/29174-ide-index-mcp-server)
[![Downloads](https://img.shields.io/jetbrains/plugin/d/29174.svg)](https://plugins.jetbrains.com/plugin/29174-ide-index-mcp-server)

A JetBrains IDE plugin that exposes an **MCP (Model Context Protocol) server**, enabling AI coding assistants like Claude, Codex, Cursor, and Windsurf to leverage the IDE's powerful indexing and refactoring capabilities.

**Fully tested**: IntelliJ IDEA, PyCharm, WebStorm, GoLand, RustRover, Android Studio, PhpStorm
**May work** (untested): RubyMine, CLion, DataGrip

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/hechtcarmel)

<!-- Plugin description -->
**IDE Index MCP Server** provides AI coding assistants with access to the IDE's powerful code intelligence features through the Model Context Protocol (MCP).

### Features

**Multi-Language Support**
Advanced tools work across multiple languages based on available plugins:
- **Java & Kotlin** - IntelliJ IDEA, Android Studio
- **Python** - PyCharm (all editions), IntelliJ with Python plugin
- **JavaScript & TypeScript** - WebStorm, IntelliJ Ultimate, PhpStorm
- **Go** - GoLand, IntelliJ IDEA Ultimate with Go plugin
- **PHP** - PhpStorm, IntelliJ Ultimate with PHP plugin
- **Rust** - RustRover, IntelliJ IDEA Ultimate with Rust plugin, CLion
- **Markdown** - heading outlines in file structure for IDEs with the bundled Markdown plugin

**Universal Tools (All Supported JetBrains IDEs)**
- **Find References** - Locate all usages of any symbol across the project
- **Go to Definition** - Navigate to symbol declarations
- **Code Diagnostics** - Access errors, warnings, and quick fixes
- **Index Status** - Check if code intelligence is ready
- **Sync Files** - Force sync VFS/PSI cache after external file changes
- **Build Project** - Trigger IDE build with structured error/warning output (disabled by default)
- **Find Class** - Fast class/interface search by name with camelCase matching
- **Find File** - Fast file search by name using IDE's file index
- **Symbol Search** - Find code symbols by name with IntelliJ Go to Symbol matching (disabled by default)
- **Search Text** - Text search using IDE's pre-built word index
- **Read File** - Read file content by path or qualified name, including library sources (disabled by default)
- **Open File** - Open a file in the editor with optional navigation (disabled by default)
- **Get Active File** - Get currently active editor file(s) with cursor position (disabled by default)

**Extended Tools (Language-Aware)**
These tools activate based on installed language plugins:
- **Type Hierarchy** - Explore class inheritance chains
- **Call Hierarchy** - Trace method/function call relationships
- **Find Implementations** - Discover interface/abstract implementations
- **Find Super Methods** - Navigate method override hierarchies
- **File Structure** - View hierarchical file structure like IDE's Structure view, including PHP Structure View trees and Markdown heading outlines (disabled by default)

**Refactoring Tools**
- **Rename Refactoring** - Safe renaming with automatic related element renaming (getters/setters, overriding methods) - works across ALL languages, fully headless
- **Reformat Code** - Reformat using project code style with import optimization (disabled by default)
- **Safe Delete** - Remove code with usage checking (Java/Kotlin only)
- **Java to Kotlin Conversion** - Convert Java to Kotlin using Intellij's built-in converter (Java only)

### Why Use This Plugin?

Unlike simple text-based code analysis, this plugin gives AI assistants access to:
- **True semantic understanding** through the IDE's AST and index
- **Cross-project reference resolution** that works across files and modules
- **Multi-language support** - automatically detects and uses language-specific handlers
- **Safe refactoring operations** with automatic reference updates and undo support

Perfect for AI-assisted development workflows where accuracy and safety matter.
<!-- Plugin description end -->

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Community Integrations](#community-integrations)
- [Client Configuration](#client-configuration)
- [Available Tools](#available-tools)
- [Multi-Project Support](#multi-project-support)
- [Tool Window](#tool-window)
- [Error Codes](#error-codes)
- [Requirements](#requirements)
- [Contributing](#contributing)

## Installation

### Using the IDE built-in plugin system

<kbd>Settings/Preferences</kbd> > <kbd>Plugins</kbd> > <kbd>Marketplace</kbd> > <kbd>Search for "IDE Index MCP Server"</kbd> > <kbd>Install</kbd>

### Using JetBrains Marketplace

Go to [JetBrains Marketplace](https://plugins.jetbrains.com/plugin/29174-ide-index-mcp-server) and install it by clicking the <kbd>Install to ...</kbd> button.

### Manual Installation

Download the [latest release](https://plugins.jetbrains.com/plugin/29174-ide-index-mcp-server/versions) and install it manually:
<kbd>Settings/Preferences</kbd> > <kbd>Plugins</kbd> > <kbd>⚙️</kbd> > <kbd>Install plugin from disk...</kbd>

## Quick Start

1. **Install the plugin** and restart your JetBrains IDE
2. **Open a project** - the MCP server starts automatically with IDE-specific defaults:
   - IntelliJ IDEA: `intellij-index` on port **29170**
   - PyCharm: `pycharm-index` on port **29172**
   - WebStorm: `webstorm-index` on port **29173**
   - Other IDEs: See [IDE-Specific Defaults](#ide-specific-defaults)
3. **Configure your AI assistant** using the "Install on Coding Agents" button (easiest) or manually
4. **Use the tool window** (bottom panel: "Index MCP Server") to copy configuration or monitor commands
5. **Change port** (optional): Click "Change port, disable tools" in the toolbar or go to <kbd>Settings</kbd> > <kbd>Tools</kbd> > <kbd>Index MCP Server</kbd>

### Using the "Install on Coding Agents" Button

The easiest way to configure your AI assistant:
1. Open the "Index MCP Server" tool window (bottom panel)
2. Click the prominent **"Install on Coding Agents"** button on the right side of the toolbar
3. A popup appears with two sections:
   - **Install Now** - For Claude Code CLI and Codex CLI: Runs the installation command automatically
   - **Copy Configuration** - For other clients: Copies the JSON config to your clipboard
4. For "Copy Configuration" clients, paste the config into the appropriate config file

## Community Integrations

- [opencode-jetbrains-index](https://github.com/ineersa/opencode-jetbrains-index) - a third-party integration for OpenCode that uses this plugin

> **Disclaimer**: This repository is not maintained by me. Please use its own issue tracker for integration-specific issues and support.

## Client Configuration

### Claude Code (CLI)

Use the "Install on Coding Agents" button in the tool window, or run this command (adjust name and port for your IDE):

```bash
# IntelliJ IDEA
claude mcp add --transport http --scope user intellij-index http://127.0.0.1:29170/index-mcp/streamable-http

# PyCharm
claude mcp add --transport http --scope user pycharm-index http://127.0.0.1:29172/index-mcp/streamable-http

# WebStorm
claude mcp add --transport http --scope user webstorm-index http://127.0.0.1:29173/index-mcp/streamable-http
```

Options:
- `--scope user` - Adds globally for all projects
- `--scope project` - Adds to current project only

To remove: `claude mcp remove <server-name>` (e.g., `claude mcp remove intellij-index`)

### Codex CLI

Use the "Install on Coding Agents" button in the tool window, or run this command (adjust name and port for your IDE):

```bash
# IntelliJ IDEA
codex mcp add intellij-index --url http://127.0.0.1:29170/index-mcp/streamable-http

# PyCharm
codex mcp add pycharm-index --url http://127.0.0.1:29172/index-mcp/streamable-http

# WebStorm
codex mcp add webstorm-index --url http://127.0.0.1:29173/index-mcp/streamable-http
```

To remove: `codex mcp remove <server-name>` (e.g., `codex mcp remove intellij-index`)

### Cursor

Add to `.cursor/mcp.json` in your project root or `~/.cursor/mcp.json` globally (adjust name and port for your IDE):

```json
{
  "mcpServers": {
    "intellij-index": {
      "url": "http://127.0.0.1:29170/index-mcp/streamable-http"
    }
  }
}
```

### Windsurf

Add to `~/.codeium/windsurf/mcp_config.json` (adjust name and port for your IDE):

```json
{
  "mcpServers": {
    "intellij-index": {
      "serverUrl": "http://127.0.0.1:29170/index-mcp/streamable-http"
    }
  }
}
```

### VS Code (Generic MCP)

```json
{
  "mcp.servers": {
    "intellij-index": {
      "url": "http://127.0.0.1:29170/index-mcp/streamable-http"
    }
  }
}
```

> **Note**: Replace the server name and port with your IDE's defaults. See [IDE-Specific Defaults](#ide-specific-defaults) below.

### IDE-Specific Defaults

Each JetBrains IDE has a unique default port and server name to allow running multiple IDEs simultaneously without conflicts:

| IDE | Server Name | Default Port |
|-----|-------------|--------------|
| IntelliJ IDEA | `intellij-index` | 29170 |
| Android Studio | `android-studio-index` | 29171 |
| PyCharm | `pycharm-index` | 29172 |
| WebStorm | `webstorm-index` | 29173 |
| GoLand | `goland-index` | 29174 |
| PhpStorm | `phpstorm-index` | 29175 |
| RubyMine | `rubymine-index` | 29176 |
| CLion | `clion-index` | 29177 |
| RustRover | `rustrover-index` | 29178 |
| DataGrip | `datagrip-index` | 29179 |

> **Tip**: Use the "Install on Coding Agents" button in the tool window - it automatically uses the correct server name and port for your IDE.

## Available Tools

The plugin provides **21 MCP tools** organized by availability. Tools marked *(disabled by default)* can be enabled in <kbd>Settings</kbd> > <kbd>Tools</kbd> > <kbd>Index MCP Server</kbd>.

### Universal Tools

These tools work in all supported JetBrains IDEs.

| Tool | Description |
|------|-------------|
| `ide_find_references` | Find all references to a symbol across the entire project |
| `ide_find_definition` | Find the definition/declaration location of a symbol |
| `ide_find_class` | Search for classes/interfaces by name with camelCase/substring/wildcard matching |
| `ide_find_file` | Search for files by name using IDE's file index |
| `ide_find_symbol` | Search for symbols (classes, methods, fields, functions) by name with IntelliJ Go to Symbol matching *(disabled by default)* |
| `ide_search_text` | Text search using IDE's pre-built word index with context filtering |
| `ide_diagnostics` | Analyze file problems with fresh editor diagnostics for open files or public batch diagnostics for closed files, plus optional build/test results; intentions are best-effort |
| `ide_index_status` | Check if the IDE is in dumb mode or smart mode |
| `ide_sync_files` | Force sync IDE's virtual file system and PSI cache with external file changes |
| `ide_build_project` | Build project using IDE's build system (JPS, Gradle, Maven) with structured errors *(disabled by default)* |
| `ide_read_file` | Read file content by path or qualified name, including library/jar sources *(disabled by default)* |
| `ide_get_active_file` | Get the currently active file(s) in the editor with cursor position *(disabled by default)* |
| `ide_open_file` | Open a file in the editor with optional line/column navigation *(disabled by default)* |
| `ide_refactor_rename` | Rename a symbol and update all references across the project (all languages) |
| `ide_move_file` | Move a file to a new directory, applying language-aware reference/package updates when the IDE provides a semantic move backend |
| `ide_reformat_code` | Reformat code using project code style with import optimization *(disabled by default)* |

### Extended Tools (Language-Aware)

These tools activate based on available language plugins:

| Tool | Description | Languages |
|------|-------------|-----------|
| `ide_type_hierarchy` | Get the complete type hierarchy (supertypes and subtypes) | Java, Kotlin, Python, JS/TS, Go, PHP, Rust |
| `ide_call_hierarchy` | Analyze method call relationships (callers or callees) | Java, Kotlin, Python, JS/TS, Go, PHP, Rust |
| `ide_find_implementations` | Find all implementations of an interface or abstract method | Java, Kotlin, Python, JS/TS, PHP, Rust |
| `ide_find_super_methods` | Find the full inheritance hierarchy of methods that a method overrides/implements | Java, Kotlin, Python, JS/TS, PHP |
| `ide_file_structure` | Get hierarchical file structure (similar to IDE's Structure view) *(disabled by default)* | Java, Kotlin, Python, JS/TS, PHP, Markdown |

PHP file structure support requires the PHP plugin and is available in PhpStorm or IntelliJ IDEA Ultimate with the PHP plugin enabled.

### Java-Specific Refactoring Tools

| Tool | Description |
|------|-------------|
| `ide_convert_java_to_kotlin` | Convert Java files to Kotlin using IntelliJ's built-in converter *(disabled by default, requires Java + Kotlin plugins)* |
| `ide_refactor_safe_delete` | Safely delete an element, checking for usages first (Java/Kotlin only) |

> **Note**: Refactoring tools modify source files. All changes support undo via <kbd>Ctrl/Cmd+Z</kbd>.

### Tool Availability by IDE

**Fully Tested:**

| IDE | Universal | Navigation | Refactoring |
|-----|-----------|------------|-------------|
| IntelliJ IDEA | ✓ 14 tools | ✓ 6 tools | ✓ rename + reformat + safe delete + Java→Kotlin |
| Android Studio | ✓ 14 tools | ✓ 6 tools | ✓ rename + reformat + safe delete + Java→Kotlin |
| PyCharm | ✓ 14 tools | ✓ 6 tools | ✓ rename + reformat |
| WebStorm | ✓ 14 tools | ✓ 6 tools | ✓ rename + reformat |
| GoLand | ✓ 14 tools | ✓ 4 tools | ✓ rename + reformat |
| RustRover | ✓ 14 tools | ✓ 5 tools | ✓ rename + reformat |
| PhpStorm | ✓ 14 tools | ✓ 6 tools | ✓ rename + reformat |

**May Work (Untested):**

| IDE | Universal | Navigation | Refactoring |
|-----|-----------|------------|-------------|
| RubyMine | ✓ 14 tools | ✓ 2 Markdown tools | ✓ rename + reformat |
| CLion | ✓ 14 tools | ✓ 2 Markdown tools | ✓ rename + reformat |
| DataGrip | ✓ 14 tools | ✓ 2 Markdown tools | ✓ rename + reformat |

> **Note**: Navigation tools activate when language plugins are present. Markdown adds heading search and file-structure support when the bundled Markdown plugin is enabled. Go and Rust do not expose `ide_find_super_methods` due to language semantics, and Go does not expose `ide_find_implementations`. The rename and reformat tools work across all languages. `ide_convert_java_to_kotlin` is available only in IntelliJ IDEA and Android Studio, requires both Java and Kotlin plugins, and is disabled by default.

For detailed tool documentation with parameters and examples, see [USAGE.md](USAGE.md).

## Multi-Project Support

When multiple projects are open in a single IDE window, you must specify which project to use with the `project_path` parameter:

```json
{
  "name": "ide_find_references",
  "arguments": {
    "project_path": "/Users/dev/myproject",
    "file": "src/Main.kt",
    "line": 10,
    "column": 5
  }
}
```

If `project_path` is omitted:
- **Single project open**: That project is used automatically
- **Multiple projects open**: An error is returned with the list of available projects

### Workspace Projects

The plugin supports **workspace projects** where a single IDE window contains multiple sub-projects as modules with separate content roots. The `project_path` parameter accepts:

- The **workspace root** path
- A **sub-project path** (module content root)
- A **subdirectory** of any open project

When an error occurs, the response returns `available_projects`. By default this includes workspace sub-projects so AI agents can discover valid module content roots. If you want smaller error payloads, switch **Project list in error responses** to **Compact** in plugin settings to return only top-level project roots.

## Tool Window

The plugin adds an "Index MCP Server" tool window (bottom panel) that shows:

- **Server Status**: Running indicator with server URL and port
- **Project Name**: Currently active project
- **Command History**: Log of all MCP tool calls with:
  - Timestamp
  - Tool name
  - Status (Success/Error/Pending)
  - Parameters and results (expandable)
  - Execution duration

### Tool Window Actions

| Action | Description |
|--------|-------------|
| Refresh | Refresh server status and command history |
| Copy URL | Copy the MCP server URL to clipboard |
| Clear History | Clear the command history |
| Export History | Export history to JSON or CSV file |
| **Install on Coding Agents** | Install MCP server on AI assistants (prominent button on right) |

## Error Codes

### JSON-RPC Standard Errors

| Code | Name | Description |
|------|------|-------------|
| -32700 | Parse Error | Failed to parse JSON-RPC request |
| -32600 | Invalid Request | Invalid JSON-RPC request format |
| -32601 | Method Not Found | Unknown method name |
| -32602 | Invalid Params | Invalid or missing parameters |
| -32603 | Internal Error | Unexpected internal error |

### Custom MCP Errors

| Code | Name | Description |
|------|------|-------------|
| -32001 | Index Not Ready | IDE is in dumb mode (indexing in progress) |
| -32002 | File Not Found | Specified file does not exist |
| -32003 | Symbol Not Found | No symbol found at the specified position |
| -32004 | Refactoring Conflict | Refactoring cannot be completed (e.g., name conflict) |

## Settings

Configure the plugin at <kbd>Settings</kbd> > <kbd>Tools</kbd> > <kbd>Index MCP Server</kbd>:

| Setting | Default | Description |
|---------|---------|-------------|
| Server Port | IDE-specific | MCP server port (range: 1024-65535, auto-restart on change). See [IDE-Specific Defaults](#ide-specific-defaults) |
| Server Host | `127.0.0.1` | Listening host. Change to `0.0.0.0` for remote/WSL access |
| Max History Size | 100 | Maximum number of commands to keep in history |
| Project List in Error Responses | Expanded | Controls `available_projects` detail for invalid/missing `project_path` errors. `Expanded` includes workspace sub-projects; `Compact` returns only top-level project roots |
| Sync External Changes | false | Sync external file changes before operations (**WARNING: significant performance impact**) |
| Disabled Tools | 7 tools | Per-tool enable/disable toggles. Some tools are disabled by default to keep the tool list focused |

## Requirements

- **JetBrains IDE** 2025.1 or later (any IDE based on IntelliJ Platform)
- **JVM** 21 or later
- **MCP Protocol** 2025-03-26 (primary Streamable HTTP), with 2024-11-05 legacy SSE compatibility

### Supported IDEs

**Fully Tested:**
- IntelliJ IDEA (Community/Ultimate)
- Android Studio
- PyCharm (Community/Professional)
- WebStorm
- GoLand
- RustRover
- PhpStorm

**May Work (Untested):**
- RubyMine
- CLion
- DataGrip

> The plugin uses standard IntelliJ Platform APIs and should work on any IntelliJ-based IDE, but has only been tested on the IDEs listed above.

## Architecture

The plugin runs a **custom embedded Ktor CIO HTTP server** with **dual MCP transports**:

### Streamable HTTP Transport (Primary, MCP 2025-03-26)

```
AI Assistant ──────► POST /index-mcp/streamable-http (initialize or request)
                     ◄── JSON-RPC response or HTTP 202 Accepted
             ──────► POST /index-mcp/streamable-http (follow-up requests/notifications)
                     ◄── JSON-RPC response or HTTP 202 Accepted
```

The plugin uses stateless Streamable HTTP for the primary MCP transport. It does not
issue `Mcp-Session-Id` headers, does not require session resumption, and does not
implement or advertise authentication capabilities.

### Legacy SSE Transport (MCP Inspector, older clients)

```
AI Assistant ──────► GET /index-mcp/sse              (establish SSE stream)
                     ◄── event: endpoint             (receive POST URL with sessionId)
             ──────► POST /index-mcp?sessionId=x     (JSON-RPC requests)
                     ◄── HTTP 202 Accepted
                     ◄── event: message              (JSON-RPC response via SSE)
```

This dual approach:
- **Primary MCP transport** - Streamable HTTP per MCP `2025-03-26`
- **MCP Inspector compatible** - Legacy SSE transport per MCP `2024-11-05`
- **Configurable port** - IDE-specific default port, changeable in settings
- Works with any MCP-compatible client
- Single server instance across all open projects

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `./gradlew test`
5. Submit a pull request

### Development Setup

```bash
# Build the plugin
./gradlew build

# Run IDE with plugin installed
./gradlew runIde

# Run tests
./gradlew test

# Run plugin verification
./gradlew runPluginVerifier
```

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

---

Plugin based on the [IntelliJ Platform Plugin Template](https://github.com/JetBrains/intellij-platform-plugin-template).
