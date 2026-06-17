---
name: "writing-plans"
description_en: "Use when you have a spec or requirements for a multi-step task, before touching code"
description_tr: "Çok adımlı bir görev için spec veya gereksinimleriniz varsa, koda başlamadan önce kullanın."
category: "Design"
repo: "obra/superpowers"
stars: 230300
url: "https://github.com/obra/superpowers/blob/HEAD/skills/writing-plans/SKILL.md"
path: "skills/writing-plans/SKILL.md"
is_collection: false
body_length: 6942
has_scripts: false
has_references: false
has_examples: false
related_files: ["plan-document-reviewer-prompt.md"]
body_tr: |-
  # Planlar Yazma
  
  ## Genel Bakış
  
  Mühendisinin kod tabanımız hakkında sıfır bağlamı olduğunu ve şüpheli zevki olduğunu varsayarak kapsamlı uygulama planları yazın. Bilmeleri gereken her şeyi belgeleyin: her görev için hangi dosyalara dokunacakları, kod, test, kontrol etmeleri gereken belgeler, nasıl test edecekleri. Planın tamamını yönetilebilir görevler olarak sunun. DRY. YAGNI. TDD. Sık commit'ler.
  
  Yetenekli bir geliştirici olduklarını varsayın, ancak araç setimiz veya problem alanımız hakkında neredeyse hiçbir şey bilmediklerini varsayın. İyi test tasarımı konusunda çok bilgili olmadıklarını varsayın.
  
  **Başında Duyur:** "Uygulama planını oluşturmak için writing-plans skill'ini kullanıyorum."
  
  **Bağlam:** İzole bir worktree'de çalışıyorsanız, bu çalışma zamanında `superpowers:using-git-worktrees` skill'i aracılığıyla oluşturulmuş olmalıdır.
  
  **Planları Kaydet:** `docs/superpowers/plans/YYYY-MM-DD-<feature-name>.md`
  - (Kullanıcı tercihlerine göre plan konumu bu varsayılanı geçersiz kılabilir)
  
  ## Kapsam Kontrolü
  
  Spec birden fazla bağımsız alt sistemi kapsıyorsa, beyin fırtınası sırasında alt-proje spec'lerine bölünmüş olmalıdır. Bölünmediyse, bunu ayrı planlara bölmeyi öneriniz — alt sistem başına bir plan. Her plan kendi başına çalışan, test edilebilir yazılım üretmelidir.
  
  ## Dosya Yapısı
  
  Görevleri tanımlamadan önce, hangi dosyaların oluşturulacağını veya değiştirileceğini ve her birinin ne sorumlu olduğunu eşleştirin. Burası ayrıştırma kararlarının kilitlendiği yerdir.
  
  - Açık sınırları ve iyi tanımlanmış arayüzleri olan tasarım birimleri. Her dosyanın bir açık sorumluluğu olmalıdır.
  - Bir defada bağlamınızda tutabileceğiniz kod hakkında en iyi şekilde akıl yürütürsünüz, ve düzenlemeleriniz dosyalar odaklandığında daha güvenilir olur. Çok fazlasını yapan büyük dosyaları küçük, odaklanmış dosyalarla değişterin.
  - Birlikte değişen dosyalar birlikte yaşamalıdır. Teknik katman tarafından değil, sorumluluk tarafından bölün.
  - Var olan kod tabanlarında, belirlenmiş desenleri takip edin. Kod tabanı büyük dosyalar kullanıyorsa, tek taraflı olarak yeniden yapılandırmayın — ancak değiştirdiğiniz bir dosya üstü kapalı hale geldiyse, plana bir bölme dahil etmek makuldür.
  
  Bu yapı, görev ayrıştırmasını bilgilendirir. Her görev bağımsız olarak anlamlı olan kendi içinde yeterli değişiklikler üretmelidir.
  
  ## Doğru Boyutta Görev
  
  Bir görev kendi test döngüsünü taşıyan ve taze bir gözden geçiren kapısına değer olan en küçük birimdir. Görev sınırlarını çizerken: kurulum, konfigürasyon, iskele oluşturma ve dokümantasyon adımlarını çıktısına ihtiyaç duyan görevin içine katlayın; bir gözden geçiren bir görevi anlamlı bir şekilde reddedebilirken komşusunu onaylayabileceği yerlerde sadece bölün. Her görev bağımsız olarak test edilebilir bir çıktı ile sona erer.
  
  ## Yönetilebilir Görev Parçalılığı
  
  **Her adım bir işlem (2-5 dakika):**
  - "Başarısız testi yazın" - adım
  - "Başarısız olduğundan emin olmak için çalıştırın" - adım
  - "Testi geçirmek için minimal kodu uygulayın" - adım
  - "Testleri çalıştırın ve geçtiğinden emin olun" - adım
  - "Commit" - adım
  
  ## Plan Belgesi Başlığı
  
  **Her plan BU başlıkla başlamalıdır:**
  
  ```markdown
  # [Özellik Adı] Uygulama Planı
  
  > **Agentic workers için:** GEREKLI ALT-SKİLL: superpowers:subagent-driven-development (önerilir) veya superpowers:executing-plans kullanın. Adımlar izleme için checkbox (`- [ ]`) sözdizimini kullanır.
  
  **Hedef:** [Bu yapının ne olduğunu açıklayan bir cümle]
  
  **Mimari:** [Yaklaşım hakkında 2-3 cümle]
  
  **Teknoloji Yığını:** [Önemli teknolojiler/kütüphaneler]
  
  ## Küresel Kısıtlamalar
  
  [Spec'in proje çapında gereksinimleri — sürüm tabanları, bağımlılık sınırları,
  adlandırma ve kopya kuralları, platform gereksinimleri — tam değerlerle
  spec'ten kelime kelime kopyalanmış, her biri bir satır. Her görevin
  gereksinimleri bu bölümü örtülü olarak içerir.]
  
  ---
  ```
  
  ## Görev Yapısı
  
  ````markdown
  ### Görev N: [Bileşen Adı]
  
  **Dosyalar:**
  - Oluştur: `exact/path/to/file.py`
  - Değiştir: `exact/path/to/existing.py:123-145`
  - Test: `tests/exact/path/to/test.py`
  
  **Arayüzler:**
  - Kullanır: [bu görevin önceki görevlerden kullandığı şey — tam imzalar]
  - Üretir: [daha sonraki görevlerin güvendiği şey — tam fonksiyon adları, parametre
    ve dönüş türleri. Bir görevin uygulayıcısı sadece kendi görevini görür; bu
    blok komşu görevlerin kullandığı adları ve türleri nasıl öğreneceklerini açıklar.]
  
  - [ ] **Adım 1: Başarısız test yazın**
  
  ```python
  def test_specific_behavior():
      result = function(input)
      assert result == expected
  ```
  
  - [ ] **Adım 2: Başarısız olduğunu doğrulamak için test çalıştırın**
  
  Çalıştır: `pytest tests/path/test.py::test_name -v`
  Beklenen: BAŞARISIZ "function not defined" ile
  
  - [ ] **Adım 3: Minimal uygulama yazın**
  
  ```python
  def function(input):
      return expected
  ```
  
  - [ ] **Adım 4: Geçtiğini doğrulamak için test çalıştırın**
  
  Çalıştır: `pytest tests/path/test.py::test_name -v`
  Beklenen: BAŞARILI
  
  - [ ] **Adım 5: Commit**
  
  ```bash
  git add tests/path/test.py src/path/file.py
  git commit -m "feat: add specific feature"
  ```
  ````
  
  ## Yer Tutucu Yok
  
  Her adım mühendisinin ihtiyaç duyduğu gerçek içeriği içermelidir. Bunlar **plan başarısızlıklarıdır** — asla yazma:
  - "TBD", "TODO", "daha sonra uygula", "detayları doldur"
  - "Uygun hata işleme ekle" / "doğrulama ekle" / "kenar durumları işle"
  - "Yukarıdakiler için testler yazın" (gerçek test kodu olmadan)
  - "Görev N'ye benzer" (kodu tekrar edin — mühendis görevleri ters sırayla okuyor olabilir)
  - Kodu göstermeden yapılması gereken şeyi açıklayan adımlar (kod adımları için kod blokları gerekli)
  - Hiçbir görevde tanımlanmayan tiplere, fonksiyonlara veya yöntemlere referanslar
  
  ## Hatırla
  - Her zaman tam dosya yolları
  - Her adımda tam kod — bir adım kodu değiştirirse, kodu göster
  - Beklenen çıktı ile tam komutlar
  - DRY, YAGNI, TDD, sık commit'ler
  
  ## Kendi Kendine İnceleme
  
  Tam planı yazdıktan sonra, spec'e taze gözlerle bakın ve planı buna karşı kontrol edin. Bu kendin çalıştırdığın bir kontrol listesidir — alt ajan gönderisi değil.
  
  **1. Spec kapsamı:** Spec'teki her bölümü/gereksinimi hızlı geçerek oku. Onu uygulayan bir görev gösterebilir misin? Boşlukları listele.
  
  **2. Yer tutucu taraması:** Planında kırmızı bayraklarını ara — "Yer Tutucu Yok" bölümünün desenlerinden herhangi biri. Düzelt.
  
  **3. Tür tutarlılığı:** Daha sonraki görevlerde kullandığın tipler, yöntem imzaları ve mülk adları önceki görevlerde tanımlanmış olanlara karşılık geliyor mu? Task 3'te `clearLayers()` olarak çağrılan ancak Task 7'de `clearFullLayers()` olarak çağrılan bir fonksiyon bir hatadır.
  
  Sorunlar bulursan, satır içinde düzelt. Yeniden incelemeye gerek yok — sadece düzelt ve devam et. Bir spec gereksinimi bulursan görev olmasa, görevi ekle.
  
  ## Yürütme El Değiştirme
  
  Planı kaydettikten sonra, yürütme seçeneği sun:
  
  **"Plan tamamlandı ve `docs/superpowers/plans/<filename>.md` adresine kaydedildi. İki yürütme seçeneği:**
  
  **1. Subagent-Tarafından Yönetilen (önerilir)** - Her görev için taze bir subagent gönderir, görevler arasında gözden geçiri, hızlı yineleme
  
  **2. Satır İçi Yürütme** - Bu oturumda executing-plans kullanarak görevleri yürüt, kontrol noktalarıyla toplu yürütme
  
  **Hangi yaklaşım?"**
  
  **Subagent-Tarafından Yönetilen seçilirse:**
  - **GEREKLI ALT-SKİLL:** superpowers:subagent-driven-development kullan
  - Görev başına taze subagent + iki aşamalı gözden geçirme
  
  **Satır İçi Yürütme seçilirse:**
  - **GEREKLI ALT-SKİLL:** superpowers:executing-plans kullan
  - Gözden geçirme kontrol noktalarıyla toplu yürütme
