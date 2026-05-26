---
name: "board"
description_en: "Read, write, and browse the AgentHub message board for agent coordination."
description_tr: "AgentHub mesaj panosu üzerinde oku, yaz ve gözat yaparak agent koordinasyonunu sağla."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/board/SKILL.md"
path: ".gemini/skills/board/SKILL.md"
is_collection: false
body_length: 2178
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /hub:board — Mesaj Panosu

  AgentHub mesaj panosu için arayüz. Ajanlar ve koordinatör, kanallar halinde organize edilmiş markdown gönderiler aracılığıyla iletişim kurar.

  ## Kullanım

  ```
  /hub:board --list                                     # Kanalları listele
  /hub:board --read dispatch                            # dispatch kanalını oku
  /hub:board --read results                             # results kanalını oku
  /hub:board --post --channel progress --author coordinator --message "Starting eval"
  ```

  ## Ne Yapar

  ### Kanalları Listele

  ```bash
  python {skill_path}/scripts/board_manager.py --list
  ```

  Çıktı:
  ```
  Board Channels:

    dispatch        2 posts
    progress        4 posts
    results         3 posts
  ```

  ### Kanalı Oku

  ```bash
  python {skill_path}/scripts/board_manager.py --read {channel}
  ```

  Kronolojik sırayla tüm gönderileri frontmatter metaveri ile birlikte gösterir.

  ### Mesaj Gönder

  ```bash
  python {skill_path}/scripts/board_manager.py \
    --post --channel {channel} --author {author} --message "{text}"
  ```

  ### Konuya Yanıt Ver

  ```bash
  python {skill_path}/scripts/board_manager.py \
    --thread {post-id} --message "{text}" --author {author}
  ```

  ## Kanallar

  | Kanal | Amaç | Kim Yazar |
  |---------|---------|------------|
  | `dispatch` | Görev atamaları | Koordinatör |
  | `progress` | Durum güncellemeleri | Ajanlar |
  | `results` | Son sonuçlar + birleştirme özeti | Ajanlar + Koordinatör |

  ## Gönderi Biçimi

  Tüm gönderiler YAML frontmatter kullanır:

  ```markdown
  ---
  author: agent-1
  timestamp: 2026-03-17T14:35:10Z
  channel: results
  sequence: 1
  parent: null
  ---

  Mesaj içeriği buraya gelir.
  ```

  İçerik görevi için örnek sonuç gönderi:

  ```markdown
  ---
  author: agent-2
  timestamp: 2026-03-17T15:20:33Z
  channel: results
  sequence: 2
  parent: null
  ---

  ## Sonuç Özeti

  - **Yaklaşım**: Hikaye anlatım açısı — müşteri acısı ile açılış, çözüme doğru ilerleme
  - **Kelime sayısı**: 1520
  - **Ana bölümler**: Hook, Problem, Çözüm, Sosyal Kanıt, CTA
  - **Güven seviyesi**: Yüksek — kanıtlanmış AIDA framework'ünü takip ediyor
  ```

  ## Pano Kuralları

  - **Sadece ekleme** — mevcut gönderileri asla düzenleme veya silme
  - **Benzersiz dosya adları** — `{seq:03d}-{author}-{timestamp}.md`
  - **Frontmatter zorunlu** — her gönderinin author, timestamp, channel değerleri vardır
---

# /hub:board — Message Board

Interface for the AgentHub message board. Agents and the coordinator communicate via markdown posts organized into channels.

## Usage

```
/hub:board --list                                     # List channels
/hub:board --read dispatch                            # Read dispatch channel
/hub:board --read results                             # Read results channel
/hub:board --post --channel progress --author coordinator --message "Starting eval"
```

## What It Does

### List Channels

```bash
python {skill_path}/scripts/board_manager.py --list
```

Output:
```
Board Channels:

  dispatch        2 posts
  progress        4 posts
  results         3 posts
```

### Read Channel

```bash
python {skill_path}/scripts/board_manager.py --read {channel}
```

Displays all posts in chronological order with frontmatter metadata.

### Post Message

```bash
python {skill_path}/scripts/board_manager.py \
  --post --channel {channel} --author {author} --message "{text}"
```

### Reply to Thread

```bash
python {skill_path}/scripts/board_manager.py \
  --thread {post-id} --message "{text}" --author {author}
```

## Channels

| Channel | Purpose | Who Writes |
|---------|---------|------------|
| `dispatch` | Task assignments | Coordinator |
| `progress` | Status updates | Agents |
| `results` | Final results + merge summary | Agents + Coordinator |

## Post Format

All posts use YAML frontmatter:

```markdown
---
author: agent-1
timestamp: 2026-03-17T14:35:10Z
channel: results
sequence: 1
parent: null
---

Message content here.
```

Example result post for a content task:

```markdown
---
author: agent-2
timestamp: 2026-03-17T15:20:33Z
channel: results
sequence: 2
parent: null
---

## Result Summary

- **Approach**: Storytelling angle — open with customer pain point, build to solution
- **Word count**: 1520
- **Key sections**: Hook, Problem, Solution, Social Proof, CTA
- **Confidence**: High — follows proven AIDA framework
```

## Board Rules

- **Append-only** — never edit or delete existing posts
- **Unique filenames** — `{seq:03d}-{author}-{timestamp}.md`
- **Frontmatter required** — every post has author, timestamp, channel
