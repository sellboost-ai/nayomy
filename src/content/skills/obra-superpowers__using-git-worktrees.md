---
name: "using-git-worktrees"
description_en: "Use when starting feature work that needs isolation from current workspace or before executing implementation plans - ensures an isolated workspace exists via native tools or git worktree fallback"
description_tr: "Yeni bir feature üzerinde çalışmaya başlarken veya implementasyon planını yürütmeden önce kullanın - native araçlar veya git worktree fallback aracılığıyla izole edilmiş bir workspace sağlar."
category: "Design"
repo: "obra/superpowers"
stars: 233596
url: "https://github.com/obra/superpowers/blob/HEAD/skills/using-git-worktrees/SKILL.md"
path: "skills/using-git-worktrees/SKILL.md"
is_collection: false
body_length: 7220
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Git Worktrees Kullanımı
  
  ## Genel Bakış
  
  Çalışmanın izole bir ortamda gerçekleştirilmesini sağlayın. Platform'un native worktree araçlarını tercih edin. Native araç yoksa git worktrees'i manuel olarak kullanın.
  
  **Temel ilke:** Mevcut izolasyonu algıla. Sonra native araçları kullan. Sonra git'e geri dön. Hiçbir zaman sisteme karşı çalışma.
  
  **Başlangıçta ilan et:** "Git worktrees skill'ini kullanarak izole bir workspace kurmaktayım."
  
  ## Adım 0: Mevcut İzolasyonu Algıla
  
  **Herhangi bir şey oluşturmadan önce, zaten izole bir workspace'te olup olmadığınızı kontrol edin.**
  
  ```bash
  GIT_DIR=$(cd "$(git rev-parse --git-dir)" 2>/dev/null && pwd -P)
  GIT_COMMON=$(cd "$(git rev-parse --git-common-dir)" 2>/dev/null && pwd -P)
  BRANCH=$(git branch --show-current)
  ```
  
  **Submodule koruması:** `GIT_DIR != GIT_COMMON` git submodules içinde de doğrudur. "Already in a worktree" sonucuna varmadan önce, submodule içinde olmadığınızı doğrulayın:
  
  ```bash
  # Bu bir yol döndürürse, bir worktree değil submodule içindesiniz — normal repo olarak ele alın
  git rev-parse --show-superproject-working-tree 2>/dev/null
  ```
  
  **`GIT_DIR != GIT_COMMON` ise (ve submodule değilse):** Zaten linked worktree içindesiniz. Adım 2'ye (Project Setup) geçin. Başka bir worktree OLUŞTURMAYIN.
  
  Branch durumu ile rapor edin:
  - Bir branch üzerinde: "Already in isolated workspace at `<path>` on branch `<name>`."
  - Detached HEAD: "Already in isolated workspace at `<path>` (detached HEAD, externally managed). Branch creation needed at finish time."
  
  **`GIT_DIR == GIT_COMMON` ise (veya submodule içindeyse):** Normal repo checkout içindesiniz.
  
  Kullanıcı talimatlarında zaten bir worktree tercihi belirtti mi? Değilse, worktree oluşturmadan önce izin isteyin:
  
  > "İzole bir worktree kurmamı ister misiniz? Mevcut branch'inizi değişikliklerden korur."
  
  Mevcut herhangi bir beyan edilen tercihe sorulmadan uyun. Kullanıcı rızasını reddeterse, yerinde çalışın ve Adım 2'ye geçin.
  
  ## Adım 1: İzole Workspace Oluştur
  
  **İki mekanizmanız var. Bu sırayla deneyin.**
  
  ### 1a. Native Worktree Araçları (tercih edilen)
  
  Kullanıcı izole workspace talep etmiş (Adım 0 rızası). Zaten worktree oluşturmak için bir yolunuz var mı? `EnterWorktree`, `WorktreeCreate`, `/worktree` komutu veya `--worktree` flag'i gibi adlandırılan bir araç olabilir. Varsa, kullanın ve Adım 2'ye geçin.
  
  Native araçlar dizin yerleştirmesini, branch oluşturmayı ve temizliği otomatik olarak ele alır. Native araç varken `git worktree add` kullanmak, sisteminizin göremeyeceği veya yönetemeyeceği phantom state oluşturur.
  
  Yalnızca Step 1a uygulanmaz ise Step 1b'ye devam edin — native worktree aracınız yoksa.
  
  ### 1b. Git Worktree Fallback
  
  **Yalnızca Adım 1a uygulanmaz ise bunu kullanın** — native worktree aracınız yoksa. Git kullanarak manuel olarak worktree oluşturun.
  
  #### Dizin Seçimi
  
  Bu öncelik sırasını izleyin. Açık kullanıcı tercihi gözlemlenen filesystem durumunu her zaman yener.
  
  1. **Talimatlarınızda beyan edilmiş bir worktree dizin tercihi kontrol edin.** Kullanıcı zaten bir belirtmişse, sormadan kullanın.
  
  2. **Mevcut project-local worktree dizinini kontrol edin:**
     ```bash
     ls -d .worktrees 2>/dev/null     # Tercih edilen (gizli)
     ls -d worktrees 2>/dev/null      # Alternatif
     ```
     Bulunursa, kullanın. Her ikisi varsa, `.worktrees` kazanır.
  
  3. **Başka rehberlik yoksa**, project root'ta `.worktrees/` olarak varsayılan olarak ayarlayın.
  
  #### Güvenlik Doğrulaması (yalnızca project-local dizinler)
  
  **Worktree oluşturmadan önce dizin yok sayılmış mı DOĞRULMALI:**
  
  ```bash
  git check-ignore -q .worktrees 2>/dev/null || git check-ignore -q worktrees 2>/dev/null
  ```
  
  **YOKSA:** .gitignore'a ekleyin, değişikliği commit edin, sonra devam edin.
  
  **Neden kritik:** Worktree içeriğini repository'ye yanlışlıkla commit etmeyi engeller.
  
  #### Worktree Oluştur
  
  ```bash
  # Seçilen konuma göre yolu belirle
  path="$LOCATION/$BRANCH_NAME"
  
  git worktree add "$path" -b "$BRANCH_NAME"
  cd "$path"
  ```
  
  **Sandbox fallback:** `git worktree add` izin hatasıyla başarısız olursa (sandbox reddi), kullanıcıya sandbox'ın worktree oluşturmayı engellediğini ve bunun yerine mevcut dizinde çalıştığınızı söyleyin. Sonra setup ve baseline testlerini yerinde çalıştırın.
  
  ## Adım 2: Project Setup
  
  Uygun setup'ı otomatik olarak algıla ve çalıştır:
  
  ```bash
  # Node.js
  if [ -f package.json ]; then npm install; fi
  
  # Rust
  if [ -f Cargo.toml ]; then cargo build; fi
  
  # Python
  if [ -f requirements.txt ]; then pip install -r requirements.txt; fi
  if [ -f pyproject.toml ]; then poetry install; fi
  
  # Go
  if [ -f go.mod ]; then go mod download; fi
  ```
  
  ## Adım 3: Temiz Baseline'ı Doğrula
  
  Workspace'in temiz başladığından emin olmak için testleri çalıştır:
  
  ```bash
  # Projeye uygun komutu kullan
  npm test / cargo test / pytest / go test ./...
  ```
  
  **Testler başarısız olursa:** Hataları rapor et, devam edip etmeyeceğini veya araştırıp araştırmayacağını sor.
  
  **Testler geçerse:** Hazır olduğunu rapor et.
  
  ### Rapor
  
  ```
  Worktree ready at <full-path>
  Tests passing (<N> tests, 0 failures)
  Ready to implement <feature-name>
  ```
  
  ## Hızlı Referans
  
  | Durum | İşlem |
  |-------|-------|
  | Zaten linked worktree içinde | Oluşturmayı atla (Adım 0) |
  | Bir submodule içinde | Normal repo olarak ele al (Adım 0 koruması) |
  | Native worktree aracı mevcut | Kullan (Adım 1a) |
  | Native araç yok | Git worktree fallback (Adım 1b) |
  | `.worktrees/` varsa | Kullan (yok sayılmış olduğunu doğrula) |
  | `worktrees/` varsa | Kullan (yok sayılmış olduğunu doğrula) |
  | Her ikisi varsa | `.worktrees/` kullan |
  | Her ikisi yoksa | Talimat dosyasını kontrol et, sonra `.worktrees/` varsayılanı |
  | Dizin yok sayılmamış | .gitignore'a ekle + commit |
  | Oluşturmada izin hatası | Sandbox fallback, yerinde çalış |
  | Baseline sırasında testler başarısız | Hataları rapor et + sor |
  | package.json/Cargo.toml yok | Dependency kurulumunu atla |
  
  ## Yaygın Hatalar
  
  ### Sisteme karşı çalışma
  
  - **Problem:** Platform zaten izolasyon sağlarken `git worktree add` kullanmak
  - **Çözüm:** Adım 0 mevcut izolasyonu algılar. Adım 1a native araçlara ertelenmiştir.
  
  ### Algılamayı atlama
  
  - **Problem:** Mevcut bir tane içinde iç içe worktree oluşturmak
  - **Çözüm:** Herhangi bir şey oluşturmadan önce her zaman Adım 0'ı çalıştırın
  
  ### Yok saymayı doğrulamayı atlama
  
  - **Problem:** Worktree içeriği izlenir, git status'ü kirletir
  - **Çözüm:** Her zaman project-local worktree oluşturmadan önce `git check-ignore` kullanın
  
  ### Dizin konumunu varsayıp geçme
  
  - **Problem:** Tutarsızlık oluşturur, proje kurallarını ihlal eder
  - **Çözüm:** Önceliği izleyin: açık talimatlar > mevcut project-local dizin > varsayılan
  
  ### Başarısız testlerle devam etme
  
  - **Problem:** Yeni hatalar ile önceden var olan sorunları ayırt edememe
  - **Çözüm:** Hataları rapor et, devam etmek için açık izin al
  
  ## Kırmızı Bayraklar
  
  **Asla:**
  - Adım 0 mevcut izolasyonu algıladığında worktree oluşturma
  - Native worktree aracınız varken `git worktree add` kullanma (ör. `EnterWorktree`). Bu #1 hatadır — varsa, kullanın.
  - Adım 1a'yı atlayıp doğrudan Adım 1b'nin git komutlarına gitme
  - Yok sayılmış olduğunu doğrulamadan worktree oluşturma (project-local)
  - Baseline test doğrulamasını atlama
  - Sorulmadan başarısız testlerle devam etme
  
  **Her zaman:**
  - Önce Adım 0 algılamasını çalıştırın
  - Git fallback yerine native araçları tercih edin
  - Dizin önceliğini izleyin: açık talimatlar > mevcut project-local dizin > varsayılan
  - Dizin project-local için yok sayılmış olduğunu doğrulayın
  - Project setup'ı otomatik olarak algılayın ve çalıştırın
  - Temiz test baseline'ını doğrulayın
