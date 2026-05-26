---
name: "qdrant/mcp-server-qdrant"
description: "A Qdrant MCP server"
category: "Databases"
repo: "qdrant/mcp-server-qdrant"
stars: 1411
url: "https://github.com/qdrant/mcp-server-qdrant"
body_length: 22469
license: "Apache-2.0"
language: "Python"
homepage: "https://qdrant.tech"
body_tr: |-
  # mcp-server-qdrant: Bir Qdrant MCP sunucusu

  [![smithery badge](https://smithery.ai/badge/mcp-server-qdrant)](https://smithery.ai/protocol/mcp-server-qdrant)

  > [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction), LLM uygulamaları ile harici veri kaynakları ve araçları arasında sorunsuz entegrasyon sağlayan açık bir protokoldür. İster AI destekli bir IDE oluşturuyor olun, ister bir sohbet arayüzünü geliştiriyor olun, ister özel AI iş akışları oluşturuyor olun, MCP, LLM'leri ihtiyaç duydukları bağlam ile bağlamak için standartlaştırılmış bir yol sağlar.

  Bu depo, [Qdrant](https://qdrant.tech/) (bir vektör arama motoru) için MCP sunucusu oluşturmanın bir örneğidir.

  ## Genel Bakış

  Qdrant vektör arama motorunda anıları saklama ve alma işlemleri için resmi bir Model Context Protocol sunucusu.
  Qdrant veritabanının üstünde anlamsal bir bellek katmanı olarak çalışır.

  ## Bileşenler

  ### Araçlar

  1. `qdrant-store`
     - Qdrant veritabanında bilgi saklama
     - Giriş:
       - `information` (string): Saklanacak bilgi
       - `metadata` (JSON): Saklanacak isteğe bağlı metadata
       - `collection_name` (string): Bilginin saklanacağı koleksiyonun adı. Bu alan, varsayılan koleksiyon adı yoksa gereklidir.
                                     Varsayılan koleksiyon adı varsa, bu alan etkin değildir.
     - Döndürülen: Onay mesajı
  2. `qdrant-find`
     - Qdrant veritabanından ilgili bilgileri alma
     - Giriş:
       - `query` (string): Arama için kullanılacak sorgu
       - `collection_name` (string): Bilginin saklanacağı koleksiyonun adı. Bu alan, varsayılan koleksiyon adı yoksa gereklidir.
                                     Varsayılan koleksiyon adı varsa, bu alan etkin değildir.
     - Döndürülen: Qdrant veritabanında depolanan bilgiler ayrı mesajlar olarak

  ## Ortam Değişkenleri

  Yapılandırma ortam değişkenleri aracılığıyla yapılır. Tek komut satırı argümanı `--transport`, [taşıma protokolünü](#transport-protokolleri) seçmek için kullanılır.

  > [!NOTE]
  > `QDRANT_URL` ve `QDRANT_LOCAL_PATH` değişkenlerini aynı anda sağlayamazsınız.

  | Ad                       | Açıklama                                                            | Varsayılan Değer                                                  |
  |--------------------------|---------------------------------------------------------------------|-------------------------------------------------------------------|
  | `QDRANT_URL`             | Qdrant sunucusunun URL'si                                           | Hiçbiri                                                            |
  | `QDRANT_API_KEY`         | Qdrant sunucusu için API anahtarı                                   | Hiçbiri                                                            |
  | `COLLECTION_NAME`        | Kullanılacak varsayılan koleksiyonun adı.                           | Hiçbiri                                                            |
  | `QDRANT_LOCAL_PATH`      | Yerel Qdrant veritabanına giden yol (`QDRANT_URL` alternatifi)     | Hiçbiri                                                            |
  | `EMBEDDING_PROVIDER`     | Kullanılacak embedding sağlayıcısı (şu anda yalnızca "fastembed" desteklenir) | `fastembed`                                                       |
  | `EMBEDDING_MODEL`        | Kullanılacak embedding modelinin adı                                | `sentence-transformers/all-MiniLM-L6-v2`                          |
  | `TOOL_STORE_DESCRIPTION` | Depolama aracı için özel açıklama                                   | [`settings.py`](src/mcp_server_qdrant/settings.py) içinde varsayılan değeri gözüne |
  | `TOOL_FIND_DESCRIPTION`  | Bulma aracı için özel açıklama                                      | [`settings.py`](src/mcp_server_qdrant/settings.py) içinde varsayılan değeri gözüne |
  | `QDRANT_SEARCH_LIMIT`    | Arama sonuçlarından döndürülecek maksimum sonuç sayısı              | `10`                                                              |
  | `QDRANT_READ_ONLY`       | Salt okunur modu etkinleştir (`qdrant-store` aracını devre dışı bırakır) | `false`                                                           |

  ### FastMCP Ortam Değişkenleri

  `mcp-server-qdrant` FastMCP'ye dayandığından, tüm FastMCP ortam değişkenlerini de destekler. En
  önemli olanlar aşağıda listelenmiştir:

  | Ortam Değişkeni                            | Açıklama                                                        | Varsayılan Değer |
  |--------------------------------------------|-----------------------------------------------------------------|------------------|
  | `FASTMCP_LOG_LEVEL`                        | Günlük kaydı seviyesini ayarlayın (DEBUG, INFO, WARNING, ERROR, CRITICAL) | `INFO`           |
  | `FASTMCP_SERVER_DEBUG`                     | Hata ayıklama modunu etkinleştir                                | `false`          |
  | `FASTMCP_SERVER_HOST`                      | Sunucunun bağlanacağı ana bilgisayar adresi                      | `127.0.0.1`      |
  | `FASTMCP_SERVER_PORT`                      | Sunucunun çalışacağı port                                        | `8000`           |
  | `FASTMCP_SERVER_ON_DUPLICATE_RESOURCES`    | Yinelenen kaynaklar için davranış (warn, error, replace, ignore) | `warn`           |
  | `FASTMCP_SERVER_ON_DUPLICATE_TOOLS`        | Yinelenen araçlar için davranış (warn, error, replace, ignore)   | `warn`           |
  | `FASTMCP_SERVER_ON_DUPLICATE_PROMPTS`      | Yinelenen istemler için davranış (warn, error, replace, ignore)  | `warn`           |
  | `FASTMCP_SERVER_DEPENDENCIES`              | Sunucu ortamında yüklenecek bağımlılık listesi                   | `[]`             |

  > [!NOTE]
  > Sunucuya özgü ayarlar `FASTMCP_SERVER_` ön ekini kullanır. Bu gelecek sürümlerde değişebilir.

  ## Kurulum

  ### uvx kullanarak

  [`uvx`](https://docs.astral.sh/uv/guides/tools/#running-tools) kullanılırken *mcp-server-qdrant*'ı doğrudan çalıştırmak için belirli bir kurulum yapılması gerekmez.

  ```shell
  QDRANT_URL="http://localhost:6333" \
  COLLECTION_NAME="my-collection" \
  EMBEDDING_MODEL="sentence-transformers/all-MiniLM-L6-v2" \
  uvx mcp-server-qdrant
  ```

  #### Taşıma Protokolleri

  Sunucu, `--transport` bayrağı kullanılarak belirtilen farklı taşıma protokollerini destekler:

  ```shell
  QDRANT_URL="http://localhost:6333" \
  COLLECTION_NAME="my-collection" \
  uvx mcp-server-qdrant --transport sse
  ```

  Desteklenen taşıma protokolleri:

  - `stdio` (varsayılan): Standart giriş/çıkış taşıması, yalnızca yerel MCP istemcileri tarafından kullanılabilir
  - `sse`: Server-Sent Events taşıması, uzak istemciler için mükemmel
  - `streamable-http`: Akışı yapılabilir HTTP taşıması, uzak istemciler için mükemmel, SSE'den daha yeni

  Belirtilmezse varsayılan taşıma `stdio`'dur.

  SSE taşıması kullanıldığında, sunucu belirtilen portta dinlemeye başlayacak ve gelen bağlantıları bekleyecektir. Varsayılan
  port 8000'dir, ancak `FASTMCP_SERVER_PORT` ortam değişkeni kullanılarak değiştirilebilir.

  ```shell
  QDRANT_URL="http://localhost:6333" \
  COLLECTION_NAME="my-collection" \
  FASTMCP_SERVER_PORT=1234 \
  uvx mcp-server-qdrant --transport sse
  ```

  ### Docker kullanarak

  MCP sunucusunu oluşturmak ve çalıştırmak için bir Dockerfile mevcuttur:

  ```bash
  # Konteyner oluştur
  docker build -t mcp-server-qdrant .

  # Konteyner çalıştır
  docker run -p 8000:8000 \
    -e FASTMCP_SERVER_HOST="0.0.0.0" \
    -e QDRANT_URL="http://your-qdrant-server:6333" \
    -e QDRANT_API_KEY="your-api-key" \
    -e COLLECTION_NAME="your-collection" \
    mcp-server-qdrant
  ```

  > [!TIP]
  > `FASTMCP_SERVER_HOST="0.0.0.0"` ayarlandığını lütfen unutmayın; bu, sunucunun tüm ağ arayüzlerinde dinlemesi için gereklidir. Docker konteynerinde sunucu çalıştırırken bu gereklidir.

  ### Smithery aracılığıyla kurulum

  Qdrant MCP Server'ı [Smithery](https://smithery.ai/protocol/mcp-server-qdrant) aracılığıyla Claude Desktop'a otomatik olarak kurmak için:

  ```bash
  npx @smithery/cli install mcp-server-qdrant --client claude
  ```

  ### Claude Desktop'ın manuel yapılandırması

  Bu sunucuyu Claude Desktop uygulaması ile kullanmak için, `claude_desktop_config.json` dosyasının "mcpServers" bölümüne aşağıdaki yapılandırmayı ekleyin:

  ```json
  {
    "qdrant": {
      "command": "uvx",
      "args": ["mcp-server-qdrant"],
      "env": {
        "QDRANT_URL": "https://xyz-example.eu-central.aws.cloud.qdrant.io:6333",
        "QDRANT_API_KEY": "your_api_key",
        "COLLECTION_NAME": "your-collection-name",
        "EMBEDDING_MODEL": "sentence-transformers/all-MiniLM-L6-v2"
      }
    }
  }
  ```

  Yerel Qdrant modu için:

  ```json
  {
    "qdrant": {
      "command": "uvx",
      "args": ["mcp-server-qdrant"],
      "env": {
        "QDRANT_LOCAL_PATH": "/path/to/qdrant/database",
        "COLLECTION_NAME": "your-collection-name",
        "EMBEDDING_MODEL": "sentence-transformers/all-MiniLM-L6-v2"
      }
    }
  }
  ```

  Bu MCP sunucusu, belirtilen adda bir koleksiyon yoksa otomatik olarak oluşturacaktır.

  Varsayılan olarak, sunucu anıları kodlamak için `sentence-transformers/all-MiniLM-L6-v2` embedding modelini kullanacaktır.
  Şu anda, yalnızca [FastEmbed](https://qdrant.github.io/fastembed/) modelleri desteklenmektedir.

  ## Diğer araçlar için destek

  Bu MCP sunucusu, herhangi bir MCP uyumlu istemci ile kullanılabilir. Örneğin, bunu
  [Cursor](https://docs.cursor.com/context/model-context-protocol) ve [VS Code](https://code.visualstudio.com/docs) ile kullanabilirsiniz; bunlar Model Context Protocol için yerleşik destek sağlar.

  ### Cursor/Windsurf ile kullanım

  Bu MCP sunucusunu, araç açıklamalarını özelleştirerek Cursor veya Windsurf için bir kod arama aracı olarak çalışacak şekilde yapılandırabilirsiniz:

  ```bash
  QDRANT_URL="http://localhost:6333" \
  COLLECTION_NAME="code-snippets" \
  TOOL_STORE_DESCRIPTION="Store reusable code snippets for later retrieval. \
  The 'information' parameter should contain a natural language description of what the code does, \
  while the actual code should be included in the 'metadata' parameter as a 'code' property. \
  The value of 'metadata' is a Python dictionary with strings as keys. \
  Use this whenever you generate some code snippet." \
  TOOL_FIND_DESCRIPTION="Search for relevant code snippets based on natural language descriptions. \
  The 'query' parameter should describe what you're looking for, \
  and the tool will return the most relevant code snippets. \
  Use this when you need to find existing code snippets for reuse or reference." \
  uvx mcp-server-qdrant --transport sse # SSE taşımasını etkinleştir
  ```

  Cursor/Windsurf'te, bu çalışan sunucuya SSE taşıma protokolü kullanarak işaret ederek MCP sunucusunu ayarlarınızda yapılandırabilirsiniz. Cursor'a bir MCP sunucusu eklemenin açıklaması [Cursor
  dokumentasyonunda](https://docs.cursor.com/context/model-context-protocol#adding-an-mcp-server-to-cursor) bulunabilir. Cursor/Windsurf'ü yerel olarak çalıştırıyorsanız, aşağıdaki URL'yi kullanabilirsiniz:

  ```
  http://localhost:8000/sse
  ```

  > [!TIP]
  > Cursor/Windsurf'ü MCP sunucusuna bağlamak için SSE taşımasını tercih edilen yol olarak öneriyoruz; uzak bağlantıları destekleyebilir. Bu, sunucuyu takımınızla paylaşmayı veya bulut ortamında kullanmayı kolaylaştırır.

  Bu yapılandırma, Qdrant MCP sunucusunu aşağıdakileri yapabilen özel bir kod arama aracına dönüştürür:

  1. Kod parçacıkları, dokümantasyon ve uygulama ayrıntılarını depolama
  2. Anlamsal aramayanında ilgili kod örneklerini alma
  3. Geliştiricilerin belirli uygulamaları veya kullanım deseni bulmasına yardımcı olma

  Veritabanını, kod parçacıklarının doğal dil açıklamalarını (`information` parametresinde) gerçek kod ile birlikte (`metadata.code` özelliğinde) saklayarak ve ardından aradığınız şeyi açıklayan doğal dil sorguları kullanarak arama yaparak doldurabileceğiniz.

  > [!NOTE]
  > Yukarıda sağlanan araç açıklamaları örnektir ve belirli kullanım durumunuz için özelleştirilmesi gerekebilir. Tanımları, takımınızın iş akışına ve depolamak ve almak istediğiniz belirli kod parçacığı türlerine daha iyi uyacak şekilde ayarlamayı düşünün.

  **`mcp-server-qdrant`'ı başarıyla yüklediyseniz ancak Cursor ile çalışamıyorsanız, MCP araçlarının aracı her zaman yeni bir kod parçacığı ürettiğinde kullanılmasını sağlamak için lütfen [Cursor kurallarını](https://docs.cursor.com/context/rules-for-ai) oluşturmayı düşünün.** Kuralları belirli dosya türleriyle çalışacak şekilde sınırlandırabilir; böylece MCP sunucusu dokümantasyon veya diğer içerik türleri için kullanılmaz.

  ### Claude Code ile kullanım

  Bu MCP sunucusunu Claude Code'a bağlayarak mevcut kod tabanınız üzerinde anlamsal aramanın yeteneklerini geliştireyebilirsiniz.

  #### mcp-server-qdrant'ı kurma

  1. MCP sunucusunu Claude Code'a ekleyin:

      ```shell
      # Kod araması için yapılandırılan mcp-server-qdrant'ı ekle
      claude mcp add code-search \
      -e QDRANT_URL="http://localhost:6333" \
      -e COLLECTION_NAME="code-repository" \
      -e EMBEDDING_MODEL="sentence-transformers/all-MiniLM-L6-v2" \
      -e TOOL_STORE_DESCRIPTION="Store code snippets with descriptions. The 'information' parameter should contain a natural language description of what the code does, while the actual code should be included in the 'metadata' parameter as a 'code' property." \
      -e TOOL_FIND_DESCRIPTION="Search for relevant code snippets using natural language. The 'query' parameter should describe the functionality you're looking for." \
      -- uvx mcp-server-qdrant
      ```

  2. Sunucunun eklendiğini doğrulayın:

      ```shell
      claude mcp list
      ```

  #### Claude Code'da Anlamsal Kod Aramasını Kullanma

  `TOOL_STORE_DESCRIPTION` ve `TOOL_FIND_DESCRIPTION` içinde belirtilen araç açıklamaları, Claude Code'u MCP sunucusunun nasıl kullanılacağı konusunda rehberlik eder. Yukarıda sağlananlar örnektir ve belirli kullanım durumunuz için özelleştirilmesi gerekebilir. Ancak, Claude Code zaten şunları yapabilmelidir:

  1. Kod parçacıklarını açıklamalarla depolamak için `qdrant-store` aracını kullanma.
  2. Doğal dil kullanarak ilgili kod parçacıklarını aramak için `qdrant-find` aracını kullanma.

  ### MCP sunucusunu geliştirme modunda çalıştırma

  MCP sunucusu, `mcp dev` komutu kullanılarak geliştirme modunda çalıştırılabilir. Bu, sunucuyu başlatacak ve tarayıcınızda MCP inspector'u açacaktır.

  ```shell
  COLLECTION_NAME=mcp-dev fastmcp dev src/mcp_server_qdrant/server.py
  ```

  ### VS Code ile kullanım

  Tek tıklamalı kurulum için aşağıdaki kurulum düğmelerinden birine tıklayın:

  [![Install with UVX in VS Code](https://img.shields.io/badge/VS_Code-UVX-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=qdrant&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22mcp-server-qdrant%22%5D%2C%22env%22%3A%7B%22QDRANT_URL%22%3A%22%24%7Binput%3AqdrantUrl%7D%22%2C%22QDRANT_API_KEY%22%3A%22%24%7Binput%3AqdrantApiKey%7D%22%2C%22COLLECTION_NAME%22%3A%22%24%7Binput%3AcollectionName%7D%22%7D%7D&inputs=%5B%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22qdrantUrl%22%2C%22description%22%3A%22Qdrant+URL%22%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22qdrantApiKey%22%2C%22description%22%3A%22Qdrant+API+Key%22%2C%22password%22%3Atrue%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22collectionName%22%2C%22description%22%3A%22Collection+Name%22%7D%5D) [![Install with UVX in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-UVX-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=qdrant&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22mcp-server-qdrant%22%5D%2C%22env%22%3A%7B%22QDRANT_URL%22%3A%22%24%7Binput%3AqdrantUrl%7D%22%2C%22QDRANT_API_KEY%22%3A%22%24%7Binput%3AqdrantApiKey%7D%22%2C%22COLLECTION_NAME%22%3A%22%24%7Binput%3AcollectionName%7D%22%7D%7D&inputs=%5B%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22qdrantUrl%22%2C%22description%22%3A%22Qdrant+URL%22%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22qdrantApiKey%22%2C%22description%22%3A%22Qdrant+API+Key%22%2C%22password%22%3Atrue%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22collectionName%22%2C%22description%22%3A%22Collection+Name%22%7D%5D&quality=insiders)

  [![Install with Docker in VS Code](https://img.shields.io/badge/VS_Code-Docker-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=qdrant&config=%7B%22command%22%3A%22docker%22%2C%22args%22%3A%5B%22run%22%2C%22-p%22%2C%228000%3A8000%22%2C%22-i%22%2C%22--rm%22%2C%22-e%22%2C%22QDRANT_URL%22%2C%22-e%22%2C%22QDRANT_API_KEY%22%2C%22-e%22%2C%22COLLECTION_NAME%22%2C%22mcp-server-qdrant%22%5D%2C%22env%22%3A%7B%22QDRANT_URL%22%3A%22%24%7Binput%3AqdrantUrl%7D%22%2C%22QDRANT_API_KEY%22%3A%22%24%7Binput%3AqdrantApiKey%7D%22%2C%22COLLECTION_NAME%22%3A%22%24%7Binput%3AcollectionName%7D%22%7D%7D&inputs=%5B%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22qdrantUrl%22%2C%22description%22%3A%22Qdrant+URL%22%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22qdrantApiKey%22%2C%22description%22%3A%22Qdrant+API+Key%22%2C%22password%22%3Atrue%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22collectionName%22%2C%22description%22%3A%22Collection+Name%22%7D%5D) [![Install with Docker in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Docker-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=qdrant&config=%7B%22command%22%3A%22docker%22%2C%22args%22%3A%5B%22run%22%2C%22-p%22%2C%228000%3A8000%22%2C%22-i%22%2C%22--rm%22%2C%22-e%22%2C%22QDRANT_URL%22%2C%22-e%22%2C%22QDRANT_API_KEY%22%2C%22-e%22%2C%22COLLECTION_NAME%22%2C%22mcp-server-qdrant%22%5D%2C%22env%22%3A%7B%22QDRANT_URL%22%3A%22%24%7Binput%3AqdrantUrl%7D%22%2C%22QDRANT_API_KEY%22%3A%22%24%7Binput%3AqdrantApiKey%7D%22%2C%22COLLECTION_NAME%22%3A%22%24%7Binput%3AcollectionName%7D%22%7D%7D&inputs=%5B%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22qdrantUrl%22%2C%22description%22%3A%22Qdrant+URL%22%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22qdrantApiKey%22%2C%22description%22%3A%22Qdrant+API+Key%22%2C%22password%22%3Atrue%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22collectionName%22%2C%22description%22%3A%22Collection+Name%22%7D%5D&quality=insiders)

  #### Manuel kurulum

  VS Code'unda Kullanıcı Ayarları (JSON) dosyasına aşağıdaki JSON bloğunu ekleyin. Bunu `Ctrl + Shift + P` tuşlarına basarak ve `Preferences: Open User Settings (JSON)` yazarak yapabilirsiniz.

  ```json
  {
    "mcp": {
      "inputs": [
        {
          "type": "promptString",
          "id": "qdrantUrl",
          "description": "Qdrant URL"
        },
        {
          "type": "promptString",
          "id": "qdrantApiKey",
          "description": "Qdrant API Key",
          "password": true
        },
        {
          "type": "promptString",
          "id": "collectionName",
          "description": "Collection Name"
        }
      ],
      "servers": {
        "qdrant": {
          "command": "uvx",
          "args": ["mcp-server-qdrant"],
          "env": {
            "QDRANT_URL": "${input:qdrantUrl}",
            "QDRANT_API_KEY": "${input:qdrantApiKey}",
            "COLLECTION_NAME": "${input:collectionName}"
          }
        }
      }
    }
  }
  ```

  Veya Docker'ı tercih ediyorsanız, bunun yerine bu yapılandırmayı ekleyin:

  ```json
  {
    "mcp": {
      "inputs": [
        {
          "type": "promptString",
          "id": "qdrantUrl",
          "description": "Qdrant URL"
        },
        {
          "type": "promptString",
          "id": "qdrantApiKey",
          "description": "Qdrant API Key",
          "password": true
        },
        {
          "type": "promptString",
          "id": "collectionName",
          "description": "Collection Name"
        }
      ],
      "servers": {
        "qdrant": {
          "command": "docker",
          "args": [
            "run",
            "-p", "8000:8000",
            "-i",
            "--rm",
            "-e", "QDRANT_URL",
            "-e", "QDRANT_API_KEY",
            "-e", "COLLECTION_NAME",
            "mcp-server-qdrant"
          ],
          "env": {
            "QDRANT_URL": "${input:qdrantUrl}",
            "QDRANT_API_KEY": "${input:qdrantApiKey}",
            "COLLECTION_NAME": "${input:collectionName}"
          }
        }
      }
    }
  }
  ```

  Alternatif olarak, çalışma alanınızda aşağıdaki içeriğe sahip bir `.vscode/mcp.json` dosyası olu
---

# mcp-server-qdrant: A Qdrant MCP server

[![smithery badge](https://smithery.ai/badge/mcp-server-qdrant)](https://smithery.ai/protocol/mcp-server-qdrant)

> The [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) is an open protocol that enables
> seamless integration between LLM applications and external data sources and tools. Whether you're building an
> AI-powered IDE, enhancing a chat interface, or creating custom AI workflows, MCP provides a standardized way to
> connect LLMs with the context they need.

This repository is an example of how to create a MCP server for [Qdrant](https://qdrant.tech/), a vector search engine.

## Overview

An official Model Context Protocol server for keeping and retrieving memories in the Qdrant vector search engine.
It acts as a semantic memory layer on top of the Qdrant database.

## Components

### Tools

1. `qdrant-store`
   - Store some information in the Qdrant database
   - Input:
     - `information` (string): Information to store
     - `metadata` (JSON): Optional metadata to store
     - `collection_name` (string): Name of the collection to store the information in. This field is required if there are no default collection name.
                                   If there is a default collection name, this field is not enabled.
   - Returns: Confirmation message
2. `qdrant-find`
   - Retrieve relevant information from the Qdrant database
   - Input:
     - `query` (string): Query to use for searching
     - `collection_name` (string): Name of the collection to store the information in. This field is required if there are no default collection name.
                                   If there is a default collection name, this field is not enabled.
   - Returns: Information stored in the Qdrant database as separate messages

## Environment Variables

Configuration is done via environment variables. The only command-line argument is `--transport`, used to select the [transport protocol](#transport-protocols).

> [!NOTE]
> You cannot provide both `QDRANT_URL` and `QDRANT_LOCAL_PATH` at the same time.

| Name                     | Description                                                         | Default Value                                                     |
|--------------------------|---------------------------------------------------------------------|-------------------------------------------------------------------|
| `QDRANT_URL`             | URL of the Qdrant server                                            | None                                                              |
| `QDRANT_API_KEY`         | API key for the Qdrant server                                       | None                                                              |
| `COLLECTION_NAME`        | Name of the default collection to use.                              | None                                                              |
| `QDRANT_LOCAL_PATH`      | Path to the local Qdrant database (alternative to `QDRANT_URL`)     | None                                                              |
| `EMBEDDING_PROVIDER`     | Embedding provider to use (currently only "fastembed" is supported) | `fastembed`                                                       |
| `EMBEDDING_MODEL`        | Name of the embedding model to use                                  | `sentence-transformers/all-MiniLM-L6-v2`                          |
| `TOOL_STORE_DESCRIPTION` | Custom description for the store tool                               | See default in [`settings.py`](src/mcp_server_qdrant/settings.py) |
| `TOOL_FIND_DESCRIPTION`  | Custom description for the find tool                                | See default in [`settings.py`](src/mcp_server_qdrant/settings.py) |
| `QDRANT_SEARCH_LIMIT`    | Maximum number of results to return from search                     | `10`                                                              |
| `QDRANT_READ_ONLY`       | Enable read-only mode (disables `qdrant-store` tool)                | `false`                                                           |

### FastMCP Environment Variables

Since `mcp-server-qdrant` is based on FastMCP, it also supports all the FastMCP environment variables. The most
important ones are listed below:

| Environment Variable                       | Description                                                     | Default Value |
|--------------------------------------------|-----------------------------------------------------------------|---------------|
| `FASTMCP_LOG_LEVEL`                        | Set logging level (DEBUG, INFO, WARNING, ERROR, CRITICAL)       | `INFO`        |
| `FASTMCP_SERVER_DEBUG`                     | Enable debug mode                                               | `false`       |
| `FASTMCP_SERVER_HOST`                      | Host address to bind the server to                              | `127.0.0.1`   |
| `FASTMCP_SERVER_PORT`                      | Port to run the server on                                       | `8000`        |
| `FASTMCP_SERVER_ON_DUPLICATE_RESOURCES`    | Behavior for duplicate resources (warn, error, replace, ignore) | `warn`        |
| `FASTMCP_SERVER_ON_DUPLICATE_TOOLS`        | Behavior for duplicate tools (warn, error, replace, ignore)     | `warn`        |
| `FASTMCP_SERVER_ON_DUPLICATE_PROMPTS`      | Behavior for duplicate prompts (warn, error, replace, ignore)   | `warn`        |
| `FASTMCP_SERVER_DEPENDENCIES`              | List of dependencies to install in the server environment       | `[]`          |

> [!NOTE]
> Server-specific settings use the `FASTMCP_SERVER_` prefix. This may change in future versions.

## Installation

### Using uvx

When using [`uvx`](https://docs.astral.sh/uv/guides/tools/#running-tools) no specific installation is needed to directly run *mcp-server-qdrant*.

```shell
QDRANT_URL="http://localhost:6333" \
COLLECTION_NAME="my-collection" \
EMBEDDING_MODEL="sentence-transformers/all-MiniLM-L6-v2" \
uvx mcp-server-qdrant
```

#### Transport Protocols

The server supports different transport protocols that can be specified using the `--transport` flag:

```shell
QDRANT_URL="http://localhost:6333" \
COLLECTION_NAME="my-collection" \
uvx mcp-server-qdrant --transport sse
```

Supported transport protocols:

- `stdio` (default): Standard input/output transport, might only be used by local MCP clients
- `sse`: Server-Sent Events transport, perfect for remote clients
- `streamable-http`: Streamable HTTP transport, perfect for remote clients, more recent than SSE

The default transport is `stdio` if not specified.

When SSE transport is used, the server will listen on the specified port and wait for incoming connections. The default
port is 8000, however it can be changed using the `FASTMCP_SERVER_PORT` environment variable.

```shell
QDRANT_URL="http://localhost:6333" \
COLLECTION_NAME="my-collection" \
FASTMCP_SERVER_PORT=1234 \
uvx mcp-server-qdrant --transport sse
```

### Using Docker

A Dockerfile is available for building and running the MCP server:

```bash
# Build the container
docker build -t mcp-server-qdrant .

# Run the container
docker run -p 8000:8000 \
  -e FASTMCP_SERVER_HOST="0.0.0.0" \
  -e QDRANT_URL="http://your-qdrant-server:6333" \
  -e QDRANT_API_KEY="your-api-key" \
  -e COLLECTION_NAME="your-collection" \
  mcp-server-qdrant
```

> [!TIP]
> Please note that we set `FASTMCP_SERVER_HOST="0.0.0.0"` to make the server listen on all network interfaces. This is
> necessary when running the server in a Docker container.

### Installing via Smithery

To install Qdrant MCP Server for Claude Desktop automatically via [Smithery](https://smithery.ai/protocol/mcp-server-qdrant):

```bash
npx @smithery/cli install mcp-server-qdrant --client claude
```

### Manual configuration of Claude Desktop

To use this server with the Claude Desktop app, add the following configuration to the "mcpServers" section of your
`claude_desktop_config.json`:

```json
{
  "qdrant": {
    "command": "uvx",
    "args": ["mcp-server-qdrant"],
    "env": {
      "QDRANT_URL": "https://xyz-example.eu-central.aws.cloud.qdrant.io:6333",
      "QDRANT_API_KEY": "your_api_key",
      "COLLECTION_NAME": "your-collection-name",
      "EMBEDDING_MODEL": "sentence-transformers/all-MiniLM-L6-v2"
    }
  }
}
```

For local Qdrant mode:

```json
{
  "qdrant": {
    "command": "uvx",
    "args": ["mcp-server-qdrant"],
    "env": {
      "QDRANT_LOCAL_PATH": "/path/to/qdrant/database",
      "COLLECTION_NAME": "your-collection-name",
      "EMBEDDING_MODEL": "sentence-transformers/all-MiniLM-L6-v2"
    }
  }
}
```

This MCP server will automatically create a collection with the specified name if it doesn't exist.

By default, the server will use the `sentence-transformers/all-MiniLM-L6-v2` embedding model to encode memories.
For the time being, only [FastEmbed](https://qdrant.github.io/fastembed/) models are supported.

## Support for other tools

This MCP server can be used with any MCP-compatible client. For example, you can use it with
[Cursor](https://docs.cursor.com/context/model-context-protocol) and [VS Code](https://code.visualstudio.com/docs), which provide built-in support for the Model Context
Protocol.

### Using with Cursor/Windsurf

You can configure this MCP server to work as a code search tool for Cursor or Windsurf by customizing the tool
descriptions:

```bash
QDRANT_URL="http://localhost:6333" \
COLLECTION_NAME="code-snippets" \
TOOL_STORE_DESCRIPTION="Store reusable code snippets for later retrieval. \
The 'information' parameter should contain a natural language description of what the code does, \
while the actual code should be included in the 'metadata' parameter as a 'code' property. \
The value of 'metadata' is a Python dictionary with strings as keys. \
Use this whenever you generate some code snippet." \
TOOL_FIND_DESCRIPTION="Search for relevant code snippets based on natural language descriptions. \
The 'query' parameter should describe what you're looking for, \
and the tool will return the most relevant code snippets. \
Use this when you need to find existing code snippets for reuse or reference." \
uvx mcp-server-qdrant --transport sse # Enable SSE transport
```

In Cursor/Windsurf, you can then configure the MCP server in your settings by pointing to this running server using
SSE transport protocol. The description on how to add an MCP server to Cursor can be found in the [Cursor
documentation](https://docs.cursor.com/context/model-context-protocol#adding-an-mcp-server-to-cursor). If you are
running Cursor/Windsurf locally, you can use the following URL:

```
http://localhost:8000/sse
```

> [!TIP]
> We suggest SSE transport as a preferred way to connect Cursor/Windsurf to the MCP server, as it can support remote
> connections. That makes it easy to share the server with your team or use it in a cloud environment.

This configuration transforms the Qdrant MCP server into a specialized code search tool that can:

1. Store code snippets, documentation, and implementation details
2. Retrieve relevant code examples based on semantic search
3. Help developers find specific implementations or usage patterns

You can populate the database by storing natural language descriptions of code snippets (in the `information` parameter)
along with the actual code (in the `metadata.code` property), and then search for them using natural language queries
that describe what you're looking for.

> [!NOTE]
> The tool descriptions provided above are examples and may need to be customized for your specific use case. Consider
> adjusting the descriptions to better match your team's workflow and the specific types of code snippets you want to
> store and retrieve.

**If you have successfully installed the `mcp-server-qdrant`, but still can't get it to work with Cursor, please
consider creating the [Cursor rules](https://docs.cursor.com/context/rules-for-ai) so the MCP tools are always used when
the agent produces a new code snippet.** You can restrict the rules to only work for certain file types, to avoid using
the MCP server for the documentation or other types of content.

### Using with Claude Code

You can enhance Claude Code's capabilities by connecting it to this MCP server, enabling semantic search over your
existing codebase.

#### Setting up mcp-server-qdrant

1. Add the MCP server to Claude Code:

    ```shell
    # Add mcp-server-qdrant configured for code search
    claude mcp add code-search \
    -e QDRANT_URL="http://localhost:6333" \
    -e COLLECTION_NAME="code-repository" \
    -e EMBEDDING_MODEL="sentence-transformers/all-MiniLM-L6-v2" \
    -e TOOL_STORE_DESCRIPTION="Store code snippets with descriptions. The 'information' parameter should contain a natural language description of what the code does, while the actual code should be included in the 'metadata' parameter as a 'code' property." \
    -e TOOL_FIND_DESCRIPTION="Search for relevant code snippets using natural language. The 'query' parameter should describe the functionality you're looking for." \
    -- uvx mcp-server-qdrant
    ```

2. Verify the server was added:

    ```shell
    claude mcp list
    ```

#### Using Semantic Code Search in Claude Code

Tool descriptions, specified in `TOOL_STORE_DESCRIPTION` and `TOOL_FIND_DESCRIPTION`, guide Claude Code on how to use
the MCP server. The ones provided above are examples and may need to be customized for your specific use case. However,
Claude Code should be already able to:

1. Use the `qdrant-store` tool to store code snippets with descriptions.
2. Use the `qdrant-find` tool to search for relevant code snippets using natural language.

### Run MCP server in Development Mode

The MCP server can be run in development mode using the `mcp dev` command. This will start the server and open the MCP
inspector in your browser.

```shell
COLLECTION_NAME=mcp-dev fastmcp dev src/mcp_server_qdrant/server.py
```

### Using with VS Code

For one-click installation, click one of the install buttons below:

[![Install with UVX in VS Code](https://img.shields.io/badge/VS_Code-UVX-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=qdrant&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22mcp-server-qdrant%22%5D%2C%22env%22%3A%7B%22QDRANT_URL%22%3A%22%24%7Binput%3AqdrantUrl%7D%22%2C%22QDRANT_API_KEY%22%3A%22%24%7Binput%3AqdrantApiKey%7D%22%2C%22COLLECTION_NAME%22%3A%22%24%7Binput%3AcollectionName%7D%22%7D%7D&inputs=%5B%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22qdrantUrl%22%2C%22description%22%3A%22Qdrant+URL%22%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22qdrantApiKey%22%2C%22description%22%3A%22Qdrant+API+Key%22%2C%22password%22%3Atrue%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22collectionName%22%2C%22description%22%3A%22Collection+Name%22%7D%5D) [![Install with UVX in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-UVX-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=qdrant&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22mcp-server-qdrant%22%5D%2C%22env%22%3A%7B%22QDRANT_URL%22%3A%22%24%7Binput%3AqdrantUrl%7D%22%2C%22QDRANT_API_KEY%22%3A%22%24%7Binput%3AqdrantApiKey%7D%22%2C%22COLLECTION_NAME%22%3A%22%24%7Binput%3AcollectionName%7D%22%7D%7D&inputs=%5B%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22qdrantUrl%22%2C%22description%22%3A%22Qdrant+URL%22%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22qdrantApiKey%22%2C%22description%22%3A%22Qdrant+API+Key%22%2C%22password%22%3Atrue%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22collectionName%22%2C%22description%22%3A%22Collection+Name%22%7D%5D&quality=insiders)

[![Install with Docker in VS Code](https://img.shields.io/badge/VS_Code-Docker-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=qdrant&config=%7B%22command%22%3A%22docker%22%2C%22args%22%3A%5B%22run%22%2C%22-p%22%2C%228000%3A8000%22%2C%22-i%22%2C%22--rm%22%2C%22-e%22%2C%22QDRANT_URL%22%2C%22-e%22%2C%22QDRANT_API_KEY%22%2C%22-e%22%2C%22COLLECTION_NAME%22%2C%22mcp-server-qdrant%22%5D%2C%22env%22%3A%7B%22QDRANT_URL%22%3A%22%24%7Binput%3AqdrantUrl%7D%22%2C%22QDRANT_API_KEY%22%3A%22%24%7Binput%3AqdrantApiKey%7D%22%2C%22COLLECTION_NAME%22%3A%22%24%7Binput%3AcollectionName%7D%22%7D%7D&inputs=%5B%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22qdrantUrl%22%2C%22description%22%3A%22Qdrant+URL%22%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22qdrantApiKey%22%2C%22description%22%3A%22Qdrant+API+Key%22%2C%22password%22%3Atrue%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22collectionName%22%2C%22description%22%3A%22Collection+Name%22%7D%5D) [![Install with Docker in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Docker-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=qdrant&config=%7B%22command%22%3A%22docker%22%2C%22args%22%3A%5B%22run%22%2C%22-p%22%2C%228000%3A8000%22%2C%22-i%22%2C%22--rm%22%2C%22-e%22%2C%22QDRANT_URL%22%2C%22-e%22%2C%22QDRANT_API_KEY%22%2C%22-e%22%2C%22COLLECTION_NAME%22%2C%22mcp-server-qdrant%22%5D%2C%22env%22%3A%7B%22QDRANT_URL%22%3A%22%24%7Binput%3AqdrantUrl%7D%22%2C%22QDRANT_API_KEY%22%3A%22%24%7Binput%3AqdrantApiKey%7D%22%2C%22COLLECTION_NAME%22%3A%22%24%7Binput%3AcollectionName%7D%22%7D%7D&inputs=%5B%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22qdrantUrl%22%2C%22description%22%3A%22Qdrant+URL%22%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22qdrantApiKey%22%2C%22description%22%3A%22Qdrant+API+Key%22%2C%22password%22%3Atrue%7D%2C%7B%22type%22%3A%22promptString%22%2C%22id%22%3A%22collectionName%22%2C%22description%22%3A%22Collection+Name%22%7D%5D&quality=insiders)

#### Manual Installation

Add the following JSON block to your User Settings (JSON) file in VS Code. You can do this by pressing `Ctrl + Shift + P` and typing `Preferences: Open User Settings (JSON)`.

```json
{
  "mcp": {
    "inputs": [
      {
        "type": "promptString",
        "id": "qdrantUrl",
        "description": "Qdrant URL"
      },
      {
        "type": "promptString",
        "id": "qdrantApiKey",
        "description": "Qdrant API Key",
        "password": true
      },
      {
        "type": "promptString",
        "id": "collectionName",
        "description": "Collection Name"
      }
    ],
    "servers": {
      "qdrant": {
        "command": "uvx",
        "args": ["mcp-server-qdrant"],
        "env": {
          "QDRANT_URL": "${input:qdrantUrl}",
          "QDRANT_API_KEY": "${input:qdrantApiKey}",
          "COLLECTION_NAME": "${input:collectionName}"
        }
      }
    }
  }
}
```

Or if you prefer using Docker, add this configuration instead:

```json
{
  "mcp": {
    "inputs": [
      {
        "type": "promptString",
        "id": "qdrantUrl",
        "description": "Qdrant URL"
      },
      {
        "type": "promptString",
        "id": "qdrantApiKey",
        "description": "Qdrant API Key",
        "password": true
      },
      {
        "type": "promptString",
        "id": "collectionName",
        "description": "Collection Name"
      }
    ],
    "servers": {
      "qdrant": {
        "command": "docker",
        "args": [
          "run",
          "-p", "8000:8000",
          "-i",
          "--rm",
          "-e", "QDRANT_URL",
          "-e", "QDRANT_API_KEY",
          "-e", "COLLECTION_NAME",
          "mcp-server-qdrant"
        ],
        "env": {
          "QDRANT_URL": "${input:qdrantUrl}",
          "QDRANT_API_KEY": "${input:qdrantApiKey}",
          "COLLECTION_NAME": "${input:collectionName}"
        }
      }
    }
  }
}
```

Alternatively, you can create a `.vscode/mcp.json` file in your workspace with the following content:

```json
{
  "inputs": [
    {
      "type": "promptString",
      "id": "qdrantUrl",
      "description": "Qdrant URL"
    },
    {
      "type": "promptString",
      "id": "qdrantApiKey",
      "description": "Qdrant API Key",
      "password": true
    },
    {
      "type": "promptString",
      "id": "collectionName",
      "description": "Collection Name"
    }
  ],
  "servers": {
    "qdrant": {
      "command": "uvx",
      "args": ["mcp-server-qdrant"],
      "env": {
        "QDRANT_URL": "${input:qdrantUrl}",
        "QDRANT_API_KEY": "${input:qdrantApiKey}",
        "COLLECTION_NAME": "${input:collectionName}"
      }
    }
  }
}
```

For workspace configuration with Docker, use this in `.vscode/mcp.json`:

```json
{
  "inputs": [
    {
      "type": "promptString",
      "id": "qdrantUrl",
      "description": "Qdrant URL"
    },
    {
      "type": "promptString",
      "id": "qdrantApiKey",
      "description": "Qdrant API Key",
      "password": true
    },
    {
      "type": "promptString",
      "id": "collectionName",
      "description": "Collection Name"
    }
  ],
  "servers": {
    "qdrant": {
      "command": "docker",
      "args": [
        "run",
        "-p", "8000:8000",
        "-i",
        "--rm",
        "-e", "QDRANT_URL",
        "-e", "QDRANT_API_KEY",
        "-e", "COLLECTION_NAME",
        "mcp-server-qdrant"
      ],
      "env": {
        "QDRANT_URL": "${input:qdrantUrl}",
        "QDRANT_API_KEY": "${input:qdrantApiKey}",
        "COLLECTION_NAME": "${input:collectionName}"
      }
    }
  }
}
```

## Contributing

If you have suggestions for how mcp-server-qdrant could be improved, or want to report a bug, open an issue!
We'd love all and any contributions.

### Testing `mcp-server-qdrant` locally

The [MCP inspector](https://github.com/modelcontextprotocol/inspector) is a developer tool for testing and debugging MCP
servers. It runs both a client UI (default port 5173) and an MCP proxy server (default port 3000). Open the client UI in
your browser to use the inspector.

```shell
QDRANT_URL=":memory:" COLLECTION_NAME="test" \
fastmcp dev src/mcp_server_qdrant/server.py
```

Once started, open your browser to http://localhost:5173 to access the inspector interface.

## License

This MCP server is licensed under the Apache License 2.0. This means you are free to use, modify, and distribute the
software, subject to the terms and conditions of the Apache License 2.0. For more details, please see the LICENSE file
in the project repository.
