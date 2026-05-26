---
name: "microsoft/markitdown"
description: "MCP tool access to MarkItDown -- a library that converts many file formats (local or remote) to Markdown for LLM consumption."
description_tr: "MarkItDown kütüphanesine MCP aracı erişimi -- birçok dosya formatını (yerel veya uzak) LLM tüketimi için Markdown'a dönüştüren bir kütüphane."
category: "File Systems"
repo: "microsoft/markitdown"
stars: 125260
url: "https://github.com/microsoft/markitdown"
body_length: 15739
license: "MIT"
language: "Python"
body_tr: |-
  # MarkItDown

  [![PyPI](https://img.shields.io/pypi/v/markitdown.svg)](https://pypi.org/project/markitdown/)
  ![PyPI - Downloads](https://img.shields.io/pypi/dd/markitdown)
  [![Built by AutoGen Team](https://img.shields.io/badge/Built%20by-AutoGen%20Team-blue)](https://github.com/microsoft/autogen)

  > [!IMPORTANT]
  > MarkItDown, mevcut işlemin ayrıcalıklarıyla I/O gerçekleştirir. `open()` veya `requests.get()` gibi, işlemin kendisinin erişebileceği kaynaklara erişecektir. Güvenilmeyen ortamlarda girişlerinizi temizleyin ve kullanım durumunuz için gerekli olan en dar `convert_*` fonksiyonunu çağırın (örn. `convert_stream()` veya `convert_local()`). Daha fazla bilgi için belgelendirmenin [Güvenlik Hususları](#güvenlik-hususları) bölümüne bakın.

  MarkItDown, LLM'ler ve ilgili metin analizi işlem hatları ile kullanılmak üzere çeşitli dosyaları Markdown'a dönüştürmek için hafif bir Python yardımcı programıdır. Bu amaçla, [textract](https://github.com/deanmalmgren/textract) ile en karşılaştırılabilir olanıdır, ancak önemli belge yapısı ve içeriğinin Markdown olarak korunmasına odaklanır (başlıklar, listeler, tablolar, linkler vb. dahil). Çıktı genellikle makul ölçüde sunulabilir ve insan dostu olsa da, metin analiz araçları tarafından tüketilmek için tasarlanmıştır -- ve insan tüketimi için yüksek sadakatli belge dönüştürmeleri için en iyi seçenek olmayabilir.

  MarkItDown şu anda aşağıdakilerden dönüştürmeyi desteklemektedir:

  - PDF
  - PowerPoint
  - Word
  - Excel
  - Görüntüler (EXIF meta verileri ve OCR)
  - Ses (EXIF meta verileri ve konuşma transkripsiyonu)
  - HTML
  - Metin tabanlı formatlar (CSV, JSON, XML)
  - ZIP dosyaları (içeriği üzerinde yineler)
  - Youtube URL'leri
  - ePub'lar
  - ... ve daha fazlası!

  ## Neden Markdown?

  Markdown, düz metne son derece yakındır; minimal işaretleme veya biçimlendirme ile, ancak yine de önemli belge yapısını temsil etmenin bir yolunu sağlar. OpenAI'ın GPT-4o gibi ana akım LLM'ler, Markdown'ı doğal olarak "konuşurlar" ve çoğu zaman Markdown'ı tepkilerine istenmeden dahil ederler. Bu, geniş miktarda Markdown biçimlendirilmiş metinle eğitilmiş olduklarını ve bunu iyi anladıklarını gösterir. Ek bir avantaj olarak, Markdown kuralları son derece token verimli olur.

  ## Ön Koşullar
  MarkItDown, Python 3.10 veya üstünü gerektirir. Bağımlılık çatışmalarından kaçınmak için sanal ortam kullanılması önerilir.

  Standart Python kurulumu ile, aşağıdaki komutları kullanarak sanal ortam oluşturabilir ve etkinleştirebilirsiniz:

  ```bash
  python -m venv .venv
  source .venv/bin/activate
  ```

  `uv` kullanıyorsanız, aşağıdakilerle sanal ortam oluşturabilirsiniz:

  ```bash
  uv venv --python=3.12 .venv
  source .venv/bin/activate
  # NOT: Bu sanal ortama paket yüklemek için 'pip install' yerine 'uv pip install' kullandığınızdan emin olun
  ```

  Anaconda kullanıyorsanız, aşağıdakilerle sanal ortam oluşturabilirsiniz:

  ```bash
  conda create -n markitdown python=3.12
  conda activate markitdown
  ```

  ## Kurulum

  MarkItDown'ı kurmak için pip kullanın: `pip install 'markitdown[all]'`. Alternatif olarak, kaynaktan yükleyebilirsiniz:

  ```bash
  git clone git@github.com:microsoft/markitdown.git
  cd markitdown
  pip install -e 'packages/markitdown[all]'
  ```

  ## Kullanım

  ### Komut Satırı

  ```bash
  markitdown path-to-file.pdf > document.md
  ```

  Veya çıktı dosyasını belirtmek için `-o` kullanın:

  ```bash
  markitdown path-to-file.pdf -o document.md
  ```

  Ayrıca içeriği pipe edebilirsiniz:

  ```bash
  cat path-to-file.pdf | markitdown
  ```

  ### İsteğe Bağlı Bağımlılıklar
  MarkItDown, çeşitli dosya formatlarını etkinleştirmek için isteğe bağlı bağımlılıklara sahiptir. Bu belgenin daha öncesinde, `[all]` seçeneği ile tüm isteğe bağlı bağımlılıkları yükledik. Ancak daha fazla kontrol için bunları ayrı ayrı yükleyebilirsiniz. Örneğin:

  ```bash
  pip install 'markitdown[pdf, docx, pptx]'
  ```

  yalnızca PDF, DOCX ve PPTX dosyaları için bağımlılıkları yükleyecektir.

  Şu anda aşağıdaki isteğe bağlı bağımlılıklar mevcuttur:

  * `[all]` Tüm isteğe bağlı bağımlılıkları yükler
  * `[pptx]` PowerPoint dosyaları için bağımlılıkları yükler
  * `[docx]` Word dosyaları için bağımlılıkları yükler
  * `[xlsx]` Excel dosyaları için bağımlılıkları yükler
  * `[xls]` Eski Excel dosyaları için bağımlılıkları yükler
  * `[pdf]` PDF dosyaları için bağımlılıkları yükler
  * `[outlook]` Outlook mesajları için bağımlılıkları yükler
  * `[az-doc-intel]` Azure Document Intelligence için bağımlılıkları yükler
  * `[az-content-understanding]` Azure Content Understanding için bağımlılıkları yükler
  * `[audio-transcription]` wav ve mp3 dosyalarının ses transkripsiyonu için bağımlılıkları yükler
  * `[youtube-transcription]` YouTube video transkripsiyonu getirmek için bağımlılıkları yükler

  ### Eklentiler

  MarkItDown, 3. taraf eklentileri de destekler. Eklentiler varsayılan olarak devre dışıdır. Yüklü eklentileri listelemek için:

  ```bash
  markitdown --list-plugins
  ```

  Eklentileri etkinleştirmek için kullanın:

  ```bash
  markitdown --use-plugins path-to-file.pdf
  ```

  Kullanılabilir eklentileri bulmak için GitHub'da `#markitdown-plugin` hashtag'ini arayın. Bir eklenti geliştirmek için bkz. `packages/markitdown-sample-plugin`.

  #### markitdown-ocr Eklentisi

  `markitdown-ocr` eklentisi, PDF, DOCX, PPTX ve XLSX dönüştürücülerine OCR desteği ekler ve LLM Vision kullanarak gömülü görüntülerden metin ayıklar — MarkItDown'ın zaten görüntü açıklamaları için kullandığı `llm_client` / `llm_model` deseniyle aynı. Yeni ML kitaplıkları veya ikili bağımlılıklar gerekli değildir.

  **Kurulum:**

  ```bash
  pip install markitdown-ocr
  pip install openai  # veya herhangi bir OpenAI uyumlu istemci
  ```

  **Kullanım:**

  Görüntü açıklamaları için kullanacağınız `llm_client` ve `llm_model` ile aynı olanları geçirin:

  ```python
  from markitdown import MarkItDown
  from openai import OpenAI

  md = MarkItDown(
      enable_plugins=True,
      llm_client=OpenAI(),
      llm_model="gpt-4o",
  )
  result = md.convert("document_with_images.pdf")
  print(result.text_content)
  ```

  Hiçbir `llm_client` sağlanmazsa, eklenti yine de yüklenir, ancak OCR sessizce atlanır ve standart yerleşik dönüştürücü kullanılır.

  Ayrıntılı belgelendirme için [`packages/markitdown-ocr/README.md`](packages/markitdown-ocr/README.md) bölümüne bakın.

  ### Azure Content Understanding

  [Azure Content Understanding](https://learn.microsoft.com/azure/ai-services/content-understanding/), yapılandırılmış alan ayıklama (YAML ön kapı), çok modaliteli destek (belgeler, görüntüler, ses, video) ve yapılandırılabilir analizörlerle daha yüksek kaliteli dönüştürme sağlar.

  Kurulum: `pip install 'markitdown[az-content-understanding]'`

  #### Content Understanding Ne Zaman Kullanılır

  Content Understanding, yerleşik veya Document Intelligence dönüştürücülerinin sağladığından daha fazla özelliğe ihtiyacınız olduğunda idealdir:

  - **Ses ve video dosyaları** — CU, video için tek seçenek ve ses için daha yüksek kaliteli bulut seçeneğidir. Yerleşik dönüştürücülerin video desteği yok ve sadece temel ses transkripsiyonu var.
  - **Yapılandırılmış alan ayıklama** — [Önceden oluşturulmuş](https://learn.microsoft.com/azure/ai-services/content-understanding/concepts/prebuilt-analyzers) veya [özel olarak oluşturulan](https://learn.microsoft.com/azure/ai-services/content-understanding/how-to/customize-analyzer-content-understanding-studio?tabs=portal) analizörler, alan özel alanları (fatura tutarları, makbuz tarihleri, sözleşme maddeleri) YAML ön kapısı olarak seri hale getirilmiş şekilde ayıklar. Ne yerleşik ne de Doc Intel entegrasyonu alanları açığa çıkarır.
  - **Daha yüksek kaliteli belge ayıklama** — Taranmış PDF'ler, karmaşık tablolar ve çok sayfalı belgeler için bulut tabanlı düzen analizi ve OCR.
  - **Tüm modelliteler için tek API** — Tek bir `cu_endpoint`, otomatik analizör yönlendirmesi ile belgeleri, görüntüleri, sesi ve videoyu işler.

  | Yetenek | Yerleşik dönüştürücüler | Azure Document Intelligence | Azure Content Understanding |
  |------------|---------------------|-----------------------------|-----------------------------|
  | Belge dönüştürme | Çevrimdışı, biçime özel ayıklama | Bulut düzeni ayıklama | Bulut çok modaliteli ayıklama |
  | Yapılandırılmış alanlar | Mevcut değil | Bu entegrasyon tarafından açığa çıkarılmaz | Analizör alanlarından YAML ön kapısı |
  | Özel analizörler | Mevcut değil | Bu entegrasyonda yapılandırılamaz | `cu_analyzer_id` ile desteklenir |
  | Ses ve video | Temel ses, video yok | Desteklenmez | Ses ve video analizörleri |
  | Maliyet | Yalnızca yerel işlem | Faturalandırılabilir Azure API çağrıları | Faturalandırılabilir Azure API çağrıları |

  **CLI:**

  ```bash
  markitdown path-to-file.pdf --use-cu --cu-endpoint "<content_understanding_endpoint>"
  ```

  **Python API:**

  ```python
  from markitdown import MarkItDown

  # Sıfır yapılandırma — dosya türü başına analizörü otomatik seçer
  md = MarkItDown(cu_endpoint="<content_understanding_endpoint>")
  result = md.convert("report.pdf")   # belgeler → prebuilt-documentSearch
  result = md.convert("meeting.mp4")  # video → prebuilt-videoSearch
  result = md.convert("call.wav")     # ses → prebuilt-audioSearch
  print(result.markdown)
  ```

  **Özel analizör ile** (alan özel alan ayıklama için):

  ```python
  md = MarkItDown(
      cu_endpoint="<content_understanding_endpoint>",
      cu_analyzer_id="my-invoice-analyzer",
  )
  result = md.convert("invoice.pdf")
  print(result.markdown)
  # Çıktı, ayıklanan alanlarla YAML ön kapısını içerir:
  # ---
  # contentType: document
  # fields:
  #   VendorName: CONTOSO LTD.
  #   InvoiceDate: '2019-11-15'
  # ---
  # <!-- page 1 -->
  # ...
  ```

  `cu_analyzer_id` ayarlandığında, dönüştürücü otomatik olarak analizörün modalitesine göre uyumlu dosya türlerine kapsamını belirler. Uyumsuz türler (örn. bir belge analizörüne sahip ses dosyaları) varsayılan önceden oluşturulmuş analizörlere otomatik yönlendirilir.

  **Maliyet notu:** CU yönlendirilmiş bir biçim için her `convert()` çağrısı, faturalandırılabilir bir Azure API çağrısıdır. CU'nun hangi biçimlere yönleneceğini kısıtlamak için `cu_file_types` kullanın:

  ```python
  from markitdown.converters import ContentUnderstandingFileType

  md = MarkItDown(
      cu_endpoint="<content_understanding_endpoint>",
      cu_file_types=[ContentUnderstandingFileType.PDF],  # sadece PDF'ler CU kullanır
  )
  ```

  Azure Content Understanding hakkında daha fazla bilgi [burada](https://learn.microsoft.com/azure/ai-services/content-understanding/) bulunabilir.

  ### Azure Document Intelligence

  Microsoft Document Intelligence'ı dönüştürme için kullanmak için:

  ```bash
  markitdown path-to-file.pdf -o document.md -d -e "<document_intelligence_endpoint>"
  ```

  Azure Document Intelligence Kaynağının nasıl ayarlanacağı hakkında daha fazla bilgi [burada](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/how-to-guides/create-document-intelligence-resource?view=doc-intel-4.0.0) bulunabilir

  ### Python API

  Python'da temel kullanım:

  ```python
  from markitdown import MarkItDown

  md = MarkItDown(enable_plugins=False) # Eklentileri etkinleştirmek için True olarak ayarlayın
  result = md.convert("test.xlsx")
  print(result.text_content)
  ```

  Python'da Document Intelligence dönüştürme:

  ```python
  from markitdown import MarkItDown

  md = MarkItDown(docintel_endpoint="<document_intelligence_endpoint>")
  result = md.convert("test.pdf")
  print(result.text_content)
  ```

  Görüntü açıklamaları için Büyük Dil Modellerini kullanmak için (şu anda sadece pptx ve görüntü dosyaları için), `llm_client` ve `llm_model` sağlayın:

  ```python
  from markitdown import MarkItDown
  from openai import OpenAI

  client = OpenAI()
  md = MarkItDown(llm_client=client, llm_model="gpt-4o", llm_prompt="isteğe bağlı özel istem")
  result = md.convert("example.jpg")
  print(result.text_content)
  ```

  ### Docker

  ```sh
  docker build -t markitdown:latest .
  docker run --rm -i markitdown:latest < ~/your-file.pdf > output.md
  ```

  ## Katkıda Bulunma

  Bu proje katkıları ve önerileri memnuniyetle karşılar. Çoğu katkı, katkınızı kullanma haklarına sahip olduğunuzu ve gerçekten sahip olduğunuzu beyan eden bir Katkıçı Lisans Sözleşmesi'ne (CLA) kabul etmenizi gerektirir. Ayrıntılar için https://cla.opensource.microsoft.com adresini ziyaret edin.

  Bir pull request gönderdiğinizde, bir CLA botu otomatik olarak CLA sağlamanız gerekip gerekmediğini belirleyecek ve PR'yi uygun şekilde dekore edecektir (örn. durum kontrolü, yorum). Bot tarafından sağlanan talimatları basitçe izleyin. Bunu yalnızca bir kez yapmanız gerekecektir; CLA kullanan tüm depolar arasında.

  Bu proje, [Microsoft Açık Kaynak Davranış Kuralları](https://opensource.microsoft.com/codeofconduct/) benimsemiştir.
  Daha fazla bilgi için bkz. [Davranış Kuralları SSS](https://opensource.microsoft.com/codeofconduct/faq/) veya herhangi bir ek soru veya yorum için [opencode@microsoft.com](mailto:opencode@microsoft.com) ile iletişim kurun.

  ### Nasıl Katkıda Bulunursunuz

  Sorunlara bakarak veya PR'leri gözden geçirmeye yardımcı olarak katkıda bulunabilirsiniz. Herhangi bir sorun veya PR hoştur, ancak topluluk katkılarını kolaylaştırmaya yardımcı olmak için bazılarını 'katkıya açık' ve 'gözden geçirmeye açık' olarak işaretledik. Bunlar elbette sadece önerilerdir ve herhangi bir şekilde katkıda bulunmakta özgürsünüz.

  <div align="center">

  |            | Tümü                                                          | Özellikle Topluluktan Yardım İhtiyaç Duyulanlar                                                                                                      |
  | ---------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
  | **Sorunlar** | [Tüm Sorunlar](https://github.com/microsoft/markitdown/issues) | [Katkıya açık sorunlar](https://github.com/microsoft/markitdown/issues?q=is%3Aissue+is%3Aopen+label%3A%22open+for+contribution%22) |
  | **PR'ler**    | [Tüm PR'ler](https://github.com/microsoft/markitdown/pulls)     | [Gözden geçirmeye açık PR'ler](https://github.com/microsoft/markitdown/pulls?q=is%3Apr+is%3Aopen+label%3A%22open+for+reviewing%22)              |

  </div>

  ### Testleri ve Kontrolleri Çalıştırma

  - MarkItDown paketine gidin:

    ```sh
    cd packages/markitdown
    ```

  - Ortamınıza `hatch` yükleyin ve testleri çalıştırın:

    ```sh
    pip install hatch  # Hatch'i kurmanın diğer yolları: https://hatch.pypa.io/dev/install/
    hatch shell
    hatch test
    ```

    (Alternatif) Tüm bağımlılıkları yüklenmiş olan Devcontainer'ı kullanın:

    ```sh
    # Projeyi Devcontainer'da yeniden açın ve çalıştırın:
    hatch test
    ```

  - PR göndermeden önce ön kayıt kontrollerini çalıştırın: `pre-commit run --all-files`

  ### Güvenlik Hususları

  MarkItDown, mevcut işlemin ayrıcalıklarıyla I/O gerçekleştirir. `open()` veya `requests.get()` gibi, işlemin kendisinin erişebileceği kaynaklara erişecektir.

  **Girişlerinizi temizleyin:** Güvenilmeyen girişi doğrudan MarkItDown'a geçirmeyin. Girişin herhangi bir kısmı güvenilmeyen bir kullanıcı veya sistem tarafından kontrol edilebiliyorsa, örneğin barındırılan veya sunucu tarafı uygulamalarda, MarkItDown'ı çağırmadan önce doğrulanmalı ve kısıtlanmalıdır. Ortamınıza bağlı olarak, bu dosya yollarını kısıtlamayı, URI şemalarını ve ağ hedeflerini sınırlamayı ve özel, geri döngü, bağlantı-yerel veya meta veri-hizmet adreslerine erişimi engellemeyi içerebilir.

  **Sadece ihtiyacınız olan dönüştürme yöntemini çağırın:** Kullanım durumunuza uygun en dar dönüştürme API'sini tercih edin. MarkItDown'ın `convert()` yöntemi kasıtlı olarak izin veren ve yerel dosyalar, uzak URI'ler ve bayt akışlarını işleyebilir. Uygulamanız sadece yerel dosyaları okumaya ihtiyacınız varsa, bunun yerine `convert_local()` öğesini çağırın. URI getirme üzerinde daha fazla kontrol gerekiyorsa, `requests.get()` öğesini kendiniz çağırın ve yanıt nesnesini `convert_response()` öğesine geçirin. Maksimum kontrol için, dönüştürmek istediğiniz girişe bir akış açın ve `convert_stream()` öğesini çağırın.

  ### 3. Taraf Eklentilerine Katkıda Bulunma

  Ayrıca 3. taraf eklentileri oluşturarak ve paylaşarak katkıda bulunabilirsiniz. Daha fazla ayrıntı için bkz. `packages/markitdown-sample-plugin`.

  ## Ticari Markalar

  Bu proje, projeler, ürünler veya hizmetler için ticari markalar veya logolar içerebilir. Microsoft ticari markalarının veya logolarının yetkili kullanımı, [Microsoft'un Ticari Marka ve Marka Yönergeleri](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general) başlığı altında belirtilmiş ve takip etmelidir. Bu projenin değiştirilmiş sürümlerinde Microsoft ticari markalarının veya logolarının kullanımı, kafa karışıklığına neden olmamalı veya Microsoft sponsorluğu anlamına gelmemelidir. Herhangi bir üçüncü taraf ticari markası veya logosu kullanımı, ilgili üçüncü tarafın politikalarına tabidir.
---

# MarkItDown

[![PyPI](https://img.shields.io/pypi/v/markitdown.svg)](https://pypi.org/project/markitdown/)
![PyPI - Downloads](https://img.shields.io/pypi/dd/markitdown)
[![Built by AutoGen Team](https://img.shields.io/badge/Built%20by-AutoGen%20Team-blue)](https://github.com/microsoft/autogen)

> [!IMPORTANT]
> MarkItDown performs I/O with the privileges of the current process. Like open() or requests.get(), it will access resources that the process itself can access. Sanitize your inputs in untrusted environments, and call the narrowest `convert_*` function needed for your use case (e.g., `convert_stream()`, or `convert_local()`). See the [Security Considerations](#security-considerations) section of the documentation for more information.

MarkItDown is a lightweight Python utility for converting various files to Markdown for use with LLMs and related text analysis pipelines. To this end, it is most comparable to [textract](https://github.com/deanmalmgren/textract), but with a focus on preserving important document structure and content as Markdown (including: headings, lists, tables, links, etc.) While the output is often reasonably presentable and human-friendly, it is meant to be consumed by text analysis tools -- and may not be the best option for high-fidelity document conversions for human consumption.

MarkItDown currently supports the conversion from:

- PDF
- PowerPoint
- Word
- Excel
- Images (EXIF metadata and OCR)
- Audio (EXIF metadata and speech transcription)
- HTML
- Text-based formats (CSV, JSON, XML)
- ZIP files (iterates over contents)
- Youtube URLs
- EPubs
- ... and more!

## Why Markdown?

Markdown is extremely close to plain text, with minimal markup or formatting, but still
provides a way to represent important document structure. Mainstream LLMs, such as
OpenAI's GPT-4o, natively "_speak_" Markdown, and often incorporate Markdown into their
responses unprompted. This suggests that they have been trained on vast amounts of
Markdown-formatted text, and understand it well. As a side benefit, Markdown conventions
are also highly token-efficient.

## Prerequisites
MarkItDown requires Python 3.10 or higher. It is recommended to use a virtual environment to avoid dependency conflicts.

With the standard Python installation, you can create and activate a virtual environment using the following commands:

```bash
python -m venv .venv
source .venv/bin/activate
```

If using `uv`, you can create a virtual environment with:

```bash
uv venv --python=3.12 .venv
source .venv/bin/activate
# NOTE: Be sure to use 'uv pip install' rather than just 'pip install' to install packages in this virtual environment
```

If you are using Anaconda, you can create a virtual environment with:

```bash
conda create -n markitdown python=3.12
conda activate markitdown
```

## Installation

To install MarkItDown, use pip: `pip install 'markitdown[all]'`. Alternatively, you can install it from the source:

```bash
git clone git@github.com:microsoft/markitdown.git
cd markitdown
pip install -e 'packages/markitdown[all]'
```

## Usage

### Command-Line

```bash
markitdown path-to-file.pdf > document.md
```

Or use `-o` to specify the output file:

```bash
markitdown path-to-file.pdf -o document.md
```

You can also pipe content:

```bash
cat path-to-file.pdf | markitdown
```

### Optional Dependencies
MarkItDown has optional dependencies for activating various file formats. Earlier in this document, we installed all optional dependencies with the `[all]` option. However, you can also install them individually for more control. For example:

```bash
pip install 'markitdown[pdf, docx, pptx]'
```

will install only the dependencies for PDF, DOCX, and PPTX files.

At the moment, the following optional dependencies are available:

* `[all]` Installs all optional dependencies
* `[pptx]` Installs dependencies for PowerPoint files
* `[docx]` Installs dependencies for Word files
* `[xlsx]` Installs dependencies for Excel files
* `[xls]` Installs dependencies for older Excel files
* `[pdf]` Installs dependencies for PDF files
* `[outlook]` Installs dependencies for Outlook messages
* `[az-doc-intel]` Installs dependencies for Azure Document Intelligence
* `[az-content-understanding]` Installs dependencies for Azure Content Understanding
* `[audio-transcription]` Installs dependencies for audio transcription of wav and mp3 files
* `[youtube-transcription]` Installs dependencies for fetching YouTube video transcription

### Plugins

MarkItDown also supports 3rd-party plugins. Plugins are disabled by default. To list installed plugins:

```bash
markitdown --list-plugins
```

To enable plugins use:

```bash
markitdown --use-plugins path-to-file.pdf
```

To find available plugins, search GitHub for the hashtag `#markitdown-plugin`. To develop a plugin, see `packages/markitdown-sample-plugin`.

#### markitdown-ocr Plugin

The `markitdown-ocr` plugin adds OCR support to PDF, DOCX, PPTX, and XLSX converters, extracting text from embedded images using LLM Vision — the same `llm_client` / `llm_model` pattern that MarkItDown already uses for image descriptions. No new ML libraries or binary dependencies required.

**Installation:**

```bash
pip install markitdown-ocr
pip install openai  # or any OpenAI-compatible client
```

**Usage:**

Pass the same `llm_client` and `llm_model` you would use for image descriptions:

```python
from markitdown import MarkItDown
from openai import OpenAI

md = MarkItDown(
    enable_plugins=True,
    llm_client=OpenAI(),
    llm_model="gpt-4o",
)
result = md.convert("document_with_images.pdf")
print(result.text_content)
```

If no `llm_client` is provided the plugin still loads, but OCR is silently skipped and the standard built-in converter is used instead.

See [`packages/markitdown-ocr/README.md`](packages/markitdown-ocr/README.md) for detailed documentation.

### Azure Content Understanding

[Azure Content Understanding](https://learn.microsoft.com/azure/ai-services/content-understanding/) provides higher-quality conversion with structured field extraction (YAML front matter), multi-modal support (documents, images, audio, video), and configurable analyzers.

Install: `pip install 'markitdown[az-content-understanding]'`

#### When to use Content Understanding

Content Understanding is ideal when you need capabilities beyond what built-in or Document Intelligence converters provide:

- **Audio and video files** — CU is the only option for video, and the higher-quality cloud option for audio. Built-in converters have no video support and only basic audio transcription.
- **Structured field extraction** — [Prebuilt](https://learn.microsoft.com/azure/ai-services/content-understanding/concepts/prebuilt-analyzers) or [custom-built](https://learn.microsoft.com/azure/ai-services/content-understanding/how-to/customize-analyzer-content-understanding-studio?tabs=portal) analyzers extract domain-specific fields (invoice amounts, receipt dates, contract clauses) serialized as YAML front matter. Neither built-in nor Doc Intel integration exposes fields.
- **Higher-quality document extraction** — Cloud-based layout analysis and OCR for scanned PDFs, complex tables, and multi-page documents.
- **Single API for all modalities** — One `cu_endpoint` handles documents, images, audio, and video with automatic analyzer routing.

| Capability | Built-in converters | Azure Document Intelligence | Azure Content Understanding |
|------------|---------------------|-----------------------------|-----------------------------|
| Document conversion | Offline, format-specific extraction | Cloud layout extraction | Cloud multimodal extraction |
| Structured fields | Not available | Not exposed by this integration | YAML front matter from analyzer fields |
| Custom analyzers | Not available | Not configurable in this integration | Supported with `cu_analyzer_id` |
| Audio and video | Basic audio, no video | Not supported | Audio and video analyzers |
| Cost | Local compute only | Billable Azure API calls | Billable Azure API calls |

**CLI:**

```bash
markitdown path-to-file.pdf --use-cu --cu-endpoint "<content_understanding_endpoint>"
```

**Python API:**

```python
from markitdown import MarkItDown

# Zero-config — auto-selects analyzer per file type
md = MarkItDown(cu_endpoint="<content_understanding_endpoint>")
result = md.convert("report.pdf")   # documents → prebuilt-documentSearch
result = md.convert("meeting.mp4")  # video → prebuilt-videoSearch
result = md.convert("call.wav")     # audio → prebuilt-audioSearch
print(result.markdown)
```

**With a custom analyzer** (for domain-specific field extraction):

```python
md = MarkItDown(
    cu_endpoint="<content_understanding_endpoint>",
    cu_analyzer_id="my-invoice-analyzer",
)
result = md.convert("invoice.pdf")
print(result.markdown)
# Output includes YAML front matter with extracted fields:
# ---
# contentType: document
# fields:
#   VendorName: CONTOSO LTD.
#   InvoiceDate: '2019-11-15'
# ---
# <!-- page 1 -->
# ...
```

When `cu_analyzer_id` is set, the converter automatically scopes it to compatible file types based on the analyzer's modality. Incompatible types (e.g., audio files with a document analyzer) auto-route to default prebuilt analyzers.

**Cost note:** Each `convert()` call for a CU-routed format is a billable Azure API call. Use `cu_file_types` to restrict which formats route to CU:

```python
from markitdown.converters import ContentUnderstandingFileType

md = MarkItDown(
    cu_endpoint="<content_understanding_endpoint>",
    cu_file_types=[ContentUnderstandingFileType.PDF],  # only PDFs use CU
)
```

More information about Azure Content Understanding can be found [here](https://learn.microsoft.com/azure/ai-services/content-understanding/).

### Azure Document Intelligence

To use Microsoft Document Intelligence for conversion:

```bash
markitdown path-to-file.pdf -o document.md -d -e "<document_intelligence_endpoint>"
```

More information about how to set up an Azure Document Intelligence Resource can be found [here](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/how-to-guides/create-document-intelligence-resource?view=doc-intel-4.0.0)

### Python API

Basic usage in Python:

```python
from markitdown import MarkItDown

md = MarkItDown(enable_plugins=False) # Set to True to enable plugins
result = md.convert("test.xlsx")
print(result.text_content)
```

Document Intelligence conversion in Python:

```python
from markitdown import MarkItDown

md = MarkItDown(docintel_endpoint="<document_intelligence_endpoint>")
result = md.convert("test.pdf")
print(result.text_content)
```

To use Large Language Models for image descriptions (currently only for pptx and image files), provide `llm_client` and `llm_model`:

```python
from markitdown import MarkItDown
from openai import OpenAI

client = OpenAI()
md = MarkItDown(llm_client=client, llm_model="gpt-4o", llm_prompt="optional custom prompt")
result = md.convert("example.jpg")
print(result.text_content)
```

### Docker

```sh
docker build -t markitdown:latest .
docker run --rm -i markitdown:latest < ~/your-file.pdf > output.md
```

## Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

### How to Contribute

You can help by looking at issues or helping review PRs. Any issue or PR is welcome, but we have also marked some as 'open for contribution' and 'open for reviewing' to help facilitate community contributions. These are of course just suggestions and you are welcome to contribute in any way you like.

<div align="center">

|            | All                                                          | Especially Needs Help from Community                                                                                                      |
| ---------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Issues** | [All Issues](https://github.com/microsoft/markitdown/issues) | [Issues open for contribution](https://github.com/microsoft/markitdown/issues?q=is%3Aissue+is%3Aopen+label%3A%22open+for+contribution%22) |
| **PRs**    | [All PRs](https://github.com/microsoft/markitdown/pulls)     | [PRs open for reviewing](https://github.com/microsoft/markitdown/pulls?q=is%3Apr+is%3Aopen+label%3A%22open+for+reviewing%22)              |

</div>

### Running Tests and Checks

- Navigate to the MarkItDown package:

  ```sh
  cd packages/markitdown
  ```

- Install `hatch` in your environment and run tests:

  ```sh
  pip install hatch  # Other ways of installing hatch: https://hatch.pypa.io/dev/install/
  hatch shell
  hatch test
  ```

  (Alternative) Use the Devcontainer which has all the dependencies installed:

  ```sh
  # Reopen the project in Devcontainer and run:
  hatch test
  ```

- Run pre-commit checks before submitting a PR: `pre-commit run --all-files`

### Security Considerations

MarkItDown performs I/O with the privileges of the current process. Like `open()` or `requests.get()`, it will access resources that the process itself can access. 

**Sanitize your inputs:** Do not pass untrusted input directly to MarkItDown. If any part of the input may be controlled by an untrusted user or system, such as in hosted or server-side applications, it must be validated and restricted before calling MarkItDown. Depending on your environment, this may include restricting file paths, limiting URI schemes and network destinations, and blocking access to private, loopback, link-local, or metadata-service addresses. 

**Call only the conversion method you need:** Prefer the narrowest conversion API that fits your use case. MarkItDown's `convert()` method is intentionally permissive and can handle local files, remote URIs, and byte streams. If your application only needs to read local files, call `convert_local()` instead. If you need more control over URI fetching, call `requests.get()` yourself and pass the response object to `convert_response()`. For maximum control, open a stream to the input you want converted and call `convert_stream()`.

### Contributing 3rd-party Plugins

You can also contribute by creating and sharing 3rd party plugins. See `packages/markitdown-sample-plugin` for more details.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft
trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