---

# Writing Plans

## Overview

Write comprehensive implementation plans assuming the engineer has zero context for our codebase and questionable taste. Document everything they need to know: which files to touch for each task, code, testing, docs they might need to check, how to test it. Give them the whole plan as bite-sized tasks. DRY. YAGNI. TDD. Frequent commits.

Assume they are a skilled developer, but know almost nothing about our toolset or problem domain. Assume they don't know good test design very well.

**Announce at start:** "I'm using the writing-plans skill to create the implementation plan."

**Context:** If working in an isolated worktree, it should have been created via the `superpowers:using-git-worktrees` skill at execution time.

**Save plans to:** `docs/superpowers/plans/YYYY-MM-DD-<feature-name>.md`
- (User preferences for plan location override this default)

## Scope Check

If the spec covers multiple independent subsystems, it should have been broken into sub-project specs during brainstorming. If it wasn't, suggest breaking this into separate plans — one per subsystem. Each plan should produce working, testable software on its own.

## File Structure

Before defining tasks, map out which files will be created or modified and what each one is responsible for. This is where decomposition decisions get locked in.

- Design units with clear boundaries and well-defined interfaces. Each file should have one clear responsibility.
- You reason best about code you can hold in context at once, and your edits are more reliable when files are focused. Prefer smaller, focused files over large ones that do too much.
- Files that change together should live together. Split by responsibility, not by technical layer.
- In existing codebases, follow established patterns. If the codebase uses large files, don't unilaterally restructure - but if a file you're modifying has grown unwieldy, including a split in the plan is reasonable.

