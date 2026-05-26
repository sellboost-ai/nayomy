---
name: "c-level-agents"
description_en: "Founder-mode executive team. 8 cs-* C-suite agents (CFO, CMO, CRO, CPO, COO, CHRO, CISO, Chief of Staff) and 17 /cs:* slash commands for forcing-question office hours, multi-role boardroom deliberation, strategic sprint pipeline, and meta routing. Use when the founder needs a virtual executive team, when invoking /cs:* commands, or when orchestrating multi-role decisions."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/c-level-agents/SKILL.md"
path: ".gemini/skills/c-level-agents/SKILL.md"
is_collection: false
body_length: 3624
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # c-level-agents — Kurucu Modu Yönetim Kurulu

  Slash komutları ve persona ajanları aracılığıyla sunulan sanal C-suite.

  ## Anahtar Kelimeler

  kurucu modu, sanal c-suite, yönetim ekibi, boardroom, ofis saatleri, CFO incelemesi, CMO incelemesi, stratejik sprint, karar günlüğü, çapraz model fikir birliği, persona ajanları, chief of staff, zorlayıcı sorular

  ## Bu Plugin'in Sağladıkları

  ### 8 cs-* Ajanı (`agents/` içinde)

  Her ajan mevcut bir c-level becerisini sarmaladığı ve şu özellikleri ekler:
  - Belirgin bir bilişsel ses (sayısal şüpheci, anlatı-öncelikli, vb.)
  - Role özgü zorlayıcı sorular
  - Beceri Python araçlarına bağlı iş akışı orkestrasyonu
  - Çıktı şablonu: Bottom Line → Ne → Neden → Nasıl Hareket Edilir → Senin Kararın

  Ses özellikleri için `../references/persona-voices.md` dosyasına bakın.

  ### 17 /cs:* Slash Komutu (`skills/` içinde)

  **Zorlayıcı-soru ofis saatleri (8):**
  - `/cs:office-hours` — YC tarzı 6 soruluk danışma
  - `/cs:cfo-review` — birim ekonomileri, para kaynağı, seyreltme
  - `/cs:cmo-review` — ICP, CAC geri dönüşü, konumlandırma
  - `/cs:cpo-review` — RICE, JTBD, North Star, PMF
  - `/cs:cro-review` — pipeline kapsama, kazanma oranı, NRR
  - `/cs:cto-review` — mimari risk, ölçekleme kenarı
  - `/cs:ciso-review` — tehdit modeli, etki alanı, uyumluluk
  - `/cs:gc-review` — sözleşmeler, IP, düzenleyici, şart sayfaları

  **Stratejik sprint pipeline (5):**
  - `/cs:brief` → `/cs:boardroom` → `/cs:decide` → `/cs:execute` → `/cs:post-mortem`

  **Meta + güvenlik (4):**
  - `/cs:founder-mode` — uygun C-role'e otomatik yönlendir
  - `/cs:onboard` — kurucu görüşmesi → `company-context.md`
  - `/cs:cross-eval` — çok-model fikir birliği
  - `/cs:freeze` — bir karar üzerinde soğutma kilidi

  ## Hızlı Başlangıç

  ```
  /cs:onboard                          # önce şirket bağlamını doldur
  /cs:office-hours "VP Sales kiralamak üzere miyiz?"
  /cs:founder-mode "para kaynağı baskısı"   # otomatik olarak CFO'ya yönlendir
  /cs:boardroom briefs/pricing-v3.md   # tam panel
  ```

  ## Mimari

  ```
  Kullanıcı sorusu
     │
     ├─ Tek-rol? → cs-{role}-advisor ajanı
     │                     ↓
     │                  /cs:{role}-review komutu (zorlayıcı Sorular)
     │                     ↓
     │                  Beceri araçları + referanslar
     │                     ↓
     │                  Bottom Line + Memorandum
     │
     └─ Çok-rol?  → /cs:boardroom
                          ↓
                       6 aşamalı müzakere (Aşama 2 izolasyonu)
                          ↓
                       /cs:decide → decision-logger (iki katmanlı bellek)
                          ↓
                       /cs:execute → 90 günlük plan
  ```

  ## Entegrasyon Noktaları

  - **Mevcut 28 c-level becerisi** — sarmalanmış, değiştirilmemiş
  - **decision-logger** — her `/cs:decide` buraya yazılır
  - **chief-of-staff** — ajanın orkestraklığını yaptığı yönlendirme katmanı
  - **board-meeting** — `/cs:boardroom` komutunun çalıştığı protokol
  - **llm-wiki** — isteğe bağlı kalıcı bellek köprüsü (`../references/llm-wiki-bridge.md` bkz.)
  - **executive-mentor** — karşıt `/em:*` komutları temiz bir şekilde üstüne yığılır

  ## Tasarım İlkeleri

  1. **Ses başlı ve sonu kapalı, analiz tarafsızdır.**
  2. **Yapıtlar sohbetin üzerine.** Her komut sonraki komutun tüketeceği bir Markdown yapıtı üretir.
  3. **Boardroom'da Aşama 2 izolasyonu.** Çapraz sorgulama öncesi bağımsız düşünme.
  4. **Zarif bozunma.** `/cs:cross-eval` Claude-only'e geri döner.
  5. **Ücretli bağımlılık yok.** Tüm Python araçları yalnızca stdlib'dir.

  ## Referanslar

  - [persona-voices.md](../../references/persona-voices.md)
  - [llm-wiki-bridge.md](../../references/llm-wiki-bridge.md)
  - [Üst c-level CLAUDE.md](../../../CLAUDE.md)
  - [Mevcut executive-mentor kardeş](../../../executive-mentor/)

  ---

  **Sürüm:** 1.0.0
  **Son Güncelleme:** 2026-05-12
  **Durum:** Üretimde Hazır
