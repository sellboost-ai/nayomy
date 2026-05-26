---
name: "r-huijts/xcode-mcp-server"
description: "Xcode integration for project management, file operations, and build automation"
description_tr: "Xcode entegrasyonu ile proje yönetimi, dosya işlemleri ve build otomasyonu"
category: "Developer Tools"
repo: "r-huijts/xcode-mcp-server"
stars: 377
url: "https://github.com/r-huijts/xcode-mcp-server"
body_length: 15515
license: "MIT"
language: "TypeScript"
body_tr: |-
  [![MseeP.ai Security Assessment Badge](https://mseep.net/pr/r-huijts-xcode-mcp-server-badge.png)](https://mseep.ai/app/r-huijts-xcode-mcp-server)

  # Xcode MCP Server

  AI asistanları için kapsamlı Xcode entegrasyonu sağlayan bir MCP (Model Context Protocol) sunucusu. Bu sunucu, AI ajanlarının Xcode projeleriyle etkileşim kurmasını, iOS simülatörleri yönetmesini ve geliştirilmiş hata işleme ve çoklu proje türleri desteği ile çeşitli Xcode ile ilgili görevleri gerçekleştirmesini sağlar.

  ## Özellikler

  ### Proje Yönetimi
  - Aktif projeleri ayarlama ve ayrıntılı proje bilgisi alma
  - Şablonlardan yeni Xcode projeleri oluşturma (iOS, macOS, watchOS, tvOS)
  - Xcode projelerine hedef ve grup belirtimi ile dosya ekleme
  - Workspace belgelerini ayrıştırarak ilişkili projeleri bulma
  - Projelerde ve workspace'lerde mevcut scheme'leri listeleme

  ### Dosya İşlemleri
  - Farklı encodinglar ile dosya okuma/yazma
  - Base64 encoding/decoding ile binary dosyaları işleme
  - Desenler ve regex kullanarak dosyalar içinde metin arama
  - Dosya varlığını kontrol etme ve dosya meta verilerini alma
  - Dizin yapılarını otomatik olarak oluşturma

  ### Build & Test
  - Özelleştirilebilir seçeneklerle projeleri build etme
  - Ayrıntılı hata raporlaması ile testleri çalıştırma
  - Potansiyel sorunlar için kodu analiz etme
  - Build dizinlerini temizleme
  - Dağıtım için projeleri arşivleme

  ### CocoaPods Entegrasyonu
  - Projelerde CocoaPods başlatma
  - Pod'ları yükleme ve güncelleme
  - Pod bağımlılıklarını ekleme ve kaldırma
  - Keyfi pod komutlarını yürütme

  ### Swift Package Manager
  - Yeni Swift paketleri başlatma
  - Çeşitli sürüm gereksinimlerine sahip paket bağımlılıklarını ekleme ve kaldırma
  - Paketleri güncelleme ve bağımlılıkları çözme
  - DocC kullanarak Swift paketleri için dokümantasyon oluşturma
  - Swift paketleri için testleri çalıştırma ve build etme

  ### iOS Simülatör Araçları
  - Ayrıntılı bilgi ile mevcut simülatörleri listeleme
  - Simülatörleri başlatma ve kapatma
  - Simülatörlere uygulamalar yükleme ve başlatma
  - Ekran görüntüleri alma ve video kaydetme
  - Simülatör ayarlarını ve durumunu yönetme

  ### Xcode Yardımcı Araçları
  - xcrun aracılığıyla Xcode komutlarını yürütme
  - Asset kataloglarını derleme
  - Kaynak görüntülerinden uygulama ikon setleri oluşturma
  - Uygulama performansını izleme
  - App Store gönderimi için arşivleri dışa aktarma ve doğrulama
  - Farklı Xcode sürümleri arasında geçiş yapma

  ## Kurulum

  ### Ön Koşullar

  - Xcode 14.0 veya daha yüksek sürümü yüklü macOS
  - Node.js 16 veya daha yüksek
  - npm veya yarn
  - Swift 5.5+ (Swift Package Manager özellikleri için)
  - CocoaPods (isteğe bağlı, CocoaPods entegrasyonu için)

  ### Kurulum Süreci

  #### Seçenek 1: Otomatik Kurulum (Önerilen)

  Kurulum ve yapılandırma işlemini otomatik hale getiren dahil edilen kurulum betiğini kullanın:

  ```bash
  # Betiği çalıştırılabilir hale getirin
  chmod +x setup.sh

  # Kurulum betiğini çalıştırın
  ./setup.sh
  ```

  **Kurulum Betiğinin Yaptıkları:**

  1. **Ortam Doğrulaması**:
     - macOS üzerinde çalıştığınızı kontrol eder
     - Xcode'un yüklü ve erişilebilir olduğunu doğrular
     - Node.js (v16+) ve npm'in mevcut olduğunu doğrular
     - Ruby yüklemesini kontrol eder
     - CocoaPods yüklemesini doğrular (eksikse yüklemeyi önerir)

  2. **Bağımlılık Kurulumu**:
     - Tüm gerekli Node.js paketlerini yüklemek için `npm install` çalıştırır
     - TypeScript kodunu derlemek için `npm run build` yürütür

  3. **Yapılandırma Kurulumu**:
     - Yoksa bir `.env` dosyası oluşturur
     - Proje temel dizininiz için istekte bulunur
     - Debug loggingı etkinleştirmek isteyip istemediğinizi sorar
     - Yapılandırma tercihlerinizi kaydeder

  4. **Claude Desktop Entegrasyonu** (İsteğe Bağlı):
     - Sunucuyu Claude Desktop için yapılandırmayı önerir
     - Claude Desktop yapılandırma dosyasını oluşturur veya günceller
     - Sunucuyu başlatmak için uygun komut ve argümanları ayarlar

  **Kurulum Betiğini Ne Zaman Kullanmalı:**

  - İlk kurulumda tüm ön koşulların karşılandığından emin olmak için
  - İnteraktif istemlerle kılavuzlu yapılandırma istediğinizde
  - Claude Desktop entegrasyonunu hızlı bir şekilde ayarlamak istiyorsanız
  - Ortamınızda tüm gerekli bileşenlerin olduğunu doğrulamak için

  Betik sizi açık istemler ve yardımcı geri bildirimlerle yapılandırma sürecinde rehberlik edecektir.

  #### Seçenek 2: Manuel Kurulum

  **Manuel Kurulumu Ne Zaman Kullanmalı:**

  - Her kurulum adımı üzerinde açık kontrol istiyorsanız
  - Özel bir ortama veya standart olmayan bir yapılandırmaya sahipseniz
  - CI/CD boru hattında veya otomatik bir ortamda kurulum yapıyorsanız
  - Kurulumun belirli yönlerini özelleştirmek istiyorsanız
  - Node.js projeleriyle ilgili deneyimli bir geliştirici iseniz

  Manuel kurulum için bu adımları izleyin:

  1. Depoyu klonlayın:
     ```bash
     git clone https://github.com/r-huijts/xcode-mcp-server.git
     cd xcode-mcp-server
     ```

  2. Ön koşulları doğrulayın (bunlar yüklü olması gerekir):
     - Xcode ve Xcode Command Line Tools
     - Node.js v16 veya daha yüksek
     - npm
     - Ruby (CocoaPods desteği için)
     - CocoaPods (isteğe bağlı, pod ile ilgili özellikler için)

  3. Bağımlılıkları yükleyin:
     ```bash
     npm install
     ```

  4. Projeyi build edin:
     ```bash
     npm run build
     ```

  5. Bir yapılandırma dosyası oluşturun:
     ```bash
     # Seçenek A: Örnek yapılandırmayla başlayın
     cp .env.example .env

     # Seçenek B: Minimal bir yapılandırma oluşturun
     echo "PROJECTS_BASE_DIR=/path/to/your/projects" > .env
     echo "DEBUG=false" >> .env
     ```

     `.env` dosyasını tercih ettiğiniz yapılandırmayı ayarlamak için düzenleyin.

  6. Claude Desktop entegrasyonu için (isteğe bağlı):
     - `~/Library/Application Support/Claude/claude_desktop_config.json` dosyasını düzenleyin veya oluşturun
     - Aşağıdaki yapılandırmayı ekleyin (yolları gerektikçe ayarlayın):
     ```json
     {
       "mcpServers": {
         "xcode": {
           "command": "node",
           "args": ["/path/to/xcode-mcp-server/dist/index.js"]
         }
       }
     }
     ```

  ### Kurulum Sorunlarını Giderme

  **Yaygın Kurulum Sorunları:**

  1. **Build Hataları**:
     - Doğru Node.js sürümüne sahip olduğunuzdan emin olun (v16+)
     - `node_modules` dosyasını silmeyi ve `npm install` komutunu tekrar çalıştırmayı deneyin
     - `npx tsc --noEmit` ile TypeScript hatalarını kontrol edin
     - Koddaki tüm import'ların düzgün şekilde çözüldüğünden emin olun

  2. **Eksik Bağımlılıklar**:
     - Eksik modüller hakkında hataları görürseniz `npm install` komutunu tekrar çalıştırın
     - Native bağımlılıklar için Xcode Command Line Tools'a ihtiyacınız olabilir: `xcode-select --install`

  3. **İzin Sorunları**:
     - Kurulum dizinine yazma izniniz olduğundan emin olun
     - CocoaPods kurulumu için `sudo gem install cocoapods` kullanmanız gerekebilir

  4. **Yapılandırma Sorunları**:
     - `.env` dosyasının doğru formata ve geçerli yollara sahip olduğunu doğrulayın
     - `PROJECTS_BASE_DIR` öğesinin mevcut bir dizine işaret ettiğinden emin olun
     - Yolun kaçış gerektiren özel karakterler içermediğini kontrol edin

  5. **Claude Desktop Entegrasyonu**:
     - Claude yapılandırmasındaki yolun `index.js` dosyasının doğru konumunu gösterdiğinden emin olun
     - Yapılandırma değişikliklerinden sonra Claude Desktop'ı yeniden başlatın
     - Sunucuyu Claude ile kullanmaya çalışmadan önce çalıştığını kontrol edin

  ## Kullanım

  ### Sunucuyu Başlatma

  ```bash
  npm start
  ```

  Otomatik yeniden başlama ile geliştirme modu için:
  ```bash
  npm run dev
  ```

  ### Yapılandırma Seçenekleri

  Sunucuyu iki şekilde yapılandırebilirsiniz:

  1. `.env` dosyasındaki ortam değişkenleri:
     ```
     PROJECTS_BASE_DIR=/path/to/your/projects
     DEBUG=true
     ALLOWED_PATHS=/path/to/additional/allowed/directory
     PORT=8080
     ```

  2. Komut satırı argümanları:
     ```bash
     npm start -- --projects-dir=/path/to/your/projects --port=8080
     ```

  ### Temel Yapılandırma Parametreleri

  - `PROJECTS_BASE_DIR` / `--projects-dir`: Proje temel dizini (gerekli)
  - `ALLOWED_PATHS` / `--allowed-paths`: Erişim izni verilecek ek dizinler (virgülle ayrılmış)
  - `PORT` / `--port`: Sunucunun çalışacağı port (varsayılan: 3000)
  - `DEBUG` / `--debug`: Debug loggingı etkinleştirme (varsayılan: false)
  - `LOG_LEVEL` / `--log-level`: Logging seviyesini ayarlama (varsayılan: info)

  ### AI Asistanlarına Bağlanma

  Sunucu Model Context Protocol'ü (MCP) uygular ve bu protokolü destekleyen çeşitli AI asistanlarıyla uyumludur. Bağlanmak için:

  1. Xcode MCP sunucusunu başlatın
  2. AI asistanınızı sunucu URL'sini kullanacak şekilde yapılandırın (genellikle `http://localhost:3000`)
  3. AI asistanı artık sunucu tarafından sağlanan tüm Xcode araçlarına erişebilecektir

  ### Araç Belgelendirmesi

  Tüm kullanılabilir araçlar ve bunların kullanımı hakkında kapsamlı bir genel bakış için [Araçlar Özeti](docs/tools-overview.md) bölümüne bakın.

  Ayrıntılı kullanım örnekleri ve en iyi uygulamalar için [Kullanıcı Rehberi](docs/user-guide.md) bölümüne bakın.

  ### Yaygın İş Akışları

  #### Yeni Bir Proje Kurma

  ```javascript
  // Yeni bir iOS uygulama projesi oluşturma
  await tools.create_xcode_project({
    name: "MyAwesomeApp",
    template: "ios-app",
    outputDirectory: "~/Projects",
    organizationName: "My Organization",
    organizationIdentifier: "com.myorganization",
    language: "swift",
    includeTests: true,
    setAsActive: true
  });

  // Swift Package bağımlılığı ekleme
  await tools.add_swift_package({
    url: "https://github.com/Alamofire/Alamofire.git",
    version: "from: 5.0.0"
  });
  ```

  #### Dosyalarla Çalışma

  ```javascript
  // Dosyayı belirli encoding ile okuma
  const fileContent = await tools.read_file({
    filePath: "MyAwesomeApp/AppDelegate.swift",
    encoding: "utf-8"
  });

  // Dosyaya yazma
  await tools.write_file({
    path: "MyAwesomeApp/NewFile.swift",
    content: "import Foundation\n\nclass NewClass {}\n",
    createIfMissing: true
  });

  // Dosyalar içinde metin arama
  const searchResults = await tools.search_in_files({
    directory: "MyAwesomeApp",
    pattern: "*.swift",
    searchText: "class",
    isRegex: false
  });
  ```

  #### Build ve Test

  ```javascript
  // Projeyi build etme
  await tools.build_project({
    scheme: "MyAwesomeApp",
    configuration: "Debug"
  });

  // Testleri çalıştırma
  await tools.test_project({
    scheme: "MyAwesomeApp",
    testPlan: "MyAwesomeAppTests"
  });
  ```

  ## Proje Yapısı

  ```
  xcode-mcp-server/
  ├── src/
  │   ├── index.ts                 # Giriş noktası
  │   ├── server.ts                # MCP sunucu uygulaması
  │   ├── types/                   # Tip tanımları
  │   │   └── index.ts             # Temel tip tanımları
  │   ├── utils/                   # Yardımcı fonksiyonlar
  │   │   ├── errors.js            # Hata işleme sınıfları
  │   │   ├── pathManager.ts       # Yol doğrulama ve yönetimi
  │   │   ├── project.js           # Proje yardımcı araçları
  │   │   └── simulator.js         # Simülatör yardımcı araçları
  │   └── tools/                   # Araç uygulamaları
  │       ├── project/             # Proje yönetimi araçları
  │       │   └── index.ts         # Proje oluşturma, algılama, dosya ekleme
  │       ├── file/                # Dosya işlemi araçları
  │       │   └── index.ts         # Dosya okuma, yazma, arama
  │       ├── build/               # Build ve test araçları
  │       │   └── index.ts         # Build, test, analiz
  │       ├── cocoapods/           # CocoaPods entegrasyonu
  │       │   └── index.ts         # Pod yükleme ve yönetimi
  │       ├── spm/                 # Swift Package Manager araçları
  │       │   └── index.ts         # Paket yönetimi ve belgelendirmesi
  │       ├── simulator/           # iOS simülatör araçları
  │       │   └── index.ts         # Simülatör kontrolü ve etkileşimi
  │       └── xcode/               # Xcode yardımcı araçları
  │           └── index.ts         # Xcode sürüm yönetimi, asset araçları
  ├── docs/                        # Belgelendirme
  │   ├── tools-overview.md        # Kapsamlı araç belgelendirmesi
  │   └── user-guide.md            # Kullanım örnekleri ve en iyi uygulamalar
  ├── tests/                       # Testler
  └── dist/                        # Derlenmiş kod (oluşturulmuş)
  ```

  ## Nasıl Çalışır

  Xcode MCP sunucusu, AI modellerinin Xcode projeleriyle etkileşim kurması için standartlaştırılmış bir arayüz sağlamak üzere Model Context Protocol'ü kullanır. Sunucu mimarisi birkaç önemli bileşenle tasarlanmıştır:

  ### Temel Bileşenler

  1. **Sunucu Uygulaması**: Araç kaydını ve istek işlemeyi işleyen ana MCP sunucusu.

  2. **Yol Yönetimi**: Tüm yolları izin verilen dizinlere karşı doğrulayarak güvenli dosya erişimini sağlar.

  3. **Proje Yönetimi**: Farklı Xcode proje türlerini algılar, yükler ve yönetir:
     - Standart Xcode projeleri (.xcodeproj)
     - Xcode workspace'leri (.xcworkspace)
     - Swift Package Manager projeleri (Package.swift)

  4. **Dizin Durumu**: Bağıl yol çözümlemesi için aktif dizin bağlamını tutar.

  5. **Araç Kayıt Sistemi**: Araçları farklı Xcode işlemleri için mantıksal kategoriler halinde düzenler.

  ### İstek Akışı

  1. Bir AI asistanı MCP sunucusuna araç yürütme isteği gönderir.

  2. Sunucu istek parametrelerini ve izinleri doğrular.

  3. Doğrulanan parametrelerle uygun araç işleyicisi çağrılır.

  4. Araç istenen işlemi yürütür, sıklıkla native Xcode komutlarını kullanır.

  5. Sonuçlar biçimlendirilir ve AI asistanına döndürülür.

  6. Kapsamlı hata işleme sorun giderme için anlamlı geri bildirim sağlar.

  ### Güvenlik Özellikleri

  - **Yol Doğrulama**: Tüm dosya işlemleri izin verilen dizinlerle sınırlıdır.
  - **Hata İşleme**: Ayrıntılı hata mesajları sorunları teşhis etmeye yardımcı olur.
  - **Parametre Doğrulama**: Giriş parametreleri Zod şemaları kullanılarak doğrulanır.
  - **İşlem Yönetimi**: Harici işlemler uygun hata işleme ile güvenli şekilde yürütülür.

  ### Proje Türü Desteği

  Sunucu farklı proje türlerini akıllıca işler:

  - **Standart Projeler**: Doğrudan .xcodeproj manipülasyonu
  - **Workspace'ler**: Workspace içindeki çoklu projeleri yönetir
  - **SPM Projeleri**: Swift Package Manager'a özgü işlemleri işler

  Bu mimari, AI asistanlarının güvenliği ve ayrıntılı geri bildirim sağlarken herhangi bir Xcode proje türü ile sorunsuz çalışmasını sağlar.

  ## Katkı Yapma

  Katkılar memnuniyetle karşılanır! Lütfen bir Pull Request göndermekten çekinmeyin.

  1. Depoyu fork'layın
  2. Özellik dalınızı oluşturun (`git checkout -b feature/amazing-feature`)
  3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
  4. Dala push edin (`git push origin feature/amazing-feature`)
  5. Bir Pull Request açın

  ### Geliştirme Yönergeleri

  - Mevcut kod stilini ve organizasyonunu izleyin
  - Belirli hata mesajları ile kapsamlı hata işleme ekleyin
  - Yeni işlevsellik için testler yazın
  - Belgelendirmeyi değişikliklerinizi yansıtacak şekilde güncelleyin
  - Farklı proje türleriyle (standart, workspace, SPM) uyumluluğu sağlayın

  ### Yeni Araçlar Ekleme

  Sunucuya yeni bir araç eklemek için:

  1. `src/tools/` dizininde uygun kategoriyi belirleyin
  2. Zod şema doğrulama ile mevcut desenleri kullanarak aracı uygulayın
  3. Aracı kategorinin `index.ts` dosyasına kaydedin
  4. Belirli hata mesajları ile hata işleme ekleyin
  5. Aracı uygun belgelendirme dosyalarında belgelendir

  ## Sorun Giderme

  ### Yaygın Sorunlar

  - **Yol Erişim Hataları**: Erişmeye çalıştığınız yolların izin verilen dizinler içinde olduğundan emin olun
  - **Build Başarısızlıkları**: Xcode command line tools'un yüklü ve güncel olduğunu kontrol edin
  - **Araç Bulunamadı**: Araç adının doğru olduğunu ve düzgün şekilde kaydettiğini doğrulayın
  - **Parametre Doğrulama Hataları**: Araç belgelendirmesinde parametre türlerini ve gereksinimlerini kontrol edin

  ### Hata Ayıklama

  1. Debug loggingı etkin olarak sunucuyu başlatın: `npm start -- --debug`
  2. Ayrıntılı hata mesajları için konsol çıktısını kontrol edin
  3. İstek ve yanıt ayrıntıları için sunucu loglarını inceleyin
  4. Araç'a özgü sorunlar için eşdeğer Xcode komutunu doğrudan terminalden çalıştırmayı deneyin

  ## Lisans

  Bu proje MIT Lisansı altında lisanslanmıştır - Ayrıntılar için LICENSE dosyasına bakın.

  ## Teşekkürler

  - Model Context Protocol ekibine MCP SDK için teşekkür ederiz
  - TypeScript ve Node.js ile yapılmıştır
  - Xcode command line tools ve Swift Package Manager kullanır
  - Sunucunun işlevselliğini ve sağlamlığını iyileştirmeye yardımcı olan tüm katılımcılara özel teşekkürler
---

[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/r-huijts-xcode-mcp-server-badge.png)](https://mseep.ai/app/r-huijts-xcode-mcp-server)

# Xcode MCP Server

An MCP (Model Context Protocol) server providing comprehensive Xcode integration for AI assistants. This server enables AI agents to interact with Xcode projects, manage iOS simulators, and perform various Xcode-related tasks with enhanced error handling and support for multiple project types.

## Features

### Project Management
- Set active projects and get detailed project information
- Create new Xcode projects from templates (iOS, macOS, watchOS, tvOS)
- Add files to Xcode projects with target and group specification
- Parse workspace documents to find associated projects
- List available schemes in projects and workspaces

### File Operations
- Read/write files with support for different encodings
- Handle binary files with base64 encoding/decoding
- Search for text content within files using patterns and regex
- Check file existence and get file metadata
- Create directory structures automatically

### Build & Testing
- Build projects with customizable options
- Run tests with detailed failure reporting
- Analyze code for potential issues
- Clean build directories
- Archive projects for distribution

### CocoaPods Integration
- Initialize CocoaPods in projects
- Install and update pods
- Add and remove pod dependencies
- Execute arbitrary pod commands

### Swift Package Manager
- Initialize new Swift packages
- Add and remove package dependencies with various version requirements
- Update packages and resolve dependencies
- Generate documentation for Swift packages using DocC
- Run tests and build Swift packages

### iOS Simulator Tools
- List available simulators with detailed information
- Boot and shut down simulators
- Install and launch apps on simulators
- Take screenshots and record videos
- Manage simulator settings and state

### Xcode Utilities
- Execute Xcode commands via xcrun
- Compile asset catalogs
- Generate app icon sets from source images
- Trace app performance
- Export and validate archives for App Store submission
- Switch between different Xcode versions

## Installation

### Prerequisites

- macOS with Xcode 14.0 or higher installed
- Node.js 16 or higher
- npm or yarn
- Swift 5.5+ for Swift Package Manager features
- CocoaPods (optional, for CocoaPods integration)

### Setup

#### Option 1: Automated Setup (Recommended)

Use the included setup script which automates the installation and configuration process:

```bash
# Make the script executable
chmod +x setup.sh

# Run the setup script
./setup.sh
```

**What the Setup Script Does:**

1. **Environment Verification**:
   - Checks that you're running on macOS
   - Verifies Xcode is installed and accessible
   - Confirms Node.js (v16+) and npm are available
   - Checks for Ruby installation
   - Verifies CocoaPods installation (offers to install if missing)

2. **Dependency Installation**:
   - Runs `npm install` to install all required Node.js packages
   - Executes `npm run build` to compile the TypeScript code

3. **Configuration Setup**:
   - Creates a `.env` file if one doesn't exist
   - Prompts for your projects base directory
   - Asks if you want to enable debug logging
   - Saves your configuration preferences

4. **Claude Desktop Integration** (Optional):
   - Offers to configure the server for Claude Desktop
   - Creates or updates the Claude Desktop configuration file
   - Sets up the proper command and arguments to launch the server

**When to Use the Setup Script:**

- First-time installation to ensure all prerequisites are met
- When you want guided configuration with interactive prompts
- If you want to quickly set up Claude Desktop integration
- To verify your environment has all necessary components

The script will guide you through the configuration process with clear prompts and helpful feedback.

#### Option 2: Manual Setup

**When to Use Manual Setup:**

- You prefer explicit control over each installation step
- You have a custom environment or non-standard configuration
- You're setting up in a CI/CD pipeline or automated environment
- You want to customize specific aspects of the installation process
- You're an experienced developer familiar with Node.js projects

Follow these steps for manual installation:

1. Clone the repository:
   ```bash
   git clone https://github.com/r-huijts/xcode-mcp-server.git
   cd xcode-mcp-server
   ```

2. Verify prerequisites (these must be installed):
   - Xcode and Xcode Command Line Tools
   - Node.js v16 or higher
   - npm
   - Ruby (for CocoaPods support)
   - CocoaPods (optional, for pod-related features)

3. Install dependencies:
   ```bash
   npm install
   ```

4. Build the project:
   ```bash
   npm run build
   ```

5. Create a configuration file:
   ```bash
   # Option A: Start with the example configuration
   cp .env.example .env

   # Option B: Create a minimal configuration
   echo "PROJECTS_BASE_DIR=/path/to/your/projects" > .env
   echo "DEBUG=false" >> .env
   ```

   Edit the `.env` file to set your preferred configuration.

6. For Claude Desktop integration (optional):
   - Edit or create `~/Library/Application Support/Claude/claude_desktop_config.json`
   - Add the following configuration (adjust paths as needed):
   ```json
   {
     "mcpServers": {
       "xcode": {
         "command": "node",
         "args": ["/path/to/xcode-mcp-server/dist/index.js"]
       }
     }
   }
   ```

### Setup Troubleshooting

**Common Setup Issues:**

1. **Build Errors**:
   - Ensure you have the correct Node.js version (v16+)
   - Try deleting `node_modules` and running `npm install` again
   - Check for TypeScript errors with `npx tsc --noEmit`
   - Make sure all imports in the code are properly resolved

2. **Missing Dependencies**:
   - If you see errors about missing modules, run `npm install` again
   - For native dependencies, you may need Xcode Command Line Tools: `xcode-select --install`

3. **Permission Issues**:
   - Ensure you have write permissions to the installation directory
   - For CocoaPods installation, you may need to use `sudo gem install cocoapods`

4. **Configuration Problems**:
   - Verify your `.env` file has the correct format and valid paths
   - Make sure `PROJECTS_BASE_DIR` points to an existing directory
   - Check that the path doesn't contain special characters that need escaping

5. **Claude Desktop Integration**:
   - Ensure the path in the Claude configuration points to the correct location of `index.js`
   - Restart Claude Desktop after making configuration changes
   - Check that the server is running before attempting to use it with Claude

## Usage

### Starting the Server

```bash
npm start
```

For development mode with automatic restarts:
```bash
npm run dev
```

### Configuration Options

You can configure the server in two ways:

1. Environment variables in `.env` file:
   ```
   PROJECTS_BASE_DIR=/path/to/your/projects
   DEBUG=true
   ALLOWED_PATHS=/path/to/additional/allowed/directory
   PORT=8080
   ```

2. Command line arguments:
   ```bash
   npm start -- --projects-dir=/path/to/your/projects --port=8080
   ```

### Key Configuration Parameters

- `PROJECTS_BASE_DIR` / `--projects-dir`: Base directory for projects (required)
- `ALLOWED_PATHS` / `--allowed-paths`: Additional directories to allow access to (comma-separated)
- `PORT` / `--port`: Port to run the server on (default: 3000)
- `DEBUG` / `--debug`: Enable debug logging (default: false)
- `LOG_LEVEL` / `--log-level`: Set logging level (default: info)

### Connecting to AI Assistants

The server implements the Model Context Protocol (MCP), making it compatible with various AI assistants that support this protocol. To connect:

1. Start the Xcode MCP server
2. Configure your AI assistant to use the server URL (typically `http://localhost:3000`)
3. The AI assistant will now have access to all the Xcode tools provided by the server

### Tool Documentation

For a comprehensive overview of all available tools and their usage, see [Tools Overview](docs/tools-overview.md).

For detailed usage examples and best practices, see [User Guide](docs/user-guide.md).

### Common Workflows

#### Setting Up a New Project

```javascript
// Create a new iOS app project
await tools.create_xcode_project({
  name: "MyAwesomeApp",
  template: "ios-app",
  outputDirectory: "~/Projects",
  organizationName: "My Organization",
  organizationIdentifier: "com.myorganization",
  language: "swift",
  includeTests: true,
  setAsActive: true
});

// Add a Swift Package dependency
await tools.add_swift_package({
  url: "https://github.com/Alamofire/Alamofire.git",
  version: "from: 5.0.0"
});
```

#### Working with Files

```javascript
// Read a file with specific encoding
const fileContent = await tools.read_file({
  filePath: "MyAwesomeApp/AppDelegate.swift",
  encoding: "utf-8"
});

// Write to a file
await tools.write_file({
  path: "MyAwesomeApp/NewFile.swift",
  content: "import Foundation\n\nclass NewClass {}\n",
  createIfMissing: true
});

// Search for text in files
const searchResults = await tools.search_in_files({
  directory: "MyAwesomeApp",
  pattern: "*.swift",
  searchText: "class",
  isRegex: false
});
```

#### Building and Testing

```javascript
// Build the project
await tools.build_project({
  scheme: "MyAwesomeApp",
  configuration: "Debug"
});

// Run tests
await tools.test_project({
  scheme: "MyAwesomeApp",
  testPlan: "MyAwesomeAppTests"
});
```

## Project Structure

```
xcode-mcp-server/
├── src/
│   ├── index.ts                 # Entry point
│   ├── server.ts                # MCP server implementation
│   ├── types/                   # Type definitions
│   │   └── index.ts             # Core type definitions
│   ├── utils/                   # Utility functions
│   │   ├── errors.js            # Error handling classes
│   │   ├── pathManager.ts       # Path validation and management
│   │   ├── project.js           # Project utilities
│   │   └── simulator.js         # Simulator utilities
│   └── tools/                   # Tool implementations
│       ├── project/             # Project management tools
│       │   └── index.ts         # Project creation, detection, file adding
│       ├── file/                # File operation tools
│       │   └── index.ts         # File reading, writing, searching
│       ├── build/               # Build and testing tools
│       │   └── index.ts         # Building, testing, analyzing
│       ├── cocoapods/           # CocoaPods integration
│       │   └── index.ts         # Pod installation and management
│       ├── spm/                 # Swift Package Manager tools
│       │   └── index.ts         # Package management and documentation
│       ├── simulator/           # iOS simulator tools
│       │   └── index.ts         # Simulator control and interaction
│       └── xcode/               # Xcode utilities
│           └── index.ts         # Xcode version management, asset tools
├── docs/                        # Documentation
│   ├── tools-overview.md        # Comprehensive tool documentation
│   └── user-guide.md            # Usage examples and best practices
├── tests/                       # Tests
└── dist/                        # Compiled code (generated)
```

## How It Works

The Xcode MCP server uses the Model Context Protocol to provide a standardized interface for AI models to interact with Xcode projects. The server architecture is designed with several key components:

### Core Components

1. **Server Implementation**: The main MCP server that handles tool registration and request processing.

2. **Path Management**: Ensures secure file access by validating all paths against allowed directories.

3. **Project Management**: Detects, loads, and manages different types of Xcode projects:
   - Standard Xcode projects (.xcodeproj)
   - Xcode workspaces (.xcworkspace)
   - Swift Package Manager projects (Package.swift)

4. **Directory State**: Maintains the active directory context for relative path resolution.

5. **Tool Registry**: Organizes tools into logical categories for different Xcode operations.

### Request Flow

1. An AI assistant sends a tool execution request to the MCP server.

2. The server validates the request parameters and permissions.

3. The appropriate tool handler is invoked with the validated parameters.

4. The tool executes the requested operation, often using native Xcode commands.

5. Results are formatted and returned to the AI assistant.

6. Comprehensive error handling provides meaningful feedback for troubleshooting.

### Safety Features

- **Path Validation**: All file operations are restricted to allowed directories.
- **Error Handling**: Detailed error messages help diagnose issues.
- **Parameter Validation**: Input parameters are validated using Zod schemas.
- **Process Management**: External processes are executed safely with proper error handling.

### Project Type Support

The server intelligently handles different project types:

- **Standard Projects**: Direct .xcodeproj manipulation
- **Workspaces**: Manages multiple projects within a workspace
- **SPM Projects**: Handles Swift Package Manager specific operations

This architecture allows AI assistants to seamlessly work with any type of Xcode project while maintaining security and providing detailed feedback.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and organization
- Add comprehensive error handling with specific error messages
- Write tests for new functionality
- Update documentation to reflect your changes
- Ensure compatibility with different project types (standard, workspace, SPM)

### Adding New Tools

To add a new tool to the server:

1. Identify the appropriate category in the `src/tools/` directory
2. Implement the tool using the existing patterns with Zod schema validation
3. Register the tool in the category's `index.ts` file
4. Add error handling with specific error messages
5. Document the tool in the appropriate documentation files

## Troubleshooting

### Common Issues

- **Path Access Errors**: Ensure the paths you're trying to access are within the allowed directories
- **Build Failures**: Check that Xcode command line tools are installed and up to date
- **Tool Not Found**: Verify that the tool name is correct and properly registered
- **Parameter Validation Errors**: Check the parameter types and requirements in the tool documentation

### Debugging

1. Start the server with debug logging enabled: `npm start -- --debug`
2. Check the console output for detailed error messages
3. Examine the server logs for request and response details
4. For tool-specific issues, try running the equivalent Xcode command directly in the terminal

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to the Model Context Protocol team for the MCP SDK
- Built with TypeScript and Node.js
- Uses Xcode command line tools and Swift Package Manager
- Special thanks to all contributors who have helped improve the server's functionality and robustness
