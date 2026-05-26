---
name: "cfo-review"
description_en: "/cs:cfo-review <plan> — Numerate-skeptic interrogation of any plan that touches money. Unit economics, runway, dilution, capital allocation."
description_tr: "/cs:cfo-review <plan> — Herhangi bir finansal planı CFO gözüyle analiz eden araç. Unit economics, runway, dilution ve capital allocation gibi konuları derinlemesine inceleyerek paranın akışını sorgulamaya yardımcı olur."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/cfo-review/SKILL.md"
path: ".gemini/skills/cfo-review/SKILL.md"
is_collection: false
body_length: 2925
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /cs:cfo-review — CFO Zorlama Soruları

  **Komut:** `/cs:cfo-review <plan>`

  Sayıları seven şüpheci, paraya dokunan her şeyi stres testinden geçirir. Herhangi bir harcama veya fon toplamasından önce altı soru.

  ## Ne Zaman Çalıştırılır

  - Gelirin %1'inden fazla herhangi bir harcama onaylanmadan önce
  - Yeni bir işe alım talep formu açılmadan önce
  - Herhangi bir fon toplama konuşmasından önce
  - Fiyatlandırma veya birim ekonomisi değiştirilmeden önce
  - Çok yıllı bir sözleşme imzalanmadan önce

  ## Altı CFO Sorusu

  ### 1. Burn & Runway
  **Burn multiple nedir ve temel / iyimser / kötümser senaryoda kaç ay nakit kalır?**
  - Burn multiple = Net burn ÷ Net yeni ARR. 2x üzeri sorun.
  - Kötümser senaryo < 12 aysa, zaten fon toplama modundasınız.

  ### 2. Birim Ekonomisi
  **Kanal başına LTV / CAC nedir ve en iyi 2 kanal için geri ödeme süresi nedir?**
  - LTV / CAC > 3x sağlıklıdır. Geri ödeme < 12 ay sağlıklıdır.
  - Biri bozuksa, o kanalı ölçeklendirmeyin.

  ### 3. Seyreltme Yolu
  **Bu plan bir fon turunu gerektiriyorsa, temel ve kötümser valuasyonlarda seyreltme nedir?**
  - Tur başına kurucu seyreltmesi.
  - Sonraki 2 tura kaydedilen seyreltme.

  ### 4. Sermaye Tahsisi Alternatifi
  **Bu dolar burada harcanmasa, başka nereye gidebilir ve beklenen getirisi nedir?**
  - Üç alternatif: işe alım, ürün, pazarlama.
  - Fırsat maliyetini açık hale getirin.

  ### 5. Gelir Kalitesi
  **Brüt marj nedir ve ölçekte nasıl değişir?**
  - Marj ölçek ile sıkışıyorsa, model kırılmıştır.
  - Gelir maliyeti, gelirden daha yavaş büyümelidir.

  ### 6. Kötümser Senaryo Hayatta Kalma
  **Gelir plana göre %50 ise, şirket 18 ay hayatta kalır mı?**
  - Default-alive vazgeçilmez.
  - Değilse, kesme tetikleyicilerini önceden belirleyin.

  ## İş Akışı

  1. **Sayıları hesaplayın:**
     ```bash
     python ../../../skills/cfo-advisor/scripts/burn_rate_calculator.py
     python ../../../skills/cfo-advisor/scripts/unit_economics_analyzer.py
     python ../../../skills/cfo-advisor/scripts/fundraising_model.py
     ```
  2. **Altı sorunun tümünü** sayılarla, sıfatlarla değil cevaplayın.
  3. **Kararı uygulayın:**
     - 🟢 YEŞİL — finanse et
     - 🟡 SARI — kesme tetikleyicileriyle finanse et
     - 🔴 KIRMIZI — iptal et veya revize et

  ## Çıktı Formatı

  ```markdown
  # CFO Review: <plan>
  **Tarih:** YYYY-MM-DD
  **İnceleyici:** cs-cfo-advisor

  ## Sayılar
  - Burn multiple: X.Xx
  - Runway (temel/iyimser/kötümser): X / X / X ay
  - LTV/CAC en iyi kanal: X.Xx, geri ödeme Y ay
  - Brüt marj: X% (eğilim: Y)
  - Bu turda seyreltme: X%
  - Kötümser senaryo hayatta kalma: BAŞARILI / BAŞARISIZ

  ## Karar
  🟢 YEŞİL | 🟡 SARI | 🔴 KIRMIZI

  ## Koşullar (SARI ise)
  - Kesme tetikleyicisi: <metrik> < <eşik> → <işlem>
  - İnceleme kontrol noktası: <tarih>

  ## Öneri
  [3 somut sonraki adım]
  ```

  ## Yönlendirme

  - `/cs:decide` — kararı günlüğe kaydet
  - `/cs:execute` — YEŞİL ise 90 günlük plan oluştur
  - `/cs:boardroom` — çok rollü etkileri varsa yükselt

  ## İlgili

  - Agent: [`cs-cfo-advisor`](../../agents/cs-cfo-advisor.md)
  - Skill: [`cfo-advisor`](../../../skills/cfo-advisor/SKILL.md)

  ---

  **Sürüm:** 1.0.0
