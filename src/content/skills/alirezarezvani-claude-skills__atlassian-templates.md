---
name: "atlassian-templates"
description_en: "Atlassian Template and Files Creator/Modifier expert for creating, modifying, and managing Jira and Confluence templates, blueprints, custom layouts, reusable components, and standardized content structures. Use when building org-wide templates, custom blueprints, page layouts, and automated content generation."
description_tr: "Jira ve Confluence şablonları, blueprint'ler, özel layout'lar, yeniden kullanılabilir bileşenler ve standartlaştırılmış içerik yapılarını oluşturmak, değiştirmek ve yönetmek için uzman bir araç. Kurumsal düzey şablonlar, özel blueprint'ler, sayfa layout'ları ve otomatik içerik oluşturma ihtiyaçlarında kullanın."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/atlassian-templates/SKILL.md"
path: ".gemini/skills/atlassian-templates/SKILL.md"
is_collection: false
body_length: 9494
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Atlassian Template & Files Creator Expert

  Jira ve Confluence için yeniden kullanılabilir template'ler ve dosyalar oluşturma, değiştirme ve yönetiminde uzman. Tutarlılığı sağlar, içerik oluşturmayı hızlandırır ve kuruluş genelindeki standartları korur.

  ---

  ## Workflows

  ### Template Oluşturma Süreci
  1. **Keşfet**: Gereksinimler anlamak için paydaşlarla görüşün
  2. **Analiz et**: Mevcut içerik desenlerini inceleyin
  3. **Tasarla**: Template yapısı ve placeholder'lar oluşturun
  4. **Uygula**: Macro'lar ve formatlama ile template'i oluşturun
  5. **Test et**: Örnek verilerle doğrulayın — yayımlamadan önce template'in preview'da doğru şekilde render edildiğini onaylayın
  6. **Dokümante et**: Kullanım talimatlarını oluşturun
  7. **Yayımla**: MCP aracılığıyla uygun space/projeye deploy edin (aşağıya bakınız: MCP Operations)
  8. **Doğrula**: Deployment başarısını onaylayın; hata oluşursa önceki sürüme geri döndürün
  9. **Eğit**: Kullanıcıları template kullanımı konusunda eğitin
  10. **İzle**: Adopsiyon takibini yapın ve feedback toplayın
  11. **İter**: Kullanıma dayalı olarak düzeltin

  ### Template Değiştirme Süreci
  1. **Değerlendir**: Değişiklik isteğini ve etkisini inceleyin
  2. **Versiyonla**: Yeni sürüm oluşturun, eski versiyonu mevcut tutun
  3. **Değiştir**: Template yapısı/içeriğini güncelleyin
  4. **Test et**: Değişikliklerin mevcut kullanımı bozmamasını doğrulayın; yayımlamadan önce güncellenmiş template'i preview'da görüntüleyin
  5. **Taşı**: Mevcut içerik için migration yolunu sağlayın
  6. **İletişim kurun**: Kullanıcılara değişiklikleri duyurun
  7. **Destek**: Kullanıcılara migration konusunda yardımcı olun
  8. **Arşivle**: Geçişten sonra eski versiyonu kullanımdan kaldırın; eski template'in listede olmadığını ancak silinmediğini onaylayın

  ### Blueprint Geliştirme
  1. Blueprint kapsamı ve amacını tanımlayın
  2. Multi-sayfa yapısını tasarlayın
  3. Her bölüm için sayfa template'leri oluşturun
  4. Sayfa oluşturma kurallarını yapılandırın
  5. Dinamik içerik ekleyin (Jira sorguları, kullanıcı verileri)
  6. Blueprint oluşturma akışını örnek bir space ile end-to-end test edin
  7. Deployment'tan önce tüm macro referanslarının doğru şekilde çözümlendiğini doğrulayın
  8. **TESLİM ET**: Atlassian Admin'e global deployment için

  ---

  ## Confluence Templates Kütüphanesi

  Tam referans tabloları ve copy-paste-ready template yapıları için **TEMPLATES.md** dosyasına bakınız. Aşağıda bu skill'in oluşturduğu ve koruduğu standart template türleri özetlenmiştir.

  ### Confluence Template Türleri
  | Template | Amaç | Kullanılan Temel Macro'lar |
  |----------|------|---------------------------|
  | **Toplantı Notları** | Gündem, kararlar ve action item'ları içeren yapılandırılmış toplantı kayıtları | `{date}`, `{tasks}`, `{panel}`, `{info}`, `{note}` |
  | **Proje Şartı** | Kuruluş düzeyinde proje kapsamı, paydaş RACI, zaman çizelgesi ve bütçe | `{panel}`, `{status}`, `{timeline}`, `{info}` |
  | **Sprint Retrospektifi** | Agile seremonisi template'i; Neler İyi Gitti / Neler Kötü Gitti / Eylemler | `{panel}`, `{expand}`, `{tasks}`, `{status}` |
  | **PRD** | Hedefler, user story'ler, fonksiyonel/non-fonksiyonel gereksinimler ve release planı ile feature tanımı | `{panel}`, `{status}`, `{jira}`, `{warning}` |
  | **Karar Günlüğü** | Karar matriksi ve implementasyon takibi ile yapılandırılmış seçenek analizi | `{panel}`, `{status}`, `{info}`, `{tasks}` |

  **Standart Bölümler** tüm Confluence template'lerine dahildir:
  - Metadata (sahip, tarih, durum) ile başlık paneli
  - Satıriçi placeholder talimatları ile açıkça etiketlenmiş içerik bölümleri
  - `{tasks}` macro'su kullanılarak oluşturulmuş action item'ları bloğu
  - İlgili linkler ve referanslar

  ### Tam Örnek: Toplantı Notları Template'i

  Aşağıda Confluence storage formatında (wiki markup) copy-paste-ready Toplantı Notları template'i bulunmaktadır:

  ```
  {panel:title=Meeting Metadata|borderColor=#0052CC|titleBGColor=#0052CC|titleColor=#FFFFFF}
  *Date:* {date}
  *Owner / Facilitator:* @[facilitator name]
  *Attendees:* @[name], @[name]
  *Status:* {status:colour=Yellow|title=In Progress}
  {panel}

  h2. Agenda
  # [Agenda item 1]
  # [Agenda item 2]
  # [Agenda item 3]

  h2. Discussion & Decisions
  {panel:title=Key Decisions|borderColor=#36B37E|titleBGColor=#36B37E|titleColor=#FFFFFF}
  * *Decision 1:* [What was decided and why]
  * *Decision 2:* [What was decided and why]
  {panel}

  {info:title=Notes}
  [Detailed discussion notes, context, or background here]
  {info}

  h2. Action Items
  {tasks}
  * [ ] [Action item] — Owner: @[name] — Due: {date}
  * [ ] [Action item] — Owner: @[name] — Due: {date}
  {tasks}

  h2. Next Steps & Related Links
  * Next meeting: {date}
  * Related pages: [link]
  * Related Jira issues: {jira:key=PROJ-123}
  ```

  > Diğer tüm template türleri (Proje Şartı, Sprint Retrospektifi, PRD, Karar Günlüğü) ve tüm Jira template'leri için tam örnekler istek üzerine oluşturulabilir veya **TEMPLATES.md** dosyasında bulunabilir.

  ---

  ## Jira Templates Kütüphanesi

  ### Jira Template Türleri
  | Template | Amaç | Temel Bölümler |
  |----------|------|-----------------|
  | **User Story** | Şu şekilde / İstiyorum / Böylece formatında feature istekleri | Acceptance Kriterleri (Given/When/Then), Design linkler, Teknik Notlar, Definition of Done |
  | **Bug Report** | Tekrar adımları ile defekt yakalama | Environment, Tekrar Adımları, Beklenen vs Gerçek Davranış, Önem Derecesi, Geçici Çözüm |
  | **Epic** | Yüksek düzey inisiyatif kapsamı | Vizyonu, Hedefleri, Başarı Metrikleri, Story Dağılımı, Bağımlılıklar, Zaman Çizelgesi |

  **Standart Bölümler** tüm Jira template'lerine dahildir:
  - Açık özet satırı
  - Checkbox olarak acceptance veya başarı kriterleri
  - İlgili issue'lar ve bağımlılıklar bloğu
  - Definition of Done (story'ler için)

  ---

  ## Macro Kullanım Rehberi

  **Dinamik İçerik**: Auto-güncellenebilir içerik için macro'ları kullanın (tarihler, kullanıcı mention'ları, Jira sorguları)
  **Görsel Hiyerarşi**: Görsel ayrım oluşturmak için `{panel}`, `{info}` ve `{note}` kullanın
  **İnteraktivite**: Uzun template'lerde daraltılabilir bölümler için `{expand}` kullanın
  **Entegrasyon**: Canlı veriler için `{jira}` macro'su aracılığıyla Jira grafikleri ve tabloları gömün

  ---

  ## Atlassian MCP Entegrasyonu

  **Birincil Araçlar**: Confluence MCP, Jira MCP

  ### MCP Aracılığıyla Template İşlemleri

  Aşağıdaki tüm MCP çağrıları Atlassian MCP server'ı tarafından beklenen kesin parametre isimlerini kullanır. Yürütmeden önce açılı parantez placeholder'larını gerçek değerlerle değiştirin.

  **Confluence sayfa template'i oluşturun:**
  ```json
  {
    "tool": "confluence_create_page",
    "parameters": {
      "space_key": "PROJ",
      "title": "Template: Meeting Notes",
      "body": "<storage-format template content>",
      "labels": ["template", "meeting-notes"],
      "parent_id": "<optional parent page id>"
    }
  }
  ```

  **Mevcut bir template'i güncelleyin:**
  ```json
  {
    "tool": "confluence_update_page",
    "parameters": {
      "page_id": "<existing page id>",
      "version": "<current_version + 1>",
      "title": "Template: Meeting Notes",
      "body": "<updated storage-format content>",
      "version_comment": "v2 — added status macro to header"
    }
  }
  ```

  **Jira issue description template'i oluşturun (field configuration aracılığıyla):**
  ```json
  {
    "tool": "jira_update_field_configuration",
    "parameters": {
      "project_key": "PROJ",
      "field_id": "description",
      "default_value": "<template markdown or Atlassian Document Format JSON>"
    }
  }
  ```

  **Template'i birden fazla space'e deploy edin (toplu):**
  ```json
  // Her hedef space key'i için tekrarlayın
  {
    "tool": "confluence_create_page",
    "parameters": {
      "space_key": "<SPACE_KEY>",
      "title": "Template: Meeting Notes",
      "body": "<storage-format template content>",
      "labels": ["template"]
    }
  }
  // Her create'den sonra doğrulayın:
  {
    "tool": "confluence_get_page",
    "parameters": {
      "space_key": "<SPACE_KEY>",
      "title": "Template: Meeting Notes"
    }
  }
  // Response status == 200 olduğunu ve sayfa body'sinin boş olmadığını onaylayın; sonra sonraki space'e geçin
  ```

  **Deployment sonrası doğrulama kontrol noktası:**
  - Oluşturulan/güncellenen sayfayı alın ve macro hataları olmadan render edildiğini onaylayın
  - `{jira}` embed'lerinin hedef Jira projesine karşı çözümlendiğini kontrol edin
  - `{tasks}` bloklarının yayımlanmış view'da etkileşimli olduğunu onaylayın
  - Herhangi bir kontrol başarısız olursa: önceki sürüm body'si ile `confluence_update_page` kullanılarak `version: <current + 1>` ile geri döndürün

  ---

  ## En İyi Uygulamalar & Yönetişim

  **Kuruluş Spesifik Standartları:**
  - Template sürümlerini sayfa başlığında sürüm notları ile takip edin
  - Eski template'leri arşivlemeden önce `{warning}` bannerı ile işaretleyin; arşivleyin (silmeyin)
  - Her template'den bağlantılı kullanım kılavuzlarını saklayın
  - Quarterly review döngüsünde feedback toplayın; kullanımı sonlandırmadan önce kullanım metriklerini ekleyin

  **Kalite Gates (her deployment'tan önce uygulayın):**
  - Her bölüm için sağlanmış örnek içerik
  - Preview'da örnek verilerle test edilmiş
  - Değişiklik günlüğüne sürüm açıklaması eklenmiş
  - Feedback mekanizması hazır (yorumlar etkin veya bağlı anket)

  **Yönetişim Süreci**:
  1. İstek ve gerekçelendirme
  2. Tasarım ve gözden geçirme
  3. Pilot kullanıcılarla test
  4. Dokümantasyon
  5. Onay
  6. Deployment (MCP aracılığıyla veya manuel)
  7. Eğitim
  8. İzleme

  ---

  ## Teslim Protokolleri

  Tam teslim matriksi için **HANDOFFS.md** dosyasına bakınız. Özet:

  | İş Ortağı | ALIR | GÖNDERİR |
  |-----------|------|---------|
  | **Senior PM** | Template gereksinimleri, raporlama template'leri, yönetici formatları | Tamamlanmış template'ler, kullanım analitikleri, optimizasyon önerileri |
  | **Scrum Master** | Sprint seremonisi ihtiyaçları, takım spesifik istekler, retro format tercihleri | Sprint'e hazır template'ler, agile seremonisi yapıları, velocity takibi template'leri |
  | **Jira Expert** | Issue template gereksinimleri, custom field görüntüleme ihtiyaçları | Issue description template'leri, field config template'leri, JQL query template'leri |
  | **Confluence Expert** | Space spesifik ihtiyaçlar, global template istekleri, blueprint gereksinimleri | Yapılandırılmış sayfa template'leri, blueprint yapıları, deployment planları |
  | **Atlassian Admin** | Kuruluş genelindeki standartlar, global deployment gereksinimleri, uyum template'leri | Onay için global template'ler, kullanım raporları, uyum durumu |
---

# Atlassian Template & Files Creator Expert

Specialist in creating, modifying, and managing reusable templates and files for Jira and Confluence. Ensures consistency, accelerates content creation, and maintains org-wide standards.

---

## Workflows

### Template Creation Process
1. **Discover**: Interview stakeholders to understand needs
2. **Analyze**: Review existing content patterns
3. **Design**: Create template structure and placeholders
4. **Implement**: Build template with macros and formatting
5. **Test**: Validate with sample data — confirm template renders correctly in preview before publishing
6. **Document**: Create usage instructions
7. **Publish**: Deploy to appropriate space/project via MCP (see MCP Operations below)
8. **Verify**: Confirm deployment success; roll back to previous version if errors occur
9. **Train**: Educate users on template usage
10. **Monitor**: Track adoption and gather feedback
11. **Iterate**: Refine based on usage

### Template Modification Process
1. **Assess**: Review change request and impact
2. **Version**: Create new version, keep old available
3. **Modify**: Update template structure/content
4. **Test**: Validate changes don't break existing usage; preview updated template before publishing
5. **Migrate**: Provide migration path for existing content
6. **Communicate**: Announce changes to users
7. **Support**: Assist users with migration
8. **Archive**: Deprecate old version after transition; confirm deprecated template is unlisted, not deleted

### Blueprint Development
1. Define blueprint scope and purpose
2. Design multi-page structure
3. Create page templates for each section
4. Configure page creation rules
5. Add dynamic content (Jira queries, user data)
6. Test blueprint creation flow end-to-end with a sample space
7. Verify all macro references resolve correctly before deployment
8. **HANDOFF TO**: Atlassian Admin for global deployment

---

## Confluence Templates Library

See **TEMPLATES.md** for full reference tables and copy-paste-ready template structures. The following summarises the standard types this skill creates and maintains.

### Confluence Template Types
| Template | Purpose | Key Macros Used |
|----------|---------|-----------------|
| **Meeting Notes** | Structured meeting records with agenda, decisions, and action items | `{date}`, `{tasks}`, `{panel}`, `{info}`, `{note}` |
| **Project Charter** | Org-level project scope, stakeholder RACI, timeline, and budget | `{panel}`, `{status}`, `{timeline}`, `{info}` |
| **Sprint Retrospective** | Agile ceremony template with What Went Well / Didn't Go Well / Actions | `{panel}`, `{expand}`, `{tasks}`, `{status}` |
| **PRD** | Feature definition with goals, user stories, functional/non-functional requirements, and release plan | `{panel}`, `{status}`, `{jira}`, `{warning}` |
| **Decision Log** | Structured option analysis with decision matrix and implementation tracking | `{panel}`, `{status}`, `{info}`, `{tasks}` |

**Standard Sections** included across all Confluence templates:
- Header panel with metadata (owner, date, status)
- Clearly labelled content sections with inline placeholder instructions
- Action items block using `{tasks}` macro
- Related links and references

### Complete Example: Meeting Notes Template

The following is a copy-paste-ready Meeting Notes template in Confluence storage format (wiki markup):

```
{panel:title=Meeting Metadata|borderColor=#0052CC|titleBGColor=#0052CC|titleColor=#FFFFFF}
*Date:* {date}
*Owner / Facilitator:* @[facilitator name]
*Attendees:* @[name], @[name]
*Status:* {status:colour=Yellow|title=In Progress}
{panel}

h2. Agenda
# [Agenda item 1]
# [Agenda item 2]
# [Agenda item 3]

h2. Discussion & Decisions
{panel:title=Key Decisions|borderColor=#36B37E|titleBGColor=#36B37E|titleColor=#FFFFFF}
* *Decision 1:* [What was decided and why]
* *Decision 2:* [What was decided and why]
{panel}

{info:title=Notes}
[Detailed discussion notes, context, or background here]
{info}

h2. Action Items
{tasks}
* [ ] [Action item] — Owner: @[name] — Due: {date}
* [ ] [Action item] — Owner: @[name] — Due: {date}
{tasks}

h2. Next Steps & Related Links
* Next meeting: {date}
* Related pages: [link]
* Related Jira issues: {jira:key=PROJ-123}
```

> Full examples for all other template types (Project Charter, Sprint Retrospective, PRD, Decision Log) and all Jira templates can be generated on request or found in **TEMPLATES.md**.

---

## Jira Templates Library

### Jira Template Types
| Template | Purpose | Key Sections |
|----------|---------|--------------|
| **User Story** | Feature requests in As a / I want / So that format | Acceptance Criteria (Given/When/Then), Design links, Technical Notes, Definition of Done |
| **Bug Report** | Defect capture with reproduction steps | Environment, Steps to Reproduce, Expected vs Actual Behavior, Severity, Workaround |
| **Epic** | High-level initiative scope | Vision, Goals, Success Metrics, Story Breakdown, Dependencies, Timeline |

**Standard Sections** included across all Jira templates:
- Clear summary line
- Acceptance or success criteria as checkboxes
- Related issues and dependencies block
- Definition of Done (for stories)

---

## Macro Usage Guidelines

**Dynamic Content**: Use macros for auto-updating content (dates, user mentions, Jira queries)
**Visual Hierarchy**: Use `{panel}`, `{info}`, and `{note}` to create visual distinction
**Interactivity**: Use `{expand}` for collapsible sections in long templates
**Integration**: Embed Jira charts and tables via `{jira}` macro for live data

---

## Atlassian MCP Integration

**Primary Tools**: Confluence MCP, Jira MCP

### Template Operations via MCP

All MCP calls below use the exact parameter names expected by the Atlassian MCP server. Replace angle-bracket placeholders with real values before executing.

**Create a Confluence page template:**
```json
{
  "tool": "confluence_create_page",
  "parameters": {
    "space_key": "PROJ",
    "title": "Template: Meeting Notes",
    "body": "<storage-format template content>",
    "labels": ["template", "meeting-notes"],
    "parent_id": "<optional parent page id>"
  }
}
```

**Update an existing template:**
```json
{
  "tool": "confluence_update_page",
  "parameters": {
    "page_id": "<existing page id>",
    "version": "<current_version + 1>",
    "title": "Template: Meeting Notes",
    "body": "<updated storage-format content>",
    "version_comment": "v2 — added status macro to header"
  }
}
```

**Create a Jira issue description template (via field configuration):**
```json
{
  "tool": "jira_update_field_configuration",
  "parameters": {
    "project_key": "PROJ",
    "field_id": "description",
    "default_value": "<template markdown or Atlassian Document Format JSON>"
  }
}
```

**Deploy template to multiple spaces (batch):**
```json
// Repeat for each target space key
{
  "tool": "confluence_create_page",
  "parameters": {
    "space_key": "<SPACE_KEY>",
    "title": "Template: Meeting Notes",
    "body": "<storage-format template content>",
    "labels": ["template"]
  }
}
// After each create, verify:
{
  "tool": "confluence_get_page",
  "parameters": {
    "space_key": "<SPACE_KEY>",
    "title": "Template: Meeting Notes"
  }
}
// Assert response status == 200 and page body is non-empty before proceeding to next space
```

**Validation checkpoint after deployment:**
- Retrieve the created/updated page and assert it renders without macro errors
- Check that `{jira}` embeds resolve against the target Jira project
- Confirm `{tasks}` blocks are interactive in the published view
- If any check fails: revert using `confluence_update_page` with `version: <current + 1>` and the previous version body

---

## Best Practices & Governance

**Org-Specific Standards:**
- Track template versions with version notes in the page header
- Mark outdated templates with a `{warning}` banner before archiving; archive (do not delete)
- Maintain usage guides linked from each template
- Gather feedback on a quarterly review cycle; incorporate usage metrics before deprecating

**Quality Gates (apply before every deployment):**
- Example content provided for each section
- Tested with sample data in preview
- Version comment added to change log
- Feedback mechanism in place (comments enabled or linked survey)

**Governance Process**:
1. Request and justification
2. Design and review
3. Testing with pilot users
4. Documentation
5. Approval
6. Deployment (via MCP or manual)
7. Training
8. Monitoring

---

## Handoff Protocols

See **HANDOFFS.md** for the full handoff matrix. Summary:

| Partner | Receives FROM | Sends TO |
|---------|--------------|---------|
| **Senior PM** | Template requirements, reporting templates, executive formats | Completed templates, usage analytics, optimization suggestions |
| **Scrum Master** | Sprint ceremony needs, team-specific requests, retro format preferences | Sprint-ready templates, agile ceremony structures, velocity tracking templates |
| **Jira Expert** | Issue template requirements, custom field display needs | Issue description templates, field config templates, JQL query templates |
| **Confluence Expert** | Space-specific needs, global template requests, blueprint requirements | Configured page templates, blueprint structures, deployment plans |
| **Atlassian Admin** | Org-wide standards, global deployment requirements, compliance templates | Global templates for approval, usage reports, compliance status |
