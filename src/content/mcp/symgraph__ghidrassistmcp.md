---
name: "symgraph/GhidrAssistMCP"
description: "A native Model Context Protocol server for Ghidra. Includes GUI configuration and logging, 31 powerful tools and no external dependencies."
category: "Security"
repo: "symgraph/GhidrAssistMCP"
stars: 628
url: "https://github.com/symgraph/GhidrAssistMCP"
body_length: 25206
license: "MIT"
language: "Java"
body_tr: |-
  # GhidrAssistMCP

  Ghidra'nın ters mühendislik yeteneklerini standardlaştırılmış bir API aracılığıyla yapay zeka asistanları ve diğer araçlarla etkileşime izin veren, MCP (Model Context Protocol) sunucusu sağlayan güçlü bir Ghidra uzantısı.

  ## Genel Bakış

  GhidrAssistMCP, yapay zeka tarafından desteklenen analiz araçları ile Ghidra'nın kapsamlı ters mühendislik platformu arasındaki boşluğu kapatır. Model Context Protocol'u uygulayarak, bu uzantı harici yapay zeka asistanlarının, otomatik analiz araçlarının ve özel komut dosyalarının Ghidra'nın analiz yetenekleriyle sorunsuz bir şekilde etkileşim kurmasını sağlar.

  ### Temel Özellikler

  - **MCP Sunucu Entegrasyonu**: Resmi SDK kullanan tam Model Context Protocol sunucu uygulaması
  - **Çift HTTP Taşıma**: Maksimum istemci uyumluluğu için SSE ve Streamable HTTP taşımalarını destekler
  - **38 Yerleşik Araç**: Daha temiz API'ler için eylem tabanlı konsolidasyonlu kapsamlı analiz araç seti
  - **6 MCP Kaynağı**: Program bilgisi, işlevler, dizeler, ithalatlar, ihraçlar ve segmentler için statik veri kaynakları
  - **7 MCP İstemi**: Yaygın ters mühendislik görevleri için önceden oluşturulmuş analiz istekleri
  - **Sonuç Önbelleği**: Tekrarlanan sorgular için performansı iyileştiren akıllı önbelleğe alma sistemi
  - **Async Görev Desteği**: Uzun süren işlemler görev yönetimiyle asenkron olarak yürütülür
  - **Multi-Program Desteği**: `program_name` parametresi kullanarak birden fazla açık program ile aynı anda çalışın
  - **Multi-Window Desteği**: Akıllı odak takibi ile tüm CodeBrowser pencereleri arasında paylaşılan tek MCP sunucusu
  - **Aktif Bağlam Farkındalığı**: Hangi ikili pencerenin odakta olduğunun otomatik algılanması, tüm araç yanıtlarında bağlam ipuçları
  - **Yapılandırılabilir Kullanıcı Arayüzü**: Araçları yönetmek ve aktiviteyi izlemek için kullanımı kolay arayüz
  - **Gerçek Zamanlı Günlükleme**: Tüm MCP isteklerini ve yanıtlarını detaylı günlükleme ile izleyin
  - **Dinamik Araç Yönetimi**: Araçları kalıcı ayarlarla bireysel olarak etkinleştirin/devre dışı bırakın

  ## İstemciler

  Utanmaz öz-tanıtım: [GhidrAssist](https://github.com/jtang613/GhidrAssist) GhidrAssistMCP'yi kutusundan çıkar çıkmaz destekler.

  ## Ekran Görüntüleri

  ![Screenshot](https://github.com/jtang613/GhidrAssistMCP/blob/master/res/Screenshot1.png)
  ![Screenshot](https://github.com/jtang613/GhidrAssistMCP/blob/master/res/Screenshot2.png)

  ## Kurulum

  ### Ön Koşullar

  - **Ghidra 11.4+** (Ghidra 12.0 Public ile test edilmiştir)
  - **Bir MCP İstemcisi (GhidrAssist gibi)**

  ### İkili Sürüm (Önerilir)

  1. **En son sürümü indirin**:
     - [Sürümler sayfasına](https://github.com/jtang613/GhidrAssistMCP/releases) gidin
     - En son `.zip` dosyasını indirin (örneğin, `GhidrAssistMCP-v1.0.0.zip`)

  2. **Uzantıyı kurun**:
     - Ghidra'da: **File → Install Extensions → Add Extension**
     - İndirilen ZIP dosyasını seçin
     - İstendiğinde Ghidra'yı yeniden başlatın

  3. **Plugin'i etkinleştirin**:
     - **File → Configure → Configure Plugins**
     - "GhidrAssistMCP" için arama yapın
     - Plugin'i etkinleştirmek için kutuyu işaretleyin

  ### Kaynaktan Derleme

  1. **Depoyu klonlayın**:

     ```bash
     git clone <repository-url>
     cd GhidrAssistMCP
     ```

  2. **Gradle'ı Ghidra kurulumunuza işaret edin**:
     - `GHIDRA_INSTALL_DIR`'i ayarlayın (ortam değişkeni) veya Gradle'ı çalıştırırken `-PGHIDRA_INSTALL_DIR=<path>` geçin.

  3. **Derleme + kurulum**:

     Ghidra'nın çalışmadığından emin olun ve şunu çalıştırın:

     ```bash
     gradle installExtension
     ```

     Bu, derlenmiş ZIP'i Ghidra kurulumunuza (`[GHIDRA_INSTALL_DIR]/Extensions/Ghidra`) kopyalar ve Ghidra **kullanıcı** Extensions klasörüne çıkarır (mevcut çıkarılmış kopyayı değiştirir).

     Bu konumu geçersiz kılmanız gerekirse, `-PGHIDRA_USER_EXTENSIONS_DIR=<path>` geçin.

  4. **Yeniden başlat / doğrula**:
     - Ghidra'yı yeniden başlatın.
     - Plugin görünmezse, **File → Configure → Configure Plugins** aracılığıyla etkinleştirin ("GhidrAssistMCP" araması yapın).

  ## Yapılandırma

  ### İlk Kurulum

  1. **Kontrol Panelini açın**:
     - Window → GhidrAssistMCP (veya araç çubuğu simgesini kullanın)

  2. **Sunucu Ayarlarını yapılandırın**:
     - **Host**: Varsayılan `localhost`
     - **Port**: Varsayılan `8080`
     - **Enable/Disable**: MCP sunucusunu aç/kapat

  ### Araç Yönetimi

  Yapılandırma sekmesi şunları yapmanızı sağlar:

  - **Mevcut tüm araçları görüntüleyin** (toplam 38)
  - **Checkboxları kullanarak bireysel araçları etkinleştirin/devre dışı bırakın**
  - **Yapılandırmayı kaydedin** oturumlar arasında kalıcı hale getirmek için
  - **Araç durumunu izleyin** gerçek zamanlı olarak

  ## Headless Modu Hızlı Başlangıç

  GhidrAssistMCP, Ghidra'nın `analyzeHeadless` başlatıcısından da başlatılabilir. Bu, CodeBrowser UI'sini açmadan headless Ghidra'da yüklü bir programa MCP erişimi istediğinizde kullanışlıdır.

  Önce, Ghidra'nın derlenmiş sınıfları ve paketlenmiş bağımlılıkları yükleyebilmesi için uzantıyı derleyin ve kurun:

  ```bash
  cd /path/to/GhidrAssistMCP

  export GHIDRA_INSTALL_DIR=/path/to/ghidra_12.0_PUBLIC
  gradle installExtension
  ```

  Ghidra kurulumunuz ve çıkarılan kullanıcı uzantısı için yolları ayarlayın. Linux'ta, Ghidra kullanıcı uzantıları genellikle `~/.config/ghidra/<ghidra_profile>/Extensions` altında bulunur:

  ```bash
  export GHIDRA_INSTALL_DIR=/path/to/ghidra_12.0_PUBLIC
  export GHIDRA_USER_EXTENSIONS_DIR="$HOME/.config/ghidra/ghidra_12.0_PUBLIC/Extensions"
  export GHIDRASSISTMCP_EXT="$GHIDRA_USER_EXTENSIONS_DIR/GhidrAssistMCP"
  ```

  Bir ikiliyi import edin ve MCP sunucusunu headless ön-script olarak başlatın:

  ```bash
  "$GHIDRA_INSTALL_DIR/support/analyzeHeadless" /tmp/ghidra-projects McpHeadless \
    -import /path/to/binary \
    -scriptPath "$GHIDRASSISTMCP_EXT/ghidra_scripts" \
    -preScript GAMCPStartServerScript.java "host=127.0.0.1" "port=8080"
  ```

  Projeye zaten import edilmiş bir ikili için `-process` yerine kullanın:

  ```bash
  "$GHIDRA_INSTALL_DIR/support/analyzeHeadless" /tmp/ghidra-projects McpHeadless \
    -process binary_name \
    -scriptPath "$GHIDRASSISTMCP_EXT/ghidra_scripts" \
    -preScript GAMCPStartServerScript.java "host=127.0.0.1" "port=8080"
  ```

  MCP istemcileri şuraya bağlanabilir:

  ```text
  SSE:             http://127.0.0.1:8080/sse
  SSE messages:    http://127.0.0.1:8080/message
  Streamable HTTP: http://127.0.0.1:8080/mcp
  ```

  Headless MCP sunucusu `analyzeHeadless` JVM'si içinde çalışır ve yüklenen `currentProgram`'ı kullanır. İstemciler bağlandığı sürece bu işlemi canlı tutun; `analyzeHeadless` çıktığında MCP sunucusu da onunla çıkar.

  ## Mevcut Araçlar

  GhidrAssistMCP, kategorilere ayrılan 38 araç sağlar. Birkaç araç, tek bir aracın ilgili birden fazla işlem sağladığı eylem tabanlı API deseni kullanır.

  ### İkili ve Program Yönetimi

  | Araç | Açıklama |
  | ---- | ----------- |
  | `get_binary_info` | Temel program bilgisini alın (ad, mimari, derleyici, vb.) |
  | `list_binaries` | Tüm CodeBrowser pencereleri arasında açık tüm programları listeleyin |
  | `assemble_code` | Bir adresteki yönerge metnini derleyin ve isteğe bağlı olarak program belleğine yamalayın |
  | `patch_bytes` | Verilen bir adresteki program belleğine ham baytlar yamalayın |
  | `export_program` | Mevcut programı diske dışa aktarın (`binary` veya `original_file`) *(varsayılan olarak devre dışı)* |

  > **Güvenliğe duyarlı araçlar:** `import_file` ve `export_program` ana bilgisayar dosya sistemiolarak etkileşim kurduğundan varsayılan olarak devre dışıdır. Gerektiğinde bunları plugin yapılandırması UI'sinde açıkça etkinleştirin.

  ### İşlev Bulma ve Analizi

  | Araç | Açıklama |
  | ---- | ----------- |
  | `get_functions` | İşlevleri isteğe bağlı desen filtreleme ve pagination ile listeleyin |
  | `search_functions_by_name` | İşlevleri ad desenine göre bulun |
  | `get_function_statistics` | Tüm işlevler için kapsamlı istatistikler |
  | `analyze_function` | Ayrıntılı işlev bilgisini alın (imza, değişkenler, vb.) |
  | `get_current_function` | Mevcut imleç konumundaki işlevi alın |
  | `get_function_stack_layout` | Değişken ofsetleri ile stack frame düzenini alın |
  | `get_basic_blocks` | Bir işlev için temel blok bilgisini alın |

  ### İkili Bilgisi

  | Araç | Açıklama |
  | ---- | ----------- |
  | `get_imports` | İçe aktarılan işlevleri/sembolleri listeleyin |
  | `get_exports` | Dışa aktarılan işlevleri/sembolleri listeleyin |
  | `get_strings` | Dize başvurularını isteğe bağlı filtreleme ile listeleyin |
  | `search_strings` | Dizeleri desene göre arayın |
  | `get_segments` | Bellek segmentlerini listeleyin |
  | `get_namespaces` | Programdaki ad alanlarını listeleyin |
  | `get_relocations` | Yeniden konum girdilerini listeleyin |
  | `get_entry_points` | Tüm ikili giriş noktalarını listeleyin |

  ### Veri Analizi

  | Araç | Açıklama |
  | ---- | ----------- |
  | `get_data_vars` | Programdaki veri tanımlarını listeleyin |
  | `get_data_at` | Belirli bir adresteki hexdump/veriyi alın |
  | `create_data_var` | Adreslerde veri değişkenleri tanımlayın |
  | `get_current_address` | Mevcut imleç adresini alın |

  ### Konsolide Araçlar

  Bu araçlar, ilgili işlemleri bir ayrıştırıcı parametrenin arkasında birleştirir (örneğin, `action`, `target`, `target_type` veya `format`).

  #### `get_code` - Kod Alma Aracı

  | Parametre | Değerler | Açıklama |
  | --------- | ------ | ----------- |
  | `format` | `decompiler`, `disassembly`, `pcode` | Çıktı formatı |
  | `raw` | boolean | Yalnızca `format: "pcode"`'u etkiler (ham pcode işlemleri vs temel bloklar tarafından gruplandırılmış) |

  #### `classes` - Sınıf İşlemleri Aracı

  | İşlem | Açıklama |
  | ------ | ----------- |
  | `list` | Sınıfları isteğe bağlı desen filtreleme ve pagination ile listeleyin |
  | `get_info` | Ayrıntılı sınıf bilgisini alın (yöntemler, alanlar, vtablolar, sanal işlevler) |

  #### `xrefs` - Çapraz Başvuru Aracı

  | Parametre | Açıklama |
  | --------- | ----------- |
  | `address` | Belirli bir adrese/adresinden tüm başvuruları bulun |
  | `function` | Bir işlev için tüm çapraz başvuruları bulun |
  | `include_calls` | Çağıranları/çağrılanları dahil edin (ayrı çağrı grafiği aracını değiştirir) |

  #### `struct` - Yapı İşlemleri Aracı

  | İşlem | Açıklama |
  | ------ | ----------- |
  | `create` | C tanımından veya boştan yeni bir yapı oluşturun |
  | `modify` | Varolan bir yapıyı yeni C tanımı ile değiştirin |
  | `merge` | C tanımından alanları varolan bir yapının üzerine birleştirin (overlay) - mevcut alanları silmezsin |
  | `set_field` | Tam bir C yapısına ihtiyaç duymadan belirli bir ofset adresinde tek bir alan ayarlayın/ekleyin |
  | `name_gap` | Bir ofset/uzunluk adresindeki tanımlanmamış baytları adlandırılmış `byte[]` benzeri bir alana dönüştürün ("boşlukları adlandırma" için yararlı) |
  | `auto_create` | Değişken kullanım desenleri aracılığıyla yapıyı otomatik olarak oluşturun |
  | `rename_field` | Bir yapı içindeki bir alanı yeniden adlandırın |
  | `field_xrefs` | Belirli bir yapı alanına çapraz başvuruları bulun |

  #### `rename_symbol` - Sembol Yeniden Adlandırma Aracı

  | Parametre | Değerler | Açıklama |
  | --------- | ------ | ----------- |
  | `target_type` | `function`, `data`, `variable` | Ne tür sembolün yeniden adlandırılacağı |

  #### `batch_rename` - Toplu Sembol Yeniden Adlandırma Aracı

  Birden fazla sembolü tek işlemde yeniden adlandırın.

  #### `comments` - Yorum Yönetimi Aracı

  | İşlem | Açıklama |
  | ------ | ----------- |
  | `get` | Bir adreste yorumu alın |
  | `set` | Bir adrese veya işleve yorum ayarlayın |
  | `list` | Tüm yorumları listeleyin |
  | `remove` | Yorumu kaldırın |

  #### `variables` - Değişken Yönetimi Aracı

  | İşlem | Açıklama |
  | ------ | ----------- |
  | `list` | Bir işlev için yerel değişkenleri listeleyin |
  | `rename` | Yerel bir değişkeni veya `scope` kullanarak genel/veri sembolünü yeniden adlandırın |
  | `set_type` | Yerel bir değişken için veri türü ayarlayın |
  | `set_prototype` | İşlev imzası/prototipi ayarlayın |

  #### `types` - Tür Yönetimi Aracı

  | İşlem | Açıklama |
  | ------ | ----------- |
  | `list` | Tüm mevcut veri türlerini listeleyin |
  | `get_info` | Ayrıntılı veri türü bilgisini ve yapı tanımlarını alın |
  | `set` | Belirli bir adres adresinde veri türü ayarlayın |
  | `delete` | Veri türünü ada göre silin (isteğe bağlı olarak `category` tarafından kapsamlandırılmış) |

  #### `bookmarks` - Yer İşareti Yönetimi Aracı

  | İşlem | Açıklama |
  | ------ | ----------- |
  | `list` | Tüm yer işaretlerini listeleyin |
  | `set` | Yeni bir yer işareti ayarlayın |
  | `remove` | Yer işaretini kaldırın |

  ### Arama Araçları

  | Araç | Açıklama |
  | ----- | ----------- |
  | `search_bytes` | Bellekte bayt desenleri arayın |

  ### Async Görev Yönetimi

  Uzun süren işlemler (decompilation, yapı analizi, alan xrefs) asenkron olarak yürütülür:

  | Araç | Açıklama |
  | ---- | ----------- |
  | `get_task_status` | Async görevlerin durumunu kontrol edin ve sonuçları alın |
  | `cancel_task` | Çalışan bir async görevi iptal edin |
  | `list_tasks` | Tüm beklemede/çalışan/tamamlanmış görevleri listeleyin |

  ## MCP Kaynakları

  GhidrAssistMCP, MCP istemcileri tarafından okunabilen 6 statik kaynak ortaya koyar:

  | Kaynak URI | Açıklama |
  | ------------ | ----------- |
  | `ghidra://program/{name}/info` | Temel program bilgisi |
  | `ghidra://program/{name}/functions` | Tüm işlevlerin listesi |
  | `ghidra://program/{name}/strings` | Dize başvuruları |
  | `ghidra://program/{name}/imports` | İçe aktarılan semboller |
  | `ghidra://program/{name}/exports` | Dışa aktarılan semboller |
  | `ghidra://program/{name}/segments` | Bellek segmentleri |

  ## MCP İstekleri

  Yaygın analiz görevleri için önceden oluşturulmuş istekler:

  | İstem | Açıklama |
  | ------ | ----------- |
  | `analyze_function` | Kapsamlı işlev analizi istemi |
  | `identify_vulnerability` | Güvenlik açığı tanımlaması |
  | `document_function` | İşlev belgelendirmesi oluşturun |
  | `trace_data_flow` | Veri akışı analizi istemi |
  | `trace_network_data` | Protokol analizi ve ağ açığı tanımlaması için ağ gönder/alındı çağrı stack'lerini izleyin |
  | `compare_functions` | Benzerlik analizi için iki işlevi diff edin |
  | `reverse_engineer_struct` | Kullanım desenleri aracılığıyla yapı tanımlarını kurtarın |

  ## Kullanım Örnekleri

  ### Temel Program Bilgisi

  ```json
  {
    "method": "tools/call",
    "params": {
      "name": "get_binary_info"
    }
  }
  ```

  ### Desen Filtrelemesi ile İşlevleri Listeleyin

  ```json
  {
    "method": "tools/call",
    "params": {
      "name": "get_functions",
      "arguments": {
        "pattern": "init",
        "case_sensitive": false,
        "limit": 50
      }
    }
  }
  ```

  ### İşlevi Decompile Edin (`get_code`)

  ```json
  {
    "method": "tools/call",
    "params": {
      "name": "get_code",
      "arguments": {
        "function": "main",
        "format": "decompiler"
      }
    }
  }
  ```

  ### Sınıf Bilgisini Alın (Eylem Tabanlı)

  ```json
  {
    "method": "tools/call",
    "params": {
      "name": "classes",
      "arguments": {
        "action": "get_info",
        "class_name": "MyClass"
      }
    }
  }
  ```

  ### Sınıfları Arayın (Eylem Tabanlı)

  ```json
  {
    "method": "tools/call",
    "params": {
      "name": "classes",
      "arguments": {
        "action": "list",
        "pattern": "Socket",
        "case_sensitive": false
      }
    }
  }
  ```

  ### Yapıyı Otomatik Oluşturun (Eylem Tabanlı)

  ```json
  {
    "method": "tools/call",
    "params": {
      "name": "struct",
      "arguments": {
        "action": "auto_create",
        "function_identifier": "0x00401000",
        "variable_name": "ctx"
      }
    }
  }
  ```

  ### Yapı Alanı Çapraz Başvurularını Bulun (Eylem Tabanlı)

  ```json
  {
    "method": "tools/call",
    "params": {
      "name": "struct",
      "arguments": {
        "action": "field_xrefs",
        "structure_name": "Host",
        "field_name": "port"
      }
    }
  }
  ```

  ### Veri Türünü Silin

  Birden fazla tür kategoriler arasında aynı ada sahipse, `category`'yi geçin (veya `/` ile başlayan `name` içinde tam bir yol geçin).

  ```json
  {
    "method": "tools/call",
    "params": {
      "name": "types",
      "arguments": {
        "action": "delete",
        "name": "MyStruct",
        "category": "/mytypes"
      }
    }
  }
  ```

  ### İşlevi Yeniden Adlandırın (Eylem Tabanlı)

  ```json
  {
    "method": "tools/call",
    "params": {
      "name": "rename_symbol",
      "arguments": {
        "action": "function",
        "address": "0x00401000",
        "new_name": "decrypt_buffer"
      }
    }
  }
  ```

  ### Multi-Program Desteği

  Birden fazla açık program ile çalışırken, önce bunları listeleyin:

  ```json
  {
    "method": "tools/call",
    "params": {
      "name": "list_binaries"
    }
  }
  ```

  Sonra `program_name` kullanarak hangi programa hedef alacağınızı belirtin:

  ```json
  {
    "method": "tools/call",
    "params": {
      "name": "get_functions",
      "arguments": {
        "program_name": "target_binary.exe",
        "limit": 10
      }
    }
  }
  ```

  ## Multi-Window Desteği ve Aktif Bağlam Farkındalığı

  GhidrAssistMCP, birden fazla CodeBrowser penceresinde kesintisiz çalışmayı sağlayan tek bir mimari kullanır:

  ### Nasıl Çalışır

  1. **Tek Paylaşılan Sunucu**: Bir MCP sunucusu (port 8080) tüm CodeBrowser pencerelerini hizmet eder
  2. **Odak Takibi**: Hangi CodeBrowser penceresinin şu anda etkin olduğunu otomatik olarak algılar
  3. **Bağlam İpuçları**: Tüm araç yanıtları, yapay zekaya hangi ikili dosyanın odakta olduğunu anlamasına yardımcı olmak için bağlam bilgisini içerir

  ### Yanıtlardaki Bağlam Bilgisi

  Her araç yanıtı bir bağlam başlığı içerir:

  ```plaintext
  [Context] Operating on: malware.exe | Active window: malware.exe

  <tool response content>
  ```

  veya farklı bir programa hedef alırken:

  ```plaintext
  [Context] Operating on: lib.so | Active window: main.exe | Total open programs: 3

  <tool response content>
  ```

  ### Yapay Zeka Asistanları için Faydalar

  - **Akıllı Varsayılanlar**: `program_name` belirtilmediğinde, araçlar otomatik olarak etkin penceredeki programı kullanır
  - **Bağlam Farkındalığı**: Yapay zeka, kullanıcının şu anda hangi ikili dosyayı görüntülediğini bilir
  - **Karmaşayı Engeller**: Etkin penceredekinden farklı bir ikili dosyada çalışırken açık gösterge
  - **Multi-tasking**: Hangi birine hedef alacağınızı sürekli belirtmeden birden fazla ikili ile çalışın

  ## Mimari

  ### Temel Bileşenler

  ```plaintext
  GhidrAssistMCP/
  ├── GhidrAssistMCPManager     # Multi-window desteği için singleton koordinatör
  │   ├── Tüm CodeBrowser pencerelerini takip eder
  │   ├── Odak takiyi yönetir
  │   └── Paylaşılan sunucuyu ve arka ucu sahipliğinde
  ├── GhidrAssistMCPPlugin      # Plugin örneği (CodeBrowser penceresi başına bir)
  │   └── Singleton yöneticisine kaydolur
  ├── GhidrAssistMCPServer      # HTTP MCP sunucusu (SSE + Streamable)
  │   └── Port 8080 adresinde tek paylaşılan örnek
  ├── GhidrAssistMCPBackend     # Araç yönetimi ve yürütmesi
  │   ├── Etkinleştir/devre dışı bırak durumları ile araç kayıtları
  │   ├── Sonuç caching sistemi
  │   ├── Async görev yönetimi
  │   └── Kaynak ve istem kayıtları
  ├── GhidrAssistMCPProvider    # UI bileşeni sağlayıcısı
  │   └── İlk kayıtlı örnek UI sağlar
  ├── cache/                    # Caching altyapısı
  │   ├── McpCache.java
  │   └── CacheEntry.java
  ├── tasks/                    # Async görev yönetimi
  │   ├── McpTaskManager.java
  │   └── McpTask.java
  ├── resources/                # MCP Kaynakları (6 toplam)
  │   ├── ProgramInfoResource.java
  │   ├── FunctionListResource.java
  │   ├── StringsResource.java
  │   ├── ImportsResource.java
  │   ├── ExportsResource.java
  │   └── SegmentsResource.java
  ├── prompts/                  # MCP İstekl
---

# GhidrAssistMCP

A powerful Ghidra extension that provides an MCP (Model Context Protocol) server, enabling AI assistants and other tools to interact with Ghidra's reverse engineering capabilities through a standardized API.

## Overview

GhidrAssistMCP bridges the gap between AI-powered analysis tools and Ghidra's comprehensive reverse engineering platform. By implementing the Model Context Protocol, this extension allows external AI assistants, automated analysis tools, and custom scripts to seamlessly interact with Ghidra's analysis capabilities.

### Key Features

- **MCP Server Integration**: Full Model Context Protocol server implementation using official SDK
- **Dual HTTP Transports**: Supports SSE and Streamable HTTP transports for maximum client compatibility
- **38 Built-in Tools**: Comprehensive set of analysis tools with action-based consolidation for cleaner APIs
- **6 MCP Resources**: Static data resources for program info, functions, strings, imports, exports, and segments
- **7 MCP Prompts**: Pre-built analysis prompts for common reverse engineering tasks
- **Result Caching**: Intelligent caching system to improve performance for repeated queries
- **Async Task Support**: Long-running operations execute asynchronously with task management
- **Multi-Program Support**: Work with multiple open programs simultaneously using `program_name` parameter
- **Multi-Window Support**: Single MCP server shared across all CodeBrowser windows with intelligent focus tracking
- **Active Context Awareness**: Automatic detection of which binary window is in focus, with context hints in all tool responses
- **Configurable UI**: Easy-to-use interface for managing tools and monitoring activity
- **Real-time Logging**: Track all MCP requests and responses with detailed logging
- **Dynamic Tool Management**: Enable/disable tools individually with persistent settings

## Clients

Shameless self-promotion: [GhidrAssist](https://github.com/jtang613/GhidrAssist) supports GhidrAssistMCP right out of the box.

## Screenshots

![Screenshot](https://github.com/jtang613/GhidrAssistMCP/blob/master/res/Screenshot1.png)
![Screenshot](https://github.com/jtang613/GhidrAssistMCP/blob/master/res/Screenshot2.png)

## Installation

### Prerequisites

- **Ghidra 11.4+** (tested with Ghidra 12.0 Public)
- **An MCP Client (Like GhidrAssist)**

### Binary Release (Recommended)

1. **Download the latest release**:
   - Go to the [Releases page](https://github.com/jtang613/GhidrAssistMCP/releases)
   - Download the latest `.zip` file (e.g., `GhidrAssistMCP-v1.0.0.zip`)

2. **Install the extension**:
   - In Ghidra: **File → Install Extensions → Add Extension**
   - Select the downloaded ZIP file
   - Restart Ghidra when prompted

3. **Enable the plugin**:
   - **File → Configure → Configure Plugins**
   - Search for "GhidrAssistMCP"
   - Check the box to enable the plugin

### Building from Source

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd GhidrAssistMCP
   ```

2. **Point Gradle at your Ghidra install**:
   - Set `GHIDRA_INSTALL_DIR` (environment variable), or pass `-PGHIDRA_INSTALL_DIR=<path>` when you run Gradle.

3. **Build + install**:

   Ensure Ghidra isn't running and run:

   ```bash
   gradle installExtension
   ```

   This copies the built ZIP into your Ghidra install (`[GHIDRA_INSTALL_DIR]/Extensions/Ghidra`) and extracts it into your Ghidra **user** Extensions folder (replacing any existing extracted copy).

   If you need to override that location, pass `-PGHIDRA_USER_EXTENSIONS_DIR=<path>`.

4. **Restart / verify**:
   - Restart Ghidra.
   - If the plugin doesn't appear, enable it via **File → Configure → Configure Plugins** (search for "GhidrAssistMCP").

## Configuration

### Initial Setup

1. **Open the Control Panel**:
   - Window → GhidrAssistMCP (or use the toolbar icon)

2. **Configure Server Settings**:
   - **Host**: Default is `localhost`
   - **Port**: Default is `8080`
   - **Enable/Disable**: Toggle the MCP server on/off

### Tool Management

The Configuration tab allows you to:

- **View all available tools** (38 total)
- **Enable/disable individual tools** using checkboxes
- **Save configuration** to persist across sessions
- **Monitor tool status** in real-time

## Headless Mode Quickstart

GhidrAssistMCP can also be started from Ghidra's `analyzeHeadless` launcher. This is useful when you want MCP access to a program loaded in headless Ghidra without opening the CodeBrowser UI.

First, build and install the extension so Ghidra can load the compiled classes and bundled dependencies:

```bash
cd /path/to/GhidrAssistMCP

export GHIDRA_INSTALL_DIR=/path/to/ghidra_12.0_PUBLIC
gradle installExtension
```

Set paths for your Ghidra install and extracted user extension. On Linux, Ghidra user extensions usually live under `~/.config/ghidra/<ghidra_profile>/Extensions`:

```bash
export GHIDRA_INSTALL_DIR=/path/to/ghidra_12.0_PUBLIC
export GHIDRA_USER_EXTENSIONS_DIR="$HOME/.config/ghidra/ghidra_12.0_PUBLIC/Extensions"
export GHIDRASSISTMCP_EXT="$GHIDRA_USER_EXTENSIONS_DIR/GhidrAssistMCP"
```

Import a binary and start the MCP server as a headless pre-script:

```bash
"$GHIDRA_INSTALL_DIR/support/analyzeHeadless" /tmp/ghidra-projects McpHeadless \
  -import /path/to/binary \
  -scriptPath "$GHIDRASSISTMCP_EXT/ghidra_scripts" \
  -preScript GAMCPStartServerScript.java "host=127.0.0.1" "port=8080"
```

For a binary that is already imported into the project, use `-process` instead:

```bash
"$GHIDRA_INSTALL_DIR/support/analyzeHeadless" /tmp/ghidra-projects McpHeadless \
  -process binary_name \
  -scriptPath "$GHIDRASSISTMCP_EXT/ghidra_scripts" \
  -preScript GAMCPStartServerScript.java "host=127.0.0.1" "port=8080"
```

MCP clients can connect to:

```text
SSE:             http://127.0.0.1:8080/sse
SSE messages:    http://127.0.0.1:8080/message
Streamable HTTP: http://127.0.0.1:8080/mcp
```

The headless MCP server runs inside the `analyzeHeadless` JVM and uses the loaded `currentProgram`. Keep that process alive while clients are connected; when `analyzeHeadless` exits, the MCP server exits with it.

## Available Tools

GhidrAssistMCP provides 38 tools organized into categories. Several tools use an action-based API pattern where a single tool provides multiple related operations.

### Binary & Program Management

| Tool | Description |
| ---- | ----------- |
| `get_binary_info` | Get basic program information (name, architecture, compiler, etc.) |
| `list_binaries` | List all open programs across all CodeBrowser windows |
| `assemble_code` | Assemble instruction text at an address and optionally patch it into program memory |
| `patch_bytes` | Patch raw bytes in program memory at a given address |
| `export_program` | Export the current program to disk (`binary` or `original_file`) *(disabled by default)* |

> **Security-sensitive tools:** `import_file` and `export_program` are disabled by default because they interact with the host filesystem. Enable them explicitly in the plugin configuration UI when needed.

### Function Discovery & Analysis

| Tool | Description |
| ---- | ----------- |
| `get_functions` | List functions with optional pattern filtering and pagination |
| `search_functions_by_name` | Find functions by name pattern |
| `get_function_statistics` | Comprehensive statistics for all functions |
| `analyze_function` | Get detailed function information (signature, variables, etc.) |
| `get_current_function` | Get function at current cursor position |
| `get_function_stack_layout` | Get stack frame layout with variable offsets |
| `get_basic_blocks` | Get basic block information for a function |

### Binary Information

| Tool | Description |
| ---- | ----------- |
| `get_imports` | List imported functions/symbols |
| `get_exports` | List exported functions/symbols |
| `get_strings` | List string references with optional filtering |
| `search_strings` | Search strings by pattern |
| `get_segments` | List memory segments |
| `get_namespaces` | List namespaces in the program |
| `get_relocations` | List relocation entries |
| `get_entry_points` | List all binary entry points |

### Data Analysis

| Tool | Description |
| ---- | ----------- |
| `get_data_vars` | List data definitions in the program |
| `get_data_at` | Get hexdump/data at a specific address |
| `create_data_var` | Define data variables at addresses |
| `get_current_address` | Get current cursor address |

### Consolidated Tools

These tools bundle related operations behind a discriminator parameter (e.g., `action`, `target`, `target_type`, or `format`).

#### `get_code` - Code Retrieval Tool

| Parameter | Values | Description |
| --------- | ------ | ----------- |
| `format` | `decompiler`, `disassembly`, `pcode` | Output format |
| `raw` | boolean | Only affects `format: "pcode"` (raw pcode ops vs grouped by basic blocks) |

#### `classes` - Class Operations Tool

| Action | Description |
| ------ | ----------- |
| `list` | List classes with optional pattern filtering and pagination |
| `get_info` | Get detailed class information (methods, fields, vtables, virtual functions) |

#### `xrefs` - Cross-Reference Tool

| Parameter | Description |
| --------- | ----------- |
| `address` | Find all references to/from a specific address |
| `function` | Find all cross-references for a function |
| `include_calls` | Include callers/callees (replaces separate call graph tool) |

#### `struct` - Structure Operations Tool

| Action | Description |
| ------ | ----------- |
| `create` | Create a new structure from C definition or empty |
| `modify` | Modify an existing structure with new C definition |
| `merge` | Merge (overlay) fields from a C definition onto an existing structure without deleting existing fields |
| `set_field` | Set/insert a single field at a specific offset without needing a full C struct (use `field_name` to name it) |
| `name_gap` | Convert undefined bytes at an offset/length into a named `byte[]`-like field (useful for “naming gaps”; uses `field_name`) |
| `auto_create` | Automatically create structure from variable usage patterns |
| `rename_field` | Rename a field within a structure |
| `field_xrefs` | Find cross-references to a specific struct field |

#### `rename_symbol` - Symbol Renaming Tool

| Parameter | Values | Description |
| --------- | ------ | ----------- |
| `target_type` | `function`, `data`, `variable` | What kind of symbol to rename |

#### `batch_rename` - Batch Symbol Renaming Tool

Rename multiple symbols in one operation.

#### `comments` - Comment Management Tool

| Action | Description |
| ------ | ----------- |
| `get` | Get comment at an address |
| `set` | Set a comment at an address or on a function |
| `list` | List all comments |
| `remove` | Remove a comment |

#### `variables` - Variable Management Tool

| Action | Description |
| ------ | ----------- |
| `list` | List local variables for a function |
| `rename` | Rename a local variable or a global/data symbol using `scope` |
| `set_type` | Set data type for a local variable |
| `set_prototype` | Set function signature/prototype |

#### `types` - Type Management Tool

| Action | Description |
| ------ | ----------- |
| `list` | List all available data types |
| `get_info` | Get detailed data type information and structure definitions |
| `set` | Set data type at a specific address |
| `delete` | Delete a data type by name (optionally scoped by `category`) |

#### `bookmarks` - Bookmark Management Tool

| Action | Description |
| ------ | ----------- |
| `list` | List all bookmarks |
| `set` | Set a new bookmark |
| `remove` | Remove a bookmark |

### Search Tools

| Tool | Description |
| ----- | ----------- |
| `search_bytes` | Search for byte patterns in memory |

### Async Task Management

Long-running operations (decompilation, structure analysis, field xrefs) execute asynchronously:

| Tool | Description |
| ---- | ----------- |
| `get_task_status` | Check status and retrieve results of async tasks |
| `cancel_task` | Cancel a running async task |
| `list_tasks` | List all pending/running/completed tasks |

## MCP Resources

GhidrAssistMCP exposes 6 static resources that can be read by MCP clients:

| Resource URI | Description |
| ------------ | ----------- |
| `ghidra://program/{name}/info` | Basic program information |
| `ghidra://program/{name}/functions` | List of all functions |
| `ghidra://program/{name}/strings` | String references |
| `ghidra://program/{name}/imports` | Imported symbols |
| `ghidra://program/{name}/exports` | Exported symbols |
| `ghidra://program/{name}/segments` | Memory segments |

## MCP Prompts

Pre-built prompts for common analysis tasks:

| Prompt | Description |
| ------ | ----------- |
| `analyze_function` | Comprehensive function analysis prompt |
| `identify_vulnerability` | Security vulnerability identification |
| `document_function` | Generate function documentation |
| `trace_data_flow` | Data flow analysis prompt |
| `trace_network_data` | Trace network send/recv call stacks for protocol analysis and network vulnerability identification |
| `compare_functions` | Diff two functions for similarity analysis |
| `reverse_engineer_struct` | Recover structure definitions from usage patterns |

## Usage Examples

### Basic Program Information

```json
{
  "method": "tools/call",
  "params": {
    "name": "get_binary_info"
  }
}
```

### List Functions with Pattern Filtering

```json
{
  "method": "tools/call",
  "params": {
    "name": "get_functions",
    "arguments": {
      "pattern": "init",
      "case_sensitive": false,
      "limit": 50
    }
  }
}
```

### Decompile Function (`get_code`)

```json
{
  "method": "tools/call",
  "params": {
    "name": "get_code",
    "arguments": {
      "function": "main",
      "format": "decompiler"
    }
  }
}
```

### Get Class Information (Action-Based)

```json
{
  "method": "tools/call",
  "params": {
    "name": "classes",
    "arguments": {
      "action": "get_info",
      "class_name": "MyClass"
    }
  }
}
```

### Search Classes (Action-Based)

```json
{
  "method": "tools/call",
  "params": {
    "name": "classes",
    "arguments": {
      "action": "list",
      "pattern": "Socket",
      "case_sensitive": false
    }
  }
}
```

### Auto-Create Structure (Action-Based)

```json
{
  "method": "tools/call",
  "params": {
    "name": "struct",
    "arguments": {
      "action": "auto_create",
      "function_identifier": "0x00401000",
      "variable_name": "ctx"
    }
  }
}
```

### Find Struct Field Cross-References (Action-Based)

```json
{
  "method": "tools/call",
  "params": {
    "name": "struct",
    "arguments": {
      "action": "field_xrefs",
      "structure_name": "Host",
      "field_name": "port"
    }
  }
}
```

### Delete a Data Type

If multiple types share the same name across categories, pass `category` (or pass a full path in `name` starting with `/`).

```json
{
  "method": "tools/call",
  "params": {
    "name": "types",
    "arguments": {
      "action": "delete",
      "name": "MyStruct",
      "category": "/mytypes"
    }
  }
}
```

### Rename Function (Action-Based)

```json
{
  "method": "tools/call",
  "params": {
    "name": "rename_symbol",
    "arguments": {
      "action": "function",
      "address": "0x00401000",
      "new_name": "decrypt_buffer"
    }
  }
}
```

### Multi-Program Support

When working with multiple open programs, first list them:

```json
{
  "method": "tools/call",
  "params": {
    "name": "list_binaries"
  }
}
```

Then specify which program to target using `program_name`:

```json
{
  "method": "tools/call",
  "params": {
    "name": "get_functions",
    "arguments": {
      "program_name": "target_binary.exe",
      "limit": 10
    }
  }
}
```

## Multi-Window Support & Active Context Awareness

GhidrAssistMCP uses a singleton architecture that enables seamless operation across multiple CodeBrowser windows:

### How It Works

1. **Single Shared Server**: One MCP server (port 8080) serves all CodeBrowser windows
2. **Focus Tracking**: Automatically detects which CodeBrowser window is currently active
3. **Context Hints**: All tool responses include context information to help AI understand which binary is in focus

### Context Information in Responses

Every tool response includes a context header:

```plaintext
[Context] Operating on: malware.exe | Active window: malware.exe

<tool response content>
```

or when targeting a different program:

```plaintext
[Context] Operating on: lib.so | Active window: main.exe | Total open programs: 3

<tool response content>
```

### Benefits for AI Assistants

- **Smart Defaults**: When no `program_name` is specified, tools automatically use the program from the active window
- **Context Awareness**: AI knows which binary the user is currently viewing
- **Prevents Confusion**: Clear indication when operating on a different binary than what's in the active window
- **Multi-tasking**: Work with multiple binaries without constantly specifying which one to target

## Architecture

### Core Components

```plaintext
GhidrAssistMCP/
├── GhidrAssistMCPManager     # Singleton coordinator for multi-window support
│   ├── Tracks all CodeBrowser windows
│   ├── Manages focus tracking
│   └── Owns shared server and backend
├── GhidrAssistMCPPlugin      # Plugin instance (one per CodeBrowser window)
│   └── Registers with singleton manager
├── GhidrAssistMCPServer      # HTTP MCP server (SSE + Streamable)
│   └── Single shared instance on port 8080
├── GhidrAssistMCPBackend     # Tool management and execution
│   ├── Tool registry with enable/disable states
│   ├── Result caching system
│   ├── Async task management
│   └── Resource and prompt registries
├── GhidrAssistMCPProvider    # UI component provider
│   └── First registered instance provides UI
├── cache/                    # Caching infrastructure
│   ├── McpCache.java
│   └── CacheEntry.java
├── tasks/                    # Async task management
│   ├── McpTaskManager.java
│   └── McpTask.java
├── resources/                # MCP Resources (6 total)
│   ├── ProgramInfoResource.java
│   ├── FunctionListResource.java
│   ├── StringsResource.java
│   ├── ImportsResource.java
│   ├── ExportsResource.java
│   └── SegmentsResource.java
├── prompts/                  # MCP Prompts (7 total)
│   ├── AnalyzeFunctionPrompt.java
│   ├── IdentifyVulnerabilityPrompt.java
│   ├── DocumentFunctionPrompt.java
│   ├── TraceDataFlowPrompt.java
│   ├── TraceNetworkDataPrompt.java
│   ├── CompareFunctionsPrompt.java
│   └── ReverseEngineerStructPrompt.java
└── tools/                    # MCP Tools (35 total)
    ├── Consolidated action-based tools
    ├── Analysis tools
    ├── Modification tools
    └── Navigation tools
```

### Tool Design Patterns

**Consolidated Tools**: Related operations are consolidated into single tools with a discriminator parameter:

- `get_code`: `format: decompiler|disassembly|pcode`
- `classes`: `action: list|get_info`
- `struct`: `action: create|modify|merge|set_field|name_gap|auto_create|rename_field|field_xrefs`
- `rename_symbol`: `target_type: function|data|variable`
- `comments`: `action: get|set|list|remove`
- `variables`: `action: list|rename|set_type|set_prototype` with `scope: auto|local|global` for rename
- `types`: `action: list|get_info|set|delete`
- `bookmarks`: `action: list|set|remove`
- `xrefs`: `address|function` with `include_calls` parameter

**Tool Interface Methods**:

- `isReadOnly()`: Indicates if tool modifies program state
- `isLongRunning()`: Triggers async execution with task management
- `isCacheable()`: Enables result caching for repeated queries
- `isDestructive()`: Marks potentially dangerous operations
- `isIdempotent()`: Indicates if repeated calls produce same result

### MCP Protocol Implementation

- **Transports**:
  - HTTP with Server-Sent Events (SSE)
  - Streamable HTTP
- **Endpoints**:
  - `GET /sse` - SSE connection for bidirectional communication
  - `POST /message` - Message exchange endpoint
  - `GET /mcp` - Receive Streamable HTTP events
  - `POST /mcp` - Initialize Streamable HTTP session
  - `DELETE /mcp` - Terminate Streamable HTTP session
- **Capabilities**: Tools, Resources, Prompts

## Development

### Project Structure

```plaintext
src/main/java/ghidrassistmcp/
├── GhidrAssistMCPPlugin.java      # Main plugin class
├── GhidrAssistMCPManager.java     # Singleton coordinator
├── GhidrAssistMCPProvider.java    # UI provider with tabs
├── GhidrAssistMCPServer.java      # MCP server implementation
├── GhidrAssistMCPBackend.java     # Backend tool/resource/prompt management
├── McpBackend.java                # Backend interface
├── McpTool.java                   # Tool interface
├── McpEventListener.java          # Event notification interface
├── cache/                         # Caching system
├── tasks/                         # Async task system
├── resources/                     # MCP resources
├── prompts/                       # MCP prompts
└── tools/                         # Tool implementations
```

### Adding New Tools

1. **Implement McpTool interface**:

   ```java
   public class MyCustomTool implements McpTool {
       @Override
       public String getName() { return "my_custom_tool"; }

       @Override
       public String getDescription() { return "Description"; }

       @Override
       public boolean isReadOnly() { return true; }

       @Override
       public boolean isLongRunning() { return false; }

       @Override
       public boolean isCacheable() { return true; }

       @Override
       public McpSchema.JsonSchema getInputSchema() { /* ... */ }

       @Override
       public McpSchema.CallToolResult execute(Map<String, Object> arguments, Program program) {
           // Implementation
       }
   }
   ```

2. **Register in backend**:

   ```java
   // In GhidrAssistMCPBackend constructor
   registerTool(new MyCustomTool());
   ```

### Build Commands

```bash
# Clean build
gradle clean

# Build extension zip (written to dist/)
gradle buildExtension

# Install (extract) extension into the Ghidra user Extensions directory
gradle installExtension

# Uninstall (delete extracted directory from the Ghidra user Extensions directory)
gradle uninstallExtension

# Build/install with specific Ghidra path (required if GHIDRA_INSTALL_DIR isn't set)
gradle -PGHIDRA_INSTALL_DIR=/path/to/ghidra installExtension

# Debug build
gradle buildExtension --debug
```

### Dependencies

- **MCP SDK**: `io.modelcontextprotocol.sdk:mcp:0.17.1`
- **Jetty Server**: `11.0.20` (HTTP/SSE transport)
- **Jackson**: `2.18.3` (JSON processing)
- **Ghidra API**: Bundled with Ghidra installation

## Logging

### UI Logging

The **Log** tab provides real-time monitoring:

- **Session Events**: Server start/stop, program changes
- **Tool Requests**: `REQ: tool_name {parameters...}`
- **Tool Responses**: `RES: tool_name {response...}`
- **Error Messages**: Failed operations and diagnostics
- **Cache Hits**: When cached results are returned

### Console Logging

Detailed logging in Ghidra's console:

- Tool registration and initialization
- MCP server lifecycle events
- Async task execution and completion
- Cache statistics
- Database transaction operations
- Error stack traces and debugging information

## Troubleshooting

### Common Issues

#### Server Won't Start

- Check if port 8080 is available
- Verify Ghidra installation path
- Examine console logs for errors

#### Tools Not Appearing

- Ensure plugin is enabled
- Check Configuration tab for tool status
- Verify backend initialization in logs

#### MCP Client Connection Issues

- Confirm server is running (check GhidrAssistMCP window)
- Test connection: `curl http://localhost:8080/sse`
- Check firewall settings

#### Tool Execution Failures

- Verify program is loaded in Ghidra
- Check tool parameters are correct
- Review error messages in Log tab

#### Async Task Issues

- Use `get_task_status` to check task state
- Use `list_tasks` to see all tasks
- Use `cancel_task` if a task is stuck

### Debug Mode

Enable debug logging by adding to Ghidra startup:

```bash
-Dlog4j.logger.ghidrassistmcp=DEBUG
```

## Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature-name`
3. **Make your changes** with proper tests
4. **Follow code style**: Use existing patterns and conventions
5. **Submit a pull request** with detailed description

### Code Standards

- **Java 21+ features** where appropriate
- **Proper exception handling** with meaningful messages
- **Transaction safety** for all database operations
- **Thread safety** for UI operations
- **Comprehensive documentation** for public APIs
- **Action-based consolidation** for related tool operations

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **NSA/Ghidra Team** for the excellent reverse engineering platform
- **Anthropic** for the Model Context Protocol specification

---

**Questions or Issues?**

Please open an issue on the project repository for bug reports, feature requests, or questions about usage and development.
