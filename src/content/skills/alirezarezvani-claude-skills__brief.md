---
name: "brief"
description_en: "/cs:brief <topic> — Generate a one-page strategy brief from an office-hours intake. First step in the strategic sprint pipeline."
description_tr: "/cs:brief <topic> — Office hours görüşmesinden tek sayfalık bir strateji özeti oluştur. Stratejik sprint pipeline'ının ilk adımı."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/brief/SKILL.md"
path: ".gemini/skills/brief/SKILL.md"
is_collection: false
body_length: 3361
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /cs:brief — Tek Sayfalık Strateji Özeti

  **Komut:** `/cs:brief <konu>` veya `/cs:brief <office-hours-çıktısı>`

  Girdiyi (ham soru veya office-hours çıktısı) yönetim kurulunun tartışabileceği tek sayfalık strateji özeti haline dönüştürür. Bu, stratejik sprint pipeline'ının **Adım 1**'idir.

  ## Pipeline Pozisyonu

  ```
  /cs:office-hours  →  /cs:brief  →  /cs:boardroom  →  /cs:decide  →  /cs:execute  →  /cs:post-mortem
                         ↑ siz buradaysınız
  ```

  ## Girdiler

  - Bir konu dizesi, **veya**
  - Office-hours özeti (tercih edilir — daha titiz)
  - `~/.claude/company-context.md` (otomatik olarak yüklenir)

  ## Çıktı

  `~/.claude/briefs/YYYY-MM-DD-<slug>.md` altında bu yapıya sahip tek bir Markdown dosyası:

  ```markdown
  # Strateji Özeti: <konu>
  **Tarih:** YYYY-MM-DD
  **Yazar:** cs-chief-of-staff
  **Durum:** TASLAK | İNCELEMEDE | ONAYLANDI | EMEKLİ

  ## Bağlam
  [1-2 paragraf: şirketin bu konuda bugün nerede durduğu — company-context.md'den alınmıştır]

  ## Soru
  [Yönetim kurulunun cevaplaması gereken tek cümlelik soru]

  ## Seçenekler
  1. **Seçenek A:** <ad> — <tek cümlelik özet>
  2. **Seçenek B:** <ad> — <tek cümlelik özet>
  3. **Seçenek C:** <ad> — <tek cümlelik özet>

  (Minimum 2 seçenek. "Hiçbir şey yapma" her zaman bir seçenektir.)

  ## Varsayımlar
  - <varsayım 1 — açık>
  - <varsayım 2>
  - <varsayım 3>

  ## Kısıtlamalar
  - Zaman: <ne zaman karar verilmeli>
  - Para: <bütçe zarfı>
  - İnsan: <kim yeniden tahsis edilebilir / edilemez>
  - Geri Çevirme Olanağı: <tek yönlü kapı | iki yönlü kapı>

  ## Etkilenen Roller
  [Hangi cs-* danışmanları görüş vermelidir. /cs:boardroom panel kompozisyonunu yönlendirmek için kullanılır.]

  - [ ] cs-ceo-advisor
  - [ ] cs-cfo-advisor
  - [ ] cs-cto-advisor
  - [ ] cs-cmo-advisor
  - [ ] cs-cro-advisor
  - [ ] cs-cpo-advisor
  - [ ] cs-coo-advisor
  - [ ] cs-chro-advisor
  - [ ] cs-ciso-advisor
  - [ ] cs-chief-of-staff

  ## Başarı Kriterleri
  [Başarıyı tanımlayan ölçülebilir sonuçlar — karara GÖRE ÖNCE belirlenir]
  - <metrik 1, eşik, zaman aralığı>
  - <metrik 2, eşik, zaman aralığı>

  ## Durdurma Kriterleri
  [90 gün içinde bunun yanlış bir karar olduğunu söyleyen sinyal nedir]
  - <metrik, eşik, eksik kalırsa alınacak aksiyon>
  ```

  ## İş Akışı

  1. context-engine aracılığıyla company-context.md yükleyin
  2. Giriş office-hours çıktısı ise, 6 yanıtı parse edin
  3. Giriş ham bir konu ise, kurucuya eksik parçaları sorun
  4. 2-3 seçenek taslağını hazırlayın (hiçbir zaman sadece bir tane — her özette bir karşıt faktör gereklidir)
  5. Varsayımları ve kısıtlamaları açık hale getirin
  6. Etkilenen rolleri belirleyin → `/cs:boardroom` için panel kompozisyonunu yönlendirir
  7. Başarı + durdurma kriterlerini karara GÖRE ÖNCE yazın (bu titizlik anıdır)
  8. `~/.claude/briefs/` içine kaydedin

  ## Bu Adımın Var Olma Nedeni

  En büyük karar alma hatası, sorunun üzerinde anlaşmadan önce implementasyonu tartışmaktır. Özet, soruyu, seçenekleri ve başarı kriterlerini kilitler, böylece yönetim kurulu kapsam kayması olmadan tartışabilir.

  Bu aynı zamanda **artifact handoff**'dur — sonraki komut bu dosyayı tüketir, belleğinizi değil.

  ## Yönlendirme

  - `/cs:boardroom <brief>` — çok rol tartışması
  - `/cs:cross-eval <brief>` — boardroom'dan önce çok model sağlaması (yüksek riskli olanlar için)
  - `/cs:freeze <brief>` — geri alınamaz kararlar için soğutma kilidi

  ## İlgili

  - Agent: [`cs-chief-of-staff`](../../agents/cs-chief-of-staff.md)
  - Yetenekler: [`context-engine`](../../../skills/context-engine/SKILL.md), [`board-meeting`](../../../skills/board-meeting/SKILL.md)

  ---

  **Sürüm:** 1.0.0
