---
name: "agile-product-owner"
description_en: "Agile product ownership for backlog management and sprint execution. Covers user story writing, acceptance criteria, sprint planning, and velocity tracking. Use for writing user stories, creating acceptance criteria, planning sprints, estimating story points, breaking down epics, or prioritizing backlog."
description_tr: "Backlog yönetimi ve sprint çalıştırması için çevik ürün sahipliği. Kullanıcı hikayesi yazımı, kabul kriterleri, sprint planlaması ve velocity takibini kapsar. Kullanıcı hikayeleri yazma, kabul kriterleri oluşturma, sprintleri planlama, hikaye puanları tahmin etme, epikleri parçalama veya backlog önceliklendirme için kullanılır."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/agile-product-owner/SKILL.md"
path: ".gemini/skills/agile-product-owner/SKILL.md"
is_collection: false
body_length: 11761
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Çevik Ürün Sahibi

  Ürün sahipleri için backlog yönetimi ve sprint yürütme araç seti; kullanıcı hikayesi oluşturma, kabul kriterleri desenleri, sprint planlama ve velocity izlemesi içerir.

  ---

  ## İçindekiler

  - [Bu Beceriyi Farklı Kılan Nedir](#bu-beceriyi-farklı-kılan-nedir)
  - [Kullanıcı Hikayesi Oluşturma İş Akışı](#kullanıcı-hikayesi-oluşturma-iş-akışı)
  - [Kabul Kriterleri Desenleri](#kabul-kriterleri-desenleri)
  - [Epic Bölme İş Akışı](#epic-bölme-iş-akışı)
  - [Sprint Planlama İş Akışı](#sprint-planlama-iş-akışı)
  - [Backlog Önceliklendirme](#backlog-önceliklendirme)
  - [Referans Belgelendirme](#referans-belgelendirme)
  - [Araçlar](#araçlar)

  ---

  ## Bu Beceriyi Farklı Kılan Nedir

  - **Gerçeklikle uyumlu kapasite hesaplaması:** sprint kapasitesi velocity × erişilebilirlik faktörü üzerine kuruludur, umutsuzluğa değil.
  - **Hikaye boyutuna göre ölçeklendirilmiş kabul kriterleri:** minimum AC sayımları story pointleriyle eşleşerek büyük öğelerin eksik belirtilmesini önler.
  - **Tutarlı kalan ağırlıklı önceliklendirme:** değer %40, etki %30, risk %15, çaba %15 tradeoffları açık tutar.
  - **Sistematik epic bölme teknikleri:** beş somut bölme deseni aşırı büyük hikayeleri önler.
  - **İş akışlarına gömülü INVEST doğrulaması:** her hikaye sadece rehberlik değil, doğrulama adımı içerir.

  ## Kullanıcı Hikayesi Oluşturma İş Akışı

  Gereksinimlerden INVEST uyumlu kullanıcı hikayeleri oluşturun:

  1. Persona'yı tanımlayın (bu özellikten kim faydalanır)
  2. Gerekli action veya yetenekleri tanımlayın
  3. Sağlanan fayda veya değeri açıklayın
  4. Given-When-Then kullanarak kabul kriterleri yazın
  5. Fibonacci ölçeğini kullanarak story point tahmin edin
  6. INVEST kriterleriyle doğrulayın
  7. Backlog'a öncelik ile ekleyin
  8. **Doğrulama:** Hikaye tüm INVEST kriterlerini geçer; kabul kriterleri test edilebilir

  ### Kullanıcı Hikayesi Şablonu

  ```
  As a [persona],
  I want to [action/capability],
  So that [benefit/value].
  ```

  **Örnek:**
  ```
  As a marketing manager,
  I want to export campaign reports to PDF,
  So that I can share results with stakeholders who don't have system access.
  ```

  ### Hikaye Türleri

  | Tür | Şablon | Örnek |
  |-----|--------|-------|
  | Feature | As a [persona], I want to [action] so that [benefit] | As a user, I want to filter search results so that I find items faster |
  | Improvement | As a [persona], I need [capability] to [goal] | As a user, I need faster page loads to complete tasks without frustration |
  | Bug Fix | As a [persona], I expect [behavior] when [condition] | As a user, I expect my cart to persist when I refresh the page |
  | Enabler | As a developer, I need to [technical task] to enable [capability] | As a developer, I need to implement caching to enable instant search |

  ### Persona Referansı

  | Persona | Tipik İhtiyaçlar | Bağlam |
  |---------|------------------|--------|
  | End User | Verimlilik, basitlik, güvenilirlik | Günlük özellik kullanımı |
  | Administrator | Kontrol, görünürlük, güvenlik | Sistem yönetimi |
  | Power User | Otomasyon, özelleştirme, kısayollar | Uzman iş akışları |
  | New User | Rehberlik, öğrenme, güvenlik | Onboarding |

  ---

  ## Kabul Kriterleri Desenleri

  Given-When-Then formatını kullanarak test edilebilir kabul kriterleri yazın.

  ### Given-When-Then Şablonu

  ```
  Given [precondition/context],
  When [action/trigger],
  Then [expected outcome].
  ```

  **Örnekler:**
  ```
  Given the user is logged in with valid credentials,
  When they click the "Export" button,
  Then a PDF download starts within 2 seconds.

  Given the user has entered an invalid email format,
  When they submit the registration form,
  Then an inline error message displays "Please enter a valid email address."

  Given the shopping cart contains items,
  When the user refreshes the browser,
  Then the cart contents remain unchanged.
  ```

  ### Kabul Kriterleri Kontrol Listesi

  Her hikaye için kriterler içermelidir:

  | Kategori | Örnek |
  |----------|-------|
  | Happy Path | Given valid input, When submitted, Then success message displayed |
  | Validation | Should reject input when required field is empty |
  | Error Handling | Must show user-friendly message when API fails |
  | Performance | Should complete operation within 2 seconds |
  | Accessibility | Must be navigable via keyboard only |

  ### Hikaye Boyutuna Göre Minimum Kriterler

  | Story Points | Minimum AC Sayısı |
  |--------------|-------------------|
  | 1-2 | 3-4 kriterler |
  | 3-5 | 4-6 kriterler |
  | 8 | 5-8 kriterler |
  | 13+ | Hikayeleri böl |

  Tam şablon kütüphanesi için `references/user-story-templates.md` dosyasına bakın.

  ---

  ## Epic Bölme İş Akışı

  Epic'leri sunulabilir sprint boyutu hikayelere bölün:

  1. Epic kapsamını ve başarı kriterlerini tanımlayın
  2. Epic'ten etkilenen tüm persona'ları tanımlayın
  3. Her persona için gerekli tüm yetenekleri listeleyin
  4. Yetenekleri mantıksal hikayelere gruplandırın
  5. Her hikayenin ≤8 point olduğunu doğrulayın
  6. Hikayeler arasındaki bağımlılıkları tanımlayın
  7. Kademeli teslimat için hikayeleri sıralayın
  8. **Doğrulama:** Her hikaye bağımsız değer sağlar; toplam hikayeler epic kapsamını kapsar

  ### Bölme Teknikleri

  | Teknik | Ne Zaman Kullanılır | Örnek |
  |--------|-------------------|-------|
  | İş akışı adımına göre | Doğrusal süreç | "Checkout" → "Add to cart" + "Enter payment" + "Confirm order" |
  | Persona'ya göre | Çoklu kullanıcı tipleri | "Dashboard" → "Admin dashboard" + "User dashboard" |
  | Veri türüne göre | Çoklu inputlar | "Import" → "Import CSV" + "Import Excel" |
  | İşleme göre | CRUD işlevselliği | "Manage users" → "Create" + "Edit" + "Delete" |
  | Happy path önce | Risk azaltma | "Feature" → "Basic flow" + "Error handling" + "Edge cases" |

  ### Epic Örneği

  **Epic:** User Dashboard

  **Bölme:**
  ```
  Epic: User Dashboard (toplam 34 points)
  ├── US-001: View key metrics (5 pts) - End User
  ├── US-002: Customize layout (5 pts) - Power User
  ├── US-003: Export data to CSV (3 pts) - End User
  ├── US-004: Share with team (5 pts) - End User
  ├── US-005: Set up alerts (5 pts) - Power User
  ├── US-006: Filter by date range (3 pts) - End User
  ├── US-007: Admin overview (5 pts) - Admin
  └── US-008: Enable caching (3 pts) - Enabler
  ```

  ---

  ## Sprint Planlama İş Akışı

  Sprint kapasitesini planlayın ve hikayeleri seçin:

  1. Takım kapasitesini hesaplayın (velocity × erişilebilirlik)
  2. Sprint hedefini stakeholder'larla gözden geçirin
  3. Önceliklendirilmiş backlog'dan hikayeler seçin
  4. Kapasitesinin %80-85'ine doldur (committed)
  5. Stretch hedefleri ekle (%10-15 ek)
  6. Bağımlılıkları ve riskleri tanımlayın
  7. Karmaşık hikayeleri görevlere bölün
  8. **Doğrulama:** Committed points ≤%85 kapasite; tüm hikayelerin kabul kriterleri vardır

  ### Kapasite Hesaplaması

  ```
  Sprint Capacity = Average Velocity × Availability Factor

  Örnek:
  Average Velocity: 30 points
  Team availability: 90% (bir üye kısmen dışarıda)
  Adjusted Capacity: 27 points

  Committed: 23 points (27'nin %85'i)
  Stretch: 4 points (27'nin %15'i)
  ```

  ### Erişilebilirlik Faktörleri

  | Senaryo | Faktör |
  |--------|--------|
  | Tam sprint, PTO yok | 1.0 |
  | Bir takım üyesi %50 dışarıda | 0.9 |
  | Sprint sırasında tatil | 0.8 |
  | Çoklu üyeler dışarıda | 0.7 |

  ### Sprint Yükleme Şablonu

  ```
  Sprint Capacity: 27 points
  Sprint Goal: [Clear, measurable objective]

  COMMITTED (23 points):
  [H] US-001: User dashboard (5 pts)
  [H] US-002: Export feature (3 pts)
  [H] US-003: Search filter (5 pts)
  [M] US-004: Settings page (5 pts)
  [M] US-005: Help tooltips (3 pts)
  [L] US-006: Theme options (2 pts)

  STRETCH (4 points):
  [L] US-007: Sort options (2 pts)
  [L] US-008: Print view (2 pts)
  ```

  Tam planlama prosedürleri için `references/sprint-planning-guide.md` dosyasına bakın.

  ---

  ## Backlog Önceliklendirme

  Backlog'u değer ve çaba değerlendirmesi kullanarak önceliklendirin.

  ### Öncelik Seviyeleri

  | Öncelik | Tanım | Sprint Hedefi |
  |---------|-------|--------------|
  | Critical | Kullanıcıları engelleyen, güvenlik, veri kaybı | Acil |
  | High | Temel işlevsellik, anahtar kullanıcı ihtiyaçları | Bu sprint |
  | Medium | İyileştirmeler, geliştirmeler | Sonraki 2-3 sprint |
  | Low | Hoş olurdu, küçük iyileştirmeler | Backlog |

  ### Önceliklendirme Faktörleri

  | Faktör | Ağırlık | Sorular |
  |--------|--------|---------|
  | Business Value | 40% | Gelir etkisi? Kullanıcı talebi? Stratejik uyum? |
  | User Impact | 30% | Kaç kullanıcı? Ne sıklıkta kullanılır? |
  | Risk/Dependencies | 15% | Teknik risk? Harici bağımlılıklar? |
  | Effort | 15% | Boyut? Karmaşıklık? Belirsizlik? |

  ### INVEST Kriterleri Doğrulaması

  Sprint'e eklemeden önce her hikayeleri doğrulayın:

  | Kriter | Soru | Başarılı Olursa... |
  |--------|------|-------------------|
  | **I**ndependent | Bu bağımsız olarak diğer hatta alınmayan hikayeler olmadan geliştirilebilir mi? | Engelleyici bağımlılık yok |
  | **N**egotiable | Uygulama esnektir mi? | Birden fazla yaklaşım mümkün |
  | **V**aluable | Bu kullanıcı veya iş değeri sağlar mı? | "So that" içinde net fayda |
  | **E**stimable | Takım bunu tahmin edebilir mi? | Boyutlandırmak için yeterince anlaşılır |
  | **S**mall | Bu bir sprintde tamamlanabilir mi? | ≤8 story points |
  | **T**estable | Bunun yapıldığını doğrulayabilir miyiz? | Net kabul kriterleri |

  ---

  ## Referans Belgelendirme

  ### Kullanıcı Hikayesi Şablonları

  `references/user-story-templates.md` şunları içerir:

  - Tür başına standart hikaye formatları (feature, improvement, bug fix, enabler)
  - Kabul kriterleri desenleri (Given-When-Then, Should/Must/Can)
  - INVEST kriterleri doğrulama kontrol listesi
  - Story point tahmin rehberi (Fibonacci ölçeği)
  - Yaygın hikaye antipatterns ve çözümleri
  - Hikaye bölme teknikleri

  ### Sprint Planlama Rehberi

  `references/sprint-planning-guide.md` şunları içerir:

  - Sprint planlama toplantı gündemi
  - Kapasite hesaplama formülleri
  - Backlog önceliklendirme çerçevesi (WSJF)
  - Sprint seremonisi rehberleri (standup, review, retro)
  - Velocity izleme ve burndown desenleri
  - Definition of Done kontrol listesi
  - Sprint metrikleri ve hedefleri

  ---

  ## Araçlar

  ### Kullanıcı Hikayesi Oluşturucusu

  ```bash
  # Örnek epic'ten hikayeler oluştur
  python scripts/user_story_generator.py

  # Kapasite ile sprintini planla
  python scripts/user_story_generator.py sprint 30
  ```

  Oluşturur:
  - INVEST uyumlu kullanıcı hikayeleri
  - Given-When-Then kabul kriterleri
  - Story point tahminleri (Fibonacci ölçeği)
  - Öncelik atamalar
  - Committed ve stretch öğeleriyle sprint yükleme

  ### Örnek Çıktı

  ```
  USER STORY: USR-001
  ========================================
  Title: View Key Metrics
  Type: story
  Priority: HIGH
  Points: 5

  Story:
  As a End User, I want to view key metrics and KPIs
  so that I can save time and work more efficiently

  Acceptance Criteria:
    1. Given user has access, When they view key metrics, Then the result is displayed
    2. Should validate input before processing
    3. Must show clear error message when action fails
    4. Should complete within 2 seconds
    5. Must be accessible via keyboard navigation

  INVEST Checklist:
    ✓ Independent
    ✓ Negotiable
    ✓ Valuable
    ✓ Estimable
    ✓ Small
    ✓ Testable
  ```

  ---

  ## Sprint Metrikleri

  Sprint sağlığını ve takım performansını izleyin.

  ### Anahtar Metrikler

  | Metrik | Formül | Hedef |
  |--------|--------|-------|
  | Velocity | Tamamlanan points / sprint | Stabil ±10% |
  | Commitment Reliability | Tamamlanan / Committed | >%85 |
  | Scope Change | Sprint ortasında eklenen veya çıkarılan points | <%10 |
  | Carryover | Tamamlanmayan points | <%15 |

  ### Velocity İzleme

  ```
  Sprint 1: 25 points
  Sprint 2: 28 points
  Sprint 3: 30 points
  Sprint 4: 32 points
  Sprint 5: 29 points
  ------------------------
  Average Velocity: 28.8 points
  Trend: Stabil

  Planning: 24-26 pointe commit et
  ```

  ### Definition of Done

  Hikaye tamamlanmış olduğunda:

  - [ ] Kod tamamlanmış ve peer review geçmiş
  - [ ] Unit test yazılmış ve başarılı
  - [ ] Kabul kriterleri doğrulanmış
  - [ ] Belgeleme güncellenmiş
  - [ ] Staging ortamına dağıtılmış
  - [ ] Product Owner kabul etmiş
  - [ ] Kritik hata yok

  ## İlgili Beceriler

  - **Scrum Master** (`project-management/scrum-master/`) — Velocity verileri ve sprint seremonileri backlog yönetimine tamamlayıcı
  - **Product Manager Toolkit** (`product-team/product-manager-toolkit/`) — RICE önceliklendirmesi backlog sıralamasına besler
---

# Agile Product Owner

Backlog management and sprint execution toolkit for product owners, including user story generation, acceptance criteria patterns, sprint planning, and velocity tracking.

---

## Table of Contents

- [What Makes This Skill Different](#what-makes-this-skill-different)
- [User Story Generation Workflow](#user-story-generation-workflow)
- [Acceptance Criteria Patterns](#acceptance-criteria-patterns)
- [Epic Breakdown Workflow](#epic-breakdown-workflow)
- [Sprint Planning Workflow](#sprint-planning-workflow)
- [Backlog Prioritization](#backlog-prioritization)
- [Reference Documentation](#reference-documentation)
- [Tools](#tools)

---

## What Makes This Skill Different

- **Capacity math that aligns with reality:** sprint capacity is based on velocity × availability factor, not hope.
- **Acceptance criteria scaled by story size:** minimum AC counts map to story points to avoid under-spec'ing large items.
- **Weighted prioritization that stays consistent:** value 40%, impact 30%, risk 15%, effort 15% keeps tradeoffs explicit.
- **Systematic epic splitting techniques:** five concrete split patterns prevent oversized stories.
- **INVEST validation baked into workflows:** every story includes a validation step, not just guidance.

## User Story Generation Workflow

Create INVEST-compliant user stories from requirements:

1. Identify the persona (who benefits from this feature)
2. Define the action or capability needed
3. Articulate the benefit or value delivered
4. Write acceptance criteria using Given-When-Then
5. Estimate story points using Fibonacci scale
6. Validate against INVEST criteria
7. Add to backlog with priority
8. **Validation:** Story passes all INVEST criteria; acceptance criteria are testable

### User Story Template

```
As a [persona],
I want to [action/capability],
So that [benefit/value].
```

**Example:**
```
As a marketing manager,
I want to export campaign reports to PDF,
So that I can share results with stakeholders who don't have system access.
```

### Story Types

| Type | Template | Example |
|------|----------|---------|
| Feature | As a [persona], I want to [action] so that [benefit] | As a user, I want to filter search results so that I find items faster |
| Improvement | As a [persona], I need [capability] to [goal] | As a user, I need faster page loads to complete tasks without frustration |
| Bug Fix | As a [persona], I expect [behavior] when [condition] | As a user, I expect my cart to persist when I refresh the page |
| Enabler | As a developer, I need to [technical task] to enable [capability] | As a developer, I need to implement caching to enable instant search |

### Persona Reference

| Persona | Typical Needs | Context |
|---------|--------------|---------|
| End User | Efficiency, simplicity, reliability | Daily feature usage |
| Administrator | Control, visibility, security | System management |
| Power User | Automation, customization, shortcuts | Expert workflows |
| New User | Guidance, learning, safety | Onboarding |

---

## Acceptance Criteria Patterns

Write testable acceptance criteria using Given-When-Then format.

### Given-When-Then Template

```
Given [precondition/context],
When [action/trigger],
Then [expected outcome].
```

**Examples:**
```
Given the user is logged in with valid credentials,
When they click the "Export" button,
Then a PDF download starts within 2 seconds.

Given the user has entered an invalid email format,
When they submit the registration form,
Then an inline error message displays "Please enter a valid email address."

Given the shopping cart contains items,
When the user refreshes the browser,
Then the cart contents remain unchanged.
```

### Acceptance Criteria Checklist

Each story should include criteria for:

| Category | Example |
|----------|---------|
| Happy Path | Given valid input, When submitted, Then success message displayed |
| Validation | Should reject input when required field is empty |
| Error Handling | Must show user-friendly message when API fails |
| Performance | Should complete operation within 2 seconds |
| Accessibility | Must be navigable via keyboard only |

### Minimum Criteria by Story Size

| Story Points | Minimum AC Count |
|--------------|------------------|
| 1-2 | 3-4 criteria |
| 3-5 | 4-6 criteria |
| 8 | 5-8 criteria |
| 13+ | Split the story |

See `references/user-story-templates.md` for complete template library.

---

## Epic Breakdown Workflow

Break epics into deliverable sprint-sized stories:

1. Define epic scope and success criteria
2. Identify all personas affected by the epic
3. List all capabilities needed for each persona
4. Group capabilities into logical stories
5. Validate each story is ≤8 points
6. Identify dependencies between stories
7. Sequence stories for incremental delivery
8. **Validation:** Each story delivers standalone value; total stories cover epic scope

### Splitting Techniques

| Technique | When to Use | Example |
|-----------|-------------|---------|
| By workflow step | Linear process | "Checkout" → "Add to cart" + "Enter payment" + "Confirm order" |
| By persona | Multiple user types | "Dashboard" → "Admin dashboard" + "User dashboard" |
| By data type | Multiple inputs | "Import" → "Import CSV" + "Import Excel" |
| By operation | CRUD functionality | "Manage users" → "Create" + "Edit" + "Delete" |
| Happy path first | Risk reduction | "Feature" → "Basic flow" + "Error handling" + "Edge cases" |

### Epic Example

**Epic:** User Dashboard

**Breakdown:**
```
Epic: User Dashboard (34 points total)
├── US-001: View key metrics (5 pts) - End User
├── US-002: Customize layout (5 pts) - Power User
├── US-003: Export data to CSV (3 pts) - End User
├── US-004: Share with team (5 pts) - End User
├── US-005: Set up alerts (5 pts) - Power User
├── US-006: Filter by date range (3 pts) - End User
├── US-007: Admin overview (5 pts) - Admin
└── US-008: Enable caching (3 pts) - Enabler
```

---

## Sprint Planning Workflow

Plan sprint capacity and select stories:

1. Calculate team capacity (velocity × availability)
2. Review sprint goal with stakeholders
3. Select stories from prioritized backlog
4. Fill to 80-85% of capacity (committed)
5. Add stretch goals (10-15% additional)
6. Identify dependencies and risks
7. Break complex stories into tasks
8. **Validation:** Committed points ≤85% capacity; all stories have acceptance criteria

### Capacity Calculation

```
Sprint Capacity = Average Velocity × Availability Factor

Example:
Average Velocity: 30 points
Team availability: 90% (one member partially out)
Adjusted Capacity: 27 points

Committed: 23 points (85% of 27)
Stretch: 4 points (15% of 27)
```

### Availability Factors

| Scenario | Factor |
|----------|--------|
| Full sprint, no PTO | 1.0 |
| One team member out 50% | 0.9 |
| Holiday during sprint | 0.8 |
| Multiple members out | 0.7 |

### Sprint Loading Template

```
Sprint Capacity: 27 points
Sprint Goal: [Clear, measurable objective]

COMMITTED (23 points):
[H] US-001: User dashboard (5 pts)
[H] US-002: Export feature (3 pts)
[H] US-003: Search filter (5 pts)
[M] US-004: Settings page (5 pts)
[M] US-005: Help tooltips (3 pts)
[L] US-006: Theme options (2 pts)

STRETCH (4 points):
[L] US-007: Sort options (2 pts)
[L] US-008: Print view (2 pts)
```

See `references/sprint-planning-guide.md` for complete planning procedures.

---

## Backlog Prioritization

Prioritize backlog using value and effort assessment.

### Priority Levels

| Priority | Definition | Sprint Target |
|----------|------------|---------------|
| Critical | Blocking users, security, data loss | Immediate |
| High | Core functionality, key user needs | This sprint |
| Medium | Improvements, enhancements | Next 2-3 sprints |
| Low | Nice-to-have, minor improvements | Backlog |

### Prioritization Factors

| Factor | Weight | Questions |
|--------|--------|-----------|
| Business Value | 40% | Revenue impact? User demand? Strategic alignment? |
| User Impact | 30% | How many users? How frequently used? |
| Risk/Dependencies | 15% | Technical risk? External dependencies? |
| Effort | 15% | Size? Complexity? Uncertainty? |

### INVEST Criteria Validation

Before adding to sprint, validate each story:

| Criterion | Question | Pass If... |
|-----------|----------|------------|
| **I**ndependent | Can this be developed without other uncommitted stories? | No blocking dependencies |
| **N**egotiable | Is the implementation flexible? | Multiple approaches possible |
| **V**aluable | Does this deliver user or business value? | Clear benefit in "so that" |
| **E**stimable | Can the team estimate this? | Understood well enough to size |
| **S**mall | Can this complete in one sprint? | ≤8 story points |
| **T**estable | Can we verify this is done? | Clear acceptance criteria |

---

## Reference Documentation

### User Story Templates

`references/user-story-templates.md` contains:

- Standard story formats by type (feature, improvement, bug fix, enabler)
- Acceptance criteria patterns (Given-When-Then, Should/Must/Can)
- INVEST criteria validation checklist
- Story point estimation guide (Fibonacci scale)
- Common story antipatterns and fixes
- Story splitting techniques

### Sprint Planning Guide

`references/sprint-planning-guide.md` contains:

- Sprint planning meeting agenda
- Capacity calculation formulas
- Backlog prioritization framework (WSJF)
- Sprint ceremony guides (standup, review, retro)
- Velocity tracking and burndown patterns
- Definition of Done checklist
- Sprint metrics and targets

---

## Tools

### User Story Generator

```bash
# Generate stories from sample epic
python scripts/user_story_generator.py

# Plan sprint with capacity
python scripts/user_story_generator.py sprint 30
```

Generates:
- INVEST-compliant user stories
- Given-When-Then acceptance criteria
- Story point estimates (Fibonacci scale)
- Priority assignments
- Sprint loading with committed and stretch items

### Sample Output

```
USER STORY: USR-001
========================================
Title: View Key Metrics
Type: story
Priority: HIGH
Points: 5

Story:
As a End User, I want to view key metrics and KPIs
so that I can save time and work more efficiently

Acceptance Criteria:
  1. Given user has access, When they view key metrics, Then the result is displayed
  2. Should validate input before processing
  3. Must show clear error message when action fails
  4. Should complete within 2 seconds
  5. Must be accessible via keyboard navigation

INVEST Checklist:
  ✓ Independent
  ✓ Negotiable
  ✓ Valuable
  ✓ Estimable
  ✓ Small
  ✓ Testable
```

---

## Sprint Metrics

Track sprint health and team performance.

### Key Metrics

| Metric | Formula | Target |
|--------|---------|--------|
| Velocity | Points completed / sprint | Stable ±10% |
| Commitment Reliability | Completed / Committed | >85% |
| Scope Change | Points added or removed mid-sprint | <10% |
| Carryover | Points not completed | <15% |

### Velocity Tracking

```
Sprint 1: 25 points
Sprint 2: 28 points
Sprint 3: 30 points
Sprint 4: 32 points
Sprint 5: 29 points
------------------------
Average Velocity: 28.8 points
Trend: Stable

Planning: Commit to 24-26 points
```

### Definition of Done

Story is complete when:

- [ ] Code complete and peer reviewed
- [ ] Unit tests written and passing
- [ ] Acceptance criteria verified
- [ ] Documentation updated
- [ ] Deployed to staging environment
- [ ] Product Owner accepted
- [ ] No critical bugs remaining

## Related Skills

- **Scrum Master** (`project-management/scrum-master/`) — Velocity data and sprint ceremonies complement backlog management
- **Product Manager Toolkit** (`product-team/product-manager-toolkit/`) — RICE prioritization feeds backlog ordering
