---
name: "docker-development"
description_en: "Docker and container development agent skill and plugin for Dockerfile optimization, docker-compose orchestration, multi-stage builds, and container security hardening. Use when: user wants to optimize a Dockerfile, create or improve docker-compose configurations, implement multi-stage builds, audit container security, reduce image size, or follow container best practices. Covers build performance"
category: "Document"
repo: "alirezarezvani/claude-skills"
stars: 18266
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/docker-development/SKILL.md"
path: ".gemini/skills/docker-development/SKILL.md"
is_collection: false
body_length: 10901
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Docker Geliştirme

  > Daha küçük imajlar. Daha hızlı derlemeler. Güvenli konteynerler. Tahmin yok.

  Şişkin Dockerfile'ları production-grade konteynerlerine dönüştüren fikri belirlenmiş Docker iş akışı. Optimizasyon, çok aşamalı derlemeler, compose orkestrasyonu ve güvenlik sağlamlaştırmasını kapsar.

  Docker öğreticisi değil — zamanı, alanı veya saldırı yüzeyini boşa harcamayan konteynerler oluşturma hakkında somut kararlar seti.

  ---

  ## Slash Komutları

  | Komut | Ne yapar |
  |---------|-------------|
  | `/docker:optimize` | Bir Dockerfile'ı boyut, hız ve katman önbelleği için analiz eder ve optimize eder |
  | `/docker:compose` | En iyi uygulamalarla docker-compose.yml oluşturur veya iyileştirir |
  | `/docker:security` | Bir Dockerfile veya çalışan konteyner için güvenlik sorunlarını denetler |

  ---

  ## Bu Beceri Ne Zaman Devreye Girer

  Kullanıcıdan gelen bu desenleri tanıyın:

  - "Bu Dockerfile'ı optimize et"
  - "Docker derlemem yavaş"
  - "Bu proje için docker-compose oluştur"
  - "Bu Dockerfile güvenli mi?"
  - "Docker imaj boyutumu küçült"
  - "Çok aşamalı derlemeler kur"
  - "Docker en iyi uygulamaları [dil/framework] için"
  - İçeren herhangi bir istek: Dockerfile, docker-compose, konteyner, imaj boyutu, derleme önbelleği, Docker güvenliği

  Kullanıcının bir Dockerfile'ı varsa veya birşeyi konteynerleştirmek istiyorsa → bu beceri uygulanır.

  ---

  ## İş Akışı

  ### `/docker:optimize` — Dockerfile Optimizasyonu

  1. **Mevcut durumu analiz et**
     - Dockerfile'ı oku
     - Base imaj ve boyutunu tanımla
     - Katmanları say (her RUN/COPY/ADD = 1 katman)
     - Yaygın anti-patternleri kontrol et

  2. **Optimizasyon kontrol listesini uygula**

     ```
     BASE IMAGE
     ├── Belirli etiketler kullan, production'da asla :latest
     ├── slim/alpine varyantlarını tercih et (debian-slim > ubuntu > debian)
     ├── CI'de yeniden üretilebilirlik için özeti sabitle: image@sha256:...
     └── Base'i çalışma zamanı ihtiyaçlarına eşle (derlenmiş ikili için python:3.12 kullanma)

     LAYER OPTIMIZATION
     ├── İlişkili RUN komutlarını && \ ile birleştir
     ├── Katman sıraı: değişmeyen ilk (bağımlılıklar kaynak kodundan önce)
     ├── Paket yöneticisi önbelleğini aynı RUN katmanında temizle
     ├── .dockerignore kullanarak gereksiz dosyaları hariç tut
     └── Derleme bağımlılıklarını çalışma zamanı bağımlılıklarından ayır

     BUILD CACHE
     ├── Kaynak kodundan önce bağımlılık dosyalarını COPY et (package.json, requirements.txt, go.mod)
     ├── Bağımlılıkları kod kopyasından ayrı bir katmanda kur
     ├── BuildKit önbellek bağlantılarını kullan: --mount=type=cache,target=/root/.cache
     └── Bağımlılık yüklemesinden önce COPY . . kullanmaktan kaçın

     MULTI-STAGE BUILDS
     ├── Aşama 1: derleme (tam SDK, derleme araçları, geliştirme bağımlılıkları)
     ├── Aşama 2: çalışma zamanı (minimal base, yalnızca üretim yapıtları)
     ├── COPY --from=builder yalnızca gerekli olanları
     └── Son imaj hiçbir derleme aracı, kaynak kod veya geliştirme bağımlılığı içermemeli
     ```

  3. **Optimize edilmiş Dockerfile oluştur**
     - Tüm ilgili optimizasyonları uygula
     - Her kararı açıklayan satır içi yorumlar ekle
     - Tahmini boyut azalmasını bildir

  4. **Doğrula**
     ```bash
     python3 scripts/dockerfile_analyzer.py Dockerfile
     ```

  ### `/docker:compose` — Docker Compose Konfigürasyonu

  1. **Hizmetleri tanımla**
     - Uygulama (web, API, worker)
     - Veritabanı (postgres, mysql, redis, mongo)
     - Önbellek (redis, memcached)
     - Kuyruk (rabbitmq, kafka)
     - Ters proxy (nginx, traefik, caddy)

  2. **Compose en iyi uygulamalarını uygula**

     ```
     SERVICES
     ├── depends_on'u condition: service_healthy ile kullan
     ├── Her hizmet için healthcheck ekle
     ├── Kaynak sınırlarını ayarla (mem_limit, cpus)
     ├── Kalıcı veriler için adlandırılmış volume'ler kullan
     └── İmaj sürümlerini sabitle

     NETWORKING
     ├── Açık networkler oluştur (varsayılana güvenme)
     ├── Frontend ve backend networklerini ayır
     ├── Yalnızca dış erişim gerektiren portları expose et
     └── Sadece backend networkler için internal: true kullan

     ENVIRONMENT
     ├── Gizli bilgiler için env_file kullan, satır içinde değil
     ├── Asla .env dosyalarını commit etme (.gitignore'a ekle)
     ├── Değişken ikamesini kullan: ${VAR:-default}
     └── Tüm gerekli ortam değişkenlerini belgelendir

     DEVELOPMENT vs PRODUCTION
     ├── Compose profilleri veya override dosyaları kullan
     ├── Geliştirme: sıcak yükleme için bind mount'lar, debug portları açık
     ├── Production: adlandırılmış volume'ler, debug portları kapalı, restart: unless-stopped
     └── docker-compose.override.yml geliştirme-yalnızca konfigürasyonu için
     ```

  3. **Compose dosyası oluştur**
     - Healthcheck'ler, network'ler, volume'ler ile docker-compose.yml çıkart
     - Tüm gerekli değişkenleri belgelendirerek .env.example oluştur
     - Geliştirme/production profil notasyonları ekle

  ### `/docker:security` — Konteyner Güvenlik Denetimi

  1. **Dockerfile denetimi**

     | Kontrol | Önem Derecesi | Çözüm |
     |-------|----------|-----|
     | Root olarak çalışıyor | Kritik | Kullanıcı oluşturduktan sonra `USER nonroot` ekle |
     | :latest etiketi kullanıyor | Yüksek | Belirli bir sürüme sabitle |
     | ENV/ARG'da gizli bilgiler | Kritik | BuildKit gizli bağlantılarını kullan: `--mount=type=secret` |
     | Geniş glob ile COPY | Orta | Belirli yollar kullan, .dockerignore ekle |
     | Gereksiz EXPOSE | Düşük | Yalnızca uygulamanın kullandığı portları expose et |
     | Healthcheck yok | Orta | Uygun aralıkla HEALTHCHECK ekle |
     | Ayrıcalıklı talimatlar | Yüksek | `--privileged` kullanmaktan kaçın, yetenekleri düşür |
     | Paket yöneticisi önbelleği kaldı | Düşük | Aynı RUN katmanında temizle |

  2. **Çalışma zamanı güvenlik kontrolleri**

     | Kontrol | Önem Derecesi | Çözüm |
     |-------|----------|-----|
     | Konteyner root olarak çalışıyor | Kritik | Dockerfile'da veya compose'da kullanıcı ayarla |
     | Yazılabilir root dosya sistemi | Orta | Compose'da `read_only: true` kullan |
     | Tüm yetenekler korundu | Yüksek | Tümünü düşür, yalnızca gerekli olanları ekle: `cap_drop: [ALL]` |
     | Kaynak sınırı yok | Orta | `mem_limit` ve `cpus` ayarla |
     | Host network modu | Yüksek | Bridge veya custom network kullan |
     | Hassas mount'lar | Kritik | Asla /etc, /var/run/docker.sock production'da mount etme |
     | Günlük sürücü yapılandırılmadı | Düşük | Boyut sınırlarıyla `logging:` ayarla |

  3. **Güvenlik raporu oluştur**
     ```
     SECURITY AUDIT — [Dockerfile/Image adı]
     Date: [timestamp]

     CRITICAL: [count]
     HIGH:     [count]
     MEDIUM:   [count]
     LOW:      [count]

     [Ayrıntılı bulguların ve çözüm önerileri]
     ```

  ---

  ## Araçlar

  ### `scripts/dockerfile_analyzer.py`

  Dockerfile'ların statik analizi için CLI yardımcı programı.

  **Özellikler:**
  - Katman sayısı ve optimizasyon önerileri
  - Boyut tahminleriyle base imaj analizi
  - Anti-pattern tespiti (15+ kural)
  - Güvenlik sorunu bayraklandırması
  - Çok aşamalı derleme tespiti ve doğrulaması
  - JSON ve metin çıktısı

  **Kullanım:**
  ```bash
  # Bir Dockerfile'ı analiz et
  python3 scripts/dockerfile_analyzer.py Dockerfile

  # JSON çıktısı
  python3 scripts/dockerfile_analyzer.py Dockerfile --output json

  # Güvenlik odağıyla analiz et
  python3 scripts/dockerfile_analyzer.py Dockerfile --security

  # Belirli bir dizini kontrol et
  python3 scripts/dockerfile_analyzer.py path/to/Dockerfile
  ```

  ### `scripts/compose_validator.py`

  Docker-compose dosyalarını doğrulamak için CLI yardımcı programı.

  **Özellikler:**
  - Hizmet bağımlılığı doğrulaması
  - Healthcheck varlığı tespiti
  - Network konfigürasyonu analizi
  - Volume mount doğrulaması
  - Ortam değişkeni denetimi
  - Port çakışması tespiti
  - En iyi uygulama puanlaması

  **Kullanım:**
  ```bash
  # Bir compose dosyasını doğrula
  python3 scripts/compose_validator.py docker-compose.yml

  # JSON çıktısı
  python3 scripts/compose_validator.py docker-compose.yml --output json

  # Katı mod (uyarılarda başarısız ol)
  python3 scripts/compose_validator.py docker-compose.yml --strict
  ```

  ---

  ## Çok Aşamalı Derleme Desenleri

  ### Desen 1: Derlenmiş Dil (Go, Rust, C++)

  ```dockerfile
  # Derleme aşaması
  FROM golang:1.22-alpine AS builder
  WORKDIR /app
  COPY go.mod go.sum ./
  RUN go mod download
  COPY . .
  RUN CGO_ENABLED=0 go build -ldflags="-s -w" -o /app/server ./cmd/server

  # Çalışma zamanı aşaması
  FROM gcr.io/distroless/static-debian12
  COPY --from=builder /app/server /server
  USER nonroot:nonroot
  ENTRYPOINT ["/server"]
  ```

  ### Desen 2: Node.js / TypeScript

  ```dockerfile
  # Bağımlılıklar aşaması
  FROM node:20-alpine AS deps
  WORKDIR /app
  COPY package.json package-lock.json ./
  RUN npm ci --production=false

  # Derleme aşaması
  FROM deps AS builder
  COPY . .
  RUN npm run build

  # Çalışma zamanı aşaması
  FROM node:20-alpine
  WORKDIR /app
  RUN addgroup -g 1001 -S appgroup && adduser -S appuser -u 1001
  COPY --from=builder /app/dist ./dist
  COPY --from=deps /app/node_modules ./node_modules
  COPY package.json ./
  USER appuser
  EXPOSE 3000
  CMD ["node", "dist/index.js"]
  ```

  ### Desen 3: Python

  ```dockerfile
  # Derleme aşaması
  FROM python:3.12-slim AS builder
  WORKDIR /app
  COPY requirements.txt .
  RUN pip install --no-cache-dir --prefix=/install -r requirements.txt

  # Çalışma zamanı aşaması
  FROM python:3.12-slim
  WORKDIR /app
  RUN groupadd -r appgroup && useradd -r -g appgroup appuser
  COPY --from=builder /install /usr/local
  COPY . .
  USER appuser
  EXPOSE 8000
  CMD ["python", "-m", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
  ```

  ---

  ## Base İmaj Karar Ağacı

  ```
  Derlenmiş bir ikili mi (Go, Rust, C)?
  ├── Evet → distroless/static veya scratch
  └── Hayır
      ├── Hata ayıklama için shell gerekli mi?
      │   ├── Evet → alpine varyantı (örn. node:20-alpine)
      │   └── Hayır → distroless varyantı
      ├── glibc gerekli mi (musl değil)?
      │   ├── Evet → slim varyantı (örn. python:3.12-slim)
      │   └── Hayır → alpine varyantı
      └── Belirli OS paketleri gerekli mi?
          ├── Çok sayıda → debian-slim
          └── Az sayıda → alpine + apk add
  ```

  ---

  ## Proaktif Tetikleyiciler

  Sorulmadan bunları işaretle:

  - **Dockerfile :latest kullanıyor** → Belirli bir sürüm etiketine sabitlemeyi öner.
  - **.dockerignore yok** → Oluştur. En azından: `.git`, `node_modules`, `__pycache__`, `.env`.
  - **COPY . . bağımlılık yüklemesinden önce** → Önbellek bozulması. Bağımlılıkları ilk yüklemek için yeniden sırala.
  - **Root olarak çalışıyor** → USER talimatı ekle. Production'da istisnai durum yoktur.
  - **ENV veya ARG'da gizli bilgiler** → BuildKit gizli bağlantılarını kullan. Asla gizlilikleri katmanlara bake etme.
  - **1GB'tan büyük imaj** → Çok aşamalı derleme gerekli. Production imajının bu kadar büyük olmasının bir nedeni yok.
  - **Healthcheck yok** → Bir tane ekle. Orkestratorlar (Compose, K8s) yaşam döngüsü yönetimi için ona ihtiyaç duyar.
  - **apt-get aynı katmanda temizlenmemiş** → `rm -rf /var/lib/apt/lists/*` aynı RUN'da.

  ---

  ## Kurulum

  ### Tek satırlık komut (herhangi bir araç)
  ```bash
  git clone https://github.com/alirezarezvani/claude-skills.git
  cp -r claude-skills/engineering/docker-development ~/.claude/skills/
  ```

  ### Çok araçlı kurulum
  ```bash
  ./scripts/convert.sh --skill docker-development --tool codex|gemini|cursor|windsurf|openclaw
  ```

  ### OpenClaw
  ```bash
  clawhub install cs-docker-development
  ```

  ---

  ## İlişkili Beceriler

  - **senior-devops** — Daha geniş DevOps kapsamı (CI/CD, IaC, izleme). Tamamlayıcı — konteyner-spesifik çalışma için docker-development kullan, pipeline ve altyapı için senior-devops.
  - **senior-security** — Uygulama güvenliği. Tamamlayıcı — docker-development konteyner güvenliğini kapsar, senior-security uygulama düzeyindeki tehditleri kapsar.
  - **autoresearch-agent** — Docker derleme sürelerini veya imaj boyutlarını ölçülebilir deneyler olarak optimize edebilir.
  - **ci-cd-pipeline-builder** — Pipeline inşası. Tamamlayıcı — docker-development konteynerler oluşturur, ci-cd-pipeline-builder onları dağıtır.
