---
name: "aws-solution-architect"
description_en: "Design AWS architectures for startups using serverless patterns and IaC templates. Use when asked to design serverless architecture, create CloudFormation templates, optimize AWS costs, set up CI/CD pipelines, or migrate to AWS. Covers Lambda, API Gateway, DynamoDB, ECS, Aurora, and cost optimization."
description_tr: "AWS mimarileri tasarlamak için sunucusuz desenleri ve IaC şablonlarını kullanan başlangıç şirketleri için çözüm. Serverless mimari tasarımı, CloudFormation şablonu oluşturma, AWS maliyetlerini optimize etme, CI/CD pipeline kurulumu veya AWS'ye geçiş işlemleri gerektiğinde kullanılabilir. Lambda, API Gateway, DynamoDB, ECS, Aurora ve maliyet optimizasyonunu kapsamaktadır."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/aws-solution-architect/SKILL.md"
path: ".gemini/skills/aws-solution-architect/SKILL.md"
is_collection: false
body_length: 9714
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # AWS Çözüm Mimarı

  Startuplar için ölçeklenebilir, uygun maliyetli AWS mimarileri tasarlayın ve altyapı-kod şablonları kullanın.

  ---

  ## İş Akışı

  ### Adım 1: Gereksinimler Toplayın

  Uygulama spesifikasyonlarını toplayın:

  ```
  - Uygulama türü (web uygulaması, mobil backend, veri pipeline, SaaS)
  - Beklenen kullanıcı sayısı ve saniyede istek sayısı
  - Bütçe kısıtlamaları (aylık harcama limiti)
  - Ekip büyüklüğü ve AWS deneyim seviyesi
  - Uygunluk gereksinimleri (GDPR, HIPAA, SOC 2)
  - Kullanılabilirlik gereksinimleri (SLA, RPO/RTO)
  ```

  ### Adım 2: Mimariyi Tasarlayın

  Desen önerilerini almak için mimari tasarımcısını çalıştırın:

  ```bash
  python scripts/architecture_designer.py --input requirements.json
  ```

  **Örnek çıktı:**

  ```json
  {
    "recommended_pattern": "serverless_web",
    "service_stack": ["S3", "CloudFront", "API Gateway", "Lambda", "DynamoDB", "Cognito"],
    "estimated_monthly_cost_usd": 35,
    "pros": ["Low ops overhead", "Pay-per-use", "Auto-scaling"],
    "cons": ["Cold starts", "15-min Lambda limit", "Eventual consistency"]
  }
  ```

  Önerilen desenler arasından seçim yapın:
  - **Serverless Web**: S3 + CloudFront + API Gateway + Lambda + DynamoDB
  - **Event-Driven Microservices**: EventBridge + Lambda + SQS + Step Functions
  - **Three-Tier**: ALB + ECS Fargate + Aurora + ElastiCache
  - **GraphQL Backend**: AppSync + Lambda + DynamoDB + Cognito

  Ayrıntılı desen özellikleri için `references/architecture_patterns.md` dosyasına bakın.

  **Doğrulama kontrol noktası:** Önerilen desen, ekibin operasyonel olgunluk seviyesi ve uygunluk gereksinimlerine uygun olduğunu onayladıktan sonra Adım 3'e geçin.

  ### Adım 3: IaC Şablonları Oluşturun

  Seçilen desen için altyapı-kod oluşturun:

  ```bash
  # Serverless yığını (CloudFormation)
  python scripts/serverless_stack.py --app-name my-app --region us-east-1
  ```

  **Örnek CloudFormation YAML çıktısı (temel serverless kaynakları):**

  ```yaml
  AWSTemplateFormatVersion: '2010-09-09'
  Transform: AWS::Serverless-2016-10-31

  Parameters:
    AppName:
      Type: String
      Default: my-app

  Resources:
    ApiFunction:
      Type: AWS::Serverless::Function
      Properties:
        Handler: index.handler
        Runtime: nodejs20.x
        MemorySize: 512
        Timeout: 30
        Environment:
          Variables:
            TABLE_NAME: !Ref DataTable
        Policies:
          - DynamoDBCrudPolicy:
              TableName: !Ref DataTable
        Events:
          ApiEvent:
            Type: Api
            Properties:
              Path: /{proxy+}
              Method: ANY

    DataTable:
      Type: AWS::DynamoDB::Table
      Properties:
        BillingMode: PAY_PER_REQUEST
        AttributeDefinitions:
          - AttributeName: pk
            AttributeType: S
          - AttributeName: sk
            AttributeType: S
        KeySchema:
          - AttributeName: pk
            KeyType: HASH
          - AttributeName: sk
            KeyType: RANGE
  ```

  > API Gateway, Cognito, IAM rolleri ve CloudWatch logging dahil olmak üzere tam şablonlar `serverless_stack.py` tarafından oluşturulur ve `references/architecture_patterns.md` dosyasında da mevcuttur.

  **Örnek CDK TypeScript code parçacığı (three-tier deseni):**

  ```typescript
  import * as ecs from 'aws-cdk-lib/aws-ecs';
  import * as ec2 from 'aws-cdk-lib/aws-ec2';
  import * as rds from 'aws-cdk-lib/aws-rds';

  const vpc = new ec2.Vpc(this, 'AppVpc', { maxAzs: 2 });

  const cluster = new ecs.Cluster(this, 'AppCluster', { vpc });

  const db = new rds.ServerlessCluster(this, 'AppDb', {
    engine: rds.DatabaseClusterEngine.auroraPostgres({
      version: rds.AuroraPostgresEngineVersion.VER_15_2,
    }),
    vpc,
    scaling: { minCapacity: 0.5, maxCapacity: 4 },
  });
  ```

  ### Adım 4: Maliyetleri İnceleyin

  Tahmini maliyetleri ve optimizasyon fırsatlarını analiz edin:

  ```bash
  python scripts/cost_optimizer.py --resources current_setup.json --monthly-spend 2000
  ```

  **Örnek çıktı:**

  ```json
  {
    "current_monthly_usd": 2000,
    "recommendations": [
      { "action": "Right-size RDS db.r5.2xlarge → db.r5.large", "savings_usd": 420, "priority": "high" },
      { "action": "Purchase 1-yr Compute Savings Plan at 40% utilization", "savings_usd": 310, "priority": "high" },
      { "action": "Move S3 objects >90 days to Glacier Instant Retrieval", "savings_usd": 85, "priority": "medium" }
    ],
    "total_potential_savings_usd": 815
  }
  ```

  Çıktı şunları içerir:
  - Servise göre aylık maliyet dağılımı
  - Doğru boyutlandırma önerileri
  - Savings Plans fırsatları
  - Potansiyel aylık tasarruflar

  ### Adım 5: Dağıtın

  Oluşturulan altyapıyı dağıtın:

  ```bash
  # CloudFormation
  aws cloudformation create-stack \
    --stack-name my-app-stack \
    --template-body file://template.yaml \
    --capabilities CAPABILITY_IAM

  # CDK
  cdk deploy

  # Terraform
  terraform init && terraform apply
  ```

  ### Adım 6: Doğrulayın ve Hataları Yönetin

  Dağıtımı doğrulayın ve izleme ayarlayın:

  ```bash
  # Yığın durumunu kontrol edin
  aws cloudformation describe-stacks --stack-name my-app-stack

  # CloudWatch alarmları ayarlayın
  aws cloudwatch put-metric-alarm --alarm-name high-errors ...
  ```

  **Stack oluşturma başarısız olursa:**

  1. Hata nedenini kontrol edin:
     ```bash
     aws cloudformation describe-stack-events \
       --stack-name my-app-stack \
       --query 'StackEvents[?ResourceStatus==`CREATE_FAILED`]'
     ```
  2. Lambda veya ECS hataları için CloudWatch Logs'u gözden geçirin.
  3. Şablonu veya kaynak yapılandırmasını düzeltin.
  4. Yeniden denemeden önce başarısız yığını silin:
     ```bash
     aws cloudformation delete-stack --stack-name my-app-stack
     # Silme tamamlanana kadar bekleyin
     aws cloudformation wait stack-delete-complete --stack-name my-app-stack
     # Yeniden dağıtın
     aws cloudformation create-stack ...
     ```

  **Yaygın hata nedenleri:**
  - IAM izin hataları → `--capabilities CAPABILITY_IAM` ve rol güven ilkelerini doğrulayın
  - Kaynak sınırı aşıldı → Service Quotas konsolundan kota artışı talep edin
  - Geçersiz şablon sözdizimi → dağıtmadan önce `aws cloudformation validate-template --template-body file://template.yaml` komutunu çalıştırın

  ---

  ## Araçlar

  ### architecture_designer.py

  Gereksinimler temelinde mimari desenler oluşturur.

  ```bash
  python scripts/architecture_designer.py --input requirements.json --output design.json
  ```

  **Giriş:** Uygulama türü, ölçek, bütçe, uygunluk gereksinimleri içeren JSON
  **Çıktı:** Önerilen desen, service yığını, maliyet tahmini, artılar/eksiler

  ### serverless_stack.py

  Serverless CloudFormation şablonları oluşturur.

  ```bash
  python scripts/serverless_stack.py --app-name my-app --region us-east-1
  ```

  **Çıktı:** Aşağıdakileri içeren üretim hazırı CloudFormation YAML:
  - API Gateway + Lambda
  - DynamoDB tablosu
  - Cognito kullanıcı havuzu
  - En az yetki ilkesi olan IAM rolleri
  - CloudWatch logging

  ### cost_optimizer.py

  Maliyetleri analiz eder ve optimizasyonlar önerir.

  ```bash
  python scripts/cost_optimizer.py --resources inventory.json --monthly-spend 5000
  ```

  **Çıktı:** Aşağıdakiler için öneriler:
  - Boş kaynakların kaldırılması
  - Instance doğru boyutlandırması
  - Ayrılmış kapasite satın alımları
  - Depolama katmanı dönüşümleri
  - NAT Gateway alternatifleri

  ---

  ## Hızlı Başlangıç

  ### MVP Mimarisi (< $100/ay)

  ```
  Soru: "Mobil uygulama için 1000 kullanıcıyla serverless MVP backend tasarlayın"

  Sonuç:
  - API için Lambda + API Gateway
  - Veri için DynamoDB pay-per-request
  - Kimlik doğrulama için Cognito
  - Statik varlıklar için S3 + CloudFront
  - Tahmini: $20-50/ay
  ```

  ### Ölçeklendirme Mimarisi ($500-2000/ay)

  ```
  Soru: "50k kullanıcılı SaaS platformu için ölçeklenebilir mimari tasarlayın"

  Sonuç:
  - Containerized API için ECS Fargate
  - İlişkisel veriler için Aurora Serverless
  - Oturum önbellekleme için ElastiCache
  - CDN için CloudFront
  - CI/CD için CodePipeline
  - Multi-AZ dağıtımı
  ```

  ### Maliyet Optimizasyonu

  ```
  Soru: "AWS kurulumumu %30 oranında maliyet düşürmek için optimize edin. Şu anki harcama: $3000/ay"

  Sağlayın: Mevcut kaynak envanteri (EC2, RDS, S3, vb.)

  Sonuç:
  - Boş kaynak tanımlanması
  - Doğru boyutlandırma önerileri
  - Savings Plans analizi
  - Depolama yaşam döngüsü ilkeleri
  - Hedef tasarruf: $900/ay
  ```

  ### IaC Oluşturma

  ```
  Soru: "Otomatik ölçeklendirmeli three-tier web uygulaması için CloudFormation oluşturun"

  Sonuç:
  - Genel/özel alt ağlar olan VPC
  - HTTPS'li ALB
  - Otomatik ölçeklendirmeli ECS Fargate
  - Okuma kopyaları olan Aurora
  - Güvenlik grupları ve IAM rolleri
  ```

  ---

  ## Giriş Gereksinimleri

  Mimari tasarım için bu ayrıntıları sağlayın:

  | Gereksinim | Açıklama | Örnek |
  |-------------|----------|---------|
  | Uygulama türü | Ne inşa ettiğiniz | SaaS platformu, mobil backend |
  | Beklenen ölçek | Kullanıcılar, istekler/san | 10k kullanıcı, 100 RPS |
  | Bütçe | Aylık AWS limiti | $500/ay maksimum |
  | Ekip bağlamı | Boyut, AWS deneyimi | 3 geliştirici, ara seviye |
  | Uygunluk | Düzenleyici gereksinimler | HIPAA, GDPR, SOC 2 |
  | Kullanılabilirlik | Çalışma süresi gereksinimleri | 99.9% SLA, 1sa RPO |

  **JSON Formatı:**

  ```json
  {
    "application_type": "saas_platform",
    "expected_users": 10000,
    "requests_per_second": 100,
    "budget_monthly_usd": 500,
    "team_size": 3,
    "aws_experience": "intermediate",
    "compliance": ["SOC2"],
    "availability_sla": "99.9%"
  }
  ```

  ---

  ## Çıktı Formatları

  ### Mimari Tasarım

  - Desen önerisi ve mantığı
  - Servise yığını diyagramı (ASCII)
  - Aylık maliyet tahmini ve ödünleşimler

  ### IaC Şablonları

  - **CloudFormation YAML**: Üretim hazırı SAM/CFN şablonları
  - **CDK TypeScript**: Type-safe altyapı kodu
  - **Terraform HCL**: Multi-cloud uyumlu yapılandırmalar

  ### Maliyet Analizi

  - Mevcut harcama dağılımı ve optimizasyon önerileri
  - Öncelik eylemi listesi (yüksek/orta/düşük) ve uygulama kontrol listesi

  ---

  ## Referans Belgelendirmesi

  | Belge | İçerik |
  |----------|--------|
  | `references/architecture_patterns.md` | 6 desen: serverless, microservices, three-tier, veri işleme, GraphQL, multi-region |
  | `references/service_selection.md` | Compute, database, storage, messaging için karar matrisleri |
  | `references/best_practices.md` | Serverless tasarımı, maliyet optimizasyonu, güvenlik sertleştirmesi, ölçeklenebilirlik |
