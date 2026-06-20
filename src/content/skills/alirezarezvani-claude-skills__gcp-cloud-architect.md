---
name: "gcp-cloud-architect"
description_en: "Design GCP architectures for startups and enterprises. Use when asked to design Google Cloud infrastructure, deploy to GKE or Cloud Run, configure BigQuery pipelines, optimize GCP costs, or migrate to GCP. Covers Cloud Run, GKE, Cloud Functions, Cloud SQL, BigQuery, and cost optimization."
description_tr: "GCP mimarileri tasarla ve startuplardan kurumsal ölçekte projeleri yönet. Google Cloud altyapısı tasarlamak, GKE veya Cloud Run'a deploy etmek, BigQuery pipeline'ları yapılandırmak, GCP maliyetlerini optimize etmek veya GCP'ye migration yapmak gerektiğinde kullan. Cloud Run, GKE, Cloud Functions, Cloud SQL, BigQuery ve maliyet optimizasyonunu kapsar."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18572
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/gcp-cloud-architect/SKILL.md"
path: ".gemini/skills/gcp-cloud-architect/SKILL.md"
is_collection: false
body_length: 12552
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # GCP Bulut Mimarı
  
  Google Cloud'da ölçeklenebilir, uygun maliyetli mimariler tasarlayın; startuplar ve kuruluşlar için altyapı-kod şablonları sunun.
  
  ---
  
  ## İş Akışı
  
  ### Adım 1: Gereksinimleri Toplayın
  
  Uygulama özelliklerini toplayın:
  
  ```
  - Uygulama türü (web app, mobile backend, data pipeline, SaaS)
  - Beklenen kullanıcı sayısı ve saniye başına istek sayısı
  - Bütçe kısıtlamaları (aylık harcama limiti)
  - Takım büyüklüğü ve GCP deneyim seviyesi
  - Uyum gereksinimleri (GDPR, HIPAA, SOC 2)
  - Kullanılabilirlik gereksinimleri (SLA, RPO/RTO)
  ```
  
  ### Adım 2: Mimarı Tasarlayın
  
  Desen önerilerine ulaşmak için mimari tasarımcıyı çalıştırın:
  
  ```bash
  python scripts/architecture_designer.py --input requirements.json
  ```
  
  **Örnek çıktı:**
  
  ```json
  {
    "recommended_pattern": "serverless_web",
    "service_stack": ["Cloud Storage", "Cloud CDN", "Cloud Run", "Firestore", "Identity Platform"],
    "estimated_monthly_cost_usd": 30,
    "pros": ["Low ops overhead", "Pay-per-use", "Auto-scaling", "No cold starts on Cloud Run min instances"],
    "cons": ["Vendor lock-in", "Regional limitations", "Eventual consistency with Firestore"]
  }
  ```
  
  Önerilen desenlerden seçin:
  - **Serverless Web**: Cloud Storage + Cloud CDN + Cloud Run + Firestore
  - **GKE'de Mikrohizmetler**: GKE Autopilot + Cloud SQL + Memorystore + Cloud Pub/Sub
  - **Serverless Veri Pipeline**: Pub/Sub + Dataflow + BigQuery + Looker
  - **ML Platformu**: Vertex AI + Cloud Storage + BigQuery + Cloud Functions
  
  Detaylı desen özellikleri için `references/architecture_patterns.md` sayfasına bakın.
  
  **Doğrulama kontrol noktası:** Önerilen desenin takımın işletim olgunluğu ve uyum gereksinimlerine uygun olduğunu doğrulayıp Adım 3'e geçin.
  
  ### Adım 3: Maliyeti Tahmin Edin
  
  Tahmini maliyetleri ve optimizasyon fırsatlarını analiz edin:
  
  ```bash
  python scripts/cost_optimizer.py --resources current_setup.json --monthly-spend 2000
  ```
  
  **Örnek çıktı:**
  
  ```json
  {
    "current_monthly_usd": 2000,
    "recommendations": [
      { "action": "Right-size Cloud SQL db-custom-4-16384 to db-custom-2-8192", "savings_usd": 380, "priority": "high" },
      { "action": "Purchase 1-yr committed use discount for GKE nodes", "savings_usd": 290, "priority": "high" },
      { "action": "Move Cloud Storage objects >90 days to Nearline", "savings_usd": 75, "priority": "medium" }
    ],
    "total_potential_savings_usd": 745
  }
  ```
  
  Çıktı şunları içerir:
  - Servise göre aylık maliyet dağılımı
  - Makine tipini yeniden boyutlandırma önerileri
  - Taahhüt edilen kullanım indirim fırsatları
  - Sürdürülen kullanım indirim analizi
  - Potansiyel aylık tasarruflar
  
  Detaylı tahminler için [GCP Fiyatlandırma Hesaplayıcısını](https://cloud.google.com/products/calculator) kullanın.
  
  ### Adım 4: IaC Oluşturun
  
  Seçilen desen için altyapı-kod oluşturun:
  
  ```bash
  python scripts/deployment_manager.py --app-name my-app --pattern serverless_web --region us-central1
  ```
  
  **Örnek Terraform HCL çıktısı (Cloud Run + Firestore):**
  
  ```hcl
  terraform {
    required_providers {
      google = {
        source  = "hashicorp/google"
        version = "~> 5.0"
      }
    }
  }
  
  provider "google" {
    project = var.project_id
    region  = var.region
  }
  
  variable "project_id" {
    description = "GCP project ID"
    type        = string
  }
  
  variable "region" {
    description = "GCP region"
    type        = string
    default     = "us-central1"
  }
  
  resource "google_cloud_run_v2_service" "api" {
    name     = "${var.environment}-${var.app_name}-api"
    location = var.region
  
    template {
      containers {
        image = "gcr.io/${var.project_id}/${var.app_name}:latest"
        resources {
          limits = {
            cpu    = "1000m"
            memory = "512Mi"
          }
        }
        env {
          name  = "FIRESTORE_PROJECT"
          value = var.project_id
        }
      }
      scaling {
        min_instance_count = 0
        max_instance_count = 10
      }
    }
  }
  
  resource "google_firestore_database" "default" {
    project     = var.project_id
    name        = "(default)"
    location_id = var.region
    type        = "FIRESTORE_NATIVE"
  }
  ```
  
  **Örnek gcloud CLI dağıtımı:**
  
  ```bash
  # Cloud Run service'i dağıt
  gcloud run deploy my-app-api \
    --image gcr.io/$PROJECT_ID/my-app:latest \
    --region us-central1 \
    --platform managed \
    --allow-unauthenticated \
    --memory 512Mi \
    --cpu 1 \
    --min-instances 0 \
    --max-instances 10
  
  # Firestore veritabanı oluştur
  gcloud firestore databases create --location=us-central1
  ```
  
  > Cloud CDN, Identity Platform, IAM ve Cloud Monitoring'i içeren tam şablonlar `deployment_manager.py` tarafından oluşturulur ve `references/architecture_patterns.md` içinde de mevcuttur.
  
  ### Adım 5: CI/CD'yi Yapılandırın
  
  Cloud Build veya GitHub Actions ile otomatik dağıtımı ayarlayın:
  
  ```yaml
  # cloudbuild.yaml
  steps:
    - name: 'gcr.io/cloud-builders/docker'
      args: ['build', '-t', 'gcr.io/$PROJECT_ID/my-app:$COMMIT_SHA', '.']
  
    - name: 'gcr.io/cloud-builders/docker'
      args: ['push', 'gcr.io/$PROJECT_ID/my-app:$COMMIT_SHA']
  
    - name: 'gcr.io/google.com/cloudsdktool/cloud-sdk'
      entrypoint: gcloud
      args:
        - 'run'
        - 'deploy'
        - 'my-app-api'
        - '--image=gcr.io/$PROJECT_ID/my-app:$COMMIT_SHA'
        - '--region=us-central1'
        - '--platform=managed'
  
  images:
    - 'gcr.io/$PROJECT_ID/my-app:$COMMIT_SHA'
  ```
  
  ```bash
  # Repository'yi bağla ve trigger oluştur
  gcloud builds triggers create github \
    --repo-name=my-app \
    --repo-owner=my-org \
    --branch-pattern="^main$" \
    --build-config=cloudbuild.yaml
  ```
  
  ### Adım 6: Güvenlik İncelemesi
  
  Güvenlik yapılandırmasını doğrulayın:
  
  ```bash
  # IAM bağlamalarını gözden geçir
  gcloud projects get-iam-policy $PROJECT_ID --format=json
  
  # Hizmet hesabı izinlerini kontrol et
  gcloud iam service-accounts list --project=$PROJECT_ID
  
  # VPC Service Controls'i doğrula (gerekirse)
  gcloud access-context-manager perimeters list --policy=$POLICY_ID
  ```
  
  **Güvenlik kontrol listesi:**
  - IAM rolleri en düşük ayrıcalık ilkesini izler (temel roller yerine önceden tanımlı roller tercih edilir)
  - Hizmet hesapları GKE için Workload Identity kullanır
  - Hassas API'ler için VPC Service Controls yapılandırılır
  - Müşteri tarafından yönetilen şifreleme için Cloud KMS şifreleme anahtarları
  - Tüm yönetici aktiviteleri için Cloud Audit Logs etkindir
  - Genel erişimi kısıtlamak için Organizasyon politikaları
  - Tüm kimlik bilgileri için Secret Manager kullanılır
  
  **Dağıtım başarısız olursa:**
  
  1. Başarısızlık nedenini kontrol edin:
     ```bash
     gcloud run services describe my-app-api --region us-central1
     gcloud logging read "resource.type=cloud_run_revision" --limit=20
     ```
  2. Cloud Logging'de uygulama hatalarını gözden geçirin.
  3. Yapılandırmayı veya container image'ını düzeltip.
  4. Yeniden dağıtın:
     ```bash
     gcloud run deploy my-app-api --image gcr.io/$PROJECT_ID/my-app:latest --region us-central1
     ```
  
  **Sık başarısızlık nedenleri:**
  - IAM izin hataları -- hizmet hesabı rolleri ve `--allow-unauthenticated` bayrağını doğrulayın
  - Kota aşıldı -- IAM & Admin > Quotas aracılığıyla kota artışı isteyin
  - Container başlatma başarısızlığı -- container log'larını ve health check yapılandırmasını kontrol edin
  - Bölge etkin değil -- `gcloud services enable` ile gerekli API'leri etkinleştirin
  
  ---
  
  ## Araçlar
  
  ### architecture_designer.py
  
  İş yükü gereksinimlerine göre GCP servislerini önerir.
  
  ```bash
  python scripts/architecture_designer.py --input requirements.json --output design.json
  ```
  
  **Girdi:** Uygulama türü, ölçek, bütçe, uyum gereksinimleri içeren JSON
  **Çıktı:** Önerilen desen, servis yığını, maliyet tahmini, avantajlar/dezavantajlar
  
  ### cost_optimizer.py
  
  GCP kaynaklarını maliyet tasarrufu açısından analiz eder.
  
  ```bash
  python scripts/cost_optimizer.py --resources inventory.json --monthly-spend 5000
  ```
  
  **Çıktı:** Öneriler:
  - Boştaki kaynakları kaldırma
  - Makine tipi yeniden boyutlandırma
  - Taahhüt edilen kullanım indirimler
  - Depolama sınıfı geçişleri
  - Network çıkış optimizasyonu
  
  ### deployment_manager.py
  
  gcloud CLI dağıtım scriptleri ve Terraform yapılandırmaları oluşturur.
  
  ```bash
  python scripts/deployment_manager.py --app-name my-app --pattern serverless_web --region us-central1
  ```
  
  **Çıktı:** Üretim hazır dağıtım scriptleri:
  - Cloud Run veya GKE dağıtımı
  - Firestore veya Cloud SQL kurulumu
  - Identity Platform yapılandırması
  - En düşük ayrıcalık ile IAM rolleri
  - Cloud Monitoring ve Logging
  
  ---
  
  ## Hızlı Başlangıç
  
  ### Cloud Run'da Web Uygulaması (< 100$/ay)
  
  ```
  Soru: "Mobil uygulama için 1000 kullanıcılı serverless web backend tasarlayın"
  
  Sonuç:
  - API için Cloud Run (otomatik ölçekleme, minimum instance'lar ile cold start yok)
  - Veri için Firestore (işlem başına ödeme)
  - Kimlik doğrulama için Identity Platform
  - Statik varlıklar için Cloud Storage + Cloud CDN
  - Tahmini: 15-40$/ay
  ```
  
  ### GKE'de Mikrohizmetler (500-2000$/ay)
  
  ```
  Soru: "50k kullanıcılı SaaS platformu için ölçeklenebilir mimari tasarlayın"
  
  Sonuç:
  - Containerize iş yükleri için GKE Autopilot
  - Okuma replicaları ile Cloud SQL (PostgreSQL)
  - Oturum önbelleği için Memorystore (Redis)
  - Global sunuş için Cloud CDN
  - CI/CD için Cloud Build
  - Çok bölgeli dağıtım
  ```
  
  ### Serverless Veri Pipeline
  
  ```
  Soru: "Olay verisi için gerçek zamanlı analitik pipeline tasarlayın"
  
  Sonuç:
  - Olay yutma için Pub/Sub
  - Akış işleme için Dataflow (Apache Beam)
  - Analitik ve veri ambarı için BigQuery
  - Panolar için Looker
  - Hafif dönüşümler için Cloud Functions
  ```
  
  ### ML Platformu
  
  ```
  Soru: "Model eğitimi ve sunumu için makine öğrenmesi platformu tasarlayın"
  
  Sonuç:
  - Eğitim ve tahmin için Vertex AI
  - Veri setleri ve model yapıtları için Cloud Storage
  - Özellik deposu için BigQuery
  - Ön işleme tetikleyicileri için Cloud Functions
  - Model drift tespiti için Cloud Monitoring
  ```
  
  ---
  
  ## Girdi Gereksinimleri
  
  Mimari tasarım için şu ayrıntıları sağlayın:
  
  | Gereksinim | Açıklama | Örnek |
  |-------------|-------------|---------|
  | Uygulama türü | Neyi inşa ettiğiniz | SaaS platformu, mobil backend |
  | Beklenen ölçek | Kullanıcılar, istek/sn | 10k kullanıcı, 100 RPS |
  | Bütçe | Aylık GCP limiti | 500$/ay max |
  | Takım bağlamı | Boyut, GCP deneyimi | 3 geliştirici, orta seviye |
  | Uyum | Düzenleyici gereksinimler | HIPAA, GDPR, SOC 2 |
  | Kullanılabilirlik | Hizmet süresi gereksinimleri | 99.9% SLA, 1 saat RPO |
  
  **JSON Formatı:**
  
  ```json
  {
    "application_type": "saas_platform",
    "expected_users": 10000,
    "requests_per_second": 100,
    "budget_monthly_usd": 500,
    "team_size": 3,
    "gcp_experience": "intermediate",
    "compliance": ["SOC2"],
    "availability_sla": "99.9%"
  }
  ```
  
  ---
  
  ## Çıktı Formatları
  
  ### Mimari Tasarım
  
  - Gerekçeyle desen önerisi
  - Servis yığını diyagramı (ASCII)
  - Aylık maliyet tahmini ve ödünleşimler
  
  ### IaC Şablonları
  
  - **Terraform HCL**: Üretim hazır Google provider yapılandırmaları
  - **gcloud CLI**: Script olarak dağıtım komutları
  - **Cloud Build YAML**: CI/CD pipeline tanımlamaları
  
  ### Maliyet Analizi
  
  - Optimizasyon önerileriyle birlikte mevcut harcama dağılımı
  - Öncelik eylem listesi (yüksek/orta/düşük) ve uygulama kontrol listesi
  
  ---
  
  ## Anti-Desenler
  
  | Anti-Desen | Neden Başarısız Olur | Daha İyi Yaklaşım |
  |---|---|---|
  | Üretim için varsayılan VPC kullanma | Yalıtım yok, paylaşılan firewall kuralları | Özel VPC'yi özel subnet'ler ile oluşturun |
  | GKE node pool'ları aşırı sağlama | Boştaki kapasite üzerinde harcanmış maliyet | GKE Autopilot veya cluster autoscaler kullanın |
  | Sırları ortam değişkenlerinde depolama | Cloud Console, log'larda görünür | Secret Manager'ı Workload Identity ile kullanın |
  | Sürdürülen kullanım indirimlerini görmezden gelme | %20-30 otomatik tasarrufları kaçırma | Tutarlı baseline kullanımı için VM'leri yeniden boyutlandırın |
  | SaaS için tek bölgeli dağıtım | Bir bölge kesintisi = tam kesintiyi | Cloud Load Balancing ile çok bölgeli kullanın |
  | Ağır iş yükleri için BigQuery on-demand kullanma | Ölçekte tahmin edilemeyen maliyetler | Tutarlı iş yükleri için BigQuery slot'larını (sabit fiyat) kullanın |
  | Uzun görevler için Cloud Functions çalıştırma | 9 dakikalık zaman sınırı, cold start'lar | 60 saniyeden uzun görevler için Cloud Run kullanın |
  
  ---
  
  ## Çapraz Referanslar
  
  | Beceri | İlişki |
  |-------|-------------|
  | `engineering-team/aws-solution-architect` | AWS eşdeğeri -- aynı 6 adımlı iş akışı, farklı servisler |
  | `engineering-team/azure-cloud-architect` | Azure eşdeğeri -- bulut üçlemesini tamamlar |
  | `engineering-team/senior-devops` | Daha geniş DevOps kapsamı -- pipeline'lar, monitoring, containerization |
  | `engineering/terraform-patterns` | IaC uygulaması -- GCP'yi hedefleyen Terraform modülleri için kullanın |
  | `engineering/ci-cd-pipeline-builder` | Pipeline inşası -- Cloud Build ve dağıtımı otomatikleştirir |
  
  ---
  
  ## Referans Belgeleri
  
  | Belge | İçerik |
  |----------|----------|
  | `references/architecture_patterns.md` | 6 desen: serverless, GKE mikrohizmetler, üç katmanlı, veri pipeline, ML platformu, çok bölgeli |
  | `references/service_selection.md` | Compute, veritabanı, depolama, messaging için karar matrisleri |
  | `references/best_practices.md` | Adlandırma, etiketler, IAM, networking, monitoring, olağanüstü durum kurtarma |
---

# GCP Cloud Architect

Design scalable, cost-effective Google Cloud architectures for startups and enterprises with infrastructure-as-code templates.

---

## Workflow

### Step 1: Gather Requirements

Collect application specifications:

```
- Application type (web app, mobile backend, data pipeline, SaaS)
- Expected users and requests per second
- Budget constraints (monthly spend limit)
- Team size and GCP experience level
- Compliance requirements (GDPR, HIPAA, SOC 2)
- Availability requirements (SLA, RPO/RTO)
```

### Step 2: Design Architecture

Run the architecture designer to get pattern recommendations:

```bash
python scripts/architecture_designer.py --input requirements.json
```

**Example output:**

```json
{
  "recommended_pattern": "serverless_web",
  "service_stack": ["Cloud Storage", "Cloud CDN", "Cloud Run", "Firestore", "Identity Platform"],
  "estimated_monthly_cost_usd": 30,
  "pros": ["Low ops overhead", "Pay-per-use", "Auto-scaling", "No cold starts on Cloud Run min instances"],
  "cons": ["Vendor lock-in", "Regional limitations", "Eventual consistency with Firestore"]
}
```

Select from recommended patterns:
- **Serverless Web**: Cloud Storage + Cloud CDN + Cloud Run + Firestore
- **Microservices on GKE**: GKE Autopilot + Cloud SQL + Memorystore + Cloud Pub/Sub
- **Serverless Data Pipeline**: Pub/Sub + Dataflow + BigQuery + Looker
- **ML Platform**: Vertex AI + Cloud Storage + BigQuery + Cloud Functions

See `references/architecture_patterns.md` for detailed pattern specifications.

**Validation checkpoint:** Confirm the recommended pattern matches the team's operational maturity and compliance requirements before proceeding to Step 3.

### Step 3: Estimate Cost

Analyze estimated costs and optimization opportunities:

```bash
python scripts/cost_optimizer.py --resources current_setup.json --monthly-spend 2000
```

**Example output:**

```json
{
  "current_monthly_usd": 2000,
  "recommendations": [
    { "action": "Right-size Cloud SQL db-custom-4-16384 to db-custom-2-8192", "savings_usd": 380, "priority": "high" },
    { "action": "Purchase 1-yr committed use discount for GKE nodes", "savings_usd": 290, "priority": "high" },
    { "action": "Move Cloud Storage objects >90 days to Nearline", "savings_usd": 75, "priority": "medium" }
  ],
  "total_potential_savings_usd": 745
}
```

Output includes:
- Monthly cost breakdown by service
- Right-sizing recommendations
- Committed use discount opportunities
- Sustained use discount analysis
- Potential monthly savings

Use the [GCP Pricing Calculator](https://cloud.google.com/products/calculator) for detailed estimates.

### Step 4: Generate IaC

Create infrastructure-as-code for the selected pattern:

```bash
python scripts/deployment_manager.py --app-name my-app --pattern serverless_web --region us-central1
```

**Example Terraform HCL output (Cloud Run + Firestore):**

```hcl
terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

variable "project_id" {
  description = "GCP project ID"
  type        = string
}

variable "region" {
  description = "GCP region"
  type        = string
  default     = "us-central1"
}

resource "google_cloud_run_v2_service" "api" {
  name     = "${var.environment}-${var.app_name}-api"
  location = var.region

  template {
    containers {
      image = "gcr.io/${var.project_id}/${var.app_name}:latest"
      resources {
        limits = {
          cpu    = "1000m"
          memory = "512Mi"
        }
      }
      env {
        name  = "FIRESTORE_PROJECT"
        value = var.project_id
      }
    }
    scaling {
      min_instance_count = 0
      max_instance_count = 10
    }
  }
}

resource "google_firestore_database" "default" {
  project     = var.project_id
  name        = "(default)"
  location_id = var.region
  type        = "FIRESTORE_NATIVE"
}
```

**Example gcloud CLI deployment:**

```bash
# Deploy Cloud Run service
gcloud run deploy my-app-api \
  --image gcr.io/$PROJECT_ID/my-app:latest \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10

# Create Firestore database
gcloud firestore databases create --location=us-central1
```

> Full templates including Cloud CDN, Identity Platform, IAM, and Cloud Monitoring are generated by `deployment_manager.py` and also available in `references/architecture_patterns.md`.

### Step 5: Configure CI/CD

Set up automated deployment with Cloud Build or GitHub Actions:

```yaml
# cloudbuild.yaml
steps:
  - name: 'gcr.io/cloud-builders/docker'
    args: ['build', '-t', 'gcr.io/$PROJECT_ID/my-app:$COMMIT_SHA', '.']

  - name: 'gcr.io/cloud-builders/docker'
    args: ['push', 'gcr.io/$PROJECT_ID/my-app:$COMMIT_SHA']

  - name: 'gcr.io/google.com/cloudsdktool/cloud-sdk'
    entrypoint: gcloud
    args:
      - 'run'
      - 'deploy'
      - 'my-app-api'
      - '--image=gcr.io/$PROJECT_ID/my-app:$COMMIT_SHA'
      - '--region=us-central1'
      - '--platform=managed'

images:
  - 'gcr.io/$PROJECT_ID/my-app:$COMMIT_SHA'
```

```bash
# Connect repo and create trigger
gcloud builds triggers create github \
  --repo-name=my-app \
  --repo-owner=my-org \
  --branch-pattern="^main$" \
  --build-config=cloudbuild.yaml
```

### Step 6: Security Review

Verify security configuration:

```bash
# Review IAM bindings
gcloud projects get-iam-policy $PROJECT_ID --format=json

# Check service account permissions
gcloud iam service-accounts list --project=$PROJECT_ID

# Verify VPC Service Controls (if applicable)
gcloud access-context-manager perimeters list --policy=$POLICY_ID
```

**Security checklist:**
- IAM roles follow least privilege (prefer predefined roles over basic roles)
- Service accounts use Workload Identity for GKE
- VPC Service Controls configured for sensitive APIs
- Cloud KMS encryption keys for customer-managed encryption
- Cloud Audit Logs enabled for all admin activity
- Organization policies restrict public access
- Secret Manager used for all credentials

**If deployment fails:**

1. Check the failure reason:
   ```bash
   gcloud run services describe my-app-api --region us-central1
   gcloud logging read "resource.type=cloud_run_revision" --limit=20
   ```
2. Review Cloud Logging for application errors.
3. Fix the configuration or container image.
4. Redeploy:
   ```bash
   gcloud run deploy my-app-api --image gcr.io/$PROJECT_ID/my-app:latest --region us-central1
   ```

**Common failure causes:**
- IAM permission errors -- verify service account roles and `--allow-unauthenticated` flag
- Quota exceeded -- request quota increase via IAM & Admin > Quotas
- Container startup failure -- check container logs and health check configuration
- Region not enabled -- enable the required APIs with `gcloud services enable`

---

## Tools

### architecture_designer.py

Recommends GCP services based on workload requirements.

```bash
python scripts/architecture_designer.py --input requirements.json --output design.json
```

**Input:** JSON with app type, scale, budget, compliance needs
**Output:** Recommended pattern, service stack, cost estimate, pros/cons

### cost_optimizer.py

Analyzes GCP resources for cost savings.

```bash
python scripts/cost_optimizer.py --resources inventory.json --monthly-spend 5000
```

**Output:** Recommendations for:
- Idle resource removal
- Machine type right-sizing
- Committed use discounts
- Storage class transitions
- Network egress optimization

### deployment_manager.py

Generates gcloud CLI deployment scripts and Terraform configurations.

```bash
python scripts/deployment_manager.py --app-name my-app --pattern serverless_web --region us-central1
```

**Output:** Production-ready deployment scripts with:
- Cloud Run or GKE deployment
- Firestore or Cloud SQL setup
- Identity Platform configuration
- IAM roles with least privilege
- Cloud Monitoring and Logging

---

## Quick Start

### Web App on Cloud Run (< $100/month)

```
Ask: "Design a serverless web backend for a mobile app with 1000 users"

Result:
- Cloud Run for API (auto-scaling, no cold start with min instances)
- Firestore for data (pay-per-operation)
- Identity Platform for authentication
- Cloud Storage + Cloud CDN for static assets
- Estimated: $15-40/month
```

### Microservices on GKE ($500-2000/month)

```
Ask: "Design a scalable architecture for a SaaS platform with 50k users"

Result:
- GKE Autopilot for containerized workloads
- Cloud SQL (PostgreSQL) with read replicas
- Memorystore (Redis) for session caching
- Cloud CDN for global delivery
- Cloud Build for CI/CD
- Multi-zone deployment
```

### Serverless Data Pipeline

```
Ask: "Design a real-time analytics pipeline for event data"

Result:
- Pub/Sub for event ingestion
- Dataflow (Apache Beam) for stream processing
- BigQuery for analytics and warehousing
- Looker for dashboards
- Cloud Functions for lightweight transforms
```

### ML Platform

```
Ask: "Design a machine learning platform for model training and serving"

Result:
- Vertex AI for training and prediction
- Cloud Storage for datasets and model artifacts
- BigQuery for feature store
- Cloud Functions for preprocessing triggers
- Cloud Monitoring for model drift detection
```

---

## Input Requirements

Provide these details for architecture design:

| Requirement | Description | Example |
|-------------|-------------|---------|
| Application type | What you're building | SaaS platform, mobile backend |
| Expected scale | Users, requests/sec | 10k users, 100 RPS |
| Budget | Monthly GCP limit | $500/month max |
| Team context | Size, GCP experience | 3 devs, intermediate |
| Compliance | Regulatory needs | HIPAA, GDPR, SOC 2 |
| Availability | Uptime requirements | 99.9% SLA, 1hr RPO |

**JSON Format:**

```json
{
  "application_type": "saas_platform",
  "expected_users": 10000,
  "requests_per_second": 100,
  "budget_monthly_usd": 500,
  "team_size": 3,
  "gcp_experience": "intermediate",
  "compliance": ["SOC2"],
  "availability_sla": "99.9%"
}
```

---

## Output Formats

### Architecture Design

- Pattern recommendation with rationale
- Service stack diagram (ASCII)
- Monthly cost estimate and trade-offs

### IaC Templates

- **Terraform HCL**: Production-ready Google provider configs
- **gcloud CLI**: Scripted deployment commands
- **Cloud Build YAML**: CI/CD pipeline definitions

### Cost Analysis

- Current spend breakdown with optimization recommendations
- Priority action list (high/medium/low) and implementation checklist

---

## Anti-Patterns

| Anti-Pattern | Why It Fails | Better Approach |
|---|---|---|
| Using default VPC for production | No isolation, shared firewall rules | Create custom VPC with private subnets |
| Over-provisioning GKE node pools | Wasted cost on idle capacity | Use GKE Autopilot or cluster autoscaler |
| Storing secrets in environment variables | Visible in Cloud Console, logs | Use Secret Manager with Workload Identity |
| Ignoring sustained use discounts | Missing 20-30% automatic savings | Right-size VMs for consistent baseline usage |
| Single-region deployment for SaaS | One region outage = full downtime | Multi-region with Cloud Load Balancing |
| BigQuery on-demand for heavy workloads | Unpredictable costs at scale | Use BigQuery slots (flat-rate) for consistent workloads |
| Running Cloud Functions for long tasks | 9-minute timeout, cold starts | Use Cloud Run for tasks > 60 seconds |

---

## Cross-References

| Skill | Relationship |
|-------|-------------|
| `engineering-team/aws-solution-architect` | AWS equivalent — same 6-step workflow, different services |
| `engineering-team/azure-cloud-architect` | Azure equivalent — completes the cloud trifecta |
| `engineering-team/senior-devops` | Broader DevOps scope — pipelines, monitoring, containerization |
| `engineering/terraform-patterns` | IaC implementation — use for Terraform modules targeting GCP |
| `engineering/ci-cd-pipeline-builder` | Pipeline construction — automates Cloud Build and deployment |

---

## Reference Documentation

| Document | Contents |
|----------|----------|
| `references/architecture_patterns.md` | 6 patterns: serverless, GKE microservices, three-tier, data pipeline, ML platform, multi-region |
| `references/service_selection.md` | Decision matrices for compute, database, storage, messaging |
| `references/best_practices.md` | Naming, labels, IAM, networking, monitoring, disaster recovery |