This structure informs the task decomposition. Each task should produce self-contained changes that make sense independently.

## Task Right-Sizing

A task is the smallest unit that carries its own test cycle and is worth a
fresh reviewer's gate. When drawing task boundaries: fold setup,
configuration, scaffolding, and documentation steps into the task whose
deliverable needs them; split only where a reviewer could meaningfully
reject one task while approving its neighbor. Each task ends with an
independently testable deliverable.

## Bite-Sized Task Granularity

**Each step is one action (2-5 minutes):**
- "Write the failing test" - step
- "Run it to make sure it fails" - step
- "Implement the minimal code to make the test pass" - step
- "Run the tests and make sure they pass" - step
- "Commit" - step

## Plan Document Header

**Every plan MUST start with this header:**

```markdown
# [Feature Name] Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** [One sentence describing what this builds]

**Architecture:** [2-3 sentences about approach]

**Tech Stack:** [Key technologies/libraries]

## Global Constraints

[The spec's project-wide requirements — version floors, dependency limits,
naming and copy rules, platform requirements — one line each, with exact
values copied verbatim from the spec. Every task's requirements implicitly
include this section.]

---
```

## Task Structure

````markdown
### Task N: [Component Name]

**Files:**
- Create: `exact/path/to/file.py`
- Modify: `exact/path/to/existing.py:123-145`
- Test: `tests/exact/path/to/test.py`