---

# AWS Solution Architect

Design scalable, cost-effective AWS architectures for startups with infrastructure-as-code templates.

---

## Workflow

### Step 1: Gather Requirements

Collect application specifications:

```
- Application type (web app, mobile backend, data pipeline, SaaS)
- Expected users and requests per second
- Budget constraints (monthly spend limit)
- Team size and AWS experience level
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
  "service_stack": ["S3", "CloudFront", "API Gateway", "Lambda", "DynamoDB", "Cognito"],
  "estimated_monthly_cost_usd": 35,
  "pros": ["Low ops overhead", "Pay-per-use", "Auto-scaling"],
  "cons": ["Cold starts", "15-min Lambda limit", "Eventual consistency"]
}
```

Select from recommended patterns:
- **Serverless Web**: S3 + CloudFront + API Gateway + Lambda + DynamoDB
- **Event-Driven Microservices**: EventBridge + Lambda + SQS + Step Functions
- **Three-Tier**: ALB + ECS Fargate + Aurora + ElastiCache
- **GraphQL Backend**: AppSync + Lambda + DynamoDB + Cognito

See `references/architecture_patterns.md` for detailed pattern specifications.

**Validation checkpoint:** Confirm the recommended pattern matches the team's operational maturity and compliance requirements before proceeding to Step 3.

