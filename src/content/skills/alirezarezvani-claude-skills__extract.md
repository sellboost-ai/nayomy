---
name: "extract"
description_en: "Turn a proven pattern or debugging solution into a standalone reusable skill with SKILL.md, reference docs, and examples. Use when the user runs /si:extract or asks to package a recurring solution from memory into a skill."
description_tr: "SKILL.md ile kanıtlanmış bir pattern veya debugging çözümünü bağımsız, yeniden kullanılabilir bir skill'e dönüştürün; reference docs ve examples ekleyin. Kullanıcı /si:extract komutunu çalıştırdığında veya hafızadaki tekrar eden bir çözümü skill olarak paketlemeyi istediğinde kullanın."
category: "Document"
repo: "alirezarezvani/claude-skills"
stars: 18572
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/extract/SKILL.md"
path: ".gemini/skills/extract/SKILL.md"
is_collection: false
body_length: 5389
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /si:extract — Desenlerden Skill Oluştur
  
  Tekrarlanan bir deseni veya debugging çözümünü, herhangi bir projede kurulabilen bağımsız, taşınabilir bir skill'e dönüştürür.
  
  ## Kullanım
  
  ```
  /si:extract <pattern description>                  # İnteraktif extraction
  /si:extract <pattern> --name docker-m1-fixes       # Skill adı belirt
  /si:extract <pattern> --output ./skills/            # Özel çıktı dizini
  /si:extract <pattern> --dry-run                     # Dosya oluşturmadan önizle
  ```
  
  ## Extraction Zamanı
  
  Bir learning, bu koşullardan HERHANGİ BİRİ doğruysa skill extraction için uygun:
  
  | Kriter | İşaret |
  |---|---|
  | **Tekrarlanan** | Aynı sorun 2+ projede görülüyor |
  | **Açık olmayan** | Gerçek debugging yapılarak keşfedildi |
  | **Geniş uygulanabilir** | Tek bir codebase'e bağlı değil |
  | **Karmaşık çözüm** | Multi-step fix, unutması kolay |
  | **Kullanıcı işaretli** | "Bunu skill olarak kaydet", "Bunu yeniden kullanmak istiyorum" |
  
  ## İş Akışı
  
  ### Adım 1: Deseni tanımla
  
  Kullanıcının açıklamasını oku. Auto-memory'de ilgili girdileri ara:
  
  ```bash
  MEMORY_DIR="$HOME/.claude/projects/$(pwd | sed 's|/|%2F|g; s|%2F|/|; s|^/||')/memory"
  grep -rni "<keywords>" "$MEMORY_DIR/"
  ```
  
  Auto-memory'de bulunursa, bu girdileri kaynak materyali olarak kullan. Bulunmazsa, kullanıcının açıklamasını doğrudan kullan.
  
  ### Adım 2: Skill kapsamını belirle
  
  Sor (maksimum 2 soru):
  - "Bu hangi sorunu çözer?" (açık değilse)
  - "Bu kod örneklerini içermeli mi?" (uygulanabilirse)
  
  ### Adım 3: Skill adı oluştur
  
  Adlandırma kuralları:
  - Küçük harf, sözcükler arasında tire
  - Açıklayıcı ama kısa (2-4 sözcük)
  - Örnekler: `docker-m1-fixes`, `api-timeout-patterns`, `pnpm-workspace-setup`
  
  **Ayrılmış parçalar — skill adında GÖRÜLMEMELI:**
  - `claude`
  - `anthropic`
  
  Claude Code'un kendisiyle ilgili skilller için, bunun yerine `cc-` önekini kullan:
  - ❌ `claude-code-settings` → ✅ `cc-settings`
  - ❌ `claude-code-maintenance` → ✅ `cc-maintenance`
  - ❌ `claude-mcp-tools` → ✅ `cc-mcp-tools`
  - ❌ `claude-plugin-development` → ✅ `cc-plugin-development`
  
  Skill dizinini yazmadan önce, önerilen adı bu listeyle karşılaştır.
  Ayrılmış parça varsa, dönüştür (parçayı bırak veya `claude*`/`anthropic*` önekini `cc-` ile değiştir) ve kullanıcıyla doğrula.
  
  ### Adım 4: Skill dosyalarını oluştur
  
  **`skill-extractor` agenini çalıştır** gerçek dosya oluşturma için.
  
  Agent şunları oluşturur:
  
  ```
  <skill-name>/
  ├── SKILL.md            # Frontmatter'lı ana skill dosyası
  ├── README.md           # İnsan tarafından okunabilir özet
  └── reference/          # (isteğe bağlı) Destekleyici dokümantasyon
      └── examples.md     # Somut örnekler ve edge case'ler
  ```
  
  ### Adım 5: SKILL.md yapısı
  
  Oluşturulan SKILL.md bu formatı takip etmelidir:
  
  ```markdown
  ---
  name: "skill-name"
  description: "<tek satırlık açıklama>. Şu durumlarda kullan: <tetikleyici koşullar>."
  ---
  
  # <Skill Başlığı>
  
  > Bu skill'in neyi çözdüğünün tek satırlık özeti.
  
  ## Hızlı Referans
  
  | Sorun | Çözüm |
  |---------|----------|
  | {{sorun 1}} | {{çözüm 1}} |
  | {{sorun 2}} | {{çözüm 2}} |
  
  ## Sorun
  
  {{Neyin yanlış gittiğini ve neden açık olmadığını açıklayan 2-3 cümle.}}
  
  ## Çözümler
  
  ### Seçenek 1: {{Ad}} (Önerilen)
  
  {{Kod örnekleriyle adım adım.}}
  
  ### Seçenek 2: {{Alternatif}}
  
  {{Seçenek 1 uygulanmadığında.}}
  
  ## Uzlaşmalar
  
  | Yaklaşım | Avantajlar | Dezavantajlar |
  |----------|------|------|
  | Seçenek 1 | {{avantajlar}} | {{dezavantajlar}} |
  | Seçenek 2 | {{avantajlar}} | {{dezavantajlar}} |
  
  ## Edge Case'ler
  
  - {{edge case 1 ve bununla nasıl başa çıkılacağı}}
  - {{edge case 2 ve bununla nasıl başa çıkılacağı}}
  ```
  
  ### Adım 6: Kalite kontrolleri
  
  Finalize etmeden önce doğrula:
  
  - [ ] SKILL.md'de `name` ve `description` ile geçerli YAML frontmatter var
  - [ ] `name`, klasör adıyla eşleşiyor (küçük harf, tireler)
  - [ ] `name`, ayrılmış parçalar `claude` veya `anthropic` içermiyor (Claude Code skillleri için `cc-` önekini kullan)
  - [ ] Açıklama "Şu durumlarda kullan:" tetikleyici koşullarını içeriyor
  - [ ] Çözümler bağımsız (dış bağlam gerekli değil)
  - [ ] Kod örnekleri tam ve kopyalanabilir
  - [ ] Proje-spesifik sabit kodlanmış değer yok (paths, URLs, credentials)
  - [ ] Gereksiz dependency yok
  
  ### Adım 7: Rapor
  
  ```
  ✅ Skill extracted: {{skill-name}}
  
  Oluşturulan dosyalar:
    {{path}}/SKILL.md          ({{lines}} satır)
    {{path}}/README.md         ({{lines}} satır)
    {{path}}/reference/examples.md  ({{lines}} satır)
  
  Kur: /plugin install (skills dizinine kopyala)
  Yayınla: clawhub publish {{path}}
  
  Kaynak: MEMORY.md girdileri {{n, m, ...}} satırlarında (saklandı — skill taşınabilir, memory proje-spesifiktir)
  ```
  
  ## Örnekler
  
  ### Debugging deseni extraction'ı
  
  ```
  /si:extract "Apple Silicon'da Docker derlemeleri başarısız oluyor platform uyuşmazlığı sebebiyle fix'i"
  ```
  
  `docker-m1-fixes/SKILL.md` oluşturur:
  - Platform uyuşmazlığı hata mesajı
  - Üç çözüm (build flag, Dockerfile, docker-compose)
  - Uzlaşmalar tablosu
  - Rosetta 2 emulation hakkında performans notu
  
  ### Workflow deseni extraction'ı
  
  ```
  /si:extract "OpenAPI spec'i değiştirdikten sonra her zaman TypeScript API client'ını yeniden oluştur"
  ```
  
  `api-client-regen/SKILL.md` oluşturur:
  - Neden manuel regen gerekli
  - Exact command sequence
  - CI integration snippet
  - Sık görülen başarısızlık modları
  
  ## İpuçları
  
  - *Farklı* bir projede zaman kazandıracak desenler extract et
  - Skilleri odaklanmış tut — bir problem per skill
  - İnsanların arayacağı hata mesajlarını ekle
  - Skill'i orijinal bağlam olmadan oku — anlaşılır mı?
