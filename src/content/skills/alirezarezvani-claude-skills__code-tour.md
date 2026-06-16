---
name: "code-tour"
description_en: "Use when the user asks to create a CodeTour .tour file — persona-targeted, step-by-step walkthroughs that link to real files and line numbers. Trigger for: create a tour, onboarding tour, architecture tour, PR review tour, explain how X works, vibe check, RCA tour, contributor guide, or any structured code walkthrough request."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18266
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/code-tour/SKILL.md"
path: ".gemini/skills/code-tour/SKILL.md"
is_collection: false
body_length: 5918
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Kod Turu

  **CodeTour** dosyaları oluşturun — belirli bir kişiye yönelik, bir kod tabanının adım adım anlatımları ve dosyalar ile satır numaralarına doğrudan bağlantılar. CodeTour dosyaları `.tours/` klasöründe yaşar ve [VS Code CodeTour uzantısı](https://github.com/microsoft/codetour) ile çalışır.

  ## Özet

  Harika bir tur bir **anlatıdır** — belirli bir kişiye ne önemliyse, neden önemliyse ve sonra ne yapacağını anlatan bir hikaye. Yalnızca `.tour` JSON dosyaları oluşturun. Asla kaynak kodu değiştirmeyin.

  ## Bu Beceriyi Ne Zaman Kullanmalısınız

  - Kullanıcı bir kod turu, onboarding turu veya mimari anlatım oluşturmayı isterse
  - Kullanıcı "bu PR için tur", "X nasıl çalışıyor", "vibe check", "RCA turu" derse
  - Kullanıcı bir katkıda bulunan rehberi, güvenlik incelemesi veya hata araştırması anlatımı isterse
  - Dosya/satır çapaları ile yapılandırılmış bir anlatım için herhangi bir istek

  ## Temel İş Akışı

  ### 1. Repoyu keşfedin

  Hiçbir şey sormadan önce kod tabanını keşfedin:

  Paralel olarak: kök dizini listeleyin, README'yi okuyun, config dosyalarını kontrol edin.
  Sonra: dil(ler)i, framework'leri, proje amacını tanımlayın. Klasör yapısını 1-2 seviye derinliğinde haritala. Giriş noktalarını bul — turdaki her yol gerçek olmalı.

  Repoda 5'ten az kaynak dosya varsa, persona fark etmeksizin hızlı derinlik turu oluşturun — derin bir turu garanti etmek için yeterli değil.

  ### 2. Niyeti tahmin edin

  Bir mesaj yeterli olmalı. Persona, derinlik ve odağı sessizce tahmin edin.

  | Kullanıcı söylerse | Persona | Derinlik |
  |---|---|---|
  | "bu PR için tur" | pr-reviewer | standart |
  | "X neden kırıldı" / "RCA" | rca-investigator | standart |
  | "onboarding" / "yeni başlayan" | new-joiner | standart |
  | "hızlı tur" / "vibe check" | vibecoder | hızlı |
  | "mimari" | architect | derin |
  | "güvenlik" / "auth incelemesi" | security-reviewer | standart |
  | (niteleyici yok) | new-joiner | standart |

  Niyet belirsiz olduğunda, **new-joiner** personası ile **standart** derinliğe varsayılan olarak ayarlanır — en genel olarak faydalıdır.

  ### 3. Gerçek dosyaları okuyun

  **Her dosya yolu ve satır numarası doğrulanmalıdır.** Yanlış satıra işaret eden bir tur, hiç tur olmamaktan daha kötüdür.

  ### 4. Turu yazın

  `.tours/<persona>-<focus>.tour` klasörüne kaydedin.

  ```json
  {
    "$schema": "https://aka.ms/codetour-schema",
    "title": "Açıklayıcı Başlık — Persona / Amaç",
    "description": "Bu kimin için ve anlatımdan sonra ne anlayacakları.",
    "ref": "<current-branch-or-commit>",
    "steps": []
  }
  ```

  ### Adım türleri

  | Tür | Ne zaman kullanılır | Örnek |
  |---|---|---|
  | **Content** | Giriş/kapanış sadece (maks 2) | `{ "title": "Hoşgeldiniz", "description": "..." }` |
  | **Directory** | Bir modüle yönelim | `{ "directory": "src/services", "title": "..." }` |
  | **File + line** | Workhorse | `{ "file": "src/auth.ts", "line": 42, "title": "..." }` |
  | **Selection** | Bir kod bloğunu vurgula | `{ "file": "...", "selection": {...}, "title": "..." }` |
  | **Pattern** | Regex eşleştirme (değişken dosyalar) | `{ "file": "...", "pattern": "class App", "title": "..." }` |
  | **URI** | PR, issue, doca bağla | `{ "uri": "https://...", "title": "..." }` |

  ### Adım sayısı

  | Derinlik | Adımlar | Kullanım alanı |
  |---|---|---|
  | Hızlı | 5-8 | Vibecoder, hızlı keşif |
  | Standart | 9-13 | Çoğu persona |
  | Derin | 14-18 | Architect, RCA |

  ### Açıklamaları yazma — SMIG formülü

  - **S — Durum**: Okuyucu neye bakıyor?
  - **M — Mekanizma**: Bu kod nasıl çalışıyor?
  - **I — İmplication**: Bu persona için neden önemli?
  - **G — Gotcha**: Zeki biri ne yanlış anlamış olurdu?

  ### 5. Doğrula

  - [ ] Her `file` yolu repo köküne göre (başta `/` veya `./` yok)
  - [ ] Her `file` var olduğu doğrulanmış
  - [ ] Her `line` dosya okunarak doğrulanmış
  - [ ] İlk adım `file` veya `directory` çapasına sahip
  - [ ] En fazla 2 sadece içerik adımı
  - [ ] `nextTour` ayarlandıysa başka bir turun `title` ile tam eşleşiyor

  ## Personalar

  | Persona | Amaç | Kapsanması gereken |
  |---|---|---|
  | **Vibecoder** | Hızlı vibe al | Giriş noktası, ana modüller. Maks 8 adım. |
  | **New joiner** | Yapılandırılmış ramp-up | Dizinler, kurulum, iş bağlamı |
  | **Bug fixer** | Kök neden hızlı | Tetikle -> hata noktaları -> testler |
  | **RCA investigator** | Neden başarısız oldu | Nedensellik zinciri, gözlemlenebilirlik çapaları |
  | **Feature explainer** | End-to-end | UI -> API -> backend -> depolama |
  | **PR reviewer** | Doğru şekilde incele | Değişim hikayesi, değişmezler, riskli alanlar |
  | **Architect** | Şekil ve mantık | Sınırlar, tradeoff'lar, genişletme noktaları |
  | **Security reviewer** | Güven sınırları | Auth akışı, doğrulama, gizli yönetimi |
  | **Refactorer** | Güvenli yeniden yapılandırma | Seams, gizli bağımlılıklar, çıkarma sırası |
  | **External contributor** | Güvenli katkı | Güvenli alanlar, kurallar, tuzaklar |

  ## Anlatı Ark

  1. **Yönelim** — `file` veya `directory` adımı (asla sadece content ile ilk adım — VS Code'da boş)
  2. **Yüksek seviye harita** — Ana modülleri gösteren 1-3 directory adımı
  3. **Temel yol** — file/line adımları, turun kalbi
  4. **Kapanış** — okuyucunun artık ne yapabileceği, önerilen follow-up'lar

  ## Anti-Desenler

  | Anti-desen | Çözüm |
  |---|---|
  | **Dosya listesi** — "bu dosya modelleri içerir" | Bir hikaye anlat. Her adım öncekine bağlı. |
  | **Genel açıklamalar** | Bu kod tabanına özgü deseni adlandır. |
  | **Satır numarası tahmini** | Okumadan hiçbir zaman satır yazma. |
  | **Hızlı derinlik için çok fazla adım** | Gerçekten adımları kes. |
  | **Hallüsinasyon dosyaları** | Yoksa adımı atla. |
  | **Recap kapanışı** — "X, Y, Z'yi ele aldık" | Okuyucuya artık ne *yapabileceğini* söyle. |
  | **Sadece content ilk adımı** | 1. adımı bir dosya veya dizine çapa. |

  ## Çapraz Referanslar

  - İlgili: `engineering/codebase-onboarding` — turların ötesinde daha geniş onboarding için
  - İlgili: `engineering/pr-review-expert` — otomatik PR review iş akışları için
  - CodeTour uzantısı: [microsoft/codetour](https://github.com/microsoft/codetour)
  - Gerçek dünya turları: [coder/code-server](https://github.com/coder/code-server/blob/main/.tours/contributing.tour)
---

# Code Tour

Create **CodeTour** files — persona-targeted, step-by-step walkthroughs of a codebase that link directly to files and line numbers. CodeTour files live in `.tours/` and work with the [VS Code CodeTour extension](https://github.com/microsoft/codetour).

## Overview

A great tour is a **narrative** — a story told to a specific person about what matters, why it matters, and what to do next. Only create `.tour` JSON files. Never modify source code.

## When to Use This Skill

- User asks to create a code tour, onboarding tour, or architecture walkthrough
- User says "tour for this PR", "explain how X works", "vibe check", "RCA tour"
- User wants a contributor guide, security review, or bug investigation walkthrough
- Any request for a structured walkthrough with file/line anchors

## Core Workflow

### 1. Discover the repo

Before asking anything, explore the codebase:

In parallel: list root directory, read README, check config files.
Then: identify language(s), framework(s), project purpose. Map folder structure 1-2 levels deep. Find entry points — every path in the tour must be real.

If the repo has fewer than 5 source files, create a quick-depth tour regardless of persona — there's not enough to warrant a deep one.

### 2. Infer the intent

One message should be enough. Infer persona, depth, and focus silently.

| User says | Persona | Depth |
|-----------|---------|-------|
| "tour for this PR" | pr-reviewer | standard |
| "why did X break" / "RCA" | rca-investigator | standard |
| "onboarding" / "new joiner" | new-joiner | standard |
| "quick tour" / "vibe check" | vibecoder | quick |
| "architecture" | architect | deep |
| "security" / "auth review" | security-reviewer | standard |
| (no qualifier) | new-joiner | standard |

When intent is ambiguous, default to **new-joiner** persona at **standard** depth — it's the most generally useful.

### 3. Read actual files

**Every file path and line number must be verified.** A tour pointing to the wrong line is worse than no tour.

### 4. Write the tour

Save to `.tours/<persona>-<focus>.tour`.

```json
{
  "$schema": "https://aka.ms/codetour-schema",
  "title": "Descriptive Title — Persona / Goal",
  "description": "Who this is for and what they'll understand after.",
  "ref": "<current-branch-or-commit>",
  "steps": []
}
```

### Step types

| Type | When to use | Example |
|------|-------------|---------|
| **Content** | Intro/closing only (max 2) | `{ "title": "Welcome", "description": "..." }` |
| **Directory** | Orient to a module | `{ "directory": "src/services", "title": "..." }` |
| **File + line** | The workhorse | `{ "file": "src/auth.ts", "line": 42, "title": "..." }` |
| **Selection** | Highlight a code block | `{ "file": "...", "selection": {...}, "title": "..." }` |
| **Pattern** | Regex match (volatile files) | `{ "file": "...", "pattern": "class App", "title": "..." }` |
| **URI** | Link to PR, issue, doc | `{ "uri": "https://...", "title": "..." }` |

### Step count

| Depth | Steps | Use for |
|-------|-------|---------|
| Quick | 5-8 | Vibecoder, fast exploration |
| Standard | 9-13 | Most personas |
| Deep | 14-18 | Architect, RCA |

### Writing descriptions — SMIG formula

- **S — Situation**: What is the reader looking at?
- **M — Mechanism**: How does this code work?
- **I — Implication**: Why does this matter for this persona?
- **G — Gotcha**: What would a smart person get wrong?

### 5. Validate

- [ ] Every `file` path relative to repo root (no leading `/` or `./`)
- [ ] Every `file` confirmed to exist
- [ ] Every `line` verified by reading the file
- [ ] First step has `file` or `directory` anchor
- [ ] At most 2 content-only steps
- [ ] `nextTour` matches another tour's `title` exactly if set

## Personas

| Persona | Goal | Must cover |
|---------|------|------------|
| **Vibecoder** | Get the vibe fast | Entry point, main modules. Max 8 steps. |
| **New joiner** | Structured ramp-up | Directories, setup, business context |
| **Bug fixer** | Root cause fast | Trigger -> fault points -> tests |
| **RCA investigator** | Why did it fail | Causality chain, observability anchors |
| **Feature explainer** | End-to-end | UI -> API -> backend -> storage |
| **PR reviewer** | Review correctly | Change story, invariants, risky areas |
| **Architect** | Shape and rationale | Boundaries, tradeoffs, extension points |
| **Security reviewer** | Trust boundaries | Auth flow, validation, secret handling |
| **Refactorer** | Safe restructuring | Seams, hidden deps, extraction order |
| **External contributor** | Contribute safely | Safe areas, conventions, landmines |

## Narrative Arc

1. **Orientation** — `file` or `directory` step (never content-only first step — blank in VS Code)
2. **High-level map** — 1-3 directory steps showing major modules
3. **Core path** — file/line steps, the heart of the tour
4. **Closing** — what the reader can now do, suggested follow-ups

## Anti-Patterns

| Anti-pattern | Fix |
|---|---|
| **File listing** — "this file contains the models" | Tell a story. Each step depends on the previous. |
| **Generic descriptions** | Name the specific pattern unique to this codebase. |
| **Line number guessing** | Never write a line you didn't verify by reading. |
| **Too many steps** for quick depth | Actually cut steps. |
| **Hallucinated files** | If it doesn't exist, skip the step. |
| **Recap closing** — "we covered X, Y, Z" | Tell the reader what they can now *do*. |
| **Content-only first step** | Anchor step 1 to a file or directory. |

## Cross-References

- Related: `engineering/codebase-onboarding` — for broader onboarding beyond tours
- Related: `engineering/pr-review-expert` — for automated PR review workflows
- CodeTour extension: [microsoft/codetour](https://github.com/microsoft/codetour)
- Real-world tours: [coder/code-server](https://github.com/coder/code-server/blob/main/.tours/contributing.tour)
