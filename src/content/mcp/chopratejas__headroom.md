---
name: "chopratejas/headroom"
description: "Context compression layer for AI agents. Compresses tool outputs, logs, RAG chunks, files, and conversation history before they reach the LLM, with reversible retrieval through MCP tools."
category: "Knowledge & Memory"
repo: "chopratejas/headroom"
stars: 30407
url: "https://github.com/chopratejas/headroom"
body_length: 21691
license: "Apache-2.0"
language: "Python"
homepage: "https://headroom-docs.vercel.app/docs"
body_tr: |-
  <div align="center"><pre>
    ██╗  ██╗███████╗ █████╗ ██████╗ ██████╗  ██████╗  ██████╗ ███╗   ███╗
    ██║  ██║██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔═══██╗██╔═══██╗████╗ ████║
    ███████║█████╗  ███████║██║  ██║██████╔╝██║   ██║██║   ██║██╔████╔██║
    ██╔══██║██╔══╝  ██╔══██║██║  ██║██╔══██╗██║   ██║██║   ██║██║╚██╔╝██║
    ██║  ██║███████╗██║  ██║██████╔╝██║  ██║╚██████╔╝╚██████╔╝██║ ╚═╝ ██║
    ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝     ╚═╝
                    AI ajanları için bağlam sıkıştırma katmanı
  </pre></div>
  
  <p align="center"><strong>60–95% daha az token · library · proxy · MCP · 6 algoritma · yerel-öncelikli · tersine çevrilebilir</strong></p>
  
  <p align="center">
    <a href="https://github.com/chopratejas/headroom/actions/workflows/ci.yml"></a>
    <a href="https://app.codecov.io/gh/chopratejas/headroom"></a>
    <a href="https://pypi.org/project/headroom-ai/"></a>
    <a href="https://www.npmjs.com/package/headroom-ai"></a>
    <a href="https://huggingface.co/chopratejas/kompress-v2-base"></a>
    <a href="LICENSE"></a>
    <a href="https://headroom-docs.vercel.app/docs"></a>
  </p>
  
  <p align="center">
    <a href="https://headroom-docs.vercel.app/docs">Dokümanlar</a> ·
    <a href="#get-started-60-seconds">Kurulum</a> ·
    <a href="#proof">Kanıt</a> ·
    <a href="#agent-compatibility-matrix">Ajanlar</a> ·
    <a href="https://discord.gg/yRmaUNpsPJ">Discord</a> ·
    <a href="llms.txt">llms.txt</a> ·
    <a href="ENTERPRISE.md">Kurumsal</a>
  </p>
  
  <p align="center"><sub>
    <b>AI ajanları / LLM'ler:</b> <a href="llms.txt"><code>/llms.txt</code></a> dosyasını okuyun ya da <a href="https://headroom-docs.vercel.app/llms.txt">canlı indeksi</a> / <a href="https://headroom-docs.vercel.app/llms-full.txt">tam doküman blobunu</a> getirin.
  </sub></p>
  
  ---
  <p align="center"><a href="https://trendshift.io/repositories/20881" target="_blank"></a></p>
  
  Headroom, AI ajanınızın okuduğu her şeyi — tool çıktılarını, logları, RAG parçalarını, dosyaları ve konuşma geçmişini — LLM'e ulaşmadan önce sıkıştırır. Aynı cevaplar, çok daha az token.
  
  <p align="center">
    
    <br/><sub>Canlı: 10.144 → 1.260 token — aynı FATAL bulundu.</sub>
  </p>
  
  ## Ne yapar
  
  - **Library** — Python veya TypeScript'te `compress(messages)`, herhangi bir uygulamaya inline yerleştir
  - **Proxy** — `headroom proxy --port 8787`, sıfır kod değişikliği, herhangi bir dil
  - **Agent wrap** — `headroom wrap claude|codex|cursor|aider|copilot` tek komutla
  - **MCP server** — `headroom_compress`, `headroom_retrieve`, `headroom_stats` herhangi bir MCP istemcisi için
  - **Cross-agent memory** — Claude, Codex, Gemini arasında paylaşılan depo, otomatik dedup
  - **`headroom learn`** — başarısız oturumları inceler, `CLAUDE.md` / `AGENTS.md` dosyasına düzeltmeler yazar
  - **Tersine çevrilebilir (CCR)** — orijinalleri istendiğinde retrieval için önbelleğe alır
  
  ## Nasıl çalışır (30 saniye)
  
  ```
   Ajanınız / uygulamanız
     (Claude Code, Cursor, Codex, LangChain, Agno, Strands, kendi kodunuz…)
          │   promptlar · tool çıktıları · loglar · RAG sonuçları · dosyalar
          ▼
      ┌────────────────────────────────────────────────────┐
      │  Headroom   (yerel olarak çalışır — veriniz burada kalır)  │
      │  ────────────────────────────────────────────────  │
      │  CacheAligner  →  ContentRouter  →  CCR            │
      │                    ├─ SmartCrusher   (JSON)        │
      │                    ├─ CodeCompressor (AST)         │
      │                    └─ Kompress-base  (metin, HF)   │
      │                                                    │
      │  Cross-agent memory  ·  headroom learn  ·  MCP     │
      └────────────────────────────────────────────────────┘
          │   sıkıştırılmış prompt  +  retrieval tool
          ▼
   LLM sağlayıcısı  (Anthropic · OpenAI · Bedrock · …)
  ```
  
  - **ContentRouter** — içerik türünü algılar, doğru compressor'ı seçer
  - **SmartCrusher / CodeCompressor / Kompress-base** — JSON, AST veya metin sıkıştırır
  - **CacheAligner** — prefixleri stabilize eder böylece sağlayıcı KV cache'leri gerçekten hit eder
  - **CCR** — orijinalleri yerel olarak saklar; LLM'e ihtiyacı varsa `headroom_retrieve` çağırır
  
  → [Mimari](https://headroom-docs.vercel.app/docs/architecture) · [CCR tersine çevrilebilir sıkıştırma](https://headroom-docs.vercel.app/docs/ccr) · [Kompress-v2-base model kartı](https://huggingface.co/chopratejas/kompress-v2-base)
  
  ## Başlayın (60 saniye)
  
  ```bash
  # 1 — Kurun
  pip install "headroom-ai[all]"          # Python
  npm install headroom-ai                 # Node / TypeScript
  
  # 2 — Modunuzu seçin
  headroom wrap claude                    # bir coding ajanını wrap et
  headroom proxy --port 8787              # drop-in proxy, sıfır kod değişikliği
  # veya: from headroom import compress   # inline library
  
  # 3 — Tasarruflara bakın
  headroom perf
  ```
  
  Detaylı ekstralar: `[proxy]`, `[mcp]`, `[ml]`, `[code]`, `[memory]`, `[relevance]`, `[image]`, `[agno]`, `[langchain]`, `[evals]`, `[pytorch-mps]` (Apple-GPU hafıza-embedder offload — `HEADROOM_EMBEDDER_RUNTIME=pytorch_mps` ayarla). **Python 3.10+** gerektirir.
  
  ## Kanıt
  
  **Gerçek agent iş yükleri üzerine tasarruflar:**
  
  | İş yükü                        | Önce  | Sonra  | Tasarruf |
  |--------------------------------|------:|-------:|--------:|
  | Kod arama (100 sonuç)          | 17.765|  1.408 | **92%** |
  | SRE olay hata ayıklaması       | 65.694|  5.118 | **92%** |
  | GitHub issue sınıflandırması   | 54.174| 14.761 | **73%** |
  | Kod tabanı keşfi               | 78.502| 41.254 | **47%** |
  
  **Standart benchmark'lerde doğruluk korunur:**
  
  | Benchmark  | Kategori | N   | Başlangıç | Headroom | Delta      |
  |------------|----------|----:|----------:|----------:|------------|
  | GSM8K      | Matematik | 100 |     0.870 |    0.870 | **±0.000** |
  | TruthfulQA | Faktsal   | 100 |     0.530 |    0.560 | **+0.030** |
  | SQuAD v2   | QA       | 100 |         — |  **97%** | 19% sıkıştırma |
  | BFCL       | Araçlar  | 100 |         — |  **97%** | 32% sıkıştırma |
  
  Çoğalt: `python -m headroom.evals suite --tier 1` · [Tam benchmark'ler & metodoloji](https://headroom-docs.vercel.app/docs/benchmarks)
  
  <a href="https://www.star-history.com/?repos=chopratejas%2Fheadroom&type=date&legend=top-left">
   <picture>
     
   </picture>
  </a>
  
  ## Agent uyumluluğu matrisi
  
  | Ajan        | `headroom wrap` | Notlar                           |
  |-------------|:---------------:|----------------------------------|
  | Claude Code | ✅              | `--memory` · `--code-graph`      |
  | Codex       | ✅              | Claude ile hafıza paylaşır       |
  | Cursor      | ✅              | yapılandırmayı yazdırır — bir kez yapıştır |
  | Aider       | ✅              | proxy başlatır + başlatır        |
  | Copilot CLI | ✅              | proxy başlatır + başlatır        |
  | OpenClaw    | ✅              | ContextEngine plugin olarak yükler |
  
  Herhangi bir OpenAI-uyumlu istemci `headroom proxy` aracılığıyla çalışır. MCP-native: `headroom mcp install`.
  
  ### GitHub Copilot CLI abonelik modu
  
  Headroom, GitHub Copilot CLI abonelik trafiğini yerel proxy aracılığıyla yönlendirebilir:
  
  ```bash
  headroom copilot-auth login
  headroom wrap copilot --subscription -- --model gpt-4o
  ```
  
  Bu, Headroom'un OpenAI-uyumlu Copilot CLI isteklerini kesmesine ve GitHub Copilot'un barındırılan API'sine iletmeden önce aynı proxy sıkıştırma boru hattını uygulamasına izin verir. Wrapper, Headroom'un yeniden kullanılabilir GitHub OAuth token'ını Copilot'un kısa ömürlü API token'ı ile değiştirir ve başlatma sırasında upstream endpoint'i `COPILOT_PROVIDER_API_URL=...` olarak yazdırır.
  
  `headroom copilot-auth login`, Headroom'a özgü bir Copilot OAuth token'ı depolar.
  Bu, Copilot hesap metadatasını okuyabilen ancak yine de Copilot'un token-exchange
  endpoint'i tarafından reddedebilecek genel GitHub veya Copilot CLI token'larına güvenmeyi önler.
  
  GitHub Enterprise Server veya özel-domain Copilot dağıtımları için,
  başlatmadan önce dağıtım etki alanını ayarlayın:
  
  ```bash
  export GITHUB_COPILOT_ENTERPRISE_DOMAIN=ghe.example.com
  ```
  
  `github.com/enterprises/your-enterprise` gibi GitHub.com Enterprise Cloud URL'leri için,
  bir enterprise-domain geçersiz kılması ayarlamayın. Headroom, GitHub'ın normal
  token-exchange endpoint'ini ve oturum açan hesap için advertised Copilot API endpoint'ini kullanır.
  
  Platform destek notu: macOS auth yeniden kullanımı Copilot CLI Keychain depolama aracılığıyla smoke-test edilmiştir. Windows Credential Manager, Linux Secret Service / `secret-tool` ve Docker/CI token-injection yolları auth-discovery yolları olarak uygulanmış veya planlanmıştır, ancak tam olarak onaylanmış kabul edilmeden önce gerçek OS doğrulamasına ihtiyaç duyarlar. Docker ve CI için, host keychain erişimine güvenmek yerine açık bir `GITHUB_COPILOT_TOKEN` veya `GITHUB_COPILOT_GITHUB_TOKEN` geçmeyi tercih edin.
  
  ## Ne zaman kullanılır · Ne zaman atlanır
  
  **Eğer şunları yapıyorsanız harika bir seçim…**
  - her gün AI coding ajanları çalıştırıyor ve kodunuzu değiştirmeden tasarruf istiyorsunuz
  - birden fazla ajan arasında çalışıyor ve paylaşılan hafıza istiyorsunuz
  - tersine çevrilebilir sıkıştırmaya ihtiyacınız var — orijinalleri yapılandırılmış TTL içinde CCR aracılığıyla alabilirsiniz
  
  **Atlayın eğer…**
  - sadece tek bir sağlayıcının yerel sıkıştırmasını kullanıyor ve cross-agent hafızaya ihtiyacınız yoksa
  - yerel işlemlerin çalışamadığı sandboxed bir ortamda çalışıyorsanız
  
  <details>
  <summary><b>İntegrasyonlar — Headroom'u herhangi bir stack'e yerleştir</b></summary>
  
  | Kurulumunuz             | Bağlanın                                                             |
  |--------------------------|------------------------------------------------------------------|
  | Herhangi bir Python app   | `compress(messages, model=…)`                                    |
  | Herhangi bir TypeScript app | `await compress(messages, { model })`                            |
  | Anthropic / OpenAI SDK | `withHeadroom(new Anthropic())` · `withHeadroom(new OpenAI())`   |
  | Vercel AI SDK          | `wrapLanguageModel({ model, middleware: headroomMiddleware() })` |
  | LiteLLM                | `litellm.callbacks = [HeadroomCallback()]`                       |
  | LangChain              | `HeadroomChatModel(your_llm)`                                    |
  | Agno                   | `HeadroomAgnoModel(your_model)`                                  |
  | Strands                | [Strands rehberi](https://headroom-docs.vercel.app/docs/strands)  |
  | ASGI apps              | `app.add_middleware(CompressionMiddleware)`                      |
  | Multi-agent            | `SharedContext().put / .get`                                     |
  | MCP clients            | `headroom mcp install`                                           |
  
  </details>
  
  <details>
  <summary><b>İçinde neler var</b></summary>
  
  - **SmartCrusher** — evrensel JSON: dicts dizileri, iç içe nesneler, karışık türler.
  - **CodeCompressor** — Python, JS, Go, Rust, Java, C++ için AST-farkındır.
  - **Kompress-base** — HuggingFace modelimiz, agentic izleri üzerinde eğitildi.
  - **Görüntü sıkıştırması** — eğitilmiş ML router aracılığıyla 40–90% indirim.
  - **CacheAligner** — prefixleri stabilize eder böylece Anthropic/OpenAI KV cache'leri hit eder.
  - **IntelligentContext** — öğrenilen önem ile puan tabanlı bağlam uydurmak.
  - **CCR** — tersine çevrilebilir sıkıştırma; LLM talep halinde orijinalleri alır.
  - **Cross-agent memory** — paylaşılan depo, agent provenance, otomatik dedup.
  - **SharedContext** — multi-agent iş akışları arasında sıkıştırılmış bağlam geçişi.
  - **`headroom learn`** — Claude, Codex, Gemini için plugin-tabanlı başarısızlık madenciliği.
  
  </details>
  
  <details>
  <summary><b>Pipeline iç işleyişi</b></summary>
  
  Headroom, `compress()`, SDK ve proxy arasında bir sabit request yaşam döngüsü ortaya koyar:
  
  `Setup` → `Pre-Start` → `Post-Start` → `Input Received` → `Input Cached` → `Input Routed` → `Input Compressed` → `Input Remembered` → `Pre-Send` → `Post-Send` → `Response Received`
  
  - **Transforms** işi yapar: CacheAligner, ContentRouter, SmartCrusher, CodeCompressor, Kompress-base, IntelligentContext / RollingWindow.
  - **Pipeline extensions** yaşam döngüsü aşamalarını gözlemler veya özelleştirir `on_pipeline_event(...)` aracılığıyla.
  - **Compression hooks** kanonik yaşam döngüsünün yanında ek bir extension dikiş olarak oturur.
  - **Proxy extensions** ASGI middleware, rotalar ve başlangıç politikası için sunucu/uygulama integrasyon dikiş olarak kalır.
  
  Sağlayıcı ve tool-specific davranış `headroom/providers/` altında yaşar böylece core orchestration yaşam döngüsü, sıralama ve politika üzerine odaklanır.
  
  - **CLI/tool slices**: `headroom/providers/claude`, `copilot`, `codex`, `openclaw`
  - **Provider runtime slices**: `headroom/providers/claude`, `gemini`, artı `headroom/providers/registry.py` içinde paylaşılan backend/runtime dispatch
  - **Core dosyalar orchestration-first kalır**: `wrap.py`, `client.py`, `cli/proxy.py` ve `proxy/server.py` sağlayıcı-spesifik env şekillendirme, API hedef normalizasyonu, backend seçimi ve transport dispatch'e devret.
  
  </details>
  
  ## Kurulum
  
  ```bash
  pip install "headroom-ai[all]"          # Python, her şey
  npm install headroom-ai                 # TypeScript / Node
  docker pull ghcr.io/chopratejas/headroom:latest
  ```
  
  Detaylı ekstralar: `[proxy]`, `[mcp]`, `[ml]` (Kompress-base), `[code]`, `[memory]`, `[relevance]`, `[image]`, `[agno]`, `[langchain]`, `[evals]`, `[pytorch-mps]` (Apple-GPU hafıza-embedder offload — `HEADROOM_EMBEDDER_RUNTIME=pytorch_mps` ayarla). **Python 3.10+** gerektirir.
  
  `pipx` kullanıyor musunuz? Desteklenen bir yorumlamacıyı açıkça seçin:
  
  ```bash
  pipx install --python python3.13 "headroom-ai[all]"
  ```
  
  → [Kurulum rehberi](https://headroom-docs.vercel.app/docs/installation) — Docker etiketleri, kalıcı hizmet, PowerShell, devcontainers.
  
  ### Kurumsal / SSL-inceleme ortamları
  
  `pip install "headroom-ai[all]"` `CERTIFICATE_VERIFY_FAILED` ile başarısız olursa
  (`unable to get local issuer certificate`), ağınız **SSL incelemesi** kullanıyor — bir şirket tarafından verilen CA sunan MITM proxy'si. Build backend'i (`maturin`) `rustup`'ı TLS stack'inizin güvenmediği bir bağlantı üzerinden indirir. **Rust'ı önce kurun** böylece build onu getirmez:
  
  ```bash
  # macOS / Linux
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh && rustup default stable
  # Windows
  winget install Rustlang.Rustup && rustup default stable
  ```
  
  Shell'inizi yeniden başlatın, sonra `pip install "headroom-ai[all]"`. Önceden derlenmiş bir wheel, mevcut olduğu yerlerde Rust build'ini tamamen önler: `pip install --only-binary headroom-ai headroom-ai`.
  
  İki runtime asset'i TLS üzerinden alınır; bloke edilerlerse, kurumsal CA'nız aracılığıyla güvenin `REQUESTS_CA_BUNDLE` / `SSL_CERT_FILE` / `CURL_CA_BUNDLE`:
  
  - **`cdn.pyke.io`** — Rust core'u için ONNX Runtime'ı. Alternatif olarak onu `ORT_STRATEGY=system` ve `ORT_LIB_LOCATION=/path/to/onnxruntime` ile önceden sağlayın.
  - **`huggingface.co`** — `kompress-base` sıkıştırma modeli. Önceden indirin ve `HF_HUB_OFFLINE=1` ile çalıştırın, veya `HF_ENDPOINT`'i güvenilir bir aynaya ayarlayın.
  
  Sıkıştırma devre dışı bırakılarak çalıştırma (saf gateway) hiçbir asset gerektiremez.
  
  ## headroom learn
  
  <p align="center">
    
  </p>
  
  `headroom learn` — başarısız oturumları inceler, `CLAUDE.md` / `AGENTS.md` / `GEMINI.md` dosyasına düzeltmeler yazar.
  
  ## Dokümanlar
  
  | Buradan başlayın                                                              | Daha derin                                                                         |
  |-------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
  | [Hızlı başlangıç](https://headroom-docs.vercel.app/docs/quickstart)           | [Mimari](https://headroom-docs.vercel.app/docs/architecture)                       |
  | [Proxy](https://headroom-docs.vercel.app/docs/proxy)                          | [Sıkıştırma nasıl çalışır](https://headroom-docs.vercel.app/docs/how-compression-works) |
  | [MCP araçları](https://headroom-docs.vercel.app/docs/mcp)                    | [CCR — tersine çevrilebilir sıkıştırma](https://headroom-docs.vercel.app/docs/ccr) |
  | [Hafıza](https://headroom-docs.vercel.app/docs/memory)                        | [Cache optimizasyonu](https://headroom-docs.vercel.app/docs/cache-optimization)    |
  | [Başarısızlık öğrenmesi](https://headroom-docs.vercel.app/docs/failure-learning) | [Benchmark'ler](https://headroom-docs.vercel.app/docs/benchmarks)                 |
  | [Yapılandırma](https://headroom-docs.vercel.app/docs/configuration)           | [Sınırlamalar](https://headroom-docs.vercel.app/docs/limitations)                 |
  
  ## Karşılaştırma
  
  Headroom **yerel olarak** çalışır, **her** içerik türünü kapsar, her büyük framework ile çalışır ve **tersine çevrilebilir**.
  
  |                                                                              | Kapsam                                          | Dağıtım                            | Yerel | Tersine Çevrilebilir |
  |------------------------------------------------------------------------------|------------------------------------------------|------------------------------------|:-----:|:----------:|
  | **Headroom**                                                                 | Tüm bağlam — araçlar, RAG, loglar, dosyalar, geçmiş | Proxy · library · middleware · MCP | Evet   | Evet        |
  | [RTK](https://github.com/rtk-ai/rtk)                                        | CLI komut çıktıları                            | CLI wrapper                        | Evet   | Hayır         |
  | [lean-ctx](https://github.com/yvgude/lean-ctx)                               | CLI komutları, MCP araçları, editor kuralları   | CLI wrapper · MCP                  | Evet   | Hayır         |
  | [Compresr](https://compresr.ai), [Token Co.](https://thetokencompany.ai)    | API'lerine gönderilen metin                    | Barındırılan API çağrısı           | Hayır    | Hayır         |
  | OpenAI Sıkıştırması                                                         | Konuşma geçmişi                                | Sağlayıcı-native                   | Hayır    | Hayır         |
  
  > **Atıf.** Headroom, shell-output yeniden yazması için mükemmel [RTK](https://github.com/rtk-ai/rtk) binary'si ile birlikte gelir — `git show --short`, scoped `ls`, özetlenmiş yükleyiciler. RTK takımına çok teşekkür; onların araçı stack'imizin first-class bir parçasıdır ve Headroom onun akışında her şeyi sıkıştırır. Headroom ayrıca [lean-ctx](https://github.com/yvgude/lean-ctx) kullanabilir seçilen CLI bağlam aracı olarak; `headroom wrap ...` çalıştırmadan önce `HEADROOM_CONTEXT_TOOL=lean-ctx` ayarlayın.
  
  ## Katkı
  
  ```bash
  git clone https://github.com/chopratejas/headroom.git && cd headroom
  uv sync --extra dev && uv run pytest
  ```
  
  Devcontainers `.devcontainer/` içinde (default + `memory-stack` ile Qdrant & Neo4j). [CONTRIBUTING.md](CONTRIBUTING.md) dosyasına bakın.
  
  ## Topluluk
  
  - **[Discord](https://discord.gg/yRmaUNpsPJ)** — sorular, geri bildirim, savaş hikayeleri.
  - **[HuggingFace'de Kompress-v2-base](https://huggingface.co/chopratejas/kompress-v2-base)** — metin sıkıştırmanın arkasındaki model.
  
  ## Lisans
  
  Apache 2.0 — [LICENSE](LICENSE) dosyasına bakın.
---

<div align="center"><pre>
  ██╗  ██╗███████╗ █████╗ ██████╗ ██████╗  ██████╗  ██████╗ ███╗   ███╗
  ██║  ██║██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔═══██╗██╔═══██╗████╗ ████║
  ███████║█████╗  ███████║██║  ██║██████╔╝██║   ██║██║   ██║██╔████╔██║
  ██╔══██║██╔══╝  ██╔══██║██║  ██║██╔══██╗██║   ██║██║   ██║██║╚██╔╝██║
  ██║  ██║███████╗██║  ██║██████╔╝██║  ██║╚██████╔╝╚██████╔╝██║ ╚═╝ ██║
  ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝     ╚═╝
                  The context compression layer for AI agents
</pre></div>

<p align="center"><strong>60–95% fewer tokens · library · proxy · MCP · 6 algorithms · local-first · reversible</strong></p>

<p align="center">
  <a href="https://github.com/chopratejas/headroom/actions/workflows/ci.yml"></a>
  <a href="https://app.codecov.io/gh/chopratejas/headroom"></a>
  <a href="https://pypi.org/project/headroom-ai/"></a>
  <a href="https://www.npmjs.com/package/headroom-ai"></a>
  <a href="https://huggingface.co/chopratejas/kompress-v2-base"></a>
  <a href="LICENSE"></a>
  <a href="https://headroom-docs.vercel.app/docs"></a>
</p>

<p align="center">
  <a href="https://headroom-docs.vercel.app/docs">Docs</a> ·
  <a href="#get-started-60-seconds">Install</a> ·
  <a href="#proof">Proof</a> ·
  <a href="#agent-compatibility-matrix">Agents</a> ·
  <a href="https://discord.gg/yRmaUNpsPJ">Discord</a> ·
  <a href="llms.txt">llms.txt</a> ·
  <a href="ENTERPRISE.md">Enterprise</a>
</p>

<p align="center"><sub>
  <b>AI agents / LLMs:</b> read <a href="llms.txt"><code>/llms.txt</code></a> here, or fetch <a href="https://headroom-docs.vercel.app/llms.txt">the live index</a> / <a href="https://headroom-docs.vercel.app/llms-full.txt">full docs blob</a>.
</sub></p>

---
<p align="center"><a href="https://trendshift.io/repositories/20881" target="_blank"></a></p>

Headroom compresses everything your AI agent reads — tool outputs, logs, RAG chunks, files, and conversation history — before it reaches the LLM. Same answers, fraction of the tokens.

<p align="center">
  
  <br/><sub>Live: 10,144 → 1,260 tokens — same FATAL found.</sub>
</p>

## What it does

- **Library** — `compress(messages)` in Python or TypeScript, inline in any app
- **Proxy** — `headroom proxy --port 8787`, zero code changes, any language
- **Agent wrap** — `headroom wrap claude|codex|cursor|aider|copilot` in one command
- **MCP server** — `headroom_compress`, `headroom_retrieve`, `headroom_stats` for any MCP client
- **Cross-agent memory** — shared store across Claude, Codex, Gemini, auto-dedup
- **`headroom learn`** — mines failed sessions, writes corrections to `CLAUDE.md` / `AGENTS.md`
- **Output token reduction** — trims what the model *writes back* (not just what you send): drops ceremony/restated code and skips deep "thinking" on routine steps. See [Output token reduction](#output-token-reduction-cut-what-the-model-writes-back).
- **Reversible (CCR)** — originals are cached for retrieval on demand

## How it works (30 seconds)

```
 Your agent / app
   (Claude Code, Cursor, Codex, LangChain, Agno, Strands, your own code…)
        │   prompts · tool outputs · logs · RAG results · files
        ▼
    ┌────────────────────────────────────────────────────┐
    │  Headroom   (runs locally — your data stays here)  │
    │  ────────────────────────────────────────────────  │
    │  CacheAligner  →  ContentRouter  →  CCR            │
    │                    ├─ SmartCrusher   (JSON)        │
    │                    ├─ CodeCompressor (AST)         │
    │                    └─ Kompress-base  (text, HF)    │
    │                                                    │
    │  Cross-agent memory  ·  headroom learn  ·  MCP     │
    └────────────────────────────────────────────────────┘
        │   compressed prompt  +  retrieval tool
        ▼
 LLM provider  (Anthropic · OpenAI · Bedrock · …)
```

- **ContentRouter** — detects content type, selects the right compressor
- **SmartCrusher / CodeCompressor / Kompress-base** — compress JSON, AST, or prose
- **CacheAligner** — stabilizes prefixes so provider KV caches actually hit
- **CCR** — stores originals locally; LLM calls `headroom_retrieve` if it needs them

→ [Architecture](https://headroom-docs.vercel.app/docs/architecture) · [CCR reversible compression](https://headroom-docs.vercel.app/docs/ccr) · [Kompress-v2-base model card](https://huggingface.co/chopratejas/kompress-v2-base)

## Get started (60 seconds)

```bash
# 1 — Install
pip install "headroom-ai[all]"          # Python
npm install headroom-ai                 # Node / TypeScript

# 2 — Pick your mode
headroom wrap claude                    # wrap a coding agent
headroom proxy --port 8787              # drop-in proxy, zero code changes
# or: from headroom import compress      # inline library

# 3 — See the savings
headroom perf
```

Granular extras: `[proxy]`, `[mcp]`, `[ml]`, `[code]`, `[memory]`, `[relevance]`, `[image]`, `[agno]`, `[langchain]`, `[evals]`, `[pytorch-mps]` (Apple-GPU memory-embedder offload — set `HEADROOM_EMBEDDER_RUNTIME=pytorch_mps`). Requires **Python 3.10+**.

## Proof

**Savings on real agent workloads:**

| Workload                      | Before | After  | Savings |
|-------------------------------|-------:|-------:|--------:|
| Code search (100 results)     | 17,765 |  1,408 | **92%** |
| SRE incident debugging        | 65,694 |  5,118 | **92%** |
| GitHub issue triage           | 54,174 | 14,761 | **73%** |
| Codebase exploration          | 78,502 | 41,254 | **47%** |

**Accuracy preserved on standard benchmarks:**

| Benchmark  | Category | N   | Baseline | Headroom | Delta      |
|------------|----------|----:|---------:|---------:|------------|
| GSM8K      | Math     | 100 |    0.870 |    0.870 | **±0.000** |
| TruthfulQA | Factual  | 100 |    0.530 |    0.560 | **+0.030** |
| SQuAD v2   | QA       | 100 |        — |  **97%** | 19% compression |
| BFCL       | Tools    | 100 |        — |  **97%** | 32% compression |

Reproduce: `python -m headroom.evals suite --tier 1` · [Full benchmarks & methodology](https://headroom-docs.vercel.app/docs/benchmarks)

## Output token reduction (cut what the model writes back)

Everything above shrinks the prompt you **send**. But you also pay for every
token the model **writes back** — and on Opus-class models output costs 5× input.
A lot of that output is waste: "Great, let me…" preambles, re-printing code you
just showed it, and deep "thinking" on routine steps like reading a file.

Headroom can trim that too, from the proxy, without you changing any code:

- **Verbosity steering** — appends a short "be terse, don't restate context"
  note to the end of the system prompt (so your prompt cache still hits).
- **Effort routing** — when a turn is just the model resuming after a tool result
  (a file read, a passing test), it dials the model's thinking effort down. New
  questions and errors keep full effort.

Turn it on:

```bash
export HEADROOM_OUTPUT_SHAPER=1     # off by default
headroom proxy --port 8787
```

**Learn the right terseness for you.** People don't *say* how terse they want
answers — they *show* it (they interrupt long replies, or move on before they
could have read them). `headroom learn --verbosity` reads your past sessions and
picks the level automatically:

```bash
headroom learn --verbosity            # preview what it found (dry run)
headroom learn --verbosity --apply    # save it; the proxy uses it from now on
```

**See how many output tokens you saved.** Output savings are *counterfactual* —
we never see what the model *would* have written — so Headroom reports an honest
**estimate with a confidence range**, never a made-up number:

```bash
headroom output-savings
# Reduction: 31.7%  (95% CI 27.7% … 35.7%)   [estimated]
```

Want a *measured* number instead of an estimate? Leave 10% of conversations
unshaped as a control group: `export HEADROOM_OUTPUT_HOLDOUT=0.1`. The dashboard
shows an **Output Tokens Saved** card next to input compression, labelled
`measured` or `estimated` with the confidence band.

→ Full write-up incl. the measurement methodology: [`docs/proposals/output-token-reduction.md`](docs/proposals/output-token-reduction.md)

<a href="https://www.star-history.com/?repos=chopratejas%2Fheadroom&type=date&legend=top-left">
 <picture>
   
 </picture>
</a>

## Agent compatibility matrix

| Agent       | `headroom wrap` | Notes                            |
|-------------|:---------------:|----------------------------------|
| Claude Code | ✅              | `--memory` · `--code-graph`      |
| Codex       | ✅              | shares memory with Claude        |
| Cursor      | ✅              | prints config — paste once       |
| Aider       | ✅              | starts proxy + launches          |
| Copilot CLI | ✅              | starts proxy + launches          |
| OpenClaw    | ✅              | installs as ContextEngine plugin |

Any OpenAI-compatible client works via `headroom proxy`. MCP-native: `headroom mcp install`.

### GitHub Copilot CLI subscription mode

Headroom can route GitHub Copilot CLI subscription traffic through the local proxy:

```bash
headroom copilot-auth login
headroom wrap copilot --subscription -- --model gpt-4o
```

This lets Headroom intercept OpenAI-compatible Copilot CLI requests and apply the same proxy compression pipeline before forwarding to GitHub Copilot's hosted API. The wrapper exchanges Headroom's reusable GitHub OAuth token for Copilot's short-lived API token and prints the upstream endpoint as `COPILOT_PROVIDER_API_URL=...` during launch.

`headroom copilot-auth login` stores a Headroom-specific Copilot OAuth token.
This avoids relying on generic GitHub or Copilot CLI tokens that can read
Copilot account metadata but may still be rejected by Copilot's token-exchange
endpoint.

For GitHub Enterprise Server or custom-domain Copilot deployments, set the
deployment domain before launching:

```bash
export GITHUB_COPILOT_ENTERPRISE_DOMAIN=ghe.example.com
```

For GitHub.com Enterprise Cloud URLs such as
`github.com/enterprises/your-enterprise`, do not set an enterprise-domain
override. Headroom uses GitHub's normal token-exchange endpoint and the Copilot
API endpoint advertised for the signed-in account.

Platform support note: macOS auth reuse via Copilot CLI Keychain storage has been smoke-tested. Windows Credential Manager, Linux Secret Service / `secret-tool`, and Docker/CI token-injection paths are implemented or planned as auth-discovery paths, but still need real OS validation before they should be considered fully vetted. For Docker and CI, prefer passing an explicit `GITHUB_COPILOT_TOKEN` or `GITHUB_COPILOT_GITHUB_TOKEN` rather than relying on host keychain access.

## When to use · When to skip

**Great fit if you…**
- run AI coding agents daily and want savings without changing your code
- work across multiple agents and want shared memory
- need reversible compression — originals are retrievable via CCR within the configured TTL

**Skip it if you…**
- only use a single provider's native compaction and don't need cross-agent memory
- work in a sandboxed environment where local processes can't run

<details>
<summary><b>Integrations — drop Headroom into any stack</b></summary>

| Your setup             | Hook in with                                                     |
|------------------------|------------------------------------------------------------------|
| Any Python app         | `compress(messages, model=…)`                                    |
| Any TypeScript app     | `await compress(messages, { model })`                            |
| Anthropic / OpenAI SDK | `withHeadroom(new Anthropic())` · `withHeadroom(new OpenAI())`   |
| Vercel AI SDK          | `wrapLanguageModel({ model, middleware: headroomMiddleware() })` |
| LiteLLM                | `litellm.callbacks = [HeadroomCallback()]`                       |
| LangChain              | `HeadroomChatModel(your_llm)`                                    |
| Agno                   | `HeadroomAgnoModel(your_model)`                                  |
| Strands                | [Strands guide](https://headroom-docs.vercel.app/docs/strands)  |
| ASGI apps              | `app.add_middleware(CompressionMiddleware)`                      |
| Multi-agent            | `SharedContext().put / .get`                                     |
| MCP clients            | `headroom mcp install`                                           |

</details>

<details>
<summary><b>What's inside</b></summary>

- **SmartCrusher** — universal JSON: arrays of dicts, nested objects, mixed types.
- **CodeCompressor** — AST-aware for Python, JS, Go, Rust, Java, C++.
- **Kompress-base** — our HuggingFace model, trained on agentic traces.
- **Image compression** — 40–90% reduction via trained ML router.
- **CacheAligner** — stabilizes prefixes so Anthropic/OpenAI KV caches actually hit.
- **IntelligentContext** — score-based context fitting with learned importance.
- **CCR** — reversible compression; LLM retrieves originals on demand.
- **Cross-agent memory** — shared store, agent provenance, auto-dedup.
- **SharedContext** — compressed context passing across multi-agent workflows.
- **`headroom learn`** — plugin-based failure mining for Claude, Codex, Gemini.

</details>

<details>
<summary><b>Pipeline internals</b></summary>

Headroom exposes one stable request lifecycle across `compress()`, the SDK, and the proxy:

`Setup` → `Pre-Start` → `Post-Start` → `Input Received` → `Input Cached` → `Input Routed` → `Input Compressed` → `Input Remembered` → `Pre-Send` → `Post-Send` → `Response Received`

- **Transforms** do the work: CacheAligner, ContentRouter, SmartCrusher, CodeCompressor, Kompress-base, IntelligentContext / RollingWindow.
- **Pipeline extensions** observe or customize lifecycle stages via `on_pipeline_event(...)`.
- **Compression hooks** sit alongside the canonical lifecycle as an additional extension seam.
- **Proxy extensions** remain the server/app integration seam for ASGI middleware, routes, and startup policy.

Provider and tool-specific behavior lives under `headroom/providers/` so core orchestration stays focused on lifecycle, sequencing, and policy.

- **CLI/tool slices**: `headroom/providers/claude`, `copilot`, `codex`, `openclaw`
- **Provider runtime slices**: `headroom/providers/claude`, `gemini`, plus shared backend/runtime dispatch in `headroom/providers/registry.py`
- **Core files stay orchestration-first**: `wrap.py`, `client.py`, `cli/proxy.py`, and `proxy/server.py` delegate provider-specific env shaping, API target normalization, backend selection, and transport dispatch.

</details>

## Install

```bash
pip install "headroom-ai[all]"          # Python, everything
npm install headroom-ai                 # TypeScript / Node
docker pull ghcr.io/chopratejas/headroom:latest
```

Granular extras: `[proxy]`, `[mcp]`, `[ml]` (Kompress-base), `[code]`, `[memory]`, `[relevance]`, `[image]`, `[agno]`, `[langchain]`, `[evals]`, `[pytorch-mps]` (Apple-GPU memory-embedder offload — set `HEADROOM_EMBEDDER_RUNTIME=pytorch_mps`). Requires **Python 3.10+**.

Using `pipx`? Choose a supported interpreter explicitly:

```bash
pipx install --python python3.13 "headroom-ai[all]"
```

→ [Installation guide](https://headroom-docs.vercel.app/docs/installation) — Docker tags, persistent service, PowerShell, devcontainers.

### Corporate / SSL-inspection environments

If `pip install "headroom-ai[all]"` fails with `CERTIFICATE_VERIFY_FAILED`
(`unable to get local issuer certificate`), your network uses **SSL inspection** — a MITM
proxy presenting a company-issued CA. The build backend (`maturin`) downloads `rustup` over a
connection your TLS stack doesn't trust. **Install Rust first** so the build doesn't fetch it:

```bash
# macOS / Linux
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh && rustup default stable
# Windows
winget install Rustlang.Rustup && rustup default stable
```

Restart your shell, then `pip install "headroom-ai[all]"`. A prebuilt wheel avoids the Rust
build entirely where available: `pip install --only-binary headroom-ai headroom-ai`.

Two runtime assets are fetched over TLS; if they are blocked, trust your corporate CA via
`REQUESTS_CA_BUNDLE` / `SSL_CERT_FILE` / `CURL_CA_BUNDLE`:

- **`cdn.pyke.io`** — the ONNX Runtime for the Rust core. Alternatively pre-provide it with
  `ORT_STRATEGY=system` and `ORT_LIB_LOCATION=/path/to/onnxruntime`.
- **`huggingface.co`** — the `kompress-base` compression model. Pre-download it and run with
  `HF_HUB_OFFLINE=1`, or set `HF_ENDPOINT` to a trusted mirror.

Running with compression disabled (pure gateway) requires neither asset.

## headroom learn

<p align="center">
  
</p>

`headroom learn` — mines failed sessions, writes corrections to `CLAUDE.md` / `AGENTS.md` / `GEMINI.md`.

## Documentation

| Start here                                                                    | Go deeper                                                                          |
|-------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [Quickstart](https://headroom-docs.vercel.app/docs/quickstart)                | [Architecture](https://headroom-docs.vercel.app/docs/architecture)                 |
| [Proxy](https://headroom-docs.vercel.app/docs/proxy)                          | [How compression works](https://headroom-docs.vercel.app/docs/how-compression-works) |
| [MCP tools](https://headroom-docs.vercel.app/docs/mcp)                        | [CCR — reversible compression](https://headroom-docs.vercel.app/docs/ccr)          |
| [Memory](https://headroom-docs.vercel.app/docs/memory)                        | [Cache optimization](https://headroom-docs.vercel.app/docs/cache-optimization)     |
| [Failure learning](https://headroom-docs.vercel.app/docs/failure-learning)    | [Benchmarks](https://headroom-docs.vercel.app/docs/benchmarks)                    |
| [Configuration](https://headroom-docs.vercel.app/docs/configuration)          | [Limitations](https://headroom-docs.vercel.app/docs/limitations)                  |

## Compared to

Headroom runs **locally**, covers **every** content type, works with every major framework, and is **reversible**.

|                                                                              | Scope                                          | Deploy                             | Local | Reversible |
|------------------------------------------------------------------------------|------------------------------------------------|------------------------------------|:-----:|:----------:|
| **Headroom**                                                                 | All context — tools, RAG, logs, files, history | Proxy · library · middleware · MCP | Yes   | Yes        |
| [RTK](https://github.com/rtk-ai/rtk)                                        | CLI command outputs                            | CLI wrapper                        | Yes   | No         |
| [lean-ctx](https://github.com/yvgude/lean-ctx)                               | CLI commands, MCP tools, editor rules          | CLI wrapper · MCP                  | Yes   | No         |
| [Compresr](https://compresr.ai), [Token Co.](https://thetokencompany.ai)    | Text sent to their API                         | Hosted API call                    | No    | No         |
| OpenAI Compaction                                                            | Conversation history                           | Provider-native                    | No    | No         |

> **Attribution.** Headroom ships with the excellent [RTK](https://github.com/rtk-ai/rtk) binary for shell-output rewriting — `git show --short`, scoped `ls`, summarized installers. Huge thanks to the RTK team; their tool is a first-class part of our stack, and Headroom compresses everything downstream of it. Headroom can also use [lean-ctx](https://github.com/yvgude/lean-ctx) as the selected CLI context tool; set `HEADROOM_CONTEXT_TOOL=lean-ctx` before running `headroom wrap ...`.

## Contributing

```bash
git clone https://github.com/chopratejas/headroom.git && cd headroom
uv sync --extra dev && uv run pytest
```

Devcontainers in `.devcontainer/` (default + `memory-stack` with Qdrant & Neo4j). See [CONTRIBUTING.md](CONTRIBUTING.md).

## Community

- **[Discord](https://discord.gg/yRmaUNpsPJ)** — questions, feedback, war stories.
- **[Kompress-v2-base on HuggingFace](https://huggingface.co/chopratejas/kompress-v2-base)** — the model behind our text compression.

## License

Apache 2.0 — see [LICENSE](LICENSE).
