---
name: "worktree-manager"
description_en: "Create, manage, and cleanup git worktrees with Claude Code agents across all projects. USE THIS SKILL when user says \"create worktree\", \"spin up worktrees\", \"new worktree for X\", \"worktree status\", \"cleanup worktrees\", \"sync worktrees\", or wants parallel development branches. Also use when creating PRs from a worktree branch (to update registry with PR number). Handles worktree creation, dependenc"
category: "Development"
repo: "Wirasm/worktree-manager-skill"
stars: 131
url: "https://github.com/Wirasm/worktree-manager-skill/blob/HEAD/.claude/skills/SKILL.md"
path: ".claude/skills/SKILL.md"
is_collection: false
body_length: 21880
has_scripts: true
has_references: false
has_examples: false
related_files: ["config.json"]
body_tr: |-
  # Global Worktree Manager

  Tüm projelerde git worktrees kullanarak paralel geliştirmeyi yönetin ve Claude Code ajanlarıyla çalışın. Her worktree, farklı bir dalda yer alan ve merkezi olarak `~/tmp/worktrees/` konumunda depolanan izole bir repo kopyasıdır.

  **ÖNEMLİ**: Sen (Claude) tüm işlemleri standart araçlar (jq, git, bash) kullanarak manuel olarak gerçekleştirebilirsin. Scriptler yardımcıdır, gereklilik değildir. Eğer bir script başarısız olursa, bu dokümanda açıklanan manuel işlemlere geri dön.

  ## Bu Beceri Ne Zaman Aktivize Olur

  **Tetikleme ifadeleri:**
  - "X, Y, Z için worktrees oluştur"
  - "A, B, C özellikleri için 3 worktree oluştur"
  - "feature/auth için yeni worktree"
  - "worktreelerim durumu nedir?"
  - "tüm worktrees göster" / "bu projenin worktreeslerini göster"
  - "birleştirilen worktrees temizle"
  - "auth worktreesini temizle"
  - "X worktreesinde ajan başlat"
  - "worktrees senkronize et" / "worktree registry senkronize et"
  - "PR oluştur" (worktree içindeyken - registry'yi PR numarasıyla güncelle)

  ---

  ## Dosya Konumları

  | Dosya | Amaç |
  |------|---------|
  | `~/.claude/worktree-registry.json` | **Global registry** - tüm projelerdeki tüm worktrees'i izler |
  | `~/.claude/skills/worktree-manager/config.json` | **Beceri konfigürasyonu** - terminal, shell, port aralığı ayarları |
  | `~/.claude/skills/worktree-manager/scripts/` | **Yardımcı scriptler** - isteğe bağlı, her şeyi manuel yapabilirsin |
  | `~/tmp/worktrees/` | **Worktree depolaması** - tüm worktrees burada yaşar |
  | `.claude/worktree.json` (proje başına) | **Proje konfigürasyonu** - isteğe bağlı özel ayarlar |

  ---

  ## Temel Konseptler

  ### Merkezi Worktree Depolaması
  Tüm worktrees `~/tmp/worktrees/<project-name>/<branch-slug>/` altında yaşar

  ```
  ~/tmp/worktrees/
  ├── obsidian-ai-agent/
  │   ├── feature-auth/           # dal: feature/auth
  │   ├── feature-payments/       # dal: feature/payments
  │   └── fix-login-bug/          # dal: fix/login-bug
  └── another-project/
      └── feature-dark-mode/
  ```

  ### Branch Slug Konvansiyonu
  Dal adları dosya sistemi güvenliği için `/` yerine `-` konularak slug haline getirilir:
  - `feature/auth` → `feature-auth`
  - `fix/login-bug` → `fix-login-bug`
  - `feat/user-profile` → `feat-user-profile`

  **Manuel slug haline getir:** `echo "feature/auth" | tr '/' '-'` → `feature-auth`

  ### Port Tahsis Kuralları
  - **Global pool**: 8100-8199 (toplam 100 port)
  - **Worktree başına**: 2 port tahsis edilir (API + frontend desenleri için)
  - **Global olarak benzersiz**: Portlar projelerde çatışmaları önlemek için global olarak izlenir
  - **Kullanmadan önce kontrol et**: Portu sistem tarafından kullanılmadığından emin ol: `lsof -i :<port>`

  ---

  ## Global Registry

  ### Konum
  `~/.claude/worktree-registry.json`

  ### Şema
  ```json
  {
    "worktrees": [
      {
        "id": "unique-uuid",
        "project": "obsidian-ai-agent",
        "repoPath": "/Users/rasmus/Projects/obsidian-ai-agent",
        "branch": "feature/auth",
        "branchSlug": "feature-auth",
        "worktreePath": "/Users/rasmus/tmp/worktrees/obsidian-ai-agent/feature-auth",
        "ports": [8100, 8101],
        "createdAt": "2025-12-04T10:00:00Z",
        "validatedAt": "2025-12-04T10:02:00Z",
        "agentLaunchedAt": "2025-12-04T10:03:00Z",
        "task": "OAuth girişini uygula",
        "prNumber": null,
        "status": "active"
      }
    ],
    "portPool": {
      "start": 8100,
      "end": 8199,
      "allocated": [8100, 8101]
    }
  }
  ```

  ### Alan Açıklamaları

  **Worktree girdisi alanları:**
  | Alan | Tür | Açıklama |
  |------|-----|---------|
  | `id` | string | Benzersiz tanımlayıcı (UUID) |
  | `project` | string | Proje adı (git remote veya dizinden) |
  | `repoPath` | string | Orijinal repository'ye mutlak yol |
  | `branch` | string | Tam dal adı (ör. `feature/auth`) |
  | `branchSlug` | string | Dosya sistemi güvenli adı (ör. `feature-auth`) |
  | `worktreePath` | string | Worktree'ye mutlak yol |
  | `ports` | number[] | Tahsis edilen port numaraları (genellikle 2) |
  | `createdAt` | string | ISO 8601 zaman damgası |
  | `validatedAt` | string\|null | Doğrulama ne zaman başarılı oldu |
  | `agentLaunchedAt` | string\|null | Ajan ne zaman başlatıldı |
  | `task` | string\|null | Ajan için görev açıklaması |
  | `prNumber` | number\|null | İlişkili PR numarası varsa |
  | `status` | string | `active`, `orphaned`, veya `merged` |

  **Port pool alanları:**
  | Alan | Tür | Açıklama |
  |------|-----|---------|
  | `start` | number | Pool'daki ilk port (varsayılan: 8100) |
  | `end` | number | Pool'daki son port (varsayılan: 8199) |
  | `allocated` | number[] | Şu anda tahsis edilen portlar |

  ### Manuel Registry İşlemleri

  **Tüm registry'yi oku:**
  ```bash
  cat ~/.claude/worktree-registry.json | jq '.'
  ```

  **Tüm worktrees'i listele:**
  ```bash
  cat ~/.claude/worktree-registry.json | jq '.worktrees[]'
  ```

  **Belirli proje için worktrees'i listele:**
  ```bash
  cat ~/.claude/worktree-registry.json | jq '.worktrees[] | select(.project == "my-project")'
  ```

  **Tahsis edilen portları al:**
  ```bash
  cat ~/.claude/worktree-registry.json | jq '.portPool.allocated'
  ```

  **Dal'a göre worktree bul (kısmi eşleşme):**
  ```bash
  cat ~/.claude/worktree-registry.json | jq '.worktrees[] | select(.branch | contains("auth"))'
  ```

  **Manuel worktree girdisi ekle:**
  ```bash
  TMP=$(mktemp)
  jq '.worktrees += [{
    "id": "'$(uuidgen)'",
    "project": "my-project",
    "repoPath": "/path/to/repo",
    "branch": "feature/auth",
    "branchSlug": "feature-auth",
    "worktreePath": "/Users/me/tmp/worktrees/my-project/feature-auth",
    "ports": [8100, 8101],
    "createdAt": "'$(date -u +%Y-%m-%dT%H:%M:%SZ)'",
    "validatedAt": null,
    "agentLaunchedAt": null,
    "task": "My task",
    "prNumber": null,
    "status": "active"
  }]' ~/.claude/worktree-registry.json > "$TMP" && mv "$TMP" ~/.claude/worktree-registry.json
  ```

  **Tahsis edilen pool'a portlar ekle:**
  ```bash
  TMP=$(mktemp)
  jq '.portPool.allocated += [8100, 8101] | .portPool.allocated |= unique | .portPool.allocated |= sort_by(.)' \
    ~/.claude/worktree-registry.json > "$TMP" && mv "$TMP" ~/.claude/worktree-registry.json
  ```

  **Worktree girdisini sil:**
  ```bash
  TMP=$(mktemp)
  jq 'del(.worktrees[] | select(.project == "my-project" and .branch == "feature/auth"))' \
    ~/.claude/worktree-registry.json > "$TMP" && mv "$TMP" ~/.claude/worktree-registry.json
  ```

  **Pool'dan portları serbest bırak:**
  ```bash
  TMP=$(mktemp)
  jq '.portPool.allocated = (.portPool.allocated | map(select(. != 8100 and . != 8101)))' \
    ~/.claude/worktree-registry.json > "$TMP" && mv "$TMP" ~/.claude/worktree-registry.json
  ```

  **Boş registry başlat (eksikse):**
  ```bash
  mkdir -p ~/.claude
  cat > ~/.claude/worktree-registry.json << 'EOF'
  {
    "worktrees": [],
    "portPool": {
      "start": 8100,
      "end": 8199,
      "allocated": []
    }
  }
  EOF
  ```

  ---

  ## Manuel Port Tahsis

  `scripts/allocate-ports.sh` başarısız olursa, portları manuel tahsis et:

  **Adım 1: Şu anda tahsis edilen portları al**
  ```bash
  ALLOCATED=$(cat ~/.claude/worktree-registry.json | jq -r '.portPool.allocated[]' | sort -n)
  echo "Currently allocated: $ALLOCATED"
  ```

  **Adım 2: İlk mevcut portu bul (tahsis listesinde DEĞİL VE sistem tarafından kullanılmıyor)**
  ```bash
  for PORT in $(seq 8100 8199); do
    # Registry'de var mı kontrol et
    if ! echo "$ALLOCATED" | grep -q "^${PORT}$"; then
      # Sistem tarafından kullanılıyor mu kontrol et
      if ! lsof -i :"$PORT" &>/dev/null; then
        echo "Available: $PORT"
        break
      fi
    fi
  done
  ```

  **Adım 3: Tahsis edilen pool'a ekle**
  ```bash
  TMP=$(mktemp)
  jq '.portPool.allocated += [8100] | .portPool.allocated |= unique | .portPool.allocated |= sort_by(.)' \
    ~/.claude/worktree-registry.json > "$TMP" && mv "$TMP" ~/.claude/worktree-registry.json
  ```

  ---

  ## Sen (Claude) Neler Yaparsin vs Scriptler Neler Yapar

  | Görev | Script Mevcut | Manuel Geri Dönüş |
  |-------|---------------|------------------|
  | Proje adını belirle | Hayır | `git remote get-url origin` veya `basename $(pwd)` parse et |
  | Paket yöneticisini tespit et | Hayır | Lockfile'ları kontrol et (Tespit bölümüne bak) |
  | Git worktree oluştur | Hayır | `git worktree add <path> -b <branch>` |
  | .agents/ dizinini kopyala | Hayır | `cp -r .agents <worktree-path>/` |
  | Bağımlılıkları kur | Hayır | Tespit edilen kurulum komutunu çalıştır |
  | Doğrula (health check) | Hayır | Sunucuyu başlat, endpoint'i kontrol et, sunucuyu durdur |
  | Portları tahsis et | `scripts/allocate-ports.sh 2` | Manuel (yukarıya bak) |
  | Worktree'yi kaydıt et | `scripts/register.sh` | Manuel jq (yukarıya bak) |
  | Ajanı terminalde başlat | `scripts/launch-agent.sh` | Manuel (aşağıya bak) |
  | Durumu göster | `scripts/status.sh` | `cat ~/.claude/worktree-registry.json \| jq ...` |
  | Worktree'yi temizle | `scripts/cleanup.sh` | Manuel (Temizleme bölümüne bak) |

  ---

  ## İş Akışları

  ### 1. Ajanlarla Birden Fazla Worktree Oluştur

  **Kullanıcı söyler:** "3 worktree oluştur: feature/auth, feature/payments, fix/login-bug"

  **Sen yaparsın (alt ajanlarla paralel hale getirebilirsin):**

  ```
  HER DAL İÇİN (paralel çalıştırabilir):

  1. KURULUM
     a. Proje adını al:
        PROJECT=$(basename $(git remote get-url origin 2>/dev/null | sed 's/\.git$//') 2>/dev/null || basename $(pwd))
     b. Repo kökünü al:
        REPO_ROOT=$(git rev-parse --show-toplevel)
     c. Dal'ı slug haline getir:
        BRANCH_SLUG=$(echo "feature/auth" | tr '/' '-')
     d. Worktree yolunu belirle:
        WORKTREE_PATH=~/tmp/worktrees/$PROJECT/$BRANCH_SLUG

  2. PORTLARI TAHSIS ET
     Seçenek A (script): ~/.claude/skills/worktree-manager/scripts/allocate-ports.sh 2
     Seçenek B (manuel): 8100-8199 aralığından 2 kullanılmayan portu bul, registry'ye ekle

  3. WORKTREE OLUŞTUR
     mkdir -p ~/tmp/worktrees/$PROJECT
     git worktree add $WORKTREE_PATH -b $BRANCH
     # Dal zaten varsa -b bayrağını çıkar

  4. KAYDEDILMEMIŞ KAYNAKLARI KOPYALA
     cp -r .agents $WORKTREE_PATH/ 2>/dev/null || true
     cp .env.example $WORKTREE_PATH/.env 2>/dev/null || true

  5. BAĞIMLILIKLARI KUR
     cd $WORKTREE_PATH
     # Tespit et ve çalıştır: npm install / uv sync / vb.

  6. DOĞRULA (sunucuyu başlat, health check, durdur)
     a. Tahsis edilen portla sunucuyu başlat
     b. Bekle ve health kontrol et: curl -sf http://localhost:$PORT/health
     c. Sunucuyu durdur
     d. BAŞARISIZ OLURSA: hatayı raporla ama diğer worktrees'le devam et

  7. GLOBAL REGISTRY'YE KAYDIT ET
     Seçenek A (script): ~/.claude/skills/worktree-manager/scripts/register.sh ...
     Seçenek B (manuel): ~/.claude/worktree-registry.json'u jq ile güncelle

  8. AJANICI BAŞLAT
     Seçenek A (script): ~/.claude/skills/worktree-manager/scripts/launch-agent.sh $WORKTREE_PATH "task"
     Seçenek B (manuel): Terminali manuel aç, cd yap, claude çalıştır

  TÜM TAMAMLANDIKTAN SONRA:
  - Kullanıcıya özet tablosu raporla
  - Herhangi bir hatayı detaylarıyla not et
  ```

  ### 2. Durumu Kontrol Et

  **Script ile:**
  ```bash
  ~/.claude/skills/worktree-manager/scripts/status.sh
  ~/.claude/skills/worktree-manager/scripts/status.sh --project my-project
  ```

  **Manuel:**
  ```bash
  # Tüm worktrees
  cat ~/.claude/worktree-registry.json | jq -r '.worktrees[] | "\(.project)\t\(.branch)\t\(.ports | join(","))\t\(.status)\t\(.task // "-")"'

  # Geçerli proje için
  PROJECT=$(basename $(git remote get-url origin 2>/dev/null | sed 's/\.git$//'))
  cat ~/.claude/worktree-registry.json | jq -r ".worktrees[] | select(.project == \"$PROJECT\") | \"\(.branch)\t\(.ports | join(\",\"))\t\(.status)\""
  ```

  ### 3. Ajanı Manuel Başlat

  `launch-agent.sh` başarısız olursa:

  **Ghostty için:**
  ```bash
  open -na "Ghostty.app" --args -e fish -c "cd '$WORKTREE_PATH' && claude"
  ```

  **iTerm2 için:**
  ```bash
  osascript -e 'tell application "iTerm2" to create window with default profile' \
    -e 'tell application "iTerm2" to tell current session of current window to write text "cd '"$WORKTREE_PATH"' && claude"'
  ```

  **tmux için:**
  ```bash
  tmux new-session -d -s "wt-$PROJECT-$BRANCH_SLUG" -c "$WORKTREE_PATH" "fish -c 'claude'"
  ```

  ### 4. Worktree'yi Temizle

  **Script ile:**
  ```bash
  ~/.claude/skills/worktree-manager/scripts/cleanup.sh my-project feature/auth --delete-branch
  ```

  **Manuel temizleme:**
  ```bash
  # 1. Registry'den worktree bilgisini al
  ENTRY=$(cat ~/.claude/worktree-registry.json | jq '.worktrees[] | select(.project == "my-project" and .branch == "feature/auth")')
  WORKTREE_PATH=$(echo "$ENTRY" | jq -r '.worktreePath')
  PORTS=$(echo "$ENTRY" | jq -r '.ports[]')
  REPO_PATH=$(echo "$ENTRY" | jq -r '.repoPath')

  # 2. Portlardaki işlemleri öldür
  for PORT in $PORTS; do
    lsof -ti:"$PORT" | xargs kill -9 2>/dev/null || true
  done

  # 3. Worktree'yi kaldır
  cd "$REPO_PATH"
  git worktree remove "$WORKTREE_PATH" --force 2>/dev/null || rm -rf "$WORKTREE_PATH"
  git worktree prune

  # 4. Registry'den kaldır
  TMP=$(mktemp)
  jq 'del(.worktrees[] | select(.project == "my-project" and .branch == "feature/auth"))' \
    ~/.claude/worktree-registry.json > "$TMP" && mv "$TMP" ~/.claude/worktree-registry.json

  # 5. Portları serbest bırak
  TMP=$(mktemp)
  for PORT in $PORTS; do
    jq ".portPool.allocated = (.portPool.allocated | map(select(. != $PORT)))" \
      ~/.claude/worktree-registry.json > "$TMP" && mv "$TMP" ~/.claude/worktree-registry.json
  done

  # 6. İsteğe bağlı dal sil
  git branch -D feature/auth
  git push origin --delete feature/auth
  ```

  ### 5. Worktree'den PR Oluştur

  Bir worktree dalından PR oluştururken, registry'yi PR numarasıyla güncelle:

  ```bash
  # gh pr create başarılı olduktan sonra, PR numasını al
  BRANCH=$(git branch --show-current)
  PR_NUM=$(gh pr view --json number -q '.number')

  # Registry'yi PR numarasıyla güncelle
  if [ -n "$PR_NUM" ] && [ -f ~/.claude/worktree-registry.json ]; then
      TMP=$(mktemp)
      jq "(.worktrees[] | select(.branch == \"$BRANCH\")).prNumber = $PR_NUM" \
        ~/.claude/worktree-registry.json > "$TMP" && mv "$TMP" ~/.claude/worktree-registry.json
      echo "Updated worktree registry with PR #$PR_NUM"
  fi
  ```

  Bu, `cleanup.sh --merged`'in PR'ları birleştirdikten sonra otomatik olarak worktrees'leri bulması ve temizlemesini sağlar.

  ### 6. Registry'yi Senkronize Et

  Registry'yi gerçek worktrees ve PR durumu ile uzlaştır:

  ```bash
  # Durumu kontrol et (değişiklik yapma)
  ~/.claude/skills/worktree-manager/scripts/sync.sh

  # Otomatik olarak sorunları düzelt (eksik girişleri kaldır, PR numaralarını güncelle)
  ~/.claude/skills/worktree-manager/scripts/sync.sh --fix

  # Sessiz modu (sadece sorunları göster)
  ~/.claude/skills/worktree-manager/scripts/sync.sh --quiet
  ```

  ---

  ## Paket Yöneticisi Tespiti

  Öncelik sırasına göre lockfiles kontrol ederek tespit et:

  | Dosya | Paket Yöneticisi | Kurulum Komutu |
  |------|-----|---------|
  | `bun.lockb` | bun | `bun install` |
  | `pnpm-lock.yaml` | pnpm | `pnpm install` |
  | `yarn.lock` | yarn | `yarn install` |
  | `package-lock.json` | npm | `npm install` |
  | `uv.lock` | uv | `uv sync` |
  | `pyproject.toml` (uv.lock yok) | uv | `uv sync` |
  | `requirements.txt` | pip | `pip install -r requirements.txt` |
  | `go.mod` | go | `go mod download` |
  | `Cargo.toml` | cargo | `cargo build` |

  **Tespit mantığı:**
  ```bash
  cd $WORKTREE_PATH
  if [ -f "bun.lockb" ]; then bun install
  elif [ -f "pnpm-lock.yaml" ]; then pnpm install
  elif [ -f "yarn.lock" ]; then yarn install
  elif [ -f "package-lock.json" ]; then npm install
  elif [ -f "uv.lock" ]; then uv sync
  elif [ -f "pyproject.toml" ]; then uv sync
  elif [ -f "requirements.txt" ]; then pip install -r requirements.txt
  elif [ -f "go.mod" ]; then go mod download
  elif [ -f "Cargo.toml" ]; then cargo build
  fi
  ```

  ---

  ## Dev Sunucu Tespiti

  Bu sırayla dev komutlarını ara:

  1. **docker-compose.yml / compose.yml**: `docker-compose up -d` veya `docker compose up -d`
  2. **package.json scripts**: `dev`, `start:dev`, `serve` ara
  3. **uvicorn ile Python**: `uv run uvicorn app.main:app --port $PORT`
  4. **Flask ile Python**: `flask run --port $PORT`
  5. **Go**: `go run .`

  **Port enjeksiyonu**: Çoğu sunucu `PORT` env var'ını veya `--port` bayrağını kabul eder

  ---

  ## Projeye Özgü Konfigürasyon (İsteğe Bağlı)

  Projeler özel ayarlar için `.claude/worktree.json` sağlayabilir:

  ```json
  {
    "ports": {
      "count": 2,
      "services": ["api", "frontend"]
    },
    "install": "uv sync && cd frontend && npm install",
    "validate": {
      "start": "docker-compose up -d",
      "healthCheck": "curl -sf http://localhost:{{PORT}}/health",
      "stop": "docker-compose down"
    },
    "copyDirs": [".agents", ".env.example", "data/fixtures"]
  }
  ```

  Bu dosya varsa, ayarlarını kullan. Değilse, otomatik tespit et.

  ---

  ## Paralel Worktree Oluşturma

  Birden fazla worktree oluştururken, paralelleştirme için alt ajanları kullan:

  ```
  Kullanıcı: "feature/a, feature/b, feature/c için worktrees oluştur"

  Sen:
  1. TÜM worktrees için portları önceden tahsis et (toplam 6 port)
  2. 3 alt ajan başlat, worktree başına bir tane
  3. Her alt ajan:
     - Worktree'sini oluştur
     - Bağımlılıkları kur
     - Doğrula
     - Önceden tahsis edilen portlarıyla kaydıt et
     - Ajanı başlat
  4. Tüm alt ajanlardan sonuçları topla
  5. Herhangi bir hatanın not edildiği birleştirilmiş özet raporla
  ```

  ---

  ## Güvenlik Yönergeleri

  1. **Temizlemeden önce**, PR durumunu kontrol et:
     - PR birleştirildi → her şeyi temizlemek güvenli
     - PR açık → kullanıcıyı uyar, devam etmeden önce onayla
     - PR yok → gönderilmemiş iş hakkında uyar

  2. **Dalları silmeden önce**, şunları kontrol et:
     - PR birleştirilmedi mi
     - PR yok mu
     - Worktree kaydedilmemiş değişikliklere mi sahip

  3. **Port çatışmaları**: Port, worktree dışı bir işlem tarafından kullanılıyorsa, farklı port seç

  4. **Yetim worktrees**: Orijinal repo silinmişse, durumda `orphaned` olarak işaretle

  5. **Maksimum worktrees**: 100 portluk pool ve worktree başına 2 portla, ~50 eş zamanlı worktree mümkün

  ---

  ## Script Referansı

  Scriptler `~/.claude/skills/worktree-manager/scripts/` konumundadır

  ### allocate-ports.sh
  ```bash
  ~/.claude/skills/worktree-manager/scripts/allocate-ports.sh <count>
  # Döner: boşlukla ayrılmış port numaraları (ör. "8100 8101")
  # Otomatik olarak registry'yi günceller
  ```

  ### register.sh
  ```bash
  ~/.claude/skills/worktree-manager/scripts/register.sh \
    <project> <branch> <branch-slug> <worktree-path> <repo-path> <ports> [task]
  # Örnek:
  ~/.claude/skills/worktree-manager/scripts/register.sh \
    "my-project" "feature/auth" "feature-auth" \
    "$HOME/tmp/worktrees/my-project/feature-auth" \
    "/path/to/repo" "8100,8101" "OAuth uygula"
  ```

  ### launch-agent.sh
  ```bash
  ~/.claude/skills/worktree-manager/scripts/launch-agent.sh <worktree-path> [task]
  # Yeni terminal penceresi açar (varsayılan olarak Ghostty) Claude Code ile
  ```

  ### status.sh
  ```bash
  ~/.claude/skills/worktree-manager/scripts/status.sh [--project <name>]
  # Tüm worktrees'leri göster, veya projeye göre filtrele
  ```

  ### cleanup.sh
  ```bash
  ~/.claude/skills/worktree-manager/scripts/cleanup.sh <project> <branch> [--delete-branch]
  # Portları öldür, worktree'yi kaldır, registry'yi güncelle
  # --delete-branch aynı zamanda yerel ve uzak git dallarını da kaldırır

  # Veya birleştirilen TÜM worktrees'leri bir kerede temizle:
  ~/.claude/skills/worktree-manager/scripts/cleanup.sh --merged [--delete-branch]
  # Birleştirilen PR'lara sahip tüm worktrees'leri bulur ve temizler
  ```

  ### sync.sh
  ```bash
  ~/.claude/skills/worktree-manager/scripts/sync.sh [--quiet] [--fix]
  # Registry'yi gerçek worktrees ve PR durumuyla uzlaştır
  # --quiet: Yalnızca sorunları göster, OK girişleri gösterme
  # --fix: Otomatik olarak eksik girişleri kaldır ve PR numaralarını/durumunu güncelle

  # Örnek: Hiçbir şey değiştirmeden durumu kontrol et
  ~/.claude/skills/worktree-manager/scripts/sync.sh

  # Örnek: Registry sorunlarını otomatik düzelt
  ~/.claude/skills/worktree-manager/scripts/sync.sh --fix
  ```

  ### release-ports.sh
  ```bash
  ~/.claude/skills/worktree-manager/scripts/release-ports.sh <port1> [port2] ...
  # Portları pool'a geri serbest bırak
  ```

  ---

  ## Beceri Konfigürasyonu

  Konum: `~/.claude/skills/worktree-manager/config.json`

  ```json
  {
    "terminal": "ghostty",
    "shell": "fish",
    "claudeCommand": "claude",
    "portPool": {
      "start": 8100,
      "end": 8199
    },
    "portsPerWorktree": 2,
    "worktreeBase": "~/tmp/worktrees",
    "defaultCopyDirs": [".agents", ".env.example"]
  }
---

# Global Worktree Manager

Manage parallel development across ALL projects using git worktrees with Claude Code agents. Each worktree is an isolated copy of the repo on a different branch, stored centrally at `~/tmp/worktrees/`.

**IMPORTANT**: You (Claude) can perform ALL operations manually using standard tools (jq, git, bash). Scripts are helpers, not requirements. If a script fails, fall back to manual operations described in this document.

## When This Skill Activates

**Trigger phrases:**
- "spin up worktrees for X, Y, Z"
- "create 3 worktrees for features A, B, C"
- "new worktree for feature/auth"
- "what's the status of my worktrees?"
- "show all worktrees" / "show worktrees for this project"
- "clean up merged worktrees"
- "clean up the auth worktree"
- "launch agent in worktree X"
- "sync worktrees" / "sync worktree registry"
- "create PR" (when in a worktree - updates registry with PR number)

---

## File Locations

| File | Purpose |
|------|---------|
| `~/.claude/worktree-registry.json` | **Global registry** - tracks all worktrees across all projects |
| `~/.claude/skills/worktree-manager/config.json` | **Skill config** - terminal, shell, port range settings |
| `~/.claude/skills/worktree-manager/scripts/` | **Helper scripts** - optional, can do everything manually |
| `~/tmp/worktrees/` | **Worktree storage** - all worktrees live here |
| `.claude/worktree.json` (per-project) | **Project config** - optional custom settings |

---

## Core Concepts

### Centralized Worktree Storage
All worktrees live in `~/tmp/worktrees/<project-name>/<branch-slug>/`

```
~/tmp/worktrees/
├── obsidian-ai-agent/
│   ├── feature-auth/           # branch: feature/auth
│   ├── feature-payments/       # branch: feature/payments
│   └── fix-login-bug/          # branch: fix/login-bug
└── another-project/
    └── feature-dark-mode/
```

### Branch Slug Convention
Branch names are slugified for filesystem safety by replacing `/` with `-`:
- `feature/auth` → `feature-auth`
- `fix/login-bug` → `fix-login-bug`
- `feat/user-profile` → `feat-user-profile`

**Slugify manually:** `echo "feature/auth" | tr '/' '-'` → `feature-auth`

### Port Allocation Rules
- **Global pool**: 8100-8199 (100 ports total)
- **Per worktree**: 2 ports allocated (for API + frontend patterns)
- **Globally unique**: Ports are tracked globally to avoid conflicts across projects
- **Check before use**: Always verify port isn't in use by system: `lsof -i :<port>`

---

## Global Registry

### Location
`~/.claude/worktree-registry.json`

### Schema
```json
{
  "worktrees": [
    {
      "id": "unique-uuid",
      "project": "obsidian-ai-agent",
      "repoPath": "/Users/rasmus/Projects/obsidian-ai-agent",
      "branch": "feature/auth",
      "branchSlug": "feature-auth",
      "worktreePath": "/Users/rasmus/tmp/worktrees/obsidian-ai-agent/feature-auth",
      "ports": [8100, 8101],
      "createdAt": "2025-12-04T10:00:00Z",
      "validatedAt": "2025-12-04T10:02:00Z",
      "agentLaunchedAt": "2025-12-04T10:03:00Z",
      "task": "Implement OAuth login",
      "prNumber": null,
      "status": "active"
    }
  ],
  "portPool": {
    "start": 8100,
    "end": 8199,
    "allocated": [8100, 8101]
  }
}
```

### Field Descriptions

**Worktree entry fields:**
| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier (UUID) |
| `project` | string | Project name (from git remote or directory) |
| `repoPath` | string | Absolute path to original repository |
| `branch` | string | Full branch name (e.g., `feature/auth`) |
| `branchSlug` | string | Filesystem-safe name (e.g., `feature-auth`) |
| `worktreePath` | string | Absolute path to worktree |
| `ports` | number[] | Allocated port numbers (usually 2) |
| `createdAt` | string | ISO 8601 timestamp |
| `validatedAt` | string\|null | When validation passed |
| `agentLaunchedAt` | string\|null | When agent was launched |
| `task` | string\|null | Task description for the agent |
| `prNumber` | number\|null | Associated PR number if exists |
| `status` | string | `active`, `orphaned`, or `merged` |

**Port pool fields:**
| Field | Type | Description |
|-------|------|-------------|
| `start` | number | First port in pool (default: 8100) |
| `end` | number | Last port in pool (default: 8199) |
| `allocated` | number[] | Currently allocated ports |

### Manual Registry Operations

**Read entire registry:**
```bash
cat ~/.claude/worktree-registry.json | jq '.'
```

**List all worktrees:**
```bash
cat ~/.claude/worktree-registry.json | jq '.worktrees[]'
```

**List worktrees for specific project:**
```bash
cat ~/.claude/worktree-registry.json | jq '.worktrees[] | select(.project == "my-project")'
```

**Get allocated ports:**
```bash
cat ~/.claude/worktree-registry.json | jq '.portPool.allocated'
```

**Find worktree by branch (partial match):**
```bash
cat ~/.claude/worktree-registry.json | jq '.worktrees[] | select(.branch | contains("auth"))'
```

**Add worktree entry manually:**
```bash
TMP=$(mktemp)
jq '.worktrees += [{
  "id": "'$(uuidgen)'",
  "project": "my-project",
  "repoPath": "/path/to/repo",
  "branch": "feature/auth",
  "branchSlug": "feature-auth",
  "worktreePath": "/Users/me/tmp/worktrees/my-project/feature-auth",
  "ports": [8100, 8101],
  "createdAt": "'$(date -u +%Y-%m-%dT%H:%M:%SZ)'",
  "validatedAt": null,
  "agentLaunchedAt": null,
  "task": "My task",
  "prNumber": null,
  "status": "active"
}]' ~/.claude/worktree-registry.json > "$TMP" && mv "$TMP" ~/.claude/worktree-registry.json
```

**Add ports to allocated pool:**
```bash
TMP=$(mktemp)
jq '.portPool.allocated += [8100, 8101] | .portPool.allocated |= unique | .portPool.allocated |= sort_by(.)' \
  ~/.claude/worktree-registry.json > "$TMP" && mv "$TMP" ~/.claude/worktree-registry.json
