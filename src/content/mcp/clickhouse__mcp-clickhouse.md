---
name: "ClickHouse/mcp-clickhouse"
description: "ClickHouse database integration with schema inspection and query capabilities"
category: "Databases"
repo: "ClickHouse/mcp-clickhouse"
stars: 785
url: "https://github.com/ClickHouse/mcp-clickhouse"
body_length: 26540
license: "Apache-2.0"
language: "Python"
body_tr: |-
  # ClickHouse MCP Server

  [![PyPI - Version](https://img.shields.io/pypi/v/mcp-clickhouse)](https://pypi.org/project/mcp-clickhouse)

  ClickHouse için bir MCP sunucusu.

  <a href="https://glama.ai/mcp/servers/yvjy4csvo1"></a>

  ## Özellikler

  ### ClickHouse Araçları

  * `run_query`
    * ClickHouse kümenizde SQL sorguları çalıştırın.
    * Input: `query` (string): Çalıştırılacak SQL sorgusu.
    * Sorgular varsayılan olarak salt okunur modda çalışır (`CLICKHOUSE_ALLOW_WRITE_ACCESS=false`), ancak gerekirse yazma izinleri açıkça etkinleştirilebilir.

  * `list_databases`
    * ClickHouse kümenizde tüm veritabanlarını listeleyin.

  * `list_tables`
    * Bir veritabanındaki tabloları sayfalandırma ile listeleyin.
    * Gerekli input: `database` (string).
    * İsteğe bağlı inputs:
      * `like` / `not_like` (string): Tablo adlarına `LIKE` veya `NOT LIKE` filtreleri uygulayın.
      * `page_token` (string): Sonraki sayfayı getirmek için önceki çağrı tarafından döndürülen token.
      * `page_size` (int, varsayılan `50`): Sayfa başına döndürülen tablo sayısı.
      * `include_detailed_columns` (bool, varsayılan `true`): `false` olduğunda, daha hafif yanıtlar için sütun metaverilerini atlar ve tam `create_table_query` tutar.
    * Response şekli:
      * `tables`: Mevcut sayfa için tablo nesnelerinin dizisi.
      * `next_page_token`: Sonraki sayfayı getirmek için bu değeri geri iletilir veya daha fazla tablo yoksa `null`.
      * `total_tables`: Sağlanan filtreleri eşleştiren tabloların toplam sayısı.

  ### chDB Araçları

  * `run_chdb_select_query`
    * [chDB](https://github.com/chdb-io/chdb) gömülü ClickHouse engine'ini kullanarak SQL sorguları çalıştırın.
    * Input: `query` (string): Çalıştırılacak SQL sorgusu.
    * ETL işlemleri olmadan çeşitli kaynaklardan (dosyalar, URL'ler, veritabanları) doğrudan sorgu verilerini alın.
    * İsteğe bağlı `chdb` extra'sını gerektirir: `pip install 'mcp-clickhouse[chdb]'`

  ### Health Check Endpoint

  HTTP veya SSE transport ile çalıştırırken, `/health` adresinde bir health check endpoint mevcuttur. Bu endpoint:
  - Sunucu sağlıklı ise ve ClickHouse'a bağlanabilirse `200 OK` döndürür (body: `OK`)
  - Sunucu ClickHouse'a bağlanamıyorsa `503 Service Unavailable` ve genel bir hata mesajı döndürür

  Endpoint, orchestrator probe'larının (örneğin Kubernetes liveness/readiness, load balancer'lar) kimlik bilgileri olmadan erişebilmesi için kasıtlı olarak kimlik doğrulamadan muaftır. Response body, backend sürüm dizelerini veya hata ayrıntılarını sızmamak için kasıtlı olarak minimum düzeyde tutulmuştur; hata ayıklamayı sunucu logları aracılığıyla yapın.

  Örnek:
  ```bash
  curl http://localhost:8000/health
  # Response: OK
  ```

  ## Güvenlik

  ### HTTP/SSE Transport'lar için Kimlik Doğrulama

  HTTP veya SSE transport kullanıldığında, kimlik doğrulama **varsayılan olarak gereklidir**. `stdio` transport (varsayılan) sadece standart input/output üzerinden iletişim kurduğundan kimlik doğrulama gerektirmez.

  Üç kimlik doğrulama modu desteklenir. Birini seçin:

  | Modu                       | Ne Zaman Kullanılır                       | Çevre Değişkeni                                                                                        |
  |----------------------------|-------------------------------------------|------------------------------------------------------------------------------------------------|
  | Statik bearer token        | Basit dağıtımlar, dahili hizmetler     | `CLICKHOUSE_MCP_AUTH_TOKEN`                                                                    |
  | OAuth / OIDC (via FastMCP) | Azure Entra, Google, GitHub, WorkOS, vb. | `FASTMCP_SERVER_AUTH=<provider-class-path>` (+ provider'a özel `FASTMCP_SERVER_AUTH_*` değişkenler) |
  | Devre Dışı                 | Yalnızca lokal geliştirme                    | `CLICKHOUSE_MCP_AUTH_DISABLED=true`                                                            |

  HTTP/SSE transport'ları için bunlardan hiçbiri yapılandırılmamışsa başlatma başarısız olur.

  #### Kimlik Doğrulamayı Ayarlama

  1. Güvenli bir token oluşturun (herhangi bir random string olabilir):
     ```bash
     # uuidgen kullanarak (macOS/Linux)
     uuidgen

     # openssl kullanarak
     openssl rand -hex 32
     ```

  2. Sunucuyu token ile yapılandırın:
     ```bash
     export CLICKHOUSE_MCP_AUTH_TOKEN="your-generated-token"
     ```

  3. MCP client'ınızı token'ı isteklere dahil etmek için yapılandırın:

     HTTP/SSE transport'ı ile Claude Desktop için:
     ```json
     {
       "mcpServers": {
         "mcp-clickhouse": {
           "url": "http://127.0.0.1:8000",
           "headers": {
             "Authorization": "Bearer your-generated-token"
           }
         }
       }
     }
     ```

     Not: `/health` endpoint'i kasıtlı olarak kimlik doğrulamadan muaftır ([Health Check Endpoint](#health-check-endpoint) yukarıya bakın). Bearer-token auth'ın aslında kimlik doğrulamadan geçmiş istekleri reddettiğini doğrulamak için, MCP endpoint'inin kendisine örneğin MCP Inspector ile veya `/mcp`'ye JSON-RPC isteği göndererek `Authorization` header'ı ile ve olmadan erişin ve kimlik doğrulamadan geçmiş çağrının `401` döndürdüğünü doğrulayın.

  #### FastMCP üzerinden OAuth / OIDC

  Üretim dağıtımları için kimlik sağlayıcılar (Azure Entra, Google, GitHub, WorkOS, vb.) ile, statik token kullanmak yerine kimlik doğrulamayı [FastMCP'nin yerleşik auth provider'larına](https://gofastmcp.com/servers/auth) devredin. `FASTMCP_SERVER_AUTH`'ı bir FastMCP auth provider'ının **tam sınıf yoluna** ve provider'a özel `FASTMCP_SERVER_AUTH_*` değişkenlerine ayarlayın ve `CLICKHOUSE_MCP_AUTH_TOKEN`'ı ayarlanmamış bırakın.

  Örnek (Azure Entra):

  ```bash
  export FASTMCP_SERVER_AUTH=fastmcp.server.auth.providers.azure.AzureProvider
  export FASTMCP_SERVER_AUTH_AZURE_TENANT_ID="<tenant-id>"
  export FASTMCP_SERVER_AUTH_AZURE_CLIENT_ID="<client-id>"
  export FASTMCP_SERVER_AUTH_AZURE_CLIENT_SECRET="<client-secret>"
  ```

  Tüm provider'lar ve bunların gerekli çevre değişkenlerinin listesi için [FastMCP dokümantasyonuna](https://gofastmcp.com/servers/auth) bakın.

  #### Geliştirme Modu (Kimlik Doğrulamayı Devre Dışı Bırakma)

  Yalnızca lokal geliştirme ve test için kimlik doğrulamayı devre dışı bırakabilirsiniz:
  ```bash
  export CLICKHOUSE_MCP_AUTH_DISABLED=true
  ```

  **UYARI:** Bunu yalnızca lokal geliştirme için kullanın. Sunucu herhangi bir ağa açık olduğunda kimlik doğrulamayı devre dışı bırakmayın.

  ## Yapılandırma

  Bu MCP sunucusu hem ClickHouse'u hem de chDB'yi destekler. İhtiyaçlarınıza bağlı olarak birini veya her ikisini de etkinleştirebilirsiniz.

  1. Claude Desktop yapılandırma dosyasını açın:
     * macOS'ta: `~/Library/Application Support/Claude/claude_desktop_config.json`
     * Windows'ta: `%APPDATA%/Claude/claude_desktop_config.json`

  2. Aşağıdakileri ekleyin:

  ```json
  {
    "mcpServers": {
      "mcp-clickhouse": {
        "command": "uv",
        "args": [
          "run",
          "--with",
          "mcp-clickhouse",
          "--python",
          "3.10",
          "mcp-clickhouse"
        ],
        "env": {
          "CLICKHOUSE_HOST": "<clickhouse-host>",
          "CLICKHOUSE_PORT": "<clickhouse-port>",
          "CLICKHOUSE_USER": "<clickhouse-user>",
          "CLICKHOUSE_PASSWORD": "<clickhouse-password>",
          "CLICKHOUSE_ROLE": "<clickhouse-role>",
          "CLICKHOUSE_SECURE": "true",
          "CLICKHOUSE_VERIFY": "true",
          "CLICKHOUSE_CONNECT_TIMEOUT": "30",
          "CLICKHOUSE_SEND_RECEIVE_TIMEOUT": "30"
        }
      }
    }
  }
  ```

  Çevre değişkenlerini kendi ClickHouse hizmetinizi gösterecek şekilde güncelleyin.

  Veya [ClickHouse SQL Playground](https://sql.clickhouse.com/) ile denemek istiyorsanız, aşağıdaki yapılandırmayı kullanabilirsiniz:

  ```json
  {
    "mcpServers": {
      "mcp-clickhouse": {
        "command": "uv",
        "args": [
          "run",
          "--with",
          "mcp-clickhouse",
          "--python",
          "3.10",
          "mcp-clickhouse"
        ],
        "env": {
          "CLICKHOUSE_HOST": "sql-clickhouse.clickhouse.com",
          "CLICKHOUSE_PORT": "8443",
          "CLICKHOUSE_USER": "demo",
          "CLICKHOUSE_PASSWORD": "",
          "CLICKHOUSE_SECURE": "true",
          "CLICKHOUSE_VERIFY": "true",
          "CLICKHOUSE_CONNECT_TIMEOUT": "30",
          "CLICKHOUSE_SEND_RECEIVE_TIMEOUT": "30"
        }
      }
    }
  }
  ```

  chDB (gömülü ClickHouse engine) için aşağıdaki yapılandırmayı ekleyin:

  ```json
  {
    "mcpServers": {
      "mcp-clickhouse": {
        "command": "uv",
        "args": [
          "run",
          "--with",
          "mcp-clickhouse[chdb]",
          "--python",
          "3.10",
          "mcp-clickhouse"
        ],
        "env": {
          "CHDB_ENABLED": "true",
          "CLICKHOUSE_ENABLED": "false",
          "CHDB_DATA_PATH": "/path/to/chdb/data"
        }
      }
    }
  }
  ```

  ClickHouse ve chDB'yi aynı anda etkinleştirebilirsiniz:

  ```json
  {
    "mcpServers": {
      "mcp-clickhouse": {
        "command": "uv",
        "args": [
          "run",
          "--with",
          "mcp-clickhouse[chdb]",
          "--python",
          "3.10",
          "mcp-clickhouse"
        ],
        "env": {
          "CLICKHOUSE_HOST": "<clickhouse-host>",
          "CLICKHOUSE_PORT": "<clickhouse-port>",
          "CLICKHOUSE_USER": "<clickhouse-user>",
          "CLICKHOUSE_PASSWORD": "<clickhouse-password>",
          "CLICKHOUSE_SECURE": "true",
          "CLICKHOUSE_VERIFY": "true",
          "CLICKHOUSE_CONNECT_TIMEOUT": "30",
          "CLICKHOUSE_SEND_RECEIVE_TIMEOUT": "30",
          "CHDB_ENABLED": "true",
          "CHDB_DATA_PATH": "/path/to/chdb/data"
        }
      }
    }
  }
  ```

  3. `uv` komutu girdisini bulun ve bunu `uv` yürütülebilirinin mutlak yolu ile değiştirin. Bu, sunucu başlatılırken `uv`'nin doğru sürümünün kullanılmasını sağlar. Mac'te, `which uv` kullanarak bu yolu bulabilirsiniz.

  4. Claude Desktop'ı yeniden başlatın ve değişiklikleri uygulayın.

  ### İsteğe Bağlı Yazma Erişimi

  Varsayılan olarak, bu MCP salt okunur sorguları zorunlu kılar, böylece keşif sırasında hatasız mutasyonlar gerçekleşemez. DDL veya INSERT/UPDATE ifadelerine izin vermek için `CLICKHOUSE_ALLOW_WRITE_ACCESS` çevre değişkenini `true` olarak ayarlayın. ClickHouse örneğinin kendisi yazmaları engellerse sunucu salt okunur modu zorunlu tutmaya devam eder.

  ### Yıkıcı İşlem Koruması

  Yazma erişimi etkinleştirilmiş olsa bile (`CLICKHOUSE_ALLOW_WRITE_ACCESS=true`), yıkıcı işlemler (DROP TABLE, DROP DATABASE, DROP VIEW, DROP DICTIONARY, TRUNCATE TABLE) güvenlik için ek bir opt-in flag'i gerektirir. Bu, AI keşfi sırasında hatasız veri silmeyi engeller.

  Yıkıcı işlemleri etkinleştirmek için her iki flag'ı de ayarlayın:
  ```json
  "env": {
    "CLICKHOUSE_ALLOW_WRITE_ACCESS": "true",
    "CLICKHOUSE_ALLOW_DROP": "true"
  }
  ```

  Bu iki katmanlı yaklaşım, hatasız drop'ların çok zor olmasını sağlar:
  - **Yazma işlemleri** (INSERT, UPDATE, CREATE) `CLICKHOUSE_ALLOW_WRITE_ACCESS=true` gerektirir
  - **Yıkıcı işlemler** (DROP, TRUNCATE) ek olarak `CLICKHOUSE_ALLOW_DROP=true` gerektirir

  ### uv Olmadan (Sistem Python Kullanarak) Çalıştırma

  Sistem Python yüklemesini uv yerine kullanmayı tercih ederseniz, paketi PyPI'den yükleyebilir ve doğrudan çalıştırabilirsiniz:

  1. Paketi pip kullanarak yükleyin:
     ```bash
     python3 -m pip install mcp-clickhouse
     ```

     chDB desteğini de yüklemek için:
     ```bash
     python3 -m pip install 'mcp-clickhouse[chdb]'
     ```

     En son sürüme yükseltmek için:
     ```bash
     python3 -m pip install --upgrade mcp-clickhouse
     ```

  2. Claude Desktop yapılandırmasını Python'u doğrudan kullanmak için güncelleyin:

  ```json
  {
    "mcpServers": {
      "mcp-clickhouse": {
        "command": "python3",
        "args": [
          "-m",
          "mcp_clickhouse.main"
        ],
        "env": {
          "CLICKHOUSE_HOST": "<clickhouse-host>",
          "CLICKHOUSE_PORT": "<clickhouse-port>",
          "CLICKHOUSE_USER": "<clickhouse-user>",
          "CLICKHOUSE_PASSWORD": "<clickhouse-password>",
          "CLICKHOUSE_SECURE": "true",
          "CLICKHOUSE_VERIFY": "true",
          "CLICKHOUSE_CONNECT_TIMEOUT": "30",
          "CLICKHOUSE_SEND_RECEIVE_TIMEOUT": "30"
        }
      }
    }
  }
  ```

  Alternatif olarak, kurulu script'i doğrudan kullanabilirsiniz:

  ```json
  {
    "mcpServers": {
      "mcp-clickhouse": {
        "command": "mcp-clickhouse",
        "env": {
          "CLICKHOUSE_HOST": "<clickhouse-host>",
          "CLICKHOUSE_PORT": "<clickhouse-port>",
          "CLICKHOUSE_USER": "<clickhouse-user>",
          "CLICKHOUSE_PASSWORD": "<clickhouse-password>",
          "CLICKHOUSE_SECURE": "true",
          "CLICKHOUSE_VERIFY": "true",
          "CLICKHOUSE_CONNECT_TIMEOUT": "30",
          "CLICKHOUSE_SEND_RECEIVE_TIMEOUT": "30"
        }
      }
    }
  }
  ```

  Not: Python yürütülebiliri veya `mcp-clickhouse` script'i sistem PATH'inizde değilse tam yolunu kullanın. Yolları şu şekilde bulabilirsiniz:
  - Python yürütülebiliri için `which python3`
  - Kurulu script için `which mcp-clickhouse`

  ## Özel Middleware

  Kaynak kodu değiştirmeden MCP sunucusuna özel middleware ekleyebilirsiniz. FastMCP, MCP protokol mesajlarını (tool çağrıları, resource okumaları, prompt'lar, vb.) engelleme ve işleme yapmanıza izin veren bir middleware sistemi sağlar.

  ### Nasıl Kullanılır

  1. `Middleware` genişleten ve bir `setup_middleware(mcp)` fonksiyonu içeren middleware sınıflarıyla bir Python modülü oluşturun:

  ```python
  # my_middleware.py
  import logging
  from fastmcp.server.middleware import Middleware, MiddlewareContext, CallNext

  logger = logging.getLogger("my-middleware")

  class LoggingMiddleware(Middleware):
      """Tüm tool çağrılarını kaydedin."""
      
      async def on_call_tool(self, context: MiddlewareContext, call_next: CallNext):
          tool_name = context.message.name if hasattr(context.message, 'name') else 'unknown'
          logger.info(f"Calling tool: {tool_name}")
          result = await call_next(context)
          logger.info(f"Tool {tool_name} completed")
          return result

  def setup_middleware(mcp):
      """MCP sunucusuna middleware kaydedin."""
      mcp.add_middleware(LoggingMiddleware())
  ```

  2. `MCP_MIDDLEWARE_MODULE` çevre değişkenini modül adına (.py uzantısı olmadan) ayarlayın:

  ```json
  {
    "mcpServers": {
      "mcp-clickhouse": {
        "command": "uv",
        "args": ["run", "--with", "mcp-clickhouse", "--python", "3.10", "mcp-clickhouse"],
        "env": {
          "CLICKHOUSE_HOST": "<clickhouse-host>",
          "CLICKHOUSE_USER": "<clickhouse-user>",
          "CLICKHOUSE_PASSWORD": "<clickhouse-password>",
          "MCP_MIDDLEWARE_MODULE": "my_middleware"
        }
      }
    }
  }
  ```

  3. Middleware modülünüzün Python'un import yolunda bulunduğundan emin olun (örneğin, MCP sunucusunun çalıştığı aynı dizinde veya bir paket olarak kurulu).

  ### Örnek Middleware

  `example_middleware.py` adında örnek bir middleware modülü sağlanmıştır ve yaygın kalıpları gösterir:
  - Tüm MCP isteklerini kaydetme
  - Tool çağrılarını özel olarak kaydetme
  - İstek işlem süresini ölçme

  Örneği kullanmak için:
  ```json
  "env": {
    "MCP_MIDDLEWARE_MODULE": "example_middleware"
  }
  ```

  ### Middleware Yetenekleri

  `Middleware` taban sınıfı, farklı MCP işlemleri için hook'lar sağlar:

  - `on_message(context, call_next)` - Tüm mesajlar için çağrılır
  - `on_request(context, call_next)` - Tüm istekler için çağrılır
  - `on_notification(context, call_next)` - Tüm bildirimler için çağrılır
  - `on_call_tool(context, call_next)` - Bir tool çalıştırıldığında çağrılır
  - `on_read_resource(context, call_next)` - Bir resource okunduğunda çağrılır
  - `on_get_prompt(context, call_next)` - Bir prompt alındığında çağrılır
  - `on_list_tools(context, call_next)` - Tool'lar listelendiğinde çağrılır
  - `on_list_resources(context, call_next)` - Resource'lar listelendiğinde çağrılır
  - `on_list_resource_templates(context, call_next)` - Resource şablonları listelendiğinde çağrılır
  - `on_list_prompts(context, call_next)` - Prompt'lar listelendiğinde çağrılır

  Her hook, mesajı ve metadata'yı içeren bir `MiddlewareContext` nesnesi alır ve pipeline'ı devam ettirmek için bir `call_next` fonksiyonu alır.

  ### Context Durumu Aracılığıyla Dinamik Client Yapılandırması

  Middleware, `CLIENT_CONFIG_OVERRIDES_KEY` context durumu anahtarını kullanarak istek başına ClickHouse client yapılandırmasını geçersiz kılabilir. Sunucu bu overrides'ları çevre değişkenlerinden alınan taban yapılandırma ile birleştirir.

  ```python
  from fastmcp.server.dependencies import get_context
  from mcp_clickhouse.mcp_server import CLIENT_CONFIG_OVERRIDES_KEY

  ctx = get_context()
  ctx.set_state(CLIENT_CONFIG_OVERRIDES_KEY, {
      "connect_timeout": 60,
      "send_receive_timeout": 120
  })
  ```

  Bu, dinamik timeout ayarlamaları, kiracı'ya özel yönlendirme veya kullanıcı başına bağlantı ayarları gibi gelişmiş use case'leri etkinleştirir.

  ## Geliştirme

  1. `test-services` dizininde `docker compose up -d` çalıştırarak ClickHouse kümesini başlatın.

  2. Depo kökünün `.env` dosyasına aşağıdaki değişkenleri ekleyin.

  *Not: Bu bağlamda `default` kullanıcısının kullanımı yalnızca lokal geliştirme amaçlarıyla yapılmaktadır.*

  ```bash
  CLICKHOUSE_HOST=localhost
  CLICKHOUSE_PORT=8123
  CLICKHOUSE_USER=default
  CLICKHOUSE_PASSWORD=clickhouse
  ```

  3. Bağımlılıkları yüklemek için `uv sync` çalıştırın. `uv`'yi yüklemek için [buradaki](https://docs.astral.sh/uv/) talimatları izleyin. Sonra `source .venv/bin/activate` yapın.

  4. MCP Inspector ile kolay test etmek için `fastmcp dev mcp_clickhouse/mcp_server.py` çalıştırarak MCP sunucusunu başlatın.

  5. HTTP transport ve health check endpoint'i ile test etmek için:
     ```bash
     # Geliştirme için kimlik doğrulamayı devre dışı bırakın
     CLICKHOUSE_MCP_SERVER_TRANSPORT=http CLICKHOUSE_MCP_AUTH_DISABLED=true python -m mcp_clickhouse.main

     # Veya kimlik doğrulama ile (önce bir token oluşturun)
     CLICKHOUSE_MCP_SERVER_TRANSPORT=http CLICKHOUSE_MCP_AUTH_TOKEN="your-token" python -m mcp_clickhouse.main

     # Sonra başka bir terminalde:
     curl http://localhost:8000/health
     ```

  ### Çevre Değişkenleri

  ClickHouse ve chDB bağlantılarını yapılandırmak için aşağıdaki çevre değişkenleri kullanılır:

  #### ClickHouse Değişkenleri

  ##### Gerekli Değişkenler

  * `CLICKHOUSE_HOST`: ClickHouse sunucunuzun hostname'i
  * `CLICKHOUSE_USER`: Kimlik doğrulama için kullanıcı adı
  * `CLICKHOUSE_PASSWORD`: Kimlik doğrulama için parola

  > [!CAUTION]
  > MCP veritabanı kullanıcısını, veritabanınıza bağlanan herhangi bir dış client gibi ele almak ve yalnızca işleyişi için gerekli minimum yetkiler vermek önemlidir. Varsayılan veya yönetim kullanıcılarının kullanılması her zaman kesinlikle kaçınılmalıdır.

  ##### İsteğe Bağlı Değişkenler

  * `CLICKHOUSE_PORT`: ClickHouse sunucunuzun port numarası
    * Varsayılan: HTTPS etkinse `8443`, devre dışı bırakılırsa `8123`
    * Genellikle standart olmayan bir port kullanılmadıkça ayarlanmaya gerek yoktur
  * `CLICKHOUSE_ROLE`: Kimlik doğrulama için kullanılacak role
    * Varsayılan: Hiçbiri
    * Kullanıcınız belirli bir role gerektiriyorsa bunu ayarlayın
  * `CLICKHOUSE_SECURE`: HTTPS bağlantısını etkinleştir/devre dışı bırak
    * Varsayılan: `"true"`
    * Güvenli olmayan bağlantılar için `"false"` olarak ayarlayın
  * `CLICKHOUSE_VERIFY`: SSL sertifikası doğrulamayı etkinleştir/devre dışı bırak
    * Varsayılan: `"true"`
    * Sertifika doğrulamasını devre dışı bırakmak için `"false"` ayarlayın (üretim için önerilmez)
    * TLS sertifikaları: Paket, `truststore` üzerinden işletim sistemi güven deposunu kullanır. Uygun sertifika işlenmesini sağlamak için başlangıçta `truststore.inject_into_ssl()` öğesini çağırız. Beklenmeyen bir hata oluşursa Python'un varsayılan SSL davranışı yalnızca fallback olarak kullanılır.
  * `CLICKHOUSE_SERVER_HOST_NAME`: SNI geçersiz kılması ve sertifika doğrulaması için sunucu hostname'i
    * Varsayılan: Hiçbiri (bağlantı hostname'ini kullanır)
    * Proxy'ler veya load balancer'lar üzerinden bağlantı kurarken sertifika hostname'i bağlantı hostname'inden farklı olduğunda kullanışlıdır. Ayarlandığında bu hostname, TLS handshake sırasında SNI (Server Name Indication) ve sertifika hostname doğrulaması için kullanılacaktır.
  * `CLICKHOUSE_CONNECT_TIMEOUT`: Bağlantı timeout'u saniye cinsinden
    * Varsayılan: `"30"`
    * Bağlantı timeout'ları yaşıyorsanız bu değeri artırın
  * `CLICKHOUSE_SEND_RECEIVE_TIMEOUT`: Gönderme/alma timeout'u saniye cinsinden
    * Varsayılan: `"300"`
    * Uzun çalışan sorgular için bu değeri artırın
  * `CLICKHOUSE_DATABASE`: Kullanılacak varsayılan veritabanı
    * Varsayılan: Hiçbiri (sunucu varsayılanını kullanır)
    * Otomatik olarak belirli bir veritabanına bağlanmak için bunu ayarlayın
  * `CLICKHOUSE_MCP_SERVER_TRANSPORT`: MCP sunucusu için transport metodunu ayarlar.
    * Varsayılan: `"stdio"`
    * Geçerli seçenekler: `"stdio"`, `"http"`, `"sse"`. Bu, MCP Inspector gibi araçlarla lokal geliştirme için kullanışlıdır.
  * `CLICKHOUSE_MCP_BIND_HOST`: HTTP veya SSE transport kullanırken MCP sunucusunun bind'ı yapılacak host
    * Varsayılan: `"127.0.0.1"`
    * Tüm network arayüzlerine bind'ı yapmak için `"0.0.0.0"` olarak ayarlayın (Docker veya uzak erişim için kullanışlı)
    * Yalnızca transport `"http"` veya `"sse"` olduğunda
---

# ClickHouse MCP Server

[![PyPI - Version](https://img.shields.io/pypi/v/mcp-clickhouse)](https://pypi.org/project/mcp-clickhouse)

An MCP server for ClickHouse.

<a href="https://glama.ai/mcp/servers/yvjy4csvo1"></a>

## Features

### ClickHouse Tools

* `run_query`
  * Execute SQL queries on your ClickHouse cluster.
  * Input: `query` (string): The SQL query to execute.
  * Queries run in read-only mode by default (`CLICKHOUSE_ALLOW_WRITE_ACCESS=false`), but writes can be enabled explicitly if needed.

* `list_databases`
  * List all databases on your ClickHouse cluster.

* `list_tables`
  * List tables in a database with pagination.
  * Required input: `database` (string).
  * Optional inputs:
    * `like` / `not_like` (string): Apply `LIKE` or `NOT LIKE` filters to table names.
    * `page_token` (string): Token returned by a previous call for fetching the next page.
    * `page_size` (int, default `50`): Number of tables returned per page.
    * `include_detailed_columns` (bool, default `true`): When `false`, omits column metadata for lighter responses while keeping the full `create_table_query`.
  * Response shape:
    * `tables`: Array of table objects for the current page.
    * `next_page_token`: Pass this value back to fetch the next page, or `null` when there are no more tables.
    * `total_tables`: Total count of tables that match the supplied filters.

### chDB Tools

* `run_chdb_select_query`
  * Execute SQL queries using [chDB](https://github.com/chdb-io/chdb)'s embedded ClickHouse engine.
  * Input: `query` (string): The SQL query to execute.
  * Query data directly from various sources (files, URLs, databases) without ETL processes.
  * Requires the optional `chdb` extra: `pip install 'mcp-clickhouse[chdb]'`

### Health Check Endpoint

When running with HTTP or SSE transport, a health check endpoint is available at `/health`. This endpoint:
- Returns `200 OK` (body: `OK`) if the server is healthy and can connect to ClickHouse
- Returns `503 Service Unavailable` with a generic error message if the server cannot connect to ClickHouse

The endpoint is intentionally unauthenticated so orchestrator probes (e.g. Kubernetes liveness/readiness, load balancers) can reach it without credentials. The response body is deliberately minimal to avoid leaking backend version strings or error details; debug failures via the server logs.

Example:
```bash
curl http://localhost:8000/health
# Response: OK
```

## Security

### Authentication for HTTP/SSE Transports

When using HTTP or SSE transport, authentication is **required by default**. The `stdio` transport (default) does not require authentication as it only communicates via standard input/output.

Three authentication modes are supported. Pick one:

| Mode                       | When to use                               | Env var                                                                                        |
|----------------------------|-------------------------------------------|------------------------------------------------------------------------------------------------|
| Static bearer token        | Simple deployments, internal services     | `CLICKHOUSE_MCP_AUTH_TOKEN`                                                                    |
| OAuth / OIDC (via FastMCP) | Azure Entra, Google, GitHub, WorkOS, etc. | `FASTMCP_SERVER_AUTH=<provider-class-path>` (+ provider-specific `FASTMCP_SERVER_AUTH_*` vars) |
| Disabled                   | Local development only                    | `CLICKHOUSE_MCP_AUTH_DISABLED=true`                                                            |

Startup fails if none of these are configured for HTTP/SSE transports.

#### Setting Up Authentication

1. Generate a secure token (can be any random string):
   ```bash
   # Using uuidgen (macOS/Linux)
   uuidgen

   # Using openssl
   openssl rand -hex 32
   ```

2. Configure the server with the token:
   ```bash
   export CLICKHOUSE_MCP_AUTH_TOKEN="your-generated-token"
   ```

3. Configure your MCP client to include the token in requests:

   For Claude Desktop with HTTP/SSE transport:
   ```json
   {
     "mcpServers": {
       "mcp-clickhouse": {
         "url": "http://127.0.0.1:8000",
         "headers": {
           "Authorization": "Bearer your-generated-token"
         }
       }
     }
   }
   ```

   Note: the `/health` endpoint is intentionally unauthenticated (see [Health Check Endpoint](#health-check-endpoint) above). To verify that bearer-token auth is actually rejecting unauthenticated requests, hit the MCP endpoint itself e.g. with the MCP Inspector, or by POSTing a JSON-RPC request to `/mcp` with and without the `Authorization` header and confirming the unauthenticated call returns `401`.

#### OAuth / OIDC via FastMCP

For production deployments with identity providers (Azure Entra, Google, GitHub, WorkOS, etc.), delegate authentication to [FastMCP's built-in auth providers](https://gofastmcp.com/servers/auth) instead of using a static token. Set `FASTMCP_SERVER_AUTH` to the **full class path** of a FastMCP auth provider, along with the provider-specific `FASTMCP_SERVER_AUTH_*` variables, and leave `CLICKHOUSE_MCP_AUTH_TOKEN` unset.

Example (Azure Entra):

```bash
export FASTMCP_SERVER_AUTH=fastmcp.server.auth.providers.azure.AzureProvider
export FASTMCP_SERVER_AUTH_AZURE_TENANT_ID="<tenant-id>"
export FASTMCP_SERVER_AUTH_AZURE_CLIENT_ID="<client-id>"
export FASTMCP_SERVER_AUTH_AZURE_CLIENT_SECRET="<client-secret>"
```

See the [FastMCP docs](https://gofastmcp.com/servers/auth) for the full list of providers and their required environment variables.

#### Development Mode (Disabling Authentication)

For local development and testing only, you can disable authentication by setting:
```bash
export CLICKHOUSE_MCP_AUTH_DISABLED=true
```

**WARNING:** Only use this for local development. Do not disable authentication when the server is exposed to any network.

## Configuration

This MCP server supports both ClickHouse and chDB. You can enable either or both depending on your needs.

1. Open the Claude Desktop configuration file located at:
   * On macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
   * On Windows: `%APPDATA%/Claude/claude_desktop_config.json`

2. Add the following:

```json
{
  "mcpServers": {
    "mcp-clickhouse": {
      "command": "uv",
      "args": [
        "run",
        "--with",
        "mcp-clickhouse",
        "--python",
        "3.10",
        "mcp-clickhouse"
      ],
      "env": {
        "CLICKHOUSE_HOST": "<clickhouse-host>",
        "CLICKHOUSE_PORT": "<clickhouse-port>",
        "CLICKHOUSE_USER": "<clickhouse-user>",
        "CLICKHOUSE_PASSWORD": "<clickhouse-password>",
        "CLICKHOUSE_ROLE": "<clickhouse-role>",
        "CLICKHOUSE_SECURE": "true",
        "CLICKHOUSE_VERIFY": "true",
        "CLICKHOUSE_CONNECT_TIMEOUT": "30",
        "CLICKHOUSE_SEND_RECEIVE_TIMEOUT": "30"
      }
    }
  }
}
```

Update the environment variables to point to your own ClickHouse service.

Or, if you'd like to try it out with the [ClickHouse SQL Playground](https://sql.clickhouse.com/), you can use the following config:

```json
{
  "mcpServers": {
    "mcp-clickhouse": {
      "command": "uv",
      "args": [
        "run",
        "--with",
        "mcp-clickhouse",
        "--python",
        "3.10",
        "mcp-clickhouse"
      ],
      "env": {
        "CLICKHOUSE_HOST": "sql-clickhouse.clickhouse.com",
        "CLICKHOUSE_PORT": "8443",
        "CLICKHOUSE_USER": "demo",
        "CLICKHOUSE_PASSWORD": "",
        "CLICKHOUSE_SECURE": "true",
        "CLICKHOUSE_VERIFY": "true",
        "CLICKHOUSE_CONNECT_TIMEOUT": "30",
        "CLICKHOUSE_SEND_RECEIVE_TIMEOUT": "30"
      }
    }
  }
}
```

For chDB (embedded ClickHouse engine), add the following configuration:

```json
{
  "mcpServers": {
    "mcp-clickhouse": {
      "command": "uv",
      "args": [
        "run",
        "--with",
        "mcp-clickhouse[chdb]",
        "--python",
        "3.10",
        "mcp-clickhouse"
      ],
      "env": {
        "CHDB_ENABLED": "true",
        "CLICKHOUSE_ENABLED": "false",
        "CHDB_DATA_PATH": "/path/to/chdb/data"
      }
    }
  }
}
```

You can also enable both ClickHouse and chDB simultaneously:

```json
{
  "mcpServers": {
    "mcp-clickhouse": {
      "command": "uv",
      "args": [
        "run",
        "--with",
        "mcp-clickhouse[chdb]",
        "--python",
        "3.10",
        "mcp-clickhouse"
      ],
      "env": {
        "CLICKHOUSE_HOST": "<clickhouse-host>",
        "CLICKHOUSE_PORT": "<clickhouse-port>",
        "CLICKHOUSE_USER": "<clickhouse-user>",
        "CLICKHOUSE_PASSWORD": "<clickhouse-password>",
        "CLICKHOUSE_SECURE": "true",
        "CLICKHOUSE_VERIFY": "true",
        "CLICKHOUSE_CONNECT_TIMEOUT": "30",
        "CLICKHOUSE_SEND_RECEIVE_TIMEOUT": "30",
        "CHDB_ENABLED": "true",
        "CHDB_DATA_PATH": "/path/to/chdb/data"
      }
    }
  }
}
```

3. Locate the command entry for `uv` and replace it with the absolute path to the `uv` executable. This ensures that the correct version of `uv` is used when starting the server. On a mac, you can find this path using `which uv`.

4. Restart Claude Desktop to apply the changes.

### Optional Write Access

By default, this MCP enforces read-only queries so that accidental mutations cannot happen during exploration. To allow DDL or INSERT/UPDATE statements, set the `CLICKHOUSE_ALLOW_WRITE_ACCESS` environment variable to `true`. The server keeps enforcing read-only mode if the ClickHouse instance itself disallows writes.

### Destructive Operation Protection

Even when write access is enabled (`CLICKHOUSE_ALLOW_WRITE_ACCESS=true`), destructive operations (DROP TABLE, DROP DATABASE, DROP VIEW, DROP DICTIONARY, TRUNCATE TABLE) require an additional opt-in flag for safety. This prevents accidental data deletion during AI exploration.

To enable destructive operations, set both flags:
```json
"env": {
  "CLICKHOUSE_ALLOW_WRITE_ACCESS": "true",
  "CLICKHOUSE_ALLOW_DROP": "true"
}
```

This two-tier approach ensures that accidental drops are very difficult:
- **Write operations** (INSERT, UPDATE, CREATE) require `CLICKHOUSE_ALLOW_WRITE_ACCESS=true`
- **Destructive operations** (DROP, TRUNCATE) additionally require `CLICKHOUSE_ALLOW_DROP=true`

### Running Without uv (Using System Python)

If you prefer to use the system Python installation instead of uv, you can install the package from PyPI and run it directly:

1. Install the package using pip:
   ```bash
   python3 -m pip install mcp-clickhouse
   ```

   To install chDB support as well:
   ```bash
   python3 -m pip install 'mcp-clickhouse[chdb]'
   ```

   To upgrade to the latest version:
   ```bash
   python3 -m pip install --upgrade mcp-clickhouse
   ```

2. Update your Claude Desktop configuration to use Python directly:

```json
{
  "mcpServers": {
    "mcp-clickhouse": {
      "command": "python3",
      "args": [
        "-m",
        "mcp_clickhouse.main"
      ],
      "env": {
        "CLICKHOUSE_HOST": "<clickhouse-host>",
        "CLICKHOUSE_PORT": "<clickhouse-port>",
        "CLICKHOUSE_USER": "<clickhouse-user>",
        "CLICKHOUSE_PASSWORD": "<clickhouse-password>",
        "CLICKHOUSE_SECURE": "true",
        "CLICKHOUSE_VERIFY": "true",
        "CLICKHOUSE_CONNECT_TIMEOUT": "30",
        "CLICKHOUSE_SEND_RECEIVE_TIMEOUT": "30"
      }
    }
  }
}
```

Alternatively, you can use the installed script directly:

```json
{
  "mcpServers": {
    "mcp-clickhouse": {
      "command": "mcp-clickhouse",
      "env": {
        "CLICKHOUSE_HOST": "<clickhouse-host>",
        "CLICKHOUSE_PORT": "<clickhouse-port>",
        "CLICKHOUSE_USER": "<clickhouse-user>",
        "CLICKHOUSE_PASSWORD": "<clickhouse-password>",
        "CLICKHOUSE_SECURE": "true",
        "CLICKHOUSE_VERIFY": "true",
        "CLICKHOUSE_CONNECT_TIMEOUT": "30",
        "CLICKHOUSE_SEND_RECEIVE_TIMEOUT": "30"
      }
    }
  }
}
```

Note: Make sure to use the full path to the Python executable or the `mcp-clickhouse` script if they are not in your system PATH. You can find the paths using:
- `which python3` for the Python executable
- `which mcp-clickhouse` for the installed script

## Custom Middleware

You can add custom middleware to the MCP server without modifying the source code. FastMCP provides a middleware system that allows you to intercept and process MCP protocol messages (tool calls, resource reads, prompts, etc.).

### How to Use

1. Create a Python module with middleware classes extending `Middleware` and a `setup_middleware(mcp)` function:

```python
# my_middleware.py
import logging
from fastmcp.server.middleware import Middleware, MiddlewareContext, CallNext

logger = logging.getLogger("my-middleware")

class LoggingMiddleware(Middleware):
    """Log all tool calls."""
    
    async def on_call_tool(self, context: MiddlewareContext, call_next: CallNext):
        tool_name = context.message.name if hasattr(context.message, 'name') else 'unknown'
        logger.info(f"Calling tool: {tool_name}")
        result = await call_next(context)
        logger.info(f"Tool {tool_name} completed")
        return result

def setup_middleware(mcp):
    """Register middleware with the MCP server."""
    mcp.add_middleware(LoggingMiddleware())
```

2. Set the `MCP_MIDDLEWARE_MODULE` environment variable to the module name (without `.py` extension):

```json
{
  "mcpServers": {
    "mcp-clickhouse": {
      "command": "uv",
      "args": ["run", "--with", "mcp-clickhouse", "--python", "3.10", "mcp-clickhouse"],
      "env": {
        "CLICKHOUSE_HOST": "<clickhouse-host>",
        "CLICKHOUSE_USER": "<clickhouse-user>",
        "CLICKHOUSE_PASSWORD": "<clickhouse-password>",
        "MCP_MIDDLEWARE_MODULE": "my_middleware"
      }
    }
  }
}
```

3. Ensure your middleware module is in Python's import path (e.g., in the same directory where the MCP server runs, or installed as a package).

### Example Middleware

An example middleware module is provided in `example_middleware.py` showing common patterns:
- Logging all MCP requests
- Logging tool calls specifically
- Measuring request processing time

To use the example:
```json
"env": {
  "MCP_MIDDLEWARE_MODULE": "example_middleware"
}
```

### Middleware Capabilities

The `Middleware` base class provides hooks for different MCP operations:

- `on_message(context, call_next)` - Called for all messages
- `on_request(context, call_next)` - Called for all requests
- `on_notification(context, call_next)` - Called for all notifications
- `on_call_tool(context, call_next)` - Called when a tool is executed
- `on_read_resource(context, call_next)` - Called when a resource is read
- `on_get_prompt(context, call_next)` - Called when a prompt is retrieved
- `on_list_tools(context, call_next)` - Called when listing tools
- `on_list_resources(context, call_next)` - Called when listing resources
- `on_list_resource_templates(context, call_next)` - Called when listing resource templates
- `on_list_prompts(context, call_next)` - Called when listing prompts

Each hook receives a `MiddlewareContext` object containing the message and metadata, and a `call_next` function to continue the pipeline.

### Dynamic Client Configuration via Context State

Middleware can override ClickHouse client configuration on a per-request basis using the `CLIENT_CONFIG_OVERRIDES_KEY` context state key. The server merges these overrides with the base configuration from environment variables.

```python
from fastmcp.server.dependencies import get_context
from mcp_clickhouse.mcp_server import CLIENT_CONFIG_OVERRIDES_KEY

ctx = get_context()
ctx.set_state(CLIENT_CONFIG_OVERRIDES_KEY, {
    "connect_timeout": 60,
    "send_receive_timeout": 120
})
```

This enables advanced use cases like dynamic timeout adjustments, tenant-specific routing, or per-user connection settings.

## Development

1. In `test-services` directory run `docker compose up -d` to start the ClickHouse cluster.

2. Add the following variables to a `.env` file in the root of the repository.

*Note: The use of the `default` user in this context is intended solely for local development purposes.*

```bash
CLICKHOUSE_HOST=localhost
CLICKHOUSE_PORT=8123
CLICKHOUSE_USER=default
CLICKHOUSE_PASSWORD=clickhouse
```

3. Run `uv sync` to install the dependencies. To install `uv` follow the instructions [here](https://docs.astral.sh/uv/). Then do `source .venv/bin/activate`.

4. For easy testing with the MCP Inspector, run `fastmcp dev mcp_clickhouse/mcp_server.py` to start the MCP server.

5. To test with HTTP transport and the health check endpoint:
   ```bash
   # For development, disable authentication
   CLICKHOUSE_MCP_SERVER_TRANSPORT=http CLICKHOUSE_MCP_AUTH_DISABLED=true python -m mcp_clickhouse.main

   # Or with authentication (generate a token first)
   CLICKHOUSE_MCP_SERVER_TRANSPORT=http CLICKHOUSE_MCP_AUTH_TOKEN="your-token" python -m mcp_clickhouse.main

   # Then in another terminal:
   curl http://localhost:8000/health
   ```

### Environment Variables

The following environment variables are used to configure the ClickHouse and chDB connections:

#### ClickHouse Variables

##### Required Variables

* `CLICKHOUSE_HOST`: The hostname of your ClickHouse server
* `CLICKHOUSE_USER`: The username for authentication
* `CLICKHOUSE_PASSWORD`: The password for authentication

> [!CAUTION]
> It is important to treat your MCP database user as you would any external client connecting to your database, granting only the minimum necessary privileges required for its operation. The use of default or administrative users should be strictly avoided at all times.

##### Optional Variables

* `CLICKHOUSE_PORT`: The port number of your ClickHouse server
  * Default: `8443` if HTTPS is enabled, `8123` if disabled
  * Usually doesn't need to be set unless using a non-standard port
* `CLICKHOUSE_ROLE`: The role to use for authentication
  * Default: None
  * Set this if your user requires a specific role
* `CLICKHOUSE_SECURE`: Enable/disable HTTPS connection
  * Default: `"true"`
  * Set to `"false"` for non-secure connections
* `CLICKHOUSE_VERIFY`: Enable/disable SSL certificate verification
  * Default: `"true"`
  * Set to `"false"` to disable certificate verification (not recommended for production)
  * TLS certificates: The package uses your operating system trust store for TLS certificate verification via `truststore`. We call `truststore.inject_into_ssl()` at startup to ensure proper certificate handling. Python’s default SSL behavior is used as a fallback only if an unexpected error occurs.
* `CLICKHOUSE_SERVER_HOST_NAME`: Server hostname for SNI override and certificate validation
  * Default: None (uses the connection hostname)
  * This is useful when connecting through proxies or load balancers where the certificate hostname differs from the connection hostname. When set, this hostname will be used for both SNI (Server Name Indication) during the TLS handshake and for certificate hostname validation.
* `CLICKHOUSE_CONNECT_TIMEOUT`: Connection timeout in seconds
  * Default: `"30"`
  * Increase this value if you experience connection timeouts
* `CLICKHOUSE_SEND_RECEIVE_TIMEOUT`: Send/receive timeout in seconds
  * Default: `"300"`
  * Increase this value for long-running queries
* `CLICKHOUSE_DATABASE`: Default database to use
  * Default: None (uses server default)
  * Set this to automatically connect to a specific database
* `CLICKHOUSE_MCP_SERVER_TRANSPORT`: Sets the transport method for the MCP server.
  * Default: `"stdio"`
  * Valid options: `"stdio"`, `"http"`, `"sse"`. This is useful for local development with tools like MCP Inspector.
* `CLICKHOUSE_MCP_BIND_HOST`: Host to bind the MCP server to when using HTTP or SSE transport
  * Default: `"127.0.0.1"`
  * Set to `"0.0.0.0"` to bind to all network interfaces (useful for Docker or remote access)
  * Only used when transport is `"http"` or `"sse"`
* `CLICKHOUSE_MCP_BIND_PORT`: Port to bind the MCP server to when using HTTP or SSE transport
  * Default: `"8000"`
  * Only used when transport is `"http"` or `"sse"`
* `CLICKHOUSE_MCP_QUERY_TIMEOUT`: Timeout in seconds for SELECT tools
  * Default: `"30"`
  * Increase this if you see `Query timed out after ...` errors for heavy queries
* `CLICKHOUSE_MCP_AUTH_TOKEN`: Static bearer token for HTTP/SSE transports
  * Default: None
  * One of `CLICKHOUSE_MCP_AUTH_TOKEN`, `FASTMCP_SERVER_AUTH`, or `CLICKHOUSE_MCP_AUTH_DISABLED=true` is **required** for HTTP/SSE transports
  * Generate using `uuidgen` or `openssl rand -hex 32`
  * Clients must send this token in the `Authorization: Bearer <token>` header
* `FASTMCP_SERVER_AUTH`: Delegate authentication to a [FastMCP auth provider](https://gofastmcp.com/servers/auth)
  * Default: None
  * Value is the **full class path** of an AuthProvider subclass, e.g. `fastmcp.server.auth.providers.azure.AzureProvider` or `fastmcp.server.auth.providers.google.GoogleProvider`
  * When set, FastMCP auto-loads the provider from its own `FASTMCP_SERVER_AUTH_*` environment variables; leave `CLICKHOUSE_MCP_AUTH_TOKEN` unset in this mode
* `CLICKHOUSE_MCP_AUTH_DISABLED`: Disable authentication for HTTP/SSE transports
  * Default: `"false"` (authentication is enabled)
  * Set to `"true"` to disable authentication for local development/testing only
  * **WARNING:** Only use for local development. Do not disable when exposed to networks
* `CLICKHOUSE_ENABLED`: Enable/disable ClickHouse functionality
  * Default: `"true"`
  * Set to `"false"` to disable ClickHouse tools when using chDB only
* `CLICKHOUSE_ALLOW_WRITE_ACCESS`: Allow write operations (DDL and DML)
  * Default: `"false"`
  * Set to `"true"` to allow DDL (CREATE, ALTER, DROP) and DML (INSERT, UPDATE, DELETE) operations
  * When disabled (default), queries run with `readonly=1` setting to prevent data modifications
* `CLICKHOUSE_ALLOW_DROP`: Allow destructive operations (DROP TABLE, DROP DATABASE, DROP VIEW, DROP DICTIONARY, TRUNCATE TABLE)
  * Default: `"false"`
  * Only takes effect when `CLICKHOUSE_ALLOW_WRITE_ACCESS=true` is also set
  * Set to `"true"` to explicitly allow destructive DROP and TRUNCATE operations
  * This is a safety feature to prevent accidental data deletion during AI exploration

#### Middleware Variables

* `MCP_MIDDLEWARE_MODULE`: Python module name containing custom middleware to inject into the MCP server
  * Default: None (no middleware loaded)
  * Set to the module name (without `.py` extension) of your middleware module
  * The module must provide a `setup_middleware(mcp)` function
  * See [Custom Middleware](#custom-middleware) for details and examples

#### chDB Variables

* `CHDB_ENABLED`: Enable/disable chDB functionality
  * Default: `"false"`
  * Set to `"true"` to enable chDB tools
  * Requires installing the optional extra: `mcp-clickhouse[chdb]`
* `CHDB_DATA_PATH`: The path to the chDB data directory
  * Default: `":memory:"` (in-memory database)
  * Use `:memory:` for in-memory database
  * Use a file path for persistent storage (e.g., `/path/to/chdb/data`)

#### Example Configurations

For local development with Docker:

```env
# Required variables
CLICKHOUSE_HOST=localhost
CLICKHOUSE_USER=default
CLICKHOUSE_PASSWORD=clickhouse

# Optional: Override defaults for local development
CLICKHOUSE_SECURE=false  # Uses port 8123 automatically
CLICKHOUSE_VERIFY=false
```

For ClickHouse Cloud:

```env
# Required variables
CLICKHOUSE_HOST=your-instance.clickhouse.cloud
CLICKHOUSE_USER=default
CLICKHOUSE_PASSWORD=your-password

# Optional: These use secure defaults
# CLICKHOUSE_SECURE=true  # Uses port 8443 automatically
# CLICKHOUSE_DATABASE=your_database
```

For ClickHouse SQL Playground:

```env
CLICKHOUSE_HOST=sql-clickhouse.clickhouse.com
CLICKHOUSE_USER=demo
CLICKHOUSE_PASSWORD=
# Uses secure defaults (HTTPS on port 8443)
```

For chDB only (in-memory):

```env
# chDB configuration
CHDB_ENABLED=true
CLICKHOUSE_ENABLED=false
# CHDB_DATA_PATH defaults to :memory:
```

For chDB with persistent storage:

```env
# chDB configuration
CHDB_ENABLED=true
CLICKHOUSE_ENABLED=false
CHDB_DATA_PATH=/path/to/chdb/data
```

For MCP Inspector or remote access with HTTP transport:

```env
CLICKHOUSE_HOST=localhost
CLICKHOUSE_USER=default
CLICKHOUSE_PASSWORD=clickhouse
CLICKHOUSE_MCP_SERVER_TRANSPORT=http
CLICKHOUSE_MCP_BIND_HOST=0.0.0.0  # Bind to all interfaces
CLICKHOUSE_MCP_BIND_PORT=4200  # Custom port (default: 8000)
CLICKHOUSE_MCP_AUTH_TOKEN=your-generated-token  # One auth mode required for HTTP/SSE (or FASTMCP_SERVER_AUTH, or CLICKHOUSE_MCP_AUTH_DISABLED=true)
```

For local development with HTTP transport (authentication disabled):

```env
CLICKHOUSE_HOST=localhost
CLICKHOUSE_USER=default
CLICKHOUSE_PASSWORD=clickhouse
CLICKHOUSE_MCP_SERVER_TRANSPORT=http
CLICKHOUSE_MCP_AUTH_DISABLED=true  # Only for local development!
```

When using HTTP transport, the server will run on the configured port (default 8000). For example, with the above configuration:
- MCP endpoint: `http://localhost:4200/mcp`
- Health check: `http://localhost:4200/health`

You can set these variables in your environment, in a `.env` file, or in the Claude Desktop configuration:

```json
{
  "mcpServers": {
    "mcp-clickhouse": {
      "command": "uv",
      "args": [
        "run",
        "--with",
        "mcp-clickhouse",
        "--python",
        "3.10",
        "mcp-clickhouse"
      ],
      "env": {
        "CLICKHOUSE_HOST": "<clickhouse-host>",
        "CLICKHOUSE_USER": "<clickhouse-user>",
        "CLICKHOUSE_PASSWORD": "<clickhouse-password>",
        "CLICKHOUSE_DATABASE": "<optional-database>",
        "CLICKHOUSE_MCP_SERVER_TRANSPORT": "stdio",
        "CLICKHOUSE_MCP_BIND_HOST": "127.0.0.1",
        "CLICKHOUSE_MCP_BIND_PORT": "8000"
      }
    }
  }
}
```

Note: The bind host and port settings are only used when transport is set to "http" or "sse".

### Running tests

```bash
uv sync --all-extras --dev # install dev dependencies
uv run ruff check . # run linting

docker compose up -d test_services # start ClickHouse
uv run pytest -v tests
uv run pytest -v tests/test_tool.py # ClickHouse only
CHDB_ENABLED=true uv run --extra chdb pytest -v tests/test_chdb_tool.py # chDB only
```

## YouTube Overview

[![YouTube](http://i.ytimg.com/vi/y9biAm_Fkqw/hqdefault.jpg)](https://www.youtube.com/watch?v=y9biAm_Fkqw)
