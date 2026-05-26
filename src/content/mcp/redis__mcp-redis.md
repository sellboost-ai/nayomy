---
name: "redis/mcp-redis"
description: "The Redis official MCP Server offers an interface to manage and search data in Redis."
description_tr: "Redis resmi MCP Server, Redis'teki verileri yönetmek ve sorgulamak için bir arayüz sağlar."
category: "Databases"
repo: "redis/mcp-redis"
stars: 513
url: "https://github.com/redis/mcp-redis"
body_length: 27694
license: "MIT"
language: "Python"
homepage: "https://redis.io/docs/latest/integrate/redis-mcp/"
body_tr: |-
  # Redis MCP Server

  <!-- mcp-name: io.github.redis/mcp-redis -->

  [![Integration](https://github.com/redis/mcp-redis/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/redis/mcp-redis/actions/workflows/ci.yml)
  [![PyPI - Version](https://img.shields.io/pypi/v/redis-mcp-server)](https://pypi.org/project/redis-mcp-server/)
  [![Python Version](https://img.shields.io/badge/python-3.14%2B-blue&logo=redis)](https://www.python.org/downloads/)
  [![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.txt)
  [![Verified on MseeP](https://mseep.ai/badge.svg)](https://mseep.ai/app/70102150-efe0-4705-9f7d-87980109a279)
  [![Docker Image Version](https://img.shields.io/docker/v/mcp/redis?sort=semver&logo=docker&label=Docker)](https://hub.docker.com/r/mcp/redis)
  [![codecov](https://codecov.io/gh/redis/mcp-redis/branch/master/graph/badge.svg?token=yenl5fzxxr)](https://codecov.io/gh/redis/mcp-redis)


  [![Discord](https://img.shields.io/discord/697882427875393627.svg?style=social&logo=discord)](https://discord.gg/redis)
  [![Twitch](https://img.shields.io/twitch/status/redisinc?style=social)](https://www.twitch.tv/redisinc)
  [![YouTube](https://img.shields.io/youtube/channel/views/UCD78lHSwYqMlyetR0_P4Vig?style=social)](https://www.youtube.com/redisinc)
  [![Twitter](https://img.shields.io/twitter/follow/redisinc?style=social)](https://twitter.com/redisinc)
  [![Stack Exchange questions](https://img.shields.io/stackexchange/stackoverflow/t/mcp-redis?style=social&logo=stackoverflow&label=Stackoverflow)](https://stackoverflow.com/questions/tagged/mcp-redis)

  ## Genel Bakış
  Redis MCP Server, agentic uygulamaların Redis'teki verileri verimli bir şekilde yönetmesi ve araması için tasarlanmış bir **doğal dil arayüzüdür**. **MCP (Model Content Protocol) istemcileriyle** sorunsuz bir şekilde entegre olur ve AI tarafından yönlendirilen iş akışlarının Redis'teki yapılandırılmış ve yapılandırılmamış verilerle etkileşimde bulunmasını sağlar. Bu MCP Server'ı kullanarak aşağıdaki gibi sorular sorabilirsiniz:

  - "Bütün sohbeti bir akışta depolayın"
  - "Bu öğeyi önbelleğe alın"
  - "Oturumu bir süre sonu ile depolayın"
  - "Bu vektörü indeksleyin ve arayın"

  ## İçindekiler
  - [Genel Bakış](#genel-bakış)
  - [Özellikler](#özellikler)
  - [Araçlar](#araçlar)
  - [Kurulum](#kurulum)
    - [PyPI'den (önerilir)](#pypi-den-önerilir)
    - [PyPI paketini test etme](#pypi-paketini-test-etme)
    - [GitHub'dan](#githubdan)
    - [Geliştirme Kurulumu](#geliştirme-kurulumu)
    - [Docker ile](#docker-ile)
  - [Yapılandırma](#yapılandırma)
    - [Redis ACL](#redis-acl)
    - [Komut satırı argümanları aracılığıyla yapılandırma](#komut-satırı-argümanları-aracılığıyla-yapılandırma)
    - [Ortam Değişkenleri aracılığıyla yapılandırma](#ortam-değişkenleri-aracılığıyla-yapılandırma)
    - [Azure Yönetilen Redis için EntraID Kimlik Doğrulaması](#azure-yönetilen-redis-için-entraid-kimlik-doğrulaması)
    - [Günlüğe Kaydetme](#günlüğe-kaydetme)
  - [Entegrasyonlar](#entegrasyonlar)
    - [OpenAI Agents SDK](#openai-agents-sdk)
    - [Augment](#augment)
    - [Claude Desktop](#claude-desktop)
    - [VS Code ile GitHub Copilot](#vs-code-ile-github-copilot)
  - [Test Etme](#test-etme)
  - [Örnek Kullanım Durumları](#örnek-kullanım-durumları)
  - [Katkıda Bulunma](#katkıda-bulunma)
  - [Lisans](#lisans)
  - [Rozetler](#rozetler)
  - [İletişim](#iletişim)


  ## Özellikler
  - **Doğal Dil Sorguları**: AI ajanlarının Redis'i doğal dilkullanarak sorgulamasını ve güncellemesini sağlar.
  - **Sorunsuz MCP Entegrasyonu**: Sorunsuz iletişim için herhangi bir **MCP istemcisiyle** çalışır.
  - **Tam Redis Desteği**: **Hash, listeler, kümeler, sıralı kümeler, akışlar** ve daha fazlasını işler.
  - **Arama ve Filtreleme**: Redis'te verimli veri alımı ve aramayı destekler.
  - **Ölçeklenebilir ve Hafif**: **Yüksek performanslı** veri işlemleri için tasarlanmıştır.
  - **EntraID Kimlik Doğrulaması**: Azure Active Directory kimlik doğrulaması ile Azure Yönetilen Redis için yerel destek.
  - Redis MCP Server, `stdio` [transport](https://modelcontextprotocol.io/docs/concepts/transports#standard-input%2Foutput-stdio)'unu destekler. `streamable-http` transport'u desteği gelecekte eklenecektir.

  ## Araçlar

  Bu MCP Server, Redis'te depolanan verileri yönetmek için araçlar sağlar.

  - Basit yapılandırma değerleri, oturum verileri veya önbelleğe alınan yanıtları depolamak için kullanışlı olan string'leri ayarlamak ve almak için `string` araçları.
  - Tek bir anahtar içinde alan-değer çiftlerini depolamak için `hash` araçları. Hash, vektör gömülmelerini depolayabilir. Birden fazla özelliğe sahip nesneleri, kullanıcı profillerini veya alanların bireysel olarak erişilebildiği ürün bilgilerini temsil etmek için kullanışlıdır.
  - Öğeleri ekleme ve çıkarma için ortak işlemlerle `list` araçları. Kuyruklar, message broker'lar veya en son eylemlerin bir listesini saklamak için kullanışlıdır.
  - Küme üyelerini ekleme, kaldırma ve listeleme için `set` araçları. Kullanıcı kimlikleri veya etiketleri gibi benzersiz değerleri izlemek ve kesişim gibi küme işlemleri gerçekleştirmek için kullanışlıdır.
  - Örneğin liderlik tabloları, öncelik kuyrukları veya puan tabanlı sıralamaya sahip zaman tabanlı analitikleri yönetmek için `sorted set` araçları.
  - Mesajları kanallara yayınlamak ve bunları almak için abone olmak için `pub/sub` işlevi. Gerçek zamanlı bildirimler, sohbet uygulamaları veya birden fazla istemciye güncelleştirmeleri dağıtmak için kullanışlıdır.
  - Veri akışlarında öğe ekleme, okuma, silme, tüketici grupları oluşturma ve yok etme, işlenen girişleri kabul etme için `streams` araçları. Olay sourcing, etkinlik feed'leri ve Redis Streams tüketici gruplarıyla işçi tabanlı olay işleme için kullanışlıdır.
  - Redis'te JSON belgelerini depolamak, almak ve işlemek için `JSON` araçları. Karmaşık iç içe veri yapıları, belge veritabanları veya yol tabanlı erişimli yapılandırma yönetimi için kullanışlıdır.

  Ek araçlar.

  - Doğal dil soruları kullanarak Redis belgelerini, öğreticileri ve en iyi uygulamaları aramak için `docs` aracı (`MCP_DOCS_SEARCH_URL` HTTP API tarafından desteklenir).
  - Vektör indekslerini yönetmek ve vektör araması gerçekleştirmek için `query engine` araçları
  - Veritabanı hakkında bilgi almak için `server management` aracı

  ## Kurulum

  Redis MCP Server, bir PyPI paketi ve GitHub deposundan doğrudan kurulum olarak kullanılabilir.

  ### PyPI'den (önerilir)
  PyPI'den en son Redis MCP Server sürümünü yapılandırmanız aşağıdaki JSON yapılandırmasını istenen framework veya aracı içe aktararak yapılabilir.
  `uvx` komutu sunucuyu anında indirir (zaten önbelleğe alınmamışsa), geçici bir ortam oluşturur ve ardından çalıştırır.

  ```commandline
  {
    "mcpServers": {
      "RedisMCPServer": {
        "command": "uvx",
        "args": [
          "--from",
          "redis-mcp-server@latest",
          "redis-mcp-server",
          "--url",
          "\"redis://localhost:6379/0\""
        ]
      }
    }
  }
  ```

  #### URL belirtimi

  `--url` argümanını belirtme biçimi [redis](https://www.iana.org/assignments/uri-schemes/prov/redis) ve [rediss](https://www.iana.org/assignments/uri-schemes/prov/rediss) şemalarını izler:

  ```commandline
  redis://user:secret@localhost:6379/0?foo=bar&qux=baz
  ```

  Örnek olarak, yerel bir sunucuya kolayca şu şekilde bağlanabilirsiniz:

  ```commandline
  redis://localhost:6379/0
  ```

  Burada `0`, bağlanmak istediğiniz [logical database](https://redis.io/docs/latest/commands/select/)'dır.

  Veritabanına şifreli bir bağlantı için (örneğin, [Redis Cloud](https://redis.io/cloud/) veritabanına bağlanma), `rediss` şemasını kullanırsınız.

  ```commandline
  rediss://user:secret@localhost:6379/0?foo=bar&qux=baz
  ```

  Sunucunun kimliğini doğrulamak için `ssl_ca_certs` belirtin.

  ```commandline
  rediss://user:secret@hostname:port?ssl_cert_reqs=required&ssl_ca_certs=path_to_the_certificate
  ```

  Doğrulanmamış bir bağlantı için `ssl_cert_reqs`'i `none` olarak ayarlayın

  ```commandline
  rediss://user:secret@hostname:port?ssl_cert_reqs=none
  ```

  "Mevcut CLI Seçenekleri" bölümündeki mevcut seçenekleri kullanarak bağlantınızı yapılandırın.

  ### PyPI paketini test etme

  Paketi aşağıdaki gibi kurabilirsiniz:

  ```sh
  pip install redis-mcp-server
  ```

  Ve ortamınızda `uv` kullanarak paketi başlatın.

  ```sh
  uv python install 3.14
  uv sync
  uv run redis-mcp-server --url redis://localhost:6379/0
  ```

  Ancak MCP Server'ı başlatmak, bu MCP Server'ın yapılandırıldığı framework veya araçta yapıldığında en kullanışlı halidir.

  ### GitHub'dan

  `uvx` ile istediğiniz Redis MCP Server sürümünü yapılandırabilirsiniz; bu, doğrudan GitHub'dan (bir daldan veya etiketlenmiş bir sürümü kullanarak) çalıştırmanızı sağlar.

  > Etiketli bir sürüm kullanmanız önerilir, `main` dalı etkin geliştirme altındadır ve kesintiye uğratıcı değişiklikler içerebilir.

  Örneğin, `0.2.0` sürümünü çalıştırmak için aşağıdaki komutu yürütebilirsiniz:

  ```commandline
  uvx --from git+https://github.com/redis/mcp-redis.git@0.2.0 redis-mcp-server --url redis://localhost:6379/0
  ```

  [Releases](https://github.com/redis/mcp-redis/releases) bölümünde en son sürümün sürüm notlarını kontrol edin.
  Aşağıda ek örnekler verilmiştir.

  ```sh
  # Redis URI ile çalıştır
  uvx --from git+https://github.com/redis/mcp-redis.git redis-mcp-server --url redis://localhost:6379/0

  # Redis URI ve SSL ile çalıştır
  uvx --from git+https://github.com/redis/mcp-redis.git redis-mcp-server --url "rediss://<USERNAME>:<PASSWORD>@<HOST>:<PORT>?ssl_cert_reqs=required&ssl_ca_certs=<PATH_TO_CERT>"

  # Bireysel parametrelerle çalıştır
  uvx --from git+https://github.com/redis/mcp-redis.git redis-mcp-server --host localhost --port 6379 --password mypassword

  # Tüm seçenekleri görüntüle
  uvx --from git+https://github.com/redis/mcp-redis.git redis-mcp-server --help
  ```

  ### Geliştirme Kurulumu

  Geliştirme için veya depoyu klonlamayı tercih ederseniz:

  ```sh
  # Depoyu klonla
  git clone https://github.com/redis/mcp-redis.git
  cd mcp-redis

  # uv kullanarak bağımlılıkları yükle
  uv venv
  source .venv/bin/activate
  uv sync

  # CLI arayüzü ile çalıştır
  uv run redis-mcp-server --help

  # Veya ana dosyayı doğrudan çalıştır (ortam değişkenlerini kullanır)
  uv run src/main.py
  ```

  Depoyu klonladıktan, bağımlılıkları yükledikten ve sunucuyu çalıştırabileceğinizi doğruladıktan sonra, Claude Desktop veya başka herhangi bir MCP İstemcisini ana dosyayı doğrudan çalıştıran bu MCP Server'ı kullanmak için yapılandırabilirsiniz (ortam değişkenlerini kullanır). Bu genellikle geliştirme için tercih edilir.
  Aşağıdaki örnek Claude Desktop içindir, ancak aynısı başka herhangi bir MCP İstemcisi için de geçerlidir.

  1. Redis kimlik bilgilerinizi ve TLS yapılandırmanızı belirtin
  2. `uv` komutunun tam yolunu alın (örneğin `which uv`)
  3. `claude_desktop_config.json` yapılandırma dosyasını düzenleyin
     - macOS'ta, `~/Library/Application\ Support/Claude/` konumunda

  ```json
  {
      "mcpServers": {
          "redis": {
              "command": "<full_path_uv_command>",
              "args": [
                  "--directory",
                  "<your_mcp_server_directory>",
                  "run",
                  "src/main.py"
              ],
              "env": {
                  "REDIS_HOST": "<your_redis_database_hostname>",
                  "REDIS_PORT": "<your_redis_database_port>",
                  "REDIS_PWD": "<your_redis_database_password>",
                  "REDIS_SSL": True|False,
                  "REDIS_SSL_CA_PATH": "<your_redis_ca_path>",
                  "REDIS_CLUSTER_MODE": True|False
              }
          }
      }
  }
  ```

  Sorunları günlük dosyasını izleyerek giderebilirsiniz.

  ```commandline
  tail -f ~/Library/Logs/Claude/mcp-server-redis.log
  ```

  ### Docker ile

  Bu sunucunun Docker'laştırılmış bir dağıtımını kullanabilirsiniz. Kendi imajınızı oluşturabilir veya resmi [Redis MCP Docker](https://hub.docker.com/r/mcp/redis) imajını kullanabilirsiniz.

  Kendi imajınızı oluşturmak istiyorsanız, Redis MCP Server bir Dockerfile sağlar. Bu sunucunun imajını şu komutla oluşturun:

  ```commandline
  docker build -t mcp-redis .
  ```

  Son olarak, istemciyi başlangıçta kapsayıcıyı oluşturacak şekilde yapılandırın. Claude Desktop için bir örnek aşağıda verilmiştir. `claude_desktop_config.json` dosyasını düzenleyin ve şunları ekleyin:

  ```json
  {
    "mcpServers": {
      "redis": {
        "command": "docker",
        "args": ["run",
                  "--rm",
                  "--name",
                  "redis-mcp-server",
                  "-i",
                  "-e", "REDIS_HOST=<redis_hostname>",
                  "-e", "REDIS_PORT=<redis_port>",
                  "-e", "REDIS_USERNAME=<redis_username>",
                  "-e", "REDIS_PWD=<redis_password>",
                  "mcp-redis"]
      }
    }
  }
  ```

  Resmi [Redis MCP Docker](https://hub.docker.com/r/mcp/redis) imajını kullanmak için, imaj adını (yukarıdaki örnekte `mcp-redis`) `mcp/redis` ile değiştirin.

  ## Yapılandırma

  Redis MCP Server iki şekilde yapılandırılabilir: komut satırı argümanları veya ortam değişkenleri aracılığıyla.
  Öncelik şöyledir: komut satırı argümanları > ortam değişkenleri > varsayılan değerler.

  ### Redis ACL

  Redis ACL'yi Redis veritabanına erişimi kısıtlamak için yapılandırabilirsiniz. Örneğin, salt okunur bir kullanıcı oluşturmak için:

  ```
  127.0.0.1:6379> ACL SETUSER readonlyuser on >mypassword ~* +@read -@write
  ```

  Kullanıcıyı komut satırı argümanları veya ortam değişkenleri aracılığıyla yapılandırın.

  ### Komut satırı argümanları aracılığıyla yapılandırma

  CLI arayüzünü kullanırken, sunucuyu komut satırı argümanları ile yapılandırabilirsiniz:

  ```sh
  # Temel Redis bağlantısı
  uvx --from redis-mcp-server@latest redis-mcp-server \
    --host localhost \
    --port 6379 \
    --password mypassword

  # Redis URI kullanma (daha basit)
  uvx --from redis-mcp-server@latest redis-mcp-server \
    --url redis://user:pass@localhost:6379/0

  # SSL bağlantısı
  uvx --from redis-mcp-server@latest redis-mcp-server \
    --url rediss://user:pass@redis.example.com:6379/0

  # Tüm kullanılabilir seçenekleri görüntüle
  uvx --from redis-mcp-server@latest redis-mcp-server --help
  ```

  **Mevcut CLI Seçenekleri:**
  - `--url` - Redis bağlantı URI'si (redis://user:pass@host:port/db)
  - `--host` - Redis hostname'i (varsayılan: 127.0.0.1)
  - `--port` - Redis portu (varsayılan: 6379)
  - `--db` - Redis veritabanı numarası (varsayılan: 0)
  - `--username` - Redis kullanıcı adı
  - `--password` - Redis parolası
  - `--ssl` - SSL bağlantısını etkinleştir
  - `--ssl-ca-path` - CA sertifikası dosyasının yolu
  - `--ssl-keyfile` - SSL anahtar dosyasının yolu
  - `--ssl-certfile` - SSL sertifikası dosyasının yolu
  - `--ssl-cert-reqs` - SSL sertifikası gereksinimleri (varsayılan: required)
  - `--ssl-ca-certs` - CA sertifikaları dosyasının yolu
  - `--cluster-mode` - Redis cluster modunu etkinleştir

  ### Ortam değişkenleri aracılığıyla yapılandırma

  İsterseniz ortam değişkenlerini kullanabilirsiniz. Tüm değişkenler için varsayılan değerler sağlanmıştır.

  | Ad                   | Açıklama                                                  | Varsayılan Değer |
  |----------------------|-----------------------------------------------------------|------------------|
  | `REDIS_HOST`         | Redis IP'si veya hostname'i                              | `"127.0.0.1"`    |
  | `REDIS_PORT`         | Redis portu                                              | `6379`           |
  | `REDIS_DB`           | Veritabanı                                               | 0                |
  | `REDIS_USERNAME`     | Varsayılan veritabanı kullanıcı adı                      | `"default"`      |
  | `REDIS_PWD`          | Varsayılan veritabanı parolası                           | ""               |
  | `REDIS_SSL`          | SSL/TLS'yi etkinleştirir veya devre dışı bırakır         | `False`          |
  | `REDIS_SSL_CA_PATH`  | Sunucuyu doğrulamak için CA sertifikası                 | None             |
  | `REDIS_SSL_KEYFILE`  | İstemci kimlik doğrulaması için istemcinin özel anahtar dosyası | None      |
  | `REDIS_SSL_CERTFILE` | İstemci kimlik doğrulaması için istemcinin sertifikası dosyası  | None      |
  | `REDIS_SSL_CERT_REQS`| İstemcinin sunucunun sertifikasını doğrulaması gerekip gerekmediği | `"required"` |
  | `REDIS_SSL_CA_CERTS` | Güvenilir CA sertifikaları dosyasının yolu               | None             |
  | `REDIS_CLUSTER_MODE` | Redis Cluster modunu etkinleştir                         | `False`          |


  ### Azure Yönetilen Redis için EntraID Kimlik Doğrulaması

  Redis MCP Server, Azure Yönetilen Redis ile **EntraID (Azure Active Directory) kimlik doğrulaması** destekler ve otomatik token yönetimiyle OAuth tabanlı kimlik doğrulamayı sağlar.

  #### Kimlik Doğrulama Sağlayıcıları

  **Hizmet Asılı Kimlik Doğrulaması** - İstemci kimlik bilgilerini kullanan uygulama tabanlı kimlik doğrulama:
  ```bash
  export REDIS_ENTRAID_AUTH_FLOW=service_principal
  export REDIS_ENTRAID_CLIENT_ID=your-client-id
  export REDIS_ENTRAID_CLIENT_SECRET=your-client-secret
  export REDIS_ENTRAID_TENANT_ID=your-tenant-id
  ```

  **Yönetilen Kimlik Kimlik Doğrulaması** - Azure'da barındırılan uygulamalar için:
  ```bash
  # Sistem tarafından atanan yönetilen kimlik
  export REDIS_ENTRAID_AUTH_FLOW=managed_identity
  export REDIS_ENTRAID_IDENTITY_TYPE=system_assigned

  # Kullanıcı tarafından atanan yönetilen kimlik
  export REDIS_ENTRAID_AUTH_FLOW=managed_identity
  export REDIS_ENTRAID_IDENTITY_TYPE=user_assigned
  export REDIS_ENTRAID_USER_ASSIGNED_CLIENT_ID=your-identity-client-id
  ```

  **Varsayılan Azure Kimlik Bilgisi** - Otomatik kimlik bilgisi keşfi (geliştirme için önerilir):
  ```bash
  export REDIS_ENTRAID_AUTH_FLOW=default_credential
  export REDIS_ENTRAID_SCOPES=https://redis.azure.com/.default
  ```

  #### EntraID Yapılandırma Değişkenleri

  | Ad                                      | Açıklama                                                  | Varsayılan Değer                     |
  |-----------------------------------------|-----------------------------------------------------------|--------------------------------------|
  | `REDIS_ENTRAID_AUTH_FLOW`               | Kimlik doğrulama akışı türü                              | None (EntraID devre dışı)            |
  | `REDIS_ENTRAID_CLIENT_ID`               | Hizmet Asılı client ID'si                               | None                                 |
  | `REDIS_ENTRAID_CLIENT_SECRET`           | Hizmet Asılı client secret'i                            | None                                 |
  | `REDIS_ENTRAID_TENANT_ID`               | Azure tenant ID'si                                       | None                                 |
  | `REDIS_ENTRAID_IDENTITY_TYPE`           | Yönetilen kimlik türü                                   | `"system_assigned"`                  |
  | `REDIS_ENTRAID_USER_ASSIGNED_CLIENT_ID` | Kullanıcı tarafından atanan yönetilen kimlik client ID'si | None                                 |
  | `REDIS_ENTRAID_SCOPES`                  | Varsayılan Azure Kimlik Bilgisi için OAuth kapsamları   | `"https://redis.azure.com/.default"` |
  | `REDIS_ENTRAID_RESOURCE`                | Azure Redis kaynak tanımlayıcısı                        | `"https://redis.azure.com/"`         |

  #### Temel Özellikler

  - **Otomatik token yenileme** - Manuel müdahale gerektirmeyen arka plan token yenileme
  - **Zarif fallback** - EntraID yapılandırılmadığında standart Redis kimlik doğrulamasına geri düşer
  - **Birden fazla auth akışı** - Hizmet Asılı, Yönetilen Kimlik ve Varsayılan Azure Kimlik Bilgisini destekler
  - **Kurumsal hazır** - Merkezi kimlik yönetimi ile Azure Yönetilen Redis için tasarlanmıştır

  #### Örnek Yapılandırma

  Azure CLI ile **yerel geliştirme** için:
  ```bash
  # Azure CLI ile giriş yap
  az login

  # MCP sunucusunu yapılandır
  export REDIS_ENTRAID_AUTH_FLOW=default_credential
  export REDIS_URL=redis://your-azure-redis.redis.cache.windows.net:6379
  ```

  Hizmet Asılı ile **üretim** için:
  ```bash
  export REDIS_ENTRAID_AUTH_FLOW=service_principal
  export REDIS_ENTRAID_CLIENT_ID=your-app-client-id
  export REDIS_ENTRAID_CLIENT_SECRET=your-app-secret
  export REDIS_ENTRAID_TENANT_ID=your-tenant-id
  export REDIS_URL=redis://your-azure-redis.redis.cache.windows.net:6379
  ```

  Yönetilen Kimlik ile **Azure'da barındırılan uygulamalar** için:
  ```bash
  export REDIS_ENTRAID_AUTH_FLOW=managed_identity
  export REDIS_ENTRAID_IDENTITY_TYPE=system_assigned
  export REDIS_URL=redis://your-azure-redis.redis.cache.windows.net:6379
  ```

  Ortam değişkenlerini ayarlamanın çeşitli yolları vardır:

  1. **.env Dosyası Kullanma**:
  Proje dizininize bir `.env` dosyası yerleştirin ve her ortam değişkeni için anahtar-değer çiftleri ekleyin. `python-dotenv`, `pipenv` ve `uv` gibi araçlar uygulamanızı çalıştırırken bu değişkenleri otomatik olarak yükleyebilir. Bu, yapılandırmayı yönetmenin uygun ve güvenli bir yoludur, çünkü hassas verileri kabuk geçmişinizin ve sürüm kontrolünün dışında tutar (.env dosyası `.gitignore` dosyasındaysa).
  Örneğin, depoda sağlanan `.env.example` dosyasından aşağıdaki içeriğe sahip bir `.env` dosyası oluşturun:

  ```bash
  cp .env.example .env
  ```

  Ardından `.env` dosyasını düzenleyerek Redis yapılandırmanızı ayarlayın:

  VEYA

  2. **Shell'de Değişkenleri Ayarlama**:
  Uygulamanızı çalıştırmadan önce ortam
---

# Redis MCP Server

<!-- mcp-name: io.github.redis/mcp-redis -->

[![Integration](https://github.com/redis/mcp-redis/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/redis/mcp-redis/actions/workflows/ci.yml)
[![PyPI - Version](https://img.shields.io/pypi/v/redis-mcp-server)](https://pypi.org/project/redis-mcp-server/)
[![Python Version](https://img.shields.io/badge/python-3.14%2B-blue&logo=redis)](https://www.python.org/downloads/)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.txt)
[![Verified on MseeP](https://mseep.ai/badge.svg)](https://mseep.ai/app/70102150-efe0-4705-9f7d-87980109a279)
[![Docker Image Version](https://img.shields.io/docker/v/mcp/redis?sort=semver&logo=docker&label=Docker)](https://hub.docker.com/r/mcp/redis)
[![codecov](https://codecov.io/gh/redis/mcp-redis/branch/master/graph/badge.svg?token=yenl5fzxxr)](https://codecov.io/gh/redis/mcp-redis)


[![Discord](https://img.shields.io/discord/697882427875393627.svg?style=social&logo=discord)](https://discord.gg/redis)
[![Twitch](https://img.shields.io/twitch/status/redisinc?style=social)](https://www.twitch.tv/redisinc)
[![YouTube](https://img.shields.io/youtube/channel/views/UCD78lHSwYqMlyetR0_P4Vig?style=social)](https://www.youtube.com/redisinc)
[![Twitter](https://img.shields.io/twitter/follow/redisinc?style=social)](https://twitter.com/redisinc)
[![Stack Exchange questions](https://img.shields.io/stackexchange/stackoverflow/t/mcp-redis?style=social&logo=stackoverflow&label=Stackoverflow)](https://stackoverflow.com/questions/tagged/mcp-redis)

## Overview
The Redis MCP Server is a **natural language interface** designed for agentic applications to efficiently manage and search data in Redis. It integrates seamlessly with **MCP (Model Content Protocol) clients**, enabling AI-driven workflows to interact with structured and unstructured data in Redis. Using this MCP Server, you can ask questions like:

- "Store the entire conversation in a stream"
- "Cache this item"
- "Store the session with an expiration time"
- "Index and search this vector"

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tools](#tools)
- [Installation](#installation)
  - [From PyPI (recommended)](#from-pypi-recommended)
  - [Testing the PyPI package](#testing-the-pypi-package)
  - [From GitHub](#from-github)
  - [Development Installation](#development-installation)
  - [With Docker](#with-docker)
- [Configuration](#configuration)
  - [Redis ACL](#redis-acl)
  - [Configuration via command line arguments](#configuration-via-command-line-arguments)
  - [Configuration via Environment Variables](#configuration-via-environment-variables)
  - [EntraID Authentication for Azure Managed Redis](#entraid-authentication-for-azure-managed-redis)
  - [Logging](#logging)
- [Integrations](#integrations)
  - [OpenAI Agents SDK](#openai-agents-sdk)
  - [Augment](#augment)
  - [Claude Desktop](#claude-desktop)
  - [VS Code with GitHub Copilot](#vs-code-with-github-copilot)
- [Testing](#testing)
- [Example Use Cases](#example-use-cases)
- [Contributing](#contributing)
- [License](#license)
- [Badges](#badges)
- [Contact](#contact)


## Features
- **Natural Language Queries**: Enables AI agents to query and update Redis using natural language.
- **Seamless MCP Integration**: Works with any **MCP client** for smooth communication.
- **Full Redis Support**: Handles **hashes, lists, sets, sorted sets, streams**, and more.
- **Search & Filtering**: Supports efficient data retrieval and searching in Redis.
- **Scalable & Lightweight**: Designed for **high-performance** data operations.
- **EntraID Authentication**: Native support for Azure Active Directory authentication with Azure Managed Redis.
- The Redis MCP Server supports the `stdio` [transport](https://modelcontextprotocol.io/docs/concepts/transports#standard-input%2Foutput-stdio). Support to the `stremable-http` transport will be added in the future.

## Tools

This MCP Server provides tools to manage the data stored in Redis.

- `string` tools to set, get strings with expiration. Useful for storing simple configuration values, session data, or caching responses.
- `hash` tools to store field-value pairs within a single key. The hash can store vector embeddings. Useful for representing objects with multiple attributes, user profiles, or product information where fields can be accessed individually.
- `list` tools with common operations to append and pop items. Useful for queues, message brokers, or maintaining a list of most recent actions.
- `set` tools to add, remove and list set members. Useful for tracking unique values like user IDs or tags, and for performing set operations like intersection.
- `sorted set` tools to manage data for e.g. leaderboards, priority queues, or time-based analytics with score-based ordering.
- `pub/sub` functionality to publish messages to channels and subscribe to receive them. Useful for real-time notifications, chat applications, or distributing updates to multiple clients.
- `streams` tools to add, read, delete, create and destroy consumer groups, and acknowledge processed entries in data streams. Useful for event sourcing, activity feeds, and worker-based event processing with Redis Streams consumer groups.
- `JSON` tools to store, retrieve, and manipulate JSON documents in Redis. Useful for complex nested data structures, document databases, or configuration management with path-based access.

Additional tools.

- `docs` tool to search Redis documentation, tutorials, and best practices using natural language questions (backed by the `MCP_DOCS_SEARCH_URL` HTTP API).
- `query engine` tools to manage vector indexes and perform vector search
- `server management` tool to retrieve information about the database

## Installation

The Redis MCP Server is available as a PyPI package and as direct installation from the GitHub repository.

### From PyPI (recommended)
Configuring the latest Redis MCP Server version from PyPI, as an example, can be done importing the following JSON configuration in the desired framework or tool.
The `uvx` command will download the server on the fly (if not cached already), create a temporary environment, and then run it.

```commandline
{
  "mcpServers": {
    "RedisMCPServer": {
      "command": "uvx",
      "args": [
        "--from",
        "redis-mcp-server@latest",
        "redis-mcp-server",
        "--url",
        "\"redis://localhost:6379/0\""
      ]
    }
  }
}
```

#### URL specification

The format to specify the `--url` argument follows the [redis](https://www.iana.org/assignments/uri-schemes/prov/redis) and [rediss](https://www.iana.org/assignments/uri-schemes/prov/rediss) schemes:

```commandline
redis://user:secret@localhost:6379/0?foo=bar&qux=baz
```

As an example, you can easily connect to a localhost server with:

```commandline
redis://localhost:6379/0
```

Where `0` is the [logical database](https://redis.io/docs/latest/commands/select/) you'd like to connect to.

For an encrypted connection to the database (e.g., connecting to a [Redis Cloud](https://redis.io/cloud/) database), you'd use the `rediss` scheme.

```commandline
rediss://user:secret@localhost:6379/0?foo=bar&qux=baz
```

To verify the server's identity, specify `ssl_ca_certs`.

```commandline
rediss://user:secret@hostname:port?ssl_cert_reqs=required&ssl_ca_certs=path_to_the_certificate
```

For an unverified connection, set `ssl_cert_reqs` to `none`

```commandline
rediss://user:secret@hostname:port?ssl_cert_reqs=none
```

Configure your connection using the available options in the section "Available CLI Options".

### Testing the PyPI package

You can install the package as follows:

```sh
pip install redis-mcp-server
```

And start it using `uv` the package in your environment.

```sh
uv python install 3.14
uv sync
uv run redis-mcp-server --url redis://localhost:6379/0
```

However, starting the MCP Server is most useful when delegate to the framework or tool where this MCP Server is configured.

### From GitHub

You can configure the desired Redis MCP Server version with `uvx`, which allows you to run it directly from GitHub (from a branch, or use a tagged release).

> It is recommended to use a tagged release, the `main` branch is under active development and may contain breaking changes.

As an example, you can execute the following command to run the `0.2.0` release:

```commandline
uvx --from git+https://github.com/redis/mcp-redis.git@0.2.0 redis-mcp-server --url redis://localhost:6379/0
```

Check the release notes for the latest version in the [Releases](https://github.com/redis/mcp-redis/releases) section.
Additional examples are provided below.

```sh
# Run with Redis URI
uvx --from git+https://github.com/redis/mcp-redis.git redis-mcp-server --url redis://localhost:6379/0

# Run with Redis URI and SSL
uvx --from git+https://github.com/redis/mcp-redis.git redis-mcp-server --url "rediss://<USERNAME>:<PASSWORD>@<HOST>:<PORT>?ssl_cert_reqs=required&ssl_ca_certs=<PATH_TO_CERT>"

# Run with individual parameters
uvx --from git+https://github.com/redis/mcp-redis.git redis-mcp-server --host localhost --port 6379 --password mypassword

# See all options
uvx --from git+https://github.com/redis/mcp-redis.git redis-mcp-server --help
```

### Development Installation

For development or if you prefer to clone the repository:

```sh
# Clone the repository
git clone https://github.com/redis/mcp-redis.git
cd mcp-redis

# Install dependencies using uv
uv venv
source .venv/bin/activate
uv sync

# Run with CLI interface
uv run redis-mcp-server --help

# Or run the main file directly (uses environment variables)
uv run src/main.py
```

Once you cloned the repository, installed the dependencies and verified you can run the server, you can configure Claude Desktop or any other MCP Client to use this MCP Server running the main file directly (it uses environment variables). This is usually preferred for development.
The following example is for Claude Desktop, but the same applies to any other MCP Client.

1. Specify your Redis credentials and TLS configuration
2. Retrieve your `uv` command full path (e.g. `which uv`)
3. Edit the `claude_desktop_config.json` configuration file
   - on a MacOS, at `~/Library/Application\ Support/Claude/`

```json
{
    "mcpServers": {
        "redis": {
            "command": "<full_path_uv_command>",
            "args": [
                "--directory",
                "<your_mcp_server_directory>",
                "run",
                "src/main.py"
            ],
            "env": {
                "REDIS_HOST": "<your_redis_database_hostname>",
                "REDIS_PORT": "<your_redis_database_port>",
                "REDIS_PWD": "<your_redis_database_password>",
                "REDIS_SSL": True|False,
                "REDIS_SSL_CA_PATH": "<your_redis_ca_path>",
                "REDIS_CLUSTER_MODE": True|False
            }
        }
    }
}
```

You can troubleshoot problems by tailing the log file.

```commandline
tail -f ~/Library/Logs/Claude/mcp-server-redis.log
```

### With Docker

You can use a dockerized deployment of this server. You can either build your own image or use the official [Redis MCP Docker](https://hub.docker.com/r/mcp/redis) image.

If you'd like to build your own image, the Redis MCP Server provides a Dockerfile. Build this server's image with:

```commandline
docker build -t mcp-redis .
```

Finally, configure the client to create the container at start-up. An example for Claude Desktop is provided below. Edit the `claude_desktop_config.json` and add:

```json
{
  "mcpServers": {
    "redis": {
      "command": "docker",
      "args": ["run",
                "--rm",
                "--name",
                "redis-mcp-server",
                "-i",
                "-e", "REDIS_HOST=<redis_hostname>",
                "-e", "REDIS_PORT=<redis_port>",
                "-e", "REDIS_USERNAME=<redis_username>",
                "-e", "REDIS_PWD=<redis_password>",
                "mcp-redis"]
    }
  }
}
```

To use the official [Redis MCP Docker](https://hub.docker.com/r/mcp/redis) image, just replace your image name (`mcp-redis` in the example above) with `mcp/redis`.

## Configuration

The Redis MCP Server can be configured in two ways: via command line arguments or via environment variables.
The precedence is: command line arguments > environment variables > default values.

### Redis ACL

You can configure Redis ACL to restrict the access to the Redis database. For example, to create a read-only user:

```
127.0.0.1:6379> ACL SETUSER readonlyuser on >mypassword ~* +@read -@write
```

Configure the user via command line arguments or environment variables.

### Configuration via command line arguments

When using the CLI interface, you can configure the server with command line arguments:

```sh
# Basic Redis connection
uvx --from redis-mcp-server@latest redis-mcp-server \
  --host localhost \
  --port 6379 \
  --password mypassword

# Using Redis URI (simpler)
uvx --from redis-mcp-server@latest redis-mcp-server \
  --url redis://user:pass@localhost:6379/0

# SSL connection
uvx --from redis-mcp-server@latest redis-mcp-server \
  --url rediss://user:pass@redis.example.com:6379/0

# See all available options
uvx --from redis-mcp-server@latest redis-mcp-server --help
```

**Available CLI Options:**
- `--url` - Redis connection URI (redis://user:pass@host:port/db)
- `--host` - Redis hostname (default: 127.0.0.1)
- `--port` - Redis port (default: 6379)
- `--db` - Redis database number (default: 0)
- `--username` - Redis username
- `--password` - Redis password
- `--ssl` - Enable SSL connection
- `--ssl-ca-path` - Path to CA certificate file
- `--ssl-keyfile` - Path to SSL key file
- `--ssl-certfile` - Path to SSL certificate file
- `--ssl-cert-reqs` - SSL certificate requirements (default: required)
- `--ssl-ca-certs` - Path to CA certificates file
- `--cluster-mode` - Enable Redis cluster mode

### Configuration via Environment Variables

If desired, you can use environment variables. Defaults are provided for all variables.

| Name                 | Description                                               | Default Value |
|----------------------|-----------------------------------------------------------|---------------|
| `REDIS_HOST`         | Redis IP or hostname                                      | `"127.0.0.1"` |
| `REDIS_PORT`         | Redis port                                                | `6379`        |
| `REDIS_DB`           | Database                                                  | 0             |
| `REDIS_USERNAME`     | Default database username                                 | `"default"`   |
| `REDIS_PWD`          | Default database password                                 | ""            |
| `REDIS_SSL`          | Enables or disables SSL/TLS                               | `False`       |
| `REDIS_SSL_CA_PATH`  | CA certificate for verifying server                       | None          |
| `REDIS_SSL_KEYFILE`  | Client's private key file for client authentication       | None          |
| `REDIS_SSL_CERTFILE` | Client's certificate file for client authentication       | None          |
| `REDIS_SSL_CERT_REQS`| Whether the client should verify the server's certificate | `"required"`  |
| `REDIS_SSL_CA_CERTS` | Path to the trusted CA certificates file                  | None          |
| `REDIS_CLUSTER_MODE` | Enable Redis Cluster mode                                 | `False`       |


### EntraID Authentication for Azure Managed Redis

The Redis MCP Server supports **EntraID (Azure Active Directory) authentication** for Azure Managed Redis, enabling OAuth-based authentication with automatic token management.

#### Authentication Providers

**Service Principal Authentication** - Application-based authentication using client credentials:
```bash
export REDIS_ENTRAID_AUTH_FLOW=service_principal
export REDIS_ENTRAID_CLIENT_ID=your-client-id
export REDIS_ENTRAID_CLIENT_SECRET=your-client-secret
export REDIS_ENTRAID_TENANT_ID=your-tenant-id
```

**Managed Identity Authentication** - For Azure-hosted applications:
```bash
# System-assigned managed identity
export REDIS_ENTRAID_AUTH_FLOW=managed_identity
export REDIS_ENTRAID_IDENTITY_TYPE=system_assigned

# User-assigned managed identity
export REDIS_ENTRAID_AUTH_FLOW=managed_identity
export REDIS_ENTRAID_IDENTITY_TYPE=user_assigned
export REDIS_ENTRAID_USER_ASSIGNED_CLIENT_ID=your-identity-client-id
```

**Default Azure Credential** - Automatic credential discovery (recommended for development):
```bash
export REDIS_ENTRAID_AUTH_FLOW=default_credential
export REDIS_ENTRAID_SCOPES=https://redis.azure.com/.default
```

#### EntraID Configuration Variables

| Name                                    | Description                                               | Default Value                        |
|-----------------------------------------|-----------------------------------------------------------|--------------------------------------|
| `REDIS_ENTRAID_AUTH_FLOW`               | Authentication flow type                                  | None (EntraID disabled)              |
| `REDIS_ENTRAID_CLIENT_ID`               | Service Principal client ID                               | None                                 |
| `REDIS_ENTRAID_CLIENT_SECRET`           | Service Principal client secret                           | None                                 |
| `REDIS_ENTRAID_TENANT_ID`               | Azure tenant ID                                           | None                                 |
| `REDIS_ENTRAID_IDENTITY_TYPE`           | Managed identity type                                     | `"system_assigned"`                  |
| `REDIS_ENTRAID_USER_ASSIGNED_CLIENT_ID` | User-assigned managed identity client ID                  | None                                 |
| `REDIS_ENTRAID_SCOPES`                  | OAuth scopes for Default Azure Credential                | `"https://redis.azure.com/.default"` |
| `REDIS_ENTRAID_RESOURCE`                | Azure Redis resource identifier                          | `"https://redis.azure.com/"`         |

#### Key Features

- **Automatic token renewal** - Background token refresh with no manual intervention
- **Graceful fallback** - Falls back to standard Redis authentication when EntraID not configured
- **Multiple auth flows** - Supports Service Principal, Managed Identity, and Default Azure Credential
- **Enterprise ready** - Designed for Azure Managed Redis with centralized identity management

#### Example Configuration

For **local development** with Azure CLI:
```bash
# Login with Azure CLI
az login

# Configure MCP server
export REDIS_ENTRAID_AUTH_FLOW=default_credential
export REDIS_URL=redis://your-azure-redis.redis.cache.windows.net:6379
```

For **production** with Service Principal:
```bash
export REDIS_ENTRAID_AUTH_FLOW=service_principal
export REDIS_ENTRAID_CLIENT_ID=your-app-client-id
export REDIS_ENTRAID_CLIENT_SECRET=your-app-secret
export REDIS_ENTRAID_TENANT_ID=your-tenant-id
export REDIS_URL=redis://your-azure-redis.redis.cache.windows.net:6379
```

For **Azure-hosted applications** with Managed Identity:
```bash
export REDIS_ENTRAID_AUTH_FLOW=managed_identity
export REDIS_ENTRAID_IDENTITY_TYPE=system_assigned
export REDIS_URL=redis://your-azure-redis.redis.cache.windows.net:6379
```

There are several ways to set environment variables:

1. **Using a `.env` File**:
Place a `.env` file in your project directory with key-value pairs for each environment variable. Tools like `python-dotenv`, `pipenv`, and `uv` can automatically load these variables when running your application. This is a convenient and secure way to manage configuration, as it keeps sensitive data out of your shell history and version control (if `.env` is in `.gitignore`).
For example, create a `.env` file with the following content from the `.env.example` file provided in the repository:

```bash
cp .env.example .env
```

Then edit the `.env` file to set your Redis configuration:

OR,

2. **Setting Variables in the Shell**:
You can export environment variables directly in your shell before running your application. For example:

```sh
export REDIS_HOST=your_redis_host
export REDIS_PORT=6379
# Other variables will be set similarly...
```

This method is useful for temporary overrides or quick testing.


### Logging

The server uses Python's standard logging and is configured at startup. By default it logs at WARNING and above. You can change verbosity with the `MCP_REDIS_LOG_LEVEL` environment variable.

- Accepted values (case-insensitive): `DEBUG`, `INFO`, `WARNING`, `ERROR`, `CRITICAL`, `NOTSET`
- Aliases supported: `WARN` → `WARNING`, `FATAL` → `CRITICAL`
- Numeric values are also accepted, including signed (e.g., `"10"`, `"+20"`)
- Default when unset or unrecognized: `WARNING`

Handler behavior
- If the host (e.g., `uv`, VS Code, pytest) already installed console handlers, the server will NOT add its own; it only lowers overly-restrictive handler thresholds so your chosen level is not filtered out. It will never raise a handler's threshold.
- If no handlers are present, the server adds a single stderr StreamHandler with a simple format.

Examples
```bash
# See normal lifecycle messages
MCP_REDIS_LOG_LEVEL=INFO uv run src/main.py

# Very verbose for debugging
MCP_REDIS_LOG_LEVEL=DEBUG uvx --from redis-mcp-server@latest redis-mcp-server --url redis://localhost:6379/0
```

In MCP client configs that support env, add it alongside your Redis settings. For example:
```json
{
  "mcpServers": {
    "redis": {
      "command": "uvx",
      "args": ["--from", "redis-mcp-server@latest", "redis-mcp-server", "--url", "redis://localhost:6379/0"],
      "env": {
        "REDIS_HOST": "localhost",
        "REDIS_PORT": "6379",
        "MCP_REDIS_LOG_LEVEL": "INFO"
      }
    }
  }
}
```


## Integrations

Integrating this MCP Server to development frameworks like OpenAI Agents SDK, or with tools like Claude Desktop, VS Code, or Augment is described in the following sections.

### OpenAI Agents SDK

Integrate this MCP Server with the OpenAI Agents SDK. Read the [documents](https://openai.github.io/openai-agents-python/mcp/) to learn more about the integration of the SDK with MCP.

Install the Python SDK.

```commandline
pip install openai-agents
```

Configure the OpenAI token:

```commandline
export OPENAI_API_KEY="<openai_token>"
```

And run the [application](./examples/redis_assistant.py).

```commandline
python3.14 redis_assistant.py
```

You can troubleshoot your agent workflows using the [OpenAI dashboard](https://platform.openai.com/traces/).

### Augment

The preferred way of configuring the Redis MCP Server in Augment is to use the [Easy MCP](https://docs.augmentcode.com/setup-augment/mcp#redis) feature.

You can also configure the Redis MCP Server in Augment manually by importing the server via JSON:

```json
{
  "mcpServers": {
    "Redis MCP Server": {
      "command": "uvx",
      "args": [
        "--from",
        "redis-mcp-server@latest",
        "redis-mcp-server",
        "--url",
        "redis://localhost:6379/0"
      ]
    }
  }
}
```

### Claude Desktop

The simplest way to configure MCP clients is using `uvx`. Add the following JSON to your `claude_desktop_config.json`, remember to provide the full path to `uvx`.

**Basic Redis connection:**
```json
{
  "mcpServers": {
    "redis-mcp-server": {
        "type": "stdio",
        "command": "/Users/mortensi/.local/bin/uvx",
        "args": [
            "--from", "redis-mcp-server@latest",
            "redis-mcp-server",
            "--url", "redis://localhost:6379/0"
        ]
    }
  }
}
```

**Azure Managed Redis with EntraID authentication:**
```json
{
  "mcpServers": {
    "redis-mcp-server": {
        "type": "stdio",
        "command": "/Users/mortensi/.local/bin/uvx",
        "args": [
            "--from", "redis-mcp-server@latest",
            "redis-mcp-server",
            "--url", "redis://your-azure-redis.redis.cache.windows.net:6379"
        ],
        "env": {
            "REDIS_ENTRAID_AUTH_FLOW": "default_credential",
            "REDIS_ENTRAID_SCOPES": "https://redis.azure.com/.default"
        }
    }
  }
}
```

### VS Code with GitHub Copilot

To use the Redis MCP Server with VS Code, you must nable the [agent mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode) tools. Add the following to your `settings.json`:

```json
{
  "chat.agent.enabled": true
}
```

You can start the GitHub desired version of the Redis MCP server using `uvx` by adding the following JSON to your `mcp.json` file:

```json
"servers": {
  "redis": {
    "type": "stdio",
    "command": "uvx",
    "args": [
      "--from", "redis-mcp-server@latest",
      "redis-mcp-server",
      "--url", "redis://localhost:6379/0"
    ]
  },
}
```

#### Suppressing uvx Installation Messages

If you want to suppress uvx installation messages that may appear as warnings in MCP client logs, use the `-qq` flag:

```json
"servers": {
  "redis": {
    "type": "stdio",
    "command": "uvx",
    "args": [
      "-qq",
      "--from", "redis-mcp-server@latest",
      "redis-mcp-server",
      "--url", "redis://localhost:6379/0"
    ]
  },
}
```

The `-qq` flag enables silent mode, which suppresses "Installed X packages" messages that uvx writes to stderr during package installation.

Alternatively, you can start the server using `uv` and configure your `mcp.json`. This is usually desired for development.

```json
// mcp.json
{
  "servers": {
    "redis": {
      "type": "stdio",
      "command": "<full_path_uv_command>",
      "args": [
        "--directory",
        "<your_mcp_server_directory>",
        "run",
        "src/main.py"
      ],
      "env": {
        "REDIS_HOST": "<your_redis_database_hostname>",
        "REDIS_PORT": "<your_redis_database_port>",
        "REDIS_USERNAME": "<your_redis_database_username>",
        "REDIS_PWD": "<your_redis_database_password>",
      }
    }
  }
}
```

For more information, see the [VS Code documentation](https://code.visualstudio.com/docs/copilot/chat/mcp-servers).

> **Tip:** You can prompt Copilot chat to use the Redis MCP tools by including `#redis` in your message.

> **Note:** Starting with [VS Code v1.102](https://code.visualstudio.com/updates/v1_102),
> MCP servers are now stored in a dedicated `mcp.json` file instead of `settings.json`.

## Testing

You can use the [MCP Inspector](https://modelcontextprotocol.io/docs/tools/inspector) for visual debugging of this MCP Server.

```sh
npx @modelcontextprotocol/inspector uv run src/main.py
```

## Example Use Cases
- **AI Assistants**: Enable LLMs to fetch, store, and process data in Redis.
- **Chatbots & Virtual Agents**: Retrieve session data, manage queues, and personalize responses.
- **Data Search & Analytics**: Query Redis for **real-time insights and fast lookups**.
- **Event Processing**: Manage event streams with **Redis Streams**.

## Contributing
1. Fork the repo
2. Create a new branch (`feature-branch`)
3. Commit your changes
4. Push to your branch and submit a PR!

## License
This project is licensed under the **MIT License**.

## Badges

<a href="https://glama.ai/mcp/servers/@redis/mcp-redis">
  
</a>

## Contact
For questions or support, reach out via [GitHub Issues](https://github.com/redis/mcp-redis/issues).

Alternatively, you can join the [Redis Discord server](https://discord.gg/redis) and ask in the `#redis-mcp-server` channel.
