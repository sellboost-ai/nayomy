---
name: "googleapis/genai-toolbox"
description: "Open source MCP server specializing in easy, fast, and secure tools for Databases."
description_tr: "Veritabanları için kolay, hızlı ve güvenli araçlar sunan açık kaynak MCP sunucusu."
category: "Databases"
repo: "googleapis/genai-toolbox"
stars: 15344
url: "https://github.com/googleapis/genai-toolbox"
body_length: 31861
license: "Apache-2.0"
language: "Go"
homepage: "https://mcp-toolbox.dev/documentation/introduction/"
body_tr: |-
  <div align="center">

  ![logo](https://raw.githubusercontent.com/googleapis/genai-toolbox/HEAD/logo.png)

  # Veritabanları İçin MCP Toolbox

  <a href="https://trendshift.io/repositories/13019" target="_blank"></a>

  [![Go Report Card](https://goreportcard.com/badge/github.com/googleapis/mcp-toolbox)](https://goreportcard.com/report/github.com/googleapis/mcp-toolbox)
  [![License: Apache
  2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  [![Docs](https://img.shields.io/badge/Docs-MCP_Toolbox-blue)](https://mcp-toolbox.dev/)
  [![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=flat&logo=discord&logoColor=white)](https://discord.gg/Dmm69peqjh)
  [![Medium](https://img.shields.io/badge/Medium-12100E?style=flat&logo=medium&logoColor=white)](https://medium.com/@mcp_toolbox)

  [![Python SDK](https://img.shields.io/pypi/v/toolbox-core?logo=python&logoColor=white&label=Python%20SDK)](https://pypi.org/project/toolbox-core/)
  [![JS/TS SDK](https://img.shields.io/npm/v/@toolbox-sdk/core?logo=javascript&logoColor=white&label=JS%20SDK)](https://www.npmjs.com/package/@toolbox-sdk/core)
  [![Go SDK](https://img.shields.io/github/v/release/googleapis/mcp-toolbox-sdk-go?logo=go&logoColor=white&label=Go%20SDK)](https://pkg.go.dev/github.com/googleapis/mcp-toolbox-sdk-go)
  [![Java SDK](https://img.shields.io/maven-central/v/com.google.cloud.mcp/mcp-toolbox-sdk-java?logo=apache-maven&logoColor=white&label=Java%20SDK)](https://mvnrepository.com/artifact/com.google.cloud.mcp/mcp-toolbox-sdk-java)
  </div>

  Veritabanları İçin MCP Toolbox, AI ajanlarınızı, IDE'lerinizi ve uygulamalarınızı doğrudan kurumsal veritabanlarınıza bağlayan açık kaynaklı bir Model Context Protocol (MCP) sunucusudur.

  <p align="center">

  </p>

  **İkili bir amaca hizmet eder**:
  1. **Hazır Kullanıma Sunulan MCP Sunucusu (Derleme Zamanı):** Gemini CLI, Google Antigravity, Claude Code, Codex veya diğer MCP istemcilerini *önceden oluşturulmuş genel araçlar* kullanarak veritabanlarınıza anında bağlayın. Verilerinizle konuşun, şemaları keşfedin ve boilerplate yazmadan kod oluşturun.
  2. **Özel Araçlar Çerçevesi (Çalışma Zamanı):** Üretim ajanları için özelleştirilmiş, yüksek düzeyde güvenli AI araçları geliştirmek için sağlam bir çerçeve. Yapılandırılmış sorguları, anlamsal aramayı ve NL2SQL özelliklerini güvenli ve kolay bir şekilde tanımlayın.


  Bu README kısa bir özet sağlamaktadır. Kapsamlı ayrıntılar için [tam belgelendirmeyi](https://mcp-toolbox.dev/) inceleyin.

  > [!IMPORTANT]  
  > **Depo Adı Güncellemesi:** `genai-toolbox` deposu resmi olarak `mcp-toolbox` olarak yeniden adlandırılmıştır. Yerel ortamınızı yeni adla senkronize etmek için uzak kaynağınızı güncelleme yapabilirsiniz:
  > `git remote set-url origin https://github.com/googleapis/mcp-toolbox.git`

  > [!NOTE]
  > Bu çözüm başlangıçta "Veritabanları İçin Gen AI Toolbox" (github.com/googleapis/genai-toolbox) olarak adlandırılmıştır; bu ad ilk geliştirme MCP'den daha öncesine dayanır, ancak MCP uyumluluğu sağlamak için yeniden adlandırılmıştır.

  <!-- TOC ignore:true -->
  ## İçindekiler

  - [Neden MCP Toolbox?](#neden-mcp-toolbox)
  - [Hızlı Başlangıç: Hazır Araçlar](#hızlı-başlangıç-hazır-araçlar)
  - [Hızlı Başlangıç: Özel Araçlar](#hızlı-başlangıç-özel-araçlar)
  - [Toolbox Sunucusunu Yükleyin ve Çalıştırın](#toolbox-sunucusunu-yükleyin-ve-çalıştırın)
  - [Toolbox'a Bağlanın](#toolboxa-bağlanın)
    - [MCP İstemcisi](#mcp-istemcisi)
    - [Toolbox SDK'ları: Uygulamanızla Entegre Olun](#toolbox-sdkları-uygulamanızla-entegre-olun)
  - [Ek Özellikler](#ek-özellikler)
  - [Sürüm Kontrolü](#sürüm-kontrolü)
  - [Katkıda Bulunma](#katkıda-bulunma)
  - [Topluluk](#topluluk)

  ---

  ## Neden MCP Toolbox?

  - **Hazır Veritabanı Erişimi:** IDE veya CLI'dan anında veri keşfi için önceden oluşturulmuş genel araçlar (ör. `list_tables`, `execute_sql`).
  - **Özel Araçlar Çerçevesi:** Kendi önceden tanımlanmış mantığınızla üretim hazır araçlar oluşturun; Sınırlı Erişim, Yapılandırılmış Sorgular ve Anlamsal Arama yoluyla güvenlik sağlanır.
  - **Basitleştirilmiş Geliştirme:** Araçları Agent Development Kit (ADK), LangChain, LlamaIndex veya özel ajanlar içine 10 satırdan az kodla entegre edin.
  - **Daha İyi Performans:** Bağlantı havuzu yönetimi, entegre auth (IAM) ve uçtan uca gözlemlenebilirlik (OpenTelemetry) kutudan çıktığında kullanıma sunulur.
  - **Geliştirilmiş Güvenlik**: Verilerinize daha güvenli erişim için entegre kimlik doğrulama.
  - **Uçtan Uca Gözlemlenebilirlik**: OpenTelemetry desteğiyle kutudan çıktığında metrikler ve izleme.

  ---

  ## Hızlı Başlangıç: Hazır Araçlar

  Bağlam değiştirmeyi bırakın ve AI asistanınızı gerçek bir yer ortağı yapın. MCP Toolbox ile IDE'nizi veritabanlarınıza bağlayarak, verilerinizi düz İngilizce ile sorgulayabilir, şema keşfi ve yönetimini otomatikleştirebilir ve veritabanı bilgisine sahip kod oluşturabilirsiniz.

  Toolbox'u herhangi bir MCP uyumlu IDE veya istemcide (ör. Gemini CLI, Google Antigravity, Claude Code, Codex, vb.) MCP sunucusunu yapılandırarak kullanabilirsiniz.

  **Hazır araçlar ayrıca [Google Antigravity MCP Store](https://antigravity.google/docs/mcp) aracılığıyla basit bir tıkla kurulum deneyimiyle kullanılabilir.**

  1. İstemcinizin MCP yapılandırma dosyasına (genellikle `mcp.json` veya `claude_desktop_config.json`) aşağıdakini ekleyin:

      ```json
      {
        "mcpServers": {
          "toolbox-postgres": {
            "command": "npx",
            "args": [
              "-y",
              "@toolbox-sdk/server",
              "--prebuilt=postgres",
              "--stdio"
            ]
          }
        }
      }
      ```

  2. Bağlanmak için uygun ortam değişkenlerini ayarlayın, bkz. [Hazır Araçlar Referansı](https://mcp-toolbox.dev/documentation/configuration/prebuilt-configs/).

  Toolbox'u `--prebuilt=<database>` bayrağı ile çalıştırdığınızda, o veritabanıyla etkileşim kurmanız için anında standart araçlara erişebilirsiniz.

  Şu anda desteklenen veritabanları şunları içerir:
  - **Google Cloud:** AlloyDB, BigQuery, Cloud SQL (PostgreSQL, MySQL, SQL Server), Spanner, Firestore, Knowledge Catalog (daha önce Dataplex olarak bilinirdi).
  - **Diğer Veritabanları:** PostgreSQL, MySQL, SQL Server, Oracle, MongoDB, Redis, Elasticsearch, CockroachDB, ClickHouse, Couchbase, Neo4j, Snowflake, Trino ve daha fazlası.

  Tüm desteklenen veritabanları genelinde kullanılabilir araçların ve yeteneklerinin tam listesi için [Hazır Araçlar Referansı](https://mcp-toolbox.dev/documentation/configuration/prebuilt-configs/) bölümüne bakın.

  *Docker veya ikili dosyalar gibi farklı yürütme yöntemleri için [Toolbox Sunucusunu Yükleyin ve Çalıştırın](#toolbox-sunucusunu-yükleyin-ve-çalıştırın) bölümüne bakın.*


  > [!TIP]
  > Yönetilen bir çözüm arayan kullanıcılar için [Google Cloud MCP Sunucuları](https://cloud.google.com/blog/products/databases/managed-mcp-servers-for-google-cloud-databases) 
  > önceden oluşturulmuş araçlarla yönetilen bir MCP deneyimi sağlar; [burada farklılıklar hakkında bilgi edinebilirsiniz](https://mcp-toolbox.dev/dev/reference/faq/).

  ---

  ## Hızlı Başlangıç: Özel Araçlar

  Toolbox ayrıca özelleştirilmiş araçlar için bir çerçeve olarak kullanılabilir.
  Toolbox'u yapılandırmanın birincil yolu `tools.yaml` dosyasıdır. Birden çok dosyanız varsa,
  `--config tools.yaml` bayrağını kullanarak hangisini yükleyeceğini Toolbox'a söyleyebilirsiniz.

  Tüm kaynak türlerine daha ayrıntılı referans belgelendirmesini
  [Kaynaklar](https://mcp-toolbox.dev/documentation/configuration/) bölümünde bulabilirsiniz.

  ### Kaynaklar

  `tools.yaml` dosyasının `sources` bölümü, Toolbox'un hangi veri kaynaklarına erişim sahibi olması gerektiğini tanımlar. Çoğu araç yürütmek için en az bir kaynağa sahip olacaktır.

  ```yaml
  kind: source
  name: my-pg-source
  type: postgres
  host: 127.0.0.1
  port: 5432
  database: toolbox_db
  user: toolbox_user
  password: my-password
  ```

  Farklı kaynak türlerini yapılandırma hakkında daha fazla ayrıntı için
  [Kaynaklar](https://mcp-toolbox.dev/documentation/configuration/sources/) bölümüne bakın.

  ### Araçlar

  `tools.yaml` dosyasının `tools` bölümü bir ajanın gerçekleştirebileceği eylemleri tanımlar: araç türü nedir, hangi kaynakları etkiler, hangi parametreleri kullanır, vb.

  ```yaml
  kind: tool
  name: search-hotels-by-name
  type: postgres-sql
  source: my-pg-source
  description: Search for hotels based on name.
  parameters:
    - name: name
      type: string
      description: The name of the hotel.
  statement: SELECT * FROM hotels WHERE name ILIKE '%' || $1 || '%';
  ```

  Farklı araç türlerini yapılandırma hakkında daha fazla ayrıntı için
  [Araçlar](https://mcp-toolbox.dev/documentation/configuration/tools/) bölümüne bakın.

  ### Araç Setleri

  `tools.yaml` dosyasının `toolsets` bölümü, birlikte yüklemek istediğiniz araçlardan oluşan grupları tanımlamanıza olanak sağlar. Bu, farklı grupları ajen veya uygulamaya göre tanımlamak için yararlı olabilir.

  ```yaml
  kind: toolset
  name: my_first_toolset
  tools:
      - my_first_tool
      - my_second_tool
  ---
  kind: toolset
  name: my_second_toolset
  tools:
      - my_second_tool
      - my_third_tool
  ```

  ### İstemler

  `tools.yaml` dosyasının `prompts` bölümü, LLM'lerle etkileşimlerde kullanılabilecek istemler tanımlar.

  ```yaml
  kind: prompt
  name: code_review
  description: "Asks the LLM to analyze code quality and suggest improvements."
  messages:
    - content: >
           Please review the following code for quality, correctness,
           and potential improvements: \n\n{{.code}}
  arguments:
    - name: "code"
      description: "The code to review"
  ```

  İstemler yapılandırma hakkında daha fazla ayrıntı için
  [İstemler](https://mcp-toolbox.dev/documentation/configuration/prompts/) bölümüne bakın.

  ---

  ## Toolbox Sunucusunu Yükleyin ve Çalıştırın

  Toolbox'u doğrudan bir [yapılandırma dosyası](#hızlı-başlangıç-özel-araçlar) ile çalıştırabilirsiniz:

  ```sh
  npx @toolbox-sdk/server --config tools.yaml
  ```

  Bu, yapılandırma dosyanızla Toolbox sunucusunun en son sürümünü çalıştırır.

  > [!NOTE]
  > Bu yöntem kolaylık açısından optimize edilmiştir; performans açısından değil. 
  > Daha standart ve güvenilir bir kurulum için lütfen [Toolbox Sunucusunu Yükleyin ve Çalıştırın](#toolbox-sunucusunu-yükleyin-ve-çalıştırın) bölümünde açıklandığı gibi ikili dosya
  > veya container görüntüsü kullanın.

  ### Toolbox'u Yükleyin

  En son sürüm için [sürümler sayfasını][releases] kontrol edin ve
  işletim sisteminiz ve CPU mimarisi için aşağıdaki talimatları kullanın.

  [releases]: https://github.com/googleapis/mcp-toolbox/releases

  <details open>
  <summary>İkili Dosya</summary>

  Toolbox'u ikili dosya olarak yüklemek için:

  <!-- {x-release-please-start-version} -->
  > <details>
  > <summary>Linux (AMD64)</summary>
  >
  > Linux (AMD64) üzerinde Toolbox'u ikili dosya olarak yüklemek için:
  >
  > ```sh
  > # diğer sürümler için sürümler sayfasına bakın
  > export VERSION=1.3.0
  > curl -L -o toolbox https://storage.googleapis.com/mcp-toolbox-for-databases/v$VERSION/linux/amd64/toolbox
  > chmod +x toolbox
  > ```
  >
  > </details>
  > <details>
  > <summary>macOS (Apple Silicon)</summary>
  >
  > macOS (Apple Silicon) üzerinde Toolbox'u ikili dosya olarak yüklemek için:
  >
  > ```sh
  > # diğer sürümler için sürümler sayfasına bakın
  > export VERSION=1.3.0
  > curl -L -o toolbox https://storage.googleapis.com/mcp-toolbox-for-databases/v$VERSION/darwin/arm64/toolbox
  > chmod +x toolbox
  > ```
  >
  > </details>
  > <details>
  > <summary>macOS (Intel)</summary>
  >
  > macOS (Intel) üzerinde Toolbox'u ikili dosya olarak yüklemek için:
  >
  > ```sh
  > # diğer sürümler için sürümler sayfasına bakın
  > export VERSION=1.3.0
  > curl -L -o toolbox https://storage.googleapis.com/mcp-toolbox-for-databases/v$VERSION/darwin/amd64/toolbox
  > chmod +x toolbox
  > ```
  >
  > </details>
  > <details>
  > <summary>Windows (Command Prompt)</summary>
  >
  > Windows (Command Prompt) üzerinde Toolbox'u ikili dosya olarak yüklemek için:
  >
  > ```cmd
  > :: diğer sürümler için sürümler sayfasına bakın
  > set VERSION=1.3.0
  > curl -o toolbox.exe "https://storage.googleapis.com/mcp-toolbox-for-databases/v%VERSION%/windows/amd64/toolbox.exe"
  > ```
  >
  > </details>
  > <details>
  > <summary>Windows (PowerShell)</summary>
  >
  > Windows (PowerShell) üzerinde Toolbox'u ikili dosya olarak yüklemek için:
  >
  > ```powershell
  > # diğer sürümler için sürümler sayfasına bakın
  > $VERSION = "1.3.0"
  > curl.exe -o toolbox.exe "https://storage.googleapis.com/mcp-toolbox-for-databases/v$VERSION/windows/amd64/toolbox.exe"
  > ```
  >
  > </details>
  </details>

  <details>
  <summary>Container görüntüsü</summary>
  Toolbox'u container olarak da yükleyebilirsiniz:

  ```sh
  # diğer sürümler için sürümler sayfasına bakın
  export VERSION=1.3.0
  docker pull us-central1-docker.pkg.dev/database-toolbox/toolbox/toolbox:$VERSION
  ```

  </details>

  <details>
  <summary>Homebrew</summary>

  macOS veya Linux üzerinde Homebrew kullanarak Toolbox'u yüklemek için:

  ```sh
  brew install mcp-toolbox
  ```

  </details>

  <details>
  <summary>Kaynaktan Derleyin</summary>

  Kaynaktan yüklemek için [Go'nun en son sürümünün yüklü olduğundan](https://go.dev/doc/install) emin olun ve ardından aşağıdaki komutu çalıştırın:

  ```sh
  go install github.com/googleapis/mcp-toolbox@v1.3.0
  ```
  <!-- {x-release-please-end} -->

  </details>
  <details>
  <summary>Gemini CLI</summary>
  Belirli veritabanları için AlloyDB, BigQuery ve Cloud SQL gibi önceden oluşturulmuş araçları doğrudan Gemini CLI'ye yüklemek için [Gemini CLI uzantılarını](https://geminicli.com/extensions/) kontrol edin.

  ```sh
  # Gemini CLI'yi yükleyin
  npm install -g @google/gemini-cli
  # Uzantıyı yükleyin
  gemini extensions install https://github.com/gemini-cli-extensions/cloud-sql-postgres
  # Gemini CLI'yi çalıştırın
  gemini
  ```

  Gemini CLI aracılığıyla özel araçlarınızla doğal dil kullanarak etkileşim kurun.

  ```sh
  # Uzantıyı yükleyin
  gemini extensions install https://github.com/gemini-cli-extensions/mcp-toolbox
  ```
  </details>


  ### Toolbox'u Çalıştırın

  Araçlarınızı tanımlamak için [configure](#hızlı-başlangıç-özel-araçlar) bölümünde `tools.yaml` dosyasını yapılandırın ve ardından
  sunucuyu başlatmak için `toolbox` komutunu yürütün:

  <details open>
  <summary>İkili Dosya</summary>

  Toolbox'u ikili dosyadan çalıştırmak için:

  ```sh
  ./toolbox --config "tools.yaml"
  ```

  > ⓘ Not  
  > Toolbox varsayılan olarak dinamik yeniden yüklemeyi etkinleştirir. Devre dışı bırakmak için
  > `--disable-reload` bayrağını kullanın.

  </details>

  <details>

  <summary>Container görüntüsü</summary>

  [Container görüntüsünü](#toolboxyü-yükleyin) çektikten sonra sunucuyu çalıştırmak için:

  ```sh
  export VERSION=0.24.0 # Çektiğiniz sürümü kullanın
  docker run -p 5000:5000 \
  -v $(pwd)/tools.yaml:/app/tools.yaml \
  us-central1-docker.pkg.dev/database-toolbox/toolbox/toolbox:$VERSION \
  --config "/app/tools.yaml"
  ```

  > ⓘ Not  
  > `-v` bayrağı yerel `tools.yaml` dosyanızı container'e monte eder ve `-p` container'in
  > `5000` portunu ana makinenizin `5000` portuna eşler.

  </details>

  <details>

  <summary>Kaynak</summary>

  Sunucuyu kaynaktan doğrudan çalıştırmak için proje kök dizinine gidin
  ve çalıştırın:

  ```sh
  go run .
  ```

  > ⓘ Not  
  > Bu komut projeyi kaynaktan çalıştırır ve geliştirme
  > ve test için daha uygun olur. **Değil** bir ikili dosyayı `$GOPATH` içine derler. İkili dosya derlemek istiyorsanız, [Geliştirici
  > Belgelendirmesi](./DEVELOPER.md#building-the-binary) bölümüne bakın.

  </details>

  <details>

  <summary>Homebrew</summary>

  Toolbox'u [Homebrew](https://brew.sh/) kullanarak yüklediyseniz, `toolbox`
  ikili dosyası sistem yolunuzda bulunur. Sunucuyu aynı komutla başlatabilirsiniz:

  ```sh
  toolbox --config "tools.yaml"
  ```

  </details>

  <details>
  <summary>NPM</summary>

  İkili dosyayı el ile indirmeden Toolbox'u doğrudan çalıştırmak için (Node.js gereklidir):
  ```sh
  npx @toolbox-sdk/server --config tools.yaml
  ```

  </details>
  <details>
  <summary>Gemini CLI</summary>
  Bir [Gemini CLI uzantısı](https://geminicli.com/extensions/) yükledikten sonra, önceden oluşturulmuş araçlar kullanım sırasında kullanılabilir olacaktır.

  ```sh
  # Gemini CLI'yi çalıştırın
  gemini

  # Uzantıları listeleyin
  /extensions list
  # MCP sunucularını listeleyin
  /mcp list
  ```

  </details>


  Tüm bayraklar için bir liste almak istiyorsanız `toolbox help` kullanabilirsiniz! Sunucuyu durdurmak için bir sonlandırma sinyali gönderin (`çoğu platformda ctrl+c`).

  Farklı ortamlara dağıtım hakkında daha detaylı belgelendirme için [Toolbox'u Dağıt
  bölümü](https://mcp-toolbox.dev/documentation/deploy-to/) içindeki kaynakları kontrol edin

  ---

  ## Toolbox'a Bağlanın

  Toolbox sunucunuz çalışır duruma geldikten sonra, araçları MCP uyumlu istemcinize veya
  uygulamanıza yükleyebilirsiniz.

  ### MCP İstemcisi

  MCP istemcinizin yapılandırmasına aşağıdakini ekleyin:

  ```json
  {
    "mcpServers": {
      "toolbox": {
        "type": "http",
        "url": "http://127.0.0.1:5000/mcp",
      }
    }
  }
  ```

  Belirli bir araç setine bağlanmak istiyorsanız, URL'yi "http://127.0.0.1:5000/mcp/{toolset_name}" ile değiştirin.


  ### Toolbox SDK'ları: Uygulamanızla Entegre Olun

  Toolbox Client SDK'ları, özel uygulamalarınızı MCP Toolbox sunucusuna bağlamak için kolay kullanılan yapı taşları ve gelişmiş özellikler sağlar. Aşağıda çeşitli çerçeveleri kullanmak için Client SDK'larının listesini görebilirsiniz:

  <details open>
    <summary>Python (<a href="https://github.com/googleapis/mcp-toolbox-sdk-python">Github</a>)</summary>
    <br>
    <blockquote>

    <details open>
      <summary>Core</summary>

  1. [Toolbox Core SDK][toolbox-core] yükleyin:

      ```bash
      pip install toolbox-core
      ```

  1. Araçları yükleyin:

      ```python
      from toolbox_core import ToolboxClient

      # sunucunuzu işaret etmek için URL'yi güncelleyin
      async with ToolboxClient("http://127.0.0.1:5000") as client:

          # bu araçlar uygulamanıza geçirilebilir!
          tools = await client.load_toolset("toolset_name")
      ```

  Toolbox Core SDK'sını kullanma hakkında daha detaylı talimatlar için
  [projenin README][toolbox-core-readme] bölümüne bakın.

  [toolbox-core]: https://pypi.org/project/toolbox-core/
  [toolbox-core-readme]: https://github.com/googleapis/mcp-toolbox-sdk-python/tree/main/packages/toolbox-core/README.md

    </details>
    <details>
      <summary>LangChain / LangGraph</summary>

  1. [Toolbox LangChain SDK][toolbox-langchain] yükleyin:

      ```bash
      pip install toolbox-langchain
      ```

  1. Araçları yükleyin:

      ```python
      from toolbox_langchain import ToolboxClient

      # sunucunuzu işaret etmek için URL'yi güncelleyin
      async with ToolboxClient("http://127.0.0.1:5000") as client:

          # bu araçlar uygulamanıza geçirilebilir!
          tools = client.load_toolset()
      ```

      Toolbox LangChain SDK'sını kullanma hakkında daha detaylı talimatlar için
      [projenin README][toolbox-langchain-readme] bölümüne bakın.

      [toolbox-langchain]: https://pypi.org/project/toolbox-langchain/
      [toolbox-langchain-readme]: https://github.com/googleapis/mcp-toolbox-sdk-python/blob/main/packages/toolbox-langchain/README.md

    </details>
    <details>
      <summary>LlamaIndex</summary>

  1. [Toolbox Llamaindex SDK][toolbox-llamaindex] yükleyin:

      ```bash
      pip install toolbox-llamaindex
      ```

  1. Araçları yükleyin:

      ```python
      from toolbox_llamaindex import ToolboxClient

      # sunucunuzu işaret etmek için URL'yi güncelleyin
      async with ToolboxClient("http://127.0.0.1:5000") as client:

          # bu araçlar uygulamanıza geçirilebilir!
          tools = client.load_toolset()
      ```

      Toolbox Llamaindex SDK'sını kullanma hakkında daha detaylı talimatlar için
      [projenin README][toolbox-llamaindex-readme] bölümüne bakın.

      [toolbox-llamaindex]: https://pypi.org/project/toolbox-llamaindex/
      [toolbox-llamaindex-readme]: https://github.com/googleapis/genai-toolbox-llamaindex-python/blob/main/README.md

    </details>
  </details>
  </blockquote>
  <details>
    <summary>Javascript/Typescript (<a href="https://github.com/googleapis/mcp-toolbox-sdk-js">Github</a>)</summary>
    <br>
    <blockquote>

    <details open>
      <summary>Core</summary>

  1. [Toolbox Core SDK][toolbox-core-js] yükleyin:

      ```bash
      npm install @toolbox-sdk/core
      ```

  1. Araçları yükleyin:

      ```javascript
      import { ToolboxClient } from '@toolbox-sdk/core';

      // sunucunuzu işaret etmek için URL'yi güncelleyin
      const URL =
---

<div align="center">

![logo](https://raw.githubusercontent.com/googleapis/genai-toolbox/HEAD/logo.png)

# MCP Toolbox for Databases

<a href="https://trendshift.io/repositories/13019" target="_blank"></a>

[![Go Report Card](https://goreportcard.com/badge/github.com/googleapis/mcp-toolbox)](https://goreportcard.com/report/github.com/googleapis/mcp-toolbox)
[![License: Apache
2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Docs](https://img.shields.io/badge/Docs-MCP_Toolbox-blue)](https://mcp-toolbox.dev/)
[![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=flat&logo=discord&logoColor=white)](https://discord.gg/Dmm69peqjh)
[![Medium](https://img.shields.io/badge/Medium-12100E?style=flat&logo=medium&logoColor=white)](https://medium.com/@mcp_toolbox)

[![Python SDK](https://img.shields.io/pypi/v/toolbox-core?logo=python&logoColor=white&label=Python%20SDK)](https://pypi.org/project/toolbox-core/)
[![JS/TS SDK](https://img.shields.io/npm/v/@toolbox-sdk/core?logo=javascript&logoColor=white&label=JS%20SDK)](https://www.npmjs.com/package/@toolbox-sdk/core)
[![Go SDK](https://img.shields.io/github/v/release/googleapis/mcp-toolbox-sdk-go?logo=go&logoColor=white&label=Go%20SDK)](https://pkg.go.dev/github.com/googleapis/mcp-toolbox-sdk-go)
[![Java SDK](https://img.shields.io/maven-central/v/com.google.cloud.mcp/mcp-toolbox-sdk-java?logo=apache-maven&logoColor=white&label=Java%20SDK)](https://mvnrepository.com/artifact/com.google.cloud.mcp/mcp-toolbox-sdk-java)
</div>

MCP Toolbox for Databases is an open source Model Context Protocol (MCP) server that connects your AI agents, IDEs, and applications directly to your enterprise databases. 

<p align="center">

</p>

It serves a **dual purpose**:
1. **Ready-to-use MCP Server (Build-Time):** Instantly connect Gemini CLI, Google Antigravity, Claude Code, Codex, or other MCP clients to your databases using our *prebuilt generic tools*. Talk to your data, explore schemas, and generate code without writing boilerplate.
2. **Custom Tools Framework (Run-Time):** A robust framework to build specialized, highly secure AI tools for your production agents. Define structured queries, semantic search, and NL2SQL capabilities safely and easily.


This README provides a brief overview. For comprehensive details, see the [full documentation](https://mcp-toolbox.dev/).

> [!IMPORTANT]  
> **Repository Name Update:** The `genai-toolbox` repository has been officially renamed to `mcp-toolbox`. To ensure your local environment reflects the new name, you may update your remote:
> `git remote set-url origin https://github.com/googleapis/mcp-toolbox.git`

> [!NOTE]
> This solution was originally named “Gen AI Toolbox for Databases” (github.com/googleapis/genai-toolbox) as its initial development predated MCP, but was renamed to align with the MCP compatibility.

<!-- TOC ignore:true -->
## Table of Contents

- [Why MCP Toolbox?](#why-mcp-toolbox)
- [Quick Start: Prebuilt Tools](#quick-start-prebuilt-tools)
- [Quick Start: Custom Tools](#quick-start-custom-tools)
- [Install & Run the Toolbox server](#install--run-the-toolbox-server)
- [Connect to Toolbox](#connect-to-toolbox)
  - [MCP Client](#mcp-client)
  - [Toolbox SDKs: Integrate with your Application](#toolbox-sdks-integrate-with-your-application)
- [Additional Features](#additional-features)
- [Versioning](#versioning)
- [Contributing](#contributing)
- [Community](#community)

---

## Why MCP Toolbox?

- **Out-of-the-Box Database Access:** Prebuilt generic tools for instant data exploration (e.g., `list_tables`, `execute_sql`) directly from your IDE or CLI.
- **Custom Tools Framework:** Build production-ready tools with your own predefined logic, ensuring safety through Restricted Access, Structured Queries, and Semantic Search.
- **Simplified Development:** Integrate tools into your Agent Development Kit (ADK), LangChain, LlamaIndex, or custom agents in less than 10 lines of code.
- **Better Performance:** Handles connection pooling, integrated auth (IAM), and end-to-end observability (OpenTelemetry) out of the box.
- **Enhanced Security**: Integrated authentication for more secure access to your data.
- **End-to-end Observability**: Out of the box metrics and tracing with built-in support for OpenTelemetry.

---

## Quick Start: Prebuilt Tools

Stop context-switching and let your AI assistant become a true co-developer. By connecting your IDE to your databases with MCP Toolbox, you can query your data in plain English, automate schema discovery and management, and generate database-aware code.

You can use the Toolbox in any MCP-compatible IDE or client (e.g., Gemini CLI, Google Antigravity, Claude Code, Codex, etc.) by configuring the MCP server.

**Prebuilt tools are also conveniently available via the [Google Antigravity MCP Store](https://antigravity.google/docs/mcp) with a simple click-to-install experience.**

1. Add the following to your client's MCP configuration file (usually `mcp.json` or `claude_desktop_config.json`):

    ```json
    {
      "mcpServers": {
        "toolbox-postgres": {
          "command": "npx",
          "args": [
            "-y",
            "@toolbox-sdk/server",
            "--prebuilt=postgres",
            "--stdio"
          ]
        }
      }
    }
    ```

2. Set the appropriate environment variables to connect, see the [Prebuilt Tools Reference](https://mcp-toolbox.dev/documentation/configuration/prebuilt-configs/).

When you run Toolbox with a `--prebuilt=<database>` flag, you instantly get access to standard tools to interact with that database. 

Supported databases currently include:
- **Google Cloud:** AlloyDB, BigQuery, Cloud SQL (PostgreSQL, MySQL, SQL Server), Spanner, Firestore, Knowledge Catalog (formerly known as Dataplex).
- **Other Databases:** PostgreSQL, MySQL, SQL Server, Oracle, MongoDB, Redis, Elasticsearch, CockroachDB, ClickHouse, Couchbase, Neo4j, Snowflake, Trino, and more.

For a full list of available tools and their capabilities across all supported databases, see the [Prebuilt Tools Reference](https://mcp-toolbox.dev/documentation/configuration/prebuilt-configs/).

*See the [Install & Run the Toolbox server](#install--run-the-toolbox-server) section for different execution methods like Docker or binaries.*


> [!TIP]
> For users looking for a managed solution, [Google Cloud MCP Servers](https://cloud.google.com/blog/products/databases/managed-mcp-servers-for-google-cloud-databases) 
> provide a managed MCP experience with prebuilt tools; you can [learn more about the differences here](https://mcp-toolbox.dev/dev/reference/faq/).

---

## Quick Start: Custom Tools

Toolbox can also be used as a framework for customized tools.
The primary way to configure Toolbox is through the `tools.yaml` file. If you
have multiple files, you can tell Toolbox which to load with the `--config
tools.yaml` flag.

You can find more detailed reference documentation to all resource types in the
[Resources](https://mcp-toolbox.dev/documentation/configuration/).

### Sources

The `sources` section of your `tools.yaml` defines what data sources your
Toolbox should have access to. Most tools will have at least one source to
execute against.

```yaml
kind: source
name: my-pg-source
type: postgres
host: 127.0.0.1
port: 5432
database: toolbox_db
user: toolbox_user
password: my-password
```

For more details on configuring different types of sources, see the
[Sources](https://mcp-toolbox.dev/documentation/configuration/sources/).

### Tools

The `tools` section of a `tools.yaml` define the actions an agent can take: what
type of tool it is, which source(s) it affects, what parameters it uses, etc.

```yaml
kind: tool
name: search-hotels-by-name
type: postgres-sql
source: my-pg-source
description: Search for hotels based on name.
parameters:
  - name: name
    type: string
    description: The name of the hotel.
statement: SELECT * FROM hotels WHERE name ILIKE '%' || $1 || '%';
```

For more details on configuring different types of tools, see the
[Tools](https://mcp-toolbox.dev/documentation/configuration/tools/).

### Toolsets

The `toolsets` section of your `tools.yaml` allows you to define groups of tools
that you want to be able to load together. This can be useful for defining
different groups based on agent or application.

```yaml
kind: toolset
name: my_first_toolset
tools:
    - my_first_tool
    - my_second_tool
---
kind: toolset
name: my_second_toolset
tools:
    - my_second_tool
    - my_third_tool
```

### Prompts

The `prompts` section of a `tools.yaml` defines prompts that can be used for
interactions with LLMs.

```yaml
kind: prompt
name: code_review
description: "Asks the LLM to analyze code quality and suggest improvements."
messages:
  - content: >
         Please review the following code for quality, correctness,
         and potential improvements: \n\n{{.code}}
arguments:
  - name: "code"
    description: "The code to review"
```

For more details on configuring prompts, see the
[Prompts](https://mcp-toolbox.dev/documentation/configuration/prompts/).

---

## Install & Run the Toolbox server

You can run Toolbox directly with a [configuration file](#quick-start-custom-tools):

```sh
npx @toolbox-sdk/server --config tools.yaml
```

This runs the latest version of the Toolbox server with your configuration file.

> [!NOTE]
> This method is optimized for convenience rather than performance. 
> For a more standard and reliable installation, please use the binary
> or container image as described in [Install & Run the Toolbox server](#install--run-the-toolbox-server).

### Install Toolbox

For the latest version, check the [releases page][releases] and use the
following instructions for your OS and CPU architecture.

[releases]: https://github.com/googleapis/mcp-toolbox/releases

<details open>
<summary>Binary</summary>

To install Toolbox as a binary:

<!-- {x-release-please-start-version} -->
> <details>
> <summary>Linux (AMD64)</summary>
>
> To install Toolbox as a binary on Linux (AMD64):
>
> ```sh
> # see releases page for other versions
> export VERSION=1.3.0
> curl -L -o toolbox https://storage.googleapis.com/mcp-toolbox-for-databases/v$VERSION/linux/amd64/toolbox
> chmod +x toolbox
> ```
>
> </details>
> <details>
> <summary>macOS (Apple Silicon)</summary>
>
> To install Toolbox as a binary on macOS (Apple Silicon):
>
> ```sh
> # see releases page for other versions
> export VERSION=1.3.0
> curl -L -o toolbox https://storage.googleapis.com/mcp-toolbox-for-databases/v$VERSION/darwin/arm64/toolbox
> chmod +x toolbox
> ```
>
> </details>
> <details>
> <summary>macOS (Intel)</summary>
>
> To install Toolbox as a binary on macOS (Intel):
>
> ```sh
> # see releases page for other versions
> export VERSION=1.3.0
> curl -L -o toolbox https://storage.googleapis.com/mcp-toolbox-for-databases/v$VERSION/darwin/amd64/toolbox
> chmod +x toolbox
> ```
>
> </details>
> <details>
> <summary>Windows (Command Prompt)</summary>
>
> To install Toolbox as a binary on Windows (Command Prompt):
>
> ```cmd
> :: see releases page for other versions
> set VERSION=1.3.0
> curl -o toolbox.exe "https://storage.googleapis.com/mcp-toolbox-for-databases/v%VERSION%/windows/amd64/toolbox.exe"
> ```
>
> </details>
> <details>
> <summary>Windows (PowerShell)</summary>
>
> To install Toolbox as a binary on Windows (PowerShell):
>
> ```powershell
> # see releases page for other versions
> $VERSION = "1.3.0"
> curl.exe -o toolbox.exe "https://storage.googleapis.com/mcp-toolbox-for-databases/v$VERSION/windows/amd64/toolbox.exe"
> ```
>
> </details>
</details>

<details>
<summary>Container image</summary>
You can also install Toolbox as a container:

```sh
# see releases page for other versions
export VERSION=1.3.0
docker pull us-central1-docker.pkg.dev/database-toolbox/toolbox/toolbox:$VERSION
```

</details>

<details>
<summary>Homebrew</summary>

To install Toolbox using Homebrew on macOS or Linux:

```sh
brew install mcp-toolbox
```

</details>

<details>
<summary>Compile from source</summary>

To install from source, ensure you have the latest version of
[Go installed](https://go.dev/doc/install), and then run the following command:

```sh
go install github.com/googleapis/mcp-toolbox@v1.3.0
```
<!-- {x-release-please-end} -->

</details>
<details>
<summary>Gemini CLI</summary>
Check out the [Gemini CLI extensions](https://geminicli.com/extensions/) to install prebuilt tools for specific databases like AlloyDB, BigQuery, and Cloud SQL directly into Gemini CLI.

```sh
# Install Gemini CLI
npm install -g @google/gemini-cli
# Install the extension
gemini extensions install https://github.com/gemini-cli-extensions/cloud-sql-postgres
# Run Gemini CLI
gemini
```

Interact with your custom tools using natural language through the Gemini CLI.

```sh
# Install the extension
gemini extensions install https://github.com/gemini-cli-extensions/mcp-toolbox
```
</details>


### Run Toolbox

[Configure](#quick-start-custom-tools) a `tools.yaml` to define your tools, and then
execute `toolbox` to start the server:

<details open>
<summary>Binary</summary>

To run Toolbox from binary:

```sh
./toolbox --config "tools.yaml"
```

> ⓘ Note  
> Toolbox enables dynamic reloading by default. To disable, use the
> `--disable-reload` flag.

</details>

<details>

<summary>Container image</summary>

To run the server after pulling the [container image](#install-toolbox):

```sh
export VERSION=0.24.0 # Use the version you pulled
docker run -p 5000:5000 \
-v $(pwd)/tools.yaml:/app/tools.yaml \
us-central1-docker.pkg.dev/database-toolbox/toolbox/toolbox:$VERSION \
--config "/app/tools.yaml"
```

> ⓘ Note  
> The `-v` flag mounts your local `tools.yaml` into the container, and `-p` maps
> the container's port `5000` to your host's port `5000`.

</details>

<details>

<summary>Source</summary>

To run the server directly from source, navigate to the project root directory
and run:

```sh
go run .
```

> ⓘ Note  
> This command runs the project from source, and is more suitable for development
> and testing. It does **not** compile a binary into your `$GOPATH`. If you want
> to compile a binary instead, refer the [Developer
> Documentation](./DEVELOPER.md#building-the-binary).

</details>

<details>

<summary>Homebrew</summary>

If you installed Toolbox using [Homebrew](https://brew.sh/), the `toolbox`
binary is available in your system path. You can start the server with the same
command:

```sh
toolbox --config "tools.yaml"
```

</details>

<details>
<summary>NPM</summary>

To run Toolbox directly without manually downloading the binary (requires Node.js):
```sh
npx @toolbox-sdk/server --config tools.yaml
```

</details>
<details>
<summary>Gemini CLI</summary>
After installing a [Gemini CLI extensions](https://geminicli.com/extensions/), the prebuilt tools will be available during use.

```sh
# Run Gemini CLI
gemini

# List extensions
/extensions list
# List MCP servers
/mcp list
```

</details>


You can use `toolbox help` for a full list of flags! To stop the server, send a
terminate signal (`ctrl+c` on most platforms).

For more detailed documentation on deploying to different environments, check
out the resources in the [Deploy Toolbox
section](https://mcp-toolbox.dev/documentation/deploy-to/)

---

## Connect to Toolbox

Once your Toolbox server is up and running, you can load tools into your MCP-compatible client or
application. 

### MCP Client

Add the following configuration to your MCP client configuration:

```json
{
  "mcpServers": {
    "toolbox": {
      "type": "http",
      "url": "http://127.0.0.1:5000/mcp",
    }
  }
}
```

If you would like to connect to a specific toolset, replace url with "http://127.0.0.1:5000/mcp/{toolset_name}".


### Toolbox SDKs: Integrate with your Application

Toolbox Client SDKs provide the easy-to-use building blocks and advanced features for connecting your custom applications to the MCP Toolbox server. See below the list of Client SDKs for using various frameworks:

<details open>
  <summary>Python (<a href="https://github.com/googleapis/mcp-toolbox-sdk-python">Github</a>)</summary>
  <br>
  <blockquote>

  <details open>
    <summary>Core</summary>

1. Install [Toolbox Core SDK][toolbox-core]:

    ```bash
    pip install toolbox-core
    ```

1. Load tools:

    ```python
    from toolbox_core import ToolboxClient

    # update the url to point to your server
    async with ToolboxClient("http://127.0.0.1:5000") as client:

        # these tools can be passed to your application!
        tools = await client.load_toolset("toolset_name")
    ```

For more detailed instructions on using the Toolbox Core SDK, see the
[project's README][toolbox-core-readme].

[toolbox-core]: https://pypi.org/project/toolbox-core/
[toolbox-core-readme]: https://github.com/googleapis/mcp-toolbox-sdk-python/tree/main/packages/toolbox-core/README.md

  </details>
  <details>
    <summary>LangChain / LangGraph</summary>

1. Install [Toolbox LangChain SDK][toolbox-langchain]:

    ```bash
    pip install toolbox-langchain
    ```

1. Load tools:

    ```python
    from toolbox_langchain import ToolboxClient

    # update the url to point to your server
    async with ToolboxClient("http://127.0.0.1:5000") as client:

        # these tools can be passed to your application!
        tools = client.load_toolset()
    ```

    For more detailed instructions on using the Toolbox LangChain SDK, see the
    [project's README][toolbox-langchain-readme].

    [toolbox-langchain]: https://pypi.org/project/toolbox-langchain/
    [toolbox-langchain-readme]: https://github.com/googleapis/mcp-toolbox-sdk-python/blob/main/packages/toolbox-langchain/README.md

  </details>
  <details>
    <summary>LlamaIndex</summary>

1. Install [Toolbox Llamaindex SDK][toolbox-llamaindex]:

    ```bash
    pip install toolbox-llamaindex
    ```

1. Load tools:

    ```python
    from toolbox_llamaindex import ToolboxClient

    # update the url to point to your server
    async with ToolboxClient("http://127.0.0.1:5000") as client:

        # these tools can be passed to your application!
        tools = client.load_toolset()
    ```

    For more detailed instructions on using the Toolbox Llamaindex SDK, see the
    [project's README][toolbox-llamaindex-readme].

    [toolbox-llamaindex]: https://pypi.org/project/toolbox-llamaindex/
    [toolbox-llamaindex-readme]: https://github.com/googleapis/genai-toolbox-llamaindex-python/blob/main/README.md

  </details>
</details>
</blockquote>
<details>
  <summary>Javascript/Typescript (<a href="https://github.com/googleapis/mcp-toolbox-sdk-js">Github</a>)</summary>
  <br>
  <blockquote>

  <details open>
    <summary>Core</summary>

1. Install [Toolbox Core SDK][toolbox-core-js]:

    ```bash
    npm install @toolbox-sdk/core
    ```

1. Load tools:

    ```javascript
    import { ToolboxClient } from '@toolbox-sdk/core';

    // update the url to point to your server
    const URL = 'http://127.0.0.1:5000';
    let client = new ToolboxClient(URL);

    // these tools can be passed to your application!
    const tools = await client.loadToolset('toolsetName');
    ```

    For more detailed instructions on using the Toolbox Core SDK, see the
    [project's README][toolbox-core-js-readme].

    [toolbox-core-js]: https://www.npmjs.com/package/@toolbox-sdk/core
    [toolbox-core-js-readme]: https://github.com/googleapis/mcp-toolbox-sdk-js/blob/main/packages/toolbox-core/README.md

  </details>
  <details>
    <summary>LangChain / LangGraph</summary>

1. Install [Toolbox Core SDK][toolbox-core-js]:

    ```bash
    npm install @toolbox-sdk/core
    ```

2. Load tools:

    ```javascript
    import { ToolboxClient } from '@toolbox-sdk/core';

    // update the url to point to your server
    const URL = 'http://127.0.0.1:5000';
    let client = new ToolboxClient(URL);

    // these tools can be passed to your application!
    const toolboxTools = await client.loadToolset('toolsetName');

    // Define the basics of the tool: name, description, schema and core logic
    const getTool = (toolboxTool) => tool(currTool, {
        name: toolboxTool.getName(),
        description: toolboxTool.getDescription(),
        schema: toolboxTool.getParamSchema()
    });

    // Use these tools in your Langchain/Langraph applications
    const tools = toolboxTools.map(getTool);
    ```

  </details>
  <details>
    <summary>Genkit</summary>

1. Install [Toolbox Core SDK][toolbox-core-js]:

    ```bash
    npm install @toolbox-sdk/core
    ```

2. Load tools:

    ```javascript
    import { ToolboxClient } from '@toolbox-sdk/core';
    import { genkit } from 'genkit';

    // Initialise genkit
    const ai = genkit({
        plugins: [
            googleAI({
                apiKey: process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY
            })
        ],
        model: googleAI.model('gemini-2.0-flash'),
    });

    // update the url to point to your server
    const URL = 'http://127.0.0.1:5000';
    let client = new ToolboxClient(URL);

    // these tools can be passed to your application!
    const toolboxTools = await client.loadToolset('toolsetName');

    // Define the basics of the tool: name, description, schema and core logic
    const getTool = (toolboxTool) => ai.defineTool({
        name: toolboxTool.getName(),
        description: toolboxTool.getDescription(),
        schema: toolboxTool.getParamSchema()
    }, toolboxTool)

    // Use these tools in your Genkit applications
    const tools = toolboxTools.map(getTool);
    ```

  </details>
  <details>
    <summary>ADK</summary>

1. Install [Toolbox ADK SDK][toolbox-adk-js]:

    ```bash
    npm install @toolbox-sdk/adk
    ```

2. Load tools:

    ```javascript
    import { ToolboxClient } from '@toolbox-sdk/adk';

    // update the url to point to your server
    const URL = 'http://127.0.0.1:5000';
    let client = new ToolboxClient(URL);

    // these tools can be passed to your application!
    const tools = await client.loadToolset('toolsetName');
    ```

    For more detailed instructions on using the Toolbox ADK SDK, see the
    [project's README][toolbox-adk-js-readme].

    [toolbox-adk-js]: https://www.npmjs.com/package/@toolbox-sdk/adk
    [toolbox-adk-js-readme]:
       https://github.com/googleapis/mcp-toolbox-sdk-js/blob/main/packages/toolbox-adk/README.md

  </details>
</details>
</blockquote>
<details>
  <summary>Go (<a href="https://github.com/googleapis/mcp-toolbox-sdk-go">Github</a>)</summary>
  <br>
  <blockquote>

  <details>
    <summary>Core</summary>

1. Install [Toolbox Go SDK][toolbox-go]:

    ```bash
    go get github.com/googleapis/mcp-toolbox-sdk-go
    ```

2. Load tools:

    ```go
    package main

    import (
      "github.com/googleapis/mcp-toolbox-sdk-go/core"
      "context"
    )

    func main() {
      // Make sure to add the error checks
      // update the url to point to your server
      URL := "http://127.0.0.1:5000";
      ctx := context.Background()

      client, err := core.NewToolboxClient(URL)

      // Framework agnostic tools
      tools, err := client.LoadToolset("toolsetName", ctx)
    }
    ```

    For more detailed instructions on using the Toolbox Go SDK, see the
    [project's README][toolbox-core-go-readme].

    [toolbox-go]: https://pkg.go.dev/github.com/googleapis/mcp-toolbox-sdk-go/core
    [toolbox-core-go-readme]: https://github.com/googleapis/mcp-toolbox-sdk-go/blob/main/core/README.md

  </details>
  <details>
    <summary>LangChain Go</summary>

1. Install [Toolbox Go SDK][toolbox-go]:

    ```bash
    go get github.com/googleapis/mcp-toolbox-sdk-go
    ```

2. Load tools:

    ```go
    package main

    import (
      "context"
      "encoding/json"

      "github.com/googleapis/mcp-toolbox-sdk-go/core"
      "github.com/tmc/langchaingo/llms"
    )

    func main() {
      // Make sure to add the error checks
      // update the url to point to your server
      URL := "http://127.0.0.1:5000"
      ctx := context.Background()

      client, err := core.NewToolboxClient(URL)

      // Framework agnostic tool
      tool, err := client.LoadTool("toolName", ctx)

      // Fetch the tool's input schema
      inputschema, err := tool.InputSchema()

      var paramsSchema map[string]any
      _ = json.Unmarshal(inputschema, &paramsSchema)

      // Use this tool with LangChainGo
      langChainTool := llms.Tool{
        Type: "function",
        Function: &llms.FunctionDefinition{
          Name:        tool.Name(),
          Description: tool.Description(),
          Parameters:  paramsSchema,
        },
      }
    }

    ```

  </details>
  <details>
    <summary>Genkit</summary>

1. Install [Toolbox Go SDK][toolbox-go]:

    ```bash
    go get github.com/googleapis/mcp-toolbox-sdk-go
    ```

2. Load tools:

    ```go
    package main
    import (
      "context"
      "log"

      "github.com/firebase/genkit/go/genkit"
      "github.com/googleapis/mcp-toolbox-sdk-go/core"
      "github.com/googleapis/mcp-toolbox-sdk-go/tbgenkit"
    )

    func main() {
      // Make sure to add the error checks
      // Update the url to point to your server
      URL := "http://127.0.0.1:5000"
      ctx := context.Background()
      g := genkit.Init(ctx)

      client, err := core.NewToolboxClient(URL)

      // Framework agnostic tool
      tool, err := client.LoadTool("toolName", ctx)

      // Convert the tool using the tbgenkit package
      // Use this tool with Genkit Go
      genkitTool, err := tbgenkit.ToGenkitTool(tool, g)
      if err != nil {
        log.Fatalf("Failed to convert tool: %v\n", err)
      }
      log.Printf("Successfully converted tool: %s", genkitTool.Name())
    }
    ```

  </details>
  <details>
    <summary>Go GenAI</summary>

1. Install [Toolbox Go SDK][toolbox-go]:

    ```bash
    go get github.com/googleapis/mcp-toolbox-sdk-go
    ```

2. Load tools:

    ```go
    package main

    import (
      "context"
      "encoding/json"

      "github.com/googleapis/mcp-toolbox-sdk-go/core"
      "google.golang.org/genai"
    )

    func main() {
      // Make sure to add the error checks
      // Update the url to point to your server
      URL := "http://127.0.0.1:5000"
      ctx := context.Background()

      client, err := core.NewToolboxClient(URL)

      // Framework agnostic tool
      tool, err := client.LoadTool("toolName", ctx)

      // Fetch the tool's input schema
      inputschema, err := tool.InputSchema()

      var schema *genai.Schema
      _ = json.Unmarshal(inputschema, &schema)

      funcDeclaration := &genai.FunctionDeclaration{
        Name:        tool.Name(),
        Description: tool.Description(),
        Parameters:  schema,
      }

      // Use this tool with Go GenAI
      genAITool := &genai.Tool{
        FunctionDeclarations: []*genai.FunctionDeclaration{funcDeclaration},
      }
    }
    ```

  </details>
  <details>
    <summary>OpenAI Go</summary>

1. Install [Toolbox Go SDK][toolbox-go]:

    ```bash
    go get github.com/googleapis/mcp-toolbox-sdk-go
    ```

2. Load tools:

    ```go
    package main

    import (
      "context"
      "encoding/json"

      "github.com/googleapis/mcp-toolbox-sdk-go/core"
      openai "github.com/openai/openai-go"
    )

    func main() {
      // Make sure to add the error checks
      // Update the url to point to your server
      URL := "http://127.0.0.1:5000"
      ctx := context.Background()

      client, err := core.NewToolboxClient(URL)

      // Framework agnostic tool
      tool, err := client.LoadTool("toolName", ctx)

      // Fetch the tool's input schema
      inputschema, err := tool.InputSchema()

      var paramsSchema openai.FunctionParameters
      _ = json.Unmarshal(inputschema, &paramsSchema)

      // Use this tool with OpenAI Go
      openAITool := openai.ChatCompletionToolParam{
        Function: openai.FunctionDefinitionParam{
          Name:        tool.Name(),
          Description: openai.String(tool.Description()),
          Parameters:  paramsSchema,
        },
      }

    }
    ```

  </details>
  <details open>
    <summary>ADK Go</summary>

1. Install [Toolbox Go SDK][toolbox-go]:

    ```bash
    go get github.com/googleapis/mcp-toolbox-sdk-go
    ```

1. Load tools:

    ```go
    package main

    import (
      "github.com/googleapis/mcp-toolbox-sdk-go/tbadk"
      "context"
    )

    func main() {
      // Make sure to add the error checks
      // Update the url to point to your server
      URL := "http://127.0.0.1:5000"
      ctx := context.Background()
      client, err := tbadk.NewToolboxClient(URL)
      if err != nil {
        return fmt.Sprintln("Could not start Toolbox Client", err)
      }

      // Use this tool with ADK Go
      tool, err := client.LoadTool("toolName", ctx)
      if err != nil {
        return fmt.Sprintln("Could not load Toolbox Tool", err)
      }
    }
    ```

    For more detailed instructions on using the Toolbox Go SDK, see the
    [project's README][toolbox-core-go-readme].


  </details>
</details>
</blockquote>
</details>

---

## Additional Features

### Test tools with the Toolbox UI

To launch Toolbox's interactive UI, use the `--ui` flag. This allows you to test
tools and toolsets with features such as authorized parameters. To learn more,
visit [Toolbox UI](https://mcp-toolbox.dev/documentation/configuration/toolbox-ui/).

```sh
./toolbox --ui
```

### Telemetry

Toolbox emits traces and metrics via OpenTelemetry. Use `--telemetry-otlp=<endpoint>` 
to export to any OTLP-compatible backend like Google Cloud Monitoring, Agnost AI, or 
others. See the [telemetry docs](https://mcp-toolbox.dev/documentation/monitoring/export_telemetry/) for details.

### Generate Agent Skills

The `skills-generate` command allows you to convert a **toolset** into an **Agent Skill** compatible with the [Agent Skill specification](https://agentskills.io/specification). This is useful for distributing tools as portable skill packages.

```bash
toolbox --config tools.yaml skills-generate \
  --name "my-skill" \
  --toolset "my_toolset" \
  --description "A skill containing multiple tools"
```

Once generated, you can install the skill into the Gemini CLI:

```bash
gemini skills install ./skills/my-skill
```

For more details, see the [Generate Agent Skills guide](https://mcp-toolbox.dev/documentation/configuration/skills/).

---

## Versioning

MCP Toolbox for Databases follows [Semantic Versioning](https://semver.org/).

The Public API includes the Toolbox Server (CLI, configuration manifests, and pre-built toolsets) and the Client SDKs.

- **Major versions** are incremented for breaking changes, such as incompatible CLI or manifest changes.
- **Minor versions** are incremented for new features, including modifications to pre-built toolsets or beta features.
- **Patch versions** are incremented for backward-compatible bug fixes.

For more details, see our [Full Versioning Policy](https://mcp-toolbox.dev/reference/versioning/).

---

## Contributing

Contributions are welcome. Please, see the [CONTRIBUTING](CONTRIBUTING.md) guide to get started. 

For technical details on setting up a environment for developing on Toolbox itself, see the [DEVELOPER](DEVELOPER.md) guide.

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms. See [Contributor Code of Conduct](CODE_OF_CONDUCT.md) for more information.

---

## Community

Join our [Discord community](https://discord.gg/GQrFB3Ec3W) to connect with our developers!
