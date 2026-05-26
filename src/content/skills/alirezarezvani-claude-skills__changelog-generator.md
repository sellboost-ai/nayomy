---
name: "changelog-generator"
description_en: "Produce consistent, auditable release notes from Conventional Commits. Separates commit parsing, semantic-bump logic, and changelog rendering for automated releases with editorial control. Use when cutting a release, generating CHANGELOG.md from git history, or automating release notes in CI."
description_tr: "Conventional Commits'ten tutarlı ve denetlenebilir sürüm notları üretin. Commit ayrıştırma, semantic-bump mantığı ve changelog oluşturmayı ayırarak otomatik sürümler için editöryal kontrol sağlar. Sürüm kesme, git geçmişinden CHANGELOG.md oluşturma veya CI'da sürüm notlarını otomatikleştirme işlemlerinde kullanılır."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/changelog-generator/SKILL.md"
path: ".gemini/skills/changelog-generator/SKILL.md"
is_collection: false
body_length: 4890
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Changelog Generator

  **Tier:** POWERFUL  
  **Category:** Engineering  
  **Domain:** Release Management / Documentation

  ## Overview

  Bu beceriyi, Conventional Commits'ten tutarlı ve denetlenebilir sürüm notları üretmek için kullanın. Commit ayrıştırma, semantic bump mantığı ve changelog işlemesini ayırarak, takımlar sürümleri otomatikleştirirken editoryal kontrolü kaybetmemesini sağlar.

  ## Core Capabilities

  - Conventional Commit kurallarını kullanarak commit mesajlarını ayrıştırma
  - Commit akışından semantic bump (`major`, `minor`, `patch`) algılama
  - Keep a Changelog bölümlerini (`Added`, `Changed`, `Fixed`, vb.) işleme
  - Git aralıklarından veya sağlanan commit girdisinden sürüm girdileri oluşturma
  - Dedicated linter scripti ile commit formatını uygulama
  - Machine-readable JSON çıkışı aracılığıyla CI entegrasyonunu destekleme

  ## When to Use

  - Bir sürüm etiketi yayınlamadan önce
  - CI sırasında sürüm notlarını otomatik olarak oluşturmak için
  - PR kontrolleri sırasında geçersiz commit mesajı formatlarını engellemek için
  - Paket changeloglarının kapsamlı filtrelemeyi gerektiren monorepolarda
  - Ham git geçmişini kullanıcı tarafından görülecek notlara dönüştürürken

  ## Key Workflows

  ### 1. Git'ten Changelog Entry'si Oluşturma

  ```bash
  python3 scripts/generate_changelog.py \
    --from-tag v1.3.0 \
    --to-tag v1.4.0 \
    --next-version v1.4.0 \
    --format markdown
  ```

  ### 2. stdin/Dosya Girdisinden Entry Oluşturma

  ```bash
  git log v1.3.0..v1.4.0 --pretty=format:'%s' | \
    python3 scripts/generate_changelog.py --next-version v1.4.0 --format markdown

  python3 scripts/generate_changelog.py --input commits.txt --next-version v1.4.0 --format json
  ```

  ### 3. `CHANGELOG.md` Güncelleme

  ```bash
  python3 scripts/generate_changelog.py \
    --from-tag v1.3.0 \
    --to-tag HEAD \
    --next-version v1.4.0 \
    --write CHANGELOG.md
  ```

  ### 4. Merge'den Önce Commit'leri Lint Etme

  ```bash
  python3 scripts/commit_linter.py --from-ref origin/main --to-ref HEAD --strict --format text
  ```

  Veya dosya/stdin:

  ```bash
  python3 scripts/commit_linter.py --input commits.txt --strict
  cat commits.txt | python3 scripts/commit_linter.py --format json
  ```

  ## Conventional Commit Kuralları

  Desteklenen türler:

  - `feat`, `fix`, `perf`, `refactor`, `docs`, `test`, `build`, `ci`, `chore`
  - `security`, `deprecated`, `remove`

  Breaking changes:

  - `type(scope)!: summary`
  - Footer/body içinde `BREAKING CHANGE:`

  SemVer eşlemesi:

  - breaking -> `major`
  - non-breaking `feat` -> `minor`
  - diğerleri -> `patch`

  ## Script Interfaces

  - `python3 scripts/generate_changelog.py --help`
    - Git veya stdin/`--input` öğesinden commit'leri okur
    - Markdown veya JSON işler
    - İsteğe bağlı yerinde changelog prepend işlemi
  - `python3 scripts/commit_linter.py --help`
    - Commit formatını doğrular
    - `--strict` modunda ihlaller için sıfır olmayan değer döndürür

  ## Common Pitfalls

  1. Merge commit mesajlarını sürüm commit ayrıştırması ile karıştırma
  2. Sürüm notları haline gelemeyecek belirsiz commit özeti kullanma
  3. Breaking changes için migration rehberliği eklemeyi unutma
  4. Docs/chore değişikliklerini kullanıcı tarafından görülecek özellikler olarak ele alma
  5. Tarihsel changelog bölümlerinin üzerine yazma yerine prepend yapma

  ## Best Practices

  1. Commit'leri küçük ve amaca yönelik tutun.
  2. Multi-package repo'larda commit mesajlarını kapsamlı yapın (`feat(api): ...`).
  3. PR pipeline'larında linter kontrolleri uygulayın.
  4. Yayınlamadan önce oluşturulan markdown'ı gözden geçirin.
  5. Changelog oluşturma başarılı olduktan sonra sürümleri etiketleyin.
  6. Gerektiğinde manuel hazırlama için `[Unreleased]` bölümü tutun.

  ## References

  - [references/ci-integration.md](references/ci-integration.md)
  - [references/changelog-formatting-guide.md](references/changelog-formatting-guide.md)
  - [references/monorepo-strategy.md](references/monorepo-strategy.md)
  - [README.md](README.md)

  ## Release Governance

  Öngörülebilirlik için bu sürüm akışını kullanın:

  1. Hedef sürüm aralığı için commit geçmişini lint edin.
  2. Commit'lerden changelog taslağı oluşturun.
  3. Müşteri netliği için ifadeleri manuel olarak ayarlayın.
  4. Semver bump önerisini doğrulayın.
  5. Changelog onaylandıktan sonra sürümü etiketleyin.

  ## Output Quality Checks

  - Her bullet kullanıcı açısından anlamlı, uygulama gürültüsü değil.
  - Breaking changes migration eylemini içerir.
  - Security fixes `Security` bölümünde izole edilir.
  - Hiç girdisi olmayan bölümler atlanır.
  - Bölümler arasında yinelenen bullet'ler kaldırılır.

  ## CI Policy

  - Tüm PR'lerde `commit_linter.py --strict` çalıştırın.
  - Geçersiz conventional commit'lerde merge'i engelleyin.
  - Tag push'unda otomatik olarak taslak sürüm notları oluşturun.
  - Main branch'deki `CHANGELOG.md` içine yazmadan önce insan onayı gerektirin.

  ## Monorepo Guidance

  - Commit kapsamlarını paket adlarıyla hizalı tutmayı tercih edin.
  - Package-specific sürümler için commit akışını kapsamına göre filtreleyin.
  - Altyapı çapındaki değişiklikleri root changelog'ta tutun.
  - Paket changeloglarını sahiplik netliği için paket köklerine yakın depolayın.

  ## Failure Handling

  - Geçerli conventional commit bulunamazsa: erken başarısız olun, yanıltıcı boş notlar oluşturmayın.
  - Git aralığı geçersizse: hata çıkışında açık aralığı yüzeye çıkarın.
  - Write hedefi eksikse: güvenli changelog header iskeleti oluşturun.
