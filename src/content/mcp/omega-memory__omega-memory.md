---
name: "omega-memory/omega-memory"
description: "Persistent memory for AI coding agents with semantic search, auto-capture, cross-session learning, and intelligent forgetting. #1 on LongMemEval (95.4%)."
category: "Knowledge & Memory"
repo: "omega-memory/omega-memory"
stars: 147
url: "https://github.com/omega-memory/omega-memory"
body_length: 14125
license: "Apache-2.0"
language: "Python"
pypi_id: "omega-memory"
homepage: "https://omegamax.co"
body_tr: |-
  # OMEGA

  **AI ajanları için çapraz model hafızası. Yerel-öncelikli. Claude, GPT, Gemini, Cursor, Claw Code ve herhangi bir MCP istemcisiyle çalışır.** Ajanınızın beyni başkasının sunucusunda yaşamamalı veya tek bir sağlayıcıya kilitlenmemelidir.

  [![Python 3.11+](https://img.shields.io/badge/python-3.11+-blue.svg)](https://www.python.org/downloads/)
  [![PyPI](https://img.shields.io/pypi/v/omega-memory.svg)](https://pypi.org/project/omega-memory/)
  [![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
  [![Tests](https://img.shields.io/badge/tests-1123%20passing-brightgreen.svg)]()

  ---

  ## Sorun

  AI kodlama ajanları durumsuz (stateless) çalışır. Her yeni oturum sıfırdan başlar. "Çözümler" ya sizi tek bir model sağlayıcısına kilitler ya da kod tabanı bağlamını bulutlarına gönderir.

  - **Bağlam kaybı.** Ajanlar oturumlar arasında her kararı, tercihi ve mimari seçimi unutur. Geliştiriciler oturum başına 10-30 dakika zaten kurulmuş olan bağlamı yeniden açıklamakla geçirir.
  - **Tekrarlanan hatalar.** Geçmiş oturumlardan öğrenmeden, ajanlar aynı hataları tekrar tekrar yaparlar. Ne işe yaradığını, ne başarısız olduğunu veya neden belirli bir yaklaşımın seçildiğini hatırlamazlar.
  - **Bulut hafızası = başkasının veritabanı.** Mem0 gibi hizmetler API anahtarları gerektirir ve verilerinizi sunucularına gönderir. Fiyatlandırmalarını değiştirdiğinde, satın alındığında veya çöktüğünde, ajanınızın birikmiş zekası kaybolur.
  - **Satıcı bağlantısı (vendor lock-in).** Anthropic'in Memory Tool sadece Claude ile çalışır. OpenAI'nin memory sadece GPT ile çalışır. Model değiştirin, hafızanızı kaybedin.

  OMEGA bunu çözer. Tamamen makinenizde çalışan hafıza, koordinasyon ve öğrenme. Her büyük LLM ve kodlama ajanıyla çalışır. Bulut yok. API anahtarı yok. Satıcı bağlantısı yok.

  <!-- TODO: terminal GIF showing memory recall across sessions -->
  <!-- mcp-name: io.github.omega-memory/omega-memory -->

  ## Hızlı Kurulum

  ```bash
  pip install omega-memory[server]    # Tam kurulum (hafıza + MCP sunucusu)
  omega setup                         # Modeli indirir, MCP'yi kaydeder, hook'ları yükler
  omega doctor                        # Her şeyin çalıştığını doğrula
  ```

  ### Claude Desktop

  ```bash
  pip install omega-memory[server]
  omega setup --client claude-desktop
  ```

  Bu, OMEGA'yı Claude Desktop'ın yapılandırmasında MCP sunucusu olarak kaydeder. Etkinleştirmek için Claude Desktop'ı yeniden başlatın.

  ### Cursor, Claw Code, Windsurf, Cline, Codex

  ```bash
  pip install omega-memory[server]
  omega setup --client cursor      # veya: claw-code, windsurf, cline, codex
  ```

  <details>
  <summary><strong>Yalnızca kütüphane kurulumu (MCP sunucusu yok)</strong></summary>

  Eğer OMEGA'ya sadece betikler, CI/CD veya otomasyon için Python kütüphanesi olarak ihtiyacınız varsa:

  ```bash
  pip install omega-memory    # Çekirdek yalnız, MCP sunucusu işlemi yok
  ```

  ```python
  from omega import store, query, remember

  store("Always use TypeScript strict mode", "user_preference")
  results = query("TypeScript preferences")
  ```

  Bu, MCP sunucusu çalıştırmadan tam depolama ve alma API'sini verir (~50 MB daha hafif, arka plan işlemi yok). Hook'lar yine de çalışır:

  ```bash
  omega setup --hooks-only    # Oto-yakalama + hafıza yüzeyleme, MCP sunucusu yok (~600MB RAM tasarrufu)
  ```

  </details>

  ### Kaynaktan

  ```bash
  git clone https://github.com/omega-memory/omega.git
  cd omega
  pip install -e ".[server,dev]"
  omega setup
  ```

  `omega setup` şu işlemleri yapacak:
  1. `~/.omega/` dizinini oluşturur
  2. ONNX embedding modelini (~90 MB) `~/.cache/omega/models/` konumuna indirir
  3. `omega-memory`'yi MCP sunucusu olarak kaydeder (Claude Code otomatik algılanır veya --client belirtin)
  4. Oturum hook'larını `~/.claude/settings.json` konumuna yükler
  5. `~/.claude/CLAUDE.md` dosyasına OMEGA bloğu ekler

  ## 60 Saniyede Başlangıç

  OMEGA doğal dil aracılığıyla çalışır — API çağrısı yok, yapılandırma yok. Sadece Claude ile konuşun.

  **1. Claude'a bir şeyi hatırlamasını söyleyin:**
  > "Remember that the auth system uses JWT tokens, not session cookies"

  Claude bunu semantik gömülümleri ile kalıcı bir hafıza olarak depolar.

  **2. Oturumu kapatın. Yeni bir tane açın.**

  **3. Sorguyla ilgili sorun:**
  > "What did I decide about authentication?"

  OMEGA ilgili hafızayı otomatik olarak yüzeye çıkarır:
  ```
  Found 1 relevant memory:
    [decision] "The auth system uses JWT tokens, not session cookies"
    Stored 2 days ago | accessed 3 times
  ```

  Hepsi bu. Hafızalar oturumlar arasında kalıcı olur, zaman içinde birikir ve açık sorulmasa bile ilgili olduğunda otomatik olarak yüzeye çıkarılır.

  ## Temel Özellikler

  - **Hafıza & Öğrenme** — Kararları, dersleri, hata düzenlerini ve tercihleri semantik aramalarla depolar. Claude, her şeyi yeniden açıklamanıza gerek kalmadan önemli olanı geri çağırır. Sıkıştırma, konsolidasyon, zaman çizelgesi, grafik geçişi ve bağlam sanallaştırması (kontrol noktası/devam) dahil 25 hafıza aracı.

  - **Çoklu Ajan Koordinasyonu** *(omega-pro)* — Dosya ve dal kilitlemesi, oturum yönetimi, bağımlılıkları olan görev kuyrukları, niyet yayını ve ajan-ajan mesajlaşması. Ajanların birbirlerinin çalışmalarını üzerine yazmasını önleyen 29 koordinasyon aracı.

  - **Akıllı LLM Yönlendirmesi** *(omega-pro)* — Görevleri sınıflandırır ve en uygun modele yönlendirir. Kodlama → Claude Sonnet. Hızlı düzenleme → Llama 8b (1/60 maliyetle). 1M token bağlamı → Gemini Flash. 5 sağlayıcı, 4 öncelik modu, 2ms'den az niyet sınıflandırması.

  - **Bilgi Tabanı** *(omega-pro)* — PDF, markdown, web sayfaları ve metin dosyalarını semantik böme ile aranabilir bir bilgi tabanına işle.

  - **Varlık Kaydı** *(omega-pro)* — İlişkiler, hiyerarşiler ve varlık kapsamlı hafızalar/profiller/belgeler ile çoklu varlık kurumsal hafızası.

  - **Güvenli Profil** *(omega-pro)* — macOS Keychain entegrasyonu ile AES-256 şifrelenmiş kişisel veri depolama.

  ## OMEGA Nasıl Karşılaştırılır

  | Özellik | OMEGA | Anthropic Memory | Mem0 | Zep |
  |---------|:-----:|:----------------:|:----:|:---:|
  | Herhangi bir LLM/ajan ile çalışır | **Evet** | Sadece Claude | Evet | Evet |
  | Verileriniz makinenizde kalır | **Evet** | Kısmi* | Hayır | Hayır |
  | Bulut bağımlılığı yok | **Evet** | Hayır (API gerekir) | Hayır | Hayır |
  | Semantik arama + bilgi grafiği | **Evet** | Hayır (dosya CRUD) | $249/ay | Evet |
  | Çoklu ajan koordinasyonu | **Evet** *(pro)* | Araştırma önizlemesi | Hayır | Hayır |
  | Claude Code, Cursor, Claw Code ile çalışır | **Evet** | Sadece Claude | Kısmi | Hayır |
  | Ücretsiz & açık kaynak | **Evet** (Apache 2.0) | Hayır | Freemium | Freemium |

  *Anthropic'in Memory Tool, verileri istemci tarafında depolama yapar ancak tüm hafıza işlemleri için Claude API çağrıları gerektirir. OMEGA tamamen cihazda çalışır; gömülümler (ONNX) dahil.*

  **Anthropic Memory, Anthropic için. OMEGA herkes için.**

  ## Mimari

  ```
       Claude Code  ·  Cursor  ·  Claw Code  ·  Herhangi bir MCP İstemcisi
                 │         │         │              │
                 └─────────┴─────┬───┴──────────────┘
                                 │ stdio/MCP
                 ┌───────────────▼─────────────┐
                 │   OMEGA MCP Sunucusu │
                 │   25 çekirdek aracı   │
                 └──┬──────────────────┘
                    │
           ┌────────▼──────────────┐
           │ Çekirdek Hafıza Motoru│
           │ (semantik arama,     │
           │  gömülümler, grafikler) │
           └─────┬─────────────────┘
                 │
                 ▼
           ┌──────────────────────────────────────┐
           │         omega.db (SQLite)             │
           │  memories | edges | embeddings        │
           └──────────────────────────────────────┘
  ```

  Tek veritabanı, modüler işleyiciler. İsteğe bağlı modüller (koordinasyon, yönlendirici, varlık, bilgi, profil) [omega-pro](https://github.com/omega-memory) aracılığıyla kullanılabilir ve aynı sunucu işlemine kaydedilir. Ayrı daemon yok, mikro hizmet yok.

  ## MCP Araçları Referansı

  OMEGA, Claude Code içinde MCP sunucusu olarak çalışır. Çekirdek paket 25 hafıza aracı sağlar. [omega-pro](https://github.com/omega-memory) koordinasyon, yönlendirme, varlık, bilgi ve profil araçları ekler.

  ### Hafıza (25 aracı)

  | Araç | Ne yapar |
  |------|-------------|
  | `omega_store` | Yazılı hafızayı depolama (karar, ders, hata, özet) |
  | `omega_query` | Tag filtreleri ve bağlamsal yeniden sıralama ile semantik arama |
  | `omega_welcome` | Son hafızalar ve profil ile oturum geçişi |
  | `omega_profile` | Kullanıcı profilini okuma veya güncelleme |
  | `omega_delete_memory` | Kimlikle belirli hafızayı silme |
  | `omega_edit_memory` | Hafızanın içeriğini düzenleme |
  | `omega_list_preferences` | Tüm depolanan kullanıcı tercihlerini listeleme |
  | `omega_health` | Hafıza kullanımı ve önerileri ile detaylı sağlık kontrolü |
  | `omega_backup` | Hafızaları yedekleme/geri yükleme için dışa/içe aktarma |
  | `omega_lessons` | Erişim sayısına göre sıralanmış oturum arası dersler |
  | `omega_feedback` | Yüzeye çıkarılan hafızada geri bildirim kaydetme |
  | `omega_clear_session` | Belirli oturum için tüm hafızaları temizleme |
  | `omega_similar` | Verilen hafızaya benzer hafızaları bulma |
  | `omega_timeline` | Hafızalar güne göre gruplandırılmış |
  | `omega_consolidate` | Eski hafızaları budama, özet üst sınırı, temiz kenarlar |
  | `omega_traverse` | İlişki grafiğini yürüme |
  | `omega_compact` | İlgili hafızaları kümeleme ve özetleme |
  | `omega_checkpoint` | Oturum arası süreklilik için görev durumunu kaydetme |
  | `omega_resume_task` | Önceden kontrol noktası alınmış görevini devam ettirme |
  | `omega_remind` | Zaman tabanlı hatırlatma ayarlama |
  | `omega_remind_list` | Etkin hatırlatmaları listeleme |
  | `omega_remind_dismiss` | Hatırlatmayı reddetme |
  | `omega_type_stats` | Hafıza sayıları olay türüne göre gruplandırılmış |
  | `omega_session_stats` | Hafıza sayıları oturumlara göre gruplandırılmış |
  | `omega_weekly_digest` | İstatistikler ve trendler ile haftalık bilgi özeti |

  ### omega-pro ile ek araçlar

  | Modül | Araç | Açıklama |
  |--------|------:|-------------|
  | Koordinasyon | 29 | Dosya/dal kilitlemesi, oturumlar, görevler, mesajlaşma, denetim |
  | Yönlendirici | 10 | LLM yönlendirmesi, niyet sınıflandırması, model geçişi |
  | Varlık | 8 | Kurumsal varlıklar, ilişkiler, hiyerarşiler |
  | Bilgi | 5 | Belge işleme, semantik arama, RAG |
  | Profil | 3 | AES-256 şifrelenmiş kişisel veri depolama |

  ## CLI

  | Komut | Açıklama |
  |---------|-------------|
  | `omega setup` | Dizinleri oluştur, modeli indir, MCP'yi kaydet, hook'ları yükle (`--hooks-only` MCP'yi atlamak için) |
  | `omega doctor` | Kurulum sağlığını doğrula |
  | `omega status` | Hafıza sayısı, depo boyutu, model durumu |
  | `omega query <text>` | Hafızaları semantik benzerliğe göre ara |
  | `omega store <text>` | Belirtilen türde hafıza depola |
  | `omega timeline` | Hafıza zaman çizelgesini güne göre gruplandırılmış şekilde göster |
  | `omega activity` | Yakın zamanlı oturum aktivitesi özetini göster |
  | `omega stats` | Hafıza türü dağılımı ve sağlık özeti |
  | `omega consolidate` | Çoğaltma kaldır, budama yap ve hafızayı optimize et |
  | `omega compact` | İlgili hafızaları kümeleme ve özetleme |
  | `omega backup` | omega.db'yi yedekle (son 5'i tutar) |
  | `omega validate` | Veritabanı bütünlüğünü doğrula |
  | `omega logs` | Son hook hatalarını göster |
  | `omega migrate-db` | Eski JSON'u SQLite'a geçir |

  <details>
  <summary><strong>Gelişmiş Detaylar</strong></summary>

  ### Hook'lar (7 işlem, 11 işleyici)

  Tüm hook'lar `fast_hook.py` → daemon UDS soket aracılığıyla, başarısız açık semantiği ile gönderilir.

  | Hook | Eşleştirici | İşleyiciler | Amaç |
  |------|---------|----------|---------|
  | SessionStart | tümü | `session_start` | Karşılama geçişi, oturum devamı |
  | Stop | tümü | `session_stop` | Özet |
  | UserPromptSubmit | tümü | `auto_capture` | Oto-yakalama dersleri/kararları |
  | PostToolUse | Edit/Write/NotebookEdit | `surface_memories` | İlgili hafızaları yüzeye çıkar |
  | PostToolUse | Bash/Read | `surface_memories` | İlgili hafızaları yüzeye çıkar |

  > omega-pro ile, ek koordinasyon işleyicileri otomatik olarak kaydedilir: oturum yaşam döngüsü, dosya/dal talep koruması, nabız ve git push koruması.

  ### Depolama

  | Yol | Amaç |
  |------|---------|
  | `~/.omega/omega.db` | SQLite veritabanı (hafızalar, gömülümler, kenarlar) |
  | `~/.omega/profile.json` | Kullanıcı profili |
  | `~/.omega/hooks.log` | Hook hata günlüğü |
  | `~/.cache/omega/models/bge-small-en-v1.5-onnx/` | ONNX embedding modeli |

  ### Arama Hattı (Pipeline)

  1. **Vektör benzerliği** sqlite-vec (kosinüs mesafesi, 384-dim bge-small-en-v1.5) üzerinden
  2. **Tam metin arama** FTS5 (hızlı anahtar kelime eşleşmesi)
  3. **Tür ağırlıklı puanlama** (kararlar/dersler 2x ağırlıklı)
  4. **Bağlamsal yeniden sıralama** (etiket, proje ve içerik eşleşmesine göre artırma)
  5. **Sorgu zamanında çoğaltma kaldırma**

  ### Hafıza Yaşam Döngüsü

  - **Çoğaltma kaldırma**: SHA256 hash (kesin) + embedding benzerliği 0.85+ (semantik) + tür başına Jaccard
  - **Gelişim**: Benzer içerik (%55-95) yeni içgörüleri mevcut hafızaya ekler
  - **TTL**: Oturum özeti 1 gün sonra sona erer, dersler/tercihler kalıcı
  - **Oto-ilişkili**: İlgili kenarları (benzerlik >= 0.45) en benzer 3 hafızaya oluşturur
  - **Sıkıştırma**: İlgili hafızaları kümeleme ve özetleme

  ### Hafıza Ayak İzi

  - Başlangıç: ~31 MB RSS
  - İlk sorgudan sonra (ONNX modeli yüklü): ~337 MB RSS
  - Veritabanı: ~242 hafıza için ~10.5 MB

  ### Ne Değiştirilir

  `omega setup` bu dosyaları `~/.omega/` dışında değiştirir:

  - `~/.claude.json` — `omega-memory` MCP sunucusu girişi ekler
  - `~/.claude/settings.json` — Hook girişleri ekler
  - `~/.claude/CLAUDE.md` — Yönetilen bir `<!-- OMEGA:BEGIN -->` bloğu ekler

  Tüm değişiklikler idempotent'tir.

  </details>

  ## Sorun Giderme

  **`omega doctor` içe aktarmada FAIL gösterir:**
  - Depo kökünden `pip install -e ".[server]"` sürümünü sağla
  - `python3 -c "import omega"` işleminin çalışıp çalışmadığını kontrol et

  **MCP sunucusu başlayamıyor:**
  - `pip install omega-memory[server]` çalıştır (the `[server]` ek dosyası MCP paketini içerir)

  **MCP sunucusu kayıtlı değil:**
  ```bash
  claude mcp add omega-memory -- python3 -m omega.server.mcp_server
  ```

  **Hook'lar ateşlemiyor:**
  - `~/.claude/settings.json` öğesinin OMEGA hook girişleri içerip içermediğini kontrol et
  - `~/.omega/hooks.log` hatalar için kontrol et

  ## Geliştirme

  ```bash
  pip install -e ".[server,dev]"
  pytest tests/                # 2198+ test
  ruff check src/              # Lint
  ```

  ## Kaldır

  ```bash
  claude mcp remove omega-memory
  rm -rf ~/.omega ~/.cache/omega
  pip uninstall omega-memory
  ```

  OMEGA girişlerini `~/.claude/settings.json` dosyasından ve `<!-- OMEGA:BEGIN -->` bloğunu `~/.claude/CLAUDE.md` dosyasından el ile kaldırın.

  ## Katkıda Bulunma

  - [Katkıda Bulunma Kılavuzu](CONTRIBUTING.md)
  - [Güvenlik Politikası](SECURITY.md)
  - [Değişim Günlüğü](CHANGELOG.md)
  - [Hata Bildir](https://github.com/omega-memory/omega/issues)

  ## Lisans

  Apache-2.0. [LICENSE](LICENSE) dosyasına bakın.
---

# OMEGA

**Cross-model memory for AI agents. Local-first. Works with Claude, GPT, Gemini, Cursor, Claw Code, and any MCP client.** Your agent's brain shouldn't live on someone else's server, or be locked to one provider.

[![Python 3.11+](https://img.shields.io/badge/python-3.11+-blue.svg)](https://www.python.org/downloads/)
[![PyPI](https://img.shields.io/pypi/v/omega-memory.svg)](https://pypi.org/project/omega-memory/)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Tests](https://img.shields.io/badge/tests-1123%20passing-brightgreen.svg)]()

---

## The Problem

AI coding agents are stateless. Every new session starts from zero. The "solutions" either lock you into one model provider or send your codebase context to their cloud.

- **Context loss.** Agents forget every decision, preference, and architectural choice between sessions. Developers spend 10-30 minutes per session re-explaining context that was already established.
- **Repeated mistakes.** Without learning from past sessions, agents make the same errors over and over. They don't remember what worked, what failed, or why a particular approach was chosen.
- **Cloud memory = someone else's database.** Services like Mem0 require API keys and send your data to their servers. When they change pricing, get acquired, or go down, your agent's accumulated intelligence disappears.
- **Vendor lock-in.** Anthropic's Memory Tool only works with Claude. OpenAI's memory only works with GPT. Switch models, lose your memory.

OMEGA solves this. Memory, coordination, and learning that runs entirely on your machine. Works with every major LLM and coding agent. No cloud. No API keys. No vendor lock-in.

<!-- TODO: terminal GIF showing memory recall across sessions -->
<!-- mcp-name: io.github.omega-memory/omega-memory -->

## Quick Install

```bash
pip install omega-memory[server]    # Full install (memory + MCP server)
omega setup                         # Downloads model, registers MCP, installs hooks
omega doctor                        # Verify everything works
```

### Claude Desktop

```bash
pip install omega-memory[server]
omega setup --client claude-desktop
```

This registers OMEGA as an MCP server in Claude Desktop's config. Restart Claude Desktop to activate.

### Cursor, Claw Code, Windsurf, Cline, Codex

```bash
pip install omega-memory[server]
omega setup --client cursor      # or: claw-code, windsurf, cline, codex
```

<details>
<summary><strong>Library-only install (no MCP server)</strong></summary>

If you only need OMEGA as a Python library for scripts, CI/CD, or automation:

```bash
pip install omega-memory    # Core only, no MCP server process
```

```python
from omega import store, query, remember

store("Always use TypeScript strict mode", "user_preference")
results = query("TypeScript preferences")
```

This gives you the full storage and retrieval API without running an MCP server (~50 MB lighter, no background process). Hooks still work:

```bash
omega setup --hooks-only    # Auto-capture + memory surfacing, no MCP server (~600MB RAM saved)
```

</details>

### From Source

```bash
git clone https://github.com/omega-memory/omega.git
cd omega
pip install -e ".[server,dev]"
omega setup
```

`omega setup` will:
1. Create `~/.omega/` directory
2. Download the ONNX embedding model (~90 MB) to `~/.cache/omega/models/`
3. Register `omega-memory` as an MCP server (Claude Code auto-detected, or specify --client)
4. Install session hooks into `~/.claude/settings.json`
5. Add an OMEGA block to `~/.claude/CLAUDE.md`

## 60-Second Quickstart

OMEGA works through natural language — no API calls, no configuration. Just talk to Claude.

**1. Tell Claude to remember something:**
> "Remember that the auth system uses JWT tokens, not session cookies"

Claude stores this as a permanent memory with semantic embeddings.

**2. Close the session. Open a new one.**

**3. Ask about it:**
> "What did I decide about authentication?"

OMEGA surfaces the relevant memory automatically:
```
Found 1 relevant memory:
  [decision] "The auth system uses JWT tokens, not session cookies"
  Stored 2 days ago | accessed 3 times
```

That's it. Memories persist across sessions, accumulate over time, and are surfaced automatically when relevant — even if you don't explicitly ask.

## Key Features

- **Memory & Learning** — Stores decisions, lessons, error patterns, and preferences with semantic search. Claude recalls what matters without you re-explaining everything each session. 25 memory tools including compaction, consolidation, timeline, graph traversal, and context virtualization (checkpoint/resume).

- **Multi-Agent Coordination** *(omega-pro)* — File and branch locking, session management, task queues with dependencies, intent broadcasting, and agent-to-agent messaging. 29 coordination tools that prevent agents from overwriting each other's work.

- **Intelligent LLM Routing** *(omega-pro)* — Classifies tasks and routes to the optimal model. Coding → Claude Sonnet. Quick edit → Llama 8b at 1/60th the cost. 1M token context → Gemini Flash. 5 providers, 4 priority modes, sub-2ms intent classification.

- **Knowledge Base** *(omega-pro)* — Ingest PDFs, markdown, web pages, and text files into a searchable knowledge base with semantic chunking.

- **Entity Registry** *(omega-pro)* — Multi-entity corporate memory with relationships, hierarchies, and entity-scoped memories/profiles/documents.

- **Secure Profile** *(omega-pro)* — AES-256 encrypted personal data storage with macOS Keychain integration.

## How OMEGA Compares

| Feature | OMEGA | Anthropic Memory | Mem0 | Zep |
|---------|:-----:|:----------------:|:----:|:---:|
| Works with any LLM/agent | **Yes** | Claude only | Yes | Yes |
| Your data stays on your machine | **Yes** | Partial* | No | No |
| No cloud dependency | **Yes** | No (needs API) | No | No |
| Semantic search + knowledge graph | **Yes** | No (file CRUD) | $249/mo | Yes |
| Multi-agent coordination | **Yes** *(pro)* | Research preview | No | No |
| Works with Claude Code, Cursor, Claw Code | **Yes** | Claude only | Partial | No |
| Free & open source | **Yes** (Apache 2.0) | No | Freemium | Freemium |

*Anthropic's Memory Tool stores data client-side but requires Claude API calls for all memory operations. OMEGA runs entirely on-device, including embeddings (ONNX).*

**Anthropic Memory is for Anthropic. OMEGA is for everyone.**

## Architecture

```
     Claude Code  ·  Cursor  ·  Claw Code  ·  Any MCP Client
               │         │         │              │
               └─────────┴─────┬───┴──────────────┘
                               │ stdio/MCP
               ┌───────────────▼─────────────┐
               │   OMEGA MCP Server   │
               │   25 core tools      │
               └──┬──────────────────┘
                  │
         ┌────────▼──────────────┐
         │ Core Memory Engine    │
         │ (semantic search,     │
         │  embeddings, graphs)  │
         └─────┬─────────────────┘
               │
               ▼
         ┌──────────────────────────────────────┐
         │         omega.db (SQLite)             │
         │  memories | edges | embeddings        │
         └──────────────────────────────────────┘
```

Single database, modular handlers. Optional modules (coordination, router, entity, knowledge, profile) are available via [omega-pro](https://github.com/omega-memory) and register into the same server process. No separate daemons, no microservices.

## MCP Tools Reference

OMEGA runs as an MCP server inside Claude Code. The core package provides 25 memory tools. [omega-pro](https://github.com/omega-memory) adds coordination, routing, entity, knowledge, and profile tools.

### Memory (25 tools)

| Tool | What it does |
|------|-------------|
| `omega_store` | Store typed memory (decision, lesson, error, summary) |
| `omega_query` | Semantic search with tag filters and contextual re-ranking |
| `omega_welcome` | Session briefing with recent memories and profile |
| `omega_profile` | Read or update user profile |
| `omega_delete_memory` | Delete a specific memory by ID |
| `omega_edit_memory` | Edit the content of a memory |
| `omega_list_preferences` | List all stored user preferences |
| `omega_health` | Detailed health check with memory usage and recommendations |
| `omega_backup` | Export or import memories for backup/restore |
| `omega_lessons` | Cross-session lessons ranked by access count |
| `omega_feedback` | Record feedback on a surfaced memory |
| `omega_clear_session` | Clear all memories for a specific session |
| `omega_similar` | Find memories similar to a given one |
| `omega_timeline` | Memories grouped by day |
| `omega_consolidate` | Prune stale memories, cap summaries, clean edges |
| `omega_traverse` | Walk the relationship graph |
| `omega_compact` | Cluster and summarize related memories |
| `omega_checkpoint` | Save task state for cross-session continuity |
| `omega_resume_task` | Resume a previously checkpointed task |
| `omega_remind` | Set a time-based reminder |
| `omega_remind_list` | List active reminders |
| `omega_remind_dismiss` | Dismiss a reminder |
| `omega_type_stats` | Memory counts grouped by event type |
| `omega_session_stats` | Memory counts grouped by session |
| `omega_weekly_digest` | Weekly knowledge digest with stats and trends |

### Additional tools with omega-pro

| Module | Tools | Description |
|--------|------:|-------------|
| Coordination | 29 | File/branch locking, sessions, tasks, messaging, audit |
| Router | 10 | LLM routing, intent classification, model switching |
| Entity | 8 | Corporate entities, relationships, hierarchies |
| Knowledge | 5 | Document ingestion, semantic search, RAG |
| Profile | 3 | AES-256 encrypted personal data storage |

## CLI

| Command | Description |
|---------|-------------|
| `omega setup` | Create dirs, download model, register MCP, install hooks (`--hooks-only` to skip MCP) |
| `omega doctor` | Verify installation health |
| `omega status` | Memory count, store size, model status |
| `omega query <text>` | Search memories by semantic similarity |
| `omega store <text>` | Store a memory with a specified type |
| `omega timeline` | Show memory timeline grouped by day |
| `omega activity` | Show recent session activity overview |
| `omega stats` | Memory type distribution and health summary |
| `omega consolidate` | Deduplicate, prune, and optimize memory |
| `omega compact` | Cluster and summarize related memories |
| `omega backup` | Back up omega.db (keeps last 5) |
| `omega validate` | Validate database integrity |
| `omega logs` | Show recent hook errors |
| `omega migrate-db` | Migrate legacy JSON to SQLite |

<details>
<summary><strong>Advanced Details</strong></summary>

### Hooks (7 processes, 11 handlers)

All hooks dispatch via `fast_hook.py` → daemon UDS socket, with fail-open semantics.

| Hook | Matcher | Handlers | Purpose |
|------|---------|----------|---------|
| SessionStart | all | `session_start` | Welcome briefing, session resume |
| Stop | all | `session_stop` | Summary |
| UserPromptSubmit | all | `auto_capture` | Auto-capture lessons/decisions |
| PostToolUse | Edit/Write/NotebookEdit | `surface_memories` | Surface relevant memories |
| PostToolUse | Bash/Read | `surface_memories` | Surface relevant memories |

> With omega-pro, additional coordination handlers register automatically: session lifecycle, file/branch claim guards, heartbeat, and git push guards.

### Storage

| Path | Purpose |
|------|---------|
| `~/.omega/omega.db` | SQLite database (memories, embeddings, edges) |
| `~/.omega/profile.json` | User profile |
| `~/.omega/hooks.log` | Hook error log |
| `~/.cache/omega/models/bge-small-en-v1.5-onnx/` | ONNX embedding model |

### Search Pipeline

1. **Vector similarity** via sqlite-vec (cosine distance, 384-dim bge-small-en-v1.5)
2. **Full-text search** via FTS5 (fast keyword matching)
3. **Type-weighted scoring** (decisions/lessons weighted 2x)
4. **Contextual re-ranking** (boosts by tag, project, and content match)
5. **Deduplication** at query time

### Memory Lifecycle

- **Dedup**: SHA256 hash (exact) + embedding similarity 0.85+ (semantic) + Jaccard per-type
- **Evolution**: Similar content (55-95%) appends new insights to existing memories
- **TTL**: Session summaries expire after 1 day, lessons/preferences are permanent
- **Auto-relate**: Creates `related` edges (similarity >= 0.45) to top-3 similar memories
- **Compaction**: Clusters and summarizes related memories

### Memory Footprint

- Startup: ~31 MB RSS
- After first query (ONNX model loaded): ~337 MB RSS
- Database: ~10.5 MB for ~242 memories

### What Gets Modified

`omega setup` modifies these files outside `~/.omega/`:

- `~/.claude.json` — Adds `omega-memory` MCP server entry
- `~/.claude/settings.json` — Adds hook entries
- `~/.claude/CLAUDE.md` — Adds a managed `<!-- OMEGA:BEGIN -->` block

All changes are idempotent.

</details>

## Troubleshooting

**`omega doctor` shows FAIL on import:**
- Ensure `pip install -e ".[server]"` from the repo root
- Check `python3 -c "import omega"` works

**MCP server fails to start:**
- Run `pip install omega-memory[server]` (the `[server]` extra includes the MCP package)

**MCP server not registered:**
```bash
claude mcp add omega-memory -- python3 -m omega.server.mcp_server
```

**Hooks not firing:**
- Check `~/.claude/settings.json` has OMEGA hook entries
- Check `~/.omega/hooks.log` for errors

## Development

```bash
pip install -e ".[server,dev]"
pytest tests/                # 2198+ tests
ruff check src/              # Lint
```

## Uninstall

```bash
claude mcp remove omega-memory
rm -rf ~/.omega ~/.cache/omega
pip uninstall omega-memory
```

Manually remove OMEGA entries from `~/.claude/settings.json` and the `<!-- OMEGA:BEGIN -->` block from `~/.claude/CLAUDE.md`.

## Contributing

- [Contributing Guide](CONTRIBUTING.md)
- [Security Policy](SECURITY.md)
- [Changelog](CHANGELOG.md)
- [Report a Bug](https://github.com/omega-memory/omega/issues)

## License

Apache-2.0. See [LICENSE](LICENSE).