```

**Remove worktree entry:**
```bash
TMP=$(mktemp)
jq 'del(.worktrees[] | select(.project == "my-project" and .branch == "feature/auth"))' \
  ~/.claude/worktree-registry.json > "$TMP" && mv "$TMP" ~/.claude/worktree-registry.json
```

**Release ports from pool:**
```bash
TMP=$(mktemp)
jq '.portPool.allocated = (.portPool.allocated | map(select(. != 8100 and . != 8101)))' \
  ~/.claude/worktree-registry.json > "$TMP" && mv "$TMP" ~/.claude/worktree-registry.json
```

**Initialize empty registry (if missing):**
```bash
mkdir -p ~/.claude
cat > ~/.claude/worktree-registry.json << 'EOF'
{
  "worktrees": [],
  "portPool": {
    "start": 8100,
    "end": 8199,
    "allocated": []
  }
}
EOF
```

---

## Manual Port Allocation

If `scripts/allocate-ports.sh` fails, allocate ports manually:

**Step 1: Get currently allocated ports**
```bash
ALLOCATED=$(cat ~/.claude/worktree-registry.json | jq -r '.portPool.allocated[]' | sort -n)
echo "Currently allocated: $ALLOCATED"
```

**Step 2: Find first available port (not in allocated list AND not in use by system)**
```bash
for PORT in $(seq 8100 8199); do
  # Check if in registry
  if ! echo "$ALLOCATED" | grep -q "^${PORT}$"; then
    # Check if in use by system
    if ! lsof -i :"$PORT" &>/dev/null; then
      echo "Available: $PORT"
      break
    fi
  fi
