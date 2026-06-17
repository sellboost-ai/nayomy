---
name: "gdpr-audit-prep"
description_en: "/cs:gdpr-audit-prep <scope> — GDPR audit 6-question Article-cited forcing interrogation. Use before annual internal GDPR review, post-breach internal audit, DPA investigation readiness, or acquisition due diligence."
description_tr: "/cs:gdpr-audit-prep <scope> — GDPR denetimi için 6 sorudan oluşan, Madde referanslı zorunlu sorgulama aracı. Yıllık iç GDPR incelemesi, ihlal sonrası audit, DPA soruşturmasına hazırlık veya satın alma due diligence öncesinde kullanın."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18266
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/gdpr-audit-prep/SKILL.md"
path: ".gemini/skills/gdpr-audit-prep/SKILL.md"
is_collection: false
body_length: 6502
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /cs:gdpr-audit-prep — GDPR DPO Zorlama Soruları

  **Komut:** `/cs:gdpr-audit-prep <scope>`

  GDPR DPO denetçisi, herhangi bir gizlilik uyum çalışmasını baskı altında test eder. İç denetim, ihlal tepkisi, DPA soruşturması veya satın alma durum tespiti öncesinde Madde-alıntılı altı soru.

  ## Ne Zaman Çalıştırılır

  - Yıllık iç GDPR denetiminden önce
  - Üç aylık Madde 30 RoPA yenilemesinden önce
  - Yeni yüksek riskli işleme başlatmadan önce (Madde 35 DPIA gerekli)
  - İhlalin sonrasında (Maddeler 33-34)
  - DPA soruşturması tepkisi veya denetim otoritesi katılımından önce
  - Satın alma durum tespitinde (hedef şirket gizlilik durumu)
  - Yüksek hacimli yeni özellik gönderimleri sırasında üç aylık

  ## Altı DPO Sorusu

  ### 1. Madde 30 RoPA'yı göster — son güncelleme tarihi ile.
  **En çok alıntılanan bulgu alanı.**
  - Denetleyiciler için tüm Madde 30(1)(a)-(g) öğelerini içermeli
  - İşleyiciler için tüm Madde 30(2)(a)-(d) öğelerini içermeli
  - Değişikliklerden makul süre içinde güncellenmeli (90 gün beklenir)
  - Müşterek denetleyici düzenlemeleri Madde 26'ya göre belgeli

  ### 2. Bu işleme faaliyeti için Madde 6'ya göre yasal dayanak nedir?
  **Madde 6 münhasırdır — amaç başına BİR dayanak seçin.**
  - Altı seçenek: rıza / sözleşme / yasal yükümlülük / hayati çıkarlar / kamu görevi / meşru çıkarlar
  - "Meşru çıkarlar" için: LIA belgeli
  - "Rıza" için: Madde 7'ye göre kayıtlar; geri çekme mekanizması
  - Özel kategoriler (Madde 9) bir Madde 9(2) istisnası gerektirir

  ### 3. Yüksek riskli işleme için Madde 35'e göre DPIA nerede?
  **Yüksek risk için gerekli; 3-5 faaliyeti örnekle.**
  - Madde 35(7)(a)-(d) gerekli öğeleri:
    - İşlemenin sistematik açıklaması
    - Gereklilik + orantılılık değerlendirmesi
    - Haklara + özgürlüklere yönelik riskler
    - Riskleri ele almak için önlemler
  - DPO'ya danışılmış (Madde 35(2))
  - Madde 36 ön danışma kalıcı yüksek risk için tetiklendi
  - Yapay zeka sistemleri için: AB Yapay Zeka Yasası Madde 27 FRIA ile entegre (cs-ai-act-compliance ile çapraz kontrol)

  ### 4. Son 30 günden bir DSAR göster — ve yanıt zamanlamasını göster.
  **Maddeler 15-22 operasyonel iş akışı.**
  - 1 ay içinde yanıt (Madde 12(3)); karmaşık istekler için 2 aya kadar uzatma
  - Kimlik doğrulama süreci belgeli
  - Erişim hakkı yanıtı tüm Madde 15 bilgilerini içerir
  - Silme hakkı (Madde 17) iş akışı yedeklemeleri + işleyicileri kapsar

  ### 5. En büyük AB dışı transferler için Transfer Etki Değerlendirmelerini göster.
  **Schrems II disiplini.**
  - Yeterliliği karar VEYA SCCs (Madde 46) VEYA istisna (Madde 49)
  - TIA, EDPB Tavsiyelerine göre 01/2020 + 02/2020
  - TIA risk işaret ettiği yerde ek önlemler
  - ABD transferleri EU-US Data Privacy Framework yeterliliği kapsamında (Temmuz 2023) — sertifikalı kuruluş listesini doğrula

  ### 6. Madde 33(5)'e göre ihlal günlüğünü göster — sadece haber verilebilir olanlar değil, tümü.
  **Madde 33(5) TÜM ihlallerin günlüğe kaydedilmesini gerektirir.**
  - İç ihlal algılama mekanizması belgeli
  - Madde 33 DPA bildirimi 72 saat içinde (gerekli durumlarda)
  - Madde 34 veri konusu bildirimi (yüksek risk durumlarda)
  - CAPA sistemi aracılığıyla kök neden + düzeltici eylem
  - cs-ciso-iso27001 ile A.5.24-27 olay yönetimi uyumunu çapraz kontrol et

  ## İş Akışı

  ```bash
  # 1. Uyum durumu
  python ra-qm-team/skills/gdpr-dsgvo-expert/scripts/gdpr_compliance_checker.py compliance_state.json

  # 2. Yüksek riskli faaliyetler için DPIA
  python ra-qm-team/skills/gdpr-dsgvo-expert/scripts/dpia_generator.py processing_activity.json

  # 3. DSAR iş akışı doğrulaması
  python ra-qm-team/skills/gdpr-dsgvo-expert/scripts/data_subject_rights_tracker.py dsar_log.json

  # 4. ISO 27001 + SOC 2 + ISO 42001 ile çapraz çerçeve yeniden kullanımı
  python ../../skills/compliance-os/scripts/cross_framework_mapper.py program.json
  ```

  ## Çıktı Formatı

  ```markdown
  # GDPR Denetim Hazırlığı: <scope>
  **Tarih:** YYYY-MM-DD
  **Madde Alıntıları:** Her bulgu Madde + paragraf alıntı yapar; parafraz yok.

  ## Alınan Karar
  [RoPA-yenileme | DPIA-gerekli | DSAR-iş akışı | transfer-riski | ihlal-takibi | DPA-hazırlığı]

  ## Madde 30 RoPA Durumu
  - Son yenileme: YYYY-MM-DD
  - Gerekli öğeler mevcut: evet/hayır işleme faaliyeti başına
  - Müşterek denetleyici düzenlemeleri: belgeli/eksik

  ## Madde 6 Yasal Dayanak Disiplini
  - İncelenen faaliyetler: N
  - LIA olmayan meşru çıkarlar talepleri: <list>
  - Belgeli istisna ile Madde 9 özel kategorileri: evet/hayır

  ## Madde 35 DPIA Kalitesi
  - DPIA gerektiren yüksek riskli faaliyetler: <list>
  - DPIA'lar Madde 35(7)'ye göre tam: faaliyeti başına geçti/başarısız
  - Madde 36 ön danışma tetiklendi: <list>

  ## Veri Konusu Hakları (Maddeler 12-22)
  - Son 90 günde DSAR: N
  - Ortalama yanıt süresi: X gün (hedef: ≤ 30)
  - Silme hakkı yedekleme-işleyici akışı: tam/eksik

  ## Madde 28 İşleyici Yönetimi
  - İncelenen işleyiciler: N
  - Tüm Madde 28(3)(a)-(j) maddelerine sahip sözleşmeler: % tamamlanmış
  - Alt işleyici akış bildirimi mekanizması: evet/hayır

  ## Schrems II Transfer Durumu
  - AB dışı transferler: <list>
  - Transfer başına mekanizma: yeterlilik / SCCs / istisna
  - Dosyada TIA: transfer başına evet/hayır
  - Gerekli yerde ek önlemler: <list>

  ## Madde 33-34 İhlal Disiplini
  - Son 12 ay ihlal günlüğü: N
  - Madde 33 bildirimi zamanlaması: ≤ 72h oranı
  - Madde 34 veri konusu bildirimi (yüksek risk durumlarda): zamanında oran

  ## Çapraz Çerçeve Etkisi
  - ISO 27001 Madde 32 uyumu: temiz / açıklar
  - EU Yapay Zeka Yasası Madde 27 FRIA entegrasyonu: uygulanabilir / değil
  - SOC 2 Privacy TSC uyumu (kapsam dahilse): temiz / açıklar

  ## Karar
  🟢 DPA-HAZIR | 🟡 AÇIKLAR-TESPİT EDİLDİ | 🔴 HAZIR-DEĞİL

  ## En İyi 3 Eylem
  [3 somut sonraki adım, sahibi + Madde-alıntılı zaman çizelgesi ile]

  ## Dış Hukuk Müşaviri Gerekli
  [Madde seviyesi belirsizlikleri işaret etti: Schrems II ek önlem yeterliliği, EU Yapay Zeka Yasası ↔ GDPR etkileşimi, sektörel istisna yorumu, yeni DPA yaptırım]
  ```

  ## Yönlendirme

  - `/cs:compliance-readiness` — çok çerçeveli görünüm için
  - `/cs:iso27001-audit-prep` — Madde 32 örgütsel önlemleri için
  - `/cs:ai-act-readiness` — EU Yapay Zeka Yasası Madde 27 FRIA entegrasyonu için
  - `/cs:soc2-audit-prep` — SOC 2 Privacy TSC örtüşmesi için
  - `/cs:gc-review` — yeni durum yasal incelemesi için

  ## İlgili

  - Ajan: [`cs-dpo-gdpr`](../../agents/cs-dpo-gdpr.md)
  - Beceri: [`gdpr-dsgvo-expert`](../../../ra-qm-team/skills/gdpr-dsgvo-expert/SKILL.md)
  - Oyun Kitabı: [gdpr_audit_playbook.md](../../../ra-qm-team/skills/gdpr-dsgvo-expert/references/gdpr_audit_playbook.md)
  - Bitişik: `../iso27001-audit-prep/`, `../ai-act-readiness/`, `../soc2-audit-prep/`, `../compliance-readiness/`

  ---

  **Sürüm:** 1.0.0
