---
name: "focused-fix"
description_en: "Deep-dive feature repair — systematically fix an entire feature/module across all its files and dependencies. Usage: /focused-fix <feature-path>"
description_tr: "Derin özellik onarımı — bir özelliği veya modülü tüm dosyaları ve dependency'leriyle birlikte sistematik olarak düzeltin. Kullanım: /focused-fix <feature-path>"
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 18266
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/cmd-focused-fix/SKILL.md"
path: ".gemini/skills/cmd-focused-fix/SKILL.md"
is_collection: false
body_length: 3016
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /focused-fix

  5 aşamalı protokolü kullanarak bir özelliği veya modülü sistematik olarak onarın. Hedef: `$ARGUMENTS` (bir özellik yolu veya modül adı).

  Eğer `$ARGUMENTS` boşsa, kullanıcıdan hangi özelliği/modülü düzeltmek istediğini sorun.

  ## Protokol — TÜM 5 Aşamayı SIRASI İLE Uygulayın

  ### Aşama 1: KAPSAM — Özellik Sınırını Haritalayın

  1. Hedef özelliğin birincil klasörünü/dosyalarını belirleyin
  2. O klasördeki HER dosyayı okuyun — amacını anlayın
  3. Bir özellik manifestosu oluşturun:

  ```
  FEATURE SCOPE:
    Primary path: <path>
    Entry points: [uygulamanın diğer bölümleri tarafından import edilen dosyalar]
    Internal files: [sadece bu özellik içinde kullanılan dosyalar]
    Total files: N
  ```

  ### Aşama 2: İZLE — Tüm Bağımlılıkları Haritalayın

  **GELEN** (bu özelliğin import ettiği şeyler):
  - Her import statement'ı için kaynağı izleyin, var olduğunu ve export edildiğini doğrulayın
  - Çevre değişkenlerini, config dosyalarını, DB modellerini, API endpoint'lerini, üçüncü taraf paketlerini kontrol edin

  **GIDEN** (bu özelliği import eden şeyler):
  - Tüm kod tabanında bu özellikten import aramalarını yapın
  - Tüketicilerin doğru API/interface kullandığını doğrulayın

  Gelen, giden, çevre değişkenleri ve config dosyalarını içeren bir bağımlılık haritası çıktısı alın.

  ### Aşama 3: TANI KOY — Her Sorunu Bulun

  TÜM tanı kontrolleri çalıştırın:

  - **Kod**: import'lar çözülüyor, dairesel dependency yok, tipler tutarlı, hata yönetimi, TODO/FIXME
  - **Çalışma Zamanı**: çevre değişkenleri ayarlandı, migrasyonlar güncel, API şekilleri doğru
  - **Testler**: TÜM ilişkili testleri çalıştırın, hataları kaydedin, kapsama kontrolü yapın
  - **Loglar**: git log'da son değişiklikleri kontrol edin, hata loglarını arayın
  - **Config**: config dosyalarını doğrulayın, dev/prod uyuşmazlıklarını kontrol edin

  Bulunan her sorun için:
  - Düzeltme listesine eklemeden önce kanıtla kök sebebi onaylayın
  - Risk ata: HIGH (public API, auth, >3 çağrı yapan) / MED (test ile dahili) / LOW (yaprak modül)

  Sorunları önem düzeyine göre gruplandıran bir tanı raporu çıktısı alın.

  ### Aşama 4: ONAR — Sistematik Olarak Düzeltin

  Bu tam sırada düzeltin:
  1. **Bağımlılıklar** — kırık import'lar, eksik paketler
  2. **Tipler** — sınırlardaki tür uyuşmazlıkları
  3. **Mantık** — iş mantığı hataları
  4. **Testler** — her düzeltme için testleri düzeltin veya oluşturun
  5. **Entegrasyon** — tüketicilerle uçtan uca doğrulayın

  Kurallar:
  - BİR sorunu bir seferde düzeltin, sonra ilgili testi çalıştırın
  - Bir düzeltme başka bir şeyi kırarsa → TANI KOY'a geri dönün
  - HIGH'ı MED'den, MED'i LOW'dan önce düzeltin
  - **3-Strike Kuralı**: 3 veya daha fazla düzeltme YENİ sorun oluşturursa, DURUN. Kullanıcıya mimarinin yamama değil, yeniden düşünülmesi gerekebileceğini söyleyin.

  ### Aşama 5: DOĞRULA — Her Şeyin Çalıştığını Onaylayın

  1. Özellik klasöründeki TÜM testleri çalıştırın
  2. Bu özellikten import yapan dosyalardaki TÜM testleri çalıştırın
  3. Varsa tam test paketi çalıştırın
  4. Yapılan tüm değişiklikleri özetleyin

  Değiştirilen dosyalar, uygulanan düzeltmeler, test sonuçları ve doğrulanan tüketiciler ile bir tamamlama raporu çıktısı alın.

  ## Demir Yasa

  ```
  KAPSAM → İZLE → TANI KOY'u BİTİRMEDEN ONARIM YOK
  ```

  Aşama 3'ü bitirmediyseniz, düzeltme öneremezsiniz.

  ## İlişkili Beceriler

  - `engineering/focused-fix` — Ayrıntılı kontrol listeleri, çıktı şablonları ve anti-pattern'ler ile tam SKILL.md
  - `superpowers:systematic-debugging` — Aşama 3 sırasında bulunan bireysel karmaşık hatalar için
