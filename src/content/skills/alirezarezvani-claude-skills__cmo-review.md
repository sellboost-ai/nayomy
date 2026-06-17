---
name: "cmo-review"
description_en: "/cs:cmo-review <plan> — Narrative-first interrogation of positioning, ICP, message house, and channel mix. Use when launching a campaign or repositioning, or when CAC is rising and the one-sentence positioning test fails."
description_tr: "/cs:cmo-review <plan> — Konumlandırma, ICP, mesaj mimarisi ve kanal karışımını hikaye merkezli bir şekilde sorgulayan araç. Kampanya başlatırken, yeniden konumlandırırken veya CAC yükselip tek cümleli konumlandırma testi başarısız olduğunda kullanın."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 18266
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/cmo-review/SKILL.md"
path: ".gemini/skills/cmo-review/SKILL.md"
is_collection: false
body_length: 2916
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /cs:cmo-review — CMO Zorlama Soruları

  **Komut:** `/cs:cmo-review <plan>`

  Anlatı-odaklı stratejist konumlandırmayı taktikleri tartışmadan önce sınaya sokar.

  ## Ne Zaman Çalıştırılır

  - Herhangi bir yeni kampanya başlatmadan önce
  - Konumlandırma, slogan veya kategori değiştirmeden önce
  - Pazarlama bütçesinin > %10'unu yeni bir kanala tahsis etmeden önce
  - Önemli bir PR anından önce (fon haberleştirmesi, ürün lansmanı)
  - Pipeline katkısı düştüğünde

  ## Altı CMO Sorusu

  ### 1. ICP (Bir Gerçek Kişi)
  **ICP'nizdeki bir gerçek kişiyi adlandırın. Şirketi, ünvanı, günlük ne yaptığı, neyi sevmediği.**
  - Persona ≠ ICP. ICP gerçektir.
  - Bir kişi adlandıramazsanız, ICP yeterince keskin değildir.

  ### 2. JTBD
  **Müşteri bu ürünü hangi işi yapmak için işe alıyor ve bugün alternatif olarak ne kullanıyor?**
  - Müşteri tarafından yüksek sesle söylenecek bir cümle.
  - "Elektronik tablolar kullanıyoruz" geçerli bir alternatiftir. "Hiç birini kullanmıyoruz" da öyle.

  ### 3. Konumlandırma Açıklaması
  **Bir cümle: [ICP] için, [işe] ihtiyaç duyan, biz [kategori]'yiz, [ayırt edici özellik] var, [alternatif]'ten farklı olarak.**
  - Bu başlık. Her şey buradan kademeli.
  - Bir cümleye sığmazsa, henüz konumlandırma değildir.

  ### 4. Dağıtım Kanalı
  **Müşteri adınızı ilk nerede duyuyor — ve bu aşamada inbound mu outbound mu?**
  - Kanalı, niyeti ve ilk iletişime giden yolu adlandırın.
  - PLG, satış odaklı, içerik odaklı, ortaklık odaklı — bir birincil seçin.

  ### 5. CAC Geri Ödeme
  **Kanal başına: CAC nedir, geri ödeme kaç aydır ve iyileşiyor mu?**
  - Bir kanalın geri ödeme süresi > 18 ay ise, bu kanal değildir — hobbidir.

  ### 6. Marka Savunulabilirliği
  **Yarın iyi finanse edilmiş bir rakip mesajlaşmanızı kopyalasa, hangisi hala sizin?**
  - Kategori konumu, kurucunun pazar uyumu, müşteri sevgisi, dağıtım kilidi — birini adlandırın.

  ## İş Akışı

  1. **Modelleri çalıştırın:**
     ```bash
     python ../../../skills/cmo-advisor/scripts/marketing_budget_modeler.py
     python ../../../skills/cmo-advisor/scripts/growth_model_simulator.py
     ```
  2. **Altı soruyu yazılı olarak cevaplayın.**
  3. **Kararı uygulayın:**
     - 🟢 YEŞİL — hikaye keskin, kanal karışımı sağlam
     - 🟡 SARI — ölçeklendirmeden önce konumlandırmayı keskinleştirin
     - 🔴 KIRMIZI — konumlandırma bozuk; harcama yapmayın

  ## Çıktı Biçimi

  ```markdown
  # CMO İncelemesi: <plan>
  **Tarih:** YYYY-MM-DD

  ## Konumlandırma
  Tek cümlelik açıklama: <burada>

  ## ICP
  - Adlandırılmış persona: <ad, ünvan, şirket>
  - JTBD: <bir cümle onların sözleriyle>

  ## Kanal Karışımı
  - Birincil: <kanal> | CAC $X | Geri Ödeme Ym
  - İkincil: <kanal> | CAC $X | Geri Ödeme Ym

  ## Karar
  🟢 / 🟡 / 🔴

  ## Sonraki Adımlar
  [3 somut eylem]
  ```

  ## Yönlendirme

  - `/cs:cro-review` — pipeline katkısı kontrolü
  - `/cs:cpo-review` — ürün ↔ konumlandırma uyumlaştırması
  - `/cs:decide` — kararı kaydedin

  ## İlgili

  - Agent: [`cs-cmo-advisor`](../../agents/cs-cmo-advisor.md)
  - Skill: [`cmo-advisor`](../../../skills/cmo-advisor/SKILL.md)
  - Execution domain: `../../../../marketing-skill/`

  ---

  **Sürüm:** 1.0.0
