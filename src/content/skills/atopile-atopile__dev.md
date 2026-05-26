---
name: "dev"
description_en: "LLM-focused workflow for working in this repo: compile Zig, run the orchestrated test runner, consume test-report.json/html artifacts, and discover/debug ConfigFlags."
description_tr: "Bu repo'da LLM'ler için optimize edilmiş workflow: Zig'i derle, orchestrated test runner'ı çalıştır, test-report.json/html artifact'larını kullan ve ConfigFlags'ı keşfet/debug et."
category: "Design"
repo: "atopile/atopile"
stars: 3370
url: "https://github.com/atopile/atopile/blob/HEAD/.claude/skills/dev/SKILL.md"
path: ".claude/skills/dev/SKILL.md"
is_collection: false
body_length: 6032
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Dev Modülü

  Bu beceri bu depo içinde çalışan LLM'ler için yazılmıştır. En hızlı, en güvenilir iç döngüye odaklanır:

  - Zig bağlamalarını gerektiğinde yeniden derle
  - Deponun düzenlenmiş test çalıştırıcısını çalıştır (`ato dev test --llm`, ham test çıktısı değil)
  - Oluşturulan test raporlarını kullan (`artifacts/test-report.json`, `artifacts/test-report.html`, `artifacts/test-report.llm.json`)
  - `ConfigFlag`'ları doğru şekilde keşfet ve kullan (ve depo genelinde envanterini tut)

  ## Hızlı Başlangıç

  ```bash
  source .venv/bin/activate

  ato dev compile
  ato dev test --llm -k solver
  ato dev test --llm --view HEAD --open
  ato dev test --reuse --baseline HEAD~1
  ato dev flags
  ```

  ## İlgili Dosyalar

  - CLI komutları: `src/atopile/cli/dev.py`
    - `ato dev compile` (`import faebryk.core.zig` aracılığıyla Zig derlemesini tetikler)
    - `ato dev test --llm` (`test/runner/main.py` dosyasını argümanlarla çalıştırır; baseline/CI rapor yardımcılarını destekler)
  - Zig build-on-import yapışkanı: `src/faebryk/core/zig/__init__.py` (`ZIG_NORECOMPILE`, `ZIG_RELEASEMODE`)
  - Config flagları yardımcı programı: `src/faebryk/libs/util.py` (`ConfigFlag`, `ConfigFlagInt`, …)
  - Test çalıştırıcısı + raporlar: `test/runner/main.py` (`artifacts/test-report.json`, `artifacts/test-report.html`, `artifacts/test-report.llm.json`)
  - CI artefaktsı tanımı: `.github/workflows/pytest.yml` (`test-report.json`, `test-report.html`)

  ## Bağımlılar (Çağrı Siteleri)

  - **CI/CD**: `dev` komutları GitHub Actions workflow'ları için birincil arayüzdür.
  - **Yerel Geliştirme**: Geliştiriciler Zig kodunu değiştirdikten sonra `ato dev compile` kullanırlar.

  ## Nasıl Çalışılır / Geliştirilir / Test Edilir

  ### Temel Komutlar
  - `ato dev compile`: native uzantıları derle (graph/typegraph/sexp bağlamaları).
  - `ato dev test --llm`: düzenlenmiş test çalıştırıcısını çalıştırır (varsayılan olarak `-p test -p src`); destekler:
    - `-k` filtresi (`-- -k ...` de geçiş argümanları aracılığıyla çalışır)
    - `--baseline` karşılaştırmaları (commit hash'i veya `HEAD~N` stili)
    - `--view` / `--open` GitHub Actions'tan `test-report.html` artefaktını getir ve aç (gerekli: `gh` CLI)
    - `--ci` CI marker ifadesini uygula (`not not_in_ci and not regression and not slow`)
    - `--direct -k <testname>` tek testi `test/runtest.py` aracılığıyla çalıştır (dar kapsamlı tek-test döngüleri)

  ### Test Raporları (JSON gerçek kaynağı)

  Yerel test çalıştırmaları yazar:
  - `artifacts/test-report.json` (tek gerçek kaynağı; sonuçlar/süreler/hafıza/baseline karşılaştırma durumu + stdout/stderr/loglar/traceback'ler; bkz. `tests[].output_full`)
  - `artifacts/test-report.html` (insan panosu; JSON'dan türetilmiş; `FBRK_TEST_GENERATE_HTML=1` tarafından kontrol edilir)
  - `artifacts/test-report.llm.json` (LLM-dostu; JSON'dan türetilmiş; ANSI kodları kaldırılmış loglar)

  CI her iki artefaktı da yükler (bkz. `.github/workflows/pytest.yml`):
  - `test-report.json`
  - `test-report.html`

  LLM hata ayıklaması için notlar:
  - Ham çıktı yerine `artifacts/test-report.json` veya `artifacts/test-report.llm.json` tercih edin; bunlar yapılandırılmış başarısızlıklar, loglar, baseline karşılaştırma ve koleksiyon hatalarını içerir.
  - HTML, uzun çalışan testleri, worker çökmelerini ve test başına çıktıyı hızlıca taramak için en iyisidir.

  Uzak/baseline davranışı:
  - `ato dev test --llm --baseline <commit>` **CI `test-report.json` artefaktını** baseline olarak kullanır (gerekli: `gh` CLI).
  - `ato dev test --llm --view <commit> --open` şu anda **yalnızca** HTML artefaktını getirir/açar; JSON için `gh run download` aracılığıyla `test-report.json` artefaktını indirin.
  - `ato dev test --reuse --baseline <commit>` testleri yeniden çalıştırmadan baseline'a karşı JSON/HTML/LLM'yi yeniden oluşturur.
  - `ato dev test --keep-open` testler bittikten sonra canlı rapor sunucusunu çalışır durumda tutar.

  Kullanışlı test-çalıştırıcı ortam değişkenleri (bkz. `test/runner/main.py`):
  - `FBRK_TEST_REPORT_INTERVAL` (saniye; rapor yenileme hızı)
  - `FBRK_TEST_LONG_THRESHOLD` (saniye; "uzun test" eşiği)
  - `FBRK_TEST_WORKERS` (`0` = cpu sayısı, negatif işçi sayısını ölçeklendirir)
  - `FBRK_TEST_GENERATE_HTML` (`1/0`)
  - `FBRK_TEST_PERIODIC_HTML` (`1/0`)
  - `FBRK_TEST_OUTPUT_MAX_BYTES` (HTML tarafından kullanılan önizleme çıktısını kısalt; `tests[].output_full` tam kalır)
  - `FBRK_TEST_OUTPUT_TRUNCATE_MODE` (`head` veya `tail`)
  - `FBRK_TEST_BIND_HOST` (orchestrator bağlama host'u; varsayılan `0.0.0.0`)
  - `FBRK_TEST_REPORT_HOST` (yazdırılan rapor URL'sinde kullanılan host; varsayılan bağlama host'u)
  - `FBRK_TEST_PERF_THRESHOLD_PERCENT` (varsayılan `0.30`)
  - `FBRK_TEST_PERF_MIN_TIME_DIFF_S` (varsayılan `1.0`)
  - `FBRK_TEST_PERF_MIN_MEMORY_DIFF_MB` (varsayılan `50.0`)

  LLM hızlı kullanımı:
  - `artifacts/test-report.llm.json` her zaman oluşturulur (ANSI kaldırılmış, tam testler + loglar).
  - `ato dev test --llm` özlü bir özet + şema + jq ipuçları yazdırır (yalnızca stdout).
  - jq tarifleri raporun içinde `llm.jq_recipes` altında gömülüdür.
  - Auto-LLM: `ato dev test` claude-code/codex-cli/cursor altında çalıştırırken özeti otomatik olarak etkinleştirir.
  - `FBRK_TEST_LLM=1` veya `FBRK_TEST_LLM=0` aracılığıyla açın/kapatın.

  ### ConfigFlags (nasıl kullanılır + nasıl envanter tutulur)

  `ConfigFlag` deponun "ortam değişkenine göre aç-kapat" mekanizmasıdır. Ortam değişkeni adı `ConfigFlag(...)` parametresinin ilk argümanıdır.

  Kullanım:
  ```bash
  export SOME_FLAG=1
  ```

  Depo içindeki tüm ConfigFlags'ları envanter tutun (manuel bir liste tutmaya çalışmak yerine tercih edilir):
  ```bash
  ato dev flags
  ```

  Tam resmi elde etmek istediğinizde `ato dev flags` kullanmayı tercih edin (türler/varsayılanlar/açıklamalar + çağrı sitesi sayıları bir yerde).

  Sık sık kullanacağınız yüksek etkili flaglar:
  - Zig derlemesi: `ZIG_NORECOMPILE`, `ZIG_RELEASEMODE`
  - Çözer hata ayıklaması: `SLOG`, `SVERBOSE_TABLE`, `SPRINT_START`, `SMAX_ITERATIONS`, `SSHOW_SS_IS`
  - Loglar: `COLOR_LOGS`, `LOG_TIME`, `LOG_FILEINFO`

  ### Geliştirme İş Akışı
  1.  **Zig Değişiklikleri**: `src/faebryk/core/zig/src/` altındaki dosyaları düzenle -> `ato dev compile` çalıştır.
  2.  **Profilleme**: Bir şey yavaşsa, flamegraph veya istatistik oluşturmak için `ato dev profile <command>` kullan.

  ### Test
  - Ana test giriş noktası: `ato dev test --llm`.
  - CLI davranışını değiştirirseniz, komut yüzeyini uygulayan `test/` altına test ekleyin/ayarlayın.

  ## En İyi Uygulamalar
  - **ConfigFlags Kullan**: Deneysel özellikler veya ayrıntılı hata ayıklama için kodu açıklama satırına çevirmek yerine `ConfigFlag` kullan.
  - **Sık sık derle**: Zig hataları Python araçları tarafından yakalanmayacaktır.
---

# Dev Module

This skill is written for LLMs working inside this repo. It focuses on the fastest, most reliable inner loop:

- rebuild Zig bindings when needed
- run the repo’s orchestrated test runner (`ato dev test --llm`, not raw test output)
- use the generated test reports (`artifacts/test-report.json`, `artifacts/test-report.html`, `artifacts/test-report.llm.json`)
- discover and use `ConfigFlag`s correctly (and inventory them repo-wide)

## Quick Start

```bash
source .venv/bin/activate

ato dev compile
ato dev test --llm -k solver
ato dev test --llm --view HEAD --open
ato dev test --reuse --baseline HEAD~1
ato dev flags
```

## Relevant Files

- CLI commands: `src/atopile/cli/dev.py`
  - `ato dev compile` (triggers Zig build via `import faebryk.core.zig`)
  - `ato dev test --llm` (runs `test/runner/main.py` with args; supports baseline/CI report helpers)
- Zig build-on-import glue: `src/faebryk/core/zig/__init__.py` (`ZIG_NORECOMPILE`, `ZIG_RELEASEMODE`)
- Config flags utility: `src/faebryk/libs/util.py` (`ConfigFlag`, `ConfigFlagInt`, …)
- Test runner + reports: `test/runner/main.py` (`artifacts/test-report.json`, `artifacts/test-report.html`, `artifacts/test-report.llm.json`)
- CI artifacts definition: `.github/workflows/pytest.yml` (`test-report.json`, `test-report.html`)

## Dependants (Call Sites)

- **CI/CD**: The `dev` commands are the primary interface for GitHub Actions workflows.
- **Local Development**: Developers use `ato dev compile` after modifying Zig code.

## How to Work With / Develop / Test

### Core Commands
- `ato dev compile`: compile native extensions (graph/typegraph/sexp bindings).
- `ato dev test --llm`: runs the orchestrated test runner (defaults to `-p test -p src`); supports:
  - `-k` filter (`-- -k ...` also works via passthrough args)
  - `--baseline` comparisons (commit hash or `HEAD~N` style)
  - `--view` / `--open` to fetch and open the `test-report.html` artifact from GitHub Actions (requires `gh` CLI)
  - `--ci` to apply the CI marker expression (`not not_in_ci and not regression and not slow`)
  - `--direct -k <testname>` to run a single test via `test/runtest.py` (tight single-test loops)

### Test Reports (JSON as source of truth)

Local test runs write:
- `artifacts/test-report.json` (single source of truth; outcomes/durations/memory/baseline compare status + stdout/stderr/logs/tracebacks; see `tests[].output_full`)
- `artifacts/test-report.html` (human dashboard; derived from JSON; controlled by `FBRK_TEST_GENERATE_HTML=1`)
- `artifacts/test-report.llm.json` (LLM-friendly; derived from JSON; ANSI stripped logs)

CI uploads both artifacts (see `.github/workflows/pytest.yml`):
- `test-report.json`
- `test-report.html`

Notes for LLM debugging:
- Prefer `artifacts/test-report.json` or `artifacts/test-report.llm.json` over raw output; they include structured failures, logs, baseline compare, and collection errors.
- The HTML is best for quickly scanning long-running tests, worker crashes, and per-test output.

Remote/baseline behavior:
- `ato dev test --llm --baseline <commit>` uses the **CI `test-report.json` artifact** as the baseline (requires `gh` CLI).
- `ato dev test --llm --view <commit> --open` currently fetches/opens **only** the HTML artifact; for JSON, download the `test-report.json` artifact via `gh run download`.
- `ato dev test --reuse --baseline <commit>` rebuilds JSON/HTML/LLM against a baseline without rerunning tests.
- `ato dev test --keep-open` keeps the live report server running after tests finish.

Useful test-runner environment variables (see `test/runner/main.py`):
- `FBRK_TEST_REPORT_INTERVAL` (seconds; report refresh cadence)
- `FBRK_TEST_LONG_THRESHOLD` (seconds; “long test” threshold)
- `FBRK_TEST_WORKERS` (`0` = cpu count, negative scales workers)
- `FBRK_TEST_GENERATE_HTML` (`1/0`)
- `FBRK_TEST_PERIODIC_HTML` (`1/0`)
- `FBRK_TEST_OUTPUT_MAX_BYTES` (truncate preview output used by HTML; `tests[].output_full` remains complete)
- `FBRK_TEST_OUTPUT_TRUNCATE_MODE` (`head` or `tail`)
- `FBRK_TEST_BIND_HOST` (orchestrator bind host; default `0.0.0.0`)
- `FBRK_TEST_REPORT_HOST` (host used in printed report URL; default bind host)
- `FBRK_TEST_PERF_THRESHOLD_PERCENT` (default `0.30`)
- `FBRK_TEST_PERF_MIN_TIME_DIFF_S` (default `1.0`)
- `FBRK_TEST_PERF_MIN_MEMORY_DIFF_MB` (default `50.0`)

LLM quick usage:
- `artifacts/test-report.llm.json` is always generated (ANSI stripped, full tests + logs).
- `ato dev test --llm` prints a concise summary + schema + jq hints (stdout only).
- jq recipes are embedded in the report under `llm.jq_recipes`.
- Auto-LLM: `ato dev test` enables the summary automatically when running under claude-code/codex-cli/cursor.
- Force on/off via `FBRK_TEST_LLM=1` or `FBRK_TEST_LLM=0`.

### ConfigFlags (how to use + how to inventory)

`ConfigFlag` is the repo’s “toggle-by-env-var” mechanism. The environment variable name is the first argument to `ConfigFlag(...)`.

Usage:
```bash
export SOME_FLAG=1
```

Inventory all ConfigFlags in-tree (preferred over trying to maintain a manual list):
```bash
ato dev flags
```

Prefer using `ato dev flags` when you want the full picture (types/defaults/descriptions + callsite counts) in one place.

High-leverage flags you’ll use often:
- Zig build: `ZIG_NORECOMPILE`, `ZIG_RELEASEMODE`
- Solver debug: `SLOG`, `SVERBOSE_TABLE`, `SPRINT_START`, `SMAX_ITERATIONS`, `SSHOW_SS_IS`
- Logs: `COLOR_LOGS`, `LOG_TIME`, `LOG_FILEINFO`

### Development Workflow
1.  **Zig Changes**: Edit files under `src/faebryk/core/zig/src/` -> Run `ato dev compile`.
2.  **Profiling**: If something is slow, use `ato dev profile <command>` to generate a flamegraph or stats.

### Testing
- Main test entrypoint: `ato dev test --llm`.
- If you change CLI behavior, add/adjust tests under `test/` that exercise the command surface.

## Best Practices
- **Use ConfigFlags**: For experimental features or verbose debugging, use a `ConfigFlag` instead of commenting out code.
- **Compile often**: Zig errors won’t be caught by Python tooling.
