---
name: "handoff"
description_en: "Compact the current conversation into a handoff document for another agent to pick up. Save to a user-configured location (OS temp, home folder, or per-project .handoff/), redact secrets before write, suggest skills for the next session, and auto-load the latest handoff on the next SessionStart. First-run setup asks where to save so the project folder never gets cluttered. Use when the user says '"
description_tr: "Geçerli konuşmayı başka bir agentin devam ettirebilmesi için kompakt bir handoff dökümanına dönüştürün. Kullanıcı tarafından yapılandırılan bir konuma (OS temp, home folder veya per-project .handoff/) kaydedin, yazılmadan önce sırları redakte edin, sonraki oturum için beceri önerileri sunun ve SessionStart'ta en son handoff'u otomatik yükleyin. İlk çalıştırmada proje klasörünün asla karışmaması için kaydetme konumunun sorulması sağlanır."
category: "Document"
repo: "alirezarezvani/claude-skills"
stars: 18317
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/handoff/SKILL.md"
path: ".gemini/skills/handoff/SKILL.md"
is_collection: false
body_length: 8804
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Devir
  
  Mevcut konuşmayı özetleyen bir devir belgesi yazın, böylece yeni bir ajan çalışmaya devam edebilsin. Kullanıcının işletim sisteminin geçici dizinine kaydedin — mevcut çalışma alanına değil.
  
  Belgede bir "önerilen beceriler" bölümü ekleyin ve ajanın çağırması gereken becerileri önerin.
  
  Diğer yapıtlarda zaten yakalanan içeriği çoğaltmayın (PRD'ler, planlar, ADR'ler, sorunlar, commit'ler, diff'ler). Bunun yerine yol veya URL ile referans verin.
  
  API anahtarları, parolalar veya kişisel olarak tanımlanabilir bilgiler gibi hassas bilgileri redakte edin.
  
  Kullanıcı argümanlar geçtiyse, bunları bir sonraki oturumun odaklanacağı şeyin açıklaması olarak kabul edin ve belgeyi buna göre uyarlayın.
  
  ## Çağrı Tetikleyicileri
  
  **Açık ifadeler** (herhangi biri):
  - "bu işi devret"
  - "devir belgesi"
  - "bunu yeni bir oturum için özetle"
  - "bu konuşmayı sıkıştır"
  - "bu oturumu bitiriyorum"
  - "bunu daha sonra al"
  - "bunu yarın için hazırla"
  - "bunu bir sonraki oturum için kaydet"
  
  **Örtük sinyaller** (ifade yok, ama niyet açık):
  - Kullanıcı makine değiştirmeyi veya görevin ortasında durduğunu duyurur
  - Konuşma bağlamı doğal bir durma noktası olmadan uzun hale geliyor
  - Kullanıcı "buna daha sonra döneyim" veya "bunu daha sonra devam ettireceğim" diyor
  
  Örtük bir tetikleyici algıladığınızda, çalıştırmadan önce devri öneyin: *"Bir sonraki oturum için devir belgesi yazayım mı?"* — asla sessizce çalıştırmayın.
  
  ## İlk Çalıştırma Kurulumu
  
  İlk çağrıda, beceri devir belgelerinin nereye kaydedileceğini sorar, böylece proje klasörü asla karışmaz. Kurulum bir kez *"Şimdi kurulum çalıştırmak ister misin? (E/h)"* şeklinde sunulur — h cevabı bu çalıştırma için OS-temp varsayılanlarını kullanır ve asla yeniden sorulmaz. Kullanıcı `/cs:handoff-setup` aracılığıyla herhangi bir zamanda kurulumu yeniden çalıştırabilir.
  
  Tam yapılandırma alanı referansı için [references/configuration.md](references/configuration.md) bölümüne bakın.
  
  ## Çıktı Yolu
  
  Kaydetme konumu kullanıcının yapılandırmasından okunur (`~/.config/handoff/config.json` veya varsa proje-lokal `.handoff/config.json`). Yapılandırma yok ve kullanıcı kurulumu reddetmişse, şu şekilde geri dönün:
  
  ```bash
  mktemp -t handoff-XXXXXX.md
  ```
  
  Yazı yazmadan önce dosyayı okuyun.
  
  ## Bölüm Şablonu
  
  Devir belgesi beş bölüme sahiptir. Bu tam başlıkları kullanın:
  
  - **Bir sonraki oturumun hedefi** — kullanıcının argümanından veya konuşmanın en son iş parçacığından çıkarsanmış.
  - **Oyunun durumu** — ne tamamlandı, ne devam ediyor, ne engellendi. Yapıtlara referans verin, yapıştırmayın.
  - **Açık kararlar** — bir sonraki ajanın devam etmeden önce karar vermesi gereken şeyler.
  - **Kullanılacak beceriler** — bir sonraki oturumun çağırması gereken 3-5 beton beceri listesi, her biri bir satırlık *neden* ile.
  - **Yapıtlar** — PRD'ler, planlar, ADR'ler, sorunlar, dallar, PR'ler için yollar/URL'ler. İçeriklerini çoğaltmayın.
  
  Çalışılan örnek için [references/handoff_structure.md](references/handoff_structure.md) bölümüne bakın.
  
  ## Ajanın İşi
  
  Beş bölümü doldurmak ajanın işidir, komut dosyasının değil. [references/handoff_prompt.md](references/handoff_prompt.md) öğesini zorunlu bir kontrol listesi olarak izleyin:
  
  > Konuşmada tartışılan her konu için açıkça karar verin: *Oyunun Durumunda Dahil Et / Açık karar olarak Kaydet / Nedenle Sil.*
  
  Özeti serbest şekilde yazın, pembe ilerleme raporları ve kaybedilen engeller alır. Kontrol listesi bunu engeller.
  
  ## Kötü Desenler
  
  Matt'in çoğaltmama disiplini somut hale getirildi:
  
  - **Diff'i yapıştırmayın.** Dala veya PR'ye referans verin.
  - **PRD'yi yeniden yazmayın.** Yoluna bağlantı verin.
  - **Commit mesajında zaten olanları özetlemeyin.** Commit hash'ine bağlantı verin.
  - **20 beceri listelemeyin.** Bir sonraki oturumun gerçekten ihtiyacı olan 3-5 tanesini seçin.
  - **Konuşmada her mesajı anlatmayın.** Durum + Kararlar halinde sıkıştırın.
  
  Tam liste için [references/deduplication_discipline.md](references/deduplication_discipline.md) bölümüne bakın.
  
  ## Redaksiyon
  
  Kaydetmeden önce, linter taslağı sırlar ve PII açısından tarar. Katı modda (varsayılan) bulgular üzerine kaydetmeyi engeller; uyar modunda satır içi bayraklar ve yine de kaydeder.
  
  Redakte edin:
  - API anahtarları, OAuth belirteçleri, JWT belirteçleri
  - Parolalar ve VT bağlantı dizeleri
  - `-----BEGIN ... PRIVATE KEY-----` blokları
  - Sır içeren `.env`-stili `ANAHTAR=değer` satırları
  - E-posta adresleri, telefon numaraları, ilgisiz üçüncü tarafların adları
  - Token veya oturum kimliği içeren iç URL'ler
  
  Tam desen listesi ve regex'in yakalayamadığı şeyler için manuel inceleme adımları için [references/redaction_checklist.md](references/redaction_checklist.md) bölümüne bakın.
  
  ## SessionStart Otomatik Yükleme
  
  Eklenti kurulduğunda, bir `SessionStart` kancası yapılandırılmış kaydetme konumunu, en son devir belgesi (bekletme penceresi içinde) için tarar ve bunu yeni oturuma `<handoff_from_previous_session>` verisi olarak ortaya çıkarır. Bir sonraki ajan bunu talimatlar olarak değil, bağlam olarak okur — önerilen eylemler yürütülmeden önce mevcut durum açısından doğrulanmalıdır.
  
  Oturum başına `/cs:handoff-setup --project` ile devre dışı bırakın.
  
  ## SessionEnd Anımsatıcısı
  
  Eşleştirilmiş bir `SessionEnd` kancası, oturum sona erdiğinde yakın zamanda bir devir belgesinin var olup olmadığını kontrol eder. Hiçbiri yoksa (veya en yakın olanı 30 dakikadan eski ise), kullanıcı bağlam kaybolmadan önce bir tane yazması için istenir, böylece bir satırlık anımsatıcı yazdırılır.
  
  Kanca etkileşimli olarak istemi yapamaz veya oturum sonunu engelleyemez — oturum günlüğünde metin yüzeyler.
  
  Oturum başına `HANDOFF_SESSIONSTART=0` ile devre dışı bırakın.
  
  ## Mevcut Bir Devri Yenileme
  
  İş orijinal devir zamanının ötesine geçtiğinde, yeni bir dosya oluşturmak yerine yerinde yenileyin:
  
  ```bash
  python3 scripts/handoff_template_generator.py --refresh --goal "<güncellenmiş hedef>"
  ```
  
  En yakın devirin yolunu yazdırır. Ajan bunu doğrudan düzenler. Kaydetme konumunu düzenli tutar ve SessionStart kancasının her zaman güncel sürümü yüklemesini sağlar.
  
  ## Araçlar
  
  | Araç | Amaç |
  |---|---|
  | `setup.py` | İlk çalıştırma S&C — kaydetme konumu, bekletme, redaksiyon sıkılığı, git-bağlamı, tavsiye yelpazesi. |
  | `handoff_template_generator.py` | 5 bölümlü iskeleyi yapılandırılmış yolda yazar. `--refresh` yeni bir dosya oluşturmak yerine en yakın devri yeniden kullanır. |
  | `redaction_linter.py` | Taslağı kaydetmeden önce sırlar/PII açısından tarar. Katı modda bulgular üzerine çıkış 1. |
  | `handoff_self_check.py` | Sadakat kontrolü — boş Hedef, yapıt olmayan Durum maddeleri, git kirli olduğunda eksik Kararlar, çok az/çok Beceri, Yapıtlar içinde satır içi içeriği işaretler. Linter'dan önce çalıştırın. |
  | `skill_recommender.py` | Hedef metin + repo taramasına dayalı bir sonraki oturum için 3-5 beceri önerir. |
  | `cleanup.py` | Bekletme penceresinden daha eski iskelesi siler. mtime-korumalı — kullanıcının düzenlediği devri asla silmez. |
  | `config_loader.py` | Paylaşılan yardımcı: proje yapılandırmasını → genel yapılandırma → varsayılanları okuyun. |
  
  ## Slash Komutları
  
  - `/cs:handoff [isteğe bağlı bir sonraki oturum açıklaması]` — devir oluştur.
  - `/cs:handoff-setup` — kaydetme konumunu, bekletmeyi, redaksiyonu yeniden yapılandırın.
  
  ## Ajan
  
  `cs-handoff-author` — beceriyi koordine eden Matt-sesi kişiliği. Kısa, çoğaltmama, referanslar-kopya değil.
  
  ## Örnekler
  
  ### Örnek 1 — hedefli açık çağrı
  
  ```
  Kullanıcı: /cs:handoff "redaksiyon linter'ı kullanıma hazırlamayı bitir ve taslak PR aç"
  ```
  
  Beceri zorunlu kontrol listesinde yürür, 5 bölümlü iskele oluşturur, konuşmadan doldurur, redaksiyon linter'ı çalıştırır ve yapılandırılmış konuma kaydeder. Tam çalışılan örnek için `assets/example_handoff.md` bölümüne bakın.
  
  ### Örnek 2 — örtük tetikleyici
  
  ```
  Kullanıcı: Günü için paketliyorum, buna yarın döneyim.
  ```
  
  Örtük sinyali algıla. Çalıştırmadan önce önerir: *"Bir sonraki oturum için devir belgesi yazayım mı?"* — asla sessizce. Onay üzerine Örnek 1 gibi devam edin ve çıkarsanmış bir hedef ile.
  
  ### Örnek 3 — ilk çalıştırma kurulumu
  
  ```
  Kullanıcı: /cs:handoff "göçü sevk et"
  Beceri: Şimdi kurulum çalıştırmak ister misin? (E/h)
  Kullanıcı: E
  [kurulum 5 soruyu yürür: kaydetme konumu, bekletme, redaksiyon sıkılığı, git bağlamı, tavsiye yelpazesi]
  Beceri: Yapılandırma ~/.config/handoff/config.json adresine kaydedildi. Devam ediliyor: göçü sevk et.
  ```
  
  Kullanıcı h cevabı verirse, beceri bir sentinal yazar ve varsayılanları kullanır (OS geçici dir, 7 gün bekletme, katı redaksiyon). İstem asla yeniden görünmez.
  
  ### Örnek 4 — SessionStart otomatik yükleme
  
  Bir sonraki oturumda, SessionStart kancası yapılandırılmış kaydetme konumunu tarar, en yakın deviri bulur ve bunu `<handoff_from_previous_session>` verisi olarak yüzeye çıkarır. Bir sonraki ajan bunu talimatlar olarak değil, bağlam olarak okur.
  
  ## Kullanım
  
  | Adım | Komut |
  |---|---|
  | İlk çalıştırma kurulumu | `/cs:handoff-setup` (veya ilk `/cs:handoff`'da E yanıtı verin) |
  | Devir oluştur | `/cs:handoff [hedef]` |
  | Daha sonra yeniden yapılandır | `/cs:handoff-setup --reconfigure` |
  | Projeye özel yapılandırma | `/cs:handoff-setup --project` |
  | SessionStart kancasını devre dışı bırak | `HANDOFF_SESSIONSTART=0` (oturum başına) |
  
  ---
  
  **Sürüm:** 1.0.0
  **Esinlenen:** [Matt Pocock's handoff](https://github.com/mattpocock/skills/tree/main/skills/productivity/handoff) (MIT).
---

# Handoff

Write a handoff document summarising the current conversation so a fresh agent can continue the work. Save to the temporary directory of the user's OS — not the current workspace.

Include a "suggested skills" section in the document, which suggests skills that the agent should invoke.

Do not duplicate content already captured in other artifacts (PRDs, plans, ADRs, issues, commits, diffs). Reference them by path or URL instead.

Redact any sensitive information, such as API keys, passwords, or personally identifiable information.

If the user passed arguments, treat them as a description of what the next session will focus on and tailor the doc accordingly.

## Invocation Triggers

**Explicit phrases** (any of):
- "hand this off"
- "handoff doc"
- "summarize this for a new session"
- "compact this conversation"
- "I'm ending this session"
- "pick this up later"
- "wrap this up for tomorrow"
- "save this for the next session"

**Implicit signals** (no phrase, but the intent is unmistakable):
- User announces they're switching machines or stopping for the day mid-task
- Conversation context is growing long without a natural stopping point
- User says "let me come back to this" or "I'll continue this later"

When you detect an implicit trigger, propose the handoff before running it: *"Want me to write a handoff for the next session?"* — never run it silently.

## First-Run Setup

On first invocation, the skill asks where to save handoffs so the project folder never gets cluttered. Setup is offered once via *"Run setup now? (Y/n)"* — answering N uses OS-temp defaults for this run and never re-prompts. The user can rerun setup any time via `/cs:handoff-setup`.

See [references/configuration.md](references/configuration.md) for the full config field reference.

## Output Path

The save location is read from the user's config (`~/.config/handoff/config.json`, or the project-local `.handoff/config.json` if present). When no config exists and the user declined setup, fall back to:

```bash
mktemp -t handoff-XXXXXX.md
```

Read the file before you write to it.

## Section Template

The handoff doc has five sections. Use these exact headers:

- **Goal of next session** — from the user's argument, or inferred from the most recent thread of the conversation.
- **State of play** — what's done, what's in flight, what's blocked. Reference artifacts, do not paste them.
- **Open decisions** — what the next agent must decide before continuing.
- **Skills to use** — concrete list of 3-5 skills the next session should invoke, each with a one-line *why*.
- **Artifacts** — paths/URLs to PRDs, plans, ADRs, issues, branches, PRs. Do not duplicate their contents.

See [references/handoff_structure.md](references/handoff_structure.md) for a worked example.

## The Agent's Job

Filling in the five sections is the agent's job, not the script's. Follow [references/handoff_prompt.md](references/handoff_prompt.md) as a mandatory checklist:

> For each topic discussed in the conversation, decide explicitly: *include in State of play / log as an Open decision / drop with reason.*

Free-handing the summary leads to rosy progress reports and dropped blockers. The checklist prevents that.

## Anti-Patterns

Matt's no-duplication discipline made concrete:

- **Do not paste the diff.** Reference the branch or PR.
- **Do not retype the PRD.** Link to its path.
- **Do not summarise what's already in the commit message.** Link to the commit hash.
- **Do not list 20 skills.** Pick the 3-5 the next session actually needs.
- **Do not narrate every message in the conversation.** Compress to State + Decisions.

See [references/deduplication_discipline.md](references/deduplication_discipline.md) for the full list.

## Redaction

Before saving, the linter scans the draft for secrets and PII. In strict mode (default) it blocks save on findings; in warn mode it flags inline and saves anyway.

Redact:
- API keys, OAuth tokens, JWT tokens
- Passwords and DB connection strings
- `-----BEGIN ... PRIVATE KEY-----` blocks
- `.env`-style `KEY=value` lines containing secrets
- Email addresses, phone numbers, names of unrelated third parties
- Internal URLs containing tokens or session IDs

See [references/redaction_checklist.md](references/redaction_checklist.md) for the full pattern list and manual-review steps for what regex cannot catch.

## SessionStart Auto-Load

When the plugin is installed, a `SessionStart` hook scans the configured save location for the most recent handoff (within the retention window) and surfaces it to the new session as `<handoff_from_previous_session>` data. The next agent reads it as context, not as instructions — suggested actions must be verified against current state before executing.

Disable per-session with `HANDOFF_SESSIONSTART=0`.

## SessionEnd Reminder

A paired `SessionEnd` hook checks whether a recent handoff exists when the session is ending. If none does (or the most recent is older than 30 minutes), it prints a one-line reminder so the user is prompted to write one before context is lost.

The hook cannot prompt interactively or block session end — it surfaces text in the session log.

Disable per-session with `HANDOFF_SESSIONEND=0`.

## Refreshing an Existing Handoff

When work continues past the original handoff time, refresh in place instead of creating a new file:

```bash
python3 scripts/handoff_template_generator.py --refresh --goal "<updated goal>"
```

Prints the path of the most recent handoff. The agent edits it directly. Keeps the save location uncluttered and ensures the SessionStart hook always loads the up-to-date version.

## Tools

| Tool | Purpose |
|---|---|
| `setup.py` | First-run Q&A — save location, retention, redaction strictness, git-context, recommender scope. |
| `handoff_template_generator.py` | Writes the 5-section scaffold at the configured path. `--refresh` reuses the most recent handoff instead of creating a new file. |
| `redaction_linter.py` | Scans the draft for secrets/PII before save. Exit 1 on findings in strict mode. |
| `handoff_self_check.py` | Fidelity check — flags empty Goal, State bullets without artifacts, missing Decisions when git is dirty, too few/many Skills, inline content in Artifacts. Run before the linter. |
| `skill_recommender.py` | Suggests 3-5 skills for the next session based on goal text + repo scan. |
| `cleanup.py` | Deletes scaffolds older than the retention window. mtime-guarded — never deletes a handoff the user edited. |
| `config_loader.py` | Shared helper: read project config → global config → defaults. |

## Slash Commands

- `/cs:handoff [optional next-session description]` — generate the handoff.
- `/cs:handoff-setup` — reconfigure save location, retention, redaction.

## Agent

`cs-handoff-author` — Matt-voice persona orchestrating the skill. Terse, no-duplication, references-not-copies.

## Examples

### Example 1 — explicit invocation with a goal

```
User: /cs:handoff "finish wiring the redaction linter and open a draft PR"
```

The skill walks the mandatory checklist, generates a 5-section scaffold, fills it from the conversation, runs the redaction linter, and saves to the configured location. See `assets/example_handoff.md` for a complete worked example.

### Example 2 — implicit trigger

```
User: I'm packing up for the day, let me come back to this tomorrow.
```

Detect the implicit signal. Propose before running: *"Want me to write a handoff for the next session?"* — never silently. On confirmation, proceed as Example 1 with an inferred goal.

### Example 3 — first-run setup

```
User: /cs:handoff "ship the migration"
Skill: Run setup now? (Y/n)
User: Y
[setup walks 5 questions: save location, retention, redaction strictness, git context, recommender scope]
Skill: Config saved to ~/.config/handoff/config.json. Continuing with handoff for: ship the migration.
```

If the user answers N, the skill writes a sentinel and uses defaults (OS temp dir, 7-day retention, strict redaction). The prompt never re-appears.

### Example 4 — SessionStart auto-load

On the next session, the SessionStart hook scans the configured save location, finds the most recent handoff, and surfaces it as `<handoff_from_previous_session>` data. The next agent reads it as context, not instructions.

## Usage

| Step | Command |
|---|---|
| First-run setup | `/cs:handoff-setup` (or answer Y on first `/cs:handoff`) |
| Generate a handoff | `/cs:handoff [goal]` |
| Reconfigure later | `/cs:handoff-setup --reconfigure` |
| Project-specific config | `/cs:handoff-setup --project` |
| Disable SessionStart hook | `HANDOFF_SESSIONSTART=0` (per session) |

---

**Version:** 1.0.0
**Inspired by:** [Matt Pocock's handoff](https://github.com/mattpocock/skills/tree/main/skills/productivity/handoff) (MIT).
