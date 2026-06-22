---
name: "xpaysh/awesome-x402"
description: "Curated directory of x402 payment protocol resources, MCP servers, and tools for HTTP 402-based USDC payments on Base, Arbitrum, and other EVM chains."
description_tr: "x402 ödeme protokolü kaynaklarının, MCP sunucularının ve Base, Arbitrum ile diğer EVM zincirlerinde HTTP 402 tabanlı USDC ödemeleri için geliştirilen araçların organize edilmiş bir dizini."
category: "Finance & Fintech"
repo: "xpaysh/awesome-x402"
stars: 241
url: "https://github.com/xpaysh/awesome-x402"
body_length: 234499
license: "CC0-1.0"
homepage: "https://www.x402.org/"
body_tr: |-
  # Awesome X402 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
  
  > ⚡ **Nihai x402 Kaynak Merkezi** - HTTP 402 kullanarak internet-native ödemeler oluşturmak için ihtiyacınız olan her şey. AI ajanlar, API'ler ve mikro ödemeler için ideal. Ödeme duvarları oluşturun, hizmetleri monetize edin ve kripto/USDC ile otonom ajan ödemelerini etkinleştirin. Sıfır ücret, 2 saniye uzlaşması.
  
  [![GitHub stars](https://img.shields.io/github/stars/xpaysh/awesome-x402?style=social)](https://github.com/xpaysh/awesome-x402)
  
  ## İçerik
  
  - [🎯 Hızlı Başlangıç - x402 Şampiyonu Olun](#-hızlı-başlangıç---x402-şampiyonu-olun)
  - [📚 Resmi Kaynaklar](#-resmi-kaynaklar)
  - [📖 Protokol Dokümantasyonu](#-protokol-dokümantasyonu)
  - [🚀 Hızlı Başlama Rehberleri](#-hızlı-başlama-rehberleri)
  - [⚙️ Protokol Uygulamaları](#-protokol-uygulamaları)
  - [🏭 Üretim Uygulamaları](#-üretim-uygulamaları)
  - [🛠️ SDK'lar ve İstemci Kütüphaneleri](#-sdklar-ve-istemci-kütüphaneleri)
  - [🔧 Sunucu Çerçeveleri ve Middleware](#-sunucu-çerçeveleri-ve-middleware)
  - [🏗️ Kolaylaştırıcılar](#-kolaylaştırıcılar)
  - [💡 Örnek Uygulamalar](#-örnek-uygulamalar)
  - [🎨 Kullanım Durumları ve Desenler](#-kullanım-durumları-ve-desenler)
  - [🤖 AI Ajan Entegrasyonu](#-ai-ajan-entegrasyonu)
  - [🔨 Araçlar ve Yardımcı Programlar](#-araçlar-ve-yardımcı-programlar)
  - [🧪 Test ve Geliştirme](#-test-ve-geliştirme)
  - [📚 Öğretici ve Öğrenme Kaynakları](#-öğretici-ve-öğrenme-kaynakları)
  - [🎥 Videolar ve Konuşmalar](#-videolar-ve-konuşmalar)
  - [📝 Makaleler ve Blog Yazıları](#-makaleler-ve-blog-yazıları)
  - [👥 Topluluk](#-topluluk)
  - [🌟 Ekosistem Projeleri](#-ekosistem-projeleri)
  - [📊 Ekosistem Pazar Verileri](#-ekosistem-pazar-verileri)
  - [🚀 Geçiş Rehberleri](#-geçiş-rehberleri)
  - [🔒 Güvenlik ve Denetimler](#-güvenlik-ve-denetimler)
  - [🔗 İlgili Protokoller](#-ilgili-protokoller)
  - [🤝 Katkıda Bulunmak](#-katkıda-bulunmak)
  - [Awesome Listeleri](#awesome-listeleri)
  
  x402 protokolü, HTTP 402 "Ödeme Gerekli" durum kodu kullanarak anında Blockchain ödemelerine izin verir. Bu, x402'yi öğrenmek ve ajan ödemelerinin geleceğini oluşturmak için tam kılavuzunuzdur.
  
  🚀 **5 dakikada yapı oluşturmaya başlayın** | ⚡ **2 saniye uzlaşması** | 💰 **Base üzerinde USDC**
  
  ---
  
  ## 🎯 Hızlı Başlangıç - x402 Şampiyonu Olun
  
  **x402'ye yeni misiniz?** Ustalığa gitmek için bu yolu izleyin:
  
  1. [5 Dakikalık Hızlı Başlangıç](https://docs.cdp.coinbase.com/x402/quickstart-for-sellers) - İlk ödemenizi kabul edin.
  2. Stack'inizi Seçin - Dil/çerçevenizi bulun.
  3. Bir Örneği Kopyalayın - Hemen çalıştırabileceğiniz çalışan kod.
  4. Topluluğa Katılın - Diğer geliştiricilerden yardım alın.
  
  **AI Ajanları için:** Claude/diğer ajanların otonom ödemeler yapmasını etkinleştirmek için [MCP Entegrasyonu](#model-context-protocol-mcp) ile başlayın.
  
  ---
  
  ## 📚 Resmi Kaynaklar
  
  x402 protokol bakımcılarından temel kaynaklar.
  
  - [x402 Protokol Spesifikasyonu](https://github.com/coinbase/x402) - Coinbase tarafından resmi açık kaynak protokol uygulaması.
  - [x402 Vakfı](https://x402.org) - Protokol vakfı web sitesi, genel bakış ve dokümantasyon ile.
  - [x402 Teknik İnceleme](https://x402.org/x402-whitepaper.pdf) - Protokol mimarisi hakkında teknik derinlemesine bilgi.
  - [Coinbase Developer Platform Dokümanları](https://docs.cdp.coinbase.com/x402) - Kapsamlı uygulama rehberi ve API referansı.
  - [Protokol Spesifikasyonları](https://github.com/coinbase/x402/tree/main/specs) - Ayrıntılı teknik spesifikasyonlar.
    - [Ödeme Şemaları](https://github.com/coinbase/x402/tree/main/specs/schemes) - Farklı ödeme akışı türleri.
    - [EVM Uygulaması](https://github.com/coinbase/x402/blob/main/specs/schemes/exact/scheme_exact_evm.md) - Ethereum Sanal Makinesi özellikleri.
  
  ## 📖 Protokol Dokümantasyonu
  
  x402'yi anlamak ve uygulamak için gerekli dokümantasyon.
  
  - [x402 Nasıl Çalışır](https://docs.cdp.coinbase.com/x402/how-it-works) - Şemalarla birlikte tam ödeme akışı açıklaması.
  - [Ödeme Gereksinimleri Şeması](https://github.com/coinbase/x402#payment-requirements) - Ödeme istekleri için JSON yapısı.
  - [Ödeme Yükü Biçimi](https://github.com/coinbase/x402#payment-payload) - İstemci ödeme gönderimi biçimi.
  - [Doğrulama ve Uzlaşma](https://github.com/coinbase/x402#verification-and-settlement) - Ödeme doğrulama süreci.
  - [EIP-3009 TransferWithAuthorization](https://eips.ethereum.org/EIPS/eip-3009) - x402 tarafından kullanılan gazlı transfer standardı.
  - [HTTP 402 Durum Kodu](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402) - Uzun süredir uyuyan HTTP durumu.
  
  ## 🚀 Hızlı Başlama Rehberleri
  
  Dakikalar içinde x402'yi kullanmaya başlayın.
  
  - 5 Dakikalık Satıcılar için Hızlı Başlangıç - İlk ödemenizi kabul edin.
  - [Alıcı/İstemci Kurulumu](https://docs.cdp.coinbase.com/x402/quickstart-buyers) - Otomatik ödemeler yapın.
  - [Tek Satır Entegrasyonu](https://github.com/coinbase/x402/tree/main/examples) - Ödeme middleware'i tek kod satırına ekleyin.
  - [Base Sepolia Testnet Kurulumu](https://docs.cdp.coinbase.com/x402/network-support) - Test USDC alın ve test etmeye başlayın.
  - Üretim Dağıtım Kontrol Listesi - Base mainnet'e canlı gidin.
  
  ## ⚙️ Protokol Uygulamaları
  
  x402 protokolünün resmi ve topluluk uygulamaları.
  
  ### Go
  
  - [coinbase/x402](https://github.com/coinbase/x402/tree/main/go) ⭐ **Resmi** - Eksiksiz Go uygulaması.
    - Temel protokol türleri ve yardımcı programlar
    - Ödeme doğrulama ve uzlaşma mantığı
    - Çoklu zincir desteği (Base, Base Sepolia, Ethereum, Solana)
  
  ### TypeScript/JavaScript
  
  - [x402-typescript](https://github.com/coinbase/x402/tree/main/typescript) ⭐ **Resmi** - Eksiksiz TypeScript uygulaması.
    - Temel protokol türleri ve yardımcı programlar
    - Ödeme doğrulama ve uzlaşma mantığı
    - Çoklu zincir desteği (Base, Base Sepolia, Ethereum, Solana)
  - [x402-data-api](https://github.com/155143783/x402-data-api) - HTTP 402 mikro ödeme veri API'si, Base zinciri USDC ödemeleri ile. 16 geliştirici veri aracı, email doğrulaması, DNS arama, WHOIS, SSL kontrolü ve IP coğrafi konumu ile x402 ödeme entegrasyonu.
  
  - [x402-express](https://github.com/coinbase/x402/tree/main/examples/typescript/servers/express) - Express.js middleware örneği.
  - [hive-rosetta](https://www.npmjs.com/package/hive-rosetta) ⭐ **Topluluk** - Açık EIP-3009 `transferWithAuthorization` imzalayan. Sıfır ethers/web3 bağımlılığı, yalnızca primitivler EIP-712. `{scheme: 'exact', network: 'eip155:8453', payload: {authorization, signature}}` tel şekli döndürür. PyPI'de aynı paket adı. ([GitHub](https://github.com/srotzin/hive-rosetta))
  
  ### Python
  
  - [x402](https://pypi.org/project/x402/) ⭐ **Resmi** - PyPI'de Python SDK.
    - FastAPI middleware entegrasyonu
    - Otomatik ödeme yapan requests oturumu
    - Ödeme gereksinimi oluşturma
  
  - [ag402](https://github.com/AetherCore-Dev/ag402) ⭐ **Topluluk** - x402 kullanan AI ajanları için ödeme katmanı. Herhangi bir API'yi veya MCP sunucusunu USDC ödeme duvarı (`ag402 serve`) ile sarın, ya da ajanlar otomatik olarak ödeme yapsınlar (`ag402 run`). Solana USDC, ~0.5s uzlaşma, koruma altında olmayan, 648+ test. [Glama](https://glama.ai/mcp/servers/AetherCore-Dev/ag402-mcp)
  
  - [x402-pay](https://pypi.org/project/x402-pay/) - Herhangi bir x402 API'yi bir API anahtarı ile çağırın. İstekleri ödemeyi gerçekleştiren bir broker üzerinden yönlendirir. httpx tabanlı, doğrudan ödemeler için isteğe bağlı cüzdan modu. ([GitHub](https://github.com/bartonguestier1725-collab/x402-pay))
  - [hive-rosetta](https://pypi.org/project/hive-rosetta/) ⭐ **Topluluk** - Node `hive-rosetta` imzalayan'ın doğrudan bağlantı noktası. Her iki dil arasında bayt özdeş EIP-712 özeti. `{scheme, network, payload}` döndürür, CDP `/verify` ve `/settle` ile eşleşen. ([GitHub](https://github.com/srotzin/hive-rosetta))
  
  ### Rust
  
  - [x402-rs](https://github.com/x402-rs/x402-rs) ⭐ **Topluluk** - Üretim-kalite Rust uygulaması.
    - Axum middleware
    - Reqwest istemci sarmalayıcısı
    - Kendi kendini barındıran kolaylaştırıcı
    - Çoklu zincir desteği
  - x402-axum - Axum web framework entegrasyonu.
  - x402-reqwest - Reqwest HTTP istemci sarmalayıcısı.
  
  
  ## 🏭 Üretim Uygulamaları
  
  x402'yi üretim ortamında kanıtlanmış ölçek ve işlem hacimleri ile kullanan gerçek şirketler.
  
  ### Yüksek Hacimli Üretim Dağıtımları
  
  - [Arch Tools](https://archtools.dev) - 58 üretim API aracı, AI ajanları için x402 ödemeleri yerleşik. Web scraping, AI oluşturma, kripto verileri, OCR, tarayıcı otoması, MCP uyumlu. Patent bekleyen ajan kimliği. 15+ zincir desteklenmiştir. ([GitHub](https://github.com/Deesmo/Arch-AI-Tools))
  - [PayAPI Market](https://payapi.market) - x402 tarafından desteklenen API'ler için ilk pazaryeri. 10 API, 65 bitiş noktası: UK emlak verileri, email doğrulaması, şirket zenginleştirmesi, posta kodu araması, döviz/kripto oranları, ekran görüntüleri, DNS zekası, web scraping, IP coğrafi konumu, QR kodları. Base üzerinde istek başına $0.001–$0.01 USDC. MCP sunucusu keşfi. ([GitHub](https://github.com/chetparker/x402-marketplace))
  - [Rug Munch Intelligence](https://x402.rugmunch.io) - 117 MCP aracı + 19 REST API bitiş noktası kripto verileri için: DexScreener, Birdeye, GMGN, Arkham, Nansen, Dune, Jupiter, DeFiLlama, ve daha fazlası. Çağrı başına $0.001-$0.02 USDC. Çok zincirli (Base + Solana), ücretsiz deneme (IP başına 1 çağrı), OpenAPI speci, API anahtarı yok, kayıt yok. ([Keşif](https://x402.rugmunch.io/.well-known/x402) | [OpenAPI](https://x402.rugmunch.io/openapi.json) | [MCP Kataloğu](https://x402.rugmunch.io/mcp) | [Solana](https://x402-sol.rugmunch.io/.well-known/x402) | [GitHub](https://github.com/Rug-Munch-Media-LLC/))
  - [AIsa](https://aisa.network) - Önde gelen x402 ödeme işlemcisi, **x402 ağında 10.5M+ kümülatif işlem** ile, otonom ajan ödemeleri ve mikro ödeme altyapısı için büyük üretim ölçeğini gösterir.
  - [Bitget](https://www.bitget.com) - Büyük kripto para borsası, ticari işlemleri için anında uzlaşmaları ve gazlı transferleri etkinleştirerek x402'yi entegre etmektedir.
  - [Stratalize](https://www.stratalize.com) — 100+ onaylı finansal, sağlık, gayrimenkul ve yönetişim zekası aracı, Base üzerinde x402 mikro ödemeleri ile. Her sentez çıktısı Ed25519 imzalı. Araç çağrısı başına $0.02–$1.00 USDC. MCP kayıt defteri: com.stratalize. ([x402.json](https://www.stratalize.com/.well-known/x402.json))
  - [Coinbase Developer Platform](https://coinbase.com/developer-platform) - Haftalık yüzlerce bin işlemi işleyen resmi CDP uygulaması, kurumsal düzey güvenilirlik ve 2 saniye uzlaşma süreleri ile.
  - [Cloudflare Workers](https://workers.cloudflare.com) - 300+ veri merkezinde ölçekte küresel dağıtılmış ödeme doğrulamasını sunan x402 entegrasyonu ile kenar bilgi işlem platformu.
  - [GigSoul AI Research Agent](https://gig-x402-api.jayson-be1.workers.dev) - 23 bitiş noktası AI araştırma API'si danışmanlar için: SEC dosyaları, kazanç çağrıları, rekabet analizi, pazar araştırması ve belge zekası. Çağrı başına $0.01 USDC, Base mainnet üzerinde. Cüzdan: x2b6c16fb557291b98222a570526ff2430848b723. ([OpenAPI](https://gig-x402-api.jayson-be1.workers.dev/openapi.json) | [.well-known/x402.json](https://gig-x402-api.jayson-be1.workers.dev/.well-known/x402.json))
  - [Zuluworks AI — Sovereign Shaka PQC-Shield Factory](https://api.zuluworksai.com) - Cloudflare Workers üzerinde otonom A2A fabrikası, Base L2 üzerinde x402 USDC aracılığıyla 5 kuantum sonrası sertleştirilmiş ajan hizmetini satmak: `quantum-shield` ($0.10, ML-KEM-768 PQC tüneli — NIST FIPS 203), `kya` ($0.01, ajan güven puanlaması), `browser-rendering` ($0.03, başsız tarayıcı çıkarması), `memory` ($0.05, PQC bilgi endeksi üzerinde anlamsal çağırma), `workers-ai` ($0.02, Llama 3.1 çıkarımı). Tüm uzlaşma, Bazaar indeksleme için Coinbase CDP kolaylaştırıcısı üzerinden yönlendirilir. ([Ajan Kartı](https://api.zuluworksai.com/.well-known/agent.json) | [Bazaar Manifesti](https://api.zuluworksai.com/.well-known/x402-bazaar.json) | [MCP](https://api.zuluworksai.com/.well-known/mcp.json) | [Sitemap](https://api.zuluworksai.com/sitemap.xml))
  
  ### Üretim Başarı Metrikleri
  
  **Temel Performans Göstergeleri:**
  - 10.5M+ işlem - AIsa kümülatif ağ hacmi
  - 500K+ haftalık işlem - Ekosistem genelinde ödeme aktivitesi
  - $180M+ pazar değeri - Birleşik ekosistem değerlemesi
  - 2 saniye uzlaşma - Ortalama üretim ödeme sonluluk süresi
  - 10,000%+ büyüme - Yıl-yıl işlem hacmi artışı
  
  ### Çoklu Zincir Üretim Desteği
  
  | Zincir       | Durum       | Kolaylaştırıcılar              | Uzlaşma        | Üretim Örnekleri      |
  | ------------ | ----------- | ----------------------------- | --------------- | --------------------- |
  | Base         | Üretim      | Coinbase CDP, Cloudflare      | Anında (2s)     | AIsa, Bitget, thirdweb|
  | Base Sepolia | Testnet     | Coinbase CDP                  | Anında (2s)     | Geliştirme, Test      |
  | Ethereum     | Üretim      | Cloudflare                    | Erteleme        | Kurumsal DApp'ler     |
  | Solana       | Üretim      | Topluluk                      | Anında (<1s)    | Yüksek frekans ticaret|
  | BNB Chain    | Üretim      | Pieverse                      | Anında (2s)     | Oyunlar, NFT'ler      |
  | Radius       | Üretim      | Topluluk                      | Anında (<1s)    | Mikro ödemeler        |
  
  ### Veri ve Sosyal API'ler
  - [Pyrimid](https://pyrimid.ai) - x402 tarzı USDC ödemeleri için Base üzerinde ajan ticaret protokolü. Yerleşik satıcı/ürün kayıt defteri, ödeme yönlendiricisi, bağlı kuruluş atamı, MCP bitiş noktası ve ajan-keşfedilebilir ücretli hizmetler için canlı katalog API'si. Güncel mainnet kanıtı: 3 satıcı, 8 zincir ürünü, 4 yönlendirilen test ödemesi. ([Katalog](https://pyrimid.ai/api/v1/catalog)) ([MCP](https://pyrimid.ai/api/mcp)) ([Beceri](https://pyrimid.ai/skill.md))
  - **[Polybot Arb Intelligence](https://github.com/packrvnner/polybot-arb-api)** — Gerçek zamanlı çapraz platform tahmin pazarı arb verileri (Polymarket+Kalshi+Myriad). x402 USDC, Base üzerinde. [Canlı API](https://governments-ruth-distribution-breaks.trycloudflare.com/free/market-pulse)
  
  - [Aigregator](https://x402.aigregator.com) - REST API ve MCP sunucusu üzerinden 5,336+ AI aracı hakkında yapılandırılmış veri. Ara, karşılaştır ve araç profillerini al. Base üzerinde USDC mikro ödemeleri. ([MCP Sunucusu](https://x402.aigregator.com/mcp))
  - [Xquik](https://xquik.com) - 7 MPP/x402 kullandığı ödeme uç noktası ile gerçek zamanlı X (Twitter) veri API'si — tweet arama, tweet araştırması, kullanıcı arama, takipçi kontrolü, makale çıkarma, medya indirme ve trendler. Hesap veya abonelik gerekli değildir. ([GitHub](https://github.com/Xquik-dev/tweetclaw)) ([npm](https://www.npmjs.com/package/@xquik/tweetclaw)) ([MCP Sunucusu](https://xquik.com/mcp))
  - [agentsvc.io](https://agentsvc.io) - Base üzerinde x402 USDC mikro ödemeleri aracılığıyla AI ajanları için 20 yardımcı program aracı. Araçlar: `ip-lookup`, `dns-lookup`, `qr-code`, `exchange-rates`, `email-validate`, `ssl-check`, `phone-validate`, `weather`, `translate`, `whois`, `crypto-prices`, `stock-prices`, `geocode`, `web-search`, `news-search`, `pdf-extract`, `screenshot`, `webpage-reader`, `html-to-pdf`, `ocr`. Çağrı başına $0.001–$0.008 USDC. API anahtarı yok, kayıt yok. Otomatik keşif: [/.well-known/agent-services.json](https://agentsvc.io/.well-known/agent-services.json) | [Katalog](https://agentsvc.io/api/v1/services) | [OpenAPI](https://agentsvc.io/api/openapi.json) | [MCP Sunucusu](https://agentsvc.io/mcp-server.mjs) | ([GitHub](https://github.com/jakobautomation/agentsvc-mcp))
  - [AgentData API](https://agentdata-api.com) - AI ajanları için gerçek zamanlı kripto pazar verileri. Base Mainnet üzerinde 16 ödeme-başına istek bitiş noktası: fiyatlar, finans oranları, volatilite, tasfiye seviyeleri, DeFi verimleri, çapraz borsa arbitrajı, teknik göstergeler (RSI/MACD/BB/ATR), destek/direnç, duygu, stablecoin sağlığı ve tarihsel OHLCV. Kendi kendini barındıran kolaylaştırıcı, hesap gerekli değildir. Bazaar keşif uzantısı ile x402 v2'yi destekler. ([Keşif](https://agentdata-api.com/discovery)) ([OpenAPI](https://agentdata-api.com/openapi.json))
  - [Fly Labs Agentic Market](https://flylabs.fun/agents) - YouTube veri API'leri AI ajanları için, Base üzerinde USDC'de ödenir. İki bitiş noktası canlı: `POST /api/agents/transcribe` ($0.03) kararlı v1.0 JSON yükü döndürür, tam transkript, dil, zaman dizini paragrafları, yaratıcı bölümleri ve kanonik meta veriler (alt yazılar mevcut, Whisper geri dönüş, LLM yeniden yazma yok). `POST /api/agents/engagement` ($0.02) görüntüleme/beğenme/yorum sayılarını, türetilmiş oranları, bileşik katılım puanını, kanal bilgisini (abone sayısı dahil) ve tam video bağlamını (etiketler, kategoriler, küçük resim, kullanılabilirlik, canlı durum) döndürür. Her yanıtta saydam önbellek (`cache.hit`, `cachedAt`, `ageSec`) — transkriptler kalıcı, katılım her 6 saatte yenilenir. Yazılan hata kodları, OpenAPI 3.1, kayıt yok. ([OpenAPI 3.1](https://flylabs.fun/api/agents/openapi.json)) ([Manifest](https://flylabs.fun/api/agents))
  - [NicheData KDP Intelligence](https://nichedata.dev) - Kindle Direct Publishing yazarları için niş talep ve rekabet zekası. AI ajanları anahtar kelime düzeyinde verileri sorgular, talep puanları, rekabet yoğunluğu, BSR aralıkları, gelir tahminleri ve fiyatlandırma analitiği dahil. Base üzerinde CDP Kolaylaştırıcısı aracılığıyla sorgu başına $0.03 USDC. Ücretsiz keşif bitiş noktası kullanılabilir tüm niş'leri listeler. ([OpenAPI](https://nichedata.dev/openapi.json)) ([Dokümanlar](https://nichedata.dev/docs))
  - [DevDrops](https://devdrops.run) - AI ajanları için 22 ödeme-başına-sorgu veri API'si — tahmin pazarları (Polymarket + Manifold), emlak zekası, spor bahisleri, mevzuat dosyaları, FX oranları, hava durumu, IP coğrafi konumu, akademik makaleler, belge özetle (Claude) ve daha fazlası. Base üzerinde sorgu başına $0.001–$0.10 USDC. API anahtarı veya abonelik yok. ([OpenAPI](https://api.devdrops.run/openapi.json)) ([Katalog](https://api.devdrops.run/catalog))
  - [Social Intel](https://socialintel.dev) — AI ajanları için Instagram influencer arama API'si. Niş, ülke, demografik veya takipçi sayısına göre ara → kullanıcı adları, biyografi, takipçi sayıları, iş kategorileri ve kamu iş emaillerini döndür. Tek profil araması $0.01; tam arama $0.50–$1.30 (100 potansiyel müşteri). Base, Solana, Polygon, Arbitrum üzerinde USDC. Kayıt yok. ([OpenAPI](https://socialintel.dev/openapi.json)) ([MCP Sunucusu](https://socialintel.dev/mcp/)) ([Demo](https://socialintel.dev/v1/search?query=fitness&demo=true))
  - [GlobalAPI](https://globalapi.dev) - AI ajanları için 43 bitiş noktası üzerinde uyum ve makro-ekonomi API'si merkezi. Kripto cüzdan yaptırım taraması, herhangi bir
---

# Awesome X402 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> ⚡ **The Ultimate x402 Resource Hub** - Everythng you need to build internet-native payments using HTTP 402. Perfect for AI agents, APIs, and micropayments. Build paywalls, monetize services, and enable autonomous agent payments with crypto/USDC. Zero fees, 2-second settlement.

[![GitHub stars](https://img.shields.io/github/stars/xpaysh/awesome-x402?style=social)](https://github.com/xpaysh/awesome-x402)

## Contents

- [🎯 Quick Start - Become an x402 Champion](#-quick-start---become-an-x402-champion)
- [📚 Official Resources](#-official-resources)
- [📖 Protocol Documentation](#-protocol-documentation)
- [🚀 Quickstart Guides](#-quickstart-guides)
- [⚙️ Protocol Implementations](#-protocol-implementations)
- [🏭 Production Implementatdions](#-production-implementations)
- [🛠️ SDKs & Client Libraries](#-sdks--client-libraries)
- [🔧 Server Frameworks & Middleware](#-server-frameworks--middleware)
- [🏗️ Facilitators](#-facilitators)
- [💡 Example Applications](#-example-applications)
- [🎨 Use Cases & Patterns](#-use-cases--patterns)
- [🤖 AI Agent Integration](#-ai-agent-integration)
- [🔨 Tools & Utilities](#-tools--utilities)
- [🧪 Testing & Development](#-testing--development)
- [📚 Tutorials & Learning Resources](#-tutorials--learning-resources)
- [🎥 Videos & Talks](#-videos--talks)
- [📝 Articles & Blog Posts](#-articles--blog-posts)
- [👥 Community](#-community)
- [🌟 Ecosystem Projects](#-ecosystem-projects)
- [📊 Ecosystem Market Data](#-ecosystem-market-data)
- [🚀 Migration Guides](#-migration-guides)
- [🔒 Security & Audits](#-security--audits)
- [🔗 Related Protocols](#-related-protocols)
- [🤝 Contributing](#-contributing)
- [Awesome Lists](#awesome-lists)

The x402 protocol enables instant Blockchain payments over HTTP using the 402 "Payment Required" status code. This is your complete guide to mastering x402 and building the future of agent payments.

🚀 **Start building in 5 minutes** | ⚡ **2-second settlement** | 💰 **USDC on Base**

---

## 🎯 Quick Start - Become an x402 Champion

**New to x402?** Follow this path to mastery:

1. [5-Minute Quickstart](https://docs.cdp.coinbase.com/x402/quickstart-for-sellers) - Accept your first payment.
2. Choose Your Stack - Find your language/framework.
3. Copy an Example - Working code you can run immediately.
4. Join the Community - Get help from other builders.

**For AI Agents:** Start with [MCP Integration](#model-context-protocol-mcp) to enable Claude/other agents to make autonomous payments.

---

## 📚 Official Resources

Core resources from the x402 protocol maintainers.

- [x402 Protocol Specification](https://github.com/coinbase/x402) - Official open-source protocol implementation by Coinbase.
- [x402 Foundation](https://x402.org) - Protocol foundation website with overview and documentation.
- [x402 Whitepaper](https://x402.org/x402-whitepaper.pdf) - Technical deep dive into protocol architecture.
- [Coinbase Developer Platform Docs](https://docs.cdp.coinbase.com/x402) - Complete implementation guide and API reference.
- [Protocol Specifications](https://github.com/coinbase/x402/tree/main/specs) - Detailed technical specifications.
  - [Payment Schemes](https://github.com/coinbase/x402/tree/main/specs/schemes) - Different payment flow types.
  - [EVM Implementation](https://github.com/coinbase/x402/blob/main/specs/schemes/exact/scheme_exact_evm.md) - Ethereum Virtual Machine specifics.

## 📖 Protocol Documentation

Essential documentation for understanding and implementing x402.

- [How x402 Works](https://docs.cdp.coinbase.com/x402/how-it-works) - Complete payment flow explanation with diagrams.
- [Payment Requirements Schema](https://github.com/coinbase/x402#payment-requirements) - JSON structure for payment requests.
- [Payment Payload Format](https://github.com/coinbase/x402#payment-payload) - Client payment submission format.
- [Verification & Settlement](https://github.com/coinbase/x402#verification-and-settlement) - Payment validation process.
- [EIP-3009 TransferWithAuthorization](https://eips.ethereum.org/EIPS/eip-3009) - Gasless transfer standard used by x402.
- [HTTP 402 Status Code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402) - The long-dormant HTTP status.

## 🚀 Quickstart Guides

Get started with x402 in minutes.

- 5-Minute Quickstart for Sellers - Accept your first payment.
- [Buyer/Client Setup](https://docs.cdp.coinbase.com/x402/quickstart-buyers) - Make automated payments.
- [One-Line Integration](https://github.com/coinbase/x402/tree/main/examples) - Add payment middleware in a single line of code.
- [Base Sepolia Testnet Setup](https://docs.cdp.coinbase.com/x402/network-support) - Get test USDC and start testing.
- Production Deployment Checklist - Go live on Base mainnet.

## ⚙️ Protocol Implementations

Official and community implementations of the x402 protocol.

### Go

- [coinbase/x402](https://github.com/coinbase/x402/tree/main/go) ⭐ **Official** - Complete Go implementation.
  - Core protocol types and utilities
  - Payment verification and settlement logic
  - Multi-chain support (Base, Base Sepolia, Ethereum, Solana)

### TypeScript/JavaScript

- [x402-typescript](https://github.com/coinbase/x402/tree/main/typescript) ⭐ **Official** - Complete TypeScript implementation.
  - Core protocol types and utilities
  - Payment verification and settlement logic
  - Multi-chain support (Base, Base Sepolia, Ethereum, Solana)
- [x402-data-api](https://github.com/155143783/x402-data-api) - HTTP 402 micro-payment data API with Base chain USDC payments. 16 developer data tools including email validation, DNS lookup, WHOIS, SSL check, and IP geolocation with x402 payment integration.

- [x402-express](https://github.com/coinbase/x402/tree/main/examples/typescript/servers/express) - Express.js middleware example.
- [hive-rosetta](https://www.npmjs.com/package/hive-rosetta) ⭐ **Community** - Open EIP-3009 `transferWithAuthorization` signer. Zero ethers/web3 dependency, primitives-only EIP-712. Returns wire shape `{scheme: 'exact', network: 'eip155:8453', payload: {authorization, signature}}`. Same package name on PyPI. ([GitHub](https://github.com/srotzin/hive-rosetta))

### Python

- [x402](https://pypi.org/project/x402/) ⭐ **Official** - Python SDK on PyPI.
  - FastAPI middleware integration
  - Requests session with auto-payments
  - Payment requirement generation

- [ag402](https://github.com/AetherCore-Dev/ag402) ⭐ **Community** - Payment layer for AI agents using x402. Wrap any API or MCP server with a USDC paywall (`ag402 serve`), or let agents auto-pay (`ag402 run`). Solana USDC, ~0.5s settlement, non-custodial, 648+ tests. [Glama](https://glama.ai/mcp/servers/AetherCore-Dev/ag402-mcp)

- [x402-pay](https://pypi.org/project/x402-pay/) - Call any x402 API with one API key. Routes requests through a broker that handles on-chain payment. httpx-based, optional wallet mode for direct payments. ([GitHub](https://github.com/bartonguestier1725-collab/x402-pay))
- [hive-rosetta](https://pypi.org/project/hive-rosetta/) ⭐ **Community** - Direct port of the Node `hive-rosetta` signer. Byte-identical EIP-712 digest across both languages. Returns `{scheme, network, payload}` matching CDP `/verify` and `/settle`. ([GitHub](https://github.com/srotzin/hive-rosetta))

### Rust

- [x402-rs](https://github.com/x402-rs/x402-rs) ⭐ **Community** - Production-grade Rust implementation.
  - Axum middleware
  - Reqwest client wrapper
  - Self-hostable facilitator
  - Multi-chain support
- x402-axum - Axum web framework integration.
- x402-reqwest - Reqwest HTTP client wrapper.


## 🏭 Production Implementations

Real companies using x402 in production with proven scale and transaction volumes.

### High-Volume Production Deployments

- [Fleet x402 Microservices](https://fleet-x402-audit.fly.dev) - Two agent-payable AI services on Base: SEO Audit ($0.05 USDC) and Competitive Intel Pack ($0.50 USDC). Instant response, zero auth required, machine-readable JSON. ([Discovery](https://fleet-x402-audit.fly.dev/.well-known/x402-listing))
- [Arch Tools](https://archtools.dev) - 58 production API tools for AI agents with x402 payments built in. Web scraping, AI generation, crypto data, OCR, browser automation, MCP compatible. Patent-pending agent auth. 15+ chains supported. ([GitHub](https://github.com/Deesmo/Arch-AI-Tools))
- [PayAPI Market](https://payapi.market) - First marketplace for x402-powered APIs. 10 APIs, 65 endpoints: UK property data, email verification, company enrichment, postcode lookup, currency/crypto rates, screenshots, DNS intelligence, web scraping, IP geolocation, QR codes. $0.001–$0.01 USDC on Base per request. MCP server discovery. ([GitHub](https://github.com/chetparker/x402-marketplace))
- [LogicNodes](https://logicnodes.io) - Live A2A marketplace with 619 deterministic microservices payable per-call in USDC. No signup — agents pay via x402, results include SHA-256 trust hashes. 8 chains: Base, Solana, Arc, Arbitrum, Optimism, Polygon, Ethereum, World Chain. Tiers: Micro $0.001 · Basic $0.05 · Standard $0.15 · Premium $0.50 USDC. MCP: `npx @logicnodez/mcp-bridge` | Python: `pip install logicnodes-m2m`. ([npm](https://www.npmjs.com/package/@logicnodez/mcp-bridge)) | ([PyPI](https://pypi.org/project/logicnodes-m2m/)) | ([Agent Guide](https://logicnodes.io/agent-guide)) | ([llms.txt](https://logicnodes.io/llms.txt))
- [Superhighway](https://superhighway.walls.sh) - Web search API for AI agents, live in production on Base mainnet. Five tools: search, news, images, scrape, and one-call deep research. $0.001 USDC per call. MCP-compatible: `npx -y superhighway-mcp`. Free API key available.
- [Rug Munch Intelligence](https://x402.rugmunch.io) - 117 MCP tools + 19 REST API endpoints for crypto data: DexScreener, Birdeye, GMGN, Arkham, Nansen, Dune, Jupiter, DeFiLlama, and more. $0.001-$0.02 USDC per call. Multi-chain (Base + Solana), free trial (1 call/IP), OpenAPI spec, no API keys, no signup. ([Discovery](https://x402.rugmunch.io/.well-known/x402) | [OpenAPI](https://x402.rugmunch.io/openapi.json) | [MCP Catalog](https://x402.rugmunch.io/mcp) | [Solana](https://x402-sol.rugmunch.io/.well-known/x402) | [GitHub](https://github.com/Rug-Munch-Media-LLC/))
- [AIsa](https://aisa.network) - Leading x402 payment processor with **10.5M+ cumulative transactions** on the x402 network, demonstrating massive production scale for autonomous agent payments and micropayment infrastructure.
- [Bitget](https://www.bitget.com) - Major cryptocurrency exchange integrating x402 for seamless payment flows, enabling instant settlements and gasless transfers for trading operations.
- [Stratalize](https://www.stratalize.com) — 100+ attested financial, healthcare, real estate, and governance intelligence tools with x402 micropayments on Base. Ed25519-signed outputs on every synthesis. $0.02–$1.00 USDC per tool call. MCP registry: com.stratalize. ([x402.json](https://www.stratalize.com/.well-known/x402.json))
- [Coinbase Developer Platform](https://coinbase.com/developer-platform) - Official CDP implementation processing hundreds of thousands of transactions weekly with enterprise-grade reliability and 2-second settlement times.
- [Cloudflare Workers](https://workers.cloudflare.com) - Edge computing platform with x402 integration serving global distributed payment verification at scale across 300+ data centers.
- [GigSoul AI Research Agent](https://gig-x402-api.jayson-be1.workers.dev) - 23-endpoint AI research API for consultants: SEC filings, earnings calls, competitor analysis, market research, and document intelligence. - [Cloudflare Workers](https://workers.cloudflare.com) - Edge computing platform with x402 integration serving global distributed payment verification at scale across 300+ data centers..01 USDC per call on Base mainnet. Wallet: x2b6c16fb557291b98222a570526ff2430848b723. ([OpenAPI](https://gig-x402-api.jayson-be1.workers.dev/openapi.json) | [.well-known/x402.json](https://gig-x402-api.jayson-be1.workers.dev/.well-known/x402.json))
- [Zuluworks AI — Sovereign Shaka PQC-Shield Factory](https://api.zuluworksai.com) - Autonomous A2A factory on Cloudflare Workers selling 5 post-quantum-hardened agent services via x402 USDC on Base L2: `quantum-shield` ($0.10, ML-KEM-768 PQC tunnel — NIST FIPS 203), `kya` ($0.01, agent trust scoring), `browser-rendering` ($0.03, headless browser extraction), `memory` ($0.05, semantic recall on a PQC knowledge index), `workers-ai` ($0.02, Llama 3.1 inference). All settlement routed through Coinbase CDP facilitator for Bazaar indexing. ([Agent Card](https://api.zuluworksai.com/.well-known/agent.json) | [Bazaar Manifest](https://api.zuluworksai.com/.well-known/x402-bazaar.json) | [MCP](https://api.zuluworksai.com/.well-known/mcp.json) | [Sitemap](https://api.zuluworksai.com/sitemap.xml))
- **[Suede Agent Studio](https://agents.suedeai.ai)** - Visual agent-flow builder that publishes flows as pay-per-call x402 endpoints (USDC on Base). Machine-readable catalog at [`/api/catalog`](https://agents.suedeai.ai/api/catalog); each agent exposes `/.well-known/x402`, `/.well-known/agent-card`, and `/a2a`. Two live agents: Daily Lyric Drop ($0.10 USDC) and The Ownership Loop ($0.25 USDC).
- [Agent402](https://agent402.tools) - Open-source, self-hostable x402 + MCP server with ~1,100 deterministic web tools: browser rendering, web search, PDF/image/OCR/audio, geo, live data (FX, weather, USGS, gov-data), network truth (DNS/TLS/WHOIS), crypto/x402 helpers, ~1,040 pure-CPU utilities. Dual-rail: free via proof-of-work, paid via USDC on Base/Polygon/Arbitrum (x402 v2 with Bazaar discovery). No LLM in the serving path — every tool re-tested against its own example before each release. Ships a hosted MCP connector (`/mcp`), an open x402 index ([Find](https://agent402.tools/api/find) · [Route](https://agent402.tools/api/route) · [Leaderboard](https://agent402.tools/api/leaderboard) — the first public on-chain ranking of x402 sellers by settled USDC volume), and the `agent402-tollbooth` pay-per-crawl gate for the publisher side. MIT. ([MCP](https://agent402.tools/mcp)) ([OpenAPI](https://agent402.tools/openapi.json)) ([Discovery](https://agent402.tools/.well-known/x402)) ([GitHub](https://github.com/MikeyPetrillo/Agent402))

- [GoldBean API](https://goldbean-api.xyz) — 146+ AI endpoints including Baidu OCR, Translation, TTS, LLM Chat with x402 micropayments on Base. From ### Production Success Metrics.01/call for premium AI. MCP server at [mcpize.com/mcp/goldbean](https://mcpize.com/mcp/goldbean). ([GitHub](https://github.com/wuzenghai616-lang/goldbean))

### Production Success Metrics

**Key Performance Indicators:**
- 10.5M+ transactions - AIsa cumulative network volume
- 500K+ weekly transactions - Ecosystem-wide payment activity
- $180M+ market cap - Combined ecosystem valuation
- 2-second settlement - Average production payment finality
- 10,000%+ growth - Year-over-year transaction volume increase

### Multi-Chain Production Support

| Chain         | Status      | Facilitators               | Settlement      | Production Examples       |
| ------------- | ----------- | -------------------------- | --------------- | ------------------------- |
| Base          | Production  | Coinbase CDP, Cloudflare   | Instant (2s)    | AIsa, Bitget, thirdweb    |
| Base Sepolia  | Testnet     | Coinbase CDP               | Instant (2s)    | Development, Testing      |
| Ethereum      | Production  | Cloudflare                 | Deferred        | Enterprise DApps          |
| Solana        | Production  | Community                  | Instant (<1s)   | High-frequency trading    |
| BNB Chain     | Production  | Pieverse                   | Instant (2s)    | Gaming, NFTs              |
| Radius        | Production  | Community                  | Instant (<1s)   | Micropayments             |

### Data & Social APIs
- [EZ-Path](https://ezpath.myezverse.xyz) — Best-execution pay-per-request DEX meta-router. Races 10+ venues (0x, ParaSwap, Aerodrome, Uniswap V3, Curve, Balancer, 1Inch, CoW Swap, Synthetix) concurrently on Base mainnet. Three tiers: basic ($0.03, 0x only), resilient ($0.10, dual-lane race), institutional ($0.50, all venues). Strict agent wallet drain protections with hardcoded toll address validation. x402 v2 USDC on Base. Supports ElizaOS plugin integration. ([Discovery](https://ezpath.myezverse.xyz/.well-known/agent.json)) ([npm](https://www.npmjs.com/package/plugin-ezpath)) ([GitHub](https://github.com/infiniteezverse/ez-agentic-price-path))
- [Sentinel Intelligence API](https://sentinel-intelligence-api.onrender.com) - Pay-per-brief fintech and AI governance intelligence. BNPL/embedded finance and AI compliance research briefs at $2 USDC; on-demand research on any topic at $10 USDC. CDP-facilitated settlement on Base mainnet. ([Discovery](https://sentinel-intelligence-api.onrender.com/.well-known/x402.json)) ([GitHub](https://github.com/ucsandman/sentinel-api))

- [OSF — Open Source Filings](https://osf-master-server.com) - Provenance-stamped public-domain US government and scientific data for AI agents. SEC EDGAR, FRED, NOAA, openFDA, USGS, Crossref, and more — every record ships with a provenance URL back to its authoritative primary source. Pay-per-record x402 USDC on Base, $0.05–$0.50. Paid MCP server + listed in the official MCP Registry. No API keys, no subscriptions. ([MCP](https://api.osf-master-server.com/mcp) | [MCP Registry](https://registry.modelcontextprotocol.io/v0.1/servers?search=osf-data-marketplace) | [Bazaar health](https://api.osf-master-server.com/x402/bazaar_health))
- 
- [AI Growth](https://kjtirbnxxymeumycrhqv.supabase.co/functions/v1/x402-seller?discover=1) - Real-data feeds for AI agents, settling via Coinbase CDP Facilitator on Base mainnet. Three pay-per-call products with x402 v2 Bazaar discovery: `opportunities` ($0.01, Claude-scored AI revenue opportunities from real GitHub bounties), `verification` ($0.02, timestamped proof-of-execution receipts — HTTP status, latency, phantom/simulation detection so agents can confirm an A2A service is real before paying), and `benchmarks` ($0.02, real endpoint liveness & latency measurements for routing). All data sourced from verified live calls — no synthetic data. No API keys, no signup. Select product via `?product=<id>`. ([Discovery](https://kjtirbnxxymeumycrhqv.supabase.co/functions/v1/x402-seller?discover=1))
- [MiroShark](https://github.com/aaronjmars/MiroShark) - Universal swarm-intelligence engine exposed as a paid API: POST a scenario to the `/x402/run` surface and hundreds of grounded LLM personas simulate Twitter, Reddit, and a prediction market hour-by-hour, returning an analytical report. USDC on Base via x402. ([GitHub](https://github.com/aaronjmars/MiroShark))
- [wrapper-agency APIs](https://fx.wrapper-agency.com) - Suite of 8 pay-per-call utility APIs settled in USDC on Base via x402 (free tier + one key for all): historical FX rates, color conversion, timezone/DST, fake/mock data, cron explainer, QR codes, data-format conversion, and encode/hash. ([FX](https://fx.wrapper-agency.com)) ([Color](https://color.wrapper-agency.com)) ([Timezone](https://tz.wrapper-agency.com)) ([Mock data](https://mock.wrapper-agency.com)) ([Cron](https://cron.wrapper-agency.com)) ([QR](https://qr.wrapper-agency.com)) ([Data format](https://data.wrapper-agency.com)) ([Encode](https://encode.wrapper-agency.com))
- [Crest x402 Data](https://data.crestsystems.ai) - x402 agent profiling plus crypto market data. Profile any x402 buyer or EVM wallet (whale score, behavior cluster, x402 spend graph, risk), plus prices, gas, DeFi, derivatives, NFTs, and DEX pairs. $0.002-$0.90 USDC on Base via Coinbase CDP facilitator, no API keys. ([Agent Card](https://data.crestsystems.ai/.well-known/agent.json) | [llms.txt](https://data.crestsystems.ai/llms.txt) | [l402-services](https://data.crestsystems.ai/.well-known/l402-services))
- [Pyrimid](https://pyrimid.ai) - Agent commerce protocol for x402-style USDC payments on Base. Includes on-chain vendor/product registry, payment router, affiliate attribution, MCP endpoint, and live catalog API for agent-discoverable paid services. Current mainnet proof: 3 vendors, 8 on-chain products, 4 routed test payments. ([Catalog](https://pyrimid.ai/api/v1/catalog)) ([MCP](https://pyrimid.ai/api/mcp)) ([Skill](https://pyrimid.ai/skill.md))
- **[Polybot Arb Intelligence](https://github.com/packrvnner/polybot-arb-api)** — Real-time cross-platform prediction market arb data (Polymarket+Kalshi+Myriad). x402 USDC on Base. [Live API](https://governments-ruth-distribution-breaks.trycloudflare.com/free/market-pulse)

- [Aigregator](https://x402.aigregator.com) - Structured data on 5,336+ AI tools via REST API and MCP server. Search, compare, and retrieve tool profiles. USDC micropayments on Base. ([MCP Server](https://x402.aigregator.com/mcp))
- [Xquik](https://xquik.com) - Real-time X (Twitter) data API with 7 MPP/x402 pay-per-use endpoints — tweet lookup, tweet search, user lookup, follower check, article extraction, media download, and trends. No accounts or subscriptions required. ([GitHub](https://github.com/Xquik-dev/tweetclaw)) ([npm](https://www.npmjs.com/package/@xquik/tweetclaw)) ([MCP Server](https://xquik.com/mcp))
- [glim.sh](https://glim.sh) - Live data from Twitter, Reddit, the web, GitHub, Amazon, and YouTube for AI agents. 11 MCP tools, $0.002-$0.015 USDC per call (Base/Solana/Monad). No API keys, no scraping stack. ([MCP Server](https://glim.sh/mcp)) ([OpenAPI](https://glim.sh/openapi.json)) ([GitHub](https://github.com/glim-sh/glim-mcp))
- [agentsvc.io](https://agentsvc.io) - 20 utility tools for AI agents via x402 USDC micropayments on Base. Tools: `ip-lookup`, `dns-lookup`, `qr-code`, `exchange-rates`, `email-validate`, `ssl-check`, `phone-validate`, `weather`, `translate`, `whois`, `crypto-prices`, `stock-prices`, `geocode`, `web-search`, `news-search`, `pdf-extract`, `screenshot`, `webpage-reader`, `html-to-pdf`, `ocr`. $0.001–$0.008 USDC per call. No API keys, no signup. Auto-discovery: [/.well-known/agent-services.json](https://agentsvc.io/.well-known/agent-services.json) | [Catalog](https://agentsvc.io/api/v1/services) | [OpenAPI](https://agentsvc.io/api/openapi.json) | [MCP Server](https://agentsvc.io/mcp-server.mjs) | ([GitHub](https://github.com/jakobautomation/agentsvc-mcp))
- [AgentData API](https://agentdata-api.com) - Real-time crypto market data for AI agents. 16 pay-per-request endpoints on Base Mainnet: prices, funding rates, volatility, liquidation levels, DeFi yields, cross-exchange arbitrage, technical indicators (RSI/MACD/BB/ATR), support/resistance, sentiment, stablecoin health, and historical OHLCV. Self-hosted facilitator, no accounts required. Supports x402 v2 with Bazaar discovery extension. ([Discovery](https://agentdata-api.com/discovery)) ([OpenAPI](https://agentdata-api.com/openapi.json))
- [GPT55 x402 Wallet Safety and Merchant Readiness](https://gpt55.558686.xyz) - x402-paid agent gateway for AI buyers that need wallet signing safety, EIP-712/Permit2 risk decoding, EVM transaction risk decoding, approval-risk auditing, x402 prepay trust checks, merchant-readiness reports, and GPT55 chat on Base USDC. Prices start at $0.0001 for chat, $0.004 for prepay checks, and $0.01 for signing/approval checks. ([Discovery](https://gpt55.558686.xyz/.well-known/x402)) ([OpenAPI](https://gpt55.558686.xyz/openapi.json)) ([Wallet Safety Kit](https://gpt55.558686.xyz/x402/wallet-signing-risk-kit)) ([MCP Config](https://gpt55.558686.xyz/mcp/config))
- [Fly Labs Agentic Market](https://flylabs.fun/agents) - YouTube data APIs for AI agents, paid in USDC on Base. Two endpoints live: `POST /api/agents/transcribe` ($0.03) returns a stable v1.0 JSON payload with verbatim transcript, language, time-indexed paragraphs, creator chapters, and canonical metadata (captions when available, Whisper fallback otherwise, no LLM rewrites). `POST /api/agents/engagement` ($0.02) returns view/like/comment counts, derived ratios, a composite engagement score, channel info (subscribers included), and full video context (tags, categories, thumbnail, availability, live status). Transparent cache on every response (`cache.hit`, `cachedAt`, `ageSec`) — transcripts are permanent, engagement refreshes every 6 hours. Typed error codes, OpenAPI 3.1, no signup. ([OpenAPI 3.1](https://flylabs.fun/api/agents/openapi.json)) ([Manifest](https://flylabs.fun/api/agents))
- [NicheData KDP Intelligence](https://nichedata.dev) - Niche demand and competition intelligence for Kindle Direct Publishing authors. AI agents query keyword-level data including demand scores, competition intensity, BSR ranges, revenue estimates, and pricing analytics. $0.03 USDC per query on Base via CDP Facilitator. Free discovery endpoint lists all available niches. ([OpenAPI](https://nichedata.dev/openapi.json)) ([Docs](https://nichedata.dev/docs))
- [Intelica](https://api.intelica.dev) - Competitive intelligence API for autonomous AI agents. Analyzes any URL or company description and returns structured JSON with market positioning, competitors, pain points, and executable Market Score. 10 context modes including `regulatory_compliance`, `venture_screening`, `crypto_protocol`, and `sales_enablement`. Standard tier $0.05 USDC, Elite tier $1.00 USDC per call on Base and Solana mainnet. MCP server at `/mcp`. A2A protocol at `/message/send`. ([OpenAPI](https://api.intelica.dev/openapi.json)) ([Discovery](https://api.intelica.dev/.well-known/x402))
- [DevDrops](https://devdrops.run) - 22 pay-per-query data APIs for AI agents — prediction markets (Polymarket + Manifold), property intelligence, sports odds, regulatory filings, FX rates, weather, IP geolocation, academic papers, document summarisation (Claude), and more. $0.001–$0.10 USDC per query on Base. No API keys or subscriptions. ([OpenAPI](https://api.devdrops.run/openapi.json)) ([Catalog](https://api.devdrops.run/catalog))
- [Regression Incoming — NFL Fantasy Rankings](https://api.regressionincoming.fyi) - Model-driven 2026 NFL preseason fantasy football rankings for AI agents. 5 x402-protected endpoints on Base mainnet: `GET /v1/rankings/preseason` ($1.00, full 412-player preseason rankings with confidence scores), `GET /v1/rankings/preseason/{player_id}` ($0.10, single-player projection by player ID), `GET /v1/draft-board/half-ppr` ($1.00, 320-player VOR draft board with floor/ceiling/tier), `GET /v1/draft-board/half-ppr/{player_id}` ($0.10, single-player draft board row), `POST /v1/bundle/purchase` ($3.00, 7-day unlimited-access JWT). USDC on Base via CDP Facilitator. Bazaar discovery extension on all 402 responses. No API keys or signup. ([Discovery](https://api.regressionincoming.fyi/.well-known/x402.json)) ([Catalog](https://api.regressionincoming.fyi/v1/bazaar))
- [Darrylbots x402 Research](https://tryponcho.com/m/darrylbots.com) - Agent-readable paid JSON research endpoints on Base USDC: stock-screen reports plus Polymarket/trading-agent analysis with structured rankings, risks, provenance, and disclaimers. $0.001 USDC per resource, no API key or account. ([Catalog](https://darrylbots.com/x402.json)) ([x402scan](https://www.x402scan.com/server/35285845-c871-4694-847b-c9b727cb474f))
- [Social Intel](https://socialintel.dev) — Instagram influencer search API for AI agents. Search by niche, country, demographics, or follower count → returns usernames, bios, follower counts, business categories, and public business emails. Single-profile lookup at $0.01; full search $0.50–$1.30 (100 leads). USDC on Base, Solana, Polygon, Arbitrum. No signup. ([OpenAPI](https://socialintel.dev/openapi.json)) ([MCP Server](https://socialintel.dev/mcp/)) ([Demo](https://socialintel.dev/v1/search?query=fitness&demo=true))
- [GlobalAPI](https://globalapi.dev) - Compliance and macro-economics API hub for AI agents across 43 endpoints. Crypto wallet sanctions screening checks any EVM, BTC, Solana, TRX, or XRP address against OFAC SDN, UK FCDO, and UN SC lists in <200ms ($0.002/check); unified DeFi counterparty check bundles sanctions + Tornado Cash labels + wallet age into a PASS/WARN/BLOCK verdict ($0.01). Economic indicators from official statistical agencies — BLS and FRED (US), ONS (UK), Eurostat (EU), Statistics Canada, ABS (AU), e-Stat (JP), IMF DataMapper (190 countries), World Bank (200 countries) — with AI commentary. Company registry lookups for Norway, Singapore, Ireland, France, Canada, and Denmark. No API key — x402 USDC on Base mainnet, $0.002–$0.10/call. ([OpenAPI](https://globalapi.dev/openapi.json) | [Discovery](https://globalapi.dev/.well-known/x402))
- [Sivut Public x402 Data APIs](https://pay.sivut.co) - Public page markdown conversion and x402 seller intelligence endpoints for AI agents, paid in USDC on Base via x402. Prices range from $0.003 to $1.00 per call; no signup or API key. ([OpenAPI](https://pay.sivut.co/openapi.json)) ([llms.txt](https://pay.sivut.co/llms.txt)) ([GitHub](https://github.com/rambov1/sivut-x402-public-data))
- [LoneStarOracle](https://lonestaroracle.xyz) - 39 x402-gated AI data services on Base: token forensics (TokenScope), smart contract audits (RattlerAI/CottonmouthAI/CopperheadAI), weather consensus, oil & gas (CrownBlock), on-chain intel (ChainScout), macroeconomics (MacroPulse), real estate, commodities, stablecoin risk, and more. $0.02-$2.00 USDC per call. No API keys. MCP server at mcp.lonestaroracle.xyz (38 tools, xyz.lonestaroracle/mcp-server v1.1.0). ([Discovery](https://token.lonestaroracle.xyz/.well-known/x402.json) | [MCP](https://mcp.lonestaroracle.xyz) | [Status](https://status.lonestaroracle.xyz))
- [TOUGH LOVE SECURITY ImageGen](https://toughlovesec.win/imagegen) - Pay-per-image AI generation powered by Cloudflare Workers AI (Stable Diffusion XL Lightning + Flux-1-Schnell). Three tiers: $0.50 single, $1.99 12-pack, $7.99 100-bundle. Stripe Checkout for humans, x402 for agents at $0.04/image. No accounts, no expiring credits. ([Launch post](https://toughlovesec.win/blog/launch-imagegen-stripe-x402))
- [TOUGH LOVE SECURITY ClawWork](https://toughlovesec.win/work) - Instant AI labor marketplace with three tiers: $5 quick polish (90s turnaround), $25 deep brief (1.5K-3K word structured deliverable), $99 full deliverable (pitch decks, RFPs, content calendars). Stripe + x402 ($0.05/call on bulk). Powered by Claude 4.7 Sonnet. ([Launch post](https://toughlovesec.win/blog/launch-clawwork-ai-labor-marketplace))
- [TOUGH LOVE SECURITY Contract Risk Score](https://toughlovesec.win/api/contract-risk-score) - Smart contract risk scoring API for DeFi devs. Scores Ethereum / Base / Arbitrum / Optimism contracts across 10 risk categories (admin-key centralization, oracle exposure, honeypot indicators, known exploit signatures). $1.25 per 5-pack via Stripe, $0.25/call via x402. Triage layer between "free Etherscan glance" and "$50K formal audit." ([Launch post](https://toughlovesec.win/blog/launch-contract-risk-score-defi-security))
- [GLHFDD](https://199-119-137-189.nip.io) - AI-powered text analysis, code analysis, and data transformation APIs built by a self-hosted AI agent. Pay-per-call via x402 protocol on Base mainnet. `POST /analyze/text` ($0.01), `POST /analyze/code` ($0.02), `POST /transform/data` ($0.005). No API keys, no signup. Auto-discovery via [bazaar.json](https://199-119-137-189.nip.io/.well-known/x402-bazaar.json).
- [Deepnets](https://api.deepnets.ai) - Solana token intelligence: safety analysis, deep wallet-funding-network mapping, holder breakdowns, social/Twitter research, trending feed, streamflow/staking lockup data. 13+ pay-per-request endpoints on Solana mainnet: `/api/token-safety/{mint}`, `/api/token-details/{mint}` (full holder + network breakdown), `/api/holder-analysis/{mint}`, `/api/social_research/{mint}`, `/api/wallet-details/{address}`, `/api/network-details/{networkAddress}`, `/api/trending`, `/api/watchlist`, `/api/flagged-tokens`, and more. $0.01 basic / $0.15 holder analysis. USDC on Solana, gas sponsored by the facilitator — no SOL needed. v2 with Bazaar discovery extension. ([OpenAPI](https://api.deepnets.ai/openapi.json)) ([Docs](https://api.deepnets.ai/docs)) ([Marketing](https://deepnets.ai/agents))
- [OpenPulsechain](https://safety.openpulsechain.com) - PulseChain blockchain analytics API with 28 x402-paid endpoints: token safety scores (0-100), opportunity signals, whale alerts, pair analytics (price impact, volatility), deployer reputation, AML funding tree, smart money feed, gas price, OHLCV history. Covers 5,900+ tokens. $0.001–$0.03 USDC per call on Base. ([x402 Discovery](https://safety.openpulsechain.com/.well-known/x402)) ([npm MCP](https://www.npmjs.com/package/@openpulsechain/mcp-server)) ([GitHub](https://github.com/openpulsechain/public))
- [DataFood (TOUGH LOVE SECURITY)](https://toughlovesec.win/agent-mesh) - Universal data hub for AI agents — 17 cross-niche sources (crypto prices, ETH gas, weather, news, HN, GitHub trending, DeFi yield, token risk via GoPlus, HHS healthcare-breach feed, geocoding, more) behind one `POST /api/data/bundle` call. **Bundle micropayments save up to 92% vs per-API alternatives.** Day pass $0.99 unlimited 24h, week pass $4.99. Payable via x402 USDC OR Stripe Checkout — same `session_id` works across every tool call. Free 1-row preview at `/api/data/preview?type=…&q=…`. ([Live demo](https://toughlovesec.win/agent-mesh)) ([MCP server](https://github.com/atmflow55/datafood-mcp)) ([x402 descriptor](https://toughlovesec.win/.well-known/x402.json)) ([catalog](https://toughlovesec.win/api/v1/catalog))
- [x402 Trust Oracle](https://x402oracle.com) - Pre-trade trust check for autonomous trading agents before paying market data, oracle, price signal, funding data, or execution-input endpoints. Endpoint https://api.x402oracle.com/v1/trade-check, route /v1/trade-check. Price: $0.002 / 2000 atomic USDC on Base mainnet eip155:8453. asset 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913. payTo 0x2DF1AEc598a104Fc15E80C0B60e50C497559A980.
- [Askew](https://x402.askew.network) - Security and DeFi intelligence for AI agents. 5 pay-per-call endpoints on Base mainnet: `/yields` ($0.002, live APY across 5 chains via DefiLlama), `/staking/router` ($0.003, SOL/ATOM native vs liquid staking routing), `/research/query` ($0.003, search agent-economy research and experiment corpus), `/intel/threats` ($0.002, Guardian security threat summary), `/intel/feed` ($0.005, combined research + threats + staking strategic feed). Free preview at `/yields/preview` and `/health`. Self-hosted facilitator (xpay.sh). Auto-discovery: ([/.well-known/x402.json](https://x402.askew.network/.well-known/x402.json) | [llms.txt](https://x402.askew.network/llms.txt) | [/offers](https://x402.askew.network/offers))
- [BitBooth](https://app.heinrichstech.com/bazaar.json) - 6 utility, content, and security endpoints for AI agents on Base mainnet, settling via Coinbase CDP Facilitator. Tools: `echo` (x402 reference impl), `json-repair` (LLM tool-output cleanup with optional JSON Schema validation), `faker` (synthetic test data via @faker-js/faker), `render-pro` (full Playwright JS rendering + Mozilla Readability extraction for SPAs), `web-diff` (rendered URL change detection vs caller-supplied previous markdown), `approval-safety` (ERC-20 `approve(spender, amount)` pre-flight risk check — flags unlimited approvals to fresh contracts, EOA spenders, copycat tokens). $0.001 USDC per call for utility tier, $0.05 for premium tier. No API keys, no subscriptions. Self-hosted discovery at [bazaar.json](https://app.heinrichstech.com/bazaar.json). ([GitHub](https://github.com/Drock91/bitbooth-gateway))
- [EconDash](https://econdash.org) - Global macroeconomic data API for AI agents: 753 indicators across 298 countries (World Bank, FRED, OECD). 15 x402-protected endpoints for GDP, inflation, employment, trade, country profiles, rankings, and metadata. $0.02 USDC/call on Base. Also supports MPP (Tempo + Solana). ([Docs](https://econdash.org/docs/quick-start)) ([OpenAPI](https://econdash.org/m2m-openapi.json))
- [anchor-x402](https://anchor-x402.com) - 16 x402-paid services for AI agents on Base + Solana mainnet. 9 commodity primitives (OFAC sanctions screen, bundled wallet intel, dual-chain hash anchoring, signed attestations, mainnet tx + calldata decode, ENS + Bonfida SNS resolve, USD prices, datetime parse), 1 async due-diligence investigator ($7.77, 5–10 min, signed markdown report + dual-chain anchor proof), 1 verifiable signed RNG (`/v1/roll`, drop-in VRF for game studios), and 5 universal LLM endpoints (roast, oracle with on-chain anchored verdict, tldr, aura, grade). Plus a hosted chatbot at [chat.anchor-x402.com](https://chat.anchor-x402.com) — connect with passkey or any browser wallet, pay only when you approve. MCP server: [`anchor-x402-mcp`](https://www.npmjs.com/package/anchor-x402-mcp). ([GitHub](https://github.com/hypeprinter007-stack/anchor-x402)) ([Discovery](https://anchor-x402.com/.well-known/x402.json)) ([Trust portal](https://anchor-x402.com/trust))
- [romefeller.app](https://romefeller.app) - Document intelligence API: scrub PII (email, CPF, CNPJ, phones, API keys), verify document completeness, assess risk, and extract structured fields from invoices, NF-e, contracts, and receipts. Regex + Claude AI hybrid. 4 paid endpoints at $0.005–$0.15 USDC per call on Base mainnet via Coinbase CDP facilitator. Free regex preview at `/preview` (no payment required). No API keys, no signup. ([/.well-known/x402.json](https://romefeller.app/.well-known/x402.json) | [OpenAPI](https://romefeller.app/openapi.json) | [llms.txt](https://romefeller.app/.well-known/llms.txt))
- [QuantOracle](https://api.quantoracle.dev) - 73 deterministic quant finance endpoints for AI agents: Black-Scholes pricing with full Greeks, Kelly Criterion, Monte Carlo simulation, Sharpe/Sortino/Calmar/VaR/CVaR risk metrics, Hurst exponent, GARCH, drawdown analysis, plus 10 paid composites (full risk audit, hedge recommendations, options strategy optimizer, portfolio rebalance plan). Math verified against 120 published-textbook accuracy benchmarks (Hull, Lopez de Prado, Kelly, Parkinson). $0.002–$0.10 USDC per call on Base + Solana mainnets via Coinbase CDP facilitator. Free tier: 1,000 calls/IP/day, no signup, no API key. 15 free interactive calculators backed by the same engine at quantoracle.dev. ([OpenAPI](https://api.quantoracle.dev/openapi.json) | [x402 Discovery](https://api.quantoracle.dev/.well-known/x402) | [AgentKit Integration](https://github.com/QuantOracledev/quantoracle/tree/main/integrations/agentkit) | [Calculators](https://quantoracle.dev) | [GitHub](https://github.com/QuantOracledev/quantoracle))
- [krewe](https://www.krewe.world) - Decentralized AI inference network on Base. Each `/v2/predict` call is fanned out to 3 independent miner nodes; 2-of-3 byte-equal consensus is required before the result settles. 4 pay-per-call endpoints: `text.structure` ($0.005, entity/email/date extraction), `text.embed` ($0.01, sentence embeddings), `web.scrape` ($0.02, fetch + clean URL payload), `text.complete` ($0.05, quantized SLM completion via Qwen2.5-0.5B-Instruct). Settlement via EIP-3009 `transferWithAuthorization`, gas paid by the orchestrator (~$0.001 on Base) and recovered from the payment. No API keys, no signup. Live consensus events stream at [/v2/live](https://www.krewe.world/dashboard) WebSocket. ([SDK](https://github.com/krewe-AI/krewe/tree/main/clients/x402-client)) ([Orchestrator](https://github.com/krewe-AI/krewe/tree/main/orchestrator)) ([Miner](https://github.com/krewe-AI/krewe/tree/main/miner))
- [SolProbe](https://api.solprobe.xyz) - Solana token risk scanner for AI agents with four pay-per-request endpoints settling USDC on Base or Solana mainnet at the same price (gas sponsored by the CDP facilitator — no SOL or ETH needed). Rug check / A–F safety grade ($0.02), market signal ($0.20), full due-diligence with wash-trading and bundled-launch detection ($0.50), and a bring-your-own-wallet Jupiter swap executor ($0.15); x402 v2 with the Bazaar discovery extension, no keys or signup. ([llm.txt](https://api.solprobe.xyz/llm.txt)) ([OpenAPI](https://api.solprobe.xyz/openapi.json)) ([Discovery](https://api.solprobe.xyz/.well-known/x402)) ([agentic.market](https://agentic.market/services/api-solprobe-xyz))
- [Usenami](https://agentic.market/services/api-usenami-io) - Multi-venue perp funding & RWA spread API for arb-aware AI agents. 6 pay-per-call endpoints on Base mainnet ($0.001–$0.010 USDC): per-venue funding rates across 30+ exchanges (`/v1/funding/current`, $0.001), cross-venue funding spread (`/v1/perp/funding-spread?ticker=BTC`, $0.001), oracle price-source family classification for basis-risk awareness (`/v1/perp/oracle-families`, $0.001), RWA perpetual coverage on Hyperliquid HIP-3 DEXes — stocks, metals, forex, commodities, pre-IPO synthetics (`/v1/rwa/perp-coverage`, $0.001), **historical funding for backtesting** (`/v1/funding/historical?ticker=&from=&to=&aggr=1h|4h|1d`, $0.005, 90d retention), and **sized-depth quotes** with precomputed slippage at $1K/$5K/$10K notional (`/v1/orderbook/depth/aggregate/{venue}/{symbol}?size_usd=N`, $0.010). Differentiated vs CoinGecko/CMC by perp-first focus + RWA inclusion + backtestable historical depth. x402 v2 with Bazaar discovery extension via Coinbase CDP Facilitator. MCP server with 6 paid + 2 free tools at [namixai/usenami-mcp](https://github.com/namixai/usenami-mcp). ([API base](https://api.usenami.io)) ([Provider](https://usenami.io))
- [melis.ai x402 Tools](https://agents.melis.ai) - 23 audit-verified pay-per-call utility endpoints for AI agents, settling in USDC on Base via Coinbase CDP Facilitator. Production fleet at `*.melis.ai`. Covers: web scraping ([ScrapePay](https://scrapepay.melis.ai/scrape) $0.01, Playwright + robots.txt-aware), HTML-to-markdown token reduction ([MarkdownOpt](https://markdownopt.melis.ai/markdown) $0.005), cached fetch ([CacheServe](https://cacheserve.melis.ai/fetch) $0.001), structured HTML extraction ([StructExtract](https://structextract.melis.ai/extract) $0.002), format conversion ([DocConvert-Text](https://docconvert-text.melis.ai/convert) $0.001, [DocConvert-PDF](https://docconvert-pdf.melis.ai/convert) $0.005), notifications ([NotifyRelay /email](https://notify.melis.ai/email) $0.005, [/notify (Telegram)](https://notify.melis.ai/notify) $0.002, [/webhook](https://notify.melis.ai/webhook) $0.001 HMAC-signed, SSRF-protected), JSON Schema validation ([SchemaGate](https://schemagate.melis.ai/validate-schema) $0.001), prompt-injection screening ([PromptGuard](https://promptguard.melis.ai/score) $0.002, [MemScrub](https://memscrub.melis.ai/scrub) $0.001), URL safety ([LinkRisk](https://linkrisk.melis.ai/profile) $0.005 lightweight, [LinkSafe](https://linksafe.melis.ai/verify) $0.01 Playwright+VirusTotal), embeddings + memory ([EmbedPay](https://embedpay.melis.ai/embed) $0.00005/1k tok, [MemoryServe /write](https://memoryserve.melis.ai/memory/write) $0.001, [/query](https://memoryserve.melis.ai/memory/query) $0.001), image moderation ([ImageGuard](https://imageguard.melis.ai/score) $0.002), wallet trust scoring ([KYA Oracle](https://kyaoracle.melis.ai/score) $0.005), response auditing ([xAudit](https://xaudit.melis.ai/validate) $0.002), multi-agent orchestration ([IntentFlow](https://intentflow.melis.ai/relay) $0.001, [LoopWall /issue](https://loopwall.melis.ai/issue) $0.001, [/hop](https://loopwall.melis.ai/hop) $0.0005). No API keys, no signup. ([MCP Server](https://www.npmjs.com/package/@melis-ai/x402-tools-mcp)) ([GitHub](https://github.com/mizukaizen/x402-tools-mcp)) ([Operator](https://melis.ai))
- [x402agent.no](https://x402agent.no) - Norway's AI agent API gateway — 7 live services, 23 endpoints covering Norwegian company registers (500K+ companies from Brønnøysundregistrene), SEO backlinks with Domain Rating, weather forecasts (MET Norway), 3,785 statistical tables (SSB), property/address data (Kartverket), IP search (Patentstyret), and public transport (Entur). $0.005–$0.10 USDC per query on Base via Coinbase CDP facilitator. No API keys, no accounts. ([services.json](https://x402agent.no/services.json)) ([llms.txt](https://x402agent.no/llms.txt))
- [dotrockets Agent Tools](https://x402.dotrockets.com) - Multi-tool x402 hub for AI agents (5 endpoints, $0.02–$0.10 USDC on Base mainnet, x402 v1+v2, no API keys or signup, gas-sponsored): **cosmic** live geophysics (KP-index with G1–G5 storms, Schumann resonance from Tomsk State University since 1997, solar wind, X-ray flux), **ai-visibility** score 0–100 for any domain (AI-crawler access, llms.txt, schema.org, SSR, + live LLM brand-knowledge check) with recommendations, **screenshot** (full-page Chromium PNG), **scrape** → clean Markdown (Mozilla Readability, optional JS render), and **search** (Brave + DuckDuckGo fallback). Machine-readable catalog, MCP server, and /.well-known discovery; Bazaar extension schema on every endpoint. ([Catalog](https://x402.dotrockets.com/catalog)) ([MCP](https://x402.dotrockets.com/mcp)) ([.well-known/x402](https://x402.dotrockets.com/.well-known/x402)) ([llms.txt](https://x402.dotrockets.com/llms.txt))
- [GoCreative AI](https://api.gocreativeai.com) - 145+ pay-per-call APIs for AI agents across social enrichment, OSINT lookups, web scraping, image generation, and document intelligence. USDC on Base via x402 (also Stripe). Free 5 calls/day per IP demo tier (no signup). Native MCP server, official GitHub Action, 7 npm + 4 PyPI SDKs, 20 HuggingFace Spaces. $0.001–$0.10 USDC per call. ([MCP Server](https://api.gocreativeai.com/mcp)) ([OpenAPI](https://api.gocreativeai.com/openapi.json)) ([Discovery](https://api.gocreativeai.com/.well-known/x402))
- [2s.io](https://2s.io) - Pay-per-call JSON API for AI agents. 35 endpoints: geo/IP, web extract + summarize + translate + screenshot, image compress + describe, barcodes (QR/Aztec/DataMatrix/PDF417), DNS + WHOIS, EVM gas oracle, US weather (NWS), climate stations + tides + sunrise (NOAA), live quakes + wildfires (USGS), Wikipedia, papers (arXiv/PubMed/Semantic Scholar), patents, federal court opinions + Federal Register + OFAC sanctions, US Census demographics, airport registry. Sub-cent to $0.03 USDC on Base via the Coinbase facilitator; bearer-account flow in preview. ([Discovery](https://2s.io/api/directory) | [OpenAPI](https://2s.io/openapi.json) | [.well-known/x402](https://2s.io/.well-known/x402) | [llms.txt](https://2s.io/llms.txt))
- [Seneschal](https://seneschal.space) - Monero & Zcash payment watching for AI agents: hand over a **view key** (read-only) and a webhook URL, get an HMAC-signed POST for every inbound XMR/ZEC payment — watches run on the operator's own full nodes, credit-metered at $0.02/day + $0.005/event, topped up via x402 USDC **or natively in XMR/ZEC**. Also: historical note scans, free Zcash UFVK derivation, live XMR/ZEC chain facts from $0.001, plus DeFi liquidation telemetry (Aave, Morpho, Spark, Compound at-risk borrowers) and Ethereum builder bid distributions. Settles via Coinbase CDP with Bazaar discovery on every route. REST + MCP, no API keys. ([Discovery](https://api.seneschal.space/.well-known/x402)) ([MCP Server](https://mcp.seneschal.space)) ([GitHub](https://github.com/Rotwang9000/seneschal-data-api))
- [x402 Entity-ID Resolver](https://entityresolver.xyz) - Canonical cross-registry entity-ID resolver for AI agents. One ambiguous company or crypto name/ticker ("Apple", "ETH", "Stripe") → ranked candidates with verified IDs fused across registries: SEC CIK + ticker, GLEIF LEI, Wikidata QID, CoinGecko slug, each tagged with the sources that agreed so every ID is checkable. The exact cross-registry lookup LLMs can't do reliably. $0.005 USDC per call on Base mainnet, gasless (EIP-3009), no API key. v2 with Bazaar discovery extension. ([OpenAPI](https://entityresolver.xyz/openapi.json)) ([llms.txt](https://entityresolver.xyz/llms.txt)) ([.well-known/x402](https://entityresolver.xyz/.well-known/x402))
- [HSH Data-on-Demand](https://dod.hshintelligence.com) - Made-to-order B2B data for AI agents on Base mainnet. Describe any data need in plain language, receive a custom quote, pay per call in USDC via x402. Live company intelligence (`hsh_company_intelligence` at $0.02/call, free `/v1/quote-smart` discovery). Built for arbitrary data fulfillment — lead lists, contact enrichment, custom pulls — quoted by scope ($1-$50). No signup, no API keys. Both HTTP API and MCP Streamable HTTP transports. ([Manifest](https://dod.hshintelligence.com/.well-known/agent-manifest.json)) ([Catalog](https://dod.hshintelligence.com/x402/catalog)) ([MCP](https://dod.hshintelligence.com/mcp)) ([GitHub](https://github.com/hshintelligence/data-on-demand))
- [img402](https://img402.dev) - Image hosting for AI agents. Upload an image, pay via x402, get a public CDN-backed URL. Three tiers: free (1MB, 7-day retention), $0.01 USDC (5MB, 1-year), $1 (5MB, permanent). USDC on Base and Solana via the Coinbase CDP facilitator; indexed in the CDP Bazaar. No API keys, no signup. Claude/agent skills available. ([Docs](https://img402.dev/docs) | [OpenAPI](https://img402.dev/openapi.json) | [llms.txt](https://img402.dev/llms.txt) | [Skills](https://github.com/img402/skills))
- [Melvea](https://api.melvea.com) — Citation-backed honey intelligence: structured varietal data and verifiable research provenance for 150+ honey varieties, including the obscure long tail foundation models get wrong. Every compositional datum resolvable to a real, published source (DOI/PMID). Endpoints: variety catalog, per-variety research citations, and grounded flavor/use recommendations — $0.02–$0.10 USDC per call on Base. ([llms.txt](https://api.melvea.com/llms.txt)) ([ai-plugin.json](https://api.melvea.com/.well-known/ai-plugin.json))
- [n0brains](https://n0brains.com) - Crypto intelligence with a live, auditable per-signal-type win-rate at [/proof](https://n0brains.com/proof) (forward returns vs BTC, 95% CI; underperforming types demoted in the open). 6 pay-per-call x402 endpoints on Base, $0.005/signal USDC, no account: signals, rotation, correlation, DEX liquidation map, S/R levels, macro. Also hosted MCP (23 tools) and `pip install n0brains-cli`. ([Discovery](https://api.n0brains.com/.well-known/x402.json))
- [Qonoro Intelligence API](https://api.qonoro.ai/docs) - x402-native intelligence APIs for AI agents and business workflows on Base mainnet. Endpoints include `/v1/company/research` for company intelligence, `/v1/competitors/analyze` for business competitor analysis, and `/v1/sales-signals/find` for sales signal detection. Structured JSON outputs include source-backed evidence and confidence scores. Pricing by endpoint via `/v1/pricing/{agent_id}`; additional services are documented in the API docs.

- [TrustBoost PII Sanitizer](https://api.trustboost.dev) — Context-aware PII sanitization for autonomous AI agent pipelines. Redacts emails, phone numbers, national IDs (RFC/CPF/CUIT/RRN), private keys, and financial data before text reaches LLMs. Every paid sanitization anchored on Solana via Helius — verifiable by any agent at `/verify/{anchor_tx}`. 8 languages: EN, ES-LATAM, PT-BR, DE, JA, FR, IT, KO. Privacy Budget per agent. TrustBoost Score M2M trust verification. 149 USDC on Solana → 10,000 sanitizations with on-chain proof. TRIAL: 50 free sanitizations with `tx_hash=TRIAL`. ([Agent Card](https://api.trustboost.dev/.well-known/agent-card.json) | [MCP](https://api.trustboost.dev/mcp) | [Verify](https://api.trustboost.dev/verify/{anchor_tx}) | [Health](https://api.trustboost.dev/health) | [Demo](https://huggingface.co/spaces/TrustBoost/pii-sanitizer))


- [OpenClaw Research API](https://github.com/BumStill/x402-research-api) — Pay-per-call research API for AI agents. Web search, content extraction, code analysis, and PDF processing endpoints. $0.01 USDC per call on Base and Solana via Dexter facilitator. Discovery: [/.well-known/x402](https://icq-barbara-treo-moderate.trycloudflare.com/.well-known/x402).
- [Crypto Data Agent](https://x402-crypto-data.vercel.app) - Live crypto prices (up to 25 coins per call) and DeFi yield pools (APY/TVL with chain/stablecoin filters) for AI agents. -e.002 USDC per call, dual-rail payments on **Base and Solana mainnet** (gas sponsored by the facilitator — no ETH/SOL needed), Bazaar-listed, free live sample at `/api/sample`. ([MCP Server](https://github.com/MooneyLive/crypto-data-x402-mcp)) ([Pricing](https://x402-crypto-data.vercel.app/pricing))
- [Kairos Lab x402 Workers](https://x402-workers.kairos-lab.io) - 8 pay-per-call endpoints for AI agents on Solana mainnet, accepting **both USDC and USDT** (multi-token paywall). Includes `/audit-mcp` ($0.05, MCP server compliance + security audit), `/factcheck-fr` ($0.02, French fact-checking via Wikipedia FR + Claude verdict), `/translate-fr-pro` ($0.03, professional FR translation with business/legal/tech glossaries + tu/vous register), `/legal-fr-quickcheck` ($0.10, French clause audit vs RGPD + Code civil + Code conso + Code travail with article-precise violations), `/scrape-stealth` ($0.01, rotating UA HTTP scraper with CSS selectors + SSRF protection), `/agent-rep-check` ($0.05, Moltbook agent reputation snapshot — karma, age, breadth, score), `/submolt-recommend` ($0.02, semantic submolt ranking for a topic), and `/ai-act-mapping` ($2.00, EU AI Act Article 50 risk-tier mapping for SaaS products + CGU/UI compliance hooks). Self-hosted facilitator, multi-token settlement, no API keys, no signup. ([Discovery](https://x402-workers.kairos-lab.io/.well-known/x402)) ([Docs](https://x402-workers.kairos-lab.io/docs)) ([Manifest](https://x402-workers.kairos-lab.io/manifest)) ([Status](https://x402-workers.kairos-lab.io/status))
- [Kraken Crypto Signals](https://signals.nsgoods.org) - Pay-per-call crypto market-state signals (BUY/SELL/HOLD + confidence) for AI agents, from a live multi-timeframe Kraken strategy. Every response is ECDSA-signed (verifiable authenticity) plus a tamper-evident hash-chain track-record. Free preview endpoint, no API keys. $0.01 single pair / $0.10 market scan on Base via CDP Facilitator, x402 v2 with Bazaar discovery extension. ([OpenAPI](https://signals.nsgoods.org/openapi.json)) ([Discovery](https://signals.nsgoods.org/.well-known/x402)) ([Preview](https://signals.nsgoods.org/signals/preview)) ([GitHub](https://github.com/Nikoble1926/kraken-crypto-signals))
- [Agent Signals](https://cryptojp.com) - Crypto market-intelligence for AI trading agents. 3 pay-per-call endpoints on Base mainnet: cross-exchange funding rate + crowding bias ($0.01), BTC->altcoin lead-lag signal ($0.02), and trend/chop market regime ($0.01). Computed live from free public exchange data (Binance/Bybit/OKX), settled in USDC via Coinbase CDP Facilitator. No API keys, no signup. ([Catalog](https://cryptojp.com/catalog)) ([OpenAPI](https://cryptojp.com/openapi.json)) ([llms.txt](https://cryptojp.com/llms.txt)) ([x402scan](https://www.x402scan.com/server/c2e6fb0b-64b1-4414-8ddd-c95d75b07e1d))
- [SYNTHORA md-extract](https://pay.hergertsynthora.com/service) - Western EN/EU web → clean markdown + token budget for AI agents. Every response ships an **Ed25519 attestation receipt**: the buyer verifies offline, with only the response in hand, that the output came from this mesh and was not tampered with — a cryptographic chain-of-custody the big scrapers don't provide. $0.005 USDC per call on Base, keyless facilitator (xpay.sh), no accounts, no signup.
- [SwapTitan](https://swaptitan.net) - No-KYC cross-chain crypto swap API for AI agents — 1288+ assets aggregated across 3 providers (ChangeNOW, SimpleSwap, Heleket). **H2H Privacy Routing** automatically pipes any-to-any swaps through Monero so source and destination chains stay unlinkable on-chain. 10 MCP tools: `swap_quote`, `swap_create`, `swap_status`, `get_prices`, `get_assets`, `ai_chat` (Llama 3.3 70B), `check_portfolio`, `rug_check`, `create_wallet`, `set_price_alert`. $0.02 USDC on Base per MCP call (2 free/day per IP), $0.05 per `swap_create`, or €49.99/mo Agent Tier for unlimited via `X-License-Key` header. On-chain x402 verification with 10-min TX freshness + KV replay protection. ([MCP Server](https://swaptitan.net/mcp)) ([Pricing](https://swaptitan.net/pricing)) ([GitHub](https://github.com/polsolbridge/swaptitan-mcp)) ([Agent Card](https://swaptitan.net/.well-known/agent.json))

### Games & On-Chain Apps
- **[Flipr](https://flipr-x402.fly.dev)** — On-chain coin flip game on Base (Chainlink VRF). Agents pay live USDC quote (~$1.23) per flip; pots paid in ETH. Two pots: 2-hour competitive (longest streak wins) and target-streak jackpot (hit N consecutive heads to win). Free decision endpoints (`/preview`, `/opportunity`) so agents can compute ROI before paying — no x402 wallet needed to evaluate. Speaks x402, MCP, and A2A simultaneously. ([OpenAPI](https://flipr-x402.fly.dev/openapi.json)) ([Agent Card](https://flipr-x402.fly.dev/.well-known/agent.json)) ([MCP Server](https://flipr-x402.fly.dev/mcp)) ([Game Info](https://flipr-x402.fly.dev/game-info))
- [Contract Risk Checker](https://contract-checker-572078894996.us-central1.run.app) - AI-powered legal contract analysis for autonomous agents. Detects killer clauses, calculates risk score 0–100 (RED/YELLOW/GREEN), generates negotiation scripts and exact fix suggestions. Supports PDF, DOCX, TXT up to ~600 pages. $10 USDC per analysis on Base + Solana. No subscription, no account. ([Docs](https://contract-checker-572078894996.us-central1.run.app/docs))
- [Invoice Parser](https://invoice-parser-572078894996.us-central1.run.app) - Structured invoice data extraction for finance automation agents. Extracts vendor, total, line items, dates, tax, and payment details from PDF/image invoices. Returns clean JSON ready for accounting systems. $0.10 USDC per parse on Base. No API keys, no signup. ([Docs](https://invoice-parser-572078894996.us-central1.run.app/docs))
- [WingmanProtocol Agent Gateway](https://agent.wingmanprotocol.com) - Resources a stateless agent can't host itself: async errands, artifact hosting, watches (a durable clock), memory + coordination — plus 15 deterministic calculators. x402 USDC on Base per call; 500 free calls/month with a key. MCP + REST + OpenAPI. ([Discovery](https://agent.wingmanprotocol.com/.well-known/x402) | [OpenAPI](https://agent.wingmanprotocol.com/openapi.json) | [MCP](https://agent.wingmanprotocol.com/mcp) | [GitHub](https://github.com/WingmanProtocol-Agent-Gateway/wingman-agent-gateway))

### Enterprise Adoption

Major tech companies leveraging x402 in production include **Coinbase** (Native CDP integration, primary facilitator), **Cloudflare** (Edge payment processing infrastructure), **Google** (Agent-to-Agent A2A payment protocol development), **Visa** (Enterprise payment rail exploration), and **thirdweb** (AI agent transaction framework Nebula).

## 🛠️ SDKs & Client Libraries

Client libraries for making x402 payments.

### JavaScript/TypeScript

**HTTP Clients**
- [cipher-x402-client](https://github.com/cryptomotifs/cipher-x402-client) - Lightweight TS/JS x402 v2 client. Zero runtime deps, native fetch, ESM + CJS dual build. 34 tests, 89% coverage. Node 18+ / browsers. Optional `ethers` peer dep for signing.
- [x402-got](https://www.npmjs.com/package/x402-got) - Got HTTP client integration.

**AI Agent SDKs**
- [PayBot SDK](https://github.com/RBKunnela/paybot-sdk) - TypeScript SDK for integrating x402 payments into AI agents and bots. Supports automatic 402 detection, wallet management, and USDC payments on Base. ([npm](https://www.npmjs.com/package/paybot-sdk))
- [ClawPay MCP](https://www.npmjs.com/package/clawpay-mcp) - Non-custodial x402 payment layer for AI agents. Agents sign locally with their own keys — no custodial infrastructure needed. Supports automatic 402 detection and USDC payments on Base. ([npm](https://www.npmjs.com/package/clawpay-mcp))
- [Askew OpenClaw Plugin](https://github.com/rubix1138/askew-openclaw-plugin) - OpenClaw plugin exposing 5 paid + 3 free Askew x402 endpoints (DeFi yields across 5 chains, native-vs-liquid staking routing, agent-economy research search, security threat intel) as native skills. Thin Node bridge to `mcp.askew.network` — payments settle directly to Askew's wallet on Base, no aggregator on the data path. Open alternative to closed/curated x402 plugins. `openclaw plugins install @askew-network/openclaw-plugin`. ([npm](https://www.npmjs.com/package/@askew-network/openclaw-plugin))
- [Azeth SDK](https://github.com/azeth-protocol/sdk) - TypeScript SDK with x402 client (`fetch402`), ERC-4337 smart accounts, on-chain reputation feedback after every x402 call, and ERC-8004 service discovery. USDC on Base. ([npm](https://www.npmjs.com/package/@azeth/sdk))
- [MoltsPay](https://github.com/Yaqing2023/moltspay) - Payment infrastructure for AI agents with x402 support. CLI, TypeScript SDK, and LangChain/CrewAI integrations. Gasless payments on Base, Polygon, Solana, BNB, Tempo. Spending limits and multi-chain support. ([npm](https://www.npmjs.com/package/moltspay))
- [PipRail](https://github.com/piprail/piprail) - Backendless, no-fee x402 SDK for AI agents across 28 chains in 10 families (every major EVM chain plus Solana, TON, Tron, NEAR, Sui, Aptos, Algorand, Stellar & XRPL). Self-custodial — the payer broadcasts their own transfer and the merchant verifies locally against their own RPC, no facilitator. Take payments (`requirePayment`) or make them (`PipRailClient`), with per-call/lifetime spend budgets and a `planPayment()` affordability + recipient-readiness preflight. ([npm](https://www.npmjs.com/package/@piprail/sdk))
- [agent402-client](https://www.npmjs.com/package/agent402-client) - Non-custodial buyer SDK for x402 + MCP. Two methods: `find()` resolves a natural-language task to a paid tool, `call()` invokes it with automatic dual-rail payment (free via proof-of-work on pure-CPU tools, paid via x402 USDC on Base/Polygon/Arbitrum). Built-in caching, idempotent retries (`Idempotency-Key`), and Bazaar-shape 402 challenge handling. Works against any Agent402-compatible server. ([GitHub](https://github.com/MikeyPetrillo/Agent402/tree/main/client))

**Wallet Integration**
- [Agent Wallet SDK](https://www.npmjs.com/package/agentwallet-sdk) - Non-custodial smart contract wallets for AI agents with on-chain spend limits and operator model. Base L2. ([npm](https://www.npmjs.com/package/agentwallet-sdk))
- [viem](https://viem.sh/) - TypeScript library used for signing payments.
- [ethers.js](https://docs.ethers.org/) - Alternative Ethereum library.

### Rust

- [alloy](https://github.com/alloy-rs/alloy) - High-performance Ethereum library.

## 🔧 Server Frameworks & Middleware

Server-side integrations for accepting x402 payments.

### Gateway / Proxy
- [swerver](https://x402.swerver.net) - High-performance x402 gateway proxy. Point it at any upstream API, set per-route USDC pricing, and swerver handles 402 negotiation, payment verification, and settlement. Built in Zig (3.4M rps on 64 cores). Dashboard for gateway management, API directory for agent discovery, direct wallet settlement (0% fee) or managed Stripe payouts (2%). Base network, USDC. ([Docs](https://x402.swerver.net/docs)) ([Directory](https://x402.swerver.net/directory))

### Node.js/TypeScript

**Multi-Framework**
- [monapi](https://monapi.dev) - One-line API monetization SDK. Wraps x402 setup into a single function call. Express, Next.js, and MCP support. Per-route pricing, Base/Arbitrum/Polygon, gas-free agent payments via EIP-3009. ([npm](https://www.npmjs.com/package/@monapi/sdk)) ([GitHub](https://github.com/DenisTheM/monapi))
- [autonomagic-marketplace](https://www.npmjs.com/package/autonomagic-marketplace) - Plugin marketplace primitive for x402. Drop a JS file in `endpoints/`, the loader registers it as a paid HTTP endpoint in ~400ms via fs.watch (no restart, no manifest edits). Generates Bazaar-shape 402 challenge with EIP-712 extras, `/.well-known/x402.json` manifest, agent-card, and OpenAPI spec automatically. Zero runtime dependencies. Production-extracted from api.autonomagic.org's 22 paid endpoints. ([npm](https://www.npmjs.com/package/autonomagic-marketplace)) ([GitHub](https://github.com/premsreelathasugeendran/autonomagic-marketplace))
- [payments-gateway](https://github.com/Rotwang9000/payments-gateway) - Brand-neutral Fastify payments engine: x402 USDC paywalls (auto-selects the Coinbase CDP facilitator when keys are present, Bazaar discovery on every route) **plus** Monero/Zcash view-key payment watching with webhooks and prepaid credit meters topped up via x402 or native XMR/ZEC. Ships as an embeddable REST plugin + MCP tool registrar + standalone bins; the embedding host injects its own branding, prices and webhook headers. MIT, production-extracted from seneschal.space. Built on [x402-server-kit](https://github.com/Rotwang9000/x402-server-kit), the same author's minimal Fastify 402 middleware.

**Express / Hono**
- [@moltrust/x402](https://www.npmjs.com/package/@moltrust/x402) - Trust score middleware for x402 endpoints. One line: `app.use(requireScore({ minScore: 60 }))`. Extracts paying wallet from X-Payment header, looks up MolTrust trust score, blocks agents below threshold with 403 + registration link. Zero dependencies. ([npm](https://www.npmjs.com/package/@moltrust/x402)) ([GitHub](https://github.com/MoltyCel/moltrust-x402))
- [@larkinsh/x402](https://www.npmjs.com/package/@larkinsh/x402) - Authorization middleware for x402 endpoints. One line: `preflight(handler, { minScore: 40 })`. Gates by a 5-dimension trust score (wallet age, tx history, counterparties, funding source, ERC-8004), returns Ed25519-signed receipts verifiable with only the public key, supports block / warn / surcharge modes. Hono / Express / Next adapters. ([npm](https://www.npmjs.com/package/@larkinsh/x402)) ([GitHub](https://github.com/larkin-dev/larkin))
- [agent402-tollbooth](https://www.npmjs.com/package/agent402-tollbooth) - Pay-per-crawl gate for site owners. Two-line Express/Next/Cloudflare integration: bot-only / all-traffic / strict charge modes, adaptive proof-of-work fallback for low-trust requests, and per-route pricing in USDC on Base via x402. Ships `gate.stats()` API + `/__tollbooth` analytics dashboard, plus deploy templates for Cloudflare Workers, Next.js middleware, and Docker. Defaults preserve original site behavior — drop-in, no rewrite required. Also available as a managed service ([Tollbooth Cloud](https://agent402.tools/tollbooth/cloud)) and a [WordPress plugin](https://agent402.tools/tollbooth/wordpress). ([npm](https://www.npmjs.com/package/agent402-tollbooth)) ([GitHub](https://github.com/MikeyPetrillo/Agent402/tree/main/tollbooth))

**Next.js**
- [x402-next](https://www.npmjs.com/package/x402-next) - App Router middleware.
- [Next.js route protection](https://github.com/coinbase/x402/tree/main/examples/typescript/fullstack/next) - Complete app example.
- Mainnet production example - Base mainnet ready.

**Hono**
- Browser wallet example - React + Hono full-stack.
- [Azeth Provider](https://github.com/azeth-protocol/provider) - Hono middleware for gating endpoints behind x402 payments with payment-agreement support for recurring agent-to-agent billing. ([npm](https://www.npmjs.com/package/@azeth/provider))

### Python

**FastAPI**
- [FastAPI example](https://github.com/coinbase/x402/tree/main/examples/python) - Complete implementation.
- [x402-agent-monetizer](https://github.com/minhthai1995/x402-agent-monetizer) ⭐ **Community** - Drop-in `@paywall` decorator for FastAPI. One decorator gates any endpoint behind USDC on Base. Includes a companion `Client` class (auto-pay + retry), sync/async support, preserves FastAPI dependency injection via `inspect.signature.replace()`. MIT, Python 3.10+, 3 passing tests.

**Client Libraries**
- [x402 Payment Harness](https://github.com/rplryan/x402-payment-harness) - Python library + CLI for x402 payments without requiring Coinbase CDP wallet. Works with any Ethereum EOA. Full HTTP 402 -> EIP-712 sign -> X-PAYMENT header flow. `pip install x402-payment-harness`. ([PyPI](https://pypi.org/project/x402-payment-harness/))
- [MoltsPay Python](https://github.com/Yaqing2023/moltspay-python) - Python SDK for x402 agent payments. LangChain compatible. Auto-creates wallets, discovers services, pays via x402. Multi-chain: Base, Polygon, Solana, BNB. ([PyPI](https://pypi.org/project/moltspay/))
- [switchboard](https://github.com/kcolbchain/switchboard) - Python middleware + on-chain escrow for agent payments. FastAPI/Flask `X402Middleware` server-side, gas budget tracker, reorg-safe nonce manager, and Solidity `AgentEscrow` with timeout/refund. Protocol-agnostic substrate (x402 + escrow shipping; MPP/AP2 in flight).
- [Routeweiler](https://github.com/nikoSchoinas/routeweiler-python-sdk) — Python micropayment client for autonomous agents that auto-handles HTTP 402 across x402, L402, MPP-Tempo, and Stripe SPT. Enforces policy & budget, and produces payment traces for auditing. ([PyPI](https://pypi.org/project/routeweiler/))

### Rust

**Axum**
- Axum server example - Full implementation.

## 🏗️ Facilitators

Payment verification and settlement services.

**Hosted Facilitators:**

- Coinbase CDP - Official hosted facilitator on Base/Base Sepolia with instant settlement.
- [Cloudflare x402](https://blog.cloudflare.com/x402/) - Edge computing facilitator on Base/Ethereum with deferred settlement.
- [BNB Chain Pieverse](https://twitter.com/BNBChainDevs/status/1983198549039780026) - BNB Chain facilitator with instant settlement.
- [AsterPay](https://asterpay.io) - European x402 Facilitator with EUR off-ramp via SEPA Instant. MiCA compliant, ERC-8004 ready, ElizaOS plugin. First European-focused x402 infrastructure.
- [FluxA](https://fluxapay.xyz) - Hosted x402 facilitator for AI agent payments. Extends x402 with AEP2 protocol for deferred settlement, agent co-wallets with spend controls, and one-line MCP server monetization.
- [MERX x402 for TRON](https://x402.merx.exchange) - First TRON facilitator. Supports USDT, USDC, USDD on TRON mainnet. Sub-3-second confirmation for micropayments. [Express middleware](https://npmjs.com/package/merx-x402), [documentation](https://github.com/Hovsteder/x402-tron).
- [Primev FastRPC](https://facilitator.primev.xyz) - Fee-free facilitator on Ethereum mainnet with sub-200ms settlement via [mev-commit](https://mev-commit.xyz) preconfirmations. ERC-8004 registered (Agent #23175).
- [Voidly Pay](https://api.voidly.ai/v1/pay) - USDC-backed agent-to-agent payment rail on Base mainnet. Source-verified vault ([0xb592…1c12](https://basescan.org/address/0xb592512932a7b354969bb48039c2dc7ad6ad1c12)), public proof of reserves at [/v1/pay/proof](https://api.voidly.ai/v1/pay/proof), facilitator-signed quotes (anti-MitM). Ed25519-signed envelopes; 28-tool MCP server [@voidly/pay-mcp](https://www.npmjs.com/package/@voidly/pay-mcp); TypeScript + Python SDKs; Express/Hono/Flask/FastAPI middleware. Live paid endpoints: forecast-pro, claim-verify-pro, incident-summary-pro.
- [Satoshi Facilitator](https://bitcoinsapi.com/docs) - Independent x402 facilitator for Bitcoin-focused pay-per-call services with Base, Base Sepolia, Solana Mainnet, and Solana Devnet support. [Supported networks](https://facilitator.bitcoinsapi.com/supported)
- [Floe](https://floelabs.xyz) - Credit and payments for AI agent developers. x402 credit lines, fiat funding (card/bank/Apple Pay in 100+ countries), programmable spend controls. No crypto required. 3,000+ working capital lines issued, zero defaults. [npm: floe-agent](https://npmjs.com/package/floe-agent) | [Docs](https://floe-labs.gitbook.io/docs) | [MCP](https://github.com/Floe-Labs/floe-mcp-server)
- [AlgoVoi](https://api1.ilovechicken.co.uk/.well-known/agent.json) - Multi-chain x402 facilitator spanning EVM (Base, Tempo), SVM (Solana), AVM (Algorand, VOI), Stellar, and Hedera on a single endpoint. Native Solana Pay `reference` pubkey binding (cryptographic tx↔order correlation without memos). Also implements MPP and AP2 at the same URL. [Open-source MCP adapter](https://github.com/chopmob-cloud/AlgoVoi-Platform-Adapters).
- [x402-saas](https://x402-saas.surge.sh) - Hosted facilitator + zero-SDK onboarding proxy on Base. SIWE auth, slug-routed multi-tenant data plane, 1% of routed USDC volume. MIT-licensed self-host alternative at [x402-kit](https://github.com/kite-builds-erik/x402-kit). Live demo at [`/__x402/health`](https://x402-saas.onrender.com/__x402/health).
- [Primer](https://x402.primer.systems) - Free x402 facilitator supporting Base and SKALE Base networks, with full ERC-20 support. v1 and v2 x402 both accepted. Batch settlement enabled. [Documentation](https://docs.primer.systems).

### Self-Hosted Facilitators

- x402-rs Facilitator - Production-grade Rust facilitator.
  - Docker deployment support
  - Multi-chain configuration
  - REST API endpoints (/verify, /settle)
- [Running Your Own Facilitator](https://github.com/x402-rs/x402-rs#facilitator) - Setup guide.
- [@facilitator/eip7702](https://github.com/melonask/facilitator) - Support for all EVM blockchains (BNB, Polygon, etc.), all tokens (USDT, DAI, WBTC, etc.), and all native coins (POL, AVAX, etc.).
- [agenticpay facilitator](https://github.com/krystiangw/agenticpay/tree/main/packages/facilitator) ([npm](https://www.npmjs.com/package/@agenticpay/facilitator)) - Open-source TypeScript facilitator for Solana (devnet + mainnet). Verify + settle via `@x402/svm/exact/facilitator`, fee_payer abstraction so payers only need USDC, persistent keypair via env var (Heroku/Fly-friendly). Hosted devnet endpoint: `https://agentpay-facilitator-e9b20a5fee6a.herokuapp.com`.
- [Ontario Protocol](https://ontarioprotocol.com) - Trust scans, readiness verification, and pre-payment checks for x402 endpoints; live paid API on Base (USDC) with MCP server and machine-readable manifests ([x402.json](https://ontarioprotocol.com/.well-known/x402.json)).

## 💡 Example Applications

Full working examples and templates.

- [LION](https://lionx402.com) - 20 keyless data & compliance tools for AI agents via x402 USDC micropayments on Base. OFAC sanctions screening, on-chain token risk, EU VAT validation, firmographics + SEC financials, CPG/retail prices. Every response Ed25519-attested — verify offline. No API key, no signup. ([MCP](https://lionx402.com/api/mcp) · [Quickstart](https://github.com/8dp6brm9hp-svg/lion-mcp-public))
### Full-Stack Applications

- [Weather API Service](https://github.com/coinbase/x402/tree/main/examples/typescript/clients) - Simple paid API endpoint.
- Next.js App - Complete web application.
- [Video Paywall](https://www.quicknode.com/guides/infrastructure/how-to-use-x402-payment-required) - Premium content access tutorial.
- Browser Wallet Template - React + Hono + Session management.
- [x402 Boilerplate — Conflux eSpace](https://github.com/confluxarena/x402-boilerplate) - Production-ready paid AI API with PHP backend, Node.js facilitator, CLI agent, Docker, 87 tests, and multi-wallet demo. EIP-3009 USDT0 settlement. [Live Demo](https://confluxarena.org/x402-demo).
- [x402 Dynamic Pricing](https://github.com/trionlabs/x402-dynamic-pricing) - Demand-based surge pricing engine using x402 V2's dynamic `getAmount` callback. Sliding window with 5-tier interpolation and EMA smoothing, plus interactive Svelte 5 simulator.
- [Agent Arena](https://agentarena.site) - On-chain ERC-8004 agent registry with x402-gated search ($0.001 USDC/query) and registration ($0.05 USDC). Agents discover and hire each other autonomously on Base mainnet. No API keys required.
- [CIPHER Premium](https://cipher-x402.vercel.app) - Next.js 16 paywall with 4 gated Solana-quant chapters (MEV deep-dive, 3-tier wallet, Canadian compliance, Oracle Cloud Always Free). $0.25 USDC/Base per fetch. Hand-rolled proxy.ts, no facilitator deps at advertise time.

### API Examples
- [tokenguard](https://eltociear-tokenguard.hf.space/scan) - ERC-20 rug/safety scanner: detects mint, blacklist, pausable, transfer-tax, upgradeable-proxy & ownership traps and returns a risk score with ranked findings. $0.005 USDC per call on Base. Part of an onchain-intelligence suite (also `/wallet`, `/price`, `/ens`, `/gas`). No signup — wallet is auth.
- [skill-audit](https://eltociear-skill-audit.hf.space/audit) - Scans MCP servers & AI-agent skills/plugins for 68 malicious patterns (prompt injection, data exfiltration, unsafe exec). $0.01 USDC per call on Base. ([GitHub](https://github.com/eltociear/skill-audit-mcp))
- [contract-guard](https://eltociear-contract-guard.hf.space/check) - Risk check for any EVM contract/token address — proxy/upgradeability, ERC-20 traps & ownership flags across Base, Ethereum, Arbitrum, Optimism, Polygon & BSC. $0.005 USDC per call on Base.
- [Daizyx402 Security Research API](http://daizyx402.com:5402) - AI-powered smart contract security analysis and DeFi vulnerability research by autonomous agent. $0.05 USDC per query, $0.50 USDC deep analysis on Base mainnet. No signup required.

- [tx402.ai](https://tx402.ai) - Agent-native LLM inference gateway. 20+ EU-hosted models (DeepSeek, Qwen, Llama, GLM, Mixtral) via x402 USDC micropayments on Base. OpenAI-compatible API, SSE streaming, GDPR-compliant, zero data retention. No API keys — wallet is auth. [Models](https://tx402.ai/v1/models) | [OpenAPI](https://tx402.ai/openapi.json) | [llms.txt](https://tx402.ai/llms.txt) | [Source](https://github.com/Tensorix-ai/agent-gateway)
- [x402 Video](https://x402-video.com) - Pay-per-call AI video generation gateway (Seedance 2.0 + Fast). POST a prompt → 402 → pay USDC on Base → MP4. Prompt screening before payment — rejected requests are never charged. No API keys, no signup. [llms.txt](https://api.x402-video.com/llms.txt) | [Live status](https://api.x402-video.com/status) | [GitHub](https://github.com/x402-video)
- [SolSignal API](https://solsignal-api.onrender.com) - Solana token safety scanner — aggregates DexScreener, RugCheck, GoPlus & Jupiter simulation into one SAFE/CAUTION/AVOID/RUG verdict in <2s. 10 free scans/day, $0.01 USDC per call on Solana. [Source](https://github.com/cryptomotifs/solsignal-api)
- [x402 Gateway](https://zoning-amsterdam-ends-disposition.trycloudflare.com) - Simple Node.js API gateway for AI agents. Weather ($0.01), crypto prices ($0.01), exchange rates ($0.005), news ($0.02). USDC on Polygon. HTTPS via Cloudflare Tunnel. [Source](https://github.com/863king/x402-gateway)
- [Alfred's Digital Bazaar](https://httpay.xyz) - ~100 x402-paywalled API endpoints built by an AI agent. Fortune cookies, wallet roasts, crypto pickup lines, token analysis & more. $0.10–$1.00 USDC per call on Base. No signup required. [Source](https://github.com/Alfredz0x/alfreds-digital-bazaar)
- [Banking Bodyguard](https://bodyguard.finance) - Real-time cbBTC whale movement signals on Base. Scored sentiment (1-10), impact vs 24h DEX volume, and HOLD/TIGHTEN_STOP/EXIT recommendations. ~500K signals indexed. x402 enforced — $0.10 USDC per call on Base. [Docs](https://bodyguard.finance/docs)
- * [Banking Bodyguard](https://bodyguard.finance) - Real-time cbBTC whale movement signals on Base. Scored sentiment (1-10), impact vs 24h DEX volume, and HOLD/TIGHTEN_STOP/EXIT recommendations. ~500K signals indexed. x402 infrastructure live ([first payment tx](https://basescan.org/tx/0x26253b9664c2710c7d6eb937e4083409d69d26d47eb9488b11ac256f0496bbd3)), currently in free pilot during CDP facilitator integration. $0.10 USDC per call on Base. [Docs](https://bodyguard.finance/docs)

- [Solana Trading Data API](https://x402-solana-data.onrender.com) - Real-time Solana ecosystem data for AI agents. `GET /api/trending` (hot tokens, new pairs, wallet flows), `GET /api/token/{mint}` (full token profile — holders, liquidity, transactions). x402 gated at $0.01 USDC per call on Solana mainnet. [.well-known/x402](https://x402-solana-data.onrender.com/.well-known/x402) | [.well-known/agent-card.json](https://x402-solana-data.onrender.com/.well-known/agent-card.json) | [Source](https://github.com/memegent-unofficial/solana-trading-data-api)
- [Gotobi Calendar API](https://gotobi.hugen.tokyo) - Japanese FX gotobi date intelligence for trading agents. Holiday-aware USD settlement day detection with next-date lookup and monthly schedules. $0.01 USDC on Base and Solana. [Source](https://github.com/bartonguestier1725-collab/x402-gotobi-api)
- [CryptoHunter APIs](https://cryptohunterx402apis.loca.lt) - Live crypto data + DeFi safety tools for AI agents. 8 x402-paid endpoints on Base mainnet: real-time prices ($0.001 USDC), gas fees ($0.001), best DEX swap quotes via CoW Protocol ($0.003), token honeypot/rug analysis via GoPlus Security ($0.003), multi-token portfolio ($0.003), No API — AI that always answers No ($0.01), Rickroll API ($0.01). No API keys needed. USDC on Base mainnet. [`/.well-known/x402.json`](https://cryptohunterx402apis.loca.lt/.well-known/x402.json) | [Manifest](https://cryptohunterx402apis.loca.lt/crypto/manifest)
- [Weather API](https://weather.hugen.tokyo) - Global weather data for AI agents. Real-time conditions and 7-day forecasts. $0.01 USDC on Base. [Source](https://github.com/bartonguestier1725-collab/x402-weather-api)
- [Micro Data API Factory — Weather](https://weather-data-api.kasanegi123.workers.dev) - Cloudflare Workers edge weather for AI agents. Instant data by city name — no API keys, no geocoding setup, no rate limits. Current conditions + 1-7 day forecasts worldwide. 402 body ships a live upstream peek, a free preview URL, and an MCP gateway handle in one response. $0.001 USDC per call on Base. Open-Meteo (CC BY 4.0). [.well-known/x402](https://weather-data-api.kasanegi123.workers.dev/.well-known/x402) | [llms.txt](https://weather-data-api.kasanegi123.workers.dev/llms.txt) | [MCP gateway](https://mcp-data-gateway.kasanegi123.workers.dev/mcp)
- [Micro Data API Factory — Broker](https://broker-entry-api.kasanegi123.workers.dev) - Wallet-free entry layer for the Micro Data API Factory products. `POST /keys/create` issues an API key instantly (no signup, no wallet) with a trial credit. `POST /broker/call` meters calls against the credit; when it runs out, a 402-style body hands off to the direct x402 paid URL, the MCP gateway, or a fresh trial key. Factory primitive — new products are added by DB insert, not redeploy. Currently covers weather v1 (current + forecast); more products added as they come online. [manifest](https://broker-entry-api.kasanegi123.workers.dev/.well-known/broker-manifest.json) | [llms.txt](https://broker-entry-api.kasanegi123.workers.dev/llms.txt) | [products](https://broker-entry-api.kasanegi123.workers.dev/products)
- [Micro Data API Factory — JP Local Pack](https://api.kasanegi.com) - Japan backoffice primitives for AI agents: payroll summary, payroll deductions, social-insurance grade lookup, consumption tax, holidays, corporate-number lookup, invoice issuer lookup, invoice registration lookup, and Peppol validation through one gateway. Wallet-free preview routes live under `/preview/v1/local/...`; x402-paid production routes live under `/v1/local/...` on Base USDC. $0.001-$0.02 USDC per call. Data sources include NTA, MHLW, Kyokai Kenpo, Cabinet Office, Digital Agency, and gBizINFO. [products](https://api.kasanegi.com/products) | [llms.txt](https://api.kasanegi.com/llms.txt) | [openapi](https://api.kasanegi.com/openapi.json)
- [Micro Data API Factory — JP Grants](https://api.kasanegi.com) - Japan grants deadline tracker and review-required candidate triage for AI agents. Gateway endpoints cover grant detail, search, upcoming deadlines, and candidate ranking; history/adoption-rate data is not sold until live e-Stat parsing is ready. Wallet-free preview routes live under `/preview/v1/grants/...`; x402-paid production routes live under `/v1/grants/...` on Base USDC. $0.02-$0.05 USDC per call. Sources include J-Grants and official guideline pages; outputs expose sparse-data and review-required warnings. [products](https://api.kasanegi.com/products) | [llms.txt](https://api.kasanegi.com/llms.txt) | [openapi](https://api.kasanegi.com/openapi.json)
- [Micro Data API Factory — JP Data Enrich](https://api.kasanegi.com) - Japan public-company and supplier intelligence for AI agents. Gateway endpoints resolve Japanese companies by name, domain, or corporate number and return gBizINFO profiles, business signals, EDINET filings, EDINET officer rows, and batch enrichment. Wallet-free preview routes live under `/preview/v1/enrich/...`; x402-paid production routes live under `/v1/enrich/...` on Base USDC. $0.01-$0.05 USDC per call. Sources include gBizINFO, EDINET public filings, and official public-data feeds; not an authoritative KYB verification API. [products](https://api.kasanegi.com/products) | [llms.txt](https://api.kasanegi.com/llms.txt) | [openapi](https://api.kasanegi.com/openapi.json)
- [Micro Data API Factory — Kasanegi API Gateway](https://api.kasanegi.com) - x402 gateway for AI agents buying Japan business-data micro-APIs through one host: JP Local Pack (backoffice primitives), JP Data Enrich (public-company and supplier intelligence), and JP Grants (deadline tracker + review-required candidate triage). Wallet-free preview routes live under `/preview/v1/...`; x402-paid production routes live under `/v1/...` on Base USDC. $0.001-$0.05 USDC per call. [portal](https://kasanegi.com) | [products](https://api.kasanegi.com/products) | [llms.txt](https://api.kasanegi.com/llms.txt) | [openapi](https://api.kasanegi.com/openapi.json)
- [Scout MCP](https://scout.hugen.tokyo) - Multi-source search across code, academic, social, and community platforms. One call returns structured JSON. From $0.01 USDC on Base; $0.25 for aggregated reports. [Source](https://github.com/bartonguestier1725-collab/scout-mcp)
- [Obol](https://obol.sh) — AI code generation via x402. Pay $5 USDC on Base per call — Obol forks your GitHub repo, generates production-ready code, and opens a PR. 7 endpoints: Next.js site cloning, Farcaster mini apps, OpenAPI + Hono servers, Vitest tests, MDX docs, GitHub Actions CI/CD, TypeScript refactoring. A2A agent card + OpenAPI discovery built-in. [API](https://api.obol.sh)
- [ShieldAPI MCP](https://www.npmjs.com/package/shieldapi-mcp) - 9-tool security MCP server: password breach, email breach, domain reputation, IP reputation, URL safety, full security scan, prompt injection detection, and skill security scanning. x402 USDC micropayments on Base or free demo mode. `npx shieldapi-mcp`. ([GitHub](https://github.com/alberthild/shieldapi-mcp))
- [Mailcheck API](https://mailcheck.hugen.tokyo) - Email validation: syntax, MX records, disposable domain detection, free provider check, role-based address detection, and typo suggestion. $0.01 USDC on Base. [Source](https://github.com/bartonguestier1725-collab/x402-mailcheck-api)
- [DeFi Intelligence API](https://defi.hugen.tokyo) - Unified DeFi security, bridging, and analytics for AI agents. 26 endpoints: token/address/NFT security analysis, rugpull detection, phishing checks, transaction simulation, cross-chain bridge quotes and routes, protocol TVL/fees, token prices, stablecoin data, and DEX volumes. Integrates GoPlus Security + LI.FI + DeFi Llama. $0.005–$0.01 USDC per call on Base.
- [Sentinel](https://sentinel-awms.onrender.com) - x402-gated trust verification service for autonomous AI agents on Base. Provides protocol trust scoring, token safety analysis, DeFi position risk assessment, OFAC counterparty screening, and unified preflight checks — all payable with USDC micropayments via x402. 5 endpoints: /verify/protocol ($0.008), /verify/token ($0.005), /verify/position ($0.005), /verify/counterparty ($0.010), /preflight ($0.025). Integrates DeFiLlama, GoPlus Security, Etherscan, Alchemy, and OFAC SDN. Includes .well-known/x402 discovery, OpenAPI spec, and Bazaar extensions. ([GitHub](https://github.com/nbsickler-ux/Sentinel))
- [Domain Intelligence API](https://domain.hugen.tokyo) - Domain analysis for AI agents. WHOIS registration, multi-resolver DNS (Google/Cloudflare/Quad9), SSL/TLS certificate grading, Wappalyzer tech stack detection, security header audit, CT log subdomain discovery, and redirect chain analysis. 8 endpoints from $0.001 USDC on Base. [llms.txt](https://domain.hugen.tokyo/llms.txt)
- [Visual API](https://visual.hugen.tokyo) - Screenshot, PDF capture, and document parsing for AI agents. Render any URL as JPEG/PNG screenshots or A4 PDF documents with full-page scroll capture, CSS targeting, mobile emulation, dark mode, ad blocking. Parse uploaded PDFs into structured text with metadata. $0.01–$0.02 USDC per call on Base.
- [ALPHA PDF / Document Tools](https://alpha-systems.net) - Document toolkit for AI agents: Markdown→PDF, Markdown→HTML, Markdown→Word (.docx), PDF merge, and PDF watermark. Deterministic (no LLM guesswork). Free tier (30/hr) + x402 pay-per-call ($0.05 USDC per call on Base). REST + native MCP server; listed in the official MCP registry as `net.alpha-systems/pdf`. Built and operated autonomously by an AI agent. [MCP](https://alpha-systems.net/mcp)
- [Whale Intelligence API](https://whale.hugen.tokyo) - On-chain whale tracking for AI agents. 412K+ labeled Ethereum addresses across 540 categories (exchanges, DeFi, bridges, MEV, exploits). Address label lookup, wallet activity profiling with balance and transfers, and large transfer detection with entity resolution. $0.01–$0.02 USDC per call on Base. [llms.txt](https://whale.hugen.tokyo/llms.txt)
- [COT Intelligence API](https://cot.hugen.tokyo) - CFTC Commitments of Traders data for FX trading agents. Weekly futures positioning with z-score analysis for JPY, EUR, GBP, CHF, CAD, AUD. Positioning extremes detection, yield-momentum cross signals, and 26-week z-score history. $0.01–$0.02 USDC per call on Base. [llms.txt](https://cot.hugen.tokyo/llms.txt)
- [Polymarket Intelligence API](https://polymarket.hugen.tokyo) - Prediction market anomaly signals for AI agents. Z-score detection on Polymarket odds — surfaces events where odds moved 2+ standard deviations from rolling mean. Covers fed rates, crypto prices, regulation, geopolitics, tariffs. $0.01 USDC per call on Base. [llms.txt](https://polymarket.hugen.tokyo/llms.txt)
- - [PureSignal402](https://puresignal402.xyz) - High-confidence prediction-market signals from Kalshi across crypto, macro, politics, weather, sports, and tech. Returns markets above a configurable confidence threshold with TTL, 24h volume, and liquidity for tradability. `/v1/live` surfaces markets settling soon (`?within_minutes=30` for BTC/ETH/SOL/BNB/DOGE 15-minute markets at 92%+ confidence). $0.005 USDC per call on Base mainnet via Coinbase CDP facilitator. [OpenAPI](https://puresignal402.xyz/openapi.json) [Agent Card](https://puresignal402.xyz/.well-known/agent.json) [MCP](https://puresignal402.xyz/.well-known/mcp.json)
- [Sanctions Screening API](https://sanctions.hugen.tokyo) - OFAC, EU, and UN Security Council sanctions screening for AI agents. 26,800+ sanctioned entities with fuzzy name matching and word-boundary filtering. Screen names or search with source filtering. $0.01 USDC per call on Base. [llms.txt](https://sanctions.hugen.tokyo/llms.txt)
- [CVE Intelligence API](https://cve.hugen.tokyo) - NVD vulnerability lookup, search, and recent CVEs for AI agents. CVSS v3.1/v4.0 score normalization, severity classification, affected product extraction from CPE trees, and CISA Known Exploited Vulnerabilities flags. $0.01 USDC per call on Base. [llms.txt](https://cve.hugen.tokyo/llms.txt)
- [FDA Intelligence API](https://fda.hugen.tokyo) - OpenFDA drug and device safety intelligence for AI agents. Drug adverse event aggregation with severity/outcome stats, label key section extraction, drug and device recall classification (Class I/II/III). 4 endpoints at $0.01 USDC per call on Base. [llms.txt](https://fda.hugen.tokyo/llms.txt)
- [Nutrition Intelligence API](https://nutrition.hugen.tokyo) - USDA FoodData Central nutrition data for AI agents. Search 350K+ foods, full nutrient profiles with %DV, and side-by-side comparison. Macros, vitamins, minerals categorized. $0.01 USDC per call on Base. [llms.txt](https://nutrition.hugen.tokyo/llms.txt)
- **[Crypto ETF Sentinel](https://cryptoetfsentinel.com)** — US spot crypto ETF regulatory intelligence oracle. Curates 3,100+ SEC filings across 105 issuers and 34 cryptocurrencies, with approval-pipeline tracking, XBRL financials, POS AM operational data (sponsor fees, custodian, AP rosters), and fee-war monitoring. 22 routes priced $0.05–$1.00 USDC on Base mainnet via CDP facilitator. [Docs](https://api.cryptoetfsentinel.com/docs)
- [EDGAR Intelligence API](https://edgar.hugen.tokyo) - SEC EDGAR corporate filing intelligence for AI agents. Company search with ticker/CIK, filing history by type (10-K/10-Q/8-K/20-F), and XBRL financial facts with YoY growth rates. Revenue, net income, EPS, assets. $0.01 USDC per call on Base. [llms.txt](https://edgar.hugen.tokyo/llms.txt)
- [DeepBlue Trading API](https://api.deepbluebase.xyz) - AI-powered crypto intelligence from an autonomous trading team running real money on Polymarket. 21 endpoints: live BTC/ETH/SOL/XRP signals, prediction market analytics, sentiment composites, whale tracking, and macro briefings. $0.01–$0.05 USDC per call on Base. [OpenAPI](https://api.deepbluebase.xyz/openapi.json)
- [MoonMaker API](https://api.moonmaker.cc) - AI-native crypto data API with x402 pay-per-call. 11 endpoints: signals, market context, DeFi regime, institutions, ETF flows, DeFi yields, DEX alpha. $0.02–$0.10/call USDC on Base. No signup. [llms.txt](https://api.moonmaker.cc/llms.txt)
- [hundun.app](https://hundun.app) - Pay-per-call AI document summarization for AI agents. Long-context (up to 200K chars), auto-language detection (Chinese/English tested), $0.05 USDC per call on Base. No API keys, no signups. [Docs](https://hundun.app/docs)
- [DeFi Signal Agent](https://defi-signal-agent-production.up.railway.app) - Real-time DeFi intelligence for AI agents. New pool risk scoring (0–10) on Base + Ethereum, Solana whale alerts (>$100K), and on-chain enrichment via Dune Analytics. 4 endpoints from $0.01–$0.10 USDC per call on Base Sepolia. Self-hostable. [Source](https://github.com/dislovelhl/defi-signal-agent)
- [x402 AI API — zeroreader](https://api.zeroreader.com) - 29 Cloudflare Workers AI models (LLM, Embeddings, Image Generation, Audio, Translation) via x402 micropayments. $0.001–$0.015 per request, USDC on Base. Supports streaming, batch processing, OpenAI-compatible format. [llms.txt](https://api.zeroreader.com/llms.txt) | [OpenAPI](https://api.zeroreader.com/openapi.json)
- [Content Intelligence API](https://content.hugen.tokyo) - AI-powered web content extraction and analysis for AI agents. Clean text extraction with trafilatura (F1=0.909), metadata/OG tags, link classification, AI summarization with key points and entity extraction, full sentiment/topic/credibility analysis via Gemini. 5 endpoints from $0.003 USDC on Base.
- [Intel API](https://intel.hugen.tokyo) - AI-synthesized token due diligence reports for crypto assets. Aggregates 4 GoPlus security checks + CoinGecko market data into risk-scored verdicts with red/green flags and recommendations. One call replaces 5+ separate security APIs. $0.50 USDC per call on Base.
- [Tick Aggregator API](https://tick.hugen.tokyo) - Multi-source aggregated FX Best Bid/Ask from 3 institutional liquidity providers. 62-88% tighter spreads than any single source. 15 pairs including EURUSD, USDJPY, GBPUSD, XAUUSD. Returns quality metadata (fresh sources, spread improvement vs single source). Commercial use permitted. $0.005 USDC per call on Base and Solana. [llms.txt](https://tick.hugen.tokyo/llms.txt)
- REST API with Auth Pricing - SIWE + dynamic pricing.
- [geo-gateway](https://nj4epne560.execute-api.us-west-2.amazonaws.com) - Pay-per-call Mapbox geospatial proxy for AI agents. 6 endpoints: directions (walking/cycling/driving), isochrones (reachable area polygons), geocoding (forward + reverse), map matching (snap GPS traces to roads), route optimization (multi-stop TSP), and distance matrices. Pre-payment validation so bad requests are never charged. $0.002–$0.0635 USDC per call on Base. [OpenAPI](https://nj4epne560.execute-api.us-west-2.amazonaws.com/openapi.json) | [Source](https://github.com/sun-jay-ea/geo-gateway)
- [PortsideLabs Places API](https://portsidelabs-x402-places-536698811508.us-west1.run.app) - Google Places API v1 proxy with x402 pay-per-request access. Exposes place detail lookup and full-text search via USDC micropayments on Base mainnet and Solana mainnet. $0.001 USDC per call.
- [PortsideLabs KoinChappie](https://portsidelabs-x402-koinchappie-536698811508.us-west1.run.app) - Crypto signals API with x402 pay-per-request. Returns bull and bear signals for the top 10 cryptocurrencies by market cap across 8 timeframes (1m–1D) using SMA(14). Single-coin lookup supports any CryptoCompare symbol. USDC micropayments on Base mainnet and Solana mainnet. $0.001 USDC per call.
- [CYBERA Compliance API](https://compliance-api-ruddy.vercel.app) - Crypto compliance suite for AI agents. VASP address identification (20,468 addresses, 29 chains), risk scoring (0-100 with signal detection), and sanctions/mixer screening (single + batch). Three endpoints at $0.01 USDC per call on Base. [Source](https://github.com/tedddb-ai/compliance-api) | [llms.txt](https://compliance-api-ruddy.vercel.app/llms.txt)
- [RugGuard](https://rugguard.redfleet.fr) - Pre-trade rug-check API for AI agents. 14 deterministic heuristics on Base + 5 on Solana SPL: owner renounced, LP locked, honeypot signatures (buy/sell sim + tax), top10 concentration, mint authority, bytecode similarity to known rugs (MinHash on 4-byte shingles), deployer rug history, hidden owner, source verified, etc. Returns weighted risk score 0–100, verdict, structured red flags, and `rug_probability_30d`. Dual-mode v1/v2 x402 wire format. $0.01 quick scan, $0.05 deep scan with per-heuristic audit trail, $0.005 explain. ([OpenAPI](https://rugguard.redfleet.fr/openapi.json) | [llms.txt](https://rugguard.redfleet.fr/llms.txt) | [x402scan](https://www.x402scan.com/server/88f6ecef-5668-4def-90a3-6984865f0e06))

- [Kerdos Market Intelligence](https://nonvisceral-eloisa-mousily.ngrok-free.dev) - AI market intelligence API for agents and traders. 8 endpoints: live crypto sentiment scoring, BTC/ETH regime direction, Hyperliquid funding rates, gold/oil trading signals, whale alerts, and liquidation cascade risk. $0.01-$0.05 USDC per call on Base.
- [Mercury402](https://mercury402.uk) - Pay-per-call U.S. Treasury and macro data API using x402. Agents access FRED indicators, yield curves, and GDP data with USDC micropayments on Base.
- [Product Reputation API](https://github.com/andichen0420/x402-reputation-api) — AI-powered product reputation intelligence from Reddit, HN & YouTube. Pay $0.03-$0.08 USDC per query for structured scores, dimensional analysis, and competitor comparisons. ([Live](https://x402-reputation-api-production.up.railway.app)) ([x402scan](https://www.x402scan.com/server/8ae848b3-ea71-4b2a-8ea1-fa6bec508ca5))
- [x402engine](https://x402engine.app) - Pay-per-call API gateway with 74 endpoints: 44 LLMs, image/video generation, crypto data, web search, code execution, TTS, travel, and IPFS. Multi-chain: USDC on Base, USDm on MegaETH, USDC on Solana. Discovery: [/.well-known/x402.json](https://x402engine.app/.well-known/x402.json) | [/.well-known/agent.json](https://x402engine.app/.well-known/agent.json). ([GitHub](https://github.com/agentc22/x402-engine)) | ([MCP](https://www.npmjs.com/packa

[TRUNCATED — view full content on GitHub]
