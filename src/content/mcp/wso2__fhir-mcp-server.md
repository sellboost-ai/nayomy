---
name: "wso2/fhir-mcp-server"
description: "Model Context Protocol server for Fast Healthcare Interoperability Resources (FHIR) APIs. Provides seamless integration with FHIR servers, enabling AI assistants to search, retrieve, create, update, and analyze clinical healthcare data with SMART-on-FHIR authentication support."
description_tr: "FHIR API'leri için Model Context Protocol sunucusu. FHIR sunucularıyla sorunsuz entegrasyon sağlayarak, yapay zeka asistanlarının SMART-on-FHIR kimlik doğrulaması desteğiyle klinik sağlık verilerini arayabilmesini, alabilmesini, oluşturabilmesini, güncelleyebilmesini ve analiz edebilmesini mümkün kılar."
category: "Biology Medicine and Bioinformatics"
repo: "wso2/fhir-mcp-server"
stars: 121
url: "https://github.com/wso2/fhir-mcp-server"
body_length: 19646
license: "Apache-2.0"
language: "Python"
body_tr: |-
  # Model Context Protocol (MCP) Sunucusu Fast Healthcare Interoperability Resources (FHIR) API'ları için

  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/wso2/fhir-mcp-server/blob/main/LICENSE)
  [![Get Support on Stack Overflow](https://img.shields.io/badge/stackoverflow-wso2-orange)](https://stackoverflow.com/questions/tagged/wso2)
  [![Join the community on Discord](https://img.shields.io/badge/Join%20us%20on-Discord-%23e01563.svg)](https://discord.com/invite/wso2)
  [![X](https://img.shields.io/twitter/follow/wso2.svg?style=social&label=Follow)](https://twitter.com/intent/follow?screen_name=wso2)
  [![Listed on Spark](https://spark.entire.vc/badges/listed.svg)](https://spark.entire.vc/assets/vb-fhir?utm_source=github&utm_medium=readme)
  [![Install via Spark](https://spark.entire.vc/badges/vb-fhir/install.svg)](https://spark.entire.vc/assets/vb-fhir?utm_source=github&utm_medium=readme)

  ## İçindekiler
  - [Model Context Protocol (MCP) Sunucusu Fast Healthcare Interoperability Resources (FHIR) API'ları için](#model-context-protocol-mcp-sunucusu-fast-healthcare-interoperability-resources-fhir-apları-için)
    - [İçindekiler](#i̇çindekiler)
    - [Genel Bakış](#genel-bakış)
    - [Demo](#demo)
      - [HAPI FHIR sunucusu ile demo](#hapi-fhir-sunucusu-ile-demo)
      - [EPIC Sandbox ile demo](#epic-sandbox-ile-demo)
    - [Temel Özellikler](#temel-özellikler)
    - [Ön Koşullar](#ön-koşullar)
    - [Kurulum](#kurulum)
      - [PyPI Paketi Kullanarak Kurulum](#pypi-paketi-kullanarak-kurulum)
      - [Kaynaktan Kurulum](#kaynaktan-kurulum)
      - [Docker Kullanarak Kurulum](#docker-kullanarak-kurulum)
          - [Docker ile MCP Sunucusunu Çalıştırma](#docker-ile-mcp-sunucusunu-çalıştırma)
          - [HAPI FHIR Sunucusu ile Docker Compose Kullanma](#hapi-fhir-sunucusu-ile-docker-compose-kullanma)
    - [MCP İstemcileri ile Entegrasyon](#mcp-i̇stemcileri-ile-entegrasyon)
      - [VS Code](#vs-code)
      - [Claude Desktop](#claude-desktop)
      - [MCP Inspector](#mcp-inspector)
    - [Yapılandırma](#yapılandırma)
      - [CLI Seçenekleri](#cli-seçenekleri)
      - [Ortam Değişkenleri](#ortam-değişkenleri)
    - [Araçlar](#araçlar)
    - [Geliştirme ve Test](#geliştirme-ve-test)
      - [Geliştirme Bağımlılıklarını Kurma](#geliştirme-bağımlılıklarını-kurma)
      - [Testleri Çalıştırma](#testleri-çalıştırma)


  ## Genel Bakış

  FHIR MCP Sunucusu, FHIR API'ları ile sorunsuz entegrasyon sağlayan bir Model Context Protocol (MCP) sunucusudur. Geliştiriciler, entegratörler ve sağlık hizmetleri inovatörleri için tasarlanan bu sunucu, modern AI/LLM araçları ile sağlık verileri arasında bir köprü görevi görerek, klinik bilgileri arama, alma ve analiz etmeyi kolaylaştırır.

  ## Demo

  ### HAPI FHIR sunucusu ile demo

  Bu video, MCP sunucusunun genel [HAPI FHIR sunucusuna](https://hapi.fhir.org/) bağlandığında işlevselliğini göstermektedir. Bu örnek, yetkilendirme akışı gerektirmeyen açık bir FHIR sunucusu ile doğrudan etkileşimi göstermektedir.

  https://github.com/user-attachments/assets/cc6ac87e-8329-4da4-a090-2d76564a3abf

  ### EPIC Sandbox ile demo

  Bu video, MCP sunucusunun [Epic EHR ekosistemi](https://open.epic.com/) içindeki yeteneklerini göstermektedir. Tam OAuth 2.0 Yetkilendirme Kodu Grant akışını göstermektedir.

  https://github.com/user-attachments/assets/96b433f1-3e53-4564-8466-65ab48d521de

  ## Temel Özellikler

  - **MCP uyumlu transport**: FHIR'ı stdio, SSE veya streamable HTTP üzerinden sunar

  - **SMART-on-FHIR tabanlı authentication desteği**: FHIR sunucuları ve istemcileri ile güvenli şekilde kimlik doğrulama yapın

  - **Tool entegrasyonu**: VS Code, Claude Desktop ve MCP Inspector gibi herhangi bir MCP istemcisi ile entegre edilebilir

  ## Ön Koşullar

  - Python 3.8+
  - [uv](https://github.com/astral-sh/uv) (bağımlılık yönetimi için)
  - Erişilebilir bir FHIR API sunucusu.

  ## Kurulum

  Python paketimizi yükleyerek veya bu repository'yi klonlayarak FHIR MCP Sunucusunu kullanabilirsiniz.

  ### PyPI Paketi Kullanarak Kurulum

  1. **Ortam Değişkenlerini Yapılandırın:**
      
      Sunucuyu çalıştırmak için `FHIR_SERVER_BASE_URL` ayarlamanız gerekir.

      * **Yetkilendirmeyi etkinleştirmek için:** `FHIR_SERVER_BASE_URL`, `FHIR_SERVER_CLIENT_ID`, `FHIR_SERVER_CLIENT_SECRET` ve `FHIR_SERVER_SCOPES` ayarlayın. Yetkilendirme varsayılan olarak etkindir.
      * **Yetkilendirmeyi devre dışı bırakmak için:** `FHIR_SERVER_DISABLE_AUTHORIZATION` değerini `True` olarak ayarlayın.

      Varsayılan olarak, MCP sunucusu **[http://localhost:8000](http://localhost:8000)** üzerinde çalışır ve `FHIR_MCP_HOST` ve `FHIR_MCP_PORT` kullanarak host ve port'u özelleştirebilirsiniz.


      Bunları aşağıdaki gibi ortam değişkenleri olarak ayarlayabilir veya bir `.env` dosyası oluşturabilirsiniz (`.env.example` referansı alarak).

      ```bash 
      export FHIR_SERVER_BASE_URL=""
      export FHIR_SERVER_CLIENT_ID=""
      export FHIR_SERVER_CLIENT_SECRET=""
      export FHIR_SERVER_SCOPES=""

      export FHIR_MCP_HOST="localhost"
      export FHIR_MCP_PORT="8000"
      ```

  2. **PyPI paketini yükleyin ve sunucuyu çalıştırın**

      ```bash
      uvx fhir-mcp-server
      ```

  ### Kaynaktan Kurulum

  1. **Repository'yi klonlayın:**
      ```bash
      git clone <repository_url>
      cd <repository_directory>
      ```

  2. **Sanal bir ortam oluşturun ve bağımlılıkları yükleyin:**
      ```bash
      uv venv
      source .venv/bin/activate
      uv pip sync requirements.txt
      ```
      Veya pip ile:
      ```bash
      python -m venv .venv
      source .venv/bin/activate
      pip install -r requirements.txt
      ```

  3. **Ortam Değişkenlerini Yapılandırın:**
      Örnek dosyayı kopyalayın ve gerekirse özelleştirin:
      ```bash
      cp .env.example .env
      ```

  4. **Sunucuyu çalıştırın:**
      ```bash
      uv run fhir-mcp-server
      ```

  ### Docker Kullanarak Kurulum

  #### Docker ile MCP Sunucusunu Çalıştırma

  Docker'ı kullanarak MCP sunucusunu tutarlı, izole bir ortamda çalıştırabilirsiniz.

  >**Yetkilendirme** Notu: MCP sunucusunu Docker veya Docker Compose aracılığıyla **yerel olarak** çalıştırırken, ortam değişkeni `FHIR_SERVER_DISABLE_AUTHORIZATION=True` ayarlanarak yetkilendirme devre dışı bırakılmalıdır. Bu gelecek sürümlerde düzeltilecektir.

  1. Docker Image'ını oluşturun veya container registry'den docker image'ını çekin:

      * Kaynaktan oluşturun:
          ```bash
          docker build -t fhir-mcp-server .
          ```
      * GitHub Container Registry'den çekin:
          ```bash
          docker pull wso2/fhir-mcp-server:latest
          ```

  2. Ortam Değişkenlerini Yapılandırın

      Örnek ortam dosyasını kopyalayın ve gerekirse düzenleyin:

      ```bash
      cp .env.example .env
      # FHIR sunucunuzu, istemci kimlik bilgilerinizi vb. ayarlamak için .env dosyasını düzenleyin
      ```

      Alternatif olarak, ortam değişkenlerini doğrudan `-e` flag'leri ile veya hassas değerler için Docker secrets'leri kullanarak geçirebilirsiniz. Kullanılabilir ortam değişkenleri hakkında ayrıntılar için [Yapılandırma](#yapılandırma) bölümüne bakın.

  3. Container'ı Çalıştırın

      ```bash
      docker run --env-file .env -p 8000:8000 fhir-mcp-server
      ```

      Bu, sunucuyu başlatacak ve port 8000'de kullanıma sunacaktır. Gerekirse port eşlemesini ayarlayın.

  #### HAPI FHIR Sunucusu ile Docker Compose Kullanma

  FHIR MCP sunucusu ve HAPI FHIR sunucusu (PostgreSQL ile) dahil olmak üzere hızlı bir kurulum için sağlanan `docker-compose.yml` dosyasını kullanın. Bu, FHIR işlemlerini test etmek için anında bir geliştirme ortamı ayarlar.

  1. **Ön Koşullar:**
     - Docker ve Docker Compose yüklü.

  2. **Stack'i Çalıştırın:**

     ```bash
     docker-compose up -d
     ```

     Bu komut şunları yapacaktır:
     - Bir PostgreSQL veritabanı konteynerini başlatın.
     - HAPI FHIR sunucusunu (PostgreSQL'e bağlı) http://localhost:8080 üzerinde dinleyecek şekilde başlatın.
     - FHIR MCP sunucu konteynerini http://localhost:8000 üzerinde dinleyecek şekilde oluşturun ve çalıştırın; `FHIR_SERVER_BASE_URL` http://hapi-r4-postgresql:8080/fhir olarak ayarlanır.

  3. **Hizmetlere Erişin:**
     - FHIR MCP Sunucusu: http://localhost:8000
     - HAPI FHIR Sunucusu: http://localhost:8080
     - Durdurmak için `docker-compose down` komutunu çalıştırın.

  4. **Ek Ortam Değişkenlerini Yapılandırın:**

     OAuth veya diğer ayarları özelleştirmeniz gerekiyorsa, `docker-compose.yml` dosyasındaki env değişkenlerini ayarlayın. Compose dosyası temel yapılandırma ayarlar; tam seçenekler için [Yapılandırma](#yapılandırma) bölümüne bakın.

  ## MCP İstemcileri ile Entegrasyon

  FHIR MCP Sunucusu çeşitli MCP istemcileri ile sorunsuz entegrasyon için tasarlanmıştır.

  ### VS Code

  [![Install in VS Code](https://img.shields.io/badge/VS_Code-Install_Server-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=fhir&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A8000%2Fmcp%2F%22%7D)
  [![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Install_Server-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=fhir&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A8000%2Fmcp%2F%22%7D)

  VS Code'da MCP yapılandırma dosyasına aşağıdaki JSON bloğunu ekleyin (> V1.104). Bunu Ctrl + Shift + P tuşlarına basıp `MCP: Open User Configuration` yazarak yapabilirsiniz.

  <table>
  <tr><th>Streamable HTTP</th><th>STDIO</th><th>SSE</th></tr>
  <tr valign=top>
  <td>

  ```json
  "servers": {
      "fhir": {
          "type": "http",
          "url": "http://localhost:8000/mcp",
      }
  }
  ```
  </td>

  <td>

  ```json
  "servers": {
      "fhir": {
          "command": "uv",
          "args": [
              "--directory",
              "/path/to/fhir-mcp-server",
              "run",
              "fhir-mcp-server",
              "--transport",
              "stdio"
          ],
          "env": {
              "FHIR_SERVER_ACCESS_TOKEN": "Your FHIR Access Token"
          }
      }
  }
  ```
  </td>

  <td>

  ```json
  "servers": {
      "fhir": {
          "type": "sse",
          "url": "http://localhost:8000/sse",
      }
  }
  ```
  </td>
  </tr>
  </table>

  ### Claude Desktop
  Yerel MCP sunucunuza bağlanmak için Claude Desktop ayarlarına aşağıdaki JSON bloğunu ekleyin.
   - Claude Desktop uygulamasını başlatın, üst çubukta Claude menüsüne tıklayın ve "Settings…" öğesini seçin.
   - Settings bölmesinde, sol kenar çubuğundaki "Developer" öğesine tıklayın. Ardından "Edit Config" öğesine tıklayın. Bu, yapılandırma dosyanızı dosya sisteminizde açacaktır. Henüz yoksa, Claude otomatik olarak şu konumda bir tane oluşturacaktır:
      - macOS: ~/Library/Application Support/Claude/claude_desktop_config.json
      - Windows: %APPDATA%\Claude\claude_desktop_config.json
   - claude_desktop_config.json dosyasını herhangi bir metin editöründe açın. İçeriğini MCP sunucusunu kaydetmek için aşağıdaki JSON bloğu ile değiştirin:

  <table>
  <tr><th>Streamable HTTP</th><th>STDIO</th><th>SSE</th></tr>
  <tr valign=top>
  <td>

  ```json
  {
      "mcpServers": {
          "fhir": {
              "command": "npx",
              "args": [
                  "-y",
                  "mcp-remote",
                  "http://localhost:8000/mcp"
              ]
          }
      }
  }
  ```
  </td>
  <td>

  ```json
  {
      "mcpServers": {
          "fhir": {
              "command": "uv",
              "args": [
                  "--directory",
                  "/path/to/fhir-mcp-server",
                  "run",
                  "fhir-mcp-server",
                  "--transport",
                  "stdio"
              ],
              "env": {
                  "FHIR_SERVER_ACCESS_TOKEN": "Your FHIR Access Token"
              }
          }
      }
  }
  ```
  </td>

  <td>

  ```json
  {
      "mcpServers": {
          "fhir": {
              "command": "npx",
              "args": [
                  "-y",
                  "mcp-remote",
                  "http://localhost:8000/sse"
              ]
          }
      }
  }
  ```
  </td>
  </tr>
  </table>

  ### MCP Inspector
  MCP Inspector'ı çalışır hale getirmek için şu adımları izleyin:

  - Bir terminal açın ve aşağıdaki komutu çalıştırın:
      
      `npx -y @modelcontextprotocol/inspector`

  - MCP Inspector arayüzünde:
  <table>
  <tr><th>Streamable HTTP</th><th>STDIO</th><th>SSE</th></tr>
  <tr valign=top>
  <td>

  - Transport Type: `Streamable HTTP`
  - URL: `http://localhost:8000/mcp`
  </td>

  <td>

  - Transport Type: `STDIO`
  - Command: `uv`
  - Arguments: `--directory /path/to/fhir-mcp-server run fhir-mcp-server --transport stdio`
  </td>

  <td>

  - Transport Type: `SSE`
  - URL: `http://localhost:8000/sse`
  </td>
  </tr>
  </table>

  MCP sunucunuzun zaten çalışıyor ve yukarıdaki endpoint'te dinlediğinden emin olun.

  Bağlandıktan sonra, MCP Inspector tool çağrılarını görselleştirmenize, request/response payload'larını incelemenize ve tool uygulamalarınızda kolayca hata ayıklamanıza izin verecektir.

  ## Yapılandırma

  ### CLI Seçenekleri

  MCP sunucusunun davranışını aşağıdaki command-line flag'leri kullanarak özelleştirebilirsiniz:

  - **--transport**
      - Açıklama: MCP sunucusunun istemcilerle iletişim kurmak için kullanması gereken transport protokolünü belirtir.
      - Kabul edilen değerler: stdio, sse, streamable-http
      - Varsayılan: streamable-http

  - **--log-level**
      - Açıklama: Sunucu için logging ayrıntılılık seviyesini ayarlar.
      - Kabul edilen değerler: DEBUG, INFO, WARN, ERROR (büyük/küçük harfe duyarlı değil)
      - Varsayılan: INFO

  - **--help**
      - Açıklama: Mevcut sunucu seçenekleri ile bir yardım mesajı görüntüler ve çıkar.
      - Kullanım: Komut satırı arayüzü tarafından otomatik olarak sağlanır.

  Örnek Kullanımlar:

  ```shell
  uv run fhir-mcp-server --transport streamable-http --log-level DEBUG
  uv run fhir-mcp-server --help
  ```

  ### Ortam Değişkenleri

  **MCP Sunucu Yapılandırması:**
  - `FHIR_MCP_HOST`: MCP sunucusunun bağlanması gereken hostname veya IP adresi (örneğin, yerel erişim için `localhost` veya tüm arayüzler için `0.0.0.0`).
  - `FHIR_MCP_PORT`: MCP sunucusunun gelen istemci talepleri için dinleyeceği port (örneğin, `8000`).
  - `FHIR_MCP_SERVER_URL`: Ayarlanırsa, bu değer host ve port'tan oluşturmak yerine sunucunun temel URL'si olarak kullanılacaktır. Özel URL yapılandırmaları veya proxy arkasında olduğunuz durumlarda kullanışlıdır.
  - `FHIR_MCP_REQUEST_TIMEOUT`: MCP sunucusundan FHIR sunucusuna yönelik isteklerin timeout süresi (saniye cinsinden) (varsayılan: `30`).

  **MCP Sunucu OAuth2 ve FHIR sunucusu Yapılandırması (MCP İstemci ↔ MCP Sunucu):**
  Bu değişkenler, FHIR sunucusu ile OAuth2 authorization code grant akışı kullanan MCP istemcisinin MCP sunucusuna güvenli bağlantısını yapılandırır.

  - `FHIR_SERVER_CLIENT_ID`: MCP istemcilerini FHIR sunucusu ile yetkilendirmek için kullanılan OAuth2 client ID'si.
  - `FHIR_SERVER_DISABLE_AUTHORIZATION`: `True` olarak ayarlanırsa, MCP sunucusundaki yetkilendirme kontrollerini devre dışı bırakır ve herkese açık FHIR sunucularına bağlanmanıza izin verir.
  - `FHIR_SERVER_CLIENT_SECRET`: FHIR client ID'sine karşılık gelen client secret. Token değişimi sırasında kullanılır.
  - `FHIR_SERVER_BASE_URL`: FHIR sunucusunun temel URL'si (örneğin, `https://hapi.fhir.org/baseR4`). Bu, tool URI'lerini oluşturmak ve FHIR isteklerini yönlendirmek için kullanılır.
  - `FHIR_SERVER_SCOPES`: FHIR yetkilendirme sunucusundan istenecek boşluk ile ayrılmış OAuth2 scope'ların listesi (örneğin, `user/Patient.read user/Observation.read`). `get_user` tool'u için kullanıcı bağlamı alınmasını etkinleştirmek için `fhirUser openid` ekleyin. Bu iki scope yapılandırılmamışsa, `get_user` tool'u boş bir sonuç döndürür çünkü ID token'ı kullanıcının FHIR resource referansını içermez.
  - `FHIR_SERVER_ACCESS_TOKEN`: FHIR sunucusu için kimlik doğrulama istekleri için kullanılacak access token. Bu değişken ayarlanırsa, sunucu OAuth2 yetkilendirme akışını atlar ve tüm istekler için bu token'ı doğrudan kullanır.

  ## Araçlar

  - `get_capabilities`: Belirtilen FHIR resource türü hakkında, desteklenen arama parametreleri ve custom operations dahil olmak üzere metadata alır.
      - `type`: FHIR resource türü adı (örneğin, "Patient", "Observation", "Encounter")

  - `search`: Belirtilen resource türü üzerinde standart FHIR search interaction'ını gerçekleştirir ve eşleşen resource'ların bundle'ını veya listesini döndürür.
      - `type`: FHIR resource türü adı (örneğin, "MedicationRequest", "Condition", "Procedure").
      - `searchParam`: FHIR arama parametreleri adlarının istenen değerlerine eşlemesi (örneğin, {"family":"Simpson","birthdate":"1956-05-12"}).

  - `read`: Bir FHIR "read" interaction'ını gerçekleştirir ve belirtilen türün ve resource ID'nin tek bir resource örneğini alır; isteğe bağlı olarak yanıtı arama parametreleri veya custom operations ile iyileştirir.
      - `type`: FHIR resource türü adı (örneğin, "DiagnosticReport", "AllergyIntolerance", "Immunization").
      - `id`: Belirli bir FHIR resource örneğinin logical ID'si.
      - `searchParam`: FHIR arama parametreleri adlarının istenen değerlerine eşlemesi (örneğin, {"device-name":"glucometer"}).
      - `operation`: Resource için tanımlanmış custom FHIR operation veya extended query'nin adı (örneğin, "$everything").

  - `create`: Belirtilen türün yeni resource'sını kalıcı hale getirmek için FHIR "create" interaction'ını gerçekleştirir.
      - `type`: FHIR resource türü adı (örneğin, "Device", "CarePlan", "Goal").
      - `payload`: Oluşturulacak tam FHIR resource body'sini temsil eden JSON nesnesi.
      - `searchParam`: FHIR arama parametreleri adlarının istenen değerlerine eşlemesi (örneğin, {"address-city":"Boston"}).
      - `operation`: Resource için tanımlanmış custom FHIR operation veya extended query'nin adı (örneğin, "$evaluate").

  - `update`: Var olan resource örneğinin içeriğini sağlanan payload ile değiştirerek FHIR "update" interaction'ını gerçekleştirir.
      - `type`: FHIR resource türü adı (örneğin, "Location", "Organization", "Coverage").
      - `id`: Belirli bir FHIR resource örneğinin logical ID'si.
      - `payload`: Tüm gerekli öğeleri ve tüm isteğe bağlı verileri içeren FHIR resource'nun tam JSON temsili.
      - `searchParam`: FHIR arama parametreleri adlarının istenen değerlerine eşlemesi (örneğin, {"patient":"Patient/54321","relationship":"father"}).
      - `operation`: Resource için tanımlanmış custom FHIR operation veya extended query'nin adı (örneğin, "$lastn").

  - `delete`: Belirtilen resource örneğinde FHIR "delete" interaction'ını gerçekleştirir.
      - `type`: FHIR resource türü adı (örneğin, "ServiceRequest", "Appointment", "HealthcareService").
      - `id`: Belirli bir FHIR resource örneğinin logical ID'si.
      - `searchParam`: FHIR arama parametreleri adlarının istenen değerlerine eşlemesi (örneğin, {"category":"laboratory","issued:"2025-05-01"}).
      - `operation`: Resource için tanımlanmış custom FHIR operation veya extended query'nin adı (örneğin, "$expand").

  - `get_user`: Şu anda kimlik doğrulaması yapılmış kullanıcının FHIR resource'sunu (örneğin bağlantılı `Patient` resource'su) alır ve `id`, `name` ve `birthDate` gibi mevcut demografik alanları içeren özlü bir profil döndürür.

  ## Geliştirme ve Test

  ### Geliştirme Bağımlılıklarını Kurma

  Test'leri çalıştırmak ve geliştirmeye katkıda bulunmak için test bağımlılıklarını yükleyin:

  **pip Kullanarak:**
  ```bash
  # Projeyi test bağımlılıkları ile geliştirme modunda yükleyin
  pip install -e '.[test]'

  # Veya requirements dosyasından yükleyin
  pip install -r requirements-dev.txt
  ```

  **uv Kullanarak:**
  ```bash
  # Geliştirme bağımlılıklarını yükleyin
  uv sync --dev
  ```

  ### Testleri Çalıştırma

  Proje, tüm ana işlevselliği kapsayan kapsamlı bir test paketi içerir:

  ```bash
  # Basit test çalıştırıcı
  python run_tests.py

  # Veya doğrudan pytest kullanımı
  PYTHONPATH=src python -m pytest tests/ -v --cov=src/fhir_mcp_server
  ```
  **pytest Kullanarak:**
  ```bash
  pytest tests/
  ```
  Bu, `tests/` dizinindeki tüm testleri keşfedecek ve çalıştıracaktır.


  **Test Özellikleri:**
  - **100+'dan fazla test** kapsamlı kapsama ile
  - **Tam async/await desteği** pytest-asyncio kullanarak
  - **Tam mock'lama** HTTP istekleri ve harici bağımlılıklarının
  - **Kapsama raporlaması** terminal ve HTML çıktısı ile
  - **Hızlı yürütme** gerçek ağ çağrıları
---

# Model Context Protocol (MCP) Server for Fast Healthcare Interoperability Resources (FHIR) APIs

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/wso2/fhir-mcp-server/blob/main/LICENSE)
[![Get Support on Stack Overflow](https://img.shields.io/badge/stackoverflow-wso2-orange)](https://stackoverflow.com/questions/tagged/wso2)
[![Join the community on Discord](https://img.shields.io/badge/Join%20us%20on-Discord-%23e01563.svg)](https://discord.com/invite/wso2)
[![X](https://img.shields.io/twitter/follow/wso2.svg?style=social&label=Follow)](https://twitter.com/intent/follow?screen_name=wso2)
[![Listed on Spark](https://spark.entire.vc/badges/listed.svg)](https://spark.entire.vc/assets/vb-fhir?utm_source=github&utm_medium=readme)
[![Install via Spark](https://spark.entire.vc/badges/vb-fhir/install.svg)](https://spark.entire.vc/assets/vb-fhir?utm_source=github&utm_medium=readme)

## Table of Contents
- [Model Context Protocol (MCP) Server for Fast Healthcare Interoperability Resources (FHIR) APIs](#model-context-protocol-mcp-server-for-fast-healthcare-interoperability-resources-fhir-apis)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Demo](#demo)
    - [Demo with HAPI FHIR server](#demo-with-hapi-fhir-server)
    - [Demo with EPIC Sandbox](#demo-with-epic-sandbox)
  - [Core Features](#core-features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [Installing using PyPI Package](#installing-using-pypi-package)
    - [Installing from Source](#installing-from-source)
    - [Installing using Docker](#installing-using-docker)
        - [Running the MCP Server with Docker](#running-the-mcp-server-with-docker)
        - [Using Docker Compose with HAPI FHIR Server](#using-docker-compose-with-hapi-fhir-server)
  - [Integration with MCP Clients](#integration-with-mcp-clients)
    - [VS Code](#vs-code)
    - [Claude Desktop](#claude-desktop)
    - [MCP Inspector](#mcp-inspector)
  - [Configuration](#configuration)
    - [CLI Options](#cli-options)
    - [Environment Variables](#environment-variables)
  - [Tools](#tools)
  - [Development \& Testing](#development--testing)
    - [Installing Development Dependencies](#installing-development-dependencies)
    - [Running Tests](#running-tests)


## Overview

The FHIR MCP Server is a Model Context Protocol (MCP) server that provides seamless integration with FHIR APIs. Designed for developers, integrators, and healthcare innovators, this server acts as a bridge between modern AI/LLM tools and healthcare data, making it easy to search, retrieve, and analyze clinical information.

## Demo

### Demo with HAPI FHIR server

This video showcases the MCP server's functionality when connected to a public [HAPI FHIR server](https://hapi.fhir.org/). This example showcases direct interaction with an open FHIR server that does not require an authorization flow.

https://github.com/user-attachments/assets/cc6ac87e-8329-4da4-a090-2d76564a3abf

### Demo with EPIC Sandbox

This video showcases the MCP server's capabilities within the [Epic EHR ecosystem](https://open.epic.com/). It demonstrates the complete OAuth 2.0 Authorization Code Grant flow.

https://github.com/user-attachments/assets/96b433f1-3e53-4564-8466-65ab48d521de

## Core Features

- **MCP-compatible transport**: Serves FHIR via stdio, SSE, or streamable HTTP

- **SMART-on-FHIR based authentication support**: Securely authenticate with FHIR servers and clients

- **Tool integration**: Integratable with any MCP client such as VS Code, Claude Desktop, and MCP Inspector

## Prerequisites

- Python 3.8+
- [uv](https://github.com/astral-sh/uv) (for dependency management)
- An accessible FHIR API server.

## Installation

You can use the FHIR MCP Server by installing our Python package, or by cloning this repository.

### Installing using PyPI Package

1. **Configure Environment Variables:**
    
    To run the server, you must set `FHIR_SERVER_BASE_URL`.

    * **To enable authorization:** Set `FHIR_SERVER_BASE_URL`, `FHIR_SERVER_CLIENT_ID`, `FHIR_SERVER_CLIENT_SECRET`, and `FHIR_SERVER_SCOPES`. Authorization is enabled by default.
    * **To disable authorization:** Set `FHIR_SERVER_DISABLE_AUTHORIZATION` to `True`.

    By default, the MCP server runs on **[http://localhost:8000](http://localhost:8000)**, and you can customize the host and port using `FHIR_MCP_HOST` and `FHIR_MCP_PORT`.


    You can set these by exporting them as environment variables like below or by creating a `.env` file (referencing `.env.example`).

    ```bash 
    export FHIR_SERVER_BASE_URL=""
    export FHIR_SERVER_CLIENT_ID=""
    export FHIR_SERVER_CLIENT_SECRET=""
    export FHIR_SERVER_SCOPES=""

    export FHIR_MCP_HOST="localhost"
    export FHIR_MCP_PORT="8000"
    ```

2. **Install the PyPI package and run the server**

    ```bash
    uvx fhir-mcp-server
    ```

### Installing from Source

1. **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2. **Create a virtual environment and install dependencies:**
    ```bash
    uv venv
    source .venv/bin/activate
    uv pip sync requirements.txt
    ```
    Or with pip:
    ```bash
    python -m venv .venv
    source .venv/bin/activate
    pip install -r requirements.txt
    ```

3. **Configure Environment Variables:**
    Copy the example file and customize if needed:
    ```bash
    cp .env.example .env
    ```

4. **Run the server:**
    ```bash
    uv run fhir-mcp-server
    ```

### Installing using Docker

#### Running the MCP Server with Docker

You can run the MCP server using Docker for a consistent, isolated environment. 

>Note on **Authorization**: When running the MCP server **locally** via Docker or Docker Compose, authorization should be disabled by setting the environment variable, `FHIR_SERVER_DISABLE_AUTHORIZATION=True` . This would be fixed in the future releases.

1. Build the Docker Image or pull the docker image from the container registry:

    * Build from source:
        ```bash
        docker build -t fhir-mcp-server .
        ```
    * Pull from GitHub Container Registry:
        ```bash
        docker pull wso2/fhir-mcp-server:latest
        ```

2. Configure Environment Variables

    Copy the example environment file and edit as needed:

    ```bash
    cp .env.example .env
    # Edit .env to set your FHIR server, client credentials, etc.
    ```

    Alternatively, you can pass environment variables directly with `-e` flags or use Docker secrets for sensitive values. See the [Configuration](#configuration) section for details on available environment variables.

3. Run the Container

    ```bash
    docker run --env-file .env -p 8000:8000 fhir-mcp-server
    ```

    This will start the server and expose it on port 8000. Adjust the port mapping as needed.

#### Using Docker Compose with HAPI FHIR Server

For a quick setup that includes both the FHIR MCP server and a HAPI FHIR server (with PostgreSQL), use the provided `docker-compose.yml`. This sets up an instant development environment for testing FHIR operations.

1. **Prerequisites:**
   - Docker and Docker Compose installed.

2. **Run the Stack:**

   ```bash
   docker-compose up -d
   ```

   This command will:
   - Start a PostgreSQL database container.
   - Launch the HAPI FHIR server (connected to PostgreSQL) listening on http://localhost:8080.
   - Build and run the FHIR MCP server container listening on http://localhost:8000, with `FHIR_SERVER_BASE_URL` set to http://hapi-r4-postgresql:8080/fhir.

3. **Access the Services:**
   - FHIR MCP Server: http://localhost:8000
   - HAPI FHIR Server: http://localhost:8080
   - To stop run `docker-compose down`.

4. **Configure Additional Environment Variables:**

   If you need to customize OAuth or other settings, adjust the env variables in the `docker-compose.yml`. The compose file sets basic configuration; refer to the [Configuration](#configuration) section for full options.

## Integration with MCP Clients

The FHIR MCP Server is designed for seamless integration with various MCP clients.

### VS Code

[![Install in VS Code](https://img.shields.io/badge/VS_Code-Install_Server-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=fhir&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A8000%2Fmcp%2F%22%7D)
[![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-Install_Server-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=fhir&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A8000%2Fmcp%2F%22%7D)

Add the following JSON block to your MCP configuration file in VS Code (> V1.104). You can do this by pressing Ctrl + Shift + P and typing `MCP: Open User Configuration`.

<table>
<tr><th>Streamable HTTP</th><th>STDIO</th><th>SSE</th></tr>
<tr valign=top>
<td>

```json
"servers": {
    "fhir": {
        "type": "http",
        "url": "http://localhost:8000/mcp",
    }
}
```
</td>

<td>

```json
"servers": {
    "fhir": {
        "command": "uv",
        "args": [
            "--directory",
            "/path/to/fhir-mcp-server",
            "run",
            "fhir-mcp-server",
            "--transport",
            "stdio"
        ],
        "env": {
            "FHIR_SERVER_ACCESS_TOKEN": "Your FHIR Access Token"
        }
    }
}
```
</td>

<td>

```json
"servers": {
    "fhir": {
        "type": "sse",
        "url": "http://localhost:8000/sse",
    }
}
```
</td>
</tr>
</table>

### Claude Desktop
Add the following JSON block to your Claude Desktop settings to connect to your local MCP server. 
 - Launch the Claude Desktop app, click on the Claude menu in the top bar, and select "Settings…".
 - In the Settings pane, click “Developer” in the left sidebar. Then click "Edit Config". This will open your configuration file in your file system. If it doesn’t exist yet, Claude will create one automatically at:
    - macOS: ~/Library/Application Support/Claude/claude_desktop_config.json
    - Windows: %APPDATA%\Claude\claude_desktop_config.json
 - Open the claude_desktop_config.json file in any text editor. Replace its contents with the following JSON block to register the MCP server:

<table>
<tr><th>Streamable HTTP</th><th>STDIO</th><th>SSE</th></tr>
<tr valign=top>
<td>

```json
{
    "mcpServers": {
        "fhir": {
            "command": "npx",
            "args": [
                "-y",
                "mcp-remote",
                "http://localhost:8000/mcp"
            ]
        }
    }
}
```
</td>
<td>

```json
{
    "mcpServers": {
        "fhir": {
            "command": "uv",
            "args": [
                "--directory",
                "/path/to/fhir-mcp-server",
                "run",
                "fhir-mcp-server",
                "--transport",
                "stdio"
            ],
            "env": {
                "FHIR_SERVER_ACCESS_TOKEN": "Your FHIR Access Token"
            }
        }
    }
}
```
</td>

<td>

```json
{
    "mcpServers": {
        "fhir": {
            "command": "npx",
            "args": [
                "-y",
                "mcp-remote",
                "http://localhost:8000/sse"
            ]
        }
    }
}
```
</td>
</tr>
</table>

### MCP Inspector
Follow these steps to get the MCP Inspector up and running:

- Open a terminal and run the following command:
    
    `npx -y @modelcontextprotocol/inspector`

- In the MCP Inspector interface:
<table>
<tr><th>Streamable HTTP</th><th>STDIO</th><th>SSE</th></tr>
<tr valign=top>
<td>

- Transport Type: `Streamable HTTP`
- URL: `http://localhost:8000/mcp`
</td>

<td>

- Transport Type: `STDIO`
- Command: `uv`
- Arguments: `--directory /path/to/fhir-mcp-server run fhir-mcp-server --transport stdio`
</td>

<td>

- Transport Type: `SSE`
- URL: `http://localhost:8000/sse`
</td>
</tr>
</table>

Make sure your MCP server is already running and listening on the above endpoint.

Once connected, MCP Inspector will allow you to visualize tool invocations, inspect request/response payloads, and debug your tool implementations easily.

## Configuration

### CLI Options

You can customize the behavior of the MCP server using the following command-line flags:

- **--transport**
    - Description: Specifies the transport protocol used by the MCP server to communicate with clients.
    - Accepted values: stdio, sse, streamable-http
    - Default: streamable-http

- **--log-level**
    - Description: Sets the logging verbosity level for the server.
    - Accepted values: DEBUG, INFO, WARN, ERROR (case-insensitive)
    - Default: INFO

- **--help**
    - Description: Displays a help message with available server options and exits.
    - Usage: Automatically provided by the command-line interface.

Sample Usages:

```shell
uv run fhir-mcp-server --transport streamable-http --log-level DEBUG
uv run fhir-mcp-server --help
```

### Environment Variables

**MCP Server Configurations:**
- `FHIR_MCP_HOST`: The hostname or IP address the MCP server should bind to (e.g., `localhost` for local-only access, or `0.0.0.0` for all interfaces).
- `FHIR_MCP_PORT`: The port on which the MCP server will listen for incoming client requests (e.g., `8000`).
- `FHIR_MCP_SERVER_URL`: If set, this value will be used as the server's base URL instead of generating it from host and port. Useful for custom URL configurations or when behind a proxy.
- `FHIR_MCP_REQUEST_TIMEOUT`: Timeout duration in seconds for requests from the MCP server to the FHIR server (default: `30`).

**MCP Server OAuth2 with FHIR server Configuration (MCP Client ↔ MCP Server):**
These variables configure the MCP client's secure connection to the MCP server, using the OAuth2 authorization code grant flow with a FHIR server.

- `FHIR_SERVER_CLIENT_ID`: The OAuth2 client ID used to authorize MCP clients with the FHIR server.
- `FHIR_SERVER_DISABLE_AUTHORIZATION`: If set to `True`, disables authorization checks on the MCP server, allowing connections to publicly accessible FHIR servers.
- `FHIR_SERVER_CLIENT_SECRET`: The client secret corresponding to the FHIR client ID. Used during token exchange.
- `FHIR_SERVER_BASE_URL`: The base URL of the FHIR server (e.g., `https://hapi.fhir.org/baseR4`). This is used to generate tool URIs and to route FHIR requests.
- `FHIR_SERVER_SCOPES`: A space-separated list of OAuth2 scopes to request from the FHIR authorization server (e.g., `user/Patient.read user/Observation.read`). Add `fhirUser openid` to enable retrieval of user context for the `get_user` tool. If these two scopes are not configured, the `get_user` tool returns an empty result because the ID token lacks the user's FHIR resource reference.
- `FHIR_SERVER_ACCESS_TOKEN`: The access token to use for authenticating requests to the FHIR server. If this variable is set, the server will bypass the OAuth2 authorization flow and use this token directly for all requests.

## Tools

- `get_capabilities`: Retrieves metadata about a specified FHIR resource type, including its supported search parameters and custom operations.
    - `type`: The FHIR resource type name (e.g., "Patient", "Observation", "Encounter")

- `search`: Executes a standard FHIR search interaction on a given resource type, returning a bundle or list of matching resources.
    - `type`: The FHIR resource type name (e.g., "MedicationRequest", "Condition", "Procedure").
    - `searchParam`: A mapping of FHIR search parameter names to their desired values (e.g., {"family":"Simpson","birthdate":"1956-05-12"}).

- `read`: Performs a FHIR "read" interaction to retrieve a single resource instance by its type and resource ID, optionally refining the response with search parameters or custom operations.
    - `type`: The FHIR resource type name (e.g., "DiagnosticReport", "AllergyIntolerance", "Immunization").
    - `id`: The logical ID of a specific FHIR resource instance.
    - `searchParam`: A mapping of FHIR search parameter names to their desired values (e.g., {"device-name":"glucometer"}).
    - `operation`: The name of a custom FHIR operation or extended query defined for the resource (e.g., "$everything").

- `create`: Executes a FHIR "create" interaction to persist a new resource of the specified type.
    - `type`: The FHIR resource type name (e.g., "Device", "CarePlan", "Goal").
    - `payload`: A JSON object representing the full FHIR resource body to be created.
    - `searchParam`: A mapping of FHIR search parameter names to their desired values (e.g., {"address-city":"Boston"}).
    - `operation`: The name of a custom FHIR operation or extended query defined for the resource (e.g., "$evaluate").

- `update`: Performs a FHIR "update" interaction by replacing an existing resource instance's content with the provided payload.
    - `type`: The FHIR resource type name (e.g., "Location", "Organization", "Coverage").
    - `id`: The logical ID of a specific FHIR resource instance.
    - `payload`: The complete JSON representation of the FHIR resource, containing all required elements and any optional data.
    - `searchParam`: A mapping of FHIR search parameter names to their desired values (e.g., {"patient":"Patient/54321","relationship":"father"}).
    - `operation`: The name of a custom FHIR operation or extended query defined for the resource (e.g., "$lastn").

- `delete`: Execute a FHIR "delete" interaction on a specific resource instance.
    - `type`: The FHIR resource type name (e.g., "ServiceRequest", "Appointment", "HealthcareService").
    - `id`: The logical ID of a specific FHIR resource instance.
    - `searchParam`: A mapping of FHIR search parameter names to their desired values (e.g., {"category":"laboratory","issued:"2025-05-01"}).
    - `operation`: The name of a custom FHIR operation or extended query defined for the resource (e.g., "$expand").

- `get_user`: Retrieves the currently authenticated user's FHIR resource (for example the linked `Patient` resource) and returns a concise profile containing available demographic fields such as `id`, `name`, and `birthDate`.

## Development & Testing

### Installing Development Dependencies

To run tests and contribute to development, install the test dependencies:

**Using pip:**
```bash
# Install project in development mode with test dependencies
pip install -e '.[test]'

# Or install from requirements file
pip install -r requirements-dev.txt
```

**Using uv:**
```bash
# Install development dependencies
uv sync --dev
```

### Running Tests

The project includes a comprehensive test suite covering all major functionality:

```bash
# Simple test runner
python run_tests.py

# Or direct pytest usage
PYTHONPATH=src python -m pytest tests/ -v --cov=src/fhir_mcp_server
```
**Using pytest:**
```bash
pytest tests/
```
This will discover and run all tests in the `tests/` directory.


**Test Features:**
- **100+ tests** with comprehensive coverage
- **Full async/await support** using pytest-asyncio
- **Complete mocking** of HTTP requests and external dependencies
- **Coverage reporting** with terminal and HTML output
- **Fast execution** with no real network calls

The test suite includes:
- **Unit tests**: Core functionality testing
- **Integration tests**: Component interaction validation
- **Edge case coverage**: Error handling and validation scenarios
- **Mocked OAuth flows**: Realistic authentication testing

Coverage reports are generated in `htmlcov/index.html` for detailed analysis.

<!-- mcp-name: io.github.wso2/fhir-mcp-server -->
