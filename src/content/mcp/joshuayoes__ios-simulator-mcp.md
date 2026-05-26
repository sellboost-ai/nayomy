---
name: "joshuayoes/ios-simulator-mcp"
description: "A Model Context Protocol (MCP) server for interacting with iOS simulators. This server allows you to interact with iOS simulators by getting information about them, controlling UI interactions, and inspecting UI elements."
description_tr: "iOS simülatörleriyle etkileşim kurmak için bir Model Context Protocol (MCP) sunucusu. Bu sunucu, simülatörler hakkında bilgi almayı, UI etkileşimlerini kontrol etmeyi ve UI elemanlarını incelemeyi sağlar."
category: "Developer Tools"
repo: "joshuayoes/ios-simulator-mcp"
stars: 2012
url: "https://github.com/joshuayoes/ios-simulator-mcp"
body_length: 15860
license: "MIT"
language: "JavaScript"
body_tr: |-
  # iOS Simulator MCP Server

  [![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/install-mcp?name=ios-simulator&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImlvcy1zaW11bGF0b3ItbWNwIl19) [![NPM Version](https://img.shields.io/npm/v/ios-simulator-mcp)](https://www.npmjs.com/package/ios-simulator-mcp)

  iOS simülatörleriyle etkileşim kurmak için bir Model Context Protocol (MCP) sunucusu. Bu sunucu, iOS simülatörleri hakkında bilgi alarak, UI etkileşimlerini kontrol ederek ve UI öğelerini inceleyerek simülatörlerle etkileşim kurmanızı sağlar.

  > **Güvenlik Uyarısı**: 1.3.3'ten önceki sürümlerdeki komut enjeksiyonu açıkları giderilmiştir. Lütfen v1.3.3 veya daha yeni sürüme güncelleyin. Ayrıntılar için [SECURITY.md](SECURITY.md) dosyasına bakın.

  https://github.com/user-attachments/assets/453ebe7b-cc93-4ac2-b08d-0f8ac8339ad3

  ## 🌟 Öne Çıkan Yayınlar

  Bu proje çeşitli yayınlarda ve kaynaklarda öne çıkarılmış ve bahsedilmiştir:

  - [Claude Code Best Practices makalesi](https://www.anthropic.com/engineering/claude-code-best-practices#:~:text=Write%20code%2C%20screenshot%20result%2C%20iterate) - Anthropic'in mühendislik bloğundaki en iyi uygulamalar
  - [React Native Newsletter Issue 187](https://us3.campaign-archive.com/?u=78d9e37a94fa0b522939163d4&id=656ed2c2cf#:~:text=iOS%20Simulator%20MCP%20Server) - En popüler React Native topluluk haber bülteninde öne çıkarılmış
  - [Mobile Automation Newsletter - #56](https://testableapple.com/newsletter/56/#:~:text=iOS-,iOS%20Simulator%20MCP,-%F0%9F%8E%99%EF%B8%8F%20Joshua%20Yoes) - Mobil test ve otomasyon kaynakları hakkında uzun süredir yayınlanan bir haber bülteninde öne çıkarılmış
  - [punkeye/awesome-mcp-server listesi](https://github.com/punkpeye/awesome-mcp-servers) - En popüler curated awesome MCP sunucuları koleksiyonlarından birinde listelenmektedir

  ## Araçlar

  ### `get_booted_sim_id`

  **Açıklama:** Şu anda açılı iOS simülatörünün ID'sini alır

  **Parametreler:** Parametre Yok

  ### `open_simulator`

  **Açıklama:** iOS Simulator uygulamasını açar

  **Parametreler:** Parametre Yok

  ### `ui_describe_all`

  **Açıklama:** iOS Simulator'da tüm ekran için erişilebilirlik bilgilerini açıklar

  **Parametreler:**

  ```typescript
  {
    /**
     * Hedefin Udid'i, ayrıca IDB_UDID env var ile de ayarlanabilir
     * Format: UUID (8-4-4-4-12 onaltılı karakter)
     */
    udid?: string;
  }
  ```

  ### `ui_tap`

  **Açıklama:** iOS Simulator'da ekrana dokunur

  **Parametreler:**

  ```typescript
  {
    /**
     * Basılı tutma süresi saniye cinsinden (ondalık sayılara izin verilir)
     */
    duration?: string;
    /**
     * Hedefin Udid'i, ayrıca IDB_UDID env var ile de ayarlanabilir
     * Format: UUID (8-4-4-4-12 onaltılı karakter)
     */
    udid?: string;
    /** x-koordinatı */
    x: number;
    /** y-koordinatı */
    y: number;
  }
  ```

  ### `ui_type`

  **Açıklama:** iOS Simulator'a metin girer

  **Parametreler:**

  ```typescript
  {
    /**
     * Hedefin Udid'i, ayrıca IDB_UDID env var ile de ayarlanabilir
     * Format: UUID (8-4-4-4-12 onaltılı karakter)
     */
    udid?: string;
    /**
     * Girilecek metin
     * Format: Yalnızca ASCII yazdırılabilir karakterler
     */
    text: string;
  }
  ```

  ### `ui_swipe`

  **Açıklama:** iOS Simulator'da ekran üzerinde kaydırma hareketi yapar

  **Parametreler:**

  ```typescript
  {
    /**
     * Kaydırma süresi saniye cinsinden (ondalık sayılara izin verilir)
     */
    duration?: string;
    /**
     * Hedefin Udid'i, ayrıca IDB_UDID env var ile de ayarlanabilir
     * Format: UUID (8-4-4-4-12 onaltılı karakter)
     */
    udid?: string;
    /** Başlangıç x-koordinatı */
    x_start: number;
    /** Başlangıç y-koordinatı */
    y_start: number;
    /** Bitiş x-koordinatı */
    x_end: number;
    /** Bitiş y-koordinatı */
    y_end: number;
    /** Kaydırma işleminin her adımının boyutu (varsayılan 1) */
    delta?: number;
  }
  ```

  ### `ui_describe_point`

  **Açıklama:** iOS Simulator'un ekranında verilen koordinatlardaki erişilebilirlik öğesini döndürür

  **Parametreler:**

  ```typescript
  {
    /**
     * Hedefin Udid'i, ayrıca IDB_UDID env var ile de ayarlanabilir
     * Format: UUID (8-4-4-4-12 onaltılı karakter)
     */
    udid?: string;
    /** x-koordinatı */
    x: number;
    /** y-koordinatı */
    y: number;
  }
  ```

  ### `ui_find_element`

  **Açıklama:** Erişilebilirlik ağacında arama yapar ve verilen kriterlere uygun öğeleri döndürür

  **Parametreler:**

  ```typescript
  {
    /** Arama dizeleri dizisi. Herhangi bir dize AXLabel veya AXUniqueId ile eşleşirse öğe eşleşir */
    search: string[];
    /** Öğe türüne göre filtrele (ör. 'Button', 'StaticText', 'Group'). Büyük/küçük harfe duyarsız tam eşleşme */
    type?: string;
    /** Eşleştirme modu: 'substring' (varsayılan) veya 'exact' */
    matchMode?: "substring" | "exact";
    /** Arama eşleştirmesinin büyük/küçük harfe duyarlı olup olmadığı (varsayılan: false) */
    caseSensitive?: boolean;
    /**
     * Hedefin Udid'i, ayrıca IDB_UDID env var ile de ayarlanabilir
     * Format: UUID (8-4-4-4-12 onaltılı karakter)
     */
    udid?: string;
  }
  ```

  ### `ui_view`

  **Açıklama:** Geçerli simülatör görünümünün sıkıştırılmış ekran görüntüsünün görüntü içeriğini alır

  **Parametreler:**

  ```typescript
  {
    /**
     * Hedefin Udid'i, ayrıca IDB_UDID env var ile de ayarlanabilir
     * Format: UUID (8-4-4-4-12 onaltılı karakter)
     */
    udid?: string;
  }
  ```

  ### `screenshot`

  **Açıklama:** iOS Simulator'un ekran görüntüsünü alır

  **Parametreler:**

  ```typescript
  {
    /**
     * Hedefin Udid'i, ayrıca IDB_UDID env var ile de ayarlanabilir
     * Format: UUID (8-4-4-4-12 onaltılı karakter)
     */
    udid?: string;
    /** Ekran görüntüsünün kaydedileceği dosya yolu. Göreli ise, `IOS_SIMULATOR_MCP_DEFAULT_OUTPUT_DIR` env var ile belirtilen dizini veya ayarlanmamışsa `~/Downloads` dizinini kullanır. */
    output_path: string;
    /** Resim formatı (png, tiff, bmp, gif veya jpeg). Varsayılan png'dir. */
    type?: "png" | "tiff" | "bmp" | "gif" | "jpeg";
    /** Yakalanacak ekran (internal veya external). Varsayılan cihaz türüne bağlı. */
    display?: "internal" | "external";
    /** Dikdörtgen olmayan ekranlar için, maskeyi ilkesi uyarında işle (ignored, alpha veya black) */
    mask?: "ignored" | "alpha" | "black";
  }
  ```

  ### `record_video`

  **Açıklama:** simctl'i doğrudan kullanarak iOS Simulator'ın bir video kaydını alır

  **Parametreler:**

  ```typescript
  {
    /**
     * Hedefin Udid'i, ayrıca IDB_UDID env var ile de ayarlanabilir
     * Format: UUID (8-4-4-4-12 onaltılı karakter)
     */
    udid?: string;
    /** İsteğe bağlı çıkış yolu. Sağlanmamışsa, varsayılan bir ad kullanılacaktır. Dosya `IOS_SIMULATOR_MCP_DEFAULT_OUTPUT_DIR` tarafından belirtilen dizine veya ortam değişkeni ayarlanmamışsa `~/Downloads` dizinine kaydedilecektir. */
    output_path?: string;
    /** Codec türünü belirtir: "h264" veya "hevc". Varsayılan "hevc"dir. */
    codec?: "h264" | "hevc";
    /** Yakalanacak ekran: "internal" veya "external". Varsayılan cihaz türüne bağlı. */
    display?: "internal" | "external";
    /** Dikdörtgen olmayan ekranlar için, maskeyi ilkesi uyarında işle: "ignored", "alpha" veya "black". */
    mask?: "ignored" | "alpha" | "black";
    /** Dosya zaten varsa bile çıkış dosyasının yazılmaya zorlanması. */
    force?: boolean;
  }
  ```

  ### `stop_recording`

  **Açıklama:** killall kullanarak simülatör video kaydını durdurur

  **Parametreler:** Parametre Yok

  ### `install_app`

  **Açıklama:** iOS Simulator'a bir uygulama paketi (.app veya .ipa) yükler

  **Parametreler:**

  ```typescript
  {
    /**
     * Hedefin Udid'i, ayrıca IDB_UDID env var ile de ayarlanabilir
     * Format: UUID (8-4-4-4-12 onaltılı karakter)
     */
    udid?: string;
    /** Yüklenecek uygulama paketinin yolu (.app dizini veya .ipa dosyası) */
    app_path: string;
  }
  ```

  ### `launch_app`

  **Açıklama:** Bundle tanımlayıcısı kullanarak iOS Simulator'da bir uygulamayı başlatır

  **Parametreler:**

  ```typescript
  {
    /**
     * Hedefin Udid'i, ayrıca IDB_UDID env var ile de ayarlanabilir
     * Format: UUID (8-4-4-4-12 onaltılı karakter)
     */
    udid?: string;
    /** Başlatılacak uygulamanın bundle tanımlayıcısı (ör. com.apple.mobilesafari) */
    bundle_id: string;
    /** Uygulama zaten çalışıyorsa, başlatmadan önce onu sonlandır */
    terminate_running?: boolean;
    /** simctl launch'a SIMCTL_CHILD_ aracılığıyla geçirilen isteğe bağlı ortam değişkenleri */
    env?: Record<string, string>;
  }
  ```

  **Notlar:** Ortam değişkenleri `SIMCTL_CHILD_` kullanılarak geçirilir çünkü `simctl launch` tüm Xcode sürümlerinde `--env/--envs` desteklemez.

  **Örnek:**

  ```json
  {
    "bundle_id": "com.example.app",
    "terminate_running": true,
    "env": {
      "FOO": "bar",
      "BAZ": "qux"
    }
  }
  ```

  ## 💡 Kullanım Durumu: MCP Tool Çağrıları ile QA Adımı

  Bu MCP sunucusu, Model Context Protocol (MCP) istemcisi ile entegre olan yapay zeka asistanlarının tool çağrılarını yaparak Kalite Güvence görevlerini gerçekleştirmesine olanak sağlar. Bu, özelliklerin uygulanmasından hemen sonra UI tutarlılığını ve doğru davranışı sağlamaya yardımcı olmak için faydalıdır.

  ### Nasıl Kullanılır

  Bir özellik uygulamasından sonra, MCP istemci ortamındaki yapay zeka asistanına mevcut araçları kullanmasını söyleyin. Örneğin, Cursor'ın agent modunda, UI etkileşimlerini hızlıca doğrulamak ve belgelemek için aşağıda verilen istemi kullanabilirsiniz.

  ### Örnek İstemler

  - **UI Öğelerini Doğrulayın:**

    ```
    Geçerli ekrandaki tüm erişilebilirlik öğelerini doğrulayın
    ```

  - **Metin Girişini Onaylayın:**

    ```
    Metin giriş alanına "QA Test" girin ve girişin doğru olduğunu onaylayın
    ```

  - **Dokunma Tepkisini Kontrol Edin:**

    ```
    x=250, y=400 koordinatlarına dokunun ve beklenen öğenin tetiklendiğini doğrulayın
    ```

  - **Kaydırma Eylemini Doğrulayın:**

    ```
    x=150, y=600'den x=150, y=100'e kaydırma yapın ve doğru davranışı onaylayın
    ```

  - **Detaylı Öğe Kontrolü:**

    ```
    x=300, y=350 konumundaki UI öğesini açıklayın ve uygun etiketleme ve işlevselliği sağlayın
    ```

  - **AI Ajanınıza Simülatör Ekranını Gösterin:**

    ```
    Geçerli simülatör ekranını görüntüleyin
    ```

  - **Ekran Görüntüsü Alın:**

    ```
    Geçerli simülatör ekranının ekran görüntüsünü alın ve my_screenshot.png dosyasına kaydedin
    ```

  - **Video Kaydı:**

    ```
    Simülatör ekranının bir video kaydını başlatın (varsayılan çıkış dizinine kaydedilir, bu `~/Downloads` dir; `IOS_SIMULATOR_MCP_DEFAULT_OUTPUT_DIR` tarafından geçersiz kılınmadıkça)
    ```

  - **Kaydı Durdur:**

    ```
    Geçerli simülatör ekranı kaydını durdurun
    ```

  - **Uygulamayı Yükle:**

    ```
    path/to/MyApp.app konumundaki uygulamayı simülatöre yükleyin
    ```

  - **Uygulamayı Başlat:**
    ```
    Simülatörede Safari uygulamasını (com.apple.mobilesafari) başlatın
    ```

  ## Ön Koşullar

  - Node.js
  - macOS (iOS simülatörleri yalnızca macOS'ta kullanılabilir olduğundan)
  - [Xcode](https://developer.apple.com/xcode/resources/) ve iOS simülatörleri yüklenmiş
  - Facebook [IDB](https://fbidb.io/) aracı [(kurulum rehberine bakın)](https://fbidb.io/docs/installation)

  ## Kurulum

  Bu bölüm, iOS Simulator MCP sunucusunu farklı Model Context Protocol (MCP) istemcileriyle entegre etmek için talimatlar sağlar.

  ### Cursor ile Kurulum

  Cursor, MCP sunucularını `~/.cursor/mcp.json` dosyasında bulunan yapılandırma dosyası aracılığıyla yönetir.

  #### Seçenek 1: NPX Kullanma (Önerilen)

  1.  Cursor MCP yapılandırma dosyasını düzenleyin. Sık sık Cursor'dan doğrudan açabilir veya şu gibi bir komut kullanabilirsiniz:
      ```bash
      # Varsayılan editörle aç (veya 'code', 'vim', vb. kullan)
      open ~/.cursor/mcp.json
      # Veya Cursor'un komutunu kullan (eğer varsa)
      # cursor ~/.cursor/mcp.json
      ```
  2.  `mcpServers` bölümünü iOS simülatörü sunucusu yapılandırmasıyla ekleyin veya güncelleyin:
      ```json
      {
        "mcpServers": {
          // ... burada diğer sunucular listelenebilir ...
          "ios-simulator": {
            "command": "npx",
            "args": ["-y", "ios-simulator-mcp"]
          }
        }
      }
      ```
      JSON yapısının geçerli olduğundan emin olun, özellikle `mcpServers` zaten varsa.
  3.  Değişikliklerin etkili olması için Cursor'u yeniden başlatın.

  #### Seçenek 2: Yerel Geliştirme

  1.  Bu depoyu klonlayın:
      ```bash
      git clone https://github.com/joshuayoes/ios-simulator-mcp
      cd ios-simulator-mcp
      ```
  2.  Bağımlılıkları yükleyin:
      ```bash
      npm install
      ```
  3.  Projeyi derleyin:
      ```bash
      npm run build
      ```
  4.  Cursor MCP yapılandırma dosyasını düzenleyin (Seçenek 1'de gösterildiği gibi).
  5.  `mcpServers` bölümünü ekleyin veya güncelleyin, yerel derlemelerinize işaret edin:
      ```json
      {
        "mcpServers": {
          // ... burada diğer sunucular listelenebilir ...
          "ios-simulator": {
            "command": "node",
            "args": ["/full/path/to/your/ios-simulator-mcp/build/index.js"]
          }
        }
      }
      ```
      **Önemli:** `/full/path/to/your/` öğesini `ios-simulator-mcp` deposunu klonladığınız mutlak yolla değiştirin.
  6.  Değişikliklerin etkili olması için Cursor'u yeniden başlatın.

  ### Claude Code ile Kurulum

  Claude Code CLI, `claude mcp` komutlarını kullanarak veya yapılandırma dosyalarını doğrudan düzenleyerek MCP sunucularını yönetebilir. Claude Code MCP yapılandırması hakkında daha fazla ayrıntı için [resmi belgelere](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/tutorials#set-up-model-context-protocol-mcp) bakın.

  #### Seçenek 1: NPX Kullanma (Önerilen)

  1.  `claude mcp add` komutunu kullanarak sunucuyu ekleyin:
      ```bash
      claude mcp add ios-simulator npx ios-simulator-mcp
      ```
  2.  Gerekli olursa çalışan Claude Code oturumlarını yeniden başlatın.

  #### Seçenek 2: Yerel Geliştirme

  1.  Cursor'un "Yerel Geliştirme" adımlarında 1-3 adımlarında açıklandığı gibi bu depoyu klonlayın, bağımlılıkları yükleyin ve projeyi derleyin.
  2.  `claude mcp add` komutunu kullanarak sunucuyu ekleyin, yerel derlemelerinize işaret edin:
      ```bash
      claude mcp add ios-simulator -- node "/full/path/to/your/ios-simulator-mcp/build/index.js"
      ```
      **Önemli:** `/full/path/to/your/` öğesini `ios-simulator-mcp` deposunu klonladığınız mutlak yolla değiştirin.
  3.  Gerekli olursa çalışan Claude Code oturumlarını yeniden başlatın.

  ## Yapılandırma

  ### Ortam Değişkenleri

  | Değişken                               | Açıklama                                                                                                                                                                                             | Örnek                                    |
  | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
  | `IOS_SIMULATOR_MCP_FILTERED_TOOLS`     | Kaydedilmekten filtrelenecek araç adlarının virgülle ayrılmış bir listesi.                                                                                                                           | `screenshot,record_video,stop_recording` |
  | `IOS_SIMULATOR_MCP_DEFAULT_OUTPUT_DIR` | Ekran görüntüleri ve video kayıtları gibi çıkış dosyaları için varsayılan bir dizin belirtir. Ayarlanmamışsa `~/Downloads` kullanılacaktır. Ajanınız dosya sistemine sınırlı erişime sahipse kullanışlıdır. | `~/Code/awesome-project/tmp`             |
  | `IOS_SIMULATOR_MCP_IDB_PATH`           | IDB yürütülebilirine özel bir yol belirtir. Ayarlanmamışsa `idb` kullanılacaktır (PATH'inizde olduğu varsayılarak). IDB'nin standart olmayan bir konumda kurulması halinde yararlıdır.                  | `~/bin/idb` veya `/usr/local/bin/idb`    |

  #### Yapılandırma Örneği

  ```json
  {
    "mcpServers": {
      "ios-simulator": {
        "command": "npx",
        "args": ["-y", "ios-simulator-mcp"],
        "env": {
          "IOS_SIMULATOR_MCP_FILTERED_TOOLS": "screenshot,record_video,stop_recording",
          "IOS_SIMULATOR_MCP_DEFAULT_OUTPUT_DIR": "~/Code/awesome-project/tmp",
          "IOS_SIMULATOR_MCP_IDB_PATH": "~/bin/idb"
        }
      }
    }
  }
  ```

  ## MCP Kayıt Sunucusu Listeleri

  <a href="https://glama.ai/mcp/servers/@joshuayoes/ios-simulator-mcp">
    
  </a>

  [![MseeP.ai Security Assessment Badge](https://mseep.net/pr/joshuayoes-ios-simulator-mcp-badge.png)](https://mseep.ai/app/joshuayoes-ios-simulator-mcp)

  ## Lisans

  MIT
---

# iOS Simulator MCP Server

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/install-mcp?name=ios-simulator&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImlvcy1zaW11bGF0b3ItbWNwIl19) [![NPM Version](https://img.shields.io/npm/v/ios-simulator-mcp)](https://www.npmjs.com/package/ios-simulator-mcp)

A Model Context Protocol (MCP) server for interacting with iOS simulators. This server allows you to interact with iOS simulators by getting information about them, controlling UI interactions, and inspecting UI elements.

> **Security Notice**: Command injection vulnerabilities present in versions < 1.3.3 have been fixed. Please update to v1.3.3 or later. See [SECURITY.md](SECURITY.md) for details.

https://github.com/user-attachments/assets/453ebe7b-cc93-4ac2-b08d-0f8ac8339ad3

## 🌟 Featured In

This project has been featured and mentioned in various publications and resources:

- [Claude Code Best Practices article](https://www.anthropic.com/engineering/claude-code-best-practices#:~:text=Write%20code%2C%20screenshot%20result%2C%20iterate) - Anthropic's engineering blog showcasing best practices
- [React Native Newsletter Issue 187](https://us3.campaign-archive.com/?u=78d9e37a94fa0b522939163d4&id=656ed2c2cf#:~:text=iOS%20Simulator%20MCP%20Server) - Featured in the most popular React Native community newsletter
- [Mobile Automation Newsletter - #56](https://testableapple.com/newsletter/56/#:~:text=iOS-,iOS%20Simulator%20MCP,-%F0%9F%8E%99%EF%B8%8F%20Joshua%20Yoes) - Featured a long running newsletter about mobile testing and automation resources
- [punkeye/awesome-mcp-server listing](https://github.com/punkpeye/awesome-mcp-servers) - Listed in one of the most popular curated awesome MCP servers collection

## Tools

### `get_booted_sim_id`

**Description:** Get the ID of the currently booted iOS simulator

**Parameters:** No Parameters

### `open_simulator`

**Description:** Opens the iOS Simulator application

**Parameters:** No Parameters

### `ui_describe_all`

**Description:** Describes accessibility information for the entire screen in the iOS Simulator

**Parameters:**

```typescript
{
  /**
   * Udid of target, can also be set with the IDB_UDID env var
   * Format: UUID (8-4-4-4-12 hexadecimal characters)
   */
  udid?: string;
}
```

### `ui_tap`

**Description:** Tap on the screen in the iOS Simulator

**Parameters:**

```typescript
{
  /**
   * Press duration in seconds (decimal numbers allowed)
   */
  duration?: string;
  /**
   * Udid of target, can also be set with the IDB_UDID env var
   * Format: UUID (8-4-4-4-12 hexadecimal characters)
   */
  udid?: string;
  /** The x-coordinate */
  x: number;
  /** The y-coordinate */
  y: number;
}
```

### `ui_type`

**Description:** Input text into the iOS Simulator

**Parameters:**

```typescript
{
  /**
   * Udid of target, can also be set with the IDB_UDID env var
   * Format: UUID (8-4-4-4-12 hexadecimal characters)
   */
  udid?: string;
  /**
   * Text to input
   * Format: ASCII printable characters only
   */
  text: string;
}
```

### `ui_swipe`

**Description:** Swipe on the screen in the iOS Simulator

**Parameters:**

```typescript
{
  /**
   * Swipe duration in seconds (decimal numbers allowed)
   */
  duration?: string;
  /**
   * Udid of target, can also be set with the IDB_UDID env var
   * Format: UUID (8-4-4-4-12 hexadecimal characters)
   */
  udid?: string;
  /** The starting x-coordinate */
  x_start: number;
  /** The starting y-coordinate */
  y_start: number;
  /** The ending x-coordinate */
  x_end: number;
  /** The ending y-coordinate */
  y_end: number;
  /** The size of each step in the swipe (default is 1) */
  delta?: number;
}
```

### `ui_describe_point`

**Description:** Returns the accessibility element at given co-ordinates on the iOS Simulator's screen

**Parameters:**

```typescript
{
  /**
   * Udid of target, can also be set with the IDB_UDID env var
   * Format: UUID (8-4-4-4-12 hexadecimal characters)
   */
  udid?: string;
  /** The x-coordinate */
  x: number;
  /** The y-coordinate */
  y: number;
}
```

### `ui_find_element`

**Description:** Searches the accessibility tree and returns elements matching the given criteria

**Parameters:**

```typescript
{
  /** Array of search strings. An element matches if ANY string matches against its AXLabel or AXUniqueId */
  search: string[];
  /** Filter by element type (e.g. 'Button', 'StaticText', 'Group'). Case-insensitive exact match */
  type?: string;
  /** Match mode: 'substring' (default) or 'exact' */
  matchMode?: "substring" | "exact";
  /** Whether search matching is case-sensitive (default: false) */
  caseSensitive?: boolean;
  /**
   * Udid of target, can also be set with the IDB_UDID env var
   * Format: UUID (8-4-4-4-12 hexadecimal characters)
   */
  udid?: string;
}
```

### `ui_view`

**Description:** Get the image content of a compressed screenshot of the current simulator view

**Parameters:**

```typescript
{
  /**
   * Udid of target, can also be set with the IDB_UDID env var
   * Format: UUID (8-4-4-4-12 hexadecimal characters)
   */
  udid?: string;
}
```

### `screenshot`

**Description:** Takes a screenshot of the iOS Simulator

**Parameters:**

```typescript
{
  /**
   * Udid of target, can also be set with the IDB_UDID env var
   * Format: UUID (8-4-4-4-12 hexadecimal characters)
   */
  udid?: string;
  /** File path where the screenshot will be saved. If relative, it uses the directory specified by the `IOS_SIMULATOR_MCP_DEFAULT_OUTPUT_DIR` env var, or `~/Downloads` if not set. */
  output_path: string;
  /** Image format (png, tiff, bmp, gif, or jpeg). Default is png. */
  type?: "png" | "tiff" | "bmp" | "gif" | "jpeg";
  /** Display to capture (internal or external). Default depends on device type. */
  display?: "internal" | "external";
  /** For non-rectangular displays, handle the mask by policy (ignored, alpha, or black) */
  mask?: "ignored" | "alpha" | "black";
}
```

### `record_video`

**Description:** Records a video of the iOS Simulator using simctl directly

**Parameters:**

```typescript
{
  /**
   * Udid of target, can also be set with the IDB_UDID env var
   * Format: UUID (8-4-4-4-12 hexadecimal characters)
   */
  udid?: string;
  /** Optional output path. If not provided, a default name will be used. The file will be saved in the directory specified by `IOS_SIMULATOR_MCP_DEFAULT_OUTPUT_DIR` or in `~/Downloads` if the environment variable is not set. */
  output_path?: string;
  /** Specifies the codec type: "h264" or "hevc". Default is "hevc". */
  codec?: "h264" | "hevc";
  /** Display to capture: "internal" or "external". Default depends on device type. */
  display?: "internal" | "external";
  /** For non-rectangular displays, handle the mask by policy: "ignored", "alpha", or "black". */
  mask?: "ignored" | "alpha" | "black";
  /** Force the output file to be written to, even if the file already exists. */
  force?: boolean;
}
```

### `stop_recording`

**Description:** Stops the simulator video recording using killall

**Parameters:** No Parameters

### `install_app`

**Description:** Installs an app bundle (.app or .ipa) on the iOS Simulator

**Parameters:**

```typescript
{
  /**
   * Udid of target, can also be set with the IDB_UDID env var
   * Format: UUID (8-4-4-4-12 hexadecimal characters)
   */
  udid?: string;
  /** Path to the app bundle (.app directory or .ipa file) to install */
  app_path: string;
}
```

### `launch_app`

**Description:** Launches an app on the iOS Simulator by bundle identifier

**Parameters:**

```typescript
{
  /**
   * Udid of target, can also be set with the IDB_UDID env var
   * Format: UUID (8-4-4-4-12 hexadecimal characters)
   */
  udid?: string;
  /** Bundle identifier of the app to launch (e.g., com.apple.mobilesafari) */
  bundle_id: string;
  /** Terminate the app if it is already running before launching */
  terminate_running?: boolean;
  /** Optional environment variables passed via SIMCTL_CHILD_ to simctl launch */
  env?: Record<string, string>;
}
```

**Notes:** Environment variables are passed using `SIMCTL_CHILD_` because `simctl launch` does not support `--env/--envs` on all Xcode versions.

**Example:**

```json
{
  "bundle_id": "com.example.app",
  "terminate_running": true,
  "env": {
    "FOO": "bar",
    "BAZ": "qux"
  }
}
```

## 💡 Use Case: QA Step via MCP Tool Calls

This MCP server allows AI assistants integrated with a Model Context Protocol (MCP) client to perform Quality Assurance tasks by making tool calls. This is useful immediately after implementing features to help ensure UI consistency and correct behavior.

### How to Use

After a feature implementation, instruct your AI assistant within its MCP client environment to use the available tools. For example, in Cursor's agent mode, you could use the prompts below to quickly validate and document UI interactions.

### Example Prompts

- **Verify UI Elements:**

  ```
  Verify all accessibility elements on the current screen
  ```

- **Confirm Text Input:**

  ```
  Enter "QA Test" into the text input field and confirm the input is correct
  ```

- **Check Tap Response:**

  ```
  Tap on coordinates x=250, y=400 and verify the expected element is triggered
  ```

- **Validate Swipe Action:**

  ```
  Swipe from x=150, y=600 to x=150, y=100 and confirm correct behavior
  ```

- **Detailed Element Check:**

  ```
  Describe the UI element at position x=300, y=350 to ensure proper labeling and functionality
  ```

- **Show Your AI Agent the Simulator Screen:**

  ```
  View the current simulator screen
  ```

- **Take Screenshot:**

  ```
  Take a screenshot of the current simulator screen and save it to my_screenshot.png
  ```

- **Record Video:**

  ```
  Start recording a video of the simulator screen (saves to the default output directory, which is `~/Downloads` unless overridden by `IOS_SIMULATOR_MCP_DEFAULT_OUTPUT_DIR`)
  ```

- **Stop Recording:**

  ```
  Stop the current simulator screen recording
  ```

- **Install App:**

  ```
  Install the app at path/to/MyApp.app on the simulator
  ```

- **Launch App:**
  ```
  Launch the Safari app (com.apple.mobilesafari) on the simulator
  ```

## Prerequisites

- Node.js
- macOS (as iOS simulators are only available on macOS)
- [Xcode](https://developer.apple.com/xcode/resources/) and iOS simulators installed
- Facebook [IDB](https://fbidb.io/) tool [(see install guide)](https://fbidb.io/docs/installation)

## Installation

This section provides instructions for integrating the iOS Simulator MCP server with different Model Context Protocol (MCP) clients.

### Installation with Cursor

Cursor manages MCP servers through its configuration file located at `~/.cursor/mcp.json`.

#### Option 1: Using NPX (Recommended)

1.  Edit your Cursor MCP configuration file. You can often open it directly from Cursor or use a command like:
    ```bash
    # Open with your default editor (or use 'code', 'vim', etc.)
    open ~/.cursor/mcp.json
    # Or use Cursor's command if available
    # cursor ~/.cursor/mcp.json
    ```
2.  Add or update the `mcpServers` section with the iOS simulator server configuration:
    ```json
    {
      "mcpServers": {
        // ... other servers might be listed here ...
        "ios-simulator": {
          "command": "npx",
          "args": ["-y", "ios-simulator-mcp"]
        }
      }
    }
    ```
    Ensure the JSON structure is valid, especially if `mcpServers` already exists.
3.  Restart Cursor for the changes to take effect.

#### Option 2: Local Development

1.  Clone this repository:
    ```bash
    git clone https://github.com/joshuayoes/ios-simulator-mcp
    cd ios-simulator-mcp
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Build the project:
    ```bash
    npm run build
    ```
4.  Edit your Cursor MCP configuration file (as shown in Option 1).
5.  Add or update the `mcpServers` section, pointing to your local build:
    ```json
    {
      "mcpServers": {
        // ... other servers might be listed here ...
        "ios-simulator": {
          "command": "node",
          "args": ["/full/path/to/your/ios-simulator-mcp/build/index.js"]
        }
      }
    }
    ```
    **Important:** Replace `/full/path/to/your/` with the absolute path to where you cloned the `ios-simulator-mcp` repository.
6.  Restart Cursor for the changes to take effect.

### Installation with Claude Code

Claude Code CLI can manage MCP servers using the `claude mcp` commands or by editing its configuration files directly. For more details on Claude Code MCP configuration, refer to the [official documentation](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/tutorials#set-up-model-context-protocol-mcp).

#### Option 1: Using NPX (Recommended)

1.  Add the server using the `claude mcp add` command:
    ```bash
    claude mcp add ios-simulator npx ios-simulator-mcp
    ```
2.  Restart any running Claude Code sessions if necessary.

#### Option 2: Local Development

1.  Clone this repository, install dependencies, and build the project as described in the Cursor "Local Development" steps 1-3.
2.  Add the server using the `claude mcp add` command, pointing to your local build:
    ```bash
    claude mcp add ios-simulator -- node "/full/path/to/your/ios-simulator-mcp/build/index.js"
    ```
    **Important:** Replace `/full/path/to/your/` with the absolute path to where you cloned the `ios-simulator-mcp` repository.
3.  Restart any running Claude Code sessions if necessary.

## Configuration

### Environment Variables

| Variable                               | Description                                                                                                                                                                                          | Example                                  |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `IOS_SIMULATOR_MCP_FILTERED_TOOLS`     | A comma-separated list of tool names to filter out from being registered.                                                                                                                            | `screenshot,record_video,stop_recording` |
| `IOS_SIMULATOR_MCP_DEFAULT_OUTPUT_DIR` | Specifies a default directory for output files like screenshots and video recordings. If not set, `~/Downloads` will be used. This can be handy if your agent has limited access to the file system. | `~/Code/awesome-project/tmp`             |
| `IOS_SIMULATOR_MCP_IDB_PATH`           | Specifies a custom path to the IDB executable. If not set, `idb` will be used (assuming it's in your PATH). Useful if IDB is installed in a non-standard location.                                   | `~/bin/idb` or `/usr/local/bin/idb`      |

#### Configuration Example

```json
{
  "mcpServers": {
    "ios-simulator": {
      "command": "npx",
      "args": ["-y", "ios-simulator-mcp"],
      "env": {
        "IOS_SIMULATOR_MCP_FILTERED_TOOLS": "screenshot,record_video,stop_recording",
        "IOS_SIMULATOR_MCP_DEFAULT_OUTPUT_DIR": "~/Code/awesome-project/tmp",
        "IOS_SIMULATOR_MCP_IDB_PATH": "~/bin/idb"
      }
    }
  }
}
```

## MCP Registry Server Listings

<a href="https://glama.ai/mcp/servers/@joshuayoes/ios-simulator-mcp">
  
</a>

[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/joshuayoes-ios-simulator-mcp-badge.png)](https://mseep.ai/app/joshuayoes-ios-simulator-mcp)

## License

MIT
