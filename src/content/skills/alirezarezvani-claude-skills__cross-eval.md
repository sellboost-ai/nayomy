---
name: "cross-eval"
description_en: "/cs:cross-eval <memo> — Multi-model consensus on a board memo or strategy brief. Claude + Codex + Gemini cross-review with graceful degradation. Use when a high-stakes memo needs an independent sanity check before the boardroom — e.g. a bet-the-company pivot or fundraise terms."
description_tr: "/cs:cross-eval <memo> — Bir board memo veya strateji belgesine dair multi-model konsensus. Claude + Codex + Gemini cross-review ve graceful degradation desteği. Şirketi değiştirecek pivot ya da fundraising şartları gibi kritik kararlar önce bağımsız bir sanity check yapmanız gerektiğinde kullanın."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 18572
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/cross-eval/SKILL.md"
path: ".gemini/skills/cross-eval/SKILL.md"
is_collection: false
body_length: 3948
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /cs:cross-eval — Çok Modelli Fikir Birliği
  
  **Komut:** `/cs:cross-eval <memo-or-brief>`
  
  Aynı notu birden fazla model sağlayıcısından geçirir ve farklılıkları uzlaştırır. **Yüksek riskli, geri alınamaz kararlar** için kullanın; tek model bias'ı çok maliyetli olduğunda: M&A, büyük finansman turları, işten çıkarmalar, stratejik dönüşümler, düzenleme taahhütleri.
  
  gstack'ın `/codex` çapraz inceleme deseni uyarlanmıştır; **kod PR'leri** yerine **iş notları** için genelleştirilmiştir.
  
  ## Ne Zaman Çalıştırılır
  
  - Bir term sheet imzalamadan önce
  - Bir işten çıkarma duyurusu yapmadan önce
  - Düzenlü bir pazara bağlanmadan önce
  - Kararını geri almak şirketin 6 aydan fazla zamanına mal olacak her karar öncesinde
  - Yönetim kurulu oyu bölümlü veya ciddi bir muhalefet olduğunda
  
  ## Kullanılan Modeller (zarif bozulma)
  
  Komut, kullanılabilir her modeli sırayla çağırmaya çalışır:
  
  1. **Claude** (birincil, her zaman kullanılabilir) — yönetim kurulunun yerel sesi
  2. **Codex / OpenAI** (`OPENAI_API_KEY` veya `codex` CLI kullanılabilirse)
  3. **Gemini** (`GEMINI_API_KEY` veya `gemini` CLI kullanılabilirse)
  
  Yalnızca Claude kullanılabilirse, komut **ters sistem istemlerinde Claude-only modu** çalıştırır ve çıktıyı net şekilde tek model olarak etiketler.
  
  ## İş Akışı
  
  1. Notu / özeti oku
  2. Kullanılabilir model CLI'ları / API anahtarları için ortamı sonda
  3. Her kullanılabilir model için:
     - Notu bu istem ön ekiyle gönder:
       > "Bağımsız C-suite gözlemcisisiniz. Aşağıdaki, başka bir şirketin yönetim kurulundan gelen bir yönetim kurulu notu. İlk 3 endişeyi, ilk 3 desteği ve oyunuzu (ONAYLA / REDDET / ERTEL) belirleyin. Saygı çerçevesinde katılmayın — notu'nun akıl yürütmesi kanıtlanana kadar kusurlu olduğunu varsayın."
  4. Üç bağımsız inceleme topla
  5. Uzlaştır: nerede fikir birliği içindeler? Nerede ayrışıyorlar?
  6. Farklılıkları kurucuya yönelik sorular olarak ortaya çıkar
  
  ## Çıktı Formatı
  
  `~/.claude/cross-eval/YYYY-MM-DD-<slug>.md` dizinine kaydedilir:
  
  ```markdown
  # Cross-Eval: <memo title>
  **Date:** YYYY-MM-DD
  **Memo reviewed:** <link>
  **Models invoked:** Claude / Codex / Gemini (or noted fallbacks)
  
  ## Vote Tally
  | Model | Vote | Confidence |
  |---|---|---|
  | Claude | APPROVE | High |
  | Codex | DEFER | Med |
  | Gemini | APPROVE | Low |
  
  ## Consensus Concerns (≥2 models flagged)
  1. <concern> — flagged by Claude + Codex
  2. <concern> — flagged by all 3
  
  ## Divergent Concerns (1 model flagged)
  - <Codex only:> <concern> — worth a second look
  - <Gemini only:> <concern> — likely noise, but check
  
  ## Consensus Supports (≥2 models endorsed)
  1. <support>
  2. <support>
  
  ## Recommendation
  - 🟢 GO if 2+ models APPROVE and no CRITICAL concerns from any model
  - 🟡 PAUSE if any model is DEFER or any concern is CRITICAL
  - 🔴 STOP if 2+ models REJECT
  
  ## Open Questions for Founder
  1. <question raised by divergence>
  2. <question raised by divergence>
  ```
  
  ## Neden Bu Önemli
  
  Tek model tavsiyelerinin sistematik bias'ları vardır. Claude yararlı olmaya eğilimlidir ve riski hafife alabilir. Codex (OpenAI), gelişen pazar ve düzenleme konularında daha temkinlidir. Gemini, teknik ölçek iddialarında daha temkinlidir. Anlaşmazlık sinyal'dir, gürültü değil.
  
  Bu, **geri alınamaz olmadan önce emniyet ağı** — dış hukuk müşaviri yerine veya gerçek bir yönetim kurulu değildir.
  
  ## Zarif Bozulma
  
  Yalnızca Claude kullanılabilirse:
  
  ```markdown
  **Models available:** Claude only
  **Mode:** ADVERSARIAL — 3 bağımsız Claude geçişini farklı sistem istemli olarak çalıştırma:
    1. Standard reviewer
    2. Devil's advocate (3 kritik endişe bulmalı)
    3. Steelman (onaylamak için 3 en güçlü nedeni bulmalı)
  
  Bu, doğru çok modelli'den daha zayıftır. Sonucu tahmine dayalı olarak görün, kesin değil.
  ```
  
  ## Yönlendirme
  
  - `/cs:decide` — fikir birliği ONAYLA ise
  - `/cs:freeze` — fikir birliği ERTEL ise
  - `/cs:boardroom` (yeniden çalıştır) — fikir birliği REDDET ise
  
  ## İlgili
  
  - Beceriler: [`board-meeting`](../../../skills/board-meeting/SKILL.md), [`executive-mentor`](../../../executive-mentor/)
  - İlham: gstack'ın `/codex` çapraz inceleme deseni (iş notlarına uyarlanmış)
  
  ---
  
  **Sürüm:** 1.0.0
