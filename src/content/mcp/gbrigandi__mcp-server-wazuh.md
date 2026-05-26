---
name: "gbrigandi/mcp-server-wazuh"
description: "A Rust-based MCP server bridging Wazuh SIEM with AI assistants, providing real-time security alerts and event data for enhanced contextual understanding."
description_tr: "Wazuh SIEM'i yapay zeka asistanlarıyla bağlayan Rust tabanlı bir MCP server'ı, gerçek zamanlı güvenlik uyarıları ve event verilerini sunarak geliştirilmiş bağlamsal anlama sağlar."
category: "Security"
repo: "gbrigandi/mcp-server-wazuh"
stars: 209
url: "https://github.com/gbrigandi/mcp-server-wazuh"
body_length: 25047
license: "MIT"
language: "Rust"
body_tr: |-
  # Wazuh MCP Server - SIEM'inizle Konuşun

  Wazuh Güvenlik Bilgisi ve Olay Yönetimi (SIEM) sistemi ile bağlamsal güvenlik verilerine ihtiyaç duyan uygulamalar arasındaki boşluğu kapatmak için tasarlanmış, Model Context Protocol (MCP) kullanarak Claude Desktop Entegrasyonuna özel olarak uyarlanmış Rust tabanlı sunucu.

  ## Genel Bakış

  Claude gibi modern yapay zeka asistanları, kullanıcının güvenlik ortamı hakkında gerçek zamanlı bağlamdan önemli ölçüde faydalanabilirler. Wazuh MCP Server, doğal dil etkileşimleri aracılığıyla Wazuh SIEM verilerine kapsamlı erişim sağlayarak bu boşluğu kapatır.

  Bu sunucu, karmaşık Wazuh API yanıtlarını MCP uyumlu biçime dönüştürerek yapay zeka asistanlarının şu verilere erişmesini sağlar:

  - **Güvenlik Uyarıları ve Olayları** tehdit tespiti ve olay yanıtı için Wazuh Indexer'dan
  - **Agent Yönetimi ve İzlenmesi** sağlık durumu, sistem işlemleri ve ağ bağlantı noktaları dahil
  - **Güvenlik Açığı Değerlendirmesi** risk yönetimi ve yama öncelendirmesi için veriler
  - **Güvenlik Kuralları ve Konfigürasyonu** tespit optimizasyonu ve uyum doğrulaması için
  - **Sistem İstatistikleri ve Performansı** operasyonel izleme ve denetim izleri için ölçütler
  - **Log Analizi ve Adli İnceleme** olay soruşturması ve uyum raporlaması yetenekleri
  - **Küme Sağlığı ve Yönetimi** altyapı güvenilirliği ve kullanılabilirlik gereksinimleri için
  - **Uyum İzlenmesi ve Boşluk Analizi** PCI-DSS, HIPAA, SOX ve GDPR gibi düzenleyici çerçeveler için

  Manuel API çağrıları veya karmaşık sorgular gerektirmek yerine, güvenlik ekipleri artık "Web sunucularında kritik güvenlik açıklarını göster", "Agent 001'de hangi işlemler çalışıyor?" veya "PCI-DSS günlüğü gereksinimlerini karşılıyor muyuz?" gibi doğal dil soruları sorabiliyor ve Wazuh dağıtımlarından yapılandırılmış, eyleme dönüştürülebilir veri alabiliyorlar.

  Bu yaklaşım, özellikle güvenlik duruşunu hızlı bir şekilde değerlendirmesi, izleme kapsamındaki boşlukları belirlemesi, kural etkinliğini doğrulaması ve dağıtılmış altyapı genelinde denetim gereksinimleri için kanıt oluşturması gereken uyum ekipleri için değerlidir.

  ![](https://raw.githubusercontent.com/gbrigandi/mcp-server-wazuh/HEAD/media/wazuh-alerts-1.png)

  ## Örnek Kullanım Senaryoları

  Wazuh MCP Server, doğal dil etkileşimleri aracılığıyla Wazuh güvenlik verilerine doğrudan erişim sağlayarak çeşitli pratik kullanım senaryolarını mümkün kılar:

  ### Güvenlik Uyarısı Analizi
  *   **Uyarı Sınıflandırması ve Soruşturması:** Hızla tehditleri tanımlamak ve acil dikkat gerektiren tehditleri öncelendirmek için `get_wazuh_alert_summary` ile son güvenlik uyarılarını sorgulayın.
  *   **Uyarı Deseni Tanıma:** Uyarı eğilimlerini ve desenlerini analiz ederek tekrarlayan güvenlik sorunlarını veya potansiyel saldırı kampanyalarını tanımlayın.

  ### Güvenlik Açığı Yönetimi
  *   **Agent Güvenlik Açığı Değerlendirmesi:** Belirli ajanların güvenlik duruşunu değerlendirmek ve yama çabalarını öncelendirmek için `get_wazuh_vulnerability_summary` ve `get_wazuh_critical_vulnerabilities` kullanın.
  *   **Risk Tabanlı Güvenlik Açığı Öncelendirmesi:** Güvenlik açığı verilerini agent kritikliği ve maruziyeti ile ilişkilendirerek düzeltme çabalarını odaklaştırın.

  ### Sistem İzlenmesi ve Adli İnceleme
  *   **İşlem Analizi:** Tehdit avcılığı ve sistem analizi için `get_wazuh_agent_processes` kullanarak ajanlarındaki çalışan işlemleri araştırın.
  *   **Ağ Güvenliği Değerlendirmesi:** Potansiyel saldırı vektörlerini belirlemek için `get_wazuh_agent_ports` ile açık bağlantı noktalarını ve ağ hizmetlerini izleyin.
  *   **Agent Sağlığı İzlenmesi:** Kapsamlı güvenlik kapsamı sağlamak için `get_wazuh_running_agents` kullanarak agent durumunu ve bağlantısını izleyin.

  ### Güvenlik Operasyonları İstihbaratı
  *   **Kural Etkinlik Analizi:** Tespit yeteneklerini optimize etmek için `get_wazuh_rules_summary` ile güvenlik tespit kurallarını gözden geçirin ve analiz edin.
  *   **Manager Performans İzlemmesi:** `get_wazuh_weekly_stats`, `get_wazuh_remoted_stats` ve `get_wazuh_log_collector_stats` gibi araçları kullanarak sistem performansı ve istatistiklerini izleyin.
  *   **Küme Sağlığı Yönetimi:** Operasyonel güvenilirlik için `get_wazuh_cluster_health` ve `get_wazuh_cluster_nodes` ile Wazuh küme durumunu izleyin.

  ### Olay Yanıtı ve Adli İnceleme
  *   **Log Analizi:** Olay soruşturması için `search_wazuh_manager_logs` ve `get_wazuh_manager_error_logs` kullanarak manager günlüklerini arayın ve analiz edin.
  *   **Agent Özgü Soruşturma:** Güvenlik olayları sırasında belirli ajanların kapsamlı profillerini oluşturmak için birden fazla aracı birleştirin.
  *   **Doğal Dil Güvenlik Sorguları:** Karmaşık güvenlik sorularını doğal dilde sorun ve Wazuh bileşenlerinden yapılandırılmış veri alın.

  ### Operasyonel Verimlilik
  *   **Otomatik Raporlama:** Manuel API çağrıları olmadan konuşmacı arayüzler aracılığıyla güvenlik raporları ve özetleri oluşturun.
  *   **Bileşen Arası Analiz:** Kapsamlı güvenlik içgörüleri için Wazuh Indexer (uyarılar) ve Wazuh Manager (ajanlar, kurallar, güvenlik açıkları) verilerini ilişkilendirin.
  *   **Çok Dilli Güvenlik Operasyonları:** Global güvenlik ekipleri için Wazuh verilerine erişin ve içgörüleri birden fazla dilde alın.

  ### Tehdit İstihbaratı Toplanması ve Yanıtı

  Geliştirilmiş tehdit istihbaratı ve olay yanıtı yetenekleri için Wazuh MCP Server tamamlayıcı güvenlik MCP sunucuları ile birleştirilebilir:

  | Sunucu | Açıklama |
  |--------|----------|
  | **[Cortex MCP Server](https://github.com/gbrigandi/mcp-server-cortex/)** | 140+ analizör aracılığıyla artefakt analizi ve IOC zenginleştirmesi |
  | **[TheHive MCP Server](https://github.com/gbrigandi/mcp-server-thehive/)** | Vaka yönetimi ve olay yanıtı orkestrasyonu |
  | **[MISP MCP Server](https://github.com/gbrigandi/mcp-server-misp/)** | Tehdit istihbaratı paylaşımı ve IOC araması |

  **Cortex Entegrasyonu ile Geliştirilmiş Yetenekler:**
  *   **Artefakt Analizi:** Wazuh uyarılarında bulunan şüpheli dosyaları, URL'leri, etki alanlarını ve IP adreslerini Cortex'in 140+ analizörünü kullanarak otomatik olarak analiz edin
  *   **IOC Zenginleştirmesi:** Wazuh uyarılarından ödün verme göstergelerini (IOC) VirusTotal, Shodan, MISP ve daha fazla dahil olmak üzere birden fazla kaynaktan tehdit istihbaratı ile zenginleştirin
  *   **Otomatik Tehdit Avı:** Tehditleri otomatik olarak araştırmak ve sınıflandırmak için Wazuh'un tespit yeteneklerini Cortex'in analiz motorları ile birleştirin
  *   **Çok Kaynağlı İstihbarat:** İtibar kontrolleri, kötü amaçlı yazılım analizi, etki alanı analizi ve davranışsal analiz için analizörleri kullanın
  *   **Yanıt Orkestrasyonu:** Analiz sonuçlarını otomatik yanıt eylemlerini ve uyarı öncelendirmesini bilgilendirmek için kullanın

  **TheHive Entegrasyonu ile Geliştirilmiş Yetenekler:**
  *   **Vaka Oluşturma:** Yapılandırılmış olay izleme için Wazuh uyarılarından TheHive'de otomatik olarak vakalar oluşturun
  *   **Uyarı Korelasyonu:** İlişkili Wazuh uyarılarını mevcut vakalara bağlayarak kapsamlı olay zaman çizelgeleri oluşturun
  *   **Görev Yönetimi:** Uyarı önem derecesine ve türüne göre soruşturma görevleri oluşturun ve izleyin
  *   **Gözlenebilir Yönetim:** Vaka soruşturmaları içinde IOC'leri gözlenebilirler olarak çıkarın ve yönetin
  *   **İşbirliği:** Güvenlik ekibinin Wazuh tarafından tespit edilen olaylar üzerinde işbirliği yapmasını sağlayın

  **MISP Entegrasyonu ile Geliştirilmiş Yetenekler:**
  *   **IOC Araması:** Wazuh uyarılarından gelen göstergelerin tehdit istihbaratı veritabanınızda bilinen olup olmadığını kontrol edin
  *   **Tehdit Bağlamı:** IOC'ler için olay bağlamı, tehdit aktörü atanması ve MITRE ATT&CK eşleştirmelerini alın
  *   **Yanlış Pozitif Azaltma:** Yanlış pozitifleri azaltmak için MISP uyarı listelerine karşı IOC'leri doğrulayın
  *   **Sighting İzlenmesi:** IOC yaygınlığını değerlendirmek için gözlem geçmişini kaydedin ve sorgulayın
  *   **Galaxy Keşfi:** Tehdit aktörü profilleri, kötü amaçlı yazılım aileleri ve saldırı desenlerine erişin

  **Örnek İş Akışı:**
  1. Wazuh bir uyarıda şüpheli bir dosya hash'i veya ağ bağlantısı tespit eder
  2. Yapay zeka asistanı, IOC'nin tehdit istihbaratında bilinip bilinmediğini kontrol etmek için MISP MCP Server'ı sorgular
  3. Bilinmiyorsa, Cortex MCP Server artefaktı birden fazla analizör kullanarak analiz eder
  4. VirusTotal, hybrid analizi, etki alanı itibarı ve diğer kaynaklardan elde edilen sonuçlar ilişkilendirilir
  5. TheHive MCP Server aracılığıyla soruşturmayı izlemek için TheHive'de bir vaka oluşturulur
  6. Birleştirilmiş istihbarat olay yanıtı kararları için bağlam sağlar
  7. Bulgular Wazuh kurallarını güncellemek veya ek izleme tetiklemek için kullanılabilir

  ## Gereksinimler

  -   Bir MCP (Model Context Protocol) uyumlu LLM istemcisi (ör. Claude Desktop)
  -   Çalışan bir Wazuh sunucusu (v4.12 önerilir) API etkin ve erişilebilir.
  -   Bu sunucu ile Wazuh API arasında ağ bağlantısı (API etkileşimi kullanılıyorsa).

  ## Kurulum

  ### Seçenek 1: Önceden Derlenmiş İkili İndir (Önerilir)

  1.  **İkiliyi İndirin:**
      *   `mcp-server-wazuh` GitHub deposunun [Sürümler sayfasına](https://github.com/gbrigandi/mcp-server-wazuh/releases) gidin.
      *   İşletim sisteminiz için uygun ikiliyi indirin (ör. `mcp-server-wazuh-linux-amd64`, `mcp-server-wazuh-macos-amd64`, `mcp-server-wazuh-macos-arm64`, `mcp-server-wazuh-windows-amd64.exe`).
      *   İndirilen ikiliyi çalıştırılabilir yapın (ör. `chmod +x mcp-server-wazuh-linux-amd64`).
      *   (İsteğe bağlı) Daha basit bir ad gibi `mcp-server-wazuh` olarak yeniden adlandırın ve daha kolay erişim için sistem `PATH`'inizde bulunan bir dizine taşıyın.

  ### Seçenek 2: Docker

  1.  **Docker İmajını Çekin:**
      ```bash
      docker pull ghcr.io/gbrigandi/mcp-server-wazuh:latest
      ```

  ### Seçenek 3: Kaynaktan Derleyin

  1.  **Ön Koşullar:**
      *   Rust'ı yükleyin: [https://www.rust-lang.org/tools/install](https://www.rust-lang.org/tools/install)

  2.  **Derleyin:**
      ```bash
      git clone https://github.com/gbrigandi/mcp-server-wazuh.git
      cd mcp-server-wazuh

      # Yalnızca stdio taşıması ile derle (varsayılan)
      cargo build --release

      # HTTP taşıması desteği ile derle
      cargo build --release --features http
      ```
      İkili `target/release/mcp-server-wazuh` konumunda bulunacaktır.

  ### LLM İstemcinizi Yapılandırın

  LLM istemcinizi yapılandırma yöntemi istemciye bağlı olarak değişecektir. MCP'yi (Model Context Protocol) destekleyen istemciler için, istemciyi genellikle `mcp-server-wazuh` yürütülebilirinin yoluna işaret etmeniz gerekir.

  **Claude Desktop için Örnek:**

  `claude_desktop_config.json` dosyanızı yapılandırın:

  ```json
  {
    "mcpServers": {
      "wazuh": {
        "command": "/path/to/mcp-server-wazuh",
        "args": [],
        "env": {
          "WAZUH_API_HOST": "your_wazuh_manager_api_host",
          "WAZUH_API_PORT": "55000",
          "WAZUH_API_USERNAME": "your_wazuh_api_user",
          "WAZUH_API_PASSWORD": "your_wazuh_api_password",
          "WAZUH_INDEXER_HOST": "your_wazuh_indexer_host",
          "WAZUH_INDEXER_PORT": "9200",
          "WAZUH_INDEXER_USERNAME": "your_wazuh_indexer_user",
          "WAZUH_INDEXER_PASSWORD": "your_wazuh_indexer_password",
          "WAZUH_VERIFY_SSL": "false",
          "WAZUH_TEST_PROTOCOL": "https",
          "RUST_LOG": "info"
        }
      }
    }
  }
  ```

  `/path/to/mcp-server-wazuh` yerine İkili dosyanızın gerçek yolunu yazın ve ortam değişkenlerini [Konfigürasyon](#konfigürasyon) bölümünde ayrıntılar doğrultusunda yapılandırın.

  Yapılandırıldıktan sonra, LLM istemciniz `mcp-server-wazuh`u başlatıp Wazuh güvenlik verilerine erişmek için iletişim kurabilmelidir.

  Docker kullanıyorsanız, Wazuh konfigürasyonunuz ile bir `.env` dosyası oluşturun:
      
  ```bash
  WAZUH_API_HOST=your_wazuh_manager_api_host
  WAZUH_API_PORT=55000
  WAZUH_API_USERNAME=your_wazuh_api_user
  WAZUH_API_PASSWORD=your_wazuh_api_password
  WAZUH_INDEXER_HOST=your_wazuh_indexer_host
  WAZUH_INDEXER_PORT=9200
  WAZUH_INDEXER_USERNAME=your_wazuh_indexer_user
  WAZUH_INDEXER_PASSWORD=your_wazuh_indexer_password
  WAZUH_VERIFY_SSL=false
  WAZUH_TEST_PROTOCOL=https
  RUST_LOG=info
  ```

  `claude_desktop_config.json` dosyanızı yapılandırın:

  ```
  {
    "mcpServers": {
      "wazuh": {
        "command": "docker",
        "args": [
          "run", "--rm", "-i",
          "--env-file", "/path/to/your/.env",
          "ghcr.io/gbrigandi/mcp-server-wazuh:latest"
        ]
      }
    }
  }
  ```

  ## Konfigürasyon

  Konfigürasyon ortam değişkenleri aracılığıyla yönetilir. Yerel geliştirme için proje köküne bir `.env` dosyası yerleştirilebilir.

  | Değişken                 | Açıklama                                                                    | Varsayılan  | Gerekli |
  | ------------------------ | ------------------------------------------------------------------------------ | ----------- | ------- |
  | `WAZUH_API_HOST`         | Wazuh Manager API sunucusunun ana bilgisayar adı veya IP adresi.              | `localhost` | Evet    |
  | `WAZUH_API_PORT`         | Wazuh Manager API için bağlantı noktası numarası.                             | `55000`     | Evet    |
  | `WAZUH_API_USERNAME`     | Wazuh Manager API kimlik doğrulaması için kullanıcı adı.                     | `wazuh`     | Evet    |
  | `WAZUH_API_PASSWORD`     | Wazuh Manager API kimlik doğrulaması için şifre.                             | `wazuh`     | Evet    |
  | `WAZUH_INDEXER_HOST`     | Wazuh Indexer API sunucusunun ana bilgisayar adı veya IP adresi.              | `localhost` | Evet    |
  | `WAZUH_INDEXER_PORT`     | Wazuh Indexer API için bağlantı noktası numarası.                             | `9200`      | Evet    |
  | `WAZUH_INDEXER_USERNAME` | Wazuh Indexer API kimlik doğrulaması için kullanıcı adı.                     | `admin`     | Evet    |
  | `WAZUH_INDEXER_PASSWORD` | Wazuh Indexer API kimlik doğrulaması için şifre.                             | `admin`     | Evet    |
  | `WAZUH_VERIFY_SSL`       | Wazuh API ve Indexer bağlantıları için SSL sertifikalarını doğrulamak için `true` olarak ayarlayın. | `false`     | Hayır   |
  | `WAZUH_TEST_PROTOCOL`    | Wazuh bağlantıları için protokol (ör. "http", "https"). İstemci varsayılanını geçersiz kılar. | `https`     | Hayır   |
  | `RUST_LOG`               | Günlük seviyesi (ör. `info`, `debug`, `trace`).                                | `info`      | Hayır   |

  **`WAZUH_VERIFY_SSL` Hakkında Not:** Üretim ortamları için, `WAZUH_VERIFY_SSL=true` olarak ayarlanması ve Wazuh Manager API ve Wazuh Indexer bağlantıları için uygun sertifika doğrulaması yapılması önerilir. Bunu `false` olarak ayarlamak, sertifika kontrollerini devre dışı bırakır ve bu güvensizdir.
  "Gerekli: Evet" göstergesi, bu değişkenlerin ilgili Wazuh bileşenlerine bağlanmak için gerekli olduğunu gösterir. Varsayılanlar sağlanmış olsa da, bir üretim kurulumuna veya yerel olmayan bir kuruluma uyma olasılığı düşüktür.

  ## Derleme

  ### Ön Koşullar

  -   Rust'ı yükleyin: [https://www.rust-lang.org/tools/install](https://www.rust-lang.org/tools/install)
  -   Docker ve Docker Compose'u yükleyin (isteğe bağlı, konteynerleştirilmiş dağıtım için): [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

  ### Yerel Geliştirme

  1.  **Depoyu klonlayın:**
      ```bash
      git clone https://github.com/gbrigandi/mcp-server-wazuh.git 
      cd mcp-server-wazuh
      ```
  2.  **Yapılandırın (Wazuh API kullanıyorsanız):**
      *   Örnek ortam dosyasını kopyalayın: `cp .env.example .env`
      *   `.env` dosyasını belirli Wazuh API ayrıntılarınız ile düzenleyin (ör. `WAZUH_API_HOST`, `WAZUH_API_PORT`).
  3.  **Derleyin:**
      ```bash
      # Varsayılan özellikleri ile derle (yalnızca stdio taşıması)
      cargo build

      # HTTP taşıması desteği ile derle
      cargo build --features http
      ```
  4.  **Çalıştırın:**
      ```bash
      # Stdio taşıması ile çalıştır (varsayılan)
      cargo run

      # HTTP taşıması ile çalıştır (derleme sırasında --features http gerekli)
      cargo run --features http -- --transport http

      # Veya çalıştırma betiğini kullanın (stdio modu ayarlayabilir):
      # ./run.sh
      ```

  ## Taşıma Modları

  Wazuh MCP Server, MCP istemcileri ile iletişim için iki taşıma modunu destekler:

  ### stdio Taşıması (Varsayılan)

  Stdio taşıması varsayılan moddur, MCP istemcisinin sunucuyu alt işlem olarak başlattığı yerel entegrasyonlar için idealdir. İletişim JSON-RPC 2.0 mesajları kullanarak stdin/stdout aracılığıyla gerçekleşir.

  ```bash
  # Stdio taşıması ile çalıştır (varsayılan)
  mcp-server-wazuh

  # Açık stdio taşıması
  mcp-server-wazuh --transport stdio
  ```

  ### Akışlanabilir HTTP Taşıması

  HTTP taşıması, uzak sunucu dağıtımını etkinleştirerek MCP istemcilerinin ağ üzerinden bağlanmasını sağlar. Bu mod, Server-Sent Events (SSE) desteği ile MCP Akışlanabilir HTTP spesifikasyonunu uygular.

  ```bash
  # Varsayılan adres üzerinde HTTP taşıması ile çalıştır (127.0.0.1:8080)
  mcp-server-wazuh --transport http

  # Özel ana bilgisayar ve bağlantı noktası ile çalıştır
  mcp-server-wazuh --transport http --host 0.0.0.0 --port 3000
  ```

  **HTTP Taşıması Özellikleri:**
  - Tüm MCP iletişimi için tek `/mcp` uç noktası
  - JSON-RPC mesajları ile POST istekleri
  - Akış yanıtları için Server-Sent Events (SSE)
  - `MCP-Session-Id` başlığı ile oturum yönetimi
  - Protokol sürümü: `2025-06-18` (rmcp 0.10 tarafından desteklenen MCP spesifikasyonu)

  **Güvenlik Notu:** Varsayılan olarak, HTTP taşıması `127.0.0.1` (yalnızca yerel ana bilgisayar) çizgisine bağlanır. Uzak erişim için `0.0.0.0` çizgisine bağlarken, uygun ağ güvenliği önlemleri (güvenlik duvarı kuralları, TLS'li ters vekil, vb.) devreye sokun.

  ### CLI Argümanları

  | Argüman | Açıklama | Varsayılan |
  |---------|----------|---------|
  | `--transport` | Taşıma modu: `stdio` veya `http` | `stdio` |
  | `--host` | HTTP sunucu bağlama adresi (yalnızca http taşıması için) | `127.0.0.1` |
  | `--port` | HTTP sunucu bağlantı noktası (yalnızca http taşıması için) | `8080` |

  ## Mimari

  Sunucu [rmcp](https://crates.io/crates/rmcp) çerçevesi (v0.10+) kullanılarak oluşturulmuş olup, MCP istemcileri (ör. Claude Desktop, IDE uzantıları) ve Wazuh MCP Server arasında iletişimi kolaylaştırır. Sunucu hem stdio hem de Akışlanabilir HTTP taşımalarını destekler ve güvenlik uyarılarını ve diğer verileri almak için Wazuh Indexer ve Wazuh Manager API'leri ile etkileşime girer.

  ```mermaid
  sequenceDiagram
      participant ClientApp as İstemci Uygulaması (ör. IDE Uzantısı / Claude Desktop)
      participant WazuhMCPServer as Wazuh MCP Server (bu uygulama)
      participant WazuhAPI as Wazuh API

      ClientApp->>+WazuhMCPServer: (stdio) MCP Initialize
      WazuhMCPServer-->>-ClientApp: (stdout) MCP Initialized
      
      ClientApp->>+WazuhMCPServer: (stdio) MCP Request (tools/list)
      WazuhMCPServer->>WazuhMCPServer: Parse MCP Request
      WazuhMCPServer->>WazuhMCPServer: Process internally
      WazuhMCPServer-->>-ClientApp: (stdout) MCP Response (available tools)
      
      ClientApp->>+WazuhMCPServer: (stdio) MCP Request (tools/call for wazuhAlerts)
      WazuhMCPServer->>WazuhMCPServer: Parse MCP Request
      WazuhMCPServer->>+WazuhAPI: Request Wazuh Alerts (with WAZUH_API_USERNAME, WAZUH_API_PASSWORD)
      WazuhAPI-->>-WazuhMCPServer: Wazuh Alert Data (JSON)
      WazuhMCPServer->>WazuhMCPServer: Transform Wazuh Alerts to MCP Format
      WazuhMCPServer-->>-ClientApp: (stdout) MCP Response (alerts)
  ```

  **Veri Akışı
---

# Wazuh MCP Server - Talk to your SIEM

A Rust-based server designed to bridge the gap between a Wazuh Security Information and Event Management (SIEM) system and applications requiring contextual security data, specifically tailored for the Claude Desktop Integration using the Model Context Protocol (MCP).

## Overview

Modern AI assistants like Claude can benefit significantly from real-time context about the user's security environment. The Wazuh MCP Server bridges this gap by providing comprehensive access to Wazuh SIEM data through natural language interactions.

This server transforms complex Wazuh API responses into MCP-compatible format, enabling AI assistants to access:

- **Security Alerts & Events** from the Wazuh Indexer for threat detection and incident response
- **Agent Management & Monitoring** including health status, system processes, and network ports
- **Vulnerability Assessment** data for risk management and patch prioritization  
- **Security Rules & Configuration** for detection optimization and compliance validation
- **System Statistics & Performance** metrics for operational monitoring and audit trails
- **Log Analysis & Forensics** capabilities for incident investigation and compliance reporting
- **Cluster Health & Management** for infrastructure reliability and availability requirements
- **Compliance Monitoring & Gap Analysis** for regulatory frameworks like PCI-DSS, HIPAA, SOX, and GDPR

Rather than requiring manual API calls or complex queries, security teams can now ask natural language questions like "Show me critical vulnerabilities on web servers," "What processes are running on agent 001?" or "Are we meeting PCI-DSS logging requirements?" and receive structured, actionable data from their Wazuh deployment.

This approach is particularly valuable for compliance teams who need to quickly assess security posture, identify gaps in monitoring coverage, validate rule effectiveness, and generate evidence for audit requirements across distributed infrastructure.

![](https://raw.githubusercontent.com/gbrigandi/mcp-server-wazuh/HEAD/media/wazuh-alerts-1.png)

## Example Use Cases

The Wazuh MCP Server provides direct access to Wazuh security data through natural language interactions, enabling several practical use cases:

### Security Alert Analysis
*   **Alert Triage and Investigation:** Query recent security alerts with `get_wazuh_alert_summary` to quickly identify and prioritize threats requiring immediate attention.
*   **Alert Pattern Recognition:** Analyze alert trends and patterns to identify recurring security issues or potential attack campaigns.

### Vulnerability Management
*   **Agent Vulnerability Assessment:** Use `get_wazuh_vulnerability_summary` and `get_wazuh_critical_vulnerabilities` to assess security posture of specific agents and prioritize patching efforts.
*   **Risk-Based Vulnerability Prioritization:** Correlate vulnerability data with agent criticality and exposure to focus remediation efforts.

### System Monitoring and Forensics
*   **Process Analysis:** Investigate running processes on agents using `get_wazuh_agent_processes` for threat hunting and system analysis.
*   **Network Security Assessment:** Monitor open ports and network services with `get_wazuh_agent_ports` to identify potential attack vectors.
*   **Agent Health Monitoring:** Track agent status and connectivity using `get_wazuh_running_agents` to ensure comprehensive security coverage.

### Security Operations Intelligence
*   **Rule Effectiveness Analysis:** Review and analyze security detection rules with `get_wazuh_rules_summary` to optimize detection capabilities.
*   **Manager Performance Monitoring:** Track system performance and statistics using tools like `get_wazuh_weekly_stats`, `get_wazuh_remoted_stats`, and `get_wazuh_log_collector_stats`.
*   **Cluster Health Management:** Monitor Wazuh cluster status with `get_wazuh_cluster_health` and `get_wazuh_cluster_nodes` for operational reliability.

### Incident Response and Forensics
*   **Log Analysis:** Search and analyze manager logs using `search_wazuh_manager_logs` and `get_wazuh_manager_error_logs` for incident investigation.
*   **Agent-Specific Investigation:** Combine multiple tools to build comprehensive profiles of specific agents during security incidents.
*   **Natural Language Security Queries:** Ask complex security questions in natural language and receive structured data from multiple Wazuh components.

### Operational Efficiency
*   **Automated Reporting:** Generate security reports and summaries through conversational interfaces without manual API calls.
*   **Cross-Component Analysis:** Correlate data from both Wazuh Indexer (alerts) and Wazuh Manager (agents, rules, vulnerabilities) for comprehensive security insights.
*   **Multilingual Security Operations:** Access Wazuh data and receive insights in multiple languages for global security teams.

### Threat Intelligence Gathering and Response

For enhanced threat intelligence and incident response capabilities, the Wazuh MCP Server can be combined with complementary security MCP servers:

| Server | Description |
|--------|-------------|
| **[Cortex MCP Server](https://github.com/gbrigandi/mcp-server-cortex/)** | Artifact analysis and IOC enrichment via 140+ analyzers |
| **[TheHive MCP Server](https://github.com/gbrigandi/mcp-server-thehive/)** | Case management and incident response orchestration |
| **[MISP MCP Server](https://github.com/gbrigandi/mcp-server-misp/)** | Threat intelligence sharing and IOC lookup |

**Enhanced Capabilities with Cortex Integration:**
*   **Artifact Analysis:** Automatically analyze suspicious files, URLs, domains, and IP addresses found in Wazuh alerts using Cortex's 140+ analyzers
*   **IOC Enrichment:** Enrich indicators of compromise (IOCs) from Wazuh alerts with threat intelligence from multiple sources including VirusTotal, Shodan, MISP, and more
*   **Automated Threat Hunting:** Combine Wazuh's detection capabilities with Cortex's analysis engines to automatically investigate and classify threats
*   **Multi-Source Intelligence:** Leverage analyzers for reputation checks, malware analysis, domain analysis, and behavioral analysis
*   **Response Orchestration:** Use analysis results to inform automated response actions and alert prioritization

**Enhanced Capabilities with TheHive Integration:**
*   **Case Creation:** Automatically create cases in TheHive from Wazuh alerts for structured incident tracking
*   **Alert Correlation:** Link related Wazuh alerts to existing cases for comprehensive incident timelines
*   **Task Management:** Create and track investigation tasks based on alert severity and type
*   **Observable Management:** Extract and manage IOCs as observables within case investigations
*   **Collaboration:** Enable security team collaboration on incidents detected by Wazuh

**Enhanced Capabilities with MISP Integration:**
*   **IOC Lookup:** Check if indicators from Wazuh alerts are known in your threat intelligence database
*   **Threat Context:** Retrieve event context, threat actor attribution, and MITRE ATT&CK mappings for IOCs
*   **False Positive Reduction:** Validate IOCs against MISP warninglists to reduce false positives
*   **Sighting Tracking:** Record and query sighting history to assess IOC prevalence
*   **Galaxy Exploration:** Access threat actor profiles, malware families, and attack patterns

**Example Workflow:**
1. Wazuh detects a suspicious file hash or network connection in an alert
2. The AI assistant queries the MISP MCP Server to check if the IOC is known in threat intelligence
3. If unknown, the Cortex MCP Server analyzes the artifact using multiple analyzers
4. Results from VirusTotal, hybrid analysis, domain reputation, and other sources are correlated
5. A case is created in TheHive via the TheHive MCP Server to track the investigation
6. The combined intelligence provides context for incident response decisions
7. Findings can be used to update Wazuh rules or trigger additional monitoring

## Requirements

-   An MCP (Model Context Protocol) compatible LLM client (e.g., Claude Desktop)
-   A running Wazuh server (v4.12 recommended) with the API enabled and accessible.
-   Network connectivity between this server and the Wazuh API (if API interaction is used).

## Installation

### Option 1: Download Pre-built Binary (Recommended)

1.  **Download the Binary:**
    *   Go to the [Releases page](https://github.com/gbrigandi/mcp-server-wazuh/releases) of the `mcp-server-wazuh` GitHub repository.
    *   Download the appropriate binary for your operating system (e.g., `mcp-server-wazuh-linux-amd64`, `mcp-server-wazuh-macos-amd64`, `mcp-server-wazuh-macos-arm64`, `mcp-server-wazuh-windows-amd64.exe`).
    *   Make the downloaded binary executable (e.g., `chmod +x mcp-server-wazuh-linux-amd64`).
    *   (Optional) Rename it to something simpler like `mcp-server-wazuh` and move it to a directory in your system's `PATH` for easier access.

### Option 2: Docker 

1.  **Pull the Docker Image:**
    ```bash
    docker pull ghcr.io/gbrigandi/mcp-server-wazuh:latest
    ```

### Option 3: Build from Source

1.  **Prerequisites:**
    *   Install Rust: [https://www.rust-lang.org/tools/install](https://www.rust-lang.org/tools/install)

2.  **Build:**
    ```bash
    git clone https://github.com/gbrigandi/mcp-server-wazuh.git
    cd mcp-server-wazuh

    # Build with stdio transport only (default)
    cargo build --release

    # Build with HTTP transport support
    cargo build --release --features http
    ```
    The binary will be available at `target/release/mcp-server-wazuh`.

### Configure Your LLM Client

The method for configuring your LLM client will vary depending on the client itself. For clients that support MCP (Model Context Protocol), you will typically need to point the client to the path of the `mcp-server-wazuh` executable.

**Example for Claude Desktop:**

Configure your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "wazuh": {
      "command": "/path/to/mcp-server-wazuh",
      "args": [],
      "env": {
        "WAZUH_API_HOST": "your_wazuh_manager_api_host",
        "WAZUH_API_PORT": "55000",
        "WAZUH_API_USERNAME": "your_wazuh_api_user",
        "WAZUH_API_PASSWORD": "your_wazuh_api_password",
        "WAZUH_INDEXER_HOST": "your_wazuh_indexer_host",
        "WAZUH_INDEXER_PORT": "9200",
        "WAZUH_INDEXER_USERNAME": "your_wazuh_indexer_user",
        "WAZUH_INDEXER_PASSWORD": "your_wazuh_indexer_password",
        "WAZUH_VERIFY_SSL": "false",
        "WAZUH_TEST_PROTOCOL": "https",
        "RUST_LOG": "info"
      }
    }
  }
}
```

Replace `/path/to/mcp-server-wazuh` with the actual path to your binary and configure the environment variables as detailed in the [Configuration](#configuration) section.

Once configured, your LLM client should be able to launch and communicate with the `mcp-server-wazuh` to access Wazuh security data.

If using Docker, create a `.env` file with your Wazuh configuration:
    
```bash
WAZUH_API_HOST=your_wazuh_manager_api_host
WAZUH_API_PORT=55000
WAZUH_API_USERNAME=your_wazuh_api_user
WAZUH_API_PASSWORD=your_wazuh_api_password
WAZUH_INDEXER_HOST=your_wazuh_indexer_host
WAZUH_INDEXER_PORT=9200
WAZUH_INDEXER_USERNAME=your_wazuh_indexer_user
WAZUH_INDEXER_PASSWORD=your_wazuh_indexer_password
WAZUH_VERIFY_SSL=false
WAZUH_TEST_PROTOCOL=https
RUST_LOG=info
```

Configure your `claude_desktop_config.json` file:

```
{
  "mcpServers": {
    "wazuh": {
      "command": "docker",
      "args": [
        "run", "--rm", "-i",
        "--env-file", "/path/to/your/.env",
        "ghcr.io/gbrigandi/mcp-server-wazuh:latest"
      ]
    }
  }
}
```

## Configuration

Configuration is managed through environment variables. A `.env` file can be placed in the project root for local development.

| Variable                 | Description                                                                    | Default     | Required |
| ------------------------ | ------------------------------------------------------------------------------ | ----------- | -------- |
| `WAZUH_API_HOST`         | Hostname or IP address of the Wazuh Manager API server.                        | `localhost` | Yes      |
| `WAZUH_API_PORT`         | Port number for the Wazuh Manager API.                                         | `55000`     | Yes      |
| `WAZUH_API_USERNAME`     | Username for Wazuh Manager API authentication.                                 | `wazuh`     | Yes      |
| `WAZUH_API_PASSWORD`     | Password for Wazuh Manager API authentication.                                 | `wazuh`     | Yes      |
| `WAZUH_INDEXER_HOST`     | Hostname or IP address of the Wazuh Indexer API server.                        | `localhost` | Yes      |
| `WAZUH_INDEXER_PORT`     | Port number for the Wazuh Indexer API.                                         | `9200`      | Yes      |
| `WAZUH_INDEXER_USERNAME` | Username for Wazuh Indexer API authentication.                                 | `admin`     | Yes      |
| `WAZUH_INDEXER_PASSWORD` | Password for Wazuh Indexer API authentication.                                 | `admin`     | Yes      |
| `WAZUH_VERIFY_SSL`       | Set to `true` to verify SSL certificates for Wazuh API and Indexer connections.  | `false`     | No       |
| `WAZUH_TEST_PROTOCOL`    | Protocol for Wazuh connections (e.g., "http", "https"). Overrides client default. | `https`     | No       |
| `RUST_LOG`               | Log level (e.g., `info`, `debug`, `trace`).                                    | `info`      | No       |

**Note on `WAZUH_VERIFY_SSL`:** For production environments, it is strongly recommended to set `WAZUH_VERIFY_SSL=true` and ensure proper certificate validation for both Wazuh Manager API and Wazuh Indexer connections. Setting it to `false` disables certificate checks, which is insecure.
The "Required: Yes" indicates that these variables are essential for the server to connect to the respective Wazuh components. While defaults are provided, they are unlikely to match a production or non-local setup.

## Building

### Prerequisites

-   Install Rust: [https://www.rust-lang.org/tools/install](https://www.rust-lang.org/tools/install)
-   Install Docker and Docker Compose (optional, for containerized deployment): [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

### Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/gbrigandi/mcp-server-wazuh.git 
    cd mcp-server-wazuh
    ```
2.  **Configure (if using Wazuh API):**
    -   Copy the example environment file: `cp .env.example .env`
    -   Edit the `.env` file with your specific Wazuh API details (e.g. `WAZUH_API_HOST`, `WAZUH_API_PORT`).
3.  **Build:**
    ```bash
    # Build with default features (stdio transport only)
    cargo build

    # Build with HTTP transport support
    cargo build --features http
    ```
4.  **Run:**
    ```bash
    # Run with stdio transport (default)
    cargo run

    # Run with HTTP transport (requires --features http during build)
    cargo run --features http -- --transport http

    # Or use the run script (which might set up stdio mode):
    # ./run.sh
    ```

## Transport Modes

The Wazuh MCP Server supports two transport modes for communication with MCP clients:

### stdio Transport (Default)

The stdio transport is the default mode, ideal for local integrations where the MCP client launches the server as a child process. Communication occurs via stdin/stdout using JSON-RPC 2.0 messages.

```bash
# Run with stdio transport (default)
mcp-server-wazuh

# Explicit stdio transport
mcp-server-wazuh --transport stdio
```

### Streamable HTTP Transport

The HTTP transport enables remote server deployment, allowing MCP clients to connect over the network. This mode implements the MCP Streamable HTTP specification with Server-Sent Events (SSE) support.

```bash
# Run with HTTP transport on default address (127.0.0.1:8080)
mcp-server-wazuh --transport http

# Run with custom host and port
mcp-server-wazuh --transport http --host 0.0.0.0 --port 3000
```

**HTTP Transport Features:**
- Single `/mcp` endpoint for all MCP communication
- POST requests with JSON-RPC messages
- Server-Sent Events (SSE) for streaming responses
- Session management with `MCP-Session-Id` header
- Protocol version: `2025-06-18` (MCP spec supported by rmcp 0.10)

**Security Note:** By default, HTTP transport binds to `127.0.0.1` (localhost only). When binding to `0.0.0.0` for remote access, ensure proper network security measures (firewall rules, reverse proxy with TLS, etc.) are in place.

### CLI Arguments

| Argument | Description | Default |
|----------|-------------|---------|
| `--transport` | Transport mode: `stdio` or `http` | `stdio` |
| `--host` | HTTP server bind address (only for http transport) | `127.0.0.1` |
| `--port` | HTTP server port (only for http transport) | `8080` |

## Architecture

The server is built using the [rmcp](https://crates.io/crates/rmcp) framework (v0.10+) and facilitates communication between MCP clients (e.g., Claude Desktop, IDE extensions) and the Wazuh MCP Server. The server supports both stdio and Streamable HTTP transports and interacts with the Wazuh Indexer and Wazuh Manager APIs to fetch security alerts and other data.

```mermaid
sequenceDiagram
    participant ClientApp as Client Application (e.g., IDE Extension / Claude Desktop)
    participant WazuhMCPServer as Wazuh MCP Server (this application)
    participant WazuhAPI as Wazuh API

    ClientApp->>+WazuhMCPServer: (stdio) MCP Initialize
    WazuhMCPServer-->>-ClientApp: (stdout) MCP Initialized
    
    ClientApp->>+WazuhMCPServer: (stdio) MCP Request (tools/list)
    WazuhMCPServer->>WazuhMCPServer: Parse MCP Request
    WazuhMCPServer->>WazuhMCPServer: Process internally
    WazuhMCPServer-->>-ClientApp: (stdout) MCP Response (available tools)
    
    ClientApp->>+WazuhMCPServer: (stdio) MCP Request (tools/call for wazuhAlerts)
    WazuhMCPServer->>WazuhMCPServer: Parse MCP Request
    WazuhMCPServer->>+WazuhAPI: Request Wazuh Alerts (with WAZUH_API_USERNAME, WAZUH_API_PASSWORD)
    WazuhAPI-->>-WazuhMCPServer: Wazuh Alert Data (JSON)
    WazuhMCPServer->>WazuhMCPServer: Transform Wazuh Alerts to MCP Format
    WazuhMCPServer-->>-ClientApp: (stdout) MCP Response (alerts)
```

**Data Flow (stdio focus):**

1.  An application (e.g., an IDE extension, a CLI tool) launches the Wazuh MCP Server as a child process.
2.  The application sends MCP-formatted requests (commands) to the server's `stdin`.
3.  The Wazuh MCP Server reads the command from `stdin`.
4.  **Processing:**
    *   The server parses the MCP command.
    *   If the command requires fetching data from Wazuh (e.g., "get latest alerts"):
        *   The server connects to the Wazuh API (authenticating if necessary using configured credentials like `WAZUH_API_USERNAME`, `WAZUH_API_PASSWORD`).
        *   It fetches the required data (e.g., security alerts).
        *   The server's transformation logic processes each alert, mapping Wazuh fields to MCP format.
    *   If the command is internal (e.g., a status check specific to the MCP server), it processes it directly.
5.  The server sends an MCP-formatted JSON response (e.g., transformed alerts, command acknowledgment, or error messages) to the application via its `stdout`.
6.  The application reads and processes the MCP response from the server's `stdout`.

This stdio interaction allows for tight integration with local development tools or other applications that can manage child processes. An optional HTTP endpoint (`/mcp`) may also be available for clients that prefer polling.


The server communicates via `stdin` and `stdout` using JSON-RPC 2.0 messages, adhering to the Model Context Protocol (MCP).

Example interaction flow:

1.  **Client Application (e.g., IDE extension) starts the `mcp-server-wazuh` process.**

2.  **Client sends `initialize` request to server's `stdin`:**
    ```json
    {
      "jsonrpc": "2.0",
      "id": 0,
      "method": "initialize",
      "params": {
        "protocolVersion": "2025-06-18",
        "capabilities": {
          "sampling": {},
          "roots": { "listChanged": true }
        },
        "clientInfo": {
          "name": "mcp-inspector",
          "version": "0.11.0"
        }
      }
    }
    ```

3.  **Server sends `initialize` response to client via `stdout`:**
    ```json
    {
      "jsonrpc": "2.0",
      "id": 1,
      "result": {
        "protocolVersion": "2025-06-18",
        "capabilities": {
          "prompts": {},
          "resources": {},
          "tools": {}
        },
        "serverInfo": {
          "name": "mcp-server-wazuh",
          "version": "0.3.0"
        },
        "instructions": "This server provides tools to interact with a Wazuh SIEM instance for security monitoring and analysis.\nAvailable tools:\n- 'get_wazuh_alert_summary': Retrieves a summary of Wazuh security alerts. Optionally takes 'limit' parameter to control the number of alerts returned (defaults to 100)."
      }
    }
    ```

4.  **Client sends `notifications/initialized` to server's `stdin`:**
    (This is a notification, so `id` is omitted by the client.)
    ```json
    {
      "jsonrpc": "2.0",
      "method": "notifications/initialized"
    }
    ```

5.  **Client requests available tools by sending `tools/list` to server's `stdin`:**
    ```json
    {
      "jsonrpc": "2.0",
      "id": 1,
      "method": "tools/list",
      "params": {}
    }
    ```

6.  **Server responds with the list of tools to client via `stdout`:**
    ```json
    {
      "jsonrpc": "2.0",
      "id": 2,
      "result": {
        "tools": [
          {
            "name": "get_wazuh_alert_summary",
            "description": "Retrieves a summary of Wazuh security alerts. Returns formatted alert information including ID, timestamp, and description.",
            "inputSchema": {
              "$schema": "http://json-schema.org/draft-07/schema#",
              "properties": {
                "limit": {
                  "description": "Maximum number of alerts to retrieve (default: 100)",
                  "format": "uint32",
                  "minimum": 0.0,
                  "type": ["integer", "null"]
                }
              },
              "title": "GetAlertSummaryParams",
              "type": "object"
            }
          }
        ]
      }
    }
    ```

7.  **Client calls the `get_wazuh_alert_summary` tool by sending `tools/call` to server's `stdin`:**
    ```json
    {
      "jsonrpc": "2.0",
      "id": 3,
      "method": "tools/call",
      "params": {
        "name": "get_wazuh_alert_summary",
        "arguments": {
          "limit": 5
        }
      }
    }
    ```

8.  **Server receives on `stdin`, processes the `get_wazuh_alert_summary` call (which involves querying the Wazuh Indexer API and transforming the data).**

9.  **Server sends `tools/call` response with formatted alerts to client via `stdout`:**
    ```json
    {
      "jsonrpc": "2.0",
      "id": 3,
      "result": {
        "content": [
          {
            "type": "text",
            "text": "Alert ID: 1747091815.1212763\nTime: 2024-01-15T10:30:45.123Z\nAgent: web-server-01\nLevel: 7\nDescription: Attached USB Storage"
          },
          {
            "type": "text", 
            "text": "Alert ID: 1747066333.1207112\nTime: 2024-01-15T10:25:12.456Z\nAgent: database-server\nLevel: 5\nDescription: New dpkg (Debian Package) installed."
          }
        ],
        "isError": false
      }
    }
    ```

    **Or, if no alerts are found:**
    ```json
    {
      "jsonrpc": "2.0",
      "id": 3,
      "result": {
        "content": [
          {
            "type": "text",
            "text": "No Wazuh alerts found."
          }
        ],
        "isError": false
      }
    }
    ```

    **Or, if there's an error connecting to Wazuh:**
    ```json
    {
      "jsonrpc": "2.0",
      "id": 3,
      "result": {
        "content": [
          {
            "type": "text",
            "text": "Error retrieving alerts from Wazuh: HTTP request error: connection refused"
          }
        ],
        "isError": true
      }
    }
    ```

## Development & Testing

-   **Code Style:** Uses standard Rust formatting (`cargo fmt`).
-   **Linting:** Uses Clippy (`cargo clippy`).
-   **Testing:** Contains unit tests for transformation logic and integration tests. For stdio, tests might involve piping input/output to a test harness. For HTTP, tests use a mock Wazuh API server (`httpmock`) and a test MCP client.
    ```bash
    # Run all tests
    cargo test

    # Run specific integration test (example for HTTP tests)
    # cargo test --test integration_test

    # Run tests with detailed logging
    RUST_LOG=debug cargo test
    ```
-   See `tests/README.md` for more details on running tests and using the test client CLI.

## License

This project is licensed under the [MIT License](LICENSE).
