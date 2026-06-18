---
name: "dependency-auditor"
description_en: "Audit and manage dependencies across multi-language projects. Identifies vulnerabilities, license conflicts, transitive dependency risks, and safe-upgrade paths. Use when auditing third-party packages before release, investigating a CVE, planning a major version bump, or running a license-compliance review. Examples: 'audit our npm dependencies', 'do we have GPL contamination', 'plan the upgrade t"
description_tr: "Çok dilli projelerde bağımlılıkları denetleyin ve yönetin. Güvenlik açıklarını, lisans çatışmalarını, geçişli bağımlılık risklerini ve güvenli güncelleme yollarını belirler. Yayınlama öncesi üçüncü taraf paketleri denetlemek, CVE araştırmak, ana sürüm güncellemesi planlamak veya lisans uyumluluğu gözden geçirmek için kullanın."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18402
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/dependency-auditor/SKILL.md"
path: ".gemini/skills/dependency-auditor/SKILL.md"
is_collection: false
body_length: 4110
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Dependency Auditor
  
  > **Skill Type:** POWERFUL · **Category:** Engineering · **Domain:** Dependency Management & Security
  
  8+ paket ekosistemi üzerinde çevrimdışı, deterministik bağımlılık denetimi. Üç script manifest/lockfile üzerinde kalıp eşleştiricisidir — canlı advisory API'lerini çağırmaz; bulgularını `npm audit` / `pip-audit` / `cargo audit` ile eşleştirerek güncel CVE kapsamı sağlayın.
  
  ## Hızlı Başlangıç
  
  ```bash
  # 1. Scan for vulnerabilities (built-in offline CVE pattern set; exit non-zero on high severity)
  python3 scripts/dep_scanner.py /path/to/project --format json --fail-on-high -o scan.json
  
  # 2. Check license compliance and conflicts
  python3 scripts/license_checker.py /path/to/project --policy strict --format json -o licenses.json
  
  # 3. Plan upgrades from the scanner's inventory
  python3 scripts/upgrade_planner.py scan.json --risk-threshold medium --timeline 90 --format json -o plan.json
  ```
  
  Çıktıları kullanın: `scan.json` bulguları şimdi hangi paketleri sabitlemeleri/yamalı yapacağını belirler; `licenses.json` çakışmaları kullanıcıya yasal risk listesi olarak sunulur; `plan.json` yükseltmeleri risk ile sıralar ve geri alma notlarını içerir. `--quick-scan` geçişli bağımlılıkları atlar; `--security-only` planı yalnızca güvenlik düzeltmelerine sınırlar.
  
  **Doğrulama döngüsü:** yükseltmeler uygulandıktan sonra adım 1'i yeniden çalıştırın ve denetimi kapatmadan önce 0 yüksek önem bulgusu olduğunu doğrulayın.
  
  ## Desteklenen Ekosistemler
  
  | Dil | Ayrıştırılan Manifestler |
  |---|---|
  | JavaScript/Node | package.json, package-lock.json, yarn.lock |
  | Python | requirements.txt, pyproject.toml, Pipfile.lock, poetry.lock |
  | Go | go.mod, go.sum |
  | Rust | Cargo.toml, Cargo.lock |
  | Ruby | Gemfile, Gemfile.lock |
  | Java | pom.xml, gradle.lockfile |
  | PHP | composer.json, composer.lock |
  | C#/.NET | packages.config, project.assets.json |
  
  ## Lisans Sınıflandırması
  
  - **Permissive**: MIT, Apache 2.0, BSD (2/3-clause), ISC
  - **Copyleft (strong)**: GPL v2/v3, AGPL v3 — permissive projelerde bulaşma riskini işaretler
  - **Copyleft (weak)**: LGPL v2.1/v3, MPL 2.0
  - **Proprietary / Dual / Unknown** — bilinmeyen lisanslar manuel inceleme için sunulur
  
  Denetleyici, lisans mirasını bağımlılık zinciri aracılığıyla analiz eder ve çakışan çiftleri düzeltme önerileriyle yayınlar.
  
  ## Yükseltme Risk Matrisi
  
  | Risk | Güncelleme türü | İşlem |
  |---|---|---|
  | Low | Patch, security fixes | Hemen uygula |
  | Medium | Minor with new features | Planlanan güncellemeye topla |
  | High | Major version, API changes | Dedicated migration task + tests |
  | Critical | Known breaking changes | Planned migration with rollback procedure |
  
  Önceliklendirme: güvenlik yamaları > hata düzeltmeleri > özellik güncellemeleri > büyük yeniden yazımlar; kullanımdan kaldırılan özellikler anında dikkat alır.
  
  ## Scriptler (doğru yetenek talepleri)
  
  - **`scripts/dep_scanner.py`** — çok formatı ayrıştırıcı; yerleşik çevrimdışı zafiyet kalıp seti (~16 CVE kalıbı — bir duman katmanı, canlı danışmanların yerine geçmez); lockfile'lardan geçişli çözüm; JSON + metin çıktısı.
  - **`scripts/license_checker.py`** — paket meta verilerinden lisans algılaması; 20+ lisans türü arasında uyumluluk matrisi; `--policy permissive|strict`; çakışma algılaması ve düzeltme önerileri.
  - **`scripts/upgrade_planner.py`** — semver tabanlı breaking-change tahmini; test kontrol listesi ve zaman tahminlemesi ile risk sıralı migration planı.
  
  Örnek fixture'lar: bu klasördeki `test-project/` ve `test-inventory.json`; beklenen şekiller `expected_outputs/` içinde.
  
  ## CI Entegrasyonu
  
  ```bash
  # Security gate in CI
  python3 scripts/dep_scanner.py . --format json --fail-on-high
  python3 scripts/license_checker.py . --policy strict --format json
  ```
  
  ## En İyi Uygulamalar
  
  1. **Güvenliği önceliklendirin**: yüksek/kritik bulguları hemen ele alın; işlevsellikten önce lisans uyumluluğu.
  2. **Kademeli güncellemeler**: kapsamlı test ile artımlı yükseltmeler; riskli sürümler için özellik bayrakları.
  3. **Ritim**: commit başına güvenlik taraması; aylık lisans denetimleri; üç aylık tam denetim.
  4. **Yanlış pozitifler**: dokümantasyon ile whitelist; lisans belirsizliği için bakımcılarla iletişime geçin.
  
  Ayrıntılı kullanım için [README.md](README.md) dosyasını ve zafiyet/lisans bilgi tabanları için `references/` dosyasını inceleyin.