---

# /cs:cross-eval — Multi-Model Consensus

**Command:** `/cs:cross-eval <memo-or-brief>`

Runs the same memo through multiple model providers and reconciles divergences. Use for **high-stakes, irreversible decisions** where single-model bias is too costly: M&A, major fundraises, layoffs, strategic pivots, regulatory commitments.

Adapted from gstack's `/codex` cross-review pattern, generalized to **business memos** instead of code PRs.

## When to Run

- Before signing a term sheet
- Before announcing a layoff
- Before committing to a regulated market
- Before any decision where reversing costs > 6 months of company time
- When the boardroom vote was split or had a CRITICAL dissent

## Models Used (graceful degradation)

The command tries to invoke each available model in order:

1. **Claude** (primary, always available) — the boardroom's native voice
2. **Codex / OpenAI** (if `OPENAI_API_KEY` or `codex` CLI available)
3. **Gemini** (if `GEMINI_API_KEY` or `gemini` CLI available)

If only Claude is available, the command runs **Claude-only with adversarial mode** — same model, different prompt seeds — and clearly labels the output as single-model.

## Workflow

1. Read the memo / brief
2. Probe environment for available model CLIs / API keys
3. For each available model:
   - Send the memo with this prompt prefix:
     > "You are an independent C-suite reviewer. The following is a board memo from another company's boardroom. Identify the top 3 concerns, the top 3 supports, and your vote (APPROVE / REJECT / DEFER). Do not deferentially agree — assume the memo's reasoning is flawed until proven otherwise."
4. Collect three independent reviews
5. Reconcile: where do they agree? Where do they diverge?
6. Surface the divergences as questions for the founder

## Output Format

Saved to `~/.claude/cross-eval/YYYY-MM-DD-<slug>.md`:

```markdown
# Cross-Eval: <memo title>
**Date:** YYYY-MM-DD
**Memo reviewed:** <link>
**Models invoked:** Claude / Codex / Gemini (or noted fallbacks)

## Vote Tally
| Model | Vote | Confidence |
|---|---|---|
| Claude | APPROVE | High |
| Codex | DEFER | Med |
| Gemini | APPROVE | Low |

## Consensus Concerns (≥2 models flagged)
1. <concern> — flagged by Claude + Codex
2. <concern> — flagged by all 3

## Divergent Concerns (1 model flagged)
- <Codex only:> <concern> — worth a second look
- <Gemini only:> <concern> — likely noise, but check

## Consensus Supports (≥2 models endorsed)
1. <support>
2. <support>

## Recommendation
- 🟢 GO if 2+ models APPROVE and no CRITICAL concerns from any model
- 🟡 PAUSE if any model is DEFER or any concern is CRITICAL
- 🔴 STOP if 2+ models REJECT

## Open Questions for Founder
1. <question raised by divergence>
2. <question raised by divergence>
```

## Why This Matters

Single-model recommendations have systematic biases. Claude trends helpful and may under-weight risk. Codex (OpenAI) trends more cautious on emerging-market and regulatory topics. Gemini trends more cautious on technical scale claims. Disagreement is signal, not noise.

This is the **safety net before irreversibility** — not a replacement for outside counsel or a real board.

## Graceful Degradation

If only Claude is available:

```markdown
**Models available:** Claude only
**Mode:** ADVERSARIAL — running 3 independent Claude passes with different system prompts:
  1. Standard reviewer
  2. Devil's advocate (must find 3 critical concerns)
  3. Steelman (must find 3 strongest reasons to approve)

This is weaker than true multi-model. Treat the result as suggestive, not conclusive.
```

## Routing

- `/cs:decide` — if consensus is GO
- `/cs:freeze` — if consensus is PAUSE
- `/cs:boardroom` (re-run) — if consensus is STOP

## Related

- Skills: [`board-meeting`](../../../skills/board-meeting/SKILL.md), [`executive-mentor`](../../../executive-mentor/)
- Inspiration: gstack's `/codex` cross-review pattern (adapted to business memos)

---

**Version:** 1.0.0
