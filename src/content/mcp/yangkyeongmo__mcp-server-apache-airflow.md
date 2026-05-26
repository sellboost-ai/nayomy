---
name: "yangkyeongmo/mcp-server-apache-airflow"
description: "MCP server that connects to Apache Airflow using official client."
category: "Developer Tools"
repo: "yangkyeongmo/mcp-server-apache-airflow"
stars: 165
url: "https://github.com/yangkyeongmo/mcp-server-apache-airflow"
body_length: 20009
license: "MIT"
language: "Python"
homepage: "https://pypi.org/project/mcp-server-apache-airflow/"
body_tr: |-
  [![MseeP.ai Security Assessment Badge](https://mseep.net/pr/yangkyeongmo-mcp-server-apache-airflow-badge.png)](https://mseep.ai/app/yangkyeongmo-mcp-server-apache-airflow)

  # mcp-server-apache-airflow

  [![smithery badge](https://smithery.ai/badge/@yangkyeongmo/mcp-server-apache-airflow)](https://smithery.ai/server/@yangkyeongmo/mcp-server-apache-airflow)
  ![PyPI - Downloads](https://img.shields.io/pypi/dm/mcp-server-apache-airflow)

  Apache Airflow için bir Model Context Protocol (MCP) sunucu uygulaması. MCP istemcileriyle sorunsuz entegrasyon sağlar. Bu proje, Model Context Protocol aracılığıyla Apache Airflow ile etkileşim kurmanın standartlaştırılmış bir yolunu sunar.

  <a href="https://glama.ai/mcp/servers/e99b6vx9lw">
    
  </a>

  ## Hakkında

  Bu proje, Apache Airflow'un REST API'sini sarmalayan bir [Model Context Protocol](https://modelcontextprotocol.io/introduction) sunucusu uygular ve MCP istemcilerinin Airflow ile standartlaştırılmış bir şekilde etkileşim kurmasını sağlar. Uyumluluk ve bakımlanabilirliği sağlamak için resmi Apache Airflow istemci kütüphanesini kullanır.

  ## Özellik Uygulama Durumu

  | Özellik                          | API Yolu                                                                                      | Durum |
  | -------------------------------- | --------------------------------------------------------------------------------------------- | ------ |
  | **DAG Yönetimi**         |                                                                                               |        |
  | DAG'ları Listele                        | `/api/v1/dags`                                                                              | ✅     |
  | DAG Detaylarını Al                  | `/api/v1/dags/{dag_id}`                                                                     | ✅     |
  | DAG'ı Duraklat                        | `/api/v1/dags/{dag_id}`                                                                     | ✅     |
  | DAG'ı Devam Ettir                      | `/api/v1/dags/{dag_id}`                                                                     | ✅     |
  | DAG'ı Güncelle                       | `/api/v1/dags/{dag_id}`                                                                     | ✅     |
  | DAG'ı Sil                       | `/api/v1/dags/{dag_id}`                                                                     | ✅     |
  | DAG Kaynağını Al                   | `/api/v1/dagSources/{file_token}`                                                           | ✅     |
  | Birden Fazla DAG'ı Düzelt              | `/api/v1/dags`                                                                              | ✅     |
  | DAG Dosyasını Yeniden Ayrıştır                 | `/api/v1/dagSources/{file_token}/reparse`                                                   | ✅     |
  | **DAG Çalıştırmaları**               |                                                                                               |        |
  | DAG Çalıştırmalarını Listele                    | `/api/v1/dags/{dag_id}/dagRuns`                                                             | ✅     |
  | DAG Çalıştırması Oluştur                   | `/api/v1/dags/{dag_id}/dagRuns`                                                             | ✅     |
  | DAG Çalıştırması Detaylarını Al              | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}`                                                | ✅     |
  | DAG Çalıştırmasını Güncelle                   | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}`                                                | ✅     |
  | DAG Çalıştırmasını Sil                   | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}`                                                | ✅     |
  | DAG Çalıştırmalarını Toplu Al               | `/api/v1/dags/~/dagRuns/list`                                                               | ✅     |
  | DAG Çalıştırmasını Temizle                    | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}/clear`                                          | ✅     |
  | DAG Çalıştırması Notu Ayarla                 | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}/setNote`                                        | ✅     |
  | Upstream Veri Seti Olaylarını Al      | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}/upstreamDatasetEvents`                          | ✅     |
  | **Görevler**                  |                                                                                               |        |
  | DAG Görevlerini Listele                   | `/api/v1/dags/{dag_id}/tasks`                                                               | ✅     |
  | Görev Detaylarını Al                 | `/api/v1/dags/{dag_id}/tasks/{task_id}`                                                     | ✅     |
  | Görev Örneğini Al                | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}`                        | ✅     |
  | Görev Örneklerini Listele              | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances`                                  | ✅     |
  | Görev Örneğini Güncelle             | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}`                        | ✅     |
  | Görev Örneği Günlüğünü Al            | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/logs/{task_try_number}` | ✅     |
  | Görev Örneklerini Temizle             | `/api/v1/dags/{dag_id}/clearTaskInstances`                                                  | ✅     |
  | Görev Örnekleri Durumunu Ayarla         | `/api/v1/dags/{dag_id}/updateTaskInstancesState`                                            | ✅     |
  | Görev Örneği Denemelerini Listele         | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/tries`                  | ✅     |
  | **Değişkenler**              |                                                                                               |        |
  | Değişkenleri Listele                   | `/api/v1/variables`                                                                         | ✅     |
  | Değişken Oluştur                  | `/api/v1/variables`                                                                         | ✅     |
  | Değişkeni Al                     | `/api/v1/variables/{variable_key}`                                                          | ✅     |
  | Değişkeni Güncelle                  | `/api/v1/variables/{variable_key}`                                                          | ✅     |
  | Değişkeni Sil                  | `/api/v1/variables/{variable_key}`                                                          | ✅     |
  | **Bağlantılar**            |                                                                                               |        |
  | Bağlantıları Listele                 | `/api/v1/connections`                                                                       | ✅     |
  | Bağlantı Oluştur                | `/api/v1/connections`                                                                       | ✅     |
  | Bağlantıyı Al                   | `/api/v1/connections/{connection_id}`                                                       | ✅     |
  | Bağlantıyı Güncelle                | `/api/v1/connections/{connection_id}`                                                       | ✅     |
  | Bağlantıyı Sil                | `/api/v1/connections/{connection_id}`                                                       | ✅     |
  | Bağlantıyı Test Et                  | `/api/v1/connections/test`                                                                  | ✅     |
  | **Havuzlar**                  |                                                                                               |        |
  | Havuzları Listele                       | `/api/v1/pools`                                                                             | ✅     |
  | Havuz Oluştur                      | `/api/v1/pools`                                                                             | ✅     |
  | Havuzu Al                         | `/api/v1/pools/{pool_name}`                                                                 | ✅     |
  | Havuzu Güncelle                      | `/api/v1/pools/{pool_name}`                                                                 | ✅     |
  | Havuzu Sil                      | `/api/v1/pools/{pool_name}`                                                                 | ✅     |
  | **XCom'lar**                  |                                                                                               |        |
  | XCom'ları Listele                       | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/xcomEntries`            | ✅     |
  | XCom Girişini Al                   | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/xcomEntries/{xcom_key}` | ✅     |
  | **Veri Setleri**               |                                                                                               |        |
  | Veri Setlerini Listele                    | `/api/v1/datasets`                                                                          | ✅     |
  | Veri Setini Al                      | `/api/v1/datasets/{uri}`                                                                    | ✅     |
  | Veri Seti Olaylarını Al               | `/api/v1/datasetEvents`                                                                     | ✅     |
  | Veri Seti Olayı Oluştur             | `/api/v1/datasetEvents`                                                                     | ✅     |
  | DAG Veri Seti Kuyruğa Alınmış Olayını Al     | `/api/v1/dags/{dag_id}/dagRuns/queued/datasetEvents/{uri}`                                  | ✅     |
  | DAG Veri Seti Kuyruğa Alınmış Olaylarını Al    | `/api/v1/dags/{dag_id}/dagRuns/queued/datasetEvents`                                        | ✅     |
  | DAG Veri Seti Kuyruğa Alınmış Olayını Sil  | `/api/v1/dags/{dag_id}/dagRuns/queued/datasetEvents/{uri}`                                  | ✅     |
  | DAG Veri Seti Kuyruğa Alınmış Olaylarını Sil | `/api/v1/dags/{dag_id}/dagRuns/queued/datasetEvents`                                        | ✅     |
  | Veri Seti Kuyruğa Alınmış Olaylarını Al        | `/api/v1/datasets/{uri}/dagRuns/queued/datasetEvents`                                       | ✅     |
  | Veri Seti Kuyruğa Alınmış Olaylarını Sil     | `/api/v1/datasets/{uri}/dagRuns/queued/datasetEvents`                                       | ✅     |
  | **İzleme**             |                                                                                               |        |
  | Sağlığı Al                       | `/api/v1/health`                                                                            | ✅     |
  | **DAG İstatistikleri**              |                                                                                               |        |
  | DAG İstatistiklerini Al                    | `/api/v1/dags/statistics`                                                                   | ✅     |
  | **Yapılandırma**                 |                                                                                               |        |
  | Yapılandırmayı Al                       | `/api/v1/config`                                                                            | ✅     |
  | **Eklentiler**                |                                                                                               |        |
  | Eklentileri Al                      | `/api/v1/plugins`                                                                           | ✅     |
  | **Sağlayıcılar**              |                                                                                               |        |
  | Sağlayıcıları Listele                   | `/api/v1/providers`                                                                         | ✅     |
  | **Olay Günlükleri**             |                                                                                               |        |
  | Olay Günlüklerini Listele                  | `/api/v1/eventLogs`                                                                         | ✅     |
  | Olay Günlüğünü Al                    | `/api/v1/eventLogs/{event_log_id}`                                                          | ✅     |
  | **Sistem**                 |                                                                                               |        |
  | İthalatı Hataları Al                | `/api/v1/importErrors`                                                                      | ✅     |
  | İthalatı Hatası Detaylarını Al         | `/api/v1/importErrors/{import_error_id}`                                                    | ✅     |
  | Sağlık Durumunu Al                | `/api/v1/health`                                                                            | ✅     |
  | Sürümü Al                      | `/api/v1/version`                                                                           | ✅     |

  ## Kurulum

  ### Bağımlılıklar

  Bu proje resmi Apache Airflow istemci kütüphanesine (`apache-airflow-client`) bağlıdır. Bu paketi yüklediğinizde otomatik olarak yüklenecektir.

  ### Ortam Değişkenleri

  Aşağıdaki ortam değişkenlerini ayarlayın:

  ```
  AIRFLOW_HOST=<your-airflow-host>        # İsteğe bağlı, varsayılan http://localhost:8080
  AIRFLOW_API_VERSION=v1                  # İsteğe bağlı, varsayılan v1
  READ_ONLY=true                          # İsteğe bağlı, salt okunur modu etkinleştirir (true/false, varsayılan false)
  ```

  #### Kimlik Doğrulama

  Aşağıdaki kimlik doğrulama yöntemlerinden birini seçin:

  **Temel Kimlik Doğrulama (varsayılan):**
  ```
  AIRFLOW_USERNAME=<your-airflow-username>
  AIRFLOW_PASSWORD=<your-airflow-password>
  ```

  **JWT Token Kimlik Doğrulaması:**
  ```
  AIRFLOW_JWT_TOKEN=<your-jwt-token>
  ```

  JWT token almak için Airflow'un kimlik doğrulama endpoint'ini kullanabilirsiniz:

  ```bash
  ENDPOINT_URL="http://localhost:8080"  # Airflow endpoint'iniz ile değiştirin
  curl -X 'POST' \
    "${ENDPOINT_URL}/auth/token" \
    -H 'Content-Type: application/json' \
    -d '{ "username": "<your-username>", "password": "<your-password>" }'
  ```

  > **Not**: JWT token ve temel kimlik doğrulama bilgilerinin her ikisi de sağlanırsa, JWT token öncelik kazanır.

  ### Claude Desktop ile Kullanım

  `claude_desktop_config.json` dosyanıza ekleyin:

  **Temel Kimlik Doğrulama:**
  ```json
  {
    "mcpServers": {
      "mcp-server-apache-airflow": {
        "command": "uvx",
        "args": ["mcp-server-apache-airflow"],
        "env": {
          "AIRFLOW_HOST": "https://your-airflow-host",
          "AIRFLOW_USERNAME": "your-username",
          "AIRFLOW_PASSWORD": "your-password"
        }
      }
    }
  }
  ```

  **JWT Token Kimlik Doğrulaması:**
  ```json
  {
    "mcpServers": {
      "mcp-server-apache-airflow": {
        "command": "uvx",
        "args": ["mcp-server-apache-airflow"],
        "env": {
          "AIRFLOW_HOST": "https://your-airflow-host",
          "AIRFLOW_JWT_TOKEN": "your-jwt-token"
        }
      }
    }
  }
  ```

  Salt okunur mod için (güvenlik açısından tavsiye edilir):

  **Temel Kimlik Doğrulama:**
  ```json
  {
    "mcpServers": {
      "mcp-server-apache-airflow": {
        "command": "uvx",
        "args": ["mcp-server-apache-airflow"],
        "env": {
          "AIRFLOW_HOST": "https://your-airflow-host",
          "AIRFLOW_USERNAME": "your-username",
          "AIRFLOW_PASSWORD": "your-password",
          "READ_ONLY": "true"
        }
      }
    }
  }
  ```

  **JWT Token Kimlik Doğrulaması:**
  ```json
  {
    "mcpServers": {
      "mcp-server-apache-airflow": {
        "command": "uvx",
        "args": ["mcp-server-apache-airflow", "--read-only"],
        "env": {
          "AIRFLOW_HOST": "https://your-airflow-host",
          "AIRFLOW_JWT_TOKEN": "your-jwt-token"
        }
      }
    }
  }
  ```

  `uv` kullanarak alternatif yapılandırma:

  **Temel Kimlik Doğrulama:**
  ```json
  {
    "mcpServers": {
      "mcp-server-apache-airflow": {
        "command": "uv",
        "args": [
          "--directory",
          "/path/to/mcp-server-apache-airflow",
          "run",
          "mcp-server-apache-airflow"
        ],
        "env": {
          "AIRFLOW_HOST": "https://your-airflow-host",
          "AIRFLOW_USERNAME": "your-username",
          "AIRFLOW_PASSWORD": "your-password"
        }
      }
    }
  }
  ```

  **JWT Token Kimlik Doğrulaması:**
  ```json
  {
    "mcpServers": {
      "mcp-server-apache-airflow": {
        "command": "uv",
        "args": [
          "--directory",
          "/path/to/mcp-server-apache-airflow",
          "run",
          "mcp-server-apache-airflow"
        ],
        "env": {
          "AIRFLOW_HOST": "https://your-airflow-host",
          "AIRFLOW_JWT_TOKEN": "your-jwt-token"
        }
      }
    }
  }
  ```

  `/path/to/mcp-server-apache-airflow` yerine depoyu klonladığınız gerçek yolu yazın.

  ### API Gruplarını Seçme

  `--apis` flag'ini ayarlayarak kullanmak istediğiniz API gruplarını seçebilirsiniz.

  ```bash
  uv run mcp-server-apache-airflow --apis dag --apis dagrun
  ```

  Varsayılan olarak tüm API'ler kullanılır.

  İzin verilen değerler:

  - config
  - connections
  - dag
  - dagrun
  - dagstats
  - dataset
  - eventlog
  - importerror
  - monitoring
  - plugin
  - pool
  - provider
  - taskinstance
  - variable
  - xcom

  ### Salt Okunur Mod

  `--read-only` flag'ini kullanarak veya `READ_ONLY=true` ortam değişkenini ayarlayarak sunucuyu salt okunur modda çalıştırabilirsiniz. Bu mod yalnızca okuma işlemleri (GET istekleri) yapan araçları ortaya çıkaracak ve kaynakları oluşturan, güncelleyen veya silen araçları dışlayacaktır.

  Komut satırı flag'ini kullanarak:
  ```bash
  uv run mcp-server-apache-airflow --read-only
  ```

  Ortam değişkenini kullanarak:
  ```bash
  READ_ONLY=true uv run mcp-server-apache-airflow
  ```

  Salt okunur modda, sunucu yalnızca şu gibi araçları ortaya çıkaracaktır:
  - DAG'ları, DAG çalıştırmalarını, görevleri, değişkenleri, bağlantıları vb. listeleme
  - Belirli kaynakların ayrıntılarını alma
  - Yapılandırmaları ve izleme bilgilerini okuma
  - Bağlantıları test etme (zararlı olmayan)

  DAG'ları, değişkenleri, bağlantıları oluşturma, güncelleme, silme, DAG çalıştırmalarını tetikleme vb. gibi yazma işlemleri salt okunur modda kullanılamayacaktır.

  Salt okunur modu API grup seçimiyle birleştirebilirsiniz:

  ```bash
  uv run mcp-server-apache-airflow --read-only --apis dag --apis variable
  ```

  ### Manuel Yürütme

  Sunucuyu manuel olarak da çalıştırabilirsiniz:

  ```bash
  make run
  ```

  `make run` aşağıdaki seçenekleri kabul eder:

  Seçenekler:

  - `--port`: SSE için dinlenecek port (varsayılan: 8000)
  - `--transport`: Transport türü (stdio/sse/http, varsayılan: stdio)

  Veya SSE sunucusunu doğrudan çalıştırabilirsiniz, aynı parametreleri kabul eder:

  ```bash
  make run-sse
  ```

  Ayrıca, hizmeti aşağıdaki komut gibi `uv` kullanarak doğrudan başlatabilirsiniz:

  ```bash
  uv run src --transport http --port 8080
  ```

  ### Smithery üzerinden Kurulum

  Apache Airflow MCP Server'ı Claude Desktop için [Smithery](https://smithery.ai/server/@yangkyeongmo/mcp-server-apache-airflow) üzerinden otomatik olarak yüklemek için:

  ```bash
  npx -y @smithery/cli install @yangkyeongmo/mcp-server-apache-airflow --client claude
  ```

  ## Geliştirme

  ### Geliştirme Ortamını Kurma

  1. Depoyu klonlayın:
  ```bash
  git clone https://github.com/yangkyeongmo/mcp-server-apache-airflow.git
  cd mcp-server-apache-airflow
  ```

  2. Geliştirme bağımlılıklarını yükleyin:
  ```bash
  uv sync --dev
  ```

  3. Ortam değişkenleri için bir `.env` dosyası oluşturun (geliştirme için isteğe bağlı):
  ```bash
  touch .env
  ```

  > **Not**: Testleri çalıştırmak için ortam değişkenlerine ihtiyaç yoktur. `AIRFLOW_HOST` geliştirme ve test amaçları için `http://localhost:8080` olarak varsayılan olur.

  ### Testleri Çalıştırma

  Proje pytest için aşağıdaki komutlarla kullanılabilir:

  ```bash
  # Tüm testleri çalıştır
  make test
  ```

  ### Kod Kalitesi

  ```bash
  # Linting'i çalıştır
  make lint

  # Kod biçimlendirmesini çalıştır
  make format
  ```

  ### Sürekli Entegrasyon

  Proje, GitHub Actions iş akışını (`.github/workflows/test.yml`) içerir ve otomatik olarak:

  - Python 3.10, 3.11 ve 3.12'de testleri çalıştırır
  - ruff kullanarak linting kontrolleri yürütür
  - `main` dalına her push ve pull request'te çalışır

  CI pipeline'ı, herhangi bir değişiklik birleştirilmeden önce kod kalitesini ve desteklenen Python versiyonları arasında uyumluluğu sağlar.

  ## Katkı

  Katkılar memnuniyetle karşılanır! Lütfen özgürce bir Pull Request göndermekten çekinmeyin.

  Paket, `pyproject.toml` dosyasındaki project.version güncellendiğinde otomatik olarak PyPI'ye yayınlanır.
  Sürümlendirme için semver'ı izleyin.

  Lütfen çekirdek mantığa yapılan değişiklikleri uygulamak için PR'e sürüm güncellemesi dahil edin.

  ## Lisans

  [MIT Lisansı](LICENSE)
---

[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/yangkyeongmo-mcp-server-apache-airflow-badge.png)](https://mseep.ai/app/yangkyeongmo-mcp-server-apache-airflow)

# mcp-server-apache-airflow

[![smithery badge](https://smithery.ai/badge/@yangkyeongmo/mcp-server-apache-airflow)](https://smithery.ai/server/@yangkyeongmo/mcp-server-apache-airflow)
![PyPI - Downloads](https://img.shields.io/pypi/dm/mcp-server-apache-airflow)

A Model Context Protocol (MCP) server implementation for Apache Airflow, enabling seamless integration with MCP clients. This project provides a standardized way to interact with Apache Airflow through the Model Context Protocol.

<a href="https://glama.ai/mcp/servers/e99b6vx9lw">
  
</a>

## About

This project implements a [Model Context Protocol](https://modelcontextprotocol.io/introduction) server that wraps Apache Airflow's REST API, allowing MCP clients to interact with Airflow in a standardized way. It uses the official Apache Airflow client library to ensure compatibility and maintainability.

## Feature Implementation Status

| Feature                          | API Path                                                                                      | Status |
| -------------------------------- | --------------------------------------------------------------------------------------------- | ------ |
| **DAG Management**         |                                                                                               |        |
| List DAGs                        | `/api/v1/dags`                                                                              | ✅     |
| Get DAG Details                  | `/api/v1/dags/{dag_id}`                                                                     | ✅     |
| Pause DAG                        | `/api/v1/dags/{dag_id}`                                                                     | ✅     |
| Unpause DAG                      | `/api/v1/dags/{dag_id}`                                                                     | ✅     |
| Update DAG                       | `/api/v1/dags/{dag_id}`                                                                     | ✅     |
| Delete DAG                       | `/api/v1/dags/{dag_id}`                                                                     | ✅     |
| Get DAG Source                   | `/api/v1/dagSources/{file_token}`                                                           | ✅     |
| Patch Multiple DAGs              | `/api/v1/dags`                                                                              | ✅     |
| Reparse DAG File                 | `/api/v1/dagSources/{file_token}/reparse`                                                   | ✅     |
| **DAG Runs**               |                                                                                               |        |
| List DAG Runs                    | `/api/v1/dags/{dag_id}/dagRuns`                                                             | ✅     |
| Create DAG Run                   | `/api/v1/dags/{dag_id}/dagRuns`                                                             | ✅     |
| Get DAG Run Details              | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}`                                                | ✅     |
| Update DAG Run                   | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}`                                                | ✅     |
| Delete DAG Run                   | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}`                                                | ✅     |
| Get DAG Runs Batch               | `/api/v1/dags/~/dagRuns/list`                                                               | ✅     |
| Clear DAG Run                    | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}/clear`                                          | ✅     |
| Set DAG Run Note                 | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}/setNote`                                        | ✅     |
| Get Upstream Dataset Events      | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}/upstreamDatasetEvents`                          | ✅     |
| **Tasks**                  |                                                                                               |        |
| List DAG Tasks                   | `/api/v1/dags/{dag_id}/tasks`                                                               | ✅     |
| Get Task Details                 | `/api/v1/dags/{dag_id}/tasks/{task_id}`                                                     | ✅     |
| Get Task Instance                | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}`                        | ✅     |
| List Task Instances              | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances`                                  | ✅     |
| Update Task Instance             | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}`                        | ✅     |
| Get Task Instance Log            | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/logs/{task_try_number}` | ✅     |
| Clear Task Instances             | `/api/v1/dags/{dag_id}/clearTaskInstances`                                                  | ✅     |
| Set Task Instances State         | `/api/v1/dags/{dag_id}/updateTaskInstancesState`                                            | ✅     |
| List Task Instance Tries         | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/tries`                  | ✅     |
| **Variables**              |                                                                                               |        |
| List Variables                   | `/api/v1/variables`                                                                         | ✅     |
| Create Variable                  | `/api/v1/variables`                                                                         | ✅     |
| Get Variable                     | `/api/v1/variables/{variable_key}`                                                          | ✅     |
| Update Variable                  | `/api/v1/variables/{variable_key}`                                                          | ✅     |
| Delete Variable                  | `/api/v1/variables/{variable_key}`                                                          | ✅     |
| **Connections**            |                                                                                               |        |
| List Connections                 | `/api/v1/connections`                                                                       | ✅     |
| Create Connection                | `/api/v1/connections`                                                                       | ✅     |
| Get Connection                   | `/api/v1/connections/{connection_id}`                                                       | ✅     |
| Update Connection                | `/api/v1/connections/{connection_id}`                                                       | ✅     |
| Delete Connection                | `/api/v1/connections/{connection_id}`                                                       | ✅     |
| Test Connection                  | `/api/v1/connections/test`                                                                  | ✅     |
| **Pools**                  |                                                                                               |        |
| List Pools                       | `/api/v1/pools`                                                                             | ✅     |
| Create Pool                      | `/api/v1/pools`                                                                             | ✅     |
| Get Pool                         | `/api/v1/pools/{pool_name}`                                                                 | ✅     |
| Update Pool                      | `/api/v1/pools/{pool_name}`                                                                 | ✅     |
| Delete Pool                      | `/api/v1/pools/{pool_name}`                                                                 | ✅     |
| **XComs**                  |                                                                                               |        |
| List XComs                       | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/xcomEntries`            | ✅     |
| Get XCom Entry                   | `/api/v1/dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/xcomEntries/{xcom_key}` | ✅     |
| **Datasets**               |                                                                                               |        |
| List Datasets                    | `/api/v1/datasets`                                                                          | ✅     |
| Get Dataset                      | `/api/v1/datasets/{uri}`                                                                    | ✅     |
| Get Dataset Events               | `/api/v1/datasetEvents`                                                                     | ✅     |
| Create Dataset Event             | `/api/v1/datasetEvents`                                                                     | ✅     |
| Get DAG Dataset Queued Event     | `/api/v1/dags/{dag_id}/dagRuns/queued/datasetEvents/{uri}`                                  | ✅     |
| Get DAG Dataset Queued Events    | `/api/v1/dags/{dag_id}/dagRuns/queued/datasetEvents`                                        | ✅     |
| Delete DAG Dataset Queued Event  | `/api/v1/dags/{dag_id}/dagRuns/queued/datasetEvents/{uri}`                                  | ✅     |
| Delete DAG Dataset Queued Events | `/api/v1/dags/{dag_id}/dagRuns/queued/datasetEvents`                                        | ✅     |
| Get Dataset Queued Events        | `/api/v1/datasets/{uri}/dagRuns/queued/datasetEvents`                                       | ✅     |
| Delete Dataset Queued Events     | `/api/v1/datasets/{uri}/dagRuns/queued/datasetEvents`                                       | ✅     |
| **Monitoring**             |                                                                                               |        |
| Get Health                       | `/api/v1/health`                                                                            | ✅     |
| **DAG Stats**              |                                                                                               |        |
| Get DAG Stats                    | `/api/v1/dags/statistics`                                                                   | ✅     |
| **Config**                 |                                                                                               |        |
| Get Config                       | `/api/v1/config`                                                                            | ✅     |
| **Plugins**                |                                                                                               |        |
| Get Plugins                      | `/api/v1/plugins`                                                                           | ✅     |
| **Providers**              |                                                                                               |        |
| List Providers                   | `/api/v1/providers`                                                                         | ✅     |
| **Event Logs**             |                                                                                               |        |
| List Event Logs                  | `/api/v1/eventLogs`                                                                         | ✅     |
| Get Event Log                    | `/api/v1/eventLogs/{event_log_id}`                                                          | ✅     |
| **System**                 |                                                                                               |        |
| Get Import Errors                | `/api/v1/importErrors`                                                                      | ✅     |
| Get Import Error Details         | `/api/v1/importErrors/{import_error_id}`                                                    | ✅     |
| Get Health Status                | `/api/v1/health`                                                                            | ✅     |
| Get Version                      | `/api/v1/version`                                                                           | ✅     |

