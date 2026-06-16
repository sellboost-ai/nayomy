---
name: "hloiseau/mcp-gopls"
description: "A MCP server for interacting with Go's Language Server Protocol (gopls) and benefit from advanced Go code analysis features."
category: "Developer Tools"
repo: "hloiseau/mcp-gopls"
stars: 85
url: "https://github.com/hloiseau/mcp-gopls"
body_length: 19209
license: "Apache-2.0"
language: "Go"
homepage: "https://github.com/hloiseau/mcp-gopls/blob/main/docs/usage.md"
body_tr: |-
  # mcp-gopls – Go için MCP sunucusu (gopls)
  <!-- markdownlint-disable MD022 MD012 MD029 MD060 -->
  [![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
  ![Go version](https://img.shields.io/badge/Go-1.25+-informational)
  [![CI](https://github.com/hloiseau/mcp-gopls/actions/workflows/ci.yml/badge.svg)](https://github.com/hloiseau/mcp-gopls/actions)
  [![Docker Image](https://img.shields.io/badge/ghcr.io-hloiseau/mcp--gopls-blue)](https://ghcr.io/hloiseau/mcp-gopls)

  AI asistanlarının Go'nun LSP'sini (`gopls`) navigasyon, tanılamalar, testler, kapsama analizi ve daha fazlası için kullanmasına olanak tanıyan bir Model Context Protocol (MCP) sunucusu.

  > **Özet:** Claude / Cursor / Copilot'u Go ile kullanıyorsanız, `mcp-gopls` yapay zekaya tam LSP güçleri sağlar:
  > tanıma gitme, referanslar, hover, tamamlama, `go test`, kapsama analizi, `go mod tidy`, `govulncheck`, vb.

  ![Demo Animasyonu](https://raw.githubusercontent.com/hloiseau/mcp-gopls/HEAD/docs/Animation.gif)


  ## Genel Bakış

  Bu MCP sunucusu yapay zeka asistanlarına yardımcı olur:

  - Go çalışma alanlarını analiz etmek için LSP kullanımı
  - Tanımlara, referanslara ve çalışma alanı sembollerine gitme
  - MCP'den çıkmadan kodu biçimlendirme, yeniden adlandırma ve kod eylemlerini inceleme
  - Go testlerini, kapsama analizi, `go mod tidy`, `govulncheck` ve modül grafik komutlarını yapılandırılmış sonuçlarla çalıştırma
  - Çalışma alanı kaynakları (genel bakış + go.mod) okuma ve küratörlü komut istemi kullanma

  > **Durum:** Aktif olarak geliştiriliyor – gerçek projelerde kullanılıyor.  
  > Go 1.25.x ve `gopls@latest` ile test edilmiştir.  

  ## Mimari

  Bu proje, Model Context Protocol'ü uygulamak için [mark3labs/mcp-go](https://github.com/mark3labs/mcp-go) kütüphanesini kullanır. MCP entegrasyonu, yapay zeka asistanları ile Go araçları arasında sorunsuz iletişim sağlar.

  Sunucu, Language Server Protocol (LSP) aracılığıyla Go'nun resmi dil sunucusu olan [gopls](https://github.com/golang/tools/tree/master/gopls) ile iletişim kurar.

  ## Özellikler

  - **Yapılandırılabilir çalışma zamanı**: `--workspace`, `--gopls-path`, `--log-level`, `--rpc-timeout` ve `--shutdown-timeout` bayrakları + ortam değişkenleri (`MCP_GOPLS_*`)
  - **Yapılandırılmış günlüğe kaydetme**: slog ile metin/JSON günlüğü ve isteğe bağlı dosya çıktısı
  - **Genişletilmiş LSP yüzeyi**: navigasyon, tanılamalar, biçimlendirme, yeniden adlandırma, kod eylemleri, hover, tamamlama, çalışma alanı sembolleri
  - **Test ve araç yardımcıları**: kapsama analizi, `go test`, `go mod tidy`, `govulncheck`, `go mod graph`
  - **MCP ekstraları**: kaynaklar (`resource://workspace/overview`, `resource://workspace/go.mod`) ve komut istemleri (`summarize_diagnostics`, `refactor_plan`)
  - **İlerleme akışı**: uzun süreli komutlar, istemcilerin durum güncellemelerini gösterebilmesi için `notifications/progress` olayları gönderir

  ### Özellik karşılaştırması: `mcp-gopls` vs yerleşik `gopls` MCP

  `gopls` v0.20.0 itibariyle, yerleşik MCP sunucusu şu araçları sunar:
  `go_context`, `go_diagnostics`, `go_file_context`, `go_file_diagnostics`,
  `go_file_metadata`, `go_package_api`, `go_references`, `go_rename_symbol`,
  `go_search`, `go_symbol_references`, `go_workspace`, `go_vulncheck`.

  | Özellik / Kapasite | `mcp-gopls` (bu proje) | Yerleşik `gopls` MCP |
  |----------------------|----------------------------|----------------------|
  | Tanıma gitme | Evet (`go_to_definition` aracı) | Hayır (araç listesinde yok) |
  | Referansları bulma | Evet (`find_references`) | Evet (`go_references`, `go_symbol_references`) |
  | Tanılamalar (dosya / çalışma alanı) | Evet (`check_diagnostics`) | Evet (`go_diagnostics`, `go_file_diagnostics`) |
  | Hover bilgisi | Evet (`get_hover_info`) | Hayır (araç listesinde yok) |
  | Tamamlama | Evet (`get_completion`) | Hayır (araç listesinde yok) |
  | Biçimlendirme | Evet (`format_document`) | Hayır (araç listesinde yok) |
  | Sembolü yeniden adlandırma | Evet (`rename_symbol`) | Evet (`go_rename_symbol`) |
  | Kod eylemleri | Evet (`list_code_actions`) | Hayır (araç listesinde yok) |
  | Çalışma alanı sembol araması | Evet (`search_workspace_symbols`) | Evet (`go_search`) |
  | Paket / çalışma alanı API/bağlam araçları | Yok | Evet (`go_package_api`, `go_file_context`, `go_file_metadata`, `go_workspace`, `go_context`) |
  | `go test` çalıştırma | Evet (`run_go_test`) | Testler çalıştırmak için MCP aracı yok |
  | Kapsama analizi | Evet (`analyze_coverage`) | Kapsama analizi için MCP aracı yok |
  | `go mod tidy` | Evet (`run_go_mod_tidy`) | `go mod tidy` için MCP aracı yok |
  | `govulncheck` | Evet (`run_govulncheck`) | Evet (`go_vulncheck`) |
  | Modül grafı (`go mod graph`) | Evet (`module_graph`) | Modül grafı için MCP aracı yok |
  | Ekstra MCP kaynakları | Evet (`resource://workspace/overview`, `resource://workspace/go.mod`) | MCP kaynakları olarak belgelenmiş değil |
  | Özel MCP komut istemleri | Evet (`summarize_diagnostics`, `refactor_plan`) | MCP komut istemü olarak gösterilmiyor (sadece model talimatları) |
  | Sunucuyla gönderilen model talimatları | Özel mekanizma yok (README/dokularda belgelenen) | Evet: `gopls mcp -instructions` kullanım akışlarını yazdırır |

  Tam LSP benzeri düzenlemeler + MCP'den araç kullanımı istiyorsanız (tanım, hover, tamamlama, biçim, yeniden adlandırma, kod eylemleri, go test, kapsama analizi, go mod tidy, modül grafı), mcp-gopls kesinlikle daha zengindir.

  Çoğunlukla salt okunur/içgözlemci araçlar istiyorsanız (tanılamalar, sembol araması, referanslar, paket API, çalışma alanı/dosya bağlamı, vulncheck) ve ek ikili dosya istemiyorsanız, yerleşik gopls MCP yeterlidir.

  > **Not:** Yerleşik `gopls` MCP sunucusu hala deneysel olarak işaretlenmiş olup, araç seti zamanla değişebilir. Bu karşılaştırma `gopls` v0.20.x itibariyle doğrudur.


  ## Proje Yapısı

  ```bash
  .
  ├── cmd
  │   └── mcp-gopls        # Uygulama giriş noktası
  ├── pkg
  │   ├── lsp             # gopls ile iletişim için LSP istemcisi
  │   │   ├── client      # LSP istemci uygulaması
  │   │   └── protocol    # LSP protokolü türleri ve özellikleri
  │   ├── server          # MCP sunucusu
  │   └── tools           # LSP özelliklerini sunan MCP araçları
  ```

  ## Kurulum

  ```bash
  go install github.com/hloiseau/mcp-gopls/v2/cmd/mcp-gopls@latest
  ```

  ## Hızlı Başlangıç

  1. **Sunucuyu kurun**:

  ```bash
  go install github.com/hloiseau/mcp-gopls/v2/cmd/mcp-gopls@latest
  ```

  2. **`$PATH`'ta olduğunu doğrulayın**:

  ```bash
  mcp-gopls --help
  ```

  3. **Yapay zeka istemcinizi yapılandırın** (Cursor, Claude Desktop veya GitHub Copilot için örneklere aşağıda bakın).

  ---

  ## Docker / MCP Gateway

  `mcp-gopls`'i bir konteyner içinde çalıştırmayı tercih ederseniz (Docker MCP Gateway veya diğer konteynerleştirilmiş kurulumlar için), resmi görüntüyü kullanın.

  ### Docker çalıştırma

  ```bash
  docker run --rm -i \
    -v /absolute/path/to/your/go/project:/workspace \
    ghcr.io/hloiseau/mcp-gopls:latest \
    --workspace /workspace
  ```

  ### docker-mcp.yaml

  `docs/docker-mcp.yaml`'ı kopyalayın, bind mount yolunu güncelleyin, ardından bu dizinden çalıştırın:

  ```bash
  docker mcp gateway run
  ```

  ### Araçlar kataloğu meta verileri

  MCP kataloğu araç takımınız bir `toolsUrl` gerektiriyorsa, `docs/tools.json`'ı statik bir araç listesi olarak kullanın.

  ## Ayrıntılı İstemci Kurulumu

  > **Not:** Tüm istemciler aynı komuta işaret eder:  
  > `mcp-gopls --workspace /absolute/path/to/your/go/project`  
  > Yapılandırma biçimi istemciye göre biraz farklılık gösterir, ancak ikili dosya ve argümanlar aynı kalır.

  ### 1. Cursor'dan Bağlanma

  1. **Ayarlar → MCP Sunucuları → JSON Düzenle** seçeneğini açın.
  2. `mcp-gopls` girişini ekleyin veya güncelleyin:

  ```json
  {
    "mcpServers": {
      "mcp-gopls": {
        "command": "mcp-gopls",
        "args": ["--workspace", "/absolute/path/to/your/go/project"],
        "env": {
          "MCP_GOPLS_LOG_LEVEL": "info"
        }
      }
    }
  }
  ```

  3. Cursor'un yeniden bağlanması için **Geliştirici: Pencereyi Yeniden Yükle** seçeneğini çalıştırın.
  4. Cursor Chat içinde **Araçlar** çekmecesini açın ve `mcp-gopls`'i etkinleştirin.

  ### 2. Araçları Çağırma

  | Araç / Komut İstemi | Cursor Chat içindeki örnek istek |
  |---------------|------------------------------------|
  | `go_to_definition` | "`go_to_definition`'ı `pkg/server/server.go:42` üzerinde kullanın." |
  | `find_references` | "Araçtan `ServeStdio` referanslarını talep edin." |
  | `check_diagnostics` | "`cmd/mcp-gopls/main.go` için tanılamalar isteyin." |
  | `get_hover_info` | "`get_hover_info`'ı `pkg/tools/workspace.go:88` üzerinde çağırın." |
  | `get_completion` | "`pkg/server/server.go:55` konumunda tamamlamaları tetikleyin." |
  | `format_document` | "Biçimlendiriciyi `pkg/tools/refactor.go` üzerinde çalıştırın." |
  | `rename_symbol` | "`clientFactory`'i aracı kullanarak `newClientFactory`'e yeniden adlandırın." |
  | `list_code_actions` | "`pkg/server/server.go:80-90` aralığı için kod eylemlerini listeleyin." |
  | `search_workspace_symbols` | "`NewWorkspaceConfig` için çalışma alanı sembollerini arayın." |
  | `analyze_coverage` | "`analyze_coverage`'ı `./pkg/...` üzerinde işlev başına istatistiklerle çalıştırın." |
  | `run_go_test` | "`run_go_test`'i `./cmd/...` üzerinde çalıştırın." |
  | `run_go_mod_tidy` | "`run_go_mod_tidy`'i çalıştırarak go.mod'u senkronize edin." |
  | `run_govulncheck` | "`run_govulncheck`'i çalıştırın ve bulguları akışla." |
  | `module_graph` | "Bağımlılıkları incelemek için `module_graph`'ı çağırın." |
  | `summarize_diagnostics` | "Son tanılamalar üzerinde `summarize_diagnostics` komut istemini kullanın." |
  | `refactor_plan` | "`refactor_plan`'a tanılamalar JSON'ını vererek düzeltme planı yapın." |

  ## İstemci Kurulum Örnekleri

  ### Claude Desktop (macOS, Windows, Linux)

  1. `mcp-gopls`'i kurun ve `$PATH`'ta olduğundan emin olun.
  2. `claude_desktop_config.json`'ı oluşturun veya düzenleyin.
     - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
     - Linux: `~/.config/Claude/claude_desktop_config.json`
     - Windows: `%APPDATA%\Claude\claude_desktop_config.json`
  3. Sunucu girişini ekleyin:

  ```json
  {
    "mcpServers": {
      "mcp-gopls": {
        "command": "mcp-gopls",
        "args": ["--workspace", "/absolute/path/to/your/go/project"],
        "env": {
          "MCP_GOPLS_LOG_LEVEL": "info"
        }
      }
    }
  }
  ```

  Claude Desktop'u yeniden başlatın, bir sohbet açın ve sunucuya `mcp-gopls` aracıyla bağlanmasını isteyin (sunucu tespit edildiğinde Claude bir "Araçlar" sekmesi gösterecektir). Tipik komut istemlerine "`cmd/api/server.go` için tanılamalar listele" veya "`userService`'i `accountService`'e yeniden adlandır" dahildir.

  ### Cursor IDE

  Cursor'da **Ayarlar → MCP Sunucuları → JSON Düzenle** seçeneğini açın (`~/.cursor/config.json` veya proje yerel geçersiz kılmasına yazar). Ekleyin:

  ```json
  {
    "mcpServers": {
      "mcp-gopls": {
        "command": "mcp-gopls",
        "args": ["--workspace", "/absolute/path/to/your/go/project"]
      }
    }
  }
  ```

  Cursor'u yeniden yükleyin (veya `Geliştirici: Pencereyi Yeniden Yükle` komutunu çalıştırın) ve sunucu "Araçlar" çekmecesi içinde görünecektir. Artık Cursor Chat'e "`go test ./pkg/server` kapsama analizi ile çalıştır" veya "`pkg/tools/tests.go:42` için hover bilgisi göster" gibi şeyler sorabilirsiniz.

  ### GitHub Copilot (Agent Modu)

  GitHub Copilot'un Agent Modu, VS Code, JetBrains IDE'leri, Eclipse ve Xcode arasında yerel MCP sunucularıyla konuşabilir ([dokümanlar](https://docs.github.com/en/copilot/customizing-copilot/extending-copilot-chat-with-mcp)). VS Code'da `mcp-gopls`'i bağlamak için:

  1. GitHub Copilot'u güncelleyin (VS Code 1.99+ gerektirir), **Agent Modu**'na seçin.
  2. Çalışma alanınızda `.vscode/mcp.json` oluşturun (veya Copilot "Yapılandırmayı Düzenle" iletişim kutusunda gösterilen genel dosyayı düzenleyin).
  3. Ekleyin:

  ```json
  {
    "servers": {
      "mcp-gopls": {
        "type": "stdio",
        "command": "mcp-gopls",
        "args": ["--workspace", "/absolute/path/to/your/go/project"],
        "env": {
          "MCP_GOPLS_LOG_LEVEL": "warn"
        }
      }
    }
  }
  ```

  4. Agent Modunu yeniden yükleyin (kapat/aç), Copilot yeni aracı keşfetsin; sohbet "Araçlar" seçicisi artık her MCP eylemini (`run_go_test`, `run_govulncheck` vb.) gösterecektir. JetBrains ve diğer IDE'ler Copilot ayarları paneli aracılığıyla aynı JSON şemasını paylaşır.

  ### MCP Inspector / CLI testi

  Hızlı denetim testleri veya demolar için [mark3labs/mcp-inspector](https://github.com/mark3labs/mcp-inspector) kullanabilirsiniz:

  ```bash
  npx -y @mark3labs/mcp-inspector \
    --command mcp-gopls \
    --args "--workspace" "/absolute/path/to/your/go/project"
  ```

  Inspector, her aracı/kaynağı/komut istemini manuel olarak çağırmanıza olanak tanır; bu, sunucu yapılandırmasında bir AI asistana bağlamadan önce hata ayıklamak için kullanışlıdır.

  ## MCP Araçları

  | Araç | Açıklama |
  |------|-------------|
  | `go_to_definition` | Sembolün tanımına git |
  | `find_references` | Bir sembol için tüm referansları listele |
  | `check_diagnostics` | Bir dosya için önbelleğe alınmış tanılamalar al |
  | `get_hover_info` | Bir sembol için hover markdown'ı döndür |
  | `get_completion` | Bir konumdaki tamamlama etiketlerini döndür |
  | `format_document` | Tüm bir belge için biçimlendirme düzenlemeleri döndür |
  | `rename_symbol` | Yeniden adlandırma için çalışma alanı düzenlemeleri döndür |
  | `list_code_actions` | Bir aralık için mevcut kod eylemlerini listele |
  | `search_workspace_symbols` | Çalışma alanında sembol ara |
  | `analyze_coverage` | `go test` kapsama analizi + isteğe bağlı işlev başına rapor ile çalıştır |
  | `run_go_test` | Bir paket/desen için `go test` yürüt |
  | `run_go_mod_tidy` | `go mod tidy` yürüt |
  | `run_govulncheck` | `govulncheck ./...` yürüt |
  | `module_graph` | `go mod graph` çıktısını döndür |

  ## İlerleme Bildirimleri

  Uzun süreli araçlar, IDE'lerin zengin durum göstergelerini gösterebilmesi için yapılandırılmış `notifications/progress` olayları gönderir:

  - **Akış ilerleme** (`run_go_test`, `analyze_coverage`, `run_govulncheck`, `run_go_mod_tidy`) artımlı günlük satırları ve yüzde güncellemeleri iletir. Cursor bunları canlı günlük olarak gösterir.
  - **Sadece başlangıç/tamamlama olayları** (`go_to_definition`, `find_references`, `rename_symbol` vb.) hızlı bir "başladı" olayı gönderir; böylece kullanıcı arabirimi bir spinner gösterebilir; ardından nihai sonucu içeren bir tamamlama yükü gelir.
  - Her ilerleme tokeni artık ad alanına ayrılmıştır (ör. `run_go_test/<rand>`) çeşitli araçlar eşzamanlı çalışırken "bilinmeyen token" hatalarını önlemek için.

  Yeni araçlar entegre ederken, yalnızca temel LSP/golang komutu anlamlı ara çıktı üretiyorsa akış modunu seçin; aksi takdirde gürültüyü en aza indirmek için hafif başlangıç/tamamlama akışına devam edin.

  ## Komut İstemi Talimatları

  Her iki komut istemi, "Komut İstemleri" kataloğu aracılığıyla herhangi bir MCP farkında olan istemciden erişilebilir.

  ### `summarize_diagnostics`

  - **Ne zaman kullanılır:** `check_diagnostics` veya `run_go_test` sonrası ham tanılamaları işlem yapılabilir adımlara dönüştürmek için.
  - **Argümanlar:** Yok. Sunucu, araçlar katmanı tarafından önbelleğe alınan son tanılamalar yükünü otomatik olarak okur.
  - **Tipik iş akışı:** `check_diagnostics` → döndürülen dizisini komut istemi giriş alanına kopyala (Cursor'un kullanıcı arabirimi, "Son sonucu kullan"ı seçtiğinizde otomatik olarak yapıştırır).

  ### `refactor_plan`

  - **Ne zaman kullanılır:** Zaten bir tanılamalar JSON diziniz var ve kısa bir değişiklik kontrol listesi istiyorsunuz.
  - **Argümanlar:** Ham Go tanılamalarını içeren bir `diagnostics` nesnesi gerekir (`check_diagnostics` tarafından döndürülen aynı yük).
  - **Örnek çağırma yükü:**

  ```json
  {
    "diagnostics": [
      {
        "uri": "file:///path/to/pkg/tools/workspace.go",
        "range": {"start": {"line": 12, "character": 5}, "end": {"line": 12, "character": 25}},
        "severity": 1,
        "message": "unused variable testHelper"
      }
    ]
  }
  ```

  Komut istemi, numaralandırılmış düzeltme adımları artı önerilen doğrulama komutları (`go test`, `analyze_coverage` vb.) ile yanıt verir.

  ## Yapılandırma

  Sunucu, komut satırı bayrakları ve ortam değişkenleri aracılığıyla çeşitli yapılandırma seçeneklerini destekler:

  ### Komut Satırı Bayrakları

  | Bayrak                | Varsayılan | Açıklama                                    |
  |-----------------------|---------|------------------------------------------------|
  | `--workspace`         | `.`     | Go proje kökünüze giden mutlak yol          |
  | `--gopls-path`        | `gopls` | gopls ikili dosyasına giden yol                       |
  | `--log-level`         | `info`  | Günlük seviyesi (`debug`, `info`, `warn`, `error`)   |
  | `--rpc-timeout`       | `30s`   | LSP çağrıları için RPC zaman aşımı                      |
  | `--shutdown-timeout`  | `5s`    | Zarif kapatma için zaman aşımı                  |

  ### Ortam Değişkenleri

  Tüm bayraklar `MCP_GOPLS_` ön eki ile ortam değişkenleri aracılığıyla ayarlanabilir:

  | Ortam Değişkeni       | Eşdeğer Bayrak       | Açıklama                                    |
  |---------------------------|-----------------------|------------------------------------------------|
  | `MCP_GOPLS_WORKSPACE`     | `--workspace`         | Go proje kökünüze giden mutlak yol          |
  | `MCP_GOPLS_GOPLS_PATH`    | `--gopls-path`        | gopls ikili dosyasına giden yol                       |
  | `MCP_GOPLS_LOG_LEVEL`     | `--log-level`         | Günlük seviyesi (`debug`, `info`, `warn`, `error`)   |
  | `MCP_GOPLS_RPC_TIMEOUT`   | `--rpc-timeout`       | LSP çağrıları için RPC zaman aşımı (ör. `30s`, `1m`)  |
  | `MCP_GOPLS_SHUTDOWN_TIMEOUT` | `--shutdown-timeout` | Zarif kapatma için zaman aşımı                |

  Komut satırı bayrakları ortam değişkenlerine göre öncelik alır.

  ## Sorun Giderme

  - **"column is beyond end of line"** – gopls, sağlanan konumu eşleştiremedi. Dosyanın kaydedildiğini ve konumun sıfır tabanlı satırlar/karakterler kullandığını doğrulayın; sekmelerin ve boşlukların gopls beklentileriyle hizalanmasını sağlamak için `go fmt` çalıştırın.
  - **"no hover information available"** – sembol, üretilen bir dosyaya veya yapılandırılmış çalışma alanı dışındaki bir modüle ait olabilir. `--workspace` bayrağının modül köküne işaret ettiğinden ve `go list ./...`'in başarılı olduğundan emin olun.
  - **"workspace not initialized"** – sunucu ilk senkronizasyonını tamamlamadı. `workspace initialized` günlük satırı için bekleyin veya eski `.gopls` önbelleklerini sildikten sonra `mcp-gopls`'i yeniden başlatın.
  - **`run_govulncheck` eksik ikili dosya** – araç artık `go run golang.org/x/vuln/cmd/govulncheck@latest`'a geri döner, ancak makine yine de giden ağ erişimine ihtiyaç duyar. Geri dönüş engellenmişse ikiliyi manuel olarak kurun.

  ## Kullanım Örneği

  Sunucuyu MCP destekleyen yapay zeka asistanlarıyla kullanma:

  ```Markdown
  # Yapay zekaya kodla ilgili bilgi almak için sor
  Bu projede `ServeStdio` işlevinin tanımını bulabilir misin?

  # Tanılamalar iste
  main.go dosyamda herhangi bir hata var mı?

  # Bir sembol hakkında bilgi iste
  Go'da Context.WithTimeout işlevi ne yapar?
  ```

  ## Geliştirme

  ```bash
  git clone https://github.com/hloiseau/mcp-gopls.git
  cd mcp-gopls
  go mod tidy
  go test ./...
  go build ./cmd/mcp-gopls
  ```

  Tablo odaklı testler `pkg/tools` altında yer alır ve CI `.github/workflows/ci.yml` aracılığıyla çalışır.

  ### Dokümantasyon

  - `docs/usage.md` – hızlı başlangıç ve araç kataloğu incelemesi
  - Çalışma alanı kaynakları `resource://workspace/overview` ve `resource://workspace/go.mod` sunar
  - Komut istemlerine (`summarize_diagnostics`, `refactor_plan`) tutarlı çıktılar üretmesine yardımcı olur

  ## Katkıda Bulunma

  PR'ler ve sorunlar hoş geldiniz!

  - [Açık sorunları](https://github.com/hloiseau/mcp-gopls/issues) kontrol edin veya bir hata bulursanız veya bir özellik istiyorsanız yeni bir sorun dosyalayın.
  - PR açmadan önce `go test ./...`'i çalıştırın.
  - Daha büyük değişiklikler için (yeni ara
---

# mcp-gopls – MCP server for Go (gopls)
<!-- markdownlint-disable MD022 MD012 MD029 MD060 -->
[![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
![Go version](https://img.shields.io/badge/Go-1.25+-informational)
[![CI](https://github.com/hloiseau/mcp-gopls/actions/workflows/ci.yml/badge.svg)](https://github.com/hloiseau/mcp-gopls/actions)
[![Docker Image](https://img.shields.io/badge/ghcr.io-hloiseau/mcp--gopls-blue)](https://ghcr.io/hloiseau/mcp-gopls)

A Model Context Protocol (MCP) server that lets AI assistants use Go’s LSP (`gopls`) for navigation, diagnostics, testing, coverage, and more.

> **TL;DR:** If you use Claude / Cursor / Copilot with Go, `mcp-gopls` gives the AI full LSP powers:
> go-to-definition, references, hover, completion, `go test`, coverage, `go mod tidy`, `govulncheck`, etc.

![Demo Animation](https://raw.githubusercontent.com/hloiseau/mcp-gopls/HEAD/docs/Animation.gif)


## Overview

This MCP server helps AI assistants to:

- Use LSP to analyze Go workspaces
- Navigate to definitions, references, and workspace symbols
- Format, rename, and inspect code actions without leaving MCP
- Run Go tests, coverage, `go mod tidy`, `govulncheck`, and module graph commands with structured results
- Read workspace resources (overview + go.mod) and consume curated prompts

> **Status:** Actively developed – used in real projects.  
> Tested with Go 1.25.x and `gopls@latest`.  

## Architecture

This project uses the [mark3labs/mcp-go](https://github.com/mark3labs/mcp-go) library to implement the Model Context Protocol. The MCP integration enables seamless communication between AI assistants and Go tools.

The server communicates with [gopls](https://github.com/golang/tools/tree/master/gopls), the official language server for Go, via the Language Server Protocol (LSP).

## Features

- **Configurable runtime**: `--workspace`, `--gopls-path`, `--log-level`, `--rpc-timeout`, and `--shutdown-timeout` flags + env vars (`MCP_GOPLS_*`)
- **Structured logging**: Text/JSON logging with slog and optional file output
- **Extended LSP surface**: navigation, diagnostics, formatting, rename, code actions, hover, completion, workspace symbols
- **Test & tooling helpers**: coverage analysis, `go test`, `go mod tidy`, `govulncheck`, `go mod graph`
- **MCP extras**: resources (`resource://workspace/overview`, `resource://workspace/go.mod`) and prompts (`summarize_diagnostics`, `refactor_plan`)
- **Progress streaming**: long-running commands emit `notifications/progress` events so clients can surface status updates

### Feature comparison: `mcp-gopls` vs built-in `gopls` MCP

As of `gopls` v0.20.0, the built-in MCP server exposes these tools:
`go_context`, `go_diagnostics`, `go_file_context`, `go_file_diagnostics`,
`go_file_metadata`, `go_package_api`, `go_references`, `go_rename_symbol`,
`go_search`, `go_symbol_references`, `go_workspace`, `go_vulncheck`.

| Feature / capability | `mcp-gopls` (this project) | Built-in `gopls` MCP |
|----------------------|----------------------------|----------------------|
| Go-to-definition | Yes (`go_to_definition` tool) | No dedicated MCP tool (not in tool list) |
| Find references | Yes (`find_references`) | Yes (`go_references`, `go_symbol_references`) |
| Diagnostics (file / workspace) | Yes (`check_diagnostics`) | Yes (`go_diagnostics`, `go_file_diagnostics`) |
| Hover information | Yes (`get_hover_info`) | No dedicated MCP tool (not in tool list) |
| Completion | Yes (`get_completion`) | No dedicated MCP tool (not in tool list) |
| Formatting | Yes (`format_document`) | No dedicated MCP tool (not in tool list) |
| Rename symbol | Yes (`rename_symbol`) | Yes (`go_rename_symbol`) |
| Code actions | Yes (`list_code_actions`) | No dedicated MCP tool (not in tool list) |
| Workspace symbol search | Yes (`search_workspace_symbols`) | Yes (`go_search`) |
| Package / workspace API/context tools | No dedicated MCP tool | Yes (`go_package_api`, `go_file_context`, `go_file_metadata`, `go_workspace`, `go_context`) |
| Run `go test` | Yes (`run_go_test`) | No MCP tool for running tests |
| Coverage analysis | Yes (`analyze_coverage`) | No MCP tool for coverage |
| `go mod tidy` | Yes (`run_go_mod_tidy`) | No MCP tool for `go mod tidy` |
| `govulncheck` | Yes (`run_govulncheck`) | Yes (`go_vulncheck`) |
| Module graph (`go mod graph`) | Yes (`module_graph`) | No MCP tool for module graph |
| Extra MCP resources | Yes (`resource://workspace/overview`, `resource://workspace/go.mod`) | Not documented as MCP resources |
| Custom MCP prompts | Yes (`summarize_diagnostics`, `refactor_plan`) | Not exposed as MCP prompts (only model instructions) |
| Model instructions shipped with server | No special mechanism (documented in README/docs) | Yes: `gopls mcp -instructions` prints usage workflows |

If you want full LSP-like editing + tooling from MCP (definition, hover, completion, format, rename, code actions, go test, coverage, go mod tidy, module graph), mcp-gopls is strictly richer.

If you mostly want read-only/introspective tools (diagnostics, symbol search, references, package API, workspace/file context, vulncheck) with no extra binary, the built-in gopls MCP is enough.

> **Note:** The built-in `gopls` MCP server is still marked experimental and its tool set may change over time. This comparison is accurate as of `gopls` v0.20.x.


## Project Structure

```bash
.
├── cmd
│   └── mcp-gopls        # Application entry point
├── pkg
│   ├── lsp             # LSP client to communicate with gopls
│   │   ├── client      # LSP client implementation
│   │   └── protocol    # LSP protocol types and features
│   ├── server          # MCP server
│   └── tools           # MCP tools exposing LSP features
```

## Installation

```bash
go install github.com/hloiseau/mcp-gopls/v2/cmd/mcp-gopls@latest
```

## Quick Start

1. **Install** the server:

```bash
go install github.com/hloiseau/mcp-gopls/v2/cmd/mcp-gopls@latest
```

2. **Verify** it's on your `$PATH`:

```bash
mcp-gopls --help
```

3. **Configure** your AI client (see examples below for Cursor, Claude Desktop, or GitHub Copilot).

---

## Docker / MCP Gateway

If you prefer to run `mcp-gopls` in a container (for Docker MCP Gateway or other containerized setups), use the official image.

### Docker run

```bash
docker run --rm -i \
  -v /absolute/path/to/your/go/project:/workspace \
  ghcr.io/hloiseau/mcp-gopls:latest \
  --workspace /workspace
```

### docker-mcp.yaml

Copy `docs/docker-mcp.yaml`, update the bind mount path, then run from that directory:

```bash
docker mcp gateway run
```

### Tools catalog metadata

If your MCP catalog tooling requires a `toolsUrl`, use `docs/tools.json` as a static tool list.

## Detailed Client Setup

> **Note:** All clients point to the same command:  
> `mcp-gopls --workspace /absolute/path/to/your/go/project`  
> The configuration format differs slightly per client, but the binary and arguments remain identical.

### 1. Connect from Cursor

1. Open **Settings → MCP Servers → Edit JSON**.
2. Add or update the `mcp-gopls` entry:

```json
{
  "mcpServers": {
    "mcp-gopls": {
      "command": "mcp-gopls",
      "args": ["--workspace", "/absolute/path/to/your/go/project"],
      "env": {
        "MCP_GOPLS_LOG_LEVEL": "info"
      }
    }
  }
}
```

3. Run **Developer: Reload Window** so Cursor reconnects.
4. Open the **Tools** drawer in Cursor Chat and enable `mcp-gopls`.

### 2. Invoke the tools

| Tool / Prompt | Example request inside Cursor Chat |
|---------------|------------------------------------|
| `go_to_definition` | “Use `go_to_definition` on `pkg/server/server.go:42`.” |
| `find_references` | “Ask the tool for references to `ServeStdio`.” |
| `check_diagnostics` | “Request diagnostics for `cmd/mcp-gopls/main.go`.” |
| `get_hover_info` | “Call `get_hover_info` on `pkg/tools/workspace.go:88`.” |
| `get_completion` | “Trigger completions at `pkg/server/server.go:55`.” |
| `format_document` | “Run the formatter over `pkg/tools/refactor.go`.” |
| `rename_symbol` | “Rename `clientFactory` to `newClientFactory` via the tool.” |
| `list_code_actions` | “List code actions for `pkg/server/server.go:80-90`.” |
| `search_workspace_symbols` | “Search workspace symbols for `NewWorkspaceConfig`.” |
| `analyze_coverage` | “Run `analyze_coverage` for `./pkg/...` with per-function stats.” |
| `run_go_test` | “Execute `run_go_test` on `./cmd/...`.” |
| `run_go_mod_tidy` | “Invoke `run_go_mod_tidy` to sync go.mod.” |
| `run_govulncheck` | “Run `run_govulncheck` and stream findings.” |
| `module_graph` | “Call `module_graph` to inspect dependencies.” |
| `summarize_diagnostics` | “Use the `summarize_diagnostics` prompt on the latest diagnostics.” |
| `refactor_plan` | “Feed `refactor_plan` the diagnostics JSON to plan fixes.” |

## Client Setup Examples

### Claude Desktop (macOS, Windows, Linux)

1. Install `mcp-gopls` and make sure it is on your `$PATH`.
2. Create or edit `claude_desktop_config.json`.
   - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - Linux: `~/.config/Claude/claude_desktop_config.json`
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`
3. Add the server entry:

```json
{
  "mcpServers": {
    "mcp-gopls": {
      "command": "mcp-gopls",
      "args": ["--workspace", "/absolute/path/to/your/go/project"],
      "env": {
        "MCP_GOPLS_LOG_LEVEL": "info"
      }
    }
  }
}
```

Restart Claude Desktop, open a chat, and ask it to connect to the `mcp-gopls` tool (Claude will show a “Tools” tab once the server is detected). Typical prompts include “list diagnostics for `cmd/api/server.go`” or “rename `userService` to `accountService`.”

### Cursor IDE

In Cursor open **Settings → MCP Servers → Edit JSON** (this writes to `~/.cursor/config.json` or the project-local override). Add:

```json
{
  "mcpServers": {
    "mcp-gopls": {
      "command": "mcp-gopls",
      "args": ["--workspace", "/absolute/path/to/your/go/project"]
    }
  }
}
```

Reload Cursor (or run the `Developer: Reload Window` command) and the server will appear inside the “Tools” drawer. You can now ask Cursor Chat things like “run `go test ./pkg/server` with coverage” or “show hover info for `pkg/tools/tests.go:42`.”

### GitHub Copilot (Agent Mode)

GitHub Copilot’s Agent Mode can talk to local MCP servers across VS Code, JetBrains IDEs, Eclipse, and Xcode ([docs](https://docs.github.com/en/copilot/customizing-copilot/extending-copilot-chat-with-mcp)). To wire `mcp-gopls` in VS Code:

1. Update GitHub Copilot (requires VS Code 1.99+), opt into **Agent Mode**.
2. Create `.vscode/mcp.json` in your workspace (or edit the global file shown in the Copilot “Edit config” dialog).
3. Add:

```json
{
  "servers": {
    "mcp-gopls": {
      "type": "stdio",
      "command": "mcp-gopls",
      "args": ["--workspace", "/absolute/path/to/your/go/project"],
      "env": {
        "MCP_GOPLS_LOG_LEVEL": "warn"
      }
    }
  }
}
```

4. Reload Agent Mode (toggle off/on) so Copilot discovers the new tool; the chat “Tools” picker will now expose every MCP action (`run_go_test`, `run_govulncheck`, etc.). JetBrains and other IDEs share the same JSON schema via their Copilot settings panel.

### MCP Inspector / CLI testing

For quick smoke tests or demos you can use [mark3labs/mcp-inspector](https://github.com/mark3labs/mcp-inspector):

```bash
npx -y @mark3labs/mcp-inspector \
  --command mcp-gopls \
  --args "--workspace" "/absolute/path/to/your/go/project"
```

The inspector lets you call each tool/resource/prompt manually, which is handy for debugging server configuration before wiring it into an AI assistant.

## MCP Tools

| Tool | Description |
|------|-------------|
| `go_to_definition` | Navigate to the definition of a symbol |
| `find_references` | List all references for a symbol |
| `check_diagnostics` | Fetch cached diagnostics for a file |
| `get_hover_info` | Return hover markdown for a symbol |
| `get_completion` | Return completion labels at a position |
| `format_document` | Return formatting edits for an entire document |
| `rename_symbol` | Return workspace edits for a rename |
| `list_code_actions` | List available code actions for a range |
| `search_workspace_symbols` | Search workspace-wide symbols |
| `analyze_coverage` | Run `go test` with coverage + optional per-function report |
| `run_go_test` | Execute `go test` for a package/pattern |
| `run_go_mod_tidy` | Execute `go mod tidy` |
| `run_govulncheck` | Execute `govulncheck ./...` |
| `module_graph` | Return `go mod graph` output |

## Progress Notifications

Long-running tools emit structured `notifications/progress` events so IDEs can show rich status indicators:

- **Streaming progress** (`run_go_test`, `analyze_coverage`, `run_govulncheck`, `run_go_mod_tidy`) forwards incremental log lines and percentage updates. Cursor displays these as a live log.
- **Start/complete events only** (`go_to_definition`, `find_references`, `rename_symbol`, etc.) fire a quick “started” event so the UI can show a spinner, followed by a completion payload with the final result.
- Each progress token is now namespaced (e.g., `run_go_test/<rand>`) to avoid “unknown token” errors when multiple tools run concurrently.

When integrating new tools, opt into streaming mode only if the underlying LSP/golang command produces meaningful interim output; otherwise stick to the lightweight start/complete flow to minimize noise.

## Prompt Instructions

Both prompts are accessible from any MCP-aware client via the “Prompts” catalog.

### `summarize_diagnostics`

- **When to use:** After `check_diagnostics` or `run_go_test` to turn raw diagnostics into actionable steps.
- **Arguments:** None. The server automatically reads the last diagnostics payload cached by the tools layer.
- **Typical workflow:** `check_diagnostics` → copy the returned array into the prompt input field (Cursor’s UI pastes it automatically when you select “Use last result”).

### `refactor_plan`

- **When to use:** You already have a diagnostics JSON array and want a concise change checklist.
- **Arguments:** Requires a `diagnostics` object containing the raw Go diagnostics (the same payload returned by `check_diagnostics`).
- **Example invocation payload:**

```json
{
  "diagnostics": [
    {
      "uri": "file:///path/to/pkg/tools/workspace.go",
      "range": {"start": {"line": 12, "character": 5}, "end": {"line": 12, "character": 25}},
      "severity": 1,
      "message": "unused variable testHelper"
    }
  ]
}
```

The prompt responds with a numbered set of refactor steps plus suggested validation commands (`go test`, `analyze_coverage`, etc.).

## Configuration

The server supports various configuration options via command-line flags and environment variables:

### Command-Line Flags

| Flag                  | Default | Description                                    |
|-----------------------|---------|------------------------------------------------|
| `--workspace`         | `.`     | Absolute path to your Go project root          |
| `--gopls-path`        | `gopls` | Path to the gopls binary                       |
| `--log-level`         | `info`  | Log level (`debug`, `info`, `warn`, `error`)   |
| `--rpc-timeout`       | `30s`   | RPC timeout for LSP calls                      |
| `--shutdown-timeout`  | `5s`    | Timeout for graceful shutdown                  |

### Environment Variables

All flags can be set via environment variables with the `MCP_GOPLS_` prefix:

| Environment Variable       | Equivalent Flag       | Description                                    |
|---------------------------|-----------------------|------------------------------------------------|
| `MCP_GOPLS_WORKSPACE`     | `--workspace`         | Absolute path to your Go project root          |
| `MCP_GOPLS_GOPLS_PATH`    | `--gopls-path`        | Path to the gopls binary                       |
| `MCP_GOPLS_LOG_LEVEL`     | `--log-level`         | Log level (`debug`, `info`, `warn`, `error`)   |
| `MCP_GOPLS_RPC_TIMEOUT`   | `--rpc-timeout`       | RPC timeout for LSP calls (e.g., `30s`, `1m`)  |
| `MCP_GOPLS_SHUTDOWN_TIMEOUT` | `--shutdown-timeout` | Timeout for graceful shutdown                |

Command-line flags take precedence over environment variables.

## Troubleshooting

- **“column is beyond end of line”** – gopls could not map the provided position. Confirm the file is saved and the position uses zero-based lines/columns; run `go fmt` to ensure tabs vs. spaces align with gopls expectations.
- **“no hover information available”** – the symbol might belong to a generated file or a module outside the configured workspace. Ensure the `--workspace` flag points to the module root and that `go list ./...` succeeds.
- **“workspace not initialized”** – the server did not finish its initial sync. Wait for the `workspace initialized` log line or restart `mcp-gopls` after deleting stale `.gopls` caches.
- **`run_govulncheck` missing binary** – the tool now falls back to `go run golang.org/x/vuln/cmd/govulncheck@latest`, but the machine still needs outbound network access. Install the binary manually if the fallback is blocked.

## Usage Example

Using the server with AI assistants that support MCP:

```Markdown
# Ask the AI to get information about the code
Can you find the definition of the `ServeStdio` function in this project?

# Ask for diagnostics
Are there any errors in my main.go file?

# Ask for information about a symbol
What does the Context.WithTimeout function do in Go?
```

## Development

```bash
git clone https://github.com/hloiseau/mcp-gopls.git
cd mcp-gopls
go mod tidy
go test ./...
go build ./cmd/mcp-gopls
```

Table-driven tests live under `pkg/tools` and CI runs via `.github/workflows/ci.yml`.

### Documentation

- `docs/usage.md` – quickstart and tool catalog walkthrough
- Workspace resources expose `resource://workspace/overview` and `resource://workspace/go.mod`
- Prompts (`summarize_diagnostics`, `refactor_plan`) help assistants produce consistent outputs

## Contributing

PRs and issues are welcome!

- Check [open issues](https://github.com/hloiseau/mcp-gopls/issues) or file a new one if you hit a bug or want a feature.
- Run `go test ./...` before opening a PR.
- For bigger changes (new tools, protocol changes), please open a design issue first so we can discuss the approach.

All contributions should maintain test coverage and adhere to Go best practices. See the [Development](#development) section for setup instructions.

## Prerequisites

- Go 1.25+ (tested with `go1.25.4`)
- `gopls` installed (`go install golang.org/x/tools/gopls@latest`)
- Optional: `govulncheck` (`go install golang.org/x/vuln/cmd/govulncheck@latest`)
- The server forces `GOTOOLCHAIN=local` for its nested `gopls` process. If you need a different toolchain, set `GOTOOLCHAIN` in the environment before launching `mcp-gopls`.

## Integration with Ollama

This MCP server can be used with any tool that supports the MCP protocol. For Ollama integration:

1. Make sure Ollama is running
2. The MCP server runs independently and communicates through stdin/stdout
3. Configure your client to use the MCP server as a tool provider

## License

Apache License 2.0
