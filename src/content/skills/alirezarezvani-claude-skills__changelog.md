---
name: "changelog"
description_en: "Generate changelogs from git history and validate conventional commits. Usage: /changelog <generate|lint> [options]"
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/changelog/SKILL.md"
path: ".gemini/skills/changelog/SKILL.md"
is_collection: false
body_length: 877
has_scripts: false
has_references: false
has_examples: false
related_files: []
---

# /changelog

Generate Keep a Changelog entries from git history and validate commit message format.

## Usage

```
/changelog generate [--from-tag <tag>] [--to-tag <tag>]    Generate changelog entries
/changelog lint [--from-ref <ref>] [--to-ref <ref>]       Lint commit messages
```

## Examples

```
/changelog generate --from-tag v2.0.0
/changelog lint --from-ref main --to-ref dev
/changelog generate --from-tag v2.0.0 --to-tag v2.1.0 --format markdown
```

## Scripts
- `engineering/changelog-generator/scripts/generate_changelog.py` — Parse commits, render changelog (`--from-tag`, `--to-tag`, `--from-ref`, `--to-ref`, `--format markdown|json`)
- `engineering/changelog-generator/scripts/commit_linter.py` — Validate conventional commit format (`--from-ref`, `--to-ref`, `--strict`, `--format text|json`)

## Skill Reference
→ `engineering/changelog-generator/SKILL.md`
