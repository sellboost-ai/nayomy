---
name: "finishing-a-development-branch"
description_en: "Use when implementation is complete, all tests pass, and you need to decide how to integrate the work - guides completion of development work by presenting structured options for merge, PR, or cleanup"
description_tr: "Uygulama tamamlandığında, tüm testler geçtiğinde ve çalışmanızı nasıl entegre edeceğinize karar vermeniz gerektiğinde kullanın - merge, PR veya cleanup seçeneklerini sunarak geliştirme sürecinin tamamlanmasını rehberlik eder."
category: "Design"
repo: "obra/superpowers"
stars: 230380
url: "https://github.com/obra/superpowers/blob/HEAD/skills/finishing-a-development-branch/SKILL.md"
path: "skills/finishing-a-development-branch/SKILL.md"
is_collection: false
body_length: 6553
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Bir Geliştirme Şubesini Sonlandırma
  
  ## Genel Bakış
  
  Geliştirme işini sonlandırırken net seçenekler sunarak ve seçilen iş akışını gerçekleştirerek tamamlayın.
  
  **Temel ilke:** Testleri doğrula → Ortamı algıla → Seçenekleri sun → Seçimi gerçekleştir → Temizle.
  
  **Başlangıçta duyur:** "Bu işi tamamlamak için finishing-a-development-branch becerisini kullanıyorum."
  
  ## İşlem
  
  ### 1. Adım: Testleri Doğrula
  
  **Seçenekleri sunmadan önce testlerin geçtiğini doğrula:**
  
  ```bash
  # Projenin test paketini çalıştır
  npm test / cargo test / pytest / go test ./...
  ```
  
  **Testler başarısız olursa:**
  ```
  Testler başarısız (<N> hata). Tamamlamadan önce düzeltilmeli:
  
  [Hataları göster]
  
  Testler geçene kadar merge/PR ile devam edilemez.
  ```
  
  Dur. 2. Adıma geçme.
  
  **Testler geçerse:** 2. Adıma devam et.
  
  ### 2. Adım: Ortamı Algıla
  
  **Seçenekleri sunmadan önce çalışma alanı durumunu belirle:**
  
  ```bash
  GIT_DIR=$(cd "$(git rev-parse --git-dir)" 2>/dev/null && pwd -P)
  GIT_COMMON=$(cd "$(git rev-parse --git-common-dir)" 2>/dev/null && pwd -P)
  ```
  
  Bu, hangi menüyü göstereceğini ve temizlemenin nasıl çalışacağını belirler:
  
  | Durum | Menü | Temizleme |
  |-------|------|-----------|
  | `GIT_DIR == GIT_COMMON` (normal repo) | Standart 4 seçenek | Temizlenecek worktree yok |
  | `GIT_DIR != GIT_COMMON`, adlandırılmış şube | Standart 4 seçenek | Köken tabanlı (bkz. 6. Adım) |
  | `GIT_DIR != GIT_COMMON`, detached HEAD | Azaltılmış 3 seçenek (merge yok) | Temizleme yok (harici olarak yönetilen) |
  
  ### 3. Adım: Temel Şubeyi Belirle
  
  ```bash
  # Ortak temel şubeleri dene
  git merge-base HEAD main 2>/dev/null || git merge-base HEAD master 2>/dev/null
  ```
  
  Veya sor: "Bu şube main'den ayrıldı - doğru mu?"
  
  ### 4. Adım: Seçenekleri Sun
  
  **Normal repo ve adlandırılmış şube worktree — tam olarak bu 4 seçeneği sun:**
  
  ```
  Uygulama tamamlandı. Ne yapmak istiyorsun?
  
  1. <base-branch> adına yerel olarak birleştir
  2. Push yap ve Pull Request oluştur
  3. Şubeyi olduğu gibi tut (bunu daha sonra halledeceğim)
  4. Bu işi sil
  
  Hangi seçenek?
  ```
  
  **Detached HEAD — tam olarak bu 3 seçeneği sun:**
  
  ```
  Uygulama tamamlandı. Detached HEAD'desin (harici olarak yönetilen çalışma alanı).
  
  1. Yeni şube olarak push yap ve Pull Request oluştur
  2. Olduğu gibi tut (bunu daha sonra halledeceğim)
  3. Bu işi sil
  
  Hangi seçenek?
  ```
  
  **Açıklama ekleme** - seçenekleri kısa tut.
  
  ### 5. Adım: Seçimi Gerçekleştir
  
  #### Seçenek 1: Yerel Olarak Birleştir
  
  ```bash
  # CWD güvenliği için ana repo root'u al
  MAIN_ROOT=$(git -C "$(git rev-parse --git-common-dir)/.." rev-parse --show-toplevel)
  cd "$MAIN_ROOT"
  
  # Önce birleştir — herhangi bir şeyi kaldırmadan önce başarıyı doğrula
  git checkout <base-branch>
  git pull
  git merge <feature-branch>
  
  # Birleştirme sonucunda testleri doğrula
  <test command>
  
  # Sadece merge başarılı olduktan sonra: worktree'i temizle (6. Adım), sonra şubeyi sil
  ```
  
  Sonra: Worktree'i temizle (6. Adım), sonra şubeyi sil:
  
  ```bash
  git branch -d <feature-branch>
  ```
  
  #### Seçenek 2: Push Yap ve PR Oluştur
  
  ```bash
  # Şubeyi push yap
  git push -u origin <feature-branch>
  ```
  
  **Worktree'i temizleme** — kullanıcının PR geri bildirimine göre yinelemesi için buna ihtiyacı var.
  
  #### Seçenek 3: Olduğu Gibi Tut
  
  Rapor et: "Şube <name> tutuldu. Worktree <path> konumunda korundu."
  
  **Worktree'i temizleme.**
  
  #### Seçenek 4: Sil
  
  **Önce onayla:**
  ```
  Bunlar kalıcı olarak silinecek:
  - Şube <name>
  - Tüm commits: <commit-list>
  - Worktree <path> konumunda
  
  Onaylamak için 'sil' yazın.
  ```
  
  Tam onayı bekle.
  
  Onaylanırsa:
  ```bash
  MAIN_ROOT=$(git -C "$(git rev-parse --git-common-dir)/.." rev-parse --show-toplevel)
  cd "$MAIN_ROOT"
  ```
  
  Sonra: Worktree'i temizle (6. Adım), sonra şubeyi zorla sil:
  ```bash
  git branch -D <feature-branch>
  ```
  
  ### 6. Adım: Çalışma Alanını Temizle
  
  **Sadece Seçenek 1 ve 4 için çalışır.** Seçenek 2 ve 3 her zaman worktree'i korur.
  
  ```bash
  GIT_DIR=$(cd "$(git rev-parse --git-dir)" 2>/dev/null && pwd -P)
  GIT_COMMON=$(cd "$(git rev-parse --git-common-dir)" 2>/dev/null && pwd -P)
  WORKTREE_PATH=$(git rev-parse --show-toplevel)
  ```
  
  **Eğer `GIT_DIR == GIT_COMMON`:** Normal repo, temizlenecek worktree yok. Bitti.
  
  **Worktree yolu `.worktrees/` veya `worktrees/` altındaysa:** Superpowers bu worktree'i oluşturdu — temizlemeyi sahipleniyoruz.
  
  ```bash
  MAIN_ROOT=$(git -C "$(git rev-parse --git-common-dir)/.." rev-parse --show-toplevel)
  cd "$MAIN_ROOT"
  git worktree remove "$WORKTREE_PATH"
  git worktree prune  # Kendi kendini iyileştir: eski kayıtları temizle
  ```
  
  **Aksi durumda:** Host ortamı (harness) bu çalışma alanının sahibi. Kaldırma. Platform bir çalışma alanı çıkış aracı sağlıyorsa, bunu kullan. Aksi takdirde, çalışma alanını yerinde bırak.
  
  ## Hızlı Referans
  
  | Seçenek | Birleştir | Push | Worktree'i Koru | Şubeyi Temizle |
  |---------|-----------|------|-----------------|----------------|
  | 1. Yerel olarak birleştir | evet | - | - | evet |
  | 2. PR oluştur | - | evet | evet | - |
  | 3. Olduğu gibi tut | - | - | evet | - |
  | 4. Sil | - | - | - | evet (zorla) |
  
  ## Yaygın Hatalar
  
  **Test doğrulamasını atlamak**
  - **Problem:** Bozuk kod birleştir, başarısız PR oluştur
  - **Fix:** Seçenekleri sunmadan önce daima testleri doğrula
  
  **Açık uçlu sorular**
  - **Problem:** "Sonra ne yapmalıyım?" muğlak
  - **Fix:** Tam olarak 4 yapılandırılmış seçenek sun (detached HEAD için 3)
  
  **Seçenek 2 için worktree'i temizlemek**
  - **Problem:** Kullanıcının PR yinelemesi için ihtiyaç duyduğu worktree'i kaldır
  - **Fix:** Sadece Seçenek 1 ve 4 için temizle
  
  **Worktree kaldırmadan önce şubeyi silmek**
  - **Problem:** `git branch -d` worktree hala şubeye referans verdiği için başarısız
  - **Fix:** Önce birleştir, worktree'i kaldır, sonra şubeyi sil
  
  **Worktree içinden git worktree remove çalıştırmak**
  - **Problem:** Kaldırılmakta olan worktree CWD'de olduğunda komut sessizce başarısız
  - **Fix:** Daima `git worktree remove` öncesinde ana repo root'a `cd` yap
  
  **Harness'e ait worktree'leri temizlemek**
  - **Problem:** Harness'in oluşturduğu bir worktree'i kaldırmak phantom duruma neden ol
  - **Fix:** Sadece `.worktrees/` veya `worktrees/` altındaki worktree'leri temizle
  
  **Discard için onay yok**
  - **Problem:** Yanlışlıkla işi sil
  - **Fix:** Yazılı "sil" onayı iste
  
  ## Uyarı İşaretleri
  
  **Asla:**
  - Başarısız testlerle devam etme
  - Sonuçta testleri doğrulamadan merge etme
  - Onay almadan işi silme
  - Açık istek olmadan force-push yapma
  - Merge başarısını onaylamadan worktree'i silme
  - Oluşturmadığın worktree'leri temizleme (köken kontrolü)
  - Worktree içinden `git worktree remove` çalıştırma
  
  **Her Zaman:**
  - Seçenekleri sunmadan önce testleri doğrula
  - Menüyü sunmadan önce ortamı algıla
  - Tam olarak 4 seçenek sun (detached HEAD için 3)
  - Seçenek 4 için yazılı onay al
  - Sadece Seçenek 1 & 4 için worktree'i temizle
  - Worktree kaldırmadan önce ana repo root'a `cd` yap
  - Kaldırıldıktan sonra `git worktree prune` çalıştır
