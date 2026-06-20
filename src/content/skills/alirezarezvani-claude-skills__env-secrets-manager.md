---
name: "env-secrets-manager"
description_en: "Manage environment-variable hygiene and secrets safety across local development and production. Practical auditing, drift awareness, rotation readiness. Use when auditing .env files for committed secrets, planning a credential rotation, debugging missing-env-var production incidents, or hardening a new project against secrets leakage."
description_tr: "Geliştirme ve production ortamlarında environment variable yönetimi ve secrets güvenliğini sağlayın. Pratik denetim, değişim takibi ve döndürme hazırlığı sunar. .env dosyalarında committed secrets bulma, credential döndürme planlaması, production'da eksik ortam değişkeni sorunlarını çözme veya yeni projeleri secrets sızıntısına karşı güçlendirme işlemleri için kullanın."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 18572
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/env-secrets-manager/SKILL.md"
path: ".gemini/skills/env-secrets-manager/SKILL.md"
is_collection: false
body_length: 10282
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Env & Secrets Manager
  
  **Tier:** POWERFUL
  **Category:** Engineering
  **Domain:** Security / DevOps / Configuration Management
  
  ---
  
  ## Genel Bakış
  
  Yerel geliştirme ve üretim iş akışları arasında ortam değişkeni hijyeni ve sır güvenliğini yönetin. Bu beceri pratik denetimi, sürüklenme farkındalığı ve rotasyon hazırlığına odaklanır.
  
  ## Temel Yetenekler
  
  - `.env` ve `.env.example` yaşam döngüsü rehberliği
  - Depo çalışma ağaçları için sır sızıntısı algılaması
  - Olası kimlik bilgileri için önem derecesine dayalı bulgular
  - Rotasyon ve içerme için operasyonel işaretçiler
  - CI denetimleri için entegrasyona hazır çıktılar
  
  ---
  
  ## Ne Zaman Kullanılır
  
  - env/config dosyalarına dokunmuş commit'leri göndermeden önce
  - Güvenlik denetimleri ve olay önceliklendirmesi sırasında
  - Güvenli env kurallarını gereken yeni katkıda bulunanları ekleme sırasında
  - Bariz hardcoded sırlarının olmadığını doğrularken
  
  ---
  
  ## Hızlı Başlangıç
  
  ```bash
  # Depoyu sır sızıntıları için tarayın
  python3 scripts/env_auditor.py /path/to/repo
  
  # CI boru hatları için JSON çıktısı
  python3 scripts/env_auditor.py /path/to/repo --json
  ```
  
  ---
  
  ## Önerilen İş Akışı
  
  1. Depo köküne `scripts/env_auditor.py` çalıştırın.
  2. Öncelikle `critical` ve `high` bulguları ele alın.
  3. Gerçek kimlik bilgilerini döndürün ve açığa çıkan değerleri kaldırın.
  4. `.env.example` ve `.gitignore` dosyalarını gerektiği gibi güncelleyin.
  5. Pre-commit/CI sır tarama kapılarını ekleyin veya sıkılaştırın.
  
  ---
  
  ## Referans Belgeler
  
  - `references/validation-detection-rotation.md`
  - `references/secret-patterns.md`
  
  ---
  
  ## Yaygın Tuzaklar
  
  - `.env.example` dosyasında gerçek değerleri commit etmek
  - Bir sistemi döndürmek fakat aşağı yön tüketicileri kaçırmak
  - Hata ayıklama veya olay tepkisi sırasında sırları günlüğe kaydetmek
  - Şüpheli sızıntıları doğrulamadan düşük aciliyet olarak değerlendirmek
  
  ## En İyi Uygulamalar
  
  1. Üretim gerçek kaynağı olarak bir sır yöneticisi kullanın.
  2. Geliştirme env dosyalarını yerel tutun ve gitignore'da tutun.
  3. Merge'den önce CI'de algılamayı zorunlu kılın.
  4. Kimlik bilgisi rotasyonundan hemen sonra uygulama yollarını yeniden test edin.
  
  ---
  
  ## Bulut Sır Deposu Entegrasyonu
  
  Üretim uygulamaları asla `.env` dosyalarından veya container görüntülerine gömülü ortam değişkenlerinden sırları okumamalıdır. Bunun yerine adanmış bir sır deposu kullanın.
  
  ### Sağlayıcı Karşılaştırması
  
  | Sağlayıcı | En İyi Kullanım | Temel Özellik |
  |----------|----------|-------------|
  | **HashiCorp Vault** | Çoklu bulut / hibrit | Dinamik sırlar, politika motoru, takılabilir arka uçlar |
  | **AWS Secrets Manager** | AWS-native iş yükleri | Native Lambda/ECS/EKS entegrasyonu, otomatik RDS rotasyonu |
  | **Azure Key Vault** | Azure-native iş yükleri | Yönetilen HSM, Azure AD RBAC, sertifika yönetimi |
  | **GCP Secret Manager** | GCP-native iş yükleri | IAM tabanlı erişim, otomatik çoğaltma, sürümleme |
  
  ### Seçim Rehberliği
  
  - **Tek bulut sağlayıcısı** — bulut-native sır yöneticisini kullanın. IAM ile sıkı bir şekilde entegre olur, operasyonel yükü azaltır ve öz barındırmaktan daha az maliyetlidir.
  - **Çoklu bulut veya hibrit** — HashiCorp Vault kullanın. Ortamlar arasında tekdüzen bir API sağlar ve otomatik olarak süresi dolan dinamik sır oluşturmayı destekler (veritabanı kimlik bilgileri, bulut IAM anahtarları).
  - **Kubernetes ağır** — External Secrets Operator'u yukarıdaki herhangi bir arka uç ile birleştirin ve sırları hardcoded yapmadan K8s `Secret` nesnelerine senkronize edin.
  
  ### Uygulama Erişim Desenleri
  
  1. **SDK/API çekme** — uygulama startup'ta veya talep üzerine sağlayıcı SDK'sı aracılığıyla sır getirir.
  2. **Sidecar enjeksiyonu** — bir sidecar container'ı (örneğin, Vault Agent) sırları paylaşılan bir birime yazar veya ortam değişkenleri olarak enjekte eder.
  3. **Init container** — bir Kubernetes init container'ı ana container'ı başlamadan önce sırları getirir.
  4. **CSI driver** — sırlar Secrets Store CSI Driver'ı aracılığıyla dosya sistemi birimi olarak bağlanır.
  
  > **Çapraz referans:** Üretim kasa altyapısı desenleri, HA dağıtımı ve olağanüstü durum kurtarma prosedürleri için `engineering/secrets-vault-manager` dosyasına bakın.
  
  ---
  
  ## Sır Rotasyon İş Akışı
  
  Eski sırlar bir sorumluluğudur. Rotasyon, bir kimlik bilgisi sızsa dahi yararlı ömrünün sınırlı olmasını sağlar.
  
  ### Faz 1: Algılama
  
  - Sır deposu meta verilerinde sır oluşturma ve sona erme tarihlerini takip edin.
  - Sona ermeden 30, 14 ve 7 gün öncesinde uyarılar ayarlayın.
  - Kayıtlı rotasyon tarihi olmayan sırları işaretlemek için `scripts/env_auditor.py` kullanın.
  
  ### Faz 2: Rotasyon
  
  1. **Oluşturun** yeni bir kimlik bilgisi (API anahtarı, veritabanı şifresi, sertifika).
  2. **Dağıtın** yeni kimlik bilgisini tüm tüketicilere (uygulamalar, hizmetler, boru hatları) paralel olarak.
  3. **Doğrulayın** her tüketicinin yeni kimlik bilgisini kullanarak kimlik doğrulama yapabilmesini.
  4. **İptal edin** eski kimlik bilgisini yalnızca tüm tüketicilerin sağlıklı olduğu doğrulandıktan sonra.
  5. **Güncelleyin** meta verileri yeni rotasyon zaman damgası ve sonraki rotasyon tarihi ile.
  
  ### Faz 3: Otomasyon
  
  - **AWS Secrets Manager** — RDS, Redshift ve DocumentDB için yerleşik Lambda tabanlı rotasyonu kullanın.
  - **HashiCorp Vault** — TTL'ler ile dinamik sırları yapılandırın; kimlik bilgileri talep üzerine oluşturulur ve otomatik olarak süresi dolar.
  - **Azure Key Vault** — rotasyon işlevlerini tetiklemek için Event Grid bildirimlerini kullanın.
  - **GCP Secret Manager** — rotasyon mantığı için Cloud Functions'a bağlı Pub/Sub bildirimlerini kullanın.
  
  ### Acil Durum Rotasyon Kontrol Listesi
  
  Bir sırın sızıntısı doğrulandığında:
  
  1. **Derhal iptal edin** sağlayıcı düzeyinde tehlikeli kimlik bilgisini.
  2. Yeni bir kimlik bilgisi oluşturun ve tüm tüketicilere dağıtın.
  3. Açıklık penceresi sırasında yetkisiz kullanım için erişim günlüklerini denetleyin.
  4. Git geçmişi, CI günlükleri ve yapıt kayıtları için sızıntılı değeri tarayın.
  5. Kapsam, zaman çizelgesi ve düzeltme adımlarını belgelendiren bir olay raporu dosyalayın.
  6. Tekrarlanmasını önlemek için algılama kontrolleri gözden geçirin ve sıkılaştırın.
  
  ---
  
  ## CI/CD Sır Enjeksiyonu
  
  CI/CD boru hatlarındaki sırlar, günlüklerde, yapıtlarda veya pull request bağlamlarında açığa çıkmaktan kaçınmak için dikkatli bir şekilde ele alınmalıdır.
  
  ### GitHub Actions
  
  - **Depo sırları** veya **ortam sırları** kullanın `${{ secrets.SECRET_NAME }}` aracılığıyla.
  - Uzun süreli erişim anahtarları yerine **OIDC federasyonunu** tercih edin (`aws-actions/configure-aws-credentials` ile `role-to-assume`).
  - Gerekli gözden geçirenlerle ortam sırları üretim dağıtımları için onay kapıları ekler.
  - GitHub otomatik olarak günlüklerdeki sırları maskelemekle birlikte, gizli değerlerde `echo` veya `toJSON()` kullanmaktan kaçının.
  
  ### GitLab CI
  
  - Sırları **CI/CD değişkenleri** olarak `masked` ve `protected` bayraklarının etkin olduğu şekilde depolayın.
  - Değerleri GitLab'da depolamadan dinamik sır enjeksiyonu için **HashiCorp Vault entegrasyonunu** kullanın (`secrets:vault`).
  - Değişkenleri belirli ortamlara kapsam içine alın (`production`, `staging`) en az yetki ilkesini uygulamak için.
  
  ### Evrensel Desenler
  
  - **Asla echo veya yazdırmayın** boru hattı çıktısındaki gizli değerleri, hata ayıklama için bile.
  - **Kısa ömürlü jetonlar** kullanın (OIDC, STS AssumeRole) mümkün olan her yerde statik kimlik bilgileri yerine.
  - **PR erişimini kısıtlayın** — fork'lar veya güvenilmeyen dallardan tetiklenen boru hatlarına sırlar sunmayın.
  - **CI sırlarını döndürün** uygulama sırları ile aynı takvim üzerinde; boru hattı kimlik bilgileri de saldırı vektörleridir.
  - **Boru hattı günlüklerini** periyodik olarak denetleyin maskelemenin kaçırdığı olabilecek tesadüfi sır açığı için.
  
  ---
  
  ## Pre-Commit Sır Algılaması
  
  Sırları version control'e ulaşmadan yakalamak en uygun maliyetli savunmadır. İki leading aracı bu alanı kapsar.
  
  ### gitleaks
  
  ```toml
  # .gitleaks.toml — minimal configuration
  [extend]
  useDefault = true
  
  [[rules]]
  id = "custom-internal-token"
  description = "Internal service token pattern"
  regex = '''INTERNAL_TOKEN_[A-Za-z0-9]{32}'''
  secretGroup = 0
  ```
  
  - Yükle: `brew install gitleaks` veya GitHub releases'ten indir.
  - Pre-commit hook: `gitleaks git --pre-commit --staged`
  - Baseline taraması: `gitleaks detect --source . --report-path gitleaks-report.json`
  - `.gitleaksignore` dosyasında yanlış pozitifler yönet (satır başına bir parmak izi).
  
  ### detect-secrets
  
  ```bash
  # Baseline oluştur
  detect-secrets scan --all-files > .secrets.baseline
  
  # Pre-commit hook (pre-commit framework aracılığıyla)
  # .pre-commit-config.yaml
  repos:
    - repo: https://github.com/Yelp/detect-secrets
      rev: v1.5.0
      hooks:
        - id: detect-secrets
          args: ['--baseline', '.secrets.baseline']
  ```
  
  - Kuruluşa özel desenler için **custom plugins** destekler.
  - Denetim iş akışı: `detect-secrets audit .secrets.baseline` etkileşimli olarak gerçek/yanlış pozitifler işaretler.
  
  ### Yanlış Pozitif Yönetimi
  
  - `.gitleaksignore` veya `.secrets.baseline` dosyasını version control'de tutun böylece tüm takım istisnalar paylaşır.
  - Güvenlik denetimleri sırasında yanlış pozitif listelerini gözden geçirin — desenler zaman içinde gerçek sızıntıları maskeleye bilir.
  - Dosyaları geniş bir şekilde göz ardı etmek yerine regex desenlerini sıkılaştırmayı tercih edin.
  
  ---
  
  ## Denetim Günlüğü
  
  Hangi sırın kime ne zaman erişildiğini bilmek olay araştırması ve uyum için kritiktir.
  
  ### Bulut-Native Denetim İzleri
  
  | Sağlayıcı | Hizmet | Neler Yakalar |
  |----------|---------|-----------------|
  | **AWS** | CloudTrail | Her `GetSecretValue`, `DescribeSecret`, `RotateSecret` API çağrısı |
  | **Azure** | Activity Log + Diagnostic Logs | Key Vault erişim olayları, çağıran kimliği ve IP dahil |
  | **GCP** | Cloud Audit Logs | Secret Manager'ın veri erişim günlükleri principal ve zaman damgası ile |
  | **Vault** | Audit Backend | Tam istek/yanıt günlüğü (dosya, syslog veya socket arka ucu) |
  
  ### Uyarı Stratejisi
  
  - Beklenen kümedışı IP aralıklarından veya hizmet hesaplarından **erişimde uyar**.
  - Zaman penceresinde N'den fazla sırın erişilmesi (**toplu sır okumalarında**) uyarı.
  - Hiçbir CI/CD boru hattının çalışmadığı dağıtım pencereleri dışında **erişimde** uyarı.
  - Denetim günlüklerini SIEM'inize (Splunk, Datadog, Elastic) besleyin diğer güvenlik olayları ile korelasyon için.
  - Denetim günlüklerini erişim sertifikasyonunun bir parçası olarak üç ayda bir gözden geçirin.
  
  ---
  
  ## Çapraz Referanslar
  
  Bu beceri env hijyeni ve sır algılamasını kapsar. İlgili alanların daha derin kapsamı için bkz:
  
  | Beceri | Yol | İlişki |
  |-------|------|-------------|
  | **Secrets Vault Manager** | `engineering/secrets-vault-manager` | Üretim kasa altyapısı, HA dağıtımı, DR |
  | **Senior SecOps** | `engineering/senior-secops` | Güvenlik operasyonları perspektifi, olay tepkisi |
  | **CI/CD Pipeline Builder** | `engineering/ci-cd-pipeline-builder` | Boru hattı mimarisi, sır enjeksiyonu desenleri |
  | **Infrastructure as Code** | `engineering/infrastructure-as-code` | Terraform/Pulumi sır arka ucu yapılandırması |
  | **Container Orchestration** | `engineering/container-orchestration` | Kubernetes sır bağlanması, sealed secrets |