## Setup

### Dependencies

This project depends on the official Apache Airflow client library (`apache-airflow-client`). It will be automatically installed when you install this package.

### Environment Variables

Set the following environment variables:

```
AIRFLOW_HOST=<your-airflow-host>        # Optional, defaults to http://localhost:8080
AIRFLOW_API_VERSION=v1                  # Optional, defaults to v1
READ_ONLY=true                          # Optional, enables read-only mode (true/false, defaults to false)
```

#### Authentication

Choose one of the following authentication methods:

**Basic Authentication (default):**
```
AIRFLOW_USERNAME=<your-airflow-username>
AIRFLOW_PASSWORD=<your-airflow-password>
```

**JWT Token Authentication:**
```
AIRFLOW_JWT_TOKEN=<your-jwt-token>
```

To obtain a JWT token, you can use Airflow's authentication endpoint:

```bash
ENDPOINT_URL="http://localhost:8080"  # Replace with your Airflow endpoint
curl -X 'POST' \
  "${ENDPOINT_URL}/auth/token" \
  -H 'Content-Type: application/json' \
  -d '{ "username": "<your-username>", "password": "<your-password>" }'
```

> **Note**: If both JWT token and basic authentication credentials are provided, JWT token takes precedence.

### Usage with Claude Desktop