---

# /cs:cmo-review — CMO Forcing Questions

**Command:** `/cs:cmo-review <plan>`

The narrative-first strategist pressure-tests positioning before debating tactics.

## When to Run

- Before launching any new campaign
- Before changing positioning, tagline, or category
- Before allocating > 10% of marketing budget to a new channel
- Before a major PR moment (funding announcement, product launch)
- When pipeline contribution is declining

## The Six CMO Questions

### 1. ICP (One Real Person)
**Name one real person in your ICP. Company, title, what they do daily, what they hate.**
- Persona ≠ ICP. ICP is real.
- If you can't name one, the ICP isn't sharp enough.

### 2. JTBD
**What job is the customer hiring this product to do, and what's the alternative they use today?**
- One sentence the customer would say out loud.
- "We use spreadsheets" is a valid alternative. So is "we don't."

### 3. Positioning Statement
**One sentence: For [ICP], who needs [job], we are [category] that [differentiator] unlike [alternative].**
- This is the headline. Everything cascades.
- If it doesn't fit in one sentence, it's not positioning yet.

### 4. Distribution Channel
**Where does the customer first hear your name — and is it inbound or outbound at this stage?**
- Name the channel, intent, and the path to first contact.
- PLG, sales-led, content-led, partnership-led — pick a primary.

### 5. CAC Payback
**Per channel: what's CAC, what's payback in months, and is it improving?**
- If a channel's payback is > 18 months, it isn't a channel — it's a hobby.

### 6. Defensibility of Brand
**If a well-funded competitor copies your messaging tomorrow, what's still yours?**
- Category position, founder-market fit, customer love, distribution lock — name one.

## Workflow

1. **Run the models:**
   ```bash
   python ../../../skills/cmo-advisor/scripts/marketing_budget_modeler.py
   python ../../../skills/cmo-advisor/scripts/growth_model_simulator.py
   ```
2. **Answer the six questions** in writing.
3. **Apply the verdict:**
   - 🟢 GREEN — story is sharp, channel mix sound
   - 🟡 YELLOW — sharpen positioning before scaling
   - 🔴 RED — positioning broken; do not spend

## Output Format

```markdown
# CMO Review: <plan>
**Date:** YYYY-MM-DD

## Positioning
One-sentence statement: <here>

## ICP
- Named persona: <name, title, company>
- JTBD: <one sentence in their words>

## Channel Mix
- Primary: <channel> | CAC $X | Payback Ym
- Secondary: <channel> | CAC $X | Payback Ym

## Verdict
🟢 / 🟡 / 🔴

## Next Steps
[3 concrete actions]
```

## Routing

- `/cs:cro-review` — pipeline contribution check
- `/cs:cpo-review` — product ↔ positioning alignment
- `/cs:decide` — log the verdict

## Related

- Agent: [`cs-cmo-advisor`](../../agents/cs-cmo-advisor.md)
- Skill: [`cmo-advisor`](../../../skills/cmo-advisor/SKILL.md)
- Execution domain: `../../../../marketing-skill/`

---

**Version:** 1.0.0