---

# /cs:brief — One-Page Strategy Brief

**Command:** `/cs:brief <topic>` or `/cs:brief <office-hours-output>`

Turns intake (raw question or office-hours output) into a one-page strategy brief that the boardroom can deliberate on. This is **Step 1** of the strategic sprint pipeline.

## Pipeline Position

```
/cs:office-hours  →  /cs:brief  →  /cs:boardroom  →  /cs:decide  →  /cs:execute  →  /cs:post-mortem
                       ↑ you are here
```

## Inputs

- A topic string, **or**
- An office-hours brief (preferred — more rigor)
- `~/.claude/company-context.md` (loaded automatically)

## Output

A single Markdown file under `~/.claude/briefs/YYYY-MM-DD-<slug>.md` with this structure:

```markdown
# Strategy Brief: <topic>
**Date:** YYYY-MM-DD
**Author:** cs-chief-of-staff
**Status:** DRAFT | UNDER REVIEW | APPROVED | RETIRED

## Context
[1-2 paragraphs: where the company sits today on this topic — pulled from company-context.md]

## Question
[The one sentence question the boardroom must answer]

## Options
1. **Option A:** <name> — <one-sentence summary>
2. **Option B:** <name> — <one-sentence summary>
3. **Option C:** <name> — <one-sentence summary>

(Minimum 2 options. "Do nothing" is always an option.)

## Assumptions
- <assumption 1 — explicit>
- <assumption 2>
- <assumption 3>

## Constraints
- Time: <by when must this decide>
- Money: <budget envelope>
- People: <who can / can't be reallocated>
- Reversibility: <one-way door | two-way door>

## Affected Roles
[Which cs-* advisors should weigh in. Used to route to /cs:boardroom panel composition.]

- [ ] cs-ceo-advisor
- [ ] cs-cfo-advisor
- [ ] cs-cto-advisor
- [ ] cs-cmo-advisor
- [ ] cs-cro-advisor
- [ ] cs-cpo-advisor
- [ ] cs-coo-advisor
- [ ] cs-chro-advisor
- [ ] cs-ciso-advisor
- [ ] cs-chief-of-staff

## Success Criteria
[Measurable outcomes that define success — set BEFORE the decision]
- <metric 1, threshold, timeframe>
- <metric 2, threshold, timeframe>

## Kill Criteria
[What signal would tell you in 90 days that this was the wrong call]
- <metric, threshold, action if missed>
```

## Workflow

1. Load company-context.md via context-engine
2. If input is office-hours output, parse the 6 answers
3. If input is a raw topic, prompt the founder for the missing pieces
4. Draft 2-3 options (never just one — every brief needs a counterfactual)
5. Make assumptions and constraints explicit
6. Identify affected roles → drives panel composition for `/cs:boardroom`
7. Write success + kill criteria BEFORE the decision (this is the rigor moment)
8. Save to `~/.claude/briefs/`

## Why This Step Exists

The biggest decision-making failure is debating implementation before agreeing on the question. The brief locks the question, options, and success criteria so the boardroom can deliberate without scope creep.

This is also the **artifact handoff** — the next command consumes this file, not your memory.

## Routing

- `/cs:boardroom <brief>` — multi-role deliberation
- `/cs:cross-eval <brief>` — multi-model sanity check before boardroom (for high-stakes)
- `/cs:freeze <brief>` — cooldown lock for irreversible decisions

## Related

- Agent: [`cs-chief-of-staff`](../../agents/cs-chief-of-staff.md)
- Skills: [`context-engine`](../../../skills/context-engine/SKILL.md), [`board-meeting`](../../../skills/board-meeting/SKILL.md)

---

**Version:** 1.0.0