**Interfaces:**
- Consumes: [what this task uses from earlier tasks — exact signatures]
- Produces: [what later tasks rely on — exact function names, parameter
  and return types. A task's implementer sees only their own task; this
  block is how they learn the names and types neighboring tasks use.]

- [ ] **Step 1: Write the failing test**

```python
def test_specific_behavior():
    result = function(input)
    assert result == expected
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pytest tests/path/test.py::test_name -v`
Expected: FAIL with "function not defined"

- [ ] **Step 3: Write minimal implementation**

```python
def function(input):
    return expected
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pytest tests/path/test.py::test_name -v`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add tests/path/test.py src/path/file.py
git commit -m "feat: add specific feature"
```
````

## No Placeholders

Every step must contain the actual content an engineer needs. These are **plan failures** — never write them:
- "TBD", "TODO", "implement later", "fill in details"
- "Add appropriate error handling" / "add validation" / "handle edge cases"
- "Write tests for the above" (without actual test code)
- "Similar to Task N" (repeat the code — the engineer may be reading tasks out of order)
- Steps that describe what to do without showing how (code blocks required for code steps)
- References to types, functions, or methods not defined in any task

## Remember
- Exact file paths always
- Complete code in every step — if a step changes code, show the code
- Exact commands with expected output
- DRY, YAGNI, TDD, frequent commits

## Self-Review

After writing the complete plan, look at the spec with fresh eyes and check the plan against it. This is a checklist you run yourself — not a subagent dispatch.

**1. Spec coverage:** Skim each section/requirement in the spec. Can you point to a task that implements it? List any gaps.

**2. Placeholder scan:** Search your plan for red flags — any of the patterns from the "No Placeholders" section above. Fix them.

**3. Type consistency:** Do the types, method signatures, and property names you used in later tasks match what you defined in earlier tasks? A function called `clearLayers()` in Task 3 but `clearFullLayers()` in Task 7 is a bug.

If you find issues, fix them inline. No need to re-review — just fix and move on. If you find a spec requirement with no task, add the task.

## Execution Handoff

After saving the plan, offer execution choice:

**"Plan complete and saved to `docs/superpowers/plans/<filename>.md`. Two execution options:**

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?"**

**If Subagent-Driven chosen:**
- **REQUIRED SUB-SKILL:** Use superpowers:subagent-driven-development
- Fresh subagent per task + two-stage review

**If Inline Execution chosen:**
- **REQUIRED SUB-SKILL:** Use superpowers:executing-plans
- Batch execution with checkpoints for review
