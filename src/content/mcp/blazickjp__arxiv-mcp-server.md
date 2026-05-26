---
name: "blazickjp/arxiv-mcp-server"
description: "Search ArXiv research papers"
description_tr: "ArXiv araştırma makaleleri içinde arama yapın"
category: "Search & Data Extraction"
repo: "blazickjp/arxiv-mcp-server"
stars: 2777
url: "https://github.com/blazickjp/arxiv-mcp-server"
body_length: 16366
license: "Apache-2.0"
language: "Python"
body_tr: |-
  [![PyPI Version](https://img.shields.io/pypi/v/arxiv-mcp-server.svg)](https://pypi.org/project/arxiv-mcp-server/)
  [![PyPI Downloads](https://img.shields.io/pypi/dm/arxiv-mcp-server.svg)](https://pypi.org/project/arxiv-mcp-server/)
  [![GitHub Stars](https://img.shields.io/github/stars/blazickjp/arxiv-mcp-server?style=flat)](https://github.com/blazickjp/arxiv-mcp-server/stargazers)
  [![GitHub Forks](https://img.shields.io/github/forks/blazickjp/arxiv-mcp-server?style=flat)](https://github.com/blazickjp/arxiv-mcp-server/forks)
  [![Tests](https://github.com/blazickjp/arxiv-mcp-server/actions/workflows/tests.yml/badge.svg)](https://github.com/blazickjp/arxiv-mcp-server/actions/workflows/tests.yml)
  [![Python Version](https://img.shields.io/badge/python-3.11+-blue.svg)](https://www.python.org/downloads/)
  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  [![smithery badge](https://smithery.ai/badge/arxiv-mcp-server)](https://smithery.ai/server/arxiv-mcp-server)
  [![Install in VS Code](https://img.shields.io/badge/Install_in-VS_Code-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://vscode.dev/redirect/mcp/install?name=arxiv-mcp-server&config=%7B%22type%22%3A%22stdio%22%2C%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22arxiv-mcp-server%22%5D%7D)
  [![Install in VS Code Insiders](https://img.shields.io/badge/Install_in-VS_Code_Insiders-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=arxiv-mcp-server&config=%7B%22type%22%3A%22stdio%22%2C%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22arxiv-mcp-server%22%5D%7D&quality=insiders)
  [![Add to Kiro](https://kiro.dev/images/add-to-kiro.svg)](https://kiro.dev/launch/mcp/add?name=arxiv-mcp-server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22arxiv-mcp-server%22%5D%7D)
  [![Codex Plugin](https://img.shields.io/badge/Codex-Plugin-412991?style=flat-square)](./.codex-plugin/plugin.json)

  # ArXiv MCP Server

  <!-- mcp-name: io.github.blazickjp/arxiv-mcp-server -->

  > 🔍 AI asistanlarının basit bir MCP arayüzü aracılığıyla arXiv makalelerini aramasını ve erişmesini sağlayın.

  ArXiv MCP Server, Model Context Protocol (MCP) aracılığıyla AI asistanları ile arXiv araştırma deposu arasında bir köprü sağlar. AI modellerinin makaleleri aramasını ve içeriklerine programlı şekilde erişmesini sağlar.

  <div align="center">
    
  🤝 **[Katkıda Bulunun](https://github.com/blazickjp/arxiv-mcp-server/blob/main/CONTRIBUTING.md)** • 
  📝 **[Hata Bildirin](https://github.com/blazickjp/arxiv-mcp-server/issues)**

  <a href="https://www.pulsemcp.com/servers/blazickjp-arxiv-mcp-server"></a>
  </div>

  ## ✨ Temel Özellikler

  - 🔎 **Makale Arama**: Tarih aralığı ve kategori filtreleriyle arXiv makalelerini sorgulayın
  - 📄 **Makale Erişimi**: Makale içeriğini indirin ve okuyun
  - 📋 **Makale Listesi**: İndirilen tüm makaleleri görüntüleyin
  - 🗃️ **Yerel Depolama**: Makaleler daha hızlı erişim için yerel olarak kaydedilir
  - 📝 **İstemleri**: Makale analizi için bir dizi araştırma istemi



  ## 🔒 Güvenlik

  ### Prompt Injection Riski

  **arXiv'den alınan makale içeriği güvenilmeyen harici girdilerdir.**

  Bir AI asistanı bu sunucu aracılığıyla bir makaleyi indirdiğinde veya okuduğunda, makalenin metni doğrudan modelin bağlamına iletilir. Kötü niyetli bir makale, AI'ın davranışını ele geçirmek için tasarlanan adversarial talimatları içerebilir — örneğin, veri sızıntısı yapması, diğer araçları beklenmeyen argümanlarla çağırması veya sistem düzeyindeki talimatlara geçersiz kılması istenebilir. Bu, OWASP tarafından **LLM01: Prompt Injection** olarak ve OWASP Agentic AI framework'ü tarafından **AG01: LLM-Entegre Sistemlerde Prompt Injection** olarak tanımlanan bilinen bir saldırı sınıfıdır.

  ### Önerilen Azaltma Yolları

  1. **Salt okunur MCP konfigürasyonları kullanın** — mümkün olduğunda, MCP istemcisini arxiv-mcp-server'ın yazma işlemleri tetikleyemeyeceği veya diğer araçları sizin adınıza çağıramayacağı şekilde yapılandırın.
  2. **Makale içeriğini AI özet alımından önce gözden geçirin** — bir AI özeti orijinal isteğinizin parçası olmayan komutları çalıştırmanız veya harici URL'leri ziyaret etmeniz istiyorsa, bunu kırmızı bayrak olarak değerlendirin.
  3. **Çoklu araç kurulumlarında dikkatli olun** — bu sunucuyu dosya sistemi, shell veya tarayıcı araçlarıyla birleştiren agentic boru hatları daha yüksek risklidir; bir makaledeki prompt injection, araç çağrılarını beklenmedik şekilde zincirleyebilir.
  4. **AI tarafından oluşturulan özetleri talimat değil veri olarak değerlendirin** — AI'ın bir makaleyi okuduktan sonra önerdiği herhangi bir eylemi yürütmeden önce her zaman insan yargısı uygulayın.

  ### Referanslar

  - [OWASP LLM01: Prompt Injection](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
  - [OWASP Agentic AI - AG01: Prompt Injection](https://genai.owasp.org/llmrisk/ag01-prompt-injection/)

  ---

  ## 🚀 Hızlı Başlangıç

  ### Smithery Aracılığıyla Kurulum

  ArXiv Server'ı Claude Desktop'a [Smithery](https://smithery.ai/server/arxiv-mcp-server) aracılığıyla otomatik olarak yüklemek için:

  ```bash
  npx -y @smithery/cli install arxiv-mcp-server --client claude
  ```

  ### Claude Desktop Aracılığıyla Kurulum (.mcpb)

  `.mcpb` paketi macOS üzerinde Claude Desktop için tek tıklamalı kurulum yoludur. Sunucu kodunu ve Python paket bağımlılıklarını içerir, bu nedenle kullanıcıların `uv`, `pip` veya manuel MCP JSON konfigürasyonuna ihtiyacı yoktur. Python 3.11+ yine de kullanıcının makinasında mevcut olmalıdır.

  1. [En son sürümden](https://github.com/blazickjp/arxiv-mcp-server/releases/latest) Mac'inize uygun yapıyı indirin:
     - Apple Silicon: `arxiv-mcp-server-darwin-arm64-<version>.mcpb`
     - Intel: `arxiv-mcp-server-darwin-x86_64-<version>.mcpb`
  2. Claude Desktop'ta **Ayarlar → Uzantılar**'ı açın (veya dosyayı Claude Desktop penceresine sürükleyip bırakın).
  3. **Yükle**'ye tıklayın ve istendiğinde tercih ettiğiniz makale depolama dizinini ayarlayın (varsayılan: `~/.arxiv-mcp-server/papers`).

  Claude Desktop, yığılmış sunucuyu stdio üzerinden başlatır — konfigürasyon dosyası düzenlemesine gerek yoktur.

  ### Elle Kurulum

  > **Önemli — `uv tool install` kullanın, npm/pnpm veya `uv pip install` kullanmayın**
  >
  > Bu proje, desteklenen sunucuyu PyPI'de bir Python paketi olarak yayınlar.
  > `arxiv-mcp-server`'ı `npm install`, `pnpm add` veya `npx arxiv-mcp-server` ile kurmayın: bu adla npm paketi, ilgisiz bir üçüncü taraf paketidir ve kendi Python algılama wrapper'ına sahiptir.
  >
  > `uv pip install arxiv-mcp-server` çalıştırmak paketi mevcut sanal ortama yükler ancak `arxiv-mcp-server` yürütülebilirini `PATH`'e yerleştirmez. `uv tool install` kullanmalısınız, böylece uv izole edilmiş bir ortam oluşturur ve yürütülebilir dosyayı global olarak ortaya çıkarır:

  ```bash
  uv tool install arxiv-mcp-server
  ```

  Bundan sonra `arxiv-mcp-server` komutu `PATH` üzerinde kullanılabilir olacaktır.

  > **PDF fallback (eski makaleler):** Çoğu arXiv makalesi temel yüklemenin otomatik olarak işlediği bir HTML versiyonuna sahiptir. Yalnızca PDF'ye sahip eski makaleler için sunucu `[pdf]` extra'sına ihtiyaç duyar (pymupdf4llm). Bunu yükleyin:
  >
  > ```bash
  > uv tool install 'arxiv-mcp-server[pdf]'
  > ```

  Bunu doğrulayabilirsiniz:

  ```bash
  arxiv-mcp-server --help
  ```

  Daha önce `uv pip install arxiv-mcp-server` çalıştırdıysanız ve komut eksikse, kaldırın ve yukarıda gösterildiği gibi `uv tool install` ile yeniden yükleyin.

  Geliştirme için:

  ```bash
  # Klonlayın ve geliştirme ortamını ayarlayın
  git clone https://github.com/blazickjp/arxiv-mcp-server.git
  cd arxiv-mcp-server

  # Sanal ortam oluşturun ve etkinleştirin
  uv venv
  source .venv/bin/activate

  # Test bağımlılıklarıyla yükleyin (yalnızca geliştirme — global yürütülebilir yok)
  uv pip install -e ".[test]"
  ```

  ### 🤖 Codex Plugin Entegrasyonu

  Bu depo şu anda `.codex-plugin/plugin.json` konumunda bir Codex plugin manifestini ve `.mcp.json` konumunda taşınabilir bir MCP config'ini içerir, böylece Codex yönelimli araçlar sunucuyu kendi kurulum tarifini icat etmeden keşfedebilir.

  Codex entegrasyonu, bu README'nin başka yerlerinde belgelenen aynı stdio başlatma yolunu kullanır:

  ```json
  {
    "mcpServers": {
      "arxiv": {
        "command": "uvx",
        "args": ["arxiv-mcp-server"]
      }
    }
  }
  ```

  Codex istemciniz plugin manifestlerini destekliyorsa, `./.codex-plugin/plugin.json`'a işaret edin. Yalnızca ham MCP konfigürasyonunu destekliyorsa, `./.mcp.json`'ı doğrudan kullanın.

  ### 🔌 MCP Entegrasyonu

  Bu konfigürasyonu MCP istemci konfigürasyon dosyanıza ekleyin:

  ```json
  {
      "mcpServers": {
          "arxiv-mcp-server": {
              "command": "uv",
              "args": [
                  "tool",
                  "run",
                  "arxiv-mcp-server",
                  "--storage-path", "/path/to/paper/storage"
              ]
          }
      }
  }
  ```

  Geliştirme için:

  ```json
  {
      "mcpServers": {
          "arxiv-mcp-server": {
              "command": "uv",
              "args": [
                  "--directory",
                  "path/to/cloned/arxiv-mcp-server",
                  "run",
                  "arxiv-mcp-server",
                  "--storage-path", "/path/to/paper/storage"
              ]
          }
      }
  }
  ```

  ### HTTP Aktarımı

  Stdio'nun pratik olmadığı sunucu dağıtımları için, sunucuyu Streamable HTTP ile çalıştırın:

  ```bash
  TRANSPORT=http HOST=127.0.0.1 PORT=8080 arxiv-mcp-server --storage-path /path/to/papers
  ```

  Ardından Streamable HTTP'yi destekleyen bir MCP istemcisini yapılandırın:

  ```json
  {
      "mcpServers": {
          "arxiv-mcp-server": {
              "type": "http",
              "url": "http://127.0.0.1:8080/mcp"
          }
      }
  }
  ```

  Varsayılan HTTP bağlama adresi `127.0.0.1`'dir. Streamable HTTP, MCP DNS rebinding korumasını varsayılan olarak etkinleştirir ve yapılandırılmış port için localhost adreslerine izin verir. Sunucuyu bir ters proxy aracılığıyla açığa çıkartıyorsanız, hızlandırıcının üzerinde kimlik doğrulaması ve ağ denetimleri eklemiş olmadığınız sürece localhost'a bağlı tutun; `ALLOWED_HOSTS` ve `ALLOWED_ORIGINS`'i proxy'nizin ilettiği harici host/origin değerlerine ayarlayın.

  ## 🔒 Güvenlik Notu

  arXiv makaleleri kullanıcı tarafından oluşturulmuş, güvenilmeyen içeriktir. Bu sunucu tarafından döndürülen makale metni prompt injection denemelerini içerebilir — bir AI asistanının davranışını manipüle etmek için tasarlanmış metin. Tüm makale içeriğini güvenilmeyen girdiye olarak değerlendirin.

  Üretim ortamlarında uygun sandboxing uygulayın ve ham makale içeriğini duyarlı araçlara veya verilere erişimi olan agentic boru hatlarına incelemesi olmadan beslemekten kaçının. Tam güvenlik politikası için [SECURITY.md](SECURITY.md)'ye bakın.

  ## 💡 Mevcut Araçlar

  ### Temel İş Akışı

  Derin makale araştırması için tipik iş akışı:

  ```
  search_papers → download_paper → read_paper
  ```

  `list_papers` yerel olarak neye sahip olduğunuzu gösterir. `semantic_search` yerel koleksiyon genelinde arama yapar.

  ---

  ### 1. Makale Arama
  Opsiyonel kategori, tarih ve boolean filtrelerine sahip arXiv'i arayın. arXiv'in 3 saniyelik hız sınırını otomatik olarak uygular. Hız sınırlanıyorsa, yeniden denemeden önce 60 saniye bekleyin.

  ```python
  result = await call_tool("search_papers", {
      "query": "\"KAN\" OR \"Kolmogorov-Arnold Networks\"",
      "max_results": 10,
      "date_from": "2024-01-01",
      "categories": ["cs.LG", "cs.AI"],
      "sort_by": "date"   # or "relevance" (default)
  })
  ```

  Desteklenen kategoriler `cs.AI`, `cs.LG`, `cs.CL`, `cs.CV`, `cs.NE`, `stat.ML`, `math.OC`, `quant-ph`, `eess.SP` ve daha fazlasını içerir. Tam liste için araç açıklamasına bakın.

  ### 2. Makale İndirme
  Bir makaleyi arXiv ID'sine göre indirin. İlk olarak HTML'yi dener, PDF'ye geri döner. Makaleyi `read_paper` ve `semantic_search` için yerel olarak depolar. Yanıt, istemcilerin çok büyük makaleleri istemci tarafı çıktı sınırını başarısız bir indirme ile karıştırmadan güvenli bir şekilde sayfalandırabilmesi için `content_length`, `returned_chars`, `next_start` ve `is_truncated` içerir.

  ```python
  result = await call_tool("download_paper", {
      "paper_id": "2401.12345"
  })

  # For very large papers, request bounded chunks:
  result = await call_tool("download_paper", {
      "paper_id": "2401.12345",
      "start": 0,
      "max_chars": 50000
  })
  ```

  > Yalnızca PDF'ye sahip eski makaleler için `[pdf]` extra'sını yükleyin: `uv tool install 'arxiv-mcp-server[pdf]'`

  ### 3. Makaleleri Listele
  Yerel olarak indirilen tüm makaleleri listeleyin. Yalnızca arXiv ID'lerini döndürür — içeriğe erişmek için `read_paper` kullanın.

  ```python
  result = await call_tool("list_papers", {})
  ```

  ### 4. Makale Oku
  Yerel olarak indirilen bir makalenin tam metnini markdown'da okuyun. **`download_paper`'ın ilk olarak çağrılması gerekir.** Büyük makaleleri sayfalandırmak için `start` ve `max_chars` ile döndürülen `next_start` değerini kullanın.

  ```python
  result = await call_tool("read_paper", {
      "paper_id": "2401.12345"
  })

  result = await call_tool("read_paper", {
      "paper_id": "2401.12345",
      "start": 50000,
      "max_chars": 50000
  })
  ```



  ## 📝 Araştırma İstemleri

  Sunucu akademik makaleleri analiz etmeye yardımcı olmak için özel istlemler sağlar:

  ### Makale Analiz İstemi
  Yalnızca bir makale ID'si gerektiren akademik makaleleri analiz etmek için kapsamlı bir iş akışı:

  ```python
  result = await call_prompt("deep-paper-analysis", {
      "paper_id": "2401.12345"
  })
  ```

  Bu istlem şunları içerir:
  - Mevcut araçları (list_papers, download_paper, read_paper, search_papers) kullanmak için detaylı talimatlar
  - Makale analizi için sistematik iş akışı
  - Kapsamlı analiz yapısı kapsam:
    - Yönetici özeti
    - Araştırma bağlamı
    - Metodoloji analizi
    - Sonuçlar değerlendirmesi
    - Pratik ve teorik çıkarımlar
  - Gelecek araştırma yönelimleri
  - Daha geniş etkiler

  ### Pro İstlem Paketi

  - `summarize_paper`: bir makale için özlü yapılandırılmış özet.
  - `compare_papers`: makale ID'leri arasında yan yana teknik karşılaştırma.
  - `literature_review`: bir konu ve opsiyonel makale seti genelinde tematik sentez.

  ## ⚙️ Konfigürasyon

  Komut satırı seçenekleri ve ortam değişkenleri aracılığıyla yapılandırın:

  | Ayar | Amaç | Varsayılan |
  |---------|---------|---------|
  | `--storage-path` | Makale depolama konumu | `~/.arxiv-mcp-server/papers` |
  | `MAX_RESULTS` | Maksimum arama sonuçları | `50` |
  | `REQUEST_TIMEOUT` | API zaman aşımı (saniye cinsinden) | `60` |
  | `TRANSPORT` | Aktarım türü: `stdio`, `http` veya `streamable-http` | `stdio` |
  | `HOST` | HTTP modunda bağlanacak host | `127.0.0.1` |
  | `PORT` | HTTP modunda dinlenecek port | `8000` |
  | `ALLOWED_HOSTS` | Streamable HTTP DNS rebinding koruması için virgülle ayrılmış ekstra izin verilen Host header değerleri | boş |
  | `ALLOWED_ORIGINS` | Streamable HTTP DNS rebinding koruması için virgülle ayrılmış ekstra izin verilen Origin header değerleri | boş |

  ## 🧪 Test Etme

  Test paketini çalıştırın:

  ```bash
  python -m pytest
  ```

  ## 🧪 Deneysel Özellikler

  > **Bu özellikler henüz tam olarak test edilmemiştir ve beklenmedik davranışlar gösterebilir. Dikkatli kullanın.**

  Aşağıdaki araçlar ek bağımlılıklar gerektirip aktif geliştirme aşamasındadır:

  ```bash
  uv pip install -e ".[pro]"
  ```

  ### Anlamsal Arama
  Yalnızca **yerel olarak indirilen** makaleleriniz üzerinde anlamsal benzerlik araması. Henüz bir makale indirilmediyse boş sonuçlar döndürür. `[pro]` bağımlılıklarını gerektirir.

  ```python
  result = await call_tool("semantic_search", {
      "query": "test-time adaptation in multimodal transformers",
      "max_results": 5
  })
  # or find papers similar to a known paper:
  result = await call_tool("semantic_search", {
      "paper_id": "2404.19756",
      "max_results": 5
  })
  ```

  ### Atıf Grafiği
  Semantic Scholar aracılığıyla referansları ve alıntı yapan makaleleri getirin. Herhangi bir arXiv ID'sinde çalışır — yerel indirmeye gerek yoktur.

  ```python
  result = await call_tool("citation_graph", {
      "paper_id": "2401.12345"
  })
  ```

  ### Araştırma Uyarıları
  Konu izlemeleri kaydedip son kontrolden sonra yayınlanan yeni makaleler için oylamaya alın. `search_papers` ile aynı sorgu sözdizimini kullanır.

  ```python
  # Watch'i kaydedin (idempotent — tekrar çağırılması varolan watch'i günceller)
  await call_tool("watch_topic", {
      "topic": "\"multi-agent reinforcement learning\"",
      "categories": ["cs.AI", "cs.LG"],
      "max_results": 10
  })

  # Tüm watch'leri kontrol edin — yalnızca son kontrolden sonra yayınlanan makaleleri döndürür
  result = await call_tool("check_alerts", {})

  # Tek bir watch'i kontrol edin
  result = await call_tool("check_alerts", {"topic": "\"multi-agent reinforcement learning\""})
  ```

  ### Gelişmiş İstlemler
  Daha derin araştırma iş akışları için `summarize_paper`, `compare_papers` ve `literature_review`. `[pro]` bağımlılıklarını gerektirir.

  ---

  ## 📄 Lisans

  Apache License 2.0 altında yayınlanmıştır. Ayrıntılar için LICENSE dosyasına bakın.

  ---

  <div align="center">

  Pearl Labs Ekibi tarafından ❤️ ile yapılmıştır

  <a href="https://glama.ai/mcp/servers/04dtxi5i5n"></a>
  </div>
---

[![PyPI Version](https://img.shields.io/pypi/v/arxiv-mcp-server.svg)](https://pypi.org/project/arxiv-mcp-server/)
[![PyPI Downloads](https://img.shields.io/pypi/dm/arxiv-mcp-server.svg)](https://pypi.org/project/arxiv-mcp-server/)
[![GitHub Stars](https://img.shields.io/github/stars/blazickjp/arxiv-mcp-server?style=flat)](https://github.com/blazickjp/arxiv-mcp-server/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/blazickjp/arxiv-mcp-server?style=flat)](https://github.com/blazickjp/arxiv-mcp-server/forks)
[![Tests](https://github.com/blazickjp/arxiv-mcp-server/actions/workflows/tests.yml/badge.svg)](https://github.com/blazickjp/arxiv-mcp-server/actions/workflows/tests.yml)
[![Python Version](https://img.shields.io/badge/python-3.11+-blue.svg)](https://www.python.org/downloads/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![smithery badge](https://smithery.ai/badge/arxiv-mcp-server)](https://smithery.ai/server/arxiv-mcp-server)
[![Install in VS Code](https://img.shields.io/badge/Install_in-VS_Code-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://vscode.dev/redirect/mcp/install?name=arxiv-mcp-server&config=%7B%22type%22%3A%22stdio%22%2C%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22arxiv-mcp-server%22%5D%7D)
[![Install in VS Code Insiders](https://img.shields.io/badge/Install_in-VS_Code_Insiders-24bfa5?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=arxiv-mcp-server&config=%7B%22type%22%3A%22stdio%22%2C%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22arxiv-mcp-server%22%5D%7D&quality=insiders)
[![Add to Kiro](https://kiro.dev/images/add-to-kiro.svg)](https://kiro.dev/launch/mcp/add?name=arxiv-mcp-server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22arxiv-mcp-server%22%5D%7D)
[![Codex Plugin](https://img.shields.io/badge/Codex-Plugin-412991?style=flat-square)](./.codex-plugin/plugin.json)

# ArXiv MCP Server

<!-- mcp-name: io.github.blazickjp/arxiv-mcp-server -->

> 🔍 Enable AI assistants to search and access arXiv papers through a simple MCP interface.

The ArXiv MCP Server provides a bridge between AI assistants and arXiv's research repository through the Model Context Protocol (MCP). It allows AI models to search for papers and access their content in a programmatic way.

<div align="center">
  
🤝 **[Contribute](https://github.com/blazickjp/arxiv-mcp-server/blob/main/CONTRIBUTING.md)** • 
📝 **[Report Bug](https://github.com/blazickjp/arxiv-mcp-server/issues)**

<a href="https://www.pulsemcp.com/servers/blazickjp-arxiv-mcp-server"></a>
</div>

## ✨ Core Features

- 🔎 **Paper Search**: Query arXiv papers with filters for date ranges and categories
- 📄 **Paper Access**: Download and read paper content
- 📋 **Paper Listing**: View all downloaded papers
- 🗃️ **Local Storage**: Papers are saved locally for faster access
- 📝 **Prompts**: A set of research prompts for paper analysis



## 🔒 Security

### Prompt Injection Risk

**Paper content retrieved from arXiv is untrusted external input.**

When an AI assistant downloads or reads a paper through this server, the paper's
text is passed directly into the model's context. A maliciously crafted paper
could embed adversarial instructions designed to hijack the AI's behavior — for
example, instructing it to exfiltrate data, invoke other tools with unintended
arguments, or override system-level instructions. This is a known class of
attack described by OWASP as **LLM01: Prompt Injection** and by the OWASP
Agentic AI framework as **AG01: Prompt Injection in LLM-Integrated Systems**.

### Recommended Mitigations

1. **Use read-only MCP configurations** — where possible, configure the MCP
   client so that the arxiv-mcp-server cannot trigger write operations or invoke
   other tools on your behalf.
2. **Review paper content before acting on AI summaries** — if an AI summary
   asks you to run commands or visit external URLs that were not part of your
   original request, treat that as a red flag.
3. **Be cautious in multi-tool setups** — agentic pipelines that combine this
   server with filesystem, shell, or browser tools are higher risk; a prompt
   injection in a paper could chain tool calls unexpectedly.
4. **Treat AI-generated summaries as data, not instructions** — always apply
   human judgment before executing any action the AI recommends after reading a
   paper.

### References

- [OWASP LLM01: Prompt Injection](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [OWASP Agentic AI - AG01: Prompt Injection](https://genai.owasp.org/llmrisk/ag01-prompt-injection/)

---

## 🚀 Quick Start

### Installing via Smithery

To install ArXiv Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/arxiv-mcp-server):

```bash
npx -y @smithery/cli install arxiv-mcp-server --client claude
```

### Installing via Claude Desktop (.mcpb)

The `.mcpb` bundle is the one-click install path for Claude Desktop on macOS. It bundles the server code and Python package dependencies, so users do not need `uv`, `pip`, or manual MCP JSON configuration. Python 3.11+ must still be available on the user's machine.

1. Download the artifact matching your Mac from the [latest release](https://github.com/blazickjp/arxiv-mcp-server/releases/latest):
   - Apple Silicon: `arxiv-mcp-server-darwin-arm64-<version>.mcpb`
   - Intel: `arxiv-mcp-server-darwin-x86_64-<version>.mcpb`
2. In Claude Desktop open **Settings → Extensions** (or drag-and-drop the file onto the Claude Desktop window).
3. Click **Install** and, when prompted, set your preferred paper storage directory (defaults to `~/.arxiv-mcp-server/papers`).

Claude Desktop launches the bundled server over stdio — no configuration file edits needed.

### Installing Manually

> **Important — use `uv tool install`, not npm/pnpm or `uv pip install`**
>
> This project publishes the supported server as a Python package on PyPI.
> Do **not** install `arxiv-mcp-server` with `npm install`, `pnpm add`, or
> `npx arxiv-mcp-server`: the npm package with this name is an unrelated
> third-party package and has its own Python-detection wrapper.
>
> Running `uv pip install arxiv-mcp-server` installs the package into the
> current virtual environment but does **not** place the `arxiv-mcp-server`
> executable on your `PATH`.  You must use `uv tool install` so that uv
> creates an isolated environment and exposes the executable globally:

```bash
uv tool install arxiv-mcp-server
```

After this, the `arxiv-mcp-server` command will be available on your `PATH`.

> **PDF fallback (older papers):** Most arXiv papers have an HTML version which
> the base install handles automatically. For older papers that only have a PDF,
> the server needs the `[pdf]` extra (pymupdf4llm). Install it with:
>
> ```bash
> uv tool install 'arxiv-mcp-server[pdf]'
> ```
You can verify it with:

```bash
arxiv-mcp-server --help
```

If you previously ran `uv pip install arxiv-mcp-server` and the command is
missing, uninstall it and re-install with `uv tool install` as shown above.

For development:

```bash
# Clone and set up development environment
git clone https://github.com/blazickjp/arxiv-mcp-server.git
cd arxiv-mcp-server

# Create and activate virtual environment
uv venv
source .venv/bin/activate

# Install with test dependencies (development only — no global executable)
uv pip install -e ".[test]"
```

### 🤖 Codex Plugin Integration

This repository now includes a Codex plugin manifest at `.codex-plugin/plugin.json`
and a portable MCP config at `.mcp.json` so Codex-oriented tooling can discover
the server without inventing its own install recipe.

The Codex integration uses the same stdio launch path documented elsewhere in
this README:

```json
{
  "mcpServers": {
    "arxiv": {
      "command": "uvx",
      "args": ["arxiv-mcp-server"]
    }
  }
}
```

If your Codex client supports plugin manifests, point it at
`./.codex-plugin/plugin.json`. If it only supports raw MCP configuration, use
`./.mcp.json` directly.

### 🔌 MCP Integration

Add this configuration to your MCP client config file:

```json
{
    "mcpServers": {
        "arxiv-mcp-server": {
            "command": "uv",
            "args": [
                "tool",
                "run",
                "arxiv-mcp-server",
                "--storage-path", "/path/to/paper/storage"
            ]
        }
    }
}
```

For Development:

```json
{
    "mcpServers": {
        "arxiv-mcp-server": {
            "command": "uv",
            "args": [
                "--directory",
                "path/to/cloned/arxiv-mcp-server",
                "run",
                "arxiv-mcp-server",
                "--storage-path", "/path/to/paper/storage"
            ]
        }
    }
}
```

### HTTP Transport

For server deployments where stdio is not practical, run the server with Streamable HTTP:

```bash
TRANSPORT=http HOST=127.0.0.1 PORT=8080 arxiv-mcp-server --storage-path /path/to/papers
```

Then configure an MCP client that supports Streamable HTTP:

```json
{
    "mcpServers": {
        "arxiv-mcp-server": {
            "type": "http",
            "url": "http://127.0.0.1:8080/mcp"
        }
    }
}
```

The default HTTP bind host is `127.0.0.1`. Streamable HTTP enables MCP DNS rebinding protection by default and allows loopback hosts for the configured port. If exposing the server through a reverse proxy, keep it bound to localhost unless you have added authentication and network controls upstream; set `ALLOWED_HOSTS` and `ALLOWED_ORIGINS` to the external host/origin values your proxy forwards.

## 🔒 Security Note

arXiv papers are user-generated, untrusted content. Paper text returned by this
server may contain prompt injection attempts — crafted text designed to manipulate
an AI assistant's behavior. Treat all paper content as untrusted input.

In production environments, apply appropriate sandboxing and avoid feeding raw
paper content into agentic pipelines that have access to sensitive tools or data
without review. See [SECURITY.md](SECURITY.md) for the full security policy.

## 💡 Available Tools

### Core Workflow

The typical workflow for deep paper research is:

```
search_papers → download_paper → read_paper
```

`list_papers` shows what you have locally. `semantic_search` searches across your local collection.

---

### 1. Paper Search
Search arXiv with optional category, date, and boolean filters. Enforces arXiv's 3-second rate limit automatically. If rate limited, wait 60 seconds before retrying.

```python
result = await call_tool("search_papers", {
    "query": "\"KAN\" OR \"Kolmogorov-Arnold Networks\"",
    "max_results": 10,
    "date_from": "2024-01-01",
    "categories": ["cs.LG", "cs.AI"],
    "sort_by": "date"   # or "relevance" (default)
})
```

Supported categories include `cs.AI`, `cs.LG`, `cs.CL`, `cs.CV`, `cs.NE`, `stat.ML`, `math.OC`, `quant-ph`, `eess.SP`, and more. See tool description for the full list.

### 2. Paper Download
Download a paper by its arXiv ID. Tries HTML first, falls back to PDF. Stores the paper locally for `read_paper` and `semantic_search`. The response includes `content_length`, `returned_chars`, `next_start`, and `is_truncated` so clients can safely page through very large papers without mistaking client-side output caps for failed downloads.

```python
result = await call_tool("download_paper", {
    "paper_id": "2401.12345"
})

# For very large papers, request bounded chunks:
result = await call_tool("download_paper", {
    "paper_id": "2401.12345",
    "start": 0,
    "max_chars": 50000
})
```

> For older papers that only have a PDF, install the `[pdf]` extra: `uv tool install 'arxiv-mcp-server[pdf]'`

### 3. List Papers
List all papers downloaded locally. Returns arXiv IDs only — use `read_paper` to access content.

```python
result = await call_tool("list_papers", {})
```

### 4. Read Paper
Read the full text of a locally downloaded paper in markdown. **Requires `download_paper` to be called first.** Use `start` and `max_chars` with the returned `next_start` value to page through large papers.

```python
result = await call_tool("read_paper", {
    "paper_id": "2401.12345"
})

result = await call_tool("read_paper", {
    "paper_id": "2401.12345",
    "start": 50000,
    "max_chars": 50000
})
```



## 📝 Research Prompts

The server offers specialized prompts to help analyze academic papers:

### Paper Analysis Prompt
A comprehensive workflow for analyzing academic papers that only requires a paper ID:

```python
result = await call_prompt("deep-paper-analysis", {
    "paper_id": "2401.12345"
})
```

This prompt includes:
- Detailed instructions for using available tools (list_papers, download_paper, read_paper, search_papers)
- A systematic workflow for paper analysis
- Comprehensive analysis structure covering:
  - Executive summary
  - Research context
  - Methodology analysis
  - Results evaluation
  - Practical and theoretical implications
- Future research directions
- Broader impacts

### Pro Prompt Pack

- `summarize_paper`: concise structured summary for one paper.
- `compare_papers`: side-by-side technical comparison across paper IDs.
- `literature_review`: thematic synthesis across a topic and optional paper set.

## ⚙️ Configuration

Configure through command-line options and environment variables:

| Setting | Purpose | Default |
|---------|---------|---------|
| `--storage-path` | Paper storage location | `~/.arxiv-mcp-server/papers` |
| `MAX_RESULTS` | Maximum search results | `50` |
| `REQUEST_TIMEOUT` | API timeout in seconds | `60` |
| `TRANSPORT` | Transport type: `stdio`, `http`, or `streamable-http` | `stdio` |
| `HOST` | Host to bind to in HTTP mode | `127.0.0.1` |
| `PORT` | Port to listen on in HTTP mode | `8000` |
| `ALLOWED_HOSTS` | Comma-separated extra allowed Host header values for Streamable HTTP DNS rebinding protection | empty |
| `ALLOWED_ORIGINS` | Comma-separated extra allowed Origin header values for Streamable HTTP DNS rebinding protection | empty |

## 🧪 Testing

Run the test suite:

```bash
python -m pytest
```

## 🧪 Experimental Features

> **These features are not yet fully tested and may behave unexpectedly. Use with caution.**

The following tools require additional dependencies and are under active development:

```bash
uv pip install -e ".[pro]"
```

### Semantic Search
Semantic similarity search over your **locally downloaded** papers only. Returns empty results if no papers have been downloaded yet. Requires `[pro]` dependencies.

```python
result = await call_tool("semantic_search", {
    "query": "test-time adaptation in multimodal transformers",
    "max_results": 5
})
# or find papers similar to a known paper:
result = await call_tool("semantic_search", {
    "paper_id": "2404.19756",
    "max_results": 5
})
```

### Citation Graph
Fetch references and citing papers via Semantic Scholar. Works on any arXiv ID — no local download required.

```python
result = await call_tool("citation_graph", {
    "paper_id": "2401.12345"
})
```

### Research Alerts
Save topic watches and poll for newly published papers since the last check. Uses the same query syntax as `search_papers`.

```python
# Register a watch (idempotent — calling again updates the existing watch)
await call_tool("watch_topic", {
    "topic": "\"multi-agent reinforcement learning\"",
    "categories": ["cs.AI", "cs.LG"],
    "max_results": 10
})

# Check all watches — returns only papers published since last check
result = await call_tool("check_alerts", {})

# Check a single watch
result = await call_tool("check_alerts", {"topic": "\"multi-agent reinforcement learning\""})
```

### Advanced Prompts
`summarize_paper`, `compare_papers`, and `literature_review` for deeper research workflows. Requires `[pro]` dependencies.

---

## 📄 License

Released under the Apache License 2.0. See the LICENSE file for details.

---

<div align="center">

Made with ❤️ by the Pearl Labs Team

<a href="https://glama.ai/mcp/servers/04dtxi5i5n"></a>
</div>
