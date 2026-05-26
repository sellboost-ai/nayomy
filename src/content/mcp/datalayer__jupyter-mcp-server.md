---
name: "datalayer/jupyter-mcp-server"
description: "Model Context Protocol (MCP) Server for Jupyter."
category: "Data Science Tools"
repo: "datalayer/jupyter-mcp-server"
stars: 1124
url: "https://github.com/datalayer/jupyter-mcp-server"
body_length: 16439
license: "BSD-3-Clause"
language: "Python"
homepage: "https://jupyter-mcp-server.datalayer.tech"
body_tr: |-
  <!--
    ~ Copyright (c) 2024- Datalayer, Inc.
    ~
    ~ BSD 3-Clause License
  -->

  [![Datalayer](https://images.datalayer.io/brand/logos/datalayer-horizontal.svg)](https://datalayer.io)

  [![Sponsor Olun](https://img.shields.io/static/v1?label=Sponsor%20Olun&message=%E2%9D%A4&logo=GitHub&style=flat&color=1ABC9C)](https://github.com/sponsors/datalayer)

  <div align="center">

  <!-- omit in toc -->

  # 🪐🔧 Jupyter MCP Server

  **AI'nin [Jupyter](https://jupyter.org) Notebook'larını gerçek zamanlı olarak bağlamak ve yönetmek için geliştirilmiş bir [MCP](https://modelcontextprotocol.io) sunucusu**

  *[Datalayer](https://github.com/datalayer) tarafından geliştirilmiştir*

  [![PyPI - Version](https://img.shields.io/pypi/v/jupyter-mcp-server?style=for-the-badge&logo=pypi&logoColor=white)](https://pypi.org/project/jupyter-mcp-server)
  [![Total PyPI downloads](https://img.shields.io/pepy/dt/jupyter-mcp-server?style=for-the-badge&logo=python&logoColor=white)](https://pepy.tech/project/jupyter-mcp-server)
  [![Docker Pulls](https://img.shields.io/docker/pulls/datalayer/jupyter-mcp-server?style=for-the-badge&logo=docker&logoColor=white&color=2496ED)](https://hub.docker.com/r/datalayer/jupyter-mcp-server)
  [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue?style=for-the-badge&logo=open-source-initiative&logoColor=white)](https://opensource.org/licenses/BSD-3-Clause)


  ![Jupyter MCP Server Demo](https://images.datalayer.io/products/jupyter-mcp-server/mcp-demo-multimodal.gif)

  </div>

  > [!IMPORTANT]
  > **v1.0.0'da kırılan değişiklik:** MCP istemci kurulumunuzda `MCP_TOKEN` yapılandırmanız gerekir.
  > 
  > Kurulum ayrıntıları için: https://jupyter-mcp-server.datalayer.tech/providers/jupyter-streamable-http-standalone/#3-configure-your-mcp-client
  > 
  > **v1.0.2'deki güncelleme:** `pycrdt` artık desteklenmektedir, bu nedenle `datalayer_pycrdt` yüklemesi artık gerekli değildir.
  > 

  > [!NOTE]
  > **Geri Bildiriminize İhtiyacımız Var!**
  > 
  > **JupyterHub** ve **Google Colab** dağıtımları için aktif olarak destek geliştiriyoruz. Jupyter MCP Server'ı bu platformlarla kullanıyorsanız veya kullanmayı planlıyorsanız, sizi duyduğumuz için sevineceğiz!
  > 
  > - 🏢 **JupyterHub kullanıcıları**: Dağıtım kurulumunuzu ve gereksinimlerinizi paylaşın
  > - 🌐 **Google Colab kullanıcıları**: Kullanım durumlarınızı ve iş akışlarınızı anlamamıza yardımcı olun
  > 
  > [Topluluk sayfamızda](https://jupyter-mcp-server.datalayer.tech/community) konuşmaya katılın - geri bildiriminiz özellikleri önceliklendirmemize ve bu entegrasyonların ihtiyaçlarınız için sorunsuz bir şekilde çalışmasını sağlamaya yardımcı olacaktır.

  ## 📖 İçindekiler

  - [Temel Özellikler](#-temel-özellikler)
  - [MCP Genel Bakış](#-mcp-genel-bakış)
  - [Başlangıç](#-başlangıç)
  - [En İyi Uygulamalar](#-en-iyi-uygulamalar)
  - [Katkıda Bulunma](#-katkıda-bulunma)
  - [Kaynaklar](#-kaynaklar)

  ## 🚀 Temel Özellikler

  - ⚡ **Gerçek zamanlı kontrol:** Notebook değişikliklerini anında görüntüleyin.
  - 🔁 **Akıllı yürütme:** Hücre çıktısı geri bildirimi sayesinde çalıştırma başarısız olduğunda otomatik olarak ayarlanır.
  - 🧠 **Bağlama farkında:** Daha ilgili etkileşimler için tüm notebook bağlamını anlar.
  - 📊 **Çoklu mod desteği:** Görüntüler, grafikler ve metin dahil olmak üzere farklı çıktı türlerini destekler.
  - 📚 **Çok notebook desteği:** Birden fazla notebook arasında sorunsuz geçiş yapın.
  - 🎨 **JupyterLab entegrasyonu:** Otomatik notebook açma gibi geliştirilmiş UI entegrasyonu.
  - 🤝 **MCP uyumlu:** Claude Desktop, Cursor, Windsurf ve daha fazlası gibi herhangi bir MCP istemcisiyle çalışır.
  - 🔍 **Gözlemlenebilirlik:** Araç çağrılarını ve kernel yürütmelerini izlemek için OpenTelemetry entegrasyonu olan yerleşik hook sistemi.

  Herhangi bir Jupyter dağıtımı (yerel, JupyterHub, ...) ve [Datalayer](https://datalayer.ai) barındırılan Notebook'larla uyumludur.


  ## 🔧 MCP Genel Bakış

  ### 🔧 Araçlar Genel Bakışı

  Sunucu, Jupyter notebook'larıyla etkileşim kurmak için aşağıdaki şekilde kategorize edilen zengin bir araç seti sağlar. 
  Her araç, parametreleri ve dönüş değerleri hakkında daha fazla bilgi için lütfen [resmi Araçlar belgelerine](https://jupyter-mcp-server.datalayer.tech/tools) bakın.


  #### Sunucu Yönetimi Araçları

  | Ad               | Açıklama                                                                                   |
  | :--------------- | :----------------------------------------------------------------------------------------- |
  | `list_files`     | Jupyter sunucusunun dosya sistemindeki dosyaları ve dizinleri listeleyin.                  |
  | `list_kernels`   | Jupyter sunucusundaki tüm kullanılabilir ve çalışan kernel oturumlarını listeleyin.       |
  | `connect_to_jupyter` | MCP sunucusunu yeniden başlatmadan bir Jupyter sunucusuna dinamik olarak bağlanın. *Jupyter uzantısı olarak çalışırken mevcut değildir. Sunucuları dinamik olarak değiştirmek veya sabit kodlanmış yapılandırmayı önlemek için kullanışlıdır.* [Daha fazla bilgi](https://jupyter-mcp-server.datalayer.tech/reference/tools/#3-connect_to_jupyter) |

  #### Çok-Notebook Yönetimi Araçları

  | Ad                 | Açıklama                                                                                   |
  | :----------------- | :--------------------------------------------------------------------------------------- |
  | `use_notebook`     | Bir notebook dosyasına bağlanın, yeni bir tane oluşturun veya notebook'lar arasında geçiş yapın. |
  | `list_notebooks`   | Jupyter sunucusundaki tüm kullanılabilir notebook'ları ve durumlarını listeleyin          |
  | `restart_notebook` | Belirli bir yönetilen notebook için kernel'i yeniden başlatın.                            |
  | `unuse_notebook`   | Belirli bir notebook'tan bağlantıyı kesin ve kaynaklarını serbest bırakın.                |
  | `read_notebook`    | Notebook hücrelerinin kaynak içeriğini kısa veya ayrıntılı format seçenekleriyle okuyun. |

  #### Hücre İşlemleri ve Yürütme Araçları

  | Ad                         | Açıklama                                                                                   |
  | :------------------------- | :------------------------------------------------------------------------------- |
  | `read_cell`                | Tek bir hücrenin tam içeriğini (Meta veri, Kaynak ve Çıktılar) okuyun.           |
  | `insert_cell`              | Belirtilen konuma yeni bir kod veya markdown hücresi ekleyin.                     |
  | `delete_cell`              | Belirtilen indeksteki bir hücreyi silin.                                          |
  | `move_cell`                | Bir hücreyi notebook içinde bir konumdan diğerine taşıyın.                       |
  | `overwrite_cell_source`    | Mevcut bir hücrenin kaynak kodunu üzerine yazın.                                  |
  | `edit_cell_source`         | Tam yeniden yazma olmaksızın bir hücrenin kaynağına cerrahi bul ve değiştir düzenlemeleri uygulayın. |
  | `execute_cell`             | Zaman aşımı ile bir hücreyi yürütün, görüntüler dahil çoklu mod çıktısını destekler. |
  | `insert_execute_code_cell` | Yeni bir kod hücresi ekleyin ve tek adımda yürütün.                               |
  | `execute_code`             | Kernel'de doğrudan kod yürütün, magic komutları ve shell komutlarını destekler.   |

  #### JupyterLab Entegrasyonu

  *Yalnızca JupyterLab modu etkinleştirildiğinde kullanılabilir. Varsayılan olarak etkindir.*

  JupyterLab modunda çalışırken, Jupyter MCP Server, ek JupyterLab komutlarını MCP araçları olarak göstermek için [jupyter-mcp-tools](https://github.com/datalayer/jupyter-mcp-tools) ile entegre olur. Varsayılan olarak, aşağıdaki araçlar etkindir:

  | Ad                            | Açıklama                                                                           |
  | :---------------------------- | :--------------------------------------------------------------------------------- |
  | `notebook_run-all-cells`      | Geçerli notebook'taki tüm hücreleri sırayla yürütün                                |
  | `notebook_get-selected-cell`  | Şu anda seçili hücre hakkında bilgi alın                                           |

  <details>
  <summary><strong>📚 Ek araçları nasıl özelleştireceğinizi öğrenin</strong></summary>

  Artık `allowed_jupyter_mcp_tools` yapılandırma parametresini kullanarak `jupyter-mcp-tools`'tan hangi araçların kullanılabilir olduğunu özelleştirebilirsiniz. Bu, ek notebook işlemleri, konsol komutları, dosya yönetimi araçları ve daha fazlasını etkinleştirmenizi sağlar.

  ```bash
  # Örnek: Komut satırı aracılığıyla ek araçları etkinleştirin
  jupyter lab --port 4040 --IdentityProvider.token MY_TOKEN --JupyterMCPServerExtensionApp.allowed_jupyter_mcp_tools="notebook_run-all-cells,notebook_get-selected-cell,notebook_append-execute,console_create"
  ```

  Kullanılabilir araçların tam listesi ve ayrıntılı yapılandırma talimatları için lütfen [Ek Araçlar belgelerine](https://jupyter-mcp-server.datalayer.tech/reference/tools-additional) bakın.

  </details>

  ### 📝 İstem Genel Bakışı

  Sunucu, MCP'nin [istem özelliğini](https://modelcontextprotocol.io/specification/2025-06-18/server/prompts) de destekler ve kullanıcıların Jupyter notebook'larıyla etkileşim kurması için kolay bir yol sağlar.

  | Ad             | Açıklama                                                                           |
  | :------------- | :--------------------------------------------------------------------------------- |
  | `jupyter-cite` | Belirtilen notebook'tan belirli hücreleri alıntı yapın (Coding IDE veya CLI'da `@` gibi) |

  Her istem, giriş parametreleri ve dönüş içeriği hakkında daha fazla bilgi için lütfen [resmi İstem belgelerine](https://jupyter-mcp-server.datalayer.tech/reference/prompts) bakın.

  ## 🏁 Başlangıç

  `Streamable HTTP` taşıması, Jupyter Server uzantısı olarak çalıştırma ve gelişmiş yapılandırma dahil olmak üzere kapsamlı kurulum talimatları için [belgelerimizi](https://jupyter-mcp-server.datalayer.tech/) kontrol edin. Ya da `JupyterLab` ve `STDIO` taşıması ile burada hızlı bir şekilde başlayın.

  ### 1. Ortamınızı Kurun

  ```bash
  pip install jupyterlab==4.4.1 jupyter-collaboration==4.0.2 jupyter-mcp-tools>=0.1.4 ipykernel pycrdt
  ```

  > [!TIP]
  > Ortamınızın doğru şekilde yapılandırıldığını doğrulamak için:
  > 1. JupyterLab'de bir notebook açın
  > 2. Herhangi bir hücreye (kod veya markdown) bir miktar içerik yazın
  > 3. Sekme göstergesini gözlemleyin: notebook adının yanında bir "×" görünmelidir; bu kaydedilmemiş değişiklikleri gösterir
  > 4. Birkaç saniye bekleyin—"×", manuel olarak kaydetmeden otomatik olarak "●" olarak değişmelidir
  > 
  > Bu otomatik kaydetme davranışı, gerçek zamanlı işbirliği özelliklerinin düzgün çalıştığını doğrular; bu, MCP sunucusu entegrasyonu için gereklidir.

  ### 2. JupyterLab'i Başlatın

  ```bash
  # JupyterLab'i 8888 portunda başlatın, herhangi bir IP'den erişime izin verin ve bir token ayarlayın
  jupyter lab --port 8888 --IdentityProvider.token MY_TOKEN --ip 0.0.0.0
  ```

  > [!NOTE]
  > Yukarıdaki JupyterLab yerine JupyterHub aracılığıyla notebook'ları çalıştırıyorsanız, [JupyterHub kurulum kılavuzumuza](https://jupyter-mcp-server.datalayer.tech//providers/jupyterhub-streamable-http/) başvurun.

  ### 3. Tercih Ettiğiniz MCP İstemcisini Yapılandırın

  Daha sonra, MCP istemcinizi sunucuya bağlanacak şekilde yapılandırın. İhtiyaçlarınıza en uygun olanı seçmek için iki ana yöntem sunuyoruz:

  - **📦 `uvx` Kullanarak (Hızlı Başlangıç için Önerilir):** `uv` kullanan hafif ve hızlı bir yöntem. Yerel geliştirme ve ilk kez kullanıcılar için idealdir.
  - **🐳 `Docker` Kullanarak (Üretim için Önerilir):** Tutarlı ve izole bir ortamı sağlayan konteynerleştirilmiş bir yaklaşım; üretim veya karmaşık kurulumlar için mükemmeldir.

  <details>
  <summary><b>📦 uvx Kullanarak (Hızlı Başlangıç)</b></summary>

  Önce `uv` yükleyin:

  ```bash
  pip install uv
  uv --version
  # 0.6.14 veya daha yüksek olmalıdır
  ```

  [uv yüklemesi](https://docs.astral.sh/uv/getting-started/installation/) hakkında daha fazla ayrıntıya bakın.

  Sonra, istemcinizi yapılandırın:

  ```json
  {
    "mcpServers": {
      "jupyter": {
        "command": "uvx",
        "args": ["jupyter-mcp-server@latest"],
        "env": {
          "JUPYTER_URL": "http://localhost:8888",
          "JUPYTER_TOKEN": "MY_TOKEN",
          "ALLOW_IMG_OUTPUT": "true"
        }
      }
    }
  }
  ```

  </details>

  <details>
  <summary><b>🐳 Docker Kullanarak (Üretim)</b></summary>

  **macOS ve Windows'ta:**

  ```json
  {
    "mcpServers": {
      "jupyter": {
        "command": "docker",
        "args": [
          "run", "-i", "--rm",
          "-e", "JUPYTER_URL",
          "-e", "JUPYTER_TOKEN",
          "-e", "ALLOW_IMG_OUTPUT",
          "datalayer/jupyter-mcp-server:latest"
        ],
        "env": {
          "JUPYTER_URL": "http://host.docker.internal:8888",
          "JUPYTER_TOKEN": "MY_TOKEN",
          "ALLOW_IMG_OUTPUT": "true"
        }
      }
    }
  }
  ```

  **Linux'ta:**

  ```json
  {
    "mcpServers": {
      "jupyter": {
        "command": "docker",
        "args": [
          "run", "-i", "--rm",
          "-e", "JUPYTER_URL",
          "-e", "JUPYTER_TOKEN",
          "-e", "ALLOW_IMG_OUTPUT",
          "--network=host",
          "datalayer/jupyter-mcp-server:latest"
        ],
        "env": {
          "JUPYTER_URL": "http://localhost:8888",
          "JUPYTER_TOKEN": "MY_TOKEN",
          "ALLOW_IMG_OUTPUT": "true"
        }
      }
    }
  }
  ```

  </details>

  > [!TIP]
  >
  > 1. **Port Yapılandırması**: Jupyter URL'lerinizde `port`'un `jupyter lab` komutunda kullanılan ile eşleştiğinden emin olun. Basitleştirilmiş yapılandırma için bunu `JUPYTER_URL`'de ayarlayın.
  > 1. **Sunucu Ayrımı**: Her iki hizmet de aynı sunucudayken `JUPYTER_URL` kullanın, gelişmiş dağıtımlar için bireysel değişkenleri ayarlayın. Farklı URL değişkenleri, bazı dağıtımlar notebook depolamayı (`DOCUMENT_URL`) kernel yürütmesinden (`RUNTIME_URL`) ayırdığı için mevcuttur.
  > 1. **Kimlik Doğrulama:** Çoğu durumda belge ve çalışma zamanı hizmetleri aynı kimlik doğrulama belirtecini kullanır. Basitleştirilmiş yapılandırma için `JUPYTER_TOKEN` kullanın veya farklı kimlik bilgileri için `DOCUMENT_TOKEN` ve `RUNTIME_TOKEN`'ı bireysel olarak ayarlayın.
  > 1. **Notebook Yolu**: `DOCUMENT_ID` parametresi, MCP istemcisinin varsayılan olarak bağlanacağı notebook'a giden yolu belirtir. JupyterLab'in başlatıldığı dizine göre göreli olmalıdır. `DOCUMENT_ID`'yi atlarsanız, MCP istemcisi Jupyter sunucusundaki tüm kullanılabilir notebook'ları otomatik olarak listeleyebilir ve istemeriniz aracılığıyla etkileşimli olarak birini seçmenize izin verir.
  > 1. **Görüntü Çıktısı**: LLM'niz çoklu mod desteği desteklemiyorsa `ALLOW_IMG_OUTPUT`'u `false` olarak ayarlayın.

  Çeşitli MCP istemcilerini yapılandırma hakkında ayrıntılı talimatlar için—[Claude Desktop](https://jupyter-mcp-server.datalayer.tech/clients/claude_desktop), [VS Code](https://jupyter-mcp-server.datalayer.tech/clients/vscode), [Cursor](https://jupyter-mcp-server.datalayer.tech/clients/cursor), [Cline](https://jupyter-mcp-server.datalayer.tech/clients/cline) ve [Windsurf](https://jupyter-mcp-server.datalayer.tech/clients/windsurf) dahil—[İstemciler belgelerine](https://jupyter-mcp-server.datalayer.tech/clients) bakın.

  ## ✅ En İyi Uygulamalar

  - Gelişmiş çoklu mod anlayışı yeteneklerinden tam olarak yararlanmak için çoklu mod girişini destekleyen LLM'lerle (Gemini 2.5 Pro gibi) etkileşim kurun.
  - Görüntü verilerini döndürebilen ve ayrıştırabilen bir MCP istemcisi kullanın (Cursor, Gemini CLI, vb.), çünkü bazı istemciler bu özelliği desteklemeyebilir.
  - Karmaşık görevleri (tüm veri bilimi iş akışı gibi) birden fazla alt göreve (veri temizleme, özellik mühendisliği, model eğitimi, model değerlendirmesi, vb.) bölün ve bunları adım adım yürütün.
  - Net yapılandırılmış istekler ve kurallar sağlayın (👉 Başlamak için [İstem Şablonlarımızı](prompt/README.md) ziyaret edin)
  - Mümkün olduğunca çok bağlam sağlayın (halihazırda yüklü paketler, mevcut veri setleri için alan açıklamaları, geçerli çalışma dizini, ayrıntılı görev gereksinimleri, vb.).

  ## 🤝 Katkıda Bulunma

  Her türlü katkıyı memnuniyetle karşılarız! İşte bazı örnekler:

  - 🐛 Hata düzeltmeleri
  - 📝 Mevcut özelliklerdeki iyileştirmeler
  - 🔧 Yeni özellik geliştirme
  - 📚 Belgelendirme iyileştirmeleri ve istem şablonları

  Geliştirmeye nasıl başlayacağınız ve katkılarınızı nasıl sunacağınız hakkında ayrıntılı talimatlar için lütfen [**Katkı Kılavuzumuza**](CONTRIBUTING.md) bakın.

  ### Katkıcılarımız

  [![Contributors](https://contrib.rocks/image?repo=datalayer/jupyter-mcp-server)](https://github.com/datalayer/jupyter-mcp-server/graphs/contributors)

  ## 📚 Kaynaklar

  Jupyter MCP Server hakkında blog yazıları, videolar veya diğer materyalleri mi arıyorsunuz?

  👉 Daha fazla bilgi için belgelerimizde [**Kaynaklar bölümünü**](https://jupyter-mcp-server.datalayer.tech/resources) ziyaret edin!

  [![Star History Chart](https://api.star-history.com/svg?repos=datalayer/jupyter-mcp-server&type=Date)](https://star-history.com/#datalayer/jupyter-mcp-server&type=Date)

  ______________________________________________________________________

  <div align="center">

  **Bu proje sizin için yararlı ise, lütfen bize bir ⭐️ verin**

  [Datalayer](https://github.com/datalayer) tarafından ❤️ ile yapılmıştır

  </div>

  ## Barındırılan dağıtım

  Barındırılan bir dağıtım [Fronteir AI](https://fronteir.ai/mcp/datalayer-jupyter-mcp-server)'da mevcuttur.
---

<!--
  ~ Copyright (c) 2024- Datalayer, Inc.
  ~
  ~ BSD 3-Clause License
-->

[![Datalayer](https://images.datalayer.io/brand/logos/datalayer-horizontal.svg)](https://datalayer.io)

[![Become a Sponsor](https://img.shields.io/static/v1?label=Become%20a%20Sponsor&message=%E2%9D%A4&logo=GitHub&style=flat&color=1ABC9C)](https://github.com/sponsors/datalayer)

<div align="center">

<!-- omit in toc -->

# 🪐🔧 Jupyter MCP Server

**An [MCP](https://modelcontextprotocol.io) server developed for AI to connect and manage [Jupyter](https://jupyter.org) Notebooks in real-time**

*Developed by [Datalayer](https://github.com/datalayer)*

[![PyPI - Version](https://img.shields.io/pypi/v/jupyter-mcp-server?style=for-the-badge&logo=pypi&logoColor=white)](https://pypi.org/project/jupyter-mcp-server)
[![Total PyPI downloads](https://img.shields.io/pepy/dt/jupyter-mcp-server?style=for-the-badge&logo=python&logoColor=white)](https://pepy.tech/project/jupyter-mcp-server)
[![Docker Pulls](https://img.shields.io/docker/pulls/datalayer/jupyter-mcp-server?style=for-the-badge&logo=docker&logoColor=white&color=2496ED)](https://hub.docker.com/r/datalayer/jupyter-mcp-server)
[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue?style=for-the-badge&logo=open-source-initiative&logoColor=white)](https://opensource.org/licenses/BSD-3-Clause)


![Jupyter MCP Server Demo](https://images.datalayer.io/products/jupyter-mcp-server/mcp-demo-multimodal.gif)

</div>

> [!IMPORTANT]
> **Breaking change in v1.0.0:** You must configure `MCP_TOKEN` in your MCP client setup.
> 
> For setup details, see: https://jupyter-mcp-server.datalayer.tech/providers/jupyter-streamable-http-standalone/#3-configure-your-mcp-client
> 
> **Update in v1.0.2:** `pycrdt` is now supported, so installing `datalayer_pycrdt` is no longer required.
> 

> [!NOTE]
> **We Need Your Feedback!**
> 
> We're actively developing support for **JupyterHub** and **Google Colab** deployments. If you're using or planning to use Jupyter MCP Server with these platforms, we'd love to hear from you!
> 
> - 🏢 **JupyterHub users**: Share your deployment setup and requirements
> - 🌐 **Google Colab users**: Help us understand your use cases and workflows
> 
> Join the conversation in our [Community page](https://jupyter-mcp-server.datalayer.tech/community) - your feedback will help us prioritize features and ensure these integrations work seamlessly for your needs.

## 📖 Table of Contents

- [Key Features](#-key-features)
- [MCP Overview](#-mcp-overview)
- [Getting Started](#-getting-started)
- [Best Practices](#-best-practices)
- [Contributing](#-contributing)
- [Resources](#-resources)

## 🚀 Key Features

- ⚡ **Real-time control:** Instantly view notebook changes as they happen.
- 🔁 **Smart execution:** Automatically adjusts when a cell run fails thanks to cell output feedback.
- 🧠 **Context-aware:** Understands the entire notebook context for more relevant interactions.
- 📊 **Multimodal support:** Support different output types, including images, plots, and text.
- 📚 **Multi-notebook support:** Seamlessly switch between multiple notebooks.
- 🎨 **JupyterLab integration:** Enhanced UI integration like automatic notebook opening.
- 🤝 **MCP-compatible:** Works with any MCP client, such as Claude Desktop, Cursor, Windsurf, and more.
- 🔍 **Observability:** Built-in hook system with OpenTelemetry integration for tracing tool calls and kernel executions.

Compatible with any Jupyter deployment (local, JupyterHub, ...) and with [Datalayer](https://datalayer.ai) hosted Notebooks.


## 🔧 MCP Overview

### 🔧 Tools Overview

The server provides a rich set of tools for interacting with Jupyter notebooks, categorized as follows. 
For more details on each tool, their parameters, and return values, please refer to the [official Tools documentation](https://jupyter-mcp-server.datalayer.tech/tools).


#### Server Management Tools

| Name             | Description                                                                                |
| :--------------- | :----------------------------------------------------------------------------------------- |
| `list_files`     | List files and directories in the Jupyter server's file system.                            |
| `list_kernels`   | List all available and running kernel sessions on the Jupyter server.                      |
| `connect_to_jupyter` | Connect to a Jupyter server dynamically without restarting the MCP server. *Not available when running as Jupyter extension. Useful for switching servers dynamically or avoiding hardcoded configuration.* [Read more](https://jupyter-mcp-server.datalayer.tech/reference/tools/#3-connect_to_jupyter) |

#### Multi-Notebook Management Tools

| Name               | Description                                                                              |
| :----------------- | :--------------------------------------------------------------------------------------- |
| `use_notebook`     | Connect to a notebook file, create a new one, or switch between notebooks.               |
| `list_notebooks`   | List all notebooks available on the Jupyter server and their status                      |
| `restart_notebook` | Restart the kernel for a specific managed notebook.                                      |
| `unuse_notebook`   | Disconnect from a specific notebook and release its resources.                           |
| `read_notebook`    | Read notebook cells source content with brief or detailed format options.                |

#### Cell Operations and Execution Tools

| Name                       | Description                                                                      |
| :------------------------- | :------------------------------------------------------------------------------- |
| `read_cell`                | Read the full content (Metadata, Source and Outputs) of a single cell.           |
| `insert_cell`              | Insert a new code or markdown cell at a specified position.                      |
| `delete_cell`              | Delete a cell at a specified index.                                              |
| `move_cell`                | Move a cell from one position to another within a notebook.                      |
| `overwrite_cell_source`    | Overwrite the source code of an existing cell.                                   |
| `edit_cell_source`         | Apply surgical find-and-replace edits to a cell's source without full rewrite.   |
| `execute_cell`             | Execute a cell with timeout, supports multimodal output including images.        |
| `insert_execute_code_cell` | Insert a new code cell and execute it in one step.                               |
| `execute_code`             | Execute code directly in the kernel, supports magic commands and shell commands. |

#### JupyterLab Integration

*Available only when JupyterLab mode is enabled. It is enabled by default.*

When running in JupyterLab mode, Jupyter MCP Server integrates with [jupyter-mcp-tools](https://github.com/datalayer/jupyter-mcp-tools) to expose additional JupyterLab commands as MCP tools. By default, the following tools are enabled:

| Name                          | Description                                                                        |
| :---------------------------- | :--------------------------------------------------------------------------------- |
| `notebook_run-all-cells`      | Execute all cells in the current notebook sequentially                             |
| `notebook_get-selected-cell`  | Get information about the currently selected cell                                   |

<details>
<summary><strong>📚 Learn how to customize additional tools</strong></summary>

You can now customize which tools from `jupyter-mcp-tools` are available using the `allowed_jupyter_mcp_tools` configuration parameter. This allows you to enable additional notebook operations, console commands, file management tools, and more.

```bash
# Example: Enable additional tools via command-line
jupyter lab --port 4040 --IdentityProvider.token MY_TOKEN --JupyterMCPServerExtensionApp.allowed_jupyter_mcp_tools="notebook_run-all-cells,notebook_get-selected-cell,notebook_append-execute,console_create"
```

For the complete list of available tools and detailed configuration instructions, please refer to the [Additional Tools documentation](https://jupyter-mcp-server.datalayer.tech/reference/tools-additional).

</details>

### 📝 Prompt Overview

The server also supports [prompt feature](https://modelcontextprotocol.io/specification/2025-06-18/server/prompts) of MCP, providing a easy way for user to interact with Jupyter notebooks.

| Name           | Description                                                                        |
| :------------- | :--------------------------------------------------------------------------------- |
| `jupyter-cite` | Cite specific cells from specified notebook (like `@` in Coding IDE or CLI)        |

For more details on each prompt, their input parameters, and return content, please refer to the [official Prompt documentation](https://jupyter-mcp-server.datalayer.tech/reference/prompts).

## 🏁 Getting Started

For comprehensive setup instructions—including `Streamable HTTP` transport, running as a Jupyter Server extension and advanced configuration—check out [our documentation](https://jupyter-mcp-server.datalayer.tech/). Or, get started quickly with `JupyterLab` and `STDIO` transport here below.

### 1. Set Up Your Environment

```bash
pip install jupyterlab==4.4.1 jupyter-collaboration==4.0.2 jupyter-mcp-tools>=0.1.4 ipykernel pycrdt
```

> [!TIP]
> To confirm your environment is correctly configured:
> 1. Open a notebook in JupyterLab
> 2. Type some content in any cell (code or markdown)
> 3. Observe the tab indicator: you should see an "×" appear next to the notebook name, indicating unsaved changes
> 4. Wait a few seconds—the "×" should automatically change to a "●" without manually saving
> 
> This automatic saving behavior confirms that the real-time collaboration features are working properly, which is essential for MCP server integration.

### 2. Start JupyterLab

```bash
# Start JupyterLab on port 8888, allowing access from any IP and setting a token
jupyter lab --port 8888 --IdentityProvider.token MY_TOKEN --ip 0.0.0.0
```

> [!NOTE]
> If you are running notebooks through JupyterHub instead of JupyterLab as above, refer to our [JupyterHub setup guide](https://jupyter-mcp-server.datalayer.tech//providers/jupyterhub-streamable-http/).

### 3. Configure Your Preferred MCP Client

Next, configure your MCP client to connect to the server. We offer two primary methods—choose the one that best fits your needs:

- **📦 Using `uvx` (Recommended for Quick Start):** A lightweight and fast method using `uv`. Ideal for local development and first-time users.
- **🐳 Using `Docker` (Recommended for Production):** A containerized approach that ensures a consistent and isolated environment, perfect for production or complex setups.

<details>
<summary><b>📦 Using uvx (Quick Start)</b></summary>

First, install `uv`:

```bash
pip install uv
uv --version
# should be 0.6.14 or higher
```

See more details on [uv installation](https://docs.astral.sh/uv/getting-started/installation/).

Then, configure your client:

```json
{
  "mcpServers": {
    "jupyter": {
      "command": "uvx",
      "args": ["jupyter-mcp-server@latest"],
      "env": {
        "JUPYTER_URL": "http://localhost:8888",
        "JUPYTER_TOKEN": "MY_TOKEN",
        "ALLOW_IMG_OUTPUT": "true"
      }
    }
  }
}
```

</details>

<details>
<summary><b>🐳 Using Docker (Production)</b></summary>

**On macOS and Windows:**

```json
{
  "mcpServers": {
    "jupyter": {
      "command": "docker",
      "args": [
        "run", "-i", "--rm",
        "-e", "JUPYTER_URL",
        "-e", "JUPYTER_TOKEN",
        "-e", "ALLOW_IMG_OUTPUT",
        "datalayer/jupyter-mcp-server:latest"
      ],
      "env": {
        "JUPYTER_URL": "http://host.docker.internal:8888",
        "JUPYTER_TOKEN": "MY_TOKEN",
        "ALLOW_IMG_OUTPUT": "true"
      }
    }
  }
}
```

**On Linux:**

```json
{
  "mcpServers": {
    "jupyter": {
      "command": "docker",
      "args": [
        "run", "-i", "--rm",
        "-e", "JUPYTER_URL",
        "-e", "JUPYTER_TOKEN",
        "-e", "ALLOW_IMG_OUTPUT",
        "--network=host",
        "datalayer/jupyter-mcp-server:latest"
      ],
      "env": {
        "JUPYTER_URL": "http://localhost:8888",
        "JUPYTER_TOKEN": "MY_TOKEN",
        "ALLOW_IMG_OUTPUT": "true"
      }
    }
  }
}
```

</details>

> [!TIP]
>
> 1. **Port Configuration**: Ensure the `port` in your Jupyter URLs matches the one used in the `jupyter lab` command. For simplified config, set this in `JUPYTER_URL`.
> 1. **Server Separation**: Use `JUPYTER_URL` when both services are on the same server, or set individual variables for advanced deployments. The different URL variables exist because some deployments separate notebook storage (`DOCUMENT_URL`) from kernel execution (`RUNTIME_URL`).
> 1. **Authentication**: In most cases, document and runtime services use the same authentication token. Use `JUPYTER_TOKEN` for simplified config or set `DOCUMENT_TOKEN` and `RUNTIME_TOKEN` individually for different credentials.
> 1. **Notebook Path**: The `DOCUMENT_ID` parameter specifies the path to the notebook the MCP client default to connect. It should be relative to the directory where JupyterLab was started. If you omit `DOCUMENT_ID`, the MCP client can automatically list all available notebooks on the Jupyter server, allowing you to select one interactively via your prompts.
> 1. **Image Output**: Set `ALLOW_IMG_OUTPUT` to `false` if your LLM does not support mutimodel understanding.

For detailed instructions on configuring various MCP clients—including [Claude Desktop](https://jupyter-mcp-server.datalayer.tech/clients/claude_desktop), [VS Code](https://jupyter-mcp-server.datalayer.tech/clients/vscode), [Cursor](https://jupyter-mcp-server.datalayer.tech/clients/cursor), [Cline](https://jupyter-mcp-server.datalayer.tech/clients/cline), and [Windsurf](https://jupyter-mcp-server.datalayer.tech/clients/windsurf) — see the [Clients documentation](https://jupyter-mcp-server.datalayer.tech/clients).

## ✅ Best Practices

- Interact with LLMs that supports multimodal input (like Gemini 2.5 Pro) to fully utilize advanced multimodal understanding capabilities.
- Use a MCP client that supports returning image data and can parse it (like Cursor, Gemini CLI, etc.), as some clients may not support this feature.
- Break down complex task (like the whole data science workflow) into multiple sub-tasks (like data cleaning, feature engineering, model training, model evaluation, etc.) and execute them step-by-step.
- Provide clearly structured prompts and rules (👉 Visit our [Prompt Templates](prompt/README.md) to get started)
- Provide as much context as possible (like already installed packages, field explanations for existing datasets, current working directory, detailed task requirements, etc.).

## 🤝 Contributing

We welcome contributions of all kinds! Here are some examples:

- 🐛 Bug fixes
- 📝 Improvements to existing features
- 🔧 New feature development
- 📚 Documentation improvements and prompt templates

For detailed instructions on how to get started with development and submit your contributions, please see our [**Contributing Guide**](CONTRIBUTING.md).

### Our Contributors

[![Contributors](https://contrib.rocks/image?repo=datalayer/jupyter-mcp-server)](https://github.com/datalayer/jupyter-mcp-server/graphs/contributors)

## 📚 Resources

Looking for blog posts, videos, or other materials about Jupyter MCP Server?

👉 Visit the [**Resources section**](https://jupyter-mcp-server.datalayer.tech/resources) in our documentation for more!

[![Star History Chart](https://api.star-history.com/svg?repos=datalayer/jupyter-mcp-server&type=Date)](https://star-history.com/#datalayer/jupyter-mcp-server&type=Date)

______________________________________________________________________

<div align="center">

**If this project is helpful to you, please give us a ⭐️**

Made with ❤️ by [Datalayer](https://github.com/datalayer)

</div>

## Hosted deployment

A hosted deployment is available on [Fronteir AI](https://fronteir.ai/mcp/datalayer-jupyter-mcp-server).