Add to your `claude_desktop_config.json`:

**Basic Authentication:**
```json
{
  "mcpServers": {
    "mcp-server-apache-airflow": {
      "command": "uvx",
      "args": ["mcp-server-apache-airflow"],
      "env": {
        "AIRFLOW_HOST": "https://your-airflow-host",
        "AIRFLOW_USERNAME": "your-username",
        "AIRFLOW_PASSWORD": "your-password"
      }
    }
  }
}
```

**JWT Token Authentication:**
```json
{
  "mcpServers": {
    "mcp-server-apache-airflow": {
      "command": "uvx",
      "args": ["mcp-server-apache-airflow"],
      "env": {
        "AIRFLOW_HOST": "https://your-airflow-host",
        "AIRFLOW_JWT_TOKEN": "your-jwt-token"
      }
    }
  }
}
```

For read-only mode (recommended for safety):

**Basic Authentication:**
```json
{
  "mcpServers": {
    "mcp-server-apache-airflow": {
      "command": "uvx",
      "args": ["mcp-server-apache-airflow"],
      "env": {
        "AIRFLOW_HOST": "https://your-airflow-host",
        "AIRFLOW_USERNAME": "your-username",
        "AIRFLOW_PASSWORD": "your-password",
        "READ_ONLY": "true"
      }
    }
  }
}
```