---

# Docker Development

> Smaller images. Faster builds. Secure containers. No guesswork.

Opinionated Docker workflow that turns bloated Dockerfiles into production-grade containers. Covers optimization, multi-stage builds, compose orchestration, and security hardening.

Not a Docker tutorial — a set of concrete decisions about how to build containers that don't waste time, space, or attack surface.

---

## Slash Commands

| Command | What it does |
|---------|-------------|
| `/docker:optimize` | Analyze and optimize a Dockerfile for size, speed, and layer caching |
| `/docker:compose` | Generate or improve docker-compose.yml with best practices |
| `/docker:security` | Audit a Dockerfile or running container for security issues |

---

## When This Skill Activates

Recognize these patterns from the user:

- "Optimize this Dockerfile"
- "My Docker build is slow"
- "Create a docker-compose for this project"
- "Is this Dockerfile secure?"
- "Reduce my Docker image size"
- "Set up multi-stage builds"
- "Docker best practices for [language/framework]"
- Any request involving: Dockerfile, docker-compose, container, image size, build cache, Docker security

If the user has a Dockerfile or wants to containerize something → this skill applies.

---

## Workflow

### `/docker:optimize` — Dockerfile Optimization

1. **Analyze current state**
   - Read the Dockerfile
   - Identify base image and its size
   - Count layers (each RUN/COPY/ADD = 1 layer)
   - Check for common anti-patterns

