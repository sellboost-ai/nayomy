---
name: "PV-Bhat/vibe-check-mcp-server"
description: "An MCP server that prevents cascading errors and scope creep by calling a \"Vibe-check\" agent to ensure user alignment."
description_tr: "Kullanıcı uyumunu sağlamak için bir \"Vibe-check\" ajanı çağırarak basamaklı hataları ve scope creep'i önleyen bir MCP server'ı."
category: "Other Tools and Integrations"
repo: "PV-Bhat/vibe-check-mcp-server"
stars: 486
url: "https://github.com/PV-Bhat/vibe-check-mcp-server"
body_length: 17809
license: "MIT"
language: "TypeScript"
homepage: "https://pruthvibhat.com/"
body_tr: |-
  # Vibe Check MCP

  > **Bu proje artık aktif olarak bakım görmemektedir.** v2.8.0 son sürüm olup, güvenlik yamaları ve hata düzeltmeleri içermektedir. Sunucu tam olarak işlevseldir. MIT lisansı altında topluluk forklama ve katkıları hoşlanıyor.

  <p align="center"><b>Aşırı heyecanlı ajanlardan hoşça kalın. Tak ve oyna ajan gözetim aracı.</b></p>

  <p align="center">
    <b>Araştırmaya dayanmaktadır:</b><br/>
    Çalışmamızda Vibe Check çağıran ajanlar başarıyı +%27 artırdı ve zararlı eylemleri -%41 azalttı
  </p>

  <p align="center">
    <a href="https://www.researchgate.net/publication/394946231_Do_AI_Agents_Need_Mentors_Evaluating_Chain-Pattern_Interrupt_CPI_for_Oversight_and_Reliability?channel=doi&linkId=68ad6178ca495d76982ff192&showFulltext=true">
      
    </a>
    <a href="https://github.com/modelcontextprotocol/servers"></a>
    <a href="https://registry.modelcontextprotocol.io/"></a>
    <a href="https://www.pulsemcp.com/servers/pv-bhat-vibe-check">
      
    </a>
    <a href="https://github.com/PV-Bhat/vibe-check-mcp-server/actions/workflows/ci.yml"></a>
    <a href="LICENSE"></a>
  </p>

  <p align="center">
    <sub> PulseMCP'de Öne Çıkartılan "En Popüler (Bu Hafta)" • Smithery.ai'de 5000+ aylık çağrı • araştırma destekli gözetim • STDIO + akışlı HTTP taşıması</sub>
  </p>



  [![Version](https://img.shields.io/badge/version-2.8.0-purple)](https://github.com/PV-Bhat/vibe-check-mcp-server)
  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/PV-Bhat/vibe-check-mcp-server)](https://archestra.ai/mcp-catalog/pv-bhat__vibe-check-mcp-server)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-blueviolet)](CONTRIBUTING.md)

  *Ajanları aşırı mühendisliğe karşı koruyan ve onları minimum uygulanabilir yola saklayan tak ve oyna mentor katmanı — LLM'leri hizalı, yansıtıcı ve güvenli tutan araştırma destekli MCP sunucusu.*

  <div align="center">
    <a href="https://github.com/PV-Bhat/vibe-check-mcp-server">
      
    </a>
    &nbsp;&nbsp;
    <a href="https://registry.modelcontextprotocol.io">
      
    </a>
    &nbsp;&nbsp;
    <a href="https://smithery.ai/server/@PV-Bhat/vibe-check-mcp-server">
      
    </a>
    &nbsp;&nbsp;
    <a href="https://www.pulsemcp.com/servers/pv-bhat-vibe-check">
      
    </a>
  </div>

  <div align="center">
    <em>MCP platformları ve registryleri genelinde geliştirici tarafından güveniliyor</em>
  </div>

  ## Hızlı Başlangıç (npx)

  Sunucuyu yerel kurulum olmadan npm'den doğrudan çalıştırın. Node **>=20** gereklidir. Bir taşıma seçin:

  ### Seçenek 1 – MCP istemcisi STDIO üzerinden

  ```bash
  npx -y @pv-bhat/vibe-check-mcp start --stdio
  ```

  - MCP farkında bir istemciden başlatın (Claude Desktop, Cursor, Windsurf, vb.).
  - `[MCP] stdio transport connected` işlem istemciyi beklemede olduğunu gösterir.
  - Komutu oluşturması için bu bloğu istemci yapılandırmanıza ekleyin:

  ```json
  {
    "mcpServers": {
      "vibe-check-mcp": {
        "command": "npx",
        "args": ["-y", "@pv-bhat/vibe-check-mcp", "start", "--stdio"]
      }
    }
  }
  ```

  ### Seçenek 2 – Manuel HTTP incelemesi

  ```bash
  npx -y @pv-bhat/vibe-check-mcp start --http --port 2091
  ```

  - Hizmeti canlı doğrulamak için `curl http://127.0.0.1:2091/health` kullanın.
  - JSON-RPC isteklerini `http://127.0.0.1:2091/rpc` adresine gönderin.

  npx her iki seçenek için paketi isteğe bağlı olarak indirir. Ayrıntılı istemci kurulumu ve `install` ve `doctor` gibi diğer komutlar için aşağıdaki belgelendirmeye bakın.

  [![Star History Chart](https://api.star-history.com/svg?repos=PV-Bhat/vibe-check-mcp-server&type=Date)](https://www.star-history.com/#PV-Bhat/vibe-check-mcp-server&Date)

  ### Tanıma
  - PulseMCP "En Popüler (Bu Hafta)" ön sayfasında öne çıkartıldı (13 Ekim 2025 haftası) [🔗](https://www.pulsemcp.com/servers/pv-bhat-vibe-check)
  - Anthropic'in resmi Model Context Protocol deposunda listelendi [🔗](https://github.com/modelcontextprotocol/servers?tab=readme-overview#-community-servers)
  - Resmi MCP Registry'de bulunabilir [🔗](https://registry.modelcontextprotocol.io/v0/servers?search=vibe-check-mcp)
  - Sean Kochel'in En İyi 9 MCP sunucusunun vibe kodcuları için öne çıkartıldığında [🔗](https://youtu.be/2wYO6sdQ9xc?si=mlVo4iHf_hPKghxc&t=1331)

  ## İçindekiler
  - [Hızlı Başlangıç (npx)](#hızlı-başlangıç-npx)
  - [Vibe Check MCP Nedir?](#vibe-check-mcp-nedir)
  - [Genel Bakış](#genel-bakış)
  - [Sorun: Desen İnertiası ve Muhakeme Kilitlenmesi](#sorun-desen-inertiası-ve-muhakeme-kilitlenmesi)
  - [Temel Özellikler](#temel-özellikler)
  - [Yenilenen Nedir](#yenilenen-nedir-v280-final-maintenance-release)
  - [Geliştirme Kurulumu](#geliştirme-kurulumu)
  - [Yayın](#yayın)
  - [Kullanım Örnekleri](#kullanım-örnekleri)
  - [Uyarlanabilir Metabilişsel Kesintiler (CPI)](#uyarlanabilir-metabilişsel-kesintiler-cpi)
  - [Ajan İstemi Gereklilikleri](#ajan-istemi-gereklilikleri)
  - [Her Aracı Ne Zaman Kullanacağınız](#her-aracı-ne-zaman-kullanacağınız)
  - [Belgelendirme](#belgelendirme)
  - [Araştırma ve Felsefe](#araştırma-ve-felsefe)
  - [Güvenlik](#güvenlik)
  - [Yol Haritası](#yol-haritası)
  - [Katkıda Bulunanlar ve Topluluk](#katkıda-bulunanlar-ve-topluluk)
  - [SSS](#sss)
  - [Şurada Listelendi](#şurada-listelendi-vibe-check-mcp)
  - [Teşekkür ve Lisans](#teşekkür-ve-lisans)

  ---

  ## Vibe Check MCP Nedir?

  Vibe Check MCP, ajanları minimum uygulanabilir yola tutarak ve karmaşıklığı sadece kanıt gerektirdiğinde yükselterek gözetim sağlar. Vibe Check MCP, Anthropic'in [Model Context Protocol](https://anthropic.com/mcp) uygulaması yapan hafif bir sunucudur. Ajanlarınız için bir **AI meta-mentor** olarak hareket eder, **Chain-Pattern Interrupts (CPI)** ile desen inertiasına müdahale ederek Reasoning Lock-In (RLI) önler. Bunu LLM'ler için kauçuk ördek hata ayıklayıcı olarak düşünün – ajanınız yanlış yola gitmeden önce hızlı bir akıl sağlığı kontrolü.

  ## Genel Bakış

  Vibe Check MCP, metabilişsel bir sinyal katmanını CPI ile birleştirerek ajanlar risk arttığında duraklamasını sağlar. Vibe Check özellikleri, belirsizliği ve risk puanlarını ortaya koymaktadır; CPI bu tetikleyicileri tüketir ve ajan devam etmeden önce bir müdahale politikasını uygular. [CPI entegrasyon kılavuzuna](./docs/integrations/cpi.md) ve https://github.com/PV-Bhat/cpi adresindeki CPI deposuna bakın.

  Vibe Check, ana ajanınıza meta-bilişsel geri bildirim sağlamak için ikinci bir LLM çağırır. vibe_check çağrılarını ajan sistem istelerine entegre etmek ve geri dönüşsüz eylemlerden önce tool çağrılarını talimatlandırmak ajan hizalamasını ve sağduyusunu önemli ölçüde iyileştirir. Yüksek seviye bileşen haritası: [docs/architecture.md](./docs/architecture.md), CPI teslimat diyagramı ve örnek değirmeni [docs/integrations/cpi.md](./docs/integrations/cpi.md) adresinde yakalaşmıştır.

  ## Sorun: Desen İnertiası ve Muhakeme Kilitlenmesi

  Büyük dil modelleri hatalı planları güvenle takip edebilir. Harici bir itme olmadan aşırı mühendislik veya yanlış hizalamaya spiral çekilebilirler. Vibe Check bu itmeyi kısa yansıtıcı duraklamalar yoluyla sağlayarak güvenilirlik ve güvenliği iyileştirir.

  ## Temel Özellikler

  | Özellik | Açıklama | Faydalar |
  |---------|----------|---------|
  | **CPI Uyarlanabilir Kesintiler** | Risk farkında istemler varsayımları sorgulamaz | hizalama, sağlamlık |
  | **Çok Sağlayıcı LLM** | Gemini, OpenAI, Anthropic ve OpenRouter desteği | esneklik |
  | **Geçmiş Sürekliliği** | `sessionId` sağlandığında önceki tavsiyeyi özetler | bağlam saklama |
  | **İsteğe Bağlı vibe_learn** | Hatalar ve düzeltmeleri gelecekteki yansıtma için kaydetme | kendi kendini geliştirme |

  ## Yenilenen Nedir v2.8.0 (Final Maintenance Release)

  > **Bakım Bildirimi:** Bu proje artık aktif olarak bakım görmemektedir. MIT lisansı altında tam olarak işlevseldir ve kullanılabilirdir. Topluluk forklama hoşlanıyor. Ayrıntılar için bkz. [Changelog](./docs/changelog.md).

  - **Hata düzeltmesi:** `check_constitution` artık geçerli MCP içerik türleri döndürüyor (#84'ü düzeltir)
  - **Güvenlik:** Tüm bağımlılıklar güncellendi — 14 npm denetimi güvenlik açığını çözüyor (axios, MCP SDK, diff, express ve geçişli bağımlılıklar)
  - **MCP SDK 1.26:** Kritik çapraz istemci veri sızması düzeltmesi ile en son SDK'ya güncellendi; HTTP taşıma adaptörü uyumluluk için güncellendi

  ## Oturum Anayasası (oturum başına kurallar)

  CPI'nin onayacağı `sessionId` başına kuralları uygulamak için hafif bir "anayasa" kullanın. Örneğin anayasa kuralları: "dış ağ çağrıları yok," "refactorlardan önce unit testleri tercih et," "hiçbir zaman sırları diske yazma."

  **API (araçlar):**
  - `update_constitution({ sessionId, rules })` → oturum için kural setini birleştirir/ayarlar
  - `reset_constitution({ sessionId })` → oturum kurallarını temizler
  - `check_constitution({ sessionId })` → oturum için etkili kuralları döndürür

  ## Geliştirme Kurulumu

  ```bash
  # Klonlama ve kurulum
  git clone https://github.com/PV-Bhat/vibe-check-mcp-server.git
  cd vibe-check-mcp-server
  npm ci
  npm run build
  npm test
  ```

  Tüm iş akışları için **npm** kullanın (`npm ci`, `npm run build`, `npm test`). Bu proje Node **>=20** hedefi alır.

  Kullanmayı planladığınız API anahtarları ile `.env` dosyası oluşturun:

  ```bash
  # Gemini (varsayılan)
  GEMINI_API_KEY=your_gemini_api_key
  # İsteğe bağlı sağlayıcılar / Anthropic uyumlu uç noktalar
  OPENAI_API_KEY=your_openai_api_key
  OPENROUTER_API_KEY=your_openrouter_api_key
  ANTHROPIC_API_KEY=your_anthropic_api_key
  ANTHROPIC_AUTH_TOKEN=your_proxy_bearer_token
  ANTHROPIC_BASE_URL=https://api.anthropic.com
  ANTHROPIC_VERSION=2023-06-01
  # İsteğe bağlı geçersiz kılmalar
  # DEFAULT_LLM_PROVIDER gemini | openai | openrouter | anthropic kabul eder
  DEFAULT_LLM_PROVIDER=gemini
  DEFAULT_MODEL=gemini-2.5-pro
  ```

  #### Yapılandırma

  Testleri çalıştırma talimatları için [docs/TESTING.md]() adresine bakın.

  ### Docker

  Depo, tek komut kurulum için bir yardımcı komut dosyası içerir.

  ```bash
  bash scripts/docker-setup.sh
  ```

  Tam ayrıntılar için [Otomatik Docker Kurulumu](./docs/docker-automation.md) adresine bakın.

  ### Sağlayıcı anahtarları

  Desteklenen sağlayıcılar, çözüm sırası, depolama konumları ve güvenlik rehberliği için [API Anahtarları ve Gizli Yönetimi](./docs/api-keys.md) adresine bakın.

  ### Taşıma seçimi

  CLI stdio ve HTTP taşımalarını destekler. Taşıma çözümü bu sıra izler: açık bayraklar (`--stdio`/`--http`) → `MCP_TRANSPORT` → varsayılan `stdio`. HTTP kullanırken `--port` (veya `MCP_HTTP_PORT` ayarla); varsayılan bağlantı noktası **2091**'dir. Oluşturulan girişler `--stdio` veya `--http --port <n>` ekler ve HTTP-kapasiteli istemciler de `http://127.0.0.1:<port>` bitiş noktası alırlar.

  ### İstemci yükleyicileri

  Her yükleyici idempotent ve girişleri `"managedBy": "vibe-check-mcp-cli"` ile etiketler. Yedeklemeler değişiklikler uygulanmadan önce çalıştırma başına bir kez yazılır ve birleşmeler atomiktir (`*.bak` dosyaları geri alma kolaylaştırır). Daha derin istemci özel referanslar için [docs/clients.md](./docs/clients.md) adresine bakın.

  #### Claude Desktop

  - Yapılandırma yolu: `claude_desktop_config.json` (platform başına otomatik keşfedilir).
  - Varsayılan taşıma: stdio (`npx … start --stdio`).
  - Yeni MCP sunucusunu yüklemek için Claude Desktop'ı yeniden başlatın.
  - `vibe-check-mcp` için yönetilmeyen bir giriş zaten varsa, CLI bunu dokunmadan bırakır ve bir uyarı yazdırır.

  #### Cursor

  - Yapılandırma yolu: `~/.cursor/mcp.json` (farklı depoladığınız takdirde `--config` sağlayın).
  - Şema Claude'un `mcpServers` düzenini yansıtır.
  - Dosya eksikse, CLI başarısız olmak yerine Cursor ayarları paneli için hazır-yapıştır JSON bloğu yazdırır.

  #### Windsurf (Cascade)

  - Yapılandırma yolu: eski `~/.codeium/windsurf/mcp_config.json`, yeni yapılar `~/.codeium/mcp_config.json` kullanır.
  - Windsurf'un HTTP istemcisi için `serverUrl` ile giriş yayınlamak için `--http` geçer.
  - Mevcut sentinel yönetilen `serverUrl` girişleri yerinde korunur ve güncellenir.

  #### Visual Studio Code

  - Çalışma alanı yapılandırması `.vscode/mcp.json` adresinde yaşar; profiller ayrıca VS Code kullanıcı veri dizininizde `mcp.json` depolar.
  - Çalışma alanı dosyasını hedeflemek için `--config <path>` sağlayın. `--config` olmadan CLI bir JSON parçacığı ve terminalden doğrudan açabileceğiniz `vscode:mcp/install?...` bağlantısı yazdırır.
  - VS Code isteğe bağlı dev alanlarını destekler; `dev.watch`/`dev.debug` doldurmak için `--dev-watch` ve/veya `--dev-debug <value>` geçer.

  ### Kaldırma ve geri alma

  - Yapılandırmanın yanında oluşturulan yedeklemeleri geri yükleyin (en yeni `*.bak`) hemen geri almak için.
  - Sunucuyu manuel olarak kaldırmak için, yapılandırmanız `vibe-check-mcp` girişini silin (Claude/Windsurf/Cursor altında `mcpServers` veya VS Code'da `servers`) hala `"managedBy": "vibe-check-mcp-cli"` ile etiketlendikçe.

  ## Araştırma ve Felsefe

  **CPI (Chain-Pattern Interrupt)** Vibe Check'in arkasındaki araştırma destekli gözetim yöntemidir. Risk enfleksiyon anlarında ajan yeniden taşmayı durdurmak ve kullanıcının gerçek önceliğine yeniden hizalamak için kısa, iyi zamanlanmış "duraklatma noktaları" enjekte eder, yıkıcı kaskaları ve **muhakeme kilitlenmesini (RLI)** önler. 153 çalıştırma arasında havuzlanmış değerlendirmede, CPI **başarıyı neredeyse iki katına çıkartır (~%27→54%) ve zararlı eylemleri kabaca yarıya indirir (~%83→42%)**. En uygun kesinti **dozu ~%10–20% adımdır**. *Vibe Check MCP CPI'yı test zamanında harici bir mentor katmanı olarak uygular.*

  **Bağlantılar:**  
  - 📄 **CPI Makalesi (ResearchGate)** — http://dx.doi.org/10.13140/RG.2.2.18237.93922  
  - 📘 **CPI Referans Uygulaması (GitHub)**: https://github.com/PV-Bhat/cpi
  - 📚 **MURST Zenodo DOI (RSRC arşiv)**: https://doi.org/10.5281/zenodo.14851363

  ```mermaid
  flowchart TD
    A[Agent Phase] --> B{Monitor Progress}
    B -- high risk --> C[CPI Interrupt]
    C --> D[Reflect & Adjust]
    B -- smooth --> E[Continue]
  ```

  ## Ajan İstemi Gereklilikleri

  Ajanınızın sistem isteminde, `vibe_check` yansıtma için zorunlu bir araç olduğunu açıkça belirtin. Her zaman tam kullanıcı isteğini ve diğer ilgili bağlamı geçin. Bir hatayı düzelttikten sonra, isteğe bağlı olarak gelecekteki analiz için tarih oluşturmak üzere `vibe_learn` ile kaydedin.

  Örnek parçacık:
  ```
  Özerk ajan olarak şunları yapacaksınız:
  1. Planlamadan sonra ve büyük eylemlerden önce vibe_check'i çağırın.
  2. Tam kullanıcı isteğini ve mevcut planınızı sağlayın.
  3. İsteğe bağlı olarak, çözümlenen sorunları vibe_learn ile kaydedin.
  ```

  ## Her Aracı Ne Zaman Kullanacağınız

  | Araç                       | Amaç                                                   |
  |----------------------------|-----------------------------------------------------   |
  | 🛑 **vibe_check**       | Varsayımları sorgulamak ve tünel vizyonunu önlemek              |
  | 🔄 **vibe_learn**       | Hatalar, tercihler ve başarıları yakalamak                 |
  | 🧰 **update_constitution** | CPI katmanının uygulanacağı oturum kurallarını ayarlamak/birleştirmek         |
  | 🧹 **reset_constitution**  | Oturum için kuralları temizlemek                                  |
  | 🔎 **check_constitution**  | Oturum için etkili kuralları incelemek                      |

  ## Belgelendirme

  - [Ajan İstemi Stratejileri](./docs/agent-prompting.md)
  - [CPI Entegrasyonu](./docs/integrations/cpi.md)
  - [Gelişmiş Entegrasyon](./docs/advanced-integration.md)
  - [Teknik Referans](./docs/technical-reference.md)
  - [Otomatik Docker Kurulumu](./docs/docker-automation.md)
  - [Felsefe](./docs/philosophy.md)
  - [Vaka Çalışmaları](./docs/case-studies.md)
  - [Changelog](./docs/changelog.md)

  ## Güvenlik

  Bu depo, her çekme isteğinde çalışan CI tabanlı güvenlik taraması içerir. `npm audit` ile bağımlılıkları kontrol eder ve kaynağı riskli desenler için tarar. Ayrıntılar ve sorunları bildirme hakkında bilgi için [SECURITY.md](./SECURITY.md) adresine bakın.

  ## Yol Haritası

  > **Not:** Bu proje son bakım sürümüne (v2.8.0) ulaşmıştır. Aşağıda yer alan yol haritası, geliştirmeyi devam ettirmek isteyebilecek topluluk forklama için korunmuştur.

  - **`vibe_check` için yapılandırılmış çıktı:** `{ advice, riskScore, traits }` gibi JSON zarfı döndürün, böylece akış aşağısı ajanlar belirleyici olarak akıl yürütebilirler.
  - **LLM dayanıklılığı:** `generateResponse` ile yeniden deneme ve üstel geri alma sarmalayın.
  - **Giriş temizleme:** Prompt enjeksyon vektörlerini azaltmak için araç bağımsız değişkenlerini doğrulayın ve temizleyin.
  - **İstem dışsallaştırması:** Sabit kodlanmış istekleri şeffaflık ve denetlenebilirlik için yapılandırma dosyalarına taşıyın (bkz. PR #71).

  ## Katkıda Bulunanlar ve Topluluk

  Katkılar hoşlanıyor! Bkz. [CONTRIBUTING.md](./CONTRIBUTING.md).

  <a href="https://github.com/PV-Bhat/vibe-check-mcp-server/graphs/contributors">
    
  </a> 

  ## Bağlantılar

  * [MSEEP](https://mseep.ai/app/pv-bhat-vibe-check-mcp-server)
  * [MCP Sunucuları](https://mcpservers.org/servers/PV-Bhat/vibe-check-mcp-server)
  * [MCP.so](https://mcp.so/server/vibe-check-mcp-server/PV-Bhat)
  * [Creati.ai](https://creati.ai/mcp/vibe-check-mcp-server/)
  * [Pulse MCP](https://www.pulsemcp.com/servers/pv-bhat-vibe-check)
  * [Playbooks.com](https://playbooks.com/mcp/pv-bhat-vibe-check)
  * [MCPHub.tools](https://mcphub.tools/detail/PV-Bhat/vibe-check-mcp-server)
  * [MCP Dizini](https://mcpdirectory.ai/mcpserver/2419/)

  ## Teşekkür ve Lisans

  Vibe Check MCP [MIT Lisansı](LICENSE) altında yayınlanmıştır. Güvenilir, kurumsal düzey AI ajanları için oluşturulmuştur.

  ## Yazar Teşekkürleri ve Bağlantıları

  Vibe Check MCP oluşturan: [Pruthvi Bhat](https://pruthvibhat.com/), Initiative - https://murst.org/
---

# Vibe Check MCP

> **This project is no longer actively maintained.** v2.8.0 is the final release, which includes security patches and bug fixes. The server remains fully functional. Community forks and contributions are welcome under the MIT license.

<p align="center"><b>KISS overzealous agents goodbye. Plug & play agent oversight tool.</b></p>

<p align="center">
  <b>Based on research:</b><br/>
  In our study agents calling Vibe Check improved success +27% and halved harmful actions -41%
</p>

<p align="center">
  <a href="https://www.researchgate.net/publication/394946231_Do_AI_Agents_Need_Mentors_Evaluating_Chain-Pattern_Interrupt_CPI_for_Oversight_and_Reliability?channel=doi&linkId=68ad6178ca495d76982ff192&showFulltext=true">
    
  </a>
  <a href="https://github.com/modelcontextprotocol/servers"></a>
  <a href="https://registry.modelcontextprotocol.io/"></a>
  <a href="https://www.pulsemcp.com/servers/pv-bhat-vibe-check">
    
  </a>
  <a href="https://github.com/PV-Bhat/vibe-check-mcp-server/actions/workflows/ci.yml"></a>
  <a href="LICENSE"></a>
</p>

<p align="center">
  <sub> Featured on PulseMCP “Most Popular (This Week)” • 5k+ monthly calls on Smithery.ai • research-backed oversight • STDIO + streamable HTTP transport</sub>
</p>



[![Version](https://img.shields.io/badge/version-2.8.0-purple)](https://github.com/PV-Bhat/vibe-check-mcp-server)
[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/PV-Bhat/vibe-check-mcp-server)](https://archestra.ai/mcp-catalog/pv-bhat__vibe-check-mcp-server)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-blueviolet)](CONTRIBUTING.md)

*Plug-and-play mentor layer that stops agents from over-engineering and keeps them on the minimal viable path — research-backed MCP server keeping LLMs aligned, reflective and safe.*

<div align="center">
  <a href="https://github.com/PV-Bhat/vibe-check-mcp-server">
    
  </a>
  &nbsp;&nbsp;
  <a href="https://registry.modelcontextprotocol.io">
    
  </a>
  &nbsp;&nbsp;
  <a href="https://smithery.ai/server/@PV-Bhat/vibe-check-mcp-server">
    
  </a>
  &nbsp;&nbsp;
  <a href="https://www.pulsemcp.com/servers/pv-bhat-vibe-check">
    
  </a>
</div>

<div align="center">
  <em>Trusted by developers across MCP platforms and registries</em>
</div>

## Quickstart (npx)

Run the server directly from npm without a local installation. Requires Node **>=20**. Choose a transport:

### Option 1 – MCP client over STDIO

```bash
npx -y @pv-bhat/vibe-check-mcp start --stdio
```

- Launch from an MCP-aware client (Claude Desktop, Cursor, Windsurf, etc.).
- `[MCP] stdio transport connected` indicates the process is waiting for the client.
- Add this block to your client config so it spawns the command:

```json
{
  "mcpServers": {
    "vibe-check-mcp": {
      "command": "npx",
      "args": ["-y", "@pv-bhat/vibe-check-mcp", "start", "--stdio"]
    }
  }
}
```

### Option 2 – Manual HTTP inspection

```bash
npx -y @pv-bhat/vibe-check-mcp start --http --port 2091
```

- `curl http://127.0.0.1:2091/health` to confirm the service is live.
- Send JSON-RPC requests to `http://127.0.0.1:2091/rpc`.

npx downloads the package on demand for both options. For detailed client setup and other commands like `install` and `doctor`, see the documentation below.

[![Star History Chart](https://api.star-history.com/svg?repos=PV-Bhat/vibe-check-mcp-server&type=Date)](https://www.star-history.com/#PV-Bhat/vibe-check-mcp-server&Date)

### Recognition
- Featured on PulseMCP “Most Popular (This Week)” front page (week of 13 Oct 2025) [🔗](https://www.pulsemcp.com/servers/pv-bhat-vibe-check)
- Listed in Anthropic’s official Model Context Protocol repo [🔗](https://github.com/modelcontextprotocol/servers?tab=readme-overview#-community-servers)
- Discoverable in the official MCP Registry [🔗](https://registry.modelcontextprotocol.io/v0/servers?search=vibe-check-mcp)
- Featured on Sean Kochel's Top 9 MCP servers for vibe coders [🔗](https://youtu.be/2wYO6sdQ9xc?si=mlVo4iHf_hPKghxc&t=1331)

## Table of Contents
- [Quickstart (npx)](#quickstart-npx)
- [What is Vibe Check MCP?](#what-is-vibe-check-mcp)
- [Overview](#overview)
- [The Problem: Pattern Inertia & Reasoning Lock-In](#the-problem-pattern-inertia--reasoning-lock-in)
- [Key Features](#key-features)
- [What's New](#whats-new-in-v280-final-maintenance-release)
- [Development Setup](#development-setup)
- [Release](#release)
- [Usage Examples](#usage-examples)
- [Adaptive Metacognitive Interrupts (CPI)](#adaptive-metacognitive-interrupts-cpi)
- [Agent Prompting Essentials](#agent-prompting-essentials)
- [When to Use Each Tool](#when-to-use-each-tool)
- [Documentation](#documentation)
- [Research & Philosophy](#research--philosophy)
- [Security](#security)
- [Roadmap](#roadmap)
- [Contributors & Community](#contributors--community)
- [FAQ](#faq)
- [Listed on](#find-vibe-check-mcp-on)
- [Credits & License](#credits--license)
---
## What is Vibe Check MCP?

Vibe Check MCP keeps agents on the minimal viable path and escalates complexity only when evidence demands it. Vibe Check MCP is a lightweight server implementing Anthropic's [Model Context Protocol](https://anthropic.com/mcp). It acts as an **AI meta-mentor** for your agents, interrupting pattern inertia with **Chain-Pattern Interrupts (CPI)** to prevent Reasoning Lock-In (RLI). Think of it as a rubber-duck debugger for LLMs – a quick sanity check before your agent goes down the wrong path.

## Overview

Vibe Check MCP pairs a metacognitive signal layer with CPI so agents can pause when risk spikes. Vibe Check surfaces traits, uncertainty, and risk scores; CPI consumes those triggers and enforces an intervention policy before the agent resumes. See the [CPI integration guide](./docs/integrations/cpi.md) and the CPI repo at https://github.com/PV-Bhat/cpi for wiring details.

Vibe Check invokes a second LLM to give meta-cognitive feedback to your main agent. Integrating vibe_check calls into agent system prompts and instructing tool calls before irreversible actions significantly improves agent alignment and common-sense. The high-level component map: [docs/architecture.md](./docs/architecture.md), while the CPI handoff diagram and example shim are captured in [docs/integrations/cpi.md](./docs/integrations/cpi.md).

## The Problem: Pattern Inertia & Reasoning Lock-In

Large language models can confidently follow flawed plans. Without an external nudge they may spiral into overengineering or misalignment. Vibe Check provides that nudge through short reflective pauses, improving reliability and safety.

## Key Features

| Feature | Description | Benefits |
|---------|-------------|----------|
| **CPI Adaptive Interrupts** | Phase-aware prompts that challenge assumptions | alignment, robustness |
| **Multi-provider LLM** | Gemini, OpenAI, Anthropic, and OpenRouter support | flexibility |
| **History Continuity** | Summarizes prior advice when `sessionId` is supplied | context retention |
| **Optional vibe_learn** | Log mistakes and fixes for future reflection | self-improvement |

## What's New in v2.8.0 (Final Maintenance Release)

> **Maintenance Notice:** This project is no longer actively maintained. It remains fully functional and available under the MIT license. Community forks are welcome. For details, see the [Changelog](./docs/changelog.md).

- **Bug fix:** `check_constitution` now returns valid MCP content types (fixes #84)
- **Security:** All dependencies updated — resolves 14 npm audit vulnerabilities (axios, MCP SDK, diff, express, and transitive deps)
- **MCP SDK 1.26:** Updated to latest SDK with critical cross-client data leakage fix; HTTP transport adapter updated for compatibility

## Session Constitution (per-session rules)

Use a lightweight “constitution” to enforce rules per `sessionId` that CPI will honor. Eg. constitution rules: “no external network calls,” “prefer unit tests before refactors,” “never write secrets to disk.”

**API (tools):**
- `update_constitution({ sessionId, rules })` → merges/sets rule set for the session
- `reset_constitution({ sessionId })` → clears session rules
- `check_constitution({ sessionId })` → returns effective rules for the session

## Development Setup
```bash
# Clone and install
git clone https://github.com/PV-Bhat/vibe-check-mcp-server.git
cd vibe-check-mcp-server
npm ci
npm run build
npm test
```
Use **npm** for all workflows (`npm ci`, `npm run build`, `npm test`). This project targets Node **>=20**.

Create a `.env` file with the API keys you plan to use:
```bash
# Gemini (default)
GEMINI_API_KEY=your_gemini_api_key
# Optional providers / Anthropic-compatible endpoints
OPENAI_API_KEY=your_openai_api_key
OPENROUTER_API_KEY=your_openrouter_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
ANTHROPIC_AUTH_TOKEN=your_proxy_bearer_token
ANTHROPIC_BASE_URL=https://api.anthropic.com
ANTHROPIC_VERSION=2023-06-01
# Optional overrides
# DEFAULT_LLM_PROVIDER accepts gemini | openai | openrouter | anthropic
DEFAULT_LLM_PROVIDER=gemini
DEFAULT_MODEL=gemini-2.5-pro
```

#### Configuration 

See [docs/TESTING.md]() for instructions on how to run tests.

### Docker
The repository includes a helper script for one-command setup.
```bash
bash scripts/docker-setup.sh
```
See [Automatic Docker Setup](./docs/docker-automation.md) for full details.

### Provider keys

See [API Keys & Secret Management](./docs/api-keys.md) for supported providers, resolution order, storage locations, and security guidance.

### Transport selection

The CLI supports stdio and HTTP transports. Transport resolution follows this order: explicit flags (`--stdio`/`--http`) → `MCP_TRANSPORT` → default `stdio`. When using HTTP, specify `--port` (or set `MCP_HTTP_PORT`); the default port is **2091**. The generated entries add `--stdio` or `--http --port <n>` accordingly, and HTTP-capable clients also receive a `http://127.0.0.1:<port>` endpoint.

### Client installers

Each installer is idempotent and tags entries with `"managedBy": "vibe-check-mcp-cli"`. Backups are written once per run before changes are applied, and merges are atomic (`*.bak` files make rollback easy). See [docs/clients.md](./docs/clients.md) for deeper client-specific references.

#### Claude Desktop

- Config path: `claude_desktop_config.json` (auto-discovered per platform).
- Default transport: stdio (`npx … start --stdio`).
- Restart Claude Desktop after installation to load the new MCP server.
- If an unmanaged entry already exists for `vibe-check-mcp`, the CLI leaves it untouched and prints a warning.

#### Cursor

- Config path: `~/.cursor/mcp.json` (provide `--config` if you store it elsewhere).
- Schema mirrors Claude’s `mcpServers` layout.
- If the file is missing, the CLI prints a ready-to-paste JSON block for Cursor’s settings panel instead of failing.

#### Windsurf (Cascade)

- Config path: legacy `~/.codeium/windsurf/mcp_config.json`, new builds use `~/.codeium/mcp_config.json`.
- Pass `--http` to emit an entry with `serverUrl` for Windsurf’s HTTP client.
- Existing sentinel-managed `serverUrl` entries are preserved and updated in place.

#### Visual Studio Code

- Workspace config lives at `.vscode/mcp.json`; profiles also store `mcp.json` in your VS Code user data directory.
- Provide `--config <path>` to target a workspace file. Without `--config`, the CLI prints a JSON snippet and a `vscode:mcp/install?...` link you can open directly from the terminal.
- VS Code supports optional dev fields; pass `--dev-watch` and/or `--dev-debug <value>` to populate `dev.watch`/`dev.debug`.

### Uninstall & rollback

- Restore the backup generated during installation (the newest `*.bak` next to your config) to revert immediately.
- To remove the server manually, delete the `vibe-check-mcp` entry under `mcpServers` (Claude/Windsurf/Cursor) or `servers` (VS Code) as long as it is still tagged with `"managedBy": "vibe-check-mcp-cli"`.

## Research & Philosophy

**CPI (Chain-Pattern Interrupt)** is the research-backed oversight method behind Vibe Check. It injects brief, well-timed “pause points” at risk inflection moments to re-align the agent to the user’s true priority, preventing destructive cascades and **reasoning lock-in (RLI)**. In pooled evaluation across 153 runs, CPI **nearly doubles success (~27%→54%) and roughly halves harmful actions (~83%→42%)**. Optimal interrupt **dosage is ~10–20%** of steps. *Vibe Check MCP implements CPI as an external mentor layer at test time.*

**Links:**  
- 📄 **CPI Paper (ResearchGate)** — http://dx.doi.org/10.13140/RG.2.2.18237.93922  
- 📘 **CPI Reference Implementation (GitHub)**: https://github.com/PV-Bhat/cpi
- 📚 **MURST Zenodo DOI (RSRC archival)**: https://doi.org/10.5281/zenodo.14851363

```mermaid
flowchart TD
  A[Agent Phase] --> B{Monitor Progress}
  B -- high risk --> C[CPI Interrupt]
  C --> D[Reflect & Adjust]
  B -- smooth --> E[Continue]
```

## Agent Prompting Essentials
In your agent's system prompt, make it clear that `vibe_check` is a mandatory tool for reflection. Always pass the full user request and other relevant context. After correcting a mistake, you can optionally log it with `vibe_learn` to build a history for future analysis.

Example snippet:
```
As an autonomous agent you will:
1. Call vibe_check after planning and before major actions.
2. Provide the full user request and your current plan.
3. Optionally, record resolved issues with vibe_learn.
```

## When to Use Each Tool
| Tool                   | Purpose                                                      |
|------------------------|--------------------------------------------------------------|
| 🛑 **vibe_check**       | Challenge assumptions and prevent tunnel vision              |
| 🔄 **vibe_learn**       | Capture mistakes, preferences, and successes                 |
| 🧰 **update_constitution** | Set/merge session rules the CPI layer will enforce         |
| 🧹 **reset_constitution**  | Clear rules for a session                                  |
| 🔎 **check_constitution**  | Inspect effective rules for a session                      |

## Documentation
- [Agent Prompting Strategies](./docs/agent-prompting.md)
- [CPI Integration](./docs/integrations/cpi.md)
- [Advanced Integration](./docs/advanced-integration.md)
- [Technical Reference](./docs/technical-reference.md)
- [Automatic Docker Setup](./docs/docker-automation.md)
- [Philosophy](./docs/philosophy.md)
- [Case Studies](./docs/case-studies.md)
- [Changelog](./docs/changelog.md)

## Security
This repository includes a CI-based security scan that runs on every pull request. It checks dependencies with `npm audit` and scans the source for risky patterns. See [SECURITY.md](./SECURITY.md) for details and how to report issues.

## Roadmap

> **Note:** This project has reached its final maintenance release (v2.8.0). The roadmap below is preserved for community forks that may wish to continue development.

- **Structured output for `vibe_check`:** Return a JSON envelope such as `{ advice, riskScore, traits }` so downstream agents can reason deterministically.
- **LLM resilience:** Wrap `generateResponse` with retries and exponential backoff.
- **Input sanitization:** Validate and cleanse tool arguments to mitigate prompt-injection vectors.
- **Prompt externalization:** Move hardcoded prompts to configuration files for transparency and auditability (see PR #71).

## Contributors & Community
Contributions are welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md).

<a href="https://github.com/PV-Bhat/vibe-check-mcp-server/graphs/contributors">
  
</a> 

## Links
* [MSEEP](https://mseep.ai/app/pv-bhat-vibe-check-mcp-server)
* [MCP Servers](https://mcpservers.org/servers/PV-Bhat/vibe-check-mcp-server)
* [MCP.so](https://mcp.so/server/vibe-check-mcp-server/PV-Bhat)
* [Creati.ai](https://creati.ai/mcp/vibe-check-mcp-server/)
* [Pulse MCP](https://www.pulsemcp.com/servers/pv-bhat-vibe-check)
* [Playbooks.com](https://playbooks.com/mcp/pv-bhat-vibe-check)
* [MCPHub.tools](https://mcphub.tools/detail/PV-Bhat/vibe-check-mcp-server)
* [MCP Directory](https://mcpdirectory.ai/mcpserver/2419/)

## Credits & License
Vibe Check MCP is released under the [MIT License](LICENSE). Built for reliable, enterprise-ready AI agents.

## Author Credits & Links
Vibe Check MCP created by: [Pruthvi Bhat](https://pruthvibhat.com/), Initiative - https://murst.org/
