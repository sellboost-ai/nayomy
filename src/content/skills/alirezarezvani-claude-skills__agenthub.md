---
name: "agenthub"
description_en: "Multi-agent collaboration plugin that spawns N parallel subagents competing on the same task via git worktree isolation. Agents work independently, results are evaluated by metric or LLM judge, and the best branch is merged. Use when: user wants multiple approaches tried in parallel — code optimization, content variation, research exploration, or any task that benefits from parallel competition. R"
description_tr: "Aynı görev üzerinde N paralel alt-agent'i git worktree izolasyonu ile yarıştıran multi-agent işbirliği eklentisi. Agent'ler bağımsız çalışır, sonuçlar metrik veya LLM judge tarafından değerlendirilir ve en iyi branch merge edilir. Kullanım: Birden fazla yaklaşımı paralel olarak denemek istediğinizde — kod optimizasyonu, içerik varyasyonu, araştırma keşfi veya paralel rekabetten yararlanan herhangi bir görev için."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/agenthub/SKILL.md"
path: ".gemini/skills/agenthub/SKILL.md"
is_collection: false
body_length: 7260
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # AgentHub — Multi-Agent Collaboration

  N paralel AI ajanı oluşturun ve aynı görevde rekabet ettirin. Her ajan izole bir git worktree'de çalışır. Koordinatör sonuçları değerlendirir ve kazananı birleştirir.

  ## Slash Komutları

  | Komut | Açıklama |
  |---------|-------------|
  | `/hub:init` | Yeni bir işbirliği oturumu oluştur — görev, ajan sayısı, değerlendirme kriterleri |
  | `/hub:spawn` | N parallel alt ajanı izole worktree'lerde başlat |
  | `/hub:status` | DAG durumunu, ajan ilerlemesini, branch durumunu göster |
  | `/hub:eval` | Ajan sonuçlarını metrik veya LLM yargıcı ile sırala |
  | `/hub:merge` | Kazanan branch'i birleştir, kaybedenleri arşivle |
  | `/hub:board` | Ajan mesaj panosunu oku/yaz |
  | `/hub:run` | Tek seferde yaşam döngüsü: init → baseline → spawn → eval → merge |

  ## Ajan Şablonları

  `--template` ile spawn ederken, ajanlar önceden tanımlanmış bir iterasyon deseni takip eder:

  | Şablon | Desen | Kullanım Alanı |
  |----------|---------|----------|
  | `optimizer` | Düzenle → değerlendir → tuttur/at → 10x tekrarla | Performans, gecikme, boyut |
  | `refactorer` | Yeniden yapılandır → test et → yeşil olana kadar tekrarla | Kod kalitesi, teknik borç |
  | `test-writer` | Test yaz → kapsama ölçü → tekrarla | Test kapsama boşlukları |
  | `bug-fixer` | Yeniden üret → tanıla → düzelt → doğrula | Hata düzeltme yaklaşımları |

  Şablonlar `references/agent-templates.md` dosyasında tanımlanır.

  ## Bu Yetenek Ne Zaman Etkinleşir

  Tetikleme ifadeleri:
  - "birden fazla yaklaşım dene"
  - "ajanları rekabet ettir"
  - "paralel optimizasyon"
  - "N ajan oluştur"
  - "farklı çözümleri karşılaştır"
  - "fan-out" veya "turnuva"
  - "içerik varyasyonları oluştur"
  - "farklı taslakları karşılaştır"
  - "A/B test kopyası"
  - "birden fazla stratejiyi keşfet"

  ## Koordinatör Protokolü

  Ana Claude Code oturumu koordinatördür. Bu yaşam döngüsünü takip eder:

  ```
  INIT → DISPATCH → MONITOR → EVALUATE → MERGE
  ```

  ### 1. Init

  Oturum oluşturmak için `/hub:init` çalıştır. Bu şunları oluşturur:
  - `.agenthub/sessions/{session-id}/config.yaml` — görev yapılandırması
  - `.agenthub/sessions/{session-id}/state.json` — durum makinesi
  - `.agenthub/board/` — mesaj panosu kanalları

  ### 2. Dispatch

  Ajanları başlatmak için `/hub:spawn` çalıştır. Her 1..N ajanı için:
  - Görev atanmasını `.agenthub/board/dispatch/` kanalına gönder
  - Agent aracı ile `isolation: "worktree"` parametresiyle oluştur
  - Tüm ajanlar tek bir mesajda başlatılır (paralel)

  ### 3. Monitor

  İlerlemeyi kontrol etmek için `/hub:status` çalıştır:
  - `dag_analyzer.py --status --session {id}` branch durumunu gösterir
  - Pano `progress/` kanalında ajan güncellemeleri vardır

  ### 4. Evaluate

  Sonuçları sıralamak için `/hub:eval` çalıştır:
  - **Metrik modu**: her worktree'de eval komutunu çalıştır, sayısal sonucu ayrıştır
  - **Yargıç modu**: diff'leri oku, koordinatör kaliteye göre sırala
  - **Hibrit**: önce metrik, berabere kalan durumlar için LLM-yargıç

  ### 5. Merge

  Sonuçlandırmak için `/hub:merge` çalıştır:
  - `git merge --no-ff` kazananı base branch'e birleştir
  - Kaybedenleri etiketle: `git tag hub/archive/{session}/agent-{i}`
  - Worktree'leri temizle
  - Merge özeti panosuna gönder

  ## Ajan Protokolü

  Her alt ajan bu prompt deseni alır:

  ```
  You are agent-{i} in hub session {session-id}.
  Your task: {task description}

  Instructions:
  1. Read your assignment at .agenthub/board/dispatch/{seq}-agent-{i}.md
  2. Work in your worktree — make changes, run tests, iterate
  3. Commit all changes with descriptive messages
  4. Write your result summary to .agenthub/board/results/agent-{i}-result.md
  5. Exit when done
  ```

  Ajanlar birbirinin çalışmasını GÖRMEZ. Birbirleriyle İLETİŞİM KURMAZlar. Koordinatörün okuması için sadece panosuna yazarlar.

  ## DAG Modeli

  ### Branch Adlandırması

  ```
  hub/{session-id}/agent-{N}/attempt-{M}
  ```

  - Session ID: zaman tabanlı (`YYYYMMDD-HHMMSS`)
  - Agent N: sıralı (1'den agent-count'a)
  - Attempt M: yeniden deneme sırasında artar (genellikle 1)

  ### Frontier Algılaması

  Frontier = çocuk branch'i olmayan branch uçları. AgentHub'ın "leaves" sorgusuna eşdeğer.

  ```bash
  python scripts/dag_analyzer.py --frontier --session {id}
  ```

  ### Değişmezlik

  DAG sadece eklemeyi destekler:
  - Ajan branch'lerini asla rebase veya force-push yapma
  - Commit'leri asla silme (arşivlemeden sonra sadece branch ref'leri)
  - Her yaklaşım git tag'leri ile korunur

  ## Mesaj Panosu

  Konum: `.agenthub/board/`

  ### Kanallar

  | Kanal | Yazıcı | Okuyucu | Amaç |
  |--------|--------|--------|---------|
  | `dispatch/` | Koordinatör | Ajanlar | Görev atamaları |
  | `progress/` | Ajanlar | Koordinatör | Durum güncellemeleri |
  | `results/` | Ajanlar + Koordinatör | Hepsi | Son sonuçlar + merge özeti |

  ### Post Formatı

  ```markdown
  ---
  author: agent-1
  timestamp: 2026-03-17T14:30:22Z
  channel: results
  parent: null
  ---

  ## Result Summary

  - **Approach**: Replaced O(n²) sort with hash map
  - **Files changed**: 3
  - **Metric**: 142ms (baseline: 180ms, delta: -38ms)
  - **Confidence**: High — all tests pass
  ```

  ### Pano Kuralları

  - Sadece ekleme: post'ları asla düzenle veya sil
  - Benzersiz dosya adları: `{seq:03d}-{author}-{timestamp}.md`
  - Tüm post'larda YAML frontmatter gereklidir

  ## Değerlendirme Modları

  ### Metrik Tabanlı

  En iyi için: benchmarklar, test geçiş oranları, dosya boyutları, yanıt süreleri.

  ```bash
  python scripts/result_ranker.py --session {id} \
    --eval-cmd "pytest bench.py --json" \
    --metric p50_ms --direction lower
  ```

  Ranker, eval komutunu her ajanın worktree dizininde çalıştırır ve metriği stdout'tan ayrıştırır.

  ### LLM Yargıcı

  En iyi için: kod kalitesi, okunabilirlik, mimari kararlar.

  Koordinatör her ajanın diff'ini okur (`git diff base...agent-branch`) ve şunlara göre sıralar:
  1. Doğruluk (görevle çözer mi?)
  2. Basitlik (daha az değiştirilmiş satırlar tercih edilir)
  3. Kalite (temiz yürütme, iyi yapı)

  ### Hibrit

  Önce metriği çalıştır. Eğer en iyi ajanlar birbirinin %10'u içindeyse, berabere durumları çözmek için LLM yargıcı kullan.

  ## Oturum Yaşam Döngüsü

  ```
  init → running → evaluating → merged
                              → archived (kazanan yoksa)
  ```

  Durum geçişleri `session_manager.py` tarafından yönetilir:

  | Kaynaktan | Hedef | Tetikleyici |
  |------|----|---------|
  | `init` | `running` | `/hub:spawn` tamamlanır |
  | `running` | `evaluating` | Tüm ajanlar döner |
  | `evaluating` | `merged` | `/hub:merge` tamamlanır |
  | `evaluating` | `archived` | Kazanan yok / tümü başarısız |

  ## Proaktif Tetikleyiciler

  Koordinatör şu durumlarda hareket etmelidir:

  | Signal | Eylem |
  |--------|--------|
  | Tüm ajanlar çöktü | Başarısızlık özeti gönder, farklı kısıtlamalarla yeniden deneyi öner |
  | Baseline üzerinde iyileşme yok | Oturumu arşivle, farklı yaklaşımlar öner |
  | Yetim worktree'ler algılandı | `session_manager.py --cleanup {id}` çalıştır |
  | Oturum `running` durumunda takılı | Panoyu kontrol et, zaman aşımını düşün |

  ## Kurulum

  ```bash
  # Claude Code beceri dizinine kopyala
  cp -r engineering/agenthub ~/.claude/skills/agenthub

  # Veya ClawHub ile kur
  clawhub install agenthub
  ```

  ## Scriptler

  | Script | Amaç |
  |--------|---------|
  | `hub_init.py` | `.agenthub/` yapısını ve oturumunu başlat |
  | `dag_analyzer.py` | Frontier algılaması, DAG grafiği, branch durumu |
  | `board_manager.py` | Mesaj panosu CRUD (kanallar, post'lar, thread'ler) |
  | `result_ranker.py` | Ajanları metrik veya diff kalitesine göre sırala |
  | `session_manager.py` | Oturum durum makinesi ve temizlik |

  ## İlgili Yetenekler

  - **autoresearch-agent** — Tek ajanın optimizasyon döngüsü (N ajanın rekabet etmesini istediğinizde AgentHub kullanın)
  - **self-improving-agent** — Kendini değiştiren ajan (dış rekabet istediğinizde AgentHub kullanın)
  - **git-worktree-manager** — Git worktree yardımcı programları (AgentHub dahili olarak worktree'leri kullanır)
---

# AgentHub — Multi-Agent Collaboration

Spawn N parallel AI agents that compete on the same task. Each agent works in an isolated git worktree. The coordinator evaluates results and merges the winner.

## Slash Commands

| Command | Description |
|---------|-------------|
| `/hub:init` | Create a new collaboration session — task, agent count, eval criteria |
| `/hub:spawn` | Launch N parallel subagents in isolated worktrees |
| `/hub:status` | Show DAG state, agent progress, branch status |
| `/hub:eval` | Rank agent results by metric or LLM judge |
| `/hub:merge` | Merge winning branch, archive losers |
| `/hub:board` | Read/write the agent message board |
| `/hub:run` | One-shot lifecycle: init → baseline → spawn → eval → merge |

## Agent Templates

When spawning with `--template`, agents follow a predefined iteration pattern:

| Template | Pattern | Use Case |
|----------|---------|----------|
| `optimizer` | Edit → eval → keep/discard → repeat x10 | Performance, latency, size |
| `refactorer` | Restructure → test → iterate until green | Code quality, tech debt |
| `test-writer` | Write tests → measure coverage → repeat | Test coverage gaps |
| `bug-fixer` | Reproduce → diagnose → fix → verify | Bug fix approaches |

Templates are defined in `references/agent-templates.md`.

## When This Skill Activates

Trigger phrases:
- "try multiple approaches"
- "have agents compete"
- "parallel optimization"
- "spawn N agents"
- "compare different solutions"
- "fan-out" or "tournament"
- "generate content variations"
- "compare different drafts"
- "A/B test copy"
- "explore multiple strategies"

## Coordinator Protocol

The main Claude Code session is the coordinator. It follows this lifecycle:

```
INIT → DISPATCH → MONITOR → EVALUATE → MERGE
```

### 1. Init

Run `/hub:init` to create a session. This generates:
- `.agenthub/sessions/{session-id}/config.yaml` — task config
- `.agenthub/sessions/{session-id}/state.json` — state machine
- `.agenthub/board/` — message board channels

### 2. Dispatch

Run `/hub:spawn` to launch agents. For each agent 1..N:
- Post task assignment to `.agenthub/board/dispatch/`
- Spawn via Agent tool with `isolation: "worktree"`
- All agents launched in a single message (parallel)

### 3. Monitor

Run `/hub:status` to check progress:
- `dag_analyzer.py --status --session {id}` shows branch state
- Board `progress/` channel has agent updates

### 4. Evaluate

Run `/hub:eval` to rank results:
- **Metric mode**: run eval command in each worktree, parse numeric result
- **Judge mode**: read diffs, coordinator ranks by quality
- **Hybrid**: metric first, LLM-judge for ties

### 5. Merge

Run `/hub:merge` to finalize:
- `git merge --no-ff` winner into base branch
- Tag losers: `git tag hub/archive/{session}/agent-{i}`
- Clean up worktrees
- Post merge summary to board

## Agent Protocol

Each subagent receives this prompt pattern:

```
You are agent-{i} in hub session {session-id}.
Your task: {task description}

Instructions:
1. Read your assignment at .agenthub/board/dispatch/{seq}-agent-{i}.md
2. Work in your worktree — make changes, run tests, iterate
3. Commit all changes with descriptive messages
4. Write your result summary to .agenthub/board/results/agent-{i}-result.md
5. Exit when done
```

Agents do NOT see each other's work. They do NOT communicate with each other. They only write to the board for the coordinator to read.

## DAG Model

### Branch Naming

```
hub/{session-id}/agent-{N}/attempt-{M}
```

- Session ID: timestamp-based (`YYYYMMDD-HHMMSS`)
- Agent N: sequential (1 to agent-count)
- Attempt M: increments on retry (usually 1)

### Frontier Detection

Frontier = branch tips with no child branches. Equivalent to AgentHub's "leaves" query.

```bash
python scripts/dag_analyzer.py --frontier --session {id}
```

### Immutability

The DAG is append-only:
- Never rebase or force-push agent branches
- Never delete commits (only branch refs after archival)
- Every approach preserved via git tags

## Message Board

Location: `.agenthub/board/`

### Channels

| Channel | Writer | Reader | Purpose |
|---------|--------|--------|---------|
| `dispatch/` | Coordinator | Agents | Task assignments |
| `progress/` | Agents | Coordinator | Status updates |
| `results/` | Agents + Coordinator | All | Final results + merge summary |

### Post Format

```markdown
---
author: agent-1
timestamp: 2026-03-17T14:30:22Z
channel: results
parent: null
---

## Result Summary

- **Approach**: Replaced O(n²) sort with hash map
- **Files changed**: 3
- **Metric**: 142ms (baseline: 180ms, delta: -38ms)
- **Confidence**: High — all tests pass
```

### Board Rules

- Append-only: never edit or delete posts
- Unique filenames: `{seq:03d}-{author}-{timestamp}.md`
- YAML frontmatter required on all posts

## Evaluation Modes

### Metric-Based

Best for: benchmarks, test pass rates, file sizes, response times.

```bash
python scripts/result_ranker.py --session {id} \
  --eval-cmd "pytest bench.py --json" \
  --metric p50_ms --direction lower
```

The ranker runs the eval command in each agent's worktree directory and parses the metric from stdout.

### LLM Judge

Best for: code quality, readability, architecture decisions.

The coordinator reads each agent's diff (`git diff base...agent-branch`) and ranks by:
1. Correctness (does it solve the task?)
2. Simplicity (fewer lines changed preferred)
3. Quality (clean execution, good structure)

### Hybrid

Run metric first. If top agents are within 10% of each other, use LLM judge to break ties.

## Session Lifecycle

```
init → running → evaluating → merged
                            → archived (if no winner)
```

State transitions managed by `session_manager.py`:

| From | To | Trigger |
|------|----|---------|
| `init` | `running` | `/hub:spawn` completes |
| `running` | `evaluating` | All agents return |
| `evaluating` | `merged` | `/hub:merge` completes |
| `evaluating` | `archived` | No winner / all failed |

## Proactive Triggers

The coordinator should act when:

| Signal | Action |
|--------|--------|
| All agents crashed | Post failure summary, suggest retry with different constraints |
| No improvement over baseline | Archive session, suggest different approaches |
| Orphan worktrees detected | Run `session_manager.py --cleanup {id}` |
| Session stuck in `running` | Check board for progress, consider timeout |

## Installation

```bash
# Copy to your Claude Code skills directory
cp -r engineering/agenthub ~/.claude/skills/agenthub

# Or install via ClawHub
clawhub install agenthub
```

## Scripts

| Script | Purpose |
|--------|---------|
| `hub_init.py` | Initialize `.agenthub/` structure and session |
| `dag_analyzer.py` | Frontier detection, DAG graph, branch status |
| `board_manager.py` | Message board CRUD (channels, posts, threads) |
| `result_ranker.py` | Rank agents by metric or diff quality |
| `session_manager.py` | Session state machine and cleanup |

## Related Skills

- **autoresearch-agent** — Single-agent optimization loop (use AgentHub when you want N agents competing)
- **self-improving-agent** — Self-modifying agent (use AgentHub when you want external competition)
- **git-worktree-manager** — Git worktree utilities (AgentHub uses worktrees internally)