2. **Apply optimization checklist**

   ```
   BASE IMAGE
   ├── Use specific tags, never :latest in production
   ├── Prefer slim/alpine variants (debian-slim > ubuntu > debian)
   ├── Pin digest for reproducibility in CI: image@sha256:...
   └── Match base to runtime needs (don't use python:3.12 for a compiled binary)

   LAYER OPTIMIZATION
   ├── Combine related RUN commands with && \
   ├── Order layers: least-changing first (deps before source code)
   ├── Clean package manager cache in the same RUN layer
   ├── Use .dockerignore to exclude unnecessary files
   └── Separate build deps from runtime deps

   BUILD CACHE
   ├── COPY dependency files before source code (package.json, requirements.txt, go.mod)
   ├── Install deps in a separate layer from code copy
   ├── Use BuildKit cache mounts: --mount=type=cache,target=/root/.cache
   └── Avoid COPY . . before dependency installation

   MULTI-STAGE BUILDS
   ├── Stage 1: build (full SDK, build tools, dev deps)
   ├── Stage 2: runtime (minimal base, only production artifacts)
   ├── COPY --from=builder only what's needed
   └── Final image should have NO build tools, NO source code, NO dev deps
   ```

3. **Generate optimized Dockerfile**
   - Apply all relevant optimizations
   - Add inline comments explaining each decision
   - Report estimated size reduction