---

# Changelog Generator

**Tier:** POWERFUL  
**Category:** Engineering  
**Domain:** Release Management / Documentation

## Overview

Use this skill to produce consistent, auditable release notes from Conventional Commits. It separates commit parsing, semantic bump logic, and changelog rendering so teams can automate releases without losing editorial control.

## Core Capabilities

- Parse commit messages using Conventional Commit rules
- Detect semantic bump (`major`, `minor`, `patch`) from commit stream
- Render Keep a Changelog sections (`Added`, `Changed`, `Fixed`, etc.)
- Generate release entries from git ranges or provided commit input
- Enforce commit format with a dedicated linter script
- Support CI integration via machine-readable JSON output

## When to Use

- Before publishing a release tag
- During CI to generate release notes automatically
- During PR checks to block invalid commit message formats
- In monorepos where package changelogs require scoped filtering
- When converting raw git history into user-facing notes

## Key Workflows

### 1. Generate Changelog Entry From Git

```bash
python3 scripts/generate_changelog.py \
  --from-tag v1.3.0 \
  --to-tag v1.4.0 \
  --next-version v1.4.0 \
  --format markdown
```

### 2. Generate Entry From stdin/File Input

```bash
git log v1.3.0..v1.4.0 --pretty=format:'%s' | \
  python3 scripts/generate_changelog.py --next-version v1.4.0 --format markdown

python3 scripts/generate_changelog.py --input commits.txt --next-version v1.4.0 --format json
```

