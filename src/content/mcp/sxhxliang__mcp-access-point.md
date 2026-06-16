---
name: "sxhxliang/mcp-access-point"
description: "Turn a web service into an MCP server in one click without making any code changes."
category: "Aggregators"
repo: "sxhxliang/mcp-access-point"
stars: 173
url: "https://github.com/sxhxliang/mcp-access-point"
body_length: 14946
license: "MIT"
language: "Rust"
homepage: "https://deepwiki.com/sxhxliang/mcp-access-point"
body_tr: |-
  # MCP Erişim Noktası  

  `MCP Access Point` geleneksel `HTTP` hizmetleri ile `MCP` (Model Context Protocol) istemcileri arasında iletişim köprüsü kurmak için tasarlanmış hafif bir protokol dönüştürme ağ geçidi aracıdır. MCP istemcilerinin sunucu tarafında herhangi bir arayüz değişikliği gerektirmeden mevcut HTTP hizmetleriyle doğrudan etkileşim kurmasını sağlar.  
  <p align="center">
    <a href="./README.md"></a>
    <a href="./README_CN.md"></a>
    <a href="https://deepwiki.com/sxhxliang/mcp-access-point"></a>
    <a href="https://zread.ai/sxhxliang/mcp-access-point"></a>
  </p>

  ![Admin Dashboard](https://raw.githubusercontent.com/sxhxliang/mcp-access-point/HEAD/assets/admin_dashboard.png)

  ## Giriş  
  Bu proje `Pingora` üzerine inşa edilmiştir - muazzam ölçekli istek proxy hizmetlerini destekleyebilen ultra yüksek performanslı ağ geçidi proxy kütüphanesi. Pingora, Cloudflare platformu için temel trafiği işleyen hizmetleri oluşturmak için kullanılmıştır ve yıllar boyunca internet genelinde saniyede 40 milyondan fazla isteğe tutarlı bir şekilde hizmet vermiştir. Cloudflare platformundaki trafik oranının önemli bir bölümünü destekleyen teknik köşetaşı haline gelmiştir.

  ## HTTP'den MCP'ye  
  Bu mod `Cursor Desktop` gibi istemcilerin sunucuların kendileri SSE protokolünü desteklemediğinde bile `SSE` aracılığıyla uzak HTTP sunucularıyla iletişim kurmasını sağlar.

  - Örnek kurulum iki hizmeti içerir:  
    - Service 1, `127.0.0.1:8090` adresinde yerel olarak çalışır  
    - Service 2, `api.example.com` adresinde uzaktan çalışır  
  - `MCP Access Point` aracılığıyla, her iki hizmet de herhangi bir kod değişikliği yapılmadan MCP hizmetlerine dönüştürülebilir.  
  - İstemciler MCP protokolü aracılığıyla `Service 1` ve `Service 2` ile iletişim kurar. MCP Access Point otomatik olarak MCP isteklerini ayırt eder ve uygun arka uç hizmetlerine iletir.

  ```mermaid
  graph LR
     A["Cursor Desktop"] <--> |SSE| B["MCP Access Point"]
     A2["Other Desktop"] <--> |Streamable Http| B["MCP Access Point"]
     B <--> |http 127.0.0.1:8090| C1["Existing API Server"]
     B <--> |https//api.example.com| C2["Existing API Server"]
    
     style A2 fill:#ffe6f9,stroke:#333,color:black,stroke-width:2px
     style A fill:#ffe6f9,stroke:#333,color:black,stroke-width:2px
     style B fill:#e6e6af,stroke:#333,color:black,stroke-width:2px
     style C1 fill:#e6ffe6,stroke:#333,color:black,stroke-width:2px
     style C2 fill:#e6ffd6,stroke:#333,color:black,stroke-width:2px
  ```

  ### Taşıma Türü (Özelliği)
  Şu anda `SSE` ve `Streamable HTTP` protokollerini destekler:
  - ✅ Streamable HTTP (durumsuz) 2025-03-26
    - Tüm hizmetler: `ip:port/mcp`
    - Tek hizmet: `ip:port/api/{service_id}/mcp`
    
  - ✅ SSE 2024-11-05
    - Tüm hizmetler: `ip:port/sse`
    - Tek hizmet: `ip:port/api/{service_id}/sse`

  `SSE` için `IP:PORT/sse` kullanın
  `Streamable HTTP` için `IP:PORT/mcp` kullanın

  ### Desteklenen MCP istemcileri
  - ✅ [MCP Inspector](https://github.com/modelcontextprotocol/inspector)
  - ✅ [Cursor Desktop](https://docs.cursor.com/context/model-context-protocol)
  - ✅ [Windsurf](https://docs.windsurf.com/plugins/cascade/mcp#model-context-protocol-mcp)
  - ✅ [VS Code](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)
  - ✅ [Trae](https://docs.trae.ai/ide/model-context-protocol)

  ## Temel Özellikler
  - **Protokol Dönüştürme**: HTTP ve MCP protokolleri arasında sorunsuz dönüştürme
  - **Sıfır Müdahale Entegrasyonu**: Mevcut HTTP hizmetleriyle tam uyumluluk
  - **İstemci Yetkiendirmesi**: MCP istemcilerinin standart HTTP hizmetlerini doğrudan çağırmasını sağlar
  - **Hafif Proxy**: Verimli protokol dönüştürmesi ile minimalist mimari
  - **Çok Kiracılılık**: Her kiracı için bağımsız yapılandırma ve uç noktalar
  - **Çalışma Zamanı Yapılandırma Yönetimi**: Hizmet yeniden başlatmadan dinamik yapılandırma güncellemeleri
  - **Admin API'si**: Gerçek zamanlı yapılandırma yönetimi için RESTful API

  ## Hızlı Başlangıç  

  ### Kurulum  
  ```bash
  # Kaynaktan kurulum
  git clone https://github.com/sxhxliang/mcp-access-point.git
  cd mcp-access-point
  cargo run -- -c config.yaml

  # Hata ayıklama için inspector kullanın (önce hizmeti başlatın)
  npx @modelcontextprotocol/inspector node build/index.js
  # Erişim http://127.0.0.1:6274/
  # "SSE" seçin ve 0.0.0.0:8080/sse girin, ardından bağlan'a tıklayın
  # veya "Streamable HTTP" seçin ve 0.0.0.0:8080/mcp girin
  ```

  ### Çok Kiracılılık Desteği
  MCP Access Gateway çok kiracılılığı destekler; burada her kiracı şu yollarla erişilebilir olan birden fazla MCP hizmetini yapılandırabilir:
  - `/api/{mcp-service-id}/sse` (SSE için)
  - `/api/{mcp-service-id}/mcp` (Streamable HTTP için)

  Örnek yapılandırma:
  ```yaml
  # config.yaml örneği (birden fazla hizmeti destekler)

  mcps:
    - id: service-1 # /api/service-1/sse veya /api/service-1/mcp aracılığıyla erişim
      ... # Hizmet yapılandırması
    - id: service-2 # /api/service-2/sse veya /api/service-2/mcp aracılığıyla erişim
      ... # Hizmet yapılandırması
    - id: service-3 # /api/service-3/sse veya /api/service-3/mcp aracılığıyla erişim
      ... # Hizmet yapılandırması
  ```

  Tüm hizmetlere aynı anda erişmek için kullanın:
  - `0.0.0.0:8080/mcp` (Streamable HTTP)
  - `0.0.0.0:8080/sse` (SSE)

  ### Yapılandırma Ayrıntıları
  1. **`-c config.yaml`**
     - `-c` (veya `--config`) yapılandırma dosyası yolunu (`config.yaml`) belirtir.
     - Bu dosya MCP Access Point'in proxy yapacağı ve dönüştüreceği API'leri tanımlar.

  ### config.yaml Örneği
  Yapılandırma dosyası çok kiracılılığı destekler ve her MCP hizmeti için arka uç hizmetlerinin ve yönlendirme kurallarının bağımsız yapılandırılmasını sağlar. Anahtar yapılandırma öğeleri şunları içerir:

  1. **mcps** - MCP hizmeti listesi
     - `id`: Erişim yolları oluşturmak için kullanılan benzersiz hizmet tanımlayıcısı
     - `upstream_id`: İlişkili arka uç hizmeti kimliği
     - `path`: OpenAPI specification dosya yolu. Yerel dosyaları (örn. `config/openapi.json`) ve uzak HTTP/HTTPS URL'lerini (örn. `https://petstore.swagger.io/v2/swagger.json`) destekler. Hem JSON hem de YAML formatları desteklenir.
     - `routes`: Özel yönlendirme yapılandırması (isteğe bağlı)
     - `upstream`: Arka uç hizmeti özel yapılandırması (isteğe bağlı)

  2. **upstreams** - Arka uç hizmeti yapılandırması
     - `id`: Arka uç hizmeti kimliği
     - `nodes`: Arka uç düğüm adresleri ve ağırlıkları
     - `type`: Yük dengeleme algoritması (roundrobin/random/ip_hash)
     - `scheme`: Arka uç protokolü (http/https)
     - `pass_host`: HTTP Host header işleme
     - `upstream_host`: Host header değerini geçersiz kıl

  Tam yapılandırma örneği:
  ```yaml
  # config.yaml örneği (birden fazla hizmeti destekler)
  mcps:
    - id: service-1 # Benzersiz tanımlayıcı, /api/service-1/sse veya /api/service-1/mcp aracılığıyla erişilebilir
      upstream_id: 1
      path: config/openapi_for_demo_patch1.json # Yerel OpenAPI spec yolu

    - id: service-2 # Benzersiz tanımlayıcı
      upstream_id: 2
      path: https://petstore.swagger.io/v2/swagger.json # Uzak OpenAPI spec

    - id: service-3 
      upstream_id: 3
      routes: # Özel yönlendirme
        - id: 1
          operation_id: get_weather
          uri: /points/{latitude},{longitude}
          method: GET
          meta:
            name: Get Weather
            description: Retrieve weather information by coordinates
            inputSchema: # İsteğe bağlı giriş doğrulaması
              type: object
              required:
                - latitude
                - longitude
              properties:
                latitude:
                  type: number
                  minimum: -90
                  maximum: 90
                longitude:
                  type: number
                  minimum: -180
                  maximum: 180

  upstreams: # Gerekli arka uç yapılandırması
    - id: 1
      headers: # Arka uç hizmetine göndermek için headers
        X-API-Key: "12345-abcdef"        # API key
        Authorization: "Bearer token123" # Bearer token
        User-Agent: "MyApp/1.0"          # User agent
        Accept: "application/json"       # Accept header
      nodes: # Arka uç düğümleri (IP veya domain)
        "127.0.0.1:8090": 1 # Format: address:weight

    - id: 2 
      nodes:
        "127.0.0.1:8091": 1

    - id: 3 
      nodes:
        "api.weather.gov": 1
      type: roundrobin # Yük dengeleme algoritması
      scheme: https # Protokol
      pass_host: rewrite # Host header işleme
      upstream_host: api.weather.gov # Host geçersiz kıl
  ```

  MCP Access Gateway'i yapılandırma dosyası ile çalıştırmak için:
  ```bash
  cargo run -- -c config.yaml
  ```

  ## Docker'da Çalıştırma  

  ### Hızlı başlangıç için yerel olarak çalıştırın

  ```bash
  # Not: /path/to/your/config.yaml yerine gerçek yolu kullanın
  docker run -d --name mcp-access-point --rm \
    -p 8080:8080 \
    -e port=8080 \
    -v /path/to/your/config.yaml:/app/config/config.yaml \
    ghcr.io/sxhxliang/mcp-access-point:main
  ```


  ### Docker Image'ı Oluşturma (İsteğe Bağlı)  
  - docker yükleyin
  - repository'yi klonlayın ve image'ı oluşturun
  ```bash
  # Repository'yi klonlayın
  git clone https://github.com/sxhxliang/mcp-access-point.git
  cd mcp-access-point

  # Image oluşturun
  docker build -t liangshihua/mcp-access-point:latest .
  ```

  - Docker Container'ı çalıştırın
  ```bash
  # Ortam değişkenleri kullanarak (hizmet host üzerinde çalışıyor)
  # Not: /path/to/your/config.yaml yerine gerçek yolu kullanın

  docker run -d --name mcp-access-point --rm \
    -p 8080:8080 \
    -e port=8080 \
    -v /path/to/your/config.yaml:/app/config/config.yaml \
    liangshihua/mcp-access-point:latest
  ```

  ### Ortam Değişkenleri  
  - `port`: MCP Access Point dinleme portu (varsayılan: 8080)

  ## Tipik Kullanım Senaryoları  

  - **Kademeli Mimari Geçişi**: HTTP'den MCP'ye kademeli geçişi kolaylaştırır  
  - **Hibrit Mimari Desteği**: MCP ekosistemi içinde mevcut HTTP altyapısını yeniden kullanın  
  - **Protokol Uyumluluğu**: Her iki protokolü de destekleyen hibrit sistemler oluşturun  

  **Örnek Senaryo**:  
  MCP tabanlı AI istemcilerinin eski HTTP microservisleriyle arayüz olması gerektiğinde, MCP Access Gateway sorunsuz protokol dönüştürmeyi sağlayan bir middleware katmanı olarak görev yapar.

  [@limcheekin](https://github.com/limcheekin) adlı kullanıcıya pratik bir örnek içeren bir makale yazması için çok teşekkürler: https://limcheekin.medium.com/building-your-first-no-code-mcp-server-the-fabric-integration-story-90da58cdbe1f

  ## Çalışma Zamanı Yapılandırma Yönetimi

  MCP Access Point artık RESTful Admin API'si aracılığıyla dinamik yapılandırma yönetimini destekler ve hizmeti yeniden başlatmadan yapılandırmaları güncellemenizi sağlar.

  ### Admin API Özellikleri

  - **Gerçek Zamanlı Yapılandırma Güncellemeleri**: Arka uç hizmetlerini, hizmetleri, yönlendirmeleri ve diğer kaynakları anında değiştirin
  - **Bağımlılık Doğrulaması**: Değişikliklerden önce kaynak bağımlılıklarının otomatik doğrulanması
  - **Batch İşlemleri**: Birden fazla yapılandırma değişikliğini atomik olarak yürütün
  - **Yapılandırma Doğrulaması**: Uygulamadan önce değişiklikleri doğrulamak için dry-run modu
  - **Kaynak İstatistikleri**: Yapılandırma durumunu izleyin ve izleyin

  ### Admin API Yapılandırması

  Admin API'yi etkinleştirmek için `config.yaml` dosyanıza aşağıdakileri ekleyin:

  ```yaml
  access_point:
    admin:
      address: "127.0.0.1:8081"  # Admin API dinleme adresi
      api_key: "your-api-key"    # İsteğe bağlı kimlik doğrulama API key
  ```

  ### Admin API Uç Noktaları

  #### Kaynak Yönetimi
  - `GET /admin/resources` - Kaynak özeti ve istatistiklerini alın
  - `GET /admin/resources/{type}` - Belirli bir türdeki tüm kaynakları listeleyin
  - `GET /admin/resources/{type}/{id}` - Belirli bir kaynağı alın
  - `POST /admin/resources/{type}/{id}` - Yeni bir kaynak oluşturun
  - `PUT /admin/resources/{type}/{id}` - Mevcut bir kaynağı güncelleyin
  - `DELETE /admin/resources/{type}/{id}` - Bir kaynağı silin

  #### Gelişmiş İşlemler
  - `POST /admin/validate/{type}/{id}` - Kaynak yapılandırmasını doğrulayın
  - `POST /admin/batch` - Batch işlemleri yürütün
  - `POST /admin/reload/{type}` - Belirli bir kaynak türünü yeniden yükleyin
  - `POST /admin/reload/config` - Dosyadan tam yapılandırmayı yeniden yükleyin (varsayılan olarak `config.yaml`). İsteğe bağlı JSON gövdesi: `{ "config_path": "path/to/config.yaml" }`

  #### Desteklenen Kaynak Türleri
  - `upstreams` - Arka uç sunucu yapılandırmaları
  - `services` - Hizmet tanımları
  - `routes` - Yönlendirme kuralları
  - `global_rules` - Global plugin kuralları
  - `mcp_services` - MCP hizmeti yapılandırmaları
  - `ssls` - SSL sertifika yapılandırmaları

  ### Admin API Örnekleri

  #### Yeni bir arka uç oluşturun
  ```bash
  curl -X POST http://localhost:8081/admin/resources/upstreams/my-upstream \
    -H "Content-Type: application/json" \
    -d '{
      "id": "my-upstream",
      "type": "RoundRobin",
      "nodes": ["127.0.0.1:8001", "127.0.0.1:8002"],
      "timeout": {
        "connect": 5,
        "read": 10,
        "send": 10
      }
    }'
  ```

  #### Bir hizmet oluşturun
  ```bash
  curl -X POST http://localhost:8081/admin/resources/services/my-service \
    -H "Content-Type: application/json" \
    -d '{
      "id": "my-service",
      "upstream_id": "my-upstream",
      "hosts": ["api.example.com"]
    }'
  ```

  #### Batch işlemleri
  ```bash
  curl -X POST http://localhost:8081/admin/batch \
    -H "Content-Type: application/json" \
    -d '{
      "dry_run": false,
      "operations": [
        {
          "operation_type": "create",
          "resource_type": "upstreams",
          "resource_id": "batch-upstream",
          "data": {
            "id": "batch-upstream",
            "type": "Random",
            "nodes": ["192.168.1.10:8080"]
          }
        },
        {
          "operation_type": "create",
          "resource_type": "services",
          "resource_id": "batch-service",
          "data": {
            "id": "batch-service",
            "upstream_id": "batch-upstream"
          }
        }
      ]
    }'
  ```

  #### Kaynak istatistiklerini alın
  ```bash
  curl http://localhost:8081/admin/resources
  ```

  ### Admin Dashboard UI'si

  - Route: `GET /admin` yerleşik dashboard'u (`static/admin_dashboard.html`) sunar.
    1) `mcp_services`, 2) `ssls`, 3) `global_rules`, 4) `routes`, 5) `upstreams`, 6) `services`.
  - Her kart API yanıtından türetilen `count` ve biçimlendirilmiş `last_updated` gösterir.

  #### Dosyadan yapılandırmayı yeniden yükleyin
  ```bash
  # Varsayılan config.yaml'ı kullanır
  curl -X POST http://localhost:8081/admin/reload/config \
    -H "Content-Type: application/json" \
    -H "x-api-key: your-api-key"

  # Veya farklı bir config yolu belirtin
  curl -X POST http://localhost:8081/admin/reload/config \
    -H "Content-Type: application/json" \
    -H "x-api-key: your-api-key" \
    -d '{"config_path": "./config.yaml"}'
  ```

  ### Admin API'yi Test Etme

  Admin API işlevselliğini doğrulamak için sağlanan test betiğini kullanın:

  ```bash
  # Test betiğini çalıştırılabilir yapın
  chmod +x test-admin-api.sh

  # Kapsamlı API testlerini çalıştırın
  ./test-admin-api.sh
  ```

  Ayrıntılı Admin API belgeleri için bkz. [RUNTIME_CONFIG_API.md](./RUNTIME_CONFIG_API.md).

  ## Katkı Yönergeleri
  1. Bu repository'yi fork edin.
  2. Bir branch oluşturun ve değişikliklerinizi commit edin.
  3. Bir pull request oluşturun ve merge edilmesini bekleyin.
  4. Kodunuzun Rust kodlama standartlarını takip ettiğinden emin olun.