---

# Finishing a Development Branch

## Overview

Guide completion of development work by presenting clear options and handling chosen workflow.

**Core principle:** Verify tests → Detect environment → Present options → Execute choice → Clean up.

**Announce at start:** "I'm using the finishing-a-development-branch skill to complete this work."

## The Process

### Step 1: Verify Tests

**Before presenting options, verify tests pass:**

```bash
# Run project's test suite
npm test / cargo test / pytest / go test ./...
```

**If tests fail:**
```
Tests failing (<N> failures). Must fix before completing:

[Show failures]

Cannot proceed with merge/PR until tests pass.
```

Stop. Don't proceed to Step 2.

**If tests pass:** Continue to Step 2.

### Step 2: Detect Environment

**Determine workspace state before presenting options:**

```bash
GIT_DIR=$(cd "$(git rev-parse --git-dir)" 2>/dev/null && pwd -P)
GIT_COMMON=$(cd "$(git rev-parse --git-common-dir)" 2>/dev/null && pwd -P)
```

This determines which menu to show and how cleanup works:

| State | Menu | Cleanup |
|-------|------|---------|
| `GIT_DIR == GIT_COMMON` (normal repo) | Standard 4 options | No worktree to clean up |
| `GIT_DIR != GIT_COMMON`, named branch | Standard 4 options | Provenance-based (see Step 6) |
| `GIT_DIR != GIT_COMMON`, detached HEAD | Reduced 3 options (no merge) | No cleanup (externally managed) |

