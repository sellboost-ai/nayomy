---
name: "code-to-prd"
description_en: "Reverse-engineer a frontend codebase into a PRD. Usage: /code-to-prd [path]"
description_tr: "Frontend kodunu ters mühendislik yaparak PRD'ye dönüştürün. Kullanım: /code-to-prd [path]"
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18642
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/cmd-code-to-prd/SKILL.md"
path: ".gemini/skills/cmd-code-to-prd/SKILL.md"
is_collection: false
body_length: 2483
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /code-to-prd
  
  Frontend kodbase'ini kapsamlı bir Ürün Gereksinimler Dokümanı'na (PRD) tersine mühendisle.
  
  ## Kullanım
  
  ```bash
  /code-to-prd                    # Mevcut projeyi analiz et
  /code-to-prd ./src              # Belirli dizini analiz et
  /code-to-prd /path/to/project   # Harici projeyi analiz et
  ```
  
  ## Neler Yapar
  
  1. **Tara** — Framework, route'lar, API'ler, enum'lar ve proje yapısını tespit etmek için `codebase_analyzer.py` çalıştır
  2. **İskelet Oluştur** — `prd/` dizini, README.md, sayfa şablonları ve ek dosyaları oluşturmak için `prd_scaffolder.py` çalıştır
  3. **Analiz Et** — Her sayfayı Phase 2 iş akışı takip ederek geç: alanlar, etkileşimler, API bağımlılıkları, sayfa ilişkileri
  4. **Üret** — Tüm sayfalar, enum sözlüğü, API envanteri ve sayfa ilişki haritası ile final PRD'yi oluştur
  
  ## Adımlar
  
  ### Adım 1: Analiz Et
  
  Proje yolunu belirle (varsayılan: mevcut dizin). Frontend analyzer'ı çalıştır:
  
  ```bash
  python3 {skill_path}/scripts/codebase_analyzer.py {project_path} -o .code-to-prd-analysis.json
  ```
  
  Bulguların özetini göster: framework, sayfa sayısı, API sayısı, enum sayısı.
  
  ### Adım 2: İskelet Oluştur
  
  PRD dizin iskeletini oluştur:
  
  ```bash
  python3 {skill_path}/scripts/prd_scaffolder.py .code-to-prd-analysis.json -o prd/
  ```
  
  ### Adım 3: Doldur
  
  Envantterdeki her sayfa için SKILL.md Phase 2 iş akışını takip et:
  - Sayfanın component dosyalarını oku
  - Alanları, etkileşimleri, API bağımlılıklarını, sayfa ilişkilerini dokumente et
  - İlgili `prd/pages/` şablonunu doldur
  
  Büyük projeler için (>15 sayfa) 3-5 sayfadan oluşan gruplar halinde çalış. Her grubun ardından kullanıcıdan onay isteyiniz.
  
  ### Adım 4: Sonlandır
  
  Ek dosyalarını tamamla:
  - `prd/appendix/enum-dictionary.md` — bulunan tüm enum'lar ve durum kodları
  - `prd/appendix/api-inventory.md` — konsolide API referansı
  - `prd/appendix/page-relationships.md` — navigasyon ve veri bağlantısı haritası
  
  Geçici analiz dosyasını temizle:
  ```bash
  rm .code-to-prd-analysis.json
  ```
  
  ## Çıktı
  
  Şunları içeren `prd/` dizini:
  - `README.md` — sistem özeti, modül haritası, sayfa envanteri
  - `pages/*.md` — her sayfa için alanlar, etkileşimler, API'ler içeren bir dosya
  - `appendix/*.md` — enum sözlüğü, API envanteri, sayfa ilişkileri
  
  ## Skill Referansı
  
  - `product-team/code-to-prd/skills/code-to-prd/SKILL.md`
  - `product-team/code-to-prd/skills/code-to-prd/scripts/codebase_analyzer.py`
  - `product-team/code-to-prd/skills/code-to-prd/scripts/prd_scaffolder.py`
  - `product-team/code-to-prd/skills/code-to-prd/references/prd-quality-checklist.md`
---

# /code-to-prd

Reverse-engineer a frontend codebase into a complete Product Requirements Document.

## Usage

```bash
/code-to-prd                    # Analyze current project
/code-to-prd ./src              # Analyze specific directory
/code-to-prd /path/to/project   # Analyze external project
```

## What It Does

1. **Scan** — Run `codebase_analyzer.py` to detect framework, routes, APIs, enums, and project structure
2. **Scaffold** — Run `prd_scaffolder.py` to create `prd/` directory with README.md, per-page stubs, and appendix files
3. **Analyze** — Walk through each page following the Phase 2 workflow: fields, interactions, API dependencies, page relationships
4. **Generate** — Produce the final PRD with all pages, enum dictionary, API inventory, and page relationship map

## Steps

### Step 1: Analyze

Determine the project path (default: current directory). Run the frontend analyzer:

```bash
python3 {skill_path}/scripts/codebase_analyzer.py {project_path} -o .code-to-prd-analysis.json
```

Display a summary of findings: framework, page count, API count, enum count.

### Step 2: Scaffold

Generate the PRD directory skeleton:

```bash
python3 {skill_path}/scripts/prd_scaffolder.py .code-to-prd-analysis.json -o prd/
```

### Step 3: Fill

For each page in the inventory, follow the SKILL.md Phase 2 workflow:
- Read the page's component files
- Document fields, interactions, API dependencies, page relationships
- Fill in the corresponding `prd/pages/` stub

Work in batches of 3-5 pages for large projects (>15 pages). Ask the user to confirm after each batch.

### Step 4: Finalize

Complete the appendix files:
- `prd/appendix/enum-dictionary.md` — all enums and status codes found
- `prd/appendix/api-inventory.md` — consolidated API reference
- `prd/appendix/page-relationships.md` — navigation and data coupling map

Clean up the temporary analysis file:
```bash
rm .code-to-prd-analysis.json
```

## Output

A `prd/` directory containing:
- `README.md` — system overview, module map, page inventory
- `pages/*.md` — one file per page with fields, interactions, APIs
- `appendix/*.md` — enum dictionary, API inventory, page relationships

## Skill Reference

- `product-team/code-to-prd/skills/code-to-prd/SKILL.md`
- `product-team/code-to-prd/skills/code-to-prd/scripts/codebase_analyzer.py`
- `product-team/code-to-prd/skills/code-to-prd/scripts/prd_scaffolder.py`
- `product-team/code-to-prd/skills/code-to-prd/references/prd-quality-checklist.md`
