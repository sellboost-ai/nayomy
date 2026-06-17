---
name: "cto-review"
description_en: "/cs:cto-review <plan> — Architecture and scaling interrogation. Tech debt, scaling cliffs, team scaling, build-vs-buy. Use when committing to an architecture, planning for 10x load, or weighing a rebuild against a vendor."
description_tr: "/cs:cto-review <plan> — Mimari ve ölçeklendirme analizi. Teknik borç, ölçeklendirme engelleri, ekip büyümesi, build-vs-buy kararları için kullanın. Bir mimariyi onaylarken, 10 kat artan yük için planlama yaparken veya yeniden geliştirme ile satıcı çözümü arasında seçim yaparken bu komutu çalıştırın."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18266
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/cto-review/SKILL.md"
path: ".gemini/skills/cto-review/SKILL.md"
is_collection: false
body_length: 3081
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /cs:cto-review — CTO Zorlama Soruları

  **Komut:** `/cs:cto-review <plan>`

  Mimarisi ve mühendislik ölçeklendirme kararlarını stres testine tabi tutar. Bir sonraki ölçeklendirme sınırına çarpmadan önce onu ortaya çıkarmak için altı soru.

  ## Ne Zaman Çalıştırılır

  - Büyük bir mimari değişikliği onaylamadan önce
  - Mühendislik takımını iki katına çıkarmadan önce
  - Build-vs-buy kararı > 100K$/yıl olmadan önce
  - Bir sistem güvenilirlik stresi gösteriyorsa (SLO'lar kaçırılıyorsa)
  - Yeni bir platform / dil / veritabanına bağlanmadan önce

  ## Altı CTO Sorusu

  ### 1. Ölçeklendirme Sınırı
  **Mevcut mimari, kullanıcı / istek / veri hacmi açısından nerede kırılır?**
  - Spesifik olun. "Birincil DB yazma işlemleri doygunlaştığı için mevcut yükün 10 katında kırılır."
  - Eğer bilmiyorsanız, karar vermeden önce bir yük testi çalıştırın.

  ### 2. Teknik Borç Envanteri
  **En üst teknik borç kalemi nedir, haftalık olarak ne mal oluyor ve ne zaman engelleme haline gelir?**
  ```bash
  python ../../../skills/cto-advisor/scripts/tech_debt_analyzer.py
  ```

  ### 3. Takım Ölçeklendirmesi
  **Her açık pozisyon için, ramp-up süresi ve katkı modeli nedir?**
  ```bash
  python ../../../skills/cto-advisor/scripts/team_scaling_calculator.py
  ```

  ### 4. Build vs Buy
  **Bunu neden satın almak yerine inşa ediyoruz — ve her birinin 3 yıllık TCO'su nedir?**
  - Eğer "kontrol istiyoruz" veya "o kadar zor değil" ise — itiraz edin.
  - Eğer cevap "bu bizim temel rekabet avantajımız" ise, inşa edin.

  ### 5. SLO / Güvenilirlik
  **Bu sistem için SLO'lar nedir ve mevcut hata bütçesi tüketimi nedir?**
  - SLO olmadan güvenilirlik tradeoff'larını tartışamazsınız.
  - SLO tasarımı için `engineering/slo-architect` bölümüne bakın.

  ### 6. Güvenlik & Uyum Yüzeyi
  **Bu ne ortaya koymaktadır ve cs-ciso-advisor onay verdi mi?**
  - Mimari kararlar uyum kararlarıdır.
  - Commit'ten önce cs-ciso-advisor'ı dâhil edin.

  ## İş Akışı

  1. Teknik borç analizcisini + takım ölçeklendirme hesaplayıcısını çalıştırın
  2. Ölçeklendirme sınırı hipotezini açıkça tanımlayın
  3. Güvenlik etkileri açısından cs-ciso-advisor ile çapraz kontrol yapın
  4. Kararı uygulayın

  ## Çıktı Formatı

  ```markdown
  # CTO İncelemesi: <plan>
  **Tarih:** YYYY-MM-DD

  ## Ölçeklendirme Sınırı
  - Mevcut kapasite: <metrik>
  - Kırılma noktası: <metrik>
  - Boşluk: Mevcut büyüme hızında X ay

  ## Teknik Borç
  - En üst kalemi: <açıklama>
  - Haftalık maliyet: $X veya N mühendis-saati
  - Engelleme tarihi tahmini: <tarih>

  ## Takım
  - Açık pozisyon: N
  - Ortalama ramp-up: X ay
  - Katkı modeli: <pairing / squad / area>

  ## Build vs Buy
  - 3 yıllık build TCO: $X
  - 3 yıllık buy TCO: $X
  - Stratejik uyum: <core / context>
  - Karar: BUILD | BUY

  ## Güvenilirlik
  - SLO tanımlı: evet / hayır
  - Hata bütçesi tüketimi: X% (hedef < Y%)

  ## Güvenlik
  - cs-ciso onayı: ✅ / ❌

  ## Karar
  🟢 SHIP | 🟡 SHARPEN | 🔴 BLOCK

  ## Sonraki Adımlar
  [3 somut eylem]
  ```

  ## Yönlendirme

  - `/cs:ciso-review` — veri yüzeyi değişirse zorunlu
  - `/cs:cfo-review` — build-vs-buy > 100K$ için
  - `/cs:execute` — üç aylık plan
  - `/cs:boardroom` — mimari pivotlar için

  ## İlgili

  - Agent: [`cs-cto-advisor`](../../../../agents/c-level/cs-cto-advisor.md)
  - Skill: [`cto-advisor`](../../../skills/cto-advisor/SKILL.md)
  - SLO: `../../../../engineering/slo-architect/`

  ---

  **Sürüm:** 1.0.0
---

# /cs:cto-review — CTO Forcing Questions

**Command:** `/cs:cto-review <plan>`

Pressure-tests architecture and engineering scaling decisions. Six questions to surface the next scaling cliff before you hit it.

## When to Run

- Before approving a major architecture change
- Before doubling the engineering team
- Before a build-vs-buy decision > $100K/year
- When a system is showing reliability stress (SLOs missed)
- Before committing to a new platform / language / DB

## The Six CTO Questions

### 1. Scaling Cliff
**Where does the current architecture break, in terms of users / requests / data volume?**
- Be specific. "It breaks at 10× current load because the primary DB writes saturate."
- If you don't know, run a load test before deciding.

### 2. Tech Debt Inventory
**What's the top tech debt item, what's it costing per week, and when does it become blocking?**
```bash
python ../../../skills/cto-advisor/scripts/tech_debt_analyzer.py
```

### 3. Team Scaling
**For each open req, what's the ramp time and contribution model?**
```bash
python ../../../skills/cto-advisor/scripts/team_scaling_calculator.py
```

### 4. Build vs Buy
**Why are we building this instead of buying it — and what's the 3-year TCO of each?**
- If "we want control" or "it's not that hard" — push back.
- If the answer is "this is our core moat," build.

### 5. SLO / Reliability
**What are the SLOs for this system and what's the current error budget burn?**
- Without an SLO, you can't reason about reliability tradeoffs.
- See `engineering/slo-architect` for SLO design.

### 6. Security & Compliance Surface
**What does this expose, and has cs-ciso-advisor signed off?**
- Architecture decisions are compliance decisions.
- Loop in cs-ciso-advisor before commit.

## Workflow

1. Run the tech debt analyzer + team scaling calculator
2. Define the scaling-cliff hypothesis explicitly
3. Cross-check with cs-ciso-advisor for security implications
4. Apply the verdict

## Output Format

```markdown
# CTO Review: <plan>
**Date:** YYYY-MM-DD

## Scaling Cliff
- Current capacity: <metric>
- Break point: <metric>
- Headroom: X months at current growth

## Tech Debt
- Top item: <description>
- Cost per week: $X or N eng-hours
- Blocking date estimate: <date>

## Team
- Open reqs: N
- Median ramp: X months
- Contribution model: <pairing / squad / area>

## Build vs Buy
- 3-year build TCO: $X
- 3-year buy TCO: $X
- Strategic fit: <core / context>
- Decision: BUILD | BUY

## Reliability
- SLO defined: yes / no
- Error budget burn: X% (target < Y%)

## Security
- cs-ciso sign-off: ✅ / ❌

## Verdict
🟢 SHIP | 🟡 SHARPEN | 🔴 BLOCK

## Next Steps
[3 concrete actions]
```

## Routing

- `/cs:ciso-review` — mandatory if data surface changes
- `/cs:cfo-review` — for build-vs-buy > $100K
- `/cs:execute` — quarterly plan
- `/cs:boardroom` — for architecture pivots

## Related

- Agent: [`cs-cto-advisor`](../../../../agents/c-level/cs-cto-advisor.md)
- Skill: [`cto-advisor`](../../../skills/cto-advisor/SKILL.md)
- SLO: `../../../../engineering/slo-architect/`

---

**Version:** 1.0.0
