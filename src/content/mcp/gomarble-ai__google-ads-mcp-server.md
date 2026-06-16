---
name: "gomarble-ai/google-ads-mcp-server"
description: "MCP server acting as an interface to the Google Ads, enabling programmatic access to Google Ads data and management features."
category: "Marketing"
repo: "gomarble-ai/google-ads-mcp-server"
stars: 128
url: "https://github.com/gomarble-ai/google-ads-mcp-server"
body_length: 17856
license: "MIT"
language: "Python"
body_tr: |-
  # Google Ads MCP Server 🚀

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
  [![FastMCP](https://img.shields.io/badge/FastMCP-v2.8.0-green.svg)](https://github.com/jlowin/fastmcp)

  **Google Ads API ile Model Context Protocol sunucusu, otomatik OAuth 2.0 kimlik doğrulaması ile FastMCP tarafından destekleniyor**

  Google Ads API'sini Claude Desktop ve diğer MCP istemcilerine sorunsuz OAuth 2.0 kimlik doğrulaması, otomatik token yenileme, GAQL sorgulama ve anahtar kelime araştırması yetenekleriyle bağlayın.

  <video controls width="1920" height="512" src="https://github.com/user-attachments/assets/1dc62f47-ace4-4dcf-8009-593ef7194b43">Tarayıcınız video etiketini desteklemiyor.</video>

  ## Kolay Tek Tıklamalı Kurulum

  Daha basit bir kurulum deneyimi için hazır kullanılabilir yükleyiciler sunuyoruz:

  👉 **Yükleyiciyi indir -** [https://gomarble.ai/mcp](https://gomarble.ai/mcp)

  ## Yardım ve güncellemeler için topluluğumuza katılın

  👉 **Slack Community -** [AI in Ads](https://join.slack.com/t/ai-in-ads/shared_invite/zt-3f17k0kwl-kJskxR0FtcKJZhEYjc4X_A)

  ## Facebook ads MCP sunucusunu da deneyin

  👉 **Facebook Ads MCP -** [Facebook Ads MCP](https://github.com/gomarble-ai/facebook-ads-mcp-server)

  ## ✨ Özellikler

  - 🔐 **Otomatik OAuth 2.0** - Tek seferlik tarayıcı kimlik doğrulaması ve otomatik yenileme
  - 🔄 **Akıllı Token Yönetimi** - Süresi dolmuş tokenları otomatik olarak işler
  - 📊 **GAQL Query Yürütme** - Herhangi bir Google Ads Query Language sorgusunu çalıştırın
  - 🏢 **Hesap Yönetimi** - Google Ads hesaplarını listeleyin ve yönetin
  - 🔍 **Anahtar Kelime Araştırması** - Arama hacmi verileriyle anahtar kelime fikirleri oluşturun
  - 🚀 **FastMCP Framework** - Modern MCP standardı üzerine inşa edildi
  - 🖥️ **Claude Desktop Hazırlandı** - Claude Desktop ile doğrudan entegrasyon
  - 🛡️ **Güvenli Yerel Depolama** - Tokenler yerel olarak depolanır, asla açıklanmaz

  ## 📋 Kullanılabilir Araçlar

  | Araç | Açıklama | Parametreler | Örnek Kullanım |
  |------|----------|------------|---------------|
  | `list_accounts` | Tüm erişilebilir Google Ads hesaplarını listele | Yok | "Tüm Google Ads hesaplarımı listele" |
  | `run_gaql` | Özel biçimlendirme ile GAQL sorguları yürüt | `customer_id`, `query`, `manager_id` (isteğe bağlı) | "Hesap 1234567890 için kampanya performansını göster" |
  | `run_keyword_planner` | Metriklerle anahtar kelime fikirleri oluştur | `customer_id`, `keywords`, `manager_id`, `page_url`, tarih aralığı seçenekleri | "'dijital pazarlama' için anahtar kelime fikirleri oluştur" |

  **Not:** Tüm araçlar otomatik olarak kimlik doğrulamayı işler - token parametreleri gerekli değildir!

  ## 🚀 Hızlı Başlangıç

  ### Ön Koşullar

  MCP sunucusunu kurmadan önce şunlara ihtiyacınız olacak:
  - Python 3.10+ yüklü
  - Bir Google Cloud Platform hesabı
  - API erişimi olan bir Google Ads hesabı

  ## 🔧 Adım 1: Google Cloud Platform Kurulumu

  ### 1.1 Google Cloud Projesi Oluştur

  1. **[Google Cloud Console](https://console.cloud.google.com/) adresine git**
  2. **Yeni bir proje oluştur:**
     - "Proje seç" → "Yeni Proje" seçeneğine tıkla
     - Proje adını gir (örneğin, "Google Ads MCP")
     - "Oluştur" seçeneğine tıkla

  ### 1.2 Google Ads API'sini Etkinleştir

  1. **Google Cloud Console'unda:**
     - "APIs & Services" → "Library" seçeneğine git
     - "Google Ads API" ara
     - Üzerine tıkla ve "Enable" seçeneğine bas

  ### 1.3 OAuth 2.0 Kimlik Bilgilerini Oluştur

  1. **"APIs & Services" → "Credentials" seçeneğine git**
  2. **"+ CREATE CREDENTIALS" → "OAuth 2.0 Client ID" seçeneğine tıkla**
  3. **Onay ekranını yapılandır (ilk kez ise):**
     - "Configure Consent Screen" seçeneğine tıkla
     - "External" seçeneğini seç (Google Workspace'e sahip olmadığınız sürece)
     - Gerekli alanları doldur:
       - Uygulama adı: "Google Ads MCP"
       - Kullanıcı destek e-postası: Senin e-postanız
       - Geliştirici iletişim: Senin e-postanız
     - Tüm adımlardan geçerek "Save and Continue" seçeneğine tıkla
  4. **OAuth Client oluştur:**
     - Uygulama türü: **"Desktop application"**
     - Ad: "Google Ads MCP Client"
     - "Oluştur" seçeneğine tıkla
  5. **Kimlik bilgilerini indir:**
     - "Download JSON" düğmesine tıkla
     - Dosyayı proje dizininde `client_secret_[long-string].json` olarak kaydet

  ## 🔧 Adım 2: Google Ads API Kurulumu

  ### 2.1 Developer Token'ı Al

  1. **[Google Ads](https://ads.google.com) adresinde oturum aç**
  2. **Tools & Settings'e git** (üst navigasyondaki wrench simgesi)
  3. **"Setup" altında "API Center" seçeneğine tıkla**
  4. **Hizmet Şartları'nı Kabul Et** (istenirse)
  5. **"Apply for token" seçeneğine tıkla**
  6. **Uygulama formunu doldur:**
     - Kullanım durumunu açıkla (örneğin, "MCP entegrasyonu kampanya analizi için")
     - Uygulamanız hakkında teknik detaylar sağla
  7. **Gönder ve onay bekle** (genellikle 1-3 iş günü)

  **Not:** İlk olarak sınırlı işlevselliğe sahip bir test token'ı alacaksınız. Test ettikten sonra, üretim erişimi için başvurabilirsiniz.

  ### 2.2 Developer Token'ınızı Bulun

  Onay aldıktan sonra:
  1. **Google Ads'te API Center'a dön**
  2. **Developer Token'ınızı kopyala** (format: `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`)

  ## 🔧 Adım 3: Kurulum ve Ayar

  ### 3.1 Klonla ve Yükle

  ```bash
  # Depoyu klonla
  git clone https://github.com/yourusername/google-ads-mcp-server.git
  cd google-ads-mcp-server

  # Sanal ortam oluştur (önerilir)
  python3 -m venv .venv
  source .venv/bin/activate  # Windows'ta: .venv\Scripts\activate

  # Bağımlılıkları yükle
  pip install -r requirements.txt
  ```

  ### 3.2 Ortam Yapılandırması

  Proje dizininde bir `.env` dosyası oluştur:

  ```bash
  # Örnek dosyayı kopyala
  cp .env.example .env
  ```

  `.env` dosyasını kimlik bilgilerinizle düzenle:

  ```bash
  # Gerekli: Google Ads API Developer Token
  GOOGLE_ADS_DEVELOPER_TOKEN=your_developer_token_here

  # Gerekli: OAuth kimlik bilgileri JSON dosyasının yolu (Google Cloud'dan indirildi)
  GOOGLE_ADS_OAUTH_CONFIG_PATH=/full/path/to/your/client_secret_file.json
  ```

  **Örnek `.env` dosyası:**
  ```bash
  GOOGLE_ADS_DEVELOPER_TOKEN=ABCDEFG1234567890
  GOOGLE_ADS_OAUTH_CONFIG_PATH=/Users/john/google-ads-mcp/client_secret_138737274875-abc123.apps.googleusercontent.com.json
  ```

  ## 🖥️ Adım 4: Claude Desktop Entegrasyonu

  ### 4.1 Claude Yapılandırmasını Bulun

  Claude Desktop yapılandırma dosyanızı bulun:

  **macOS:**
  ```bash
  ~/Library/Application Support/Claude/claude_desktop_config.json
  ```

  **Windows:**
  ```bash
  %APPDATA%\Claude\claude_desktop_config.json
  ```

  ### 4.2 MCP Sunucusu Yapılandırmasını Ekle

  Yapılandırma dosyasını düzenle ve Google Ads MCP sunucusunu ekle:

  ```json
  {
    "mcpServers": {
      "google-ads": {
        "command": "/full/path/to/your/project/.venv/bin/python",
        "args": [
          "/full/path/to/your/project/server.py"
        ]
      }
    }
  }
  ```

  **Gerçek Örnek:**
  ```json
  {
    "mcpServers": {
      "google-ads": {
        "command": "/Users/marble-dev-01/workspace/google_ads_with_fastmcp/.venv/bin/python",
        "args": [
          "/Users/marble-dev-01/workspace/google_ads_with_fastmcp/server.py"
        ]
      }
    }
  }
  ```

  **Önemli:** 
  - Tüm dosya konumları için **mutlak yollar** kullan
  - Windows'ta, yollarda ileri eğik çizgi `/` veya çift backslash `\\` kullan
  - `your_developer_token_here` değerini gerçek developer token'ınızla değiştir

  ### 4.3 Claude Desktop'ı Yeniden Başlat

  Yeni yapılandırmayı yüklemek için Claude Desktop'ı kapatıp yeniden başlat.

  ## 🔐 Adım 5: İlk Kimlik Doğrulama

  ### 5.1 OAuth Akışını Tetikle

  1. **Claude Desktop'ı aç**
  2. **Herhangi bir Google Ads komutunu dene**, örneğin:
     ```
     "Tüm Google Ads hesaplarımı listele"
     ```

  ### 5.2 Kimlik Doğrulamayı Tamamla

  1. **Tarayıcı otomatik olarak açılır** Google OAuth sayfasına
  2. **Oturum aç** Google hesabınızla (Google Ads erişimi olan)
  3. **İzinleri ver** "Allow" seçeneğine tıkla
  4. **Tarayıcı başarı sayfasını gösterir**
  5. **Claude'a dön** - komutunuz otomatik olarak tamamlanacak!

  ### 5.3 Kurulumu Doğrula

  Kimlik doğrulamadan sonra şunları görmelisiniz:
  - Proje dizininizde oluşturulan `google_ads_token.json` dosyası
  - Claude'un yanıtında listelenen Google Ads hesapları

  ## 📖 Kullanım Örnekleri

  ### Temel Hesap İşlemleri

  ```
  "Tüm Google Ads hesaplarımı listele"

  "Hesap detaylarını göster ve hangi hesapların aktif kampanyaları var"
  ```

  ### Kampanya Analizi

  ```
  "Hesap 1234567890 için son 30 gün içinde kampanya performansını göster"

  "Son haftada tüm kampanyaların dönüşüm verilerini al"

  "En yüksek dönüşüm maliyeti olan kampanyalar hangisi?"
  ```

  ### Anahtar Kelime Araştırması

  ```
  "Hesap 1234567890'ı kullanarak 'dijital pazarlama' için anahtar kelime fikirleri oluştur"

  "'AI otomasyonu' için anahtar kelime fırsatları bul ve arama hacmi verilerini göster"

  "https://example.com/services sayfası için anahtar kelimeleri araştır"
  ```

  ### Özel GAQL Sorguları

  ```
  "Hesap 1234567890 için bu GAQL sorgusunu çalıştır:
  SELECT campaign.name, metrics.clicks, metrics.cost_micros 
  FROM campaign 
  WHERE segments.date DURING LAST_7_DAYS"

  "Anahtar kelime performans verilerini al:
  SELECT ad_group_criterion.keyword.text, metrics.ctr, metrics.average_cpc
  FROM keyword_view 
  WHERE metrics.impressions > 100"
  ```

  ## 🔍 Gelişmiş GAQL Örnekleri

  ### Gelir ile Kampanya Performansı
  ```sql
  SELECT 
    campaign.id,
    campaign.name, 
    metrics.clicks, 
    metrics.impressions,
    metrics.cost_micros,
    metrics.conversions,
    metrics.conversions_value
  FROM campaign 
  WHERE segments.date DURING LAST_30_DAYS
  ORDER BY metrics.cost_micros DESC
  ```

  ### Anahtar Kelime Performans Analizi
  ```sql
  SELECT 
    campaign.name,
    ad_group_criterion.keyword.text, 
    ad_group_criterion.keyword.match_type,
    metrics.ctr,
    metrics.average_cpc,
    metrics.quality_score
  FROM keyword_view 
  WHERE segments.date DURING LAST_7_DAYS
    AND metrics.impressions > 100
  ORDER BY metrics.conversions DESC
  ```

  ### Cihaz Performans Dağılımı
  ```sql
  SELECT 
    campaign.name,
    segments.device,
    metrics.clicks,
    metrics.cost_micros,
    metrics.conversions
  FROM campaign
  WHERE segments.date DURING LAST_30_DAYS
    AND campaign.status = 'ENABLED'
  ```

  ## 📁 Proje Yapısı

  ```
  google-ads-mcp-server/
  ├── server.py                           # Ana MCP sunucusu
  ├── oauth/
  │   ├── __init__.py                     # Paket başlatma
  │   └── google_auth.py                  # OAuth kimlik doğrulama mantığı
  ├── google_ads_token.json               # Otomatik oluşturulan token depolama (gitignored)
  ├── client_secret_[long-string].json    # OAuth kimlik bilgileriniz (gitignored)
  ├── .env                                # Ortam değişkenleri (gitignored)
  ├── .env.example                        # Ortam şablonu
  ├── .gitignore                          # Git göz ardı dosyası
  ├── requirements.txt                    # Python bağımlılıkları
  ├── LICENSE                             # MIT Lisansı
  └── README.md                           # Bu dosya
  ```

  ## 🔒 Güvenlik ve En İyi Uygulamalar

  ### Dosya Güvenliği
  - ✅ **Kimlik bilgileri dosyaları gitignored** - Sürüm kontrolüne asla işlenmez
  - ✅ **Yerel token depolama** - Tokenler `google_ads_token.json` içinde yerel olarak depolanır
  - ✅ **Ortam değişkenleri** - Hassas veriler `.env` dosyasında
  - ✅ **Otomatik yenileme** - Minimal token maruziyeti süresi

  ### Önerilen Dosya İzinleri
  ```bash
  # Hassas dosyalar için güvenli izinleri ayarla
  chmod 600 .env
  chmod 600 google_ads_token.json
  chmod 600 client_secret_*.json
  ```

  ### Üretim Değerlendirmeleri
  1. **Üretimde `.env` dosyaları yerine ortam değişkenleri kullan**
  2. **API kotalalarına saygı göstermek için hız sınırlandırması uygula**
  3. **Google Cloud Console'da API kullanımını izle**
  4. **Token depolamayı uygun erişim denetimleriyle güvenli hale getir**
  5. **Geliştirilmiş güvenlik için düzenli token rotasyonu**

  ## 🛠️ Sorun Giderme

  ### Kimlik Doğrulama Sorunları

  | Sorun | Semptomlar | Çözüm |
  |-------|----------|--------|
  | **Token bulunamadı** | "Starting OAuth flow" mesajı | ✅ İlk kurulum için normal - tarayıcı kimlik doğrulamasını tamamla |
  | **Token yenileme başarısız** | "Refreshing token failed" hatası | ✅ `google_ads_token.json` dosyasını sil ve yeniden kimlik doğrula |
  | **OAuth akışı başarısız** | Tarayıcı hatası veya yanıt yok | Kimlik bilgileri dosyası yolunu ve internet bağlantısını kontrol et |
  | **İzin reddedildi** | Tarayıcıda "Access denied" | Google hesabının Google Ads erişimi olduğundan emin ol |

  ### Yapılandırma Sorunları

  | Sorun | Semptomlar | Çözüm |
  |-------|----------|--------|
  | **Ortam değişkenleri eksik** | "Environment variable not set" | `.env` dosyasını ve Claude config `env` bölümünü kontrol et |
  | **Dosya bulunamadı** | "FileNotFoundError" | Yapılandırmada mutlak yolları doğrula |
  | **Modül import hataları** | "ModuleNotFoundError" | `pip install -r requirements.txt` çalıştır |
  | **Python yolu sorunları** | "Command not found" | Python executable'a mutlak yol kullan |

  ### Claude Desktop Sorunları

  | Sorun | Semptomlar | Çözüm |
  |-------|----------|--------|
  | **Sunucu bağlanmıyor** | Google Ads araçları kullanılamıyor | Claude Desktop'ı yeniden başlat, config dosyası sözdizimini kontrol et |
  | **Geçersiz JSON config** | Claude başlangıç hataları | Config dosyasında JSON sözdizimini doğrula |
  | **İzin hataları** | Başlangıçta "Permission denied" | Dosya izinlerini ve yollarını kontrol et |

  ### API Sorunları

  | Sorun | Semptomlar | Çözüm |
  |-------|----------|--------|
  | **Geçersiz customer ID** | "Customer not found" | 10 haneli format kullan tireleme olmadan: `1234567890` |
  | **API kota aşıldı** | "Quota exceeded" hatası | Kota sıfırlanması için bekle veya artırma iste |
  | **Geçersiz developer token** | "Authentication failed" | Google Ads API Center'da token'ı doğrula |
  | **GAQL sözdizimi hataları** | "Invalid query" | GAQL sözdizimini ve alan adlarını kontrol et |

  ### Hata Ayıklama Modu

  Sorun giderme için ayrıntılı günlüğü etkinleştir:

  ```python
  # Hata ayıklama için server.py'a ekle
  import logging
  logging.basicConfig(level=logging.DEBUG)
  ```

  ### Yardım Almak

  Sorunlar yaşarsanız:

  1. **Hata mesajını dikkatle oku** - genellikle tam problemi gösterir
  2. **Tüm dosya yollarını doğrula** - mutlak ve doğru olmalı
  3. **Ortam değişkenlerinin ayarlandığından emin ol**
  4. **Google Cloud Console'da API kotalarını ve faturalandırmayı kontrol et**
  5. **Herhangi bir yapılandırma değişikliğinden sonra Claude Desktop'ı yeniden başlat**

  ## 🚀 Gelişmiş Yapılandırma

  ### HTTP Transport Modu

  Web dağıtımı veya uzaktan erişim için:

  ```bash
  # Sunucuyu HTTP modunda başlat
  python3 server.py --http
  ```

  **HTTP için Claude Desktop config:**
  ```json
  {
    "mcpServers": {
      "google-ads": {
        "url": "http://127.0.0.1:8000/mcp"
      }
    }
  }
  ```

  ### Özel Token Depolama

  `oauth/google_auth.py` dosyasında token depolama konumunu değiştir:

  ```python
  # Özel token dosyası konumu
  def get_token_path():
      return "/custom/secure/path/google_ads_token.json"
  ```

  ### Manager Hesap Yapılandırması

  MCC altında birden fazla hesabı yönetmek için:

  ```bash
  # .env dosyasına ekle
  GOOGLE_ADS_LOGIN_CUSTOMER_ID=123-456-7890
  ```

  ## 🤝 Katkıda Bulunmak

  Katkıları memnuniyetle karşılıyoruz! Başlamak için şunları yapın:

  ### Geliştirme Kurulumu

  ```bash
  # Depoyu fork'la ve klonla
  git clone https://github.com/yourusername/google-ads-mcp-server.git
  cd google-ads-mcp-server

  # Geliştirme ortamı oluştur
  python3 -m venv .venv
  source .venv/bin/activate

  # Bağımlılıkları yükle
  pip install -r requirements.txt

  # Geliştirme ortamını ayarla
  cp .env.example .env
  # Geliştirme kimlik bilgilerini .env'ye ekle
  ```

  ### Değişiklikler Yapmak

  1. **Feature branch'i oluştur:** `git checkout -b feature/amazing-feature`
  2. **Değişiklikleri yap** - uygun testlerle birlikte
  3. **Farklı hesap yapılandırmalarıyla iyice test et**
  4. **Gerekli olduğu kadar dokumentasyonu güncelle**
  5. **Değişiklikleri commit'le:** `git commit -m 'Add amazing feature'`
  6. **Branch'e push'la:** `git push origin feature/amazing-feature`
  7. **Detaylı açıklamayla Pull Request aç**

  ### Değişiklikleri Test Etmek

  ```bash
  # Kimlik doğrulama akışını test et
  python3 server.py --test-auth

  # API bağlantısını test et
  python3 -c "
  from oauth.google_auth import get_oauth_credentials
  creds = get_oauth_credentials()
  print('✅ Authentication successful!')
  "

  # Claude Desktop ile test et
  # Sunucuyu Claude config'e ekle ve çeşitli komutları test et
  ```

  ## 📊 API Limitleri ve Kotalar

  ### Google Ads API Kotaları

  - **Temel erişim:** Günde 15.000 operasyon
  - **Standart erişim:** Günde 40.000 operasyon
  - **Request hızı:** Developer token başına dakika başına 1.600 request

  ### API Kullanımı için En İyi Uygulamalar

  1. **API çağrılarını azaltmak için mümkün olduğunda sonuçları cache'le**
  2. **Veri hacmini sınırlamak için tarih aralıkları kullan**
  3. **Desteklendiğinde request'leri toplu olarak gönder**
  4. **Google Cloud Console'da kullanımı izle**
  5. **Hız sınırı hataları için retry mantığını uygula**

  ### Kota Yönetimi

  ```bash
  # Google Cloud Console'da kullanımı izle
  # APIs & Services → Quotas adresine git
  # Mevcut kullanımı görmek için "Google Ads API" ara
  ```

  ## 📄 Lisans

  Bu proje MIT Lisansı altında lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.

  ---

  ### MIT Lisansı

  ```
  Telif Hakkı (c) 2025 Google Ads MCP Server Katkıda Bulunanlar

  Herhangi bir kişiye, bu yazılım ve ilgili belgeleri (bundan sonra "Yazılım" olarak anılacak) 
  kullanma, kopyalama, değiştirme, birleştirme, yayınlama, dağıtma, alt lisans verme ve/veya 
  satma hakkı dahil olmak üzere, aşağıdaki şartlara tabi olarak hiçbir ücret ödemeden izin 
  vermesi bu itiraf edilen yönetim hakkıdır:

  Yukarıdaki telif hakkı bildirimi ve bu izin bildirimi, Yazılımın tüm kopyalarında veya 
  önemli bölümlerinde yer almalıdır.

  YAZILIM "OLDUĞU GİBİ" SAĞLANMAKTADIR. AÇIK VEYA ZIMNİ OLARAK, TİCARİLİK, BELİ BİR AMACA 
  UYGUNLUK VE İHLAL ETMEMEYİ İÇEREN HIÇBIR VE HERHANGİ BİR GARANTİ YOKTUR. HİÇBİR DURUM 
  ALTINDA, YAZARLAR VEYA TELİF HAKKH SAHİPLERİ, YAZILIMDAN KAYNAKLANAN VEYA İLGİLİ VEYA 
  KULLANIMDAKI VEYA DİĞER IŞLEMLERDE ORTAYA ÇIKAN HERHANGI BİR İDDİA, HASAR VEYA DİĞER 
  YÜKÜMLÜLÜKLERDEN SORUMLU OLMAYACAKLARDIR.
  ```

  ## 📈 Yol Haritası

  ### Yaklaşan Özellikler
  - 🔄 **Geliştirilmiş anahtar kelime araştırması** - rakip analizi ile
  - 📊 **Yerleşik veri görselleştirme** - grafikler ve tablolar ile
  - 🤖 **Yapay zeka destekli optimizasyon önerileri**
  - 📝 **Kampanya oluşturma ve yönetim araçları**
  - 🔍 **Gelişmiş raporlama yetenekleri**
  - 🌐 **Çok dil desteği**

  ---

  **MCP topluluğu için ❤️ ile yapılmış**

  *Google Ads verilerinizi doğrudan AI asistanlara bağlayın ve doğal dil konuşmaları aracılığıyla güçlü reklam içgörülerini açığa çıkarın.*
---

# Google Ads MCP Server 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![FastMCP](https://img.shields.io/badge/FastMCP-v2.8.0-green.svg)](https://github.com/jlowin/fastmcp)

**A FastMCP-powered Model Context Protocol server for Google Ads API integration with automatic OAuth 2.0 authentication**

Connect Google Ads API directly to Claude Desktop and other MCP clients with seamless OAuth 2.0 authentication, automatic token refresh, GAQL querying, and keyword research capabilities.

<video controls width="1920" height="512" src="https://github.com/user-attachments/assets/1dc62f47-ace4-4dcf-8009-593ef7194b43">Your browser does not support the video tag.</video>

## Easy One-Click Setup

For a simpler setup experience, we offer ready-to-use installers:

👉 **Download installer -** [https://gomarble.ai/mcp](https://gomarble.ai/mcp)

## Join our community for help and updates

👉 **Slack Community -** [AI in Ads](https://join.slack.com/t/ai-in-ads/shared_invite/zt-3f17k0kwl-kJskxR0FtcKJZhEYjc4X_A)

## Try Facebook ads mcp server also

👉 **Facebook Ads MCP -** [Facebook Ads MCP](https://github.com/gomarble-ai/facebook-ads-mcp-server)

## ✨ Features

- 🔐 **Automatic OAuth 2.0** - One-time browser authentication with auto-refresh
- 🔄 **Smart Token Management** - Handles expired tokens automatically
- 📊 **GAQL Query Execution** - Run any Google Ads Query Language queries
- 🏢 **Account Management** - List and manage Google Ads accounts
- 🔍 **Keyword Research** - Generate keyword ideas with search volume data
- 🚀 **FastMCP Framework** - Built on the modern MCP standard
- 🖥️ **Claude Desktop Ready** - Direct integration with Claude Desktop
- 🛡️ **Secure Local Storage** - Tokens stored locally, never exposed

## 📋 Available Tools

| Tool | Description | Parameters | Example Usage |
|------|-------------|------------|---------------|
| `list_accounts` | List all accessible Google Ads accounts | None | "List all my Google Ads accounts" |
| `run_gaql` | Execute GAQL queries with custom formatting | `customer_id`, `query`, `manager_id` (optional) | "Show me campaign performance for account 1234567890" |
| `run_keyword_planner` | Generate keyword ideas with metrics | `customer_id`, `keywords`, `manager_id`, `page_url`, date range options | "Generate keyword ideas for 'digital marketing'" |

**Note:** All tools automatically handle authentication - no token parameters required!

## 🚀 Quick Start

### Prerequisites

Before setting up the MCP server, you'll need:
- Python 3.10+ installed
- A Google Cloud Platform account
- A Google Ads account with API access

## 🔧 Step 1: Google Cloud Platform Setup

### 1.1 Create Google Cloud Project

1. **Go to [Google Cloud Console](https://console.cloud.google.com/)**
2. **Create a new project:**
   - Click "Select a project" → "New Project"
   - Enter project name (e.g., "Google Ads MCP")
   - Click "Create"

### 1.2 Enable Google Ads API

1. **In your Google Cloud Console:**
   - Go to "APIs & Services" → "Library"
   - Search for "Google Ads API"
   - Click on it and press "Enable"

### 1.3 Create OAuth 2.0 Credentials

1. **Go to "APIs & Services" → "Credentials"**
2. **Click "+ CREATE CREDENTIALS" → "OAuth 2.0 Client ID"**
3. **Configure consent screen (if first time):**
   - Click "Configure Consent Screen"
   - Choose "External" (unless you have Google Workspace)
   - Fill required fields:
     - App name: "Google Ads MCP"
     - User support email: Your email
     - Developer contact: Your email
   - Click "Save and Continue" through all steps
4. **Create OAuth Client:**
   - Application type: **"Desktop application"**
   - Name: "Google Ads MCP Client"
   - Click "Create"
5. **Download credentials:**
   - Click "Download JSON" button
   - Save file as `client_secret_[long-string].json` in your project directory

## 🔧 Step 2: Google Ads API Setup

### 2.1 Get Developer Token

1. **Sign in to [Google Ads](https://ads.google.com)**
2. **Go to Tools & Settings** (wrench icon in top navigation)
3. **Under "Setup", click "API Center"**
4. **Accept Terms of Service** if prompted
5. **Click "Apply for token"**
6. **Fill out application form:**
   - Describe your use case (e.g., "MCP integration for campaign analysis")
   - Provide technical details about your implementation
7. **Submit and wait for approval** (usually 1-3 business days)

**Note:** You'll initially get a test token with limited functionality. After testing, you can apply for production access.

### 2.2 Find Your Developer Token

Once approved:
1. **Return to API Center in Google Ads**
2. **Copy your Developer Token** (format: `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`)

## 🔧 Step 3: Installation & Setup

### 3.1 Clone and Install

```bash
# Clone the repository
git clone https://github.com/yourusername/google-ads-mcp-server.git
cd google-ads-mcp-server

# Create virtual environment (recommended)
python3 -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### 3.2 Environment Configuration

Create a `.env` file in your project directory:

```bash
# Copy the example file
cp .env.example .env
```

Edit `.env` with your credentials:

```bash
# Required: Google Ads API Developer Token
GOOGLE_ADS_DEVELOPER_TOKEN=your_developer_token_here

# Required: Path to OAuth credentials JSON file (downloaded from Google Cloud)
GOOGLE_ADS_OAUTH_CONFIG_PATH=/full/path/to/your/client_secret_file.json
```

**Example `.env` file:**
```bash
GOOGLE_ADS_DEVELOPER_TOKEN=ABCDEFG1234567890
GOOGLE_ADS_OAUTH_CONFIG_PATH=/Users/john/google-ads-mcp/client_secret_138737274875-abc123.apps.googleusercontent.com.json
```

## 🖥️ Step 4: Claude Desktop Integration

### 4.1 Locate Claude Configuration

Find your Claude Desktop configuration file:

**macOS:**
```bash
~/Library/Application Support/Claude/claude_desktop_config.json
```

**Windows:**
```bash
%APPDATA%\Claude\claude_desktop_config.json
```

### 4.2 Add MCP Server Configuration

Edit the configuration file and add your Google Ads MCP server:

```json
{
  "mcpServers": {
    "google-ads": {
      "command": "/full/path/to/your/project/.venv/bin/python",
      "args": [
        "/full/path/to/your/project/server.py"
      ]
    }
  }
}
```

**Real Example:**
```json
{
  "mcpServers": {
    "google-ads": {
      "command": "/Users/marble-dev-01/workspace/google_ads_with_fastmcp/.venv/bin/python",
      "args": [
        "/Users/marble-dev-01/workspace/google_ads_with_fastmcp/server.py"
      ]
    }
  }
}
```

**Important:** 
- Use **absolute paths** for all file locations
- On Windows, use forward slashes `/` or double backslashes `\\` in paths
- Replace `your_developer_token_here` with your actual developer token

### 4.3 Restart Claude Desktop

Close and restart Claude Desktop to load the new configuration.

## 🔐 Step 5: First-Time Authentication

### 5.1 Trigger OAuth Flow

1. **Open Claude Desktop**
2. **Try any Google Ads command**, for example:
   ```
   "List all my Google Ads accounts"
   ```

### 5.2 Complete Authentication

1. **Browser opens automatically** to Google OAuth page
2. **Sign in** with your Google account (the one with Google Ads access)
3. **Grant permissions** by clicking "Allow"
4. **Browser shows success page**
5. **Return to Claude** - your command will complete automatically!

### 5.3 Verify Setup

After authentication, you should see:
- A `google_ads_token.json` file created in your project directory
- Your Google Ads accounts listed in Claude's response

## 📖 Usage Examples

### Basic Account Operations

```
"List all my Google Ads accounts"

"Show me the account details and which ones have active campaigns"
```

### Campaign Analysis

```
"Show me campaign performance for account 1234567890 in the last 30 days"

"Get conversion data for all campaigns in the last week"

"Which campaigns have the highest cost per conversion?"
```

### Keyword Research

```
"Generate keyword ideas for 'digital marketing' using account 1234567890"

"Find keyword opportunities for 'AI automation' with search volume data"

"Research keywords for the page https://example.com/services"
```

### Custom GAQL Queries

```
"Run this GAQL query for account 1234567890:
SELECT campaign.name, metrics.clicks, metrics.cost_micros 
FROM campaign 
WHERE segments.date DURING LAST_7_DAYS"

"Get keyword performance data:
SELECT ad_group_criterion.keyword.text, metrics.ctr, metrics.average_cpc
FROM keyword_view 
WHERE metrics.impressions > 100"
```

## 🔍 Advanced GAQL Examples

### Campaign Performance with Revenue
```sql
SELECT 
  campaign.id,
  campaign.name, 
  metrics.clicks, 
  metrics.impressions,
  metrics.cost_micros,
  metrics.conversions,
  metrics.conversions_value
FROM campaign 
WHERE segments.date DURING LAST_30_DAYS
ORDER BY metrics.cost_micros DESC
```

### Keyword Performance Analysis
```sql
SELECT 
  campaign.name,
  ad_group_criterion.keyword.text, 
  ad_group_criterion.keyword.match_type,
  metrics.ctr,
  metrics.average_cpc,
  metrics.quality_score
FROM keyword_view 
WHERE segments.date DURING LAST_7_DAYS
  AND metrics.impressions > 100
ORDER BY metrics.conversions DESC
```

### Device Performance Breakdown
```sql
SELECT 
  campaign.name,
  segments.device,
  metrics.clicks,
  metrics.cost_micros,
  metrics.conversions
FROM campaign
WHERE segments.date DURING LAST_30_DAYS
  AND campaign.status = 'ENABLED'
```

## 📁 Project Structure

```
google-ads-mcp-server/
├── server.py                           # Main MCP server
├── oauth/
│   ├── __init__.py                     # Package initialization
│   └── google_auth.py                  # OAuth authentication logic
├── google_ads_token.json               # Auto-generated token storage (gitignored)
├── client_secret_[long-string].json    # Your OAuth credentials (gitignored)
├── .env                                # Environment variables (gitignored)
├── .env.example                        # Environment template
├── .gitignore                          # Git ignore file
├── requirements.txt                    # Python dependencies
├── LICENSE                             # MIT License
└── README.md                           # This file
```

## 🔒 Security & Best Practices

### File Security
- ✅ **Credential files are gitignored** - Never committed to version control
- ✅ **Local token storage** - Tokens stored in `google_ads_token.json` locally
- ✅ **Environment variables** - Sensitive data in `.env` file
- ✅ **Automatic refresh** - Minimal token exposure time

### Recommended File Permissions
```bash
# Set secure permissions for sensitive files
chmod 600 .env
chmod 600 google_ads_token.json
chmod 600 client_secret_*.json
```

### Production Considerations
1. **Use environment variables** instead of `.env` files in production
2. **Implement rate limiting** to respect API quotas
3. **Monitor API usage** in Google Cloud Console
4. **Secure token storage** with proper access controls
5. **Regular token rotation** for enhanced security

## 🛠️ Troubleshooting

### Authentication Issues

| Issue | Symptoms | Solution |
|-------|----------|----------|
| **No tokens found** | "Starting OAuth flow" message | ✅ Normal for first-time setup - complete browser authentication |
| **Token refresh failed** | "Refreshing token failed" error | ✅ Delete `google_ads_token.json` and re-authenticate |
| **OAuth flow failed** | Browser error or no response | Check credentials file path and internet connection |
| **Permission denied** | "Access denied" in browser | Ensure Google account has Google Ads access |

### Configuration Issues

| Issue | Symptoms | Solution |
|-------|----------|----------|
| **Environment variables missing** | "Environment variable not set" | Check `.env` file and Claude config `env` section |
| **File not found** | "FileNotFoundError" | Verify absolute paths in configuration |
| **Module import errors** | "ModuleNotFoundError" | Run `pip install -r requirements.txt` |
| **Python path issues** | "Command not found" | Use absolute path to Python executable |

### Claude Desktop Issues

| Issue | Symptoms | Solution |
|-------|----------|----------|
| **Server not connecting** | No Google Ads tools available | Restart Claude Desktop, check config file syntax |
| **Invalid JSON config** | Claude startup errors | Validate JSON syntax in config file |
| **Permission errors** | "Permission denied" on startup | Check file permissions and paths |

### API Issues

| Issue | Symptoms | Solution |
|-------|----------|----------|
| **Invalid customer ID** | "Customer not found" | Use 10-digit format without dashes: `1234567890` |
| **API quota exceeded** | "Quota exceeded" error | Wait for quota reset or request increase |
| **Invalid developer token** | "Authentication failed" | Verify token in Google Ads API Center |
| **GAQL syntax errors** | "Invalid query" | Check GAQL syntax and field names |

### Debug Mode

Enable detailed logging for troubleshooting:

```python
# Add to server.py for debugging
import logging
logging.basicConfig(level=logging.DEBUG)
```

### Getting Help

If you encounter issues:

1. **Check the error message carefully** - it usually indicates the exact problem
2. **Verify all file paths** are absolute and correct
3. **Ensure environment variables** are properly set
4. **Check Google Cloud Console** for API quotas and billing
5. **Restart Claude Desktop** after any configuration changes

## 🚀 Advanced Configuration

### HTTP Transport Mode

For web deployment or remote access:

```bash
# Start server in HTTP mode
python3 server.py --http
```

**Claude Desktop config for HTTP:**
```json
{
  "mcpServers": {
    "google-ads": {
      "url": "http://127.0.0.1:8000/mcp"
    }
  }
}
```

### Custom Token Storage

Modify token storage location in `oauth/google_auth.py`:

```python
# Custom token file location
def get_token_path():
    return "/custom/secure/path/google_ads_token.json"
```

### Manager Account Configuration

For managing multiple accounts under an MCC:

```bash
# Add to .env file
GOOGLE_ADS_LOGIN_CUSTOMER_ID=123-456-7890
```

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### Development Setup

```bash
# Fork and clone the repository
git clone https://github.com/yourusername/google-ads-mcp-server.git
cd google-ads-mcp-server

# Create development environment
python3 -m venv .venv
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Set up development environment
cp .env.example .env
# Add your development credentials to .env
```

### Making Changes

1. **Create a feature branch:** `git checkout -b feature/amazing-feature`
2. **Make your changes** with appropriate tests
3. **Test thoroughly** with different account configurations
4. **Update documentation** as needed
5. **Commit changes:** `git commit -m 'Add amazing feature'`
6. **Push to branch:** `git push origin feature/amazing-feature`
7. **Open a Pull Request** with detailed description

### Testing Your Changes

```bash
# Test authentication flow
python3 server.py --test-auth

# Test API connectivity
python3 -c "
from oauth.google_auth import get_oauth_credentials
creds = get_oauth_credentials()
print('✅ Authentication successful!')
"

# Test with Claude Desktop
# Add your server to Claude config and test various commands
```

## 📊 API Limits and Quotas

### Google Ads API Quotas

- **Basic access:** 15,000 operations per day
- **Standard access:** 40,000 operations per day
- **Request rate:** 1,600 requests per minute per developer token

### Best Practices for API Usage

1. **Cache results** when possible to reduce API calls
2. **Use date ranges** to limit data volume
3. **Batch requests** when supported
4. **Monitor usage** in Google Cloud Console
5. **Implement retry logic** for rate limit errors

### Quota Management

```bash
# Monitor usage in Google Cloud Console
# Go to APIs & Services → Quotas
# Search for "Google Ads API" to see current usage
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### MIT License

```
Copyright (c) 2025 Google Ads MCP Server Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📈 Roadmap

### Upcoming Features
- 🔄 **Enhanced keyword research** with competitor analysis
- 📊 **Built-in data visualization** with charts and graphs
- 🤖 **AI-powered optimization suggestions**
- 📝 **Campaign creation and management tools**
- 🔍 **Advanced reporting capabilities**
- 🌐 **Multi-language support**

---

**Made with ❤️ for the MCP community**

*Connect your Google Ads data directly to AI assistants and unlock powerful advertising insights through natural language conversations.*
