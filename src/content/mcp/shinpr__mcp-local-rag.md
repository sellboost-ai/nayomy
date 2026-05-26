---
name: "shinpr/mcp-local-rag"
description: "Privacy-first document search server running entirely locally. Supports semantic search over PDFs, DOCX, TXT, and Markdown files with LanceDB vector storage and local embeddings - no API keys or cloud services required."
description_tr: "Gizlilik odaklı, tamamen yerel çalışan doküman arama sunucusu. PDF, DOCX, TXT ve Markdown dosyaları üzerinde LanceDB vector storage ve yerel embeddings kullanarak semantic search destekler - hiçbir API key veya bulut servisi gerekmez."
category: "Knowledge & Memory"
repo: "shinpr/mcp-local-rag"
stars: 280
url: "https://github.com/shinpr/mcp-local-rag"
body_length: 28568
license: "MIT"
language: "TypeScript"
body_tr: |-
  <p align="center">
    
  </p>

  # MCP Local RAG

  [![GitHub stars](https://img.shields.io/github/stars/shinpr/mcp-local-rag?style=social)](https://github.com/shinpr/mcp-local-rag)
  [![npm version](https://img.shields.io/npm/v/mcp-local-rag.svg)](https://www.npmjs.com/package/mcp-local-rag)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![MCP Registry](https://img.shields.io/badge/MCP-Registry-green.svg)](https://registry.modelcontextprotocol.io/)

  Geliştiriciler için yerel RAG, MCP veya CLI aracılığıyla.
  Tam teknik terimler için anahtar kelime güçlendirmesi ile anlamsal arama — tamamen özel, kurulum sıfır.

  ## Özellikler

  - **Anahtar kelime güçlendirmesi ile anlamsal arama**
    Önce vektör araması, ardından anahtar kelime eşleşmesi tam eşleşmeleri artırır. `useEffect`, hata kodları ve sınıf adları gibi terimler — sadece anlamsal olarak tahmin edilmekten çok daha yüksek sıralanır.

  - **Akıllı anlamsal bölümleme**
    Belgeleri karakter sayısına göre değil, anlama göre parçalara böler. Doğal konu sınırlarını bulmak için gömme benzerliğini kullanır — ilgili içeriği bir arada tutar ve konular değiştiğinde böler.

  - **Kalite odaklı sonuç filtreleme**
    Sonuçları keyfi top-K cutoff'ları yerine uygunluk boşluklarına göre gruplandırır. Daha az ama daha güvenilir parçalar alın.

  - **Tamamen yerel olarak çalışır**
    API anahtarı, bulut veya makinenizden çıkan veriler yok. İlk model indirilmesinden sonra tamamen çevrimdışı çalışır.

  - **Sıfır kurulum karmaşıklığı**
    Tek `npx` komutu. Docker, Python, yönetilecek sunucu yok.
    MCP, CLI veya her ikisini kullanın. İsteğe bağlı [Agent Skills](#agent-skills), AI asistanlarının daha iyi sorgular oluşturmasına ve sonuçları yorumlamasına yardımcı olur.

  ## Hızlı Başlangıç

  `BASE_DIR` öğesini araştırmak istediğiniz klasöre ayarlayın (veya birden fazla kök için `BASE_DIRS` — bkz. [Yapılandırma](#yapılandırma)). Belgeler yapılandırılan köklerin biri altında yaşamalıdır.

  MCP sunucusunu AI kodlama aracınıza ekleyin:

  **Cursor için** — `~/.cursor/mcp.json` dosyasına ekleyin:
  ```json
  {
    "mcpServers": {
      "local-rag": {
        "command": "npx",
        "args": ["-y", "mcp-local-rag"],
        "env": {
          "BASE_DIR": "/path/to/your/documents"
        }
      }
    }
  }
  ```

  **Codex için** — `~/.codex/config.toml` dosyasına ekleyin:
  ```toml
  [mcp_servers.local-rag]
  command = "npx"
  args = ["-y", "mcp-local-rag"]

  [mcp_servers.local-rag.env]
  BASE_DIR = "/path/to/your/documents"
  ```

  **Claude Code için** — bu komutu çalıştırın:
  ```bash
  claude mcp add local-rag --scope user --env BASE_DIR=/path/to/your/documents -- npx -y mcp-local-rag
  ```

  Aracınızı yeniden başlatın, ardından kullanmaya başlayın:

  ```
  Siz: "Ingest api-spec.pdf"
  Asistan: Successfully ingested api-spec.pdf (47 chunks created)

  Siz: "API belgeleri kimlik doğrulama hakkında ne diyor?"
  Asistan: Belgelendirmeye göre, kimlik doğrulama JWT belirteçleriyle OAuth 2.0 kullanır.
            Akış bölüm 3.2'de açıklanmıştır...
  ```

  **Veya doğrudan CLI olarak kullanın** — MCP sunucusu gerekmez:

  ```bash
  npx mcp-local-rag ingest ./docs/
  npx mcp-local-rag query "authentication API"
  ```

  Bu kadar. Docker, Python, sunucu kurulumu yok.

  ## Neden Var

  AI'ın belgelerinizi aramasını istiyorsunuz — teknik spesifikasyonlar, araştırma makaleleri, iç belgeler. Ancak çoğu çözüm dosyalarınızı harici API'lere gönderir.

  **Gizlilik.** Belgeleriniz hassas veriler içerebilir. Bu tamamen yerel olarak çalışır.

  **Maliyet.** Harici gömme API'leri kullanım başına ücret alır. İlk model indirilmesinden sonra bu ücretsizdir.

  **Çevrimdışı.** Kurulumdan sonra internet olmadan çalışır.

  **Kod araması.** Saf anlamsal arama `useEffect` veya `ERR_CONNECTION_REFUSED` gibi kesin terimleri kaçırır. Anahtar kelime güçlendirmesi hem anlam hem de tam eşleşmeleri yakalar.

  **Agent gerçekliği.** Uygulamada, birçok AI ortamı öncelikle araç çağrısını kullanır. CLI desteği ve Agent Skills, tam MCP entegrasyonu olmasa bile aynı iş akışlarını kullanılabilir hale getirir.

  ## Kullanım

  mcp-local-rag iki arayüz sağlar: AI kodlama araçları için bir **MCP sunucusu** ve terminalde doğrudan kullanım için bir **CLI**.

  ### MCP ile Kullanım

  MCP sunucusu 7 araç sağlar: `ingest_file`, `ingest_data`, `query_documents`, `read_chunk_neighbors`, `list_files`, `delete_file`, `status`.

  #### Belgeleri İçe Aktarma

  ```
  "Ingest the document at /Users/me/docs/api-spec.pdf"
  ```

  PDF, DOCX, TXT ve Markdown'ı destekler. Sunucu metni çıkarır, parçalara böler, gömmeleri yerel olarak oluşturur ve her şeyi yerel bir vektör veritabanında depolar.

  Aynı dosyayı yeniden içe aktarmak eski versiyonu otomatik olarak değiştirir.

  ##### Şekillerle PDF'leri içe aktarma (görsel modu)

  Grafikler, tablolar veya diyagramlar içeren PDF'ler, isteğe bağlı olarak belge dizinine yerel VLM tarafından oluşturulan başlıklar ekleyebilir ve görsel içeriği aynı vektör + FTS işlem hattında aranabilir bir temsile verir. Başlıklar yardımcı metin — görüntü araması, OCR ve şekil dökümleme değildir.

  **MCP aracılığıyla**:
  ```
  "Ingest /Users/me/docs/api-spec.pdf with visual: true"
  ```

  **CLI aracılığıyla**:
  ```bash
  npx mcp-local-rag ingest ./docs/spec.pdf --visual
  ```

  Her başlık, sayfa gövdesi parçalarının yanında `[Visual content on page N: …]` zarfı ile kendi parçası olarak yayınlanır. Mevcut gömmeci ve FTS dizininden geçer — şema farkı, ayrı dizin yoktur.

  Görsel modu opt-in; normal içe aktarma VLM yüklemez. Sayfa başına VLM hataları tolere edilir — o sayfa yalnızca metinle ilerler.

  ###### Görsel kalite profili seçme

  Görsel modu iki profil sunar, her içe aktarma çağrısı başına seçilir:

  | Profil | Model | Disk (önbellek) | Sayfa başına ılımlama | Uygun |
  |---|---|---|---|---|
  | `fast` (varsayılan) | `HuggingFaceTB/SmolVLM-256M-Instruct` | ~250 MB | temel | Hafif görsel dizinleme, hızlı ilk çalıştırma kurulumu. |
  | `quality` | `onnx-community/Qwen2.5-VL-3B-Instruct-ONNX` | ~2,9 GB | ~2× `fast` | Başlık sadakati önem taşıyan eksen etiketleri, panel alt-etiketleri, açıklamalar gibi görüntü içi metni olan şekiller. |

  Yukarıdaki sayılar, proje sondası PDF'leri üzerinde geliştirme sırasında CPU'da ölçülür; model güncellemeleriyle değişebilir veya donanımınızda farklı olabilir.

  **MCP aracılığıyla** — `ingest_file` isteğe bağlı bir `visualQuality` parametresini kabul eder (enum: `'fast' | 'quality'`, varsayılan `'fast'`; `visual` yanlış olduğunda yoksayılır):
  ```
  "Ingest /Users/me/docs/research-paper.pdf with visual: true and visualQuality: 'quality'"
  ```

  **CLI aracılığıyla** — `--visual-quality fast|quality` (varsayılan `fast`; `--visual` olmadığında sessizce yoksayılır):
  ```bash
  npx mcp-local-rag ingest ./docs/research-paper.pdf --visual --visual-quality quality
  ```

  Profil modeli tanımlayıcıları ve nicemleme varyantları sürüm başına sabitlenir. Her iki profil aynı `CACHE_DIR` paylaşır (varsayılan: `./models/`); her profildeki ilk çalıştırma modeli indirir.

  > **v0.14.0 sürümünden davranış değişikliği**: Başlıklar artık chunking öncesi sayfa metnine eklenmek yerine ayrılmış parçalar olarak yayınlanır. Yan etki olarak, görsel içe aktarımlar için `metadata.fileSize` artık başlık karakter sayısını içermez — yalnızca çıkarma sonrası gövde uzunluğunu ölçer. Temel alınan PDF değişmez; görsel içe aktarılan PDF'ler için bildirilen `fileSize` sürüm sınırında küçülebilir.

  > **Güvenlik notu**: Görsel başlıklar PDF içeriklerinden türetilir ve saldırgı tarafından kontrol edilen metni miras alabilir. Aşağı akış LLM tüketicileri alınan parçaları güvenilmez veriler olarak değerlendirilmelidir, talimatlar olarak değil. `[Visual content on page N: …]` zarfı, tüketicilerin başlık metnini ayırt etmesine yardımcı olur.

  #### HTML İçeriğini İçe Aktarma

  AI asistanınız tarafından alınan HTML içeriğini (web getirme, curl, tarayıcı araçları vb. aracılığıyla) içe aktarmak için `ingest_data` kullanın:

  ```
  "Fetch https://example.com/docs and ingest the HTML"
  ```

  Sunucu, Readability kullanarak ana içeriği çıkarır (navigasyon, reklamlar vb. kaldırır), Markdown'a dönüştürür ve dizine ekler. Mükemmel:
  - Web belgelendirmesi
  - AI asistanı tarafından alınan HTML
  - Pano içeriği

  HTML otomatik olarak temizlenir — boilerplate değil, makale içeriğini alırsınız.

  > **Not:** RAG sunucusu web içeriği getirmez — AI asistanınız bunu alır ve HTML'yi `ingest_data` öğesine iletir. Bu, sunucuyu tamamen yerel tutarken asistanınızın erişebileceği herhangi bir içeriği dizine ekleyebilmenizi sağlar. Harici içerik içe aktarırken web sitesi hizmet şartlarına ve telif hakkına saygı gösterin.

  #### Belgeleri Arama

  ```
  "API belgeleri kimlik doğrulama hakkında ne diyor?"
  "Hız sınırlaması hakkında bilgi bulun"
  "Hata işleme en iyi uygulamaları arayın"
  ```

  Arama, anahtar kelime güçlendirmesi ile anlamsal benzerlik kullanır. Bu, `useEffect` tam eşleşmeleri bulur, sadece anlamsal olarak benzer React konseptleri değil.

  Sonuçlar metin içeriği, kaynak dosya, belge başlığı ve uygunluk puanını içerir. Belge başlığı her parça için bağlam sağlar, bir sonucun hangi belgeye ait olduğunu tanımlamaya yardımcı olur. `limit` (1-20, varsayılan 10) ile sonuç sayısını ayarlayın.

  #### Bir Sonucun Çevresindeki Bağlamı Genişletme

  Bir arama sonucu daha fazla çevre bağlamı gerektiğinde, çevresindeki parçaları okumak için `read_chunk_neighbors` kullanın:

  ```
  "Bu kimlik doğrulama sonucu uygun görünüyor — tam açıklama için çevre parçalarını oku"
  ```

  Arama sonucundan `filePath` ve `chunkIndex` iletişim kurun. Yanıt hedef parçayı (`isTarget: true` işaretli) ve komşularını, parça dizinine göre sıralanmış olarak içerir. Varsayılan olarak 2 parça öncesi ve 2 sonrası (her birine kadar 50'ye ayarlanabilir).

  #### Dosyaları Yönetme

  ```
  "Liste yapılandırılan temel dizinlerdeki tüm dosyalar ve içe aktarılan durumları"   # Ne dizine alındığını gör
  "RAG'den old-spec.pdf sil"     # Bir dosya kaldır
  "RAG sunucu durumunu göster"           # Sistem durumunu kontrol et
  ```

  ### CLI Olarak Kullanma

  Tüm MCP araçları aynı zamanda CLI komutları olarak da mevcuttur — MCP sunucusu gerekmez:

  ```bash
  npx mcp-local-rag ingest ./docs/               # Toplu dosya içe aktarma
  npx mcp-local-rag query "authentication API"    # Belgeleri ara
  npx mcp-local-rag read-neighbors --file-path /abs/path.md --chunk-index 5  # Bağlamı genişlet
  npx mcp-local-rag list                          # İçe aktarma durumunu göster
  npx mcp-local-rag status                        # Veritabanı istatistikleri
  npx mcp-local-rag delete ./docs/old.pdf         # İçeriği kaldır
  npx mcp-local-rag delete --source "https://..."  # Kaynak URL'ye göre kaldır
  ```

  `query`, `read-neighbors`, `list`, `status` ve `delete` stdout'a JSON çıkarmak (ör. `| jq`). `ingest` stderr'e ilerleme çıkarmak. Genel seçenekler (`--db-path`, `--cache-dir`, `--model-name`) komuttan önce gelir. Ayrıntılar için `npx mcp-local-rag --help` çalıştırın.

  > ⚠️ CLI, MCP istemci yapılandırmanızı (`mcp.json`, `config.toml` vb.) **okumuyor**. Aşağıda gösterildiği gibi CLI'yi bayraklar veya ortam değişkenleri aracılığıyla yapılandırın.

  #### Yapılandırma

  **CLI bayrakları** — genel seçenekler komuttan önce, komut seçenekleri sonra:

  ```bash
  npx mcp-local-rag --db-path ./my-db query "auth" --base-dir ./docs
  ```

  `--base-dir` bayrağı `ingest` ve `list` üzerinde tekrarlanabilir; kök başına bir kez iletişim kurun:

  ```bash
  npx mcp-local-rag ingest --base-dir ./docs --base-dir ./specs ./docs/readme.md
  npx mcp-local-rag list --base-dir ./docs --base-dir ./specs
  ```

  `ingest` için konumsal yol yapılandırılan köklerden birinin içinde oturmalıdır. En az bir `--base-dir` sağlandığında, CLI kökleri herhangi bir ortam-var kökünü değiştirir (birleştirme yoktur).

  **Ortam değişkenleri** — kabuğunuzda ayarlayın:

  ```bash
  export DB_PATH=./my-db
  export BASE_DIR=./docs
  npx mcp-local-rag query "auth"
  ```

  Birden fazla kök için, `BASE_DIRS` (JSON dizi boş olmayan yol dizelerinin):

  ```bash
  export BASE_DIRS='["/Users/me/Documents/work","/Users/me/Projects/specs"]'
  npx mcp-local-rag list
  ```

  **MCP ve CLI arasında yapılandırmayı paylaşma** — MCP istemciniz kabuk ortam değişkenlerini miras alırsa, bunları kabuk profilinizde (ör. `~/.zshrc`) ayarlayabilirsiniz, böylece her ikisi de aynı değerleri kullanır. Aksi takdirde, bunları MCP yapılandırmanızda da açıkça ayarlayın.

  ```bash
  export BASE_DIR=/path/to/your/documents
  export DB_PATH=/path/to/lancedb
  ```

  Yapılandırma bu sırayla çözülür:

  1. CLI bayrakları (en yüksek öncelik)
  2. Ortam değişkenleri
  3. Varsayılanlar

  CLI bayraklarının, ortam değişkenlerinin ve varsayılanların tam listesi için bkz. [Yapılandırma](#yapılandırma).

  CLI'si yapılandırma (MCP sunucusu yok), AI asistanınızın daha iyi sorgular oluşturmasına ve sonuçları tutarlı bir şekilde yorumlamasına yardımcı olacak [Agent Skills](#agent-skills) yükleyin.

  > ⚠️ **CLI `--model-name`, MCP sunucusunun `MODEL_NAME` ortam değişkeniyle eşleşmelidir.** Mevcut bir veritabanına karşı farklı bir gömme modeli kullanmak uyumsuz vektörler oluşturur, arama kalitesini sessizce düşürür.

  ## Araştırma Tuning

  Kullanım durumunuz için bunları ayarlayın:

  | Değişken | Varsayılan | Açıklama |
  |----------|---------|-------------|
  | `RAG_HYBRID_WEIGHT` | `0.6` | Anahtar kelime güçlendirme faktörü. 0 = yalnızca anlamsal, daha yüksek = daha güçlü anahtar kelime güçlendirmesi. |
  | `RAG_GROUPING` | (ayarlanmamış) | En üst grup için `similar`, üst 2 grup için `related`. |
  | `RAG_MAX_DISTANCE` | (ayarlanmamış) | Düşük ilgili sonuçları filtrele (ör. `0.5`). |
  | `RAG_MAX_FILES` | (ayarlanmamış) | Sonuçları en üst N dosya ile sınırla (ör. `1` en iyi dosya için). |

  ### Kod odaklı tuning

  Kodlar ve API spesifikasyonları için, tam tanımlayıcıların (`useEffect`, `ERR_*`, sınıf adları) sıralamaya hakim olması için anahtar kelime güçlendirmesini artırın:

  ```json
  "env": {
    "RAG_HYBRID_WEIGHT": "0.7",
    "RAG_GROUPING": "similar"
  }
  ```

  - `0.7` — dengeli anlamsal + anahtar kelime
  - `1.0` — saldırgan; kesin eşleşmeler sonuçları güçlü bir şekilde yeniden sıralar

  Anahtar kelime güçlendirmesi anlamsal filtrelemeden *sonra* uygulanır, bu nedenle kesin olmayan eşleşmeleri ortaya çıkarmadan hassasiyeti artırır.

  ## Nasıl Çalışır

  **TL;DR:**
  - Belgeler sabit karakter sayılarına göre değil, anlamsal benzerliğe göre bölümlenir
  - Her parça, Transformers.js kullanarak yerel olarak gömülür
  - Arama, kesin eşleşmeler için anahtar kelime güçlendirmesi ile anlamsal benzerlik kullanır
  - Sonuçlar ham puanlara değil, uygunluk boşluklarına dayalı olarak filtrelenir

  ### Ayrıntılar

  Bir belgeyi içe aktardığınızda, ayrıştırıcı dosya türüne göre metni çıkarır (PDF `mupdf` aracılığıyla, DOCX `mammoth` aracılığıyla, metin dosyaları doğrudan).

  Anlamsal chunker metni cümlelere böler, ardından bunları gömme benzerliğini kullanarak gruplandırır. Anlama kayması olduğu yerleri bulur — keyfi karakter sınırlarına kaymak yerine ilgili içeriği bir arada tutar. Bu, tipik olarak 500-1000 karakter olan anlam birimi olan parçalar üretir. Markdown kod blokları bozulmamış tutulur — hiç bir blok arasında bölünmez — arama sonuçlarında kopyalanabilir kodu korur.

  Her parça, Transformers.js gömme modeli (varsayılan: `all-MiniLM-L6-v2`, `MODEL_NAME` aracılığıyla yapılandırılabilir) aracılığıyla geçer, metni vektörlere dönüştürür. Vektörler, hiçbir sunucu işlemi gerektirmeyen dosya tabanlı bir vektör veritabanı olan LanceDB'de depolanır.

  Aradığınızda:
  1. Sorgunuz aynı modeli kullanarak bir vektör haline gelir
  2. Anlamsal (vektör) arama en uygun parçaları bulur
  3. Kalite filtreleri uygulanır (mesafe eşiği, gruplandırma)
  4. Anahtar kelime eşleşmeleri kesin terim eşleşmesi için sıralamaları artırır

  Anahtar kelime güçlendirmesi, `useEffect` veya hata kodları gibi kesin terimlerin eşleştiğinde daha yüksek sıralanmasını sağlar.

  ## Agent Skills

  [Agent Skills](https://agentskills.io/), AI asistanlarının RAG araçlarını daha etkili bir şekilde kullanmasına yardımcı olan optimize edilmiş istekler sağlar. Daha iyi sorgu formülasyonu, sonuç yorumu ve içe aktarma iş akışları için beceriler yükleyin:

  ```bash
  # Claude Code (proje düzeyi)
  npx mcp-local-rag skills install --claude-code

  # Claude Code (kullanıcı düzeyi)
  npx mcp-local-rag skills install --claude-code --global

  # Codex
  npx mcp-local-rag skills install --codex
  ```

  Beceriler:
  - **Sorgu optimizasyonu**: Daha iyi arama sorgusu formülasyonu
  - **Sonuç yorumu**: Puan eşikleri ve filtreleme yönergeleri
  - **HTML içe aktarma**: Format seçimi ve kaynak adlandırması

  ### Beceri Aktivasyonunu Sağlama

  Beceriler çoğu durumda otomatik olarak yüklenir — AI asistanları beceri meta verilerini tarar ve gerektiğinde ilgili talimatları yükler. Tutarlı davranış için:

  **Seçenek 1: Açık istek (doğal dil)**
  RAG işlemlerinden önce, doğal dilde isteyin:
  - "Bu arama için mcp-local-rag becerisini kullan"
  - "RAG en iyi uygulamalarını becerilerden uygula"

  **Seçenek 2: Agent talimatları dosyasına ekle**
  `AGENTS.md`, `CLAUDE.md` veya diğer agent talimatları dosyasına ekleyin:
  ```
  query_documents, ingest_file veya ingest_data araçlarını kullanırken,
  daha iyi sorgu formülasyonu ve sonuç yorumu için mcp-local-rag becerisini uygula.
  ```

  ## Yapılandırma

  ### Ortam Değişkenleri ve CLI Bayrakları

  MCP sunucusu yalnızca ortam değişkenleri tarafından yapılandırılır — bunları MCP istemcinizin `env` bloğu aracılığıyla iletişim kurun. CLI aynı ortam değişkenlerini artı eşdeğer bayrakları kabul eder (öncelik: CLI bayrağı > ortam > varsayılan). CLI bayrakları çıplak `mcp-local-rag` (MCP sunucusu) başlatmada kabul edilmez.

  | Ortam Değişkeni | CLI Bayrağı | Varsayılan | Açıklama |
  |---------------------|----------|---------|-------------|
  | `BASE_DIR` | `--base-dir` (tekrarlanabilir) | Geçerli dizin | Tekli belge kök dizini (güvenlik sınırı). Multi-kök kurulumu için [Belge Kökleri](#document-roots-base_dir-and-base_dirs) bölümüne bakın. |
  | `BASE_DIRS` | — | (ayarlanmamış) | Belge köklerinin JSON dizisi (güvenlik sınırı). `BASE_DIR` öğesinden önce gelir. Multi-kök kurulumu için [Belge Kökleri](#document-roots-base_dir-and-base_dirs) bölümüne bakın. |
  | `DB_PATH` | `--db-path` | `./lancedb/` | Vektör veritabanı konumu |
  | `CACHE_DIR` | `--cache-dir` | `./models/` | Model önbellek dizini |
  | `MODEL_NAME` | `--model-name` | `Xenova/all-MiniLM-L6-v2` | HuggingFace modeli ID ([mevcut modeller](https://huggingface.co/models?library=transformers.js&pipeline_tag=feature-extraction)) |
  | `MAX_FILE_SIZE` | `--max-file-size` | `104857600` (100MB) | Maksimum dosya boyutu bayt cinsinden |
  | `CHUNK_MIN_LENGTH` | `--chunk-min-length` | `50` | Minimum parça uzunluğu karakterler (1–10000) |
  | `RAG_DEVICE` | — | `cpu` | Yürütme cihazı. ONNX Runtime'a doğrudan iletilir. Desteklenen arka uç adlarının canlı listesi için [Transformers.js cihaz kaynak koduna](https://github.com/huggingface/transformers.js/blob/main/packages/transformers/src/utils/devices.js) bakın. Başlatma başarısız olursa, sunucu bir hata atar. |

  **Model seçim ipuçları:**
  - Çok dilli belgeler → ör. `onnx-community/embeddinggemma-300m-ONNX` (100+ dil)
  - Bilimsel makaleler → ör. `sentence-transformers/allenai-specter` (alıntı analizi)
  - Kod depoları → varsayılan sık yeterli; anahtar kelime güçlendirmesi daha önemli (veya `jinaai/jina-embeddings-v2-base-code`)

  ⚠️ `MODEL_NAME` değiştirmek gömme boyutlarını değiştirir. Modelleri değiştirdik
---

<p align="center">
  
</p>

# MCP Local RAG

[![GitHub stars](https://img.shields.io/github/stars/shinpr/mcp-local-rag?style=social)](https://github.com/shinpr/mcp-local-rag)
[![npm version](https://img.shields.io/npm/v/mcp-local-rag.svg)](https://www.npmjs.com/package/mcp-local-rag)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MCP Registry](https://img.shields.io/badge/MCP-Registry-green.svg)](https://registry.modelcontextprotocol.io/)

Local RAG for developers via MCP or CLI.
Semantic search with keyword boost for exact technical terms — fully private, zero setup.

## Features

- **Semantic search with keyword boost**
  Vector search first, then keyword matching boosts exact matches. Terms like `useEffect`, error codes, and class names rank higher—not just semantically guessed.

- **Smart semantic chunking**
  Chunks documents by meaning, not character count. Uses embedding similarity to find natural topic boundaries—keeping related content together and splitting where topics change.

- **Quality-first result filtering**
  Groups results by relevance gaps instead of arbitrary top-K cutoffs. Get fewer but more trustworthy chunks.

- **Runs entirely locally**
  No API keys, no cloud, no data leaving your machine. Works fully offline after the first model download.

- **Zero-friction setup**
  One `npx` command. No Docker, no Python, no servers to manage.
  Use via MCP, CLI, or both. Optional [Agent Skills](#agent-skills) help AI assistants form better queries and interpret results.

## Quick Start

Set `BASE_DIR` to the folder you want to search (or `BASE_DIRS` for multiple roots — see [Configuration](#configuration)). Documents must live under one of the configured roots.

Add the MCP server to your AI coding tool:

**For Cursor** — Add to `~/.cursor/mcp.json`:
```json
{
  "mcpServers": {
    "local-rag": {
      "command": "npx",
      "args": ["-y", "mcp-local-rag"],
      "env": {
        "BASE_DIR": "/path/to/your/documents"
      }
    }
  }
}
```

**For Codex** — Add to `~/.codex/config.toml`:
```toml
[mcp_servers.local-rag]
command = "npx"
args = ["-y", "mcp-local-rag"]

[mcp_servers.local-rag.env]
BASE_DIR = "/path/to/your/documents"
```

**For Claude Code** — Run this command:
```bash
claude mcp add local-rag --scope user --env BASE_DIR=/path/to/your/documents -- npx -y mcp-local-rag
```

Restart your tool, then start using it:

```
You: "Ingest api-spec.pdf"
Assistant: Successfully ingested api-spec.pdf (47 chunks created)

You: "What does the API documentation say about authentication?"
Assistant: Based on the documentation, authentication uses OAuth 2.0 with JWT tokens.
          The flow is described in section 3.2...
```

**Or use directly as CLI** — no MCP server needed:

```bash
npx mcp-local-rag ingest ./docs/
npx mcp-local-rag query "authentication API"
```

That's it. No Docker, no Python, no server setup.

## Why This Exists

You want AI to search your documents—technical specs, research papers, internal docs. But most solutions send your files to external APIs.

**Privacy.** Your documents might contain sensitive data. This runs entirely locally.

**Cost.** External embedding APIs charge per use. This is free after the initial model download.

**Offline.** Works without internet after setup.

**Code search.** Pure semantic search misses exact terms like `useEffect` or `ERR_CONNECTION_REFUSED`. Keyword boost catches both meaning and exact matches.

**Agent reality.** In practice, many AI environments mainly use tool calling. CLI support and Agent Skills make the same workflows available even without full MCP integration.

## Usage

mcp-local-rag provides two interfaces: an **MCP server** for AI coding tools and a **CLI** for direct use from the terminal.

### Using with MCP

The MCP server provides 7 tools: `ingest_file`, `ingest_data`, `query_documents`, `read_chunk_neighbors`, `list_files`, `delete_file`, `status`.

#### Ingesting Documents

```
"Ingest the document at /Users/me/docs/api-spec.pdf"
```

Supports PDF, DOCX, TXT, and Markdown. The server extracts text, splits it into chunks, generates embeddings locally, and stores everything in a local vector database.

Re-ingesting the same file replaces the old version automatically.

##### Ingesting PDFs with figures (visual mode)

PDFs with charts, tables, or diagrams can optionally add local VLM-generated captions to the document index, giving visual content some searchable representation in the same vector + FTS pipeline. Captions are auxiliary text — not image search, not OCR, and not a faithful transcription of the figure.

**Via MCP**:
```
"Ingest /Users/me/docs/api-spec.pdf with visual: true"
```

**Via CLI**:
```bash
npx mcp-local-rag ingest ./docs/spec.pdf --visual
```

Each caption is emitted as its own chunk with the envelope `[Visual content on page N: …]`, alongside the page-body chunks. It flows through the existing embedder and FTS index — no schema differences, no separate index.

Visual mode is opt-in; normal ingest does not load the VLM. Per-page VLM failures are tolerated — that page proceeds with text only.

###### Choosing a visual-quality profile

Visual mode offers two profiles, selected per ingest call:

| Profile | Model | Disk (cache) | Per-page inference | Suited for |
|---|---|---|---|---|
| `fast` (default) | `HuggingFaceTB/SmolVLM-256M-Instruct` | ~250 MB | baseline | Light visual indexing, quick first-run setup. |
| `quality` | `onnx-community/Qwen2.5-VL-3B-Instruct-ONNX` | ~2.9 GB | ~2× `fast` | Figures with in-image text (axis labels, panel sub-labels, annotations) where caption fidelity matters more than inference time. |

The numbers above are measured on CPU during development on the project's probe PDFs; they may shift with model updates or differ on your hardware.

**Via MCP** — `ingest_file` accepts an optional `visualQuality` parameter (enum: `'fast' | 'quality'`, default `'fast'`; ignored when `visual` is false):
```
"Ingest /Users/me/docs/research-paper.pdf with visual: true and visualQuality: 'quality'"
```

**Via CLI** — `--visual-quality fast|quality` (default `fast`; silently ignored when `--visual` is absent):
```bash
npx mcp-local-rag ingest ./docs/research-paper.pdf --visual --visual-quality quality
```

Profile model identifiers and quantization variants are fixed per release. Both profiles share the same `CACHE_DIR` (default: `./models/`); the first run on each profile downloads its model.

> **Behavior change from v0.14.0**: Captions are now emitted as dedicated chunks rather than appended to the page text before chunking. As a side effect, `metadata.fileSize` for visual ingests no longer includes the caption character count — it measures the post-extraction body length only. The underlying PDF is unchanged; only the reported `fileSize` for visual-ingested PDFs may shrink across the release boundary.

> **Security note**: Visual captions are derived from PDF contents and may inherit attacker-controlled text. Downstream LLM consumers should treat retrieved chunks as untrusted data, not as instructions. The `[Visual content on page N: …]` envelope helps consumers distinguish caption text from prose.

#### Ingesting HTML Content

Use `ingest_data` to ingest HTML content retrieved by your AI assistant (via web fetch, curl, browser tools, etc.):

```
"Fetch https://example.com/docs and ingest the HTML"
```

The server extracts main content using Readability (removes navigation, ads, etc.), converts to Markdown, and indexes it. Perfect for:
- Web documentation
- HTML retrieved by the AI assistant
- Clipboard content

HTML is automatically cleaned—you get the article content, not the boilerplate.

> **Note:** The RAG server itself doesn't fetch web content—your AI assistant retrieves it and passes the HTML to `ingest_data`. This keeps the server fully local while letting you index any content your assistant can access. Please respect website terms of service and copyright when ingesting external content.

#### Searching Documents

```
"What does the API documentation say about authentication?"
"Find information about rate limiting"
"Search for error handling best practices"
```

Search uses semantic similarity with keyword boost. This means `useEffect` finds documents containing that exact term, not just semantically similar React concepts.

Results include text content, source file, document title, and relevance score. The document title provides context for each chunk, helping identify which document a result belongs to. Adjust result count with `limit` (1-20, default 10).

#### Expanding Context Around a Result

When a search result needs more surrounding context, use `read_chunk_neighbors` to read the chunks before and after it:

```
"That result about authentication looks relevant — read the surrounding chunks for the full explanation"
```

Pass the `filePath` and `chunkIndex` from the search result. The response includes the target chunk (marked `isTarget: true`) plus its neighbors, sorted by chunk index. Defaults to 2 chunks before and 2 after (adjustable up to 50 each).

#### Managing Files

```
"List all files in configured base directories and their ingested status"   # See what's indexed
"Delete old-spec.pdf from RAG"     # Remove a file
"Show RAG server status"           # Check system health
```

### Using as CLI

All MCP tools are also available as CLI commands — no MCP server needed:

```bash
npx mcp-local-rag ingest ./docs/               # Bulk ingest files
npx mcp-local-rag query "authentication API"    # Search documents
npx mcp-local-rag read-neighbors --file-path /abs/path.md --chunk-index 5  # Expand context
npx mcp-local-rag list                          # Show ingestion status
npx mcp-local-rag status                        # Database stats
npx mcp-local-rag delete ./docs/old.pdf         # Remove content
npx mcp-local-rag delete --source "https://..."  # Remove by source URL
```

`query`, `read-neighbors`, `list`, `status`, and `delete` output JSON to stdout for piping (e.g., `| jq`). `ingest` outputs progress to stderr. Global options (`--db-path`, `--cache-dir`, `--model-name`) go before the subcommand. Run `npx mcp-local-rag --help` for details.

> ⚠️ The CLI does **not** read your MCP client config (`mcp.json`, `config.toml`, etc.). Configure the CLI via flags or environment variables as shown below.

#### Configuration

**CLI flags** — global options go before the subcommand, subcommand options go after:

```bash
npx mcp-local-rag --db-path ./my-db query "auth" --base-dir ./docs
```

The `--base-dir` flag is repeatable on `ingest` and `list`; pass it once per root:

```bash
npx mcp-local-rag ingest --base-dir ./docs --base-dir ./specs ./docs/readme.md
npx mcp-local-rag list --base-dir ./docs --base-dir ./specs
```

The positional path to `ingest` must sit inside one of the configured roots. When at least one `--base-dir` is supplied, CLI roots replace any env-var roots (no merge).

**Environment variables** — set in your shell:

```bash
export DB_PATH=./my-db
export BASE_DIR=./docs
npx mcp-local-rag query "auth"
```

For multiple roots, use `BASE_DIRS` (JSON array of non-empty path strings):

```bash
export BASE_DIRS='["/Users/me/Documents/work","/Users/me/Projects/specs"]'
npx mcp-local-rag list
```

**Sharing config between MCP and CLI** — if your MCP client inherits shell environment variables, you can set them in your shell profile (e.g., `~/.zshrc`) so both use the same values. Otherwise, set them explicitly in your MCP config as well.

```bash
export BASE_DIR=/path/to/your/documents
export DB_PATH=/path/to/lancedb
```

Configuration is resolved in this order:

1. CLI flags (highest priority)
2. Environment variables
3. Defaults

For the full list of CLI flags, environment variables, and defaults, see [Configuration](#configuration).

For CLI-only setups (no MCP server), install [Agent Skills](#agent-skills) so your AI assistant can form better queries and interpret results consistently.

> ⚠️ **CLI `--model-name` must match the MCP server's `MODEL_NAME` env var.** Using a different embedding model against an existing database produces incompatible vectors, silently degrading search quality.

## Search Tuning

Adjust these for your use case:

| Variable | Default | Description |
|----------|---------|-------------|
| `RAG_HYBRID_WEIGHT` | `0.6` | Keyword boost factor. 0 = semantic only, higher = stronger keyword boost. |
| `RAG_GROUPING` | (not set) | `similar` for top group only, `related` for top 2 groups. |
| `RAG_MAX_DISTANCE` | (not set) | Filter out low-relevance results (e.g., `0.5`). |
| `RAG_MAX_FILES` | (not set) | Limit results to top N files (e.g., `1` for single best file). |

### Code-focused tuning

For codebases and API specs, increase keyword boost so exact identifiers (`useEffect`, `ERR_*`, class names) dominate ranking:

```json
"env": {
  "RAG_HYBRID_WEIGHT": "0.7",
  "RAG_GROUPING": "similar"
}
```

- `0.7` — balanced semantic + keyword
- `1.0` — aggressive; exact matches strongly rerank results

Keyword boost is applied *after* semantic filtering, so it improves precision without surfacing unrelated matches.

## How It Works

**TL;DR:**
- Documents are chunked by semantic similarity, not fixed character counts
- Each chunk is embedded locally using Transformers.js
- Search uses semantic similarity with keyword boost for exact matches
- Results are filtered based on relevance gaps, not raw scores

### Details

When you ingest a document, the parser extracts text based on file type (PDF via `mupdf`, DOCX via `mammoth`, text files directly).

The semantic chunker splits text into sentences, then groups them using embedding similarity. It finds natural topic boundaries where the meaning shifts—keeping related content together instead of cutting at arbitrary character limits. This produces chunks that are coherent units of meaning, typically 500-1000 characters. Markdown code blocks are kept intact—never split mid-block—preserving copy-pastable code in search results.

Each chunk goes through a Transformers.js embedding model (default: `all-MiniLM-L6-v2`, configurable via `MODEL_NAME`), converting text into vectors. Vectors are stored in LanceDB, a file-based vector database requiring no server process.

When you search:
1. Your query becomes a vector using the same model
2. Semantic (vector) search finds the most relevant chunks
3. Quality filters apply (distance threshold, grouping)
4. Keyword matches boost rankings for exact term matching

The keyword boost ensures exact terms like `useEffect` or error codes rank higher when they match.

## Agent Skills

[Agent Skills](https://agentskills.io/) provide optimized prompts that help AI assistants use RAG tools more effectively. Install skills for better query formulation, result interpretation, and ingestion workflows:

```bash
# Claude Code (project-level)
npx mcp-local-rag skills install --claude-code

# Claude Code (user-level)
npx mcp-local-rag skills install --claude-code --global

# Codex
npx mcp-local-rag skills install --codex
```

Skills include:
- **Query optimization**: Better search query formulation
- **Result interpretation**: Score thresholds and filtering guidelines
- **HTML ingestion**: Format selection and source naming

### Ensuring Skill Activation

Skills are loaded automatically in most cases—AI assistants scan skill metadata and load relevant instructions when needed. For consistent behavior:

**Option 1: Explicit request (natural language)**
Before RAG operations, request in natural language:
- "Use the mcp-local-rag skill for this search"
- "Apply RAG best practices from skills"

**Option 2: Add to agent instruction file**
Add to your `AGENTS.md`, `CLAUDE.md`, or other agent instruction file:
```
When using query_documents, ingest_file, or ingest_data tools,
apply the mcp-local-rag skill for better query formulation and result interpretation.
```

## Configuration

### Environment Variables and CLI Flags

The MCP server is configured by environment variables only — pass them through your MCP client's `env` block. The CLI accepts the same env vars plus equivalent flags (priority: CLI flag > env > default). CLI flags are not accepted on the bare `mcp-local-rag` (MCP server) launch.

| Environment Variable | CLI Flag | Default | Description |
|---------------------|----------|---------|-------------|
| `BASE_DIR` | `--base-dir` (repeatable) | Current directory | Single document root directory (security boundary). See [Document Roots](#document-roots-base_dir-and-base_dirs) for multi-root setup. |
| `BASE_DIRS` | — | (unset) | JSON array of document roots (security boundary). Takes precedence over `BASE_DIR`. See [Document Roots](#document-roots-base_dir-and-base_dirs). |
| `DB_PATH` | `--db-path` | `./lancedb/` | Vector database location |
| `CACHE_DIR` | `--cache-dir` | `./models/` | Model cache directory |
| `MODEL_NAME` | `--model-name` | `Xenova/all-MiniLM-L6-v2` | HuggingFace model ID ([available models](https://huggingface.co/models?library=transformers.js&pipeline_tag=feature-extraction)) |
| `MAX_FILE_SIZE` | `--max-file-size` | `104857600` (100MB) | Maximum file size in bytes |
| `CHUNK_MIN_LENGTH` | `--chunk-min-length` | `50` | Minimum chunk length in characters (1–10000) |
| `RAG_DEVICE` | — | `cpu` | Execution device. Passed straight to ONNX Runtime. See the [Transformers.js device source code](https://github.com/huggingface/transformers.js/blob/main/packages/transformers/src/utils/devices.js) for the live list of supported backend names. If initialization fails, the server throws an error. |

**Model choice tips:**
- Multilingual docs → e.g., `onnx-community/embeddinggemma-300m-ONNX` (100+ languages)
- Scientific papers → e.g., `sentence-transformers/allenai-specter` (citation-aware)
- Code repositories → default often suffices; keyword boost matters more (or `jinaai/jina-embeddings-v2-base-code`)

⚠️ Changing `MODEL_NAME` changes embedding dimensions. Delete `DB_PATH` and re-ingest after switching models.

### Document Roots (`BASE_DIR` and `BASE_DIRS`)

mcp-local-rag enforces a security boundary: only files under a configured root are accessible to ingest, list, delete, or read-neighbor operations.

**Single root** — use `BASE_DIR`:

```bash
export BASE_DIR=/Users/me/Documents/work
```

**Multiple roots** — use `BASE_DIRS` with a JSON array:

```bash
export BASE_DIRS='["/Users/me/Documents/work","/Users/me/Projects/specs"]'
```

Only JSON-array syntax is supported. Delimiter syntax such as `BASE_DIRS=/a:/b` is intentionally **not** supported (avoids ambiguity with spaces, colons, commas, and Windows paths).

**Resolution order** (highest precedence first):

1. CLI `--base-dir <path>` flags (repeatable on `ingest` and `list`)
2. `BASE_DIRS` environment variable
3. `BASE_DIR` environment variable
4. `process.cwd()` (current working directory)

CLI roots **replace** env roots — they are never merged. `BASE_DIRS` and `BASE_DIR` are never merged either: `BASE_DIRS` wins when both are set.

**Precedence warning** — when `BASE_DIRS` and `BASE_DIR` are both set (and no CLI `--base-dir` is supplied), `BASE_DIR` is ignored and a warning is surfaced. The warning is visible:

- In MCP tool responses (as an additional content block, on every tool — including `status`, `query_documents`, `ingest_file`, `ingest_data`, `list_files`, `delete_file`, `read_chunk_neighbors`).
- On CLI `stderr`.

Unset `BASE_DIR` (or remove `BASE_DIRS`) to silence the warning.

**Nested-root pruning** — if one configured root sits inside another after realpath resolution, the nested child is dropped to avoid duplicate scan results. A pruning warning is surfaced the same way as the precedence warning. The surviving parent root still defines the security boundary.

**Invalid `BASE_DIRS`** — when `BASE_DIRS` is not a valid JSON array of non-empty strings (malformed JSON, empty array, non-string elements, ...), root-dependent MCP tools return a structured error and CLI subcommands exit non-zero. There is **no silent fallback** to `BASE_DIR` or `cwd`. The MCP `status` tool remains callable so you can diagnose the config error through your MCP client.

**MCP client examples** — multi-root setup:

Cursor (`~/.cursor/mcp.json`):
```json
{
  "mcpServers": {
    "local-rag": {
      "command": "npx",
      "args": ["-y", "mcp-local-rag"],
      "env": {
        "BASE_DIRS": "[\"/Users/me/Documents/work\",\"/Users/me/Projects/specs\"]"
      }
    }
  }
}
```

Codex (`~/.codex/config.toml`):
```toml
[mcp_servers.local-rag]
command = "npx"
args = ["-y", "mcp-local-rag"]

[mcp_servers.local-rag.env]
BASE_DIRS = "[\"/Users/me/Documents/work\",\"/Users/me/Projects/specs\"]"
```

Claude Code:
```bash
claude mcp add local-rag --scope user \
  --env BASE_DIRS='["/Users/me/Documents/work","/Users/me/Projects/specs"]' \
  -- npx -y mcp-local-rag
```

**CLI examples** — multi-root invocations:

```bash
# Repeatable --base-dir
npx mcp-local-rag ingest --base-dir /Users/me/work --base-dir /Users/me/specs /Users/me/work/readme.md
npx mcp-local-rag list --base-dir /Users/me/work --base-dir /Users/me/specs

# Or via BASE_DIRS env
BASE_DIRS='["/Users/me/work","/Users/me/specs"]' npx mcp-local-rag list
```

### Client-Specific Setup

**Cursor** — Global: `~/.cursor/mcp.json`, Project: `.cursor/mcp.json`

```json
{
  "mcpServers": {
    "local-rag": {
      "command": "npx",
      "args": ["-y", "mcp-local-rag"],
      "env": {
        "BASE_DIR": "/path/to/your/documents"
      }
    }
  }
}
```

**Codex** — `~/.codex/config.toml` (note: must use `mcp_servers` with underscore)

```toml
[mcp_servers.local-rag]
command = "npx"
args = ["-y", "mcp-local-rag"]

[mcp_servers.local-rag.env]
BASE_DIR = "/path/to/your/documents"
```

**Claude Code**:

```bash
claude mcp add local-rag --scope user \
  --env BASE_DIR=/path/to/your/documents \
  -- npx -y mcp-local-rag
```

### First Run

The embedding model (~90MB) downloads on first use. Takes 1-2 minutes, then works offline.

### Security

- **Path restriction**: Only files within a configured root (`BASE_DIR` or any `BASE_DIRS` / `--base-dir` entry) are accessible. Symlinks resolving outside all configured roots, and sibling-prefix paths (e.g. `/foo/barista` for root `/foo/bar`), are rejected.
- **Local only**: No network requests after model download
- **Model sources** (all official HuggingFace repositories):
  - Embedder: [`Xenova/all-MiniLM-L6-v2`](https://huggingface.co/Xenova/all-MiniLM-L6-v2)
  - Visual `fast` profile: [`HuggingFaceTB/SmolVLM-256M-Instruct`](https://huggingface.co/HuggingFaceTB/SmolVLM-256M-Instruct)
  - Visual `quality` profile: [`onnx-community/Qwen2.5-VL-3B-Instruct-ONNX`](https://huggingface.co/onnx-community/Qwen2.5-VL-3B-Instruct-ONNX)
- **Visual caption fidelity**: The `quality` profile reproduces in-image text more faithfully than `fast`. Both profiles output captions wrapped as `[Visual content on page N: …]`, but a faithful reproduction means attacker-controlled in-image text — including characters like `]` that visually close the envelope — can appear verbatim in retrieved chunks. Downstream LLM consumers should treat retrieved chunks as untrusted data, not as instructions, regardless of envelope shape.

<details>
<summary><strong>Performance</strong></summary>

Tested on MacBook Pro M1 (16GB RAM), Node.js 22:

**Query Speed**: ~1.2 seconds for 10,000 chunks (p90 < 3s)

**Ingestion** (10MB PDF):
- PDF parsing: ~8s
- Chunking: ~2s
- Embedding: ~30s
- DB insertion: ~5s

**Memory**: ~200MB idle, ~800MB peak (50MB file ingestion)

**Concurrency**: Handles 5 parallel queries without degradation.

</details>

<details>
<summary><strong>Troubleshooting</strong></summary>

### "No results found"

Documents must be ingested first. Run `"List all ingested files"` to verify.

### Model download failed

Check internet connection. If behind a proxy, configure network settings. The model can also be [downloaded manually](https://huggingface.co/Xenova/all-MiniLM-L6-v2).

### "File too large"

Default limit is 100MB. Split large files or increase `MAX_FILE_SIZE`.

### Slow queries

Check chunk count with `status`. Large documents with many chunks may slow queries. Consider splitting very large files.

### "Path outside BASE_DIR"

Ensure file paths are within one of the configured roots (`BASE_DIR`, any `BASE_DIRS` entry, or any CLI `--base-dir`). Use absolute paths.

### "BASE_DIRS must be a JSON array..."

`BASE_DIRS` accepts only a JSON array of one or more non-empty path strings. Examples:

- Valid: `BASE_DIRS='["/Users/me/work","/Users/me/specs"]'`
- Invalid: `BASE_DIRS=/a:/b` (delimiter syntax not supported)
- Invalid: `BASE_DIRS='[]'` (empty array)
- Invalid: `BASE_DIRS='["",""]'` (empty string element)

When invalid, root-dependent operations fail with a clear error rather than silently falling back. The MCP `status` tool remains callable so you can inspect the diagnostic.

### MCP client doesn't see tools

1. Verify config file syntax
2. Restart client completely (Cmd+Q on Mac for Cursor)
3. Test directly: `npx mcp-local-rag` should run without errors

</details>

<details>
<summary><strong>FAQ</strong></summary>

**Is this really private?**
Yes. After model download, nothing leaves your machine. Verify with network monitoring.

**Can I use this offline?**
Yes, after the required models are cached locally. Text ingest/search needs the embedding model. PDF visual mode is opt-in and also needs the VLM model on first use; the download is ~250 MB for the default `fast` profile (SmolVLM-256M) or ~2.9 GB for the `quality` profile (Qwen2.5-VL-3B), cached under `CACHE_DIR` (default: `./models/`).

**How does this compare to cloud RAG?**
Cloud services offer better accuracy at scale but require sending data externally. This trades some accuracy for complete privacy and zero runtime cost.

**What file formats are supported?**
PDF, DOCX, TXT, Markdown, and HTML (via `ingest_data`). Not yet: Excel, PowerPoint, images.

**Can I change the embedding model?**
Yes, but you must delete your database and re-ingest all documents. Different models produce incompatible vector dimensions.

**GPU acceleration?**
Opt-in via `RAG_DEVICE`. Devices are passed straight to ONNX Runtime. GPU support is highly dependent on your system, Node.js version, and the underlying ONNX backend. See the [Transformers.js device source code](https://github.com/huggingface/transformers.js/blob/main/packages/transformers/src/utils/devices.js) for the live list of supported backend names. If the requested device fails to initialize, the server throws an error — set `RAG_DEVICE=cpu` to revert.

**Multi-user support?**
No. Designed for single-user, local access. Multi-user would require authentication/access control.

**How to backup?**
Copy `DB_PATH` directory (default: `./lancedb/`).

</details>

<details>
<summary><strong>Development</strong></summary>

### Building from Source

```bash
git clone https://github.com/shinpr/mcp-local-rag.git
cd mcp-local-rag
pnpm install
```

### Testing

```bash
pnpm test              # Run all tests
pnpm run test:watch    # Watch mode
```

### Code Quality

```bash
pnpm run type-check    # TypeScript check
pnpm run check:fix     # Lint and format
pnpm run check:deps    # Circular dependency check
pnpm run check:all     # Full quality check
```

### Project Structure

```
src/
  index.ts      # Entry point
  server/       # MCP tool handlers
  cli/          # CLI subcommands (ingest, query, list, delete, read-neighbors, etc.)
  parser/       # PDF, DOCX, TXT, MD parsing
  chunker/      # Text splitting
  embedder/     # Transformers.js embeddings
  vectordb/     # LanceDB operations
  __tests__/    # Test suites
```

</details>

## Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for setup and guidelines.

## License

MIT License. Free for personal and commercial use.

## Blog Posts

- [Building a Local RAG for Agentic Coding](https://www.norsica.jp/blog/local-rag-agentic-coding) — Technical deep-dive into the semantic chunking and hybrid search design.

## Acknowledgments

Built with [Model Context Protocol](https://modelcontextprotocol.io/) by Anthropic, [LanceDB](https://lancedb.com/), and [Transformers.js](https://huggingface.co/docs/transformers.js).