---

# MCP Access Point  

`MCP Access Point` is a lightweight protocol conversion gateway tool designed to establish a communication bridge between traditional `HTTP` services and `MCP` (Model Context Protocol) clients. It enables MCP clients to interact directly with existing HTTP services without requiring any server-side interface modifications.  
<p align="center">
  <a href="./README.md"></a>
  <a href="./README_CN.md"></a>
  <a href="https://deepwiki.com/sxhxliang/mcp-access-point"></a>
  <a href="https://zread.ai/sxhxliang/mcp-access-point"></a>
</p>

![Admin Dashboard](https://raw.githubusercontent.com/sxhxliang/mcp-access-point/HEAD/assets/admin_dashboard.png)

## Introduction  
This project is built on `Pingora` - an ultra-high performance gateway proxy library capable of supporting massive-scale request proxy services. Pingora has been used to build services that handle core traffic for the Cloudflare platform, consistently serving over 40 million requests per second across the internet for years. It has become the technical cornerstone supporting a significant proportion of traffic on the Cloudflare platform.

## HTTP to MCP  
This mode allows clients like `Cursor Desktop` to communicate with remote HTTP servers through `SSE`, even when the servers themselves don't support the SSE protocol.

- Example setup includes two services:  
  - Service 1 runs locally at `127.0.0.1:8090`  
  - Service 2 runs remotely at `api.example.com`  
- Through the `MCP Access Point`, both services can be converted to MCP services without any code modifications.  
- Clients communicate with `Service 1` and `Service 2` via the MCP protocol. The MCP Access Point automatically distinguishes MCP requests and forwards them to the appropriate backend services.

```mermaid
graph LR
   A["Cursor Desktop"] <--> |SSE| B["MCP Access Point"]
   A2["Other Desktop"] <--> |Streamable Http| B["MCP Access Point"]
   B <--> |http 127.0.0.1:8090| C1["Existing API Server"]
   B <--> |https//api.example.com| C2["Existing API Server"]
  
   style A2 fill:#ffe6f9,stroke:#333,color:black,stroke-width:2px
   style A fill:#ffe6f9,stroke:#333,color:black,stroke-width:2px
   style B fill:#e6e6af,stroke:#333,color:black,stroke-width:2px
   style C1 fill:#e6ffe6,stroke:#333,color:black,stroke-width:2px
   style C2 fill:#e6ffd6,stroke:#333,color:black,stroke-width:2px
```

### Transport Type (Specification)
Currently supports `SSE` and `Streamable HTTP` protocols:
- ✅ Streamable HTTP (stateless) 2025-03-26
  - All services: `ip:port/mcp`
  - Single service: `ip:port/api/{service_id}/mcp`
  
- ✅ SSE 2024-11-05
  - All services: `ip:port/sse`
  - Single service: `ip:port/api/{service_id}/sse`

use `IP:PORT/sse` for `SSE` 
use `IP:PORT/mcp` for `Streamable HTTP` 

### Supported MCP clients
- ✅ [MCP Inspector](https://github.com/modelcontextprotocol/inspector)
- ✅ [Cursor Desktop](https://docs.cursor.com/context/model-context-protocol)
- ✅ [Windsurf](https://docs.windsurf.com/plugins/cascade/mcp#model-context-protocol-mcp)
- ✅ [VS Code](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)
- ✅ [Trae](https://docs.trae.ai/ide/model-context-protocol)

## Core Features
- **Protocol Conversion**: Seamless conversion between HTTP and MCP protocols
- **Zero-Intrusive Integration**: Full compatibility with existing HTTP services
- **Client Empowerment**: Enables MCP clients to directly call standard HTTP services
- **Lightweight Proxy**: Minimalist architecture with efficient protocol conversion
- **Multi-tenancy**: Independent configuration and endpoints for each tenant
- **Runtime Configuration Management**: Dynamic configuration updates without service restart
- **Admin API**: RESTful API for real-time configuration management

## Quick Start  

### Installation  
```bash
# Install from source
git clone https://github.com/sxhxliang/mcp-access-point.git
cd mcp-access-point
cargo run -- -c config.yaml

# Use inspector for debugging (start service first)
npx @modelcontextprotocol/inspector node build/index.js
# Access http://127.0.0.1:6274/
# Select "SSE" and enter 0.0.0.0:8080/sse, then click connect
# or select "Streamable HTTP" and enter 0.0.0.0:8080/mcp
```

### Multi-tenancy Support
The MCP Access Gateway supports multi-tenancy, where each tenant can configure multiple MCP services accessible via:
- `/api/{mcp-service-id}/sse` (for SSE)
- `/api/{mcp-service-id}/mcp` (for Streamable HTTP)

Example configuration:
```yaml
# config.yaml example (supports multiple services)

mcps:
  - id: service-1 # Access via /api/service-1/sse or /api/service-1/mcp
    ... # Service configuration
  - id: service-2 # Access via /api/service-2/sse or /api/service-2/mcp
    ... # Service configuration
  - id: service-3 # Access via /api/service-3/sse or /api/service-3/mcp
    ... # Service configuration
```

To access all services simultaneously, use:
- `0.0.0.0:8080/mcp` (Streamable HTTP)
- `0.0.0.0:8080/sse` (SSE)

### Configuration Details
1. **`-c config.yaml`**
   - `-c` (or `--config`) specifies the configuration file path (`config.yaml`).
   - This file defines the APIs that the MCP Access Point will proxy and convert.

### config.yaml Example
The configuration file supports multi-tenancy, allowing independent configuration of upstream services and routing rules for each MCP service. Key configuration items include:

1. **mcps** - MCP service list
   - `id`: Unique service identifier used to generate access paths
   - `upstream_id`: Associated upstream service ID
   - `path`: OpenAPI specification file path. Supports local files (e.g., `config/openapi.json`) and remote HTTP/HTTPS URLs (e.g., `https://petstore.swagger.io/v2/swagger.json`). Both JSON and YAML formats are supported.
   - `routes`: Custom routing configuration (optional)
   - `upstream`: Upstream service specific configuration (optional)

2. **upstreams** - Upstream service configuration
   - `id`: Upstream service ID
   - `nodes`: Backend node addresses and weights
   - `type`: Load balancing algorithm (roundrobin/random/ip_hash)
   - `scheme`: Upstream protocol (http/https)
   - `pass_host`: HTTP Host header handling
   - `upstream_host`: Override Host header value

Complete configuration example:
```yaml
# config.yaml example (supports multiple services)
mcps:
  - id: service-1 # Unique identifier, accessible via /api/service-1/sse or /api/service-1/mcp
    upstream_id: 1
    path: config/openapi_for_demo_patch1.json # Local OpenAPI spec path

  - id: service-2 # Unique identifier
    upstream_id: 2
    path: https://petstore.swagger.io/v2/swagger.json # Remote OpenAPI spec

  - id: service-3 
    upstream_id: 3
    routes: # Custom routing
      - id: 1
        operation_id: get_weather
        uri: /points/{latitude},{longitude}
        method: GET
        meta:
          name: Get Weather
          description: Retrieve weather information by coordinates
          inputSchema: # Optional input validation
            type: object
            required:
              - latitude
              - longitude
            properties:
              latitude:
                type: number
                minimum: -90
                maximum: 90
              longitude:
                type: number
                minimum: -180
                maximum: 180

upstreams: # Required upstream configuration
  - id: 1
    headers: # Headers to send to upstream service
      X-API-Key: "12345-abcdef"        # API key
      Authorization: "Bearer token123" # Bearer token
      User-Agent: "MyApp/1.0"          # User agent
      Accept: "application/json"       # Accept header
    nodes: # Backend nodes (IP or domain)
      "127.0.0.1:8090": 1 # Format: address:weight

  - id: 2 
    nodes:
      "127.0.0.1:8091": 1

  - id: 3 
    nodes:
      "api.weather.gov": 1
    type: roundrobin # Load balancing algorithm
    scheme: https # Protocol
    pass_host: rewrite # Host header handling
    upstream_host: api.weather.gov # Override Host
```

To run the MCP Access Gateway with config file:
```bash
cargo run -- -c config.yaml
```

## Running via Docker  

### Run Locally for quick start

```bash
# Note: Replace /path/to/your/config.yaml with actual path
docker run -d --name mcp-access-point --rm \
  -p 8080:8080 \
  -e port=8080 \
  -v /path/to/your/config.yaml:/app/config/config.yaml \
  ghcr.io/sxhxliang/mcp-access-point:main
```


### Build Docker Image (Optional)  
- install docker
- clone repository and build image
```bash
# Clone repository
git clone https://github.com/sxhxliang/mcp-access-point.git
cd mcp-access-point

# Build image
docker build -t liangshihua/mcp-access-point:latest .
```

- Run Docker Container
```bash
# Using environment variables (service running on host)
# Note: Replace /path/to/your/config.yaml with actual path

docker run -d --name mcp-access-point --rm \
  -p 8080:8080 \
  -e port=8080 \
  -v /path/to/your/config.yaml:/app/config/config.yaml \
  liangshihua/mcp-access-point:latest
```

### Environment Variables  
- `port`: MCP Access Point listening port (default: 8080)

## Typical Use Cases  

- **Progressive Architecture Migration**: Facilitate gradual transition from HTTP to MCP  
- **Hybrid Architecture Support**: Reuse existing HTTP infrastructure within MCP ecosystem  
- **Protocol Compatibility**: Build hybrid systems supporting both protocols  

**Example Scenario**:  
When MCP-based AI clients need to interface with legacy HTTP microservices, the MCP Access Gateway acts as a middleware layer enabling seamless protocol conversion.

Many thanks to [@limcheekin](https://github.com/limcheekin) for writing an article with a practical example: https://limcheekin.medium.com/building-your-first-no-code-mcp-server-the-fabric-integration-story-90da58cdbe1f

## Runtime Configuration Management

The MCP Access Point now supports dynamic configuration management through a RESTful Admin API, allowing you to update configurations without restarting the service.

### Admin API Features

- **Real-time Configuration Updates**: Modify upstreams, services, routes, and other resources on-the-fly
- **Dependency Validation**: Automatic validation of resource dependencies before changes
- **Batch Operations**: Execute multiple configuration changes atomically
- **Configuration Validation**: Dry-run mode to validate changes before applying
- **Resource Statistics**: Monitor and track configuration state

### Admin API Configuration

Add the following to your `config.yaml` to enable the Admin API:

```yaml
access_point:
  admin:
    address: "127.0.0.1:8081"  # Admin API listening address
    api_key: "your-api-key"    # Optional API key for authentication
```

### Admin API Endpoints

#### Resource Management
- `GET /admin/resources` - Get resource summary and statistics
- `GET /admin/resources/{type}` - List all resources of a specific type
- `GET /admin/resources/{type}/{id}` - Get a specific resource
- `POST /admin/resources/{type}/{id}` - Create a new resource
- `PUT /admin/resources/{type}/{id}` - Update an existing resource
- `DELETE /admin/resources/{type}/{id}` - Delete a resource

#### Advanced Operations
- `POST /admin/validate/{type}/{id}` - Validate resource configuration
- `POST /admin/batch` - Execute batch operations
- `POST /admin/reload/{type}` - Reload a specific resource type
- `POST /admin/reload/config` - Reload full configuration from file (defaults to `config.yaml`). Optional JSON body: `{ "config_path": "path/to/config.yaml" }`

#### Supported Resource Types
- `upstreams` - Backend server configurations
- `services` - Service definitions
- `routes` - Routing rules
- `global_rules` - Global plugin rules
- `mcp_services` - MCP service configurations
- `ssls` - SSL certificate configurations

### Admin API Examples

#### Create a new upstream
```bash
curl -X POST http://localhost:8081/admin/resources/upstreams/my-upstream \
  -H "Content-Type: application/json" \
  -d '{
    "id": "my-upstream",
    "type": "RoundRobin",
    "nodes": ["127.0.0.1:8001", "127.0.0.1:8002"],
    "timeout": {
      "connect": 5,
      "read": 10,
      "send": 10
    }
  }'
```

#### Create a service
```bash
curl -X POST http://localhost:8081/admin/resources/services/my-service \
  -H "Content-Type: application/json" \
  -d '{
    "id": "my-service",
    "upstream_id": "my-upstream",
    "hosts": ["api.example.com"]
  }'
```

#### Batch operations
```bash
curl -X POST http://localhost:8081/admin/batch \
  -H "Content-Type: application/json" \
  -d '{
    "dry_run": false,
    "operations": [
      {
        "operation_type": "create",
        "resource_type": "upstreams",
        "resource_id": "batch-upstream",
        "data": {
          "id": "batch-upstream",
          "type": "Random",
          "nodes": ["192.168.1.10:8080"]
        }
      },
      {
        "operation_type": "create",
        "resource_type": "services",
        "resource_id": "batch-service",
        "data": {
          "id": "batch-service",
          "upstream_id": "batch-upstream"
        }
      }
    ]
  }'
```

#### Get resource statistics
```bash
curl http://localhost:8081/admin/resources
```

### Admin Dashboard UI

- Route: `GET /admin` serves a built-in dashboard (`static/admin_dashboard.html`).
  1) `mcp_services`, 2) `ssls`, 3) `global_rules`, 4) `routes`, 5) `upstreams`, 6) `services`.
- Each card shows `count` and a formatted `last_updated` derived from the API response.

#### Reload configuration from file
```bash
# Uses default config.yaml
curl -X POST http://localhost:8081/admin/reload/config \
  -H "Content-Type: application/json" \
  -H "x-api-key: your-api-key"

# Or specify a different config path
curl -X POST http://localhost:8081/admin/reload/config \
  -H "Content-Type: application/json" \
  -H "x-api-key: your-api-key" \
  -d '{"config_path": "./config.yaml"}'
```

### Testing the Admin API

Use the provided test script to verify Admin API functionality:

```bash
# Make the test script executable
chmod +x test-admin-api.sh

# Run comprehensive API tests
./test-admin-api.sh
```

For detailed Admin API documentation, see [RUNTIME_CONFIG_API.md](./RUNTIME_CONFIG_API.md).

## Contribution Guidelines
1. Fork this repository.
2. Create a branch and commit your changes.
3. Create a pull request and wait for it to be merged.
4. Make sure your code follows the Rust coding standards.
