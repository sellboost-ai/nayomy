---
name: "decision-logger"
description_en: "Two-layer memory architecture for board meeting decisions. Manages raw transcripts (Layer 1) and approved decisions (Layer 2). Use when logging decisions after a board meeting, reviewing past decisions with /cs:decisions, or checking overdue action items with /cs:review. Invoked automatically by the board-meeting skill after Phase 5 founder approval."
description_tr: "Board toplantı kararlarını yönetmek için iki katmanlı bellek mimarisi. Ham transkriptleri (Katman 1) ve onaylı kararları (Katman 2) saklar. Board toplantısından sonra kararları kaydetmek, /cs:decisions ile geçmiş kararları incelemek veya /cs:review ile gecikmiş action itemleri kontrol etmek için kullanılır. Board-meeting skill tarafından Phase 5 founder onayından sonra otomatik olarak çalışır."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 18402
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/decision-logger/SKILL.md"
path: ".gemini/skills/decision-logger/SKILL.md"
is_collection: false
body_length: 4990
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Karar Günlüğü
  
  İki katmanlı bellek sistemi. Katman 1 her şeyi depolar. Katman 2 yalnızca kurucunun onayladığı kısımları depolar. Gelecekteki toplantılar Katman 2'yi okur — bu, geçmiş tartışmalardan kaynaklanan hayali fikir birliğinin yeni müzakerelere sızmasını engeller.
  
  ## Anahtar Kelimeler
  karar günlüğü, bellek, onaylı kararlar, aksiyon maddeleri, kurul notları, /cs:decisions, /cs:review, çakışma tespiti, DO_NOT_RESURFACE
  
  ## Hızlı Başlangıç
  
  ```bash
  python scripts/decision_tracker.py --demo             # Örnek çıktıyı görmek için
  python scripts/decision_tracker.py --summary          # Özet + gecikmiş olanlar
  python scripts/decision_tracker.py --overdue          # Süresini geçmiş aksiyonlar
  python scripts/decision_tracker.py --conflicts        # Çelişki tespiti
  python scripts/decision_tracker.py --owner "CTO"      # Sahibine göre filtrele
  python scripts/decision_tracker.py --search "pricing" # Kararlarda ara
  ```
  
  ---
  
  ## Komutlar
  
  | Komut | Etki |
  |---------|--------|
  | `/cs:decisions` | Son 10 onaylı karar |
  | `/cs:decisions --all` | Tam tarihçe |
  | `/cs:decisions --owner CMO` | Sahibine göre filtrele |
  | `/cs:decisions --topic pricing` | Anahtar kelimeyle ara |
  | `/cs:review` | 7 gün içinde teslim edilecek aksiyon maddeleri |
  | `/cs:review --overdue` | Süresini geçmiş maddeler |
  
  ---
  
  ## İki Katmanlı Mimari
  
  Depolama, kanonik iki katmanlı karar belleğini izler (bkz. `../agent-protocol/SKILL.md` → "Decision Memory (Canonical Layout)") — `/cs:decide` ile yazılan aynı düzen.
  
  ### Katman 1 — Ham Transkriptler
  **Konum:** `~/.claude/decisions/raw/YYYY-MM-DD-<slug>.md`
  - Tam Phase 2 agent katkıları, Phase 3 kritiği, Phase 4 sentezi
  - Tüm tartışmalar, reddedilen argümanlar dahil
  - **Asla otomatik yüklenmez.** Yalnızca kurucunun açık talebi üzerine.
  - 90 gün sonra arşivle → `~/.claude/decisions/raw/archive/YYYY/`
  
  ### Katman 2 — Onaylı Kararlar
  **Konum:** `~/.claude/decisions/approved/` — karar başına bir kayıt (`YYYY-MM-DD-<slug>.md`) artı append-only indeksi `decisions.md`
  - YALNIZCA kurucunun onayladığı kararlar, aksiyon maddeleri, kullanıcı düzeltmeleri
  - **Her kurul toplantısının Phase 1'inde otomatik yüklenir**
  - Append-only. Kararlar hiçbir zaman silinmez — yalnızca geçersiz kılınır.
  - Phase 5'ten sonra Chief of Staff tarafından yönetilir. Asla agent tarafından yazılmaz.
  
  Geçiş: önceki sürümlerden eski `memory/board-meetings/` klasörü mevcut olabilir; tarih için okuyun ama tüm yeni girişleri `~/.claude/decisions/` klasörüne yazın.
  
  ---
  
  ## Karar Girdisi Biçimi
  
  ```markdown
  ## [YYYY-MM-DD] — [GÜNDEM MADDESİ BAŞLIĞI]
  
  **Karar:** [Ne kararlaştırıldığının bir açık ifadesi.]
  **Sahip:** [Bir kişi veya rol — yürütmeden sorumlu.]
  **Deadline:** [YYYY-MM-DD]
  **İnceleme:** [YYYY-MM-DD]
  **Gerekçe:** [Neden bu, alternatifler üzerinde. 1-2 cümle.]
  
  **Kullanıcı Geçersiz Kılması:** [Kurucu agent önerisini değiştirdiyse — ne ve neden. Uygulanmıyorsa boş bırakın.]
  
  **Reddedilen:**
  - [Öneri] — [neden] [DO_NOT_RESURFACE]
  
  **Aksiyon Maddeleri:**
  - [ ] [Aksiyon] — Sahip: [isim] — Bitiş: [YYYY-MM-DD] — İnceleme: [YYYY-MM-DD]
  
  **Geçersiz Kılar:** [Aynı konuyla ilgili önceki karar tarihi, varsa]
  **Tarafından Geçersiz Kılındı:** [Daha sonra geçersiz kılınırsa geriye dönük olarak doldurulur]
  **Ham transkript:** ~/.claude/decisions/raw/[DATE]-<slug>.md
  ```
  
  ---
  
  ## Çakışma Tespiti
  
  Günlüğe kaydetmeden önce, Chief of Staff şunları kontrol eder:
  1. **DO_NOT_RESURFACE ihlalleri** — yeni karar reddedilen bir öneriye eşleşir
  2. **Konu çelişkileri** — aynı konu hakkında iki etkin karar farklı sonuçlarla
  3. **Sahip çatışmaları** — aynı aksiyon farklı kararlarda farklı insanlara atanmış
  
  Bir çakışma bulunduğunda:
  ```
  ⚠️ KARAR ÇAKIŞMASI
  Yeni: [metin]
  Çakışan: [TARİH] — [mevcut metin]
  
  Seçenekler: (1) Eskisini geçersiz kıl  (2) Birleştir  (3) Kurucuya ertele
  ```
  
  **DO_NOT_RESURFACE uygulaması:**
  ```
  🚫 ENGELLENDI: "[Öneri]" [TARİH] tarihinde reddedildi. Neden: [neden].
  Yeniden açmak için: kurucu açıkça "[konuyu] [TARİH] tarihinden aç" demelidir.
  ```
  
  ---
  
  ## Günlüğe Kaydetme İş Akışı (Phase 5 Sonrası)
  
  1. Kurucu sentezi onaylar
  2. Katman 1 ham transkriptini yaz → `~/.claude/decisions/raw/YYYY-MM-DD-<slug>.md`
  3. `~/.claude/decisions/approved/decisions.md` dosyasında çakışmaları kontrol et
  4. Çakışmaları ortaya çıkar → kurucunun çözümünü bekle
  5. Onaylı kaydı `~/.claude/decisions/approved/YYYY-MM-DD-<slug>.md` dosyasına yaz ve indekse `decisions.md` ekle
  6. Onayla: kararlar günlüğe kaydedildi, aksiyonlar izlendi, DO_NOT_RESURFACE bayrakları eklendi
  
  ---
  
  ## Aksiyonları Tamamlı Olarak İşaretleme
  
  ```markdown
  - [x] [Aksiyon] — Sahip: [isim] — Tamamlandı: [TARİH] — Sonuç: [bir cümle]
  ```
  
  Tamamlanan öğeleri asla silmeyin. Tarihçe, kayıttır.
  
  ---
  
  ## Dosya Yapısı
  
  ```
  ~/.claude/decisions/
  ├── raw/YYYY-MM-DD-<slug>.md        # Katman 1: toplantı başına tam transkript
  ├── raw/archive/YYYY/               # 90 gün sonra ham dosyalar
  ├── approved/YYYY-MM-DD-<slug>.md   # Katman 2: onaylı karar başına bir kayıt
  └── approved/decisions.md           # Katman 2 indeksi: append-only, kurucunun onayladığı
  ```
  
  ---
  
  ## Referanslar
  - `templates/decision-entry.md` — alan kurallarıyla tek giriş şablonu
  - `scripts/decision_tracker.py` — CLI parser, gecikmiş izleyici, çakışma dedektörü