**JWT Token Authentication:**
```json
{
  "mcpServers": {
    "mcp-server-apache-airflow": {
      "command": "uvx",
      "args": ["mcp-server-apache-airflow", "--read-only"],
      "env": {
        "AIRFLOW_HOST": "https://your-airflow-host",
        "AIRFLOW_JWT_TOKEN": "your-jwt-token"
      }
    }
  }
}
```

Alternative configuration using `uv`:

**Basic Authentication:**
```json
{
  "mcpServers": {
    "mcp-server-apache-airflow": {
      "command": "uv",
      "args": [
        "--directory",
        "/path/to/mcp-server-apache-airflow",
        "run",
        "mcp-server-apache-airflow"
      ],
      "env": {
        "AIRFLOW_HOST": "https://your-airflow-host",
        "AIRFLOW_USERNAME": "your-username",
        "AIRFLOW_PASSWORD": "your-password"
      }
    }
  }
}
```

**JWT Token Authentication:**
```json
{
  "mcpServers": {
    "mcp-server-apache-airflow": {
      "command": "uv",
      "args": [
        "--directory",
        "/path/to/mcp-server-apache-airflow",
        "run",
        "mcp-server-apache-airflow"
      ],
      "env": {
        "AIRFLOW_HOST": "https://your-airflow-host",
        "AIRFLOW_JWT_TOKEN": "your-jwt-token"
      }
    }
  }
}
```