### Step 3: Determine Base Branch

```bash
# Try common base branches
git merge-base HEAD main 2>/dev/null || git merge-base HEAD master 2>/dev/null
```

Or ask: "This branch split from main - is that correct?"

### Step 4: Present Options

**Normal repo and named-branch worktree — present exactly these 4 options:**

```
Implementation complete. What would you like to do?

1. Merge back to <base-branch> locally
2. Push and create a Pull Request
3. Keep the branch as-is (I'll handle it later)
4. Discard this work

Which option?
```

**Detached HEAD — present exactly these 3 options:**

```
Implementation complete. You're on a detached HEAD (externally managed workspace).

1. Push as new branch and create a Pull Request
2. Keep as-is (I'll handle it later)
3. Discard this work

Which option?
```

**Don't add explanation** - keep options concise.

### Step 5: Execute Choice

#### Option 1: Merge Locally

```bash
# Get main repo root for CWD safety
MAIN_ROOT=$(git -C "$(git rev-parse --git-common-dir)/.." rev-parse --show-toplevel)
cd "$MAIN_ROOT"

# Merge first — verify success before removing anything
git checkout <base-branch>
git pull
git merge <feature-branch>

# Verify tests on merged result
<test command>

# Only after merge succeeds: cleanup worktree (Step 6), then delete branch
```

