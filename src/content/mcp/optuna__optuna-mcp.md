---
name: "optuna/optuna-mcp"
description: "Official MCP server enabling seamless orchestration of hyperparameter search and other optimization tasks with Optuna."
description_tr: "Optuna ile hiperparametre araması ve diğer optimizasyon görevlerinin sorunsuz bir şekilde yönetilmesini sağlayan resmi MCP sunucusu."
category: "Data Science Tools"
repo: "optuna/optuna-mcp"
stars: 76
url: "https://github.com/optuna/optuna-mcp"
body_length: 12060
license: "MIT"
language: "Python"
body_tr: |-
  # Optuna MCP Server

  [![Python](https://img.shields.io/badge/python-3.12%20%7C%203.13-blue)](https://www.python.org)
  [![pypi](https://img.shields.io/pypi/v/optuna-mcp.svg)](https://pypi.python.org/pypi/optuna-mcp)
  [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/optuna/optuna-mcp)
  [![Tests](https://github.com/optuna/optuna-mcp/actions/workflows/tests.yml/badge.svg)](https://github.com/optuna/optuna-mcp/actions/workflows/tests.yml)

  [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) kullanarak [Optuna](http://optuna.org) ile optimizasyon ve analizi otomatikleştiren bir sunucu.

  ## Kullanım Alanları

  Optuna MCP Server aşağıdaki kullanım alanlarında kullanılabilir.

  - LLM'ler tarafından otomatikleştirilmiş hiperparametre optimizasyonu
  - Optuna optimizasyon sonuçlarının sohbet arayüzü aracılığıyla etkileşimli analizi
  - Diğer MCP araçlarının giriş ve çıkışını optimize etme

  Ayrıntılar için [Örnekler bölümüne](#örnekler) bakınız.

  ## Kurulum

  Optuna MCP server, `uv` veya Docker kullanılarak kurulabilir.
  Bu bölüm, MCP istemcisi örneği olarak Claude Desktop kullanılarak Optuna MCP server'ının nasıl kurulacağını açıklamaktadır.

  ### uv ile Kullanım

  Kurulum işlemine başlamadan önce `uv`'yi [Astral](https://docs.astral.sh/uv/getting-started/installation/) adresinden kurunuz.

  Ardından, Optuna MCP server yapılandırmasını MCP istemcisine ekleyiniz.
  Claude Desktop'a dahil etmek için, Claude > Ayarlar > Geliştirici > Yapılandırmayı Düzenle > `claude_desktop_config.json` adresine gidiniz
  ve aşağıdakileri ekleyiniz:

  ```json
  {
    "mcpServers": {
      "Optuna": {
        "command": "/path/to/uvx",
        "args": [
          "optuna-mcp"
        ]
      }
    }
  }
  ```

  Ek olarak, sonuçları kalıcı hale getirmek için `--storage` argümanı ile Optuna depolama alanını belirtebilirsiniz.

  ```json
  {
    "mcpServers": {
      "Optuna": {
        "command": "/path/to/uvx",
        "args": [
          "optuna-mcp",
          "--storage",
          "sqlite:///optuna.db"
        ]
      }
    }
  }
  ```

  Bunu ekledikten sonra lütfen Claude Desktop uygulamasını yeniden başlatınız.
  Claude Desktop hakkında daha fazla bilgi için [hızlı başlangıç sayfasını](https://modelcontextprotocol.io/quickstart/user) kontrol ediniz.

  ### Docker ile Kullanım

  Optuna MCP server'ını Docker kullanarak da çalıştırabilirsiniz. Makinenizde Docker'ın kurulu ve çalışıyor olduğundan emin olunuz.

  ```json
  {
    "mcpServers": {
      "Optuna": {
        "command": "docker",
        "args": [
          "run",
          "-i",
          "--rm",
          "--net=host",
          "-v",
          "/PATH/TO/LOCAL/DIRECTORY/WHICH/INCLUDES/DB/FILE:/app/workspace",
          "ghcr.io/optuna/optuna-mcp:latest",
          "--storage",
          "sqlite:////app/workspace/optuna.db"
        ]
      }
    }
  }
  ```

  ## Optuna MCP tarafından Sağlanan Araçlar

  Optuna MCP aşağıdaki araçları sağlar.
  Özellikle, Optuna'nın Study, Trial, Visualization ve Dashboard gibi ilkel fonksiyonlarını sunar.
  MCP istemcileri araçların listesini ve her araçın ayrıntılarını bildiğinden, kullanıcıların bu ayrıntıları hatırlaması gerekmez.

  ### Study

  - **create_study** - Verilen study_name ve directions ile yeni bir Optuna study'si oluşturunuz.
    Eğer study zaten varsa, basitçe yüklenecektir.
    - `study_name` : study'nin adı (string, gerekli).
    - `directions`: Optimizasyon yönleri (minimize/maximize literal stringlerinin listesi, isteğe bağlı).
  - **set_sampler** - Study için sampler'ı ayarlayınız.
    - `name` : sampler'ın adı (string, gerekli).
  - **get_all_study_names** - Depolama alanından tüm study adlarını alınız.
  - **set_metric_names** - metric_names'i ayarlayınız. Metric_names, her objective value'nun ne olduğunu ayırt etmek için kullanılan etiketlerdir.
    - `metric_names` : Her objective için metrik adlarının listesi (string listesi, gerekli).
  - **get_metric_names** - metric_names'i alınız.
    - Parametre gerekmez.
  - **get_directions** - Study'nin yönlerini alınız.
    - Parametre gerekmez.
  - **get_trials** - Bir study'deki tüm trial'ları CSV formatında alınız.
    - Parametre gerekmez.
  - **best_trial** - En iyi trial'ı alınız.
    - Parametre gerekmez.
  - **best_trials** - Study'de Pareto cephesinde yer alan trial'ları döndürünüz.
    - Parametre gerekmez.

  ### Trial

  - **ask** - Optuna kullanarak yeni parametreler öneriniz.
    - `search_space` : Optuna için arama alanı (dictionary, gerekli).
  - **tell** - Bir trial'ın sonucunu rapor ediniz.
    - `trial_number` : trial numarası (integer, gerekli).
    - `values` : trial'ın sonucu (float veya float listesi, gerekli).
  - **set_trial_user_attr** - Bir trial için kullanıcı öznitelikleri ayarlayınız.
    - `trial_number`: trial numarası (integer, gerekli).
    - `key`: kullanıcı özniteliğinin anahtarı (string, gerekli).
    - `value`: kullanıcı özniteliğinin değeri (herhangi bir tür, gerekli).
  - **get_trial_user_attrs** - Bir trial'da kullanıcı özniteliklerini alınız.
    - `trial_number`: trial numarası (integer, gerekli).

  ### Görselleştirme

  - **plot_optimization_history** - Optimizasyon geçmişi grafiğini bir görüntü olarak döndürünüz.
    - `target`: hangi değerin görüntüleneceğini belirtmek için index (integer, isteğe bağlı).
    - `target_name`: eksen etiketinde gösterilecek target'ın adı (string, isteğe bağlı).
  - **plot_hypervolume_history** - Hypervolume geçmişi grafiğini bir görüntü olarak döndürünüz.
    - `reference_point` : hypervolume'ü hesaplamak için referans noktalarının listesi (float listesi, gerekli).
  - **plot_pareto_front** - Çok amaçlı optimizasyon için Pareto cephesi grafiğini bir görüntü olarak döndürünüz.
    - `target_names`: eksen başlıkları olarak kullanılacak objective adı listesi (string listesi, isteğe bağlı).
    - `include_dominated_trials`: tüm dominant olmayan trial'ların objective değerlerini dahil etmek için bayrak (boolean, isteğe bağlı).
    - `targets`: görüntülenecek objective değerlerini belirtmek için indisler listesi. (integer listesi, isteğe bağlı).
  - **plot_contour** - Kontur grafiğini bir görüntü olarak döndürünüz.
    - `params` : görselleştirilecek parametre listesi (string listesi, isteğe bağlı).
    - `target` : görüntülenecek değeri belirtmek için index (integer, gerekli).
    - `target_name` : renk çubuğunda gösterilecek target'ın adı (string, gerekli).
  - **plot_parallel_coordinate** - Paralel koordinat grafiğini bir görüntü olarak döndürünüz.
    - `params` : görselleştirilecek parametre listesi (string listesi, isteğe bağlı).
    - `target` : görüntülenecek değeri belirtmek için index (integer, gerekli).
    - `target_name` : eksen etiketi ve efsanede gösterilecek target'ın adı (string, gerekli).
  - **plot_slice** - Dilim grafiğini bir görüntü olarak döndürünüz.
    - `params` : görselleştirilecek parametre listesi (string listesi, isteğe bağlı).
    - `target` : görüntülenecek değeri belirtmek için index (integer, gerekli).
    - `target_name` : eksen etiketinde gösterilecek target'ın adı (string, gerekli).
  - **plot_param_importances** - Parametre önemlilikleri grafiğini bir görüntü olarak döndürünüz.
    - `params` : görselleştirilecek parametre listesi (string listesi, isteğe bağlı).
    - `target` : görüntülenecek değeri belirtmek için index (integer/null, isteğe bağlı).
    - `target_name` : efsanede gösterilecek target'ın adı (string, gerekli).
  - **plot_edf** - EDF grafiğini bir görüntü olarak döndürünüz.
    - `target` : görüntülenecek değeri belirtmek için index (integer, gerekli).
    - `target_name` : eksen etiketinde gösterilecek target'ın adı (string, gerekli).
  - **plot_timeline** - Zaman çizelgesi grafiğini bir görüntü olarak döndürünüz.
    - Parametre gerekmez.
  - **plot_rank** - Sıra grafiğini bir görüntü olarak döndürünüz.
    - `params` : görselleştirilecek parametre listesi (string listesi, isteğe bağlı).
    - `target` : görüntülenecek değeri belirtmek için index (integer, gerekli).
    - `target_name` : renk çubuğunda gösterilecek target'ın adı (string, gerekli).

  ### Web Panosu

  - **launch_optuna_dashboard** - Optuna panosunu başlatınız.
    - `port`: sunucu portu (integer, isteğe bağlı, varsayılan: 58080).

  ## Örnekler

  - [2D-Sphere Fonksiyonunun Optimize Edilmesi](#2d-sphere-fonksiyonunun-optimize-edilmesi)
  - [Optuna Panosunun Başlatılması ve Optimizasyon Sonuçlarının Analiz Edilmesi](#optuna-panosunun-başlatılması-ve-optimizasyon-sonuçlarının-analiz-edilmesi)
  - [FFmpeg Kodlama Parametrelerinin Optimize Edilmesi](#ffmpeg-kodlama-parametrelerinin-optimize-edilmesi)
  - [Cookie Tarifinin Optimize Edilmesi](#cookie-tarifinin-optimize-edilmesi)
  - [Matplotlib Yapılandırmasının Optimize Edilmesi](#matplotlib-yapılandırmasının-optimize-edilmesi)

  ### 2D-Sphere Fonksiyonunun Optimize Edilmesi

  Burada 2D-Sphere fonksiyonunun optimize edilmesine dair basit bir örnek, örnek istemi ve LLM yanıtlarının özeti sunulmaktadır.

  | Kullanıcı İstemi | Claude'da Çıkış |
  | - | - |
  | (Claude Desktop'ı başlatınız) |  |
  | Lütfen minimizasyon için "Optimize-2D-Sphere" adında bir Optuna study'si oluşturunuz. |  |
  | Lütfen [-1, 1] aralığında iki float parametre x, y öneriniz. |  |
  | Lütfen objective value x\*\*2 + y\*\*2'ı rapor ediniz. Değeri hesaplamak için lütfen JavaScript yorumlayıcısını kullanınız ve değerleri yuvarlamamayınız. |  |
  | Lütfen başka bir parametre seti öneriniz ve değerlendiriniz. |  |
  | Lütfen şu ana kadar olan optimizasyon geçmişini çiziminiz. |  |

  ### Optuna Panosunun Başlatılması ve Optimizasyon Sonuçlarının Analiz Edilmesi

  [Optuna panosunu](https://github.com/optuna/optuna-dashboard) MCP server aracılığıyla başlatarak optimizasyon sonuçlarını etkileşimli olarak analiz edebilirsiniz.

  | Kullanıcı İstemi | Claude'da Çıkış |
  | - | - |
  | Lütfen Optuna panosunu başlatınız. |  |

  Varsayılan olarak, Optuna panosu 58080 portunda başlatılacaktır.
  Aşağıda gösterildiği gibi web tarayıcınızda `http://localhost:58080` adresine giderek erişebilirsiniz:


  Optuna panosu optimizasyon geçmişi, parametre önemlilikleri ve daha birçok şey gibi optimizasyon sonuçlarını analiz etmek için çeşitli görselleştirmeler sağlar.

  ### FFmpeg Kodlama Parametrelerinin Optimize Edilmesi

  ![ffmpeg-2](https://raw.githubusercontent.com/optuna/optuna-mcp/main/examples/ffmpeg/images/demo-ffmpeg-2.png)

  Bu demo, Optuna MCP server'ını optimal FFmpeg kodlama parametrelerini otomatik olarak bulabilmek için nasıl kullanacağını göstermektedir. x264 kodlama seçeneklerini, kodlama süresini makul tutarken video kalitesini (SSIM puanı ile ölçülen) en üst düzeye çıkarmak için optimize eder.

  Ayrıntılar için [examples/ffmpeg](https://github.com/optuna/optuna-mcp/tree/main/examples/ffmpeg/README.md) adresini kontrol ediniz.

  ### Cookie Tarifinin Optimize Edilmesi

  ![cookie-recipe](https://raw.githubusercontent.com/optuna/optuna-mcp/main/examples/cookie-recipe/images/result-table.png)

  Bu örnekte "[Bayesian Optimization for a Better Dessert](https://research.google/pubs/bayesian-optimization-for-a-better-dessert/)" başlıklı makaleye referans vererek bir cookie tarifini optimize edeceğiz.

  Ayrıntılar için [examples/cookie-recipe](https://github.com/optuna/optuna-mcp/tree/main/examples/cookie-recipe/README.md) adresini kontrol ediniz.

  ### Matplotlib Yapılandırmasının Optimize Edilmesi

  <table>
      <caption>Optuna MCP tarafından varsayılan ve optimize edilmiş figürler.</caption>
      <tr>
          <td></td>
          <td></td>
      </tr>
  </table>

  Bu örnek bir Matplotlib yapılandırmasını optimize eder.

  Ayrıntılar için [examples/auto-matplotlib](https://github.com/optuna/optuna-mcp/tree/main/examples/auto-matplotlib/README.md) adresini kontrol ediniz.

  ## Lisans

  MIT Lisansı ([LICENSE](./LICENSE) dosyasına bakınız).
---

# Optuna MCP Server

[![Python](https://img.shields.io/badge/python-3.12%20%7C%203.13-blue)](https://www.python.org)
[![pypi](https://img.shields.io/pypi/v/optuna-mcp.svg)](https://pypi.python.org/pypi/optuna-mcp)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/optuna/optuna-mcp)
[![Tests](https://github.com/optuna/optuna-mcp/actions/workflows/tests.yml/badge.svg)](https://github.com/optuna/optuna-mcp/actions/workflows/tests.yml)

A [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) server that automates optimization and analysis using [Optuna](http://optuna.org).



## Use Cases

The Optuna MCP Server can be used in the following use cases, for example.

- Automated hyperparameter optimization by LLMs
- Interactive analysis of Optuna's optimization results via chat interface
- Optimize input and output of other MCP tools

For details, see the [Examples section](#examples).

## Installation

The Optuna MCP server can be installed using `uv` or Docker.
This section explains how to install the Optuna MCP server, using Claude Desktop as an example MCP client.

### Usage with uv

Before starting the installation process, install `uv` from [Astral](https://docs.astral.sh/uv/getting-started/installation/).

Then, add the Optuna MCP server configuration to the MCP client.
To include it in Claude Desktop, go to Claude > Settings > Developer > Edit Config > `claude_desktop_config.json`
and add the following:

```json
{
  "mcpServers": {
    "Optuna": {
      "command": "/path/to/uvx",
      "args": [
        "optuna-mcp"
      ]
    }
  }
}
```

Additionally, you can specify the Optuna storage with the `--storage` argument to persist the results.

```json
{
  "mcpServers": {
    "Optuna": {
      "command": "/path/to/uvx",
      "args": [
        "optuna-mcp",
        "--storage",
        "sqlite:///optuna.db"
      ]
    }
  }
}
```

After adding this, please restart Claude Desktop application.
For more information about Claude Desktop, check out [the quickstart page](https://modelcontextprotocol.io/quickstart/user).

### Usage with Docker

You can also run the Optuna MCP server using Docker. Make sure you have Docker installed and running on your machine.

```json
{
  "mcpServers": {
    "Optuna": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "--net=host",
        "-v",
        "/PATH/TO/LOCAL/DIRECTORY/WHICH/INCLUDES/DB/FILE:/app/workspace",
        "ghcr.io/optuna/optuna-mcp:latest",
        "--storage",
        "sqlite:////app/workspace/optuna.db"
      ]
    }
  }
}
```

## Tools provided by Optuna MCP

The Optuna MCP provides the following tools.
Specifically, it offers primitive functions of Optuna such as Study, Trial, Visualization, and Dashboard.
Since MCP clients know the list of tools and the details of each tool, users do not need to remember those details.

### Study

- **create_study** - Create a new Optuna study with the given study_name and directions.
  If the study already exists, it will be simply loaded.
  - `study_name` : name of the study (string, required).
  - `directions`: The directions of optimization (list of literal strings minimize/maximize, optional).
- **set_sampler** - Set the sampler for the study.
  - `name` : the name of the sampler (string, required).
- **get_all_study_names** - Get all study names from the storage.
- **set_metric_names** - Set metric_names. Metric_names are labels used to distinguish what each objective value is.
  - `metric_names` : The list of metric names for each objective (list of strings, required).
- **get_metric_names** - Get metric_names.
  - No parameters required.
- **get_directions** - Get the directions of the study.
  - No parameters required.
- **get_trials** - Get all trials in a CSV format.
  - No parameters required.
- **best_trial** - Get the best trial.
  - No parameters required.
- **best_trials** - Return trials located at the Pareto front in the study.
  - No parameters required.

### Trial

- **ask** - Suggest new parameters using Optuna.
  - `search_space` : the search space for Optuna (dictionary, required).
- **tell** - Report the result of a trial.
  - `trial_number` : the trial number (integer, required).
  - `values` : the result of the trial (float or list of floats, required).
- **set_trial_user_attr** - Set user attributes for a trial.
  - `trial_number`: the trial number (integer, required).
  - `key`: the key of the user attribute (string, required).
  - `value`: the value of the user attribute (any type, required).
- **get_trial_user_attrs** - Get user attributes in a trial.
  - `trial_number`: the trial number (integer, required).

### Visualization

- **plot_optimization_history** - Return the optimization history plot as an image.
  - `target`: index to specify which value to display (integer, optional).
  - `target_name`: target’s name to display on the axis label (string, optional).
- **plot_hypervolume_history** - Return the hypervolume history plot as an image.
  - `reference_point` : a list of reference points to calculate the hypervolume (list of floats, required).
- **plot_pareto_front** - Return the Pareto front plot as an image for multi-objective optimization.
  - `target_names`: objective name list used as the axis titles (list of strings, optional).
  - `include_dominated_trials`: a flag to include all dominated trial's objective values (boolean, optional).
  - `targets`: a list of indices to specify the objective values to display. (list of integers, optional).
- **plot_contour** - Return the contour plot as an image.
  - `params` : parameter list to visualize (list of strings, optional).
  - `target` : an index to specify the value to display (integer, required).
  - `target_name` : target’s name to display on the color bar (string, required).
- **plot_parallel_coordinate** - Return the parallel coordinate plot as an image.
  - `params` : parameter list to visualize (list of strings, optional).
  - `target` : an index to specify the value to display (integer, required).
  - `target_name` : target’s name to display on the axis label and the legend (string, required).
- **plot_slice** - Return the slice plot as an image.
  - `params` : parameter list to visualize (list of strings, optional).
  - `target` : an index to specify the value to display (integer, required).
  - `target_name` : target’s name to display on the axis label (string, required).
- **plot_param_importances** - Return the parameter importances plot as an image.
  - `params` : parameter list to visualize (list of strings, optional).
  - `target` : an index to specify the value to display (integer/null, optional).
  - `target_name` : target’s name to display on the legend (string, required).
- **plot_edf** - Return the EDF plot as an image.
  - `target` : an index to specify the value to display (integer, required).
  - `target_name` : target’s name to display on the axis label (string, required).
- **plot_timeline** - Return the timeline plot as an image.
  - No parameters required.
- **plot_rank** - Return the rank plot as an image.
  - `params` : parameter list to visualize (list of strings, optional).
  - `target` : an index to specify the value to display (integer, required).
  - `target_name` : target’s name to display on the color bar (string, required).

### Web Dashboard

- **launch_optuna_dashboard** - Launch the Optuna dashboard.
  - `port`: server port (integer, optional, default: 58080).

## Examples

- [Optimizing the 2D-Sphere function](#optimizing-the-2d-sphere-function)
- [Starting the Optuna dashboard and analyzing optimization results](#starting-the-optuna-dashboard-and-analyzing-optimization-results)
- [Optimizing the FFmpeg encoding parameters](#optimizing-the-ffmpeg-encoding-parameters)
- [Optimizing the Cookie Recipe](#optimizing-the-cookie-recipe)
- [Optimizing the Matplotlib Configuration](#optimizing-the-matplotlib-configuration)

### Optimizing the 2D-Sphere Function

Here we present a simple example of optimizing the 2D-Sphere function, along with example prompts and the summary of the LLM responses.

| User prompt | Output in Claude |
| - | - |
| (Launch Claude Desktop) |  |
| Please create an Optuna study named "Optimize-2D-Sphere" for minimization. |  |
| Please suggest two float parameters x, y in [-1, 1]. |  |
| Please report the objective value x\*\*2 + y\*\*2. To calculate the value, please use the JavaScript interpreter and do not round the values. |  |
| Please suggest another parameter set and evaluate it. |  |
| Please plot the optimization history so far. |  |

### Starting the Optuna Dashboard and Analyzing Optimization Results

You can also start the [Optuna dashboard](https://github.com/optuna/optuna-dashboard) via the MCP server to analyze the optimization results interactively.

| User prompt | Output in Claude |
| - | - |
| Please launch the Optuna dashboard. |  |

By default, the Optuna dashboard will be launched on port 58080.
You can access it by navigating to `http://localhost:58080` in your web browser as shown below:


Optuna dashboard provides various visualizations to analyze the optimization results, such as optimization history, parameter importances, and more.

### Optimizing the FFmpeg Encoding Parameters

![ffmpeg-2](https://raw.githubusercontent.com/optuna/optuna-mcp/main/examples/ffmpeg/images/demo-ffmpeg-2.png)

This demo showcases how to use the Optuna MCP server to automatically find optimal FFmpeg encoding parameters. It optimizes x264 encoding options to maximize video quality (measured by the SSIM score) while keeping encoding time reasonable.

Check out [examples/ffmpeg](https://github.com/optuna/optuna-mcp/tree/main/examples/ffmpeg/README.md) for details.

### Optimizing the Cookie Recipe

![cookie-recipe](https://raw.githubusercontent.com/optuna/optuna-mcp/main/examples/cookie-recipe/images/result-table.png)

In this example, we will optimize a cookie recipe, referencing the paper titled "[Bayesian Optimization for a Better Dessert](https://research.google/pubs/bayesian-optimization-for-a-better-dessert/)".

Check out [examples/cookie-recipe](https://github.com/optuna/optuna-mcp/tree/main/examples/cookie-recipe/README.md) for details.

### Optimizing the Matplotlib Configuration

<table>
    <caption>Default and optimized figures by Optuna MCP.</caption>
    <tr>
        <td></td>
        <td></td>
    </tr>
</table>

This example optimizes a Matplotlib configuration.

Check out [examples/auto-matplotlib](https://github.com/optuna/optuna-mcp/tree/main/examples/auto-matplotlib/README.md) for details.

## License

MIT License (see [LICENSE](./LICENSE)).