Replace `/path/to/mcp-server-apache-airflow` with the actual path where you've cloned the repository.

### Selecting the API groups

You can select the API groups you want to use by setting the `--apis` flag.

```bash
uv run mcp-server-apache-airflow --apis dag --apis dagrun
```

The default is to use all APIs.

Allowed values are:

- config
- connections
- dag
- dagrun
- dagstats
- dataset
- eventlog
- importerror
- monitoring
- plugin
- pool
- provider
- taskinstance
- variable
- xcom

### Read-Only Mode

You can run the server in read-only mode by using the `--read-only` flag or by setting the `READ_ONLY=true` environment variable. This will only expose tools that perform read operations (GET requests) and exclude any tools that create, update, or delete resources.

Using the command-line flag:
```bash
uv run mcp-server-apache-airflow --read-only
```

Using the environment variable:
```bash
READ_ONLY=true uv run mcp-server-apache-airflow
```

In read-only mode, the server will only expose tools like:
- Listing DAGs, DAG runs, tasks, variables, connections, etc.
- Getting details of specific resources
- Reading configurations and monitoring information
- Testing connections (non-destructive)

Write operations like creating, updating, deleting DAGs, variables, connections, triggering DAG runs, etc. will not be available in read-only mode.

You can combine read-only mode with API group selection:

