---
name: "atopile-skills"
description_en: "How to write and maintain `.claude/skills/*/SKILL.md` files: source-of-truth-first process, verification steps, and conventions."
description_tr: "`.claude/skills/*/SKILL.md` dosyalarını yazma ve güncelleme rehberi: kaynaktan-doğruluk-birinci yaklaşım, doğrulama adımları ve kurallar."
category: "Development"
repo: "atopile/atopile"
stars: 3370
url: "https://github.com/atopile/atopile/blob/HEAD/.claude/skills/atopile-skills/SKILL.md"
path: ".claude/skills/atopile-skills/SKILL.md"
is_collection: false
body_length: 3397
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Skills Skill (Skill Dokümantasyonunu Yönetmek)

  Bu skill, `.claude/skills/*/SKILL.md` altındaki skill dokümantasyonunu yönetme sürecini açıklar.

  Amaç, gelecekteki LLM düzenlemeleri **doğru**, **uygulanabilir** ve **repoya dayalı** kalmasını sağlamaktır (vibes değil).

  ## Hızlı Başlangıç

  Herhangi bir skill güncellerken:

  1) Modülün "kaynak-gerçeği" dokümantasyonunu bulun (README/tasarım notları).
  2) İddiaları doğrudan kodda doğrulayın (giriş noktaları + değişmez-zorlayan dosyalar).
  3) Yanlış yollar/API'ler/testleri repoda arayarak düzeltin.
  4) Bu repoda gerçekten çalışan küçük bir `## Quick Start` ekleyin/güncelleyin.
  5) Frontmatter ve referans edilen yolları doğrulayın.

  ## "İyi" Neye Benzer

  İyi bir skill dokü:
  - **Spesifik**: kesin dosyaları ve *gerçek* giriş noktalarını gösterir.
  - **Değişmez-yönelimli**: kod tarafından zorlanan doğruluk kurallarını dokümante eder (aspirasyonel tasarım değil).
  - **Çalıştırılabilir**: Quick Start kod parçacıkları derlenebilir/içe aktarılabilir (veya en azından mevcut API yüzeyiyle eşleşir).
  - **İzlenebilir**: herhangi bir açık olmayan iddia, repodaki bir dosya yoluna izlenebilir.

  ## Standart İş Akışı (Kaynak-Gerçeği Birincil)

  ### 1) Skill'in kapsamını envanter yapın
  - Modül sınırını (dizinler, paketler) ve anahtar tüketicileri tanımlayın ("çağrı siteleri").
  - Bellek yerine `rg` kullanmayı tercih edin: içe aktarımları, giriş noktalarını ve anahtar sınıf/fonksiyonları arayın.

  ### 2) Dokları okuyun, sonra değişmezleri zorlayan kodu okuyun
  Bu hiyerarşiyi kullanın:
  1. Bir modül README/tasarım dokümanı (varsa)
  2. Reponun geri kalanı tarafından kullanılan runtime giriş noktaları
  3. Değişmezleri zorlayan dosyalar (*doğru* kalması gereken yerler)
  4. Davranışı kodifiye eden testler

  Örnekler:
  - Solver: `src/faebryk/core/solver/README.md` + `src/faebryk/core/solver/symbolic/invariants.py`
  - Graph: `src/faebryk/core/zig/src/graph/graph.zig` + `src/faebryk/core/zig/src/python/graph/graph_py.zig` + üretilen stubs
  - Library: `tools/library/gen_F.py` is the source-of-truth for `_F.py`

  ### 3) Yanlış ifadeleri düzeltin (bozuk tarihi korumayın)
  Skill dokülarındaki yaygın hata modları:
  - eski dosya yolları (`atopile/src/...` vs `src/...`)
  - yeniden adlandırılmış giriş noktaları (`lsp_server.py` vs hayali `server.py`)
  - artık var olmayan test yolları
  - gerçek API yüzeyiyle çelişen davranış hakkındaki iddialar (özellikle Zig bağlamaları)

  Kural: bunu repadan kanıtlayamıyorsanız, ya kaldırın ya da doğrulama yapılacak yer gösteren bir hipotez olarak etiketleyin.

  ### 4) Minimal, doğru bir `## Quick Start` ekleyin
  Quick Start şunları içermeli:
  - 5–20 satır
  - *public* API yüzeyini repoda başka yerde kullanıldığı şekilde kullanır
  - `src/.../something.zig` gibi yer tutuculara kaçınır

  İyi kalıplar:
  - Kullanıcı yüzü akışları için CLI kod parçası (`ato build`, `ato dev test --llm`)
  - Çekirdek API'ler için Python kod parçası (`GraphView.create()` / `TypeGraph.create(...)`)

  ### 5) Doğrulama kontrol listesi (gerekli)

  - Frontmatter YAML'ı parse edilir ve `name` ve `description` içerir.
  - Referans edilen tüm `src/`, `tools/` ve `test/` yolları vardır (üretilen yapı çıktılarını hariç tutun).
  - Belirtilen herhangi bir kod tanımlayıcısı (sınıf/fonksiyon) vardır (`rg` kontrolü).
  - Quick Start doğru import yolları ve fonksiyon imzaları kullanır.

  ## Stil/Yapı Kuralları

  Bu sıralamayı tercih edin:
  1) Tek paragraflık özet
  2) `## Quick Start`
  3) `## İlgili Dosyalar`
  4) `## Bağımlılar (Çağrı Siteleri)`
  5) `## Nasıl Çalışılır / Geliştirilebilir / Test Edilir`
  6) `## En İyi Uygulamalar` / `## Değişmezler` (uygulanabilir olduğunda)

  Dokü özlü ve "repo-yerel" tutun: kararlı standart dokümanlar olmadığı sürece harici bağlantılardan kaçının.
