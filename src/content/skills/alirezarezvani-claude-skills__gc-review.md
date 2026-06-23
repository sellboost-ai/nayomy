---
name: "gc-review"
description_en: "/cs:gc-review <plan> — General Counsel interrogation of contracts, IP, regulatory, term sheets, and employment-law surface. Use when reviewing a term sheet before signing, redlining a customer MSA, or checking IP assignment and regulatory exposure on a new product."
description_tr: "/cs:gc-review <plan> — Sözleşmeler, fikri mülkiyet, düzenleyici hükümler, şart sayfaları ve işçi hukuku konularında Genel Hukuk Müşaviri görüşü. Bir şart sayfasını imzalamadan önce gözden geçirmek, müşteri MSA'sında düzeltmeler yapmak veya yeni bir ürünün fikri mülkiyet ve düzenleyici risklerini kontrol etmek için kullanın."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 18759
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/gc-review/SKILL.md"
path: ".gemini/skills/gc-review/SKILL.md"
is_collection: false
body_length: 4222
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /cs:gc-review — Genel Müşavir Zorlayıcı Soruları
  
  **Komut:** `/cs:gc-review <plan>`
  
  Genel Müşavir lens'i. Herhangi bir kontrat, şartlar tablosu, IP hareketi veya düzenleyici taahhüt öncesinde altı soru. Bu, gstack'in hiç sahibi olmadığı bir alan — ve tek bir kaçırılan madde bir yılın mühendislik çalışmasından daha pahalıya mal olabilir.
  
  > ⚠️ **Yasal tavsiye değildir.** Bu komut, dış müşavire danışmadan önce sorulması gereken doğru soruları ortaya çıkarır. Her zaman bağlayıcı kararlar için nitelikli müşaviri görevlendir.
  
  ## Ne Zaman Çalıştırılacak
  
  - $100K'den fazla veya 1 yıldan fazla herhangi bir kontrat imzalamadan önce
  - Hisse senedi vermeden önce (çalışan hibe, danışman hibe)
  - Şartlar tablosu cevabından önce
  - Düzenlenmiş bir pazara girerken (sağlık, fintech, savunma)
  - Temel IP'deki herhangi bir açık kaynak lisans kararından önce
  - M&A LOI öncesinde
  
  ## Altı GC Sorusu
  
  ### 1. IP Mülkiyeti
  **Bu işlemde kimin tarafından oluşturulan veya paylaşılan IP'yi sahibi?**
  - İş-için-satın alma vs lisans vs ortak.
  - Çalışanlar ve yükleniciler için: yazılı IP devri yerinde mi?
  - OSS için: lisans uyumluluğu kontrol edildi mi?
  
  ### 2. Sorumluluk & Tazmin
  **Sorumluluk üst sınırı nedir ve bundan hariç tutulan nedir?**
  - Standart üst sınır: 12 ay ücret.
  - İstisnalar: IP ihlali, veri ihlali, kasıtlı kötü davranış.
  - Karşılıklı tazmin tercih edilir.
  
  ### 3. Veri İşleme
  **Hangi kişisel veriler söz konusudur ve DPA yerinde mi?**
  - GDPR / CCPA kapsamı?
  - Alt işlemci akış?
  - Veri ikamet gereksinimleri?
  
  ### 4. Sonlandırma & Yenileme
  **Sonlandırma hakkı nedir, bildirim süresi nedir ve otomatik yenileme nedir?**
  - Kolaylık amacıyla sonlandırma vs neden.
  - Bildirim süresi (30 / 60 / 90 gün).
  - Otomatik yenileme tuzağı?
  
  ### 5. Düzenleyici Yüzey
  **Bu, şirketi yeni bir düzenleyici rejime maruz bırakıyor mu?**
  - Sağlık → HIPAA.
  - Fintech → BSA/AML, eyalet para gönderici.
  - Tıbbi cihaz → FDA, MDR, ISO 13485.
  - Veri → GDPR, CCPA, eyalet ihlal yasaları.
  
  ### 6. İstihdam / Hisse Senedi
  **Bu bir işe alma veya yükleniciyse: yargı, sınıflandırma, hisse senedi hibe, IP devri?**
  - Yanlış sınıflandırma riski?
  - Hisse senedi hakediş standardı (4 yıl, 1 yıl uçurum)?
  - Hızlanma tetikleyicileri?
  - 409A güncel?
  
  ## İş Akışı
  
  1. Kontrat / şartlar tablosunu baştan sona okuyun
  2. Altı soruyu çalıştırın
  3. Dış müşavire inceleme gerektiren ilk 3 sorunu belirleyin
  4. Kararı uygulayın
  
  ## Çıktı Biçimi
  
  ```markdown
  # GC İncelemesi: <plan>
  **Tarih:** YYYY-MM-DD
  
  ## Belge
  - Türü: <kontrat / şartlar tablosu / hibe / DPA>
  - Karşı taraf: <ad>
  - $ değer veya kapsam: <miktar>
  
  ## Sorunlar
  | # | Sorun | Risk | Tavsiye |
  |---|---|---|---|
  | 1 | <ör. sınırsız IP tazmin> | YÜKSEK | Ödenen ücretlerde sınırla, karşılıklı |
  | 2 | <ör. 5 yıllık otomatik yenileme> | ORTA | 1 yıl max, 60 günlük bildirim |
  | 3 | <ör. DPA yok, AB verisi> | YÜKSEK | İmzalamadan önce DPA iste |
  
  ## Düzenleyici Tetikleyici
  - Yeni rejim tetiklendi mi? <evet/hayır>
  - Spesifik çerçeveler: <HIPAA / GDPR / vb.>
  
  ## Dış Müşavir Eylem Maddeleri
  - [ ] <belirli madde 1>
  - [ ] <belirli madde 2>
  - [ ] <belirli madde 3>
  
  ## Karar
  🟢 OLDUĞU GİBİ İMZALA (nadir)
  🟡 MÜZAKERE ET — ilk 3 konuda karşı teklif
  🔴 İMZALAMA — maddi risk
  ```
  
  ## Yönlendirme
  
  - `/cs:ciso-review` — veri ile ilgili herhangi bir kontrat için
  - `/cs:cfo-review` — 1 yıldan fazla veya gelirin %1'inden fazla herhangi bir taahhüt için
  - `/cs:decide` — dış müşavir incelemesinden sonra kararı kaydet
  
  ## `general-counsel-advisor` Becerisi ile İş Akışı Entegrasyonu
  
  v2.5.1'den beri, bu komut `../../../skills/general-counsel-advisor/` konumundaki tam bir beceri ile desteklenmektedir ve iki Python aracı vardır:
  
  ```bash
  # Otomatik kontrat taraması (12 kurucu öldürücü desen)
  python ../../../skills/general-counsel-advisor/scripts/contract_risk_scanner.py path/to/contract.txt
  
  # Şartlar tablosu puanlaması (0-100 kurucuya uygunluk)
  python ../../../skills/general-counsel-advisor/scripts/term_sheet_analyzer.py path/to/term_sheet.json
  ```
  
  `cs-general-counsel-advisor` aracısı her iki aracı artı 3 referans (kontrat oyun kitabı, IP + düzenleyici, şartlar tablosu çözücü) düzenler.
  
  ## İlgili
  
  - Beceri: [`general-counsel-advisor`](https://github.com/alirezarezvani/claude-skills/blob/HEAD/skills/general-counsel-advisor/SKILL.md) — Python araçları + referansları içeren tam beceri
  - Ajan: [`cs-general-counsel-advisor`](https://github.com/alirezarezvani/claude-skills/blob/HEAD/agents/cs-general-counsel-advisor.md)
  - Uyum yürütme: `../../../../ra-qm-team/`
  - Komşu: `../../../skills/ma-playbook/`
  
  ---
  
  **Sürüm:** 1.0.0
---

# /cs:gc-review — General Counsel Forcing Questions

**Command:** `/cs:gc-review <plan>`

The General Counsel lens. Six questions before any contract, term sheet, IP move, or regulatory commitment. This is a lane gstack has zero of — and one where a single missed clause costs more than a year of engineering.

> ⚠️ **Not legal advice.** This command surfaces the right questions to ask before talking to outside counsel. Always engage qualified counsel for binding decisions.

## When to Run

- Before signing any contract > $100K or > 1 year
- Before issuing equity (employee grants, advisor grants)
- Before a term sheet response
- Before entering a regulated market (healthcare, fintech, defense)
- Before any open-source license decision in core IP
- Before an M&A LOI

## The Six GC Questions

### 1. IP Ownership
**Who owns the IP being created or shared in this transaction?**
- Work-for-hire vs license vs joint.
- For employees and contractors: written IP assignment in place?
- For OSS: license compatibility checked?

### 2. Liability & Indemnity
**What's the liability cap, and what's carved out from it?**
- Standard cap: 12 months of fees.
- Carve-outs: IP infringement, data breach, willful misconduct.
- Mutual indemnity desirable.

### 3. Data Processing
**What personal data is involved, and is a DPA in place?**
- GDPR / CCPA scope?
- Subprocessor flow-down?
- Data residency requirements?

### 4. Termination & Renewal
**What's the termination right, what's the notice period, and what's auto-renew?**
- Termination for convenience vs cause.
- Notice period (30 / 60 / 90 days).
- Auto-renewal trap?

### 5. Regulatory Surface
**Does this expose the company to a new regulatory regime?**
- Healthcare → HIPAA.
- Fintech → BSA/AML, state money-transmitter.
- Medical device → FDA, MDR, ISO 13485.
- Data → GDPR, CCPA, state breach laws.

### 6. Employment / Equity
**If this is a hire or contractor: jurisdiction, classification, equity grant, IP assignment?**
- Misclassification risk?
- Equity vesting standard (4-year, 1-year cliff)?
- Acceleration triggers?
- 409A current?

## Workflow

1. Read the contract / term sheet end to end
2. Run the six questions
3. Identify the top-3 issues that need outside counsel review
4. Apply the verdict

## Output Format

```markdown
# GC Review: <plan>
**Date:** YYYY-MM-DD

## Document
- Type: <contract / term sheet / grant / DPA>
- Counterparty: <name>
- $ value or scope: <amount>

## Issues
| # | Issue | Risk | Recommendation |
|---|---|---|---|
| 1 | <e.g., uncapped IP indemnity> | HIGH | Cap at fees paid, mutual |
| 2 | <e.g., 5-year auto-renew> | MED | 1-year max, 60-day notice |
| 3 | <e.g., no DPA, EU data> | HIGH | Require DPA before sign |

## Regulatory Trigger
- New regime triggered? <yes/no>
- Specific frameworks: <HIPAA / GDPR / etc.>

## Outside Counsel Action Items
- [ ] <specific item 1>
- [ ] <specific item 2>
- [ ] <specific item 3>

## Verdict
🟢 SIGN AS-IS (rare)
🟡 NEGOTIATE — counter on top-3 issues
🔴 DO NOT SIGN — material risk
```

## Routing

- `/cs:ciso-review` — for any data-touching contract
- `/cs:cfo-review` — for any commitment > 1 year or > 1% of revenue
- `/cs:decide` — log the verdict after outside counsel review

## Workflow Integration with `general-counsel-advisor` skill

Since v2.5.1, this command is backed by a full skill at `../../../skills/general-counsel-advisor/` with two Python tools:

```bash
# Automated contract scan (12 founder-killer patterns)
python ../../../skills/general-counsel-advisor/scripts/contract_risk_scanner.py path/to/contract.txt

# Term sheet scoring (0-100 founder-friendliness)
python ../../../skills/general-counsel-advisor/scripts/term_sheet_analyzer.py path/to/term_sheet.json
```

The `cs-general-counsel-advisor` agent orchestrates both tools plus 3 references (contracts playbook, IP + regulatory, term sheet decoder).

## Related

- Skill: [`general-counsel-advisor`](https://github.com/alirezarezvani/claude-skills/blob/HEAD/skills/general-counsel-advisor/SKILL.md) — full skill with Python tools + references
- Agent: [`cs-general-counsel-advisor`](https://github.com/alirezarezvani/claude-skills/blob/HEAD/agents/cs-general-counsel-advisor.md)
- Compliance execution: `../../../../ra-qm-team/`
- Adjacent: `../../../skills/ma-playbook/`

---

**Version:** 1.0.0
