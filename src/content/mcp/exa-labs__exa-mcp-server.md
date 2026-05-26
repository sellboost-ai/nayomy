---
name: "exa-labs/exa-mcp-server"
description: "A Model Context Protocol (MCP) server lets AI assistants like Claude use the Exa AI Search API for web searches. This setup allows AI models to get real-time web information in a safe and controlled way."
description_tr: "MCP sunucusu, Claude gibi AI asistanlarının Exa AI Search API'sini kullanarak web araması yapmasını sağlar. Bu kurulum, AI modellerine güvenli ve kontrollü bir şekilde gerçek zamanlı web bilgisine erişim imkanı verir."
category: "Search & Data Extraction"
repo: "exa-labs/exa-mcp-server"
stars: 4483
url: "https://github.com/exa-labs/exa-mcp-server"
body_length: 27862
license: "MIT"
language: "TypeScript"
homepage: "https://exa.ai/docs/reference/exa-mcp"
body_tr: |-
  # Exa MCP Sunucusu

  [![Cursor'a Yükle](https://img.shields.io/badge/Install_in-Cursor-000000?style=flat-square&logoColor=white)](https://cursor.com/en/install-mcp?name=exa&config=eyJuYW1lIjoiZXhhIiwidHlwZSI6Imh0dHAiLCJ1cmwiOiJodHRwczovL21jcC5leGEuYWkvbWNwIn0=)
  [![VS Code'a Yükle](https://img.shields.io/badge/Install_in-VS_Code-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://vscode.dev/redirect/mcp/install?name=exa&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmcp.exa.ai%2Fmcp%22%7D)
  [![npm version](https://badge.fury.io/js/exa-mcp-server.svg)](https://www.npmjs.com/package/exa-mcp-server)

  AI asistanlarını Exa'nın arama yeteneklerine bağlayın: web arama, kod arama ve şirket araştırması.

  **[Tam Dokümantasyon](https://docs.exa.ai/reference/exa-mcp)** | **[npm Paketi](https://www.npmjs.com/package/exa-mcp-server)** | **[Exa API Anahtarınızı Alın](https://dashboard.exa.ai/api-keys)**

  ## Kurulum

  Exa'nın barındırılan MCP sunucusuna bağlanın:

  ```
  https://mcp.exa.ai/mcp
  ```

  [API anahtarınızı alın](https://dashboard.exa.ai/api-keys)

  <details>
  <summary><b>Cursor</b></summary>

  `~/.cursor/mcp.json` dosyasına ekleyin:

  ```json
  {
    "mcpServers": {
      "exa": {
        "url": "https://mcp.exa.ai/mcp"
      }
    }
  }
  ```
  </details>

  <details>
  <summary><b>VS Code</b></summary>

  `.vscode/mcp.json` dosyasına ekleyin:

  ```json
  {
    "servers": {
      "exa": {
        "type": "http",
        "url": "https://mcp.exa.ai/mcp"
      }
    }
  }
  ```
  </details>

  <details>
  <summary><b>Claude Code</b></summary>

  ```bash
  claude mcp add --transport http exa https://mcp.exa.ai/mcp
  ```
  </details>

  <details>
  <summary><b>Claude Desktop</b></summary>

  Exa, yerel bir Claude Konektörü olarak kullanılabilir — yapılandırma dosyaları veya terminal komutlarına gerek yok.

  1. Claude Desktop **Ayarları**'nı (veya **Özelleştir**'i) açın ve **Konektörler**'e gidin
  2. Dizinde **Exa**'yı arayın
  3. Eklemek için **+**'ye tıklayın

  İşte bu kadar! Claude artık Exa arama araçlarına erişim sağlayacak.

  <details>
  <summary>Alternatif: manuel yapılandırma</summary>

  Yapılandırma dosyanıza (`macOS'ta ~/Library/Application Support/Claude/claude_desktop_config.json`, Windows'ta `%APPDATA%\Claude\claude_desktop_config.json`) ekleyin:

  ```json
  {
    "mcpServers": {
      "exa": {
        "command": "npx",
        "args": ["-y", "mcp-remote", "https://mcp.exa.ai/mcp"]
      }
    }
  }
  ```
  </details>
  </details>

  <details>
  <summary><b>Codex</b></summary>

  ```bash
  codex mcp add exa --url https://mcp.exa.ai/mcp
  ```
  </details>

  <details>
  <summary><b>OpenCode</b></summary>

  `opencode.json` dosyasına ekleyin:

  ```json
  {
    "mcp": {
      "exa": {
        "type": "remote",
        "url": "https://mcp.exa.ai/mcp",
        "enabled": true
      }
    }
  }
  ```
  </details>

  <details>
  <summary><b>Antigravity</b></summary>

  MCP Store panelini açın (yan paneldeki "..." açılır menüsünden), ardından özel bir sunucu ekleyin:

  ```
  https://mcp.exa.ai/mcp
  ```
  </details>

  <details>
  <summary><b>Windsurf</b></summary>

  `~/.codeium/windsurf/mcp_config.json` dosyasına ekleyin:

  ```json
  {
    "mcpServers": {
      "exa": {
        "serverUrl": "https://mcp.exa.ai/mcp"
      }
    }
  }
  ```
  </details>

  <details>
  <summary><b>Zed</b></summary>

  Zed ayarlarınıza ekleyin:

  ```json
  {
    "context_servers": {
      "exa": {
        "url": "https://mcp.exa.ai/mcp"
      }
    }
  }
  ```
  </details>

  <details>
  <summary><b>Gemini CLI</b></summary>

  `~/.gemini/settings.json` dosyasına ekleyin:

  ```json
  {
    "mcpServers": {
      "exa": {
        "httpUrl": "https://mcp.exa.ai/mcp"
      }
    }
  }
  ```
  </details>

  <details>
  <summary><b>v0 by Vercel</b></summary>

  v0'da **Prompt Tools** > **Add MCP**'yi seçin ve girin:

  ```
  https://mcp.exa.ai/mcp
  ```
  </details>

  <details>
  <summary><b>Warp</b></summary>

  **Ayarlar** > **MCP Servers** > **Add MCP Server**'a gidin ve ekleyin:

  ```json
  {
    "exa": {
      "url": "https://mcp.exa.ai/mcp"
    }
  }
  ```
  </details>

  <details>
  <summary><b>Kiro</b></summary>

  `~/.kiro/settings/mcp.json` dosyasına ekleyin:

  ```json
  {
    "mcpServers": {
      "exa": {
        "url": "https://mcp.exa.ai/mcp"
      }
    }
  }
  ```
  </details>

  <details>
  <summary><b>Roo Code</b></summary>

  Roo Code MCP yapılandırmasına ekleyin:

  ```json
  {
    "mcpServers": {
      "exa": {
        "type": "streamable-http",
        "url": "https://mcp.exa.ai/mcp"
      }
    }
  }
  ```
  </details>

  <details>
  <summary><b>Diğer İstemciler</b></summary>

  Uzak MCP'yi destekleyen istemciler için:

  ```json
  {
    "mcpServers": {
      "exa": {
        "url": "https://mcp.exa.ai/mcp"
      }
    }
  }
  ```

  mcp-remote'a ihtiyaç duyan istemciler için:

  ```json
  {
    "mcpServers": {
      "exa": {
        "command": "npx",
        "args": ["-y", "mcp-remote", "https://mcp.exa.ai/mcp"]
      }
    }
  }
  ```
  </details>

  <details>
  <summary><b>npm Paketi Aracılığıyla</b></summary>

  npm paketini API anahtarınızla kullanın. [API anahtarınızı alın](https://dashboard.exa.ai/api-keys).

  ```json
  {
    "mcpServers": {
      "exa": {
        "command": "npx",
        "args": ["-y", "exa-mcp-server"],
        "env": {
          "EXA_API_KEY": "your_api_key"
        }
      }
    }
  }
  ```
  </details>

  ## Kullanılabilir Araçlar

  **Varsayılan Olarak Etkin:**
  | Araç | Açıklama |
  | ---- | ----------- |
  | `web_search_exa` | Herhangi bir konu hakkında web'i arayın ve temiz, kullanıma hazır içerik alın |
  | `web_fetch_exa` | Bilinen bir URL'den belirli bir web sayfasının tam içeriğini alın |

  **Varsayılan Olarak Kapalı:**
  | Araç | Açıklama |
  | ---- | ----------- |
  | `web_search_advanced_exa` | Filtreler, alanlar, tarihler ve içerik seçenekleri üzerinde tam kontrolle gelişmiş web araması |

  **Kullanım Dışı** (geriye dönük uyumluluk için hala kullanılabilir):

  | Araç | Bunun yerine kullanın |
  | ---- | ----------- |
  | `get_code_context_exa` | `web_search_exa` |
  | `company_research_exa` | `web_search_advanced_exa` |
  | `crawling_exa` | `web_fetch_exa` |
  | `people_search_exa` | `web_search_advanced_exa` |
  | `linkedin_search_exa` | `web_search_advanced_exa` |
  | `deep_researcher_start` | [Research API](https://docs.exa.ai/reference/research/create-a-task) |
  | `deep_researcher_check` | [Research API](https://docs.exa.ai/reference/research/get-a-task) |
  | `deep_search_exa` | `web_search_advanced_exa` |

  `tools` parametresiyle ek araçları etkinleştirin:

  ```
  https://mcp.exa.ai/mcp?exaApiKey=YOUR_KEY&tools=web_search_exa,web_search_advanced_exa,web_fetch_exa
  ```

  ## Agent Beceriler (Claude Becerileri)

  Claude Code için hazır becerileri kullanın. Her beceri Claude'u belirli bir görev için Exa arama kullanmayı öğretir. Açılır menü içindeki içeriği kopyalayın ve Claude Code'a yapıştırın — geri kalanını halleder.

  <details>
  <summary><b>Şirket Araştırması</b></summary>

  Aşağıdaki içeriği kopyalayın ve Claude Code'a yapıştırın. MCP bağlantısını ve becerisini kurucağını yapacak.

  ````
  Adım 1: Exa MCP'yi kurun veya güncelleyin

  Exa MCP zaten MCP yapılandırmanızda varsa, önce kaldırıp yeni olanı kurun veya mevcut MCP yapılandırmanızı bu endpoint ile güncelleyin. Terminal'de bu komutu çalıştırın:

  claude mcp add --transport http exa "https://mcp.exa.ai/mcp?tools=web_search_advanced_exa"


  Adım 2: Bu Claude becerisini ekleyin

  ---
  name: company-research
  description: Exa arama kullanarak şirket araştırması. Şirket bilgisi, rakipler, haberler, finansal veriler, LinkedIn profilleri, şirket listeleri bulur. Şirketleri araştırırken, rekabet analizı yaparken, pazar araştırması yaparken veya şirket listeleri oluştururken kullanın.
  context: fork
  ---

  # Şirket Araştırması

  ## Araç Kısıtlaması (Kritik)

  SADECE `web_search_advanced_exa` kullanın. `web_search_exa` veya diğer Exa araçlarını KULLANMAYIN.

  ## Token İzolasyonu (Kritik)

  Exa aramalarını asıl bağlamda çalıştırmayın. Her zaman Task ajanları oluşturun:
  - Ajan Exa aramasını içinde çalıştırır
  - Ajan LLM zekasını kullanarak sonuçları işler
  - Ajan yalnızca sıkıştırılmış çıktı döndürür (kompakt JSON veya kısa markdown)
  - Ana bağlam arama hacmine bakılmaksızın temiz kalır

  ## Dinamik Ayarlama

  Sabit numResults yok. Kullanıcı niyetine göre ayarlayın:
  - Kullanıcı "birkaç" derse → 10-20
  - Kullanıcı "kapsamlı" derse → 50-100
  - Kullanıcı sayı belirtirse → eşleştirin
  - Belirsiz? Sorun: "Kaç şirket istiyorsunuz?"

  ## Sorgu Değişkeni

  Exa farklı ifadelendirmeler için farklı sonuçlar döndürür. Kapsam için:
  - 2-3 sorgu değişkeni oluşturun
  - Paralel çalıştırın
  - Birleştirin ve çoğaltmayı kaldırın

  ## Kategoriler

  İhtiyacınıza bağlı olarak uygun Exa `category` kullanın:
  - `company` → ana sayfalar, zengin metadata (çalışan sayısı, konum, finansman, gelir)
  - `news` → basın kapsamı, duyurular
  - `people` → LinkedIn profilleri (herkese açık veriler)
  - Kategori yok (`type: "auto"`) → genel web sonuçları, derinlemesine incelemeler, daha geniş bağlam

  Keşif için `category: "company"` ile başlayın, sonra daha derin araştırma için diğer kategorileri veya kategori olmayı kullanın.

  ### Kategoriye Özel Filtre Kısıtlamaları

  `category: "company"` kullanırken, bu parametreler 400 hatası verir:
  - `includeDomains` / `excludeDomains`
  - `startPublishedDate` / `endPublishedDate`
  - `startCrawlDate` / `endCrawlDate`

  Kategori olmadan araştırırken (veya `news` ile), alan ve tarih filtreleri iyi çalışır.

  **Evrensel kısıtlama:** `includeText` ve `excludeText` yalnızca **tek öğe dizilerini** destekler. Çok öğeli diziler tüm kategorilerde 400 hatası verir.

  ## LinkedIn

  Exa aracılığıyla herkese açık LinkedIn: `category: "people"`, başka filtre yok.
  Kimlik doğrulama gerektiren LinkedIn → Chrome tarayıcısında Claude kullanmaya dönün.

  ## Tarayıcı Geri Dönüşü

  Şu durumlarda Chrome tarayıcısında Claude'a otomatik geri dönüş yapın:
  - Exa yetersiz sonuç döndürür
  - İçerik kimlik doğrulama gerektiriyor
  - Dinamik sayfalar JavaScript gerektirir

  ## Örnekler

  ### Keşif: bir alanda şirketleri bulun
  ```
  web_search_advanced_exa {
    "query": "AI infrastructure startups San Francisco",
    "category": "company",
    "numResults": 20,
    "type": "auto"
  }
  ```

  ### Derinlemesine inceleme: belirli bir şirketi araştırın
  ```
  web_search_advanced_exa {
    "query": "Anthropic funding rounds valuation 2024",
    "type": "deep",
    "numResults": 10,
    "includeDomains": ["techcrunch.com", "crunchbase.com", "bloomberg.com"]
  }
  ```

  ### Haber kapsamı
  ```
  web_search_advanced_exa {
    "query": "Anthropic AI safety",
    "category": "news",
    "numResults": 15,
    "startPublishedDate": "2024-01-01"
  }
  ```

  ### LinkedIn profilleri
  ```
  web_search_advanced_exa {
    "query": "VP Engineering AI infrastructure",
    "category": "people",
    "numResults": 20
  }
  ```

  ## Çıktı Formatı

  Döndürün:
  1) Sonuçlar (yapılandırılmış liste; satır başına bir şirket)
  2) Kaynaklar (URL'ler; satır başına 1 satır ilgililik)
  3) Notlar (belirsizlik/çatışmalar)


  Adım 3: Kullanıcıdan Claude Code'u Yeniden Başlatmasını İsteyin

  Yapılandırma değişikliklerinin etkili olması için kullanıcıdan Claude Code'u yeniden başlatmasını istemelisiniz.
  ````

  </details>

  <details>
  <summary><b>Kod Araması</b></summary>

  Aşağıdaki içeriği kopyalayın ve Claude Code'a yapıştırın. MCP bağlantısını ve becerisini kuracak.

  ````
  Adım 1: Exa MCP'yi kurun veya güncelleyin

  Exa MCP zaten MCP yapılandırmanızda varsa, önce kaldırıp yeni olanı kurun veya mevcut MCP yapılandırmanızı bu endpoint ile güncelleyin. Terminal'de bu komutu çalıştırın:

  claude mcp add --transport http exa "https://mcp.exa.ai/mcp?tools=web_search_exa"


  Adım 2: Bu Claude becerisini ekleyin

  ---
  name: code-search-exa
  description: Exa kullanarak kod bağlamı. GitHub, StackOverflow ve teknik dokümentasyondan gerçek snippetler ve doküman bulur. Kod örnekleri, API sözdizimi, kütüphane dokümantasyonu veya hata ayıklama yardımı ararken kullanın.
  context: fork
  ---

  # Kod Bağlamı (Exa)

  ## Araç Kısıtlaması (Kritik)

  SADECE `web_search_exa` kullanın. Diğer Exa araçlarını KULLANMAYIN.

  ## Token İzolasyonu (Kritik)

  Exa'yı asıl bağlamda çalıştırmayın. Her zaman Task ajanları oluşturun:
  - Ajan `web_search_exa` çağrısı yapar
  - Ajan minimum uygulanabilir snippet(ler) + kısıtlamaları ayıklar
  - Ajan benzer sonuçların çoğaltmasını kaldırır (aynalar, forklarlar, tekrarlanan StackOverflow cevapları) sunmadan önce
  - Ajan kopyalanabilir snippet'ler + kısa açıklama döndürür
  - Ana bağlam arama hacmine bakılmaksızın temiz kalır

  ## Ne Zaman Kullanılır

  Herhangi bir programlama ile ilgili istek için bu aracı kullanın:
  - API kullanımı ve sözdizimi
  - SDK/kütüphane örnekleri
  - yapılandırma ve kurulum desenleri
  - framework "nasıl yapılır" soruları
  - yetkili snippet'lere ihtiyacınız olduğunda hata ayıklama

  ## Sorgu Yazma Desenleri (Yüksek Sinyal)

  İlgisiz sonuçları ve diller arası gürültüyü azaltmak için:
  - Her zaman sorguya **programlama dilini** ekleyin.
    - Örnek: sadece **"generics"** yerine **"Go generics"** kullanın.
  - Geçerli olduğunda, **framework + sürüm**'ü de ekleyin (örn. "Next.js 14", "React 19", "Python 3.12").
  - Sahip olduğunuz kesin tanımlayıcıları (fonksiyon/sınıf adları, config anahtarları, hata iletileri) ekleyin.

  ## Çıktı Formatı (Önerilir)

  Döndürün:
  1) En iyi minimal çalışan snippet(ler) (kopyala-yapıştır dostu tutun)
  2) Sürüm / kısıtlamalar / uyarılar hakkında notlar
  3) Kaynaklar (döndürülen bağlamda URL'ler varsa)

  Sunmadan önce:
  - Benzer sonuçların çoğaltmasını kaldırın ve yaklaşım başına yalnızca en iyi temsili snippet tutun.

  ## MCP Yapılandırması

  ```json
  {
    "servers": {
      "exa": {
        "type": "http",
        "url": "https://mcp.exa.ai/mcp?tools=web_search_exa"
      }
    }
  }
  ```


  Adım 3: Kullanıcıdan Claude Code'u Yeniden Başlatmasını İsteyin

  Yapılandırma değişikliklerinin etkili olması için kullanıcıdan Claude Code'u yeniden başlatmasını istemelisiniz.
  ````

  </details>

  <details>
  <summary><b>İnsan Araması</b></summary>

  Aşağıdaki içeriği kopyalayın ve Claude Code'a yapıştırın. MCP bağlantısını ve becerisini kuracak.

  ````
  Adım 1: Exa MCP'yi kurun veya güncelleyin

  Exa MCP zaten MCP yapılandırmanızda varsa, önce kaldırıp yeni olanı kurun veya mevcut MCP yapılandırmanızı bu endpoint ile güncelleyin. Terminal'de bu komutu çalıştırın:

  claude mcp add --transport http exa "https://mcp.exa.ai/mcp?tools=web_search_advanced_exa"


  Adım 2: Bu Claude becerisini ekleyin

  ---
  name: people-research
  description: Exa arama kullanarak insan araştırması. LinkedIn profilleri, profesyonel geçmişler, uzmanlar, takım üyeleri ve web'de herkese açık biyografiler bulur. İnsan ararken, uzmanları bulurken veya profesyonel profilleri ararken kullanın.
  context: fork
  ---

  # İnsan Araştırması

  ## Araç Kısıtlaması (Kritik)

  SADECE `web_search_advanced_exa` kullanın. `web_search_exa` veya diğer Exa araçlarını KULLANMAYIN.

  ## Token İzolasyonu (Kritik)

  Exa aramalarını asıl bağlamda çalıştırmayın. Her zaman Task ajanları oluşturun:
  - Ajan Exa aramasını içinde çalıştırır
  - Ajan LLM zekasını kullanarak sonuçları işler
  - Ajan yalnızca sıkıştırılmış çıktı döndürür (kompakt JSON veya kısa markdown)
  - Ana bağlam arama hacmine bakılmaksızın temiz kalır

  ## Dinamik Ayarlama

  Sabit numResults yok. Kullanıcı niyetine göre ayarlayın:
  - Kullanıcı "birkaç" derse → 10-20
  - Kullanıcı "kapsamlı" derse → 50-100
  - Kullanıcı sayı belirtirse → eşleştirin
  - Belirsiz? Sorun: "Kaç profil istiyorsunuz?"

  ## Sorgu Değişkeni

  Exa farklı ifadelendirmeler için farklı sonuçlar döndürür. Kapsam için:
  - 2-3 sorgu değişkeni oluşturun
  - Paralel çalıştırın
  - Birleştirin ve çoğaltmayı kaldırın

  ## Kategoriler

  İhtiyacınıza bağlı olarak uygun Exa `category` kullanın:
  - `people` → LinkedIn profilleri, herkese açık biyografiler (keşif için birincil)
  - `personal site` → kişisel bloglar, portfolio siteleri, about sayfaları
  - `news` → basın sözü, röportajlar, konuşmacı biyoları
  - Kategori yok (`type: "auto"`) → genel web sonuçları, daha geniş bağlam

  Profil keşfi için `category: "people"` ile başlayın, sonra belirli kişiler için daha derin araştırma için diğer kategorileri veya kategori olmayı kullanın.

  ### Kategoriye Özel Filtre Kısıtlamaları

  `category: "people"` kullanırken, bu parametreler hata verir:
  - `startPublishedDate` / `endPublishedDate`
  - `startCrawlDate` / `endCrawlDate`
  - `includeText` / `excludeText`
  - `excludeDomains`
  - `includeDomains` — **Yalnızca LinkedIn alanları** (örn. "linkedin.com")

  Kategori olmadan araştırırken, tüm parametreler kullanılabilir (`includeText`/`excludeText` hala yalnızca tek öğe dizilerini destekler).

  ## LinkedIn

  Exa aracılığıyla herkese açık LinkedIn: `category: "people"`, başka filtre yok.
  Kimlik doğrulama gerektiren LinkedIn → Chrome tarayıcısında Claude kullanmaya dönün.

  ## Tarayıcı Geri Dönüşü

  Şu durumlarda Chrome tarayıcısında Claude'a otomatik geri dönüş yapın:
  - Exa yetersiz sonuç döndürür
  - İçerik kimlik doğrulama gerektiriyor
  - Dinamik sayfalar JavaScript gerektirir

  ## Örnekler

  ### Keşif: rollerine göre insanları bulun
  ```
  web_search_advanced_exa {
    "query": "VP Engineering AI infrastructure",
    "category": "people",
    "numResults": 20,
    "type": "auto"
  }
  ```

  ### Sorgu değişkenleriyle
  ```
  web_search_advanced_exa {
    "query": "machine learning engineer San Francisco",
    "category": "people",
    "additionalQueries": ["ML engineer SF", "AI engineer Bay Area"],
    "numResults": 25,
    "type": "deep"
  }
  ```

  ### Derinlemesine inceleme: belirli bir kişiyi araştırın
  ```
  web_search_advanced_exa {
    "query": "Dario Amodei Anthropic CEO background",
    "type": "auto",
    "numResults": 15
  }
  ```

  ### Haber sözü
  ```
  web_search_advanced_exa {
    "query": "Dario Amodei interview",
    "category": "news",
    "numResults": 10,
    "startPublishedDate": "2024-01-01"
  }
  ```

  ## Çıktı Formatı

  Döndürün:
  1) Sonuçlar (ad, unvan, şirket, konum varsa)
  2) Kaynaklar (Profil URL'leri)
  3) Notlar (profil bütünlüğü, doğrulama durumu)


  Adım 3: Kullanıcıdan Claude Code'u Yeniden Başlatmasını İsteyin

  Yapılandırma değişikliklerinin etkili olması için kullanıcıdan Claude Code'u yeniden başlatmasını istemelisiniz.
  ````

  </details>

  <details>
  <summary><b>Finansal Rapor Araması</b></summary>

  Aşağıdaki içeriği kopyalayın ve Claude Code'a yapıştırın. MCP bağlantısını ve becerisini kuracak.

  ````
  Adım 1: Exa MCP'yi kurun veya güncelleyin

  Exa MCP zaten MCP yapılandırmanızda varsa, önce kaldırıp yeni olanı kurun veya mevcut MCP yapılandırmanızı bu endpoint ile güncelleyin. Terminal'de bu komutu çalıştırın:

  claude mcp add --transport http exa "https://mcp.exa.ai/mcp?tools=web_search_advanced_exa"


  Adım 2: Bu Claude becerisini ekleyin

  ---
  name: web-search-advanced-financial-report
  description: Exa gelişmiş aramasını kullanarak finansal raporları arayın. SEC dosyaları, kazanç raporları ve finansal belgeler bulmak için neredeyse tam filtre desteği. 10-K dosyaları, üç aylık kazançlar veya yıllık raporları ararken kullanın.
  context: fork
  ---

  # Web Araması Gelişmiş - Finansal Rapor Kategorisi

  ## Araç Kısıtlaması (Kritik)

  SADECE `web_search_advanced_exa`'yı `category: "financial report"` ile kullanın. Diğer kategorileri veya araçları KULLANMAYIN.

  ## Filtre Kısıtlamaları (Kritik)

  `financial report` kategorisinin bilinen bir kısı
---

# Exa MCP Server

[![Install in Cursor](https://img.shields.io/badge/Install_in-Cursor-000000?style=flat-square&logoColor=white)](https://cursor.com/en/install-mcp?name=exa&config=eyJuYW1lIjoiZXhhIiwidHlwZSI6Imh0dHAiLCJ1cmwiOiJodHRwczovL21jcC5leGEuYWkvbWNwIn0=)
[![Install in VS Code](https://img.shields.io/badge/Install_in-VS_Code-0098FF?style=flat-square&logo=visualstudiocode&logoColor=white)](https://vscode.dev/redirect/mcp/install?name=exa&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmcp.exa.ai%2Fmcp%22%7D)
[![npm version](https://badge.fury.io/js/exa-mcp-server.svg)](https://www.npmjs.com/package/exa-mcp-server)

Connect AI assistants to Exa's search capabilities: web search, code search, and company research.

**[Full Documentation](https://docs.exa.ai/reference/exa-mcp)** | **[npm Package](https://www.npmjs.com/package/exa-mcp-server)** | **[Get Your Exa API Key](https://dashboard.exa.ai/api-keys)**

## Installation

Connect to Exa's hosted MCP server:

```
https://mcp.exa.ai/mcp
```

[Get your API key](https://dashboard.exa.ai/api-keys)

<details>
<summary><b>Cursor</b></summary>

Add to `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "exa": {
      "url": "https://mcp.exa.ai/mcp"
    }
  }
}
```
</details>

<details>
<summary><b>VS Code</b></summary>

Add to `.vscode/mcp.json`:

```json
{
  "servers": {
    "exa": {
      "type": "http",
      "url": "https://mcp.exa.ai/mcp"
    }
  }
}
```
</details>

<details>
<summary><b>Claude Code</b></summary>

```bash
claude mcp add --transport http exa https://mcp.exa.ai/mcp
```
</details>

<details>
<summary><b>Claude Desktop</b></summary>

Exa is available as a native Claude Connector — no config files or terminal commands needed.

1. Open Claude Desktop **Settings** (or **Customize**) and go to **Connectors**
2. Search for **Exa** in the directory
3. Click **+** to add it

That's it! Claude will now have access to Exa's search tools.

<details>
<summary>Alternative: manual config</summary>

Add to your config file (`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS, `%APPDATA%\Claude\claude_desktop_config.json` on Windows):

```json
{
  "mcpServers": {
    "exa": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://mcp.exa.ai/mcp"]
    }
  }
}
```
</details>
</details>

<details>
<summary><b>Codex</b></summary>

```bash
codex mcp add exa --url https://mcp.exa.ai/mcp
```
</details>

<details>
<summary><b>OpenCode</b></summary>

Add to your `opencode.json`:

```json
{
  "mcp": {
    "exa": {
      "type": "remote",
      "url": "https://mcp.exa.ai/mcp",
      "enabled": true
    }
  }
}
```
</details>

<details>
<summary><b>Antigravity</b></summary>

Open the MCP Store panel (from the "..." dropdown in the side panel), then add a custom server with:

```
https://mcp.exa.ai/mcp
```
</details>

<details>
<summary><b>Windsurf</b></summary>

Add to `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "exa": {
      "serverUrl": "https://mcp.exa.ai/mcp"
    }
  }
}
```
</details>

<details>
<summary><b>Zed</b></summary>

Add to your Zed settings:

```json
{
  "context_servers": {
    "exa": {
      "url": "https://mcp.exa.ai/mcp"
    }
  }
}
```
</details>

<details>
<summary><b>Gemini CLI</b></summary>

Add to `~/.gemini/settings.json`:

```json
{
  "mcpServers": {
    "exa": {
      "httpUrl": "https://mcp.exa.ai/mcp"
    }
  }
}
```
</details>

<details>
<summary><b>v0 by Vercel</b></summary>

In v0, select **Prompt Tools** > **Add MCP** and enter:

```
https://mcp.exa.ai/mcp
```
</details>

<details>
<summary><b>Warp</b></summary>

Go to **Settings** > **MCP Servers** > **Add MCP Server** and add:

```json
{
  "exa": {
    "url": "https://mcp.exa.ai/mcp"
  }
}
```
</details>

<details>
<summary><b>Kiro</b></summary>

Add to `~/.kiro/settings/mcp.json`:

```json
{
  "mcpServers": {
    "exa": {
      "url": "https://mcp.exa.ai/mcp"
    }
  }
}
```
</details>

<details>
<summary><b>Roo Code</b></summary>

Add to your Roo Code MCP config:

```json
{
  "mcpServers": {
    "exa": {
      "type": "streamable-http",
      "url": "https://mcp.exa.ai/mcp"
    }
  }
}
```
</details>

<details>
<summary><b>Other Clients</b></summary>

For clients that support remote MCP:

```json
{
  "mcpServers": {
    "exa": {
      "url": "https://mcp.exa.ai/mcp"
    }
  }
}
```

For clients that need mcp-remote:

```json
{
  "mcpServers": {
    "exa": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://mcp.exa.ai/mcp"]
    }
  }
}
```
</details>

<details>
<summary><b>Via npm Package</b></summary>

Use the npm package with your API key. [Get your API key](https://dashboard.exa.ai/api-keys).

```json
{
  "mcpServers": {
    "exa": {
      "command": "npx",
      "args": ["-y", "exa-mcp-server"],
      "env": {
        "EXA_API_KEY": "your_api_key"
      }
    }
  }
}
```
</details>

## Available Tools

**Enabled by Default:**
| Tool | Description |
| ---- | ----------- |
| `web_search_exa` | Search the web for any topic and get clean, ready-to-use content |
| `web_fetch_exa` | Get the full content of a specific webpage from a known URL |

**Off by Default:**
| Tool | Description |
| ---- | ----------- |
| `web_search_advanced_exa` | Advanced web search with full control over filters, domains, dates, and content options |

**Deprecated** (still available for backwards compatibility):

| Tool | Use instead |
| ---- | ----------- |
| `get_code_context_exa` | `web_search_exa` |
| `company_research_exa` | `web_search_advanced_exa` |
| `crawling_exa` | `web_fetch_exa` |
| `people_search_exa` | `web_search_advanced_exa` |
| `linkedin_search_exa` | `web_search_advanced_exa` |
| `deep_researcher_start` | [Research API](https://docs.exa.ai/reference/research/create-a-task) |
| `deep_researcher_check` | [Research API](https://docs.exa.ai/reference/research/get-a-task) |
| `deep_search_exa` | `web_search_advanced_exa` |

Enable additional tools with the `tools` parameter:

```
https://mcp.exa.ai/mcp?exaApiKey=YOUR_KEY&tools=web_search_exa,web_search_advanced_exa,web_fetch_exa
```

## Agent Skills (Claude Skills)

Ready-to-use skills for Claude Code. Each skill teaches Claude how to use Exa search for a specific task. Copy the content inside a dropdown and paste it into Claude Code — it handles the rest.

<details>
<summary><b>Company Research</b></summary>

Copy the content below and paste it into Claude Code. It will set up the MCP connection and skill for you.

````
Step 1: Install or update Exa MCP

If Exa MCP already exists in your MCP configuration, either uninstall it first and install the new one, or update your existing MCP config with this endpoint. Run this command in your terminal:

claude mcp add --transport http exa "https://mcp.exa.ai/mcp?tools=web_search_advanced_exa"


Step 2: Add this Claude skill

---
name: company-research
description: Company research using Exa search. Finds company info, competitors, news, financials, LinkedIn profiles, builds company lists. Use when researching companies, doing competitor analysis, market research, or building company lists.
context: fork
---

# Company Research

## Tool Restriction (Critical)

ONLY use `web_search_advanced_exa`. Do NOT use `web_search_exa` or any other Exa tools.

## Token Isolation (Critical)

Never run Exa searches in main context. Always spawn Task agents:
- Agent runs Exa search internally
- Agent processes results using LLM intelligence
- Agent returns only distilled output (compact JSON or brief markdown)
- Main context stays clean regardless of search volume

## Dynamic Tuning

No hardcoded numResults. Tune to user intent:
- User says "a few" → 10-20
- User says "comprehensive" → 50-100
- User specifies number → match it
- Ambiguous? Ask: "How many companies would you like?"

## Query Variation

Exa returns different results for different phrasings. For coverage:
- Generate 2-3 query variations
- Run in parallel
- Merge and deduplicate

## Categories

Use appropriate Exa `category` depending on what you need:
- `company` → homepages, rich metadata (headcount, location, funding, revenue)
- `news` → press coverage, announcements
- `people` → LinkedIn profiles (public data)
- No category (`type: "auto"`) → general web results, deep dives, broader context

Start with `category: "company"` for discovery, then use other categories or no category for deeper research.

### Category-Specific Filter Restrictions

When using `category: "company"`, these parameters cause 400 errors:
- `includeDomains` / `excludeDomains`
- `startPublishedDate` / `endPublishedDate`
- `startCrawlDate` / `endCrawlDate`

When searching without a category (or with `news`), domain and date filters work fine.

**Universal restriction:** `includeText` and `excludeText` only support **single-item arrays**. Multi-item arrays cause 400 errors across all categories.

## LinkedIn

Public LinkedIn via Exa: `category: "people"`, no other filters.
Auth-required LinkedIn → use Claude in Chrome browser fallback.

## Browser Fallback

Auto-fallback to Claude in Chrome when:
- Exa returns insufficient results
- Content is auth-gated
- Dynamic pages need JavaScript

## Examples

### Discovery: find companies in a space
```
web_search_advanced_exa {
  "query": "AI infrastructure startups San Francisco",
  "category": "company",
  "numResults": 20,
  "type": "auto"
}
```

### Deep dive: research a specific company
```
web_search_advanced_exa {
  "query": "Anthropic funding rounds valuation 2024",
  "type": "deep",
  "numResults": 10,
  "includeDomains": ["techcrunch.com", "crunchbase.com", "bloomberg.com"]
}
```

### News coverage
```
web_search_advanced_exa {
  "query": "Anthropic AI safety",
  "category": "news",
  "numResults": 15,
  "startPublishedDate": "2024-01-01"
}
```

### LinkedIn profiles
```
web_search_advanced_exa {
  "query": "VP Engineering AI infrastructure",
  "category": "people",
  "numResults": 20
}
```

## Output Format

Return:
1) Results (structured list; one company per row)
2) Sources (URLs; 1-line relevance each)
3) Notes (uncertainty/conflicts)


Step 3: Ask User to Restart Claude Code

You should ask the user to restart Claude Code to have the config changes take effect.
````

</details>

<details>
<summary><b>Code Search</b></summary>

Copy the content below and paste it into Claude Code. It will set up the MCP connection and skill for you.

````
Step 1: Install or update Exa MCP

If Exa MCP already exists in your MCP configuration, either uninstall it first and install the new one, or update your existing MCP config with this endpoint. Run this command in your terminal:

claude mcp add --transport http exa "https://mcp.exa.ai/mcp?tools=web_search_exa"


Step 2: Add this Claude skill

---
name: code-search-exa
description: Code context using Exa. Finds real snippets and docs from GitHub, StackOverflow, and technical docs. Use when searching for code examples, API syntax, library documentation, or debugging help.
context: fork
---

# Code Context (Exa)

## Tool Restriction (Critical)

ONLY use `web_search_exa`. Do NOT use other Exa tools.

## Token Isolation (Critical)

Never run Exa in main context. Always spawn Task agents:
- Agent calls `web_search_exa`
- Agent extracts the minimum viable snippet(s) + constraints
- Agent deduplicates near-identical results (mirrors, forks, repeated StackOverflow answers) before presenting
- Agent returns copyable snippets + brief explanation
- Main context stays clean regardless of search volume

## When to Use

Use this tool for ANY programming-related request:
- API usage and syntax
- SDK/library examples
- config and setup patterns
- framework "how to" questions
- debugging when you need authoritative snippets

## Query Writing Patterns (High Signal)

To reduce irrelevant results and cross-language noise:
- Always include the **programming language** in the query.
  - Example: use **"Go generics"** instead of just **"generics"**.
- When applicable, also include **framework + version** (e.g., "Next.js 14", "React 19", "Python 3.12").
- Include exact identifiers (function/class names, config keys, error messages) when you have them.

## Output Format (Recommended)

Return:
1) Best minimal working snippet(s) (keep it copy/paste friendly)
2) Notes on version / constraints / gotchas
3) Sources (URLs if present in returned context)

Before presenting:
- Deduplicate similar results and keep only the best representative snippet per approach.

## MCP Configuration

```json
{
  "servers": {
    "exa": {
      "type": "http",
      "url": "https://mcp.exa.ai/mcp?tools=web_search_exa"
    }
  }
}
```


Step 3: Ask User to Restart Claude Code

You should ask the user to restart Claude Code to have the config changes take effect.
````

</details>

<details>
<summary><b>People Search</b></summary>

Copy the content below and paste it into Claude Code. It will set up the MCP connection and skill for you.

````
Step 1: Install or update Exa MCP

If Exa MCP already exists in your MCP configuration, either uninstall it first and install the new one, or update your existing MCP config with this endpoint. Run this command in your terminal:

claude mcp add --transport http exa "https://mcp.exa.ai/mcp?tools=web_search_advanced_exa"


Step 2: Add this Claude skill

---
name: people-research
description: People research using Exa search. Finds LinkedIn profiles, professional backgrounds, experts, team members, and public bios across the web. Use when searching for people, finding experts, or looking up professional profiles.
context: fork
---

# People Research

## Tool Restriction (Critical)

ONLY use `web_search_advanced_exa`. Do NOT use `web_search_exa` or any other Exa tools.

## Token Isolation (Critical)

Never run Exa searches in main context. Always spawn Task agents:
- Agent runs Exa search internally
- Agent processes results using LLM intelligence
- Agent returns only distilled output (compact JSON or brief markdown)
- Main context stays clean regardless of search volume

## Dynamic Tuning

No hardcoded numResults. Tune to user intent:
- User says "a few" → 10-20
- User says "comprehensive" → 50-100
- User specifies number → match it
- Ambiguous? Ask: "How many profiles would you like?"

## Query Variation

Exa returns different results for different phrasings. For coverage:
- Generate 2-3 query variations
- Run in parallel
- Merge and deduplicate

## Categories

Use appropriate Exa `category` depending on what you need:
- `people` → LinkedIn profiles, public bios (primary for discovery)
- `personal site` → personal blogs, portfolio sites, about pages
- `news` → press mentions, interviews, speaker bios
- No category (`type: "auto"`) → general web results, broader context

Start with `category: "people"` for profile discovery, then use other categories or no category for deeper research on specific individuals.

### Category-Specific Filter Restrictions

When using `category: "people"`, these parameters cause errors:
- `startPublishedDate` / `endPublishedDate`
- `startCrawlDate` / `endCrawlDate`
- `includeText` / `excludeText`
- `excludeDomains`
- `includeDomains` — **LinkedIn domains only** (e.g., "linkedin.com")

When searching without a category, all parameters are available (but `includeText`/`excludeText` still only support single-item arrays).

## LinkedIn

Public LinkedIn via Exa: `category: "people"`, no other filters.
Auth-required LinkedIn → use Claude in Chrome browser fallback.

## Browser Fallback

Auto-fallback to Claude in Chrome when:
- Exa returns insufficient results
- Content is auth-gated
- Dynamic pages need JavaScript

## Examples

### Discovery: find people by role
```
web_search_advanced_exa {
  "query": "VP Engineering AI infrastructure",
  "category": "people",
  "numResults": 20,
  "type": "auto"
}
```

### With query variations
```
web_search_advanced_exa {
  "query": "machine learning engineer San Francisco",
  "category": "people",
  "additionalQueries": ["ML engineer SF", "AI engineer Bay Area"],
  "numResults": 25,
  "type": "deep"
}
```

### Deep dive: research a specific person
```
web_search_advanced_exa {
  "query": "Dario Amodei Anthropic CEO background",
  "type": "auto",
  "numResults": 15
}
```

### News mentions
```
web_search_advanced_exa {
  "query": "Dario Amodei interview",
  "category": "news",
  "numResults": 10,
  "startPublishedDate": "2024-01-01"
}
```

## Output Format

Return:
1) Results (name, title, company, location if available)
2) Sources (Profile URLs)
3) Notes (profile completeness, verification status)


Step 3: Ask User to Restart Claude Code

You should ask the user to restart Claude Code to have the config changes take effect.
````

</details>

<details>
<summary><b>Financial Report Search</b></summary>

Copy the content below and paste it into Claude Code. It will set up the MCP connection and skill for you.

````
Step 1: Install or update Exa MCP

If Exa MCP already exists in your MCP configuration, either uninstall it first and install the new one, or update your existing MCP config with this endpoint. Run this command in your terminal:

claude mcp add --transport http exa "https://mcp.exa.ai/mcp?tools=web_search_advanced_exa"


Step 2: Add this Claude skill

---
name: web-search-advanced-financial-report
description: Search for financial reports using Exa advanced search. Near-full filter support for finding SEC filings, earnings reports, and financial documents. Use when searching for 10-K filings, quarterly earnings, or annual reports.
context: fork
---

# Web Search Advanced - Financial Report Category

## Tool Restriction (Critical)

ONLY use `web_search_advanced_exa` with `category: "financial report"`. Do NOT use other categories or tools.

## Filter Restrictions (Critical)

The `financial report` category has one known restriction:

- `excludeText` - NOT SUPPORTED (causes 400 error)

## Supported Parameters

### Core
- `query` (required)
- `numResults`
- `type` ("auto", "fast", "deep", "instant")

### Domain filtering
- `includeDomains` (e.g., ["sec.gov", "investor.apple.com"])
- `excludeDomains`

### Date filtering (ISO 8601) - Very useful for financial reports!
- `startPublishedDate` / `endPublishedDate`
- `startCrawlDate` / `endCrawlDate`

### Text filtering
- `includeText` (must contain ALL) - **single-item arrays only**; multi-item causes 400
- ~~`excludeText`~~ - NOT SUPPORTED

### Content extraction
- `textMaxCharacters` / `contextMaxCharacters`
- `enableSummary` / `summaryQuery`
- `enableHighlights` / `highlightsNumSentences` / `highlightsPerUrl` / `highlightsQuery`

### Additional
- `additionalQueries`
- `maxAgeHours` / `livecrawlTimeout`
- `subpages` / `subpageTarget`

## Token Isolation (Critical)

Never run Exa searches in main context. Always spawn Task agents:
- Agent calls `web_search_advanced_exa` with `category: "financial report"`
- Agent merges + deduplicates results before presenting
- Agent returns distilled output (brief markdown or compact JSON)
- Main context stays clean regardless of search volume

## When to Use

Use this category when you need:
- SEC filings (10-K, 10-Q, 8-K, S-1)
- Quarterly earnings reports
- Annual reports
- Investor presentations
- Financial statements

## Examples

SEC filings for a company:
```
web_search_advanced_exa {
  "query": "Anthropic SEC filing S-1",
  "category": "financial report",
  "numResults": 10,
  "type": "auto"
}
```

Recent earnings reports:
```
web_search_advanced_exa {
  "query": "Q4 2025 earnings report technology",
  "category": "financial report",
  "startPublishedDate": "2025-10-01",
  "numResults": 20,
  "type": "auto"
}
```

Specific filing type:
```
web_search_advanced_exa {
  "query": "10-K annual report AI companies",
  "category": "financial report",
  "includeDomains": ["sec.gov"],
  "startPublishedDate": "2025-01-01",
  "numResults": 15,
  "type": "deep"
}
```

Risk factors analysis:
```
web_search_advanced_exa {
  "query": "risk factors cybersecurity",
  "category": "financial report",
  "includeText": ["cybersecurity"],
  "numResults": 10,
  "enableHighlights": true,
  "highlightsQuery": "What are the main cybersecurity risks?"
}
```

## Output Format

Return:
1) Results (company name, filing type, date, key figures/highlights)
2) Sources (Filing URLs)
3) Notes (reporting period, any restatements, auditor notes)


Step 3: Ask User to Restart Claude Code

You should ask the user to restart Claude Code to have the config changes take effect.
````

</details>

<details>
<summary><b>Research Paper Search</b></summary>

Copy the content below and paste it into Claude Code. It will set up the MCP connection and skill for you.

````
Step 1: Install or update Exa MCP

If Exa MCP already exists in your MCP configuration, either uninstall it first and install the new one, or update your existing MCP config with this endpoint. Run this command in your terminal:

claude mcp add --transport http exa "https://mcp.exa.ai/mcp?tools=web_search_advanced_exa"


Step 2: Add this Claude skill

---
name: web-search-advanced-research-paper
description: Search for research papers and academic content using Exa advanced search. Full filter support including date ranges and text filtering. Use when searching for academic papers, arXiv preprints, or scientific research.
context: fork
---

# Web Search Advanced - Research Paper Category

## Tool Restriction (Critical)

ONLY use `web_search_advanced_exa` with `category: "research paper"`. Do NOT use other categories or tools.

## Full Filter Support

The `research paper` category supports ALL available parameters:

### Core
- `query` (required)
- `numResults`
- `type` ("auto", "fast", "deep", "instant")

### Domain filtering
- `includeDomains` (e.g., ["arxiv.org", "openreview.net"])
- `excludeDomains`

### Date filtering (ISO 8601)
- `startPublishedDate` / `endPublishedDate`
- `startCrawlDate` / `endCrawlDate`

### Text filtering
- `includeText` (must contain ALL)
- `excludeText` (exclude if ANY match)

**Array size restriction:** `includeText` and `excludeText` only support **single-item arrays**. Multi-item arrays (2+ items) cause 400 errors. To match multiple terms, put them in the `query` string or run separate searches.

### Content extraction
- `textMaxCharacters` / `contextMaxCharacters`
- `enableSummary` / `summaryQuery`
- `enableHighlights` / `highlightsNumSentences` / `highlightsPerUrl` / `highlightsQuery`

### Additional
- `userLocation`
- `moderation`
- `additionalQueries`
- `maxAgeHours` / `livecrawlTimeout`
- `subpages` / `subpageTarget`

## Token Isolation (Critical)

Never run Exa searches in main context. Always spawn Task agents:
- Agent calls `web_search_advanced_exa` with `category: "research paper"`
- Agent merges + deduplicates results before presenting
- Agent returns distilled output (brief markdown or compact JSON)
- Main context stays clean regardless of search volume

## When to Use

Use this category when you need:
- Academic papers from arXiv, OpenReview, PubMed, etc.
- Scientific research on specific topics
- Literature reviews with date filtering
- Papers containing specific methodologies or terms

## Examples

Recent papers on a topic:
```
web_search_advanced_exa {
  "query": "transformer attention mechanisms efficiency",
  "category": "research paper",
  "startPublishedDate": "2024-01-01",
  "numResults": 15,
  "type": "auto"
}
```

Papers from specific venues:
```
web_search_advanced_exa {
  "query": "large language model agents",
  "category": "research paper",
  "includeDomains": ["arxiv.org", "openreview.net"],
  "includeText": ["LLM"],
  "numResults": 20,
  "type": "deep"
}
```

## Output Format

Return:
1) Results (structured list with title, authors, date, abstract summary)
2) Sources (URLs with publication venue)
3) Notes (methodology differences, conflicting findings)


Step 3: Ask User to Restart Claude Code

You should ask the user to restart Claude Code to have the config changes take effect.
````

</details>

<details>
<summary><b>Personal Site Search</b></summary>

Copy the content below and paste it into Claude Code. It will set up the MCP connection and skill for you.

````
Step 1: Install or update Exa MCP

If Exa MCP already exists in your MCP configuration, either uninstall it first and install the new one, or update your existing MCP config with this endpoint. Run this command in your terminal:

claude mcp add --transport http exa "https://mcp.exa.ai/mcp?tools=web_search_advanced_exa"


Step 2: Add this Claude skill

---
name: web-search-advanced-personal-site
description: Search personal websites and blogs using Exa advanced search. Full filter support for finding individual perspectives, portfolios, and personal blogs. Use when searching for personal sites, blog posts, or portfolio websites.
context: fork
---

# Web Search Advanced - Personal Site Category

## Tool Restriction (Critical)

ONLY use `web_search_advanced_exa` with `category: "personal site"`. Do NOT use other categories or tools.

## Full Filter Support

The `personal site` category supports ALL available parameters:

### Core
- `query` (required)
- `numResults`
- `type` ("auto", "fast", "deep", "instant")

### Domain filtering
- `includeDomains`
- `excludeDomains` (e.g., exclude Medium if you want independent blogs)

### Date filtering (ISO 8601)
- `startPublishedDate` / `endPublishedDate`
- `startCrawlDate` / `endCrawlDate`

### Text filtering
- `includeText` (must contain ALL)
- `excludeText` (exclude if ANY match)

**Array size restriction:** `includeText` and `excludeText` only support **single-item arrays**. Multi-item arrays (2+ items) cause 400 errors. To match multiple terms, put them in the `query` string or run separate searches.

### Content extraction
- `textMaxCharacters` / `contextMaxCharacters`
- `enableSummary` / `summaryQuery`
- `enableHighlights` / `highlightsNumSentences` / `highlightsPerUrl` / `highlightsQuery`

### Additional
- `additionalQueries`
- `maxAgeHours` / `livecrawlTimeout`
- `subpages` / `subpageTarget` - useful for exploring portfolio sites

## Token Isolation (Critical)

Never run Exa searches in main context. Always spawn Task agents:
- Agent calls `web_search_advanced_exa` with `category: "personal site"`
- Agent merges + deduplicates results before presenting
- Agent returns distilled output (brief markdown or compact JSON)
- Main context stays clean regardless of search volume

## When to Use

Use this category when you need:
- Individual expert opinions and experiences
- Personal blog posts on technical topics
- Portfolio websites
- Independent analysis (not corporate content)
- Deep dives and tutorials from practitioners

## Examples

Technical blog posts:
```
web_search_advanced_exa {
  "query": "building production LLM applications lessons learned",
  "category": "personal site",
  "numResults": 15,
  "type": "deep",
  "enableSummary": true
}
```

Recent posts on a topic:
```
web_search_advanced_exa {
  "query": "Rust async runtime comparison",
  "category": "personal site",
  "startPublishedDate": "2025-01-01",
  "numResults": 10,
  "type": "auto"
}
```

Exclude aggregators:
```
web_search_advanced_exa {
  "query": "startup founder lessons",
  "category": "personal site",
  "excludeDomains": ["medium.com", "substack.com"],
  "numResults": 15,
  "type": "auto"
}
```

## Output Format

Return:
1) Results (title, author/site name, date, key insights)
2) Sources (URLs)
3) Notes (author expertise, potential biases, depth of coverage)


Step 3: Ask User to Restart Claude Code

You should ask the user to restart Claude Code to have the config changes take effect.
````

</details>

## Links

- [Documentation](https://docs.exa.ai/reference/exa-mcp)
- [npm Package](https://www.npmjs.com/package/exa-mcp-server)
- [Get Your Exa API Key](https://dashboard.exa.ai/api-keys)


<br>

Built with ❤️ by Exa