4. **Validate**
   ```bash
   python3 scripts/dockerfile_analyzer.py Dockerfile
   ```

### `/docker:compose` — Docker Compose Configuration

1. **Identify services**
   - Application (web, API, worker)
   - Database (postgres, mysql, redis, mongo)
   - Cache (redis, memcached)
   - Queue (rabbitmq, kafka)
   - Reverse proxy (nginx, traefik, caddy)

2. **Apply compose best practices**

   ```
   SERVICES
   ├── Use depends_on with condition: service_healthy
   ├── Add healthchecks for every service
   ├── Set resource limits (mem_limit, cpus)
   ├── Use named volumes for persistent data
   └── Pin image versions

   NETWORKING
   ├── Create explicit networks (don't rely on default)
   ├── Separate frontend and backend networks
   ├── Only expose ports that need external access
   └── Use internal: true for backend-only networks

   ENVIRONMENT
   ├── Use env_file for secrets, not inline environment
   ├── Never commit .env files (add to .gitignore)
   ├── Use variable substitution: ${VAR:-default}
   └── Document all required env vars

   DEVELOPMENT vs PRODUCTION
   ├── Use compose profiles or override files
   ├── Dev: bind mounts for hot reload, debug ports exposed
   ├── Prod: named volumes, no debug ports, restart: unless-stopped
   └── docker-compose.override.yml for dev-only config
   ```