---

# /si:extract — Create Skills from Patterns

Transforms a recurring pattern or debugging solution into a standalone, portable skill that can be installed in any project.

## Usage

```
/si:extract <pattern description>                  # Interactive extraction
/si:extract <pattern> --name docker-m1-fixes       # Specify skill name
/si:extract <pattern> --output ./skills/            # Custom output directory
/si:extract <pattern> --dry-run                     # Preview without creating files
```

## When to Extract

A learning qualifies for skill extraction when ANY of these are true:

| Criterion | Signal |
|---|---|
| **Recurring** | Same issue across 2+ projects |
| **Non-obvious** | Required real debugging to discover |
| **Broadly applicable** | Not tied to one specific codebase |
| **Complex solution** | Multi-step fix that's easy to forget |
| **User-flagged** | "Save this as a skill", "I want to reuse this" |

## Workflow

### Step 1: Identify the pattern

Read the user's description. Search auto-memory for related entries:

```bash
MEMORY_DIR="$HOME/.claude/projects/$(pwd | sed 's|/|%2F|g; s|%2F|/|; s|^/||')/memory"
grep -rni "<keywords>" "$MEMORY_DIR/"
```

If found in auto-memory, use those entries as source material. If not, use the user's description directly.

### Step 2: Determine skill scope

