---
name: "azure-cloud-architect"
description_en: "Design Azure architectures for startups and enterprises. Use when asked to design Azure infrastructure, create Bicep/ARM templates, optimize Azure costs, set up Azure DevOps pipelines, or migrate to Azure. Covers AKS, App Service, Azure Functions, Cosmos DB, and cost optimization."
description_tr: "Azure mimarisi tasarlamak için bir araç olarak, startuplardan kurumsal ölçekte projelere kadar Azure altyapısı tasarımı, Bicep/ARM template oluşturma, maliyet optimizasyonu, Azure DevOps pipeline kurulumu ve Azure'a geçiş konularında yardımcı olur. AKS, App Service, Azure Functions, Cosmos DB ve maliyet optimizasyonu gibi temel Azure hizmetlerini kapsar."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/azure-cloud-architect/SKILL.md"
path: ".gemini/skills/azure-cloud-architect/SKILL.md"
is_collection: false
body_length: 13339
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Azure Bulut Mimarı

  Bicep altyapı-kod şablonlarıyla startuplar ve işletmeler için ölçeklenebilir, maliyet-etkin Azure mimarileri tasarlayın.

  ---

  ## İş Akışı

  ### Adım 1: Gereksinimleri Toplayın

  Uygulama spesifikasyonlarını toplayın:

  ```
  - Uygulama türü (web uygulaması, mobil backend, veri işlem hattı, SaaS, mikroservisler)
  - Beklenen kullanıcı sayısı ve saniye başına istek
  - Bütçe kısıtlamaları (aylık harcama limiti)
  - Takım boyutu ve Azure deneyim seviyesi
  - Uyum gereksinimleri (GDPR, HIPAA, SOC 2, ISO 27001)
  - Kullanılabilirlik gereksinimleri (SLA, RPO/RTO)
  - Bölge tercihleri (veri yerleşimi, gecikme)
  ```

  ### Adım 2: Mimarisini Tasarlayın

  Desen önerilerine ulaşmak için mimari tasarımcısını çalıştırın:

  ```bash
  python scripts/architecture_designer.py \
    --app-type web_app \
    --users 10000 \
    --requirements '{"budget_monthly_usd": 500, "compliance": ["SOC2"]}'
  ```

  **Örnek çıktı:**

  ```json
  {
    "recommended_pattern": "app_service_web",
    "service_stack": ["App Service", "Azure SQL", "Front Door", "Key Vault", "Entra ID"],
    "estimated_monthly_cost_usd": 280,
    "pros": ["Managed platform", "Built-in autoscale", "Deployment slots"],
    "cons": ["Less control than VMs", "Platform constraints", "Cold start on consumption plans"]
  }
  ```

  Önerilen desenlerden seçim yapın:
  - **App Service Web**: Front Door + App Service + Azure SQL + Redis Cache
  - **AKS Üzerinde Mikroservisler**: AKS + Service Bus + Cosmos DB + API Management
  - **Sunucusuz Olay Güdümlü**: Functions + Event Grid + Service Bus + Cosmos DB
  - **Veri İşlem Hattı**: Data Factory + Synapse Analytics + Data Lake Storage + Event Hubs

  Detaylı desen spesifikasyonları için `references/architecture_patterns.md` adresine bakın.

  **Doğrulama kontrol noktası:** Önerilen desen, takımın operasyonel olgunluğu ve uyum gereksinimlerine uyduğunu doğrulayın ve ardından Adım 3'e geçin.

  ### Adım 3: IaC Şablonları Oluşturun

  Seçilen desen için altyapı-kod oluşturun:

  ```bash
  # Web uygulaması yığını (Bicep)
  python scripts/bicep_generator.py --arch-type web-app --output main.bicep
  ```

  **Örnek Bicep çıktısı (temel web uygulaması kaynakları):**

  ```bicep
  @description('The environment name')
  param environment string = 'dev'

  @description('The Azure region for resources')
  param location string = resourceGroup().location

  @description('The application name')
  param appName string = 'myapp'

  // App Service Plan
  resource appServicePlan 'Microsoft.Web/serverfarms@2023-01-01' = {
    name: '${environment}-${appName}-plan'
    location: location
    sku: {
      name: 'P1v3'
      tier: 'PremiumV3'
      capacity: 1
    }
    properties: {
      reserved: true // Linux
    }
  }

  // App Service
  resource appService 'Microsoft.Web/sites@2023-01-01' = {
    name: '${environment}-${appName}-web'
    location: location
    properties: {
      serverFarmId: appServicePlan.id
      httpsOnly: true
      siteConfig: {
        linuxFxVersion: 'NODE|20-lts'
        minTlsVersion: '1.2'
        ftpsState: 'Disabled'
        alwaysOn: true
      }
    }
    identity: {
      type: 'SystemAssigned'
    }
  }

  // Azure SQL Database
  resource sqlServer 'Microsoft.Sql/servers@2023-05-01-preview' = {
    name: '${environment}-${appName}-sql'
    location: location
    properties: {
      administrators: {
        azureADOnlyAuthentication: true
      }
      minimalTlsVersion: '1.2'
    }
  }

  resource sqlDatabase 'Microsoft.Sql/servers/databases@2023-05-01-preview' = {
    parent: sqlServer
    name: '${appName}-db'
    location: location
    sku: {
      name: 'GP_S_Gen5_2'
      tier: 'GeneralPurpose'
    }
    properties: {
      autoPauseDelay: 60
      minCapacity: json('0.5')
    }
  }
  ```

  > Front Door, Key Vault, Managed Identity ve izlemeyi içeren tam şablonlar, `bicep_generator.py` tarafından oluşturulur ve ayrıca `references/architecture_patterns.md` dosyasında mevcuttur.

  **Bicep, Azure için önerilen IaC dilidir.** Bicep'i ARM JSON şablonlarına tercih edin: Bicep, ARM JSON'a derlenir, daha temiz söz dizimi sunar, modülleri destekler ve Microsoft tarafından ilk taraf olarak desteklenir.

  ### Adım 4: Maliyetleri Gözden Geçirin

  Tahmini maliyetleri ve optimizasyon fırsatlarını analiz edin:

  ```bash
  python scripts/cost_optimizer.py \
    --config current_resources.json \
    --json
  ```

  **Örnek çıktı:**

  ```json
  {
    "current_monthly_usd": 2000,
    "recommendations": [
      { "action": "Right-size SQL Database GP_S_Gen5_8 to GP_S_Gen5_2", "savings_usd": 380, "priority": "high" },
      { "action": "Purchase 1-year Reserved Instances for AKS node pools", "savings_usd": 290, "priority": "high" },
      { "action": "Move Blob Storage to Cool tier for objects >30 days old", "savings_usd": 65, "priority": "medium" }
    ],
    "total_potential_savings_usd": 735
  }
  ```

  Çıktı şunları içerir:
  - Servise göre aylık maliyet dökümü
  - Boyut uyarlama önerileri
  - Reserved Instance ve Savings Plan fırsatları
  - Potansiyel aylık tasarruf

  ### Adım 5: CI/CD'yi Yapılandırın

  Azure DevOps Pipelines veya GitHub Actions'ı Azure ile kurun:

  ```yaml
  # GitHub Actions — Bicep'i Azure'a dağıt
  name: Deploy Infrastructure
  on:
    push:
      branches: [main]

  permissions:
    id-token: write
    contents: read

  jobs:
    deploy:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4

        - uses: azure/login@v2
          with:
            client-id: ${{ secrets.AZURE_CLIENT_ID }}
            tenant-id: ${{ secrets.AZURE_TENANT_ID }}
            subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}

        - uses: azure/arm-deploy@v2
          with:
            resourceGroupName: rg-myapp-dev
            template: ./infra/main.bicep
            parameters: environment=dev
  ```

  ```yaml
  # Azure DevOps Pipeline
  trigger:
    branches:
      include:
        - main

  pool:
    vmImage: 'ubuntu-latest'

  steps:
    - task: AzureCLI@2
      inputs:
        azureSubscription: 'MyServiceConnection'
        scriptType: 'bash'
        scriptLocation: 'inlineScript'
        inlineScript: |
          az deployment group create \
            --resource-group rg-myapp-dev \
            --template-file infra/main.bicep \
            --parameters environment=dev
  ```

  ### Adım 6: Güvenlik İncelemesi

  Üretime geçmeden önce güvenlik durumunu doğrulayın:

  - **Kimlik**: Entra ID (Azure AD) ve RBAC ile, hizmet arası kimlik doğrulaması için Managed Identity — asla kimlik bilgilerini kodda depolamayın
  - **Gizlilikler**: Tüm gizlilikler, sertifikalar ve bağlantı dizgileri için Key Vault
  - **Ağ**: Tüm alt ağlarda NSG'ler, PaaS hizmetleri için Private Endpoints, WAF'li Application Gateway
  - **Şifreleme**: Aktarım sırasında TLS 1.2+ protokolü, Azure tarafından yönetilen veya müşteri tarafından yönetilen anahtarlar
  - **İzleme**: Microsoft Defender for Cloud etkin, koruma sağlamakları için Azure Policy
  - **Uyum**: SOC 2 / HIPAA / ISO 27001 girişimleri için Azure Policy atamalarını

  **Dağıtım başarısız olursa:**

  1. Dağıtım durumunu kontrol edin:
     ```bash
     az deployment group show \
       --resource-group rg-myapp-dev \
       --name main \
       --query 'properties.error'
     ```
  2. RBAC veya policy hatalarını kontrol etmek için Activity Log'u gözden geçirin.
  3. Dağıtmadan önce Bicep şablonunu doğrulayın:
     ```bash
     az bicep build --file main.bicep
     az deployment group validate \
       --resource-group rg-myapp-dev \
       --template-file main.bicep
     ```

  **Yaygın hata nedenleri:**
  - RBAC izin hataları — dağıtan müdürün kaynak grubunda Contributor izni olduğunu doğrulayın
  - Kaynak sağlayıcı kayıtlı değil — `az provider register --namespace Microsoft.Web` komutu çalıştırın
  - Adlandırma çakışmaları — Azure kaynak adları sık sık genel olarak benzersizdir (depolama hesapları, web uygulamaları)
  - Kota aşıldı — Azure Portal > Abonelikler > Kullanım + kotalar aracılığıyla kota artışı talep edin

  ---

  ## Araçlar

  ### architecture_designer.py

  Gereksinimlere dayalı mimari desen önerilerini oluşturur.

  ```bash
  python scripts/architecture_designer.py \
    --app-type web_app \
    --users 50000 \
    --requirements '{"budget_monthly_usd": 1000, "compliance": ["HIPAA"]}' \
    --json
  ```

  **Giriş:** Uygulama türü, beklenen kullanıcılar, JSON gereksinimleri
  **Çıktı:** Önerilen desen, hizmet yığını, maliyet tahmini, avantajlar/dezavantajlar

  ### cost_optimizer.py

  Maliyet tasarrufu için Azure kaynak yapılandırmalarını analiz eder.

  ```bash
  python scripts/cost_optimizer.py --config resources.json --json
  ```

  **Giriş:** Mevcut Azure kaynak envanteri içeren JSON dosyası
  **Çıktı:** Aşağıdakiler için öneriler:
  - Boşta kaynak kaldırma
  - VM ve veritabanı boyutu uyarlama
  - Reserved Instance satın almaları
  - Depolama katmanı geçişleri
  - Kullanılmayan genel IP'ler ve yük dengeleyicileri

  ### bicep_generator.py

  Mimari türünden Bicep şablonu iskeletleri oluşturur.

  ```bash
  python scripts/bicep_generator.py --arch-type microservices --output main.bicep
  ```

  **Çıktı:** Şunları içeren üretime hazır Bicep şablonları:
  - Managed Identity (parola yok)
  - Key Vault entegrasyonu
  - Azure Monitor için tanı ayarları
  - Ağ güvenlik grupları
  - Maliyet tahsisi için etiketler

  ---

  ## Hızlı Başlangıç

  ### Web Uygulaması Mimarisi (< $100/ay)

  ```
  Sor: "Bir startup için 5000 kullanıcılı bir Azure web uygulaması tasarla"

  Sonuç:
  - Uygulama için App Service (B1 Linux)
  - İlişkisel veriler için Azure SQL Sunucusuz
  - Statik varlıklar için Azure Blob Storage
  - CDN ve yönlendirme için Front Door (ücretsiz katman)
  - Gizlilikler için Key Vault
  - Tahmini: $40-80/ay
  ```

  ### AKS Üzerinde Mikroservisler ($500-2000/ay)

  ```
  Sor: "50k kullanıcıya sahip bir SaaS platformu için Azure'da mikroservis mimarisi tasarla"

  Sonuç:
  - 3 düğüm havuzlu AKS kümesi (sistem, uygulama, işler)
  - Ağ geçidi ve oran sınırlaması için API Management
  - Çok modelli veri için Cosmos DB
  - Eşzamansız mesajlaşma için Service Bus
  - Gözlemlenebilirlik için Azure Monitor + Application Insights
  - Çoklu bölge dağıtımı
  ```

  ### Sunucusuz Olay Güdümlü (< $200/ay)

  ```
  Sor: "Siparişleri işlemek için olay güdümlü bir backend tasarla"

  Sonuç:
  - İşlem için Azure Functions (Tüketim planı)
  - Olay yönlendirmesi için Event Grid
  - Güvenilir mesajlaşma için Service Bus
  - Sipariş verileri için Cosmos DB
  - İzleme için Application Insights
  - Tahmini: $30-150/ay hacme bağlı olarak
  ```

  ### Veri İşlem Hattı ($300-1500/ay)

  ```
  Sor: "Günde 10M olayı almak için bir veri işlem hattı tasarla"

  Sonuç:
  - Alım için Event Hubs
  - İşlem için Stream Analytics veya Functions
  - Ham veriler için Data Lake Storage Gen2
  - Depo için Synapse Analytics
  - Panolar için Power BI
  ```

  ---

  ## Giriş Gereksinimleri

  Mimari tasarım için bu detayları sağlayın:

  | Gereksinim | Açıklama | Örnek |
  |-------------|---------|--------|
  | Uygulama türü | Neyi inşa ettiğiniz | SaaS platformu, mobil backend |
  | Beklenen ölçek | Kullanıcılar, istek/saniye | 10k kullanıcı, 100 RPS |
  | Bütçe | Aylık Azure limiti | Maksimum $500/ay |
  | Takım bağlamı | Boyut, Azure deneyimi | 3 geliştirici, orta düzey |
  | Uyum | Yasal gereksinimler | HIPAA, GDPR, SOC 2 |
  | Kullanılabilirlik | Çalışma süresi gereksinimleri | 99.9% SLA, 1s RPO |

  **JSON Biçimi:**

  ```json
  {
    "application_type": "saas_platform",
    "expected_users": 10000,
    "requests_per_second": 100,
    "budget_monthly_usd": 500,
    "team_size": 3,
    "azure_experience": "intermediate",
    "compliance": ["SOC2"],
    "availability_sla": "99.9%"
  }
  ```

  ---

  ## Anti-Desenler

  | Anti-Desen | Neden Başarısız Olur | Bunun Yerine Bunu Yapın |
  |---|---|---|
  | Yeni projeler için ARM JSON şablonları | Ayrıntılı, okunması zor, modül yok | Bicep kullan — ARM'ye derler, temiz söz dizimi |
  | App Settings'de gizlilikler depolamak | Gizlilikler portalda görünür, döndürülemez | App Settings'de Key Vault referanslarını kullan |
  | Tek büyük AKS düğüm havuzu | Farklı iş yükleri için optimize edilemez | Birden fazla düğüm havuzu kullan: sistem, uygulama, işler |
  | PaaS hizmetlerinde genel uç noktalar | Saldırı yüzeyi açılır | Private Endpoints + VNet entegrasyonu kullan |
  | "Aynen olması gerekebilir" diye aşırı tedarik etmek | Birinci ayda bütçe israfı | Küçük başla, otomatik ölçekleme kullan, aylık boyuta göre ayarla |
  | Her şey için paylaşılan kaynak grupları | Etki alanı, RBAC kabusları | Ortam başına ve iş yükü başına bir kaynak grubu |
  | Etiketleme stratejisi yok | Maliyetler ve sahiplik izlenemiyor | Etiketle: ortam, sahip, maliyet merkezi, uygulama adı |
  | Klasik kaynakları kullanmak | Kullanım dışı, sınırlı özellikler | Münhasıran ARM/Bicep kaynakları kullan |

  ---

  ## Çıktı Biçimleri

  ### Mimari Tasarım

  - Sebep açıklamalı desen önerisi
  - Hizmet yığını diyagramı (ASCII)
  - Aylık maliyet tahmini ve ödünleşimler

  ### IaC Şablonları

  - **Bicep**: Önerilen — ilk taraf, modül desteği, temiz söz dizimi
  - **ARM JSON**: Gerekli olduğunda Bicep'ten oluşturulur
  - **Terraform HCL**: azurerm sağlayıcısını kullanarak çoklu bulut uyumluluğu

  ### Maliyet Analizi

  - Mevcut harcama dökümü ve optimizasyon önerileriyle
  - Öncelik işlem listesi (yüksek/orta/düşük) ve uygulama kontrol listesi

  ---

  ## Çapraz Referanslar

  | Yetenek | İlişki |
  |--------|--------|
  | `engineering-team/aws-solution-architect` | AWS eşdeğeri — aynı 6 adımlı iş akışı, farklı hizmetler |
  | `engineering-team/gcp-cloud-architect` | GCP eşdeğeri — bulut üçlemesini tamamlar |
  | `engineering-team/senior-devops` | Daha geniş DevOps kapsamı — işlem hatları, izleme, konteynerizasyon |
  | `engineering/terraform-patterns` | IaC uygulaması — Azure'u hedef alan Terraform modülleri için kullan |
  | `engineering/ci-cd-pipeline-builder` | İşlem hattı inşası — Azure DevOps ve GitHub Actions'ı otomatikleştirir |

  ---

  ## Referans Belgeleri

  | Belge | İçerik |
  |-------|--------|
  | `references/architecture_patterns.md` | 5 desen: web uygulaması, mikroservisler/AKS, sunucusuz, veri işlem hattı, çoklu bölge |
  | `references/service_selection.md` | İşlem, veritabanı, depolama, mesajlaşma, ağ için karar matrisleri |
  | `references/best_practices.md` | Adlandırma kuralları, etiketleme, RBAC, ağ güvenliği, izleme, DR |
