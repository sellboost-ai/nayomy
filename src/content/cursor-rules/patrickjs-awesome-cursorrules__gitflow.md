---
name: "gitflow"
clean_name: "Gitflow"
description: "Gitflow Workflow Rules. These rules should be applied when performing git operations."
description_tr: "Gitflow Workflow Kuralları. Bu kurallar git işlemleri gerçekleştirirken uygulanmalıdır."
category: "Other"
repo: "PatrickJS/awesome-cursorrules"
stars: 39709
path: "rules/gitflow.mdc"
url: "https://github.com/PatrickJS/awesome-cursorrules/blob/main/rules/gitflow.mdc"
body_length: 2636
file_extension: ".mdc"
body_tr: |-
  # Gitflow İş Akışı Kuralları

  ## Ana Dallar

  ### main (veya master)
  - Üretim ortamında kullanıma hazır kodu içerir
  - main'e doğrudan commit yapılmaz
  - Yalnızca şu kaynaklardan merge kabul eder:
    - hotfix/* dalları
    - release/* dalları
  - Her merge sonrası sürüm numarası ile etiketlenmelidir

  ### develop
  - Ana geliştirme dalı
  - En son teslim edilen geliştirme değişikliklerini içerir
  - Feature dalları için kaynak dal
  - develop'a doğrudan commit yapılmaz

  ## Destekleyici Dallar

  ### feature/*
  - Dallanma kaynağı: develop
  - Geri merge edilecek dal: develop
  - Adlandırma kuralı: feature/[issue-id]-descriptive-name
  - Örnek: feature/123-user-authentication
  - PR oluşturmadan önce develop ile güncel olmalıdır
  - Merge sonrası silinir

  ### release/*
  - Dallanma kaynağı: develop
  - Geri merge edilecek dallar: 
    - main
    - develop
  - Adlandırma kuralı: release/vX.Y.Z
  - Örnek: release/v1.2.0
  - Yalnızca hata düzeltmeleri, dokümantasyon ve yayın ile ilgili görevler
  - Yeni özellik eklenmez
  - Merge sonrası silinir

  ### hotfix/*
  - Dallanma kaynağı: main
  - Geri merge edilecek dallar:
    - main
    - develop
  - Adlandırma kuralı: hotfix/vX.Y.Z
  - Örnek: hotfix/v1.2.1
  - Yalnızca acil üretim düzeltmeleri için
  - Merge sonrası silinir

  ## Commit Mesajları

  - Format: `type(scope): description`
  - Türleri:
    - feat: Yeni özellik
    - fix: Hata düzeltmesi
    - docs: Dokümantasyon değişiklikleri
    - style: Biçimlendirme, eksik noktalı virgüller vb.
    - refactor: Kod yeniden düzenleme
    - test: Test ekleme
    - chore: Bakım görevleri

  ## Sürüm Kontrolü

  ### Anlamsal Sürümlendirme
  - MAJOR sürümü uyumsuz API değişiklikleri için
  - MINOR sürümü geriye dönük uyumlu işlevsellik için
  - PATCH sürümü geriye dönük uyumlu hata düzeltmeleri için

  ## Pull Request Kuralları

  1. Tüm değişiklikler Pull Request üzerinden geçmeli
  2. Gerekli onaylar: minimum 1
  3. CI kontrolleri başarılı olmalı
  4. Korunan dallara (main, develop) doğrudan commit yapılmaz
  5. Merge öncesi dal güncel olmalıdır
  6. Merge sonrası dal silinir

  ## Dal Koruma Kuralları

  ### main & develop
  - Pull request incelemesi gerekli
  - Durum kontrolleri başarılı olmalı
  - Dallar güncel olmalı
  - Yöneticileri kısıtlamalara dahil et
  - Force push yapılamaz
  - Silinemeyen dallar

  ## Yayın Süreci

  1. develop'tan release dalı oluştur
  2. Sürüm numaralarını güncelle
  3. Yayın ile ilgili sorunları düzelt
  4. main'e PR oluştur
  5. main'e merge sonrası:
     - Yayını etiketle
     - develop'a geri merge et
     - Release dalını sil

  ## Hotfix Süreci

  1. main'den hotfix dalı oluştur
  2. Sorunu düzelt
  3. Patch sürümünü güncelle
  4. main'e PR oluştur
  5. main'e merge sonrası:
     - Yayını etiketle
     - develop'a geri merge et
     - Hotfix dalını sil
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
