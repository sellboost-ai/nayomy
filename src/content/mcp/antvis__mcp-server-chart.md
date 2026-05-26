---
name: "antvis/mcp-server-chart"
description: "A Model Context Protocol server for generating visual charts using AntV."
category: "Customer Data Platforms"
repo: "antvis/mcp-server-chart"
stars: 4102
url: "https://github.com/antvis/mcp-server-chart"
body_length: 14053
license: "MIT"
language: "TypeScript"
homepage: "https://github.com/antvis/mcp-server-chart"
body_tr: |-
  # MCP Server Chart 

  Model Context Protocol sunucusu [AntV](https://github.com/antvis/) kullanarak grafikler oluşturmak için. Bu mcp sunucusunu _grafik oluşturma_ ve _veri analizi_ için kullanabiliriz.

  ![](https://badge.mcpx.dev?type=server "MCP Server") [![build](https://github.com/antvis/mcp-server-chart/actions/workflows/build.yml/badge.svg)](https://github.com/antvis/mcp-server-chart/actions/workflows/build.yml) [![npm Version](https://img.shields.io/npm/v/@antv/mcp-server-chart.svg)](https://www.npmjs.com/package/@antv/mcp-server-chart) [![npm License](https://img.shields.io/npm/l/@antv/mcp-server-chart.svg)](https://www.npmjs.com/package/@antv/mcp-server-chart) [![codecov](https://codecov.io/gh/antvis/mcp-server-chart/graph/badge.svg?token=7R98VGO5GL)](https://codecov.io/gh/antvis/mcp-server-chart) [![smithery installations badge](https://smithery.ai/badge/antvis/mcp-server-chart)](https://smithery.ai/servers/antvis/mcp-server-chart) ![Visitors](https://hitscounter.dev/api/hit?url=https://github.com/antvis/mcp-server-chart&label=Visitors&icon=graph-up&color=%23dc3545&message=&style=flat&tz=UTC)



  Bu, grafik oluşturma özelliklerini sağlayan TypeScript tabanlı bir MCP sunucusudur. MCP araçları aracılığıyla çeşitli grafik türleri oluşturmanıza olanak tanır. Bunu [Dify](https://marketplace.dify.ai/plugins/antv/visualization) uygulamasında da kullanabilirsiniz.

  ## 📋 İçindekiler

  - [✨ Özellikler](#-özellikler)
  - [🤖 Kullanım](#-kullanım)
  - [🎨 Yetenek Kullanımı](#-yetenek-kullanımı)
  - [🚰 SSE veya Streamable transport ile çalıştırın](#-sse-veya-streamable-transport-ile-çalıştırın)
  - [🎮 CLI Seçenekleri](#-cli-seçenekleri)
  - [⚙️ Ortam Değişkenleri](#%EF%B8%8F-ortam-değişkenleri)
    - [VIS_REQUEST_SERVER](#-özel-dağıtım)
    - [SERVICE_ID](#%EF%B8%8F-kayıt-oluşturun)
    - [DISABLED_TOOLS](#%EF%B8%8F-araç-filtreleme)
  - [📠 Özel Dağıtım](#-özel-dağıtım)
  - [🗺️ Kayıt Oluşturun](#%EF%B8%8F-kayıt-oluşturun)
  - [🎛️ Araç Filtreleme](#%EF%B8%8F-araç-filtreleme)
  - [🔨 Geliştirme](#-geliştirme)
  - [📄 Lisans](#-lisans)

  ## ✨ Özellikler

  Şu anda 26+ grafik desteklenmektedir.



  1. `generate_area_chart`: `alan` grafiği oluşturun, sürekli bağımsız değişken altında verilerin eğilimini göstermek için kullanılır, genel veri eğilimlerinin gözlemlenmesine izin verir.
  1. `generate_bar_chart`: `çubuk` grafiği oluşturun, farklı kategoriler arasında değerleri karşılaştırmak için kullanılır, yatay karşılaştırmalar için uygun.
  1. `generate_boxplot_chart`: `boxplot` oluşturun, veri dağılımını, medyanı, dörttebirlikler ve aykırı değerleri göstermek için kullanılır.
  1. `generate_column_chart`: `sütun` grafiği oluşturun, farklı kategoriler arasında değerleri karşılaştırmak için kullanılır, dikey karşılaştırmalar için uygun.
  1. `generate_district_map` - `bölge haritası` oluşturun, idari bölümleri ve veri dağılımını göstermek için kullanılır.
  1. `generate_dual_axes_chart`: `çift eksenli` grafik oluşturun, farklı birimler veya aralıklar ile iki değişken arasındaki ilişkiyi göstermek için kullanılır.
  1. `generate_fishbone_diagram`: `balık kılçığı` diyagramı oluşturun, Ishikawa diyagramı olarak da bilinir, bir problemin kök nedenlerini tanımlamak ve göstermek için kullanılır.
  1. `generate_flow_diagram`: `akış şeması` oluşturun, bir sürecin adımlarını ve sırasını göstermek için kullanılır.
  1. `generate_funnel_chart`: `huni` grafiği oluşturun, farklı aşamalardaki veri kaybını göstermek için kullanılır.
  1. `generate_histogram_chart`: `histogram` oluşturun, verileri aralıklara bölerek ve her aralıktaki veri noktalarının sayısını sayarak veri dağılımını göstermek için kullanılır.
  1. `generate_line_chart`: `çizgi` grafiği oluşturun, zamanla veya başka bir sürekli değişkenle verilerin eğilimini göstermek için kullanılır.
  1. `generate_liquid_chart`: `sıvı` grafiği oluşturun, veri oranını göstermek için kullanılır, yüzdeleri görsel olarak su dolu küreler şeklinde temsil eder.
  1. `generate_mind_map`: `zihin haritası` oluşturun, düşünce süreçlerini ve hiyerarşik bilgileri göstermek için kullanılır.
  1. `generate_network_graph`: `ağ` grafiği oluşturun, düğümler arasındaki ilişkileri ve bağlantıları göstermek için kullanılır.
  1. `generate_organization_chart`: `örgütsel` grafik oluşturun, bir örgütün yapısını ve personel ilişkilerini göstermek için kullanılır.
  1. `generate_path_map` - `yol haritası` oluşturun, POI'ler için rota planlama sonuçlarını göstermek için kullanılır.
  1. `generate_pie_chart`: `pasta` grafiği oluşturun, veri oranını göstermek için kullanılır, bunu her kısmın yüzdesini gösteren sektörler tarafından temsil edilen parçalara böler.
  1. `generate_pin_map` - `pim haritası` oluşturun, POI'lerin dağılımını göstermek için kullanılır.
  1. `generate_radar_chart`: `radar` grafiği oluşturun, çok boyutlu verileri kapsamlı şekilde göstermek için kullanılır, birden çok boyutu radar benzeri bir biçimde gösterir.
  1. `generate_sankey_chart`: `sankey` grafiği oluşturun, veri akışını ve hacmini göstermek için kullanılır, farklı düğümler arasında verilerin hareketini Sankey stili biçimde temsil eder.
  1. `generate_scatter_chart`: `dağılım` grafiği oluşturun, iki değişken arasındaki ilişkiyi göstermek için kullanılır, veri noktalarını koordinat sisteminde dağılmış noktalar olarak gösterir.
  1. `generate_treemap_chart`: `ağaç haritası` oluşturun, hiyerarşik verileri göstermek için kullanılır, verileri dikdörtgen biçimlerde gösterir; burada dikdörtgenlerin boyutu verilerin değerini temsil eder.
  1. `generate_venn_chart`: `venn` diyagramı oluşturun, kesişimler, birleşimler ve farklar da dahil olmak üzere kümeler arasındaki ilişkileri göstermek için kullanılır.
  1. `generate_violin_chart`: `keman` grafiği oluşturun, veri dağılımını göstermek için kullanılır, boxplot'lar ve yoğunluk grafiklerinin özelliklerini birleştirerek veri dağılımının daha ayrıntılı bir görünümünü sağlar.
  1. `generate_word_cloud_chart`: `kelime bulutu` oluşturun, metinsel verilerde kelime sıklığını göstermek için kullanılır, yazı tipi boyutları her kelimenin sıklığını gösterir.
  1. `generate_spreadsheet`: Tablosal verileri göstermek için bir `elektronik tablo` veya pivot tablo oluşturun. 'rows' veya 'values' alanları sağlandığında, pivot tablo (çapraz tabülasyon) olarak işlenir; aksi takdirde normal bir tablo olarak işlenir.

  > [!NOTE]
  > Yukarıdaki coğrafi görselleştirme grafik oluşturma aracı [AMap hizmetini](https://lbs.amap.com/) kullanır ve şu anda yalnızca Çin içinde harita oluşturmayı destekler.

  ## 🤖 Kullanım

  Claude, VSCode, [Cline](https://cline.bot/mcp-marketplace), Cherry Studio, Cursor gibi `Masaüstü Uygulaması` ile kullanmak için aşağıdaki MCP sunucusu yapılandırmasını ekleyin. Mac sisteminde:

  ```json
  {
    "mcpServers": {
      "mcp-server-chart": {
        "command": "npx",
        "args": ["-y", "@antv/mcp-server-chart"]
      }
    }
  }
  ```

  Windows sisteminde:

  ```json
  {
    "mcpServers": {
      "mcp-server-chart": {
        "command": "cmd",
        "args": ["/c", "npx", "-y", "@antv/mcp-server-chart"]
      }
    }
  }
  ```

  Ayrıca [aliyun](https://bailian.console.aliyun.com/?tab=mcp#/mcp-market/detail/antv-visualization-chart), [modelscope](https://www.modelscope.cn/mcp/servers/@antvis/mcp-server-chart), [glama.ai](https://glama.ai/mcp/servers/@antvis/mcp-server-chart), [smithery.ai](https://smithery.ai/servers/@antvis/mcp-server-chart) veya HTTP, SSE Protokolü ile diğer platformlarda kullanabilirsiniz.

  ## 🎨 Yetenek Kullanımı

  Yetenek desteği olan bir AI IDE kullanıyorsanız (örneğin **Claude Code**), en iyi grafik türünü otomatik olarak seçip görselleştirme oluşturmak için `chart-visualization` yeteneğini kullanabilirsiniz.

  Yeteneği şu adresten ekleyebilirsiniz [https://github.com/antvis/chart-visualization-skills](https://github.com/antvis/chart-visualization-skills):

  ```bash
  npx skills add antvis/chart-visualization-skills
  ```

  Daha sonra verilerinizi sağlayın veya istediğiniz görselleştirmeyi açıklayın. Yetenek akıllıca 25+ grafik türünden seçim yapacak ve grafiği sizin için oluşturacaktır.

  ## 🚰 SSE veya Streamable transport ile çalıştırın

  ### Doğrudan çalıştırın

  Paketi genel olarak yükleyin.

  ```bash
  npm install -g @antv/mcp-server-chart
  ```

  Sunucuyu tercih ettiğiniz transport seçeneği ile çalıştırın:

  ```bash
  # SSE transport için (varsayılan endpoint: /sse)
  mcp-server-chart --transport sse

  # Özel endpoint ile Streamable transport için
  mcp-server-chart --transport streamable
  ```

  Daha sonra sunucuya şu adresten erişebilirsiniz:

  - SSE transport: `http://localhost:1122/sse`
  - Streamable transport: `http://localhost:1122/mcp`

  ### Docker dağıtımı

  Docker dizinine girin.

  ```bash
  cd docker
  ```

  Docker-compose kullanarak dağıtın.

  ```bash
  docker compose up -d
  ```

  Daha sonra sunucuya şu adresten erişebilirsiniz:

  - SSE transport: `http://localhost:1123/sse`
  - Streamable transport: `http://localhost:1122/mcp`

  ## 🎮 CLI Seçenekleri

  MCP sunucusunu çalıştırırken aşağıdaki CLI seçeneklerini de kullanabilirsiniz. CLI'yi `-H` ile çalıştırarak komut seçeneklerini görebilirsiniz.

  ```plain
  MCP Server Chart CLI

  Options:
    --transport, -t  Taşıma protokolünü belirtin: "stdio", "sse" veya "streamable" (varsayılan: "stdio")
    --host, -h       SSE veya streamable transport için ana bilgisayarı belirtin (varsayılan: localhost)
    --port, -p       SSE veya streamable transport için bağlantı noktasını belirtin (varsayılan: 1122)
    --endpoint, -e   Taşıma için uç noktasını belirtin:
                     - SSE için: varsayılan "/sse"
                     - Streamable için: varsayılan "/mcp"
    --help, -H       Bu yardım mesajını göster
  ```

  ## ⚙️ Ortam Değişkenleri

  | Değişken             | Açıklama                                                     | Varsayılan                                   | Örnek                                         |
  | -------------------- | :----------------------------------------------------------- | -------------------------------------------- | --------------------------------------------- |
  | `VIS_REQUEST_SERVER` | Özel dağıtım için özel grafik oluşturma hizmeti URL'si      | `https://antv-studio.alipay.com/api/gpt-vis` | `https://your-server.com/api/chart`           |
  | `SERVICE_ID`         | Grafik oluşturma kayıtları için hizmet tanımlayıcısı         | -                                            | `your-service-id-123`                         |
  | `DISABLED_TOOLS`     | Devre dışı bırakılacak araç adlarının virgülle ayrılmış listesi | -                                            | `generate_fishbone_diagram,generate_mind_map` |

  ### 📠 Özel Dağıtım

  `MCP Server Chart` varsayılan olarak ücretsiz bir grafik oluşturma hizmeti sağlar. Özel dağıtım ihtiyacı olan kullanıcılar `VIS_REQUEST_SERVER` kullanarak kendi grafik oluşturma hizmetlerini özelleştirebilirler.

  ```json
  {
    "mcpServers": {
      "mcp-server-chart": {
        "command": "npx",
        "args": ["-y", "@antv/mcp-server-chart"],
        "env": {
          "VIS_REQUEST_SERVER": "<YOUR_VIS_REQUEST_SERVER>"
        }
      }
    }
  }
  ```

  Özel bir ortamda HTTP hizmeti dağıtmak için AntV'nin [GPT-Vis-SSR](https://github.com/antvis/GPT-Vis/tree/main/bindings/gpt-vis-ssr) projesini kullanabilir ve ardından URL adresini `VIS_REQUEST_SERVER` env aracılığıyla geçirebilirsiniz.

  - **Yöntem**: `POST`
  - **Parametre**: `GPT-Vis-SSR` uygulamasına geçirilecektir. Örneğin, `{ "type": "line", "data": [{ "time": "2025-05", "value": 512 }, { "time": "2025-06", "value": 1024 }] }`.
  - **Dönüş**: HTTP hizmetinin dönüş nesnesi.
    - **success**: `boolean` Grafik görüntüsü başarıyla oluşturuldu mu.
    - **resultObj**: `string` Grafik görüntüsü URL'si.
    - **errorMessage**: `string` `success = false` olduğunda hata mesajını döndür.

  > [!NOTE]
  > Özel dağıtım çözümü şu anda 3 aracı içeren coğrafi görselleştirme grafik oluşturmayı desteklemez: `geographic-district-map`, `geographic-path-map`, `geographic-pin-map`.

  ### 🗺️ Kayıt Oluşturun

  Varsayılan olarak, kullanıcıların sonuçları kendileri kaydetmeleri gerekir, ancak biz ayrıca grafik oluşturma kayıtlarını görmek için bir hizmet sağlarız; bu, kullanıcıların kendilerine bir hizmet tanımlayıcısı oluşturup yapılandırmasını gerektirir.

  Mini uygulamayı açmak için Alipay ile tarayın ve kişisel bir hizmet tanımlayıcısı oluşturun (aşağıda "Benim" menüsüne tıklayın, "Hizmetlerim" sayfasına girin, "Oluştur" düğmesine tıklayın ve başarı sonrasında "Kopyala" düğmesine tıklayın):



  Ardından, MCP sunucusu yapılandırmasına `SERVICE_ID` ortam değişkenini eklemeniz gerekir. Örneğin, Mac için yapılandırma aşağıdaki gibidir (Windows sistemleri için sadece `env` değişkenini ekleyin):

  ```json
  {
    "mcpServers": {
      "AntV Map": {
        "command": "npx",
        "args": ["-y", "@antv/mcp-server-chart"],
        "env": {
          "SERVICE_ID": "***********************************"
        }
      }
    }
  }
  ```

  MCP Server yapılandırmasını güncelledikten sonra, AI istemci uygulamanızı yeniden başlatmanız ve MCP Server'ı başarıyla başlattığınız ve bağlandığınızı kontrol etmeniz gerekir. Daha sonra haritayı yeniden oluşturmayı deneyebilirsiniz. Oluşturma başarılı olduktan sonra, mini uygulamanın "Haritalarım" sayfasına giderek harita oluşturma kayıtlarınızı görebilirsiniz.



  ### 🎛️ Araç Filtreleme

  `DISABLED_TOOLS` ortam değişkenini kullanarak belirli grafik oluşturma araçlarını devre dışı bırakabilirsiniz. Bu, bazı araçların MCP istemciniz ile uyumluluk sorunları olması veya kullanılabilir işlevselliği sınırlamak istediğinizde yararlıdır.

  ```json
  {
    "mcpServers": {
      "mcp-server-chart": {
        "command": "npx",
        "args": ["-y", "@antv/mcp-server-chart"],
        "env": {
          "DISABLED_TOOLS": "generate_fishbone_diagram,generate_mind_map"
        }
      }
    }
  }
  ```

  **Filtreleme için kullanılabilir araç adları** Bkz. [✨ Özellikler](#-özellikler).

  ## 🔨 Geliştirme

  Bağımlılıkları yükleyin:

  ```bash
  npm install
  ```

  Sunucuyu derleyin:

  ```bash
  npm run build
  ```

  MCP sunucusunu başlatın:

  ```bash
  npm run start
  ```

  MCP sunucusunu SSE transport ile başlatın:

  ```bash
  node build/index.js -t sse
  ```

  MCP sunucusunu Streamable transport ile başlatın:

  ```bash
  node build/index.js -t streamable
  ```

  ## 📄 Lisans

  MIT@[AntV](https://github.com/antvis).
---

# MCP Server Chart 

A Model Context Protocol server for generating charts using [AntV](https://github.com/antvis/). We can use this mcp server for _chart generation_ and _data analysis_.

![](https://badge.mcpx.dev?type=server "MCP Server") [![build](https://github.com/antvis/mcp-server-chart/actions/workflows/build.yml/badge.svg)](https://github.com/antvis/mcp-server-chart/actions/workflows/build.yml) [![npm Version](https://img.shields.io/npm/v/@antv/mcp-server-chart.svg)](https://www.npmjs.com/package/@antv/mcp-server-chart) [![npm License](https://img.shields.io/npm/l/@antv/mcp-server-chart.svg)](https://www.npmjs.com/package/@antv/mcp-server-chart) [![codecov](https://codecov.io/gh/antvis/mcp-server-chart/graph/badge.svg?token=7R98VGO5GL)](https://codecov.io/gh/antvis/mcp-server-chart) [![smithery installations badge](https://smithery.ai/badge/antvis/mcp-server-chart)](https://smithery.ai/servers/antvis/mcp-server-chart) ![Visitors](https://hitscounter.dev/api/hit?url=https://github.com/antvis/mcp-server-chart&label=Visitors&icon=graph-up&color=%23dc3545&message=&style=flat&tz=UTC)



This is a TypeScript-based MCP server that provides chart generation capabilities. It allows you to create various types of charts through MCP tools. You can also use it in [Dify](https://marketplace.dify.ai/plugins/antv/visualization).

## 📋 Table of Contents

- [✨ Features](#-features)
- [🤖 Usage](#-usage)
- [🎨 Skill Usage](#-skill-usage)
- [🚰 Run with SSE or Streamable transport](#-run-with-sse-or-streamable-transport)
- [🎮 CLI Options](#-cli-options)
- [⚙️ Environment Variables](#%EF%B8%8F-environment-variables)
  - [VIS_REQUEST_SERVER](#-private-deployment)
  - [SERVICE_ID](#%EF%B8%8F-generate-records)
  - [DISABLED_TOOLS](#%EF%B8%8F-tool-filtering)
- [📠 Private Deployment](#-private-deployment)
- [🗺️ Generate Records](#%EF%B8%8F-generate-records)
- [🎛️ Tool Filtering](#%EF%B8%8F-tool-filtering)
- [🔨 Development](#-development)
- [📄 License](#-license)

## ✨ Features

Now 26+ charts supported.



1. `generate_area_chart`: Generate an `area` chart, used to display the trend of data under a continuous independent variable, allowing observation of overall data trends.
1. `generate_bar_chart`: Generate a `bar` chart, used to compare values across different categories, suitable for horizontal comparisons.
1. `generate_boxplot_chart`: Generate a `boxplot`, used to display the distribution of data, including the median, quartiles, and outliers.
1. `generate_column_chart`: Generate a `column` chart, used to compare values across different categories, suitable for vertical comparisons.
1. `generate_district_map` - Generate a `district-map`, used to show administrative divisions and data distribution.
1. `generate_dual_axes_chart`: Generate a `dual-axes` chart, used to display the relationship between two variables with different units or ranges.
1. `generate_fishbone_diagram`: Generate a `fishbone` diagram, also known as an Ishikawa diagram, used to identify and display the root causes of a problem.
1. `generate_flow_diagram`: Generate a `flowchart`, used to display the steps and sequence of a process.
1. `generate_funnel_chart`: Generate a `funnel` chart, used to display data loss at different stages.
1. `generate_histogram_chart`: Generate a `histogram`, used to display the distribution of data by dividing it into intervals and counting the number of data points in each interval.
1. `generate_line_chart`: Generate a `line` chart, used to display the trend of data over time or another continuous variable.
1. `generate_liquid_chart`: Generate a `liquid` chart, used to display the proportion of data, visually representing percentages in the form of water-filled spheres.
1. `generate_mind_map`: Generate a `mind-map`, used to display thought processes and hierarchical information.
1. `generate_network_graph`: Generate a `network` graph, used to display relationships and connections between nodes.
1. `generate_organization_chart`: Generate an `organizational` chart, used to display the structure of an organization and personnel relationships.
1. `generate_path_map` - Generate a `path-map`, used to display route planning results for POIs.
1. `generate_pie_chart`: Generate a `pie` chart, used to display the proportion of data, dividing it into parts represented by sectors showing the percentage of each part.
1. `generate_pin_map` - Generate a `pin-map`, used to show the distribution of POIs.
1. `generate_radar_chart`: Generate a `radar` chart, used to display multi-dimensional data comprehensively, showing multiple dimensions in a radar-like format.
1. `generate_sankey_chart`: Generate a `sankey` chart, used to display data flow and volume, representing the movement of data between different nodes in a Sankey-style format.
1. `generate_scatter_chart`: Generate a `scatter` plot, used to display the relationship between two variables, showing data points as scattered dots on a coordinate system.
1. `generate_treemap_chart`: Generate a `treemap`, used to display hierarchical data, showing data in rectangular forms where the size of rectangles represents the value of the data.
1. `generate_venn_chart`: Generate a `venn` diagram, used to display relationships between sets, including intersections, unions, and differences.
1. `generate_violin_chart`: Generate a `violin` plot, used to display the distribution of data, combining features of boxplots and density plots to provide a more detailed view of the data distribution.
1. `generate_word_cloud_chart`: Generate a `word-cloud`, used to display the frequency of words in textual data, with font sizes indicating the frequency of each word.
1. `generate_spreadsheet`: Generate a `spreadsheet` or pivot table for displaying tabular data. When 'rows' or 'values' fields are provided, it renders as a pivot table (cross-tabulation); otherwise, it renders as a regular table.

> [!NOTE]
> The above geographic visualization chart generation tool uses [AMap service](https://lbs.amap.com/) and currently only supports map generation within China.

## 🤖 Usage

To use with `Desktop APP`, such as Claude, VSCode, [Cline](https://cline.bot/mcp-marketplace), Cherry Studio, Cursor, and so on, add the MCP server config below. On Mac system:

```json
{
  "mcpServers": {
    "mcp-server-chart": {
      "command": "npx",
      "args": ["-y", "@antv/mcp-server-chart"]
    }
  }
}
```

On Window system:

```json
{
  "mcpServers": {
    "mcp-server-chart": {
      "command": "cmd",
      "args": ["/c", "npx", "-y", "@antv/mcp-server-chart"]
    }
  }
}
```

Also, you can use it on [aliyun](https://bailian.console.aliyun.com/?tab=mcp#/mcp-market/detail/antv-visualization-chart), [modelscope](https://www.modelscope.cn/mcp/servers/@antvis/mcp-server-chart), [glama.ai](https://glama.ai/mcp/servers/@antvis/mcp-server-chart), [smithery.ai](https://smithery.ai/servers/@antvis/mcp-server-chart) or others with HTTP, SSE Protocol.

## 🎨 Skill Usage

If you are using an AI IDE with skill support (like **Claude Code**), you can use the `chart-visualization` skill to automatically select the best chart type and generate visualizations.

You can add the skill from [https://github.com/antvis/chart-visualization-skills](https://github.com/antvis/chart-visualization-skills) using:

```bash
npx skills add antvis/chart-visualization-skills
```

Then provide your data or describe the visualization you want. The skill will intelligently choose from 25+ chart types and generate the chart for you.

## 🚰 Run with SSE or Streamable transport

### Run directly

Install the package globally.

```bash
npm install -g @antv/mcp-server-chart
```

Run the server with your preferred transport option:

```bash
# For SSE transport (default endpoint: /sse)
mcp-server-chart --transport sse

# For Streamable transport with custom endpoint
mcp-server-chart --transport streamable
```

Then you can access the server at:

- SSE transport: `http://localhost:1122/sse`
- Streamable transport: `http://localhost:1122/mcp`

### Docker deploy

Enter the docker directory.

```bash
cd docker
```

Deploy using docker-compose.

```bash
docker compose up -d
```

Then you can access the server at:

- SSE transport: `http://localhost:1123/sse`
- Streamable transport: `http://localhost:1122/mcp`

## 🎮 CLI Options

You can also use the following CLI options when running the MCP server. Command options by run cli with `-H`.

```plain
MCP Server Chart CLI

Options:
  --transport, -t  Specify the transport protocol: "stdio", "sse", or "streamable" (default: "stdio")
  --host, -h       Specify the host for SSE or streamable transport (default: localhost)
  --port, -p       Specify the port for SSE or streamable transport (default: 1122)
  --endpoint, -e   Specify the endpoint for the transport:
                   - For SSE: default is "/sse"
                   - For streamable: default is "/mcp"
  --help, -H       Show this help message
```

## ⚙️ Environment Variables

| Variable             | Description                                                | Default                                      | Example                                       |
| -------------------- | :--------------------------------------------------------- | -------------------------------------------- | --------------------------------------------- |
| `VIS_REQUEST_SERVER` | Custom chart generation service URL for private deployment | `https://antv-studio.alipay.com/api/gpt-vis` | `https://your-server.com/api/chart`           |
| `SERVICE_ID`         | Service identifier for chart generation records            | -                                            | `your-service-id-123`                         |
| `DISABLED_TOOLS`     | Comma-separated list of tool names to disable              | -                                            | `generate_fishbone_diagram,generate_mind_map` |

### 📠 Private Deployment

`MCP Server Chart` provides a free chart generation service by default. For users with a need for private deployment, they can try using `VIS_REQUEST_SERVER` to customize their own chart generation service.

```json
{
  "mcpServers": {
    "mcp-server-chart": {
      "command": "npx",
      "args": ["-y", "@antv/mcp-server-chart"],
      "env": {
        "VIS_REQUEST_SERVER": "<YOUR_VIS_REQUEST_SERVER>"
      }
    }
  }
}
```

You can use AntV's project [GPT-Vis-SSR](https://github.com/antvis/GPT-Vis/tree/main/bindings/gpt-vis-ssr) to deploy an HTTP service in a private environment, and then pass the URL address through env `VIS_REQUEST_SERVER`.

- **Method**: `POST`
- **Parameter**: Which will be passed to `GPT-Vis-SSR` for rendering. Such as, `{ "type": "line", "data": [{ "time": "2025-05", "value": 512 }, { "time": "2025-06", "value": 1024 }] }`.
- **Return**: The return object of HTTP service.
  - **success**: `boolean` Whether generate chart image successfully.
  - **resultObj**: `string` The chart image url.
  - **errorMessage**: `string` When `success = false`, return the error message.

> [!NOTE]
> The private deployment solution currently does not support geographic visualization chart generation include 3 tools: `geographic-district-map`, `geographic-path-map`, `geographic-pin-map`.

### 🗺️ Generate Records

By default, users are required to save the results themselves, but we also provide a service for viewing the chart generation records, which requires users to generate a service identifier for themselves and configure it.

Use Alipay to scan and open the mini program to generate a personal service identifier (click the "My" menu below, enter the "My Services" page, click the "Generate" button, and click the "Copy" button after success):



Next, you need to add the `SERVICE_ID` environment variable to the MCP server configuration. For example, the configuration for Mac is as follows (for Windows systems, just add the `env` variable):

```json
{
  "mcpServers": {
    "AntV Map": {
      "command": "npx",
      "args": ["-y", "@antv/mcp-server-chart"],
      "env": {
        "SERVICE_ID": "***********************************"
      }
    }
  }
}
```

After updating the MCP Server configuration, you need to restart your AI client application and check again whether you have started and connected to the MCP Server successfully. Then you can try to generate the map again. After the generation is successful, you can go to the "My Map" page of the mini program to view your map generation records.



### 🎛️ Tool Filtering

You can disable specific chart generation tools using the `DISABLED_TOOLS` environment variable. This is useful when certain tools have compatibility issues with your MCP client or when you want to limit the available functionality.

```json
{
  "mcpServers": {
    "mcp-server-chart": {
      "command": "npx",
      "args": ["-y", "@antv/mcp-server-chart"],
      "env": {
        "DISABLED_TOOLS": "generate_fishbone_diagram,generate_mind_map"
      }
    }
  }
}
```

**Available tool names for filtering** See the [✨ Features](#-features).

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

Start the MCP server with SSE transport:

```bash
node build/index.js -t sse
```

Start the MCP server with Streamable transport:

```bash
node build/index.js -t streamable
```

## 📄 License

MIT@[AntV](https://github.com/antvis).
