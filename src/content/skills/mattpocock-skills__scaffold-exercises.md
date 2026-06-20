---
name: "scaffold-exercises"
description_en: "Create exercise directory structures with sections, problems, solutions, and explainers that pass linting. Use when user wants to scaffold exercises, create exercise stubs, or set up a new course section."
description_tr: "Bölümler, problemler, çözümler ve açıklamalardan oluşan egzersiz dizin yapılarını oluşturun ve linting kontrolünden geçirin. Kullanıcı egzersiz scaffold'lamak, egzersiz şablonları oluşturmak veya yeni bir kurs bölümü kurmak istediğinde kullanılır."
category: "Development"
repo: "mattpocock/skills"
stars: 137186
url: "https://github.com/mattpocock/skills/blob/HEAD/skills/misc/scaffold-exercises/SKILL.md"
path: "skills/misc/scaffold-exercises/SKILL.md"
is_collection: false
body_length: 3336
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Egzersiz İskeleleri
  
  `pnpm ai-hero-cli internal lint` testini geçen egzersiz dizin yapıları oluşturun, ardından `git commit` ile kaydedin.
  
  ## Dizin adlandırması
  
  - **Bölümler**: `exercises/` içinde `XX-section-name/` (örn. `01-retrieval-skill-building`)
  - **Egzersizler**: bir bölüm içinde `XX.YY-exercise-name/` (örn. `01.03-retrieval-with-bm25`)
  - Bölüm numarası = `XX`, egzersiz numarası = `XX.YY`
  - Adlar dash-case formatında (küçük harf, tirenler)
  
  ## Egzersiz varyantları
  
  Her egzersizin en az bir tane bu alt klasörden olması gerekir:
  
  - `problem/` - TODO'lar içeren öğrenci çalışma alanı
  - `solution/` - referans uygulama
  - `explainer/` - kavramsal materyal, TODO yok
  
  İskele oluştururken, plan aksi belirtmedikçe varsayılan olarak `explainer/` kullanın.
  
  ## Gerekli dosyalar
  
  Her alt klasör (`problem/`, `solution/`, `explainer/`) bir `readme.md` gerektirir:
  
  - **Boş olmamalıdır** (gerçek içerik olmalı, tek bir başlık satırı da yeterli)
  - Kırık bağlantı yoktur
  
  İskele oluştururken, başlık ve açıklama içeren minimal bir readme oluşturun:
  
  ```md
  # Exercise Title
  
  Description here
  ```
  
  Alt klasör kod içeriyorsa, `main.ts` de gereklidir (>1 satır). Ama iskeleler için sadece readme içeren egzersiz iyidir.
  
  ## İş akışı
  
  1. **Planı analiz edin** - bölüm adlarını, egzersiz adlarını ve varyant türlerini çıkartın
  2. **Dizinleri oluşturun** - her yol için `mkdir -p`
  3. **İskele readme'leri oluşturun** - her varyant klasörüne başlık içeren bir `readme.md`
  4. **Lint çalıştırın** - `pnpm ai-hero-cli internal lint` ile doğrulayın
  5. **Hataları düzeltin** - lint geçene kadar tekrarlayın
  
  ## Lint kuralları özeti
  
  Linter (`pnpm ai-hero-cli internal lint`) şunları kontrol eder:
  
  - Her egzersizin alt klasörleri var (`problem/`, `solution/`, `explainer/`)
  - `problem/`, `explainer/` veya `explainer.1/` içinden en az biri var
  - `readme.md` var ve ana alt klasörde boş değil
  - `.gitkeep` dosyası yok
  - `speaker-notes.md` dosyası yok
  - Readme'lerde kırık bağlantı yok
  - Readme'lerde `pnpm run exercise` komutları yok
  - `main.ts` sadece readme-only değilse gerekli
  
  ## Egzersizleri taşıma/yeniden adlandırma
  
  Egzersizleri yeniden numaralandırırken veya taşırken:
  
  1. Dizinleri yeniden adlandırmak için `git mv` kullanın (sadece `mv` değil) - git geçmişini korur
  2. Sırayı korumak için sayısal öneki güncelleyin
  3. Taşıdıktan sonra lint'i yeniden çalıştırın
  
  Örnek:
  
  ```bash
  git mv exercises/01-retrieval/01.03-embeddings exercises/01-retrieval/01.04-embeddings
  ```
  
  ## Örnek: plandan iskele oluşturma
  
  Şöyle bir plan verildiğinde:
  
  ```
  Section 05: Memory Skill Building
  - 05.01 Introduction to Memory
  - 05.02 Short-term Memory (explainer + problem + solution)
  - 05.03 Long-term Memory
  ```
  
  Oluşturun:
  
  ```bash
  mkdir -p exercises/05-memory-skill-building/05.01-introduction-to-memory/explainer
  mkdir -p exercises/05-memory-skill-building/05.02-short-term-memory/{explainer,problem,solution}
  mkdir -p exercises/05-memory-skill-building/05.03-long-term-memory/explainer
  ```
  
  Ardından readme iskelelerini oluşturun:
  
  ```
  exercises/05-memory-skill-building/05.01-introduction-to-memory/explainer/readme.md -> "# Introduction to Memory"
  exercises/05-memory-skill-building/05.02-short-term-memory/explainer/readme.md -> "# Short-term Memory"
  exercises/05-memory-skill-building/05.02-short-term-memory/problem/readme.md -> "# Short-term Memory"
  exercises/05-memory-skill-building/05.02-short-term-memory/solution/readme.md -> "# Short-term Memory"
  exercises/05-memory-skill-building/05.03-long-term-memory/explainer/readme.md -> "# Long-term Memory"
  ```