---

# Using Git Worktrees

## Overview

Ensure work happens in an isolated workspace. Prefer your platform's native worktree tools. Fall back to manual git worktrees only when no native tool is available.

**Core principle:** Detect existing isolation first. Then use native tools. Then fall back to git. Never fight the harness.

**Announce at start:** "I'm using the using-git-worktrees skill to set up an isolated workspace."

## Step 0: Detect Existing Isolation

**Before creating anything, check if you are already in an isolated workspace.**

```bash
GIT_DIR=$(cd "$(git rev-parse --git-dir)" 2>/dev/null && pwd -P)
GIT_COMMON=$(cd "$(git rev-parse --git-common-dir)" 2>/dev/null && pwd -P)
BRANCH=$(git branch --show-current)
```

**Submodule guard:** `GIT_DIR != GIT_COMMON` is also true inside git submodules. Before concluding "already in a worktree," verify you are not in a submodule:

```bash
# If this returns a path, you're in a submodule, not a worktree — treat as normal repo
git rev-parse --show-superproject-working-tree 2>/dev/null
```

**If `GIT_DIR != GIT_COMMON` (and not a submodule):** You are already in a linked worktree. Skip to Step 2 (Project Setup). Do NOT create another worktree.

Report with branch state:
- On a branch: "Already in isolated workspace at `<path>` on branch `<name>`."
- Detached HEAD: "Already in isolated workspace at `<path>` (detached HEAD, externally managed). Branch creation needed at finish time."