### Step 3: Generate IaC Templates

Create infrastructure-as-code for the selected pattern:

```bash
# Serverless stack (CloudFormation)
python scripts/serverless_stack.py --app-name my-app --region us-east-1
```

**Example CloudFormation YAML output (core serverless resources):**

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31

Parameters:
  AppName:
    Type: String
    Default: my-app

Resources:
  ApiFunction:
    Type: AWS::Serverless::Function
    Properties:
      Handler: index.handler
      Runtime: nodejs20.x
      MemorySize: 512
      Timeout: 30
      Environment:
        Variables:
          TABLE_NAME: !Ref DataTable
      Policies:
        - DynamoDBCrudPolicy:
            TableName: !Ref DataTable
      Events:
        ApiEvent:
          Type: Api
          Properties:
            Path: /{proxy+}
            Method: ANY

  DataTable:
    Type: AWS::DynamoDB::Table
    Properties:
      BillingMode: PAY_PER_REQUEST
      AttributeDefinitions:
        - AttributeName: pk
          AttributeType: S
        - AttributeName: sk
          AttributeType: S
      KeySchema:
        - AttributeName: pk
          KeyType: HASH
        - AttributeName: sk
          KeyType: RANGE
```

> Full templates including API Gateway, Cognito, IAM roles, and CloudWatch logging are generated by `serverless_stack.py` and also available in `references/architecture_patterns.md`.

**Example CDK TypeScript snippet (three-tier pattern):**

```typescript
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';

