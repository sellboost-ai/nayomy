---
name: "c-level-skills"
description_en: "Index and router for the C-level advisory bundle: 33 skills covering 14 C-suite roles, orchestration, cross-cutting capabilities, and culture. Use when exploring what the c-level-advisor bundle contains, deciding which advisor skill fits a question, or finding the entry points (cs-onboard interview, chief-of-staff routing, board-meeting protocol)."
description_tr: "C-seviyesi danışmanlık paketinin index ve router'ı: 14 C-suite rolü kapsayan 33 beceri, orkestrasyon, cross-cutting yetenekler ve kültür. C-level-advisor paketinin içeriğini keşfederken, bir soruya hangi advisor skill'in uygun olduğuna karar verirken veya giriş noktalarını (cs-onboard interview, chief-of-staff routing, board-meeting protocol) bulurken kullanın."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18313
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/c-level-skills/SKILL.md"
path: ".gemini/skills/c-level-skills/SKILL.md"
is_collection: false
body_length: 2615
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # C-Level Advisory Bundle — Index
  
  Bu bir danışman değildir; bundle indeksidir. Neyin var olduğunu ve nereden başlayacağınızı söyler; aşağıdaki beceriler işi yapar.
  
  ## Buradan Başlayın
  
  1. **Onboard** — `cs-onboard` becerisi kurucu röportajını çalıştırır (`/cs:setup`, 7 boyut, ~45 dk) ve `~/.claude/company-context.md` dosyasını yazar. Üç ayda bir `/cs:update` ile yenileyin. Bu, her danışmanın okuduğu kanonik bağlam şemasıdır.
  2. **Sor** — `chief-of-staff` becerisi herhangi bir soruyu doğru danışmana(lara) yönlendirir. Routing matrisi için 14 rolün tümünü görebilirsiniz.
  3. **Büyük kararlar** — `board-meeting` becerisi **6 aşamalı** bir müzakereyi çalıştırır: (1) bağlam toplama → (2) bağımsız katkılar (izole) → (3) eleştirmen analizi → (4) sentez → (5) kurucu incelemesi (tam durdurma) → (6) karar çıkarma. `/cs:boardroom` aracılığıyla c-level-agents eklentisinde çağrılır.
  4. **Bellek** — kararlar kanonik iki katmanlı düzende yer alır `~/.claude/decisions/{raw,approved}/` (bkz. `../agent-protocol/SKILL.md` → "Decision Memory (Canonical Layout)").
  
  ## Bundle'ın İçeriği (33 beceri)
  
  **14 C-suite rolü + eleştirmen (15):** ceo-advisor, cfo-advisor, cto-advisor, coo-advisor, cpo-advisor, cmo-advisor, cro-advisor, ciso-advisor, chro-advisor, general-counsel-advisor, chief-data-officer-advisor, chief-ai-officer-advisor, chief-customer-officer-advisor, vpe-advisor — artı executive-mentor eleştirmeni (kardeş eklenti).
  
  **Orkestrasyonu (6):** cs-onboard, chief-of-staff, board-meeting, decision-logger, agent-protocol, context-engine.
  
  **Kesişen konular (6):** board-deck-builder, scenario-war-room, competitive-intel, org-health-diagnostic, ma-playbook, intl-expansion.
  
  **Kültür ve işbirliği (6):** culture-architect, company-os, founder-coach, strategic-alignment, change-management, internal-narrative.
  
  Artı bu indeks (1). Bundle genelinde 37 stdlib-only Python aracı ve 68 referans doküman.
  
  ## Routing Hızlı Referansı
  
  Tam matris `../chief-of-staff/SKILL.md` ve `../chief-of-staff/references/routing-matrix.md` dosyasında. Birincil roller: CFO (sermaye/harcama), CRO (pipeline/satış), CMO (konumlandırma), CPO (roadmap/PMF), CTO (mimari), COO (ops/OKRs), CHRO (insan kaynakları), CISO (güvenlik), GC (sözleşmeler/term sheets), CDO (veri stratejisi/training-data hakları), CAIO (AI stratejisi/evals), CCO (elde tutma/GRR), VPE (teslimat/DORA), CEO (yön). Multi-domain veya geri dönülemez → board meeting.
  
  ## İlgili Katmanlar
  
  - `../../c-level-agents/` — 13 cs-* persona ajanı + bu beceriler üzerine 21 `/cs:*` slash komutu
  - `../../executive-mentor/` — `/em:*` eleştirmen komutları
  - `../../CLAUDE.md` — tam mimari diyagram ve entegrasyon kılavuzu
---

# C-Level Advisory Bundle — Index

This is the bundle index, not an advisor. It tells you what exists and where to start; the skills below do the work.

## Start Here

1. **Onboard** — the `cs-onboard` skill runs the founder interview (`/cs:setup`, 7 dimensions, ~45 min) and writes `~/.claude/company-context.md`. Refresh quarterly with `/cs:update`. This is the canonical context schema every advisor reads.
2. **Ask** — the `chief-of-staff` skill routes any question to the right advisor(s). See its routing matrix for all 14 roles.
3. **Big decisions** — the `board-meeting` skill runs a **6-phase** deliberation: (1) context gathering → (2) independent contributions (isolated) → (3) critic analysis → (4) synthesis → (5) founder review (full stop) → (6) decision extraction. Invoked via `/cs:boardroom` in the c-level-agents plugin.
4. **Memory** — decisions land in the canonical two-layer layout `~/.claude/decisions/{raw,approved}/` (see `../agent-protocol/SKILL.md` → "Decision Memory (Canonical Layout)").

## What's in the Bundle (33 skills)

**14 C-suite roles + critic (15):** ceo-advisor, cfo-advisor, cto-advisor, coo-advisor, cpo-advisor, cmo-advisor, cro-advisor, ciso-advisor, chro-advisor, general-counsel-advisor, chief-data-officer-advisor, chief-ai-officer-advisor, chief-customer-officer-advisor, vpe-advisor — plus the executive-mentor critic (sibling plugin).

**Orchestration (6):** cs-onboard, chief-of-staff, board-meeting, decision-logger, agent-protocol, context-engine.

**Cross-cutting (6):** board-deck-builder, scenario-war-room, competitive-intel, org-health-diagnostic, ma-playbook, intl-expansion.

**Culture & collaboration (6):** culture-architect, company-os, founder-coach, strategic-alignment, change-management, internal-narrative.

Plus this index (1). 37 stdlib-only Python tools and 68 reference docs across the bundle.

## Routing Quick Reference

Full matrix in `../chief-of-staff/SKILL.md` and `../chief-of-staff/references/routing-matrix.md`. Primary roles: CFO (capital/burn), CRO (pipeline/sales), CMO (positioning), CPO (roadmap/PMF), CTO (architecture), COO (ops/OKRs), CHRO (people), CISO (security), GC (contracts/term sheets), CDO (data strategy/training-data rights), CAIO (AI strategy/evals), CCO (retention/GRR), VPE (delivery/DORA), CEO (direction). Multi-domain or irreversible → board meeting.

## Related Layers

- `../../c-level-agents/` — 13 cs-* persona agents + 21 `/cs:*` slash commands on top of these skills
- `../../executive-mentor/` — adversarial `/em:*` critic commands
- `../../CLAUDE.md` — full architecture diagram and integration guide
