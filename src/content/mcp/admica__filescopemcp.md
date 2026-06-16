---
name: "admica/FileScopeMCP"
description: "Analyzes your codebase identifying important files based on dependency relationships. Generates diagrams and importance scores, helping AI assistants understand the codebase."
category: "Developer Tools"
repo: "admica/FileScopeMCP"
stars: 293
url: "https://github.com/admica/FileScopeMCP"
body_length: 10553
license: "NOASSERTION"
language: "TypeScript"
body_tr: |-
  # FileScopeMCP

  **AI'nız zaten kod yazmasını biliyor. Artık kod tabanınızı da tanıyor.**

  [![Build Status](https://github.com/admica/FileScopeMCP/actions/workflows/build.yml/badge.svg)](https://github.com/admica/FileScopeMCP/actions)
  [![Node.js](https://img.shields.io/badge/node-%3E%3D22.x-green)](https://nodejs.org/)
  [![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red.svg)](LICENSE)
  [![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/admica/FileScopeMCP)](https://archestra.ai/mcp-catalog/admica__filescopemcp)

  FileScopeMCP kodunuzu izler, her dosyayı öneme göre sıralar, tüm bağımlılıkları haritalandırır ve AI tarafından oluşturulan özetleri arka planda güncel tutar. LLM'niz "bu dosya ne yapar?" diye sorduğunda — kaynağı okumadan gerçek bir cevap alır.

  **Claude Code**, **Hermes Agent**, **Codex**, **OpenClaw**, **Cursor AI** ile veya bağımsız bir daemon olarak çalışır. TypeScript, JavaScript, Python, C, C++, Rust, Go, Ruby, Lua, Zig, PHP, C# ve Java'yı destekler.

  ## Temel Özellikler

  **Önem sıralaması** — her dosya 0-10 arasında puanlandırılır; kaç şeyin bağlı olduğu, ne export ettiği ve nerede bulunduğuna göre. LLM'niz kritik dosyaları ilk önce görür.

  **Bağımlılık haritası** — desteklenen tüm dillerde çift yönlü import takibi. AST seviyesi çıkarım (tree-sitter) TS/JS, Python, C, C++ ve Rust için; regex tabanlı Go, Ruby, Lua, Zig, PHP, C# ve Java için. Döngüsel bağımlılıkları da bulur.

  **Symbol zekası** — tree-sitter aracılığıyla TypeScript, JavaScript, Python, Go ve Ruby için fonksiyonları, sınıfları, interface'leri, tipleri, enum'ları, const'ları, modülleri ve struct'ları çıkarır. `find_symbol` adları dosya + satır aralığına çözer. `find_callers` ve `find_callees` TS/JS için call graph'i haritalandırır, böylece AI'nız refactor'lamadan önce "bu fonksiyonu kim çağırıyor?" sorusuna cevap verebilir.

  **Daima güncel** — dosya izleyici + anlamsal değişim algılaması metadata'yı otomatik olarak günceller. TS/JS için AST seviyesi diffing, diğer her şey için LLM tabanlı analiz. Yalnızca gerçekten değişen şeyler yeniden işlenir.

  **LLM broker** — arka plan süreci tüm AI işini llama.cpp'nin llama-server'ı aracılığıyla (veya OpenAI uyumlu herhangi bir HTTP API) koordine eder. Öncelik kuyruğu interaktif sorguların arka plan işlemesini geride bırakmasını sağlar. Tek bir GPU'da çalışır.

  **Nexus dashboard** — `localhost:1234` konumundaki bir web UI, tüm depoları arasında kod tabanınızı görsel olarak keşfetmenizi sağlar. İnteraktif bağımlılık grafikleri, dosya ayrıntı panelleri, canlı broker aktivitesi ve depo başına sağlık izleme.

  ## Ön Koşullar

  - **Node.js >= 22** ve npm ([indir](https://nodejs.org/))
  - **Build araçları** native modüller için (`better-sqlite3`, `tree-sitter`):
    - Linux: `sudo apt install build-essential python3`
    - macOS: `xcode-select --install`
    - Windows: Visual Studio Build Tools (C++ workload ile)

  ## Hızlı Başlangıç

  ```bash
  git clone https://github.com/admica/FileScopeMCP.git
  cd FileScopeMCP
  ./build.sh          # deps kurar, derler, Claude Code'a kaydeder
  ```

  `./build.sh` FileScopeMCP'yi `claude mcp add --scope user` aracılığıyla global olarak kaydeder (idempotent; `npm run register-mcp` ile yeniden çalıştırın). `claude` CLI eksikse, build yine de başarılı olur — diğer MCP istemcileri için [docs/mcp-clients.md](docs/mcp-clients.md) bölümüne bakın.

  Herhangi bir projede Claude Code oturumu açın ve FileScopeMCP otomatik olarak başlatılır. MCP araçları otomatik olarak görünür — AI'nız konuşma sırasında doğrudan çağırabilir:

  ```
  find_important_files(limit: 5)
  status()
  ```

  ### Fikir sahibi Claude Code yüklemesi (önerilen)

  Proje primer `CLAUDE.md` ekleyen ve isteğe bağlı hook şablonlarına işaret eden daha zengin bir yükleme için:

  ```bash
  npm run install-claude-code   # veya: npx filescope-install --claude-code
  ```

  Komut katmanlıdır, invazif değildir — asla `.claude/settings.json` dosyasına otomatik yazma yapmaz. Hook şablonları [docs/claude-code-hooks.md](docs/claude-code-hooks.md) konumunda belgelenmiştir; istediğiniz zaman ayarlarınıza yapıştırın. `CLAUDE.md` primer `<!-- BEGIN filescope -->` / `<!-- END filescope -->` işaretleriyle sarılıdır, böylece çevre içeriğine dokunmadan temiz bir şekilde eklenebilir, değiştirilebilir veya kaldırılabilir. Tasarım gerekçesi için [ROADMAP.md](ROADMAP.md) Aşama 1'e bakın.

  ### Agent Runtimes (Hermes, Codex, OpenClaw)

  Agent runtimes FileScopeMCP'yi repo'nun `AGENTS.md` aracılığıyla keşfeder; bu dosya MCP kaydı config'i, broker/LLM kurulumu ve `skills/filescope-mcp/SKILL.md` konumundaki taşınabilir skill dosyasına işaret içerir.

  **Hermes** — `~/.hermes/config.yaml` dosyasına ekleyin:
  ```yaml
  mcp_servers:
    filescope:
      command: "node"
      args: ["/path/to/FileScopeMCP/dist/mcp-server.js"]
      timeout: 120
  ```

  **Zaten çalışan bir yerel LLM var mı?** Broker'ı ona yönlendirin — `~/.filescope/broker.json` düzenleyin ve `baseURL`'i LLM'nizin endpoint'ine ayarlayın. Ayrıntılar için `AGENTS.md`'ye bakın.

  ### LLM Özetleri (İsteğe Bağlı)

  Platform spesifik bir rehber için `./setup-llm.sh` çalıştırın; ayrıntılar için [docs/llm-setup.md](docs/llm-setup.md) konumuna bakın. Linux'ta `sudo ./setup-llm.sh --install-service` aracılığıyla llama-server'ı systemd birimi olarak kaydedebilirsiniz (loglar journalctl'e akar, OOM korumalı, boot'ta otomatik yeniden başla). Flag, llama-server Windows host'u üzerinde çalışır olduğundan WSL2 altında bir no-op'tur. Tamamen llama-server olmadan, her şey çalışır (dosya izleme, bağımlılıklar, semboller, call grafikler — yalnızca LLM tarafından oluşturulan özet yok). Agent runtime'ınızın zaten yerel bir LLM'si varsa, broker'ı bunun yerine yeniden kullanmak için yapılandırın.

  Projenizin `.gitignore` dosyasına ekleyin:
  ```
  .filescope/
  .filescope-daemon.log
  ```

  ### LLM İzleme (İsteğe Bağlı)

  llama-server yerel olarak çalışıyorsa, isteğe bağlı bir VictoriaMetrics + vmui stack'i VRAM, RAM, swap, throughput ve kümülatif çalışma için tek çift dashboard sağlar. Toplam resident footprint ~120 MB, systemd cgroups aracılığıyla sınırlandırılmış, böylece başarısız bir exporter llama-server'ı OOM-kill yapamaz.

  ```bash
  sudo ./monitoring/install.sh
  ```

  `http://<host>:8881/vmui/#/dashboards` konumundaki dashboard'a göz atın. Layout ve uninstall script'i için [monitoring/](monitoring/) konumuna bakın.

  ## MCP Araçları

  | Araç | Ne yapar |
  |------|----------|
  | `status` | Broker bağlantısı, kuyruk derinliği, LLM ilerleme, izleyici durumu |
  | `find_important_files` | Önem puanı ve bağımlılık sayılarına göre en üstteki dosyalar |
  | `get_file_summary` | Bir dosya hakkında her şey: özet, konseptler, değişiklik etkisi, export'lar, deps, eski |
  | `list_files` | Tam dosya ağacı (arg yok) veya önem sırasına göre düz top-N (`maxItems` ile) |
  | `find_symbol` | Bir sembol adını dosya + satır aralığına çözün; son `*` aracılığıyla prefix match'i destekler |
  | `find_callers` | Adlandırılmış bir sembolü çağıran tüm sembolleri bulun (TS/JS call graph) |
  | `find_callees` | Adlandırılmış bir sembolün çağırdığı tüm sembolleri bulun (TS/JS call graph) |
  | `search` | Semboller, özetler, amaç ve yollar arasında dosya metadata'sında ara |
  | `list_changed_since` | Bir timestamp veya git SHA'dan bu yana değişen dosyalar |
  | `get_communities` | Louvain kümelenmiş dosya grupları (import coupling'e göre) |
  | `detect_cycles` | Döngüsel bağımlılık zincirlerini bulun |
  | `get_cycles_for_file` | Belirli bir dosyayı içeren döngüler |
  | `scan_all` | Dosyaları broker aracılığıyla LLM özetleme için sıraya alın |
  | `set_base_directory` | Farklı bir projeyi gösterin |
  | `set_file_summary` | Bir dosyanın LLM özetini manuel olarak ayarlayın veya geçersiz kılın |
  | `set_file_importance` | Bir dosyanın önem puanını manuel olarak ayarlayın (0-10) |
  | `exclude_and_remove` | Dosyaları/şablonları izlemeden çıkar (yıkıcı) |

  ## Nexus Dashboard

  ```bash
  npm run build:nexus  # tek seferlik build (API + UI)
  npm run nexus        # http://localhost:1234 konumunda başlar
  ```

  Makinenizde her FileScopeMCP repo'su ile bağlanan salt okunur web dashboard:

  - **Proje görünümü** — önem ısı renkleri ve eski göstergeleri ile dosya ağacı, tam metadata için herhangi bir dosyaya tıklayın
  - **Bağımlılık grafiği** — interaktif Cytoscape.js visualizasyonu, dizine göre filtreleyin, düğümleri incelemek için tıklayın
  - **Sistem görünümü** — canlı broker durumu, depo başına token kullanımı, streaming aktivite günlüğü
  - **Ayarlar** — hangi depoların görünüp görünmediğini yönetin, blacklist'ten kaldırın veya geri yükleyin

  `.filescope/data.db` dizinlerini arayarak depoları otomatik olarak keşfeder. Yapılandırma gerekli değildir.

  ## Multi-Repo İzleyicileri (systemd, yalnızca Linux)

  `~/.filescope/nexus.json` içindeki her repo'yu — MCP istemcisi açık olmadığında bile — sürekli olarak izlemek isteyen kullanıcılar için, depo başına izleyici user unit'ini kurun:

  ```bash
  ./scripts/nexus.sh install-watchers     # unit'i yazıp, etkinleştirip, başlatır
  systemctl --user status filescope-watchers.service
  ./scripts/nexus.sh uninstall-watchers   # simetrik kaldırma
  ```

  Unit `scripts/watchers.mjs`'yi başlatır; kayıtlı repo başına bir `dist/mcp-server.js --base-dir=<repo>` child'ı başlatır ve denetler (çıkışta otomatik yeniden başla, SIGTERM temiz shutdown). Unit `Requires=filescope-broker.service` — broker user unit'ini kendiniz kurun; bu komut biri sevk etmez.

  Loglar: `~/.filescope/watchers.log` (supervisor) ve `~/.filescope/watcher-logs/*.log` (depo başına children).

  ## Nasıl Çalışır

  ```
  Kodunuz değişir
      → dosya izleyici bunu yakalar
      → AST diff değişimi sınıflandırır (export'lar? tipler? sadece body?)
      → semboller çıkarılır (fonksiyonlar, sınıflar, tipler, vb.)
      → call-site kenarları çözümlenir (TS/JS: kim neyi çağırır)
      → önem puanları yeniden hesaplanır
      → eski durum bağımlılara kaskad yapılır (sadece export'lar/tipler değişmişse)
      → LLM broker özet, konsept ve değişiklik etkisini yeniden oluşturur
      → AI'nızın sonraki sorgusu güncel cevaplar alır
  ```

  Her şey proje başına `.filescope/data.db` (SQLite, WAL modu) içinde yaşar. Broker, Unix socket aracılığıyla tüm repo'larınız arasında LLM işini `~/.filescope/broker.sock` konumunda koordine eder.

  ## Belgeler

  | Belge | İçerikte ne var |
  |-------|-----------------|
  | [AGENTS.md](AGENTS.md) | Cross-agent context dosyası — MCP kaydı, broker config'i, mimari (Hermes, Codex, OpenClaw tarafından okunur) |
  | [FileScopeMCP Skill](skills/filescope-mcp/SKILL.md) | Taşınabilir skill dosyası — araç referansı, iş akışları, FileScopeMCP kullanan agentler için ipuçları |
  | [LLM Setup](docs/llm-setup.md) | llama.cpp / llama-server yüklemesi — Linux/macOS native (varsayılan), WSL2+Windows veya remote LAN |
  | [Configuration](docs/configuration.md) | Depo başına config, broker config'i, görmezden gelme şablonları |
  | [MCP Clients](docs/mcp-clients.md) | Claude Code, Cursor AI, daemon modu kurulumu |
  | [Troubleshooting](docs/troubleshooting.md) | Yaygın sorunlar ve çözümleri |
  | [Internals](docs/internals.md) | Bağımlılık algılaması, önem formülü, sembol çıkarması, call-site kenarları, depolama |
  | [LLM Monitoring](monitoring/) | Yerel llama-server için isteğe bağlı VictoriaMetrics + vmui dashboard |

  ## Lisans

  Copyright (c) 2026 admica. Tüm hakları saklıdır. [LICENSE](LICENSE) dosyasına bakın.
---

# FileScopeMCP

**Your AI already knows how to code. Now it knows your codebase.**

[![Build Status](https://github.com/admica/FileScopeMCP/actions/workflows/build.yml/badge.svg)](https://github.com/admica/FileScopeMCP/actions)
[![Node.js](https://img.shields.io/badge/node-%3E%3D22.x-green)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red.svg)](LICENSE)
[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/admica/FileScopeMCP)](https://archestra.ai/mcp-catalog/admica__filescopemcp)

FileScopeMCP watches your code, ranks every file by importance, maps all dependencies, and keeps AI-generated summaries fresh in the background. When your LLM asks "what does this file do?" — it gets a real answer without reading the source.

Works with **Claude Code**, **Hermes Agent**, **Codex**, **OpenClaw**, **Cursor AI**, or as a standalone daemon. Supports TypeScript, JavaScript, Python, C, C++, Rust, Go, Ruby, Lua, Zig, PHP, C#, and Java.

## Key Features

**Importance ranking** — every file scored 0-10 based on how many things depend on it, what it exports, and where it lives. Your LLM sees the critical files first.

**Dependency mapping** — bidirectional import tracking across all supported languages. AST-level extraction (tree-sitter) for TS/JS, Python, C, C++, and Rust; regex-based for Go, Ruby, Lua, Zig, PHP, C#, and Java. Finds circular dependencies too.

**Symbol intelligence** — extracts functions, classes, interfaces, types, enums, consts, modules, and structs via tree-sitter for TypeScript, JavaScript, Python, Go, and Ruby. `find_symbol` resolves names to file + line range. `find_callers` and `find_callees` map the call graph for TS/JS so your AI can answer "who calls this function?" before refactoring.

**Always fresh** — file watcher + semantic change detection means metadata updates automatically. AST-level diffing for TS/JS, LLM-powered analysis for everything else. Only re-processes what actually changed.

**LLM broker** — a background process coordinates all AI work through llama.cpp's llama-server (or any OpenAI-compatible HTTP API). Priority queue ensures interactive queries beat background processing. Runs on a single GPU.

**Nexus dashboard** — a web UI at `localhost:1234` that lets you visually explore your codebase across all your repos. Interactive dependency graphs, file detail panels, live broker activity, and per-repo health monitoring.

## Prerequisites

- **Node.js >= 22** and npm ([download](https://nodejs.org/))
- **Build tools** for native modules (`better-sqlite3`, `tree-sitter`):
  - Linux: `sudo apt install build-essential python3`
  - macOS: `xcode-select --install`
  - Windows: Visual Studio Build Tools with C++ workload

## Quick Start

```bash
git clone https://github.com/admica/FileScopeMCP.git
cd FileScopeMCP
./build.sh          # installs deps, compiles, registers with Claude Code
```

`./build.sh` registers FileScopeMCP globally via `claude mcp add --scope user` (idempotent; re-run with `npm run register-mcp`). If the `claude` CLI is missing, the build still succeeds — see [docs/mcp-clients.md](docs/mcp-clients.md) for other MCP clients.

Open a Claude Code session in any project and FileScopeMCP auto-initializes. The MCP tools appear automatically — your AI can call them directly during conversation:

```
find_important_files(limit: 5)
status()
```

### Opinionated Claude Code install (recommended)

For a richer install that adds a project priming `CLAUDE.md` and points to optional hook templates:

```bash
npm run install-claude-code   # or: npx filescope-install --claude-code
```

The command is layered, not invasive — it never auto-writes to your `.claude/settings.json`. Hook templates are documented at [docs/claude-code-hooks.md](docs/claude-code-hooks.md); paste them into your settings if and when you want them. The `CLAUDE.md` primer is wrapped in `<!-- BEGIN filescope -->` / `<!-- END filescope -->` markers so it can be cleanly added, replaced, or removed without touching surrounding content. See [ROADMAP.md](ROADMAP.md) Phase 1 for the design rationale.

### Agent Runtimes (Hermes, Codex, OpenClaw)

Agent runtimes discover FileScopeMCP via the repo's `AGENTS.md`, which includes MCP registration config, broker/LLM setup, and a pointer to the portable skill file at `skills/filescope-mcp/SKILL.md`.

**Hermes** — add to `~/.hermes/config.yaml`:
```yaml
mcp_servers:
  filescope:
    command: "node"
    args: ["/path/to/FileScopeMCP/dist/mcp-server.js"]
    timeout: 120
```

**Already have a local LLM running?** Point the broker at it — edit `~/.filescope/broker.json` and set `baseURL` to your LLM's endpoint. See `AGENTS.md` for details.

### LLM Summaries (Optional)

Run `./setup-llm.sh` for a platform-specific guide to setting up llama.cpp's `llama-server` — see [docs/llm-setup.md](docs/llm-setup.md) for details. On Linux you can also `sudo ./setup-llm.sh --install-service` to register llama-server as a systemd unit (logs flow to journalctl, OOM-protected, auto-restart on boot). The flag is a no-op under WSL2 since llama-server runs on the Windows host there. Without llama-server entirely, everything else still works (file tracking, dependencies, symbols, call graphs — just no LLM-generated summaries). If your agent runtime already has a local LLM, configure the broker to reuse it instead.

Add to your project's `.gitignore`:
```
.filescope/
.filescope-daemon.log
```

### LLM Monitoring (Optional)

If llama-server is running locally, an optional VictoriaMetrics + vmui stack gives you a single-pane dashboard for VRAM, RAM, swap, throughput, and cumulative work. Total resident footprint ~120 MB, capped via systemd cgroups so a misbehaving exporter can't OOM-kill llama-server.

```bash
sudo ./monitoring/install.sh
```

Browse the dashboard at `http://<host>:8881/vmui/#/dashboards`. See [monitoring/](monitoring/) for the layout and uninstall script.

## MCP Tools

| Tool | What it does |
|------|-------------|
| `status` | Broker connection, queue depth, LLM progress, watcher state |
| `find_important_files` | Top files by importance score with dependency counts |
| `get_file_summary` | Everything about a file: summary, concepts, change impact, exports, deps, staleness |
| `list_files` | Full file tree (no args) or flat top-N by importance (with `maxItems`) |
| `find_symbol` | Resolve a symbol name to file + line range; supports prefix match via trailing `*` |
| `find_callers` | Find all symbols that call a named symbol (TS/JS call graph) |
| `find_callees` | Find all symbols that a named symbol calls (TS/JS call graph) |
| `search` | Search file metadata across symbols, summaries, purpose, and paths |
| `list_changed_since` | Files changed since a timestamp or git SHA |
| `get_communities` | Louvain-clustered file groups by import coupling |
| `detect_cycles` | Find circular dependency chains |
| `get_cycles_for_file` | Cycles involving a specific file |
| `scan_all` | Queue files for LLM summarization via the broker |
| `set_base_directory` | Point at a different project |
| `set_file_summary` | Manually set or override a file's LLM summary |
| `set_file_importance` | Manually set a file's importance score (0-10) |
| `exclude_and_remove` | Drop files/patterns from tracking (destructive) |

## Nexus Dashboard

```bash
npm run build:nexus  # one-time build (API + UI)
npm run nexus        # starts at http://localhost:1234
```

A read-only web dashboard that connects to every FileScopeMCP repo on your machine:

- **Project view** — file tree with importance heat colors and staleness indicators, click any file for full metadata
- **Dependency graph** — interactive Cytoscape.js visualization, filter by directory, click nodes to inspect
- **System view** — live broker status, per-repo token usage, streaming activity log
- **Settings** — manage which repos appear, remove or restore from blacklist

Auto-discovers repos by scanning for `.filescope/data.db` directories. No configuration needed.

## Multi-Repo Watchers (systemd, Linux only)

For users who want every repo in `~/.filescope/nexus.json` watched continuously — not only when an MCP client is open — install the per-repo watchers user unit:

```bash
./scripts/nexus.sh install-watchers     # writes the unit, enables it, starts it
systemctl --user status filescope-watchers.service
./scripts/nexus.sh uninstall-watchers   # symmetric removal
```

The unit launches `scripts/watchers.mjs`, which spawns one `dist/mcp-server.js --base-dir=<repo>` child per registered repo and supervises them (auto-restart on exit, SIGTERM-clean shutdown). The unit `Requires=filescope-broker.service` — install the broker user unit yourself; this command does not ship one.

Logs: `~/.filescope/watchers.log` (supervisor) and `~/.filescope/watcher-logs/*.log` (per-repo children).

## How It Works

```
Your code changes
    → file watcher picks it up
    → AST diff classifies the change (exports? types? body only?)
    → symbols extracted (functions, classes, types, etc.)
    → call-site edges resolved (TS/JS: who calls what)
    → importance scores recalculated
    → staleness cascades to dependents (only if exports/types changed)
    → LLM broker regenerates summaries, concepts, change impact
    → your AI's next query gets fresh answers
```

Everything lives in `.filescope/data.db` (SQLite, WAL mode) per project. The broker coordinates LLM work across all your repos via a Unix socket at `~/.filescope/broker.sock`.

## Documentation

| Doc | What's in it |
|-----|-------------|
| [AGENTS.md](AGENTS.md) | Cross-agent context file — MCP registration, broker config, architecture (read by Hermes, Codex, OpenClaw) |
| [FileScopeMCP Skill](skills/filescope-mcp/SKILL.md) | Portable skill file — tool reference, workflows, tips for agents using FileScopeMCP |
| [LLM Setup](docs/llm-setup.md) | llama.cpp / llama-server installation — Linux/macOS native (default), WSL2+Windows, or remote LAN |
| [Configuration](docs/configuration.md) | Per-project config, broker config, ignore patterns |
| [MCP Clients](docs/mcp-clients.md) | Setup for Claude Code, Cursor AI, daemon mode |
| [Troubleshooting](docs/troubleshooting.md) | Common issues and fixes |
| [Internals](docs/internals.md) | Dependency detection, importance formula, symbol extraction, call-site edges, storage |
| [LLM Monitoring](monitoring/) | Optional VictoriaMetrics + vmui dashboard for the local llama-server |

## License

Copyright (c) 2026 admica. All rights reserved. See [LICENSE](LICENSE).