const vpc = new ec2.Vpc(this, 'AppVpc', { maxAzs: 2 });

const cluster = new ecs.Cluster(this, 'AppCluster', { vpc });

const db = new rds.ServerlessCluster(this, 'AppDb', {
  engine: rds.DatabaseClusterEngine.auroraPostgres({
    version: rds.AuroraPostgresEngineVersion.VER_15_2,
  }),
  vpc,
  scaling: { minCapacity: 0.5, maxCapacity: 4 },
});
```

### Step 4: Review Costs

Analyze estimated costs and optimization opportunities:

```bash
python scripts/cost_optimizer.py --resources current_setup.json --monthly-spend 2000
```

**Example output:**

```json
{
  "current_monthly_usd": 2000,
  "recommendations": [
    { "action": "Right-size RDS db.r5.2xlarge → db.r5.large", "savings_usd": 420, "priority": "high" },
    { "action": "Purchase 1-yr Compute Savings Plan at 40% utilization", "savings_usd": 310, "priority": "high" },
    { "action": "Move S3 objects >90 days to Glacier Instant Retrieval", "savings_usd": 85, "priority": "medium" }
  ],
  "total_potential_savings_usd": 815
}
```

Output includes:
- Monthly cost breakdown by service
- Right-sizing recommendations
- Savings Plans opportunities
- Potential monthly savings

### Step 5: Deploy

Deploy the generated infrastructure:

```bash
# CloudFormation
aws cloudformation create-stack \
  --stack-name my-app-stack \
  --template-body file://template.yaml \
  --capabilities CAPABILITY_IAM