---

# /cs:gdpr-audit-prep — GDPR DPO Forcing Questions

**Command:** `/cs:gdpr-audit-prep <scope>`

The GDPR DPO auditor pressure-tests any privacy compliance work. Six Article-cited questions before any internal audit, breach response, DPA investigation, or acquisition due diligence.

## When to Run

- Before annual internal GDPR audit
- Before quarterly Article 30 RoPA refresh
- Before launching new high-risk processing (Article 35 DPIA required)
- Post-breach (Articles 33-34)
- Before DPA investigation response or supervisory authority engagement
- During acquisition due diligence (target company privacy posture)
- Quarterly during high-volume new-feature shipping

## The Six DPO Questions

### 1. Show me the Article 30 RoPA — with last-updated date.
**Most-cited finding area.**
- Must include all Article 30(1)(a)-(g) elements for controllers
- Must include all Article 30(2)(a)-(d) elements for processors
- Updated within reasonable time of changes (90 days expected)
- Joint controller arrangements documented per Article 26

### 2. For this processing activity, what's the lawful basis under Article 6?
**Article 6 is exclusive — pick ONE basis per purpose.**
- Six options: consent / contract / legal obligation / vital interests / public task / legitimate interests
- Where "legitimate interests": LIA documented
- Where "consent": records per Article 7; withdrawal mechanism
- Special categories (Article 9) require an Article 9(2) exception

