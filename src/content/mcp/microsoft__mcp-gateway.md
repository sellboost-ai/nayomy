---
name: "microsoft/mcp-gateway"
description: "A reverse proxy and management layer for MCP servers, enabling scalable, session-aware routing and lifecycle management in Kubernetes environments."
category: "Aggregators"
repo: "microsoft/mcp-gateway"
stars: 651
url: "https://github.com/microsoft/mcp-gateway"
body_length: 29855
license: "MIT"
language: "C#"
homepage: "https://microsoft.github.io/mcp-gateway/"
body_tr: |-
  # MCP Gateway

  **MCP Gateway**, [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) sunucuları için bir ters proxy ve yönetim katmanıdır. Kubernetes ortamlarında MCP sunucularının ölçeklenebilir, oturum farkında yönlendirme, yetkilendirme ve yaşam döngüsü yönetimini sağlar.

  ## İçindekiler

  - [Genel Bakış](#genel-bakış)
  - [Temel Kavramlar](#temel-kavramlar)
  - [Mimari](#mimari)
  - [Özellikler](#özellikler)
  - [Başlarken – Yerel Dağıtım](#başlarken---yerel-dağıtım)
  - [Başlarken – Azure'ye Tek Tıkla Dağıt](#başlarken---azure'ye-tek-tıkla-dağıt)

  ## Genel Bakış

  Bu proje aşağıdakileri sağlar:

  - MCP sunucularına oturum affinitesiyle trafik yönlendirmek için bir veri ağ geçidi.
  - MCP sunucusu yaşam döngüsünü (dağıt, güncelle, sil) yönetmek için bir kontrol düzlemi.
  - Telemetri, erişim kontrolü ve gözlemlenebilirlik dahil olmak üzere kurumsal düzeyde entegrasyon noktaları.

  ## Temel Kavramlar

  - **MCP Sunucusu**: Model Context Protocol'ü uygulayan bir sunucu; tipik olarak akışlanabilir bir HTTP endpoint'idir.
  - **Adaptörler**: Ağ geçidinde MCP sunucularını temsil eden ve `/adapters` kapsamı altında yönetilen mantıksal kaynaklar. Birleşik bir AI geliştirme platformunda diğer kaynak türleriyle (örn. `/agents`) bir arada bulunmak için tasarlanmıştır.
  - **Araçlar**: MCP araç tanımlarıyla kaydedilen ve araç ağ geçidi yönlendiricisi aracılığıyla dinamik olarak yönlendirilebilen kaynaklar. Her araç, yürütme endpoint'i ve giriş şeması hakkında meta veriler içerir.
  - **Araç Ağ Geçidi Yönlendiricisi**: Akıllı bir yönlendirici olarak çalışan ve araç tanımlarına göre araç yürütme isteklerini uygun kayıtlı araç sunucularına yönlendiren bir MCP sunucusu. Oturum affinitesi için ağ geçidinin arkasında birden çok yönlendirici örneği çalışabilir.
  - **Oturum Farkında Durumsal Yönlendirme**: Belirli bir `session_id` ile tüm isteklerin aynı MCP sunucusu örneğine tutarlı bir şekilde yönlendirilmesini sağlar.
  - **Aracılar ve Oturumlar (Ön İzleme)**: Kayıtlı MCP araçlarının üstünde LLM tabanlı aracıları çalıştırmak için isteğe bağlı, opt-in kaynakları. *Aracılar* meta verilerdir (sistem istemi + model + izin verilen araç listesi); *Oturumlar* Server-Sent Events üzerinden olayları akışlayan bireysel çalıştırmalardır. `FoundrySettings:Endpoint` yapılandırılmadığı sürece devre dışıdır.

  ## Mimari

  ```mermaid
  flowchart LR
      subgraph Clients[" "]
          direction TB
          DataClient["🔌 Agent/MCP<br>Data Client"]
          MgmtClient["⚙️ Management<br>Client"]
      end

      subgraph Gateway["MCP Gateway"]
          direction TB
          
          subgraph Auth1["Authentication & Authorization"]
              Auth["🔐 Data Plane Auth<br>Bearer Token / RBAC"]
              Auth2["🔐 Control Plane Auth<br>Bearer Token / RBAC"]
          end
          
          subgraph DataPlane["Data Plane"]
              Routing["🔀 Adapter Routing<br>/adapters/{name}/mcp"]
              ToolRouting["🔀 Tool Router Gateway<br>/mcp"]
          end

          subgraph ControlPlane["Control Plane"]
              direction LR
              AdapterMgmt["📦 Adapter Management<br>/adapters CRUD"]
              ToolMgmt["🔧 Tool Management<br>/tools CRUD"]
          end
          
          subgraph Management["Backend Services"]
              DeploymentMgmt["☸️ Deployment Manager"]
              MetadataMgmt["📋 Metadata Manager"]
          end
      end

      subgraph Cluster["Kubernetes Cluster"]
          direction TB
          
          subgraph ServerRow[" "]
              direction LR
              
              subgraph MCPServers["MCP Servers"]
                  direction TB
                  PodA["mcp-a-0"]
                  PodA1["mcp-a-1"]
                  PodB["mcp-b-0"]
              end
              
              subgraph ToolRouters["Tool Gateway Routers"]
                  direction TB
                  Router1["toolgateway-0"]
                  Router2["toolgateway-1"]
              end
          end
          
          subgraph ToolServers["Registered Tool Servers"]
              direction LR
              Tool1["tool-1-0"]
              Tool2["tool-2-0"]
          end
      end

      Metadata[("💾 Metadata Store<br>Server & Tool Info")]

      DataClient -->|"MCP Requests"| Auth
      MgmtClient -->|"API Calls"| Auth2
      
      Auth --> Routing
      Auth --> ToolRouting
      Auth2 --> AdapterMgmt
      Auth2 --> ToolMgmt
      
      AdapterMgmt & ToolMgmt --> DeploymentMgmt
      AdapterMgmt & ToolMgmt --> MetadataMgmt
      
      Routing -.->|"Session Affinity"| MCPServers
      ToolRouting -.->|"Session Affinity"| ToolRouters
      ToolRouters ==>|"Dynamic Routing"| ToolServers
      
      DeploymentMgmt -->|"Deploy & Monitor"| Cluster
      MetadataMgmt <-->|"Read/Write"| Metadata

      style Gateway fill:#e1f5ff
      style Cluster fill:#fff4e1
      style Metadata fill:#f0f0f0
  ```

  ## Özellikler

  ### Kontrol Düzlemi – MCP Sunucusu Yönetimi için RESTful API'ları

  #### MCP Sunucusu Yönetimi (Adaptörler)

  - `POST /adapters` — Yeni bir MCP sunucusu dağıt ve kaydet.
  - `GET /adapters` — Kullanıcının erişebildiği tüm MCP sunucularını listele.
  - `GET /adapters/{name}` — Belirli bir adaptörün meta verilerini al.
  - `GET /adapters/{name}/status` — Dağıtım durumunu kontrol et.
  - `GET /adapters/{name}/logs` — Sunucunun çalışan günlüklerine erişebil.
  - `PUT /adapters/{name}` — Dağıtımı güncelle.
  - `DELETE /adapters/{name}` — Sunucuyu kaldır.

  #### Araç Kaydı ve Yönetimi

  - `POST /tools` — MCP araç tanımı meta verileriyle bir araç kaydet ve dağıt.
  - `GET /tools` — Kullanıcının erişebildiği tüm kayıtlı araçları listele.
  - `GET /tools/{name}` — Belirli bir araçın meta verilerini ve araç tanımını al.
  - `GET /tools/{name}/status` — Araç dağıtım durumunu kontrol et.
  - `GET /tools/{name}/logs` — Araç sunucusunun çalışan günlüklerine erişebil.
  - `PUT /tools/{name}` — Bir araç dağıtımını ve tanımını güncelle.
  - `DELETE /tools/{name}` — Kayıtlı bir araç kaldır.

  #### Aracı ve Oturum Yönetimi (Ön İzleme, opt-in)

  Yalnızca `FoundrySettings:Endpoint` yapılandırılırken kullanılabilir. Ayrıntılar için aşağıdaki [Aracılar ve Oturumlar](#aracılar-ve-oturumlar-ön-izleme) bölümüne bakınız.

  - `POST /agents`, `GET /agents`, `GET|PUT|DELETE /agents/{name}` — Aracı tanımları için CRUD işlemleri.
  - `POST /sessions`, `GET /sessions`, `GET|DELETE /sessions/{id}` — Oturumlar için CRUD işlemleri.
  - `POST /sessions/run` — Bir oturum başlat ve olayları akışla (SSE).
  - `POST /sessions/{id}/messages` — Mevcut bir oturumu yeni bir kullanıcı mesajıyla devam ettir; olayları akışla (SSE).

  ### Veri Düzlemi – MCP Sunucuları için Ağ Geçidi Yönlendirmesi

  #### Doğrudan MCP Sunucusu Erişimi

  - `POST /adapters/{name}/mcp` — Akışlanabilir bir HTTP bağlantısı kur.

  #### Araç Ağ Geçidi Yönlendiricisi Aracılığıyla Dinamik Araç Yönlendirmesi

  - `POST /mcp` — Istekleri araç ağ geçidi yönlendiricisine yönlendir; bu yönlendirici araç tanımlarına göre istekleri kayıtlı araçlara dinamik olarak yönlendirir. Yönlendirici kendisi ölçeklenebilirlik için ağ geçidinin arkasında çalışan birden çok örneğe sahip bir MCP sunucusudur.

  ### Kimlik Doğrulama ve Yetkilendirme Desteği

  Ağ geçidi, MCP sunucuları ve araçları için Entra ID kimlik doğrulaması ve temel uygulama rolü yetkilendirmesi sağlar:

  - **Okuma** erişimi, kaynağın oluşturucusuna, yapılandırılmış `requiredRoles` değerleri atanmış müdürlere (örneğin `mcp.engineer`) ve zorunlu yönetici rolü `mcp.admin` sahibi herkese verilir. `requiredRoles` boş veya belirtilmediğinde, yalnızca oluşturucu ve `mcp.admin` müdürleri kaynağı okuyabilir.
  - **Yazma** erişimi kaynağın oluşturucusuyla veya `mcp.admin` rolüne sahip müdürlerle sınırlıdır.

  Azure Entra ID'i yapılandırmak (`mcp.admin` ve diğer rol değerleri oluşturmak, bunları kullanıcılara veya hizmet müdürlerine atamak ve bu değerleri adaptör/araç payload'larında sağlamak) için adım adım yardım için bkz. [docs/entra-app-roles.md](docs/entra-app-roles.md).

  ### Ek Yetenekler

  - **Yerel ve Uzak MCP Sunucularının Proxy'lenmesi** için destek. Bkz. [örnekler ve kullanım](sample-servers/mcp-proxy/README.md).
  - Dağıtılmış bir oturum deposu olan durumsuz ters proxy (üretim modu).
  - StatefulSets ve headless hizmetleri kullanarak Kubernetes-native dağıtım.

  ### Araç Kaydı ve Dinamik Yönlendirme

  MCP Gateway artık MCP araçlarını yönetmek ve yürütmek için ölçeklenebilir bir mimari sağlayan **araç kaydı** ve dinamik yönlendirme yeteneklerini desteklemektedir.

  ### Nasıl Çalışır

  1. **Araç Kaydı**: Geliştiriciler `/tools` API endpoint'i aracılığıyla araçları kaydeder:
     - Container görüntüsü detayları (ad ve sürüm)
     - MCP araç tanımı (ad, açıklama, giriş şeması)
     - Yürütme endpoint'i yapılandırması (port ve yol)
     - Dağıtım yapılandırması (replikalar, ortam değişkenleri)

  2. **Araç Ağ Geçidi Yönlendiricisi**: Akıllı bir yönlendirici olarak çalışan bir uzman MCP sunucusu:
     - Yüksek kullanılabilirlik için ağ geçidinin arkasında birden çok örnek olarak çalışır
     - Tüm kayıtlı araçlar ve tanımlarının farkındadır
     - Araç yürütme isteklerini uygun araç sunucusuna dinamik olarak yönlendirir
     - `POST /mcp` endpoint'i aracılığıyla erişilir (adaptör adı olmadan)

  3. **Dinamik Yönlendirme**: İstemciler `/mcp`'ye MCP istekleri gönderdiğinde:
     - Ağ geçidi istekleri oturum affinitesiyle kullanılabilir araç ağ geçidi yönlendirici örneklerine yönlendirir
     - Yönlendirici istekteki araç çağrısını analiz eder
     - Araç tanımına göre, yürütmeyi doğru kayıtlı araç sunucusuna iletir
     - Sonuçlar yönlendirici aracılığıyla istemciye döndürülür

  ### Aracılar ve Oturumlar (Ön İzleme)

  > **Ön İzleme / tek-replika.** Bu alt sistem opt-in olup değerlendirme ve tek-pod dağıtımları için tasarlanmıştır. Yerleşik araçlar ağ geçidi pod'u içinde işlem içinde yürütülür ve oturum başına durum (çalışma dizini, disk-kota sayaçları) o pod'a yereldir. Bir şandal sandbox ve paylaşılan oturum depolaması eklemeden bu özelliği çoklu replika veya çoklu kiracılı üretim dağıtımında etkinleştirmeyin.

  Ağ geçidi isteğe bağlı olarak kayıtlı MCP araçlarını ve küçük bir yerleşik araç kümesini (`builtin:bash`, `builtin:read_file`, `builtin:write_file`) çağıran LLM tabanlı *aracıları* çalıştırabilir. Aracı CRUD endpoint'leri (`/agents`, `/sessions` GET/DELETE/LIST) her zaman kullanılabilir, ancak **oturum yürütmesini akışla** (`POST /sessions/run`, `POST /sessions/{id}/messages`) yalnızca `FoundrySettings:Endpoint` yapılandırıldığında etkinleştirilir. Olmadan, bir akışlama isteği Foundry'nin yapılandırılması gerektiğini söyleyen bir `error` SSE olayıyla hızlı bir şekilde başarısız olur.

  #### Etkinleştirme

  `appsettings.json`'e (veya ortam değişkenleri aracılığıyla) bir `FoundrySettings` bölümü ekleyin:

  ```json
  {
    "FoundrySettings": {
      "Endpoint": "https://<your-resource>.cognitiveservices.azure.com/",
      "DeploymentName": "gpt-4o"
    }
  }
  ```

  Kimlik doğrulama `DefaultAzureCredential` kullanır; ağ geçidinin kimliğine (AKS'deki yönetilen kimlik veya `az login` aracılığıyla yerel kullanıcı) hedef kaynakta *Cognitive Services User* rolünü verin. Araç yayınlayan modeller boş olmayan bir `tools` dizisine sahip herhangi bir aracı için gereklidir — `gpt-4o`-sınıfı dağıtımlar önerilir.

  #### Bir aracı tanımlama

  ```http
  POST /agents
  Authorization: Bearer <token>
  Content-Type: application/json
  ```
  ```json
  {
    "name": "weather-helper",
    "model": "gpt-4o",
    "system": "You answer weather questions concisely.",
    "tools": ["mcp:weather"],
    "description": "Demo agent backed by the weather MCP tool."
  }
  ```

  `tools` girişleri ön ek tarafından ad alanlandırılır:
  - `mcp:<tool-name>` — `/tools` aracılığıyla kayıtlı bir araçla yönlendir.
  - `agent:<agent-name>` — başka bir aracıya delege et (alt aracı / Task deseni).
  - `builtin:bash`, `builtin:read_file`, `builtin:write_file` — işlem içi yerleşikler (aşağıda *Yerleşik araçlar ve sınırlamalar*'a bakınız).

  Başvurulan `mcp:` ve `agent:` kaynakları aracı oluştur/güncelle zamanında doğrulanır: oluşturucu bu kaynakları doğrudan çağıramadığından kaynak mevcut değilse veya arayanın okuma erişimi yoksa çağrı başarısız olur.

  #### Bir oturum çalıştırma

  ```http
  POST /sessions/run
  Authorization: Bearer <token>
  Content-Type: application/json
  Accept: text/event-stream
  ```
  ```json
  { "agentName": "weather-helper", "input": "What's the weather in Seattle?" }
  ```

  Yanıt Server-Sent Events akışıdır; her olay `event: <type>\ndata: <json>\n\n`'dir. Olay türleri `Started`, `ToolCallStarted`, `ToolCallCompleted`, `TokenDelta`, `Completed` ve `Failed` olabilir.

  Mevcut bir oturumu sonraki bir mesajla devam ettirmek için:

  ```http
  POST /sessions/{id}/messages
  Content-Type: application/json

  { "input": "And in Portland?" }
  ```

  #### Yerleşik araçlar ve sınırlamalar

  Bir aracı `builtin:bash` / `builtin:read_file` / `builtin:write_file`'ı `tools` içinde listelemişse, bu yerleşikler **ağ geçidi pod'u içinde** bir oturum başına çalışma dizini altında çalışır. Korunurlar:

  - Açıkça tehlikeli kabuk operasyonları (`sudo`, ağ çıkışı, bağlamalar, paket yöneticileri, vb.) için bir regex yasaklama listesi. Bu *derinlemesinde savunmadır*, bir sandbox değildir.
  - 30s varsayılan / 120s maksimum bash zaman aşımı; akış başına 16 KiB çıkış sınırı; 256 KiB maksimum dosya boyutu; oturum başına 4 MiB toplam yazma.
  - Yol çözümlemesi mutlak yolları ve `..` geçişini reddeder.

  Çoklu kiracı veya üretim kullanımı için, bunları gerçek bir oturum başına sandbox (örn. ephemeral pod, gVisor, firejail) ile değiştirin — `BuiltinToolExecutor.cs`'deki satır içi yorumlara bakınız.

  ## Başlarken - Yerel Dağıtım

  ### 1. Yerel Geliştirme Ortamını Hazırla
  - [.NET 8 SDK'yı kur](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
  - [Docker Desktop'ı kur](https://docs.docker.com/desktop/)
  - [Kubernetes'i kur ve aç](https://docs.docker.com/desktop/features/kubernetes/#install-and-turn-on-kubernetes)

  ### 2. Yerel Docker Kayıt Defterini Çalıştır
     ```sh
     docker run -d -p 5000:5000 --name registry registry:2.7
     ```

  ### 3. MCP Sunucusu Görüntülerini Derle ve Yayınla
  MCP sunucusu görüntülerini yerel kayıt defterinize (`localhost:5000`) derle ve push'la.
  ```sh
  docker build -f sample-servers/mcp-example/Dockerfile sample-servers/mcp-example -t localhost:5000/mcp-example:1.0.0
  docker push localhost:5000/mcp-example:1.0.0
  ```

  ### 4. MCP Gateway ve Araç Ağ Geçidi Yönlendiricisini Derle ve Yayınla
  (İsteğe bağlı) Visual Studio ile `dotnet/Microsoft.McpGateway.sln`'i aç.

  MCP Gateway görüntüsünü yayınla:
  ```sh
  dotnet publish dotnet/Microsoft.McpGateway.Service/src/Microsoft.McpGateway.Service.csproj -c Release /p:PublishProfile=localhost_5000.pubxml
  ```

  Araç Ağ Geçidi Yönlendiricisi görüntüsünü yayınla:
  ```sh
  dotnet publish dotnet/Microsoft.McpGateway.Tools/src/Microsoft.McpGateway.Tools.csproj -c Release /p:PublishProfile=localhost_5000.pubxml
  ```

  ### 5. MCP Gateway'i Kubernetes Kümesine Dağıt
  Dağıtım manifestlerini uygula:
  ```sh
  kubectl apply -f deployment/k8s/local-deployment.yml
  ```

  ### 6. Port İletimini Etkinleştir
  Ağ geçidi hizmet portunu ilet:
  ```sh
  kubectl port-forward -n adapter svc/mcpgateway-service 8000:8000
  ```

  ### 7. API'yi Test Et - MCP Sunucusu Yönetimi
  - OpenAPI tanımını `openapi/mcp-gateway.openapi.json`'den [Postman](https://www.postman.com/), [Bruno](https://www.usebruno.com/) veya [Swagger Editor](https://editor.swagger.io/) gibi araçlara aktarın.

  - Yeni bir adaptör kaynağı oluşturmak için bir istek gönderin:
    ```http
    POST http://localhost:8000/adapters
    Content-Type: application/json
    ```
     ```json
     {
        "name": "mcp-example",
        "imageName": "mcp-example",
        "imageVersion": "1.0.0",
        "description": "test"
     }
     ```

  ### 8. API'yi Test Et - MCP Sunucusu Erişimi
  - MCP sunucusunu dağıttıktan sonra bağlantıyı test etmek için [VS Code](https://code.visualstudio.com/) gibi bir istemci kullanın. Rehbere bakınız: [VS Code'da MCP sunucularını kullan](https://code.visualstudio.com/docs/copilot/chat/mcp-servers). 
    > **Not:** En son MCP özelliklerine erişmek için VSCode'un güncel olduğundan emin olun.

    - Dağıtılmış `mcp-example` sunucusuna bağlanmak için şunu kullanın:  
       - `http://localhost:8000/adapters/mcp-example/mcp` (Streamable HTTP)

    `mcp-example` sunucusuna bağlanan örnek `.vscode/mcp.json`
    ```json
    {
      "servers": {
        "mcp-example": {
          "url": "http://localhost:8000/adapters/mcp-example/mcp",
        }
      }
    }
    ```

  - Diğer sunucular için:  
    - `http://localhost:8000/adapters/{name}/mcp` (Streamable HTTP)  

  ### 9. Araç Kaydını ve Dinamik Yönlendirmeyi Test Et

  #### Bir Araç Sunucusu Görüntüsünü Derle ve Yayınla

  Önce yerel kayıt defterinize bir araç sunucusu görüntüsünü derle ve push'la:
  ```sh
  docker build -f sample-servers/tool-example/Dockerfile sample-servers/tool-example -t localhost:5000/weather-tool:1.0.0
  docker push localhost:5000/weather-tool:1.0.0
  ```

  #### Bir Araçı Kaydet

  Tanımıyla birlikte bir araçı kaydetmek için bir istek gönderin:
  ```http
  POST http://localhost:8000/tools
  Content-Type: application/json
  ```
  ```json
  {
    "name": "weather",
    "imageName": "weather-tool",
    "imageVersion": "1.0.0",
    "description": "Weather tool for getting current weather information",
    "toolDefinition": {
      "tool": {
        "name": "weather",
        "title": "Weather Information",
        "description": "Gets the current weather for a specified location.",
        "type": "http",
        "inputSchema": {
          "type": "object",
          "properties": {
            "location": {
              "type": "string",
              "description": "The city and state, e.g. San Francisco, CA"
            }
          },
          "required": ["location"]
        }
      },
      "port": 8000
    }
  }
  ```

  #### Araç Dağıtımını Doğrula

  Araç dağıtım durumunu kontrol et:
  ```http
  GET http://localhost:8000/tools/weather/status
  ```

  #### Araç Ağ Geçidi Yönlendiricisi Aracılığıyla Araç Yönlendirmesini Test Et

  Araç ağ geçidi yönlendiricisine bağlanmak için bir MCP istemcisi (VS Code gibi) kullanın:

  Araç ağ geçidi yönlendiricisine bağlanan örnek `.vscode/mcp.json`:
  ```json
  {
    "servers": {
      "tool-gateway": {
        "url": "http://localhost:8000/mcp"
      }
    }
  }
  ```

  Yönlendirici, MCP isteğindeki araç adına göre araç çağrılarını uygun kayıtlı araç sunucularına otomatik olarak yönlendirecektir.

  ### 10. Ortamı Temizle  
     Dağıtılan tüm kaynakları kaldırmak için Kubernetes ad alanını silin:
     ```sh
     kubectl delete namespace adapter
     ```

  ## Başlarken - Azure'ye Tek Tıkla Dağıt

  ### Bulut Altyapısı
  ![Mimari Diyagramı](https://raw.githubusercontent.com/microsoft/mcp-gateway/HEAD/infra-diagram.png)

  ### 1. Bulut Geliştirme Ortamını Hazırla
  - **Sahibi** erişimi olan aktif bir [Azure aboneliği](https://azure.microsoft.com)
  - [Azure CLI'yı kur](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli)

  ### 2. Entra ID'i Kur (Azure Active Directory)

  Bulutta dağıtılan hizmet Azure Entra ID kullanarak bearer token kimlik doğrulaması gerektirir. Bir uygulama kaydını yapılandırmak için aşağıdaki adımları izleyin.

  #### Uygulama Kaydını Oluştur ve Yapılandır

  1. [Uygulama Kayıtları](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade)'na gidin
  2. **+ Yeni kayıt** seçeneğine tıklayın
     - **Ad**: Anlamlı bir ad seçin, örn. `mcp-gateway`
     - **Desteklenen hesap türleri**: **Tek kiracı** seçin
     - **Kaydet**'e tıklayın

  3. Uygulama kaydının **Genel Bakış** sayfasına gidin ve aşağıdakileri kopyalayın:
     - **Uygulama (istemci) Kimliği** — bu dağıtımınız için API İstemci Kimliğidir

  #### Bir API Açığa Çıkar (Bir Kapsam Tanımla)

  1. Sol menüde **API Açığa Çıkar** seçeneğine gidin
  2. **Uygulama Kimliği URI'sinin** yanında **Ekle**'ye tıklayın ve varsayılan değeri olarak bırakın:
     ```
     api://<your-client-id>
     ```

  3. **+ Kapsam Ekle**'ye tıklayın
     - **Kapsam adı**: `access`
     - **Yönetici
---

# MCP Gateway

**MCP Gateway** is a reverse proxy and management layer for [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) servers, enabling scalable, session-aware routing, authorization and lifecycle management of MCP servers in Kubernetes environments.

## Table of Contents

- [Overview](#overview)
- [Key Concepts](#key-concepts)
- [Architecture](#architecture)
- [Features](#features)
- [Getting Started – Local Deployment](#getting-started---local-deployment)
- [Getting Started – 1-Click Deploy to Azure](#getting-started---deploy-to-azure)

## Overview

This project provides:

- A data gateway for routing traffic to MCP servers with session affinity.
- A control plane for managing the MCP server lifecycle (deploy, update, delete).
- Enterprise-ready integration points including telemetry, access control and observability.

## Key Concepts

- **MCP Server**: A server implementing the Model Context Protocol, which typically a streamable HTTP endpoint.
- **Adapters**: Logical resources representing MCP servers in the gateway, managed under the `/adapters` scope. Designed to coexist with other resource types (e.g., `/agents`) in a unified AI development platform.
- **Tools**: Registered resources with MCP tool definitions that can be dynamically routed via the tool gateway router. Each tool includes metadata about its execution endpoint and input schema.
- **Tool Gateway Router**: An MCP server that acts as an intelligent router, directing tool execution requests to the appropriate registered tool servers based on tool definitions. Multiple router instances may run behind the gateway for session affinity.
- **Session-Aware Stateful Routing**: Ensures that all requests with a given `session_id` are consistently routed to the same MCP server instance.
- **Agents & Sessions (Preview)**: Optional, opt-in resources for running LLM-driven agents on top of registered MCP tools. *Agents* are metadata (system prompt + model + allowed tool list); *Sessions* are individual runs that stream events over Server-Sent Events. Disabled unless `FoundrySettings:Endpoint` is configured.

## Architecture

```mermaid
flowchart LR
    subgraph Clients[" "]
        direction TB
        DataClient["🔌 Agent/MCP<br>Data Client"]
        MgmtClient["⚙️ Management<br>Client"]
    end

    subgraph Gateway["MCP Gateway"]
        direction TB
        
        subgraph Auth1["Authentication & Authorization"]
            Auth["🔐 Data Plane Auth<br>Bearer Token / RBAC"]
            Auth2["🔐 Control Plane Auth<br>Bearer Token / RBAC"]
        end
        
        subgraph DataPlane["Data Plane"]
            Routing["🔀 Adapter Routing<br>/adapters/{name}/mcp"]
            ToolRouting["🔀 Tool Router Gateway<br>/mcp"]
        end

        subgraph ControlPlane["Control Plane"]
            direction LR
            AdapterMgmt["📦 Adapter Management<br>/adapters CRUD"]
            ToolMgmt["🔧 Tool Management<br>/tools CRUD"]
        end
        
        subgraph Management["Backend Services"]
            DeploymentMgmt["☸️ Deployment Manager"]
            MetadataMgmt["📋 Metadata Manager"]
        end
    end

    subgraph Cluster["Kubernetes Cluster"]
        direction TB
        
        subgraph ServerRow[" "]
            direction LR
            
            subgraph MCPServers["MCP Servers"]
                direction TB
                PodA["mcp-a-0"]
                PodA1["mcp-a-1"]
                PodB["mcp-b-0"]
            end
            
            subgraph ToolRouters["Tool Gateway Routers"]
                direction TB
                Router1["toolgateway-0"]
                Router2["toolgateway-1"]
            end
        end
        
        subgraph ToolServers["Registered Tool Servers"]
            direction LR
            Tool1["tool-1-0"]
            Tool2["tool-2-0"]
        end
    end

    Metadata[("💾 Metadata Store<br>Server & Tool Info")]

    DataClient -->|"MCP Requests"| Auth
    MgmtClient -->|"API Calls"| Auth2
    
    Auth --> Routing
    Auth --> ToolRouting
    Auth2 --> AdapterMgmt
    Auth2 --> ToolMgmt
    
    AdapterMgmt & ToolMgmt --> DeploymentMgmt
    AdapterMgmt & ToolMgmt --> MetadataMgmt
    
    Routing -.->|"Session Affinity"| MCPServers
    ToolRouting -.->|"Session Affinity"| ToolRouters
    ToolRouters ==>|"Dynamic Routing"| ToolServers
    
    DeploymentMgmt -->|"Deploy & Monitor"| Cluster
    MetadataMgmt <-->|"Read/Write"| Metadata

    style Gateway fill:#e1f5ff
    style Cluster fill:#fff4e1
    style Metadata fill:#f0f0f0
```

## Features

### Control Plane – RESTful APIs for MCP Server Management

#### MCP Server Management (Adapters)

- `POST /adapters` — Deploy and register a new MCP server.
- `GET /adapters` — List all MCP servers the user can access.
- `GET /adapters/{name}` — Retrieve metadata for a specific adapter.
- `GET /adapters/{name}/status` — Check the deployment status.
- `GET /adapters/{name}/logs` — Access the server's running logs.
- `PUT /adapters/{name}` — Update the deployment.
- `DELETE /adapters/{name}` — Remove the server.

#### Tool Registration and Management

- `POST /tools` — Register and deploy a tool with MCP tool definition metadata.
- `GET /tools` — List all registered tools the user can access.
- `GET /tools/{name}` — Retrieve metadata and tool definition for a specific tool.
- `GET /tools/{name}/status` — Check the tool deployment status.
- `GET /tools/{name}/logs` — Access the tool server's running logs.
- `PUT /tools/{name}` — Update a tool deployment and definition.
- `DELETE /tools/{name}` — Remove a registered tool.

#### Agent and Session Management (Preview, opt-in)

Available only when `FoundrySettings:Endpoint` is configured. See [Agents and Sessions](#agents-and-sessions-preview) below for details.

- `POST /agents`, `GET /agents`, `GET|PUT|DELETE /agents/{name}` — CRUD for agent definitions.
- `POST /sessions`, `GET /sessions`, `GET|DELETE /sessions/{id}` — CRUD for sessions.
- `POST /sessions/run` — Start a session and stream events (SSE).
- `POST /sessions/{id}/messages` — Continue an existing session with a new user message; streams events (SSE).

### Data Plane – Gateway Routing for MCP Servers

#### Direct MCP Server Access

- `POST /adapters/{name}/mcp` — Establish a streamable HTTP connection.

#### Dynamic Tool Routing via Tool Gateway Router

- `POST /mcp` — Route requests to the tool gateway router, which dynamically routes to registered tools based on tool definitions. The router itself is an MCP server with multiple instances hosted behind the gateway for scalability.

### Authentication & Authorization Support

The gateway provides entra id authentication and basic application role authorization for mcp servers and tools:

- **Read** access is granted to the resource creator, principals assigned the configured `requiredRoles` values (for example `mcp.engineer`), and anyone holding the mandatory administrator role `mcp.admin`. When `requiredRoles` is empty or omitted, only the creator and `mcp.admin` principals can read the resource.
- **Write** access is restricted to the resource creator or principals holding the `mcp.admin` role.

For step-by-step guidance on configuring Azure Entra ID (creating `mcp.admin` and other role values, assigning them to users or service principals, and supplying those values in adapter/tool payloads), see [docs/entra-app-roles.md](docs/entra-app-roles.md).

### Additional Capabilities

- Support for **Proxying Local & Remote MCP Servers**. See [examples and usage](sample-servers/mcp-proxy/README.md).
- Stateless reverse proxy with a distributed session store (production mode).
- Kubernetes-native deployment using StatefulSets and headless services.

### Tool Registration and Dynamic Routing

The MCP Gateway now supports **tool registration** with dynamic routing capabilities, enabling a scalable architecture for managing and executing MCP tools.

### How It Works

1. **Tool Registration**: Developers register tools via the `/tools` API endpoint, providing:
   - Container image details (name and version)
   - MCP tool definition (name, description, input schema)
   - Execution endpoint configuration (port and path)
   - Deployment configuration (replicas, environment variables)

2. **Tool Gateway Router**: A specialized MCP server that acts as an intelligent router:
   - Runs as multiple instances behind the gateway for high availability
   - Maintains awareness of all registered tools and their definitions
   - Dynamically routes tool execution requests to the appropriate tool server
   - Accessed via `POST /mcp` endpoint (without adapter name)

3. **Dynamic Routing**: When clients send MCP requests to `/mcp`:
   - The gateway routes requests to available tool gateway router instances with session affinity
   - The router analyzes the tool call in the request
   - Based on the tool definition, it forwards the execution to the correct registered tool server
   - Results are returned through the router back to the client

### Agents and Sessions (Preview)

> **Preview / single-replica.** This subsystem is opt-in and intended for evaluation and single-pod deployments. Built-in tools execute in-process inside the gateway pod, and per-session state (working directory, disk-quota counters) is local to that pod. Do not enable this in a multi-replica or multi-tenant production deployment without adding an out-of-process sandbox and shared session storage.

The gateway can optionally run LLM-driven *agents* that call registered MCP tools and a small set of built-in tools (`builtin:bash`, `builtin:read_file`, `builtin:write_file`). The agent CRUD endpoints (`/agents`, `/sessions` GET/DELETE/LIST) are always available, but **streaming session execution** (`POST /sessions/run`, `POST /sessions/{id}/messages`) is only enabled when `FoundrySettings:Endpoint` is configured. Without it, a streaming request fails fast with an `error` SSE event saying that Foundry must be configured.

#### Enabling

Add a `FoundrySettings` section to `appsettings.json` (or supply via environment variables):

```json
{
  "FoundrySettings": {
    "Endpoint": "https://<your-resource>.cognitiveservices.azure.com/",
    "DeploymentName": "gpt-4o"
  }
}
```

Authentication uses `DefaultAzureCredential`; grant the gateway's identity (managed identity in AKS, or your local user via `az login`) the *Cognitive Services User* role on the target resource. Tool-emitting models are required for any agent with a non-empty `tools` array — `gpt-4o`-class deployments are recommended.

#### Defining an agent

```http
POST /agents
Authorization: Bearer <token>
Content-Type: application/json
```
```json
{
  "name": "weather-helper",
  "model": "gpt-4o",
  "system": "You answer weather questions concisely.",
  "tools": ["mcp:weather"],
  "description": "Demo agent backed by the weather MCP tool."
}
```

`tools` entries are namespaced by prefix:
- `mcp:<tool-name>` — routes to a tool registered via `/tools`.
- `agent:<agent-name>` — delegates to another agent (subagent / Task pattern).
- `builtin:bash`, `builtin:read_file`, `builtin:write_file` — in-process built-ins (see *Built-in tools and limits* below).

Referenced `mcp:` and `agent:` resources are validated at agent create/update time: the call fails if the resource does not exist or the caller lacks read access, so an agent can never reference tools or peer agents the creator could not invoke directly.

#### Running a session

```http
POST /sessions/run
Authorization: Bearer <token>
Content-Type: application/json
Accept: text/event-stream
```
```json
{ "agentName": "weather-helper", "input": "What's the weather in Seattle?" }
```

The response is a Server-Sent Events stream; each event is `event: <type>\ndata: <json>\n\n`. Event types include `Started`, `ToolCallStarted`, `ToolCallCompleted`, `TokenDelta`, `Completed`, and `Failed`.

To continue an existing session with a follow-up message:

```http
POST /sessions/{id}/messages
Content-Type: application/json

{ "input": "And in Portland?" }
```

#### Built-in tools and limits

When an agent lists `builtin:bash` / `builtin:read_file` / `builtin:write_file` in its `tools`, those built-ins run **in the gateway pod** under a per-session working directory. They are guarded by:

- A regex denylist for clearly dangerous shell operations (`sudo`, network egress, mounts, package managers, etc.). This is *defense-in-depth*, not a sandbox.
- 30s default / 120s max bash timeout; 16 KiB output cap per stream; 256 KiB max file size; 4 MiB total writes per session.
- Path resolution rejects absolute paths and `..` traversal.

For multi-tenant or production use, replace these with a real per-session sandbox (e.g. ephemeral pod, gVisor, firejail) — see the inline comments in `BuiltinToolExecutor.cs`.

## Getting Started - Local Deployment

### 1. Prepare Local Development Environment
- [Install .NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- [Install Docker Desktop](https://docs.docker.com/desktop/)
- [Install and turn on Kubernetes](https://docs.docker.com/desktop/features/kubernetes/#install-and-turn-on-kubernetes)

### 2. Run Local Docker Registry
   ```sh
   docker run -d -p 5000:5000 --name registry registry:2.7
   ```

### 3. Build & Publish MCP Server Images
Build and push the MCP server images to your local registry (`localhost:5000`).
```sh
docker build -f sample-servers/mcp-example/Dockerfile sample-servers/mcp-example -t localhost:5000/mcp-example:1.0.0
docker push localhost:5000/mcp-example:1.0.0
```

### 4. Build & Publish MCP Gateway and Tool Gateway Router
(Optional) Open `dotnet/Microsoft.McpGateway.sln` with Visual Studio.

Publish the MCP Gateway image:
```sh
dotnet publish dotnet/Microsoft.McpGateway.Service/src/Microsoft.McpGateway.Service.csproj -c Release /p:PublishProfile=localhost_5000.pubxml
```

Publish the Tool Gateway Router image:
```sh
dotnet publish dotnet/Microsoft.McpGateway.Tools/src/Microsoft.McpGateway.Tools.csproj -c Release /p:PublishProfile=localhost_5000.pubxml
```

### 5. Deploy MCP Gateway to Kubernetes Cluster
Apply the deployment manifests:
```sh
kubectl apply -f deployment/k8s/local-deployment.yml
```

### 6. Enable Port Forwarding
Forward the gateway service port:
```sh
kubectl port-forward -n adapter svc/mcpgateway-service 8000:8000
```

### 7. Test the API - MCP Server Management
- Import the OpenAPI definition from `openapi/mcp-gateway.openapi.json` into tools like [Postman](https://www.postman.com/), [Bruno](https://www.usebruno.com/), or [Swagger Editor](https://editor.swagger.io/).

- Send a request to create a new adapter resource:
  ```http
  POST http://localhost:8000/adapters
  Content-Type: application/json
  ```
   ```json
   {
      "name": "mcp-example",
      "imageName": "mcp-example",
      "imageVersion": "1.0.0",
      "description": "test"
   }
   ```

### 8. Test the API - MCP Server Access 
- After deploying the MCP server, use a client like [VS Code](https://code.visualstudio.com/) to test the connection. Refer to the guide: [Use MCP servers in VS Code](https://code.visualstudio.com/docs/copilot/chat/mcp-servers). 
  > **Note:** Ensure VSCode is up to date to access the latest MCP features.

  - To connect to the deployed `mcp-example` server, use:  
     - `http://localhost:8000/adapters/mcp-example/mcp` (Streamable HTTP)

  Sample `.vscode/mcp.json` that connects to the `mcp-example` server
  ```json
  {
    "servers": {
      "mcp-example": {
        "url": "http://localhost:8000/adapters/mcp-example/mcp",
      }
    }
  }
  ```

- For other servers:  
  - `http://localhost:8000/adapters/{name}/mcp` (Streamable HTTP)  

### 9. Test Tool Registration and Dynamic Routing

#### Build & Publish a Tool Server Image

First, build and push a tool server image to your local registry:
```sh
docker build -f sample-servers/tool-example/Dockerfile sample-servers/tool-example -t localhost:5000/weather-tool:1.0.0
docker push localhost:5000/weather-tool:1.0.0
```

#### Register a Tool

Send a request to register a tool with its definition:
```http
POST http://localhost:8000/tools
Content-Type: application/json
```
```json
{
  "name": "weather",
  "imageName": "weather-tool",
  "imageVersion": "1.0.0",
  "description": "Weather tool for getting current weather information",
  "toolDefinition": {
    "tool": {
      "name": "weather",
      "title": "Weather Information",
      "description": "Gets the current weather for a specified location.",
      "type": "http",
      "inputSchema": {
        "type": "object",
        "properties": {
          "location": {
            "type": "string",
            "description": "The city and state, e.g. San Francisco, CA"
          }
        },
        "required": ["location"]
      }
    },
    "port": 8000
  }
}
```

#### Verify Tool Deployment

Check the tool deployment status:
```http
GET http://localhost:8000/tools/weather/status
```

#### Test Tool Routing via Tool Gateway Router

Use an MCP client (like VS Code) to connect to the tool gateway router:

Sample `.vscode/mcp.json` that connects to the tool gateway router:
```json
{
  "servers": {
    "tool-gateway": {
      "url": "http://localhost:8000/mcp"
    }
  }
}
```

The router will automatically route tool calls to the appropriate registered tool servers based on the tool name in the MCP request.

### 10. Clean the Environment  
   To remove all deployed resources, delete the Kubernetes namespace:
   ```sh
   kubectl delete namespace adapter
   ```

## Getting Started - Deploy to Azure

### Cloud Infrastructure
![Architecture Diagram](https://raw.githubusercontent.com/microsoft/mcp-gateway/HEAD/infra-diagram.png)

### 1. Prepare Cloud Development Environment
- An active [Azure subscription](https://azure.microsoft.com) with **Owner** access
- [Install Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli)

### 2. Setup Entra ID (Azure Active Directory)

The cloud-deployed service requires bearer token authentication using Azure Entra ID. Follow these steps to configure an app registration.

#### Create and Configure the App Registration

1. Go to [App Registrations](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade)
2. Click **+ New registration**
   - **Name**: Choose a meaningful name, e.g., `mcp-gateway`
   - **Supported account types**: Select **Single tenant**
   - Click **Register**

3. Go to the app registration **Overview** and copy:
   - **Application (client) ID** — this is your API Client ID for deployment

#### Expose an API (Define a Scope)

1. In the left menu, go to **Expose an API**
2. Click **Add** next to **Application ID URI**, and leave it as the default value:
   ```
   api://<your-client-id>
   ```

3. Click **+ Add a scope**
   - **Scope name**: `access`
   - **Admin consent display name**: `Access MCP Gateway`
   - **Admin consent Description**: Any brief description
   - Click **Add scope**

#### Authorize Azure CLI & VS Code as a Client Application

To allow Azure CLI & VS Code to work as the client for token acquisition.

1. Still in **Expose an API**, scroll down to **Authorized client applications**
2. Click **+ Add a client application**
   - **Client ID**: `04b07795-8ddb-461a-bbee-02f9e1bf7b46` (Azure CLI)
   - **Client ID**: `aebc6443-996d-45c2-90f0-388ff96faa56` (VS Code)
   - In Authorized scopes, select the scope `access`
   - Click **Add**

#### Configure Application Role for Authorization
[docs/entra-app-roles.md](docs/entra-app-roles.md)

### 3. Deploy Service Resources

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fmicrosoft%2Fmcp-gateway%2Fmain%2Fdeployment%2Finfra%2Fazure-deployment.json)

**Parameters**
| Name              | Description                                                                                                      |
|-------------------|------------------------------------------------------------------------------------------------------------------|
| `resourceGroup`   | The name of the resource group. Must contain only lowercase letters and numbers (alphanumeric).                 |
| `clientId`        | The Entra ID (Azure AD) client ID from your app registration.                                                    |
| `location`        | *(Optional)* The Azure region where resources will be deployed.<br/>Defaults to the resource group's location.   |
| `resourceLabel`   | *(Optional)* A lowercase alphanumeric string used as a suffix for naming resources and as the DNS label.<br/>If not provided, it will be the resourceGroup name.<br/>**Recommendation:** Set this value as the default the same with resource group name and make sure resource group name contains only lower alphanumeric. |


The deployment will:
- Deploy Azure infrastructure via Bicep templates

   | Resource Name                 | Resource Type               |
   |-------------------------------|-----------------------------|
   | mgreg\<resourceLabel>         | Container Registry          |
   | mg-storage-\<resourceLabel>   | Azure Cosmos DB Account     |
   | mg-aag-\<resourceLabel>       | Application Gateway         |
   | mg-ai-\<resourceLabel>        | Application Insights        |
   | mg-aks-\<resourceLabel>       | Kubernetes Service (AKS)    |
   | mg-identity-\<resourceLabel>  | Managed Identity            |
   | mg-pip-\<resourceLabel>       | Public IP Address           |
   | mg-vnet-\<resourceLabel>      | Virtual Network             |

- Deploy Kubernetes resources (including `mcp-gateway`) to the provisioned AKS cluster

> **Note:** It's recommended to use Managed Identity for credential-less authentication. This deployment follows that design.

### 4. Build & Publish MCP Server Images
The gateway service pulls the MCP server image from the newly provisioned Azure Container Registry (ACR) during deployment.

Build the MCP server image in ACR:

```sh
az acr build -r "mgreg$resourceLabel" -f sample-servers/mcp-example/Dockerfile sample-servers/mcp-example -t "mgreg$resourceLabel.azurecr.io/mcp-example:1.0.0"
```

### 5. Test the API - MCP Server Management

- Import the OpenAPI spec from `openapi/mcp-gateway.openapi.json` into [Postman](https://www.postman.com/), [Bruno](https://www.usebruno.com/), or [Swagger Editor](https://editor.swagger.io/)

- Acquire a bearer token locally:
  ```sh
  az account get-access-token --resource $clientId
  ```

- Send a POST request to create an adapter resource:
  ```http
  POST http://<resourceLabel>.<location>.cloudapp.azure.com/adapters
  Authorization: Bearer <token>
  Content-Type: application/json
  ```
  ```json
  {
    "name": "mcp-example",
    "imageName": "mcp-example",
    "imageVersion": "1.0.0",
    "description": "test",
    "requiredRoles": [] // Only creator and mcp.admin can access. Add roles (e.g. ["mcp.engineer"]) to grant read access to other principals.
  }
  ```

### 6. Test the API - MCP Server Access

- After deploying the MCP server, use a client like [VS Code](https://code.visualstudio.com/) to test the connection. Refer to the guide: [Use MCP servers in VS Code](https://code.visualstudio.com/docs/copilot/chat/mcp-servers). 
  > **Note:** Ensure VSCode is up to date to access the latest MCP features.

  - To connect to the deployed `mcp-example` server, use:  
     - `http://<resourceLabel>.<location>.cloudapp.azure.com/adapters/mcp-example/mcp` (Streamable HTTP)

  Sample `.vscode/mcp.json` that connects to the `mcp-example` server
  ```json
  {
    "servers": {
      "mcp-example": {
        "url": "http://<resourceLabel>.<location>.cloudapp.azure.com/adapters/mcp-example/mcp",
      }
    }
  }
  ```
  > **Note:** Authentication is still required to access the MCP server, VS Code will help handle the authentication process.

- For other servers:  
  - `http://<resourceLabel>.<location>.cloudapp.azure.com/adapters/{name}/mcp` (Streamable HTTP)  

### 7. Test Tool Registration and Dynamic Routing

#### Build & Publish a Tool Server Image

Build and push a tool server image to ACR:
```sh
az acr build -r "mgreg$resourceLabel" -f sample-servers/tool-example/Dockerfile sample-servers/tool-example -t "mgreg$resourceLabel.azurecr.io/weather-tool:1.0.0"
```

#### Register a Tool

Acquire a bearer token:
```sh
az account get-access-token --resource $clientId
```

Send a request to register a tool with its definition:
```http
POST http://<resourceLabel>.<location>.cloudapp.azure.com/tools
Authorization: Bearer <token>
Content-Type: application/json
```
```json
{
  "name": "weather",
  "imageName": "weather-tool",
  "imageVersion": "1.0.0",
  "useWorkloadIdentity": true,
  "description": "Weather tool for getting current weather information",
  "requiredRoles": [], // Only creator and mcp.admin can access. Add roles (e.g. ["mcp.engineer"]) to grant read access to other principals.
  "toolDefinition": {
    "tool": {
      "name": "weather",
      "title": "Weather Information",
      "description": "Gets the current weather for a specified location.",
      "type": "http",
      "inputSchema": {
        "type": "object",
        "properties": {
          "location": {
            "type": "string",
            "description": "The city and state, e.g. San Francisco, CA"
          }
        },
        "required": ["location"]
      },
      "annotations": {
        "readOnly": true
      }
    },
    "port": 8000
  }
}
```

#### Verify Tool Deployment

Check the tool deployment status:
```http
GET http://<resourceLabel>.<location>.cloudapp.azure.com/tools/weather/status
Authorization: Bearer <token>
```

#### Test Tool Routing via Tool Gateway Router

Use an MCP client (like VS Code) to connect to the tool gateway router:

Sample `.vscode/mcp.json` that connects to the tool gateway router:
```json
{
  "servers": {
    "tool-gateway": {
      "url": "http://<resourceLabel>.<location>.cloudapp.azure.com/mcp"
    }
  }
}
```
> **Note:** Authentication is required. VS Code will handle the authentication process.

The router will automatically route tool calls to the appropriate registered tool servers based on the tool name in the MCP request.

### 8. Clean the Environment
To remove all deployed resources, delete the resource group from Azure portal or run:
```sh
az group delete --name <resourceGroupName> --yes
```

### 9. Production Onboarding

- **TLS Configuration**  
  Set up HTTPS on Azure Application Gateway (AAG) listener using valid TLS certificates.

- **Network Security**  
  Restrict incoming traffic within the virtual network and configure Private Endpoints for enhanced network security.

- **Service-to-Service Authentication**  
  The Tool Gateway requires a shared secret (`GatewaySettings:Secret`) to accept forwarded identity headers from the MCP Gateway. In production, generate a strong random value and supply it to both the `mcpgateway` and `toolgateway` pods via the `GatewaySettings__Secret` environment variable or a Kubernetes secret. Requests without a valid `X-Gateway-Secret` header are rejected with `401 Unauthorized`.

- **Telemetry**  
  Enable advanced telemetry, detailed metrics, and alerts to support monitoring and troubleshooting in production.

- **Scaling**  
  Adjust scaling for `mcp-gateway` services and MCP servers based on expected load.

- **Authentication & Authorization**  
  Set up OAuth 2.0 with Azure Entra ID (AAD) for authentication.
  Implement fine-grained access control using RBAC or custom ACLs for `adapter` level permissions.

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft 
trademarks or logos is subject to and must follow 
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.

## Data Collection

The software may collect information about you and your use of the software and send it to Microsoft. Microsoft may use this information to provide services and improve our products and services. You may turn off the telemetry as described in the repository. There are also some features in the software that may enable you and Microsoft to collect data from users of your applications. If you use these features, you must comply with applicable law, including providing appropriate notices to users of your applications together with a copy of Microsoft’s privacy statement. Our privacy statement is located at https://go.microsoft.com/fwlink/?LinkID=824704. You can learn more about data collection and use in the help documentation and our privacy statement. Your use of the software operates as your consent to these practices.