```bash
uv run mcp-server-apache-airflow --read-only --apis dag --apis variable
```

### Manual Execution

You can also run the server manually:

```bash
make run
```

`make run` accepts following options:

Options:

- `--port`: Port to listen on for SSE (default: 8000)
- `--transport`: Transport type (stdio/sse/http, default: stdio)

Or, you could run the sse server directly, which accepts same parameters:

```bash
make run-sse
```

Also, you could start service directly using `uv` like in the following command:

```bash
uv run src --transport http --port 8080
```

### Installing via Smithery

To install Apache Airflow MCP Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@yangkyeongmo/mcp-server-apache-airflow):

```bash
npx -y @smithery/cli install @yangkyeongmo/mcp-server-apache-airflow --client claude
```

## Development

### Setting up Development Environment

1. Clone the repository:
```bash
git clone https://github.com/yangkyeongmo/mcp-server-apache-airflow.git
cd mcp-server-apache-airflow
```

2. Install development dependencies:
```bash
uv sync --dev
```

3. Create a `.env` file for environment variables (optional for development):
```bash
touch .env
```

> **Note**: No environment variables are required for running tests. The `AIRFLOW_HOST` defaults to `http://localhost:8080` for development and testing purposes.

### Running Tests

The project uses pytest for testing with the following commands available:

```bash
# Run all tests
make test
```

### Code Quality

```bash
# Run linting
make lint

# Run code formatting
make format
```

### Continuous Integration

The project includes a GitHub Actions workflow (`.github/workflows/test.yml`) that automatically:

- Runs tests on Python 3.10, 3.11, and 3.12
- Executes linting checks using ruff
- Runs on every push and pull request to `main` branch

The CI pipeline ensures code quality and compatibility across supported Python versions before any changes are merged.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

The package is deployed automatically to PyPI when project.version is updated in `pyproject.toml`.
Follow semver for versioning.

Please include version update in the PR in order to apply the changes to core logic.

## License

[MIT License](LICENSE)
