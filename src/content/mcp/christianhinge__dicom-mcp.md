---
name: "ChristianHinge/dicom-mcp"
description: "DICOM integration to query, read, and move medical images and reports from PACS and other DICOM compliant systems."
description_tr: "DICOM entegrasyonu ile PACS ve diğer DICOM uyumlu sistemlerden tıbbi görseller ve raporları sorgulamak, okumak ve taşımak."
category: "Databases"
repo: "ChristianHinge/dicom-mcp"
stars: 95
url: "https://github.com/ChristianHinge/dicom-mcp"
body_length: 6522
license: "MIT"
language: "Python"
body_tr: |-
  # Tıbbi Görüntüleme Sistemleri İçin DICOM MCP Sunucusu 🏥

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Python Version](https://img.shields.io/badge/python-3.12+-blue.svg)](https://www.python.org/downloads/)
   [![PyPI Version](https://img.shields.io/pypi/v/dicom-mcp.svg)](https://pypi.org/project/dicom-mcp/) [![PyPI Downloads](https://img.shields.io/pypi/dm/dicom-mcp.svg)](https://pypi.org/project/dicom-mcp/)  

  `dicom-mcp` sunucusu, AI asistanlarının DICOM sunucularında (PACS, VNA, vb.) veri sorgulaması, okuması ve taşıması yapmasını sağlar. 

  <div align="center">

  🤝 **[Katkıda Bulun](#contributing)** •
  📝 **[Hata Bildir](https://github.com/ChristianHinge/dicom-mcp/issues)**  •
  📝 **[Blog Yazısı 1](https://www.christianhinge.com/projects/dicom-mcp/)** 

  </div>

  ```text
  ---------------------------------------------------------------------
  🧑‍⚕️ Kullanıcı: "John Doe'nun önceki CT raporunda önemli bulgular var mı?"

  🧠 LLM → ⚙️ Araçlar:
     query_patients → query_studies → query_series → extract_pdf_text_from_dicom

  💬 LLM Yanıtı: "2025-03-26 tarihli rapor splenomegali (büyük dalak) öyküsünden bahsediyor"

  🧑‍⚕️ Kullanıcı: "Son taramada ve bugün dalağının hacmi ne kadardı?"

  🧠 LLM → ⚙️ Araçlar:
     (query_studies → query_series → move_series → query_series → extract_pdf_text_from_dicom) x2
     (move_series aracı en son CT'yi DICOM segmentasyon düğümüne gönderir, hacim PDF raporu döndürür)

  💬 LLM Yanıtı: "geçen yıl 2024-03-26: 412cm³, bugün 2025-04-10: 350cm³"
  ---------------------------------------------------------------------
  ```


  ## ✨ Temel Yetenekler

  `dicom-mcp` aşağıdaki araçları sağlar:

  * **🔍 Meta Veri Sorgulama**: Hastalar, çalışmalar, seriler ve örneklerini çeşitli kriterlere göre arayın.
  * **📄 DICOM Raporlarını Okuma (PDF)**: Kapsüllenmiş PDF'ler (örneğin klinik raporlar) içeren DICOM örneklerini alın ve metin içeriğini çıkarın.
  * **➡️ DICOM Görüntülerini Gönderme**: Serileri veya çalışmaları diğer DICOM hedeflerine gönderin, örneğin görüntü segmentasyonu, sınıflandırması vb. için yapay zeka uç noktalarına.
  * **⚙️ Yardımcı Araçlar**: Bağlantıları yönetin ve sorgu seçeneklerini anlayın.

  ## 🚀 Hızlı Başlangıç
  ### 📥 Kurulum
  uv veya pip kullanarak yükleyin:

  ```bash
  uv tool install dicom-mcp
  ```
  Veya depoyu klonlayarak:

  ```bash
  # Depoyu klonlayın ve geliştirme ortamını kurun
  git clone https://github.com/ChristianHinge/dicom-mcp
  cd dicom-mcp

  # Sanal ortam oluşturun ve etkinleştirin
  uv venv
  source .venv/bin/activate

  # Test bağımlılıklarıyla yükleyin
  uv pip install -e ".[dev]"
  ```


  ### ⚙️ Yapılandırma

  `dicom-mcp` DICOM düğümlerini ve çağıran AE başlıklarını tanımlayan bir YAML yapılandırma dosyası (`config.yaml` veya benzer) gerektirir. Yapılandırmayı uyarlayın veya örnek ORTHANC Sunucusuyla uyumluluk için olduğu gibi tutun.

  ```yaml
  nodes:
    main:
      host: "localhost"
      port: 4242 
      ae_title: "ORTHANC"
      description: "Local Orthanc DICOM server"

  current_node: "main"
  calling_aet: "MCPSCU" 
  ```
  > [!WARNING]
  DICOM-MCP klinik kullanım için tasarlanmamıştır ve canlı hastane veritabanlarına veya hassas hasta verilerine sahip veritabanlarına bağlanmamalıdır. Bunu yapmak hasta verilerinin kaybına ve hasta verilerinin internete sızmasına neden olabilir. DICOM-MCP tam veri gizliliği için yerel olarak barındırılan açık ağırlıklı LLM'lerle kullanılabilir.

  ### (İsteğe Bağlı) Örnek ORTHANC Sunucusu
  Elinizde bir DICOM sunucusu yoksa, Docker kullanarak yerel bir ORTHANC sunucusu çalıştırabilirsiniz:

  Depoyu klonlayın ve test bağımlılıklarını yükleyin `pip install -e ".[dev]"`

  ```bash
  cd tests
  docker-compose up -d
  cd ..
  pytest # ORTHANC sunucusuna sahte pdf verileri yükler
  ```
  Arayüz [http://localhost:8042](http://localhost:8042)

  ### 🔌 MCP Entegrasyonu

  İstemci yapılandırmanıza ekleyin (örn. `claude_desktop_config.json`):

  ```json
  {
    "mcpServers": {
      "dicom": {
        "command": "uvx",
        "args": ["dicom-mcp", "/path/to/your_config.yaml"]
      }
    }
  }
  ```

  Geliştirme için:

  ```json
  {
      "mcpServers": {
          "arxiv-mcp-server": {
              "command": "uv",
              "args": [
                  "--directory",
                  "path/to/cloned/dicom-mcp",
                  "run",
                  "dicom-mcp",
                  "/path/to/your_config.yaml"
              ]
          }
      }
  }
  ```


  ## 🛠️ Araçlara Genel Bakış

  `dicom-mcp` DICOM sunucuları ve DICOM verileriyle etkileşim için dört kategori araç sağlar. 

  ### 🔍 Meta Veri Sorgulama

  * **`query_patients`**: Ad, kimlik veya doğum tarihi gibi kriterlere göre hastaları arayın.
  * **`query_studies`**: Hasta kimliği, tarih, modalite, açıklama, muhasebeci numarası veya Çalışma Kimliği kullanarak çalışmaları bulun.
  * **`query_series`**: Modalite, seri numarası/açıklaması veya Seri Kimliği kullanarak belirli bir çalışma içinde serileri bulun.
  * **`query_instances`**: Örnek numarası veya SOP Örnek Kimliği kullanarak bir seri içinde bireysel örnekleri (görüntüler/nesneler) bulun.

  ### 📄 DICOM Raporlarını Okuma (PDF)

  * **`extract_pdf_text_from_dicom`**: Kapsüllenmiş PDF içeren belirli bir DICOM örneğini alın ve metin içeriğini çıkarın.

  ### ➡️ DICOM Görüntülerini Gönderme

  * **`move_series`**: Belirli bir DICOM serisi C-MOVE kullanarak yapılandırılmış başka bir DICOM düğümüne gönderin.
  * **`move_study`**: Tüm DICOM çalışmasını C-MOVE kullanarak yapılandırılmış başka bir DICOM düğümüne gönderin.

  ### ⚙️ Yardımcı Araçlar

  * **`list_dicom_nodes`**: Şu anda etkin olan DICOM düğümünü gösterin ve yapılandırılmış tüm düğümleri listeleyin.
  * **`switch_dicom_node`**: Sonraki işlemler için etkin DICOM düğümünü değiştirin.
  * **`verify_connection`**: C-ECHO kullanarak şu anda etkin olan düğüme DICOM ağ bağlantısını test edin.
  * **`get_attribute_presets`**: Meta veri sorgu sonuçları için kullanılabilir ayrıntı düzeylerini (minimal, standart, genişletilmiş) listeleyin.

  ### Örnek etkileşim
  Araçlar karmaşık soruları cevaplamak için bir araya getirilebilir:


  <div align="center">

  </div>


  ## 📈 Katkıda Bulunma
  ### Testleri Çalıştırma

  Testler çalışan bir Orthanc DICOM sunucusu gerektirir. Docker kullanabilirsiniz:

  ```bash
  # docker-compose.yml dosyasını içeren dizine gidin (örn. tests/)
  cd tests
  docker-compose up -d
  ```

  pytest kullanarak testleri çalıştırın:

  ```bash
  # Proje kök dizininden
  pytest
  ```

  Orthanc konteynerini durdurun:

  ```bash
  cd tests
  docker-compose down
  ```

  ### Hata Ayıklama

  Sunucu iletişiminde hata ayıklamak için MCP Inspector'ü kullanın:

  ```bash
  npx @modelcontextprotocol/inspector uv run dicom-mcp /path/to/your_config.yaml --transport stdio
  ```

  ## 🙏 Teşekkürler

  * [pynetdicom](https://github.com/pydicom/pynetdicom) kullanılarak oluşturulmuştur
  * PDF metin çıkarma için [PyPDF2](https://pypi.org/project/PyPDF2/) kullanır
---

# DICOM MCP Server for Medical Imaging Systems 🏥

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python Version](https://img.shields.io/badge/python-3.12+-blue.svg)](https://www.python.org/downloads/)
 [![PyPI Version](https://img.shields.io/pypi/v/dicom-mcp.svg)](https://pypi.org/project/dicom-mcp/) [![PyPI Downloads](https://img.shields.io/pypi/dm/dicom-mcp.svg)](https://pypi.org/project/dicom-mcp/)  

The `dicom-mcp` server enables AI assistants to query, read, and move data on DICOM servers (PACS, VNA, etc.). 

<div align="center">

🤝 **[Contribute](#contributing)** •
📝 **[Report Bug](https://github.com/ChristianHinge/dicom-mcp/issues)**  •
📝 **[Blog Post 1](https://www.christianhinge.com/projects/dicom-mcp/)** 

</div>

```text
---------------------------------------------------------------------
🧑‍⚕️ User: "Any significant findings in John Doe's previous CT report?"

🧠 LLM → ⚙️ Tools:
   query_patients → query_studies → query_series → extract_pdf_text_from_dicom

💬 LLM Response: "The report from 2025-03-26 mentions a history of splenomegaly (enlarged spleen)"

🧑‍⚕️ User: "What's the volume of his spleen at the last scan and the scan today?"

🧠 LLM → ⚙️ Tools:
   (query_studies → query_series → move_series → query_series → extract_pdf_text_from_dicom) x2
   (The move_series tool sends the latest CT to a DICOM segmentation node, which returns volume PDF report)

💬 LLM Response: "last year 2024-03-26: 412cm³, today 2025-04-10: 350cm³"
---------------------------------------------------------------------
```


## ✨ Core Capabilities

`dicom-mcp` provides tools to:

* **🔍 Query Metadata**: Search for patients, studies, series, and instances using various criteria.
* **📄 Read DICOM Reports (PDF)**: Retrieve DICOM instances containing encapsulated PDFs (e.g., clinical reports) and extract the text content.
* **➡️ Send DICOM Images**: Send series or studies to other DICOM destinations, e.g. AI endpoints for image segmentation, classification, etc.
* **⚙️ Utilities**: Manage connections and understand query options.

## 🚀 Quick Start
### 📥 Installation
Install using uv or pip:

```bash
uv tool install dicom-mcp
```
Or by cloning the repository:

```bash
# Clone and set up development environment
git clone https://github.com/ChristianHinge/dicom-mcp
cd dicom mcp

# Create and activate virtual environment
uv venv
source .venv/bin/activate

# Install with test dependencies
uv pip install -e ".[dev]"
```


### ⚙️ Configuration

`dicom-mcp` requires a YAML configuration file (`config.yaml` or similar) defining DICOM nodes and calling AE titles. Adapt the configuration or keep as is for compatibility with the sample ORTHANC  Server.

```yaml
nodes:
  main:
    host: "localhost"
    port: 4242 
    ae_title: "ORTHANC"
    description: "Local Orthanc DICOM server"

current_node: "main"
calling_aet: "MCPSCU" 
```
> [!WARNING]
DICOM-MCP is not meant for clinical use, and should not be connected with live hospital databases or databases with patient-sensitive data. Doing so could lead to both loss of patient data, and leakage of patient data onto the internet. DICOM-MCP can be used with locally hosted open-weight LLMs for complete data privacy. 

### (Optional) Sample ORTHANC server
If you don't have a DICOM server available, you can run a local ORTHANC server using Docker:

Clone the repository and install test dependencies `pip install -e ".[dev]`

```bash
cd tests
docker ocmpose up -d
cd ..
pytest # uploads dummy pdf data to ORTHANC server
```
UI at [http://localhost:8042](http://localhost:8042)

### 🔌 MCP Integration

Add to your client configuration (e.g. `claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "dicom": {
      "command": "uvx",
      "args": ["dicom-mcp", "/path/to/your_config.yaml"]
    }
  }
}
```

For development:

```json
{
    "mcpServers": {
        "arxiv-mcp-server": {
            "command": "uv",
            "args": [
                "--directory",
                "path/to/cloned/dicom-mcp",
                "run",
                "dicom-mcp",
                "/path/to/your_config.yaml"
            ]
        }
    }
}
```


## 🛠️ Tools Overview

`dicom-mcp` provides four categories of tools for interaction with DICOM servers and DICOM data. 

### 🔍 Query Metadata

* **`query_patients`**: Search for patients based on criteria like name, ID, or birth date.
* **`query_studies`**: Find studies using patient ID, date, modality, description, accession number, or Study UID.
* **`query_series`**: Locate series within a specific study using modality, series number/description, or Series UID.
* **`query_instances`**: Find individual instances (images/objects) within a series using instance number or SOP Instance UID
### 📄 Read DICOM Reports (PDF)

* **`extract_pdf_text_from_dicom`**: Retrieve a specific DICOM instance containing an encapsulated PDF and extract its text content.

### ➡️ Send DICOM Images

* **`move_series`**: Send a specific DICOM series to another configured DICOM node using C-MOVE.
* **`move_study`**: Send an entire DICOM study to another configured DICOM node using C-MOVE.

### ⚙️ Utilities

* **`list_dicom_nodes`**: Show the currently active DICOM node and list all configured nodes.
* **`switch_dicom_node`**: Change the active DICOM node for subsequent operations.
* **`verify_connection`**: Test the DICOM network connection to the currently active node using C-ECHO.
* **`get_attribute_presets`**: List the available levels of detail (minimal, standard, extended) for metadata query results.<p>


### Example interaction
The tools can be chained together to answer complex questions:


<div align="center">

</div>


## 📈 Contributing
### Running Tests

Tests require a running Orthanc DICOM server. You can use Docker:

```bash
# Navigate to the directory containing docker-compose.yml (e.g., tests/)
cd tests
docker-compose up -d
```

Run tests using pytest:

```bash
# From the project root directory
pytest
```

Stop the Orthanc container:

```bash
cd tests
docker-compose down
```

### Debugging

Use the MCP Inspector for debugging the server communication:

```bash
npx @modelcontextprotocol/inspector uv run dicom-mcp /path/to/your_config.yaml --transport stdio
```

## 🙏 Acknowledgments

* Built using [pynetdicom](https://github.com/pydicom/pynetdicom)
* Uses [PyPDF2](https://pypi.org/project/PyPDF2/) for PDF text extraction