# CDK
cdk deploy

# Terraform
terraform init && terraform apply
```

### Step 6: Validate and Handle Failures

Verify deployment and set up monitoring:

```bash
# Check stack status
aws cloudformation describe-stacks --stack-name my-app-stack

# Set up CloudWatch alarms
aws cloudwatch put-metric-alarm --alarm-name high-errors ...
```

**If stack creation fails:**

1. Check the failure reason:
   ```bash
   aws cloudformation describe-stack-events \
     --stack-name my-app-stack \
     --query 'StackEvents[?ResourceStatus==`CREATE_FAILED`]'
   ```
2. Review CloudWatch Logs for Lambda or ECS errors.
3. Fix the template or resource configuration.
4. Delete the failed stack before retrying:
   ```bash
   aws cloudformation delete-stack --stack-name my-app-stack
   # Wait for deletion
   aws cloudformation wait stack-delete-complete --stack-name my-app-stack
   # Redeploy
   aws cloudformation create-stack ...
   ```

**Common failure causes:**
- IAM permission errors → verify `--capabilities CAPABILITY_IAM` and role trust policies
- Resource limit exceeded → request quota increase via Service Quotas console
- Invalid template syntax → run `aws cloudformation validate-template --template-body file://template.yaml` before deploying

---

## Tools

