---
name: "nwiizo/tfmcp"
description: "A Terraform MCP server allowing AI assistants to manage and operate Terraform environments, enabling reading configurations, analyzing plans, applying configurations, and managing Terraform state."
description_tr: "Terraform MCP sunucusu, AI asistanlarının Terraform ortamlarını yönetmesine ve işletmesine olanak sağlayan, konfigürasyonları okuma, planları analiz etme, konfigürasyonları uygulama ve Terraform state yönetimini mümkün kılan bir araçtır."
category: "Cloud Platforms"
repo: "nwiizo/tfmcp"
stars: 364
url: "https://github.com/nwiizo/tfmcp"
body_length: 15842
license: "MIT"
language: "Rust"
homepage: "https://crates.io/crates/tfmcp"
body_tr: |-
  # tfmcp: Terraform Model Context Protocol Aracı

  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/nwiizo/tfmcp)](https://archestra.ai/mcp-catalog/nwiizo__tfmcp)

  *⚠️  Bu proje üretim ortamına hazır güvenlik özelliklerini içermesine rağmen hala aktif geliştirme aşamasındadır. Güvenlik sistemi güçlü koruma sağlamasına rağmen, lütfen üretim ortamlarında tüm işlemleri dikkatli bir şekilde inceleyin. ⚠️*

  tfmcp, Terraform'u Model Context Protocol (MCP) aracılığıyla yönetmenize yardımcı olan bir komut satırı aracıdır. LLM'lerin Terraform ortamlarınızı yönetmesine ve işletmesine olanak tanır; buna şunlar dahildir:

  ## 🎮 Demo

  tfmcp'yi Claude Desktop ile çalışırken görün:

  ![tfmcp Demo with Claude Desktop](https://raw.githubusercontent.com/nwiizo/tfmcp/HEAD/.github/images/tfmcp-demo.gif)

  - Terraform konfigürasyon dosyalarını okuma
  - Terraform plan çıktılarını analiz etme
  - Terraform konfigürasyonlarını uygulama
  - Terraform state'ini yönetme
  - Terraform konfigürasyonları oluşturma ve değiştirme

  ## 🎉 En Son Yayın

  tfmcp'nin en yeni sürümü (v0.1.9) artık Crates.io'da kullanılabilir! Cargo kullanarak kolayca yükleyebilirsiniz:

  ```bash
  cargo install tfmcp
  ```

  ### 🆕 v0.1.9'daki Yenilikler
  - **📊 Plan Analizi**: Risk puanlaması ve öneriler ile yapılandırılmış plan analizi
  - **🔍 State Analizi**: Drift tespiti ile derin state incelemesi
  - **📁 Workspace Yönetimi**: Tam terraform workspace desteği (list, show, new, select, delete)
  - **📥 İçe Aktarma Yardımcısı**: Konfigürasyon oluşturma ile rehberli kaynak içe aktarma
  - **✨ Kod Biçimlendirme**: terraform fmt entegrasyonu
  - **🔗 Bağımlılık Grafiği**: DOT çıktısı ile terraform graph görselleştirmesi
  - **📤 Çıktı Yönetimi**: terraform output erişimi
  - **🏷️ Taint/Untaint**: Kaynak taint yönetimi (1.5+ için kullanımdan kaldırma uyarıları ile)
  - **🔄 State Yenileme**: Açık state yenileme işlemleri
  - **📦 Provider Bilgisi**: Lock dosyası ayrıştırması ile ayrıntılı sağlayıcı bilgileri
  - **🦀 Rust Edition 2024**: Rust Edition 2024'e geçiş yapıldı (Rust 1.85.0+ gereklidir)

  ## Özellikler

  - 🚀 **Terraform Entegrasyonu**
    Terraform CLI ile derin entegrasyon; işlemleri analiz etmek ve yürütmek için.

  - 📄 **MCP Server Özellikleri**
    Model Context Protocol sunucusu olarak çalışır ve AI asistanlarının Terraform'a erişmesine ve yönetmesine olanak tanır.

  - 🔬 **Modül Sağlık Analizi**
    Infrastructure as Code'a whitebox yaklaşımı; cohesion/coupling analizi, sağlık puanlaması ve yazılım mühendisliği ilkelerine dayanan yeniden düzenleme önerileri.

  - 📊 **Kaynak Bağımlılık Grafiği**
    Açık depends_on ve örtük referans bağımlılıkları dahil olmak üzere kaynak ilişkilerini görselleştirin.

  - 📦 **Module Registry Entegrasyonu**
    Terraform modüllerini kayıt defterinden arayın ve keşfedin; modül ayrıntılarını ve sürümlerini alın.

  - 🔐 **Kurumsal Güvenlik**
    Üretim ortamına hazır güvenlik kontrolleri; konfigüre edilebilir ilkeler, denetim günlüğü ve erişim kısıtlamaları.

  - 📊 **Gelişmiş Analiz**
    En iyi uygulama önerileri ve güvenlik kontrolleri ile ayrıntılı Terraform konfigürasyonu analizi.

  - 📋 **Kılavuz Uygunluğu** (v0.1.8)
    Future Architect Terraform yönergeleri entegrasyonu; uygunluk puanlaması, gizli tespiti ve değişken kalitesi kontrolleri.

  - ⚡️ **Yıldırım Hızı**
    Rust ekosistemi tarafından desteklenen yüksek hızlı işleme; optimize edilmiş ayrıştırma ve önbelleğe alma.

  - 🛠️ **Otomatik Kurulum**
    Gerektiğinde otomatik olarak örnek Terraform projeleri oluşturur; yeni kullanıcılar için bile sorunsuz işlemi sağlar.

  - 🐳 **Docker Desteği**
    Tüm bağımlılıkları önceden yüklenmiş containerize ortamda tfmcp'yi çalıştırın.

  ## Kurulum

  ### Kaynaktan
  ```bash
  # Depoyu klonlayın
  git clone https://github.com/nwiizo/tfmcp
  cd tfmcp

  # İnşa edin ve kurun
  cargo install --path .
  ```

  ### Crates.io'dan
  ```bash
  cargo install tfmcp
  ```

  ### Docker Kullanarak
  ```bash
  # Depoyu klonlayın
  git clone https://github.com/nwiizo/tfmcp
  cd tfmcp

  # Docker imajını oluşturun
  docker build -t tfmcp .

  # Konteyneri çalıştırın
  docker run -it tfmcp
  ```

  ## Gereksinimler

  - Rust (edition 2021)
  - PATH'de kurulu ve erişilebilir Terraform CLI
  - AI asistan entegrasyonu için Claude Desktop
  - Containerized dağıtım için Docker (isteğe bağlı)

  ## Kullanım

  ```bash
  $ tfmcp --help
  ✨ A CLI tool to manage Terraform configurations and operate Terraform through the Model Context Protocol (MCP).

  Usage: tfmcp [OPTIONS] [COMMAND]

  Commands:
    mcp       Launch tfmcp as an MCP server
    analyze   Analyze Terraform configurations
    help      Print this message or the help of the given subcommand(s)

  Options:
    -c, --config <PATH>    Path to the configuration file
    -d, --dir <PATH>       Terraform project directory
    -V, --version          Print version
    -h, --help             Print help
  ```

  ### Docker Kullanarak

  Docker kullanırken tfmcp komutlarını şu şekilde çalıştırabilirsiniz:

  ```bash
  # MCP sunucusu olarak çalıştırın (varsayılan)
  docker run -it tfmcp

  # Belirli komut ve seçenekler ile çalıştırın
  docker run -it tfmcp analyze --dir /app/example

  # Terraform proje dizininizi monte edin
  docker run -it -v /path/to/your/terraform:/app/terraform tfmcp --dir /app/terraform

  # Ortam değişkenlerini ayarlayın
  docker run -it -e TFMCP_LOG_LEVEL=debug tfmcp
  ```

  ### Claude Desktop ile Entegrasyon

  tfmcp'yi Claude Desktop ile kullanmak için:

  1. Henüz yapmadıysanız, tfmcp'yi kurun:
     ```bash
     cargo install tfmcp
     ```

     Alternatif olarak, Docker'ı kullanabilirsiniz:
     ```bash
     docker build -t tfmcp .
     ```

  2. Kurulu tfmcp yürütülebilir dosyasının yolunu bulun:
     ```bash
     which tfmcp
     ```

  3. `~/Library/Application\ Support/Claude/claude_desktop_config.json` dosyasına aşağıdaki konfigürasyonu ekleyin:

  ```json
  {
    "mcpServers": {
      "tfmcp": {
        "command": "/path/to/your/tfmcp",
        "args": ["mcp"],
        "env": {
          "HOME": "/Users/yourusername",
          "PATH": "/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",
          "TERRAFORM_DIR": "/path/to/your/terraform/project"
        }
      }
    }
  }
  ```

  Claude Desktop ile Docker kullanıyorsanız, konfigürasyonu şu şekilde ayarlayabilirsiniz:

  ```json
  {
    "mcpServers": {
      "tfmcp": {
        "command": "docker",
        "args": ["run", "--rm", "-v", "/path/to/your/terraform:/app/terraform", "tfmcp", "mcp"],
        "env": {
          "TERRAFORM_DIR": "/app/terraform"
        }
      }
    }
  }
  ```

  4. Claude Desktop'ı yeniden başlatın ve tfmcp aracını etkinleştirin.

  5. tfmcp, bir proje bulunamazsa `~/terraform` dizininde otomatik olarak örnek bir Terraform projesi oluşturur; bu da Claude'un hemen Terraform ile çalışmaya başlamasını sağlar. Örnek proje, bu deponun `example/demo` dizinine dahil edilen örneklere dayalıdır.

  ## MCP Tools

  tfmcp, AI asistanları için 31 MCP aracı sağlar:

  ### Temel Terraform İşlemleri
  | Tool | Açıklama |
  |------|----------|
  | `init_terraform` | Terraform çalışma dizinini başlat |
  | `get_terraform_plan` | Execution plan oluştur ve göster |
  | `analyze_plan` | **YENİ** Risk puanlaması ve öneriler ile plan analizi |
  | `apply_terraform` | Terraform konfigürasyonunu uygula |
  | `destroy_terraform` | Terraform tarafından yönetilen altyapıyı yok et |
  | `validate_terraform` | Konfigürasyon söz dizimini doğrula |
  | `validate_terraform_detailed` | Yönergeleri ile ayrıntılı doğrulama |
  | `get_terraform_state` | Geçerli state'i göster |
  | `analyze_state` | **YENİ** Drift tespiti ile state analizi |
  | `list_terraform_resources` | Yönetilen tüm kaynakları listele |
  | `set_terraform_directory` | Etkin proje dizinini değiştir |

  ### Workspace & State (v0.1.9)
  | Tool | Açıklama |
  |------|----------|
  | `terraform_workspace` | **YENİ** Workspaces'i yönet (list, show, new, select, delete) |
  | `terraform_import` | **YENİ** Mevcut kaynakları içe aktar |
  | `terraform_taint` | **YENİ** Kaynakları taint/untaint et |
  | `terraform_refresh` | **YENİ** State'i yenile |

  ### Kod & Çıktı (v0.1.9)
  | Tool | Açıklama |
  |------|----------|
  | `terraform_fmt` | **YENİ** Kodu biçimlendir |
  | `terraform_graph` | **YENİ** Bağımlılık grafiği oluştur |
  | `terraform_output` | **YENİ** Çıktı değerlerini al |
  | `terraform_providers` | **YENİ** Lock dosyası ile sağlayıcı bilgisi al |

  ### Analiz & Güvenlik
  | Tool | Açıklama |
  |------|----------|
  | `analyze_terraform` | Konfigürasyonu analiz et |
  | `analyze_module_health` | Cohesion/coupling metrikleri ile modül sağlığı |
  | `get_resource_dependency_graph` | Kaynak bağımlılıkları görselleştirmesi |
  | `suggest_module_refactoring` | Yeniden düzenleme önerileri |
  | `get_security_status` | Gizli tespiti ile güvenlik taraması |

  ### Registry
  | Tool | Açıklama |
  |------|----------|
  | `search_terraform_providers` | Sağlayıcıları ara |
  | `get_provider_info` | Sağlayıcı ayrıntıları |
  | `get_provider_docs` | Sağlayıcı belgeleri |
  | `search_terraform_modules` | Modülleri ara |
  | `get_module_details` | Modül ayrıntıları |
  | `get_latest_module_version` | En son modül sürümü |
  | `get_latest_provider_version` | En son sağlayıcı sürümü |

  ## Günlükler ve Sorun Giderme

  tfmcp server günlükleri şu adreste bulunur:
  ```
  ~/Library/Logs/Claude/mcp-server-tfmcp.log
  ```

  Sık karşılaşılan sorunlar ve çözümleri:

  - **Claude sunucuya bağlanamıyor**: Yapılandırmanızda tfmcp yürütülebilir dosyasının yolunun doğru olduğundan emin olun
  - **Terraform proje sorunları**: tfmcp, hiçbiri bulunamazsa otomatik olarak örnek bir Terraform projesi oluşturur
  - **Method not found hataları**: MCP protokolü desteği resources/list ve prompts/list yöntemlerini içerir
  - **Docker sorunları**: Docker kullanıyorsanız, konteynerinizin uygun volume mount'ları ve izinleri olduğundan emin olun

  ## Ortam Değişkenleri

  ### Temel Konfigürasyon
  - `TERRAFORM_DIR`: Özel bir Terraform proje dizini belirtmek için bunu ayarlayın. Ayarlanmamışsa, tfmcp komut satırı bağımsız değişkenleri, konfigürasyon dosyaları tarafından sağlanan dizini kullanır veya `~/terraform` dizinine geri döner. `set_terraform_directory` aracını kullanarak proje dizinini runtime'da da değiştirebilirsiniz.
  - `TFMCP_LOG_LEVEL`: Günlük ayrıntılığını kontrol etmek için `debug`, `info`, `warn` veya `error` olarak ayarlayın.
  - `TFMCP_DEMO_MODE`: Ek güvenlik özellikleri ile demo modunu etkinleştirmek için `true` olarak ayarlayın.

  ### Güvenlik Konfigürasyonu
  - `TFMCP_ALLOW_DANGEROUS_OPS`: Apply/destroy işlemlerini etkinleştirmek için `true` olarak ayarlayın (varsayılan: `false`)
  - `TFMCP_ALLOW_AUTO_APPROVE`: Tehlikeli işlemler için otomatik onayla etkinleştirmek için `true` olarak ayarlayın (varsayılan: `false`)
  - `TFMCP_MAX_RESOURCES`: Yönetilebilecek kaynakların maksimum sayısını ayarlayın (varsayılan: 50)
  - `TFMCP_AUDIT_ENABLED`: Denetim günlüğünü devre dışı bırakmak için `false` olarak ayarlayın (varsayılan: `true`)
  - `TFMCP_AUDIT_LOG_FILE`: Denetim günlük dosyası için özel yol (varsayılan: `~/.tfmcp/audit.log`)
  - `TFMCP_AUDIT_LOG_SENSITIVE`: Denetim günlüklerine hassas bilgileri dahil etmek için `true` olarak ayarlayın (varsayılan: `false`)

  ## Güvenlik Konuları

  tfmcp, üretim kullanımı için tasarlanan kapsamlı güvenlik özelliklerini içerir:

  ### 🔒 Yerleşik Güvenlik Özellikleri
  - **Erişim Kontrolleri**: Üretim/hassas dosya desenleri otomatik olarak engellenir
  - **İşlem Kısıtlamaları**: Tehlikeli işlemler (apply/destroy) varsayılan olarak devre dışı bırakılmıştır
  - **Kaynak Sınırlamaları**: Konfigüre edilebilir maksimum kaynak sayısı koruması
  - **Denetim Günlüğü**: Zaman damgaları ve kullanıcı tanımlaması ile eksiksiz işlem izleme
  - **Dizin Doğrulaması**: Proje dizinleri için güvenlik ilkesi uygulanması

  ### 🛡️ Güvenlik En İyi Uygulamaları
  - **Varsayılan Güvenlik**: Apply/destroy işlemleri varsayılan olarak devre dışı bırakılmıştır - gerektiğinde açıkça etkinleştirin
  - **Planları Gözden Geçirin**: Özellikle AI tarafından oluşturulan Terraform planlarını uygulamadan önce her zaman gözden geçirin
  - **IAM Sınırları**: Bulut ortamlarında uygun IAM izinlerini ve rol sınırlarını kullanın
  - **Denetim Monotorü**: `~/.tfmcp/audit.log` konumunda denetim günlüklerini düzenli olarak gözden geçirin
  - **Dosya Desenleri**: `prod*`, `production*` ve `secret*` desenleri erişimine karşı yerleşik koruma
  - **Docker Güvenliği**: Konteynerleri kullanırken, volume mount'ları ve maruz kalan verileri dikkatle değerlendirin

  ### ⚙️ Üretim Konfigürasyonu
  ```bash
  # Önerilen üretim ayarları
  export TFMCP_ALLOW_DANGEROUS_OPS=false    # Güvenlik için devre dışı tutun
  export TFMCP_ALLOW_AUTO_APPROVE=false     # Manual onay iste
  export TFMCP_MAX_RESOURCES=10             # Kaynak kapsamını sınırla
  export TFMCP_AUDIT_ENABLED=true           # Denetim günlüğünü etkinleştir
  export TFMCP_AUDIT_LOG_SENSITIVE=false    # Hassas verileri günlüğe yazma
  ```

  ## Katkı Sağlamak

  Katkılar memnuniyetle karşılanır! Lütfen bir Pull Request göndermekten çekinmeyin.

  1. Depoyu fork edin
  2. Özellik dalınızı oluşturun (`git checkout -b feature/amazing-feature`)
  3. Commit etmeden önce kalite kontrolleri çalıştırın:
     ```bash
     cargo fmt --all
     cargo clippy --all-targets --all-features
     cargo test --all-features
     ```
  4. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
  5. Dalına push edin (`git push origin feature/amazing-feature`)
  6. Bir Pull Request açın

  ### Yayın Süreci

  Yayınlar el ile yapılır (otomatik CI yayını devre dışı bırakılmıştır):

  1. `Cargo.toml` dosyasında sürümü güncelleyin
  2. GitHub yayını oluşturun: `gh release create v0.1.x --title "v0.1.x - Title" --notes "Release notes"`
  3. crates.io'ye yayınlayın: `cargo publish`

  ## Yol Haritası

  tfmcp'nin planlanmış iyileştirmeleri ve gelecek özellikleri:

  ### Tamamlanan
  - [x] **Temel Terraform Entegrasyonu**  
    Terraform CLI ile işlemleri analiz etmek ve yürütmek için temel entegrasyon.

  - [x] **MCP Server Uygulaması**  
    AI asistanlarının Terraform'a erişmesi ve yönetmesi için Model Context Protocol sunucusunun ilk uygulanması.

  - [x] **Otomatik Proje Oluşturma**  
    Gerektiğinde otomatik olarak örnek Terraform projeleri oluşturma işlevi eklendi.

  - [x] **Claude Desktop Entegrasyonu**  
    Claude Desktop ile sorunsuz entegrasyon desteği.

  - [x] **Temel MCP Yöntemleri**  
    resources/list ve prompts/list dahil olmak üzere temel MCP yöntemlerinin uygulanması.

  - [x] **Hata İşleme İyileştirmeleri**  
    Güçlü işlem için daha iyi hata işleme ve kurtarma mekanizmaları.

  - [x] **Dinamik Proje Dizini Değiştirme**  
    Hizmeti yeniden başlatmadan etkin Terraform proje dizinini değiştirme yeteneği eklendi.

  - [x] **Crates.io Yayını**  
    Cargo aracılığıyla kolay kurulum için paket Crates.io'ya yayınlandı.
    
  - [x] **Docker Desteği**  
    Daha kolay dağıtım ve platformlar arası uyumluluk için containerization desteği eklendi.

  - [x] **Güvenlik Geliştirmeleri**
    Konfigüre edilebilir ilkeler, denetim günlüğü, erişim kontrolleri ve üretim ortamına hazır güvenlik özellikleri ile kapsamlı güvenlik sistemi.

  - [x] **Modül Sağlık Analizi (v0.1.6)**
    Cohesion/coupling metrikleri, sağlık puanlaması ve yeniden düzenleme önerileri ile IaC'ye whitebox yaklaşımı.

  - [x] **Kaynak Bağımlılık Grafiği (v0.1.6)**
    Açık ve örtük bağımlılıklar dahil olmak üzere kaynak ilişkilerinin görselleştirmesi.

  - [x] **Module Registry Entegrasyonu (v0.1.6)**
    Terraform modüllerini kayıt defterinden arayın ve keşfedin.

  - [x] **Kapsamlı Test Çerçevesi**
    Gerçek Terraform konfigürasyonları ile entegrasyon testleri dahil olmak üzere 85+ test.

  - [x] **RMCP SDK Geçişi (v0.1.8)**
    Daha iyi MCP uyumluluğu için resmi RMCP SDK'ya ve uygun tool ek açıklamalarına geçiş yapılmıştır.

  - [x] **Future Architect Yönergeleri (v0.1.8)**
    Terraform kodlama standartları uygunluk kontrolleri; gizli tespiti ve değişken kalitesi doğrulaması.

  ### Devam Ediyor
  - [ ] **Çok Ortam Desteği**
    Birden fazla Terraform ortamı, workspace'i ve modülünü yönetme desteği ekleyin.

  ### Planlanmış
  - [ ] **Genişletilmiş MCP Protokolü Desteği**
    AI asistanları ile daha zengin entegrasyon için ek MCP yöntemleri ve yeteneklerini uygulayın.

  - [ ] **Performans Optimizasyonu**  
    Büyük Terraform projeleri için kaynak kullanımını ve yanıt sürelerini optimize edin.

  - [ ] **Maliyet Tahmini**  
    Terraform planları için maliyet tahminleri sağlamak üzere bulut sağlayıcı fiyatlandırma API'lerini entegre edin.

  - [ ] **İnteraktif TUI**  
    Yerel kullanım ve hata ayıklama için daha kolay terminal tabanlı bir kullanıcı arayüzü geliştirin.

  - [ ] **Diğer AI Platformları ile Entegrasyon**  
    Claude'un ötesinde diğer AI asistanları ve platformlarını destekleyin.

  - [ ] **Plugin Sistemi**  
    Temel işlevselliğin genişletilmesine izin vermek için bir plugin mimarisi geliştirin.

  ## Lisans

  Bu proje MIT Lisansı altında lisanslanmıştır - ayrıntılar için [LICENSE](LICENSE) dosyasına bakın.
---

# tfmcp: Terraform Model Context Protocol Tool

[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/nwiizo/tfmcp)](https://archestra.ai/mcp-catalog/nwiizo__tfmcp)

*⚠️  This project includes production-ready security features but is still under active development. While the security system provides robust protection, please review all operations carefully in production environments. ⚠️*

tfmcp is a command-line tool that helps you interact with Terraform via the Model Context Protocol (MCP). It allows LLMs to manage and operate your Terraform environments, including:

## 🎮 Demo

See tfmcp in action with Claude Desktop:

![tfmcp Demo with Claude Desktop](https://raw.githubusercontent.com/nwiizo/tfmcp/HEAD/.github/images/tfmcp-demo.gif)

- Reading Terraform configuration files
- Analyzing Terraform plan outputs
- Applying Terraform configurations
- Managing Terraform state
- Creating and modifying Terraform configurations

## 🎉 Latest Release

The latest version of tfmcp (v0.1.9) is now available on Crates.io! You can easily install it using Cargo:

```bash
cargo install tfmcp
```

### 🆕 What's New in v0.1.9
- **📊 Plan Analysis**: Structured plan analysis with risk scoring and recommendations
- **🔍 State Analysis**: Deep state inspection with drift detection
- **📁 Workspace Management**: Full terraform workspace support (list, show, new, select, delete)
- **📥 Import Helper**: Guided resource import with config generation
- **✨ Code Formatting**: terraform fmt integration
- **🔗 Dependency Graph**: terraform graph visualization with DOT output
- **📤 Output Management**: terraform output access
- **🏷️ Taint/Untaint**: Resource taint management (with deprecation notices for 1.5+)
- **🔄 State Refresh**: Explicit state refresh operations
- **📦 Provider Info**: Detailed provider information with lock file parsing
- **🦀 Rust Edition 2024**: Migrated to Rust Edition 2024 (requires Rust 1.85.0+)

## Features

- 🚀 **Terraform Integration**
  Deeply integrates with the Terraform CLI to analyze and execute operations.

- 📄 **MCP Server Capabilities**
  Runs as a Model Context Protocol server, allowing AI assistants to access and manage Terraform.

- 🔬 **Module Health Analysis**
  Whitebox approach to Infrastructure as Code with cohesion/coupling analysis, health scoring, and refactoring suggestions based on software engineering principles.

- 📊 **Resource Dependency Graph**
  Visualize resource relationships including explicit depends_on and implicit reference dependencies.

- 📦 **Module Registry Integration**
  Search and explore Terraform modules from the registry, get module details and versions.

- 🔐 **Enterprise Security**
  Production-ready security controls with configurable policies, audit logging, and access restrictions.

- 📊 **Advanced Analysis**
  Detailed Terraform configuration analysis with best practice recommendations and security checks.

- 📋 **Guideline Compliance** (v0.1.8)
  Future Architect Terraform guidelines integration with compliance scoring, secret detection, and variable quality checks.

- ⚡️ **Blazing Fast**
  High-speed processing powered by the Rust ecosystem with optimized parsing and caching.

- 🛠️ **Automatic Setup**
  Automatically creates sample Terraform projects when needed, ensuring smooth operation even for new users.

- 🐳 **Docker Support**
  Run tfmcp in a containerized environment with all dependencies pre-installed.

## Installation

### From Source
```bash
# Clone the repository
git clone https://github.com/nwiizo/tfmcp
cd tfmcp

# Build and install
cargo install --path .
```

### From Crates.io
```bash
cargo install tfmcp
```

### Using Docker
```bash
# Clone the repository
git clone https://github.com/nwiizo/tfmcp
cd tfmcp

# Build the Docker image
docker build -t tfmcp .

# Run the container
docker run -it tfmcp
```

## Requirements

- Rust (edition 2021)
- Terraform CLI installed and available in PATH
- Claude Desktop (for AI assistant integration)
- Docker (optional, for containerized deployment)

## Usage

```bash
$ tfmcp --help
✨ A CLI tool to manage Terraform configurations and operate Terraform through the Model Context Protocol (MCP).

Usage: tfmcp [OPTIONS] [COMMAND]

Commands:
  mcp       Launch tfmcp as an MCP server
  analyze   Analyze Terraform configurations
  help      Print this message or the help of the given subcommand(s)

Options:
  -c, --config <PATH>    Path to the configuration file
  -d, --dir <PATH>       Terraform project directory
  -V, --version          Print version
  -h, --help             Print help
```

### Using Docker

When using Docker, you can run tfmcp commands like this:

```bash
# Run as MCP server (default)
docker run -it tfmcp

# Run with specific command and options
docker run -it tfmcp analyze --dir /app/example

# Mount your Terraform project directory
docker run -it -v /path/to/your/terraform:/app/terraform tfmcp --dir /app/terraform

# Set environment variables
docker run -it -e TFMCP_LOG_LEVEL=debug tfmcp
```

### Integrating with Claude Desktop

To use tfmcp with Claude Desktop:

1. If you haven't already, install tfmcp:
   ```bash
   cargo install tfmcp
   ```

   Alternatively, you can use Docker:
   ```bash
   docker build -t tfmcp .
   ```

2. Find the path to your installed tfmcp executable:
   ```bash
   which tfmcp
   ```

3. Add the following configuration to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "tfmcp": {
      "command": "/path/to/your/tfmcp",  // Replace with the actual path from step 2
      "args": ["mcp"],
      "env": {
        "HOME": "/Users/yourusername",  // Replace with your username
        "PATH": "/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",
        "TERRAFORM_DIR": "/path/to/your/terraform/project"  // Optional: specify your Terraform project
      }
    }
  }
}
```

If you're using Docker with Claude Desktop, you can set up the configuration like this:

```json
{
  "mcpServers": {
    "tfmcp": {
      "command": "docker",
      "args": ["run", "--rm", "-v", "/path/to/your/terraform:/app/terraform", "tfmcp", "mcp"],
      "env": {
        "TERRAFORM_DIR": "/app/terraform"
      }
    }
  }
}
```

4. Restart Claude Desktop and enable the tfmcp tool.

5. tfmcp will automatically create a sample Terraform project in `~/terraform` if one doesn't exist, ensuring Claude can start working with Terraform right away. The sample project is based on the examples included in the `example/demo` directory of this repository.

## MCP Tools

tfmcp provides 31 MCP tools for AI assistants:

### Core Terraform Operations
| Tool | Description |
|------|-------------|
| `init_terraform` | Initialize Terraform working directory |
| `get_terraform_plan` | Generate and show execution plan |
| `analyze_plan` | **NEW** Analyze plan with risk scoring and recommendations |
| `apply_terraform` | Apply Terraform configuration |
| `destroy_terraform` | Destroy Terraform-managed infrastructure |
| `validate_terraform` | Validate configuration syntax |
| `validate_terraform_detailed` | Detailed validation with guidelines |
| `get_terraform_state` | Show current state |
| `analyze_state` | **NEW** Analyze state with drift detection |
| `list_terraform_resources` | List all managed resources |
| `set_terraform_directory` | Change active project directory |

### Workspace & State (v0.1.9)
| Tool | Description |
|------|-------------|
| `terraform_workspace` | **NEW** Manage workspaces (list, show, new, select, delete) |
| `terraform_import` | **NEW** Import existing resources |
| `terraform_taint` | **NEW** Taint/untaint resources |
| `terraform_refresh` | **NEW** Refresh state |

### Code & Output (v0.1.9)
| Tool | Description |
|------|-------------|
| `terraform_fmt` | **NEW** Format code |
| `terraform_graph` | **NEW** Generate dependency graph |
| `terraform_output` | **NEW** Get output values |
| `terraform_providers` | **NEW** Get provider info with lock file |

### Analysis & Security
| Tool | Description |
|------|-------------|
| `analyze_terraform` | Analyze configuration |
| `analyze_module_health` | Module health with cohesion/coupling metrics |
| `get_resource_dependency_graph` | Resource dependencies visualization |
| `suggest_module_refactoring` | Refactoring suggestions |
| `get_security_status` | Security scan with secret detection |

### Registry
| Tool | Description |
|------|-------------|
| `search_terraform_providers` | Search providers |
| `get_provider_info` | Provider details |
| `get_provider_docs` | Provider documentation |
| `search_terraform_modules` | Search modules |
| `get_module_details` | Module details |
| `get_latest_module_version` | Latest module version |
| `get_latest_provider_version` | Latest provider version |

## Logs and Troubleshooting

The tfmcp server logs are available at:
```
~/Library/Logs/Claude/mcp-server-tfmcp.log
```

Common issues and solutions:

- **Claude can't connect to the server**: Make sure the path to the tfmcp executable is correct in your configuration
- **Terraform project issues**: tfmcp automatically creates a sample Terraform project if none is found
- **Method not found errors**: MCP protocol support includes resources/list and prompts/list methods
- **Docker issues**: If using Docker, ensure your container has proper volume mounts and permissions

## Environment Variables

### Core Configuration
- `TERRAFORM_DIR`: Set this to specify a custom Terraform project directory. If not set, tfmcp will use the directory provided by command line arguments, configuration files, or fall back to `~/terraform`. You can also change the project directory at runtime using the `set_terraform_directory` tool.
- `TFMCP_LOG_LEVEL`: Set to `debug`, `info`, `warn`, or `error` to control logging verbosity.
- `TFMCP_DEMO_MODE`: Set to `true` to enable demo mode with additional safety features.

### Security Configuration
- `TFMCP_ALLOW_DANGEROUS_OPS`: Set to `true` to enable apply/destroy operations (default: `false`)
- `TFMCP_ALLOW_AUTO_APPROVE`: Set to `true` to enable auto-approve for dangerous operations (default: `false`)
- `TFMCP_MAX_RESOURCES`: Set maximum number of resources that can be managed (default: 50)
- `TFMCP_AUDIT_ENABLED`: Set to `false` to disable audit logging (default: `true`)
- `TFMCP_AUDIT_LOG_FILE`: Custom path for audit log file (default: `~/.tfmcp/audit.log`)
- `TFMCP_AUDIT_LOG_SENSITIVE`: Set to `true` to include sensitive information in audit logs (default: `false`)

## Security Considerations

tfmcp includes comprehensive security features designed for production use:

### 🔒 Built-in Security Features
- **Access Controls**: Automatic blocking of production/sensitive file patterns
- **Operation Restrictions**: Dangerous operations (apply/destroy) disabled by default
- **Resource Limits**: Configurable maximum resource count protection
- **Audit Logging**: Complete operation tracking with timestamps and user identification
- **Directory Validation**: Security policy enforcement for project directories

### 🛡️ Security Best Practices
- **Default Safety**: Apply/destroy operations are disabled by default - explicitly enable only when needed
- **Review Plans**: Always review Terraform plans before applying, especially AI-generated ones
- **IAM Boundaries**: Use appropriate IAM permissions and role boundaries in cloud environments
- **Audit Monitoring**: Regularly review audit logs at `~/.tfmcp/audit.log`
- **File Patterns**: Built-in protection against accessing `prod*`, `production*`, and `secret*` patterns
- **Docker Security**: When using containers, carefully consider volume mounts and exposed data

### ⚙️ Production Configuration
```bash
# Recommended production settings
export TFMCP_ALLOW_DANGEROUS_OPS=false    # Keep disabled for safety
export TFMCP_ALLOW_AUTO_APPROVE=false     # Require manual approval
export TFMCP_MAX_RESOURCES=10             # Limit resource scope
export TFMCP_AUDIT_ENABLED=true           # Enable audit logging
export TFMCP_AUDIT_LOG_SENSITIVE=false    # Don't log sensitive data
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Run quality checks before committing:
   ```bash
   cargo fmt --all
   cargo clippy --all-targets --all-features
   cargo test --all-features
   ```
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Release Process

Releases are done manually (automated CI release is disabled):

1. Update version in `Cargo.toml`
2. Create GitHub release: `gh release create v0.1.x --title "v0.1.x - Title" --notes "Release notes"`
3. Publish to crates.io: `cargo publish`

## Roadmap

Here are some planned improvements and future features for tfmcp:

### Completed
- [x] **Basic Terraform Integration**  
  Core integration with Terraform CLI for analyzing and executing operations.

- [x] **MCP Server Implementation**  
  Initial implementation of the Model Context Protocol server for AI assistants.

- [x] **Automatic Project Creation**  
  Added functionality to automatically create sample Terraform projects when needed.

- [x] **Claude Desktop Integration**  
  Support for seamless integration with Claude Desktop.

- [x] **Core MCP Methods**  
  Implementation of essential MCP methods including resources/list and prompts/list.

- [x] **Error Handling Improvements**  
  Better error handling and recovery mechanisms for robust operation.

- [x] **Dynamic Project Directory Switching**  
  Added ability to change the active Terraform project directory without restarting the service.

- [x] **Crates.io Publication**  
  Published the package to Crates.io for easy installation via Cargo.
  
- [x] **Docker Support**  
  Added containerization support for easier deployment and cross-platform compatibility.

- [x] **Security Enhancements**
  Comprehensive security system with configurable policies, audit logging, access controls, and production-ready safety features.

- [x] **Module Health Analysis (v0.1.6)**
  Whitebox approach to IaC with cohesion/coupling metrics, health scoring, and refactoring suggestions.

- [x] **Resource Dependency Graph (v0.1.6)**
  Visualization of resource relationships including explicit and implicit dependencies.

- [x] **Module Registry Integration (v0.1.6)**
  Search and explore Terraform modules from the registry.

- [x] **Comprehensive Testing Framework**
  85+ tests including integration tests with real Terraform configurations.

- [x] **RMCP SDK Migration (v0.1.8)**
  Migrated to official RMCP SDK with proper tool annotations for better MCP compliance.

- [x] **Future Architect Guidelines (v0.1.8)**
  Terraform coding standards compliance checks with secret detection and variable quality validation.

### In Progress
- [ ] **Multi-Environment Support**
  Add support for managing multiple Terraform environments, workspaces, and modules.

### Planned
- [ ] **Expanded MCP Protocol Support**
  Implement additional MCP methods and capabilities for richer integration with AI assistants.

- [ ] **Performance Optimization**  
  Optimize resource usage and response times for large Terraform projects.

- [ ] **Cost Estimation**  
  Integrate with cloud provider pricing APIs to provide cost estimates for Terraform plans.

- [ ] **Interactive TUI**  
  Develop a terminal-based user interface for easier local usage and debugging.

- [ ] **Integration with Other AI Platforms**  
  Extend beyond Claude to support other AI assistants and platforms.

- [ ] **Plugin System**  
  Develop a plugin architecture to allow extensions of core functionality.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