3. **Generate compose file**
   - Output docker-compose.yml with healthchecks, networks, volumes
   - Generate .env.example with all required variables documented
   - Add dev/prod profile annotations

### `/docker:security` — Container Security Audit

1. **Dockerfile audit**

   | Check | Severity | Fix |
   |-------|----------|-----|
   | Running as root | Critical | Add `USER nonroot` after creating user |
   | Using :latest tag | High | Pin to specific version |
   | Secrets in ENV/ARG | Critical | Use BuildKit secrets: `--mount=type=secret` |
   | COPY with broad glob | Medium | Use specific paths, add .dockerignore |
   | Unnecessary EXPOSE | Low | Only expose ports the app uses |
   | No HEALTHCHECK | Medium | Add HEALTHCHECK with appropriate interval |
   | Privileged instructions | High | Avoid `--privileged`, drop capabilities |
   | Package manager cache retained | Low | Clean in same RUN layer |

2. **Runtime security checks**

   | Check | Severity | Fix |
   |-------|----------|-----|
   | Container running as root | Critical | Set user in Dockerfile or compose |
   | Writable root filesystem | Medium | Use `read_only: true` in compose |
   | All capabilities retained | High | Drop all, add only needed: `cap_drop: [ALL]` |
   | No resource limits | Medium | Set `mem_limit` and `cpus` |
   | Host network mode | High | Use bridge or custom network |
   | Sensitive mounts | Critical | Never mount /etc, /var/run/docker.sock in prod |
   | No log driver configured | Low | Set `logging:` with size limits |

