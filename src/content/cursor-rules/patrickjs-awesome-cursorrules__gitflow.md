---
name: "gitflow"
clean_name: "Gitflow"
description: "Gitflow Workflow Rules. These rules should be applied when performing git operations."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 40010
path: "rules/gitflow.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/gitflow.mdc"
body_length: 2636
file_extension: ".mdc"
body_tr: |-
  # Gitflow İş Akışı Kuralları

  ## Ana Dallar

  ### main (veya master)
  - Üretime hazır kodu içerir
  - Asla doğrudan main'e commit yapılmaz
  - Yalnızca şu dallardan merge kabul eder:
    - hotfix/* dalları
    - release/* dalları
  - Her merge'den sonra sürüm numarasıyla etiketlenmelidir

  ### develop
  - Ana geliştirme dalı
  - En son teslim edilen geliştirme değişikliklerini içerir
  - Feature dalları için kaynak dal
  - Asla doğrudan develop'a commit yapılmaz

  ## Destekleyici Dallar

  ### feature/*
  - Branş kaynağı: develop
  - Geri merge: develop
  - İsimlendirme kuralı: feature/[issue-id]-descriptive-name
  - Örnek: feature/123-user-authentication
  - PR oluşturmadan önce develop ile güncel olmalıdır
  - Merge'den sonra silinmelidir

  ### release/*
  - Branş kaynağı: develop
  - Geri merge: 
    - main
    - develop
  - İsimlendirme kuralı: release/vX.Y.Z
  - Örnek: release/v1.2.0
  - Yalnızca hata düzeltmeleri, dokümantasyon ve yayın ile ilgili görevler
  - Yeni özellik yok
  - Merge'den sonra silinmelidir

  ### hotfix/*
  - Branş kaynağı: main
  - Geri merge:
    - main
    - develop
  - İsimlendirme kuralı: hotfix/vX.Y.Z
  - Örnek: hotfix/v1.2.1
  - Yalnızca acil üretim düzeltmeleri için
  - Merge'den sonra silinmelidir

  ## Commit Mesajları

  - Format: `type(scope): description`
  - Tipler:
    - feat: Yeni özellik
    - fix: Hata düzeltme
    - docs: Dokümantasyon değişiklikleri
    - style: Biçimlendirme, eksik noktalı virgül vb.
    - refactor: Kod yeniden yapılandırması
    - test: Test ekleme
    - chore: Bakım görevleri

  ## Sürüm Kontrolü

  ### Semantik Sürümlendirme
  - MAJOR sürümü uyumsuz API değişiklikleri için
  - MINOR sürümü geriye dönük uyumlu işlevsellik için
  - PATCH sürümü geriye dönük uyumlu hata düzeltmeleri için

  ## Pull Request Kuralları

  1. Tüm değişiklikler Pull Request'ler aracılığıyla yapılmalıdır
  2. Gerekli onaylar: minimum 1
  3. CI kontrolleri geçmelidir
  4. Korunan dallara (main, develop) doğrudan commit yok
  5. Merge'den önce dal güncel olmalıdır
  6. Merge'den sonra dal silinmelidir

  ## Dal Koruma Kuralları

  ### main & develop
  - Pull request incelemesi gereklidir
  - Durum kontrollerinin geçmesi gereklidir
  - Dalların güncel olması gereklidir
  - Yöneticiler kısıtlamalara dahil edilmiştir
  - Force push yok
  - Silme yok

  ## Yayın Süreci

  1. Develop'dan release dalı oluşturun
  2. Sürüm numaralarını güncelleyin
  3. Yayın ile ilgili sorunları düzeltin
  4. Main'e PR oluşturun
  5. Main'e merge'den sonra:
     - Yayını etiketleyin
     - Develop'a geri merge yapın
     - Release dalını silin

  ## Hotfix Süreci

  1. Main'den hotfix dalı oluşturun
  2. Sorunu düzeltin
  3. Patch sürümünü güncelleyin
  4. Main'e PR oluşturun
  5. Main'e merge'den sonra:
     - Yayını etiketleyin
     - Develop'a geri merge yapın
     - Hotfix dalını silin
---

# Gitflow Workflow Rules

## Main Branches

### main (or master)
- Contains production-ready code
- Never commit directly to main
- Only accepts merges from:
  - hotfix/* branches
  - release/* branches
- Must be tagged with version number after each merge

### develop
- Main development branch
- Contains latest delivered development changes
- Source branch for feature branches
- Never commit directly to develop

## Supporting Branches

### feature/*
- Branch from: develop
- Merge back into: develop
- Naming convention: feature/[issue-id]-descriptive-name
- Example: feature/123-user-authentication
- Must be up-to-date with develop before creating PR
- Delete after merge

### release/*
- Branch from: develop
- Merge back into: 
  - main
  - develop
- Naming convention: release/vX.Y.Z
- Example: release/v1.2.0
- Only bug fixes, documentation, and release-oriented tasks
- No new features
- Delete after merge

### hotfix/*
- Branch from: main
- Merge back into:
  - main
  - develop
- Naming convention: hotfix/vX.Y.Z
- Example: hotfix/v1.2.1
- Only for urgent production fixes
- Delete after merge

## Commit Messages

- Format: `type(scope): description`
- Types:
  - feat: New feature
  - fix: Bug fix
  - docs: Documentation changes
  - style: Formatting, missing semicolons, etc.
  - refactor: Code refactoring
  - test: Adding tests
  - chore: Maintenance tasks

## Version Control

### Semantic Versioning
- MAJOR version for incompatible API changes
- MINOR version for backwards-compatible functionality
- PATCH version for backwards-compatible bug fixes

## Pull Request Rules

1. All changes must go through Pull Requests
2. Required approvals: minimum 1
3. CI checks must pass
4. No direct commits to protected branches (main, develop)
5. Branch must be up to date before merging
6. Delete branch after merge

## Branch Protection Rules

### main & develop
- Require pull request reviews
- Require status checks to pass
- Require branches to be up to date
- Include administrators in restrictions
- No force pushes
- No deletions

## Release Process

1. Create release branch from develop
2. Bump version numbers
3. Fix any release-specific issues
4. Create PR to main
5. After merge to main:
   - Tag release
   - Merge back to develop
   - Delete release branch

## Hotfix Process

1. Create hotfix branch from main
2. Fix the issue
3. Bump patch version
4. Create PR to main
5. After merge to main:
   - Tag release
   - Merge back to develop
   - Delete hotfix branch