---

# Azure Cloud Architect

Design scalable, cost-effective Azure architectures for startups and enterprises with Bicep infrastructure-as-code templates.

---

## Workflow

### Step 1: Gather Requirements

Collect application specifications:

```
- Application type (web app, mobile backend, data pipeline, SaaS, microservices)
- Expected users and requests per second
- Budget constraints (monthly spend limit)
- Team size and Azure experience level
- Compliance requirements (GDPR, HIPAA, SOC 2, ISO 27001)
- Availability requirements (SLA, RPO/RTO)
- Region preferences (data residency, latency)
```

### Step 2: Design Architecture

Run the architecture designer to get pattern recommendations:

```bash
python scripts/architecture_designer.py \
  --app-type web_app \
  --users 10000 \
  --requirements '{"budget_monthly_usd": 500, "compliance": ["SOC2"]}'
```

**Example output:**

```json
{
  "recommended_pattern": "app_service_web",
  "service_stack": ["App Service", "Azure SQL", "Front Door", "Key Vault", "Entra ID"],
  "estimated_monthly_cost_usd": 280,
  "pros": ["Managed platform", "Built-in autoscale", "Deployment slots"],
  "cons": ["Less control than VMs", "Platform constraints", "Cold start on consumption plans"]
}
```

Select from recommended patterns:
- **App Service Web**: Front Door + App Service + Azure SQL + Redis Cache
- **Microservices on AKS**: AKS + Service Bus + Cosmos DB + API Management
- **Serverless Event-Driven**: Functions + Event Grid + Service Bus + Cosmos DB
- **Data Pipeline**: Data Factory + Synapse Analytics + Data Lake Storage + Event Hubs

