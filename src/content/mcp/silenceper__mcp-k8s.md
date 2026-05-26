---
name: "silenceper/mcp-k8s"
description: "MCP-K8S is an AI-driven Kubernetes resource management tool that allows users to operate any resources in Kubernetes clusters through natural language interaction, including native resources (like Deployment, Service) and custom resources (CRD). No need to memorize complex commands - just describe your needs, and AI will accurately execute the corresponding cluster operations, greatly enhancing th"
description_tr: "MCP-K8S, Kubernetes kaynaklarını doğal dil etkileşimiyle yönetmenizi sağlayan yapay zeka destekli bir araçtır. Deployment, Service gibi native kaynakları ve custom resources (CRD) dahil tüm Kubernetes cluster operasyonlarını karmaşık komutları ezberlemeden sadece açıklayarak gerçekleştirebilirsiniz."
category: "Cloud Platforms"
repo: "silenceper/mcp-k8s"
stars: 146
url: "https://github.com/silenceper/mcp-k8s"
body_length: 12005
license: "Apache-2.0"
language: "Go"
homepage: "https://silenceper.com/blog/202504/mcp-k8s/"
body_tr: |-
  # mcp-k8s

  [![Go Version](https://img.shields.io/github/go-mod/go-version/silenceper/mcp-k8s)](https://github.com/silenceper/mcp-k8s/blob/main/go.mod)
  [![License](https://img.shields.io/github/license/silenceper/mcp-k8s)](https://github.com/silenceper/mcp-k8s/blob/main/LICENSE)
  [![Latest Release](https://img.shields.io/github/v/release/silenceper/mcp-k8s)](https://github.com/silenceper/mcp-k8s/releases)
  [![Go Report Card](https://goreportcard.com/badge/github.com/silenceper/mcp-k8s)](https://goreportcard.com/report/github.com/silenceper/mcp-k8s)
  [![Go CI](https://github.com/silenceper/mcp-k8s/actions/workflows/go-ci.yml/badge.svg)](https://github.com/silenceper/mcp-k8s/actions/workflows/go-ci.yml)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/silenceper/mcp-k8s/pulls)

  Kubernetes kümeleriyle MCP (Model Control Protocol) araçları aracılığıyla etkileşim sağlayan bir Kubernetes MCP sunucusu.

  ## Özellikler

  - Desteklenen Kubernetes kaynak türlerini sorgulama (yerleşik kaynaklar ve CRD'ler)
  - İnce taneli kontrole sahip Kubernetes kaynak işlemleri
    - Okuma işlemleri: kaynak ayrıntılarını al, filtreleme seçenekleriyle kaynak türüne göre kaynakları listele
    - Yazma işlemleri: kaynakları oluştur, güncelle ve sil (her biri bağımsız olarak etkinleştirilebilir/devre dışı bırakılabilir)
    - Özel kaynaklar da dahil olmak üzere tüm Kubernetes kaynak türleri için destek
  - kubeconfig kullanarak Kubernetes kümesine bağlanır
  - İnce taneli kontrole sahip Helm desteği
    - Helm sürümleri yönetimi (listele, al, kur, yükselt, kaldır)
    - Helm depoları yönetimi (listele, ekle, kaldır)
    - Her işlem bağımsız olarak etkinleştirilebilir/devre dışı bırakılabilir

  ## Önizleme
  > Cursor aracılığıyla etkileşim

  ![](https://raw.githubusercontent.com/silenceper/mcp-k8s/HEAD/docs/create-deployment.png)

  ## Kullanım Senaryoları

  ### 1. LLM Aracılığıyla Kubernetes Kaynak Yönetimi

  - **Etkileşimli Kaynak Yönetimi**: LLM ile doğal dil etkileşimi aracılığıyla Kubernetes kaynaklarını yönetin ve karmaşık kubectl komutlarını ezberlemek zorunda kalmayın
  - **Toplu İşlemler**: Karmaşık toplu işlem gereksinimlerini doğal dilde açıklayın ve LLM'nin bunları belirli kaynak işlemlerine dönüştürmesine izin verin
  - **Kaynak Durumu Sorguları**: Doğal dil kullanarak küme kaynak durumunu sorgulayın ve kolay anlaşılır yanıtlar alın

  ### 2. Otomate İşlem Senaryoları

  - **Akıllı İşlemler Asistanı**: Günlük küme yönetimi görevlerinde operatörler için akıllı bir asistan olarak hizmet verin
  - **Sorun Tanısı**: Doğal dil sorun açıklamaları aracılığıyla küme sorun tanısında yardımcı olun
  - **Yapılandırma İncelemesi**: Kubernetes kaynak yapılandırmalarını incelemeye ve optimize etmeye yardımcı olmak için LLM'nin anlama yeteneklerinden yararlanın

  ### 3. Geliştirme ve Test Desteği

  - **Hızlı Prototip Doğrulaması**: Geliştiriciler doğal dil aracılığıyla kaynak yapılandırmalarını hızlı bir şekilde oluşturup doğrulayabilir
  - **Ortam Yönetimi**: Test ortamı kaynak yönetimini basitleştirin, test kaynaklarını hızlı bir şekilde oluşturun, değiştirin ve temizleyin
  - **Yapılandırma Üretimi**: Gereksinim açıklamalarına göre en iyi uygulamaları takip eden kaynak yapılandırmalarını otomatik olarak oluşturun

  ### 4. Eğitim ve Öğretim Senaryoları

  - **Etkileşimli Öğrenme**: Yeni başlayanlar doğal dil etkileşimi aracılığıyla Kubernetes konseptlerini ve işlemlerini öğrenebilir
  - **En İyi Uygulama Rehberliği**: Kaynak işlemleri sırasında LLM en iyi uygulama önerileri sunar
  - **Hata Açıklaması**: İşlemler başarısız olduğunda kolay anlaşılır hata açıklamaları ve düzeltme önerileri sağlayın

  ## Mimari

  ### 1. Proje Özeti

  Kubernetes kümelerine bağlanan ve aşağıdaki yetenekleri sağlayan stdio tabanlı bir MCP sunucusu:
  - Kubernetes kaynak türlerini sorgulama (yerleşik kaynaklar ve CRD'ler dahil)
  - Kubernetes kaynakları üzerinde CRUD işlemleri (yapılandırılabilir yazma işlemleri)
  - Sürüm ve depo yönetimi için Helm işlemleri

  ### 2. Teknik Stack

  - Go
  - [mcp-go](https://github.com/mark3labs/mcp-go) SDK
  - Kubernetes client-go kütüphanesi
  - Helm v3 client kütüphanesi
  - İletişim için Stdio

  ### 3. Temel Bileşenler

  1. **MCP Sunucusu**: stdio tabanlı bir MCP sunucusu oluşturmak için mcp-go'nun `mcp-k8s` paketini kullanır
  2. **K8s İstemcisi**: Kubernetes kümelerine bağlanmak için client-go kullanır
  3. **Helm İstemcisi**: Helm işlemleri için Helm v3 kütüphanesini kullanır
  4. **Tool Uygulamaları**: Farklı Kubernetes işlemleri için çeşitli MCP tools'u uygular

  ### 4. Mevcut Tools

  #### Kaynak Türü Sorgulama Tools'ları
  - `get_api_resources`: Kümedeki desteklenen tüm API kaynak türlerini al

  #### Kaynak İşlem Tools'ları
  - `get_resource`: Belirli bir kaynakla ilgili ayrıntılı bilgi al
  - `list_resources`: Bir kaynak türünün tüm örneklerini listele
  - `create_resource`: Yeni kaynaklar oluştur (devre dışı bırakılabilir)
  - `update_resource`: Var olan kaynakları güncelle (devre dışı bırakılabilir)
  - `delete_resource`: Kaynakları sil (devre dışı bırakılabilir)

  #### Helm İşlem Tools'ları
  - `list_helm_releases`: Kümedeki tüm Helm sürümlerini listele
  - `get_helm_release`: Belirli bir Helm sürümü hakkında ayrıntılı bilgi al
  - `install_helm_chart`: Bir Helm chartı yükle (devre dışı bırakılabilir)
  - `upgrade_helm_chart`: Bir Helm sürümünü yükselt (devre dışı bırakılabilir)
  - `uninstall_helm_chart`: Bir Helm sürümünü kaldır (devre dışı bırakılabilir)
  - `list_helm_repositories`: Yapılandırılmış Helm depolarını listele
  - `add_helm_repository`: Yeni bir Helm deposu ekle (devre dışı bırakılabilir)
  - `remove_helm_repository`: Bir Helm deposunu kaldır (devre dışı bırakılabilir)

  ## Kullanım

  mcp-k8s üç iletişim modunu destekler:

  ### 1. Stdio Modu (Varsayılan)

  Stdio modunda, mcp-k8s istemciyle standart giriş/çıkış akışları aracılığıyla iletişim kurar. Bu varsayılan moddur ve çoğu kullanım durumu için uygundur.

  ```bash
  # Stdio modunda çalıştır (varsayılan)
  {
      "mcpServers":
      {
          "mcp-k8s":
          {
              "command": "/path/to/mcp-k8s",
              "args":
              [
                  "--kubeconfig",
                  "/path/to/kubeconfig",
                  "--enable-create",
                  "--enable-delete",
                  "--enable-update",
                  "--enable-list",
                  "--enable-helm-install",
                  "--enable-helm-upgrade"
              ]
          }
      }
  }
  ```

  ### 2. SSE Modu

  SSE (Server-Sent Events) modunda, mcp-k8s bir HTTP endpoint'i mcp istemcisine gösterir.
  Hizmeti uzak bir sunucuda dağıtabilirsiniz (ancak güvenliğe dikkat etmeniz gerekir)

  ```bash
  # SSE modunda çalıştır
  ./bin/mcp-k8s --kubeconfig=/path/to/kubeconfig --transport=sse --port=8080 --host=localhost --enable-create --enable-delete --enable-list --enable-update --enable-helm-install
  # Bu komut tüm işlemleri açacaktır
  ```

  mcp yapılandırması
  ```json
  {
    "mcpServers": {
      "mcp-k8s": {
        "url": "http://localhost:8080/sse",
        "args": []
      }
    }
  }
  ```

  SSE modu yapılandırması:
  - `--transport`: SSE modunu etkinleştirmek için "sse" olarak ayarlayın
  - `--port`: HTTP sunucu portu (varsayılan: 8080)
  - `--host`: HTTP sunucu ana bilgisayarı (varsayılan: "localhost")

  ### 3. Streamable HTTP Modu

  Streamable HTTP modunda, mcp-k8s hem doğrudan HTTP yanıtlarını hem de SSE akışlarını destekleyen bir HTTP endpoint'i gösterir. Bu mod daha iyi esneklik sağlar ve akış çıktısını destekler.

  ```bash
  # Streamable HTTP modunda çalıştır
  ./bin/mcp-k8s --kubeconfig=/path/to/kubeconfig --transport=streamable-http --port=8080 --host=localhost --endpoint-path=/mcp --enable-create --enable-delete --enable-list --enable-update --enable-helm-install
  ```

  mcp yapılandırması
  ```json
  {
    "mcpServers": {
      "mcp-k8s": {
        "url": "http://localhost:8080/mcp",
        "args": []
      }
    }
  }
  ```

  Streamable HTTP modu yapılandırması:
  - `--transport`: Streamable HTTP modunu etkinleştirmek için "streamable-http" olarak ayarlayın
  - `--port`: HTTP sunucu portu (varsayılan: 8080)
  - `--host`: HTTP sunucu ana bilgisayarı (varsayılan: "localhost")
  - `--endpoint-path`: MCP sunucusu için endpoint yolu (varsayılan: "/mcp")

  ### 4. Docker ortamı
  #### SSE Modu

  1. Tam Örnek
  Resim adınızın mcp-k8s olduğunu ve portları eşlemeniz ile ortam parametrelerini ayarlamanız gerektiğini varsayarak şunu çalıştırabilirsiniz:
  ```bash
  docker run --rm -p 8080:8080 -i -v ~/.kube/config:/root/.kube/config ghcr.io/silenceper/mcp-k8s:latest --transport=sse
  ```

  #### Streamable HTTP Modu

  ```bash
  docker run --rm -p 8080:8080 -i -v ~/.kube/config:/root/.kube/config ghcr.io/silenceper/mcp-k8s:latest --transport=streamable-http --endpoint-path=/mcp
  ```
  #### Stdio Modu

  ```json
  {
    "mcpServers": {
      "mcp-k8s": {
        "command": "docker",
        "args": [
          "run",
          "-i",
          "-v",
          "~/.kube/config:/root/.kube/config",
          "--rm",
          "ghcr.io/silenceper/mcp-k8s:latest"
        ]
      }
    }
  }
  ```


  ## Başlangıç

  ### Doğrudan Kullanım
  [Sürümler sayfasından](https://github.com/silenceper/mcp-k8s/releases) platformunuz için binary dosyasını doğrudan indirebilir ve hemen kullanabilirsiniz.

  ### Go Install

  ```bash
  go install github.com/silenceper/mcp-k8s/cmd/mcp-k8s@latest
  ```

  ### Derleme

  #### Makefile Kullanımı (Önerilen)

  Makefile, VERSION dosyasından sürüm bilgilerini otomatik olarak enjekte eder:

  ```bash
  git clone https://github.com/silenceper/mcp-k8s.git
  cd mcp-k8s
  make build
  ```

  Bu, ldflags aracılığıyla enjekte edilmiş sürüm bilgileriyle derlenecektir.

  #### Doğrudan Derleme

  ```bash
  git clone https://github.com/silenceper/mcp-k8s.git
  cd mcp-k8s
  go build -o bin/mcp-k8s cmd/mcp-k8s/main.go
  ```

  Not: Doğrudan derleme, ldflags'ı manuel olarak belirtmedikçe sürümü "dev" olarak gösterecektir.

  ### Komut Satırı Argümanları

  Tüm mevcut seçenekleri görmek için `mcp-k8s --help` kullanabilir veya sürümü kontrol etmek için `mcp-k8s --version` kullanabilirsiniz.

  #### Kubernetes Kaynak İşlemleri
  - `--kubeconfig`: Kubernetes yapılandırma dosyasının yolu (belirtilmezse varsayılan yapılandırma kullanılır)
  - `--enable-create`: Kaynak oluşturma işlemlerini etkinleştir (varsayılan: false)
  - `--enable-update`: Kaynak güncelleme işlemlerini etkinleştir (varsayılan: false)
  - `--enable-delete`: Kaynak silme işlemlerini etkinleştir (varsayılan: false)
  - `--enable-list`: Kaynak listesi işlemlerini etkinleştir (varsayılan: true)

  #### Helm İşlemleri
  - `--enable-helm-release-list`: Helm sürümü liste işlemlerini etkinleştir (varsayılan: true)
  - `--enable-helm-release-get`: Helm sürümü al işlemlerini etkinleştir (varsayılan: true)
  - `--enable-helm-install`: Helm chart yüklemeyi etkinleştir (varsayılan: false)
  - `--enable-helm-upgrade`: Helm chart yükseltmeyi etkinleştir (varsayılan: false)
  - `--enable-helm-uninstall`: Helm chart kaldırmayı etkinleştir (varsayılan: false)
  - `--enable-helm-repo-list`: Helm deposu liste işlemlerini etkinleştir (varsayılan: true)
  - `--enable-helm-repo-add`: Helm deposu ekleme işlemlerini etkinleştir (varsayılan: false)
  - `--enable-helm-repo-remove`: Helm deposu kaldırma işlemlerini etkinleştir (varsayılan: false)

  #### Transport Yapılandırması
  - `--transport`: Transport türü (stdio, sse veya streamable-http) (varsayılan: "stdio")
  - `--host`: HTTP transport için ana bilgisayar (SSE veya Streamable HTTP) (varsayılan: "localhost")
  - `--port`: HTTP transport için TCP portu (SSE veya Streamable HTTP) (varsayılan: 8080)
  - `--endpoint-path`: Streamable HTTP transport için endpoint yolu (varsayılan: "/mcp")

  #### Sürüm Bilgileri
  - `--version`: Sürüm, commit hash ve derleme tarihi dahil olmak üzere sürüm bilgilerini göster
  - `--help` veya `-h`: Yardım bilgilerini göster

  ### Streamable HTTP Testleri

  Streamable HTTP modunun düzgün çalışıp çalışmadığını test etmek için sağlanan test script'ini kullanabilirsiniz:

  ```bash
  # Bir terminalde sunucuyu başlat
  ./bin/mcp-k8s --transport=streamable-http --port=8080 --enable-list

  # Başka bir terminalde test script'ini çalıştır
  ./test_streamable_http.sh
  ```

  Ayrıntılı test talimatları için bkz. [TEST_STREAMABLE_HTTP.md](./TEST_STREAMABLE_HTTP.md).

  ### MCP İstemcileriyle Entegrasyon

  mcp-k8s, herhangi bir MCP uyumlu LLM istemcisiyle entegre edilebilen stdio tabanlı bir MCP sunucusudur. Entegrasyon talimatları için MCP istemcinizin belgelerine başvurun.

  ## Güvenlik Hususları

  - Yazma işlemleri bağımsız yapılandırma anahtarları aracılığıyla kesinlikle kontrol edilir
  - K8s istemcisinin yalnızca gerekli izinleri olmasını sağlamak için RBAC kullanır
  - Enjeksiyon saldırılarını önlemek için tüm kullanıcı girdilerini doğrular
  - Helm işlemleri aynı güvenlik ilkelerini izler ve okuma işlemleri varsayılan olarak etkinleştirilir, yazma işlemleri varsayılan olarak devre dışı bırakılır

  ## WeChat Resmi Hesabını Takip Edin
  ![AI技术小林](https://raw.githubusercontent.com/silenceper/mcp-k8s/HEAD/docs/qrcode.png)
---

# mcp-k8s

[![Go Version](https://img.shields.io/github/go-mod/go-version/silenceper/mcp-k8s)](https://github.com/silenceper/mcp-k8s/blob/main/go.mod)
[![License](https://img.shields.io/github/license/silenceper/mcp-k8s)](https://github.com/silenceper/mcp-k8s/blob/main/LICENSE)
[![Latest Release](https://img.shields.io/github/v/release/silenceper/mcp-k8s)](https://github.com/silenceper/mcp-k8s/releases)
[![Go Report Card](https://goreportcard.com/badge/github.com/silenceper/mcp-k8s)](https://goreportcard.com/report/github.com/silenceper/mcp-k8s)
[![Go CI](https://github.com/silenceper/mcp-k8s/actions/workflows/go-ci.yml/badge.svg)](https://github.com/silenceper/mcp-k8s/actions/workflows/go-ci.yml)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/silenceper/mcp-k8s/pulls)

A Kubernetes MCP (Model Control Protocol) server that enables interaction with Kubernetes clusters through MCP tools.

## Features

- Query supported Kubernetes resource types (built-in resources and CRDs)
- Kubernetes resource operations with fine-grained control
  - Read operations: get resource details, list resources by type with filtering options
  - Write operations: create, update, and delete resources (each can be independently enabled/disabled)
  - Support for all Kubernetes resource types, including custom resources
- Connects to Kubernetes cluster using kubeconfig
- Helm support with fine-grained control
  - Helm releases management (list, get, install, upgrade, uninstall)
  - Helm repositories management (list, add, remove)
  - Each operation can be independently enabled/disabled

## Preview
> Interaction through cursor

![](https://raw.githubusercontent.com/silenceper/mcp-k8s/HEAD/docs/create-deployment.png)

## Use Cases

### 1. Kubernetes Resource Management via LLM

- **Interactive Resource Management**: Manage Kubernetes resources through natural language interaction with LLM, eliminating the need to memorize complex kubectl commands
- **Batch Operations**: Describe complex batch operation requirements in natural language, letting LLM translate them into specific resource operations
- **Resource Status Queries**: Query cluster resource status using natural language and receive easy-to-understand responses

### 2. Automated Operations Scenarios

- **Intelligent Operations Assistant**: Serve as an intelligent assistant for operators in daily cluster management tasks
- **Problem Diagnosis**: Assist in cluster problem diagnosis through natural language problem descriptions
- **Configuration Review**: Leverage LLM's understanding capabilities to help review and optimize Kubernetes resource configurations

### 3. Development and Testing Support

- **Quick Prototype Validation**: Developers can quickly create and validate resource configurations through natural language
- **Environment Management**: Simplify test environment resource management, quickly create, modify, and clean up test resources
- **Configuration Generation**: Automatically generate resource configurations that follow best practices based on requirement descriptions

### 4. Education and Training Scenarios

- **Interactive Learning**: Newcomers can learn Kubernetes concepts and operations through natural language interaction
- **Best Practice Guidance**: LLM provides best practice suggestions during resource operations
- **Error Explanation**: Provide easy-to-understand error explanations and correction suggestions when operations fail

## Architecture

### 1. Project Overview

An stdio-based MCP server that connects to Kubernetes clusters and provides the following capabilities:
- Query Kubernetes resource types (including built-in resources and CRDs)
- CRUD operations on Kubernetes resources (with configurable write operations)
- Helm operations for release and repository management

### 2. Technical Stack

- Go
- [mcp-go](https://github.com/mark3labs/mcp-go) SDK
- Kubernetes client-go library
- Helm v3 client library
- Stdio for communication

### 3. Core Components

1. **MCP Server**: Uses mcp-go's `mcp-k8s` package to create an stdio-based MCP server
2. **K8s Client**: Uses client-go to connect to Kubernetes clusters
3. **Helm Client**: Uses Helm v3 library for Helm operations
4. **Tool Implementations**: Implements various MCP tools for different Kubernetes operations

### 4. Available Tools

#### Resource Type Query Tools
- `get_api_resources`: Get all supported API resource types in the cluster

#### Resource Operation Tools
- `get_resource`: Get detailed information about a specific resource
- `list_resources`: List all instances of a resource type
- `create_resource`: Create new resources (can be disabled)
- `update_resource`: Update existing resources (can be disabled)
- `delete_resource`: Delete resources (can be disabled)

#### Helm Operation Tools
- `list_helm_releases`: List all Helm releases in the cluster
- `get_helm_release`: Get detailed information about a specific Helm release
- `install_helm_chart`: Install a Helm chart (can be disabled)
- `upgrade_helm_chart`: Upgrade a Helm release (can be disabled)
- `uninstall_helm_chart`: Uninstall a Helm release (can be disabled)
- `list_helm_repositories`: List configured Helm repositories
- `add_helm_repository`: Add a new Helm repository (can be disabled)
- `remove_helm_repository`: Remove a Helm repository (can be disabled)

## Usage

mcp-k8s supports three communication modes:

### 1. Stdio Mode (Default)

In stdio mode, mcp-k8s communicates with the client through standard input/output streams. This is the default mode and is suitable for most use cases.

```bash
# Run in stdio mode (default)
{
    "mcpServers":
    {
        "mcp-k8s":
        {
            "command": "/path/to/mcp-k8s",
            "args":
            [
                "--kubeconfig",
                "/path/to/kubeconfig",
                "--enable-create",
                "--enable-delete",
                "--enable-update",
                "--enable-list",
                "--enable-helm-install",
                "--enable-helm-upgrade"
            ]
        }
    }
}
```

### 2. SSE Mode

In SSE (Server-Sent Events) mode, mcp-k8s exposes an HTTP endpoint to mcp client.
You can deploy the service on a remote server (but you need to pay attention to security)

```bash
# Run in SSE mode
./bin/mcp-k8s --kubeconfig=/path/to/kubeconfig --transport=sse --port=8080 --host=localhost --enable-create --enable-delete --enable-list --enable-update --enable-helm-install
# This command will open all operations
```

mcp config
```json
{
  "mcpServers": {
    "mcp-k8s": {
      "url": "http://localhost:8080/sse",
      "args": []
    }
  }
}
```

SSE mode configuration:
- `--transport`: Set to "sse" to enable SSE mode
- `--port`: HTTP server port (default: 8080)
- `--host`: HTTP server host (default: "localhost")

### 3. Streamable HTTP Mode

In Streamable HTTP mode, mcp-k8s exposes an HTTP endpoint that supports both direct HTTP responses and SSE streams. This mode provides better flexibility and supports streaming output.

```bash
# Run in Streamable HTTP mode
./bin/mcp-k8s --kubeconfig=/path/to/kubeconfig --transport=streamable-http --port=8080 --host=localhost --endpoint-path=/mcp --enable-create --enable-delete --enable-list --enable-update --enable-helm-install
```

mcp config
```json
{
  "mcpServers": {
    "mcp-k8s": {
      "url": "http://localhost:8080/mcp",
      "args": []
    }
  }
}
```

Streamable HTTP mode configuration:
- `--transport`: Set to "streamable-http" to enable Streamable HTTP mode
- `--port`: HTTP server port (default: 8080)
- `--host`: HTTP server host (default: "localhost")
- `--endpoint-path`: Endpoint path for the MCP server (default: "/mcp")

### 4. Docker environment
#### SSE Mode

1. Complete Example
Assuming your image name is mcp-k8s and you need to map ports and set environment parameters, you can run:
```bash
docker run --rm -p 8080:8080 -i -v ~/.kube/config:/root/.kube/config ghcr.io/silenceper/mcp-k8s:latest --transport=sse
```

#### Streamable HTTP Mode

```bash
docker run --rm -p 8080:8080 -i -v ~/.kube/config:/root/.kube/config ghcr.io/silenceper/mcp-k8s:latest --transport=streamable-http --endpoint-path=/mcp
```
#### stdio Mode

```json
{
  "mcpServers": {
    "mcp-k8s": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "-v",
        "~/.kube/config:/root/.kube/config",
        "--rm",
        "ghcr.io/silenceper/mcp-k8s:latest"
      ]
    }
  }
}
```


## Getting Started

### Direct Usage
You can directly download the binary for your platform from the [releases page](https://github.com/silenceper/mcp-k8s/releases) and use it immediately.

### Go Install

```bash
go install github.com/silenceper/mcp-k8s/cmd/mcp-k8s@latest
```

### Build

#### Using Makefile (Recommended)

The Makefile automatically injects version information from the VERSION file:

```bash
git clone https://github.com/silenceper/mcp-k8s.git
cd mcp-k8s
make build
```

This will build with version information injected via ldflags.

#### Direct Build

```bash
git clone https://github.com/silenceper/mcp-k8s.git
cd mcp-k8s
go build -o bin/mcp-k8s cmd/mcp-k8s/main.go
```

Note: Direct build will show version as "dev" unless you specify ldflags manually.

### Command Line Arguments

You can use `mcp-k8s --help` to see all available options, or `mcp-k8s --version` to check the version.

#### Kubernetes Resource Operations
- `--kubeconfig`: Path to Kubernetes configuration file (uses default config if not specified)
- `--enable-create`: Enable resource creation operations (default: false)
- `--enable-update`: Enable resource update operations (default: false)
- `--enable-delete`: Enable resource deletion operations (default: false)
- `--enable-list`: Enable resource list operations (default: true)

#### Helm Operations
- `--enable-helm-release-list`: Enable Helm release list operations (default: true)
- `--enable-helm-release-get`: Enable Helm release get operations (default: true)
- `--enable-helm-install`: Enable Helm chart installation (default: false)
- `--enable-helm-upgrade`: Enable Helm chart upgrade (default: false)
- `--enable-helm-uninstall`: Enable Helm chart uninstallation (default: false)
- `--enable-helm-repo-list`: Enable Helm repository list operations (default: true)
- `--enable-helm-repo-add`: Enable Helm repository add operations (default: false)
- `--enable-helm-repo-remove`: Enable Helm repository remove operations (default: false)

#### Transport Configuration
- `--transport`: Transport type (stdio, sse, or streamable-http) (default: "stdio")
- `--host`: Host for HTTP transport (SSE or Streamable HTTP) (default: "localhost")
- `--port`: TCP port for HTTP transport (SSE or Streamable HTTP) (default: 8080)
- `--endpoint-path`: Endpoint path for Streamable HTTP transport (default: "/mcp")

#### Version Information
- `--version`: Display version information including version, commit hash, and build date
- `--help` or `-h`: Display help information

### Testing Streamable HTTP

To test if Streamable HTTP mode is working correctly, you can use the provided test script:

```bash
# Start the server in one terminal
./bin/mcp-k8s --transport=streamable-http --port=8080 --enable-list

# In another terminal, run the test script
./test_streamable_http.sh
```

For detailed testing instructions, see [TEST_STREAMABLE_HTTP.md](./TEST_STREAMABLE_HTTP.md).

### Integration with MCP Clients

mcp-k8s is an stdio-based MCP server that can be integrated with any MCP-compatible LLM client. Refer to your MCP client's documentation for integration instructions.

## Security Considerations

- Write operations are strictly controlled through independent configuration switches
- Uses RBAC to ensure K8s client has only necessary permissions
- Validates all user inputs to prevent injection attacks
- Helm operations follow the same security principles with read operations enabled by default and write operations disabled by default

## Follow WeChat Official Account
![AI技术小林](https://raw.githubusercontent.com/silenceper/mcp-k8s/HEAD/docs/qrcode.png)
