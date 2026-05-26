---
name: "autoresearch-agent"
description_en: "Autonomous experiment loop that optimizes any file by a measurable metric. Inspired by Karpathy's autoresearch. The agent edits a target file, runs a fixed evaluation, keeps improvements (git commit), discards failures (git reset), and loops indefinitely. Use when: user wants to optimize code speed, reduce bundle/image size, improve test pass rate, optimize prompts, improve content quality (headli"
description_tr: "Herhangi bir dosyayı ölçülebilir metriklerle optimize eden otonomus deneme döngüsü. Karpathy'nin autoresearch'ünden esinlenmiştir. Agent hedef dosyayı düzenler, sabit bir evaluasyonu çalıştırır, iyileştirmeleri tutar (git commit), başarısızlıkları geri alır (git reset) ve sonsuz döngüde devam eder. Kullanım alanları: kod hızını optimize etmek, bundle/image boyutunu azaltmak, test başarı oranını iyileştirmek, promptları optimize etmek, içerik kalitesini artırmak."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/autoresearch-agent/SKILL.md"
path: ".gemini/skills/autoresearch-agent/SKILL.md"
is_collection: false
body_length: 11472
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Autoresearch Agent

  > Siz uyursunuz. Agent deneyler. Siz uyanınca sonuçlar hazır.

  [Karpathy's autoresearch](https://github.com/karpathy/autoresearch) tarafından esinlenen özerk deneyim döngüsü. Agent bir dosyayı düzenler, sabit bir değerlendirme çalıştırır, iyileştirmeleri tutar, başarısızlıkları atar ve sonsuza kadar döngüye devam eder.

  Bir tahmin değil — elli ölçülü deneme, bileşik.

  ---

  ## Slash Komutları

  | Komut | Ne yapıyor |
  |---------|-------------|
  | `/ar:setup` | Yeni bir deneyim etkileşimli olarak ayarla |
  | `/ar:run` | Tek bir deneyim iterasyonu çalıştır |
  | `/ar:loop` | Yapılandırılabilir aralıkla özerk döngü başlat (10m, 1h, daily, weekly, monthly) |
  | `/ar:status` | Dashboard ve sonuçları göster |
  | `/ar:resume` | Duraklatılmış deneyimi devam ettir |

  ---

  ## Bu Skill Ne Zaman Etkinleşir

  Kullanıcıdan bu desenleri tanı:

  - "Bunu daha hızlı / küçük / iyi yap"
  - "[dosya]'yı [metrik] için optimize et"
  - "[başlıklar / copy / promptlar]'ımı geliştir"
  - "Deneyleri gece çalıştır"
  - "[Metrik]'i X'ten Y'ye çıkarmak istiyorum"
  - Herhangi bir istek: optimize et, benchmark, geliştir, deneyim döngüsü, autoresearch

  Kullanıcı hedef dosya + başarı ölçüsü tanımlarsa → bu skill geçerlidir.

  ---

  ## Kurulum

  ### İlk Sefer — Deneyim Oluştur

  Setup scriptini çalıştır. Kullanıcı deneylerin nerede yaşayacağına karar verir:

  **Proje seviyesi** (repo içinde, git-izlenen, takım ile paylaşılabilir):
  ```bash
  python scripts/setup_experiment.py \
    --domain engineering \
    --name api-speed \
    --target src/api/search.py \
    --eval "pytest bench.py --tb=no -q" \
    --metric p50_ms \
    --direction lower \
    --scope project
  ```

  **Kullanıcı seviyesi** (kişisel, `~/.autoresearch/` içinde):
  ```bash
  python scripts/setup_experiment.py \
    --domain marketing \
    --name medium-ctr \
    --target content/titles.md \
    --eval "python evaluate.py" \
    --metric ctr_score \
    --direction higher \
    --evaluator llm_judge_content \
    --scope user
  ```

  `--scope` flag'i `.autoresearch/`'ın nerede yaşayacağını belirler:
  - `project` (varsayılan) → `.autoresearch/` repo kökünde. Deneyim tanımları git-izlenir. Sonuçlar gitignore edilir.
  - `user` → `~/.autoresearch/` home dizininde. Her şey kişisel.

  ### Setup Ne Oluşturur

  ```
  .autoresearch/
  ├── config.yaml                        ← Global ayarlar
  ├── .gitignore                         ← results.tsv, *.log'u yoksayar
  └── {domain}/{experiment-name}/
      ├── program.md                     ← Amaçlar, kısıtlamalar, strateji
      ├── config.cfg                     ← Hedef, eval komutu, metrik, yön
      ├── results.tsv                    ← Deneyim günlüğü (gitignore)
      └── evaluate.py                    ← Değerlendirme scripti (--evaluator kullanıldıysa)
  ```

  **results.tsv sütunları:** `commit | metric | status | description`
  - `commit` — kısa git hash
  - `metric` — float değeri veya çöküşler için "N/A"
  - `status` — keep | discard | crash
  - `description` — ne değişti veya neden çöktü

  ### Domainler

  | Domain | Kullanım Alanları |
  |--------|-----------|
  | `engineering` | Kod hızı, bellek, bundle boyutu, test geçiş oranı, derleme zamanı |
  | `marketing` | Başlıklar, sosyal copy, email konuları, reklam copy, katılım |
  | `content` | Makale yapısı, SEO açıklamaları, okunabilirlik, CTR |
  | `prompts` | Sistem promptları, chatbot tonu, agent talimatları |
  | `custom` | Ölçülebilir metrik ile diğer her şey |

  ### Eğer `program.md` Zaten Varsa

  Kullanıcı kendi `program.md`'sini yazmış olabilir. Deneyim dizininde bulunursa, oku. Template'i geçersiz kılar. Sadece eksikleri sor.

  ---

  ## Agent Protokolü

  Siz döngüsünüz. Scriptler kurulum ve değerlendirmeyi yönetir — siz yaratıcı işi yönetirsiniz.

  ### Başlamadan Önce
  1. `.autoresearch/{domain}/{name}/config.cfg` oku:
     - `target` — düzenleyeceğiniz dosya
     - `evaluate_cmd` — değişikliklerinizi ölçen komut
     - `metric` — eval çıktısında aranacak metrik adı
     - `metric_direction` — "lower" veya "higher" daha iyi
     - `time_budget_minutes` — değerlendirme başına maksimum zaman
  2. Strateji, kısıtlamalar ve ne yapabileceğiniz/yapamayacağınız için `program.md`'yi oku
  3. Deneyim geçmişi için `results.tsv`'yi oku (sütunlar: commit, metric, status, description)
  4. Deneyim dalını checkout et: `git checkout autoresearch/{domain}/{name}`

  ### Her Iterasyon
  1. results.tsv'yi gözden geçir — ne işe yaradı? Ne başarısız oldu? Ne denenilmedi?
  2. Hedef dosyaya BİR değişiklik kararlaştır. Deneyim başına bir değişken.
  3. Hedef dosyayı düzenle
  4. Commit: `git add {target} && git commit -m "experiment: {description}"`
  5. Değerlendir: `python scripts/run_experiment.py --experiment {domain}/{name} --single`
  6. Çıktıyı oku — KEEP, DISCARD veya CRASH yazacak metrik değeriyle
  7. 1. adıma git

  ### Script Ne Yönetir (Siz Değil)
  - Eval komutunu timeout ile çalıştırma
  - Eval çıktısından metriği ayrıştırma
  - Önceki en iyisiyle karşılaştırma
  - Başarısızlıkta commit'i geri alma (`git reset --hard HEAD~1`)
  - Sonucu results.tsv'ye kaydetme

  ### Deneyimi Başlatma

  ```bash
  # Tek iterasyon (agent bunu tekrar tekrar çağırır)
  python scripts/run_experiment.py --experiment engineering/api-speed --single

  # Kuru çalışma (başlamadan önce setup'ı test et)
  python scripts/run_experiment.py --experiment engineering/api-speed --dry-run
  ```

  ### Strateji Yükseltme
  - Çalışma 1-5: Düşük asılı meyveler (açık iyileştirmeler, basit optimizasyonlar)
  - Çalışma 6-15: Sistematik keşif (bir parametreyi bir seferde değişir)
  - Çalışma 16-30: Yapısal değişiklikler (algoritma değişimleri, mimari kaymaları)
  - Çalışma 30+: Radikal deneyler (tamamen farklı yaklaşımlar)
  - 20+ çalışmada iyileştirme yoksa: program.md Strategy bölümünü güncelle

  ### Kendi Kendini Geliştirme
  Her 10 deneyin ardından, desenler için results.tsv'yi gözden geçir. program.md'nin Strategy bölümünü öğrendiklerinizle güncelleyin (ör. "önbellek değişiklikleri %5-10 tarafından tutarlı olarak iyileştirir", "refactoring denemeleri metriği hiçbir zaman iyileştirmez"). Gelecek iterasyonlar bu birikmiş bilgiden faydalanır.

  ### Durma
  - Kullanıcı tarafından kesilene, bağlam sınırı ulaşılana veya program.md'deki hedef karşılanana kadar çalıştır
  - Durmadan önce: results.tsv'nin güncel olduğundan emin ol
  - Bağlam sınırında: sonraki oturum devam edebilir — results.tsv ve git günlüğü devam eder

  ### Kurallar

  - **Deneyim başına bir değişiklik.** Bir anda 5 şeyi değiştirme. Ne işe yaradığını bilemezsin.
  - **Basitlik kriteri.** Küçük bir iyileştirme çirkin karmaşıklık eklemiyorsa değer yoktur. Eşit performans daha basit kod ile bir kazanç. Aynı sonuçları alan kodu kaldırmak en iyi sonuçtur.
  - **Evaluatörü hiçbir zaman değiştirme.** `evaluate.py` temel gerçekliktir. Değiştirmek tüm karşılaştırmaları geçersiz kılar. Bunu yapıyorsanız sert duru.
  - **Timeout.** Bir çalışma zaman bütçesinin 2.5× aşarsa, durdur ve çöküş olarak işle.
  - **Çöküş yönetimi.** Typo veya eksik import ise, düzelt ve yeniden çalıştır. Fikir temelden kırılmışsa, geri al, "crash" kaydet, devam et. 5 ardışık çöküş → duraklat ve uyar.
  - **Yeni dependency yok.** Sadece projede zaten mevcut olanı kullan.

  ---

  ## Evaluatörler

  Hazır kullanılabilir değerlendirme scriptleri. Setup sırasında `--evaluator` ile deneyim dizinine kopyalanır.

  ### Ücretsiz Evaluatörler (API maliyeti yok)

  | Evaluatör | Metrik | Kullanım Alanı |
  |-----------|--------|----------|
  | `benchmark_speed` | `p50_ms` (lower) | Function/API yürütme zamanı |
  | `benchmark_size` | `size_bytes` (lower) | Dosya, bundle, Docker image boyutu |
  | `test_pass_rate` | `pass_rate` (higher) | Test paketi geçiş yüzdesi |
  | `build_speed` | `build_seconds` (lower) | Derleme/Docker inşa zamanı |
  | `memory_usage` | `peak_mb` (lower) | Yürütme sırasında pik bellek |

  ### LLM Judge Evaluatörler (aboneliğinizi kullanır)

  | Evaluatör | Metrik | Kullanım Alanı |
  |-----------|--------|----------|
  | `llm_judge_content` | `ctr_score` 0-10 (higher) | Başlıklar, titler, açıklamalar |
  | `llm_judge_prompt` | `quality_score` 0-100 (higher) | Sistem promptları, agent talimatları |
  | `llm_judge_copy` | `engagement_score` 0-10 (higher) | Sosyal mesajlar, reklam copy, emailler |

  LLM hakimleri, kullanıcının zaten çalıştırdığı CLI tool'u çağırır (Claude, Codex, Gemini). Değerlendirme prompt'u `evaluate.py` içinde kilitlidir — agent onu değiştiremez. Bu agentin kendi evaluatörünü oyunla kaçırmasını engeller.

  Kullanıcının mevcut aboneliği maliyeti kapsar:
  - Claude Code Max → değerlendirme için sınırsız Claude çağrıları
  - Codex CLI (ChatGPT Pro) → sınırsız Codex çağrıları
  - Gemini CLI (ücretsiz tier) → ücretsiz değerlendirme çağrıları

  ### Özel Evaluatörler

  Yerleşik evaluatör uygunsa, kullanıcı kendi `evaluate.py`'sini yazar. Tek gereklilik: `metric_name: value` yazdırmalı stdout'a.

  ```python
  #!/usr/bin/env python3
  # Benim özel evaluatörüm — DENEYIM BAŞLADIKTAN SONRA DEĞİŞTİRME
  import subprocess
  result = subprocess.run(["my-benchmark", "--json"], capture_output=True, text=True)
  # Ayrıştır ve çıktı
  print(f"my_metric: {parse_score(result.stdout)}")
  ```

  ---

  ## Sonuçları Görüntüleme

  ```bash
  # Tek deneyim
  python scripts/log_results.py --experiment engineering/api-speed

  # Bir domaindeki tüm deneyimler
  python scripts/log_results.py --domain engineering

  # Cross-deneyim dashboard
  python scripts/log_results.py --dashboard

  # Dışa aktarma formatları
  python scripts/log_results.py --experiment engineering/api-speed --format csv --output results.csv
  python scripts/log_results.py --experiment engineering/api-speed --format markdown --output results.md
  python scripts/log_results.py --dashboard --format markdown --output dashboard.md
  ```

  ### Dashboard Çıktısı

  ```
  DOMAIN          EXPERIMENT          RUNS  KEPT  BEST         Δ FROM START  STATUS
  engineering     api-speed            47    14   185ms        -76.9%        active
  engineering     bundle-size          23     8   412KB        -58.3%        paused
  marketing       medium-ctr           31    11   8.4/10       +68.0%        active
  prompts         support-tone         15     6   82/100       +46.4%        done
  ```

  ### Dışa Aktarma Formatları

  - **TSV** — varsayılan, tab ayrılmış (spreadsheet ile uyumlu)
  - **CSV** — virgül ayrılmış, uygun alıntılama ile
  - **Markdown** — biçimlendirilmiş tablo, GitHub/docs'ta okunabilir

  ---

  ## Proaktif Tetikleyiciler

  Sorulmadan bunları işaretle:

  - **Değerlendirme komutu işe yaramıyor** → Başlamadan önce test et. Bir kez çalıştır, çıktıyı doğrula.
  - **Hedef dosya git'te değil** → `git init && git add . && git commit -m 'initial'` önce yap.
  - **Metrik yönü belirsiz** → Sor: lower mı yoksa higher mı daha iyi? Başlamadan bilmeli.
  - **Zaman bütçesi çok kısa** → Eval bütçeyi aşarsa, her çalışma çöker.
  - **Agent evaluate.py'yi değiştiriyor** → Sert duru. Bu tüm karşılaştırmaları geçersiz kılar.
  - **5 ardışık çöküş** → Döngüyü duraklat. Kullanıcıyı uyar. Döngü yakmaya devam etme.
  - **20+ çalışmada iyileştirme yok** → Stratejiyi program.md'de değiştirmeyi veya farklı bir yaklaşım denemesini öner.

  ---

  ## Kurulum

  ### Tek satır (herhangi bir tool)
  ```bash
  git clone https://github.com/alirezarezvani/claude-skills.git
  cp -r claude-skills/engineering/autoresearch-agent ~/.claude/skills/
  ```

  ### Multi-tool kurulum
  ```bash
  ./scripts/convert.sh --skill autoresearch-agent --tool codex|gemini|cursor|windsurf|openclaw
  ```

  ### OpenClaw
  ```bash
  clawhub install cs-autoresearch-agent
  ```

  ---

  ## İlişkili Skilllar

  - **self-improving-agent** — bir agentin kendi bellek/kurallarını zaman içinde geliştir. Yapılandırılmış deneyim döngüleri için DEĞİL.
  - **senior-ml-engineer** — ML mimarisi kararları. Tamamlayıcı — ilk tasarım için kullan, sonra optimizasyon için autoresearch.
  - **tdd-guide** — test-driven development. Tamamlayıcı — testler değerlendirme fonksiyonu olabilir.
  - **skill-security-auditor** — yayımlanmadan önce skillları denetle. Optimizasyon döngüleri için DEĞİL.
---

# Autoresearch Agent

> You sleep. The agent experiments. You wake up to results.

Autonomous experiment loop inspired by [Karpathy's autoresearch](https://github.com/karpathy/autoresearch). The agent edits one file, runs a fixed evaluation, keeps improvements, discards failures, and loops indefinitely.

Not one guess — fifty measured attempts, compounding.

---

## Slash Commands

| Command | What it does |
|---------|-------------|
| `/ar:setup` | Set up a new experiment interactively |
| `/ar:run` | Run a single experiment iteration |
| `/ar:loop` | Start autonomous loop with configurable interval (10m, 1h, daily, weekly, monthly) |
| `/ar:status` | Show dashboard and results |
| `/ar:resume` | Resume a paused experiment |

---

## When This Skill Activates

Recognize these patterns from the user:

- "Make this faster / smaller / better"
- "Optimize [file] for [metric]"
- "Improve my [headlines / copy / prompts]"
- "Run experiments overnight"
- "I want to get [metric] from X to Y"
- Any request involving: optimize, benchmark, improve, experiment loop, autoresearch

If the user describes a target file + a way to measure success → this skill applies.

---

## Setup

### First Time — Create the Experiment

Run the setup script. The user decides where experiments live:

**Project-level** (inside repo, git-tracked, shareable with team):
```bash
python scripts/setup_experiment.py \
  --domain engineering \
  --name api-speed \
  --target src/api/search.py \
  --eval "pytest bench.py --tb=no -q" \
  --metric p50_ms \
  --direction lower \
  --scope project
```

**User-level** (personal, in `~/.autoresearch/`):
```bash
python scripts/setup_experiment.py \
  --domain marketing \
  --name medium-ctr \
  --target content/titles.md \
  --eval "python evaluate.py" \
  --metric ctr_score \
  --direction higher \
  --evaluator llm_judge_content \
  --scope user
```

The `--scope` flag determines where `.autoresearch/` lives:
- `project` (default) → `.autoresearch/` in the repo root. Experiment definitions are git-tracked. Results are gitignored.
- `user` → `~/.autoresearch/` in the home directory. Everything is personal.

### What Setup Creates

```
.autoresearch/
├── config.yaml                        ← Global settings
├── .gitignore                         ← Ignores results.tsv, *.log
└── {domain}/{experiment-name}/
    ├── program.md                     ← Objectives, constraints, strategy
    ├── config.cfg                     ← Target, eval cmd, metric, direction
    ├── results.tsv                    ← Experiment log (gitignored)
    └── evaluate.py                    ← Evaluation script (if --evaluator used)
```

**results.tsv columns:** `commit | metric | status | description`
- `commit` — short git hash
- `metric` — float value or "N/A" for crashes
- `status` — keep | discard | crash
- `description` — what changed or why it crashed

### Domains

| Domain | Use Cases |
|--------|-----------|
| `engineering` | Code speed, memory, bundle size, test pass rate, build time |
| `marketing` | Headlines, social copy, email subjects, ad copy, engagement |
| `content` | Article structure, SEO descriptions, readability, CTR |
| `prompts` | System prompts, chatbot tone, agent instructions |
| `custom` | Anything else with a measurable metric |

### If `program.md` Already Exists

The user may have written their own `program.md`. If found in the experiment directory, read it. It overrides the template. Only ask for what's missing.

---

## Agent Protocol

You are the loop. The scripts handle setup and evaluation — you handle the creative work.

### Before Starting
1. Read `.autoresearch/{domain}/{name}/config.cfg` to get:
   - `target` — the file you edit
   - `evaluate_cmd` — the command that measures your changes
   - `metric` — the metric name to look for in eval output
   - `metric_direction` — "lower" or "higher" is better
   - `time_budget_minutes` — max time per evaluation
2. Read `program.md` for strategy, constraints, and what you can/cannot change
3. Read `results.tsv` for experiment history (columns: commit, metric, status, description)
4. Checkout the experiment branch: `git checkout autoresearch/{domain}/{name}`

### Each Iteration
1. Review results.tsv — what worked? What failed? What hasn't been tried?
2. Decide ONE change to the target file. One variable per experiment.
3. Edit the target file
4. Commit: `git add {target} && git commit -m "experiment: {description}"`
5. Evaluate: `python scripts/run_experiment.py --experiment {domain}/{name} --single`
6. Read the output — it prints KEEP, DISCARD, or CRASH with the metric value
7. Go to step 1

### What the Script Handles (you don't)
- Running the eval command with timeout
- Parsing the metric from eval output
- Comparing to previous best
- Reverting the commit on failure (`git reset --hard HEAD~1`)
- Logging the result to results.tsv

### Starting an Experiment

```bash
# Single iteration (the agent calls this repeatedly)
python scripts/run_experiment.py --experiment engineering/api-speed --single

# Dry run (test setup before starting)
python scripts/run_experiment.py --experiment engineering/api-speed --dry-run
```

### Strategy Escalation
- Runs 1-5: Low-hanging fruit (obvious improvements, simple optimizations)
- Runs 6-15: Systematic exploration (vary one parameter at a time)
- Runs 16-30: Structural changes (algorithm swaps, architecture shifts)
- Runs 30+: Radical experiments (completely different approaches)
- If no improvement in 20+ runs: update program.md Strategy section

### Self-Improvement
After every 10 experiments, review results.tsv for patterns. Update the
Strategy section of program.md with what you learned (e.g., "caching changes
consistently improve by 5-10%", "refactoring attempts never improve the metric").
Future iterations benefit from this accumulated knowledge.

### Stopping
- Run until interrupted by the user, context limit reached, or goal in program.md is met
- Before stopping: ensure results.tsv is up to date
- On context limit: the next session can resume — results.tsv and git log persist

### Rules

- **One change per experiment.** Don't change 5 things at once. You won't know what worked.
- **Simplicity criterion.** A small improvement that adds ugly complexity is not worth it. Equal performance with simpler code is a win. Removing code that gets same results is the best outcome.
- **Never modify the evaluator.** `evaluate.py` is the ground truth. Modifying it invalidates all comparisons. Hard stop if you catch yourself doing this.
- **Timeout.** If a run exceeds 2.5× the time budget, kill it and treat as crash.
- **Crash handling.** If it's a typo or missing import, fix and re-run. If the idea is fundamentally broken, revert, log "crash", move on. 5 consecutive crashes → pause and alert.
- **No new dependencies.** Only use what's already available in the project.

---

## Evaluators

Ready-to-use evaluation scripts. Copied into the experiment directory during setup with `--evaluator`.

### Free Evaluators (no API cost)

| Evaluator | Metric | Use Case |
|-----------|--------|----------|
| `benchmark_speed` | `p50_ms` (lower) | Function/API execution time |
| `benchmark_size` | `size_bytes` (lower) | File, bundle, Docker image size |
| `test_pass_rate` | `pass_rate` (higher) | Test suite pass percentage |
| `build_speed` | `build_seconds` (lower) | Build/compile/Docker build time |
| `memory_usage` | `peak_mb` (lower) | Peak memory during execution |

### LLM Judge Evaluators (uses your subscription)

| Evaluator | Metric | Use Case |
|-----------|--------|----------|
| `llm_judge_content` | `ctr_score` 0-10 (higher) | Headlines, titles, descriptions |
| `llm_judge_prompt` | `quality_score` 0-100 (higher) | System prompts, agent instructions |
| `llm_judge_copy` | `engagement_score` 0-10 (higher) | Social posts, ad copy, emails |

LLM judges call the CLI tool the user is already running (Claude, Codex, Gemini). The evaluation prompt is locked inside `evaluate.py` — the agent cannot modify it. This prevents the agent from gaming its own evaluator.

The user's existing subscription covers the cost:
- Claude Code Max → unlimited Claude calls for evaluation
- Codex CLI (ChatGPT Pro) → unlimited Codex calls
- Gemini CLI (free tier) → free evaluation calls

### Custom Evaluators

If no built-in evaluator fits, the user writes their own `evaluate.py`. Only requirement: it must print `metric_name: value` to stdout.

```python
#!/usr/bin/env python3
# My custom evaluator — DO NOT MODIFY after experiment starts
import subprocess
result = subprocess.run(["my-benchmark", "--json"], capture_output=True, text=True)
# Parse and output
print(f"my_metric: {parse_score(result.stdout)}")
```

---

## Viewing Results

```bash
# Single experiment
python scripts/log_results.py --experiment engineering/api-speed

# All experiments in a domain
python scripts/log_results.py --domain engineering

# Cross-experiment dashboard
python scripts/log_results.py --dashboard

# Export formats
python scripts/log_results.py --experiment engineering/api-speed --format csv --output results.csv
python scripts/log_results.py --experiment engineering/api-speed --format markdown --output results.md
python scripts/log_results.py --dashboard --format markdown --output dashboard.md
```

### Dashboard Output

```
DOMAIN          EXPERIMENT          RUNS  KEPT  BEST         Δ FROM START  STATUS
engineering     api-speed            47    14   185ms        -76.9%        active
engineering     bundle-size          23     8   412KB        -58.3%        paused
marketing       medium-ctr           31    11   8.4/10       +68.0%        active
prompts         support-tone         15     6   82/100       +46.4%        done
```

### Export Formats

- **TSV** — default, tab-separated (compatible with spreadsheets)
- **CSV** — comma-separated, with proper quoting
- **Markdown** — formatted table, readable in GitHub/docs

---

## Proactive Triggers

Flag these without being asked:

- **No evaluation command works** → Test it before starting the loop. Run once, verify output.
- **Target file not in git** → `git init && git add . && git commit -m 'initial'` first.
- **Metric direction unclear** → Ask: is lower or higher better? Must know before starting.
- **Time budget too short** → If eval takes longer than budget, every run crashes.
- **Agent modifying evaluate.py** → Hard stop. This invalidates all comparisons.
- **5 consecutive crashes** → Pause the loop. Alert the user. Don't keep burning cycles.
- **No improvement in 20+ runs** → Suggest changing strategy in program.md or trying a different approach.

---

## Installation

### One-liner (any tool)
```bash
git clone https://github.com/alirezarezvani/claude-skills.git
cp -r claude-skills/engineering/autoresearch-agent ~/.claude/skills/
```

### Multi-tool install
```bash
./scripts/convert.sh --skill autoresearch-agent --tool codex|gemini|cursor|windsurf|openclaw
```

### OpenClaw
```bash
clawhub install cs-autoresearch-agent
```

---

## Related Skills

- **self-improving-agent** — improves an agent's own memory/rules over time. NOT for structured experiment loops.
- **senior-ml-engineer** — ML architecture decisions. Complementary — use for initial design, then autoresearch for optimization.
- **tdd-guide** — test-driven development. Complementary — tests can be the evaluation function.
- **skill-security-auditor** — audit skills before publishing. NOT for optimization loops.
