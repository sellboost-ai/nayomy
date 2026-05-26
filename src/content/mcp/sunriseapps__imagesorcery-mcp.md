---
name: "sunriseapps/imagesorcery-mcp"
description: "ComputerVision-based sorcery of image recognition and editing tools for AI assistants."
description_tr: "Yapay zeka asistanları için görüntü tanıma ve düzenleme araçlarına dayalı ComputerVision sihri."
category: "Multimedia Process"
repo: "sunriseapps/imagesorcery-mcp"
stars: 313
url: "https://github.com/sunriseapps/imagesorcery-mcp"
body_length: 26439
license: "MIT"
language: "Python"
homepage: "https://imagesorcery.net"
body_tr: |-
  # 🪄 ImageSorcery MCP
  **ComputerVision tabanlı 🪄 yerel görüntü tanıma ve düzenleme araçlarının AI asistanları için sihir**

  Resmi website: [imagesorcery.net](https://imagesorcery.net?utm_source=readme)

  [![License](https://img.shields.io/badge/License-MIT-green)](https://opensource.org/licenses/MIT) [![MCP](https://img.shields.io/badge/Protocol-MCP-lightgrey)](https://github.com/microsoft/mcp)
  [![Claude](https://img.shields.io/badge/Works_with-Claude-orange)](https://claude.ai) [![Cursor](https://img.shields.io/badge/Works_with-Cursor-white)](https://cursor.so) [![Cline](https://img.shields.io/badge/Works_with-Cline-purple)](https://github.com/ClineLabs/cline)
  [![Verified on MseeP](https://mseep.ai/badge.svg)](https://mseep.ai/app/2620351a-15b1-4840-a93a-cbdbd23a6944) [![PyPI Downloads](https://static.pepy.tech/badge/imagesorcery-mcp)](https://pepy.tech/projects/imagesorcery-mcp)

  <a href="https://glama.ai/mcp/servers/@sunriseapps/imagesorcery-mcp">
    
  </a>

  ## ✅ ImageSorcery MCP ile

  `🪄 ImageSorcery` AI asistanlarını güçlü görüntü işleme yetenekleriyle donatır:

  - ✅ Görüntüleri hassasiyetle kırpın, yeniden boyutlandırın ve döndürün
  - ✅ Arka planı kaldırın
  - ✅ Görüntülere metin ve şekiller çizin
  - ✅ Logo ve filigran ekleyin
  - ✅ Son teknoloji modellerini kullanarak nesneleri algılayın
  - ✅ OCR ile görüntülerden metin çıkarın
  - ✅ Nesne algılama, OCR ve daha fazlası için geniş bir yelpazedeki önceden eğitilmiş modelleri kullanın
  - ✅ Bütün bunları **yerel olarak** yapın, görüntülerinizi hiçbir sunucuya göndermeden

  Yapay zekanızdan görüntü görevleriyle yardım etmesini istemeniz yeterli:

  > "copy photos with pets from folder `photos` to folder `pets`"
  ![Copying pets](https://i.imgur.com/wsaDWbf.gif)

  > "Find a cat at the photo.jpg and crop the image in a half in height and width to make the cat be centered"
  ![Centerizing cat](https://i.imgur.com/tD0O3l6.gif)
  😉 _**İpucu:** Dosyalarınıza tam yol kullanın"._

  > "Enumerate form fields on this `form.jpg` with `foduucom/web-form-ui-field-detection` model and fill the `form.md` with a list of described fields"
  ![Numerate form fields](https://i.imgur.com/1SNGfaP.gif)
  😉 _**İpucu:** Modeli ve güven düzeyini belirtin"._

  😉 _**İpucu:** Doğru aracı kullanacağından emin olmak için "use imagesorcery" ekleyin"._

  Aracınız hedefi başarmak için aşağıda listelenen birden fazla aracı birleştirecektir.

  ## 🛠️ Kullanılabilir Araçlar

  | Araç | Açıklama | Örnek İstem |
  |------|----------|-----------|
  | `blur` | OpenCV kullanarak bir görüntünün belirtilen dikdörtgen veya çokgen alanlarını bulanıklaştırır. Sağlanan alanları ters çevirebilir, örneğin arka planı bulanıklaştırmak için. | "Blur the area from (150, 100) to (250, 200) with a blur strength of 21 in my image 'test_image.png' and save it as 'output.png'" |
  | `change_color` | Bir görüntünün renk paletini değiştirir | "Convert my image 'test_image.png' to sepia and save it as 'output.png'" |
  | `config` | ImageSorcery MCP konfigürasyon ayarlarını görüntüleyin ve güncelleyin | "Show me the current configuration" veya "Set the default detection confidence to 0.8" |
  | `crop` | OpenCV'nin NumPy dilimleme yaklaşımını kullanarak bir görüntüyü kırpar | "Crop my image 'input.png' from coordinates (10,10) to (200,200) and save it as 'cropped.png'" |
  | `detect` | Ultralytics'ten modeller kullanarak bir görüntüdeki nesneleri algılar. Segmentasyon maskeleri (PNG dosyaları olarak) veya poligonlar döndürebilir. | "Detect objects in my image 'photo.jpg' with a confidence threshold of 0.4" |
  | `draw_arrows` | OpenCV kullanarak görüntü üzerine oklar çizer | "Draw a red arrow from (50,50) to (150,100) on my image 'photo.jpg'" |
  | `draw_circles` | OpenCV kullanarak görüntü üzerine daireler çizer | "Draw a red circle with center (100,100) and radius 50 on my image 'photo.jpg'" |
  | `draw_lines` | OpenCV kullanarak görüntü üzerine çizgiler çizer | "Draw a red line from (50,50) to (150,100) on my image 'photo.jpg'" |
  | `draw_rectangles` | OpenCV kullanarak görüntü üzerine dikdörtgenler çizer | "Draw a red rectangle from (50,50) to (150,100) and a filled blue rectangle from (200,150) to (300,250) on my image 'photo.jpg'" |
  | `draw_texts` | OpenCV kullanarak görüntü üzerine metin çizer | "Add text 'Hello World' at position (50,50) and 'Copyright 2023' at the bottom right corner of my image 'photo.jpg'" |
  | `fill` | Bir görüntünün belirtilen dikdörtgen, çokgen veya maske tabanlı alanlarını bir renkle ve opaklıkla doldurur veya şeffaf kılar. Sağlanan alanları ters çevirebilir, örneğin arka planı kaldırmak için. | "Fill the area from (150, 100) to (250, 200) with semi-transparent red in my image 'test_image.png'" |
  | `find` | Bir metin açıklamasına dayanarak bir görüntüdeki nesneleri bulur. Segmentasyon maskeleri (PNG dosyaları olarak) veya poligonlar döndürebilir. | "Find all dogs in my image 'photo.jpg' with a confidence threshold of 0.4" |
  | `get_metainfo` | Bir görüntü dosyasının meta verilerini alır | "Get metadata information about my image 'photo.jpg'" |
  | `ocr` | EasyOCR kullanarak bir görüntüde Optik Karakter Tanıma (OCR) gerçekleştirir | "Extract text from my image 'document.jpg' using OCR with English language" |
  | `overlay` | Bir görüntüyü diğerinin üzerine yerleştirir, saydamlığı işler | "Overlay 'logo.png' on top of 'background.jpg' at position (10, 10)" |
  | `resize` | OpenCV kullanarak bir görüntüyü yeniden boyutlandırır | "Resize my image 'photo.jpg' to 800x600 pixels and save it as 'resized_photo.jpg'" |
  | `rotate` | imutils.rotate_bound fonksiyonunu kullanarak bir görüntüyü döndürür | "Rotate my image 'photo.jpg' by 45 degrees and save it as 'rotated_photo.jpg'" |

  😉 _**İpucu:** Her araç için ayrıntılı bilgi ve kullanım talimatları `/src/imagesorcery_mcp/tools/README.md` dosyasında bulunabilir._

  ## 📚 Kullanılabilir Kaynaklar

  | Kaynak URI | Açıklama | Örnek İstem |
  |-----------|----------|-----------|
  | `models://list` | Modeller dizinindeki tüm kullanılabilir modelleri listeler | "Which models are available in ImageSorcery?" |

  😉 _**İpucu:** Her kaynak için ayrıntılı bilgi ve kullanım talimatları `/src/imagesorcery_mcp/resources/README.md` dosyasında bulunabilir._

  ## 💬 Kullanılabilir İstemler

  | İstem Adı | Açıklama | Örnek Kullanım |
  |-----------|----------|----------------|
  | `remove-background` | AI'ı nesne algılama ve maskeleme araçlarını kullanarak kapsamlı bir arka plan kaldırma iş akışı yönlendirir | "Use the remove-background prompt to remove the background from my photo 'portrait.jpg', keeping only the person" |

  😉 _**İpucu:** Her istem için ayrıntılı bilgi ve kullanım talimatları `/src/imagesorcery_mcp/prompts/README.md` dosyasında bulunabilir._

  ## 🚀 Başlangıç

  ### Gereksinimler

  - `Python 3.10` veya üstü
  - `pipx` (önerilir) - kolay kurulum ve sanal ortam yönetimi için
  - `ffmpeg`, `libsm6`, `libxext6`, `libgl1-mesa-glx` - OpenCV için gerekli sistem kütüphaneleri
  - `Claude.app`, `Cline` veya başka bir MCP istemcisi

  <details>
  <summary>Sanal ortamlar (örneğin Docker)</summary>

  Bu bağımlılıklar genellikle OpenCV kurulumunun bir parçasıdır ve ayrı kurulum gerektirmez. Ancak Docker gibi bazı sanal ortamlarda eksik olabilirler.

  **Ubuntu/Debian sistemleri için:**
  ```bash
  sudo apt-get update && sudo apt-get install -y ffmpeg libsm6 libxext6 libgl1-mesa-glx
  ```

  **Docker konteynerları için:**
  Dockerfile'ınıza bu satırı ekleyin:
  ```dockerfile
  RUN apt-get update && apt-get install -y ffmpeg libsm6 libxext6 libgl1-mesa-glx
  ```
  </details>

  ### Kurulum

  ![ImageSorcery Demo](https://i.imgur.com/pRfTlHV.gif)
  <details>
  <summary>Cline için LLM-INSTALL.md'yi kopyala-yapıştır yapın</summary>

  ```md
  1.  Buna ait aracı varsa MCP dokümantasyonunu yükleyin. Size *MCP-yapılandırma dosyası* yolunu ve diğer gerekli talimatları verecektir.
  2.  `pipx install imagesorcery-mcp` komutunu çalıştırın
  3.  `imagesorcery-mcp --post-install` komutunu çalıştırın
  4.  *MCP-yapılandırma dosyasını* oluşturun veya değiştirin.
  5.  `imagesorcery-mcp` sunucu yapılandırmasını *MCP-yapılandırma dosyasındaki* `mcpServers` nesnesine ekleyin
      `"imagesorcery-mcp": {"command": "imagesorcery-mcp","timeout": 100}`
  6.  Kullanıcıdan izin isteyin ve `config(action="set", key="telemetry.enabled", value=True, persist=True)` çağırarak telemetriyi etkinleştirin.
  7.  Kurulum ve yapılandırmanın tamamlandığını belirterek tamamlamaya çalışın.
  ```
  </details>

  #### Yöntem 1: pipx Kullanma (Önerilir)

  `pipx` ImageSorcery MCP'yi kurmanın önerilen yoludur çünkü sanal ortam oluşturmayı ve yönetimini otomatik olarak işler, kurulum sürecini çok daha basit hale getirir.

  <details>
  <summary>0.  pipx Yükleyin (henüz yüklü değilse):</summary>

  0.  **pipx Yükleyin (henüz yüklü değilse):**
      ```bash
      # macOS'ta Homebrew ile:
      brew install pipx

      # Ubuntu/Debian'da:
      sudo apt update && sudo apt install pipx

      # Diğer sistemlerde pip ile:
      pip install --user pipx
      pipx ensurepath
      ```
  </details>

  1.  **pipx ile ImageSorcery MCP'yi yükleyin:**
      ```bash
      pipx install imagesorcery-mcp
      ```

  2.  **Kurulum sonrası betiği çalıştırın:**
      Bu adım çok önemlidir. Gerekli modelleri indirir ve `clip` Python paketini GitHub'dan yüklemeyi dener.
      ```bash
      imagesorcery-mcp --post-install
      ```

  #### Yöntem 2: Manuel Sanal Ortam (Plan B)

  <details>
  <summary>Eğer pipx sisteminiz için çalışmazsa, el ile sanal ortam oluşturabilirsiniz</summary>

  Özellikle `clip` paketinin (kurulum sonrası betiği tarafından yüklenen) güvenilir kurulumu için, `uv venv` yerine Python'un yerleşik `venv` modülünü kullanmanız **şiddetle önerilir**.

  1.  **Sanal ortam oluşturun ve etkinleştirin:**
      ```bash
      python -m venv imagesorcery-mcp
      source imagesorcery-mcp/bin/activate  # Linux/macOS için
      # source imagesorcery-mcp\Scripts\activate    # Windows için
      ```

  2.  **Paketi etkinleştirilen sanal ortama yükleyin:**
      `pip` veya `uv pip` kullanabilirsiniz.
      ```bash
      pip install imagesorcery-mcp
      # VEYA, venv'ye yükleme için uv'yi tercih ederseniz:
      # uv pip install imagesorcery-mcp
      ```

  3.  **Kurulum sonrası betiği çalıştırın:**
      Bu adım çok önemlidir. Gerekli modelleri indirir ve `clip` Python paketini GitHub'dan etkin sanal ortama yüklemeyi dener.
      ```bash
      imagesorcery-mcp --post-install
      ```

  **Not:** Bu yöntemi kullanırken, MCP istemcisi yapılandırmasında yürütülebilir dosyaya tam yol sağlamanız gerekecektir (örneğin, `/full/path/to/venv/bin/imagesorcery-mcp`).
  </details>

  #### Ek Notlar
  <details>
  <summary>Kurulum sonrası betiği ne yapar?</summary>

  `imagesorcery-mcp --post-install` betiği aşağıdaki eylemleri gerçekleştirir:

  - **Geçerli dizinde `config.toml` yapılandırma dosyası oluşturur** ve kullanıcıların varsayılan araç parametrelerini özelleştirmesine izin verir.
  - `models` dizini oluşturur (genellikle sanal ortamınızın site-packages dizini içinde veya küresel olarak yüklü ise kullanıcıya özgü bir konum) ve önceden eğitilmiş modelleri depolamak için.
  - İlk `models/model_descriptions.json` dosyasını orada oluşturur.
  - `detect` aracı tarafından gerekli olan varsayılan YOLO modellerini (`yoloe-11l-seg-pf.pt`, `yoloe-11s-seg-pf.pt`, `yoloe-11l-seg.pt`, `yoloe-11s-seg.pt`) bu `models` dizinine indirir.
  - **`clip` Python paketini** Ultralytics'in GitHub deposundan doğrudan etkin Python ortamına yüklemeyi dener. Bu, `find` aracındaki metin istemi işlevselliği için gereklidir.
  - `find` aracı tarafından gerekli CLIP model dosyasını `models` dizinine indirir.

  Bu işlemi istediğiniz zaman çalıştırarak varsayılan modelleri geri yükleyebilir ve `clip` yüklemesini yeniden deneyebilirsiniz.
  </details>

  <details>
  <summary>`uv` kullanıcıları için Önemli Notlar (<code>uv venv</code> ve <code>uvx</code>)</summary>

  -   **`uv venv` ile sanal ortam oluşturma:**
      Testlere göre, `uv venv` ile oluşturulan sanal ortamlar `imagesorcery-mcp --post-install` betiğinin `clip` paketini GitHub'dan otomatik olarak yüklemesine izin veren şekilde `pip` içermeyebilir (kurulum adımı sırasında "No module named pip" hatası ile sonuçlanabilir).
      **`uv venv` kullanmayı seçerseniz:**
      1.  `uv venv` oluşturun ve etkinleştirin.
      2.  `imagesorcery-mcp` yükleyin: `uv pip install imagesorcery-mcp`.
      3.  `clip` paketini etkin `uv venv`'ye el ile yükleyin:
          ```bash
          uv pip install git+https://github.com/ultralytics/CLIP.git
          ```
      3.  `imagesorcery-mcp --post-install` komutunu çalıştırın. Bu modelleri indirecek ancak `clip` Python paketini yüklemeyi başaramayabilir.
      Kurulum sonrası betiği aracılığıyla otomatik `clip` yüklemesi için `python -m venv` (yukarıdaki 1. adımda açıklandığı gibi) sanal ortam oluşturmanın önerilen yöntemidir.

  -   **`uvx imagesorcery-mcp --post-install` kullanma:**
      Kurulum sonrası betiğini doğrudan `uvx` ile çalıştırmak (örneğin, `uvx imagesorcery-mcp --post-install`) muhtemelen `clip` Python paketini yüklemeyi başaramayacaktır. Bunun nedeni, `uvx` tarafından oluşturulan geçici ortamın tipik olarak betiğin kullanabileceği şekilde `pip`'e sahip olmamasıdır. Modeller indirilecek ancak `clip` paketi bu komutla yüklenmeyecektir.
      `uvx` kullanarak ana `imagesorcery-mcp` sunucusunu çalıştırmayı düşünüyorsanız ve `clip` işlevselliğine ihtiyaç duyuyorsanız, `clip` paketinin `uvx`'in bulabileceği erişilebilir bir Python ortamına yüklü olmasını sağlamanız veya `imagesorcery-mcp` kurulumunu `python -m venv` ile oluşturulan kalıcı bir ortama yüklemeyi düşünmelisiniz.
  </details>

  ## ⚙️ MCP istemcisini yapılandırın

  Bu ayarları MCP istemcinize ekleyin.

  **pipx kurulumu için (önerilir):**
  ```json
  "mcpServers": {
      "imagesorcery-mcp": {
        "command": "imagesorcery-mcp",
        "transportType": "stdio",
        "autoApprove": ["blur", "change_color", "config", "crop", "detect", "draw_arrows", "draw_circles", "draw_lines", "draw_rectangles", "draw_texts", "fill", "find", "get_metainfo", "ocr", "overlay", "resize", "rotate"],
        "timeout": 100
      }
  }
  ```

  **Manuel venv kurulumu için:**
  ```json
  "mcpServers": {
      "imagesorcery-mcp": {
        "command": "/full/path/to/venv/bin/imagesorcery-mcp",
        "transportType": "stdio",
        "autoApprove": ["blur", "change_color", "config", "crop", "detect", "draw_arrows", "draw_circles", "draw_lines", "draw_rectangles", "draw_texts", "fill", "find", "get_metainfo", "ocr", "overlay", "resize", "rotate"],
        "timeout": 100
      }
  }
  ```
  <details>
  <summary>Sunucuyu HTTP modunda kullanıyorsanız, istemcinizi HTTP endpoint'ine bağlanacak şekilde yapılandırın:</summary>

  ```json
  "mcpServers": {
      "imagesorcery-mcp": {
        "url": "http://127.0.0.1:8000/mcp", // Belirtilmişse özel ana bilgisayar, bağlantı noktası ve yolu kullanın
        "transportType": "http",
        "autoApprove": ["blur", "change_color", "config", "crop", "detect", "draw_arrows", "draw_circles", "draw_lines", "draw_rectangles", "draw_texts", "fill", "find", "get_metainfo", "ocr", "overlay", "resize", "rotate"],
        "timeout": 100
      }
  }
  ```
  </details>

  <details>
  <summary>Windows için</summary>

  **pipx kurulumu için (önerilir):**
  ```json
  "mcpServers": {
      "imagesorcery-mcp": {
        "command": "imagesorcery-mcp.exe",
        "transportType": "stdio",
        "autoApprove": ["blur", "change_color", "config", "crop", "detect", "draw_arrows", "draw_circles", "draw_lines", "draw_rectangles", "draw_texts", "fill", "find", "get_metainfo", "ocr", "overlay", "resize", "rotate"],
        "timeout": 100
      }
  }
  ```

  **Manuel venv kurulumu için:**
  ```json
  "mcpServers": {
      "imagesorcery-mcp": {
        "command": "C:\\full\\path\\to\\venv\\Scripts\\imagesorcery-mcp.exe",
        "transportType": "stdio",
        "autoApprove": ["blur", "change_color", "config", "crop", "detect", "draw_arrows", "draw_circles", "draw_lines", "draw_rectangles", "draw_texts", "fill", "find", "get_metainfo", "ocr", "overlay", "resize", "rotate"],
        "timeout": 100
      }
  }
  ```
  </details>

  ## 📦 Ek Modeller

  Bazı araçlar `models` dizininde kullanılabilir olması gereken belirli modeller gerektirir:

  ```bash
  # detect aracı için modelleri indirin
  download-yolo-models --ultralytics yoloe-11l-seg
  download-yolo-models --huggingface ultralytics/yolov8:yolov8m.pt
  ```

  <details>
  <summary>Model Açıklamaları Hakkında</summary>

  Modelleri indirirken, betik otomatik olarak `models/model_descriptions.json` dosyasını günceller:

  - Ultralytics modelleri için: Açıklamalar `src/imagesorcery_mcp/scripts/create_model_descriptions.py`'de önceden tanımlanmıştır ve her modelin amacı, boyutu ve özellikleri hakkında ayrıntılı bilgiler içerir.

  - Hugging Face modelleri için: Açıklamalar otomatik olarak Hugging Face Hub'daki model kartından çıkarılır. Betik, model dizinindeki model adını veya açıklamanın ilk satırını kullanmaya çalışır.

  Modelleri indirdikten sonra, `models/model_descriptions.json`'deki açıklamaları kontrol etmeniz ve modellerin yetenekleri ve kullanım durumları hakkında daha doğru veya ayrıntılı bilgi sağlamak için bunları ayarlamanız önerilir.
  </details>

  ### Sunucuyu Çalıştırma

  ImageSorcery MCP sunucusu farklı modlarda çalıştırılabilir:
  - `STDIO` - varsayılan
  - `Streamable HTTP` - web tabanlı dağıtımlar için
  - `Server-Sent Events (SSE)` - SSE'ye güvenen web tabanlı dağıtımlar için

  <details>
  <summary>Farklı modlar hakkında:</summary>

  1. **STDIO Modu (Varsayılan)** - Yerel MCP istemcileri için standart moddur:
     ```bash
     imagesorcery-mcp
     ```

  2. **Streamable HTTP Modu** - Web tabanlı dağıtımlar için:
     ```bash
     imagesorcery-mcp --transport=streamable-http
     ```
     
     Özel ana bilgisayar, bağlantı noktası ve yol ile:
     ```bash
     imagesorcery-mcp --transport=streamable-http --host=0.0.0.0 --port=4200 --path=/custom-path
     ```

  Kullanılabilir taşıma seçenekleri:
  - `--transport`: "stdio" (varsayılan), "streamable-http" veya "sse" arasında seçim yapın
  - `--host`: HTTP tabanlı taşımalar için ana bilgisayar belirtin (varsayılan: 127.0.0.1)
  - `--port`: HTTP tabanlı taşımalar için bağlantı noktası belirtin (varsayılan: 8000)
  - `--path`: HTTP tabanlı taşımalar için endpoint yolu belirtin (varsayılan: /mcp)
  </details>

  ## 🔐 Dosya Erişim Kısıtlamaları

  Varsayılan olarak, ImageSorcery MCP dosya yollarını kısıtlamaz. Araçları belirli dizinlerle sınırlamak için `IMAGESORCERY_AVAILABLE_PATHS` öğesini bir veya daha fazla izin verilen dizine ayarlayın.

  Platform yol listesi ayırıcısını kullanın (Linux/macOS'ta `:`, Windows'ta `;`). Virgülle ayrılan değerler de kabul edilir.

  ```bash
  IMAGESORCERY_AVAILABLE_PATHS="/home/user/images:/home/user/output" imagesorcery-mcp
  ```

  Bu değişken ayarlandığında, `path` adlı veya `_path` ile biten tüm araç argümanları izin verilen dizinlerden birinin içinde çözülmelidir. Göreceli yollar, `..` ve `~` karşılaştırmadan önce normalleştirilir. Sembolik bağlantılar çözümlenmez, bu nedenle izin verilen dizinler içine yerleştirilen bağlantılar erişilebilir kalır.

  ## 🔒 Gizlilik & Telemetri

  Gizliliğinize saygı duyuyoruz. ImageSorcery MCP yerel olarak çalışacak şekilde tasarlanmış ve görüntüleriniz ile verileriniz makinenizde kalacaktır.

  Hangi özelliklerin en popüler olduğunu anlamamıza ve hataları daha hızlı düzeltmemize yardımcı olmak için opsiyonel, anonim telemetri ekledik.

  -   **Varsayılan olarak devre dışıdır.** Etkinleştirmek için açıkça katılmanız gerekir.
  -   **Topladığımız veriler:** Anonim kullanım verileri; kullanılan özellikler (örneğin, `crop`, `detect`), uygulama sürümü, işletim sistemi türü (örneğin, 'linux', 'win32') ve araç hataları.
  -   **Toplamadığımız veriler:** Herhangi bir kişisel veya hassas bilgi toplamıyoruz. Buna görüntü verileri, dosya yolları, IP adresleri veya diğer kişisel kimlik bilgileri dahildir.
  -   **Etkinleştirme/Devre Dışı Bırakma:** `config.toml` dosyanızın `[telemetry]` bölümünde `enabled = true` veya `enabled = false` ayarını yaparak telemetriyi kontrol edebilirsiniz.

  ## ⚙️ Sunucuyu Yapılandırma

  Sunucu, geçerli dizinde `config.toml` dosyası kullanılarak yapılandırılabilir. Dosya, varsayılan değerlerle kurulum sırasında otomatik olarak oluşturulur. Bu dosyada varsayılan araç parametrelerini özelleştirebilirsiniz.
---

# 🪄 ImageSorcery MCP
**ComputerVision-based 🪄 sorcery of local image recognition and editing tools for AI assistants**

Official website: [imagesorcery.net](https://imagesorcery.net?utm_source=readme)

[![License](https://img.shields.io/badge/License-MIT-green)](https://opensource.org/licenses/MIT) [![MCP](https://img.shields.io/badge/Protocol-MCP-lightgrey)](https://github.com/microsoft/mcp)
[![Claude](https://img.shields.io/badge/Works_with-Claude-orange)](https://claude.ai) [![Cursor](https://img.shields.io/badge/Works_with-Cursor-white)](https://cursor.so) [![Cline](https://img.shields.io/badge/Works_with-Cline-purple)](https://github.com/ClineLabs/cline)
[![Verified on MseeP](https://mseep.ai/badge.svg)](https://mseep.ai/app/2620351a-15b1-4840-a93a-cbdbd23a6944) [![PyPI Downloads](https://static.pepy.tech/badge/imagesorcery-mcp)](https://pepy.tech/projects/imagesorcery-mcp)

<a href="https://glama.ai/mcp/servers/@sunriseapps/imagesorcery-mcp">
  
</a>

## ✅ With ImageSorcery MCP

`🪄 ImageSorcery` empowers AI assistants with powerful image processing capabilities:

- ✅ Crop, resize, and rotate images with precision
- ✅ Remove background
- ✅ Draw text and shapes on images
- ✅ Add logos and watermarks
- ✅ Detect objects using state-of-the-art models
- ✅ Extract text from images with OCR
- ✅ Use a wide range of pre-trained models for object detection, OCR, and more
- ✅ Do all of this **locally**, without sending your images to any servers

Just ask your AI to help with image tasks:

> "copy photos with pets from folder `photos` to folder `pets`"
![Copying pets](https://i.imgur.com/wsaDWbf.gif)

> "Find a cat at the photo.jpg and crop the image in a half in height and width to make the cat be centered"
![Centerizing cat](https://i.imgur.com/tD0O3l6.gif)
😉 _**Hint:** Use full path to your files"._

> "Enumerate form fields on this `form.jpg` with `foduucom/web-form-ui-field-detection` model and fill the `form.md` with a list of described fields"
![Numerate form fields](https://i.imgur.com/1SNGfaP.gif)
😉 _**Hint:** Specify the model and the confidence"._

😉 _**Hint:** Add "use imagesorcery" to make sure it will use the proper tool"._

Your tool will combine multiple tools listed below to achieve your goal.

## 🛠️ Available Tools

| Tool | Description | Example Prompt |
|------|-------------|----------------|
| `blur` | Blurs specified rectangular or polygonal areas of an image using OpenCV. Can also invert the provided areas e.g. to blur background. | "Blur the area from (150, 100) to (250, 200) with a blur strength of 21 in my image 'test_image.png' and save it as 'output.png'" |
| `change_color` | Changes the color palette of an image | "Convert my image 'test_image.png' to sepia and save it as 'output.png'" |
| `config` | View and update ImageSorcery MCP configuration settings | "Show me the current configuration" or "Set the default detection confidence to 0.8" |
| `crop` | Crops an image using OpenCV's NumPy slicing approach | "Crop my image 'input.png' from coordinates (10,10) to (200,200) and save it as 'cropped.png'" |
| `detect` | Detects objects in an image using models from Ultralytics. Can return segmentation masks (as PNG files) or polygons. | "Detect objects in my image 'photo.jpg' with a confidence threshold of 0.4" |
| `draw_arrows` | Draws arrows on an image using OpenCV | "Draw a red arrow from (50,50) to (150,100) on my image 'photo.jpg'" |
| `draw_circles` | Draws circles on an image using OpenCV | "Draw a red circle with center (100,100) and radius 50 on my image 'photo.jpg'" |
| `draw_lines` | Draws lines on an image using OpenCV | "Draw a red line from (50,50) to (150,100) on my image 'photo.jpg'" |
| `draw_rectangles` | Draws rectangles on an image using OpenCV | "Draw a red rectangle from (50,50) to (150,100) and a filled blue rectangle from (200,150) to (300,250) on my image 'photo.jpg'" |
| `draw_texts` | Draws text on an image using OpenCV | "Add text 'Hello World' at position (50,50) and 'Copyright 2023' at the bottom right corner of my image 'photo.jpg'" |
| `fill` | Fills specified rectangular, polygonal, or mask-based areas of an image with a color and opacity, or makes them transparent. Can also invert the provided areas e.g. to remove background. | "Fill the area from (150, 100) to (250, 200) with semi-transparent red in my image 'test_image.png'" |
| `find` | Finds objects in an image based on a text description. Can return segmentation masks (as PNG files) or polygons. | "Find all dogs in my image 'photo.jpg' with a confidence threshold of 0.4" |
| `get_metainfo` | Gets metadata information about an image file | "Get metadata information about my image 'photo.jpg'" |
| `ocr` | Performs Optical Character Recognition (OCR) on an image using EasyOCR | "Extract text from my image 'document.jpg' using OCR with English language" |
| `overlay` | Overlays one image on top of another, handling transparency | "Overlay 'logo.png' on top of 'background.jpg' at position (10, 10)" |
| `resize` | Resizes an image using OpenCV | "Resize my image 'photo.jpg' to 800x600 pixels and save it as 'resized_photo.jpg'" |
| `rotate` | Rotates an image using imutils.rotate_bound function | "Rotate my image 'photo.jpg' by 45 degrees and save it as 'rotated_photo.jpg'" |

😉 _**Hint:** detailed information and usage instructions for each tool can be found in the tool's `/src/imagesorcery_mcp/tools/README.md`._

## 📚 Available Resources

| Resource URI | Description | Example Prompt |
|--------------|-------------|----------------|
| `models://list` | Lists all available models in the models directory | "Which models are available in ImageSorcery?" |

😉 _**Hint:** detailed information and usage instructions for each resource can be found in the resource's `/src/imagesorcery_mcp/resources/README.md`._

## 💬 Available Prompts

| Prompt Name | Description | Example Usage |
|-------------|-------------|---------------|
| `remove-background` | Guides the AI through a comprehensive background removal workflow using object detection and masking tools | "Use the remove-background prompt to remove the background from my photo 'portrait.jpg', keeping only the person" |

😉 _**Hint:** detailed information and usage instructions for each prompt can be found in the prompt's `/src/imagesorcery_mcp/prompts/README.md`._

## 🚀 Getting Started

### Requirements

- `Python 3.10` or higher
- `pipx` (recommended) - for easy installation and virtual environment management
- `ffmpeg`, `libsm6`, `libxext6`, `libgl1-mesa-glx` - system libraries required by OpenCV
- `Claude.app`, `Cline`, or another MCP client

<details>
<summary>Virtual environments (e.g. Docker)</summary>

These dependencies are typically included with OpenCV installation and don't require separate installation. But they might be missing in some virtual environments like Docker.

**For Ubuntu/Debian systems:**
```bash
sudo apt-get update && sudo apt-get install -y ffmpeg libsm6 libxext6 libgl1-mesa-glx
```

**For Docker containers:**
Add this line to your Dockerfile:
```dockerfile
RUN apt-get update && apt-get install -y ffmpeg libsm6 libxext6 libgl1-mesa-glx
```
</details>

### Installation

![ImageSorcery Demo](https://i.imgur.com/pRfTlHV.gif)
<details>
<summary>For Cline just copy-paste LLM-INSTALL.md</summary>

```md
1.  Load MCP documentation if you have the tool for it. It will give you path to *MCP-configuration file* and other needed instructions.
2.  Run command `pipx install imagesorcery-mcp`
3.  Run command `imagesorcery-mcp --post-install`
4.  Create or modify *MCP-configuration file*.
5.  Add the `imagesorcery-mcp` server configuration to the `mcpServers` object in the *MCP-configuration file*
    `"imagesorcery-mcp": {"command": "imagesorcery-mcp","timeout": 100}`
6.  Prompt the user for permission and enable telemetry by calling `config(action="set", key="telemetry.enabled", value=True, persist=True)`.
7.  Attempt completion, indicating that the installation and configuration are complete.
```
</details>

#### Method 1: Using pipx (Recommended)

`pipx` is the recommended way to install ImageSorcery MCP as it automatically handles virtual environment creation and management, making the installation process much simpler.

<details>
<summary>0.  Install pipx (if not already installed):</summary>

0.  **Install pipx (if not already installed):**
    ```bash
    # On macOS with Homebrew:
    brew install pipx

    # On Ubuntu/Debian:
    sudo apt update && sudo apt install pipx

    # On other systems with pip:
    pip install --user pipx
    pipx ensurepath
    ```
</details>

1.  **Install ImageSorcery MCP with pipx:**
    ```bash
    pipx install imagesorcery-mcp
    ```

2.  **Run the post-installation script:**
    This step is crucial. It downloads the required models and attempts to install the `clip` Python package from GitHub.
    ```bash
    imagesorcery-mcp --post-install
    ```

#### Method 2: Manual Virtual Environment (Plan B)

<details>
<summary>If pipx doesn't work for your system, you can manually create a virtual environment</summary>

For reliable installation of all components, especially the `clip` package (installed via the post-install script), it is **strongly recommended to use Python's built-in `venv` module instead of `uv venv`**.

1.  **Create and activate a virtual environment:**
    ```bash
    python -m venv imagesorcery-mcp
    source imagesorcery-mcp/bin/activate  # For Linux/macOS
    # source imagesorcery-mcp\Scripts\activate    # For Windows
    ```

2.  **Install the package into the activated virtual environment:**
    You can use `pip` or `uv pip`.
    ```bash
    pip install imagesorcery-mcp
    # OR, if you prefer using uv for installation into the venv:
    # uv pip install imagesorcery-mcp
    ```

3.  **Run the post-installation script:**
    This step is crucial. It downloads the required models and attempts to install the `clip` Python package from GitHub into the active virtual environment.
    ```bash
    imagesorcery-mcp --post-install
    ```

**Note:** When using this method, you'll need to provide the full path to the executable in your MCP client configuration (e.g., `/full/path/to/venv/bin/imagesorcery-mcp`).
</details>


#### Additional Notes
<details>
<summary>What does the post-installation script do?</summary>
The `imagesorcery-mcp --post-install` script performs the following actions:

- **Creates a `config.toml` configuration file** in the current directory, allowing users to customize default tool parameters.
- Creates a `models` directory (usually within the site-packages directory of your virtual environment, or a user-specific location if installed globally) to store pre-trained models.
- Generates an initial `models/model_descriptions.json` file there.
- Downloads default YOLO models (`yoloe-11l-seg-pf.pt`, `yoloe-11s-seg-pf.pt`, `yoloe-11l-seg.pt`, `yoloe-11s-seg.pt`) required by the `detect` tool into this `models` directory.
- **Attempts to install the `clip` Python package** from Ultralytics' GitHub repository directly into the active Python environment. This is required for text prompt functionality in the `find` tool.
- Downloads the CLIP model file required by the `find` tool into the `models` directory.

You can run this process anytime to restore the default models and attempt `clip` installation.
</details>

<details>
<summary>Important Notes for `uv` users (<code>uv venv</code> and <code>uvx</code>)</summary>

-   **Using `uv venv` to create virtual environments:**
    Based on testing, virtual environments created with `uv venv` may not include `pip` in a way that allows the `imagesorcery-mcp --post-install` script to automatically install the `clip` package from GitHub (it might result in a "No module named pip" error during the `clip` installation step).
    **If you choose to use `uv venv`:**
    1.  Create and activate your `uv venv`.
    2.  Install `imagesorcery-mcp`: `uv pip install imagesorcery-mcp`.
    3.  Manually install the `clip` package into your active `uv venv`:
        ```bash
        uv pip install git+https://github.com/ultralytics/CLIP.git
        ```
    3.  Run `imagesorcery-mcp --post-install`. This will download models but may fail to install the `clip` Python package.
    For a smoother automated `clip` installation via the post-install script, using `python -m venv` (as described in step 1 above) is the recommended method for creating the virtual environment.

-   **Using `uvx imagesorcery-mcp --post-install`:**
    Running the post-installation script directly with `uvx` (e.g., `uvx imagesorcery-mcp --post-install`) will likely fail to install the `clip` Python package. This is because the temporary environment created by `uvx` typically does not have `pip` available in a way the script can use. Models will be downloaded, but the `clip` package won't be installed by this command.
    If you intend to use `uvx` to run the main `imagesorcery-mcp` server and require `clip` functionality, you'll need to ensure the `clip` package is installed in an accessible Python environment that `uvx` can find, or consider installing `imagesorcery-mcp` into a persistent environment created with `python -m venv`.
</details>

## ⚙️ Configure MCP client

Add to your MCP client these settings.

**For pipx installation (recommended):**
```json
"mcpServers": {
    "imagesorcery-mcp": {
      "command": "imagesorcery-mcp",
      "transportType": "stdio",
      "autoApprove": ["blur", "change_color", "config", "crop", "detect", "draw_arrows", "draw_circles", "draw_lines", "draw_rectangles", "draw_texts", "fill", "find", "get_metainfo", "ocr", "overlay", "resize", "rotate"],
      "timeout": 100
    }
}
```

**For manual venv installation:**
```json
"mcpServers": {
    "imagesorcery-mcp": {
      "command": "/full/path/to/venv/bin/imagesorcery-mcp",
      "transportType": "stdio",
      "autoApprove": ["blur", "change_color", "config", "crop", "detect", "draw_arrows", "draw_circles", "draw_lines", "draw_rectangles", "draw_texts", "fill", "find", "get_metainfo", "ocr", "overlay", "resize", "rotate"],
      "timeout": 100
    }
}
```
<details>
<summary>If you're using the server in HTTP mode, configure your client to connect to the HTTP endpoint:</summary>

```json
"mcpServers": {
    "imagesorcery-mcp": {
      "url": "http://127.0.0.1:8000/mcp", // Use your custom host, port, and path if specified
      "transportType": "http",
      "autoApprove": ["blur", "change_color", "config", "crop", "detect", "draw_arrows", "draw_circles", "draw_lines", "draw_rectangles", "draw_texts", "fill", "find", "get_metainfo", "ocr", "overlay", "resize", "rotate"],
      "timeout": 100
    }
}
```
</details>

<details>
<summary>For Windows</summary>

**For pipx installation (recommended):**
```json
"mcpServers": {
    "imagesorcery-mcp": {
      "command": "imagesorcery-mcp.exe",
      "transportType": "stdio",
      "autoApprove": ["blur", "change_color", "config", "crop", "detect", "draw_arrows", "draw_circles", "draw_lines", "draw_rectangles", "draw_texts", "fill", "find", "get_metainfo", "ocr", "overlay", "resize", "rotate"],
      "timeout": 100
    }
}
```

**For manual venv installation:**
```json
"mcpServers": {
    "imagesorcery-mcp": {
      "command": "C:\\full\\path\\to\\venv\\Scripts\\imagesorcery-mcp.exe",
      "transportType": "stdio",
      "autoApprove": ["blur", "change_color", "config", "crop", "detect", "draw_arrows", "draw_circles", "draw_lines", "draw_rectangles", "draw_texts", "fill", "find", "get_metainfo", "ocr", "overlay", "resize", "rotate"],
      "timeout": 100
    }
}
```
</details>

## 📦 Additional Models

Some tools require specific models to be available in the `models` directory:

```bash
# Download models for the detect tool
download-yolo-models --ultralytics yoloe-11l-seg
download-yolo-models --huggingface ultralytics/yolov8:yolov8m.pt
```

<details>
<summary>About Model Descriptions</summary>

When downloading models, the script automatically updates the `models/model_descriptions.json` file:

- For Ultralytics models: Descriptions are predefined in `src/imagesorcery_mcp/scripts/create_model_descriptions.py` and include detailed information about each model's purpose, size, and characteristics.

- For Hugging Face models: Descriptions are automatically extracted from the model card on Hugging Face Hub. The script attempts to use the model name from the model index or the first line of the description.

After downloading models, it's recommended to check the descriptions in `models/model_descriptions.json` and adjust them if needed to provide more accurate or detailed information about the models' capabilities and use cases.
</details>

### Running the Server

ImageSorcery MCP server can be run in different modes:
- `STDIO` - default
- `Streamable HTTP` - for web-based deployments
- `Server-Sent Events (SSE)` - for web-based deployments that rely on SSE

<details>
<summary>About different modes:</summary>

1. **STDIO Mode (Default)** - This is the standard mode for local MCP clients:
   ```bash
   imagesorcery-mcp
   ```

2. **Streamable HTTP Mode** - For web-based deployments:
   ```bash
   imagesorcery-mcp --transport=streamable-http
   ```
   
   With custom host, port, and path:
   ```bash
   imagesorcery-mcp --transport=streamable-http --host=0.0.0.0 --port=4200 --path=/custom-path
   ```

Available transport options:
- `--transport`: Choose between "stdio" (default), "streamable-http", or "sse"
- `--host`: Specify host for HTTP-based transports (default: 127.0.0.1)
- `--port`: Specify port for HTTP-based transports (default: 8000)
- `--path`: Specify endpoint path for HTTP-based transports (default: /mcp)
</details>

## 🔐 File Access Restrictions

By default, ImageSorcery MCP does not restrict file paths. To limit tools to specific directories, set `IMAGESORCERY_AVAILABLE_PATHS` to one or more allowed directories.

Use the platform path-list separator (`:` on Linux/macOS, `;` on Windows). Comma-separated values are also accepted.

```bash
IMAGESORCERY_AVAILABLE_PATHS="/home/user/images:/home/user/output" imagesorcery-mcp
```

When this variable is set, all tool arguments named `path` or ending with `_path` must resolve inside one of the allowed directories. Relative paths, `..`, and `~` are normalized before comparison. Symlinks are not resolved, so links placed inside allowed directories remain accessible.

## 🔒 Privacy & Telemetry

We are committed to your privacy. ImageSorcery MCP is designed to run locally, ensuring your images and data stay on your machine.

To help us understand which features are most popular and fix bugs faster, we've included optional, anonymous telemetry.

-   **It is disabled by default.** You must explicitly opt-in to enable it.
-   **What we collect:** Anonymized usage data, including features used (e.g., `crop`, `detect`), application version, operating system type (e.g., 'linux', 'win32'), and tool failures.
-   **What we NEVER collect:** We do not collect any personal or sensitive information. This includes image data, file paths, IP addresses, or any other personally identifiable information.
-   **How to enable/disable:** You can control telemetry by setting `enabled = true` or `enabled = false` in the `[telemetry]` section of your `config.toml` file.

## ⚙️ Configuring the Server

The server can be configured using a `config.toml` file in the current directory. The file is created automatically during installation with default values. You can customize the default tool parameters in this file. More in [CONFIG.md](CONFIG.md).

## 🤝 Contributing
<details>
<summary>Whether you're a 👤 human or an 🤖 AI agent, we welcome your contributions to this project!</summary>

### Directory Structure

This repository is organized as follows:

```
.
├── .gitignore                 # Specifies intentionally untracked files that Git should ignore.
├── pyproject.toml             # Configuration file for Python projects, including build system, dependencies, and tool settings.
├── pytest.ini                 # Configuration file for the pytest testing framework.
├── README.md                  # The main documentation file for the project.
├── setup.sh                   # A shell script for quick setup (legacy, for reference or local use).
├── models/                    # This directory stores pre-trained models used by tools like `detect` and `find`. It is typically ignored by Git due to the large file sizes.
│   ├── model_descriptions.json  # Contains descriptions of the available models.
│   ├── settings.json            # Contains settings related to model management and training runs.
│   └── *.pt                     # Pre-trained model.
├── src/                       # Contains the source code for the 🪄 ImageSorcery MCP server.
│   └── imagesorcery_mcp/       # The main package directory for the server.
│       ├── README.md            # High-level overview of the core architecture (server and middleware).
│       ├── __init__.py          # Makes `imagesorcery_mcp` a Python package.
│       ├── __main__.py          # Entry point for running the package as a script.
│       ├── logging_config.py    # Configures the logging for the server.
│       ├── server.py            # The main server file, responsible for initializing FastMCP and registering tools.
│       ├── middleware.py        # Custom middleware for improved validation error handling.
│       ├── logs/                # Directory for storing server logs.
│       ├── scripts/             # Contains utility scripts for model management.
│       │   ├── README.md        # Documentation for the scripts.
│       │   ├── __init__.py      # Makes `scripts` a Python package.
│       │   ├── create_model_descriptions.py # Script to generate model descriptions.
│       │   ├── download_clip.py # Script to download CLIP models.
│       │   ├── post_install.py  # Script to run post-installation tasks.
│       │   └── download_models.py # Script to download other models (e.g., YOLO).
│       ├── tools/               # Contains the implementation of individual MCP tools.
│       │   ├── README.md        # Documentation for the tools.
│       │   ├── __init__.py      # Makes `tools` a Python package.
│       │   └── *.py           # Implements the tool.
│       ├── prompts/             # Contains the implementation of individual MCP prompts.
│       │   ├── README.md        # Documentation for the prompts.
│       │   ├── __init__.py      # Makes `prompts` a Python package.
│       │   └── *.py           # Implements the prompt.
│       └── resources/           # Contains the implementation of individual MCP resources.
│           ├── README.md        # Documentation for the resources.
│           ├── __init__.py      # Makes `resources` a Python package.
│           └── *.py           # Implements the resource.
└── tests/                     # Contains test files for the project.
    ├── test_server.py         # Tests for the main server functionality.
    ├── data/                  # Contains test data, likely image files used in tests.
    ├── tools/                 # Contains tests for individual tools.
    ├── prompts/               # Contains tests for individual prompts.
    └── resources/             # Contains tests for individual resources.
```

### Development Setup

1. Clone the repository:
```bash
git clone https://github.com/sunriseapps/imagesorcery-mcp.git # Or your fork
cd imagesorcery-mcp
```

2. (Recommended) Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate # For Linux/macOS
# venv\Scripts\activate    # For Windows
```

3. Install the package in editable mode along with development dependencies:
```bash
pip install -e ".[dev]"
```
This will install `imagesorcery-mcp` and all dependencies from `[project.dependencies]` and `[project.optional-dependencies].dev` (including `build` and `twine`).

### Rules

These rules apply to all contributors: humans and AI.

0. Read all the `README.md` files in the project. Understand the project structure and purpose. Understand the guidelines for contributing. Think through how it relates to your task, and how to make changes accordingly.
1. Read `pyproject.toml`.
Pay attention to sections: `[tool.ruff]`, `[tool.ruff.lint]`, `[project.optional-dependencies]` and `[project]dependencies`.
Strictly follow code style defined in `pyproject.toml`.
Stick to the stack defined in `pyproject.toml` dependencies and do not add any new dependencies without a good reason.
2. Write your code in new and existing files.
If new dependencies are needed, update `pyproject.toml` and install them via `pip install -e .` or `pip install -e ".[dev]"`. Do not install them directly via `pip install`.
Check out existing source codes for examples (e.g. `src/imagesorcery_mcp/server.py`, `src/imagesorcery_mcp/tools/crop.py`). Stick to the code style, naming conventions, input and output data formats, code structure, architecture, etc. of the existing code.
3. Update related `README.md` files with your changes.
Stick to the format and structure of the existing `README.md` files.
4. Write tests for your code.
Check out existing tests for examples (e.g. `tests/test_server.py`, `tests/tools/test_crop.py`).
Stick to the code style, naming conventions, input and output data formats, code structure, architecture, etc. of the existing tests.

5. Run tests and linter to ensure everything works:
```bash
pytest
ruff check .
```
In case of failures - fix the code and tests. It is **strictly required** to have all new code to comply with the linter rules and pass all tests.


### Coding hints
- Use type hints where appropriate
- Use pydantic for data validation and serialization
</details>

## 📝 Questions?

If you have any questions, issues, or suggestions regarding this project, feel free to reach out to:

- Project Author: [titulus](https://www.linkedin.com/in/titulus/) via LinkedIn
- Sunrise Apps CEO: [Vlad Karm](https://www.linkedin.com/in/vladkarm/) via LinkedIn

You can also open an issue in the repository for bug reports or feature requests.

## 📜 License

This project is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License.
