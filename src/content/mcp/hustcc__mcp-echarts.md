---
name: "hustcc/mcp-echarts"
description: "Generate visual charts using Apache ECharts with AI MCP dynamically."
description_tr: "Apache ECharts kullanarak yapay zeka destekli MCP ile dinamik olarak görsel grafikler oluşturun."
category: "Customer Data Platforms"
repo: "hustcc/mcp-echarts"
stars: 235
url: "https://github.com/hustcc/mcp-echarts"
body_length: 6962
license: "MIT"
language: "TypeScript"
homepage: "https://github.com/hustcc/mcp-echarts"
body_tr: |-
  #  MCP ECharts ![](https://badge.mcpx.dev?type=server 'MCP Server')  [![build](https://github.com/hustcc/mcp-echarts/actions/workflows/build.yml/badge.svg)](https://github.com/hustcc/mcp-echarts/actions/workflows/build.yml) [![npm Version](https://img.shields.io/npm/v/mcp-echarts.svg)](https://www.npmjs.com/package/mcp-echarts) [![smithery badge](https://smithery.ai/badge/@hustcc/mcp-echarts)](https://smithery.ai/server/@hustcc/mcp-echarts) [![npm License](https://img.shields.io/npm/l/mcp-echarts.svg)](https://www.npmjs.com/package/mcp-echarts) [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/hustcc/mcp-echarts)](https://archestra.ai/mcp-catalog/hustcc__mcp-echarts)

  AI MCP ile [Apache ECharts](https://echarts.apache.org/) dinamik olarak oluşturun, grafik oluşturma ve veri analizi için. _Ayrıca grafik, çizelge, harita oluşturmak için [mcp-server-chart](https://github.com/antvis/mcp-server-chart) kullanabilirsiniz._

  <div align="center">
    
  </div>

  <div align="center">
    
  </div>

  ## ✨ Özellikler

  - `ECharts` özellik ve sözdiziminin tamamı tam olarak desteklenir; veri, stil, tema ve daha fazlası dahil.
  - `png`, `svg` ve `option` formatlarına dışa aktarmayı destekler, modelin çok aşamalı doğru sözdizimi ve grafik çıkışını kolaylaştırmak için `ECharts` doğrulaması ile.
  - MinIO Entegrasyonu, grafikleri `MinIO` nesne depolamasında saklayın ve daha iyi performans ve paylaşım yetenekleri için Base64 verileri yerine URL'ler döndürün.
  - Hafif, `sıfır bağımlılık` ile kolayca kurulabilir.
  - Son derece `güvenli`, tamamen yerel olarak oluşturulur, herhangi bir uzak hizmete bağlı değildir.


  ## 🤖 Kullanım

  ### Ön Koşullar

  - Node.js 18 veya daha yüksek sürüm gereklidir.

  ### Masaüstü Uygulamaları (stdio transport)

  `Masaüstü APP` ile kullanmak için, Claude, VSCode, Cline, Cherry Studio vb. gibi, aşağıdaki MCP sunucu konfigürasyonunu ekleyin. Mac sisteminde:

  ```json
  {
    "mcpServers": {
      "mcp-echarts": {
        "command": "npx",
        "args": [
          "-y",
          "mcp-echarts"
        ]
      }
    }
  }
  ```

  Windows sisteminde:

  ```json
  {
    "mcpServers": {
      "mcp-echarts": {
        "command": "cmd",
        "args": [
          "/c",
          "npx",
          "-y",
          "mcp-echarts"
        ]
      }
    }
  }
  ```

  Ayrıca [modelscope](https://www.modelscope.cn/mcp/servers/hustcc/MCP-ECharts), [glama.ai](https://glama.ai/mcp/servers/@hustcc/mcp-echarts), [smithery.ai](https://smithery.ai/server/@hustcc/mcp-echarts) veya HTTP, SSE Protokolü ile diğer platformlarda kullanabilirsiniz.


  ## 🚰 SSE veya Streamable transport ile çalıştırma

  Paketi global olarak kurun.

  ```bash
  npm install -g mcp-echarts
  ```

  Sunucuyu tercih ettiğiniz transport seçeneği ile çalıştırın:

  ```bash
  # SSE transport için (varsayılan endpoint: /sse)
  mcp-echarts -t sse

  # Streamable transport için özel endpoint ile
  mcp-echarts -t streamable
  ```

  Daha sonra sunucuya şu adreslerde erişebilirsiniz:
  - SSE transport: `http://localhost:3033/sse`
  - Streamable transport: `http://localhost:3033/mcp`


  ## 🎮 CLI Seçenekleri

  MCP sunucusunu çalıştırırken aşağıdaki CLI seçeneklerini de kullanabilirsiniz. Komut seçenekleri için `-h` ile CLI'yi çalıştırın.

  ```plain
  MCP ECharts CLI

  Options:
    --transport, -t  Transport protokolünü belirtin: "stdio", "sse" veya "streamable" (varsayılan: "stdio")
    --port, -p       SSE veya streamable transport için portu belirtin (varsayılan: 3033)
    --endpoint, -e   Transport için endpoint belirtin:
                      - SSE için: varsayılan "/sse"
                      - streamable için: varsayılan "/mcp"
    --help, -h       Bu yardım mesajını göster
  ```


  ## 🗂️ MinIO Konfigürasyonu (İsteğe Bağlı)

  Daha iyi performans ve paylaşım yetenekleri için, MinIO nesne depolamasını yapılandırarak grafik resimlerini Base64 verileri yerine URL'ler olarak saklayabilirsiniz.

  > [!NOTE]
  > MinIO yapılandırılmamışsa veya kullanılamıyorsa, sistem otomatik olarak `Base64` veri çıkışına döner, uyumluluğu sağlar.

  Aşağıdaki `MinIO` nesne depolama sağlayıcılarıyla entegre edebiliriz.

   - [MinIO](https://min.io/): Yüksek performanslı, S3 uyumlu nesne depolaması. Doğrudan entegrasyon için [MinIO JavaScript Client](https://docs.min.io/enterprise/aistor-object-store/developers/sdk/javascript/) kullanın.
   - [Amazon S3](https://aws.amazon.com/s3/): Uyumlu API endpoint ile [AWS SDK](https://aws.amazon.com/sdk-for-javascript/) kullanın.
   - [Alibaba Cloud OSS](https://www.alibabacloud.com/product/object-storage-service): OSS hizmetleri için [Alibaba Cloud SDK](https://www.alibabacloud.com/help/en/sdk) kullanın.
   - [Google Cloud Storage](https://cloud.google.com/storage): [Google Cloud SDK](https://cloud.google.com/sdk) veya uyumlu API kullanarak entegre edin.
   - [Microsoft Azure Blob Storage](https://azure.microsoft.com/en-us/products/storage/blobs): Blob depolama erişimi için [Azure SDK](https://azure.microsoft.com/en-us/downloads/) kullanın.
   - [Tencent Cloud COS](https://intl.cloud.tencent.com/product/cos): COS entegrasyonu için [Tencent Cloud SDK](https://intl.cloud.tencent.com/document/product/436/6474) kullanın.

  Ayrıca, MinIO'yu yerel olarak ücretsiz olarak kurabilirsiniz.

  1. **MinIO'yu yerel olarak kurun ve başlatın:**

     ```bash
     # MinIO'yu indirin (macOS örneği)
     brew install minio/stable/minio
     
     # MinIO sunucusunu başlatın
     minio server ~/minio-data --console-address :9001
     ```

  3. **Ortam değişkenlerini yapılandırın:**

     ```bash
     # Örnek ortam dosyasını kopyalayın
     cp .env.example .env
     
     # MinIO ayarlarınız ile .env'i düzenleyin
     MINIO_ENDPOINT=localhost
     MINIO_PORT=9000
     MINIO_USE_SSL=false
     MINIO_ACCESS_KEY=minioadmin
     MINIO_SECRET_KEY=minioadmin
     MINIO_BUCKET_NAME=mcp-echarts
     ```


  ## 🔨 Geliştirme

  Bağımlılıkları kurun:

  ```bash
  npm install
  ```

  Sunucuyu oluşturun:

  ```bash
  npm run build
  ```

  MCP sunucusunu başlatın:

  ```bash
  npm run start
  ```


  ## 🧑🏻‍💻 Katkı Sağlayanlar

  - [lyw405](https://github.com/lyw405): `15+` grafik MCP aracını destekler. [#2](https://github.com/hustcc/mcp-echarts/issues/2)
  - [2niuhe](https://github.com/2niuhe): SSE ve Streaming HTTP ile MCP desteği. [#17](https://github.com/hustcc/mcp-echarts/issues/17)
  - [susuperli](https://github.com/susuperli): Grafik resim base64'ü kaydetmek ve URL döndürmek için `MinIO` kullanın. [#10](https://github.com/hustcc/mcp-echarts/issues/10)
  - [BQXBQX](https://github.com/BQXBQX): node-canvas yerine `@napi-rs/canvas` kullanın. [#3](https://github.com/hustcc/mcp-echarts/issues/3)
  - [Meet-student](https://github.com/Meet-student): Tüm grafik araçları için `outputType` şeması ekleyin. [#24](https://github.com/hustcc/mcp-echarts/issues/24)
  - [hustcc](https://github.com/hustcc): Repo'yu başlatıyor.


  ## 📄 Lisans

  MIT@[hustcc](https://github.com/hustcc).
---

#  MCP ECharts ![](https://badge.mcpx.dev?type=server 'MCP Server')  [![build](https://github.com/hustcc/mcp-echarts/actions/workflows/build.yml/badge.svg)](https://github.com/hustcc/mcp-echarts/actions/workflows/build.yml) [![npm Version](https://img.shields.io/npm/v/mcp-echarts.svg)](https://www.npmjs.com/package/mcp-echarts) [![smithery badge](https://smithery.ai/badge/@hustcc/mcp-echarts)](https://smithery.ai/server/@hustcc/mcp-echarts) [![npm License](https://img.shields.io/npm/l/mcp-echarts.svg)](https://www.npmjs.com/package/mcp-echarts) [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/hustcc/mcp-echarts)](https://archestra.ai/mcp-catalog/hustcc__mcp-echarts)

Generate  [Apache ECharts](https://echarts.apache.org/) with AI MCP dynamically for chart generation and data analysis. _Also you can use  [mcp-server-chart](https://github.com/antvis/mcp-server-chart) to generate chart, graph, map._

<div align="center">
  
</div>

<div align="center">
  
</div>

## ✨ Features

- Fully support all features and syntax of `ECharts`, include data, style, theme and so on.
- Support exporting to `png`, `svg`, and `option` formats, with validation for `ECharts` to facilitate the model's multi-round output of correct syntax and graphics.
- MinIO Integration, store charts in `MinIO` object storage and return URLs instead of Base64 data for better performance and sharing capabilities.
- Lightweight, we can install it easily with `zero dependence`.
- Extremely `secure`, fully generated locally, without relying on any remote services.


## 🤖 Usage

### Prerequisites

- Node.js 18 or higher is required.

### Desktop Applications (stdio transport)

To use with `Desktop APP`, such as Claude, VSCode, Cline, Cherry Studio, and so on, add the  MCP server config below. On Mac system:

```json
{
  "mcpServers": {
    "mcp-echarts": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-echarts"
      ]
    }
  }
}
```

On Window system:

```json
{
  "mcpServers": {
    "mcp-echarts": {
      "command": "cmd",
      "args": [
        "/c",
        "npx",
        "-y",
        "mcp-echarts"
      ]
    }
  }
}
```

Also, you can use it on [modelscope](https://www.modelscope.cn/mcp/servers/hustcc/MCP-ECharts), [glama.ai](https://glama.ai/mcp/servers/@hustcc/mcp-echarts), [smithery.ai](https://smithery.ai/server/@hustcc/mcp-echarts) or others with HTTP, SSE Protocol.


## 🚰 Run with SSE or Streamable transport

Install the package globally.

```bash
npm install -g mcp-echarts
```

Run the server with your preferred transport option:

```bash
# For SSE transport (default endpoint: /sse)
mcp-echarts -t sse

# For Streamable transport with custom endpoint
mcp-echarts -t streamable
```

Then you can access the server at:
- SSE transport: `http://localhost:3033/sse`
- Streamable transport: `http://localhost:3033/mcp`


## 🎮 CLI Options

You can also use the following CLI options when running the MCP server. Command options by run cli with `-h`.

```plain
MCP ECharts CLI

Options:
  --transport, -t  Specify the transport protocol: "stdio", "sse", or "streamable" (default: "stdio")
  --port, -p       Specify the port for SSE or streamable transport (default: 3033)
  --endpoint, -e   Specify the endpoint for the transport:
                    - For SSE: default is "/sse"
                    - For streamable: default is "/mcp"
  --help, -h       Show this help message
```


## 🗂️ MinIO Configuration (Optional)

For better performance and sharing capabilities, you can configure MinIO object storage to store chart images as URLs instead of Base64 data.

> [!NOTE]
> If MinIO is not configured or unavailable, the system automatically falls back to `Base64` data output, ensuring compatibility.

We can Integrate with `MinIO` object storage providers below.

 - [MinIO](https://min.io/): High-performance, S3-compatible object storage. Use [MinIO JavaScript Client](https://docs.min.io/enterprise/aistor-object-store/developers/sdk/javascript/) for direct integration.
 - [Amazon S3](https://aws.amazon.com/s3/): Use [AWS SDK](https://aws.amazon.com/sdk-for-javascript/) with compatible API endpoint.
 - [Alibaba Cloud OSS](https://www.alibabacloud.com/product/object-storage-service): Use the [Alibaba Cloud SDK](https://www.alibabacloud.com/help/en/sdk) for OSS services.
 - [Google Cloud Storage](https://cloud.google.com/storage): Integrate using [Google Cloud SDK](https://cloud.google.com/sdk) or compatible API.
 - [Microsoft Azure Blob Storage](https://azure.microsoft.com/en-us/products/storage/blobs): Use [Azure SDK](https://azure.microsoft.com/en-us/downloads/) for Blob storage access.
 - [Tencent Cloud COS](https://intl.cloud.tencent.com/product/cos): Use the [Tencent Cloud SDK](https://intl.cloud.tencent.com/document/product/436/6474) for COS integration.

Also, we can setup MinIO locally for free.

1. **Install and start MinIO locally:**

   ```bash
   # Download MinIO (macOS example)
   brew install minio/stable/minio
   
   # Start MinIO server
   minio server ~/minio-data --console-address :9001
   ```

3. **Configure environment variables:**

   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env with your MinIO settings
   MINIO_ENDPOINT=localhost
   MINIO_PORT=9000
   MINIO_USE_SSL=false
   MINIO_ACCESS_KEY=minioadmin
   MINIO_SECRET_KEY=minioadmin
   MINIO_BUCKET_NAME=mcp-echarts
   ```


## 🔨 Development

Install dependencies:

```bash
npm install
```

Build the server:

```bash
npm run build
```

Start the MCP server:

```bash
npm run start
```


## 🧑🏻‍💻 Contributors

- [lyw405](https://github.com/lyw405): Supports `15+` charting MCP tool. [#2](https://github.com/hustcc/mcp-echarts/issues/2)
- [2niuhe](https://github.com/2niuhe): Support MCP with SSE and Streaming HTTP. [#17](https://github.com/hustcc/mcp-echarts/issues/17)
- [susuperli](https://github.com/susuperli): Use `MinIO` to save the chart image base64 and return the url. [#10](https://github.com/hustcc/mcp-echarts/issues/10)
- [BQXBQX](https://github.com/BQXBQX): Use `@napi-rs/canvas` instead node-canvas. [#3](https://github.com/hustcc/mcp-echarts/issues/3)
- [Meet-student](https://github.com/Meet-student): Add `outputType` schema for all chart tools. [#24](https://github.com/hustcc/mcp-echarts/issues/24)
- [hustcc](https://github.com/hustcc): Initial the repo.


## 📄 License

MIT@[hustcc](https://github.com/hustcc).
