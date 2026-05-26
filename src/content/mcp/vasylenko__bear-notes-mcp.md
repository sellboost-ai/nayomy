---
name: "vasylenko/bear-notes-mcp"
description: "Search, read, create, and update Bear Notes directly from Claude. Local-only with complete privacy."
description_tr: "Bear Notes'teki notlarınızı Claude'dan doğrudan arayabilir, okuyabilir, oluşturabilir ve güncelleyebilirsiniz. Tamamen yerel ve gizlilik odaklı."
category: "Workplace & Productivity"
repo: "vasylenko/bear-notes-mcp"
stars: 193
url: "https://github.com/vasylenko/bear-notes-mcp"
body_length: 13545
license: "Apache-2.0"
language: "TypeScript"
homepage: "https://bear-notes-mcp.vercel.app"
body_tr: |-
  [![Supply Chain](https://github.com/vasylenko/bear-notes-mcp/actions/workflows/ci.yml/badge.svg)](https://github.com/vasylenko/bear-notes-mcp/actions/workflows/ci.yml)
  [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/vasylenko/bear-notes-mcp)
  [![bear-notes-mcp MCP server](https://glama.ai/mcp/servers/vasylenko/bear-notes-mcp/badges/score.svg)](https://glama.ai/mcp/servers/vasylenko/bear-notes-mcp)

  [![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-d42a35?logo=buy-me-a-coffee&logoColor=white)](https://buymeacoffee.com/vasylenko)

  # Bear Notes MCP Server

  Bear Notes için resmi olmayan, özel görüşlere dayanan bir MCP sunucusu — alt dize eşleştirmesi yerine alakalılık sıralamasına dayalı olarak inşa edilmiştir. Sonuçlar başlıklar, gövdeler ve hiyerarşik etiketler arasında sıralanır, snippet'ler ve birleştirilebilir filtreler (etiket, tarih, sabitlenmiş) içerir. Okuma işlemleri Bear'ın SQLite veritabanına karşı doğrudan çalışır — sorgular için Bear uygulaması gerekli değildir.

  Yazma işlemleri Bear'ın kendi URL işleyicisinden geçer — atomiktir ve Bear tarafından doğrulanır. Çevrimdışı-ilk: ağ çağrıları yok, telemetri yok, tüm işlemler Mac'inizde gerçekleşir. Herhangi bir MCP istemcisi ile çalışır — Claude Desktop, Claude Code, Codex, Gemini, Cursor. Tek tıklamalı bir **.mcpb uzantısı** veya bağımsız bir **npm paketi** olarak sunulur.

  Örnek istekler:

  > Dışa aktarma boru hatlarında yazdığım derinlemesine incelemeyi bul, #engineering/ altında bir yerde

  > Bugünün kararlarını haftalık Ops notumun 'Kararlar' bölümüne ekle

  > #research/llm-evals altındaki her notu bir anket taslağına çek

  > #blog/drafts ile etiketlenmiş notlarımı bul ve bu haftanın taslak taslağını hazırla

  ![](https://raw.githubusercontent.com/vasylenko/bear-notes-mcp/HEAD/docs/assets/demo.gif)

  ## ✨ Temel Özellikler

  - **Varsayılan olarak salt okunur — Düzenleme Modu'nu açarak yazmaları etkinleştir.** 4 araç her zaman açık (arama, açma, etiketlenmemiş bulma, etiketleri listele); Düzenleme Modu'nda oluştur, düzenle, ekle, etiketle, arşivle için 8 daha fazla
  - **Alakalılık sıralaması arama** başlıklar, gövdeler ve etiketler arasında — sadece kelimeleri içeren notları değil, doğru notu bulur
  - **Tarih tabanlı arama** göreli tarihlerle ("dün", "geçen hafta", "geçen ayın başı")
  - **Hiyerarşik etiket yönetimi** — etiketleri not sayıları ile bir ağaç olarak görüntüle; tüm kütüphane genelinde bir etiketi yeniden adlandır veya sil
  - **Cerrah yazmaları** — belirli bir başlıkta ekle veya tüm notu yeniden yazmadan bir bölümü değiştir
  - **Dosya ekleri** — resimler, PDF'ler ve 25 MB'a kadar belgeler ekle; güvenlik için sembolik bağlantılar reddedilir
  - **Yeni not kuralı** (opsiyonel) — etiketleri not altkında değil başlığın hemen sonrasına yerleştir
  - **Yerel-ilk** — doğrudan salt okunur SQLite okumalar, yerel `node:sqlite`, ağ çağrıları yok, telemetri yok

  > [!NOTE]
  > Tam gizlilik (elbette AI sağlayıcısına bir AI asistanı kullanırken gönderdiğiniz veriler hariç): bu sunucu hiçbir dış bağlantı yapmaz. Tüm işlemler Mac'inizde yerel olarak Bear'ın kendi veritabanı ve API'si kullanılarak gerçekleşir. Ekstra telemetri, kullanım istatistikleri veya bunun gibi bir şey yoktur.

  ## 👤 Bu kim için

  Bu, resmi olmayan, Bear MCP'ye alternatif bir görüş sağlar. Aşağıdaki durumlarda uygun:

  - **Yıllarca not aldınız ve alt dize arama yeterli değil.** Arama sonuçları alakalılığa göre sıralanır — başlıklar, gövdeler ve tüm kütüphane genelinde etiket eşleşmeleri — böylece doğru not öne çıkar, ifadeniz değişmiş olsa bile.

  - **MCP istemcileri arasında gidip geliyorsunuz.** Stdio taşıması Claude Desktop, Claude Code, Codex CLI, Gemini, Cursor, Windsurf ile çalışır — MCP konuşan her şey. İstemci başına tutkal kodu yok, kilit yok.

  - **Bear'ı öne çekmeden sorgullamak istiyorsunuz.** Okumalar doğrudan Bear'ın SQLite veritabanına karşı çalışır. Hızlı bir arama için Bear'ı açık tutmanız — hatta çalıştırmanız bile gerekmez — konuşmanın ortasında. (Yazmaları Bear aracılığıyla atomik olarak yönlendirir.)

  - **Tüm kütüphane genelinde etiketleri yönetiyorsunuz.** Bir etiketi göründüğü her yerde atomik olarak yeniden adlandır veya sil. Arama sırasında hiyerarşik etiket eşleştirmesi alt etiketleri otomatik olarak devralır — Bear'ın UI'si yalnızca yapması zahmetli olan çalışma.

  - **Tedarik zinciri hijyeni önemlidir.** Yerel `node:sqlite` — işaretsiz üçüncü taraf ikilileri yok, Gatekeeper sorunları yok. Ağ-serbest sunucu: uzaktan getirme araçları yok, prompt enjeksiyonu yüzeyi yok.

  Küçük bir kütüphaneniz varsa ve sadece hızlı bir notlar entegrasyonu istiyorsanız, buna henüz ihtiyacınız olmayabilir.

  ## 📦 Kurulum

  ### Claude Desktop Uzantısı

  **Ön koşullar**: [Bear uygulaması](https://bear.app/) yüklü olmalı ve [Claude Desktop](https://claude.ai/download) yüklü olmalı.

  1. [Yayınlar](https://github.com/vasylenko/bear-notes-mcp/releases) sayfasından en son `bear-notes-mcpb-*.mcpb` uzantı dosyasını indirin
  2. Claude Desktop'ınızın çalıştığından emin olun (değilse başlatın)
  3. Uzantı dosyasına çift tıklayın — Claude Desktop kurulum istemini göstermelidir

      Herhangi bir nedenle çift tıklama işe yaramazsa, Claude -> Ayarlar -> Uzantılar -> Gelişmiş Ayarlar -> "Uzantıyı Yükle" seçeneğini tıklayın.

  4. BİTTİ!

  Claude'dan "Notlarımı Bear'da 'toplantı' için ara" gibi bir sorgu ile Bear notlarınızda arama yapmalarını isteyin - yanıtta notlarınızın görünmesini görmelisiniz!

  ### Bağımsız MCP Sunucusu

  Bu Bear Notes MCP sunucusunu Claude Code, Cursor, Codex veya diğer AI asistanları ile kullanmak istiyor musunuz?

  **Gereksinimler**: Node.js 24.13.0+

  #### Claude Code (bir komut)

  ```bash
  claude mcp add -s user bear-notes -- npx -y bear-notes-mcp@latest
  ```

  #### Diğer AI Asistanları

  MCP yapılandırma dosyanıza ekleyin:
  ```json
  {
    "mcpServers": {
      "bear-notes": {
        "command": "npx",
        "args": ["-y", "bear-notes-mcp@latest"]
      }
    }
  }
  ```

  **Daha fazla kurulum seçeneği ve yerel geliştirme kurulumu — [NPM.md](./docs/user/NPM.md)**

  ## 🛠️ Araçlar

  <!-- TOOLS:START -->
  - **`bear-open-note`** - Bear notunun ID veya başlığına göre tam metin içeriğini okuyun; eklenen resim ve PDF'lerden OCR'ı yapılmış metni içerir
  - **`bear-create-note`** - Bear kütüphanesi içinde opsiyonel başlık, içerik ve etiketler ile yeni bir not oluşturun
  - **`bear-search-notes`** - Başlıklar, gövde ve eklenen resim ve PDF'lerden OCR ile ayıklanan metni kapsayan alakalılık yoluyla not bulun. Aradığınızı açıklayan bir ifade veya birkaç anahtar kelime kullanın; sonuçlar alakalılığa göre sıralanır ve her birinde bir bağlam snippet'i vardır. Ayrıca etiket, tarih aralığı ve sabitlenmiş-yalnızca filtreleri destekler — bir arama terimi ile birleştirin veya tarama için kendi başlarına kullanın.
  - **`bear-add-text`** - Bear notuna başında veya sonunda metin ekleyin veya başlığı ile tanımlanan belirli bir bölümde. Notzun geçerli revizyon tokenini gerektirir (yanıtındaki `Revision: N` satırı, referans alındığında); eski revizyon karşı yazmaları `bear-open-note` ile yeniden okumanız ve yeniden denemeleri için bir talimat ile reddedilir.
  - **`bear-replace-text`** - Mevcut bir Bear notundaki içeriği değiştirin — tam gövde veya belirli bir bölüm. Notzun geçerli revizyon tokenini gerektirir (yanıtındaki `Revision: N` satırı, referans alındığında); eski revizyon karşı yazmaları `bear-open-note` ile yeniden okumanız ve yeniden denemeleri için bir talimat ile reddedilir.
  - **`bear-add-file`** - Yerel bir dosyayı (resim, PDF, belge) ID veya başlığına göre mevcut bir Bear notuna ekleyin. Bear, OCR aracılığıyla resimlerden ve PDF'lerden metin ayıklar, ek içeriğini aranabilir kılar. Notzun geçerli revizyon tokenini gerektirir (yanıtındaki `Revision: N` satırı, referans alındığında); eski revizyon karşı yazmaları `bear-open-note` ile yeniden okumanız ve yeniden denemeleri için bir talimat ile reddedilir.
  - **`bear-list-tags`** - Bear kütüphanesi içindeki tüm etiketleri not sayıları ile hiyerarşik bir ağaç olarak listeleyin
  - **`bear-find-untagged-notes`** - Bear kütüphanesi içinde atanan etiket olmayan notlar bulun
  - **`bear-add-tag`** - Mevcut bir Bear notuna bir veya daha fazla etiket ekleyin. Notzun geçerli revizyon tokenini gerektirir (yanıtındaki `Revision: N` satırı, referans alındığında); eski revizyon karşı yazmaları `bear-open-note` ile yeniden okumanız ve yeniden denemeleri için bir talimat ile reddedilir.
  - **`bear-archive-note`** - Bir Bear notunu siliyor olmadan aktif listelerden çıkarmak için arşivleyin
  - **`bear-rename-tag`** - Bear kütüphanesi içindeki tüm notlar arasında bir etiketi yeniden adlandırın
  - **`bear-delete-tag`** - Notları etkilemeden Bear kütüphanesi içindeki tüm notlardan bir etiketi silin
  - **`bear-capabilities`** - Geçerli sunucu modunu (salt okunur veya Düzenleme Modu) ve ek özelliklerin kilidini açma yollarını bildirin
  <!-- TOOLS:END -->

  ## ⚙️ Yapılandırma

  ### Hata Ayıklama Günlüğü

  Sorun giderme için verbose günlüğü etkinleştirin.

  - **Claude Desktop**: Ayarlar → Uzantılar → Yapılandır (Bear Notes'un yanında) → "Hata Ayıklama Günlüğü" anahtarını aç → Kaydet → Claude'u Yeniden Başlat
  - **Bağımsız MCP sunucusu**: ortam değişkenini ayarla `UI_DEBUG_TOGGLE=true`

  ### Yeni Not Kuralı

  Varsayılan olarak, API aracılığıyla oluşturulduktan sonra Bear etiketleri notz sonuna yerleştirir. Bu seçeneği etkinleştirerek etiketleri başlıktan hemen sonra yatay bir kural tarafından ayrılan olarak yerleştirin.

  <details>
  <summary>Bu kural etkinleştirilmişken not yapısını görmek için</summary>

  ```
  ┌──────────────────────────────┐
  │ # Meeting Notes              │  ← Not başlığı
  │ #work #meetings              │  ← Başlığın hemen sonrasında etiketler
  │                              │
  │ ---                          │  ← Ayırıcı
  │                              │
  │ Lorem Ipsum...               │  ← Not gövdesi
  └──────────────────────────────┘
  ```

  </details>

  > [!TIP]
  > Bu kural **varsayılan olarak devre dışı** — mevcut davranış korunmak için opsiyoneldir.

  - **Claude Desktop**: Ayarlar → Uzantılar → Yapılandır (Bear Notes'un yanında) → "Yeni Not Kuralı" anahtarını aç → Kaydet → Claude'u Yeniden Başlat
  - **Bağımsız MCP sunucusu**: ortam değişkenini ayarla `UI_ENABLE_NEW_NOTE_CONVENTION=true`

  Kuralı etkinleştirilmiş bağımsız yapılandırma örneği:
  ```json
  {
    "mcpServers": {
      "bear-notes": {
        "command": "npx",
        "args": ["-y", "bear-notes-mcp@latest"],
        "env": {
          "UI_ENABLE_NEW_NOTE_CONVENTION": "true"
        }
      }
    }
  }
  ```

  ### Düzenleme Modu

  Düzenleme Modu tüm 8 yazma aracının kilidini açar: notları oluştur, metin ekle veya değiştir (tam gövde veya başlık başına), dosya ekle, etiketleri yönet, arşivle. Kapalı olduğunda, sunucu tamamen salt okunur — `tools/list`, 4 okuma aracını (`bear-open-note`, `bear-search-notes`, `bear-find-untagged-notes`, `bear-list-tags`) artı `bear-capabilities` (istemcilerin MCP `instructions` alanını bıraktığında bu kilit açma rehberliğini ortaya koyan bir keşif aracı) döndürür. LLM yanlışlıkla kütüphanenizi mutasyona uğratamaz.

  > [!TIP]
  > Düzenleme Modu **kapalı olarak varsayılan** yapılır, böylece sunucu kutudan çıkar çıkmaz kanıtlanabilir şekilde salt okunur olur. Yazmalara hazır olduğunuzda açın — ve yalnızca o zaman.

  - **Claude Desktop**: Ayarlar → Uzantılar → Yapılandır (Bear Notes'un yanında) → "Düzenleme Modu" anahtarını aç → Kaydet → Claude'u Yeniden Başlat
  - **Bağımsız MCP sunucusu**: ortam değişkenini ayarla `UI_ENABLE_CONTENT_REPLACEMENT=true`

  Düzenleme Modu etkinleştirilmiş bağımsız yapılandırma örneği:
  ```json
  {
    "mcpServers": {
      "bear-notes": {
        "command": "npx",
        "args": ["-y", "bear-notes-mcp@latest"],
        "env": {
          "UI_ENABLE_CONTENT_REPLACEMENT": "true"
        }
      }
    }
  }
  ```

  ## Teknik Detaylar

  Bu sunucu, arama/okuma işlemleri için Bear Notes SQLite veritabanını doğrudan okur ve yazma işlemleri için Bear'ın X-callback-URL API'sini kullanır. Tüm veri işleme makinenizde yerel olarak gerçekleşir; hiçbir harici ağ çağrısı yok.

  ### Desteklenen Platformlar
  Yalnızca macOS, çünkü Bear masaüstü yalnızca macOS'ta çalışır.

  ### Günlükler

  **Claude Desktop:**
  - MCP sunucusu günlükleri `~/Library/Logs/Claude/main.log` içine gider, `bear-notes-mcp` ara
  - MCP taşıma günlükleri `~/Library/Logs/Claude/mcp-server-Bear\ Notes.log` adresine gider

  **Bağımsız MCP sunucusu:**
  - Günlükler stderr'e yazılır; `UI_DEBUG_TOGGLE=true` ile hata ayıklama günlüğü etkinleştirin

  ## SSS

  ### Bu verilerimi çalabilir mi?
  **Hayır**. Sunucu yalnızca Bear'ın yerel veritabanını okur (Bear uygulamasının gösterdiği veriler) ve notlara metin eklemek için Bear'ın yerel API'sini kullanır. Ağ iletişimi yok, harici sunucular yok.

  ### Neden SQLite ve sadece yerel Bear uygulaması x-callback-url API'si değil?

  Okuma işlemleri (arama/açma) için, x-callback-url API notu `x-success` yanıtında döndürür: bu, x-success yanıtlarını işlemek için bir sunucu veya özel ikili gerektirir - her ikisi de riskli ve kırılgan. Doğrudan SQLite salt okunur erişimi, notları aramak ve okumak için daha basit ve güvenilirdir.

  ### Neden üçüncü taraf paketleri yerine yerel Node.js SQLite?

  Bu, üçüncü taraf node paketlerinden bir SQLite ikili göndermekten kaçınır, bu da tedarik zinciri riskleri oluşturur ve Claude Desktop uzantısının macOS'ta çalışmasını engeller.

  Anthropic açıkça üçüncü taraf SQLite ikililerini imzalamaz, bu da macOS güvenlik sistemlerinin Anthropic tarafından imzalanan Claude işleminin üçüncü taraf tarafından imzalanan başka bir ikiliye çalışmaya çalıştığını işaretlemesine neden olur. Sonuç olarak, Claude Desktop uzantıyı çalıştıramaz.

  ### Uzantıyı kurduğumda kırmızı bir uyarı görüyorum: "Kurulum, bilgisayarınızdaki her şeye erişim izni verecektir." - bu ne anlama geliyor?

  Bu, Claude Desktop'ın bu uzantının Mac'inizdeki Bear SQLite veritabanına erişim gerektirmesi gerçeğine nasıl tepki verdiğidir.

  Claude uyarı sistemi, sadece bir dosyaya erişim ihtiyacı (uzantının yaptığı budur) ile tüm dosyalara erişim ihtiyacı (bu NE uzantının yaptığıdır) arasında ayrım yapmaz.

  Bunu doğrulamanın yollarından biri, uzantıyı kurmadan önce Claude'unuza codebase'i analiz etmelerini (oldukça küçüktür) ve sizin söylemeleridir.

  ### Nasıl hata bildirebilirim veya katkı yapabilirim?

  Sorunları veya tartışmaları kullanın! Bu projeyi daha iyi hale getirmek için geri bildiriminizi veya önerilerinizi veya yardımınızı görülmekten mutlu olurum! ❤️

  ## Güncelleme Takibi Kalın

  Yeni bir sürüm yayınlandığında bilmek için sürüm açıklamalarına abone olmayı düşünün:

  ![](https://raw.githubusercontent.com/vasylenko/bear-notes-mcp/HEAD/docs/assets/stay-updated.png)

  Ayrıca yeni bir sürüm olduğunda [reddit.com/r/bearapp/](https://www.reddit.com/r/bearapp/) adresine yazı yazarım.
---

[![Supply Chain](https://github.com/vasylenko/bear-notes-mcp/actions/workflows/ci.yml/badge.svg)](https://github.com/vasylenko/bear-notes-mcp/actions/workflows/ci.yml)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/vasylenko/bear-notes-mcp)
[![bear-notes-mcp MCP server](https://glama.ai/mcp/servers/vasylenko/bear-notes-mcp/badges/score.svg)](https://glama.ai/mcp/servers/vasylenko/bear-notes-mcp)

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-d42a35?logo=buy-me-a-coffee&logoColor=white)](https://buymeacoffee.com/vasylenko)

# Bear Notes MCP Server

An unofficial, opinionated MCP server for Bear Notes — built around relevance-ranked search instead of substring matching. Results come ranked across titles, bodies, and hierarchical tags, with snippets and combinable filters (tag, date, pinned). Reads run direct against Bear's SQLite database — no Bear app required for queries.

Writes route through Bear's own URL handler — atomic and validated by Bear. Offline-first: no network calls, no telemetry, all processing on your Mac. Works with any MCP client — Claude Desktop, Claude Code, Codex, Gemini, Cursor. Ships as a one-click **.mcpb extension** or a standalone **npm package**.

Example prompts:

> Find the deep-dive I wrote on export pipelines, somewhere under #engineering/

> Append today's decisions to the 'Decisions' section of my Weekly Ops note

> Pull every note under #research/llm-evals into a survey outline

> Find my notes tagged #blog/drafts and draft this week's post outline

![](https://raw.githubusercontent.com/vasylenko/bear-notes-mcp/HEAD/docs/assets/demo.gif)

## ✨ Key Features

- **Read-only by default — flip Edit Mode for writes.** 4 tools always on (search, open, find untagged, list tags); 8 more in Edit Mode for create, edit, attach, tag, archive
- **Relevance-ranked search** across titles, bodies, and tags — finds the right note, not just the ones that contained your literal words
- **Date-based search** with relative dates ("yesterday", "last week", "start of last month")
- **Hierarchical tag management** — view tags as a tree with note counts; rename or delete a tag across the whole library
- **Surgical writes** — append at a specific heading or replace a section without rewriting the whole note
- **File attachments** — attach images, PDFs, and documents up to 25 MB; symlinks rejected for safety
- **New note convention** (opt-in) — place tags right after the title instead of at the bottom
- **Local-first** — direct read-only SQLite reads, native `node:sqlite`, no network calls, no telemetry

> [!NOTE]
> Complete privacy (except the data you send to your AI provider when using an AI assistant, of course): this server makes no external connections. All processing happens locally on your Mac using Bear's own database and API. There is no extra telemetry, usage statistics or anything like that.

## 👤 Who is this for

This is an unofficial, opinionated alternative to the native Bear MCP. It fits when:

- **You have years of notes and substring search isn't enough.** Search ranks results by relevance — titles, bodies, and tag matches across the whole library — so the right note rises to the top, even when your phrasing has drifted.

- **You bounce between MCP clients.** Stdio transport works with Claude Desktop, Claude Code, Codex CLI, Gemini, Cursor, Windsurf — anything that speaks MCP. No per-client glue code, no lock-in.

- **You want to query without pulling Bear forward.** Reads run straight against Bear's SQLite database. No need to keep Bear open — or even running — for a quick lookup mid-conversation. (Writes still route through Bear, atomically.)

- **You manage tags across the whole library.** Rename or delete a tag everywhere it appears, atomically. Hierarchical tag matching in search rolls up subtags automatically — work that's tedious through Bear's UI alone.

- **You care about supply-chain hygiene.** Native `node:sqlite` — no unsigned third-party binaries, no Gatekeeper hassles. Network-free server: no remote-fetch tools, no prompt-injection surface.

If you have a small library and just want a quick notes integration, you may not need this yet.

## 📦 Installation

### Claude Desktop Extension

**Prerequisites**: [Bear app](https://bear.app/) must be installed and [Claude Desktop](https://claude.ai/download) must be installed.

1. Download the latest `bear-notes-mcpb-*.mcpb` extension file from [Releases](https://github.com/vasylenko/bear-notes-mcp/releases)
2. Make sure your Claude Desktop is running (start if not)
3. Doubleclick on the extension file – Claude Desktop should show you the installation prompt

    If doubleclick does not work for some reason, then open Claude -> Settings -> Extensions -> Advanced Settings -> click "Install Extension".

4. DONE!

Ask Claude to search your Bear notes with a query like "Search my Bear notes for 'meeting'" - you should see your notes appear in the response!

### Standalone MCP Server

Want to use this Bear Notes MCP server with Claude Code, Cursor, Codex, or other AI assistants?

**Requirements**: Node.js 24.13.0+

#### Claude Code (one command)

```bash
claude mcp add -s user bear-notes -- npx -y bear-notes-mcp@latest
```

#### Other AI Assistants

Add to your MCP configuration file:
```json
{
  "mcpServers": {
    "bear-notes": {
      "command": "npx",
      "args": ["-y", "bear-notes-mcp@latest"]
    }
  }
}
```

**More installation options and local development setup — [NPM.md](./docs/user/NPM.md)**

## 🛠️ Tools

<!-- TOOLS:START -->
- **`bear-open-note`** - Read the full text content of a Bear note by its ID or title, including OCR'd text from attached images and PDFs
- **`bear-create-note`** - Create a new note in your Bear library with optional title, content, and tags
- **`bear-search-notes`** - Find notes by relevance across titles, body, and OCR-extracted text from attached images and PDFs. Use a phrase or a few keywords describing what you're looking for; results are ranked by relevance and each includes a context snippet. Also supports tag, date-range, and pinned-only filters — combine with a search term or use them on their own to browse.
- **`bear-add-text`** - Insert text at the beginning or end of a Bear note, or within a specific section identified by its header. Requires the note's current revision token (the `Revision: N` line from your last response that referenced it); writes against a stale revision are rejected with an instruction to re-read with bear-open-note before retrying.
- **`bear-replace-text`** - Replace content in an existing Bear note — either the full body or a specific section. Requires the note's current revision token (the `Revision: N` line from your last response that referenced it); writes against a stale revision are rejected with an instruction to re-read with bear-open-note before retrying.
- **`bear-add-file`** - Attach a local file (image, PDF, document) to an existing Bear note by its ID or title. Bear extracts text from images and PDFs via OCR, making attachment content searchable. Requires the note's current revision token (the `Revision: N` line from your last response that referenced it); writes against a stale revision are rejected with an instruction to re-read with bear-open-note before retrying.
- **`bear-list-tags`** - List all tags in your Bear library as a hierarchical tree with note counts
- **`bear-find-untagged-notes`** - Find notes in your Bear library that have no tags assigned
- **`bear-add-tag`** - Add one or more tags to an existing Bear note. Requires the note's current revision token (the `Revision: N` line from your last response that referenced it); writes against a stale revision are rejected with an instruction to re-read with bear-open-note before retrying.
- **`bear-archive-note`** - Archive a Bear note to remove it from active lists without deleting it
- **`bear-rename-tag`** - Rename a tag across all notes in your Bear library
- **`bear-delete-tag`** - Delete a tag from all notes in your Bear library without affecting the notes
- **`bear-capabilities`** - Report the current server mode (read-only or Edit Mode) and how to unlock additional capabilities
<!-- TOOLS:END -->

## ⚙️ Configuration

### Debug Logging

Enable verbose logging for troubleshooting.

- **Claude Desktop**: Settings → Extensions → Configure (next to Bear Notes) → toggle "Debug Logging" → Save → Restart Claude
- **Standalone MCP server**: set environment variable `UI_DEBUG_TOGGLE=true`

### New Note Convention

By default, Bear places tags at the bottom of a note when created via API. Enable this option to place tags right after the title instead, separated by a horizontal rule.

<details>
<summary>See note structure with this convention enabled</summary>

```
┌──────────────────────────────┐
│ # Meeting Notes              │  ← Note title
│ #work #meetings              │  ← Tags right after title
│                              │
│ ---                          │  ← Separator
│                              │
│ Lorem Ipsum...               │  ← Note body
└──────────────────────────────┘
```

</details>

> [!TIP]
> This convention is **disabled by default** — it's opt-in so existing behavior is preserved.

- **Claude Desktop**: Settings → Extensions → Configure (next to Bear Notes) → toggle "New Note Convention" → Save → Restart Claude
- **Standalone MCP server**: set environment variable `UI_ENABLE_NEW_NOTE_CONVENTION=true`

Example standalone configuration with the convention enabled:
```json
{
  "mcpServers": {
    "bear-notes": {
      "command": "npx",
      "args": ["-y", "bear-notes-mcp@latest"],
      "env": {
        "UI_ENABLE_NEW_NOTE_CONVENTION": "true"
      }
    }
  }
}
```

### Edit Mode

Edit Mode unlocks all 8 write tools: create notes, add or replace text (full body or by section header), attach files, manage tags, archive. When off, the server is fully read-only — `tools/list` returns the 4 read tools (`bear-open-note`, `bear-search-notes`, `bear-find-untagged-notes`, `bear-list-tags`) plus `bear-capabilities` (a discovery tool that surfaces this unlock guidance for clients that drop the MCP `instructions` field). The LLM cannot mutate your library by mistake.

> [!TIP]
> Edit Mode is **off by default** so the server is provably read-only out of the box. Turn it on when you're ready for writes — and only when.

- **Claude Desktop**: Settings → Extensions → Configure (next to Bear Notes) → toggle "Edit Mode" → Save → Restart Claude
- **Standalone MCP server**: set environment variable `UI_ENABLE_CONTENT_REPLACEMENT=true`

Example standalone configuration with Edit Mode enabled:
```json
{
  "mcpServers": {
    "bear-notes": {
      "command": "npx",
      "args": ["-y", "bear-notes-mcp@latest"],
      "env": {
        "UI_ENABLE_CONTENT_REPLACEMENT": "true"
      }
    }
  }
}
```

## Technical Details

This server reads your Bear Notes SQLite database directly for search/read operations and uses Bear's X-callback-URL API for write operations. All data processing happens locally on your machine with no external network calls.

### Platforms Supported
macOS only because Bear desktop works only on macOS.

### Logs

**Claude Desktop:**
- MCP server logs go into `~/Library/Logs/Claude/main.log`, look for `bear-notes-mcp`
- MCP transport logs go to `~/Library/Logs/Claude/mcp-server-Bear\ Notes.log`

**Standalone MCP server:**
- Logs are written to stderr; enable debug logging with `UI_DEBUG_TOGGLE=true`

## FAQ

### Could this steal my data?
**No**. The server only reads Bear's local database (same data Bear app shows you) and uses Bear's native API to add text to the notes. No network transmission, no external servers.

### Why SQLite and not just a native Bear app's x-callback-url API?

For read operations (search/open), the x-callback-url API returns the note data in `x-success` response: that would require a server or custom binary to handle x-success responses - both risky and fragile. Direct SQLite read-only access is simpler and more reliable for searching and reading notes.

### Why native Node.js SQLite instead of third-party packages?

This avoids shipping an SQLite binary from third-party node packages, which poses supply chain risks and blocks the Claude Desktop extension from running on macOS.

Anthropic does not sign third-party SQLite binaries (obviously), causing macOS security systems to flag that the Claude process from a binary signed by Anthropic is trying to run another binary signed by a third party. As a result, Claude Desktop cannot run the extension.

### When I install the extension, I see a red warning: "Installing will grant access to everything on your computer." - what does this mean?

This is how Claude for Desktop reacts to the fact that this extension needs access to the Bear SQLite database on your Mac.

Claude warning system does not distinguish between the need to access only one file (what the extension does) versus the need to access all files (this is NOT what the extension does).

One of the ways to validate this is asking your Claude to analyze the codebase (it is pretty small) before installing the extension and tell you.

### How can I report a bug or contribute?

Use issues or discussions! I'd be glad to see your feedback or suggestions, or your help to make this project better! ❤️

## Staying Up To Date

Consider subscribing to release announcements to know when a new version is released:

![](https://raw.githubusercontent.com/vasylenko/bear-notes-mcp/HEAD/docs/assets/stay-updated.png)

I also post to [reddit.com/r/bearapp/](https://www.reddit.com/r/bearapp/) when there's a new release.
