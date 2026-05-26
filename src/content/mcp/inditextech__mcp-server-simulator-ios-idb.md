---
name: "InditexTech/mcp-server-simulator-ios-idb"
description: "A Model Context Protocol (MCP) server that enables LLMs to interact with iOS simulators (iPhone, iPad, etc.) through natural language commands."
category: "Developer Tools"
repo: "InditexTech/mcp-server-simulator-ios-idb"
stars: 304
url: "https://github.com/InditexTech/mcp-server-simulator-ios-idb"
body_length: 12046
license: "Apache-2.0"
language: "TypeScript"
body_tr: |-
  # 📱 iOS Simulator için MCP Sunucusu

  [![MCP Server](https://glama.ai/mcp/servers/@InditexTech/mcp-server-simulator-ios-idb/badge)](https://glama.ai/mcp/servers/@InditexTech/mcp-server-simulator-ios-idb)

  Large Language Models'in (LLM) doğal dil komutları aracılığıyla iOS simülatörleriyle etkileşime girmesini sağlayan bir Model Context Protocol (MCP) sunucusu.

  ## ℹ️ Genel Bakış

  Bu MCP sunucusu, Large Language Models (LLM'ler) ile iOS simülatörleri arasında bir köprü sağlayarak doğal dil komutları aracılığıyla kapsamlı kontrol imkanı sunar. İşte yapabilecekleri:

  Ayrıntılı kullanım için Kurulum kılavuzu ve Desteklenen Komutlar bölümlerine bakın. Bu sunucuyu doğrudan MCP entegrasyonu veya bağımsız bir kütüphane olarak kullanabilirsiniz.

  Bileşenlerin nasıl çalıştığını ve iOS simülatörlerinin doğal dil kontrolünü nasıl etkinleştirdiğini anlamak için Mimari bölümüne göz atın.

  ![demo](https://raw.githubusercontent.com/InditexTech/mcp-server-simulator-ios-idb/HEAD/demo/demo.gif)

  ### 🎮 Simülatör Kontrolü
  - Simülatör oturumları oluşturma ve yönetme
  - Simülatörü başlatma, kapatma ve durumunu izleme
  - Mevcut ve çalışan simülatörleri listeleme
  - Simülatör penceresine odaklanma

  ### 📱 Uygulama Yönetimi
  - iOS uygulamalarını kurma ve yönetme
  - Uygulamaları başlatma, durdurma ve kaldırma
  - Uygulama durumlarını izleme ve kurulumları doğrulama
  - Uygulama izinlerini ve konfigürasyonlarını işleme

  ### 🖱️ UI Etkileşimi ve Test
  - Simülatör UI'ı ile etkileşime girme
  - Dokunma, kaydırma ve düğme basma işlemleri gerçekleştirme
  - Metin ve anahtar dizileri girme
  - UI testleri için erişilebilirlik öğelerine erişim
  - UI etkileşimlerinin videosunu kaydetme

  ### 🛠️ Geliştirme ve Hata Ayıklama
  - Ekran görüntüleri ve sistem günlüklerini yakalama
  - Uygulamaların gerçek zamanlı hata ayıklaması
  - Kilitlenme günlüklerini izleme ve analiz etme
  - Dinamik kütüphaneleri kurma ve uygulama verilerini yönetme

  ### ⚡ İleri Özellikler
  - Ek işlevler şunları içerir:
    - Konum simülasyonu
    - Medya enjeksiyonu
    - URL şeması işleme
    - Kişi veritabanı yönetimi
    - Keychain işlemleri

  Ayrıntılı kullanım için Kurulum kılavuzu ve Desteklenen Komutlar bölümlerine bakın. Bu sunucuyu doğrudan MCP entegrasyonu veya bağımsız bir kütüphane olarak kullanabilirsiniz.

  Bileşenlerin nasıl çalıştığını ve iOS simülatörlerinin doğal dil kontrolünü nasıl etkinleştirdiğini anlamak için Mimari bölümüne göz atın.

  ## 📋 Gereksinimler

  - **macOS**: iOS simülatör desteği için gereklidir
  - **Node.js**: v14.0.0 veya üstü
  - **Homebrew**: Bağımlılıkları yüklemek için gereklidir
  - **XCode**: iOS simülatörleri yüklü halde

  ## 🚀 Kurulum

  Bu sunucuyu kurmanın en kolay yolu Cline aracılığıyladır:

  1. Basitçe Cline'a sorun:
  ```
  Add this mcp to cline https://github.com/InditexTech/mcp-server-simulator-ios-idb
  ```

  2. Cline kurulum sürecini otomatik olarak yönetecek, bağımlılık yönetimi ve konfigürasyonu dahil.

  Alternatif olarak, manuel olarak kurabilirsiniz:

  ```bash
  # Depoyu klonlayın
  git clone https://github.com/InditexTech/mcp-server-simulator-ios-idb.git
  cd mcp-server-simulator-ios-idb

  # Python sanal ortamı oluşturun ve etkinleştirin
  python3 -m venv venv
  source venv/bin/activate  # Unix/macOS üzerinde

  # Bağımlılıkları yükleyin
  npm install

  # Projeyi derleyin
  npm run build

  # Projeyi başlatın
  npm start

  # Testleri çalıştırın
  npm test
  ```

  Kurulum işlemi otomatik olarak:
  1. macOS üzerinde çalışıp çalışmadığını kontrol eder
  2. idb-companion'ı Homebrew aracılığıyla kurar
  3. fb-idb'yi sanal ortamda pip aracılığıyla kurar

  Not: Sunucuyu kullanırken sanal ortamı etkin tuttuğunuzdan emin olun. Terminal pencerenizi kapatıp daha sonra geri dönerseniz, `npm start` komutunu çalıştırmadan önce `source venv/bin/activate` komutuyla sanal ortamı yeniden etkinleştirmeniz gerekir.

  ## 🔌 MCP Entegrasyonu

  Bu sunucuyu Claude veya diğer LLM asistanları ile kullanmak için:

  1. Sunucuyu Claude Desktop'taki MCP ayarlarınıza ekleyin:

  ```json
  {
    "mcpServers": {
      "ios-simulator": {
        "command": "node",
        "args": ["/path/to/mcp-server-simulator-ios-idb/dist/index.js"],
        "env": {}
      }
    }
  }
  ```

  2. LLM artık iOS simülatörlerini kontrol etmek için doğal dil komutlarını kullanabilir:

  ```
  create a simulator session with iPhone 14
  install app /path/to/my-app.ipa
  launch app com.example.myapp
  tap at 100, 200
  take a screenshot
  ```

  ## 📚 Kütüphane Olarak Kullanım

  Bu paketi kendi projelerinizde bir kütüphane olarak da kullanabilirsiniz:

  ### 🔰 Temel Kullanım

  ```typescript
  import { createMCPServer } from 'mcp-server-simulator-ios-idb';

  async function main() {
    // MCP sunucusunun bir örneğini oluşturun
    const { orchestrator } = createMCPServer();
    
    // Doğal dil komutlarını işleyin
    
    // Bir simülatör oturumu oluşturun
    const sessionResult = await orchestrator.processInstruction('create session');
    console.log(`Session created: ${sessionResult.data}`);
    
    // Simülatör ile etkileşime girin
    await orchestrator.processInstruction('tap at 100, 200');
    
    // Ekran görüntüsü alın
    const screenshotResult = await orchestrator.processInstruction('take screenshot');
    console.log(`Screenshot saved at: ${screenshotResult.data}`);
  }

  main().catch(console.error);
  ```

  ### 🚀 İleri Kullanım

  Ayrıca bileşenleri doğrudan kullanabilirsiniz:

  ```typescript
  import { 
    IDBManager, 
    NLParser, 
    MCPOrchestrator,
    ParserToOrchestrator,
    OrchestratorToIDB
  } from 'mcp-server-simulator-ios-idb';

  // Örnekleri oluşturun
  const idbManager = new IDBManager();
  const parser = new NLParser();
  const orchestrator = new MCPOrchestrator(parser, idbManager);

  // Bileşenleri doğrudan kullanın
  const sessionId = await idbManager.createSimulatorSession({
    deviceName: 'iPhone 12',
    platformVersion: '15.0'
  });

  await idbManager.tap(sessionId, 100, 200);
  ```

  ## 🏗️ Proje Yapısı

  ```
  mcp-server-simulator-ios-idb/
  ├── src/                      # Kaynak kodu
  │   ├── adapters/             # Adapter bileşenleri
  │   ├── idb/                  # IDB manager uygulaması
  │   ├── mcp/                  # MCP sunucusu uygulaması
  │   ├── orchestrator/         # Komut orkestratörü
  │   ├── parser/              # Doğal dil ayrıştırıcı
  │   └── index.ts             # Ana giriş noktası
  ├── types/                   # TypeScript tür tanımları
  ├── scripts/                 # Kurulum betikleri
  ├── package.json            # Proje konfigürasyonu
  └── tsconfig.json          # TypeScript konfigürasyonu
  ```

  ## 🎯 Desteklenen Komutlar

  NLParser aşağıdaki doğal dil komutlarını destekler:

  ### 🎮 Simülatör Yönetimi
  | Komut | Açıklama | Örnek |
  |-------|----------|-------|
  | Oturum oluştur | Yeni bir simülatör oturumu oluşturur | "create session", "create simulator iPhone 12" |
  | Oturumu sonlandır | Mevcut oturumu sonlandırır | "terminate session", "close simulator" |
  | Simülatörleri listele | Mevcut simülatörleri listeler | "list simulators", "show simulators" |
  | Başlatılmış simülatörleri listele | Çalışan simülatörleri listeler | "list booted simulators", "show running simulators" |
  | Simülatörü başlat | UDID'ye göre simülatörü başlatır | "boot simulator 5A321B8F-4D85-4267-9F79-2F5C91D142C2" |
  | Simülatörü kapat | Simülatörü kapatır | "shutdown simulator 5A321B8F-4D85-4267-9F79-2F5C91D142C2" |
  | Simülatöre odaklan | Simülatör penceresini öne getirir | "focus simulator", "bring simulator to front" |
  | Simülatör oturumlarını listele | Etkin simülatör oturumlarını listeler | "list simulator sessions", "show active sessions" |

  ### 📱 Uygulama Yönetimi
  | Komut | Açıklama | Örnek |
  |-------|----------|-------|
  | Uygulamayı kur | Simülatöre uygulama kurar | "install app /path/to/app.ipa" |
  | Uygulamayı başlat | Simülatöre uygulamayı başlatır | "launch app com.example.app" |
  | Uygulamayı sonlandır | Çalışan uygulamayı sonlandırır | "terminate app com.example.app" |
  | Uygulamayı kaldır | Uygulamayı kaldırır | "uninstall app com.example.app" |
  | Uygulamaları listele | Kurulu uygulamaları listeler | "list apps", "show installed apps" |
  | Uygulama kurulu mu kontrol et | Uygulamanın kurulu olup olmadığını kontrol eder | "is app com.example.app installed" |

  ### 🖱️ UI Etkileşimi
  | Komut | Açıklama | Örnek |
  |-------|----------|-------|
  | Dokunma | Belirtilen koordinatlarda dokunur | "tap at 100, 200" |
  | Kaydırma | Kaydırma hareketi yapar | "swipe from 100, 200 to 300, 400" |
  | Düğmeye bas | Cihaz düğmesine basar | "press button HOME", "press button SIRI" |
  | Metin gir | Metin yazar | "input text Hello World" |
  | Tuşa bas | Kod ile tuşa basar | "press key 4" |
  | Tuş dizisi bas | Bir dizi tuşa basar | "press key sequence 4 5 6" |

  ### ♿ Erişilebilirlik
  | Komut | Açıklama | Örnek |
  |-------|----------|-------|
  | Öğeleri tanımla | Tüm erişilebilirlik öğelerini listeler | "describe all elements", "show accessibility elements" |
  | Noktayı tanımla | Koordinatlardaki öğeyi tanımlar | "describe point 100, 200", "what's at 150, 300" |

  ### 📸 Yakalama ve Günlükler
  | Komut | Açıklama | Örnek |
  |-------|----------|-------|
  | Ekran görüntüsü al | Ekran görüntüsü yakalır | "take screenshot", "capture screen" |
  | Video kaydet | Ekran etkinliğini kaydeder | "record video /path/output.mp4" |
  | Kaydı durdur | Video kaydını durdurur | "stop recording", "stop video recording" |
  | Günlükleri al | Sistem veya uygulama günlüklerini alır | "get logs", "get logs for com.example.app" |

  ### 🐛 Hata Ayıklama
  | Komut | Açıklama | Örnek |
  |-------|----------|-------|
  | Hata ayıklamayı başlat | Hata ayıklama oturumunu başlatır | "debug app com.example.app", "start debug com.example.app" |
  | Hata ayıklamayı durdur | Hata ayıklama oturumunu durdurur | "stop debug", "terminate debug session" |
  | Hata ayıklama durumu | Hata ayıklama oturumunun durumunu alır | "debug status", "show debug info" |

  ### 💥 Kilitlenme Günlükleri
  | Komut | Açıklama | Örnek |
  |-------|----------|-------|
  | Kilitlenme günlüklerini listele | Mevcut kilitlenme günlüklerini listeler | "list crash logs", "show crash logs" |
  | Kilitlenme günlüğünü göster | Kilitlenme günlüğü içeriğini gösterir | "show crash log crash_2023-01-01" |
  | Kilitlenme günlüklerini sil | Kilitlenme günlüklerini siler | "delete crash logs", "clear crash logs" |

  ### 🔧 Ek Komutlar
  | Komut | Açıklama | Örnek |
  |-------|----------|-------|
  | Dylib kur | Dinamik kütüphane kurar | "install dylib /path/to/library.dylib" |
  | URL'yi aç | Simülatörde URL açar | "open url https://example.com" |
  | Keychain'i temizle | Simülatörün keychain'ini temizler | "clear keychain" |
  | Konum belirle | Simülatörün konumunu ayarlar | "set location 37.7749, -122.4194" |
  | Medya ekle | Kamera fotoğraf akışına medya ekler | "add media /path/to/image.jpg" |
  | İzin onayla | Uygulama izinlerini onaylar | "approve permissions com.example.app photos camera" |
  | Kişileri güncelle | Kişiler veritabanını günceller | "update contacts /path/to/contacts.sqlite" |

  Arayüz, idb CLI aracında bulunan tüm komutları destekleyerek iOS simülatör otomasyonu için kapsamlı bir işlem seti sağlar.

  ## 🔍 Mimari

  Sunucu üç ana bileşenden oluşur:

  1. **IDBManager**: iOS simülatörleriyle idb aracılığıyla doğrudan etkileşime giren düşük seviye bileşen.
  2. **NLParser**: Doğal dil talimatlarını yorumlayan ve bunları yapılandırılmış komutlara dönüştüren bileşen.
  3. **MCPOrchestrator**: Parser ve IDBManager arasındaki etkileşimleri koordine eden merkezi bileşen.

  Bu bileşenler adaptörler aracılığıyla bağlanır:
  - **ParserToOrchestrator**: Parser sonuçlarını orkestratör komutlarına dönüştürür.
  - **OrchestratorToIDB**: Orkestratör komutlarını IDBManager çağrılarına çevirir.

  ## 🔌 MCP Entegrasyonu

  Bu sunucuyu Model Context Protocol ile kullanmak için:

  1. Sunucuyu MCP ayarlarınıza ekleyin:

  ```json
  {
    "mcpServers": {
      "ios-simulator": {
        "command": "node",
        "args": ["/path/to/mcp-server-simulator-ios-idb/dist/index.js"],
        "env": {}
      }
    }
  }
  ```

  2. LLM uygulamanızda sunucuya bağlanın:

  ```typescript
  const result = await useMcpTool({
    serverName: "ios-simulator",
    toolName: "process-instruction",
    arguments: {
      instruction: "create simulator session"
    }
  });
  ```

  ## 🙏 Teşekkürler

  Bu proje, temel iOS simülatör kontrol yeteneklerini sağlayan [facebook/idb](https://github.com/facebook/idb) olmadan mümkün olmayacaktı. idb projesi üzerindeki bu kadar güçlü ve güvenilir bir araç oluşturmak ve sürdürmek için Facebook/Meta ekibine ve tüm katkıda bulunanlar öğesine şükranlarımızı sunuyoruz.

  ## 📄 Lisans

  Bu araç Apache-2.0 koşulları altında açık kaynak olarak mevcuttur.
---

# 📱 MCP Server for iOS Simulator

[![MCP Server](https://glama.ai/mcp/servers/@InditexTech/mcp-server-simulator-ios-idb/badge)](https://glama.ai/mcp/servers/@InditexTech/mcp-server-simulator-ios-idb)

A Model Context Protocol (MCP) server that enables LLMs to interact with iOS simulators through natural language commands.

## ℹ️ Overview

This MCP server provides a bridge between Large Language Models (LLMs) and iOS simulators, offering comprehensive control through natural language commands. Here's what it can do:

For detailed usage, see the Installation guide and Supported Commands sections. You can use this server either through direct MCP integration or as a standalone library.

Check out the Architecture section to understand how the components work together to enable natural language control of iOS simulators.

![demo](https://raw.githubusercontent.com/InditexTech/mcp-server-simulator-ios-idb/HEAD/demo/demo.gif)

### 🎮 Simulator Control
- Create and manage simulator sessions
- Boot, shutdown, and monitor simulator states
- List available and running simulators
- Focus simulator windows

### 📱 Application Management
- Install and manage iOS applications
- Launch, terminate, and uninstall apps
- Monitor app states and verify installations
- Handle app permissions and configurations

### 🖱️ UI Interaction & Testing
- Interact with the simulator UI
- Execute tap, swipe, and button press actions
- Input text and key sequences
- Access accessibility elements for UI testing
- Record videos of UI interactions

### 🛠️ Development & Debugging
- Capture screenshots and system logs
- Debug applications in real-time
- Monitor and analyze crash logs
- Install dynamic libraries and manage app data

### ⚡ Advanced Features
- Additional functionality includes:
  - Location simulation
  - Media injection
  - URL scheme handling
  - Contact database management
  - Keychain operations

For detailed usage, see the Installation guide and Supported Commands sections. You can use this server either through direct MCP integration or as a standalone library.

Check out the Architecture section to understand how the components work together to enable natural language control of iOS simulators.

## 📋 Requirements

- **macOS**: Required for iOS simulator support
- **Node.js**: v14.0.0 or higher
- **Homebrew**: Required for installing dependencies
- **XCode**: With iOS simulators installed

## 🚀 Installation

The easiest way to install this server is through Cline:

1. Simply ask Cline:
```
Add this mcp to cline https://github.com/InditexTech/mcp-server-simulator-ios-idb
```

2. Cline will handle the installation process automatically, including dependency management and configuration.

Alternatively, you can install it manually:

```bash
# Clone the repository
git clone https://github.com/InditexTech/mcp-server-simulator-ios-idb.git
cd mcp-server-simulator-ios-idb

# Create and activate Python virtual environment
python3 -m venv venv
source venv/bin/activate  # On Unix/macOS

# Install dependencies
npm install

# Build the project
npm run build

# Start the project
npm start

# Run tests
npm test
```

The installation process will automatically:
1. Check if you're running macOS
2. Install idb-companion via Homebrew
3. Install fb-idb via pip in the virtual environment

Note: Make sure to keep the virtual environment activated while using the server. If you close your terminal and come back later, you'll need to reactivate the virtual environment with the `source venv/bin/activate` command before running `npm start`.

## 🔌 MCP Integration

To use this server with Claude or other LLM assistants:

1. Add the server to your MCP settings in Claude Desktop:

```json
{
  "mcpServers": {
    "ios-simulator": {
      "command": "node",
      "args": ["/path/to/mcp-server-simulator-ios-idb/dist/index.js"],
      "env": {}
    }
  }
}
```

2. The LLM can now use natural language commands to control iOS simulators:

```
create a simulator session with iPhone 14
install app /path/to/my-app.ipa
launch app com.example.myapp
tap at 100, 200
take a screenshot
```

## 📚 Usage as a Library

You can also use this package as a library in your own projects:

### 🔰 Basic Usage

```typescript
import { createMCPServer } from 'mcp-server-simulator-ios-idb';

async function main() {
  // Create an instance of the MCP server
  const { orchestrator } = createMCPServer();
  
  // Process natural language commands
  
  // Create a simulator session
  const sessionResult = await orchestrator.processInstruction('create session');
  console.log(`Session created: ${sessionResult.data}`);
  
  // Interact with the simulator
  await orchestrator.processInstruction('tap at 100, 200');
  
  // Capture a screenshot
  const screenshotResult = await orchestrator.processInstruction('take screenshot');
  console.log(`Screenshot saved at: ${screenshotResult.data}`);
}

main().catch(console.error);
```

### 🚀 Advanced Usage

You can also use the individual components directly:

```typescript
import { 
  IDBManager, 
  NLParser, 
  MCPOrchestrator,
  ParserToOrchestrator,
  OrchestratorToIDB
} from 'mcp-server-simulator-ios-idb';

// Create instances
const idbManager = new IDBManager();
const parser = new NLParser();
const orchestrator = new MCPOrchestrator(parser, idbManager);

// Use the components directly
const sessionId = await idbManager.createSimulatorSession({
  deviceName: 'iPhone 12',
  platformVersion: '15.0'
});

await idbManager.tap(sessionId, 100, 200);
```

## 🏗️ Project Structure

```
mcp-server-simulator-ios-idb/
├── src/                      # Source code
│   ├── adapters/             # Adapter components
│   ├── idb/                  # IDB manager implementation
│   ├── mcp/                  # MCP server implementation
│   ├── orchestrator/         # Command orchestrator
│   ├── parser/              # Natural language parser
│   └── index.ts             # Main entry point
├── types/                   # TypeScript type definitions
├── scripts/                 # Installation scripts
├── package.json            # Project configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎯 Supported Commands

The NLParser supports the following natural language commands:

### 🎮 Simulator Management
| Command | Description | Example |
|---------|-------------|---------|
| Create session | Creates a new simulator session | "create session", "create simulator iPhone 12" |
| Terminate session | Terminates the current session | "terminate session", "close simulator" |
| List simulators | Lists available simulators | "list simulators", "show simulators" |
| List booted simulators | Lists running simulators | "list booted simulators", "show running simulators" |
| Boot simulator | Boots a simulator by UDID | "boot simulator 5A321B8F-4D85-4267-9F79-2F5C91D142C2" |
| Shutdown simulator | Shuts down a simulator | "shutdown simulator 5A321B8F-4D85-4267-9F79-2F5C91D142C2" |
| Focus simulator | Brings simulator window to front | "focus simulator", "bring simulator to front" |
| List simulator sessions | Lists active simulator sessions | "list simulator sessions", "show active sessions" |

### 📱 App Management
| Command | Description | Example |
|---------|-------------|---------|
| Install app | Installs an app on the simulator | "install app /path/to/app.ipa" |
| Launch app | Launches an app on the simulator | "launch app com.example.app" |
| Terminate app | Terminates a running app | "terminate app com.example.app" |
| Uninstall app | Uninstalls an app | "uninstall app com.example.app" |
| List apps | Lists installed applications | "list apps", "show installed apps" |
| Check if app installed | Checks if an app is installed | "is app com.example.app installed" |

### 🖱️ UI Interaction
| Command | Description | Example |
|---------|-------------|---------|
| Tap | Taps at specific coordinates | "tap at 100, 200" |
| Swipe | Performs a swipe gesture | "swipe from 100, 200 to 300, 400" |
| Press button | Presses a device button | "press button HOME", "press button SIRI" |
| Input text | Types text | "input text Hello World" |
| Press key | Presses a key by code | "press key 4" |
| Press key sequence | Presses a sequence of keys | "press key sequence 4 5 6" |

### ♿ Accessibility
| Command | Description | Example |
|---------|-------------|---------|
| Describe elements | Lists all accessibility elements | "describe all elements", "show accessibility elements" |
| Describe point | Describes element at coordinates | "describe point 100, 200", "what's at 150, 300" |

### 📸 Capture and Logs
| Command | Description | Example |
|---------|-------------|---------|
| Take screenshot | Captures a screenshot | "take screenshot", "capture screen" |
| Record video | Records screen activity | "record video /path/output.mp4" |
| Stop recording | Stops video recording | "stop recording", "stop video recording" |
| Get logs | Retrieves system or app logs | "get logs", "get logs for com.example.app" |

### 🐛 Debug
| Command | Description | Example |
|---------|-------------|---------|
| Start debug | Starts a debug session | "debug app com.example.app", "start debug com.example.app" |
| Stop debug | Stops a debug session | "stop debug", "terminate debug session" |
| Debug status | Gets debug session status | "debug status", "show debug info" |

### 💥 Crash Logs
| Command | Description | Example |
|---------|-------------|---------|
| List crash logs | Lists available crash logs | "list crash logs", "show crash logs" |
| Show crash log | Shows content of a crash log | "show crash log crash_2023-01-01" |
| Delete crash logs | Deletes crash logs | "delete crash logs", "clear crash logs" |

### 🔧 Additional Commands
| Command | Description | Example |
|---------|-------------|---------|
| Install dylib | Installs a dynamic library | "install dylib /path/to/library.dylib" |
| Open URL | Opens a URL in the simulator | "open url https://example.com" |
| Clear keychain | Clears the simulator's keychain | "clear keychain" |
| Set location | Sets the simulator's location | "set location 37.7749, -122.4194" |
| Add media | Adds media to the camera roll | "add media /path/to/image.jpg" |
| Approve permissions | Approves app permissions | "approve permissions com.example.app photos camera" |
| Update contacts | Updates contacts database | "update contacts /path/to/contacts.sqlite" |

The interface supports all commands available in the idb CLI tool, providing a comprehensive set of operations for iOS simulator automation.

## 🔍 Architecture

The server consists of three main components:

1. **IDBManager**: Low-level component that interacts directly with iOS simulators through idb.
2. **NLParser**: Component that interprets natural language instructions and converts them into structured commands.
3. **MCPOrchestrator**: Central component that coordinates interactions between the parser and the IDBManager.

These components are connected through adapters:
- **ParserToOrchestrator**: Converts parser results into orchestrator commands.
- **OrchestratorToIDB**: Translates orchestrator commands into IDBManager calls.

## 🔌 MCP Integration

To use this server with the Model Context Protocol:

1. Add the server to your MCP settings:

```json
{
  "mcpServers": {
    "ios-simulator": {
      "command": "node",
      "args": ["/path/to/mcp-server-simulator-ios-idb/dist/index.js"],
      "env": {}
    }
  }
}
```

2. Connect to the server in your LLM application:

```typescript
const result = await useMcpTool({
  serverName: "ios-simulator",
  toolName: "process-instruction",
  arguments: {
    instruction: "create simulator session"
  }
});
```

## 🙏 Acknowledgments

This project would not be possible without [facebook/idb](https://github.com/facebook/idb), which provides the underlying iOS simulator control capabilities. We extend our sincere gratitude to the Facebook/Meta team and all contributors to the idb project for creating and maintaining such a powerful and reliable tool.

## 📄 License

This tool is available as open source under the terms of the Apache-2.0.