See `references/architecture_patterns.md` for detailed pattern specifications.

**Validation checkpoint:** Confirm the recommended pattern matches the team's operational maturity and compliance requirements before proceeding to Step 3.

### Step 3: Generate IaC Templates

Create infrastructure-as-code for the selected pattern:

```bash
# Web app stack (Bicep)
python scripts/bicep_generator.py --arch-type web-app --output main.bicep
```

**Example Bicep output (core web app resources):**

```bicep
@description('The environment name')
param environment string = 'dev'

@description('The Azure region for resources')
param location string = resourceGroup().location

@description('The application name')
param appName string = 'myapp'

// App Service Plan
resource appServicePlan 'Microsoft.Web/serverfarms@2023-01-01' = {
  name: '${environment}-${appName}-plan'
  location: location
  sku: {
    name: 'P1v3'
    tier: 'PremiumV3'
    capacity: 1
  }
  properties: {
    reserved: true // Linux
  }
}

// App Service
resource appService 'Microsoft.Web/sites@2023-01-01' = {
  name: '${environment}-${appName}-web'
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    httpsOnly: true
    siteConfig: {
      linuxFxVersion: 'NODE|20-lts'
      minTlsVersion: '1.2'
      ftpsState: 'Disabled'
      alwaysOn: true
    }
  }
  identity: {
    type: 'SystemAssigned'
  }
}

// Azure SQL Database
resource sqlServer 'Microsoft.Sql/servers@2023-05-01-preview' = {
  name: '${environment}-${appName}-sql'
  location: location
  properties: {
    administrators: {
      azureADOnlyAuthentication: true
    }
    minimalTlsVersion: '1.2'
  }
}

resource sqlDatabase 'Microsoft.Sql/servers/databases@2023-05-01-preview' = {
  parent: sqlServer
  name: '${appName}-db'
  location: location
  sku: {
    name: 'GP_S_Gen5_2'
    tier: 'GeneralPurpose'
  }
  properties: {
    autoPauseDelay: 60
    minCapacity: json('0.5')
  }
}
```