---

# Decision Logger

Two-layer memory system. Layer 1 stores everything. Layer 2 stores only what the founder approved. Future meetings read Layer 2 only — this prevents hallucinated consensus from past debates bleeding into new deliberations.

## Keywords
decision log, memory, approved decisions, action items, board minutes, /cs:decisions, /cs:review, conflict detection, DO_NOT_RESURFACE

## Quick Start

```bash
python scripts/decision_tracker.py --demo             # See sample output
python scripts/decision_tracker.py --summary          # Overview + overdue
python scripts/decision_tracker.py --overdue          # Past-deadline actions
python scripts/decision_tracker.py --conflicts        # Contradiction detection
python scripts/decision_tracker.py --owner "CTO"      # Filter by owner
python scripts/decision_tracker.py --search "pricing" # Search decisions
```

---

## Commands

| Command | Effect |
|---------|--------|
| `/cs:decisions` | Last 10 approved decisions |
| `/cs:decisions --all` | Full history |
| `/cs:decisions --owner CMO` | Filter by owner |
| `/cs:decisions --topic pricing` | Search by keyword |
| `/cs:review` | Action items due within 7 days |
| `/cs:review --overdue` | Items past deadline |

---

## Two-Layer Architecture

Storage follows the canonical two-layer decision memory (see `../agent-protocol/SKILL.md` → "Decision Memory (Canonical Layout)") — the same layout `/cs:decide` writes.

