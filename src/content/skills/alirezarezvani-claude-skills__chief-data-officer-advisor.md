---
name: "chief-data-officer-advisor"
description_en: "Chief Data Officer advisory for startups: AI training data rights and consent provenance, data product strategy (warehouse vs lakehouse vs mesh, build-vs-buy), B2B customer-data-as-asset valuation and M&A readiness, data team org evolution. Use when deciding whether to train models on customer data, choosing data architecture, valuing data for fundraising or M&A, sequencing data hires, or when use"
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18313
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/chief-data-officer-advisor/SKILL.md"
path: ".gemini/skills/chief-data-officer-advisor/SKILL.md"
is_collection: false
body_length: 10539
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Chief Data Officer Danışmanı
  
  Startup CDO'ları ve CDO'su olmayan kurucular için stratejik veri liderliği. **Dört karar, anket yok:**
  
  1. **Bu verileri modelimizi eğitmek için kullanabilir miyiz?** — origin × onay × kullanım durumu matrisi
  2. **Warehouse, lakehouse veya mesh — ve neyi yapmalı vs satın almalıyız?** — stage-driven mimari
  3. **Müşteri verilerimizin değeri nedir?** — stratejik değer + M&A çarpanı + ürünleştirme yolları
  4. **Sonra hangi veri rolünü işe alalım?** — stage-to-role haritası, merkezi-vs-dağıtılmış tetikleyici
  
  Bu beceri **taktik veri mühendisliğini kapsamaz**. Schema tasarımı, gözlemlenebilirlik, sorgu optimizasyonu, RAG veya ML platform uygulaması için `engineering/database-designer/`, `engineering/observability-designer/`, `engineering/data-quality-auditor/`, `engineering/sql-database-assistant/`, `engineering/rag-architect/`, `engineering/llm-cost-optimizer/` bölümlerine bakın.
  
  ## Anahtar Sözcükler
  
  CDO, chief data officer, AI eğitim verisi, onay kaynağı, eğitim hakları, GDPR Madde 6 yasal temel, GDPR Madde 22, AB AI Act yüksek risk, ePrivacy, telif hakkı adil kullanım, hiQ v. LinkedIn, kazınan veri, sentetik veri, veri ürünü, data mesh, lakehouse, medallion mimarisi, dbt, Snowflake, BigQuery, Databricks, Fivetran, Airbyte, reverse ETL, feature store, müşteri verisi varlık, veri para kazanma, veri ürünleştirme, anonimleştirme, k-anonimite, diferansiyel gizlilik, M&A veri due diligence, veri org, analytics engineer, data engineer, data scientist, data product manager, merkezi vs dağıtılmış, hub and spoke
  
  ## Hızlı Başlangıç
  
  ```bash
  # Veri kaynaklarını AI eğitimi uygunluğu için denetle
  python scripts/ai_training_data_audit.py                              # gömülü örneği kullanır
  python scripts/ai_training_data_audit.py path/to/sources.json
  
  # Veri mimarisini seç + yapmalı-vs-satın-almalı + sıralamayı belirle
  python scripts/data_product_strategy_picker.py                        # gömülü Series A SaaS kullanır
  python scripts/data_product_strategy_picker.py path/to/profile.json
  
  # Müşteri veri koleksiyonunu değerle + ürünleştirme uygunluğu
  python scripts/data_asset_valuator.py                                 # gömülü B2B örneğini kullanır
  python scripts/data_asset_valuator.py path/to/corpus.json
  ```
  
  ## Temel Sorular (önce bunları sorun)
  
  - **Bu veriler hangi kararı yönlendirir?** (Yoksa neden toplayıyoruz?)
  - **Eğitmek istediğimiz her kaynağın onay kaynağı nedir?** (TOS-only, açık opt-in ile aynı değildir.)
  - **İç veri tüketicileri kimdir ve kaç farklı domain'i kapsar?** (Merkezi-vs-dağıtılmış ve warehouse-vs-mesh belirler.)
  - **M&A senaryosunda verilerimiz bir hendek mi yoksa yükümlülük mü?** (MSA'daki müşteri hariç tutmalar cevabı çevirebilir.)
  - **Analytics engineer mi yoksa data scientist mi işe almalıyız?** (Farklı sorunları çözerler; kurucular karıştırırlar.)
  - **Herhangi bir dış paylaşımdan önce anonimleştirme denetimi yaptık mı?** (k-anonimite ≥ 5 taban, tavana kadar değil.)
  
  ## Temel Sorumluluklar
  
  ### 1. AI Eğitim Verisi Hakları
  
  2026'da her startup'ın karşılaştığı soru: **müşteri verilerini modelimizi eğitmek için kullanabilir miyiz?**
  
  Cevap nadiren ikili şey. Üç bağımsız boyuta bağlıdır:
  
  | Boyut | Değerler |
  |---|---|
  | **Origin** | 1st-party-explicit-opt-in / 1st-party-TOS-only / partner-licensed / kazınan / sentetik |
  | **Veri sınıfı** | Anonim toplam / davranışsal / PII / 3rd-party içerik / düzenlenmiş (PHI, PCI, çocuklar) |
  | **Kullanım durumu** | İçi-ürün kişileştirme / modelimizi fine-tune et / foundation model eğit / dış paylaşım |
  
  Her kombinasyon GO / MITIGATE / NO-GO üretir. **Çalıştır** `ai_training_data_audit.py` kaynaklardan oluşan JSON envanterinde.
  
  Tam matris + GDPR Md. 6 yasal temel karar ağacı + AB AI Act yüksek risk tetikleyicileri için `references/ai_training_data_rights.md` bölümüne bakın.
  
  ### 2. Veri Ürünü Stratejisi
  
  **Mimari seçim (warehouse vs lakehouse vs mesh) tercih-driven değil stage-driven:**
  
  - **Sadece warehouse** (Snowflake / BigQuery / Postgres): ≤5 veri tüketicisi, <2TB, ML kullanım durumu yok
  - **Lakehouse** (warehouse + object storage, genellikle Databricks veya Snowflake-with-Iceberg): 5–25 veri tüketicisi, 2TB–1PB, 1–3 ML kullanım durumu
  - **Data mesh**: 25+ veri tüketicisi 4+ domain'de, federe sahiplik kültürü yerinde
  
  **Yapmalı-vs-satın-almalı katman başına karar verilir:**
  
  | Katman | Satın al eğer değilse | Sadece yap eğer |
  |---|---|---|
  | Storage / warehouse | Asla yapma | (Veri infra şirketi misin) |
  | ELT / ingest | Asla yapma | Kaynak Fivetran/Airbyte tarafından desteklenmiyor |
  | Modeling (dbt) | Her zaman yap | Bu senin IP'n |
  | BI / dashboards | Satın al <100 tüketici | Müşteriler için gömülü analitik |
  | Feature store | Erteле 3+ prod modeline kadar | Sonra Tecton/Hopsworks yap VEYA satın al |
  | ML platform | Erteле 5+ prod modeline kadar | Sonra SageMaker/Vertex/Databricks satın al |
  
  **Çalıştır** `data_product_strategy_picker.py` stage-spesifik tavsiye için. Her mimari için durdurma kriterleri ve yapmalı-vs-satın-almalı karar ağacı için `references/data_product_strategy.md` bölümüne bakın.
  
  ### 3. B2B Müşteri-Verisi-Varlık
  
  **Kayma:** Series B+ de, müşteri verisi artık sadece operasyonel değil — aşağıdakiler olabilecek bir varlık:
  - Savunulabilirlik hendek (çoğaltmak yıl müşteri kohortunu gerektirir)
  - M&A çarpanı (stratejik alıcılar için ARR'de 1.2x–2x kaldırım)
  - Doğrudan gelir akışı (anonimleştirilmiş sektör karşılaştırmaları, embedding endpoint'leri, lisanslama)
  
  Ama **yükümlülük** de olabilir:
  - 47/380 müşteri MSA hariç tutmalarıyla ürünleştirme yasal olarak imkansız
  - Anonimleştirme denetimleri genellikle tolere edilebilir eşikler üzerinde re-identification riski ortaya çıkarır
  - Düzenleyici maruz kalma lineer olarak ürünleştirmeyle artar (GDPR Md. 28 işlemciler vs Md. 26 ortak kontrolörleri)
  
  **Çalıştır** `data_asset_valuator.py` corpus karakteristikleriyle stratejik değer skoru + ürünleştirme yolları + riske ayarlanmış değer almak için.
  
  Değerleme framework, M&A due diligence prep kontrol listesi ve kontraktual kısıt denetim deseni için `references/customer_data_as_asset.md` bölümüne bakın.
  
  ### 4. Veri Ekibi Org Evrimi
  
  **Yanlış soru:** "Data scientist işe alsak mı?"
  **Doğru soru:** "Veri nedeniyle hangi karar alamıyoruz ve hangi rol bu sorunu çözer?"
  
  Stage-to-role haritası (B2B SaaS baseline):
  
  | Stage | İlk işe alma | Sonra | Sonra |
  |---|---|---|---|
  | Pre-seed / seed | Founder-as-analyst (SQL + spreadsheets) | — | — |
  | Series A | Analyst | Analytics engineer (dbt) | — |
  | Series B | Data engineer | Senior analyst (GTM'de gömülü) | Data PM (3+ ekip veri ihtiyaçsa) |
  | Growth | Manager of analytics | ML engineer (model core ise) | Head of Data |
  | Late-stage | Head of Data → CDO | Specialized: BI, MLE, DPO | Federe sahipler domain başına (mesh) |
  
  **Merkezi-vs-dağıtılmış tetikleyici:** 3+ fonksiyonel alan (sales, marketing, product, ops, CS) haftalık bespoke veri ihtiyacında, merkezi ekip darboğaz olur. Bir işe alma krizi haline gelmeden hub-and-spoke (merkezi platform + dağıtılmış analistler) ye taşıyın.
  
  `references/data_team_org_evolution.md` bölümüne bakın.
  
  ## İş Akışları
  
  ### İş Akışı 1: AI Eğitim Kararı (1 saat)
  **Hedef:** Belirli bir veri kaynağının belirli bir kullanım durumunu eğitip eğitemedene karar verin.
  
  ```bash
  # 1. sources.json oluştur veri kaynağı başına bir giriş
  # 2. Denetimi çalıştır
  python scripts/ai_training_data_audit.py sources.json
  # 3. Her MITIGATE için: sahip ata + çözüm
  # 4. Her NO-GO için: yasal günlüğe durdurma nedeni belge
  # 5. cs-general-counsel-advisor ile en iyi 3 çözüm öğesiyle çapraz kontrol
  # 6. /cs:decide aracılığıyla günlüğe kaydet
  ```
  
  ### İş Akışı 2: Mimari Karar (1 gün)
  **Hedef:** Warehouse / lakehouse / mesh seç ve sonraki 12 ay için yapmalı-vs-satın-almalı bölümü belirle.
  
  ```bash
  python scripts/data_product_strategy_picker.py profile.json
  # cs-cto-advisor ile mühendislik kapasitesinde çapraz kontrol
  # cs-cfo-advisor ile 3 yıllık TCO'da çapraz kontrol
  # /cs:decide aracılığıyla günlüğe kaydet; multi-yıl SaaS sözleşmesi imzalanırsa /cs:freeze 90 düşün
  ```
  
  ### İş Akışı 3: M&A Hazırlığı için Veri Varlığı Değerlendirmesi (3 gün)
  **Hedef:** Veri koleksiyonunu değerle ve due diligence'e hazırlan.
  
  1. Koleksiyonu envanter et: boyut, tazelik, dışluluk, müşteri çakışması, kontraktual kısıtlamalar
  2. `data_asset_valuator.py` çalıştır
  3. `customer_data_as_asset.md` de M&A due diligence prep kontrol listesini çalıştır
  4. Kontraktual hariç tutmaları cs-general-counsel-advisor'a yeniden yapılandırma planı için sun
  5. Ürünleştirme yoluna karar ver (benchmark raporu / embedding endpoint'i / doğrudan lisans)
  6. /cs:decide aracılığıyla günlüğe kaydet
  
  ### İş Akışı 4: Veri Ekibi Yol Haritası (1 hafta)
  **Hedef:** İşletme kararlarına uyumlu sonraki 18 ayın veri işe almalarını oluştur.
  
  1. İş verilerden kaynaklanarak alamadığı ya da çözümsüz analiz nedeniyle 5 karar listele
  2. Her kararı kilitini açan role eşle
  3. İşe almalar sıra (bir zaman bir rol, sonraki öncesi ramp)
  4. cs-chro-advisor ile comp bantları ve leveling'de çapraz kontrol
  5. Merkezi-vs-dağıtılmış tetikleyici tarihini belirle
  
  ## Çıktı Standartları (cs-cdo-advisor aracılığıyla çağrıldığında)
  
  ```
  **Özet:** [bir cümle — karar ve gerekçe]
  **Karar:** [4 çerçeveden biri]
  **Kanıt:** [sayılar, sıfatlar değil]
  **Hareket:** [3 somut sonraki adım]
  **Sizin Kararınız:** [sadece kurucunun yapabileceği çağrı]
  ```
  
  ## Bitişik Beceriler
  
  - `c-level-advisor/skills/cto-advisor/` — mimari kapasite, ölçekleme uçurumları
  - `c-level-advisor/skills/ciso-advisor/` — veri güvenliği, ürünleştirilmiş veri için tehdit modelleme
  - `c-level-advisor/skills/general-counsel-advisor/` — kontraktual kısıtlamalar, DPA, eğitim verisi hakları
  - `c-level-advisor/skills/cfo-advisor/` — yapmalı-vs-satın-almalı TCO, M&A değerleme matematik
  - `c-level-advisor/skills/chro-advisor/` — veri ekibi işe alma, leveling, comp
  - `engineering/skills/database-designer/` — taktik schema tasarımı
  - `engineering/skills/rag-architect/` — taktik AI/RAG uygulaması
  - `engineering/llm-cost-optimizer/` — model maliyet yönetimi
  
  ## Referanslar
  
  - [ai_training_data_rights.md](references/ai_training_data_rights.md) — Eğitim hakları matrisi + GDPR Md. 6 / AB AI Act karar ağacı
  - [data_product_strategy.md](references/data_product_strategy.md) — Warehouse / lakehouse / mesh durdurma kriterleri + yapmalı-vs-satın-almalı karar ağacı
  - [customer_data_as_asset.md](references/customer_data_as_asset.md) — Değerleme framework + M&A due diligence hazırlık + ürünleştirme yolları
  - [data_team_org_evolution.md](references/data_team_org_evolution.md) — Stage-to-role haritası + merkezi-vs-dağıtılmış tetikleyici
  
  ---
  
  **Sürüm:** 1.0.0
  **Durum:** Production Ready
  **Uyarı:** Eğitim verisi hakları, veri ürünleştirmesi veya M&A veri due diligence'ine dokunan kararlar nitelikli avukatı içermelidir. Bu beceri kararları ve takasları ortaya koymaktadır — yasal incelemeyi yerine almaz.
---

# Chief Data Officer Advisor

Strategic data leadership for startup CDOs and founders without one. **Four decisions, no surveys:**

1. **Can we train our model on this data?** — origin × consent × use-case matrix
2. **Warehouse, lakehouse, or mesh — and what do we build vs buy?** — stage-driven architecture
3. **What is our customer data worth?** — strategic value + M&A multiplier + productization paths
4. **What data role do we hire next?** — stage-to-role map, centralize-vs-embed trigger

This skill does **not** cover tactical data engineering. For schema design, observability, query optimization, RAG, or ML platform implementation, see `engineering/database-designer/`, `engineering/observability-designer/`, `engineering/data-quality-auditor/`, `engineering/sql-database-assistant/`, `engineering/rag-architect/`, `engineering/llm-cost-optimizer/`.

## Keywords

CDO, chief data officer, AI training data, consent provenance, training rights, GDPR Article 6 lawful basis, GDPR Article 22, EU AI Act high-risk, ePrivacy, copyright fair use, hiQ v. LinkedIn, scraped data, synthetic data, data product, data mesh, lakehouse, medallion architecture, dbt, Snowflake, BigQuery, Databricks, Fivetran, Airbyte, reverse ETL, feature store, customer data as asset, data monetization, data productization, anonymization, k-anonymity, differential privacy, M&A data diligence, data org, analytics engineer, data engineer, data scientist, data product manager, centralize vs embed, hub and spoke

## Quick Start

```bash
# Audit data sources for AI training eligibility
python scripts/ai_training_data_audit.py                              # uses embedded sample
python scripts/ai_training_data_audit.py path/to/sources.json

# Pick data architecture + build-vs-buy + sequencing
python scripts/data_product_strategy_picker.py                        # uses embedded Series A SaaS
python scripts/data_product_strategy_picker.py path/to/profile.json

# Value the customer data corpus + productization viability
python scripts/data_asset_valuator.py                                 # uses embedded B2B sample
python scripts/data_asset_valuator.py path/to/corpus.json
```

## Key Questions (ask these first)

- **What decision does this data drive?** (If none, why are we collecting it?)
- **What's the consent provenance of every source we want to train on?** (TOS-only is not the same as explicit opt-in.)
- **Who are the internal data consumers, and how many distinct domains do they span?** (Drives centralize-vs-embed and warehouse-vs-mesh.)
- **In an M&A scenario, is our data a moat or a liability?** (Customer carve-outs in MSAs can flip the answer.)
- **Are we hiring an analytics engineer or a data scientist next?** (They solve different problems; founders confuse them.)
- **Have we run an anonymization audit before any external sharing?** (k-anonymity ≥ 5 is the floor, not the ceiling.)

## Core Responsibilities

### 1. AI Training Data Rights

The 2026 question every startup is facing: **can we use customer data to train our model?**

The answer is rarely binary. It depends on three independent dimensions:

| Dimension | Values |
|---|---|
| **Origin** | 1st-party-explicit-opt-in / 1st-party-TOS-only / partner-licensed / scraped / synthetic |
| **Data class** | Anonymous aggregate / behavioral / PII / 3rd-party content / regulated (PHI, PCI, kids) |
| **Use case** | In-product personalization / fine-tune our model / train foundation model / external sharing |

Each combination produces GO / MITIGATE / NO-GO. **Run** `ai_training_data_audit.py` on a JSON inventory of sources.

See `references/ai_training_data_rights.md` for the full matrix + GDPR Art. 6 lawful basis decision tree + EU AI Act high-risk triggers.

### 2. Data Product Strategy

**Architecture choice (warehouse vs lakehouse vs mesh) is stage-driven, not preference-driven:**

- **Warehouse only** (Snowflake / BigQuery / Postgres): ≤5 data consumers, <2TB, no ML use cases
- **Lakehouse** (warehouse + object storage, often Databricks or Snowflake-with-Iceberg): 5–25 data consumers, 2TB–1PB, 1–3 ML use cases
- **Data mesh**: 25+ data consumers across 4+ domains, federated ownership culture in place

**Build vs buy is decided per layer:**

| Layer | Buy unless | Build only if |
|---|---|---|
| Storage / warehouse | Never build | (You’re a data infra company) |
| ELT / ingest | Never build | Source isn’t supported by Fivetran/Airbyte |
| Modeling (dbt) | Always build | This is your IP |
| BI / dashboards | Buy at <100 consumers | Embedded analytics for customers |
| Feature store | Defer until 3+ prod models | Then build OR buy Tecton/Hopsworks |
| ML platform | Defer until 5+ prod models | Then buy SageMaker/Vertex/Databricks |

**Run** `data_product_strategy_picker.py` for a stage-specific recommendation. See `references/data_product_strategy.md` for kill criteria per architecture and the build-vs-buy decision tree.

### 3. B2B Customer-Data-as-Asset

**The shift:** at Series B+, customer data is no longer just operational — it’s an asset that can be:
- A defensibility moat (replicating requires years of customer cohort)
- An M&A multiplier (1.2x–2x ARR uplift for strategic buyers)
- A direct revenue stream (anonymized industry benchmarks, embedding endpoints, licensing)

But it can also be a **liability**:
- 47/380 customers with MSA carve-outs makes productization legally infeasible
- Anonymization audits often reveal re-identification risk above tolerable thresholds
- Regulatory exposure increases linearly with productization (GDPR Art. 28 processors vs Art. 26 joint controllers)

**Run** `data_asset_valuator.py` with corpus characteristics to get strategic value score + productization paths + risk-adjusted value.

See `references/customer_data_as_asset.md` for the valuation framework, M&A diligence prep checklist, and contractual constraint audit pattern.

### 4. Data Team Org Evolution

**The wrong question:** "Should we hire a data scientist?"
**The right question:** "What’s the next decision we can’t make because we lack data, and what role unblocks that?"

Stage-to-role map (B2B SaaS baseline):

| Stage | First hire | Then | Then |
|---|---|---|---|
| Pre-seed / seed | Founder-as-analyst (SQL + spreadsheets) | — | — |
| Series A (Series A) | Analyst | Analytics engineer (dbt) | — |
| Series B | Data engineer | Senior analyst (embedded in GTM) | Data PM (if 3+ teams need data) |
| Growth | Manager of analytics | ML engineer (if model is core) | Head of Data |
| Late-stage | Head of Data → CDO | Specialized: BI, MLE, DPO | Federated owners per domain (mesh) |

**Centralize-vs-embed trigger:** when 3+ functional areas (sales, marketing, product, ops, CS) need bespoke data weekly, the central team becomes the bottleneck. Move to hub-and-spoke (central platform + embedded analysts) before that becomes a hiring crisis.

See `references/data_team_org_evolution.md`.

## Workflows

### Workflow 1: AI Training Decision (1 hour)
**Goal:** Decide whether a specific data source can train a specific use case.

```bash
# 1. Build sources.json with one entry per data source
# 2. Run the audit
python scripts/ai_training_data_audit.py sources.json
# 3. For each MITIGATE: assign owner + remediation
# 4. For each NO-GO: document the kill reason for the legal log
# 5. Cross-check with cs-general-counsel-advisor on top-3 mitigation items
# 6. Log via /cs:decide
```

### Workflow 2: Architecture Decision (1 day)
**Goal:** Pick warehouse / lakehouse / mesh and the build-vs-buy split for the next 12 months.

```bash
python scripts/data_product_strategy_picker.py profile.json
# Cross-check with cs-cto-advisor on engineering capacity
# Cross-check with cs-cfo-advisor on 3-year TCO
# Log via /cs:decide; consider /cs:freeze 90 if signing a multi-year SaaS contract
```

### Workflow 3: Data Asset Valuation for M&A Prep (3 days)
**Goal:** Value the data corpus and prepare for due diligence.

1. Inventory the corpus: size, freshness, exclusivity, customer overlap, contractual restrictions
2. Run `data_asset_valuator.py`
3. Run the M&A diligence prep checklist in `customer_data_as_asset.md`
4. Surface contractual carve-outs to cs-general-counsel-advisor for re-papering plan
5. Decide productization path (benchmark report / embedding endpoint / direct license)
6. Log via /cs:decide

### Workflow 4: Data Team Roadmap (1 week)
**Goal:** Build the next 18 months of data hires aligned to business decisions.

1. List the top 5 decisions the business can’t make today due to missing data or analysis
2. Map each decision to the role that unblocks it
3. Sequence hires (one role at a time, ramp before next)
4. Cross-check with cs-chro-advisor on comp bands and leveling
5. Identify the centralize-vs-embed trigger date

## Output Standards (when invoked via cs-cdo-advisor)

```
**Bottom Line:** [one sentence — decision and rationale]
**The Decision:** [one of the 4 framings]
**The Evidence:** [numbers, not adjectives]
**How to Act:** [3 concrete next steps]
**Your Decision:** [the call only the founder can make]
```

## Adjacent Skills

- `c-level-advisor/skills/cto-advisor/` — architecture capacity, scaling cliffs
- `c-level-advisor/skills/ciso-advisor/` — data security, threat modeling for productized data
- `c-level-advisor/skills/general-counsel-advisor/` — contractual constraints, DPA, training-data rights
- `c-level-advisor/skills/cfo-advisor/` — build-vs-buy TCO, M&A valuation math
- `c-level-advisor/skills/chro-advisor/` — data team hiring, leveling, comp
- `engineering/skills/database-designer/` — tactical schema design
- `engineering/skills/rag-architect/` — tactical AI/RAG implementation
- `engineering/llm-cost-optimizer/` — model cost management

## References

- [ai_training_data_rights.md](references/ai_training_data_rights.md) — The training-rights matrix + GDPR Art. 6 / EU AI Act decision tree
- [data_product_strategy.md](references/data_product_strategy.md) — Warehouse / lakehouse / mesh kill criteria + build-vs-buy decision tree
- [customer_data_as_asset.md](references/customer_data_as_asset.md) — Valuation framework + M&A diligence prep + productization paths
- [data_team_org_evolution.md](references/data_team_org_evolution.md) — Stage-to-role map + centralize-vs-embed trigger

---

**Version:** 1.0.0
**Status:** Production Ready
**Disclaimer:** Decisions touching training data rights, data productization, or M&A data diligence should involve qualified counsel. This skill surfaces decisions and tradeoffs — it does not replace legal review.