### 3. For high-risk processing, where's the DPIA per Article 35?
**Required for high-risk; sample 3-5 activities.**
- Article 35(7)(a)-(d) required elements:
  - Systematic description of processing
  - Necessity + proportionality assessment
  - Risks to rights + freedoms
  - Measures to address risks
- DPO consulted per Article 35(2)
- Article 36 prior consultation triggered for residual high risk
- For AI systems: integrates with EU AI Act Article 27 FRIA (cross-check with cs-ai-act-compliance)

### 4. Show me a DSAR from the last 30 days — and the response timing.
**Articles 15-22 operational workflow.**
- Response within 1 month (Article 12(3)); extension up to 2 months for complex requests
- Identity verification process documented
- Right of access response includes all Article 15 information
- Right to erasure (Article 17) workflow covers backups + processors

### 5. Show me Transfer Impact Assessments for the largest non-EU transfers.
**Schrems II discipline.**
- Adequacy decision OR SCCs (Article 46) OR derogation (Article 49)
- TIA per EDPB Recommendations 01/2020 + 02/2020
- Supplementary measures where TIA flagged risk
- US transfers covered by EU-US Data Privacy Framework adequacy (Jul 2023) — verify list of certified entities

### 6. Show me the breach log per Article 33(5) — all breaches, not just notifiable ones.
**Article 33(5) requires logging ALL breaches.**
- Internal breach detection mechanism documented
- Article 33 DPA notification within 72 hours (where required)
- Article 34 data subject notification (where high risk)
- Root cause + corrective action via CAPA system
- Cross-check with cs-ciso-iso27001 for A.5.24-27 incident management alignment

