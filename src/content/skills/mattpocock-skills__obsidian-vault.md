---
name: "obsidian-vault"
description_en: "Search, create, and manage notes in the Obsidian vault with wikilinks and index notes. Use when user wants to find, create, or organize notes in Obsidian."
description_tr: "Obsidian vault'unuzda wikilink'ler ve index notlarla birlikte notları arayın, oluşturun ve yönetin. Kullanıcı Obsidian'da notları bulmak, oluşturmak veya organize etmek istediğinde kullanılır."
category: "Development"
repo: "mattpocock/skills"
stars: 134333
url: "https://github.com/mattpocock/skills/blob/HEAD/skills/personal/obsidian-vault/SKILL.md"
path: "skills/personal/obsidian-vault/SKILL.md"
is_collection: false
body_length: 1312
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Obsidian Vault
  
  ## Vault konumu
  
  `/mnt/d/Obsidian Vault/AI Research/`
  
  Çoğunlukla kök seviyesinde düz yapı.
  
  ## Adlandırma kuralları
  
  - **Index notları**: ilgili konuları topla (örn., `Ralph Wiggum Index.md`, `Skills Index.md`, `RAG Index.md`)
  - Tüm not adları için **Title Case** kullan
  - Organizasyon için klasör kullanma - bunun yerine bağlantılar ve index notları kullan
  
  ## Bağlantılar
  
  - Obsidian `[[wikilinks]]` sözdizimini kullan: `[[Note Title]]`
  - Notlar bağımlılık/ilgili notlara altta bağlanır
  - Index notları sadece `[[wikilinks]]` listesidir
  
  ## İş akışları
  
  ### Notları ara
  
  ```bash
  # Dosya adına göre ara
  find "/mnt/d/Obsidian Vault/AI Research/" -name "*.md" | grep -i "keyword"
  
  # İçeriğe göre ara
  grep -rl "keyword" "/mnt/d/Obsidian Vault/AI Research/" --include="*.md"
  ```
  
  Veya Grep/Glob araçlarını doğrudan vault yolunda kullan.
  
  ### Yeni not oluştur
  
  1. Dosya adı için **Title Case** kullan
  2. İçeriği bir öğrenme birimi olarak yazın (vault kurallarına göre)
  3. Altta ilgili notlara `[[wikilinks]]` ekle
  4. Numaralandırılmış bir dizinin parçasıysa, hiyerarşik numaralandırma şemasını kullan
  
  ### İlgili notları bul
  
  Vault genelinde `[[Note Title]]` araması yaparak geriye doğru bağlantıları bul:
  
  ```bash
  grep -rl "\\[\\[Note Title\\]\\]" "/mnt/d/Obsidian Vault/AI Research/"
  ```
  
  ### Index notlarını bul
  
  ```bash
  find "/mnt/d/Obsidian Vault/AI Research/" -name "*Index*"
  ```
---

# Obsidian Vault

## Vault location

`/mnt/d/Obsidian Vault/AI Research/`

Mostly flat at root level.

## Naming conventions

- **Index notes**: aggregate related topics (e.g., `Ralph Wiggum Index.md`, `Skills Index.md`, `RAG Index.md`)
- **Title case** for all note names
- No folders for organization - use links and index notes instead

## Linking

- Use Obsidian `[[wikilinks]]` syntax: `[[Note Title]]`
- Notes link to dependencies/related notes at the bottom
- Index notes are just lists of `[[wikilinks]]`

## Workflows

### Search for notes

```bash
# Search by filename
find "/mnt/d/Obsidian Vault/AI Research/" -name "*.md" | grep -i "keyword"

# Search by content
grep -rl "keyword" "/mnt/d/Obsidian Vault/AI Research/" --include="*.md"
```

Or use Grep/Glob tools directly on the vault path.

### Create a new note

1. Use **Title Case** for filename
2. Write content as a unit of learning (per vault rules)
3. Add `[[wikilinks]]` to related notes at the bottom
4. If part of a numbered sequence, use the hierarchical numbering scheme

### Find related notes

Search for `[[Note Title]]` across the vault to find backlinks:

```bash
grep -rl "\\[\\[Note Title\\]\\]" "/mnt/d/Obsidian Vault/AI Research/"
```

### Find index notes

```bash
find "/mnt/d/Obsidian Vault/AI Research/" -name "*Index*"
```