> Full templates including Front Door, Key Vault, Managed Identity, and monitoring are generated by `bicep_generator.py` and also available in `references/architecture_patterns.md`.

**Bicep is the recommended IaC language for Azure.** Prefer Bicep over ARM JSON templates: Bicep compiles to ARM JSON, has cleaner syntax, supports modules, and is first-party supported by Microsoft.

### Step 4: Review Costs

Analyze estimated costs and optimization opportunities:

```bash
python scripts/cost_optimizer.py \
  --config current_resources.json \
  --json
```

**Example output:**

```json
{
  "current_monthly_usd": 2000,
  "recommendations": [
    { "action": "Right-size SQL Database GP_S_Gen5_8 to GP_S_Gen5_2", "savings_usd": 380, "priority": "high" },
    { "action": "Purchase 1-year Reserved Instances for AKS node pools", "savings_usd": 290, "priority": "high" },
    { "action": "Move Blob Storage to Cool tier for objects >30 days old", "savings_usd": 65, "priority": "medium" }
  ],
  "total_potential_savings_usd": 735
}
```

Output includes:
- Monthly cost breakdown by service
- Right-sizing recommendations
- Reserved Instance and Savings Plan opportunities
- Potential monthly savings

### Step 5: Configure CI/CD

Set up Azure DevOps Pipelines or GitHub Actions with Azure:

