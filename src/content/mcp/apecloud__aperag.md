---
name: "apecloud/ApeRAG"
description: "Production-ready RAG platform combining Graph RAG, vector search, and full-text search. Best choice for building your own Knowledge Graph and for Context Engineering"
description_tr: "Grafik RAG, vektör arama ve tam metin aramasını birleştiren, üretime hazır RAG platformu. Kendi Knowledge Graph'ınızı oluşturmak ve Context Engineering için ideal seçim."
category: "Knowledge & Memory"
repo: "apecloud/ApeRAG"
stars: 1176
url: "https://github.com/apecloud/ApeRAG"
body_length: 10516
license: "Apache-2.0"
language: "Python"
body_tr: |-
  # ApeRAG
  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/apecloud/ApeRAG)](https://archestra.ai/mcp-catalog/apecloud__aperag)

  ![HarryPotterKG2.png](https://raw.githubusercontent.com/apecloud/ApeRAG/HEAD/docs%2Fen-US%2Fimages%2FHarryPotterKG2.png)

  ![chat2.png](https://raw.githubusercontent.com/apecloud/ApeRAG/HEAD/docs%2Fen-US%2Fimages%2Fchat2.png)


  ApeRAG, Graph RAG, vektör arama ve tam metin aramasını gelişmiş AI ajanlarıyla birleştiren üretim hazır bir RAG (Retrieval-Augmented Generation) platformudur. Hibrit retrieval, çok modlu belge işleme, akıllı ajanlar ve kurumsal sınıf yönetim özellikleriyle gelişmiş AI uygulamaları oluşturun.

  ApeRAG, kendi Bilgi Grafiğinizi oluşturmak, Context Engineering yapmak ve bilgi tabanınız üzerinde bağımsız olarak arama yapabilen ve akıl yürütebilen akıllı AI ajanlarını dağıtmak için en iyi seçimdir.

  [阅读中文文档](README-zh.md)

  - [Hızlı Başlangıç](#hızlı-başlangıç)
  - [Temel Özellikler](#temel-özellikler)
  - [Kubernetes Dağıtımı (Üretim için Önerilir)](#kubernetes-dağıtımı-üretim-için-önerilir)
  - [Geliştirme](./docs/en-US/development-guide.md)
  - [Docker İmajı Oluşturma](./docs/en-US/build-docker-image.md)
  - [Teşekkürler](#teşekkürler)
  - [Lisans](#lisans)

  ## Hızlı Başlangıç

  > ApeRAG'ı yüklemeden önce, makinenizin aşağıdaki minimum sistem gereksinimlerini karşıladığından emin olun:
  >
  > - CPU >= 2 Çekirdek
  > - RAM >= 4 GiB
  > - Docker & Docker Compose

  ApeRAG'ı başlatmanın en kolay yolu Docker Compose aracılığıyladır. Aşağıdaki komutları çalıştırmadan önce, makinenizde [Docker](https://docs.docker.com/get-docker/) ve [Docker Compose](https://docs.docker.com/compose/install/) kurulu olduğundan emin olun:

  ```bash
  git clone https://github.com/apecloud/ApeRAG.git
  cd ApeRAG
  cp envs/env.template .env
  docker-compose up -d --pull always
  ```

  Çalıştıktan sonra, ApeRAG'a tarayıcınızda erişebilirsiniz:
  - **Web Arayüzü**: http://localhost:3000/web/
  - **API Belgeleri**: http://localhost:8000/docs

  #### MCP (Model Context Protocol) Desteği

  ApeRAG, [MCP (Model Context Protocol)](https://modelcontextprotocol.io/) entegrasyonunu destekler ve AI asistanlarının bilgi tabanınızla doğrudan etkileşim kurmasını sağlar. Hizmetleri başlattıktan sonra, MCP istemcinizi aşağıdakiyle yapılandırın:

  ```json
  {
    "mcpServers": {
      "aperag-mcp": {
        "url": "http://localhost:8000/mcp/",
        "headers": {
          "Authorization": "Bearer your-api-key-here"
        }
      }
    }
  }
  ```

  **Kimlik Doğrulama** (öncelik sırasına göre):
  1. **HTTP Yetkilendirme Başlığı** (Önerilir): `Authorization: Bearer your-api-key`
  2. **Ortam Değişkeni** (Yedek): `APERAG_API_KEY=your-api-key`

  **Önemli**: Lokal değilse dağıtılan API kaynağını kullanın (örn. `https://your-host/mcp/`). `your-api-key-here` yerine ApeRAG ayarlarınızdan geçerli bir API anahtarını yazın.

  MCP sunucusu şunları sağlar:
  - **Koleksiyon tarama**: Bilgi koleksiyonlarınızı listeleyin ve keşfedin
  - **Hibrit arama**: Vektör, tam metin ve grafik yöntemlerini kullanarak arama yapın
  - **Akıllı sorgulama**: Belgeleriniz hakkında doğal dil soruları sorun

  #### Geliştirilmiş Belge Ayrıştırma

  Geliştirilmiş belge ayrıştırma yetenekleri için, ApeRAG karmaşık belgeler, tablolar ve formüller için üstün ayrıştırma sağlayan MinerU tarafından desteklenen bir **gelişmiş belge ayrıştırma hizmeti** destekler.

  <details>
  <summary><strong>Geliştirilmiş Belge Ayrıştırma Komutları</strong></summary>

  ```bash
  # Gelişmiş belge ayrıştırma hizmetini etkinleştir
  DOCRAY_HOST=http://aperag-docray:8639 docker compose --profile docray up -d

  # GPU hızlandırmasıyla gelişmiş ayrıştırmayı etkinleştir 
  DOCRAY_HOST=http://aperag-docray-gpu:8639 docker compose --profile docray-gpu up -d
  ```

  Veya Makefile kısayollarını kullanın ([GNU Make](https://www.gnu.org/software/make/) gerekir):
  ```bash
  # Gelişmiş belge ayrıştırma hizmetini etkinleştir
  make compose-up WITH_DOCRAY=1

  # GPU hızlandırmasıyla gelişmiş ayrıştırmayı etkinleştir (önerilir)
  make compose-up WITH_DOCRAY=1 WITH_GPU=1
  ```

  </details>

  #### Geliştirme & Katkı

  Kaynak kodu geliştirmesi, gelişmiş konfigürasyonlar veya ApeRAG'a katkı vermekle ilgilenen geliştiriciler için, lütfen ayrıntılı kurulum talimatları için [Geliştirme Rehberimize](./docs/en-US/development-guide.md) bakınız.

  ## Temel Özellikler

  **1. Gelişmiş İndeks Türleri**:
  Optimal retrieval için beş kapsamlı indeks türü: **Vektör**, **Tam metin**, **Grafik**, **Özet** ve **Vision** - çok boyutlu belge anlayışı ve arama yetenekleri sağlar.

  **2. Akıllı AI Ajanları**:
  MCP (Model Context Protocol) tool desteğine sahip yerleşik AI ajanları, ilgili koleksiyonları otomatik olarak tanımlayabilir, içeriği akıllıca arayabilir ve kapsamlı soru cevaplama için web arama yetenekleri sağlar.

  **3. Geliştirilmiş Graph RAG ve Varlık Normalleştirmesi**:
  Daha temiz bilgi grafikleri ve iyileştirilmiş ilişkisel anlayış için gelişmiş varlık normalleştirmesi (varlık birleştirme) ile derin şekilde değiştirilmiş LightRAG uygulaması.

  **4. Çok Modlu İşleme & Vision Desteği**:
  Görüntüler, grafikler ve görsel içerik analizi için vision yetenekleri de dahil olmak üzere eksiksiz çok modlu belge işleme ve geleneksel metin işleme.

  **5. Hibrit Retrieval Motoru**:
  Graph RAG, vektör arama, tam metin arama, özet tabanlı retrieval ve vision tabanlı aramayı birleştiren kapsamlı belge anlayışı için karmaşık retrieval sistemi.

  **6. MinerU Entegrasyonu**:
  MinerU teknolojisi tarafından desteklenen gelişmiş belge ayrıştırma hizmeti, karmaşık belgeler, tablolar, formüller ve bilimsel içerik için isteğe bağlı GPU hızlandırması ile üstün ayrıştırma sağlar.

  **7. Üretim Sınıfı Dağıtım**:
  Üretim sınıfı veritabanlarının (PostgreSQL, Redis, Qdrant, Elasticsearch, Neo4j) basitleştirilmiş dağıtımı için tam Kubernetes desteği, Helm grafikleri ve KubeBlocks entegrasyonu.

  **8. Kurumsal Yönetim**:
  Yerleşik denetim günlüğü, LLM model yönetimi, grafik görselleştirmesi, kapsamlı belge yönetimi arayüzü ve ajanlar iş akışı yönetimi.

  **9. MCP Entegrasyonu**:
  Model Context Protocol (MCP) için tam destek, AI asistanları ve araçlarla sorunsuz entegrasyon, doğrudan bilgi tabanı erişimi ve akıllı sorgulama sağlar.

  **10. Geliştirici Dostu**:
  FastAPI backend, React frontend, Celery ile async görev işleme, kapsamlı testler, kapsamlı geliştirme kılavuzları ve kolay katkı ve özelleştirme için ajanlar geliştirme framework'ü.

  ## Kubernetes Dağıtımı (Üretim için Önerilir)

  > **Yüksek kullanılabilirlik ve ölçeklenebilirlik ile kurumsal sınıf dağıtım**

  Sağlanan Helm grafiğini kullanarak ApeRAG'ı Kubernetes'e dağıtın. Bu yaklaşım yüksek kullanılabilirlik, ölçeklenebilirlik ve üretim sınıfı yönetim yetenekleri sunar.

  ### Ön Koşullar

  *   [Kubernetes kümesi](https://kubernetes.io/docs/setup/) (v1.20+)
  *   Kümenize yapılandırılmış ve bağlı [`kubectl`](https://kubernetes.io/docs/tasks/tools/)
  *   [Helm v3+](https://helm.sh/docs/intro/install/) yüklenmiş

  ### Depoyu Klonlayın

  İlk olarak, dağıtım dosyalarını almak için ApeRAG deposunu klonlayın:

  ```bash
  git clone https://github.com/apecloud/ApeRAG.git
  cd ApeRAG
  ```

  ### Adım 1: Veritabanı Hizmetlerini Dağıtın

  ApeRAG, PostgreSQL, Redis, Qdrant ve Elasticsearch gerektirir. İki seçeneğiniz vardır:

  **Seçenek A: Mevcut veritabanlarını kullanın** - Kümenizde zaten bu veritabanlar çalışıyorsa, `deploy/aperag/values.yaml` dosyasını düzenleyerek veritabanı bağlantı ayrıntılarını yapılandırın, ardından Adım 2'ye geçin.

  **Seçenek B: KubeBlocks ile veritabanlarını dağıtın** - Otomatik veritabanı dağıtımını kullanın (veritabanı bağlantıları önceden yapılandırılmış):

  ```bash
  # Veritabanı dağıtım betiklerine gidin
  cd deploy/databases/

  # (İsteğe bağlı) Konfigürasyonu gözden geçirin - varsayılanlar çoğu durum için çalışır
  # edit 00-config.sh

  # KubeBlocks'ı yükleyin ve veritabanlarını dağıtın
  bash ./01-prepare.sh          # KubeBlocks'ı yükler
  bash ./02-install-database.sh # PostgreSQL, Redis, Qdrant, Elasticsearch'ü dağıtır

  # Veritabanı dağıtımını izleyin
  kubectl get pods -n default

  # Adım 2 için proje köküne dönün
  cd ../../
  ```

  Devam etmeden önce tüm veritabanı pod'larının `Running` durumunda olmasını bekleyin.

  ### Adım 2: ApeRAG Uygulamasını Dağıtın

  ```bash
  # Adım 1'de KubeBlocks ile veritabanlarını dağıttıysanız, veritabanı bağlantıları önceden yapılandırılmıştır
  # Mevcut veritabanları kullanıyorsanız, deploy/aperag/values.yaml dosyasını bağlantı ayrıntılarıyla düzenleyin

  # ApeRAG'ı dağıtın
  helm install aperag ./deploy/aperag --namespace default --create-namespace

  # ApeRAG dağıtımını izleyin
  kubectl get pods -n default -l app.kubernetes.io/instance=aperag
  ```

  ### Konfigürasyon Seçenekleri

  **Kaynak Gereksinimleri**: Varsayılan olarak, [`doc-ray`](https://github.com/apecloud/doc-ray) hizmeti (4+ CPU çekirdeği, 8GB+ RAM gerekir) içerir. Devre dışı bırakmak için: `values.yaml`'de `docray.enabled: false` olarak ayarlayın.

  **Gelişmiş Ayarlar**: İmajlar, kaynaklar ve Ingress ayarları dahil olmak üzere ek konfigürasyon seçenekleri için `values.yaml` dosyasını gözden geçirin.

  ### Dağıtımınıza Erişin

  Dağıtıldıktan sonra, port forwarding kullanarak ApeRAG'a erişin:

  ```bash
  # Hızlı erişim için portları ilet
  kubectl port-forward svc/aperag-frontend 3000:3000 -n default
  kubectl port-forward svc/aperag-api 8000:8000 -n default

  # Tarayıcıda erişin
  # Web Arayüzü: http://localhost:3000
  # API Belgeleri: http://localhost:8000/docs
  ```

  Üretim ortamları için, dış erişim için `values.yaml`'de Ingress yapılandırın.

  ### Sorun Giderme

  **Veritabanı Sorunları**: KubeBlocks yönetimi, kimlik bilgileri ve kaldırma yordamları için `deploy/databases/README.md` dosyasına bakınız.

  **Pod Durumu**: Dağıtım sorunları için pod günlüklerini kontrol edin:
  ```bash
  kubectl logs -f deployment/aperag-api -n default
  kubectl logs -f deployment/aperag-frontend -n default
  ```

  ## Teşekkürler

  ApeRAG, birkaç mükemmel açık kaynak projesini entegre eder ve bunları temel alır:

  ### LightRAG
  ApeRAG'daki grafik tabanlı bilgi retrieval yetenekleri, [LightRAG](https://github.com/HKUDS/LightRAG)'ın derin şekilde değiştirilmiş bir sürümü tarafından desteklenir:
  - **Makale**: "LightRAG: Simple and Fast Retrieval-Augmented Generation" ([arXiv:2410.05779](https://arxiv.org/abs/2410.05779))
  - **Yazarlar**: Zirui Guo, Lianghao Xia, Yanhua Yu, Tu Ao, Chao Huang
  - **Lisans**: MIT Lisansı

  LightRAG'ı üretim sınıfı eşzamanlı işleme, dağıtılmış görev kuyrukları (Celery/Prefect) ve durumsuz işlemleri desteklemek için kapsamlı şekilde değiştirdik. Ayrıntılar için [LightRAG değişiklikleri değişim günlüğümüze](./aperag/graph/changelog.md) bakınız.

  ## Topluluk

  * [Discord](https://discord.gg/FsKpXukFuB)
  * [Feishu](docs%2Fen-US%2Fimages%2Ffeishu-qr-code.png)



  ## Star Geçmişi

  ![star-history-2025922.png](https://raw.githubusercontent.com/apecloud/ApeRAG/HEAD/docs%2Fen-US%2Fimages%2Fstar-history-2025922.png)

  ## Lisans

  ApeRAG, Apache Lisansı 2.0 kapsamında lisanslanmıştır. Ayrıntılar için [LICENSE](./LICENSE) dosyasına bakınız.
---

# ApeRAG
[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/apecloud/ApeRAG)](https://archestra.ai/mcp-catalog/apecloud__aperag)

![HarryPotterKG2.png](https://raw.githubusercontent.com/apecloud/ApeRAG/HEAD/docs%2Fen-US%2Fimages%2FHarryPotterKG2.png)

![chat2.png](https://raw.githubusercontent.com/apecloud/ApeRAG/HEAD/docs%2Fen-US%2Fimages%2Fchat2.png)


ApeRAG is a production-ready RAG (Retrieval-Augmented Generation) platform that combines Graph RAG, vector search, and full-text search with advanced AI agents. Build sophisticated AI applications with hybrid retrieval, multimodal document processing, intelligent agents, and enterprise-grade management features.

ApeRAG is the best choice for building your own Knowledge Graph, Context Engineering, and deploying intelligent AI agents that can autonomously search and reason across your knowledge base.

[阅读中文文档](README-zh.md)

- [Quick Start](#quick-start)
- [Key Features](#key-features)
- [Kubernetes Deployment (Recommended for Production)](#kubernetes-deployment-recommended-for-production)
- [Development](./docs/en-US/development-guide.md)
- [Build Docker Image](./docs/en-US/build-docker-image.md)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Quick Start

> Before installing ApeRAG, make sure your machine meets the following minimum system requirements:
>
> - CPU >= 2 Core
> - RAM >= 4 GiB
> - Docker & Docker Compose

The easiest way to start ApeRAG is through Docker Compose. Before running the following commands, make sure that [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) are installed on your machine:

```bash
git clone https://github.com/apecloud/ApeRAG.git
cd ApeRAG
cp envs/env.template .env
docker-compose up -d --pull always
```

After running, you can access ApeRAG in your browser at:
- **Web Interface**: http://localhost:3000/web/
- **API Documentation**: http://localhost:8000/docs

#### MCP (Model Context Protocol) Support

ApeRAG supports [MCP (Model Context Protocol)](https://modelcontextprotocol.io/) integration, allowing AI assistants to interact with your knowledge base directly. After starting the services, configure your MCP client with:

```json
{
  "mcpServers": {
    "aperag-mcp": {
      "url": "http://localhost:8000/mcp/",
      "headers": {
        "Authorization": "Bearer your-api-key-here"
      }
    }
  }
}
```

**Authentication** (by priority):
1. **HTTP Authorization Header** (Recommended): `Authorization: Bearer your-api-key`
2. **Environment Variable** (Fallback): `APERAG_API_KEY=your-api-key`

**Important**: Use your deployed API origin if not local (e.g. `https://your-host/mcp/`). Replace `your-api-key-here` with a valid API key from your ApeRAG settings.

The MCP server provides:
- **Collection browsing**: List and explore your knowledge collections
- **Hybrid search**: Search using vector, full-text, and graph methods
- **Intelligent querying**: Ask natural language questions about your documents

#### Enhanced Document Parsing

For enhanced document parsing capabilities, ApeRAG supports an **advanced document parsing service** powered by MinerU, which provides superior parsing for complex documents, tables, and formulas. 

<details>
<summary><strong>Enhanced Document Parsing Commands</strong></summary>

```bash
# Enable advanced document parsing service
DOCRAY_HOST=http://aperag-docray:8639 docker compose --profile docray up -d

# Enable advanced parsing with GPU acceleration 
DOCRAY_HOST=http://aperag-docray-gpu:8639 docker compose --profile docray-gpu up -d
```

Or use the Makefile shortcuts (requires [GNU Make](https://www.gnu.org/software/make/)):
```bash
# Enable advanced document parsing service
make compose-up WITH_DOCRAY=1

# Enable advanced parsing with GPU acceleration (recommended)
make compose-up WITH_DOCRAY=1 WITH_GPU=1
```

</details>

#### Development & Contributing

For developers interested in source code development, advanced configurations, or contributing to ApeRAG, please refer to our [Development Guide](./docs/en-US/development-guide.md) for detailed setup instructions.

## Key Features

**1. Advanced Index Types**:
Five comprehensive index types for optimal retrieval: **Vector**, **Full-text**, **Graph**, **Summary**, and **Vision** - providing multi-dimensional document understanding and search capabilities.

**2. Intelligent AI Agents**:
Built-in AI agents with MCP (Model Context Protocol) tool support that can automatically identify relevant collections, search content intelligently, and provide web search capabilities for comprehensive question answering.

**3. Enhanced Graph RAG with Entity Normalization**:
Deeply modified LightRAG implementation with advanced entity normalization (entity merging) for cleaner knowledge graphs and improved relational understanding.

**4. Multimodal Processing & Vision Support**:
Complete multimodal document processing including vision capabilities for images, charts, and visual content analysis alongside traditional text processing.

**5. Hybrid Retrieval Engine**:
Sophisticated retrieval system combining Graph RAG, vector search, full-text search, summary-based retrieval, and vision-based search for comprehensive document understanding.

**6. MinerU Integration**:
Advanced document parsing service powered by MinerU technology, providing superior parsing for complex documents, tables, formulas, and scientific content with optional GPU acceleration.

**7. Production-Grade Deployment**:
Full Kubernetes support with Helm charts and KubeBlocks integration for simplified deployment of production-grade databases (PostgreSQL, Redis, Qdrant, Elasticsearch, Neo4j).

**8. Enterprise Management**:
Built-in audit logging, LLM model management, graph visualization, comprehensive document management interface, and agent workflow management.

**9. MCP Integration**:
Full support for Model Context Protocol (MCP), enabling seamless integration with AI assistants and tools for direct knowledge base access and intelligent querying.

**10. Developer Friendly**:
FastAPI backend, React frontend, async task processing with Celery, extensive testing, comprehensive development guides, and agent development framework for easy contribution and customization.

## Kubernetes Deployment (Recommended for Production)

> **Enterprise-grade deployment with high availability and scalability**

Deploy ApeRAG to Kubernetes using our provided Helm chart. This approach offers high availability, scalability, and production-grade management capabilities.

### Prerequisites

*   [Kubernetes cluster](https://kubernetes.io/docs/setup/) (v1.20+)
*   [`kubectl`](https://kubernetes.io/docs/tasks/tools/) configured and connected to your cluster
*   [Helm v3+](https://helm.sh/docs/intro/install/) installed

### Clone the Repository

First, clone the ApeRAG repository to get the deployment files:

```bash
git clone https://github.com/apecloud/ApeRAG.git
cd ApeRAG
```

### Step 1: Deploy Database Services

ApeRAG requires PostgreSQL, Redis, Qdrant, and Elasticsearch. You have two options:

**Option A: Use existing databases** - If you already have these databases running in your cluster, edit `deploy/aperag/values.yaml` to configure your database connection details, then skip to Step 2.

**Option B: Deploy databases with KubeBlocks** - Use our automated database deployment (database connections are pre-configured):

```bash
# Navigate to database deployment scripts
cd deploy/databases/

# (Optional) Review configuration - defaults work for most cases
# edit 00-config.sh

# Install KubeBlocks and deploy databases
bash ./01-prepare.sh          # Installs KubeBlocks
bash ./02-install-database.sh # Deploys PostgreSQL, Redis, Qdrant, Elasticsearch

# Monitor database deployment
kubectl get pods -n default

# Return to project root for Step 2
cd ../../
```

Wait for all database pods to be in `Running` status before proceeding.

### Step 2: Deploy ApeRAG Application

```bash
# If you deployed databases with KubeBlocks in Step 1, database connections are pre-configured
# If you're using existing databases, edit deploy/aperag/values.yaml with your connection details

# Deploy ApeRAG
helm install aperag ./deploy/aperag --namespace default --create-namespace

# Monitor ApeRAG deployment
kubectl get pods -n default -l app.kubernetes.io/instance=aperag
```

### Configuration Options

**Resource Requirements**: By default, includes [`doc-ray`](https://github.com/apecloud/doc-ray) service (requires 4+ CPU cores, 8GB+ RAM). To disable: set `docray.enabled: false` in `values.yaml`.

**Advanced Settings**: Review `values.yaml` for additional configuration options including images, resources, and Ingress settings.

### Access Your Deployment

Once deployed, access ApeRAG using port forwarding:

```bash
# Forward ports for quick access
kubectl port-forward svc/aperag-frontend 3000:3000 -n default
kubectl port-forward svc/aperag-api 8000:8000 -n default

# Access in browser
# Web Interface: http://localhost:3000
# API Documentation: http://localhost:8000/docs
```

For production environments, configure Ingress in `values.yaml` for external access.

### Troubleshooting

**Database Issues**: See `deploy/databases/README.md` for KubeBlocks management, credentials, and uninstall procedures.

**Pod Status**: Check pod logs for any deployment issues:
```bash
kubectl logs -f deployment/aperag-api -n default
kubectl logs -f deployment/aperag-frontend -n default
```

## Acknowledgments

ApeRAG integrates and builds upon several excellent open-source projects:

### LightRAG
The graph-based knowledge retrieval capabilities in ApeRAG are powered by a deeply modified version of [LightRAG](https://github.com/HKUDS/LightRAG):
- **Paper**: "LightRAG: Simple and Fast Retrieval-Augmented Generation" ([arXiv:2410.05779](https://arxiv.org/abs/2410.05779))
- **Authors**: Zirui Guo, Lianghao Xia, Yanhua Yu, Tu Ao, Chao Huang
- **License**: MIT License

We have extensively modified LightRAG to support production-grade concurrent processing, distributed task queues (Celery/Prefect), and stateless operations. See our [LightRAG modifications changelog](./aperag/graph/changelog.md) for details.

## Community

* [Discord](https://discord.gg/FsKpXukFuB)
* [Feishu](docs%2Fen-US%2Fimages%2Ffeishu-qr-code.png)



## Star History

![star-history-2025922.png](https://raw.githubusercontent.com/apecloud/ApeRAG/HEAD/docs%2Fen-US%2Fimages%2Fstar-history-2025922.png)

## License

ApeRAG is licensed under the Apache License 2.0. See the [LICENSE](./LICENSE) file for details.
