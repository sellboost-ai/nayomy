---
name: "google-workspace"
description_en: "Google Workspace CLI operations: setup diagnostics, security audit, recipe discovery, and output analysis. Usage: /google-workspace <setup|audit|recipe|analyze> [options]"
description_tr: "Google Workspace CLI işlemleri: kurulum tanılaması, güvenlik denetimi, recipe keşfi ve çıktı analizi. Kullanım: /google-workspace <setup|audit|recipe|analyze> [options]"
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 18317
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/google-workspace/SKILL.md"
path: ".gemini/skills/google-workspace/SKILL.md"
is_collection: false
body_length: 3233
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /google-workspace
  
  `gws` CLI aracılığıyla Google Workspace CLI yönetimi. Setup tanılamalarını çalıştırın, güvenlik denetimlerini yapın, recipe'leri gezin ve yürütün, komut çıktısını analiz edin.
  
  ## Kullanım
  
  ```
  /google-workspace setup [--json]
  /google-workspace audit [--services gmail,drive,calendar] [--json]
  /google-workspace recipe list [--persona <role>] [--json]
  /google-workspace recipe search <keyword> [--json]
  /google-workspace recipe run <name> [--dry-run]
  /google-workspace recipe describe <name>
  /google-workspace analyze [--filter <field=value>] [--group-by <field>] [--stats <field>] [--format table|csv|json]
  ```
  
  ## Örnekler
  
  ```
  /google-workspace setup
  /google-workspace audit --services gmail,drive --json
  /google-workspace recipe list --persona pm
  /google-workspace recipe search "email"
  /google-workspace recipe run standup-report --dry-run
  /google-workspace recipe describe morning-briefing
  /google-workspace analyze --filter "mimeType=pdf" --select "name,size" --format table
  ```
  
  ## Scriptler
  
  - `engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/gws_doctor.py` — Pre-flight tanılaması
  - `engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/auth_setup_guide.py` — Auth setup rehberi
  - `engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/gws_recipe_runner.py` — Recipe kataloğu & çalıştırıcı
  - `engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/workspace_audit.py` — Güvenlik denetimi
  - `engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/output_analyzer.py` — JSON/NDJSON analiz aracı
  
  ## Alt Komutlar
  
  ### setup
  Pre-flight tanılaması ve auth doğrulamasını çalıştırın.
  ```bash
  python3 engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/gws_doctor.py [--json]
  python3 engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/auth_setup_guide.py --validate [--json]
  ```
  
  ### audit
  Güvenlik ve konfigürasyon denetimini çalıştırın.
  ```bash
  python3 engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/workspace_audit.py [--services gmail,drive,calendar] [--json]
  ```
  
  ### recipe
  43 yerleşik gws recipe'sini gezin, arayın ve yürütün.
  ```bash
  python3 engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/gws_recipe_runner.py --list [--persona <role>] [--json]
  python3 engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/gws_recipe_runner.py --search <keyword> [--json]
  python3 engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/gws_recipe_runner.py --describe <name>
  python3 engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/gws_recipe_runner.py --run <name> [--dry-run]
  ```
  
  ### analyze
  Herhangi bir gws komutundan gelen JSON çıktısını ayrıştırın, filtreleyin ve toplayın.
  ```bash
  gws <command> --json | python3 engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/output_analyzer.py [options]
  python3 engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/output_analyzer.py --demo --format table
  ```
  
  ## Skill Referansı
  -> `engineering-team/google-workspace-cli/skills/google-workspace-cli/SKILL.md`
  
  ## İlgili Komutlar
  - Doğrudan bağımlılık yok (bağımsız Google Workspace skill'i)
---

# /google-workspace

Google Workspace CLI administration via the `gws` CLI. Run setup diagnostics, security audits, browse and execute recipes, and analyze command output.

## Usage

```
/google-workspace setup [--json]
/google-workspace audit [--services gmail,drive,calendar] [--json]
/google-workspace recipe list [--persona <role>] [--json]
/google-workspace recipe search <keyword> [--json]
/google-workspace recipe run <name> [--dry-run]
/google-workspace recipe describe <name>
/google-workspace analyze [--filter <field=value>] [--group-by <field>] [--stats <field>] [--format table|csv|json]
```

## Examples

```
/google-workspace setup
/google-workspace audit --services gmail,drive --json
/google-workspace recipe list --persona pm
/google-workspace recipe search "email"
/google-workspace recipe run standup-report --dry-run
/google-workspace recipe describe morning-briefing
/google-workspace analyze --filter "mimeType=pdf" --select "name,size" --format table
```

## Scripts

- `engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/gws_doctor.py` — Pre-flight diagnostics
- `engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/auth_setup_guide.py` — Auth setup guide
- `engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/gws_recipe_runner.py` — Recipe catalog & runner
- `engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/workspace_audit.py` — Security audit
- `engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/output_analyzer.py` — JSON/NDJSON analyzer

## Subcommands

### setup
Run pre-flight diagnostics and auth validation.
```bash
python3 engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/gws_doctor.py [--json]
python3 engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/auth_setup_guide.py --validate [--json]
```

### audit
Run security and configuration audit.
```bash
python3 engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/workspace_audit.py [--services gmail,drive,calendar] [--json]
```

### recipe
Browse, search, and execute the 43 built-in gws recipes.
```bash
python3 engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/gws_recipe_runner.py --list [--persona <role>] [--json]
python3 engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/gws_recipe_runner.py --search <keyword> [--json]
python3 engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/gws_recipe_runner.py --describe <name>
python3 engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/gws_recipe_runner.py --run <name> [--dry-run]
```

### analyze
Parse, filter, and aggregate JSON output from any gws command.
```bash
gws <command> --json | python3 engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/output_analyzer.py [options]
python3 engineering-team/google-workspace-cli/skills/google-workspace-cli/scripts/output_analyzer.py --demo --format table
```

## Skill Reference
-> `engineering-team/google-workspace-cli/skills/google-workspace-cli/SKILL.md`

## Related Commands
- No direct dependencies (self-contained Google Workspace skill)
