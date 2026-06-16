---
name: "zillow/auto-mobile"
description: "Tool suite built around an MCP server for Android automation for developer workflow and testing"
category: "Developer Tools"
repo: "zillow/auto-mobile"
stars: 78
url: "https://github.com/zillow/auto-mobile"
body_length: 2438
license: "Apache-2.0"
language: "TypeScript"
body_tr: |-
  # AutoMobile

  > **⚠️ PROJE ARŞİVLENDİ**
  >
  > **AutoMobile artık Zillow tarafından bakımı yapılmamakta veya desteklenmemektedir. Zillow bu proje için herhangi bir garanti veya destek sağlamamaktadır.**
  >
  > Bu depo arşivlenmiştir ve salt okunur durumdadır. Devam eden geliştirme ve destek için lütfen Jason Pearson tarafından yönetilen topluluk forklarına bakınız:
  >
  > **🔗 [https://github.com/kaeawc/auto-mobile](https://github.com/kaeawc/auto-mobile)**

  ---

  ![AutoMobile sticker](https://raw.githubusercontent.com/zillow/auto-mobile/HEAD/docs/img/auto_mobile_sticker_splash.png)

  <a href="https://glama.ai/mcp/servers/@zillow/auto-mobile">
    
  </a>

  AutoMobile, mobil otomasyon için bir araç setidir. Bunu UI testleri için veya geliştirme workflow asistanı olarak kullanabilirsiniz.

  İlk olarak desteklenen platform Android olup, iOS'a genişletme planları bulunmaktadır.

  ## Nasıl çalışır

  - 🔧 **[Güçlü MCP Server](docs/features/mcp-server/index.md)**: AutoMobile, MCP tool çağrıları aracılığıyla kapsamlı [actions](docs/features/mcp-server/actions.md) ve hızlı [observations](docs/features/mcp-server/observation.md) ile [interaction loop](docs/features/mcp-server/interaction-loop.md)'u yönlendirmek için sağlar.
  - 🗺️ **Source Mapping**: Proje yolu yapılandırmasını derin view hierarchy analizi ile birleştirerek tam olarak hangi kodun render edildiğini biliriz.
  - ✍️ **[Otomatik Test Yazma](docs/features/test-authoring/index.md)**: Test yazma modunda kullanıldığında AutoMobile sizin için testler yazacaktır. Testleri yazmanın tek yoludur.
  - 🧪 **[Test Yürütme](docs/features/test-execution/index.md)** - Testleri yerel olarak veya CI'da ek altyapı olmadan çalıştırın.
  - 📱 **Device Management**: Emülatör kontrolü ve uygulama yaşam döngüsü yönetimi ile çok cihazlı destek.

  Hepsi bir araya geldiğinde şöyle bir sistem elde edersiniz:

  ![automobile_system_design.png](https://raw.githubusercontent.com/zillow/auto-mobile/HEAD/docs/img/automobile_system_design.png)

  ## Belgeler

  - 💻 [Kurulum & Başlangıç](docs/installation.md) - AutoMobile [npm'de yayımlanmıştır](https://www.npmjs.com/package/auto-mobile) ve test ettiğimiz ajanlar için talimatlarımız bulunmaktadır.
  - 📝 [Değişiklik Günlüğü](CHANGELOG.md) - yakında gelecek

  ## Katkıda Bulunma

  - [Davranış Kuralları](CODE_OF_CONDUCT.md)
  - [Sorumlu ifşa & kullanım](SECURITY.md)
  - [Katkıda Bulunma](.github/CONTRIBUTING.md) - yakında gelecek

  # Teşekkür 

  AutoMobile'ı kullanmaya devam ederek, [uyarıları ve sorumlu kullanım gerekliliklerini kabul ve onaylıyorsunuz](SECURITY.md).
---

# AutoMobile

> **⚠️ PROJECT ARCHIVED**
>
> **AutoMobile is no longer maintained or supported by Zillow. Zillow does not provide warranties or support for this project.**
>
> This repository has been archived and is read-only. For continued development and support, please see the community-maintained fork by Jason Pearson:
>
> **🔗 [https://github.com/kaeawc/auto-mobile](https://github.com/kaeawc/auto-mobile)**

---

![AutoMobile sticker](https://raw.githubusercontent.com/zillow/auto-mobile/HEAD/docs/img/auto_mobile_sticker_splash.png)

<a href="https://glama.ai/mcp/servers/@zillow/auto-mobile">
  
</a>

AutoMobile is a set of tools for mobile automation. You can use it for UI testing or as a development workflow
assistant.

The first platform supported is Android with plans to extend to iOS.

## How it works

- 🔧 **[Powerful MCP Server](docs/features/mcp-server/index.md)**: AutoMobile provides comprehensive [actions](docs/features/mcp-server/actions.md) through MCP
  tool calls with a fast [observations](docs/features/mcp-server/observation.md) to drive the
  [interaction loop](docs/features/mcp-server/interaction-loop.md).
- 🗺️ **Source Mapping**: Combining project path config with deep view hierarchy analysis we know exactly what code is being rendered.
- ✍️ **[Automated Test Authoring](docs/features/test-authoring/index.md)**: When used in test authoring mode AutoMobile will write tests for you. It is the only way it writes tests.
- 🧪 **[Test Execution](docs/features/test-execution/index.md)** - Run tests locally or on CI without extra infrastructure.
- 📱 **Device Management**: Multi-device support with emulator control and app lifecycle management.

All together you get a system that looks like this:

![automobile_system_design.png](https://raw.githubusercontent.com/zillow/auto-mobile/HEAD/docs/img/automobile_system_design.png)

## Documentation

- 💻 [Installation & Getting Started](docs/installation.md) - AutoMobile is [published on npm](https://www.npmjs.com/package/auto-mobile)
  and we have instructions for agents we've tested with.
- 📝 [Change Log](CHANGELOG.md) - coming soon

## Contributing

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Responsible disclosure & use](SECURITY.md)
- [Contributing](.github/CONTRIBUTING.md) - coming soon

# Acknowledgement 

By continuing to use AutoMobile, [you acknowledge and agree to the warnings and responsible use requirements](SECURITY.md).