done
```

**Step 3: Add to allocated pool**
```bash
TMP=$(mktemp)
jq '.portPool.allocated += [8100] | .portPool.allocated |= unique | .portPool.allocated |= sort_by(.)' \
  ~/.claude/worktree-registry.json > "$TMP" && mv "$TMP" ~/.claude/worktree-registry.json
```

---

## What You (Claude) Do vs What Scripts Do

| Task | Script Available | Manual Fallback |
|------|------------------|-----------------|
| Determine project name | No | Parse `git remote get-url origin` or `basename $(pwd)` |
| Detect package manager | No | Check for lockfiles (see Detection section) |
| Create git worktree | No | `git worktree add <path> -b <branch>` |
| Copy .agents/ directory | No | `cp -r .agents <worktree-path>/` |
| Install dependencies | No | Run detected install command |
| Validate (health check) | No | Start server, curl endpoint, stop server |
| Allocate ports | `scripts/allocate-ports.sh 2` | Manual (see above) |
| Register worktree | `scripts/register.sh` | Manual jq (see above) |
| Launch agent in terminal | `scripts/launch-agent.sh` | Manual (see below) |
| Show status | `scripts/status.sh` | `cat ~/.claude/worktree-registry.json \| jq ...` |
| Cleanup worktree | `scripts/cleanup.sh` | Manual (see Cleanup section) |

---

## Workflows

### 1. Create Multiple Worktrees with Agents

**User says:** "Spin up 3 worktrees for feature/auth, feature/payments, and fix/login-bug"

**You do (can parallelize with subagents):**

```
For EACH branch (can run in parallel):

