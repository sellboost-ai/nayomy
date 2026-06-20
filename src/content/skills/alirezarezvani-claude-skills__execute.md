---
name: "execute"
description_en: "/cs:execute <decision> — Generate a 90-day execution plan with weekly milestones, DRIs, and check-in cadence from an approved decision. Use when a logged decision needs to become an operating plan — e.g. turning an approved market-entry call into weekly milestones with DRIs."
description_tr: "/cs:execute <decision> — Onaylanmış bir karardan 90 günlük bir uygulama planı oluşturur; haftalık milestone'lar, DRI'lar ve kontrol sıklığını belirler. Kaydedilmiş bir karar operasyonel bir plana dönüştürülmesi gerektiğinde kullanılır — örneğin, onaylanmış bir pazara giriş kararını haftalık milestone'lar ve DRI'lar ile yapılandırmak için."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 18572
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/execute/SKILL.md"
path: ".gemini/skills/execute/SKILL.md"
is_collection: false
body_length: 2957
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /cs:execute — 90 Günlük Yürütme Planı
  
  **Komut:** `/cs:execute <decision-path>`
  
  Onaylanmış bir kararı haftalık kilometre taşları, belirlenen sorumlu kişiler ve kontrol sıklığı ile 90 günlük bir plana dönüştürür. Çoğu kararın öldüğü yer: "Biz karar verdik" ile "Gelecek pazartesi ne yapacağız?" arasında.
  
  ## Pipeline Konumu
  
  ```
  /cs:office-hours  →  /cs:brief  →  /cs:boardroom  →  /cs:decide  →  /cs:execute  →  /cs:post-mortem
                                                                         ↑ siz burada
  ```
  
  ## Giriş
  
  Onaylanmış bir karar kaydı (`/cs:decide` çıktısı).
  
  ## Çıktı Plan Formatı
  
  `~/.claude/execution/YYYY-MM-DD-<slug>.md` dosyasına kaydedilir:
  
  ```markdown
  # Yürütme Planı: <karar başlığı>
  **Karar:** <link to /cs:decide record>
  **Sahip (Sponsor):** <kurucu veya yönetici>
  **Başlangıç:** YYYY-MM-DD
  **Kontrol Noktası:** YYYY-MM-DD (90g)
  
  ## Sonuç (bağlayıcı)
  [Karardan kopyalandı: başarı + durdurma kriterleri]
  
  ## Çalışma Akışları
  | Çalışma Akışı | Sorumlu | Başarı Metriği | Durum |
  |---|---|---|---|
  | <ör: Fiyatlandırma değişimi> | <ad> | <metrik, eşik> | Başlanmadı |
  | <ör: İletişim> | <ad> | <metrik> | Başlanmadı |
  | <ör: Mühendislik değişiklikleri> | <ad> | <metrik> | Başlanmadı |
  
  ## Haftalık Kilometre Taşları
  | Hafta | Kilometre Taşı | Sorumlu | Tamamlanma Tanımı |
  |---|---|---|---|
  | 1 | <ör: konumlandırma kilitlendi> | <ad> | <gözlemlenebilir sonuç> |
  | 2 | <ör: taslak başlatıldı> | <ad> | <gözlemlenebilir> |
  | 3 | ... | | |
  | 12 | <ör: kontrol noktası incelemesi> | <ad> | <gözlemlenebilir> |
  
  ## Cadence
  - **Haftalık:** Sahip durumunu gözden geçirir (15 dak)
  - **İki haftada bir:** Fonksiyonlar arası senkronizasyon (30 dak)
  - **30. / 60. / 90. gün:** cs-chief-of-staff ile kontrol noktası
  
  ## Bağımlılıklar
  - İç: <liste>
  - Harici: <satıcılar, düzenleyiciler, müşteriler>
  
  ## Risk Kaydı
  | Risk | Olasılık | Etki | Sorumlu | Hafifletme |
  |---|---|---|---|---|
  | <ör: gecikmeli yasal inceleme> | O | Y | <ad> | <plan> |
  
  ## Durdurma Kriterleri İzleme
  [Karardan kopyalandı; her kontrol noktasında gözden geçirilir]
  - <metrik, eşik, işlem>
  ```
  
  ## İş Akışı
  
  1. Karar kaydını okuyun
  2. Seçilen seçeneği 3-6 çalışma akışına ayırın
  3. Her çalışma akışı için bir sorumlu kişi belirleyin
  4. Kontrol noktası tarihinden geriye doğru 12 haftalık kilometre taşı tasarlayın
  5. Cadence'i ayarlayın (haftalık + iki haftada bir + 30/60/90 kontrol noktaları)
  6. Risk kaydını oluşturun (orijinal Faz 4 avukat kontrolleri ile çapraz referansla)
  7. Kaydedin ve sorumlu kişileri bilgilendirin
  
  ## Neden 90 Gün
  
  - Gerçek sinyal göstermek için yeterince uzun (sadece aktivite değil)
  - Hasar bileşmeden önce kursu düzeltmek için yeterince kısa
  - Üç aylık OKR döngüsü, finansman sprint'leri ve çoğu yönetim kurulu cadence'i ile eşleşir
  
  ## Yönlendirme
  
  - `/cs:post-mortem <decision>` — 90. günde (veya durdurma kriterleri tetiklenirse daha erken)
  - `/cs:boardroom` — kontrol noktası yeniden karar verme ihtiyacı ortaya çıkarırsa
  
  ## İlgili
  
  - Beceriler: [`coo-advisor`](../../../skills/coo-advisor/SKILL.md), [`strategic-alignment`](../../../skills/strategic-alignment/SKILL.md), [`change-management`](../../../skills/change-management/SKILL.md)
  - Agent: [`cs-coo-advisor`](../../agents/cs-coo-advisor.md)
  
  ---
  
  **Sürüm:** 1.0.0