**If `GIT_DIR == GIT_COMMON` (or in a submodule):** You are in a normal repo checkout.

Has the user already indicated their worktree preference in your instructions? If not, ask for consent before creating a worktree:

> "Would you like me to set up an isolated worktree? It protects your current branch from changes."

Honor any existing declared preference without asking. If the user declines consent, work in place and skip to Step 2.

## Step 1: Create Isolated Workspace

**You have two mechanisms. Try them in this order.**

### 1a. Native Worktree Tools (preferred)

The user has asked for an isolated workspace (Step 0 consent). Do you already have a way to create a worktree? It might be a tool with a name like `EnterWorktree`, `WorktreeCreate`, a `/worktree` command, or a `--worktree` flag. If you do, use it and skip to Step 2.

Native tools handle directory placement, branch creation, and cleanup automatically. Using `git worktree add` when you have a native tool creates phantom state your harness can't see or manage.

Only proceed to Step 1b if you have no native worktree tool available.

### 1b. Git Worktree Fallback

**Only use this if Step 1a does not apply** — you have no native worktree tool available. Create a worktree manually using git.

#### Directory Selection

Follow this priority order. Explicit user preference always beats observed filesystem state.

1. **Check your instructions for a declared worktree directory preference.** If the user has already specified one, use it without asking.

