---
name: "founder-mode"
description_en: "/cs:founder-mode <question> — Auto-routes any founder question to the right C-role advisor or to /cs:boardroom for multi-role topics. The single-command entry point. Use when a founder asks any strategic question without knowing which advisor or command fits — e.g. 'runway pressure' routes to the CFO, 'gross retention dropped' routes to the CCO."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 18313
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/founder-mode/SKILL.md"
path: ".gemini/skills/founder-mode/SKILL.md"
is_collection: false
body_length: 4079
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /cs:founder-mode — Otomatik Yönlendirici
  
  **Komut:** `/cs:founder-mode <soru>`
  
  Bir kurucunun hatırlaması gereken tek komut. Soruyu otomatik olarak doğru C-role'e yönlendirir veya çok-rol durumunda `/cs:boardroom` tetikler.
  
  Bu **öldürücü komut** — "hangi slash komutunu kullanacağımı bilmiyorum" sorusunun cevabı. Soruyu yazın; sistem doğru odayı bulur.
  
  ## Yönlendirme Mantığı
  
  Yönlendirici (`cs-chief-of-staff` aracılığıyla) anahtar kelime + niyet eşleştirmesi yapar:
  
  | Soruda Sinyal | Yönlendirme |
  |---|---|
  | burn, runway, fundraise, dilution, model, LTV, CAC | `cs-cfo-advisor` |
  | pipeline, win rate, forecast, quota, ramp, sales motion | `cs-cro-advisor` |
  | positioning, ICP, message, brand, channel, campaign | `cs-cmo-advisor` |
  | roadmap, PMF, JTBD, North Star, RICE, kill | `cs-cpo-advisor` |
  | cadence, OKR, scorecard, DRI, operating system, rhythm | `cs-coo-advisor` |
  | hiring, comp, ladder, level, attrition, eNPS, equity | `cs-chro-advisor` |
  | security, threat, breach, compliance, audit, SOC 2 | `cs-ciso-advisor` |
  | architecture, scaling, tech debt, SLO, latency | `cs-cto-advisor` |
  | contract, IP, term sheet, regulator, license | `cs-general-counsel-advisor` |
  | retention, GRR, NRR, churn, customer success, CSM, time-to-value, renewals | `cs-cco-advisor` |
  | training data, data rights, consent, data asset, warehouse, lakehouse, data mesh | `cs-cdo-advisor` |
  | model selection, eval, hallucination, AI risk, EU AI Act, fine-tune, build vs buy AI | `cs-caio-advisor` |
  | DORA, cycle time, deploy frequency, eng hiring funnel, team topology, delivery throughput | `cs-vpe-advisor` |
  | strategy, vision, board, M&A, raise, exit | `cs-ceo-advisor` |
  | **2+ farklı rol sinyali** | `/cs:boardroom` |
  | **muğlak** | `/cs:office-hours` önce, sonra yönlendir |
  
  ## İş Akışı
  
  1. Soruyu rol sinyalleri için parse et
  2. Tam olarak bir rol varsa: o cs-* agentini doğrudan çağır
  3. 2+ rol varsa: `/cs:brief` üzerinden kısa özet oluştur ve `/cs:boardroom` tetikle
  4. Muğlak / sinyal eşleşmesi yoksa: kurucuyu daha keskinleştirmesi için `/cs:office-hours` tetikle
  5. Yönlendirme kararını (raw layer) `decision-logger` aracılığıyla logla
  
  ## Çıktı
  
  Yönlendirici üç yanıttan birini yayınlar:
  
  ### Tek-rol yönlendirmesi
  ```
  **Routing:** cs-cfo-advisor
  **Why:** Question hits burn rate and unit economics.
  **Next:** Invoking cs-cfo-advisor with company-context loaded.
  
  [Danışmanın yanıtı takip eder]
  ```
  
  ### Çok-rol yönlendirmesi
  ```
  **Routing:** /cs:boardroom
  **Why:** Question touches CFO + CMO + CPO (pricing change has finance, positioning, and product implications).
  **Next:** Building brief via /cs:brief, then running boardroom.
  
  Brief saved: ~/.claude/briefs/2026-05-12-pricing-v3.md
  Run: /cs:boardroom ~/.claude/briefs/2026-05-12-pricing-v3.md
  ```
  
  ### Muğlak → ofis saatleri
  ```
  **Routing:** /cs:office-hours
  **Why:** Question is too broad ("should we grow faster?"). Need framing before any advisor can help.
  **Next:** Six-question intake.
  
  [Ofis saatleri soruları takip eder]
  ```
  
  ## Bu Neden Öldürücü Komut
  
  gstack, kurucunun 23 slash komutu bilmesini ve doğru olanı seçmesini gerektirir. Bu bilişsel bir vergidir. `/cs:founder-mode` bunu bire indirger — sistem seçer. Bu aynı zamanda kalıcı belleğin önemli olduğu yerdir: company-context.md + decision-logger ile yönlendirici zaten kararlaştırılmış olanları bilir ve tekrar tartışmaz.
  
  ## Örnekler
  
  ```
  /cs:founder-mode "şimdi Series B yatırımı almalı mıyız yoksa 6 ay beklemeli miyiz?"
     → boardroom (CFO + CEO + CRO tetiklendi)
  
  /cs:founder-mode "bu ay kazanç oranı %20 düştü"
     → cs-cro-advisor
  
  /cs:founder-mode "gross retention bu çeyrek 5 puan düştü"
     → cs-cco-advisor
  
  /cs:founder-mode "VP Marketing işe alalım"
     → boardroom (CHRO + CMO + CFO tetiklendi)
  
  /cs:founder-mode "daha hızlı büyümeliyiz?"
     → /cs:office-hours (çok muğlak)
  ```
  
  ## İlgili
  
  - Agent: [`cs-chief-of-staff`](../../agents/cs-chief-of-staff.md) — yönlendirmeyi yapar
  - Skill: [`chief-of-staff`](../../../skills/chief-of-staff/SKILL.md) — yönlendirme mantığı
  - Skill: [`context-engine`](../../../skills/context-engine/SKILL.md) — context yükler
  
  ---
  
  **Sürüm:** 1.0.0
