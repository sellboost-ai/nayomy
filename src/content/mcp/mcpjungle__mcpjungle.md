---
name: "mcpjungle/MCPJungle"
description: "Self-hosted MCP Server registry for enterprise AI Agents"
category: "Aggregators"
repo: "mcpjungle/MCPJungle"
stars: 1065
url: "https://github.com/mcpjungle/MCPJungle"
body_length: 36295
license: "MPL-2.0"
language: "Go"
homepage: "https://docs.mcpjungle.com"
body_tr: |-
  <h1 align="center">
    MCPJungle
  </h1>
  <p align="center">
    <strong>Tüm MCP sunucularınızı tek bir endpoint'in arkasında çalıştırın</strong>
  </p>
  <p align="center">
    <a href="https://docs.mcpjungle.com" style="text-decoration: none;">
      
    </a>

    <a href="https://github.com/mcpjungle/mcpjungle/pkgs/container/mcpjungle" style="text-decoration: none;">
      
    </a>

    <a href="https://discord.gg/CapV4Z3krk" style="text-decoration: none;">
      
    </a>
  </p>

  MCPJungle, dağınık istemci konfigürasyonları, tekrarlanan kurulum veya tutarsız erişim kontrolü yaşamadan birden fazla MCP sunucusunu yönetmek isteyen geliştirici ve takımlar için kendi kendine barındırılan bir MCP ağ geçididir.

  Kişisel MCP kurulumunuzu temiz tutmak için **yerel olarak** veya merkezileştirilmiş bulma, erişim kontrolü ve gözlemlenebilirlikle bir takım için **paylaşılan altyapı** olarak çalıştırın.

  ![diagram](https://raw.githubusercontent.com/mcpjungle/MCPJungle/HEAD/assets/mcpjungle-diagram/april-2026/mcpjungle-diagram.png)

  Her MCP sunucusunu her AI istemcisine bağlamak yerine, sunucularınızı MCPJungle'da bir kez kaydedin ve Claude, Cursor, Codex veya kendi Ajanlarınız tek bir MCP endpoint'ine bağlansın.

  ## MCPJungle Neden?

  MCP güçlüdür, ancak birçok MCP sunucusunu yönetmek hızlı bir şekilde karmaşık hale gelir.

  Bir ağ geçidi olmadan:

  - 🔌 Her istemcinin kendi MCP sunucu konfigürasyonuna ihtiyacı vardır
  - 🧩 Araçlar, istemler ve kaynaklar farklı sunucular arasında dağılmıştır
  - 🔐 Erişim kontrolü tekrarlanır veya eksiktir
  - 👥 Takımlar, mevcut MCP araçlarının paylaşılan bir görünümüne sahip değildir
  - 🛠️ Yerel kurulumlar yeniden üretilmesi zor hale gelir

  MCPJungle size tek bir kontrol noktası sunar:

  - 🌐 Claude, Cursor, Copilot ve özel ajanlar için tek bir MCP endpoint'i
  - 🗂️ MCP sunucularını kaydetmek ve yönetmek için tek bir yer
  - 🔎 Araçlar, istemler ve kaynaklar için birleştirilmiş bulma
  - 🎛️ Bir istemcinin yalnızca görmesi gereken araçları sunmak için isteğe bağlı araç grupları
  - 📊 Paylaşılan dağıtımlar için basit erişim kontrolü ve gözlemlenebilirlik kancaları

  Yerel bir kurulumla başlayın. İhtiyacınız olduğunda paylaşılan bir takım ağ geçidine ölçeklendirin.

  ![MCPJungle dashboard UI](https://raw.githubusercontent.com/mcpjungle/MCPJungle/HEAD/docs/images/dashboard-ui.png)

  ## Dokümantasyon
   MCPJungle dokümantasyonunun yeni bir evi var: [https://docs.mcpjungle.com](https://docs.mcpjungle.com).
   
   Lütfen bu README yerine en son rehberler, referans ve operasyonel ayrıntılar için doküman sitesini tercih edin.
   
   AI İstemcileriniz de MCP sunucusu `https://docs.mcpjungle.com/mcp` kullanarak dokümanlara erişebilir!

  ## Hızlı Başlangıç

  Bu hızlı başlangıç rehberi size şunları gösterecektir:
  1. `docker compose` kullanarak mcpjungle sunucusunu yerel olarak başlatın
  2. MCPJungle'da bir MCP sunucusu ekleyin
  3. Claude Desktop'ınızı mcpjungle'a bağlayarak MCP araçlarınıza erişin

  ### Sunucuyu başlatın
  `docker-compose.yaml` dosyasını getirin ve mcpjungle sunucusunu başlatın:
  ```bash
  curl -O https://raw.githubusercontent.com/mcpjungle/MCPJungle/refs/heads/main/docker-compose.yaml
  docker compose up -d
  ```

  Bu, mcpjungle'ın akışlanabilir http mcp sunucusunu varsayılan olarak `http://localhost:8080/mcp` adresinde ortaya çıkarır.

  ### Bir MCP sunucusu ekleyin
  1. `mcpjungle` CLI'sını yerel makinenize brew kullanarak veya doğrudan [Releases Sayfasından](https://github.com/mcpjungle/MCPJungle/releases) indirin.
  ```bash
  brew install mcpjungle/mcpjungle/mcpjungle
  ```

   2. CLI kullanarak [context7](https://context7.com/) MCP sunucusunu mcpjungle'a ekleyin:
  ```bash
  mcpjungle register --name context7 --url https://mcp.context7.com/mcp
  ```

  Buna benzer bir çıktı görmelisiniz:

  ![register-context7](https://raw.githubusercontent.com/mcpjungle/MCPJungle/HEAD/docs/images/register-context7.png)

  ### mcpjungle'a bağlanın

  Claude Desktop'ınızda, mcpjungle MCP sunucusu için konfigürasyonu ekleyin:
  ```json
  {
    "mcpServers": {
      "mcpjungle": {
        "command": "npx",
        "args": [
          "mcp-remote",
          "http://localhost:8080/mcp",
          "--allow-http"
        ]
      }
    }
  }
  ```

  Konfigürasyonu ekledikten sonra, claude'a basit bir şey sormanız deneyebilirsiniz: 
  ```text
  Use context7 to get the documentation for `/lodash/lodash`
  ```

  Claude daha sonra MCPJungle aracılığıyla `context7__get-library-docs` aracını çağırmaya çalışacak ve bu, Lodash kütüphanesinin dokümantasyonunu döndürecektir.

  <p align="center">
    
  </p>

  Artık tek bir birleştirilmiş endpoint'le çalışan bir MCP kurulumunuz var!

  Sonra, [docs.mcpjungle.com](https://docs.mcpjungle.com/) adresindeki tam dokümantasyonu ve [genel yol haritasını](https://docs.mcpjungle.com/roadmap) inceleyin.

  ---

  <details>
  <summary>Eski README referansı</summary>

  # 📋 İçindekiler

  - [Kurulum](#kurulum)
  - [Kullanım](#kullanım)
    - [Sunucu](#sunucu)
      - [mcpjungle sunucusunu Docker içinde çalıştırma](#docker-içinde-çalıştırma)
      - [mcpjungle sunucusunu doğrudan ana makinede çalıştırma](#ana-makinede-doğrudan-çalıştırma)
      - [Sunucuyu kapatma](#kapatma)
    - [İstemci](#istemci)
      - [Akışlanabilir HTTP tabanlı MCP sunucuları ekleme](#akışlanabilir-http-tabanlı-sunucuları-kaydetme)
      - [STDIO tabanlı MCP sunucuları ekleme](#stdio-tabanlı-sunucuları-kaydetme)
      - [MCP sunucularını kaldırma](#mcp-sunucularını-kaydından-çıkarma)
      - [Sunucu için özel URL](#kayıt-defteri-url'si-için-özel-url-yapılandırması)
    - [Soğuk başlangıç sorunu ve Durum Sahibi Bağlantılar](#soğuk-başlangıç-sorunu--durum-sahibi-bağlantılar)
    - [Claude'dan mcpjungle'a bağlan](#claude)
    - [Cursor'dan mcpjungle'a bağlan](#cursor)
    - [Copilot'tan mcpjungle'a bağlan](#copilot)
    - [Araçları Küresel Olarak Etkinleştirme/Devre Dışı Bırakma](#araçları-küresel-olarak-etkinleştirmederve-dışı-bırakma)
    - [İstemler](#istemler)
    - [Araç Grupları](#araç-grupları)
    - [Kimlik Doğrulama](#kimlik-doğrulama)
    - [Kurumsal özellikler](#kurumsal-özellikler-)
      - [Erişim Kontrolü](#erişim-kontrolü)
      - [OpenTelemetry](#opentelemetry)
  - [Sınırlamalar](#mevcut-sınırlamalar-)
  - [Katkıda Bulunma](#katkıda-bulunma-)

  # Kurulum
  MCPJungle bağımsız bir ikili dosya olarak sevk edilir.

  Bunu [Releases](https://github.com/mcpjungle/MCPJungle/releases) Sayfasından indirebilir veya [Homebrew](https://brew.sh/) kullanarak yükleyebilirsiniz:

  ```bash
  brew install mcpjungle/mcpjungle/mcpjungle
  ```

  Kurulumunuzu aşağıdaki komutu çalıştırarak doğrulayın

  ```bash
  mcpjungle version
  ```

  > [!IMPORTANT]
  > MacOS'ta, derlenmiş ikili dosya henüz [Notarize](https://developer.apple.com/documentation/security/notarizing-macos-software-before-distribution) edilmediği için homebrew kullanmanız gerekecektir.

  MCPJungle, kayıt defteri sunucusunu çalıştırmak için kullanışlı olan bir Docker görüntüsü sağlar (bunun hakkında daha sonra).

  ```bash
  docker pull ghcr.io/mcpjungle/mcpjungle
  ```

  # Kullanım
  MCPJungle bir İstemci-Sunucu mimarisine sahiptir ve ikili dosya hem Sunucu hem de İstemciyi çalıştırmanıza izin verir.

  ## Sunucu
  MCPJungle sunucusu, kendisine kayıtlı tüm MCP sunucularını yönetmekten ve AI Ajanlarının bu kayıtlı sunucular tarafından sağlanan araçları keşfetmesi ve çağırması için birleştirilmiş bir MCP ağ geçidi sağlamaktan sorumludur.

  Ağ geçidinin kendisi akışlanabilir http taşıması üzerinde çalışır ve `/mcp` endpoint'inde erişilebilir.

  ### Docker içinde çalıştırma
  MCPJungle sunucusunu yerel olarak çalıştırmak için docker compose önerilen yoldur:
  ```shell
  # docker-compose.yaml bireyler için yerel makinelerinde kişisel kullanım için mcpjungle çalıştırmak üzere optimize edilmiştir.
  # mcpjungle varsayılan olarak `development` modunda çalışır.
  curl -O https://raw.githubusercontent.com/mcpjungle/MCPJungle/refs/heads/main/docker-compose.yaml

  docker compose up -d

  # docker-compose.prod.yaml kuruluşlar için bir uzak sunucuda birden fazla kullanıcı için mcpjungle dağıtmak üzere optimize edilmiştir.
  # mcpjungle varsayılan olarak `enterprise` modunda çalışır, bu da kurumsal özellikleri etkinleştirir.
  curl -O https://raw.githubusercontent.com/mcpjungle/MCPJungle/refs/heads/main/docker-compose.prod.yaml

  docker compose -f docker-compose.prod.yaml up -d
  ```

  > [!NOTE]
  > Eski adıyla `production` modu olarak bilinen `enterprise` modu, açıklık için yeniden adlandırılmıştır.
  > Moda daha sonra bu açık adla atıfta bulunacağız. Her şey aynı kalır.

  Bu, MCPJungle sunucusunu kalıcı bir Postgres veritabanı konteyner'i ile birlikte başlatacaktır.

  Sunucunun çalıştığını hızlıca doğrulayabilirsiniz:
  ```bash
  curl http://localhost:8080/health
  ```

  `npx` veya `uvx`'e bağlı stdio tabanlı MCP sunucularını kaydetmeyi planlıyorsanız, bunun yerine mcpjungle'ın `stdio` etiketli docker görüntüsünü kullanın.
  ```bash
  MCPJUNGLE_IMAGE_TAG=latest-stdio docker compose up -d
  ```

  > [!NOTE]
  > `docker-compose.yaml` kullanıyorsanız, bu zaten varsayılan görüntü etiketidir.
  > `docker-compose.prod.yaml` kullanıyorsanız, stdio görüntü etiketini belirtmeniz gerekir.

  Bu görüntü önemli ölçüde daha büyüktür. Ancak stdio tabanlı MCP sunucularına bağlı olduğunuzda yerel olarak çalıştırmak çok uygun ve önerilidir.

  Örneğin, context7 ve deepwiki gibi yalnızca uzak mcp sunucuları kaydetmek istiyorsanız, standart (minimal) görüntüyü kullanabilirsiniz.

  Ancak `filesystem`, `time`, `github` vb. gibi stdio tabanlı sunucuları da kullanmak istiyorsanız, bunun yerine `stdio` etiketli görüntüyü kullanmalısınız.

  > [!NOTE]
  > Stdio sunucularınız `npx` veya `uvx` dışında araçlara bağlıysa, mcpjungle ikili dosyasının yanı sıra bu bağımlılıkları içeren özel bir docker görüntüsü oluşturmanız gerekir.

  **Üretim Dağıtımı**

  Varsayılan [MCPJungle Docker görüntüsü](https://ghcr.io/mcpjungle/mcpjungle) çok hafiftir - yalnızca minimal bir temel görüntü ve `mcpjungle` ikili dosyasını içerir.

  Bu nedenle üretim dağıtımları için uygun ve önerilidir.

  Veritabanı için, ayrı bir Postgres DB kümesi dağıtmanız ve endpoint'ini mcpjungle'a sağlamanız önerilir ([Veritabanı](#veritabanı) bölümüne bakın).

  [Standart Docker görüntüsünün](./Dockerfile) ve [stdio Docker görüntüsünün](./stdio.Dockerfile) tanımlarını görebilirsiniz.

  ### Ana makinede doğrudan çalıştırma
  Ayrıca sunucuyu doğrudan ana makinenizde ikili dosyayı kullanarak çalıştırabilirsiniz:

  ```bash
  mcpjungle start
  ```

  Bu, ana kayıt defteri sunucusunu ve MCP ağ geçidini başlatır, varsayılan olarak `8080` bağlantı noktasında erişilebilir.

  ### Kapatma
  MCPJungle sunucusunun düzgün bir şekilde kapatılması uygun temizlik sağlamak için önemlidir.

  Sunucu işlemini durdurmak için önerilen yol, ona bir `SIGTERM` sinyali göndermektir.



  ### Veritabanı
  MCPJungle sunucusu bir veritabanına bağlıdır ve varsayılan olarak, geçerli çalışma dizininde `mcpjungle.db` adlı bir SQLite DB dosyası oluşturur.

  Bu, yerel olarak şeyleri test ederken sorun değildir.

  PostgreSQL konfigürasyonu veya özel bir SQLite yolu sağlamazsanız, mcpjungle `./mcpjungle.db` kullanır.

  SQLite DB dosyası için isteğe bağlı olarak özel bir dosya yolu ayarlayabilirsiniz:

  ```bash
  mcpjungle start --sqlite-db-path ./.mcpjungle.db

  # veya
  export SQLITE_DB_PATH=/path/to/.mcpjungle.db
  mcpjungle start
  ```

  NOT: Bu SQLite dosyasını silmek, kayıtlı tüm sunucu verilerini ve MCPJungle'da depolanan diğer durumu kaldırır.

  Daha ciddi dağıtımlar için mcpjungle da Postgresql'i destekler. Bağlanmak için DSN'yi sağlayabilirsiniz:

  ```bash
  # Veritabanı DSN'sini bir env var olarak sağlayabilirsiniz
  export DATABASE_URL=postgres://admin:root@localhost:5432/mcpjungle_db

  #konteyner olarak çalıştır
  docker run ghcr.io/mcpjungle/mcpjungle:latest

  # veya doğrudan çalıştır
  mcpjungle start
  ```

  DSN kullanmayı tercih etmiyorsanız, postgres'e özgü env var'ları veya dosyalarını da sağlayabilirsiniz:
  ```bash
  # postgres'e özgü env var'larını kullanıyorsanız host zorunludur
  export POSTGRES_HOST=localhost
  export POSTGRES_PORT=5432

  export POSTGRES_USER=admin
  export POSTGRES_USER_FILE=/path/to/user-file

  export POSTGRES_PASSWORD=secret
  export POSTGRES_PASSWORD_FILE=/path/to/password-file

  export POSTGRES_DB=mcpjungle_db
  export POSTGRES_DB_FILE=/path/to/db-file

  mcpjungle start
  ```

  ## İstemci
  Sunucu çalışmaya başladıktan sonra, mcpjungle CLI'sini onunla etkileşime geçmek için kullanabilirsiniz.

  MCPJungle şu anda [stdio](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#stdio) ve [Akışlanabilir HTTP](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http) Taşımaları kullanan MCP sunucularını desteklemektedir.

  > [!NOTE]
  > SSE (server-sent events) desteği de mevcuttur ancak şu anda olgun değildir.

  MCPJungle'da bunları nasıl kaydedeceğimize bakalım.

  ### Akışlanabilir HTTP tabanlı sunucuları kaydetme
  Varsayıp ki, `http://127.0.0.1:8000/mcp` adresinde `add`, `subtract` vb. gibi temel matematik araçları sağlayan bir akışlanabilir http MCP sunucusu zaten çalıştırıyorsunuz.

  Bu MCP sunucusunu MCPJungle'a kaydedebilirsiniz:
  ```bash
  mcpjungle register --name calculator --description "Provides some basic math tools" --url http://127.0.0.1:8000/mcp
  ```

  Docker compose kullanarak sunucuyu çalıştırdıysanız ve Linux üzerinde değilseniz, yerel loopback adresiniz yerine `host.docker.internal` kullanmanız gerekecektir.
  ```bash
  mcpjungle register --name calculator --description "Provides some basic math tools" --url http://host.docker.internal:8000/mcp
  ```

  Kayıt defteri artık bu MCP sunucusunu izlemeye başlayacak ve araçlarını yükleyecektir.

  ![MCPJungle'da bir MCP sunucusu kaydedin](https://raw.githubusercontent.com/mcpjungle/MCPJungle/HEAD/assets/register-mcp-server.png)

  Ayrıca MCP sunucusunu kaydetmek için bir konfigürasyon dosyası sağlayabilirsiniz:
  ```bash
  cat ./calculator.json
  {
    "name": "calculator",
    "transport": "streamable_http",
    "description": "Provides some basic math tools",
    "url": "http://127.0.0.1:8000/mcp"
  }

  mcpjungle register -c ./calculator.json
  ```

  Bu sunucu tarafından sağlanan tüm araçlar artık MCPJungle aracılığıyla erişilebilir:

  ```bash
  mcpjungle list tools

  # Araç kullanımını denetleyin
  mcpjungle usage calculator__multiply

  # Bir araç çağır
  mcpjungle invoke calculator__multiply --input '{"a": 100, "b": 50}'
  ```

  ![MCPJungle Proxy MCP sunucusu aracılığıyla bir araç çağırın](https://raw.githubusercontent.com/mcpjungle/MCPJungle/HEAD/assets/tool-call.png)

  > [!NOTE]
  > MCPJungle'daki bir araç, `<mcp-server-name>__<tool-name>` desenini takip eden kanonik adı ile atıfta bulunulmalıdır.
  > Sunucu adı ve araç adı çift alt çizgi `__` ile ayrılır.
  >
  > örneğin- `github` adlı bir MCP sunucusu kaydederseniz ve `git_commit` adlı bir araç sağlarsa, bunu MCPJungle'da `github__git_commit` adını kullanarak çağırabilirsiniz.
  > 
  > MCP istemciniz de MCPJungle aracılığıyla aracı çağırmak için bu kanonik adı kullanmalıdır.

  Akışlanabilir HTTP tabanlı MCP sunucusunu kaydetmek için konfigürasyon dosyası formatı:
  ```json
  {
    "name": "<mcp sunucunuzun adı>",
    "transport": "streamable_http",
    "description": "<açıklama>",
    "url": "<mcp sunucusunun url'si>",
    "bearer_token": "<kimlik doğrulama için isteğe bağlı bearer token>",
    "headers": {
      "<özel http başlığı>": "<değer>"
    }
  }
  ```

  ### STDIO tabanlı sunucuları kaydetme

  STDIO taşımasını kullanan bir MCP sunucusu için örnek konfigürasyon dosyası (buna `filesystem.json` diyelim):

  ```json
  {
    "name": "filesystem",
    "transport": "stdio",
    "description": "filesystem mcp server",
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-filesystem", "."]
  }
  ```

  Konfigürasyon dosyasını sağlayarak bu MCP sunucusunu MCPJungle'a kaydedebilirsiniz:
  ```bash
  # JSON konfigürasyonunu bir dosyaya kaydedin (örneğin, filesystem.json)
  mcpjungle register -c ./filesystem.json
  ```

  STDIO tabanlı MCP sunucusunu kaydetmek için konfigürasyon dosyası formatı:

  ```json
  {
    "name": "<mcp sunucunuzun adı>",
    "transport": "stdio",
    "description": "<açıklama>",
    "command": "<mcp sunucusunu çalıştırmak için komut, örneğin- 'npx', 'uvx'>",
    "args": ["komut", "iletecek", "argümanlar"],
    "env": {
      "KEY": "value"
    }
  }
  ```

  Ayrıca [STDIO tabanlı MCP sunucusunu kaydetme hakkında](https://youtu.be/YqHiuexR5fw) kısa bir video izleyebilirsiniz.

  > [!TIP]
  > Eğer STDIO sunucunuz bir nedenle başarısız olur veya hata verirse, mcpjungle sunucusunun günlüklerini kontrol edin ve `stderr` çıktısını görüntüleyin.

  #### JSON konfigürasyon dosyalarında ortam değişkenleri

  MCP sunucusu kaydetmek veya araç grupları oluşturmak gibi diğer varlıkları oluşturmak için bir JSON konfigürasyon dosyası kullandığınızda, CLI, isteği sunucuya göndermeden önce dize değerlerinde ortam değişkeni yer tutucularını çözebilir.

  - Yalnızca `${VAR_NAME}` olarak yazılan yer tutucular çözülür.
  - Yer tutucular bir dize değerinin herhangi bir yerine görünebilir, örneğin `prefix-${VAR_NAME}-suffix`.
  - Çözümleme CLI işleminde gerçekleşir, bu nedenle ortam değişkeni, komutu çalıştırdığınız yerde kullanılabilir olmalıdır.
  - Başvurulan ortam değişkeni ayarlanmamışsa, komut bir hata ile başarısız olur.
  - Bu, iç içe nesneler ve dize dizileri de dahil olmak üzere JSON konfigürasyonu genelinde dize alanlarına uygulanır.

  Örnek MCP sunucu konfigürasyonu:

  ```json
  {
    "name": "affine-main",
    "transport": "streamable_http",
    "description": "AFFiNE workspace MCP server",
    "url": "https://app.affine.pro/api/workspaces/${AFFINE_WORKSPACE_ID}/mcp",
    "bearer_token": "${AFFINE_API_TOKEN}",
    "headers": {
      "X-Workspace": "${AFFINE_WORKSPACE_ID}"
    }
  }
  ```

  Örnek STDIO konfigürasyonu:

  ```json
  {
    "name": "my-stdio-server",
    "transport": "stdio",
    "command": "uvx",
    "args": ["my-server", "--workspace", "${WORKSPACE_ID}"],
    "env": {
      "API_TOKEN": "${API_TOKEN}"
    }
  }
  ```

  **Uyarı** ⚠️

  MCPJungle Docker içinde çalıştırırken, `filesystem` mcp sunucusunu çalıştırmak için bazı ek konfigürasyonlar gerekir.

  Varsayılan olarak, konteyner içinde mcpjungle ana makinenizin dosya sistemine erişemez.

  Bu nedenle, şunları yapmanız gerekir:
  - erişmek istediğiniz ana makine dizinini konteynerda bir hacim olarak monte edin
  - dosya sistemi mcp sunucusu komut argümanlarında montaj yolunu belirtin

  `docker-compose.yaml` tarafından sağlanan mcpjungle, geçerli çalışma dizinini konteynerda `/host` olarak monte eder.

  Bu nedenle, dosya sistemi mcp sunucusu için aşağıdaki konfigürasyonu kullanabilirsiniz:

  ```json
  {
    "name": "filesystem",
    "transport": "stdio",
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-filesystem", "/host"]
  }
  ```

  Daha sonra, mcp `/host` erişimine sahiptir, yani ana makinenizde geçerli çalışma dizini.

  Daha fazla ayrıntı için [DEVELOPMENT.md](./DEVELOPMENT.md#docker-filesystem-access) bölümüne bakın.

  #### Docker veya Kubernetes dağıtımından CLI komutlarını çalıştırma
  MCPJungle sunucunuz uzak bir Docker konteynerinde veya Kubernetes kümesinde çalışıyorsa, `mcpjungle` ikili dosyasını doğrudan konteyner içinde de çalıştırabilirsiniz:

  ```bash
  docker exec -it <container_name> /mcpjungle
  kubectl -n <namespace> exec -it po/<pod_name> -- /mcpjungle
  ```

  > [!NOTE]
  > Standart görüntü bir shell içermez. `/mcpjungle` öğesini doğrudan `docker exec` veya `kubectl exec` aracılığıyla çalıştırın.

  Bu, sunucunun çalıştığı aynı ortamdan CLI komutlarını çalıştırmak için yararlıdır.

  ### MCP sunucularını kaydından çıkarma
  MCPJungle'dan bir MCP sunucusunu kaldırabilirsiniz.

  ```bash
  mcpjungle deregister calculator
  mcpjungle deregister filesystem
  ```

  Kaldırıldık
---

<h1 align="center">
  MCPJungle
</h1>
<p align="center">
  <strong>Run all your MCP servers behind one endpoint</strong>
</p>
<p align="center">
  <a href="https://docs.mcpjungle.com" style="text-decoration: none;">
    
  </a>

  <a href="https://github.com/mcpjungle/mcpjungle/pkgs/container/mcpjungle" style="text-decoration: none;">
    
  </a>

  <a href="https://discord.gg/CapV4Z3krk" style="text-decoration: none;">
    
  </a>
</p>

MCPJungle is a self-hosted MCP gateway for developers and teams who want to manage multiple MCP servers without scattered client configurations, duplicated setup, or inconsistent access control.

Use it **locally** to keep your personal MCP setup clean, or run it as **shared infrastructure** for a team with centralized discovery, access control, and observability.

![diagram](https://raw.githubusercontent.com/mcpjungle/MCPJungle/HEAD/assets/mcpjungle-diagram/april-2026/mcpjungle-diagram.png)

Instead of wiring every MCP server into every AI client, register your servers once in MCPJungle and let Claude, Cursor, Codex, or your own Agents connect to a single MCP endpoint.

## Why MCPJungle?

MCP is powerful, but managing many MCP servers gets messy fast.

Without a gateway:

- 🔌 Every client needs its own MCP server configuration
- 🧩 Tools, prompts, and resources are scattered across different servers
- 🔐 Access control is duplicated or missing
- 👥 Teams have no shared view of available MCP tools
- 🛠️ Local setups become hard to reproduce

MCPJungle gives you a single control point:

- 🌐 One MCP endpoint for Claude, Cursor, Copilot, and custom agents
- 🗂️ One place to register and manage MCP servers
- 🔎 Unified discovery for tools, prompts, and resources
- 🎛️ Optional tool groups to expose only the tools a client should see
- 📊 Simple access-control and observability hooks for shared deployments

Start with a local setup. Scale to a shared team gateway when you need it.

![MCPJungle dashboard UI](https://raw.githubusercontent.com/mcpjungle/MCPJungle/HEAD/docs/images/dashboard-ui.png)

## Documentation
 Mcpjungle documentation has a new home: [https://docs.mcpjungle.com](https://docs.mcpjungle.com).
 
 Please prefer the docs site over this README for the latest guides, reference, and operational details.
 
 Your AI Clients can also access the docs using its MCP server `https://docs.mcpjungle.com/mcp`!

## Quickstart

This quickstart guide will show you how to:
1. Start the mcpjungle server locally using `docker compose`
2. Add an MCP server in mcpjungle
3. Connect your Claude Desktop to mcpjungle to access your MCP tools

### Start the server
Fetch the `docker-compose.yaml` and start the mcpjungle server:
```bash
curl -O https://raw.githubusercontent.com/mcpjungle/MCPJungle/refs/heads/main/docker-compose.yaml
docker compose up -d
```

This exposes mcpjungle's streamable http mcp server at `http://localhost:8080/mcp` by default.

### Add an MCP server
1. Download the `mcpjungle` CLI on your local machine either using brew or directly from the [Releases Page](https://github.com/mcpjungle/MCPJungle/releases).
```bash
brew install mcpjungle/mcpjungle/mcpjungle
```

 2. Add the [context7](https://context7.com/) MCP server to mcpjungle using the CLI:
```bash
mcpjungle register --name context7 --url https://mcp.context7.com/mcp
```

You should see output similar to this:

![register-context7](https://raw.githubusercontent.com/mcpjungle/MCPJungle/HEAD/docs/images/register-context7.png)

### Connect to mcpjungle

In your Claude Desktop, add the configuration for mcpjungle MCP server:
```json
{
  "mcpServers": {
    "mcpjungle": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "http://localhost:8080/mcp",
        "--allow-http"
      ]
    }
  }
}
```

Once you have added the configuration, try asking claude something simple: 
```text
Use context7 to get the documentation for `/lodash/lodash`
```

Claude will then attempt to call the `context7__get-library-docs` tool via MCPJungle, which will return the documentation for the Lodash library.

<p align="center">
  
</p>

You now have a working MCP setup with a single unified endpoint!

Next, explore the complete documentation at [docs.mcpjungle.com](https://docs.mcpjungle.com/) and the [public roadmap](https://docs.mcpjungle.com/roadmap).

---

<details>
<summary>Legacy README reference</summary>

# 📋 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Server](#server)
    - [Running mcpjungle server inside Docker](#running-inside-docker)
    - [Running mcpjungle server directly on the host machine](#running-directly-on-host)
    - [Shutting down the server](#shutting-down)
  - [Client](#client)
    - [Adding Streamable HTTP-based MCP servers](#registering-streamable-http-based-servers)
    - [Adding STDIO-based MCP servers](#registering-stdio-based-servers)
    - [Removing MCP servers](#deregistering-mcp-servers)
    - [Custom URL for server](#configuring-a-custom-registry-url)
  - [Cold-start problem & Stateful Connections](#cold-start-problem--stateful-connections)
  - [Connect to mcpjungle from Claude](#claude)
  - [Connect to mcpjungle from Cursor](#cursor)
  - [Connect to mcpjungle from Copilot](#copilot)
  - [Enabling/Disabling Tools globally](#enablingdisabling-tools)
  - [Prompts](#prompts)
  - [Tool Groups](#tool-groups)
  - [Authentication](#authentication)
  - [Enterprise features](#enterprise-features-)
    - [Access Control](#access-control)
    - [OpenTelemetry](#opentelemetry)
- [Limitations](#current-limitations-)
- [Contributing](#contributing-)

# Installation
MCPJungle is shipped as a stand-alone binary.

You can either download it from the [Releases](https://github.com/mcpjungle/MCPJungle/releases) Page or use [Homebrew](https://brew.sh/) to install it:

```bash
brew install mcpjungle/mcpjungle/mcpjungle
```

Verify your installation by running

```bash
mcpjungle version
```

> [!IMPORTANT]
> On MacOS, you will have to use homebrew because the compiled binary is not [Notarized](https://developer.apple.com/documentation/security/notarizing-macos-software-before-distribution) yet.

MCPJungle provides a Docker image which is useful for running the registry server (more about it later).

```bash
docker pull ghcr.io/mcpjungle/mcpjungle
```

# Usage
MCPJungle has a Client-Server architecture and the binary lets you run both the Server and the Client.

## Server
The MCPJungle server is responsible for managing all the MCP servers registered in it and providing a unified MCP gateway for AI Agents to discover and call tools provided by these registered servers.

The gateway itself runs over streamable http transport and is accessible at the `/mcp` endpoint.

### Running inside Docker
For running the MCPJungle server locally, docker compose is the recommended way:
```shell
# docker-compose.yaml is optimized for individuals running mcpjungle on their local machines for personal use.
# mcpjungle will run in `development` mode by default.
curl -O https://raw.githubusercontent.com/mcpjungle/MCPJungle/refs/heads/main/docker-compose.yaml

docker compose up -d

# docker-compose.prod.yaml is optimized for orgs deploying mcpjungle on a remote server for multiple users.
# mcpjungle will run in `enterprise` mode by default, which enables enterprise features.
curl -O https://raw.githubusercontent.com/mcpjungle/MCPJungle/refs/heads/main/docker-compose.prod.yaml

docker compose -f docker-compose.prod.yaml up -d
```

> [!NOTE]
> The `enterprise` mode used to be called `production` mode.
> The mode has now been renamed for clarity. Everything else remains the same.

This will start the MCPJungle server along with a persistent Postgres database container.

You can quickly verify that the server is running:
```bash
curl http://localhost:8080/health
```

If you plan on registering stdio-based MCP servers that rely on `npx` or `uvx`, use mcpjungle's `stdio` tagged docker image instead.
```bash
MCPJUNGLE_IMAGE_TAG=latest-stdio docker compose up -d
```

> [!NOTE]
> If you're using `docker-compose.yaml`, this is already the default image tag.
> You only need to specify the stdio image tag if you're using `docker-compose.prod.yaml`.

This image is significantly larger. But it is very convenient and recommended for running locally when you rely on stdio-based MCP servers.

For example, if you only want to register remote mcp servers like context7 and deepwiki, you can use the standard (minimal) image.

But if you also want to use stdio-based servers like `filesystem`, `time`, `github`, etc., you should use the `stdio`-tagged image instead.

> [!NOTE]
> If your stdio servers rely on tools other than `npx` or `uvx`, you will have to create a custom docker image that includes those dependencies along with the mcpjungle binary.

**Production Deployment**

The default [MCPJungle Docker image](https://ghcr.io/mcpjungle/mcpjungle) is very lightweight - it only contains a minimal base image and the `mcpjungle` binary.

It is therefore suitable and recommended for production deployments.

For the database, we recommend you deploy a separate Postgres DB cluster and supply its endpoint to mcpjungle (see [Database](#database) section below).

You can see the definitions of the [standard Docker image](./Dockerfile) and the [stdio Docker image](./stdio.Dockerfile).

### Running directly on host
You can also run the server directly on your host machine using the binary:

```bash
mcpjungle start
```

This starts the main registry server and MCP gateway, accessible on port `8080` by default.

### Shutting down
It is important that the mcpjungle server shuts down gracefully to ensure proper cleanup.

The recommended way to stop the server process is to send a `SIGTERM` signal to it.



### Database
The mcpjungle server relies on a database and by default, creates a SQLite DB file `mcpjungle.db` in the current working directory.

This is okay when you're just testing things out locally.

If you do not provide PostgreSQL configuration or a custom SQLite path, mcpjungle uses `./mcpjungle.db`.

You can optionally set a custom file path for the SQLite DB file:

```bash
mcpjungle start --sqlite-db-path ./.mcpjungle.db

# or
export SQLITE_DB_PATH=/path/to/.mcpjungle.db
mcpjungle start
```

NOTE: Deleting that SQLite file removes all registered server data and other MCPJungle state stored in it.

For more serious deployments, mcpjungle also supports Postgresql. You can supply the DSN to connect to it:

```bash
# You can supply the database DSN as an env var
export DATABASE_URL=postgres://admin:root@localhost:5432/mcpjungle_db

#run as container
docker run ghcr.io/mcpjungle/mcpjungle:latest

# or run directly
mcpjungle start
```

You can also supply postgres-specific env vars or files if you don't prefer using the DSN:
```bash
# host is mandatory if you're using postgres-specific env vars
export POSTGRES_HOST=localhost
export POSTGRES_PORT=5432

export POSTGRES_USER=admin
export POSTGRES_USER_FILE=/path/to/user-file

export POSTGRES_PASSWORD=secret
export POSTGRES_PASSWORD_FILE=/path/to/password-file

export POSTGRES_DB=mcpjungle_db
export POSTGRES_DB_FILE=/path/to/db-file

mcpjungle start
```

## Client
Once the server is up, you can use the mcpjungle CLI to interact with it.

MCPJungle currently supports MCP servers using [stdio](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#stdio) and [Streamable HTTP](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http) Transports.

> [!NOTE]
> Support for SSE (server-sent events) also exists but is currently not mature.

Let's see how to register them in mcpjungle.

### Registering streamable HTTP-based servers
Let's say you're already running a streamable http MCP server locally at `http://127.0.0.1:8000/mcp` which provides basic math tools like `add`, `subtract`, etc.

You can register this MCP server with MCPJungle:
```bash
mcpjungle register --name calculator --description "Provides some basic math tools" --url http://127.0.0.1:8000/mcp
```

If you used docker compose to run the server, and you're not on Linux, you will have to use `host.docker.internal` instead of your local loopback address.
```bash
mcpjungle register --name calculator --description "Provides some basic math tools" --url http://host.docker.internal:8000/mcp
```

The registry will now start tracking this MCP server and load its tools.

![register a MCP server in MCPJungle](https://raw.githubusercontent.com/mcpjungle/MCPJungle/HEAD/assets/register-mcp-server.png)

You can also provide a configuration file to register the MCP server:
```bash
cat ./calculator.json
{
  "name": "calculator",
  "transport": "streamable_http",
  "description": "Provides some basic math tools",
  "url": "http://127.0.0.1:8000/mcp"
}

mcpjungle register -c ./calculator.json
```

All tools provided by this server are now accessible via MCPJungle:

```bash
mcpjungle list tools

# Check tool usage
mcpjungle usage calculator__multiply

# Call a tool
mcpjungle invoke calculator__multiply --input '{"a": 100, "b": 50}'
```

![Call a tool via MCPJungle Proxy MCP server](https://raw.githubusercontent.com/mcpjungle/MCPJungle/HEAD/assets/tool-call.png)

> [!NOTE]
> A tool in MCPJungle must be referred to by its canonical name which follows the pattern `<mcp-server-name>__<tool-name>`.
> Server name and tool name are separated by a double underscore `__`.
>
> eg- If you register a MCP server `github` which provides a tool called `git_commit`, you can invoke it in MCPJungle using the name `github__git_commit`.
> 
> Your MCP client must also use this canonical name to call the tool via MCPJungle.

The config file format for registering a Streamable HTTP-based MCP server is:
```json
{
  "name": "<name of your mcp server>",
  "transport": "streamable_http",
  "description": "<description>",
  "url": "<url of the mcp server>",
  "bearer_token": "<optional bearer token for authentication>",
  "headers": {
    "<custom http header>": "<value>"
  }
}
```

### Registering STDIO-based servers

Here's an example configuration file (let's call it `filesystem.json`) for a MCP server that uses the STDIO transport:

```json
{
  "name": "filesystem",
  "transport": "stdio",
  "description": "filesystem mcp server",
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-filesystem", "."]
}
```

You can register this MCP server in MCPJungle by providing the configuration file:
```bash
# Save the JSON configuration to a file (e.g., filesystem.json)
mcpjungle register -c ./filesystem.json
```

The config file format for registering a STDIO-based MCP server is:

```json
{
  "name": "<name of your mcp server>",
  "transport": "stdio",
  "description": "<description>",
  "command": "<command to run the mcp server, eg- 'npx', 'uvx'>",
  "args": ["arguments", "to", "pass", "to", "the", "command"],
  "env": {
    "KEY": "value"
  }
}
```

You can also watch a quick video on [How to register a STDIO-based MCP server](https://youtu.be/YqHiuexR5fw).

> [!TIP]
> If your STDIO server fails or throws errors for some reason, check the mcpjungle server's logs to view its `stderr` output.

#### Environment variables in JSON config files

When you use a JSON config file to register a mcp server or create other entities like tol groups, the CLI can resolve environment variable placeholders in string values before sending the request to the server.

- Only placeholders written as `${VAR_NAME}` are resolved.
- Placeholders can appear anywhere inside a string value, for example `prefix-${VAR_NAME}-suffix`.
- Resolution happens in the CLI process, so the environment variable must be available where you run the command.
- If a referenced environment variable is not set, the command fails with an error.
- This applies to string fields across the JSON config, including nested objects and string arrays.

Example MCP server config:

```json
{
  "name": "affine-main",
  "transport": "streamable_http",
  "description": "AFFiNE workspace MCP server",
  "url": "https://app.affine.pro/api/workspaces/${AFFINE_WORKSPACE_ID}/mcp",
  "bearer_token": "${AFFINE_API_TOKEN}",
  "headers": {
    "X-Workspace": "${AFFINE_WORKSPACE_ID}"
  }
}
```

Example STDIO config:

```json
{
  "name": "my-stdio-server",
  "transport": "stdio",
  "command": "uvx",
  "args": ["my-server", "--workspace", "${WORKSPACE_ID}"],
  "env": {
    "API_TOKEN": "${API_TOKEN}"
  }
}
```

**Caveat** ⚠️

When running mcpjungle inside Docker, you need some extra configuration to run the `filesystem` mcp server.

By default, mcpjungle inside container does not have access to your host filesystem.

So you must:
- mount the host directory you want to access as a volume in the container
- specify the mount path as the directory in the filesystem mcp server command args

The `docker-compose.yaml` provided by mcpjungle mounts the current working directory as `/host` in the container.

So you can use the following configuration for the filesystem mcp server:

```json
{
  "name": "filesystem",
  "transport": "stdio",
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-filesystem", "/host"]
}
```

Then, the mcp has access to `/host`, ie, the current working directory on your host machine.

See [DEVELOPMENT.md](./DEVELOPMENT.md#docker-filesystem-access) for more details.

#### Running CLI commands from a Docker or Kubernetes deployment
If your MCPJungle server is running in a remote Docker container or Kubernetes cluster, you can also execute the `mcpjungle` binary directly inside the container:

```bash
docker exec -it <container_name> /mcpjungle
kubectl -n <namespace> exec -it po/<pod_name> -- /mcpjungle
```

> [!NOTE]
> The standard image does not include a shell. Run `/mcpjungle` directly via `docker exec` or `kubectl exec`.

This is useful for running CLI commands from the same environment where the server is running.

### Deregistering MCP servers
You can remove a MCP server from mcpjungle.

```bash
mcpjungle deregister calculator
mcpjungle deregister filesystem
```

Once removed, this mcp server and its tools are no longer available to you or your MCP clients.

### Configuring a custom registry URL

By default, the CLI connects to the mcpjungle server at `http://127.0.0.1:8000`.

If your server is running on a different host or port (e.g., a remote deployment), you can configure the registry URL in two ways:

**Option 1: Use the `--registry` flag**
```bash
mcpjungle --registry http://my-server:9000 list tools
```

**Option 2: Set it in the config file**

Create or edit `~/.mcpjungle.conf`:
```yaml
registry_url: http://my-server:9000
```

This avoids having to pass the `--registry` flag on every command.


## Cold-start problem & Stateful Connections
By default, MCPJungle always creates a new connection with the upstream MCP server when a tool is called.

When the tool call is complete, the connection is closed.

This keeps the system clean and avoids memory leaks.

But sometimes this can cause a latency overhead. For eg- a new process is spawned every time you call a tool of a STDIO-based mcp server. If the server takes several seconds to start up, this slows down the tool call and the overall interaction.

To solve this, MCPJungle also supports stateful connections.

You can set the `session_mode` to `stateful` (default is `stateless`) in you MCP server configuration:
```json
{
  "name": "filesystem",
  "transport": "stdio",
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-filesystem", "."],
  "session_mode": "stateful"
}
```

mcpjungle will create a new connection with this mcp server **the first time you call one of its tools**.

This connection is not closed when the tool call is complete. Subsequent tool calls to this server reuse the same connection, avoiding the cold-start overhead.

The connection is only closed when:
1. mcpjungle server is stopped
2. the mcp server is deregistered from mcpjungle
3. the connection times out after a period of inactivity. You can set the number of seconds using the `SESSION_IDLE_TIMEOUT_SEC` env var to configure this globally in mcpjungle server (default value is -1, which means no timeout).

When possible, it is recommended that you use stateless connections (default setting).

## Integration with other MCP Clients
Assuming that MCPJungle is running on `http://localhost:8080`, use the following configurations to connect to it:

### Claude
```json
{
  "mcpServers": {
    "mcpjungle": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "http://localhost:8080/mcp",
        "--allow-http"
      ]
    }
  }
}
```

### Cursor
```json
{
  "mcpServers": {
    "mcpjungle": {
      "url": "http://localhost:8080/mcp"
    }
  }
}
```

You can watch a quick video on [How to connect Cursor to MCPJungle](https://youtu.be/SaUqj-eLPnw).

### Copilot

Follow Copilot's doc on [configuraing a MCP server manually](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp/extend-copilot-chat-with-mcp#configuring-mcp-servers-manually-1).

Your mcp.json config file should look like this after adding mcpjungle to it:
```json
{
  "servers": {
    "mcpjungle": {
      "url": "http://localhost:8080/mcp"
    }
  }
}
```

> [!NOTE]
> You may have to click on `Start` for Copilot to actually start interacting with mcpjungle.

## Enabling/Disabling Tools
You can disable and re-enable a specific tool or all the tools provided by an MCP Server.

If a tool is disabled, it is not available via the MCPJungle Proxy or any of the Tool Groups, so no MCP clients can view or call it.

You can disable and enable Prompts as well.

```bash
# disable the `get-library-docs` tool provided by the `context7` MCP server
mcpjungle disable tool context7__get-library-docs

# re-enable the tool
mcpjungle enable tool context7__get-library-docs

# disable all tools in context7
mcpjungle disable tool context7

# disable the whole `context7` MCP server (disables all tools & prompts)
mcpjungle disable server context7

# re-enable `context7`
mcpjungle enable server context7

# disable a prompt
mcpjungle disable prompt "huggingface_Model Details"

# disable all prompts in context7
mcpjungle disable prompt context7
```

A disabled tool is still accessible via mcpjungle's HTTP API, so humans can still manage it from the CLI (or any other HTTP client).

> [!NOTE]
> When a new server is registered in MCPJungle, all its tools & prompts are **enabled** by default.

## Prompts
Mcpjungle supports [Prompts](https://modelcontextprotocol.io/specification/2025-06-18/server/prompts).

When you register a new MCP server, if it provides prompts, they're registered in mcpjungle too.

Here are some examples of how you can interact with Prompts using the CLI:
```bash
# list all prompts provided by the huggingface mcp
$ mcpjungle list prompts --server huggingface

# Retrieve the "Model Details" prompt, supply custom arguments
$ mcpjungle get prompt "huggingface__Model Details" --arg model_id="openai/gpt-oss-120b"
```

## Tool Groups
As you add more MCP servers to MCPJungle, the number of tools available through the Gateway can grow significantly.

If your MCP client is exposed to hundreds of tools through the gateway MCP, its performance may degrade.

MCPJungle allows you to **expose only a subset of all available tools to your MCP clients using Tool Groups**.

You can create a new group and only include specific tools that you wish to expose.

Once a group is created, mcpjungle returns a unique endpoint for it.

You can then configure your MCP client to use this group-specific endpoint instead of the main gateway endpoint.

### Creating a Tool Group
You can create a new tool group by providing a JSON configuration file to the `create group` command.

You must specify a unique `name` for the group and define which tools to include using one or more of the following fields:
- **`included_tools`**: List specific tool names to include (e.g., `["filesystem__read_file", "time__get_current_time"]`)
- **`included_servers`**: Include ALL tools from specific MCP servers (e.g., `["time", "deepwiki"]`)
- **`excluded_tools`**: Exclude specific tools (useful when including entire servers)

#### Example 1: Cherry-picking specific tools
Here is an example of a tool group configuration file (`claude-tools-group.json`):
```json
{
  "name": "claude-tools",
  "description": "This group only contains tools for Claude Desktop to use",
  "included_tools": [
    "filesystem__read_file",
    "deepwiki__read_wiki_contents",
    "time__get_current_time"
  ]
}
```

This group exposes only 3 handpicked tools instead of all available tools.

#### Example 2: Including entire servers with exclusions
You can also include all tools from specific servers and optionally exclude some:
```json
{
  "name": "claude-tools",
  "description": "All tools from time and deepwiki servers except time__convert_time",
  "included_servers": ["time", "deepwiki"],
  "excluded_tools": ["time__convert_time"]
}
```

This includes ALL tools from the `time` and `deepwiki` servers except `time__convert_time`.

#### Example 3: Mixing approaches
You can combine all three fields for maximum flexibility:
```json
{
  "name": "comprehensive-tools",
  "description": "Mix of manual tools, server inclusion, and exclusions",
  "included_tools": ["filesystem__read_file"],
  "included_servers": ["time"],
  "excluded_tools": ["time__convert_time"]
}
```

This includes `filesystem__read_file` plus all tools from the `time` server except `time__convert_time`.

You can create this group in mcpjungle:
```bash
$ mcpjungle create group -c ./claude-tools-group.json

Tool Group claude-tools created successfully
It is now accessible at the following streamable http endpoint:

    http://127.0.0.1:8080/v0/groups/claude-tools/mcp

```

You can then configure Claude (or any other MCP client) to use this group-specific endpoint to access the MCP server.

The client will then ONLY see and be able to use these 3 tools and will not be aware of any other tools registered in MCPJungle.

> [!TIP]
> You can run `mcpjungle list tools` to view all available tools and pick the ones you want to include in your group.

You can also watch a [Video on using Tool Groups](https://youtu.be/A21rfGgo38A).

> [!NOTE]
> The exclusion is always applied at the end.
> So if you add a tool to `included_tools` and also list it in `excluded_tools`, it will be excluded from the final group.

#### Limitation 🚧
[Prompts](https://modelcontextprotocol.io/specification/2025-06-18/server/prompts) are currently not supported in Tool Groups. We're working to fix this [issue](https://github.com/mcpjungle/MCPJungle/issues/136) 🛠️

### Managing tool groups
You can currently perform operations like listing all groups, viewing details of a specific group and deleting a group.

```bash
# list all tool groups
mcpjungle list groups

# view details of a specific group
mcpjungle get group claude-tools

# delete a group
mcpjungle delete group claude-tools
```

### Working with tools in groups
You can list and invoke tools within specific groups using the `--group` flag:

```bash
# list tools in a specific group
mcpjungle list tools --group claude-tools

# invoke a tool from a specific group context
mcpjungle invoke filesystem__read_file --group claude-tools --input '{"path": "README.md"}'
```

These commands provide group-scoped operations, making it easier to work with tools within specific contexts and validate that tools are available in your groups.

> [!NOTE]
> If a tool is included in a group but is later disabled globally or deleted, then it will not be available via the group's MCP endpoint.
>
> But if the tool is re-enabled or added again later, it will automatically become available in the group again.

**Limitations** 🚧
1. Currently, you cannot update an existing tool group. You must delete the group and create a new one with the modified configuration file.
2. In `enterprise` mode, currently only an admin can create a Tool Group. We're working on allowing standard Users to create their own groups as well.

## Authentication
MCPJungle currently supports authentication if your Streamable HTTP MCP Server accepts static tokens for auth.

This is useful when using SaaS-provided MCP Servers like HuggingFace, Stripe, etc. which require your API token for authentication.

You can supply your token while registering the MCP server:
```bash
# If you specify the `--bearer-token` flag, MCPJungle will add the `Authorization: Bearer <token>` header to all requests made to this MCP server.
mcpjungle register --name huggingface --description "HuggingFace MCP Server" --url https://huggingface.co/mcp --bearer-token <your-hf-api-token>
```

Or from your configuration file
```bash
{
  "name": "huggingface",
  "transport": "streamable_http",
  "url": "https://huggingface.co/mcp",
  "description": "hugging face mcp server",
  "bearer_token": "<your-hf-api-token>"
}
```

If you need to supply a custom value for the `Authorization` header or add additional custom headers, you can use the `headers` field in the config file:
```json
{
  "name": "sourcegraph",
  "transport": "streamable_http",
  "url": "https://sourcegraph.mycompany.com/.api/mcp",
  "headers": {
    "Authorization": "token <your-sourcegraph-token>",
    "Custom-Header": "custom-value"
  }
}
```

Support for Oauth flow is coming soon!

## Enterprise Features 🔒

If you're running MCPJungle in your organisation, we recommend running the Server in the `enterprise` mode:
```bash
# enable enterprise features by running in enterprise mode
mcpjungle start --enterprise

# you can also specify the server mode as environment variable (valid values are `development` and `enterprise`)
export SERVER_MODE=enterprise
mcpjungle start

# Or use the enterprise-mode docker compose file as described above
docker compose -f docker-compose.prod.yaml up -d
```

By default, mcpjungle server runs in `development` mode which is ideal for individuals running it locally.

In Enterprise mode, the server enforces stricter security policies and will provide additional features like Authentication, ACLs, observability and more.

After starting the server in enterprise mode, you must initialize it by running the following command on your client machine:
```bash
mcpjungle init-server
```

This will create an admin user in the server and store its API access token in your home directory (`~/.mcpjungle.conf`).

You can then use the mcpjungle cli to make authenticated requests to the server.

### Access Control

In `development` mode, all MCP clients have full access to all the MCP servers registered in MCPJungle Proxy.

`enterprise` mode lets you control which MCP clients can access which MCP servers.

Suppose you have registered 2 MCP servers `calculator` and `github` in MCPJungle in enterprise mode.

By default, no MCP client can access these servers. **You must create an MCP Client in mcpjungle and explicitly allow it to access the MCP servers.**

```bash
# Create a new MCP client for your Cursor IDE to use. It can access the calculator and github MCP servers
mcpjungle create mcp-client cursor-local --allow "calculator, github"

MCP client 'cursor-local' created successfully!
Servers accessible: calculator,github

Access token: 1YHf2LwE1LXtp5lW_vM-gmdYHlPHdqwnILitBhXE4Aw
Send this token in the `Authorization: Bearer {token}` HTTP header.
```

Mcpjungle creates an access token for your client.
Configure your client or agent to send this token in the `Authorization` header when making requests to the mcpjungle proxy.

> [!TIP]
> You can also supply a custom access token for your mcp clients and user accounts using the `--access-token` flag.
> This is useful when you want to manage tokens yourself, perhaps through a central identity server.

For example, you can add the following configuration in Cursor to connect to MCPJungle:

```json
{
  "mcpServers": {
    "mcpjungle": {
      "url": "http://localhost:8080/mcp",
      "headers": {
        "Authorization": "Bearer 1YHf2LwE1LXtp5lW_vM-gmdYHlPHdqwnILitBhXE4Aw"
      }
    }
  }
}
```

A client that has access to a particular server this way can view and call all the tools provided by that server.

> [!NOTE]
> If you don't specify the `--allow` flag, the MCP client will not be able to access any MCP servers.

#### Creating mcp clients from the config file
You can also create an MCP client by providing a JSON configuration file:
```json
{
	"name": "foobar",
	"allowed_servers": ["deepwiki", "time"],
	"access_token": "my_secret_token_123",
    "access_token_ref": {
        "file": "/path/to/token-file.txt",
        "env": "ENV_VAR_NAME"
    }
}
```

When creating a client from a config file, you **must** provide a custom access token because mcpjungle cannot print the generated token to the console.

#### Supplying custom access tokens in config files

There are 3 ways to provide the access token from configuration file:

1. Directly in the `access_token` field: Only use this for testing purposes. Not recommended for production, especially if you're committing the config file to version control.
2. From a file using the `access_token_ref.file` field: The file should contain only the token string.
3. From an environment variable using the `access_token_ref.env` field: The env var should contain the token string.

You can also use `${VAR_NAME}` placeholders elsewhere in the same JSON config file. For example:

```json
{
  "name": "${MCP_CLIENT_NAME}",
  "allowed_servers": ["${PRIMARY_SERVER}", "time"],
  "access_token_ref": {
    "env": "CLIENT_TOKEN_ENV_NAME"
  }
}
```

#### Creating user accounts
In addition to MCP clients, you can also create User accounts in mcpjungle for human users.

A user has a very limited set of privileges compared to an admin in the enterprise mode.
For example, they can view and use MCP servers, but they don't have write permissions in mcpjungle.

```bash
# Auto-generates a secret for user
mcpjungle create user bob
# Specify a custom access token for user
mcpjungle create user alice --access-token alice_token_123
# Create user from config file
mcpjungle create user --conf /path/to/user-config.json
```

The config file format for creating a user is similar to that of an MCP client:
```json
{
    "name": "charlie",
    "access_token": "charlies_secret_token",
    "access_token_ref": {
        "file": "/path/to/token-file.txt",
        "env": "ENV_VAR_NAME"
    }
}
```

Again, when using the config file, you **must** provide a custom access token.

Just like other JSON config files in MCPJungle, user config files also support `${VAR_NAME}` placeholders in string fields.

### OpenTelemetry
MCPJungle supports Prometheus-compatible OpenTelemetry Metrics for observability.

- In `enterprise` mode, OpenTelemetry is enabled by default.
- In `development` mode, telemetry is disabled by default. You can enable it by setting the `OTEL_ENABLED` environment variable to `true` before starting the server:

```bash
# enable OpenTelemetry metrics
export OTEL_ENABLED=true

# optionally, set additional attributes to be added to all metrics
export OTEL_RESOURCE_ATTRIBUTES=deployment.environment.name=enterprise

# start the server
mcpjungle start
```

Once the mcpjungle server is started, metrics are available at the `/metrics` endpoint.

# Current limitations 🚧
We're not perfect yet, but we're working hard to get there!

### 1. MCPJungle does not support OAuth flow for authentication yet
This is a work in progress.

We're collecting more feedback on how people use OAuth with MCP servers, so feel free to start a Discussion or open an issue to share your use case.

# Contributing 💻

We welcome contributions from the community! 

- **For contribution guidelines and standards**, see [CONTRIBUTION.md](./CONTRIBUTION.md)
- **For development setup and technical details**, see [DEVELOPMENT.md](./DEVELOPMENT.md)

Join our [Discord community](https://discord.gg/CapV4Z3krk) to connect with other contributors and maintainers.

</details>