### 3. Update `CHANGELOG.md`

```bash
python3 scripts/generate_changelog.py \
  --from-tag v1.3.0 \
  --to-tag HEAD \
  --next-version v1.4.0 \
  --write CHANGELOG.md
```

### 4. Lint Commits Before Merge

```bash
python3 scripts/commit_linter.py --from-ref origin/main --to-ref HEAD --strict --format text
```

Or file/stdin:

```bash
python3 scripts/commit_linter.py --input commits.txt --strict
cat commits.txt | python3 scripts/commit_linter.py --format json
```

## Conventional Commit Rules

Supported types:

- `feat`, `fix`, `perf`, `refactor`, `docs`, `test`, `build`, `ci`, `chore`
- `security`, `deprecated`, `remove`

Breaking changes:

- `type(scope)!: summary`
- Footer/body includes `BREAKING CHANGE:`

SemVer mapping:

- breaking -> `major`
- non-breaking `feat` -> `minor`
- all others -> `patch`

## Script Interfaces

- `python3 scripts/generate_changelog.py --help`
  - Reads commits from git or stdin/`--input`
  - Renders markdown or JSON
  - Optional in-place changelog prepend
- `python3 scripts/commit_linter.py --help`
  - Validates commit format
  - Returns non-zero in `--strict` mode on violations

## Common Pitfalls

1. Mixing merge commit messages with release commit parsing
2. Using vague commit summaries that cannot become release notes
3. Failing to include migration guidance for breaking changes
4. Treating docs/chore changes as user-facing features
5. Overwriting historical changelog sections instead of prepending

## Best Practices

1. Keep commits small and intent-driven.
2. Scope commit messages (`feat(api): ...`) in multi-package repos.
3. Enforce linter checks in PR pipelines.
4. Review generated markdown before publishing.
5. Tag releases only after changelog generation succeeds.
6. Keep an `[Unreleased]` section for manual curation when needed.

## References

- [references/ci-integration.md](references/ci-integration.md)
- [references/changelog-formatting-guide.md](references/changelog-formatting-guide.md)
- [references/monorepo-strategy.md](references/monorepo-strategy.md)
- [README.md](README.md)

## Release Governance

Use this release flow for predictability:

1. Lint commit history for target release range.
2. Generate changelog draft from commits.
3. Manually adjust wording for customer clarity.
4. Validate semver bump recommendation.
5. Tag release only after changelog is approved.

## Output Quality Checks

- Each bullet is user-meaningful, not implementation noise.
- Breaking changes include migration action.
- Security fixes are isolated in `Security` section.
- Sections with no entries are omitted.
- Duplicate bullets across sections are removed.

## CI Policy

- Run `commit_linter.py --strict` on all PRs.
- Block merge on invalid conventional commits.
- Auto-generate draft release notes on tag push.
- Require human approval before writing into `CHANGELOG.md` on main branch.

## Monorepo Guidance

- Prefer commit scopes aligned to package names.
- Filter commit stream by scope for package-specific releases.
- Keep infra-wide changes in root changelog.
- Store package changelogs near package roots for ownership clarity.

## Failure Handling

- If no valid conventional commits found: fail early, do not generate misleading empty notes.
- If git range invalid: surface explicit range in error output.
- If write target missing: create safe changelog header scaffolding.