### Layer 1 — Raw Transcripts
**Location:** `~/.claude/decisions/raw/YYYY-MM-DD-<slug>.md`
- Full Phase 2 agent contributions, Phase 3 critique, Phase 4 synthesis
- All debates, including rejected arguments
- **NEVER auto-loaded.** Only on explicit founder request.
- Archive after 90 days → `~/.claude/decisions/raw/archive/YYYY/`

### Layer 2 — Approved Decisions
**Location:** `~/.claude/decisions/approved/` — one record per decision (`YYYY-MM-DD-<slug>.md`) plus the append-only index `decisions.md`
- ONLY founder-approved decisions, action items, user corrections
- **Loaded automatically in Phase 1 of every board meeting**
- Append-only. Decisions are never deleted — only superseded.
- Managed by Chief of Staff after Phase 5. Never written by agents directly.

Migration: a legacy `memory/board-meetings/` folder may exist from earlier versions; read it for history but write all new entries to `~/.claude/decisions/`.

---

## Decision Entry Format

```markdown
## [YYYY-MM-DD] — [AGENDA ITEM TITLE]

**Decision:** [One clear statement of what was decided.]
**Owner:** [One person or role — accountable for execution.]
**Deadline:** [YYYY-MM-DD]
**Review:** [YYYY-MM-DD]
**Rationale:** [Why this over alternatives. 1-2 sentences.]

**User Override:** [If founder changed agent recommendation — what and why. Blank if not applicable.]

**Rejected:**
- [Proposal] — [reason] [DO_NOT_RESURFACE]

**Action Items:**
- [ ] [Action] — Owner: [name] — Due: [YYYY-MM-DD] — Review: [YYYY-MM-DD]

**Supersedes:** [DATE of previous decision on same topic, if any]
**Superseded by:** [Filled in retroactively if overridden later]
**Raw transcript:** ~/.claude/decisions/raw/[DATE]-<slug>.md
```

---

## Conflict Detection

Before logging, Chief of Staff checks for:
1. **DO_NOT_RESURFACE violations** — new decision matches a rejected proposal
2. **Topic contradictions** — two active decisions on same topic with different conclusions
3. **Owner conflicts** — same action assigned to different people in different decisions

When a conflict is found:
```
⚠️ DECISION CONFLICT
New: [text]
Conflicts with: [DATE] — [existing text]

Options: (1) Supersede old  (2) Merge  (3) Defer to founder
```

**DO_NOT_RESURFACE enforcement:**
```
🚫 BLOCKED: "[Proposal]" was rejected on [DATE]. Reason: [reason].
To reopen: founder must explicitly say "reopen [topic] from [DATE]".
```

---

## Logging Workflow (Post Phase 5)

1. Founder approves synthesis
2. Write Layer 1 raw transcript → `~/.claude/decisions/raw/YYYY-MM-DD-<slug>.md`
3. Check conflicts against `~/.claude/decisions/approved/decisions.md`
4. Surface conflicts → wait for founder resolution
5. Write the approved record to `~/.claude/decisions/approved/YYYY-MM-DD-<slug>.md` and append to the index `decisions.md`
6. Confirm: decisions logged, actions tracked, DO_NOT_RESURFACE flags added

---

## Marking Actions Complete

```markdown
- [x] [Action] — Owner: [name] — Completed: [DATE] — Result: [one sentence]
```

Never delete completed items. The history is the record.

---

## File Structure

```
~/.claude/decisions/
├── raw/YYYY-MM-DD-<slug>.md        # Layer 1: full transcript per meeting
├── raw/archive/YYYY/               # Raw files after 90 days
├── approved/YYYY-MM-DD-<slug>.md   # Layer 2: one record per approved decision
└── approved/decisions.md           # Layer 2 index: append-only, founder-approved
```

---

## References
- `templates/decision-entry.md` — single entry template with field rules
- `scripts/decision_tracker.py` — CLI parser, overdue tracker, conflict detector