1. SETUP
   a. Get project name:
      PROJECT=$(basename $(git remote get-url origin 2>/dev/null | sed 's/\.git$//') 2>/dev/null || basename $(pwd))
   b. Get repo root:
      REPO_ROOT=$(git rev-parse --show-toplevel)
   c. Slugify branch:
      BRANCH_SLUG=$(echo "feature/auth" | tr '/' '-')
   d. Determine worktree path:
      WORKTREE_PATH=~/tmp/worktrees/$PROJECT/$BRANCH_SLUG

2. ALLOCATE PORTS
   Option A (script): ~/.claude/skills/worktree-manager/scripts/allocate-ports.sh 2
   Option B (manual): Find 2 unused ports from 8100-8199, add to registry

3. CREATE WORKTREE
   mkdir -p ~/tmp/worktrees/$PROJECT
   git worktree add $WORKTREE_PATH -b $BRANCH
   # If branch exists already, omit -b flag

4. COPY UNCOMMITTED RESOURCES
   cp -r .agents $WORKTREE_PATH/ 2>/dev/null || true
   cp .env.example $WORKTREE_PATH/.env 2>/dev/null || true

5. INSTALL DEPENDENCIES
   cd $WORKTREE_PATH
   # Detect and run: npm install / uv sync / etc.