Ask (max 2 questions):
- "What problem does this solve?" (if not clear)
- "Should this include code examples?" (if applicable)

### Step 3: Generate skill name

Rules for naming:
- Lowercase, hyphens between words
- Descriptive but concise (2-4 words)
- Examples: `docker-m1-fixes`, `api-timeout-patterns`, `pnpm-workspace-setup`

**Reserved fragments — must NOT appear in the skill name:**
- `claude`
- `anthropic`

For skills about Claude Code itself, use the `cc-` prefix instead:
- ❌ `claude-code-settings` → ✅ `cc-settings`
- ❌ `claude-code-maintenance` → ✅ `cc-maintenance`
- ❌ `claude-mcp-tools` → ✅ `cc-mcp-tools`
- ❌ `claude-plugin-development` → ✅ `cc-plugin-development`

Before writing the skill directory, check the proposed name against this list.
If a reserved fragment is present, transform it (drop the fragment or replace
the `claude*`/`anthropic*` prefix with `cc-`) and confirm with the user.

### Step 4: Create the skill files

**Spawn the `skill-extractor` agent** for the actual file generation.

The agent creates:

```
<skill-name>/
├── SKILL.md            # Main skill file with frontmatter
├── README.md           # Human-readable overview
└── reference/          # (optional) Supporting documentation
    └── examples.md     # Concrete examples and edge cases
```

### Step 5: SKILL.md structure

The generated SKILL.md must follow this format:

```markdown
---
name: "skill-name"
description: "<one-line description>. Use when: <trigger conditions>."
---

# <Skill Title>

> One-line summary of what this skill solves.

## Quick Reference

| Problem | Solution |
|---------|----------|
| {{problem 1}} | {{solution 1}} |
| {{problem 2}} | {{solution 2}} |

## The Problem

{{2-3 sentences explaining what goes wrong and why it's non-obvious.}}

## Solutions

### Option 1: {{Name}} (Recommended)

{{Step-by-step with code examples.}}

### Option 2: {{Alternative}}

{{For when Option 1 doesn't apply.}}

## Trade-offs

| Approach | Pros | Cons |
|----------|------|------|
| Option 1 | {{pros}} | {{cons}} |
| Option 2 | {{pros}} | {{cons}} |

## Edge Cases

- {{edge case 1 and how to handle it}}
- {{edge case 2 and how to handle it}}
```

### Step 6: Quality gates

Before finalizing, verify:

- [ ] SKILL.md has valid YAML frontmatter with `name` and `description`
- [ ] `name` matches the folder name (lowercase, hyphens)
- [ ] `name` does NOT contain reserved fragments `claude` or `anthropic` (use `cc-` prefix for Claude Code skills)
- [ ] Description includes "Use when:" trigger conditions
- [ ] Solutions are self-contained (no external context needed)
- [ ] Code examples are complete and copy-pasteable
- [ ] No project-specific hardcoded values (paths, URLs, credentials)
- [ ] No unnecessary dependencies

### Step 7: Report

```
✅ Skill extracted: {{skill-name}}

Files created:
  {{path}}/SKILL.md          ({{lines}} lines)
  {{path}}/README.md         ({{lines}} lines)
  {{path}}/reference/examples.md  ({{lines}} lines)

Install: /plugin install (copy to your skills directory)
Publish: clawhub publish {{path}}

Source: MEMORY.md entries at lines {{n, m, ...}} (retained — the skill is portable, the memory is project-specific)
```

## Examples

### Extracting a debugging pattern

```
/si:extract "Fix for Docker builds failing on Apple Silicon with platform mismatch"
```

Creates `docker-m1-fixes/SKILL.md` with:
- The platform mismatch error message
- Three solutions (build flag, Dockerfile, docker-compose)
- Trade-offs table
- Performance note about Rosetta 2 emulation

### Extracting a workflow pattern

```
/si:extract "Always regenerate TypeScript API client after modifying OpenAPI spec"
```

Creates `api-client-regen/SKILL.md` with:
- Why manual regen is needed
- The exact command sequence
- CI integration snippet
- Common failure modes

## Tips

- Extract patterns that would save time in a *different* project
- Keep skills focused — one problem per skill
- Include the error messages people would search for
- Test the skill by reading it without the original context — does it make sense?
