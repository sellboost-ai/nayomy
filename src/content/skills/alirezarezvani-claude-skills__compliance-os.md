---
name: "compliance-os"
description_en: "Compliance OS — meta-orchestrator that lets compliance teams CONFIGURE which frameworks apply, COMPUTE cross-framework control overlap, SIMULATE internal audits, and CONSOLIDATE evidence across multiple frameworks. Four decisions: (1) Given a company profile, which of the 12 supported frameworks apply (ISO 27001/13485/42001/14971, EU AI Act, MDR 745, GDPR, SOC 2, FDA QSR, NIST CSF 2.0, NIS2, HIPAA"
description_tr: "Compliance OS — compliance ekiplerinin hangi framework'lerin geçerli olduğunu YAPILANDIRMAK, framework'ler arası kontrol örtüşmesini HESAPLAMAK, iç denetimleri SİMÜLE ETMEK ve kanıtları birden fazla framework'de KONSOLİDE ETMEK için tasarlanmış meta-orkestrasyondur. Dört ana karar: (1) Şirket profiline göre desteklenen 12 framework'den (ISO 27001/13485/42001/14971, EU AI Act, MDR 745, GDPR, SOC 2, FDA QSR, NIST CSF 2.0, NIS2, HIPAA) hangisi uygulanır?"
category: "Development"
repo: "alirezarezvani/claude-skills"
stars: 18759
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/compliance-os-bundle/SKILL.md"
path: ".gemini/skills/compliance-os-bundle/SKILL.md"
is_collection: false
body_length: 11728
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # Compliance OS — Meta-Orchestrator
  
  Multi-framework compliance program orchestration. **Dört karar, framework başına derin dalış yok:**
  
  1. **Bu şirkete hangi framework'ler uygulanır?** — `framework_selector.py` 12 desteklenen framework'ü şirket profiline (endüstri, coğrafya, AI kullanımı, tıbbi, finansal, çalışan sayısı, müşteriler, healthcare-PHI, NIS2 temel/önemli entity, US hükümet yüklenicisi) karşı sıralar ve uygulanabilir olanları bağımlılık grafiği ile döndürür
  2. **Seçilen framework'ler ne kadar üst üste gelir?** — `cross_framework_mapper.py` kontrol seviyesindeki örtüşmeyi güven derecesiyle hesaplar; birleştirilmiş kontrol matrisi + kanıt yeniden kullanım fırsatlarını çıkarır
  3. **Mock audit ne üretir?** — `audit_simulator.py` IIA beklentilerine uygun ciddiyetini dağıtımı ile 8–15 bulgu senaryosu + kontrol başına görüşme soruları üretir
  4. **Birleştirilmiş kanıt kontrol listesi nedir?** — `evidence_pool_generator.py` kanıtları etkin framework'ler arasında konsolide eder; hangi artefaktın hangi kontrolleri hangi framework'lerde tatmin ettiğini çıkarır
  
  Bu beceri **DEĞİLDİR** framework başına derin dalış. Framework başına beceriler (`ra-qm-team/skills/iso42001-specialist/`, `compliance-team-eu-ai-act/`, `ra-qm-team/skills/gdpr-dsgvo-expert/`, vb.) operasyonel işi yapar. Compliance OS bunları orchestrate eder.
  
  Bu beceri **DEĞİLDİR** bağlayıcı yasal tavsiye yerine. Cross-framework eşlemeler yayınlanmış rehberliği yansıtır (ISO standartları, yönetmelikleri, EDPB/Komisyon rehberliği, IIA / AICPA profesyonel standartları). Yeni cross-walk'lar hukuk müşaviriyle gözden geçirilmelidir.
  
  ## Keywords
  
  compliance orchestration, multi-framework compliance, compliance OS, cross-framework mapping, control overlap, evidence pool, evidence reuse, audit simulation, mock audit, internal audit programme, GRC, governance risk compliance, framework selector, compliance program, integrated compliance, ISO 19011, IIA IPPF, AICPA AT-C, NIST CSF profile, multi-cert program, SOC 2 + ISO 27001, ISO 27001 + ISO 42001, ISO 13485 + MDR 745, AI Act + ISO 42001, GDPR + ISO 27001, compliance officer, compliance team workflow, certification readiness
  
  ## Quick Start
  
  ```bash
  # Decision A: Which frameworks apply for the company?
  python scripts/framework_selector.py                          # embedded mid-stage AI SaaS sample
  python scripts/framework_selector.py path/to/profile.json
  
  # Decision B: Compute cross-framework overlap
  python scripts/cross_framework_mapper.py                      # embedded ISO 27001 + SOC 2 sample
  python scripts/cross_framework_mapper.py path/to/control_libs.json
  
  # Decision C: Simulate an audit
  python scripts/audit_simulator.py                             # embedded ISO 27001 sample
  python scripts/audit_simulator.py path/to/audit_scope.json
  
  # Decision D: Consolidate evidence checklist across frameworks
  python scripts/evidence_pool_generator.py                     # embedded 3-framework sample
  python scripts/evidence_pool_generator.py path/to/program.json
  ```
  
  ## Key Questions (ask these first)
  
  - **Her uygulanabilir framework'i adlandırdınız mı?** Birini unutmak audit programını daha sonra yeniden oluşturmak anlamına gelir. `framework_selector.py` çalıştırın profilinizle.
  - **Şirketiniz zaten hangi sertifika / yönetmelikleri işletmektedir?** Bu sizin yeniden kullanım ankoridir. Her yeni framework'ü buna karşı eşleştirin.
  - **Audit takvimi nedir?** Multi-framework program gözetim auditlerinin yıl boyunca istiflenmiş olması anlamına gelir — auditor bağımsızlığı + kapasitesini planlayın.
  - **Kanıt nerede saklanır?** Multi-framework programlar, kanıt bir takımın sürücüsünde bir indeks olmaksızın yaşadığında çöker. `evidence_pool_generator.py` çalıştırın yeniden kullanım fırsatlarını ortaya çıkarmak için.
  - **Framework'ler arasında yönetim incelemesi kadansı nedir?** Her framework'ün kendi yönetim incelemesi istenir, fakat tek bir entegre incelemesi (ISO Annex SL başına) tipik olarak tamamını tek bir takvim yuvası ile tatmin eder.
  - **Meta-program'ın sahibi kim?** Tek sorumlu rol yoksa, program parçalanır.
  
  ## Core Responsibilities
  
  ### 1. Framework Selection
  
  **Framework:** şirket profili JSON → uygulanabilir framework listesi bağımlılık grafiği ile çıkış.
  
  **Belirleyici mantık:**
  - Tıbbi cihaz → ISO 13485 + ISO 14971 + (EU pazarında EU MDR 745) + (US pazarında FDA QSR)
  - Müşteri yüzlü AI → ISO 42001 + EU AI Act (EU kullanıcıları varsa) + GDPR (kişisel veri varsa)
  - Kurumsal müşterileri olan B2B SaaS → SOC 2 + ISO 27001 (genellikle satın alma için gerekli)
  - EU müşterileri + kişisel veri → GDPR zorunlu
  - Yüksek düzeyde düzenlenmiş endüstri (finansal, sağlık) → ek sektörel overlaylar
  
  **Çalıştırın** `framework_selector.py` karar kurallarını uygulamak için.
  
  ### 2. Cross-Framework Control Mapping
  
  **Framework:** her seçilen framework için kontrol kütüphanesini ayrıştırın; diğer seçilen framework'lerle örtüşmeyi hesaplayın.
  
  **Her birleştirilmiş-kontrol çıkışı başına:**
  - Eşleme güven derecesi (HIGH / MEDIUM / LOW)
  - Kanıt-yeniden kullanım fırsatı (tek artefakt N kontrolü tatmin eder)
  - Framework başına alıntı
  - Framework'ler arasında yeniden kullanılabilir uygulama rehberliği
  
  **En yoğun bilinen örtüşme:** ISO 27001 Annex A ↔ SOC 2 Trust Services Criteria — tarihsel olarak ~75% kontrol kapsamı paylaşılır. ISO 42001 eklemek AI-spesifik kontroller getirir; GDPR eklemek gizlilik-spesifik kontroller getirir.
  
  **Çalıştırın** `cross_framework_mapper.py` framework kontrol kütüphaneleriyle.
  
  ### 3. Audit Simulation
  
  **Framework:** ISO 19011 + IIA IPPF standartlarına göre gerçekçi mock internal audit üretin.
  
  **Per audit çıkışı:**
  - ISO 19011 tipik derinliği başına 8–15 bulgu senaryosu
  - Ciddiyeti dağıtımı: ≥ 40% observations/OFI, ≤ 15% critical/major (sağlıklı programlar için IIA beklentisi)
  - Scoped kontrol başına görüşme soruları (kontrol başına 3–5 soru)
  - Belge-inceleme istek listesi
  - Uygulanabilir yerlerde walk-through istekleri
  
  **Çalıştırın** `audit_simulator.py` framework + scope ile.
  
  ### 4. Evidence Pool
  
  **Framework:** kanıt gerekliliklerini etkin framework'ler arasında konsolide edin; yeniden kullanım fırsatlarını tanımlayın.
  
  **Çıkış:**
  - Kanıt artefaktı listesi (örn., access-review log, supplier risk register, incident log)
  - Per artefakt: tatmin ettiği (framework, control) tuples listesi
  - Yeniden kullanım-leverage skoru (artefakt A M framework'ler arasında N kontrolü tatmin eder)
  - Edinme maliyeti tahmini (üretme + bakım çabası)
  
  **Çalıştırın** `evidence_pool_generator.py` program konfigürasyon ile.
  
  ## Workflows
  
  ### Workflow 1: Program Bootstrap (multi-framework, 4–8 hafta)
  **Hedef:** 2–4 framework'ü eş zamanlı olarak kapsayan bir compliance program kurun.
  
  ```bash
  # 1. Şirket profili ile framework selector çalıştırın
  python scripts/framework_selector.py profile.json
  # 2. Her uygulanabilir framework için, framework başına beceriyi tanımlayın ve gap analizi çalıştırın
  # 3. Yeniden kullanım fırsatlarını tanımlamak için cross-framework mapper çalıştırın
  python scripts/cross_framework_mapper.py control_libs.json
  # 4. Konsolide etmek için evidence pool generator çalıştırın
  python scripts/evidence_pool_generator.py program.json
  # 5. cs-compliance-officer agent ile cross-check yapın
  # 6. Çıkış: sahipler + tarihler ile önceliklendirilmiş program backlog
  ```
  
  ### Workflow 2: Annual Audit Calendar (yıllık)
  **Hedef:** tüm uygulanabilir framework'leri kapsayan internal audit döngülerini planlayın.
  
  ```bash
  # 1. Profil değiştiyse framework selector'ı yenileyin
  python scripts/framework_selector.py profile.json
  # 2. Her framework için, internal-audit-plan aracını çalıştırın
  #    (ISO 42001 için: aims_audit_scheduler.py; ISO 27001 için: isms_audit_scheduler.py)
  # 3. Audit takvimini framework'ler arasında koordine edin (auditor bağımsızlığı + kapasitesi)
  # 4. Auditorleri hazırlamak için her framework için audit simulator çalıştırın
  python scripts/audit_simulator.py scope.json
  # 5. Çıkış: sahipler + auditor atamaları ile entegre audit takvimi
  ```
  
  ### Workflow 3: Pre-Certification Readiness (yeni framework başına, 6–12 hafta)
  **Hedef:** harici sertifikasyon audit'ine hazırlanın.
  
  ```bash
  # 1. Yeni framework için gap analizi çalıştırın
  #    (ISO 42001: aims_gap_analyzer.py; ISO 27001: compliance_checker.py; SOC 2: gap_analyzer.py)
  # 2. Zaten sertifikalı framework'ler karşısında cross-framework mapper çalıştırın
  python scripts/cross_framework_mapper.py control_libs.json
  # 3. HIGH-confidence eşlemeler için kanıtı yeniden kullanın; MEDIUM/LOW için yeni kurun
  # 4. Sertifikasyon audit'ini dry-run yapmak için audit simulator çalıştırın
  python scripts/audit_simulator.py scope.json
  # 5. Harici auditor stage 1'den önce kalan boşlukları kapatın
  ```
  
  ### Workflow 4: Evidence Pool Consolidation (üç aylık)
  **Hedef:** birleştirilmiş kanıt pool'unu taze + yeniden kullanılabilir tutun.
  
  ```bash
  # 1. Evidence pool generator'ı yenileyin
  python scripts/evidence_pool_generator.py program.json
  # 2. HIGH-reuse-leverage artefaktları tanımlayın (1 kanıt -> 5+ kontrol)
  # 3. Kanıt tazeliğini onaylayın (framework başına retention requirement içinde)
  # 4. Kanıt pool'unun kendisini audit edin (yetim kontrol yok, eski kanıt yok)
  ```
  
  ## Output Standards
  
  ```
  **Bottom Line:** [one sentence — multi-framework resmi + en büyük yeniden kullanım fırsatı]
  **The Decision:** [one of: framework-set | overlap-map | audit-plan | evidence-consolidation]
  **The Evidence:** [framework adları + kontrol IDleri araçtan, sıfatlardan değil]
  **How to Act:** [sahipler + tarihlerle 3 somut sonraki adım]
  **Your Decision:** [sadece compliance officer'ın yapabileceği çağrı — hangi framework'leri izlemek, audit döngüsü önceliği, kanıt-yeniden kullanım politikası]
  ```
  
  ## Adjacent Skills
  
  - `ra-qm-team/skills/iso42001-specialist/` — ISO 42001 derin dalış (compliance-team-iso42001 plugin ile eşleştirilmiş)
  - `ra-qm-team/skills/eu-ai-act-specialist/` — EU AI Act derin dalış (compliance-team-eu-ai-act plugin ile eşleştirilmiş)
  - `ra-qm-team/skills/information-security-manager-iso27001/` — ISO 27001 ISMS derin dalış
  - `ra-qm-team/skills/quality-manager-qms-iso13485/` — ISO 13485 QMS derin dalış
  - `ra-qm-team/skills/gdpr-dsgvo-expert/` — GDPR derin dalış
  - `ra-qm-team/skills/soc2-compliance/` — SOC 2 derin dalış
  - `ra-qm-team/skills/fda-consultant-specialist/` — FDA QSR derin dalış
  - `ra-qm-team/skills/mdr-745-specialist/` — EU MDR 745 derin dalış
  - `ra-qm-team/skills/risk-management-specialist/` — ISO 14971 derin dalış
  - `c-level-advisor/chief-ai-officer-advisor/` — Executive AI risk kararları (build-vs-buy, model selection)
  - `c-level-advisor/skills/general-counsel-advisor/` — Novel durumlar için yasal inceleme
  
  ## References
  
  - [compliance_os_pattern.md](references/compliance_os_pattern.md) — Meta-framework mimarisi (configure → map → simulate → consolidate → review); ne zaman kullanılır vs kullanılmaz
  - [cross_framework_overlap.md](references/cross_framework_overlap.md) — 9-framework × kontrol-ailesi örtüşme tablosu eşleme güven derecesiyle (Phase 3 `cross_framework_mapper.py` aracılığıyla 12 framework'e genişlenir)
  - [audit_simulation_methodology.md](references/audit_simulation_methodology.md) — ISO 19011 + IIA IPPF + AICPA AT-C audit-simulation ilkeleri + ciddiyeti dağıtım heuristics
  - [evidence_management.md](references/evidence_management.md) — Evidence pool tasarım + retention + tazelik + reuse-leverage scoring
  - [multi_framework_audit_playbook.md](references/multi_framework_audit_playbook.md) — 2+ framework'ler için entegre audit programı (Phase 2)
  - [evidence_artifact_reuse_index.md](references/evidence_artifact_reuse_index.md) — Tüm 12 framework'ler arasında ampirik olarak türetilmiş reuse-leverage sıralaması (Phase 3)
  
  ## Phase 3 Asset: Mock Audit Scenario Library
  
  `assets/mock_audit_library.json` — 12 framework'ü + 26 temayı + 4 ciddiyeti seviyesini kapsayan 205 önceden oluşturulmuş bulgu senaryosu (34 critical, 88 major, 54 minor, 29 observation). Her senaryo uygulanabilir framework'leri etiketler; framework-spesifik kontrol IDlerini çözmek için `scripts/cross_framework_mapper.py` birleştirilmiş-kontroller kataloğuna cross-reference edin. Mock audit'leri zenginleştirmek için `audit_simulator.py` input olarak, yeni internal auditorlar için bir eğitim kaynağı olarak, veya multi-framework programları arasında bulgu-desen tespiti için tohum olarak kullanın.
  
  ---
  
  **Version:** 1.2.0
  **Status:** Production Ready
---

# Compliance OS — Meta-Orchestrator

Multi-framework compliance program orchestration. **Four decisions, no per-framework deep-dive:**

1. **Which frameworks apply to this company?** — `framework_selector.py` ranks the 12 supported frameworks against a company profile (industry, geography, AI use, medical, financial, headcount, customers, healthcare-PHI, NIS2 essential/important entity, US gov contractor) and returns applicable ones with dependency graph
2. **How much do selected frameworks overlap?** — `cross_framework_mapper.py` computes control-level overlap with confidence rating; outputs unified control matrix + evidence-reuse opportunities
3. **What does a mock audit produce?** — `audit_simulator.py` generates 8–15 finding scenarios with severity distribution matching IIA expectations + interview questions per control
4. **What's the unified evidence checklist?** — `evidence_pool_generator.py` consolidates evidence across enabled frameworks; outputs which artefact satisfies which controls across which frameworks

This skill is **NOT** a per-framework deep-dive. The per-framework skills (`ra-qm-team/skills/iso42001-specialist/`, `compliance-team-eu-ai-act/`, `ra-qm-team/skills/gdpr-dsgvo-expert/`, etc.) do the operational work. Compliance OS orchestrates them.

This skill is **NOT** a substitute for binding legal advice. Cross-framework mappings reflect published guidance (ISO standards, regulations, EDPB/Commission guidance, IIA / AICPA professional standards). Novel cross-walks should be reviewed with counsel.

## Keywords

compliance orchestration, multi-framework compliance, compliance OS, cross-framework mapping, control overlap, evidence pool, evidence reuse, audit simulation, mock audit, internal audit programme, GRC, governance risk compliance, framework selector, compliance program, integrated compliance, ISO 19011, IIA IPPF, AICPA AT-C, NIST CSF profile, multi-cert program, SOC 2 + ISO 27001, ISO 27001 + ISO 42001, ISO 13485 + MDR 745, AI Act + ISO 42001, GDPR + ISO 27001, compliance officer, compliance team workflow, certification readiness

## Quick Start

```bash
# Decision A: Which frameworks apply for the company?
python scripts/framework_selector.py                          # embedded mid-stage AI SaaS sample
python scripts/framework_selector.py path/to/profile.json

# Decision B: Compute cross-framework overlap
python scripts/cross_framework_mapper.py                      # embedded ISO 27001 + SOC 2 sample
python scripts/cross_framework_mapper.py path/to/control_libs.json

# Decision C: Simulate an audit
python scripts/audit_simulator.py                             # embedded ISO 27001 sample
python scripts/audit_simulator.py path/to/audit_scope.json

# Decision D: Consolidate evidence checklist across frameworks
python scripts/evidence_pool_generator.py                     # embedded 3-framework sample
python scripts/evidence_pool_generator.py path/to/program.json
```

## Key Questions (ask these first)

- **Have you named every applicable framework?** Forgetting one means rebuilding the audit program later. Run `framework_selector.py` with your profile.
- **What's the most certificate / regulation your company already operates?** That's your reuse anchor. Map every new framework against it.
- **What's the audit calendar?** A multi-framework program means surveillance audits stacked through the year — plan auditor independence + capacity.
- **Where is evidence stored?** Multi-framework programs collapse when evidence lives in one team's drive without an index. Run `evidence_pool_generator.py` to surface the reuse opportunities.
- **What's the management-review cadence across frameworks?** Each framework wants its own management review, but a single integrated review (per ISO Annex SL) typically satisfies all of them with one calendar slot.
- **Who owns the meta-program?** If no single accountable role, the program fragments.

## Core Responsibilities

### 1. Framework Selection

**The framework:** company-profile JSON in → applicable-framework list out with dependency graph.

**Deterministic logic:**
- Medical device → ISO 13485 + ISO 14971 + (EU MDR 745 if EU market) + (FDA QSR if US market)
- Customer-facing AI → ISO 42001 + EU AI Act (if EU users) + GDPR (if personal data)
- B2B SaaS with enterprise customers → SOC 2 + ISO 27001 (often required for procurement)
- EU customers + personal data → GDPR mandatory
- Highly regulated industry (financial, health) → additional sectoral overlays

**Run** `framework_selector.py` to apply the decision rules.

### 2. Cross-Framework Control Mapping

**The framework:** for each selected framework, parse its control library; compute overlap with other selected frameworks.

**Per merged-control output:**
- Mapping confidence (HIGH / MEDIUM / LOW)
- Evidence-reuse opportunity (single artefact satisfies N controls)
- Per-framework citation
- Implementation guidance reusable across frameworks

**Densest known overlap:** ISO 27001 Annex A ↔ SOC 2 Trust Services Criteria — historically ~75% control coverage shared. Adding ISO 42001 brings AI-specific controls; adding GDPR brings privacy-specific.

**Run** `cross_framework_mapper.py` with framework control libraries.

### 3. Audit Simulation

**The framework:** generate a realistic mock internal audit per ISO 19011 + IIA IPPF standards.

**Per audit output:**
- 8–15 finding scenarios per ISO 19011 typical depth
- Severity distribution: ≥ 40% observations/OFI, ≤ 15% critical/major (IIA expectation for healthy programs)
- Interview questions per scoped control (3–5 questions per control)
- Document-review request list
- Walk-through requests where applicable

**Run** `audit_simulator.py` with framework + scope.

### 4. Evidence Pool

**The framework:** consolidate evidence requirements across enabled frameworks; identify reuse opportunities.

**Output:**
- Evidence artefact list (e.g., access-review log, supplier risk register, incident log)
- Per artefact: list of (framework, control) tuples it satisfies
- Reuse-leverage score (artefact A satisfies N controls across M frameworks)
- Acquisition cost estimate (effort to produce + maintain)

**Run** `evidence_pool_generator.py` with program config.

## Workflows

### Workflow 1: Program Bootstrap (multi-framework, 4–8 weeks)
**Goal:** stand up a compliance program covering 2–4 frameworks simultaneously.

```bash
# 1. Run framework selector with company profile
python scripts/framework_selector.py profile.json
# 2. For each applicable framework, identify the per-framework skill and run its gap analysis
# 3. Run cross-framework mapper to identify reuse opportunities
python scripts/cross_framework_mapper.py control_libs.json
# 4. Run evidence pool generator to consolidate
python scripts/evidence_pool_generator.py program.json
# 5. Cross-check with cs-compliance-officer agent
# 6. Output: prioritized program backlog with owners + dates
```

### Workflow 2: Annual Audit Calendar (yearly)
**Goal:** plan internal audit cycles covering all applicable frameworks.

```bash
# 1. Refresh framework selector if profile changed
python scripts/framework_selector.py profile.json
# 2. For each framework, run its internal-audit-plan tool
#    (e.g., aims_audit_scheduler.py for ISO 42001; isms_audit_scheduler.py for ISO 27001)
# 3. Coordinate the audit calendar across frameworks (auditor independence + capacity)
# 4. Run audit simulator for each framework to prep auditors
python scripts/audit_simulator.py scope.json
# 5. Output: integrated audit calendar with owners + auditor assignments
```

### Workflow 3: Pre-Certification Readiness (per new framework, 6–12 weeks)
**Goal:** prepare for an external certification audit.

```bash
# 1. Run gap analysis for the new framework
#    (ISO 42001: aims_gap_analyzer.py; ISO 27001: compliance_checker.py; SOC 2: gap_analyzer.py)
# 2. Run cross-framework mapper against already-certified frameworks
python scripts/cross_framework_mapper.py control_libs.json
# 3. Reuse evidence for HIGH-confidence mappings; build new for MEDIUM/LOW
# 4. Run audit simulator to dry-run the certification audit
python scripts/audit_simulator.py scope.json
# 5. Close remaining gaps before external auditor stage 1
```

### Workflow 4: Evidence Pool Consolidation (quarterly)
**Goal:** keep the unified evidence pool fresh + reusable.

```bash
# 1. Refresh evidence pool generator
python scripts/evidence_pool_generator.py program.json
# 2. Identify HIGH-reuse-leverage artefacts (1 evidence -> 5+ controls)
# 3. Confirm evidence freshness (within retention requirement per framework)
# 4. Audit the evidence pool itself (no orphan controls, no stale evidence)
```

## Output Standards

```
**Bottom Line:** [one sentence — what's the multi-framework picture + biggest reuse opportunity]
**The Decision:** [one of: framework-set | overlap-map | audit-plan | evidence-consolidation]
**The Evidence:** [framework names + control IDs from the tool, not adjectives]
**How to Act:** [3 concrete next steps with owners + dates]
**Your Decision:** [the call only the compliance officer can make — which frameworks to pursue, audit cycle priority, evidence-reuse policy]
```

## Adjacent Skills

- `ra-qm-team/skills/iso42001-specialist/` — ISO 42001 deep-dive (paired with compliance-team-iso42001 plugin)
- `ra-qm-team/skills/eu-ai-act-specialist/` — EU AI Act deep-dive (paired with compliance-team-eu-ai-act plugin)
- `ra-qm-team/skills/information-security-manager-iso27001/` — ISO 27001 ISMS deep-dive
- `ra-qm-team/skills/quality-manager-qms-iso13485/` — ISO 13485 QMS deep-dive
- `ra-qm-team/skills/gdpr-dsgvo-expert/` — GDPR deep-dive
- `ra-qm-team/skills/soc2-compliance/` — SOC 2 deep-dive
- `ra-qm-team/skills/fda-consultant-specialist/` — FDA QSR deep-dive
- `ra-qm-team/skills/mdr-745-specialist/` — EU MDR 745 deep-dive
- `ra-qm-team/skills/risk-management-specialist/` — ISO 14971 deep-dive
- `c-level-advisor/chief-ai-officer-advisor/` — Executive AI risk decisions (build-vs-buy, model selection)
- `c-level-advisor/skills/general-counsel-advisor/` — Legal review for novel cases

## References

- [compliance_os_pattern.md](references/compliance_os_pattern.md) — The meta-framework architecture (configure → map → simulate → consolidate → review); when to use vs not
- [cross_framework_overlap.md](references/cross_framework_overlap.md) — The 9-framework × control-family overlap table with mapping confidence (Phase 3 expands to 12 frameworks via `cross_framework_mapper.py`)
- [audit_simulation_methodology.md](references/audit_simulation_methodology.md) — ISO 19011 + IIA IPPF + AICPA AT-C audit-simulation principles + severity distribution heuristics
- [evidence_management.md](references/evidence_management.md) — Evidence pool design + retention + freshness + reuse-leverage scoring
- [multi_framework_audit_playbook.md](references/multi_framework_audit_playbook.md) — Integrated audit programme for 2+ frameworks (Phase 2)
- [evidence_artifact_reuse_index.md](references/evidence_artifact_reuse_index.md) — Empirically-derived reuse-leverage ranking across all 12 frameworks (Phase 3)

## Phase 3 Asset: Mock Audit Scenario Library

`assets/mock_audit_library.json` — 205 pre-built finding scenarios spanning 12 frameworks + 26 themes + 4 severity levels (34 critical, 88 major, 54 minor, 29 observation). Each scenario tags applicable frameworks; cross-reference `scripts/cross_framework_mapper.py` merged-controls catalogue to resolve framework-specific control IDs. Use as input to enrich `audit_simulator.py` mock audits, as a training resource for new internal auditors, or as the seed for finding-pattern detection across multi-framework programmes.

---

**Version:** 1.2.0
**Status:** Production Ready
