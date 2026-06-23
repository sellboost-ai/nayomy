---
name: "git-worktree-manager"
description_en: "Run parallel feature work safely with Git worktrees. Standardizes branch isolation, port allocation, environment sync, and cleanup so each worktree behaves like an independent local app. Optimized for multi-agent workflows where each agent or terminal session owns one worktree. Use when running multiple feature branches simultaneously, isolating experimental work, or coordinating multi-agent devel"
description_tr: "Git worktrees ile paralel feature geliştirmesini güvenli şekilde yürütün. Branch izolasyonu, port tahsisi, environment senkronizasyonu ve temizlik işlemlerini standartlaştırarak her worktree'yi bağımsız bir lokal uygulama gibi davrandırır. Multi-agent workflow'lar için optimize edilmiştir; her agent ya da terminal oturumu bir worktree'ye sahiptir. Birden fazla feature branch'i aynı anda çalıştırırken, deneysel çalışmaları izole ederken ya da multi-agent geliştirmeyi koordine ederken kullanın."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 18759
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/git-worktree-manager/SKILL.md"
path: ".gemini/skills/git-worktree-manager/SKILL.md"
is_collection: false
body_length: 6606
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Git Worktree Manager
  
  **Tier:** POWERFUL  
  **Category:** Engineering  
  **Domain:** Parallel Development & Branch Isolation
  
  ## Genel Bakış
  
  Bu skill'i Git worktree'leri kullanarak paralel özellik geliştirmesini güvenli şekilde çalıştırmak için kullanın. Branch izolasyonu, port tahsisi, ortam senkronizasyonu ve temizliği standardize eder, böylece her worktree başka bir branch'e müdahale etmeden bağımsız bir yerel uygulama gibi davranır.
  
  Bu skill, her ajanın veya terminal oturumunun bir worktree'ye sahip olduğu çoklu ajan iş akışları için optimize edilmiştir.
  
  ## Temel Yetenekler
  
  - Belirleyici adlandırmaya sahip yeni veya mevcut branch'lerden worktree'ler oluşturma
  - Worktree başına çakışmayan port'ları otomatik tahsis etme ve atamaları kalıcı hale getirme
  - Yerel ortam dosyalarını (`.env*`) ana repo'dan yeni worktree'ye kopyalama
  - Lockfile tespitine bağlı olarak bağımlılıkları isteğe bağlı olarak kurma
  - Temizlikten önce eski worktree'leri ve kaydedilmemiş değişiklikleri tespit etme
  - Birleştirilmiş branch'leri tanımlama ve eski worktree'leri güvenli şekilde kaldırma
  
  ## Ne Zaman Kullanılır
  
  - 2+ eş zamanlı branch'i yerel olarak açık tutmanız gerektiğinde
  - Feature, hotfix ve PR doğrulaması için izole dev sunucuları istiyorsanız
  - Bir branch'i paylaşmaması gereken birden fazla ajanla çalışırken
  - Mevcut branch'iniz bloke olmuşsa ama hemen hızlı bir düzeltme göndermek istiyorsanız
  - Ad-hoc `rm -rf` işlemleri yerine tekrarlanabilir temizlik istiyorsanız
  
  ## Temel İş Akışları
  
  ### 1. Tamamen Hazırlanmış Bir Worktree Oluşturma
  
  1. Branch adı ve worktree adı seçin.
  2. Manager script'ini çalıştırın (eksik branch'i oluşturur).
  3. Oluşturulan port haritasını inceleyin.
  4. Tahsis edilen port'ları kullanarak uygulamayı başlatın.
  
  ```bash
  python scripts/worktree_manager.py \
    --repo . \
    --branch feature/new-auth \
    --name wt-auth \
    --base-branch main \
    --install-deps \
    --format text
  ```
  
  JSON otomasyon girdisini kullanırsanız:
  
  ```bash
  cat config.json | python scripts/worktree_manager.py --format json
  # veya
  python scripts/worktree_manager.py --input config.json --format json
  ```
  
  ### 2. Paralel Oturumları Çalıştırma
  
  Önerilen kural:
  
  - Ana repo: integrasyon branch'i (`main`/`develop`) varsayılan port'ta
  - Worktree A: feature branch + offset port'lar
  - Worktree B: hotfix branch + sonraki offset
  
  Her worktree, tahsis edilen port'ları içeren `.worktree-ports.json` dosyasına sahiptir.
  
  ### 3. Güvenlik Kontrolleriyle Temizlik
  
  1. Tüm worktree'leri ve eski yaşlarını tarayın.
  2. Kirli ağaçları ve branch birleştirme durumunu inceleyin.
  3. Yalnızca birleştirilmiş ve temiz worktree'leri kaldırın veya açıkça zorla kaldırın.
  
  ```bash
  python scripts/worktree_cleanup.py --repo . --stale-days 14 --format text
  python scripts/worktree_cleanup.py --repo . --remove-merged --format text
  ```
  
  ### 4. Docker Compose Deseni
  
  Tahsis edilen port'lardan eşlenen worktree başına geçersiz kılma dosyalarını kullanın. Script deterministik bir port haritası çıkarır; `docker-compose.worktree.yml` dosyasına uygulayın.
  
  Somut şablonlar için [docker-compose-patterns.md](https://github.com/alirezarezvani/claude-skills/blob/HEAD/references/docker-compose-patterns.md) dosyasını görmek.
  
  ### 5. Port Tahsis Stratejisi
  
  Varsayılan strateji çakışma kontrolleriyle `base + (index * stride)` olur:
  
  - App: `3000`
  - Postgres: `5432`
  - Redis: `6379`
  - Stride: `10`
  
  Tam strateji ve edge case'ler için [port-allocation-strategy.md](https://github.com/alirezarezvani/claude-skills/blob/HEAD/references/port-allocation-strategy.md) dosyasını görmek.
  
  ## Script Arayüzleri
  
  - `python scripts/worktree_manager.py --help`
    - Worktree'leri oluşturma/listeleme
    - Port'ları tahsis etme/kalıcı hale getirme
    - `.env*` dosyalarını kopyalama
    - İsteğe bağlı bağımlılık kurulumu
  - `python scripts/worktree_cleanup.py --help`
    - Yaşa göre eski tespit etme
    - Kirli durum tespit etme
    - Birleştirilmiş branch tespit etme
    - İsteğe bağlı güvenli kaldırma
  
  Her iki tool da otomasyon pipeline'ları için stdin JSON ve `--input` dosya modunu destekler.
  
  ## Yaygın Tuzaklar
  
  1. Worktree'leri ana repo dizini içinde oluşturma
  2. Tüm branch'ler arasında `localhost:3000` yeniden kullanma
  3. İzole feature branch'ler arasında bir veritabanı URL'sini paylaşma
  4. Kaydedilmemiş değişiklikleri olan bir worktree'yi kaldırma
  5. Branch silindikten sonra eski metadata'yı budamayı unutma
  6. Hedef branch'e karşı kontrol etmeden birleştirme durumunu varsayma
  
  ## En İyi Uygulamalar
  
  1. Bir branch başına bir worktree, bir ajan başına bir worktree.
  2. Worktree'leri kısa ömürlü tutun; birleştirmeden sonra kaldırın.
  3. Belirleyici bir adlandırma deseni kullanın (`wt-<topic>`).
  4. Port eşlemelerini bellekte veya terminal notlarında değil, dosyada kalıcı hale getirin.
  5. Aktif repo'larda haftada bir temizlik taraması çalıştırın.
  6. Makine iş akışları için `--format json` ve insan incelemesi için `--format text` kullanın.
  7. Değişiklikler kasıtlı olarak atılmadığı sürece kirli worktree'leri asla zorla kaldırmayın.
  
  ## Doğrulama Kontrol Listesi
  
  Kurulumun tamamlandığını iddia etmeden önce:
  
  1. `git worktree list` beklenen yolu + branch'i gösterir.
  2. `.worktree-ports.json` mevcuttur ve benzersiz port'lar içerir.
  3. `.env` dosyaları başarıyla kopyalanmıştır (kaynak repo'da mevcutsa).
  4. Bağımlılık kurulum komutu çıkış kodu `0` ile çıkar (etkinse).
  5. Temizlik taraması istenmeyen eski kirli ağaçlar raporlamaz.
  
  ## Referanslar
  
  - [port-allocation-strategy.md](https://github.com/alirezarezvani/claude-skills/blob/HEAD/references/port-allocation-strategy.md)
  - [docker-compose-patterns.md](https://github.com/alirezarezvani/claude-skills/blob/HEAD/references/docker-compose-patterns.md)
  - [README.md](https://github.com/alirezarezvani/claude-skills/blob/HEAD/README.md) hızlı başlangıç ve kurulum detayları için
  
  ## Karar Matrisi
  
  Yeni bir worktree oluşturmadan önce bu hızlı seçiciyi kullanın:
  
  - İzole bağımlılıklar ve server port'ları gerekli -> yeni worktree oluştur
  - Yalnızca hızlı yerel diff incelemesi gerekli -> mevcut ağaçta kal
  - Feature branch kirli iken hotfix gerekli -> ayrılmış hotfix worktree oluştur
  - Bug triyaj için ephemeral reproduksiyon branch gerekli -> geçici worktree oluştur ve aynı gün temizle
  
  ## Operasyonel Kontrol Listesi
  
  ### Oluşturmadan Önce
  
  1. Ana repo'nun temiz temeli veya kasıtlı WIP commit'leri olduğunu doğrulayın.
  2. Hedef branch adlandırma kuralını doğrulayın.
  3. Gerekli temel branch'in (`main`/`develop`) mevcut olduğunu doğrulayın.
  4. Hiçbir ayrılmış yerel port'un repo dışı hizmetler tarafından işgal edilmediğini doğrulayın.
  
  ### Oluşturmadan Sonra
  
  1. `git status` branch'inin beklenen branch'le eşleştiğini doğrulayın.
  2. `.worktree-ports.json` dosyasının mevcut olduğunu doğrulayın.
  3. Uygulamanın tahsis edilen app port'ta çalıştığını doğrulayın.
  4. DB ve cache endpoint'lerinin izole port'ları hedeflediğini doğrulayın.
  
  ### Kaldırmadan Önce
  
  1. Branch'in upstream'e sahip olduğunu ve amaçlandığında birleştirildiğini doğrulayın.
  2. Kaydedilmemiş dosya kalmaması doğrulayın.
  3. Bu worktree yoluna bağımlı çalışan container'lar/process'ler olmadığını doğrulayın.
  
  ## CI ve Takım Entegrasyonu
  
  - Görev ID'si ile eşlenen worktree yolu adlandırması kullanın (`wt-1234-auth`).
  - Yanlış pencereye commit'leri önlemek için worktree yolunu terminal başlığına ekleyin.
  - Otomatik kurulumda, oluşturma metadata'sını CI artifact'larında/log'larında kalıcı hale getirin.
  - Zamanlanmış işlerde temizlik raporu tetikleyin ve özeti takım kanalına gönder.
  
  ## Başarısızlık Kurtarması
  
  - `git worktree add` mevcut yol nedeniyle başarısız olursa: yolu inceleyin, üzerine yazma.
  - Bağımlılık kurulumu başarısız olursa: worktree oluşturulmuş olarak tutun, durumu işaretleyin ve manuel kurtarma devam ettirin.
  - Ortam kopyası başarısız olursa: uyarı ile devam edin ve açık eksik dosya listesi sağlayın.
  - Port tahsisi harici hizmetle çakışırsa: ayarlanmış temel port'larla yeniden çalıştırın.
---

# Git Worktree Manager

**Tier:** POWERFUL  
**Category:** Engineering  
**Domain:** Parallel Development & Branch Isolation

## Overview

Use this skill to run parallel feature work safely with Git worktrees. It standardizes branch isolation, port allocation, environment sync, and cleanup so each worktree behaves like an independent local app without stepping on another branch.

This skill is optimized for multi-agent workflows where each agent or terminal session owns one worktree.

## Core Capabilities

- Create worktrees from new or existing branches with deterministic naming
- Auto-allocate non-conflicting ports per worktree and persist assignments
- Copy local environment files (`.env*`) from main repo to new worktree
- Optionally install dependencies based on lockfile detection
- Detect stale worktrees and uncommitted changes before cleanup
- Identify merged branches and safely remove outdated worktrees

## When to Use

- You need 2+ concurrent branches open locally
- You want isolated dev servers for feature, hotfix, and PR validation
- You are working with multiple agents that must not share a branch
- Your current branch is blocked but you need to ship a quick fix now
- You want repeatable cleanup instead of ad-hoc `rm -rf` operations

## Key Workflows

### 1. Create a Fully-Prepared Worktree

1. Pick a branch name and worktree name.
2. Run the manager script (creates branch if missing).
3. Review generated port map.
4. Start app using allocated ports.

```bash
python scripts/worktree_manager.py \
  --repo . \
  --branch feature/new-auth \
  --name wt-auth \
  --base-branch main \
  --install-deps \
  --format text
```

If you use JSON automation input:

```bash
cat config.json | python scripts/worktree_manager.py --format json
# or
python scripts/worktree_manager.py --input config.json --format json
```

### 2. Run Parallel Sessions

Recommended convention:

- Main repo: integration branch (`main`/`develop`) on default port
- Worktree A: feature branch + offset ports
- Worktree B: hotfix branch + next offset

Each worktree contains `.worktree-ports.json` with assigned ports.

### 3. Cleanup with Safety Checks

1. Scan all worktrees and stale age.
2. Inspect dirty trees and branch merge status.
3. Remove only merged + clean worktrees, or force explicitly.

```bash
python scripts/worktree_cleanup.py --repo . --stale-days 14 --format text
python scripts/worktree_cleanup.py --repo . --remove-merged --format text
```

### 4. Docker Compose Pattern

Use per-worktree override files mapped from allocated ports. The script outputs a deterministic port map; apply it to `docker-compose.worktree.yml`.

See [docker-compose-patterns.md](https://github.com/alirezarezvani/claude-skills/blob/HEAD/references/docker-compose-patterns.md) for concrete templates.

### 5. Port Allocation Strategy

Default strategy is `base + (index * stride)` with collision checks:

- App: `3000`
- Postgres: `5432`
- Redis: `6379`
- Stride: `10`

See [port-allocation-strategy.md](https://github.com/alirezarezvani/claude-skills/blob/HEAD/references/port-allocation-strategy.md) for the full strategy and edge cases.

## Script Interfaces

- `python scripts/worktree_manager.py --help`
  - Create/list worktrees
  - Allocate/persist ports
  - Copy `.env*` files
  - Optional dependency installation
- `python scripts/worktree_cleanup.py --help`
  - Stale detection by age
  - Dirty-state detection
  - Merged-branch detection
  - Optional safe removal

Both tools support stdin JSON and `--input` file mode for automation pipelines.

## Common Pitfalls

1. Creating worktrees inside the main repo directory
2. Reusing `localhost:3000` across all branches
3. Sharing one database URL across isolated feature branches
4. Removing a worktree with uncommitted changes
5. Forgetting to prune old metadata after branch deletion
6. Assuming merged status without checking against the target branch

## Best Practices

1. One branch per worktree, one agent per worktree.
2. Keep worktrees short-lived; remove after merge.
3. Use a deterministic naming pattern (`wt-<topic>`).
4. Persist port mappings in file, not memory or terminal notes.
5. Run cleanup scan weekly in active repos.
6. Use `--format json` for machine flows and `--format text` for human review.
7. Never force-remove dirty worktrees unless changes are intentionally discarded.

## Validation Checklist

Before claiming setup complete:

1. `git worktree list` shows expected path + branch.
2. `.worktree-ports.json` exists and contains unique ports.
3. `.env` files copied successfully (if present in source repo).
4. Dependency install command exits with code `0` (if enabled).
5. Cleanup scan reports no unintended stale dirty trees.

## References

- [port-allocation-strategy.md](https://github.com/alirezarezvani/claude-skills/blob/HEAD/references/port-allocation-strategy.md)
- [docker-compose-patterns.md](https://github.com/alirezarezvani/claude-skills/blob/HEAD/references/docker-compose-patterns.md)
- [README.md](https://github.com/alirezarezvani/claude-skills/blob/HEAD/README.md) for quick start and installation details

## Decision Matrix

Use this quick selector before creating a new worktree:

- Need isolated dependencies and server ports -> create a new worktree
- Need only a quick local diff review -> stay on current tree
- Need hotfix while feature branch is dirty -> create dedicated hotfix worktree
- Need ephemeral reproduction branch for bug triage -> create temporary worktree and cleanup same day

## Operational Checklist

### Before Creation

1. Confirm main repo has clean baseline or intentional WIP commits.
2. Confirm target branch naming convention.
3. Confirm required base branch exists (`main`/`develop`).
4. Confirm no reserved local ports are already occupied by non-repo services.

### After Creation

1. Verify `git status` branch matches expected branch.
2. Verify `.worktree-ports.json` exists.
3. Verify app boots on allocated app port.
4. Verify DB and cache endpoints target isolated ports.

### Before Removal

1. Verify branch has upstream and is merged when intended.
2. Verify no uncommitted files remain.
3. Verify no running containers/processes depend on this worktree path.

## CI and Team Integration

- Use worktree path naming that maps to task ID (`wt-1234-auth`).
- Include the worktree path in terminal title to avoid wrong-window commits.
- In automated setups, persist creation metadata in CI artifacts/logs.
- Trigger cleanup report in scheduled jobs and post summary to team channel.

## Failure Recovery

- If `git worktree add` fails due to existing path: inspect path, do not overwrite.
- If dependency install fails: keep worktree created, mark status and continue manual recovery.
- If env copy fails: continue with warning and explicit missing file list.
- If port allocation collides with external service: rerun with adjusted base ports.