```yaml
# GitHub Actions — deploy Bicep to Azure
name: Deploy Infrastructure
on:
  push:
    branches: [main]

permissions:
  id-token: write
  contents: read

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: azure/login@v2
        with:
          client-id: ${{ secrets.AZURE_CLIENT_ID }}
          tenant-id: ${{ secrets.AZURE_TENANT_ID }}
          subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}

      - uses: azure/arm-deploy@v2
        with:
          resourceGroupName: rg-myapp-dev
          template: ./infra/main.bicep
          parameters: environment=dev
```

```yaml
# Azure DevOps Pipeline
trigger:
  branches:
    include:
      - main

pool:
  vmImage: 'ubuntu-latest'

steps:
  - task: AzureCLI@2
    inputs:
      azureSubscription: 'MyServiceConnection'
      scriptType: 'bash'
      scriptLocation: 'inlineScript'
      inlineScript: |
        az deployment group create \
          --resource-group rg-myapp-dev \
          --template-file infra/main.bicep \
          --parameters environment=dev
```

### Step 6: Security Review

Validate security posture before production:

- **Identity**: Entra ID (Azure AD) with RBAC, Managed Identity for service-to-service auth — never store credentials in code
- **Secrets**: Key Vault for all secrets, certificates, and connection strings
- **Network**: NSGs on all subnets, Private Endpoints for PaaS services, Application Gateway with WAF
- **Encryption**: TLS 1.2+ in transit, Azure-managed or customer-managed keys at rest
- **Monitoring**: Microsoft Defender for Cloud enabled, Azure Policy for guardrails
- **Compliance**: Azure Policy assignments for SOC 2 / HIPAA / ISO 27001 initiatives

