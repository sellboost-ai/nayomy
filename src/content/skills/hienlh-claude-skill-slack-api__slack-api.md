---
name: "slack-api"
description_en: "Read Slack messages, threads, channels, download attachments via Python API. Use when you see Slack URLs (https://*.slack.com/archives/*/p*) or need to interact with Slack."
description_tr: "Slack mesajlarını, konuşmaları ve kanalları okuyun, Python API üzerinden ekleri indirin. Slack URL'lerini (https://*.slack.com/archives/*/p*) gördüğünüzde veya Slack ile etkileşim kurmanız gerektiğinde kullanın."
category: "Development"
repo: "hienlh/claude-skill-slack-api"
stars: 0
url: "https://github.com/hienlh/claude-skill-slack-api/blob/HEAD/skill.md"
path: "skill.md"
is_collection: false
body_length: 1944
has_scripts: true
has_references: false
has_examples: false
related_files: ["CONTRIBUTING.md", "README.md"]
body_tr: |-
  # Slack API

  Python kullanarak Slack'i okuyun ve etkileşimde bulunun (MCP gerekli değil).

  ## Hızlı Referans

  ```bash
  # URL'den mesaj/thread okuma
  python3 ~/.claude/skills/slack-api/scripts/slack.py --url "SLACK_URL"

  # Kanal geçmişi / Thread yanıtları
  python3 ~/.claude/skills/slack-api/scripts/slack.py --history -c CHANNEL_ID -l 10
  python3 ~/.claude/skills/slack-api/scripts/slack.py --replies -c CHANNEL_ID --thread-ts TS

  # Arama / Kanalları listeleme / Kullanıcı bilgisi
  python3 ~/.claude/skills/slack-api/scripts/slack.py --search "query"
  python3 ~/.claude/skills/slack-api/scripts/slack.py --list-channels
  python3 ~/.claude/skills/slack-api/scripts/slack.py --user-info USER_ID

  # Thread'den dosyaları listeleme (ayrıntılarla)
  python3 ~/.claude/skills/slack-api/scripts/slack.py --url "URL" --list-files -v

  # Thread'deki tüm dosyaları indirme
  python3 ~/.claude/skills/slack-api/scripts/slack.py --url "URL" --download-files -o ./downloads

  # JSON çıktısı
  python3 ~/.claude/skills/slack-api/scripts/slack.py --url "URL" --json
  ```

  ## Komutlar

  | Flag | Açıklama | Gerekli |
  |------|----------|---------|
  | `--url` | Slack URL'sinden oku | URL |
  | `--history` | Kanal mesajları | `-c` |
  | `--replies` | Thread yanıtları | `-c`, `--thread-ts` |
  | `--search` | Mesajlarda ara | query |
  | `--list-channels` | Kanalları listele | - |
  | `--user-info` | Kullanıcı detayları | user_id |
  | `--post` | Mesaj gönder | `-c`, `-t` |
  | `--list-files` | Dosyaları ayrıntılarla listele | `--url` veya mesajlar |
  | `--download-files` | Tüm dosyaları indir | `--url` veya mesajlar |

  ## Seçenekler

  `-c`/`--channel`, `--thread-ts`, `-l`/`--limit` (20), `-o`/`--output-dir` (./slack-downloads), `-v`/`--verbose`, `--json`

  ## Kimlik Doğrulama

  Token'lar `~/.claude/skills/slack-api/.env` dosyasından yüklenir:
  ```
  SLACK_XOXC_TOKEN=xoxc-...
  SLACK_XOXD_TOKEN=xoxd-...
  ```

  Token'ları alın: Browser DevTools -> Application -> Cookies (Slack'e giriş yapılmış)

  ## URL Ayrıştırma

  `p1767879572095059` -> `1767879572.095059` (sondan 6 karakter öncesine nokta ekleyin)
---

# Slack API

Read and interact with Slack using Python (no MCP required).

## Quick Reference

```bash
# Read message/thread from URL
python3 ~/.claude/skills/slack-api/scripts/slack.py --url "SLACK_URL"

# Channel history / Thread replies
python3 ~/.claude/skills/slack-api/scripts/slack.py --history -c CHANNEL_ID -l 10
python3 ~/.claude/skills/slack-api/scripts/slack.py --replies -c CHANNEL_ID --thread-ts TS

# Search / List channels / User info
python3 ~/.claude/skills/slack-api/scripts/slack.py --search "query"
python3 ~/.claude/skills/slack-api/scripts/slack.py --list-channels
python3 ~/.claude/skills/slack-api/scripts/slack.py --user-info USER_ID

# List files from thread (with details)
python3 ~/.claude/skills/slack-api/scripts/slack.py --url "URL" --list-files -v

# Download all files from thread
python3 ~/.claude/skills/slack-api/scripts/slack.py --url "URL" --download-files -o ./downloads

# Output JSON
python3 ~/.claude/skills/slack-api/scripts/slack.py --url "URL" --json
```

## Commands

| Flag | Description | Required |
|------|-------------|----------|
| `--url` | Read from Slack URL | URL |
| `--history` | Channel messages | `-c` |
| `--replies` | Thread replies | `-c`, `--thread-ts` |
| `--search` | Search messages | query |
| `--list-channels` | List channels | - |
| `--user-info` | User details | user_id |
| `--post` | Post message | `-c`, `-t` |
| `--list-files` | List files with details | `--url` or messages |
| `--download-files` | Download all files | `--url` or messages |

## Options

`-c`/`--channel`, `--thread-ts`, `-l`/`--limit` (20), `-o`/`--output-dir` (./slack-downloads), `-v`/`--verbose`, `--json`

## Auth

Tokens loaded from `~/.claude/skills/slack-api/.env`:
```
SLACK_XOXC_TOKEN=xoxc-...
SLACK_XOXD_TOKEN=xoxd-...
```

Get tokens: Browser DevTools -> Application -> Cookies (logged into Slack)

## URL Parsing

`p1767879572095059` -> `1767879572.095059` (insert dot 6 chars from end)
