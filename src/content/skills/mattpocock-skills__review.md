---
name: "review"
description_en: "Review the changes since a fixed point (commit, branch, tag, or merge-base) along two axes — Standards (does the code follow this repo's documented coding standards?) and Spec (does the code match what the originating issue/PRD asked for?). Runs both reviews in parallel sub-agents and reports them side by side. Use when the user wants to review a branch, a PR, work-in-progress changes, or asks to "
description_tr: "Sabit bir noktadan (commit, branch, tag veya merge-base) itibaren değişiklikleri iki eksende inceleyebilirsiniz — Standards (kod bu repo'nun belgelenen kodlama standartlarını takip ediyor mu?) ve Spec (kod orijinal issue/PRD'nin istediğiyle eşleşiyor mu?). Her iki incelemeyi parallel alt-ajanlar ile çalıştırıp yan yana raporlar. Kullanıcı bir branch'i, PR'yi, yapım aşamasındaki değişiklikleri incelemek veya kontrol etmek istediğinde kullanın."
category: "Document"
repo: "mattpocock/skills"
stars: 134333
url: "https://github.com/mattpocock/skills/blob/HEAD/skills/in-progress/review/SKILL.md"
path: "skills/in-progress/review/SKILL.md"
is_collection: false
body_length: 3530
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # İnceleme
  
  Kullanıcının sağladığı sabit bir nokta ile `HEAD` arasındaki diff'in iki eksenli incelemesi:
  
  - **Standartlar** — kod bu repo'nun belgelenen kodlama standartlarına uyuyor mu?
  - **Spec** — kod, kaynak issue / PRD / spec'i sadakatle uygulayıp uygulamıyor mu?
  
  Her iki eksen de **paralel alt-ajanlar** olarak çalışır, böylece birbirlerinin context'ini kirletmezler, ardından bu skill bulguları toplar.
  
  Issue tracker'ın sana sağlanmış olması gerekir — `docs/agents/issue-tracker.md` eksikse `/setup-matt-pocock-skills` komutunu çalıştır.
  
  ## Süreç
  
  ### 1. Sabit noktayı sabitle
  
  Kullanıcının söylediği her şey sabit noktadır — bir commit SHA, branch adı, tag, `main`, `HEAD~5`, vb. Fikir sahibi olmayın; olduğu gibi geçirin. Eğer belirtmemişlerse, sor: "Neye karşı inceleme yapacağız — bir branch, bir commit, yoksa `main`?" Elde edene kadar ilerlemezsiniz.
  
  Diff komutunu bir kez yakalayın: `git diff <fixed-point>...HEAD` (üç nokta, karşılaştırma merge-base'e karşı olacak şekilde). Ayrıca commit listesini `git log <fixed-point>..HEAD --oneline` ile not edin.
  
  ### 2. Spec kaynağını tanımla
  
  Kaynak spec'i bu sırada ara:
  
  1. Commit mesajlarındaki issue referansları (`#123`, `Closes #45`, GitLab `!67`, vb.) — `docs/agents/issue-tracker.md` içindeki workflow aracılığıyla getir.
  2. Kullanıcının argüman olarak geçtiği bir yol.
  3. `docs/`, `specs/`, veya `.scratch/` altında branch adı ya da özellikle eşleşen bir PRD/spec dosyası.
  4. Hiçbir şey bulunamazsa, spec'in nerede olduğunu kullanıcıya sor. Eğer "yoktur" derlerse, **Spec** alt-ajanı atlayacak ve "spec bulunamamıştır" rapor edecektir.
  
  ### 3. Standartlar kaynaklarını tanımla
  
  Kodun nasıl yazılması gerektiğini belgelendiren repo'daki her şey. Yaygın konumlar:
  
  - `CLAUDE.md`, `AGENTS.md`
  - `CONTRIBUTING.md`
  - `CONTEXT.md`, `CONTEXT-MAP.md`, context başına `CONTEXT.md` dosyaları
  - `docs/adr/` (mimari kararlar standartlardır)
  - `.editorconfig`, `eslint.config.*`, `biome.json`, `prettier.config.*`, `tsconfig.json` (makine tarafından zorlanan standartlar — bunları not et ama tooling'in zaten kontrol ettiği şeyleri yeniden kontrol etme)
  - Repo root'unda veya `docs/` altında `STYLE.md`, `STANDARDS.md`, `STYLEGUIDE.md` veya benzeri dosyalar
  
  Dosyaların listesini topla. **Standartlar** alt-ajanı bunları okuyacak.
  
  ### 4. Her iki alt-ajanı paralel olarak başlat
  
  İki `Agent` tool call'u içeren tek bir mesaj gönder. Her ikisi için `general-purpose` subagent'ı kullan.
  
  **Standartlar alt-ajanı prompt'u** — şunları dahil et:
  
  - Tam diff komutu ve commit listesi.
  - Adım 3'te bulduğun standartlar-kaynak dosyaları listesi.
  - Özet: "Standartlar dokümantasyonunu oku. Ardından diff'i oku. Rapor et — dosya/hunk başına ilgili olduğu yerde — diff'in belgelenen bir standardı ihlal ettiği her yeri. Standart'ı (dosya + kural) alıntıla. Katı ihlallerle yargı çağrılarını ayırt et. Tooling'in uyguladığı her şeyi atla. 400 kelimeden az."
  
  **Spec alt-ajanı prompt'u** — şunları dahil et:
  
  - Diff komutu ve commit listesi.
  - Spec'in yolu veya getirilen içeriği.
  - Özet: "Spec'i oku. Ardından diff'i oku. Rapor et: (a) spec'in istediği fakat eksik veya kısmi olan gereklilikler; (b) diff'te istenmemiş davranış (scope creep); (c) uygulanmış gibi görünen fakat uygulamanın yanlış görüldüğü gereklilikler. Her bulgu için spec satırını alıntıla. 400 kelimeden az."
  
  Eğer spec eksikse, Spec alt-ajanını atla ve bunu final raporda not et.
  
  ### 5. Topla
  
  İki raporu `## Standartlar` ve `## Spec` başlıkları altında, kelimesi kelimesine veya hafifçe temizlenmiş şekilde sun. Bulguları **birleştirme** veya yeniden sırala **yapma** — iki eksen kasıtlı olarak ayrı tutulur, böylece kullanıcı bunları bağımsız olarak görebilir.
  
  Şu şekilde bitir: eksen başına toplam bulgu, ve bayraklanan en kötü tek sorun (varsa) — tek satır özet.
  
  ## Neden iki eksen
  
  Bir değişiklik bir ekseni geçebilir ve diğerinde başarısız olabilir:
  
  - Her standartı takip eden fakat yanlış şeyi uygulayan kod → **Standartlar geçti, Spec başarısız.**
  - Tam olarak issue'nun istediğini yapan fakat projenin kurallarını bozan kod → **Spec geçti, Standartlar başarısız.**
  
  Bunları ayrı olarak raporlamak bir eksenin diğerini maskelemesini engeller.
---

Two-axis review of the diff between `HEAD` and a fixed point the user supplies:

- **Standards** — does the code conform to this repo's documented coding standards?
- **Spec** — does the code faithfully implement the originating issue / PRD / spec?

Both axes run as **parallel sub-agents** so they don't pollute each other's context, then this skill aggregates their findings.

The issue tracker should have been provided to you — run `/setup-matt-pocock-skills` if `docs/agents/issue-tracker.md` is missing.

## Process

### 1. Pin the fixed point

Whatever the user said is the fixed point — a commit SHA, branch name, tag, `main`, `HEAD~5`, etc. If they didn't specify one, ask for it.

Capture the diff command once: `git diff <fixed-point>...HEAD` (three-dot, so the comparison is against the merge-base). Also note the list of commits via `git log <fixed-point>..HEAD --oneline`.

Before going further, confirm the fixed point resolves (`git rev-parse <fixed-point>`) and the diff is non-empty. A bad ref or empty diff should fail here — not inside two parallel sub-agents.

### 2. Identify the spec source

Look for the originating spec, in this order:

1. Issue references in the commit messages (`#123`, `Closes #45`, GitLab `!67`, etc.) — fetch via the workflow in `docs/agents/issue-tracker.md`.
2. A path the user passed as an argument.
3. A PRD/spec file under `docs/`, `specs/`, or `.scratch/` matching the branch name or feature.
4. If nothing is found, ask the user where the spec is. If they say there isn't one, the **Spec** sub-agent will skip and report "no spec available".

### 3. Identify the standards sources

Anything in the repo that documents how code should be written, such as `CODING_STANDARDS.md` or `CONTRIBUTING.md`.

### 4. Spawn both sub-agents in parallel

Send a single message with two `Agent` tool calls. Use the `general-purpose` subagent for both.

**Standards sub-agent prompt** — include:

- The full diff command and commit list.
- The list of standards-source files you found in step 3.
- The brief: "Report — per file/hunk where relevant — every place the diff violates a documented standard. Cite the standard (file + the rule). Distinguish hard violations from judgement calls. Skip anything tooling enforces. Under 400 words."

**Spec sub-agent prompt** — include:

- The diff command and commit list.
- The path or fetched contents of the spec.
- The brief: "Report: (a) requirements the spec asked for that are missing or partial; (b) behaviour in the diff that wasn't asked for (scope creep); (c) requirements that look implemented but where the implementation looks wrong. Quote the spec line for each finding. Under 400 words."

If the spec is missing, skip the Spec sub-agent and note this in the final report.

### 5. Aggregate

Present the two reports under `## Standards` and `## Spec` headings, verbatim or lightly cleaned. Do **not** merge or rerank findings — the two axes are deliberately separate (see _Why two axes_).

End with a one-line summary: total findings per axis, and the worst issue _within each axis_ (if any). Don't pick a single winner across axes — that's the reranking the separation exists to prevent.

## Why two axes

A change can pass one axis and fail the other:

- Code that follows every standard but implements the wrong thing → **Standards pass, Spec fail.**
- Code that does exactly what the issue asked but breaks the project's conventions → **Spec pass, Standards fail.**

Reporting them separately stops one axis from masking the other.
