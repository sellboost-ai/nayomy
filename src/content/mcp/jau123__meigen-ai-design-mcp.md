---
name: "jau123/MeiGen-AI-Design-MCP"
description: "AI image generation & editing MCP server with 1,500+ curated prompt library, smart prompt enhancement, and multi-provider routing (local ComfyUI, MeiGen Cloud, OpenAI-compatible APIs)."
description_tr: "AI görsel oluşturma ve düzenleme MCP sunucusu, 1.500+ küratörlü prompt kütüphanesi, akıllı prompt iyileştirme ve çoklu sağlayıcı yönlendirmesi (yerel ComfyUI, MeiGen Cloud, OpenAI-compatible API'ler) ile gelir."
category: "Art & Culture"
repo: "jau123/MeiGen-AI-Design-MCP"
stars: 1197
url: "https://github.com/jau123/MeiGen-AI-Design-MCP"
body_length: 16301
license: "MIT"
language: "TypeScript"
homepage: "https://meigen.ai"
body_tr: |-
  <h1 align="center">
    MeiGen AI Design MCP <a href="https://github.com/punkpeye/awesome-mcp-servers"></a> <a href="https://github.com/wshobson/agents/tree/main/plugins/meigen-ai-design"></a>
  </h1>

  <p align="center">
    <strong>Yapay zeka görüntü ve video üretimi için açık kaynak MCP sunucusu — tüm büyük yapay zeka kodlama araçlarıyla uyumlu</strong><br><sub>9 önde gelen model (GPT Image 2 · Nanobanana 2 · Seedream 5.0 · Midjourney V8.1 · Flux 2 Klein · Seedance 2.0 · Happyhorse 1.0 · Veo 3.1 · yerel ComfyUI) · 1.446 seçilmiş prompt · paralel alt-agent orkestrasyonu · bağımsız CLI modu. Claude Code, Cursor, Codex, Windsurf, Roo Code, OpenClaw, Hermes Agent ve diğer tüm MCP uyumlu hostlarda çalışır.</sub>
  </p>

  <p align="center">
    <a href="https://www.npmjs.com/package/meigen"></a>
    <a href="https://www.npmjs.com/package/meigen"></a>
    
    
    <a href="LICENSE"></a>
    <a href="https://discord.gg/uX6rnersUx"></a>
  </p>

  <p align="center">
    <a href="#quick-start">Hızlı Başlangıç</a> &bull;
    <a href="#see-it-in-action">Demo</a> &bull;
    <a href="#features">Özellikler</a> &bull;
    <a href="#providers">Sağlayıcılar</a> &bull;
    <a href="#slash-commands">Komutlar</a>
  </p>

  <p align="center">
    <strong>English</strong> | <a href="README.zh-CN.md">中文</a>
  </p>

  ---

  ## Bu Nedir?

  Herhangi bir yapay zeka kodlama aracını profesyonel bir tasarım asistanına dönüştüren bir MCP sunucusu. **8 araç** + seçilmiş 1.446 prompt kütüphanesi, logoları tasarlamak, ürün çekimlerini işlemek, stilleri videoya animasyon yapmak ve paralel toplu varyasyonları orkestrasyonlaştırmak için kullanılabilir. **Claude Code**, **Cursor**, **Codex**, **Windsurf**, **Roo Code**, **OpenClaw**, **Hermes Agent** ve herhangi bir MCP uyumlu host'ta çalışır — backend olarak **MeiGen platformu**, herhangi bir **OpenAI uyumlu API** veya **yerel ComfyUI** ile.

  - Üç backend modu: **MeiGen bulut** (9 görüntü ve video modeli), **OpenAI uyumlu** (kendi anahtarınızı ve endpoint'inizi getirin) veya **yerel ComfyUI** (çevrimdışı, kendi GPU'nuz)
  - [nanobanana-trending-prompts](https://github.com/jau123/nanobanana-trending-prompts) kaynağından seçilmiş 1.446 prompt şablonu artı stil farkında prompt geliştirme
  - Ana konteksti temiz tutmak için alt-agenlar aracılığıyla paralel toplu üretim — ayrıca kabuk betikleri ve CI için bağımsız CLI

  ---

  ## Aksiyonda Görmek

  <p align="center">
    <a href="https://youtu.be/JQ3DZ1DXqvs">
      
    </a>
    <br>
    <b><a href="https://youtu.be/JQ3DZ1DXqvs">▶ YouTube'da demo izle</a></b>
  </p>

  ### Ürün Fotoğrafı — 4 Yön Paralel

  > *"Bu parfüm için 4 ürün görüntüsü oluştur, bunlardan biri model içersin."*

  **Süreç** — AI referans görüntüyü yükler, 4 farklı prompt hazırlar, ardından hepsini paralel olarak oluşturur:

  <p align="center">
    
  </p>

  **Sonuç** — 4 yaratıcı yön 2 dakikadan kısa sürede sunulur:

  <p align="center">
    
  </p>

  **Oluşturulan görüntüler:**

  <p align="center">
    
    
    
    
  </p>

  ---

  ## Hızlı Başlangıç

  ### Claude Code Eklentisi (Önerilir)

  ```bash
  # Eklenti marketplace'ini ekle
  /plugin marketplace add jau123/MeiGen-AI-Design-MCP

  # Kur
  /plugin install meigen@meigen-marketplace
  ```

  **Claude Code'u yeniden başlat** (kapat ve tekrar aç veya yeni terminal sekmesi aç).

  **Alternatif marketplace** — [wshobson/agents](https://github.com/wshobson/agents) aracılığıyla da mevcuttur (30k+ yıldız):

  ```bash
  /plugin marketplace add wshobson/agents
  /plugin install meigen-ai-design@claude-code-workflows
  ```

  > Bu marketplace MCP sunucusu config'ini içermez. Kurduktan sonra, projenizin `.mcp.json` dosyasına ekleyin:
  > ```json
  > { "mcpServers": { "meigen": { "command": "npx", "args": ["-y", "meigen@1.3.2"] } } }
  > ```

  #### İlk Kurulum

  Ücretsiz özellikler yeniden başlatmadan sonra hemen çalışır — deneyin:

  > "Biraz yaratıcı ilham ara"

  Görüntü üretemesini açmak için kurulum sihirbazını çalıştırın:

  ```
  /meigen:setup
  ```

  Sihirbaz sizi şu adımlarda rehber eder:
  1. **Sağlayıcı seçin** — yerel ComfyUI, MeiGen Cloud veya herhangi bir OpenAI uyumlu API (kendi anahtarınız ve endpoint'inizi getirin)
  2. **Kimlik bilgilerini girin** — ComfyUI URL'si, API token'ı veya anahtar
  3. **Bitti** — Claude Code'u bir kez daha yeniden başlatın, ardından oluşturmaya başlayın

  ### Cursor / VS Code / Windsurf / Roo Code

  Desteklenen herhangi bir yapay zeka kodlama aracı için MeiGen'i kurmak için tek bir komut:

  ```bash
  npx meigen init cursor      # Cursor
  npx meigen init vscode      # VS Code / GitHub Copilot
  npx meigen init windsurf    # Windsurf
  npx meigen init roo         # Roo Code
  npx meigen init claude      # Claude Code (proje seviyesi)
  ```

  Bu, aracınız için doğru MCP config dosyasını doğru biçim ve yolla yazar. Eğer bir config dosyası zaten varsa, MeiGen diğer sunucularınızı üzerine yazmadan birleştirilir.

  ### OpenClaw

  [ClawHub](https://clawhub.ai/plugins/meigen-ai-design) eklentisini kurun (komut, beceriler ve MCP sunucusu içerir):

  ```bash
  openclaw bundles install clawhub:meigen-ai-design
  ```

  Veya sadece beceriyi kurun (komut/agent yok):

  ```bash
  npx clawhub@latest install creative-toolkit
  ```

  ### CLI olarak kullanın (MCP host gerekmez)

  Kabuk betikleri, CI pipeline'ları veya MCP host'u olmayan yapay zeka görüntü üretimi isteyenler için, MeiGen aynı npm paketinde tek seferlik `gen` komutunu içerir.

  ```bash
  # Token'ınızı bir kez ayarlayın (https://www.meigen.ai → Settings → API Keys adresinden alın)
  export MEIGEN_API_TOKEN=meigen_sk_...

  # Oluştur
  npx meigen gen --prompt "a calico cat in a sunlit kitchen"

  # Belirli bir model + en boy oranı ile
  npx meigen gen -p "tech logo" -m midjourney-v8.1 -r 1:1

  # Referans görüntüyle (yerel dosya otomatik yüklenir)
  npx meigen gen -p "product hero shot" --ref ~/Desktop/bottle.jpg

  # Sadece gönder — generationId'yi yoklamadan yazdır (CI için iyi)
  npx meigen gen -p "..." --no-wait

  # Makine tarafından okunabilir çıktı (jq pipes için iyi)
  npx meigen gen -p "..." --json | jq -r '.imageUrls[0]'
  ```

  Görüntü `~/Pictures/meigen/` adresine kaydedilir (`MEIGEN_OUTPUT_DIR` ile geçersiz kılın).

  `meigen gen --help` tüm bayrakları listeler.

  ### Diğer MCP Uyumlu Hostlar

  MCP config'inize ekleyin (örneğin `.mcp.json`, `claude_desktop_config.json`):

  ```json
  {
    "mcpServers": {
      "meigen": {
        "command": "npx",
        "args": ["-y", "meigen@1.3.2"],
        "env": {
          "MEIGEN_API_TOKEN": "meigen_sk_..."
        }
      }
    }
  }
  ```

  > Ücretsiz özellikler (ilham araması, prompt geliştirme, model listeleme) herhangi bir API anahtarı olmadan çalışır.

  ### Hermes Agent (NousResearch)

  [Hermes Agent](https://github.com/NousResearch/hermes-agent) birinci sınıf MCP istemcisidir — MeiGen'i `~/.hermes/config.yaml` dosyasına ekleyin:

  ```yaml
  mcp_servers:
    meigen:
      command: "npx"
      args: ["-y", "meigen@1.3.2"]
      env:
        MEIGEN_API_TOKEN: "meigen_sk_..."
      timeout: 600          # generate_video 5–10 dakika sürebilir — varsayılan 120s yeterli değildir
      connect_timeout: 120  # ilk npx indirme bir dakika sürebilir
  ```

  > `timeout: 600` ve `connect_timeout: 120` geçersiz kılmalar önemlidir — Hermes varsayılanları (120s / 60s) kısa çalışan araçlara ayarlanmıştır ve video üretimi veya ilk çalıştırma npx indirmelerinde zaman aşımına uğrayacaktır.

  ---

  <h2 id="features">Özellikler</h2>

  ### MCP Araçları

  | Araç | Ücretsiz | Açıklama |
  |------|------|-------------|
  | `search_gallery` | Evet | 1.446 seçilmiş trend prompi'i görsel önizlemelerle arayın ([nanobanana-trending-prompts](https://github.com/jau123/nanobanana-trending-prompts) tarafından desteklenen) |
  | `get_inspiration` | Evet | Herhangi bir galeri girişi için tam prompt, tüm görüntüler ve metaveriler alın |
  | `enhance_prompt` | Evet | Kısa bir fikri profesyonel bir görüntü promptu'na dönüştürün |
  | `list_models` | Evet | Tüm yapılandırılmış sağlayıcılar arasında mevcut modellleri listeleyin |
  | `comfyui_workflow` | Evet | ComfyUI workflow şablonlarını yönetin: listele, görüntüle, içeri aktar, değiştir, sil |
  | `manage_preferences` | Evet | Tercih edilen stilinizi, en boy oranınızı, modelinizi ve favori promptlarınızı hatırlayın |
  | `generate_image` | Anahtar | Görüntü oluştur — otomatik olarak en iyi kullanılabilir sağlayıcıya yönlendir. Yerel referans görüntüleri otomatik olarak sıkıştırılır ve yüklenir. |
  | `generate_video` | Anahtar | MeiGen platformu aracılığıyla video oluştur — Seedance 2.0 (hızlı/pro), Happyhorse 1.0 veya Veo 3.1. Metin-video ve ilk kare görüntü-video destekler; yerel dosyalar otomatik yüklenir. MP4'ü `~/Movies/meigen/` adresine kaydeder. |

  ### Slash Komutları

  | Komut | Açıklama |
  |---------|-------------|
  | `/meigen:gen <prompt>` | Hızlı oluştur — konuşmayı atla, doğru görüntüye geç |
  | `/meigen:find <keywords>` | İlham için 1.446 seçilmiş promptta arayın |
  | `/meigen:models` | Bu oturum için yapay zeka modellerine göz atın ve değiştirin |
  | `/meigen:setup` | Etkileşimli sağlayıcı konfigürasyonu sihirbazı |

  ### Bağımsız CLI Modu

  MCP host'u çalıştırmayan kabuk betikleri, CI pipeline'ları ve terminal kullanıcıları için:

  ```bash
  export MEIGEN_API_TOKEN=meigen_sk_...
  npx meigen gen --prompt "a calico cat in a sunlit kitchen"
  npx meigen gen -p "logo design" -m midjourney-v8.1 -r 1:1 --json
  ```

  Tam bayrak listesi için [CLI olarak kullanın (MCP host gerekmez)](#cli-olarak-kullanın-mcp-host-gerekmez) bölümüne bakın.

  ### Akıllı Agenlar

  MeiGen verimli paralel yürütme için özel alt-agenlar kullanır:

  | Agent | Amaç |
  |-------|---------|
  | `image-generator` | `generate_image` işletilir izole kontekste — gerçek paralel üretimi etkinleştirir |
  | `prompt-crafter` | Toplu üretim için birden fazla farklı prompt yazar (maliyet verimliliği için Haiku'da çalışır) |
  | `gallery-researcher` | Ana konuşmayı karmaşık hale getirmeden derin galeri keşfi (Haiku'da çalışır) |

  ### Çıktı Stilleri

  `/output-style` ile yaratıcı modlar arasında geçiş yapın:

  - **Creative Director** — Görsel hikaye anlatımı, mood board'ları ve tasarım düşüncesi ile sanat yönlendirmesi modu
  - **Minimal** — Sadece görüntüler ve dosya yolları, yorum yok. Toplu iş akışları için ideal

  ### Otomasyon Kancaları

  - **Config Kontrolü** — Oturum başlangıcında sağlayıcı yapılandırmasını doğrular, eksikse kuruluma rehber eder
  - **Otomatik Açma** — Oluşturulan görüntüler otomatik olarak Preview'da açılır (macOS)

  ---

  <h2 id="providers">Sağlayıcılar</h2>

  MeiGen MCP üç görüntü üretimi backend'ini destekler. Birini veya birden fazlasını yapılandırın — sistem otomatik olarak en iyi olanı seçer.

  ### ComfyUI — Yerel ve Ücretsiz

  Üretimi kendi GPU'nuzda model'ler, samplers ve workflow parametreleri üzerinde tam kontrolle çalıştırın. Herhangi bir ComfyUI API biçimi workflow'ünü içeri aktarın — MeiGen otomatik olarak KSampler, CLIPTextEncode, EmptyLatentImage ve LoadImage node'larını algılar.

  ```json
  {
    "comfyuiUrl": "http://localhost:8188",
    "comfyuiDefaultWorkflow": "txt2img"
  }
  ```

  > Flux, SDXL veya yerel olarak çalıştırdığınız herhangi bir model için ideal. Görüntüleriniz asla makinenizi terk etmez.

  ### MeiGen Cloud

  Birden fazla model içeren bulut API'si: GPT Image 2.0, Nanobanana 2, Seedream 5.0 ve daha fazlası. GPU gerekmez.

  **API token'ınızı alın:**
  1. [meigen.ai](https://www.meigen.ai) adresinde oturum açın
  2. Avatar'ınıza tıklayın → **Settings** → **API Keys**
  3. Yeni anahtar oluşturun (`meigen_sk_` ile başlar)

  ```json
  { "meigenApiToken": "meigen_sk_..." }
  ```

  **GPT Image 2.0 çözünürlük ve kalite** — varsayılan model iki isteğe bağlı `generate_image` parametresini kabul eder:

  - `resolution`: örneğin `"1K"` / `"2K"` / `"4K"` — posterler, baskılar, duvar kağıtları için yükselt
  - `quality`: örneğin `"low"` / `"medium"` / `"high"` — hızlı taslaklar ve küçük resimler için `"low"` kullanın

  Her model kendi desteklenen çözünürlükleri ve kalite katmanlarını ortaya çıkarır — mevcut olanları görmek için `list_models` çalıştırın. Tüm modeller arasında güncel fiyatlandırma için [meigen.ai/model-comparison](https://www.meigen.ai/model-comparison) adresine bakın.

  ### Kendi API'nizi Getirin (OpenAI Uyumlu)

  OpenAI biçimini takip eden **herhangi** bir görüntü üretimi API'sine bağlanın — Together AI, Fireworks AI, DeepInfra, SiliconFlow veya kendi endpoint'iniz. Sadece anahtarınızı, temel URL'nizi ve model adını sağlayın:

  ```json
  {
    "openaiApiKey": "sk-...",
    "openaiBaseUrl": "https://api.together.xyz/v1",
    "openaiModel": "black-forest-labs/FLUX.1-schnell"
  }
  ```

  > Üç sağlayıcının tümü **referans görüntülerini** destekler. MeiGen ve OpenAI uyumlu API'ler URL'leri doğrudan kabul eder; ComfyUI yerel dosya yollarını ve URL'leri kabul eder, bunları workflow'ünüzdeki LoadImage node'larına enjekte eder.

  ---

  ## Konfigürasyon

  ### Etkileşimli Kurulum (Önerilir)

  ```
  /meigen:setup
  ```

  Sihirbaz sizi sağlayıcı seçimi, API anahtarı girişi ve ComfyUI workflow'ü içeri aktarma aşamasında rehber eder. Ayrıca API sağlayıcınızın belgelerinden bir `curl` komutunu yapıştırabilirsiniz — otomatik olarak anahtarı, URL'yi ve modeli çıkarır.

  ### Config Dosyası

  Konfigürasyon `~/.config/meigen/config.json` adresinde depolanır. ComfyUI workflow'ları `~/.config/meigen/workflows/` adresinde depolanır.

  ### Ortam Değişkenleri

  Ortam değişkenleri config dosyasından önce gelir.

  | Değişken | Açıklama |
  |----------|-------------|
  | `MEIGEN_API_TOKEN` | MeiGen platformu token'ı |
  | `OPENAI_API_KEY` | API anahtarınız (herhangi bir OpenAI uyumlu sağlayıcı) |
  | `OPENAI_BASE_URL` | API temel URL'si — Together AI, Fireworks AI, vb. kullanmak için bunu değiştirin |
  | `OPENAI_MODEL` | Endpoint'iniz tarafından desteklenen model kimliği |
  | `COMFYUI_URL` | ComfyUI sunucusu URL'si (varsayılan: `http://localhost:8188`) |
  | `MEIGEN_OUTPUT_DIR` | Oluşturulan görüntüler için yerel kaydetme dizinini geçersiz kılın (varsayılan: `~/Pictures/meigen`). Sandbox'ı olan hostlar için faydalı (örn. OpenClaw) burada varsayılan yol ulaşılamaz. |
  | `MEIGEN_VIDEO_OUTPUT_DIR` | Oluşturulan videolar için yerel kaydetme dizinini geçersiz kılın (varsayılan: `~/Movies/meigen`). |
  | `XDG_PICTURES_DIR` | Sadece Linux — `MEIGEN_OUTPUT_DIR` ayarlanmadığında, bu env değişkeni ayarlanmışsa (örn. masaüstü ortamınız tarafından) görüntüler `$XDG_PICTURES_DIR/meigen` adresine kaydedilir. `~/Pictures/meigen` adresine geri döner. |
  | `XDG_VIDEOS_DIR` | Sadece Linux — `XDG_PICTURES_DIR` ile aynı mantık ancak videolar için. `~/Movies/meigen` adresine geri döner. |

  ---

  ## Gizlilik

  MeiGen MCP gizliliğinize saygı duyar. Verilerinize ne olur işte:

  - **ComfyUI (yerel)** — Tüm işlem makinenizde kalır. Harici olarak veri gönderilmez.
  - **MeiGen Cloud** — Promptlar ve referans görüntüler üretim için `api.meigen.ai` adresine gönderilir. Oluşturulan görüntüler geçici olarak Cloudflare R2'de depolanır. [meigen.ai/privacy](https://www.meigen.ai/privacy) adresine bakın.
  - **OpenAI uyumlu** — Promptlar ve referans görüntüler yapılandırılmış API endpoint'ine gönderilir. Sağlayıcınızın gizlilik ilkesine bakın.
  - **Referans görüntüsü yükleme** — Görüntüler yerel olarak sıkıştırılır (maksimum 2MB) ve `gen.meigen.ai` aracılığıyla Cloudflare R2'ye yüklenir. Yüklenen görüntüler **24 saat** sonra otomatik olarak sona erer. Kimlik doğrulaması gerekmez. ComfyUI kullanıcıları yerel dosya yollarını doğrudan geçirerek yüklemeyi tamamen atlayabilir.
  - **Galeri araması ve prompt geliştirme** — Paketlenmiş verilere karşı yerel olarak çalışır. Harici API çağrısı yok.

  Hiçbir telemetri, analitik veya izleme yok.

  ### Özel Depolama Backend'i

  Referans görüntüsü yükleme için kendi S3/R2 bucket'ınızı kullanmayı tercih ederseniz, `UPLOAD_GATEWAY_URL` ortam değişkenini veya `~/.config/meigen/config.json` dosyasındaki `uploadGatewayUrl` değişkenini kendi presign endpoint'inize işaret etmek için ayarlayın. Endpoint'in şunları uygulaması gerekir:

  ```
  POST /upload/presign
  Content-Type: application/json

  İstek:  { "filename": "photo.jpg", "contentType": "image/jpeg", "size": 123456 }
  Yanıt: { "success": true, "presignedUrl": "https://...", "publicUrl": "https://..." }
  ```

  `presignedUrl` bir `PUT` yüklemesi için kullanılır ve `publicUrl` kullanıcıya döndürülen herkese açık URL'dir.

  ---

  ## Lisans

  [MIT](LICENSE) — kişisel ve ticari kullanım için ücretsiz.
---

<h1 align="center">
  MeiGen AI Design MCP <a href="https://github.com/punkpeye/awesome-mcp-servers"></a> <a href="https://github.com/wshobson/agents/tree/main/plugins/meigen-ai-design"></a>
</h1>

<p align="center">
  <strong>Open-source MCP server for AI image &amp; video generation — native to every major AI coding tool</strong><br><sub>9 leading models (GPT Image 2 · Nanobanana 2 · Seedream 5.0 · Midjourney V8.1 · Flux 2 Klein · Seedance 2.0 · Happyhorse 1.0 · Veo 3.1 · local ComfyUI) · 1,446 curated prompts · parallel sub-agent orchestration · standalone CLI mode. Works in Claude Code, Cursor, Codex, Windsurf, Roo Code, OpenClaw, Hermes Agent, and any MCP-compatible host.</sub>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/meigen"></a>
  <a href="https://www.npmjs.com/package/meigen"></a>
  
  
  <a href="LICENSE"></a>
  <a href="https://discord.gg/uX6rnersUx"></a>
</p>

<p align="center">
  <a href="#quick-start">Quick Start</a> &bull;
  <a href="#see-it-in-action">Demo</a> &bull;
  <a href="#features">Features</a> &bull;
  <a href="#providers">Providers</a> &bull;
  <a href="#slash-commands">Commands</a>
</p>

<p align="center">
  <strong>English</strong> | <a href="README.zh-CN.md">中文</a>
</p>

---

## What Is This?

An MCP server that turns any AI coding tool into a professional design assistant. **8 tools** + a curated 1,446-prompt library let it design logos, render product shots, animate stills into video, and orchestrate parallel batch variations. Works in **Claude Code**, **Cursor**, **Codex**, **Windsurf**, **Roo Code**, **OpenClaw**, **Hermes Agent**, and any MCP-compatible host — with the **MeiGen platform**, any **OpenAI-compatible API**, or your **local ComfyUI** as the backend.

- Three backend modes: **MeiGen cloud** (9 image and video models), **OpenAI-compatible** (bring your own key and endpoint), or **local ComfyUI** (offline, your GPU)
- Built-in 1,446 curated prompt templates from [nanobanana-trending-prompts](https://github.com/jau123/nanobanana-trending-prompts) plus style-aware prompt enhancement
- Parallel batch generation via sub-agents to keep the main context clean — plus a standalone CLI for shell scripts and CI

---

## See It in Action

<p align="center">
  <a href="https://youtu.be/JQ3DZ1DXqvs">
    
  </a>
  <br>
  <b><a href="https://youtu.be/JQ3DZ1DXqvs">▶ Watch demo on YouTube</a></b>
</p>

### Product Photo — 4 Directions in Parallel

> *"Create 4 product display images for this perfume, one of which should feature a model."*

**Process** — AI uploads the reference image, crafts 4 distinct prompts, then generates all 4 in parallel:

<p align="center">
  
</p>

**Result** — 4 creative directions delivered in under 2 minutes:

<p align="center">
  
</p>

**Generated images:**

<p align="center">
  
  
  
  
</p>

---

## Quick Start

### Claude Code Plugin (Recommended)

```bash
# Add the plugin marketplace
/plugin marketplace add jau123/MeiGen-AI-Design-MCP

# Install
/plugin install meigen@meigen-marketplace
```

**Restart Claude Code** after installation (close and reopen, or open a new terminal tab).

**Alternative marketplace** — also available via [wshobson/agents](https://github.com/wshobson/agents) (30k+ stars):

```bash
/plugin marketplace add wshobson/agents
/plugin install meigen-ai-design@claude-code-workflows
```

> This marketplace doesn't bundle MCP server config. After installing, add to your project's `.mcp.json`:
> ```json
> { "mcpServers": { "meigen": { "command": "npx", "args": ["-y", "meigen@1.3.2"] } } }
> ```

#### First-Time Setup

Free features work immediately after restart — try:

> "Search for some creative inspiration"

To unlock image generation, run the setup wizard:

```
/meigen:setup
```

The wizard walks you through:
1. **Choose a provider** — local ComfyUI, MeiGen Cloud, or any OpenAI-compatible API (bring your own key & endpoint)
2. **Enter credentials** — ComfyUI URL, API token, or key
3. **Done** — restart Claude Code once more, then start generating

### Cursor / VS Code / Windsurf / Roo Code

One command to set up MeiGen for any supported AI coding tool:

```bash
npx meigen init cursor      # Cursor
npx meigen init vscode      # VS Code / GitHub Copilot
npx meigen init windsurf    # Windsurf
npx meigen init roo         # Roo Code
npx meigen init claude      # Claude Code (project-level)
```

This writes the correct MCP config file with the right format and path for your tool. If a config file already exists, MeiGen is merged in without overwriting your other servers.

### OpenClaw

Install the full plugin from [ClawHub](https://clawhub.ai/plugins/meigen-ai-design) (includes commands, skills, and MCP server):

```bash
openclaw bundles install clawhub:meigen-ai-design
```

Or install only the skill (no commands/agents):

```bash
npx clawhub@latest install creative-toolkit
```

### Use as CLI (no MCP host required)

For shell scripts, CI pipelines, or anyone who wants AI image generation without an MCP host, MeiGen ships a one-shot `gen` command in the same npm package.

```bash
# Set your token once (get it at https://www.meigen.ai → Settings → API Keys)
export MEIGEN_API_TOKEN=meigen_sk_...

# Generate
npx meigen gen --prompt "a calico cat in a sunlit kitchen"

# With a specific model + aspect ratio
npx meigen gen -p "tech logo" -m midjourney-v8.1 -r 1:1

# With a reference image (local file auto-uploaded)
npx meigen gen -p "product hero shot" --ref ~/Desktop/bottle.jpg

# Submit only — print generationId without polling (good for CI)
npx meigen gen -p "..." --no-wait

# Machine-readable output (good for jq pipes)
npx meigen gen -p "..." --json | jq -r '.imageUrls[0]'
```

The image is saved to `~/Pictures/meigen/` (override with `MEIGEN_OUTPUT_DIR`).

`meigen gen --help` lists all flags.

### Other MCP-Compatible Hosts

Add to your MCP config (e.g. `.mcp.json`, `claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "meigen": {
      "command": "npx",
      "args": ["-y", "meigen@1.3.2"],
      "env": {
        "MEIGEN_API_TOKEN": "meigen_sk_..."
      }
    }
  }
}
```

> Free features (inspiration search, prompt enhancement, model listing) work without any API key.

### Hermes Agent (NousResearch)

[Hermes Agent](https://github.com/NousResearch/hermes-agent) is a first-class MCP client — add MeiGen to `~/.hermes/config.yaml`:

```yaml
mcp_servers:
  meigen:
    command: "npx"
    args: ["-y", "meigen@1.3.2"]
    env:
      MEIGEN_API_TOKEN: "meigen_sk_..."
    timeout: 600          # generate_video can take 5–10 min — default 120s is not enough
    connect_timeout: 120  # first npx download can take a minute
```

> The `timeout: 600` and `connect_timeout: 120` overrides are important — Hermes defaults (120s / 60s) are tuned for short-running tools and will time out on video generation or first-run npx downloads.

---

<h2 id="features">Features</h2>

### MCP Tools

| Tool | Free | Description |
|------|------|-------------|
| `search_gallery` | Yes | Search 1,446 curated trending prompts with visual previews (powered by [nanobanana-trending-prompts](https://github.com/jau123/nanobanana-trending-prompts)) |
| `get_inspiration` | Yes | Get full prompt, all images, and metadata for any gallery entry |
| `enhance_prompt` | Yes | Transform a brief idea into a professional image prompt |
| `list_models` | Yes | List available models across all configured providers |
| `comfyui_workflow` | Yes | Manage ComfyUI workflow templates: list, view, import, modify, delete |
| `manage_preferences` | Yes | Remember your preferred style, aspect ratio, model, and favorite prompts |
| `generate_image` | Key | Generate an image — routes to the best available provider automatically. Local reference images are auto-compressed and uploaded. |
| `generate_video` | Key | Generate a video via MeiGen platform — Seedance 2.0 (fast/pro), Happyhorse 1.0, or Veo 3.1. Supports text-to-video and first-frame image-to-video; local files are auto-uploaded. Saves MP4 to `~/Movies/meigen/`. |

### Slash Commands

| Command | Description |
|---------|-------------|
| `/meigen:gen <prompt>` | Quick generate — skip conversation, go straight to image |
| `/meigen:find <keywords>` | Search 1,446 curated prompts for inspiration |
| `/meigen:models` | Browse and switch AI models for this session |
| `/meigen:setup` | Interactive provider configuration wizard |

### Standalone CLI Mode

For shell scripts, CI pipelines, and terminal users who don't run an MCP host:

```bash
export MEIGEN_API_TOKEN=meigen_sk_...
npx meigen gen --prompt "a calico cat in a sunlit kitchen"
npx meigen gen -p "logo design" -m midjourney-v8.1 -r 1:1 --json
```

See [Use as CLI (no MCP host required)](#use-as-cli-no-mcp-host-required) for the full flag list.

### Smart Agents

MeiGen uses specialized sub-agents for efficient parallel execution:

| Agent | Purpose |
|-------|---------|
| `image-generator` | Executes `generate_image` in isolated context — enables true parallel generation |
| `prompt-crafter` | Writes multiple distinct prompts for batch generation (runs on Haiku for cost efficiency) |
| `gallery-researcher` | Deep gallery exploration without cluttering the main conversation (runs on Haiku) |

### Output Styles

Switch creative modes with `/output-style`:

- **Creative Director** — Art direction mode with visual storytelling, mood boards, and design thinking
- **Minimal** — Just images and file paths, no commentary. Ideal for batch workflows

### Automation Hooks

- **Config Check** — Validates provider configuration on session start, guides setup if missing
- **Auto-Open** — Generated images automatically open in Preview (macOS)

---

<h2 id="providers">Providers</h2>

MeiGen MCP supports three image generation backends. Configure one or multiple — the system auto-selects the best available.

### ComfyUI — Local & Free

Run generation on your own GPU with full control over models, samplers, and workflow parameters. Import any ComfyUI API-format workflow — MeiGen auto-detects KSampler, CLIPTextEncode, EmptyLatentImage, and LoadImage nodes.

```json
{
  "comfyuiUrl": "http://localhost:8188",
  "comfyuiDefaultWorkflow": "txt2img"
}
```

> Perfect for Flux, SDXL, or any model you run locally. Your images never leave your machine.

### MeiGen Cloud

Cloud API with multiple models: GPT Image 2.0, Nanobanana 2, Seedream 5.0, and more. No GPU required.

**Get your API token:**
1. Sign in at [meigen.ai](https://www.meigen.ai)
2. Click your avatar → **Settings** → **API Keys**
3. Create a new key (starts with `meigen_sk_`)

```json
{ "meigenApiToken": "meigen_sk_..." }
```

**GPT Image 2.0 resolution & quality** — the default model accepts two optional `generate_image` parameters:

- `resolution`: e.g. `"1K"` / `"2K"` / `"4K"` — upgrade for posters, prints, wallpapers
- `quality`: e.g. `"low"` / `"medium"` / `"high"` — use `"low"` for quick drafts and thumbnails

Each model exposes its own supported resolutions and quality tiers — run `list_models` to see what's available. For up-to-date pricing across all models, see [meigen.ai/model-comparison](https://www.meigen.ai/model-comparison).

### Bring Your Own API (OpenAI-Compatible)

Connect **any** image generation API that follows the OpenAI format — Together AI, Fireworks AI, DeepInfra, SiliconFlow, or your own endpoint. Just provide your key, base URL, and model name:

```json
{
  "openaiApiKey": "sk-...",
  "openaiBaseUrl": "https://api.together.xyz/v1",
  "openaiModel": "black-forest-labs/FLUX.1-schnell"
}
```

> All three providers support **reference images**. MeiGen and OpenAI-compatible APIs accept URLs directly; ComfyUI accepts both URLs and local file paths, injecting them into LoadImage nodes in your workflow.

---

## Configuration

### Interactive Setup (Recommended)

```
/meigen:setup
```

The wizard walks you through provider selection, API key entry, and ComfyUI workflow import. You can also paste a `curl` command from your API provider's docs — it auto-extracts the key, URL, and model.

### Config File

Configuration is stored at `~/.config/meigen/config.json`. ComfyUI workflows are stored at `~/.config/meigen/workflows/`.

### Environment Variables

Environment variables take priority over the config file.

| Variable | Description |
|----------|-------------|
| `MEIGEN_API_TOKEN` | MeiGen platform token |
| `OPENAI_API_KEY` | Your API key (any OpenAI-compatible provider) |
| `OPENAI_BASE_URL` | API base URL — change this to use Together AI, Fireworks AI, etc. |
| `OPENAI_MODEL` | Model ID supported by your endpoint |
| `COMFYUI_URL` | ComfyUI server URL (default: `http://localhost:8188`) |
| `MEIGEN_OUTPUT_DIR` | Override the local save directory for generated images (default: `~/Pictures/meigen`). Useful for sandboxed hosts (e.g. OpenClaw) where the default path is unreachable. |
| `MEIGEN_VIDEO_OUTPUT_DIR` | Override the local save directory for generated videos (default: `~/Movies/meigen`). |
| `XDG_PICTURES_DIR` | Linux only — when `MEIGEN_OUTPUT_DIR` is unset, images are saved to `$XDG_PICTURES_DIR/meigen` if this env var is set (e.g. by your desktop environment). Falls back to `~/Pictures/meigen`. |
| `XDG_VIDEOS_DIR` | Linux only — same logic as `XDG_PICTURES_DIR` but for videos. Falls back to `~/Movies/meigen`. |

---

## Privacy

MeiGen MCP respects your privacy. Here's what happens with your data:

- **ComfyUI (local)** — All processing stays on your machine. No data is sent externally.
- **MeiGen Cloud** — Prompts and reference images are sent to `api.meigen.ai` for generation. Generated images are stored temporarily on Cloudflare R2. See [meigen.ai/privacy](https://www.meigen.ai/privacy).
- **OpenAI-compatible** — Prompts and reference images are sent to the configured API endpoint. See your provider's privacy policy.
- **Reference image upload** — Images are compressed locally (max 2MB) and uploaded to Cloudflare R2 via `gen.meigen.ai`. Uploaded images expire automatically after **24 hours**. No authentication required. ComfyUI users can skip uploading entirely by passing local file paths directly.
- **Gallery search & prompt enhancement** — Run locally against bundled data. No external API calls.

No telemetry, analytics, or tracking of any kind.

### Custom Storage Backend

If you prefer to use your own S3/R2 bucket for reference image uploads, set the `UPLOAD_GATEWAY_URL` environment variable or `uploadGatewayUrl` in `~/.config/meigen/config.json` to point to your own presign endpoint. The endpoint must implement:

```
POST /upload/presign
Content-Type: application/json

Request:  { "filename": "photo.jpg", "contentType": "image/jpeg", "size": 123456 }
Response: { "success": true, "presignedUrl": "https://...", "publicUrl": "https://..." }
```

The `presignedUrl` is used for a `PUT` upload, and `publicUrl` is the publicly accessible URL returned to the user.

---

## License

[MIT](LICENSE) — free for personal and commercial use.
