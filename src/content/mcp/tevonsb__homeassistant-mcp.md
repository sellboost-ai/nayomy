---
name: "tevonsb/homeassistant-mcp"
description: "Access Home Assistant data and control devices (lights, switches, thermostats, etc)."
description_tr: "Home Assistant verilerine erişin ve cihazları (ışıklar, anahtarlar, termostatlar vb.) kontrol edin."
category: "Other Tools and Integrations"
repo: "tevonsb/homeassistant-mcp"
stars: 572
url: "https://github.com/tevonsb/homeassistant-mcp"
body_length: 17210
license: "Apache-2.0"
language: "TypeScript"
body_tr: |-
  # Home Assistant için Model Context Protocol Sunucusu

  Sunucu, yerel bir Home Assistant örneğine erişimi bir LLM uygulaması ile paylaşmak için MCP protokolünü kullanır.

  Home Assistant örneğiniz ve Dil Öğrenme Modelleri (LLM'ler) arasında güçlü bir köprü, Model Context Protocol (MCP) aracılığıyla akıllı ev cihazlarınızı doğal dil ile kontrol etme ve izleme olanağı sunar. Bu sunucu, cihaz kontrolünden sistem yönetimine kadar tüm Home Assistant ekosistemini yönetmek için kapsamlı bir API sağlar.

  ![License](https://img.shields.io/badge/license-MIT-blue.svg)
  ![Node.js](https://img.shields.io/badge/node-%3E%3D20.10.0-green.svg)
  ![Docker Compose](https://img.shields.io/badge/docker-compose-%3E%3D1.27.0-blue.svg)
  ![NPM](https://img.shields.io/badge/npm-%3E%3D7.0.0-orange.svg)
  ![TypeScript](https://img.shields.io/badge/typescript-%5E5.0.0-blue.svg)
  ![Test Coverage](https://img.shields.io/badge/coverage-95%25-brightgreen.svg)

  ## Özellikler

  - 🎮 **Cihaz Kontrolü**: Herhangi bir Home Assistant cihazını doğal dil ile kontrol edin
  - 🔄 **Gerçek Zamanlı Güncellemeler**: Server-Sent Events (SSE) ile anında güncellemeler alın
  - 🤖 **Otomasyon Yönetimi**: Otomasyonları oluşturun, güncelleyin ve yönetin
  - 📊 **Durum İzleme**: Cihaz durumlarını takip edin ve sorgulayın
  - 🔐 **Güvenli**: Token tabanlı kimlik doğrulama ve hız sınırlaması
  - 📱 **Mobil Uyumlu**: HTTP destekleyen herhangi bir istemci ile çalışır

  ## SSE ile Gerçek Zamanlı Güncellemeler

  Sunucu, Home Assistant örneğinizden gerçek zamanlı güncellemeler sağlayan güçlü bir Server-Sent Events (SSE) sistemi içerir. Bu sayede şunları yapabilirsiniz:

  - 🔄 Herhangi bir cihazın durum değişikliklerini anında alın
  - 📡 Otomasyon tetikleyicilerini ve yürütmelerini izleyin
  - 🎯 Belirli alan adlarına veya varlıklara abone olun
  - 📊 Servis çağrılarını ve betik yürütmelerini takip edin

  ### Hızlı SSE Örneği

  ```javascript
  const eventSource = new EventSource(
    'http://localhost:3000/subscribe_events?token=YOUR_TOKEN&domain=light'
  );

  eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('Update received:', data);
  };
  ```

  SSE sistemi hakkında tam belgeler için [SSE_API.md](docs/SSE_API.md) dosyasını inceleyin.

  ## İçindekiler

  - [Ana Özellikler](#ana-özellikler)
  - [Ön Koşullar](#ön-koşullar)
  - [Kurulum](#kurulum)
    - [Temel Kurulum](#temel-kurulum)
    - [Docker Kurulumu (Önerilir)](#docker-kurulumu-önerilir)
  - [Yapılandırma](#yapılandırma)
  - [Geliştirme](#geliştirme)
  - [API Referansı](#api-referansı)
    - [Cihaz Kontrolü](#cihaz-kontrolü)
    - [Eklenti Yönetimi](#eklenti-yönetimi)
    - [Paket Yönetimi](#paket-yönetimi)
    - [Otomasyon Yönetimi](#otomasyon-yönetimi)
  - [Doğal Dil Entegrasyonu](#doğal-dil-entegrasyonu)
  - [Sorun Giderme](#sorun-giderme)
  - [Proje Durumu](#proje-durumu)
  - [Katkıda Bulunma](#katkıda-bulunma)
  - [Kaynaklar](#kaynaklar)
  - [Lisans](#lisans)

  ## Ana Özellikler

  ### Temel İşlevsellik 🎮
  - **Akıllı Cihaz Kontrolü**
    - 💡 **Işıklar**: Parlaklık, renk sıcaklığı, RGB renk
    - 🌡️ **İklim**: Sıcaklık, HVAC modları, fan modları, nem
    - 🚪 **Perdeler**: Konumu ve eğim kontrolü
    - 🔌 **Anahtarlar**: Açma/kapama kontrolü
    - 🚨 **Sensörler & Kontaklar**: Durum izleme
    - 🎵 **Medya Oynatıcılar**: Oynatma kontrolü, ses, kaynak seçimi
    - 🌪️ **Fanlar**: Hız, salınım, yön
    - 🔒 **Kilitler**: Kilit açma/kilitleme kontrolü
    - 🧹 **Elektrikli Süpürgeler**: Başlatma, durdurma, temele dönüş
    - 📹 **Kameralar**: Hareket algılama, anlık görüntüler

  ### Sistem Yönetimi 🛠️
  - **Eklenti Yönetimi**
    - Mevcut eklentileri listeleyin
    - Eklentileri yükleyin/kaldırın
    - Eklentileri başlatın/durdurun/yeniden başlatın
    - Sürüm yönetimi
    - Yapılandırma erişimi

  - **Paket Yönetimi (HACS)**
    - Home Assistant Community Store entegrasyonu
    - Birden fazla paket türü desteği:
      - Özel entegrasyonlar
      - Ön uç temalar
      - Python betikleri
      - AppDaemon uygulamaları
      - NetDaemon uygulamaları
    - Sürüm kontrolü ve güncellemeler
    - Depo yönetimi

  - **Otomasyon Yönetimi**
    - Otomasyonları oluşturun ve düzenleyin
    - Gelişmiş yapılandırma seçenekleri:
      - Birden fazla tetikleyici türü
      - Karmaşık koşullar
      - İşlem dizileri
      - Yürütme modları
    - Mevcut otomasyonları çoğaltın ve değiştirin
    - Otomasyon kurallarını etkinleştirin/devre dışı bırakın
    - Otomasyonu manuel olarak tetikleyin

  ### Mimari Özellikler 🏗️
  - **Akıllı Organizasyon**
    - Alan ve kat tabanlı cihaz gruplandırması
    - Durum izleme ve sorgulaması
    - Akıllı bağlam farkındalığı
    - Geçmiş veri erişimi

  - **Sağlam Mimari**
    - Kapsamlı hata işleme
    - Durum doğrulaması
    - Güvenli API entegrasyonu
    - TypeScript tür güvenliği
    - Geniş test kapsamı

  ## Ön Koşullar

  - **Node.js** 20.10.0 veya üstü
  - **NPM** paket yöneticisi
  - **Docker Compose** konteynerizasyon için
  - Çalışan **Home Assistant** örneği
  - Home Assistant uzun süreli erişim token'ı ([Token nasıl alınır](https://community.home-assistant.io/t/how-to-get-long-lived-access-token/162159))
  - Paket yönetimi özellikleri için **HACS** yüklü
  - Eklenti yönetimi için **Supervisor** erişimi

  ## Kurulum

  ### Temel Kurulum

  ```bash
  # Deposu klonlayın
  git clone https://github.com/tevonsb/homeassistant-mcp.git
  cd homeassistant-mcp

  # Bağımlılıkları yükleyin
  npm install

  # Projeyi derleyin
  npm run build
  ```

  ### Docker Kurulumu (Önerilir)

  Proje, kolay dağıtım ve farklı platformlar arasında tutarlı ortamlar için Docker desteği içerir.

  1. **Deposu klonlayın:**
      ```bash
      git clone https://github.com/tevonsb/homeassistant-mcp.git
      cd homeassistant-mcp
      ```

  2. **Ortamı yapılandırın:**
      ```bash
      cp .env.example .env
      ```
      `.env` dosyasını Home Assistant yapılandırmanız ile düzenleyin:
      ```env
      # Home Assistant Yapılandırması
      HASS_HOST=http://homeassistant.local:8123
      HASS_TOKEN=your_home_assistant_token
      HASS_SOCKET_URL=ws://homeassistant.local:8123/api/websocket

      # Sunucu Yapılandırması
      PORT=3000
      NODE_ENV=production
      DEBUG=false
      ```

  3. **Docker Compose ile derleyin ve çalıştırın:**
      ```bash
      # Konteyner'ları derleyin ve başlatın
      docker compose up -d

      # Günlükleri görüntüleyin
      docker compose logs -f

      # Servisi durdurun
      docker compose down
      ```

  4. **Kurulumu doğrulayın:**
      Sunucu şimdi `http://localhost:3000` adresinde çalışıyor olmalıdır. Health endpoint'i `http://localhost:3000/health` adresinde kontrol edebilirsiniz.

  5. **Uygulamayı güncelleyin:**
      ```bash
      # En son değişiklikleri çekin
      git pull

      # Konteyner'ları yeniden derleyin ve başlatın
      docker compose up -d --build
      ```

  #### Docker Yapılandırması

  Docker kurulumu aşağıdakileri içerir:
  - Optimal görüntü boyutu için çok aşamalı derleme
  - Konteyner izleme için sağlık kontrolleri
  - Ortam yapılandırması için birim bağlama
  - Başarısızlıkta otomatik konteyner yeniden başlatma
  - API erişimi için açılan port 3000

  #### Docker Compose Ortam Değişkenleri

  Tüm ortam değişkenleri `.env` dosyasında yapılandırılabilir. Aşağıdaki değişkenler desteklenir:
  - `HASS_HOST`: Home Assistant örneğinizin URL'si
  - `HASS_TOKEN`: Home Assistant için uzun süreli erişim token'ı
  - `HASS_SOCKET_URL`: Home Assistant WebSocket URL'si
  - `PORT`: Sunucu port'u (varsayılan: 3000)
  - `NODE_ENV`: Ortam (production/development)
  - `DEBUG`: Debug modunu etkinleştir (true/false)

  ## Yapılandırma

  ### Ortam Değişkenleri

  ```env
  # Home Assistant Yapılandırması
  HASS_HOST=http://homeassistant.local:8123  # Home Assistant örneğinizin URL'si
  HASS_TOKEN=your_home_assistant_token       # Uzun süreli erişim token'ı
  HASS_SOCKET_URL=ws://homeassistant.local:8123/api/websocket  # WebSocket URL'si

  # Sunucu Yapılandırması
  PORT=3000                # Sunucu port'u (varsayılan: 3000)
  NODE_ENV=production     # Ortam (production/development)
  DEBUG=false            # Debug modunu etkinleştir

  # Test Yapılandırması
  TEST_HASS_HOST=http://localhost:8123  # Test örneği URL'si
  TEST_HASS_TOKEN=test_token           # Test token'ı
  ```

  ### Yapılandırma Dosyaları

  1. **Geliştirme**: `.env.example` dosyasını `.env.development` olarak kopyalayın
  2. **Üretim**: `.env.example` dosyasını `.env.production` olarak kopyalayın
  3. **Test**: `.env.example` dosyasını `.env.test` olarak kopyalayın

  ### Claude Desktop'a (veya diğer istemcilere) Ekleme

  Yeni Home Assistant MCP sunucusunu kullanmak için Claude Desktop'ı istemci olarak ekleyebilirsiniz. Aşağıdaki yapılandırmayı ekleyin. Bunun MCP'yi claude içinde çalıştıracağını ve Docker yöntemi ile çalışmayacağını unutmayın.

  ```
  {
    "homeassistant": {
      "command": "node",
      "args": [<path/to/your/dist/folder>]
      "env": {
        NODE_ENV=development
        HASS_HOST=http://homeassistant.local:8123
        HASS_TOKEN=your_home_assistant_token
        PORT=3000
        HASS_SOCKET_URL=ws://homeassistant.local:8123/api/websocket
        LOG_LEVEL=debug
      }
    }
  }

  ```



  ## API Referansı

  ### Cihaz Kontrolü

  #### Ortak Entity Kontrolleri
  ```json
  {
    "tool": "control",
    "command": "turn_on",  // veya "turn_off", "toggle"
    "entity_id": "light.living_room"
  }
  ```

  #### Işık Kontrolü
  ```json
  {
    "tool": "control",
    "command": "turn_on",
    "entity_id": "light.living_room",
    "brightness": 128,
    "color_temp": 4000,
    "rgb_color": [255, 0, 0]
  }
  ```

  ### Eklenti Yönetimi

  #### Mevcut Eklentileri Listeleyin
  ```json
  {
    "tool": "addon",
    "action": "list"
  }
  ```

  #### Eklenti Yükleyin
  ```json
  {
    "tool": "addon",
    "action": "install",
    "slug": "core_configurator",
    "version": "5.6.0"
  }
  ```

  #### Eklenti Durumunu Yönetin
  ```json
  {
    "tool": "addon",
    "action": "start",  // veya "stop", "restart"
    "slug": "core_configurator"
  }
  ```

  ### Paket Yönetimi

  #### HACS Paketlerini Listeleyin
  ```json
  {
    "tool": "package",
    "action": "list",
    "category": "integration"  // veya "plugin", "theme", "python_script", "appdaemon", "netdaemon"
  }
  ```

  #### Paket Yükleyin
  ```json
  {
    "tool": "package",
    "action": "install",
    "category": "integration",
    "repository": "hacs/integration",
    "version": "1.32.0"
  }
  ```

  ### Otomasyon Yönetimi

  #### Otomasyon Oluşturun
  ```json
  {
    "tool": "automation_config",
    "action": "create",
    "config": {
      "alias": "Motion Light",
      "description": "Turn on light when motion detected",
      "mode": "single",
      "trigger": [
        {
          "platform": "state",
          "entity_id": "binary_sensor.motion",
          "to": "on"
        }
      ],
      "action": [
        {
          "service": "light.turn_on",
          "target": {
            "entity_id": "light.living_room"
          }
        }
      ]
    }
  }
  ```

  #### Otomasyonu Çoğaltın
  ```json
  {
    "tool": "automation_config",
    "action": "duplicate",
    "automation_id": "automation.motion_light"
  }
  ```

  ### Temel İşlevler

  #### Durum Yönetimi
  ```http
  GET /api/state
  POST /api/state
  ```

  Sistemin mevcut durumunu yönetir.

  **Örnek İstek:**
  ```json
  POST /api/state
  {
    "context": "living_room",
    "state": {
      "lights": "on",
      "temperature": 22
    }
  }
  ```

  #### Bağlam Güncellemeleri
  ```http
  POST /api/context
  ```

  Mevcut bağlamı yeni bilgiler ile günceller.

  **Örnek İstek:**
  ```json
  POST /api/context
  {
    "user": "john",
    "location": "kitchen",
    "time": "morning",
    "activity": "cooking"
  }
  ```

  ### İşlem Endpoint'leri

  #### İşlemi Yürütün
  ```http
  POST /api/action
  ```

  Belirtilen işlemi verilen parametreler ile yürütür.

  **Örnek İstek:**
  ```json
  POST /api/action
  {
    "action": "turn_on_lights",
    "parameters": {
      "room": "living_room",
      "brightness": 80
    }
  }
  ```

  #### Toplu İşlemler
  ```http
  POST /api/actions/batch
  ```

  Birden fazla işlemi sırayla yürütür.

  **Örnek İstek:**
  ```json
  POST /api/actions/batch
  {
    "actions": [
      {
        "action": "turn_on_lights",
        "parameters": {
          "room": "living_room"
        }
      },
      {
        "action": "set_temperature",
        "parameters": {
          "temperature": 22
        }
      }
    ]
  }
  ```

  ### Sorgulama İşlevleri

  #### Kullanılabilir İşlemleri Alın
  ```http
  GET /api/actions
  ```

  Tüm kullanılabilir işlemlerin listesini döndürür.

  **Örnek Yanıt:**
  ```json
  {
    "actions": [
      {
        "name": "turn_on_lights",
        "parameters": ["room", "brightness"],
        "description": "Turns on lights in specified room"
      },
      {
        "name": "set_temperature",
        "parameters": ["temperature"],
        "description": "Sets temperature in current context"
      }
    ]
  }
  ```

  #### Bağlam Sorgusu
  ```http
  GET /api/context?type=current
  ```

  Bağlam bilgilerini alır.

  **Örnek Yanıt:**
  ```json
  {
    "current_context": {
      "user": "john",
      "location": "kitchen",
      "time": "morning",
      "activity": "cooking"
    }
  }
  ```

  ### WebSocket Olayları

  Sunucu, WebSocket bağlantıları aracılığıyla gerçek zamanlı güncellemeleri destekler.

  ```javascript
  // İstemci tarafı bağlantı örneği
  const ws = new WebSocket('ws://localhost:3000/ws');

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('Received update:', data);
  };
  ```

  #### Desteklenen Olaylar

  - `state_change`: Sistem durumu değiştiğinde yayınlanır
  - `context_update`: Bağlam güncellendiğinde yayınlanır
  - `action_executed`: İşlem tamamlandığında yayınlanır
  - `error`: Bir hata oluştuğunda yayınlanır

  **Örnek Olay Verileri:**
  ```json
  {
    "event": "state_change",
    "data": {
      "previous_state": {
        "lights": "off"
      },
      "current_state": {
        "lights": "on"
      },
      "timestamp": "2024-03-20T10:30:00Z"
    }
  }
  ```

  ### Hata İşleme

  Tüm endpoint'ler standart HTTP durum kodlarını döndürür:

  - 200: Başarılı
  - 400: Kötü İstek
  - 401: Yetkisiz
  - 403: Yasak
  - 404: Bulunamadı
  - 500: İç Sunucu Hatası

  **Hata Yanıtı Biçimi:**
  ```json
  {
    "error": {
      "code": "INVALID_PARAMETERS",
      "message": "Missing required parameter: room",
      "details": {
        "missing_fields": ["room"]
      }
    }
  }
  ```

  ### Hız Sınırlaması

  API, kötüye kullanımı önlemek için hız sınırlaması uygular:

  - Normal endpoint'ler için IP başına dakika başına 100 istek
  - WebSocket bağlantıları için IP başına dakika başına 1000 istek

  Hız sınırı aşıldığında, sunucu şunu döndürür:

  ```json
  {
    "error": {
      "code": "RATE_LIMIT_EXCEEDED",
      "message": "Too many requests",
      "reset_time": "2024-03-20T10:31:00Z"
    }
  }
  ```

  ### Örnek Kullanım

  #### curl Kullanma
  ```bash
  # Mevcut durumu alın
  curl -X GET \
    http://localhost:3000/api/state \
    -H 'Authorization: ApiKey your_api_key_here'

  # İşlemi yürütün
  curl -X POST \
    http://localhost:3000/api/action \
    -H 'Authorization: ApiKey your_api_key_here' \
    -H 'Content-Type: application/json' \
    -d '{
      "action": "turn_on_lights",
      "parameters": {
        "room": "living_room",
        "brightness": 80
      }
    }'
  ```

  #### JavaScript Kullanma
  ```javascript
  // İşlemi yürütün
  async function executeAction() {
    const response = await fetch('http://localhost:3000/api/action', {
      method: 'POST',
      headers: {
        'Authorization': 'ApiKey your_api_key_here',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        action: 'turn_on_lights',
        parameters: {
          room: 'living_room',
          brightness: 80
        }
      })
    });
    
    const data = await response.json();
    console.log('Action result:', data);
  }
  ```

  ## Geliştirme

  ```bash
  # Sıcak yükleme ile geliştirme modu
  npm run dev

  # Projeyi derleyin
  npm run build

  # Üretim modu
  npm run start

  # Testleri çalıştırın
  npx jest --config=jest.config.cjs

  # Kapsama ile testleri çalıştırın
  npx jest --coverage

  # Kodu lint'leyin
  npm run lint

  # Kodu biçimlendir
  npm run format
  ```

  ## Sorun Giderme

  ### Sık Karşılaşılan Sorunlar

  1. **Node.js Sürümü (`toSorted is not a function`)**
     - **Çözüm:** Node.js 20.10.0+ sürümüne güncelleyin
     ```bash
     nvm install 20.10.0
     nvm use 20.10.0
     ```

  2. **Bağlantı Sorunları**
     - Home Assistant'ın çalışıp çalışmadığını doğrulayın
     - `HASS_HOST` erişimini kontrol edin
     - Token izinlerini doğrulayın
     - Gerçek zamanlı güncellemeler için WebSocket bağlantısını sağlayın

  3. **Eklenti Yönetimi Sorunları**
     - Supervisor erişimini doğrulayın
     - Eklenti uyumluluğunu kontrol edin
     - Sistem kaynaklarını doğrulayın

  4. **HACS Entegrasyon Sorunları**
     - HACS yüklemesini doğrulayın
     - HACS entegrasyon durumunu kontrol edin
     - Depo erişimini doğrulayın

  5. **Otomasyon Sorunları**
     - Varlık kullanılabilirliğini doğrulayın
     - Tetikleyici koşullarını kontrol edin
     - Servis çağrılarını doğrulayın
     - Yürütme günlüklerini izleyin

  ## Proje Durumu

  ✅ **Tamamlandı**
  - Entity, Floor ve Area erişimi
  - Cihaz kontrolü (Işıklar, İklim, Perdeler, Anahtarlar, Kontaklar)
  - Eklenti yönetim sistemi
  - HACS aracılığıyla paket yönetimi
  - Gelişmiş otomasyon yapılandırması
  - Temel durum yönetimi
  - Hata işleme ve doğrulama
  - Docker konteynerizasyonu
  - Jest test kurulumu
  - TypeScript entegrasyonu
  - Ortam değişkeni yönetimi
  - Home Assistant API entegrasyonu
  - Proje belgelendirmesi

  🚧 **Devam Ediyor**
  - Gerçek zamanlı güncellemeler için WebSocket uygulaması
  - Gelişmiş güvenlik özellikleri
  - Tool organizasyon optimizasyonu
  - Performans optimizasyonu
  - Kaynak bağlamı entegrasyonu
  - API belgelendirme oluşturma
  - Çok platformlu masaüstü entegrasyonu
  - Gelişmiş hata kurtarma
  - Özel prompt testi
  - Gelişmiş macOS entegrasyonu
  - Tür güvenliği iyileştirmeleri
  - Test kapsamı genişletilmesi

  ## Katkıda Bulunma

  1. Depoyu fork edin
  2. Bir feature branch oluşturun
  3. Değişikliklerinizi gerçekleştirin
  4. Yeni işlevler için testler ekleyin
  5. Tüm testlerin geçtiğinden emin olun
  6. Bir pull request gönderin

  ## Kaynaklar

  - [MCP Belgeleri](https://modelcontextprotocol.io/introduction)
  - [Home Assistant Dokümanları](https://www.home-assistant.io)
  - [HA REST API](https://developers.home-assistant.io/docs/api/rest)
  - [HACS Belgeleri](https://hacs.xyz)
  - [TypeScript Belgeleri](https://www.typescriptlang.org/docs)

  ## Lisans

  MIT Lisansı - Ayrıntılar için [LICENSE](LICENSE) dosyasını inceleyin
---

# Model Context Protocol Server for Home Assistant

The server uses the MCP protocol to share access to a local Home Assistant instance with an LLM application.

A powerful bridge between your Home Assistant instance and Language Learning Models (LLMs), enabling natural language control and monitoring of your smart home devices through the Model Context Protocol (MCP). This server provides a comprehensive API for managing your entire Home Assistant ecosystem, from device control to system administration.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D20.10.0-green.svg)
![Docker Compose](https://img.shields.io/badge/docker-compose-%3E%3D1.27.0-blue.svg)
![NPM](https://img.shields.io/badge/npm-%3E%3D7.0.0-orange.svg)
![TypeScript](https://img.shields.io/badge/typescript-%5E5.0.0-blue.svg)
![Test Coverage](https://img.shields.io/badge/coverage-95%25-brightgreen.svg)

## Features

- 🎮 **Device Control**: Control any Home Assistant device through natural language
- 🔄 **Real-time Updates**: Get instant updates through Server-Sent Events (SSE)
- 🤖 **Automation Management**: Create, update, and manage automations
- 📊 **State Monitoring**: Track and query device states
- 🔐 **Secure**: Token-based authentication and rate limiting
- 📱 **Mobile Ready**: Works with any HTTP-capable client

## Real-time Updates with SSE

The server includes a powerful Server-Sent Events (SSE) system that provides real-time updates from your Home Assistant instance. This allows you to:

- 🔄 Get instant state changes for any device
- 📡 Monitor automation triggers and executions
- 🎯 Subscribe to specific domains or entities
- 📊 Track service calls and script executions

### Quick SSE Example

```javascript
const eventSource = new EventSource(
  'http://localhost:3000/subscribe_events?token=YOUR_TOKEN&domain=light'
);

eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Update received:', data);
};
```

See [SSE_API.md](docs/SSE_API.md) for complete documentation of the SSE system.

## Table of Contents

- [Key Features](#key-features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Basic Setup](#basic-setup)
  - [Docker Setup (Recommended)](#docker-setup-recommended)
- [Configuration](#configuration)
- [Development](#development)
- [API Reference](#api-reference)
  - [Device Control](#device-control)
  - [Add-on Management](#add-on-management)
  - [Package Management](#package-management)
  - [Automation Management](#automation-management)
- [Natural Language Integration](#natural-language-integration)
- [Troubleshooting](#troubleshooting)
- [Project Status](#project-status)
- [Contributing](#contributing)
- [Resources](#resources)
- [License](#license)

## Key Features

### Core Functionality 🎮
- **Smart Device Control**
  - 💡 **Lights**: Brightness, color temperature, RGB color
  - 🌡️ **Climate**: Temperature, HVAC modes, fan modes, humidity
  - 🚪 **Covers**: Position and tilt control
  - 🔌 **Switches**: On/off control
  - 🚨 **Sensors & Contacts**: State monitoring
  - 🎵 **Media Players**: Playback control, volume, source selection
  - 🌪️ **Fans**: Speed, oscillation, direction
  - 🔒 **Locks**: Lock/unlock control
  - 🧹 **Vacuums**: Start, stop, return to base
  - 📹 **Cameras**: Motion detection, snapshots

### System Management 🛠️
- **Add-on Management**
  - Browse available add-ons
  - Install/uninstall add-ons
  - Start/stop/restart add-ons
  - Version management
  - Configuration access

- **Package Management (HACS)**
  - Integration with Home Assistant Community Store
  - Multiple package types support:
    - Custom integrations
    - Frontend themes
    - Python scripts
    - AppDaemon apps
    - NetDaemon apps
  - Version control and updates
  - Repository management

- **Automation Management**
  - Create and edit automations
  - Advanced configuration options:
    - Multiple trigger types
    - Complex conditions
    - Action sequences
    - Execution modes
  - Duplicate and modify existing automations
  - Enable/disable automation rules
  - Trigger automation manually

### Architecture Features 🏗️
- **Intelligent Organization**
  - Area and floor-based device grouping
  - State monitoring and querying
  - Smart context awareness
  - Historical data access

- **Robust Architecture**
  - Comprehensive error handling
  - State validation
  - Secure API integration
  - TypeScript type safety
  - Extensive test coverage

## Prerequisites

- **Node.js** 20.10.0 or higher
- **NPM** package manager
- **Docker Compose** for containerization
- Running **Home Assistant** instance
- Home Assistant long-lived access token ([How to get token](https://community.home-assistant.io/t/how-to-get-long-lived-access-token/162159))
- **HACS** installed for package management features
- **Supervisor** access for add-on management

## Installation

### Basic Setup

```bash
# Clone the repository
git clone https://github.com/tevonsb/homeassistant-mcp.git
cd homeassistant-mcp

# Install dependencies
npm install

# Build the project
npm run build
```

### Docker Setup (Recommended)

The project includes Docker support for easy deployment and consistent environments across different platforms.

1. **Clone the repository:**
    ```bash
    git clone https://github.com/tevonsb/homeassistant-mcp.git
    cd homeassistant-mcp
    ```

2. **Configure environment:**
    ```bash
    cp .env.example .env
    ```
    Edit the `.env` file with your Home Assistant configuration:
    ```env
    # Home Assistant Configuration
    HASS_HOST=http://homeassistant.local:8123
    HASS_TOKEN=your_home_assistant_token
    HASS_SOCKET_URL=ws://homeassistant.local:8123/api/websocket

    # Server Configuration
    PORT=3000
    NODE_ENV=production
    DEBUG=false
    ```

3. **Build and run with Docker Compose:**
    ```bash
    # Build and start the containers
    docker compose up -d

    # View logs
    docker compose logs -f

    # Stop the service
    docker compose down
    ```

4. **Verify the installation:**
    The server should now be running at `http://localhost:3000`. You can check the health endpoint at `http://localhost:3000/health`.

5. **Update the application:**
    ```bash
    # Pull the latest changes
    git pull

    # Rebuild and restart the containers
    docker compose up -d --build
    ```

#### Docker Configuration

The Docker setup includes:
- Multi-stage build for optimal image size
- Health checks for container monitoring
- Volume mounting for environment configuration
- Automatic container restart on failure
- Exposed port 3000 for API access

#### Docker Compose Environment Variables

All environment variables can be configured in the `.env` file. The following variables are supported:
- `HASS_HOST`: Your Home Assistant instance URL
- `HASS_TOKEN`: Long-lived access token for Home Assistant
- `HASS_SOCKET_URL`: WebSocket URL for Home Assistant
- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment (production/development)
- `DEBUG`: Enable debug mode (true/false)

## Configuration

### Environment Variables

```env
# Home Assistant Configuration
HASS_HOST=http://homeassistant.local:8123  # Your Home Assistant instance URL
HASS_TOKEN=your_home_assistant_token       # Long-lived access token
HASS_SOCKET_URL=ws://homeassistant.local:8123/api/websocket  # WebSocket URL

# Server Configuration
PORT=3000                # Server port (default: 3000)
NODE_ENV=production     # Environment (production/development)
DEBUG=false            # Enable debug mode

# Test Configuration
TEST_HASS_HOST=http://localhost:8123  # Test instance URL
TEST_HASS_TOKEN=test_token           # Test token
```

### Configuration Files

1. **Development**: Copy `.env.example` to `.env.development`
2. **Production**: Copy `.env.example` to `.env.production`
3. **Testing**: Copy `.env.example` to `.env.test`

### Adding to Claude Desktop (or other clients)

To use your new Home Assistant MCP server, you can add Claude Desktop as a client. Add the following to the configuration. Note this will run the MCP within claude and does not work with the Docker method.

```
{
  "homeassistant": {
    "command": "node",
    "args": [<path/to/your/dist/folder>]
    "env": {
      NODE_ENV=development
      HASS_HOST=http://homeassistant.local:8123
      HASS_TOKEN=your_home_assistant_token
      PORT=3000
      HASS_SOCKET_URL=ws://homeassistant.local:8123/api/websocket
      LOG_LEVEL=debug
    }
  }
}

```



## API Reference

### Device Control

#### Common Entity Controls
```json
{
  "tool": "control",
  "command": "turn_on",  // or "turn_off", "toggle"
  "entity_id": "light.living_room"
}
```

#### Light Control
```json
{
  "tool": "control",
  "command": "turn_on",
  "entity_id": "light.living_room",
  "brightness": 128,
  "color_temp": 4000,
  "rgb_color": [255, 0, 0]
}
```

### Add-on Management

#### List Available Add-ons
```json
{
  "tool": "addon",
  "action": "list"
}
```

#### Install Add-on
```json
{
  "tool": "addon",
  "action": "install",
  "slug": "core_configurator",
  "version": "5.6.0"
}
```

#### Manage Add-on State
```json
{
  "tool": "addon",
  "action": "start",  // or "stop", "restart"
  "slug": "core_configurator"
}
```

### Package Management

#### List HACS Packages
```json
{
  "tool": "package",
  "action": "list",
  "category": "integration"  // or "plugin", "theme", "python_script", "appdaemon", "netdaemon"
}
```

#### Install Package
```json
{
  "tool": "package",
  "action": "install",
  "category": "integration",
  "repository": "hacs/integration",
  "version": "1.32.0"
}
```

### Automation Management

#### Create Automation
```json
{
  "tool": "automation_config",
  "action": "create",
  "config": {
    "alias": "Motion Light",
    "description": "Turn on light when motion detected",
    "mode": "single",
    "trigger": [
      {
        "platform": "state",
        "entity_id": "binary_sensor.motion",
        "to": "on"
      }
    ],
    "action": [
      {
        "service": "light.turn_on",
        "target": {
          "entity_id": "light.living_room"
        }
      }
    ]
  }
}
```

#### Duplicate Automation
```json
{
  "tool": "automation_config",
  "action": "duplicate",
  "automation_id": "automation.motion_light"
}
```

### Core Functions

#### State Management
```http
GET /api/state
POST /api/state
```

Manages the current state of the system.

**Example Request:**
```json
POST /api/state
{
  "context": "living_room",
  "state": {
    "lights": "on",
    "temperature": 22
  }
}
```

#### Context Updates
```http
POST /api/context
```

Updates the current context with new information.

**Example Request:**
```json
POST /api/context
{
  "user": "john",
  "location": "kitchen",
  "time": "morning",
  "activity": "cooking"
}
```

### Action Endpoints

#### Execute Action
```http
POST /api/action
```

Executes a specified action with given parameters.

**Example Request:**
```json
POST /api/action
{
  "action": "turn_on_lights",
  "parameters": {
    "room": "living_room",
    "brightness": 80
  }
}
```

#### Batch Actions
```http
POST /api/actions/batch
```

Executes multiple actions in sequence.

**Example Request:**
```json
POST /api/actions/batch
{
  "actions": [
    {
      "action": "turn_on_lights",
      "parameters": {
        "room": "living_room"
      }
    },
    {
      "action": "set_temperature",
      "parameters": {
        "temperature": 22
      }
    }
  ]
}
```

### Query Functions

#### Get Available Actions
```http
GET /api/actions
```

Returns a list of all available actions.

**Example Response:**
```json
{
  "actions": [
    {
      "name": "turn_on_lights",
      "parameters": ["room", "brightness"],
      "description": "Turns on lights in specified room"
    },
    {
      "name": "set_temperature",
      "parameters": ["temperature"],
      "description": "Sets temperature in current context"
    }
  ]
}
```

#### Context Query
```http
GET /api/context?type=current
```

Retrieves context information.

**Example Response:**
```json
{
  "current_context": {
    "user": "john",
    "location": "kitchen",
    "time": "morning",
    "activity": "cooking"
  }
}
```

### WebSocket Events

The server supports real-time updates via WebSocket connections.

```javascript
// Client-side connection example
const ws = new WebSocket('ws://localhost:3000/ws');

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Received update:', data);
};
```

#### Supported Events

- `state_change`: Emitted when system state changes
- `context_update`: Emitted when context is updated
- `action_executed`: Emitted when an action is completed
- `error`: Emitted when an error occurs

**Example Event Data:**
```json
{
  "event": "state_change",
  "data": {
    "previous_state": {
      "lights": "off"
    },
    "current_state": {
      "lights": "on"
    },
    "timestamp": "2024-03-20T10:30:00Z"
  }
}
```

### Error Handling

All endpoints return standard HTTP status codes:

- 200: Success
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

**Error Response Format:**
```json
{
  "error": {
    "code": "INVALID_PARAMETERS",
    "message": "Missing required parameter: room",
    "details": {
      "missing_fields": ["room"]
    }
  }
}
```

### Rate Limiting

The API implements rate limiting to prevent abuse:

- 100 requests per minute per IP for regular endpoints
- 1000 requests per minute per IP for WebSocket connections

When rate limit is exceeded, the server returns:

```json
{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Too many requests",
    "reset_time": "2024-03-20T10:31:00Z"
  }
}
```

### Example Usage

#### Using curl
```bash
# Get current state
curl -X GET \
  http://localhost:3000/api/state \
  -H 'Authorization: ApiKey your_api_key_here'

# Execute action
curl -X POST \
  http://localhost:3000/api/action \
  -H 'Authorization: ApiKey your_api_key_here' \
  -H 'Content-Type: application/json' \
  -d '{
    "action": "turn_on_lights",
    "parameters": {
      "room": "living_room",
      "brightness": 80
    }
  }'
```

#### Using JavaScript
```javascript
// Execute action
async function executeAction() {
  const response = await fetch('http://localhost:3000/api/action', {
    method: 'POST',
    headers: {
      'Authorization': 'ApiKey your_api_key_here',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      action: 'turn_on_lights',
      parameters: {
        room: 'living_room',
        brightness: 80
      }
    })
  });
  
  const data = await response.json();
  console.log('Action result:', data);
}
```

## Development

```bash
# Development mode with hot reload
npm run dev

# Build project
npm run build

# Production mode
npm run start

# Run tests
npx jest --config=jest.config.cjs

# Run tests with coverage
npx jest --coverage

# Lint code
npm run lint

# Format code
npm run format
```

## Troubleshooting

### Common Issues

1. **Node.js Version (`toSorted is not a function`)**
   - **Solution:** Update to Node.js 20.10.0+
   ```bash
   nvm install 20.10.0
   nvm use 20.10.0
   ```

2. **Connection Issues**
   - Verify Home Assistant is running
   - Check `HASS_HOST` accessibility
   - Validate token permissions
   - Ensure WebSocket connection for real-time updates

3. **Add-on Management Issues**
   - Verify Supervisor access
   - Check add-on compatibility
   - Validate system resources

4. **HACS Integration Issues**
   - Verify HACS installation
   - Check HACS integration status
   - Validate repository access

5. **Automation Issues**
   - Verify entity availability
   - Check trigger conditions
   - Validate service calls
   - Monitor execution logs

## Project Status

✅ **Complete**
- Entity, Floor, and Area access
- Device control (Lights, Climate, Covers, Switches, Contacts)
- Add-on management system
- Package management through HACS
- Advanced automation configuration
- Basic state management
- Error handling and validation
- Docker containerization
- Jest testing setup
- TypeScript integration
- Environment variable management
- Home Assistant API integration
- Project documentation

🚧 **In Progress**
- WebSocket implementation for real-time updates
- Enhanced security features
- Tool organization optimization
- Performance optimization
- Resource context integration
- API documentation generation
- Multi-platform desktop integration
- Advanced error recovery
- Custom prompt testing
- Enhanced macOS integration
- Type safety improvements
- Testing coverage expansion

## Contributing

1. Fork the repository
2. Create a feature branch
3. Implement your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## Resources

- [MCP Documentation](https://modelcontextprotocol.io/introduction)
- [Home Assistant Docs](https://www.home-assistant.io)
- [HA REST API](https://developers.home-assistant.io/docs/api/rest)
- [HACS Documentation](https://hacs.xyz)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

MIT License - See [LICENSE](LICENSE) file
