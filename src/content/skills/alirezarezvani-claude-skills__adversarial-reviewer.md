---
name: "adversarial-reviewer"
description_en: "Adversarial code review that breaks the self-review monoculture. Use when you want a genuinely critical review of recent changes, before merging a PR, or when you suspect Claude is being too agreeable about code quality. Forces perspective shifts through hostile reviewer personas that catch blind spots the author's mental model shares with the reviewer."
description_tr: "Kendi kendine review yapma alışkanlığını kıran muhasım kod incelemesi. Yakın zamandaki değişikliklerinizi gerçekten eleştirel bir gözle incelemek, PR merge etmeden önce kontrol etmek veya Claude'un kod kalitesi konusunda çok uyumlu olduğundan şüphelendiğiniz durumlarda kullanın. Düşmanca reviewer kişilikleri aracılığıyla bakış açısını değiştirerek, yazar ve reviewer'ın ortak zihinsel modellerinin yakalamadığı körlükleri ortaya çıkarır."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/adversarial-reviewer/SKILL.md"
path: ".gemini/skills/adversarial-reviewer/SKILL.md"
is_collection: false
body_length: 11266
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Adversarial Code Reviewer

  ## Description

  Üç düşmanca gözlemci kişiliği (Saboteur, New Hire, Security Auditor) aracılığıyla gerçek perspektif değişimini zorlayan adversarial code review yeteneği. Her kişiliğin en az bir sorun bulması GEREKİR — hiçbir "LGTM" kaçamaz. Bulgular ciddiyete göre sınıflandırılır ve birden fazla kişilik tarafından yakalandığında çapraz olarak yükseltilir.

  ## Features

  - **Üç adversarial kişilik** — Saboteur (üretim kırılmaları), New Hire (bakım kolaylığı), Security Auditor (OWASP-temelli)
  - **Zorunlu bulgular** — Her kişiliğin en az bir sorun ortaya koyması gerekir, damga basılmış incelemeleri ortadan kaldırır
  - **Ciddiyeti yükseltme** — 2+ kişilik tarafından yakalanan sorunlar bir ciddiyeti seviyesi yükseltilir
  - **Self-review tuzak kırıcı** — Paylaşılan zihinsel model kör noktalarını aşmak için somut teknikler
  - **Yapılandırılmış kararlar** — BLOCK / CONCERNS / CLEAN net merge rehberliği ile

  ## Usage

  ```
  /adversarial-review              # Review staged/unstaged changes
  /adversarial-review --diff HEAD~3  # Review last 3 commits
  /adversarial-review --file src/auth.ts  # Review a specific file
  ```

  ## Examples

  ### Example: Merge Öncesi PR İncelemesi

  ```
  /adversarial-review --diff main...HEAD
  ```

  Tüm üç kişilikten gelen, tekilleştirilmiş ve ciddiyete göre sıralanmış bulgularla yapılandırılmış bir rapor üretir ve BLOCK/CONCERNS/CLEAN kararıyla sonlanır.

  ## Bu Yeteneğin Çözdüğü Problem

  Claude yazdığı kodu (veya yeni okuduğu kodu) incelediğinde, yazar ile aynı mental modeli, varsayımları ve kör noktaları paylaşır. Bu, yeni bir insan gözlemcinin hemen işaret edeceği koda dair "Looks good to me" incelemeleri üretir. Kullanıcılar bunu AI-destekli geliştirmenin en büyük hayal kırıklıklarından biri olarak bildirmiştir.

  Bu yeteneği, adversarial kişilikleri benimsemeyi zorlayarak — her birinin farklı öncelikleri, farklı endişeleri ve "kötü kod"un farklı tanımları vardır — gerçek bir perspektif değişimini sağlar.

  ## Table of Contents

  1. [Quick Start](#quick-start)
  2. [Review Workflow](#review-workflow)
  3. [The Three Personas](#the-three-personas)
  4. [Severity Classification](#severity-classification)
  5. [Output Format](#output-format)
  6. [Anti-Patterns](#anti-patterns)
  7. [When to Use This](#when-to-use-this)

  ## Quick Start

  ```
  /adversarial-review              # Review staged/unstaged changes
  /adversarial-review --diff HEAD~3  # Review last 3 commits
  /adversarial-review --file src/auth.ts  # Review a specific file
  ```

  ## Review Workflow

  ### Step 1: Değişiklikleri Toplayın

  İstifadeye bağlı olarak neleri inceleyeceğinizi belirleyin:

  - **Argüman yok:** `git diff` (unstaged) + `git diff --cached` (staged) komutlarını çalıştırın. Her ikisi de boşsa, `git diff HEAD~1` (son commit) komutunu çalıştırın.
  - **`--diff <ref>`:** `git diff <ref>` komutunu çalıştırın.
  - **`--file <path>`:** Dosyanın tamamını okuyun. İncelemeleri yalnızca değişikliklere değil, tam dosyaya odaklayın.

  Hiçbir değişiklik bulunamazsa, durdurun ve rapor edin: "Nothing to review."

  ### Step 2: Tam Bağlamı Okuyun

  Diffteki her dosya için:
  1. **Tam dosyayı** okuyun (yalnızca değiştirilen satırları değil) — hatalar yeni kodun mevcut kodla etkileşim şeklinde saklanır.
  2. Değişikliğin **amacını** belirleyin: hata düzeltme, yeni feature, refactor, config değişikliği, test.
  3. CLAUDE.md, .editorconfig, linting konfigleri veya mevcut desenlerden herhangi bir **proje kuralı** not edin.

  ### Step 3: Üç Kişiliği de Çalıştırın

  Her kişiliği sırayla yürütün. Her kişiliğin en az bir bulgu üretmesi GEREKİR. Bir kişiliğin hiçbir sorun bulamaması, yeterince bakmadığını gösterir — geri dönün ve tekrar bakın.

  **ÖNEMLİ:** Bulguları yumuşatmayın. Belirsiz kalmayın. "Bu muhtemelen iyi olabilir ama..." demeyin — ya bir sorun vardır ya da yoktur. Doğrudan olun.

  ### Step 4: Tekilleştirin ve Sentezleyin

  Üç kişiliğin de rapor etmesinden sonra:
  1. Yinelenen bulguları birleştirin (birden fazla kişilik tarafından yakalanan aynı sorun).
  2. 2+ kişilik tarafından yakalanan bulguları sonraki ciddiyeti seviyesine yükseltin.
  3. Son yapılandırılmış çıktıyı üretin.

  ## The Three Personas

  ### Persona 1: The Saboteur

  **Mindset:** "Bu kodu üretimde kırmaya çalışıyorum."

  **Priorities:**
  - Doğrulanmamış input
  - Tutarsız olabilecek state
  - Senkronizasyon olmadan eşzamanlı erişim
  - İstisnai durumları yiyen veya yanıltıcı sonuçlar döndüren error path'leri
  - Veri formatı, boyutu veya kullanılabilirliğine ilişkin ihlal edilebilecek varsayımlar
  - Off-by-one hatalar, integer overflow, null/undefined dereference'ları
  - Resource leak'leri (file handle'lar, bağlantılar, subscription'lar, listener'lar)

  **Review Process:**
  1. Değiştirilen her function/method için şu soruyu sorun: "Bu fonksiyona gönderebileceğim en kötü input nedir?"
  2. Her external call için şu soruyu sorun: "Bu başarısız olursa, time out'a uğrarsa veya çöp döndürürse?"
  3. Her state mutation için şu soruyu sorun: "Bu iki kez çalışırsa? Eşzamanlı olarak? Hiç?"
  4. Her conditional için şu soruyu sorun: "İkinci branch de yanlışsa?"

  **En az bir sorun bulmanız GEREKİR. Kod gerçekten kusursuzsa, güvendiği en kırılgan varsayımı not edin.**

  ---

  ### Persona 2: The New Hire

  **Mindset:** "Bu takıma az önce katıldım. Altı ay sonra, orijinal yazardan sıfır bağlam olmadan bu kodu anlayıp değiştirmem gerekiyor."

  **Priorities:**
  - Niyeti iletmeyen isimler (`data` ne anlama geliyor? `process()` ne yapıyor?)
  - 3+ dosyayı okumayı gerektiren logik
  - Magic number'lar, magic string'ler, açıklaması yapılmamış constantlar
  - Birden fazla şey yapan function'lar (isim X diyor ama aynı zamanda Y ve Z de yapıyor)
  - Okuyucuyu call chain'lerde takip etmeye zorlayan eksik type bilgisi
  - Çevre kodunun veya proje kuralının stiliyle tutarsızlık
  - İmplementasyon detaylarını test eden davranış yerine test eden test'ler
  - *Ne* yapıldığını açıklayan (gereksiz) açıklamalar yerine *neden* açıklayan (yararlı) açıklamalar

  **Review Process:**
  1. Değiştirilen her function'u, hiçbir zaman codebase görmemiş gibi okuyun. İsim, parametreler ve gövdeden tek başına ne yaptığını anlayabilir misiniz?
  2. Bir code path'ini end-to-end izleyin. Kaç dosya açmanız gerekiyor?
  3. Kontrol edin: yeni bir katılımcı benzer bir feature'ı nereye ekleyeceğini bilir mi?
  4. "Yazar okuyucu'nun bilmeyeceği bir şey biliyordu" unsurlarını arayın — koda gömülü örtük bilgi.

  **En az bir sorun bulmanız GEREKİR. Kod kristal berraksa, yeni gelenlerin kafa karışması için en olası noktayı not edin.**

  ---

  ### Persona 3: The Security Auditor

  **Mindset:** "Bu kod saldırı altına alınacak. İşim saldırganın önüne bulmakken açığı bulmak."

  **OWASP-Temelli Kontrol Listesi:**

  | Kategori | Neye Bakılmalı |
  |----------|-----------------|
  | **Injection** | SQL, NoSQL, OS command, LDAP — user input'ı parameterizasyon olmadan bir sorgu veya komuta ulaştıran herhangi bir yer |
  | **Broken Auth** | Hardcoded kimlik bilgileri, yeni endpoint'lerde eksik auth kontrolü, session token'ları URL veya log'larda |
  | **Data Exposure** | Error message'larında, log'larda veya API response'larında hassas veriler; rest veya transit'te eksik encryption |
  | **Insecure Defaults** | Debug modu açık bırakıldı, permissive CORS, wildcard izinleri, default şifreler |
  | **Missing Access Control** | IDOR (A kullanıcısı B'nin verilerine erişebilir mi?), eksik role kontrolü, privilege escalation path'leri |
  | **Dependency Risk** | Bilinen CVE'leri olan yeni dependency'ler, vulnerable versiyonlara sabitlenen, gereksiz transitive dependency'ler |
  | **Secrets** | API key'leri, token'lar, şifreler kodda, config'de veya comment'lerde — hatta "temporary" olanlar bile |

  **Review Process:**
  1. Kodun geçtiği her trust boundary'yi belirleyin (user input, API call'ları, database, file system, environment variable'ları).
  2. Her boundary için: input validate edildi mi? Output sanitize edildi mi? En az privilege prensibi izlendi mi?
  3. Kontrol edin: kimliği doğrulanmış bir kullanıcı bu değişiklik aracılığıyla privilege'i yükseltebilir mi?
  4. Kontrol edin: bu değişiklik yeni bir saldırı yüzeyi açığa çıkartıyor mu?

  **En az bir sorun bulmanız GEREKİR. Kodun security yüzeyi yoksa, en yakın security-ilgili varsayımı not edin.**

  ## Severity Classification

  | Severity | Tanım | Gerekli Action |
  |----------|-----------|-----------------|
  | **CRITICAL** | Veri kaybına, security ihlâline veya production kesintisine neden olacak. Merge'den önce düzeltilmelidir. | Merge'i engelle. |
  | **WARNING** | Edge case'lerde hatalara neden olması muhtemeldir, performansı düşürebilir veya gelecekteki maintainer'ları kafa karıştırabilir. Merge'den önce düzeltilmesi gerekir. | Düzelt veya risk'i açıkça kabul et. |
  | **NOTE** | Style sorunu, küçük iyileştirme fırsat'ı veya dokümantasyon boşluğu. Düzeltmek güzeldir. | Yazarın takdiri. |

  **Promotion kuralı:** 2+ kişilik tarafından işaretlenen bulgu bir seviye yükseltilir (NOTE, WARNING olur; WARNING, CRITICAL olur).

  ## Output Format

  İncelemenizi şu şekilde yapılandırın:

  ```markdown
  ## Adversarial Review: [nelerin incelendiğine dair kısa açıklama]

  **Scope:** [incelenen dosyalar, değiştirilen satırlar, değişiklik türü]
  **Verdict:** BLOCK / CONCERNS / CLEAN

  ### Critical Findings
  [Varsa — merge'i engelle]

  ### Warnings
  [Düzeltilmesi gereken öğeler]

  ### Notes
  [Düzeltilmesi güzel olan öğeler]

  ### Summary
  [2-3 cümle: genel risk profili nedir? Düzeltilmesi gereken en önemli tek şey nedir?]
  ```

  **Verdict tanımları:**
  - **BLOCK** — 1+ CRITICAL bulgusu. Çözülünceye kadar merge etmeyin.
  - **CONCERNS** — Kritik olmayan ama 2+ warning'i vardır. Risk altında merge edin.
  - **CLEAN** — Yalnızca note'lar. Merge'e güvenlidir.

  ## Anti-Patterns

  ### Bu Yeteneğin NE Olduğu DEĞİL

  | Anti-Pattern | Neden Yanlış |
  |-------------|---------------|
  | "LGTM, no issues found" | Hiçbir şey bulamamanız yeterince bakmadığınız anlamına gelir. Her değişikliğin en az bir riski, varsayımı veya iyileştirme fırsat'ı vardır. |
  | Yalnızca kozmetik bulgular | Whitespace/formatting raporlarken null dereference kaçırmak hiç inceme yapmamaktan daha kötüdür. Substance önce, style sonra. |
  | Punches çekmek | "Bu muhtemelen küçük bir endişe olabilir..." — Hayır. Doğrudan olun. "Bu, `user` undefined olduğunda NullPointerException fırlatacak." |
  | Diffi tekrar söylemek | "Bu function, authentication işlemek için eklendi" bulgu değildir. Authentication'ı işlemede NE YANLIŞ? |
  | Test boşluklarını yoksaymak | Yeni kod testler olmadan bir bulgudur. Her zaman. Testler opsiyonel değildir. |
  | Yalnızca değiştirilen satırları incelemek | Hatalar yeni kodun mevcut kodla etkileşim şeklinde yaşanır. Tam dosyayı okuyun. |

  ### The Self-Review Trap

  Muhtemelen yazdığınız veya yeni okuduğunuz kodu inceliyorsunuz. Beyin ağırlıklarınız bu kodu üreten aynı mental modeli oluşturmuştur. Doğal olarak beklentilerinizle eşleştiği için doğru görünecek.

  **Bu deseni kırmak için:**
  1. Kodu **bottom-up** okuyun (son function'tan başlayıp geriye doğru gidin).
  2. Her function için, gövdeyi okumadan önce **kontrat**ını ifade edin. Gövde eşleşiyor mu?
  3. Aksi kanıtlanana kadar her variable null/undefined olabileceğini varsayın.
  4. Her external call başarısız olacak diye varsayın.
  5. Şu soruyu sorun: "Bu değişikliği tamamen silersem, ne kırılır?" — cevap "hiçbir şey" ise, değişiklik gereksiz olabilir.

  ## When to Use This

  - **Herhangi bir PR merge'den önce** — özellikle insan gözlemcisi olmayan self-authored PR'ler
  - **Uzun bir coding sessionundan sonra** — yorgunluk kör noktalar üretir; bu yetenek bunu telafi eder
  - **Claude "looks good" dediğinde** — kolay bir onay aldıysanız, ikinci fikir için bu yeteneği çalıştırın
  - **Security-sensitive kodda** — auth, payments, data access, API endpoint'leri
  - **Bir şey "garip geliyor"se** — o içgüdüye güvenin ve adversarial review çalıştırın

  ## Cross-References

  - İlgili: `engineering-team/senior-security` — derin security analizi
  - İlgili: `engineering-team/code-reviewer` — genel code quality review
  - Tamamlayıcı: `ra-qm-team/` — quality management workflow'ları
---

# Adversarial Code Reviewer

## Description

Adversarial code review skill that forces genuine perspective shifts through three hostile reviewer personas (Saboteur, New Hire, Security Auditor). Each persona MUST find at least one issue — no "LGTM" escapes. Findings are severity-classified and cross-promoted when caught by multiple personas.

## Features

- **Three adversarial personas** — Saboteur (production breaks), New Hire (maintainability), Security Auditor (OWASP-informed)
- **Mandatory findings** — Each persona must surface at least one issue, eliminating rubber-stamp reviews
- **Severity promotion** — Issues caught by 2+ personas are promoted one severity level
- **Self-review trap breaker** — Concrete techniques to overcome shared mental model blind spots
- **Structured verdicts** — BLOCK / CONCERNS / CLEAN with clear merge guidance

## Usage

```
/adversarial-review              # Review staged/unstaged changes
/adversarial-review --diff HEAD~3  # Review last 3 commits
/adversarial-review --file src/auth.ts  # Review a specific file
```

## Examples

### Example: Reviewing a PR Before Merge

```
/adversarial-review --diff main...HEAD
```

Produces a structured report with findings from all three personas, deduplicated and severity-ranked, ending with a BLOCK/CONCERNS/CLEAN verdict.

## Problem This Solves

When Claude reviews code it wrote (or code it just read), it shares the same mental model, assumptions, and blind spots as the author. This produces "Looks good to me" reviews on code that a fresh human reviewer would flag immediately. Users report this as one of the top frustrations with AI-assisted development.

This skill forces a genuine perspective shift by requiring you to adopt adversarial personas — each with different priorities, different fears, and different definitions of "bad code."

## Table of Contents

1. [Quick Start](#quick-start)
2. [Review Workflow](#review-workflow)
3. [The Three Personas](#the-three-personas)
4. [Severity Classification](#severity-classification)
5. [Output Format](#output-format)
6. [Anti-Patterns](#anti-patterns)
7. [When to Use This](#when-to-use-this)

## Quick Start

```
/adversarial-review              # Review staged/unstaged changes
/adversarial-review --diff HEAD~3  # Review last 3 commits
/adversarial-review --file src/auth.ts  # Review a specific file
```

## Review Workflow

### Step 1: Gather the Changes

Determine what to review based on invocation:

- **No arguments:** Run `git diff` (unstaged) + `git diff --cached` (staged). If both empty, run `git diff HEAD~1` (last commit).
- **`--diff <ref>`:** Run `git diff <ref>`.
- **`--file <path>`:** Read the entire file. Focus review on the full file rather than just changes.

If no changes are found, stop and report: "Nothing to review."

### Step 2: Read the Full Context

For every file in the diff:
1. Read the **full file** (not just the changed lines) — bugs hide in how new code interacts with existing code.
2. Identify the **purpose** of the change: bug fix, new feature, refactor, config change, test.
3. Note any **project conventions** from CLAUDE.md, .editorconfig, linting configs, or existing patterns.

### Step 3: Run All Three Personas

Execute each persona sequentially. Each persona MUST produce at least one finding. If a persona finds nothing wrong, it has not looked hard enough — go back and look again.

**IMPORTANT:** Do not soften findings. Do not hedge. Do not say "this might be fine but..." — either it's a problem or it isn't. Be direct.

### Step 4: Deduplicate and Synthesize

After all three personas have reported:
1. Merge duplicate findings (same issue caught by multiple personas).
2. Promote findings caught by 2+ personas to the next severity level.
3. Produce the final structured output.

## The Three Personas

### Persona 1: The Saboteur

**Mindset:** "I am trying to break this code in production."

**Priorities:**
- Input that was never validated
- State that can become inconsistent
- Concurrent access without synchronization
- Error paths that swallow exceptions or return misleading results
- Assumptions about data format, size, or availability that could be violated
- Off-by-one errors, integer overflow, null/undefined dereferences
- Resource leaks (file handles, connections, subscriptions, listeners)

**Review Process:**
1. For each function/method changed, ask: "What is the worst input I could send this?"
2. For each external call, ask: "What if this fails, times out, or returns garbage?"
3. For each state mutation, ask: "What if this runs twice? Concurrently? Never?"
4. For each conditional, ask: "What if neither branch is correct?"

**You MUST find at least one issue. If the code is genuinely bulletproof, note the most fragile assumption it relies on.**

---

### Persona 2: The New Hire

**Mindset:** "I just joined this team. I need to understand and modify this code in 6 months with zero context from the original author."

**Priorities:**
- Names that don't communicate intent (what does `data` mean? what does `process()` do?)
- Logic that requires reading 3+ other files to understand
- Magic numbers, magic strings, unexplained constants
- Functions doing more than one thing (the name says X but it also does Y and Z)
- Missing type information that forces the reader to trace through call chains
- Inconsistency with surrounding code style or project conventions
- Tests that test implementation details instead of behavior
- Comments that describe *what* (redundant) instead of *why* (useful)

**Review Process:**
1. Read each changed function as if you've never seen the codebase. Can you understand what it does from the name, parameters, and body alone?
2. Trace one code path end-to-end. How many files do you need to open?
3. Check: would a new contributor know where to add a similar feature?
4. Look for "the author knew something the reader won't" — implicit knowledge baked into the code.

**You MUST find at least one issue. If the code is crystal clear, note the most likely point of confusion for a newcomer.**

---

### Persona 3: The Security Auditor

**Mindset:** "This code will be attacked. My job is to find the vulnerability before an attacker does."

**OWASP-Informed Checklist:**

| Category | What to Look For |
|----------|-----------------|
| **Injection** | SQL, NoSQL, OS command, LDAP — any place user input reaches a query or command without parameterization |
| **Broken Auth** | Hardcoded credentials, missing auth checks on new endpoints, session tokens in URLs or logs |
| **Data Exposure** | Sensitive data in error messages, logs, or API responses; missing encryption at rest or in transit |
| **Insecure Defaults** | Debug mode left on, permissive CORS, wildcard permissions, default passwords |
| **Missing Access Control** | IDOR (can user A access user B's data?), missing role checks, privilege escalation paths |
| **Dependency Risk** | New dependencies with known CVEs, pinned to vulnerable versions, unnecessary transitive dependencies |
| **Secrets** | API keys, tokens, passwords in code, config, or comments — even "temporary" ones |

**Review Process:**
1. Identify every trust boundary the code crosses (user input, API calls, database, file system, environment variables).
2. For each boundary: is input validated? Is output sanitized? Is the principle of least privilege followed?
3. Check: could an authenticated user escalate privileges through this change?
4. Check: does this change expose any new attack surface?

**You MUST find at least one issue. If the code has no security surface, note the closest thing to a security-relevant assumption.**

## Severity Classification

| Severity | Definition | Action Required |
|----------|-----------|-----------------|
| **CRITICAL** | Will cause data loss, security breach, or production outage. Must fix before merge. | Block merge. |
| **WARNING** | Likely to cause bugs in edge cases, degrade performance, or confuse future maintainers. Should fix before merge. | Fix or explicitly accept risk with justification. |
| **NOTE** | Style issue, minor improvement opportunity, or documentation gap. Nice to fix. | Author's discretion. |

**Promotion rule:** A finding flagged by 2+ personas is promoted one level (NOTE becomes WARNING, WARNING becomes CRITICAL).

## Output Format

Structure your review as follows:

```markdown
## Adversarial Review: [brief description of what was reviewed]

**Scope:** [files reviewed, lines changed, type of change]
**Verdict:** BLOCK / CONCERNS / CLEAN

### Critical Findings
[If any — these block the merge]

### Warnings
[Should-fix items]

### Notes
[Nice-to-fix items]

### Summary
[2-3 sentences: what's the overall risk profile? What's the single most important thing to fix?]
```

**Verdict definitions:**
- **BLOCK** — 1+ CRITICAL findings. Do not merge until resolved.
- **CONCERNS** — No criticals but 2+ warnings. Merge at your own risk.
- **CLEAN** — Only notes. Safe to merge.

## Anti-Patterns

### What This Skill is NOT

| Anti-Pattern | Why It's Wrong |
|-------------|---------------|
| "LGTM, no issues found" | If you found nothing, you didn't look hard enough. Every change has at least one risk, assumption, or improvement opportunity. |
| Cosmetic-only findings | Reporting only whitespace/formatting while missing a null dereference is worse than no review at all. Substance first, style second. |
| Pulling punches | "This might possibly be a minor concern..." — No. Be direct. "This will throw a NullPointerException when `user` is undefined." |
| Restating the diff | "This function was added to handle authentication" is not a finding. What's WRONG with how it handles authentication? |
| Ignoring test gaps | New code without tests is a finding. Always. Tests are not optional. |
| Reviewing only the changed lines | Bugs live in the interaction between new code and existing code. Read the full file. |

### The Self-Review Trap

You are likely reviewing code you just wrote or just read. Your brain (weights) formed the same mental model that produced this code. You will naturally think it looks correct because it matches your expectations.

**To break this pattern:**
1. Read the code **bottom-up** (start from the last function, work backward).
2. For each function, state its contract **before** reading the body. Does the body match?
3. Assume every variable could be null/undefined until proven otherwise.
4. Assume every external call will fail.
5. Ask: "If I deleted this change entirely, what would break?" — if the answer is "nothing," the change might be unnecessary.

## When to Use This

- **Before merging any PR** — especially self-authored PRs with no human reviewer
- **After a long coding session** — fatigue produces blind spots; this skill compensates
- **When Claude said "looks good"** — if you got an easy approval, run this for a second opinion
- **On security-sensitive code** — auth, payments, data access, API endpoints
- **When something "feels off"** — trust that instinct and run an adversarial review

## Cross-References

- Related: `engineering-team/senior-security` — deep security analysis
- Related: `engineering-team/code-reviewer` — general code quality review
- Complementary: `ra-qm-team/` — quality management workflows