---

# Env & Secrets Manager

**Tier:** POWERFUL
**Category:** Engineering
**Domain:** Security / DevOps / Configuration Management

---

## Overview

Manage environment-variable hygiene and secrets safety across local development and production workflows. This skill focuses on practical auditing, drift awareness, and rotation readiness.

## Core Capabilities

- `.env` and `.env.example` lifecycle guidance
- Secret leak detection for repository working trees
- Severity-based findings for likely credentials
- Operational pointers for rotation and containment
- Integration-ready outputs for CI checks

---

## When to Use

- Before pushing commits that touched env/config files
- During security audits and incident triage
- When onboarding contributors who need safe env conventions
- When validating that no obvious secrets are hardcoded

---

## Quick Start

```bash
# Scan a repository for likely secret leaks
python3 scripts/env_auditor.py /path/to/repo

# JSON output for CI pipelines
python3 scripts/env_auditor.py /path/to/repo --json
```

---

## Recommended Workflow

1. Run `scripts/env_auditor.py` on the repository root.
2. Prioritize `critical` and `high` findings first.
3. Rotate real credentials and remove exposed values.
4. Update `.env.example` and `.gitignore` as needed.
5. Add or tighten pre-commit/CI secret scanning gates.

---

## Reference Docs

- `references/validation-detection-rotation.md`
- `references/secret-patterns.md`

