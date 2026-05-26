---
name: "ChanMeng666/server-google-news"
description: "Google News integration with automatic topic categorization, multi-language support, and comprehensive search capabilities including headlines, stories, and related topics through SerpAPI."
description_tr: "Google Haber entegrasyonu ile otomatik konu sınıflandırması, çok dilli destek ve SerpAPI üzerinden başlıklar, hikayeler ve ilgili konuları kapsayan kapsamlı arama yetenekleri."
category: "Search & Data Extraction"
repo: "ChanMeng666/server-google-news"
stars: 123
url: "https://github.com/ChanMeng666/server-google-news"
body_length: 12340
license: "MIT"
language: "TypeScript"
homepage: "https://glama.ai/mcp/servers/dbx6imq4ef"
body_tr: |-
  [![MseeP.ai Security Assessment Badge](https://mseep.net/pr/chanmeng666-server-google-news-badge.png)](https://mseep.ai/app/chanmeng666-server-google-news)

  <div align="center">
   <h1><br/>Google News MCP Server</h1>
   <a href="https://github.com/ChanMeng666/server-google-news/stargazers"></a>
   
   
   
   
  </div>

  <br/>

  <div align="center">
    <a href="https://www.pulsemcp.com/servers/chanmeng666-google-news"></a>
  </div>


  <br/>

  SerpAPI entegrasyonu aracılığıyla Google Haaber arama yetenekleri sağlayan bir Model Context Protocol (MCP) sunucu uygulaması. Haber sonuçlarını otomatik olarak kategorize eder ve birden fazla dili ve bölgeyi destekler.

  <a href="https://glama.ai/mcp/servers/dbx6imq4ef"></a>

  <br/>

  [![👉Şimdi Deneyin!👈](https://gradient-svg-generator.vercel.app/api/svg?text=%F0%9F%91%89Try%20It%20Now!%F0%9F%91%88&color=000000&height=60&gradientType=radial&duration=6s&color0=ffffff&template=pride-rainbow)](https://smithery.ai/server/@chanmeng666/google-news-server)

  <br/>

  https://github.com/user-attachments/assets/1cc71c27-f840-4c94-9ab5-460d84ba4779


  ![屏幕截图 2024-12-30 021446](https://github.com/user-attachments/assets/34985fac-a529-4aac-a77d-b0b93f70d0f7)

  ![屏幕截图 2024-12-30 021524](https://github.com/user-attachments/assets/6d1d3069-db04-421e-83b9-6ecdbce4847e)

  ![屏幕截图 2024-12-30 021914](https://github.com/user-attachments/assets/16889a09-c05d-47dc-b3fe-5ea3771e059d)

  ![屏幕截图 2024-12-30 021941](https://github.com/user-attachments/assets/da20e7a6-f2e8-4aec-bab9-f19322d0f798)


  # ✨ Özellikler

  ### 🔍 Esnek Arama Seçenekleri
  Sorgu tabanlı arama, konu arama, yayın filtresi ve hikaye kapsamı dahil kapsamlı arama yetenekleri.

  ### 🌐 Küresel Kapsam
  Yapılandırılabilir dil ve ülke kodları aracılığıyla birden fazla dili ve bölgeyi destekler.

  ### 📊 Akıllı Kategorilendirme
  Haber sonuçlarını AI & Teknoloji, İşletme, Bilim & Araştırma ve Sağlık gibi konulara otomatik olarak kategorize eder.

  ### 🔀 Çoklu Sonuç Türleri
  Başlıklar, hikayeler, ilgili konular ve menü bağlantıları dahil çeşitli haber sonuç türlerini işler.

  ### 🛠️ Sağlam Hata Yönetimi
  API hataları ve geçersiz girişler için kapsamlı hata yönetimi, yardımcı hata mesajları ile.

  ### 🌍 Dil Desteği
  Desteklenmeyen dil kodları için otomatik İngilizce yedek ayarı ve uygun kullanıcı bildirimleri.

  # 🔑 SerpApi Kurulum Rehberi

  Başlamadan önce, bir SerpApi anahtarı almanız gerekir. İşte nasıl:

  1. [SerpApi websitesini](https://serpapi.com/) ziyaret edin ve bir hesap oluşturun

  2. Kaydolduktan sonra Panonuza gidin:
     - "API Key" bölümünü bulun
     - API anahtarınızı kopyalayın
     - Yeni kullanıcılar 250 ücretsiz API çağrısı alır

  3. API Kullanım Detayları:
     - Ücretsiz seviye: Aylık 250 arama
     - Ücretli planlar 5000 arama için 75$/ay'dan başlar
     - Başarılı API çağrılarına dayalı faturalandırma
     - Çoklu ödeme yöntemleri: Kredi Kartı, PayPal, vb.

  4. Kullanım Limitleri:
     - İstek Hızı: Saniyede 2 istek
     - IP Kısıtlamaları: Yok
     - Eşzamanlı İstekler: 5
     - Yanıt Önbellek Süresi: 1 saat

  # 👩‍🔧 NVM/NPM ile MCP Sunucusu Bağlantısı Sorunları Çözümü

  Konfigürasyon çözümümü görmek için tıklayın 👉 https://github.com/modelcontextprotocol/servers/issues/76

  # 🚀 Hızlı Başlangıç

  1. Bağımlılıkları yükleyin:
  ```bash
  npm install
  ```

  2. Sunucuyu derleyin:
  ```bash
  npm run build
  ```

  3. Ortamı yapılandırın:
  `claude_desktop_config.json` dosyanızı aşağıdaki içerikle değiştirin (sistemin dosya yollarını ayarlayın):
  ```json
      "google-news": {
        "command": "D:\\Program\\nvm\\node.exe",
        "args": [
          "D:\\github_repository\\path_to\\dist\\index.js"
        ],
        "env": {
          "SERP_API_KEY": "your-api-key"
        }
      }
  ```

  4. Sunucuyu başlatın:
  ```bash
  npm start
  ```

  ## Sorun Giderme

  1. Geçersiz API Anahtarı
  - `claude_desktop_config.json` dosyasında API anahtar konfigürasyonunu doğrulayın
  - API anahtarının SERP API panosunda etkin olduğunu onaylayın

  2. İstek Hataları
  - Ağ bağlantısını kontrol edin
  - API çağrısı kotasının aşılmadığını doğrulayın
  - İstek parametresi formatını doğrulayın



  ## Testleri çalıştırma

  Evals paketi bir MCP client'ını yükler ve ardından index.ts dosyasını çalıştırır, bu nedenle testler arasında yeniden derlemek gerekli değildir. npx komutunun başına ortam değişkenleri ekleyerek yükleyebilirsiniz. Tam dokümantasyon [burada](https://www.mcpevals.io/docs) bulunabilir.

  ```bash
  OPENAI_API_KEY=your-key  npx mcp-eval src/evals/evals.ts src/index.ts
  ```
  # 📦 Kurulum

  ## Smithery Aracılığıyla Kurulum

  Google Haaber'i Claude Desktop'a otomatik olarak [Smithery](https://smithery.ai/server/@chanmeng666/google-news-server) aracılığıyla yüklemek için:

  ```bash
  npx -y @smithery/cli install @chanmeng666/google-news-server --client claude
  ```

  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/ChanMeng666/server-google-news)](https://archestra.ai/mcp-catalog/chanmeng666__server-google-news)
  [![smithery badge](https://smithery.ai/badge/@chanmeng666/google-news-server)](https://smithery.ai/server/@chanmeng666/google-news-server)

  ## mcp-get Aracılığıyla Kurulum

  ```bash
  npx @michaellatman/mcp-get@latest install @chanmeng666/google-news-server
  ```

  > Eski bir Windows PowerShell sürümü kullanıyorsanız, bu komuttan önce `Set-ExecutionPolicy Bypass -Scope Process` komutunu çalıştırmanız gerekebilir.

  ## Manuel Kurulum

   <a href="https://www.npmjs.com/package/@chanmeng666/google-news-server">@chanmeng666/google-news-server</a>

  ```bash
  # npm kullanarak
  npm i @chanmeng666/google-news-server
  # veya
  npm install @chanmeng666/google-news-server

  # yarn kullanarak
  yarn add @chanmeng666/google-news-server

  # pnpm kullanarak
  pnpm add @chanmeng666/google-news-server
  ```

  # 💻 Teknoloji Yığını
  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
  ![MCP](https://img.shields.io/badge/MCP-SDK-blue?style=for-the-badge)

  # 📖 API Dokümantasyonu

  Sunucu Model Context Protocol'ü uygular ve aşağıdaki parametrelere sahip bir Google Haaber arama tool'u sunar:

  - `q`: Arama sorgusu
  - `gl`: Ülke kodu (örn. 'us', 'uk')
  - `hl`: Dil kodu (örn. 'en', 'es')
  - `topic_token`: Belirli haber konuları için token
  - `publication_token`: Belirli yayınlar için token
  - `story_token`: Bir hikayenin tam kapsamı için token
  - `section_token`: Belirli bölümler için token

  # 🔧 Geliştirme

  ```bash
  # Sıcak yenileme ile geliştirme modunda çalıştırın
  npm run dev

  # Linting çalıştırın
  npm run lint

  # Testleri çalıştırın
  npm run test
  ```

  # 📝 Lisans

  Bu proje [MIT lisansı](./LICENSE) altında lisanslanmıştır.

  # 🙋‍♀ Yazar

  [Chan Meng](https://chanmeng.org/) tarafından oluşturulmuş ve yönetilmektedir.
  [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=normal&logo=github&logoColor=white)](https://github.com/ChanMeng666)
  [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=normal&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chanmeng666/)

  ---

  <details>
  <summary>🤖 AI Aracı Talimatları & GEO Optimizasyonu</summary>

  ## AI Aracıları ve LLM Tarayıcılar İçin

  Bu MCP sunucusu, kapsamlı talimatlar ve yapılandırılmış veriler ile AI aracısı kullanımı için optimize edilmiştir.

  ### Hızlı AI Kullanım Rehberi

  ```json
  {
    "tool": "google_news_search",
    "parameters": {
      "q": "artificial intelligence latest developments",
      "gl": "us",
      "hl": "en"
    }
  }
  ```

  ### AI Dostu Özellikler
  - **Otomatik Kategorilendirme**: Haber sonuçları otomatik olarak ilgili kategorilere sıralanır
  - **Yapılandırılmış Çıktı**: AI işleme için optimize edilmiş biçimlendirilmiş veriler döndürür
  - **Çok Dil Desteği**: Otomatik yedeklerle çeşitli dilleri destekler
  - **Hata Yönetimi**: Kapsamlı hata mesajları ve zarif azalma

  ### Yanıt Biçimi
  Sunucu aşağıdaki yapıyla kategorize edilmiş haberler döndürür:
  - **Kategoriler**: AI & Teknoloji, İşletme, Bilim & Araştırma, Sağlık, Genel
  - **Makale Alanları**: başlık, kaynak, bağlantı, tarih, özet, yazarlar
  - **Metadata**: zaman damgası, ilgili konular için menü_bağlantıları

  ### AI Aracıları için En İyi Uygulamalar
  1. Daha iyi sonuçlar için belirli, açıklayıcı anahtar kelimeler kullanın
  2. Konu tabanlı iş akışları için otomatik kategorilendirmeden yararlanın
  3. Uygun hata yönetimi ve yeniden deneme mantığı uygulayın
  4. API hız limitlerini (saniyede 2 istek) dikkate alın
  5. Daha iyi bağlam anlayışı için yapılandırılmış yanıtları ayrıştırın

  ### Gelişmiş Kullanım Desenleri
  - **Haber Izleme**: İşletme haberleri için şirket adlarını veya hisse senedi sembollerini kullanın
  - **Araştırma Keşfi**: Alan spesifik aramaları için konu token'larından yararlanın
  - **Son Dakika Haberler**: "Son dakika" veya "son haberler" sorguları kullanın
  - **Çok Dil**: Uygun gl ve hl parametrelerini birleştirin

  ### Hata Yönetimi
  - Geçersiz API anahtarı: SERP_API_KEY ortam değişkenini kontrol edin
  - Desteklenmeyen dil: Sunucu otomatik olarak İngilizce'ye geri döner
  - Hız sınırlaması: Saniyede 2 istek limitini dikkate alın
  - Geçersiz parametreler: Çağrıdan önce parametre türlerini doğrulayın


  </details>

  <details>
  <summary>📊 GEO Ölçümleri & İzleme</summary>

  ## Üretken Motor Optimizasyonu (GEO) Özellikleri

  Bu sunucu, AI aracısı kullanımı için kapsamlı izleme ve optimizasyon içerir.

  ### İzlenen Ana Ölçümler
  - **Alıntı Başarı Oranı**: Başarılı araç çağrılarının yüzdesi
  - **AI Trafiği Dönüşüm Oranı**: Aracı başarıyla kullanan AI aracılarının yüzdesi
  - **Sorgu Kapsam Oranı**: İlgili sonuçlar döndüren sorguların yüzdesi
  - **Yanıt Süresi**: Araç çağrıları için ortalama yanıt süresi
  - **Kategorilendirme Doğruluğu**: Otomatik haber kategorilendirmesinin doğruluğu
  - **Bağlantı Taşıma Oranı**: Kaynak bağlantıları içeren yanıtların yüzdesi

  ### İzleme Yapılandırması
  ```typescript
  interface GEOMonitoringConfig {
    trackingEnabled: boolean;
    metricsEndpoint: string;
    reportingInterval: number; // minutes
    alertThresholds: {
      errorRate: number;
      responseTime: number;
      successRate: number;
      satisfactionScore: number;
    };
  }
  ```

  ### Performans Optimizasyonu
  - Gerçek zamanlı ölçüm toplama
  - Performans sorunları için otomatik uyarı
  - Optimizasyon için sorgu örüntüsü analizi
  - Aracı kullanım izlemesi ve analitiği

  ### Veriye Dayalı İyileştirmeler
  - AI aracısı memnuniyetinin sürekli izlenmesi
  - Sorgu başarı oranı analizi
  - Yanıt süresi optimizasyonu
  - Kategorilendirme doğruluğu iyileştirmeleri

  Teknik uygulama detayları için [src/geo-metrics.ts](./src/geo-metrics.ts) dosyasına bakın.

  </details>

  <details>
  <summary>🔍 Yapılandırılmış Veriler & Metadata</summary>

  ## AI Optimize Edilmiş Metadata

  Bu sunucu, AI aracıları ve arama motorları için kapsamlı yapılandırılmış veriler sağlar.

  ### JSON-LD Yapılandırılmış Veriler
  Sunucu, Schema.org standartlarını takip eden yapılandırılmış veriler içerir:
  - Yazılım uygulaması metadata'sı
  - Özellik açıklamaları ve yetenekleri
  - Teknik gereksinimler ve bağımlılıklar
  - Kullanım desenleri ve entegrasyon rehberleri

  ### MCP Protokolü Uyumluluğu
  - **Protokol Sürümü**: 1.0.0
  - **Tool Adı**: `google_news_search`
  - **Yanıt Biçimi**: Kategorize edilmiş sonuçlarla yapılandırılmış metin
  - **Hız Limitleri**: Saniyede 2 istek, 5 eşzamanlı istek

  ### AI Keşif Özellikleri
  - **llms.txt**: Kök seviyesinde kapsamlı AI kullanım rehberi
  - **Yapılandırılmış Metadata**: AI spesifik bilgileri ile geliştirilmiş manifest.json
  - **Hata Yönetimi**: AI dostu hata mesajları ve yedek ayarları
  - **Dokümantasyon**: Ayrıntılı kullanım örnekleri ve en iyi uygulamalar

  ### Entegrasyon Rehberleri
  - Diğer MCP sunucuları ile sorunsuz entegrasyon için tasarlanmıştır
  - AI aracı iş akışları için optimize edilmiştir
  - Çeşitli AI platformları ve çerçeveleri destekler
  - Açık hata yönetimi ve hata ayıklama bilgileri sağlar

  Tam yapılandırılmış veri için [structured-data.json](./structured-data.json) dosyasına bakın.

  </details>


  ## Barındırılan Dağıtım

  Barındırılan bir dağıtım [Fronteir AI](https://fronteir.ai/mcp/chanmeng-google-news-mcp-server) üzerinde mevcuttur.
---

[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/chanmeng666-server-google-news-badge.png)](https://mseep.ai/app/chanmeng666-server-google-news)

<div align="center">
 <h1><br/>Google News MCP Server</h1>
 <a href="https://github.com/ChanMeng666/server-google-news/stargazers"></a>
 
 
 
 
</div>

<br/>

<div align="center">
  <a href="https://www.pulsemcp.com/servers/chanmeng666-google-news"></a>
</div>


<br/>

A Model Context Protocol (MCP) server implementation that provides Google News search capabilities via SerpAPI integration. Automatically categorizes news results and supports multiple languages and regions.

<a href="https://glama.ai/mcp/servers/dbx6imq4ef"></a>

<br/>

[![👉Try It Now!👈](https://gradient-svg-generator.vercel.app/api/svg?text=%F0%9F%91%89Try%20It%20Now!%F0%9F%91%88&color=000000&height=60&gradientType=radial&duration=6s&color0=ffffff&template=pride-rainbow)](https://smithery.ai/server/@chanmeng666/google-news-server)

<br/>

https://github.com/user-attachments/assets/1cc71c27-f840-4c94-9ab5-460d84ba4779


![屏幕截图 2024-12-30 021446](https://github.com/user-attachments/assets/34985fac-a529-4aac-a77d-b0b93f70d0f7)

![屏幕截图 2024-12-30 021524](https://github.com/user-attachments/assets/6d1d3069-db04-421e-83b9-6ecdbce4847e)

![屏幕截图 2024-12-30 021914](https://github.com/user-attachments/assets/16889a09-c05d-47dc-b3fe-5ea3771e059d)

![屏幕截图 2024-12-30 021941](https://github.com/user-attachments/assets/da20e7a6-f2e8-4aec-bab9-f19322d0f798)


# ✨ Features

### 🔍 Flexible Search Options
Comprehensive search capabilities including query-based search, topic search, publication filtering and story coverage.

### 🌐 Global Coverage
Supports multiple languages and regions through configurable language and country codes.

### 📊 Smart Categorization 
Automatically categorizes news results into topics like AI & Technology, Business, Science & Research, and Healthcare.

### 🔀 Multiple Result Types
Handles various news result types including headlines, stories, related topics and menu links.

### 🛠️ Robust Error Handling
Comprehensive error handling for API failures and invalid inputs, with helpful error messages.

### 🌍 Language Support
Automatic fallback to English for unsupported language codes with appropriate user notifications.

# 🔑 SerpApi Setup Guide

Before getting started, you'll need to obtain a SerpApi key. Here's how:

1. Visit [SerpApi website](https://serpapi.com/) and create an account

2. After registration, go to your Dashboard:
   - Locate the "API Key" section
   - Copy your API key
   - New users get 250 free API calls

3. API Usage Details:
   - Free tier: 250 searches per month
   - Paid plans start at $75/month for 5000 searches
   - Billing based on successful API calls
   - Multiple payment methods: Credit Card, PayPal, etc.

4. Usage Limits:
   - Request Rate: 2 requests/second
   - IP Restrictions: None
   - Concurrent Requests: 5
   - Response Cache Time: 1 hour

# 👩‍🔧 Solution for MCP Servers Connection Issues with NVM/NPM

Click to view my configuration solution 👉 https://github.com/modelcontextprotocol/servers/issues/76

# 🚀 Quick Start

1. Install dependencies:
```bash
npm install
```

2. Build the server:
```bash
npm run build
```

3. Configure environment:
Modify your `claude_desktop_config.json` with the following content (adjust paths according to your system):
```json
    "google-news": {
      "command": "D:\\Program\\nvm\\node.exe",
      "args": [
        "D:\\github_repository\\path_to\\dist\\index.js"
      ],
      "env": {
        "SERP_API_KEY": "your-api-key"
      }
    }
```

4. Start the server:
```bash
npm start
```

## Troubleshooting

1. Invalid API Key
- Verify API key configuration in `claude_desktop_config.json`
- Confirm API key is active in SERP API dashboard

2. Request Failures
- Check network connectivity
- Verify API call quota hasn't been exceeded
- Validate request parameter format



## Running evals

The evals package loads an mcp client that then runs the index.ts file, so there is no need to rebuild between tests. You can load environment variables by prefixing the npx command. Full documentation can be found [here](https://www.mcpevals.io/docs).

```bash
OPENAI_API_KEY=your-key  npx mcp-eval src/evals/evals.ts src/index.ts
```
# 📦 Installation

## Installing via Smithery

To install Google News for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@chanmeng666/google-news-server):

```bash
npx -y @smithery/cli install @chanmeng666/google-news-server --client claude
```

[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/ChanMeng666/server-google-news)](https://archestra.ai/mcp-catalog/chanmeng666__server-google-news)
[![smithery badge](https://smithery.ai/badge/@chanmeng666/google-news-server)](https://smithery.ai/server/@chanmeng666/google-news-server)

## Installing via mcp-get

```bash
npx @michaellatman/mcp-get@latest install @chanmeng666/google-news-server
```

> If you are using an old version of Windows PowerShell, you may need to run `Set-ExecutionPolicy Bypass -Scope Process` before this command.

## Manual Installation

 <a href="https://www.npmjs.com/package/@chanmeng666/google-news-server">@chanmeng666/google-news-server</a>

```bash
# Using npm
npm i @chanmeng666/google-news-server
# or
npm install @chanmeng666/google-news-server

# Using yarn
yarn add @chanmeng666/google-news-server

# Using pnpm
pnpm add @chanmeng666/google-news-server
```

# 💻 Tech Stack
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-SDK-blue?style=for-the-badge)

# 📖 API Documentation

The server implements the Model Context Protocol and exposes a Google News search tool with the following parameters:

- `q`: Search query string
- `gl`: Country code (e.g., 'us', 'uk')
- `hl`: Language code (e.g., 'en', 'es')
- `topic_token`: Token for specific news topics
- `publication_token`: Token for specific publishers
- `story_token`: Token for full coverage of a story
- `section_token`: Token for specific sections

# 🔧 Development

```bash
# Run in development mode with hot reload
npm run dev

# Run linting
npm run lint

# Run tests
npm run test
```

# 📝 License

This project is [MIT licensed](./LICENSE).

# 🙋‍♀ Author

Created and maintained by [Chan Meng](https://chanmeng.org/).
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=normal&logo=github&logoColor=white)](https://github.com/ChanMeng666)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=normal&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chanmeng666/)

---

<details>
<summary>🤖 AI Agent Instructions & GEO Optimization</summary>

## For AI Agents and LLM Crawlers

This MCP server is optimized for AI agent usage with comprehensive instructions and structured data.

### Quick AI Usage Guide

```json
{
  "tool": "google_news_search",
  "parameters": {
    "q": "artificial intelligence latest developments",
    "gl": "us",
    "hl": "en"
  }
}
```

### AI-Friendly Features
- **Automatic Categorization**: News results are automatically sorted into relevant categories
- **Structured Output**: Returns formatted data optimized for AI processing
- **Multi-language Support**: Supports various languages with automatic fallbacks
- **Error Handling**: Comprehensive error messages and graceful degradation

### Response Format
The server returns categorized news with the following structure:
- **Categories**: AI & Technology, Business, Science & Research, Healthcare, General
- **Article Fields**: title, source, link, date, snippet, authors
- **Metadata**: timestamp, menu_links for related topics

### Best Practices for AI Agents
1. Use specific, descriptive keywords for better results
2. Leverage automatic categorization for topic-based workflows
3. Implement proper error handling and retry logic
4. Respect API rate limits (2 requests/second)
5. Parse structured responses for better context understanding

### Advanced Usage Patterns
- **News Monitoring**: Use company names or stock symbols for business news
- **Research Exploration**: Leverage topic tokens for field-specific searches
- **Breaking News**: Use "breaking news" or "latest news" queries
- **Multi-language**: Combine appropriate gl and hl parameters

### Error Handling
- Invalid API key: Check SERP_API_KEY environment variable
- Unsupported language: Server auto-falls back to English
- Rate limiting: Respect 2 requests/second limit
- Invalid parameters: Validate parameter types before calling


</details>

<details>
<summary>📊 GEO Metrics & Monitoring</summary>

## Generative Engine Optimization (GEO) Features

This server includes comprehensive monitoring and optimization for AI agent usage.

### Key Metrics Tracked
- **Citation Success Rate**: Percentage of successful tool calls
- **AI Traffic Conversion Rate**: Percentage of AI agents successfully using the tool
- **Query Coverage Rate**: Percentage of queries returning relevant results
- **Response Time**: Average response time for tool calls
- **Categorization Accuracy**: Accuracy of automatic news categorization
- **Link Carry Rate**: Percentage of responses including source links

### Monitoring Configuration
```typescript
interface GEOMonitoringConfig {
  trackingEnabled: boolean;
  metricsEndpoint: string;
  reportingInterval: number; // minutes
  alertThresholds: {
    errorRate: number;
    responseTime: number;
    successRate: number;
    satisfactionScore: number;
  };
}
```

### Performance Optimization
- Real-time metrics collection
- Automated alerting for performance issues
- Query pattern analysis for optimization
- Agent usage tracking and analytics

### Data-Driven Improvements
- Continuous monitoring of AI agent satisfaction
- Query success rate analysis
- Response time optimization
- Categorization accuracy improvements

For technical implementation details, see [src/geo-metrics.ts](./src/geo-metrics.ts).

</details>

<details>
<summary>🔍 Structured Data & Metadata</summary>

## AI-Optimized Metadata

This server provides comprehensive structured data for AI agents and search engines.

### JSON-LD Structured Data
The server includes structured data following Schema.org standards:
- Software application metadata
- Feature descriptions and capabilities
- Technical requirements and dependencies
- Usage patterns and integration guidelines

### MCP Protocol Compliance
- **Protocol Version**: 1.0.0
- **Tool Name**: `google_news_search`
- **Response Format**: Structured text with categorized results
- **Rate Limits**: 2 requests/second, 5 concurrent requests

### AI Discovery Features
- **llms.txt**: Comprehensive AI usage guide at root level
- **Structured Metadata**: Enhanced manifest.json with AI-specific information
- **Error Handling**: AI-friendly error messages and fallbacks
- **Documentation**: Detailed usage examples and best practices

### Integration Guidelines
- Designed for seamless integration with other MCP servers
- Optimized for AI agent workflows
- Supports various AI platforms and frameworks
- Provides clear error handling and debugging information

For complete structured data, see [structured-data.json](./structured-data.json).

</details>


## Hosted deployment

A hosted deployment is available on [Fronteir AI](https://fronteir.ai/mcp/chanmeng-google-news-mcp-server).