3. **Generate security report**
   ```
   SECURITY AUDIT — [Dockerfile/Image name]
   Date: [timestamp]

   CRITICAL: [count]
   HIGH:     [count]
   MEDIUM:   [count]
   LOW:      [count]

   [Detailed findings with fix recommendations]
   ```

---

## Tooling

### `scripts/dockerfile_analyzer.py`

CLI utility for static analysis of Dockerfiles.

**Features:**
- Layer count and optimization suggestions
- Base image analysis with size estimates
- Anti-pattern detection (15+ rules)
- Security issue flagging
- Multi-stage build detection and validation
- JSON and text output

**Usage:**
```bash
# Analyze a Dockerfile
python3 scripts/dockerfile_analyzer.py Dockerfile

# JSON output
python3 scripts/dockerfile_analyzer.py Dockerfile --output json

# Analyze with security focus
python3 scripts/dockerfile_analyzer.py Dockerfile --security

# Check a specific directory
python3 scripts/dockerfile_analyzer.py path/to/Dockerfile
```

### `scripts/compose_validator.py`

CLI utility for validating docker-compose files.

**Features:**
- Service dependency validation
- Healthcheck presence detection
- Network configuration analysis
- Volume mount validation
- Environment variable audit
- Port conflict detection
- Best practice scoring

