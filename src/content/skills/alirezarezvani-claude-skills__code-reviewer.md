---
name: "code-reviewer"
description_en: "Code review automation for TypeScript, JavaScript, Python, Go, Swift, Kotlin, C#, .NET, Java, C, C++, Rust, Ruby, PHP, and Dart/Flutter. Analyzes PRs for complexity and risk, checks code quality for SOLID violations and code smells, generates review reports. Use when reviewing pull requests, analyzing code quality, identifying issues, generating review checklists."
description_tr: "TypeScript, JavaScript, Python, Go, Swift, Kotlin, C#, .NET, Java, C, C++, Rust, Ruby, PHP ve Dart/Flutter için otomatik code review aracı. PR'ları karmaşıklık ve risk açısından analiz eder, kod kalitesini SOLID ihlalleri ve code smell'leri kontrol ederek değerlendirir, review raporları üretir. Pull request incelemelerinde, kod kalitesi analizinde, sorun tespitinde ve review checklist'leri oluştururken kullanılır."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18642
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/code-reviewer/SKILL.md"
path: ".gemini/skills/code-reviewer/SKILL.md"
is_collection: false
body_length: 6065
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Code Reviewer
  
  Pull request'leri analiz etmek, kod kalitesi sorunlarını tespit etmek ve inceleme raporları oluşturmak için otomatik kod inceleme araçları.
  
  ---
  
  ## Bu Beceri Nasıl Organize Edilmiş
  
  ```
  code-reviewer/
    SKILL.md                        ← buradasınız (araçlar + dispatch tablosu)
    rules/
      universal.md                  ← güvenlik, async, kaynaklar, istisnalar, performans — tüm diller
    languages/
      python.md                     ← Python'a özel kurallar + diyomlar
      typescript.md                 ← TypeScript / JavaScript'e özel kurallar + diyomlar
      go.md                         ← Go'ya özel kurallar + diyomlar
      swift.md                      ← Swift'e özel kurallar + diyomlar
      kotlin.md                     ← Kotlin'e özel kurallar + diyomlar
      csharp.md                     ← C# / .NET'e özel kurallar + diyomlar
      java.md                       ← Java'ya özel kurallar + diyomlar
      c.md                          ← C'ye özel kurallar + diyomlar
      cpp.md                        ← C++'a özel kurallar + diyomlar
      rust.md                       ← Rust'a özel kurallar + diyomlar
      ruby.md                       ← Ruby'ye özel kurallar + diyomlar
      php.md                        ← PHP'ye özel kurallar + diyomlar
      dart.md                       ← Dart / Flutter'a özel kurallar + diyomlar
  ```
  
  ### Her inceleme için yükleme sırası
  
  1. Bu dosya (`SKILL.md`) — araçlar ve eşikler
  2. `rules/universal.md` — her dil için her zaman
  3. Eşleşen `languages/*.md` — aşağıdaki uzantı tablosuna göre bir dosya
  
  Bu her zaman tam olarak **2 ek dosya**dır, kapsam ne olursa olsun.
  
  | Uzantı(lar) | Yükle |
  |---|---|
  | `.py` | `languages/python.md` |
  | `.ts`, `.tsx`, `.js`, `.jsx`, `.mjs` | `languages/typescript.md` |
  | `.go` | `languages/go.md` |
  | `.swift` | `languages/swift.md` |
  | `.kt`, `.kts` | `languages/kotlin.md` |
  | `.cs`, `.csx`, `.razor`, `.cshtml` | `languages/csharp.md` |
  | `.java` | `languages/java.md` |
  | `.c`, `.h` | `languages/c.md` |
  | `.cpp`, `.cc`, `.cxx`, `.hpp`, `.hh`, `.hxx` | `languages/cpp.md` |
  | `.rs` | `languages/rust.md` |
  | `.rb`, `.rake`, `.gemspec`, `.ru` | `languages/ruby.md` |
  | `.php`, `.phtml` | `languages/php.md` |
  | `.dart` | `languages/dart.md` |
  
  ---
  
  ## Araçlar
  
  ### PR Analyzer
  
  Branch'ler arasındaki git diff'i analiz ederek inceleme karmaşıklığını değerlendirir ve riskleri tanımlar.
  
  ```bash
  # Geçerli branch'i main'e karşı analiz et
  python scripts/pr_analyzer.py /path/to/repo
  
  # Belirli branch'leri karşılaştır
  python scripts/pr_analyzer.py . --base main --head feature-branch
  
  # İntegrasyon için JSON çıktısı
  python scripts/pr_analyzer.py /path/to/repo --json
  ```
  
  **Tespit ettikleri (universal — dile özel sinyaller için dil dosyasına da bakınız):**
  - Hardcoded sırlar (şifreler, API anahtarları, tokenlar, bağlantı dizeleri)
  - SQL / query injection desenleri
  - Üretim kodunda bırakılan debug ifadeleri
  - Lint / analyzer bastırma annotasyonları
  - TODO/FIXME açıklamaları
  
  **Dile özel tespitler** her `languages/*.md` dosyasında tanımlanır.
  
  **Çıktı şunları içerir:**
  - Karmaşıklık puanı (1-10)
  - Risk kategorisi (kritik, yüksek, orta, düşük)
  - İnceleme sırası için dosya önceliklendirilmesi
  - Commit mesajı doğrulaması
  
  ---
  
  ### Code Quality Checker
  
  Kaynak kodu yapısal sorunlar, kod kokuları ve SOLID ihlalleri açısından analiz eder.
  
  ```bash
  # Bir dizini analiz et
  python scripts/code_quality_checker.py /path/to/code
  
  # Belirli dili analiz et
  # Geçerli değerler: python, typescript, javascript, go, swift, kotlin, csharp, java, c, cpp, rust, ruby, php, dart
  python scripts/code_quality_checker.py . --language java
  
  # JSON çıktısı
  python scripts/code_quality_checker.py /path/to/code --json
  ```
  
  **Universal eşikler:**
  
  | Sorun | Eşik |
  |-------|-----------|
  | Uzun fonksiyon | >50 satır |
  | Büyük dosya | >500 satır |
  | God sınıfı | >20 metod |
  | Çok fazla parametre | >5 |
  | Derin yuvalama | >4 seviye |
  | Yüksek karmaşıklık | >10 branch |
  
  Dile özel kontroller her `languages/*.md` dosyasında tanımlanır.
  
  ---
  
  ### Review Report Generator
  
  PR analizini ve kod kalitesi bulgularını yapılandırılmış inceleme raporlarında birleştirir.
  
  ```bash
  # Geçerli repo için rapor oluştur
  python scripts/review_report_generator.py /path/to/repo
  
  # Markdown çıktısı
  python scripts/review_report_generator.py . --format markdown --output review.md
  
  # Önceden hesaplanmış analizleri kullan
  python scripts/review_report_generator.py . \
    --pr-analysis pr_results.json \
    --quality-analysis quality_results.json
  ```
  
  **Kararlar:**
  
  | Puan | Karar |
  |-------|---------|
  | 90+ ve yüksek sorun yok | Onayla |
  | 75+ ve ≤2 yüksek sorun | Önerilerle onayla |
  | 50-74 | Değişiklik iste |
  | <50 veya kritik sorunlar | Engelle |
  
  ---
  
  ## Yeni Bir Dil Ekleme
  
  **İnceleyici rehberi (gerekli):**
  
  1. Mevcut bir dil dosyasını şablon olarak kullanarak `languages/<name>.md` oluştur — şu bölümlere sahip olmalı: PR Analyzer Signals, Code Quality Checks, Security, Async, Resource Management, Exception Handling, Performance, Idioms.
  2. Yukarıdaki dispatch tablosuna uzantı satırını ekle.
  
  Bu, agent tarafından yönetilen inceleme için gerekli olan tüm şeydir.
  
  **Deterministik analyzer desteği (isteğe bağlı, önerilen):** paket içindeki scriptler
  sadece açıkça bildiği dilleri işaretler. `code_quality_checker.py`'nin
  yeni dili skorlaması için:
  
  3. Uzantıları aynı dosyadaki `LANGUAGE_EXTENSIONS`'a ekle (bu aynı zamanda `--language` seçeneğini de ekler).
  4. Aynı dosyaya dil için `function` / `class` / `method` regex girdileri ekle; aksi takdirde Python desenleri kullanılır.
  5. İsteğe bağlı olarak bir `check_<name>_specific_smells(...)` detektörü ekle (C#, Java ve C olanlarına bakınız) ve `analyze_file`'dan çağır.
  6. `assets/sample_<name>_smells.<ext>` + `_clean` fixture'larını ve beklenen `--json` çıktısını `expected_outputs/` altında kaydet ve regresyon kontrolü olarak commit et.
  
  ---
  
  ## Regression Fixture'ları
  
  Etiketlenmiş fixture'lar `assets/` içinde canlı olup, committed `--json` çıktıları
  `expected_outputs/` içinde (C#, Java ve C). Committed JSON'dan sapma analyzer'da
  davranış değişikliğine işaret eder:
  
  ```bash
  python scripts/code_quality_checker.py assets/sample_java_smells.java --json \
    | diff - expected_outputs/sample_java_smells_quality.json
  ```
---

# Code Reviewer

Automated code review tools for analyzing pull requests, detecting code quality issues, and generating review reports.

---

## How This Skill Is Organized

```
code-reviewer/
  SKILL.md                        ← you are here (tools + dispatch table)
  rules/
    universal.md                  ← security, async, resources, exceptions, performance — all languages
  languages/
    python.md                     ← Python-specific rules + idioms
    typescript.md                 ← TypeScript / JavaScript-specific rules + idioms
    go.md                         ← Go-specific rules + idioms
    swift.md                      ← Swift-specific rules + idioms
    kotlin.md                     ← Kotlin-specific rules + idioms
    csharp.md                     ← C# / .NET-specific rules + idioms
    java.md                       ← Java-specific rules + idioms
    c.md                          ← C -specific rules + idioms
    cpp.md                        ← C++ -specific rules + idioms
    rust.md                       ← Rust -specific rules + idioms
    ruby.md                       ← Ruby -specific rules + idioms
    php.md                        ← PHP-specific rules + idioms
    dart.md                       ← Dart / Flutter-specific rules + idioms
```

### Loading order for every review

1. This file (`SKILL.md`) — tools and thresholds
2. `rules/universal.md` — always, for every language
3. The matching `languages/*.md` — one file based on the extension table below

That is always exactly **2 additional files**, regardless of scope.

| Extension(s) | Load |
|---|---|
| `.py` | `languages/python.md` |
| `.ts`, `.tsx`, `.js`, `.jsx`, `.mjs` | `languages/typescript.md` |
| `.go` | `languages/go.md` |
| `.swift` | `languages/swift.md` |
| `.kt`, `.kts` | `languages/kotlin.md` |
| `.cs`, `.csx`, `.razor`, `.cshtml` | `languages/csharp.md` |
| `.java` | `languages/java.md` |
| `.c`, `.h` | `languages/c.md` |
| `.cpp`, `.cc`, `.cxx`, `.hpp`, `.hh`, `.hxx` | `languages/cpp.md` |
| `.rs` | `languages/rust.md` |
| `.rb`, `.rake`, `.gemspec`, `.ru` | `languages/ruby.md` |
| `.php`, `.phtml` | `languages/php.md` |
| `.dart` | `languages/dart.md` |

---

## Tools

### PR Analyzer

Analyzes git diff between branches to assess review complexity and identify risks.

```bash
# Analyze current branch against main
python scripts/pr_analyzer.py /path/to/repo

# Compare specific branches
python scripts/pr_analyzer.py . --base main --head feature-branch

# JSON output for integration
python scripts/pr_analyzer.py /path/to/repo --json
```

**What it detects (universal — see also language file for language-specific signals):**
- Hardcoded secrets (passwords, API keys, tokens, connection strings)
- SQL / query injection patterns
- Debug statements left in production code
- Lint / analyzer suppression annotations
- TODO/FIXME comments

**Language-specific detections** are defined in each `languages/*.md` file.

**Output includes:**
- Complexity score (1-10)
- Risk categorization (critical, high, medium, low)
- File prioritization for review order
- Commit message validation

---

### Code Quality Checker

Analyzes source code for structural issues, code smells, and SOLID violations.

```bash
# Analyze a directory
python scripts/code_quality_checker.py /path/to/code

# Analyze specific language
# Valid values: python, typescript, javascript, go, swift, kotlin, csharp, java, c, cpp, rust, ruby, php, dart
python scripts/code_quality_checker.py . --language java

# JSON output
python scripts/code_quality_checker.py /path/to/code --json
```

**Universal thresholds:**

| Issue | Threshold |
|-------|-----------|
| Long function | >50 lines |
| Large file | >500 lines |
| God class | >20 methods |
| Too many params | >5 |
| Deep nesting | >4 levels |
| High complexity | >10 branches |

Language-specific checks are defined in each `languages/*.md` file.

---

### Review Report Generator

Combines PR analysis and code quality findings into structured review reports.

```bash
# Generate report for current repo
python scripts/review_report_generator.py /path/to/repo

# Markdown output
python scripts/review_report_generator.py . --format markdown --output review.md

# Use pre-computed analyses
python scripts/review_report_generator.py . \
  --pr-analysis pr_results.json \
  --quality-analysis quality_results.json
```

**Verdicts:**

| Score | Verdict |
|-------|---------|
| 90+ with no high issues | Approve |
| 75+ with ≤2 high issues | Approve with suggestions |
| 50-74 | Request changes |
| <50 or critical issues | Block |

---

## Adding a New Language

**Reviewer guidance (required):**

1. Create `languages/<name>.md` using any existing language file as a template — it must have sections: PR Analyzer Signals, Code Quality Checks, Security, Async, Resource Management, Exception Handling, Performance, Idioms.
2. Add the extension row to the dispatch table above.

That is all the agent-driven review needs.

**Deterministic analyzer support (optional, recommended):** the bundled scripts
only flag a language they explicitly know. To make `code_quality_checker.py`
score the new language:

3. Add the extensions to `LANGUAGE_EXTENSIONS` in `scripts/code_quality_checker.py` (this also adds the `--language` choice).
4. Add `function` / `class` / `method` regex entries for the language in the same file; otherwise it falls back to the Python patterns.
5. Optionally add a `check_<name>_specific_smells(...)` detector (see the C#, Java, and C ones) and call it from `analyze_file`.
6. Add `assets/sample_<name>_smells.<ext>` + `_clean` fixtures and commit the expected `--json` output under `expected_outputs/` as a regression guard.

---

## Regression Fixtures

Labelled fixtures live in `assets/` with their committed `--json` output in
`expected_outputs/` (C#, Java, and C). Drift from the committed JSON signals a
behaviour change in the analyzer:

```bash
python scripts/code_quality_checker.py assets/sample_java_smells.java --json \
  | diff - expected_outputs/sample_java_smells_quality.json
```
