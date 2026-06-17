---
name: "deal-desk"
description_en: "Use when reviewing a specific inbound deal before close — when sales has asked for a discount that exceeds AE authority, when the customer has redlined the MSA, when per-deal economics (margin after discount, multi-year payment shape, indemnity exposure) need to be quantified, or when discount approval needs to be routed to a named human approver (Sales Director, VP Sales, CFO, CRO, General Counse"
description_tr: "Gelen bir anlaşmayı kapanıştan önce incelemek için kullanın — satış ekibi AE yetkisini aşan bir indirim istediğinde, müşteri MSA'yı değiştirdiğinde, anlaşma başına ekonomik göstergeleri (indirimden sonra kar marjı, çok yıllı ödeme planı, tazminat riski) hesaplamanız gerektiğinde veya indirim onayının belirli bir onaylayıcıya (Sales Director, VP Sales, CFO, CRO, General Counsel) yönlendirilmesi gerektiğinde."
category: "Business"
repo: "alirezarezvani/claude-skills"
stars: 18313
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/deal-desk/SKILL.md"
path: ".gemini/skills/deal-desk/SKILL.md"
is_collection: false
body_length: 10242
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # deal-desk
  
  Per-deal incelemesi ve indirim onayı yönlendirmesi. Deal marjını + riski puanlandırır, indirim onayını doğru kişiye yönlendirir, T&Cs'leri ticari politikaya karşı redline eder. **Asla otomatik onay vermez.** Her çıktı, adlandırılmış bir insan onaylayıcıya yönelik bir puan artı bir yönlendirme tavsiyesidir.
  
  ## Amaç
  
  Deal Desk / RevOps / satış liderliği *satış-takımı-indirim-talep-ediyor* ile *CFO/CRO/hukuk-imzalıyor* arasındaki anı yaşar. Bu beceri talepleri niceliklendirir ve yönlendirir.
  
  Üç deterministik araç:
  
  1. `deal_scorer.py` — Bir deal'i 5 boyut (marj, risk, stratejik değer, ticari uyum, term şekli) üzerinden 0-100 arası puanlandırır ve dört karardan birini atar: **APPROVE / REVIEW / ESCALATE / DECLINE** — her biri adlandırılmış bir onaylayıcı zincirine bağlıdır.
  2. `discount_approval_router.py` — İndirim yüzdesi + deal boyutu + tier'ı adlandırılmış bir onaylayıcı zincirine eşleştirir (AE → Manager → Director → VP → CFO/CRO) tahmini cycle günleriyle birlikte. Endüstri-ayarlı politika bantlarını onurlandırır.
  3. `terms_redliner.py` — Deal şartlarında 10 kurucu/satıcı-öldürücü deseni algılar (sınırsız indemnity, MFN, perpetual license-back, eksik DPA, NET-60+, geniş non-solicit, vb.) ciddiyet + standart counter + adlandırılmış hukuk/ticari onaylayıcı ile.
  
  ## Ne zaman kullanılacak
  
  Bu beceriyi şu durumlarda çağırın:
  
  - Satış, AE yetkisinin üzerinde bir indirim talebini işaretledi.
  - Müşteri redline edilmiş bir MSA döndürdü ve hukuki yönlendirmeden önce triage'a ihtiyacınız var.
  - Deal CFO imzasına ihtiyaç duyuyor ve savunulabilir bir marj dökümü istiyorsunuz.
  - Bir RFP yanıtı çok yıllı şartlar gerektiriyor ve şekli puanlandırmanız gerekiyor.
  - Bir renewal expansion indirimle paketlendi ve politika uyumunu doğrulamanız gerekiyor.
  - Bir deal-desk onay kuyruğu oluşturuyor ve tutarlı yönlendirmeye ihtiyacınız var.
  
  **Bu beceriyi şu amaçlar için KULLANMAYIN**: teklifi yazma (bkz. `business-growth/contract-and-proposal-writer`), indirim matrisini yeniden tasarlama (bkz. `commercial-policy` kardeş becerisi) veya tam sözleşme metninin derin yasal redline'ı (bkz. `c-level-advisor/skills/general-counsel-advisor`).
  
  ## İş Akışı
  
  1. **Deal'i alın** — Satış/AE `assets/deal_intake_template.md` dosyasını ARR, term, indirim, ödeme koşulları, müşteri tier'ı, stratejik bayraklar ve müşteri tarafından işaretlenen herhangi bir term redline'ı ile doldurur (20 dakika doldurma).
  2. **Marj + riski puanlandırın** — `deal_scorer.py --input deal.json --profile {saas|enterprise-software|services|marketplace}` komutunu çalıştırın. Composite + boyuta göre dökümü + kararı okuyun.
  3. **İndirimi yönlendirin** — `discount_approval_router.py --input deal.json --profile <same>` komutunu çalıştırın. Adlandırılmış onaylayıcı zinciri + tahmini cycle günlerini alın. Modifierler (enterprise floor, SMB fast-lane) açıkça yüzey alırlar.
  4. **Redline'ları işaretleyin** — `terms_redliner.py --input deal_terms.json` komutunu çalıştırın. CRITICAL/HIGH/MEDIUM/LOW bulguları, counter-dili ve her birini imzalaması gereken onaylayıcıyı sırayla alın.
  5. **Paketi derleyin** — Üç çıktıyı bir deal-desk inceleme paketinde birleştirin. Her zaman adlandırılmış onaylayıcı zincirini ekleyin. Paket **bir tavsiye**dir, bir onay değildir.
  
  ## Scriptler
  
  | Script | Amaç | Endüstri profilleri |
  |---|---|---|
  | `scripts/deal_scorer.py` | 5 boyutlu puan kartı + karar + zincir | saas, enterprise-software, services, marketplace |
  | `scripts/discount_approval_router.py` | İndirim % → adlandırılmış onaylayıcı zinciri + cycle günleri | saas, enterprise-software, services, marketplace |
  | `scripts/terms_redliner.py` | 10 desen mayın tarayıcısı + counterlar | yok (terms-driven) |
  
  Üçü de: stdlib-only, `--help`, `--sample`, `--input <json>`, `--output {human,json}`.
  
  ## Referanslar
  
  - `references/deal_desk_canon.md` — Deal-desk işletim uygulaması: SaaStr playbook'lar (Jason Lemkin), Winning by Design (van der Kooij + Reichl), Forrester araştırması, RevOps Co-op, OpenView kıyaslamaları, Bridge Group AE comp, Salesforce Deal Desk best practices.
  - `references/discount_economics.md` — İndirim matematiği + LTV etkisi: David Skok (For Entrepreneurs), Bessemer State of the Cloud, Tomasz Tunguz, OpenView NRR araştırması, Pacific Crest + KeyBanc SaaS anketleri, Insight Partners revenue ops. Çalışan marj matematiğini içerir (%80 brüt marjlı bir üründe %30 indirim %30 değil %37,5 marj kaybeder).
  - `references/contract_landmines.md` — 10+ adlandırılmış mayın deseni örnek counter-diliyle: YC startup library, Robert Klingberg (Founder's Guide to SaaS Agreements), Bowman + Brooke redline rehberleri, IACCM/WorldCC ticari yönetim araştırması, Practical Law sözleşme kütüphanesi, Bradley Tusk kurumsal sözleşmelerde, GC100 rehberliği.
  
  ## Varsayımlar
  
  - Beceri **ticari politikanın zaten var olduğunu** varsayar (indirim bantları, ödeme-şartları normları, indemnity kapakları). Politikayı uygular; tasarlamaz. Politika tasarımı için bkz. `commercial-policy` kardeş becerisi.
  - Endüstri profilleri *alışılagelen* eşikleri içerir. Şirketinizin belgelenmiş bir indirim matrisine sahip olması durumunda, input JSON'ında `policy_thresholds` aracılığıyla geçirerek override edin.
  - Terms redliner'ı en yaygın 10 mayını algılar. **Değildir** tam sözleşme hakkında General Counsel incelemesinin yerine.
  - Puanlama ağırlıkları (marj %30, risk %20, stratejik %15, ticari %20, term %15) CFO-yönlü bir önyargı yansıtır. RevOps-led işletmeler yeniden ağırlıklandırmak isteyebilir; ağırlıklar `score_deal()` üst kısmında sabitler ve ayarlaması kolaydır.
  
  ## Anti-patternler
  
  - **Deal'leri otomatik onaylama.** Bu beceri hiçbir zaman "approved" demez. Her karar (`APPROVE` dahil) imzalaması gereken insan(lar)ı adlandırır. Çıktı bir tavsiyedir.
  - **Puan yüksek olduğu için redline taramasını atlama.** Yüksek composite'i `UNCAPPED_INDEMNITY` ile birlikte hala bir DECLINE'dır — kritik sinyaller composite'i geçersiz kılar.
  - **Bunu keyfi sözleşme metni için yasal inceleme amaçlı kullanma.** Bu beceri *yapılandırılmış* terms JSON alır. Prose redline'ı için bkz. `c-level-advisor/skills/general-counsel-advisor/scripts/contract_risk_scanner.py`.
  - **İndirim routerini indirim hesaplayıcısı olarak ele alma.** AE/müşterinin zaten önerdiği indirimi yönlendirir; doğru indirimi hesaplamaz. Pricing logic `commercial/skills/pricing-strategist`'de yaşar.
  - **Her deal'i CFO'ya yönlendirme.** Router, deal'i imzalayabilecek en düşük-otorite hoplayında durur. Over-escalation funeli yavaşlatır ve AE'leri over-discount yapmaya alıştırır.
  - **Zinciri bir hop atlamak için manuel düzenleme yapma.** Modifierler (enterprise floor, SMB fast-lane) açıktur; gizli atlamalar denetim izini bozar.
  
  ## Farklı
  
  | Kardeş | Kapsam | Fark |
  |---|---|---|
  | `commercial/skills/pricing-strategist` | **Modeli** ayarlar (per-seat vs usage vs tiered, list prices, packaging) | Strateji katmanında çalışır — deal başına değil |
  | `business-growth/contract-and-proposal-writer` | Teklifleri, SOW'ları, MSA'ları **yazar** | Çıktı bir dokümandır; deal-desk imzalamadan **önce** kapıdır |
  | `commercial/skills/commercial-policy` (kardeş) | İndirim matrisini ve onay eşikleri tasarlar | Deal-desk bu politikayı **uygular** aynı anda bir deal'e |
  | `c-level-advisor/skills/general-counsel-advisor` | Derin yasal redline + term-sheet analizi | Tam sözleşme prosesinde çalışır; deal-desk yapılandırılmış terms JSON kullanır |
  | `c-level-advisor/skills/cfo-advisor` | Burn rate, unit economics, fundraising modelleri | Stratejik finans; deal-desk bir-deal granüllüğü |
  
  ## Hızlı örnekler
  
  ```bash
  # Deal'i puanlandırın
  python3 scripts/deal_scorer.py --sample
  python3 scripts/deal_scorer.py --input my_deal.json --profile enterprise-software
  
  # İndirimi yönlendirin
  python3 scripts/discount_approval_router.py --sample
  python3 scripts/discount_approval_router.py --input my_deal.json --profile saas
  
  # Redline'ları işaretleyin
  python3 scripts/terms_redliner.py --sample
  python3 scripts/terms_redliner.py --input my_deal_terms.json --output json
  ```
  
  Örnek (%28 indirim enterprise SaaS deal'i uncapped indemnity + MFN ile) doğru şekilde 52.7 / 100 composite'te DECLINE eder — %28 indirim sabit COGS altında deal marj dolarının %35,9'unu yok eder — ve AE → Deal Desk → VP Sales → CFO → CRO → General Counsel'e yönlendirilir.
  
  ## Zorlama-soru kütüphanesi (Matt Pocock grill disiplini)
  
  Aynı anda `/cs:grill-commercial` veya Commercial orchestrator tarafından yürütülür. Soru başına tavsiye edilen cevap + canon alıntı. Asla paketlenmemiş.
  
  1. **"Tam indirimde brüt marj NEDİR VE aynı şartlarda sonraki çeyreğin pipeline'ı neye benziyor?"**
     Tavsiye: her ikisini de modelleyin. AE'inin precedent riskini açıklayabilmesini doğrulamadan onay vermeyi reddedin.
     Canon: David Skok (For Entrepreneurs — indirim matematiği), Tomasz Tunguz kıyaslamaları. Anti-pattern: bir %40 precedent 3 çeyreğin pipeline'ını yeniden şekillendirir.
  
  2. **"Bu indirim standart indirim matrisinin içinde mi dışında mı?"**
     Tavsiye: dışında ise politika istisnasını açıkça yüzey alın ve adlandırılmış istisna onaylayıcısına yönlendirin.
     Canon: OpenView indirim kıyaslamaları, RevOps Co-op playbook'lar.
  
  3. **"ARR'nin ötesinde stratejik değer nedir — logo, referans, expansion yolu?"**
     Tavsiye: adlandırılmış, doğrulanabilir bir expansion veya yazılı referans taahhüdü gerekli kılın.
     Canon: SaaStr (Jason Lemkin) logo indirimlerinde; Winning by Design taahhüt dilinde.
  
  4. **"Müşteri bir indemnity kapağını, bir liability kapağını ve bir DPA'yı (EU verisi varsa) imzaladı mı?"**
     Tavsiye: gerekli. Sınırsız indemnity, marjdan bağımsız olarak APPROVE'u bloke eden kritik-sinyal override'ıdır.
     Canon: WorldCC (eski adıyla IACCM) ticari yönetim araştırması, GC100 sözleşme rehberliği.
  
  5. **"Ödeme şartları nedir — NET-30, NET-45 veya NET-60+?"**
     Tavsiye: NET-30'u tercih edin; NET-45+, nicelleştirmeye değer bir nakit akışı dragıdır.
     Canon: KeyBanc SaaS Anketi, Pacific Crest verileri — ödeme şartlarının her 15 günü ~%2 etkili deal değerine mal olur.
  
  6. **"Term yıllık prepay ile multi-yıl mı, yoksa yıllık auto-renew mi?"**
     Tavsiye: multi-yıl prepay > yıllık prepay > yıllık auto-renew. 60 günlük bildirim olmayan auto-renew redline'ı.
     Canon: Salesforce Deal Desk best practices, OpenView NRR çalışmaları.
  
  7. **"İndirim zincirinin her hopunda adlandırılmış insan onaylayıcı kimdir?"**
     Tavsiye: yalnızca rol değil, adı yüzey alın. "VP Sales" bir onaylayıcı değildir; "Maria Singh, VP Sales" onaylayıcıdır.
     Canon: Bridge Group SaaS AE compensation araştırması — adlandırılmış onay precedent sapmasını %50+ azaltır.
  
  Derinlik öncelikli yürüyün. 1-4'ü kilitledikten sonra 5-7'yi açın. 7'nin hepsi yanıtlandıktan sonra, `deal_scorer.py` → `discount_approval_router.py` → `terms_redliner.py` sırasında çağırın.
---

# deal-desk

Per-deal review and discount-approval routing. Scores deal margin + risk, routes discount approval to the right human, redlines T&Cs against commercial policy. **Never auto-approves.** Every output is a score plus a routing recommendation to a named human approver.

## Purpose

Deal Desk / RevOps / sales leadership live at the moment between *sales-team-asks-for-discount* and *CFO/CRO/legal-signs*. This skill quantifies the asks and routes them.

Three deterministic tools:

1. `deal_scorer.py` — Scores a deal 0-100 across 5 dimensions (margin, risk, strategic value, commercial fit, term shape) and assigns one of four verdicts: **APPROVE / REVIEW / ESCALATE / DECLINE** — each tied to a named approver chain.
2. `discount_approval_router.py` — Maps a discount-percent + deal-size + tier to a named approver chain (AE → Manager → Director → VP → CFO/CRO) with estimated cycle days. Honors industry-tuned policy bands.
3. `terms_redliner.py` — Detects 10 founder/seller-killer patterns in deal terms (uncapped indemnity, MFN, perpetual license-back, missing DPA, NET-60+, broad non-solicit, etc.) with severity + standard counter + named legal/commercial approver.

## When to use

Invoke this skill when:

- Sales has flagged a discount request above AE authority.
- A customer has returned a redlined MSA and you need triage before routing to legal.
- The deal needs CFO sign-off and you want a defensible margin breakdown.
- An RFP response requires multi-year terms and you need to score the shape.
- A renewal expansion is bundled with a discount and you need to verify policy fit.
- You're building a deal-desk approval queue and need consistent routing.

**Do NOT use this skill to**: author the proposal (use `business-growth/contract-and-proposal-writer`), redesign the discount matrix (use the `commercial-policy` sibling skill), or do deep legal redline of full contract text (use `c-level-advisor/skills/general-counsel-advisor`).

## Workflow

1. **Intake the deal** — Sales/AE fills `assets/deal_intake_template.md` with ARR, term, discount, payment terms, customer tier, strategic flags, and any customer-flagged term redlines (20-min fill-out).
2. **Score margin + risk** — Run `deal_scorer.py --input deal.json --profile {saas|enterprise-software|services|marketplace}`. Read the composite + per-dimension breakdown + verdict.
3. **Route the discount** — Run `discount_approval_router.py --input deal.json --profile <same>`. Get the named approver chain + estimated cycle days. Modifiers (enterprise floor, SMB fast-lane) are surfaced explicitly.
4. **Flag the redlines** — Run `terms_redliner.py --input deal_terms.json`. Get ranked CRITICAL/HIGH/MEDIUM/LOW findings with the counter-language and the approver who must sign each.
5. **Assemble the packet** — Combine the three outputs into a deal-desk review packet. Always include the named approver chain. The packet is **a recommendation**, not an approval.

## Scripts

| Script | Purpose | Industry profiles |
|---|---|---|
| `scripts/deal_scorer.py` | 5-dimension scorecard with verdict + chain | saas, enterprise-software, services, marketplace |
| `scripts/discount_approval_router.py` | Discount % → named approver chain + cycle days | saas, enterprise-software, services, marketplace |
| `scripts/terms_redliner.py` | 10-pattern landmine scanner with counters | n/a (terms-driven) |

All three: stdlib-only, `--help`, `--sample`, `--input <json>`, `--output {human,json}`.

## References

- `references/deal_desk_canon.md` — Deal-desk operating practice: SaaStr playbooks (Jason Lemkin), Winning by Design (van der Kooij + Reichl), Forrester research, RevOps Co-op, OpenView benchmarks, Bridge Group AE comp, Salesforce Deal Desk best practices.
- `references/discount_economics.md` — Discount math + LTV impact: David Skok (For Entrepreneurs), Bessemer State of the Cloud, Tomasz Tunguz, OpenView NRR research, Pacific Crest + KeyBanc SaaS surveys, Insight Partners revenue ops. Includes worked margin math (a 30% discount on an 80% gross-margin product loses 37.5% of margin, not 30%).
- `references/contract_landmines.md` — 10+ named landmine patterns with example counter-language: YC startup library, Robert Klingberg (Founder's Guide to SaaS Agreements), Bowman + Brooke redline guides, IACCM/WorldCC commercial management research, Practical Law contracts library, Bradley Tusk on enterprise contracts, GC100 guidance.

## Assumptions

- The skill assumes the **commercial policy already exists** (discount bands, payment-terms norms, indemnity caps). It applies the policy; it does not design it. See the `commercial-policy` sibling skill for policy design.
- Industry profiles bake in *customary* thresholds. If your company has a documented discount matrix, pass it via `policy_thresholds` in the input JSON to override.
- The terms redliner detects the 10 most common landmines. It is **not** a substitute for General Counsel review on the full contract.
- Scoring weights (margin 30%, risk 20%, strategic 15%, commercial 20%, term 15%) reflect a CFO-leaning bias. RevOps-led shops may want to reweight; the weights are constants at the top of `score_deal()` and are easy to tune.

## Anti-patterns

- **Auto-approving deals.** This skill never says "approved". Every verdict (including `APPROVE`) names the human(s) who must sign. The output is a recommendation.
- **Skipping the redline scan** because the score is high. A high composite with `UNCAPPED_INDEMNITY` is still a DECLINE — critical signals override composite.
- **Using this for legal review of arbitrary contract text.** This skill takes a *structured* terms JSON. For prose redlining, use `c-level-advisor/skills/general-counsel-advisor/scripts/contract_risk_scanner.py`.
- **Treating the discount router as a discount calculator.** It routes a discount the AE/customer has already proposed; it does not calculate the right discount. Pricing logic lives in `commercial/skills/pricing-strategist`.
- **Routing every deal to CFO.** The router stops at the lowest-authority hop that can sign the deal. Over-escalation slows the funnel and trains AEs to over-discount.
- **Hand-editing the chain to skip a hop.** Modifiers (enterprise floor, SMB fast-lane) are explicit; hidden skips defeat the audit trail.

## Distinct from

| Sibling | Scope | Difference |
|---|---|---|
| `commercial/skills/pricing-strategist` | Sets the pricing **model** (per-seat vs usage vs tiered, list prices, packaging) | Operates at the strategy layer — not per deal |
| `business-growth/contract-and-proposal-writer` | **Authors** proposals, SOWs, MSAs | Output is a document; deal-desk is the gate **before** signing |
| `commercial/skills/commercial-policy` (sibling) | Designs the discount matrix and approval thresholds | Deal-desk **applies** that policy to one deal at a time |
| `c-level-advisor/skills/general-counsel-advisor` | Deep legal redline + term-sheet analysis | Operates on full contract prose; deal-desk uses structured terms JSON |
| `c-level-advisor/skills/cfo-advisor` | Burn rate, unit economics, fundraising models | Strategic finance; deal-desk is one-deal granularity |

## Quick examples

```bash
# Score a deal
python3 scripts/deal_scorer.py --sample
python3 scripts/deal_scorer.py --input my_deal.json --profile enterprise-software

# Route the discount
python3 scripts/discount_approval_router.py --sample
python3 scripts/discount_approval_router.py --input my_deal.json --profile saas

# Flag the redlines
python3 scripts/terms_redliner.py --sample
python3 scripts/terms_redliner.py --input my_deal_terms.json --output json
```

The sample (a 28%-discount enterprise SaaS deal with uncapped indemnity + MFN) correctly DECLINEs at 52.7 / 100 composite — the 28% discount destroys 35.9% of the deal's margin dollars under fixed COGS — and routes to AE → Deal Desk → VP Sales → CFO → CRO → General Counsel.

## Forcing-question library (Matt Pocock grill discipline)

Walked one at a time by `/cs:grill-commercial` or the Commercial orchestrator. Recommended answer + canon citation per question. Never bundled.

1. **"What's the gross margin at full discount, AND what does next quarter's pipeline look like at the same terms?"**
   Recommended: model both. Refuse to approve until the AE can articulate the precedent risk.
   Canon: David Skok (For Entrepreneurs — discount math), Tomasz Tunguz benchmarks. Anti-pattern: one 40% precedent reshapes 3 quarters of pipeline.

2. **"Is this discount inside or outside the standard discount matrix?"**
   Recommended: if outside, surface the policy exception explicitly and route to the named exception approver.
   Canon: OpenView discount benchmarks, RevOps Co-op playbooks.

3. **"What's the strategic value beyond ARR — logo, reference, expansion path?"**
   Recommended: require a named, verifiable expansion or reference commitment in writing.
   Canon: SaaStr (Jason Lemkin) on logo discounts; Winning by Design on commitment language.

4. **"Has the customer signed an indemnity cap, a liability cap, and a DPA (if EU data)?"**
   Recommended: required. Uncapped indemnity is a critical-signal override that blocks APPROVE regardless of margin.
   Canon: WorldCC (formerly IACCM) commercial management research, GC100 contract guidance.

5. **"What payment terms — NET-30, NET-45, or NET-60+?"**
   Recommended: prefer NET-30; NET-45+ is a cash flow drag worth quantifying.
   Canon: KeyBanc SaaS Survey, Pacific Crest data — every 15 days of payment terms costs ~2% of effective deal value.

6. **"Is the term multi-year with annual prepay, or annual auto-renew?"**
   Recommended: multi-year prepay > annual prepay > annual auto-renew. Auto-renew without 60-day notice is a redline.
   Canon: Salesforce Deal Desk best practices, OpenView NRR studies.

7. **"Who is the named human approver at each hop of the discount chain?"**
   Recommended: surface the name, not just the role. "VP Sales" is not an approver; "Maria Singh, VP Sales" is.
   Canon: Bridge Group SaaS AE compensation research — named approval reduces precedent drift by 50%+.

Walk depth-first. Lock 1-4 before opening 5-7. After all 7 are answered, invoke `deal_scorer.py` → `discount_approval_router.py` → `terms_redliner.py` in sequence.