**Usage:**
```bash
# Validate a compose file
python3 scripts/compose_validator.py docker-compose.yml

# JSON output
python3 scripts/compose_validator.py docker-compose.yml --output json

# Strict mode (fail on warnings)
python3 scripts/compose_validator.py docker-compose.yml --strict
```

---

## Multi-Stage Build Patterns

### Pattern 1: Compiled Language (Go, Rust, C++)

```dockerfile
# Build stage
FROM golang:1.22-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 go build -ldflags="-s -w" -o /app/server ./cmd/server

# Runtime stage
FROM gcr.io/distroless/static-debian12
COPY --from=builder /app/server /server
USER nonroot:nonroot
ENTRYPOINT ["/server"]
```

### Pattern 2: Node.js / TypeScript

```dockerfile
# Dependencies stage
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --production=false

# Build stage
FROM deps AS builder
COPY . .
RUN npm run build

# Runtime stage
FROM node:20-alpine
WORKDIR /app
RUN addgroup -g 1001 -S appgroup && adduser -S appuser -u 1001
COPY --from=builder /app/dist ./dist
COPY --from=deps /app/node_modules ./node_modules
COPY package.json ./
USER appuser
EXPOSE 3000
CMD ["node", "dist/index.js"]
```

### Pattern 3: Python

```dockerfile
# Build stage
FROM python:3.12-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir --prefix=/install -r requirements.txt

# Runtime stage
FROM python:3.12-slim
WORKDIR /app
RUN groupadd -r appgroup && useradd -r -g appgroup appuser
COPY --from=builder /install /usr/local
COPY . .
USER appuser
EXPOSE 8000
CMD ["python", "-m", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

---

## Base Image Decision Tree

```
Is it a compiled binary (Go, Rust, C)?
├── Yes → distroless/static or scratch
└── No
    ├── Need a shell for debugging?
    │   ├── Yes → alpine variant (e.g., node:20-alpine)
    │   └── No → distroless variant
    ├── Need glibc (not musl)?
    │   ├── Yes → slim variant (e.g., python:3.12-slim)
    │   └── No → alpine variant
    └── Need specific OS packages?
        ├── Many → debian-slim
        └── Few → alpine + apk add
```

---

## Proactive Triggers

Flag these without being asked:

- **Dockerfile uses :latest** → Suggest pinning to a specific version tag.
- **No .dockerignore** → Create one. At minimum: `.git`, `node_modules`, `__pycache__`, `.env`.
- **COPY . . before dependency install** → Cache bust. Reorder to install deps first.
- **Running as root** → Add USER instruction. No exceptions for production.
- **Secrets in ENV or ARG** → Use BuildKit secret mounts. Never bake secrets into layers.
- **Image over 1GB** → Multi-stage build required. No reason for a production image this large.
- **No healthcheck** → Add one. Orchestrators (Compose, K8s) need it for proper lifecycle management.
- **apt-get without cleanup in same layer** → `rm -rf /var/lib/apt/lists/*` in the same RUN.

---

## Installation

### One-liner (any tool)
```bash
git clone https://github.com/alirezarezvani/claude-skills.git
cp -r claude-skills/engineering/docker-development ~/.claude/skills/
```

### Multi-tool install
```bash
./scripts/convert.sh --skill docker-development --tool codex|gemini|cursor|windsurf|openclaw
```

### OpenClaw
```bash
clawhub install cs-docker-development
```

---

## Related Skills

- **senior-devops** — Broader DevOps scope (CI/CD, IaC, monitoring). Complementary — use docker-development for container-specific work, senior-devops for pipeline and infrastructure.
- **senior-security** — Application security. Complementary — docker-development covers container security, senior-security covers application-level threats.
- **autoresearch-agent** — Can optimize Docker build times or image sizes as measurable experiments.
- **ci-cd-pipeline-builder** — Pipeline construction. Complementary — docker-development builds the containers, ci-cd-pipeline-builder deploys them.