### architecture_designer.py

Generates architecture patterns based on requirements.

```bash
python scripts/architecture_designer.py --input requirements.json --output design.json
```

**Input:** JSON with app type, scale, budget, compliance needs
**Output:** Recommended pattern, service stack, cost estimate, pros/cons

### serverless_stack.py

Creates serverless CloudFormation templates.

```bash
python scripts/serverless_stack.py --app-name my-app --region us-east-1
```

**Output:** Production-ready CloudFormation YAML with:
- API Gateway + Lambda
- DynamoDB table
- Cognito user pool
- IAM roles with least privilege
- CloudWatch logging

### cost_optimizer.py

Analyzes costs and recommends optimizations.

```bash
python scripts/cost_optimizer.py --resources inventory.json --monthly-spend 5000
```

**Output:** Recommendations for:
- Idle resource removal
- Instance right-sizing
- Reserved capacity purchases
- Storage tier transitions
- NAT Gateway alternatives

---

## Quick Start

### MVP Architecture (< $100/month)

```
Ask: "Design a serverless MVP backend for a mobile app with 1000 users"

Result:
- Lambda + API Gateway for API
- DynamoDB pay-per-request for data
- Cognito for authentication
- S3 + CloudFront for static assets
- Estimated: $20-50/month
```

### Scaling Architecture ($500-2000/month)

```
Ask: "Design a scalable architecture for a SaaS platform with 50k users"

Result:
- ECS Fargate for containerized API
- Aurora Serverless for relational data
- ElastiCache for session caching
- CloudFront for CDN
- CodePipeline for CI/CD
- Multi-AZ deployment
```

### Cost Optimization

```
Ask: "Optimize my AWS setup to reduce costs by 30%. Current spend: $3000/month"

Provide: Current resource inventory (EC2, RDS, S3, etc.)

Result:
- Idle resource identification
- Right-sizing recommendations
- Savings Plans analysis
- Storage lifecycle policies
- Target savings: $900/month
```

### IaC Generation

```
Ask: "Generate CloudFormation for a three-tier web app with auto-scaling"

Result:
- VPC with public/private subnets
- ALB with HTTPS
- ECS Fargate with auto-scaling
- Aurora with read replicas
- Security groups and IAM roles
```

---

## Input Requirements

Provide these details for architecture design:

| Requirement | Description | Example |
|-------------|-------------|---------|
| Application type | What you're building | SaaS platform, mobile backend |
| Expected scale | Users, requests/sec | 10k users, 100 RPS |
| Budget | Monthly AWS limit | $500/month max |
| Team context | Size, AWS experience | 3 devs, intermediate |
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
  "aws_experience": "intermediate",
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

- **CloudFormation YAML**: Production-ready SAM/CFN templates
- **CDK TypeScript**: Type-safe infrastructure code
- **Terraform HCL**: Multi-cloud compatible configs

### Cost Analysis

- Current spend breakdown with optimization recommendations
- Priority action list (high/medium/low) and implementation checklist

---

## Reference Documentation

| Document | Contents |
|----------|----------|
| `references/architecture_patterns.md` | 6 patterns: serverless, microservices, three-tier, data processing, GraphQL, multi-region |
| `references/service_selection.md` | Decision matrices for compute, database, storage, messaging |
| `references/best_practices.md` | Serverless design, cost optimization, security hardening, scalability |
