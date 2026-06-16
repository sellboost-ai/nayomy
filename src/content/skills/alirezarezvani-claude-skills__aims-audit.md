---
name: "aims-audit"
description_en: "/cs:aims-audit <scope> — ISO/IEC 42001 AIMS internal-audit 6-question forcing interrogation. Use before certification stage 1, before annual internal audit cycles, or when onboarding a new AI system into an existing AIMS."
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 18266
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/aims-audit/SKILL.md"
path: ".gemini/skills/aims-audit/SKILL.md"
is_collection: false
body_length: 4966
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /cs:aims-audit — AIMS ISO 42001 Zorlama Soruları

  **Komut:** `/cs:aims-audit <scope>`

  ISO 42001 AIMS uzmanı, herhangi bir AI Yönetim Sistemi çalışmasını baskı altında test eder. Sertifikasyon taahhüdü, iç denetim döngüsü veya yeni sistem entegrasyonundan önce altı soru.

  ## Ne Zaman Çalıştırılacak

  - ISO 42001 Aşama 1 sertifikasyon denetiminden önce
  - Yıllık iç denetim döngüsünden önce (Madde 9.2)
  - Yeni bir AI sistemi mevcut AIMS kapsamına entegre ederken
  - AI risk kaydı > 6 aydır güncellenmediyse
  - Önemli model değişikliğinden sonra (Madde 6.1.2'ye göre riskleri yeniden değerlendirin)
  - Denetim bulguları AIMS / ISMS / QMS çoğaltılmasına işaret ediyorsa

  ## Altı AIMS Sorusu

  ### 1. AIMS kapsam ifadesi her AI sistemini adlandırıyor mu?
  **Kapsam eksikliği = sertifikasyon bulgusu.**
  - İçerir: gömülü modeller, üçüncü taraf AI hizmetleri, "deneysel" üretim sistemleri
  - Madde 4.3 kanıtlarını doğrulamak için `aims_gap_analyzer.py` komutunu çalıştırın
  - "Kullandığımız SaaS satıcıları tarafından eklenen AI özellikleri" = şirketin hizmetlerini etkiliyorsa kapsam içi

  ### 2. AI politikası yasal kullanım VE faydalı amaç VE insan gözetimi VE sürekli iyileştirmeyi taahhüt ediyor mu?
  **Dördünden herhangi birinin eksik olması = Aşama 1'de kritik uyumsuzluk.**
  - AI politikası BİLGİ GÜVENLİĞİ politikası DEĞİLDİR — ayrı gerçek içeriği vardır
  - ISO 42001 Ek A.2.2 + Madde 5.2'ye referans verin
  - Pazarlama kopyası "AI etiği" geçmez

  ### 3. Risk kaydı kapsamı nedir ve hangi Ek A kontrolleri her riski ele alıyor?
  **Kontrol haritalanması olmadan risk belirlenmesi = Madde 6.1.3 başarısız.**
  - ISO 23894 metodolojisine göre `ai_risk_register_builder.py` komutunu çalıştırın
  - Her yüksek/kritik risk ≥ 1 Ek A kontrolüne bağlı olmalıdır
  - "Artık kalan sonuç: additional_treatment_required" Aşama 1'den önce kapatılmalıdır

  ### 4. AI risk değerlendirmesi son önemli model değişikliğinden bu yana yeniden çalıştırıldı mı?
  **Konsept kayması tek seferlik bir olay değildir.**
  - Madde 9 AB AI Yasası + ISO 42001 Madde 6.1.2 her ikisi de yinelemeli risk değerlendirmesi gerektirir
  - Önemli değişiklik = yeni veriler üzerinde yeniden eğitim, ince ayar, mimari değişikliği, dağıtım bağlamı değişikliği
  - "18 ay önce yaptık ve dokunmadık" ise AIMS bozulmuştur

  ### 5. Madde 9.2 iç denetim planı nedir ve denetçi bağımsızlığı korunuyor mu?
  **9.2 planı olmadan AIMS eksiktir.**
  - Kapsam + denetçiler + önceki bulgularla `aims_audit_scheduler.py` komutunu çalıştırın
  - 3 yıllık döngü üzerinde her maddeyi + geçerli Ek A kontrolünü denetleyin
  - Aynı denetçi kendi çalışmasını denetleyemez
  - cs-quality-regulatory ile 13485 denetim programına entegreyse çapraz kontrol edin

  ### 6. AIMS mevcut ISMS / QMS ile entegre edildi mi, yoksa paralel olarak mı inşa edildi?
  **Paralel sistemler = 5x devam eden bakım maliyeti.**
  - Madde 4-10 kanıtlarının %60'ı ISO 27001 / 13485'i AI kapsamı eklenerek yeniden kullanır
  - CAPA döngüsü ONE döngü olmalıdır AI etiketi konulmuş uyumsuzluklar ile, ayrı değil
  - Yeniden kullanım haritası için `cross_framework_mapping_ai.md`'ye referans verin
  - cs-ciso-advisor ile ISO 27001 uyumluluğu açısından çapraz kontrol edin

  ## İş Akışı

  ```bash
  # 1. AIMS boşluk analizi
  python ra-qm-team/skills/iso42001-specialist/scripts/aims_gap_analyzer.py evidence.json

  # 2. AI risk kaydı
  python ra-qm-team/skills/iso42001-specialist/scripts/ai_risk_register_builder.py risks.json

  # 3. İç denetim planı
  python ra-qm-team/skills/iso42001-specialist/scripts/aims_audit_scheduler.py audit_scope.json

  # 4. Çapraz çerçeve yeniden kullanım haritası (compliance-os üzerinden)
  python ../../skills/compliance-os/scripts/cross_framework_mapper.py program.json
  ```

  ## Çıktı Biçimi

  ```markdown
  # AIMS Denetimi: <scope>
  **Tarih:** YYYY-MM-DD

  ## Alınan Karar
  [gap-closure | risk-treatment | audit-scope | new-system-onboarding]

  ## Boşluk Analizi (Maddeler 4-10)
  - Ağırlıklı kapsam: X%
  - Kritik boşluklar: N
  - Büyük boşluklar: M
  - Sertifikasyon hazırlığı: ready | stage_2_candidate | not_ready

  ## AI Risk Kaydı
  - Toplam riskler: N
  - Önem düzeyine göre: critical=X, high=Y, medium=Z, low=W
  - Ek tedavi gerekli: K
  - İşlem gerektiren en önemli risk: <description>

  ## Madde 9.2 Denetim Planı
  - 12 aylık kapsam: clauses=X, controls=Y
  - Denetçi bağımsızlığı: clean | issues
  - Önceki yıl takibi: Q1'de planlanmış

  ## Çapraz Çerçeve Yeniden Kullanımı
  - ISO 27001 kanıtı yeniden kullanıldı: AIMS Madde 4-10'un % değeri
  - 13485 kanıtı yeniden kullanıldı: % (varsa)
  - AIMS için yeni: % (çoğunlukla Ek A)

  ## Karar
  🟢 STAGE-1-READY | 🟡 CLOSE-CRITICALS-FIRST | 🔴 NOT-READY

  ## En Önemli 3 Aksiyon
  [3 somut sonraki adım (sahibi + tarih ile)]
  ```

  ## Yönlendirme

  - `/cs:compliance-readiness` — çoklu çerçeve görünümü için
  - `/cs:ai-act-readiness` — AB AI Yasası da geçerliyse
  - `/cs:caio-review` — yönetici AI stratejisi kararları için
  - `/cs:ciso-review` — ISO 27001 çapraz çerçeve uyumluluğu için
  - `/cs:decide` — kararı günlüğe kaydetmek için
  - `/cs:freeze 30` — sertifikasyon taahhütlerinde

  ## İlgili

  - Agent: [`cs-aims-iso42001`](../../agents/cs-aims-iso42001.md)
  - Skill: [`iso42001-specialist`](../../../ra-qm-team/skills/iso42001-specialist/SKILL.md)
  - Bitişik: `../../skills/compliance-os/`, `../ai-act-readiness/`, `../compliance-readiness/`

  ---

  **Sürüm:** 1.0.0
---

# /cs:aims-audit — AIMS ISO 42001 Forcing Questions

**Command:** `/cs:aims-audit <scope>`

The ISO 42001 AIMS specialist pressure-tests any AI Management System work. Six questions before any certification commitment, internal audit cycle, or new-system onboarding.

## When to Run

- Before stage 1 ISO 42001 certification audit
- Before annual internal audit cycle (Clause 9.2)
- When onboarding a new AI system into existing AIMS scope
- When AI risk register hasn't been refreshed in > 6 months
- After material model change (re-evaluate risks per Clause 6.1.2)
- When audit findings hint at AIMS / ISMS / QMS duplication

## The Six AIMS Questions

### 1. Does the AIMS scope statement name every AI system?
**Scope omission = certification finding.**
- Including: embedded models, third-party AI services, "experimental" production systems
- Run `aims_gap_analyzer.py` to verify Clause 4.3 evidence
- "AI features added by SaaS vendors we use" = in scope if they affect the company's services

### 2. Does the AI policy commit to lawful use AND beneficial purpose AND human oversight AND continual improvement?
**Missing any of the four = critical nonconformity at stage 1.**
- AI policy is NOT info-sec policy — it has separate substantive content
- Reference ISO 42001 Annex A.2.2 + Clause 5.2
- Marketing-copy "AI ethics" doesn't pass

### 3. What's the risk register coverage, and which Annex A controls treat each risk?
**Risk identification without control mapping = Clause 6.1.3 fails.**
- Run `ai_risk_register_builder.py` per ISO 23894 methodology
- Every high/critical risk must link to ≥ 1 Annex A control
- "Residual verdict: additional_treatment_required" must be closed before stage 1

### 4. Has the AI risk assessment been re-run since the last material model change?
**Concept drift is not a one-time event.**
- Article 9 EU AI Act + ISO 42001 Clause 6.1.2 both require iterative risk assessment
- Material change = retraining on new data, fine-tuning, architecture change, deployment context change
- If "we did it 18 months ago and haven't touched it," the AIMS is broken

### 5. What's the Clause 9.2 internal audit plan, and is auditor independence respected?
**Without 9.2 plan, the AIMS is incomplete.**
- Run `aims_audit_scheduler.py` with scope + auditors + prior findings
- Audit every clause + applicable Annex A control over rolling 3-year cycle
- Same auditor cannot audit own work
- Cross-check with cs-quality-regulatory if integrated with 13485 audit programme

### 6. Has the AIMS been integrated with existing ISMS / QMS, or built in parallel?
**Parallel systems = 5x ongoing maintenance cost.**
- 60% of Clauses 4-10 evidence reuses ISO 27001 / 13485 with AI scope appended
- CAPA loop should be ONE loop with AI-tagged nonconformities, not separate
- Reference `cross_framework_mapping_ai.md` for the reuse map
- Cross-check with cs-ciso-advisor on ISO 27001 alignment

## Workflow

```bash
# 1. AIMS gap analysis
python ra-qm-team/skills/iso42001-specialist/scripts/aims_gap_analyzer.py evidence.json

# 2. AI risk register
python ra-qm-team/skills/iso42001-specialist/scripts/ai_risk_register_builder.py risks.json

# 3. Internal audit plan
python ra-qm-team/skills/iso42001-specialist/scripts/aims_audit_scheduler.py audit_scope.json

# 4. Cross-framework reuse map (via compliance-os)
python ../../skills/compliance-os/scripts/cross_framework_mapper.py program.json
```

## Output Format

```markdown
# AIMS Audit: <scope>
**Date:** YYYY-MM-DD

## The Decision Being Made
[gap-closure | risk-treatment | audit-scope | new-system-onboarding]

## Gap Analysis (Clauses 4-10)
- Weighted coverage: X%
- Critical gaps: N
- Major gaps: M
- Certification readiness: ready | stage_2_candidate | not_ready

## AI Risk Register
- Total risks: N
- By severity: critical=X, high=Y, medium=Z, low=W
- Requires additional treatment: K
- Top risk requiring action: <description>

## Clause 9.2 Audit Plan
- 12-month coverage: clauses=X, controls=Y
- Auditor independence: clean | issues
- Prior-year follow-up: scheduled in Q1

## Cross-Framework Reuse
- ISO 27001 evidence reused: % of AIMS Clauses 4-10
- 13485 evidence reused: % (if applicable)
- Net-new for AIMS: % (mostly Annex A)

## Verdict
🟢 STAGE-1-READY | 🟡 CLOSE-CRITICALS-FIRST | 🔴 NOT-READY

## Top 3 Actions
[3 concrete next steps with owner + date]
```

## Routing

- `/cs:compliance-readiness` — for multi-framework view
- `/cs:ai-act-readiness` — if EU AI Act also applies
- `/cs:caio-review` — for executive AI strategy decisions
- `/cs:ciso-review` — for ISO 27001 cross-framework alignment
- `/cs:decide` — to log the verdict
- `/cs:freeze 30` — on certification commitments

## Related

- Agent: [`cs-aims-iso42001`](../../agents/cs-aims-iso42001.md)
- Skill: [`iso42001-specialist`](../../../ra-qm-team/skills/iso42001-specialist/SKILL.md)
- Adjacent: `../../skills/compliance-os/`, `../ai-act-readiness/`, `../compliance-readiness/`

---

**Version:** 1.0.0
