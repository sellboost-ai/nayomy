---
name: "varun29ankuS/shodh-memory"
description: "Cognitive memory for AI agents with Hebbian learning, 3-tier architecture, and knowledge graphs. Single ~15MB binary, runs offline on edge devices."
description_tr: "AI ajanlar için Hebbian öğrenme, 3 seviyeli mimari ve bilgi grafikleriyle bilişsel bellek. Yaklaşık 15MB'lık tek bir binary dosyası, edge cihazlarda çevrimdışı çalışır."
category: "Knowledge & Memory"
repo: "varun29ankuS/shodh-memory"
stars: 215
url: "https://github.com/varun29ankuS/shodh-memory"
body_length: 15043
license: "Apache-2.0"
language: "Rust"
homepage: "https://www.shodh-memory.com"
body_tr: |-
  <p align="center">
    
  </p>

  <h1 align="center">Shodh-Memory</h1>

  <p align="center"><b>AI ajanları ve robotlar için kalıcı bilişsel hafıza. Önemli olanı hatırla, gereksizi unut, kullanımla daha akıllı hale gel.</b></p>

  <p align="center">
    <a href="https://github.com/varun29ankuS/shodh-memory/actions"></a>
    <a href="https://registry.modelcontextprotocol.io/v0/servers?search=shodh"></a>
    <a href="https://cursor.directory/plugins/shodh-memory-1"></a>
    <a href="https://crates.io/crates/shodh-memory"></a>
    <a href="https://www.npmjs.com/package/@shodh/memory-mcp"></a>
    <a href="https://pypi.org/project/shodh-memory/"></a>
    <a href="https://hub.docker.com/r/varunshodh/shodh-memory"></a>
    <a href="#robotics--ros2"></a>
    <a href="LICENSE"></a>
    <a href="https://discord.gg/HrpzXqTtEp"></a>
  </p>

  ---

  <p align="center">
    
  </p>

  AI ajanları her oturumda her şeyi unutur. Robotlar misyon arasında bağlamı kaybeder. Hataları tekrarlar, desenleri kaçırır ve her etkileşimi ilk kez yapar.

  Shodh-Memory bunu çözer. Gerçekten öğrenen kalıcı bir hafızadır — sık kullandığın anılar bulunması daha kolay hale gelir, eski alakasız bağlam otomatik solup gider ve bir şeyi hatırlamak ilgili şeyleri geri getirir. Chat ajanları (MCP/HTTP), robotlar (Zenoh/ROS2) ve edge cihazları için çalışır. API anahtarı yok. Bulut yok. Dış veritabanı yok. Tek binary.

  ## Neden mem0 / Cognee / Zep Kullanmayasınız ki?

  | | **Shodh** | **mem0** | **Cognee** | **Zep** |
  |---|---|---|---|---|
  | Hafıza eklemek için LLM çağrıları | **0** | 2+ per add | 3+ per cognify | 2+ per episode |
  | Gerekli dış hizmetler | **Hiçbiri** | OpenAI + vector DB | OpenAI + Neo4j + vector DB | OpenAI + Neo4j |
  | Hafıza depolamak için zaman | **55ms** | ~20 saniye | saniye | saniye |
  | Kullanımdan öğrenir | **Evet** (Hebbian) | Hayır | Hayır | Hayır |
  | Alakasız veriyi unutur | **Evet** (decay) | Hayır | Hayır | Sadece temporal |
  | Tamamen çevrimdışı çalışır | **Evet** | Hayır | Hayır | Hayır |
  | Robotik / ROS2 yerel desteği | **Evet** (Zenoh) | Hayır | Hayır | Hayır |
  | Binary boyutu | **~17MB** | pip install + API anahtarları | pip install + API anahtarları + Neo4j | Sadece bulut |

  Diğer her hafıza sistemi zekayı LLM API çağrılarına devreder — bu yüzden yavaş, pahalı ve çevrimdışı çalışamaz. Shodh algoritmik zekayı kullanır: yerel embeddings, matematiksel decay, öğrenilmiş bağlantılar. Döngüde LLM yok.

  ## Başlayalım

  ### Birleştirilmiş CLI

  ```bash
  # GitHub Releases'ten indir (veya brew tap varun29ankuS/shodh-memory && brew install shodh-memory)
  shodh init          # İlk kurulum — config oluşturur, API anahtarı oluşturur, AI modeli indirir
  shodh server        # Memory serverini :3030'da başlat
  shodh setup-hooks   # Claude Code hooks kurulum talimatlarını yazdır
  shodh tui           # TUI dashboard'unu başlat
  shodh status        # Server sağlığını kontrol et
  shodh doctor        # Sorunları teşhis et
  ```

  Tek binary, tüm işlevsellik. Docker yok, API anahtarı yok, dış bağımlılık yok.

  ### Claude Code

  ```bash
  # 1. MCP serverini ekle (backend binary'yi otomatik indirir)
  claude mcp add shodh-memory -- npx -y @shodh/memory-mcp

  # 2. Otomatik hafıza yakalamayı etkinleştir (isteğe bağlı ama tavsiye edilir)
  npx @shodh/memory-mcp setup-hooks
  ```

  Adım 1 Claude'a kalıcı hafıza araçları verir. Adım 2, her oturumdan bağlamı otomatik olarak yakalayan [Claude Code hooks](https://docs.anthropic.com/en/docs/claude-code/hooks) kurar — hafızalar sormanda ortaya çıkar.

  <details>
  <summary>Veya Docker ile (production / paylaşılan sunucular için)</summary>

  ```bash
  # 1. Serverini başlat
  docker run -d -p 3030:3030 -v shodh-data:/data varunshodh/shodh-memory

  # 2. Claude Code'a ekle
  claude mcp add shodh-memory -- npx -y @shodh/memory-mcp
  ```
  </details>

  <details>
  <summary>Cursor / Claude Desktop config</summary>

  ```json
  {
    "mcpServers": {
      "shodh-memory": {
        "command": "npx",
        "args": ["-y", "@shodh/memory-mcp"]
      }
    }
  }
  ```

  Yerel kullanım için API anahtarı gerekmez — otomatik olarak oluşturulur. Uzak sunucular için `"env": { "SHODH_API_KEY": "your-key" }` ekle.
  </details>

  ### Python

  ```bash
  pip install shodh-memory
  ```

  ```python
  from shodh_memory import Memory

  memory = Memory(storage_path="./my_data")
  memory.remember("User prefers dark mode", memory_type="Decision")
  results = memory.recall("user preferences", limit=5)
  ```

  ### Rust

  ```toml
  [dependencies]
  shodh-memory = "0.1"
  ```

  ```rust
  use shodh_memory::{MemorySystem, MemoryConfig};

  let memory = MemorySystem::new(MemoryConfig::default())?;
  memory.remember("user-1", "User prefers dark mode", MemoryType::Decision, vec![])?;
  let results = memory.recall("user-1", "user preferences", 5)?;
  ```

  ### Docker

  ```bash
  docker run -d -p 3030:3030 -v shodh-data:/data varunshodh/shodh-memory
  ```

  ## Ne Yapar

  ```
  Bir hafızayı sık kullanırsan  →  bulunması daha kolay hale gelir (Hebbian learning)
  Bir hafızayı kullanmayı bırakırsan →  zamanla solup gider (activation decay)
  Bir hafızayı hatırlarsın   →  ilgili hafızalar da ortaya çıkar (spreading activation)
  Bir bağlantı kullanılırsa    →  kalıcı hale gelir (long-term potentiation)
  ```

  Kaputun altında, hafızalar üç katman arasında akar:

  ```
  Çalışan Hafıza ──overflow──▶ Oturum Hafızası ──importance──▶ Uzun Vadeli Hafıza
     (100 item)                  (100 MB)                      (RocksDB)
  ```

  Bu [Cowan's working memory model](https://doi.org/10.1177/0963721409359277) ve [Wixted's memory decay research](https://doi.org/10.1111/j.1467-9280.2004.00687.x) temeline dayanır. Sinirbilim bir hile değil — sistemin sadece veri biriktirmek yerine kullanımla neden iyileştiğinin nedeni budur.

  ## Performans

  | İşlem | Gecikme |
  |-------|---------|
  | Hafıza saklama (API yanıtı) | <200ms |
  | Hafıza saklama (core) | 55-60ms |
  | Anlamsal arama | 34-58ms |
  | Tag arama | ~1ms |
  | Entity lookup | 763ns |
  | Graph traversal (3-hop) | 30µs |

  Tek binary. GPU gerekli değil. Content-hash dedup, özdeş hafızaların asla iki kez depolanmadığını sağlar.

  ## TUI Dashboard

  ```bash
  shodh tui
  ```

  <p align="center">
    
  </p>

  <p align="center"><i>Anlamsal hatırlama hibrit aramayla — ilgililik puanları, hafıza katmanları ve aktivite akışı</i></p>

  <p align="center">
    
  </p>

  <p align="center"><i>GTD görev yönetimi — projeler, yapılacaklar, yorumlar ve nedensel köken</i></p>

  ## 37 MCP Aracı

  Claude, Cursor ve diğer MCP istemcilerine sunulan araçların tam listesi:

  <details>
  <summary>Hafıza</summary>

  `remember` · `recall` · `proactive_context` · `context_summary` · `list_memories` · `read_memory` · `forget`
  </details>

  <details>
  <summary>Yapılacaklar (GTD)</summary>

  `add_todo` · `list_todos` · `update_todo` · `complete_todo` · `delete_todo` · `reorder_todo` · `list_subtasks` · `add_todo_comment` · `list_todo_comments` · `update_todo_comment` · `delete_todo_comment` · `todo_stats`
  </details>

  <details>
  <summary>Projeler</summary>

  `add_project` · `list_projects` · `archive_project` · `delete_project`
  </details>

  <details>
  <summary>Hatırlatmalar</summary>

  `set_reminder` · `list_reminders` · `dismiss_reminder`
  </details>

  <details>
  <summary>Sistem</summary>

  `memory_stats` · `verify_index` · `repair_index` · `token_status` · `reset_token_session` · `consolidation_report` · `backup_create` · `backup_list` · `backup_verify` · `backup_restore` · `backup_purge`
  </details>

  ## REST API

  `http://localhost:3030` üzerinde 160+ endpoint. Tüm `/api/*` endpoint'leri `X-API-Key` başlığı gerektirir.

  [Tam API referansı →](https://www.shodh-memory.com/docs/api)

  <details>
  <summary>Hızlı örnekler</summary>

  ```bash
  # Hafıza saklama
  curl -X POST http://localhost:3030/api/remember \
    -H "Content-Type: application/json" \
    -H "X-API-Key: your-key" \
    -d '{"user_id": "user-1", "content": "User prefers dark mode", "memory_type": "Decision"}'

  # Hafızaları arama
  curl -X POST http://localhost:3030/api/recall \
    -H "Content-Type: application/json" \
    -H "X-API-Key: your-key" \
    -d '{"user_id": "user-1", "query": "user preferences", "limit": 5}'
  ```
  </details>

  ## Robotik & ROS2

  Shodh-Memory sadece chat ajanları için değil. Robotlar için kalıcı hafızadır — Spot, drone'lar, humanoidler, ROS2 veya Zenoh çalıştıran herhangi bir sistem. Bulut yok, güç döngülerini kurtarır, ödüllerden öğrenir, Zenoh'yu yerel olarak konuşur.

  ```bash
  # Zenoh transport'unu etkinleştir (--features zenoh ile derle)
  SHODH_ZENOH_ENABLED=true SHODH_ZENOH_LISTEN=tcp/0.0.0.0:7447 shodh server

  # ROS2 robotları zenoh-bridge-ros2dds veya rmw_zenoh aracılığıyla bağlan — kod değişikliği yok
  ros2 run zenoh_bridge_ros2dds zenoh_bridge_ros2dds
  ```

  Tam kurulum ve örnekler için [Robotik Hızlı Başlangıç](docs/robotics-quickstart.md) bölümüne bakın.

  **Robotlar Zenoh üzerinden neler yapabilir:**

  | İşlem | Key Expression | Açıklama |
  |-------|--------------|----------|
  | Hatırla | `shodh/{user_id}/remember` | GPS, yerel konum, başlık, sensor verisi, misyon bağlamı ile saklama |
  | Hatırla | `shodh/{user_id}/recall` | Mekansal arama (haversine), misyon tekrarı, aksiyon-sonuç filtreleme |
  | Stream | `shodh/{user_id}/stream/sensor` | Çıkarma pipeline aracılığıyla yüksek frekanslı sensor verisini otomatik hatırla |
  | Misyon | `shodh/{user_id}/mission/start` | Misyon sınırlarını izle, missionlar arasında aranabilir |
  | Filo | `shodh/fleet/**` | Zenoh liveliness tokenları aracılığıyla otomatik peer discovery |

  Her robot anahtar segmenti olarak kendi `user_id`'sini kullanır (ör. `shodh/spot-1/remember`). `robot_id` filo gruplandırması için isteğe bağlı payload alanıdır.

  Her Experience 26 robotiğe özgü alanı taşır: `geo_location`, `local_position`, `heading`, `sensor_data`, `robot_id`, `mission_id`, `action_type`, `reward`, `terrain_type`, `nearby_agents`, `decision_context`, `action_params`, `outcome_type`, `confidence`, hata/anomi izlemesi, kurtarma eylemleri ve tahmin öğrenmesi.

  <details>
  <summary>Zenoh remember örneği (robot hafıza yayınlama)</summary>

  ```json
  {
    "user_id": "spot-1",
    "content": "Detected crack in concrete at waypoint alpha",
    "robot_id": "spot_v2",
    "mission_id": "building_inspection_2026",
    "geo_location": [37.7749, -122.4194, 10.0],
    "local_position": [12.5, 3.2, 0.0],
    "heading": 90.0,
    "sensor_data": {"battery": 72.5, "temperature": 28.3},
    "action_type": "inspect",
    "reward": 0.9,
    "terrain_type": "indoor",
    "tags": ["crack", "concrete", "structural"]
  }
  ```
  </details>

  <details>
  <summary>Zenoh mekansal recall örneği (robot yakın hafızaları sorgulamak)</summary>

  ```json
  {
    "user_id": "spot-1",
    "query": "structural damage near entrance",
    "mode": "spatial",
    "lat": 37.7749,
    "lon": -122.4194,
    "radius_meters": 50.0,
    "mission_id": "building_inspection_2026"
  }
  ```
  </details>

  <details>
  <summary>Ortam değişkenleri</summary>

  ```bash
  SHODH_ZENOH_ENABLED=true                # Zenoh transport'unu etkinleştir
  SHODH_ZENOH_MODE=peer                   # peer | client | router
  SHODH_ZENOH_LISTEN=tcp/0.0.0.0:7447    # Listen endpoint'leri
  SHODH_ZENOH_CONNECT=tcp/1.2.3.4:7447   # Connect endpoint'leri
  SHODH_ZENOH_PREFIX=shodh               # Key expression öneki

  # ROS2 topic'lerine otomatik abone ol (zenoh-bridge-ros2dds üzerinden)
  SHODH_ZENOH_AUTO_TOPICS='[
    {"key_expr": "rt/spot1/status", "user_id": "spot-1", "mode": "sensor"},
    {"key_expr": "rt/nav/events", "user_id": "spot-1", "mode": "event"}
  ]'
  ```
  </details>

  ROS2 Kilted (rmw_zenoh), PX4 drone'ları, Boston Dynamics Spot, humanoidler — Zenoh veya ROS2 DDS konuşan her şeyle çalışır.

  ## Platform Desteği

  Linux x86_64 · Linux ARM64 · macOS Apple Silicon · macOS Intel · Windows x86_64

  ## Production Dağıtımı

  <details>
  <summary>Ortam değişkenleri</summary>

  ```bash
  SHODH_ENV=production              # Production modu
  SHODH_API_KEYS=key1,key2,key3     # Virgülle ayrılmış API anahtarları
  SHODH_HOST=127.0.0.1              # Bind adresi (varsayılan: localhost)
  SHODH_PORT=3030                   # Port (varsayılan: 3030)
  SHODH_MEMORY_PATH=/var/lib/shodh  # Veri dizini
  SHODH_REQUEST_TIMEOUT=60          # Request zaman aşımı (saniye)
  SHODH_MAX_CONCURRENT=200          # Maksimum concurrent request
  SHODH_CORS_ORIGINS=https://app.example.com
  ```
  </details>

  <details>
  <summary>TLS ile Docker Compose</summary>

  ```yaml
  services:
    shodh-memory:
      image: varunshodh/shodh-memory:latest
      environment:
        - SHODH_ENV=production
        - SHODH_HOST=0.0.0.0
        - SHODH_API_KEYS=${SHODH_API_KEYS}
      volumes:
        - shodh-data:/data
      networks:
        - internal

    caddy:
      image: caddy:latest
      ports:
        - "443:443"
      volumes:
        - ./Caddyfile:/etc/caddy/Caddyfile
      networks:
        - internal

  volumes:
    shodh-data:

  networks:
    internal:
  ```
  </details>

  <details>
  <summary>Reverse proxy (Nginx / Caddy)</summary>

  Server varsayılan olarak `127.0.0.1`'e bağlanır. Ağ dağıtımları için bir reverse proxy'nin arkasına yerleştir:

  ```caddyfile
  memory.example.com {
      reverse_proxy localhost:3030
  }
  ```
  </details>

  ## Topluluk

  | Proje | Açıklama | Yazar |
  |-------|----------|-------|
  | [SHODH on Cloudflare](https://github.com/doobidoo/shodh-cloudflare) | Cloudflare Workers'ta edge-native uygulama | [@doobidoo](https://github.com/doobidoo) |

  ## Referanslar

  [1] Cowan, N. (2010). The Magical Mystery Four. *Current Directions in Psychological Science*. [2] Magee & Grienberger (2020). Synaptic Plasticity Forms and Functions. *Annual Review of Neuroscience*. [3] Subramanya et al. (2019). DiskANN. *NeurIPS 2019*.

  ## Lisans

  Apache 2.0

  ---

  <p align="center">
    <a href="https://registry.modelcontextprotocol.io/v0/servers?search=shodh">MCP Registry</a> · <a href="https://hub.docker.com/r/varunshodh/shodh-memory">Docker Hub</a> · <a href="https://pypi.org/project/shodh-memory/">PyPI</a> · <a href="https://www.npmjs.com/package/@shodh/memory-mcp">npm</a> · <a href="https://crates.io/crates/shodh-memory">crates.io</a> · <a href="https://www.shodh-memory.com">Docs</a>
  </p>
---

<p align="center">
  
</p>

<h1 align="center">Shodh-Memory</h1>

<p align="center"><b>Persistent cognitive memory for AI agents and robots. Remembers what matters, forgets what doesn't, gets smarter with use.</b></p>

<p align="center">
  <a href="https://github.com/varun29ankuS/shodh-memory/actions"></a>
  <a href="https://registry.modelcontextprotocol.io/v0/servers?search=shodh"></a>
  <a href="https://cursor.directory/plugins/shodh-memory-1"></a>
  <a href="https://crates.io/crates/shodh-memory"></a>
  <a href="https://www.npmjs.com/package/@shodh/memory-mcp"></a>
  <a href="https://pypi.org/project/shodh-memory/"></a>
  <a href="https://hub.docker.com/r/varunshodh/shodh-memory"></a>
  <a href="#robotics--ros2"></a>
  <a href="LICENSE"></a>
  <a href="https://discord.gg/HrpzXqTtEp"></a>
</p>

---

<p align="center">
  
</p>

AI agents forget everything between sessions. Robots lose context between missions. They repeat mistakes, miss patterns, and treat every interaction like the first one.

Shodh-Memory fixes this. It's persistent memory that actually learns — memories you use often become easier to find, old irrelevant context fades automatically, and recalling one thing brings back related things. Works for chat agents (MCP/HTTP), robots (Zenoh/ROS2), and edge devices. No API keys. No cloud. No external databases. One binary.

## Why Not Just Use mem0 / Cognee / Zep?

| | **Shodh** | **mem0** | **Cognee** | **Zep** |
|---|---|---|---|---|
| LLM calls to store a memory | **0** | 2+ per add | 3+ per cognify | 2+ per episode |
| External services needed | **None** | OpenAI + vector DB | OpenAI + Neo4j + vector DB | OpenAI + Neo4j |
| Time to store a memory | **55ms** | ~20 seconds | seconds | seconds |
| Learns from usage | **Yes** (Hebbian) | No | No | No |
| Forgets irrelevant data | **Yes** (decay) | No | No | Temporal only |
| Runs fully offline | **Yes** | No | No | No |
| Robotics / ROS2 native | **Yes** (Zenoh) | No | No | No |
| Binary size | **~17MB** | pip install + API keys | pip install + API keys + Neo4j | Cloud only |

Every other memory system delegates intelligence to LLM API calls — that's why they're slow, expensive, and can't work offline. Shodh uses algorithmic intelligence: local embeddings, mathematical decay, learned associations. No LLM in the loop.

## Get Started

### Unified CLI

```bash
# Download from GitHub Releases (or brew tap varun29ankuS/shodh-memory && brew install shodh-memory)
shodh init          # First-time setup — creates config, generates API key, downloads AI model
shodh server        # Start the memory server on :3030
shodh setup-hooks   # Print instructions to set up Claude Code hooks
shodh tui           # Launch the TUI dashboard
shodh status        # Check server health
shodh doctor        # Diagnose issues
```

One binary, all functionality. No Docker, no API keys, no external dependencies.

### Claude Code

```bash
# 1. Add the MCP server (auto-downloads the backend binary)
claude mcp add shodh-memory -- npx -y @shodh/memory-mcp

# 2. Enable automatic memory capture (optional but recommended)
npx @shodh/memory-mcp setup-hooks
```

Step 1 gives Claude persistent memory tools. Step 2 installs [Claude Code hooks](https://docs.anthropic.com/en/docs/claude-code/hooks) that automatically capture context from every session — memories surface without you having to ask.

<details>
<summary>Or with Docker (for production / shared servers)</summary>

```bash
# 1. Start the server
docker run -d -p 3030:3030 -v shodh-data:/data varunshodh/shodh-memory

# 2. Add to Claude Code
claude mcp add shodh-memory -- npx -y @shodh/memory-mcp
```
</details>

<details>
<summary>Cursor / Claude Desktop config</summary>

```json
{
  "mcpServers": {
    "shodh-memory": {
      "command": "npx",
      "args": ["-y", "@shodh/memory-mcp"]
    }
  }
}
```

For local use, no API key is needed — one is generated automatically. For remote servers, add `"env": { "SHODH_API_KEY": "your-key" }`.
</details>

### Python

```bash
pip install shodh-memory
```

```python
from shodh_memory import Memory

memory = Memory(storage_path="./my_data")
memory.remember("User prefers dark mode", memory_type="Decision")
results = memory.recall("user preferences", limit=5)
```

### Rust

```toml
[dependencies]
shodh-memory = "0.1"
```

```rust
use shodh_memory::{MemorySystem, MemoryConfig};

let memory = MemorySystem::new(MemoryConfig::default())?;
memory.remember("user-1", "User prefers dark mode", MemoryType::Decision, vec![])?;
let results = memory.recall("user-1", "user preferences", 5)?;
```

### Docker

```bash
docker run -d -p 3030:3030 -v shodh-data:/data varunshodh/shodh-memory
```

## What It Does

```
You use a memory often  →  it becomes easier to find (Hebbian learning)
You stop using a memory →  it fades over time (activation decay)
You recall one memory   →  related memories surface too (spreading activation)
A connection is used    →  it becomes permanent (long-term potentiation)
```

Under the hood, memories flow through three tiers:

```
Working Memory ──overflow──▶ Session Memory ──importance──▶ Long-Term Memory
   (100 items)                  (100 MB)                      (RocksDB)
```

This is based on [Cowan's working memory model](https://doi.org/10.1177/0963721409359277) and [Wixted's memory decay research](https://doi.org/10.1111/j.1467-9280.2004.00687.x). The neuroscience isn't a gimmick — it's why the system gets better with use instead of just accumulating data.

## Performance

| Operation | Latency |
|-----------|---------|
| Store memory (API response) | <200ms |
| Store memory (core) | 55-60ms |
| Semantic search | 34-58ms |
| Tag search | ~1ms |
| Entity lookup | 763ns |
| Graph traversal (3-hop) | 30µs |

Single binary. No GPU required. Content-hash dedup ensures identical memories are never stored twice.

## TUI Dashboard

```bash
shodh tui
```

<p align="center">
  
</p>

<p align="center"><i>Semantic recall with hybrid search — relevance scores, memory tiers, and activity feed</i></p>

<p align="center">
  
</p>

<p align="center"><i>GTD task management — projects, todos, comments, and causal lineage</i></p>

## 37 MCP Tools

Full list of tools available to Claude, Cursor, and other MCP clients:

<details>
<summary>Memory</summary>

`remember` · `recall` · `proactive_context` · `context_summary` · `list_memories` · `read_memory` · `forget`
</details>

<details>
<summary>Todos (GTD)</summary>

`add_todo` · `list_todos` · `update_todo` · `complete_todo` · `delete_todo` · `reorder_todo` · `list_subtasks` · `add_todo_comment` · `list_todo_comments` · `update_todo_comment` · `delete_todo_comment` · `todo_stats`
</details>

<details>
<summary>Projects</summary>

`add_project` · `list_projects` · `archive_project` · `delete_project`
</details>

<details>
<summary>Reminders</summary>

`set_reminder` · `list_reminders` · `dismiss_reminder`
</details>

<details>
<summary>System</summary>

`memory_stats` · `verify_index` · `repair_index` · `token_status` · `reset_token_session` · `consolidation_report` · `backup_create` · `backup_list` · `backup_verify` · `backup_restore` · `backup_purge`
</details>

## REST API

160+ endpoints on `http://localhost:3030`. All `/api/*` endpoints require `X-API-Key` header.

[Full API reference →](https://www.shodh-memory.com/docs/api)

<details>
<summary>Quick examples</summary>

```bash
# Store a memory
curl -X POST http://localhost:3030/api/remember \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your-key" \
  -d '{"user_id": "user-1", "content": "User prefers dark mode", "memory_type": "Decision"}'

# Search memories
curl -X POST http://localhost:3030/api/recall \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your-key" \
  -d '{"user_id": "user-1", "query": "user preferences", "limit": 5}'
```
</details>

## Robotics & ROS2

Shodh-Memory isn't just for chat agents. It's persistent memory for robots — Spot, drones, humanoids, any system running ROS2 or Zenoh. No cloud, survives power cycles, learns from rewards, speaks Zenoh natively.

```bash
# Enable Zenoh transport (compile with --features zenoh)
SHODH_ZENOH_ENABLED=true SHODH_ZENOH_LISTEN=tcp/0.0.0.0:7447 shodh server

# ROS2 robots connect via zenoh-bridge-ros2dds or rmw_zenoh — zero code changes
ros2 run zenoh_bridge_ros2dds zenoh_bridge_ros2dds
```

See [Robotics Quickstart](docs/robotics-quickstart.md) for full setup and examples.

**What robots can do over Zenoh:**

| Operation | Key Expression | Description |
|-----------|---------------|-------------|
| Remember | `shodh/{user_id}/remember` | Store with GPS, local position, heading, sensor data, mission context |
| Recall | `shodh/{user_id}/recall` | Spatial search (haversine), mission replay, action-outcome filtering |
| Stream | `shodh/{user_id}/stream/sensor` | Auto-remember high-frequency sensor data via extraction pipeline |
| Mission | `shodh/{user_id}/mission/start` | Track mission boundaries, searchable across missions |
| Fleet | `shodh/fleet/**` | Automatic peer discovery via Zenoh liveliness tokens |

Each robot uses its own `user_id` as the key segment (e.g., `shodh/spot-1/remember`). The `robot_id` is an optional payload field for fleet grouping.

Every Experience carries 26 robotics-specific fields: `geo_location`, `local_position`, `heading`, `sensor_data`, `robot_id`, `mission_id`, `action_type`, `reward`, `terrain_type`, `nearby_agents`, `decision_context`, `action_params`, `outcome_type`, `confidence`, failure/anomaly tracking, recovery actions, and prediction learning.

<details>
<summary>Zenoh remember example (robot publishing a memory)</summary>

```json
{
  "user_id": "spot-1",
  "content": "Detected crack in concrete at waypoint alpha",
  "robot_id": "spot_v2",
  "mission_id": "building_inspection_2026",
  "geo_location": [37.7749, -122.4194, 10.0],
  "local_position": [12.5, 3.2, 0.0],
  "heading": 90.0,
  "sensor_data": {"battery": 72.5, "temperature": 28.3},
  "action_type": "inspect",
  "reward": 0.9,
  "terrain_type": "indoor",
  "tags": ["crack", "concrete", "structural"]
}
```
</details>

<details>
<summary>Zenoh spatial recall example (robot querying nearby memories)</summary>

```json
{
  "user_id": "spot-1",
  "query": "structural damage near entrance",
  "mode": "spatial",
  "lat": 37.7749,
  "lon": -122.4194,
  "radius_meters": 50.0,
  "mission_id": "building_inspection_2026"
}
```
</details>

<details>
<summary>Environment variables</summary>

```bash
SHODH_ZENOH_ENABLED=true                # Enable Zenoh transport
SHODH_ZENOH_MODE=peer                   # peer | client | router
SHODH_ZENOH_LISTEN=tcp/0.0.0.0:7447    # Listen endpoints
SHODH_ZENOH_CONNECT=tcp/1.2.3.4:7447   # Connect endpoints
SHODH_ZENOH_PREFIX=shodh               # Key expression prefix

# Auto-subscribe to ROS2 topics (via zenoh-bridge-ros2dds)
SHODH_ZENOH_AUTO_TOPICS='[
  {"key_expr": "rt/spot1/status", "user_id": "spot-1", "mode": "sensor"},
  {"key_expr": "rt/nav/events", "user_id": "spot-1", "mode": "event"}
]'
```
</details>

Works with ROS2 Kilted (rmw_zenoh), PX4 drones, Boston Dynamics Spot, humanoids — anything that speaks Zenoh or ROS2 DDS.

## Platform Support

Linux x86_64 · Linux ARM64 · macOS Apple Silicon · macOS Intel · Windows x86_64

## Production Deployment

<details>
<summary>Environment variables</summary>

```bash
SHODH_ENV=production              # Production mode
SHODH_API_KEYS=key1,key2,key3     # Comma-separated API keys
SHODH_HOST=127.0.0.1              # Bind address (default: localhost)
SHODH_PORT=3030                   # Port (default: 3030)
SHODH_MEMORY_PATH=/var/lib/shodh  # Data directory
SHODH_REQUEST_TIMEOUT=60          # Request timeout in seconds
SHODH_MAX_CONCURRENT=200          # Max concurrent requests
SHODH_CORS_ORIGINS=https://app.example.com
```
</details>

<details>
<summary>Docker Compose with TLS</summary>

```yaml
services:
  shodh-memory:
    image: varunshodh/shodh-memory:latest
    environment:
      - SHODH_ENV=production
      - SHODH_HOST=0.0.0.0
      - SHODH_API_KEYS=${SHODH_API_KEYS}
    volumes:
      - shodh-data:/data
    networks:
      - internal

  caddy:
    image: caddy:latest
    ports:
      - "443:443"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
    networks:
      - internal

volumes:
  shodh-data:

networks:
  internal:
```
</details>

<details>
<summary>Reverse proxy (Nginx / Caddy)</summary>

The server binds to `127.0.0.1` by default. For network deployments, place behind a reverse proxy:

```caddyfile
memory.example.com {
    reverse_proxy localhost:3030
}
```
</details>

## Community

| Project | Description | Author |
|---------|-------------|--------|
| [SHODH on Cloudflare](https://github.com/doobidoo/shodh-cloudflare) | Edge-native implementation on Cloudflare Workers | [@doobidoo](https://github.com/doobidoo) |

## References

[1] Cowan, N. (2010). The Magical Mystery Four. *Current Directions in Psychological Science*. [2] Magee & Grienberger (2020). Synaptic Plasticity Forms and Functions. *Annual Review of Neuroscience*. [3] Subramanya et al. (2019). DiskANN. *NeurIPS 2019*.

## License

Apache 2.0

---

<p align="center">
  <a href="https://registry.modelcontextprotocol.io/v0/servers?search=shodh">MCP Registry</a> · <a href="https://hub.docker.com/r/varunshodh/shodh-memory">Docker Hub</a> · <a href="https://pypi.org/project/shodh-memory/">PyPI</a> · <a href="https://www.npmjs.com/package/@shodh/memory-mcp">npm</a> · <a href="https://crates.io/crates/shodh-memory">crates.io</a> · <a href="https://www.shodh-memory.com">Docs</a>
</p>
