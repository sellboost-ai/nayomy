---
name: "XGenerationLab/xiyan_mcp_server"
description: "An MCP server that supports fetching data from a database using natural language queries, powered by XiyanSQL as the text-to-SQL LLM."
category: "Databases"
repo: "XGenerationLab/xiyan_mcp_server"
stars: 236
url: "https://github.com/XGenerationLab/xiyan_mcp_server"
body_length: 14961
license: "Apache-2.0"
language: "Python"
body_tr: |-
  <h1 align="center">XiYan MCP Sunucusu</h1>
  <p align="center">
    <a href="https://github.com/XGenerationLab/XiYan-SQL"></a>
  </p>
  <p align="center">
    <b>Veritabanlarına doğal dil sorguları yapabilmeyi sağlayan bir Model Context Protocol (MCP) sunucusu</b><br/>
    <sub><a href="https://github.com/XGenerationLab/XiYan-SQL" >XiYan-SQL</a> tarafından desteklenmektedir, açık karşılaştırma testlerinde text-to-sql'in en iyi performansı</sub>
  </p>
  <p align="center">
  💻 <a href="https://github.com/XGenerationLab/xiyan_mcp_server" >XiYan-mcp-server</a> | 
  🌐 <a href="https://github.com/XGenerationLab/XiYan-SQL" >XiYan-SQL</a> |
  📖 <a href="https://arxiv.org/abs/2507.04701"> Arxiv</a> | 
  🏆 <a href="https://github.com/XGenerationLab/XiYanSQL-QwenCoder" >XiYanSQL Modeli</a> |
  📄 <a href="https://paperswithcode.com/paper/xiyan-sql-a-multi-generator-ensemble" >PapersWithCode</a>
  🤗 <a href="https://huggingface.co/collections/XGenerationLab/xiyansql-models-67c9844307b49f87436808fc">HuggingFace</a> |
  🤖 <a href="https://modelscope.cn/collections/XiYanSQL-Models-4483337b614241" >ModelScope</a> |
  🌕 <a href="https://bailian.console.aliyun.com/xiyan">析言GBI</a> 
  <br />

  <a href="https://arxiv.org/abs/2411.08599"></a>
  <a href="https://opensource.org/licenses/Apache-2.0">
    
  </a>
  <a href="https://pepy.tech/projects/xiyan-mcp-server"></a>

  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/XGenerationLab/xiyan_mcp_server)](https://archestra.ai/mcp-catalog/xgenerationlab__xiyan_mcp_server)
    <a href="https://smithery.ai/server/@XGenerationLab/xiyan_mcp_server"></a>
  <a href="https://github.com/XGenerationLab/xiyan_mcp_server" target="_blank">
      
  </a>
  <br />
  <a href="https://github.com/XGenerationLab/xiyan_mcp_server" >English</a> | <a href="https://github.com/XGenerationLab/xiyan_mcp_server/blob/main/README_zh.md"> 中文 </a> | <a href="https://github.com/XGenerationLab/xiyan_mcp_server/blob/main/README_ja.md"> 日本語 </a><br />
  <a href="https://github.com/XGenerationLab/xiyan_mcp_server/blob/main/imgs/dinggroup_out.png">Ding Group钉钉群</a>｜ 
  <a href="https://weibo.com/u/2540915670" target="_blank">Weibo'da beni takip edin</a>
  </p>


  ## İçindekiler

  - [Özellikler](#özellikler)
  - [Ön İzleme](#ön-İzleme)
    - [Mimari](#mimari)
    - [En İyi Uygulama](#en-İyi-uygulama)
    - [Araçlar Ön İzlemesi](#araçlar-ön-İzlemesi)
  - [Kurulum](#kurulum)
    - [pip'ten Kurulum](#pip'ten-kurulum)
    - [Smithery.ai'den Kurulum](#smitheryai'den-kurulum)
  - [Yapılandırma](#yapılandırma)
    - [LLM Yapılandırması](#llm-yapılandırması)
      - [Genel LLM'ler](#genel-llmler)
      - [Text-to-SQL SOTA Modeli](#text-to-sql-sota-modeli)
      - [Yerel Model](#yerel-model)
    - [Veritabanı Yapılandırması](#veritabanı-yapılandırması)
      - [MySQL](#mysql)
      - [PostgreSQL](#postgresql)
  - [Başlatma](#başlatma)
    - [Claude Desktop](#claude-desktop)
    - [Cline](#cline)
    - [Goose](#goose)
    - [Cursor](#cursor)
  - [Çalışmıyor](#çalışmıyor)
  - [Atıf](#atıf)


  ## Özellikler
  - 🌐 [XiYanSQL](https://github.com/XGenerationLab/XiYan-SQL) aracılığıyla doğal dil ile verileri getirin
  - 🤖 Genel LLM'leri (GPT, qwenmax), Text-to-SQL SOTA modelini destekleyin
  - 💻 Saf yerel modu destekleyin (yüksek güvenlik!)
  - 📝 MySQL ve PostgreSQL'i destekleyin
  - 🖱️ Mevcut tabloları kaynak olarak listeleyin
  - 🔧 Tablo içeriklerini okuyun

  ## Ön İzleme
  ### Mimari
  Bu sunucuyu projenize entegre etmenin iki yolu vardır, aşağıda gösterildiği gibi:
  Sol taraf varsayılan mod olan uzak moddur. XiYanSQL-qwencoder-32B modelini hizmet sağlayıcısından erişmek için bir API anahtarı gerektirir (bkz. [Yapılandırma](#yapılandırma)).
  Diğer mod, daha güvenli olan yerel moddur. API anahtarı gerektirmez.

  ![architecture.png](https://raw.githubusercontent.com/XGenerationLab/xiyan_mcp_server/HEAD/imgs/architecture.png)
  ### En İyi uygulama ve raporlar

  ["Tek satır kod yazmadan MCP + Modelscope API-Inference kullanarak yerel veri asistanı oluşturun"](https://mp.weixin.qq.com/s/tzDelu0W4w6t9C0_yYRbHA)

  ["Xiyan MCP on Modelscope"](https://modelscope.cn/headlines/article/1142)

  ### MCPBench Üzerinde Değerlendirme
  Aşağıdaki şekil, MCPBench ölçütü tarafından ölçülen XiYan MCP sunucusunun performansını göstermektedir. XiYan MCP sunucusu, hem MySQL MCP sunucusu hem de PostgreSQL MCP sunucusuna kıyasla üstün performans göstererek 2-22 yüzde puanı öncü durumdadır. Ayrıntılı deney sonuçları [MCPBench](https://github.com/modelscope/MCPBench) ve ["MCP Sunucuları Değerlendirme Raporu"](https://arxiv.org/abs/2504.11094) raporunda bulunabilir.

  ![exp_mcpbench.png](https://raw.githubusercontent.com/XGenerationLab/xiyan_mcp_server/HEAD/imgs/exp_mcpbench.png)

  ### Araçlar Ön İzlemesi
   - ``get_data`` aracı, bir veritabanından veri almak için doğal dil arayüzü sağlar. Bu sunucu, girdi doğal dilini yerleşik bir model kullanarak SQL'e dönüştürecek ve veritabanını çağırarak sorgu sonuçlarını döndürecektir.

   - ``{dialect}://{table_name}`` kaynağı, belirli bir table_name belirtildiğinde model referansı için veritabanından örnek verilerin bir kısmını elde etmeyi sağlar.
  - ``{dialect}://`` kaynağı mevcut veritabanlarının adlarını listeler

  ## Kurulum
  ### pip'ten Kurulum

  Python 3.11+ gereklidir.
  Sunucuyu pip aracılığıyla kurabilirsiniz ve en son sürümü kurulacaktır:

  ```shell
  pip install xiyan-mcp-server
  ```

  Kaynaktan geliştirme sürümünü kurmak istiyorsanız, github'dan kaynak koddan kurabilirsiniz:
  ```shell
  pip install git+https://github.com/XGenerationLab/xiyan_mcp_server.git
  ```

  ### Smithery.ai'den Kurulum
  Bkz. [@XGenerationLab/xiyan_mcp_server](https://smithery.ai/server/@XGenerationLab/xiyan_mcp_server)

  Tam olarak test edilmemiş.

  ## Yapılandırma

  Sunucuyu yapılandırmak için bir YAML yapılandırma dosyasına ihtiyacınız vardır.
  config_demo.yml'de varsayılan bir yapılandırma dosyası sağlanmıştır ve şöyle görünür:

  ```yaml
  mcp:
    transport: "stdio"
  model:
    name: "XGenerationLab/XiYanSQL-QwenCoder-32B-2412"
    key: ""
    url: "https://api-inference.modelscope.cn/v1/"
  database:
    host: "localhost"
    port: 3306
    user: "root"
    password: ""
    database: ""
  ```

  ### MCP Yapılandırması
  Taşıma protokolünü ``stdio`` veya ``sse`` olarak ayarlayabilirsiniz.
  #### STDIO
  Stdio protokolü için, bunu şöyle ayarlayabilirsiniz:
  ```yaml
  mcp:
    transport: "stdio"
  ```
  #### SSE
  Sse protokolü için, mcp yapılandırmasını aşağıdaki gibi ayarlayabilirsiniz:
  ```yaml
  mcp:
    transport: "sse"
    port: 8000
    log_level: "INFO"
  ```
  Varsayılan port `8000`'dir. Gerekirse portu değiştirebilirsiniz.
  Varsayılan günlük seviyesi `ERROR`'dir. Daha ayrıntılı bilgi için günlük seviyesini `INFO` olarak ayarlamanızı öneririz.

  ``debug``, ``host``, ``sse_path``, ``message_path`` gibi diğer yapılandırmalar da özelleştirilebilir, ancak normalde bunları değiştirmeniz gerekmez.

  ### LLM Yapılandırması
  ``Name`` kullanılacak modelin adıdır, ``key`` modelin API anahtarıdır, ``url`` modelin API url'sidir. Aşağıdaki modelleri destekliyoruz.

  | sürümler | genel LLM'ler (GPT, qwenmax) | Modelscope tarafından SOTA modeli | Dashscope tarafından SOTA modeli | Yerel LLM'ler |
  |----------|-------------------------------|--------------------------------------------|-----------------------------------------------------------|-----------------------|
  | açıklama | temel, kullanımı kolay | en iyi performans, istikrarlı, tavsiye edilir | en iyi performans, deneme için | yavaş, yüksek güvenlik |
  | isim | resmi model adı (ör. gpt-3.5-turbo, qwen-max) | XGenerationLab/XiYanSQL-QwenCoder-32B-2412 | xiyansql-qwencoder-32b | xiyansql-qwencoder-3b |
  | anahtar | hizmet sağlayıcısının API anahtarı (ör. OpenAI, Alibaba Cloud) | modelscope'un API anahtarı | e-posta aracılığıyla API anahtarı | "" |
  | url | hizmet sağlayıcısının endpoint'i (ör. "https://api.openai.com/v1") | https://api-inference.modelscope.cn/v1/ | https://xiyan-stream.biz.aliyun.com/service/api/xiyan-sql | http://localhost:5090 |

  #### Genel LLM'ler
  Genel LLM'leri kullanmak istiyorsanız, örneğin gpt3.5, bunu doğrudan şöyle yapılandırabilirsiniz:
  ```yaml
  model:
    name: "gpt-3.5-turbo"
    key: "YOUR KEY "
    url: "https://api.openai.com/v1"
  database:
  ```

  Alibaba'dan Qwen'i kullanmak istiyorsanız, örneğin Qwen-max, aşağıdaki yapılandırmayı kullanabilirsiniz:
  ```yaml
  model:
    name: "qwen-max"
    key: "YOUR KEY "
    url: "https://dashscope.aliyuncs.com/compatible-mode/v1"
  database:
  ```
  #### Text-to-SQL SOTA Modeli
  XiYanSQL-qwencoder-32B (https://github.com/XGenerationLab/XiYanSQL-QwenCoder) modelini tavsiye ediyoruz; bu, text-to-sql'de SOTA modelidir, bkz. [Bird benchmark](https://bird-bench.github.io/).
  Modeli kullanmanın iki yolu vardır. Her ikisinden birini kullanabilirsiniz.
  (1) [Modelscope](https://www.modelscope.cn/models/XGenerationLab/XiYanSQL-QwenCoder-32B-2412), (2) Alibaba Cloud DashScope.


  ##### (1) Modelscope sürümü
  Modelscope'dan API-inference'ın bir ``key``'ini almanız gerekiyor, https://www.modelscope.cn/docs/model-service/API-Inference/intro
  Daha sonra aşağıdaki yapılandırmayı kullanabilirsiniz:
  ```yaml
  model:
    name: "XGenerationLab/XiYanSQL-QwenCoder-32B-2412"
    key: ""
    url: "https://api-inference.modelscope.cn/v1/"
  ```

  Daha fazla bilgi için [model açıklamasını](https://www.modelscope.cn/models/XGenerationLab/XiYanSQL-QwenCoder-32B-2412) okuyun.

  ##### (2) Dashscope sürümü

  Modeli Alibaba Cloud DashScope'a dağıttık, bu nedenle aşağıdaki ortam değişkenlerini ayarlamanız gerekir:
  ``key`` almak için bana e-postanızı gönderin. (godot.lzl@alibaba-inc.com)
  E-postada lütfen aşağıdaki bilgileri ekleyin:
  ```yaml
  name: "ADINIZ",
  email: "E-POSTANIZ",
  organization: "üniversitesi veya Şirket veya Organizasyon"
  ```
  E-postanıza göre size bir ``key`` göndereceğiz. Ve yml dosyasında ``key``'i doldurabilisiniz.
  ``key`` 1 ay veya 200 sorgu veya diğer yasal kısıtlamalarla sona erecektir.


  ```yaml
  model:
    name: "xiyansql-qwencoder-32b"
    key: "KEY"
    url: "https://xiyan-stream.biz.aliyun.com/service/api/xiyan-sql"
  ```

  Not: bu model hizmeti yalnızca deneme içindir, bunu üretimde kullanmanız gerekiyorsa, lütfen bizimle iletişime geçin.

  ##### (3) Yerel sürüm
  Alternatif olarak, [XiYanSQL-qwencoder-32B](https://github.com/XGenerationLab/XiYanSQL-QwenCoder) modelini kendi sunucunuza dağıtabilirsiniz.
  Daha fazla bilgi için [Yerel Model](src/xiyan_mcp_server/local_model/README.md) dosyasına bakın.


  ### Veritabanı Yapılandırması
  ``host``, ``port``, ``user``, ``password``, ``database`` veritabanının bağlantı bilgileridir.

  Yerel veya herhangi bir uzak veritabanını kullanabilirsiniz. Şimdi MySQL ve PostgreSQL'i destekliyoruz (yakında daha fazla diyalekt).

  #### MySQL

  ```yaml
  database:
    host: "localhost"
    port: 3306
    user: "root"
    password: ""
    database: ""
  ```
  #### PostgreSQL
  Adım 1: Python paketlerini yükleyin
  ```bash
  pip install psycopg2
  ```
  Adım 2: config.yml dosyasını şöyle hazırlayın:
  ```yaml
  database:
    dialect: "postgresql"
    host: "localhost"
    port: 5432
    user: ""
    password: ""
    database: ""
  ```

  PostgreSQL için ``dialect`` değerinin ``postgresql`` olması gerektiğini unutmayın.
  ## Başlatma

  ### Sunucu Başlatması

  `sse` ile sunucu başlatmak istiyorsanız, aşağıdaki komutu bir terminalde çalıştırmanız gerekir:
  ```shell
  YML=path/to/yml python -m xiyan_mcp_server
  ```
  Daha sonra tarayıcınızda http://localhost:8000/sse hakkında bilgi görmüş olmalısınız. (Varsayılan olarak, mcp sunucunuz başka bir host/port üzerinde çalışıyorsa değiştirin)

  Aksi takdirde, `stdio` aktarım protokolünü kullanıyorsanız, genellikle MCP sunucusu komutunu terminalde başlatmak yerine belirli mcp uygulamasında bildirirsiniz.
  Ancak gerekirse bu komutla hata ayıklama yapabilirsiniz.

  ### İstemci Ayarı

  #### Claude Desktop
  Claude Desktop yapılandırma dosyanızda bunu ekleyin, bkz. <a href="https://github.com/XGenerationLab/xiyan_mcp_server/blob/main/imgs/claude_desktop.jpg">Claude Desktop yapılandırma örneği</a>
  ```json
  {
      "mcpServers": {
          "xiyan-mcp-server": {
              "command": "/xxx/python",
              "args": [
                  "-m",
                  "xiyan_mcp_server"
              ],
              "env": {
                  "YML": "PATH/TO/YML"
              }
          }
      }
  }
  ```
  **Lütfen buradaki Python komutunun Python yürütülebilir dosyasının tam yolu olması gerektiğini (`/xxx/python`) unutmayın; aksi takdirde Python yorumlayıcısı bulunamaz. Bu yolu `which python` komutu kullanarak belirleyebilirsiniz. Aynı durum diğer uygulamalar için de geçerlidir.**

  Claude Desktop şu anda SSE aktarım protokolünü desteklemiyor.

  #### Cline
  [Claude Desktop](#claude-desktop) gibi yapılandırmayı hazırlayın

  #### Goose
  `stdio` kullanıyorsanız, yapılandırmaya aşağıdaki komutu ekleyin, bkz. <a href="https://github.com/XGenerationLab/xiyan_mcp_server/blob/main/imgs/goose.jpg">Goose yapılandırma örneği</a>
  ```shell
  env YML=path/to/yml /xxx/python -m xiyan_mcp_server
  ```
  Aksi takdirde, `sse` kullanıyorsanız Türünü `SSE` olarak değiştirin ve endpoint'i `http://127.0.0.1:8000/sse` olarak ayarlayın
  #### Cursor
  Aşağıdakine benzer komutu kullanın.

  `stdio` için:
  ```json
  {
    "mcpServers": {
      "xiyan-mcp-server": {
        "command": "/xxx/python",
        "args": [
          "-m",
          "xiyan_mcp_server"
        ],
        "env": {
          "YML": "path/to/yml"
        }
      }
    }
  }
  ```
  `sse` için:
  ```json
  {
    "mcpServers": {
      "xiyan_mcp_server_1": {
        "url": "http://localhost:8000/sse"
      }
    }
  }
  ```


  #### Witsy
  Komuta aşağıdakileri ekleyin:
  ```shell
  /xxx/python -m xiyan_mcp_server
  ```
  Bir env ekleyin: anahtar YML'dir ve değer yml dosyanızın yoludur.
  Bkz. <a href="https://github.com/XGenerationLab/xiyan_mcp_server/blob/main/imgs/witsy.jpg">Witsy yapılandırma örneği</a>


  ## Bize Ulaşın:
  Araştırmamız veya ürünlerimiz hakkında ilgileniyorsanız, lütfen bizimle iletişime geçmekten çekinmeyin.

  #### İletişim Bilgileri:

  Yifu Liu, zhencang.lyf@alibaba-inc.com

  #### DingTalk Grubuna Katılın

  <a href="https://github.com/XGenerationLab/XiYan-SQL/blob/main/xiyansql_dingding.png">Ding Group钉钉群</a>


  ## Diğer İlgili Bağlantılar

  [![MseeP.ai Security Assessment Badge](https://mseep.net/pr/xgenerationlab-xiyan-mcp-server-badge.png)](https://mseep.ai/app/xgenerationlab-xiyan-mcp-server)




  ## Atıf
  Çalışmamız faydalı bulduysa, lütfen bizi alıntı yapmaktan çekinmeyin.
  ```bibtex
  @article{XiYanSQL,
        title={XiYan-SQL: A Novel Multi-Generator Framework For Text-to-SQL}, 
        author={Yifu Liu and Yin Zhu and Yingqi Gao and Zhiling Luo and Xiaoxia Li and Xiaorong Shi and Yuntao Hong and Jinyang Gao and Yu Li and Bolin Ding and Jingren Zhou},
        year={2025},
        eprint={2507.04701},
        archivePrefix={arXiv},
        primaryClass={cs.CL},
        url={https://arxiv.org/abs/2507.04701}, 
  }
  ```
---

<h1 align="center">XiYan MCP Server</h1>
<p align="center">
  <a href="https://github.com/XGenerationLab/XiYan-SQL"></a>
</p>
<p align="center">
  <b>A Model Context Protocol (MCP) server that enables natural language queries to databases</b><br/>
  <sub>powered by <a href="https://github.com/XGenerationLab/XiYan-SQL" >XiYan-SQL</a>, SOTA of text-to-sql on open benchmarks</sub>
</p>
<p align="center">
💻 <a href="https://github.com/XGenerationLab/xiyan_mcp_server" >XiYan-mcp-server</a> | 
🌐 <a href="https://github.com/XGenerationLab/XiYan-SQL" >XiYan-SQL</a> |
📖 <a href="https://arxiv.org/abs/2507.04701"> Arxiv</a> | 
🏆 <a href="https://github.com/XGenerationLab/XiYanSQL-QwenCoder" >XiYanSQL Model</a> |
📄 <a href="https://paperswithcode.com/paper/xiyan-sql-a-multi-generator-ensemble" >PapersWithCode</a>
🤗 <a href="https://huggingface.co/collections/XGenerationLab/xiyansql-models-67c9844307b49f87436808fc">HuggingFace</a> |
🤖 <a href="https://modelscope.cn/collections/XiYanSQL-Models-4483337b614241" >ModelScope</a> |
🌕 <a href="https://bailian.console.aliyun.com/xiyan">析言GBI</a> 
<br />

<a href="https://arxiv.org/abs/2411.08599"></a>
<a href="https://opensource.org/licenses/Apache-2.0">
  
</a>
<a href="https://pepy.tech/projects/xiyan-mcp-server"></a>

[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/XGenerationLab/xiyan_mcp_server)](https://archestra.ai/mcp-catalog/xgenerationlab__xiyan_mcp_server)
  <a href="https://smithery.ai/server/@XGenerationLab/xiyan_mcp_server"></a>
<a href="https://github.com/XGenerationLab/xiyan_mcp_server" target="_blank">
    
</a>
<br />
<a href="https://github.com/XGenerationLab/xiyan_mcp_server" >English</a> | <a href="https://github.com/XGenerationLab/xiyan_mcp_server/blob/main/README_zh.md"> 中文 </a> | <a href="https://github.com/XGenerationLab/xiyan_mcp_server/blob/main/README_ja.md"> 日本語 </a><br />
<a href="https://github.com/XGenerationLab/xiyan_mcp_server/blob/main/imgs/dinggroup_out.png">Ding Group钉钉群</a>｜ 
<a href="https://weibo.com/u/2540915670" target="_blank">Follow me on Weibo</a>
</p>


## Table of Contents

- [Features](#features)
- [Preview](#preview)
  - [Architecture](#architecture)
  - [Best Practice](#best-practice)
  - [Tools Preview](#tools-preview)
- [Installation](#installation)
  - [Installing from pip](#installing-from-pip)
  - [Installing from Smithery.ai](#installing-from-smitheryai)
- [Configuration](#configuration)
  - [LLM Configuration](#llm-configuration)
    - [General LLMs](#general-llms)
    - [Text-to-SQL SOTA model](#text-to-sql-sota-model)
    - [Local Model](#local-model)
  - [Database Configuration](#database-configuration)
    - [MySQL](#mysql)
    - [PostgreSQL](#postgresql)
- [Launch](#launch)
  - [Claude Desktop](#claude-desktop)
  - [Cline](#cline)
  - [Goose](#goose)
  - [Cursor](#cursor)
- [It Does Not Work](#it-does-not-work)
- [Citation](#citation)


## Features
- 🌐 Fetch data by natural language through [XiYanSQL](https://github.com/XGenerationLab/XiYan-SQL)
- 🤖 Support general LLMs (GPT,qwenmax), Text-to-SQL SOTA model
- 💻 Support pure local mode (high security!)
- 📝 Support MySQL and PostgreSQL. 
- 🖱️ List available tables as resources
- 🔧 Read table contents

## Preview
### Architecture
There are two ways to integrate this server in your project, as shown below:
The left is remote mode, which is the default mode. It requires an API key to access the xiyanSQL-qwencoder-32B model from service provider (see [Configuration](#Configuration)).
Another mode is local mode, which is more secure. It does not require the API key.

![architecture.png](https://raw.githubusercontent.com/XGenerationLab/xiyan_mcp_server/HEAD/imgs/architecture.png)
### Best practice and reports

["Build a local data assistant using MCP + Modelscope API-Inference without writing a single line of code"](https://mp.weixin.qq.com/s/tzDelu0W4w6t9C0_yYRbHA)

["Xiyan MCP on Modelscope"](https://modelscope.cn/headlines/article/1142)

### Evaluation on MCPBench
The following figure illustrates the performance of the XiYan MCP server as measured by the MCPBench benchmark. The XiYan MCP server demonstrates superior performance compared to both the MySQL MCP server and the PostgreSQL MCP server, achieving a lead of 2-22 percentage points. The detailed experiment results can be found at [MCPBench](https://github.com/modelscope/MCPBench) and the report ["Evaluation Report on MCP Servers"](https://arxiv.org/abs/2504.11094).

![exp_mcpbench.png](https://raw.githubusercontent.com/XGenerationLab/xiyan_mcp_server/HEAD/imgs/exp_mcpbench.png)

### Tools Preview
 - The tool ``get_data`` provides a natural language interface for retrieving data from a database. This server will convert the input natural language into SQL using a built-in model and call the database to return the query results.

 - The ``{dialect}://{table_name}`` resource allows obtaining a portion of sample data from the database for model reference when a specific table_name is specified. 
- The ``{dialect}://`` resource will list the names of the current databases

## Installation
### Installing from pip

Python 3.11+ is required. 
You can install the server through pip, and it will install the latest version:

```shell
pip install xiyan-mcp-server
```

If you want to install the development version from source, you can install from source code on github:
```shell
pip install git+https://github.com/XGenerationLab/xiyan_mcp_server.git
```

### Installing from Smithery.ai
See [@XGenerationLab/xiyan_mcp_server](https://smithery.ai/server/@XGenerationLab/xiyan_mcp_server)

Not fully tested.

## Configuration

You need a YAML config file to configure the server.
A default config file is provided in config_demo.yml which looks like this:

```yaml
mcp:
  transport: "stdio"
model:
  name: "XGenerationLab/XiYanSQL-QwenCoder-32B-2412"
  key: ""
  url: "https://api-inference.modelscope.cn/v1/"
database:
  host: "localhost"
  port: 3306
  user: "root"
  password: ""
  database: ""
```

### MCP Configuration
You can set the transport protocol to ``stdio`` or ``sse``.
#### STDIO
For stdio protocol, you can set just like this:
```yaml
mcp:
  transport: "stdio"
```
#### SSE
For sse protocol, you can set mcp config as below:
```yaml
mcp:
  transport: "sse"
  port: 8000
  log_level: "INFO"
```
The default port is `8000`. You can change the port if needed. 
The default log level is `ERROR`. We recommend to set log level to `INFO` for more detailed information.

Other configurations like `debug`, `host`, `sse_path`, `message_path` can be customized as well, but normally you don't need to modify them.

### LLM Configuration
``Name`` is the name of the model to use, ``key`` is the API key of the model, ``url`` is the API url of the model. We support following models.

| versions | general LLMs(GPT,qwenmax)                                             | SOTA model by Modelscope                   | SOTA model by Dashscope                                   | Local LLMs            |
|----------|-------------------------------|--------------------------------------------|-----------------------------------------------------------|-----------------------|
| description| basic, easy to use | best performance, stable, recommand        | best performance, for trial                               | slow, high-security   |
| name     | the official model name (e.g. gpt-3.5-turbo,qwen-max)                 | XGenerationLab/XiYanSQL-QwenCoder-32B-2412 | xiyansql-qwencoder-32b                                    | xiyansql-qwencoder-3b |
| key      | the API key of the service provider (e.g. OpenAI, Alibaba Cloud)      | the API key of modelscope                  | the API key via email                                     | ""                    |
| url      | the endpoint of the service provider (e.g."https://api.openai.com/v1") | https://api-inference.modelscope.cn/v1/    | https://xiyan-stream.biz.aliyun.com/service/api/xiyan-sql | http://localhost:5090 |

#### General LLMs
If you want to use the general LLMs, e.g. gpt3.5, you can directly config like this:
```yaml
model:
  name: "gpt-3.5-turbo"
  key: "YOUR KEY "
  url: "https://api.openai.com/v1"
database:
```

If you want to use Qwen from Alibaba, e.g. Qwen-max, you can use following config:
```yaml
model:
  name: "qwen-max"
  key: "YOUR KEY "
  url: "https://dashscope.aliyuncs.com/compatible-mode/v1"
database:
```
#### Text-to-SQL SOTA model
We recommend the XiYanSQL-qwencoder-32B (https://github.com/XGenerationLab/XiYanSQL-QwenCoder), which is the SOTA model in text-to-sql, see [Bird benchmark](https://bird-bench.github.io/).
There are two ways to use the model. You can use either of them.
(1) [Modelscope](https://www.modelscope.cn/models/XGenerationLab/XiYanSQL-QwenCoder-32B-2412),  (2) Alibaba Cloud DashScope.


##### (1) Modelscope version
You need to apply a ``key`` of API-inference from Modelscope, https://www.modelscope.cn/docs/model-service/API-Inference/intro
Then you can use the following config:
```yaml
model:
  name: "XGenerationLab/XiYanSQL-QwenCoder-32B-2412"
  key: ""
  url: "https://api-inference.modelscope.cn/v1/"
```

Read our [model description](https://www.modelscope.cn/models/XGenerationLab/XiYanSQL-QwenCoder-32B-2412) for more details. 

##### (2) Dashscope version

We deployed the model on Alibaba Cloud DashScope, so you need to set the following environment variables:
Send me your email to get the ``key``. ( godot.lzl@alibaba-inc.com )
In the email, please attach the following information:
```yaml
name: "YOUR NAME",
email: "YOUR EMAIL",
organization: "your college or Company or Organization"
```
We will send you a ``key`` according to your email. And you can fill the ``key`` in the yml file.
The ``key`` will be expired by  1 month or 200 queries or other legal restrictions.


```yaml
model:
  name: "xiyansql-qwencoder-32b"
  key: "KEY"
  url: "https://xiyan-stream.biz.aliyun.com/service/api/xiyan-sql"
```

Note: this model service is just for trial, if you need to use it in production, please contact us.

##### (3) Local version
Alternatively, you can also deploy the model [XiYanSQL-qwencoder-32B](https://github.com/XGenerationLab/XiYanSQL-QwenCoder) on your own server.
See [Local Model](src/xiyan_mcp_server/local_model/README.md) for more details.


### Database Configuration
``host``, ``port``, ``user``, ``password``, ``database`` are the connection information of the database.

You can use local or any remote databases. Now we support MySQL and PostgreSQL(more dialects soon).

#### MySQL

```yaml
database:
  host: "localhost"
  port: 3306
  user: "root"
  password: ""
  database: ""
```
#### PostgreSQL
Step 1: Install Python packages
```bash
pip install psycopg2
```
Step 2: prepare the config.yml like this:
```yaml
database:
  dialect: "postgresql"
  host: "localhost"
  port: 5432
  user: ""
  password: ""
  database: ""
```

Note that ``dialect`` should be ``postgresql`` for postgresql.
## Launch

### Server Launch

If you want to launch server with `sse`, you have to run the following command in a terminal:
```shell
YML=path/to/yml python -m xiyan_mcp_server
```
Then you should see the information on http://localhost:8000/sse in your browser. (Defaultly, change if your mcp server runs on other host/port)

Otherwise, if you use `stdio` transport protocol, you usually declare the mcp server command in specific mcp application instead of launching it in a terminal.
However, you can still debug with this command if needed.

### Client Setting

#### Claude Desktop
Add this in your Claude Desktop config file, ref <a href="https://github.com/XGenerationLab/xiyan_mcp_server/blob/main/imgs/claude_desktop.jpg">Claude Desktop config example</a>
```json
{
    "mcpServers": {
        "xiyan-mcp-server": {
            "command": "/xxx/python",
            "args": [
                "-m",
                "xiyan_mcp_server"
            ],
            "env": {
                "YML": "PATH/TO/YML"
            }
        }
    }
}
```
**Please note that the Python command here requires the complete path to the Python executable (`/xxx/python`); otherwise, the Python interpreter cannot be found. You can determine this path by using the command `which python`. The same applies to other applications as well.**

Claude Desktop currently does not support the SSE transport protocol.

#### Cline
Prepare the config like [Claude Desktop](#claude-desktop)

#### Goose
If you use `stdio`, add following command in the config, ref <a href="https://github.com/XGenerationLab/xiyan_mcp_server/blob/main/imgs/goose.jpg">Goose config example</a>
```shell
env YML=path/to/yml /xxx/python -m xiyan_mcp_server
```
Otherwise, if you use `sse`, change Type to `SSE` and set the endpoint to `http://127.0.0.1:8000/sse`
#### Cursor
Use the similar command as follows.

For `stdio`:
```json
{
  "mcpServers": {
    "xiyan-mcp-server": {
      "command": "/xxx/python",
      "args": [
        "-m",
        "xiyan_mcp_server"
      ],
      "env": {
        "YML": "path/to/yml"
      }
    }
  }
}
```
For `sse`:
```json
{
  "mcpServers": {
    "xiyan_mcp_server_1": {
      "url": "http://localhost:8000/sse"
    }
  }
}
```


#### Witsy
Add following in command:
```shell
/xxx/python -m xiyan_mcp_server
```
Add an env: key is YML and value is the path to your yml file.
Ref <a href="https://github.com/XGenerationLab/xiyan_mcp_server/blob/main/imgs/witsy.jpg">Witsy config example</a>


## Contact us:
If you are interested in our research or products, please feel free to contact us.

#### Contact Information:

Yifu Liu, zhencang.lyf@alibaba-inc.com

#### Join Our DingTalk Group

<a href="https://github.com/XGenerationLab/XiYan-SQL/blob/main/xiyansql_dingding.png">Ding Group钉钉群</a> 


## Other Related Links

[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/xgenerationlab-xiyan-mcp-server-badge.png)](https://mseep.ai/app/xgenerationlab-xiyan-mcp-server)




## Citation
If you find our work helpful, feel free to give us a cite.
```bibtex
@article{XiYanSQL,
      title={XiYan-SQL: A Novel Multi-Generator Framework For Text-to-SQL}, 
      author={Yifu Liu and Yin Zhu and Yingqi Gao and Zhiling Luo and Xiaoxia Li and Xiaorong Shi and Yuntao Hong and Jinyang Gao and Yu Li and Bolin Ding and Jingren Zhou},
      year={2025},
      eprint={2507.04701},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2507.04701}, 
}
```
