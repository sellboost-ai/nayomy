---
name: "modelcontextprotocol/servers"
description: "MCP server that exercises all the features of the MCP protocol."
description_tr: "Tüm MCP protokol özelliklerini kullanan MCP sunucusu."
category: "Other Tools and Integrations"
repo: "modelcontextprotocol/servers"
stars: 87409
url: "https://github.com/modelcontextprotocol/servers"
body_length: 8413
license: "NOASSERTION"
language: "TypeScript"
homepage: "https://modelcontextprotocol.io"
body_tr: |-
  # Model Context Protocol sunucuları
  
  Bu depo, [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) için *referans uygulamaların* bir koleksiyonu ile birlikte, topluluk tarafından oluşturulan sunucuların ve ek kaynakların referanslarını içerir.
  
  > [!IMPORTANT]
  > MCP sunucularının bir listesini arıyorsanız, [MCP Registry](https://registry.modelcontextprotocol.io/) üzerinde yayınlanan sunucuları inceleyebilirsiniz. Bu README tarafından sunulan depo, yalnızca MCP yönetim grubu tarafından yönetilen az sayıdaki referans sunucuyu barındırmaya ayrılmıştır.
  
  > [!WARNING]
  > Bu depodaki sunucular, MCP özelliklerini ve SDK kullanımını göstermek için tasarlanmış **referans uygulamaları** olarak düşünülmüştür. Kendi MCP sunucularını oluşturan geliştiriciler için eğitici örnekler sunmayı amaçlarlar, üretim için hazır çözümler değildir. Geliştiriciler kendi güvenlik gereksinimlerini değerlendirmeli ve belirli tehdit modelleri ve kullanım durumlarına göre uygun önlemleri almalıdır.
  
  Bu depodaki sunucular, MCP'nin çok yönlülüğünü ve genişletilebilirliğini göstererek, Büyük Dil Modellerine (LLM'ler) araçlara ve veri kaynaklarına güvenli, kontrollü erişim sağlamak için nasıl kullanılabileceğini gösterir.
  Tipik olarak, her MCP sunucusu bir MCP SDK ile uygulanır:
  
  - [C# MCP SDK](https://github.com/modelcontextprotocol/csharp-sdk)
  - [Go MCP SDK](https://github.com/modelcontextprotocol/go-sdk)
  - [Java MCP SDK](https://github.com/modelcontextprotocol/java-sdk)
  - [Kotlin MCP SDK](https://github.com/modelcontextprotocol/kotlin-sdk)
  - [PHP MCP SDK](https://github.com/modelcontextprotocol/php-sdk)
  - [Python MCP SDK](https://github.com/modelcontextprotocol/python-sdk)
  - [Ruby MCP SDK](https://github.com/modelcontextprotocol/ruby-sdk)
  - [Rust MCP SDK](https://github.com/modelcontextprotocol/rust-sdk)
  - [Swift MCP SDK](https://github.com/modelcontextprotocol/swift-sdk)
  - [TypeScript MCP SDK](https://github.com/modelcontextprotocol/typescript-sdk)
  
  ## 🌟 Referans Sunucuları
  
  Bu sunucular, MCP özelliklerini ve resmi SDK'ları göstermeyi amaçlarlar.
  
  - **[Everything](src/everything)** - Komutlar, kaynaklar ve araçlara sahip referans / test sunucusu.
  - **[Fetch](src/fetch)** - Verimli LLM kullanımı için web içeriği getirme ve dönüştürme.
  - **[Filesystem](src/filesystem)** - Yapılandırılabilir erişim kontrolleri ile güvenli dosya işlemleri.
  - **[Git](src/git)** - Git depolarını okumak, aramak ve işlemek için araçlar.
  - **[Memory](src/memory)** - Bilgi grafiğine dayalı kalıcı bellek sistemi.
  - **[Sequential Thinking](src/sequentialthinking)** - Düşünce dizileri aracılığıyla dinamik ve reflektif problem çözme.
  - **[Time](src/time)** - Zaman ve saat dilimi dönüştürme yetenekleri.
  
  ### Arşivlendi
  
  Aşağıdaki referans sunucuları artık arşivlenmiş ve [servers-archived](https://github.com/modelcontextprotocol/servers-archived) adresinde bulunabilir.
  
  - **[AWS KB Retrieval](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/aws-kb-retrieval-server)** - Bedrock Agent Runtime kullanarak AWS Knowledge Base'den alma.
  - **[Brave Search](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/brave-search)** - Brave'in Search API'sini kullanarak web ve yerel arama. [Resmi sunucu](https://github.com/brave/brave-search-mcp-server) tarafından değiştirilmiştir.
  - **[EverArt](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/everart)** - Çeşitli modeller kullanarak yapay zeka resim oluşturma.
  - **[GitHub](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/github)** - Depo yönetimi, dosya işlemleri ve GitHub API entegrasyonu.
  - **[GitLab](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/gitlab)** - GitLab API, proje yönetimini sağlar.
  - **[Google Drive](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/gdrive)** - Google Drive için dosya erişimi ve arama yetenekleri.
  - **[Google Maps](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/google-maps)** - Konum hizmetleri, yönler ve yer detayları.
  - **[PostgreSQL](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/postgres)** - Şema incelemesi ile yalnızca okunur veritabanı erişimi.
  - **[Puppeteer](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/puppeteer)** - Tarayıcı otomasyonu ve web kazıma.
  - **[Redis](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/redis)** - Redis anahtar-değer depoları ile etkileşim.
  - **[Sentry](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/sentry)** - Sentry.io'dan sorunları alma ve analiz etme.
  - **[Slack](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/slack)** - Kanal yönetimi ve mesajlaşma yetenekleri. Şimdi [Zencoder](https://github.com/zencoderai/slack-mcp-server) tarafından yönetilmektedir
  - **[SQLite](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/sqlite)** - Veritabanı etkileşimi ve işletme zekası yetenekleri.
  
  ## 📚 Çerçeveleri
  
  Bunlar, MCP sunucuları veya istemcileri oluşturmayı kolaylaştıran üst düzey çerçevelerdir.
  
  ### Sunucular için
  
  * **[Anubis MCP](https://github.com/zoedsoupe/anubis-mcp)** (Elixir) - Elixir'de yüksek performanslı ve üst düzey Model Context Protocol (MCP) uygulaması. MCP için "Live View" gibi düşünün.
  * **[ModelFetch](https://github.com/phuctm97/modelfetch/)** (TypeScript) - MCP sunucuları oluşturmak ve TypeScript/JavaScript çalışan herhangi bir yere dağıtmak için runtime'dan bağımsız SDK
  * **[EasyMCP](https://github.com/zcaceres/easy-mcp/)** (TypeScript)
  * **[FastAPI to MCP auto generator](https://github.com/tadata-org/fastapi_mcp)** – **[Tadata](https://tadata.com/)** tarafından FastAPI uç noktalarını MCP araçları olarak otomatik olarak açığa çıkarmak için sıfır konfigürasyon aracı
  * **[FastMCP](https://github.com/punkpeye/fastmcp)** (TypeScript)
  * **[Foobara MCP Connector](https://github.com/foobara/mcp-connector)** - Ruby'de yazılmış Foobara komutlarını MCP aracılığıyla araç olarak kolayca açığa çıkartın
  * **[Foxy Contexts](https://github.com/strowk/foxy-contexts)** – **[strowk](https://github.com/strowk)** tarafından Golang'da MCP sunucuları oluşturmak için bir kütüphane
  * **[Higress MCP Server Hosting](https://github.com/alibaba/higress/tree/main/plugins/wasm-go/mcp-servers)** - API Gateway'i (Envoy tabanlı) wasm eklentileriyle genişleterek MCP Sunucuları barındırmak için bir çözüm.
  * **[MCP Declarative Java SDK](https://github.com/codeboyzhou/mcp-declarative-java-sdk)** Ek açıklamalarla yönlendirilen MCP sunucusu geliştirmesi Java ile, Spring Framework gerekmez, bağımlılıkları minimuma indirin.
  * **[MCP-Framework](https://mcp-framework.com)** TypeScript'te MCP sunucuları elegance ve hız ile oluşturun. `mcp create app` komutuyla projenizi oluşturmak için bir CLI ile gelir. **[Alex Andru](https://github.com/QuantGeekDev)** tarafından 5 dakikadan kısa sürede ilk sunucunuzla başlayın
  * **[MCP Plexus](https://github.com/Super-I-Tech/mcp_plexus)**: Harici hizmetleri OAuth 2.1 aracılığıyla kolayca entegre etmek, karmaşık AI uygulamalarını yönetmek için ölçeklenebilir ve sağlam çözümler sunmak için tasarlanmış güvenli, **çok kiracılı** ve çok kullanıcılı MCP python sunucu çerçevesi.
  * **[mcp_sse (Elixir)](https://github.com/kEND/mcp_sse)** MCP sunucuları hızlı bir şekilde oluşturmak için Elixir'de SSE uygulaması.
  * **[mxcp](https://github.com/raw-labs/mxcp)** (Python) - Yalnızca YAML, SQL ve Python kullanarak, yerleşik auth, monitoring, ETL ve politika zorlaması ile kurumsal düzey MCP sunucuları oluşturmak için açık kaynak çerçevesi.
  * **[Next.js MCP Server Template](https://github.com/vercel-labs/mcp-for-next.js)** (TypeScript) - MCP istemcilerinin bağlanmasına ve kaynaklara erişmesine izin vermek için MCP Adaptörünü kullanan bir başlangıç Next.js projesi.
  * **[PayMCP](https://github.com/blustAI/paymcp)** (Python & TypeScript) - MCP sunucuları için hafif ödeme katmanı: araçları iki satırlık dekoratör ile ücretli uç noktalara dönüştürün. [PyPI](https://pypi.org/project/paymcp/) · [npm](https://www.npmjs.com/package/paymcp) · [TS depo](https://github.com/blustAI/paymcp-ts)
  * **[Perl SDK](https://github.com/mojolicious/mojo-mcp)** - Perl programlama dilinde MCP sunucuları ve istemcileri oluşturmak için bir SDK.
  * **[Quarkus MCP Server SDK](https://github.com/quarkiverse/quarkus-mcp-server)** (Java)
  - **[R mcptools](https://github.com/posit-dev/mcptools)** - R tabanlı MCP sunucuları oluşturmak ve üçüncü taraf MCP sunucularından işlevselliği R fonksiyonları olarak almak için bir R SDK.
  * **[SAP ABAP MCP Server SDK](https://github.com/abap-ai/mcp)** - SAP ABAP tabanlı MCP sunucuları oluşturun. ABAP 7.52 tabanlı 7.02 downport ile; R/3 & S/4HANA şirket içi çalışır, şu anda bulut hazır değil.
  * **[Spring AI MCP Server](https://docs.spring.io/spring-ai/reference/api/mcp/mcp-server-boot-starter-docs.html)** - Spring Boot uygulamalarında bir MCP sunucusu kurmak için oto-yapılandırma sağlar.
  * **[Template MCP Server](https://github.com/mcpdotdirect/template-mcp-server)** - TypeScript desteği, çift transport seçenekleri ve genişletilebilir yapı ile yeni bir Model Context Protocol sunucusu projesi oluşturmak için bir CLI aracı
  * **[AgentR Universal MCP SDK](https://github.com/universal-mcp/universal-mcp)** - **[Agentr](https://agentr.dev/home)** tarafından yerleşik kimlik bilgisi yönetimi ile MCP Sunucuları oluşturmak için bir python SDK
  * **[Vercel MCP Adapter](https://github.com/vercel/mcp-adapter)** (TypeScript) - Next, Nuxt, Svelte ve daha fazlası gibi çoğu büyük JS meta-çerçevesinde bir MCP sunucusu sunmaya başlamak için basit bir paket.
  * **[PHP MCP Server](https://github.com/php-mcp/server)** (PHP) - Model Context Protocol (MCP) sunucusu için temel PHP uygulaması
  
  ### İstemciler için
  
  * **[codemirror-mcp](https://github.com/marimo-team/codemirror-mcp)** - Kaynak bahsetmeleri ve istem komutları için Model Context Protocol (MCP) uygulayan CodeMirror uzantısı
  * **[llm-analysis-assistant](https://github.com/xuzexin-hz/llm-analysis-assistant)** - stdio/sse/streamableHttp çağırma ve izlemeyi destekleyen çok basitleştirilmiş bir mcp istemcisi, ayrıca /logs sayfası aracılığıyla istek yanıtlarını görüntüleyebilir. Ayrıca ollama/openai arayüzünün izlenmesini ve simülasyonunu destekler.
  * **[MCP-Agent](https://github.com/lastmile-ai/mcp-agent)** - **[LastMile AI](https://www.lastmileai.dev)** tarafından Model Context Protocol kullanarak ajanlar oluşturmak için basit, bileşenleştirilebilir bir çerçeve
  * **[Spring AI MCP Client](https://docs.spring.io/spring-ai/reference/api/mcp/mcp-client-boot-starter-docs.html)** - Spring Boot uygulamalarında MCP istemci işlevselliği için oto-yapılandırma sağlar.
  * **[MCP CLI Client](https://github.com/vincent-pli/mcp-cli-host)** - Büyük Dil Modellerinin (LLM'ler) Model Context Protocol (MCP) aracılığıyla harici araçlarla etkileşim kurmasını sağlayan bir CLI ana uygulama.
  * **[OpenMCP Client](https://github.com/LSTM-Kirigaya/openmcp-client/)** - MCP sunucusu hata ayıklaması için hepsi bir arada vscode/trae/cursor eklentisi. [Belge](https://kirigaya.cn/openmcp/) & [OpenMCP SDK](https://kirigaya.cn/openmcp/sdk-tutorial/).
  * **[PHP MCP Client](https://github.com/php-mcp/client)** - Model Context Protocol (MCP) İstemcisi için temel PHP uygulaması
  * **[Runbear](https://runbear.io/solutions/integrations/slack/mcp)** - Slack, Microsoft Teams ve Discord gibi takım sohbet platformları için kodsuz MCP istemcisi.
  
  ## 📚 Kaynaklar
  
  MCP hakkında ek kaynaklar.
  
  - **[A2A-MCP Java Bridge](https://github.com/vishalmysore/a2ajava)** - A2AJava, güçlü A2A-MCP entegrasyonunu doğrudan Java uygulamalarınıza getirir. Geliştiricilerin standart Java yöntemlerine ek açıklama koymasını ve bunları anında MCP Sunucusu, A2A-keşfedilir eylemler olarak açığa çıkartmasını sağlar — herhangi bir boilerplate veya hizmet kaydı ek yükü olmaksızın.
  - **[AiMCP](https://www.aimcp.info)** - Doğru mcp araçlarını bulmak için **[Hekmon](https://github.com/hekmon8)** tarafından MCP istemcileri ve sunucularının bir koleksiyonu
  - **[Awesome Crypto MCP Servers by badkk](https://github.com/badkk/awesome-crypto-mcp-servers)** - **[Luke Fan](https://github.com/badkk)** tarafından seçilmiş MCP sunucuları listesi
  - **[Awesome MCP Servers by appcypher](https://github.com/appcypher/awesome-mcp-servers)** - **[Stephen Akinyemi](https://github.com/appcypher)** tarafından seçilmiş MCP sunucuları listesi
  - **[Awesome MCP Servers by punkpeye](https://github.com/punkpeye/awesome-mcp-servers)** (**[website](https://glama.ai/mcp/servers)**) - **[Frank Fiegel](https://github.com/punkpeye)** tarafından seçilmiş MCP sunucuları listesi
  - **[Awesome MCP Servers by wong2](https://github.com/wong2/awesome-mcp-servers)** (**[website](https://mcpservers.org)**) - **[wong2](https://github.com/wong2)** tarafından seçilmiş MCP sunucuları listesi
  - **[Awesome Remote MCP Servers by JAW9C](https://github.com/jaw9c/awesome-remote-mcp-servers)** - **[JAW9C](https://github.com/jaw9c)** tarafından kimlik doğrulama desteği de dahil olmak üzere **uzak** MCP sunucularının seçilmiş listesi
  - **[Discord Server](https://glama.ai/mcp/discord)** – **[Frank Fiegel](https://github.com/punkpeye)** tarafından MCP'ye adanmış bir topluluk discord sunucusu
  - **[Install This MCP](https://installthismcp.com)** - Güzel kurulum kılavuzları ile Kurulum Friki'ni azaltın
  -  **[Klavis AI](https://www.klavis.ai)** - Açık Kaynak MCP Altyapısı. Slack ve Discord'da barındırılan MCP sunucuları ve MCP istemcileri.
  - **[MCP Badges](https://github.com/mcpx-dev/mcp-badges)** – **[Ironben](https://github.com/nanbingxyz)** tarafından MCP projenizi açık, göz alıcı rozetlerle hızlıca vurgulayın
  -  **[MCPProxy](https://github.com/smart-mcp-proxy/mcpproxy-go)** - Açık kaynak yerel uygulaması, MCP protokolü aracılığıyla akıllı keşif ile birden fazla MCP sunucusuna ve binlerce araca erişim sağlar, sunucuları yalıtılmış ortamlarda çalıştırır ve kötü niyetli araçlara karşı otomatik karantina koruması sunar.
  - **[MCPRepository.com](https://mcprepository.com/)** - Kolay keşif için tüm MCP sunucularını dizine alan ve düzenleyen bir depo.
  - **[mcp-cli](https://github.com/wong2/mcp-cli)** - **[wong2](https://github.com/wong2)** tarafından Model Context Protocol için bir CLI incelemecisi
  - **[mcp-dockmaster](https://mcp-dockmaster.com)** - Windows, Linux ve macOS için MCP sunucularını yükleme ve yönetme için Açık Kaynak kullanıcı arayüzü.
  - **[mcp-get](https://mcp-get.com)** - **[Michael Latman](https://github.com/michaellatman)** tarafından MCP sunucularını yükleme ve yönetme için komut satırı aracı
  - **[mcp-guardian](https://github.com/eqtylab/mcp-guardian)** - **[EQTY Lab](https://eqtylab.io)** tarafından MCP sunucularını yakınlaştırma / yönetim kontrolü için GUI uygulaması + araçları
  - **[MCP Linker](https://github.com/milisp/mcp-linker)** - Claude Desktop, Cursor, Windsurf, VS Code, Cline ve Neovim'i destekleyen, MCP sunucularının tek tıklamalı kurulumu ve yönetimi için platformlar arası Tauri GUI aracı.
  - **[mcp-manager](https://github.com/zueai/mcp-manager)** - Claude Desktop için MCP sunucularını yükleme ve yönetme için Basit Web UI **[Zue](https://github.com/zueai)** tarafından
  - **[MCP Marketplace Web Plugin](https://github.com/AI-Agent-Hub/mcp-marketplace)** MCP Marketplace, AI uygulamalarıyla entegre olmak için küçük bir Web UX eklentisidir, çeşitli MCP Server API Uç Noktalarını (ör. pulsemcp.com/deepnlp.org ve daha fazlası) destekler. Kullanıcıların çeşitli kategorilere göre çeşitli MCP sunucularına göz atmasına, sayfalandırmasına ve seçmesine izin verir. [Pypi](https://pypi.org/project/mcp-marketplace) | [Maintainer](https://github.com/AI-Agent-Hub) | [Website](http://www.deepnlp.org/store/ai-agent/mcp-server)
  - **[mcp.natoma.ai](https://mcp.natoma.ai)** – **[Natoma Labs](https://www.natoma.ai)** tarafından MCP sunucularını bulma, yükleme, yönetme ve dağıtma için Barındırılan bir MCP Platform
  - **[mcp.run](https://mcp.run)** - MCP Sunucuları'nı yükleme ve çalıştırmak için barındırılan bir kayıt defteri ve kontrol düzlemi.
  - **[MCPHub](https://www.mcphub.com)** - Yüksek kaliteli MCP sunucularını ve gerçek kullanıcılardan gelen incelemelerini listelemek için bir web sitesi. Ayrıca MCP sunucusu desteği ile popüler LLM modelleri için çevrimiçi sohbet robotu sağlar.
  - **[MCP Router](https://mcp-router.net)** – **[MCP Router](https://github.com/mcp-router/mcp-router)** tarafından kusursuz uygulama kimlik doğrulaması ve güçlü günlük görselleştirmesi sağlayan MCP yönetimini basitleştiren ücretsiz Windows ve macOS uygulaması
  - **[MCP Servers Hub](https://github.com/apappascs/mcp-servers-hub)** (**[website](https://mcp-servers-hub-website.pages.dev/)**) - **[apappascs](https://github.com/apappascs)** tarafından seçilmiş MCP sunucuları listesi
  - **[MCPServers.com](https://mcpservers.com)** - **[Highlight MCP istemcisinin](https://highlightai.com/)** arkasındaki ekip tarafından oluşturulan çeşitli MCP istemcileri için açık kurulum kılavuzları olan yüksek kaliteli MCP sunucularının artan bir dizini.
  - **[MCP Servers Rating and User Reviews](http://www.deepnlp.org/store/ai-agent/mcp-server)** - MCP sunucularını derecelendirmek, orijinal kullanıcı incelemelerini yazmak ve [ajan & mcp arama motoru](http://www.deepnlp.org/search/agent)
  - **[MCP Sky](https://bsky.app/profile/brianell.in/feed/mcp)** - **[@brianell.in](https://bsky.app/profile/brianell.in)** tarafından MCP ile ilgili haberler ve tartışmalar için Bluesky beslemesi
  - **[MCP X Community](https://x.com/i/communities/1861891349609603310)** – **[Xiaoyi](https://x.com/chxy)** tarafından MCP için bir X topluluğu
  - **[MCPHub](https://github.com/Jeamee/MCPHub-Desktop)** – **[Jeamee](https://github.com/jeamee)** tarafından MCP sunucularını bulma, yükleme ve yönetme için Açık Kaynak macOS & Windows GUI Masaüstü uygulaması
  - **[mcpm](https://github.com/pathintegral-institute/mcpm.sh)** ([website](https://mcpm.sh)) - MCP Manager (MCPM), **[Pathintegral](https://github.com/pathintegral-institute)** tarafından istemciler arasında Model Context Protocol (MCP) sunucularını yönetmek için Homebrew benzeri bir hizmet
  - **[MCPVerse](https://mcpverse.dev)** - Kimliği doğrulanmış MCP sunucuları oluşturma ve barındırma ve bunlara güvenli bir şekilde bağlanma portalı.
  - **[MCP Servers Search](https://github.com/atonomus/mcp-servers-search)** - Mevcut MCP sunucularını sorgulama ve keşfetme için araçlar sağlayan bir MCP sunucusu.
  - **[Search MCP Server](https://github.com/krzysztofkucmierz/search-mcp-server)** - İstemcinin sorgusuna göre bu README dosyasını arayarak en alakalı MCP sunucularını önerir.
  - **[MCPWatch](https://github.com/kapilduraphe/mcp-watch)** - Model Context Protocol (MCP) sunucularında güvenlik açıklarını ve güvenlik sorunlarını algılayan kapsamlı bir güvenlik tarayıcısı.
  -  **[mkinf](https://mkinf.io)** - AI ajan iş akışlarını hızlandırmak için barındırılan MCP Sunucuları'nın Açık Kaynak kayıt defteri.
  - **[Open-Sourced MCP Servers Directory](https://github.com/chatmcp/mcp-directory)** - **[mcpso](https://mcp.so)** tarafından seçilmiş MCP sunucuları listesi
  -  **[OpenTools](https://opentools.com)** - MCP sunucularını bulma, yükleme ve oluşturma için açık bir kayıt defteri **[opentoolsteam](https://github.com/opentoolsteam)** tarafından
  - **[Programmatic MCP Prototype](https://github.com/domdomegg/programmatic-mcp-prototype)** - **[Adam Jones](https://github.com/domdomegg)** tarafından programlı MCP araç bileşimi, aşamalı araç keşfi, durum kalıcılığı ve TypeScript kodu yürütme aracılığıyla beceri oluşturmayı gösteren deneysel ajan prototipi
  - **[PulseMCP](https://www.pulsemcp.com)** ([API](https://www.pulsemcp.com/api)) - **[Tadas Antanavicius](https://github.com/tadasant)**, **[Mike Coughlin](https://github.com/macoughl)** ve **[Ravina Patel](https://github.com/ravinahp)** tarafından MCP sunucuları, istemcileri, makaleleri ve haberleri keşfetmek için topluluk merkezi ve haftalık haber bülteni
  - **[r/mcp](https://www.reddit.com/r/mcp)** – **[Frank Fiegel](https://github.com/punkpeye)** tarafından MCP'ye adanmış bir Reddit topluluğu
  - **[MCP.ing](https://mcp.ing/)** - Toplulukta MCP sunucularını bulma ve MCP hizmetleri için uygun bir arama iş
---

# Model Context Protocol servers

This repository is a collection of *reference implementations* for the [Model Context Protocol](https://modelcontextprotocol.io/) (MCP), as well as references to community-built servers and additional resources.

> [!IMPORTANT]
> If you are looking for a list of MCP servers, you can browse published servers on [the MCP Registry](https://registry.modelcontextprotocol.io/). The repository served by this README is dedicated to housing just the small number of reference servers maintained by the MCP steering group.

> [!WARNING]
> The servers in this repository are intended as **reference implementations** to demonstrate MCP features and SDK usage. They are meant to serve as educational examples for developers building their own MCP servers, not as production-ready solutions. Developers should evaluate their own security requirements and implement appropriate safeguards based on their specific threat model and use case.

The servers in this repository showcase the versatility and extensibility of MCP, demonstrating how it can be used to give Large Language Models (LLMs) secure, controlled access to tools and data sources.
Typically, each MCP server is implemented with an MCP SDK:

- [C# MCP SDK](https://github.com/modelcontextprotocol/csharp-sdk)
- [Go MCP SDK](https://github.com/modelcontextprotocol/go-sdk)
- [Java MCP SDK](https://github.com/modelcontextprotocol/java-sdk)
- [Kotlin MCP SDK](https://github.com/modelcontextprotocol/kotlin-sdk)
- [PHP MCP SDK](https://github.com/modelcontextprotocol/php-sdk)
- [Python MCP SDK](https://github.com/modelcontextprotocol/python-sdk)
- [Ruby MCP SDK](https://github.com/modelcontextprotocol/ruby-sdk)
- [Rust MCP SDK](https://github.com/modelcontextprotocol/rust-sdk)
- [Swift MCP SDK](https://github.com/modelcontextprotocol/swift-sdk)
- [TypeScript MCP SDK](https://github.com/modelcontextprotocol/typescript-sdk)

## 🌟 Reference Servers

These servers aim to demonstrate MCP features and the official SDKs.

- **[Everything](src/everything)** - Reference / test server with prompts, resources, and tools.
- **[Fetch](src/fetch)** - Web content fetching and conversion for efficient LLM usage.
- **[Filesystem](src/filesystem)** - Secure file operations with configurable access controls.
- **[Git](src/git)** - Tools to read, search, and manipulate Git repositories.
- **[Memory](src/memory)** - Knowledge graph-based persistent memory system.
- **[Sequential Thinking](src/sequentialthinking)** - Dynamic and reflective problem-solving through thought sequences.
- **[Time](src/time)** - Time and timezone conversion capabilities.

### Archived

The following reference servers are now archived and can be found at [servers-archived](https://github.com/modelcontextprotocol/servers-archived).

- **[AWS KB Retrieval](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/aws-kb-retrieval-server)** - Retrieval from AWS Knowledge Base using Bedrock Agent Runtime.
- **[Brave Search](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/brave-search)** - Web and local search using Brave's Search API.  Has been replaced by the [official server](https://github.com/brave/brave-search-mcp-server).
- **[EverArt](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/everart)** - AI image generation using various models.
- **[GitHub](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/github)** - Repository management, file operations, and GitHub API integration.
- **[GitLab](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/gitlab)** - GitLab API, enabling project management.
- **[Google Drive](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/gdrive)** - File access and search capabilities for Google Drive.
- **[Google Maps](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/google-maps)** - Location services, directions, and place details.
- **[PostgreSQL](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/postgres)** - Read-only database access with schema inspection.
- **[Puppeteer](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/puppeteer)** - Browser automation and web scraping.
- **[Redis](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/redis)** - Interact with Redis key-value stores.
- **[Sentry](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/sentry)** - Retrieving and analyzing issues from Sentry.io.
- **[Slack](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/slack)** - Channel management and messaging capabilities. Now maintained by [Zencoder](https://github.com/zencoderai/slack-mcp-server)
- **[SQLite](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/sqlite)** - Database interaction and business intelligence capabilities.

## 🚀 Getting Started

### Using MCP Servers in this Repository
TypeScript-based servers in this repository can be used directly with `npx`.

For example, this will start the [Memory](src/memory) server:
```sh
npx -y @modelcontextprotocol/server-memory
```

Python-based servers in this repository can be used directly with [`uvx`](https://docs.astral.sh/uv/concepts/tools/) or [`pip`](https://pypi.org/project/pip/). `uvx` is recommended for ease of use and setup.

For example, this will start the [Git](src/git) server:
```sh
# With uvx
uvx mcp-server-git

# With pip
pip install mcp-server-git
python -m mcp_server_git
```

Follow [these](https://docs.astral.sh/uv/getting-started/installation/) instructions to install `uv` / `uvx` and [these](https://pip.pypa.io/en/stable/installation/) to install `pip`.

### Using an MCP Client
However, running a server on its own isn't very useful, and should instead be configured into an MCP client. For example, here's the Claude Desktop configuration to use the above server:

```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    }
  }
}
```

On Windows, wrap `npx` with `cmd /c`:

```json
{
  "mcpServers": {
    "memory": {
      "command": "cmd",
      "args": ["/c", "npx", "-y", "@modelcontextprotocol/server-memory"]
    }
  }
}
```

Additional examples of using the Claude Desktop as an MCP client might look like:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/files"]
    },
    "git": {
      "command": "uvx",
      "args": ["mcp-server-git", "--repository", "path/to/git/repo"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>"
      }
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost/mydb"]
    }
  }
}
```

On Windows, apply the same wrapper to each `npx`-based entry above by changing `"command"` to `"cmd"` and prepending `"/c", "npx"` to the existing `args`. Leave `uvx` entries unchanged.

## 🛠️ Creating Your Own Server

Interested in creating your own MCP server? Visit the official documentation at [modelcontextprotocol.io](https://modelcontextprotocol.io/introduction) for comprehensive guides, best practices, and technical details on implementing MCP servers.

## 📚 Learn More

See [ADDITIONAL.md](ADDITIONAL.md) for a curated list of frameworks and resources that simplify building MCP servers and clients.

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for information about contributing to this repository.

## 🔒 Security

See [SECURITY.md](SECURITY.md) for reporting security vulnerabilities.

## 📜 License

This project is licensed under the Apache License, Version 2.0 for new contributions, with existing code under MIT - see the [LICENSE](LICENSE) file for details.

## 💬 Community

- [GitHub Discussions](https://github.com/orgs/modelcontextprotocol/discussions)

## ⭐ Support

If you find MCP servers useful, please consider starring the repository and contributing new servers or improvements!

---

Managed by Anthropic, but built together with the community. The Model Context Protocol is open source and we encourage everyone to contribute their own servers and improvements!