---

## Common Pitfalls

- Committing real values in `.env.example`
- Rotating one system but missing downstream consumers
- Logging secrets during debugging or incident response
- Treating suspected leaks as low urgency without validation

## Best Practices

1. Use a secret manager as the production source of truth.
2. Keep dev env files local and gitignored.
3. Enforce detection in CI before merge.
4. Re-test application paths immediately after credential rotation.

---

## Cloud Secret Store Integration

Production applications should never read secrets from `.env` files or environment variables baked into container images. Use a dedicated secret store instead.

### Provider Comparison

| Provider | Best For | Key Feature |
|----------|----------|-------------|
| **HashiCorp Vault** | Multi-cloud / hybrid | Dynamic secrets, policy engine, pluggable backends |
| **AWS Secrets Manager** | AWS-native workloads | Native Lambda/ECS/EKS integration, automatic RDS rotation |
| **Azure Key Vault** | Azure-native workloads | Managed HSM, Azure AD RBAC, certificate management |
| **GCP Secret Manager** | GCP-native workloads | IAM-based access, automatic replication, versioning |

### Selection Guidance

- **Single cloud provider** — use the cloud-native secret manager. It integrates tightly with IAM, reduces operational overhead, and costs less than self-hosting.
- **Multi-cloud or hybrid** — use HashiCorp Vault. It provides a uniform API across environments and supports dynamic secret generation (database credentials, cloud IAM keys) that expire automatically.
- **Kubernetes-heavy** — combine External Secrets Operator with any backend above to sync secrets into K8s `Secret` objects without hardcoding.