---

# /cs:execute — 90-Day Execution Plan

**Command:** `/cs:execute <decision-path>`

Turns an approved decision into a 90-day plan with weekly milestones, named DRIs, and a check-in cadence. Where most decisions die: between "we decided" and "what's next Monday?"

## Pipeline Position

```
/cs:office-hours  →  /cs:brief  →  /cs:boardroom  →  /cs:decide  →  /cs:execute  →  /cs:post-mortem
                                                                       ↑ you are here
```

## Input

An approved decision record (output of `/cs:decide`).

## Output Plan Format

Saved to `~/.claude/execution/YYYY-MM-DD-<slug>.md`:

```markdown
# Execution Plan: <decision title>
**Decision:** <link to /cs:decide record>
**Owner (Sponsor):** <founder or exec>
**Start:** YYYY-MM-DD
**Checkpoint:** YYYY-MM-DD (90d)

## Outcome (binding)
[Copied from decision: success + kill criteria]

## Workstreams
| Workstream | DRI | Success Metric | Status |
|---|---|---|---|
| <e.g., Pricing rollout> | <name> | <metric, threshold> | Not started |
| <e.g., Comms> | <name> | <metric> | Not started |
| <e.g., Eng changes> | <name> | <metric> | Not started |

## Weekly Milestones
| Week | Milestone | DRI | Definition of Done |
|---|---|---|---|
| 1 | <e.g., positioning locked> | <name> | <observable outcome> |
| 2 | <e.g., draft launched> | <name> | <observable> |
| 3 | ... | | |
| 12 | <e.g., checkpoint review> | <name> | <observable> |

## Cadence
- **Weekly:** Owner reviews status (15 min)
- **Bi-weekly:** Cross-functional sync (30 min)
- **Day 30 / 60 / 90:** Checkpoint with cs-chief-of-staff

## Dependencies
- Internal: <list>
- External: <vendors, regulators, customers>

## Risk Register
| Risk | Likelihood | Impact | Owner | Mitigation |
|---|---|---|---|---|
| <e.g., delayed legal review> | M | H | <name> | <plan> |

## Kill Criteria Watch
[Copied from decision; reviewed at every checkpoint]
- <metric, threshold, action>
```

## Workflow

1. Read the decision record
2. Decompose the chosen option into 3-6 workstreams
3. Name a DRI for each workstream
4. Reverse-engineer 12 weekly milestones from the checkpoint date
5. Set the cadence (weekly + bi-weekly + 30/60/90 checkpoints)
6. Build the risk register (cross-reference original Phase 4 devil's-advocate concerns)
7. Save and notify DRIs

## Why 90 Days

- Long enough to show real signal (not just activity)
- Short enough to course-correct before damage compounds
- Matches quarterly OKR cycle, fundraise sprints, and most board cadences

## Routing

- `/cs:post-mortem <decision>` — at day 90 (or earlier if kill criteria trigger)
- `/cs:boardroom` — if a checkpoint reveals a need to re-decide

## Related

- Skills: [`coo-advisor`](../../../skills/coo-advisor/SKILL.md), [`strategic-alignment`](../../../skills/strategic-alignment/SKILL.md), [`change-management`](../../../skills/change-management/SKILL.md)
- Agent: [`cs-coo-advisor`](../../agents/cs-coo-advisor.md)

---

**Version:** 1.0.0