---

# Scaffold Exercises

Create exercise directory structures that pass `pnpm ai-hero-cli internal lint`, then commit with `git commit`.

## Directory naming

- **Sections**: `XX-section-name/` inside `exercises/` (e.g., `01-retrieval-skill-building`)
- **Exercises**: `XX.YY-exercise-name/` inside a section (e.g., `01.03-retrieval-with-bm25`)
- Section number = `XX`, exercise number = `XX.YY`
- Names are dash-case (lowercase, hyphens)

## Exercise variants

Each exercise needs at least one of these subfolders:

- `problem/` - student workspace with TODOs
- `solution/` - reference implementation
- `explainer/` - conceptual material, no TODOs

When stubbing, default to `explainer/` unless the plan specifies otherwise.

## Required files

Each subfolder (`problem/`, `solution/`, `explainer/`) needs a `readme.md` that:

- Is **not empty** (must have real content, even a single title line works)
- Has no broken links

When stubbing, create a minimal readme with a title and a description:

```md
# Exercise Title

Description here
```

If the subfolder has code, it also needs a `main.ts` (>1 line). But for stubs, a readme-only exercise is fine.

## Workflow

1. **Parse the plan** - extract section names, exercise names, and variant types
2. **Create directories** - `mkdir -p` for each path
3. **Create stub readmes** - one `readme.md` per variant folder with a title
4. **Run lint** - `pnpm ai-hero-cli internal lint` to validate
5. **Fix any errors** - iterate until lint passes

## Lint rules summary

The linter (`pnpm ai-hero-cli internal lint`) checks:

- Each exercise has subfolders (`problem/`, `solution/`, `explainer/`)
- At least one of `problem/`, `explainer/`, or `explainer.1/` exists
- `readme.md` exists and is non-empty in the primary subfolder
- No `.gitkeep` files
- No `speaker-notes.md` files
- No broken links in readmes
- No `pnpm run exercise` commands in readmes
- `main.ts` required per subfolder unless it's readme-only

## Moving/renaming exercises

When renumbering or moving exercises:

1. Use `git mv` (not `mv`) to rename directories - preserves git history
2. Update the numeric prefix to maintain order
3. Re-run lint after moves

Example:

```bash
git mv exercises/01-retrieval/01.03-embeddings exercises/01-retrieval/01.04-embeddings
```

## Example: stubbing from a plan

Given a plan like:

```
Section 05: Memory Skill Building
- 05.01 Introduction to Memory
- 05.02 Short-term Memory (explainer + problem + solution)
- 05.03 Long-term Memory
```

Create:

```bash
mkdir -p exercises/05-memory-skill-building/05.01-introduction-to-memory/explainer
mkdir -p exercises/05-memory-skill-building/05.02-short-term-memory/{explainer,problem,solution}
mkdir -p exercises/05-memory-skill-building/05.03-long-term-memory/explainer
```

Then create readme stubs:

```
exercises/05-memory-skill-building/05.01-introduction-to-memory/explainer/readme.md -> "# Introduction to Memory"
exercises/05-memory-skill-building/05.02-short-term-memory/explainer/readme.md -> "# Short-term Memory"
exercises/05-memory-skill-building/05.02-short-term-memory/problem/readme.md -> "# Short-term Memory"
exercises/05-memory-skill-building/05.02-short-term-memory/solution/readme.md -> "# Short-term Memory"
exercises/05-memory-skill-building/05.03-long-term-memory/explainer/readme.md -> "# Long-term Memory"
```
