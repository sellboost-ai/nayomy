---
name: "mhmzdev/figma-flutter-mcp"
description: "Provide coding agents direct access to Figma data to help them write Flutter code for building apps including assets exports, widgets maintenance and full screens implementations."
category: "Developer Tools"
repo: "mhmzdev/figma-flutter-mcp"
stars: 235
url: "https://github.com/mhmzdev/figma-flutter-mcp"
body_length: 10694
license: "MIT"
language: "TypeScript"
body_tr: |-
  <div align="center">
    
    <br>

    <h1>Figma to Flutter MCP Server</h1>
     <p>
      🌐 Kullanılabilir diller:
      <a href="README.ko.md">한국어 (Korean)</a> |
      <a href="README.ja.md">日本語 (Japanese)</a> |
      <a href="README.zh-cn.md">简体中文 (Simplified Chinese)</a> |
      <a href="README.zh-tw.md">繁體中文 (Traditional Chinese)</a>
    </p>
    <h3>Figma'nın zengin verilerini kodlama ajanınızda kullanın.<br/>Tasarımları Flutter şeklinde uygulayın!</h3>
    <a href="https://npmcharts.com/compare/figma-flutter-mcp?interval=30">
      
    </a>
    <a href="https://github.com/mhmzdev/figma-flutter-mcp/blob/main/LICENSE">
      
    </a>
    <a href="https://twitter.com/mhmzdev">
      
    </a>
  </div>
  <br>

  [Cursor](https://cursor.sh) veya diğer AI destekli araçları kullanarak [MCP server](https://modelcontextprotocol.io/) aracılığıyla Figma'nın zengin dosyalarına, verilerine, bileşenlerine ve daha fazlasına erişin.

  ## 📋 İçindekiler

  - [🦋 Observable Flutter #70](#-observable-flutter-70)
  - [🎥 Kısa Video Demo](#-kısa-video-demo)
  - [📝 Başlangıç](#-başlangıç)
  - [📚 Nasıl çalışır](#-nasıl-çalışır--detaylar-burada)
  - [🛠️ Kullanım](#-kullanım)
    - [🔑 Figma API Anahtarı](#-figma-api-anahtarı)
    - [🏹 Cursor'da MCP](#-cursorda-mcp)
    - [🚀 Yerel Test için Hızlı Başlangıç](#-yerel-test-için-hızlı-başlangıç)
  - [🧱 Temel İş Akışı](#-temel-iş-akışı)
    - [🤖 AI Kodlama Ajanı Yardımı](#-ai-kodlama-ajanı-yardımı)
    - [⚠️ SVG varlıkları ekran üretimi ile çalışmazsa](#-svg-varlıkları-ekran-üretimi-ile-çalışmazsa)
  - [⚠️ Feragatnameler](#-feragatnameler)
  - [🙌🏼 Teşekkürler](#-teşekkürler)
  - [🧱 Diğer çerçeveler](#-diğer-çerçeveler)
  - [🔑 Lisans](#-lisans)
  - [🙋‍♂️ Yazar](#-yazar)
    - [Muhammad Hamza](#muhammad-hamza)

  ## 🦋 Observable Flutter #70
  Observable Flutter'da geliştirilmiş açıklamalar ve demo ile öne çıkarıldı:

  <a href="https://www.youtube.com/live/d7qrvytOxSA?si=ESY8hPJpQm_OY4Ye">
    
  </a>

  ## 🎥 Kısa Video Demo
  Figma Flutter MCP'nin neredeyse tüm özellikleri gerçek figma tasarımı ile gösterilmiştir.
  - İngilizce: https://youtu.be/lJlfOfpl2sI
  - Urduca/Hintçe: https://youtu.be/mepPWpIZ61M

  ## 📝 [Başlangıç](docs/getting-started.md)
  Detaylı [başlangıç](docs/getting-started.md) belgelerini veya [demo videosunu](https://youtu.be/lJlfOfpl2sI) hızlı başlangıç olarak inceleyebilirsiniz. İlk Sürüm olması nedeniyle iyileştirme için çok yer vardır, bu nedenle neler yapılacağını veya iyileştirileceğini görmek için [issues](https://github.com/mhmzdev/figma-flutter-mcp/issues)'lara göz atabilirsiniz.

  ## 📚 Nasıl çalışır | [Detaylar Burada](docs/figma-flutter-mcp.md)
  1. [Bileşenler/Widgets](src/extractors/components/)
  - ✅ Figma düğümü verilerini çıkar: Layout, stil, boyutlar, renkler, metin içeriği vb.
  - ✅ Yapıyı analiz et: Alt öğeler, iç içe bileşenler, görsel önem
  - ✅ Rehberlik sağla: Flutter widget'ları ve uygulama kalıplarını öner
  - ❌ Gerçek Flutter kod dosyaları OLUŞTURMUYOR

  2. [Ekranlar](src/extractors/screens/)
  - ✅ Ekran meta verilerini çıkar: Cihaz türü, yönelim, boyutlar
  - ✅ Bölümleri tanımla: Başlık, alt bilgi, navigasyon, içerik alanları
  - ✅ Navigasyonu analiz et: Tab çubukları, uygulama çubukları, çekmeceler, navigasyon öğeleri
  - ✅ Scaffold rehberliği sağla: Flutter ekran yapısını öner
  - ❌ Gerçek Flutter ekranı OLUŞTURMUYOR

  Sadece AI'ın Flutter kodu yazmasına yardımcı olduğundan, bu da daha iyi bir prompt'unuz olursa daha iyi sonuçlar alacağınız anlamına gelir.

  ## 🛠️ Kullanım
  Aşağıdaki adımlar minimal kullanım ve kurulum talimatlarını gösterir:

  ### 🔑 Figma API Anahtarı
  Bu sunucuyu kullanmak için bir Figma erişim jetonu oluşturmanız gerekecektir. Figma API erişim jetonu oluşturma yönergeleri [burada](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens) bulunabilir.

  ### 🏹 Cursor'da MCP
  FIGMA API KEY'e sahip olduğunuzda, MCP'yi cursor'da aşağıdaki gibi ayarlayabilirsiniz:
  1. CMD + Shift + P tuşlarına basın (Windows'ta Ctrl)
  2. "Open MCP Settings" yazın
  3. "Add new MCP" seçeneğine tıklayın
  4. Aşağıdaki json nesnesi yapıştırın

  #### MacOS/Linux
  ```
  {
    "mcpServers": {
      "Figma Flutter MCP": {
        "command": "npx",
        "args": ["-y", "figma-flutter-mcp", "--figma-api-key=YOUR-API-KEY", "--stdio"]
      }
    }
  }
  ```
  #### Windows
  ```
  {
    "mcpServers": {
      "Figma Flutter MCP": {
        "command": "cmd",
        "args": ["/c", "npx", "-y", "figma-flutter-mcp", "--figma-api-key=YOUR-API-KEY", "--stdio"]
      }
    }
  }
  ```

  > NOT: Bu MCP'yi `npm` paketi olarak yüklediyseniz, en son sürüme güncellemeyi unutmayın. Bazen eski sürümü cache'ler ve "Not being able to use tool call" veya "Figma API key setup is not working" gibi hatalar göstermeye devam eder.


  ### 🚀 Yerel Test için Hızlı Başlangıç

  #### Ön Koşullar
  - Node.js 18+
  - Figma API Anahtarı (Erişim Jetonu)
  - MCP desteği olan Cursor AI IDE
  - Flutter SDK


  Hızlı yerel test için sunucuyu stdio yerine HTTP aracılığıyla çalıştırabilirsiniz:

  ```bash
  # Klonla ve kur
  git clone <your-repo-url> figma-flutter-mcp
  cd figma-flutter-mcp
  npm install

  # Figma API anahtarınız ile .env dosyası oluştur
  echo "FIGMA_API_KEY=your-figma-api-key-here" > .env

  # Yerel test için HTTP sunucusu başlat
  npm run dev
  ```

  Ardından bunu MCP istemci yapılandırmasına ekleyin:

  ```json
  {
    "mcpServers": {
      "local-figma-flutter": {
        "url": "http://localhost:3333/mcp"
      }
    }
  }
  ```

  Detaylı talimatlar için [CONTRIBUTING.md](CONTRIBUTING.md) bakınız.

  ## 🧱 Temel İş Akışı
  ### 🤖 AI Kodlama Ajanı Yardımı
  Daha iyi sonuçlar için, AI Kodlama Ajanınıza göre aşağıdaki dosyalarda talimatlar ayarlayabilirsiniz:
  - Cursor: `.cursor/rules/fluttering.mdc`
  - Claude: `CLAUDE.md`
  - Gemini CLI: `GEMINI.md`

  Bu şekilde AI ajanınız MCP'nin çıktısını kullanacak ve Flutter kodunun proje gereksinimleriniz ve yapınıza uygun olmasını sağlayacaktır. Test etmek için kullandığım [cursor kurallarının](docs/cursor_rules_example.md) bir örneğini kontrol edebilirsiniz.

  1. **Tema ve Tipografi Kurun**: En etkili yol, Figma'da Tema renkleri ve Tipografi örnekleri içeren iki frame yerleştirmektir. Örneğin:

  ![Tema Kurulum Örneği](https://raw.githubusercontent.com/mhmzdev/figma-flutter-mcp/HEAD/docs/images/theme-frame.png)
  ![Tipografi Kurulum Örneği](https://raw.githubusercontent.com/mhmzdev/figma-flutter-mcp/HEAD/docs/images/text-style-frame.png)

  - Figma Desktop: Frame'i seçin ve CMD + L veya Ctrl + L tuşlarına basın
  - Figma Web: Frame'i seçin ve URL'yi kopyalayın

  > 💡 İPUCU: Geçerli URL, FILE ID ve NODE ID parametreleri içerecektir

  ```
  "Setup flutter theme from <figma_link> including Colors and Typography.
  ```

  2. **Widget Üretimi**: En etkili yol, Figma'da COMPONENTS kullanmaktır. Örneğin:

  ![Düğme](https://raw.githubusercontent.com/mhmzdev/figma-flutter-mcp/HEAD/docs/images/button.png)

  Bu, etkin ve devre dışı durumlar ile 2 varyanta sahiptir.
  ```
  "Create this widget in flutter from figma COMPONENT link: <figma_link>, use named constructors for variants and break the files in smaller parts for code readability."
  ```
  Figma'da COMPONENTS'e **sahip değilseniz**, bunun yerine FRAME kullanabilirsiniz ve sadece AI'ya bunun bir widget olmasını istediğinizi söyleyin, o da geri kalanını halleder.

  3. **Tam Ekran Oluşturma**: Herhangi bir IMAGE ASSETS (.png, .jpeg, .jpg vb.) mevcutsa, bunları dışa aktarılacak ve `assets/` ile birlikte `pubspec.yaml`'a koyacaktır.



  ```
  "Design this intro screen from the figma link <figma_link>, ensure the code is readable by having smaller files."
  ```
  4. **Varlıkları Dışa Aktar**:
  - Resim Varlıkları: Ekran oluştururken otomatik olarak çalışacaktır
  ```
  "Export this image asset from figma link: <figma_link>
  ```
  - SVG Varlıkları: Karışık veya gruplanmamışsa otomatik olarak çalışmayacaktır, aşağıda açıklanmıştır.
  ```
  "Export this as an SVG asset from Figma link: <figma_link>"
  ```
  #### ⚠️ SVG varlıkları ekran üretimi ile çalışmazsa
  * Figma'da vektörler simgeler ve kalem aracı şekillerini içerir, bu nedenle toplu dışa aktarmalar istenmeyen düğümleri yakalayabilir;
    *  SVG'leri **ayrı ayrı** dışa aktarmanız önerilir, yani bunları bağımsız bir FRAME veya GROUP dışına çıkarın
    *  SVG'lerin ayrılmasının nasıl göründüğü aşağıda verilmiştir:



  <br>

  * Bunlar dışa aktarırken İYİ vs KÖTÜ bir SVG'yi tanımlamanın bir örneğidir:

  <br>



  ## ⚠️ Feragatnameler

  - **Kullanım Amacı**: Bu aşamada, MVP'ler, daha küçük ve açıklayıcı görevler ile deneme yapmak dışında ölçeklenebilir uygulamalar geliştirmek için kullanılması YAPILMAMASI önerilir.
  - **Figma Tasarım**: Figma'nın API'sini kullanarak düğüm ve detaylarını çıkardığımızdan, tasarımınız ne kadar iyi olursa AI tarafından o kadar iyi yorumlanacaktır, yani otomatik layoutlar, grup kullanımı yerine frame kullanımı, tutarlı şekilde hizalanmış.
  - **Oran sınırlandırması**: Ağır kullanım, Figma oran sınırlarını tetikleyebilir (örneğin, HTTP 429). Sunucu geri çekme ve backoff içerir, ancak Figma sınırlarını geçmez. Oran sınırları ile karşılaşırsanız, birkaç dakika bekleyin ve istek hacmini azaltın.

  ## 🙌🏼 Teşekkürler
  [Graham Lipsman](https://x.com/glipsman) tarafından yapılan [Figma Context MCP](https://github.com/GLips/Figma-Context-MCP) ile karşılaştığım ve bu, bana Figma to Flutter'ı aşağıdaki gibi özelliklerle açıkça geliştirme motivasyonu verdi:
  - Varlıkları dışa aktarma
  - Renkler ve Tema kurulumları
  - Widget ağacı ve tam ekran oluşturma

  Diğerleri yakında...

  ## 🧱 Diğer çerçeveler
  Bunu React, Angular, React Native, Vue veya başka bir çerçeve için geliştirmek istiyorsanız. Keşfedebileceğiniz ve başlayabileceğiniz detaylı bir doküman [Figma Framework MCP](docs/figma-framework-mcp.md) eklemiştim. Bu arada, eğer biri çerçeveye özgü Figma'nın MCP sunucuları için bunu yapıyorsa, burada bir liste tutacağım.
  - ...
  - ...

  ## 🔑 Lisans
  Bu proje MIT Lisansı altında lisanslanmıştır - detaylar için [LICENSE](LICENSE.md) dosyasını görebilirsiniz

  ## 🙋‍♂️ Yazar
  #### Muhammad Hamza
  [![LinkedIn Link](https://img.shields.io/badge/Connect-Hamza-blue.svg?logo=linkedin&longCache=true&style=social&label=Connect
  )](https://www.linkedin.com/in/mhmzdev)

  En son projelerim hakkında güncellemeler almak için GitHub Profilimi de takip edebilirsiniz:

  [![GitHub Follow](https://img.shields.io/badge/Connect-Hamza-blue.svg?logo=Github&longCache=true&style=social&label=Follow)](https://github.com/mhmzdev)

  Repo'yu beğendiyseniz, lütfen ona bir yıldız ⭐ vererek destekleyin!

  Telif Hakkı (c) 2025 MUHAMMAD HAMZA

  ---

  **Tasarım ve kod arasındaki boşluğu kapatmak isteyen tasarımcılar ve geliştiriciler için ❤️ ile yapılmıştır.**
---

<div align="center">
  
  <br>

  <h1>Figma to Flutter MCP Server</h1>
   <p>
    🌐 Available in:
    <a href="README.ko.md">한국어 (Korean)</a> |
    <a href="README.ja.md">日本語 (Japanese)</a> |
    <a href="README.zh-cn.md">简体中文 (Simplified Chinese)</a> |
    <a href="README.zh-tw.md">繁體中文 (Traditional Chinese)</a>
  </p>
  <h3>Utilize Figma's rich data in your coding agent.<br/>Implement designs in Flutter way!</h3>
  <a href="https://npmcharts.com/compare/figma-flutter-mcp?interval=30">
    
  </a>
  <a href="https://github.com/mhmzdev/figma-flutter-mcp/blob/main/LICENSE">
    
  </a>
  <a href="https://twitter.com/mhmzdev">
    
  </a>
</div>
<br>

Use [Cursor](https://cursor.sh) or other AI-powered tools to access Figma's rich files, data, components and much more using [MCP server](https://modelcontextprotocol.io/).

## 📋 Table of Contents

- [🦋 Observable Flutter #70](#-observable-flutter-70)
- [🎥 Short Video Demo](#-short-video-demo)
- [📝 Getting Started](#-getting-started)
- [📚 How it works](#-how-it-works--details-here)
- [🛠️ Usage](#-usage)
  - [🔑 Figma API Key](#-figma-api-key)
  - [🏹 MCP in Cursor](#-mcp-in-cursor)
  - [🚀 Quick Start for Local Testing](#-quick-start-for-local-testing)
- [🧱 Basic Workflow](#-basic-workflow)
  - [🤖 AI Coding Agent Assistance](#-ai-coding-agent-assistance)
  - [⚠️ If SVG assets don’t work with screen generation](#-if-svg-assets-dont-work-with-screen-generation)
- [⚠️ Disclaimers](#-disclaimers)
- [🙌🏼 Acknowledgments](#-acknowledgments)
- [🧱 Other framworks](#-other-framworks)
- [🔑 License](#-license)
- [🙋‍♂️ Author](#-author)
  - [Muhammad Hamza](#muhammad-hamza)

## 🦋 Observable Flutter #70
Featured on Observable Flutter with enhanced explanation and demo:

<a href="https://www.youtube.com/live/d7qrvytOxSA?si=ESY8hPJpQm_OY4Ye">
  
</a>

## 🎥 Short Video Demo
Showcased almost all the features of Figma Flutter MCP with real figma design.
- English: https://youtu.be/lJlfOfpl2sI
- Urdu/Hindi: https://youtu.be/mepPWpIZ61M

## 📝 [Getting Started](docs/getting-started.md)
You may explore the detailed [getting started](docs/getting-started.md) docs or the [demo video](https://youtu.be/lJlfOfpl2sI) as quick-start. As its a First Release hence there's a lot of room for improvements so you can checkout the [issues](https://github.com/mhmzdev/figma-flutter-mcp/issues) to see what else there's to work or to improve.

## 📚 How it works | [Details Here](docs/figma-flutter-mcp.md)
1. [Components/Widgets](src/extractors/components/)
- ✅ Extract Figma node data: Layout, styling, dimensions, colors, text content, etc.
- ✅ Analyze structure: Child elements, nested components, visual importance
- ✅ Provide guidance: Suggest Flutter widgets and implementation patterns
- ❌ NOT generating actual Flutter code files

2. [Screens](src/extractors/screens/)
- ✅ Extract screen metadata: Device type, orientation, dimensions
- ✅ Identify sections: Header, footer, navigation, content areas
- ✅ Analyze navigation: Tab bars, app bars, drawers, navigation elements
- ✅ Provide Scaffold guidance: Suggest Flutter screen structure
- ❌ NOT generating actual Flutter screen

Since its just helping AI write Flutter code so it means the better your prompt will be the better results you'll get.

## 🛠️ Usage
Following steps shows a minimal usage and setup instructions:

### 🔑 Figma API Key
You will need to create a Figma access token to use this server. Instructions on how to create a Figma API access token can be found [here](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens).

### 🏹 MCP in Cursor
Once you've the FIGMA API KEY, you can setup the MCP in cursor as follows:
1. Press CMD + Shift + P (Ctrl on Windows)
2. Type "Open MCP Settings"
3. Click on "Add new MCP"
4. Paste the below json object

#### MacOS/Linux
```
{
  "mcpServers": {
    "Figma Flutter MCP": {
      "command": "npx",
      "args": ["-y", "figma-flutter-mcp", "--figma-api-key=YOUR-API-KEY", "--stdio"]
    }
  }
}
```
#### Windows
```
{
  "mcpServers": {
    "Figma Flutter MCP": {
      "command": "cmd",
      "args": ["/c", "npx", "-y", "figma-flutter-mcp", "--figma-api-key=YOUR-API-KEY", "--stdio"]
    }
  }
}
```

> NOTE: If you've installed this MCP as `npm` package make sure to keep it updated to latest version. Sometimes, it caches the old version and keep showing you error like "Not being able to use tool call" or "Figma API key setup is not working" etc.


### 🚀 Quick Start for Local Testing

#### Prerequisites
- Node.js 18+
- Figma API Key (Access Token)
- Cursor AI IDE with MCP support
- Flutter SDK


For quick local testing, you can run the server via HTTP instead of stdio:

```bash
# Clone and setup
git clone <your-repo-url> figma-flutter-mcp
cd figma-flutter-mcp
npm install

# Create .env file with your Figma API key
echo "FIGMA_API_KEY=your-figma-api-key-here" > .env

# Start HTTP server for local testing
npm run dev
```

Then add this to your MCP client configuration:

```json
{
  "mcpServers": {
    "local-figma-flutter": {
      "url": "http://localhost:3333/mcp"
    }
  }
}
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed instructions.

## 🧱 Basic Workflow
### 🤖 AI Coding Agent Assistance
For better results you can setup some instructions in following files as per your AI Coding Agent:
- Cursor: `.cursor/rules/fluttering.mdc`
- Claude: `CLAUDE.md`
- Gemini CLI: `GEMINI.md`

This way your AI agent will use the MCP's output and ensure the flutter code is as per your project requirements and structure. You can checkout an example of [cursor rules](docs/cursor_rules_example.md) that I used for testing this out.

1. **Setup Theme & Typography**: The most efficient way, put two frames in Figma with Theme colors and Typography samples on it. For instance:

![Theme Setup Example](https://raw.githubusercontent.com/mhmzdev/figma-flutter-mcp/HEAD/docs/images/theme-frame.png)
![Typography Setup Example](https://raw.githubusercontent.com/mhmzdev/figma-flutter-mcp/HEAD/docs/images/text-style-frame.png)

- Figma Desktop: Select the frame and press CMD + L or Ctrl + L
- Figma Web: Select the frame and copy the URL

> 💡 HINT: The valid URL will contain a FILE ID and NODE ID params

```
"Setup flutter theme from <figma_link> including Colors and Typography.
```

2. **Widget Generation**: The most efficient way, use COMPONENTS in figma. For example:

![Button](https://raw.githubusercontent.com/mhmzdev/figma-flutter-mcp/HEAD/docs/images/button.png)

This one has 2 variants with enabled and disabled states.
```
"Create this widget in flutter from figma COMPONENT link: <figma_link>, use named constructors for variants and break the files in smaller parts for code readability."
```
If you **do not** have COMPONENTS in figma, you can use FRAME just prompt the AI that you want this to be a widget and it will handle the rest.

3. **Full Screen Generation**: If there are any IMAGE ASSETS (.png, .jpeg, .jpg etc.) available, it will export them and put them in `assets/` along with `pubspec.yaml`



```
"Design this intro screen from the figma link <figma_link>, ensure the code is readable by having smaller files."
```
4. **Assets Export**:
- Image Assets: Will work automatically when generating screens
```
"Export this image asset from figma link: <figma_link>
```
- SVG Assets: Will NOT work automatically if they are scrambled or are ungrouped, explained below.
```
"Export this as an SVG asset from Figma link: <figma_link>"
```
#### ⚠️ If SVG assets don’t work with screen generation
* In Figma vectors include icons and pen-tool shapes, so bulk exports may grab unintended nodes;
  *  Recommend exporting SVGs **separately** i.e. to take them out an an independent FRAME or GROUP
  *  Here's how the separation of SVGs looks like:



<br>

* Here's an example of identifying a GOOD vs BAD svg while exporting them:

<br>



## ⚠️ Disclaimers

- **Use Case**: At this stage, its highly recommend to NOT use it to develop scalable apps rather try and play it with MVPs, smaller and explanatory tasks.
- **Figma Design**: Since we're using Figma's API to fetch the node and its details, so the better design you have the more better it will interpret for the AI to consume i.e. auto layouts, frame usage over group usage, consistently aligned across the board.
- **Rate limiting**: Heavy usage may trigger Figma rate limits (e.g., HTTP 429). The server includes retry with backoff, but it does not bypass Figma limits. If you encounter rate limits, wait a few minutes and reduce the request volume.

## 🙌🏼 Acknowledgments
I came across [Figma Context MCP](https://github.com/GLips/Figma-Context-MCP) by [Graham Lipsman](https://x.com/glipsman) that sparks this motivation for me to develop Figma to Flutter explicitly having features like:
- Assets exports
- Colors and Theme setups
- Widget tree and full screen building

Others coming soon...

## 🧱 Other framworks
If you want to develop this for React, Angular, React Native, Vue or any other framework. I've added a detailed doc [Figma Framework MCP](docs/figma-framework-mcp.md) that you can explore and get started. Meanwhile I'll maintain a list here if someone's already doing this for framework specific Figma's MCP servers.
- ...
- ...

## 🔑 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details

## 🙋‍♂️ Author
#### Muhammad Hamza
[![LinkedIn Link](https://img.shields.io/badge/Connect-Hamza-blue.svg?logo=linkedin&longCache=true&style=social&label=Connect
)](https://www.linkedin.com/in/mhmzdev)

You can also follow my GitHub Profile to stay updated about my latest projects:

[![GitHub Follow](https://img.shields.io/badge/Connect-Hamza-blue.svg?logo=Github&longCache=true&style=social&label=Follow)](https://github.com/mhmzdev)

If you liked the repo then kindly support it by giving it a star ⭐!

Copyright (c) 2025 MUHAMMAD HAMZA

---

**Built with ❤️ for designers and developers who want to bridge the gap between design and code.**