---

# c-level-agents — Founder-Mode Executive Team

A virtual C-suite delivered through slash commands and persona agents.

## Keywords

founder mode, virtual c-suite, executive team, boardroom, office hours, cfo review, cmo review, strategic sprint, decision logging, cross-model consensus, persona agents, chief of staff, forcing questions

## What This Plugin Provides

### 8 cs-* Agents (in `agents/`)

Each agent wraps an existing c-level skill and adds:
- A distinct cognitive voice (numerate skeptic, narrative-first, etc.)
- Forcing questions specific to the role
- Workflow orchestration tied to skill Python tools
- Output template: Bottom Line → What → Why → How to Act → Your Decision

See `../references/persona-voices.md` for voice specs.

### 17 /cs:* Slash Commands (in `skills/`)

**Forcing-question office hours (8):**
- `/cs:office-hours` — YC-style 6-question intake
- `/cs:cfo-review` — unit economics, runway, dilution
- `/cs:cmo-review` — ICP, CAC payback, positioning
- `/cs:cpo-review` — RICE, JTBD, North Star, PMF
- `/cs:cro-review` — pipeline coverage, win rate, NRR
- `/cs:cto-review` — architecture risk, scaling cliff
- `/cs:ciso-review` — threat model, blast radius, compliance
- `/cs:gc-review` — contracts, IP, regulatory, term sheets

**Strategic sprint pipeline (5):**
- `/cs:brief` → `/cs:boardroom` → `/cs:decide` → `/cs:execute` → `/cs:post-mortem`

**Meta + safety (4):**
- `/cs:founder-mode` — auto-routes to the right C-role
- `/cs:onboard` — founder interview → `company-context.md`
- `/cs:cross-eval` — multi-model consensus
- `/cs:freeze` — cooldown lock on a decision

## Quick Start

```
/cs:onboard                          # populate company context first
/cs:office-hours "should we hire a VP Sales?"
/cs:founder-mode "runway pressure"   # auto-routes to CFO
/cs:boardroom briefs/pricing-v3.md   # full panel
```

## Architecture

```
User question
   │
   ├─ Single-role? → cs-{role}-advisor agent
   │                     ↓
   │                  /cs:{role}-review command (forcing Qs)
   │                     ↓
   │                  Skill tools + references
   │                     ↓
   │                  Bottom Line + Memo
   │
   └─ Multi-role?  → /cs:boardroom
                        ↓
                     6-phase deliberation (Phase 2 isolation)
                        ↓
                     /cs:decide → decision-logger (two-layer memory)
                        ↓
                     /cs:execute → 90-day plan
```

## Integration Points

- **Existing 28 c-level skills** — wrapped, not replaced
- **decision-logger** — every `/cs:decide` writes here
- **chief-of-staff** — routing layer the agent orchestrates
- **board-meeting** — protocol the `/cs:boardroom` command runs
- **llm-wiki** — optional persistent memory bridge (see `../references/llm-wiki-bridge.md`)
- **executive-mentor** — adversarial `/em:*` commands stack cleanly on top

## Design Principles

1. **Voice is bookended, analysis is neutral.**
2. **Artifacts over chat.** Every command produces a Markdown artifact the next command consumes.
3. **Phase 2 isolation in boardroom.** Independent thinking before cross-examination.
4. **Graceful degradation.** `/cs:cross-eval` falls back to Claude-only.
5. **No paid dependencies.** All Python tools are stdlib-only.

## References

- [persona-voices.md](../../references/persona-voices.md)
- [llm-wiki-bridge.md](../../references/llm-wiki-bridge.md)
- [Parent c-level CLAUDE.md](../../../CLAUDE.md)
- [Existing executive-mentor sibling](../../../executive-mentor/)

---

**Version:** 1.0.0
**Last Updated:** 2026-05-12
**Status:** Production Ready
