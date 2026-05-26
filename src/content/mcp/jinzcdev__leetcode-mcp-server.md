---
name: "jinzcdev/leetcode-mcp-server"
description: "MCP server enabling automated access to LeetCode's programming problems, solutions, submissions and public data with optional authentication for user-specific features (e.g., notes), supporting both leetcode.com (global) and leetcode.cn (China) sites."
description_tr: "LeetCode'un programlama problemleri, çözümleri, submissions ve genel verilerine otomatik erişim sağlayan MCP server. İsteğe bağlı authentication ile kullanıcıya özel özellikleri (örn. notlar) destekler ve hem leetcode.com (global) hem de leetcode.cn (Çin) sitelerini kapsar."
category: "Coding Agents"
repo: "jinzcdev/leetcode-mcp-server"
stars: 115
url: "https://github.com/jinzcdev/leetcode-mcp-server"
body_length: 16729
license: "MIT"
language: "TypeScript"
homepage: "https://www.npmjs.com/package/@jinzcdev/leetcode-mcp-server"
body_tr: |-
  # LeetCode MCP Server

  [![NPM Version](https://img.shields.io/npm/v/@jinzcdev/leetcode-mcp-server.svg)](https://www.npmjs.com/package/@jinzcdev/leetcode-mcp-server)
  [![NPM Downloads](https://img.shields.io/npm/dm/@jinzcdev/leetcode-mcp-server.svg)](https://www.npmjs.com/package/@jinzcdev/leetcode-mcp-server)
  [![GitHub License](https://img.shields.io/github/license/jinzcdev/leetcode-mcp-server.svg)](./LICENSE)
  [![Chinese Doc](https://img.shields.io/badge/简体中文-查看-orange)](README_zh-CN.md)
  [![Stars](https://img.shields.io/github/stars/jinzcdev/leetcode-mcp-server)](https://github.com/jinzcdev/leetcode-mcp-server)

  LeetCode MCP Server, [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) sunucusu olup LeetCode API'leri ile kusursuz entegrasyon sağlayarak LeetCode'un programlama problemleri, yarışmaları, çözümleri ve kullanıcı verileri ile gelişmiş otomasyon ve akıllı etkileşim imkanı sunar.

  <a href="https://glama.ai/mcp/servers/@jinzcdev/leetcode-mcp-server">
    
  </a>

  ## Özellikler

  - 🌐 **Çoklu Site Desteği**: leetcode.com (Global) ve leetcode.cn (Çin) platformlarını destekler
  - 📊 **Problem Verisi Alma**: Detaylı problem açıklamaları, kısıtlamalar, örnekler, resmi editöryaller ve kullanıcı tarafından gönderilen çözümleri alır
  - 👤 **Kullanıcı Verilerine Erişim**: Kullanıcı profilleri, gönderim geçmişi ve yarışma performansını alır
  - 🔒 **Özel Veri Erişimi**: Kullanıcı notları oluşturur ve sorgular, problem çözme ilerleme durumunu takip eder ve gönderim detaylarını analiz eder (AC/WA analizi)
  - 🔍 **Gelişmiş Arama Yetenekleri**: Problemleri etiketlere, zorluk seviyelerine, kategorilere ve anahtar kelimelere göre filtreler
  - 📅 **Günlük Sorunu Erişimi**: Günlük sorunu problemlerine kolayca erişir

  ## Ön Koşullar

  1. Node.js (v20.x veya üzeri)
  2. (İsteğe bağlı) Kimliği doğrulanmış API erişimi için LeetCode session cookie

  ## Kurulum

  ### Smithery Üzerinden Kurulum

  leetcode-mcp-server'ı Claude Desktop için otomatik olarak [Smithery](https://smithery.ai/server/@jinzcdev/leetcode-mcp-server) üzerinden kurmak için:

  ```bash
  npx -y @smithery/cli install @jinzcdev/leetcode-mcp-server --client claude
  ```

  ### Manuel Kurulum

  ```bash
  # npm'den kur
  npm install @jinzcdev/leetcode-mcp-server -g

  # Veya Global site konfigürasyonu ile çalıştır
  npx -y @jinzcdev/leetcode-mcp-server --site global

  # Kimlik doğrulama ile çalıştır (özel verilere erişim için)
  npx -y @jinzcdev/leetcode-mcp-server --site global --session <YOUR_LEETCODE_SESSION_COOKIE>
  ```

  Alternatif olarak, repository'yi clone edip yerel olarak çalıştırabilirsiniz:

  ```bash
  # Repository'yi clone et
  git clone https://github.com/jinzcdev/leetcode-mcp-server.git

  # Proje dizinine git
  cd leetcode-mcp-server

  # Projeyi derle
  npm install && npm run build

  # Sunucuyu çalıştır
  node build/index.js --site global
  ```

  ## Kullanım

  ### Visual Studio Code Entegrasyonu

  Aşağıdaki JSON konfigürasyonunu User Settings (JSON) dosyanıza ekleyin. `Ctrl/Cmd + Shift + P` tuşlarına basıp `Preferences: Open User Settings (JSON)` arayarak erişebilirsiniz.

  #### Seçenek 1: Ortam Değişkenlerini Kullanma

  ```json
  {
    "mcp": {
      "servers": {
        "leetcode": {
          "type": "stdio",
          "command": "npx",
          "args": ["-y", "@jinzcdev/leetcode-mcp-server"],
          "env": {
            "LEETCODE_SITE": "global",
            "LEETCODE_SESSION": "<YOUR_LEETCODE_SESSION_COOKIE>"
          }
        }
      }
    }
  }
  ```

  #### Seçenek 2: Komut Satırı Argümanlarını Kullanma

  ```json
  {
    "mcp": {
      "servers": {
        "leetcode": {
          "type": "stdio",
          "command": "npx",
          "args": [
            "-y",
            "@jinzcdev/leetcode-mcp-server",
            "--site",
            "global",
            "--session",
            "<YOUR_LEETCODE_SESSION_COOKIE>"
          ]
        }
      }
    }
  }
  ```

  LeetCode Çin sitesi için `--site` parametresini `cn` olarak değiştirin.

  > [!TIP]
  >
  > Sunucu aşağıdaki isteğe bağlı ortam değişkenlerini destekler:
  >
  > - `LEETCODE_SITE`: LeetCode API endpoint ('global' veya 'cn', varsayılan: 'global')
  > - `LEETCODE_SESSION`: Kimliği doğrulanmış API erişimi için LeetCode session cookie (varsayılan: boş)
  >
  > **Öncelik Notu**:
  > Her iki parametre de belirtildiğinde komut satırı argümanları ortam değişkenlerine göre öncelik alır. Örneğin:
  >
  > - Eğer `LEETCODE_SITE=cn` ayarlanmış fakat `leetcode-mcp-server --site global` komutunu çalıştırırsanız, sunucu `global` kullanacaktır.
  > - Eğer `LEETCODE_SESSION` var fakat `--session "new_cookie"` sağlarsanız, komut satırı session değeri kullanılacaktır.

  ## Mevcut Araçlar

  ### Problemler

  | Araç                    | Global | CN  | Kimlik Doğrulama Gerekli | Açıklama                                                  |
  | ----------------------- | :----: | :-: | :----------------------: | --------------------------------------------------------- |
  | **get_daily_challenge** |   ✅   | ✅  |           ❌            | Bugünün LeetCode Günlük Sorusunu alır                     |
  | **get_problem**         |   ✅   | ✅  |           ❌            | Belirli bir LeetCode probleminin detaylarını alır         |
  | **search_problems**     |   ✅   | ✅  |           ❌            | Çoklu filtre kriterleri ile LeetCode problemlerini arar   |

  ### Kullanıcılar

  | Araç                              | Global | CN  | Kimlik Doğrulama Gerekli | Açıklama                                                  |
  | --------------------------------- | :----: | :-: | :----------------------: | --------------------------------------------------------- |
  | **get_user_profile**              |   ✅   | ✅  |           ❌            | LeetCode kullanıcısının profil bilgilerini alır           |
  | **get_user_contest_ranking**      |   ✅   | ✅  |           ❌            | Kullanıcının yarışma sıralama istatistiklerini alır       |
  | **get_recent_ac_submissions**     |   ✅   | ✅  |           ❌            | Kullanıcının son kabul edilen gönderimlerini alır         |
  | **get_recent_submissions**        |   ✅   | ❌  |           ❌            | Kullanıcının son gönderim geçmişini alır                  |
  | **get_user_status**               |   ✅   | ✅  |           ✅            | Mevcut kullanıcının durumunu alır                         |
  | **get_problem_submission_report** |   ✅   | ✅  |           ✅            | Belirli bir sorun için detaylı gönderim analizi sağlar    |
  | **get_problem_progress**          |   ✅   | ✅  |           ✅            | Mevcut kullanıcının problem çözme ilerleme durumunu alır  |
  | **get_all_submissions**           |   ✅   | ✅  |           ✅            | Mevcut kullanıcının gönderim geçmişini alır               |

  ### Gönderimler

  | Araç                | Global | CN  | Kimlik Doğrulama Gerekli | Açıklama                                                        |
  | ------------------- | :----: | :-: | :----------------------: | --------------------------------------------------------------- |
  | **run_code**        |   ✅   | ✅  |           ✅            | Problem için kod çalıştırır ve `/check/` bitene kadar bekler    |
  | **submit_solution** |   ✅   | ✅  |           ✅            | Problem için kod gönderir ve `/check/` bitene kadar bekler      |

  ### Notlar

  | Araç             | Global | CN  | Kimlik Doğrulama Gerekli | Açıklama                                           |
  | ---------------- | :----: | :-: | :----------------------: | -------------------------------------------------- |
  | **search_notes** |   ❌   | ✅  |           ✅            | Filtreleme seçenekleri ile kullanıcı notlarını arar |
  | **get_note**     |   ❌   | ✅  |           ✅            | Soru ID'sine göre belirli bir sorun için notları alır |
  | **create_note**  |   ❌   | ✅  |           ✅            | Belirli bir sorun için yeni not oluşturur          |
  | **update_note**  |   ❌   | ✅  |           ✅            | Mevcut notu yeni içerik ile günceller              |

  ### Çözümler

  | Araç                       | Global | CN  | Kimlik Doğrulama Gerekli | Açıklama                                                     |
  | -------------------------- | :----: | :-: | :----------------------: | ------------------------------------------------------------ |
  | **list_problem_solutions** |   ✅   | ✅  |           ❌            | Belirli bir sorun için topluluk çözümlerinin listesini alır  |
  | **get_problem_solution**   |   ✅   | ✅  |           ❌            | Belirli bir çözümün tam içeriğini alır                       |

  ## Araç Parametreleri

  ### Problemler

  - **get_daily_challenge** - Bugünün LeetCode Günlük Sorusunu tam detaylar ile alır

    - Parametre gerekli değildir

  - **get_problem** - Belirli bir LeetCode probleminin detaylarını alır

    - `titleSlug`: Problemin URL slug/tanımlayıcısı (string, zorunlu)

  - **search_problems** - Çoklu filtre kriterine göre LeetCode problemlerini arar
    - `category`: Problem kategori filtresi (string, isteğe bağlı, varsayılan: "all-code-essentials")
    - `tags`: Problemleri filtrelemek için konu etiketleri listesi (string[], isteğe bağlı)
    - `difficulty`: Problem zorluk seviyesi filtresi (enum: "EASY", "MEDIUM", "HARD", isteğe bağlı)
    - `searchKeywords`: Problem başlıkları ve açıklamalarında aranacak anahtar kelimeler (string, isteğe bağlı)
    - `limit`: Döndürülecek maksimum problem sayısı (number, isteğe bağlı, varsayılan: 10)
    - `offset`: Atlanacak problem sayısı (number, isteğe bağlı)

  ### Kullanıcılar

  - **get_user_profile** - LeetCode kullanıcısı hakkında profil bilgilerini alır

    - `username`: LeetCode kullanıcı adı (string, zorunlu)

  - **get_user_contest_ranking** - Kullanıcının yarışma sıralama bilgilerini alır

    - `username`: LeetCode kullanıcı adı (string, zorunlu)
    - `attended`: Yalnızca kullanıcının katıldığı yarışmaları dahil etmek isteyip istemediğinizi belirtir (boolean, isteğe bağlı, varsayılan: true)

  - **get_recent_submissions** - Kullanıcının LeetCode Global'deki son gönderimlerini alır

    - `username`: LeetCode kullanıcı adı (string, zorunlu)
    - `limit`: Döndürülecek maksimum gönderim sayısı (number, isteğe bağlı, varsayılan: 10)

  - **get_recent_ac_submissions** - Kullanıcının son kabul edilen gönderimlerini alır

    - `username`: LeetCode kullanıcı adı (string, zorunlu)
    - `limit`: Döndürülecek maksimum gönderim sayısı (number, isteğe bağlı, varsayılan: 10)

  - **get_user_status** - Mevcut kullanıcının durumunu alır

    - Parametre gerekli değildir

  - **get_problem_submission_report** - Belirli bir gönderim hakkında detaylı bilgi alır

    - `id`: Sayısal gönderim ID'si (number, zorunlu)

  - **get_problem_progress** - Mevcut kullanıcının problem çözme ilerleme durumunu alır

    - `offset`: Atlanacak soru sayısı (number, isteğe bağlı, varsayılan: 0)
    - `limit`: Döndürülecek maksimum soru sayısı (number, isteğe bağlı, varsayılan: 100)
    - `questionStatus`: Soru durumuna göre filtrele (enum: "ATTEMPTED", "SOLVED", isteğe bağlı)
    - `difficulty`: Zorluk seviyelerine göre filtrele (string[], isteğe bağlı)

  - **get_all_submissions** - Kullanıcının gönderimlerinin sayfalı listesini alır
    - `limit`: Döndürülecek maksimum gönderim sayısı (number, varsayılan: 20)
    - `offset`: Atlanacak gönderim sayısı (number, varsayılan: 0)
    - `questionSlug`: İsteğe bağlı problem tanımlayıcı (string, isteğe bağlı)
    - `lang`: Programlama dili filtresi (string, isteğe bağlı, yalnızca CN)
    - `status`: Gönderim durumu filtresi (enum: "AC", "WA", isteğe bağlı, yalnızca CN)
    - `lastKey`: Sonraki sayfa için pagination tokeni (string, isteğe bağlı, yalnızca CN)

  ### Gönderimler

  - **run_code** - Belirli bir problem için kod çalıştırır ve bitene kadar bekler (kimlik doğrulama gereklidir)

    - `titleSlug`: Problemin URL slug/tanımlayıcısı (string, zorunlu)
    - `lang`: Programlama dili (string enum, zorunlu)
    - `typedCode`: Çalıştırılacak kaynak kod (string, zorunlu)
    - `dataInput`: Çalıştırmak için özel input (string, isteğe bağlı)
    - `timeoutMs`: Polling timeout milisaniye cinsinden (number, isteğe bağlı, varsayılan: 120000)
    - `pollIntervalMs`: Polling aralığı milisaniye cinsinden (number, isteğe bağlı, varsayılan: 1500)

  - **submit_solution** - Belirli bir problem için kod gönderir ve bitene kadar bekler (kimlik doğrulama gereklidir)

    - `titleSlug`: Problemin URL slug/tanımlayıcısı (string, zorunlu)
    - `lang`: Programlama dili (string enum, zorunlu)
    - `typedCode`: Gönderilecek kaynak kod (string, zorunlu)
    - `timeoutMs`: Polling timeout milisaniye cinsinden (number, isteğe bağlı, varsayılan: 120000)
    - `pollIntervalMs`: Polling aralığı milisaniye cinsinden (number, isteğe bağlı, varsayılan: 1500)

  ### Notlar

  - **search_notes** - LeetCode Çin'de kullanıcı notlarını arar

    - `keyword`: Notları filtrelemek için arama terimi (string, isteğe bağlı)
    - `limit`: Döndürülecek maksimum not sayısı (number, isteğe bağlı, varsayılan: 10)
    - `skip`: Atlanacak not sayısı (number, isteğe bağlı, varsayılan: 0)
    - `orderBy`: Döndürülen notlar için sıralama düzeni (enum: "ASCENDING", "DESCENDING", isteğe bağlı, varsayılan: "DESCENDING")

  - **get_note** - Belirli bir LeetCode problemi için kullanıcı notlarını alır
    - `questionId`: LeetCode probleminin soru ID'si (string, zorunlu)
    - `limit`: Döndürülecek maksimum not sayısı (number, isteğe bağlı, varsayılan: 10)
    - `skip`: Atlanacak not sayısı (number, isteğe bağlı, varsayılan: 0)
  - **create_note** - Belirli bir LeetCode problemi için yeni not oluşturur

    - `questionId`: LeetCode probleminin soru ID'si (string, zorunlu)
    - `content`: Notun içeriği, markdown formatını destekler (string, zorunlu)
    - `summary`: Not için isteğe bağlı kısa özet veya başlık (string, isteğe bağlı)

  - **update_note** - Mevcut notu yeni içerik veya özet ile günceller
    - `noteId`: Güncellenecek notun ID'si (string, zorunlu)
    - `content`: Not için yeni içerik, markdown formatını destekler (string, zorunlu)
    - `summary`: Not için isteğe bağlı yeni kısa özet veya başlık (string, isteğe bağlı)

  ### Çözümler

  - **list_problem_solutions** - Belirli bir problem için topluluk çözümlerinin listesini alır

    - `questionSlug`: Problemin URL slug/tanımlayıcısı (string, zorunlu)
    - `limit`: Döndürülecek maksimum çözüm sayısı (number, isteğe bağlı, varsayılan: 10)
    - `skip`: Atlanacak çözüm sayısı (number, isteğe bağlı)
    - `userInput`: Çözümleri filtrelemek için arama terimi (string, isteğe bağlı)
    - `tagSlugs`: Çözümleri filtrelemek için etiket tanımlayıcılarının dizisi (string[], isteğe bağlı, varsayılan: [])
    - `orderBy`: Döndürülen çözümler için sıralama kriterleri
      - Global: enum: "HOT", "MOST_RECENT", "MOST_VOTES", isteğe bağlı, varsayılan: "HOT"
      - CN: enum: "DEFAULT", "MOST_UPVOTE", "HOT", "NEWEST_TO_OLDEST", "OLDEST_TO_NEWEST", isteğe bağlı, varsayılan: "DEFAULT"

  - **get_problem_solution** - Belirli bir çözümün tam içeriğini alır
    - `topicId`: Çözümün benzersiz topic ID'si (string, zorunlu, yalnızca Global)
    - `slug`: Çözümün benzersiz slug/tanımlayıcısı (string, zorunlu, yalnızca CN)

  ## Mevcut Kaynaklar

  | Kaynak Adı             | Global | CN  | Kimlik Doğrulama Gerekli | Açıklama                                                  |
  | ---------------------- | :----: | :-: | :----------------------: | --------------------------------------------------------- |
  | **problem-categories** |   ✅   | ✅  |           ❌            | Tüm problem sınıflandırma kategorilerinin listesi         |
  | **problem-tags**       |   ✅   | ✅  |           ❌            | Algoritmik ve veri yapı etiketlerinin detaylı koleksiyonu |
  | **problem-langs**      |   ✅   | ✅  |           ❌            | Desteklenen tüm programlama dillerinin tam listesi        |
  | **problem-detail**     |   ✅   | ✅  |           ❌            | Belirli bir problem hakkında detay sağlar                 |
  | **problem-solution**   |   ✅   | ✅  |           ❌            | Belirli bir çözümün tam içeriğini sağlar                  |

  ## Kaynak URI'leri

  - **problem-categories** - Tüm problem sınıflandırma kategorilerinin listesi

    - URI: `categories://problems/all`

  - **problem-tags** - Algoritmik ve veri yapı etiketlerinin detaylı koleksiyonu

    - URI: `tags://problems/all`

  - **problem-langs** - LeetCode tarafından desteklenen tüm programlama dillerinin tam listesi

    - URI: `langs://problems/all`

  - **problem-detail** - Belirli bir LeetCode probleminin detaylarını sağlar

    - URI: `problem://{titleSlug}`
    - Parametreler:
      - `titleSlug`: LeetCode URL'sinde göründüğü şekildeki problem tanımlayıcısı

  - **problem-solution** - Belirli bir çözümün tam içeriğini sağlar
    - Global URI: `solution://{topicId}`
      - Parametreler:
        - `topicId`: Çözümün benzersiz topic ID'si
    - CN URI: `solution://{slug}`
      - Parametreler:
        - `slug`: Çözümün benzersiz slug/tanımlayıcısı

  ## Kimlik Doğrulama

  Kullanıcıya özgü veri erişimi LeetCode session kimlik doğrulama gerektirir:

  1. LeetCode'a giriş yapın ([Global](https://leetcode.com) veya [Çin](https://leetcode.cn) sitesi)
  2. Tarayıcı geliştirici araçlarından `LEETCODE_SESSION` cookie'sini çıkartın
  3. Sunucuyu `--session` bayrağı veya `LEETCODE_SESSION` ortam değişkeni ile yapılandırın

  ## Yanıt Formatı

  Tüm araçlar aşağıdaki yapıya sahip JSON formatında yanıtlar döndürür:

  ```json
  {
    "content": [
      {
        "type": "text",
        "text": "JSON_DATA_STRING"
      }
    ]
  }
  ```

  `JSON_DATA_STRING`, istenen verileri veya başarısız istekler için bir hata mesajını içerir.

  ## Lisans

  Bu proje MIT Lisansı altında lisanslanmıştır.
---

# LeetCode MCP Server

[![NPM Version](https://img.shields.io/npm/v/@jinzcdev/leetcode-mcp-server.svg)](https://www.npmjs.com/package/@jinzcdev/leetcode-mcp-server)
[![NPM Downloads](https://img.shields.io/npm/dm/@jinzcdev/leetcode-mcp-server.svg)](https://www.npmjs.com/package/@jinzcdev/leetcode-mcp-server)
[![GitHub License](https://img.shields.io/github/license/jinzcdev/leetcode-mcp-server.svg)](./LICENSE)
[![Chinese Doc](https://img.shields.io/badge/简体中文-查看-orange)](README_zh-CN.md)
[![Stars](https://img.shields.io/github/stars/jinzcdev/leetcode-mcp-server)](https://github.com/jinzcdev/leetcode-mcp-server)

The LeetCode MCP Server is a [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) server that provides seamless integration with LeetCode APIs, enabling advanced automation and intelligent interaction with LeetCode's programming problems, contests, solutions, and user data.

<a href="https://glama.ai/mcp/servers/@jinzcdev/leetcode-mcp-server">
  
</a>

## Features

- 🌐 **Multi-site Support**: Support​ both leetcode.com (Global) and leetcode.cn (China) platforms
- 📊 **Problem Data Retrieval**: Obtain detailed problem descriptions, constraints, examples, official editorials, and ​user-submitted solutions
- 👤 **User Data Access**: Retrieve user profiles, submission history, and contest performance
- 🔒 **​Private Data Access**: Create and query user notes, track problem-solving progress, and analyze submission details (AC/WA analysis)
- 🔍 **Advanced Search Capabilities**: Filter problems by tags, difficulty levels, categories, and keywords
- 📅 **Daily Challenge Access**: Easily access daily challenge problems

## Prerequisites

1. Node.js (v20.x or above)
2. (Optional) LeetCode session cookie for authenticated API access

## Installation

### Installing via Smithery

To install leetcode-mcp-server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@jinzcdev/leetcode-mcp-server):

```bash
npx -y @smithery/cli install @jinzcdev/leetcode-mcp-server --client claude
```

### Manual Installation

```bash
# Install from npm
npm install @jinzcdev/leetcode-mcp-server -g

# Or run with Global site configuration
npx -y @jinzcdev/leetcode-mcp-server --site global

# Run with authentication (for accessing private data)
npx -y @jinzcdev/leetcode-mcp-server --site global --session <YOUR_LEETCODE_SESSION_COOKIE>
```

Alternatively, you can clone the repository and run it locally:

```bash
# Clone the repository
git clone https://github.com/jinzcdev/leetcode-mcp-server.git

# Navigate to the project directory
cd leetcode-mcp-server

# Build the project
npm install && npm run build

# Run the server
node build/index.js --site global
```

## Usage

### Visual Studio Code Integration

Add the following JSON configuration to your User Settings (JSON) file. Access this by pressing `Ctrl/Cmd + Shift + P` and searching for `Preferences: Open User Settings (JSON)`.

#### Option 1: Using Environment Variables

```json
{
  "mcp": {
    "servers": {
      "leetcode": {
        "type": "stdio",
        "command": "npx",
        "args": ["-y", "@jinzcdev/leetcode-mcp-server"],
        "env": {
          "LEETCODE_SITE": "global",
          "LEETCODE_SESSION": "<YOUR_LEETCODE_SESSION_COOKIE>"
        }
      }
    }
  }
}
```

#### Option 2: Using Command Line Arguments

```json
{
  "mcp": {
    "servers": {
      "leetcode": {
        "type": "stdio",
        "command": "npx",
        "args": [
          "-y",
          "@jinzcdev/leetcode-mcp-server",
          "--site",
          "global",
          "--session",
          "<YOUR_LEETCODE_SESSION_COOKIE>"
        ]
      }
    }
  }
}
```

For LeetCode China site, modify the `--site` parameter to `cn`.

> [!TIP]
>
> The server supports the following optional environment variables:
>
> - `LEETCODE_SITE`: LeetCode API endpoint ('global' or 'cn', default: 'global')
> - `LEETCODE_SESSION`: LeetCode session cookie for authenticated API access (default: empty)
>
> **Priority Note**:
> Command-line arguments take precedence over environment variables when both are specified. For example:
>
> - If `LEETCODE_SITE=cn` is set but you run `leetcode-mcp-server --site global`, the server will use `global`.
> - If `LEETCODE_SESSION` exists but you provide `--session "new_cookie"`, the command-line session value will be used.

## Available Tools

### Problems

| Tool                    | Global | CN  | Auth Required | Description                                                  |
| ----------------------- | :----: | :-: | :-----------: | ------------------------------------------------------------ |
| **get_daily_challenge** |   ✅   | ✅  |      ❌       | Retrieves today's LeetCode Daily Challenge problem           |
| **get_problem**         |   ✅   | ✅  |      ❌       | Retrieves details for a specific LeetCode problem            |
| **search_problems**     |   ✅   | ✅  |      ❌       | Searches for LeetCode problems with multiple filter criteria |

### Users

| Tool                              | Global | CN  | Auth Required | Description                                                  |
| --------------------------------- | :----: | :-: | :-----------: | ------------------------------------------------------------ |
| **get_user_profile**              |   ✅   | ✅  |      ❌       | Retrieves profile information for a LeetCode user            |
| **get_user_contest_ranking**      |   ✅   | ✅  |      ❌       | Obtains contest ranking statistics for a user                |
| **get_recent_ac_submissions**     |   ✅   | ✅  |      ❌       | Retrieves a user's recent accepted submissions               |
| **get_recent_submissions**        |   ✅   | ❌  |      ❌       | Retrieves a user's recent submissions history                |
| **get_user_status**               |   ✅   | ✅  |      ✅       | Retrieves current user's current status                      |
| **get_problem_submission_report** |   ✅   | ✅  |      ✅       | Provides detailed submission analysis for a specific problem |
| **get_problem_progress**          |   ✅   | ✅  |      ✅       | Retrieves current user's problem-solving progress            |
| **get_all_submissions**           |   ✅   | ✅  |      ✅       | Retrieves current user's submission history                  |

### Submissions

| Tool                | Global | CN  | Auth Required | Description                                                   |
| ------------------- | :----: | :-: | :-----------: | ------------------------------------------------------------- |
| **run_code**        |   ✅   | ✅  |      ✅       | Runs code for a problem and polls `/check/` until finished    |
| **submit_solution** |   ✅   | ✅  |      ✅       | Submits code for a problem and polls `/check/` until finished |

### Notes

| Tool             | Global | CN  | Auth Required | Description                                           |
| ---------------- | :----: | :-: | :-----------: | ----------------------------------------------------- |
| **search_notes** |   ❌   | ✅  |      ✅       | Searches for user notes with filtering options        |
| **get_note**     |   ❌   | ✅  |      ✅       | Retrieves notes for a specific problem by question ID |
| **create_note**  |   ❌   | ✅  |      ✅       | Creates a new note for a specific problem             |
| **update_note**  |   ❌   | ✅  |      ✅       | Updates an existing note with new content             |

### Solutions

| Tool                       | Global | CN  | Auth Required | Description                                                    |
| -------------------------- | :----: | :-: | :-----------: | -------------------------------------------------------------- |
| **list_problem_solutions** |   ✅   | ✅  |      ❌       | Retrieves a list of community solutions for a specific problem |
| **get_problem_solution**   |   ✅   | ✅  |      ❌       | Retrieves the complete content of a specific solution          |

## Tool Parameters

### Problems

- **get_daily_challenge** - Retrieves today's LeetCode Daily Challenge problem with complete details

  - No parameters required

- **get_problem** - Retrieves details about a specific LeetCode problem

  - `titleSlug`: The URL slug/identifier of the problem (string, required)

- **search_problems** - Searches for LeetCode problems based on multiple filter criteria
  - `category`: Problem category filter (string, optional, default: "all-code-essentials")
  - `tags`: List of topic tags to filter problems by (string[], optional)
  - `difficulty`: Problem difficulty level filter (enum: "EASY", "MEDIUM", "HARD", optional)
  - `searchKeywords`: Keywords to search in problem titles and descriptions (string, optional)
  - `limit`: Maximum number of problems to return (number, optional, default: 10)
  - `offset`: Number of problems to skip (number, optional)

### Users

- **get_user_profile** - Retrieves profile information about a LeetCode user

  - `username`: LeetCode username (string, required)

- **get_user_contest_ranking** - Retrieves a user's contest ranking information

  - `username`: LeetCode username (string, required)
  - `attended`: Whether to include only the contests the user has participated in (boolean, optional, default: true)

- **get_recent_submissions** - Retrieves a user's recent submissions on LeetCode Global

  - `username`: LeetCode username (string, required)
  - `limit`: Maximum number of submissions to return (number, optional, default: 10)

- **get_recent_ac_submissions** - Retrieves a user's recent accepted submissions

  - `username`: LeetCode username (string, required)
  - `limit`: Maximum number of submissions to return (number, optional, default: 10)

- **get_user_status** - Retrieves the current user's status

  - No parameters required

- **get_problem_submission_report** - Retrieves detailed information about a specific submission

  - `id`: The numerical submission ID (number, required)

- **get_problem_progress** - Retrieves the current user's problem-solving progress

  - `offset`: Number of questions to skip (number, optional, default: 0)
  - `limit`: Maximum number of questions to return (number, optional, default: 100)
  - `questionStatus`: Filter by question status (enum: "ATTEMPTED", "SOLVED", optional)
  - `difficulty`: Filter by difficulty levels (string[], optional)

- **get_all_submissions** - Retrieves paginated list of user's submissions
  - `limit`: Maximum number of submissions to return (number, default: 20)
  - `offset`: Number of submissions to skip (number, default: 0)
  - `questionSlug`: Optional problem identifier (string, optional)
  - `lang`: Programming language filter (string, optional, CN only)
  - `status`: Submission status filter (enum: "AC", "WA", optional, CN only)
  - `lastKey`: Pagination token for retrieving next page (string, optional, CN only)

### Submissions

- **run_code** - Runs code for a specific problem and waits until finished (requires authentication)

  - `titleSlug`: The URL slug/identifier of the problem (string, required)
  - `lang`: Programming language (string enum, required)
  - `typedCode`: Source code to run (string, required)
  - `dataInput`: Custom input to run (string, optional)
  - `timeoutMs`: Polling timeout in milliseconds (number, optional, default: 120000)
  - `pollIntervalMs`: Polling interval in milliseconds (number, optional, default: 1500)

- **submit_solution** - Submits code for a specific problem and waits until finished (requires authentication)

  - `titleSlug`: The URL slug/identifier of the problem (string, required)
  - `lang`: Programming language (string enum, required)
  - `typedCode`: Source code to submit (string, required)
  - `timeoutMs`: Polling timeout in milliseconds (number, optional, default: 120000)
  - `pollIntervalMs`: Polling interval in milliseconds (number, optional, default: 1500)

### Notes

- **search_notes** - Searches for user notes on LeetCode China

  - `keyword`: Search term to filter notes (string, optional)
  - `limit`: Maximum number of notes to return (number, optional, default: 10)
  - `skip`: Number of notes to skip (number, optional, default: 0)
  - `orderBy`: Sort order for returned notes (enum: "ASCENDING", "DESCENDING", optional, default: "DESCENDING")

- **get_note** - Retrieves user notes for a specific LeetCode problem
  - `questionId`: The question ID of the LeetCode problem (string, required)
  - `limit`: Maximum number of notes to return (number, optional, default: 10)
  - `skip`: Number of notes to skip (number, optional, default: 0)
- **create_note** - Creates a new note for a specific LeetCode problem

  - `questionId`: The question ID of the LeetCode problem (string, required)
  - `content`: The content of the note, supports markdown format (string, required)
  - `summary`: An optional short summary or title for the note (string, optional)

- **update_note** - Updates an existing note with new content or summary
  - `noteId`: The ID of the note to update (string, required)
  - `content`: The new content for the note, supports markdown format (string, required)
  - `summary`: An optional new short summary or title for the note (string, optional)

### Solutions

- **list_problem_solutions** - Retrieves a list of community solutions for a specific problem

  - `questionSlug`: The URL slug/identifier of the problem (string, required)
  - `limit`: Maximum number of solutions to return (number, optional, default: 10)
  - `skip`: Number of solutions to skip (number, optional)
  - `userInput`: Search term to filter solutions (string, optional)
  - `tagSlugs`: Array of tag identifiers to filter solutions (string[], optional, default: [])
  - `orderBy`: Sorting criteria for the returned solutions
    - Global: enum: "HOT", "MOST_RECENT", "MOST_VOTES", optional, default: "HOT"
    - CN: enum: "DEFAULT", "MOST_UPVOTE", "HOT", "NEWEST_TO_OLDEST", "OLDEST_TO_NEWEST", optional, default: "DEFAULT"

- **get_problem_solution** - Retrieves the complete content of a specific solution
  - `topicId`: Unique topic ID of the solution (string, required, Global only)
  - `slug`: Unique slug/identifier of the solution (string, required, CN only)

## Available Resources

| Resource Name          | Global | CN  | Auth Required | Description                                                  |
| ---------------------- | :----: | :-: | :-----------: | ------------------------------------------------------------ |
| **problem-categories** |   ✅   | ✅  |      ❌       | A list of all problem classification categories              |
| **problem-tags**       |   ✅   | ✅  |      ❌       | A detailed collection of algorithmic and data structure tags |
| **problem-langs**      |   ✅   | ✅  |      ❌       | A complete list of all supported programming languages       |
| **problem-detail**     |   ✅   | ✅  |      ❌       | Provides details about a specific problem                    |
| **problem-solution**   |   ✅   | ✅  |      ❌       | Provides the complete content of a specific solution         |

## Resource URIs

- **problem-categories** - A list of all problem classification categories

  - URI: `categories://problems/all`

- **problem-tags** - A detailed collection of algorithmic and data structure tags

  - URI: `tags://problems/all`

- **problem-langs** - A complete list of all programming languages supported by LeetCode

  - URI: `langs://problems/all`

- **problem-detail** - Provides details about a specific LeetCode problem

  - URI: `problem://{titleSlug}`
  - Parameters:
    - `titleSlug`: Problem identifier as it appears in the LeetCode URL

- **problem-solution** - Provides the complete content of a specific solution
  - Global URI: `solution://{topicId}`
    - Parameters:
      - `topicId`: Unique topic ID of the solution
  - CN URI: `solution://{slug}`
    - Parameters:
      - `slug`: Unique slug/identifier of the solution

## Authentication

User-specific data access requires LeetCode session authentication:

1. Log in to LeetCode ([Global](https://leetcode.com) or [China](https://leetcode.cn) site)
2. Extract `LEETCODE_SESSION` cookie from browser developer tools
3. Configure server with `--session` flag or `LEETCODE_SESSION` environment variable

## Response Format

All tools return JSON-formatted responses with the following structure:

```json
{
  "content": [
    {
      "type": "text",
      "text": "JSON_DATA_STRING"
    }
  ]
}
```

The `JSON_DATA_STRING` contains either the requested data or an error message for failed requests.

## License

This project is licensed under the MIT License.
