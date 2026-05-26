---
name: "boardroom"
description_en: "/cs:boardroom <brief> — 6-phase multi-role deliberation across the C-suite with Phase 2 isolation, critic pre-screen, and synthesis. Outputs a board memo."
description_tr: "/cs:boardroom <brief> — C-suite düzeyinde 6 aşamalı, çok roller arası istişare sürecidir. Phase 2 izolasyonu, eleştirmen ön kontrolü ve sentez içerir. Board memo olarak çıktı verir."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/boardroom/SKILL.md"
path: ".gemini/skills/boardroom/SKILL.md"
is_collection: false
body_length: 4245
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /cs:boardroom — Multi-Role Boardroom Müzakeresi

  **Komut:** `/cs:boardroom <brief-path>`

  `board-meeting` skill protokolünü C-suite'de tek bir strateji özeti için çalıştırır. Bu, eklentinin **kalbi**'dir — gstack'in inceleme zincirinin yalnızca yaklaştırdığı multi-role müzakere.

  ## Pipeline Konumu

  ```
  /cs:office-hours  →  /cs:brief  →  /cs:boardroom  →  /cs:decide  →  /cs:execute  →  /cs:post-mortem
                                       ↑ siz burada
  ```

  ## 6 Faz (board-meeting skill'den)

  ### Faz 1 — Briefing
  - Chief of Staff özeti, **Etkilenen Roller**'de işaretlenen tüm danışmanlara dağıtır.
  - Her danışman company-context.md + özeti okur.
  - Henüz tartışma yoktur.

  ### Faz 2 — Bağımsız Düşünme (İZOLASYON)
  - **Kritik:** her danışman kendi konumunu **bağımsız olarak** oluşturur, diğerlerinin konumlarını görmeden.
  - Bu, grup düşüncesini engeller ve muhalefeti ortaya çıkarır.
  - Her biri yazar: kendi sesinin açılışı, tavsiyesi, ilk 3 endişesi, ilk 3 destekleyicisi.

  ### Faz 3 — Çapraz Sorgulama
  - Konumlar eş zamanlı olarak ortaya çıkar.
  - Her danışman diğerlerinin konumlarını kendi sahip olduğu boyutlarda eleştirir:
    - cs-cfo-advisor matematik'i eleştirir
    - cs-ciso-advisor riski eleştirir
    - cs-cpo-advisor JTBD'yi eleştirir
    - cs-cmo-advisor konumlandırmayı eleştirir
    - cs-cro-advisor gelir matematiğini eleştirir
    - vs.

  ### Faz 4 — Şeytanın Avukatı Geçişi
  - `executive-mentor/devils-advocate` agent'ı öncü seçenekte `/em:challenge`'ı çalıştırır.
  - Üç endişeyi önem derecelendirmesiyle ortaya çıkarır.

  ### Faz 5 — Sentez
  - Chief of Staff sentez yapar: hangi seçenek çoğunluğu komuta ediyor, hangi muhalefetler çözülmemiş.
  - **Board memo**'yu tavsiye + muhalefet ile üretir.

  ### Faz 6 — Karar Devri
  - Memo kurucuya sunulur.
  - Kurucu kabul eder, değiştirir veya reddeder.
  - Onaylanmış memo `/cs:decide`'a yönlendirilir.

  ## Çıktı: Board Memo

  `~/.claude/boardroom/YYYY-MM-DD-<slug>.md` konumuna kaydedilir:

  ```markdown
  # Board Memo: <topic>
  **Date:** YYYY-MM-DD
  **Brief:** <link to /cs:brief file>
  **Status:** AWAITING FOUNDER DECISION | APPROVED | REJECTED

  ## Question
  [Brief'ten bir cümle]

  ## Önerilen Seçenek
  **<Option name>** — seçildi çünkü <synthesis reasoning>

  ## Oy Tablosu
  | Danışman | Oy | Tek Cümlelik Neden |
  |---|---|---|
  | cs-ceo-advisor | A | <reason> |
  | cs-cfo-advisor | A | <reason> |
  | cs-cto-advisor | B | <reason> |
  | ... | | |

  ## Muhalefet
  - **<dissenter>:** <unresolved concern>

  ## Şeytanın Avukatı Endişeleri
  1. **KRİTİK** — <concern> — Azaltma: <plan>
  2. **YÜKSEK** — <concern> — Azaltma: <plan>
  3. **ORTA** — <concern> — Azaltma: <plan>

  ## Başarı & Kill Kriterleri
  [Özetten kopyalandı, panel tarafından iyileştirildi]

  ## Önerilen Karar Yolu
  - `/cs:decide` → kararı logla
  - `/cs:execute` → 90 günlük plan
  - `/cs:cross-eval` → multi-model akıl sağlığı kontrolü (isteğe bağlı, yüksek riskli)
  - `/cs:freeze N` → cooldown kilidi (isteğe bağlı, geri alınamaz)
  ```

  ## Neden Faz 2 İzolasyonu Önemlidir

  Danışmanlar kendi konumlarını oluşturmadan önce birbirlerinin konumlarını görürlerse, sabitlenirler. Faz 2 izolasyonu board-meeting protokolündeki en yüksek kaldıraç uygulamadır — sadakatsizliğin bastıracağı muhalefetleri ortaya çıkarır.

  ## Neden Bu, gstack'in İnceleme Zincirini Yenetir

  | | gstack `/autoplan` | `/cs:boardroom` |
  |---|---|---|
  | Roller | CEO → design → eng (3) | 10'a kadar C-rolle |
  | Sıra | Sıralı | Faz 2 izolasyon, sonra eş zamanlı |
  | Muhalefet yakalama | Örtülü | Açık muhalefet sütunu |
  | Adversarial geçişi | Hayır | Faz 4 şeytanın avukatı |
  | Çıktı | İncelenmiş plan | Oy kullanılmış memo muhalefet + kill kriterleri ile |

  ## İş Akışı

  1. `~/.claude/briefs/<file>` konumundan özeti okuyun
  2. Etkilenen rolleri belirleyin
  3. Her cs-* danışmanı bağımsız olarak çağırın (Faz 2)
  4. Konumları toplayın
  5. Çapraz sorgulama turunu çalıştırın (Faz 3)
  6. Öncü seçenekte `/em:challenge`'ı çalıştırın (Faz 4)
  7. Memo sentezi yapın (Faz 5)
  8. Kurucuya devrederim (Faz 6)

  ## Yönlendirme

  - `/cs:decide` — onaylanmış memo'yu logla
  - `/cs:cross-eval` — yüksek riskli ikinci görüş
  - `/cs:freeze` — cooldown kilidi

  ## İlgili

  - Agent: [`cs-chief-of-staff`](../../agents/cs-chief-of-staff.md)
  - Skills: [`board-meeting`](../../../skills/board-meeting/SKILL.md), [`executive-mentor`](../../../executive-mentor/)

  ---

  **Version:** 1.0.0
