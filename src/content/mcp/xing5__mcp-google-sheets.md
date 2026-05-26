---
name: "xing5/mcp-google-sheets"
description: "A Model Context Protocol server for interacting with Google Sheets. This server provides tools to create, read, update, and manage spreadsheets through the Google Sheets API."
description_tr: "Google Sheets ile etkileşim kurmak için bir Model Context Protocol sunucusu. Bu sunucu, Google Sheets API üzerinden spreadsheet'leri oluşturmak, okumak, güncellemek ve yönetmek için araçlar sağlar."
category: "Databases"
repo: "xing5/mcp-google-sheets"
stars: 874
url: "https://github.com/xing5/mcp-google-sheets"
body_length: 32431
license: "MIT"
language: "Python"
body_tr: |-
  <div align="center">
    <!-- Main Title Link -->
    <b>mcp-google-sheets</b>

    <!-- Description Paragraph -->
    <p align="center">
      <i>AI Asistanınızın Google Sheets'e Giden Kapısı! </i>📊
    </p>

  [![PyPI - Version](https://img.shields.io/pypi/v/mcp-google-sheets)](https://pypi.org/project/mcp-google-sheets/)
  [![PyPI Downloads](https://static.pepy.tech/badge/mcp-google-sheets)](https://pepy.tech/projects/mcp-google-sheets)
  ![GitHub License](https://img.shields.io/github/license/xing5/mcp-google-sheets)
  ![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/xing5/mcp-google-sheets/release.yml)
  </div>

  ---

  ## 🤔 Bu nedir?

  `mcp-google-sheets`, herhangi bir MCP uyumlu istemci (Claude Desktop gibi) ile Google Sheets API arasında bir köprü görevi gören Python tabanlı bir MCP sunucusudur. Tanımlanmış bir araç seti kullanarak Google Elektronik Tablolarınızla etkileşim kurmanızı, yapay zeka tarafından yönlendirilen güçlü otomasyon ve veri manipülasyonu iş akışlarını etkinleştirmenizi sağlar.

  ---

  ## 🚀 Hızlı Başlangıç (`uvx` Kullanarak)

  Sunucu temelde tek satırda çalışır: `uvx mcp-google-sheets@latest`. 

  Bu komut, en son kodu otomatik olarak indirecek ve çalıştıracaktır. **Her zaman `@latest` kullanmanızı önerilir** böylece en yeni sürümü en son özellikler ve hata düzeltmeleriyle elde edersiniz.

  _Aşağıda kullanılan kimlikler hakkında daha fazla bilgi için [Kimlik Referans Kılavuzu](#-kimlik-referans-kılavuzu)na bakınız._

  1.  **☁️ Ön Koşul: Google Cloud Kurulumu**
      *   Google Cloud Platform kimlik bilgilerini yapılandırmanız ve gerekli API'leri etkinleştirmeniz **gerekir**. Çok güvenli bir şekilde **Hizmet Hesabı** kullanmanız şiddetle tavsiye edilir.
      *   ➡️ Aşağıdaki [**Ayrıntılı Google Cloud Platform Kurulumu**](#-google-cloud-platform-kurulumu-ayrıntılı) kılavuzuna geçin.

  2.  **🐍 `uv` Yükleyin**
      *   `uvx`, hızlı bir Python paket yükleyicisi ve çözücüsü olan `uv`'nin bir parçasıdır. Henüz yüklemediyseniz yükleyin:
          ```bash
          # macOS / Linux
          curl -LsSf https://astral.sh/uv/install.sh | sh
          # Windows
          powershell -c "irm https://astral.sh/uv/install.ps1 | iex"
          # Veya pip kullanarak:
          # pip install uv
          ```
          *Gerekirse `uv` öğesini PATH'inize eklemek için yükleyici çıktısındaki talimatları izleyin.*

  3.  **🔑 Temel Ortam Değişkenlerini Ayarlayın (Hizmet Hesabı Önerilir)**
      *   Sunucuya nasıl kimlik doğrulaması yapacağını söylemeniz gerekir. Terminal'de şu değişkenleri ayarlayın:
      *   **(Linux/macOS)**
          ```bash
          # Google Kurulum adımından alınan GERÇEK yol ve klasör kimliğiniz ile değiştirin
          export SERVICE_ACCOUNT_PATH="/path/to/your/service-account-key.json"
          export DRIVE_FOLDER_ID="YOUR_DRIVE_FOLDER_ID"
          ```
      *   **(Windows CMD)**
          ```cmd
          set SERVICE_ACCOUNT_PATH="C:\path\to\your\service-account-key.json"
          set DRIVE_FOLDER_ID="YOUR_DRIVE_FOLDER_ID"
          ```
      *   **(Windows PowerShell)**
          ```powershell
          $env:SERVICE_ACCOUNT_PATH = "C:\path\to\your\service-account-key.json"
          $env:DRIVE_FOLDER_ID = "YOUR_DRIVE_FOLDER_ID"
          ```
      *   ➡️ Diğer seçenekler (OAuth, `CREDENTIALS_CONFIG`) için [**Ayrıntılı Kimlik Doğrulama & Ortam Değişkenleri**](#-kimlik-doğrulama--ortam-değişkenleri-ayrıntılı) bölümüne bakınız.

  4.  **🏃 Sunucuyu Çalıştırın!**
      *   `uvx`, `mcp-google-sheets`'in en son sürümünü otomatik olarak indirecek ve çalıştıracaktır:
          ```bash
          uvx mcp-google-sheets@latest
          ```
      *   Sunucu başlayacak ve hazır olduğunu belirten günlükleri yazdıracaktır.
      *   
      *   > **💡 Pro İpucu:** En yeni sürümü hata düzeltmeleri ve özelliklerle aldığınızdan emin olmak için her zaman `@latest` kullanın. `@latest` olmadan, `uvx` önbelleğe alınmış eski bir sürümü kullanabilir.

  5.  **🔌 MCP İstemcinizi Bağlayın**
      *   İstemcinizi (ör. Claude Desktop) çalışan sunucuya bağlanacak şekilde yapılandırın.
      *   Kullandığınız istemciye bağlı olarak, istemci sunucuyu sizin için başlatabileceğinden 4. adıma ihtiyaç duymayabilirsiniz. Ancak her şeyin düzgün ayarlandığından emin olmak için 4. adımı test etmek iyi bir uygulamadır.
      *   ➡️ Örnekler için [**Claude Desktop ile Kullanım**](#-claude-desktop-ile-kullanım) bölümüne bakınız.

  6.  **⚡ İsteğe Bağlı: Araç Filtrelemesini Etkinleştirin (Bağlam Kullanımını Azaltın)**
      *   Varsayılan olarak, tüm 19 araç etkindir (~13K token). Bağlam kullanımını azaltmak için yalnızca ihtiyacınız olan araçları etkinleştirin.
      *   ➡️ Ayrıntılar için [**Araç Filtreleme**](#-araç-filtreleme-bağlam-kullanımını-azaltın) bölümüne bakınız.

  Hazırsınız! MCP istemciniz aracılığıyla komut vermeye başlayın.

  ---

  ## ✨ Temel Özellikler

  *   **Sorunsuz Entegrasyon:** Doğrudan Google Drive & Google Sheets API'lerine bağlanır.
  *   **Kapsamlı Araçlar:** Geniş bir işlem yelpazesi sunar (CRUD, listeleme, toplu işlem, paylaşma, biçimlendirme vb.).
  *   **Esnek Kimlik Doğrulama:** **Hizmet Hesaplarını (önerilir)**, OAuth 2.0'ı ve ortam değişkenleri aracılığıyla doğrudan kimlik bilgilerini destekler.
  *   **Kolay Dağıtım:** `uvx` ile anında çalıştırın (sıfır kurulum hissi) veya geliştirme için `uv` kullanarak klonlayın.
  *   **Yapay Zeka İçin Hazır:** MCP uyumlu istemcilerle kullanım için tasarlanmış, doğal dil elektronik tablo etkileşimini sağlar.
  *   **Araç Filtreleme:** `--include-tools` veya `ENABLED_TOOLS` ortam değişkeni ile yalnızca ihtiyacınız olan araçları etkinleştirerek bağlam penceresi kullanımını azaltın.

  ---

  ## 🎯 Araç Filtreleme (Bağlam Kullanımını Azaltın)

  **Sorun:** Varsayılan olarak, bu MCP sunucusu tüm 19 aracı ortaya koymakta, herhangi bir konuşmaya başlamadan önce ~13.000 token tüketmektedir. Yalnızca birkaç aracı ihtiyacınız varsa, bu değerli bağlam penceresi alanını boşa harcar.

  **Çözüm:** Yalnızca gerçekten kullandığınız araçları etkinleştirmek için araç filtrelemesini kullanın.

  ### Araç Filtrelemesini Nasıl Etkinleştireceğiniz

  Araçları şu seçeneklerden biriyle filtreleyebilirsiniz:

  1. **Komut satırı argümanı** `--include-tools`:
     ```json
     {
       "mcpServers": {
         "google-sheets": {
           "command": "uvx",
           "args": [
             "mcp-google-sheets@latest",
             "--include-tools",
             "get_sheet_data,update_cells,list_spreadsheets,list_sheets"
           ],
           "env": {
             "SERVICE_ACCOUNT_PATH": "/path/to/credentials.json"
           }
         }
       }
     }
     ```

  2. **Ortam değişkeni** `ENABLED_TOOLS`:
     ```json
     {
       "mcpServers": {
         "google-sheets": {
           "command": "uvx",
           "args": ["mcp-google-sheets@latest"],
           "env": {
             "SERVICE_ACCOUNT_PATH": "/path/to/credentials.json",
             "ENABLED_TOOLS": "get_sheet_data,update_cells,list_spreadsheets,list_sheets"
           }
         }
       }
     }
     ```

  ### Kullanılabilir Araç Adları

  Filtreleme sırasında, bu tam araç adlarını kullanın (virgülle ayrılmış, boşluksuz):

  **En Yaygın Araçlar (önerilen alt küme):**
  - `get_sheet_data` - Elektronik tablolardan oku
  - `update_cells` - Elektronik tablolara yaz
  - `list_spreadsheets` - Elektronik tabloları bul
  - `list_sheets` - Sekmelerde gezin

  **Tüm Kullanılabilir Araçlar:**
  - `add_columns`
  - `add_rows`
  - `batch_update`
  - `batch_update_cells`
  - `copy_sheet`
  - `create_sheet`
  - `create_spreadsheet`
  - `find_in_spreadsheet`
  - `get_multiple_sheet_data`
  - `get_multiple_spreadsheet_summary`
  - `get_sheet_data`
  - `get_sheet_formulas`
  - `list_folders`
  - `list_sheets`
  - `list_spreadsheets`
  - `rename_sheet`
  - `search_spreadsheets`
  - `share_spreadsheet`
  - `update_cells`

  **Not:** `--include-tools` veya `ENABLED_TOOLS` belirtilmezse, tüm araçlar etkindir (varsayılan davranış).

  ---

  ## 🛠️ Kullanılabilir Araçlar & Kaynaklar

  Bu sunucu, Google Sheets ile etkileşim kurmak için aşağıdaki araçları ortaya koymaktadır:

  _Aşağıda kullanılan kimlikler hakkında daha fazla bilgi için [Kimlik Referans Kılavuzu](#-kimlik-referans-kılavuzu)na bakınız._

  *(Giriş parametreleri aksi belirtilmedikçe genellikle dizelerdir)*

  *   **`list_spreadsheets`**: Yapılandırılmış Drive klasöründeki (Hizmet Hesabı) veya kullanıcı tarafından erişilebilen (OAuth) elektronik tabloları listeler.
      *   `folder_id` (isteğe bağlı dize): Aramada kullanılacak Google Drive klasör kimliği. URL'sinden alın. Belirtilmezse, yapılandırılmış varsayılan klasörü veya 'My Drive'ı arar.
      *   _Döndürür:_ Nesne listesi `[{id: string, title: string}]`
  *   **`create_spreadsheet`**: Yeni bir elektronik tablo oluşturur.
      *   `title` (dize): Elektronik tablo için istenen başlık. Örnek: "Quarterly Report Q4".
      *   `folder_id` (isteğe bağlı dize): Elektronik tablonun oluşturulması gereken Google Drive klasör kimliği. URL'sinden alın. Belirtilmezse, yapılandırılan varsayılanı veya kökü kullanır.
      *   _Döndürür:_ `spreadsheetId`, `title` ve `folder` içeren elektronik tablo bilgisi nesnesi.
  *   **`get_sheet_data`**: Bir sayfadaki/sekmedeki bir aralıktan veri okur.
      *   `spreadsheet_id` (dize): Elektronik tablo kimliği (URL'sinden).
      *   `sheet` (dize): Sayfanın/sekmenin adı (ör. "Sheet1").
      *   `range` (isteğe bağlı dize): A1 gösterimi (ör. `'A1:C10'`, `'Sheet1!B2:D'`). Belirtilmezse, `sheet` tarafından belirtilen tüm sayfayı/sekmeyi okur.
      *   `include_grid_data` (isteğe bağlı boole, varsayılan `False`): `True` ise, biçimlendirme ve meta veriler dahil tam ızgara verileri döndürür (çok daha büyük). `False` ise, yalnızca değerleri döndürür (daha verimli).
      *   _Döndürür:_ `include_grid_data=True` ise, meta verili tam ızgara verileri ([`get` yanıtı](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/get#response-body)). `False` ise, Values API'sinden bir değerler sonucu nesnesi ([`values.get` yanıtı](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/get#response-body)).
  *   **`get_sheet_formulas`**: Bir sayfadaki/sekmedeki bir aralıktan formülleri okur.
      *   `spreadsheet_id` (dize): Elektronik tablo kimliği (URL'sinden).
      *   `sheet` (dize): Sayfanın/sekmenin adı (ör. "Sheet1").
      *   `range` (isteğe bağlı dize): A1 gösterimi (ör. `'A1:C10'`, `'Sheet1!B2:D'`). Belirtilmezse, `sheet` tarafından belirtilen sayfadaki/sekmedeki tüm formülleri okur.
      *   _Döndürür:_ Hücre formülleri 2D dizisi (dizilerin dizisi) ([`values.get` yanıtı](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/get#response-body)).
  *   **`update_cells`**: Belirli bir aralığa veri yazar. Mevcut verilerin üzerine yazar.
      *   `spreadsheet_id` (dize): Elektronik tablo kimliği (URL'sinden).
      *   `sheet` (dize): Sayfanın/sekmenin adı (ör. "Sheet1").
      *   `range` (dize): Yazılacak A1 gösterimi aralığı (ör. 'A1:C3').
      *   `data` (dizilerin dizisi): Yazılacak değerlerin 2D dizisi. Örnek: `[[1, 2, 3], ["a", "b", "c"]]`.
      *   _Döndürür:_ Güncelleme sonucu nesnesi ([`values.update` yanıtı](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/update#response-body)).
  *   **`batch_update_cells`**: Tek bir API çağrısında birden çok aralığı günceller.
      *   `spreadsheet_id` (dize): Elektronik tablo kimliği (URL'sinden).
      *   `sheet` (dize): Sayfanın/sekmenin adı (ör. "Sheet1").
      *   `ranges` (nesne): Aralık dizelerini (A1 gösterimi) değerlerin 2D dizilerine eşleyen sözlük. Örnek: `{ "A1:B2": [[1, 2], [3, 4]], "D5": [["Hello"]] }`.
      *   _Döndürür:_ İşlemin sonucu ([`values.batchUpdate` yanıtı](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdate#response-body)).
  *   **`add_rows`**: Belirtilen dizine bir sayfaya/sekmeye boş satırlar ekler (ekler).
      *   `spreadsheet_id` (dize): Elektronik tablo kimliği (URL'sinden).
      *   `sheet` (dize): Sayfanın/sekmenin adı (ör. "Sheet1").
      *   `count` (tam sayı): Eklenecek boş satır sayısı.
      *   `start_row` (isteğe bağlı tam sayı, varsayılan `0`): Satırları eklemeye başlamak için 0 tabanlı satır dizini. Belirtilmezse, varsayılan olarak `0` (başın başına eklenir).
      *   _Döndürür:_ İşlemin sonucu ([`batchUpdate` yanıtı](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate#response-body)).
  *   **`list_sheets`**: Elektronik tablo içinde tüm sayfa/sekme adlarını listeler.
      *   `spreadsheet_id` (dize): Elektronik tablo kimliği (URL'sinden).
      *   _Döndürür:_ Sayfa/sekme adı dizelerinin listesi. Örnek: `["Sheet1", "Sheet2"]`.
  *   **`create_sheet`**: Elektronik tabloya yeni bir sayfa/sekme ekler.
      *   `spreadsheet_id` (dize): Elektronik tablo kimliği (URL'sinden).
      *   `title` (dize): Yeni sayfa/sekme adı.
      *   _Döndürür:_ Yeni sayfa özellikleri nesnesi.
  *   **`get_multiple_sheet_data`**: Tek bir çağrıda potansiyel olarak farklı elektronik tablolardaki birden çok aralıktan veri alır.
      *   `queries` (nesne dizisi): Her nesne `spreadsheet_id`, `sheet` ve `range`'ı gerektirir. Örnek: `[{"spreadsheet_id": "abc", "sheet": "Sheet1", "range": "A1:B2"}, ...]`.
      *   _Döndürür:_ Her biri sorgu parametrelerini ve alınan `data`'ı veya bir `error`'ı içeren nesne listesi. Her `data`, bir [`values.get` yanıtı](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/get#response-body).
  *   **`get_multiple_spreadsheet_summary`**: Birden çok elektronik tablo için başlıkları, sayfa/sekme adlarını, başlıkları ve ilk birkaç satırı alır.
      *   `spreadsheet_ids` (dize dizisi): Elektronik tabloların kimliği (URL'lerinden).
      *   `rows_to_fetch` (isteğe bağlı tam sayı, varsayılan `5`): Kaç satır (başlık dahil) önizlenecek. Örnek: `5`.
      *   _Döndürür:_ Her elektronik tablo için özet nesnelerinin listesi.
  *   **`share_spreadsheet`**: Elektronik tabloyu belirtilen kullanıcılar/e-postalar ve rollerle paylaşır.
      *   `spreadsheet_id` (dize): Elektronik tablo kimliği (URL'sinden).
      *   `recipients` (nesne dizisi): `[{"email_address": "user@example.com", "role": "writer"}, ...]`. Roller: `reader`, `commenter`, `writer`.
      *   `send_notification` (isteğe bağlı boole, varsayılan `True`): Alıcılara e-posta bildirimleri gönder.
      *   _Döndürür:_ `successes` ve `failures` listelerini içeren sözlük.
  *   **`add_columns`**: Belirtilen dizine bir sayfaya/sekmeye boş sütunlar ekler (ekler).
      *   `spreadsheet_id` (dize): Elektronik tablo kimliği (URL'sinden).
      *   `sheet` (dize): Sayfanın/sekmenin adı (ör. "Sheet1").
      *   `count` (tam sayı): Eklenecek boş sütun sayısı.
      *   `start_column` (isteğe bağlı tam sayı, varsayılan `0`): Eklemeye başlamak için 0 tabanlı sütun dizini. Belirtilmezse, varsayılan olarak `0` (başın başına eklenir).
      *   _Döndürür:_ İşlemin sonucu ([`batchUpdate` yanıtı](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate#response-body)).
  *   **`copy_sheet`**: Bir sayfayı/sekmeyi bir elektronik tablodan diğerine çoğaltır ve isteğe bağlı olarak yeniden adlandırır.
      *   `src_spreadsheet` (dize): Kaynak elektronik tablo kimliği (URL'sinden).
      *   `src_sheet` (dize): Kaynak sayfanın/sekmenin adı (ör. "Sheet1").
      *   `dst_spreadsheet` (dize): Hedef elektronik tablo kimliği (URL'sinden).
      *   `dst_sheet` (dize): Hedef elektronik tablodaki istenen sayfa/sekme adı.
      *   _Döndürür:_ Kopyalama ve isteğe bağlı yeniden adlandırma işlemlerinin sonucu.
  *   **`rename_sheet`**: Mevcut bir sayfayı/sekmeyi yeniden adlandırır.
      *   `spreadsheet` (dize): Elektronik tablo kimliği (URL'sinden).
      *   `sheet` (dize): Geçerli sayfa/sekme adı (ör. "Sheet1").
      *   `new_name` (dize): Yeni sayfa/sekme adı (ör. "Transactions").
      *   _Döndürür:_ İşlemin sonucu ([`batchUpdate` yanıtı](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate#response-body)).
  *   **`add_chart`**: Google Elektronik Tablasında belirtilen verilerden bir grafik oluşturur.
      *   `spreadsheet_id` (dize): Elektronik tablo kimliği (URL'sinden).
      *   `sheet` (dize): Verileri içeren sayfanın/sekmenin adı (ör. "Sheet1").
      *   `chart_type` (dize): Oluşturulacak grafik türü. Seçenekler: `COLUMN` (dikey çubuklar), `BAR` (yatay çubuklar), `LINE`, `AREA`, `PIE`, `SCATTER`, `COMBO`, `HISTOGRAM`.
      *   `data_range` (dize): Grafik verileri için A1 gösterimi aralığı (ör. "A1:C10"). İlk satır başlık olarak kabul edilir.
      *   `title` (isteğe bağlı dize): Grafik başlığı.
      *   `x_axis_label` (isteğe bağlı dize): X ekseni etiketi (alt eksen). Pasta grafikleri için uygulanamaz.
      *   `y_axis_label` (isteğe bağlı dize): Y ekseni etiketi (sol eksen). Pasta grafikleri için uygulanamaz.
      *   `position_x` (isteğe bağlı tam sayı, varsayılan `0`): Sol üst köşeden piksel cinsinden yatay konum ofseti.
      *   `position_y` (isteğe bağlı tam sayı, varsayılan `0`): Sol üst köşeden piksel cinsinden dikey konum ofseti.
      *   `width` (isteğe bağlı tam sayı, varsayılan `600`): Grafiğin piksel cinsinden genişliği.
      *   `height` (isteğe bağlı tam sayı, varsayılan `400`): Grafiğin piksel cinsinden yüksekliği.
      *   _Döndürür:_ Başarı durumu, grafik kimliği ve işlem ayrıntılarını içeren sonuç nesnesi.

  **MCP Kaynakları:**

  *   **`spreadsheet://{spreadsheet_id}/info`**: Google Elektronik Tablosu hakkında temel meta verileri alın.
      *   _Döndürür:_ Elektronik tablo bilgisine sahip JSON dizesi.

  ---

  ## ☁️ Google Cloud Platform Kurulumu (Ayrıntılı)

  Bu kurulum sunucuyu çalıştırmadan **önce gereklidir**.

  1.  **GCP Projesi Oluşturun/Seçin:** [Google Cloud Konsolu](https://console.cloud.google.com/)'na gidin.
  2.  **API'leri Etkinleştirin:** "APIs & Services" -> "Library" sekmesine gidin. Ara ve etkinleştirin:
      *   `Google Sheets API`
      *   `Google Drive API`
  3.  **Kimlik Bilgilerini Yapılandırın:** Aşağıda bir kimlik doğrulama yöntemi seçmeniz gerekir (Hizmet Hesabı önerilir).

  ---

  ## 🔑 Kimlik Doğrulama & Ortam Değişkenleri (Ayrıntılı)

  Sunucu, Google API'lerine erişmek için kimlik bilgilerine ihtiyaç duyar. Bir yöntem seçin:

  _Aşağıda kullanılan kimlikler hakkında daha fazla bilgi için [Kimlik Referans Kılavuzu](#-kimlik-referans-kılavuzu)na bakınız._

  ### Yöntem A: Hizmet Hesabı (Sunucular/Otomasyon İçin Önerilir) ✅

  *   **Neden?** Başsız (tarayıcı gerekmez), güvenli, sunucu ortamları için idealdir. Kolayca süresi dolmaz.
  *   **Adımlar:**
      1.  **Hizmet Hesabı Oluşturun:** GCP Konsolu -> "IAM & Admin" -> "Service Accounts" sekmesinde.
          *   "+ CREATE SERVICE ACCOUNT" öğesine tıklayın. Adlandırın (örn. `mcp-sheets-service`).
          *   Rolleri Verin: Geniş erişim için `Editor` rolünü ekleyin veya daha dar izinler için (ör. `roles/drive.file` ve belirli Sheets rolleri) daha ayrıntılı roller ekleyin.
          *   "Done" öğesine tıklayın. Hesabı bulun, Actions (⋮) -> "Manage keys" öğesine tıklayın.
          *   "ADD KEY" -> "Create new key" -> **JSON** -> "CREATE" öğesine tıklayın.
          *   JSON anahtar dosyasını **indirin ve güvenle saklayın**.
      2.  **Google Drive Klasörü Oluşturun & Paylaşın:**
          *   [Google Drive](https://drive.google.com/) sekmesinde bir klasör oluşturun (örn. "AI Managed Sheets").
          *   URL'den **Klasör Kimliğini** not edin: `https://drive.google.com/drive/folders/THIS
---

<div align="center">
  <!-- Main Title Link -->
  <b>mcp-google-sheets</b>

  <!-- Description Paragraph -->
  <p align="center">
    <i>Your AI Assistant's Gateway to Google Sheets! </i>📊
  </p>

[![PyPI - Version](https://img.shields.io/pypi/v/mcp-google-sheets)](https://pypi.org/project/mcp-google-sheets/)
[![PyPI Downloads](https://static.pepy.tech/badge/mcp-google-sheets)](https://pepy.tech/projects/mcp-google-sheets)
![GitHub License](https://img.shields.io/github/license/xing5/mcp-google-sheets)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/xing5/mcp-google-sheets/release.yml)
</div>

---

## 🤔 What is this?

`mcp-google-sheets` is a Python-based MCP server that acts as a bridge between any MCP-compatible client (like Claude Desktop) and the Google Sheets API. It allows you to interact with your Google Spreadsheets using a defined set of tools, enabling powerful automation and data manipulation workflows driven by AI.

---

## 🚀 Quick Start (Using `uvx`)

Essentially the server runs in one line: `uvx mcp-google-sheets@latest`. 

This command will automatically download the latest code and run it. **We recommend always using `@latest`** to ensure you have the newest version with the latest features and bug fixes.

_Refer to the [ID Reference Guide](#-id-reference-guide) for more information about the IDs used below._

1.  **☁️ Prerequisite: Google Cloud Setup**
    *   You **must** configure Google Cloud Platform credentials and enable the necessary APIs first. We strongly recommend using a **Service Account**.
    *   ➡️ Jump to the [**Detailed Google Cloud Platform Setup**](#-google-cloud-platform-setup-detailed) guide below.

2.  **🐍 Install `uv`**
    *   `uvx` is part of `uv`, a fast Python package installer and resolver. Install it if you haven't already:
        ```bash
        # macOS / Linux
        curl -LsSf https://astral.sh/uv/install.sh | sh
        # Windows
        powershell -c "irm https://astral.sh/uv/install.ps1 | iex"
        # Or using pip:
        # pip install uv
        ```
        *Follow instructions in the installer output to add `uv` to your PATH if needed.*

3.  **🔑 Set Essential Environment Variables (Service Account Recommended)**
    *   You need to tell the server how to authenticate. Set these variables in your terminal:
    *   **(Linux/macOS)**
        ```bash
        # Replace with YOUR actual path and folder ID from the Google Setup step
        export SERVICE_ACCOUNT_PATH="/path/to/your/service-account-key.json"
        export DRIVE_FOLDER_ID="YOUR_DRIVE_FOLDER_ID"
        ```
    *   **(Windows CMD)**
        ```cmd
        set SERVICE_ACCOUNT_PATH="C:\path\to\your\service-account-key.json"
        set DRIVE_FOLDER_ID="YOUR_DRIVE_FOLDER_ID"
        ```
    *   **(Windows PowerShell)**
        ```powershell
        $env:SERVICE_ACCOUNT_PATH = "C:\path\to\your\service-account-key.json"
        $env:DRIVE_FOLDER_ID = "YOUR_DRIVE_FOLDER_ID"
        ```
    *   ➡️ See [**Detailed Authentication & Environment Variables**](#-authentication--environment-variables-detailed) for other options (OAuth, `CREDENTIALS_CONFIG`).

4.  **🏃 Run the Server!**
    *   `uvx` will automatically download and run the latest version of `mcp-google-sheets`:
        ```bash
        uvx mcp-google-sheets@latest
        ```
    *   The server will start and print logs indicating it's ready.
    *   
    *   > **💡 Pro Tip:** Always use `@latest` to ensure you get the newest version with bug fixes and features. Without `@latest`, `uvx` may use a cached older version.

5.  **🔌 Connect your MCP Client**
    *   Configure your client (e.g., Claude Desktop) to connect to the running server.
    *   Depending on the client you use, you might not need step 4 because the client can launch the server for you. But it's a good practice to test run step 4 anyway to make sure things are set up properly.
    *   ➡️ See [**Usage with Claude Desktop**](#-usage-with-claude-desktop) for examples.

6.  **⚡ Optional: Enable Tool Filtering (Reduce Context Usage)**
    *   By default, all 19 tools are enabled (~13K tokens). To reduce context usage, enable only the tools you need.
    *   ➡️ See [**Tool Filtering**](#-tool-filtering-reduce-context-usage) for details.

You're ready! Start issuing commands via your MCP client.

---

## ✨ Key Features

*   **Seamless Integration:** Connects directly to Google Drive & Google Sheets APIs.
*   **Comprehensive Tools:** Offers a wide range of operations (CRUD, listing, batching, sharing, formatting, etc.).
*   **Flexible Authentication:** Supports **Service Accounts (recommended)**, OAuth 2.0, and direct credential injection via environment variables.
*   **Easy Deployment:** Run instantly with `uvx` (zero-install feel) or clone for development using `uv`.
*   **AI-Ready:** Designed for use with MCP-compatible clients, enabling natural language spreadsheet interaction.
*   **Tool Filtering:** Reduce context window usage by enabling only the tools you need with `--include-tools` or `ENABLED_TOOLS` environment variable.

---

## 🎯 Tool Filtering (Reduce Context Usage)

**Problem:** By default, this MCP server exposes all 19 tools, consuming ~13,000 tokens before any conversation begins. If you only need a few tools, this wastes valuable context window space.

**Solution:** Use tool filtering to enable only the tools you actually use.

### How to Enable Tool Filtering

You can filter tools using either:

1. **Command-line argument** `--include-tools`:
   ```json
   {
     "mcpServers": {
       "google-sheets": {
         "command": "uvx",
         "args": [
           "mcp-google-sheets@latest",
           "--include-tools",
           "get_sheet_data,update_cells,list_spreadsheets,list_sheets"
         ],
         "env": {
           "SERVICE_ACCOUNT_PATH": "/path/to/credentials.json"
         }
       }
     }
   }
   ```

2. **Environment variable** `ENABLED_TOOLS`:
   ```json
   {
     "mcpServers": {
       "google-sheets": {
         "command": "uvx",
         "args": ["mcp-google-sheets@latest"],
         "env": {
           "SERVICE_ACCOUNT_PATH": "/path/to/credentials.json",
           "ENABLED_TOOLS": "get_sheet_data,update_cells,list_spreadsheets,list_sheets"
         }
       }
     }
   }
   ```

### Available Tool Names

When filtering, use these exact tool names (comma-separated, no spaces):

**Most Common Tools (recommended subset):**
- `get_sheet_data` - Read from spreadsheets
- `update_cells` - Write to spreadsheets
- `list_spreadsheets` - Find spreadsheets
- `list_sheets` - Navigate tabs

**All Available Tools:**
- `add_columns`
- `add_rows`
- `batch_update`
- `batch_update_cells`
- `copy_sheet`
- `create_sheet`
- `create_spreadsheet`
- `find_in_spreadsheet`
- `get_multiple_sheet_data`
- `get_multiple_spreadsheet_summary`
- `get_sheet_data`
- `get_sheet_formulas`
- `list_folders`
- `list_sheets`
- `list_spreadsheets`
- `rename_sheet`
- `search_spreadsheets`
- `share_spreadsheet`
- `update_cells`

**Note:** If neither `--include-tools` nor `ENABLED_TOOLS` is specified, all tools are enabled (default behavior).

---

## 🛠️ Available Tools & Resources

This server exposes the following tools for interacting with Google Sheets:

_Refer to the [ID Reference Guide](#-id-reference-guide) for more information about the IDs used below._

*(Input parameters are typically strings unless otherwise specified)*

*   **`list_spreadsheets`**: Lists spreadsheets in the configured Drive folder (Service Account) or accessible by the user (OAuth).
    *   `folder_id` (optional string): Google Drive folder ID to search in. Get from its URL. If omitted, uses the configured default folder or searches 'My Drive'.
    *   _Returns:_ List of objects `[{id: string, title: string}]`
*   **`create_spreadsheet`**: Creates a new spreadsheet.
    *   `title` (string): The desired title for the spreadsheet. Example: "Quarterly Report Q4".
    *   `folder_id` (optional string): Google Drive folder ID where the spreadsheet should be created. Get from its URL. If omitted, uses configured default or root.
    *   _Returns:_ Object with spreadsheet info, including `spreadsheetId`, `title`, and `folder`.
*   **`get_sheet_data`**: Reads data from a range in a sheet/tab.
    *   `spreadsheet_id` (string): The spreadsheet ID (from its URL).
    *   `sheet` (string): Name of the sheet/tab (e.g., "Sheet1").
    *   `range` (optional string): A1 notation (e.g., `'A1:C10'`, `'Sheet1!B2:D'`). If omitted, reads the whole sheet/tab specified by `sheet`.
    *   `include_grid_data` (optional boolean, default `False`): If `True`, returns full grid data including formatting and metadata (much larger). If `False`, returns values only (more efficient).
    *   _Returns:_ If `include_grid_data=True`, full grid data with metadata ([`get` response](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/get#response-body)). If `False`, a values result object from the Values API ([`values.get` response](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/get#response-body)).
*   **`get_sheet_formulas`**: Reads formulas from a range in a sheet/tab.
    *   `spreadsheet_id` (string): The spreadsheet ID (from its URL).
    *   `sheet` (string): Name of the sheet/tab (e.g., "Sheet1").
    *   `range` (optional string): A1 notation (e.g., `'A1:C10'`, `'Sheet1!B2:D'`). If omitted, reads all formulas in the sheet/tab specified by `sheet`.
    *   _Returns:_ 2D array of cell formulas (array of arrays) ([`values.get` response](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/get#response-body)).
*   **`update_cells`**: Writes data to a specific range. Overwrites existing data.
    *   `spreadsheet_id` (string): The spreadsheet ID (from its URL).
    *   `sheet` (string): Name of the sheet/tab (e.g., "Sheet1").
    *   `range` (string): A1 notation range to write to (e.g., 'A1:C3').
    *   `data` (array of arrays): 2D array of values to write. Example: `[[1, 2, 3], ["a", "b", "c"]]`.
    *   _Returns:_ Update result object ([`values.update` response](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/update#response-body)).
*   **`batch_update_cells`**: Updates multiple ranges in one API call.
    *   `spreadsheet_id` (string): The spreadsheet ID (from its URL).
    *   `sheet` (string): Name of the sheet/tab (e.g., "Sheet1").
    *   `ranges` (object): Dictionary mapping range strings (A1 notation) to 2D arrays of values. Example: `{ "A1:B2": [[1, 2], [3, 4]], "D5": [["Hello"]] }`.
    *   _Returns:_ Result of the operation ([`values.batchUpdate` response](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdate#response-body)).
*   **`add_rows`**: Adds (inserts) empty rows to a sheet/tab at a specified index.
    *   `spreadsheet_id` (string): The spreadsheet ID (from its URL).
    *   `sheet` (string): Name of the sheet/tab (e.g., "Sheet1").
    *   `count` (integer): Number of empty rows to insert.
    *   `start_row` (optional integer, default `0`): 0-based row index to start inserting rows. If omitted, defaults to `0` (inserts at the beginning).
    *   _Returns:_ Result of the operation ([`batchUpdate` response](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate#response-body)).
*   **`list_sheets`**: Lists all sheet/tab names within a spreadsheet.
    *   `spreadsheet_id` (string): The spreadsheet ID (from its URL).
    *   _Returns:_ List of sheet/tab name strings. Example: `["Sheet1", "Sheet2"]`.
*   **`create_sheet`**: Adds a new sheet/tab to a spreadsheet.
    *   `spreadsheet_id` (string): The spreadsheet ID (from its URL).
    *   `title` (string): Name for the new sheet/tab.
    *   _Returns:_ New sheet properties object.
*   **`get_multiple_sheet_data`**: Fetches data from multiple ranges across potentially different spreadsheets in one call.
    *   `queries` (array of objects): Each object needs `spreadsheet_id`, `sheet`, and `range`. Example: `[{"spreadsheet_id": "abc", "sheet": "Sheet1", "range": "A1:B2"}, ...]`.
    *   _Returns:_ List of objects, each containing the query params and fetched `data` or an `error`. Each `data` is a [`values.get` response](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/get#response-body).
*   **`get_multiple_spreadsheet_summary`**: Gets titles, sheet/tab names, headers, and first few rows for multiple spreadsheets.
    *   `spreadsheet_ids` (array of strings): IDs of the spreadsheets (from their URLs).
    *   `rows_to_fetch` (optional integer, default `5`): How many rows (including header) to preview. Example: `5`.
    *   _Returns:_ List of summary objects for each spreadsheet.
*   **`share_spreadsheet`**: Shares a spreadsheet with specified users/emails and roles.
    *   `spreadsheet_id` (string): The spreadsheet ID (from its URL).
    *   `recipients` (array of objects): `[{"email_address": "user@example.com", "role": "writer"}, ...]`. Roles: `reader`, `commenter`, `writer`.
    *   `send_notification` (optional boolean, default `True`): Send email notifications to recipients.
    *   _Returns:_ Dictionary with `successes` and `failures` lists.
*   **`add_columns`**: Adds (inserts) empty columns to a sheet/tab at a specified index.
    *   `spreadsheet_id` (string): The spreadsheet ID (from its URL).
    *   `sheet` (string): Name of the sheet/tab (e.g., "Sheet1").
    *   `count` (integer): Number of empty columns to insert.
    *   `start_column` (optional integer, default `0`): 0-based column index to start inserting. If omitted, defaults to `0` (inserts at the beginning).
    *   _Returns:_ Result of the operation ([`batchUpdate` response](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate#response-body)).
*   **`copy_sheet`**: Duplicates a sheet/tab from one spreadsheet to another and optionally renames it.
    *   `src_spreadsheet` (string): Source spreadsheet ID (from its URL).
    *   `src_sheet` (string): Source sheet/tab name (e.g., "Sheet1").
    *   `dst_spreadsheet` (string): Destination spreadsheet ID (from its URL).
    *   `dst_sheet` (string): Desired sheet/tab name in the destination spreadsheet.
    *   _Returns:_ Result of the copy and optional rename operations.
*   **`rename_sheet`**: Renames an existing sheet/tab.
    *   `spreadsheet` (string): The spreadsheet ID (from its URL).
    *   `sheet` (string): Current sheet/tab name (e.g., "Sheet1").
    *   `new_name` (string): New sheet/tab name (e.g., "Transactions").
    *   _Returns:_ Result of the operation ([`batchUpdate` response](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate#response-body)).
*   **`add_chart`**: Creates a chart in a Google Spreadsheet from specified data.
    *   `spreadsheet_id` (string): The spreadsheet ID (from its URL).
    *   `sheet` (string): Name of the sheet/tab containing the data (e.g., "Sheet1").
    *   `chart_type` (string): Type of chart to create. Options: `COLUMN` (vertical bars), `BAR` (horizontal bars), `LINE`, `AREA`, `PIE`, `SCATTER`, `COMBO`, `HISTOGRAM`.
    *   `data_range` (string): A1 notation range for the chart data (e.g., "A1:C10"). First row is treated as headers.
    *   `title` (optional string): Chart title.
    *   `x_axis_label` (optional string): Label for the X axis (bottom axis). Not applicable for pie charts.
    *   `y_axis_label` (optional string): Label for the Y axis (left axis). Not applicable for pie charts.
    *   `position_x` (optional integer, default `0`): Horizontal position offset in pixels from the top-left corner.
    *   `position_y` (optional integer, default `0`): Vertical position offset in pixels from the top-left corner.
    *   `width` (optional integer, default `600`): Width of the chart in pixels.
    *   `height` (optional integer, default `400`): Height of the chart in pixels.
    *   _Returns:_ Result object with success status, chart ID, and operation details.

**MCP Resources:**

*   **`spreadsheet://{spreadsheet_id}/info`**: Get basic metadata about a Google Spreadsheet.
    *   _Returns:_ JSON string with spreadsheet information.

---

## ☁️ Google Cloud Platform Setup (Detailed)

This setup is **required** before running the server.

1.  **Create/Select a GCP Project:** Go to the [Google Cloud Console](https://console.cloud.google.com/).
2.  **Enable APIs:** Navigate to "APIs & Services" -> "Library". Search for and enable:
    *   `Google Sheets API`
    *   `Google Drive API`
3.  **Configure Credentials:** You need to choose *one* authentication method below (Service Account is recommended).

---

## 🔑 Authentication & Environment Variables (Detailed)

The server needs credentials to access Google APIs. Choose one method:

_Refer to the [ID Reference Guide](#-id-reference-guide) for more information about the IDs used below._

### Method A: Service Account (Recommended for Servers/Automation) ✅

*   **Why?** Headless (no browser needed), secure, ideal for server environments. Doesn't expire easily.
*   **Steps:**
    1.  **Create Service Account:** In GCP Console -> "IAM & Admin" -> "Service Accounts".
        *   Click "+ CREATE SERVICE ACCOUNT". Name it (e.g., `mcp-sheets-service`).
        *   Grant Roles: Add `Editor` role for broad access, or more granular roles (like `roles/drive.file` and specific Sheets roles) for stricter permissions.
        *   Click "Done". Find the account, click Actions (⋮) -> "Manage keys".
        *   Click "ADD KEY" -> "Create new key" -> **JSON** -> "CREATE".
        *   **Download and securely store** the JSON key file.
    2.  **Create & Share Google Drive Folder:**
        *   In [Google Drive](https://drive.google.com/), create a folder (e.g., "AI Managed Sheets").
        *   Note the **Folder ID** from the URL: `https://drive.google.com/drive/folders/THIS_IS_THE_FOLDER_ID`.
        *   Right-click the folder -> "Share" -> "Share".
        *   Enter the Service Account's email (from the JSON file `client_email`).
        *   Grant **Editor** access. Uncheck "Notify people". Click "Share".
    3.  **Set Environment Variables:**
        *   `SERVICE_ACCOUNT_PATH`: Full path to the downloaded JSON key file.
        *   `DRIVE_FOLDER_ID`: The ID of the shared Google Drive folder.
        *(See [Ultra Quick Start](#-ultra-quick-start-using-uvx) for OS-specific examples)*

### Method B: OAuth 2.0 (Interactive / Personal Use) 🧑‍💻

*   **Why?** For personal use or local development where interactive browser login is okay.
*   **Steps:**
    1.  **Configure OAuth Consent Screen:** In GCP Console -> "APIs & Services" -> "OAuth consent screen". Select "External", fill required info, add scopes (`.../auth/spreadsheets`, `.../auth/drive`), add test users if needed.
    2.  **Create OAuth Client ID:** In GCP Console -> "APIs & Services" -> "Credentials". "+ CREATE CREDENTIALS" -> "OAuth client ID" -> Type: **Desktop app**. Name it. "CREATE". **Download JSON**.
    3.  **Set Environment Variables:**
        *   `CREDENTIALS_PATH`: Path to the downloaded OAuth credentials JSON file (default: `credentials.json`).
        *   `TOKEN_PATH`: Path to store the user's refresh token after first login (default: `token.json`). Must be writable.

### Method C: Direct Credential Injection (Advanced) 🔒

*   **Why?** Useful in environments like Docker, Kubernetes, or CI/CD where managing files is hard, but environment variables are easy/secure. Avoids file system access.
*   **How?** Instead of providing a *path* to the credentials file, you provide the *content* of the file, encoded in Base64, directly in an environment variable.
*   **Steps:**
    1.  **Get your credentials JSON file** (either Service Account key or OAuth Client ID file). Let's call it `your_credentials.json`.
    2.  **Generate the Base64 string:**
        *   **(Linux/macOS):** `base64 -w 0 your_credentials.json`
        *   **(Windows PowerShell):**
            ```powershell
            $filePath = "C:\path\to\your_credentials.json"; # Use actual path
            $bytes = [System.IO.File]::ReadAllBytes($filePath);
            $base64 = [System.Convert]::ToBase64String($bytes);
            $base64 # Copy this output
            ```
        *   **(Caution):** Avoid pasting sensitive credentials into untrusted online encoders.
    3.  **Set the Environment Variable:**
        *   `CREDENTIALS_CONFIG`: Set this variable to the **full Base64 string** you just generated.
            ```bash
            # Example (Linux/macOS) - Use the actual string generated
            export CREDENTIALS_CONFIG="ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb..."
            ```

### Method D: Application Default Credentials (ADC) 🌐

*   **Why?** Ideal for Google Cloud environments (GKE, Compute Engine, Cloud Run) and local development with `gcloud auth application-default login`. No explicit credential files needed.
*   **How?** Uses Google's Application Default Credentials chain to automatically discover credentials from multiple sources.
*   **ADC Search Order:**
    1.  `GOOGLE_APPLICATION_CREDENTIALS` environment variable (path to service account key) - **Google's standard variable**
    2.  `gcloud auth application-default login` credentials (local development)
    3.  Attached service account from metadata server (GKE, Compute Engine, etc.)
*   **Setup:**
    *   **Local Development:** 
        1. Run `gcloud auth application-default login --scopes=https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/spreadsheets,https://www.googleapis.com/auth/drive` once
        2. Set a quota project: `gcloud auth application-default set-quota-project <project_id>` (replace `<project_id>` with your Google Cloud project ID)
    *   **Google Cloud:** Attach a service account to your compute resource
    *   **Environment Variable:** Set `GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account.json` (Google's standard)
*   **No additional environment variables needed** - ADC is used automatically as a fallback when other methods fail.

**Note:** `GOOGLE_APPLICATION_CREDENTIALS` is Google's official standard environment variable, while `SERVICE_ACCOUNT_PATH` is specific to this MCP server. If you set `GOOGLE_APPLICATION_CREDENTIALS`, ADC will find it automatically.

### Authentication Priority & Summary

The server checks for credentials in this order:

1.  `CREDENTIALS_CONFIG` (Base64 content)
2.  `SERVICE_ACCOUNT_PATH` (Path to Service Account JSON)
3.  `CREDENTIALS_PATH` (Path to OAuth JSON) - triggers interactive flow if token is missing/expired
4.  **Application Default Credentials (ADC)** - automatic fallback

**Environment Variable Summary:**

| Variable                         | Method(s)                   | Description                                                      | Default            |
|:---------------------------------|:----------------------------|:-----------------------------------------------------------------|:-------------------|
| `SERVICE_ACCOUNT_PATH`           | Service Account             | Path to the Service Account JSON key file (MCP server specific). | -                  |
| `GOOGLE_APPLICATION_CREDENTIALS` | ADC                         | Path to service account key (Google's standard variable).        | -                  |
| `DRIVE_FOLDER_ID`                | Service Account             | ID of the Google Drive folder shared with the Service Account.   | -                  |
| `CREDENTIALS_PATH`               | OAuth 2.0                   | Path to the OAuth 2.0 Client ID JSON file.                       | `credentials.json` |
| `TOKEN_PATH`                     | OAuth 2.0                   | Path to store the generated OAuth token.                         | `token.json`       |
| `CREDENTIALS_CONFIG`             | Service Account / OAuth 2.0 | Base64 encoded JSON string of credentials content.               | -                  |

---

## ⚙️ Running the Server (Detailed)

_Refer to the [ID Reference Guide](#-id-reference-guide) for more information about the IDs used below._

### Method 1: Using `uvx` (Recommended for Users)

As shown in the [Ultra Quick Start](#-ultra-quick-start-using-uvx), this is the easiest way. Set environment variables, then run:

```bash
uvx mcp-google-sheets@latest
```
`uvx` handles fetching and running the package temporarily.

### Method 2: For Development (Cloning the Repo)

If you want to modify the code:

1.  **Clone:** `git clone https://github.com/yourusername/mcp-google-sheets.git && cd mcp-google-sheets` (Use actual URL)
2.  **Set Environment Variables:** As described above.
3.  **Run using `uv`:** (Uses the local code)
    ```bash
    uv run mcp-google-sheets
    # Or via the script name if defined in pyproject.toml, e.g.:
    # uv run start
    ```

### Method 3: Docker (SSE transport)

Run the server in a container using the included `Dockerfile`:

```bash
# Build the image
docker build -t mcp-google-sheets .

# Run (SSE on port 8000)
# NOTE: Prefer CREDENTIALS_CONFIG (Base64 credentials content) in containers.
docker run --rm -p 8000:8000 ^
  -e HOST=0.0.0.0 ^
  -e PORT=8000 ^
  -e CREDENTIALS_CONFIG=YOUR_BASE64_CREDENTIALS ^
  -e DRIVE_FOLDER_ID=YOUR_DRIVE_FOLDER_ID ^
  mcp-google-sheets
```

- Use `CREDENTIALS_CONFIG` instead of `SERVICE_ACCOUNT_PATH` inside Docker to avoid mounting secrets as files.
- The container starts with `--transport sse` and listens on `HOST`/`PORT`. Point your MCP client to `http://localhost:8000` using SSE transport.

---

## 🔌 Usage with Claude Desktop

Add the server config to `claude_desktop_config.json` under `mcpServers`. Choose the block matching your setup:

_Refer to the [ID Reference Guide](#-id-reference-guide) for more information about the IDs used below._

**⚠️ Important Notes:**
- **🍎 macOS Users:** use the full path: `"/Users/yourusername/.local/bin/uvx"` instead of just `"uvx"`

<details>
<summary>🔵 Config: uvx + Service Account (Recommended)</summary>

```json
{
  "mcpServers": {
    "google-sheets": {
      "command": "uvx",
      "args": ["mcp-google-sheets@latest"],
      "env": {
        "SERVICE_ACCOUNT_PATH": "/full/path/to/your/service-account-key.json",
        "DRIVE_FOLDER_ID": "your_shared_folder_id_here"
      }
    }
  }
}
```

**🍎 macOS Note:** If you get a `spawn uvx ENOENT` error, use the full path to `uvx`:
```json
{
  "mcpServers": {
    "google-sheets": {
      "command": "/Users/yourusername/.local/bin/uvx",
      "args": ["mcp-google-sheets@latest"],
      "env": {
        "SERVICE_ACCOUNT_PATH": "/full/path/to/your/service-account-key.json",
        "DRIVE_FOLDER_ID": "your_shared_folder_id_here"
      }
    }
  }
}
```
*Replace `yourusername` with your actual username.*
</details>

<details>
<summary>🔵 Config: uvx + OAuth 2.0</summary>

```json
{
  "mcpServers": {
    "google-sheets": {
      "command": "uvx",
      "args": ["mcp-google-sheets@latest"],
      "env": {
        "CREDENTIALS_PATH": "/full/path/to/your/credentials.json",
        "TOKEN_PATH": "/full/path/to/your/token.json"
      }
    }
  }
}
```
*Note: A browser may open for Google login on first use. Ensure TOKEN_PATH is writable.*

**🍎 macOS Note:** If you get a `spawn uvx ENOENT` error, replace `"command": "uvx"` with `"command": "/Users/yourusername/.local/bin/uvx"` (replace `yourusername` with your actual username).
</details>

<details>
<summary>🔵 Config: uvx + CREDENTIALS_CONFIG (Service Account Example)</summary>

```json
{
  "mcpServers": {
    "google-sheets": {
      "command": "uvx",
      "args": ["mcp-google-sheets@latest"],
      "env": {
        "CREDENTIALS_CONFIG": "ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAi...",
        "DRIVE_FOLDER_ID": "your_shared_folder_id_here"
      }
    }
  }
}
```
*Note: Paste the full Base64 string for CREDENTIALS_CONFIG. DRIVE_FOLDER_ID is still needed for Service Account folder context.*

**🍎 macOS Note:** If you get a `spawn uvx ENOENT` error, replace `"command": "uvx"` with `"command": "/Users/yourusername/.local/bin/uvx"` (replace `yourusername` with your actual username).
</details>

<details>
<summary>🔵 Config: uvx + Application Default Credentials (ADC)</summary>

**Option 1: With GOOGLE_APPLICATION_CREDENTIALS**
```json
{
  "mcpServers": {
    "google-sheets": {
      "command": "uvx",
      "args": ["mcp-google-sheets@latest"],
      "env": {
        "GOOGLE_APPLICATION_CREDENTIALS": "/path/to/service-account.json"
      }
    }
  }
}
```

**Option 2: With gcloud auth (no env vars needed)**
```json
{
  "mcpServers": {
    "google-sheets": {
      "command": "uvx",
      "args": ["mcp-google-sheets@latest"],
      "env": {}
    }
  }
}
```
*Prerequisites:* 
1. *Run `gcloud auth application-default login --scopes=https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/spreadsheets,https://www.googleapis.com/auth/drive` first.*
2. *Set quota project: `gcloud auth application-default set-quota-project <project_id>`*

**🍎 macOS Note:** If you get a `spawn uvx ENOENT` error, replace `"command": "uvx"` with `"command": "/Users/yourusername/.local/bin/uvx"` (replace `yourusername` with your actual username).
</details>

<details>
<summary>🟡 Config: Development (Running from cloned repo)</summary>

```json
{
  "mcpServers": {
    "mcp-google-sheets-local": {
      "command": "uv",
      "args": [
        "run",
        "--directory",
        "/path/to/your/mcp-google-sheets",
        "mcp-google-sheets"
      ],
      "env": {
        "SERVICE_ACCOUNT_PATH": "/path/to/your/mcp-google-sheets/service_account.json",
        "DRIVE_FOLDER_ID": "your_drive_folder_id_here"
      }
    }
  }
}
```
*Note: Use `--directory` flag to specify the project path, and adjust paths to match your actual workspace location.*
</details>

---

## 💬 Example Prompts for Claude

Once connected, try prompts like:

*   "List all spreadsheets I have access to." (or "in my AI Managed Sheets folder")
*   "Create a new spreadsheet titled 'Quarterly Sales Report Q3 2024'."
*   "In the 'Quarterly Sales Report' spreadsheet, get the data from Sheet1 range A1 to E10."
*   "Add a new sheet named 'Summary' to the spreadsheet with ID `1aBcDeFgHiJkLmNoPqRsTuVwXyZ`."
*   "In my 'Project Tasks' spreadsheet, Sheet 'Tasks', update cell B2 to 'In Progress'."
*   "Append these rows to the 'Log' sheet in spreadsheet `XYZ`: `[['2024-07-31', 'Task A Completed'], ['2024-08-01', 'Task B Started']]`"
*   "Get a summary of the spreadsheets 'Sales Data' and 'Inventory Count'."
*   "Share the 'Team Vacation Schedule' spreadsheet with `team@example.com` as a reader and `manager@example.com` as a writer. Don't send notifications."
*   "Create a column chart in my 'Sales Report' spreadsheet showing monthly revenue from data in range A1:B13."
*   "Add a pie chart to the 'Market Analysis' sheet with data from A1:B5 titled 'Market Share by Product'."
*   "In spreadsheet `abc123`, create a line chart on Sheet1 from range A1:C10 with title 'Growth Trends' and labels 'Month' and 'Revenue'."

---

## 🆔 ID Reference Guide

Use the following reference guide to find the various IDs referenced throughout the docs:

```
Google Cloud Project ID:
  https://console.cloud.google.com/apis/dashboard?project=sheets-mcp-server-123456
                                                          └───── Project ID ─────┘

Google Drive Folder ID:
  https://drive.google.com/drive/u/0/folders/1xcRQCU9xrNVBPTeNzHqx4hrG7yR91WIa
                                             └────────── Folder ID ──────────┘

Google Sheets Spreadsheet ID:
  https://docs.google.com/spreadsheets/d/25_-_raTaKjaVxu9nJzA7-FCrNhnkd3cXC54BPAOXemI/edit
                                         └───────────── Spreadsheet ID ─────────────┘
```

---

## 🤝 Contributing

Contributions are welcome! Please open an issue to discuss bugs or feature requests. Pull requests are appreciated.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Credits

*   Built with [FastMCP](https://github.com/cognitiveapis/fastmcp).
*   Inspired by [kazz187/mcp-google-spreadsheet](https://github.com/kazz187/mcp-google-spreadsheet).
*   Uses Google API Python Client libraries.