6. VALIDATE (start server, health check, stop)
   a. Start server with allocated port
   b. Wait and health check: curl -sf http://localhost:$PORT/health
   c. Stop server
   d. If FAILS: report error but continue with other worktrees

7. REGISTER IN GLOBAL REGISTRY
   Option A (script): ~/.claude/skills/worktree-manager/scripts/register.sh ...
   Option B (manual): Update ~/.claude/worktree-registry.json with jq

8. LAUNCH AGENT
   Option A (script): ~/.claude/skills/worktree-manager/scripts/launch-agent.sh $WORKTREE_PATH "task"
   Option B (manual): Open terminal manually, cd to path, run claude

AFTER ALL COMPLETE:
- Report summary table to user
- Note any failures with details
```

### 2. Check Status

**With script:**
```bash
~/.claude/skills/worktree-manager/scripts/status.sh
~/.claude/skills/worktree-manager/scripts/status.sh --project my-project
```

**Manual:**
```bash
# All worktrees
cat ~/.claude/worktree-registry.json | jq -r '.worktrees[] | "\(.project)\t\(.branch)\t\(.ports | join(","))\t\(.status)\t\(.task // "-")"'

# For current project
PROJECT=$(basename $(git remote get-url origin 2>/dev/null | sed 's/\.git$//'))
cat ~/.claude/worktree-registry.json | jq -r ".worktrees[] | select(.project == \"$PROJECT\") | \"\(.branch)\t\(.ports | join(\",\"))\t\(.status)\""
```

### 3. Launch Agent Manually

If `launch-agent.sh` fails:

**For Ghostty:**
```bash
open -na "Ghostty.app" --args -e fish -c "cd '$WORKTREE_PATH' && claude"
```

**For iTerm2:**
```bash
osascript -e 'tell application "iTerm2" to create window with default profile' \
  -e 'tell application "iTerm2" to tell current session of current window to write text "cd '"$WORKTREE_PATH"' && claude"'
