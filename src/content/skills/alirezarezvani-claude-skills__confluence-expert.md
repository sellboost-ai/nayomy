---
name: "confluence-expert"
description_en: "Atlassian Confluence expert for creating and managing spaces, knowledge bases, and documentation. Configures space permissions and hierarchies, creates page templates with macros, sets up documentation taxonomies, designs page layouts, and manages content governance. Use when users need to build or restructure a Confluence space, design page hierarchies with permission structures, author or standa"
description_tr: "Atlassian Confluence uzmanı, alanlar, bilgi tabanları ve dokümantasyon oluşturmak ve yönetmek için. Alan izinleri ve hiyerarşileri yapılandırır, makrolarla sayfa şablonları oluşturur, dokümantasyon taksonomi kurar, sayfa düzenlerini tasarlar ve içerik yönetişimini yönetir. Kullanıcıların bir Confluence alanı oluşturması veya yeniden yapılandırması, izin yapılarıyla sayfa hiyerarşileri tasarlaması ya da içerik yazması gerektiğinde kullanın."
category: "Document"
repo: "alirezarezvani/claude-skills"
stars: 18313
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/confluence-expert/SKILL.md"
path: ".gemini/skills/confluence-expert/SKILL.md"
is_collection: false
body_length: 11728
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Atlassian Confluence Uzmanı
  
  Confluence alan yönetimi, dokümantasyon mimarisi, içerik oluşturma, macrolar, şablonlar ve işbirlikçi bilgi yönetiminde uzmanlık.
  
  ## Atlassian MCP Entegrasyonu
  
  **Birincil Tool**: Atlassian Remote MCP sunucusu (paketlenmiş `.mcp.json`, sunucu anahtarı `atlassian`). Toollar camelCase biçimindedir ve `mcp__atlassian__<toolName>` olarak görünür. **Kanonik tool listesi**: `project-management/references/atlassian-mcp-tools.md`. Tool adlarını uydurma — bir yetenek bu listede yoksa MCP üzerinden kullanılamaz.
  
  **Ana İşlemler** (`cloudId`'yi bir kez `mcp__atlassian__getAccessibleAtlassianResources` ile elde edin):
  
  ```
  // Alanları listele (alan OLUŞTURMA MCP üzerinden mevcut değil — aşağıyı gör)
  mcp__atlassian__getConfluenceSpaces (cloudId)
  
  // Bir üst sayfa altında sayfa oluştur — body depolama formatı XHTML veya ADF olmalı, asla wiki işareti değil
  mcp__atlassian__createConfluencePage (cloudId, space, title="Sprint 42 Notları", parent page id, body="<p>Depolama formatı XHTML'de toplantı notları</p>")
  
  // Mevcut sayfayı güncelle (getConfluencePage ile mevcut sürümü al, ardından sürüm + 1'i ver)
  mcp__atlassian__updateConfluencePage (cloudId, pageId="789012", version=5, body="<p>Güncellenen içerik</p>")
  
  // Sayfa oku (body + mevcut sürüm)
  mcp__atlassian__getConfluencePage (cloudId, pageId="789012")
  
  // CQL ile ara
  mcp__atlassian__searchConfluenceUsingCql (cloudId, cql='space = "TEAM" AND label = "meeting-notes" ORDER BY lastModified DESC')
  
  // Hiyerarşi incelemesi için alt sayfaları al
  mcp__atlassian__getConfluencePageDescendants (cloudId, pageId="123456")
  
  // Yorumlar
  mcp__atlassian__getConfluencePageFooterComments / mcp__atlassian__createConfluenceFooterComment (cloudId, pageId)
  ```
  
  **MCP üzerinden kullanılamaz — bunun yerine web UI veya REST API kullanın:**
  - Bir **alan** oluştur/sil → Confluence UI `Alanlar > Alan oluştur` veya `POST /wiki/api/v2/spaces`
  - Sayfayı **sil** → Confluence UI veya `DELETE /wiki/api/v2/pages/{id}`
  - **Etiketler** uygula → Confluence UI veya `/wiki/rest/api/content/{id}/label`
  - Alan **izinleri**, şablonlar/şemalar birinci sınıf nesneler olarak → Confluence alan ayarları UI
  
  **Entegrasyon Noktaları**:
  - Senior PM projeleri için dokümantasyon oluştur
  - Scrum Master'ı seremoni şablonlarıyla destekle
  - Jira Expert için Jira sorunlarına bağlantı ver
  - Template Creator için şablonlar sağla
  
  > **Ayrıca bkz**: `references/macro-cheat-sheet.md` depolama formatı macro sözdizimi için, `references/templates.md` şablon kütüphanesi için, `references/space-architecture-patterns.md` alan yapısı ve izin desenleri için.
  
  ## İş Akışları
  
  ### Alan Oluşturma
  
  > Alan oluşturma **MCP üzerinden mevcut değil** — alanı Confluence UI'de (`Alanlar > Alan oluştur`) veya REST (`POST /wiki/api/v2/spaces`) üzerinden oluşturun. İçindeki sayfa ağacı MCP (`mcp__atlassian__createConfluencePage`) üzerinden BİLİNEBİLİR.
  
  0. Takım açıklamasından önerilen hiyerarşi oluşturun:
     ```bash
     python3 scripts/space_structure_generator.py team_info.json --format json
     ```
     Giriş: `name`, `size`, `type`, `projects` içeren JSON. Çıktıyı kullanın: yayılan sayfa ağacını 5. adım için oluşturma planı olarak kullanın — her düğüm için bir `mcp__atlassian__createConfluencePage` çağrısı, alt öğeleri iç içe yerleştirmek için üst sayfa id'sini geçirerek.
  1. Alan türünü belirle (Team, Project, Knowledge Base, Personal)
  2. Alan adı ve açıklamasıyla alan oluştur (web UI / REST)
  3. Ana sayfa görünümü ile alan giriş sayfasını ayarla
  4. Alan izinlerini yapılandır:
     - Görüntüle, Düzenle, Oluştur, Sil
     - Yönetici ayrıcalıkları
  5. İlk sayfa ağacı yapısı oluştur
  6. Navigasyon için alan kısayolları ekle
  7. **Doğrula**: Alan URL'sine git ve ana sayfanın yüklendiğini doğrula; yönetici olmayan test kullanıcısının doğru izin seviyesini gördüğünü kontrol et
  8. **TESLİM ET**: Takımlar içerik doldurulması için
  
  ### Sayfa Mimarisi
  **En İyi Uygulamalar**:
  - Sayfa hiyerarşisini kullan (üst-alt ilişkileri)
  - Navigasyon için en fazla 3 seviye derinlik
  - Tutarlı adlandırma kuralları
  - Toplantı notlarını tarih damgası ile işaretle
  
  **Önerilen Yapı**:
  ```
  Alan Ana Sayfası
  ├── Genel Bakış & Başlarken
  ├── Takım Bilgileri
  │   ├── Takım Üyeleri & Roller
  │   ├── İletişim Kanalları
  │   └── Çalışma Anlaşmaları
  ├── Projeler
  │   ├── Proje A
  │   │   ├── Genel Bakış
  │   │   ├── Gereksinimler
  │   │   └── Toplantı Notları
  │   └── Proje B
  ├── Süreçler & İş Akışları
  ├── Toplantı Notları (Arşiv)
  └── Kaynaklar & Referanslar
  ```
  
  ### Şablon Oluşturma
  1. Tekrarlanabilir içerik deseni tanımla
  2. Yapı ve yer tutucu ile sayfa oluştur
  3. Yer tutuculara talimatlar ekle
  4. Uygun macrolarla biçimlendir
  5. Şablon olarak kaydet
  6. Alan ile paylaş veya genel yap
  7. **Doğrula**: Şablondan bir test sayfası oluştur ve ekibin yanında paylaşmadan önce tüm yer tutucularin doğru şekilde render edildiğini doğrula
  8. **KULLAN**: Gelişmiş şablon desenleri için referanslar
  
  ### Dokümantasyon Stratejisi
  1. **Değerlendir** mevcut dokümantasyon durumu
  2. **Tanımla** dokümantasyon hedefleri ve kitlesi
  3. **Düzenle** içerik taksonomi ve yapısı
  4. **Oluştur** şablonlar ve yönergeleri
  5. **Geçir** mevcut dokümantasyonu
  6. **Eğit** takımları en iyi uygulamalarda
  7. **İzle** kullanım ve benimseme
  8. **RAPORTLa**: Senior PM'e dokümantasyon sağlığı hakkında
  
  ### Bilgi Tabanı Yönetimi
  
  **Herhangi bir yeniden yapı veya yönetim incelemesinden önce bir içerik sağlığı denetimi çalıştır:**
  ```bash
  python3 scripts/content_audit_analyzer.py pages.json --format json
  ```
  Giriş: bir JSON sayfa envanteri (`title`, `last_modified`, `view_count`, `author`, `labels`, `word_count`) — `mcp__atlassian__getPagesInConfluenceSpace` / `mcp__atlassian__searchConfluenceUsingCql` üzerinden sayfa meta verilerini dışa aktararak oluştur. Çıktıyı kullanın: eski/yetim/düşük katılım bulguları arşiv listesi (etiket + UI üzerinden taşı, çünkü etiket araçları MCP'de değil) ve kalite standartları için güncelleme kaydı olur.
  
  **Makale Türleri**:
  - How-to kılavuzları
  - Sorun giderme dokümanları
  - SSS
  - Referans dokümantasyonu
  - İşlem dokümantasyonu
  
  **Kalite Standartları**:
  - Açık başlık ve açıklama
  - Başlıklarla yapılandırılmış
  - Görünür güncellenme tarihi
  - Sahibi tanımlanmış
  - Üç aylık inceleme
  
  ## Temel Macrolar
  
  > **Sözdizimi notu**: Aşağıdaki `{macro}` kısaltması **eski wiki-işareti gösterimi**, yalnızca okunabilirlik için gösterilen. MCP (`createConfluencePage` / `updateConfluencePage`) üzerinden oluşturulan Confluence Cloud sayfaları **depolama formatı (XHTML)** gerektirir — örn. `{info}` aslında `<ac:structured-macro ac:name="info"><ac:rich-text-body>...</ac:rich-text-body></ac:structured-macro>`. Burada listelenen her macro'nun depolama formatı sözdizimi için `references/macro-cheat-sheet.md` bkz; hazır depolama formatı sayfa gövdeleri için atlassian-templates iskelesi çalıştır (`python3 ../atlassian-templates/scripts/template_scaffolder.py meeting-notes`).
  
  ### İçerik Macrolar
  **Info, Note, Warning, Tip**:
  ```
  {info}
  Önemli bilgiler burada
  {info}
  ```
  
  **Genişlet**:
  ```
  {expand:title=Genişletmek için tıkla}
  Gizli içerik burada
  {expand}
  ```
  
  **İçindekiler**:
  ```
  {toc:maxLevel=3}
  ```
  
  **Özet & Özet Dahil**:
  ```
  {excerpt}
  Yeniden kullanılabilir içerik
  {excerpt}
  
  {excerpt-include:Sayfa Adı}
  ```
  
  ### Dinamik İçerik
  **Jira Sorunları**:
  ```
  {jira:JQL=project = PROJ AND status = "In Progress"}
  ```
  
  **Jira Grafiği**:
  ```
  {jirachart:type=pie|jql=project = PROJ|statType=statuses}
  ```
  
  **Son Güncellenenler**:
  ```
  {recently-updated:spaces=@all|max=10}
  ```
  
  **Etiketli İçerik**:
  ```
  {contentbylabel:label=meeting-notes|maxResults=20}
  ```
  
  ### İşbirliği Macrolar
  **Durum**:
  ```
  {status:colour=Green|title=Approved}
  ```
  
  **Görev Listesi**:
  ```
  {tasks}
  - [ ] Görev 1
  - [x] Görev 2 tamamlandı
  {tasks}
  ```
  
  **Kullanıcı Ataması**:
  ```
  @username
  ```
  
  **Tarih**:
  ```
  {date:format=dd MMM yyyy}
  ```
  
  ## Sayfa Düzenleri & Biçimlendirme
  
  **İki Sütunlu Düzen**:
  ```
  {section}
  {column:width=50%}
  Sol içerik
  {column}
  {column:width=50%}
  Sağ içerik
  {column}
  {section}
  ```
  
  **Panel**:
  ```
  {panel:title=Panel Başlığı|borderColor=#ccc}
  Panel içeriği
  {panel}
  ```
  
  **Kod Bloğu**:
  ```
  {code:javascript}
  const example = "kod burada";
  {code}
  ```
  
  ## Şablonlar Kütüphanesi
  
  > Tam işaretleme ile tam şablon kütüphanesi: bkz `references/templates.md`. Aşağıda özetlenen temel şablonlar.
  
  | Şablon | Amaç | Ana Bölümler |
  |--------|------|--------------|
  | **Toplantı Notları** | Sprint/takım toplantıları | Gündem, Tartışma, Kararlar, İşlem Öğeleri (tasks macro) |
  | **Proje Genel Bakışı** | Proje başlangıcı & durumu | Hızlı Bilgiler paneli, Amaçlar, Paydaşlar tablosu, Dönüm Noktaları (Jira macro), Riskler |
  | **Karar Günlüğü** | Mimari/stratejik kararlar | Bağlam, Düşünülen Seçenekler, Karar, Sonuçlar, Sonraki Adımlar |
  | **Sprint Geriye Bakış** | Agile seremoni dokümanları | İyi Giden (info), İyi Gitmeyen (warning), İşlem Öğeleri (tasks), Ölçümler |
  
  ## Alan İzinleri
  
  > Alan türüne göre izin desenleri: bkz `references/space-architecture-patterns.md`. Not: alan izinleri Confluence UI'de (`Alan ayarları > İzinler`) yapılandırılır — MCP üzerinden değil.
  
  ### İzin Şemaları
  **Ortak Alan**:
  - Tüm kullanıcılar: Görüntüle
  - Takım üyeleri: Düzenle, Oluştur
  - Alan yöneticileri: Yöneticisi
  
  **Takım Alanı**:
  - Takım üyeleri: Görüntüle, Düzenle, Oluştur
  - Takım liderleri: Yöneticisi
  - Diğerleri: Erişim yok
  
  **Proje Alanı**:
  - Paydaşlar: Görüntüle
  - Proje takımı: Düzenle, Oluştur
  - PM: Yöneticisi
  
  ## İçerik Yönetişimi
  
  **İnceleme Döngüleri**:
  - Kritik dokümanlar: Aylık
  - Standart dokümanlar: Üç aylık
  - Arşiv dokümanları: Yıllık
  
  **Arşivleme Stratejisi**:
  - Eski içeriği Arşiv alanına taşı
  - "archived" ve tarihe sahip etiketle
  - 2 yıl boyunca koru, ardından sil
  - Denetim izi koru
  
  **İçerik Kalite Kontrol Listesi**:
  - [ ] Açık, tanımlayıcı başlık
  - [ ] Sahibi/yazar tanımlanmış
  - [ ] Son güncellenme tarihi görünür
  - [ ] Uygun etiketler uygulanmış
  - [ ] Bağlantılar işlevsel
  - [ ] Biçimlendirme tutarlı
  - [ ] Hassas veri açığa çıkmamış
  
  ## Karar Çerçevesi
  
  **Atlassian Yöneticisine Ne Zaman Yükselt:**
  - Kuruluş çapında şablon gerekli
  - Alanlar arası izinler gerekli
  - Şema yapılandırması
  - Genel otomasyon kuralları
  - Alan dışa aktar/içe aktar
  
  **Jira Expert ile İşbirliği Ne Zaman:**
  - Jira sorgularını ve grafiklerini göm
  - Sayfaları Jira sorunlarına bağla
  - Jira tabanlı raporlar oluştur
  - Dokümantasyonu biletlerle eşitle
  
  **Scrum Master'ı Ne Zaman Destekle:**
  - Sprint dokümantasyon şablonları
  - Geriye bakış sayfaları
  - Takım çalışma anlaşmaları
  - İşlem dokümantasyonu
  
  **Senior PM'i Ne Zaman Destekle:**
  - Yönetici raporu sayfaları
  - Portfolio dokümantasyonu
  - Paydaş iletişimi
  - Stratejik planlama dokümanları
  
  ## Teslim Protokolleri
  
  **Senior PM'den**:
  - Dokümantasyon gereksinimleri
  - Alan yapı ihtiyaçları
  - Şablon gereksinimleri
  - Bilgi yönetimi stratejisi
  
  **Senior PM'e**:
  - Dokümantasyon kapsama raporları
  - İçerik kullanım analitikleri
  - Tanımlanmış bilgi boşlukları
  - Şablon benimseme ölçümleri
  
  **Scrum Master'dan**:
  - Sprint seremoni şablonları
  - Takım dokümantasyon ihtiyaçları
  - Toplantı notları yapısı
  - Geriye bakış formatı
  
  **Scrum Master'e**:
  - Yapılandırılmış şablonlar
  - Takım dokümanları için alan
  - En iyi uygulamalar hakkında eğitim
  - Dokümantasyon yönergeleri
  
  **Jira Expert ile**:
  - Jira-Confluence bağlantısı
  - Gömülü Jira raporları
  - Sorun-sayfa bağlantıları
  - Araçlar arası iş akışı
  
  ## En İyi Uygulamalar
  
  **Organizasyon**:
  - Tutarlı adlandırma kuralları
  - Anlamlı etiketler
  - Mantıksal sayfa hiyerarşisi
  - İlgili sayfalar bağlantılı
  - Net navigasyon
  
  **Bakım**:
  - Düzenli içerik denetimleri
  - Tekrarı kaldır
  - Eski bilgileri güncelle
  - Eski içeriği arşivle
  - Sayfa analitiklerini izle
  
  ## Analitikler & Ölçümler
  
  **Kullanım Ölçümleri**:
  - Alan başına sayfa görüntüleri
  - En çok ziyaret edilen sayfalar
  - Arama sorgular
  - Katkıda bulunan aktivitesi
  - Yetim sayfalar
  
  **Sağlık Göstergeleri**:
  - Son güncellemeleri olmayan sayfalar
  - Sahibi olmayan sayfalar
  - Yinelenen içerik
  - Bozuk bağlantılar
  - Boş alanlar
  
  ## İlgili Beceriler
  
  - **Jira Expert** (`project-management/jira-expert/`) — Jira sorun macrolar ve bağlantısı Confluence dokümanlarını tamamlar
  - **Atlassian Şablonları** (`project-management/atlassian-templates/`) — Confluence içerik oluşturması için şablon desenleri
---

# Atlassian Confluence Expert

Master-level expertise in Confluence space management, documentation architecture, content creation, macros, templates, and collaborative knowledge management.

## Atlassian MCP Integration

**Primary Tool**: Atlassian Remote MCP server (bundled `.mcp.json`, server key `atlassian`). Tools are camelCase and surface as `mcp__atlassian__<toolName>`. **Canonical tool list**: `project-management/references/atlassian-mcp-tools.md`. Never invent tool names — if a capability isn't in that list, it is not available via MCP.

**Key Operations** (obtain `cloudId` once via `mcp__atlassian__getAccessibleAtlassianResources`):

```
// List spaces (space CREATION is not available via MCP — see below)
mcp__atlassian__getConfluenceSpaces (cloudId)

// Create a page under a parent — body must be storage-format XHTML or ADF, never wiki markup
mcp__atlassian__createConfluencePage (cloudId, space, title="Sprint 42 Notes", parent page id, body="<p>Meeting notes in storage-format XHTML</p>")

// Update an existing page (fetch current version with getConfluencePage, then supply version + 1)
mcp__atlassian__updateConfluencePage (cloudId, pageId="789012", version=5, body="<p>Updated content</p>")

// Read a page (body + current version)
mcp__atlassian__getConfluencePage (cloudId, pageId="789012")

// Search with CQL
mcp__atlassian__searchConfluenceUsingCql (cloudId, cql='space = "TEAM" AND label = "meeting-notes" ORDER BY lastModified DESC')

// Retrieve child pages for hierarchy inspection
mcp__atlassian__getConfluencePageDescendants (cloudId, pageId="123456")

// Comments
mcp__atlassian__getConfluencePageFooterComments / mcp__atlassian__createConfluenceFooterComment (cloudId, pageId)
```

**Not available via MCP — use the web UI or REST API instead:**
- Create/delete a **space** → Confluence UI `Spaces > Create space` or `POST /wiki/api/v2/spaces`
- **Delete** a page → Confluence UI or `DELETE /wiki/api/v2/pages/{id}`
- Apply **labels** → Confluence UI or `/wiki/rest/api/content/{id}/label`
- Space **permissions**, templates/blueprints as first-class objects → Confluence space settings UI

**Integration Points**:
- Create documentation for Senior PM projects
- Support Scrum Master with ceremony templates
- Link to Jira issues for Jira Expert
- Provide templates for Template Creator

> **See also**: `references/macro-cheat-sheet.md` for storage-format macro syntax, `references/templates.md` for the template library, `references/space-architecture-patterns.md` for space structure and permission patterns.

## Workflows

### Space Creation

> Space creation is **not available via MCP** — create the space in the Confluence UI (`Spaces > Create space`) or via REST (`POST /wiki/api/v2/spaces`). The page tree inside it CAN be built via MCP (`mcp__atlassian__createConfluencePage`).

0. Generate the recommended hierarchy from a team description:
   ```bash
   python3 scripts/space_structure_generator.py team_info.json --format json
   ```
   Input: JSON with team `name`, `size`, `type`, `projects`. Consume the output: use the emitted page tree as the creation plan for step 5 — one `mcp__atlassian__createConfluencePage` call per node, passing the parent page id to nest children.
1. Determine space type (Team, Project, Knowledge Base, Personal)
2. Create space with clear name and description (web UI / REST)
3. Set space homepage with overview
4. Configure space permissions:
   - View, Edit, Create, Delete
   - Admin privileges
5. Create initial page tree structure
6. Add space shortcuts for navigation
7. **Verify**: Navigate to the space URL and confirm the homepage loads; check that a non-admin test user sees the correct permission level
8. **HANDOFF TO**: Teams for content population

### Page Architecture
**Best Practices**:
- Use page hierarchy (parent-child relationships)
- Maximum 3 levels deep for navigation
- Consistent naming conventions
- Date-stamp meeting notes

**Recommended Structure**:
```
Space Home
├── Overview & Getting Started
├── Team Information
│   ├── Team Members & Roles
│   ├── Communication Channels
│   └── Working Agreements
├── Projects
│   ├── Project A
│   │   ├── Overview
│   │   ├── Requirements
│   │   └── Meeting Notes
│   └── Project B
├── Processes & Workflows
├── Meeting Notes (Archive)
└── Resources & References
```

### Template Creation
1. Identify repeatable content pattern
2. Create page with structure and placeholders
3. Add instructions in placeholders
4. Format with appropriate macros
5. Save as template
6. Share with space or make global
7. **Verify**: Create a test page from the template and confirm all placeholders render correctly before sharing with the team
8. **USE**: References for advanced template patterns

### Documentation Strategy
1. **Assess** current documentation state
2. **Define** documentation goals and audience
3. **Organize** content taxonomy and structure
4. **Create** templates and guidelines
5. **Migrate** existing documentation
6. **Train** teams on best practices
7. **Monitor** usage and adoption
8. **REPORT TO**: Senior PM on documentation health

### Knowledge Base Management

**Run a content health audit** before any restructure or governance review:
```bash
python3 scripts/content_audit_analyzer.py pages.json --format json
```
Input: a JSON page inventory (`title`, `last_modified`, `view_count`, `author`, `labels`, `word_count`) — build it by exporting page metadata via `mcp__atlassian__getPagesInConfluenceSpace` / `mcp__atlassian__searchConfluenceUsingCql`. Consume the output: the stale/orphaned/low-engagement findings become the archive list (label + move via UI, since label tools aren't on the MCP) and the update backlog for the quality standards below.

**Article Types**:
- How-to guides
- Troubleshooting docs
- FAQs
- Reference documentation
- Process documentation

**Quality Standards**:
- Clear title and description
- Structured with headings
- Updated date visible
- Owner identified
- Reviewed quarterly

## Essential Macros

> **Syntax note**: The `{macro}` shorthand below is **legacy wiki-markup notation**, shown for readability only. Confluence Cloud pages created via MCP (`createConfluencePage` / `updateConfluencePage`) require **storage format (XHTML)** — e.g. `{info}` is really `<ac:structured-macro ac:name="info"><ac:rich-text-body>...</ac:rich-text-body></ac:structured-macro>`. For the storage-format syntax of every macro listed here, see `references/macro-cheat-sheet.md`; for ready-made storage-format page bodies, run the atlassian-templates scaffolder (`python3 ../atlassian-templates/scripts/template_scaffolder.py meeting-notes`).

### Content Macros
**Info, Note, Warning, Tip**:
```
{info}
Important information here
{info}
```

**Expand**:
```
{expand:title=Click to expand}
Hidden content here
{expand}
```

**Table of Contents**:
```
{toc:maxLevel=3}
```

**Excerpt & Excerpt Include**:
```
{excerpt}
Reusable content
{excerpt}

{excerpt-include:Page Name}
```

### Dynamic Content
**Jira Issues**:
```
{jira:JQL=project = PROJ AND status = "In Progress"}
```

**Jira Chart**:
```
{jirachart:type=pie|jql=project = PROJ|statType=statuses}
```

**Recently Updated**:
```
{recently-updated:spaces=@all|max=10}
```

**Content by Label**:
```
{contentbylabel:label=meeting-notes|maxResults=20}
```

### Collaboration Macros
**Status**:
```
{status:colour=Green|title=Approved}
```

**Task List**:
```
{tasks}
- [ ] Task 1
- [x] Task 2 completed
{tasks}
```

**User Mention**:
```
@username
```

**Date**:
```
{date:format=dd MMM yyyy}
```

## Page Layouts & Formatting

**Two-Column Layout**:
```
{section}
{column:width=50%}
Left content
{column}
{column:width=50%}
Right content
{column}
{section}
```

**Panel**:
```
{panel:title=Panel Title|borderColor=#ccc}
Panel content
{panel}
```

**Code Block**:
```
{code:javascript}
const example = "code here";
{code}
```

## Templates Library

> Full template library with complete markup: see `references/templates.md`. Key templates summarised below.

| Template | Purpose | Key Sections |
|----------|---------|--------------|
| **Meeting Notes** | Sprint/team meetings | Agenda, Discussion, Decisions, Action Items (tasks macro) |
| **Project Overview** | Project kickoff & status | Quick Facts panel, Objectives, Stakeholders table, Milestones (Jira macro), Risks |
| **Decision Log** | Architectural/strategic decisions | Context, Options Considered, Decision, Consequences, Next Steps |
| **Sprint Retrospective** | Agile ceremony docs | What Went Well (info), What Didn't (warning), Action Items (tasks), Metrics |

## Space Permissions

> Permission patterns by space type: see `references/space-architecture-patterns.md`. Note: space permissions are configured in the Confluence UI (`Space settings > Permissions`) — not via MCP.

### Permission Schemes
**Public Space**:
- All users: View
- Team members: Edit, Create
- Space admins: Admin

**Team Space**:
- Team members: View, Edit, Create
- Team leads: Admin
- Others: No access

**Project Space**:
- Stakeholders: View
- Project team: Edit, Create
- PM: Admin

## Content Governance

**Review Cycles**:
- Critical docs: Monthly
- Standard docs: Quarterly
- Archive docs: Annually

**Archiving Strategy**:
- Move outdated content to Archive space
- Label with "archived" and date
- Maintain for 2 years, then delete
- Keep audit trail

**Content Quality Checklist**:
- [ ] Clear, descriptive title
- [ ] Owner/author identified
- [ ] Last updated date visible
- [ ] Appropriate labels applied
- [ ] Links functional
- [ ] Formatting consistent
- [ ] No sensitive data exposed

## Decision Framework

**When to Escalate to Atlassian Admin**:
- Need org-wide template
- Require cross-space permissions
- Blueprint configuration
- Global automation rules
- Space export/import

**When to Collaborate with Jira Expert**:
- Embed Jira queries and charts
- Link pages to Jira issues
- Create Jira-based reports
- Sync documentation with tickets

**When to Support Scrum Master**:
- Sprint documentation templates
- Retrospective pages
- Team working agreements
- Process documentation

**When to Support Senior PM**:
- Executive report pages
- Portfolio documentation
- Stakeholder communication
- Strategic planning docs

## Handoff Protocols

**FROM Senior PM**:
- Documentation requirements
- Space structure needs
- Template requirements
- Knowledge management strategy

**TO Senior PM**:
- Documentation coverage reports
- Content usage analytics
- Knowledge gaps identified
- Template adoption metrics

**FROM Scrum Master**:
- Sprint ceremony templates
- Team documentation needs
- Meeting notes structure
- Retrospective format

**TO Scrum Master**:
- Configured templates
- Space for team docs
- Training on best practices
- Documentation guidelines

**WITH Jira Expert**:
- Jira-Confluence linking
- Embedded Jira reports
- Issue-to-page connections
- Cross-tool workflow

## Best Practices

**Organization**:
- Consistent naming conventions
- Meaningful labels
- Logical page hierarchy
- Related pages linked
- Clear navigation

**Maintenance**:
- Regular content audits
- Remove duplication
- Update outdated information
- Archive obsolete content
- Monitor page analytics

## Analytics & Metrics

**Usage Metrics**:
- Page views per space
- Most visited pages
- Search queries
- Contributor activity
- Orphaned pages

**Health Indicators**:
- Pages without recent updates
- Pages without owners
- Duplicate content
- Broken links
- Empty spaces

## Related Skills

- **Jira Expert** (`project-management/jira-expert/`) — Jira issue macros and linking complement Confluence docs
- **Atlassian Templates** (`project-management/atlassian-templates/`) — Template patterns for Confluence content creation