---

# /focused-fix

Systematically repair an entire feature or module using the 5-phase protocol. Target: `$ARGUMENTS` (a feature path or module name).

If `$ARGUMENTS` is empty, ask the user which feature/module to fix.

## Protocol — Execute ALL 5 Phases IN ORDER

### Phase 1: SCOPE — Map the Feature Boundary

1. Identify the primary folder/files for the target feature
2. Read EVERY file in that folder — understand its purpose
3. Create a feature manifest:

```
FEATURE SCOPE:
  Primary path: <path>
  Entry points: [files imported by other parts of the app]
  Internal files: [files only used within this feature]
  Total files: N
```

### Phase 2: TRACE — Map All Dependencies

**INBOUND** (what this feature imports):
- For every import statement, trace to source, verify it exists and is exported
- Check env vars, config files, DB models, API endpoints, third-party packages

**OUTBOUND** (what imports this feature):
- Search entire codebase for imports from this feature
- Verify consumers use correct API/interface

Output a dependency map with inbound, outbound, env vars, and config files.

### Phase 3: DIAGNOSE — Find Every Issue

Run ALL diagnostic checks:

- **Code**: imports resolve, no circular deps, types consistent, error handling, TODO/FIXME
- **Runtime**: env vars set, migrations current, API shapes correct
- **Tests**: run ALL related tests, record failures, check coverage
- **Logs**: check git log for recent changes, search error logs
- **Config**: validate config files, check dev/prod mismatches

For each issue found:
- Confirm root cause with evidence before adding to fix list
- Assign risk: HIGH (public API, auth, >3 callers) / MED (internal with tests) / LOW (leaf module)

Output a diagnosis report with issues grouped by severity.

### Phase 4: FIX — Repair Systematically

Fix in this EXACT order:
1. **Dependencies** — broken imports, missing packages
2. **Types** — type mismatches at boundaries
3. **Logic** — business logic bugs
4. **Tests** — fix or create tests for each fix
5. **Integration** — verify end-to-end with consumers

Rules:
- Fix ONE issue at a time, run related test after each
- If a fix breaks something else → go back to DIAGNOSE
- Fix HIGH before MED before LOW
- **3-Strike Rule**: If 3+ fixes create NEW issues, STOP. Tell the user the architecture may need rethinking, not patching.

### Phase 5: VERIFY — Confirm Everything Works

1. Run ALL tests in the feature folder
2. Run ALL tests in files that import from this feature
3. Run full test suite if available
4. Summarize all changes made

Output a completion report with files changed, fixes applied, test results, and consumers verified.

## Iron Law

```
NO FIXES WITHOUT COMPLETING SCOPE → TRACE → DIAGNOSE FIRST
```

If you haven't finished Phase 3, you cannot propose fixes.

## Related Skills

- `engineering/focused-fix` — Full SKILL.md with detailed checklists, output templates, and anti-patterns
- `superpowers:systematic-debugging` — For individual complex bugs found during Phase 3