```

**For tmux:**
```bash
tmux new-session -d -s "wt-$PROJECT-$BRANCH_SLUG" -c "$WORKTREE_PATH" "fish -c 'claude'"
```

### 4. Cleanup Worktree

**With script:**
```bash
~/.claude/skills/worktree-manager/scripts/cleanup.sh my-project feature/auth --delete-branch
```

**Manual cleanup:**
```bash
# 1. Get worktree info from registry
ENTRY=$(cat ~/.claude/worktree-registry.json | jq '.worktrees[] | select(.project == "my-project" and .branch == "feature/auth")')
WORKTREE_PATH=$(echo "$ENTRY" | jq -r '.worktreePath')
PORTS=$(echo "$ENTRY" | jq -r '.ports[]')
REPO_PATH=$(echo "$ENTRY" | jq -r '.repoPath')

# 2. Kill processes on ports
for PORT in $PORTS; do
  lsof -ti:"$PORT" | xargs kill -9 2>/dev/null || true
done

# 3. Remove worktree
cd "$REPO_PATH"
git worktree remove "$WORKTREE_PATH" --force 2>/dev/null || rm -rf "$WORKTREE_PATH"
git worktree prune

# 4. Remove from registry
TMP=$(mktemp)
jq 'del(.worktrees[] | select(.project == "my-project" and .branch == "feature/auth"))' \
  ~/.claude/worktree-registry.json > "$TMP" && mv "$TMP" ~/.claude/worktree-registry.json

