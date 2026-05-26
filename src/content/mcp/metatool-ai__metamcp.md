---
name: "metatool-ai/metamcp"
description: "MetaMCP is the one unified middleware MCP server that manages your MCP connections with GUI."
description_tr: "MetaMCP, MCP bağlantılarınızı GUI arayüzüyle yöneten tek bir birleştirilmiş middleware MCP server'ıdır."
category: "Aggregators"
repo: "metatool-ai/metamcp"
stars: 2348
url: "https://github.com/metatool-ai/metamcp"
body_length: 24173
license: "MIT"
language: "TypeScript"
homepage: "https://docs.metamcp.com"
body_tr: |-
  # 🚀 MetaMCP (MCP Aggregator, Orchestrator, Middleware, Gateway in one docker) <!-- omit in toc -->

  <div align="center">

  <div align="center">
    <a href="https://discord.gg/mNsyat7mFX" style="text-decoration: none;">
      
    </a>
    <a href="https://docs.metamcp.com" style="text-decoration: none;">
      
    </a>
    <a href="https://opensource.org/licenses/MIT" style="text-decoration: none;">
      
    </a>
    <a href="https://github.com/metatool-ai/metamcp/pkgs/container/metamcp" style="text-decoration: none;">
      
    </a>
    <a href="https://deepwiki.com/metatool-ai/metamcp"></a>
  </div>

  </div>

  > **📢 Güncelleme:** *[Yazardan: son zamanlardaki bakım gecikmesi için özür dilerim, ancak en azından PR'ları merge etmeye devam edeceğim, daha fazla bilgi [burada](recent-updates.md)]*

  **MetaMCP**, MCP sunucularını dinamik olarak tek bir birleşik MCP sunucusuna toplayan ve middleware uygulayan bir MCP proxy'sidir. MetaMCP kendisi bir MCP sunucusu olduğundan **HERHANGİ** bir MCP istemcisine kolayca entegre edilebilir.

  ![MetaMCP Diagram](https://raw.githubusercontent.com/metatool-ai/metamcp/HEAD/metamcp.svg)

  ---

  Daha fazla ayrıntı için lütfen documentation sitesini ziyaret edin: https://docs.metamcp.com

  English | [中文](./README_cn.md)
  ## 📋 İçindekiler <!-- omit in toc -->

  - [🎯 Kullanım Alanları](#-kullanım-alanları)
  - [📖 Konseptler](#-konseptler)
    - [🖥️ **MCP Sunucusu**](#️-mcp-sunucusu)
      - [🔐 **Ortam Değişkenleri & Sırlar (STDIO MCP Sunucuları)**](#-ortam-değişkenleri--sırlar-stdio-mcp-sunucuları)
    - [🏷️ **MetaMCP Ad Alanı**](#️-metamcp-ad-alanı)
    - [🌐 **MetaMCP Endpoint**](#-metamcp-endpoint)
    - [⚙️ **Middleware**](#️-middleware)
    - [🔍 **Inspector**](#-inspector)
    - [✏️ **Tool Overrides & Annotations**](#️-tool-overrides--annotations)
  - [🚀 Hızlı Başlangıç](#-hızlı-başlangıç)
    - [🐳 Docker Compose ile Çalıştırma (Önerilen)](#-docker-compose-ile-çalıştırma-önerilen)
    - [📦 Dev Containers ile Geliştirme Ortamı Kurma (VSCode/Cursor)](#-dev-containers-ile-geliştirme-ortamı-kurma-vscodecursor)
    - [💻 Yerel Geliştirme](#-yerel-geliştirme)
  - [🔌 MCP Protokol Uyumluluğu](#-mcp-protokol-uyumluluğu)
  - [🔗 MetaMCP'ye Bağlanma](#-metamcpye-bağlanma)
    - [📝 Örn., Cursor üzerinden mcp.json](#-örn-cursor-üzerinden-mcpjson)
    - [🖥️ Claude Desktop ve Diğer STDIO-only İstemcileri Bağlama](#️-claude-desktop-ve-diğer-stdio-only-istemcileri-bağlama)
    - [🔧 API Anahtar Auth Sorun Giderme](#-api-anahtar-auth-sorun-giderme)
  - [❄️ Cold Start Sorunu ve Özel Dockerfile](#️-cold-start-sorunu-ve-özel-dockerfile)
  - [🧾 Log Seviyeleri](#-log-seviyeleri)
  - [🔐 Kimlik Doğrulama](#-kimlik-doğrulama)
  - [🚦 Trafik Yönetimi](#-trafik-yönetimi)
    - [🚧 **MCP Rate Limit**](#-mcp-rate-limit)
  - [🔗 OpenID Connect (OIDC) Provider Desteği](#-openid-connect-oidc-provider-desteği)
    - [🛠️ **Konfigürasyon**](#️-konfigürasyon)
    - [🏢 **Desteklenen Provider'lar**](#-desteklenen-providerlar)
    - [🔒 **Güvenlik Özellikleri**](#-güvenlik-özellikleri)
    - [📱 **Kullanım**](#-kullanım)
  - [⚙️ Kayıt Kontrolleri](#️-kayıt-kontrolleri)
    - [🎛️ **Kullanılabilir Kontroller**](#️-kullanılabilir-kontroller)
    - [🏢 **Kurumsal Kullanım Senaryoları**](#-kurumsal-kullanım-senaryoları)
    - [🛠️ **Konfigürasyon**](#️-konfigürasyon-1)
  - [🌐 Özel Deployment ve Nginx için SSE Konfigürasyonu](#-özel-deployment-ve-nginx-için-sse-konfigürasyonu)
  - [🏗️ Mimari](#️-mimari)
    - [📊 Sequence Diagram](#-sequence-diagram)
  - [🗺️ Yol Haritası](#️-yol-haritası)
  - [🌐 i18n](#-i18n)
  - [🤝 Katkıda Bulunma](#-katkıda-bulunma)
  - [📄 Lisans](#-lisans)
  - [🙏 Teşekkürler](#-teşekkürler)

  ## 🎯 Kullanım Alanları
  - 🏷️ **MCP sunucularını ad alanlarına gruplandırma, meta-MCP'ler olarak barındırma ve genel endpoint'ler atama** (SSE veya Streamable HTTP), kimlik doğrulama ile. Bir ad alanını bir endpoint için tek tıkla değiştirme.
  -  🎯 **MCP sunucularını remix ederken sadece ihtiyacınız olan tool'ları seçme.** Gözlemlenebilirlik, güvenlik vb. gibi diğer **takılabilir middleware'ler** uygulama. (yakında)
  -  🔍 **Geliştirilmiş MCP inspector olarak kullanma** kaydedilmiş sunucu konfigürasyonları ile ve MetaMCP endpoint'lerinizi kontrol etme.
  -  🔍 **MCP tool seçimi için Elasticsearch olarak kullanma** (yakında)

  Genel olarak geliştiriciler MetaMCP'yi dinamik olarak oluşturulan MCP sunucularını birleşik bir endpoint aracılığıyla barındırmak için **altyapı** olarak kullanabilir ve bunun üzerine agent'lar kurabilir.

  Hızlı demo videosu: https://youtu.be/Cf6jVd2saAs

  ![MetaMCP Screenshot](https://raw.githubusercontent.com/metatool-ai/metamcp/HEAD/metamcp_screenshot.png)

  ## 📖 Konseptler

  ### 🖥️ **MCP Sunucusu**
  MetaMCP'ye bir MCP sunucusunun nasıl başlatılacağını söyleyen bir MCP sunucusu konfigürasyonu.

  ```json
  "HackerNews": {
    "type": "STDIO",
    "command": "uvx",
    "args": ["mcp-hn"]
  }
  ```

  #### 🔐 **Ortam Değişkenleri & Sırlar (STDIO MCP Sunucuları)**

  **STDIO MCP sunucuları** için, MetaMCP ortam değişkenlerini ve sırları işlemek için üç yol destekler:

  **1. Ham Değerler** - Doğrudan string değerleri (sırlar için önerilmez):
  ```
  API_KEY=your-actual-api-key-here
  DEBUG=true
  ```

  **2. Ortam Değişkeni Referansları** - `${ENV_VAR_NAME}` sözdizimini kullanma:
  ```
  API_KEY=${OPENAI_API_KEY}
  DATABASE_URL=${DB_CONNECTION_STRING}
  ```

  **3. Otomatik Eşleştirme** - Beklenen ortam değişken adı konfigürasyonda belirlenen tool ile MetaMCP container ortam değişkeniyle eşleşirse, tamamen silebilirsiniz. MetaMCP eşleşen ortam değişkenlerini otomatik olarak iletecektir.

  > **🔒 Güvenlik Notu**: Ortam değişkeni referansları (`${VAR_NAME}`) runtime'da MetaMCP container'ının ortamından çözümlenir. Bu gerçek gizli değerleri konfigürasyonunuzdan ve git repository'sinden uzak tutar.

  > **⚙️ Geliştirme Notu**: `pnpm run dev:docker` ile yerel geliştirme için, ortam değişkenlerinizin `turbo.json` dosyasında `globalEnv` altında listelenmesi gerekir ve geliştirme süreçlerine geçirilecektir. Bu production Docker deployments için gerekli değildir.

  ### 🏷️ **MetaMCP Ad Alanı**
  - Bir veya daha fazla MCP sunucusunu bir ad alanında gruplandırma
  - MCP sunucularını veya tool seviyesinde etkinleştirme/devre dışı bırakma
  - MCP request'leri ve response'larına middleware uygulama
  - Ad alanı başına tool adlarını/başlıklarını/açıklamalarını override etme ve özel MCP annotation'ları ekleme (ör. `{ "annotations": { "readOnlyHint": false } }`)

  ### 🌐 **MetaMCP Endpoint**
  - Endpoint'ler oluşturma ve namespace'i endpoint'lere atama
  - Namespace'deki birden fazla MCP sunucusu bir MetaMCP endpoint olarak toplanacak ve yayınlanacak
  - API-Key Auth (header veya query param'da) veya MCP Spec 2025-06-18'de standart OAuth arasında seçim yapma
  - **SSE** veya **Streamable HTTP** transport'ları aracılığıyla ve [Open WebUI](https://github.com/open-webui/open-webui) gibi istemciler için **OpenAPI** endpoint'leri ile barındırma

  ### ⚙️ **Middleware**
  - MCP request'leri ve response'larını namespace seviyesinde intercept ediyor ve dönüştürüyor
  - **Yerleşik örnek**: "Inaktif tool'ları filtreleme" - LLM'ler için tool context'i optimize eder
  - **Gelecek fikirleri**: tool logging, error traces, validation, scanning

  ### 🔍 **Inspector**
  Resmi MCP inspector'a benzer, ancak **kaydedilmiş sunucu konfigürasyonları** ile - MetaMCP otomatik olarak konfigürasyonlar oluşturur böylece MetaMCP endpoint'lerinizi hemen debug edebilirsiniz.

  ### ✏️ **Tool Overrides & Annotations**
  - Bir namespace'i açın → bağlı MCP sunucularından gelen tüm tool'ları görmek için **Tools** sekmesi.
  - Her kaydedilmiş tool genişletilebilir ve satır içi düzenlenebilir: görüntüleme **adını/başlığını/açıklamasını** güncelleyin veya namespace'e özel bir JSON blob sağlayın (örneğin `{ "annotations": { "readOnlyHint": false } }`).
  - Tablo'daki badge'ler ("Overridden", "Annotations") şu anda hangi tool'ların özel metadata'ya sahip olduğunu gösterir. Neyin override edildiğini açıklayan bir tooltip okumak için üzerlerine gidin.
  - Annotation override'ları upstream MCP sunucusunun döndürdüğü şeylerle birleştirilir, bu nedenle provider metadata'sını kaybetmeden güvenli bir şekilde özel UI ipuçları ekleyebilirsiniz.

  ## 🚀 Hızlı Başlangıç

  ### **🐳 Docker Compose ile Çalıştırma (Önerilen)**

  Repository'yi klonlayın, `.env`'yi hazırlayın ve docker compose ile başlatın:

  ```bash
  git clone https://github.com/metatool-ai/metamcp.git
  cd metamcp
  cp example.env .env
  docker compose up -d
  ```

  APP_URL env değişkenlerini değiştirirseniz, sadece APP_URL'den eriştiğinizden emin olun, çünkü MetaMCP URL'de CORS politikasını uygular, bu yüzden başka hiçbir URL erişilemez.

  pg volume adının diğer pg docker'ları ile çakışabileceğini unutmayın, bu global'dir, `docker-compose.yml`'de yeniden adlandırmayı düşünün:

  ```
  volumes:
    metamcp_postgres_data:
      driver: local
  ```

  ### **📦 Dev Containers ile Geliştirme Ortamı Kurma (VSCode/Cursor)**

  VSCode/Cursor extension'ını kullanarak development ortamını bir container'da kurabilirsiniz.

  Sadece Docker veya benzeri bir alternatif çalıştıran bir ortama sahip olmak gerekir (`docker`/`docker compose` komutu gereklidir) ve başka hiçbir bağımlı bileşenin host makinenize yüklenmesine gerek yoktur.

  1. İlk olarak MetaMCP kaynak kodunu klonlayın, Visual Studio Code'da projeyi açın.
  ```bash
  git clone https://github.com/metatool-ai/metamcp.git
  cd metamcp
  code .
  ```
  2. Dev Containers'a geçin. VSCode Command Palette'i açın ve `Dev Containers: Reopen in Container` komutunu çalıştırın.

  VSCode Dev Containers projesini yeni bir pencerede açacak, burada `Dockerfile`'a göre runtime'ı oluşturacak ve toolchain'i yükleyecek, bağlantıyı başlatacak ve son olarak MetaMCP bağımlılıklarını yükleyecektir.


  > **not**
  > Bu işlem güvenilir bir ağ bağlantısı gerektirir ve Docker Hub, GitHub ve diğer bazı sitelere erişecektir. Ağ bağlantısını kendiniz sağlamanız gerekecek, aksi takdirde container build'i başarısız olabilir.

  İnternet bağlantısı veya bilgisayar performansına bağlı olarak, birkaç dakikadan onlarca dakikaya kadar sürebilir, sağ alt köşedeki Progress Bar'a tıklayarak yaşanan olağandışı durmaları kontrol etmek için canlı günlüğü görüntüleyebilirsiniz.


  Tamamlandıktan sonra geliştirme sunucusunu başlatmak için `pnpm dev` komutunu çalıştırabilirsiniz.

  ### **💻 Yerel Geliştirme**

  Yine de kolay kurulum için postgres'i docker aracılığıyla çalıştırmak önerilir:

  ```bash
  pnpm install
  pnpm dev
  ```

  ## 🔌 MCP Protokol Uyumluluğu

  - ✅ **Tools, Resources ve Prompts** desteklenir
  - ✅ **OAuth-enabled MCP sunucuları** 03-26 sürümü için test edildi

  Sorularınız varsa, çekinmeden **GitHub issues** veya **PR'lar** bırakmaktan çekinmeyin.

  ## 🔗 MetaMCP'ye Bağlanma

  ### 📝 Örn., Cursor üzerinden mcp.json

  Örnek `mcp.json`

  ```json
  {
    "mcpServers": {
      "MetaMCP": {
        "url": "http://localhost:12008/metamcp/<YOUR_ENDPOINT_NAME>/sse"
      }
    }
  }
  ```

  ### 🖥️ Claude Desktop ve Diğer STDIO-only İstemcileri Bağlama

  MetaMCP endpoint'leri uzak olduğundan (SSE, Streamable HTTP, OpenAPI), sadece stdio sunucularını destekleyen istemciler (Claude Desktop gibi) bağlanmak için yerel bir proxy gerektirir.

  **Not:** `mcp-remote` bazen bu amaç için önerilse de, OAuth tabanlı kimlik doğrulaması için tasarlanmıştır ve MetaMCP'nin API key kimlik doğrulaması ile çalışmaz. Test'e göre `mcp-proxy` önerilen çözümdür.

  `mcp-proxy` kullanan Claude Desktop için çalışan bir konfigürasyon:

  Streamable HTTP Kullanma

  ```json
  {
    "mcpServers": {
      "MetaMCP": {
        "command": "uvx",
        "args": [
          "mcp-proxy",
          "--transport",
          "streamablehttp",
          "http://localhost:12008/metamcp/<YOUR_ENDPOINT_NAME>/mcp"
        ],
        "env": {
          "API_ACCESS_TOKEN": "<YOUR_API_KEY_HERE>"
        }
      }
    }
  }
  ```

  SSE Kullanma

  ```json
  {
    "mcpServers": {
      "ehn": {
        "command": "uvx",
        "args": [
          "mcp-proxy",
          "http://localhost:12008/metamcp/<YOUR_ENDPOINT_NAME>/sse"
        ],
        "env": {
          "API_ACCESS_TOKEN": "<YOUR_API_KEY_HERE>"
        }
      }
    }
  }
  ```

  **Önemli notlar:**
  - `<YOUR_ENDPOINT_NAME>` yerine gerçek endpoint adınızı yazın
  - `<YOUR_API_KEY_HERE>` yerine MetaMCP API anahtarınızı yazın (format: `sk_mt_...`)

  Daha fazla ayrıntı ve alternatif yaklaşımlar için [issue #76](https://github.com/metatool-ai/metamcp/issues/76#issuecomment-3046707532) bölümüne bakın.

  ### 🔧 API Anahtar Auth Sorun Giderme

  - `?api_key=` parametreli API key auth SSE için çalışmaz. Sadece Streamable HTTP ve OpenAPI için çalışır.
  - En iyi uygulama, API anahtarını `Authorization: Bearer <API_KEY>` header'ında kullanmaktır.
  - Bağlantı sorunuyla karşılaştığınızda auth sorunun olup olmadığını görmek için kimlik doğrulamayı geçici olarak devre dışı bırakmayı deneyin.

  ## ❄️ Cold Start Sorunu ve Özel Dockerfile

  - MetaMCP her konfigüre edilen MCP sunucusu ve MetaMCP'ler için boş session'ları önceden tahsis eder. Varsayılan boş session her biri için 1'dir ve bu cold start süresini azaltmaya yardımcı olabilir.
  - MCP'niz `uvx` veya `npx` dışında bağımlılıklar gerektiriyorsa, Dockerfile'ı özelleştirerek bağımlılıkları kendiniz yüklemeniz gerekir.
  - Boş session'ların güncelleme sırasında nasıl geçersiz kılındığı hakkında bir seq diagram için [invalidation.md](invalidation.md) dosyasına bakın.

  🛠️ **Çözüm**: Cold start süresini azaltmak için bağımlılıkları eklemek veya paketleri önceden yüklemek amacıyla Dockerfile'ı özelleştirin.

  ## 🧾 Log Seviyeleri

  MetaMCP'nin backend'i günlükleri dosyalara yazar ve isteğe bağlı olarak seçilmiş seviyeleri konsola yansıtır. `LOG_LEVEL` ortam değişkeni ile konsol yansıtmasını kontrol edin.

  - Dosyalar
    - `app.log`: `DEBUG`, `INFO` ve `WARN` alır
    - `error.log`: `ERROR` alır

  - Konsol yansıtması (`LOG_LEVEL`)
    - `all`: `DEBUG`, `INFO`, `WARN`, `ERROR` konsola yansıt
    - `info`: sadece `INFO`'yı konsola yansıt
    - `errors-only`: `WARN` ve `ERROR`'ı konsola yansıt
    - `none`: konsol çıkış'ı yok

  - Varsayılanlar ve örnekler
    - Varsayılan (ayarlanmadığında veya geçersiz): `errors-only`
    - `.env` örneği:
      ```bash
      LOG_LEVEL='errors-only' # 'all', 'info', 'errors-only', 'none'
      ```
    - `docker-compose.dev.yml` kullanır: `LOG_LEVEL: ${LOG_LEVEL:-all}`

  ## 🔐 Kimlik Doğrulama

  - 🛡️ **Better Auth** frontend ve backend için (TRPC procedures)
  - 🍪 **Session cookies** güvenli iç MCP proxy bağlantılarını uygular
  - 🔑 **API key kimlik doğrulaması** `Authorization: Bearer <api-key>` header'ı üzerinden harici erişim için
  - 🪪 **MCP OAuth**: Exposed endpoint'ler MCP Spec 2025-06-18'de standart OAuth kullanma seçeneğine sahiptir, bağlanması kolaydır.
  - 🏢 **Multi-tenancy**: Kuruluşların kendi makinelerinde deploy etmesi için tasarlanmış. Hem private hem de public access scope'larını destekler. Kullanıcılar kendileri veya herkesi için MCP'ler, namespace'ler, endpoint'ler ve API anahtarları oluşturabilir. Genel API anahtarları private MetaMCP'lere erişemez.
  - ⚙️ **Ayrı Kayıt Kontrolleri**: Yöneticiler settings sayfası aracılığıyla UI kaydını ve SSO/OAuth kaydını bağımsız olarak kontrol edebilir, esnek kurumsal deployment senaryolarına izin verir.

  ## 🚦 Trafik Yönetimi

  ### 🚧 MCP Rate Limit
  MCP Rate Limit özelliği, bir MCP tool'unun (endpoint) belirli bir zaman penceresinde kabul edeceği maksimum istek sayısını ayarlamanıza izin verir. Ayrı ayrı veya birlikte kullanabileceğiniz iki farklı strateji vardır:

   * `Endpoint rate-limiting (Rate Limiting)`: endpoint'i kullanan tüm istemcilere aynı anda uygulanır, benzersiz bir sayaç paylaşır.
   * `User rate-limiting (Client Rate Limiting)`: her bireysel kullanıcıya bir sayaç ayarlar.

  Her iki tür de birlikte var olabilir ve birbirlerini tamamlarlar, sayaçları bellekte depolarlar. Bir cluster'da, her makine sadece geçen trafiğini görür ve sayar.

  ### **Endpoint rate-limiting**
  Endpoint rate limit, bir endpoint'in işleyebileceği eşzamanlı işlem sayısına hareket eder. Bu tür limit hizmet'i tüm müşteriler için korur.
  Bir endpoint'e bağlı kullanıcılar birlikte `rate-limiting`'i aştığında, MetaMCP `503 Service Unavailable` durum koduyla bağlantıları reddetmeye başlar.

  #### **Endpoint rate-limiting seçenekleri**
   * `Max Rate`: Herhangi bir zamanda tüm kullanıcılardan birlikte kaç istek kabul edeceğinizi tanımlar. Gateway başladığında, bucket dolup taşar. Kullanıcılardan request'ler geldikçe, bucket'daki kalan token'lar azalır. Aynı zamanda, rate-limiting bucket'ı maksimum kapasitesine ulaşana kadar istenen oranda yeniden doldurur.
   * `Max Rate Seconds`: Maksimum hızların saniye cinsinden işlem gördüğü zaman dilimi. Örneğin, max rate seconds'u 60s'ye ve rate-limiting'i 5'e ayarlarsanız, altmış saniye içinde 5 istek kabul edersiniz.

  ### **User rate-limiting**
  İstemci veya kullanıcı rate limit her bireysel kullanıcıya ve endpoint'e bir sayaç uygular. Tek bir kullanıcı bir endpoint'e bağlandığında `client-max-rate`'i aştığında, MetaMCP `429 Too Many Requests` durum koduyla bağlantıları reddetmeye başlar.

  #### **User rate-limiting seçenekleri**
   * `Client Max Rate`: Her bireysel kullanıcı (kullanıcı kotası) için Token Bucket'a eklediğiniz token sayısı istediğiniz zaman aralığında (Client Max Rate Seconds). Bucket'daki kalan token'lar belirli bir kullanıcının yapabileceği istek'lerdir.
   * `Client Max Rate Seconds`: Maksimum hızların saniye cinsinden işlem gördüğü zaman dilimi. Örneğin, her'i 60s'ye ve rate'i 5'e ayarlarsanız, altmış saniye içinde 5 istek kabul edersiniz.
   * `Client Max Rate Strategy`: İstemci sayaçlarını ayarlamak için kullanacağınız stratejiyi ayarlar. İp seçin, kısıtlamalar istemcinin IP adresine uygulanırken, yoksa bir kullanıcıyı benzersiz olarak tanımlayan bir header olduğunda header'ı ayarlayın. Bu header, key entry ile tanımlanmalıdır.
   * `Client Max Rate Strategy Key`: Kullanıcı tanımlaması içeren header adı (ör., token'lar için Authorization veya IP'ler için X-Original-Forwarded-For).

  ## 🔗 OpenID Connect (OIDC) Provider Desteği

  MetaMCP kurumsal SSO entegrasyonu için **OpenID Connect kimlik doğrulamasını** destekler. Bu, kuruluşların kimlik doğrulama için mevcut kimlik sağlayıcılarını (Auth0, Keycloak, Azure AD, vb.) kullanmasına izin verir.

  ### 🛠️ **Konfigürasyon**

  `.env` dosyasına aşağıdaki ortam değişkenlerini ekleyin:

  ```bash
  # Gerekli
  OIDC_CLIENT_ID=your-oidc-client-id
  OIDC_CLIENT_SECRET=your-oidc-client-secret
  OIDC_DISCOVERY_URL=https://your-provider.com/.well-known/openid-configuration

  # İsteğe bağlı özelleştirme
  OIDC_PROVIDER_ID=oidc
  OIDC_SCOPES=openid email profile
  OIDC_PKCE=true
  ```

  ### 🏢 **Desteklenen Provider'lar**

  MetaMCP popüler OIDC provider'ları ile test edilmiştir:

  - **Auth0**: `https://your-domain.auth0.com/.well-known/openid-configuration`
  - **Keycloak**: `https://your-keycloak.com/realms/your-realm/.well-known/openid-configuration`
  - **Azure AD**: `https://login.microsoftonline.com/your-tenant-id/v2.0/.well-known/openid-configuration`
  - **Google**: `https://accounts.google.com/.well-known/openid-configuration`
  - **Okta**: `https://your-domain.okta.com/.well-known/openid-configuration`

  ### 🔒 **Güvenlik Özellikleri**

  - 🔐 **PKCE (Proof Key for Code Exchange)** varsayılan olarak etkindir
  - 🛡️ **Authorization Code Flow** otomatik kullanıcı oluşturma ile
  - 🔄 **Otomatik keşif** OIDC endpoint'lerinin
  - 🍪 **Sorunsuz oturum yönetimi** mevcut auth sistemi ile

  ### 📱 **Kullanım**

  Yapılandırıldıktan sonra, kullanıcılar login sayfasında email/şifre formunun yanında bir **"Sign in with OIDC"** düğmesi görecekler. Kimlik doğrulama akışı ilk login'de yeni kullanıcıları otomatik olarak
---

# 🚀 MetaMCP (MCP Aggregator, Orchestrator, Middleware, Gateway in one docker) <!-- omit in toc -->

<div align="center">

<div align="center">
  <a href="https://discord.gg/mNsyat7mFX" style="text-decoration: none;">
    
  </a>
  <a href="https://docs.metamcp.com" style="text-decoration: none;">
    
  </a>
  <a href="https://opensource.org/licenses/MIT" style="text-decoration: none;">
    
  </a>
  <a href="https://github.com/metatool-ai/metamcp/pkgs/container/metamcp" style="text-decoration: none;">
    
  </a>
  <a href="https://deepwiki.com/metatool-ai/metamcp"></a>
</div>

</div>

> **📢 Update:** *[From the author: apologize for some recent maintainence delay, but will at least keep merging PRs, more background [here](recent-updates.md)]*

**MetaMCP** is a MCP proxy that lets you dynamically aggregate MCP servers into a unified MCP server, and apply middlewares. MetaMCP itself is a MCP server so it can be easily plugged into **ANY** MCP clients.

![MetaMCP Diagram](https://raw.githubusercontent.com/metatool-ai/metamcp/HEAD/metamcp.svg)

---

For more details, consider visiting our documentation site: https://docs.metamcp.com

English | [中文](./README_cn.md)
## 📋 Table of Contents <!-- omit in toc -->

- [🎯 Use Cases](#-use-cases)
- [📖 Concepts](#-concepts)
  - [🖥️ **MCP Server**](#️-mcp-server)
    - [🔐 **Environment Variables \& Secrets (STDIO MCP Servers)**](#-environment-variables--secrets-stdio-mcp-servers)
  - [🏷️ **MetaMCP Namespace**](#️-metamcp-namespace)
  - [🌐 **MetaMCP Endpoint**](#-metamcp-endpoint)
  - [⚙️ **Middleware**](#️-middleware)
  - [🔍 **Inspector**](#-inspector)
  - [✏️ **Tool Overrides \& Annotations**](#️-tool-overrides--annotations)
- [🚀 Quick Start](#-quick-start)
  - [🐳 Run with Docker Compose (Recommended)](#-run-with-docker-compose-recommended)
  - [📦 Build development environment with Dev Containers (VSCode/Cursor)](#-build-development-environment-with-dev-containers-vscodecursor)
  - [💻 Local Development](#-local-development)
- [🔌 MCP Protocol Compatibility](#-mcp-protocol-compatibility)
- [🔗 Connect to MetaMCP](#-connect-to-metamcp)
  - [📝 E.g., Cursor via mcp.json](#-eg-cursor-via-mcpjson)
  - [🖥️ Connecting Claude Desktop and Other STDIO-only Clients](#️-connecting-claude-desktop-and-other-stdio-only-clients)
  - [🔧 API Key Auth Troubleshooting](#-api-key-auth-troubleshooting)
- [❄️ Cold Start Problem and Custom Dockerfile](#️-cold-start-problem-and-custom-dockerfile)
- [🧾 Log Levels](#-log-levels)
- [🔐 Authentication](#-authentication)
- [🚦 Traffic Management](#-traffic-management)
  - [🚧 **MCP Rate Limit**](#-mcp-rate-limit)
- [🔗 OpenID Connect (OIDC) Provider Support](#-openid-connect-oidc-provider-support)
  - [🛠️ **Configuration**](#️-configuration)
  - [🏢 **Supported Providers**](#-supported-providers)
  - [🔒 **Security Features**](#-security-features)
  - [📱 **Usage**](#-usage)
- [⚙️ Registration Controls](#️-registration-controls)
  - [🎛️ **Available Controls**](#️-available-controls)
  - [🏢 **Enterprise Use Cases**](#-enterprise-use-cases)
  - [🛠️ **Configuration**](#️-configuration-1)
- [🌐 Custom Deployment and SSE conf for Nginx](#-custom-deployment-and-sse-conf-for-nginx)
- [🏗️ Architecture](#️-architecture)
  - [📊 Sequence Diagram](#-sequence-diagram)
- [🗺️ Roadmap](#️-roadmap)
- [🌐 i18n](#-i18n)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🙏 Credits](#-credits)

## 🎯 Use Cases
- 🏷️ **Group MCP servers into namespaces, host them as meta-MCPs, and assign public endpoints** (SSE or Streamable HTTP), with auth. One-click to switch a namespace for an endpoint.
-  🎯 **Pick tools you only need when remixing MCP servers.** Apply other **pluggable middleware** around observability, security, etc. (coming soon)
-  🔍 **Use as enhanced MCP inspector** with saved server configs, and inspect your MetaMCP endpoints in house to see if it works or not.
-  🔍 **Use as Elasticsearch for MCP tool selection** (coming soon)

Generally developers can use MetaMCP as **infrastructure** to host dynamically composed MCP servers through a unified endpoint, and build agents on top of it.

Quick demo video: https://youtu.be/Cf6jVd2saAs

![MetaMCP Screenshot](https://raw.githubusercontent.com/metatool-ai/metamcp/HEAD/metamcp_screenshot.png)

## 📖 Concepts

### 🖥️ **MCP Server**
A MCP server configuration that tells MetaMCP how to start a MCP server.

```json
"HackerNews": {
  "type": "STDIO",
  "command": "uvx",
  "args": ["mcp-hn"]
}
```

#### 🔐 **Environment Variables & Secrets (STDIO MCP Servers)**

For **STDIO MCP servers**, MetaMCP supports three ways to handle environment variables and secrets:

**1. Raw Values** - Direct string values (not recommended for secrets):
```
API_KEY=your-actual-api-key-here
DEBUG=true
```

**2. Environment Variable References** - Use `${ENV_VAR_NAME}` syntax:
```
API_KEY=${OPENAI_API_KEY}
DATABASE_URL=${DB_CONNECTION_STRING}
```

**3. Auto-matching** - If the expected environment variable name in your tool matches the container's environment variable, you can omit it entirely. MetaMCP will automatically pass through matching environment variables.

> **🔒 Security Note**: Environment variable references (`${VAR_NAME}`) are resolved from the MetaMCP container's environment at runtime. This keeps actual secret values out of your configuration and git repository.

> **⚙️ Development Note**: For local development with `pnpm run dev:docker`, ensure your environment variables are listed in `turbo.json` under `globalEnv` to be passed to the development processes. This is not required for production Docker deployments.

### 🏷️ **MetaMCP Namespace**
- Group one or more MCP servers into a namespace
- Enable/disable MCP servers or at tool level
- Apply middlewares to MCP requests and responses
- Override tool names/titles/descriptions per namespace and attach custom MCP annotations (e.g. `{ "annotations": { "readOnlyHint": false } }`)

### 🌐 **MetaMCP Endpoint**
- Create endpoints and assign namespace to endpoints
- Multiple MCP servers in the namespace will be aggregated and emitted as a MetaMCP endpoint
- Choose between API-Key Auth (in header or query param) or standard OAuth in MCP Spec 2025-06-18
- Host through **SSE** or **Streamable HTTP** transports in MCP and **OpenAPI** endpoints for clients like [Open WebUI](https://github.com/open-webui/open-webui)

### ⚙️ **Middleware**
- Intercepts and transforms MCP requests and responses at namespace level
- **Built-in example**: "Filter inactive tools" - optimizes tool context for LLMs
- **Future ideas**: tool logging, error traces, validation, scanning

### 🔍 **Inspector**
Similar to the official MCP inspector, but with **saved server configs** - MetaMCP automatically creates configurations so you can debug MetaMCP endpoints immediately.

### ✏️ **Tool Overrides & Annotations**
- Open a namespace → **Tools** tab to see every tool coming from connected MCP servers.
- Each saved tool can be expanded and edited inline: update the display **name/title/description** or provide a JSON blob with namespace-specific annotations (for example `{ "annotations": { "readOnlyHint": false } }`).
- Badges in the table ("Overridden", "Annotations") show which tools currently have custom metadata. Hover them to read a tooltip describing what was overridden.
- Annotation overrides are merged with whatever the upstream MCP server returns, so you can safely add custom UI hints without losing provider metadata.

## 🚀 Quick Start

### **🐳 Run with Docker Compose (Recommended)**

Clone repo, prepare `.env`, and start with docker compose:

```bash
git clone https://github.com/metatool-ai/metamcp.git
cd metamcp
cp example.env .env
docker compose up -d
```

If you modify APP_URL env vars, make sure you only access from the APP_URL, because MetaMCP enforces CORS policy on the URL, so no other URL is accessible.

Note that the pg volume name may collide with your other pg dockers, which is global, consider rename it in `docker-compose.yml`:

```
volumes:
  metamcp_postgres_data:
    driver: local
```

### **📦 Build development environment with Dev Containers (VSCode/Cursor)**

You can use the VSCode/Cursor extension to build the development environment in a container.

It only requires that you have an environment running Docker or a similar alternative (the `docker`/`docker compose` command is required), and no other dependent components need to be installed on your host machine.

1. First, clone the MetaMCP source code, open project in Visual Studio Code.
```bash
git clone https://github.com/metatool-ai/metamcp.git
cd metamcp
code .
```
2. Switch to Dev Containers. Open the VSCode Command Palette, and execute `Dev Containers: Reopen in Container`.

VSCode will open the Dev Containers project in a new window, where it will build the runtime and install the toolchain according to the `Dockerfile` before starting the connection and finally installing the MetaMCP dependencies.


> **note**
> This process requires a reliable network connection, and it will access Docker Hub, GitHub, and some other sites. You will need to ensure the network connection yourself, otherwise the container build may fail.

Wait some minutes, depending on the internet connection or computer performance, it may take from a few minutes to tens of minutes, you can click on the Progress Bar in the bottom right corner to view a live log where you will be able to check unusual stuck.


After finished, you can run `pnpm dev` to start the development server.

### **💻 Local Development**

Still recommend running postgres through docker for easy setup:

```bash
pnpm install
pnpm dev
```

## 🔌 MCP Protocol Compatibility

- ✅ **Tools, Resources, and Prompts** supported
- ✅ **OAuth-enabled MCP servers** tested for 03-26 version

If you have questions, feel free to leave **GitHub issues** or **PRs**.

## 🔗 Connect to MetaMCP

### 📝 E.g., Cursor via mcp.json

Example `mcp.json`

```json
{
  "mcpServers": {
    "MetaMCP": {
      "url": "http://localhost:12008/metamcp/<YOUR_ENDPOINT_NAME>/sse"
    }
  }
}
```

### 🖥️ Connecting Claude Desktop and Other STDIO-only Clients

Since MetaMCP endpoints are remote only (SSE, Streamable HTTP, OpenAPI), clients that only support stdio servers (like Claude Desktop) need a local proxy to connect.

**Note:** While `mcp-remote` is sometimes suggested for this purpose, it's designed for OAuth-based authentication and doesn't work with MetaMCP's API key authentication. Based on testing, `mcp-proxy` is the recommended solution.

Here's a working configuration for Claude Desktop using `mcp-proxy`:

Using Streamable HTTP

```json
{
  "mcpServers": {
    "MetaMCP": {
      "command": "uvx",
      "args": [
        "mcp-proxy",
        "--transport",
        "streamablehttp",
        "http://localhost:12008/metamcp/<YOUR_ENDPOINT_NAME>/mcp"
      ],
      "env": {
        "API_ACCESS_TOKEN": "<YOUR_API_KEY_HERE>"
      }
    }
  }
}
```

Using SSE

```json
{
  "mcpServers": {
    "ehn": {
      "command": "uvx",
      "args": [
        "mcp-proxy",
        "http://localhost:12008/metamcp/<YOUR_ENDPOINT_NAME>/sse"
      ],
      "env": {
        "API_ACCESS_TOKEN": "<YOUR_API_KEY_HERE>"
      }
    }
  }
}
```

**Important notes:**
- Replace `<YOUR_ENDPOINT_NAME>` with your actual endpoint name
- Replace `<YOUR_API_KEY_HERE>` with your MetaMCP API key (format: `sk_mt_...`)

For more details and alternative approaches, see [issue #76](https://github.com/metatool-ai/metamcp/issues/76#issuecomment-3046707532).

### 🔧 API Key Auth Troubleshooting

- `?api_key=` param api key auth doesn't work for SSE. It only works for Streamable HTTP and OpenAPI.
- Best practice is to use the API key in `Authorization: Bearer <API_KEY>` header.
- Try disable auth temporarily when you face connection issues to see if it is an auth issue.

## ❄️ Cold Start Problem and Custom Dockerfile

- MetaMCP pre-allocate idle sessions for each configured MCP servers and MetaMCPs. The default idle session for each is 1 and that can help reduce cold start time.
- If your MCP requires dependencies other than `uvx` or `npx`, you need to customize the Dockerfile to install dependencies on your own.
- Check [invalidation.md](invalidation.md) for a seq diagram about how idle session invalidates during updates.

🛠️ **Solution**: Customize the Dockerfile to add dependencies or pre-install packages to reduce cold start time.

## 🧾 Log Levels

MetaMCP’s backend writes logs to files and optionally mirrors selected levels to the console. Control console mirroring with the `LOG_LEVEL` environment variable.

- Files
  - `app.log`: receives `DEBUG`, `INFO`, and `WARN`
  - `error.log`: receives `ERROR`

- Console mirroring (`LOG_LEVEL`)
  - `all`: mirror `DEBUG`, `INFO`, `WARN`, `ERROR` to console
  - `info`: mirror only `INFO` to console
  - `errors-only`: mirror `WARN` and `ERROR` to console
  - `none`: no console output

- Defaults and examples
  - Default (when unset or invalid): `errors-only`
  - `.env` example:
    ```bash
    LOG_LEVEL='errors-only' # 'all', 'info', 'errors-only', 'none'
    ```
  - `docker-compose.dev.yml` uses: `LOG_LEVEL: ${LOG_LEVEL:-all}`

## 🔐 Authentication

- 🛡️ **Better Auth** for frontend & backend (TRPC procedures)
- 🍪 **Session cookies** enforce secure internal MCP proxy connections
- 🔑 **API key authentication** for external access via `Authorization: Bearer <api-key>` header
- 🪪 **MCP OAuth**: Exposed endpoints have options to use standard OAuth in MCP Spec 2025-06-18, easy to connect.
- 🏢 **Multi-tenancy**: Designed for organizations to deploy on their own machines. Supports both private and public access scopes. Users can create MCPs, namespaces, endpoints, and API keys for themselves or for everyone. Public API keys cannot access private MetaMCPs.
- ⚙️ **Separate Registration Controls**: Administrators can independently control UI registration and SSO/OAuth registration through the settings page, allowing for flexible enterprise deployment scenarios.

## 🚦 Traffic Management

### 🚧 MCP Rate Limit
The MCP Rate Limit feature allows you to set the maximum requests a MCP tool (a endpoint) will accept in a given time window. There are two different strategies to set limits that you can use separately or together:

 * `Endpoint rate-limiting (Rate Limiting)`: applies simultaneously to all clients using the endpoint, sharing a unique counter.
 * `User rate-limiting (Client Rate Limiting)`: sets a counter to each individual user.

Both types can coexist and they complement each other, and store the counters in-memory. On a cluster, each machine sees and counts only its passing traffic.

### **Endpoint rate-limiting**
The endpoint rate limit acts on the number of simultaneous transactions an endpoint can process. This type of limit protects the service for all customers.
When the users connected to an endpoint together exceed the `rate-limiting`, MetaMCP starts to reject connections with a status code `503 Service Unavailable`.

#### **Endpoint rate-limiting options**
 * `Max Rate`: Defines how many requests will you accept from all users together at any given instant. When the gateway starts, the bucket is full. As requests from users come, the remaining tokens in the bucket decrease. At the same time, the rate-limiting refills the bucket at the desired rate until its maximum capacity is reached.
 * `Max Rate Seconds`: Time period in which the maximum rates operate in seconds. For instance, if you set an max rate seconds of 60s and a rate-limiting of 5, you are allowing 5 requests every sixty seconds.

### **User rate-limiting**
The client or user rate limit applies one counter to each individual user and endpoint. When a single user connected to an endpoint exceeds their `client-max-rate`, MetaMCP starts rejecting connections with a status code `429 Too Many Requests`

#### **User rate-limiting options**
 * `Client Max Rate`: Number of tokens you add to the Token Bucket for each individual user (user quota) in the time interval you want (Client Max Rate Seconds). The remaining tokens in the bucket are the requests a specific user can do.
 * `Client Max Rate Seconds`: Time period in which the maximum rates operate in seconds. For instance, if you set an every of 60s and a rate of 5, you are allowing 5 requests every sixty seconds.
 * `Client Max Rate Strategy`: Sets the strategy you will use to set client counters. Choose ip when the restrictions apply to the client’s IP address, or set it to header when there is a header that identifies a user uniquely. That header must be defined with the key entry.
 * `Client Max Rate Strategy Key`: It is the header name containing the user identification (e.g., Authorization on tokens, or X-Original-Forwarded-For for IPs).

## 🔗 OpenID Connect (OIDC) Provider Support

MetaMCP supports **OpenID Connect authentication** for enterprise SSO integration. This allows organizations to use their existing identity providers (Auth0, Keycloak, Azure AD, etc.) for authentication.

### 🛠️ **Configuration**

Add the following environment variables to your `.env` file:

```bash
# Required
OIDC_CLIENT_ID=your-oidc-client-id
OIDC_CLIENT_SECRET=your-oidc-client-secret
OIDC_DISCOVERY_URL=https://your-provider.com/.well-known/openid-configuration

# Optional customization
OIDC_PROVIDER_ID=oidc
OIDC_SCOPES=openid email profile
OIDC_PKCE=true
```

### 🏢 **Supported Providers**

MetaMCP has been tested with popular OIDC providers:

- **Auth0**: `https://your-domain.auth0.com/.well-known/openid-configuration`
- **Keycloak**: `https://your-keycloak.com/realms/your-realm/.well-known/openid-configuration`
- **Azure AD**: `https://login.microsoftonline.com/your-tenant-id/v2.0/.well-known/openid-configuration`
- **Google**: `https://accounts.google.com/.well-known/openid-configuration`
- **Okta**: `https://your-domain.okta.com/.well-known/openid-configuration`

### 🔒 **Security Features**

- 🔐 **PKCE (Proof Key for Code Exchange)** enabled by default
- 🛡️ **Authorization Code Flow** with automatic user creation
- 🔄 **Auto-discovery** of OIDC endpoints
- 🍪 **Seamless session management** with existing auth system

### 📱 **Usage**

Once configured, users will see a **"Sign in with OIDC"** button on the login page alongside the email/password form. The authentication flow automatically creates new users on first login.

For more detailed configuration examples and troubleshooting, see **[CONTRIBUTING.md](CONTRIBUTING.md#openid-connect-oidc-provider-setup)**.

## ⚙️ Registration Controls

MetaMCP provides **separate controls** for different registration methods, allowing administrators to fine-tune user access policies for enterprise deployments.

### 🎛️ **Available Controls**

- **UI Registration**: Controls whether users can create accounts via the registration form
- **SSO Registration**: Controls whether users can create accounts via SSO/OAuth providers (OIDC, etc.)

### 🏢 **Enterprise Use Cases**

This separation enables common enterprise scenarios:

- **Block UI registration, allow SSO**: Prevent manual signups while allowing corporate SSO users
- **Block SSO registration, allow UI**: Allow manual signups while restricting SSO access
- **Block both**: Completely disable new user registration
- **Allow both**: Default behavior for open deployments

### 🛠️ **Configuration**

Access the **Settings** page in the MetaMCP admin interface to configure these controls:

1. Navigate to **Settings** → **Authentication Settings**
2. Toggle **"Disable UI Registration"** to control form-based signups
3. Toggle **"Disable SSO Registration"** to control OAuth/OIDC signups

Both controls work independently, giving you full flexibility over your registration policy.

## 🌐 Custom Deployment and SSE conf for Nginx

If you want to deploy it to a online service or a VPS, a instance of at least 2GB-4GB of memory is required. And the larger size, the better performance.

Since MCP leverages SSE for long connection, if you are using reverse proxy like nginx, please refer to an example setup [nginx.conf.example](nginx.conf.example)

## 🏗️ Architecture

- **Frontend**: Next.js
- **Backend**: Express.js with tRPC, hosting MCPs through TS SDK and internal proxy
- **Auth**: Better Auth
- **Structure**: Standalone monorepo with Turborepo and Docker publishing

### 📊 Sequence Diagram

*Note: Prompts and resources follow similar patterns to tools.*

```mermaid
sequenceDiagram
    participant MCPClient as MCP Client (e.g., Claude Desktop)
    participant MetaMCP as MetaMCP Server
    participant MCPServers as Installed MCP Servers

    MCPClient ->> MetaMCP: Request list tools

    loop For each listed MCP Server
        MetaMCP ->> MCPServers: Request list_tools
        MCPServers ->> MetaMCP: Return list of tools
    end

    MetaMCP ->> MetaMCP: Aggregate tool lists & apply middleware
    MetaMCP ->> MCPClient: Return aggregated list of tools

    MCPClient ->> MetaMCP: Call tool
    MetaMCP ->> MCPServers: call_tool to target MCP Server
    MCPServers ->> MetaMCP: Return tool response
    MetaMCP ->> MCPClient: Return tool response
```

## 🗺️ Roadmap

**Potential next steps:**

- [ ] 🔌 Headless Admin API access
- [ ] 🔍 Dynamically apply search rules on MetaMCP endpoints
- [ ] 🛠️ More middlewares
- [ ] 💬 Chat/Agent Playground
- [ ] 🧪 Testing & Evaluation for MCP tool selection optimization
- [ ] ⚡ Dynamically generate MCP servers

## 🌐 i18n

See [README-i18n.md](README-i18n.md)

Currently en and zh locale are supported, but welcome contributions.

## 🤝 Contributing

We welcome contributions! See details at **[CONTRIBUTING.md](CONTRIBUTING.md)**

## 📄 License

**MIT**

Would appreciate if you mentioned with back links if your projects use the code.

## 🙏 Credits

Some code inspired by:
- [MCP Inspector](https://github.com/modelcontextprotocol/inspector)
- [MCP Proxy Server](https://github.com/adamwattis/mcp-proxy-server)

Not directly used the code by took ideas from
- https://github.com/open-webui/openapi-servers
- https://github.com/open-webui/mcpo