---

# /cs:founder-mode — The Auto-Router

**Command:** `/cs:founder-mode <question>`

The single command a founder needs to remember. Routes the question to the right C-role automatically, or triggers `/cs:boardroom` if multi-role.

This is the **killer command** — the answer to "I don't know which slash command to use." Type the question; the system figures out the room.

## Routing Logic

The router (via `cs-chief-of-staff`) does keyword + intent matching:

| Signal in question | Route |
|---|---|
| burn, runway, fundraise, dilution, model, LTV, CAC | `cs-cfo-advisor` |
| pipeline, win rate, forecast, quota, ramp, sales motion | `cs-cro-advisor` |
| positioning, ICP, message, brand, channel, campaign | `cs-cmo-advisor` |
| roadmap, PMF, JTBD, North Star, RICE, kill | `cs-cpo-advisor` |
| cadence, OKR, scorecard, DRI, operating system, rhythm | `cs-coo-advisor` |
| hiring, comp, ladder, level, attrition, eNPS, equity | `cs-chro-advisor` |
| security, threat, breach, compliance, audit, SOC 2 | `cs-ciso-advisor` |
| architecture, scaling, tech debt, SLO, latency | `cs-cto-advisor` |
| contract, IP, term sheet, regulator, license | `cs-general-counsel-advisor` |
| retention, GRR, NRR, churn, customer success, CSM, time-to-value, renewals | `cs-cco-advisor` |
| training data, data rights, consent, data asset, warehouse, lakehouse, data mesh | `cs-cdo-advisor` |
| model selection, eval, hallucination, AI risk, EU AI Act, fine-tune, build vs buy AI | `cs-caio-advisor` |
| DORA, cycle time, deploy frequency, eng hiring funnel, team topology, delivery throughput | `cs-vpe-advisor` |
| strategy, vision, board, M&A, raise, exit | `cs-ceo-advisor` |
| **2+ signals from different roles** | `/cs:boardroom` |
| **ambiguous** | `/cs:office-hours` first, then route |

## Workflow

1. Parse the question for role signals
2. If exactly one role: invoke that cs-* agent directly
3. If 2+ roles: build a brief via `/cs:brief` and trigger `/cs:boardroom`
4. If ambiguous / no signal match: trigger `/cs:office-hours` to force the founder to sharpen
5. Log the routing decision (raw layer) via `decision-logger`

## Output

The router emits one of three responses:

### Single-role route
```
**Routing:** cs-cfo-advisor
**Why:** Question hits burn rate and unit economics.
**Next:** Invoking cs-cfo-advisor with company-context loaded.

[Advisor's response follows]
```

### Multi-role route
```
**Routing:** /cs:boardroom
**Why:** Question touches CFO + CMO + CPO (pricing change has finance, positioning, and product implications).
**Next:** Building brief via /cs:brief, then running boardroom.

Brief saved: ~/.claude/briefs/2026-05-12-pricing-v3.md
Run: /cs:boardroom ~/.claude/briefs/2026-05-12-pricing-v3.md
```

### Ambiguous → office hours
```
**Routing:** /cs:office-hours
**Why:** Question is too broad ("should we grow faster?"). Need framing before any advisor can help.
**Next:** Six-question intake.

[Office hours questions follow]
```

## Why This Is the Killer Command

gstack requires the founder to know all 23 slash commands and pick the right one. That's a cognitive tax. `/cs:founder-mode` collapses that to one — the system picks. This is also where persistent memory pays off: with company-context.md + decision-logger, the router knows what's already been decided and won't re-litigate.

## Examples

```
/cs:founder-mode "should we raise a Series B now or wait 6 months?"
   → boardroom (CFO + CEO + CRO touched)

/cs:founder-mode "the win rate dropped 20% this month"
   → cs-cro-advisor

/cs:founder-mode "gross retention dropped 5 points this quarter"
   → cs-cco-advisor

/cs:founder-mode "let's hire a VP Marketing"
   → boardroom (CHRO + CMO + CFO touched)

/cs:founder-mode "should we be growing faster?"
   → /cs:office-hours (too ambiguous)
```

## Related

- Agent: [`cs-chief-of-staff`](../../agents/cs-chief-of-staff.md) — does the routing
- Skill: [`chief-of-staff`](../../../skills/chief-of-staff/SKILL.md) — routing logic
- Skill: [`context-engine`](../../../skills/context-engine/SKILL.md) — loads context

---

**Version:** 1.0.0