**If deployment fails:**

1. Check the deployment status:
   ```bash
   az deployment group show \
     --resource-group rg-myapp-dev \
     --name main \
     --query 'properties.error'
   ```
2. Review Activity Log for RBAC or policy errors.
3. Validate the Bicep template before deploying:
   ```bash
   az bicep build --file main.bicep
   az deployment group validate \
     --resource-group rg-myapp-dev \
     --template-file main.bicep
   ```

**Common failure causes:**
- RBAC permission errors — verify the deploying principal has Contributor on the resource group
- Resource provider not registered — run `az provider register --namespace Microsoft.Web`
- Naming conflicts — Azure resource names are often globally unique (storage accounts, web apps)
- Quota exceeded — request quota increase via Azure Portal > Subscriptions > Usage + quotas

---

## Tools

### architecture_designer.py

Generates architecture pattern recommendations based on requirements.

```bash
python scripts/architecture_designer.py \
  --app-type web_app \
  --users 50000 \
  --requirements '{"budget_monthly_usd": 1000, "compliance": ["HIPAA"]}' \
  --json
```

**Input:** Application type, expected users, JSON requirements
**Output:** Recommended pattern, service stack, cost estimate, pros/cons

### cost_optimizer.py

Analyzes Azure resource configurations for cost savings.

