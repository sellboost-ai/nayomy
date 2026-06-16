---
name: "idosal/git-mcp"
description: "gitmcp.io is a generic remote MCP server to connect to ANY GitHub repository or project for documentation"
category: "Developer Tools"
repo: "idosal/git-mcp"
stars: 8100
url: "https://github.com/idosal/git-mcp"
body_length: 15830
license: "Apache-2.0"
language: "TypeScript"
homepage: "https://gitmcp.io"
body_tr: |-
  # GitMCP

  <p align="center">
    
  </p>

  <p align="center">
    <a href="#-what-is-gitmcp">GitMCP Nedir</a> •
    <a href="#-features">Özellikler</a> •
    <a href="#-getting-started">Başlangıç</a> •
    <a href="#-how-it-works">Nasıl Çalışır</a> •
    <a href="#-badge">Badge</a> •
    <a href="#-examples">Örnekler</a> •
    <a href="#-faq">SSS</a> •
    <a href="#-privacy">Gizlilik</a> •
    <a href="#-contributing">Katkıda Bulunma</a> •
    <a href="#-license">Lisans</a>
  </p>
  <div align="center">

  [![GitMCP](https://img.shields.io/endpoint?url=https://gitmcp.io/badge/idosal/git-mcp)](https://gitmcp.io/idosal/git-mcp)
  [![Twitter Follow](https://img.shields.io/twitter/follow/idosal1?style=social)](https://twitter.com/idosal1)
  [![Twitter Follow](https://img.shields.io/twitter/follow/liadyosef?style=social)](https://twitter.com/liadyosef)
  </div>

  <div align="center">
    <a href="https://www.pulsemcp.com/servers/idosal-git-mcp"></a>
  </div>

  ## 🤔 GitMCP Nedir?
  **Varsayımsal kodlamayı bırakın, gerçek kodlamaya başlayın!**

  [GitMCP](https://gitmcp.io), **herhangi bir** GitHub projesini (repositories veya GitHub pages) bir dokümantasyon merkezine dönüştüren ücretsiz, açık kaynaklı, uzak bir [Model Context Protocol (MCP)](https://docs.anthropic.com/en/docs/agents-and-tools/mcp) sunucusudur. Cursor gibi AI araçlarının güncel dokümantasyona ve koda erişmesini sağlar; LLM bunlarla daha önce karşılaşmış olsa da olmasa da. Bu sayede kod hallüsinasyonlarını sorunsuzca ortadan kaldırır.

  GitMCP **iki çeşit** destekler -

  *   **Belirli Repository (`gitmcp.io/{owner}/{repo}` veya `{owner}.gitmcp.io/{repo}`):** Birkaç kütüphaneyle çalıştığınızda bunları kullanın. Bu, AI asistanınızın her zaman doğru projeyi hedef almasını sağlar, güvenliği ve ilgiliği artırır ve istenmeyen repositorylere erişimi önler.
  *   **Genel Sunucu (`gitmcp.io/docs`):** Farklı repositoryler arasında sık sık geçiş yapmanız gerektiğinde maksimum esneklik için bunu kullanın. AI asistanı, her istek için erişilecek repository'yi sizden sorabilir (veya bağlama göre karar verebilir). Bunun her seferinde hedef repository'yi doğru bir şekilde tanımlamaya dayandığını unutmayın.

  **GitMCP ile:**

  *   AI asistanları en son dokümantasyona ve koda doğrudan kaynaktan erişir.
  *   Doğru API kullanımı ve güvenilir kod örnekleri alırsınız.
  *   Niş, yeni veya hızla değişen kütüphanelerle etkili bir şekilde çalışırsınız.
  *   Hallüsinasyonlar önemli ölçüde azalır ve kod doğruluğu iyileşir.

  Örneğin, bu yan yana karşılaştırma, Cursor'da [three.js](https://github.com/mrdoob/three.js) sahnesi oluştururken aynı tek yönerge için sonucu gösterir -

  https://github.com/user-attachments/assets/fbf1b4a7-f9f0-4c0e-831c-4d64faae2c45

  ## ✨ Özellikler

  - 😎 **HERHANGİ GitHub Projesi için Son Dokümantasyon**: AI asistanınıza GitHub projesinin dokümantasyonuna ve koduna sorunsuz erişim izni verin. Yerleşik akıllı arama özellikleri, çok sayıda token kullanmadan AI'nin ihtiyaç duyduğu tam şeyi bulmanıza yardımcı olur!
  - 🧠 **Artık Hallüsinasyon Yok**: GitMCP ile AI asistanınız sorularınıza doğru ve ilgili cevaplar verebilir.
  - ☁️ **Sıfır Kurulum**: GitMCP bulutta çalışır. Seçilen GitMCP URL'sini IDE'nizdeki bir MCP sunucusu olarak ekleyin — indirme, kurulum, kayıt veya değişiklik gerekmez.
  - 💬 **Gömülü Sohbet**: Repository'nin dokümantasyonuyla doğrudan tarayıcıdaki sohbetimiz aracılığıyla hızlıca başlayın!
  - ✅ **Açık, Ücretsiz ve Özel**: GitMCP açık kaynaklıdır ve tamamen ücretsiz kullanılabilir. Kişisel bilgileri toplamaz veya sorguları saklamaz. Kendi başınıza barındırabilirsiniz!

  <video src="https://github.com/user-attachments/assets/2c3afaf9-6c08-436e-9efd-db8710554430"></video>

  ## 🚀 Başlangıç

  GitMCP'yi kullanmak kolaydır! Sadece şu adımları izleyin:

  ### Adım 1: İstediğiniz sunucu türünü seçin

  Neye bağlanmak istediğinize bağlı olarak bu URL formatlarından birini seçin:

  - GitHub repositories için: `gitmcp.io/{owner}/{repo}`
  - GitHub Pages siteleri için: `{owner}.gitmcp.io/{repo}`
  - Herhangi bir repository'yi destekleyen genel bir araç için (dinamik): `gitmcp.io/docs`

  `{owner}` yerine GitHub kullanıcı adı veya organizasyon adını, `{repo}` yerine repository adını yazın.

  Kolaylık olması açısından, GitHub URL'sini bir MCP URL'sine biçimlendirmek için landing page'deki dönüşüm aracını da kullanabilirsiniz!

  ### Adım 2: AI asistanınızı bağlayın

  Aşağıdaki seçeneklerden AI asistanınızı seçin ve yapılandırma talimatlarını izleyin:

  #### Cursor'u Bağlama

  Cursor yapılandırma dosyanızı `~/.cursor/mcp.json` adresinde güncelleyin:
     ```json
     {
       "mcpServers": {
         "gitmcp": {
           "url": "https://gitmcp.io/{owner}/{repo}"
         }
       }
     }
     ```

  #### Claude Desktop'u Bağlama

  1. Claude Desktop'ta Settings > Developer > Edit Config'e gidin
  2. Yapılandırmayı şu şekilde değiştirin:
     ```json
     {
       "mcpServers": {
         "gitmcp": {
           "command": "npx",
           "args": [
             "mcp-remote",
             "https://gitmcp.io/{owner}/{repo}"
           ]
         }
       }
     }
     ```

  #### Windsurf'u Bağlama

  Windsurf yapılandırma dosyanızı `~/.codeium/windsurf/mcp_config.json` adresinde güncelleyin:
     ```json
     {
       "mcpServers": {
         "gitmcp": {
           "serverUrl": "https://gitmcp.io/{owner}/{repo}"
         }
       }
     }
     ```

  #### VSCode'u Bağlama

  VSCode yapılandırma dosyanızı `.vscode/mcp.json` adresinde güncelleyin:
     ```json
     {
       "servers": {
         "gitmcp": {
           "type": "sse",
           "url": "https://gitmcp.io/{owner}/{repo}"
         }
       }
     }
     ```

  #### Cline'ı Bağlama

  Cline yapılandırma dosyanızı `~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json` adresinde güncelleyin:
     ```json
     {
       "mcpServers": {
         "gitmcp": {
           "url": "https://gitmcp.io/{owner}/{repo}",
           "disabled": false,
           "autoApprove": []
         }
       }
     }
     ```

  #### Highlight AI'ı Bağlama

  1. Highlight AI'ı açın ve kenar çubuğundaki plugins simgesine (@ sembolü) tıklayın
  2. Kenar çubuğunun en üstünde **Installed Plugins**'e tıklayın
  3. **Custom Plugin**'i seçin
  4. **Add a plugin using a custom SSE URL**'ye tıklayın

  Plugin adı: `gitmcp`
  SSE URL: `https://gitmcp.io/{owner}/{repo}`

  HighlightAI'ına özel MCP sunucuları ekleme hakkında daha fazla ayrıntı için [dokümantasyona](https://docs.highlightai.com/plugins/custom) bakın.

  #### Augment Code'u Bağlama

  1. Augment Code ayarlarını açın
  2. MCP bölümüne gidin
  3. Aşağıdaki ayrıntılarla yeni bir MCP sunucusu ekleyin:

  MCP sunucusunu adlandırın: `git-mcp Docs`

  Bu komutu kullanın:
  ```bash
  npx mcp-remote https://gitmcp.io/{owner}/{repo}
  ```

  Veya aşağıdaki yapılandırmayı kullanın:
  ```json
  {
    "mcpServers": {
      "git-mcp Docs": {
        "command": "npx",
        "args": [
          "mcp-remote",
          "https://gitmcp.io/{owner}/{repo}"
        ]
      }
    }
  }
  ```

  #### Msty AI'ı Bağlama
  1. Msty Studio'yu açın
  2. Tools > Import Tools from JSON Clipboard'a gidin
  3. Aşağıdaki yapılandırmayı yapıştırın:

  ```json
  {
    "mcpServers": {
      "git-mcp Docs": {
        "command": "npx",
        "args": [
          "mcp-remote",
          "https://gitmcp.io/{owner}/{repo}"
        ]
      }
    }
  }
  ```

  Augment Code'da MCP sunucularını yapılandırma hakkında daha fazla ayrıntı için [Augment Code dokümantasyonunu](https://docs.augmentcode.com/setup-augment/mcp) ziyaret edin.

  > **Not:** `{owner}` ve `{repo}` yerine gerçek GitHub kullanıcı adı/organizasyonu ve repository adını yazın. Ayrıca AI'ınızın her istekte gerekli olduğunda herhangi bir repository'ye erişmesine izin vermek için dinamik endpoint `https://gitmcp.io/docs`'ı kullanabilirsiniz.

  ## ⚙ Nasıl Çalışır

  GitMCP, AI asistanınızı Model Context Protocol (MCP) kullanarak GitHub repositories'e bağlar; MCP, AI araçlarının harici kaynaklardan ek bilgi talep etmesini sağlayan bir standarttır.

  GitMCP'yi kullandığınızda neler olur:

  1. **GitMCP URL'sini AI asistanınıza sağlarsınız** (ör. `gitmcp.io/microsoft/typescript`). GitMCP dokümantasyon getirme, akıllı arama, kod arama vb. gibi araçları ortaya çıkarır.
  2. **AI asistanını** dokümantasyon/kod ile ilgili sorularla yönlendirir.
  3. **AI asistanınız istekleri** GitMCP'ye gönderir (onayınızla).
  4. **GitMCP isteği yürütür** ve istenen verileri döndürür.
  5. **AI asistanınız bilgiyi alır** ve hallüsinasyon olmadan daha doğru ve temelli bir cevap üretir.

  ### Desteklenen Dokümantasyon

  GitMCP şu anda aşağıdaki belgeleri destekler (öncelik sırasına göre):
  1. [llms.txt](https://llmstxt.org)
  2. Projenin dokümantasyonunun AI-optimized versiyonu
  3. `README.md`/root

  ## 💡 Örnekler

  Farklı AI asistanları ve repositories'ler ile GitMCP'nin nasıl kullanılacağına dair örnekler:

  ### Örnek 1: Windsurf'u belirli bir repository ile kullanma

  GitHub repository'si `https://github.com/microsoft/playwright-mcp` için, `https://gitmcp.io/microsoft/playwright-mcp`'yi Windsurf'a MCP sunucusu olarak ekleyin.

  **Claude'a Sorgu:**
  > "How do I use the Playwright MCP"

  Windsurf, GitMCP'den bellek özelliğini doğru bir şekilde uygulamak için ilgili dokümantasyonu çeker.

  ### Örnek 2: Cursor'u GitHub Pages sitesiyle kullanma

  GitHub Pages sitesi `langchain-ai.github.io/langgraph` için, `https://langchain-ai.gitmcp.io/langgraph`'ı Cursor'a MCP sunucusu olarak ekleyin.

  **Cursor'a Sorgu:**
  > "Add memory to my LangGraph agent"

  Cursor, GitMCP'den ilgili dokümantasyon ve kodu çeker ve bellek özelliğini doğru bir şekilde uygular.

  ### Örnek 3: Claude Desktop'u dinamik endpoint ile kullanma

  Belirli repositories'leri seçmek zorunda değilsiniz. Genel `gitmcp.io/docs` endpoint'i AI'ın GitHub projesini anında seçmesine izin verir!

  **Herhangi bir AI asistana Sorgu:**
  > "I want to learn about the OpenAI Whisper speech recognition model. Explain how it works."

  Claude, GitMCP'den verileri çeker ve soruyu cevaplar.

  ## 🛠️ Araçlar

  GitMCP, AI asistanlarına GitHub repositories'lerine erişmesine, anlamasına ve sorgu yapmasına yardımcı olmak için çeşitli değerli araçlar sağlar.

  ### `fetch_<repo-name>_documentation`

  Bu araç bir GitHub repository'sinden birincil dokümantasyonu getirir. `llms.txt` gibi ilgili dokümantasyonu alarak çalışır. Bu, AI'ya projenin ne hakkında olduğunun iyi bir genel bakışını verir.

  **Ne zaman kullanışlı:** Bir projenin amacı, özellikleri veya nasıl başlanacağına ilişkin genel sorular için

  ### `search_<repo-name>_documentation`

  Bu araç, AI'ın belirli bir arama sorgusu sağlayarak repository'nin dokümantasyonunu arama yapmasını sağlar. Tüm dokümantasyonu yüklemek (çok büyük olabilir) yerine akıllı arama kullanarak sadece ilgili kısımları bulur.

  **Ne zaman kullanışlı:** Bir proje içindeki belirli özellikler, işlevler veya kavramlar hakkında spesifik sorular için

  ### `fetch_url_content`

  Bu araç AI'ın dokümantasyonda belirtilen bağlantılardan bilgi almasına yardımcı olur. Bu bağlantılardan içeriği alır ve AI'ın kolayca okuyabileceği bir formata dönüştürür.

  **Ne zaman kullanışlı:** Dokümantasyon sorunuzu cevaplamanıza yardımcı olacak harici bilgileri referans gösteriyor

  ### `search_<repo-name>_code`

  Bu araç, GitHub'ın kod arama özelliğini kullanarak repository'deki gerçek kodu arar. AI'ın belirli kod örnekleri veya uygulama ayrıntılarını bulmasına yardımcı olur.

  **Ne zaman kullanışlı:** Bir şeyin nasıl uygulandığına dair örnekler istediğinizde veya dokümantasyonda kapsanmayan teknik ayrıntılara ihtiyaç duyduğunuzda

  > **Not:** Dinamik endpoint (`gitmcp.io/docs`) kullanırken, bu araçlar biraz farklı şekilde adlandırılır (`fetch_generic_documentation`, `search_generic_code` ve `search_generic_documentation`) ve hangi repository'ye erişileceğine dair ek bilgi gerektirir.

  ## 📊 Badge

  GitMCP, repository'nizin README'si için bir badge'i vardır. Kullanıcıların dokümantasyonunuza IDE veya tarayıcı aracılığıyla (gömülü sohbet kullanarak) hızlıca erişmesine izin verir. Ayrıca dokümantasyonunuzun GitMCP aracılığıyla kaç kez erişildiğini gösterir.

  Örnek (`idosal/git-mcp`): [![GitMCP](https://img.shields.io/endpoint?url=https://gitmcp.io/badge/idosal/git-mcp)](https://gitmcp.io/idosal/git-mcp)

  ### Badge'i Repository'nize Ekleme

  `README.md` dosyanıza aşağıdakini ekleyin:

  ```markdown
  [![GitMCP](https://img.shields.io/endpoint?url=https://gitmcp.io/badge/OWNER/REPO)](https://gitmcp.io/OWNER/REPO)
  ```

  `OWNER` yerine GitHub kullanıcı adınız veya organizasyonunuzu, `REPO` yerine repository adınızı yazın.

  ### Görüntülemeleri Nasıl Sayıyoruz

  Belirli repository üzerindeki her araç çağrısı için artırırız.

  ### Badge'i Özelleştirme

  Badge'in görünümünü parametrelerle özelleştirebilirsiniz:

  | Parametre | Açıklama | Varsayılan | Örnek |
  |-----------|---------|---------|---------|
  | `color` | Badge değeri için renk | `aquamarine` | `?color=green` |
  | `label` | Badge etiketi | `GitMCP` | `Documentation`

  Yardıma ihtiyacınız olursa lütfen bize ulaşın!

  ## ❓ SSS

  ### Model Context Protocol Nedir?

  [Model Context Protocol](https://modelcontextprotocol.io/introduction), AI asistanlarının harici kaynaklardan yapılandırılmış bir şekilde ek bağlam talep etmesine ve almasına izin veren, böylece anlayışlarını ve performanslarını geliştiren bir standarttır.

  ### GitMCP herhangi bir AI asistanı ile çalışır mı?

  Evet, GitMCP, Model Context Protocol'ü destekleyen herhangi bir AI asistanı ile uyumludur; Cursor, VSCode, Claude vb. araçları içerir.

  ### GitMCP tüm GitHub projeleriyle uyumlu mu?

  Kesinlikle! GitMCP, herhangi bir değişiklik gerektirmeksizin herhangi bir genel GitHub repository'siyle çalışır. `llms.txt` dosyasını öncelik verir ve eğer kullanılamıyorsa `README.md` veya diğer sayfalara geri döner. Gelecek güncellemeler ek dokümantasyon yöntemlerini ve hatta dinamik olarak içerik üretmeyi desteklemeyi amaçlamaktadır.

  ### GitMCP'nin maliyeti var mı?

  Hayır, GitMCP topluluğun hizmet vermek için ücretsizdir ve ilişkili bir maliyet yoktur.

  ## 🔒 Gizlilik

  GitMCP, kullanıcılarının gizliliğine derin bir şekilde bağlıdır. Hizmet kimlik doğrulama gerektirmediği için kişisel olarak tanımlanabilir bilgilere erişim olmaz veya bunları depolar. Buna ek olarak, aracılar tarafından gönderilen sorgularını saklamaz. Ayrıca, GitMCP açık kaynaklı bir proje olduğu için bağımsız olarak ortamınızda dağıtılabilir.

  GitMCP sadece halihazırda kamuya açık olan içeriğe ve yalnızca kullanıcı tarafından sorgulandığında erişir. GitMCP repository'leri otomatik olarak taramaz. Herhangi bir GitHub Pages sitesine erişmeden önce, kod `robots.txt` kurallarını kontrol eder ve site sahipleri tarafından belirlenen yönergeleri izler; bu da onların geri çekilmesine izin verir. GitMCP'nin GitHub projeleri veya içerikleri hakkında verileri kalıcı olarak saklamadığını lütfen unutmayın.

  ## 👥 Katkıda Bulunma

  Katkıları, geri bildirimleri ve fikirleri memnuniyetle karşılarız! Lütfen [katkı](https://github.com/idosal/git-mcp/blob/main/.github/CONTRIBUTING.md) yönergelerimizi gözden geçirin.

  ### Yerel Geliştirme Kurulumu

  1. **Repository'yi klonlayın**
     ```bash
     git clone https://github.com/idosal/git-mcp.git
     cd git-mcp
     ```

  2. **Bağımlılıkları yükleyin**
     ```bash
     pnpm install
     ```

  3. **Geliştirme için yerel olarak çalıştırın**
     ```bash
     npm run dev
     # veya
     pnpm dev
     ```

  #### Test için MCP Inspector'ü Kullanma

  1. MCP Inspector aracını yükleyin:
     ```bash
     npx @modelcontextprotocol/inspector
     ```

  2. İnspektör arayüzünde:
     - Transport Type'ı `SSE` olarak ayarlayın
     - GitMCP URL'nizi girin (ör. `http://localhost:5173/docs`)
     - "Connect"'e tıklayın

  ## 📄 Lisans

  Bu proje [Apache License 2.0](LICENSE) altında lisanslanmıştır.

  ## Sorumluluk Reddi

  GitMCP herhangi bir garanti olmaksızın "olduğu gibi" sağlanır. Hizmetimizin güvenilirliğini ve güvenliğini sağlamak için çalışırken, kullanımından kaynaklanabilecek herhangi bir hasar veya sorundan sorumlu değiliz. GitMCP aracılığıyla erişilen GitHub projeleri ilgili sahiplerinin şartlarına ve koşullarına tabidir. GitMCP, GitHub veya bahsedilen AI araçlarından hiçbiriyle bağlantılı değildir.


  ## Yıldız Geçmişi

  [![Star History Chart](https://api.star-history.com/svg?repos=idosal/git-mcp&type=Timeline)](https://www.star-history.com/#idosal/git-mcp&Timeline)
---

# GitMCP

<p align="center">
  
</p>

<p align="center">
  <a href="#-what-is-gitmcp">What is GitMCP</a> •
  <a href="#-features">Features</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-how-it-works">How It Works</a> •
  <a href="#-badge">Badge</a> •
  <a href="#-examples">Examples</a> •
  <a href="#-faq">FAQ</a> •
  <a href="#-privacy">Privacy</a> •
  <a href="#-contributing">Contributing</a> •
  <a href="#-license">License</a>
</p>
<div align="center">

[![GitMCP](https://img.shields.io/endpoint?url=https://gitmcp.io/badge/idosal/git-mcp)](https://gitmcp.io/idosal/git-mcp)
[![Twitter Follow](https://img.shields.io/twitter/follow/idosal1?style=social)](https://twitter.com/idosal1)
[![Twitter Follow](https://img.shields.io/twitter/follow/liadyosef?style=social)](https://twitter.com/liadyosef)
</div>

<div align="center">
  <a href="https://www.pulsemcp.com/servers/idosal-git-mcp"></a>
</div>

## 🤔 What is GitMCP?
**Stop vibe-hallucinating and start vibe-coding!**

[GitMCP](https://gitmcp.io) is a free, open-source, remote [Model Context Protocol (MCP)](https://docs.anthropic.com/en/docs/agents-and-tools/mcp) server that transforms **any** GitHub project (repositories or GitHub pages) into a documentation hub. It enables AI tools like Cursor to access up-to-date documentation and code, even if the LLM has never encountered them, thereby eliminating code hallucinations seamlessly.

GitMCP supports **two flavors** -

*   **Specific Repository (`gitmcp.io/{owner}/{repo}` or `{owner}.gitmcp.io/{repo}`):** Use these when you primarily work with a select number of libraries. This ensures your AI assistant always targets the correct project, enhancing security and relevance by preventing access to unintended repositories.
*   **Generic Server (`gitmcp.io/docs`):** Use this for maximum flexibility when you need to switch between different repositories frequently. The AI assistant will prompt you (or decide based on context) which repository to access for each request. Be mindful that this relies on correctly identifying the target repository each time.

**With GitMCP:**

*   AI assistants access the *latest* documentation and code directly from the source.
*   Get accurate API usage and reliable code examples.
*   Work effectively even with niche, new, or rapidly changing libraries.
*   Significantly reduced hallucinations and improved code correctness.

For example, this side-by-side comparison shows the result for the same one-shot prompt in Cursor when creating a [three.js](https://github.com/mrdoob/three.js) scene -

https://github.com/user-attachments/assets/fbf1b4a7-f9f0-4c0e-831c-4d64faae2c45

## ✨ Features

- 😎 **Latest Documentation on ANY GitHub Project**: Grant your AI assistant seamless access to the GitHub project's documentation and code. The built-in smart search capabilities help find exactly what the AI needs without using too many tokens!
- 🧠 **No More Hallucinations**: With GitMCP, your AI assistant can provide accurate and relevant answers to your questions.
- ☁️ **Zero Setup**: GitMCP runs in the cloud. Simply add the chosen GitMCP URL as an MCP server in your IDE — no downloads, installations, signups, or changes are required.
- 💬 **Embedded Chat**: Start quickly by chatting directly with the repository's documentation through our in-browser chat!
- ✅ **Open, Free, and Private**: GitMCP is open-source and completely free to use. It doesn't collect personal information or store queries. You can even self-host it!

<video src="https://github.com/user-attachments/assets/2c3afaf9-6c08-436e-9efd-db8710554430"></video>

## 🚀 Getting Started

Using GitMCP is easy! Simply follow these steps:

### Step 1: Choose the type of server you want

Choose one of these URL formats depending on what you want to connect to:

- For GitHub repositories: `gitmcp.io/{owner}/{repo}`
- For GitHub Pages sites: `{owner}.gitmcp.io/{repo}`
- For a generic tool that supports any repository (dynamic): `gitmcp.io/docs`

Replace `{owner}` with the GitHub username or organization name, and `{repo}` with the repository name.

For your convenience, you can also use the conversion tool on the landing page to format the GitHub URL into an MCP URL!

### Step 2: Connect your AI assistant

Select your AI assistant from the options below and follow the configuration instructions:

#### Connecting Cursor

Update your Cursor configuration file at `~/.cursor/mcp.json`:
   ```json
   {
     "mcpServers": {
       "gitmcp": {
         "url": "https://gitmcp.io/{owner}/{repo}"
       }
     }
   }
   ```

#### Connecting Claude Desktop

1. In Claude Desktop, go to Settings > Developer > Edit Config
2. Replace the configuration with:
   ```json
   {
     "mcpServers": {
       "gitmcp": {
         "command": "npx",
         "args": [
           "mcp-remote",
           "https://gitmcp.io/{owner}/{repo}"
         ]
       }
     }
   }
   ```

#### Connecting Windsurf

Update your Windsurf configuration file at `~/.codeium/windsurf/mcp_config.json`:
   ```json
   {
     "mcpServers": {
       "gitmcp": {
         "serverUrl": "https://gitmcp.io/{owner}/{repo}"
       }
     }
   }
   ```

#### Connecting VSCode

Update your VSCode configuration file at `.vscode/mcp.json`:
   ```json
   {
     "servers": {
       "gitmcp": {
         "type": "sse",
         "url": "https://gitmcp.io/{owner}/{repo}"
       }
     }
   }
   ```

#### Connecting Cline

Update your Cline configuration file at `~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`:
   ```json
   {
     "mcpServers": {
       "gitmcp": {
         "url": "https://gitmcp.io/{owner}/{repo}",
         "disabled": false,
         "autoApprove": []
       }
     }
   }
   ```

#### Connecting Highlight AI

1. Open Highlight AI and click the plugins icon (@ symbol) in the sidebar
2. Click **Installed Plugins** at the top of the sidebar
3. Select **Custom Plugin**
4. Click **Add a plugin using a custom SSE URL**

Plugin name: `gitmcp`
SSE URL: `https://gitmcp.io/{owner}/{repo}`

For more details on adding custom MCP servers to HighlightAI, refer to [the documentation](https://docs.highlightai.com/plugins/custom).

#### Connecting Augment Code

1. Open Augment Code settings
2. Navigate to the MCP section
3. Add a new MCP server with the following details:

Name the MCP server: `git-mcp Docs`

Use this command:
```bash
npx mcp-remote https://gitmcp.io/{owner}/{repo}
```

Or use the following configuration:
```json
{
  "mcpServers": {
    "git-mcp Docs": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://gitmcp.io/{owner}/{repo}"
      ]
    }
  }
}
```

#### Connecting Msty AI
1. Open Msty Studio
2. Go to Tools > Import Tools from JSON Clipboard
3. Paste the following configuration:

```json
{
  "mcpServers": {
    "git-mcp Docs": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://gitmcp.io/{owner}/{repo}"
      ]
    }
  }
}
```

For more details on configuring MCP servers in Augment Code, visit [the Augment Code documentation](https://docs.augmentcode.com/setup-augment/mcp).

> **Note:** Remember to replace `{owner}` and `{repo}` with the actual GitHub username/organization and repository name. You can also use the dynamic endpoint `https://gitmcp.io/docs` to allow your AI to access any repository on demand.

## ⚙ How It Works

GitMCP connects your AI assistant to GitHub repositories using the Model Context Protocol (MCP), a standard that lets AI tools request additional information from external sources.

What happens when you use GitMCP:

1. **You provide the GitMCP URL** to your AI assistant (e.g., `gitmcp.io/microsoft/typescript`). GitMCP exposes tools like documentation fetching, smart search, code search, etc.
2. **Prompt the AI assistant** on documentation/code-related questions.
3. **Your AI sends requests** to GitMCP to use its tools (with your approval).
4. **GitMCP executes the AI's request** and returns the requested data.
5. **Your AI receives the information** and generates a more accurate, grounded response without hallucinations.

### Supported Documentation

GitMCP currently supports the following documents (in order of priority):
1. [llms.txt](https://llmstxt.org)
2. AI-optimized version of the project's documentation
3. `README.md`/root

## 💡 Examples

Here are some examples of how to use GitMCP with different AI assistants and repositories:

### Example 1: Using Windsurf with a specific repository

For the GitHub repository `https://github.com/microsoft/playwright-mcp`, add `https://gitmcp.io/microsoft/playwright-mcp` as an MCP server to Windsurf.

**Prompt to Claude:**
> "How do I use the Playwright MCP"

Windsurf will pull the relevant documentation from GitMCP to implement the memory feature correctly.

### Example 2: Using Cursor with a GitHub Pages site

For the GitHub Pages site `langchain-ai.github.io/langgraph`, add `https://langchain-ai.gitmcp.io/langgraph` as an MCP server to Cursor.

**Prompt to Cursor:**
> "Add memory to my LangGraph agent"

Cursor will pull the relevant documentation and code from GitMCP to correctly implement the memory feature.

### Example 3: Using Claude Desktop with the dynamic endpoint

You don't have to pick specific repositories. The generic `gitmcp.io/docs` endpoint allows AI to pick the GitHub project on the fly!

**Prompt to any AI assistant:**
> "I want to learn about the OpenAI Whisper speech recognition model. Explain how it works."

Claude will pull the data from GitMCP and answer the question.

## 🛠️ Tools

GitMCP provides AI assistants with several valuable tools to help them access, understand, and query GitHub repositories.

### `fetch_<repo-name>_documentation`

This tool gets the primary documentation from a GitHub repository. It works by retrieving relevant documentation (e.g., `llms.txt`). This gives the AI a good overview of what the project is about

**When it's useful:** For general questions about a project's purpose, features, or how to get started

### `search_<repo-name>_documentation`

This tool lets the AI search through a repository's documentation by providing a specific search query. Instead of loading all the documentation (which could be very large), it uses intelligent search to find just the relevant parts.

**When it's useful:** For specific questions about particular features, functions, or concepts within a project

### `fetch_url_content`

This tool helps the AI get information from links mentioned in the documentation. It retrieves the content from those links and converts it to a format the AI can easily read.

**When it's useful:** When documentation references external information that would help answer your question

### `search_<repo-name>_code`

This tool searches through the actual code in the repository using GitHub's code search. It helps AI find specific code examples or implementation details.

**When it's useful:** When you want examples of how something is implemented or need technical details not covered in documentation

> **Note:** When using the dynamic endpoint (`gitmcp.io/docs`), these tools are named slightly differently (`fetch_generic_documentation`, `search_generic_code`, and `search_generic_documentation`) and need additional information about which repository to access.

## 📊 Badge

GitMCP has a badge for your repository's README. It allows users to quickly access your documentation through their IDE or browser (using the embedded chat). It also showcases how many times your documentation has been accessed through GitMCP.

Example (`idosal/git-mcp`): [![GitMCP](https://img.shields.io/endpoint?url=https://gitmcp.io/badge/idosal/git-mcp)](https://gitmcp.io/idosal/git-mcp)

### Adding the Badge to Your Repository

Add the following to your `README.md`:

```markdown
[![GitMCP](https://img.shields.io/endpoint?url=https://gitmcp.io/badge/OWNER/REPO)](https://gitmcp.io/OWNER/REPO)
```

Replace `OWNER` with your GitHub username or organization, and `REPO` with your repository name.

### How We Count Views

Increment for each tool call on the specific repository.

### Customizing the Badge

You can customize the badge's appearance with parameters:

| Parameter | Description | Default | Example |
|-----------|-------------|---------|---------|
| `color` | Color for the badge value | `aquamarine` | `?color=green` |
| `label` | Badge label | `GitMCP` | `Documentation`

Please reach out if you need help!

## ❓ FAQ

### What is the Model Context Protocol?

The [Model Context Protocol](https://modelcontextprotocol.io/introduction) is a standard that allows AI assistants to request and receive additional context from external sources in a structured manner, enhancing their understanding and performance.

### Does GitMCP work with any AI assistant?

Yes, GitMCP is compatible with any AI assistant supporting the Model Context Protocol, including tools like Cursor, VSCode, Claude, etc.

### Is GitMCP compatible with all GitHub projects?

Absolutely! GitMCP works with any public GitHub repository without requiring any modifications. It prioritizes the `llms.txt` file and falls back to `README.md` or other pages if the former is unavailable. Future updates aim to support additional documentation methods and even generate content dynamically.

### Does GitMCP cost money?

No, GitMCP is a free service to the community with no associated costs.

## 🔒 Privacy

GitMCP is deeply committed to its users' privacy. The service doesn't have access to or store any personally identifiable information as it doesn't require authentication. In addition, it doesn't store any queries sent by the agents. Moreover, as GitMCP is an open-source project, it can be deployed independently in your environment.

GitMCP only accesses content that is already publicly available and only when queried by a user. GitMCP does not automatically scrape repositories. Before accessing any GitHub Pages site, the code checks for `robots.txt` rules and follows the directives set by site owners, allowing them to opt out. Please note that GitMCP doesn't permanently store data regarding the GitHub projects or their content.

## 👥 Contributing

We welcome contributions, feedback, and ideas! Please review our [contribution](https://github.com/idosal/git-mcp/blob/main/.github/CONTRIBUTING.md) guidelines.

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/idosal/git-mcp.git
   cd git-mcp
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run locally for development**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

#### Using MCP Inspector for Testing

1. Install the MCP Inspector tool:
   ```bash
   npx @modelcontextprotocol/inspector
   ```

2. In the inspector interface:
   - Set Transport Type to `SSE`
   - Enter your GitMCP URL (e.g., `http://localhost:5173/docs`)
   - Click "Connect"

## 📄 License

This project is licensed under the [Apache License 2.0](LICENSE).

## Disclaimer

GitMCP is provided "as is" without warranty of any kind. While we strive to ensure the reliability and security of our service, we are not responsible for any damages or issues that may arise from its use. GitHub projects accessed through GitMCP are subject to their respective owners' terms and conditions. GitMCP is not affiliated with GitHub or any of the mentioned AI tools.


## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=idosal/git-mcp&type=Timeline)](https://www.star-history.com/#idosal/git-mcp&Timeline)