---

# /cs:cfo-review — CFO Forcing Questions

**Command:** `/cs:cfo-review <plan>`

The numerate skeptic stress-tests anything that touches money. Six questions before any spend or fundraise.

## When to Run

- Before approving any spend > 1% of revenue
- Before opening a new hiring requisition
- Before any fundraise conversation
- Before changing pricing or unit economics
- Before signing a multi-year contract

## The Six CFO Questions

### 1. Burn & Runway
**What's the burn multiple and how many months of cash remain at base / bull / bear?**
- Burn multiple = Net burn ÷ Net new ARR. Above 2x is a problem.
- If bear case < 12 months, you're already in fundraising mode.

### 2. Unit Economics
**What is LTV / CAC per channel, and what's the payback period on the top-2 channels?**
- LTV / CAC > 3x is healthy. Payback < 12 months is healthy.
- If either is broken, do not scale that channel.

### 3. Dilution Path
**If this plan requires a raise, what's the dilution at base and bear valuations?**
- Founder dilution per round.
- Cumulative dilution to next 2 rounds.

### 4. Capital Allocation Alternative
**If this dollar wasn't spent here, where else could it go and what's the expected return?**
- Three alternatives: hiring, product, marketing.
- Make the opportunity cost explicit.

### 5. Revenue Quality
**What's the gross margin, and how does it trend at scale?**
- If margin compresses with scale, the model is broken.
- Cost-of-revenue should grow slower than revenue.

### 6. Bear Case Survival
**If revenue is 50% of plan, does the company survive 18 months?**
- Default-alive is non-negotiable.
- If not, identify the cut triggers in advance.

## Workflow

1. **Run the numbers:**
   ```bash
   python ../../../skills/cfo-advisor/scripts/burn_rate_calculator.py
   python ../../../skills/cfo-advisor/scripts/unit_economics_analyzer.py
   python ../../../skills/cfo-advisor/scripts/fundraising_model.py
   ```
2. **Answer all six questions** with numbers, not adjectives.
3. **Apply the verdict:**
   - 🟢 GREEN — fund it
   - 🟡 YELLOW — fund with cut triggers
   - 🔴 RED — kill or revise

## Output Format

```markdown
# CFO Review: <plan>
**Date:** YYYY-MM-DD
**Reviewer:** cs-cfo-advisor

## Numbers
- Burn multiple: X.Xx
- Runway (base/bull/bear): X / X / X months
- LTV/CAC top channel: X.Xx, payback Y months
- Gross margin: X% (trend: Y)
- Dilution this round: X%
- Bear-case survival: PASS / FAIL

## Verdict
🟢 GREEN | 🟡 YELLOW | 🔴 RED

## Conditions (if YELLOW)
- Cut trigger: <metric> < <threshold> → <action>
- Review checkpoint: <date>

## Recommendation
[3 concrete next steps]
```

## Routing

- `/cs:decide` — log the verdict
- `/cs:execute` — build 90-day plan if GREEN
- `/cs:boardroom` — escalate if multi-role implications

## Related

- Agent: [`cs-cfo-advisor`](../../agents/cs-cfo-advisor.md)
- Skill: [`cfo-advisor`](../../../skills/cfo-advisor/SKILL.md)

---

**Version:** 1.0.0
