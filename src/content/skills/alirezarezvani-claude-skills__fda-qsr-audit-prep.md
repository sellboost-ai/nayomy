---
name: "fda-qsr-audit-prep"
description_en: "/cs:fda-qsr-audit-prep <scope> — FDA 21 CFR 820 (QSR / QMSR) audit 6-question forcing interrogation. Post-Feb 2026 substantially harmonized with ISO 13485. Use before annual internal QSR audit, pre-FDA-inspection readiness, or Form 483 response."
description_tr: "/cs:fda-qsr-audit-prep <scope> — FDA 21 CFR 820 (QSR / QMSR) denetimi için 6 sorudan oluşan zorunlu sorgulama. Şubat 2026 sonrası ISO 13485 ile büyük ölçüde uyumludur. Yıllık iç QSR denetimi öncesinde, FDA inspeksiyonuna hazırlık için veya Form 483 yanıtı oluştururken kullanın."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 18402
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/fda-qsr-audit-prep/SKILL.md"
path: ".gemini/skills/fda-qsr-audit-prep/SKILL.md"
is_collection: false
body_length: 6097
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /cs:fda-qsr-audit-prep — FDA QSR Zorlama Soruları
  
  **Komut:** `/cs:fda-qsr-audit-prep <scope>`
  
  FDA QSR denetçisi, herhangi bir ABD tıbbi cihaz QSR çalışmasını baskı altında test eder. Herhangi bir iç denetim, FDA incelemesi, Form 483 yanıtı veya geri çağırma kararından önce altı soru.
  
  ## Çalıştırılması Gereken Zamanlar
  
  - Yıllık iç QSR denetiminden önce
  - FDA öncesi inceleme hazırlık incelemesinden önce (ABD'de ticari olarak dağıtılan herhangi bir cihaz)
  - Form 483 gözlemlerini aldıktan sonra
  - Uyarı Mektubu aldıktan sonra
  - MDR raporlanabilir olaya maruz kaldıktan sonra
  - Geri çağırma kararından önce (gönüllü vs FDA tarafından başlatılan)
  - 510(k) / PMA sunmadan önce (QSR duruşunun onay zaman çizelgesini etkilediği yerlerde)
  
  ## Altı QSR Sorusu
  
  ### 1. Son üç aydan itibaren şikayet dosyalarını gösterin — ve buna karşılık gelen MDR raporlarını.
  **21 CFR 820.198 + 21 CFR 803 — en çok alıntı yapılan FDA inceleme alanı.**
  - Şikayet günlüğü tamamlanmış: kim / ne / ne zaman / cihaz / batch
  - Soruşturma kapanışı makul zaman içinde
  - MDR raporlama karar ağacı uygulanmış: ölüm VEYA ciddi yaralanma VEYA arıza-neden-olabilir = MDR
  - Çoğu MDR raporu için 30 günlük zaman çizelgesi; belirli ciddi olaylar için 5 gün
  - Şikayet eğilim girdisi yönetim gözden geçirmesine
  
  ### 2. Process validasyonu (IQ/OQ/PQ) son ne zaman 21 CFR 820.75 uyarınca yeniden doğrulandı?
  **ISO 13485 Maddesi 7.5.6'yı çapraz kontrol eder (Şubat 2026 sonrası önemli ölçüde uyumlu).**
  - Process tanıtımında başlangıç validasyonu
  - Yeniden validasyon tetikleyicileri: process / ekipman / malzeme değişikliği VEYA periyodik zamanlama
  - 21 CFR 820.250 uyarınca istatistiksel teknikler (uygun olduğu durumlarda)
  - ISO 13485 uyumluluğu için cs-cqm-iso13485 ile çapraz kontrol
  
  ### 3. Son 2 yılda ticari olarak dağıtılan ürünlerin DHR'larını gösterin.
  **21 CFR 820.180 — ticari dağıtımdan 2 yıl saklanma; bütünlük için örnekleme kontrol edin.**
  - Her birim/lot/batch için Cihaz Tarih Kaydı (DHR)
  - İçermesi gerekli: üretim tarihleri, üretilen miktar, salınan miktar, kabul kayıtları, birincil kimlik etiketi, cihaz kimliği, kontrol numarası
  - Ürün sınıfına göre tabakalı örnek
  - DHR'nin DHF'ye (tasarım tarih dosyası) yakınlığını doğrulayın
  
  ### 4. Son 6 aydan itibaren etkinlik doğrulaması yapılan CAPA'ları gösterin.
  **21 CFR 820.100 = ISO 13485 8.5.2 önemli ölçüde uyumlu.**
  - Kök neden analizi derinliği (minimum 5 Neden)
  - Etkinlik doğrulaması = ölçülebilir kanıt, "prosedürü güncelledik" değil
  - İçerme / düzeltme / iyileştirme ayrımı belgelenmiş
  - Uygun otorite tarafından kapanış onayı
  - 90 günü aşan eski CAPA'lar işaretlenmiş
  
  ### 5. En son ürün lansmanı için etiketlemeyi (21 CFR 801) gözden geçirmeyi gösterin.
  **FDA'ya özgü katman ISO 13485'te değil.**
  - 21 CFR 801 gereksinimlerine uygun etiketleme
  - Belirli cihaz türleri için: ayrıca 21 CFR 800 serisi sektörel katmanlar
  - UDI (Benzersiz Cihaz Kimliği) 21 CFR 830 uyarınca
  - Promosyon materyalleri doğruluk + yanıltıcı olmama açısından gözden geçirilmiş
  
  ### 6. Son 3 yılda Form 483 düzenlenmişse, kapanış durumunu gösterin.
  **Form 483 = FDA gözlemi; ISO uyumsuzluğuna eşdeğer değil.**
  - 15 iş günü içinde yanıt
  - Her gözlemin, zaman çizelgesi olan belgelenmiş iyileştirme + önleyici işlemi vardır
  - Etkinlik doğrulama kanıtı
  - Uyarı Mektubu için: ayrı yanıt izlemesi + potansiyel olarak FDA toplantısı
  
  ## İş Akışı
  
  ```bash
  # 1. QSR uyum duruşu
  python ra-qm-team/skills/fda-consultant-specialist/scripts/qsr_compliance_checker.py compliance_state.json
  
  # 2. FDA başvuru takibi (510(k) / PMA / IDE)
  python ra-qm-team/skills/fda-consultant-specialist/scripts/fda_submission_tracker.py submissions.json
  
  # 3. HIPAA örtüşmesi (bağlı cihaz PHI işlerse)
  python ra-qm-team/skills/fda-consultant-specialist/scripts/hipaa_risk_assessment.py phi_inventory.json
  
  # 4. Sahte FDA incelemesi
  python ../../skills/compliance-os/scripts/audit_simulator.py fda_qsr_scope.json
  ```
  
  ## Çıktı Formatı
  
  ```markdown
  # FDA QSR Denetim Hazırlığı: <scope>
  **Tarih:** YYYY-AA-GG
  
  ## Alınan Karar
  [programme-plan | inspection-readiness | 483-response | MDR-decision | recall]
  
  ## Şikayet + MDR Duruşu
  - Son üç ay şikayetleri: N
  - MDR raporlanabilir olaylar: M
  - Zaman sınırı içinde dosyalanan MDR raporları: % (hedef %100)
  - Şikayet eğilim incelemesi yönetim düzeyinde: evet/hayır
  
  ## Process Validasyon Durumu (21 CFR 820.75)
  - Validasyonlar zamanında: %
  - Eski validasyonlar: <liste>
  - İstatistiksel teknikler uygulanmış: process başına evet/hayır
  
  ## DHR Bütünlüğü (21 CFR 820.180)
  - Örneklenen DHR'ler: N
  - Bütünlük oranı: %
  - 2 yıllık saklama uyumlu: evet/hayır
  - Ürün sınıfına göre tabakalı: evet/hayır
  
  ## CAPA Sağlığı (21 CFR 820.100)
  - Örneklenen CAPA'lar: N
  - Kök neden analizi derinliği: yeterli/yetersiz
  - Etkinlik doğrulaması: tamamlanmış/tamamlanmamış
  - 90 günü aşan eski CAPA'lar: N
  
  ## Etiketleme (21 CFR 801)
  - Gözden geçirilen son ürünler: <liste>
  - Etiketleme doğru + yanıltıcı olmayan: evet/hayır
  - 21 CFR 830 uyarınca UDI uyumluluğu: evet/hayır
  
  ## Form 483 / Uyarı Mektubu Geçmişi
  - Son 3 yıldaki Form 483'ler: N (her biri: kapalı/devam eden)
  - Son 5 yıldaki Uyarı Mektupları: N (her biri: kapalı/devam eden)
  - Gözlemler arasındaki desen: <tematik>
  
  ## ISO 13485 Çapraz Kontrolü (Şubat 2026 sonrası uyumlulaştırma)
  - ISO 13485 denetim bulguları: <cs-cqm-iso13485 çıktısına bağlantı>
  - Kalan FDA'ya özgü katmanlar: etiketleme + şikayet işleme + MDR raporlaması + geri çağırma prosedürleri
  - Çapraz çerçeve yeniden kullanımı: % kanıt paylaşılan
  
  ## Sonuç
  🟢 İNCELEMEYE HAZIR | 🟡 AÇIKLAR TESPİT EDİLDİ | 🔴 HAZIR DEĞİL
  
  ## En İyi 3 İşlem
  [3 somut sonraki adım, sahip + FDA alıntı zaman çizelgesi ile (15 gün / 30 gün / vb.)]
  
  ## Dışarıdan Hukuk Müşaviri Gerekli
  [Uyarı Mektubu yanıtı, geri çağırma kararları veya 510(k) / PMA stratejisi anlaşmazlıkları için]
  ```
  
  ## Yönlendirme
  
  - `/cs:compliance-readiness` — çok çerçeveli görünüm için
  - `/cs:iso13485-audit-prep` — ISO 13485 çapraz kontrol çifti için (önemli ölçüde uyumlu)
  - `/cs:gdpr-audit-prep` — bağlı cihaz kişisel verileri işlerse
  - `/cs:gc-review` — Uyarı Mektubu yanıtı koordinasyonu için
  
  ## İlgili
  
  - Agent: [`cs-fda-qsr-auditor`](../../agents/cs-fda-qsr-auditor.md)
  - Beceri: [`fda-consultant-specialist`](../../../ra-qm-team/skills/fda-consultant-specialist/SKILL.md)
  - Bitişik: `../iso13485-audit-prep/`, `../compliance-readiness/`
  
  ---
  
  **Sürüm:** 1.0.0
---

# /cs:fda-qsr-audit-prep — FDA QSR Forcing Questions

**Command:** `/cs:fda-qsr-audit-prep <scope>`

The FDA QSR auditor pressure-tests any US medical-device QSR work. Six questions before any internal audit, FDA inspection, Form 483 response, or recall decision.

## When to Run

- Before annual internal QSR audit
- Before pre-FDA-inspection readiness review (any device commercially distributed in US)
- After receiving Form 483 observations
- After Warning Letter receipt
- After MDR-reportable event
- Before recall decision (voluntary vs FDA-initiated)
- Before submitting 510(k) / PMA (where QSR posture affects approval timeline)

## The Six QSR Questions

### 1. Show me the complaint files from the last quarter — and the corresponding MDR reports.
**21 CFR 820.198 + 21 CFR 803 — most-cited FDA inspection area.**
- Complaint log complete: who / what / when / device / batch
- Investigation closure within reasonable timeline
- MDR-reporting decision tree applied: death OR serious injury OR malfunction-that-could-cause = MDR
- 30-day timeline for most MDR reports; 5 days for certain serious events
- Complaint trending input to management review

### 2. When was process validation (IQ/OQ/PQ) last revalidated per 21 CFR 820.75?
**Cross-walks ISO 13485 Clause 7.5.6 (substantially harmonized post-Feb 2026).**
- Initial validation at process introduction
- Revalidation triggers: process / equipment / material change OR periodic schedule
- Statistical techniques per 21 CFR 820.250 where applicable
- Cross-check with cs-cqm-iso13485 for ISO 13485 alignment

### 3. Show me the DHRs for products commercially distributed in last 2 years.
**21 CFR 820.180 — 2-year retention from commercial distribution; check sampling for completeness.**
- Device History Record (DHR) for each unit/lot/batch
- Must include: dates of manufacture, quantity manufactured, quantity released, acceptance records, primary identification label, device identification, control number
- Sample stratified by product class
- Verify DHR closeness to DHF (design history file)

### 4. Show me CAPAs from the last 6 months with effectiveness verification.
**21 CFR 820.100 = ISO 13485 8.5.2 substantially harmonized.**
- Root cause analysis depth (5 Why minimum)
- Effectiveness verification = measurable evidence, not "we updated the procedure"
- Containment / correction / corrective action distinction documented
- Closure approval by appropriate authority
- Aging CAPAs > 90 days flagged

### 5. Show me labeling (21 CFR 801) review for the most recent product launch.
**FDA-specific overlay not in ISO 13485.**
- Labeling per 21 CFR 801 requirements
- For specific device types: also 21 CFR 800 series sectoral overlays
- UDI (Unique Device Identification) per 21 CFR 830
- Promotional materials reviewed for accuracy + non-misleading

### 6. If a Form 483 was issued in the last 3 years, show me the closure status.
**Form 483 = FDA observation; not equivalent to ISO nonconformity.**
- Response within 15 working days
- Each observation has documented corrective + preventive action with timeline
- Effectiveness verification evidence
- For Warning Letters: separate response track + potentially FDA meeting

## Workflow

```bash
# 1. QSR compliance posture
python ra-qm-team/skills/fda-consultant-specialist/scripts/qsr_compliance_checker.py compliance_state.json

# 2. FDA submission tracking (510(k) / PMA / IDE)
python ra-qm-team/skills/fda-consultant-specialist/scripts/fda_submission_tracker.py submissions.json

# 3. HIPAA overlap (if connected device handles PHI)
python ra-qm-team/skills/fda-consultant-specialist/scripts/hipaa_risk_assessment.py phi_inventory.json

# 4. Mock FDA inspection
python ../../skills/compliance-os/scripts/audit_simulator.py fda_qsr_scope.json
```

## Output Format

```markdown
# FDA QSR Audit Prep: <scope>
**Date:** YYYY-MM-DD

## The Decision Being Made
[programme-plan | inspection-readiness | 483-response | MDR-decision | recall]

## Complaint + MDR Posture
- Complaints last quarter: N
- MDR-reportable events: M
- MDR reports filed within timeline: % (target 100%)
- Complaint trending review at management level: yes/no

## Process Validation Status (21 CFR 820.75)
- Validations on schedule: %
- Stale validations: <list>
- Statistical techniques applied: yes/no per process

## DHR Completeness (21 CFR 820.180)
- DHRs sampled: N
- Completeness rate: %
- 2-year retention compliant: yes/no
- Stratified by product class: yes/no

## CAPA Health (21 CFR 820.100)
- CAPAs sampled: N
- Root cause analysis depth: adequate/inadequate
- Effectiveness verification: complete/incomplete
- Aging CAPAs > 90 days: N

## Labeling (21 CFR 801)
- Recent products reviewed: <list>
- Labeling accurate + non-misleading: yes/no
- UDI compliance per 21 CFR 830: yes/no

## Form 483 / Warning Letter History
- Form 483s last 3 years: N (each: closed/in-progress)
- Warning Letters last 5 years: N (each: closed/in-progress)
- Pattern across observations: <thematic>

## ISO 13485 Cross-Walk (post-Feb 2026 harmonization)
- ISO 13485 audit findings: <link to cs-cqm-iso13485 output>
- FDA-specific overlays remaining: labeling + complaint handling + MDR reporting + recall procedures
- Cross-framework reuse: % of evidence shared

## Verdict
🟢 INSPECTION-READY | 🟡 GAPS-IDENTIFIED | 🔴 NOT-READY

## Top 3 Actions
[3 concrete next steps with owner + FDA-cited timeline (15 days / 30 days / etc.)]

## Outside Counsel Required
[For Warning Letter response, recall decisions, or 510(k) / PMA strategy disputes]
```

## Routing

- `/cs:compliance-readiness` — for multi-framework view
- `/cs:iso13485-audit-prep` — for ISO 13485 cross-walk pair (substantially harmonized)
- `/cs:gdpr-audit-prep` — if connected device handles personal data
- `/cs:gc-review` — for Warning Letter response coordination

## Related

- Agent: [`cs-fda-qsr-auditor`](../../agents/cs-fda-qsr-auditor.md)
- Skill: [`fda-consultant-specialist`](../../../ra-qm-team/skills/fda-consultant-specialist/SKILL.md)
- Adjacent: `../iso13485-audit-prep/`, `../compliance-readiness/`

---

**Version:** 1.0.0
