---
name: "StacklokLabs/mkp"
description: "MKP is a Model Context Protocol (MCP) server for Kubernetes that allows LLM-powered applications to interact with Kubernetes clusters. It provides tools for listing and applying Kubernetes resources through the MCP protocol."
category: "Cloud Platforms"
repo: "StacklokLabs/mkp"
stars: 57
url: "https://github.com/StacklokLabs/mkp"
body_length: 15863
license: "Apache-2.0"
language: "Go"
body_tr: |-
  # MKP - Kubernetes için Model Kontext Protocol Sunucusu

  <p align="center">
    
  </p>

  MKP, Kubernetes için bir Model Context Protocol (MCP) sunucusudur ve LLM tabanlı uygulamaların Kubernetes kümeleriyle etkileşim kurmasını sağlar. MCP protokolü aracılığıyla Kubernetes kaynaklarını listeleme ve uygulama araçları sunar.

  ## Özellikler

  - Kubernetes API sunucusu tarafından desteklenen kaynakları listeleme
  - Küme kaynaklarını listeleme
  - Ad alanı kaynaklarını listeleme
  - Kaynakları ve alt kaynakları getirme (durum, ölçek, loglar vb.)
  - Küme kaynaklarını uygulama (oluşturma veya güncelleme)
  - Ad alanı kaynaklarını uygulama (oluşturma veya güncelleme)
  - Timeout kontrolü ile pod'larda komut yürütme
  - API Machinery'nin unstructured istemcisini kullanarak genel ve takılabilir uygulama
  - Aşırı API çağrılarına karşı koruma için yerleşik hız sınırlaması

  ## Neden MKP?

  MKP, Kubernetes için bir Model Context Protocol sunucusu olarak çeşitli önemli avantajlar sunar:

  ### Yerel Go Uygulaması

  - Kubernetes'in kendisiyle aynı dil ile inşa edilmiş
  - Sunucu uygulamaları için mükemmel performans özellikleri
  - Güçlü tür güvenliği ve eşzamanlılık desteği
  - Kubernetes kütüphaneleriyle sorunsuz entegrasyon

  ### Doğrudan API Entegrasyonu

  - Dış bağımlılıklar olmadan Kubernetes API machinery'sini doğrudan kullanır
  - kubectl, helm veya diğer CLI araçlarına bağımlılık yok
  - Kubernetes API sunucusuyla doğrudan iletişim kurar
  - Azaltılmış yüke ve geliştirilmiş güvenilirliğe sahiptir

  ### Evrensel Kaynak Desteği

  - Unstructured istemci aracılığıyla herhangi bir Kubernetes kaynak türüyle çalışır
  - Sert kodlanmış kaynak şemaları veya özel işleyicilere ihtiyaç yoktur
  - Özel Kaynak Tanımlarını (CRD'ler) otomatik olarak destekler
  - Yeni Kubernetes kaynakları için geleceğe dayanıklıdır

  ### Minimalist Tasarım

  - Temel Kubernetes kaynak işlemleri üzerinde odaklanır
  - Temiz, bakımı yapılabilir kod tabanı ve açık sorumluluğun ayrılması
  - Hafif ve minimal bağımlılıkları vardır
  - Anlaşılması, genişletilmesi ve katkı sağlanması kolaydır

  ### Üretim Hazır Mimarisi

  - Üretim ortamlarında güvenilirlik ve performans için tasarlanmış
  - Uygun hata işleme ve kaynak yönetimi
  - Aşırı API çağrılarına karşı koruma için yerleşik hız sınırlaması
  - Kapsamlı birim testleriyle test edilebilir tasarım
  - Kubernetes geliştirme en iyi uygulamalarını izler

  ## Ön Koşullar

  - Go 1.24 veya daha yeni
  - Kubernetes kümesi ve kubeconfig
  - Görevleri çalıştırmak için [Task](https://taskfile.dev/)

  ## Kurulum

  1. Depoyu klonlayın:

     ```bash
     git clone https://github.com/StacklokLabs/mkp.git
     cd mkp
     ```

  2. Bağımlılıkları yükleyin:

     ```bash
     task install
     ```

  3. Sunucuyu derleyin:

     ```bash
     task build
     ```

  ## Kullanım

  ### Sunucuyu çalıştırma

  Sunucuyu varsayılan kubeconfig ile çalıştırmak için:

  ```bash
  task run
  ```

  Sunucuyu belirli bir kubeconfig ile çalıştırmak için:

  ```bash
  KUBECONFIG=/path/to/kubeconfig task run-with-kubeconfig
  ```

  Sunucuyu belirli bir port üzerinde çalıştırmak için:

  ```bash
  MCP_PORT=9091 task run
  ```

  ## ToolHive ile Çalıştırma

  MKP, [ToolHive](https://github.com/stacklok/toolhive) kullanılarak bir Model Context Protocol (MCP) sunucusu olarak çalıştırılabilir; bu da MCP sunucularının dağıtımını ve yönetimini basitleştirir.

  MKP'yi ToolHive UI, CLI veya Kubernetes operatörü ile kurmaya ilişkin ayrıntılı talimatlar için [ToolHive belgelerine](https://docs.stacklok.com/toolhive/guides-mcp/k8s) bakın.

  ### MCP Araçları

  MKP sunucusu aşağıdaki MCP araçlarını sağlar:

  #### get_resource

  Bir Kubernetes kaynağı veya alt kaynağı getirir.

  Parametreler:

  - `resource_type` (gerekli): Getirilecek kaynak türü (küme veya ad alanı)
  - `group`: API grubu (örn. apps, networking.k8s.io)
  - `version` (gerekli): API sürümü (örn. v1, v1beta1)
  - `resource` (gerekli): Kaynak adı (örn. deployments, services)
  - `namespace`: Ad alanı (ad alanı kaynaklarıyla ilgili gerekli)
  - `name` (gerekli): Getirilecek kaynağın adı
  - `subresource`: Getirilecek alt kaynak (örn. status, scale, logs)
  - `parameters`: İstek için isteğe bağlı parametreler (aşağıdaki örneklere bakın)

  Örnek:

  ```json
  {
    "name": "get_resource",
    "arguments": {
      "resource_type": "namespaced",
      "group": "apps",
      "version": "v1",
      "resource": "deployments",
      "namespace": "default",
      "name": "nginx-deployment",
      "subresource": "status"
    }
  }
  ```

  Parametrelerle belirli bir konteynerden logları getirme örneği:

  ```json
  {
    "name": "get_resource",
    "arguments": {
      "resource_type": "namespaced",
      "group": "",
      "version": "v1",
      "resource": "pods",
      "namespace": "default",
      "name": "my-pod",
      "subresource": "logs",
      "parameters": {
        "container": "my-container",
        "sinceSeconds": "3600",
        "timestamps": "true",
        "limitBytes": "102400"
      }
    }
  }
  ```

  Pod logları için mevcut parametreler:

  - `container`: Hangi konteynerden logları getireceğini belirt
  - `previous`: Önceki konteyner örneğinden logları al (true/false)
  - `sinceSeconds`: Yalnızca saniye cinsinden göreceli bir süre kadar yeni logları döndür
  - `sinceTime`: Yalnızca belirli bir saatten sonraki logları döndür (RFC3339 formatı)
  - `timestamps`: Her satıra zaman damgası ekle (true/false)
  - `limitBytes`: Döndürülecek maksimum bayt sayısı
  - `tailLines`: Logların sonundan döndürülecek satır sayısı

  Varsayılan olarak, pod logları LLM'nin bağlam penceresini bunaltmamak için son 100 satır ve 32KB ile sınırlanır. Bu varsayılanlar yukarıdaki parametreler kullanılarak geçersiz kılınabilir.

  Düzenli kaynaklar için mevcut parametreler:

  - `resourceVersion`: Belirtildiğinde, kaynağı bu belirli sürümdeki halini gösterir

  #### list_resources

  Belirli bir türde Kubernetes kaynaklarını listeler.

  Parametreler:

  - `resource_type` (gerekli): Listelenecek kaynak türü (küme veya ad alanı)
  - `group`: API grubu (örn. apps, networking.k8s.io)
  - `version` (gerekli): API sürümü (örn. v1, v1beta1)
  - `resource` (gerekli): Kaynak adı (örn. deployments, services)
  - `namespace`: Ad alanı (ad alanı kaynakları için gerekli)
  - `label_selector`: Kaynakları filtrelemek için Kubernetes etiket seçici (isteğe bağlı)
  - `include_annotations`: Çıkışta ek açıklamaları dahil etip etmeyeceği (varsayılan: true)
  - `exclude_annotation_keys`: Çıkıştan hariç tutulacak ek açıklama anahtarları listesi (\* ile joker karakterleri destekler)
  - `include_annotation_keys`: Çıkışta dahil edilecek ek açıklama anahtarları listesi (belirtilirse, yalnızca bunlar dahil edilir)

  ##### Ek Açıklama Filtrelemesi

  `list_resources` aracı, meta veri çıktı boyutunu kontrol etmek ve büyük ek açıklamalarla (GPU düğümü ek açıklamaları gibi) kesilme sorunlarını önlemek için güçlü ek açıklama filtreleme yetenekleri sağlar.

  **Temel Kullanım:**

  ```json
  {
    "name": "list_resources",
    "arguments": {
      "resource_type": "namespaced",
      "group": "apps",
      "version": "v1",
      "resource": "deployments",
      "namespace": "default"
    }
  }
  ```

  **Belirli ek açıklamaları hariç tut (GPU düğümleri için yararlı):**

  ```json
  {
    "name": "list_resources",
    "arguments": {
      "resource_type": "clustered",
      "group": "",
      "version": "v1",
      "resource": "nodes",
      "exclude_annotation_keys": [
        "nvidia.com/*",
        "kubectl.kubernetes.io/last-applied-configuration"
      ]
    }
  }
  ```

  **Yalnızca belirli ek açıklamaları dahil et:**

  ```json
  {
    "name": "list_resources",
    "arguments": {
      "resource_type": "namespaced",
      "group": "",
      "version": "v1",
      "resource": "pods",
      "namespace": "default",
      "include_annotation_keys": ["app", "version", "prometheus.io/scrape"]
    }
  }
  ```

  **Maksimum performans için ek açıklamaları tamamen devre dışı bırak:**

  ```json
  {
    "name": "list_resources",
    "arguments": {
      "resource_type": "namespaced",
      "group": "",
      "version": "v1",
      "resource": "pods",
      "namespace": "default",
      "include_annotations": false
    }
  }
  ```

  **Ek Açıklama Filtreleme Kuralları:**

  - Varsayılan olarak, büyük yapılandırma verilerini önlemek için `kubectl.kubernetes.io/last-applied-configuration` hariç tutulur
  - `exclude_annotation_keys`, `*` kullanarak joker karakter modellerini destekler (örn. `nvidia.com/*` tüm NVIDIA ek açıklamalarını hariç tutar)
  - `include_annotation_keys` belirtildiğinde, bunu önceliklendirir ve yalnızca bu ek açıklamalar dahil edilir
  - `include_annotations: false` ayarlamak, çıkıştan tüm ek açıklamaları tamamen kaldırır
  - Joker karakter desenleri yalnızca anahtarın sonunda `*` destekler (örn. `nvidia.com/*`)

  #### apply_resource

  Bir Kubernetes kaynağını uygular (oluşturur veya günceller).

  Parametreler:

  - `resource_type` (gerekli): Uygulanacak kaynak türü (küme veya ad alanı)
  - `group`: API grubu (örn. apps, networking.k8s.io)
  - `version` (gerekli): API sürümü (örn. v1, v1beta1)
  - `resource` (gerekli): Kaynak adı (örn. deployments, services)
  - `namespace`: Ad alanı (ad alanı kaynakları için gerekli)
  - `manifest` (gerekli): Kaynak manifestosu

  Örnek:

  ```json
  {
    "name": "apply_resource",
    "arguments": {
      "resource_type": "namespaced",
      "group": "apps",
      "version": "v1",
      "resource": "deployments",
      "namespace": "default",
      "manifest": {
        "apiVersion": "apps/v1",
        "kind": "Deployment",
        "metadata": {
          "name": "nginx-deployment",
          "namespace": "default"
        },
        "spec": {
          "replicas": 3,
          "selector": {
            "matchLabels": {
              "app": "nginx"
            }
          },
          "template": {
            "metadata": {
              "labels": {
                "app": "nginx"
              }
            },
            "spec": {
              "containers": [
                {
                  "name": "nginx",
                  "image": "nginx:latest",
                  "ports": [
                    {
                      "containerPort": 80
                    }
                  ]
                }
              ]
            }
          }
        }
      }
    }
  }
  ```

  #### post_resource

  Bir Kubernetes kaynağı veya alt kaynağına gönderme yapır; özellikle pod'larda komut yürütmek için yararlıdır.

  Parametreler:

  - `resource_type` (gerekli): Gönderme yapılacak kaynak türü (küme veya ad alanı)
  - `group`: API grubu (örn. apps, networking.k8s.io)
  - `version` (gerekli): API sürümü (örn. v1, v1beta1)
  - `resource` (gerekli): Kaynak adı (örn. deployments, services)
  - `namespace`: Ad alanı (ad alanı kaynakları için gerekli)
  - `name` (gerekli): Gönderme yapılacak kaynağın adı
  - `subresource`: Gönderme yapılacak alt kaynak (örn. exec)
  - `body` (gerekli): Kaynağa gönderilecek gövde
  - `parameters`: İstek için isteğe bağlı parametreler

  Pod'da komut yürütme örneği:

  ```json
  {
    "name": "post_resource",
    "arguments": {
      "resource_type": "namespaced",
      "group": "",
      "version": "v1",
      "resource": "pods",
      "namespace": "default",
      "name": "my-pod",
      "subresource": "exec",
      "body": {
        "command": ["ls", "-la", "/"],
        "container": "my-container",
        "timeout": 30
      }
    }
  }
  ```

  Pod exec için `body` aşağıdaki alanları destekler:

  - `command` (gerekli): Yürütülecek komut; string veya string dizisi olarak belirtilir
  - `container` (isteğe bağlı): Komutun yürütüleceği konteyner adı (ilk konteyner için varsayılan)
  - `timeout` (isteğe bağlı): Saniye cinsinden timeout (varsayılan 15 saniye, maksimum 60 saniye)

  Timeout'lar hakkında not:

  - Varsayılan timeout: Belirtilmezse 15 saniye
  - Maksimum timeout: 60 saniye (daha büyük değerler sınırlanır)
  - Timeout'u aşan komutlar sonlandırılır ve timeout hatası döndürür

  Yanıt stdout, stderr ve herhangi bir hata mesajı içerir:

  ```json
  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "name": "my-pod",
      "namespace": "default"
    },
    "spec": {
      "command": ["ls", "-la", "/"]
    },
    "status": {
      "stdout": "total 48\ndrwxr-xr-x   1 root root 4096 May  5 14:30 .\ndrwxr-xr-x   1 root root 4096 May  5 14:30 ..\n...",
      "stderr": "",
      "error": ""
    }
  }
  ```

  ### MCP Kaynakları

  MKP sunucusu, MCP kaynakları aracılığıyla Kubernetes kaynaklarına erişim sağlar. Kaynak URI'leri aşağıdaki biçimleri izler:

  - Küme kaynakları: `k8s://clustered/{group}/{version}/{resource}/{name}`
  - Ad alanı kaynakları: `k8s://namespaced/{namespace}/{group}/{version}/{resource}/{name}`

  ### Yapılandırma

  #### Taşıma Protokolü

  MKP, MCP sunucusu için iki taşıma protokolünü destekler:

  - **Streamable HTTP**: Çoğu kullanım durumu için uygun olan varsayılan taşıma protokolü
  - **SSE (Server-Sent Events)**: Eski taşıma protokolü; esas olarak eski istemcilerle uyumluluk için

  Taşıma protokolünü CLI bayrağı veya ortam değişkeni kullanarak yapılandırabilirsiniz:

  ```bash
  # CLI bayrağı kullanılarak
  ./build/mkp-server --transport=sse

  # Ortam değişkeni kullanılarak
  MCP_TRANSPORT=sse ./build/mkp-server

  # Varsayılan (Streamable HTTP)
  ./build/mkp-server
  ```

  `MCP_TRANSPORT` ortam değişkeni, MKP bu ortamda çalıştırıldığında ToolHive tarafından otomatik olarak ayarlanır.

  #### Kaynak Keşfini Kontrol Etme

  Varsayılan olarak, MKP tüm Kubernetes kaynaklarını MCP kaynakları olarak sunar; bu LLM'ler için yararlı bağlam sağlar. Ancak, çok sayıda kaynağa sahip büyük kümelerde, bu LLM'nin bağlam alanında önemli yer tüketebilir.

  Bu davranışı `--serve-resources` bayrağını kullanarak devre dışı bırakabilirsiniz:

  ```bash
  # Küme kaynaklarını sunmadan çalıştır
  ./build/mkp-server --serve-resources=false

  # Küme kaynaklarını sunmadan belirli bir kubeconfig ile çalıştır
  ./build/mkp-server --kubeconfig=/path/to/kubeconfig --serve-resources=false
  ```

  Kaynak keşfi devre dışı bırakıldığında bile, MCP araçları (`get_resource`, `list_resources`, `apply_resource`, `delete_resource` ve `post_resource`) tam işlevseldir ve Kubernetes kümenizle etkileşim kurmanızı sağlar.

  #### Yazma İşlemlerini Etkinleştirme

  Varsayılan olarak, MKP salt okunur modda çalışır; bu, küme üzerinde yazma işlemlerine izin vermediği anlamına gelir; yani `apply_resource`, `delete_resource` ve `post_resource` araçları mevcut olmayacaktır. `--read-write` bayrağını kullanarak yazma işlemlerini etkinleştirebilirsiniz:

  ```bash
  # Yazma işlemleri etkinleştirilmiş olarak çalıştır
  ./build/mkp-server --read-write=true

  # Belirli bir kubeconfig ve yazma işlemleri etkinleştirilmiş olarak çalıştır
  ./build/mkp-server --kubeconfig=/path/to/kubeconfig --read-write=true
  ```

  ### Hız Sınırlaması

  MKP, sunucuyu aşırı API çağrılarından korumak için yerleşik bir hız sınırlaması mekanizması içerir; bu, AI ajanlarıyla kullanıldığında özellikle önemlidir. Hız sınırlayıcısı bir token kova algoritması kullanır ve işlem türüne göre farklı sınırlar uygular:

  - Okuma işlemleri (list_resources, get_resource): dakikada 120 istek
  - Yazma işlemleri (apply_resource, delete_resource): dakikada 30 istek
  - Diğer işlemler için varsayılan: dakikada 60 istek

  Hız sınırları istemci oturumu başına uygulanır; bu da birden fazla istemci arasında adil kaynak tahsisi sağlar. Hız sınırlaması özelliği komut satırı bayrağı aracılığıyla etkinleştirilebilir veya devre dışı bırakılabilir:

  ```bash
  # Hız sınırlaması etkinleştirilmiş olarak çalıştır (varsayılan)
  ./build/mkp-server

  # Hız sınırlaması devre dışı bırakılmış olarak çalıştır
  ./build/mkp-server --enable-rate-limiting=false
  ```

  Hız sınırları ortam değişkenleri aracılığıyla özelleştirilebilir:

  - `MKP_RATE_LIMIT_DEFAULT`: Varsayılan hız sınırı (varsayılan: 60)
  - `MKP_RATE_LIMIT_READ`: Okuma işlemleri hız sınırı (varsayılan: 120)
  - `MKP_RATE_LIMIT_WRITE`: Yazma işlemleri hız sınırı (varsayılan: 30)

  ```bash
  # Özel hız sınırları ile çalıştır
  MKP_RATE_LIMIT_READ=200 MKP_RATE_LIMIT_WRITE=50 ./build/mkp-server
  ```

  ## Geliştirme

  ### Testleri çalıştırma

  ```bash
  task test
  ```

  ### Kodu biçimlendirme

  ```bash
  task fmt
  ```

  ### Kodu linting

  ```bash
  task lint
  ```

  ### Bağımlılıkları güncelleme

  ```bash
  task deps
  ```

  ## Katkıda Bulunma

  Bu MCP sunucusuna katkıda bulunmaya hoş geldiniz! Katkıda bulunmak istiyorsanız, başlamak hakkında ayrıntılar için [CONTRIBUTING kılavuzunu](./CONTRIBUTING.md) inceleyin.

  Bir hata bulursanız veya bir özellik isteğiniz varsa, lütfen depoda [bir sorun açın](https://github.com/StacklokLabs/mkp/issues) veya bizim [topluluk Discord sunucumuzda](https://discord.gg/stacklok) `#mcp-servers` kanalında bize katılın.

  ## Lisans

  Bu proje Apache v2 Lisansı altında lisanslanmıştır - ayrıntılar için LICENSE dosyasına bakın.
---

# MKP - Model Kontext Protocol Server for Kubernetes

<p align="center">
  
</p>

MKP is a Model Context Protocol (MCP) server for Kubernetes that allows
LLM-powered applications to interact with Kubernetes clusters. It provides tools
for listing and applying Kubernetes resources through the MCP protocol.

## Features

- List resources supported by the Kubernetes API server
- List clustered resources
- List namespaced resources
- Get resources and their subresources (including status, scale, logs, etc.)
- Apply (create or update) clustered resources
- Apply (create or update) namespaced resources
- Execute commands in pods with timeout control
- Generic and pluggable implementation using API Machinery's unstructured client
- Built-in rate limiting for protection against excessive API calls

## Why MKP?

MKP offers several key advantages as a Model Context Protocol server for
Kubernetes:

### Native Go Implementation

- Built with the same language as Kubernetes itself
- Excellent performance characteristics for server applications
- Strong type safety and concurrency support
- Seamless integration with Kubernetes libraries

### Direct API Integration

- Uses Kubernetes API machinery directly without external dependencies
- No reliance on kubectl, helm, or other CLI tools
- Communicates directly with the Kubernetes API server
- Reduced overhead and improved reliability

### Universal Resource Support

- Works with any Kubernetes resource type through the unstructured client
- No hardcoded resource schemas or specialized handlers needed
- Automatically supports Custom Resource Definitions (CRDs)
- Future-proof for new Kubernetes resources

### Minimalist Design

- Focused on core Kubernetes resource operations
- Clean, maintainable codebase with clear separation of concerns
- Lightweight with minimal dependencies
- Easy to understand, extend, and contribute to

### Production-Ready Architecture

- Designed for reliability and performance in production environments
- Proper error handling and resource management
- Built-in rate limiting to protect against excessive API calls
- Testable design with comprehensive unit tests
- Follows Kubernetes development best practices

## Prerequisites

- Go 1.24 or later
- Kubernetes cluster and kubeconfig
- [Task](https://taskfile.dev/) for running tasks

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/StacklokLabs/mkp.git
   cd mkp
   ```

2. Install dependencies:

   ```bash
   task install
   ```

3. Build the server:

   ```bash
   task build
   ```

## Usage

### Running the server

To run the server with the default kubeconfig:

```bash
task run
```

To run the server with a specific kubeconfig:

```bash
KUBECONFIG=/path/to/kubeconfig task run-with-kubeconfig
```

To run the server on a specific port:

```bash
MCP_PORT=9091 task run
```

## Running with ToolHive

MKP can be run as a Model Context Protocol (MCP) server using
[ToolHive](https://github.com/stacklok/toolhive), which simplifies the
deployment and management of MCP servers.

See the
[ToolHive documentation](https://docs.stacklok.com/toolhive/guides-mcp/k8s) for
detailed instructions on how to set up MKP with the ToolHive UI, CLI, or
Kubernetes operator.

### MCP Tools

The MKP server provides the following MCP tools:

#### get_resource

Get a Kubernetes resource or its subresource.

Parameters:

- `resource_type` (required): Type of resource to get (clustered or namespaced)
- `group`: API group (e.g., apps, networking.k8s.io)
- `version` (required): API version (e.g., v1, v1beta1)
- `resource` (required): Resource name (e.g., deployments, services)
- `namespace`: Namespace (required for namespaced resources)
- `name` (required): Name of the resource to get
- `subresource`: Subresource to get (e.g., status, scale, logs)
- `parameters`: Optional parameters for the request (see examples below)

Example:

```json
{
  "name": "get_resource",
  "arguments": {
    "resource_type": "namespaced",
    "group": "apps",
    "version": "v1",
    "resource": "deployments",
    "namespace": "default",
    "name": "nginx-deployment",
    "subresource": "status"
  }
}
```

Example of getting logs from a specific container with parameters:

```json
{
  "name": "get_resource",
  "arguments": {
    "resource_type": "namespaced",
    "group": "",
    "version": "v1",
    "resource": "pods",
    "namespace": "default",
    "name": "my-pod",
    "subresource": "logs",
    "parameters": {
      "container": "my-container",
      "sinceSeconds": "3600",
      "timestamps": "true",
      "limitBytes": "102400"
    }
  }
}
```

Available parameters for pod logs:

- `container`: Specify which container to get logs from
- `previous`: Get logs from previous container instance (true/false)
- `sinceSeconds`: Only return logs newer than a relative duration in seconds
- `sinceTime`: Only return logs after a specific time (RFC3339 format)
- `timestamps`: Include timestamps on each line (true/false)
- `limitBytes`: Maximum number of bytes to return
- `tailLines`: Number of lines to return from the end of the logs

By default, pod logs are limited to the last 100 lines and 32KB to avoid
overwhelming the LLM's context window. These defaults can be overridden using
the parameters above.

Available parameters for regular resources:

- `resourceVersion`: When specified, shows the resource at that particular
  version

#### list_resources

Lists Kubernetes resources of a specific type.

Parameters:

- `resource_type` (required): Type of resource to list (clustered or namespaced)
- `group`: API group (e.g., apps, networking.k8s.io)
- `version` (required): API version (e.g., v1, v1beta1)
- `resource` (required): Resource name (e.g., deployments, services)
- `namespace`: Namespace (required for namespaced resources)
- `label_selector`: Kubernetes label selector for filtering resources (optional)
- `include_annotations`: Whether to include annotations in the output (default:
  true)
- `exclude_annotation_keys`: List of annotation keys to exclude from output
  (supports wildcards with \*)
- `include_annotation_keys`: List of annotation keys to include in output (if
  specified, only these are included)

##### Annotation Filtering

The `list_resources` tool provides powerful annotation filtering capabilities to
control metadata output size and prevent truncation issues with large
annotations (such as GPU node annotations).

**Basic Usage:**

```json
{
  "name": "list_resources",
  "arguments": {
    "resource_type": "namespaced",
    "group": "apps",
    "version": "v1",
    "resource": "deployments",
    "namespace": "default"
  }
}
```

**Exclude specific annotations (useful for GPU nodes):**

```json
{
  "name": "list_resources",
  "arguments": {
    "resource_type": "clustered",
    "group": "",
    "version": "v1",
    "resource": "nodes",
    "exclude_annotation_keys": [
      "nvidia.com/*",
      "kubectl.kubernetes.io/last-applied-configuration"
    ]
  }
}
```

**Include only specific annotations:**

```json
{
  "name": "list_resources",
  "arguments": {
    "resource_type": "namespaced",
    "group": "",
    "version": "v1",
    "resource": "pods",
    "namespace": "default",
    "include_annotation_keys": ["app", "version", "prometheus.io/scrape"]
  }
}
```

**Disable annotations completely for maximum performance:**

```json
{
  "name": "list_resources",
  "arguments": {
    "resource_type": "namespaced",
    "group": "",
    "version": "v1",
    "resource": "pods",
    "namespace": "default",
    "include_annotations": false
  }
}
```

**Annotation Filtering Rules:**

- By default, `kubectl.kubernetes.io/last-applied-configuration` is excluded to
  prevent large configuration data
- `exclude_annotation_keys` supports wildcard patterns using `*` (e.g.,
  `nvidia.com/*` excludes all NVIDIA annotations)
- When `include_annotation_keys` is specified, it takes precedence and only
  those annotations are included
- Setting `include_annotations: false` completely removes all annotations from
  the output
- Wildcard patterns only support `*` at the end of the key (e.g.,
  `nvidia.com/*`)

#### apply_resource

Applies (creates or updates) a Kubernetes resource.

Parameters:

- `resource_type` (required): Type of resource to apply (clustered or
  namespaced)
- `group`: API group (e.g., apps, networking.k8s.io)
- `version` (required): API version (e.g., v1, v1beta1)
- `resource` (required): Resource name (e.g., deployments, services)
- `namespace`: Namespace (required for namespaced resources)
- `manifest` (required): Resource manifest

Example:

```json
{
  "name": "apply_resource",
  "arguments": {
    "resource_type": "namespaced",
    "group": "apps",
    "version": "v1",
    "resource": "deployments",
    "namespace": "default",
    "manifest": {
      "apiVersion": "apps/v1",
      "kind": "Deployment",
      "metadata": {
        "name": "nginx-deployment",
        "namespace": "default"
      },
      "spec": {
        "replicas": 3,
        "selector": {
          "matchLabels": {
            "app": "nginx"
          }
        },
        "template": {
          "metadata": {
            "labels": {
              "app": "nginx"
            }
          },
          "spec": {
            "containers": [
              {
                "name": "nginx",
                "image": "nginx:latest",
                "ports": [
                  {
                    "containerPort": 80
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
}
```

#### post_resource

Posts to a Kubernetes resource or its subresource, particularly useful for
executing commands in pods.

Parameters:

- `resource_type` (required): Type of resource to post to (clustered or
  namespaced)
- `group`: API group (e.g., apps, networking.k8s.io)
- `version` (required): API version (e.g., v1, v1beta1)
- `resource` (required): Resource name (e.g., deployments, services)
- `namespace`: Namespace (required for namespaced resources)
- `name` (required): Name of the resource to post to
- `subresource`: Subresource to post to (e.g., exec)
- `body` (required): Body to post to the resource
- `parameters`: Optional parameters for the request

Example of executing a command in a pod:

```json
{
  "name": "post_resource",
  "arguments": {
    "resource_type": "namespaced",
    "group": "",
    "version": "v1",
    "resource": "pods",
    "namespace": "default",
    "name": "my-pod",
    "subresource": "exec",
    "body": {
      "command": ["ls", "-la", "/"],
      "container": "my-container",
      "timeout": 30
    }
  }
}
```

The `body` for pod exec supports the following fields:

- `command` (required): Command to execute, either as a string or an array of
  strings
- `container` (optional): Container name to execute the command in (defaults to
  the first container)
- `timeout` (optional): Timeout in seconds (defaults to 15 seconds, maximum 60
  seconds)

Note on timeouts:

- Default timeout: 15 seconds if not specified
- Maximum timeout: 60 seconds (any larger value will be capped)
- Commands that exceed the timeout will be terminated and return a timeout error

The response includes stdout, stderr, and any error message:

```json
{
  "apiVersion": "v1",
  "kind": "Pod",
  "metadata": {
    "name": "my-pod",
    "namespace": "default"
  },
  "spec": {
    "command": ["ls", "-la", "/"]
  },
  "status": {
    "stdout": "total 48\ndrwxr-xr-x   1 root root 4096 May  5 14:30 .\ndrwxr-xr-x   1 root root 4096 May  5 14:30 ..\n...",
    "stderr": "",
    "error": ""
  }
}
```

### MCP Resources

The MKP server provides access to Kubernetes resources through MCP resources.
The resource URIs follow these formats:

- Clustered resources: `k8s://clustered/{group}/{version}/{resource}/{name}`
- Namespaced resources:
  `k8s://namespaced/{namespace}/{group}/{version}/{resource}/{name}`

### Configuration

#### Transport Protocol

MKP supports two transport protocols for the MCP server:

- **Streamable HTTP**: The default transport protocol, suitable for most use cases
- **SSE (Server-Sent Events)**: Legacy transport protocol, primarily for compatibility with older clients

You can configure the transport protocol using either a CLI flag or an
environment variable:

```bash
# Using CLI flag
./build/mkp-server --transport=sse

# Using environment variable
MCP_TRANSPORT=sse ./build/mkp-server

# Default (Streamable HTTP)
./build/mkp-server
```

The `MCP_TRANSPORT` environment variable is automatically set by ToolHive when
running MKP in that environment.

#### Controlling Resource Discovery

By default, MKP serves all Kubernetes resources as MCP resources, which provides
useful context for LLMs. However, in large clusters with many resources, this
can consume significant context space in the LLM.

You can disable this behavior by using the `--serve-resources` flag:

```bash
# Run without serving cluster resources
./build/mkp-server --serve-resources=false

# Run with a specific kubeconfig without serving cluster resources
./build/mkp-server --kubeconfig=/path/to/kubeconfig --serve-resources=false
```

Even with resource discovery disabled, the MCP tools (`get_resource`,
`list_resources`, `apply_resource`, `delete_resource`, and `post_resource`)
remain fully functional, allowing you to interact with your Kubernetes cluster.

#### Enabling Write Operations

By default, MKP operates in read-only mode, meaning it does not allow write
operations on the cluster, i.e. the `apply_resource`, `delete_resource`, and
`post_resource` tools will not be available. You can enable write operations by
using the `--read-write` flag:

```bash
# Run with write operations enabled
./build/mkp-server --read-write=true

# Run with a specific kubeconfig and write operations enabled
./build/mkp-server --kubeconfig=/path/to/kubeconfig --read-write=true
```

### Rate Limiting

MKP includes a built-in rate limiting mechanism to protect the server from
excessive API calls, which is particularly important when used with AI agents.
The rate limiter uses a token bucket algorithm and applies different limits
based on the operation type:

- Read operations (list_resources, get_resource): 120 requests per minute
- Write operations (apply_resource, delete_resource): 30 requests per minute
- Default for other operations: 60 requests per minute

Rate limits are applied per client session, ensuring fair resource allocation
across multiple clients. The rate limiting feature can be enabled or disabled
via the command line flag:

```bash
# Run with rate limiting enabled (default)
./build/mkp-server

# Run with rate limiting disabled
./build/mkp-server --enable-rate-limiting=false
```

Rate limits can be customized via environment variables:

- `MKP_RATE_LIMIT_DEFAULT`: Default rate limit (default: 60)
- `MKP_RATE_LIMIT_READ`: Read operations rate limit (default: 120)
- `MKP_RATE_LIMIT_WRITE`: Write operations rate limit (default: 30)

```bash
# Run with custom rate limits
MKP_RATE_LIMIT_READ=200 MKP_RATE_LIMIT_WRITE=50 ./build/mkp-server
```

## Development

### Running tests

```bash
task test
```

### Formatting code

```bash
task fmt
```

### Linting code

```bash
task lint
```

### Updating dependencies

```bash
task deps
```

## Contributing

We welcome contributions to this MCP server! If you'd like to contribute, please
review the [CONTRIBUTING guide](./CONTRIBUTING.md) for details on how to get
started.

If you run into a bug or have a feature request, please
[open an issue](https://github.com/StacklokLabs/mkp/issues) in the repository or
join us in the `#mcp-servers` channel on our
[community Discord server](https://discord.gg/stacklok).

## License

This project is licensed under the Apache v2 License - see the LICENSE file for
details.