---

# /cs:boardroom — Multi-Role Boardroom Deliberation

**Command:** `/cs:boardroom <brief-path>`

Runs the `board-meeting` skill protocol across the C-suite for a single strategy brief. This is the **heart of the plugin** — the multi-role deliberation that gstack's review chain only approximates.

## Pipeline Position

```
/cs:office-hours  →  /cs:brief  →  /cs:boardroom  →  /cs:decide  →  /cs:execute  →  /cs:post-mortem
                                     ↑ you are here
```

## The 6 Phases (from board-meeting skill)

### Phase 1 — Briefing
- Chief of Staff distributes the brief to all advisors marked in **Affected Roles**.
- Each advisor reads company-context.md + the brief.
- No discussion yet.

### Phase 2 — Independent Thinking (ISOLATION)
- **Critical:** each advisor produces their position **independently**, without seeing others' positions.
- This prevents groupthink and surfaces dissent.
- Each writes: their voice's opening, recommendation, top 3 concerns, top 3 supports.

### Phase 3 — Cross-Examination
- Positions revealed simultaneously.
- Each advisor critiques the others' positions on the dimensions they own:
  - cs-cfo-advisor critiques the math
  - cs-ciso-advisor critiques the risk
  - cs-cpo-advisor critiques the JTBD
  - cs-cmo-advisor critiques the positioning
  - cs-cro-advisor critiques the revenue math
  - etc.

