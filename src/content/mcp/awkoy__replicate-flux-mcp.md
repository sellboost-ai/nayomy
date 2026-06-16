---
name: "awkoy/replicate-flux-mcp"
description: "Provides the ability to generate images via Replicate's API."
category: "Other Tools and Integrations"
repo: "awkoy/replicate-flux-mcp"
stars: 105
url: "https://github.com/awkoy/replicate-flux-mcp"
body_length: 19859
license: "MIT"
language: "TypeScript"
body_tr: |-
  [![MseeP.ai Security Assessment Badge](https://mseep.net/pr/awkoy-replicate-flux-mcp-badge.png)](https://mseep.ai/app/awkoy-replicate-flux-mcp)

  # Replicate Flux MCP

  ![MCP Compatible](https://img.shields.io/badge/MCP-Compatible-blue)
  ![License](https://img.shields.io/badge/license-MIT-green)
  ![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-blue)
  ![Model Context Protocol](https://img.shields.io/badge/MCP-Enabled-purple)
  [![smithery badge](https://smithery.ai/badge/@awkoy/replicate-flux-mcp)](https://smithery.ai/server/@awkoy/replicate-flux-mcp)
  ![NPM Downloads](https://img.shields.io/npm/dw/replicate-flux-mcp)
  ![Stars](https://img.shields.io/github/stars/awkoy/replicate-flux-mcp)

  <a href="https://glama.ai/mcp/servers/ss8n1knen8">
    
  </a>

  **Replicate Flux MCP**, yapay zeka asistanlarına yüksek kaliteli resimler ve vektör grafikler oluşturma gücü veren gelişmiş bir Model Context Protocol (MCP) sunucusudur. Raster görseller için [Black Forest Labs'ın Flux Schnell modelinden](https://replicate.com/black-forest-labs/flux-schnell) ve vektör grafikler için [Recraft'ın V3 SVG modelinden](https://replicate.com/recraft-ai/recraft-v3-svg) yararlanarak Replicate API aracılığıyla çalışır.

  ## 📑 İçindekiler

  - [Başlarken & Entegrasyon](#-başlarken--entegrasyon)
    - [Kurulum Süreci](#kurulum-süreci)
    - [Cursor Entegrasyonu](#cursor-entegrasyonu)
    - [Claude Desktop Entegrasyonu](#claude-desktop-entegrasyonu)
    - [Smithery Entegrasyonu](#smithery-entegrasyonu)
    - [Glama.ai Entegrasyonu](#glamaai-entegrasyonu)
  - [Özellikler](#-özellikler)
  - [Dokümantasyon](#-dokümantasyon)
    - [Mevcut Araçlar](#mevcut-araçlar)
    - [Mevcut Kaynaklar](#mevcut-kaynaklar)
    - [Mevcut İstemler](#mevcut-istemler)
    - [Yapılandırılmış Çıktı](#yapılandırılmış-çıktı)
    - [Ortam Değişkenleri](#ortam-değişkenleri)
  - [Geliştirme](#-geliştirme)
    - [Test Etme](#test-etme)
  - [Teknik Detaylar](#-teknik-detaylar)
  - [Sorun Giderme](#-sorun-giderme)
  - [Katkıda Bulunma](#-katkıda-bulunma)
  - [Lisans](#-lisans)
  - [Kaynaklar](#-kaynaklar)
  - [Örnekler](#-örnekler)

  ## 🚀 Başlarken & Entegrasyon

  ### Kurulum Süreci

  1. **Replicate API Token Alın**
     - [Replicate](https://replicate.com/) adresine kaydolun
     - Hesap ayarlarınızda bir API token oluşturun

  2. **Entegrasyon Yönteminizi Seçin**
     - Tercih ettiğiniz MCP istemcisine göre aşağıdaki entegrasyon seçeneklerinden birini izleyin

  3. **AI Asistanınızdan Bir Resim Oluşturmasını İsteyin**
     - Basitçe sorun: "Günbatımında sakin bir dağ manzarası resmi oluşturabilir misin?"
     - Veya daha spesifik olun: "Lütfen ön planda günbatımı renklerini yansıtan bir göl olan sakin bir dağ sahnesi gösteren bir resim oluştur"

  4. **Gelişmiş Özellikleri Keşfedin**
     - Özelleştirilmiş sonuçlar için farklı parametre ayarlarını deneyin
     - SVG oluşturmayı `generate_svg` kullanarak deneyin
     - Batch resim oluşturma veya varyant oluşturma özelliklerini kullanın

  ### Cursor Entegrasyonu

  #### Yöntem 1: mcp.json Kullanma

  1. Proje dizininizde `.cursor/mcp.json` dosyasını oluşturun veya düzenleyin:

  ```json
  {
    "mcpServers": {
      "replicate-flux-mcp": {
        "command": "env REPLICATE_API_TOKEN=YOUR_TOKEN npx",
        "args": ["-y", "replicate-flux-mcp"]
      }
    }
  }
  ```

  2. `YOUR_TOKEN` yerine gerçek Replicate API token'inizi yazın
  3. Değişiklikleri uygulamak için Cursor'u yeniden başlatın

  #### Yöntem 2: Manuel Mod

  1. Cursor'u açın ve Ayarlar'a gidin
  2. "MCP" veya "Model Context Protocol" bölümüne gidin
  3. "Sunucu Ekle" veya eşdeğerini tıklatın
  4. İlgili alana aşağıdaki komutu girin:

  ```
  env REPLICATE_API_TOKEN=YOUR_TOKEN npx -y replicate-flux-mcp
  ```

  5. `YOUR_TOKEN` yerine gerçek Replicate API token'inizi yazın
  6. Ayarları kaydedin ve gerekirse Cursor'u yeniden başlatın

  ### Claude Desktop Entegrasyonu

  1. Konfigürasyon dizininizde `mcp.json` dosyasını oluşturun veya düzenleyin:

  ```json
  {
    "mcpServers": {
      "replicate-flux-mcp": {
        "command": "npx",
        "args": ["-y", "replicate-flux-mcp"],
        "env": {
          "REPLICATE_API_TOKEN": "YOUR TOKEN"
        }
      }
    }
  }
  ```

  2. `YOUR_TOKEN` yerine gerçek Replicate API token'inizi yazın
  3. Değişiklikleri uygulamak için Claude Desktop'u yeniden başlatın

  ### Smithery Entegrasyonu

  Bu MCP sunucusu, Smithery'de barındırılan bir hizmet olarak mevcuttur ve kendi sunucunuzu kurmanıza gerek kalmadan kullanmanıza izin verir.

  1. [Smithery](https://smithery.ai/) adresini ziyaret edin ve hesap yoksa oluşturun
  2. [Replicate Flux MCP sunucu sayfasına](https://smithery.ai/server/@awkoy/replicate-flux-mcp) gidin
  3. Sunucuyu Smithery çalışma alanınıza eklemek için "Add to Workspace" (Çalışma Alanına Ekle) seçeneğini tıklatın
  4. MCP istemcinizi (Cursor, Claude Desktop, vb.) Smithery çalışma alanı URL'inizi kullanacak şekilde yapılandırın

  MCP istemcilerinizle Smithery'yi kullanma hakkında daha fazla bilgi için [Smithery dokümantasyonunu](https://smithery.ai/docs) ziyaret edin.

  ### Glama.ai Entegrasyonu

  Bu MCP sunucusu ayrıca Glama.ai'de barındırılan bir hizmet olarak mevcuttur ve yerel kurulum olmadan kullanmanız için başka bir seçenek sağlar.

  1. [Glama.ai](https://glama.ai/) adresini ziyaret edin ve hesap yoksa oluşturun
  2. [Replicate Flux MCP sunucu sayfasına](https://glama.ai/mcp/servers/ss8n1knen8) gidin
  3. Sunucuyu çalışma alanınıza eklemek için "Install Server" (Sunucuyu Yükle) seçeneğini tıklatın
  4. MCP istemcinizi Glama.ai çalışma alanınızı kullanacak şekilde yapılandırın

  Daha fazla bilgi için [Glama.ai MCP sunucuları dokümantasyonunu](https://glama.ai/mcp/servers) ziyaret edin.

  ## 🌟 Özellikler

  - **🖼️ Yüksek Kaliteli Resim Oluşturma** — Flux Schnell raster görselleri, en boy oranı, megapiksel, inference adımları, çıktı formatı ve seed üzerinde tam kontrol ile.
  - **🎨 Vektör Grafikler** — Logolar, ikonlar ve diyagramlar için Recraft V3 SVG.
  - **📊 Batch + Varyantlar** — N istemi N resim veya bir istemi N varyant olarak oluşturun (seed tabanlı veya istem-modifier tabanlı).
  - **🧩 Rastgele Replicate Modelleri** — `run_replicate_model` kaçış kapısı, OpenAPI giriş şeması için `get_model_schema` introspeksiyonu ile birlikte herhangi bir `owner/name[:version]` referansını kabul eder. `REPLICATE_MODEL_ALLOWLIST` aracılığıyla isteğe bağlı izin listesi.
  - **📦 Yapılandırılmış Çıktı** — Her `generate_*` aracı, her araç `outputSchema`'sı (URL, istem, format, en boy oranı, varyant başına seed, vb.) eşleşen, insan tarafından okunabilir içeriğin yanında makine tarafından okunabilir `structuredContent` döndürür.
  - **⏳ İlerleme Bildirimleri** — Batch ve varyant oluşturma, `progressToken` aracılığıyla katılım sağlayan istemciler için `notifications/progress` yayınlar, böylece uzun çalışmalar kara kutu değildir.
  - **💬 Seçilmiş İstemler** — 5 hazır istem şablonu (`logo`, `portrait`, `svg-icon`, `product-shot`, `isometric-diagram`) Claude Desktop'ın slash paletinde ve Cursor'ın `@`-menüsünde yüzey oluşturulmuştur.
  - **🏷️ Uygun Araç Ek Açıklamaları** — `readOnlyHint` / `destructiveHint` / `openWorldHint` / `idempotentHint` doğru şekilde ayarlanmıştır, böylece istemciler güvenlik ve maliyet hakkında akıl yürütebilir.
  - **🪵 Yapılandırılmış Günlüğe Kaydetme** — Sunucu tarafı hatalar, stderr yerine `notifications/message` üzerinden seyahat eder.
  - **🔌 Evrensel MCP Uyumluluğu** — MCP protokolü 2025-11-25; Claude Desktop, Cursor, Cline, Zed ve herhangi bir spec-uyumlu istemci ile çalışır.
  - **🔍 Oluşturma Geçmişi** — `imagelist`, `svglist` ve `predictionlist` kaynakları aracılığıyla geçmiş çalışmaları inceleyin.

  ## 📚 Dokümantasyon

  ### Mevcut Araçlar

  #### `generate_image`

  Flux Schnell modelini kullanarak bir metin istemine dayalı olarak bir resim oluşturur.

  ```typescript
  {
    prompt: string;                // Gerekli: Oluşturulacak resmin metin açıklaması
    seed?: number;                 // İsteğe bağlı: Yeniden üretilebilir oluşturma için rastgele seed
    go_fast?: boolean;             // İsteğe bağlı: Optimize edilmiş model ile daha hızlı tahminler çalıştır (varsayılan: true)
    megapixels?: "1" | "0.25";     // İsteğe bağlı: Resim çözünürlüğü (varsayılan: "1")
    num_outputs?: number;          // İsteğe bağlı: Oluşturulacak resim sayısı (1-4) (varsayılan: 1)
    aspect_ratio?: string;         // İsteğe bağlı: En boy oranı (örn. "16:9", "4:3") (varsayılan: "1:1")
    output_format?: string;        // İsteğe bağlı: Çıktı formatı ("webp", "jpg", "png") (varsayılan: "webp")
    output_quality?: number;       // İsteğe bağlı: Resim kalitesi (0-100) (varsayılan: 80)
    num_inference_steps?: number;  // İsteğe bağlı: Denoising adımlarının sayısı (1-4) (varsayılan: 4)
    disable_safety_checker?: boolean; // İsteğe bağlı: Güvenlik filtresini devre dışı bırak (varsayılan: false)
  }
  ```

  #### `generate_multiple_images`

  Flux Schnell modelini kullanarak bir istem dizisine dayalı olarak birden çok resim oluşturur.

  ```typescript
  {
    prompts: string[];             // Gerekli: Oluşturulacak resimler için metin açıklamalarının dizisi (1-10 istem)
    seed?: number;                 // İsteğe bağlı: Yeniden üretilebilir oluşturma için rastgele seed
    go_fast?: boolean;             // İsteğe bağlı: Optimize edilmiş model ile daha hızlı tahminler çalıştır (varsayılan: true)
    megapixels?: "1" | "0.25";     // İsteğe bağlı: Resim çözünürlüğü (varsayılan: "1")
    aspect_ratio?: string;         // İsteğe bağlı: En boy oranı (örn. "16:9", "4:3") (varsayılan: "1:1")
    output_format?: string;        // İsteğe bağlı: Çıktı formatı ("webp", "jpg", "png") (varsayılan: "webp")
    output_quality?: number;       // İsteğe bağlı: Resim kalitesi (0-100) (varsayılan: 80)
    num_inference_steps?: number;  // İsteğe bağlı: Denoising adımlarının sayısı (1-4) (varsayılan: 4)
    disable_safety_checker?: boolean; // İsteğe bağlı: Güvenlik filtresini devre dışı bırak (varsayılan: false)
  }
  ```

  #### `generate_image_variants`

  Tek bir isteme dayalı olarak aynı resmin birden çok varyantını oluşturur.

  ```typescript
  {
    prompt: string;                // Gerekli: Varyantları oluşturulacak resim için metin açıklaması
    num_variants: number;          // Gerekli: Oluşturulacak resim varyantı sayısı (2-10, varsayılan: 4)
    prompt_variations?: string[];  // İsteğe bağlı: Varyantlara uygulanacak istem değiştiricileri listesi (örn. ["suluboya stilinde", "yağlıboya stilinde"])
    variation_mode?: "append" | "replace"; // İsteğe bağlı: Varyasyonlar nasıl uygulanır - 'append' temel isteme ekler, 'replace' varyasyonları doğrudan kullanır (varsayılan: "append")
    seed?: number;                 // İsteğe bağlı: Temel rastgele seed. Her varyant seed+variant_index kullanacak
    go_fast?: boolean;             // İsteğe bağlı: Optimize edilmiş model ile daha hızlı tahminler çalıştır (varsayılan: true)
    megapixels?: "1" | "0.25";     // İsteğe bağlı: Resim çözünürlüğü (varsayılan: "1")
    aspect_ratio?: string;         // İsteğe bağlı: En boy oranı (örn. "16:9", "4:3") (varsayılan: "1:1")
    output_format?: string;        // İsteğe bağlı: Çıktı formatı ("webp", "jpg", "png") (varsayılan: "webp")
    output_quality?: number;       // İsteğe bağlı: Resim kalitesi (0-100) (varsayılan: 80)
    num_inference_steps?: number;  // İsteğe bağlı: Denoising adımlarının sayısı (1-4) (varsayılan: 4)
    disable_safety_checker?: boolean; // İsteğe bağlı: Güvenlik filtresini devre dışı bırak (varsayılan: false)
  }
  ```

  #### `generate_svg`

  Recraft V3 SVG modelini kullanarak bir metin istemine dayalı olarak bir SVG vektör resmi oluşturur.

  ```typescript
  {
    prompt: string;                // Gerekli: Oluşturulacak SVG için metin açıklaması
    size?: string;                 // İsteğe bağlı: Oluşturulan SVG'nin boyutu (varsayılan: "1024x1024")
    style?: string;                // İsteğe bağlı: Oluşturulan resmin stili (varsayılan: "any")
                                  // Seçenekler: "any", "engraving", "line_art", "line_circuit", "linocut"
  }
  ```

  #### `prediction_list`

  Replicate'ten son tahminlerinizin listesini alır.

  ```typescript
  {
    limit?: number;  // İsteğe bağlı: Döndürülecek maksimum tahmin sayısı (1-100) (varsayılan: 50)
  }
  ```

  #### `get_prediction`

  Belirli bir tahmin hakkında ayrıntılı bilgi alır.

  ```typescript
  {
    predictionId: string;  // Gerekli: Alınacak tahminin ID'si
  }
  ```

  #### `run_replicate_model`

  Replicate'te barındırılan herhangi bir modeli `owner/name[:version]` referansı ile çalıştırır. Curated araçlardan hiçbiri uygun olmadığında bunu kaçış kapısı olarak kullanın. Giriş şeklini bilmiyorsanız önce `get_model_schema` çağırın.

  ```typescript
  {
    model: string;                              // Gerekli: 'owner/name' veya 'owner/name:version'
    input: Record<string, unknown>;             // Gerekli: Model giriş parametreleri
    prefer_wait?: number;                       // İsteğe bağlı: Senkron çıktı için bekleme saniyesi (1-60, varsayılan 60)
    return_as?: "url" | "base64" | "both";      // İsteğe bağlı: Dosya çıktıları nasıl döndürülür (varsayılan "url")
  }
  ```

  `REPLICATE_MODEL_ALLOWLIST` env var'ını (virgülle ayrılmış `owner/name` girişleri) ayarlayarak hangi modellerin çağrılabileceğini kısıtlayın. Ayarlanmamış = herhangi bir model izin verilir. Ayarlanmış-ama-boş = tümünü reddet (sunucu başarısız kapanır ve her şeye sessizce izin vermez).

  #### `get_model_schema`

  Bir Replicate modelinin OpenAPI giriş şemasını ve açıklamasını alır; böylece `run_replicate_model`'e doğru parametreleri geçebilirsiniz.

  ```typescript
  {
    model: string;  // Gerekli: 'owner/name' formunda Replicate model referansı
  }
  ```

  ### Mevcut Kaynaklar

  #### `imagelist`

  Flux Schnell modeliyle oluşturulan oluşturulmuş resimlerinizin geçmişine göz atın.

  #### `svglist`

  Recraft V3 SVG modeliyle oluşturulan oluşturulmuş SVG resimlerinizin geçmişine göz atın.

  #### `predictionlist`

  Tüm Replicate tahminlerinizin geçmişine göz atın.

  ### Mevcut İstemler

  Claude Desktop'ın slash menüsü ve Cursor'ın `@`-paletinde yüzey oluşturulan curated şablonlar. Her biri makul varsayılanları doldurur, sonra ilgili oluşturma aracına devreder.

  | İstem | Açıklama | Argümanlar |
  | --- | --- | --- |
  | `logo` | Marka/ürün logosu | `brand`, `style?`, `palette?` |
  | `portrait` | Fotogerçekçi portre | `subject`, `mood?`, `lens?` |
  | `svg-icon` | Tek konseptli vektör ikon | `concept`, `style?` |
  | `product-shot` | Stüdyo ürün fotoğrafyası | `product`, `surface?` |
  | `isometric-diagram` | İzometrik teknik illüstrasyon | `subject`, `emphasis?` |

  ### Yapılandırılmış Çıktı

  Her `generate_*` aracı hem insan tarafından okunabilir `content` (metin + resim blokları) hem de aracın `outputSchema`'sı eşleşen makine tarafından okunabilir `structuredContent` döndürür.

  | Araç | `structuredContent` şekli |
  | --- | --- |
  | `generate_image` | `{ url, prompt, format, aspect_ratio, seed? }` |
  | `generate_svg` | `{ url, prompt, size, style, svg? }` |
  | `generate_multiple_images` | `{ images: [{ url, prompt }], format, aspect_ratio }` |
  | `generate_image_variants` | `{ base_prompt, variation_mode, variants: [{ variant_index, url, prompt_used, seed? }], format, aspect_ratio }` |

  MCP yapılandırılmış çıktıyı anlayan istemciler, prose ayrıştırılmadan doğrudan URL'leri ve meta verileri tüketebilir.

  ### Ortam Değişkenleri

  | Değişken | Gerekli | Amaç |
  | --- | --- | --- |
  | `REPLICATE_API_TOKEN` | evet | [Replicate](https://replicate.com/account/api-tokens) için API token'ı. Eksikse sunucu hemen çıkar. |
  | `REPLICATE_MODEL_ALLOWLIST` | hayır | `run_replicate_model`'i gate eden virgülle ayrılmış `owner/name` girişleri. **Ayarlanmamış** = herhangi bir model izin verilir. **Ayarlanmış-ama-boş** = tümünü reddet (başarısız kapanır). İşlem başlangıcında bir kez değerlendirilir, bu nedenle MCP istemcinizin `env` bloğunda ayarlayın (daha sonra yüklenen dotenv aracılığıyla değil).

  ## 💻 Geliştirme

  1. Repository'yi klonlayın:

  ```bash
  git clone https://github.com/awkoy/replicate-flux-mcp.git
  cd replicate-flux-mcp
  ```

  2. Bağımlılıkları yükleyin:

  ```bash
  npm install
  ```

  3. TypeScript watcher'ını başlatın:

  ```bash
  npm run watch
  ```

  4. Projeyi derleyin:

  ```bash
  npm run build
  ```

  5. MCP Inspector ile sunucuyu smoke-test edin:

  ```bash
  npm run inspector
  ```

  6. İstemciye Bağlanın:

  ```json
  {
    "mcpServers": {
      "image-generation-mcp": {
        "command": "npx",
        "args": [
          "/Users/{USERNAME}/{PATH_TO}/replicate-flux-mcp/build/index.js"
        ],
        "env": {
          "REPLICATE_API_TOKEN": "YOUR REPLICATE API TOKEN"
        }
      }
    }
  }
  ```

  ### Test Etme

  Bu projenin şu anda otomatik test paketi yoktur. Doğrulama yapılır:

  - `npm run build` — TypeScript tür-kontrolü çoğu gerilemeyi yakalar.
  - `npm run inspector` — oluşturulan ikiliyi resmi MCP Inspector aracılığıyla yönlendirerek araçlar, kaynaklar ve istemler için uçtan uca smoke testlemesi yapar.

  Uygun bir test çerçevesi ekleyen katkılar (örn. Vitest + bir MCP stdio istemci harnesı) kabul edilir.

  ## ⚙️ Teknik Detaylar

  ### Stack

  - **Model Context Protocol SDK** - Araç ve kaynak yönetimi için temel MCP işlevselliği
  - **Replicate API** - Son teknoloji yapay zeka resim oluşturma modellerine erişim sağlar
  - **TypeScript** - Tür güvenliğini sağlar ve modern JavaScript özelliklerinden yararlanır
  - **Zod** - Sağlam API etkileşimleri için çalışma zamanı tür doğrulaması uygular

  ### Yapılandırma

  Sunucu, `src/config/index.ts` dosyasındaki `CONFIG` nesnesini değiştirerek yapılandırılabilir:

  ```typescript
  export const CONFIG = {
    serverName: "replicate-flux-mcp",
    serverVersion: "0.4.0",
    imageModelId: "black-forest-labs/flux-schnell",
    svgModelId: "recraft-ai/recraft-v3-svg",
    pollingAttempts: 25,
    pollingInterval: 2000, // ms
    modelAllowlist: (process.env.REPLICATE_MODEL_ALLOWLIST ?? "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
  };
  ```

  `modelAllowlist`, `REPLICATE_MODEL_ALLOWLIST` ortam değişkeninden işlem başlangıcında değerlendirilir. Değiştirdikten sonra sunucuyu yeniden başlatın.

  ## 🔍 Sorun Giderme

  ### Yaygın Sorunlar

  #### Kimlik Doğrulama Hatası
  - `REPLICATE_API_TOKEN`'in ortamda doğru şekilde ayarlandığından emin olun
  - Token'inizi Replicate API ile doğrudan test ederek geçerli olduğunu doğrulayın

  #### Güvenlik Filtresi Tetiklendi
  - Model, belirli istitleri engelleyebilecek yerleşik bir güvenlik filtresine sahiptir
  - İsteminizi potansiyel olarak sorunlu içerikten kaçınacak şekilde değiştirmeyi deneyin

  #### Zaman Aşımı Hatası
  - Daha büyük resimler veya meşgul sunucular için `pollingAttempts` veya `pollingInterval`'i yapılandırmada artırmanız gerekebilir
  - Varsayılan ayarlar çoğu kullanım durumu için işe yaramalıdır

  ## 🤝 Katkıda Bulunma

  Katkılar kabul edilir! Katkıda bulunmak için aşağıdaki adımları izleyin:

  1. Repository'yi fork edin
  2. Feature branch'inizi oluşturun (`git checkout -b feature/amazing-feature`)
  3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
  4. Branch'e push edin (`git push origin feature/amazing-feature`)
  5. Bir Pull Request açın

  Özellik istekleri veya hata raporları için lütfen bir GitHub issue oluşturun. Bu projeyi beğeniyorsanız, repository'ye yıldız vermeyi düşünün!

  ## 📄 Lisans

  Bu proje MIT Lisansı kapsamında lisanslanmıştır - ayrıntılar için LICENSE dosyasına bakın.

  ## 🔗 Kaynaklar

  - [Model Context Protocol Dokümantasyonu](https://modelcontextprotocol.io)
  - [Replicate API Dokümantasyonu](https://replicate.com/docs)
  - [Flux Schnell Modeli](https://replicate.com/black-forest-labs/flux-schnell)
  - [Recraft V3 SVG Modeli](https://replicate.com/recraft-ai/recraft-v3-svg)
  - [MCP
---

[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/awkoy-replicate-flux-mcp-badge.png)](https://mseep.ai/app/awkoy-replicate-flux-mcp)

# Replicate Flux MCP

![MCP Compatible](https://img.shields.io/badge/MCP-Compatible-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-blue)
![Model Context Protocol](https://img.shields.io/badge/MCP-Enabled-purple)
[![smithery badge](https://smithery.ai/badge/@awkoy/replicate-flux-mcp)](https://smithery.ai/server/@awkoy/replicate-flux-mcp)
![NPM Downloads](https://img.shields.io/npm/dw/replicate-flux-mcp)
![Stars](https://img.shields.io/github/stars/awkoy/replicate-flux-mcp)

<a href="https://glama.ai/mcp/servers/ss8n1knen8">
  
</a>

**Replicate Flux MCP** is an advanced Model Context Protocol (MCP) server that empowers AI assistants to generate high-quality images and vector graphics. Leveraging [Black Forest Labs' Flux Schnell model](https://replicate.com/black-forest-labs/flux-schnell) for raster images and [Recraft's V3 SVG model](https://replicate.com/recraft-ai/recraft-v3-svg) for vector graphics via the Replicate API.

## 📑 Table of Contents

- [Getting Started & Integration](#-getting-started--integration)
  - [Setup Process](#setup-process)
  - [Cursor Integration](#cursor-integration)
  - [Claude Desktop Integration](#claude-desktop-integration)
  - [Smithery Integration](#smithery-integration)
  - [Glama.ai Integration](#glamaai-integration)
- [Features](#-features)
- [Documentation](#-documentation)
  - [Available Tools](#available-tools)
  - [Available Resources](#available-resources)
  - [Available Prompts](#available-prompts)
  - [Structured Output](#structured-output)
  - [Environment Variables](#environment-variables)
- [Development](#-development)
  - [Testing](#testing)
- [Technical Details](#-technical-details)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)
- [Resources](#-resources)
- [Examples](#-examples)

## 🚀 Getting Started & Integration

### Setup Process

1. **Obtain a Replicate API Token**
   - Sign up at [Replicate](https://replicate.com/)
   - Create an API token in your account settings

2. **Choose Your Integration Method**
   - Follow one of the integration options below based on your preferred MCP client

3. **Ask Your AI Assistant to Generate an Image**
   - Simply ask naturally: "Can you generate an image of a serene mountain landscape at sunset?"
   - Or be more specific: "Please create an image showing a peaceful mountain scene with a lake reflecting the sunset colors in the foreground"

4. **Explore Advanced Features**
   - Try different parameter settings for customized results
   - Experiment with SVG generation using `generate_svg`
   - Use batch image generation or variant generation features

### Cursor Integration

#### Method 1: Using mcp.json

1. Create or edit the `.cursor/mcp.json` file in your project directory:

```json
{
  "mcpServers": {
    "replicate-flux-mcp": {
      "command": "env REPLICATE_API_TOKEN=YOUR_TOKEN npx",
      "args": ["-y", "replicate-flux-mcp"]
    }
  }
}
```

2. Replace `YOUR_TOKEN` with your actual Replicate API token
3. Restart Cursor to apply the changes

#### Method 2: Manual Mode

1. Open Cursor and go to Settings
2. Navigate to the "MCP" or "Model Context Protocol" section
3. Click "Add Server" or equivalent
4. Enter the following command in the appropriate field:

```
env REPLICATE_API_TOKEN=YOUR_TOKEN npx -y replicate-flux-mcp
```

5. Replace `YOUR_TOKEN` with your actual Replicate API token
6. Save the settings and restart Cursor if necessary

### Claude Desktop Integration

1. Create or edit the `mcp.json` file in your configuration directory:

```json
{
  "mcpServers": {
    "replicate-flux-mcp": {
      "command": "npx",
      "args": ["-y", "replicate-flux-mcp"],
      "env": {
        "REPLICATE_API_TOKEN": "YOUR TOKEN"
      }
    }
  }
}
```

2. Replace `YOUR_TOKEN` with your actual Replicate API token
3. Restart Claude Desktop to apply the changes

### Smithery Integration

This MCP server is available as a hosted service on Smithery, allowing you to use it without setting up your own server.

1. Visit [Smithery](https://smithery.ai/) and create an account if you don't have one
2. Navigate to the [Replicate Flux MCP server page](https://smithery.ai/server/@awkoy/replicate-flux-mcp)
3. Click "Add to Workspace" to add the server to your Smithery workspace
4. Configure your MCP client (Cursor, Claude Desktop, etc.) to use your Smithery workspace URL

For more information on using Smithery with your MCP clients, visit the [Smithery documentation](https://smithery.ai/docs).

### Glama.ai Integration

This MCP server is also available as a hosted service on Glama.ai, providing another option to use it without local setup.

1. Visit [Glama.ai](https://glama.ai/) and create an account if you don't have one
2. Go to the [Replicate Flux MCP server page](https://glama.ai/mcp/servers/ss8n1knen8)
3. Click "Install Server" to add the server to your workspace
4. Configure your MCP client to use your Glama.ai workspace

For more information, visit the [Glama.ai MCP servers documentation](https://glama.ai/mcp/servers).

## 🌟 Features

- **🖼️ High-Quality Image Generation** — Flux Schnell raster images with full control over aspect ratio, megapixels, inference steps, output format, and seed.
- **🎨 Vector Graphics** — Recraft V3 SVG for logos, icons, and diagrams.
- **📊 Batch + Variants** — Generate N images from N prompts or N variants of one prompt (seed-based or prompt-modifier-based).
- **🧩 Arbitrary Replicate Models** — `run_replicate_model` escape hatch accepts any `owner/name[:version]` reference, with `get_model_schema` introspection for the OpenAPI input schema. Optional allowlist via `REPLICATE_MODEL_ALLOWLIST`.
- **📦 Structured Output** — Every `generate_*` tool returns machine-readable `structuredContent` alongside human-readable content, matching a per-tool `outputSchema` (URL, prompt, format, aspect ratio, per-variant seed, etc).
- **⏳ Progress Notifications** — Batch and variant generation emit `notifications/progress` for clients that opt in via `progressToken`, so long runs aren't black-boxed.
- **💬 Curated Prompts** — 5 ready-made prompt templates (`logo`, `portrait`, `svg-icon`, `product-shot`, `isometric-diagram`) surfaced in Claude Desktop's slash palette and Cursor's `@`-menu.
- **🏷️ Proper Tool Annotations** — `readOnlyHint` / `destructiveHint` / `openWorldHint` / `idempotentHint` set correctly so clients can reason about safety and cost.
- **🪵 Structured Logging** — Server-side errors travel over `notifications/message` instead of stderr.
- **🔌 Universal MCP Compatibility** — MCP protocol 2025-11-25; works with Claude Desktop, Cursor, Cline, Zed, and any spec-compliant client.
- **🔍 Generation History** — Browse past runs through `imagelist`, `svglist`, and `predictionlist` resources.

## 📚 Documentation

### Available Tools

#### `generate_image`

Generates an image based on a text prompt using the Flux Schnell model.

```typescript
{
  prompt: string;                // Required: Text description of the image to generate
  seed?: number;                 // Optional: Random seed for reproducible generation
  go_fast?: boolean;             // Optional: Run faster predictions with optimized model (default: true)
  megapixels?: "1" | "0.25";     // Optional: Image resolution (default: "1")
  num_outputs?: number;          // Optional: Number of images to generate (1-4) (default: 1)
  aspect_ratio?: string;         // Optional: Aspect ratio (e.g., "16:9", "4:3") (default: "1:1")
  output_format?: string;        // Optional: Output format ("webp", "jpg", "png") (default: "webp")
  output_quality?: number;       // Optional: Image quality (0-100) (default: 80)
  num_inference_steps?: number;  // Optional: Number of denoising steps (1-4) (default: 4)
  disable_safety_checker?: boolean; // Optional: Disable safety filter (default: false)
}
```

#### `generate_multiple_images`

Generates multiple images based on an array of prompts using the Flux Schnell model.

```typescript
{
  prompts: string[];             // Required: Array of text descriptions for images to generate (1-10 prompts)
  seed?: number;                 // Optional: Random seed for reproducible generation
  go_fast?: boolean;             // Optional: Run faster predictions with optimized model (default: true)
  megapixels?: "1" | "0.25";     // Optional: Image resolution (default: "1")
  aspect_ratio?: string;         // Optional: Aspect ratio (e.g., "16:9", "4:3") (default: "1:1")
  output_format?: string;        // Optional: Output format ("webp", "jpg", "png") (default: "webp")
  output_quality?: number;       // Optional: Image quality (0-100) (default: 80)
  num_inference_steps?: number;  // Optional: Number of denoising steps (1-4) (default: 4)
  disable_safety_checker?: boolean; // Optional: Disable safety filter (default: false)
}
```

#### `generate_image_variants`

Generates multiple variants of the same image from a single prompt.

```typescript
{
  prompt: string;                // Required: Text description for the image to generate variants of
  num_variants: number;          // Required: Number of image variants to generate (2-10, default: 4)
  prompt_variations?: string[];  // Optional: List of prompt modifiers to apply to variants (e.g., ["in watercolor style", "in oil painting style"])
  variation_mode?: "append" | "replace"; // Optional: How to apply variations - 'append' adds to base prompt, 'replace' uses variations directly (default: "append")
  seed?: number;                 // Optional: Base random seed. Each variant will use seed+variant_index
  go_fast?: boolean;             // Optional: Run faster predictions with optimized model (default: true)
  megapixels?: "1" | "0.25";     // Optional: Image resolution (default: "1")
  aspect_ratio?: string;         // Optional: Aspect ratio (e.g., "16:9", "4:3") (default: "1:1")
  output_format?: string;        // Optional: Output format ("webp", "jpg", "png") (default: "webp")
  output_quality?: number;       // Optional: Image quality (0-100) (default: 80)
  num_inference_steps?: number;  // Optional: Number of denoising steps (1-4) (default: 4)
  disable_safety_checker?: boolean; // Optional: Disable safety filter (default: false)
}
```

#### `generate_svg`

Generates an SVG vector image based on a text prompt using the Recraft V3 SVG model.

```typescript
{
  prompt: string;                // Required: Text description of the SVG to generate
  size?: string;                 // Optional: Size of the generated SVG (default: "1024x1024")
  style?: string;                // Optional: Style of the generated image (default: "any")
                                // Options: "any", "engraving", "line_art", "line_circuit", "linocut"
}
```

#### `prediction_list`

Retrieves a list of your recent predictions from Replicate.

```typescript
{
  limit?: number;  // Optional: Maximum number of predictions to return (1-100) (default: 50)
}
```

#### `get_prediction`

Gets detailed information about a specific prediction.

```typescript
{
  predictionId: string;  // Required: ID of the prediction to retrieve
}
```

#### `run_replicate_model`

Runs any model hosted on Replicate by its `owner/name[:version]` reference. Use this as an escape hatch when none of the curated tools fit. Call `get_model_schema` first if you don't know the input shape.

```typescript
{
  model: string;                              // Required: 'owner/name' or 'owner/name:version'
  input: Record<string, unknown>;             // Required: Model input parameters
  prefer_wait?: number;                       // Optional: Seconds to block waiting for sync output (1-60, default 60)
  return_as?: "url" | "base64" | "both";      // Optional: How to return file outputs (default "url")
}
```

Set the `REPLICATE_MODEL_ALLOWLIST` env var (comma-separated `owner/name` entries) to restrict which models can be invoked. Unset = any model allowed. Set-but-empty = deny all (the server fails closed rather than silently allowing everything).

#### `get_model_schema`

Fetches the OpenAPI input schema and description for a Replicate model so you can pass the right parameters to `run_replicate_model`.

```typescript
{
  model: string;  // Required: Replicate model reference in 'owner/name' form
}
```

### Available Resources

#### `imagelist`

Browse your history of generated images created with the Flux Schnell model.

#### `svglist`

Browse your history of generated SVG images created with the Recraft V3 SVG model.

#### `predictionlist`

Browse all your Replicate predictions history.

### Available Prompts

Curated templates surfaced in Claude Desktop's slash menu and Cursor's `@`-palette. Each one fills in sensible defaults then delegates to the relevant generation tool.

| Prompt | Description | Arguments |
| --- | --- | --- |
| `logo` | Brand/product logo | `brand`, `style?`, `palette?` |
| `portrait` | Photoreal portrait | `subject`, `mood?`, `lens?` |
| `svg-icon` | Single-concept vector icon | `concept`, `style?` |
| `product-shot` | Studio product photography | `product`, `surface?` |
| `isometric-diagram` | Isometric technical illustration | `subject`, `emphasis?` |

### Structured Output

Every `generate_*` tool returns both human-readable `content` (text + image blocks) and machine-readable `structuredContent` that matches the tool's `outputSchema`.

| Tool | `structuredContent` shape |
| --- | --- |
| `generate_image` | `{ url, prompt, format, aspect_ratio, seed? }` |
| `generate_svg` | `{ url, prompt, size, style, svg? }` |
| `generate_multiple_images` | `{ images: [{ url, prompt }], format, aspect_ratio }` |
| `generate_image_variants` | `{ base_prompt, variation_mode, variants: [{ variant_index, url, prompt_used, seed? }], format, aspect_ratio }` |

Clients that understand MCP structured output can consume URLs and metadata directly without parsing prose.

### Environment Variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `REPLICATE_API_TOKEN` | yes | API token for [Replicate](https://replicate.com/account/api-tokens). The server exits immediately if it's missing. |
| `REPLICATE_MODEL_ALLOWLIST` | no | Comma-separated `owner/name` entries that gate `run_replicate_model`. **Unset** = any model allowed. **Set-but-empty** = deny all (fail-closed). Evaluated once at process start, so set it in your MCP client's `env` block (not via a dotenv loaded later). |

## 💻 Development

1. Clone the repository:

```bash
git clone https://github.com/awkoy/replicate-flux-mcp.git
cd replicate-flux-mcp
```

2. Install dependencies:

```bash
npm install
```

3. Start the TypeScript watcher:

```bash
npm run watch
```

4. Build the project:

```bash
npm run build
```

5. Smoke-test the server with the MCP Inspector:

```bash
npm run inspector
```

6. Connect to Client:

```json
{
  "mcpServers": {
    "image-generation-mcp": {
      "command": "npx",
      "args": [
        "/Users/{USERNAME}/{PATH_TO}/replicate-flux-mcp/build/index.js"
      ],
      "env": {
        "REPLICATE_API_TOKEN": "YOUR REPLICATE API TOKEN"
      }
    }
  }
}
```

### Testing

This project currently has no automated test suite. Verification is done via:

- `npm run build` — TypeScript type-checking catches most regressions.
- `npm run inspector` — drives the built binary through the official MCP Inspector for end-to-end smoke testing of tools, resources, and prompts.

Contributions adding a proper test framework (e.g. Vitest + an MCP stdio client harness) are welcome.

## ⚙️ Technical Details

### Stack

- **Model Context Protocol SDK** - Core MCP functionality for tool and resource management
- **Replicate API** - Provides access to state-of-the-art AI image generation models
- **TypeScript** - Ensures type safety and leverages modern JavaScript features
- **Zod** - Implements runtime type validation for robust API interactions

### Configuration

The server can be configured by modifying the `CONFIG` object in `src/config/index.ts`:

```typescript
export const CONFIG = {
  serverName: "replicate-flux-mcp",
  serverVersion: "0.4.0",
  imageModelId: "black-forest-labs/flux-schnell",
  svgModelId: "recraft-ai/recraft-v3-svg",
  pollingAttempts: 25,
  pollingInterval: 2000, // ms
  modelAllowlist: (process.env.REPLICATE_MODEL_ALLOWLIST ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean),
};
```

`modelAllowlist` is evaluated once at process start from `REPLICATE_MODEL_ALLOWLIST`. Restart the server after changing it.

## 🔍 Troubleshooting

### Common Issues

#### Authentication Error
- Ensure your `REPLICATE_API_TOKEN` is correctly set in the environment
- Verify your token is valid by testing it with the Replicate API directly

#### Safety Filter Triggered
- The model has a built-in safety filter that may block certain prompts
- Try modifying your prompt to avoid potentially problematic content

#### Timeout Error
- For larger images or busy servers, you might need to increase `pollingAttempts` or `pollingInterval` in the configuration
- Default settings should work for most use cases

## 🤝 Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

For feature requests or bug reports, please create a GitHub issue. If you like this project, consider starring the repository!

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Resources

- [Model Context Protocol Documentation](https://modelcontextprotocol.io)
- [Replicate API Documentation](https://replicate.com/docs)
- [Flux Schnell Model](https://replicate.com/black-forest-labs/flux-schnell)
- [Recraft V3 SVG Model](https://replicate.com/recraft-ai/recraft-v3-svg)
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [Smithery Documentation](https://smithery.ai/docs)
- [Glama.ai MCP Servers](https://glama.ai/mcp/servers)

## 🎨 Examples

![Demo](https://github.com/user-attachments/assets/ad6db606-ae3a-48db-a1cc-e1f88847769e)

| Multiple Prompts | Prompt Variants |
|-----------------|-----------------|
| ![Multiple prompts example: "A serene mountain lake at sunset", "A bustling city street at night", "A peaceful garden in spring"](https://github.com/user-attachments/assets/e5ac56d2-bfbb-4f33-938c-a3d7bffeee60) | ![Variants example: Base prompt "A majestic castle" with modifiers "in watercolor style", "as an oil painting", "with gothic architecture"](https://github.com/user-attachments/assets/8ebe5992-4803-4bf3-a82a-251135b0698a) |

Here are some examples of how to use the tools:

### Batch Image Generation with `generate_multiple_images`

Create multiple distinct images at once with different prompts:

```json
{
  "prompts": [
    "A red sports car on a mountain road", 
    "A blue sports car on a beach", 
    "A vintage sports car in a city street"
  ]
}
```

### Image Variants with `generate_image_variants`

Create different interpretations of the same concept using seeds:

```json
{
  "prompt": "A futuristic city skyline at night",
  "num_variants": 4,
  "seed": 42
}
```

Or explore style variations with prompt modifiers:

```json
{
  "prompt": "A character portrait",
  "prompt_variations": [
    "in anime style", 
    "in watercolor style", 
    "in oil painting style", 
    "as a 3D render"
  ]
}
```

---

Made with ❤️ by Yaroslav Boiko
