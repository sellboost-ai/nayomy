---
name: "compliance-readiness"
description_en: "/cs:compliance-readiness <program> — Multi-framework compliance officer 6-question forcing interrogation of any compliance program. Use before starting a new framework, planning the annual audit calendar, or preparing for certification stage 1."
description_tr: "/cs:compliance-readiness <program> — Herhangi bir compliance programını 6 sorulu zorlayıcı sorgulama yöntemiyle değerlendiren multi-framework compliance aracı. Yeni bir framework başlamadan önce, yıllık audit takvimini planlarken veya sertifikasyon aşama 1'e hazırlanırken kullanın."
category: "Design"
repo: "alirezarezvani/claude-skills"
stars: 18572
url: "https://github.com/alirezarezvani/claude-skills/blob/HEAD/.gemini/skills/compliance-readiness/SKILL.md"
path: ".gemini/skills/compliance-readiness/SKILL.md"
is_collection: false
body_length: 5211
has_scripts: false
has_references: false
has_examples: false
related_files: []
body_tr: |-
  # /cs:compliance-readiness — Uyum Sağlama Müdürü Zorlayıcı Soruları
  
  **Komut:** `/cs:compliance-readiness <program>`
  
  Multi-framework uyum sağlama müdürü, herhangi bir uyum sağlama programını baskı altında test eder. Yeni bir framework benimsemeden, denetim döngüsü planlamasından veya sertifikasyon hazırlık onayından önce altı soru.
  
  ## Ne Zaman Çalıştırılır
  
  - Yeni bir uyum sağlama framework'ü benimsemeden önce
  - Yıllık denetim takvimi kesinleştirilmesinden önce
  - Sertifikasyon aşama 1 hazırlık onayından önce
  - Yönetim değerlendirmesinden önce (Madde 9.3, tüm framework'ler)
  - Kanıt toplama çabası yıldan yıla %50+ artmışsa (kötü işaret)
  - Denetim %15'ten fazla kritik bulgu üretmişse
  
  ## Altı Uyum Sağlama Müdürü Sorusu
  
  ### 1. Her geçerli framework'ü adlandırdınız mı?
  **Framework seçici çalıştırılmadı, savunulabilir kapsam yok.**
  - `framework_selector.py` komut dosyasını şirket profiliyle çalıştırın
  - Bir framework'ü unutmak, denetim programını daha sonra yeniden oluşturmak anlamına gelir
  - Sektöre özgü ek katmanları dikkatle inceleyin (finans: NYDFS, FINMA; sağlık: HIPAA, ISO 13485; yapay zeka: ISO 42001 + EU AI Act)
  
  ### 2. Framework'ler nerede örtüşüyor ve yeniden kullanım kaldıracı nedir?
  **Tek kanıt -> N kontrol = multi-framework verimliliğinin temeldir.**
  - `cross_framework_mapper.py` komut dosyasını etkinleştirilen framework'lerle çalıştırın
  - YÜKSEK güvenli eşlemeler: aynı kanıt; ORTA: mevcut + ek katman; DÜŞÜK: yeni artefakt
  - Örtüşme analizi olmadan, aynı erişim-inceleme kayıtlarını 3 kez toplayacaksınız
  
  ### 3. Her artefakta kim sahip ve yeniden kullanım kaldıracı puanı nedir?
  **Sorumluluğu olmayan ortaklaşa sahiplik, eski kanıtın en yaygın nedenidir.**
  - Artefakt envanteri için `evidence_pool_generator.py` komut dosyasını çalıştırın
  - YÜKSEK kaldıraçlı artefaktlar (≥ 5 eşleme) önce inşa edilir
  - Her artefakta bir sorumlu sahibi olması gerekir
  - Eski kanıt etkili bir boşluktur — artefakt geçmişte var olsa bile
  
  ### 4. Denetim takvimi nedir ve denetçi bağımsızlığı korunuyor mu?
  **Gözetim denetimleri aynı hafta yığılması kötü işaret.**
  - Framework başına denetim planı araçlarını kullanın (aims_audit_scheduler, isms_audit_scheduler, audit_schedule_optimizer)
  - Denetçi kendi çalışmasını denetleyemez (Madde 9.2, tüm ISO standartlarında)
  - Küçük takımlar için: denetçileri döndürün + ara sıra harici denetçi
  
  ### 5. Simülasyon denetimi ne üretir ve ağırlık dağılımı sağlıklı mı?
  **Simülasyon denetimi yok, hazırlık sinyali yok.**
  - `audit_simulator.py` komut dosyasını framework + kapsam ile çalıştırın
  - Sağlıklı dağılım: ≥ %40 gözlem, ≤ %15 kritik
  - Tüm kritik bulgular = yıkıcı denetim VEYA gerçekten başarısız program
  - Tüm gözlem bulguları = denetim çok yüzeysel
  
  ### 6. Framework'ler arasında yönetim değerlendirmesi sıklığı nedir?
  **Her framework kendi yönetim değerlendirmesini ister; entegre bir değerlendirme (Ek SL başına) 5x yönetici zamanı tasarrufu sağlar.**
  - Etkinleştirilen tüm framework'lerin Madde 9.3 girişlerini kapsayan bir üç aylık çapraz framework değerlendirmesi planlayın
  - Girdiler: risk kaydı değişiklikleri, açık uyumsuzluklar, denetim bulguları, olaylar, kayma, KPI'lar
  - Çıktılar: eylem öğeleri, kaynak kararları, kapsam ayarlamaları
  
  ## İş Akışı
  
  ```bash
  # 1. Framework seçimi
  python ../../skills/compliance-os/scripts/framework_selector.py profile.json
  
  # 2. Cross-framework örtüşmesi
  python ../../skills/compliance-os/scripts/cross_framework_mapper.py program.json
  
  # 3. Kanıt havuzu konsolidasyonu
  python ../../skills/compliance-os/scripts/evidence_pool_generator.py program.json
  
  # 4. Simülasyon denetimi (framework başına)
  python ../../skills/compliance-os/scripts/audit_simulator.py scope.json
  ```
  
  ## Çıktı Formatı
  
  ```markdown
  # Uyum Sağlama Hazırlığı: <program>
  **Tarih:** YYYY-MM-DD
  
  ## Alınmakta Olan Karar
  [framework-set | audit-calendar | certification-readiness | evidence-consolidation]
  
  ## Framework Seti
  - Geçerli: <liste>
  - Bağlayıcı (düzenlemeler): <sayı>
  - Sertifikalandırılabilir: <sayı>
  - Eksik bağımlılıklar: <liste>
  
  ## Cross-Framework Örtüşmesi
  - Kapsam içindeki birleştirilmiş kontroller: N
  - Yüksek kaldıraçlı artefaktlar (≥ 5 eşleme): M
  - En iyi yeniden kullanım fırsatları: <top 5 artefakt>
  
  ## Kanıt Havuzu
  - Katalogdaki artefaktlar: N
  - Yüksek kaldıraçlı sayısı: M
  - Eski kanıt oranı: X%
  - Sahibi olmayan artefaktlar: K
  
  ## Denetim Takvimi
  - Bu yıl planlanan framework'ler: <liste>
  - Denetçi bağımsızlığı korunuyor: E/H
  - Çatışmalar: <liste>
  
  ## Simülasyon Denetimi Sonuçları (framework başına)
  - <framework>: toplam bulgular N, kritik X%, gözlem Y%, sağlıklı dağılım: E/H
  
  ## Karar
  🟢 HAZIR | 🟡 AŞAMA-2-ADAY | 🔴 HAZIR DEĞİL
  
  ## En İyi 3 Eylem
  [3 somut sonraki adım, sahip + tarihler ile]
  ```
  
  ## Yönlendirme
  
  - `/cs:aims-audit` — ISO 42001'e özgü zorlayıcı sorular için
  - `/cs:ai-act-readiness` — EU AI Act'e özgü zorlayıcı sorular için
  - `/cs:ciso-review` — siber güvenlik stratejisi için
  - `/cs:caio-review` — yönetici yapay zeka stratejisi için
  - `/cs:gc-review` — yeni durum hukuki incelemesi için
  - `/cs:decide` — kararı kaydetmek için
  - `/cs:freeze 30` — sertifikasyon taahhütlerinde (çok yıllı finansal etki)
  
  ## İlgili
  
  - Ajan: [`cs-compliance-officer`](../../agents/cs-compliance-officer.md)
  - Beceri: [`compliance-os`](../compliance-os/SKILL.md)
  - Bitişik: `ra-qm-team/skills/iso42001-specialist/`, `ra-qm-team/skills/eu-ai-act-specialist/`, `ra-qm-team/skills/information-security-manager-iso27001/`, `ra-qm-team/skills/soc2-compliance/`, `ra-qm-team/skills/gdpr-dsgvo-expert/`
  
  ---
  
  **Sürüm:** 1.0.0
---

# /cs:compliance-readiness — Compliance Officer Forcing Questions

**Command:** `/cs:compliance-readiness <program>`

The multi-framework compliance officer pressure-tests any compliance program. Six questions before any new-framework commitment, audit cycle planning, or certification readiness sign-off.

## When to Run

- Before adopting a new compliance framework
- Before annual audit calendar finalization
- Before certification stage 1 readiness sign-off
- Before management review (Clause 9.3 across frameworks)
- When evidence-collection effort has grown 50%+ year-over-year (a smell)
- When an audit produced > 15% critical findings

## The Six Compliance Officer Questions

### 1. Have you named every applicable framework?
**No framework selector run, no defensible scope.**
- Run `framework_selector.py` with company profile
- Forgetting a framework means rebuilding the audit program later
- Pay attention to industry-specific overlays (financial: NYDFS, FINMA; healthcare: HIPAA, ISO 13485; AI: ISO 42001 + EU AI Act)

### 2. Where do the frameworks overlap, and what's the reuse leverage?
**Single evidence -> N controls = the cornerstone of multi-framework efficiency.**
- Run `cross_framework_mapper.py` with enabled frameworks
- HIGH-confidence mappings: same evidence; MEDIUM: existing + overlay; LOW: new artefact
- Without overlap analysis, you'll collect the same access-review records 3 times

### 3. Who owns each artefact, and what's the reuse-leverage score?
**Joint ownership without accountability is the most common cause of stale evidence.**
- Run `evidence_pool_generator.py` for the artefact inventory
- HIGH-leverage artefacts (≥ 5 mappings) get built first
- Each artefact needs one accountable owner
- Stale evidence is an effective gap — even if the artefact existed historically

### 4. What's the audit calendar, and is auditor independence respected?
**Surveillance audits stacking in the same week is a smell.**
- Use per-framework audit-plan tools (aims_audit_scheduler, isms_audit_scheduler, audit_schedule_optimizer)
- Auditor cannot audit their own work (Clause 9.2 across all ISO standards)
- For small teams: rotate auditors + occasional external auditor

### 5. What does a mock audit produce, and is the severity distribution healthy?
**No mock audit, no readiness signal.**
- Run `audit_simulator.py` with framework + scope
- Healthy distribution: ≥ 40% observation, ≤ 15% critical
- All-critical findings = destructive audit OR genuinely failing program
- All-observation findings = audit too superficial

### 6. What's the management review cadence across frameworks?
**Each framework wants its own management review; an integrated review (per Annex SL) saves 5x exec time.**
- Schedule one quarterly cross-framework review covering all enabled frameworks' Clause 9.3 inputs
- Inputs: risk register changes, open nonconformities, audit findings, incidents, drift, KPIs
- Outputs: action items, resource decisions, scope adjustments

## Workflow

```bash
# 1. Framework selection
python ../../skills/compliance-os/scripts/framework_selector.py profile.json

# 2. Cross-framework overlap
python ../../skills/compliance-os/scripts/cross_framework_mapper.py program.json

# 3. Evidence pool consolidation
python ../../skills/compliance-os/scripts/evidence_pool_generator.py program.json

# 4. Mock audit (per framework)
python ../../skills/compliance-os/scripts/audit_simulator.py scope.json
```

## Output Format

```markdown
# Compliance Readiness: <program>
**Date:** YYYY-MM-DD

## The Decision Being Made
[framework-set | audit-calendar | certification-readiness | evidence-consolidation]

## Framework Set
- Applicable: <list>
- Binding (regulations): <count>
- Certifiable: <count>
- Missing dependencies: <list>

## Cross-Framework Overlap
- Total merged controls in scope: N
- High-leverage artefacts (≥ 5 mappings): M
- Top reuse opportunities: <top 5 artefacts>

## Evidence Pool
- Artefacts in catalog: N
- High-leverage count: M
- Stale evidence rate: X%
- Unowned artefacts: K

## Audit Calendar
- Frameworks scheduled this year: <list>
- Auditor independence respected: Y/N
- Conflicts: <list>

## Mock Audit Results (per framework)
- <framework>: total findings N, critical X%, observation Y%, healthy distribution: Y/N

## Verdict
🟢 READY | 🟡 STAGE-2-CANDIDATE | 🔴 NOT-READY

## Top 3 Actions
[3 concrete next steps with owners + dates]
```

## Routing

- `/cs:aims-audit` — for ISO 42001-specific forcing questions
- `/cs:ai-act-readiness` — for EU AI Act-specific forcing questions
- `/cs:ciso-review` — for cybersecurity strategy
- `/cs:caio-review` — for executive AI strategy
- `/cs:gc-review` — for novel-case legal review
- `/cs:decide` — to log the verdict
- `/cs:freeze 30` — on certification commitments (multi-year financial impact)

## Related

- Agent: [`cs-compliance-officer`](../../agents/cs-compliance-officer.md)
- Skill: [`compliance-os`](../compliance-os/SKILL.md)
- Adjacent: `ra-qm-team/skills/iso42001-specialist/`, `ra-qm-team/skills/eu-ai-act-specialist/`, `ra-qm-team/skills/information-security-manager-iso27001/`, `ra-qm-team/skills/soc2-compliance/`, `ra-qm-team/skills/gdpr-dsgvo-expert/`

---

**Version:** 1.0.0