### Phase 4 — Devil's Advocate Pass
- `executive-mentor/devils-advocate` agent runs `/em:challenge` on the leading option.
- Surfaces three concerns with severity ratings.

### Phase 5 — Synthesis
- Chief of Staff synthesizes: which option commands majority, what are unresolved dissents.
- Produces the **board memo** with recommendation + dissent.

### Phase 6 — Decision Hand-off
- Memo is presented to the founder.
- Founder accepts, modifies, or rejects.
- Approved memo routes to `/cs:decide` for logging.

## Output: Board Memo

Saved to `~/.claude/boardroom/YYYY-MM-DD-<slug>.md`:

```markdown
# Board Memo: <topic>
**Date:** YYYY-MM-DD
**Brief:** <link to /cs:brief file>
**Status:** AWAITING FOUNDER DECISION | APPROVED | REJECTED

## Question
[One sentence from the brief]

## Recommended Option
**<Option name>** — chosen because <synthesis reasoning>

## Vote Tally
| Advisor | Vote | One-Sentence Reason |
|---|---|---|
| cs-ceo-advisor | A | <reason> |
| cs-cfo-advisor | A | <reason> |
| cs-cto-advisor | B | <reason> |
| ... | | |

## Dissent
- **<dissenter>:** <unresolved concern>

## Devil's Advocate Concerns
1. **CRITICAL** — <concern> — Mitigation: <plan>
2. **HIGH** — <concern> — Mitigation: <plan>
3. **MEDIUM** — <concern> — Mitigation: <plan>

## Success & Kill Criteria
[Copied from brief, refined by the panel]

## Recommended Decision Path
- `/cs:decide` → log the decision
- `/cs:execute` → 90-day plan
- `/cs:cross-eval` → multi-model sanity check (optional, high-stakes)
- `/cs:freeze N` → cooldown lock (optional, irreversible)
```

## Why Phase 2 Isolation Matters

If advisors see each other's positions before forming their own, they anchor. Phase 2 isolation is the single highest-leverage practice in the board-meeting protocol — it surfaces the dissents that sycophancy would have suppressed.

## Why This Beats gstack's Review Chain

| | gstack `/autoplan` | `/cs:boardroom` |
|---|---|---|
| Roles | CEO → design → eng (3) | Up to 10 C-roles |
| Order | Sequential | Phase 2 isolation, then simultaneous |
| Dissent capture | Implicit | Explicit dissent column |
| Adversarial pass | No | Phase 4 devil's advocate |
| Output | Reviewed plan | Voted memo with dissent + kill criteria |

## Workflow

1. Read brief from `~/.claude/briefs/<file>`
2. Identify affected roles
3. Invoke each cs-* advisor independently (Phase 2)
4. Collect positions
5. Run cross-examination round (Phase 3)
6. Run `/em:challenge` on leading option (Phase 4)
7. Synthesize memo (Phase 5)
8. Hand off to founder (Phase 6)

## Routing

- `/cs:decide` — log approved memo
- `/cs:cross-eval` — high-stakes second opinion
- `/cs:freeze` — cooldown lock

## Related

- Agent: [`cs-chief-of-staff`](../../agents/cs-chief-of-staff.md)
- Skills: [`board-meeting`](../../../skills/board-meeting/SKILL.md), [`executive-mentor`](../../../executive-mentor/)

---

**Version:** 1.0.0
