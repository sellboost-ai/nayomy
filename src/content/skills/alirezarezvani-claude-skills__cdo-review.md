---
name: "cdo-review"
description_en: "/cs:cdo-review <plan> — Decision-driven Chief Data Officer interrogation of any plan that touches training data, data architecture, data productization, or data team hiring."
description_tr: "/cs:cdo-review <plan> — Eğitim verisi, veri mimarisi, veri ürünleştirme veya veri ekibi işe alımı ile ilgili herhangi bir plana yönelik karar odaklı Chief Data Officer sorgusudur."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 16160
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/cdo-review/SKILL.md"
path: ".gemini/skills/cdo-review/SKILL.md"
is_collection: false
body_length: 4647
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /cs:cdo-review — CDO Zorlama Soruları

  **Komut:** `/cs:cdo-review <plan>`

  Karar odaklı CDO, veri stratejisine dokunan herhangi bir planı baskı altında test eder. Herhangi bir veri mimarisi, AI eğitim çalışması, veri ürünleştirmesi veya veri ekibi işe alımına taahhüt etmeden önce altı soru.

  ## Ne Zaman Çalıştırılır

  - Müşteri verilerini kullanan yeni bir ML modeli eğitim çalışmasını onaylamadan önce
  - Çok yıllı veri altyapısı SaaS sözleşmesi imzalamadan önce (Snowflake, Databricks, Fivetran)
  - Herhangi bir müşteri verisini ürünleştirmeden önce (benchmark raporu, embedding endpoint, lisans)
  - Önemli bir veri ekibi işe alımından önce (veri başkanı, CDO, veri PM, ML mühendisi)
  - M&A due diligence'den önce — sizin veya onların
  - Kurucu "para kazanmak" kelimesini "veri" yakınında kullandığında

  ## Altı CDO Sorusu

  ### 1. Bu veriler hangi kararı yönlendirir?
  **Hiçbir karar açılmazsa, neden topluyor / eğitim yapıyor / ürünleştiriyoruz?**
  - "Daha sonra gerekebilir" bir karar değildir.
  - "Bir hendek gibi görünüyor" bir karar değildir.
  - Gerçek bir yanıt, bu verileri gerektiren belirli bir iş çağrısını adlandırır.

  ### 2. Her kaynak için rıza kaynağı nedir?
  **Her veri kaynağı için: köken, rıza akışı, veri sınıfı, amaçlanan kullanım.**
  - 1st-party-TOS-only, 1st-party-explicit-opt-in'den daha zayıftır.
  - Paket halinde TOS, maddi yeni amaçları kapsamaz (PII'de foundation modeller için eğitim).
  - Kapsam içinde herhangi bir AI kullanım örneği varsa `ai_training_data_audit.py` çalıştırın.

  ### 3. Bunu dahili olarak kim tüketiyor — ve kaç farklı işlevsel alan?
  **Merkezi-vs-gömülü ve warehouse-vs-mesh kararlarını yönlendirir.**
  - <5 tüketici: warehouse-only.
  - 5-25 tüketici: lakehouse.
  - 25+ tüketici + federe kültür: mesh.
  - Erken mimari seçim, veri ekibi tükenmişliğinin #1 nedenidir.

  ### 4. M&A due diligence etkisi nedir?
  **Bir satın alanın yarın bu veri külliyatı hakkında sorsa, hazır mıyız?**
  - Belgelenmiş bir anonim hale getirme süreci var mı?
  - Müşterilerin yüzde kaçı MSA hariç tutulmıştır?
  - Eğitim verisi provenance logları güncel mi?
  - Üç ayda bir `data_asset_valuator.py` çalıştırın.

  ### 5. Model / karar / rapor, bu kaynak olmadan yeniden eğitilebilir / yeniden çalıştırılabilir / yeniden yayınlanabilir mi?
  **Belirli bir veri kaynağına ne kadar bağlı olduğunuzu test eder.**
  - Evet → düşük etki alanı; rıza duruşunu daha sonra değiştirebilirsiniz.
  - Hayır → yüksek etki alanı; kaynağa yapısal olarak taahhüt ettiniz. Daha sıkı kontrol edin.

  ### 6. Hangi rol bunu açar — ve doğru sonraki işe alma mı?
  **Yanlış işe alma (veri bilimci), doğru cevap (analytics mühendisi) 12 aylık üretkenlik kaybıdır.**
  - Açılan kararı belirli role eşleyin.
  - Ön koşul rollerin yerinde olduğunu doğrulayın (ML mühendisinden önce veri mühendisi, veri bilimciden önce analist).

  ## İş Akışı

  ```bash
  # 1. AI eğitim denetimi (ML / AI kullanım örneği varsa)
  python ../../../skills/chief-data-officer-advisor/scripts/ai_training_data_audit.py sources.json

  # 2. Mimari karar (yığını değiştiriyorsanız)
  python ../../../skills/chief-data-officer-advisor/scripts/data_product_strategy_picker.py profile.json

  # 3. Veri varlığı değerlemesi (ürünleştiriyorsanız veya M&A öncesi)
  python ../../../skills/chief-data-officer-advisor/scripts/data_asset_valuator.py corpus.json
  ```

  ## Çıktı Formatı

  ```markdown
  # CDO İncelemesi: <plan>
  **Tarih:** YYYY-MM-DD

  ## Alınan Karar
  [bir cümle — dört CDO kararından hangisi: training | architecture | asset | hire]

  ## Eğitim Denetimi (geçerliyse)
  - NO-GO kaynakları: N
  - MITIGATE kaynakları: N
  - GO kaynakları: N
  - En önemli düzeltme: <bir satır>

  ## Mimari (geçerliyse)
  - Önerilen: WAREHOUSE / LAKEHOUSE / MESH
  - Build-vs-buy özeti: <bir satır>
  - Durdurma kriterleri: <ne zaman gözden geçirilecek>

  ## Varlık Değeri (geçerliyse)
  - Stratejik değer: X/10 | Hendek: STRONG / MEDIUM / WEAK
  - M&A çarpanı: X.Xx – X.Xx ARR
  - Önerilen ürünleştirme yolu: <ad>

  ## Kurum (geçerliyse)
  - Sonraki işe alma: <rol>
  - Neden bu, o değil: <bir satır>
  - Ön koşul işe almalar yerinde: evet/hayır

  ## Karar
  🟢 SHIP | 🟡 SHARPEN | 🔴 BLOCK

  ## Sonraki Adımlar
  [3 somut eylem]
  ```

  ## Yönlendirme

  - `/cs:gc-review` — herhangi bir ürünleştirme veya lisans yolu için
  - `/cs:ciso-review` — müşteri verilerine dokunan herhangi bir mimari değişiklik için
  - `/cs:cfo-review` — build-vs-buy TCO ve M&A değerleme matematiği için
  - `/cs:chro-review` — veri ekibi işe alımı (comp, ladder, leveling) için
  - `/cs:decide` — kararı kaydedin
  - `/cs:freeze 90` — çok yıllı altyapı sözleşmelerinde

  ## İlgili

  - Agent: [`cs-cdo-advisor`](../../agents/cs-cdo-advisor.md)
  - Skill: [`chief-data-officer-advisor`](../../../skills/chief-data-officer-advisor/SKILL.md)
  - Komşu: `../../../skills/general-counsel-advisor/` (sözleşmeye dayalı kısıtlamalar), `../../../skills/cto-advisor/` (mimari kapasite)

  ---

  **Sürüm:** 1.0.0
---

# /cs:cdo-review — CDO Forcing Questions

**Command:** `/cs:cdo-review <plan>`

The decision-driven CDO pressure-tests any plan that touches data strategy. Six questions before any commitment to a data architecture, AI training run, data productization, or data team hire.

## When to Run

- Before approving any new ML model training run that uses customer data
- Before signing a multi-year data-infrastructure SaaS contract (Snowflake, Databricks, Fivetran)
- Before productizing any customer data (benchmark report, embedding endpoint, license)
- Before a major data team hire (head of data, CDO, data PM, ML engineer)
- Before M&A diligence — yours or theirs
- When the founder uses the word "monetize" near "data"

## The Six CDO Questions

### 1. What decision does this data drive?
**If no decision is unblocked, why are we collecting / training on / productizing it?**
- "We might need it later" is not a decision.
- "It feels like a moat" is not a decision.
- A real answer names a specific business call that requires this data.

### 2. What's the consent provenance for every source?
**For each data source: origin, consent flow, data class, intended use.**
- 1st-party-TOS-only is weaker than 1st-party-explicit-opt-in.
- Bundled TOS doesn't cover material new purposes (training on PII for foundation models).
- Run `ai_training_data_audit.py` if there's any AI use case in scope.

### 3. Who consumes this internally — and how many distinct functional domains?
**Drives the centralize-vs-embed and warehouse-vs-mesh decisions.**
- <5 consumers: warehouse-only.
- 5-25 consumers: lakehouse.
- 25+ consumers + federated culture: mesh.
- Premature architecture choice is the #1 cause of data-team burnout.

### 4. What's the M&A diligence impact?
**If an acquirer asks about this data corpus tomorrow, are we ready?**
- Is there a documented anonymization process?
- What % of customers have MSA carve-outs?
- Are training-data provenance logs current?
- Run `data_asset_valuator.py` quarterly.

### 5. Can the model / decision / report be retrained / re-run / re-published without this source?
**Tests how much you depend on a specific data source.**
- If yes → low blast radius; you can change consent posture later.
- If no → high blast radius; you've structurally committed to the source. Vet harder.

### 6. What role unblocks this — and is it the right next hire?
**Wrong hire (data scientist) when right answer (analytics engineer) is a 12-month productivity loss.**
- Map the decision being unblocked to the specific role.
- Confirm prerequisite roles are in place (data engineer before ML engineer, analyst before data scientist).

## Workflow

```bash
# 1. AI training audit (if any ML / AI use case)
python ../../../skills/chief-data-officer-advisor/scripts/ai_training_data_audit.py sources.json

# 2. Architecture decision (if changing the stack)
python ../../../skills/chief-data-officer-advisor/scripts/data_product_strategy_picker.py profile.json

# 3. Data asset valuation (if productizing or pre-M&A)
python ../../../skills/chief-data-officer-advisor/scripts/data_asset_valuator.py corpus.json
```

## Output Format

```markdown
# CDO Review: <plan>
**Date:** YYYY-MM-DD

## The Decision Being Made
[one sentence — which of the four CDO decisions: training | architecture | asset | hire]

## Training Audit (if applicable)
- NO-GO sources: N
- MITIGATE sources: N
- GO sources: N
- Top remediation: <one line>

## Architecture (if applicable)
- Recommended: WAREHOUSE / LAKEHOUSE / MESH
- Build-vs-buy summary: <one line>
- Kill criteria: <when to revisit>

## Asset Value (if applicable)
- Strategic value: X/10 | Moat: STRONG / MEDIUM / WEAK
- M&A multiplier: X.Xx – X.Xx ARR
- Recommended productization path: <name>

## Org (if applicable)
- Next hire: <role>
- Why this, not that: <one line>
- Prerequisite hires in place: yes/no

## Verdict
🟢 SHIP | 🟡 SHARPEN | 🔴 BLOCK

## Next Steps
[3 concrete actions]
```

## Routing

- `/cs:gc-review` — for any productization or licensing path
- `/cs:ciso-review` — for any architecture change touching customer data
- `/cs:cfo-review` — for build-vs-buy TCO and M&A valuation math
- `/cs:chro-review` — for data team hires (comp, ladder, leveling)
- `/cs:decide` — log the verdict
- `/cs:freeze 90` — on multi-year infrastructure contracts

## Related

- Agent: [`cs-cdo-advisor`](../../agents/cs-cdo-advisor.md)
- Skill: [`chief-data-officer-advisor`](../../../skills/chief-data-officer-advisor/SKILL.md)
- Adjacent: `../../../skills/general-counsel-advisor/` (contractual constraints), `../../../skills/cto-advisor/` (architecture capacity)

---

**Version:** 1.0.0