```bash
python scripts/cost_optimizer.py --config resources.json --json
```

**Input:** JSON file with current Azure resource inventory
**Output:** Recommendations for:
- Idle resource removal
- VM and database right-sizing
- Reserved Instance purchases
- Storage tier transitions
- Unused public IPs and load balancers

### bicep_generator.py

Generates Bicep template scaffolds from architecture type.

```bash
python scripts/bicep_generator.py --arch-type microservices --output main.bicep
```

**Output:** Production-ready Bicep templates with:
- Managed Identity (no passwords)
- Key Vault integration
- Diagnostic settings for Azure Monitor
- Network security groups
- Tags for cost allocation

---

## Quick Start

### Web App Architecture (< $100/month)

```
Ask: "Design an Azure web app for a startup with 5000 users"

Result:
- App Service (B1 Linux) for the application
- Azure SQL Serverless for relational data
- Azure Blob Storage for static assets
- Front Door (free tier) for CDN and routing
- Key Vault for secrets
- Estimated: $40-80/month
```

### Microservices on AKS ($500-2000/month)

```
Ask: "Design a microservices architecture on Azure for a SaaS platform with 50k users"

Result:
- AKS cluster with 3 node pools (system, app, jobs)
- API Management for gateway and rate limiting
- Cosmos DB for multi-model data
- Service Bus for async messaging
- Azure Monitor + Application Insights for observability
- Multi-zone deployment
```