---

# Dependency Auditor

> **Skill Type:** POWERFUL · **Category:** Engineering · **Domain:** Dependency Management & Security

Offline, deterministic dependency auditing across 8+ package ecosystems. The three scripts are pattern-matchers over manifests/lockfiles — they do **not** call live advisory APIs; pair their findings with `npm audit` / `pip-audit` / `cargo audit` for current CVE coverage.

## Quick Start

```bash
# 1. Scan for vulnerabilities (built-in offline CVE pattern set; exit non-zero on high severity)
python3 scripts/dep_scanner.py /path/to/project --format json --fail-on-high -o scan.json

# 2. Check license compliance and conflicts
python3 scripts/license_checker.py /path/to/project --policy strict --format json -o licenses.json

# 3. Plan upgrades from the scanner's inventory
python3 scripts/upgrade_planner.py scan.json --risk-threshold medium --timeline 90 --format json -o plan.json
```

Consume the outputs: `scan.json` findings drive which packages to pin/patch now; `licenses.json` conflicts go to the user as a legal-risk list; `plan.json` orders upgrades by risk with rollback notes. `--quick-scan` skips transitive deps; `--security-only` limits the plan to security fixes.

**Verification loop:** after applying upgrades, re-run step 1 and assert 0 high-severity findings before closing the audit.

## Supported Ecosystems

| Language | Manifests parsed |
|---|---|
| JavaScript/Node | package.json, package-lock.json, yarn.lock |
| Python | requirements.txt, pyproject.toml, Pipfile.lock, poetry.lock |
| Go | go.mod, go.sum |
| Rust | Cargo.toml, Cargo.lock |
| Ruby | Gemfile, Gemfile.lock |
| Java | pom.xml, gradle.lockfile |
| PHP | composer.json, composer.lock |
| C#/.NET | packages.config, project.assets.json |

## License Classification

- **Permissive**: MIT, Apache 2.0, BSD (2/3-clause), ISC
- **Copyleft (strong)**: GPL v2/v3, AGPL v3 — flags contamination risk in permissive projects
- **Copyleft (weak)**: LGPL v2.1/v3, MPL 2.0
- **Proprietary / Dual / Unknown** — unknown licenses are surfaced for manual review

The checker analyzes license inheritance through dependency chains and emits conflict pairs with remediation suggestions.

## Upgrade Risk Matrix

| Risk | Update type | Handling |
|---|---|---|
| Low | Patch, security fixes | Apply immediately |
| Medium | Minor with new features | Batch into scheduled update |
| High | Major version, API changes | Dedicated migration task + tests |
| Critical | Known breaking changes | Planned migration with rollback procedure |

Prioritization: security patches > bug fixes > feature updates > major rewrites; deprecated features get immediate attention.

## Scripts (accurate capability claims)

- **`scripts/dep_scanner.py`** — multi-format parser; built-in offline vulnerability pattern set (~16 CVE patterns — a smoke layer, not a replacement for live advisories); transitive resolution from lockfiles; JSON + text output.
- **`scripts/license_checker.py`** — license detection from package metadata; compatibility matrix across 20+ license types; `--policy permissive|strict`; conflict detection with remediation.
- **`scripts/upgrade_planner.py`** — semver-based breaking-change prediction; risk-ordered migration plan with testing checklist and timeline estimation.

Sample fixtures: `test-project/` and `test-inventory.json` in this folder; expected shapes in `expected_outputs/`.

## CI Integration

```bash
# Security gate in CI
python3 scripts/dep_scanner.py . --format json --fail-on-high
python3 scripts/license_checker.py . --policy strict --format json
```

## Best Practices

1. **Prioritize security**: address high/critical findings immediately; license compliance before functionality.
2. **Gradual updates**: incremental upgrades with thorough testing; feature flags for risky bumps.
3. **Cadence**: security scans per commit; license audits monthly; full audit quarterly.
4. **False positives**: whitelist with documentation; contact maintainers for license ambiguity.

See [README.md](README.md) for detailed usage and `references/` for the vulnerability/license knowledge bases.
