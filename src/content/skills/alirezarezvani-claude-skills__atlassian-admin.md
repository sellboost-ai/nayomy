---
name: "atlassian-admin"
description_en: "Atlassian Administrator for managing and organizing Atlassian products (Jira, Confluence, Bitbucket, Trello), users, permissions, security, integrations, system configuration, and org-wide governance. Use when asked to add users to Jira, change Confluence permissions, configure access control, update admin settings, manage Atlassian groups, set up SSO, install marketplace apps, review security pol"
description_tr: "Atlassian ürünlerini (Jira, Confluence, Bitbucket, Trello) yönetmek, kullanıcıları organize etmek, izinleri kontrol etmek, güvenliği sağlamak, integrationları kurmak ve sistem konfigürasyonunu düzenlemek için tasarlanmış Atlassian Administrator aracı. Kullanıcı ekleme, izin yönetimi, erişim kontrolü, SSO kurulumu, marketplace uygulamaları yükleme ve güvenlik politikalarını gözden geçirme işlemleri için kullanılır."
category: "Integration"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/atlassian-admin/SKILL.md"
path: ".gemini/skills/atlassian-admin/SKILL.md"
is_collection: false
body_length: 11637
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Atlassian Administrator Expert

  ## İş Akışları

  ### Kullanıcı Sağlanması
  1. Kullanıcı hesabı oluştur: `admin.atlassian.com > User management > Invite users`
     - REST API: `POST /rest/api/3/user` ile `{"emailAddress": "...", "displayName": "...","products": [...]}`
  2. Uygun gruplara ekle: `admin.atlassian.com > User management > Groups > [group] > Add members`
  3. Ürün erişimi ata (Jira, Confluence) via `admin.atlassian.com > Products > [product] > Access`
  4. Grup şemasına göre varsayılan izinleri yapılandır
  5. Onboarding bilgisiyle hoşgeldiniz e-postası gönder
  6. **BİLDİR**: İlgili takım liderlerine yeni üyeden bahset
  7. **DOĞRULA**: Kullanıcının `admin.atlassian.com/o/{orgId}/users` adresinde aktif göründüğünü ve giriş yapabildiğini doğrula

  ### Kullanıcı Sağlamayı Kaldırma
  1. **KRİTİK**: Kullanıcının sahip olduğu içeriği ve biletleri denetle
     - Jira: `GET /rest/api/3/search?jql=assignee={accountId}` ile açık sorunları bul
     - Confluence: `GET /wiki/rest/api/user/{accountId}/property` ile sahip olunan alanları/sayfaları bul
  2. Sahipliği yeniden ata:
     - Jira projeleri: `Project settings > People > Change lead`
     - Confluence alanları: `Space settings > Overview > Edit space details`
     - Açık sorunlar: `Jira > Issues > Bulk change` ile toplu yeniden ata
     - Filtreler ve kontrol panelleri: `User management > [user] > Managed content` ile aktar
  3. Tüm gruplardan çıkar: `admin.atlassian.com > User management > [user] > Groups`
  4. Ürün erişimini iptal et
  5. Hesabı deaktif et: `admin.atlassian.com > User management > [user] > Deactivate`
     - REST API: `DELETE /rest/api/3/user?accountId={accountId}`
  6. **DOĞRULA**: `GET /rest/api/3/user?accountId={accountId}` adresinin `"active": false` döndürdüğünü doğrula
  7. Deprovisioning işlemini denetim günlüğünde belgelendir
  8. **KULLAN**: Kalan sorunları yeniden atamak için Jira Expert'i kullan

  ### Grup Yönetimi
  1. Grup oluştur: `admin.atlassian.com > User management > Groups > Create group`
     - REST API: `POST /rest/api/3/group` ile `{"name": "..."}`
     - Kategorize et: Takımlar (engineering, product, sales), Roller (admins, users, viewers), Projeler (project-alpha-team)
  2. Grup amacını ve üyelik kriterlerini tanımla (Confluence'da belgelendir)
  3. Grup başına varsayılan izinleri ata
  4. Kullanıcıları uygun gruplara ekle
  5. **DOĞRULA**: `GET /rest/api/3/group/member?groupName={name}` ile grup üyelerini doğrula
  6. Düzenli inceleme ve temizlik (üç ayda bir)
  7. **KULLAN**: Grup yapısını belgelemek için Confluence Expert'i kullan

  ### İzin Şeması Tasarımı
  **Jira İzin Şemaları** (`Jira Settings > Issues > Permission Schemes`):
  - **Genel Proje**: Tüm kullanıcılar görüntüleyebilir, üyeler düzenleyebilir
  - **Takım Projesi**: Takım üyeleri tam erişim, paydaşlar sadece görüntüleme
  - **Kısıtlı Proje**: Sadece belirtilen kişiler
  - **Admin Projesi**: Sadece adminler

  **Confluence İzin Şemaları** (`Confluence Admin > Space permissions`):
  - **Genel Alan**: Tüm kullanıcılar görüntüleyebilir, alan üyeleri düzenleyebilir
  - **Takım Alanı**: Takım spesifik erişim
  - **Kişisel Alan**: Sadece bireysel kullanıcı
  - **Kısıtlı Alan**: Belirtilen kişiler ve gruplar

  **En İyi Uygulamalar**:
  - Bireysel izinler yerine gruplar kullan
  - En az ayrıcalık prensibi
  - Düzenli izin denetimleri
  - İzin mantığını belgelendir

  ### SSO Yapılandırması
  1. Identity provider'ı seç (Okta, Azure AD, Google)
  2. SAML ayarlarını yapılandır: `admin.atlassian.com > Security > SAML single sign-on > Add SAML configuration`
     - IdP'den Entity ID, ACS URL ve X.509 sertifikasını ayarla
  3. Admin hesabıyla SSO'yu test et (test sırasında şifre girişini etkin tut)
  4. Normal kullanıcı hesabıyla test et
  5. Organizasyon için SSO'yu etkinleştir
  6. SSO'yu zorla: `admin.atlassian.com > Security > Authentication policies > Enforce SSO`
  7. Otomatik sağlama için SCIM yapılandır: `admin.atlassian.com > User provisioning > [IdP] > Enable SCIM`
  8. **DOĞRULA**: SSO akışının başarılı olduğunu ve denetim günlüklerinin `saml.login.success` olaylarını gösterdiğini doğrula
  9. SSO günlüklerini izle: `admin.atlassian.com > Security > Audit log > filter: SSO`

  ### Marketplace Uygulama Yönetimi
  1. Uygulama ihtiyacını ve güvenliğini değerlendir: vendor'ın güvenlik öz değerlendirmesini `marketplace.atlassian.com` adresinde kontrol et
  2. Vendor güvenlik belgelerini incele (penetration test raporları, SOC 2)
  3. Uygulamayı sandbox ortamında test et
  4. Satın al veya deneme talep et: `admin.atlassian.com > Billing > Manage subscriptions`
  5. Uygulama yükle: `admin.atlassian.com > Products > [product] > Apps > Find new apps`
  6. Vendor belgelerine göre uygulama ayarlarını yapılandır
  7. Kullanıcıları uygulama kullanımı konusunda eğit
  8. **DOĞRULA**: Uygulamanın `GET /rest/plugins/1.0/` adresinde göründüğünü ve sağlık kontrolünün geçtiğini doğrula
  9. Uygulama performansını ve kullanımını izle; yıllık olarak devam eden ihtiyaç için incele

  ### Sistem Performans Optimizasyonu
  **Jira** (`Jira Settings > System`):
  - Eski projeleri arşivle: `Project settings > Archive project`
  - Yeniden indeksle: `Jira Settings > System > Indexing > Full re-index`
  - Kullanılmayan iş akışlarını ve şemaları temizle: `Jira Settings > Issues > Workflows`
  - Kuyruk/thread sayılarını izle: `Jira Settings > System > System info`

  **Confluence** (`Confluence Admin > Configuration`):
  - İnaktif alanları arşivle: `Space tools > Overview > Archive space`
  - Yetim sayfaları kaldır: `Confluence Admin > Orphaned pages`
  - İndeksi ve önbelleği izle: `Confluence Admin > Cache management`

  **İzleme Döngüsü**:
  - Günlük sağlık kontrolleri: `admin.atlassian.com > Products > [product] > Health`
  - Haftalık performans raporları
  - Aylık kapasite planlaması
  - Üç ayda bir optimizasyon incelemeleri

  ### Entegrasyon Kurulumu
  **Yaygın Entegrasyonlar**:
  - **Slack**: `Jira Settings > Apps > Slack integration` — Jira ve Confluence için bildirimler
  - **GitHub/Bitbucket**: `Jira Settings > Apps > DVCS accounts` — commit'leri sorunlara bağla
  - **Microsoft Teams**: `admin.atlassian.com > Apps > Microsoft Teams`
  - **Zoom**: Marketplace uygulaması `zoom-for-jira` aracılığıyla kullanılabilir
  - **Salesforce**: Marketplace uygulaması `salesforce-connector` aracılığıyla

  **Yapılandırma Adımları**:
  1. Entegrasyon gereksinimlerini ve gerekli OAuth kapsamlarını incele
  2. OAuth veya API kimlik doğrulamasını yapılandır (token'ları güvenli vault'ta sakla, düz metinde değil)
  3. Alanları ve veri akışlarını eşle
  4. Entegrasyonu örnek verilerle iyice test et
  5. Yapılandırmayı Confluence runbook'unda belgelendir
  6. Kullanıcıları entegrasyon özellikleri konusunda eğit
  7. **DOĞRULA**: `Jira Settings > System > WebHooks > [webhook] > Test` aracılığıyla webhook teslimini doğrula
  8. Uygulamaya özel panolar aracılığıyla entegrasyon sağlığını izle

  ## Genel Yapılandırma

  ### Jira Genel Ayarları (`Jira Settings > Issues`)
  **Sorun Türleri**: Org çapında sorun türleri oluştur ve yönet; sorun türü şemaları tanımla; projeler arasında standartlaştır
  **İş Akışları**: `Workflows > Add workflow` aracılığıyla genel iş akışı şablonları oluştur; iş akışı şemalarını yönet
  **Özel Alanlar**: `Custom fields > Add custom field` adresinde org çapında özel alanlar oluştur; alan yapılandırmalarını ve bağlamlarını yönet
  **Bildirim Şemaları**: Varsayılan bildirim kurallarını yapılandır; özel bildirim şemaları oluştur; e-posta şablonlarını yönet

  ### Confluence Genel Ayarları (`Confluence Admin`)
  **Blueprintlar ve Şablonlar**: `Configuration > Global Templates and Blueprints` adresinde org çapında şablonlar oluştur; blueprint kullanılabilirliğini yönet
  **Temalar ve Görünüm**: `Configuration > Themes` adresinde org markalamasını yapılandır; logoları ve renkleri özelleştir
  **Makrolar**: `Configuration > Macro usage` adresinde makroları etkinleştir/deaktif et; makro izinlerini yapılandır

  ### Güvenlik Ayarları (`admin.atlassian.com > Security`)
  **Kimlik Doğrulama**:
  - Şifre politikaları: `Security > Authentication policies > Edit`
  - Oturum zaman aşımı: `Security > Session duration`
  - API token yönetimi: `Security > API token controls`

  **Veri Residency**: `admin.atlassian.com > Data residency > Pin products` adresinde veri konumunu yapılandır

  **Denetim Günlükleri**: `admin.atlassian.com > Security > Audit log`
  - Kapsamlı günlüğü etkinleştir; `GET /admin/v1/orgs/{orgId}/audit-log` aracılığıyla dışa aktar
  - Politikaya göre sakla (SOC 2/GDPR uyumluluğu için minimum 7 yıl)

  ## Yönetim ve Politikalar

  ### Erişim Yönetimi
  - Tüm kullanıcı erişiminin üç ayda bir incelenmesi: `admin.atlassian.com > User management > Export users`
  - Kullanıcı rollerini ve izinlerini doğrula; inaktif kullanıcıları kaldır
  - Org adminleri 2–3 kişiye sınırla; admin eylemlerini aylık olarak denetle
  - Tüm adminler için MFA zorunlu kıl: `Security > Authentication policies > Require 2FA`

  ### Adlandırma Kuralları
  **Jira**: Proje anahtarları 3–4 büyük harf (PROJ, WEB); sorun türleri Başlık Durumu; özel alanlar ön ek (CF: Story Points)
  **Confluence**: Alanlar Takım/Proje ön ekini kullan (TEAM: Engineering); sayfalar açıklayıcı ve tutarlı; etiketler küçük harf, tire ile ayrılmış

  ### Değişiklik Yönetimi
  **Büyük Değişiklikler**: 2 hafta öncesinden duyur; sandbox'ta test et; geri alma planı oluştur; yoğun olmayan saatlerde gerçekleştir; uygulama sonrası inceleme
  **Küçük Değişiklikler**: 48 saat öncesinden duyur; değişiklik günlüğünde belgelendir; sorunları izle

  ## Olağanüstü Durum Kurtarması

  ### Yedekleme Stratejisi
  **Jira ve Confluence**: Günlük otomatik yedeklemeler; haftalık manuel doğrulama; 30 günlük saklama; offsite depolama
  - Manuel yedeklemeyi tetikle: `Jira Settings > System > Backup system` / `Confluence Admin > Backup and Restore`

  **Kurtarma Testi**: Üç ayda bir kurtarma tatbikatı; prosedürleri belgelendir; RTO ve RPO'yu ölç

  ### Olay Müdahalesi
  **Önem Düzeyleri**:
  - **P1 (Kritik)**: Sistem kapalı — 15 dakikada yanıt ver
  - **P2 (Yüksek)**: Ana özellik bozuk — 1 saatte yanıt ver
  - **P3 (Orta)**: Küçük sorun — 4 saatte yanıt ver
  - **P4 (Düşük)**: Geliştirme — 24 saatte yanıt ver

  **Müdahale Adımları**:
  1. Olayı kabul et ve kaydet
  2. Etkiyi ve önem düzeyini değerlendir
  3. Paydaşlara durumu bildir
  4. Kök nedenini araştır (`admin.atlassian.com > Products > [product] > Health` ve Atlassian Status Page'i kontrol et)
  5. Düzeltmeyi uygula
  6. **DOĞRULA**: Etkilenen kullanıcı testi ve sağlık kontrolü aracılığıyla çözünürlüğü doğrula
  7. Post-mortem ve dersleri

  ## Metrikler ve Raporlama

  **Sistem Sağlığı**: Aktif kullanıcılar (günlük/haftalık/aylık), depolama kullanımı, API rate limitleri, entegrasyon sağlığı, yanıt süreleri
  - Dışa aktar: `GET /admin/v1/orgs/{orgId}/users` ile kullanıcı sayıları; ürüne özel analitik panolları

  **Kullanım Analitikleri**: En aktif projeler/alanlar, içerik oluşturma eğilimleri, kullanıcı katılımı, arama desenleri
  **Uyum Metrikleri**: Kullanıcı erişim incelemesi tamamlanması, güvenlik denetim bulguları, başarısız giriş denemeleri, API token kullanımı

  ## Karar Çerçevesi ve Devretme Protokolleri

  **Atlassian Desteğine Devret**: Sistem kesintisi, org çapında performans bozulması, veri kaybı/bozulması, lisans/faturalandırma sorunları, karmaşık göçler

  **Ürün Uzmanlarına Delege Et**:
  - Jira Expert: Projeye özel yapılandırma
  - Confluence Expert: Alana özel ayarlar
  - Scrum Master: Takım iş akışı gereksinimleri
  - Senior PM: Stratejik planlama girdisi

  **Güvenlik Takımını Dahil Et**: Güvenlik olayları, olağandışı erişim desenleri, uyum denetimi hazırlığı, yeni entegrasyon güvenlik incelemesi

  **Jira Expert'e**: Yeni genel iş akışları, özel alanlar, izin şemaları veya mevcut otomasyon yetenekleri
  **Confluence Expert'e**: Yeni genel şablonlar, alan izin şemaları, blueprintlar veya yapılandırılan makrolar
  **Senior PM'ye**: Kullanım analitikleri, kapasite planlama içgörüleri, maliyet optimizasyonu, güvenlik uyum durumu
  **Scrum Master'a**: Takım erişimi sağlandı, pano yapılandırma seçenekleri, otomasyon kuralları, etkinleştirilen entegrasyonlar
  **Tüm Rollerden**: Kullanıcı erişim istekleri, izin değişiklikleri, uygulama kurulum istekleri, yapılandırma desteği, olay raporları

  ## Atlassian MCP Entegrasyonu

  **Birincil Araçlar**: Jira MCP, Confluence MCP

  **Admin İşlemleri**:
  - API aracılığıyla kullanıcı ve grup yönetimi
  - Toplu izin güncellemeleri
  - Yapılandırma denetimleri
  - Kullanım raporlaması
  - Sistem sağlığı izlemesi
  - Otomatik uyum kontrolleri

  **Entegrasyon Noktaları**:
  - Tüm rolleri admin yetenekleriyle destekle
  - Jira Expert'i genel yapılandırmalarla donatmak
  - Confluence Expert'e şablon yönetimi sağla
  - Senior PM'ye org sağlığında görünürlük sağla
  - Scrum Master'ı takım sağlamasıyla etkinleştir
---

# Atlassian Administrator Expert

## Workflows

### User Provisioning
1. Create user account: `admin.atlassian.com > User management > Invite users`
   - REST API: `POST /rest/api/3/user` with `{"emailAddress": "...", "displayName": "...","products": [...]}`
2. Add to appropriate groups: `admin.atlassian.com > User management > Groups > [group] > Add members`
3. Assign product access (Jira, Confluence) via `admin.atlassian.com > Products > [product] > Access`
4. Configure default permissions per group scheme
5. Send welcome email with onboarding info
6. **NOTIFY**: Relevant team leads of new member
7. **VERIFY**: Confirm user appears active at `admin.atlassian.com/o/{orgId}/users` and can log in

### User Deprovisioning
1. **CRITICAL**: Audit user's owned content and tickets
   - Jira: `GET /rest/api/3/search?jql=assignee={accountId}` to find open issues
   - Confluence: `GET /wiki/rest/api/user/{accountId}/property` to find owned spaces/pages
2. Reassign ownership of:
   - Jira projects: `Project settings > People > Change lead`
   - Confluence spaces: `Space settings > Overview > Edit space details`
   - Open issues: bulk reassign via `Jira > Issues > Bulk change`
   - Filters and dashboards: transfer via `User management > [user] > Managed content`
3. Remove from all groups: `admin.atlassian.com > User management > [user] > Groups`
4. Revoke product access
5. Deactivate account: `admin.atlassian.com > User management > [user] > Deactivate`
   - REST API: `DELETE /rest/api/3/user?accountId={accountId}`
6. **VERIFY**: Confirm `GET /rest/api/3/user?accountId={accountId}` returns `"active": false`
7. Document deprovisioning in audit log
8. **USE**: Jira Expert to reassign any remaining issues

### Group Management
1. Create groups: `admin.atlassian.com > User management > Groups > Create group`
   - REST API: `POST /rest/api/3/group` with `{"name": "..."}`
   - Structure by: Teams (engineering, product, sales), Roles (admins, users, viewers), Projects (project-alpha-team)
2. Define group purpose and membership criteria (document in Confluence)
3. Assign default permissions per group
4. Add users to appropriate groups
5. **VERIFY**: Confirm group members via `GET /rest/api/3/group/member?groupName={name}`
6. Regular review and cleanup (quarterly)
7. **USE**: Confluence Expert to document group structure

### Permission Scheme Design
**Jira Permission Schemes** (`Jira Settings > Issues > Permission Schemes`):
- **Public Project**: All users can view, members can edit
- **Team Project**: Team members full access, stakeholders view
- **Restricted Project**: Named individuals only
- **Admin Project**: Admins only

**Confluence Permission Schemes** (`Confluence Admin > Space permissions`):
- **Public Space**: All users view, space members edit
- **Team Space**: Team-specific access
- **Personal Space**: Individual user only
- **Restricted Space**: Named individuals and groups

**Best Practices**:
- Use groups, not individual permissions
- Principle of least privilege
- Regular permission audits
- Document permission rationale

### SSO Configuration
1. Choose identity provider (Okta, Azure AD, Google)
2. Configure SAML settings: `admin.atlassian.com > Security > SAML single sign-on > Add SAML configuration`
   - Set Entity ID, ACS URL, and X.509 certificate from IdP
3. Test SSO with admin account (keep password login active during test)
4. Test with regular user account
5. Enable SSO for organization
6. Enforce SSO: `admin.atlassian.com > Security > Authentication policies > Enforce SSO`
7. Configure SCIM for auto-provisioning: `admin.atlassian.com > User provisioning > [IdP] > Enable SCIM`
8. **VERIFY**: Confirm SSO flow succeeds and audit logs show `saml.login.success` events
9. Monitor SSO logs: `admin.atlassian.com > Security > Audit log > filter: SSO`

### Marketplace App Management
1. Evaluate app need and security: check vendor's security self-assessment at `marketplace.atlassian.com`
2. Review vendor security documentation (penetration test reports, SOC 2)
3. Test app in sandbox environment
4. Purchase or request trial: `admin.atlassian.com > Billing > Manage subscriptions`
5. Install app: `admin.atlassian.com > Products > [product] > Apps > Find new apps`
6. Configure app settings per vendor documentation
7. Train users on app usage
8. **VERIFY**: Confirm app appears in `GET /rest/plugins/1.0/` and health check passes
9. Monitor app performance and usage; review annually for continued need

### System Performance Optimization
**Jira** (`Jira Settings > System`):
- Archive old projects: `Project settings > Archive project`
- Reindex: `Jira Settings > System > Indexing > Full re-index`
- Clean up unused workflows and schemes: `Jira Settings > Issues > Workflows`
- Monitor queue/thread counts: `Jira Settings > System > System info`

**Confluence** (`Confluence Admin > Configuration`):
- Archive inactive spaces: `Space tools > Overview > Archive space`
- Remove orphaned pages: `Confluence Admin > Orphaned pages`
- Monitor index and cache: `Confluence Admin > Cache management`

**Monitoring Cadence**:
- Daily health checks: `admin.atlassian.com > Products > [product] > Health`
- Weekly performance reports
- Monthly capacity planning
- Quarterly optimization reviews

### Integration Setup
**Common Integrations**:
- **Slack**: `Jira Settings > Apps > Slack integration` — notifications for Jira and Confluence
- **GitHub/Bitbucket**: `Jira Settings > Apps > DVCS accounts` — link commits to issues
- **Microsoft Teams**: `admin.atlassian.com > Apps > Microsoft Teams`
- **Zoom**: Available via Marketplace app `zoom-for-jira`
- **Salesforce**: Via Marketplace app `salesforce-connector`

**Configuration Steps**:
1. Review integration requirements and OAuth scopes needed
2. Configure OAuth or API authentication (store tokens in secure vault, not plain text)
3. Map fields and data flows
4. Test integration thoroughly with sample data
5. Document configuration in Confluence runbook
6. Train users on integration features
7. **VERIFY**: Confirm webhook delivery via `Jira Settings > System > WebHooks > [webhook] > Test`
8. Monitor integration health via app-specific dashboards

## Global Configuration

### Jira Global Settings (`Jira Settings > Issues`)
**Issue Types**: Create and manage org-wide issue types; define issue type schemes; standardize across projects
**Workflows**: Create global workflow templates via `Workflows > Add workflow`; manage workflow schemes
**Custom Fields**: Create org-wide custom fields at `Custom fields > Add custom field`; manage field configurations and context
**Notification Schemes**: Configure default notification rules; create custom notification schemes; manage email templates

### Confluence Global Settings (`Confluence Admin`)
**Blueprints & Templates**: Create org-wide templates at `Configuration > Global Templates and Blueprints`; manage blueprint availability
**Themes & Appearance**: Configure org branding at `Configuration > Themes`; customize logos and colors
**Macros**: Enable/disable macros at `Configuration > Macro usage`; configure macro permissions

### Security Settings (`admin.atlassian.com > Security`)
**Authentication**:
- Password policies: `Security > Authentication policies > Edit`
- Session timeout: `Security > Session duration`
- API token management: `Security > API token controls`

**Data Residency**: Configure data location at `admin.atlassian.com > Data residency > Pin products`

**Audit Logs**: `admin.atlassian.com > Security > Audit log`
- Enable comprehensive logging; export via `GET /admin/v1/orgs/{orgId}/audit-log`
- Retain per policy (minimum 7 years for SOC 2/GDPR compliance)

## Governance & Policies

### Access Governance
- Quarterly review of all user access: `admin.atlassian.com > User management > Export users`
- Verify user roles and permissions; remove inactive users
- Limit org admins to 2–3 individuals; audit admin actions monthly
- Require MFA for all admins: `Security > Authentication policies > Require 2FA`

### Naming Conventions
**Jira**: Project keys 3–4 uppercase letters (PROJ, WEB); issue types Title Case; custom fields prefixed (CF: Story Points)
**Confluence**: Spaces use Team/Project prefix (TEAM: Engineering); pages descriptive and consistent; labels lowercase, hyphen-separated

### Change Management
**Major Changes**: Announce 2 weeks in advance; test in sandbox; create rollback plan; execute during off-peak; post-implementation review
**Minor Changes**: Announce 48 hours in advance; document in change log; monitor for issues

## Disaster Recovery

### Backup Strategy
**Jira & Confluence**: Daily automated backups; weekly manual verification; 30-day retention; offsite storage
- Trigger manual backup: `Jira Settings > System > Backup system` / `Confluence Admin > Backup and Restore`

**Recovery Testing**: Quarterly recovery drills; document procedures; measure RTO and RPO

### Incident Response
**Severity Levels**:
- **P1 (Critical)**: System down — respond in 15 min
- **P2 (High)**: Major feature broken — respond in 1 hour
- **P3 (Medium)**: Minor issue — respond in 4 hours
- **P4 (Low)**: Enhancement — respond in 24 hours

**Response Steps**:
1. Acknowledge and log incident
2. Assess impact and severity
3. Communicate status to stakeholders
4. Investigate root cause (check `admin.atlassian.com > Products > [product] > Health` and Atlassian Status Page)
5. Implement fix
6. **VERIFY**: Confirm resolution via affected user test and health check
7. Post-mortem and lessons learned

## Metrics & Reporting

**System Health**: Active users (daily/weekly/monthly), storage utilization, API rate limits, integration health, response times
- Export via: `GET /admin/v1/orgs/{orgId}/users` for user counts; product-specific analytics dashboards

**Usage Analytics**: Most active projects/spaces, content creation trends, user engagement, search patterns
**Compliance Metrics**: User access review completion, security audit findings, failed login attempts, API token usage

## Decision Framework & Handoff Protocols

**Escalate to Atlassian Support**: System outage, performance degradation org-wide, data loss/corruption, license/billing issues, complex migrations

**Delegate to Product Experts**:
- Jira Expert: Project-specific configuration
- Confluence Expert: Space-specific settings
- Scrum Master: Team workflow needs
- Senior PM: Strategic planning input

**Involve Security Team**: Security incidents, unusual access patterns, compliance audit preparation, new integration security review

**TO Jira Expert**: New global workflows, custom fields, permission schemes, or automation capabilities available
**TO Confluence Expert**: New global templates, space permission schemes, blueprints, or macros configured
**TO Senior PM**: Usage analytics, capacity planning insights, cost optimization, security compliance status
**TO Scrum Master**: Team access provisioned, board configuration options, automation rules, integrations enabled
**FROM All Roles**: User access requests, permission changes, app installation requests, configuration support, incident reports

## Atlassian MCP Integration

**Primary Tools**: Jira MCP, Confluence MCP

**Admin Operations**:
- User and group management via API
- Bulk permission updates
- Configuration audits
- Usage reporting
- System health monitoring
- Automated compliance checks

**Integration Points**:
- Support all roles with admin capabilities
- Enable Jira Expert with global configurations
- Provide Confluence Expert with template management
- Ensure Senior PM has visibility into org health
- Enable Scrum Master with team provisioning