## Workflow

```bash
# 1. Compliance posture
python ra-qm-team/skills/gdpr-dsgvo-expert/scripts/gdpr_compliance_checker.py compliance_state.json

# 2. DPIA for high-risk activities
python ra-qm-team/skills/gdpr-dsgvo-expert/scripts/dpia_generator.py processing_activity.json

# 3. DSAR workflow validation
python ra-qm-team/skills/gdpr-dsgvo-expert/scripts/data_subject_rights_tracker.py dsar_log.json

# 4. Cross-framework reuse with ISO 27001 + SOC 2 + ISO 42001
python ../../skills/compliance-os/scripts/cross_framework_mapper.py program.json
```

## Output Format

```markdown
# GDPR Audit Prep: <scope>
**Date:** YYYY-MM-DD
**Article Citations:** Every finding cites Article + paragraph; no paraphrase.

## The Decision Being Made
[RoPA-refresh | DPIA-required | DSAR-workflow | transfer-risk | breach-followup | DPA-readiness]

## Article 30 RoPA Status
- Last refresh: YYYY-MM-DD
- Required elements present: yes/no per processing activity
- Joint controller arrangements: documented/missing

## Article 6 Lawful Basis Discipline
- Activities reviewed: N
- Legitimate-interests claims without LIA: <list>
- Article 9 special categories with documented exception: yes/no

## Article 35 DPIA Quality
- High-risk activities requiring DPIA: <list>
- DPIAs complete per Article 35(7): pass/fail per activity
- Article 36 prior consultation triggered: <list>

## Data Subject Rights (Articles 12-22)
- DSARs in last 90 days: N
- Average response time: X days (target: ≤ 30)
- Right to erasure backup-processor flow: complete/incomplete

## Article 28 Processor Management
- Processors reviewed: N
- Contracts with all Article 28(3)(a)-(j) clauses: % complete
- Sub-processor flow-down notification mechanism: yes/no

## Schrems II Transfer Status
- Non-EU transfers: <list>
- Mechanism per transfer: adequacy / SCCs / derogation
- TIA on file: yes/no per transfer
- Supplementary measures where needed: <list>

## Article 33-34 Breach Discipline
- Breach log last 12 months: N
- Article 33 notification timing: ≤ 72h ratio
- Article 34 data subject notification (where high risk): on-time ratio

## Cross-Framework Impact
- ISO 27001 Article 32 alignment: clean / gaps
- EU AI Act Article 27 FRIA integration: applicable / not
- SOC 2 Privacy TSC alignment (if scope): clean / gaps

## Verdict
🟢 DPA-READY | 🟡 GAPS-IDENTIFIED | 🔴 NOT-READY

## Top 3 Actions
[3 concrete next steps with owner + Article-cited timeline]

## Outside Counsel Required
[Article-level ambiguities flagged: Schrems II supplementary measure adequacy, EU AI Act ↔ GDPR interaction, sectoral derogation interpretation, novel DPA enforcement]
```

## Routing

- `/cs:compliance-readiness` — for multi-framework view
- `/cs:iso27001-audit-prep` — for Article 32 organizational measures
- `/cs:ai-act-readiness` — for EU AI Act Article 27 FRIA integration
- `/cs:soc2-audit-prep` — for SOC 2 Privacy TSC overlap
- `/cs:gc-review` — for novel-case legal review

## Related

- Agent: [`cs-dpo-gdpr`](../../agents/cs-dpo-gdpr.md)
- Skill: [`gdpr-dsgvo-expert`](../../../ra-qm-team/skills/gdpr-dsgvo-expert/SKILL.md)
- Playbook: [gdpr_audit_playbook.md](../../../ra-qm-team/skills/gdpr-dsgvo-expert/references/gdpr_audit_playbook.md)
- Adjacent: `../iso27001-audit-prep/`, `../ai-act-readiness/`, `../soc2-audit-prep/`, `../compliance-readiness/`

---

**Version:** 1.0.0
