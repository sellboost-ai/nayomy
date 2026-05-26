---
name: "21st-dev/magic-mcp"
description: "Create crafted UI components inspired by the best 21st.dev design engineers."
category: "Developer Tools"
repo: "21st-dev/magic-mcp"
stars: 4923
url: "https://github.com/21st-dev/magic-mcp"
body_length: 7943
language: "TypeScript"
homepage: "https://21st.dev/magic"
body_tr: |-
  # 21st.dev Magic AI Agent

  ![MCP Banner](https://21st.dev/magic-agent-og-image.png)

  Magic Component Platform (MCP), geliştiricilerin doğal dil açıklamaları aracılığıyla güzel, modern UI bileşenlerini anında oluşturmasına yardımcı olan güçlü bir yapay zeka destekli araçtır. Popüler IDE'lerle sorunsuzca entegre olur ve UI geliştirme için düzenli bir iş akışı sağlar.

  ## 🌟 Özellikler

  - **AI Destekli UI Oluşturma**: UI bileşenlerini doğal dil kullanarak açıklamak suretiyle oluşturun
  - **Çok-IDE Desteği**:
    - [Cursor](https://cursor.com) IDE entegrasyonu
    - [Windsurf](https://windsurf.ai) desteği
    - [VSCode](https://code.visualstudio.com/) desteği
    - [VSCode + Cline](https://cline.bot) entegrasyonu (Beta)
  - **Modern Bileşen Kütüphanesi**: [21st.dev](https://21st.dev) tarafından ilham alınan geniş bir ön-inşa edilmiş, özelleştirilebilir bileşen koleksiyonuna erişim
  - **Gerçek Zamanlı Önizleme**: Bileşenlerinizi oluştururken anında görüntüleyin
  - **TypeScript Desteği**: Tip-güvenli geliştirme için tam TypeScript desteği
  - **SVGL Entegrasyonu**: Profesyonel marka varlıkları ve logoların geniş koleksiyonuna erişim
  - **Bileşen İyileştirmesi**: Mevcut bileşenleri gelişmiş özellikler ve animasyonlarla iyileştirin (Yakında Geliyor)

  ## 🎯 Nasıl Çalışır

  1. **Agent'e İhtiyacınız Olanı Söyleyin**

     - AI Agent'inizin sohbet alanında `/ui` yazın ve aradığınız bileşeni açıklayın
     - Örnek: `/ui create a modern navigation bar with responsive design`

  2. **Magic'in Oluşturmasını Sağlayın**

     - IDE'niz Magic'i kullanmanız için sizi yönlendirir
     - Magic anında parlak bir UI bileşeni oluşturur
     - Bileşenler 21st.dev'in kütüphanesinden ilham almıştır

  3. **Sorunsuz Entegrasyon**
     - Bileşenler otomatik olarak projenize eklenir
     - Yeni UI bileşenlerinizi hemen kullanmaya başlayın
     - Tüm bileşenler tam olarak özelleştirilebilir

  ## 🚀 Başlangıç

  ### Ön Koşullar

  - Node.js (En son LTS sürümü önerilir)
  - Desteklenen IDE'lerden biri:
    - Cursor
    - Windsurf
    - VSCode (Cline uzantısı ile)

  ### Kurulum

  1. **API Anahtarı Oluşturun**

     - [21st.dev Magic Console](https://21st.dev/magic/console) ziyaret edin
     - Yeni bir API anahtarı oluşturun

  2. **Kurulum Yöntemi Seçin**

  #### Yöntem 1: CLI Kurulum (Önerilir)

  IDE'niz için MCP'yi kurulumu ve yapılandırılması için tek komut:

  ```bash
  npx @21st-dev/cli@latest install <client> --api-key <key>
  ```

  Desteklenen istemciler: cursor, windsurf, cline, claude

  #### Yöntem 2: Manuel Yapılandırma

  Manuel kurulumu tercih ediyorsanız, bunu IDE'nizin MCP config dosyasına ekleyin:

  ```json
  {
    "mcpServers": {
      "@21st-dev/magic": {
        "command": "npx",
        "args": ["-y", "@21st-dev/magic@latest", "API_KEY=\"your-api-key\""]
      }
    }
  }
  ```

  Config dosyası konumları:

  - Cursor: `~/.cursor/mcp.json`
  - Windsurf: `~/.codeium/windsurf/mcp_config.json`
  - Cline: `~/.cline/mcp_config.json`
  - Claude: `~/.claude/mcp_config.json`

  #### Yöntem 3: VS Code Kurulum

  Tek tıklamayla kurulum için aşağıdaki kurulum düğmelerinden birine tıklayın:

  [![Install with NPX in VS Code](https://img.shields.io/badge/VS_Code-NPM-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=%4021st-dev%2Fmagic&config=%7B%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%4021st-dev%2Fmagic%40latest%22%5D%2C%22env%22%3A%7B%22API_KEY%22%3A%22%24%7Binput%3AapiKey%7D%22%7D%7D&inputs=%5B%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22apiKey%22%2C%22description%22%3A%2221st.dev+Magic+API+Key%22%2C%22password%22%3Atrue%7D%5D) [![Install with NPX in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-NPM-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=%4021st-dev%2Fmagic&config=%7B%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%4021st-dev%2Fmagic%40latest%22%5D%2C%22env%22%3A%7B%22API_KEY%22%3A%22%24%7Binput%3AapiKey%7D%22%7D%7D&inputs=%5B%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22apiKey%22%2C%22description%22%3A%2221st.dev+Magic+API+Key%22%2C%22password%22%3Atrue%7D%5D&quality=insiders)

  ##### VS Code Manuel Kurulum

  Önce yukarıdaki kurulum düğmelerini tek tıklamayla kurulum için kontrol edin. Manuel kurulum için:

  VS Code'daki User Settings (JSON) dosyanıza aşağıdaki JSON bloğunu ekleyin. Bunu `Ctrl + Shift + P` tuşlarına basarak ve `Preferences: Open User Settings (JSON)` yazarak yapabilirsiniz:

  ```json
  {
    "mcp": {
      "inputs": [
        {
          "type": "promptString",
          "id": "apiKey",
          "description": "21st.dev Magic API Key",
          "password": true
        }
      ],
      "servers": {
        "@21st-dev/magic": {
          "command": "npx",
          "args": ["-y", "@21st-dev/magic@latest"],
          "env": {
            "API_KEY": "${input:apiKey}"
          }
        }
      }
    }
  }
  ```

  İsteğe bağlı olarak, bunu çalışma alanınızda `.vscode/mcp.json` adlı bir dosyaya ekleyebilirsiniz:

  ```json
  {
    "inputs": [
      {
        "type": "promptString",
        "id": "apiKey",
        "description": "21st.dev Magic API Key",
        "password": true
      }
    ],
    "servers": {
      "@21st-dev/magic": {
        "command": "npx",
        "args": ["-y", "@21st-dev/magic@latest"],
        "env": {
          "API_KEY": "${input:apiKey}"
        }
      }
    }
  }
  ```

  ## ❓ Sık Sorulan Sorular

  ### Magic AI Agent kod tabanımı nasıl işler?

  Magic AI Agent yalnızca oluşturduğu bileşenlerle ilgili dosyaları yazar veya değiştirir. Projenizin kod stilini ve yapısını izler ve uygulamanızın diğer bölümlerini etkilemeden mevcut kod tabanınızla sorunsuzca entegre olur.

  ### Oluşturulan bileşenleri özelleştirebilir miyim?

  Evet! Tüm oluşturulan bileşenler tam olarak düzenlenebilir ve iyi yapılandırılmış kodla gelir. Stil, işlevsellik ve davranışı, kod tabanınızdaki diğer herhangi bir React bileşeni gibi değiştirebilirsiniz.

  ### İşlemlerim bitmişse ne olur?

  Aylık oluşturma limitinizi aşarsanız, planınızı yükseltmeye davet edilirsiniz. Bileşen oluşturmaya devam etmek için istediğiniz zaman yükseltebilirsiniz. Mevcut bileşenleriniz tam olarak işlevsel kalacaktır.

  ### 21st.dev'in kütüphanesine yeni bileşenler ne kadar sürede eklenir?

  Yazarlar herhangi bir zamanda 21st.dev'e bileşen yayınlayabilir ve Magic Agent bunlara anında erişebilir. Bu, topluluktaki en son bileşenlere ve tasarım desenlerine her zaman erişebileceğiniz anlamına gelir.

  ### Bileşen karmaşıklığının bir sınırı var mı?

  Magic AI Agent, basit düğmelerden karmaşık etkileşimli formlara kadar değişen karmaşıklıktaki bileşenleri işleyebilir. Ancak en iyi sonuçlar için, çok karmaşık UI'ları daha küçük, yönetilebilir bileşenlere ayırmanızı öneririz.

  ## 🛠️ Geliştirme

  ### Proje Yapısı

  ```
  mcp/
  ├── app/
  │   └── components/     # Core UI components
  ├── types/             # TypeScript type definitions
  ├── lib/              # Utility functions
  └── public/           # Static assets
  ```

  ### Önemli Bileşenler

  - `IdeInstructions`: Farklı IDE'ler için kurulum talimatları
  - `ApiKeySection`: API anahtarı yönetim arayüzü
  - `WelcomeOnboarding`: Yeni kullanıcılar için onboarding akışı

  ## 🤝 Katkıda Bulunun

  Katkıları bekliyoruz! Lütfen [Discord topluluğumuza](https://discord.gg/Qx4rFunHfm) katılın ve Magic Agent'i iyileştirmeye yardımcı olmak için geri bildirim sağlayın. Kaynak kod [GitHub](https://github.com/serafimcloud/21st)'da mevcuttur.

  ## 👥 Topluluk & Destek

  - [Discord Topluluğu](https://discord.gg/Qx4rFunHfm) - Aktif topluluğumuza katılın
  - [Twitter](https://x.com/serafimcloud) - Güncellemeler için bizi takip edin

  ## ⚠️ Beta Notu

  Magic Agent şu anda beta aşamasındadır. Bu dönem boyunca tüm özellikler ücretsizdir. Platform'u iyileştirmeye devam ederken geri bildiriminiz ve sabırınız için minnettarız.

  ## 📝 Lisans

  MIT License

  ## 🙏 Teşekkürler

  - Beta test etçilerimiz ve topluluk üyelerimize teşekkürler
  - Cursor, Windsurf ve Cline ekiplerine işbirliği için özel teşekkürler
  - Bileşen ilhamı için [21st.dev](https://21st.dev) ile entegrasyon
  - Logo ve marka varlığı entegrasyonu için [SVGL](https://svgl.app)

  ---

  Daha fazla bilgi için [Discord topluluğumuza](https://discord.gg/Qx4rFunHfm) katılın veya [21st.dev/magic](https://21st.dev/magic) ziyaret edin.
---

# 21st.dev Magic AI Agent

![MCP Banner](https://21st.dev/magic-agent-og-image.png)

Magic Component Platform (MCP) is a powerful AI-driven tool that helps developers create beautiful, modern UI components instantly through natural language descriptions. It integrates seamlessly with popular IDEs and provides a streamlined workflow for UI development.

## 🌟 Features

- **AI-Powered UI Generation**: Create UI components by describing them in natural language
- **Multi-IDE Support**:
  - [Cursor](https://cursor.com) IDE integration
  - [Windsurf](https://windsurf.ai) support
  - [VSCode](https://code.visualstudio.com/) support
  - [VSCode + Cline](https://cline.bot) integration (Beta)
- **Modern Component Library**: Access to a vast collection of pre-built, customizable components inspired by [21st.dev](https://21st.dev)
- **Real-time Preview**: Instantly see your components as you create them
- **TypeScript Support**: Full TypeScript support for type-safe development
- **SVGL Integration**: Access to a vast collection of professional brand assets and logos
- **Component Enhancement**: Improve existing components with advanced features and animations (Coming Soon)

## 🎯 How It Works

1. **Tell Agent What You Need**

   - In your AI Agent's chat, just type `/ui` and describe the component you're looking for
   - Example: `/ui create a modern navigation bar with responsive design`

2. **Let Magic Create It**

   - Your IDE prompts you to use Magic
   - Magic instantly builds a polished UI component
   - Components are inspired by 21st.dev's library

3. **Seamless Integration**
   - Components are automatically added to your project
   - Start using your new UI components right away
   - All components are fully customizable

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- One of the supported IDEs:
  - Cursor
  - Windsurf
  - VSCode (with Cline extension)

### Installation

1. **Generate API Key**

   - Visit [21st.dev Magic Console](https://21st.dev/magic/console)
   - Generate a new API key

2. **Choose Installation Method**

#### Method 1: CLI Installation (Recommended)

One command to install and configure MCP for your IDE:

```bash
npx @21st-dev/cli@latest install <client> --api-key <key>
```

Supported clients: cursor, windsurf, cline, claude

#### Method 2: Manual Configuration

If you prefer manual setup, add this to your IDE's MCP config file:

```json
{
  "mcpServers": {
    "@21st-dev/magic": {
      "command": "npx",
      "args": ["-y", "@21st-dev/magic@latest", "API_KEY=\"your-api-key\""]
    }
  }
}
```

Config file locations:

- Cursor: `~/.cursor/mcp.json`
- Windsurf: `~/.codeium/windsurf/mcp_config.json`
- Cline: `~/.cline/mcp_config.json`
- Claude: `~/.claude/mcp_config.json`

#### Method 3: VS Code Installation

For one-click installation, click one of the install buttons below:

[![Install with NPX in VS Code](https://img.shields.io/badge/VS_Code-NPM-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=%4021st-dev%2Fmagic&config=%7B%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%4021st-dev%2Fmagic%40latest%22%5D%2C%22env%22%3A%7B%22API_KEY%22%3A%22%24%7Binput%3AapiKey%7D%22%7D%7D&inputs=%5B%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22apiKey%22%2C%22description%22%3A%2221st.dev+Magic+API+Key%22%2C%22password%22%3Atrue%7D%5D) [![Install with NPX in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-NPM-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=%4021st-dev%2Fmagic&config=%7B%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%4021st-dev%2Fmagic%40latest%22%5D%2C%22env%22%3A%7B%22API_KEY%22%3A%22%24%7Binput%3AapiKey%7D%22%7D%7D&inputs=%5B%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22apiKey%22%2C%22description%22%3A%2221st.dev+Magic+API+Key%22%2C%22password%22%3Atrue%7D%5D&quality=insiders)

##### Manual VS Code Setup

First, check the install buttons above for one-click installation. For manual setup:

Add the following JSON block to your User Settings (JSON) file in VS Code. You can do this by pressing `Ctrl + Shift + P` and typing `Preferences: Open User Settings (JSON)`:

```json
{
  "mcp": {
    "inputs": [
      {
        "type": "promptString",
        "id": "apiKey",
        "description": "21st.dev Magic API Key",
        "password": true
      }
    ],
    "servers": {
      "@21st-dev/magic": {
        "command": "npx",
        "args": ["-y", "@21st-dev/magic@latest"],
        "env": {
          "API_KEY": "${input:apiKey}"
        }
      }
    }
  }
}
```

Optionally, you can add it to a file called `.vscode/mcp.json` in your workspace:

```json
{
  "inputs": [
    {
      "type": "promptString",
      "id": "apiKey",
      "description": "21st.dev Magic API Key",
      "password": true
    }
  ],
  "servers": {
    "@21st-dev/magic": {
      "command": "npx",
      "args": ["-y", "@21st-dev/magic@latest"],
      "env": {
        "API_KEY": "${input:apiKey}"
      }
    }
  }
}
```

## ❓ FAQ

### How does Magic AI Agent handle my codebase?

Magic AI Agent only writes or modifies files related to the components it generates. It follows your project's code style and structure, and integrates seamlessly with your existing codebase without affecting other parts of your application.

### Can I customize the generated components?

Yes! All generated components are fully editable and come with well-structured code. You can modify the styling, functionality, and behavior just like any other React component in your codebase.

### What happens if I run out of generations?

If you exceed your monthly generation limit, you'll be prompted to upgrade your plan. You can upgrade at any time to continue generating components. Your existing components will remain fully functional.

### How soon do new components get added to 21st.dev's library?

Authors can publish components to 21st.dev at any time, and Magic Agent will have immediate access to them. This means you'll always have access to the latest components and design patterns from the community.

### Is there a limit to component complexity?

Magic AI Agent can handle components of varying complexity, from simple buttons to complex interactive forms. However, for best results, we recommend breaking down very complex UIs into smaller, manageable components.

## 🛠️ Development

### Project Structure

```
mcp/
├── app/
│   └── components/     # Core UI components
├── types/             # TypeScript type definitions
├── lib/              # Utility functions
└── public/           # Static assets
```

### Key Components

- `IdeInstructions`: Setup instructions for different IDEs
- `ApiKeySection`: API key management interface
- `WelcomeOnboarding`: Onboarding flow for new users

## 🤝 Contributing

We welcome contributions! Please join our [Discord community](https://discord.gg/Qx4rFunHfm) and provide feedback to help improve Magic Agent. The source code is available on [GitHub](https://github.com/serafimcloud/21st).

## 👥 Community & Support

- [Discord Community](https://discord.gg/Qx4rFunHfm) - Join our active community
- [Twitter](https://x.com/serafimcloud) - Follow us for updates

## ⚠️ Beta Notice

Magic Agent is currently in beta. All features are free during this period. We appreciate your feedback and patience as we continue to improve the platform.

## 📝 License

MIT License

## 🙏 Acknowledgments

- Thanks to our beta testers and community members
- Special thanks to the Cursor, Windsurf, and Cline teams for their collaboration
- Integration with [21st.dev](https://21st.dev) for component inspiration
- [SVGL](https://svgl.app) for logo and brand asset integration

---

For more information, join our [Discord community](https://discord.gg/Qx4rFunHfm) or visit [21st.dev/magic](https://21st.dev/magic).
