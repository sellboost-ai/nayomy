---
name: "mihaelamj/cupertino"
description: "Apple Documentation MCP Server. Search Apple developer docs, Swift Evolution proposals, and 600+ sample code projects with full-text search."
description_tr: "Apple Documentation MCP Server. Apple geliştirici dokümentasyonunu, Swift Evolution önerilerini ve 600+ örnek kod projesini tam metin araması ile arayın."
category: "Developer Tools"
repo: "mihaelamj/cupertino"
stars: 836
url: "https://github.com/mihaelamj/cupertino"
body_length: 26907
license: "MIT"
language: "Swift"
homepage: "https://cupertino.aleahim.com"
body_tr: |-
  # 🍎📚 Cupertino
  
  > 🕯️ *v1.2.1 sürümü 2026-05-23 tarihinde yayınlandı.* Bakım sürümü: mimari temizlik + DI / pluggability iyileştirmesi. v1.2.0'a göre sıfır şema farkı; v1.2.0 paketi v1.2.1 binary'si ile olduğu gibi çalışır (`cupertino setup` hala `cupertino-databases-v1.2.0.zip` indirir). Başlıklar: [Source Independence Day](https://github.com/mihaelamj/cupertino/issues/919) ulaşıldı (yeni bir content source eklemek artık yalnızca composition-root PR'ıdır); [strict-DI + standalone-portability epic](https://github.com/mihaelamj/cupertino/issues/893) kapatıldı (her Search-side producer foundation-only, `scripts/check-target-portability.sh` tarafından mekanik olarak doğrulanmıştır); `Distribution.DatabaseHealthCheck` strategy seam, Doctor'ın 3 kardeş per-DB bölümünü kapsar. Canlı dashboard <https://cupertino.aleahim.com/> adresinde. [v1.2.1 sürüm notlarına](https://github.com/mihaelamj/cupertino/releases/tag/v1.2.1) bakın.
  >
  > *v1.2.0 "ironclad" (2026-05-20) en son paket sürümüydü.* Arama kalitesi sürümü: kanonik arama sorgularında rank-1 doğruluğu Phase 1 corpus'unda %52'den %92'ye sıçradı, 110 eşleştirilmiş sorgu arasında sıfır regresyon, deprecation-pair corpus'unda 30 / 30 modern Swift kazanımı. `databaseVersion` `1.2.0`'dır: `cupertino setup` `cupertino-databases-v1.2.0.zip` indirir (690 MiB sıkıştırılmış, sha256 `097d6633…f47747`) **420 framework arasında 352,712 indeksli belge** taşır, `search.db` `user_version` 18, `packages.db` 5, `samples.db` 4, 13 kategori denetimi arasında **0 poison satırı**. Tam yazı `docs/release-writeup-v1.2.0.md` dosyasında. [v1.2.0 sürüm notlarına](https://github.com/mihaelamj/cupertino/releases/tag/v1.2.0) bakın.
  
  **Apple Dokümantasyon Crawler & MCP Sunucusu**
  
  Apple geliştirici dokümantasyonunu indeksleyen ve Model Context Protocol (MCP) üzerinden AI ajanlarına sunan Swift tabanlı bir araç.
  
  [![Swift 6.3+](https://img.shields.io/badge/Swift-6.3+-orange.svg)](https://swift.org)
  [![macOS 15+](https://img.shields.io/badge/macOS-15+-blue.svg)](https://www.apple.com/macos)
  [![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
  [![PulseMCP](https://img.shields.io/badge/PulseMCP-listed-blue)](https://www.pulsemcp.com/servers/mihaelamj-cupertino)
  [![LobeHub](https://img.shields.io/badge/LobeHub-listed-purple)](https://lobehub.com/mcp/mihaelamj-cupertino)
  
  ![Cupertino Demo](https://raw.githubusercontent.com/mihaelamj/cupertino/HEAD/docs/images/cupertino.gif)
  
  ## Cupertino Nedir?
  
  Cupertino, Apple platformları için yerel, yapılandırılmış, AI'ya hazır bir dokümantasyon sistemidir. Şunları yapar:
  
  - **İndeksler** Apple Developer dokümantasyonunu, Swift.org'u, Swift Evolution öneri tekliflerini, Human Interface Guidelines'ı, Apple Archive legacy rehberlerini ve Swift paket metadatasını
  - **İndeksler** her şeyi hızlı, aranabilir SQLite FTS5 veritabanına alan ağırlıklı BM25 (BM25F) sıralaması ve AST-çıkarılmış symbol sütunlarıyla
  - **Sunar** dokümantasyonu Model Context Protocol aracılığıyla Claude gibi AI ajanlarına
  - **Sağlar** 420 framework arasında 352.712+ dokümantasyon sayfasına çevrimdışı erişim (v1.2.0 paketi)
  
  ### Neden Bunu İnşa Ettik?
  
  - **Artık halüsinasyon yok**: AI ajanları doğru, güncel Apple API dokümantasyonunu alırlar
  - **Çevrimdışı geliştirme**: İnternet bağlantısı olmadan tam dokümantasyonla çalışın
  - **Belirleyici arama**: Aynı sorgu her zaman aynı sonuçları döndürür
  - **Yerel kontrol**: Dokümantasyonunuza sahip olun, veritabanını inceleyin, iş akışlarını otomatikleştirin
  - **AI-first tasarım**: MCP aracılığıyla AI ajan entegrasyonu için özel olarak inşa edilmiştir
  
  ## Hızlı Başlangıç
  
  > **Not:** Kaynaktan derlerken, komutlar `Packages` dizininden çalıştırılmalıdır. Tek komut kurulumu her yerden çalışır.
  
  ### Gereksinimler
  
  - macOS 15+ (Sequoia)
  - Tam v1.2.0 paketi için ~4,1 GB disk alanı (search.db ~2,87 GB, packages.db ~1,06 GB, samples.db ~187 MB; sıkıştırılmış indirme ~690 MiB)
  
  *Kaynaktan derleme ayrıca Swift 6.3+ ve Xcode 26+ gerektirir (bare `swift` değil `xcrun swift build` kullanın)*
  
  ### Kurulum
  
  **Tek komut kurulumu (önerilen):**
  
  ```bash
  bash <(curl -sSL https://raw.githubusercontent.com/mihaelamj/cupertino/main/install.sh)
  ```
  
  Bu, önceden derlenmiş, imzalı ve noterize evrensel bir binary indirir, `/usr/local/bin`'e kurar ve dokümantasyon veritabanlarını indirir.
  
  **Ya da Homebrew ile:**
  
  ```bash
  brew tap mihaelamj/tap
  brew install cupertino
  cupertino setup
  ```
  
  **Ya da kaynaktan derleyin:**
  
  ```bash
  git clone https://github.com/mihaelamj/cupertino.git
  cd cupertino
  
  # Makefile kullanarak (önerilen)
  make build                       # Release binary'si derle
  sudo make install                # /usr/local/bin'e kur
  
  # Ya da Swift Package Manager'ı doğrudan kullanın
  cd Packages
  swift build -c release
  sudo ln -sf "$(pwd)/.build/release/cupertino" /usr/local/bin/cupertino
  ```
  
  **Demo Video:** [YouTube'da İzle](https://youtu.be/B-mRdainTMA)
  
  ### Hızlı Referans
  
  ```bash
  # Hızlı Kurulum (Önerilen) - önceden derlenmiş veritabanlarını indir (~30 saniye)
  cupertino setup                      # Veritabanlarını GitHub'dan indir
  cupertino serve                      # MCP sunucusunu başlat
  
  # Alternatif: GitHub'dan derle (~45 dakika)
  cupertino save --remote              # Akış ve yerel olarak derle
  
  # Ya da dokümantasyonu kendiniz getirin
  cupertino fetch --type docs          # Apple Developer Dokümantasyonu
  cupertino fetch --type swift         # Swift.org dokümantasyonu
  cupertino fetch --type evolution     # Swift Evolution teklifleri
  cupertino fetch --type packages      # Swift paket metadatası + GitHub arşivleri
  cupertino fetch --type code          # Apple'dan örnek kod (kimlik doğrulaması gerekli)
  cupertino fetch --type samples       # GitHub'dan örnek kod (önerilen)
  cupertino fetch --type archive       # Apple Archive programlama rehberleri
  cupertino fetch --type hig           # Human Interface Guidelines
  cupertino fetch --type availability  # Platform kullanılabilirlik verileri
  cupertino fetch --type all           # Tüm türler paralel olarak
  
  # İndeksleri derle
  cupertino save                       # Dokümantasyon arama indeksi derle (yerel dosyalardan)
  cupertino save --remote              # GitHub'dan derle (yerel dosya gerekmez)
  cupertino save --samples                      # Örnek kodu arama için indeksle
  
  # Sunucuyu başlat
  cupertino                            # MCP sunucusunu başlat (varsayılan komut)
  cupertino serve                      # MCP sunucusunu başlat (açık)
  ```
  
  ### Anlık Kurulum (Önerilen)
  
  ```bash
  # GitHub'dan önceden derlenmiş veritabanlarını indir (~30 saniye)
  cupertino setup
  
  # MCP sunucusunu başlat
  cupertino serve
  ```
  
  > **Not:** `cupertino setup --force` artık geçersizdir (bayrak v1.2.0'da kaldırıldı). `cupertino setup` varsayılan olarak üzerine yazar; veritabanlar zaten yüklüyse indirmeyi atlamak için `--keep-existing` iletişim kurun.
  
  ### Alternatif: GitHub'dan Derle
  
  ```bash
  # Yerel olarak akış ve derle (~45 dakika)
  # Veritabanını kendiniz derlemek istiyorsanız bunu kullanın
  cupertino save --remote
  
  # MCP sunucusunu başlat
  cupertino serve
  ```
  
  ### Manuel Kurulum (Gelişmiş)
  
  ```bash
  # Apple dokümantasyonunu indir (~12+ gün ~404.000+ ham sayfa için, ~277.640'a indekslenmiş)
  # İstekler arasında varsayılan 0,05 saniye gecikmesi nedeniyle zaman alır
  cupertino fetch --type docs --max-pages 15000
  
  # Swift Evolution tekliflerini indir (~2-5 dakika)
  cupertino fetch --type evolution
  
  # GitHub'dan örnek kod indir (~4 dakika, 619 proje)
  cupertino fetch --type samples
  
  # Arama indeksi derle (~2-5 dakika)
  cupertino save
  ```
  
  ### Claude Desktop ile Kullanım
  
  1. **Claude Desktop'ı Yapılandır** - `~/Library/Application Support/Claude/claude_desktop_config.json` dosyasını düzenle:
  
  ```json
  {
    "mcpServers": {
      "cupertino": {
        "command": "/usr/local/bin/cupertino",
        "args": ["serve"]
      }
    }
  }
  ```
  
  > **Not:** Apple Silicon için Homebrew'de `/opt/homebrew/bin/cupertino` kullanın, Intel veya manuel kurulum için `/usr/local/bin/cupertino`. Yolunuzu bulmak için `which cupertino` çalıştırın.
  
  2. **Claude Desktop'ı Yeniden Başlat**
  
  3. **Claude'dan Apple API'leri hakkında sorun:**
     - "SwiftUI dokümantasyonunu ara"
     - "Swift Evolution teklifinin SE-0001 ne önerdiğini?"
     - "Kullanılabilir framework'leri listele"
  
  ### Claude Code ile Kullanım
  
  [Claude Code](https://code.claude.com/docs/en/overview) kullanıyorsanız, Cupertino'yu tek bir komutla MCP sunucusu olarak ekleyebilirsiniz:
  
  ```bash
  claude mcp add cupertino --scope user -- $(which cupertino)
  ```
  
  Bu, Cupertino'yu tüm projeleriniz için global olarak kaydeder. Claude Code'un Apple dokümantasyon aramasına otomatik olarak erişimi olacak.
  
  ### OpenAI Codex ile Kullanım
  
  [OpenAI Codex](https://github.com/openai/codex) kullanıyorsanız, Cupertino'yu şu şekilde ekleyin:
  
  ```bash
  codex mcp add cupertino -- $(which cupertino) serve --no-reap
  ```
  
  Ya da doğrudan `~/.codex/config.toml` dosyasına ekleyin:
  
  ```toml
  [mcp_servers.cupertino]
  command = "/opt/homebrew/bin/cupertino"  # Apple Silicon'da Homebrew
  # command = "/usr/local/bin/cupertino"   # Intel Mac veya manuel kurulum
  args = ["serve", "--no-reap"]
  ```
  
  > **Neden `--no-reap`?** Codex, her tool çağrısı başına yeni bir `cupertino serve` başlatır. `--no-reap` olmadan, her yeni örnek öncekini eski bir sibling olarak öldürür ve uçuştaki transport kapanır (`Transport closed` hatası her tool çağrısında — bkz #280). Claude Desktop / Cursor kullanıcıları varsayılanı tutarlar (reap açık) böylece MCP-host konfigürasyonu yeniden yüklemesi yetim sunucuları sızdırmaz.
  >
  > Eşdeğer env-var formu: `[mcp_servers.cupertino.env]` içinde `CUPERTINO_DISABLE_REAPER=1`.
  
  > **İpucu:** Kurulum yolunuzu bulmak için `which cupertino` çalıştırın.
  
  ### Cursor ile Kullanım
  
  Projenizde `.cursor/mcp.json` dosyasına (ya da global erişim için `~/.cursor/mcp.json`) ekleyin:
  
  ```json
  {
    "mcpServers": {
      "cupertino": {
        "command": "/opt/homebrew/bin/cupertino",
        "args": ["serve"]
      }
    }
  }
  ```
  
  ### VS Code ile Kullanım (GitHub Copilot)
  
  Çalışma alanınıza `.vscode/mcp.json` dosyasına ekleyin:
  
  ```json
  {
    "servers": {
      "cupertino": {
        "type": "stdio",
        "command": "/opt/homebrew/bin/cupertino",
        "args": ["serve"]
      }
    }
  }
  ```
  
  ### GitHub Copilot for Xcode ile Kullanım
  
  [GitHub Copilot for Xcode](https://github.com/github/CopilotForXcode), Agent Mode aracılığıyla MCP sunucularını destekler. Uygulamada **Tools** sekmesine → **MCP** alt sekmesine → **MCP Configuration** → **Edit Config** gidin veya doğrudan `~/.config/github-copilot/xcode/mcp.json` dosyasını düzenleyin:
  
  ```json
  {
    "servers": {
      "cupertino": {
        "type": "stdio",
        "command": "/opt/homebrew/bin/cupertino",
        "args": ["serve"]
      }
    }
  }
  ```
  
  ### Zed ile Kullanım
  
  Zed `settings.json` dosyanıza ekleyin:
  
  ```json
  {
    "context_servers": {
      "cupertino": {
        "command": "/opt/homebrew/bin/cupertino",
        "args": ["serve"]
      }
    }
  }
  ```
  
  ### Windsurf ile Kullanım
  
  `~/.codeium/windsurf/mcp_config.json` dosyasına ekleyin:
  
  ```json
  {
    "mcpServers": {
      "cupertino": {
        "command": "/opt/homebrew/bin/cupertino",
        "args": ["serve"]
      }
    }
  }
  ```
  
  ### opencode ile Kullanım
  
  `opencode.jsonc` dosyasına ekleyin:
  
  ```json
  {
    "mcp": {
      "cupertino": {
        "type": "local",
        "command": ["/opt/homebrew/bin/cupertino", "serve"]
      }
    }
  }
  ```
  
  > **Not:** Tüm örnekler `/opt/homebrew/bin/cupertino` (Apple Silicon'da Homebrew) kullanır. Intel Mac'ler veya manuel kurulumlar için `/usr/local/bin/cupertino` kullanın. Yolunuzu bulmak için `which cupertino` çalıştırın.
  
  ### Agent Skill Olarak Kullanım (Sunucu Gerekmez)
  
  Cupertino, MCP sunucusu çalıştırmadan durumsuz CLI skill olarak da kullanılabilir. Bu, [Agent Skills](https://agentskills.io) spesifikasyonunu destekleyen ajanlar için kullanışlıdır.
  
  **Ön Koşullar:**
  
  Cupertino'yu kurun ve veritabanlarını önceden indirin:
  ```bash
  # Homebrew'den veya kaynaktan kurun (yukarıdaki Kurulum bölümüne bakın)
  cupertino setup
  ```
  
  **Seçenek A: OpenSkills ile Kurun (Önerilen)**
  
  [OpenSkills](https://github.com/numman-ali/openskills), Claude Code, Cursor, Windsurf, Aider ve diğer AI kodlama ajanlarıyla çalışan evrensel bir skills yükleyicidir.
  
  ```bash
  # Cupertino skill'ini GitHub'dan kurun
  npx openskills install mihaelamj/cupertino
  
  # Senkronize etmek için güncelle AGENTS.md
  npx openskills sync
  ```
  
  Global kurulum için (tüm projelerde kullanılabilir):
  ```bash
  npx openskills install mihaelamj/cupertino --global
  ```
  
  Multi-ajan kurulumları için (`.agent/skills/` yerine `.claude/skills/` 'e kurar):
  ```bash
  npx openskills install mihaelamj/cupertino --universal
  ```
  
  **Seçenek B: Claude Code Plugin Olarak Kurun**
  
  Bir Claude Code oturumunun içinde, cupertino pazarını ekleyin:
  ```
  /plugin marketplace add mihaelamj/cupertino
  ```
  
  Ardından pazardan plugin'i etkinleştirin.
  
  **Seçenek C: Manuel Kurulum**
  
  Skill tanımını projenize veya global skills dizinine kopyalayın:
  ```bash
  # Bu repo'yu klonla
  git clone https://github.com/mihaelamj/cupertino.git
  
  # Tek bir proje için
  mkdir -p .claude/skills/cupertino
  cp cupertino/skills/cupertino/SKILL.md .claude/skills/cupertino/
  
  # Veya Claude Code ile global kullanım için
  mkdir -p ~/.claude/skills/cupertino
  cp cupertino/skills/cupertino/SKILL.md ~/.claude/skills/cupertino/
  ```
  
  **Nasıl Çalışır:**
  
  Skill, hiçbir sunucu süreci gerekmeden CLI'yi JSON çıktısıyla doğrudan kullanır:
  
  ```bash
  # Dokümantasyonu ara
  cupertino search "SwiftUI View" --format json
  
  # Kaynak tarafından filtrele
  cupertino search "NavigationStack" --source apple-docs --format json
  cupertino search "button styles" --source samples --format json
  
  # Belge oku
  cupertino read "apple-docs://swiftui/documentation_swiftui_view" --format json
  
  # Framework'leri listele
  cupertino list-frameworks --format json
  
  # Örnek projeleri listele
  cupertino list-samples --framework swiftui --format json
  ```
  
  Tüm komutlar ajanların ayrıştırabileceği yapılandırılmış çıktı için `--format json` destekler.
  
  **Kullanılabilir Kaynaklar:**
  - `apple-docs` - Resmi Apple dokümantasyonu (~352.712 sayfası v1.2.0'da indekslenmiş)
  - `samples` - Apple örnek kod projeleri
  - `hig` - Human Interface Guidelines
  - `swift-evolution` - Swift Evolution teklifleri
  - `swift-org` - Swift.org dokümantasyonu
  - `swift-book` - The Swift Programming Language kitabı
  - `apple-archive` - Legacy programlama rehberleri
  - `packages` - Swift paket dokümantasyonu
  
  ### Nedeni Alırsınız
  
  Yapılandırıldıktan sonra, Claude Desktop yerel dokümantasyonunuzu arayabilir:
  
  **Arama Sonuçları Örneği:**
  ```
  # "SwiftUI" için Arama Sonuçları
  
  **20** sonuç bulundu:
  
  ## 1. NSHostingView | Apple Developer Dokümantasyonu
  - **Framework:** `swiftui`
  - **URI:** `apple-docs://swiftui/documentation_swiftui_nshostingview`
  - **Puan:** 1.82
  
  Bir SwiftUI view hiyerarşisini barındıran bir AppKit view'i.
  
  ## 2. UIHostingController | Apple Developer Dokümantasyonu
  - **Framework:** `swiftui`
  - **URI:** `apple-docs://swiftui/documentation_swiftui_uihostingcontroller`
  
  Bir SwiftUI view hiyerarşisini yöneten bir UIKit view controller'ı.
  ...
  ```
  
  **Framework İstatistikleri:**
  | Framework | Belgeler |
  |-----------|----------:|
  | Kernel | 39.396 |
  | Matter | 24.320 |
  | Swift | 17.466 |
  | AppKit | 12.443 |
  | Foundation | 12.423 |
  | UIKit | 11.158 |
  | Accelerate | 9.114 |
  | SwiftUI | 7.062 |
  | ... | ... |
  | **420 Framework** | **352.712** |
  
  ## Temel Özellikler
  
  ### 1. Multi-Kaynak Dokümantasyon Getirme
  
  - **Apple Developer Dokümantasyonu** (~v1.2.0 paketinde 352.712 indeksli sayfa)
    - WKWebView aracılığıyla JavaScript farkında rendering
    - HTML'den Markdown'a dönüştürme
    - Akıllı değişiklik algılaması
  
  - **Swift Evolution Teklifleri** (~400 teklif)
    - GitHub tabanlı getirme
    - Markdown format
    - Hızlı indirmeler
  
  - **Swift.org Dokümantasyonu**
    - Resmi Swift dil doğruları
    - Temiz HTML yapısı
  
  - **Swift Paket Metadatası**
    - Öncelikli paket kataloğları
    - README dosyaları
  
  - **Apple Örnek Kodu** (619 proje)
    - İki getirme yöntemi: GitHub (önerilen) veya Apple web sitesi
    - Tüm kaynak dosyaları arasında tam metin araması
    - 18.000+ indeksli Swift dosyası
  
  - **Apple Archive Legacy Rehberleri** (~75 sayfa)
    - 2016 öncesi programlama rehberleri (Core Animation, Quartz 2D, Core Text, vb.)
    - Modern doğrularda olmayan derin kavramsal bilgi
    - Aramadan hariç tutulmuş (kullanmak için `--include-archive` kullanın)
  
  - **Human Interface Guidelines**
    - Apple'ın tüm platformlar için resmi tasarım rehberleri
    - iOS, macOS, watchOS, visionOS ve tvOS'u kapsar
    - Tasarım desenleri, bileşenler, temel kavramlar ve en iyi uygulamalar
  
  ### 2. Paketlenmiş Kaynaklar
  
  Cupertino, doğrudan uygulamaya paketlenmiş önceden indekslenmiş katalog verilerini içerir:
  
  - **Swift Packages Kataloğu** (183 Apple resmi paketi tam kaynak + `packages.db`'de metaveri; önceki 9.699 girişli gömülü URL listesi #194'te kaldırıldı — `packages.db` artık kanonik corpus, `cupertino setup` aracılığıyla sevk edilir)
    - Swift Package Index + GitHub API'den kuratörlü
    - Paket metadatası, yıldızlar, lisanslar, açıklamalar, dağıtım hedefi platformları, **ve** yazılı `swift-tools-version` (#225) içerir
    - `cupertino fetch --type packages` ardından `cupertino save --packages` çalıştırılarak güncellendi
  
  - **Örnek Kod Kataloğu** (619 giriş)
    - Apple'ın resmi örnek kod projeleri
    - Başlıklar, açıklamalar, framework'ler, indirme URL'lerini içerir
    - Apple'ın kataloğu sık sık değişmediği için paketlenmiş
  
  - **Öncelikli Paketler** (36 küratörlü paket)
    - Apple resmi paketleri (31) + gerekli ekosistem paketleri (5)
    - Hızlı erişim için yüksek öncelikli Swift paketleri
  
  Bu kataloglar `cupertino save` sırasında indekslenmiş ve çok saatlik indirmeler gerektirmeden anlık arama sağlar. İsterseniz `cupertino fetch` aracılığıyla paket README'leri ve örnek kodu ayrı olarak getirtebilirsiniz.
  
  ### 3. Tam Metin Arama Motoru
  
  - **Teknoloji**: SQLite FTS5'i 9 sütunlu indeks (`uri`, `source`, `framework`, `language`, `title`, `content`, `summary`, `symbols`, `symbol_components`) üzerinde alan ağırlıklı BM25 (BM25F, Robertson/Zaragoza/Taylor 2004) ile. Başlık 10×, AST-çıkarılmış symbols 5×, summary 3×, framework 2×, CamelCase bölme symbol bileşenleri 1,5×.
  - **AST farkında**: Bir Swift kaynak çıkarıcı, gömülü her kod bloğundan ve sayfa beyanından tanımlayıcıları çıkarır, bunları `symbols` sütununa denormalize eder ve BM25F'ye besler, böylece `Task` gibi bir sorgu Swift `Task` struct'ını "task" sözcüğünün prose söylemleri üzerine yerleştirir.
  - **smart-query**: `cupertino search` (ve alttaki `Search.SmartQuery` API'si) soruyu her kaynakta paralel olarak hayran hali ve reciprocal rank fusion (RRF, k=60, Cormack/Clarke/Büttcher 2009) aracılığıyla per-kaynağı sıralamaları birleştirir. Tek ölü kaynak tüm sorguyu asla aşağı çekmez.
  - **Özellikler**:
    - Porter stemming (örneğin "çalıştırmak" "çalış" ile eşleşir)
    - Framework filtrelemesi
    - Platform kullanılabilirlik filtrelemesi (iOS/macOS versiyonu)
    - Snippet oluşturması
    - Alt-100ms sorgu performansı
  - **Boyut**: Tam dokümantasyon için ~2,87 GB search.db + ~1,06 GB packages.db + ~187 MB samples.db (352.712 belge 420 framework arasında, v1.2.0 paketi)
  - **Depolama**: Veritabanı yerel dosya sisteminde olmalıdır - SQLite ağ sürücülerinde (NFS/SMB) güvenilir şekilde çalışmaz
  
  ### 4. Model Context Protocol Sunucusu
  
  - **Kaynaklar**: Dokümantasyon sayfalarına doğrudan erişim
    - `apple-docs://{framework}/{page}`
    - `swift-evolution://{proposal-id}`
    - `hig://{category}/{page}`
  - **Araçlar**: AI ajanları için arama ve okuma yetenekleri
    - **Dokümantasyon Araçları** (`cupertino save` gerektirir):
      - `search` - **Birleştirilmiş tam metin araması** her indeksli kaynak arasında: Apple Developer Dokümantasyonu, örnek kod, Human Interface Guidelines, Apple Archive, Swift Evolution, swift.org, Swift Kitabı ve Swift paket metadatası. [#239](https://github.com/mihaelamj/cupertino/issues/239) öncesi per-kaynak araçlarını (`search_docs`, `search_hig`, `search_samples`, `search_all`) değiştirir.
        - Parametreler: `query` (gerekli), `source` (isteğe bağlı: `all`, `apple-docs`, `samples`, `hig`, `apple-archive`, `swift-evolution`, `swift-org`, `swift-book`, `packages`), `framework`, `language`, `include_archive`, `limit`, `min_ios`, `min_macos`, `min_tvos`, `min_watchos`, `min_visionos`, `min_swift` (tüm isteğe bağlı)
        - Platform filtrelemesi (#226, #732): 5 `min_*` parametresi, platform kullanılabilirlik metadatası taşıyan her kaynağa uygulanır (apple-docs, apple-archive, packages, swift-evolution, swift-org, swift-book, samples). Multi-platform değerleri AND-combine (örn. `min_ios=18.0` + `min_macos=14
---

# 🍎📚 Cupertino

**Apple documentation CLI for humans and MCP server for AI agents.**

Cupertino is a CLI for human developers and an MCP server for AI agents. Both surfaces use the same local catalog of Apple documentation, Swift packages, sample code, Human Interface Guidelines, Swift Evolution proposals, and Swift.org pages.

[![Swift 6.3+](https://img.shields.io/badge/Swift-6.3+-orange.svg)](https://swift.org)
[![macOS 15+](https://img.shields.io/badge/macOS-15+-blue.svg)](https://www.apple.com/macos)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![PulseMCP](https://img.shields.io/badge/PulseMCP-listed-blue)](https://www.pulsemcp.com/servers/mihaelamj-cupertino)
[![LobeHub](https://img.shields.io/badge/LobeHub-listed-purple)](https://lobehub.com/mcp/mihaelamj-cupertino)
[![X](https://img.shields.io/badge/X-@cupertinomcp-black?logo=x)](https://x.com/cupertinomcp)

![Cupertino Demo](https://raw.githubusercontent.com/mihaelamj/cupertino/HEAD/docs/images/cupertino.gif)

> **Latest: v1.4.0** (2026-06-21): refreshed database bundle. A full re-crawl + clean rebuild grew the Apple documentation slice to **363,562 documents / 308,118 symbols across 417 frameworks**, now including post-WWDC26 iOS 27 content, alongside the HIG, archive, Swift Evolution, Swift.org, Swift Book, package, and sample-code DBs (8 per-source databases, read-only rollback mode). [Release notes](https://github.com/mihaelamj/cupertino/releases/tag/v1.4.0) · [CHANGELOG](CHANGELOG.md) · [Roadmap](#roadmap) · live dashboard at <https://cupertino.aleahim.com/>. Follow updates on X: [@cupertinomcp](https://x.com/cupertinomcp).

> If Cupertino is useful to your work with Apple docs or AI agents, consider [sponsoring its development](https://github.com/sponsors/mihaelamj). Sponsorship helps keep releases, documentation, and the Apple/Linux tooling around it moving.

## What is Cupertino?

Cupertino is a local, structured documentation system for Apple platforms. It:

- **Crawls** Apple Developer documentation, Swift.org, Swift Evolution proposals, Human Interface Guidelines, Apple Archive legacy guides, and Swift package metadata
- **Indexes** everything into fast, searchable SQLite FTS5 databases with field-weighted BM25 (BM25F) ranking and AST-extracted symbol columns
- **Runs** as a terminal CLI for developers who want fast local `search`, `read`, `doctor`, and `setup` commands
- **Serves** the same corpus to AI agents like Claude, ChatGPT, Codex, Cursor, and Copilot via the Model Context Protocol
- **Provides** offline access to 363,562 Apple documentation pages / 308,118 Apple-doc symbols across 417 frameworks, plus the HIG, archive, Swift Evolution, Swift.org, Swift Book, package, and sample-code slices (v1.4.0 bundle)

Why build this:

- **No more hallucinations**: AI agents get accurate, up-to-date Apple API documentation
- **Offline development**: work with full documentation without internet access
- **Deterministic search**: the same query always returns the same results
- **Local control**: own your documentation, inspect the database, script workflows
- **Dual-consumer design**: use it directly at the terminal or wire it into an MCP-capable AI client

## Installation

Requires **macOS 15+ (Sequoia)** and ~4.2 GB free disk for the full v1.4.0 bundle (compressed download ~876 MB). Building from source additionally needs Swift 6.3+ and Xcode 26+ (use `xcrun swift build`, not bare `swift`).

**Homebrew (recommended):** installs the signed, notarized universal binary and lets you upgrade or uninstall it with `brew`:

```bash
brew tap mihaelamj/tap
brew install cupertino
cupertino setup            # download the pre-built databases
```

**One-command install (alternative):** downloads the binary to `/usr/local/bin` and fetches the databases in one step:

```bash
bash <(curl -sSL https://raw.githubusercontent.com/mihaelamj/cupertino/main/install.sh)
```

**Build from source:**

```bash
git clone https://github.com/mihaelamj/cupertino.git
cd cupertino
make build                 # release binary (or: cd Packages && swift build -c release)
sudo make install          # install to /usr/local/bin
cupertino setup            # download the pre-built databases
```

> The Homebrew path on Apple Silicon installs to `/opt/homebrew/bin/cupertino`; Intel and manual installs use `/usr/local/bin/cupertino`. Run `which cupertino` to confirm your path. See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for distribution and CI/CD notes.

## Quick start

```bash
cupertino setup                                  # download pre-built databases (~30s)
cupertino search "NavigationStack" --limit 5     # search from the terminal
cupertino read "apple-docs://swiftui/navigationstack" --source apple-docs
cupertino doctor                                 # check local database health
cupertino serve                                  # start the MCP server (also the default command)
```

Prefer to build the index yourself instead of downloading it? `cupertino save --remote` streams the corpus from GitHub and rebuilds locally, and `cupertino fetch --source <name>` crawls a single source from the original site. See [docs/commands/](docs/commands/) for every command, flag, and the slower self-hosted paths.

### Two surfaces, one catalog

A terminal search prints a human-friendly result with scores and follow-up commands:

```text
$ cupertino search "NavigationStack" --format text --limit 2
Question: NavigationStack
Searched: apple-docs, samples, swift-evolution, swift-org, swift-book, packages

======================================================================
[1] NavigationStack  •  source: apple-docs  •  score: 0.0324
    apple-docs://swiftui/navigationstack
----------------------------------------------------------------------
A view that displays a root view and enables navigation to additional views.

▶ Read full: cupertino read "apple-docs://swiftui/navigationstack" --source apple-docs

💡 Narrow with --source <name>: apple-docs, samples, hig, apple-archive, swift-evolution, swift-org, swift-book, packages
💡 Filter by platform: --platform iOS --min-version 16.0  (or macOS / tvOS / watchOS / visionOS)
```

The same query over MCP returns a structured tool result an AI client can read, cite, and follow with `read_document`:

```json
{
  "name": "search",
  "arguments": { "query": "NavigationStack", "source": "apple-docs", "limit": 2 }
}
```

**Demo:** [Watch on YouTube](https://youtu.be/B-mRdainTMA).

### Use with AI agents

[Claude Code](https://code.claude.com/docs/en/overview) registers Cupertino globally with one command:

```bash
claude mcp add cupertino --scope user -- $(which cupertino)
```

Claude Desktop, OpenAI Codex, Cursor, VS Code (Copilot), GitHub Copilot for Xcode, Zed, Windsurf, and opencode are all covered with copy-paste config in **[docs/mcp-clients.md](docs/mcp-clients.md)**. Cupertino can also run as a stateless CLI **Agent Skill** with no server: see **[docs/agent-skill.md](docs/agent-skill.md)**.

### What you get

| Framework | Documents |
|-----------|----------:|
| Kernel | 39,396 |
| Matter | 24,320 |
| Swift | 17,466 |
| AppKit | 12,443 |
| Foundation | 12,423 |
| UIKit | 11,158 |
| Accelerate | 9,114 |
| SwiftUI | 7,062 |
| ... | ... |
| **417 frameworks** | **363,562** |

## Core features

### Multi-source documentation

- **Apple Developer Documentation** (~363,562 indexed pages): JavaScript-aware rendering via WKWebView, HTML-to-Markdown conversion, smart change detection
- **Swift Evolution** (~429 proposals) and **Swift.org** (~501 pages): GitHub- and site-based fetching in Markdown
- **Swift package metadata**: `packages.db` ships 185 packages with full source, stars, licenses, deployment-target platforms, and authored `swift-tools-version`
- **Apple Sample Code** (619 projects, 18,000+ indexed Swift files): fetched from Apple's CDN or the GitHub mirror, full-text searchable
- **Apple Archive legacy guides** (~368 pages in v1.4.0): pre-2016 conceptual docs (Core Animation, Quartz 2D, Core Text); included in default fan-out with a lower rank weight, or searchable alone with `--source apple-archive`
- **Human Interface Guidelines**: Apple's design guidelines across iOS, macOS, watchOS, visionOS, and tvOS

### Full-text search engines

- **BM25F ranking**: SQLite FTS5 with field-weighted BM25 (Robertson/Zaragoza/Taylor 2004) over a 9-column index (`uri`, `source`, `framework`, `language`, `title`, `content`, `summary`, `symbols`, `symbol_components`). Title 10×, AST-extracted symbols 5×, summary 3×, framework 2×, CamelCase-split components 1.5×.
- **AST-aware**: a Swift extractor pulls identifiers from every embedded code block and the page declaration into a `symbols` column, so a query like `Task` ranks the Swift `Task` struct above prose mentions of "task".
- **smart-query**: `cupertino search` (and the `Search.SmartQuery` API) fans the question across every source in parallel and fuses per-source rankings via reciprocal rank fusion (RRF, k=60, Cormack/Clarke/Büttcher 2009); one dead source never takes the whole query down.
- Porter stemming, framework + platform-availability filtering, snippet generation, sub-100 ms queries.
- Databases must live on a local filesystem (SQLite is unreliable on NFS/SMB).

### Model Context Protocol server

- **Resources**: direct page access via `apple-docs://{framework}/{page}`, `swift-evolution://{proposal-id}`, `hig://{category}/{page}`
- **`search`**: unified full-text search across every indexed source. Parameters: `query` (required), `source`, `framework`, `language`, `include_archive`, `limit`, and the `min_ios`/`min_macos`/`min_tvos`/`min_watchos`/`min_visionos`/`min_swift` platform filters (AND-combined; malformed values are rejected at the boundary with a clear error frame). Replaces the pre-[#239](https://github.com/mihaelamj/cupertino/issues/239) per-source tools.
- **`list_frameworks`**, **`list_documents`**, **`list_children`**, **`read_document`** (`format`: `json` for agents, `markdown` for humans)
- **Sample-code tools**: `list_samples`, `read_sample`, `read_sample_file`; pass `format=json` for typed project/file payloads
- **AST-powered symbol tools** ([#81](https://github.com/mihaelamj/cupertino/issues/81)): `search_symbols`, `search_property_wrappers`, `search_concurrency`, `search_conformances`, `search_generics`, `get_inheritance`; pass `format=json` for typed symbol rows and title-bearing inheritance trees
- **Desktop boundary**: desktop UI code consumes these backend/tool contracts. It must not open SQLite databases directly or duplicate Cupertino's read engine.

See **[docs/tools/](docs/tools/)** for per-tool documentation.

### Intelligent crawling

Resumable from saved state, change-detection to skip unchanged pages, a respectful 0.05 s default delay (configurable), automatic URL-queue deduplication, and priority queues so important content is fetched first.

## How it works

Cupertino uses an **[ExtremePackaging](https://aleahim.com/blog/extreme-packaging/)** architecture: 48 in-tree strict-producer SPM targets with explicit import contracts, plus the external `CupertinoDataEngine` package. See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for the full breakdown and [`docs/package-import-contract.md`](docs/package-import-contract.md) for the strict per-target import rules.

```mermaid
flowchart TB
  Foundation["Foundation tier<br/>SharedConstants · LoggingModels · MCPCore · MCPSharedTools · Resources"]
  Infrastructure["Infrastructure<br/>ASTIndexer · Diagnostics · Logging"]
  Producers["Strict producers<br/>Crawler · Core · Search · SampleIndex · Services<br/>AppleConstraintsKit · Availability · Cleanup · more"]
  Operations["Operation packs<br/>Distribution setup · Diagnostics doctor · Indexer save · Ingest fetch"]
  MCP["MCP layer<br/>MCPSupport · MCPClient · SearchToolProvider"]
  FrontDoors["Front doors<br/>CLI cupertino · TUI cupertino-tui"]
  External["External packages<br/>CupertinoDataKit · CupertinoDataEngine<br/>SwiftMCPCore · SwiftMCPClient"]

  Foundation --> Infrastructure
  Foundation --> Producers
  Producers --> Operations
  Producers --> MCP
  Operations --> FrontDoors
  MCP --> FrontDoors
  External --> Producers
  External --> MCP
```

Data flows through three distinct phases:

```mermaid
flowchart LR
  Fetch["Fetch<br/>cupertino fetch --source apple-docs"]
  Raw["Raw corpus<br/>DocC render JSON, Markdown,<br/>sample archives, package sources"]
  Save["Save<br/>cupertino save --all"]
  Bundle["v1.4.0 catalog bundle<br/>apple-documentation.db · hig.db · apple-archive.db<br/>swift-evolution.db · swift-org.db · swift-book.db<br/>apple-sample-code.db · packages.db"]
  Services["Read services<br/>search · read · list · semantic tools"]
  CLI["Terminal CLI<br/>human-readable text / JSON / markdown"]
  MCP["MCP server<br/>typed tool responses over stdio"]
  Agents["AI agents<br/>Claude · Codex · Cursor · Copilot · more"]

  Fetch --> Raw --> Save --> Bundle --> Services
  Services --> CLI
  Services --> MCP --> Agents
```

Key design principles: Swift 6.3 with 100% strict concurrency checking, value semantics and `Sendable` by default, actor isolation (`@MainActor` for WKWebView), explicit dependency injection with no singletons, and a hard separation of Crawling → Indexing → Serving.

### Published packages

Cupertino factors reusable, independently-versioned Swift packages out of the monorepo. Each is its own public repository and is consumed by tag:

| Package | Repo | What it is |
|---|---|---|
| **SwiftMCPCore** | [mihaelamj/SwiftMCPCore](https://github.com/mihaelamj/SwiftMCPCore) | Neutral MCP wire types (the JSON-RPC + protocol value types). Not cupertino-specific; a general MCP building block. |
| **SwiftMCPClient** | [mihaelamj/SwiftMCPClient](https://github.com/mihaelamj/SwiftMCPClient) | Neutral, transport-injectable MCP client (`Client.MCP` seam, `MCPClient` actor, subprocess transport). Depends on SwiftMCPCore. |
| **CupertinoDataKit** | [mihaelamj/CupertinoDataKit](https://github.com/mihaelamj/CupertinoDataKit) | Cupertino's public **read contract**: documentation/source reading, document browsing, symbol/code-intelligence reading, and sample-code reading protocols plus every value type they return. Protocols + value types only, zero implementation; cupertino's engine conforms server-side, and an embedded/in-process reader (e.g. an iOS app) conforms a different implementation. Cupertino's foundation tier re-exports it (`@_exported import CupertinoDataKit`). |
| **CupertinoDataEngine** | [mihaelamj/CupertinoDataEngine](https://github.com/mihaelamj/CupertinoDataEngine) | Cupertino's embedded **read-only backend facade** for app clients. The engine itself conforms to the public read/browse contracts and fans out across configured source, sample, and package readers. The current v0.2.6 slice keeps the opaque `Corpus` handle and aligns current-corpus opening with release bundles: sample code is opened through the sample reader, and packages stay on `packages.db`. UI code must not know the storage files exist. |

See the current [CupertinoDataEngine wiring diagram](docs/architecture/cupertino-data-engine-wiring.html) for the boundary between `CupertinoDataEngine`, in-tree `CupertinoComposition`, and downstream app clients. Mobile catalog installation is documented in [docs/design/mobile-catalog-delivery.md](docs/design/mobile-catalog-delivery.md), including app storage and the `CatalogStore` contract.

```mermaid
flowchart LR
  subgraph Apps["Downstream app clients"]
    Desktop["macOS / Linux desktop UI<br/>SwiftUI · AppKit · Qt"]
    Mobile["iPhone / iPad UI<br/>UIKit · SwiftUI"]
  end

  Backend["App backend interface<br/>CupertinoDataKit contracts"]
  Boundary["Contract boundary<br/>storage hidden from UI"]
  Engine["CupertinoDataEngine<br/>opaque Corpus handle"]
  Composition["CupertinoComposition<br/>cupertino-owned production wiring"]
  Internals["Cupertino internals<br/>source, sample, package readers<br/>schema checks, storage filenames"]
  CatalogStore["DownloadedCatalogStore<br/>free mobile catalog download"]
  AppSupport["Application Support/Catalogs<br/>not Documents, excluded from backup"]

  Desktop --> Backend
  Mobile --> Backend
  Backend --> Boundary --> Engine
  Composition --> Engine
  Engine --> Internals
  Mobile --> CatalogStore --> AppSupport --> Engine
  Boundary -.-> Internals
```

## Roadmap

The canonical living roadmap is [#183](https://github.com/mihaelamj/cupertino/issues/183); the diagram below tracks epic progress at a glance.

Status legend:

```mermaid
flowchart LR
  done["Done"]:::done
  review["Review"]:::review
  active["Active"]:::active
  next["Next"]:::next
  partial["Partial"]:::partial
  todo["Todo"]:::todo
  classDef done    fill:#34C759,color:#FFFFFF
  classDef review  fill:#30B0C7,color:#FFFFFF
  classDef active  fill:#007AFF,color:#FFFFFF
  classDef next    fill:#5856D6,color:#FFFFFF
  classDef partial fill:#FF9500,color:#FFFFFF
  classDef todo    fill:#8E8E93,color:#FFFFFF
```

Epic progress:

```mermaid
flowchart TB
  subgraph Active["Active"]
    direction TB
    E1242["#1242 critical path"]:::active ~~~ E1262["#1262 desktop backend surface"]:::active ~~~ E1270["#1270 pre-UI readiness gate"]:::active ~~~ E1221["#1221 recrawl and resume"]:::active
  end

  subgraph Partial["Partial"]
    direction TB
    E1261["#1261 data engine extraction (opaque corpus shipped)"]:::partial ~~~ E1036["#1036 per-source DB split (#1061 left)"]:::partial ~~~ E191["#191 search quality and FTS"]:::partial
  end

  subgraph Planned["Planned"]
    direction TB
    E1228["#1228 semantic and vector search"]:::todo ~~~ E1223["#1223 declarative pluggability"]:::todo ~~~ E1222["#1222 Linux port"]:::todo ~~~ E769["#769 layer separation"]:::todo ~~~ E268["#268 MCP capability expansion"]:::todo ~~~ E266["#266 availability annotation v2"]:::todo ~~~ E190["#190 source expansion"]:::todo ~~~ E189["#189 TUI internal tracker"]:::todo
  end

  subgraph Closed["Closed"]
    direction TB
    E1227["#1227 distribution and discoverability"]:::done ~~~ E1226["#1226 docs and DocC"]:::done ~~~ E1225["#1225 diagnostics and logging"]:::done ~~~ E1224["#1224 CLI ergonomics"]:::done ~~~ E1220["#1220 v1.3.x bug sweep"]:::done ~~~ E943["#943 query batteries"]:::done ~~~ E919["#919 source and DB pluggability"]:::done ~~~ E893["#893 producer-backend split"]:::done ~~~ E673["#673 v1.2.x ironclad"]:::done ~~~ E503["#503 package-import purification"]:::done ~~~ E495["#495 GoF protocol DI"]:::done ~~~ E381["#381 dependency injection by default"]:::done ~~~ E251["#251 unify sources and databases"]:::done
  end

  Active ~~~ Partial ~~~ Planned ~~~ Closed
  classDef done    fill:#34C759,color:#FFFFFF
  classDef review  fill:#30B0C7,color:#FFFFFF
  classDef active  fill:#007AFF,color:#FFFFFF
  classDef next    fill:#5856D6,color:#FFFFFF
  classDef partial fill:#FF9500,color:#FFFFFF
  classDef todo    fill:#8E8E93,color:#FFFFFF
```

Pre-UI readiness gate:

```mermaid
flowchart TD
  release["#1268 current read surfaces green on main"]:::done
  source["CupertinoDataEngine v0.2.2 source-corpus reader"]:::done
  samples["v0.2.3 sample-reader construction"]:::done
  packages["v0.2.3 package-reader construction"]:::done
  bundle["v0.2.6 opaque release-corpus layout"]:::done
  ios["iOS build proof for complete closure"]:::done
  catalog["CatalogStoreAPI supplies opaque corpus handles"]:::done
  embedded["Live LocalEmbeddedBackend real-corpus smoke"]:::done
  smoke["#1269 repeatable release-corpus smoke"]:::done
  stores["Mobile catalog install via CatalogStore"]:::next
  ui["Begin native UI showcase work"]:::todo

  release --> source --> samples --> packages --> bundle --> ios --> catalog --> embedded --> smoke --> stores --> ui
  classDef done    fill:#34C759,color:#FFFFFF
  classDef next    fill:#5856D6,color:#FFFFFF
  classDef todo    fill:#8E8E93,color:#FFFFFF
```

## Performance

| Operation | Time | Size |
|---|---|---|
| `cupertino setup` (download pre-built bundle) | ~30 s | ~876 MB download, ~4.2 GB on disk |
| Build CLI | 10–15 s | 4.3 MB |
| Search query | <100 ms | n/a |
| Swift Evolution fetch | 2–5 min | 429 proposals |
| Swift.org fetch | 5–10 min | 501 pages |
| Build the full index from local JSON (`cupertino save --all`) | ~12 h | ~2.8 GB `apple-documentation.db` + per-source siblings |
| Full crawl of Apple docs from source (`cupertino fetch`) | ~12 days | ~404,000 raw pages → 363,562 indexed |

The full crawl is slow by design: with the 0.05 s default delay, ~404,000 pages cost ~5.6 hours in delay *alone*, and WKWebView rendering, parsing, and saving per page dominate the rest, pushing wall-clock to ~12 days at depth 21+. This is a one-time operation, and incremental updates skip unchanged pages. Almost everyone should run `cupertino setup` instead and get the same corpus in seconds.

## Development

```bash
make help                   # all available commands
make build                  # build release binaries
sudo make install           # install to /usr/local/bin
make test                   # run all tests
make test-unit              # fast unit tests only
make test-integration       # all tests (includes network calls)
make format                 # SwiftFormat
make lint                   # SwiftLint
```

**Tests:** the current full package suite reports 3,122 runtime tests across 501 suites from 351 Swift test files; parameterized `@Test(arguments:)` cases expand at runtime. Built on Swift Testing (`@Test`, `@Suite`, `#expect`) with `withDependencies` for injection, spanning unit tests, integration tests (real WKWebView against real Apple docs), and formatter tests.

**Logging:** structured `os.log` under the `com.cupertino.cli` subsystem (categories: crawler, mcp, search, cli, transport, evolution, samples, package-downloader, archive, hig).

```bash
log show --predicate 'subsystem == "com.cupertino.cli"' --last 1h
log stream --predicate 'subsystem == "com.cupertino.cli"'
```

> MCP JSON-RPC wire traffic goes to **stderr**, not `os.log`, because stdout carries the protocol itself. Capture it with `cupertino serve 2>/tmp/cupertino-mcp.log` or your client's server-output panel. MCP lifecycle and diagnostic messages still log to `os.log` under the `mcp` category.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full build, test, and release workflow.

## Documentation

- **[CONTRIBUTING.md](CONTRIBUTING.md)**: build, test, contribute, and release workflow
- **[docs/PRINCIPLES.md](docs/PRINCIPLES.md)**: engineering principles (lossless URIs, no content lost at the door, 10x scale headroom)
- **[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)**: technical deep-dives (concurrency, MCP, WKWebView testing)
- **[docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)**: Homebrew distribution and CI/CD setup
- **[docs/release/release-corpus-smoke.md](docs/release/release-corpus-smoke.md)**: on-demand release-corpus smoke gate for repo-built binaries
- **[docs/mcp-clients.md](docs/mcp-clients.md)**: per-client MCP setup (Claude, Codex, Cursor, VS Code, Zed, Windsurf, opencode, and more)
- **[docs/agent-skill.md](docs/agent-skill.md)**: use Cupertino as a stateless CLI Agent Skill (no server)
- **[docs/commands/](docs/commands/)**: command-specific documentation (fetch, save, serve, search, doctor, and more)
- **[docs/tools/](docs/tools/)**: MCP-tool-specific documentation
- **[docs/roadmap-maintenance-protocol.md](docs/roadmap-maintenance-protocol.md)**: maintainer roadmap update protocol

## Project status

**Released: v1.4.0** (2026-06-21): a refreshed database bundle. A full re-crawl + clean rebuild grew the Apple documentation slice to 363,562 documents / 308,118 symbols (417 frameworks) and added post-WWDC26 iOS 27 content; the placeholder-stub rot is gone (every docs database now has a `docs_structured == docs_fts` population ratio of 1.000). The 8 per-source databases (introduced in v1.3.0) ship in rollback journal mode, so each opens read-only without an `-shm` sidecar and no query / read / serve connection can write or delete rows ([#1194](https://github.com/mihaelamj/cupertino/issues/1194)). `databaseVersion` is `1.4.0`; `cupertino setup` downloads `cupertino-databases-v1.4.0.zip` (876 MB) carrying 363,562 documents / 308,118 symbols in `apple-documentation.db` (2.7 GB, `user_version` 18), plus `packages.db` (1.2 GB, 185 packages), `apple-sample-code.db` (189 MB), and the HIG / archive / evolution / org / book databases.

**Previously:** v1.2.1 (2026-05-23, maintenance + [Source Independence Day](https://github.com/mihaelamj/cupertino/issues/919)), v1.2.0 "ironclad" (2026-05-20, search-quality release: rank-1 accuracy on canonical-lookup queries 52% → 92%), v1.1.0 (2026-05-14), v1.0.2 (2026-05-11). Full history in [CHANGELOG.md](CHANGELOG.md).

- ✅ All core functionality working, all production bugs resolved at ship time
- ✅ 3,122 runtime tests across 351 Swift test files (501 suites)
- ⚠️ SwiftLint exits clean with 0 serious violations; warning-level lint debt and SwiftFormat drift remain in existing Swift files. Swift 6.3 with 100% strict concurrency checking.
- ✅ Search quality measured end-to-end (Phase 1 of `docs/design/search-quality-eval.md`): single-system baselines on 7 query classes + 3 paired v1.1.0 → v1.2.0 version-diff audits, all checked into `docs/audits/`

## Contributing

Issues and pull requests are welcome, and I'd love to hear how you're using Cupertino with your AI workflow. For questions and discussion, use [GitHub Discussions](https://github.com/mihaelamj/cupertino/discussions).

I prefer collaboration over competition: if you're working on something similar, let's find ways to work together. Don't hesitate to submit a PR because of code style; I'd rather have your contribution than perfect formatting. By participating you agree to abide by the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/). For development setup, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Related repositories

- **[cupertino-docs](https://github.com/mihaelamj/cupertino-docs)**: pre-built documentation archive for quick installation
- **[cupertino-sample-code](https://github.com/mihaelamj/cupertino-sample-code)**: Apple sample-code repository mirror
- **[cupertino-packages](https://github.com/mihaelamj/cupertino-packages)**: Swift package source corpus indexed into `packages.db`
- **[cupertino-symbolgraphs](https://github.com/mihaelamj/cupertino-symbolgraphs)**: Apple SDK symbol-graph corpus, the source for the `apple-constraints.json` and `apple-conformances.json` enrichment tables

## License

MIT License, see [LICENSE](LICENSE) for details.

## Support

- **Issues:** [GitHub Issues](https://github.com/mihaelamj/cupertino/issues)
- **Discussions:** [GitHub Discussions](https://github.com/mihaelamj/cupertino/discussions)

---

**Note:** This tool is for educational and development purposes. Respect Apple's Terms of Service when using their documentation.
