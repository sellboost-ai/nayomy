---
name: "general-counsel-advisor"
description_en: "General Counsel advisory for startups: contract review (MSA, SaaS, NDA, DPA, employment), IP strategy, term sheet decoding, and regulatory landscape mapping. Use when reviewing any contract or term sheet, deciding when to engage outside counsel, defining IP strategy, evaluating regulatory exposure (HIPAA, GDPR, FDA, fintech), or when user mentions general counsel, GC, legal review, contract risk, "
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18266
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/general-counsel-advisor/SKILL.md"
path: ".gemini/skills/general-counsel-advisor/SKILL.md"
is_collection: false
body_length: 8122
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Genel Müşavir Danışmanı

  Genel Müşaviri olmayan startup Genel Müşavirleri ve kurucuları için stratejik hukuki çerçeveler. Sözleşme riski, fikri mülkiyet stratejisi, term sheet çözümleme, düzenleyici ortam.

  Bu **hukuki tavsiye değildir**. İmzalanmadan önce nitelikli dış avukata getirilebilecek doğru soruları ortaya koymak ve açık tuzakları yakalamak için tasarlanmıştır. Her çıktıyı lisanslı bir avukatla yapılacak bir konuşmanın başlangıç noktası olarak değerlendirin, onun yerine geçmesi için değil.

  ## Anahtar Kelimeler

  genel müşavir, GC, hukuki inceleme, sözleşme incelemesi, MSA, SaaS anlaşması, NDA, DPA, istihdam anlaşması, müteahhit anlaşması, IP devri, buluş devri, açık kaynak lisansı, OSS uyumluluğu, term sheet, tasfiye tercihi, anti-seyreltme, opsiyon havuzu, hak kazanma, hızlandırma, zorlama, orantılı, yönetim kurulu kompozisyonu, düzenleyici, HIPAA, GDPR, CCPA, FDA, MDR, fintech, BSA/AML, para transferi, AI Yasası, tazminat, sorumluluk limiti, mücbir sebepler, otomatik yenileme, uygulanacak hukuk, yetki alanı, rekabet etmeme, işçi çalmama

  ## Hızlı Başlangıç

  ```bash
  # Riskli maddeler için sözleşmeyi tara (yol verilmezse paketlenmiş örneği kullan)
  python scripts/contract_risk_scanner.py
  python scripts/contract_risk_scanner.py path/to/contract.txt

  # Term sheet'i kurucu dostu olup olmadığı açısından analiz et
  python scripts/term_sheet_analyzer.py
  python scripts/term_sheet_analyzer.py path/to/term_sheet.json
  ```

  ## Temel Sorular (bunları önce sorun)

  - **Oluşturulan veya paylaşılan fikri mülkiyete kim sahip?** (Kurucular, müteahhitlerin yazılı bir madde olmadan otomatik olarak fikri mülkiyeti devretmediğini unuturlar.)
  - **Sorumluluk limiti nedir ve nelerin dışında tutulduğu?** (Standart: 12 aylık ücretler, fikri mülkiyet ihlali, veri ihlali, kasıtlı kötü niyet hariçtürleri.)
  - **Herhangi bir kişisel veri akışı varsa DPA var mı?** (GDPR, CCPA, eyalet yasaları — AB/Kanada verisi söz konusu olduğunda vazgeçilmez.)
  - **Fesih hakkı, bildirim süresi ve otomatik yenileme tuzağı nedir?** (60 günlük bildirimle 5 yıl otomatik yenileme yaygın bir kurucu hatasıdır.)
  - **Bu sözleşme veya ürün lansmanı yeni bir düzenleyici rejim tetikler mi?** (Sağlık → HIPAA. Fintech → BSA/AML. Tıbbi cihaz → FDA/MDR.)
  - **Term sheet'ler için: tasfiye tercihi, para öncesi opsiyon havuzu, anti-seyreltme türü?** (Kurucu ekonomisinin %5'inin sessizce kaybolabileceği üç yer.)

  ## Temel Sorumluluklar

  ### 1. Sözleşme İncelemesi

  Bir startup'ın ilk 5 yılında imzaladığı standart sözleşmeler:

  - **Satıcı MSA** — Master Service Agreement (bulut, araçlar, hizmetler)
  - **Müşteri SaaS Anlaşması** — standart müşteri belgeleri + müşteri redlines'ları
  - **NDA** — karşılıklı + tek yönlü, kalıntılar + bağımsız geliştirme hariçtürleri
  - **DPA** — Veri İşleme Anlaşması (kişisel veri aktığında gerekli)
  - **İstihdam Anlaşması** — teklif mektubu, fikri mülkiyet devri, rekabet etmeme (uygulanabilir olduğu yerde), tahkim
  - **Müteahhit / 1099 Anlaşması** — fikri mülkiyet devri kritiktir; yanlış sınıflandırma riski
  - **Hisse Senedi Anlaşmaları** — opsiyon hibeleri, RSU anlaşmaları, danışman hibeleri (FAST şablonu, YC SAFE danışmanlar için)

  `contract_risk_scanner.py` dosyasını metinde çalıştırın. En yaygın 12 kurucu öldürücü maddeyi işaretler.

  ### 2. Fikri Mülkiyet Stratejisi

  - **Buluş devri** — her çalışan ve müteahhit imzalar. İstisnası yok.
  - **Açık kaynak lisans uyumluluğu** — her OSS bağımlılığının lisansını izleyin; AGPL ve GPL telif hakkı kopyalama yükümlülüklerini tetikler.
  - **Ticari sırlar** — neyin korunduğunu ve nasıl korunacağını tanımlayın (temiz oda geliştirme, erişim kontrolü, NDA'lar).
  - **Patentler** — açıklamadan sonra 12 ay içinde geçici dosya; uluslararası için PCT.
  - **Ticari markalar** — ilk kelime markasını, ikinci olarak tasarım markasını kaydedin; lansmandan önce temizleyin.
  - **Telif Hakkı** — oluşturmada otomatik, ancak yasal hasar uygunluğu için kaydedin.

  `references/ip_and_regulatory.md` dosyasına bakın.

  ### 3. Term Sheet Çözümleme

  Bir term sheet geldiğinde, kurucu dostu ve kurucu düşmanı bir sayfa arasındaki fark genellikle üç maddede gizlenir:

  - **Tasfiye tercihi** — 1x katılmayan standart; 1x katılan veya 2x düşmandır
  - **Para öncesi vs para sonrası opsiyon havuzu** — para öncesi havuz kurucuları seyreltir; para sonrası herkesin oransal olarak seyreltilir
  - **Anti-seyreltme** — geniş tabanlı ağırlıklı ortalama standarttır; tam mekanizm düşmandır

  `term_sheet_analyzer.py` dosyasını çalıştırarak bayraklarla beraber 0-100 kurucu dostluğu puanı alın.

  ### 4. Düzenleyici Ortam

  Dış avukatı taahhüt etmeden **önce** ne zaman meşgul etmelisiniz:

  | Tetikleyici | Rejim | İlk Adım |
  |---|---|---|
  | Sağlık verileri | HIPAA, HITECH, eyalet ihlal yasaları | Uzman sağlık teknolojisi avukatı |
  | Kart sahibi verileri | PCI DSS (endüstri standardı, yasa değil, ama kontrat olarak gerekli) | QSA + avukat |
  | Para hareketi | BSA/AML, eyalet para transferi (50 eyalet yaması) | Fintech uzmanı |
  | Tıbbi cihaz iddiaları | FDA 510(k) / De Novo / PMA, MDR (AB), ISO 13485 | Tıbbi cihaz uzmanı |
  | AB sakinlerinin kişisel verileri | GDPR + AI dağıtılmışsa AB AI Yasası | AB gizlilik avukatı |
  | California sakinleri | CCPA / CPRA | Gizlilik uzmanı |
  | Menkul kıymetler (tokenler, hisse senedi kitlesel fonlaması) | SEC kuralları (Reg D, Reg A+, Reg CF) | Menkul kıymetler avukatı |
  | Savunma / uzay müşterileri | ITAR, EAR, DFARS, CMMC | İhracat kontrolü avukatı |
  | AB'de AI | AB AI Yasası (risk seviyesi) | AB gizlilik + ürün avukatı |
  | İşe alım için AI (NYC, CO, IL) | Yerel önyargı denetim yasaları | İstihdam avukatı |

  Sıralama için `references/ip_and_regulatory.md` dosyasına bakın.

  ## İş Akışları

  ### İş Akışı 1: Sözleşme İncelemesi
  1. Sözleşmeyi düz metin olarak kaydedin
  2. `contract_risk_scanner.py path/to/contract.txt` dosyasını çalıştırın
  3. Her YÜKSEK risk bulgusu için karşı teklif taslağı yapın
  4. Redline + karşı teklifleri dış avukata getirin
  5. Kararı `/cs:decide` ile günlüğe kaydedin

  ### İş Akışı 2: Term Sheet Yanıtı
  1. Term sheet'i `term_sheet_analyzer.py --help` içindeki şemayla eşleşen bir JSON dosyası olarak kaydedin
  2. `python scripts/term_sheet_analyzer.py path/to/term_sheet.json` dosyasını çalıştırın
  3. Kurucu dostluğu puanı ve madde başına bayrakları gözden geçirin
  4. En kötü 3 maddeyi müzakere edin (20'sini de kazanmaya çalışmayın)
  5. İmzalamadan önce her zaman bir menkul kıymetler/girişim avukatına gözden geçirtsin
  6. `/cs:decide` aracılığıyla `/cs:freeze 30` ile günlüğe kaydedin pişmanlık odaklı yeniden açılmayı önlemek için

  ### İş Akışı 3: fikri Mülkiyet Hijyen Denetimi
  1. Son 12 ayda tüm çalışan ve müteahhitlerin buluş devri imzaladığını doğrulayın
  2. OSS lisans envanteri çalıştırın (`pip-licenses`, npm için `license-checker`)
  3. AGPL/GPL bağımlılıklarını eşleştirin ve uyumluluğu doğrulayın (veya kaldırın)
  4. Yeni buluşlara geçici patent dosya gönderin (açıklamadan sonra 12 ay son tarih)
  5. Ürün adı için kelime-mark ticari markalarını kaydedin

  ### İş Akışı 4: Düzenleyici Tetikleyici Değerlendirmesi
  1. Sonraki 12 ayda planlanan ürün özelliklerini listeleyin
  2. Her özelliği bu belgedeki tetikleyici tablosuna eşleştirin
  3. Herhangi bir HIPAA / FDA / fintech tetikleyicisi için, **inşaattan önce** uzman avukatı meşgul edin
  4. Düzenleyici yol haritasını ve bütçesini ürün yol haritasının yanında belgeleyin
  5. ISO 27001 / SOC 2 sıralanması için `cs-ciso-advisor` ile eşleştirin

  ## Çıktı Standardı (`/cs:gc-review` aracılığıyla çağrıldığında)

  ```
  **Özet:** [imzala / müzakere et / imzalama]
  **Riskler:** [3 en yüksek ciddiyet problemi]
  **Karşı Teklifler:** [spesifik dil]
  **Dış Avukat Eylem Öğeleri:** [avukatta getirilebilecekler]
  **Sizin Kararınız:** [sadece kurucunun alabileceği çağrı]
  ```

  ## Bitişik Beceriler

  - `c-level-advisor/skills/ciso-advisor/` — Uyum çakışması (SOC 2, ISO 27001, HIPAA teknik güvenliği)
  - `c-level-advisor/skills/cfo-advisor/` — Term sheet → seyreltme matematiği
  - `c-level-advisor/skills/ma-playbook/` — Satın alma anlaşmaları, entegrasyon oyun kitapları
  - `ra-qm-team/` — ISO 13485, MDR, FDA 510(k), GDPR yürütme
  - `c-level-advisor/c-level-agents/skills/gc-review/SKILL.md` — `/cs:gc-review` eğik çizgi komutu

  ## Referanslar

  - [contracts_playbook.md](references/contracts_playbook.md) — Standart sözleşmeler, madde kontrol listesi, yaygın kurucu tuzakları
  - [ip_and_regulatory.md](references/ip_and_regulatory.md) — fikri mülkiyet koruması + düzenleyici ortam eşleştirmesi
  - [term_sheet_decoder.md](references/term_sheet_decoder.md) — Term sheet sözlüğü + kurucu dostu varsayılanlar + geri itme stratejileri

  ---

  **Sürüm:** 1.0.0
  **Durum:** Üretim Hazır
  **Sorumluluk Reddi:** Hukuki tavsiye değildir. Bağlayıcı kararlar için her zaman nitelikli avukat meşgul edin.
---

# General Counsel Advisor

Strategic legal frameworks for startup General Counsels and founders without one. Contract risk, IP strategy, term sheet decoding, regulatory landscape.

This is **not legal advice**. It surfaces the right questions to bring to qualified outside counsel and catches the obvious traps before they reach a signature. Treat every output as a starting point for a conversation with a licensed attorney, not as a substitute for one.

## Keywords

general counsel, GC, legal review, contract review, MSA, SaaS agreement, NDA, DPA, employment agreement, contractor agreement, IP assignment, invention assignment, open source license, OSS compliance, term sheet, liquidation preference, anti-dilution, option pool, vesting, acceleration, drag-along, pro-rata, board composition, regulatory, HIPAA, GDPR, CCPA, FDA, MDR, fintech, BSA/AML, money transmitter, AI Act, indemnity, liability cap, force majeure, auto-renewal, choice of law, venue, non-compete, non-solicit

## Quick Start

```bash
# Scan a contract for risky clauses (uses bundled sample if no path given)
python scripts/contract_risk_scanner.py
python scripts/contract_risk_scanner.py path/to/contract.txt

# Analyze a term sheet for founder-friendliness
python scripts/term_sheet_analyzer.py
python scripts/term_sheet_analyzer.py path/to/term_sheet.json
```

## Key Questions (ask these first)

- **Who owns the IP being created or shared?** (Founders forget that contractors don't auto-assign IP without a written clause.)
- **What's the liability cap, and what's carved out?** (Standard: 12 months of fees, with carve-outs for IP infringement, data breach, willful misconduct.)
- **Is there a DPA in place if any personal data flows?** (GDPR, CCPA, state laws — non-negotiable if EU/CA data is touched.)
- **What's the termination right, notice period, and auto-renewal trap?** (5-year auto-renew with 60-day notice is a common founder mistake.)
- **Does this contract or product launch trigger a new regulatory regime?** (Healthcare → HIPAA. Fintech → BSA/AML. Medical device → FDA/MDR.)
- **For term sheets: liquidation preference, pre-money option pool, anti-dilution flavor?** (Three places where 5% of founder economics can quietly disappear.)

## Core Responsibilities

### 1. Contract Review

Standard contracts a startup signs in its first 5 years:

- **Vendor MSA** — Master Service Agreement (cloud, tooling, services)
- **Customer SaaS Agreement** — your standard customer paper + customer redlines
- **NDA** — mutual + one-way, with carve-outs for residuals + independent development
- **DPA** — Data Processing Agreement (required when personal data flows)
- **Employment Agreement** — offer letter, IP assignment, non-compete (where enforceable), arbitration
- **Contractor / 1099 Agreement** — IP assignment is critical; misclassification risk
- **Equity Agreements** — option grants, RSU agreements, advisor grants (FAST template, YC SAFE for advisors)

**Run** `contract_risk_scanner.py` on the text. It flags the 12 most common founder-killer clauses.

### 2. IP Strategy

- **Invention assignment** — every employee and contractor signs one. No exceptions.
- **Open source license compliance** — track every OSS dependency's license; AGPL and GPL trigger copyleft obligations.
- **Trade secrets** — define what's protected and how (clean room dev, access controls, NDAs).
- **Patents** — file provisional within 12 months of disclosure; PCT for international.
- **Trademarks** — register the word mark first, design mark second; clear before launch.
- **Copyright** — automatic on creation, but register for statutory damages eligibility.

See `references/ip_and_regulatory.md`.

### 3. Term Sheet Decoding

When a term sheet arrives, the difference between a founder-friendly and founder-hostile sheet often hides in three clauses:

- **Liquidation preference** — 1x non-participating is standard; 1x participating or 2x is hostile
- **Pre-money vs post-money option pool** — pre-money pool dilutes founders; post-money dilutes everyone proportionally
- **Anti-dilution** — broad-based weighted average is standard; full ratchet is hostile

**Run** `term_sheet_analyzer.py` to get a 0-100 founder-friendliness score with flags.

### 4. Regulatory Landscape

When to engage outside counsel **before** committing:

| Trigger | Regime | First Step |
|---|---|---|
| Healthcare data | HIPAA, HITECH, state breach laws | Specialist health-tech counsel |
| Cardholder data | PCI DSS (industry standard, not law, but contractually required) | QSA + counsel |
| Money movement | BSA/AML, state money-transmitter (50-state patchwork) | Fintech specialist |
| Medical device claims | FDA 510(k) / De Novo / PMA, MDR (EU), ISO 13485 | Medical-device specialist |
| EU residents' personal data | GDPR + EU AI Act if AI is deployed | EU privacy counsel |
| California residents | CCPA / CPRA | Privacy generalist |
| Securities (tokens, equity crowdfunding) | SEC rules (Reg D, Reg A+, Reg CF) | Securities counsel |
| Defense / aerospace customers | ITAR, EAR, DFARS, CMMC | Export-control counsel |
| AI in EU | EU AI Act (risk-tiered) | EU privacy + product counsel |
| AI for hiring (NYC, CO, IL) | Local bias-audit laws | Employment counsel |

See `references/ip_and_regulatory.md` for sequencing.

## Workflows

### Workflow 1: Contract Review
1. Save the contract as plain text
2. Run `contract_risk_scanner.py path/to/contract.txt`
3. For each HIGH risk finding, draft a counter-proposal
4. Bring the redline + counter-proposals to outside counsel
5. Log the decision via `/cs:decide`

### Workflow 2: Term Sheet Response
1. Save the term sheet as a JSON file matching the schema in `term_sheet_analyzer.py --help`
2. Run `python scripts/term_sheet_analyzer.py path/to/term_sheet.json`
3. Review the founder-friendliness score and per-clause flags
4. Negotiate the worst 3 clauses (don't try to win all 20)
5. Always have a securities/venture attorney review before signing
6. Log via `/cs:decide` with `/cs:freeze 30` to prevent regret-driven re-opening

### Workflow 3: IP Hygiene Audit
1. Confirm every employee and contractor (past 12 months) signed invention assignment
2. Run an OSS license inventory (`pip-licenses`, `license-checker` for npm)
3. Map AGPL/GPL dependencies and confirm compliance (or remove)
4. File provisional patents on novel inventions (12-month deadline from disclosure)
5. Register word-mark trademarks for the product name

### Workflow 4: Regulatory Trigger Assessment
1. List planned product features for the next 12 months
2. Map each feature to the trigger table in this document
3. For any HIPAA / FDA / fintech trigger, engage a specialist counsel **before** building
4. Document the regulatory roadmap and budget alongside the product roadmap
5. Pair with `cs-ciso-advisor` for ISO 27001 / SOC 2 sequencing

## Output Standard (when invoked via `/cs:gc-review`)

```
**Bottom Line:** [sign / negotiate / do not sign]
**The Risks:** [3 highest-severity issues]
**Counter-Proposals:** [specific language]
**Outside Counsel Action Items:** [what to bring to the attorney]
**Your Decision:** [the call only the founder can make]
```

## Adjacent Skills

- `c-level-advisor/skills/ciso-advisor/` — Compliance overlap (SOC 2, ISO 27001, HIPAA technical safeguards)
- `c-level-advisor/skills/cfo-advisor/` — Term sheet → dilution math
- `c-level-advisor/skills/ma-playbook/` — Acquisition agreements, integration playbooks
- `ra-qm-team/` — ISO 13485, MDR, FDA 510(k), GDPR execution
- `c-level-advisor/c-level-agents/skills/gc-review/SKILL.md` — `/cs:gc-review` slash command

## References

- [contracts_playbook.md](references/contracts_playbook.md) — Standard contracts, clause checklist, common founder traps
- [ip_and_regulatory.md](references/ip_and_regulatory.md) — IP protection + regulatory landscape mapping
- [term_sheet_decoder.md](references/term_sheet_decoder.md) — Term sheet glossary + founder-friendly defaults + pushback strategies

---

**Version:** 1.0.0
**Status:** Production Ready
**Disclaimer:** Not legal advice. Always engage qualified counsel for binding decisions.