# 5. Release ports
TMP=$(mktemp)
for PORT in $PORTS; do
  jq ".portPool.allocated = (.portPool.allocated | map(select(. != $PORT)))" \
    ~/.claude/worktree-registry.json > "$TMP" && mv "$TMP" ~/.claude/worktree-registry.json
done

# 6. Optionally delete branch
git branch -D feature/auth
git push origin --delete feature/auth
```

### 5. Create PR from Worktree

When creating a PR from a worktree branch, update the registry with the PR number:

```bash
# After gh pr create succeeds, get the PR number
BRANCH=$(git branch --show-current)
PR_NUM=$(gh pr view --json number -q '.number')

# Update registry with PR number
if [ -n "$PR_NUM" ] && [ -f ~/.claude/worktree-registry.json ]; then
    TMP=$(mktemp)
    jq "(.worktrees[] | select(.branch == \"$BRANCH\")).prNumber = $PR_NUM" \
      ~/.claude/worktree-registry.json > "$TMP" && mv "$TMP" ~/.claude/worktree-registry.json
    echo "Updated worktree registry with PR #$PR_NUM"
fi
```

This enables `cleanup.sh --merged` to automatically find and clean up worktrees after their PRs are merged.

### 6. Sync Registry

Reconcile registry with actual worktrees and PR status:

```bash
# Check status (no changes)
~/.claude/skills/worktree-manager/scripts/sync.sh

# Auto-fix issues (update PR numbers, remove missing entries)
~/.claude/skills/worktree-manager/scripts/sync.sh --fix

# Quiet mode (only show problems)
~/.claude/skills/worktree-manager/scripts/sync.sh --quiet
```

---

## Package Manager Detection

Detect by checking for lockfiles in priority order:

| File | Package Manager | Install Command |
|------|-----------------|-----------------|
| `bun.lockb` | bun | `bun install` |
| `pnpm-lock.yaml` | pnpm | `pnpm install` |
| `yarn.lock` | yarn | `yarn install` |
| `package-lock.json` | npm | `npm install` |
| `uv.lock` | uv | `uv sync` |
| `pyproject.toml` (no uv.lock) | uv | `uv sync` |
| `requirements.txt` | pip | `pip install -r requirements.txt` |
| `go.mod` | go | `go mod download` |
| `Cargo.toml` | cargo | `cargo build` |

**Detection logic:**
```bash
cd $WORKTREE_PATH
if [ -f "bun.lockb" ]; then bun install
elif [ -f "pnpm-lock.yaml" ]; then pnpm install
elif [ -f "yarn.lock" ]; then yarn install
elif [ -f "package-lock.json" ]; then npm install
elif [ -f "uv.lock" ]; then uv sync
elif [ -f "pyproject.toml" ]; then uv sync
elif [ -f "requirements.txt" ]; then pip install -r requirements.txt
elif [ -f "go.mod" ]; then go mod download
elif [ -f "Cargo.toml" ]; then cargo build
fi
```

---

## Dev Server Detection

Look for dev commands in this order:

1. **docker-compose.yml / compose.yml**: `docker-compose up -d` or `docker compose up -d`
2. **package.json scripts**: Look for `dev`, `start:dev`, `serve`
3. **Python with uvicorn**: `uv run uvicorn app.main:app --port $PORT`
4. **Python with Flask**: `flask run --port $PORT`
5. **Go**: `go run .`

**Port injection**: Most servers accept `PORT` env var or `--port` flag

---

## Project-Specific Config (Optional)

Projects can provide `.claude/worktree.json` for custom settings:

```json
{
  "ports": {
    "count": 2,
    "services": ["api", "frontend"]
  },
  "install": "uv sync && cd frontend && npm install",
  "validate": {
    "start": "docker-compose up -d",
    "healthCheck": "curl -sf http://localhost:{{PORT}}/health",
    "stop": "docker-compose down"
  },
  "copyDirs": [".agents", ".env.example", "data/fixtures"]
}
```

If this file exists, use its settings. Otherwise, auto-detect.

---

## Parallel Worktree Creation

When creating multiple worktrees, use subagents for parallelization:

```
User: "Spin up worktrees for feature/a, feature/b, feature/c"

