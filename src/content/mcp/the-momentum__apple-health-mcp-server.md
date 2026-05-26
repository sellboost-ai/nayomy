---
name: "the-momentum/apple-health-mcp-server"
description: "An MCP server that provides access to exported data from Apple Health. Data analytics included."
category: "Biology Medicine and Bioinformatics"
repo: "the-momentum/apple-health-mcp-server"
stars: 194
url: "https://github.com/the-momentum/apple-health-mcp-server"
body_length: 5275
license: "MIT"
language: "Python"
body_tr: |-
  <a name="readme-top"></a>

  <div align="center">
    
    <h1>Apple Health MCP Server</h1>
    <p><strong>Apple Health Verilerini Keşfetme</strong></p>

    [![Bize Ulaşın](https://img.shields.io/badge/Bize%20Ulaşın-AFF476.svg?style=for-the-badge&logo=mail&logoColor=black)](mailto:hello@themomentum.ai?subject=Apple%20Health%20MCP%20Server%20Inquiry)
    [![Momentum'u Ziyaret Edin](https://img.shields.io/badge/Momentum'u%20Ziyaret%20Edin-1f6ff9.svg?style=for-the-badge&logo=safari&logoColor=white)](https://themomentum.ai)
    [![MIT Lisansı](https://img.shields.io/badge/License-MIT-636f5a.svg?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)

    <a href="https://glama.ai/mcp/servers/@the-momentum/apple-health-mcp-server">
      
    </a>
  </div>

  > [!NOTE]
  > **Bu proje [Open Wearables](https://github.com/the-momentum/open-wearables)'e dönüştü** - birden fazla cihazdan giyilebilir sağlık verilerini birleştirmek için kendi barındırılan platform (Apple Health dahil). Open Wearables ayrıca bir MCP sunucusu ve manuel XML dışa aktarma ihtiyacını ortadan kaldıran sürekli Apple Health veri senkronizasyonu için bir uygulamacı sağlar. Kontrol edin: [github.com/the-momentum/open-wearables](https://github.com/the-momentum/open-wearables)

  ---
  Apple Health verilerinizi MCP'yi destekleyen herhangi bir LLM ile bağlayın. Verilerinizle konuşun ve kişiselleştirilmiş içgörüler elde edin.

  ## 💡 Demo

  Bu demo, Claude'un `apple-health-mcp-server`'ı kullanarak verilerinizle ilgili soruları nasıl yanıtladığını gösterir. Demo'dan örnek sorular:
  - Apple Health verilerimizi analiz etmeme yardımcı olmanızı istiyorum. Veri türlerini analiz ederek başlayalım - hangi verilerin mevcut olduğunu ve ne kadarının olduğunu kontrol edin.
  - Son hafta içindeki aktivitelerim hakkında bana ne söyleyebilirsiniz? Günlük istatistiklerim nasıl görünüyordu?
  - Lütfen Temmuz ve Haziran aylarındaki koşu antrenmanlarımı özetleyin. İlginç bir şey görüyor musunuz?

  https://github.com/user-attachments/assets/93ddbfb9-6da9-42c1-9872-815abce7e918


  Denemeyi istiyorsunuz? **[🚀 Başlangıç](docs/getting-started.md)**

  ## 🌟 Apple Health MCP Server Neden Kullanılmalı?

   - **🧩 Verilerinizi her yere uydurun**: bu yazılımı kullanarak Apple cihazlarından dışa aktarılan verileri herhangi bir DBMS'ye aktarabilirsiniz, temel importer zaten uzantılara hazırdır
   - **🎯 Karmaşık veri erişimini basitleştirin**: veri yapısını bilmenize veya SQL gibi herhangi bir yapılandırılmış sorgu dili kullanmanıza gerek yok, doğal dil ile basit erişim sağlanır
   - **🔍︎ Gizli eğilimleri bulun**: otomatik olarak oluşturulan sorguları kullanabilen bir geçit olarak LLM'yi kullanın; bu, eğilimleri manuel olarak algılamak için çok kolay değildir

  ## ✨ Temel Özellikler

  - **🚀 FastMCP Framework**: Yüksek performanslı MCP sunucusu yetenekleri için FastMCP üzerinde oluşturulmuş
  - **🍏 Apple Health Veri Keşfi**: Apple Health XML dışa aktarmalarını içe aktarın, ayrıştırın ve analiz edin
  - **🔎 Güçlü Arama & Filtreleme**: Doğal dil ve gelişmiş parametreler kullanarak sağlık kayıtlarını sorgulayın ve filtreleyin
  - **📦 Elasticsearch, ClickHouse veya DuckDB Entegrasyonu**: Sağlık verilerini ölçekte verimli bir şekilde indeksleyin ve arayın
  - **🛠️ Modüler MCP Araçları**: Yapı analizi, kayıt araması, türe dayalı çıkarma ve daha fazlası için araçlar
  - **📈 Veri Özetleri & Eğilimler**: Sağlık verilerinizden istatistikler ve eğilim analizleri oluşturun
  - **🐳 Container'a Hazır**: Kolay dağıtım ve ölçeklendirme için Docker desteği
  - **🔧 Yapılandırılabilir**: Kapsamlı ```.env``` tabanlı konfigürasyon seçenekleri

  ## 📚 Dokümantasyon

  - **[🚀 Başlangıç](docs/getting-started.md)** - Tam kurulum rehberi
  - **[🔍 Hakkında](docs/about.md)** - Detaylı açıklama & mimari
  - **[🔧 Konfigürasyon](docs/configuration.md)** - Ortam değişkenleri ve ayarlar
  - **[🛠️ MCP Araçları](docs/mcp-tools.md)** - Tüm mevcut araçlar
  - **[🗺️ Yol Haritası](docs/roadmap.md)** - Yaklaşan özellikler ve yol haritası

  **Yardıma mı ihtiyacınız var?** Kullanım durumları veya uygulama konusunda rehberlik mi arıyorsunuz? [GitHub tartışma forumunda](https://github.com/the-momentum/apple-health-mcp-server/discussions) sorularınızı sormaktan çekinmeyin! Orada ayrıca ilginç kullanım durumları, ipuçları ve topluluk içgörülerini bulacaksınız.

  ## 👥 Katkıda Bulunanlar

  <a href="https://github.com/the-momentum/apple-health-mcp-server/graphs/contributors">
    
  </a>

  <p align="right">(<a href="#readme-top">başa dön</a>)</p>

  ## 💼 Momentum Hakkında
  Bu proje, sağlık teknolojisini daha güvenli, birlikte çalışabilir ve AI'ye hazır hale getirdiğimiz Momentum'un açık kaynaklı ekosisteminin bir parçasıdır. Amacımız HealthTech ekiplerine FHIR gibi standartları güvenli ve verimli bir şekilde benimsemelerine yardımcı olmaktır. Biz sağlık AI geliştirme uzmanlarıyız ve FT1000, Deloitte Fast 50 ve Forbes tarafından, sonraki nesil sağlık yeniliklerini güçlendiren ölçeklenebilir, HIPAA uyumlu çözümler oluşturduğumuz için tanınmışız.

  📖 Deneyimlerimizden öğrenmek ister misiniz? Görüşlerimizi okuyun → <a href="https://www.themomentum.ai/blog">themomentum.ai/blog</a>. 
  İlgilendiniz mi? <a href="http://themomentum.ai/lets-talk">Konuşalım</a>!

  <div align="center">
    <p><em>❤️ ile <a href="https://themomentum.ai">Momentum</a> tarafından oluşturulmuş • AI ile sağlık veri yönetimini dönüştürüyor</em></p>
  </div>
---

<a name="readme-top"></a>

<div align="center">
  
  <h1>Apple Health MCP Server</h1>
  <p><strong>Apple Health Data Exploration</strong></p>

  [![Contact us](https://img.shields.io/badge/Contact%20us-AFF476.svg?style=for-the-badge&logo=mail&logoColor=black)](mailto:hello@themomentum.ai?subject=Apple%20Health%20MCP%20Server%20Inquiry)
  [![Visit Momentum](https://img.shields.io/badge/Visit%20Momentum-1f6ff9.svg?style=for-the-badge&logo=safari&logoColor=white)](https://themomentum.ai)
  [![MIT License](https://img.shields.io/badge/License-MIT-636f5a.svg?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)

  <a href="https://glama.ai/mcp/servers/@the-momentum/apple-health-mcp-server">
    
  </a>
</div>

> [!NOTE]
> **This project has evolved into [Open Wearables](https://github.com/the-momentum/open-wearables)** - self-hosted platform to unify wearable health data from multiple devices, including Apple Health. Open Wearables also provides an MCP server and a companion app for continuous Apple Health data sync, eliminating the need for manual XML exports. Check it out: [github.com/the-momentum/open-wearables](https://github.com/the-momentum/open-wearables)

---
Connect your Apple Health data with any LLM that supports MCP. Talk to your data and get personalised insights.

## 💡 Demo

This demo shows how Claude uses the `apple-health-mcp-server` to answer questions about your data. Example prompts from the demo:
- I would like you to help me analyze my Apple Health data. Let's start by analyzing the data types - check what data is available and how much of it there is.
- What can you tell me about my activity in the last week? How did my daily statistics look?
- Please also summarise my running workouts in July and June. Do you see anything interesting?

https://github.com/user-attachments/assets/93ddbfb9-6da9-42c1-9872-815abce7e918


Want to try it out? **[🚀 Getting Started](docs/getting-started.md)**

## 🌟 Why to use Apple Health MCP Server?

 - **🧩 Fit your data everywhere**: using this software you can import data exported from Apple devices into any DBMS, base importer is already prepared for extensions
 - **🎯 Simplify complex data access**: you don't need to know data structure or use any structured query language, like SQL, simple access is just granted with natural language
 - **🔍︎ Find hidden trends**: use LLM as a gate to flexible auto-generated queries which will be able to find data trends not so easy to detect manually

## ✨ Key Features

- **🚀 FastMCP Framework**: Built on FastMCP for high-performance MCP server capabilities
- **🍏 Apple Health Data Exploration**: Import, parse, and analyze Apple Health XML exports
- **🔎 Powerful Search & Filtering**: Query and filter health records using natural language and advanced parameters
- **📦 Elasticsearch, ClickHouse or DuckDB Integration**: Index and search health data efficiently at scale
- **🛠️ Modular MCP Tools**: Tools for structure analysis, record search, type-based extraction, and more
- **📈 Data Summaries & Trends**: Generate statistics and trend analyses from your health data
- **🐳 Container Ready**: Docker support for easy deployment and scaling
- **🔧 Configurable**: Extensive ```.env```-based configuration options

## 📚 Documentation

- **[🚀 Getting Started](docs/getting-started.md)** - Complete setup guide
- **[🔍 About](docs/about.md)** - Detailed description & architecture
- **[🔧 Configuration](docs/configuration.md)** - Environment variables and settings
- **[🛠️ MCP Tools](docs/mcp-tools.md)** - All available tools
- **[🗺️ Roadmap](docs/roadmap.md)** - Upcoming features and roadmap

**Need help?** Looking for guidance on use cases or implementation? Don't hesitate to ask your question in our [GitHub discussion forum](https://github.com/the-momentum/apple-health-mcp-server/discussions)! You'll also find interesting use cases, tips, and community insights there.

## 👥 Contributors

<a href="https://github.com/the-momentum/apple-health-mcp-server/graphs/contributors">
  
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💼 About Momentum
This project is part of Momentum’s open-source ecosystem, where we make healthcare technology more secure, interoperable, and AI-ready. Our goal is to help HealthTech teams adopt standards such as FHIR safely and efficiently. We are healthcare AI development experts, recognized by FT1000, Deloitte Fast 50, and Forbes for building scalable, HIPAA-compliant solutions that power next-generation healthcare innovation.

📖 Want to learn from our experience? Read our insights → <a href="https://www.themomentum.ai/blog">themomentum.ai/blog</a>. 
Interested? <a href="http://themomentum.ai/lets-talk">Let's talk</a>!

<div align="center">
  <p><em>Built with ❤️ by <a href="https://themomentum.ai">Momentum</a> • Transforming healthcare data management with AI</em></p>
</div>
