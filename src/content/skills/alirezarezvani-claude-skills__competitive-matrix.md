---
name: "competitive-matrix"
description_en: "Build competitive analysis matrices with scoring and gap analysis. Usage: /competitive-matrix <analyze> [options]"
description_tr: "Puanlama ve boşluk analizi ile rekabet analizi matrisleri oluşturun. Kullanım: /competitive-matrix <analyze> [options]"
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18402
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/competitive-matrix/SKILL.md"
path: ".gemini/skills/competitive-matrix/SKILL.md"
is_collection: false
body_length: 917
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /competitive-matrix
  
  Ağırlıklı puanlama, boşluk analizi ve pazar konumlandırması öngörüleri ile rekabet matrislerini oluşturun.
  
  ## Kullanım
  
  ```
  /competitive-matrix analyze <competitors.json>                    Tam analiz
  /competitive-matrix analyze <competitors.json> --weights pricing=2,ux=1.5    Özel ağırlıklar
  ```
  
  ## Input Formatı
  
  ```json
  {
    "your_product": { "name": "MyApp", "scores": {"ux": 8, "pricing": 7, "features": 9} },
    "competitors": [
      { "name": "Competitor A", "scores": {"ux": 7, "pricing": 9, "features": 6} }
    ],
    "dimensions": ["ux", "pricing", "features"]
  }
  ```
  
  ## Örnekler
  
  ```
  /competitive-matrix analyze competitors.json
  /competitive-matrix analyze competitors.json --format json --output matrix.json
  ```
  
  ## Scriptler
  - `product-team/skills/competitive-teardown/scripts/competitive_matrix_builder.py` — Matrix builder
  
  ## Skill Referansı
  → `product-team/skills/competitive-teardown/SKILL.md`
---

# /competitive-matrix

Build competitive matrices with weighted scoring, gap analysis, and market positioning insights.

## Usage

```
/competitive-matrix analyze <competitors.json>                    Full analysis
/competitive-matrix analyze <competitors.json> --weights pricing=2,ux=1.5    Custom weights
```

## Input Format

```json
{
  "your_product": { "name": "MyApp", "scores": {"ux": 8, "pricing": 7, "features": 9} },
  "competitors": [
    { "name": "Competitor A", "scores": {"ux": 7, "pricing": 9, "features": 6} }
  ],
  "dimensions": ["ux", "pricing", "features"]
}
```

## Examples

```
/competitive-matrix analyze competitors.json
/competitive-matrix analyze competitors.json --format json --output matrix.json
```

## Scripts
- `product-team/skills/competitive-teardown/scripts/competitive_matrix_builder.py` — Matrix builder

## Skill Reference
→ `product-team/skills/competitive-teardown/SKILL.md`