### Serverless Event-Driven (< $200/month)

```
Ask: "Design an event-driven backend for processing orders"

Result:
- Azure Functions (Consumption plan) for compute
- Event Grid for event routing
- Service Bus for reliable messaging
- Cosmos DB for order data
- Application Insights for monitoring
- Estimated: $30-150/month depending on volume
```

### Data Pipeline ($300-1500/month)

```
Ask: "Design a data pipeline for ingesting 10M events/day"

Result:
- Event Hubs for ingestion
- Stream Analytics or Functions for processing
- Data Lake Storage Gen2 for raw data
- Synapse Analytics for warehouse
- Power BI for dashboards
```

---

## Input Requirements

Provide these details for architecture design:

| Requirement | Description | Example |
|-------------|-------------|---------|
| Application type | What you're building | SaaS platform, mobile backend |
| Expected scale | Users, requests/sec | 10k users, 100 RPS |
| Budget | Monthly Azure limit | $500/month max |
| Team context | Size, Azure experience | 3 devs, intermediate |
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
  "azure_experience": "intermediate",
  "compliance": ["SOC2"],
  "availability_sla": "99.9%"
}
```

---

## Anti-Patterns

| Anti-Pattern | Why It Fails | Do This Instead |
|---|---|---|
| ARM JSON templates for new projects | Verbose, hard to read, no modules | Use Bicep — compiles to ARM, cleaner syntax |
| Storing secrets in App Settings | Secrets visible in portal, no rotation | Use Key Vault references in App Settings |
| Single large AKS node pool | Cannot optimize for different workloads | Use multiple node pools: system, app, jobs |
| Public endpoints on PaaS services | Exposed attack surface | Use Private Endpoints + VNet integration |
| Over-provisioning "just in case" | Wastes budget month one | Start small, use autoscale, right-size monthly |
| Shared resource groups for everything | Blast radius, RBAC nightmares | One resource group per environment per workload |
| No tagging strategy | Cannot track costs or ownership | Tag: environment, owner, cost-center, app-name |
| Using classic resources | Deprecated, limited features | Use ARM/Bicep resources exclusively |

---

## Output Formats

### Architecture Design

- Pattern recommendation with rationale
- Service stack diagram (ASCII)
- Monthly cost estimate and trade-offs

### IaC Templates

- **Bicep**: Recommended — first-party, module support, clean syntax
- **ARM JSON**: Generated from Bicep when needed
- **Terraform HCL**: Multi-cloud compatible using azurerm provider

### Cost Analysis

- Current spend breakdown with optimization recommendations
- Priority action list (high/medium/low) and implementation checklist

---

## Cross-References

| Skill | Relationship |
|-------|-------------|
| `engineering-team/aws-solution-architect` | AWS equivalent — same 6-step workflow, different services |
| `engineering-team/gcp-cloud-architect` | GCP equivalent — completes the cloud trifecta |
| `engineering-team/senior-devops` | Broader DevOps scope — pipelines, monitoring, containerization |
| `engineering/terraform-patterns` | IaC implementation — use for Terraform modules targeting Azure |
| `engineering/ci-cd-pipeline-builder` | Pipeline construction — automates Azure DevOps and GitHub Actions |

---

## Reference Documentation

| Document | Contents |
|----------|----------|
| `references/architecture_patterns.md` | 5 patterns: web app, microservices/AKS, serverless, data pipeline, multi-region |
| `references/service_selection.md` | Decision matrices for compute, database, storage, messaging, networking |
| `references/best_practices.md` | Naming conventions, tagging, RBAC, network security, monitoring, DR |