2. **Check for an existing project-local worktree directory:**
   ```bash
   ls -d .worktrees 2>/dev/null     # Preferred (hidden)
   ls -d worktrees 2>/dev/null      # Alternative
   ```
   If found, use it. If both exist, `.worktrees` wins.

3. **If there is no other guidance available**, default to `.worktrees/` at the project root.

#### Safety Verification (project-local directories only)

**MUST verify directory is ignored before creating worktree:**

```bash
git check-ignore -q .worktrees 2>/dev/null || git check-ignore -q worktrees 2>/dev/null
```

**If NOT ignored:** Add to .gitignore, commit the change, then proceed.

**Why critical:** Prevents accidentally committing worktree contents to repository.

#### Create the Worktree

```bash
# Determine path based on chosen location
path="$LOCATION/$BRANCH_NAME"

git worktree add "$path" -b "$BRANCH_NAME"
cd "$path"
```

**Sandbox fallback:** If `git worktree add` fails with a permission error (sandbox denial), tell the user the sandbox blocked worktree creation and you're working in the current directory instead. Then run setup and baseline tests in place.

## Step 2: Project Setup

Auto-detect and run appropriate setup:

```bash
# Node.js
if [ -f package.json ]; then npm install; fi

# Rust
if [ -f Cargo.toml ]; then cargo build; fi

# Python
if [ -f requirements.txt ]; then pip install -r requirements.txt; fi
if [ -f pyproject.toml ]; then poetry install; fi

# Go
if [ -f go.mod ]; then go mod download; fi
```

## Step 3: Verify Clean Baseline

Run tests to ensure workspace starts clean:

```bash
# Use project-appropriate command
npm test / cargo test / pytest / go test ./...
```

**If tests fail:** Report failures, ask whether to proceed or investigate.

**If tests pass:** Report ready.

### Report

```
Worktree ready at <full-path>
Tests passing (<N> tests, 0 failures)
Ready to implement <feature-name>
```

## Quick Reference

| Situation | Action |
|-----------|--------|
| Already in linked worktree | Skip creation (Step 0) |
| In a submodule | Treat as normal repo (Step 0 guard) |
| Native worktree tool available | Use it (Step 1a) |
| No native tool | Git worktree fallback (Step 1b) |
| `.worktrees/` exists | Use it (verify ignored) |
| `worktrees/` exists | Use it (verify ignored) |
| Both exist | Use `.worktrees/` |
| Neither exists | Check instruction file, then default `.worktrees/` |
| Directory not ignored | Add to .gitignore + commit |
| Permission error on create | Sandbox fallback, work in place |
| Tests fail during baseline | Report failures + ask |
| No package.json/Cargo.toml | Skip dependency install |

## Common Mistakes

### Fighting the harness

- **Problem:** Using `git worktree add` when the platform already provides isolation
- **Fix:** Step 0 detects existing isolation. Step 1a defers to native tools.

### Skipping detection

- **Problem:** Creating a nested worktree inside an existing one
- **Fix:** Always run Step 0 before creating anything

### Skipping ignore verification

- **Problem:** Worktree contents get tracked, pollute git status
- **Fix:** Always use `git check-ignore` before creating project-local worktree

### Assuming directory location

- **Problem:** Creates inconsistency, violates project conventions
- **Fix:** Follow priority: explicit instructions > existing project-local directory > default

### Proceeding with failing tests

- **Problem:** Can't distinguish new bugs from pre-existing issues
- **Fix:** Report failures, get explicit permission to proceed

## Red Flags

**Never:**
- Create a worktree when Step 0 detects existing isolation
- Use `git worktree add` when you have a native worktree tool (e.g., `EnterWorktree`). This is the #1 mistake — if you have it, use it.
- Skip Step 1a by jumping straight to Step 1b's git commands
- Create worktree without verifying it's ignored (project-local)
- Skip baseline test verification
- Proceed with failing tests without asking

**Always:**
- Run Step 0 detection first
- Prefer native tools over git fallback
- Follow directory priority: explicit instructions > existing project-local directory > default
- Verify directory is ignored for project-local
- Auto-detect and run project setup
- Verify clean test baseline
