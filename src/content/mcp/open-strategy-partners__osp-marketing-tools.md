---
name: "open-strategy-partners/osp_marketing_tools"
description: "A suite of marketing tools from Open Strategy Partners including writing style, editing codes, and product marketing value map creation."
description_tr: "Open Strategy Partners'in yazı stili, editing kodları ve ürün pazarlama değer haritası oluşturmayı içeren pazarlama araçları paketi."
category: "Marketing"
repo: "open-strategy-partners/osp_marketing_tools"
stars: 266
url: "https://github.com/open-strategy-partners/osp_marketing_tools"
body_length: 8746
license: "CC-BY-SA-4.0"
language: "Python"
body_tr: |-
  # Open Strategy Partners (OSP) Pazarlama Araçları LLM'ler için

  ![](https://badge.mcpx.dev?type=server 'MCP Server') 

  Teknik pazarlama içeriği oluşturma, optimizasyon ve ürün konumlandırması için kapsamlı bir araç seti, [Open Strategy Partners](https://openstrategypartners.com)'ın kanıtlanmış metodolojilerine dayanarak. 

  Bu yazılım [Model Context Protocol (MCP)](https://openstrategypartners.com/blog/the-model-context-protocol-unify-your-marketing-stack-with-ai/) üzerine inşa edilmiştir ve MCP'yi destekleyen herhangi bir LLM istemcisi tarafından kullanılabilir. 

  2025 yılının başında, MCP'yi destekleyen LLM istemcileri şunları içerir:
  - [Claude desktop uygulaması](https://claude.ai/download) teknik olmayan kullanıcılar için en kolay seçenektir (ve MCP'nin mucitleri tarafından yapılmıştır).
  - [Cursor IDE](https://www.cursor.com/) geliştirici arkadaşlarımız arasında çok popülerdir.
  - [LibreChat](https://www.librechat.ai/) mükemmel bir açık kaynak AI/LLM arayüz uygulamasıdır.

  [Agentic AI'ın pazarlamaya nasıl fayda sağlayacağı](https://openstrategypartners.com/blog/mastering-llm-interaction-preparing-marketing-teams-for-agentic-ai-success-with-mcp/) hakkındaki vizyonumuzu okuyun.

  ## Özellikler

  ### 1. OSP Ürün Değer Haritası Oluşturucu
  Ürününüzün değerini ve konumlandırmasını etkili bir şekilde iletmek için yapılandırılmış [OSP ürün değer haritaları](https://openstrategypartners.com/the-osp-value-map/) oluşturun:
  - Slogan oluşturma ve iyileştirme
  - Pazar, teknik, UX ve işletme boyutlarında konum ifadeleri
  - Roller, zorluklar ve ihtiyaçlar ile persona geliştirme
  - Değer durumu belgelendirmesi
  - Özellik kategorilendirmesi ve organizasyonu
  - Özellikler, alanlar ve kategoriler için hiyerarşik yapı
  - Bütünlük ve tutarlılık için doğrulama sistemi

  ### 2. OSP Meta Bilgi Oluşturucu
  Web içeriği için optimize edilmiş metadata oluşturun:
  - Uygun anahtar kelime yerleşimi ile makale başlıkları (H1)
  - Arama için optimize edilmiş meta başlıklar (50-60 karakter)
  - Net değer önermeleri ile meta açıklamalar (155-160 karakter)
  - SEO dostu URL slug'ları
  - Arama niyeti analizi
  - Mobil ekran optimizasyonu
  - Tıklanma oranı iyileştirme önerileri

  ### 3. OSP İçerik Düzenleme Kodları
  Kapsamlı içerik incelemesi için [OSP'nin anlamsal düzenleme kodlarını](https://openstrategypartners.com/resources/the-osp-editing-codes/) uygulayın:
  - Kapsam ve anlatı yapısı analizi
  - Akış ve okunabilirlik iyileştirmesi
  - Stil ve ifade optimizasyonu
  - Kelime seçimi ve gramer doğrulaması
  - Teknik doğruluk validasyonu
  - Kapsayıcı dil rehberliği
  - Öncesi/sonrası örnekleri ile yapıcı geri bildirim oluşturma

  ### 4. OSP Teknik Yazım Rehberi
  Yüksek kaliteli teknik içerik oluşturma için sistematik yaklaşım:
  - Anlatı yapısı geliştirme
  - Akış optimizasyonu
  - Stil yönergeleri
  - Teknik doğruluk doğrulaması
  - İçerik türüne özgü rehberlik (öğreticiler, referans belgeleri, API belgeleri)
  - Erişilebilirlik dikkatleri
  - Uluslararasılaştırma en iyi uygulamaları
  - Kalite güvence kontrol listeleri

  ### 5. OSP Sayfa İçi SEO Rehberi
  Arama motorları ve kullanıcı deneyimi için web içeriği optimizasyon için kapsamlı sistem:
  - Meta içerik optimizasyonu (başlıklar, karakter sınırları ve anahtar kelime yerleşimi ile açıklamalar)
  - İçerik derinliği iyileştirmesi (alt konular, veri entegrasyonu, çok format optimizasyonu)
  - Arama niyeti uyumu (5 tür: bilgisel, navigasyonel, işlemsel, ticari, yerel)
  - Teknik SEO uygulaması (anahtar kelime araştırması, entegrasyon protokolleri, dahili bağlantı kuralları)
  - Yapılandırılmış veri dağıtımı (SSS, Nasıl Yapılır, Ürün şemaları)
  - İçerik promosyon stratejileri (sosyal medya, reklam yaklaşımları)
  - Kalite doğrulama protokolü (yapıcı geri bildirim, diff tabanlı revizyon sistemi)
  - Performans ölçüm yöntemleri (CTR, zıplama oranı, sayfa zamanı metrikleri)


  ## Kullanım Örnekleri

  Tüm bu örneklerde, iyileştirmek istediğiniz metinleri veya pazarladığınız ürünü tanımlayan teknik belgeleri sağlayacağınız varsayılmaktadır. 

  ### Değer Haritası Oluşturma

  ```plaintext
  Prompt: "[Ürün Adı] için bir OSP değer haritası oluştur, [hedef kitle] üzerinde odaklanarak ve aşağıdaki temel özellikleri içeriyorum: [özellikleri listele]"

  Örnek:
  "CloudDeploy için bir OSP değer haritası oluştur, DevOps mühendislerine odaklanarak bu temel özelliklere sahip:
  - Otomatik dağıtım hattı
  - Infrastructure as Code desteği
  - Gerçek zamanlı izleme
  - Çok bulut uyumluluğu
  - [özelliklerin veya metnin geri kalanı]"
  ```

  ### Meta Bilgi Oluşturma

  ```plaintext
  Prompt: "[konu] hakkında bir makale için metadata oluşturmak üzere OSP meta aracını kullan. Birincil anahtar kelime: [anahtar kelime], hedef kitle: [hedef kitle], içerik türü: [tür]"

  Örnek:
  "Kontainerizasyon en iyi uygulamaları hakkında bir makale için metadata oluşturmak üzere OSP meta aracını kullan. Birincil anahtar kelime: 'Docker containers', hedef kitle: sistem yöneticileri, içerik türü: teknik rehber"
  ```

  ### İçerik Düzenleme

  ```plaintext
  Prompt: "Bu teknik içeriği OSP düzenleme kodlarını kullanarak incele: [içeriği yapıştır]"

  Örnek:
  "Bu teknik içeriği OSP düzenleme kodlarını kullanarak incele:
  Kubernetes container'ları yönetmenize yardımcı olur. Yaptığı şeyde gerçekten iyidir. Uygulamalarınızı dağıtmak ve daha iyi çalışmasını sağlamak için kullanabilirsiniz."
  ```

  ### Teknik Yazım

  ```plaintext
  Prompt: "[kitle] için [konu] hakkında [belge türü] oluşturmak üzere OSP yazım rehberini uygula"

  Örnek:
  "Yazılım geliştirme stajyerleri için CI/CD hattı kurulumu hakkında bir öğretici oluşturmak üzere OSP yazım rehberini uygula"
  ```
  ## Kurulum

  ### Ön Koşullar

  #### Windows
  1. Claude Desktop'ı (veya başka bir MCP özellikli AI aracını) yükleyin
     - [Claude for Desktop](https://claude.ai/download) indirin
     - Geçerli kurulum talimatlarını izleyin: [Claude Desktop'ı Kurma](https://support.anthropic.com/en/articles/10065433-installing-claude-for-desktop)
       
  2. Python 3.10 veya daha yüksek sürümünü yükleyin:
     - [python.org](https://python.org) adresinden en son Python yükleyicisini indirin
     - Yükleyiciyi çalıştırın, "Add Python to PATH" seçeneğini işaretleyin
     - Komut İstemi'ni açın ve `python --version` ile kurulumu doğrulayın

  3. uv yükleyin:
     - Komut İstemi'ni Yönetici olarak açın
     - `pip install --user uv` çalıştırın
     - `uv --version` ile kurulumu doğrulayın

  #### macOS
  1. Claude Desktop'ı (veya başka bir MCP özellikli AI aracını) yükleyin
     - [Claude for Desktop](https://claude.ai/download) indirin
     - Geçerli kurulum talimatlarını izleyin: [Claude Desktop'ı Kurma](https://support.anthropic.com/en/articles/10065433-installing-claude-for-desktop)
       
  2. Python 3.10 veya daha yüksek sürümünü yükleyin:
     - Homebrew kullanarak: `brew install python`
     - `python3 --version` ile kurulumu doğrulayın

  3. uv yükleyin:
     - Homebrew kullanarak: `brew install uv`
     - Alternatif olarak: `pip3 install --user uv`
     - `uv --version` ile kurulumu doğrulayın

  ## Yapılandırma

  Aşağıdakileri `claude_desktop_config.json` dosyanıza ekleyin:

  ```json
  {
      "mcpServers": {
          "osp_marketing_tools": {
              "command": "uvx",
              "args": [
                  "--from",
                  "git+https://github.com/open-strategy-partners/osp_marketing_tools@main",
                  "osp_marketing_tools"
              ]
          }
      }
  }
  ```
  ## Atıf

  Bu yazılım paketi, [Open Strategy Partners](https://openstrategypartners.com) tarafından geliştirilen içerik oluşturma ve optimizasyon metodolojilerini uygular. LLM özellikli pazarlama araçlarına ve profesyonel içerik oluşturma çerçevelerine dayalıdır.

  Daha fazla bilgi ve orijinal kaynaklar için şu adresleri ziyaret edin:
  1. [The OSP Writing and Editing Guide](https://openstrategypartners.com/osp-writing-editing-guide/)
  2. [Editing Codes Quickstart Guide](https://openstrategypartners.com/blog/osp-editing-codes-quick-start-guide/)
  3. [OSP Free Resources](https://openstrategypartners.com/resources/)

  ## Lisans

  Bu yazılım, Creative Commons Corporation ("Creative Commons") tarafından Attribution-ShareAlike 4.0 International lisansı altında lisanslanmıştır. 

  Bu, şu şekilde özgür olduğunuz anlamına gelir:
  - Paylaş: Materyali herhangi bir ortamda veya formatta kopyala ve yeniden dağıt
  - Uyarla: Materyali herhangi bir amaç için, ticari amaçlar bile dahil olmak üzere, remikse çevir ve dönüştür

  Aşağıdaki koşullar altında:
  - Atıf: Open Strategy Partners'a uygun kredi vermelisin, lisansa bir bağlantı sağla ve değişiklikler yapıldıysa bunu belirt
  - Aynısı Paylaş: Materyali remikse çevirirsen, dönüştürürsen veya üzerine inşa edersen, katkılarını orijinalin aynı lisansı altında dağıtmalısın

  Tam lisans metni için ziyaret et: [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/)

  ## Katkı Sağlama

  Bu araçların iyileştirilmesine katkı sağlamanızı hoş karşılarız. Lütfen sorunları ve pull request'leri depo aracılığıyla gönderin.

  ## Destek

  Sorular ve destek için:
  1. Belgelendirmemizi kontrol et
  2. Depomuzda bir sorun oluştur
  3. [Profesyonel danışmanlık](https://openstrategypartners.com/contact/) için Open Strategy Partners ile iletişime geç
---

# Open Strategy Partners (OSP) Marketing Tools for LLMs

![](https://badge.mcpx.dev?type=server 'MCP Server') 

A comprehensive suite of tools for technical marketing content creation, optimization, and product positioning based on [Open Strategy Partners](https://openstrategypartners.com)' proven methodologies. 

This software is based on the [Model Context Protocol (MCP)](https://openstrategypartners.com/blog/the-model-context-protocol-unify-your-marketing-stack-with-ai/) and is can be used by any LLM client that supports the MCP. 

As of early February 2025, the LLM clients that support MCP include:
- [Claude desktop app](https://claude.ai/download) is the easiest to use for the less technical among us (and it is made by the inventors of the MCP).
- [Cursor IDE](https://www.cursor.com/) is very popular with our developer friends.
- [LibreChat](https://www.librechat.ai/) is an excellent open source AI/LLM interface app.

Read our vision paper on how [Agentic AI will benefit marketing](https://openstrategypartners.com/blog/mastering-llm-interaction-preparing-marketing-teams-for-agentic-ai-success-with-mcp/).

## Features

### 1. OSP Product Value Map Generator
Generate structured [OSP product value maps](https://openstrategypartners.com/the-osp-value-map/) that effectively communicate your product's worth and positioning:
- Tagline creation and refinement
- Position statements across market, technical, UX, and business dimensions
- Persona development with roles, challenges, and needs
- Value case documentation
- Feature categorization and organization
- Hierarchical structure for features, areas, and categories
- Validation system for completeness and consistency

### 2. OSP Meta Information Generator
Create optimized metadata for web content:
- Article titles (H1) with proper keyword placement
- Meta titles optimized for search (50-60 characters)
- Meta descriptions with clear value propositions (155-160 characters)
- SEO-friendly URL slugs
- Search intent analysis
- Mobile display optimization
- Click-through rate enhancement suggestions

### 3. OSP Content Editing Codes
Apply [OSP's semantic editing codes](https://openstrategypartners.com/resources/the-osp-editing-codes/) for comprehensive content review:
- Scope and narrative structure analysis
- Flow and readability enhancement
- Style and phrasing optimization
- Word choice and grammar verification
- Technical accuracy validation
- Inclusive language guidance
- Constructive feedback generation with before/after examples

### 4. OSP Technical Writing Guide
Systematic approach to creating high-quality technical content:
- Narrative structure development
- Flow optimization
- Style guidelines
- Technical accuracy verification
- Content type-specific guidance (tutorials, reference docs, API documentation)
- Accessibility considerations
- Internationalization best practices
- Quality assurance checklists

### 5. OSP On-Page SEO Guide
Comprehensive system for optimizing web content for search engines and user experience:
- Meta content optimization (titles, descriptions with character limits and keyword placement)
- Content depth enhancement (subtopics, data integration, multi-format optimization)
- Search intent alignment (5 types: informational, navigational, transactional, commercial, local)
- Technical SEO implementation (keyword research, integration protocols, internal linking rules)
- Structured data deployment (FAQ, How-To, Product schemas)
- Content promotion strategies (social media, advertising approaches)
- Quality validation protocol (constructive feedback, diff-based revision system)
- Performance measurement methods (CTR, bounce rate, time on page metrics)


## Usage Examples

In all of these examples, it is assumed that you will provide the texts that you wish to improve, or the technical documentation that describes the product you are marketing. 

### Value Map Generation

```plaintext
Prompt: "Generate an OSP value map for [Product Name] focusing on [target audience] with the following key features: [list features]"

Example:
"Generate an OSP value map for CloudDeploy, focusing on DevOps engineers with these key features:
- Automated deployment pipeline
- Infrastructure as code support
- Real-time monitoring
- Multi-cloud compatibility
- [the rest of your features or text]"
```

### Meta Information Creation

```plaintext
Prompt: "Use the OSP meta tool to generate metadata for an article about [topic]. Primary keyword: [keyword], audience: [target audience], content type: [type]"

Example:
"Use the OSP meta tool to generate metadata for an article about containerization best practices. Primary keyword: 'Docker containers', audience: system administrators, content type: technical guide"
```

### Content Editing

```plaintext
Prompt: "Review this technical content using OSP editing codes: [paste content]"

Example:
"Review this technical content using OSP editing codes:
Kubernetes helps you manage containers. It's really good at what it does. You can use it to deploy your apps and make them run better."
```

### Technical Writing

```plaintext
Prompt: "Apply the OSP writing guide to create a [document type] about [topic] for [audience]"

Example:
"Apply the OSP writing guide to create a tutorial about setting up a CI/CD pipeline for junior developers"
```
## Installation

### Prerequisites

#### Windows
1. Install Claude Desktop (or another MCP-enabled AI tool)
   - Download [Claude for Desktop](https://claude.ai/download) 
   - Follow the current installation instructions: [Installing Claude Desktop](https://support.anthropic.com/en/articles/10065433-installing-claude-for-desktop)
     
2. Install Python 3.10 or higher:
   - Download the latest Python installer from [python.org](https://python.org)
   - Run the installer, checking "Add Python to PATH"
   - Open Command Prompt and verify installation with `python --version`

3. Install uv:
   - Open Command Prompt as Administrator
   - Run `pip install --user uv`
   - Verify installation with `uv --version`

#### macOS
1. Install Claude Desktop (or another MCP-enabled AI tool)
   - Download [Claude for Desktop](https://claude.ai/download) 
   - Follow the current installation instructions: [Installing Claude Desktop](https://support.anthropic.com/en/articles/10065433-installing-claude-for-desktop)
     
2. Install Python 3.10 or higher:
   - Using Homebrew: `brew install python`
   - Verify installation with `python3 --version`

3. Install uv:
   - Using Homebrew: `brew install uv`
   - Alternatively: `pip3 install --user uv`
   - Verify installation with `uv --version`

## Configuration

Add the following to your `claude_desktop_config.json`:

```json
{
    "mcpServers": {
        "osp_marketing_tools": {
            "command": "uvx",
            "args": [
                "--from",
                "git+https://github.com/open-strategy-partners/osp_marketing_tools@main",
                "osp_marketing_tools"
            ]
        }
    }
}
```
## Attribution

This software package implements the content creation and optimization methodologies developed by [Open Strategy Partners](https://openstrategypartners.com). It is based on their LLM-enabled marketing tools and professional content creation frameworks.

For more information and original resources, visit:
1. [The OSP Writing and Editing Guide](https://openstrategypartners.com/osp-writing-editing-guide/)
2. [Editing Codes Quickstart Guide](https://openstrategypartners.com/blog/osp-editing-codes-quick-start-guide/)
3. [OSP Free Resources](https://openstrategypartners.com/resources/)

## License

This software is licensed under the Attribution-ShareAlike 4.0 International license from Creative Commons Corporation ("Creative Commons"). 

This means you are free to:
- Share: Copy and redistribute the material in any medium or format
- Adapt: Remix, transform, and build upon the material for any purpose, even commercially

Under the following terms:
- Attribution: You must give appropriate credit to Open Strategy Partners, provide a link to the license, and indicate if changes were made
- ShareAlike: If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original

For the full license text, visit: [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/)

## Contributing

We welcome contributions to improve these tools. Please submit issues and pull requests through our repository.

## Support

For questions and support:
1. Check our documentation
2. Submit an issue in our repository
3. Contact Open Strategy Partners for [professional consulting](https://openstrategypartners.com/contact/)