### Application Access Patterns

1. **SDK/API pull** — application fetches secret at startup or on-demand via provider SDK.
2. **Sidecar injection** — a sidecar container (e.g., Vault Agent) writes secrets to a shared volume or injects them as environment variables.
3. **Init container** — a Kubernetes init container fetches secrets before the main container starts.
4. **CSI driver** — secrets mount as a filesystem volume via the Secrets Store CSI Driver.

> **Cross-reference:** See `engineering/secrets-vault-manager` for production vault infrastructure patterns, HA deployment, and disaster recovery procedures.

---

## Secret Rotation Workflow

Stale secrets are a liability. Rotation ensures that even if a credential leaks, its useful lifetime is bounded.

### Phase 1: Detection

- Track secret creation and expiry dates in your secret store metadata.
- Set alerts at 30, 14, and 7 days before expiry.
- Use `scripts/env_auditor.py` to flag secrets with no recorded rotation date.

### Phase 2: Rotation

1. **Generate** a new credential (API key, database password, certificate).
2. **Deploy** the new credential to all consumers (apps, services, pipelines) in parallel.
3. **Verify** each consumer can authenticate using the new credential.
4. **Revoke** the old credential only after all consumers are confirmed healthy.
5. **Update** metadata with the new rotation timestamp and next rotation date.

