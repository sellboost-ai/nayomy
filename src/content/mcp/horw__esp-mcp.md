---
name: "horw/esp-mcp"
description: "Workflow for fixing build issues in ESP32 series chips using ESP-IDF."
description_tr: "ESP32 serisi çiplerde ESP-IDF kullanarak build sorunlarını gidermek için tasarlanan workflow."
category: "Embedded System"
repo: "horw/esp-mcp"
stars: 148
url: "https://github.com/horw/esp-mcp"
body_length: 5962
language: "Python"
body_tr: |-
  [![MseeP.ai Security Assessment Badge](https://mseep.net/pr/horw-esp-mcp-badge.png)](https://mseep.ai/app/horw-esp-mcp)

  ### Amaç
  Bu MCP'nin amacı:
  - ESP-IDF ve ilgili proje komutlarını tek bir yerde birleştirmek.
  - Yalnızca LLM iletişimi kullanarak başlamayı basitleştirmek.

  ### Projeye Katkıda Bulunma

  Bu MCP'den eksik olan bir komutu bulun ve onun için bir PR açın!

  Bu uygulama konusunda birinin size yardımcı olmasını istiyorsanız, bir issue açın.


  ### Uyarı
  Bu proje şu anda ESP-IDF iş akışları için tasarlanmış bir MCP sunucusunun **Kavram Kanıtı (PoC)** aşamasındadır.

  **Mevcut Yetenekler:**

  **Temel Özellikler:**
  *   `run_esp_idf_install`: `install.sh` aracılığıyla ESP-IDF bağımlılıklarını ve araç zincirini yükleyin.
  *   `create_esp_project`: Yeni bir ESP-IDF projesi oluşturun.
  *   `setup_project_esp_target`: ESP-IDF projeleri için hedef çipi ayarlayın (esp32, esp32c3, esp32s3, vb.).
  *   `build_esp_project`: Artımlı derleme desteğiyle ESP-IDF projelerini derleyin.
  *   `list_esp_serial_ports`: ESP cihazları için kullanılabilir seri portları listeleyin.
  *   `flash_esp_project`: Derlenmiş ürün yazılımını bağlı ESP cihazlarına yükleyin.
  *   `run_pytest`: ESP-IDF projeleri için pytest-embedded desteğiyle pytest testlerini çalıştırın.

  **Ek Özellikler:**
  *   Esnek ESP-IDF yol yönetimi: `idf_path` parametresi aracılığıyla proje başına ESP-IDF sürümlerini destekler.
  *   SDK config yönetimi: derleme yapılandırması için özel `sdkconfig_defaults` dosyalarını destekler (birden fazla dosya noktalı virgülle ayrılarak belirtilebilir).
  *   Performans izleme için derleme süresi takibi.
  *   Yükleme işlemleri için isteğe bağlı port belirtimi.
  *   Derleme günlüklerine dayalı otomatik sorun giderme için deneysel destek içerir.

  **Vizyon & Gelecek Çalışmalar:**
  Uzun vadeli vizyon, bu MCP'yi gömülü cihazlarla etkileşim kurmak için kapsamlı bir araç kitine genişletmek, muhtemelen home assistant platformlarıyla entegre etmek ve ESP-IDF ve ilgili teknolojiler için belgelere erişimi kolaylaştırmaktır.

  Aşağıdaki gibi özellikler hayal ediyoruz:
  *   Daha geniş ESP-IDF komut desteği (örneğin, `monitor`, `menuconfig` etkileşimi mümkünse).
  *   Cihaz yönetimi ve bilgi alınması.
  *   Diğer gömülü geliştirme araçları ve platformlarıyla entegrasyon.

  Fikirleriniz ve katkılarınız hoşgeldiniz! Lütfen bir issue açarak bunları tartışmaktan çekinmeyin.


  ### Kurulum

  İlk olarak, bu MCP deposunu klonlayın:

  ```bash
  git clone git@github.com:horw/esp-mcp.git
  ```

  Ardından, sohbet botunuzda yapılandırın.

  Aşağıdaki JSON snippet'i, bu `esp-mcp` sunucusunu Model Context Protocol (MCP) destekleyen bir sohbet botu veya ajan sistemi içinde nasıl yapılandırabileceğinize dair bir örnektir. Tam yapılandırma adımları ve format, kullandığınız belirli sohbet botu sistemine bağlı olarak değişebilir. MCP sunucularının nasıl entegre edileceğine ilişkin ayrıntılar için sohbet botunuzun belgelerine bakın.

  ```json
  {
      "mcpServers": {
          "esp-run": { // "esp-run" bu sunucu yapılandırmasına atayabileceğiniz keyfi bir addır.
              "command": "<path_to_uv_or_python_executable>",
              "args": [
                  "--directory",
                  "<path_to_cloned_esp-mcp_repository>", // örneğin, /path/to/your/cloned/esp-mcp
                  "run",
                  "main.py" // Python'u doğrudan kullanıyorsanız, bu sadece "main.py" olabilir ve `command` python yorumlayıcınız olurdu
              ],
              "env": {
                  "IDF_PATH": "<path_to_your_esp-idf_directory>" // örneğin, ~/esp/esp-idf veya C:\\Espressif\\frameworks\\esp-idf
              }
          }
      }
  }
  ```

  Yapılandırma hakkında birkaç not:

  *   **`command`**: Eğer `uv` kullanıyorsanız tam `uv` yolunuz, veya Python yorumlayıcınız (örneğin, `/usr/bin/python3` veya `C:\\Python39\\python.exe`) olmalıdır.
  *   **`args`**:
      *   İlk `--directory` argümanı, `esp-mcp` deposunu klonladığınız mutlak yol olmalıdır.
      *   Eğer `uv` kullanıyorsanız, `run main.py` argümanları uygun olur. Python'u doğrudan kullanıyorsanız, `args` listesinde sadece `main.py` gerekebilir ve `command` Python yürütülebilirine işaret etmelidir.
  *   **`IDF_PATH`**: (İsteğe bağlı) Bu ortam değişkeni, ESP-IDF kurulumunuzun kök dizinine işaret edebilir. ESP-IDF, Espressif'in resmi IoT Geliştirme Çerçevesidir. Kurulmadıysa, kurulum talimatları için [resmi ESP-IDF belgelerine](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html) bakın. **Not**: Tüm araçlar, aracı çağırırken manuel olarak belirtilebilen bir `idf_path` parametresini destekler ve ortam değişkenini ayarlamadan farklı projeler için farklı ESP-IDF sürümlerini kullanmanıza olanak tanır. Eğer `idf_path` sağlanmamışsa, araç `IDF_PATH` ortam değişkenini (varsa) kullanır.

  ### Kullanım

  `esp-mcp` sunucusu yapılandırıldıktan ve çalışmaya başladıktan sonra, LLM'niz veya sohbet botunuz bu MCP'de tanımlanan araçları kullanarak bununla etkileşim kurabilir. Örneğin, sohbet botunuzdan şunları isteyebilirsiniz:

  *   "ESP-IDF bağımlılıklarını `/path/to/esp-idf` konumundaki ESP-IDF kurulumu için yükleyin."
  *   "Hedef çipi `/path/to/my/esp-project` konumundaki proje için esp32s3 olarak ayarlayın."
  *   "`esp-mcp` kullanarak `/path/to/my/esp-project` konumundaki projeyi derleyin."
  *   "Projeyi özel sdkconfig varsayılanları ile derleyin: `sdkconfig.defaults;sdkconfig.ci.release`."
  *   "Pytest testlerini `/path/to/my/esp-project` konumundaki proje için esp32c3 hedefleyerek çalıştırın."
  *   "Ürün yazılımını `my_app` içindeki bağlı ESP32 cihazına yükleyin."

  MCP sunucusu daha sonra `main.py` içinde uygulanan araçlara dayalı olarak karşılık gelen ESP-IDF komutlarını (örneğin, `idf.py build`, `idf.py set-target`, `idf.py flash`, `pytest`) yürütecektir.

  Aşağıdaki `result.gif` bir örnek etkileşimi göstermektedir:

  ![Result](https://raw.githubusercontent.com/horw/esp-mcp/HEAD/result.gif)


  ### Örnekler


  1. Derleme ve Yükleme


  ### Star Geçmişi

  [![Star History Chart](https://api.star-history.com/svg?repos=horw/esp-mcp&type=Date)](https://star-history.com/#horw/esp-mcp&Date)
---

[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/horw-esp-mcp-badge.png)](https://mseep.ai/app/horw-esp-mcp)

### Goal
The goal of this MCP is to:
- Consolidate ESP-IDF and related project commands in one place.
- Simplify getting started using only LLM communication.

### How to contribute to the project

Simply find a command that is missing from this MCP and create a PR for it!

If you want someone to help you with this implementation, just open an issue.


### Notice
This project is currently a **Proof of Concept (PoC)** for an MCP server tailored for ESP-IDF workflows.

**Current Capabilities:**

**Core Features:**
*   `run_esp_idf_install`: Install ESP-IDF dependencies and toolchain via `install.sh`.
*   `create_esp_project`: Create a new ESP-IDF project.
*   `setup_project_esp_target`: Set target chip for ESP-IDF projects (esp32, esp32c3, esp32s3, etc.).
*   `build_esp_project`: Build ESP-IDF projects with incremental build support.
*   `list_esp_serial_ports`: List available serial ports for ESP devices.
*   `flash_esp_project`: Flash built firmware to connected ESP devices.
*   `run_pytest`: Run pytest tests with pytest-embedded support for ESP-IDF projects.

**Additional Features:**
*   Flexible ESP-IDF path management: supports per-project ESP-IDF versions via `idf_path` parameter.
*   SDK config management: supports custom `sdkconfig_defaults` files for build configuration (multiple files can be specified separated by semicolons).
*   Build time tracking for performance monitoring.
*   Optional port specification for flashing operations.
*   Includes experimental support for automatic issue fixing based on build logs.

**Vision & Future Work:**
The long-term vision is to expand this MCP into a comprehensive toolkit for interacting with embedded devices, potentially integrating with home assistant platforms, and streamlining documentation access for ESP-IDF and related technologies.

We envision features such as:
*   Broader ESP-IDF command support (e.g., `monitor`, `menuconfig` interaction if feasible).
*   Device management and information retrieval.
*   Integration with other embedded development tools and platforms.

Your ideas and contributions are welcome! Please feel free to discuss them by opening an issue.


### Install

First, clone this MCP repository:

```bash
git clone git@github.com:horw/esp-mcp.git
```

Then, configure it in your chatbot.

The JSON snippet below is an example of how you might configure this `esp-mcp` server within a chatbot or an agent system that supports the Model Context Protocol (MCP). The exact configuration steps and format may vary depending on the specific chatbot system you are using. Refer to your chatbot's documentation for details on how to integrate MCP servers.

```json
{
    "mcpServers": {
        "esp-run": { // "esp-run" is an arbitrary name you can assign to this server configuration.
            "command": "<path_to_uv_or_python_executable>",
            "args": [
                "--directory",
                "<path_to_cloned_esp-mcp_repository>", // e.g., /path/to/your/cloned/esp-mcp
                "run",
                "main.py" // If using python directly, this might be just "main.py" and `command` would be your python interpreter
            ],
            "env": {
                "IDF_PATH": "<path_to_your_esp-idf_directory>" // e.g., ~/esp/esp-idf or C:\\Espressif\\frameworks\\esp-idf
            }
        }
    }
}
```

A few notes on the configuration:

*   **`command`**: This should be the full path to your `uv` executable if you are using it, or your Python interpreter (e.g., `/usr/bin/python3` or `C:\\Python39\\python.exe`) if you plan to run `main.py` directly.
*   **`args`**:
    *   The first argument to `--directory` should be the absolute path to where you cloned the `esp-mcp` repository.
    *   If you're using `uv`, the arguments `run main.py` are appropriate. If you're using Python directly, you might only need `main.py` in the `args` list, and ensure your `command` points to the Python executable.
*   **`IDF_PATH`**: (Optional) This environment variable can point to the root directory of your ESP-IDF installation. ESP-IDF is Espressif's official IoT Development Framework. If you haven't installed it, please refer to the [official ESP-IDF documentation](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html) for installation instructions. **Note**: All tools support an `idf_path` parameter that can be manually specified when calling the tool, allowing you to use different ESP-IDF versions for different projects without setting the environment variable. If `idf_path` is not provided, the tool will use the `IDF_PATH` environment variable if available.

### Usage

Once the `esp-mcp` server is configured and running, your LLM or chatbot can interact with it using the tools defined in this MCP. For example, you could ask your chatbot to:

*   "Install ESP-IDF dependencies for the ESP-IDF installation at `/path/to/esp-idf`."
*   "Set the target chip to esp32s3 for the project in `/path/to/my/esp-project`."
*   "Build the project located at `/path/to/my/esp-project` using the `esp-mcp`."
*   "Build the project with custom sdkconfig defaults: `sdkconfig.defaults;sdkconfig.ci.release`."
*   "Run pytest tests for the project at `/path/to/my/esp-project` targeting esp32c3."
*   "Flash the firmware to my connected ESP32 device for the project in `my_app`."

The MCP server will then execute the corresponding ESP-IDF commands (like `idf.py build`, `idf.py set-target`, `idf.py flash`, `pytest`) based on the tools implemented in `main.py`.

The `result.gif` below shows an example interaction:

![Result](https://raw.githubusercontent.com/horw/esp-mcp/HEAD/result.gif)


### Examples


1. Build and Flash


### Star History

[![Star History Chart](https://api.star-history.com/svg?repos=horw/esp-mcp&type=Date)](https://star-history.com/#horw/esp-mcp&Date)