Then: Cleanup worktree (Step 6), then delete branch:

```bash
git branch -d <feature-branch>
```

#### Option 2: Push and Create PR

```bash
# Push branch
git push -u origin <feature-branch>
```

**Do NOT clean up worktree** — user needs it alive to iterate on PR feedback.

#### Option 3: Keep As-Is

Report: "Keeping branch <name>. Worktree preserved at <path>."

**Don't cleanup worktree.**

#### Option 4: Discard

**Confirm first:**
```
This will permanently delete:
- Branch <name>
- All commits: <commit-list>
- Worktree at <path>

Type 'discard' to confirm.
```

Wait for exact confirmation.

If confirmed:
```bash
MAIN_ROOT=$(git -C "$(git rev-parse --git-common-dir)/.." rev-parse --show-toplevel)
cd "$MAIN_ROOT"
```

Then: Cleanup worktree (Step 6), then force-delete branch:
```bash
git branch -D <feature-branch>
```

### Step 6: Cleanup Workspace

**Only runs for Options 1 and 4.** Options 2 and 3 always preserve the worktree.

```bash
GIT_DIR=$(cd "$(git rev-parse --git-dir)" 2>/dev/null && pwd -P)
GIT_COMMON=$(cd "$(git rev-parse --git-common-dir)" 2>/dev/null && pwd -P)
WORKTREE_PATH=$(git rev-parse --show-toplevel)
```

**If `GIT_DIR == GIT_COMMON`:** Normal repo, no worktree to clean up. Done.

**If worktree path is under `.worktrees/` or `worktrees/`:** Superpowers created this worktree — we own cleanup.

```bash
MAIN_ROOT=$(git -C "$(git rev-parse --git-common-dir)/.." rev-parse --show-toplevel)
cd "$MAIN_ROOT"
git worktree remove "$WORKTREE_PATH"
git worktree prune  # Self-healing: clean up any stale registrations
```

**Otherwise:** The host environment (harness) owns this workspace. Do NOT remove it. If your platform provides a workspace-exit tool, use it. Otherwise, leave the workspace in place.

## Quick Reference

| Option | Merge | Push | Keep Worktree | Cleanup Branch |
|--------|-------|------|---------------|----------------|
| 1. Merge locally | yes | - | - | yes |
| 2. Create PR | - | yes | yes | - |
| 3. Keep as-is | - | - | yes | - |
| 4. Discard | - | - | - | yes (force) |

## Common Mistakes

**Skipping test verification**
- **Problem:** Merge broken code, create failing PR
- **Fix:** Always verify tests before offering options

**Open-ended questions**
- **Problem:** "What should I do next?" is ambiguous
- **Fix:** Present exactly 4 structured options (or 3 for detached HEAD)

**Cleaning up worktree for Option 2**
- **Problem:** Remove worktree user needs for PR iteration
- **Fix:** Only cleanup for Options 1 and 4

**Deleting branch before removing worktree**
- **Problem:** `git branch -d` fails because worktree still references the branch
- **Fix:** Merge first, remove worktree, then delete branch

**Running git worktree remove from inside the worktree**
- **Problem:** Command fails silently when CWD is inside the worktree being removed
- **Fix:** Always `cd` to main repo root before `git worktree remove`

**Cleaning up harness-owned worktrees**
- **Problem:** Removing a worktree the harness created causes phantom state
- **Fix:** Only clean up worktrees under `.worktrees/` or `worktrees/`

**No confirmation for discard**
- **Problem:** Accidentally delete work
- **Fix:** Require typed "discard" confirmation

## Red Flags

**Never:**
- Proceed with failing tests
- Merge without verifying tests on result
- Delete work without confirmation
- Force-push without explicit request
- Remove a worktree before confirming merge success
- Clean up worktrees you didn't create (provenance check)
- Run `git worktree remove` from inside the worktree

**Always:**
- Verify tests before offering options
- Detect environment before presenting menu
- Present exactly 4 options (or 3 for detached HEAD)
- Get typed confirmation for Option 4
- Clean up worktree for Options 1 & 4 only
- `cd` to main repo root before worktree removal
- Run `git worktree prune` after removal