### Phase 3: Automation

- **AWS Secrets Manager** — use built-in Lambda-based rotation for RDS, Redshift, and DocumentDB.
- **HashiCorp Vault** — configure dynamic secrets with TTLs; credentials are generated on-demand and auto-expire.
- **Azure Key Vault** — use Event Grid notifications to trigger rotation functions.
- **GCP Secret Manager** — use Pub/Sub notifications tied to Cloud Functions for rotation logic.

### Emergency Rotation Checklist

When a secret is confirmed leaked:

1. **Immediately revoke** the compromised credential at the provider level.
2. Generate and deploy a replacement credential to all consumers.
3. Audit access logs for unauthorized usage during the exposure window.
4. Scan git history, CI logs, and artifact registries for the leaked value.
5. File an incident report documenting scope, timeline, and remediation steps.
6. Review and tighten detection controls to prevent recurrence.

---

## CI/CD Secret Injection

Secrets in CI/CD pipelines require careful handling to avoid exposure in logs, artifacts, or pull request contexts.

### GitHub Actions

- Use **repository secrets** or **environment secrets** via `${{ secrets.SECRET_NAME }}`.
- Prefer **OIDC federation** (`aws-actions/configure-aws-credentials` with `role-to-assume`) over long-lived access keys.
- Environment secrets with required reviewers add approval gates for production deployments.
- GitHub automatically masks secrets in logs, but avoid `echo` or `toJSON()` on secret values.