---

# Skills Skill (Maintaining Skill Docs)

This skill describes the process for maintaining the skill documentation under `.claude/skills/*/SKILL.md`.

The goal is that future LLM edits stay **accurate**, **actionable**, and **grounded in the repo** (not vibes).

## Quick Start

When updating any skill:

1) Find the module’s “source-of-truth” docs (README/design notes).
2) Verify claims directly in code (entrypoints + invariant-enforcing files).
3) Fix incorrect paths/APIs/tests by searching the repo.
4) Add/update a small `## Quick Start` that actually runs in this repo.
5) Validate frontmatter + referenced paths.

## What “Good” Looks Like

A good skill doc is:
- **Specific**: points at exact files and the *real* entrypoints.
- **Invariant-driven**: documents the correctness rules enforced by the code (not aspirational design).
- **Runnable**: Quick Start snippets compile/import (or at least match the current API surface).
- **Traceable**: any non-obvious claim can be traced to a file path in the repo.

## Standard Workflow (Source-of-Truth First)

### 1) Inventory the skill’s scope
- Identify the module boundary (directories, packages) and key consumers (“call sites”).
- Prefer using `rg` over memory: look for imports, entrypoints, and key classes/functions.

### 2) Read the docs, then the code that enforces invariants
Use this hierarchy:
1. A module README/design doc (if present)
2. The runtime entrypoint(s) used by the rest of the repo
3. The files that enforce invariants (the places that *must* remain correct)
4. Tests that codify behavior

Examples:
- Solver: `src/faebryk/core/solver/README.md` + `src/faebryk/core/solver/symbolic/invariants.py`
- Graph: `src/faebryk/core/zig/src/graph/graph.zig` + `src/faebryk/core/zig/src/python/graph/graph_py.zig` + generated stubs
- Library: `tools/library/gen_F.py` is the source-of-truth for `_F.py`

### 3) Fix wrong statements (don’t preserve broken history)
Common failure modes in skill docs:
- stale file paths (`atopile/src/...` vs `src/...`)
- renamed entrypoints (`lsp_server.py` vs imaginary `server.py`)
- test paths that no longer exist
- claims about behavior that conflict with the actual API surface (especially Zig bindings)

Rule: if you can’t prove it from the repo, either remove it or label it as a hypothesis with a pointer to where to verify.

### 4) Add a minimal, correct `## Quick Start`
Quick Start should be:
- 5–20 lines
- uses the *public* API surface as used elsewhere in the repo
- avoids placeholders like `src/.../something.zig`

Good patterns:
- CLI snippet for user-facing flows (`ato build`, `ato dev test --llm`)
- Python snippet for core APIs (`GraphView.create()` / `TypeGraph.create(...)`)

### 5) Validation checklist (required)

- Frontmatter YAML parses and contains `name` and `description`.
- Every referenced `src/`, `tools/`, and `test/` path exists (exclude generated build outputs).
- Any code identifiers mentioned (classes/functions) exist (`rg` check).
- Quick Start uses correct import paths and function signatures.

## Style/Structure Conventions

Prefer this ordering:
1) One-paragraph summary
2) `## Quick Start`
3) `## Relevant Files`
4) `## Dependants (Call Sites)`
5) `## How to Work With / Develop / Test`
6) `## Best Practices` / `## Invariants` (when applicable)

Keep the doc concise and “repo-local”: avoid external links unless they’re stable standards docs.