You:
1. Allocate ports for ALL worktrees upfront (6 ports total)
2. Spawn 3 subagents, one per worktree
3. Each subagent:
   - Creates its worktree
   - Installs deps
   - Validates
   - Registers (with its pre-allocated ports)
   - Launches agent
4. Collect results from all subagents
5. Report unified summary with any failures noted
```

---

## Safety Guidelines

1. **Before cleanup**, check PR status:
   - PR merged → safe to clean everything
   - PR open → warn user, confirm before proceeding
   - No PR → warn about unsubmitted work

2. **Before deleting branches**, confirm if:
   - PR not merged
   - No PR exists
   - Worktree has uncommitted changes

3. **Port conflicts**: If port in use by non-worktree process, pick different port

4. **Orphaned worktrees**: If original repo deleted, mark as `orphaned` in status

5. **Max worktrees**: With 100-port pool and 2 ports each, max ~50 concurrent worktrees

---

## Script Reference

Scripts are in `~/.claude/skills/worktree-manager/scripts/`

### allocate-ports.sh
```bash
~/.claude/skills/worktree-manager/scripts/allocate-ports.sh <count>
# Returns: space-separated port numbers (e.g., "8100 8101")
# Automatically updates registry
```

### register.sh
```bash
~/.claude/skills/worktree-manager/scripts/register.sh \
  <project> <branch> <branch-slug> <worktree-path> <repo-path> <ports> [task]
# Example:
~/.claude/skills/worktree-manager/scripts/register.sh \
  "my-project" "feature/auth" "feature-auth" \
  "$HOME/tmp/worktrees/my-project/feature-auth" \
  "/path/to/repo" "8100,8101" "Implement OAuth"
```

### launch-agent.sh
```bash
~/.claude/skills/worktree-manager/scripts/launch-agent.sh <worktree-path> [task]
# Opens new terminal window (Ghostty by default) with Claude Code
```

### status.sh
```bash
~/.claude/skills/worktree-manager/scripts/status.sh [--project <name>]
# Shows all worktrees, or filtered by project
```

### cleanup.sh
```bash
~/.claude/skills/worktree-manager/scripts/cleanup.sh <project> <branch> [--delete-branch]
# Kills ports, removes worktree, updates registry
# --delete-branch also removes local and remote git branches

# Or cleanup ALL merged worktrees at once:
~/.claude/skills/worktree-manager/scripts/cleanup.sh --merged [--delete-branch]
# Finds all worktrees with merged PRs and cleans them up
```

### sync.sh
```bash
~/.claude/skills/worktree-manager/scripts/sync.sh [--quiet] [--fix]
# Reconciles registry with actual worktrees and PR status
# --quiet: Only show issues, not OK entries
# --fix: Automatically remove missing entries and update PR numbers/status

# Example: Check status without changing anything
~/.claude/skills/worktree-manager/scripts/sync.sh

# Example: Auto-fix registry issues
~/.claude/skills/worktree-manager/scripts/sync.sh --fix
```

### release-ports.sh
```bash
~/.claude/skills/worktree-manager/scripts/release-ports.sh <port1> [port2] ...
# Releases ports back to pool
```

---

## Skill Config

Location: `~/.claude/skills/worktree-manager/config.json`

```json
{
  "terminal": "ghostty",
  "shell": "fish",
  "claudeCommand": "claude",
  "portPool": {
    "start": 8100,
    "end": 8199
  },
  "portsPerWorktree": 2,
  "worktreeBase": "~/tmp/worktrees",
  "defaultCopyDirs": [".agents", ".env.example"]
}
```

**Terminal options**: `ghostty`, `iterm2`, `tmux`, `wezterm`, `kitty`, `alacritty`

---

## Common Issues

### "Worktree already exists"
```bash
git worktree list
git worktree remove <path> --force
git worktree prune
```

### "Branch already exists"
```bash
# Use existing branch (omit -b flag)
git worktree add <path> <branch>
```

### "Port already in use"
```bash
lsof -i :<port>
# Kill if stale, or pick different port
```

### Registry out of sync
```bash
# Compare registry to actual worktrees
cat ~/.claude/worktree-registry.json | jq '.worktrees[].worktreePath'
find ~/tmp/worktrees -maxdepth 2 -type d

# Remove orphaned entries or add missing ones
```

### Validation failed
1. Check stderr/logs for error message
2. Common issues: missing env vars, database not running, wrong port
3. Report to user with details
4. Continue with other worktrees
5. User can fix and re-validate manually

---

## Example Session

**User:** "Spin up 2 worktrees for feature/dark-mode and fix/login-bug"

**You:**
1. Detect project: `obsidian-ai-agent` (from git remote)
2. Detect package manager: `uv` (found uv.lock)
3. Allocate 4 ports: `~/.claude/skills/worktree-manager/scripts/allocate-ports.sh 4` → `8100 8101 8102 8103`
4. Create worktrees:
   ```bash
   mkdir -p ~/tmp/worktrees/obsidian-ai-agent
   git worktree add ~/tmp/worktrees/obsidian-ai-agent/feature-dark-mode -b feature/dark-mode
   git worktree add ~/tmp/worktrees/obsidian-ai-agent/fix-login-bug -b fix/login-bug
   ```
5. Copy .agents/:
   ```bash
   cp -r .agents ~/tmp/worktrees/obsidian-ai-agent/feature-dark-mode/
   cp -r .agents ~/tmp/worktrees/obsidian-ai-agent/fix-login-bug/
   ```
6. Install deps in each worktree:
   ```bash
   (cd ~/tmp/worktrees/obsidian-ai-agent/feature-dark-mode && uv sync)
   (cd ~/tmp/worktrees/obsidian-ai-agent/fix-login-bug && uv sync)
   ```
7. Validate each (start server, health check, stop)
8. Register both worktrees in `~/.claude/worktree-registry.json`
9. Launch agents:
   ```bash
   ~/.claude/skills/worktree-manager/scripts/launch-agent.sh \
     ~/tmp/worktrees/obsidian-ai-agent/feature-dark-mode "Implement dark mode toggle"
   ~/.claude/skills/worktree-manager/scripts/launch-agent.sh \
     ~/tmp/worktrees/obsidian-ai-agent/fix-login-bug "Fix login redirect bug"
   ```
10. Report:
    ```
    Created 2 worktrees with agents:

    | Branch | Ports | Path | Task |
    |--------|-------|------|------|
    | feature/dark-mode | 8100, 8101 | ~/tmp/worktrees/.../feature-dark-mode | Implement dark mode |
    | fix/login-bug | 8102, 8103 | ~/tmp/worktrees/.../fix-login-bug | Fix login redirect |

    Both agents running in Ghostty windows.
    ```