### GitLab CI

- Store secrets as **CI/CD variables** with the `masked` and `protected` flags enabled.
- Use **HashiCorp Vault integration** (`secrets:vault`) for dynamic secret injection without storing values in GitLab.
- Scope variables to specific environments (`production`, `staging`) to enforce least privilege.

### Universal Patterns

- **Never echo or print** secret values in pipeline output, even for debugging.
- **Use short-lived tokens** (OIDC, STS AssumeRole) instead of static credentials wherever possible.
- **Restrict PR access** — do not expose secrets to pipelines triggered by forks or untrusted branches.
- **Rotate CI secrets** on the same schedule as application secrets; pipeline credentials are attack vectors too.
- **Audit pipeline logs** periodically for accidental secret exposure that masking may have missed.

---

## Pre-Commit Secret Detection

Catching secrets before they reach version control is the most cost-effective defense. Two leading tools cover this space.

### gitleaks

```toml
# .gitleaks.toml — minimal configuration
[extend]
useDefault = true

[[rules]]
id = "custom-internal-token"
description = "Internal service token pattern"
regex = '''INTERNAL_TOKEN_[A-Za-z0-9]{32}'''
secretGroup = 0
```

- Install: `brew install gitleaks` or download from GitHub releases.
- Pre-commit hook: `gitleaks git --pre-commit --staged`
- Baseline scanning: `gitleaks detect --source . --report-path gitleaks-report.json`
- Manage false positives in `.gitleaksignore` (one fingerprint per line).

### detect-secrets

```bash
# Generate baseline
detect-secrets scan --all-files > .secrets.baseline

# Pre-commit hook (via pre-commit framework)
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/Yelp/detect-secrets
    rev: v1.5.0
    hooks:
      - id: detect-secrets
        args: ['--baseline', '.secrets.baseline']
```

- Supports **custom plugins** for organization-specific patterns.
- Audit workflow: `detect-secrets audit .secrets.baseline` interactively marks true/false positives.

### False Positive Management

- Maintain `.gitleaksignore` or `.secrets.baseline` in version control so the whole team shares exclusions.
- Review false positive lists during security audits — patterns may mask real leaks over time.
- Prefer tightening regex patterns over broadly ignoring files.

---

## Audit Logging

Knowing who accessed which secret and when is critical for incident investigation and compliance.

### Cloud-Native Audit Trails

| Provider | Service | What It Captures |
|----------|---------|-----------------|
| **AWS** | CloudTrail | Every `GetSecretValue`, `DescribeSecret`, `RotateSecret` API call |
| **Azure** | Activity Log + Diagnostic Logs | Key Vault access events, including caller identity and IP |
| **GCP** | Cloud Audit Logs | Data access logs for Secret Manager with principal and timestamp |
| **Vault** | Audit Backend | Full request/response logging (file, syslog, or socket backend) |

### Alerting Strategy

- Alert on **access from unknown IP ranges** or service accounts outside the expected set.
- Alert on **bulk secret reads** (more than N secrets accessed within a time window).
- Alert on **access outside deployment windows** when no CI/CD pipeline is running.
- Feed audit logs into your SIEM (Splunk, Datadog, Elastic) for correlation with other security events.
- Review audit logs quarterly as part of access recertification.

---

## Cross-References

This skill covers env hygiene and secret detection. For deeper coverage of related domains, see:

| Skill | Path | Relationship |
|-------|------|-------------|
| **Secrets Vault Manager** | `engineering/secrets-vault-manager` | Production vault infrastructure, HA deployment, DR |
| **Senior SecOps** | `engineering/senior-secops` | Security operations perspective, incident response |
| **CI/CD Pipeline Builder** | `engineering/ci-cd-pipeline-builder` | Pipeline architecture, secret injection patterns |
| **Infrastructure as Code** | `engineering/infrastructure-as-code` | Terraform/Pulumi secret backend configuration |
| **Container Orchestration** | `engineering/container-orchestration` | Kubernetes secret mounting, sealed secrets |
